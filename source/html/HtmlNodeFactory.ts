// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Rx } from 'reactronic'
import { RxNode, NodeFactory } from '../core/api'

export abstract class AbstractHtmlNodeFactory<E extends Element> extends NodeFactory<E> {

  initialize(node: RxNode<E>, native: E | undefined): void {
    native = this.createElement(node)
    if (Rx.isLogging)
      native.id = node.name
    super.initialize(node, native)
  }

  finalize(node: RxNode<E>, initiator: RxNode): void {
    const e = node.native
    if (e) {
      e.resizeObserver?.unobserve(e) // is it really needed or browser does this automatically?
      if (node === initiator)
        e.remove()
    }
    super.finalize(node, initiator)
  }

  arrange(node: RxNode<E>): void {
    const e = node.native
    if (e) {
      const nativeParent = findNearestHtmlParent(node).native
      if (nativeParent) {
        const neighbor = node.neighbor
        if (neighbor === undefined) {
          if (nativeParent !== e.parentNode || !e.previousSibling)
            nativeParent.prepend(e)
        }
        else if (neighbor !== node) {
          if (neighbor.parent.native === nativeParent) {
            const nativeNeighbor = neighbor.native
            if (nativeNeighbor instanceof Element) {
              if (nativeNeighbor.nextSibling !== e)
                nativeParent.insertBefore(e, nativeNeighbor.nextSibling)
            }
          }
        }
        else // neighbor === node
          nativeParent.appendChild(e)
      }
    }
  }

  render(node: RxNode<E>): void | Promise<void> {
    const result = super.render(node)
    if (gBlinkingEffect)
      blink(node.native, node.stamp)
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

  protected abstract createElement(node: RxNode<E>): E
}

export class HtmlNodeFactory<E extends HTMLElement> extends AbstractHtmlNodeFactory<E> {
  protected createElement(node: RxNode<E>): E {
    return document.createElement(node.factory.name) as E
  }
}

export class SvgNodeFactory<E extends SVGElement> extends AbstractHtmlNodeFactory<E> {
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

function findNearestHtmlParent(node: RxNode): RxNode<HTMLElement> {
  let p = node.parent
  while (p.native instanceof HTMLElement === false && p !== node)
    p = p.parent
  return p
}


let gBlinkingEffect: string | undefined = undefined
