// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { reactive, nonreactive, Transaction, options, Reentrance, Rx, Monitor, LoggingOptions, Collection, Item, CollectionReader, ObservableObject, raw } from "reactronic"
import { Bounds, Place, Allocator, To } from "./Allocator"

export type Callback<T = unknown> = (native: T) => void // to be deleted
export type Render<T = unknown, M = unknown, R = void> = (native: T, block: VBlock<T, M, R>, base?: Render<T, M, R>) => R
export type AsyncRender<T = unknown, M = unknown> = (native: T, block: VBlock<T, M, Promise<void>>) => Promise<void>
export const enum Priority { SyncP0 = 0, AsyncP1 = 1, AsyncP2 = 2 }
export type Type<T> = new (...args: any[]) => T

export interface BlockArgs<T = unknown, M = unknown, R = void> extends Bounds {
  reacting?: boolean
  triggers?: unknown
  priority?: Priority,
  monitor?: Monitor
  throttling?: number,
  logging?: Partial<LoggingOptions>
  shuffle?: boolean
  initialize?: Render<T, M, R>
  override?: Render<T, M, R>
  render?: Render<T, M, R>
  finalize?: Render<T, M, R>
}

export function asComponent<T, M, R>(
  outer: BlockArgs<T, M, R> | undefined,
  base: BlockArgs<T, M, R>): BlockArgs<T, M, R> {
  const result: BlockArgs<T, M, R> = {
    ...base,
    ...outer,
    initialize: via(outer?.initialize, base.initialize),
    render: via(outer?.render, base.render),
    finalize: via(outer?.finalize, base.finalize),
  }
  return result
}

function via<T, M, R>(outer: Render<T, M, R> | undefined, base: Render<T, M, R> | undefined): Render<T, M, R> {
  return outer ? (e, b) => outer(e, b, base) : base ?? NOP
}

export function setContext<T extends Object>(
  type: Type<T>, context: T): void {
  return VBlockImpl.setContext(type, context)
}

export function use<T extends Object>(type: Type<T>): T {
  return VBlockImpl.use(type)
}

// VBlock

export abstract class VBlock<T = unknown, M = unknown, R = void> {
  static readonly shortFrameDuration = 16 // ms
  static readonly longFrameDuration = 300 // ms
  static currentRenderingPriority = Priority.SyncP0
  static frameDuration = VBlock.longFrameDuration
  // User-defined properties
  abstract readonly name: string
  abstract readonly driver: AbstractDriver<T>
  abstract readonly args: Readonly<BlockArgs<T, M, R>>
  abstract model: M
  // System-managed properties
  abstract readonly level: number
  abstract readonly host: VBlock // (!) may differ from owner
  abstract readonly children: CollectionReader<VBlock>
  abstract readonly item: Item<VBlock> | undefined
  abstract readonly stamp: number
  abstract readonly native: T | undefined
  abstract readonly place: Readonly<Place> | undefined

  render(): R {
    return invokeRenderFunction(this)
  }

  get isInitialRendering(): boolean {
    return this.stamp === 2
  }

  static root(render: () => void): void {
    gSysRoot.instance.args.render = render
    prepareAndRunRender(gSysRoot, false, false)
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
    name: string, driver: AbstractDriver<T> | undefined,
    args: BlockArgs<T, M, R>): VBlock<T, M, R> {
    // Emit block either by reusing existing one or by creating a new one
    let result: VBlockImpl<T, M, R>
    const owner = gCurrent.instance
    const children = owner.children
    let ex: Item<VBlockImpl<any, any, any>> | undefined = undefined
    // Check for coalescing separators or lookup for existing block
    driver ??= AbstractDriver.group
    name ||= `${++owner.numerator}`
    if (driver.isPart) {
      const last = children.lastClaimedItem()
      if (last?.instance?.driver === driver)
        ex = last
    }
    ex ??= children.claim(name, undefined, "nested blocks can be declared inside render function only")
    // Reuse existing block or claim a new one
    if (ex) {
      result = ex.instance
      if (result.driver !== driver && driver !== undefined)
        throw new Error(`changing block driver is not yet supported: "${result.driver.name}" -> "${driver?.name}"`)
      const exTriggers = result.args?.triggers
      if (triggersAreEqual(args.triggers, exTriggers))
        args.triggers = exTriggers // preserve triggers instance
      result.args = args
    }
    else { // create new
      result = new VBlockImpl<T, M, R>(name, driver, owner, args)
      result.item = children.add(result)
      VBlockImpl.grandCount++
      if (args.reacting)
        VBlockImpl.disposableCount++
    }
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
  Part = 2,   // 010
  Group = 3,  // 011
  Text = 4,   // 100
}

// AbstractDriver

const createDefaultAllocator = (): Allocator => new Allocator()

export class AbstractDriver<T> {
  public static readonly group = new AbstractDriver<any>("group", LayoutKind.Group)

