// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { reactive, nonreactive, Transaction, options, Reentrance, Rx, LoggingOptions, Collection, Item, ObservableObject, raw, MemberOptions } from "reactronic"
import { BlockCoords, BlockKind, Priority, Mode, Align, BlockArea, BlockBuilder, Block, Driver, SimpleDelegate, BlockDescriptor, BlockCtx } from "./Interfaces"
import { emitLetters, equalBlockCoords, parseBlockCoords, getCallerInfo } from "./Utils"

// Verstak

export class Verstak {
  static readonly shortFrameDuration = 16 // ms
  static readonly longFrameDuration = 300 // ms
  static currentRenderingPriority = Priority.Realtime
  static frameDuration = Verstak.longFrameDuration

  static claim<T = undefined, M = unknown, C = unknown, R = void>(
    driver: Driver<T>,
    builder?: BlockBuilder<T, M, C, R>,
    original?: BlockBuilder<T, M, C, R>): Block<T, M, C, R> {
    let result: BlockImpl<T, M, C, R>
    // Normalize parameters
    if (builder)
      builder.original = original
    else
      builder = original ?? {}
    let key = builder.key
    const owner = gCurrent?.instance
    if (owner) {
      // Check for coalescing separators or lookup for existing block
      let ex: Item<BlockImpl<any, any, any, any>> | undefined = undefined
      const children = owner.descriptor.children
      if (driver.isRow) {
        const last = children.lastClaimedItem()
        if (last?.instance?.descriptor.driver === driver)
          ex = last
      }
      ex ??= children.claim(
        key = key || generateKey(owner), undefined,
        "nested blocks can be declared inside render function only")
      // Reuse existing block or claim a new one
      if (ex) {
        // Reuse existing block
        result = ex.instance
        const d = result.descriptor
        if (d.driver !== driver && driver !== undefined)
          throw new Error(`changing block driver is not yet supported: "${result.descriptor.driver.name}" -> "${driver?.name}"`)
        const exTriggers = d.builder.triggers
        if (triggersAreEqual(builder.triggers, exTriggers))
          builder.triggers = exTriggers // preserve triggers instance
        d.builder = builder
      }
      else {
        // Create new block
        result = new BlockImpl<T, M, C, R>(key || generateKey(owner), driver, owner, builder)
        result.descriptor.item = children.add(result)
      }
    }
    else {
      // Create new root block
      result = new BlockImpl<T, M, C, R>(key || "", driver, owner, builder)
      result.descriptor.item = Collection.createItem(result)
      triggerRendering(result.descriptor.item)
    }
    return result
  }

  static get block(): Block {
    if (gCurrent === undefined)
      throw new Error("current block is undefined")
    return gCurrent.instance
  }

  static renderNestedTreesThenDo(action: (error: unknown) => void): void {
    runRenderNestedTreesThenDo(undefined, action)
  }

  static getDefaultLoggingOptions(): LoggingOptions | undefined {
    return BlockImpl.logging
  }

  static setDefaultLoggingOptions(logging?: LoggingOptions): void {
    BlockImpl.logging = logging
  }
}

// BaseDriver

export class BaseDriver<T, C = unknown> implements Driver<T, C> {
  public static readonly fragment = new BaseDriver<any>(
    "fragment", false, b => b.kind = BlockKind.Group)

  constructor(
    readonly name: string,
    readonly isRow: boolean,
    readonly preset?: SimpleDelegate<T>) {
  }

  claim(block: Block<T, unknown, C>): void {
    const b = block as BlockImpl<T, unknown, C>
    chainedClaim(b, b.descriptor.builder)
  }

  create(block: Block<T, unknown, C>, b: { native?: T, controller?: C }): void {
    chainedCreate(block, block.descriptor.builder)
  }

  initialize(block: Block<T, unknown, C>): void {
    const b = block as BlockImpl<T, unknown, C>
    this.preset?.(b)
    chainedInitialize(b, b.descriptor.builder)
  }

  mount(block: Block<T, unknown, C>): void {
    // nothing to do by default
  }

  render(block: Block<T, unknown, C>): void | Promise<void> {
    chainedRender(block, block.descriptor.builder)
  }

  finalize(block: Block<T, unknown, C>, isLeader: boolean): boolean {
    const b = block as BlockImpl<T, unknown, C>
    chainedFinalize(b, b.descriptor.builder)
    return isLeader // treat children as finalization leaders as well
  }

