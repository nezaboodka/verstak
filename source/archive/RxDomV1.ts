// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.
import { reactive, nonreactive, Transaction, Rx, options, Reentrance } from "reactronic"
import { Render, SuperRender, RxNodeType, RxNodeInstance, RxNode } from "./RxDomV1.Types"

// BasicNodeType

export class BasicNodeType<E, O> implements RxNodeType<E, O> {
  constructor(
    readonly name: string,
    readonly sequential: boolean) {
  }

  initialize(node: RxNode<E, O>): void {
    if (!node.inline)
      Rx.setLoggingHint(node, node.id)
  }

  render(node: RxNode<E, O>, args: unknown): void {
    const inst = node.instance
    if (!inst)
      throw new Error("element must be initialized before rendering")
    if (inst.buffer)
      throw new Error("rendering re-entrance is not supported yet")
    inst.buffer = []
    let result: any
    if (node.superRender)
      result = node.superRender(options => {
        const res = node.render(inst.native!, options)
        if (res instanceof Promise)
          return res.then() // causes wrapping of then/catch to execute within current creator and host
        else
          return options
      }, inst.native!)
    else
      result = node.render(inst.native!, args as O)
    if (result instanceof Promise)
      result = result.then( // causes wrapping of then/catch to execute within current creator and host
        value => { RxDom.renderChildrenThenDo(NOP); return value }, // ignored if rendered already
        error => { console.log(error); RxDom.renderChildrenThenDo(NOP) }) // do not render children in case of creator error
    else
      RxDom.renderChildrenThenDo(NOP) // ignored if rendered already
  }

  finalize(node: RxNode<E, O>, initiator: RxNode): void {
    const inst = node.instance
    if (inst) {
      inst.native = undefined
      if (!node.inline && node.instance) // TODO: Consider creating one transaction for all finalizations at once
        Transaction.separate(() => Rx.dispose(node.instance))
      for (const x of inst.children)
        tryToFinalize(x, initiator)
      for (const x of inst.guests)
        tryToFinalize(x, initiator)
    }
  }
}

// RxNodeInstanceImpl

export class RxNodeInstanceImpl<E = unknown, O = void> implements RxNodeInstance<E, O> {
  private static gUuid: number = 0
  readonly uuid: number
  readonly level: number
  revision: number = ~0
  native?: E = undefined
  model?: unknown = undefined
  children: ReadonlyArray<RxNode> = EMPTY
  buffer: Array<RxNode> | undefined = undefined
  guests: ReadonlyArray<RxNode> = EMPTY
  resizeObserver?: ResizeObserver = undefined

  constructor(level: number) {
    this.uuid = ++RxNodeInstanceImpl.gUuid
    this.level = level
  }

  @reactive @options({
    reentrance: Reentrance.CancelPrevious,
    triggeringArgs: true,
    noSideEffects: true })
  rerender(node: RxNode<E, O>): void {
    invokeRender(node, node.args)
    Rx.configureCurrentOperation({ order: this.level })
  }
}

// RxDom

export class RxDom {
  public static readonly basic = new BasicNodeType<any, any>("basic", false)

  static Root<T>(render: () => T): T {
    const inst = SYSTEM.instance!
    if (inst.buffer)
      throw new Error("rendering re-entrance is not supported yet")
    inst.buffer = []
    let result: any = render()
    if (result instanceof Promise)
      result = result.then( // causes wrapping of then/catch to execute within current creator and host
        value => { Transaction.run(null, RxDom.renderChildrenThenDo, NOP); return value }, // ignored if rendered already
        error => { console.log(error); Transaction.run(null, RxDom.renderChildrenThenDo, NOP) }) // try to render children regardless the creator
    else
      Transaction.run(null, RxDom.renderChildrenThenDo, NOP) // ignored if rendered already
    return result
  }

  static Node<E = unknown, O = void>(id: string, args: any,
    render: Render<E, O>, superRender?: SuperRender<E, O>,
    type?: RxNodeType<E, O>, inline?: boolean,
    creator?: RxNode, host?: RxNode): RxNode<E, O> {
    const o = creator ?? gCreator
    const inst = o.instance
    if (!inst)
      throw new Error("element must be initialized before children")
    if (type === undefined)
      type = RxDom.basic
    if (!host)
      host = gHost
    const node = new RxNode<E, O>(id, args, render, superRender, 0, false, type, inline ?? false, o, host)
    if (inst.buffer === undefined)
      throw new Error("children are rendered already") // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const rev = host.instance?.revision ?? ~1
    if (rev >= ~0) // emit only if host is alive
      inst.buffer.push(node)
    return node
  }

