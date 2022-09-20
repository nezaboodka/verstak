// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// License: https://raw.githubusercontent.com/nezaboodka/reactron/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { reactive, nonreactive, Transaction, options, Reentrance, Rx, Monitor, LoggingOptions, Collection, Item, CollectionReader } from 'reactronic'

export type Callback<E = unknown> = (element: E) => void // to be deleted
export type Render<E = unknown, M = unknown, R = void> = (element: E, node: RxNode<E, M, R>) => R
export type AsyncRender<E = unknown, M = unknown> = (element: E, node: RxNode<E, M, Promise<void>>) => Promise<void>
export const enum Priority { SyncP0 = 0, AsyncP1 = 1, AsyncP2 = 2 }

// RxNode

export abstract class RxNode<E = any, M = unknown, R = void> {
  static currentRenderingPriority = Priority.SyncP0
  static readonly shortFrameDuration = 16 // ms
  static readonly longFrameDuration = 300 // ms
  static frameDuration = RxNode.longFrameDuration
  // User-defined properties
  abstract readonly name: string
  abstract readonly factory: NodeFactory<E>
  abstract readonly inline: boolean
  abstract readonly triggers: unknown
  abstract readonly renderer: Render<E, M, R>
  abstract readonly wrapper: Render<E, M, R> | undefined
  abstract readonly monitor?: Monitor
  abstract readonly throttling?: number // milliseconds, -1 is immediately, Number.MAX_SAFE_INTEGER is never
  abstract readonly logging?: Partial<LoggingOptions>
  abstract readonly priority: Priority
  abstract readonly shuffle: boolean
  abstract model?: M
  // System-managed properties
  abstract readonly level: number
  abstract readonly parent: RxNode
  abstract readonly children: CollectionReader<RxNode>
  abstract readonly item: Item<RxNode> | undefined
  abstract readonly stamp: number
  abstract readonly element?: E

  render(): R {
    return this.renderer(this.element!, this)
  }

  get isInitialRendering(): boolean {
    return this.stamp === 2
  }

  abstract wrapBy(renderer: Render<E, M, R> | undefined): this

  static root(render: () => void): void {
    gSysRoot.self.renderer = render
    prepareThenRunRender(gSysRoot, false, false)
  }

  static get current(): RxNode {
    return gContext.self
  }

  static shuffleChildrenRendering(shuffle: boolean): void {
    gContext.self.shuffle = shuffle
  }

  static renderChildrenThenDo(action: (error: unknown) => void): void {
    runRenderChildrenThenDo(undefined, action)
  }

  static forAllNodesDo<E>(action: (e: E) => void): void {
    forEachChildRecursively(gSysRoot, action)
  }

  static claim<E = undefined, M = unknown, R = void>(
    name: string, triggers: unknown, inline: boolean,
    renderer: Render<E, M, R>, priority?: Priority,
    monitor?: Monitor, throttling?: number,
    logging?: Partial<LoggingOptions>, factory?: NodeFactory<E>): RxNode<E, M, R> {
    // Emit node either by reusing existing one or by creating a new one
    const parent = gContext.self
    const children = parent.children
    const item = children.claim(name)
    let node: RxNodeImpl<E, M, R>
    if (item) { // reuse existing
      node = item.self
      if (node.factory !== factory && factory !== undefined)
        throw new Error(`changing node type is not yet supported: "${node.factory.name}" -> "${factory?.name}"`)
      if (node.inline || !triggersAreEqual(node.triggers, triggers))
        node.triggers = triggers
      node.renderer = renderer
      node.priority = priority ?? Priority.SyncP0
    }
    else { // create new
      node = new RxNodeImpl<E, M, R>(name, factory ?? NodeFactory.default,
        inline ?? false, parent, triggers, renderer, undefined,
        priority, monitor, throttling, logging)
      node.item = children.add(node)
      RxNodeImpl.grandCount++
      if (!node.inline)
        RxNodeImpl.disposableCount++
    }
    return node
  }

  static getDefaultLoggingOptions(): LoggingOptions | undefined {
    return RxNodeImpl.logging
  }

  static setDefaultLoggingOptions(logging?: LoggingOptions): void {
    RxNodeImpl.logging = logging
  }
}

// NodeFactory

const NOP = (): void => { /* nop */ }

export class NodeFactory<E> {
  public static readonly default = new NodeFactory<any>('default', false)

  readonly name: string
  readonly strict: boolean

  constructor(name: string, strict: boolean) {
    this.name = name
    this.strict = strict
  }

  initialize(node: RxNode<E>, element: E | undefined): void {
    const impl = node as RxNodeImpl<E>
    impl.element = element
  }

  finalize(node: RxNode<E>, isLeader: boolean): boolean {
    const impl = node as RxNodeImpl<E>
    impl.element = undefined
    return isLeader // treat children as finalization leaders as well
  }

  arrange(node: RxNode<E>, strict: boolean): void {
    // nothing to do by default
  }

