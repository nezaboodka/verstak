// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { reaction, nonreactive, Transaction, Reactronic, options } from 'reactronic'

// RefreshParent, Render, SuperRender

export const RefreshParent = Symbol('RefreshParent') as unknown as void
export type Render<E = unknown, O = void> = (element: E, options: O) => void
export type SuperRender<O = unknown, E = void> = (render: (options: O) => O, element: E) => void

// Manifest

export interface InternalInstance<E> {
  native?: E
  model?: any
  resizeObserver?: ResizeObserver
}

export class Manifest<E = unknown, O = void> {
  constructor(
    readonly id: string,
    readonly args: any,
    readonly render: Render<E, O>,
    readonly superRender: SuperRender<O, E> | undefined,
    readonly rtti: Rtti<E, O>,
    public instance?: {
      readonly level: number
      readonly revision: number
      mounted?: InternalInstance<E>
    }
  ) {
  }
  annex?: Manifest<E, O>

  get native(): E | undefined { return this.instance?.mounted?.native }
}

// Rtti

export interface Rtti<E = unknown, O = void> { // Run-Time Type Info
  readonly name: string
  readonly sorting: boolean
  render?(m: Manifest<E, O>): void
  mount?(m: Manifest<E, O>, owner: Manifest, sibling?: Manifest): void
  reorder?(m: Manifest<E, O>, owner: Manifest, sibling?: Manifest): void
  unmount?(m: Manifest<E, O>, owner: Manifest, cause: Manifest): void
}

// manifest, render, renderChildrenNow, unmount
/* eslint-disable @typescript-eslint/no-non-null-assertion */

export function manifest<E = unknown, O = void>(
  id: string, args: any, render: Render<E, O>,
  superRender: SuperRender<O, E> | undefined,
  rtti: Rtti<E, O>): Manifest<E, O> {

  const owner = gOwner // shorthand
  if (!owner.instance?.mounted)
    throw new Error('element must be mounted before children')
  const m = new Manifest<any, any>(id, args, render, superRender, rtti)
  if (owner !== RootManifest) {
    if (gPending === undefined)
      throw new Error('children are rendered already') // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    gPending.push(m)
  }
  else { // render root immediately
    gPending = [m]
    Transaction.run(renderChildrenNow)
  }
  return m
}

export function render(m: Manifest<any, any>): void {
  const mounted = m.instance?.mounted as (Mounted | undefined)
  if (!mounted)
    throw new Error('element must be mounted before rendering')
  const outerOwner = gOwner
  const outerPending = gPending
  try {
    gOwner = m
    gPending = []
    if (gTrace && gTraceMask.indexOf('r') >= 0 && new RegExp(gTrace, 'gi').test(getManifestTraceHint(m)))
      console.log(`t${Transaction.current.id}v${Transaction.current.timestamp}${'  '.repeat(Math.abs(m.instance!.level))}${getManifestTraceHint(m)}.render/${m.instance?.revision}${m.args !== RefreshParent ? `  <<  ${Reactronic.why(true)}` : ''}`)
    if (m.superRender)
      m.superRender(superRender, mounted.native)
    else
      m.render(mounted.native, undefined)
    renderChildrenNow() // ignored if rendered already
  }
  finally {
    gPending = outerPending
    gOwner = outerOwner
  }
}

function superRender(options: any): any {
  const t = gOwner
  const mounted = t.instance?.mounted as (Mounted | undefined)
  if (!mounted)
    throw new Error('element must be mounted before rendering')
  t.render(mounted.native, options)
  return options
}

export function renderChildrenNow(): void {
  const x = gOwner
  if (x.rtti.sorting)
    reconcileSortedChildren(x)
  else
    reconcileOrdinaryChildren(x)
}

export function unmount(m: Manifest<any, any>, owner: Manifest, cause: Manifest): void {
  const mounted = m.instance?.mounted
  if (mounted instanceof Mounted) {
    for (const x of mounted.children)
      callUnmount(x, m, cause)
    mounted.native = undefined
  }
  m.instance = undefined
}

// mountedModel, revision, trace, forAll

export function selfInstance<T>(): { model?: T } {
  const mounted = gOwner.instance?.mounted
  if (!mounted)
    throw new Error('instance function can be called only inside rendering function')
  return mounted
}

export function selfInstanceInternal<T>(): InternalInstance<T> {
  const result = gOwner.instance?.mounted
  if (!result)
    throw new Error('getMountedInstance function can be called only inside rendering function')
  return result
}

export function selfRevision(): number {
  return gOwner.instance?.revision ?? 0
}

export function trace(enabled: boolean, mask: string, regexp: string): void {
  gTrace = enabled ? regexp : undefined
  gTraceMask = mask
}

export function forAll<E>(action: (e: E) => void): void {
  forEachChildRecursively(RootManifest, action)
}

// Internal

const EMPTY: Array<Manifest> = []
Object.freeze(EMPTY)

class Mounted<E = unknown> {
  native?: E = undefined
  children: ReadonlyArray<Manifest> = EMPTY
}

class Instance<E = unknown, O = void> {
  readonly level: number
  revision: number
  mounted?: Mounted<E>

  constructor(level: number, mounted?: Mounted<E>) {
    this.level = level
    this.revision = 0
    this.mounted = mounted
  }

  @reaction @options({ sensitiveArgs: true }) // @noSideEffects(true)
  render(m: Manifest<E, O>): void {
    renderInline(this, m)
    Reactronic.configureCurrentMethod({ order: this.level })
  }
}

function renderInline<E, O>(instance: Instance<E, O>, m: Manifest<E, O>): void {
  instance.revision++
  m.rtti.render ? m.rtti.render(m) : render(m)
}

