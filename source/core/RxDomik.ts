// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { reaction, Transaction, Rx, options, Reentrance, nonreactive } from 'reactronic'
import { RxNodeType, Render, RxNode, SuperRender, Sequence } from './RxDomik.Types'

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

  finalize(node: RxNode<E, O>, cause: RxNode): void {
    node.native = undefined
    if (!node.inline)
      Rx.dispose(node)
    let x = node.children.first
    while (x !== undefined) {
      tryToFinalize(x, cause)
      x = x.next
    }
  }
}

// RxNodeImpl

export class RxNodeImpl<E = unknown, O = void> implements RxNode<E, O> {
  // User-defined properties
  readonly id: string
  readonly type: RxNodeType<E, O>
  readonly inline: boolean
  args: unknown
  render: Render<E, O>
  superRender: SuperRender<O, E> | undefined
  priority: number
  model?: unknown
  // System-managed properties
  readonly level: number
  readonly parent: RxNode
  native?: E
  resizeObserver?: ResizeObserver
  revision: number
  validation: number
  sibling?: RxNode
  mounted: boolean
  // Linking (internal)
  namespace: Map<string, RxNode>
  children: Sequence<RxNode>
  next?: RxNode
  prev?: RxNode

  constructor(level: number, id: string, type: RxNodeType<E, O>, inline: boolean,
    args: unknown, render: Render<E, O>, superRender: SuperRender<O, E> | undefined,
    priority: number, parent: RxNode) {
    // User-defined properties
    this.id = id
    this.type = type
    this.inline = inline
    this.args = args
    this.render = render
    this.superRender = superRender
    this.priority = priority
    this.model = undefined
    // System-managed properties
    this.level = level
    this.parent = parent
    this.native = undefined
    this.resizeObserver = undefined
    this.revision = ~0 // not initialized
    this.validation = 0
    this.sibling = undefined
    this.mounted = false
    // Linking (internal)
    this.namespace = new Map<string, RxNode>()
    this.children = new SequenceImpl<RxNode>()
    this.next = undefined
    this.prev = undefined
  }

  @reaction @options({
    reentrance: Reentrance.CancelPrevious,
    sensitiveArgs: true,
    noSideEffects: true })
  rerender(args: unknown): void {
    invokeRender(this, args)
    Rx.configureCurrentOperation({ order: this.level })
  }
}

// RxDomik

export class RxDom {
  public static readonly basic = new BasicNodeType<any, any>('basic', false)

  static Root<T>(render: () => T): T {
    let result: any = render()
    if (result instanceof Promise)
      result = result.then( // causes wrapping of then/catch to execute within current parent
        value => { Transaction.run(RxDom.renderChildrenThenDo, NOP); return value }, // ignored if rendered already
        error => { console.log(error); Transaction.run(RxDom.renderChildrenThenDo, NOP) }) // try to render children regardless the parent
    else
      Transaction.run(RxDom.renderChildrenThenDo, NOP) // ignored if rendered already
    return result
  }

  static Node<E = unknown, O = void>(id: string, args: any,
    render: Render<E, O>, superRender?: SuperRender<O, E>,
    priority?: number, type?: RxNodeType<E, O>, inline?: boolean): RxNode<E, O> {
    // Prepare
    const parent = gParent
    let child: RxNode = NUL
    if (priority === undefined)
      priority = 0
    // Linking
    const existing = parent.namespace.get(id)
    if (!existing || existing.revision < ~0) { // new node
      if (type === undefined)
        type = RxDom.basic
      child = new RxNodeImpl<E, O>(parent.level + 1, id, type, inline ?? false,
        args, render, superRender, priority, parent)
      parent.namespace.set(id, child)
    }
    else if (existing.validation !== parent.revision) { // existing node
      child = existing
      if (!argsAreEqual(child.args, args))
        child.args = args
      child.render = render
      child.superRender = superRender
      child.priority = priority
    }
    else
      throw new Error(`fatal: duplicate node id '${id}'`)
    child.validation = parent.revision
    parent.children.append(child)
    return child
  }

  static renderChildrenThenDo(action: () => void): void {
    const parent = gParent
    let promised: Promise<void> | undefined = undefined
    try {
      const postponed = new Array<RxNode>()
      const children = parent.children
      // Finalization loop
      let x = children.oldFirst
      while (x !== undefined && !Transaction.isCanceled) {
        tryToFinalize(x, x)
        x = x.next
      }
      if (children.volume !== parent.namespace.size) {
        if (children.first === undefined)
          parent.namespace = new Map<string, RxNode>() // parent.namespace.clear() ?
        else
          setTimeout(RxDom.collectNodeNamespaceGarbage, 0, parent)
      }
      // Rendering loop
      const seq = parent.type.sequential
      let sibling: RxNode | undefined = undefined
      x = children.first
      while (x !== undefined && !Transaction.isCanceled) {
        if (seq && x.sibling !== sibling) {
          x.sibling = sibling
          x.mounted = false
        }
        if (x.priority === 0)
          tryToRefresh(x)
        else
          postponed.push(x)
        if (x.native)
          sibling = x
        x = x.next
      }
      children.reset() // reset for the next rendering round
      // Asynchronous incremental rendering (if any)
      if (!Transaction.isCanceled && postponed.length > 0)
        promised = RxDom.renderIncrementally(parent, postponed,  0).then(action, action)
    }
    finally {
      if (!promised)
        action()
    }
  }

