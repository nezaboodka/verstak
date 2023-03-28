// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { reactive, nonreactive, Transaction, options, Reentrance, Rx, LoggingOptions, Collection, Item, CollectionReader, ObservableObject, raw, MemberOptions } from "reactronic"
import { getCallerInfo } from "./Utils"
import { CellRange, emitLetters, equalCellRanges, parseCellRange } from "./CellRange"
import { Layout, Priority, Mode, Align, Placement } from "./Common"

export type Callback<T = unknown> = (native: T) => void // to be deleted
export type Operation<T = unknown, M = unknown, C = unknown, R = void> = (block: VBlock<T, M, C, R>, base: () => R) => R
export type AsyncOperation<T = unknown, M = unknown> = (block: VBlock<T, M, Promise<void>>) => Promise<void>
export type SimpleOperation<T = unknown> = (block: VBlock<T, any, any, any>) => void

export interface BlockBuilder<T = unknown, M = unknown, C = unknown, R = void> {
  base?: BlockBuilder<T, M, C, R>
  key?: string
  modes?: Mode
  triggers?: unknown
  claim?: Operation<T, M, C, R>
  create?: Operation<T, M, C, R>
  initialize?: Operation<T, M, C, R>
  render?: Operation<T, M, C, R>
  finalize?: Operation<T, M, C, R>
}

// Fragment

export function Fragment<M = unknown, R = void>(
  builder?: BlockBuilder<void, M, R>,
  base?: BlockBuilder<void, M, R>): VBlock<void, M, R> {
  return VBlock.claim(Driver.fragment, builder, base)
}

// VBlock

export abstract class VBlockDescriptor<T = unknown, M = unknown, C = unknown, R = void> {
  abstract readonly key: string
  abstract readonly driver: Driver<T>
  abstract readonly builder: Readonly<BlockBuilder<T, M, C, R>>
  abstract readonly level: number
  abstract readonly owner: VBlock
  abstract readonly host: VBlock
  abstract readonly children: CollectionReader<VBlock>
  abstract readonly item: Item<VBlock> | undefined
  abstract readonly stamp: number
  abstract readonly outer: VBlock
  abstract readonly context: XBlockCtx | undefined
}

export abstract class VBlock<T = unknown, M = unknown, C = unknown, R = void> {
  // Static properties
  static readonly shortFrameDuration = 16 // ms
  static readonly longFrameDuration = 300 // ms
  static currentRenderingPriority = Priority.Realtime
  static frameDuration = VBlock.longFrameDuration

  // System-managed properties
  abstract readonly descriptor: VBlockDescriptor<T, M, C, R>
  abstract readonly native: T

  // User-defined properties
  abstract model: M
  abstract controller: C
  abstract childrenLayout: Layout
  abstract placement: Placement
  abstract widthGrowth: number
  abstract minWidth: string
  abstract maxWidth: string
  abstract heightGrowth: number
  abstract minHeight: string
  abstract maxHeight: string
  abstract contentAlignment: Align
  abstract blockAlignment: Align
  abstract contentWrapping: boolean
  abstract overlayVisible: boolean | undefined
  abstract childrenShuffling: boolean
  abstract renderingPriority?: Priority
  abstract style(styleName: string, enabled?: boolean): void

  get isInitialRendering(): boolean {
    return this.descriptor.stamp === 2
  }

  abstract configureReactronic(options: Partial<MemberOptions>): MemberOptions

  static get current(): VBlock {
    if (gCurrent === undefined)
      throw new Error("current block is undefined")
    return gCurrent.instance
  }

  static renderNestedTreesThenDo(action: (error: unknown) => void): void {
    runRenderNestedTreesThenDo(undefined, action)
  }

