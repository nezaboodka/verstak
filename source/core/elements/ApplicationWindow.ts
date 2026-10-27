// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2026 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { RtElement, inherit, ConfOrScript, RtNode } from "reactronic"
import { El } from "../El.js"
import { ElementDriver } from "./Element.js"
import { acquireVerstakStyleSheet } from "./v5k.js"

// ApplicationWindow

export function ApplicationWindow(
  conf?: ConfOrScript<El<HTMLElement>>): RtNode<El<HTMLElement>> {
  acquireVerstakStyleSheet()
  const page = (document ?? global.document).body
  const driver = new ApplicationWindowDriver(page)
  return RtElement(inherit(conf, {
    caption: ApplicationWindow.name,
    driver,
    setup(el, base) {
      el.useStylingPreset("v5k-app")
      el.useStylingPreset("v5k-element")
    },
  }))
}

// ApplicationWindowDriver

export class ApplicationWindowDriver<T extends HTMLElement> extends ElementDriver<T> {
  readonly native: T

  constructor(native: T) {
    super()
    this.native = native
  }

  override assignNativeElement(node: RtNode<El<T>>): void {
    node.element.native = this.native
  }
}
