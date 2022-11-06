// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { reactive, nonreactive, Transaction, options, Reentrance, Rx, Monitor, LoggingOptions, Collection, Item, CollectionReader } from 'reactronic'
import { Box, Place, checkIfPlaceChanged, Allocator } from './Layout'

export type Callback<T = unknown> = (native: T) => void // to be deleted
export type Render<T = unknown, M = unknown, R = void> = (native: T, block: Block<T, M, R>) => R
export type AsyncRender<T = unknown, M = unknown> = (native: T, block: Block<T, M, Promise<void>>) => Promise<void>
export const enum Priority { SyncP0 = 0, AsyncP1 = 1, AsyncP2 = 2 }

export interface BlockOptions<T = unknown, M = unknown, R = void> {
  rx?: boolean
  box?: Box
  triggers?: unknown
  priority?: Priority,
  monitor?: Monitor
  throttling?: number,
  logging?: Partial<LoggingOptions>
  shuffle?: boolean
  wrapper?: Render<T, M, R>
}

// Block

export abstract class Block<T = unknown, M = unknown, R = void> {
  static readonly shortFrameDuration = 16 // ms
  static readonly longFrameDuration = 300 // ms
  static currentRenderingPriority = Priority.SyncP0
  static frameDuration = Block.longFrameDuration
  // User-defined properties
  abstract readonly name: string
  abstract readonly driver: AbstractDriver<T>
  abstract readonly renderer: Render<T, M, R>
  abstract readonly options: Readonly<BlockOptions<T, M, R>> | undefined
  abstract model?: M
  // System-managed properties
  abstract readonly level: number
  abstract readonly host: Block // (!) may differ from owner
  abstract readonly children: CollectionReader<Block>
  abstract readonly item: Item<Block> | undefined
  abstract readonly stamp: number
  abstract readonly native: T | undefined

  render(): R {
    return this.renderer(this.native!, this)
  }

  get isInitialRendering(): boolean {
    return this.stamp === 2
  }

  static root(render: () => void): void {
    gSysRoot.self.renderer = render
    prepareThenRunRender(gSysRoot, false, false)
  }

  static get current(): Block {
    return gContext.self
  }

  static renderNestedTreesThenDo(action: (error: unknown) => void): void {
    runRenderNestedTreesThenDo(undefined, action)
  }

  static runForAllBlocks<T>(action: (e: T) => void): void {
    forEachChildRecursively(gSysRoot, action)
  }

  static claim<T = undefined, M = unknown, R = void>(
    name: string, options: BlockOptions<T, M, R> | undefined,
    renderer: Render<T, M, R>, driver?: AbstractDriver<T>): Block<T, M, R> {
    // Emit block either by reusing existing one or by creating a new one
    let result: VBlock<T, M, R>
    const owner = gContext.self
    const children = owner.children
    let existing: Item<VBlock<any, any, any>> | undefined = undefined
    // Check for coalescing separators or lookup for existing block
    driver ??= AbstractDriver.group
    name ||= `!=${++owner.numerator}`
    if (driver.layout === LayoutKind.Part) {
      const last = children.lastClaimedItem()
      if (last?.self?.driver === driver)
        existing = last
    }
    existing ??= children.claim(name)
    // Reuse existing block or claim a new one
    if (existing) {
      result = existing.self
      if (result.driver !== driver && driver !== undefined)
        throw new Error(`changing block driver is not yet supported: "${result.driver.name}" -> "${driver?.name}"`)
      if (options) {
        const existingTriggers = result.options?.triggers
        if (triggersAreEqual(options.triggers, existingTriggers))
          options.triggers = existingTriggers // preserve triggers instance
      }
      result.options = options
      result.renderer = renderer
    }
    else { // create new
      result = new VBlock<T, M, R>(name, driver, owner, options, renderer)
      result.item = children.add(result)
      VBlock.grandCount++
      if (options?.rx)
        VBlock.disposableCount++
    }
    return result
  }

  static getDefaultLoggingOptions(): LoggingOptions | undefined {
    return VBlock.logging
  }

  static setDefaultLoggingOptions(logging?: LoggingOptions): void {
    VBlock.logging = logging
  }
}

// LayoutKind