  static claim<T = undefined, M = unknown, C = unknown, R = void>(
    driver: Driver<T>,
    builder?: BlockBuilder<T, M, C, R>,
    base?: BlockBuilder<T, M, C, R>): VBlock<T, M, C, R> {
    let result: XBlock<T, M, C, R>
    // Normalize parameters
    if (builder)
      builder.base = base
    else
      builder = base ?? {}
    let key = builder.key
    let owner = gCurrent?.instance
    if (owner) {
      // Check for coalescing separators or lookup for existing block
      let ex: Item<XBlock<any, any, any, any>> | undefined = undefined
      const children = owner.descriptor.children
      if (driver.isRow) {
        const last = children.lastClaimedItem()
        if (last?.instance?.descriptor.driver === driver)
          ex = last
      }
      ex ??= children.claim(
        key = key || VBlock.generateKey(owner), undefined,
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
        result = new XBlock<T, M, C, R>(key || VBlock.generateKey(owner), driver, owner, builder)
        result.descriptor.item = children.add(result)
      }
    }
    else {
      // Create new root block
      result = new XBlock<T, M, C, R>(key || "", driver, owner, builder)
      result.descriptor.item = Collection.createItem(result)
      triggerRendering(result.descriptor.item)
    }
    return result
  }

  private static generateKey(owner: XBlock): string {
    const n = owner.descriptor.numerator++
    const lettered = emitLetters(n)
    let result: string
    if (Rx.isLogging)
      result = `·${getCallerInfo(lettered)}`
    else
      result = `·${lettered}`
    return result
  }

  static getDefaultLoggingOptions(): LoggingOptions | undefined {
    return XBlock.logging
  }

  static setDefaultLoggingOptions(logging?: LoggingOptions): void {
    XBlock.logging = logging
  }
}

// Driver

export class Driver<T, C = unknown> {
  public static readonly fragment =
    new Driver<any>("fragment", false, b => b.childrenLayout = Layout.Group)

  constructor(
    readonly name: string,
    readonly isRow: boolean,
    readonly preset?: SimpleOperation<T>) {
  }

  claim(block: VBlock<T, unknown, C>): void {
    const b = block as XBlock<T, unknown, C>
    chainedClaim(b, b.descriptor.builder)
  }

  create(block: VBlock<T, unknown, C>, b: { native?: T, controller?: C }): void {
    chainedCreate(block, block.descriptor.builder)
  }

  initialize(block: VBlock<T, unknown, C>): void {
    const b = block as XBlock<T, unknown, C>
    this.preset?.(b)
    chainedInitialize(b, b.descriptor.builder)
  }

  mount(block: VBlock<T, unknown, C>): void {
    // nothing to do by default
  }

  render(block: VBlock<T, unknown, C>): void | Promise<void> {
    chainedRender(block, block.descriptor.builder)
  }

  finalize(block: VBlock<T, unknown, C>, isLeader: boolean): boolean {
    const b = block as XBlock<T, unknown, C>
    chainedFinalize(b, b.descriptor.builder)
    return isLeader // treat children as finalization leaders as well
  }

  applyChildrenLayout(block: VBlock<T, any, C, any>, value: Layout): void {
    // do nothing
  }

  applyCellRange(block: VBlock<T, any, C, any>, value: CellRange | undefined): void {
    // do nothing
  }

  applyWidthGrowth(block: VBlock<T, any, C, any>, value: number): void {
    // do nothing
  }

  applyMinWidth(block: VBlock<T, any, C, any>, value: string): void {
    // do nothing
  }

  applyMaxWidth(block: VBlock<T, any, C, any>, value: string): void {
    // do nothing
  }

  applyHeightGrowth(block: VBlock<T, any, C, any>, value: number): void {
    // do nothing
  }

  applyMinHeight(block: VBlock<T, any, C, any>, value: string): void {
    // do nothing
  }

  applyMaxHeight(block: VBlock<T, any, C, any>, value: string): void {
    // do nothing
  }

  applyContentAlignment(block: VBlock<T, any, C, any>, value: Align): void {
    // do nothing
  }

  applyBlockAlignment(block: VBlock<T, any, C, any>, value: Align): void {
    // do nothing
  }

  applyContentWrapping(block: VBlock<T, any, C, any>, value: boolean): void {
    // do nothing
  }

  applyOverlayVisible(block: VBlock<T, any, C, any>, value: boolean | undefined): void {
    // do nothing
  }

  applyStyle(block: VBlock<T, any, C, any>, secondary: boolean, styleName: string, enabled?: boolean): void {
    // do nothing
  }
}

