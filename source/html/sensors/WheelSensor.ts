// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, Reentrance, transactional, LoggingLevel } from "reactronic"
import { findTargetElementData, SymDataForSensor } from "./DataForSensor"
import { extractModifierKeys, KeyboardModifiers } from "./KeyboardSensor"
import { BasePointerSensor } from "./BasePointerSensor"

export class WheelSensor extends BasePointerSensor {
  target: unknown = undefined
  deltaX: number
  deltaY: number

  constructor() {
    super()
    this.target = undefined
    this.deltaX = Infinity
    this.deltaY = Infinity
  }

  @transactional
  listen(element: HTMLElement | undefined, enabled: boolean = true): void {
    const existing = this.sourceElement
    if (element !== existing) {
      if (existing) {
        existing.removeEventListener("wheel", this.onWheel.bind(this), { capture: true })
      }
      this.sourceElement = element
      if (element && enabled) {
        element.addEventListener("wheel", this.onWheel.bind(this), { capture: true, passive: true })
      }
    }
  }

  @transactional
  reset(): void {
    this.doReset()
  }

  protected onWheel(e: WheelEvent): void {
    this.doWheel(e)
    // this.reset()
  }

  @transactional @options({ reentrance: Reentrance.CancelPrevious, logging: LoggingLevel.Off })
  protected doWheel(e: WheelEvent): void {
    this.updateSensorData(e)
  }

  protected doReset(): void {
    this.preventDefault = false
    this.stopPropagation = false
    this.modifiers = KeyboardModifiers.None
    this.positionX = Infinity
    this.positionY = Infinity
    this.target = undefined
    this.deltaX = Infinity
    this.deltaY = Infinity
  }

  protected updateSensorData(e: WheelEvent): void {
    this.preventDefault = false
    this.stopPropagation = false
    const targetPath = e.composedPath()
    const underPointer = document.elementsFromPoint(e.clientX, e.clientY)
    this.target = findTargetElementData(targetPath, underPointer, SymDataForSensor, ["wheel"]).data?.wheel
    this.modifiers = extractModifierKeys(e)
    this.positionX = e.clientX
    this.positionY = e.clientY
    this.deltaX = e.deltaX
    this.deltaY = e.deltaY
    this.revision++
  }
}
