// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { reaction, nonreactive, Transaction, options, Reentrance, Rx, Monitor, LoggingOptions } from 'reactronic'
import { Chain, Chained, ChainItem, ReadonlyChain } from './Chain'

export type Callback<E = unknown> = (element: E) => void // to be deleted
export type Render<E = unknown, M = unknown, R = void> = (element: E, node: RxNode<E, M, R>) => R
export type AsyncRender<E = unknown, M = unknown> = (element: E, node: RxNode<E, M, Promise<void>>) => Promise<void>
export const enum Priority { SyncP0 = 0, AsyncP1 = 1, AsyncP2 = 2 }

// RxNode

export abstract class RxNode<E = any, M = unknown, R = void> {
  static frameDuration = 10 // ms
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
  abstract readonly children: ReadonlyChain<RxNode>
  abstract readonly chained: Chained<RxNode> | undefined
  abstract readonly stamp: number
  abstract readonly element?: E

  render(): R {
    return this.renderer(this.element!, this)
  }

  get isInitialRendering(): boolean {
    return this.stamp === 1
  }

  abstract wrapBy(renderer: Render<E, M, R> | undefined): this

  static launch(render: () => void): void {
    gSysRoot.self.renderer = render
    prepareThenRunRender(gSysRoot)
  }

  static get current(): RxNode {
    return gContext.self
  }

  static shuffleChildrenRendering(shuffle: boolean): void {
    gContext.self.shuffle = shuffle
  }

  static renderChildrenThenDo(action: () => void): void {
    runRenderChildrenThenDo(action)
  }

  static forAllNodesDo<E>(action: (e: E) => void): void {
    forEachChildRecursively(gSysRoot, action)
  }

