// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { reaction, nonreactive, Transaction, Rx, options, Reentrance } from 'reactronic'
import { Render, SuperRender, RxNodeType, RxNodeInstance, RxNode } from './RxDom.Types'

const EMPTY: Array<RxNode> = Object.freeze([]) as any
const NOP = (): void => { /* nop */ }

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

  render(node: RxNode<E, O>, args?: unknown): void {
    const self = node.instance
    if (!self)
      throw new Error('element must be initialized before rendering')
    if (self.buffer)
      throw new Error('rendering re-entrance is not supported yet')
    self.buffer = []
    let result: any
    if (node.superRender)
      result = node.superRender(options => {
        const res = node.render(self.native!, options)
        if (res instanceof Promise)
          return res.then() // causes wrapping of then/catch to execute within current owner and host
        else
          return options
      }, self.native!)
    else
      result = node.render(self.native!, args as O)
    if (result instanceof Promise)
      result = result.then( // causes wrapping of then/catch to execute within current owner and host
        value => { RxDom.renderChildrenThenDo(NOP); return value }, // ignored if rendered already
        error => { console.log(error); RxDom.renderChildrenThenDo(NOP) }) // do not render children in case of owner error
    else
      RxDom.renderChildrenThenDo(NOP) // ignored if rendered already
  }

  finalize(node: RxNode<E, O>, cause: RxNode): void {
    const self = node.instance
    if (self) {
      self.native = undefined
      if (!node.inline && node.instance) // TODO: Consider creating one transaction for all finalizations at once
        Transaction.runAs({ standalone: true }, () => Rx.dispose(node.instance))
      for (const x of self.children)
        tryToFinalize(x, cause)
      for (const x of self.aliens)
        tryToFinalize(x, cause)
    }
  }
}

// RxNodeInstanceImpl

export class RxNodeInstanceImpl<E = unknown, O = void> implements RxNodeInstance<E, O> {
  private static gUuid: number = 0
  readonly uuid: number
  readonly level: number
  revision: number = 0
  native?: E = undefined
  model?: unknown = undefined
  children: ReadonlyArray<RxNode> = EMPTY
  buffer: Array<RxNode> | undefined = undefined
  aliens: ReadonlyArray<RxNode> = EMPTY
  resizing?: ResizeObserver = undefined

  constructor(level: number) {
    this.uuid = ++RxNodeInstanceImpl.gUuid
    this.level = level
  }

  @reaction @options({
    reentrance: Reentrance.CancelPrevious,
    sensitiveArgs: true,
    noSideEffects: true })
  render(node: RxNode<E, O>): void {
    invokeRender(this, node)
    Rx.configureCurrentOperation({ order: this.level })
  }
}

// RxDom

export class RxDom {
  public static readonly basic = new BasicNodeType<any, any>('basic', false)

  static Root<T>(render: () => T): T {
    const self = SYSTEM.instance!
    if (self.buffer)
      throw new Error('rendering re-entrance is not supported yet')
    self.buffer = []
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
    priority?: number, type?: RxNodeType<E, O>, inline?: boolean,
    owner?: RxNode, host?: RxNode): RxNode<E, O> {
    const o = owner ?? gContext
    const self = o.instance
    if (!self)
      throw new Error('element must be initialized before children')
    if (priority === undefined)
      priority = 0
    if (type === undefined)
      type = RxDom.basic
    if (!host)
      host = gHost
    const node = new RxNode<E, O>(id, args, render, superRender, priority, type, inline ?? false, o, host)
    if (self.buffer === undefined)
      throw new Error('children are rendered already') // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const rev = host.instance?.revision ?? -1
    if (rev >= 0) // emit only if host is alive
      self.buffer.push(node)
    return node
  }

  static renderChildrenThenDo(action: () => void): void {
    const node = gContext
    if (node.type.sequential)
      RxDom.mergeAndRenderSequentialChildren(node, action)
    else
      RxDom.mergeAndRenderChildren(node, action)
  }