  static createRootNode<E, O>(id: string, sequential: boolean, native: E): RxNode<E, O> {
    const node = new RxNodeImpl<E, O>(
      0,                        // level
      id,                       // id
      { name: id, sequential }, // type
      false,                    // inline
      null,                     // args
      () => { /* nop */ },      // render
      undefined,                // superRender
      0,                        // priority
      {} as RxNode)             // parent
    // Initialize
    const a: any = node
    a['parent'] = node
    node.native = native
    node.revision = 0 // initialized
    return node
  }

  // currentNodeInstance, currentNodeRevision, trace, forAll

  static currentNodeInstance<T>(): { model?: T } {
    return gParent as { model?: T }
  }

  static currentNodeInstanceInternal<E>(): RxNodeImpl<E> {
    return gParent
  }

  static currentNodeRevision(): number {
    return gParent.revision
  }

  static forAll<E>(action: (e: E) => void): void {
    RxDom.forEachChildRecursively(SYSTEM, action)
  }

  // Internal

  private static async renderIncrementally(parent: RxNode, children: Array<RxNode>,
    startIndex: number, checkEveryN: number = 30, timeLimit: number = 12): Promise<void> {
    if (Transaction.isFrameOver(checkEveryN, timeLimit))
      await Transaction.requestNextFrame()
    if (!Transaction.isCanceled) {
      children.sort(compareNodesByPriority)
      let i = startIndex
      while (i < children.length) {
        tryToRefresh(children[i])
        if (Transaction.isCanceled)
          break
        if (Transaction.isFrameOver(checkEveryN, timeLimit))
          await Transaction.requestNextFrame()
        if (Transaction.isCanceled)
          break
        i++
      }
    }
  }

  private static forEachChildRecursively(node: RxNode, action: (e: any) => void): void {
    const native = node.native
    native && action(native)
    let x = node.children.first
    while (x !== undefined) {
      RxDom.forEachChildRecursively(x, action)
      x = x.next
    }
  }

  private static collectNodeNamespaceGarbage(node: RxNode): void {
    node.namespace.forEach(RxDom.deleteIfNodeIsFinalized)
  }

  private static deleteIfNodeIsFinalized(node: RxNode, key: string, namespace: Map<string, RxNode>): void {
    if (node.revision < ~0)
      namespace.delete(key)
  }
}

// Internal

function tryToRefresh(node: RxNode): void {
  const type = node.type
  if (node.revision === ~0) {
    node.revision = 0
    type.initialize?.(node)
  }
  if (!node.mounted) {
    node.mounted = true
    type.mount?.(node)
  }
  if (node.inline)
    invokeRender(node, node.args)
  else
    nonreactive(node.rerender, node.args) // reactive auto-rendering
}

function tryToFinalize(node: RxNode, cause: RxNode): void {
  if (node.revision >= ~0) {
    node.revision = ~node.revision
    if (node === cause)
      Transaction.runAs({ standalone: true }, invokeFinalize, node, cause)
    else
      invokeFinalize(node, cause)
  }
}

function invokeRender(parent: RxNode, args: unknown): void {
  runUnder(parent, () => {
    parent.revision++
    const type = parent.type
    if (type.render)
      type.render(parent, args) // type-defined rendering
    else
      RxDom.basic.render(parent, args) // default rendering
  })
}

function invokeFinalize(node: RxNode, cause: RxNode): void {
  const type = node.type
  if (type.finalize)
    type.finalize(node, cause)
  else
    RxDom.basic.finalize(node, cause) // default finalize
}

function wrap(func: (...args: any[]) => any): (...args: any[]) => any {
  const parent = gParent
  const wrappedRendering = (...args: any[]): any => {
    return runUnder(parent, func, ...args)
  }
  return wrappedRendering
}

function runUnder(parent: RxNode, func: (...args: any[]) => any, ...args: any[]): any {
  const outer = gParent
  try {
    gParent = parent
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

function compareNodesByPriority(node1: RxNode, node2: RxNode): number {
  return node1.priority - node2.priority
}

// NodeList

class SequenceImpl<T extends { next?: T, prev?: T }> implements Sequence<T> {
  first?: T = undefined
  last?: T = undefined
  volume: number = 0
  oldFirst?: T = undefined
  oldVolume: number = 0

  append(item:T): void {
    // Exclude from stale sequence
    if (item.prev !== undefined)
      item.prev.next = item.next
    if (item.next !== undefined)
      item.next.prev = item.prev
    if (item === this.oldFirst)
      this.oldFirst = item.next
    this.oldVolume--
    // Include into fresh sequence
    const last = this.last
    if (last) {
      item.prev = last
      item.next = undefined
      this.last = last.next = item
    }
    else {
      item.prev = item.next = undefined
      this.first = this.last = item
    }
    this.volume++
  }

  reset(): void {
    this.oldFirst = this.first
    this.oldVolume = this.volume
    this.first = this.last = undefined
    this.volume = 0
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
const NUL = RxDom.createRootNode<any, any>('NUL', false, 'NUL')
const SYSTEM = RxDom.createRootNode<unknown, void>('SYSTEM', false, 'SYSTEM')
let gParent: RxNode = SYSTEM
