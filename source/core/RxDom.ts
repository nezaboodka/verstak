// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { reaction, nonreactive, Transaction, Reactronic, options } from 'reactronic'
import { Render, SuperRender, RefreshParent, Rtti, AbstractInstance, NodeInfo } from './Data'

// Instance
const EMPTY: ReadonlyArray<NodeInfo<any, any>> = Object.freeze([])

export class Instance<E = unknown, O = void> implements AbstractInstance<E, O> {
  readonly level: number
  revision: number = 0
  native?: E = undefined
  model?: unknown = undefined
  buffer: Array<NodeInfo<any, any>> | undefined = undefined
  children: ReadonlyArray<NodeInfo<any, any>> = EMPTY
  nephews: ReadonlyArray<NodeInfo<any, any>> = EMPTY
  resizing?: ResizeObserver = undefined

  constructor(level: number) {
    this.level = level
  }

  @reaction @options({ sensitiveArgs: true }) // @noSideEffects(true)
  render(ni: NodeInfo<E, O>): void {
    RxDom.renderInline(this, ni)
    Reactronic.configureCurrentMethod({ order: this.level })
  }
}

// RxDom

export class RxDom {
  static readonly ROOT = RxDom.createStaticDeclaration<unknown>('ROOT', undefined)
  static gParent: NodeInfo<any, any> = RxDom.ROOT
  static gRenderingParent: NodeInfo<any, any> = RxDom.ROOT
  static gReactivityParent: NodeInfo<any, any> = RxDom.ROOT
  static gTrace: string | undefined = undefined
  static gTraceMask: string = 'r'

  static Root(render: Render): void {
    const self = RxDom.ROOT.instance!
    if (self.buffer)
      throw new Error('ReactronicFrontRendering should not be called recursively')
    self.buffer = []
    render(self.native)
    Transaction.run(RxDom.renderChildrenNow)
  }

  static emit<E = unknown, O = void>(
    id: string, args: unknown, render: Render<E, O>,
    superRender: SuperRender<O, E> | undefined,
    rtti: Rtti<E, O>, parent?: NodeInfo,
    renderingParent?: NodeInfo, reactivityParent?: NodeInfo): NodeInfo<E, O> {

    const p = parent ?? RxDom.gParent
    const p2 = renderingParent ?? RxDom.gRenderingParent
    const p3 = reactivityParent ?? RxDom.gReactivityParent
    const self = p.instance
    if (!self)
      throw new Error('element must be initialized before children')
    const ni = new NodeInfo<E, O>(id, args, render, superRender, rtti, p, p2, p3)
    if (self.buffer === undefined)
      throw new Error('children are rendered already') // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    self.buffer.push(ni)
    return ni
  }

  static render(ni: NodeInfo<any, any>): void {
    const self = ni.instance
    if (!self)
      throw new Error('element must be initialized before rendering')
    const outer = RxDom.gParent
    const renderingOuter = RxDom.gRenderingParent
    const reactivityOuter = RxDom.gReactivityParent
    try {
      RxDom.gParent = RxDom.gRenderingParent = RxDom.gReactivityParent = ni
      self.buffer = []
      if (RxDom.gTrace && RxDom.gTraceMask.indexOf('r') >= 0 && new RegExp(RxDom.gTrace, 'gi').test(getTraceHint(ni)))
        console.log(`t${Transaction.current.id}v${Transaction.current.timestamp}${'  '.repeat(Math.abs(ni.instance!.level))}${getTraceHint(ni)}.render/${ni.instance?.revision}${ni.args !== RefreshParent ? `  <<  ${Reactronic.why(true)}` : ''}`)
      if (ni.superRender)
        ni.superRender(options => {
          ni.render(self.native, options)
          return options
        }, self.native)
      else
        ni.render(self.native, undefined)
      RxDom.renderChildrenNow() // ignored if rendered already
    }
    finally {
      RxDom.gReactivityParent = reactivityOuter
      RxDom.gRenderingParent = renderingOuter
      RxDom.gParent = outer
    }
  }