  static renderChildrenThenDo(action: () => void): void {
    const node = gCreator
    if (node.type.sequential)
      RxDom.mergeAndRenderSequentialChildren(node, action)
    else
      RxDom.mergeAndRenderChildren(node, action)
  }

  static usingAnotherHost<E>(host: RxNode<E>, run: (e: E) => void): void {
    const native = host.instance?.native
    if (native !== undefined) {
      const outer = gHost
      try {
        gHost = host
        run(native)
      }
      finally {
        gHost = outer
      }
    }
  }

  static createRootNode<E>(id: string, sequential: boolean, native: E): RxNode<E> {
    const inst = new RxNodeInstanceImpl<E>(0)
    const node = new RxNode<E>(
      id,                       // id
      null,                     // args
      () => { /* nop */ },      // render
      undefined,                // superRender
      0,                        // priority
      false,                    // children shuffling
      { name: id, sequential }, // type
      false,                    // inline
      {} as RxNode,             // creator (lifecycle manager)
      {} as RxNode,             // host (rendering parent)
      inst)                     // instance
    // Initialize
    const a: any = node
    a["creator"] = node
    a["host"] = node
    inst.native = native
    return node
  }

  static get self(): RxNode {
    return gCreator
  }

  static currentNodeInstance<T>(): { model?: T } {
    const inst = gCreator.instance
    if (!inst)
      throw new Error("currentNodeInstance function can be called only inside rendering function")
    return inst as { model?: T }
  }

  static currentNodeInstanceInternal<E>(): RxNodeInstanceImpl<E> {
    const inst = gCreator.instance
    if (!inst)
      throw new Error("currentNodeInstanceInternal function can be called only inside rendering function")
    return inst
  }

  static currentNodeRevision(): number {
    return gCreator.instance?.revision ?? ~0
  }

  static forAll<E>(action: (e: E) => void): void {
    RxDom.forEachChildRecursively(SYSTEM, action)
  }

  // Internal

  private static mergeAndRenderSequentialChildren(node: RxNode, finish: () => void): void {
    const inst = node.instance
    if (inst !== undefined && inst.buffer !== undefined) {
      try {
        const existing = inst.children
        const sequenced = inst.buffer
        const sorted = sequenced.slice().sort(compareNodes)
        inst.buffer = undefined
        // Merge loop (always synchronous) - link to existing or finalize
        let host = inst
        let guests: Array<RxNode> = EMPTY
        let sibling: RxNode | undefined = undefined
        let i = 0, j = 0
        while (i < existing.length) {
          const old = existing[i]
          const x = sorted[j]
          const diff = x !== undefined ? compareNodes(x, old) : 1
          if (diff <= 0) {
            const h = x.host.instance
            if (h !== inst) {
              if (h !== host) {
                RxDom.mergeGuests(host, inst, guests)
                guests = []
                host = h!
              }
              guests.push(x)
            }
            if (sibling !== undefined && x.id === sibling.id)
              throw new Error(`duplicate id '${sibling.id}' inside '${node.id}'`)
            if (diff === 0) {
              x.instance = old.instance
              x.old = old
              i++, j++ // re-rendering is called below
            }
            else // diff < 0
              j++ // initial rendering is called below
            sibling = x
          }
          else { // diff > 0
            if (!Transaction.isCanceled)
              tryToFinalize(old, old)
            i++
          }
        }
        if (host !== inst)
          RxDom.mergeGuests(host, inst, guests)
        // Merge loop - initialize, render, re-render
        sibling = undefined
        i = 0
        while (i < sequenced.length && !Transaction.isCanceled) {
          const x = sequenced[i]
          const old = x.old
          x.old = undefined // unlink to make it available for garbage collection
          x.prevSibling = sibling // link with sibling
          const instance = x.instance
          if (old && instance) {
            if (sibling?.instance !== old.prevSibling?.instance) // if sequence is changed
              x.type.mount?.(x)
            if (x.inline || !argsAreEqual(x.args, old.args))
              tryToRender(x) // re-rendering
          }
          else {
            tryToInitialize(x)
            tryToRender(x) // initial rendering
          }
          if (x.native)
            sibling = x
          i++
        }
        if (!Transaction.isCanceled)
          inst.children = sorted // switch to the new list
      }
      finally {
        finish()
      }
    }
  }