  applyKind(block: Block<T, any, C, any>, value: BlockKind): void { /* nop */ }
  applyCoords(block: Block<T, any, C, any>, value: BlockCoords | undefined): void { /* nop */ }
  applyWidthGrowth(block: Block<T, any, C, any>, value: number): void { /* nop */ }
  applyMinWidth(block: Block<T, any, C, any>, value: string): void { /* nop */ }
  applyMaxWidth(block: Block<T, any, C, any>, value: string): void { /* nop */ }
  applyHeightGrowth(block: Block<T, any, C, any>, value: number): void { /* nop */ }
  applyMinHeight(block: Block<T, any, C, any>, value: string): void { /* nop */ }
  applyMaxHeight(block: Block<T, any, C, any>, value: string): void { /* nop */ }
  applyContentAlignment(block: Block<T, any, C, any>, value: Align): void { /* nop */ }
  applyBlockAlignment(block: Block<T, any, C, any>, value: Align): void { /* nop */ }
  applyContentWrapping(block: Block<T, any, C, any>, value: boolean): void { /* nop */ }
  applyOverlayVisible(block: Block<T, any, C, any>, value: boolean | undefined): void { /* nop */ }
  applyStyle(block: Block<T, any, C, any>, secondary: boolean, styleName: string, enabled?: boolean): void { /* nop */ }
}

// Utils

function generateKey(owner: BlockImpl): string {
  const n = owner.descriptor.numerator++
  const lettered = emitLetters(n)
  let result: string
  if (Rx.isLogging)
    result = `·${getCallerInfo(lettered)}`
  else
    result = `·${lettered}`
  return result
}

function chainedMode(builder?: BlockBuilder<any, any, any, any>): Mode {
  return builder?.modes ?? (builder?.original ? chainedMode(builder?.original) : Mode.Default)
}

function chainedClaim(block: Block<any>, builder: BlockBuilder): void {
  const claim = builder.claim
  const original = builder.original
  if (claim)
    claim(block, original ? () => chainedClaim(block, original) : NOP)
  else if (original)
    chainedClaim(block, original)
}

function chainedCreate(block: Block, builder: BlockBuilder): void {
  const create = builder.create
  const original = builder.original
  if (create)
    create(block, original ? () => chainedCreate(block, original) : NOP)
  else if (original)
    chainedCreate(block, original)
}

function chainedInitialize(block: Block<any>, builder: BlockBuilder): void {
  const initialize = builder.initialize
  const original = builder.original
  if (initialize)
    initialize(block, original ? () => chainedInitialize(block, original) : NOP)
  else if (original)
    chainedInitialize(block, original)
}

function chainedRender(block: Block, builder: BlockBuilder): void {
  const render = builder.render
  const original = builder.original
  if (render)
    render(block, original ? () => chainedRender(block, original) : NOP)
  else if (original)
    chainedRender(block, original)
}

function chainedFinalize(block: Block<any>, builder: BlockBuilder): void {
  const finalize = builder.finalize
  const original = builder.original
  if (finalize)
    finalize(block, original ? () => chainedFinalize(block, original) : NOP)
  else if (original)
    chainedFinalize(block, original)
}

export class StaticDriver<T> extends BaseDriver<T> {
  readonly element: T

  constructor(element: T, name: string, isRow: boolean, preset?: SimpleDelegate<T>) {
    super(name, isRow, preset)
    this.element = element
  }

  create(block: Block<T, unknown, unknown, void>, b: { native?: T; controller?: unknown }): void {
    b.native = this.element
  }
}

// CursorCommandDriver

export class CursorCommand {
  absolute?: string
  columnShift?: number
  rowShift?: number
}

export class CursorCommandDriver extends BaseDriver<CursorCommand, void>{
  constructor() {
    super("cursor", false, b => b.kind = BlockKind.Cursor)
  }

  create(block: Block<CursorCommand, unknown, void, void>,
    b: { native?: CursorCommand; controller?: void }): void {
    b.native = new CursorCommand()
    super.create(block, b)
  }
}

// ContextVariable

export class ContextVariable<T extends Object = Object> {
  readonly defaultValue: T | undefined

  constructor(defaultValue?: T) {
    this.defaultValue = defaultValue
  }

  set value(value: T) {
    BlockImpl.setContextVariableValue(this, value)
  }

  get value(): T {
    return BlockImpl.useContextVariableValue(this)
  }

  get valueOrUndefined(): T | undefined {
    return BlockImpl.tryUseContextVariable(this)
  }
}

// CursorPosition

class CursorPosition {
  x: number
  y: number
  runningMaxX: number
  runningMaxY: number
  flags: CursorFlags

