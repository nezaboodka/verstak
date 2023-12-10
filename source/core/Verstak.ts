// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { reactive, unobs, Transaction, options, Reentrance, Rx, LoggingOptions, MergeList, MergedItem, ObservableObject, raw, MemberOptions } from "reactronic"
import { ElCoords, ElKind, Priority, Mode, Align, ElArea, RxNodeSpec, El, RxNodeDriver, SimpleDelegate, RxNode, RxNodeCtx } from "./Interfaces.js"
import { emitLetters, equalElCoords, parseElCoords, getCallerInfo } from "./Utils.js"

// Verstak

export class Verstak {
  static readonly shortFrameDuration = 16 // ms
  static readonly longFrameDuration = 300 // ms
  static currentUpdatePriority = Priority.Realtime
  static frameDuration = Verstak.longFrameDuration

  static specify<T = undefined, M = unknown, C = unknown, R = void>(
    driver: RxNodeDriver<T>,
    spec?: RxNodeSpec<El<T, M, C, R>>,
    preset?: RxNodeSpec<El<T, M, C, R>>): El<T, M, C, R> {
    let result: ElImpl<T, M, C, R>
    // Normalize parameters
    if (spec)
      spec.preset = preset
    else
      spec = preset ?? {}
    let key = spec.key
    const owner = gCurrent?.instance
    if (owner) {
      // Lookup for existing node and check for coalescing separators
      let existing: MergedItem<RxNodeImpl<any, any, any, any>> | undefined = undefined
      const children = owner.children
      // Coalesce multiple separators into single one, if any
      if (driver.isSeparator) {
        const last = children.lastMergedItem()
        if (last?.instance?.driver === driver)
          existing = last
      }
      // Reuse existing node or specify a new one
      existing ??= children.tryMergeAsExisting(key = key || generateKey(owner), undefined,
        "nested elements can be declared inside update function only")
      if (existing) {
        // Reuse existing node
        const node = existing.instance
        result = node.element
        if (node.driver !== driver && driver !== undefined)
          throw new Error(`changing element driver is not yet supported: "${result.node.driver.name}" -> "${driver?.name}"`)
        const exTriggers = node.spec.triggers
        if (triggersAreEqual(spec.triggers, exTriggers))
          spec.triggers = exTriggers // preserve triggers instance
        node.spec = spec
      }
      else {
        // Create new node
        result = new ElImpl<T, M, C, R>(key || generateKey(owner), driver, owner, spec)
        result.node.slot = children.mergeAsAdded(result.node)
      }
      // driver.specify(result)
    }
    else {
      // Create new root node
      result = new ElImpl<T, M, C, R>(key || "", driver, owner, spec)
      result.node.slot = MergeList.createItem(result.node)
      // driver.specify(result)
      triggerUpdate(result.node.slot)
    }
    return result
  }

  static get currentNode(): RxNode {
    if (gCurrent === undefined)
      throw new Error("current element is undefined")
    return gCurrent.instance
  }

  // static setNativeHost<T>(element: El<T, any, any, void>, nativeHost: T | undefined): void {
  //   element.node.driver.mount(element, nativeHost)
  // }

  static triggerUpdate(element: El<any, any, any, void>, triggers: unknown): void {
    const el = element as ElImpl
    const spec = el.node.spec
    if (!triggersAreEqual(triggers, spec.triggers)) {
      spec.triggers = triggers // remember new triggers
      triggerUpdate(el.node.slot!)
    }
  }

  static updateNestedTreesThenDo(action: (error: unknown) => void): void {
    runUpdateNestedTreesThenDo(undefined, action)
  }

  static getDefaultLoggingOptions(): LoggingOptions | undefined {
    return ElImpl.logging
  }

  static setDefaultLoggingOptions(logging?: LoggingOptions): void {
    ElImpl.logging = logging
  }
}

// BaseDriver

export class BaseDriver<T, C = unknown> implements RxNodeDriver<T, C> {
  public static readonly fragment = new BaseDriver<any>(
    "fragment", false, el => el.kind = ElKind.Group)

