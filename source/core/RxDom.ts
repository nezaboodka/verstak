// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { reaction, nonreactive, Transaction, options, Reentrance, Rx, Monitor, LoggingOptions } from 'reactronic'

export type Callback<E = unknown> = (element: E) => void // to be deleted
export type Render<E = unknown, O = void> = (element: E, options: O) => void | Promise<void>
export type Customize<E = unknown, O = void> = (render: (options: O) => void, element: E) => void
export const enum Priority { SyncP0 = 0, AsyncP1 = 1, AsyncP2 = 2 }

// DomNode

export function Reaction<E = undefined, O = void, M = unknown>(
  name: string, triggers: unknown,
  render?: Render<E, O>, customize?: Customize<E, O>,
  factory?: RxNodeFactory<E>, monitor?: Monitor,
  throttling?: number, logging?: Partial<LoggingOptions>): DomNode<E, O, M> {
  return emit(name, triggers, false, render, customize,
    factory, monitor, throttling, logging)
}

export function Affiliate<E = undefined, O = void, M = unknown>(
  name: string, triggers: unknown,
  render?: Render<E, O>, customize?: Customize<E, O>,
  factory?: RxNodeFactory<E>, monitor?: Monitor,
  throttling?: number, logging?: Partial<LoggingOptions>): DomNode<E, O, M> {
  return emit(name, triggers, true, render, customize,
    factory, monitor, throttling, logging)
}

export abstract class DomNode<E = any, O = any, M = unknown> {
  static incrementalRenderingFrameDurationMs = 10
  // User-defined properties
  abstract readonly name: string
  abstract readonly factory: RxNodeFactory<E>
  abstract readonly affiliate: boolean
  abstract readonly triggers: unknown
  abstract readonly render: Render<E, O> | undefined
  abstract readonly customize: Customize<E, O> | undefined
  abstract readonly monitor?: Monitor
  abstract readonly throttling?: number // milliseconds, -1 is immediately, Number.MAX_SAFE_INTEGER is never
  abstract readonly logging?: Partial<LoggingOptions>
  abstract priority: Priority
  abstract shuffle: boolean
  abstract model?: M
  // System-managed properties
  abstract readonly level: number
  abstract readonly parent: DomNode
  abstract readonly stamp: number
  abstract readonly children: RxNodeChildren
  abstract readonly next?: DomNode
  abstract readonly prev?: DomNode
  abstract neighbor?: DomNode
  abstract native?: E

  static launch(render: () => void): void {
    gSystem.render = render
    doRender(gSystem)
  }

  static self<M = unknown, E = unknown, O = void>(): DomNode<E, O, M> {
    return gContext as DomNode<E, O, M>
  }

  static get isInitialRendering(): boolean {
    return gContext.stamp === 1
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
  initialize?(node: DomNode<E>): void
  finalize?(node: DomNode<E>, initiator: DomNode): void
  arrange?(node: DomNode<E>): void
  render?(node: DomNode<E>): void
}

export class RxStandardNodeFactory<E> implements RxNodeFactory<E> {
  public static readonly system = new RxStandardNodeFactory<any>('system', false)

  readonly name: string
  readonly arranging: boolean

  constructor(name: string, arranging: boolean) {
    this.name = name
    this.arranging = arranging
  }

  initialize(node: DomNode<E>): void {
    if (!node.affiliate && Rx.isLogging)
      Rx.setLoggingHint(node, node.name)
  }

  finalize(node: DomNode<E>, initiator: DomNode): void {
    node.native = undefined
  }

  arrange(node: DomNode<E>): void {
    // nothing to do by default
  }

  render(node: DomNode<E>): void {
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
          value => { DomNode.renderChildrenThenDo(NOP); return value }, // ignored if rendered already
          error => { console.log(error); DomNode.renderChildrenThenDo(NOP) }) // do not render children in case of parent error
      else
        DomNode.renderChildrenThenDo(NOP) // ignored if rendered already
    }
  }
}

// DomNodeImpl

class DomNodeImpl<E = any, O = any, M = unknown> extends DomNode<E, O, M> {
  // User-defined properties
  readonly name: string
  readonly factory: RxNodeFactory<E>
  readonly affiliate: boolean
  triggers: unknown
  render: Render<E, O> | undefined
  customize: Customize<E, O> | undefined
  readonly monitor?: Monitor
  readonly throttling: number // milliseconds, -1 is immediately, Number.MAX_SAFE_INTEGER is never
  readonly logging?: Partial<LoggingOptions>
  priority: Priority
  shuffle: boolean
  model?: M
  // System-managed properties
  readonly level: number
  readonly parent: DomNodeImpl
  stamp: number
  emission: number
  children: RxNodeChildrenImpl
  next?: DomNodeImpl
  prev?: DomNodeImpl
  neighbor?: DomNodeImpl
  rearranging: boolean
  native?: E