  static renderChildrenNow(): void {
    const ni = RxDom.gParent
    if (ni.rtti.unordered)
      RxDom.renderUnorderedChildren(ni)
    else
      RxDom.renderNaturallyOrderedChildren(ni)
  }

  static initialize(ni: NodeInfo): void {
    RxDom.doInitialize(ni)
  }

  static finalize(ni: NodeInfo<any, any>, cause: NodeInfo): void {
    const self = ni.instance
    if (self) {
      for (const x of self.children)
        RxDom.doFinalize(x, cause)
      self.native = undefined
    }
    ni.instance = undefined
  }

  static useAnotherRenderingParent<E>(ni: NodeInfo<E>, render: Render<E>): void {
    const native = ni.instance?.native
    if (native) {
      const outer = RxDom.gRenderingParent
      try {
        RxDom.gRenderingParent = ni
        render(native)
      }
      finally {
        RxDom.gRenderingParent = outer
      }
    }
  }

  static useAnotherReactivityParent<E>(ni: NodeInfo<E>, render: Render<E>): void {
    const native = ni.instance?.native
    if (native) {
      const outer = RxDom.gReactivityParent
      try {
        RxDom.gReactivityParent = ni
        render(native)
      }
      finally {
        RxDom.gReactivityParent = outer
      }
    }
  }

  static createStaticDeclaration<E>(id: string, native: E): NodeInfo<E> {
    const self = new Instance<E>(0)
    const ni = new NodeInfo<E>(
      id,                           // id
      null,                         // args
      () => { /* nop */ },          // render
      undefined,                    // superRender
      { name: id, unordered: false }, // rtti
      { } as NodeInfo,              // parent (lifecycle)
      { } as NodeInfo,              // rendering parent
      { } as NodeInfo,              // reactivity parent
      self)                         // instance
    // Initialize
    const a: any = ni
    a['parent'] = ni
    a['renderingParent'] = ni
    a['reactivityParent'] = ni
    self.native = native
    return ni
  }

  // selfInstance, selfRevision, trace, forAll

  static selfInstance<T>(): { model?: T } {
    const self = RxDom.gParent.instance
    if (!self)
      throw new Error('instance function can be called only inside rendering function')
    return self as { model?: T }
  }

