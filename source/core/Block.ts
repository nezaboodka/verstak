// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { reactive, nonreactive, Transaction, options, Reentrance, Rx, Monitor, LoggingOptions, Collection, Item, CollectionReader } from 'reactronic'
import { Place } from './Layout'

export type Callback<T = unknown> = (impl: T) => void // to be deleted
export type Render<T = unknown, M = unknown, R = void> = (impl: T, block: Block<T, M, R>) => R
export type AsyncRender<T = unknown, M = unknown> = (impl: T, block: Block<T, M, Promise<void>>) => Promise<void>
export const enum Priority { SyncP0 = 0, AsyncP1 = 1, AsyncP2 = 2 }

export interface BlockOptions<T = unknown, M = unknown, R = void> {
  place?: Place
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
  abstract readonly factory: BlockFactory<T>
  abstract readonly inline: boolean
  abstract readonly renderer: Render<T, M, R>
  abstract readonly options: Readonly<BlockOptions<T, M, R>> | undefined
  abstract model?: M
  // System-managed properties
  abstract readonly level: number
  abstract readonly parent: Block
  abstract readonly children: CollectionReader<Block>
  abstract readonly item: Item<Block> | undefined
  abstract readonly stamp: number
  abstract readonly impl?: T

  render(): R {
    return this.renderer(this.impl!, this)
  }

  get isInitialRendering(): boolean {
    return this.stamp === 2
  }

  abstract wrapBy(renderer: Render<T, M, R> | undefined): this

  static root(render: () => void): void {
    gSysRoot.self.renderer = render
    prepareThenRunRender(gSysRoot, false, false)
  }

  static get current(): Block {
    return gContext.self
  }

  static renderChildrenThenDo(action: (error: unknown) => void): void {
    runRenderChildrenThenDo(undefined, action)
  }

  static forAllBlocksDo<T>(action: (e: T) => void): void {
    forEachChildRecursively(gSysRoot, action)
  }

  static claim<T = undefined, M = unknown, R = void>(
    name: string, inline: boolean,
    options: BlockOptions<T, M, R> | undefined,
    renderer: Render<T, M, R>,
    factory?: BlockFactory<T>): Block<T, M, R> {
    // Emit block either by reusing existing one or by creating a new one
    const parent = gContext.self
    const children = parent.children
    const item = children.claim(name)
    let block: VerstakBlock<T, M, R>
    if (item) { // reuse existing
      block = item.self
      if (block.factory !== factory && factory !== undefined)
        throw new Error(`changing block type is not yet supported: "${block.factory.name}" -> "${factory?.name}"`)
      if (options) {
        const existingTriggers = block.options?.triggers
        if (triggersAreEqual(options.triggers, existingTriggers))
          options.triggers = existingTriggers // preserve triggers instance
      }
      block.options = options
      block.renderer = renderer
    }
    else { // create new
      block = new VerstakBlock<T, M, R>(name, factory ?? BlockFactory.default,
        inline ?? false, parent, options, renderer, undefined)
      block.item = children.add(block)
      VerstakBlock.grandCount++
      if (!block.inline)
        VerstakBlock.disposableCount++
    }
    return block
  }

  static getDefaultLoggingOptions(): LoggingOptions | undefined {
    return VerstakBlock.logging
  }

  static setDefaultLoggingOptions(logging?: LoggingOptions): void {
    VerstakBlock.logging = logging
  }
}

// BlockFactory

const NOP = (): void => { /* nop */ }

export class BlockFactory<T> {
  public static readonly default = new BlockFactory<any>('default', false)

  readonly name: string
  readonly strict: boolean

  constructor(name: string, strict: boolean) {
    this.name = name
    this.strict = strict
  }

  initialize(block: Block<T>, impl: T | undefined): void {
    const b = block as VerstakBlock<T>
    b.impl = impl
  }

  finalize(block: Block<T>, isLeader: boolean): boolean {
    const b = block as VerstakBlock<T>
    b.impl = undefined
    return isLeader // treat children as finalization leaders as well
  }

  layout(block: Block<T>, strict: boolean): void {
    // nothing to do by default
  }

  render(block: Block<T>): void | Promise<void> {
    let result: void | Promise<void>
    const wrapper = block.options?.wrapper
    if (wrapper)
      result = wrapper(block.impl!, block)
    else
      result = block.render()
    return result
  }
}