  private static mergeAndRenderChildren(node: RxNode, finish: () => void): void {
    const inst = node.instance
    if (inst !== undefined && inst.buffer !== undefined) {
      let promised: Promise<void> | undefined = undefined
      try {
        const existing = inst.children
        const buffer = inst.buffer.sort(compareNodes)
        inst.buffer = undefined
        // Merge loop (always synchronous): link, render/initialize (priority 0), finalize
        let p1: Array<RxNode> | undefined = undefined
        let p2: Array<RxNode> | undefined = undefined
        let host = inst
        let guests: Array<RxNode> = EMPTY
        let sibling: RxNode | undefined = undefined
        let i = 0, j = 0
        while (i < existing.length || j < buffer.length) {
          const old = existing[i]
          const x = buffer[j]
          const diff = compareNullable(x, old, compareNodes)
          if (diff <= 0) {
            const h = x.host.instance
            if (h !== inst) {
              if (h !== host) {
                RxDom.mergeGuests(host, inst, guests)
                guests = []
                host = h!
              }
              guests.push(x)
            }
            if (sibling !== undefined && x.id === sibling.id)
              throw new Error(`duplicate id '${sibling.id}' inside '${node.id}'`)
            if (diff === 0) {
              if (old.instance) {
                x.instance = old.instance // link to the existing instance
                if (x.inline || !argsAreEqual(x.args, old.args)) {
                  if (!Transaction.isCanceled) {
                    if (x.priority === 0)
                      tryToRender(x) // re-rendering
                    else if (x.priority === 1)
                      p1 = push(p1, x)
                    else
                      p2 = push(p2, x)
                  }
                }
              }
              else {
                if (!Transaction.isCanceled) {
                  if (x.priority === 0) {
                    tryToInitialize(x)
                    tryToRender(x) // initial rendering
                  }
                  else if (x.priority === 1)
                    p1 = push(p1, x)
                  else
                    p2 = push(p2, x)
                }
              }
              i++, j++
            }
            else { // diff < 0
              if (!Transaction.isCanceled) {
                if (x.priority === 0) {
                  tryToInitialize(x)
                  tryToRender(x) // initial rendering
                }
                else if (x.priority === 1)
                  p1 = push(p1, x)
                else
                  p2 = push(p2, x)
              }
              j++
            }
            sibling = x
          }
          else { // diff > 0
            if (!Transaction.isCanceled)
              tryToFinalize(old, old)
            i++
          }
        }
        if (host !== inst)
          RxDom.mergeGuests(host, inst, guests)
        if (!Transaction.isCanceled) {
          inst.children = buffer // switch to the new list
          if (p1 !== undefined || p2 !== undefined) // Incremental rendering (if any)
            promised = RxDom.renderIncrementally(node, p1, p2).then(finish, finish)
        }
      }
      finally {
        if (!promised)
          finish()
      }
    }
  }

  private static async renderIncrementally(parent: RxNode,
    p1: Array<RxNode> | undefined, p2: Array<RxNode> | undefined,
    checkEveryN: number = 30, timeLimit: number = 12): Promise<void> {
    if (Transaction.isFrameOver(checkEveryN, timeLimit))
      await Transaction.requestNextFrame()
    if (!Transaction.isCanceled) {
      if (p1 !== undefined) {
        if (parent.childrenShuffling)
          shuffle(p1)
        for (const x of p1) {
          if (!x.instance)
            tryToInitialize(x)
          tryToRender(x)
          if (Transaction.isCanceled)
            break
          if (Transaction.isFrameOver(checkEveryN, timeLimit))
            await Transaction.requestNextFrame()
          if (Transaction.isCanceled)
            break
        }
      }
      if (p2 !== undefined) {
        if (parent.childrenShuffling)
          shuffle(p2)
        for (const x of p2) {
          if (!x.instance)
            tryToInitialize(x)
          tryToRender(x)
          if (Transaction.isCanceled)
            break
          if (Transaction.isFrameOver(checkEveryN, timeLimit))
            await Transaction.requestNextFrame()
          if (Transaction.isCanceled)
            break
        }
      }
    }
  }

