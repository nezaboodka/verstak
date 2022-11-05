// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Rx, Item } from 'reactronic'
import { Block, AbstractDriver, Priority } from '../core/api'

export abstract class BaseHtmlDriver<T extends Element> extends AbstractDriver<T> {

  initialize(block: Block<T>, element: T | undefined): void {
    element = this.createElement(block)
    if (Rx.isLogging)
      element.id = block.name
    super.initialize(block, element)
  }

  finalize(block: Block<T>, isLeader: boolean): boolean {
    const e = block.native
    if (e) {
      e.resizeObserver?.unobserve(e) // is it really needed or browser does this automatically?
      if (isLeader)
        e.remove()
    }
    super.finalize(block, isLeader)
    return false // children of HTML blocks are not treated as leaders
  }

  deploy(block: Block<T>, sequential: boolean): void {
    const e = block.native
    if (e) {
      const nativeParent = BaseHtmlDriver.findNearestParentHtmlBlock(block).native
      if (nativeParent) {
        if (sequential) {
          const after = BaseHtmlDriver.findPrevSiblingHtmlBlock(block.item!)
          if (after === undefined) {
            if (nativeParent !== e.parentNode || !e.previousSibling)
              nativeParent.prepend(e)
          }
          else if (after.self.host.native === nativeParent) {
            const nativeAfter = after.self.native
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

  relocate(block: Block<T>): void {
    // nothing to do by default
  }

  render(block: Block<T>): void | Promise<void> {
    const result = super.render(block)
    if (gBlinkingEffect)
      blink(block.native, Block.currentRenderingPriority, block.stamp)
    return result
  }

  static get blinkingEffect(): string | undefined {
    return gBlinkingEffect
  }

  static set blinkingEffect(value: string | undefined) {
    if (value === undefined) {
      const effect = gBlinkingEffect
      Block.runForAllBlocks((e: any) => {
        if (e instanceof HTMLElement)
          e.classList.remove(`${effect}-0`, `${effect}-1`)
      })
    }
    gBlinkingEffect = value
  }

  static findNearestParentHtmlBlock(block: Block<any>): Block<Element> {
    let p = block.host
    while (p.native instanceof Element === false && p !== block)
      p = p.host
    return p as Block<Element>
  }

  static findPrevSiblingHtmlBlock(item: Item<Block<any>>): Item<Block<Element>> | undefined {
    let p = item.prev
    while (p && !(p.self.native instanceof Element))
      p = p.prev
    return p
  }

  protected abstract createElement(block: Block<T>): T
}

export class HtmlDriver<T extends HTMLElement> extends BaseHtmlDriver<T> {
  protected createElement(block: Block<T>): T {
    return document.createElement(block.driver.name) as T
  }
}

export class SvgDriver<T extends SVGElement> extends BaseHtmlDriver<T> {
  protected createElement(block: Block<T>): T {
    return document.createElementNS('http://www.w3.org/2000/svg', block.driver.name) as T
  }
}

function blink(e: Element | undefined, priority: Priority, revision: number): void {
  if (e !== undefined) {
    const n1 = revision % 2
    const n2 = 1 >> n1
    const effect = gBlinkingEffect
    e.classList.toggle(`${effect}-${priority}-${n1}`, true)
    e.classList.toggle(`${effect}-${priority}-${n2}`, false)
  }
}

let gBlinkingEffect: string | undefined = undefined
