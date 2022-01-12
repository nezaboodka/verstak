// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { reaction, Transaction, Rx, options, Reentrance, nonreactive } from 'reactronic'
import { RxNodeFactory, Render, RxNode, Customize, RxNodeChildren, RxPriority } from './RxDom.Types'

const NOP = (): void => { /* nop */ }

// BasicNodeFactory

export class BasicNodeFactory<E> implements RxNodeFactory<E> {
  readonly name: string
  readonly arranging: boolean

  constructor(name: string, arranging: boolean) {
    this.name = name
    this.arranging = arranging
  }

  initialize(node: RxNode<E>): void {
    if (!node.inline && Rx.isLogging)
      Rx.setLoggingHint(node, node.name)
  }

  finalize(node: RxNode<E>, initiator: RxNode): void {
    node.neighbor = undefined
    node.native = undefined
  }

  arrange(node: RxNode<E>): void {
    // nothing to do by default
  }

  render(node: RxNode<E>): void {
    let result: any
    const native = node.native!
    const children = node.children as RxDomNodeChildren
    children.beginReconciliation(node.stamp)
    try {
      if (node.customize)
        node.customize(o => { result = node.render?.(native, o) }, native)
      else
        result = node.render?.(native, undefined)
    }
    finally {
      if (result instanceof Promise)
        result = result.then( // causes wrapping of then/catch to execute within current parent
          value => { RxDom.renderChildrenThenDo(NOP); return value }, // ignored if rendered already
          error => { console.log(error); RxDom.renderChildrenThenDo(NOP) }) // do not render children in case of parent error
      else
        RxDom.renderChildrenThenDo(NOP) // ignored if rendered already
    }
  }
}

// RxDomNode

class RxDomNode<E = any, O = any> implements RxNode<E, O> {
  // User-defined properties
  readonly name: string
  readonly factory: RxNodeFactory<E>
  readonly inline: boolean
  triggers: unknown
  render: Render<E, O> | undefined
  customize: Customize<E, O> | undefined
  priority: RxPriority
  shuffle: boolean
  model?: unknown
  // System-managed properties
  readonly level: number
  readonly parent: RxDomNode
  stamp: number
  reconciliation: number
  children: RxDomNodeChildren
  next?: RxDomNode
  prev?: RxDomNode
  neighbor?: RxDomNode
  rearranging: boolean
  native?: E

  constructor(level: number, name: string, factory: RxNodeFactory<E>, inline: boolean,
    triggers: unknown, render: Render<E, O> | undefined, customize: Customize<E, O> | undefined,
    parent: RxDomNode) {
    // User-defined properties
    this.name = name
    this.factory = factory
    this.inline = inline
    this.triggers = triggers
    this.render = render
    this.customize = customize
    this.priority = RxPriority.SyncP0
    this.shuffle = false
    this.model = undefined
    // System-managed properties
    this.level = level
    this.parent = parent
    this.stamp = ~0
    this.reconciliation = ~0
    this.children = new RxDomNodeChildren()
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
    if (this.stamp === 0) // configure only once
      Rx.configureCurrentOperation({ order: this.level })
    invokeRenderIfNodeIsAlive(this)
  }
}

// RxDom

export class RxDom {
  public static readonly basic = new BasicNodeFactory<any>('basic', false)
  public static incrementalRenderingFrameDurationMs = 10

  static Node<E = undefined, O = void>(name: string, triggers: unknown,
    render?: Render<E, O>, customize?: Customize<E, O>,
    factory?: RxNodeFactory<E>, inline?: boolean): RxNode<E, O> {
    const parent = gContext
    const children = parent.children
    let result = children.tryToReuseIncoming(name)
    if (result) {
      if (result.inline || !triggersAreEqual(result.triggers, triggers))
        result.triggers = triggers
      result.render = render
      result.customize = customize
    }
    else {
      result = new RxDomNode<E, O>(parent.level + 1, name, factory ?? RxDom.basic,
        inline ?? false, triggers, render, customize, parent)
      children.addIncoming(result)
    }
    return result
  }

  static launch(render: () => void): void {
    gSystem.render = render
    tryToRender(gSystem)
  }

