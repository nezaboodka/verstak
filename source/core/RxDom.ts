// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { reaction, nonreactive, Transaction, Reactronic, options } from 'reactronic'
import { Render, SuperRender, RefreshParent, Rtti, AbstractNodeInstance, NodeInfo } from './Data'

const EMPTY: Array<NodeInfo<any, any>> = Object.freeze([]) as any
const RTTI: Rtti<any, any> = { name: 'RxDom.Node', unordered: false }
const RTTI_UNORDERED: Rtti<any, any> = { name: 'RxDom.NodeUnordered', unordered: true }

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

  @reaction @options({ sensitiveArgs: true, noSideEffects: true })
  render(node: NodeInfo<E, O>): void {
    RxDom.renderUsingRttiOrDirectly(this, node)
    Reactronic.configureCurrentOperation({ order: this.level })
  }

  // get ['#this'](): string {
  //   return `${this.info.rtti.name}.${this.info.id}`
  // }
}

// RxDom

export class RxDom {
  static readonly ROOT = RxDom.createRootNode<unknown>('ROOT', 'ROOT')
  static gOwner: NodeInfo<any, any> = RxDom.ROOT
  static gHost: NodeInfo<any, any> = RxDom.ROOT
  static gTrace: string | undefined = undefined
  static gTraceMask: string = 'r'

  static Root<T>(render: () => T): T {
    const self = RxDom.ROOT.instance!
    if (self.buffer)
      throw new Error('rendering re-entrance is not supported yet')
    self.buffer = []
    let result: any = render()
    if (result instanceof Promise)
      result = result.then( // causes wrapping of then/catch to execute within current owner and host
        value => { Transaction.run(RxDom.renderChildrenNow); return value }, // ignored if rendered already
        error => { console.log(error); Transaction.run(RxDom.renderChildrenNow) }) // try to render children regardless the owner
    else
      Transaction.run(RxDom.renderChildrenNow) // ignored if rendered already
    return result
  }

  static Node<E = unknown, O = void>(id: string, args: any,
    render: Render<E, O>, superRender?: SuperRender<O, E>,
    priority?: number, rtti?: Rtti<E, O>,
    owner?: NodeInfo, host?: NodeInfo): NodeInfo<E, O> {
    const o = owner ?? RxDom.gOwner
    const h = host ?? RxDom.gHost
    const self = o.instance
    if (!self)
      throw new Error('element must be initialized before children')
    if (priority === undefined)
      priority = 0
    else if (priority > 0)
      o.incremental = true
    const node = new NodeInfo<E, O>(id, args, render, superRender, priority, rtti ?? RTTI, o, h, false)
    if (self.buffer === undefined)
      throw new Error('children are rendered already') // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (h?.instance?.native) // emit only if host is alive
      self.buffer.push(node)
    return node
  }

  static NodeWithUnorderedChildren<E = unknown, O = void>(id: string,
    args: any, render: Render<E, O>, superRender?: SuperRender<O, E>,
    priority?: number, owner?: NodeInfo, host?: NodeInfo): NodeInfo<E, O> {
    return RxDom.Node(id, args, render, superRender, priority, RTTI_UNORDERED, owner, host)
  }

  static wrap(func: (...args: any[]) => any): (...args: any[]) => any {
    const owner = RxDom.gOwner
    const host = RxDom.gHost
    const wrappedRendering = (...args: any[]): any => {
      return RxDom.runUnder(owner, host, func, ...args)
    }
    return wrappedRendering
  }

  static runUnder(owner: NodeInfo, host: NodeInfo, func: (...args: any[]) => any, ...args: any[]): any {
    const outer = RxDom.gOwner
    const hostOuter = RxDom.gHost
    try {
      RxDom.gOwner = owner
      RxDom.gHost = host
      return func(...args)
    }
    finally {
      RxDom.gHost = hostOuter
      RxDom.gOwner = outer
    }
  }

