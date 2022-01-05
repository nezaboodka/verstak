// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { reaction, Transaction, Rx, options, Reentrance, nonreactive } from 'reactronic'
import { RxNodeType, Render, RxNode, SuperRender, RxNodeSequence, RxPriority } from './RxDom.Types'

// BasicNodeType

export class BasicNodeType<E, O> implements RxNodeType<E, O> {
  constructor(
    readonly name: string,
    readonly sequential: boolean) {
  }

  initialize(node: RxNode<E, O>): void {
    if (!node.inline)
      Rx.setTraceHint(node, node.id)
  }

  render(node: RxNode<E, O>, args: unknown): void {
    let result: any
    const children = node.children as RxNodeSequenceImpl
    children.open(node.revision)
    if (node.superRender)
      result = node.superRender(options => {
        const res = node.render(node.native as E, options)
        if (res instanceof Promise)
          return res.then() // causes wrapping of then/catch to execute within current parent
        else
          return options
      }, node.native!)
    else
      result = node.render(node.native as E, args as O)
    if (result instanceof Promise)
      result = result.then( // causes wrapping of then/catch to execute within current parent
        value => { RxDom.renderChildrenThenDo(NOP); return value }, // ignored if rendered already
        error => { console.log(error); RxDom.renderChildrenThenDo(NOP) }) // do not render children in case of parent error
    else
      RxDom.renderChildrenThenDo(NOP) // ignored if rendered already
  }

  finalize(node: RxNode<E, O>, initiator: RxNode): void {
    node.native = undefined
  }
}

// RxNodeImpl

class RxNodeImpl<E = any, O = any> implements RxNode<E, O> {
  // User-defined properties
  readonly id: string
  readonly type: RxNodeType<E, O>
  readonly inline: boolean
  args: unknown
  render: Render<E, O>
  superRender: SuperRender<O, E> | undefined
  priority: RxPriority
  childrenShuffling: boolean
  model?: unknown
  // System-managed properties
  readonly level: number
  readonly parent: RxNodeImpl
  revision: number
  reconciliationRevision: number
  prevMountSibling?: RxNodeImpl
  isMountRequired: boolean
  children: RxNodeSequenceImpl
  next?: RxNodeImpl
  prev?: RxNodeImpl
  native?: E
  resizeObserver?: ResizeObserver

  constructor(level: number, id: string, type: RxNodeType<E, O>, inline: boolean,
    args: unknown, render: Render<E, O>, superRender: SuperRender<O, E> | undefined,
    parent: RxNodeImpl) {
    // User-defined properties
    this.id = id
    this.type = type
    this.inline = inline
    this.args = args
    this.render = render
    this.superRender = superRender
    this.priority = RxPriority.SyncP0
    this.childrenShuffling = false
    this.model = undefined
    // System-managed properties
    this.level = level
    this.parent = parent
    this.revision = ~0
    this.reconciliationRevision = ~0
    this.prevMountSibling = this
    this.isMountRequired = true
    this.children = new RxNodeSequenceImpl()
    this.next = undefined
    this.prev = undefined
    this.native = undefined
    this.resizeObserver = undefined
  }

  @reaction
  @options({
    reentrance: Reentrance.CancelPrevious,
    sensitiveArgs: true,
    noSideEffects: true })
  rerender(args: unknown): void {
    if (this.revision === 0) // configure only once
      Rx.configureCurrentOperation({ order: this.level })
    invokeRender(this, args)
  }
}

// RxDom

export class RxDom {
  public static readonly basic = new BasicNodeType<any, any>('basic', false)
  public static incrementalRenderingFrameDurationMs = 10

  static Root<T>(render: () => T): T {
    const p = gParent
    p.children.open(p.revision)
    let result: any = render()
    if (result instanceof Promise)
      result = result.then( // causes wrapping of then/catch to execute within current parent
        value => { Transaction.run(null, RxDom.renderChildrenThenDo, NOP); return value }, // ignored if rendered already
        error => { console.log(error); Transaction.run(null, RxDom.renderChildrenThenDo, NOP) }) // try to render children regardless the parent
    else
      Transaction.run(null, RxDom.renderChildrenThenDo, NOP) // ignored if rendered already
    return result
  }

  static Node<E = unknown, O = void>(id: string, args: any,
    render: Render<E, O>, superRender?: SuperRender<O, E>,
    type?: RxNodeType<E, O>, inline?: boolean): RxNode<E, O> {
    const parent = gParent
    const children = parent.children
    let result = children.tryToRetainExisting(id)
    if (result) {
      if (!argsAreEqual(result.args, args))
        result.args = args
      result.render = render
      result.superRender = superRender
    }
    else {
      result = new RxNodeImpl<E, O>(parent.level + 1, id,
        type ?? RxDom.basic, inline ?? false, args,
        render, superRender, parent)
      children.retainNewlyCreated(result)
    }
    return result
  }