  constructor(
    readonly name: string,
    readonly isSeparator: boolean,
    readonly predefine?: SimpleDelegate<T>) {
  }

  specify(element: El<T, unknown, C>): void {
    specifyUsingPresetChain(element, element.node.spec)
  }

  create(element: El<T, unknown, C>): void {
    createUsingPresetChain(element, element.node.spec)
  }

  initialize(element: El<T, unknown, C>): void {
    this.predefine?.(element)
    initializeUsingPresetChain(element, element.node.spec)
  }

  mount(element: El<T, unknown, C>): void {
    // nothing to do by default
  }

  update(element: El<T, unknown, C>): void | Promise<void> {
    updateUsingPresetChain(element, element.node.spec)
  }

  finalize(element: El<T, unknown, C>, isLeader: boolean): boolean {
    finalizeUsingPresetChain(element, element.node.spec)
    return isLeader // treat children as finalization leaders as well
  }

  applyKind(element: El<T, any, C, any>, value: ElKind): void { /* nop */ }
  applyCoords(element: El<T, any, C, any>, value: ElCoords | undefined): void { /* nop */ }
  applyWidthGrowth(element: El<T, any, C, any>, value: number): void { /* nop */ }
  applyMinWidth(element: El<T, any, C, any>, value: string): void { /* nop */ }
  applyMaxWidth(element: El<T, any, C, any>, value: string): void { /* nop */ }
  applyHeightGrowth(element: El<T, any, C, any>, value: number): void { /* nop */ }
  applyMinHeight(element: El<T, any, C, any>, value: string): void { /* nop */ }
  applyMaxHeight(element: El<T, any, C, any>, value: string): void { /* nop */ }
  applyContentAlignment(element: El<T, any, C, any>, value: Align): void { /* nop */ }
  applyElementAlignment(element: El<T, any, C, any>, value: Align): void { /* nop */ }
  applyContentWrapping(element: El<T, any, C, any>, value: boolean): void { /* nop */ }
  applyOverlayVisible(element: El<T, any, C, any>, value: boolean | undefined): void { /* nop */ }
  applyStyle(element: El<T, any, C, any>, secondary: boolean, styleName: string, enabled?: boolean): void { /* nop */ }
}

// Utils

function generateKey(owner: RxNodeImpl): string {
  const n = owner.numerator++
  const lettered = emitLetters(n)
  let result: string
  if (Rx.isLogging)
    result = `·${getCallerInfo(lettered)}`
  else
    result = `·${lettered}`
  return result
}

function modeUsingPresetChain(spec?: RxNodeSpec<any>): Mode {
  return spec?.mode ?? (spec?.preset ? modeUsingPresetChain(spec?.preset) : Mode.Default)
}

function specifyUsingPresetChain(element: El<any, any, any, any>, spec: RxNodeSpec<any>): void {
  const preset = spec.preset
  const specify = spec.specify
  if (specify)
    specify(element, preset ? () => specifyUsingPresetChain(element, preset) : NOP)
  else if (preset)
    specifyUsingPresetChain(element, preset)
}

function createUsingPresetChain(element: El<any, any, any, any>, spec: RxNodeSpec<any>): void {
  const preset = spec.preset
  const create = spec.create
  if (create)
    create(element, preset ? () => createUsingPresetChain(element, preset) : NOP)
  else if (preset)
    createUsingPresetChain(element, preset)
}

function initializeUsingPresetChain(element: El<any, any, any, any>, spec: RxNodeSpec<any>): void {
  const preset = spec.preset
  const initialize = spec.initialize
  if (initialize)
    initialize(element, preset ? () => initializeUsingPresetChain(element, preset) : NOP)
  else if (preset)
    initializeUsingPresetChain(element, preset)
}

function updateUsingPresetChain(element: El<any, any, any, any>, spec: RxNodeSpec<any>): void {
  const preset = spec.preset
  const update = spec.update
  if (update)
    update(element, preset ? () => updateUsingPresetChain(element, preset) : NOP)
  else if (preset)
    updateUsingPresetChain(element, preset)
}