  static render(node: NodeInfo<any, any>): void {
    const self = node.instance
    if (!self)
      throw new Error('element must be initialized before rendering')
    if (self.buffer)
      throw new Error('rendering re-entrance is not supported yet')
    const outer = RxDom.gOwner
    const hostOuter = RxDom.gHost
    try {
      RxDom.gOwner = RxDom.gHost = node
      node.incremental = false
      self.buffer = []
      if (RxDom.gTrace && RxDom.gTraceMask.indexOf('r') >= 0 && new RegExp(RxDom.gTrace, 'gi').test(getTraceHint(node)))
        console.log(`t${Transaction.current.id}v${Transaction.current.timestamp}${'  '.repeat(Math.abs(node.instance!.level))}${getTraceHint(node)}.render/${node.instance?.revision}${node.args !== RefreshParent ? `  <<  ${Reactronic.why(true)}` : ''}`)
      let result: any
      if (node.superRender)
        result = node.superRender(options => {
          const res = node.render(self.native, options)
          if (res instanceof Promise)
            return res.then() // causes wrapping of then/catch to execute within current owner and host
          else
            return options
        }, self.native)
      else
        result = node.render(self.native, undefined)
      if (result instanceof Promise)
        result = result.then( // causes wrapping of then/catch to execute within current owner and host
          value => { RxDom.renderChildrenNow(); return value }, // ignored if rendered already
          error => { console.log(error); RxDom.renderChildrenNow() }) // do not render children in case of owner error
      else
        RxDom.renderChildrenNow() // ignored if rendered already
    }
    finally {
      RxDom.gHost = hostOuter
      RxDom.gOwner = outer
    }
  }

  static renderChildrenNow(): void {
    const node = RxDom.gOwner
    if (node.incremental) {
      if (node.rtti.unordered)
        void RxDom.incrementalMergeAndRenderUnorderedChildren(node).then(
          success => { /* nop */ },
          error => { console.log(error) })
      else
        void RxDom.incrementalMergeAndRenderNaturallyOrderedChildren(node).then(
          success => { /* nop */ },
          error => { console.log(error) })
    }
    else {
      if (node.rtti.unordered)
        RxDom.mergeAndRenderUnorderedChildren(node)
      else
        RxDom.mergeAndRenderNaturallyOrderedChildren(node)
    }
  }

  static initialize(node: NodeInfo): void {
    RxDom.doInitialize(node)
  }

  static finalize(node: NodeInfo<any, any>, cause: NodeInfo): void {
    const self = node.instance
    if (self?.native) {
      self.native = undefined
      for (const x of self.children)
        RxDom.doFinalize(x, cause)
      for (const x of self.aliens)
        RxDom.doFinalize(x, cause)
    }
  }

  static usingAnotherHost<E>(host: NodeInfo<E>, run: (e: E) => void): void {
    const native = host.instance?.native
    if (native !== undefined) {
      const outer = RxDom.gHost
      try {
        RxDom.gHost = host
        run(native)
      }
      finally {
        RxDom.gHost = outer
      }
    }
  }

  static createRootNode<E>(id: string, native: E): NodeInfo<E> {
    const self = new NodeInstance<E>(0)
    const node = new NodeInfo<E>(
      id,                           // id
      null,                         // args
      () => { /* nop */ },          // render
      undefined,                    // superRender
      0,
      { name: id, unordered: false }, // rtti
      {} as NodeInfo,               // owner (lifecycle manager)
      {} as NodeInfo,               // host (rendering parent)
      false,
      self)                         // instance
    // Initialize
    const a: any = node
    a['owner'] = node
    a['host'] = node
    self.native = native
    return node
  }

  // currentNodeInstance, currentNodeRevision, trace, forAll

  static currentNodeInstance<T>(): { model?: T } {
    const self = RxDom.gOwner.instance
    if (!self)
      throw new Error('currentNodeInstance function can be called only inside rendering function')
    return self as { model?: T }
  }

  static currentNodeInstanceInternal<E>(): NodeInstance<E> {
    const self = RxDom.gOwner.instance
    if (!self)
      throw new Error('currentNodeInstanceInternal function can be called only inside rendering function')
    return self
  }

