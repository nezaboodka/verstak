// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Rx } from 'reactronic'
import { RxDom, RxNode, BasicNodeType } from '../core/api'

export abstract class AbstractHtmlNodeType<E extends Element> extends BasicNodeType<E, any> {
  static isDebugAttributeEnabled: boolean = false
  static gNativeParent: RxNode = RxDom.createRootNode('html > body', true, global.document.body)
  private static _blinkingEffect: string | undefined = undefined

  constructor(
    readonly name: string,
    readonly sequential: boolean = true) {
    super(name, sequential)
  }

  initialize(node: RxNode<E, any>): void {
    super.initialize(node)
    const native = this.createElement(node)
    native.id = node.id
    node.native = native
  }

  mount(node: RxNode<E, any>): void {
    const native = node.native
    if (native) {
      // TODO: Find better solution
      let p = node.parent
      while (p !== undefined && p.native === undefined)
        p = p.parent
      const nativeParent = p.native
      // --------------------------
      if (nativeParent instanceof Element) {
        const prevSibling = node.prevSibling
        if (prevSibling === undefined) {
          if (nativeParent !== native.parentNode || native.previousSibling !== null)
            nativeParent.prepend(native)
        }
        else if (prevSibling !== node) {
          if (prevSibling.parent.native === nativeParent) {
            const nativeSibling = prevSibling.native
            if (nativeSibling instanceof Element) {
              if (nativeSibling.nextSibling !== native)
                nativeParent.insertBefore(native, nativeSibling.nextSibling)
            }
          }
        }
        else // non-sequential
          nativeParent.appendChild(native)
      }
    }
  }

  render(node: RxNode<E, any>, args: unknown): void {
    const native = node.native!
    const outer = AbstractHtmlNodeType.gNativeParent
    try {
      AbstractHtmlNodeType.gNativeParent = node
      super.render(node, args)
      AbstractHtmlNodeType.blinkingEffect && blink(native, node.revision)
      if (AbstractHtmlNodeType.isDebugAttributeEnabled)
        native.setAttribute('rdbg', `${node.revision}:    ${Rx.why()}`)
    }
    finally {
      AbstractHtmlNodeType.gNativeParent = outer
    }
  }

  finalize(node: RxNode<E, any>, initiator: RxNode): void {
    const native = node.native
    if (native && node === initiator) {
      node.resizeObserver?.unobserve(native)
      native.remove()
      super.finalize(node, initiator)
    }
    else {
      if (native)
        node.resizeObserver?.unobserve(native)
      super.finalize(node, initiator)
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
