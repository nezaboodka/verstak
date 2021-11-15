// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Reactronic } from 'reactronic'
import { baseRender, baseFinalize, Declaration, Rtti, forAll } from '../core/api'

export abstract class AbstractHtmlRtti<E extends Element> implements Rtti<E, any> {
  static isDebugAttributeEnabled: boolean = false
  static gNativeParent: Declaration<any, any> = Declaration.createRoot('html > body', global.document.body)
  static gFinalizing?: Element = undefined
  private static _blinkingEffect: string | undefined = undefined

  constructor(
    readonly name: string,
    readonly unordered: boolean = false) {
  }

  initialize(d: Declaration<E, any>): void {
    const native = this.createElement(d)
    native.id = d.id
    d.instance!.native = native
    // console.log(`${'  '.repeat(Math.abs(self.level))}${parent.id}.appendChild(${e.id} r${self.revision})`)
  }

  place(d: Declaration<E, any>, sibling?: Declaration): void {
    const self = d.instance
    const native = self?.native
    if (native) {
      const parent = d.renderingParent
      const nParent = parent.instance?.native
      if (nParent !== native.parentNode) {
        native.remove() // remove from previous parent
        if (nParent instanceof Element) {
          if (sibling) {
            const nSibling = sibling.instance?.native
            if (nSibling instanceof Element && nSibling.nextSibling !== native)
              nParent.insertBefore(native, nSibling.nextSibling)
          }
          else
            nParent.appendChild(native)
          // console.log(`${'  '.repeat(Math.abs(self.level))}${parent.id}.insertBefore(${sibling?.id ?? '<null>'})`)
        }
      }
    }
  }

  render(d: Declaration<E, any>): void {
    const self = d.instance! // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const native = self.native!
    const outer = AbstractHtmlRtti.gNativeParent
    try { // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      AbstractHtmlRtti.gNativeParent = d // console.log(`${'  '.repeat(Math.abs(self.level))}render(${e.id} r${self.revision})`)
      baseRender(d)
      // TODO: native.sensorData.drag handling?
      AbstractHtmlRtti.blinkingEffect && blink(native, self.revision)
      if (AbstractHtmlRtti.isDebugAttributeEnabled)
        native.setAttribute('rdbg', `${self.revision}:    ${Reactronic.why()}`)
    }
    finally {
      AbstractHtmlRtti.gNativeParent = outer
    }
  }

  finalize(d: Declaration<E, any>, cause: Declaration): void {
    const self = d.instance
    const native = self?.native
    if (!AbstractHtmlRtti.gFinalizing && native && native.parentElement) {
      AbstractHtmlRtti.gFinalizing = native // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      try { // console.log(`${'  '.repeat(Math.abs(self.level))}${e.parentElement.id}.removeChild(${e.id} r${self.revision})`)
        self?.resizing?.unobserve(native)
        native.remove()
        baseFinalize(d, cause) // proceed
      }
      finally {
        AbstractHtmlRtti.gFinalizing = undefined
      }
    }
    else { // console.log(`${'  '.repeat(Math.abs(self.level))}???.finalize(${ref.id} r${self.revision})`)
      if (native)
        self?.resizing?.unobserve(native)
      baseFinalize(d, cause) // proceed
    }
  }

  static get blinkingEffect(): string | undefined {
    return AbstractHtmlRtti._blinkingEffect
  }

  static set blinkingEffect(value: string | undefined) {
    if (value === undefined) {
      forAll((e: any) => {
        if (e instanceof HTMLElement)
          e.classList.remove(`${AbstractHtmlRtti.blinkingEffect}-0`, `${AbstractHtmlRtti.blinkingEffect}-1`)
      })
    }
    AbstractHtmlRtti._blinkingEffect = value
  }

  protected abstract createElement(m: Declaration<E, any>): E
}

function blink(e: Element, cycle: number): void {
  const n1 = cycle % 2
  const n2 = 1 >> n1
  e.classList.toggle(`${AbstractHtmlRtti.blinkingEffect}-${n1}`, true)
  e.classList.toggle(`${AbstractHtmlRtti.blinkingEffect}-${n2}`, false)
}

export class HtmlRtti<E extends HTMLElement> extends AbstractHtmlRtti<E> {
  protected createElement(d: Declaration<E, any>): E {
    return document.createElement(d.rtti.name) as E
  }
}

export class SvgRtti<E extends SVGElement> extends AbstractHtmlRtti<E> {
  protected createElement(d: Declaration<E, any>): E {
    return document.createElementNS('http://www.w3.org/2000/svg', d.rtti.name) as E
  }
}
