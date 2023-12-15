// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { RxSystem, RxTree, Priority, SimpleDelegate, RxNode } from "reactronic"
import { Constants, El, ElDriver, ElImpl } from "./El.js"

// WebDriver

export abstract class WebDriver<T extends Element, M = unknown, C = unknown> extends ElDriver<T, M, C> {

  abstract acquireNativeElement(element: El<T, M, C>): T

  initialize(node: RxNode<El<T, M, C>>): void {
    const element = node.element
    const native = element.native = this.acquireNativeElement(element)
    if (RxSystem.isLogging && !element.node.driver.isPartitionSeparator)
      native.setAttribute(Constants.keyAttrName, element.node.key)
    super.initialize(node)
  }

  finalize(node: RxNode<El<T, M, C>>, isLeader: boolean): boolean {
    const element = node.element
    const native = element.native as T | undefined // hack
    if (native) {
      native.resizeObserver?.unobserve(native) // is it really needed or browser does this automatically?
      if (isLeader)
        native.remove()
    }
    super.finalize(node, isLeader)
    element.native = null as any
    return false // children elements having native HTML elements are not treated as leaders
  }

  mount(node: RxNode<El<T, M, C>>): void {
    const element = node.element
    const native = element.native as T | undefined // hack
    if (native) {
      const node = element.node
      const sequential = node.owner.children.isStrict
      const automaticHost = RxTree.findMatchingHost<El, El>(node, n =>
        n.element.native instanceof HTMLElement || n.element.native instanceof SVGElement)
      const automaticNativeHost = automaticHost?.element.native
      if (automaticNativeHost) {
        if (sequential && !node.driver.isPartitionSeparator) {
          const after = RxTree.findMatchingPrevSibling<El, El>(element.node, n =>
            n.element.native instanceof HTMLElement || n.element.native instanceof SVGElement)
          if (after === undefined || after.driver.isPartitionSeparator) {
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

  update(node: RxNode<El<T, M, C>>): void | Promise<void> {
    const element = node.element
    if (element instanceof ElImpl)
      element.prepareForUpdate()
    const result = super.update(node)
    if (element.area === undefined) {
      const oel = element.node.owner.element
      if (oel instanceof ElImpl && oel.isTable)
        element.area = undefined // automatic placement in table
    }
    if (gBlinkingEffectMarker)
      blink(element.native, RxTree.currentUpdatePriority, element.node.stamp)
    return result
  }

  static findBrotherlyHost<T, R>(node: RxNode<El<T>>): RxNode<El<R>> | undefined {
    return RxTree.findMatchingHost<El, El>(node, n =>
      n.element.native instanceof HTMLElement || n.element.native instanceof SVGElement)
  }

  static findBrotherlyPrevSibling<T, R>(node: RxNode<El<T>>): RxNode<El<R>> | undefined {
    return RxTree.findMatchingPrevSibling<El, El>(node, n =>
      n.element.native instanceof HTMLElement || n.element.native instanceof SVGElement)
  }

  static get blinkingEffectMarker(): string | undefined {
    return gBlinkingEffectMarker
  }

  static set blinkingEffectMarker(value: string | undefined) {
    gBlinkingEffectMarker = value
  }
}

// StaticDriver

export class StaticDriver<T extends HTMLElement> extends WebDriver<T> {

  readonly native: T

  constructor(native: T, name: string, isRow: boolean, predefine?: SimpleDelegate<El<T>>) {
    super(name, isRow, predefine)
    this.native = native
  }

  acquireNativeElement(): T {
    return this.native
  }
}

// HtmlDriver

export class HtmlDriver<T extends HTMLElement, M = any, C = any> extends WebDriver<T, M, C> {
  acquireNativeElement(element: El<T, M, C>): T {
    return document.createElement(element.node.driver.name) as T
  }
}

// SvgDriver

export class SvgDriver<T extends SVGElement, M = any, C = any> extends WebDriver<T, M, C> {
  acquireNativeElement(element: El<T, M, C>): T {
    return document.createElementNS("http://www.w3.org/2000/svg", element.node.driver.name) as T
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
