// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Reactronic } from 'reactronic'
import { RxDom, NodeInfo, Rtti } from '../core/api'

export abstract class AbstractHtmlRtti<E extends Element> implements Rtti<E, any> {
  static isDebugAttributeEnabled: boolean = false
  static gNativeParent: NodeInfo<any, any> = RxDom.createStaticDeclaration('html > body', global.document.body)
  static gFinalizing?: Element = undefined
  private static _blinkingEffect: string | undefined = undefined

  constructor(
    readonly name: string,
    readonly unordered: boolean = false) {
  }

  initialize(node: NodeInfo<E, any>): void {
    const native = this.createElement(node)
    native.id = node.id
    node.instance!.native = native
    // console.log(`${'  '.repeat(Math.abs(self.level))}${parent.id}.appendChild(${e.id} r${self.revision})`)
  }

  host(node: NodeInfo<E, any>, sibling?: NodeInfo): void {
    const self = node.instance
    const native = self?.native
    if (native) {
      const nativeParentNode = node.host.instance?.native
      if (nativeParentNode !== native.parentNode) {
        native.remove() // remove from previous parent
        if (nativeParentNode instanceof Element) {
          if (sibling) {
            const nSibling = sibling.instance?.native
            if (nSibling instanceof Element && nSibling.nextSibling !== native)
              nativeParentNode.insertBefore(native, nSibling.nextSibling)
          }
          else
            nativeParentNode.appendChild(native)
          // console.log(`${'  '.repeat(Math.abs(self.level))}${parent.id}.insertBefore(${sibling?.id ?? '<null>'})`)
        }
      }
    }
  }

  render(node: NodeInfo<E, any>): void {
    const self = node.instance! // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const native = self.native!
    const outer = AbstractHtmlRtti.gNativeParent
    try { // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      AbstractHtmlRtti.gNativeParent = node // console.log(`${'  '.repeat(Math.abs(self.level))}render(${e.id} r${self.revision})`)
      RxDom.render(node)
      // TODO: native.sensorData.drag handling?
      AbstractHtmlRtti.blinkingEffect && blink(native, self.revision)
      if (AbstractHtmlRtti.isDebugAttributeEnabled)
        native.setAttribute('rdbg', `${self.revision}:    ${Reactronic.why()}`)
    }
    finally {
      AbstractHtmlRtti.gNativeParent = outer
    }
  }

  finalize(node: NodeInfo<E, any>, cause: NodeInfo): void {
    const self = node.instance
    const native = self?.native
    if (!AbstractHtmlRtti.gFinalizing && native && native.parentElement) {
      AbstractHtmlRtti.gFinalizing = native // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      try { // console.log(`${'  '.repeat(Math.abs(self.level))}${e.parentElement.id}.removeChild(${e.id} r${self.revision})`)
        self?.resizing?.unobserve(native)
        native.remove()
        RxDom.finalize(node, cause) // proceed
      }
      finally {
        AbstractHtmlRtti.gFinalizing = undefined
      }
    }
    else { // console.log(`${'  '.repeat(Math.abs(self.level))}???.finalize(${ref.id} r${self.revision})`)
      if (native)
        self?.resizing?.unobserve(native)
      RxDom.finalize(node, cause) // proceed
    }
  }

  static get blinkingEffect(): string | undefined {
    return AbstractHtmlRtti._blinkingEffect
  }

  static set blinkingEffect(value: string | undefined) {
    if (value === undefined) {
      RxDom.forAll((e: any) => {
        if (e instanceof HTMLElement)
          e.classList.remove(`${AbstractHtmlRtti.blinkingEffect}-0`, `${AbstractHtmlRtti.blinkingEffect}-1`)
      })
    }
    AbstractHtmlRtti._blinkingEffect = value
  }

  protected abstract createElement(m: NodeInfo<E, any>): E
}

function blink(e: Element, cycle: number): void {
  const n1 = cycle % 2
  const n2 = 1 >> n1
  e.classList.toggle(`${AbstractHtmlRtti.blinkingEffect}-${n1}`, true)
  e.classList.toggle(`${AbstractHtmlRtti.blinkingEffect}-${n2}`, false)
}

export class HtmlRtti<E extends HTMLElement> extends AbstractHtmlRtti<E> {
  protected createElement(node: NodeInfo<E, any>): E {
    return document.createElement(node.rtti.name) as E
  }
}

export class SvgRtti<E extends SVGElement> extends AbstractHtmlRtti<E> {
  protected createElement(node: NodeInfo<E, any>): E {
    return document.createElementNS('http://www.w3.org/2000/svg', node.rtti.name) as E
  }
}
