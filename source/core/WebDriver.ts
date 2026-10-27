// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2026 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { RtNode, RtSystem, Priority, Handler, proceedSyncOrAsync } from "reactronic"
import { El } from "./El.js"
import { Constants, ElDriver, ElImpl } from "./ElDriver.js"

// WebDriver

export class WebDriver<T extends Element, M = unknown, D = unknown> extends ElDriver<T, M, D> {

  assignNativeElement(node: RtNode<El<T, M, D>>): void {
    // it's up to descendant class to define logic
  }

  override runCreation(node: RtNode<El<T, M, D>>): void | Promise<void> {
    this.assignNativeElement(node)
    const native = node.element.native
    const isPartition = node.driver.isPartition
    if (native !== undefined && !isPartition)
      this.assignExtraAttributesAndProperties(node)
    const result = super.runCreation(node)
    if (native == undefined && node.element.native !== undefined && !isPartition)
      this.assignExtraAttributesAndProperties(node)
    return result
  }

  override runDestruction(node: RtNode<El<T, M, D>>, isLeader: boolean): boolean {
    const el = node.element
    const native = el.native as T | undefined // hack
    if (native) {
      this.clearExtraAttributesAndProperties(node)
      native.resizeObserver?.unobserve(native) // is it really needed or browser does this automatically?
      if (isLeader)
        native.remove()
    }
    super.runDestruction(node, isLeader)
    el.native = null as any
    return false // children elements having native HTML elements are not treated as leaders
  }

  override runMount(node: RtNode<El<T, M, D>>): void {
    const el = node.element
    const native = el.native as T | undefined // hack
    if (native) {
      const sequential = node.owner.children.isStrictOrder
      const autoHost = RtNode.findMatchingHost<El, El>(node, n =>
        n.element.native instanceof HTMLElement || n.element.native instanceof SVGElement)
      const automaticNativeHost = autoHost !== node.owner
        ? autoHost?.driver.provideHost(autoHost).element.native
        : autoHost?.element.native
      if (automaticNativeHost) {
        if (sequential && !node.driver.isPartition) {
          const after = RtNode.findMatchingPrevSibling<El, El>(node, n =>
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

  override runSetup(node: RtNode<El<T, M, D>>): void | Promise<void> {
    const el = node.element
    if (el instanceof ElImpl)
      el.prepareForUpdate()
    let result = super.runSetup(node)
    result = proceedSyncOrAsync(result,
      v => {
        if (el.place === undefined) {
          const oel = node.owner.element
          if (oel instanceof ElImpl && oel.isTable)
            el.place = undefined // automatic placement in table
        }
        if (gBlinkingEffect)
          blink(el.native, RtNode.currentNodePriority, node.stamp)
      },
      e => {
      })
    return result
  }

  private assignExtraAttributesAndProperties(node: RtNode<El<T, M, D>>): void {
    const e = node.element.native
    Object.defineProperty(e, Constants.ownRtNodeKey, {
      configurable: true, enumerable: false, value: node, writable: false,
    })
    if (RtSystem.isLogging)
      e.setAttribute(Constants.keyAttrName, node.key)
  }

  private clearExtraAttributesAndProperties(node: RtNode<El<T, M, D>>): void {
    const e = node.element.native
    delete (e as any)[Constants.ownRtNodeKey]
    if (RtSystem.isLogging)
      e.setAttribute(Constants.keyAttrName, "")
  }

  static getOwnNodeOfNativeElement<T extends Element>(element: T): RtNode<El<T>> | undefined {
    return (element as any)[Constants.ownRtNodeKey]
  }

  static findBrotherlyHost<T extends Element, R extends Element>(node: RtNode<El<T>>): RtNode<El<R>> | undefined {
    return RtNode.findMatchingHost<El, El>(node, n =>
      n.element.native instanceof HTMLElement || n.element.native instanceof SVGElement)
  }

  static findBrotherlyPrevSibling<T extends Element, R extends Element>(node: RtNode<El<T>>): RtNode<El<R>> | undefined {
    return RtNode.findMatchingPrevSibling<El, El>(node, n =>
      n.element.native instanceof HTMLElement || n.element.native instanceof SVGElement)
  }

  static get blinkingEffect(): boolean {
    return gBlinkingEffect
  }

  static set blinkingEffect(value: boolean) {
    gBlinkingEffect = value
  }
}

// StaticDriver

export class StaticDriver<T extends HTMLElement> extends WebDriver<T> {

  readonly native: T

  constructor(native: T, id: string, isPartition: boolean, initialize?: Handler<El<T>>) {
    super(id, isPartition, initialize)
    this.native = native
  }

  override assignNativeElement(node: RtNode<El<T>>): void {
    node.element.native = this.native
  }
}

// HtmlDriver

export class HtmlDriver<T extends HTMLElement, M = any, D = any> extends WebDriver<T, M, D> {
  override assignNativeElement(node: RtNode<El<T, M, D>>): void {
    node.element.native = document.createElement(node.driver.id) as T
  }
}

// SvgDriver

export class SvgDriver<T extends SVGElement, M = any, D = any> extends WebDriver<T, M, D> {
  override assignNativeElement(node: RtNode<El<T, M, D>>): void {
    node.element.native = document.createElementNS("http://www.w3.org/2000/svg", node.driver.id) as T
  }
}

// Blinking Rendering Effect

function blink(element: Element | undefined, priority: Priority, revision: number): void {
  if (element !== undefined) {
    const n1 = revision % 2
    const n2 = 1 >> n1
    const bem = "v5k-"
    element.classList.toggle(`${bem}${priority}${n1}`, true)
    element.classList.toggle(`${bem}${priority}${n2}`, false)
  }
}

let gBlinkingEffect: boolean = false
