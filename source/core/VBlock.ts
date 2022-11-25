// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { reactive, nonreactive, Transaction, options, Reentrance, Rx, LoggingOptions, Collection, Item, CollectionReader, ObservableObject, raw, MemberOptions } from "reactronic"
import { getCallerInfo } from "./Utils"
import { CellRange, emitLetters, equalCellRanges } from "./CellRange"
import { Cursor, Align, Cells } from "./Cursor"

export type Callback<T = unknown> = (native: T) => void // to be deleted
export type Operation<T = unknown, M = unknown, R = void> = (block: VBlock<T, M, R>) => R
export type VirtualOperation<T = unknown, M = unknown, R = void> = (block: VBlock<T, M, R>, base: () => R) => R
export type AsyncOperation<T = unknown, M = unknown> = (block: VBlock<T, M, Promise<void>>) => Promise<void>
export type Type<T> = new (...args: any[]) => T
export type BlockBody<T = unknown, M = unknown, R = void> = Operation<T, M, R> | BlockVmt<T, M, R>
export const enum Priority { Realtime = 0, Normal = 1, Background = 2 }

export interface BlockVmt<T = unknown, M = unknown, R = void> {
  base?: BlockVmt<T, M, R>
  key?: string
  autonomous?: boolean
  triggers?: unknown
  initialize?: Operation<T, M, R>
  render?: Operation<T, M, R>
  finalize?: Operation<T, M, R>
  redefinedInitialize?: VirtualOperation<T, M, R>
  redefinedRender?: VirtualOperation<T, M, R>
  redefinedFinalize?: VirtualOperation<T, M, R>
}

export function vmt<T, M, R>(body: BlockBody<T, M, R> | undefined): BlockVmt<T, M, R> | undefined {
  if (body instanceof Function)
    body = { render: body }
  return body
}

export function setContext<T extends Object>(
  key: Type<T>, context: T): void {
  return VBlockImpl.setContext(key, context)
}

export function tryUseContext<T extends Object>(key: Type<T>): T | undefined {
  return VBlockImpl.tryUseContext(key)
}

export function useContext<T extends Object>(key: Type<T>): T {
  return VBlockImpl.useContext(key)
}

// VBlock

export abstract class VBlock<T = unknown, M = unknown, R = void> {
  static readonly shortFrameDuration = 16 // ms
  static readonly longFrameDuration = 300 // ms
  static currentRenderingPriority = Priority.Realtime
  static frameDuration = VBlock.longFrameDuration
  // User-defined properties
  abstract readonly key: string
  abstract readonly driver: AbstractDriver<T>
  abstract readonly body: Readonly<BlockVmt<T, M, R>>
  abstract model: M
  abstract cells: Cells
  abstract widthGrowth: number
  abstract minWidth: string
  abstract maxWidth: string
  abstract heightGrowth: number
  abstract minHeight: string
  abstract maxHeight: string
  abstract contentAlignment: Align
  abstract frameAlignment: Align
  abstract contentWrapping: boolean
  abstract overlayVisible: boolean | undefined
  abstract childrenShuffling: boolean
  abstract renderingPriority?: Priority
  abstract style(styleName: string, enabled?: boolean): void
  // System-managed properties
  abstract readonly level: number
  abstract readonly host: VBlock // (!) may differ from owner
  abstract readonly children: CollectionReader<VBlock>
  abstract readonly item: Item<VBlock> | undefined
  abstract readonly stamp: number
  abstract readonly native: T

  get isInitialRendering(): boolean {
    return this.stamp === 2
  }

  abstract configureReactronic(options: Partial<MemberOptions>): MemberOptions

  static root(render: () => void): void {
    gSysRoot.instance.body.render = render
    triggerRendering(gSysRoot)
  }

  static get current(): VBlock {
    return gCurrent.instance
  }

  static renderNestedTreesThenDo(action: (error: unknown) => void): void {
    runRenderNestedTreesThenDo(undefined, action)
  }

  static runForAllBlocks<T>(action: (e: T) => void): void {
    forEachChildRecursively(gSysRoot, action)
  }

