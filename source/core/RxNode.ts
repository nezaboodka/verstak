// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { reaction, nonreactive, Transaction, options, Reentrance, Rx, Monitor, LoggingOptions } from 'reactronic'

export type Callback<E = unknown> = (element: E) => void // to be deleted
export type RxRender<E = unknown, O = void> = (element: E, options: O) => void | Promise<void>
export type RxCustomize<E = unknown, O = void> = (render: (options: O) => void, element: E) => void
export const enum RxPriority { SyncP0 = 0, AsyncP1 = 1, AsyncP2 = 2 }

// RxNode

export abstract class RxNode<E = any, O = any, M = unknown> {
  static incrementalRenderingFrameDurationMs = 10
  // User-defined properties
  abstract readonly name: string
  abstract readonly factory: RxNodeFactory<E>
  abstract readonly affiliate: boolean
  abstract readonly triggers: unknown
  abstract readonly render: RxRender<E, O> | undefined
  abstract readonly customize: RxCustomize<E, O> | undefined
  abstract readonly monitor?: Monitor
  abstract readonly throttling?: number // milliseconds, -1 is immediately, Number.MAX_SAFE_INTEGER is never
  abstract readonly logging?: Partial<LoggingOptions>
  abstract priority: RxPriority
  abstract shuffle: boolean
  abstract model?: M
  // System-managed properties
  readonly abstract level: number
  readonly abstract parent: RxNode
  readonly abstract stamp: number
  readonly abstract children: RxNodeChildren
  readonly abstract next?: RxNode
  readonly abstract prev?: RxNode
  abstract neighbor?: RxNode
  abstract native?: E

  static self<M>(): RxNode<any, any, M> { return gContext as RxNode<any, any, M> }

  static Reaction<E = undefined, O = void, M = unknown>(
    name: string, triggers: unknown,
    render?: RxRender<E, O>, customize?: RxCustomize<E, O>,
    factory?: RxNodeFactory<E>, monitor?: Monitor,
    throttling?: number, logging?: Partial<LoggingOptions>): RxNode<E, O, M> {
    return emit(name, triggers, false, render, customize,
      factory, monitor, throttling, logging)
  }

  static Affiliate<E = undefined, O = void, M = unknown>(
    name: string, triggers: unknown,
    render?: RxRender<E, O>, customize?: RxCustomize<E, O>,
    factory?: RxNodeFactory<E>, monitor?: Monitor,
    throttling?: number, logging?: Partial<LoggingOptions>): RxNode<E, O, M> {
    return emit(name, triggers, true, render, customize,
      factory, monitor, throttling, logging)
  }

  static launch(render: () => void): void {
    gSystem.render = render
    doRender(gSystem)
  }

  static renderChildrenThenDo(action: () => void): void {
    renderChildrenThenDoImpl(action)
  }

  static forAllNodesDo<E>(action: (e: E) => void): void {
    forEachChildRecursively(gSystem, action)
  }
}

// RxNodeFactory

const NOP = (): void => { /* nop */ }

export interface RxNodeFactory<E = unknown> {
  readonly name: string
  readonly arranging: boolean
  initialize?(node: RxNode<E>): void
  finalize?(node: RxNode<E>, initiator: RxNode): void
  arrange?(node: RxNode<E>): void
  render?(node: RxNode<E>): void
}

export class RxStandardNodeFactory<E> implements RxNodeFactory<E> {
  public static readonly default = new RxStandardNodeFactory<any>('default', false)

  readonly name: string
  readonly arranging: boolean

  constructor(name: string, arranging: boolean) {
    this.name = name
    this.arranging = arranging
  }

  initialize(node: RxNode<E>): void {
    if (!node.affiliate && Rx.isLogging)
      Rx.setLoggingHint(node, node.name)
  }

  finalize(node: RxNode<E>, initiator: RxNode): void {
    node.native = undefined
  }

  arrange(node: RxNode<E>): void {
    // nothing to do by default
  }