function finalizeUsingPresetChain(element: El<any, any, any, any>, spec: RxNodeSpec<any>): void {
  const preset = spec.preset
  const finalize = spec.finalize
  if (finalize)
    finalize(element, preset ? () => finalizeUsingPresetChain(element, preset) : NOP)
  else if (preset)
    finalizeUsingPresetChain(element, preset)
}

export class StaticDriver<T> extends BaseDriver<T> {
  readonly native: T

  constructor(native: T, name: string, isRow: boolean, predefine?: SimpleDelegate<T>) {
    super(name, isRow, predefine)
    this.native = native
  }

  create(element: El<T, unknown, unknown, void>): void {
    element.native = this.native
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
    super("cursor", false, el => el.kind = ElKind.Cursor)
  }

  create(element: El<CursorCommand, unknown, void, void>): void {
    element.native = new CursorCommand()
    super.create(element)
  }
}

// SubTreeVariable

export class SubTreeVariable<T extends Object = Object> {
  readonly defaultValue: T | undefined

  constructor(defaultValue?: T) {
    this.defaultValue = defaultValue
  }

  set value(value: T) {
    ElImpl.setSubTreeVariableValue(this, value)
  }

  get value(): T {
    return ElImpl.useSubTreeVariableValue(this)
  }

  get valueOrUndefined(): T | undefined {
    return ElImpl.tryUseSubTreeVariable(this)
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

const UndefinedElCoords = Object.freeze({ x1: 0, y1: 0, x2: 0, y2: 0 })
const InitialCursorPosition: CursorPosition = Object.freeze(new CursorPosition({ x: 1, y: 1, runningMaxX: 0, runningMaxY: 0, flags: CursorFlags.None }))

// RxNodeCtxImpl

class RxNodeCtxImpl<T extends Object = Object> extends ObservableObject implements RxNodeCtx<T> {
  @raw next: RxNodeCtxImpl<object> | undefined
  @raw variable: SubTreeVariable<T>
  value: T

  constructor(variable: SubTreeVariable<T>, value: T) {
    super()
    this.next = undefined
    this.variable = variable
    this.value = value
  }
}

// RxNodeImpl

class RxNodeImpl<T = unknown, M = unknown, C = unknown, R = void> implements RxNode<T, M, C, R> {
  // Static properties
  static grandNodeCount: number = 0
  static disposableNodeCount: number = 0

  readonly key: string
  readonly driver: RxNodeDriver<T, C>
  spec: RxNodeSpec<El<T, M, C, R>>
  readonly level: number
  readonly owner: RxNodeImpl<any, any, any, any>
  readonly element: ElImpl<T, M, C, R>
  host: RxNodeImpl<any, any, any, any>
  readonly children: MergeList<RxNodeImpl<any, any, any, any>>
  slot: MergedItem<RxNodeImpl<T, M, C, R>> | undefined
  stamp: number
  outer: RxNodeImpl<any, any, any, any>
  context: RxNodeCtxImpl<any> | undefined
  numerator: number
  priority: Priority
  childrenShuffling: boolean

  constructor(key: string, driver: RxNodeDriver<T>,
    spec: Readonly<RxNodeSpec<El<T, M, C, R>>>,
    element: ElImpl<T, M, C, R>,
    owner: RxNodeImpl<any, any, any, any> | undefined) {
    this.key = key
    this.driver = driver
    this.spec = spec
    if (owner) {
      const node = owner
      this.level = node.level + 1
      this.owner = owner
      this.outer = node.context ? owner : node.outer
    }
    else {
      this.level = 1
      this.owner = owner = this
      this.outer = this
    }
    this.element = element
    this.host = this // node is unmounted
    this.children = new MergeList<RxNodeImpl<any, any, any, any>>(getNodeKey, true)
    this.slot = undefined
    this.stamp = Number.MAX_SAFE_INTEGER // empty
    this.context = undefined
    this.numerator = 0
    this.priority = Priority.Realtime
    this.childrenShuffling = false
    // Monitoring
    RxNodeImpl.grandNodeCount++
    if (this.has(Mode.PinpointUpdate))
      RxNodeImpl.disposableNodeCount++
  }

  get isInitialUpdate(): boolean { return this.stamp === 1 }

  get strictOrder(): boolean { return this.children.isStrict }
  set strictOrder(value: boolean) { this.children.isStrict = value }

  get isMoved(): boolean { return this.owner.children.isMoved(this.slot!) }

  has(mode: Mode): boolean {
    return (modeUsingPresetChain(this.spec) & mode) === mode
  }

  @reactive
  @options({
    reentrance: Reentrance.CancelPrevious,
    triggeringArgs: true,
    noSideEffects: false,
  })
  update(_triggers: unknown): void {
    // triggers parameter is used to enforce update by owner
    updateNow(this.slot!)
  }
}

// ElImpl

class ElImpl<T = any, M = any, C = any, R = any> implements El<T, M, C, R> {
  // Static properties
  static logging: LoggingOptions | undefined = undefined

  // System-managed properties
  readonly node: RxNodeImpl<T, M, C, R>
  maxColumnCount: number
  maxRowCount: number
  cursorPosition?: CursorPosition
  native: T

  // User-defined properties
  model: M
  controller: C
  private _kind: ElKind
  private _area: ElArea
  private _coords: ElCoords
  private _widthGrowth: number
  private _minWidth: string
  private _maxWidth: string
  private _heightGrowth: number
  private _minHeight: string
  private _maxHeight: string
  private _contentAlignment: Align
  private _elementAlignment: Align
  private _contentWrapping: boolean
  private _overlayVisible: boolean | undefined
  private _hasStyles: boolean

  constructor(key: string, driver: RxNodeDriver<T>,
    owner: RxNodeImpl | undefined, spec: RxNodeSpec<El<T, M, C, R>>) {
    // System-managed properties
    this.node = new RxNodeImpl(key, driver, spec, this, owner)
    this.maxColumnCount = 0
    this.maxRowCount = 0
    this.cursorPosition = undefined
    this.native = undefined as any as T // hack
    // User-defined properties
    this.model = undefined as any
    this.controller = undefined as any as C // hack
    this._kind = ElKind.Row
    this._area = undefined
    this._coords = UndefinedElCoords
    this._widthGrowth = 0
    this._minWidth = ""
    this._maxWidth = ""
    this._heightGrowth = 0
    this._minHeight = ""
    this._maxHeight = ""
    this._contentAlignment = Align.Default
    this._elementAlignment = Align.Default
    this._contentWrapping = true
    this._overlayVisible = undefined
    this._hasStyles = false
  }

  prepareForUpdate(): void {
    this._area = undefined // reset
    this._hasStyles = false // reset
  }

  get isAuxiliary(): boolean { return this.kind > ElKind.Note } // Row, Group, Cursor
  get isSection(): boolean { return this.kind === ElKind.Section }
  get isTable(): boolean { return this.kind === ElKind.Table }

  get kind(): ElKind { return this._kind }
  set kind(value: ElKind) {
    if (value !== this._kind || this.node.stamp >= Number.MAX_SAFE_INTEGER - 1) {
      this.node.driver.applyKind(this, value)
      this._kind = value
    }
  }

  get area(): ElArea { return this._area }
  set area(value: ElArea) {
    const node = this.node
    const driver = node.driver
    if (!driver.isSeparator) {
      const owner = node.owner
      const ownerEl = owner.element
      const cursorPosition = node.slot!.prev?.instance.element.cursorPosition ?? InitialCursorPosition
      const newCursorPosition = this.cursorPosition = owner.children.isStrict ? new CursorPosition(cursorPosition) : undefined
      const isCursorElement = driver instanceof CursorCommandDriver
      const coords = getEffectiveElCoords(!isCursorElement,
        value, ownerEl.maxColumnCount, ownerEl.maxRowCount,
        cursorPosition, newCursorPosition)
      if (!equalElCoords(coords, this._coords)) {
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
      this.node.driver.applyWidthGrowth(this, value)
      this._widthGrowth = value
    }
  }

  get minWidth(): string { return this._minWidth }
  set minWidth(value: string) {
    if (value !== this._minWidth) {
      this.node.driver.applyMinWidth(this, value)
      this._minWidth = value
    }
  }

  get maxWidth(): string { return this._maxWidth }
  set maxWidth(value: string) {
    if (value !== this._maxWidth) {
      this.node.driver.applyMaxWidth(this, value)
      this._maxWidth = value
    }
  }

  get heightGrowth(): number { return this._heightGrowth }
  set heightGrowth(value: number) {
    if (value !== this._heightGrowth) {
      this.node.driver.applyHeightGrowth(this, value)
      this._heightGrowth = value
    }
  }

  get minHeight(): string { return this._minHeight }
  set minHeight(value: string) {
    if (value !== this._minHeight) {
      this.node.driver.applyMinHeight(this, value)
      this._minHeight = value
    }
  }

  get maxHeight(): string { return this._maxHeight }
  set maxHeight(value: string) {
    if (value !== this._maxHeight) {
      this.node.driver.applyMaxHeight(this, value)
      this._maxHeight = value
    }
  }

  get contentAlignment(): Align { return this._contentAlignment }
  set contentAlignment(value: Align) {
    if (value !== this._contentAlignment) {
      this.node.driver.applyContentAlignment(this, value)
      this._contentAlignment = value
    }
  }

  get elementAlignment(): Align { return this._elementAlignment }
  set elementAlignment(value: Align) {
    if (value !== this._elementAlignment) {
      this.node.driver.applyElementAlignment(this, value)
      this._elementAlignment = value
    }
  }

  get contentWrapping(): boolean { return this._contentWrapping }
  set contentWrapping(value: boolean) {
    if (value !== this._contentWrapping) {
      this.node.driver.applyContentWrapping(this, value)
      this._contentWrapping = value
    }
  }

  get overlayVisible(): boolean | undefined { return this._overlayVisible }
  set overlayVisible(value: boolean | undefined) {
    if (value !== this._overlayVisible) {
      this.node.driver.applyOverlayVisible(this, value)
      this._overlayVisible = value
    }
  }

  useStyle(styleName: string, enabled?: boolean): void {
    this.node.driver.applyStyle(this, this._hasStyles, styleName, enabled)
    this._hasStyles = true
  }

  configureReactronic(options: Partial<MemberOptions>): MemberOptions {
    const node = this.node
    if (node.stamp < Number.MAX_SAFE_INTEGER - 1 || !node.has(Mode.PinpointUpdate))
      throw new Error("reactronic can be configured only for elements with pinpoint update mode and only inside initialize")
    return Rx.getReaction(node.update).configure(options)
  }

  static get curr(): MergedItem<RxNodeImpl<any, any, any, any>> {
    if (!gCurrent)
      throw new Error("current element is undefined")
    return gCurrent
  }

  static tryUseSubTreeVariable<T extends Object>(variable: SubTreeVariable<T>): T | undefined {
    let node = ElImpl.curr.instance
    while (node.context?.variable !== variable && node.owner !== node)
      node = node.outer.slot!.instance
    return node.context?.value as any // TODO: to get rid of any
  }

  static useSubTreeVariableValue<T extends Object>(variable: SubTreeVariable<T>): T {
    const result = ElImpl.tryUseSubTreeVariable(variable) ?? variable.defaultValue
    if (!result)
      throw new Error("context doesn't exist")
    return result
  }

  static setSubTreeVariableValue<T extends Object>(variable: SubTreeVariable<T>, value: T | undefined): void {
    const node = ElImpl.curr.instance
    const owner = node.owner
    const hostCtx = unobs(() => owner.context?.value)
    if (value && value !== hostCtx) {
      if (hostCtx)
        node.outer = owner
      else
        node.outer = owner.outer
      Transaction.run({ separation: true }, () => {
        const ctx = node.context
        if (ctx) {
          ctx.variable = variable
          ctx.value = value // update context thus invalidate observers
        }
        else
          node.context = new RxNodeCtxImpl<any>(variable, value)
      })
    }
    else if (hostCtx)
      node.outer = owner
    else
      node.outer = owner.outer
  }

  private rowBreak(): void {
    const node = this.node
    const cursorPosition = node.slot!.prev?.instance.element.cursorPosition ?? InitialCursorPosition
    const newCursorPosition = this.cursorPosition = new CursorPosition(cursorPosition)
    newCursorPosition.x = 1
    newCursorPosition.y = newCursorPosition.runningMaxY + 1
  }
}

// Internal

function getNodeKey(node: RxNode): string | undefined {
  return node.stamp >= 0 ? node.key : undefined
}

function getEffectiveElCoords(
  isRegularElement: boolean, area: ElArea, maxX: number, maxY: number,
  cursorPosition: CursorPosition, newCursorPosition?: CursorPosition): ElCoords {
  let result: ElCoords // this comment just prevents syntax highlighting in VS code
  if (typeof(area) === "string") {
    // Absolute positioning
    result = parseElCoords(area, { x1: 0, y1: 0, x2: 0, y2: 0 })
    absolutizeElCoords(result, cursorPosition.x, cursorPosition.y,
      maxX || Infinity, maxY || Infinity, result)
    if (newCursorPosition) {
      newCursorPosition.x = isRegularElement ? result.x2 + 1 : result.x1
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
    if (dx === 0 && isRegularElement) {
      dx = runningX || 1
      newCursorPosition.flags = CursorFlags.UsesRunningColumnCount
    }
    if (dx >= 0) {
      if (isRegularElement) {
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
      if (isRegularElement) {
        result.x1 = Math.max(cursorPosition.x + dx, 1)
        result.x2 = cursorPosition.x
        newCursorPosition.x = result.x2 + 1
      }
      else {
        result.x1 = result.x2 = cursorPosition.x + dx
        newCursorPosition.x = result.x2
      }
    }
    if (dy === 0 && isRegularElement) {
      dy = runningY || 1
      newCursorPosition.flags |= CursorFlags.UsesRunningRowCount
    }
    if (dy >= 0) {
      if (isRegularElement) {
        result.y1 = cursorPosition.y
        result.y2 = absolutizePosition(result.y1 + dy - 1, 0, maxY || Infinity)
        if (result.y2 > newCursorPosition.runningMaxY)
          newCursorPosition.runningMaxY = result.y2
      }
      else
        result.y1 = result.y2 = cursorPosition.y + dy
    }
    else {
      if (isRegularElement) {
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

function runUpdateNestedTreesThenDo(error: unknown, action: (error: unknown) => void): void {
  const curr = ElImpl.curr
  const owner = curr.instance
  const children = owner.children
  if (children.isMergeInProgress) {
    let promised: Promise<void> | undefined = undefined
    try {
      children.endMerge(error)
      // Finalize removed elements
      for (const slot of children.removedItems(true))
        triggerFinalization(slot, true, true)
      if (!error) {
        // Lay out and update actual elements
        const ownerIsSection = owner.element.isSection
        const sequential = children.isStrict
        let p1: Array<MergedItem<RxNodeImpl>> | undefined = undefined
        let p2: Array<MergedItem<RxNodeImpl>> | undefined = undefined
        let mounting = false
        let hostingRow = owner
        for (const item of children.items()) {
          if (Transaction.isCanceled)
            break
          const node = item.instance
          const el = node.element
          const isSeparator = el.node.driver.isSeparator
          const host = isSeparator ? owner : hostingRow
          const p = el.node.priority ?? Priority.Realtime
          mounting = markToMountIfNecessary(mounting, host, item, children, sequential)
          if (p === Priority.Realtime)
            triggerUpdate(item) // update synchronously
          else if (p === Priority.Normal)
            p1 = push(item, p1) // defer for P1 async update
          else
            p2 = push(item, p2) // defer for P2 async update
          if (ownerIsSection && isSeparator)
            hostingRow = node
        }
        // Update incremental children (if any)
        if (!Transaction.isCanceled && (p1 !== undefined || p2 !== undefined))
          promised = startIncrementalUpdate(curr, children, p1, p2).then(
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

function markToMountIfNecessary(mounting: boolean, host: RxNodeImpl,
  slot: MergedItem<RxNodeImpl>, children: MergeList<RxNodeImpl>, sequential: boolean): boolean {
  // Detects element mounting when abstract elements
  // exist among regular elements having native HTML elements
  const node = slot.instance
  const el = node.element
  if (el.native && !node.has(Mode.ManualMount)) {
    if (mounting || node.host !== host) {
      children.markAsMoved(slot)
      mounting = false
    }
  }
  else if (sequential && children.isMoved(slot))
    mounting = true // apply to the first element having native HTML element
  node.host = host
  return mounting
}

async function startIncrementalUpdate(
  ownerSlot: MergedItem<RxNodeImpl>,
  allChildren: MergeList<RxNodeImpl>,
  priority1?: Array<MergedItem<RxNodeImpl>>,
  priority2?: Array<MergedItem<RxNodeImpl>>): Promise<void> {
  const stamp = ownerSlot.instance.stamp
  if (priority1)
    await updateIncrementally(ownerSlot, stamp, allChildren, priority1, Priority.Normal)
  if (priority2)
    await updateIncrementally(ownerSlot, stamp, allChildren, priority2, Priority.Background)
}

async function updateIncrementally(owner: MergedItem<RxNodeImpl>, stamp: number,
  allChildren: MergeList<RxNodeImpl>, items: Array<MergedItem<RxNodeImpl>>,
  priority: Priority): Promise<void> {
  await Transaction.requestNextFrame()
  const node = owner.instance
  if (!Transaction.isCanceled || !Transaction.isFrameOver(1, Verstak.shortFrameDuration / 3)) {
    let outerPriority = Verstak.currentUpdatePriority
    Verstak.currentUpdatePriority = priority
    try {
      if (node.childrenShuffling)
        shuffle(items)
      const frameDurationLimit = priority === Priority.Background ? Verstak.shortFrameDuration : Infinity
      let frameDuration = Math.min(frameDurationLimit, Math.max(Verstak.frameDuration / 4, Verstak.shortFrameDuration))
      for (const child of items) {
        triggerUpdate(child)
        if (Transaction.isFrameOver(1, frameDuration)) {
          Verstak.currentUpdatePriority = outerPriority
          await Transaction.requestNextFrame(0)
          outerPriority = Verstak.currentUpdatePriority
          Verstak.currentUpdatePriority = priority
          frameDuration = Math.min(4 * frameDuration, Math.min(frameDurationLimit, Verstak.frameDuration))
        }
        if (Transaction.isCanceled && Transaction.isFrameOver(1, Verstak.shortFrameDuration / 3))
          break
      }
    }
    finally {
      Verstak.currentUpdatePriority = outerPriority
    }
  }
}

function triggerUpdate(slot: MergedItem<RxNodeImpl<any, any, any, any>>): void {
  const node = slot.instance
  if (node.stamp >= 0) { // if not finalized
    if (node.has(Mode.PinpointUpdate)) {
      if (node.stamp === Number.MAX_SAFE_INTEGER) {
        Transaction.outside(() => {
          if (Rx.isLogging)
            Rx.setLoggingHint(node.element, node.key)
          Rx.getReaction(node.update).configure({
            order: node.level,
          })
        })
      }
      unobs(node.update, node.spec.triggers) // reactive auto-update
    }
    else
      updateNow(slot)
  }
}

function mountOrRemountIfNecessary(element: ElImpl): void {
  const node = element.node
  const driver = node.driver
  if (node.stamp === Number.MAX_SAFE_INTEGER) {
    node.stamp = Number.MAX_SAFE_INTEGER - 1 // initializing
    unobs(() => {
      driver.create(element)
      driver.initialize(element)
      if (!node.has(Mode.ManualMount)) {
        node.stamp = 0 // mounting
        if (element.node.host !== element.node)
          driver.mount(element)
      }
      node.stamp = 0 // TEMPORARY
    })
  }
  else if (node.isMoved && !node.has(Mode.ManualMount) && element.node.host !== element.node)
    unobs(() => driver.mount(element))
}

function updateNow(slot: MergedItem<RxNodeImpl<any, any, any, any>>): void {
  const node = slot.instance
  const el = node.element
  if (node.stamp >= 0) { // if element is alive
    let result: unknown = undefined
    runInside(slot, () => {
      mountOrRemountIfNecessary(el)
      if (node.stamp < Number.MAX_SAFE_INTEGER - 1) { // if mounted
        try {
          node.stamp++
          node.numerator = 0
          el.prepareForUpdate()
          node.children.beginMerge()
          const driver = node.driver
          result = driver.update(el)
          if (el.area === undefined && node.owner.element.isTable)
            el.area = undefined // automatic placement
          if (result instanceof Promise)
            result.then(
              v => { runUpdateNestedTreesThenDo(undefined, NOP); return v },
              e => { console.log(e); runUpdateNestedTreesThenDo(e ?? new Error("unknown error"), NOP) })
          else
            runUpdateNestedTreesThenDo(undefined, NOP)
        }
        catch(e: unknown) {
          runUpdateNestedTreesThenDo(e, NOP)
          console.log(`Update failed: ${node.key}`)
          console.log(`${e}`)
        }
      }
    })
  }
}

function triggerFinalization(slot: MergedItem<RxNodeImpl>, isLeader: boolean, individual: boolean): void {
  const node = slot.instance
  const el = node.element
  if (node.stamp >= 0) {
    const driver = node.driver
    if (individual && node.key !== node.spec.key && !driver.isSeparator)
      console.log(`WARNING: it is recommended to assign explicit key for conditional element in order to avoid unexpected side effects: ${node.key}`)
    node.stamp = ~node.stamp
    // Finalize element itself and remove it from collection
    const childrenAreLeaders = unobs(() => driver.finalize(el, isLeader))
    el.native = null
    el.controller = null
    if (node.has(Mode.PinpointUpdate)) {
      // Defer disposal if element is reactive (having pinpoint update mode)
      slot.aux = undefined
      const last = gLastToDispose
      if (last)
        gLastToDispose = last.aux = slot
      else
        gFirstToDispose = gLastToDispose = slot
      if (gFirstToDispose === slot)
        Transaction.run({ separation: "disposal", hint: `runDisposalLoop(initiator=${slot.instance.key})` }, () => {
          void runDisposalLoop().then(NOP, error => console.log(error))
        })
    }
    // Finalize children if any
    for (const slot of node.children.items())
      triggerFinalization(slot, childrenAreLeaders, false)
    RxNodeImpl.grandNodeCount--
  }
}

async function runDisposalLoop(): Promise<void> {
  await Transaction.requestNextFrame()
  let slot = gFirstToDispose
  while (slot !== undefined) {
    if (Transaction.isFrameOver(500, 5))
      await Transaction.requestNextFrame()
    Rx.dispose(slot.instance)
    slot = slot.aux
    RxNodeImpl.disposableNodeCount--
  }
  // console.log(`Element count: ${RxNodeImpl.grandNodeCount} totally (${RxNodeImpl.disposableNodeCount} disposable)`)
  gFirstToDispose = gLastToDispose = undefined // reset loop
}

// function forEachChildRecursively(slot: MergedItem<El>, action: (e: any) => void): void {
//   const el = slot.instance
//   const e = el.native
//   e && action(e)
//   for (const slot of el.children.items())
//     forEachChildRecursively(slot, action)
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

function runInside<T>(slot: MergedItem<RxNodeImpl>, func: (...args: any[]) => T, ...args: any[]): T {
  const outer = gCurrent
  try {
    gCurrent = slot
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

function absolutizeElCoords(area: ElCoords,
  cursorX: number, cursorY: number,
  maxWidth: number, maxHeight: number,
  result: ElCoords): ElCoords {
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

let gCurrent: MergedItem<RxNodeImpl> | undefined = undefined
let gFirstToDispose: MergedItem<RxNodeImpl> | undefined = undefined
let gLastToDispose: MergedItem<RxNodeImpl> | undefined = undefined