  static claim<T = undefined, M = unknown, R = void>(
    driver: AbstractDriver<T> | undefined,
    body: BlockBody<T, M, R>): VBlock<T, M, R> {
    let result: VBlockImpl<T, M, R>
    const owner = gCurrent.instance
    const children = owner.children
    let ex: Item<VBlockImpl<any, any, any>> | undefined = undefined
    // Normalize parameters
    driver ??= AbstractDriver.group
    if (body instanceof Function)
      body = { render: body }
    let key = body.key
    // Check for coalescing separators or lookup for existing block
    if (driver.isLine) {
      const last = children.lastClaimedItem()
      if (last?.instance?.driver === driver)
        ex = last
    }
    ex ??= children.claim(key = key || VBlock.generateKey(owner), undefined,
      "nested blocks can be declared inside render function only")
    // Reuse existing block or claim a new one
    if (ex) {
      result = ex.instance
      if (result.driver !== driver && driver !== undefined)
        throw new Error(`changing block driver is not yet supported: "${result.driver.name}" -> "${driver?.name}"`)
      const exTriggers = result.body.triggers
      if (triggersAreEqual(body.triggers, exTriggers))
        body.triggers = exTriggers // preserve triggers instance
      result.body = body
    }
    else { // create new
      result = new VBlockImpl<T, M, R>(key || VBlock.generateKey(owner), driver, owner, body)
      result.item = children.add(result)
      VBlockImpl.grandCount++
      if (body.autonomous)
        VBlockImpl.disposableCount++
    }
    return result
  }

  private static generateKey(owner: VBlockImpl): string {
    const n = owner.numerator++
    const lettered = emitLetters(n)
    let result: string
    if (Rx.isLogging)
      result = `${getCallerInfo(lettered)}!`
    else
      result = `${lettered}!`
    return result
  }

  static getDefaultLoggingOptions(): LoggingOptions | undefined {
    return VBlockImpl.logging
  }

  static setDefaultLoggingOptions(logging?: LoggingOptions): void {
    VBlockImpl.logging = logging
  }
}

// LayoutKind

export enum LayoutKind {
  Block = 0,  // 000
  Grid = 1,   // 001
  Line = 2,    // 010
  Group = 3,  // 011
  Text = 4,   // 100
}

// AbstractDriver

const createDefaultCursor = (): Cursor => new Cursor()

export class AbstractDriver<T> {
  public static readonly group = new AbstractDriver<any>("group", LayoutKind.Group)

  readonly name: string
  readonly layout: LayoutKind
  readonly createCursor: () => Cursor
  get isSequential(): boolean { return (this.layout & 1) === 0 } // Block, Text, Line
  get isAuxiliary(): boolean { return (this.layout & 2) === 2 } // Grid, Group
  get isBlock(): boolean { return this.layout === LayoutKind.Block }
  get isGrid(): boolean { return this.layout === LayoutKind.Grid }
  get isLine(): boolean { return this.layout === LayoutKind.Line }

  constructor(name: string, layout: LayoutKind, createCursor?: () => Cursor) {
    this.name = name
    this.layout = layout
    this.createCursor = createCursor ?? createDefaultCursor
  }

  initialize(block: VBlock<T>, native: T): void {
    const b = block as VBlockImpl<T>
    b.native = native
    invokeInitializeChain(b, b.body)
  }

  deploy(block: VBlock<T>): void {
    // nothing to do by default
  }

  render(block: VBlock<T>): void | Promise<void> {
    invokeRenderChain(block, block.body)
  }

  finalize(block: VBlock<T>, isLeader: boolean): boolean {
    const b = block as VBlockImpl<T>
    invokeFinalizeChain(b, b.body)
    b.native = null as T // hack
    return isLeader // treat children as finalization leaders as well
  }

  applyCellRange(block: VBlock<T, any, any>, cellRange: CellRange | undefined): void {
    // do nothing
  }

  applyWidthGrowth(block: VBlock<T, any, any>, widthGrowth: number): void {
    // do nothing
  }

  applyMinWidth(block: VBlock<T, any, any>, minWidth: string): void {
    // do nothing
  }

  applyMaxWidth(block: VBlock<T, any, any>, maxWidth: string): void {
    // do nothing
  }

  applyHeightGrowth(block: VBlock<T, any, any>, heightGrowth: number): void {
    // do nothing
  }

  applyMinHeight(block: VBlock<T, any, any>, minHeight: string): void {
    // do nothing
  }

  applyMaxHeight(block: VBlock<T, any, any>, maxHeight: string): void {
    // do nothing
  }

  applyContentAlignment(block: VBlock<T, any, any>, contentAlignment: Align): void {
    // do nothing
  }

  applyFrameAlignment(block: VBlock<T, any, any>, frameAlignment: Align): void {
    // do nothing
  }

  applyContentWrapping(block: VBlock<T, any, any>, contentWrapping: boolean): void {
    // do nothing
  }

