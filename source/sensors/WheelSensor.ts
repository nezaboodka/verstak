// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, Reentrance, action, LoggingLevel, Transaction } from "reactronic"
import { findTargetElementData, SymDataForSensor } from "./DataForSensor.js"
import { extractModifierKeys, KeyboardModifiers } from "./KeyboardSensor.js"
import { BasePointerSensor } from "./BasePointerSensor.js"

export class WheelSensor extends BasePointerSensor {
  target: unknown = undefined
  deltaX: number
  deltaY: number

  constructor(element: HTMLElement | SVGElement) {
    super(element)
    this.target = undefined
    this.deltaX = Infinity
    this.deltaY = Infinity
  }

  listen(enabled: boolean = true): void {
    const t = Transaction.current
    Transaction.outside(() => {
      t.whenFinished(true).then(() => {
        const element = this.sourceElement as HTMLElement // WORKAROUND (covers SVGElement cases)
        if (enabled) {
          element.addEventListener("wheel", this.onWheel.bind(this), { capture: true, passive: true })
        }
        else {
          element.removeEventListener("wheel", this.onWheel.bind(this), { capture: true })
        }
      }, e => { /* nop */ })
    })
  }

  @action
  reset(): void {
    this.doReset()
  }

  protected onWheel(e: WheelEvent): void {
    this.doWheel(e)
    // this.reset()
  }

  @action @options({ reentrance: Reentrance.cancelPrevious, logging: LoggingLevel.Off })
  protected doWheel(e: WheelEvent): void {
    this.updateSensorData(e)
  }

  protected doReset(): void {
    this.preventDefault = false
    this.stopPropagation = false
    this.modifiers = KeyboardModifiers.none
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
