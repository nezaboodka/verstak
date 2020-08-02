// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2020 Yury Chetyrko <ychetyrko@gmail.com>
// License: https://raw.githubusercontent.com/reactronic-front/reactronic/master/LICENSE

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

// Token

export interface Token<E = unknown, O = void, S = void> {
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
  annex?: Token<E, O, S>
}

// Rtti

export interface Rtti<E = unknown, O = void, S = void> { // Run-Time Type Info
  readonly name: string
  readonly sorting: boolean
  render?(t: Token<E, O, S>): void
  mount?(t: Token<E, O, S>, owner: Token, sibling?: Token): void
  reorder?(t: Token<E, O, S>, owner: Token, sibling?: Token): void
  unmount?(t: Token<E, O, S>, owner: Token, cause: Token): void
}

// emit, render, reconcile, unmount
/* eslint-disable @typescript-eslint/no-non-null-assertion */

export function emit<E = unknown, O = void, S = void>(
  id: string, state: S, render: Render<E, O, S>,
  customize: Customize<O, E, S> | undefined, rtti: Rtti<E, O, S>): Token<E, O, S> {

  const owner = gOwner // shorthand
  if (!owner.mounted?.instance)
    throw new Error('element must be mounted before emitting children')
  const t: Token<any, any, any> = { id, state, render, customize, rtti }
  if (owner !== BlankToken) {
    if (gBuffer === undefined)
      throw new Error('children are rendered already') // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    gBuffer.push(t)
  }
  else { // render root immediately
    gBuffer = [t]
    Transaction.run('render-root', reconcile)
  }
  return t
}