  constructor(prev: CursorPosition) {
    this.x = prev.x
    this.y = prev.y
    this.runningMaxX = prev.runningMaxX
    this.runningMaxY = prev.runningMaxY
    this.flags = prev.flags & ~CursorFlags.OwnCursorPosition
  }
}

enum CursorFlags {
  None = 0,
  OwnCursorPosition = 1,
  UsesRunningColumnCount = 2,
  UsesRunningRowCount = 4,
}

const UndefinedBlockCoords = Object.freeze({ x1: 0, y1: 0, x2: 0, y2: 0 })
const InitialCursorPosition: CursorPosition = Object.freeze(new CursorPosition({ x: 1, y: 1, runningMaxX: 0, runningMaxY: 0, flags: CursorFlags.None }))

// BlockCtxImpl

class BlockCtxImpl<T extends Object = Object> extends ObservableObject implements BlockCtx<T> {
  @raw next: BlockCtxImpl<object> | undefined
  @raw variable: ContextVariable<T>
  value: T

  constructor(variable: ContextVariable<T>, value: T) {
    super()
    this.next = undefined
    this.variable = variable
    this.value = value
  }
}

// BlockDescriptorImpl

class BlockDescriptorImpl<T = unknown, M = unknown, C = unknown, R = void> implements BlockDescriptor<T, M, C, R> {
  readonly key: string
  readonly driver: Driver<T>
  builder: BlockBuilder<T, M, C, R>
  readonly level: number
  readonly owner: BlockImpl
  host: BlockImpl
  readonly children: Collection<BlockImpl>
  item: Item<BlockImpl> | undefined
  stamp: number
  outer: BlockImpl
  context: BlockCtxImpl<any> | undefined
  numerator: number
  maxColumnCount: number = 0
  maxRowCount: number = 0
  cursorPosition?: CursorPosition

  constructor(key: string, driver: Driver<T>,
    builder: Readonly<BlockBuilder<T, M, C, R>>,
    self: BlockImpl<T, M, C, R>, owner: BlockImpl | undefined) {
    this.key = key
    this.driver = driver
    this.builder = builder
    if (owner) {
      const d = owner.descriptor
      this.level = d.level + 1
      this.owner = owner
      this.outer = d.context ? owner : d.outer
    }
    else {
      this.level = 1
      this.owner = owner = self
      this.outer = self
    }
    this.host = self // block is unmounted
    this.children = new Collection<BlockImpl>(getBlockKey, true)
    this.item = undefined
    this.stamp = 0
    this.context = undefined
    this.numerator = 0
    this.maxColumnCount = 0
    this.maxRowCount = 0
    this.cursorPosition = undefined
  }
}

// BlockImpl

class BlockImpl<T = any, M = any, C = any, R = any> implements Block<T, M, C, R> {
  // Static properties
  static grandCount: number = 0
  static disposableCount: number = 0
  static logging: LoggingOptions | undefined = undefined

  // System-managed properties
  readonly descriptor: BlockDescriptorImpl<T, M, C, R>
  native: T

  // User-defined properties
  model: M
  controller: C
  private _kind: BlockKind
  private _area: BlockArea
  private _coords: BlockCoords
  private _widthGrowth: number
  private _minWidth: string
  private _maxWidth: string
  private _heightGrowth: number
  private _minHeight: string
  private _maxHeight: string
  private _contentAlignment: Align
  private _blockAlignment: Align
  private _contentWrapping: boolean
  private _overlayVisible: boolean | undefined
  private _hasStyles: boolean
  childrenShuffling: boolean
  renderingPriority: Priority

  constructor(key: string, driver: Driver<T>,
    owner: BlockImpl | undefined, builder: BlockBuilder<T, M, C, R>) {
    // System-managed properties
    this.descriptor = new BlockDescriptorImpl(key, driver, builder, this, owner)
    this.native = undefined as any as T // hack
    // User-defined properties
    this.model = undefined as any
    this.controller = undefined as any as C // hack
    this._kind = BlockKind.Row
    this._area = undefined
    this._coords = UndefinedBlockCoords
    this._widthGrowth = 0
    this._minWidth = ""
    this._maxWidth = ""
    this._heightGrowth = 0
    this._minHeight = ""
    this._maxHeight = ""
    this._contentAlignment = Align.Default
    this._blockAlignment = Align.Default
    this._contentWrapping = false
    this._overlayVisible = undefined
    this._hasStyles = false
    this.childrenShuffling = false
    this.renderingPriority = Priority.Realtime
    // Monitoring
    BlockImpl.grandCount++
    if (this.isOn(Mode.SeparateReaction))
      BlockImpl.disposableCount++
  }