function chainedMode(builder?: BlockBuilder<any, any, any, any>): Mode {
  return builder?.modes ?? (builder?.base ? chainedMode(builder?.base) : Mode.Default)
}

function chainedClaim(block: VBlock, builder: BlockBuilder): void {
  const claim = builder.claim
  const base = builder.base
  if (claim)
    claim(block, base ? () => chainedClaim(block, base) : NOP)
  else if (base)
    chainedClaim(block, base)
}

function chainedCreate(block: VBlock, builder: BlockBuilder): void {
  const create = builder.create
  const base = builder.base
  if (create)
    create(block, base ? () => chainedCreate(block, base) : NOP)
  else if (base)
    chainedCreate(block, base)
}

function chainedInitialize(block: VBlock, builder: BlockBuilder): void {
  const initialize = builder.initialize
  const base = builder.base
  if (initialize)
    initialize(block, base ? () => chainedInitialize(block, base) : NOP)
  else if (base)
    chainedInitialize(block, base)
}

function chainedRender(block: VBlock, builder: BlockBuilder): void {
  const render = builder.render
  const base = builder.base
  if (render)
    render(block, base ? () => chainedRender(block, base) : NOP)
  else if (base)
    chainedRender(block, base)
}

function chainedFinalize(block: VBlock, builder: BlockBuilder): void {
  const finalize = builder.finalize
  const base = builder.base
  if (finalize)
    finalize(block, base ? () => chainedFinalize(block, base) : NOP)
  else if (base)
    chainedFinalize(block, base)
}

export class StaticDriver<T> extends Driver<T> {
  readonly element: T

  constructor(element: T, name: string, isRow: boolean, preset?: SimpleOperation<T>) {
    super(name, isRow, preset)
    this.element = element
  }

  create(block: VBlock<T, unknown, unknown, void>, b: { native?: T; controller?: unknown }): void {
    b.native = this.element
  }
}

// ContextVariable

export class ContextVariable<T extends Object = Object> {
  readonly defaultValue: T | undefined

  constructor(defaultValue?: T) {
    this.defaultValue = defaultValue
  }

  set value(value: T) {
    XBlock.setContextVariableValue(this, value)
  }

  get value(): T {
    return XBlock.useContextVariableValue(this)
  }

  get valueOrUndefined(): T | undefined {
    return XBlock.tryUseContextVariable(this)
  }
}

// XBlock

class Cursor {
  column: number
  row: number
  runningColumnCount: number
  runningRowCount: number
  flags: CursorFlags

  constructor(prev: Cursor) {
    this.column = prev.column
    this.row = prev.row
    this.runningColumnCount = prev.runningColumnCount
    this.runningRowCount = prev.runningRowCount
    this.flags = CursorFlags.None
  }
}

enum CursorFlags {
  None = 0,
  OwnCursorPosition = 1,
  UsesRunningColumnCount = 2,
  UsesRunningRowCount = 4,
}

const UndefinedCellRange = Object.freeze({ x1: 0, y1: 0, x2: 0, y2: 0 })
const ZeroCursor: Cursor = Object.freeze(new Cursor({ column: 0, row: 0, runningColumnCount: 0, runningRowCount: 0, flags: CursorFlags.None }))

class XBlockCtx<T extends Object = Object> extends ObservableObject {
  @raw next: XBlockCtx<object> | undefined
  @raw variable: ContextVariable<T>
  value: T

  constructor(variable: ContextVariable<T>, value: T) {
    super()
    this.next = undefined
    this.variable = variable
    this.value = value
  }
}

export class XBlockDescriptor<T = unknown, M = unknown, C = unknown, R = void> extends VBlockDescriptor<T, M, C, R> {
  readonly key: string
  readonly driver: Driver<T>
  builder: BlockBuilder<T, M, C, R>
  readonly level: number
  readonly owner: XBlock
  host: XBlock
  readonly children: Collection<XBlock>
  item: Item<XBlock> | undefined
  stamp: number
  outer: XBlock
  context: XBlockCtx<any> | undefined
  numerator: number
  maxColumnCount: number = 0
  maxRowCount: number = 0
  cursor?: Cursor