  render(node: RxNode<E>): void | Promise<void> {
    let result: void | Promise<void>
    if (node.wrapper)
      result = node.wrapper(node.element!, node)
    else
      result = node.render()
    return result
  }
}

export class StaticNodeFactory<E> extends NodeFactory<E> {
  readonly element: E

  constructor(name: string, sequential: boolean, element: E) {
    super(name, sequential)
    this.element = element
  }

  initialize(node: RxNode<E>, element: E | undefined): void {
    super.initialize(node, this.element)
  }
}

// RxNodeImpl

function getNodeName(node: RxNodeImpl): string | undefined {
  return node.stamp >= 0 ? node.name : undefined
}

class RxNodeImpl<E = any, M = any, R = any> extends RxNode<E, M, R> {
  static grandCount: number = 0
  static disposableCount: number = 0
  static logging?: LoggingOptions = undefined

  // User-defined properties
  readonly name: string
  readonly factory: NodeFactory<E>
  readonly inline: boolean
  triggers: unknown
  renderer: Render<E, M, R>
  wrapper: Render<E, M, R> | undefined
  readonly monitor?: Monitor
  readonly throttling: number // milliseconds, -1 is immediately, Number.MAX_SAFE_INTEGER is never
  readonly logging?: Partial<LoggingOptions>
  priority: Priority
  shuffle: boolean
  model?: M
  // System-managed properties
  readonly level: number
  readonly parent: RxNodeImpl
  children: Collection<RxNodeImpl>
  item: Item<RxNodeImpl> | undefined
  stamp: number
  element?: E

