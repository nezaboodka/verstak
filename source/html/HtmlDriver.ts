// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Rx } from "reactronic"
import { Verstak, Priority, SimpleDelegate } from "../core/api.js"
import { El, ElDriver, ElImpl, ElKind } from "./El.js"

// VerstakDriver

export class VerstakDriver<T extends Element, M = unknown, C = unknown> extends ElDriver<T, M, C> {

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
      const automaticHost = Verstak.findMatchingHost<El, El>(node, n =>
        n.element.native instanceof HTMLElement || n.element.native instanceof SVGElement)
      const automaticNativeHost = automaticHost?.element.native
      if (automaticNativeHost) {
        if (sequential && !node.driver.isSeparator) {
          const after = Verstak.findMatchingPrevSibling<El, El>(element.node, n =>
            n.element.native instanceof HTMLElement || n.element.native instanceof SVGElement)
          if (after === undefined || after.driver.isSeparator) {
            if (automaticNativeHost !== native.parentNode || !native.previousSibling)
              automaticNativeHost.prepend(native)
          }
          else { // if (after.instance.host.native === nativeParent) {
            const nativeAfter = after.element.native
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
    if (element.area === undefined) {
      const hostEl = element.node.host.element
      if (hostEl instanceof ElImpl && hostEl.isTable)
        element.area = undefined // automatic placement in table
    }
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
}

// StaticDriver

export class StaticDriver<T extends HTMLElement> extends VerstakDriver<T> {
  readonly native: T

  constructor(native: T, name: string, isRow: boolean, predefine?: SimpleDelegate<El<T>>) {
    super(name, isRow, predefine)
    this.native = native
  }

  assign(element: El<T>): void {
    element.native = this.native
  }
}

// HtmlDriver

export class HtmlDriver<T extends HTMLElement, M = any, C = any> extends VerstakDriver<T, M, C> {
  public static readonly group = new HtmlDriver<any, any, any>(
    "group", false, el => el.kind = ElKind.Group)

  assign(element: El<T, any, C, void>): void {
    element.native = document.createElement(element.node.driver.name) as T
    super.assign(element)
  }
}

// SvgDriver

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