export enum LayoutKind {
  Block = 0,  // 00
  Grid = 1,   // 01
  Part = 2,   // 10
  Group = 3,  // 11
}

// AbstractDriver

const createDefaultAllocator = (): Allocator => new Allocator()

export class AbstractDriver<T> {
  public static readonly group = new AbstractDriver<any>('group', LayoutKind.Group)

  readonly name: string
  readonly layout: LayoutKind
  readonly createAllocator: () => Allocator
  get isSequential(): boolean { return (this.layout & 1) === 0 } // Block, Line
  get isAuxiliary(): boolean { return (this.layout & 2) === 2 } // Grid, Group

  constructor(name: string, layout: LayoutKind, createAllocator?: () => Allocator) {
    this.name = name
    this.layout = layout
    this.createAllocator = createAllocator ?? createDefaultAllocator
  }

  initialize(block: Block<T>, native: T | undefined): void {
    const b = block as VBlock<T>
    b.native = native
  }

  finalize(block: Block<T>, isLeader: boolean): boolean {
    const b = block as VBlock<T>
    b.native = undefined
    return isLeader // treat children as finalization leaders as well
  }

  deploy(block: Block<T>, sequential: boolean): void {
    // nothing to do by default
  }

  move(block: Block<T>, initialization: boolean): boolean {
    // const b = block as VBlock<T>
    return false
  }

  render(block: Block<T>): void | Promise<void> {
    let result: void | Promise<void>
    const wrapper = block.options?.wrapper
    if (wrapper)
      result = wrapper(block.native!, block)
    else
      result = block.render()
    return result
  }
}

export class StaticDriver<T> extends AbstractDriver<T> {
  readonly element: T

  constructor(element: T, name: string, layout: LayoutKind, createAllocator?: () => Allocator) {
    super(name, layout, createAllocator)
    this.element = element
  }

  initialize(block: Block<T>, element: T | undefined): void {
    super.initialize(block, this.element)
  }
}

// VBlock

function getBlockName(block: VBlock): string | undefined {
  return block.stamp >= 0 ? block.name : undefined
}

class VBlock<T = any, M = any, R = any> extends Block<T, M, R> {
  static grandCount: number = 0
  static disposableCount: number = 0
  static logging: LoggingOptions | undefined = undefined

  // User-defined properties
  readonly name: string
  readonly driver: AbstractDriver<T>
  renderer: Render<T, M, R>
  options: BlockOptions<T, M, R> | undefined
  model: M | undefined
  // System-managed properties
  readonly level: number
  host: VBlock
  children: Collection<VBlock>
  numerator: number
  item: Item<VBlock> | undefined
  stamp: number
  native: T | undefined
  place: Place | undefined
  allocator: Allocator

  constructor(name: string, driver: AbstractDriver<T>, owner: VBlock,
    options: BlockOptions<T, M, R> | undefined, renderer: Render<T, M, R>) {
    super()
    // User-defined properties
    this.name = name
    this.driver = driver
    this.renderer = renderer
    this.options = options
    this.model = undefined
    // System-managed properties
    this.level = owner.level + 1
    this.host = owner // owner is default host, but can be changed
    this.children = new Collection<VBlock>(driver.isSequential, getBlockName)
    this.numerator = 0
    this.item = undefined
    this.stamp = 0
    this.native = undefined
    this.place = undefined
    this.allocator = driver.createAllocator()
  }

  @reactive
  @options({
    reentrance: Reentrance.CancelPrevious,
    triggeringArgs: true,
    noSideEffects: false,
  })
  autorender(_triggers: unknown): void {
    // triggers parameter is used to enforce rendering by owner
    runRender(this.item!)
  }
}

// Internal

