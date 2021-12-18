// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Rx } from 'reactronic'
import { RxDom, RxNode, RxNodeType } from '../core/api'

export abstract class AbstractHtmlNodeType<E extends Element> implements RxNodeType<E, any> {
  static isDebugAttributeEnabled: boolean = false
  static gNativeParent: RxNode = RxDom.createRootNode('html > body', true, global.document.body)
  static gSubTreeFinalization?: Element = undefined
  private static _blinkingEffect: string | undefined = undefined

  constructor(
    readonly name: string,
    readonly sequential: boolean = true) {
  }

  initialize(node: RxNode<E, any>): void {
    const native = this.createElement(node)
    native.id = node.id
    node.instance!.native = native
    // console.log(`${'  '.repeat(Math.abs(self.level))}${parent.id}.appendChild(${e.id} r${self.revision})`)
  }

  mount(node: RxNode<E, any>): void {
    const self = node.instance
    const native = self?.native
    if (native) {
      const nativeHost = node.host.native
      if (nativeHost instanceof Element) {
        const sibling = node.sibling
        if (sibling === undefined) {
          if (nativeHost !== native.parentNode || native.previousSibling !== null)
            nativeHost.prepend(native)
        }
        else if (sibling !== node) {
          if (sibling.host.native === nativeHost) {
            const nativeSibling = sibling.native
            if (nativeSibling instanceof Element) {
              if (nativeSibling.nextSibling !== native)
                nativeHost.insertBefore(native, nativeSibling.nextSibling)
            }
          }
        }
        else // non-sequential
          nativeHost.appendChild(native)
        // console.log(`${'  '.repeat(Math.abs(self.level))}${parent.id}.insertBefore(${sibling?.id ?? '<null>'})`)
      }
    }
  }

  render(node: RxNode<E, any>): void {
    const self = node.instance! // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const native = self.native!
    const outer = AbstractHtmlNodeType.gNativeParent
    try { // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      AbstractHtmlNodeType.gNativeParent = node // console.log(`${'  '.repeat(Math.abs(self.level))}render(${e.id} r${self.revision})`)
      RxDom.render(node)
      // TODO: native.sensorData.drag handling?
      AbstractHtmlNodeType.blinkingEffect && blink(native, self.revision)
      if (AbstractHtmlNodeType.isDebugAttributeEnabled)
        native.setAttribute('rdbg', `${self.revision}:    ${Rx.why()}`)
    }
    finally {
      AbstractHtmlNodeType.gNativeParent = outer
    }
  }

  finalize(node: RxNode<E, any>, cause: RxNode): void {
    const self = node.instance
    const native = self?.native
    if (!AbstractHtmlNodeType.gSubTreeFinalization && native && native.parentElement) {
      AbstractHtmlNodeType.gSubTreeFinalization = native // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      try { // console.log(`${'  '.repeat(Math.abs(self.level))}${e.parentElement.id}.removeChild(${e.id} r${self.revision})`)
        self.resizing?.unobserve(native)
        native.remove()
        RxDom.finalize(node, cause) // proceed
      }
      finally {
        AbstractHtmlNodeType.gSubTreeFinalization = undefined
      }
    }
    else { // console.log(`${'  '.repeat(Math.abs(self.level))}???.finalize(${ref.id} r${self.revision})`)
      if (native)
        self.resizing?.unobserve(native)
      RxDom.finalize(node, cause) // proceed
    }
  }

  static get blinkingEffect(): string | undefined {
    return AbstractHtmlNodeType._blinkingEffect
  }

  static set blinkingEffect(value: string | undefined) {
    if (value === undefined) {
      RxDom.forAll((e: any) => {
        if (e instanceof HTMLElement)
          e.classList.remove(`${AbstractHtmlNodeType.blinkingEffect}-0`, `${AbstractHtmlNodeType.blinkingEffect}-1`)
      })
    }
    AbstractHtmlNodeType._blinkingEffect = value
  }

  protected abstract createElement(m: RxNode<E, any>): E
}

function blink(e: Element, cycle: number): void {
  const n1 = cycle % 2
  const n2 = 1 >> n1
  e.classList.toggle(`${AbstractHtmlNodeType.blinkingEffect}-${n1}`, true)
  e.classList.toggle(`${AbstractHtmlNodeType.blinkingEffect}-${n2}`, false)
}

export class HtmlNodeType<E extends HTMLElement> extends AbstractHtmlNodeType<E> {
  protected createElement(node: RxNode<E, any>): E {
    return document.createElement(node.type.name) as E
  }
}

export class SvgNodeType<E extends SVGElement> extends AbstractHtmlNodeType<E> {
  protected createElement(node: RxNode<E, any>): E {
    return document.createElementNS('http://www.w3.org/2000/svg', node.type.name) as E
  }
}
