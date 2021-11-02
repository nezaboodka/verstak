// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Reactronic } from 'reactronic'
import { render, unmount, Manifest, Rtti, forAll } from '../core/api'

export function usingParent<T>(e: HTMLElement, func: (...args: any[]) => T, ...args: any[]): T {
  const outer = AbstractHtmlRtti.current
  try {
    return func(...args)
  }
  finally {
    AbstractHtmlRtti.current = outer
  }
}

export abstract class AbstractHtmlRtti<E extends Element> implements Rtti<E, any> {
  static isDebugAttributeEnabled: boolean = false

  constructor(
    readonly name: string,
    readonly sorting: boolean = false) {
  }

  render(m: Manifest<E, any>): void {
    const outer = AbstractHtmlRtti.current
    try { // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const mounted = m.mounted! // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const instance = mounted.instance! // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const native = instance.native!
      AbstractHtmlRtti.current = native // console.log(`${'  '.repeat(Math.abs(ref.mounted!.level))}render(${e.id} r${ref.mounted!.cycle})`)
      render(m) // proceed

      // TODO: native.sensorData.drag handling?

      AbstractHtmlRtti.blinkingEffect && blink(native, mounted.cycle)
      if (AbstractHtmlRtti.isDebugAttributeEnabled)
        native.setAttribute('rdbg', `${mounted.cycle}:    ${Reactronic.why()}`)
    }
    finally {
      AbstractHtmlRtti.current = outer
    }
  }

  mount(m: Manifest<E, any>, owner: Manifest, sibling?: Manifest): void {
    const parent = owner.mounted?.instance?.native as Element ?? AbstractHtmlRtti.current // TODO: To get rid of this workaround
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
    const parent = owner.mounted?.instance?.native as Element ?? AbstractHtmlRtti.current // TODO: To get rid of this workaround
    const prev = sibling?.mounted?.instance?.native
    const native = m.mounted?.instance?.native
    if (native && prev instanceof Element && prev.nextSibling !== native) { // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      // console.log(`${'  '.repeat(Math.abs(ref.mounted!.level))}${parent.id}.insertBefore(${(prev.nextSibling! as any)?.id})`)
      parent.insertBefore(native, prev.nextSibling)
    }
  }

  unmount(m: Manifest<E, any>, owner: Manifest, cause: Manifest): void {
    const instance = m.mounted?.instance
    const native = instance?.native
    if (!AbstractHtmlRtti.unmounting && native && native.parentElement) {
      AbstractHtmlRtti.unmounting = native // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      try { // console.log(`${'  '.repeat(Math.abs(ref.mounted!.level))}${e.parentElement.id}.removeChild(${e.id} r${ref.mounted!.cycle})`)
        instance?.resizeObserver?.unobserve(native)
        native.remove()
        unmount(m, owner, cause) // proceed
      }
      finally {
        AbstractHtmlRtti.unmounting = undefined
      }
    }
    else { // console.log(`${'  '.repeat(Math.abs(ref.mounted!.level))}???.unmount(${ref.id} r${ref.mounted!.cycle})`)
      if (native)
        instance?.resizeObserver?.unobserve(native)
      unmount(m, owner, cause) // proceed
    }
  }

  static current: Element = global.document?.body
  static unmounting?: Element = undefined

  private static _blinkingEffect: string | undefined = undefined
  static set blinkingEffect(value: string | undefined) {
    if (value === undefined) {
      forAll((e: any) => {
        if (e instanceof HTMLElement)
          e.classList.remove(`${AbstractHtmlRtti.blinkingEffect}-0`, `${AbstractHtmlRtti.blinkingEffect}-1`)
      })
    }
    AbstractHtmlRtti._blinkingEffect = value
  }
  static get blinkingEffect(): string | undefined {
    return AbstractHtmlRtti._blinkingEffect
  }
}

function blink(e: Element, cycle: number): void {
  const n1 = cycle % 2
  const n2 = 1 >> n1
  e.classList.toggle(`${AbstractHtmlRtti.blinkingEffect}-${n1}`, true)
  e.classList.toggle(`${AbstractHtmlRtti.blinkingEffect}-${n2}`, false)
}

export class HtmlRtti<E extends HTMLElement> extends AbstractHtmlRtti<E> {
  protected createElement(m: Manifest<E, any>): E {
    return document.createElement(m.rtti.name) as E
  }
}

export class SvgRtti<E extends SVGElement> extends AbstractHtmlRtti<E> {
  protected createElement(e: Manifest<E, any>): E {
    return document.createElementNS('http://www.w3.org/2000/svg', e.rtti.name) as E
  }
}
