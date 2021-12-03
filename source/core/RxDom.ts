// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { reaction, nonreactive, Transaction, Reactronic, options } from 'reactronic'
import { Render, SuperRender, RefreshParent, Rtti, AbstractNodeInstance, NodeInfo } from './Data'

const EMPTY: Array<NodeInfo<any, any>> = Object.freeze([]) as any

// NodeInstance

export class NodeInstance<E = unknown, O = void> implements AbstractNodeInstance<E, O> {
  private static gUuid: number = 0
  readonly uuid: number
  readonly level: number
  revision: number = 0
  native?: E = undefined
  model?: unknown = undefined
  children: ReadonlyArray<NodeInfo<any, any>> = EMPTY
  buffer: Array<NodeInfo<any, any>> | undefined = undefined
  aliens: ReadonlyArray<NodeInfo<any, any>> = EMPTY
  resizing?: ResizeObserver = undefined

  constructor(level: number) {
    this.uuid = ++NodeInstance.gUuid
    this.level = level
  }

  @reaction @options({ sensitiveArgs: true }) // @noSideEffects(true)
  render(node: NodeInfo<E, O>): void {
    RxDom.renderInline(this, node)
    Reactronic.configureCurrentMethod({ order: this.level })
  }
}

// RxDom

export class RxDom {
  static readonly ROOT = RxDom.createStaticDeclaration<unknown>('ROOT', 'ROOT')
  static gParent: NodeInfo<any, any> = RxDom.ROOT
  static gHostingParent: NodeInfo<any, any> = RxDom.ROOT
  static gTrace: string | undefined = undefined
  static gTraceMask: string = 'r'

  static Root<T>(render: () => T): T {
    const self = RxDom.ROOT.instance!
    if (self.buffer)
      throw new Error('ReactronicFrontRendering should not be called recursively')
    self.buffer = []
    let result: any = render()
    if (result instanceof Promise)
      result = result.then( // causes wrapping of then/catch to execute within current parent and hosting parent
        value => { Transaction.run(RxDom.renderChildrenNow); return value }, // ignored if rendered already
        error => { console.log(error); Transaction.run(RxDom.renderChildrenNow) }) // try to render children regardless the parent
    else
      Transaction.run(RxDom.renderChildrenNow) // ignored if rendered already
    return result
  }

  static emit<E = unknown, O = void>(
    id: string, args: unknown, render: Render<E, O>,
    superRender: SuperRender<O, E> | undefined, rtti: Rtti<E, O>,
    parent?: NodeInfo, hostingParent?: NodeInfo): NodeInfo<E, O> {

    const p = parent ?? RxDom.gParent
    const hp = hostingParent ?? RxDom.gHostingParent
    const self = p.instance
    if (!self)
      throw new Error('element must be initialized before children')
    const node = new NodeInfo<E, O>(id, args, render, superRender, rtti, p, hp)
    if (self.buffer === undefined)
      throw new Error('children are rendered already') // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (hp?.instance?.native) // emit only if hosting parent is alive
      self.buffer.push(node)
    return node
  }

  static wrap(func: (...args: any[]) => any): (...args: any[]) => any {
    const parent = RxDom.gParent
    const hostingParent = RxDom.gHostingParent
    const wrappedRendering = (...args: any[]): any => {
      const result = RxDom.within(parent, hostingParent, func, ...args)
      return result
    }
    return wrappedRendering
  }

  static within(parent: NodeInfo, hostingParent: NodeInfo, func: (...args: any[]) => void, ...args: any[]): void {
    const outer = RxDom.gParent
    const hostingOuter = RxDom.gHostingParent
    try {
      RxDom.gParent = parent
      RxDom.gHostingParent = hostingParent
      func(...args)
    }
    finally {
      RxDom.gHostingParent = hostingOuter
      RxDom.gParent = outer
    }
  }