  constructor(name: string, factory: NodeFactory<E>, inline: boolean, parent: RxNodeImpl,
    triggers: unknown, renderer: Render<E, M, R>, wrapper?: Render<E, M, R>,
    priority?: Priority, monitor?: Monitor, throttling?: number, logging?: Partial<LoggingOptions>) {
    super()
    // User-defined properties
    this.name = name
    this.factory = factory
    this.inline = inline
    this.triggers = triggers
    this.renderer = renderer
    this.wrapper = wrapper
    this.monitor = monitor
    this.throttling = throttling ?? -1
    this.logging = logging ?? RxNodeImpl.logging
    this.priority = priority ?? Priority.SyncP0
    this.shuffle = false
    this.model = undefined
    // System-managed properties
    this.level = parent.level + 1
    this.parent = parent
    this.children = new Collection<RxNodeImpl>(factory.strict, getNodeName)
    this.item = undefined
    this.stamp = 0
    this.element = undefined
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

  wrapBy(renderer: Render<E, M, R> | undefined): this {
    this.wrapper = renderer
    return this
  }
}

// Internal

function runRenderChildrenThenDo(error: unknown, action: (error: unknown) => void): void {
  const context = gContext
  const node = context.self
  const children = node.children
  if (children.isMergeInProgress) {
    let promised: Promise<void> | undefined = undefined
    try {
      children.endMerge(error)
      // Finalize removed nodes
      for (const child of children.removedItems(true))
        runFinalize(child, true)
      if (!error) {
        // Render actual nodes
        const strict = children.strict
        let p1: Array<Item<RxNodeImpl>> | undefined = undefined
        let p2: Array<Item<RxNodeImpl>> | undefined = undefined
        let isMoved = false
        for (const child of children.items()) {
          if (Transaction.isCanceled)
            break
          const x = child.self
          if (x.element) {
            if (isMoved) {
              children.markAsMoved(child)
              isMoved = false
            }
          }
          else if (strict && children.isMoved(child))
            isMoved = true // apply to the first node with an element
          if (x.priority === Priority.SyncP0)
            prepareThenRunRender(child, children.isMoved(child), strict)
          else if (x.priority === Priority.AsyncP1)
            p1 = push(p1, child)
          else
            p2 = push(p2, child)
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

async function startIncrementalRendering(
  parent: Item<RxNodeImpl>,
  allChildren: Collection<RxNodeImpl>,
  priority1?: Array<Item<RxNodeImpl>>,
  priority2?: Array<Item<RxNodeImpl>>): Promise<void> {
  const stamp = parent.self.stamp
  if (priority1)
    await renderIncrementally(parent, stamp, allChildren, priority1, Priority.AsyncP1)
  if (priority2)
    await renderIncrementally(parent, stamp, allChildren, priority2, Priority.AsyncP2)
}

async function renderIncrementally(parent: Item<RxNodeImpl>, stamp: number,
  allChildren: Collection<RxNodeImpl>, items: Array<Item<RxNodeImpl>>,
  priority: Priority): Promise<void> {
  await Transaction.requestNextFrame()
  const node = parent.self
  if (!Transaction.isCanceled || !Transaction.isFrameOver(1, RxNode.shortFrameDuration / 3)) {
    let outerPriority = RxNode.currentRenderingPriority
    RxNode.currentRenderingPriority = priority
    try {
      const strict = node.children.strict
      if (node.shuffle)
        shuffle(items)
      const frameDurationLimit = priority === Priority.AsyncP2 ? RxNode.shortFrameDuration : Infinity
      let frameDuration = Math.min(frameDurationLimit, Math.max(RxNode.frameDuration / 4, RxNode.shortFrameDuration))
      for (const child of items) {
        prepareThenRunRender(child, allChildren.isMoved(child), strict)
        if (Transaction.isFrameOver(1, frameDuration)) {
          RxNode.currentRenderingPriority = outerPriority
          await Transaction.requestNextFrame(0)
          outerPriority = RxNode.currentRenderingPriority
          frameDuration = Math.min(4 * frameDuration, Math.min(frameDurationLimit, RxNode.frameDuration))
        }
        if (Transaction.isCanceled && Transaction.isFrameOver(1, RxNode.shortFrameDuration / 3))
          break
      }
    }
    finally {
      RxNode.currentRenderingPriority = outerPriority
    }
  }
}

function prepareThenRunRender(item: Item<RxNodeImpl>,
  moved: boolean, strict: boolean): void {
  const node = item.self
  if (node.stamp >= 0) {
    prepareRender(item, moved, strict)
    if (node.inline)
      runRender(item)
    else
      nonreactive(node.autorender, node.triggers) // reactive auto-rendering
  }
}

function prepareRender(item: Item<RxNodeImpl>,
  moved: boolean, strict: boolean): void {
  const node = item.self
  const factory = node.factory
  // Initialize/arrange if needed
  if (node.stamp === 0) {
    node.stamp = 1
    if (!node.inline) {
      Transaction.outside(() => {
        if (Rx.isLogging)
          Rx.setLoggingHint(node, node.name)
        Rx.getController(node.autorender).configure({
          order: node.level,
          monitor: node.monitor,
          throttling: node.throttling,
          logging: node.logging,
        })
      })
    }
    factory.initialize?.(node, undefined)
    factory.arrange?.(node, strict)
  }
  else if (moved)
    factory.arrange?.(node, strict) // , console.log(`moved: ${node.name}`)
}

function runRender(item: Item<RxNodeImpl>): void {
  const node = item.self
  if (node.stamp >= 0) { // if node is alive
    runUnder(item, () => {
      let result: unknown = undefined
      try {
        node.stamp++
        node.children.beginMerge()
        result = node.factory.render(node)
        if (result instanceof Promise)
          result.then(
            v => { runRenderChildrenThenDo(undefined, NOP); return v },
            e => { console.log(e); runRenderChildrenThenDo(e ?? new Error('unknown error'), NOP) })
        else
          runRenderChildrenThenDo(undefined, NOP)
      }
      catch(e: unknown) {
        runRenderChildrenThenDo(e, NOP)
        console.log(`Rendering failed: ${node.name}`)
        console.log(`${e}`)
      }
    })
  }
}

function runFinalize(item: Item<RxNodeImpl>, isLeader: boolean): void {
  const node = item.self
  if (node.stamp >= 0) {
    node.stamp = ~node.stamp
    // Finalize node itself and remove it from collection
    const childrenAreLeaders = node.factory.finalize(node, isLeader)
    if (!node.inline) {
      // Defer disposal if node is reactive
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
    for (const item of node.children.items())
      runFinalize(item, childrenAreLeaders)
    RxNodeImpl.grandCount--
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
    RxNodeImpl.disposableCount--
  }
  // console.log(`RxNode count: ${RxNodeImpl.grandCount} totally (${RxNodeImpl.disposableCount} disposable)`)
  gFirstToDispose = gLastToDispose = undefined // reset loop
}

function forEachChildRecursively(item: Item<RxNodeImpl>, action: (e: any) => void): void {
  const node = item.self
  const e = node.element
  e && action(e)
  for (const item of node.children.items())
    forEachChildRecursively(item, action)
}

function wrap<T>(func: (...args: any[]) => T): (...args: any[]) => T {
  const parent = gContext
  const wrappedRunUnder = (...args: any[]): T => {
    return runUnder(parent, func, ...args)
  }
  return wrappedRunUnder
}

function runUnder<T>(item: Item<RxNodeImpl>, func: (...args: any[]) => T, ...args: any[]): T {
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

function push<T>(array: Array<T> | undefined, item: T): Array<T> {
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

const gSysRoot = Collection.createItem<RxNodeImpl>(new RxNodeImpl<null, void>('SYSTEM',
  new StaticNodeFactory<null>('SYSTEM', false, null), false,
  { level: 0 } as RxNodeImpl, undefined, NOP)) // fake parent (overwritten below)
gSysRoot.self.item = gSysRoot

Object.defineProperty(gSysRoot, 'parent', {
  value: gSysRoot,
  writable: false,
  configurable: false,
  enumerable: true,
})

let gContext: Item<RxNodeImpl> = gSysRoot
let gFirstToDispose: Item<RxNodeImpl> | undefined = undefined
let gLastToDispose: Item<RxNodeImpl> | undefined = undefined