  static renderChildrenThenDo(action: () => void): void {
    const parent = gParent
    let promised: Promise<void> | undefined = undefined
    try {
      const children = parent.children
      if (children.isOpened) {
        let p1: Array<RxNodeImpl> | undefined = undefined
        let p2: Array<RxNodeImpl> | undefined = undefined
        // Finalize non-retained children
        let x = children.first
        while (x !== undefined) {
          tryToFinalize(x, x)
          x = x.next
        }
        // Switch to retained children and render them
        children.switch()
        const sequential = parent.type.sequential
        let mountSibling: RxNodeImpl | undefined = undefined
        x = children.first
        while (x !== undefined && !Transaction.isCanceled) {
          if (sequential && x.prevMountSibling !== mountSibling) {
            x.prevMountSibling = mountSibling
            x.isMountRequired = true
          }
          if (x.priority === RxPriority.SyncP0)
            tryToRefresh(x)
          else if (x.priority === RxPriority.AsyncP1)
            p1 = push(p1, x)
          else
            p2 = push(p2, x)
          if (x.native)
            mountSibling = x
          x = x.next
        }
        children.close()
        // Asynchronous incremental rendering (if any)
        if (!Transaction.isCanceled && p1 !== undefined || p2 !== undefined)
          promised = RxDom.renderIncrementally(parent, p1, p2).then(action, action)
      }
    }
    finally {
      if (!promised)
        action()
    }
  }

  static createRootNode<E = any, O = any>(id: string, sequential: boolean, native: E): RxNode<E, O> {
    const node = new RxNodeImpl<E, O>(
      0,                        // level
      id,                       // id
      { name: id, sequential }, // type
      false,                    // inline
      null,                     // args
      () => { /* nop */ },      // render
      undefined,                // superRender
      {} as RxNodeImpl)         // fake parent (overwritten below)
    // Initialize
    const a: any = node
    a['parent'] = node
    node.native = native
    node.revision = 0 // initialized
    return node
  }

  static get currentNode(): RxNode {
    return gParent
  }

  static currentNodeModel<M>(): { model?: M } {
    return gParent as { model?: M }
  }

  static forAll<E>(action: (e: E) => void): void {
    RxDom.forEachChildRecursively(SYSTEM, action)
  }

  // Internal

  private static async renderIncrementally(node: RxNodeImpl,
    p1children: Array<RxNodeImpl> | undefined,
    p2children: Array<RxNodeImpl> | undefined): Promise<void> {
    const checkEveryN = 30
    if (Transaction.isFrameOver(checkEveryN, RxDom.incrementalRenderingFrameDurationMs))
      await Transaction.requestNextFrame()
    if (!Transaction.isCanceled) {
      if (p1children !== undefined) {
        if (node.childrenShuffling)
          shuffle(p1children)
        for (const x of p1children) {
          tryToRefresh(x)
          if (Transaction.isCanceled)
            break
          if (Transaction.isFrameOver(checkEveryN, RxDom.incrementalRenderingFrameDurationMs))
            await Transaction.requestNextFrame()
          if (Transaction.isCanceled)
            break
        }
      }
      if (p2children !== undefined) {
        if (node.childrenShuffling)
          shuffle(p2children)
        for (const x of p2children) {
          tryToRefresh(x)
          if (Transaction.isCanceled)
            break
          if (Transaction.isFrameOver(checkEveryN, RxDom.incrementalRenderingFrameDurationMs))
            await Transaction.requestNextFrame()
          if (Transaction.isCanceled)
            break
        }
      }
    }
  }

  private static forEachChildRecursively(node: RxNodeImpl, action: (e: any) => void): void {
    const native = node.native
    native && action(native)
    let x = node.children.first
    while (x !== undefined) {
      RxDom.forEachChildRecursively(x, action)
      x = x.next
    }
  }
}

// Internal

function tryToRefresh(node: RxNodeImpl): void {
  const type = node.type
  if (node.revision === ~0) {
    node.revision = 0
    type.initialize?.(node)
  }
  if (node.isMountRequired) {
    node.isMountRequired = false
    type.mount?.(node)
  }
  if (node.inline)
    invokeRender(node, node.args)
  else
    nonreactive(node.rerender, node.args) // reactive auto-rendering
}

function tryToFinalize(node: RxNodeImpl, initiator: RxNodeImpl): void {
  if (node.revision >= ~0) {
    node.revision = ~node.revision
    invokeFinalize(node, initiator)
    const isDisposeLoopLaunchRequired = gDisposeQueue.length === 0
    gDisposeQueue.push(node)
    if (isDisposeLoopLaunchRequired) {
      Transaction.run({ standalone: 'disposal', hint: `runDisposeLoop(initiator=${node.id})` }, () => {
        void runDisposeLoop().then(NOP, error => console.log(error))
      })
    }
    let x = node.children.first
    while (x !== undefined) {
      tryToFinalize(x as RxNodeImpl, initiator as RxNodeImpl)
      x = x.next
    }
  }
}

