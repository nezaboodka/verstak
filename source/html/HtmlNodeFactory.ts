// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Rx } from 'reactronic'
import { RxNode, NodeFactory, MergedListItem } from '../core/api'

export abstract class ElementNodeFactory<E extends Element> extends NodeFactory<E> {

  initialize(node: RxNode<E>, element: E | undefined): void {
    element = this.createElement(node)
    if (Rx.isLogging)
      element.id = node.name
    super.initialize(node, element)
  }

  finalize(node: RxNode<E>, isLeader: boolean): boolean {
    const e = node.element
    if (e) {
      e.resizeObserver?.unobserve(e) // is it really needed or browser does this automatically?
      if (isLeader)
        e.remove()
    }
    super.finalize(node, isLeader)
    return false // children of HTML nodes are not treated as leaders
  }

  arrange(node: RxNode<E>, strict: boolean): void {
    const e = node.element
    if (e) {
      const nativeParent = ElementNodeFactory.findNearestParentHtmlElementNode(node).element
      if (nativeParent) {
        if (strict) {
          const after = ElementNodeFactory.findPrevSiblingHtmlElementNode(node.item!)
          if (after === undefined) {
            if (nativeParent !== e.parentNode || !e.previousSibling)
              nativeParent.prepend(e)
          }
          else if (after.self.parent.element === nativeParent) {
            const nativeAfter = after.self.element
            if (nativeAfter instanceof Element) {
              if (nativeAfter.nextSibling !== e)
                nativeParent.insertBefore(e, nativeAfter.nextSibling)
            }
          }
        }
        else
          nativeParent.appendChild(e)
      }
    }
  }

  render(node: RxNode<E>): void | Promise<void> {
    const result = super.render(node)
    if (gBlinkingEffect)
      blink(node.element, node.stamp)
    return result
  }

  static get blinkingEffect(): string | undefined {
    return gBlinkingEffect
  }

  static set blinkingEffect(value: string | undefined) {
    if (value === undefined) {
      const effect = gBlinkingEffect
      RxNode.forAllNodesDo((e: any) => {
        if (e instanceof HTMLElement)
          e.classList.remove(`${effect}-0`, `${effect}-1`)
      })
    }
    gBlinkingEffect = value
  }

  static findNearestParentHtmlElementNode(node: RxNode): RxNode<Element> {
    let p = node.parent
    while (p.element instanceof Element === false && p !== node)
      p = p.parent
    return p
  }

  static findPrevSiblingHtmlElementNode(item: MergedListItem<RxNode>): MergedListItem<RxNode<Element>> | undefined {
    let p = item.prev
    while (p && !(p.self.element instanceof Element))
      p = p.prev
    return p
  }

  protected abstract createElement(node: RxNode<E>): E
}

export class HtmlElementNodeFactory<E extends HTMLElement> extends ElementNodeFactory<E> {
  protected createElement(node: RxNode<E>): E {
    return document.createElement(node.factory.name) as E
  }
}

export class SvgElementNodeFactory<E extends SVGElement> extends ElementNodeFactory<E> {
  protected createElement(node: RxNode<E>): E {
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
