// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, transactional, LoggingLevel } from "reactronic"
import { HtmlElementSensor } from "./HtmlElementSensor.js"

export type IHoverable = {
  isHovered: boolean
  onHoverStart?: (hover: HoverSensor) => void
  onHoverEnd?: (hover: HoverSensor) => void
}

export class HoverSensor extends HtmlElementSensor {
  isHovered: boolean

  constructor(element: HTMLElement | SVGElement) {
    super(element)
    this.isHovered = false
  }

  listen(enabled: boolean = true): void {
    const element = this.sourceElement as HTMLElement // WORKAROUND (covers SVGElement cases)
    if (enabled) {
      element.addEventListener("pointerenter", this.onPointerEnter.bind(this))
      element.addEventListener("pointerleave", this.onPointerLeave.bind(this))
    }
    else {
      element.removeEventListener("pointerenter", this.onPointerEnter.bind(this), { capture: true })
      element.removeEventListener("pointerleave", this.onPointerLeave.bind(this), { capture: true })
    }
  }

  protected onPointerEnter(e: PointerEvent): void {
    this.doPointerEnter(e)
  }

  protected onPointerLeave(e: PointerEvent): void {
    this.doPointerLeave(e)
  }

  @transactional @options({ logging: LoggingLevel.Off })
  protected doPointerEnter(e: PointerEvent): void {
    this.preventDefault = false
    this.stopPropagation = false
    this.isHovered = true
    this.revision++
  }

  @transactional @options({ logging: LoggingLevel.Off })
  protected doPointerLeave(e: PointerEvent): void {
    this.preventDefault = false
    this.stopPropagation = false
    this.isHovered = false
  }
}