function callRender(m: Manifest, owner: Manifest): void {
  const instance = m.instance as Instance
  if (m.args === RefreshParent) // inline elements are always rendered
    renderInline(instance, m)
  else // rendering of reactive elements is cached to avoid redundant calls
    nonreactive(instance.render, m)
}

function callMount(m: Manifest, owner: Manifest, sibling?: Manifest): Instance {
  // TODO: Make the code below exception-safe
  const rtti = m.rtti
  const instance = new Instance(owner.instance!.level + 1)
  m.instance = instance
  instance.mounted = new Mounted()
  if (rtti.mount)
    rtti.mount(m, owner, sibling)
  else
    instance.mounted.native = owner.instance?.mounted?.native // default mount
  if (m.args !== RefreshParent)
    Reactronic.setTraceHint(instance, Reactronic.isTraceEnabled ? getManifestTraceHint(m) : m.id)
  if (gTrace && gTraceMask.indexOf('m') >= 0 && new RegExp(gTrace, 'gi').test(getManifestTraceHint(m)))
    console.log(`t${Transaction.current.id}v${Transaction.current.timestamp}${'  '.repeat(Math.abs(m.instance!.level))}${getManifestTraceHint(m)}.mounted`)
  return instance
}

function callUnmount(m: Manifest, owner: Manifest, cause: Manifest): void {
  if (gTrace && gTraceMask.indexOf('u') >= 0 && new RegExp(gTrace, 'gi').test(getManifestTraceHint(m)))
    console.log(`t${Transaction.current.id}v${Transaction.current.timestamp}${'  '.repeat(Math.abs(m.instance!.level))}${getManifestTraceHint(m)}.unmounting`)
  if (m.args !== RefreshParent) // TODO: Consider creating one transaction for all un-mounts
    Transaction.runAs({ standalone: true }, () => Reactronic.dispose(m.instance))
  const rtti = m.rtti
  if (rtti.unmount)
    rtti.unmount(m, owner, cause)
  else
    unmount(m, owner, cause) // default unmount
}

function reconcileOrdinaryChildren(owner: Manifest): void {
  const mounted = owner.instance?.mounted as Mounted | undefined
  if (mounted !== undefined && gPending !== undefined) {
    const buffer = gPending
    const children = buffer.slice().sort(compareManifests)
    gPending = undefined
    // Unmount or resolve existing
    let sibling: Manifest | undefined = undefined
    let i = 0, j = 0
    while (i < mounted.children.length) {
      const existing = mounted.children[i]
      let x = children[j]
      const diff = x !== undefined ? compareManifests(x, existing) : 1
      if (diff <= 0) {
        if (sibling !== undefined && x.id === sibling.id)
          throw new Error(`duplicate id '${sibling.id}' inside '${owner.id}'`)
        if (diff === 0) {
          x.instance = existing.instance // reuse existing instance for re-rendering
          if (x.args !== RefreshParent && argsAreEqual(x.args, existing.args))
            x = x.annex = children[j] = existing // skip re-rendering and preserve existing token
          i++, j++
        }
        else // diff < 0
          j++ // mount/reorder is performed below
        sibling = x
      }
      else // diff > 0
        callUnmount(existing, owner, existing), i++
    }
    // Mount and render
    sibling = undefined
    for (let x of buffer) {
      const existing = x.annex
      x = existing ?? x
      const instance = x.instance ?? callMount(x, owner, sibling)
      if (instance.revision > 0) {
        if (x.rtti.reorder)
          x.rtti.reorder(x, owner, sibling)
      }
      x !== existing && callRender(x, owner)
      sibling = x
    }
    mounted.children = children
  }
}

function reconcileSortedChildren(owner: Manifest): void {
  const mounted = owner.instance?.mounted as Mounted | undefined
  if (mounted !== undefined && gPending !== undefined) {
    const children = gPending.sort(compareManifests)
    gPending = undefined
    let sibling: Manifest | undefined = undefined
    let i = 0, j = 0
    while (i < mounted.children.length || j < children.length) {
      const existing = mounted.children[i]
      let x = children[j]
      const diff = compareNullable(x, existing, compareManifests)
      if (diff <= 0) {
        if (sibling !== undefined && x.id === sibling.id)
          throw new Error(`duplicate id '${sibling.id}' inside '${owner.id}'`)
        if (diff === 0) { // diff === 0
          x.instance = existing.instance // reuse existing instance for re-rendering
          if (x.args !== RefreshParent && argsAreEqual(x.args, existing.args))
            x = children[j] = existing // skip re-rendering and preserve existing token
          i++, j++
        }
        else // diff < 0
          callMount(x, owner, sibling), j++
        x !== existing && callRender(x, owner)
        sibling = x
      }
      else // diff > 0
        callUnmount(existing, owner, existing), i++
    }
    mounted.children = children
  }
}

function compareManifests(m1: Manifest, m2: Manifest): number {
  return m1.id.localeCompare(m2.id)
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

function getManifestTraceHint(m: Manifest): string {
  return `${m.rtti.name}:${m.id}`
}

function forEachChildRecursively<E>(m: Manifest, action: (e: E) => void): void {
  const mounted = m.instance?.mounted
  if (mounted instanceof Mounted) {
    const native = mounted.native
    native && action(native)
    mounted.children.forEach(x => forEachChildRecursively(x, action))
  }
}

const RootManifest = new Manifest<any, any>(
  'root',                           // id
  RefreshParent,                    // state
  () => { /* nop */ },              // render
  undefined,                        // override
  { name: 'root', sorting: false }, // rtti
  new Instance(0, new Mounted()),   // mounted
)

let gOwner: Manifest<any, any> = RootManifest
let gPending: Manifest[] | undefined = undefined
let gTrace: string | undefined = undefined
let gTraceMask: string = 'r'
