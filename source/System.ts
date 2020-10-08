// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2020 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE

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

// Emitted

export interface Emitted<E = unknown, O = void, S = void> {
  readonly id: string
  readonly state: S
  readonly render: Render<E, O, S>
  readonly customize?: Customize<O, E, S>
  readonly rtti: Rtti<E, O, S>
  mounted?: {
    readonly level: number
    readonly cycle: number
    instance?: {
      native?: E
    }
  }
  annex?: Emitted<E, O, S>
}

// Rtti

export interface Rtti<E = unknown, O = void, S = void> { // Run-Time Type Info
  readonly name: string
  readonly sorting: boolean
  render?(e: Emitted<E, O, S>): void
  mount?(e: Emitted<E, O, S>, owner: Emitted, sibling?: Emitted): void
  reorder?(e: Emitted<E, O, S>, owner: Emitted, sibling?: Emitted): void
  unmount?(e: Emitted<E, O, S>, owner: Emitted, cause: Emitted): void
}

// emit, render, reconcile, unmount
/* eslint-disable @typescript-eslint/no-non-null-assertion */

export function emit<E = unknown, O = void, S = void>(
  id: string, state: S, render: Render<E, O, S>,
  customize: Customize<O, E, S> | undefined, rtti: Rtti<E, O, S>): Emitted<E, O, S> {

  const owner = gOwner // shorthand
  if (!owner.mounted?.instance)
    throw new Error('element must be mounted before emitting children')
  const e: Emitted<any, any, any> = { id, state, render, customize, rtti }
  if (owner !== BlankHandle) {
    if (gBuffer === undefined)
      throw new Error('children are rendered already') // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    gBuffer.push(e)
  }
  else { // render root immediately
    gBuffer = [e]
    Transaction.run(reconcile)
  }
  return e
}