  applyOverlayVisible(block: VBlock<T, any, any>, overlayVisible: boolean | undefined): void {
    // do nothing
  }

  applyStyling(block: VBlock<T, any, any>, secondary: boolean, styleName: string, enabled?: boolean): void {
    // do nothing
  }
}

function invokeInitializeChain(block: VBlock, vmt: BlockVmt): void {
  const redefined = vmt.redefinedInitialize
  const base = vmt.base
  if (!redefined) {
    vmt.initialize?.(block)
    if (base)
      invokeInitializeChain(block, base)
  }
  else
    redefined(block, base ? () => invokeInitializeChain(block, base) : NOP)
}

function invokeRenderChain(block: VBlock, vmt: BlockVmt): void {
  const redefined = vmt.redefinedRender
  const base = vmt.base
  if (!redefined) {
    if (base)
      invokeRenderChain(block, base)
    vmt.render?.(block)
  }
  else
    redefined(block, base ? () => invokeRenderChain(block, base) : NOP)
}

function invokeFinalizeChain(block: VBlock, vmt: BlockVmt): void {
  const redefined = vmt.redefinedFinalize
  const base = vmt.base
  if (!redefined) {
    vmt.finalize?.(block)
    if (base)
      invokeFinalizeChain(block, base)
  }
  else
    redefined(block, base ? () => invokeFinalizeChain(block, base) : NOP)
}

export class StaticDriver<T> extends AbstractDriver<T> {
  readonly element: T

  constructor(element: T, name: string, layout: LayoutKind, createCursor?: () => Cursor) {
    super(name, layout, createCursor)
    this.element = element
  }

  initialize(block: VBlock<T>, element: T): void {
    super.initialize(block, this.element)
  }
}

// VBlockImpl

function getBlockKey(block: VBlockImpl): string | undefined {
  return block.stamp >= 0 ? block.key : undefined
}

class VBlockContext<T extends Object = Object> extends ObservableObject {
  @raw next: VBlockContext<object> | undefined
  @raw key: Type<T>
  instance: T

  constructor(key: Type<T>, instance: T) {
    super()
    this.next = undefined
    this.key = key
    this.instance = instance
  }
}

class VBlockImpl<T = any, M = any, R = any> extends VBlock<T, M, R> {
  static grandCount: number = 0
  static disposableCount: number = 0
  static logging: LoggingOptions | undefined = undefined

  // User-defined properties
  readonly key: string
  readonly driver: AbstractDriver<T>
  body: BlockVmt<T, M, R>
  model: M
  assignedCells: Cells
  assignedStyle: boolean
  appliedCellRange: CellRange
  appliedWidthGrowth: number
  appliedMinWidth: string
  appliedMaxWidth: string
  appliedHeightGrowth: number
  appliedMinHeight: string
  appliedMaxHeight: string
  appliedContentAlignment: Align
  appliedFrameAlignment: Align
  appliedContentWrapping: boolean
  appliedOverlayVisible: boolean | undefined
  childrenShuffling: boolean
  renderingPriority: Priority
  // System-managed properties
  readonly level: number
  host: VBlockImpl
  children: Collection<VBlockImpl>
  numerator: number
  item: Item<VBlockImpl> | undefined
  stamp: number
  native: T
  cursor: Cursor
  private senior: VBlockImpl
  context: VBlockContext<any> | undefined

  constructor(key: string, driver: AbstractDriver<T>,
    owner: VBlockImpl, body: BlockVmt<T, M, R>) {
    super()
    // User-defined properties
    this.key = key
    this.driver = driver
    this.body = body
    this.model = undefined as any
    this.assignedCells = undefined
    this.assignedStyle = false
    this.appliedCellRange = Cursor.UndefinedCellRange
    this.appliedWidthGrowth = 0
    this.appliedMinWidth = ""
    this.appliedMaxWidth = ""
    this.appliedHeightGrowth = 0
    this.appliedMinHeight = ""
    this.appliedMaxHeight = ""
    this.appliedContentAlignment = Align.Default
    this.appliedFrameAlignment = Align.Default
    this.appliedContentWrapping = false
    this.appliedOverlayVisible = undefined
    this.childrenShuffling = false
    this.renderingPriority = Priority.Realtime
    // System-managed properties
    this.level = owner.level + 1
    this.host = owner // owner is default host, but can be changed
    this.children = new Collection<VBlockImpl>(driver.isSequential, getBlockKey)
    this.numerator = 0
    this.item = undefined
    this.stamp = 0
    this.native = undefined as T // hack
    this.cursor = driver.createCursor()
    this.senior = owner.context ? owner : owner.senior
    this.context = undefined
  }

