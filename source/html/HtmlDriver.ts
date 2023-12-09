// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { MergedItem, Rx } from "reactronic"
import { Verstak, El, BaseDriver, Priority } from "../core/api.js"

export abstract class BaseHtmlDriver<T extends Element, C = unknown> extends BaseDriver<T, C> {

  create(element: El<T, unknown, C, void>): void {
    super.create(element)
  }

  initialize(element: El<T, unknown, C, void>): void {
    if (Rx.isLogging && !element.node.driver.isSeparator)
      element.native.setAttribute("key", element.node.key)
    super.initialize(element)
  }

  finalize(element: El<T, unknown, C>, isLeader: boolean): boolean {
    const native = element.native as T | undefined // hack
    if (native) {
      native.resizeObserver?.unobserve(native) // is it really needed or browser does this automatically?
      if (isLeader)
        native.remove()
    }
    super.finalize(element, isLeader)
    return false // children elements having native HTML elements are not treated as leaders
  }

  mount(element: El<T, unknown, C>): void {
    const native = element.native as T | undefined // hack
    if (native) {
      const node = element.node
      const sequential = node.owner.children.isStrict
      const automaticNativeHost = BaseHtmlDriver.findEffectiveHtmlElementHost(element).native as unknown as Element | undefined // hack
      if (automaticNativeHost) {
        if (sequential && !node.driver.isSeparator) {
          const after = BaseHtmlDriver.findPrevSiblingHtmlElement(element.node.slot!)
          if (after === undefined || after.instance.node.driver.isSeparator) {
            if (automaticNativeHost !== native.parentNode || !native.previousSibling)
              automaticNativeHost.prepend(native)
          }
          else { // if (after.instance.host.native === nativeParent) {
            const nativeAfter = after.instance.native
            if (nativeAfter instanceof Element) {
              if (nativeAfter.nextSibling !== native)
                automaticNativeHost.insertBefore(native, nativeAfter.nextSibling)
            }
          }
        }
        else
          automaticNativeHost.appendChild(native)
      }
    }
  }

  relocate(element: El<T, unknown, C>): void {
    // nothing to do by default
  }

  update(element: El<T, unknown, C>): void | Promise<void> {
    const result = super.update(element)
    if (gBlinkingEffectMarker)
      blink(element.native, Verstak.currentUpdatePriority, element.node.stamp)
    return result
  }

  static get blinkingEffectMarker(): string | undefined {
    return gBlinkingEffectMarker
  }

  static set blinkingEffectMarker(value: string | undefined) {
    gBlinkingEffectMarker = value
  }

  static findEffectiveHtmlElementHost(element: El<any>): El<HTMLElement | SVGElement> {
    let p = element.node.host
    while (p.slot!.instance.native instanceof HTMLElement === false &&
      p.slot!.instance.native instanceof SVGElement === false && p !== element.node)
      p = p.host
    return p.slot!.instance as El<HTMLElement | SVGElement>
  }

  static findPrevSiblingHtmlElement(ties: MergedItem<El<any>>): MergedItem<El<HTMLElement | SVGElement>> | undefined {
    let p = ties.prev
    while (p && !(p.instance.native instanceof HTMLElement) && !(p.instance.native instanceof SVGElement))
      p = p.prev
    return p
  }
}

export class HtmlDriver<T extends HTMLElement, C = unknown> extends BaseHtmlDriver<T, C> {
  create(element: El<T, unknown, C, void>): void {
    element.native = document.createElement(element.node.driver.name) as T
    super.create(element)
  }
}

export class SvgDriver<T extends SVGElement, C = unknown> extends BaseHtmlDriver<T, C> {
  create(element: El<T, unknown, C, void>): void {
    element.native = document.createElementNS("http://www.w3.org/2000/svg", element.node.driver.name) as T
    super.create(element)
  }
}

function blink(element: Element | undefined, priority: Priority, revision: number): void {
  if (element !== undefined) {
    const n1 = revision % 2
    const n2 = 1 >> n1
    const bem = gBlinkingEffectMarker
    element.classList.toggle(`${bem}${priority}${n1}`, true)
    element.classList.toggle(`${bem}${priority}${n2}`, false)
  }
}

let gBlinkingEffectMarker: string | undefined = undefined