  readonly name: string
  readonly layout: LayoutKind
  readonly createAllocator: () => Allocator
  get isSequential(): boolean { return (this.layout & 1) === 0 } // Block, Text, Line
  get isAuxiliary(): boolean { return (this.layout & 2) === 2 } // Grid, Group
  get isBlock(): boolean { return this.layout === LayoutKind.Block }
  get isGrid(): boolean { return this.layout === LayoutKind.Grid }
  get isPart(): boolean { return this.layout === LayoutKind.Part }

  constructor(name: string, layout: LayoutKind, createAllocator?: () => Allocator) {
    this.name = name
    this.layout = layout
    this.createAllocator = createAllocator ?? createDefaultAllocator
  }

  initialize(block: VBlock<T>, native: T | undefined): void {
    const b = block as VBlockImpl<T>
    b.native = native
    const initialize = block.args?.initialize
    if (initialize) {
      if (Array.isArray(initialize))
        for (const init of initialize)
          init(native!, block, NOP)
      else
        initialize(native!, block, NOP)
    }
  }

  finalize(block: VBlock<T>, isLeader: boolean): boolean {
    const b = block as VBlockImpl<T>
    const finalize = block.args?.finalize
    if (finalize) {
      const native = block.native
      if (Array.isArray(finalize))
        for (const fin of finalize)
          fin(native!, block, NOP)
      else
        finalize(native!, block, NOP)
    }
    b.native = undefined
    return isLeader // treat children as finalization leaders as well
  }

  deploy(block: VBlock<T>, sequential: boolean): void {
    // nothing to do by default
  }

  arrange(block: VBlock<T>, place: Place | undefined, heightGrowth: number | undefined): void {
    const b = block as VBlockImpl<T>
    if (heightGrowth === undefined) {
      b.place = place
      // Bump host height growth if necessary
      const host = b.host
      if (host.driver.isPart) {
        const growth = place?.heightGrowth ?? 0
        if (growth > 0 && (host.place?.heightGrowth ?? 0) < growth)
          host.driver.arrange(host, undefined, growth)
      }
    }
    else if (heightGrowth > 0) {
      if (b.place === undefined)
        b.place = {
          exact: undefined,
          widthMin: "", widthMax: "", widthGrowth: 0,
          heightMin: "", heightMax: "", heightGrowth,
          alignContent: To.Default,
          alignFrame: To.Default,
          flowWrap: false,
        }
      else
        b.place.heightGrowth = heightGrowth
    }
  }

  render(block: VBlock<T>): void | Promise<void> {
    let result: void | Promise<void>
    const override = block.args?.override
    if (override)
      result = override(block.native!, block, NOP)
    else
      result = invokeRenderFunction(block)
    return result
  }
}

function invokeRenderFunction<R>(block: VBlock<any, any, R>): R {
  const r = block.args.render ?? NOP
  return r(block.native!, block, NOP)
}

export class StaticDriver<T> extends AbstractDriver<T> {
  readonly element: T

  constructor(element: T, name: string, layout: LayoutKind, createAllocator?: () => Allocator) {
    super(name, layout, createAllocator)
    this.element = element
  }