  prepareForRender(): void {
    this._area = undefined // reset
    this._hasStyles = false // reset
  }

  @reactive
  @options({
    reentrance: Reentrance.CancelPrevious,
    triggeringArgs: true,
    noSideEffects: false,
  })
  render(_triggers: unknown): void {
    // triggers parameter is used to enforce rendering by owner
    renderNow(this.descriptor.item!)
  }

  isOn(mode: Mode): boolean { return (chainedMode(this.descriptor.builder) & mode) === mode }

  get isInitialRendering(): boolean { return this.descriptor.stamp === 2 }
  get isSequential(): boolean { return this.descriptor.children.isStrict }
  set isSequential(value: boolean) { this.descriptor.children.isStrict = value }
  get isAuxiliary(): boolean { return this.kind > BlockKind.Note } // Row, Group, Cursor
  get isBand(): boolean { return this.kind === BlockKind.Band }
  get isTable(): boolean { return this.kind === BlockKind.Table }

  get isAutoMountEnabled(): boolean { return !this.isOn(Mode.ManualMount) && this.descriptor.host !== this }
  get isMoved(): boolean { return this.descriptor.owner.descriptor.children.isMoved(this.descriptor.item!) }

  get kind(): BlockKind { return this._kind }
  set kind(value: BlockKind) {
    if (value !== this._kind || this.descriptor.stamp < 2) {
      this.descriptor.driver.applyKind(this, value)
      this._kind = value
    }
  }

  get area(): BlockArea { return this._area }
  set area(value: BlockArea) {
    const d = this.descriptor
    const driver = d.driver
    if (!driver.isRow) {
      const owner = d.owner.descriptor
      const cursorPosition = d.item!.prev?.instance.descriptor.cursorPosition ?? InitialCursorPosition
      const newCursorPosition = d.cursorPosition = owner.children.isStrict ? new CursorPosition(cursorPosition) : undefined
      const isCursorBlock = driver instanceof CursorCommandDriver
      const coords = getEffectiveBlockCoords(!isCursorBlock,
        value, owner.maxColumnCount, owner.maxRowCount,
        cursorPosition, newCursorPosition)
      if (!equalBlockCoords(coords, this._coords)) {
        driver.applyCoords(this, coords)
        this._coords = coords
      }
      this._area = value ?? { }
    }
    else
      this.rowBreak()
  }

  get widthGrowth(): number { return this._widthGrowth }
  set widthGrowth(value: number) {
    if (value !== this._widthGrowth) {
      this.descriptor.driver.applyWidthGrowth(this, value)
      this._widthGrowth = value
    }
  }

  get minWidth(): string { return this._minWidth }
  set minWidth(value: string) {
    if (value !== this._minWidth) {
      this.descriptor.driver.applyMinWidth(this, value)
      this._minWidth = value
    }
  }

  get maxWidth(): string { return this._maxWidth }
  set maxWidth(value: string) {
    if (value !== this._maxWidth) {
      this.descriptor.driver.applyMaxWidth(this, value)
      this._maxWidth = value
    }
  }

  get heightGrowth(): number { return this._heightGrowth }
  set heightGrowth(value: number) {
    if (value !== this._heightGrowth) {
      this.descriptor.driver.applyHeightGrowth(this, value)
      this._heightGrowth = value
    }
  }

  get minHeight(): string { return this._minHeight }
  set minHeight(value: string) {
    if (value !== this._minHeight) {
      this.descriptor.driver.applyMinHeight(this, value)
      this._minHeight = value
    }
  }

  get maxHeight(): string { return this._maxHeight }
  set maxHeight(value: string) {
    if (value !== this._maxHeight) {
      this.descriptor.driver.applyMaxHeight(this, value)
      this._maxHeight = value
    }
  }

  get contentAlignment(): Align { return this._contentAlignment }
  set contentAlignment(value: Align) {
    if (value !== this._contentAlignment) {
      this.descriptor.driver.applyContentAlignment(this, value)
      this._contentAlignment = value
    }
  }

  get blockAlignment(): Align { return this._blockAlignment }
  set blockAlignment(value: Align) {
    if (value !== this._blockAlignment) {
      this.descriptor.driver.applyBlockAlignment(this, value)
      this._blockAlignment = value
    }
  }

  get contentWrapping(): boolean { return this._contentWrapping }
  set contentWrapping(value: boolean) {
    if (value !== this._contentWrapping) {
      this.descriptor.driver.applyContentWrapping(this, value)
      this._contentWrapping = value
    }
  }