  static currentNodeRevision(): number {
    return RxDom.gOwner.instance?.revision ?? 0
  }

  static setTraceMode(enabled: boolean, mask: string, regexp: string): void {
    RxDom.gTrace = enabled ? regexp : undefined
    RxDom.gTraceMask = mask
  }

  static forAll<E>(action: (e: E) => void): void {
    RxDom.forEachChildRecursively(RxDom.ROOT, action)
  }

  static renderUsingRttiOrDirectly<E, O>(instance: NodeInstance<E, O>, node: NodeInfo<E, O>): void {
    // if (instance === undefined || instance === null)
    //   debugger // temporary, TODO: debug
    instance.revision++
    node.rtti.render ? node.rtti.render(node) : RxDom.render(node)
  }

  // Internal

  private static doRender(node: NodeInfo): void {
    const self = node.instance!
    if (node.args === RefreshParent) // inline elements are always rendered
      RxDom.renderUsingRttiOrDirectly(self, node)
    else // rendering of reactive elements is cached to avoid redundant calls
      nonreactive(self.render, node)
  }

  private static doInitialize(node: NodeInfo, sibling?: NodeInfo): NodeInstance {
    // TODO: Make the code below exception-safe
    const rtti = node.rtti
    const self = node.instance = new NodeInstance(node.owner.instance!.level + 1)
    if (rtti.initialize)
      rtti.initialize(node)
    else
      self.native = node.host.instance?.native // default initialize
    rtti.mount?.(node, sibling)
    if (node.args !== RefreshParent)
      Reactronic.setTraceHint(self, Reactronic.isTraceEnabled ? getTraceHint(node) : node.id)
    if (RxDom.gTrace && RxDom.gTraceMask.indexOf('m') >= 0 && new RegExp(RxDom.gTrace, 'gi').test(getTraceHint(node)))
      console.log(`t${Transaction.current.id}v${Transaction.current.timestamp}${'  '.repeat(Math.abs(node.instance!.level))}${getTraceHint(node)}.initialized`)
    return self
  }