  render(node: RxNode<E>): void {
    let result: any
    const native = node.native!
    const children = node.children as RxNodeChildrenImpl
    children.beginEmission(node.stamp)
    try {
      if (node.customize)
        node.customize(o => { result = node.render?.(native, o) }, native)
      else
        result = node.render?.(native, undefined)
    }
    finally {
      if (result instanceof Promise)
        result = result.then( // causes wrapping of then/catch to execute within current parent
          value => { RxNode.renderChildrenThenDo(NOP); return value }, // ignored if rendered already
          error => { console.log(error); RxNode.renderChildrenThenDo(NOP) }) // do not render children in case of parent error
      else
        RxNode.renderChildrenThenDo(NOP) // ignored if rendered already
    }
  }
}

// RxNodeImpl

class RxNodeImpl<E = any, O = any, M = unknown> extends RxNode<E, O, M> {
  // User-defined properties
  readonly name: string
  readonly factory: RxNodeFactory<E>
  readonly affiliate: boolean
  triggers: unknown
  render: RxRender<E, O> | undefined
  customize: RxCustomize<E, O> | undefined
  readonly monitor?: Monitor
  readonly throttling: number // milliseconds, -1 is immediately, Number.MAX_SAFE_INTEGER is never
  readonly logging?: Partial<LoggingOptions>
  priority: RxPriority
  shuffle: boolean
  model?: M
  // System-managed properties
  readonly level: number
  readonly parent: RxNodeImpl
  stamp: number
  emission: number
  children: RxNodeChildrenImpl
  next?: RxNodeImpl
  prev?: RxNodeImpl
  neighbor?: RxNodeImpl
  rearranging: boolean
  native?: E

  constructor(name: string, factory: RxNodeFactory<E>, affiliate: boolean, parent: RxNodeImpl,
    triggers?: unknown, render?: RxRender<E, O>, customize?: RxCustomize<E, O>,
    monitor?: Monitor, throttling?: number, logging?: Partial<LoggingOptions>) {
    super()
    // User-defined properties
    this.name = name
    this.factory = factory
    this.affiliate = affiliate
    this.triggers = triggers
    this.render = render
    this.customize = customize
    this.monitor = monitor,
    this.throttling = throttling ?? -1,
    this.logging = logging
    this.priority = RxPriority.SyncP0,
    this.shuffle = false
    this.model = undefined
    // System-managed properties
    this.level = parent.level + 1
    this.parent = parent
    this.stamp = 0
    this.emission = 0
    this.children = new RxNodeChildrenImpl()
    this.next = undefined
    this.prev = undefined
    this.neighbor = this
    this.rearranging = true
    this.native = undefined
  }

  @reaction
  @options({
    reentrance: Reentrance.CancelPrevious,
    sensitiveArgs: true,
    noSideEffects: true })
  autorender(_triggers: unknown): void {
    // triggers parameter is used to enforce rendering by parent
    runRender(this)
  }
}

// Internal

function emit<E = undefined, O = void, M = unknown>(
  name: string, triggers: unknown, united: boolean,
  render?: RxRender<E, O>, customize?: RxCustomize<E, O>,
  factory?: RxNodeFactory<E>, monitor?: Monitor, throttling?: number,
  logging?: Partial<LoggingOptions>): RxNode<E, O, M> {
  const parent = gContext
  const children = parent.children
  let node = children.tryEmitAsExisting(name)
  if (node) {
    if (node.affiliate || !triggersAreEqual(node.triggers, triggers))
      node.triggers = triggers
    node.render = render
    node.customize = customize
  }
  else {
    node = new RxNodeImpl<E, O>(name, factory ?? RxStandardNodeFactory.default, united ?? false,
      parent, triggers, render, customize, monitor, throttling, logging)
    children.emitAsNewlyCreated(node)
  }
  return node as RxNode<E, O, M>
}