  initialize(block: VBlock<T>, element: T | undefined): void {
    super.initialize(block, this.element)
  }
}

// VBlockImpl

function getBlockName(block: VBlockImpl): string | undefined {
  return block.stamp >= 0 ? block.name : undefined
}

class VBlockContext<T extends Object = Object> extends ObservableObject {
  @raw type: Type<T>
  instance: T

  constructor(type: Type<T>, instance: T) {
    super()
    this.type = type
    this.instance = instance
  }
}

class VBlockImpl<T = any, M = any, R = any> extends VBlock<T, M, R> {
  static grandCount: number = 0
  static disposableCount: number = 0
  static logging: LoggingOptions | undefined = undefined

  // User-defined properties
  readonly name: string
  readonly driver: AbstractDriver<T>
  args: BlockArgs<T, M, R>
  model: M
  // System-managed properties
  readonly level: number
  host: VBlockImpl
  children: Collection<VBlockImpl>
  numerator: number
  item: Item<VBlockImpl> | undefined
  stamp: number
  native: T | undefined
  place: Place | undefined
  allocator: Allocator
  private senior: VBlockImpl
  context: VBlockContext<any> | undefined

  constructor(name: string, driver: AbstractDriver<T>,
    owner: VBlockImpl, args: BlockArgs<T, M, R>) {
    super()
    // User-defined properties
    this.name = name
    this.driver = driver
    this.args = args
    this.model = undefined as any
    // System-managed properties
    this.level = owner.level + 1
    this.host = owner // owner is default host, but can be changed
    this.children = new Collection<VBlockImpl>(driver.isSequential, getBlockName)
    this.numerator = 0
    this.item = undefined
    this.stamp = 0
    this.native = undefined
    this.place = undefined
    this.allocator = driver.createAllocator()
    this.senior = owner.context ? owner : owner.senior
    this.context = undefined
  }

  @reactive
  @options({
    reentrance: Reentrance.CancelPrevious,
    triggeringArgs: true,
    noSideEffects: false,
  })
  rerender(_triggers: unknown): void {
    // triggers parameter is used to enforce rendering by owner
    runRender(this.item!)
  }

  static use<T extends Object>(type: Type<T>): T {
    let b = gCurrent.instance
    while (b.context?.type !== type && b.host !== b)
      b = b.senior
    if (b.host === b)
      throw new Error(`${type.name} context doesn't exist`)
    return b.context?.instance as any // TODO: to get rid of any
  }

