// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { reaction, nonreactive, Transaction, options, Reentrance, Rx, Monitor, LoggingOptions } from 'reactronic'

export type Callback<E = unknown> = (element: E) => void // to be deleted
export type Render<E = unknown, M = unknown, R = void> = (element: E, node: RxNodeContext<E, M, R>) => R
export type AsyncRender<E = unknown, M = unknown> = (element: E, node: RxNodeContext<E, M, Promise<void>>) => Promise<void>
export const enum Priority { SyncP0 = 0, AsyncP1 = 1, AsyncP2 = 2 }

// RxNode

export interface RxNodeContext<E, M, R> {
  readonly name: string
  readonly stamp: number
  readonly element?: E
  readonly isInitialRendering: boolean
  model?: M
  render(): R
}

export abstract class RxNode<E = any, M = unknown, R = void> implements RxNodeContext<E, M, R> {
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
  abstract readonly children: NodeChildren
  abstract readonly stamp: number
  abstract readonly merge: number
  abstract readonly next?: RxNode
  abstract readonly prev?: RxNode
  abstract readonly neighbor?: RxNode
  abstract readonly element?: E

  render(): R {
    return this.renderer(this.element!, this)
  }

  get isInitialRendering(): boolean {
    return this.stamp === 1
  }

  abstract wrapBy(renderer: Render<E, M, R> | undefined): this

  static launch(render: () => void): void {
    gSystem.renderer = render
    doRender(gSystem)
  }

  static get current(): RxNode {
    return gContext
  }

  static shuffleChildrenRendering(shuffle: boolean): void {
    gContext.shuffle = shuffle
  }

  static renderChildrenThenDo(action: () => void): void {
    runRenderChildrenThenDo(action)
  }

  static forAllNodesDo<E>(action: (e: E) => void): void {
    forEachChildRecursively(gSystem, action)
  }