function renderChildrenThenDoImpl(action: () => void): void {
  const node = gContext
  let promised: Promise<void> | undefined = undefined
  try {
    const children = node.children
    if (children.isEmissionInProgress) {
      let vanished = children.endEmission()
      // Unmount vanished children
      while (vanished !== undefined) {
        doFinalize(vanished, vanished)
        vanished = vanished.next
      }
      // Render retained children
      const arranging = node.factory.arranging
      let p1: Array<RxNodeImpl> | undefined = undefined
      let p2: Array<RxNodeImpl> | undefined = undefined
      let neighbor: RxNodeImpl | undefined = undefined
      let x = children.first
      while (x !== undefined && !Transaction.isCanceled) {
        if (arranging && x.neighbor !== neighbor) {
          x.rearranging = true
          x.neighbor = neighbor
        }
        if (x.priority === RxPriority.SyncP0)
          doRender(x)
        else if (x.priority === RxPriority.AsyncP1)
          p1 = push(p1, x)
        else
          p2 = push(p2, x)
        if (x.native)
          neighbor = x
        x = x.next
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
  if (Transaction.isFrameOver(checkEveryN, RxNode.incrementalRenderingFrameDurationMs))
    await Transaction.requestNextFrame()
  if (!Transaction.isCanceled) {
    if (parent.shuffle)
      shuffle(children)
    for (const x of children) {
      if (Transaction.isFrameOver(checkEveryN, RxNode.incrementalRenderingFrameDurationMs))
        await Transaction.requestNextFrame()
      if (Transaction.isCanceled)
        break
      doRender(x)
    }
  }
}

function doRender(node: RxNodeImpl): void {
  if (node.stamp >= 0) {
    const f = node.factory
    if (node.stamp === 0) {
      !node.affiliate && Transaction.off(() => {
        Rx.getController(node.autorender).configure({
          order: node.level,
          monitor: node.monitor,
          throttling: node.throttling,
          logging: node.logging,
        })
      })
      f.initialize?.(node)
    }
    if (node.rearranging) {
      node.rearranging = false
      f.arrange?.(node)
    }
    if (node.affiliate)
      runRender(node)
    else
      nonreactive(node.autorender, node.triggers) // reactive auto-rendering
  }
}

function runRender(node: RxNodeImpl): void {
  if (node.stamp >= 0) {
    try {
      runUnder(node, () => {
        node.stamp++
        const f = node.factory
        if (f.render)
          f.render(node) // factory-defined rendering
        else
          RxStandardNodeFactory.default.render(node) // default rendering
      })
    }
    catch (e) {
      console.log(`${e}`)
      console.log(`Rendering failed: ${node.name} (see error message above)`)
    }
  }
}

function doFinalize(node: RxNodeImpl, initiator: RxNodeImpl): void {
  if (node.stamp >= 0) {
    node.stamp = ~node.stamp
    // Finalize node itself
    const f = node.factory
    if (f.finalize)
      f.finalize(node, initiator)
    else
      RxStandardNodeFactory.default.finalize(node, initiator) // default finalize
    if (!node.affiliate)
      deferDispose(node) // enqueue node for Rx.dispose if needed
    // Finalize children if any
    let x = node.children.first
    while (x !== undefined) {
      doFinalize(x, initiator)
      x = x.next
    }
  }
}

async function runDisposalLoop(): Promise<void> {
  await Transaction.requestNextFrame()
  let x = gFirstToDispose
  while (x !== undefined) {
    if (Transaction.isFrameOver(500, 5))
      await Transaction.requestNextFrame()
    Rx.dispose(x)
    x = x.neighbor
  }
  gFirstToDispose = gLastToDispose = undefined // reset loop
}

function forEachChildRecursively(node: RxNodeImpl, action: (e: any) => void): void {
  const native = node.native
  native && action(native)
  let x = node.children.first
  while (x !== undefined) {
    forEachChildRecursively(x, action)
    x = x.next
  }
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

// RxNodeChildrenImpl

export interface RxNodeChildren {
  readonly first?: RxNode
  readonly count: number
}

class RxNodeChildrenImpl implements RxNodeChildren {
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
        const ns = this.namespace
        let x = this.first
        while (x !== undefined)
          ns.delete(x.name), x = x.next
      }
      else { // it should be faster to recreate namespace with retained nodes only
        const ns = this.namespace = new Map<string, RxNodeImpl>()
        let x = this.emittedFirst
        while (x !== undefined)
          ns.set(x.name, x), x = x.next
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

const gSystem = new RxNodeImpl<undefined, void>('SYSTEM',
  new RxStandardNodeFactory<undefined>('SYSTEM', false), false,
  { level: 0 } as RxNodeImpl) // fake parent (overwritten below)

Object.defineProperty(gSystem, 'parent', {
  value: gSystem,
  writable: false,
  configurable: false,
  enumerable: true,
})

let gContext: RxNodeImpl = gSystem
let gFirstToDispose: RxNodeImpl | undefined = undefined
let gLastToDispose: RxNodeImpl | undefined = undefined