  constructor(key: string, driver: Driver<T>,
    builder: Readonly<BlockBuilder<T, M, C, R>>,
    self: XBlock<T, M, C, R>, owner: XBlock | undefined) {
    super()
    this.key = key
    this.driver = driver
    this.builder = builder
    if (owner) {
      this.level = owner.descriptor.level + 1
      this.owner = owner
      this.outer = owner.descriptor.context ? owner : owner.descriptor.outer
    }
    else {
      this.level = 1
      this.owner = owner = self
      this.outer = self
    }
    this.host = self // block is unmounted
    this.children = new Collection<XBlock>(getBlockKey, self.isSequential)
    this.item = undefined
    this.stamp = 0
    this.context = undefined
    this.numerator = 0
    this.maxColumnCount = 0
    this.maxRowCount = 0
    this.cursor = undefined
  }
}

class XBlock<T = any, M = any, C = any, R = any> extends VBlock<T, M, C, R> {
  // Static properties
  static grandCount: number = 0
  static disposableCount: number = 0
  static logging: LoggingOptions | undefined = undefined

  // System-managed properties
  readonly descriptor: XBlockDescriptor<T, M, C, R>
  native: T

  // User-defined properties
  model: M
  controller: C
  _childrenLayout: Layout
  _placement: Placement
  private _cellRange: CellRange
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
  hasStyles: boolean
  childrenShuffling: boolean
  renderingPriority: Priority