  get overlayVisible(): boolean | undefined { return this._overlayVisible }
  set overlayVisible(value: boolean | undefined) {
    if (value !== this._overlayVisible) {
      this.descriptor.driver.applyOverlayVisible(this, value)
      this._overlayVisible = value
    }
  }

  style(styleName: string, enabled?: boolean): void {
    this.descriptor.driver.applyStyle(this, this._hasStyles, styleName, enabled)
    this._hasStyles = true
  }

  configureReactronic(options: Partial<MemberOptions>): MemberOptions {
    if (this.descriptor.stamp !== 1 || !this.isOn(Mode.SeparateReaction))
      throw new Error("reactronic can be configured only for blocks with separate reaction mode and only inside initialize")
    return Rx.getController(this.render).configure(options)
  }

  static get curr(): Item<BlockImpl> {
    if (!gCurrent)
      throw new Error("current block is undefined")
    return gCurrent
  }

  static tryUseContextVariable<T extends Object>(variable: ContextVariable<T>): T | undefined {
    let b = BlockImpl.curr.instance
    while (b.descriptor.context?.variable !== variable && b.descriptor.owner !== b)
      b = b.descriptor.outer
    return b.descriptor.context?.value as any // TODO: to get rid of any
  }

  static useContextVariableValue<T extends Object>(variable: ContextVariable<T>): T {
    const result = BlockImpl.tryUseContextVariable(variable) ?? variable.defaultValue
    if (!result)
      throw new Error("context doesn't exist")
    return result
  }

  static setContextVariableValue<T extends Object>(variable: ContextVariable<T>, value: T | undefined): void {
    const b = BlockImpl.curr.instance
    const d = b.descriptor
    const owner = d.owner
    const hostCtx = nonreactive(() => owner.descriptor.context?.value)
    if (value && value !== hostCtx) {
      if (hostCtx)
        d.outer = owner
      else
        d.outer = owner.descriptor.outer
      Transaction.run({ separation: true }, () => {
        const ctx = d.context
        if (ctx) {
          ctx.variable = variable
          ctx.value = value // update context thus invalidate observers
        }
        else
          d.context = new BlockCtxImpl<any>(variable, value)
      })
    }
    else if (hostCtx)
      d.outer = owner
    else
      d.outer = owner.descriptor.outer
  }

  private rowBreak(): void {
    const d = this.descriptor
    const cursorPosition = d.item!.prev?.instance.descriptor.cursorPosition ?? InitialCursorPosition
    const newCursorPosition = this.descriptor.cursorPosition = new CursorPosition(cursorPosition)
    newCursorPosition.x = 1
    newCursorPosition.y = newCursorPosition.runningMaxY + 1
  }
}

// Internal

function getBlockKey(block: BlockImpl): string | undefined {
  const d = block.descriptor
  return d.stamp >= 0 ? d.key : undefined
}

function getEffectiveBlockCoords(
  isRegularBlock: boolean, area: BlockArea, maxX: number, maxY: number,
  cursorPosition: CursorPosition, newCursorPosition?: CursorPosition): BlockCoords {
  let result: BlockCoords // this comment just prevents syntax highlighting in VS code
  if (typeof(area) === "string") {
    // Absolute positioning
    result = parseBlockCoords(area, { x1: 0, y1: 0, x2: 0, y2: 0 })
    absolutizeBlockCoords(result, cursorPosition.x, cursorPosition.y,
      maxX || Infinity, maxY || Infinity, result)
    if (newCursorPosition) {
      newCursorPosition.x = isRegularBlock ? result.x2 + 1 : result.x1
      newCursorPosition.y = result.y1
      newCursorPosition.flags = CursorFlags.OwnCursorPosition
    }
  }
  else if (newCursorPosition) {
    // Relative positioning
    let dx: number
    let dy: number // this comment just prevents syntax highlighting in VS code
    if (area) {
      dx = area.cellsOverWidth ?? 1
      dy = area.cellsOverHeight ?? 1
    }
    else // area === undefined
      dx = dy = 1
    // Arrange
    const runningX = maxX !== 0 ? maxX : cursorPosition.runningMaxX
    const runningY = maxY !== 0 ? maxY : cursorPosition.runningMaxY
    result = { x1: 0, y1: 0, x2: 0, y2: 0 }
    if (dx === 0 && isRegularBlock) {
      dx = runningX || 1
      newCursorPosition.flags = CursorFlags.UsesRunningColumnCount
    }
    if (dx >= 0) {
      if (isRegularBlock) {
        result.x1 = cursorPosition.x
        result.x2 = absolutizePosition(result.x1 + dx - 1, 0, maxX || Infinity)
        newCursorPosition.x = result.x2 + 1
      }
      else {
        result.x1 = result.x2 = cursorPosition.x + dx
        newCursorPosition.x = result.x2
      }
    }
    else {
      if (isRegularBlock) {
        result.x1 = Math.max(cursorPosition.x + dx, 1)
        result.x2 = cursorPosition.x
        newCursorPosition.x = result.x2 + 1
      }
      else {
        result.x1 = result.x2 = cursorPosition.x + dx
        newCursorPosition.x = result.x2
      }
    }
    if (dy === 0 && isRegularBlock) {
      dy = runningY || 1
      newCursorPosition.flags |= CursorFlags.UsesRunningRowCount
    }
    if (dy >= 0) {
      if (isRegularBlock) {
        result.y1 = cursorPosition.y
        result.y2 = absolutizePosition(result.y1 + dy - 1, 0, maxY || Infinity)
        if (result.y2 > newCursorPosition.runningMaxY)
          newCursorPosition.runningMaxY = result.y2
      }
      else
        result.y1 = result.y2 = cursorPosition.y + dy
    }
    else {
      if (isRegularBlock) {
        result.y1 = Math.max(cursorPosition.y + dy, 1)
        result.y2 = cursorPosition.y
      }
      else
        result.y1 = result.y2 = cursorPosition.y + dy
    }
  }
  else
    throw new Error("relative layout requires sequential children")
  return result
}