  constructor(name: string, factory: RxNodeFactory<E>, affiliate: boolean, parent: DomNodeImpl,
    triggers?: unknown, render?: Render<E, O>, customize?: Customize<E, O>,
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
    this.priority = Priority.SyncP0,
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
  render?: Render<E, O>, customize?: Customize<E, O>,
  factory?: RxNodeFactory<E>, monitor?: Monitor, throttling?: number,
  logging?: Partial<LoggingOptions>): DomNode<E, O, M> {
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
    node = new DomNodeImpl<E, O>(name, factory ?? RxStandardNodeFactory.system, united ?? false,
      parent, triggers, render, customize, monitor, throttling, logging)
    children.emitAsNewlyCreated(node)
  }
  return node as DomNode<E, O, M>
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
      let p1: Array<DomNodeImpl> | undefined = undefined
      let p2: Array<DomNodeImpl> | undefined = undefined
      let neighbor: DomNodeImpl | undefined = undefined
      let x = children.first
      while (x !== undefined && !Transaction.isCanceled) {
        if (arranging && x.neighbor !== neighbor) {
          x.rearranging = true
          x.neighbor = neighbor
        }
        if (x.priority === Priority.SyncP0)
          doRender(x)
        else if (x.priority === Priority.AsyncP1)
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

async function startIncrementalRendering(parent: DomNodeImpl,
  children1?: Array<DomNodeImpl>, children2?: Array<DomNodeImpl>): Promise<void> {
  if (children1)
    await renderIncrementally(parent, children1)
  if (children2)
    await renderIncrementally(parent, children2)
}

async function renderIncrementally(parent: DomNodeImpl, children: Array<DomNodeImpl>): Promise<void> {
  const checkEveryN = 30
  if (Transaction.isFrameOver(checkEveryN, DomNode.incrementalRenderingFrameDurationMs))
    await Transaction.requestNextFrame()
  if (!Transaction.isCanceled) {
    if (parent.shuffle)
      shuffle(children)
    for (const x of children) {
      if (Transaction.isFrameOver(checkEveryN, DomNode.incrementalRenderingFrameDurationMs))
        await Transaction.requestNextFrame()
      if (Transaction.isCanceled)
        break
      doRender(x)
    }
  }
}

function doRender(node: DomNodeImpl): void {
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

function runRender(node: DomNodeImpl): void {
  if (node.stamp >= 0) {
    try {
      runUnder(node, () => {
        node.stamp++
        const f = node.factory
        if (f.render)
          f.render(node) // factory-defined rendering
        else
          RxStandardNodeFactory.system.render(node) // default rendering
      })
    }
    catch (e) {
      console.log(`${e}`)
      console.log(`Rendering failed: ${node.name} (see error message above)`)
    }
  }
}

function doFinalize(node: DomNodeImpl, initiator: DomNodeImpl): void {
  if (node.stamp >= 0) {
    node.stamp = ~node.stamp
    // Finalize node itself
    const f = node.factory
    if (f.finalize)
      f.finalize(node, initiator)
    else
      RxStandardNodeFactory.system.finalize(node, initiator) // default finalize
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

function forEachChildRecursively(node: DomNodeImpl, action: (e: any) => void): void {
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

function runUnder<T>(node: DomNodeImpl, func: (...args: any[]) => T, ...args: any[]): T {
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
  readonly first?: DomNode
  readonly count: number
}

class RxNodeChildrenImpl implements RxNodeChildren {
  namespace: Map<string, DomNodeImpl> = new Map<string, DomNodeImpl>()
  first?: DomNodeImpl = undefined
  count: number = 0
  emission: number = 0
  emittedFirst?: DomNodeImpl = undefined
  emittedLast?: DomNodeImpl = undefined
  emittedCount: number = 0
  likelyNextEmitted?: DomNodeImpl = undefined

  get isEmissionInProgress(): boolean { return this.emission > 0 }

  beginEmission(emission: number): void {
    if (this.isEmissionInProgress)
      throw new Error('reconciliation is not reentrant')
    this.emission = emission
  }

  endEmission(): DomNodeImpl | undefined {
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
        const ns = this.namespace = new Map<string, DomNodeImpl>()
        let x = this.emittedFirst
        while (x !== undefined)
          ns.set(x.name, x), x = x.next
      }
    }
    else // just create new empty namespace
      this.namespace = new Map<string, DomNodeImpl>()
    const vanishedFirst = this.first
    this.first = this.emittedFirst
    this.count = emittedCount
    this.emittedFirst = this.emittedLast = undefined
    this.emittedCount = 0
    this.likelyNextEmitted = this.first
    return vanishedFirst
  }

  tryEmitAsExisting(name: string): DomNodeImpl | undefined {
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

  emitAsNewlyCreated(node: DomNodeImpl): void {
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

function deferDispose(node: DomNodeImpl): void {
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

const gSystem = new DomNodeImpl<undefined, void>('SYSTEM',
  new RxStandardNodeFactory<undefined>('SYSTEM', false), false,
  { level: 0 } as DomNodeImpl) // fake parent (overwritten below)

Object.defineProperty(gSystem, 'parent', {
  value: gSystem,
  writable: false,
  configurable: false,
  enumerable: true,
})

let gContext: DomNodeImpl = gSystem
let gFirstToDispose: DomNodeImpl | undefined = undefined
let gLastToDispose: DomNodeImpl | undefined = undefined