  static emit<E = undefined, M = unknown, R = void>(
    name: string, triggers: unknown, inline: boolean,
    renderer: Render<E, M, R>, priority?: Priority,
    monitor?: Monitor, throttling?: number,
    logging?: Partial<LoggingOptions>, factory?: NodeFactory<E>): RxNode<E, M, R> {
    // Emit node either by reusing existing one or by creating a new one
    const parent = gContext
    const children = parent.children
    let node = children.tryMergeAsExisting(name)
    if (node) { // reuse existing
      if (node.inline || !triggersAreEqual(node.triggers, triggers))
        node.triggers = triggers
      node.renderer = renderer
      node.priority = priority ?? Priority.SyncP0
    }
    else { // create new
      node = new RxNodeImpl<E, M>(name, factory ?? NodeFactory.default,
        inline ?? false, parent, triggers, renderer, undefined,
        priority, monitor, throttling, logging)
      children.mergeAsNewlyCreated(node)
    }
    return node as RxNode<E, M, R>
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

  insert(node: RxNode<E>): void {
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
  children: NodeChildrenImpl
  stamp: number
  merge: number
  next?: RxNodeImpl
  prev?: RxNodeImpl
  neighbor?: RxNodeImpl
  reinserting: boolean
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
    this.children = new NodeChildrenImpl()
    this.stamp = 0
    this.merge = 0
    this.next = undefined
    this.prev = undefined
    this.neighbor = this
    this.reinserting = true
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
    runRender(this)
  }

  wrapBy(renderer: Render<E, M, R> | undefined): this {
    this.wrapper = renderer
    return this
  }
}

// Internal

function runRenderChildrenThenDo(action: () => void): void {
  const node = gContext
  let promised: Promise<void> | undefined = undefined
  try {
    const children = node.children
    if (children.isMergeInProgress) {
      let vanished = children.endMerge()
      // Unmount vanished children
      while (vanished !== undefined)
        doFinalize(vanished, true), vanished = vanished.next
      // Render current children
      const sequential = node.factory.sequential
      let p1: Array<RxNodeImpl> | undefined = undefined
      let p2: Array<RxNodeImpl> | undefined = undefined
      let neighbor: RxNodeImpl | undefined = undefined
      let child = children.first
      while (child !== undefined && !Transaction.isCanceled) {
        if (sequential && child.neighbor !== neighbor)
          child.neighbor = neighbor, child.reinserting = true
        if (child.priority === Priority.SyncP0)
          doRender(child)
        else if (child.priority === Priority.AsyncP1)
          p1 = push(p1, child)
        else
          p2 = push(p2, child)
        if (child.element)
          neighbor = child
        child = child.next
      }
      // Render incremental children (if any)
      if (!Transaction.isCanceled && (p1 !== undefined || p2 !== undefined))
        promised = startIncrementalRendering(node, p1, p2).then(action, action)
    }
  }
  finally {
    if (!promised)
      action()
  }
}

async function startIncrementalRendering(parent: RxNodeImpl,
  children1?: Array<RxNodeImpl>, children2?: Array<RxNodeImpl>): Promise<void> {
  if (children1)
    await renderIncrementally(parent, children1)
  if (children2)
    await renderIncrementally(parent, children2)
}

async function renderIncrementally(parent: RxNodeImpl, children: Array<RxNodeImpl>): Promise<void> {
  const checkEveryN = 30
  // if (Transaction.isFrameOver(checkEveryN, RxNode.frameDuration))
  await Transaction.requestNextFrame()
  if (!Transaction.isCanceled) {
    if (parent.shuffle)
      shuffle(children)
    for (const child of children) {
      doRender(child)
      if (Transaction.isFrameOver(checkEveryN, RxNode.frameDuration))
        await Transaction.requestNextFrame(5)
      if (Transaction.isCanceled)
        break
    }
  }
}

function doRender(node: RxNodeImpl): void {
  if (node.stamp >= 0) {
    if (!node.inline) {
      if (node.stamp === 0) {
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
      }
      nonreactive(node.autorender, node.triggers) // reactive auto-rendering
    }
    else
      runRender(node)
  }
}

function runRender(node: RxNodeImpl): void {
  if (node.stamp >= 0) {
    try {
      runUnder(node, () => {
        let result: void | Promise<void>
        try {
          const factory = node.factory
          // Initialize if needed
          if (node.stamp === 0)
            factory.initialize?.(node, undefined)
          // Render node itself
          node.stamp++
          if (node.reinserting)
            factory.insert?.(node), node.reinserting = false
          node.children.beginMerge(node.stamp)
          result = factory.render(node)
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

function doFinalize(node: RxNodeImpl, isLeader: boolean): void {
  if (node.stamp >= 0) {
    node.stamp = ~node.stamp
    // Finalize node itself
    const childrenAreLeaders = node.factory.finalize(node, isLeader)
    if (!node.inline)
      deferDispose(node) // enqueue node for Rx.dispose if needed
    // Finalize children if any
    let child = node.children.first
    while (child !== undefined)
      doFinalize(child, childrenAreLeaders), child = child.next
  }
}

async function runDisposalLoop(): Promise<void> {
  await Transaction.requestNextFrame()
  let node = gFirstToDispose
  while (node !== undefined) {
    if (Transaction.isFrameOver(500, 5))
      await Transaction.requestNextFrame()
    Rx.dispose(node)
    node = node.neighbor
  }
  gFirstToDispose = gLastToDispose = undefined // reset loop
}

function forEachChildRecursively(node: RxNodeImpl, action: (e: any) => void): void {
  const e = node.element
  e && action(e)
  let child = node.children.first
  while (child !== undefined)
    forEachChildRecursively(child, action), child = child.next
}

function wrap<T>(func: (...args: any[]) => T): (...args: any[]) => T {
  const parent = gContext
  const wrappedRunUnder = (...args: any[]): T => {
    return runUnder(parent, func, ...args)
  }
  return wrappedRunUnder
}

function runUnder<T>(node: RxNodeImpl, func: (...args: any[]) => T, ...args: any[]): T {
  const outer = gContext
  try {
    gContext = node
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

// NodeChildrenImpl

export interface NodeChildren {
  readonly first?: RxNode
  readonly count: number
}

class NodeChildrenImpl implements NodeChildren {
  namespace: Map<string, RxNodeImpl> = new Map<string, RxNodeImpl>()
  first?: RxNodeImpl = undefined
  count: number = 0
  merge: number = 0
  mergingFirst?: RxNodeImpl = undefined
  mergingLast?: RxNodeImpl = undefined
  mergingCount: number = 0
  likelyNextToMerge?: RxNodeImpl = undefined

  get isMergeInProgress(): boolean { return this.merge > 0 }

  beginMerge(id: number): void {
    if (this.isMergeInProgress)
      throw new Error('reconciliation is not reentrant')
    this.merge = id
  }

  endMerge(): RxNodeImpl | undefined {
    if (!this.isMergeInProgress)
      throw new Error('reconciliation is ended already')
    this.merge = 0
    const mergingCount = this.mergingCount
    if (mergingCount > 0) {
      if (mergingCount > this.count) { // it should be faster to delete non-retained nodes from namespace
        const namespace = this.namespace
        let child = this.first
        while (child !== undefined)
          namespace.delete(child.name), child = child.next
      }
      else { // it should be faster to recreate namespace with retained nodes only
        const namespace = this.namespace = new Map<string, RxNodeImpl>()
        let child = this.mergingFirst
        while (child !== undefined)
          namespace.set(child.name, child), child = child.next
      }
    }
    else // just create new empty namespace
      this.namespace = new Map<string, RxNodeImpl>()
    const vanishedFirst = this.first
    this.first = this.mergingFirst
    this.count = mergingCount
    this.mergingFirst = this.mergingLast = undefined
    this.mergingCount = 0
    this.likelyNextToMerge = this.first
    return vanishedFirst
  }

  tryMergeAsExisting(name: string): RxNodeImpl | undefined {
    let result = this.likelyNextToMerge
    if (result?.name !== name)
      result = this.namespace.get(name)
    if (result && result.stamp >= 0) {
      if (result.merge === this.merge)
        throw new Error(`duplicate node id: ${name}`)
      result.merge = this.merge
      this.likelyNextToMerge = result.next
      // Exclude from main sequence
      if (result.prev !== undefined)
        result.prev.next = result.next
      if (result.next !== undefined)
        result.next.prev = result.prev
      if (result === this.first)
        this.first = result.next
      this.count--
      // Include into retained sequence
      const last = this.mergingLast
      if (last) {
        result.prev = last
        result.next = undefined
        this.mergingLast = last.next = result
      }
      else {
        result.prev = result.next = undefined
        this.mergingFirst = this.mergingLast = result
      }
      this.mergingCount++
    }
    return result
  }

  mergeAsNewlyCreated(node: RxNodeImpl): void {
    node.merge = this.merge
    this.namespace.set(node.name, node)
    const last = this.mergingLast
    if (last) {
      node.prev = last
      this.mergingLast = last.next = node
    }
    else
      this.mergingFirst = this.mergingLast = node
    this.mergingCount++
  }
}

function deferDispose(node: RxNodeImpl): void {
  const last = gLastToDispose
  if (last)
    gLastToDispose = last.neighbor = node
  else
    gFirstToDispose = gLastToDispose = node
  node.neighbor = undefined
  if (gFirstToDispose === node)
    Transaction.run({ standalone: 'disposal', hint: `runDisposalLoop(initiator=${node.name})` }, () => {
      void runDisposalLoop().then(NOP, error => console.log(error))
    })
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

const gSystem = new RxNodeImpl<null, void>('SYSTEM',
  new StaticNodeFactory<null>('SYSTEM', false, null), false,
  { level: 0 } as RxNodeImpl, undefined, NOP) // fake parent (overwritten below)

Object.defineProperty(gSystem, 'parent', {
  value: gSystem,
  writable: false,
  configurable: false,
  enumerable: true,
})

let gContext: RxNodeImpl = gSystem
let gFirstToDispose: RxNodeImpl | undefined = undefined
let gLastToDispose: RxNodeImpl | undefined = undefined