  constructor(key: string, driver: Driver<T>,
    owner: XBlock | undefined, builder: BlockBuilder<T, M, C, R>) {
    super()
    // System-managed properties
    this.descriptor = new XBlockDescriptor(key, driver, builder, this, owner)
    this.native = undefined as any as T // hack
    // User-defined properties
    this.model = undefined as any
    this.controller = undefined as any as C // hack
    this._childrenLayout = Layout.Row
    this._placement = undefined
    this._cellRange = UndefinedCellRange
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
    this.hasStyles = false
    this.childrenShuffling = false
    this.renderingPriority = Priority.Realtime
    // Monitoring
    XBlock.grandCount++
    if (this.has(Mode.SeparateReaction))
      XBlock.disposableCount++
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

  has(mode: Mode): boolean { return (chainedMode(this.descriptor.builder) & mode) === mode }

  get isSequential(): boolean { return (this.childrenLayout & 1) === 0 } // Section, Row, Note
  get isAuxiliary(): boolean { return (this.childrenLayout & 2) === 2 } // Row, Group
  get isSection(): boolean { return this.childrenLayout === Layout.Section }
  get isTable(): boolean { return this.childrenLayout === Layout.Table }

  get isAutoMountEnabled(): boolean { return !this.has(Mode.ManualMount) && this.descriptor.host !== this }
  get isMoved(): boolean { return this.descriptor.owner.descriptor.children.isMoved(this.descriptor.item!) }

  get childrenLayout(): Layout { return this._childrenLayout }
  set childrenLayout(value: Layout) {
    if (value !== this._childrenLayout || this.descriptor.stamp < 2) {
      this.descriptor.driver.applyChildrenLayout(this, value)
      this._childrenLayout = value
    }
  }

  get placement(): Placement { return this._placement }
  set placement(value: Placement) {
    const driver = this.descriptor.driver
    if (!driver.isRow) {
      const cellRange = this.placementToCellRange(value)
      if (!equalCellRanges(cellRange, this._cellRange)) {
        driver.applyCellRange(this, cellRange)
        this._cellRange = cellRange
      }
      this._placement = value ?? { }
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
    this.descriptor.driver.applyStyle(this, this.hasStyles, styleName, enabled)
    this.hasStyles = true
  }

  configureReactronic(options: Partial<MemberOptions>): MemberOptions {
    if (this.descriptor.stamp !== 1 || !this.has(Mode.SeparateReaction))
      throw new Error("reactronic can be configured only for blocks with separate reaction mode and only inside initialize")
    return Rx.getController(this.render).configure(options)
  }

  static get curr(): Item<XBlock> {
    if (!gCurrent)
      throw new Error("current block is undefined")
    return gCurrent
  }

  static tryUseContextVariable<T extends Object>(variable: ContextVariable<T>): T | undefined {
    let b = XBlock.curr.instance
    while (b.descriptor.context?.variable !== variable && b.descriptor.owner !== b)
      b = b.descriptor.outer
    return b.descriptor.context?.value as any // TODO: to get rid of any
  }

  static useContextVariableValue<T extends Object>(variable: ContextVariable<T>): T {
    const result = XBlock.tryUseContextVariable(variable) ?? variable.defaultValue
    if (!result)
      throw new Error("context doesn't exist")
    return result
  }

  static setContextVariableValue<T extends Object>(variable: ContextVariable<T>, value: T | undefined): void {
    const b = XBlock.curr.instance
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
          d.context = new XBlockCtx<any>(variable, value)
      })
    }
    else if (hostCtx)
      d.outer = owner
    else
      d.outer = owner.descriptor.outer
  }

  private placementToCellRange(placement: Placement): CellRange {
    let result: CellRange
    const d = this.descriptor
    const owner = d.owner.descriptor
    const isStrict = owner.children.isStrict
    const maxColumnCount = owner.maxColumnCount
    const maxRowCount = owner.maxRowCount
    const prevCursor = d.item!.prev?.instance.descriptor.cursor ?? ZeroCursor
    if (typeof(placement) === "string") {
      // Absolute positioning
      result = parseCellRange(placement, { x1: 0, y1: 0, x2: 0, y2: 0 })
      absolutizeCellRange(result, prevCursor.column + 1, prevCursor.row + 1,
        maxColumnCount || Infinity, maxRowCount || Infinity, result)
      if (isStrict) {
        const cursor = d.cursor = new Cursor(prevCursor)
        cursor.column = result.x2
        cursor.row = result.y1
        cursor.flags = CursorFlags.OwnCursorPosition
      }
    }
    else if (isStrict) {
      // Relative positioning
      const cursor = d.cursor = new Cursor(prevCursor)
      let w: number
      let h: number
      let wOverlap: boolean
      let hOverlap: boolean
      if (placement) {
        w = placement.widthInCells ?? 1
        h = placement.heightInCells ?? 1
        wOverlap = placement.widthOverlap ?? false
        hOverlap = placement.heightOverlap ?? false
      }
      else { // placement === undefined
        w = 1
        h = 1
        wOverlap = hOverlap = false
      }
      // Arrange
      const columnCount = maxColumnCount !== 0 ? maxColumnCount : prevCursor.runningColumnCount
      const rowCount = maxRowCount !== 0 ? maxRowCount : prevCursor.runningRowCount
      result = { x1: 0, y1: 0, x2: 0, y2: 0 }
      if (w === 0) {
        w = columnCount || 1
        cursor.flags = CursorFlags.UsesRunningColumnCount
      }
      if (w >= 0) {
        result.x1 = prevCursor.column + 1
        result.x2 = absolutizePosition(result.x1 + w - 1, 0, maxColumnCount || Infinity)
        if (!wOverlap)
          cursor.column = result.x2
      }
      else {
        result.x1 = Math.max(prevCursor.column + w, 1)
        result.x2 = prevCursor.column
      }
      if (h === 0) {
        h = rowCount || 1
        cursor.flags |= CursorFlags.UsesRunningRowCount
      }
      if (h >= 0) {
        result.y1 = prevCursor.row + 1
        result.y2 = absolutizePosition(result.y1 + h - 1, 0, maxRowCount || Infinity)
        if (!hOverlap && result.y2 > cursor.runningRowCount)
          cursor.runningRowCount = result.y2
      }
      else {
        result.y1 = Math.max(prevCursor.row + h, 1)
        result.y2 = prevCursor.row
      }
    }
    else
      throw new Error("relative layout requires sequential children")
    return result
  }

  private rowBreak(): void {
    const cursor = this.descriptor.cursor
    if (cursor) {
      cursor.column = 0
      cursor.row = cursor.runningRowCount
    }
  }
}

// Internal

function getBlockKey(block: XBlock): string | undefined {
  const d = block.descriptor
  return d.stamp >= 0 ? d.key : undefined
}

