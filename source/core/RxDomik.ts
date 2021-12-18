// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { reaction, Transaction, Rx, options, Reentrance, nonreactive } from 'reactronic'
import { RxNodeType, Render, RxNode, SuperRender } from './RxDomik.Types'

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

  mount(node: RxNode<E, O>): void {
    const owner = node.owner
    const lastHost = node.lastHost
    const host = node.host
    if (lastHost !== owner) {
      const a = lastHost.guests.get(owner)
      if (a) {
        a.delete(node)
        if (a.size === 0)
          lastHost.guests.delete(owner)
      }
    }
    if (host !== owner) {
      let a = host.guests.get(owner)
      if (!a) {
        a = new Set<RxNode>()
        host.guests.set(owner, a)
      }
      a.add(node)
    }
  }

  render(node: RxNode<E, O>, args: unknown): void {
    let result: any
    if (node.superRender)
      result = node.superRender(options => {
        const res = node.render(node.native as E, options)
        if (res instanceof Promise)
          return res.then() // causes wrapping of then/catch to execute within current owner and host
        else
          return options
      }, node.native!)
    else
      result = node.render(node.native as E, args as O)
    if (result instanceof Promise)
      result = result.then( // causes wrapping of then/catch to execute within current owner and host
        value => { RxDom.renderChildrenThenDo(NOP); return value }, // ignored if rendered already
        error => { console.log(error); RxDom.renderChildrenThenDo(NOP) }) // do not render children in case of owner error
    else
      RxDom.renderChildrenThenDo(NOP) // ignored if rendered already
  }

  finalize(node: RxNode<E, O>, cause: RxNode): void {
    node.native = undefined
    node.owner.children.delete(node.id)
    if (!node.inline)
      Rx.dispose(node)
    for (const x of node.children.values())
      tryToFinalize(x, cause)
    for (const group of node.guests.values())
      for (const x of group)
        tryToFinalize(x, cause)
  }
}

// RxNodeImpl

export class RxNodeImpl<E = unknown, O = void> implements RxNode<E, O> {
  private static gUuid: number = 0
  readonly uuid: number
  readonly id: string
  readonly type: RxNodeType<E, O>
  readonly inline: boolean
  readonly owner: RxNode
  readonly level: number
  args: unknown
  render: Render<E, O>
  superRender: SuperRender<O, E> | undefined
  priority: number
  validation: number
  revision: number
  native?: E
  host: RxNode
  lastHost: RxNode
  model?: unknown
  children: Map<string, RxNode>
  first?: RxNode
  next?: RxNode
  emitted?: RxNode
  volume: number
  guests: Map<RxNode, Set<RxNode>>
  resizing?: ResizeObserver

  constructor(level: number, id: string, type: RxNodeType<E, O>,
    inline: boolean, args: unknown, render: Render<E, O>,
    superRender: SuperRender<O, E> | undefined, priority: number,
    owner: RxNode, host: RxNode) {
    this.uuid = ++RxNodeImpl.gUuid
    this.level = level
    this.id = id
    this.type = type
    this.inline = inline
    this.args = args
    this.render = render
    this.superRender = superRender
    this.priority = priority
    this.owner = owner
    this.validation = owner.revision
    this.revision = ~0 // not initialized
    this.native = undefined
    this.host = host
    this.lastHost = owner
    this.model = undefined
    this.children = new Map<string, RxNode>()
    this.first = undefined
    this.next = undefined
    this.volume = 0
    this.guests = new Map<RxNode, Set<RxNode>>()
    this.resizing = undefined
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
      result = result.then( // causes wrapping of then/catch to execute within current owner and host
        value => { Transaction.run(RxDom.renderChildrenThenDo, NOP); return value }, // ignored if rendered already
        error => { console.log(error); Transaction.run(RxDom.renderChildrenThenDo, NOP) }) // try to render children regardless the owner
    else
      Transaction.run(RxDom.renderChildrenThenDo, NOP) // ignored if rendered already
    return result
  }

  static Node<E = unknown, O = void>(id: string, args: any,
    render: Render<E, O>, superRender?: SuperRender<O, E>,
    priority?: number, type?: RxNodeType<E, O>, inline?: boolean, host?: RxNode): RxNode<E, O> {
    const owner = gContext
    if (host === undefined)
      host = gHost
    let node: RxNode = NUL
    if (host.revision >= 0) { // emit only if host is still alive
      if (priority === undefined)
        priority = 0
      // Linking
      const existing = owner.children.get(id)
      if (!existing) { // new node
        if (type === undefined)
          type = RxDom.basic
        node = new RxNodeImpl<E, O>(owner.level + 1, id, type, inline ?? false,
          args, render, superRender, priority, owner, host)
        owner.children.set(id, node)
      }
      else { // existing node
        node = existing
        if (!argsAreEqual(node.args, args))
          node.args = args
        node.render = render
        node.superRender = superRender
        node.priority = priority
        node.host = host
        node.next = undefined // to be re-linked
        node.sibling = undefined // to be re-linked
      }
      node.validation = owner.revision
      // Sequencing
      if (owner.first === undefined)
        owner.first = node
      if (owner.emitted)
        owner.emitted.next = node
      owner.emitted = node
      owner.volume++
    }
    return node
  }