export function render(e: Emitted<any, any, any>): void {
  const inst = e.mounted?.instance as (Instance | undefined)
  if (!inst)
    throw new Error('element must be mounted before rendering')
  const outerOwner = gOwner
  const outerBuffer = gBuffer
  try {
    gOwner = e
    gBuffer = []
    if (gTrace && gTraceMask.indexOf('r') >= 0 && new RegExp(gTrace, 'gi').test(getTokenTraceId(e)))
      console.log(`t${Transaction.current.id}v${Transaction.current.timestamp}${'  '.repeat(Math.abs(e.mounted!.level))}${getTokenTraceId(e)}.render/${e.mounted?.cycle}${e.state !== RenderWithParent ? `  <<  ${Reactronic.why(true)}` : ''}`)
    if (e.customize)
      e.customize(customize, inst.native, e.state)
    else
      e.render(inst.native, undefined, e.state)
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

export function unmount(e: Emitted<any, any>, owner: Emitted, cause: Emitted): void {
  const inst = e.mounted!.instance as Instance
  for (const x of inst.children)
    callUnmount(x, e, cause)
  inst.native = undefined
  e.mounted = undefined
}

// cycle, native, trace

export function cycle(): number {
  return gOwner.mounted?.cycle ?? 0
}

export function native<T, A>(e: Emitted<T, A> | undefined): T | undefined {
  return e?.mounted?.instance?.native
}

export function trace(enabled: boolean, mask: string, regexp: string): void {
  gTrace = enabled ? regexp : undefined
  gTraceMask = mask
}

// Internal

const EMPTY: Array<Emitted> = []
Object.freeze(EMPTY)

class Instance<E = unknown, W = unknown> {
  native?: E = undefined
  children: ReadonlyArray<Emitted> = EMPTY
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
  render(e: Emitted<E, O, S>): void {
    renderInline(this, e)
    Reactronic.configureCurrentMethodCache({ priority: this.level })
  }
}

function renderInline<E, O, S>(mounted: Mounted<E, O, S>, e: Emitted<E, O, S>): void {
  mounted.cycle++
  e.rtti.render ? e.rtti.render(e) : render(e)
}

function callRender(e: Emitted, owner: Emitted): void {
  const mounted = e.mounted as Mounted
  if (e.state === RenderWithParent) // inline elements are always rendered
    renderInline(mounted, e)
  else // rendering of reactive elements is cached to avoid redundant calls
    untracked(mounted.render, e)
}

function callMount(e: Emitted, owner: Emitted, sibling?: Emitted): Mounted {
  // TODO: Make the code below exception-safe
  const rtti = e.rtti
  const mounted = new Mounted(owner.mounted!.level + 1)
  e.mounted = mounted
  mounted.instance = new Instance()
  if (rtti.mount)
    rtti.mount(e, owner, sibling)
  else
    mounted.instance.native = owner.mounted?.instance?.native // default mount
  if (e.state !== RenderWithParent)
    Reactronic.setTraceHint(mounted, Reactronic.isTraceEnabled ? getTokenTraceId(e) : e.id)
  if (gTrace && gTraceMask.indexOf('m') >= 0 && new RegExp(gTrace, 'gi').test(getTokenTraceId(e)))
    console.log(`t${Transaction.current.id}v${Transaction.current.timestamp}${'  '.repeat(Math.abs(e.mounted!.level))}${getTokenTraceId(e)}.mounted`)
  return mounted
}

function callUnmount(e: Emitted, owner: Emitted, cause: Emitted): void {
  if (gTrace && gTraceMask.indexOf('u') >= 0 && new RegExp(gTrace, 'gi').test(getTokenTraceId(e)))
    console.log(`t${Transaction.current.id}v${Transaction.current.timestamp}${'  '.repeat(Math.abs(e.mounted!.level))}${getTokenTraceId(e)}.unmounting`)
  if (e.state !== RenderWithParent)
    Reactronic.dispose(e.mounted) // isolated(Cache.unmount, t.instance) // TODO: Consider creating one transaction for all un-mounts
  const rtti = e.rtti
  if (rtti.unmount)
    rtti.unmount(e, owner, cause)
  else
    unmount(e, owner, cause) // default unmount
}

function reconcileOrdinary(owner: Emitted): void {
  const inst = owner.mounted?.instance as Instance | undefined
  if (inst !== undefined && gBuffer !== undefined) {
    const buffer = gBuffer
    const children = buffer.slice().sort(compareHandles)
    gBuffer = undefined
    // Unmount or resolve existing
    let sibling: Emitted | undefined = undefined
    let i = 0, j = 0
    while (i < inst.children.length) {
      const existing = inst.children[i]
      let e = children[j]
      const diff = e !== undefined ? compareHandles(e, existing) : 1
      if (diff > 0) {
        callUnmount(existing, owner, existing)
        i++
      }
      else {
        if (sibling !== undefined && e.id === sibling.id)
          throw new Error(`duplicate id '${sibling.id}' inside '${owner.id}'`)
        if (diff === 0) {
          if (e.state !== RenderWithParent && attributesAreEqual(e.state, existing.state))
            e = e.annex = children[j] = existing // skip re-rendering and preserve existing token
          else
            e.mounted = existing.mounted // reuse existing instance for re-rendering
          i++, j++
        }
        else // diff < 0
          j++ // mount/reorder is performed below
        sibling = e
      }
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

function reconcileSorted(owner: Emitted): void {
  const inst = owner.mounted?.instance as Instance | undefined
  if (inst !== undefined && gBuffer !== undefined) {
    const children = gBuffer.sort(compareHandles)
    gBuffer = undefined
    let sibling: Emitted | undefined = undefined
    let i = 0, j = 0
    while (i < inst.children.length || j < children.length) {
      const existing = inst.children[i]
      let e = children[j]
      const diff = compareNullable(e, existing, compareHandles)
      if (diff > 0) {
        callUnmount(existing, owner, existing)
        i++
      }
      else {
        if (sibling !== undefined && e.id === sibling.id)
          throw new Error(`duplicate id '${sibling.id}' inside '${owner.id}'`)
        if (diff < 0) {
          callMount(e, owner, sibling)
          j++
        }
        else { // diff === 0
          if (e.state !== RenderWithParent && attributesAreEqual(e.state, existing.state))
            e = children[j] = existing // skip re-rendering and preserve existing token
          else
            e.mounted = existing.mounted // reuse existing instance for re-rendering
          i++, j++
        }
        e !== existing && callRender(e, owner)
        sibling = e
      }
    }
    inst.children = children
  }
}

function compareHandles(e1: Emitted, e2: Emitted): number {
  return e1.id.localeCompare(e2.id)
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

function getTokenTraceId(e: Emitted): string {
  return `${e.rtti.name}:${e.id}`
}

const BlankHandle: Emitted<any, any> = {
  id: 'blank',
  state: RenderWithParent,
  render: () => { /* nop */ },
  rtti: { name: 'blank', sorting: false },
  mounted: new Mounted(0, new Instance()),
}

let gOwner: Emitted<any, any, any> = BlankHandle
let gBuffer: Emitted[] | undefined = undefined
let gTrace: string | undefined = undefined
let gTraceMask: string = 'r'
