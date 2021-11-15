// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { reaction, nonreactive, Transaction, Reactronic, options } from 'reactronic'
import { Render, SuperRender, RefreshParent, Rtti, AbstractInstance, Declaration } from './Data'

// Instance

export class Instance<E = unknown, O = void> implements AbstractInstance<E, O> {
  readonly level: number
  revision: number = 0
  native?: E = undefined
  model?: unknown = undefined
  buffer: Array<Declaration<any, any>> | undefined = undefined
  children: ReadonlyArray<Declaration<any, any>> = Object.freeze([])
  resizing?: ResizeObserver = undefined

  constructor(level: number) {
    this.level = level
  }

  @reaction @options({ sensitiveArgs: true }) // @noSideEffects(true)
  render(d: Declaration<E, O>): void {
    RxDom.renderInline(this, d)
    Reactronic.configureCurrentMethod({ order: this.level })
  }
}

// RxDom

export class RxDom {
  static readonly ROOT = RxDom.createRootDeclaration<unknown>('ROOT', undefined)
  static gParent: Declaration<any, any> = RxDom.ROOT
  static gRenderingParent: Declaration<any, any> = RxDom.ROOT
  static gReactivityParent: Declaration<any, any> = RxDom.ROOT
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

  static declare<E = unknown, O = void>(
    id: string, args: unknown, render: Render<E, O>,
    superRender: SuperRender<O, E> | undefined,
    rtti: Rtti<E, O>, parent?: Declaration,
    renderingParent?: Declaration, reactivityParent?: Declaration): Declaration<E, O> {

    const p = parent ?? RxDom.gParent
    const p2 = renderingParent ?? RxDom.gRenderingParent
    const p3 = reactivityParent ?? RxDom.gReactivityParent
    const self = p.instance
    if (!self)
      throw new Error('element must be initialized before children')
    const d = new Declaration<E, O>(id, args, render, superRender, rtti, p, p2, p3)
    if (self.buffer === undefined)
      throw new Error('children are rendered already') // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    self.buffer.push(d)
    return d
  }

  static render(d: Declaration<any, any>): void {
    const self = d.instance
    if (!self)
      throw new Error('element must be initialized before rendering')
    const outer = RxDom.gParent
    const renderingOuter = RxDom.gRenderingParent
    const reactivityOuter = RxDom.gReactivityParent
    try {
      RxDom.gParent = RxDom.gRenderingParent = RxDom.gReactivityParent = d
      self.buffer = []
      if (RxDom.gTrace && RxDom.gTraceMask.indexOf('r') >= 0 && new RegExp(RxDom.gTrace, 'gi').test(getTraceHint(d)))
        console.log(`t${Transaction.current.id}v${Transaction.current.timestamp}${'  '.repeat(Math.abs(d.instance!.level))}${getTraceHint(d)}.render/${d.instance?.revision}${d.args !== RefreshParent ? `  <<  ${Reactronic.why(true)}` : ''}`)
      if (d.superRender)
        d.superRender(RxDom.superRenderImpl, self.native)
      else
        d.render(self.native, undefined)
      RxDom.renderChildrenNow() // ignored if rendered already
    }
    finally {
      RxDom.gReactivityParent = reactivityOuter
      RxDom.gRenderingParent = renderingOuter
      RxDom.gParent = outer
    }
  }

  private static superRenderImpl(options: unknown): unknown {
    const d = RxDom.gParent
    const native = d.instance?.native
    if (!native)
      throw new Error('element must be initialized before rendering')
    d.render(native, options)
    return options
  }

  static renderChildrenNow(): void {
    const d = RxDom.gParent
    if (d.rtti.unordered)
      RxDom.renderUnorderedChildren(d)
    else
      RxDom.renderOrdinaryChildren(d)
  }

  static initialize(d: Declaration): void {
    RxDom.doInitialize(d)
  }

  static finalize(d: Declaration<any, any>, cause: Declaration): void {
    const self = d.instance
    if (self) {
      for (const x of self.children)
        RxDom.doFinalize(x, cause)
      self.native = undefined
    }
    d.instance = undefined
  }

  static useAnotherRenderingParent<E>(d: Declaration<E>, render: Render<E>): void {
    const native = d.instance?.native
    if (native) {
      const outer = RxDom.gRenderingParent
      try {
        RxDom.gRenderingParent = d
        render(native)
      }
      finally {
        RxDom.gRenderingParent = outer
      }
    }
  }

  static useAnotherReactivityParent<E>(d: Declaration<E>, render: Render<E>): void {
    const native = d.instance?.native
    if (native) {
      const outer = RxDom.gReactivityParent
      try {
        RxDom.gReactivityParent = d
        render(native)
      }
      finally {
        RxDom.gReactivityParent = outer
      }
    }
  }

