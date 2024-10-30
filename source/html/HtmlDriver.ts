// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveSystem, ReactiveNode, Priority, Handler, proceedSyncOrAsync } from "reactronic"
import { Constants, El, ElDriver, ElImpl } from "./El.js"

// WebDriver

export class WebDriver<T extends Element, M = unknown> extends ElDriver<T, M> {

  setNativeElement(node: ReactiveNode<El<T, M>>): void {
    // it's up to descendant class to define logic
  }

  create(node: ReactiveNode<El<T, M>>): void | Promise<void> {
    this.setNativeElement(node)
    const e = node.element.native
    if (ReactiveSystem.isLogging && e !== undefined && !node.driver.isPartition)
      e.setAttribute(Constants.keyAttrName, node.key)
    const result = super.create(node)
    if (e == undefined && ReactiveSystem.isLogging && !node.driver.isPartition)
      node.element.native.setAttribute(Constants.keyAttrName, node.key)
    return result
  }

  destroy(node: ReactiveNode<El<T, M>>, isLeader: boolean): boolean {
    const element = node.element
    const native = element.native as T | undefined // hack
    if (native) {
      native.resizeObserver?.unobserve(native) // is it really needed or browser does this automatically?
      if (isLeader)
        native.remove()
    }
    super.destroy(node, isLeader)
    element.native = null as any
    return false // children elements having native HTML elements are not treated as leaders
  }

  mount(node: ReactiveNode<El<T, M>>): void {
    const element = node.element
    const native = element.native as T | undefined // hack
    if (native) {
      const sequential = node.owner.children.isStrict
      const automaticHost = ReactiveNode.findMatchingHost<El, El>(node, n =>
        n.element.native instanceof HTMLElement || n.element.native instanceof SVGElement)
      const automaticNativeHost = automaticHost !== node.owner
        ? automaticHost?.driver.getHost(automaticHost).element.native
        : automaticHost?.element.native
      if (automaticNativeHost) {
        if (sequential && !node.driver.isPartition) {
          const after = ReactiveNode.findMatchingPrevSibling<El, El>(node, n =>
            n.element.native instanceof HTMLElement || n.element.native instanceof SVGElement)
          if (after === undefined || after.driver.isPartition) {
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

  update(node: ReactiveNode<El<T, M>>): void | Promise<void> {
    const element = node.element
    if (element instanceof ElImpl)
      element.prepareForUpdate()
    let result = super.update(node)
    result = proceedSyncOrAsync(result,
      v => {
        if (element.place === undefined) {
          const oel = node.owner.element
          if (oel instanceof ElImpl && oel.isTable)
            element.place = undefined // automatic placement in table
        }
        if (gBlinkingEffectMarker)
          blink(element.native, ReactiveNode.currentUpdatePriority, node.stamp)
      },
      e => {
      })
    return result
  }

  static findBrotherlyHost<T, R>(node: ReactiveNode<El<T>>): ReactiveNode<El<R>> | undefined {
    return ReactiveNode.findMatchingHost<El, El>(node, n =>
      n.element.native instanceof HTMLElement || n.element.native instanceof SVGElement)
  }

  static findBrotherlyPrevSibling<T, R>(node: ReactiveNode<El<T>>): ReactiveNode<El<R>> | undefined {
    return ReactiveNode.findMatchingPrevSibling<El, El>(node, n =>
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

  constructor(native: T, name: string, isRow: boolean, initialize?: Handler<El<T>>) {
    super(name, isRow, initialize)
    this.native = native
  }

  setNativeElement(node: ReactiveNode<El<T>>): void {
    node.element.native = this.native
  }
}

// HtmlDriver

export class HtmlDriver<T extends HTMLElement, M = any> extends WebDriver<T, M> {
  setNativeElement(node: ReactiveNode<El<T, M>>): void {
    node.element.native = document.createElement(node.driver.name) as T
  }
}

// SvgDriver

export class SvgDriver<T extends SVGElement, M = any> extends WebDriver<T, M> {
  setNativeElement(node: ReactiveNode<El<T, M>>): void {
    node.element.native = document.createElementNS("http://www.w3.org/2000/svg", node.driver.name) as T
  }
}

// Blinking Rendering Effect

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