function runRenderNestedTreesThenDo(error: unknown, action: (error: unknown) => void): void {
  const curr = XBlock.curr
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
        const ownerIsSection = owner.isSection
        const sequential = children.isStrict
        let p1: Array<Item<XBlock>> | undefined = undefined
        let p2: Array<Item<XBlock>> | undefined = undefined
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
          if (ownerIsSection && isRow)
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

function markToMountIfNecessary(mounting: boolean, host: XBlock,
  item: Item<XBlock>, children: Collection<XBlock>, sequential: boolean): boolean {
  // Detects element mounting when abstract blocks
  // exist among regular blocks with HTML elements
  const b = item.instance
  const d = b.descriptor
  if (b.native && !b.has(Mode.ManualMount)) {
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
  owner: Item<XBlock>,
  allChildren: Collection<XBlock>,
  priority1?: Array<Item<XBlock>>,
  priority2?: Array<Item<XBlock>>): Promise<void> {
  const stamp = owner.instance.descriptor.stamp
  if (priority1)
    await renderIncrementally(owner, stamp, allChildren, priority1, Priority.Normal)
  if (priority2)
    await renderIncrementally(owner, stamp, allChildren, priority2, Priority.Background)
}

async function renderIncrementally(owner: Item<XBlock>, stamp: number,
  allChildren: Collection<XBlock>, items: Array<Item<XBlock>>,
  priority: Priority): Promise<void> {
  await Transaction.requestNextFrame()
  const block = owner.instance
  if (!Transaction.isCanceled || !Transaction.isFrameOver(1, VBlock.shortFrameDuration / 3)) {
    let outerPriority = VBlock.currentRenderingPriority
    VBlock.currentRenderingPriority = priority
    try {
      if (block.childrenShuffling)
        shuffle(items)
      const frameDurationLimit = priority === Priority.Background ? VBlock.shortFrameDuration : Infinity
      let frameDuration = Math.min(frameDurationLimit, Math.max(VBlock.frameDuration / 4, VBlock.shortFrameDuration))
      for (const child of items) {
        triggerRendering(child)
        if (Transaction.isFrameOver(1, frameDuration)) {
          VBlock.currentRenderingPriority = outerPriority
          await Transaction.requestNextFrame(0)
          outerPriority = VBlock.currentRenderingPriority
          VBlock.currentRenderingPriority = priority
          frameDuration = Math.min(4 * frameDuration, Math.min(frameDurationLimit, VBlock.frameDuration))
        }
        if (Transaction.isCanceled && Transaction.isFrameOver(1, VBlock.shortFrameDuration / 3))
          break
      }
    }
    finally {
      VBlock.currentRenderingPriority = outerPriority
    }
  }
}

function triggerRendering(item: Item<XBlock>): void {
  const b = item.instance
  const d = b.descriptor
  if (d.stamp >= 0) {
    if (b.has(Mode.SeparateReaction)) {
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

function mountIfNecessary(block: XBlock): void {
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

function renderNow(item: Item<XBlock>): void {
  const b = item.instance
  const d = b.descriptor
  if (d.stamp >= 0) { // if block is alive
    let result: unknown = undefined
    runInside(item, () => {
      try {
        mountIfNecessary(b)
        d.stamp++
        d.numerator = 0
        b._placement = undefined // reset
        b.hasStyles = false // reset
        d.children.beginMerge()
        const driver = d.driver
        result = driver.render(b)
        if (b._placement === undefined && d.owner.isTable)
          b.placement = undefined // auto placement
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

function triggerFinalization(item: Item<XBlock>, isLeader: boolean, individual: boolean): void {
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
    if (b.has(Mode.SeparateReaction)) {
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
    XBlock.grandCount--
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
    XBlock.disposableCount--
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

function runInside<T>(item: Item<XBlock>, func: (...args: any[]) => T, ...args: any[]): T {
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

function absolutizeCellRange(area: CellRange,
  cursorX: number, cursorY: number,
  maxWidth: number, maxHeight: number,
  result: CellRange): CellRange {
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

let gCurrent: Item<XBlock> | undefined = undefined
let gFirstToDispose: Item<XBlock> | undefined = undefined
let gLastToDispose: Item<XBlock> | undefined = undefined
