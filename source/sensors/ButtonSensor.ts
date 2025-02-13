// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, Reentrance, atomicAction, Transaction, LoggingLevel } from "reactronic"
import { extractPointerButton, isPointerButtonDown, PointerButton, BasePointerSensor } from "./BasePointerSensor.js"
import { findTargetElementData, SymDataForSensor } from "./DataForSensor.js"
import { extractModifierKeys, KeyboardModifiers } from "./KeyboardSensor.js"
import { WindowSensor } from "./WindowSensor.js"

export enum ButtonState {
  pressed,
  selecting,
  selected,
  released,
}

export class ButtonSensor extends BasePointerSensor {
  state: ButtonState
  pointerButton: PointerButton
  originData: unknown
  selectedData: unknown
  selectedX: number // position relative to browser's viewport
  selectedY: number // position relative to browser's viewport
  selected: boolean

  constructor(element: HTMLElement | SVGElement, windowSensor: WindowSensor) {
    super(element, windowSensor)
    this.state = ButtonState.released
    this.pointerButton = PointerButton.none
    this.originData = undefined
    this.selectedData = undefined
    this.selectedX = Infinity
    this.selectedY = Infinity
    this.selected = false
  }

  listen(enabled: boolean = true): void {
    const t = Transaction.current
    Transaction.outside(() => {
      t.whenFinished(true).then(() => {
        const element = this.sourceElement as HTMLElement // WORKAROUND (covers SVGElement cases)
        if (enabled) {
          element.addEventListener("pointerdown", this.onPointerDown.bind(this), { capture: true })
          element.addEventListener("pointermove", this.onPointerMove.bind(this), { capture: true })
          element.addEventListener("pointerup", this.onPointerUp.bind(this), { capture: true })
          element.addEventListener("lostpointercapture", this.onLostPointerCapture.bind(this), { capture: true })
          element.addEventListener("keydown", this.onKeyDown.bind(this), { capture: true })
        }
        else {
          element.removeEventListener("pointerdown", this.onPointerDown.bind(this), { capture: true })
          element.removeEventListener("pointermove", this.onPointerMove.bind(this), { capture: true })
          element.removeEventListener("pointerup", this.onPointerUp.bind(this), { capture: true })
          element.removeEventListener("lostpointercapture", this.onLostPointerCapture.bind(this), { capture: true })
          element.removeEventListener("keydown", this.onKeyDown.bind(this), { capture: true })
        }
      }, e => { /* nop */ })
    })
  }

  protected onPointerDown(e: PointerEvent): void {
    // this.sourceElement?.setPointerCapture(e.pointerId)
    if (this.state === ButtonState.released && (this.pointerButton === PointerButton.none))
      this.press(e)
    this.setPreventDefaultAndStopPropagation(e)
  }

  protected onPointerMove(e: PointerEvent): void {
    const state = this.state
    if (isPointerButtonDown(this.pointerButton, e.buttons)) {
      if (state === ButtonState.pressed || state === ButtonState.selecting)
        this.selecting(e)
    }
    else if (state !== ButtonState.released) {
      this.cancel()
      this.reset()
    }
    this.setPreventDefaultAndStopPropagation(e)
  }

  protected onPointerUp(e: PointerEvent): void {
    const button = extractPointerButton(e)
    if (button === this.pointerButton) {
      if (this.state === ButtonState.selecting) {
        this.select(e)
        this.release()
      }
      else if (this.state === ButtonState.pressed) {
        this.release()
      }
    }
    else
      this.cancel()
    this.reset()
    this.setPreventDefaultAndStopPropagation(e)
    // this.sourceElement?.releasePointerCapture(e.pointerId)
  }

  protected onLostPointerCapture(e: PointerEvent): void {
    if (this.state !== ButtonState.released) {
      this.cancel()
      this.reset()
    }
  }

  protected onKeyDown(e: KeyboardEvent): void {
    if (e.key === "Escape" && this.state !== ButtonState.released) {
      this.cancel()
      this.reset()
    }
  }

  @atomicAction @options({ logging: LoggingLevel.Off })
  protected press(e: PointerEvent): void {
    this.preventDefault = false
    this.stopPropagation = false
    const targetPath = e.composedPath()
    const underPointer = document.elementsFromPoint(e.clientX, e.clientY)
    const { data, window } = findTargetElementData(targetPath, underPointer, SymDataForSensor, ["button"])
    const originData = data?.button
    if (originData) {
      this.state = ButtonState.pressed
      this.pointerButton = extractPointerButton(e)
      this.originData = originData
      this.modifiers = extractModifierKeys(e)
      this.positionX = e.clientX
      this.positionY = e.clientY
      this.revision++
    }
    Transaction.isolate(() => {
      this.windowSensor?.setActiveWindow(window, "button")
    })
  }

  @atomicAction @options({ reentrance: Reentrance.cancelPrevious, logging: LoggingLevel.Off })
  protected selecting(e: PointerEvent): void {
    this.updateSensorData(e)
    this.state = ButtonState.selecting
    this.selected = false
  }

  @atomicAction @options({ logging: LoggingLevel.Off })
  protected select(e: PointerEvent): void {
    this.updateSensorData(e)
    this.state = ButtonState.selected
    this.selectedX = e.clientX
    this.selectedY = e.clientY
    this.selected = true
  }

  @atomicAction @options({ logging: LoggingLevel.Off })
  protected release(): void {
    this.preventDefault = false
    this.stopPropagation = false
    this.state = ButtonState.released
    this.revision++
  }

  @atomicAction @options({ logging: LoggingLevel.Off })
  protected cancel(): void {
    this.state = ButtonState.released
    this.selected = false
    this.revision++
  }

  @atomicAction @options({ logging: LoggingLevel.Off })
  protected reset(): void {
    this.preventDefault = false
    this.stopPropagation = false
    this.state = ButtonState.released
    this.originData = undefined
    this.selectedData = undefined
    this.pointerButton = PointerButton.none
    this.positionX = Infinity
    this.positionY = Infinity
    this.selectedX = Infinity
    this.selectedY = Infinity
    this.modifiers = KeyboardModifiers.none
    this.selected = false
  }

  protected updateSensorData(e: PointerEvent): void {
    this.preventDefault = false
    this.stopPropagation = false
    // const targetPath = e.composedPath()
    // const underPointer = document.elementsFromPoint(e.clientX, e.clientY)
    // const { data, window } = findTargetElementData(targetPath, underPointer, SymDataForSensor, ['button'])
    this.modifiers = extractModifierKeys(e)
    this.positionX = e.clientX
    this.positionY = e.clientY
    this.revision++
  }

  // @reactive
  // protected debug(): void {
  //   console.log(`Button stage = ${ButtonState[this.state]}, originData = ${this.originData}, selected = ${this.selected}, selectedData = ${this.selectedData}, selectedXY = (${this.selectedX}, ${this.selectedY})`)
  // }
}
