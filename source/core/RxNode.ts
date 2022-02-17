// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { reaction, nonreactive, Transaction, options, Reentrance, Rx, Monitor, LoggingOptions } from 'reactronic'

export type Callback<E = unknown> = (element: E) => void // to be deleted
export type Render<E = unknown, M = unknown, R = void> = (element: E, own: RxNodeContext<E, M ,R>) => R
export type Customize<E = unknown, M = unknown, R = void> = (own: RxNodeContext<E, M ,R>, element: E) => R
export type AsyncCustomize<E = unknown, M = void> = (own: RxNodeContext<E, M, Promise<void>>, element: E) => Promise<void>
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
  abstract readonly customizer: Customize<E, M, R> | undefined
  abstract readonly monitor?: Monitor
  abstract readonly throttling?: number // milliseconds, -1 is immediately, Number.MAX_SAFE_INTEGER is never
  abstract readonly logging?: Partial<LoggingOptions>
  abstract readonly priority: Priority
  abstract readonly shuffle: boolean
  abstract model?: M
  // System-managed properties
  abstract readonly level: number
  abstract readonly parent: RxNode
  abstract readonly stamp: number
  abstract readonly children: NodeChildren
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

  static customizable<E, M, R>(customize: Customize<E, M, R> | undefined, node: RxNode<E, M, R>): RxNode<E, M, R>
  {
    const n = node as RxNodeImpl<E, M, R>
    n.customizer = customize
    return node
  }

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
    render: Render<E, M, R>, priority?: Priority,
    monitor?: Monitor, throttling?: number,
    logging?: Partial<LoggingOptions>, factory?: NodeFactory<E>): RxNode<E, M, R> {
    // Emit node either by reusing existing one or by creating a new one
    const parent = gContext
    const children = parent.children
    let node = children.tryEmitAsExisting(name)
    if (node) { // reuse existing
      if (node.inline || !triggersAreEqual(node.triggers, triggers))
        node.triggers = triggers
      node.renderer = render
      node.priority = priority ?? Priority.SyncP0
    }
    else { // create new
      node = new RxNodeImpl<E, M>(name, factory ?? NodeFactory.default,
        inline ?? false, parent, triggers, render, undefined,
        priority, monitor, throttling, logging)
      children.emitAsNewlyCreated(node)
    }
    return node as RxNode<E, M, R>
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
    if (node.customizer)
      result = node.customizer(node, node.element!)
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
  // User-defined properties
  readonly name: string
  readonly factory: NodeFactory<E>
  readonly inline: boolean
  triggers: unknown
  renderer: Render<E, M, R>
  customizer: Customize<E, M, R> | undefined
  readonly monitor?: Monitor
  readonly throttling: number // milliseconds, -1 is immediately, Number.MAX_SAFE_INTEGER is never
  readonly logging?: Partial<LoggingOptions>
  priority: Priority
  shuffle: boolean
  model?: M
  // System-managed properties
  readonly level: number
  readonly parent: RxNodeImpl
  stamp: number
  emission: number
  children: NodeChildrenImpl
  next?: RxNodeImpl
  prev?: RxNodeImpl
  neighbor?: RxNodeImpl
  reinserting: boolean
  element?: E

  constructor(name: string, factory: NodeFactory<E>, inline: boolean, parent: RxNodeImpl,
    triggers: unknown, render: Render<E, M, R>, customize?: Customize<E, M, R>,
    priority?: Priority, monitor?: Monitor, throttling?: number, logging?: Partial<LoggingOptions>) {
    super()
    // User-defined properties
    this.name = name
    this.factory = factory
    this.inline = inline
    this.triggers = triggers
    this.renderer = render
    this.customizer = customize
    this.monitor = monitor,
    this.throttling = throttling ?? -1,
    this.logging = logging
    this.priority = priority ?? Priority.SyncP0,
    this.shuffle = false
    this.model = undefined
    // System-managed properties
    this.level = parent.level + 1
    this.parent = parent
    this.stamp = 0
    this.emission = 0
    this.children = new NodeChildrenImpl()
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
    noSideEffects: true })
  autorender(_triggers: unknown): void {
    // triggers parameter is used to enforce rendering by parent
    runRender(this)
  }
}