export function render(t: Token<any, any, any>): void {
  const inst = t.mounted?.instance as (Instance | undefined)
  if (!inst)
    throw new Error('element must be mounted before rendering')
  const outerOwner = gOwner
  const outerBuffer = gBuffer
  try {
    gOwner = t
    gBuffer = []
    if (gTrace && gTraceMask.indexOf('r') >= 0 && new RegExp(gTrace, 'gi').test(getRefTraceId(t)))
      console.log(`t${Transaction.current.id}v${Transaction.current.timestamp}${'  '.repeat(Math.abs(t.mounted!.level))}${getRefTraceId(t)}.render/${t.mounted?.cycle}${t.state !== RenderWithParent ? `  <<  ${Reactronic.why(true)}` : ''}`)
    if (t.customize)
      t.customize(customize, inst.native, t.state)
    else
      t.render(inst.native, undefined, t.state)
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

export function unmount(t: Token<any, any>, owner: Token, cause: Token): void {
  const inst = t.mounted!.instance as Instance
  for (const x of inst.children)
    callUnmount(x, t, cause)
  inst.native = undefined
  t.mounted = undefined
}

// cycle, native, trace

export function cycle(): number {
  return gOwner.mounted?.cycle ?? 0
}

export function native<T, A>(t: Token<T, A> | undefined): T | undefined {
  return t?.mounted?.instance?.native
}

export function trace(enabled: boolean, mask: string, regexp: string): void {
  gTrace = enabled ? regexp : undefined
  gTraceMask = mask
}

// Internal

const EMPTY: Array<Token> = []
Object.freeze(EMPTY)

class Instance<E = unknown, W = unknown> {
  native?: E = undefined
  children: ReadonlyArray<Token> = EMPTY
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
  render(t: Token<E, O, S>): void {
    renderInline(this, t)
    Reactronic.configureCache({ priority: this.level })
  }
}

function renderInline<E, O, S>(mounted: Mounted<E, O, S>, t: Token<E, O, S>): void {
  mounted.cycle++
  t.rtti.render ? t.rtti.render(t) : render(t)
}

function callRender(t: Token, owner: Token): void {
  const mounted = t.mounted as Mounted
  if (t.state === RenderWithParent) // inline elements are always rendered
    renderInline(mounted, t)
  else // rendering of reactive elements is cached to avoid redundant calls
    untracked(mounted.render, t)
}

function callMount(t: Token, owner: Token, sibling?: Token): Mounted {
  // TODO: Make the code below exception-safe
  const rtti = t.rtti
  const mounted = new Mounted(owner.mounted!.level + 1)
  t.mounted = mounted
  mounted.instance = new Instance()
  if (rtti.mount)
    rtti.mount(t, owner, sibling)
  else
    mounted.instance.native = owner.mounted?.instance?.native // default mount
  if (t.state !== RenderWithParent)
    Reactronic.setLoggingHint(mounted, Reactronic.isLogging ? getRefTraceId(t) : t.id)
  if (gTrace && gTraceMask.indexOf('m') >= 0 && new RegExp(gTrace, 'gi').test(getRefTraceId(t)))
    console.log(`t${Transaction.current.id}v${Transaction.current.timestamp}${'  '.repeat(Math.abs(t.mounted!.level))}${getRefTraceId(t)}.mounted`)
  return mounted
}

function callUnmount(t: Token, owner: Token, cause: Token): void {
  if (gTrace && gTraceMask.indexOf('u') >= 0 && new RegExp(gTrace, 'gi').test(getRefTraceId(t)))
    console.log(`t${Transaction.current.id}v${Transaction.current.timestamp}${'  '.repeat(Math.abs(t.mounted!.level))}${getRefTraceId(t)}.unmounting`)
  if (t.state !== RenderWithParent)
    Reactronic.unmount(t.mounted) // isolated(Cache.unmount, ref.instance) // TODO: Consider creating one transaction for all un-mounts
  const rtti = t.rtti
  if (rtti.unmount)
    rtti.unmount(t, owner, cause)
  else
    unmount(t, owner, cause) // default unmount
}

function reconcileOrdinary(owner: Token): void {
  const inst = owner.mounted?.instance as Instance | undefined
  if (inst !== undefined && gBuffer !== undefined) {
    const buffer = gBuffer
    const children = buffer.slice().sort(compareRefs)
    gBuffer = undefined
    // Unmount or resolve existing
    let sibling: Token | undefined = undefined
    let i = 0, j = 0
    while (i < inst.children.length) {
      const existing = inst.children[i]
      let t = children[j]
      const diff = t !== undefined ? compareRefs(t, existing) : 1
      if (diff > 0) {
        callUnmount(existing, owner, existing)
        i++
      }
      else {
        if (sibling !== undefined && t.id === sibling.id)
          throw new Error(`duplicate id '${sibling.id}' inside '${owner.id}'`)
        if (diff === 0) {
          if (t.state !== RenderWithParent && attributesAreEqual(t.state, existing.state))
            t = t.annex = children[j] = existing // skip re-rendering and preserve existing ref
          else
            t.mounted = existing.mounted // reuse existing instance for re-rendering
          i++, j++
        }
        else // diff < 0
          j++ // mount/reorder is performed below
        sibling = t
      }
    }
    // Mount and render
    sibling = undefined
    for (let t of buffer) {
      const existing = t.annex
      t = existing ?? t
      const mounted = t.mounted ?? callMount(t, owner, sibling)
      if (mounted.cycle > 0) {
        if (t.rtti.reorder)
          t.rtti.reorder(t, owner, sibling)
      }
      t !== existing && callRender(t, owner)
      sibling = t
    }
    inst.children = children
  }
}

function reconcileSorted(owner: Token): void {
  const inst = owner.mounted?.instance as Instance | undefined
  if (inst !== undefined && gBuffer !== undefined) {
    const children = gBuffer.sort(compareRefs)
    gBuffer = undefined
    let sibling: Token | undefined = undefined
    let i = 0, j = 0
    while (i < inst.children.length || j < children.length) {
      const existing = inst.children[i]
      let t = children[j]
      const diff = compareNullable(t, existing, compareRefs)
      if (diff > 0) {
        callUnmount(existing, owner, existing)
        i++
      }
      else {
        if (sibling !== undefined && t.id === sibling.id)
          throw new Error(`duplicate id '${sibling.id}' inside '${owner.id}'`)
        if (diff < 0) {
          callMount(t, owner, sibling)
          j++
        }
        else { // diff === 0
          if (t.state !== RenderWithParent && attributesAreEqual(t.state, existing.state))
            t = children[j] = existing // skip re-rendering and preserve existing ref
          else
            t.mounted = existing.mounted // reuse existing instance for re-rendering
          i++, j++
        }
        t !== existing && callRender(t, owner)
        sibling = t
      }
    }
    inst.children = children
  }
}

function compareRefs(t1: Token, t2: Token): number {
  return t1.id.localeCompare(t2.id)
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

function getRefTraceId(t: Token): string {
  return `${t.rtti.name}:${t.id}`
}

const BlankToken: Token<any, any> = {
  id: 'blank',
  state: RenderWithParent,
  render: () => { /* nop */ },
  rtti: { name: 'blank', sorting: false },
  mounted: new Mounted(0, new Instance()),
}

let gOwner: Token<any, any, any> = BlankToken
let gBuffer: Token[] | undefined = undefined
let gTrace: string | undefined = undefined
let gTraceMask: string = 'r'