  static render(node: NodeInfo<any, any>): void {
    const self = node.instance
    if (!self)
      throw new Error('element must be initialized before rendering')
    const outer = RxDom.gParent
    const hostingOuter = RxDom.gHostingParent
    try {
      RxDom.gParent = RxDom.gHostingParent = node
      self.buffer = []
      if (RxDom.gTrace && RxDom.gTraceMask.indexOf('r') >= 0 && new RegExp(RxDom.gTrace, 'gi').test(getTraceHint(node)))
        console.log(`t${Transaction.current.id}v${Transaction.current.timestamp}${'  '.repeat(Math.abs(node.instance!.level))}${getTraceHint(node)}.render/${node.instance?.revision}${node.args !== RefreshParent ? `  <<  ${Reactronic.why(true)}` : ''}`)
      let result: any
      if (node.superRender)
        result = node.superRender(options => {
          const res = node.render(self.native, options)
          if (res instanceof Promise)
            return res.then() // causes wrapping of then/catch to execute within current parent and hosting parent
          else
            return options
        }, self.native)
      else
        result = node.render(self.native, undefined)
      if (result instanceof Promise)
        result = result.then( // causes wrapping of then/catch to execute within current parent and hosting parent
          value => { RxDom.renderChildrenNow(); return value }, // ignored if rendered already
          error => { console.log(error); RxDom.renderChildrenNow() }) // do not render children in case of parent error
      else
        RxDom.renderChildrenNow() // ignored if rendered already
    }
    finally {
      RxDom.gHostingParent = hostingOuter
      RxDom.gParent = outer
    }
  }

  static renderChildrenNow(): void {
    const node = RxDom.gParent
    if (node.rtti.unordered)
      RxDom.mergeAndRenderUnorderedChildren(node)
    else
      RxDom.mergeAndRenderNaturallyOrderedChildren(node)
  }

  static initialize(node: NodeInfo): void {
    RxDom.doInitialize(node)
  }

  static finalize(node: NodeInfo<any, any>, cause: NodeInfo): void {
    const self = node.instance!
    if (self.native) {
      self.native = undefined
      for (const x of self.children)
        RxDom.doFinalize(x, cause)
      for (const x of self.aliens)
        RxDom.doFinalize(x, cause)
    }
  }

  static useAnotherHostingParent<E>(node: NodeInfo<E>, run: (e: E) => void): void {
    const native = node.instance?.native
    if (native !== undefined) {
      const outer = RxDom.gHostingParent
      try {
        RxDom.gHostingParent = node
        run(native)
      }
      finally {
        RxDom.gHostingParent = outer
      }
    }
  }

  static createStaticDeclaration<E>(id: string, native: E): NodeInfo<E> {
    const self = new NodeInstance<E>(0)
    const node = new NodeInfo<E>(
      id,                           // id
      null,                         // args
      () => { /* nop */ },          // render
      undefined,                    // superRender
      { name: id, unordered: false }, // rtti
      { } as NodeInfo,              // parent (lifecycle)
      { } as NodeInfo,              // rendering parent
      self)                         // instance
    // Initialize
    const a: any = node
    a['parent'] = node
    a['hostingParent'] = node
    self.native = native
    return node
  }

  // selfInstance, selfRevision, trace, forAll

  static selfInstance<T>(): { model?: T } {
    const self = RxDom.gParent.instance
    if (!self)
      throw new Error('instance function can be called only inside rendering function')
    return self as { model?: T }
  }

  static selfInstanceInternal<E>(): NodeInstance<E> {
    const self = RxDom.gParent.instance
    if (!self)
      throw new Error('selfInstanceInternal function can be called only inside rendering function')
    return self
  }

  static selfRevision(): number {
    return RxDom.gParent.instance?.revision ?? 0
  }

  static setTraceMode(enabled: boolean, mask: string, regexp: string): void {
    RxDom.gTrace = enabled ? regexp : undefined
    RxDom.gTraceMask = mask
  }

  static forAll<E>(action: (e: E) => void): void {
    RxDom.forEachChildRecursively(RxDom.ROOT, action)
  }

  static renderInline<E, O>(instance: NodeInstance<E, O>, node: NodeInfo<E, O>): void {
    if (instance === undefined || instance === null)
      debugger // temporary, TODO: debug
    instance.revision++
    node.rtti.render ? node.rtti.render(node) : RxDom.render(node)
  }