function runRenderNestedTreesThenDo(error: unknown, action: (error: unknown) => void): void {
  const context = gContext
  const owner = context.self
  const children = owner.children
  if (children.isMergeInProgress) {
    let promised: Promise<void> | undefined = undefined
    try {
      children.endMerge(error)
      // Finalize removed blocks
      for (const child of children.removedItems(true))
        runFinalize(child, true)
      if (!error) {
        // Lay out and render actual blocks
        const sequential = children.strict
        const allocator = owner.allocator
        allocator.reset()
        let p1: Array<Item<VBlock>> | undefined = undefined
        let p2: Array<Item<VBlock>> | undefined = undefined
        let redeploy = false
        let host = owner
        for (const child of children.items()) {
          if (Transaction.isCanceled)
            break
          const x = child.self
          const opt = x.options
          const place = allocator.allocate(opt?.box)
          if (checkIfPlaceChanged(x.place, place)) {
            x.place = place
            if (x.stamp > 0)
              x.driver.move(x, false)
          }
          redeploy = checkForRedeployment(redeploy, host, child, children, sequential)
          const priority = opt?.priority ?? Priority.SyncP0
          if (priority === Priority.SyncP0)
            prepareThenRunRender(child, children.isMoved(child), sequential) // render synchronously
          else if (priority === Priority.AsyncP1)
            p1 = push(child, p1) // defer for P1 async rendering
          else
            p2 = push(child, p2) // defer for P2 async rendering
          if (x.driver.layout === LayoutKind.Part)
            host = x
        }
        // Render incremental children (if any)
        if (!Transaction.isCanceled && (p1 !== undefined || p2 !== undefined))
          promised = startIncrementalRendering(context, children, p1, p2).then(
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

function checkForRedeployment(redeploy: boolean, host: VBlock,
  child: Item<VBlock>, children: Collection<VBlock>, sequential: boolean): boolean {
  // Detects element redeployment when abstract blocks
  // exist among regular blocks with HTML elements
  const block = child.self
  if (block.native) {
    if (redeploy || block.host !== host) {
      children.markAsMoved(child)
      redeploy = false
    }
  }
  else if (sequential && children.isMoved(child))
    redeploy = true // apply to the first block with an element
  block.host = host
  return redeploy
}

async function startIncrementalRendering(
  owner: Item<VBlock>,
  allChildren: Collection<VBlock>,
  priority1?: Array<Item<VBlock>>,
  priority2?: Array<Item<VBlock>>): Promise<void> {
  const stamp = owner.self.stamp
  if (priority1)
    await renderIncrementally(owner, stamp, allChildren, priority1, Priority.AsyncP1)
  if (priority2)
    await renderIncrementally(owner, stamp, allChildren, priority2, Priority.AsyncP2)
}

async function renderIncrementally(owner: Item<VBlock>, stamp: number,
  allChildren: Collection<VBlock>, items: Array<Item<VBlock>>,
  priority: Priority): Promise<void> {
  await Transaction.requestNextFrame()
  const block = owner.self
  if (!Transaction.isCanceled || !Transaction.isFrameOver(1, Block.shortFrameDuration / 3)) {
    let outerPriority = Block.currentRenderingPriority
    Block.currentRenderingPriority = priority
    try {
      const sequential = block.children.strict
      if (block.options?.shuffle)
        shuffle(items)
      const frameDurationLimit = priority === Priority.AsyncP2 ? Block.shortFrameDuration : Infinity
      let frameDuration = Math.min(frameDurationLimit, Math.max(Block.frameDuration / 4, Block.shortFrameDuration))
      for (const child of items) {
        prepareThenRunRender(child, allChildren.isMoved(child), sequential)
        if (Transaction.isFrameOver(1, frameDuration)) {
          Block.currentRenderingPriority = outerPriority
          await Transaction.requestNextFrame(0)
          outerPriority = Block.currentRenderingPriority
          Block.currentRenderingPriority = priority
          frameDuration = Math.min(4 * frameDuration, Math.min(frameDurationLimit, Block.frameDuration))
        }
        if (Transaction.isCanceled && Transaction.isFrameOver(1, Block.shortFrameDuration / 3))
          break
      }
    }
    finally {
      Block.currentRenderingPriority = outerPriority
    }
  }
}

function prepareThenRunRender(item: Item<VBlock>,
  redeploy: boolean, sequential: boolean): void {
  const block = item.self
  if (block.stamp >= 0) {
    prepareRender(item, redeploy, sequential)
    if (block.options?.rx)
      nonreactive(block.autorender, block.options?.triggers) // reactive auto-rendering
    else
      runRender(item)
  }
}

function prepareRender(item: Item<VBlock>,
  redeploy: boolean, sequential: boolean): void {
  const block = item.self
  const driver = block.driver
  // Initialize, deploy, and move (if needed)
  if (block.stamp === 0) {
    block.stamp = 1
    if (block.options?.rx) {
      Transaction.outside(() => {
        if (Rx.isLogging)
          Rx.setLoggingHint(block, block.name)
        Rx.getController(block.autorender).configure({
          order: block.level,
          monitor: block.options?.monitor,
          throttling: block.options?.throttling,
          logging: block.options?.logging,
        })
      })
    }
    driver.initialize(block, undefined)
    driver.deploy(block, sequential)
    driver.move(block, true)
  }
  else if (redeploy)
    driver.deploy(block, sequential) // , console.log(`redeployed: ${block.name}`)
}

function runRender(item: Item<VBlock>): void {
  const block = item.self
  if (block.stamp >= 0) { // if block is alive
    runUnder(item, () => {
      let result: unknown = undefined
      try {
        block.stamp++
        block.numerator = 0
        block.children.beginMerge()
        result = block.driver.render(block)
        if (result instanceof Promise)
          result.then(
            v => { runRenderNestedTreesThenDo(undefined, NOP); return v },
            e => { console.log(e); runRenderNestedTreesThenDo(e ?? new Error('unknown error'), NOP) })
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

function runFinalize(item: Item<VBlock>, isLeader: boolean): void {
  const block = item.self
  if (block.stamp >= 0) {
    block.stamp = ~block.stamp
    // Finalize block itself and remove it from collection
    const childrenAreLeaders = block.driver.finalize(block, isLeader)
    if (block.options?.rx) {
      // Defer disposal if block is reactive
      item.aux = undefined
      const last = gLastToDispose
      if (last)
        gLastToDispose = last.aux = item
      else
        gFirstToDispose = gLastToDispose = item
      if (gFirstToDispose === item)
        Transaction.run({ separation: 'disposal', hint: `runDisposalLoop(initiator=${item.self.name})` }, () => {
          void runDisposalLoop().then(NOP, error => console.log(error))
        })
    }
    // Finalize children if any
    for (const item of block.children.items())
      runFinalize(item, childrenAreLeaders)
    VBlock.grandCount--
  }
}

async function runDisposalLoop(): Promise<void> {
  await Transaction.requestNextFrame()
  let item = gFirstToDispose
  while (item !== undefined) {
    if (Transaction.isFrameOver(500, 5))
      await Transaction.requestNextFrame()
    Rx.dispose(item.self)
    item = item.aux
    VBlock.disposableCount--
  }
  // console.log(`Block count: ${VBlock.grandCount} totally (${VBlock.disposableCount} disposable)`)
  gFirstToDispose = gLastToDispose = undefined // reset loop
}

function forEachChildRecursively(item: Item<VBlock>, action: (e: any) => void): void {
  const block = item.self
  const native = block.native
  native && action(native)
  for (const item of block.children.items())
    forEachChildRecursively(item, action)
}

function wrap<T>(func: (...args: any[]) => T): (...args: any[]) => T {
  const ctx = gContext
  const wrappedRunUnder = (...args: any[]): T => {
    return runUnder(ctx, func, ...args)
  }
  return wrappedRunUnder
}

function runUnder<T>(item: Item<VBlock>, func: (...args: any[]) => T, ...args: any[]): T {
  const outer = gContext
  try {
    gContext = item
    return func(...args)
  }
  finally {
    gContext = outer
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

const NOP = (): void => { /* nop */ }

const gSysRoot = Collection.createItem<VBlock>(new VBlock<null, void>('SYSTEM',
  new StaticDriver<null>(null, 'SYSTEM', LayoutKind.Group),
  { level: 0 } as VBlock, { rx: true }, NOP)) // fake owner/host (overwritten below)
gSysRoot.self.item = gSysRoot

Object.defineProperty(gSysRoot, 'host', {
  value: gSysRoot,
  writable: false,
  configurable: false,
  enumerable: true,
})

let gContext: Item<VBlock> = gSysRoot
let gFirstToDispose: Item<VBlock> | undefined = undefined
let gLastToDispose: Item<VBlock> | undefined = undefined