function runRenderNestedTreesThenDo(error: unknown, action: (error: unknown) => void): void {
  const curr = BlockImpl.curr
  const owner = curr.instance
  const children = owner.descriptor.children
  if (children.isMergeInProgress) {
    let promised: Promise<void> | undefined = undefined
    try {
      children.endMerge(error)
      // Finalize removed blocks
      for (const item of children.removedItems(true))
        triggerFinalization(item, true, true)
      if (!error) {
        // Lay out and render actual blocks
        const ownerIsBand = owner.isBand
        const sequential = children.isStrict
        let p1: Array<Item<BlockImpl>> | undefined = undefined
        let p2: Array<Item<BlockImpl>> | undefined = undefined
        let mounting = false
        let hostingRow = owner
        for (const item of children.items()) {
          if (Transaction.isCanceled)
            break
          const block = item.instance
          const isRow = block.descriptor.driver.isRow
          const host = isRow ? owner : hostingRow
          const p = block.renderingPriority ?? Priority.Realtime
          mounting = markToMountIfNecessary(mounting, host, item, children, sequential)
          if (p === Priority.Realtime)
            triggerRendering(item) // render synchronously
          else if (p === Priority.Normal)
            p1 = push(item, p1) // defer for P1 async rendering
          else
            p2 = push(item, p2) // defer for P2 async rendering
          if (ownerIsBand && isRow)
            hostingRow = block
        }
        // Render incremental children (if any)
        if (!Transaction.isCanceled && (p1 !== undefined || p2 !== undefined))
          promised = startIncrementalRendering(curr, children, p1, p2).then(
            () => action(error),
            e => action(e))
      }
    }
    finally {
      if (!promised)
        action(error)
    }
  }
}

function markToMountIfNecessary(mounting: boolean, host: BlockImpl,
  item: Item<BlockImpl>, children: Collection<BlockImpl>, sequential: boolean): boolean {
  // Detects element mounting when abstract blocks
  // exist among regular blocks with HTML elements
  const b = item.instance
  const d = b.descriptor
  if (b.native && !b.isOn(Mode.ManualMount)) {
    if (mounting || d.host !== host) {
      children.markAsMoved(item)
      mounting = false
    }
  }
  else if (sequential && children.isMoved(item))
    mounting = true // apply to the first block with an element
  d.host = host
  return mounting
}

async function startIncrementalRendering(
  owner: Item<BlockImpl>,
  allChildren: Collection<BlockImpl>,
  priority1?: Array<Item<BlockImpl>>,
  priority2?: Array<Item<BlockImpl>>): Promise<void> {
  const stamp = owner.instance.descriptor.stamp
  if (priority1)
    await renderIncrementally(owner, stamp, allChildren, priority1, Priority.Normal)
  if (priority2)
    await renderIncrementally(owner, stamp, allChildren, priority2, Priority.Background)
}