  static setContext<T>(type: Type<T>, context: T): void {
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
          ctx.type = type
          ctx.instance = context // update context thus invalidate observers
        }
        else
          block.context = new VBlockContext<any>(type, context)
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
      for (const item of children.removedItems(true))
        runFinalize(item, true)
      if (!error) {
        // Lay out and render actual blocks
        const ownerIsBlock = owner.driver.isBlock
        const sequential = children.strict
        const allocator = owner.allocator
        allocator.reset()
        let p1: Array<Item<VBlockImpl>> | undefined = undefined
        let p2: Array<Item<VBlockImpl>> | undefined = undefined
        let redeploy = false
        let partHost = owner
        for (const item of children.items()) {
          if (Transaction.isCanceled)
            break
          const block = item.instance
          const driver = block.driver
          const opt = block.args
          if (!driver.isPart) {
            const place = allocator.allocate(opt)
            driver.arrange(block, place, undefined)
          }
          else
            allocator.lineFeed()
          const host = driver.isPart ? owner : partHost
          redeploy = markToRedeployIfNecessary(redeploy, host, item, children, sequential)
          const priority = opt?.priority ?? Priority.SyncP0
          if (priority === Priority.SyncP0)
            prepareAndRunRender(item, children.isMoved(item), sequential) // render synchronously
          else if (priority === Priority.AsyncP1)
            p1 = push(item, p1) // defer for P1 async rendering
          else
            p2 = push(item, p2) // defer for P2 async rendering
          if (ownerIsBlock && driver.isPart)
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
    await renderIncrementally(owner, stamp, allChildren, priority1, Priority.AsyncP1)
  if (priority2)
    await renderIncrementally(owner, stamp, allChildren, priority2, Priority.AsyncP2)
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
      const sequential = block.children.strict
      if (block.args?.shuffle)
        shuffle(items)
      const frameDurationLimit = priority === Priority.AsyncP2 ? VBlock.shortFrameDuration : Infinity
      let frameDuration = Math.min(frameDurationLimit, Math.max(VBlock.frameDuration / 4, VBlock.shortFrameDuration))
      for (const child of items) {
        prepareAndRunRender(child, allChildren.isMoved(child), sequential)
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

function prepareAndRunRender(item: Item<VBlockImpl>,
  redeploy: boolean, sequential: boolean): void {
  const block = item.instance
  if (block.stamp >= 0) {
    prepareRender(item, redeploy, sequential)
    if (block.args?.reacting)
      nonreactive(block.rerender, block.args?.triggers) // reactive auto-rendering
    else
      runRender(item)
  }
}

function prepareRender(item: Item<VBlockImpl>,
  redeploy: boolean, sequential: boolean): void {
  const block = item.instance
  const driver = block.driver
  // Initialize, deploy, and move (if needed)
  if (block.stamp === 0) {
    block.stamp = 1
    runUnder(item, () => {
      if (block.args?.reacting) {
        Transaction.outside(() => {
          if (Rx.isLogging)
            Rx.setLoggingHint(block, block.name)
          Rx.getController(block.rerender).configure({
            order: block.level,
            monitor: block.args?.monitor,
            throttling: block.args?.throttling,
            logging: block.args?.logging,
          })
        })
      }
      driver.initialize(block, undefined)
      driver.deploy(block, sequential)
      driver.arrange(block, block.place, undefined)
    })
  }
  else if (redeploy)
    runUnder(item, () => {
      driver.deploy(block, sequential) // , console.log(`redeployed: ${block.name}`)
    })
}

function runRender(item: Item<VBlockImpl>): void {
  const block = item.instance
  if (block.stamp >= 0) { // if block is alive
    let result: unknown = undefined
    runUnder(item, () => {
      try {
        block.stamp++
        block.numerator = 0
        block.children.beginMerge()
        result = block.driver.render(block)
        if (result instanceof Promise)
          result.then(
            v => { runRenderNestedTreesThenDo(undefined, NOP); return v },
            e => { console.log(e); runRenderNestedTreesThenDo(e ?? new Error("unknown error"), NOP) })
        else
          runRenderNestedTreesThenDo(undefined, NOP)
      }
      catch(e: unknown) {
        runRenderNestedTreesThenDo(e, NOP)
        console.log(`Rendering failed: ${block.name}`)
        console.log(`${e}`)
      }
    })
  }
}

function runFinalize(item: Item<VBlockImpl>, isLeader: boolean): void {
  const block = item.instance
  if (block.stamp >= 0) {
    block.stamp = ~block.stamp
    // Finalize block itself and remove it from collection
    const childrenAreLeaders = block.driver.finalize(block, isLeader)
    if (block.args?.reacting) {
      // Defer disposal if block is reactive
      item.aux = undefined
      const last = gLastToDispose
      if (last)
        gLastToDispose = last.aux = item
      else
        gFirstToDispose = gLastToDispose = item
      if (gFirstToDispose === item)
        Transaction.run({ separation: "disposal", hint: `runDisposalLoop(initiator=${item.instance.name})` }, () => {
          void runDisposalLoop().then(NOP, error => console.log(error))
        })
    }
    // Finalize children if any
    for (const item of block.children.items())
      runFinalize(item, childrenAreLeaders)
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
  const native = block.native
  native && action(native)
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
const gSysRoot = Collection.createItem<VBlockImpl>(new VBlockImpl<null, void>("SYSTEM",
  gSysDriver, { level: 0 } as VBlockImpl, { reacting: true, render: NOP })) // fake owner/host (overwritten below)
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