  static renderChildrenThenDo(action: () => void): void {
    const node = gContext
    let promised: Promise<void> | undefined = undefined
    try {
      const children = node.children
      if (children.isReconciling) {
        let vanished = children.endReconciliation()
        // Unmount vanished children
        while (vanished !== undefined) {
          tryToFinalize(vanished, vanished)
          vanished = vanished.next
        }
        // Render retained children
        const arranging = node.factory.arranging
        let p1: Array<RxDomNode> | undefined = undefined
        let p2: Array<RxDomNode> | undefined = undefined
        let neighbor: RxDomNode | undefined = undefined
        let x = children.first
        while (x !== undefined && !Transaction.isCanceled) {
          if (arranging && x.neighbor !== neighbor) {
            x.rearranging = true
            x.neighbor = neighbor
          }
          if (x.priority === RxPriority.SyncP0)
            tryToRender(x)
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

  static get currentNode(): RxNode {
    return gContext
  }

  static currentNodeModel<M>(): { model?: M } {
    return gContext as { model?: M }
  }

  static forAllNodesDo<E>(action: (e: E) => void): void {
    forEachChildRecursively(gSystem, action)
  }
}

// Internal

async function startIncrementalRendering(parent: RxDomNode,
  children1?: Array<RxDomNode>, children2?: Array<RxDomNode>): Promise<void> {
  if (children1)
    await renderIncrementally(parent, children1)
  if (children2)
    await renderIncrementally(parent, children2)
}

async function renderIncrementally(parent: RxDomNode, children: Array<RxDomNode>): Promise<void> {
  const checkEveryN = 30
  if (Transaction.isFrameOver(checkEveryN, RxDom.incrementalRenderingFrameDurationMs))
    await Transaction.requestNextFrame()
  if (!Transaction.isCanceled) {
    if (parent.shuffle)
      shuffle(children)
    for (const x of children) {
      if (Transaction.isFrameOver(checkEveryN, RxDom.incrementalRenderingFrameDurationMs))
        await Transaction.requestNextFrame()
      if (Transaction.isCanceled)
        break
      tryToRender(x)
    }
  }
}

function tryToRender(node: RxDomNode): void {
  try {
    const factory = node.factory
    if (node.stamp === ~0) {
      node.stamp = 0
      factory.initialize?.(node)
    }
    if (node.rearranging) {
      node.rearranging = false
      factory.arrange?.(node)
    }
    if (node.inline)
      invokeRenderIfNodeIsAlive(node)
    else
      nonreactive(node.autorender, node.triggers) // reactive auto-rendering
  }
  catch (e) {
    console.log(`Rendering failed: ${node.name}`)
    console.log(e)
  }
}

function invokeRenderIfNodeIsAlive(node: RxDomNode): void {
  if (node.stamp >= ~0) { // needed for deferred Rx.dispose
    runUnder(node, () => {
      node.stamp++
      const factory = node.factory
      if (factory.render)
        factory.render(node) // factory-defined rendering
      else
        RxDom.basic.render(node) // default rendering
    })
  }
}

function tryToFinalize(node: RxDomNode, initiator: RxDomNode): void {
  if (node.stamp >= ~0) {
    node.stamp = ~node.stamp
    // Finalize node itself
    const factory = node.factory
    if (factory.finalize)
      factory.finalize(node, initiator)
    else
      RxDom.basic.finalize(node, initiator) // default finalize
    // Enqueue node for Rx.dispose if needed
    if (!node.inline) {
      gDisposalQueue.push(node)
      if (gDisposalQueue.length === 1) {
        Transaction.run({ standalone: 'disposal', hint: `runDisposalLoop(initiator=${node.name})` }, () => {
          void runDisposalLoop().then(NOP, error => console.log(error))
        })
      }
    }
    // Finalize children if any
    let x = node.children.first
    while (x !== undefined) {
      tryToFinalize(x, initiator)
      x = x.next
    }
  }
}

async function runDisposalLoop(): Promise<void> {
  await Transaction.requestNextFrame()
  const queue = gDisposalQueue
  let i = 0
  while (i < queue.length) {
    if (Transaction.isFrameOver(500, 5))
      await Transaction.requestNextFrame()
    Rx.dispose(queue[i])
    i++
  }
  gDisposalQueue = [] // reset loop
}

function forEachChildRecursively(node: RxDomNode, action: (e: any) => void): void {
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

function runUnder<T>(node: RxDomNode, func: (...args: any[]) => T, ...args: any[]): T {
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

// RxDomNodeChildren

export class RxDomNodeChildren implements RxNodeChildren {
  namespace: Map<string, RxDomNode> = new Map<string, RxDomNode>()
  first?: RxDomNode = undefined
  count: number = 0
  incomingFirst?: RxDomNode = undefined
  incomingLast?: RxDomNode = undefined
  incomingCount: number = 0
  likelyNextIncoming?: RxDomNode = undefined
  stamp: number = ~0

  get isReconciling(): boolean { return this.stamp > ~0 }

  beginReconciliation(stamp: number): void {
    if (this.isReconciling)
      throw new Error('reconciliation is not reentrant')
    this.stamp = stamp
  }

  endReconciliation(): RxDomNode | undefined {
    if (!this.isReconciling)
      throw new Error('reconciliation is ended already')
    this.stamp = ~0
    const namespace = this.namespace
    const count = this.count
    const n = this.incomingCount
    if (n > 0) {
      if (n > count) { // it should be faster to delete non-retained nodes from namespace
        let x = this.first
        while (x !== undefined)
          namespace.delete(x.name), x = x.next
      }
      else { // it should be faster to recreate namespace with retained nodes only
        const newNamespace = this.namespace = new Map<string, RxDomNode>()
        let x = this.incomingFirst
        while (x !== undefined)
          newNamespace.set(x.name, x), x = x.next
      }
    }
    else // just create new empty namespace
      this.namespace = new Map<string, RxDomNode>()
    const vanishedFirst = this.first
    this.first = this.incomingFirst
    this.count = n
    this.incomingFirst = this.incomingLast = undefined
    this.incomingCount = 0
    this.likelyNextIncoming = this.first
    return vanishedFirst
  }

  tryToReuseIncoming(name: string): RxDomNode | undefined {
    let result = this.likelyNextIncoming
    if (result?.name !== name)
      result = this.namespace.get(name)
    if (result && result.stamp >= ~0) {
      if (result.reconciliation === this.stamp)
        throw new Error(`duplicate node id: ${name}`)
      result.reconciliation = this.stamp
      this.likelyNextIncoming = result.next
      // Exclude from main sequence
      if (result.prev !== undefined)
        result.prev.next = result.next
      if (result.next !== undefined)
        result.next.prev = result.prev
      if (result === this.first)
        this.first = result.next
      this.count--
      // Include into retained sequence
      const last = this.incomingLast
      if (last) {
        result.prev = last
        result.next = undefined
        this.incomingLast = last.next = result
      }
      else {
        result.prev = result.next = undefined
        this.incomingFirst = this.incomingLast = result
      }
      this.incomingCount++
    }
    return result
  }

  addIncoming(node: RxDomNode): void {
    node.reconciliation = this.stamp
    this.namespace.set(node.name, node)
    const last = this.incomingLast
    if (last) {
      node.prev = last
      this.incomingLast = last.next = node
    }
    else
      this.incomingFirst = this.incomingLast = node
    this.incomingCount++
  }
}

// Support asynchronous programing automatically

const ORIGINAL_PROMISE_THEN = Promise.prototype.then

function reactronicDomHookedThen(this: any,
  resolve?: ((value: any) => any | PromiseLike<any>) | undefined | null,
  reject?: ((reason: any) => never | PromiseLike<never>) | undefined | null): Promise<any | never> {
  resolve = resolve ? wrap(resolve) : resolveReturn
  reject = reject ? wrap(reject) : rejectRethrow
  return ORIGINAL_PROMISE_THEN.call(this, resolve, reject)
}

/* istanbul ignore next */
export function resolveReturn(value: any): any {
  return value
}

/* istanbul ignore next */
export function rejectRethrow(error: any): never {
  throw error
}

Promise.prototype.then = reactronicDomHookedThen

// Globals

const gSystemFactory: RxNodeFactory<undefined> = {
  name: 'SYSTEM',
  arranging: false,
}

const gSystem = new RxDomNode<undefined, void>(
  0,                // level
  'SYSTEM',         // name
  gSystemFactory,   // factory
  false,            // inline
  undefined,        // triggers
  NOP,              // render
  undefined,        // customize
  {} as RxDomNode)  // fake parent (overwritten below)

Object.defineProperty(gSystem, 'parent', {
  value: gSystem,
  writable: false,
  configurable: false,
  enumerable: true,
})

let gContext: RxDomNode = gSystem
let gDisposalQueue: Array<RxNode> = []