  // Internal

  private static doRender(node: NodeInfo): void {
    const self = node.instance!
    if (node.args === RefreshParent) // inline elements are always rendered
      RxDom.renderInline(self, node)
    else // rendering of reactive elements is cached to avoid redundant calls
      nonreactive(self.render, node)
  }

  private static doInitialize(node: NodeInfo): NodeInstance {
    // TODO: Make the code below exception-safe
    const rtti = node.rtti
    const self = node.instance = new NodeInstance(node.parent.instance!.level + 1)
    if (rtti.initialize)
      rtti.initialize(node)
    else
      self.native = node.hostingParent.instance?.native // default initialize
    if (node.args !== RefreshParent)
      Reactronic.setTraceHint(self, Reactronic.isTraceEnabled ? getTraceHint(node) : node.id)
    if (RxDom.gTrace && RxDom.gTraceMask.indexOf('m') >= 0 && new RegExp(RxDom.gTrace, 'gi').test(getTraceHint(node)))
      console.log(`t${Transaction.current.id}v${Transaction.current.timestamp}${'  '.repeat(Math.abs(node.instance!.level))}${getTraceHint(node)}.initialized`)
    return self
  }

  private static doFinalize(node: NodeInfo, cause: NodeInfo): void {
    if (RxDom.gTrace && RxDom.gTraceMask.indexOf('u') >= 0 && new RegExp(RxDom.gTrace, 'gi').test(getTraceHint(node)))
      console.log(`t${Transaction.current.id}v${Transaction.current.timestamp}${'  '.repeat(Math.abs(node.instance!.level))}${getTraceHint(node)}.finalizing`)
    if (node.args !== RefreshParent) // TODO: Consider creating one transaction for all finalizations at once
      Transaction.runAs({ standalone: true }, () => Reactronic.dispose(node.instance))
    const rtti = node.rtti
    if (rtti.finalize)
      rtti.finalize(node, cause)
    else
      RxDom.finalize(node, cause) // default finalize
  }

  private static mergeAndRenderNaturallyOrderedChildren(node: NodeInfo): void {
    const self = node.instance
    if (self !== undefined && self.buffer !== undefined) {
      const children = self.children
      const naturalBuffer = self.buffer
      const sortedBuffer = naturalBuffer.slice().sort(compareNodes)
      // Switch to the new list
      self.buffer = undefined
      self.children = sortedBuffer
      // Reconciliation loop - link to existing or finalize
      let host = self
      let aliens: Array<NodeInfo<any, any>> = EMPTY
      let sibling: NodeInfo | undefined = undefined
      let i = 0, j = 0
      while (i < children.length) {
        const theirs = children[i]
        const ours = sortedBuffer[j]
        const diff = ours !== undefined ? compareNodes(ours, theirs) : 1
        if (diff <= 0) {
          const h = ours.hostingParent.instance
          if (h !== self) {
            if (h !== host) {
              RxDom.mergeAliens(host, self, aliens)
              aliens = []
              host = h!
            }
            aliens.push(ours)
          }
          if (sibling !== undefined && ours.id === sibling.id)
            throw new Error(`duplicate id '${sibling.id}' inside '${node.id}'`)
          if (diff === 0) {
            ours.instance = theirs.instance
            ours.previous = theirs
            i++, j++ // re-rendering is called below
          }
          else // diff < 0
            j++ // initial rendering is called below
          sibling = ours
        }
        else // diff > 0
          RxDom.doFinalize(theirs, theirs), i++
      }
      if (host !== self)
        RxDom.mergeAliens(host, self, aliens)
      // Reconciliation loop - initialize, render, re-render
      sibling = undefined
      for (const x of naturalBuffer) {
        if (x.previous) {
          x.rtti.host?.(x, sibling)
          if (x.args === RefreshParent || !argsAreEqual(x.args, x.previous.args))
            RxDom.doRender(x) // re-rendering
          x.previous = undefined // unlink to make it available for garbage collection
        }
        else {
          RxDom.doInitialize(x)
          x.rtti.host?.(x, sibling)
          RxDom.doRender(x) // initial rendering
        }
        sibling = x
      }
    }
  }

