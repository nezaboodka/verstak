// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, Reentrance, transactional, Transaction, LoggingLevel } from "reactronic"
import { extractPointerButton, isPointerButtonDown, PointerButton, BasePointerSensor } from "./BasePointerSensor"
import { findTargetElementData, SymDataForSensor } from "./DataForSensor"
import { FocusSensor } from "./FocusSensor"
import { extractModifierKeys, KeyboardModifiers } from "./KeyboardSensor"
import { WindowSensor } from "./WindowSensor"

export enum ButtonState {
  Pressed,
  Selecting,
  Selected,
  Released,
}

export class ButtonSensor extends BasePointerSensor {
  state: ButtonState
  pointerButton: PointerButton
  originData: unknown
  selectedData: unknown
  selectedX: number // position relative to browser's viewport
  selectedY: number // position relative to browser's viewport
  selected: boolean

  constructor(focusSensor: FocusSensor, windowSensor: WindowSensor) {
    super(focusSensor, windowSensor)
    this.state = ButtonState.Released
    this.pointerButton = PointerButton.None
    this.originData = undefined
    this.selectedData = undefined
    this.selectedX = Infinity
    this.selectedY = Infinity
    this.selected = false
  }

  @transactional
  listen(element: HTMLElement | undefined, enabled: boolean = true): void {
    const existing = this.sourceElement
    if (element !== existing) {
      if (existing) {
        existing.removeEventListener("pointerdown", this.onPointerDown.bind(this), { capture: true })
        existing.removeEventListener("pointermove", this.onPointerMove.bind(this), { capture: true })
        existing.removeEventListener("pointerup", this.onPointerUp.bind(this), { capture: true })
        existing.removeEventListener("lostpointercapture", this.onLostPointerCapture.bind(this), { capture: true })
        existing.removeEventListener("keydown", this.onKeyDown.bind(this), { capture: true })
      }
      this.sourceElement = element
      if (element && enabled) {
        element.addEventListener("pointerdown", this.onPointerDown.bind(this), { capture: true })
        element.addEventListener("pointermove", this.onPointerMove.bind(this), { capture: true })
        element.addEventListener("pointerup", this.onPointerUp.bind(this), { capture: true })
        element.addEventListener("lostpointercapture", this.onLostPointerCapture.bind(this), { capture: true })
        element.addEventListener("keydown", this.onKeyDown.bind(this), { capture: true })
      }
    }
  }

  protected onPointerDown(e: PointerEvent): void {
    // this.sourceElement?.setPointerCapture(e.pointerId)
    if (this.state === ButtonState.Released && (this.pointerButton === PointerButton.None))
      this.press(e)
    this.setPreventDefaultAndStopPropagation(e)
  }

  protected onPointerMove(e: PointerEvent): void {
    const state = this.state
    if (isPointerButtonDown(this.pointerButton, e.buttons)) {
      if (state === ButtonState.Pressed || state === ButtonState.Selecting)
        this.selecting(e)
    }
    else if (state !== ButtonState.Released) {
      this.cancel()
      this.reset()
    }
    this.setPreventDefaultAndStopPropagation(e)
  }

  protected onPointerUp(e: PointerEvent): void {
    const button = extractPointerButton(e)
    if (button === this.pointerButton) {
      if (this.state === ButtonState.Selecting) {
        this.select(e)
        this.release()
      }
      else if (this.state === ButtonState.Pressed) {
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
    if (this.state !== ButtonState.Released) {
      this.cancel()
      this.reset()
    }
  }

  protected onKeyDown(e: KeyboardEvent): void {
    if (e.key === "Escape" && this.state !== ButtonState.Released) {
      this.cancel()
      this.reset()
    }
  }

  @transactional @options({ logging: LoggingLevel.Off })
  protected press(e: PointerEvent): void {
    this.preventDefault = false
    this.stopPropagation = false
    const targetPath = e.composedPath()
    const underPointer = document.elementsFromPoint(e.clientX, e.clientY)
    const { data, window } = findTargetElementData(targetPath, underPointer, SymDataForSensor, ["button"])
    const originData = data?.button
    if (originData) {
      this.state = ButtonState.Pressed
      this.pointerButton = extractPointerButton(e)
      this.originData = originData
      this.modifiers = extractModifierKeys(e)
      this.positionX = e.clientX
      this.positionY = e.clientY
      this.revision++
    }
    Transaction.separate(() => {
      this.windowSensor?.setActiveWindow(window, "button")
    })
  }

  @transactional @options({ reentrance: Reentrance.CancelPrevious, logging: LoggingLevel.Off })
  protected selecting(e: PointerEvent): void {
    this.updateSensorData(e)
    this.state = ButtonState.Selecting
    this.selected = false
  }

  @transactional @options({ logging: LoggingLevel.Off })
  protected select(e: PointerEvent): void {
    this.updateSensorData(e)
    this.state = ButtonState.Selected
    this.selectedX = e.clientX
    this.selectedY = e.clientY
    this.selected = true
  }

  @transactional @options({ logging: LoggingLevel.Off })
  protected release(): void {
    this.preventDefault = false
    this.stopPropagation = false
    this.state = ButtonState.Released
    this.revision++
  }

  @transactional @options({ logging: LoggingLevel.Off })
  protected cancel(): void {
    this.state = ButtonState.Released
    this.selected = false
    this.revision++
  }

  @transactional @options({ logging: LoggingLevel.Off })
  protected reset(): void {
    this.preventDefault = false
    this.stopPropagation = false
    this.state = ButtonState.Released
    this.originData = undefined
    this.selectedData = undefined
    this.pointerButton = PointerButton.None
    this.positionX = Infinity
    this.positionY = Infinity
    this.selectedX = Infinity
    this.selectedY = Infinity
    this.modifiers = KeyboardModifiers.None
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
