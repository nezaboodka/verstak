// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2020 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { trigger, untracked, Transaction, Reactronic, sensitiveArgs } from 'reactronic'

// BlankState, RenderWithParent, Render, Customize

export const BlankState = undefined as void // trick to allow avoiding attributes as the last parameter of render/setup
export const RenderWithParent = Symbol('render-with-parent') as unknown as void

export type Render<E = unknown, O = void, S = void> = (
  element: E,
  options: O,
  state: {readonly [P in keyof S]: S[P]}) => void

export type Customize<O = unknown, E = void, S = void> = (
  render: (options: O) => O,
  element: E,
  state: {readonly [P in keyof S]: S[P]}) => void

// Manifest

export class Manifest<E = unknown, O = void, S = void> {
  constructor(
    readonly id: string,
    readonly state: S,
    readonly render: Render<E, O, S>,
    readonly customize: Customize<O, E, S> | undefined,
    readonly rtti: Rtti<E, O, S>,
    public mounted?: {
      readonly level: number
      readonly cycle: number
      instance?: {
        native?: E
      }
    }
  ) {
  }
  annex?: Manifest<E, O, S>

  get native(): E | undefined  { return this.mounted?.instance?.native }
}

// Rtti

export interface Rtti<E = unknown, O = void, S = void> { // Run-Time Type Info
  readonly name: string
  readonly sorting: boolean
  render?(m: Manifest<E, O, S>): void
  mount?(m: Manifest<E, O, S>, owner: Manifest, sibling?: Manifest): void
  reorder?(m: Manifest<E, O, S>, owner: Manifest, sibling?: Manifest): void
  unmount?(m: Manifest<E, O, S>, owner: Manifest, cause: Manifest): void
}

// manifest, render, reconcile, unmount
/* eslint-disable @typescript-eslint/no-non-null-assertion */

export function manifest<E = unknown, O = void, S = void>(
  id: string, state: S, render: Render<E, O, S>,
  customize: Customize<O, E, S> | undefined, rtti: Rtti<E, O, S>): Manifest<E, O, S> {

  const owner = gOwner // shorthand
  if (!owner.mounted?.instance)
    throw new Error('element must be mounted before children')
  const m = new Manifest<any, any, any>(id, state, render, customize, rtti)
  if (owner !== BlankManifest) {
    if (gBuffer === undefined)
      throw new Error('children are rendered already') // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    gBuffer.push(m)
  }
  else { // render root immediately
    gBuffer = [m]
    Transaction.run(reconcile)
  }
  return m
}

export function render(m: Manifest<any, any, any>): void {
  const inst = m.mounted?.instance as (Instance | undefined)
  if (!inst)
    throw new Error('element must be mounted before rendering')
  const outerOwner = gOwner
  const outerBuffer = gBuffer
  try {
    gOwner = m
    gBuffer = []
    if (gTrace && gTraceMask.indexOf('r') >= 0 && new RegExp(gTrace, 'gi').test(getTokenTraceId(m)))
      console.log(`t${Transaction.current.id}v${Transaction.current.timestamp}${'  '.repeat(Math.abs(m.mounted!.level))}${getTokenTraceId(m)}.render/${m.mounted?.cycle}${m.state !== RenderWithParent ? `  <<  ${Reactronic.why(true)}` : ''}`)
    if (m.customize)
      m.customize(customize, inst.native, m.state)
    else
      m.render(inst.native, undefined, m.state)
    reconcile() // ignored if rendered already
  }
  finally {
    gBuffer = outerBuffer
    gOwner = outerOwner
  }
}

function customize(options: any): any {
  const t = gOwner
  const inst = t.mounted?.instance as (Instance | undefined)
  if (!inst)
    throw new Error('element must be mounted before rendering')
  t.render(inst.native, options, t.state)
  return options
}

export function reconcile(): void {
  const x = gOwner
  if (x.rtti.sorting)
    reconcileSorted(x)
  else
    reconcileOrdinary(x)
}

export function unmount(m: Manifest<any, any>, owner: Manifest, cause: Manifest): void {
  const inst = m.mounted!.instance as Instance
  for (const x of inst.children)
    callUnmount(x, m, cause)
  inst.native = undefined
  m.mounted = undefined
}

// cycle, native, trace

export function cycle(): number {
  return gOwner.mounted?.cycle ?? 0
}

export function trace(enabled: boolean, mask: string, regexp: string): void {
  gTrace = enabled ? regexp : undefined
  gTraceMask = mask
}

// Internal

const EMPTY: Array<Manifest> = []
Object.freeze(EMPTY)

class Instance<E = unknown, O = unknown> {
  native?: E = undefined
  children: ReadonlyArray<Manifest> = EMPTY
}

class Mounted<E = unknown, O = void, S = void> {
  readonly level: number
  cycle: number
  instance?: Instance<E, O>

