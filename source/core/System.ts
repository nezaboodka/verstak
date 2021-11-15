// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { reaction, nonreactive, Transaction, Reactronic, options } from 'reactronic'

// Render, SuperRender, RefreshParent

export type Render<E = unknown, O = void> = (element: E, options: O) => void
export type SuperRender<O = unknown, E = void> = (render: (options: O) => O, element: E) => void
export const RefreshParent = Symbol('RefreshParent') as unknown as void

// Declaration

export class Declaration<E = unknown, O = void> {
  constructor(
    readonly id: string,
    readonly args: unknown,
    readonly render: Render<E, O>,
    readonly superRender: SuperRender<O, E> | undefined,
    readonly rtti: Rtti<E, O>,
    readonly parent: Declaration,
    readonly renderingParent: Declaration,
    readonly reactivityParent: Declaration,
    public instance?: Instance<E, O>) {
  }

  old?: Declaration<E, O>
  get native(): E | undefined { return this.instance?.native }

  static createRoot<E>(id: string, native: E): Declaration<E> {
    const self = new Instance<E>(0)
    const m = new Declaration<E>(
      id,                           // id
      null,                         // args
      () => { /* nop */ },          // render
      undefined,                    // superRender
      { name: id, sorting: false }, // rtti
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
}

// Rtti - Run-Time Type Info

export interface Rtti<E = unknown, O = void> {
  readonly name: string
  readonly sorting: boolean
  render?(d: Declaration<E, O>): void
  arrange?(d: Declaration<E, O>, sibling?: Declaration): void
  initialize?(d: Declaration<E, O>, sibling?: Declaration): void
  finalize?(d: Declaration<E, O>, cause: Declaration): void
}

// declare, render, renderChildrenNow, initialize, finalize
/* eslint-disable @typescript-eslint/no-non-null-assertion */

export function declare<E = unknown, O = void>(
  id: string, args: unknown, render: Render<E, O>,
  superRender: SuperRender<O, E> | undefined,
  rtti: Rtti<E, O>, parent?: Declaration,
  renderingParent?: Declaration, reactivityParent?: Declaration): Declaration<E, O> {

  const p = parent ?? gParent
  const p2 = renderingParent ?? gRenderingParent
  const p3 = reactivityParent ?? gReactivityParent
  const self = p.instance
  if (!self)
    throw new Error('element must be initialized before children')
  const d = new Declaration<E, O>(id, args, render, superRender, rtti, p, p2, p3)
  if (self.buffer === undefined)
    throw new Error('children are rendered already') // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  self.buffer.push(d)
  return d
}

export function render(d: Declaration<any, any>): void {
  const self = d.instance
  if (!self)
    throw new Error('element must be initialized before rendering')
  const outer = gParent
  const renderingOuter = gRenderingParent
  const reactivityOuter = gReactivityParent
  try {
    gParent = gRenderingParent = gReactivityParent = d
    self.buffer = []
    if (gTrace && gTraceMask.indexOf('r') >= 0 && new RegExp(gTrace, 'gi').test(getTraceHint(d)))
      console.log(`t${Transaction.current.id}v${Transaction.current.timestamp}${'  '.repeat(Math.abs(d.instance!.level))}${getTraceHint(d)}.render/${d.instance?.revision}${d.args !== RefreshParent ? `  <<  ${Reactronic.why(true)}` : ''}`)
    if (d.superRender)
      d.superRender(superRender, self.native)
    else
      d.render(self.native, undefined)
    renderChildrenNow() // ignored if rendered already
  }
  finally {
    gReactivityParent = reactivityOuter
    gRenderingParent = renderingOuter
    gParent = outer
  }
}

function superRender(options: unknown): unknown {
  const d = gParent
  const native = d.instance?.native
  if (!native)
    throw new Error('element must be initialized before rendering')
  d.render(native, options)
  return options
}

export function renderChildrenNow(): void {
  const d = gParent
  if (d.rtti.sorting)
    renderSortedChildren(d) // reconciliation algorithm
  else
    renderOrdinaryChildren(d) // reconciliation algorithm
}

export function initialize(d: Declaration): void {
  callInitialize(d)
}

export function finalize(d: Declaration<any, any>, cause: Declaration): void {
  const self = d.instance
  if (self) {
    for (const x of self.children)
      callFinalize(x, cause)
    self.native = undefined
  }
  d.instance = undefined
}

export function useAnotherRenderingParent<E>(d: Declaration<E>, render: Render<E>): void {
  const native = d.instance?.native
  if (native) {
    const outer = gRenderingParent
    try {
      gRenderingParent = d
      render(native)
    }
    finally {
      gRenderingParent = outer
    }
  }
}

export function useAnotherReactivityParent<E>(d: Declaration<E>, render: Render<E>): void {
  const native = d.instance?.native
  if (native) {
    const outer = gReactivityParent
    try {
      gReactivityParent = d
      render(native)
    }
    finally {
      gReactivityParent = outer
    }
  }
}

// selfInstance, selfRevision, trace, forAll

export function selfInstance<T>(): { model?: T } {
  const self = gParent.instance
  if (!self)
    throw new Error('instance function can be called only inside rendering function')
  return self as { model?: T }
}

export function selfInstanceInternal<E>(): Instance<E> {
  const self = gParent.instance
  if (!self)
    throw new Error('selfInstanceInternal function can be called only inside rendering function')
  return self
}

export function selfRevision(): number {
  return gParent.instance?.revision ?? 0
}

export function trace(enabled: boolean, mask: string, regexp: string): void {
  gTrace = enabled ? regexp : undefined
  gTraceMask = mask
}

export function forAll<E>(action: (e: E) => void): void {
  forEachChildRecursively(ROOT, action)
}

// Internal

const EMPTY: Array<Declaration> = []
Object.freeze(EMPTY)

export class Instance<E = unknown, O = void> {
  readonly level: number
  revision: number = 0
  native?: E = undefined
  model?: unknown = undefined
  buffer: Array<Declaration<any, any>> | undefined = undefined
  children: ReadonlyArray<Declaration<any, any>> = EMPTY
  resizing?: ResizeObserver = undefined

  constructor(level: number) {
    this.level = level
  }

  @reaction @options({ sensitiveArgs: true }) // @noSideEffects(true)
  render(d: Declaration<E, O>): void {
    renderInline(this, d)
    Reactronic.configureCurrentMethod({ order: this.level })
  }
}

function renderInline<E, O>(instance: Instance<E, O>, d: Declaration<E, O>): void {
  if (instance === undefined || instance === null)
    debugger // temporary, TODO: debug
  instance.revision++
  d.rtti.render ? d.rtti.render(d) : render(d)
}

function callRender(d: Declaration): void {
  const self = d.instance!
  if (d.args === RefreshParent) // inline elements are always rendered
    renderInline(self, d)
  else // rendering of reactive elements is cached to avoid redundant calls
    nonreactive(self.render, d)
}

function callInitialize(d: Declaration, sibling?: Declaration): Instance {
  // TODO: Make the code below exception-safe
  const rtti = d.rtti
  const self = d.instance = new Instance(d.parent.instance!.level + 1)
  if (rtti.initialize)
    rtti.initialize(d, sibling)
  else
    self.native = d.renderingParent.instance?.native // default initialize
  if (d.args !== RefreshParent)
    Reactronic.setTraceHint(self, Reactronic.isTraceEnabled ? getTraceHint(d) : d.id)
  if (gTrace && gTraceMask.indexOf('m') >= 0 && new RegExp(gTrace, 'gi').test(getTraceHint(d)))
    console.log(`t${Transaction.current.id}v${Transaction.current.timestamp}${'  '.repeat(Math.abs(d.instance!.level))}${getTraceHint(d)}.initialized`)
  return self
}

function callFinalize(d: Declaration, cause: Declaration): void {
  if (gTrace && gTraceMask.indexOf('u') >= 0 && new RegExp(gTrace, 'gi').test(getTraceHint(d)))
    console.log(`t${Transaction.current.id}v${Transaction.current.timestamp}${'  '.repeat(Math.abs(d.instance!.level))}${getTraceHint(d)}.finalizing`)
  if (d.args !== RefreshParent) // TODO: Consider creating one transaction for all finalizations at once
    Transaction.runAs({ standalone: true }, () => Reactronic.dispose(d.instance))
  const rtti = d.rtti
  if (rtti.finalize)
    rtti.finalize(d, cause)
  else
    finalize(d, cause) // default finalize
}

function renderOrdinaryChildren(d: Declaration): void {
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
        callFinalize(old, old), i++
    }
    // Reconciliation loop - initialize, render, re-render
    sibling = undefined
    for (const x of buffer) {
      if (x.old) {
        if (x.rtti.arrange)
          x.rtti.arrange(x, sibling)
        if (x.args === RefreshParent || !argsAreEqual(x.args, x.old.args))
          callRender(x) // re-rendering
        x.old = undefined // unlink to make it available for garbage collection
      }
      else
        callInitialize(x, sibling), callRender(x) // initial rendering
      sibling = x
    }
  }
}

function renderSortedChildren(d: Declaration): void {
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
            callRender(x) // re-rendering
          i++, j++
        }
        else // diff < 0
          callInitialize(x, sibling), callRender(x), j++ // initial rendering
        sibling = x
      }
      else // diff > 0
        callFinalize(old, old), i++
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

function forEachChildRecursively(d: Declaration, action: (e: any) => void): void {
  const self = d.instance
  if (self) {
    const native = self.native
    native && action(native)
    self.children.forEach(x => forEachChildRecursively(x, action))
  }
}

export const ROOT = Declaration.createRoot<unknown>('ROOT', undefined)
let gParent: Declaration<any, any> = ROOT
let gRenderingParent: Declaration<any, any> = ROOT
let gReactivityParent: Declaration<any, any> = ROOT
let gTrace: string | undefined = undefined
let gTraceMask: string = 'r'