async function renderIncrementally(owner: Item<BlockImpl>, stamp: number,
  allChildren: Collection<BlockImpl>, items: Array<Item<BlockImpl>>,
  priority: Priority): Promise<void> {
  await Transaction.requestNextFrame()
  const block = owner.instance
  if (!Transaction.isCanceled || !Transaction.isFrameOver(1, Verstak.shortFrameDuration / 3)) {
    let outerPriority = Verstak.currentRenderingPriority
    Verstak.currentRenderingPriority = priority
    try {
      if (block.childrenShuffling)
        shuffle(items)
      const frameDurationLimit = priority === Priority.Background ? Verstak.shortFrameDuration : Infinity
      let frameDuration = Math.min(frameDurationLimit, Math.max(Verstak.frameDuration / 4, Verstak.shortFrameDuration))
      for (const child of items) {
        triggerRendering(child)
        if (Transaction.isFrameOver(1, frameDuration)) {
          Verstak.currentRenderingPriority = outerPriority
          await Transaction.requestNextFrame(0)
          outerPriority = Verstak.currentRenderingPriority
          Verstak.currentRenderingPriority = priority
          frameDuration = Math.min(4 * frameDuration, Math.min(frameDurationLimit, Verstak.frameDuration))
        }
        if (Transaction.isCanceled && Transaction.isFrameOver(1, Verstak.shortFrameDuration / 3))
          break
      }
    }
    finally {
      Verstak.currentRenderingPriority = outerPriority
    }
  }
}

function triggerRendering(item: Item<BlockImpl>): void {
  const b = item.instance
  const d = b.descriptor
  if (d.stamp >= 0) {
    if (b.isOn(Mode.SeparateReaction)) {
      if (d.stamp === 0) {
        Transaction.outside(() => {
          if (Rx.isLogging)
            Rx.setLoggingHint(b, d.key)
          Rx.getController(b.render).configure({
            order: d.level,
          })
        })
      }
      nonreactive(b.render, d.builder.triggers) // reactive auto-rendering
    }
    else
      renderNow(item)
  }
}

function mountIfNecessary(block: BlockImpl): void {
  const d = block.descriptor
  const driver = d.driver
  if (d.stamp === 0) {
    d.stamp = 1
    nonreactive(() => {
      driver.create(block, block)
      driver.initialize(block)
      if (block.isAutoMountEnabled)
        driver.mount(block)
    })
  }
  else if (block.isMoved && block.isAutoMountEnabled)
    nonreactive(() => driver.mount(block))
}

function renderNow(item: Item<BlockImpl>): void {
  const b = item.instance
  const d = b.descriptor
  if (d.stamp >= 0) { // if block is alive
    let result: unknown = undefined
    runInside(item, () => {
      try {
        mountIfNecessary(b)
        d.stamp++
        d.numerator = 0
        b.prepareForRender()
        d.children.beginMerge()
        const driver = d.driver
        result = driver.render(b)
        if (b.area === undefined && d.owner.isTable)
          b.area = undefined // automatic placement
        if (result instanceof Promise)
          result.then(
            v => { runRenderNestedTreesThenDo(undefined, NOP); return v },
            e => { console.log(e); runRenderNestedTreesThenDo(e ?? new Error("unknown error"), NOP) })
        else
          runRenderNestedTreesThenDo(undefined, NOP)
      }
      catch(e: unknown) {
        runRenderNestedTreesThenDo(e, NOP)
        console.log(`Rendering failed: ${d.key}`)
        console.log(`${e}`)
      }
    })
  }
}

function triggerFinalization(item: Item<BlockImpl>, isLeader: boolean, individual: boolean): void {
  const b = item.instance
  const d = b.descriptor
  if (d.stamp >= 0) {
    const driver = d.driver
    if (individual && d.key !== d.builder.key && !driver.isRow)
      console.log(`WARNING: it is recommended to assign explicit key for conditionally rendered block in order to avoid unexpected side effects: ${d.key}`)
    d.stamp = ~d.stamp
    // Finalize block itself and remove it from collection
    const childrenAreLeaders = nonreactive(() => driver.finalize(b, isLeader))
    b.native = null
    b.controller = null
    if (b.isOn(Mode.SeparateReaction)) {
      // Defer disposal if block is reactive
      item.aux = undefined
      const last = gLastToDispose
      if (last)
        gLastToDispose = last.aux = item
      else
        gFirstToDispose = gLastToDispose = item
      if (gFirstToDispose === item)
        Transaction.run({ separation: "disposal", hint: `runDisposalLoop(initiator=${item.instance.descriptor.key})` }, () => {
          void runDisposalLoop().then(NOP, error => console.log(error))
        })
    }
    // Finalize children if any
    for (const item of d.children.items())
      triggerFinalization(item, childrenAreLeaders, false)
    BlockImpl.grandCount--
  }
}