  get isMoved(): boolean {
    let owner = this.host
    if (owner.driver.isLine)
      owner = owner.host
    return owner.children.isMoved(this.item!)
  }

  @reactive
  @options({
    reentrance: Reentrance.CancelPrevious,
    triggeringArgs: true,
    noSideEffects: false,
  })
  render(_triggers: unknown): void {
    // triggers parameter is used to enforce rendering by owner
    renderNow(this.item!)
  }

  get cells(): Cells { return this.assignedCells }
  set cells(value: Cells) {
    if (this.assignedCells !== undefined)
      throw new Error("cells can be assigned only once during rendering")
    const cellRange = this.host.cursor.onwards(value)
    if (!equalCellRanges(cellRange, this.appliedCellRange)) {
      this.driver.applyCellRange(this, cellRange)
      this.appliedCellRange = cellRange
    }
    this.assignedCells = value ?? { }
  }
  get widthGrowth(): number { return this.appliedWidthGrowth }
  set widthGrowth(value: number) {
    if (value !== this.appliedWidthGrowth) {
      this.driver.applyWidthGrowth(this, value)
      this.appliedWidthGrowth = value
    }
  }
  get minWidth(): string { return this.appliedMinWidth }
  set minWidth(value: string) {
    if (value !== this.appliedMinWidth) {
      this.driver.applyMinWidth(this, value)
      this.appliedMinWidth = value
    }
  }
  get maxWidth(): string { return this.appliedMaxWidth }
  set maxWidth(value: string) {
    if (value !== this.appliedMaxWidth) {
      this.driver.applyMaxWidth(this, value)
      this.appliedMaxWidth = value
    }
  }
  get heightGrowth(): number { return this.appliedHeightGrowth }
  set heightGrowth(value: number) {
    if (value !== this.appliedHeightGrowth) {
      this.driver.applyHeightGrowth(this, value)
      this.appliedHeightGrowth = value
    }
  }
  get minHeight(): string { return this.appliedMinHeight }
  set minHeight(value: string) {
    if (value !== this.appliedMinHeight) {
      this.driver.applyMinHeight(this, value)
      this.appliedMinHeight = value
    }
  }
  get maxHeight(): string { return this.appliedMaxHeight }
  set maxHeight(value: string) {
    if (value !== this.appliedMaxHeight) {
      this.driver.applyMaxHeight(this, value)
      this.appliedMaxHeight = value
    }
  }
  get contentAlignment(): Align { return this.appliedContentAlignment }
  set contentAlignment(value: Align) {
    if (value !== this.appliedContentAlignment) {
      this.driver.applyContentAlignment(this, value)
      this.appliedContentAlignment = value
    }
  }
  get frameAlignment(): Align { return this.appliedFrameAlignment }
  set frameAlignment(value: Align) {
    if (value !== this.appliedFrameAlignment) {
      this.driver.applyFrameAlignment(this, value)
      this.appliedFrameAlignment = value
    }
  }
  get contentWrapping(): boolean { return this.appliedContentWrapping }
  set contentWrapping(value: boolean) {
    if (value !== this.appliedContentWrapping) {
      this.driver.applyContentWrapping(this, value)
      this.appliedContentWrapping = value
    }
  }
  get overlayVisible(): boolean | undefined { return this.appliedOverlayVisible }
  set overlayVisible(value: boolean | undefined) {
    if (value !== this.appliedOverlayVisible) {
      this.driver.applyOverlayVisible(this, value)
      this.appliedOverlayVisible = value
    }
  }

  style(styleName: string, enabled?: boolean): void {
    this.driver.applyStyling(this, this.assignedStyle, styleName, enabled)
    this.assignedStyle = true
  }

  configureReactronic(options: Partial<MemberOptions>): MemberOptions {
    if (this.stamp !== 1 || !this.body.autonomous)
      throw new Error("reactronic can be configured only for reacting blocks and only inside initialize")
    return Rx.getController(this.render).configure(options)
  }

  static tryUseContext<T extends Object>(key: Type<T>): T | undefined {
    let b = gCurrent.instance
    while (b.context?.key !== key && b.host !== b)
      b = b.senior
    return b.context?.instance as any // TODO: to get rid of any
  }

  static useContext<T extends Object>(key: Type<T>): T {
    const result = VBlockImpl.tryUseContext(key)
    if (!result)
      throw new Error(`${key.name} context doesn't exist`)
    return result
  }