  static createRootDeclaration<E>(id: string, native: E): Declaration<E> {
    const self = new Instance<E>(0)
    const m = new Declaration<E>(
      id,                           // id
      null,                         // args
      () => { /* nop */ },          // render
      undefined,                    // superRender
      { name: id, unordered: false }, // rtti
      { } as Declaration,              // parent (lifecycle)
      { } as Declaration,              // rendering parent
      { } as Declaration,              // reactivity parent
      self)                         // instance
    // Initialize
    const a: any = m
    a['parent'] = m
    a['renderingParent'] = m
    a['reactivityParent'] = m
    self.native = native
    return m
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

  static renderInline<E, O>(instance: Instance<E, O>, d: Declaration<E, O>): void {
    if (instance === undefined || instance === null)
      debugger // temporary, TODO: debug
    instance.revision++
    d.rtti.render ? d.rtti.render(d) : RxDom.render(d)
  }

  // Internal

  private static doRender(d: Declaration): void {
    const self = d.instance!
    if (d.args === RefreshParent) // inline elements are always rendered
      RxDom.renderInline(self, d)
    else // rendering of reactive elements is cached to avoid redundant calls
      nonreactive(self.render, d)
  }

  private static doInitialize(d: Declaration): Instance {
    // TODO: Make the code below exception-safe
    const rtti = d.rtti
    const self = d.instance = new Instance(d.parent.instance!.level + 1)
    if (rtti.initialize)
      rtti.initialize(d)
    else
      self.native = d.renderingParent.instance?.native // default initialize
    if (d.args !== RefreshParent)
      Reactronic.setTraceHint(self, Reactronic.isTraceEnabled ? getTraceHint(d) : d.id)
    if (RxDom.gTrace && RxDom.gTraceMask.indexOf('m') >= 0 && new RegExp(RxDom.gTrace, 'gi').test(getTraceHint(d)))
      console.log(`t${Transaction.current.id}v${Transaction.current.timestamp}${'  '.repeat(Math.abs(d.instance!.level))}${getTraceHint(d)}.initialized`)
    return self
  }

  private static doFinalize(d: Declaration, cause: Declaration): void {
    if (RxDom.gTrace && RxDom.gTraceMask.indexOf('u') >= 0 && new RegExp(RxDom.gTrace, 'gi').test(getTraceHint(d)))
      console.log(`t${Transaction.current.id}v${Transaction.current.timestamp}${'  '.repeat(Math.abs(d.instance!.level))}${getTraceHint(d)}.finalizing`)
    if (d.args !== RefreshParent) // TODO: Consider creating one transaction for all finalizations at once
      Transaction.runAs({ standalone: true }, () => Reactronic.dispose(d.instance))
    const rtti = d.rtti
    if (rtti.finalize)
      rtti.finalize(d, cause)
    else
      RxDom.finalize(d, cause) // default finalize
  }

  private static renderOrdinaryChildren(d: Declaration): void {
    const self = d.instance
    if (self !== undefined && self.buffer !== undefined) {
      const oldList = self.children
      const buffer = self.buffer
      const newList = buffer.slice().sort(compareDeclarations)
      // Switch to the new list
      self.buffer = undefined
      self.children = newList
      // Reconciliation loop - link to existing or finalize
      let sibling: Declaration | undefined = undefined
      let i = 0, j = 0
      while (i < oldList.length) {
        const old = oldList[i]
        const x = newList[j]
        const diff = x !== undefined ? compareDeclarations(x, old) : 1
        if (diff <= 0) {
          if (sibling !== undefined && x.id === sibling.id)
            throw new Error(`duplicate id '${sibling.id}' inside '${d.id}'`)
          if (diff === 0) {
            x.instance = old.instance
            x.old = old
            i++, j++ // re-rendering is called below
          }
          else // diff < 0
            j++ // initial rendering is called below
          sibling = x
        }
        else // diff > 0
          RxDom.doFinalize(old, old), i++
      }
      // Reconciliation loop - initialize, render, re-render
      sibling = undefined
      for (const x of buffer) {
        if (x.old) {
          x.rtti.place?.(x, sibling)
          if (x.args === RefreshParent || !argsAreEqual(x.args, x.old.args))
            RxDom.doRender(x) // re-rendering
          x.old = undefined // unlink to make it available for garbage collection
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

  private static renderUnorderedChildren(d: Declaration): void {
    const self = d.instance
    if (self !== undefined && self.buffer !== undefined) {
      const oldList = self.children
      const newList = self.buffer.sort(compareDeclarations)
      // Switch to the new list
      self.buffer = undefined
      self.children = newList
      // Reconciliation loop - link, render, initialize, finalize
      let sibling: Declaration | undefined = undefined
      let i = 0, j = 0
      while (i < oldList.length || j < newList.length) {
        const old = oldList[i]
        const x = newList[j]
        const diff = compareNullable(x, old, compareDeclarations)
        if (diff <= 0) {
          if (sibling !== undefined && x.id === sibling.id)
            throw new Error(`duplicate id '${sibling.id}' inside '${d.id}'`)
          if (diff === 0) {
            x.instance = old.instance // link to the existing instance
            if (x.args === RefreshParent || !argsAreEqual(x.args, old.args))
              RxDom.doRender(x) // re-rendering
            i++, j++
          }
          else { // diff < 0
            RxDom.doInitialize(x)
            x.rtti.place?.(x)
            RxDom.doRender(x) // initial rendering
            j++
          }
          sibling = x
        }
        else // diff > 0
          RxDom.doFinalize(old, old), i++
      }
    }
  }

  private static forEachChildRecursively(d: Declaration, action: (e: any) => void): void {
    const self = d.instance
    if (self) {
      const native = self.native
      native && action(native)
      self.children.forEach(x => RxDom.forEachChildRecursively(x, action))
    }
  }
}

function compareDeclarations(d1: Declaration, d2: Declaration): number {
  return d1.id.localeCompare(d2.id)
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

function getTraceHint(d: Declaration): string {
  return `${d.rtti.name}:${d.id}`
}
