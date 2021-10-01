// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { reaction, nonreactive, Transaction, Reactronic, options } from 'reactronic'

// RefreshParent, Render, ComponentRender

export const RefreshParent = Symbol('RefreshParent') as unknown as void
export type Render<E = unknown, O = void> = (element: E, options: O) => void
export type ComponentRender<O = unknown, E = void> = (render: (options: O) => O, element: E) => void

// Manifest

export interface MountedInstance<E> {
  native?: E
  model?: any
  isResizeSensorEnabled?: boolean
}

export class Manifest<E = unknown, O = void> {
  constructor(
    readonly id: string,
    readonly args: any,
    readonly render: Render<E, O>,
    readonly componentRender: ComponentRender<O, E> | undefined,
    readonly rtti: Rtti<E, O>,
    public mounted?: {
      readonly level: number
      readonly cycle: number
      instance?: MountedInstance<E>
    }
  ) {
  }
  annex?: Manifest<E, O>

  get native(): E | undefined { return this.mounted?.instance?.native }
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
  componentRender: ComponentRender<O, E> | undefined, rtti: Rtti<E, O>): Manifest<E, O> {

  const owner = gOwner // shorthand
  if (!owner.mounted?.instance)
    throw new Error('element must be mounted before children')
  const m = new Manifest<any, any>(id, args, render, componentRender, rtti)
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
  const inst = m.mounted?.instance as (Instance | undefined)
  if (!inst)
    throw new Error('element must be mounted before rendering')
  const outerOwner = gOwner
  const outerPending = gPending
  try {
    gOwner = m
    gPending = []
    if (gTrace && gTraceMask.indexOf('r') >= 0 && new RegExp(gTrace, 'gi').test(getManifestTraceHint(m)))
      console.log(`t${Transaction.current.id}v${Transaction.current.timestamp}${'  '.repeat(Math.abs(m.mounted!.level))}${getManifestTraceHint(m)}.render/${m.mounted?.cycle}${m.args !== RefreshParent ? `  <<  ${Reactronic.why(true)}` : ''}`)
    if (m.componentRender)
      m.componentRender(componentRender, inst.native)
    else
      m.render(inst.native, undefined)
    renderChildrenNow() // ignored if rendered already
  }
  finally {
    gPending = outerPending
    gOwner = outerOwner
  }
}

function componentRender(options: any): any {
  const t = gOwner
  const inst = t.mounted?.instance as (Instance | undefined)
  if (!inst)
    throw new Error('element must be mounted before rendering')
  t.render(inst.native, options)
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
  const inst = m.mounted?.instance
  if (inst instanceof Instance) {
    for (const x of inst.children)
      callUnmount(x, m, cause)
    inst.native = undefined
  }
  m.mounted = undefined
}

// instance, cycle, trace, forAll

export function instance<T>(): { model?: T } {
  const inst = gOwner.mounted?.instance
  if (!inst)
    throw new Error('instance function can be called only inside rendering function')
  return inst
}

export function internalInstance<T>(): MountedInstance<T> {
  const inst = gOwner.mounted?.instance
  if (!inst)
    throw new Error('internalInstance function can be called only inside rendering function')
  return inst
}