async function runDisposalLoop(): Promise<void> {
  await Transaction.requestNextFrame()
  let item = gFirstToDispose
  while (item !== undefined) {
    if (Transaction.isFrameOver(500, 5))
      await Transaction.requestNextFrame()
    Rx.dispose(item.instance)
    item = item.aux
    BlockImpl.disposableCount--
  }
  // console.log(`Block count: ${VBlock.grandCount} totally (${VBlock.disposableCount} disposable)`)
  gFirstToDispose = gLastToDispose = undefined // reset loop
}

// function forEachChildRecursively(item: Item<XBlock>, action: (e: any) => void): void {
//   const block = item.instance
//   const e = block.native
//   e && action(e)
//   for (const item of block.children.items())
//     forEachChildRecursively(item, action)
// }

function wrapToRunInside<T>(func: (...args: any[]) => T): (...args: any[]) => T {
  let wrappedToRunInside: (...args: any[]) => T
  const current = gCurrent
  if (current)
    wrappedToRunInside = (...args: any[]): T => {
      return runInside(current, func, ...args)
    }
  else
    wrappedToRunInside = func
  return wrappedToRunInside
}

function runInside<T>(item: Item<BlockImpl>, func: (...args: any[]) => T, ...args: any[]): T {
  const outer = gCurrent
  try {
    gCurrent = item
    return func(...args)
  }
  finally {
    gCurrent = outer
  }
}

function triggersAreEqual(a1: any, a2: any): boolean {
  let result = a1 === a2
  if (!result) {
    if (Array.isArray(a1)) {
      result = Array.isArray(a2) &&
        a1.length === a2.length &&
        a1.every((t, i) => t === a2[i])
    }
    else if (a1 === Object(a1) && a2 === Object(a2)) {
      for (const p in a1) {
        result = a1[p] === a2[p]
        if (!result)
          break
      }
    }
  }
  return result
}

function absolutizeBlockCoords(area: BlockCoords,
  cursorX: number, cursorY: number,
  maxWidth: number, maxHeight: number,
  result: BlockCoords): BlockCoords {
  // X1, X2
  const x1 = absolutizePosition(area.x1, cursorX, maxWidth)
  const x2 = absolutizePosition(area.x2, x1, maxWidth)
  if (x1 <= x2)
    result.x1 = x1, result.x2 = x2
  else
    result.x1 = x2, result.x2 = x1
  // Y1, Y2
  const y1 = absolutizePosition(area.y1, cursorY, maxHeight)
  const y2 = absolutizePosition(area.y2, y1, maxHeight)
  if (y1 <= y2)
    result.y1 = y1, result.y2 = y2
  else
    result.y1 = y2, result.y2 = y1
  return result
}

function absolutizePosition(pos: number, cursor: number, max: number): number {
  if (pos === 0)
    pos = cursor
  else if (pos < 0)
    pos = Math.max(max + pos, 1)
  else
    pos = Math.min(pos, max)
  return pos
}

function push<T>(item: T, array: Array<T> | undefined): Array<T> {
  if (array == undefined)
    array = new Array<T>()
  array.push(item)
  return array
}

function shuffle<T>(array: Array<T>): Array<T> {
  const n = array.length - 1
  let i = n
  while (i >= 0) {
    const j = Math.floor(Math.random() * n)
    const t = array[i]
    array[i] = array[j]
    array[j] = t
    i--
  }
  return array
}

// Seamless support for asynchronous programming

const ORIGINAL_PROMISE_THEN = Promise.prototype.then

function reactronicDomHookedThen(this: any,
  resolve?: ((value: any) => any | PromiseLike<any>) | undefined | null,
  reject?: ((reason: any) => never | PromiseLike<never>) | undefined | null): Promise<any | never> {
  resolve = resolve ? wrapToRunInside(resolve) : defaultResolve
  reject = reject ? wrapToRunInside(reject) : defaultReject
  return ORIGINAL_PROMISE_THEN.call(this, resolve, reject)
}

function defaultResolve(value: any): any {
  return value
}

function defaultReject(error: any): never {
  throw error
}

Promise.prototype.then = reactronicDomHookedThen

// Globals

const NOP: any = (...args: any[]): void => { /* nop */ }

let gCurrent: Item<BlockImpl> | undefined = undefined
let gFirstToDispose: Item<BlockImpl> | undefined = undefined
let gLastToDispose: Item<BlockImpl> | undefined = undefined
