// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Item, Rx } from "reactronic"
import { Verstak, VBlock, Driver, Priority } from "../core/api"

export abstract class BaseHtmlDriver<T extends Element, C = unknown> extends Driver<T, C> {

  create(block: VBlock<T, unknown, C, void>, b: { native?: T; controller?: C }): void {
    super.create(block, b)
  }

  initialize(block: VBlock<T, unknown, C, void>): void {
    if (Rx.isLogging && !block.descriptor.driver.isRow)
      block.native.setAttribute("key", block.descriptor.key)
    super.initialize(block)
  }

  finalize(block: VBlock<T, unknown, C>, isLeader: boolean): boolean {
    const e = block.native as T | undefined // hack
    if (e) {
      e.resizeObserver?.unobserve(e) // is it really needed or browser does this automatically?
      if (isLeader)
        e.remove()
    }
    super.finalize(block, isLeader)
    return false // children of HTML blocks are not treated as leaders
  }

  mount(block: VBlock<T, unknown, C>): void {
    const e = block.native as T | undefined // hack
    if (e) {
      const bNode = block.descriptor
      const sequential = bNode.owner.descriptor.children.isStrict
      const nativeParent = BaseHtmlDriver.findEffectiveHtmlBlockHost(block).native as Element | undefined // hack
      if (nativeParent) {
        if (sequential && !bNode.driver.isRow) {
          const after = BaseHtmlDriver.findPrevSiblingHtmlBlock(block.descriptor.item!)
          if (after === undefined || after.instance.descriptor.driver.isRow) {
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

  relocate(block: VBlock<T, unknown, C>): void {
    // nothing to do by default
  }

  render(block: VBlock<T, unknown, C>): void | Promise<void> {
    const result = super.render(block)
    if (gBlinkingEffectMarker)
      blink(block.native, Verstak.currentRenderingPriority, block.descriptor.stamp)
    return result
  }

  static get blinkingEffectMarker(): string | undefined {
    return gBlinkingEffectMarker
  }

  static set blinkingEffectMarker(value: string | undefined) {
    gBlinkingEffectMarker = value
  }

  static findEffectiveHtmlBlockHost(block: VBlock<any>): VBlock<HTMLElement> {
    let p = block.descriptor.host
    while (p.native instanceof HTMLElement === false && p !== block)
      p = p.descriptor.host
    return p as VBlock<HTMLElement>
  }

  static findPrevSiblingHtmlBlock(item: Item<VBlock<any>>): Item<VBlock<HTMLElement>> | undefined {
    let p = item.prev
    while (p && !(p.instance.native instanceof HTMLElement))
      p = p.prev
    return p
  }
}

export class HtmlDriver<T extends HTMLElement, C = unknown> extends BaseHtmlDriver<T, C> {
  create(block: VBlock<T, unknown, C, void>, b: { native?: T | undefined; controller?: C | undefined }): void {
    b.native = document.createElement(block.descriptor.driver.name) as T
    super.create(block, b)
  }
}

export class SvgDriver<T extends SVGElement, C = unknown> extends BaseHtmlDriver<T, C> {
  create(block: VBlock<T, unknown, C, void>, b: { native?: T | undefined; controller?: C | undefined }): void {
    b.native = document.createElementNS("http://www.w3.org/2000/svg", block.descriptor.driver.name) as T
    super.create(block, b)
  }
}

function blink(e: Element | undefined, priority: Priority, revision: number): void {
  if (e !== undefined) {
    const n1 = revision % 2
    const n2 = 1 >> n1
    const bem = gBlinkingEffectMarker
    e.classList.toggle(`${bem}${priority}${n1}`, true)
    e.classList.toggle(`${bem}${priority}${n2}`, false)
  }
}

let gBlinkingEffectMarker: string | undefined = undefined