  static selfInstanceInternal<E>(): Instance<E> {
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

  static renderInline<E, O>(instance: Instance<E, O>, ni: NodeInfo<E, O>): void {
    if (instance === undefined || instance === null)
      debugger // temporary, TODO: debug
    instance.revision++
    ni.rtti.render ? ni.rtti.render(ni) : RxDom.render(ni)
  }

  // Internal

  private static doRender(ni: NodeInfo): void {
    const self = ni.instance!
    if (ni.args === RefreshParent) // inline elements are always rendered
      RxDom.renderInline(self, ni)
    else // rendering of reactive elements is cached to avoid redundant calls
      nonreactive(self.render, ni)
  }

  private static doInitialize(ni: NodeInfo): Instance {
    // TODO: Make the code below exception-safe
    const rtti = ni.rtti
    const self = ni.instance = new Instance(ni.parent.instance!.level + 1)
    if (rtti.initialize)
      rtti.initialize(ni)
    else
      self.native = ni.renderingParent.instance?.native // default initialize
    if (ni.args !== RefreshParent)
      Reactronic.setTraceHint(self, Reactronic.isTraceEnabled ? getTraceHint(ni) : ni.id)
    if (RxDom.gTrace && RxDom.gTraceMask.indexOf('m') >= 0 && new RegExp(RxDom.gTrace, 'gi').test(getTraceHint(ni)))
      console.log(`t${Transaction.current.id}v${Transaction.current.timestamp}${'  '.repeat(Math.abs(ni.instance!.level))}${getTraceHint(ni)}.initialized`)
    return self
  }

  private static doFinalize(ni: NodeInfo, cause: NodeInfo): void {
    if (RxDom.gTrace && RxDom.gTraceMask.indexOf('u') >= 0 && new RegExp(RxDom.gTrace, 'gi').test(getTraceHint(ni)))
      console.log(`t${Transaction.current.id}v${Transaction.current.timestamp}${'  '.repeat(Math.abs(ni.instance!.level))}${getTraceHint(ni)}.finalizing`)
    if (ni.args !== RefreshParent) // TODO: Consider creating one transaction for all finalizations at once
      Transaction.runAs({ standalone: true }, () => Reactronic.dispose(ni.instance))
    const rtti = ni.rtti
    if (rtti.finalize)
      rtti.finalize(ni, cause)
    else
      RxDom.finalize(ni, cause) // default finalize
  }

  private static renderNaturallyOrderedChildren(ni: NodeInfo): void {
    const self = ni.instance
    if (self !== undefined && self.buffer !== undefined) {
      const theirList = self.children
      const buffer = self.buffer
      const ourList = buffer.slice().sort(compareNodeInfos)
      // Switch to the new list
      self.buffer = undefined
      self.children = ourList
      // Reconciliation loop - link to existing or finalize
      let sibling: NodeInfo | undefined = undefined
      let i = 0, j = 0
      while (i < theirList.length) {
        const theirs = theirList[i]
        const ours = ourList[j]
        const diff = ours !== undefined ? compareNodeInfos(ours, theirs) : 1
        if (diff <= 0) {
          if (sibling !== undefined && ours.id === sibling.id)
            throw new Error(`duplicate id '${sibling.id}' inside '${ni.id}'`)
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
      // Reconciliation loop - initialize, render, re-render
      sibling = undefined
      for (const x of buffer) {
        if (x.previous) {
          x.rtti.place?.(x, sibling)
          if (x.args === RefreshParent || !argsAreEqual(x.args, x.previous.args))
            RxDom.doRender(x) // re-rendering
          x.previous = undefined // unlink to make it available for garbage collection
        }
        else {
          RxDom.doInitialize(x)
          x.rtti.place?.(x, sibling)
          RxDom.doRender(x) // initial rendering
        }
        sibling = x
      }
    }
  }

  private static renderUnorderedChildren(ni: NodeInfo): void {
    const self = ni.instance
    if (self !== undefined && self.buffer !== undefined) {
      const theirList = self.children
      const ourList = self.buffer.sort(compareNodeInfos)
      // Switch to the new list
      self.buffer = undefined
      self.children = ourList
      // Reconciliation loop - link, render, initialize, finalize
      let sibling: NodeInfo | undefined = undefined
      let i = 0, j = 0
      while (i < theirList.length || j < ourList.length) {
        const theirs = theirList[i]
        const ours = ourList[j]
        const diff = compareNullable(ours, theirs, compareNodeInfos)
        if (diff <= 0) {
          if (sibling !== undefined && ours.id === sibling.id)
            throw new Error(`duplicate id '${sibling.id}' inside '${ni.id}'`)
          if (diff === 0) {
            ours.instance = theirs.instance // link to the existing instance
            if (ours.args === RefreshParent || !argsAreEqual(ours.args, theirs.args))
              RxDom.doRender(ours) // re-rendering
            i++, j++
          }
          else { // diff < 0
            RxDom.doInitialize(ours)
            ours.rtti.place?.(ours)
            RxDom.doRender(ours) // initial rendering
            j++
          }
          sibling = ours
        }
        else // diff > 0
          RxDom.doFinalize(theirs, theirs), i++
      }
    }
  }

  private static forEachChildRecursively(ni: NodeInfo, action: (e: any) => void): void {
    const self = ni.instance
    if (self) {
      const native = self.native
      native && action(native)
      self.children.forEach(x => RxDom.forEachChildRecursively(x, action))
    }
  }
}

function compareNodeInfos(ni1: NodeInfo, ni2: NodeInfo): number {
  let result = ni1.renderingParent.id.localeCompare(ni2.renderingParent.id)
  if (result === 0)
    result = ni1.id.localeCompare(ni2.id)
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

function getTraceHint(ni: NodeInfo): string {
  return `${ni.rtti.name}:${ni.id}`
}
