// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Reactronic } from 'reactronic'
import { render, unmount, Manifest, Rtti } from '../core'

export function usingParent<T>(e: HTMLElement, func: (...args: any[]) => T, ...args: any[]): T {
  const outer = WebRtti.current
  try {
    return func(...args)
  }
  finally {
    WebRtti.current = outer
  }
}

export abstract class WebRtti<E extends Element> implements Rtti<E, any> {
  static isDebugAttributeEnabled: boolean = false

  constructor(
    readonly name: string,
    readonly sorting: boolean = false) {
  }

  render(m: Manifest<E, any>): void {
    const outer = WebRtti.current
    try { // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const mounted = m.mounted! // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const native = mounted.instance!.native!
      WebRtti.current = native // console.log(`${'  '.repeat(Math.abs(ref.mounted!.level))}render(${e.id} r${ref.mounted!.cycle})`)
      render(m) // proceed
      WebRtti.blinkingEffect && blink(native, mounted.cycle)
      if (WebRtti.isDebugAttributeEnabled)
        native.setAttribute('rdbg', `${mounted.cycle}:    ${Reactronic.why()}`)
    }
    finally {
      WebRtti.current = outer
    }
  }

  mount(m: Manifest<E, any>, owner: Manifest, sibling?: Manifest): void {
    const parent = owner.mounted?.instance?.native as Element ?? WebRtti.current // TODO: To get rid of this workaround
    const native = this.createElement(m) // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    native.id = m.id // console.log(`${'  '.repeat(Math.abs(ref.mounted!.level))}${parent.id}.appendChild(${e.id} r${ref.mounted!.cycle})`)
    if (!owner.rtti.sorting) {
      if (sibling !== undefined) {
        const prev = sibling.mounted?.instance?.native
        if (prev instanceof Element)
          parent.insertBefore(native, prev.nextSibling)
      }
      else
        parent.insertBefore(native, parent.firstChild)
    }
    else
      parent.appendChild(native)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    m.mounted!.instance!.native = native
  }

  protected abstract createElement(m: Manifest<E, any>): E

  reorder(m: Manifest<E, any>, owner: Manifest, sibling?: Manifest): void {
    const parent = owner.mounted?.instance?.native as Element ?? WebRtti.current // TODO: To get rid of this workaround
    const prev = sibling?.mounted?.instance?.native
    const native = m.mounted?.instance?.native
    if (native && prev instanceof Element && prev.nextSibling !== native) { // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      // console.log(`${'  '.repeat(Math.abs(ref.mounted!.level))}${parent.id}.insertBefore(${(prev.nextSibling! as any)?.id})`)
      parent.insertBefore(native, prev.nextSibling)
    }
  }

  unmount(m: Manifest<E, any>, owner: Manifest, cause: Manifest): void {
    const native = m.mounted?.instance?.native
    if (!WebRtti.unmounting && native && native.parentElement) {
      WebRtti.unmounting = native // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      try { // console.log(`${'  '.repeat(Math.abs(ref.mounted!.level))}${e.parentElement.id}.removeChild(${e.id} r${ref.mounted!.cycle})`)
        native.remove()
        unmount(m, owner, cause) // proceed
      }
      finally {
        WebRtti.unmounting = undefined
      }
    }
    else { // console.log(`${'  '.repeat(Math.abs(ref.mounted!.level))}???.unmount(${ref.id} r${ref.mounted!.cycle})`)
      unmount(m, owner, cause) // proceed
    }
  }

  static current: Element = global.document?.body
  static unmounting?: Element = undefined
  static blinkingEffect: string | undefined = undefined
}

function blink(e: Element, cycle: number): void {
  const n1 = cycle % 2 + 1
  const n2 = n1 % 2 + 1
  e.classList.toggle(`${WebRtti.blinkingEffect}-${n1}`, true)
  e.classList.toggle(`${WebRtti.blinkingEffect}-${n2}`, false)
}

export class HtmlRtti<E extends HTMLElement> extends WebRtti<E> {
  protected createElement(m: Manifest<E, any>): E {
    return document.createElement(m.rtti.name) as E
  }
}

export class SvgRtti<E extends SVGElement> extends WebRtti<E> {
  protected createElement(e: Manifest<E, any>): E {
    return document.createElementNS('http://www.w3.org/2000/svg', e.rtti.name) as E
  }
}