  static emit<E = undefined, M = unknown, R = void>(
    name: string, triggers: unknown, inline: boolean,
    renderer: Render<E, M, R>, priority?: Priority,
    monitor?: Monitor, throttling?: number,
    logging?: Partial<LoggingOptions>, factory?: NodeFactory<E>): RxNode<E, M, R> {
    // Emit node either by reusing existing one or by creating a new one
    const parent = gContext.self
    const children = parent.children
    let chained = children.tryMergeAsExisting(name)
    let node: RxNodeImpl<E, M, R>
    if (chained) { // reuse existing
      node = chained.self
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
      chained = children.mergeAsNewlyCreated(node)
      node.chained = chained
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
  readonly sequential: boolean

  constructor(name: string, sequential: boolean) {
    this.name = name
    this.sequential = sequential
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

  order(node: RxNode<E>): void {
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
  children: Chain<RxNodeImpl>
  chained: Chained<RxNodeImpl> | undefined
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
    this.children = new Chain<RxNodeImpl>(getNodeName, factory.sequential)
    this.chained = undefined
    this.stamp = 0
    this.element = undefined
  }

  @reaction
  @options({
    reentrance: Reentrance.CancelAndWaitPrevious,
    triggeringArgs: true,
    noSideEffects: false,
  })
  autorender(_triggers: unknown): void {
    // triggers parameter is used to enforce rendering by parent
    runRender(this.chained!)
  }

  wrapBy(renderer: Render<E, M, R> | undefined): this {
    this.wrapper = renderer
    return this
  }
}

// Internal

function runRenderChildrenThenDo(action: () => void): void {
  const chained = gContext
  const node = chained.self
  let promised: Promise<void> | undefined = undefined
  try {
    const children = node.children
    const rev = children.revision
    if (rev > 0) { // is merge in progress
      let vanished = children.endMerge()
      // Unmount vanished children
      while (vanished !== undefined)
        vanished = doFinalize(vanished, true)
      // Render current children
      const ordered = children.ordered
      let p1: Array<Chained<RxNodeImpl>> | undefined = undefined
      let p2: Array<Chained<RxNodeImpl>> | undefined = undefined
      let after: Chained<RxNodeImpl> | undefined = undefined
      let child = children.first
      while (child !== undefined && !Transaction.isCanceled) {
        const n = child.self
        if (ordered && child.after !== after) {
          child.after = after
          child.orderRevision = rev
        }
        if (n.priority === Priority.SyncP0)
          prepareThenRunRender(child)
        else if (n.priority === Priority.AsyncP1)
          p1 = push(p1, child)
        else
          p2 = push(p2, child)
        if (n.element)
          after = child
        child = child.next
      }
      // Render incremental children (if any)
      if (!Transaction.isCanceled && (p1 !== undefined || p2 !== undefined))
        promised = startIncrementalRendering(chained, p1, p2).then(action, action)
    }
  }
  finally {
    if (!promised)
      action()
  }
}

async function startIncrementalRendering(parent: Chained<RxNodeImpl>,
  children1?: Array<Chained<RxNodeImpl>>,
  children2?: Array<Chained<RxNodeImpl>>): Promise<void> {
  if (children1)
    await renderIncrementally(parent, children1)
  if (children2)
    await renderIncrementally(parent, children2)
}

async function renderIncrementally(parent: Chained<RxNodeImpl>,
  children: Array<Chained<RxNodeImpl>>): Promise<void> {
  const checkEveryN = 30
  // if (Transaction.isFrameOver(checkEveryN, RxNode.frameDuration))
  await Transaction.requestNextFrame()
  if (!Transaction.isCanceled) {
    if (parent.self.shuffle)
      shuffle(children)
    for (const child of children) {
      prepareThenRunRender(child)
      if (Transaction.isFrameOver(checkEveryN, RxNode.frameDuration))
        await Transaction.requestNextFrame(5)
      if (Transaction.isCanceled)
        break
    }
  }
}

function prepareThenRunRender(chained: Chained<RxNodeImpl>): void {
  const node = chained.self
  if (node.stamp >= 0) {
    prepareRender(chained)
    if (node.inline)
      runRender(chained)
    else
      nonreactive(node.autorender, node.triggers) // reactive auto-rendering
  }
}

function prepareRender(chained: Chained<RxNodeImpl>): void {
  const node = chained.self
  const factory = node.factory
  // Initialize if needed
  if (node.stamp === 0) {
    if (!node.inline)
      Transaction.off(() => {
        if (Rx.isLogging)
          Rx.setLoggingHint(node, node.name)
        Rx.getController(node.autorender).configure({
          order: node.level,
          monitor: node.monitor,
          throttling: node.throttling,
          logging: node.logging,
        })
      })
    factory.initialize?.(node, undefined)
  }
  // (Re)Order if needed
  if (chained.orderRevision === chained.chainRevision)
    factory.order?.(node)
}

function runRender(chained: Chained<RxNodeImpl>): void {
  const node = chained.self
  if (node.stamp >= 0) { // if node is alive
    try {
      runUnder(chained, () => {
        let result: void | Promise<void>
        try {
          node.stamp++
          node.children.beginMerge(node.stamp)
          result = node.factory.render(node)
        }
        finally {
          // Render children (skipped if children were already rendered explicitly)
          if (result instanceof Promise)
            result.then(
              value => { RxNode.renderChildrenThenDo(NOP); return value },
              error => { console.log(error); RxNode.renderChildrenThenDo(NOP) })
          else
            RxNode.renderChildrenThenDo(NOP) // calls node.children.endMerge()
        }
      })
    }
    catch (e) {
      console.log(`Rendering failed: ${node.name}`)
      console.log(`${e}`)
    }
  }
}

function doFinalize(chained: Chained<RxNodeImpl>, isLeader: boolean): Chained<RxNodeImpl> | undefined {
  const next = chained.next
  const node = chained.self
  if (node.stamp >= 0) {
    node.stamp = ~node.stamp
    // Finalize node itself and unlink it from chain
    const childrenAreLeaders = node.factory.finalize(node, isLeader)
    if (next)
      next.prev = undefined
    chained.next = undefined
    // Defer disposal if node is reactive
    if (!node.inline) {
      const last = gLastToDispose
      if (last)
        gLastToDispose = last.next = chained
      else
        gFirstToDispose = gLastToDispose = chained
      if (gFirstToDispose === chained)
        Transaction.run({ standalone: 'disposal', hint: `runDisposalLoop(initiator=${chained.self.name})` }, () => {
          void runDisposalLoop().then(NOP, error => console.log(error))
        })
    }
    // Finalize children if any
    let child = node.children.first
    while (child !== undefined)
      child = doFinalize(child, childrenAreLeaders)
  }
  return next
}

async function runDisposalLoop(): Promise<void> {
  await Transaction.requestNextFrame()
  let chained = gFirstToDispose
  while (chained !== undefined) {
    if (Transaction.isFrameOver(500, 5))
      await Transaction.requestNextFrame()
    Rx.dispose(chained.self)
    chained = chained.next
  }
  gFirstToDispose = gLastToDispose = undefined // reset loop
}

function forEachChildRecursively(chained: Chained<RxNodeImpl>, action: (e: any) => void): void {
  const node = chained.self
  const e = node.element
  e && action(e)
  let child = node.children.first
  while (child !== undefined) {
    forEachChildRecursively(child, action)
    child = child.next
  }
}

function wrap<T>(func: (...args: any[]) => T): (...args: any[]) => T {
  const parent = gContext
  const wrappedRunUnder = (...args: any[]): T => {
    return runUnder(parent, func, ...args)
  }
  return wrappedRunUnder
}

function runUnder<T>(chained: Chained<RxNodeImpl>, func: (...args: any[]) => T, ...args: any[]): T {
  const outer = gContext
  try {
    gContext = chained
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
  let i = array.length - 1
  while (i >= 0) {
    const j = Math.floor(Math.random() * i)
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

const gSysRoot = new ChainItem<RxNodeImpl>(new RxNodeImpl<null, void>('SYSTEM',
  new StaticNodeFactory<null>('SYSTEM', false, null), false,
  { level: 0 } as RxNodeImpl, undefined, NOP), 0) // fake parent (overwritten below)
gSysRoot.self.chained = gSysRoot

Object.defineProperty(gSysRoot, 'parent', {
  value: gSysRoot,
  writable: false,
  configurable: false,
  enumerable: true,
})

let gContext: Chained<RxNodeImpl> = gSysRoot
let gFirstToDispose: Chained<RxNodeImpl> | undefined = undefined
let gLastToDispose: Chained<RxNodeImpl> | undefined = undefined
