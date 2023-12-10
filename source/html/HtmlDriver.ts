// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { MergedItem, Rx } from "reactronic"
import { Verstak, BaseDriver, Priority, RxNode, ElKind } from "../core/api.js"
import { El, ElImpl } from "./El.js"

// ElDriver

export class ElDriver<T = unknown, M = unknown, C = unknown> extends BaseDriver<El<T, M, C, void>> {
  public static readonly fragment = new ElDriver<any, any, any>(
    "fragment", false, el => el.kind = ElKind.Group)

  allocate(node: RxNode<El<T, M, C, void>>): El<T, M, C, void> {
    return new ElImpl<T, M, C, void>(node)
  }
}

// VerstakDriver

export class VerstakDriver<T extends Element, M = unknown, C = unknown> extends ElDriver<T, M, C> {

  assign(element: El<T, M, C>): void {
    super.assign(element)
  }

  initialize(element: El<T, M, C>): void {
    if (Rx.isLogging && !element.node.driver.isSeparator)
      element.native.setAttribute("key", element.node.key)
    super.initialize(element)
  }

  finalize(element: El<T, M, C>, isLeader: boolean): boolean {
    const native = element.native as T | undefined // hack
    if (native) {
      native.resizeObserver?.unobserve(native) // is it really needed or browser does this automatically?
      if (isLeader)
        native.remove()
    }
    super.finalize(element, isLeader)
    return false // children elements having native HTML elements are not treated as leaders
  }

  mount(element: El<T, M, C>): void {
    const native = element.native as T | undefined // hack
    if (native) {
      const node = element.node
      const sequential = node.owner.children.isStrict
      const automaticNativeHost = VerstakDriver.findEffectiveHtmlElementHost(node).element.native as unknown as Element | undefined // hack
      if (automaticNativeHost) {
        if (sequential && !node.driver.isSeparator) {
          const after = VerstakDriver.findPrevSiblingHtmlElement(element.node.slot!)
          if (after === undefined || after.instance.driver.isSeparator) {
            if (automaticNativeHost !== native.parentNode || !native.previousSibling)
              automaticNativeHost.prepend(native)
          }
          else { // if (after.instance.host.native === nativeParent) {
            const nativeAfter = after.instance.element.native
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

  relocate(element: El<T, M, C>): void {
    // nothing to do by default
  }

  update(element: El<T, M, C>): void | Promise<void> {
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

  static findEffectiveHtmlElementHost(node: RxNode): RxNode<El<HTMLElement | SVGElement>> {
    let p = node.host
    while (p.slot!.instance.element.native instanceof HTMLElement === false &&
      p.slot!.instance.element.native instanceof SVGElement === false && p !== node)
      p = p.host
    return p.slot!.instance as RxNode<El<HTMLElement | SVGElement>>
  }

  static findPrevSiblingHtmlElement(slot: MergedItem<RxNode>): MergedItem<RxNode<El<HTMLElement | SVGElement>>> | undefined {
    let p = slot.prev
    while (p && !(p.instance.element.native instanceof HTMLElement) && !(p.instance.element.native instanceof SVGElement))
      p = p.prev
    return p
  }
}

export class HtmlDriver<T extends HTMLElement, M = any, C = any> extends VerstakDriver<T, M, C> {
  assign(element: El<T, any, C, void>): void {
    element.native = document.createElement(element.node.driver.name) as T
    super.assign(element)
  }
}

export class SvgDriver<T extends SVGElement, M = any, C = any> extends VerstakDriver<T, M, C> {
  assign(element: El<T, any, C, void>): void {
    element.native = document.createElementNS("http://www.w3.org/2000/svg", element.node.driver.name) as T
    super.assign(element)
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