  private static doFinalize(node: NodeInfo, cause: NodeInfo): void {
    if (RxDom.gTrace && RxDom.gTraceMask.indexOf('u') >= 0 && new RegExp(RxDom.gTrace, 'gi').test(getTraceHint(node)))
      console.log(`t${Transaction.current.id}v${Transaction.current.timestamp}${'  '.repeat(Math.abs(node.instance!.level))}${getTraceHint(node)}.finalizing`)
    if (node.args !== RefreshParent && node.instance) // TODO: Consider creating one transaction for all finalizations at once
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
          const h = ours.host.instance
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
          x.rtti.mount?.(x, sibling)
          if (x.args === RefreshParent || !argsAreEqual(x.args, x.previous.args))
            RxDom.doRender(x) // re-rendering
          x.previous = undefined // unlink to make it available for garbage collection
        }
        else {
          RxDom.doInitialize(x, sibling)
          RxDom.doRender(x) // initial rendering
        }
        if (x.rtti.mount)
          sibling = x
      }
    }
  }

  private static async incrementalMergeAndRenderNaturallyOrderedChildren(node: NodeInfo): Promise<void> {
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
          const h = ours.host.instance
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
        else { // diff > 0
          if (theirs.instance)
            RxDom.doFinalize(theirs, theirs)
          i++
        }
      }
      if (host !== self)
        RxDom.mergeAliens(host, self, aliens)
      // Reconciliation loop - initialize, render, re-render
      sibling = undefined
      for (const x of naturalBuffer) {
        if (Transaction.isFrameOver(20))
          await Transaction.requestNextFrame()
        if (x.previous) {
          if (x.instance) {
            x.rtti.mount?.(x, sibling)
            if (x.args === RefreshParent || !argsAreEqual(x.args, x.previous.args)) {
              if (!Transaction.isCanceled)
                RxDom.doRender(x) // re-rendering
            }
          }
          else {
            if (!Transaction.isCanceled) {
              RxDom.doInitialize(x, sibling)
              RxDom.doRender(x) // initial rendering
            }
          }
          x.previous = undefined // unlink to make it available for garbage collection
        }
        else {
          if (!Transaction.isCanceled) {
            RxDom.doInitialize(x, sibling)
            RxDom.doRender(x) // initial rendering
          }
        }
        if (x.rtti.mount)
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
          const h = ours.host.instance
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
            RxDom.doInitialize(ours, ours)
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

  private static async incrementalMergeAndRenderUnorderedChildren(node: NodeInfo): Promise<void> {
    const self = node.instance
    if (self !== undefined && self.buffer !== undefined) {
      const children = self.children
      const buffer = self.buffer.sort(compareNodes)
      const secondary = new Array<NodeInfo<any, any>>()
      // Switch to the new list
      self.buffer = undefined
      self.children = buffer
      // Reconciliation loop - link, render, initialize, finalize
      let host = self
      let aliens: Array<NodeInfo<any, any>> = EMPTY
      let sibling: NodeInfo | undefined = undefined
      let i = 0, j = 0
      while (i < children.length || j < buffer.length) {
        if (Transaction.isFrameOver(10, 40))
          await Transaction.requestNextFrame()
        const theirs = children[i]
        const ours = buffer[j]
        const diff = compareNullable(ours, theirs, compareNodes)
        if (diff <= 0) {
          const h = ours.host.instance
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
            if (theirs.instance) {
              ours.instance = theirs.instance // link to the existing instance
              if (ours.args === RefreshParent || !argsAreEqual(ours.args, theirs.args)) {
                if (!Transaction.isCanceled) {
                  if (ours.priority === 0)
                    RxDom.doRender(ours) // re-rendering
                  else
                    secondary.push(ours)
                }
              }
            }
            else {
              if (!Transaction.isCanceled) {
                if (ours.priority === 0) {
                  RxDom.doInitialize(ours, ours)
                  RxDom.doRender(ours) // initial rendering
                }
                else
                  secondary.push(ours)
              }
            }
            i++, j++
          }
          else { // diff < 0
            if (!Transaction.isCanceled) {
              if (ours.priority === 0) {
                RxDom.doInitialize(ours, ours)
                RxDom.doRender(ours) // initial rendering
              }
              else
                secondary.push(ours)
            }
            j++
          }
          sibling = ours
        }
        else { // diff > 0
          if (theirs.instance)
            RxDom.doFinalize(theirs, theirs)
          i++
        }
      }
      if (host !== self)
        RxDom.mergeAliens(host, self, aliens)
      // Secondary priority loop
      if (!Transaction.isCanceled) {
        if (Transaction.isFrameOver(5, 14))
          await Transaction.requestNextFrame()
        if (!Transaction.isCanceled) {
          secondary.sort(compareNodesByPriority)
          for (const ours of secondary) {
            if (!ours.instance)
              RxDom.doInitialize(ours, ours)
            RxDom.doRender(ours)
            if (Transaction.isCanceled)
              break
            if (Transaction.isFrameOver(20, 14))
              await Transaction.requestNextFrame()
            if (Transaction.isCanceled)
              break
          }
        }
      }
    }
  }

  private static mergeAliens(host: AbstractNodeInstance, owner: AbstractNodeInstance, aliens: Array<NodeInfo<any, any>>): void {
    if (host !== owner) {
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
          if (theirs.owner.instance !== owner)
            merged.push(theirs) // leave children of other owners untouched
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

function compareNodesByPriority(node1: NodeInfo, node2: NodeInfo): number {
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

function getTraceHint(node: NodeInfo): string {
  return `${node.rtti.name}:${node.id}`
}

const ORIGINAL_PROMISE_THEN = Promise.prototype.then

function reactronicFrontHookedThen(this: any,
  resolve?: ((value: any) => any | PromiseLike<any>) | undefined | null,
  reject?: ((reason: any) => never | PromiseLike<never>) | undefined | null): Promise<any | never> {
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