export class StaticBlockFactory<T> extends BlockFactory<T> {
  readonly element: T

  constructor(name: string, sequential: boolean, element: T) {
    super(name, sequential)
    this.element = element
  }

  initialize(block: Block<T>, element: T | undefined): void {
    super.initialize(block, this.element)
  }
}

// VerstakBlock

function getBlockName(block: VerstakBlock): string | undefined {
  return block.stamp >= 0 ? block.name : undefined
}

class VerstakBlock<T = any, M = any, R = any> extends Block<T, M, R> {
  static grandCount: number = 0
  static disposableCount: number = 0
  static logging?: LoggingOptions = undefined

  // User-defined properties
  readonly name: string
  readonly factory: BlockFactory<T>
  readonly inline: boolean
  renderer: Render<T, M, R>
  wrapper: Render<T, M, R> | undefined
  options: BlockOptions<T, M, R> | undefined
  model?: M
  // System-managed properties
  readonly level: number
  readonly parent: VerstakBlock
  children: Collection<VerstakBlock>
  item: Item<VerstakBlock> | undefined
  stamp: number
  impl?: T

  constructor(name: string, factory: BlockFactory<T>, inline: boolean,
    parent: VerstakBlock, options: BlockOptions<T, M, R> | undefined,
    renderer: Render<T, M, R>, wrapper?: Render<T, M, R>) {
    super()
    // User-defined properties
    this.name = name
    this.factory = factory
    this.inline = inline
    this.options = options
    this.renderer = renderer
    this.wrapper = wrapper
    this.model = undefined
    // System-managed properties
    this.level = parent.level + 1
    this.parent = parent
    this.children = new Collection<VerstakBlock>(factory.strict, getBlockName)
    this.item = undefined
    this.stamp = 0
    this.impl = undefined
  }

  @reactive
  @options({
    reentrance: Reentrance.CancelPrevious,
    triggeringArgs: true,
    noSideEffects: false,
  })
  autorender(_triggers: unknown): void {
    // triggers parameter is used to enforce rendering by parent
    runRender(this.item!)
  }

  wrapBy(renderer: Render<T, M, R> | undefined): this {
    this.wrapper = renderer
    return this
  }
}

// Internal