function invokeRender(node: RxNodeImpl, args: unknown): void {
  if (node.revision >= ~0) { // needed for deferred Rx.dispose
    runUnder(node, () => {
      node.revision++
      const type = node.type
      if (type.render)
        type.render(node, args) // type-defined rendering
      else
        RxDom.basic.render(node, args) // default rendering
    })
  }
}

function invokeFinalize(node: RxNode, initiator: RxNode): void {
  const type = node.type
  if (type.finalize)
    type.finalize(node, initiator)
  else
    RxDom.basic.finalize(node, initiator) // default finalize
}

async function runDisposeLoop(): Promise<void> {
  await Transaction.requestNextFrame()
  const queue = gDisposeQueue
  let i = 0
  while (i < queue.length) {
    if (Transaction.isFrameOver(500, 5))
      await Transaction.requestNextFrame()
    Rx.dispose(queue[i])
    i++
  }
  gDisposeQueue = [] // reset loop
}

function wrap<T>(func: (...args: any[]) => T): (...args: any[]) => T {
  const parent = gParent
  const wrappedRunUnder = (...args: any[]): T => {
    return runUnder(parent, func, ...args)
  }
  return wrappedRunUnder
}

function runUnder<T>(node: RxNodeImpl, func: (...args: any[]) => T, ...args: any[]): T {
  const outer = gParent
  try {
    gParent = node
    return func(...args)
  }
  finally {
    gParent = outer
  }
}

function argsAreEqual(a1: any, a2: any): boolean {
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

// RxNodeSequenceImpl

export class RxNodeSequenceImpl implements RxNodeSequence {
  namespace: Map<string, RxNodeImpl> = new Map<string, RxNodeImpl>()
  first?: RxNodeImpl = undefined
  count: number = 0
  retainedFirst?: RxNodeImpl = undefined
  retainedLast?: RxNodeImpl = undefined
  retainedCount: number = 0
  likelyNextRetained?: RxNodeImpl = undefined
  revision: number = ~0

  get isOpened(): boolean { return this.revision > ~0 }

  open(revision: number): void {
    if (this.isOpened)
      throw new Error('sequence reconciler is opened already')
    this.revision = revision
  }

  close(): void {
    if (!this.isOpened)
      throw new Error('sequence reconciler is closed already')
    this.revision = ~0
  }

  switch(): void {
    const namespace = this.namespace
    const count = this.count
    const retained = this.retainedCount
    if (retained > 0) {
      if (retained > count) { // it should be faster to delete non-retained nodes from namespace
        let x = this.first
        while (x !== undefined)
          namespace.delete(x.id), x = x.next
      }
      else { // it should be faster to recreate namespace with retained nodes only
        const newNamespace = this.namespace = new Map<string, RxNodeImpl>()
        let x = this.retainedFirst
        while (x !== undefined)
          newNamespace.set(x.id, x), x = x.next
      }
    }
    else // just create new empty namespace
      this.namespace = new Map<string, RxNodeImpl>()
    this.first = this.retainedFirst
    this.count = retained
    this.retainedFirst = this.retainedLast = undefined
    this.retainedCount = 0
    this.likelyNextRetained = this.first
  }

  tryToRetainExisting(id: string): RxNodeImpl | undefined {
    let result = this.likelyNextRetained
    if (result?.id !== id)
      result = this.namespace.get(id)
    if (result && result.revision >= ~0) {
      if (result.reconciliationRevision === this.revision)
        throw new Error(`duplicate item id: ${id}`)
      result.reconciliationRevision = this.revision
      this.likelyNextRetained = result.next
      // Exclude from main sequence
      if (result.prev !== undefined)
        result.prev.next = result.next
      if (result.next !== undefined)
        result.next.prev = result.prev
      if (result === this.first)
        this.first = result.next
      this.count--
      // Include into retained sequence
      const last = this.retainedLast
      if (last) {
        result.prev = last
        result.next = undefined
        this.retainedLast = last.next = result
      }
      else {
        result.prev = result.next = undefined
        this.retainedFirst = this.retainedLast = result
      }
      this.retainedCount++
    }
    return result
  }

  retainNewlyCreated(node: RxNodeImpl): void {
    node.reconciliationRevision = this.revision
    this.namespace.set(node.id, node)
    const last = this.retainedLast
    if (last) {
      node.prev = last
      this.retainedLast = last.next = node
    }
    else
      this.retainedFirst = this.retainedLast = node
    this.retainedCount++
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

const NOP = (): void => { /* nop */ }
const SYSTEM = RxDom.createRootNode<any, any>('SYSTEM', false, 'SYSTEM') as RxNodeImpl
let gParent: RxNodeImpl = SYSTEM
let gDisposeQueue: Array<RxNode> = []