  static usingAnotherHost<E>(host: RxNode<E>, run: (e: E) => void): void {
    const native = host.instance?.native
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

  static createRootNode<E>(id: string, sequential: boolean, native: E): RxNode<E> {
    const self = new RxNodeInstanceImpl<E>(0)
    const node = new RxNode<E>(
      id,                       // id
      null,                     // args
      () => { /* nop */ },      // render
      undefined,                // superRender
      0,                        // priority
      { name: id, sequential }, // type
      false,                    // inline
      {} as RxNode,             // owner (lifecycle manager)
      {} as RxNode,             // host (rendering parent)
      self)                     // instance
    // Initialize
    const a: any = node
    a['owner'] = node
    a['host'] = node
    self.native = native
    return node
  }

  static currentNodeInstance<T>(): { model?: T } {
    const self = gContext.instance
    if (!self)
      throw new Error('currentNodeInstance function can be called only inside rendering function')
    return self as { model?: T }
  }

  static currentNodeInstanceInternal<E>(): RxNodeInstanceImpl<E> {
    const self = gContext.instance
    if (!self)
      throw new Error('currentNodeInstanceInternal function can be called only inside rendering function')
    return self
  }

  static currentNodeRevision(): number {
    return gContext.instance?.revision ?? 0
  }

  static forAll<E>(action: (e: E) => void): void {
    RxDom.forEachChildRecursively(SYSTEM, action)
  }

  // Internal

  private static mergeAndRenderSequentialChildren(node: RxNode, finish: () => void): void {
    const self = node.instance
    if (self !== undefined && self.buffer !== undefined) {
      let promised: Promise<void> | undefined = undefined
      try {
        const existing = self.children
        const sequenced = self.buffer
        const sorted = sequenced.slice().sort(compareNodes)
        self.buffer = undefined
        // Merge loop (always synchronous) - link to existing or finalize
        let host = self
        let aliens: Array<RxNode> = EMPTY
        let sibling: RxNode | undefined = undefined
        let i = 0, j = 0
        while (i < existing.length) {
          const old = existing[i]
          const x = sorted[j]
          const diff = x !== undefined ? compareNodes(x, old) : 1
          if (diff <= 0) {
            const h = x.host.instance
            if (h !== self) {
              if (h !== host) {
                RxDom.mergeAliens(host, self, aliens)
                aliens = []
                host = h!
              }
              aliens.push(x)
            }
            if (sibling !== undefined && x.id === sibling.id)
              throw new Error(`duplicate id '${sibling.id}' inside '${node.id}'`)
            if (diff === 0) {
              x.instance = old.instance
              x.old = old
              i++, j++ // re-rendering is called below
            }
            else // diff < 0
              j++ // initial rendering is called below
            sibling = x
          }
          else { // diff > 0
            if (!Transaction.isCanceled)
              tryToFinalize(old, old)
            i++
          }
        }
        if (host !== self)
          RxDom.mergeAliens(host, self, aliens)
        // Merge loop - initialize, render, re-render
        sibling = undefined
        i = 0, j = -1
        while (i < sequenced.length && !Transaction.isCanceled) {
          const x = sequenced[i]
          const old = x.old
          x.old = undefined // unlink to make it available for garbage collection
          x.sibling = sibling // link with sibling
          const instance = x.instance
          if (old && instance) {
            if (sibling?.instance !== old.sibling?.instance) // if sequence is changed
              x.type.mount?.(x)
            if (x.inline || !argsAreEqual(x.args, old.args))
              tryToRender(x) // re-rendering
          }
          else {
            tryToInitialize(x)
            tryToRender(x) // initial rendering
          }
          if (x.native)
            sibling = x
          if (x.priority > 0 && j < 0)
            j = i
          i++
        }
        if (!Transaction.isCanceled) {
          self.children = sorted // switch to the new list
          if (j >= 0) // Incremental rendering (if any)
            promised = RxDom.renderIncrementally(node, sequenced, j).then(finish, finish)
        }
      }
      finally {
        if (promised)
          finish()
      }
    }
  }


  private static mergeAndRenderChildren(node: RxNode, finish: () => void): void {
    const self = node.instance
    if (self !== undefined && self.buffer !== undefined) {
      let promised: Promise<void> | undefined = undefined
      try {
        const existing = self.children
        const buffer = self.buffer.sort(compareNodes)
        const postponed = new Array<RxNode>()
        self.buffer = undefined
        // Merge loop (always synchronous): link, render/initialize (priority 0), finalize
        let host = self
        let aliens: Array<RxNode> = EMPTY
        let sibling: RxNode | undefined = undefined
        let i = 0, j = 0
        while (i < existing.length || j < buffer.length) {
          const old = existing[i]
          const x = buffer[j]
          const diff = compareNullable(x, old, compareNodes)
          if (diff <= 0) {
            const h = x.host.instance
            if (h !== self) {
              if (h !== host) {
                RxDom.mergeAliens(host, self, aliens)
                aliens = []
                host = h!
              }
              aliens.push(x)
            }
            if (sibling !== undefined && x.id === sibling.id)
              throw new Error(`duplicate id '${sibling.id}' inside '${node.id}'`)
            if (diff === 0) {
              if (old.instance) {
                x.instance = old.instance // link to the existing instance
                if (x.inline || !argsAreEqual(x.args, old.args)) {
                  if (!Transaction.isCanceled) {
                    if (x.priority === 0)
                      tryToRender(x) // re-rendering
                    else
                      postponed.push(x)
                  }
                }
              }
              else {
                if (!Transaction.isCanceled) {
                  if (x.priority === 0) {
                    tryToInitialize(x)
                    tryToRender(x) // initial rendering
                  }
                  else
                    postponed.push(x)
                }
              }
              i++, j++
            }
            else { // diff < 0
              if (!Transaction.isCanceled) {
                if (x.priority === 0) {
                  tryToInitialize(x)
                  tryToRender(x) // initial rendering
                }
                else
                  postponed.push(x)
              }
              j++
            }
            sibling = x
          }
          else { // diff > 0
            if (!Transaction.isCanceled)
              tryToFinalize(old, old)
            i++
          }
        }
        if (host !== self)
          RxDom.mergeAliens(host, self, aliens)
        if (!Transaction.isCanceled) {
          self.children = buffer // switch to the new list
          if (postponed.length > 0) // Incremental rendering (if any)
            promised = RxDom.renderIncrementally(node, postponed,  0).then(finish, finish)
        }
      }
      finally {
        if (!promised)
          finish()
      }
    }
  }

  private static async renderIncrementally(parent: RxNode, children: Array<RxNode>, startIndex: number,
    checkEveryN: number = 30, timeLimit: number = 12): Promise<void> {
    if (Transaction.isFrameOver(checkEveryN, timeLimit))
      await Transaction.requestNextFrame()
    if (!Transaction.isCanceled) {
      children.sort(compareNodesByPriority)
      let i = startIndex
      while (i < children.length) {
        const x = children[i]
        if (!x.instance)
          tryToInitialize(x)
        tryToRender(x)
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

  private static mergeAliens(host: RxNodeInstance, owner: RxNodeInstance, aliens: Array<RxNode>): void {
    if (host !== owner) {
      const existing = host.aliens
      const merged: Array<RxNode> = []
      let i = 0, j = 0 // TODO: Consider using binary search to find initial index
      while (i < existing.length || j < aliens.length) {
        const old = existing[i]
        const x = aliens[j]
        const diff = compareNullable(x, old, compareNodes)
        if (diff <= 0) {
          merged.push(x)
          if (diff === 0)
            i++, j++
          else // diff < 0
            j++
        }
        else { // diff > 0
          if (old.owner.instance !== owner)
            merged.push(old) // leave children of other owners untouched
          i++
        }
      }
      host.aliens = merged
    }
  }

  private static forEachChildRecursively(node: RxNode, action: (e: any) => void): void {
    const self = node.instance
    if (self) {
      const native = self.native
      native && action(native)
      self.children.forEach(x => RxDom.forEachChildRecursively(x, action))
    }
  }
}

// Internal

function invokeRender<E, O>(instance: RxNodeInstanceImpl<E, O>, node: RxNode<E, O>): void {
  const host = node.native !== undefined ? node : node.host
  runUnder(node, host, () => {
    instance.revision++
    const type = node.type
    if (type.render)
      type.render(node)
    else
      RxDom.basic.render(node)
  })
}

function tryToRender(node: RxNode): void {
  const self = node.instance!
  if (node.inline) // inline elements are always rendered
    invokeRender(self, node)
  else // rendering of reactive elements is cached to avoid redundant calls
    nonreactive(self.render, node)
}

function tryToInitialize(node: RxNode): RxNodeInstanceImpl {
  // TODO: Make the code below exception-safe
  const type = node.type
  const self = node.instance = new RxNodeInstanceImpl(node.owner.instance!.level + 1)
  type.initialize?.(node)
  type.mount?.(node)
  if (!node.inline)
    Rx.setTraceHint(self, Rx.isTraceEnabled ? getTraceHint(node) : node.id)
  return self
}

function tryToFinalize(node: RxNode, cause: RxNode): void {
  const self = node.instance
  if (self && self.revision >= 0) {
    self.revision = -self.revision
    const type = node.type
    if (type.finalize)
      type.finalize(node, cause)
    else
      RxDom.basic.finalize(node, cause) // default finalize
  }
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

function compareNodes(node1: RxNode, node2: RxNode): number {
  let result: number = 0
  const hp1 = node1.host.instance
  const hp2 = node2.host.instance
  if (hp1 !== hp2) {
    result = hp1!.uuid - hp2!.uuid
    if (result === 0)
      result = node1.id.localeCompare(node2.id)
  }
  else
    result = node1.id.localeCompare(node2.id)
  return result
}

function compareNodesByPriority(node1: RxNode, node2: RxNode): number {
  return node1.priority - node2.priority
}

function compareNullable<T>(a: T | undefined, b: T | undefined, comparer: (a: T, b: T) => number): number {
  let diff: number
  if (b !== undefined)
    diff = a !== undefined ? comparer(a, b) : 1
  else
    diff = a !== undefined ? -1 : 0
  return diff
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

function getTraceHint(node: RxNode): string {
  return `${node.type.name}:${node.id}`
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

const SYSTEM = RxDom.createRootNode<unknown>('SYSTEM', false, 'SYSTEM')
let gContext: RxNode = SYSTEM
let gHost: RxNode = SYSTEM
