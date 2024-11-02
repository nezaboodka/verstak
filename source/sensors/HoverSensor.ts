// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, transactional, LoggingLevel, Transaction } from "reactronic"
import { SymDataForSensor, findTargetElementData } from "./DataForSensor.js"
import { BasePointerSensor } from "./BasePointerSensor.js"
import { KeyboardModifiers, extractModifierKeys } from "./KeyboardSensor.js"

export type IHoverable = {
  isHovered: boolean
  onHoverStart?: (hover: HoverSensor) => void
  onHoverEnd?: (hover: HoverSensor) => void
}

export class HoverSensor extends BasePointerSensor {
  isHovered: boolean
  target: unknown = undefined

  constructor(element: HTMLElement | SVGElement) {
    super(element)
    this.isHovered = false
    this.target = undefined
  }

  listen(enabled: boolean = true): void {
    const t = Transaction.current
    Transaction.outside(() => {
      t.whenFinished(true).then(() => {
        const element = this.sourceElement as HTMLElement // WORKAROUND (covers SVGElement cases)
        if (enabled) {
          element.addEventListener("pointerenter", this.onPointerEnter.bind(this))
          element.addEventListener("pointerover", this.onPointerOver.bind(this), { capture: true })
          element.addEventListener("pointermove", this.onPointerMove.bind(this), { capture: true })
          element.addEventListener("pointerleave", this.onPointerLeave.bind(this))
        }
        else {
          element.removeEventListener("pointerenter", this.onPointerEnter.bind(this))
          element.removeEventListener("pointerover", this.onPointerOver.bind(this), { capture: true })
          element.removeEventListener("pointermove", this.onPointerMove.bind(this), { capture: true })
          element.removeEventListener("pointerleave", this.onPointerLeave.bind(this))
        }
      }, e => { /* nop */ })
    })
  }

  protected onPointerEnter(e: PointerEvent): void {
    this.doPointerEnter(e)
  }

  protected onPointerOver(e: PointerEvent): void {
    this.doPointerOver(e)
  }

  protected onPointerMove(e: PointerEvent): void {
    this.doPointerMove(e)
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
  protected doPointerOver(e: PointerEvent): void {
    this.preventDefault = false
    this.stopPropagation = false
    const targetPath = e.composedPath()
    const underPointer = document.elementsFromPoint(e.clientX, e.clientY)
    this.target = findTargetElementData(targetPath, underPointer, SymDataForSensor, ["hover"]).data?.hover
    this.modifiers = extractModifierKeys(e)
    this.positionX = e.clientX
    this.positionY = e.clientY
    this.revision++
  }

  @transactional @options({ logging: LoggingLevel.Off })
  protected doPointerMove(e: PointerEvent): void {
    this.preventDefault = false
    this.stopPropagation = false
    this.modifiers = extractModifierKeys(e)
    this.positionX = e.clientX
    this.positionY = e.clientY
    this.revision++
  }

  @transactional @options({ logging: LoggingLevel.Off })
  protected doPointerLeave(e: PointerEvent): void {
    this.reset()
  }

  @transactional @options({ logging: LoggingLevel.Off })
  protected reset(): void {
    this.preventDefault = false
    this.stopPropagation = false
    this.isHovered = false
    this.target = undefined
    this.positionX = Infinity
    this.positionY = Infinity
    this.modifiers = KeyboardModifiers.none
  }
}
