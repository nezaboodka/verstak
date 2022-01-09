// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Rx } from 'reactronic'
import { RxDom, RxNode, BasicNodeFactory } from '../core/api'

export abstract class AbstractHtmlNodeFactory<E extends Element> extends BasicNodeFactory<E, any> {
  constructor(name: string, arranging: boolean = true) {
    super(name, arranging)
  }

  initialize(node: RxNode<E, any>): void {
    super.initialize(node)
    const e = node.native = this.createElement(node)
    if (Rx.isTraceEnabled)
      e.id = node.name
  }

  finalize(node: RxNode<E, any>, initiator: RxNode): void {
    const e = node.native
    if (e) {
      e.resizeObserver?.unobserve(e) // is it really needed or browser does this automatically?
      if (node === initiator)
        e.remove()
    }
    super.finalize(node, initiator)
  }

  arrange(node: RxNode<E, any>): void {
    const e = node.native
    if (e) {
      let p = node.parent
      while (!p.native) // are there better ideas how to determine native parent?
        p = p.parent
      const nativeParent = p.native
      if (nativeParent instanceof Element) {
        const after = node.after
        if (after === undefined) {
          if (nativeParent !== e.parentNode || !e.previousSibling)
            nativeParent.prepend(e)
        }
        else if (after !== node) {
          if (after.parent.native === nativeParent) {
            const nativeAfter = after.native
            if (nativeAfter instanceof Element) {
              if (nativeAfter.nextSibling !== e)
                nativeParent.insertBefore(e, nativeAfter.nextSibling)
            }
          }
        }
        else // after === node
          nativeParent.appendChild(e)
      }
    }
  }

  render(node: RxNode<E, any>): void {
    super.render(node)
    if (gBlinkingEffect)
      blink(node.native, node.revision)
  }

  static get blinkingEffect(): string | undefined {
    return gBlinkingEffect
  }

  static set blinkingEffect(value: string | undefined) {
    if (value === undefined) {
      const effect = gBlinkingEffect
      RxDom.forAllNodesDo((e: any) => {
        if (e instanceof HTMLElement)
          e.classList.remove(`${effect}-0`, `${effect}-1`)
      })
    }
    gBlinkingEffect = value
  }

  protected abstract createElement(node: RxNode<E, any>): E
}

export class HtmlNodeFactory<E extends HTMLElement> extends AbstractHtmlNodeFactory<E> {
  protected createElement(node: RxNode<E, any>): E {
    return document.createElement(node.factory.name) as E
  }
}

export class SvgNodeFactory<E extends SVGElement> extends AbstractHtmlNodeFactory<E> {
  protected createElement(node: RxNode<E, any>): E {
    return document.createElementNS('http://www.w3.org/2000/svg', node.factory.name) as E
  }
}

function blink(e: Element | undefined, revision: number): void {
  if (e !== undefined) {
    const n1 = revision % 2
    const n2 = 1 >> n1
    const effect = gBlinkingEffect
    e.classList.toggle(`${effect}-${n1}`, true)
    e.classList.toggle(`${effect}-${n2}`, false)
  }
}

let gBlinkingEffect: string | undefined = undefined