function runRenderChildrenThenDo(error: unknown, action: (error: unknown) => void): void {
  const context = gContext
  const block = context.self
  const children = block.children
  if (children.isMergeInProgress) {
    let promised: Promise<void> | undefined = undefined
    try {
      children.endMerge(error)
      // Finalize removed blocks
      for (const child of children.removedItems(true))
        runFinalize(child, true)
      if (!error) {
        // Render actual blocks
        const strict = children.strict
        let p1: Array<Item<VerstakBlock>> | undefined = undefined
        let p2: Array<Item<VerstakBlock>> | undefined = undefined
        let isMoved = false
        for (const child of children.items()) {
          if (Transaction.isCanceled)
            break
          isMoved = checkIsMoved(isMoved, child, children, strict)
          const x = child.self
          const priority = x.options?.priority ?? Priority.SyncP0
          if (priority === Priority.SyncP0)
            prepareThenRunRender(child, children.isMoved(child), strict) // render synchronously
          else if (priority === Priority.AsyncP1)
            p1 = push(child, p1) // defer for P1 async rendering
          else
            p2 = push(child, p2) // defer for P2 async rendering
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

function checkIsMoved(isMoved: boolean, child: Item<VerstakBlock>,
  children: Collection<VerstakBlock>, strict: boolean): boolean
{
  // Detects element movements when abstract blocks exist among
  // regular blocks with HTML elements
  if (child.self.impl) {
    if (isMoved) {
      children.markAsMoved(child)
      isMoved = false
    }
  }
  else if (strict && children.isMoved(child))
    isMoved = true // apply to the first block with an element
  return isMoved
}

async function startIncrementalRendering(
  parent: Item<VerstakBlock>,
  allChildren: Collection<VerstakBlock>,
  priority1?: Array<Item<VerstakBlock>>,
  priority2?: Array<Item<VerstakBlock>>): Promise<void> {
  const stamp = parent.self.stamp
  if (priority1)
    await renderIncrementally(parent, stamp, allChildren, priority1, Priority.AsyncP1)
  if (priority2)
    await renderIncrementally(parent, stamp, allChildren, priority2, Priority.AsyncP2)
}

async function renderIncrementally(parent: Item<VerstakBlock>, stamp: number,
  allChildren: Collection<VerstakBlock>, items: Array<Item<VerstakBlock>>,
  priority: Priority): Promise<void> {
  await Transaction.requestNextFrame()
  const block = parent.self
  if (!Transaction.isCanceled || !Transaction.isFrameOver(1, Block.shortFrameDuration / 3)) {
    let outerPriority = Block.currentRenderingPriority
    Block.currentRenderingPriority = priority
    try {
      const strict = block.children.strict
      if (block.options?.shuffle)
        shuffle(items)
      const frameDurationLimit = priority === Priority.AsyncP2 ? Block.shortFrameDuration : Infinity
      let frameDuration = Math.min(frameDurationLimit, Math.max(Block.frameDuration / 4, Block.shortFrameDuration))
      for (const child of items) {
        prepareThenRunRender(child, allChildren.isMoved(child), strict)
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

function prepareThenRunRender(item: Item<VerstakBlock>,
  moved: boolean, strict: boolean): void {
  const block = item.self
  if (block.stamp >= 0) {
    prepareRender(item, moved, strict)
    if (block.inline)
      runRender(item)
    else
      nonreactive(block.autorender, block.options?.triggers) // reactive auto-rendering
  }
}

function prepareRender(item: Item<VerstakBlock>,
  moved: boolean, strict: boolean): void {
  const block = item.self
  const factory = block.factory
  // Initialize/layout if needed
  if (block.stamp === 0) {
    block.stamp = 1
    if (!block.inline) {
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
    factory.initialize?.(block, undefined)
    factory.layout?.(block, strict)
  }
  else if (moved)
    factory.layout?.(block, strict) // , console.log(`moved: ${block.name}`)
}

function runRender(item: Item<VerstakBlock>): void {
  const block = item.self
  if (block.stamp >= 0) { // if block is alive
    runUnder(item, () => {
      let result: unknown = undefined
      try {
        block.stamp++
        block.children.beginMerge()
        result = block.factory.render(block)
        if (result instanceof Promise)
          result.then(
            v => { runRenderChildrenThenDo(undefined, NOP); return v },
            e => { console.log(e); runRenderChildrenThenDo(e ?? new Error('unknown error'), NOP) })
        else
          runRenderChildrenThenDo(undefined, NOP)
      }
      catch(e: unknown) {
        runRenderChildrenThenDo(e, NOP)
        console.log(`Rendering failed: ${block.name}`)
        console.log(`${e}`)
      }
    })
  }
}

function runFinalize(item: Item<VerstakBlock>, isLeader: boolean): void {
  const block = item.self
  if (block.stamp >= 0) {
    block.stamp = ~block.stamp
    // Finalize block itself and remove it from collection
    const childrenAreLeaders = block.factory.finalize(block, isLeader)
    if (!block.inline) {
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
    VerstakBlock.grandCount--
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
    VerstakBlock.disposableCount--
  }
  // console.log(`Block count: ${VerstakBlock.grandCount} totally (${VerstakBlock.disposableCount} disposable)`)
  gFirstToDispose = gLastToDispose = undefined // reset loop
}

function forEachChildRecursively(item: Item<VerstakBlock>, action: (e: any) => void): void {
  const block = item.self
  const impl = block.impl
  impl && action(impl)
  for (const item of block.children.items())
    forEachChildRecursively(item, action)
}

function wrap<T>(func: (...args: any[]) => T): (...args: any[]) => T {
  const parent = gContext
  const wrappedRunUnder = (...args: any[]): T => {
    return runUnder(parent, func, ...args)
  }
  return wrappedRunUnder
}

function runUnder<T>(item: Item<VerstakBlock>, func: (...args: any[]) => T, ...args: any[]): T {
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

const gSysRoot = Collection.createItem<VerstakBlock>(new VerstakBlock<null, void>('SYSTEM',
  new StaticBlockFactory<null>('SYSTEM', false, null), false,
  { level: 0 } as VerstakBlock, undefined, NOP)) // fake parent (overwritten below)
gSysRoot.self.item = gSysRoot

Object.defineProperty(gSysRoot, 'parent', {
  value: gSysRoot,
  writable: false,
  configurable: false,
  enumerable: true,
})

let gContext: Item<VerstakBlock> = gSysRoot
let gFirstToDispose: Item<VerstakBlock> | undefined = undefined
let gLastToDispose: Item<VerstakBlock> | undefined = undefined