  constructor(level: number, instance?: Instance<E, O>) {
    this.level = level
    this.cycle = 0
    this.instance = instance
  }

  @trigger @sensitiveArgs(true) // @noSideEffects(true)
  render(m: Manifest<E, O, S>): void {
    renderInline(this, m)
    Reactronic.configureCurrentMethodCache({ priority: this.level })
  }
}

function renderInline<E, O, S>(mounted: Mounted<E, O, S>, m: Manifest<E, O, S>): void {
  mounted.cycle++
  m.rtti.render ? m.rtti.render(m) : render(m)
}

function callRender(m: Manifest, owner: Manifest): void {
  const mounted = m.mounted as Mounted
  if (m.state === RenderWithParent) // inline elements are always rendered
    renderInline(mounted, m)
  else // rendering of reactive elements is cached to avoid redundant calls
    untracked(mounted.render, m)
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
  if (m.state !== RenderWithParent)
    Reactronic.setTraceHint(mounted, Reactronic.isTraceEnabled ? getTokenTraceId(m) : m.id)
  if (gTrace && gTraceMask.indexOf('m') >= 0 && new RegExp(gTrace, 'gi').test(getTokenTraceId(m)))
    console.log(`t${Transaction.current.id}v${Transaction.current.timestamp}${'  '.repeat(Math.abs(m.mounted!.level))}${getTokenTraceId(m)}.mounted`)
  return mounted
}

function callUnmount(m: Manifest, owner: Manifest, cause: Manifest): void {
  if (gTrace && gTraceMask.indexOf('u') >= 0 && new RegExp(gTrace, 'gi').test(getTokenTraceId(m)))
    console.log(`t${Transaction.current.id}v${Transaction.current.timestamp}${'  '.repeat(Math.abs(m.mounted!.level))}${getTokenTraceId(m)}.unmounting`)
  if (m.state !== RenderWithParent)
    Reactronic.dispose(m.mounted) // isolated(Cache.unmount, t.instance) // TODO: Consider creating one transaction for all un-mounts
  const rtti = m.rtti
  if (rtti.unmount)
    rtti.unmount(m, owner, cause)
  else
    unmount(m, owner, cause) // default unmount
}

function reconcileOrdinary(owner: Manifest): void {
  const inst = owner.mounted?.instance as Instance | undefined
  if (inst !== undefined && gBuffer !== undefined) {
    const buffer = gBuffer
    const children = buffer.slice().sort(compareHandles)
    gBuffer = undefined
    // Unmount or resolve existing
    let sibling: Manifest | undefined = undefined
    let i = 0, j = 0
    while (i < inst.children.length) {
      const existing = inst.children[i]
      let e = children[j]
      const diff = e !== undefined ? compareHandles(e, existing) : 1
      if (diff <= 0) {
        if (sibling !== undefined && e.id === sibling.id)
          throw new Error(`duplicate id '${sibling.id}' inside '${owner.id}'`)
        if (diff === 0) {
          e.mounted = existing.mounted // reuse existing instance for re-rendering
          if (e.state !== RenderWithParent && attributesAreEqual(e.state, existing.state))
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

function reconcileSorted(owner: Manifest): void {
  const inst = owner.mounted?.instance as Instance | undefined
  if (inst !== undefined && gBuffer !== undefined) {
    const children = gBuffer.sort(compareHandles)
    gBuffer = undefined
    let sibling: Manifest | undefined = undefined
    let i = 0, j = 0
    while (i < inst.children.length || j < children.length) {
      const existing = inst.children[i]
      let e = children[j]
      const diff = compareNullable(e, existing, compareHandles)
      if (diff <= 0) {
        if (sibling !== undefined && e.id === sibling.id)
          throw new Error(`duplicate id '${sibling.id}' inside '${owner.id}'`)
        if (diff === 0) { // diff === 0
          e.mounted = existing.mounted // reuse existing instance for re-rendering
          if (e.state !== RenderWithParent && attributesAreEqual(e.state, existing.state))
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

function compareHandles(m1: Manifest, m2: Manifest): number {
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

function attributesAreEqual(a1: any, a2: any): boolean {
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

function getTokenTraceId(m: Manifest): string {
  return `${m.rtti.name}:${m.id}`
}

const BlankManifest = new Manifest<any, any, any>(
  'blank',                           // id
  RenderWithParent,                  // state
  () => { /* nop */ },               // render
  undefined,                         // customize
  { name: 'blank', sorting: false }, // rtti
  new Mounted(0, new Instance()),    // mounted
)

let gOwner: Manifest<any, any, any> = BlankManifest
let gBuffer: Manifest[] | undefined = undefined
let gTrace: string | undefined = undefined
let gTraceMask: string = 'r'