  private static mergeAndRenderUnorderedChildren(node: NodeInfo): void {
    const self = node.instance
    if (self !== undefined && self.buffer !== undefined) {
      const children = self.children
      const buffer = self.buffer.sort(compareNodes)
      // Switch to the new list
      self.buffer = undefined
      self.children = buffer
      // Reconciliation loop - link, render, initialize, finalize
      let host = self
      let aliens: Array<NodeInfo<any, any>> = EMPTY
      let sibling: NodeInfo | undefined = undefined
      let i = 0, j = 0
      while (i < children.length || j < buffer.length) {
        const theirs = children[i]
        const ours = buffer[j]
        const diff = compareNullable(ours, theirs, compareNodes)
        if (diff <= 0) {
          const h = ours.hostingParent.instance
          if (h !== self) {
            if (h !== host) {
              RxDom.mergeAliens(host, self, aliens)
              aliens = []
              host = h!
            }
            aliens.push(ours)
          }
          if (sibling !== undefined && ours.id === sibling.id)
            throw new Error(`duplicate id '${sibling.id}' inside '${node.id}'`)
          if (diff === 0) {
            ours.instance = theirs.instance // link to the existing instance
            if (ours.args === RefreshParent || !argsAreEqual(ours.args, theirs.args))
              RxDom.doRender(ours) // re-rendering
            i++, j++
          }
          else { // diff < 0
            RxDom.doInitialize(ours)
            ours.rtti.host?.(ours)
            RxDom.doRender(ours) // initial rendering
            j++
          }
          sibling = ours
        }
        else // diff > 0
          RxDom.doFinalize(theirs, theirs), i++
      }
      if (host !== self)
        RxDom.mergeAliens(host, self, aliens)
    }
  }

  private static mergeAliens(host: AbstractNodeInstance, parent: AbstractNodeInstance, aliens: Array<NodeInfo<any, any>>): void {
    if (host !== parent) {
      const existing = host.aliens
      const merged: Array<NodeInfo<any, any>> = []
      let i = 0, j = 0 // TODO: Consider using binary search to find initial index
      while (i < existing.length || j < aliens.length) {
        const theirs = existing[i]
        const ours = aliens[j]
        const diff = compareNullable(ours, theirs, compareNodes)
        if (diff <= 0) {
          merged.push(ours)
          if (diff === 0)
            i++, j++
          else // diff < 0
            j++
        }
        else { // diff > 0
          if (theirs.parent.instance !== parent)
            merged.push(theirs) // leave children of other parent untouched
          i++
        }
      }
      host.aliens = merged
    }
  }

  private static forEachChildRecursively(node: NodeInfo, action: (e: any) => void): void {
    const self = node.instance
    if (self) {
      const native = self.native
      native && action(native)
      self.children.forEach(x => RxDom.forEachChildRecursively(x, action))
    }
  }
}

function compareNodes(node1: NodeInfo, node2: NodeInfo): number {
  let result: number = 0
  const hp1 = node1.hostingParent.instance
  const hp2 = node2.hostingParent.instance
  if (hp1 !== hp2) {
    result = hp1!.uuid - hp2!.uuid
    if (result === 0)
      result = node1.id.localeCompare(node2.id)
  }
  else
    result = node1.id.localeCompare(node2.id)
  return result
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

function getTraceHint(node: NodeInfo): string {
  return `${node.rtti.name}:${node.id}`
}

const ORIGINAL_PROMISE_THEN = Promise.prototype.then

function reactronicFrontHookedThen(this: any,
  resolve?: ((value: any) => any | PromiseLike<any>) | undefined | null,
  reject?: ((reason: any) => never | PromiseLike<never>) | undefined | null): Promise<any | never>
{
  resolve = resolve ? RxDom.wrap(resolve) : resolveReturn
  reject = reject ? RxDom.wrap(reject) : rejectRethrow
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

Promise.prototype.then = reactronicFrontHookedThen