  static renderChildrenThenDo(action: () => void): void {
    const node = gContext
    if (node.type.sequential)
      RxDom.doRenderSequentialChildren(node, action)
    else
      RxDom.doRenderNonSequentialChildren(node, action)
  }

  static usingAnotherHost<E>(host: RxNode<E>, run: (e: E) => void): void {
    const native = host.native
    if (native !== undefined) {
      const outer = gHost
      try {
        gHost = host
        run(native)
      }
      finally {
        gHost = outer
      }
    }
  }

  static createRootNode<E, O>(id: string, sequential: boolean, native: E, options: O): RxNode<E, O> {
    // const self = new NodeInstance<E>(0)
    const node = new RxNodeImpl<E, O>(
      0,                        // level
      id,                       // id
      { name: id, sequential }, // type
      false,                    // inline
      null,                     // args
      () => { /* nop */ },      // render
      undefined,                // superRender
      0,                        // priority
      {} as RxNode,             // owner (lifecycle manager)
      {} as RxNode)             // host (rendering parent)
    // Initialize
    const a: any = node
    a['owner'] = node
    a['host'] = node
    node.native = native
    node.revision = 0 // initialized
    return node
  }

  // currentNodeInstance, currentNodeRevision, trace, forAll

  static currentNodeInstance<T>(): { model?: T } {
    return gContext as { model?: T }
  }

  static currentNodeInstanceInternal<E>(): RxNodeImpl<E> {
    return gContext
  }

  static currentNodeRevision(): number {
    return gContext.revision
  }

  static forAll<E>(action: (e: E) => void): void {
    RxDom.forEachChildRecursively(SYSTEM, action)
  }

  // Internal

  private static doRenderSequentialChildren(owner: RxNode, finish: () => void): void {
    let promised: Promise<void> | undefined = undefined
    try {
      const postponed = new Array<RxNode>()
      // Finalization loop
      for (const x of owner.children.values()) {
        if (Transaction.isCanceled)
          break
        if (x.validation !== owner.revision)
          tryToFinalize(x, x)
      }
      // Sequential rendering loop
      let x = owner.first
      let sibling: RxNode | undefined = undefined
      while (x !== undefined && !Transaction.isCanceled) {
        x.sibling = sibling
        if (x.priority === 0)
          tryToRefresh(x)
        else
          postponed.push(x)
        if (x.native)
          sibling = x
        x = x.next
      }
      // Asynchronous incremental rendering (if any)
      if (!Transaction.isCanceled && postponed.length > 0)
        promised = RxDom.renderIncrementally(owner, postponed,  0).then(finish, finish)
    }
    finally {
      if (!promised)
        finish()
    }
  }

  private static doRenderNonSequentialChildren(owner: RxNode, finish: () => void): void {
    let promised: Promise<void> | undefined = undefined
    try {
      // Non-sequential rendering and finalization loop
      // const started = performance.now()
      const postponed = new Array<RxNode>()
      for (const x of owner.children.values()) {
        if (Transaction.isCanceled)
          break
        if (x.validation === owner.revision) {
          if (x.priority === 0)
            tryToRefresh(x)
          else
            postponed.push(x)
        }
        else
          tryToFinalize(x, x)
      }
      // const ms = performance.now() - started
      // if (owner.id.indexOf('EmitElementOfLoadedRecordCards') >= 0)
      //   console.log(`(!) ${owner.children.size} in ${ms} ms ${Rx.why()}`)
      // Asynchronous incremental rendering (if any)
      if (!Transaction.isCanceled && postponed.length > 0) // Incremental rendering (if any)
        promised = RxDom.renderIncrementally(owner, postponed,  0).then(finish, finish)
    }
    finally {
      if (!promised)
        finish()
    }
  }

  private static async renderIncrementally(owner: RxNode, children: Array<RxNode>,
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
    node.children.forEach(x => RxDom.forEachChildRecursively(x, action))
  }
}

// Internal

function tryToRefresh(node: RxNode): void {
  const t = node.type
  if (node.revision === ~0) {
    node.revision = 0
    t.initialize?.(node)
    t.mount?.(node)
    node.lastHost = node.host
  }
  else if (node.host !== node.lastHost) {
    t.mount?.(node)
    node.lastHost = node.host
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

function invokeRender(node: RxNode, args: unknown): void {
  const host = node.native !== undefined ? node : node.host
  runUnder(node, host, () => {
    // Prepare node for rendering
    node.revision++
    node.first = undefined
    node.emitted = undefined
    node.volume = 0
    // Render
    const type = node.type
    if (type.render)
      type.render(node, args) // type-defined rendering
    else
      RxDom.basic.render(node, args) // default rendering
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
  const owner = gContext
  const host = gHost
  const wrappedRendering = (...args: any[]): any => {
    return runUnder(owner, host, func, ...args)
  }
  return wrappedRendering
}

function runUnder(owner: RxNode, host: RxNode, func: (...args: any[]) => any, ...args: any[]): any {
  const outerOwner = gContext
  const outerHost = gHost
  try {
    gContext = owner
    gHost = host
    return func(...args)
  }
  finally {
    gHost = outerHost
    gContext = outerOwner
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
const NUL = RxDom.createRootNode<any, any>('NUL', false, 'NUL', undefined)
const SYSTEM = RxDom.createRootNode<unknown, void>('SYSTEM', false, 'SYSTEM', undefined)
let gContext: RxNode = SYSTEM
let gHost: RxNode = SYSTEM