// Internal

function runRenderChildrenThenDo(action: () => void): void {
  const node = gContext
  let promised: Promise<void> | undefined = undefined
  try {
    const children = node.children
    if (children.isEmissionInProgress) {
      let vanished = children.endEmission()
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
  if (Transaction.isFrameOver(checkEveryN, RxNode.frameDuration))
    await Transaction.requestNextFrame()
  if (!Transaction.isCanceled) {
    if (parent.shuffle)
      shuffle(children)
    for (const child of children) {
      if (Transaction.isFrameOver(checkEveryN, RxNode.frameDuration))
        await Transaction.requestNextFrame()
      if (Transaction.isCanceled)
        break
      doRender(child)
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
          node.children.beginEmission(node.stamp)
          result = factory.render(node)
        }
        finally {
          // Render children (skipped if children were already rendered explicitly)
          if (result instanceof Promise)
            result.then(
              value => { RxNode.renderChildrenThenDo(NOP); return value },
              error => { console.log(error); RxNode.renderChildrenThenDo(NOP) })
          else
            RxNode.renderChildrenThenDo(NOP) // calls node.children.endEmission()
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
  emission: number = 0
  emittedFirst?: RxNodeImpl = undefined
  emittedLast?: RxNodeImpl = undefined
  emittedCount: number = 0
  likelyNextEmitted?: RxNodeImpl = undefined

  get isEmissionInProgress(): boolean { return this.emission > 0 }

  beginEmission(emission: number): void {
    if (this.isEmissionInProgress)
      throw new Error('reconciliation is not reentrant')
    this.emission = emission
  }

  endEmission(): RxNodeImpl | undefined {
    if (!this.isEmissionInProgress)
      throw new Error('reconciliation is ended already')
    this.emission = 0
    const emittedCount = this.emittedCount
    if (emittedCount > 0) {
      if (emittedCount > this.count) { // it should be faster to delete non-retained nodes from namespace
        const namespace = this.namespace
        let child = this.first
        while (child !== undefined)
          namespace.delete(child.name), child = child.next
      }
      else { // it should be faster to recreate namespace with retained nodes only
        const namespace = this.namespace = new Map<string, RxNodeImpl>()
        let child = this.emittedFirst
        while (child !== undefined)
          namespace.set(child.name, child), child = child.next
      }
    }
    else // just create new empty namespace
      this.namespace = new Map<string, RxNodeImpl>()
    const vanishedFirst = this.first
    this.first = this.emittedFirst
    this.count = emittedCount
    this.emittedFirst = this.emittedLast = undefined
    this.emittedCount = 0
    this.likelyNextEmitted = this.first
    return vanishedFirst
  }

  tryEmitAsExisting(name: string): RxNodeImpl | undefined {
    let result = this.likelyNextEmitted
    if (result?.name !== name)
      result = this.namespace.get(name)
    if (result && result.stamp >= 0) {
      if (result.emission === this.emission)
        throw new Error(`duplicate node id: ${name}`)
      result.emission = this.emission
      this.likelyNextEmitted = result.next
      // Exclude from main sequence
      if (result.prev !== undefined)
        result.prev.next = result.next
      if (result.next !== undefined)
        result.next.prev = result.prev
      if (result === this.first)
        this.first = result.next
      this.count--
      // Include into retained sequence
      const last = this.emittedLast
      if (last) {
        result.prev = last
        result.next = undefined
        this.emittedLast = last.next = result
      }
      else {
        result.prev = result.next = undefined
        this.emittedFirst = this.emittedLast = result
      }
      this.emittedCount++
    }
    return result
  }

  emitAsNewlyCreated(node: RxNodeImpl): void {
    node.emission = this.emission
    this.namespace.set(node.name, node)
    const last = this.emittedLast
    if (last) {
      node.prev = last
      this.emittedLast = last.next = node
    }
    else
      this.emittedFirst = this.emittedLast = node
    this.emittedCount++
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