export function cycle(): number {
  return gOwner.mounted?.cycle ?? 0
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

class Instance<E = unknown> {
  native?: E = undefined
  children: ReadonlyArray<Manifest> = EMPTY
}

class Mounted<E = unknown, O = void> {
  readonly level: number
  cycle: number
  instance?: Instance<E>

  constructor(level: number, instance?: Instance<E>) {
    this.level = level
    this.cycle = 0
    this.instance = instance
  }

  @reaction @options({ sensitiveArgs: true }) // @noSideEffects(true)
  render(m: Manifest<E, O>): void {
    renderInline(this, m)
    Reactronic.configureCurrentMethod({ order: this.level })
  }
}

function renderInline<E, O>(mounted: Mounted<E, O>, m: Manifest<E, O>): void {
  mounted.cycle++
  m.rtti.render ? m.rtti.render(m) : render(m)
}

function callRender(m: Manifest, owner: Manifest): void {
  const mounted = m.mounted as Mounted
  if (m.args === RefreshParent) // inline elements are always rendered
    renderInline(mounted, m)
  else // rendering of reactive elements is cached to avoid redundant calls
    nonreactive(mounted.render, m)
}

function callMount(m: Manifest, owner: Manifest, sibling?: Manifest): Mounted {
  // TODO: Make the code below exception-safe
  const rtti = m.rtti
  const mounted = new Mounted(owner.mounted!.level + 1)
  m.mounted = mounted
  mounted.instance = new Instance()
  if (rtti.mount)
    rtti.mount(m, owner, sibling)
  else
    mounted.instance.native = owner.mounted?.instance?.native // default mount
  if (m.args !== RefreshParent)
    Reactronic.setTraceHint(mounted, Reactronic.isTraceEnabled ? getManifestTraceHint(m) : m.id)
  if (gTrace && gTraceMask.indexOf('m') >= 0 && new RegExp(gTrace, 'gi').test(getManifestTraceHint(m)))
    console.log(`t${Transaction.current.id}v${Transaction.current.timestamp}${'  '.repeat(Math.abs(m.mounted!.level))}${getManifestTraceHint(m)}.mounted`)
  return mounted
}

function callUnmount(m: Manifest, owner: Manifest, cause: Manifest): void {
  if (gTrace && gTraceMask.indexOf('u') >= 0 && new RegExp(gTrace, 'gi').test(getManifestTraceHint(m)))
    console.log(`t${Transaction.current.id}v${Transaction.current.timestamp}${'  '.repeat(Math.abs(m.mounted!.level))}${getManifestTraceHint(m)}.unmounting`)
  if (m.args !== RefreshParent) // TODO: Consider creating one transaction for all un-mounts
    Transaction.runAs({ standalone: true }, () => Reactronic.dispose(m.mounted))
  const rtti = m.rtti
  if (rtti.unmount)
    rtti.unmount(m, owner, cause)
  else
    unmount(m, owner, cause) // default unmount
}

function reconcileOrdinaryChildren(owner: Manifest): void {
  const inst = owner.mounted?.instance as Instance | undefined
  if (inst !== undefined && gPending !== undefined) {
    const buffer = gPending
    const children = buffer.slice().sort(compareManifests)
    gPending = undefined
    // Unmount or resolve existing
    let sibling: Manifest | undefined = undefined
    let i = 0, j = 0
    while (i < inst.children.length) {
      const existing = inst.children[i]
      let e = children[j]
      const diff = e !== undefined ? compareManifests(e, existing) : 1
      if (diff <= 0) {
        if (sibling !== undefined && e.id === sibling.id)
          throw new Error(`duplicate id '${sibling.id}' inside '${owner.id}'`)
        if (diff === 0) {
          e.mounted = existing.mounted // reuse existing instance for re-rendering
          if (e.args !== RefreshParent && argsAreEqual(e.args, existing.args))
            e = e.annex = children[j] = existing // skip re-rendering and preserve existing token
          i++, j++
        }
        else // diff < 0
          j++ // mount/reorder is performed below
        sibling = e
      }
      else // diff > 0
        callUnmount(existing, owner, existing), i++
    }
    // Mount and render
    sibling = undefined
    for (let e of buffer) {
      const existing = e.annex
      e = existing ?? e
      const mounted = e.mounted ?? callMount(e, owner, sibling)
      if (mounted.cycle > 0) {
        if (e.rtti.reorder)
          e.rtti.reorder(e, owner, sibling)
      }
      e !== existing && callRender(e, owner)
      sibling = e
    }
    inst.children = children
  }
}

function reconcileSortedChildren(owner: Manifest): void {
  const inst = owner.mounted?.instance as Instance | undefined
  if (inst !== undefined && gPending !== undefined) {
    const children = gPending.sort(compareManifests)
    gPending = undefined
    let sibling: Manifest | undefined = undefined
    let i = 0, j = 0
    while (i < inst.children.length || j < children.length) {
      const existing = inst.children[i]
      let e = children[j]
      const diff = compareNullable(e, existing, compareManifests)
      if (diff <= 0) {
        if (sibling !== undefined && e.id === sibling.id)
          throw new Error(`duplicate id '${sibling.id}' inside '${owner.id}'`)
        if (diff === 0) { // diff === 0
          e.mounted = existing.mounted // reuse existing instance for re-rendering
          if (e.args !== RefreshParent && argsAreEqual(e.args, existing.args))
            e = children[j] = existing // skip re-rendering and preserve existing token
          i++, j++
        }
        else // diff < 0
          callMount(e, owner, sibling), j++
        e !== existing && callRender(e, owner)
        sibling = e
      }
      else // diff > 0
        callUnmount(existing, owner, existing), i++
    }
    inst.children = children
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
  const inst = m.mounted?.instance
  if (inst instanceof Instance) {
    const native = inst.native
    native && action(native)
    inst.children.forEach(x => forEachChildRecursively(x, action))
  }
}

const RootManifest = new Manifest<any, any>(
  'root',                           // id
  RefreshParent,                    // state
  () => { /* nop */ },              // render
  undefined,                        // override
  { name: 'root', sorting: false }, // rtti
  new Mounted(0, new Instance()),   // mounted
)

let gOwner: Manifest<any, any> = RootManifest
let gPending: Manifest[] | undefined = undefined
let gTrace: string | undefined = undefined
let gTraceMask: string = 'r'