  static setContext<T>(key: Type<T>, context: T): void {
    const block = gCurrent.instance
    const host = block.host
    const hostCtx = nonreactive(() => host.context?.instance)
    if (context && context !== hostCtx) {
      if (hostCtx)
        block.senior = host
      else
        block.senior = host.senior
      Transaction.run({ separation: true }, () => {
        const ctx = block.context
        if (ctx) {
          ctx.key = key
          ctx.instance = context // update context thus invalidate observers
        }
        else
          block.context = new VBlockContext<any>(key, context)
      })
    }
    else if (hostCtx)
      block.senior = host
    else
      block.senior = host.senior
  }
}

// Internal

function runRenderNestedTreesThenDo(error: unknown, action: (error: unknown) => void): void {
  const current = gCurrent
  const owner = current.instance
  const children = owner.children
  if (children.isMergeInProgress) {
    let promised: Promise<void> | undefined = undefined
    try {
      children.endMerge(error)
      // Finalize removed blocks
      for (const item of children.removedItems(true)) {
        triggerFinalization(item, true, true)
      }
      if (!error) {
        // Lay out and render actual blocks
        const ownerIsBlock = owner.driver.isBlock
        const sequential = children.strict
        const cursor = owner.cursor
        let p1: Array<Item<VBlockImpl>> | undefined = undefined
        let p2: Array<Item<VBlockImpl>> | undefined = undefined
        let redeploy = false
        let partHost = owner
        cursor.reset()
        for (const item of children.items()) {
          if (Transaction.isCanceled)
            break
          const block = item.instance
          const driver = block.driver
          const host = driver.isLine ? owner : partHost
          const p = block.renderingPriority ?? Priority.Realtime
          redeploy = markToRedeployIfNecessary(redeploy, host, item, children, sequential)
          if (p === Priority.Realtime)
            triggerRendering(item) // render synchronously
          else if (p === Priority.Normal)
            p1 = push(item, p1) // defer for P1 async rendering
          else
            p2 = push(item, p2) // defer for P2 async rendering
          if (ownerIsBlock && driver.isLine)
            partHost = block
        }
        // Render incremental children (if any)
        if (!Transaction.isCanceled && (p1 !== undefined || p2 !== undefined))
          promised = startIncrementalRendering(current, children, p1, p2).then(
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

function markToRedeployIfNecessary(redeploy: boolean, host: VBlockImpl,
  item: Item<VBlockImpl>, children: Collection<VBlockImpl>, sequential: boolean): boolean {
  // Detects element redeployment when abstract blocks
  // exist among regular blocks with HTML elements
  const block = item.instance
  if (block.native) {
    if (redeploy || block.host !== host) {
      children.markAsMoved(item)
      redeploy = false
    }
  }
  else if (sequential && children.isMoved(item))
    redeploy = true // apply to the first block with an element
  block.host = host
  return redeploy
}

async function startIncrementalRendering(
  owner: Item<VBlockImpl>,
  allChildren: Collection<VBlockImpl>,
  priority1?: Array<Item<VBlockImpl>>,
  priority2?: Array<Item<VBlockImpl>>): Promise<void> {
  const stamp = owner.instance.stamp
  if (priority1)
    await renderIncrementally(owner, stamp, allChildren, priority1, Priority.Normal)
  if (priority2)
    await renderIncrementally(owner, stamp, allChildren, priority2, Priority.Background)
}

async function renderIncrementally(owner: Item<VBlockImpl>, stamp: number,
  allChildren: Collection<VBlockImpl>, items: Array<Item<VBlockImpl>>,
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

function triggerRendering(item: Item<VBlockImpl>): void {
  const block = item.instance
  if (block.stamp >= 0) {
    if (block.body.autonomous) {
      if (block.stamp === 0) {
        Transaction.outside(() => {
          if (Rx.isLogging)
            Rx.setLoggingHint(block, block.key)
          Rx.getController(block.render).configure({
            order: block.level,
          })
        })
      }
      nonreactive(block.render, block.body.triggers) // reactive auto-rendering
    }
    else
      renderNow(item)
  }
}

function redeployIfNecessary(block: VBlockImpl): void {
  const driver = block.driver
  if (block.stamp === 0) {
    block.stamp = 1
    driver.initialize(block, undefined)
    driver.deploy(block)
  }
  else if (block.isMoved)
    driver.deploy(block)
}

function renderNow(item: Item<VBlockImpl>): void {
  const block = item.instance
  if (block.stamp >= 0) { // if block is alive
    let result: unknown = undefined
    runUnder(item, () => {
      try {
        redeployIfNecessary(block)
        block.stamp++
        block.numerator = 0
        block.assignedCells = undefined // reset
        block.assignedStyle = false // reset
        block.children.beginMerge()
        result = block.driver.render(block)
        if (block.driver.isLine)
          block.host.cursor.lineFeed()
        else if (block.assignedCells === undefined)
          block.cells = undefined // assign cells automatically
        if (result instanceof Promise)
          result.then(
            v => { runRenderNestedTreesThenDo(undefined, NOP); return v },
            e => { console.log(e); runRenderNestedTreesThenDo(e ?? new Error("unknown error"), NOP) })
        else
          runRenderNestedTreesThenDo(undefined, NOP)
      }
      catch(e: unknown) {
        runRenderNestedTreesThenDo(e, NOP)
        console.log(`Rendering failed: ${block.key}`)
        console.log(`${e}`)
      }
    })
  }
}

function triggerFinalization(item: Item<VBlockImpl>, isLeader: boolean, individual: boolean): void {
  const block = item.instance
  if (block.stamp >= 0) {
    if (individual && block.key !== block.body.key && !block.driver.isLine)
      console.log(`WARNING: it is recommended to assign explicit key for conditionally rendered block in order to avoid unexpected side effects: ${block.key}`)
    block.stamp = ~block.stamp
    // Finalize block itself and remove it from collection
    const childrenAreLeaders = block.driver.finalize(block, isLeader)
    if (block.body.autonomous) {
      // Defer disposal if block is reactive
      item.aux = undefined
      const last = gLastToDispose
      if (last)
        gLastToDispose = last.aux = item
      else
        gFirstToDispose = gLastToDispose = item
      if (gFirstToDispose === item)
        Transaction.run({ separation: "disposal", hint: `runDisposalLoop(initiator=${item.instance.key})` }, () => {
          void runDisposalLoop().then(NOP, error => console.log(error))
        })
    }
    // Finalize children if any
    for (const item of block.children.items())
      triggerFinalization(item, childrenAreLeaders, false)
    VBlockImpl.grandCount--
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
    VBlockImpl.disposableCount--
  }
  // console.log(`Block count: ${VBlock.grandCount} totally (${VBlock.disposableCount} disposable)`)
  gFirstToDispose = gLastToDispose = undefined // reset loop
}

function forEachChildRecursively(item: Item<VBlockImpl>, action: (e: any) => void): void {
  const block = item.instance
  const e = block.native
  e && action(e)
  for (const item of block.children.items())
    forEachChildRecursively(item, action)
}

function wrap<T>(func: (...args: any[]) => T): (...args: any[]) => T {
  const current = gCurrent
  const wrappedRunUnder = (...args: any[]): T => {
    return runUnder(current, func, ...args)
  }
  return wrappedRunUnder
}

function runUnder<T>(item: Item<VBlockImpl>, func: (...args: any[]) => T, ...args: any[]): T {
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

// Seamless support for asynchronous programing

const ORIGINAL_PROMISE_THEN = Promise.prototype.then

function reactronicDomHookedThen(this: any,
  resolve?: ((value: any) => any | PromiseLike<any>) | undefined | null,
  reject?: ((reason: any) => never | PromiseLike<never>) | undefined | null): Promise<any | never> {
  resolve = resolve ? wrap(resolve) : defaultResolve
  reject = reject ? wrap(reject) : defaultReject
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

const gSysDriver = new StaticDriver<null>(null, "SYSTEM", LayoutKind.Group)
const gSysRoot = Collection.createItem<VBlockImpl>(new VBlockImpl<null, void>(
  gSysDriver.name, gSysDriver, { level: 0 } as VBlockImpl, { autonomous: true, render: NOP })) // fake owner/host (overwritten below)
gSysRoot.instance.item = gSysRoot

Object.defineProperty(gSysRoot.instance, "host", {
  value: gSysRoot.instance,
  writable: false,
  configurable: false,
  enumerable: true,
})

Object.defineProperty(gSysRoot.instance, "senior", {
  value: gSysRoot.instance,
  writable: false,
  configurable: false,
  enumerable: true,
})

let gCurrent: Item<VBlockImpl> = gSysRoot
let gFirstToDispose: Item<VBlockImpl> | undefined = undefined
let gLastToDispose: Item<VBlockImpl> | undefined = undefined
