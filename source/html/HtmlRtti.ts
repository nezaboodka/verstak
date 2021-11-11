// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Reactronic } from 'reactronic'
import { render, unmount, Manifest, Rtti, forAll, manifest } from '../core/api'

export abstract class AbstractHtmlRtti<E extends Element> implements Rtti<E, any> {
  static isDebugAttributeEnabled: boolean = false

  constructor(
    readonly name: string,
    readonly sorting: boolean = false) {
  }

  render(m: Manifest<E, any>): void {
    const self = m.instance! // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const native = self.native!
    const outer = AbstractHtmlRtti.gContext
    try { // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      AbstractHtmlRtti.gContext = m // console.log(`${'  '.repeat(Math.abs(ref.mounted!.level))}render(${e.id} r${ref.mounted!.cycle})`)
      render(m) // proceed
      // TODO: native.sensorData.drag handling?
      AbstractHtmlRtti.blinkingEffect && blink(native, self.revision)
      if (AbstractHtmlRtti.isDebugAttributeEnabled)
        native.setAttribute('rdbg', `${self.revision}:    ${Reactronic.why()}`)
    }
    finally {
      AbstractHtmlRtti.gContext = outer
    }
  }

  mount(m: Manifest<E, any>, sibling?: Manifest): void {
    const parent = m.renderingParent.instance?.native as Element ?? global.document.body // TODO: Get rid of document.body here
    const native = this.createElement(m) // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    native.id = m.id // console.log(`${'  '.repeat(Math.abs(ref.mounted!.level))}${parent.id}.appendChild(${e.id} r${ref.mounted!.cycle})`)
    if (!m.managingParent.rtti.sorting) {
      if (sibling !== undefined) {
        const prev = sibling.instance?.native
        if (prev instanceof Element)
          parent.insertBefore(native, prev.nextSibling)
      }
      else
        parent.insertBefore(native, parent.firstChild)
    }
    else
      parent.appendChild(native)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    m.instance!.native = native
  }

  protected abstract createElement(m: Manifest<E, any>): E

  reorder(m: Manifest<E, any>, sibling?: Manifest): void {
    const parent = m.renderingParent.instance?.native as Element ?? global.document.body // TODO: Get rid of document.body here
    const prev = sibling?.instance?.native
    const native = m.instance?.native
    if (native && prev instanceof Element && prev.nextSibling !== native) { // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      // console.log(`${'  '.repeat(Math.abs(ref.mounted!.level))}${parent.id}.insertBefore(${(prev.nextSibling! as any)?.id})`)
      parent.insertBefore(native, prev.nextSibling)
    }
  }

  unmount(m: Manifest<E, any>, cause: Manifest): void {
    const self = m.instance
    const native = self?.native
    if (!AbstractHtmlRtti.unmounting && native && native.parentElement) {
      AbstractHtmlRtti.unmounting = native // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      try { // console.log(`${'  '.repeat(Math.abs(ref.mounted!.level))}${e.parentElement.id}.removeChild(${e.id} r${ref.mounted!.cycle})`)
        self?.resizing?.unobserve(native)
        native.remove()
        unmount(m, cause) // proceed
      }
      finally {
        AbstractHtmlRtti.unmounting = undefined
      }
    }
    else { // console.log(`${'  '.repeat(Math.abs(ref.mounted!.level))}???.unmount(${ref.id} r${ref.mounted!.cycle})`)
      if (native)
        self?.resizing?.unobserve(native)
      unmount(m, cause) // proceed
    }
  }

  static gContext: Manifest<any, any> = manifest(
    'global.document.body',
    undefined,
    () => { /* nop */ },
    undefined,
    { name: 'global.document.body', sorting: false })
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