  private static mergeGuests(host: RxNodeInstance, creator: RxNodeInstance, guests: Array<RxNode>): void {
    if (host !== creator) {
      const existing = host.guests
      const merged: Array<RxNode> = []
      let i = 0, j = 0 // TODO: Consider using binary search to find initial index
      while (i < existing.length || j < guests.length) {
        const old = existing[i]
        const x = guests[j]
        const diff = compareNullable(x, old, compareNodes)
        if (diff <= 0) {
          merged.push(x)
          if (diff === 0)
            i++, j++
          else // diff < 0
            j++
        }
        else { // diff > 0
          if (old.creator.instance !== creator)
            merged.push(old) // leave children of other creators untouched
          i++
        }
      }
      host.guests = merged
    }
  }

  private static forEachChildRecursively(node: RxNode, action: (e: any) => void): void {
    const inst = node.instance
    if (inst) {
      const native = inst.native
      native && action(native)
      inst.children.forEach(x => RxDom.forEachChildRecursively(x, action))
    }
  }
}

// Internal

function tryToRender(node: RxNode): void {
  const inst = node.instance!
  if (node.inline) // inline elements are always rendered
    invokeRender(node, node.args)
  else // rendering of reactive elements is cached to avoid redundant calls
    nonreactive(inst.rerender, node)
}

function tryToInitialize(node: RxNode): RxNodeInstanceImpl {
  const type = node.type
  const inst = node.instance = new RxNodeInstanceImpl(node.creator.instance!.level + 1)
  type.initialize?.(node)
  type.mount?.(node)
  if (!node.inline)
    Rx.setLoggingHint(inst, node.id)
  return inst
}

function tryToFinalize(node: RxNode, initiator: RxNode): void {
  const inst = node.instance
  if (inst && inst.revision >= ~0) {
    inst.revision = ~inst.revision
    invokeFinalize(node, initiator)
  }
}

function invokeRender<E, O>(node: RxNode<E, O>, args: unknown): void {
  const host = node.native !== undefined ? node : node.host
  runUnder(node, host, () => {
    node.instance!.revision++
    const type = node.type
    if (type.render)
      type.render(node, args)
    else
      RxDom.basic.render(node, args)
  })
}

function invokeFinalize(node: RxNode, initiator: RxNode): void {
  const type = node.type
  if (type.finalize)
    type.finalize(node, initiator)
  else
    RxDom.basic.finalize(node, initiator) // default finalize
}

function wrap(func: (...args: any[]) => any): (...args: any[]) => any {
  const creator = gCreator
  const host = gHost
  const wrappedRendering = (...args: any[]): any => {
    return runUnder(creator, host, func, ...args)
  }
  return wrappedRendering
}

function runUnder(creator: RxNode, host: RxNode, func: (...args: any[]) => any, ...args: any[]): any {
  const outerCreator = gCreator
  const outerHost = gHost
  try {
    gCreator = creator
    gHost = host
    return func(...args)
  }
  finally {
    gHost = outerHost
    gCreator = outerCreator
  }
}

function compareNodes(node1: RxNode, node2: RxNode): number {
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

function push<T>(array: Array<T> | undefined, item: T): Array<T> {
  if (array == undefined)
    array = new Array<T>()
  array.push(item)
  return array
}

function shuffle<T>(array: Array<T>): Array<T> {
  let i = array.length - 1
  while (i >= 0) {
    const j = Math.floor(Math.random() * i)
    const t = array[i]
    array[i] = array[j]
    array[j] = t
    i--
  }
  return array
}

// Support asynchronous programing automatically

const ORIGINAL_PROMISE_THEN = Promise.prototype.then

function reactronicDomHookedThen(this: any,
  resolve?: ((value: any) => any | PromiseLike<any>) | undefined | null,
  reject?: ((reason: any) => never | PromiseLike<never>) | undefined | null): Promise<any | never> {
  resolve = resolve ? wrap(resolve) : resolveReturn
  reject = reject ? wrap(reject) : rejectRethrow
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

Promise.prototype.then = reactronicDomHookedThen

// Globals

const NOP = (): void => { /* nop */ }
const EMPTY: Array<RxNode> = Object.freeze([]) as any
const SYSTEM = RxDom.createRootNode<unknown>("SYSTEM", false, "SYSTEM")
let gCreator: RxNode = SYSTEM
let gHost: RxNode = SYSTEM
