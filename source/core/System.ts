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

  annex?: Declaration<E, O>
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
  mount?(d: Declaration<E, O>, sibling?: Declaration): void
  reorder?(d: Declaration<E, O>, sibling?: Declaration): void
  unmount?(d: Declaration<E, O>, cause: Declaration): void
}

// declare, render, renderChildrenNow, mount, unmount
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
    throw new Error('element must be mounted before children')
  const d = new Declaration<E, O>(id, args, render, superRender, rtti, p, p2, p3)
  if (self.updates === undefined)
    throw new Error('children are rendered already') // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  self.updates.push(d)
  return d
}

export function render(d: Declaration<any, any>): void {
  const self = d.instance
  if (!self)
    throw new Error('element must be mounted before rendering')
  const outer = gParent
  const renderingOuter = gRenderingParent
  const reactivityOuter = gReactivityParent
  try {
    gParent = gRenderingParent = gReactivityParent = d
    self.updates = []
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
    throw new Error('element must be mounted before rendering')
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

export function mount(d: Declaration): void {
  callMount(d)
}

export function unmount(d: Declaration<any, any>, cause: Declaration): void {
  const self = d.instance
  if (self) {
    for (const x of self.children)
      callUnmount(x, cause)
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
    throw new Error('getMountedInstance function can be called only inside rendering function')
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
  updates: Array<Declaration<any, any>> | undefined = undefined
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

function callMount(d: Declaration, sibling?: Declaration): Instance {
  // TODO: Make the code below exception-safe
  const rtti = d.rtti
  const self = d.instance = new Instance(d.parent.instance!.level + 1)
  if (rtti.mount)
    rtti.mount(d, sibling)
  else
    self.native = d.renderingParent.instance?.native // default mount
  if (d.args !== RefreshParent)
    Reactronic.setTraceHint(self, Reactronic.isTraceEnabled ? getTraceHint(d) : d.id)
  if (gTrace && gTraceMask.indexOf('m') >= 0 && new RegExp(gTrace, 'gi').test(getTraceHint(d)))
    console.log(`t${Transaction.current.id}v${Transaction.current.timestamp}${'  '.repeat(Math.abs(d.instance!.level))}${getTraceHint(d)}.mounted`)
  return self
}

function callUnmount(d: Declaration, cause: Declaration): void {
  if (gTrace && gTraceMask.indexOf('u') >= 0 && new RegExp(gTrace, 'gi').test(getTraceHint(d)))
    console.log(`t${Transaction.current.id}v${Transaction.current.timestamp}${'  '.repeat(Math.abs(d.instance!.level))}${getTraceHint(d)}.unmounting`)
  if (d.args !== RefreshParent) // TODO: Consider creating one transaction for all un-mounts
    Transaction.runAs({ standalone: true }, () => Reactronic.dispose(d.instance))
  const rtti = d.rtti
  if (rtti.unmount)
    rtti.unmount(d, cause)
  else
    unmount(d, cause) // default unmount
}

function renderOrdinaryChildren(d: Declaration): void {
  const self = d.instance
  if (self !== undefined && self.updates !== undefined) {
    const updates = self.updates
    const children = updates.slice().sort(compareDeclarations)
    self.updates = undefined
    // Unmount or resolve existing
    let sibling: Declaration | undefined = undefined
    let i = 0, j = 0
    while (i < self.children.length) {
      const existing = self.children[i]
      let x = children[j]
      const diff = x !== undefined ? compareDeclarations(x, existing) : 1
      if (diff <= 0) {
        if (sibling !== undefined && x.id === sibling.id)
          throw new Error(`duplicate id '${sibling.id}' inside '${d.id}'`)
        if (diff === 0) {
          x.instance = existing.instance // reuse existing instance for re-rendering
          if (x.args !== RefreshParent && argsAreEqual(x.args, existing.args))
            x = x.annex = children[j] = existing // skip re-rendering and preserve existing declaration
          i++, j++
        }
        else // diff < 0
          j++ // mount/reorder is performed below
        sibling = x
      }
      else // diff > 0
        callUnmount(existing, existing), i++
    }
    // Mount and render
    sibling = undefined
    for (let x of updates) {
      const existing = x.annex
      x = existing ?? x
      const mounted = x.instance ?? callMount(x, sibling)
      if (mounted.revision > 0) {
        if (x.rtti.reorder)
          x.rtti.reorder(x, sibling)
      }
      x !== existing && callRender(x)
      sibling = x
    }
    self.children = children
  }
}

function renderSortedChildren(d: Declaration): void {
  const self = d.instance
  if (self !== undefined && self.updates !== undefined) {
    const updates = self.updates.sort(compareDeclarations)
    self.updates = undefined
    let sibling: Declaration | undefined = undefined
    let i = 0, j = 0
    while (i < self.children.length || j < updates.length) {
      const existing = self.children[i]
      let x = updates[j]
      const diff = compareNullable(x, existing, compareDeclarations)
      if (diff <= 0) {
        if (sibling !== undefined && x.id === sibling.id)
          throw new Error(`duplicate id '${sibling.id}' inside '${d.id}'`)
        if (diff === 0) { // diff === 0
          x.instance = existing.instance // reuse existing instance for re-rendering
          if (x.args !== RefreshParent && argsAreEqual(x.args, existing.args))
            x = updates[j] = existing // skip re-rendering and preserve existing declaration
          i++, j++
        }
        else // diff < 0
          callMount(x, sibling), j++
        x !== existing && callRender(x)
        sibling = x
      }
      else // diff > 0
        callUnmount(existing, existing), i++
    }
    self.children = updates
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
