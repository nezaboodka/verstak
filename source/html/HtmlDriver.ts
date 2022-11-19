// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Item, Rx } from "reactronic"
import { VBlock, AbstractDriver, Priority } from "../core/api"

export abstract class BaseHtmlDriver<T extends Element> extends AbstractDriver<T> {

  initialize(block: VBlock<T>, element: T): void {
    element = this.createElement(block)
    if (Rx.isLogging && !block.driver.isLine)
      element.setAttribute("key", block.key)
    super.initialize(block, element)
  }

  finalize(block: VBlock<T>, isLeader: boolean): boolean {
    const e = block.native as T | undefined // hack
    if (e) {
      e.resizeObserver?.unobserve(e) // is it really needed or browser does this automatically?
      if (isLeader)
        e.remove()
    }
    super.finalize(block, isLeader)
    return false // children of HTML blocks are not treated as leaders
  }

  deploy(block: VBlock<T>): void {
    const e = block.native as T | undefined // hack
    if (e) {
      const sequential = block.host.children.strict
      const nativeParent = BaseHtmlDriver.findNearestParentHtmlBlock(block).native as Element | undefined // hack
      if (nativeParent) {
        if (sequential && !block.driver.isLine) {
          const after = BaseHtmlDriver.findPrevSiblingHtmlBlock(block.item!)
          if (after === undefined || after.instance.driver.isLine) {
            if (nativeParent !== e.parentNode || !e.previousSibling)
              nativeParent.prepend(e)
          }
          else { // if (after.instance.host.native === nativeParent) {
            const nativeAfter = after.instance.native
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

  relocate(block: VBlock<T>): void {
    // nothing to do by default
  }

  render(block: VBlock<T>): void | Promise<void> {
    const result = super.render(block)
    if (gBlinkingEffect)
      blink(block.native, VBlock.currentRenderingPriority, block.stamp)
    return result
  }

  static get blinkingEffect(): string | undefined {
    return gBlinkingEffect
  }

  static set blinkingEffect(value: string | undefined) {
    if (value === undefined) {
      const effect = gBlinkingEffect
      VBlock.runForAllBlocks((e: any) => {
        if (e instanceof HTMLElement) {
          e.classList.remove(`${effect}-0-0`, `${effect}-0-1`)
          e.classList.remove(`${effect}-1-0`, `${effect}-1-1`)
          e.classList.remove(`${effect}-2-0`, `${effect}-2-1`)
        }
      })
    }
    gBlinkingEffect = value
  }

  static findNearestParentHtmlBlock(block: VBlock<any>): VBlock<HTMLElement> {
    let p = block.host
    while (p.native instanceof HTMLElement === false && p !== block)
      p = p.host
    return p as VBlock<HTMLElement>
  }

  static findPrevSiblingHtmlBlock(item: Item<VBlock<any>>): Item<VBlock<HTMLElement>> | undefined {
    let p = item.prev
    while (p && !(p.instance.native instanceof HTMLElement))
      p = p.prev
    return p
  }

  protected abstract createElement(block: VBlock<T>): T
}

export class HtmlDriver<T extends HTMLElement> extends BaseHtmlDriver<T> {
  protected createElement(block: VBlock<T>): T {
    return document.createElement(block.driver.name) as T
  }
}

export class SvgDriver<T extends SVGElement> extends BaseHtmlDriver<T> {
  protected createElement(block: VBlock<T>): T {
    return document.createElementNS("http://www.w3.org/2000/svg", block.driver.name) as T
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
