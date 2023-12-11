// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { FocusSensor } from "./FocusSensor.js"
import { HtmlElementSensor } from "./HtmlElementSensor.js"
import { KeyboardModifiers } from "./KeyboardSensor.js"
import { WindowSensor } from "./WindowSensor.js"

export enum PointerButton {
  None = 0,
  Left = 1,
  Right = 2,
  Middle = 4,
}

export class BasePointerSensor extends HtmlElementSensor {
  positionX: number // position relative to browser's viewport
  positionY: number // position relative to browser's viewport
  modifiers: KeyboardModifiers

  constructor(focusSensor?: FocusSensor, windowSensor?: WindowSensor) {
    super(focusSensor, windowSensor)
    this.positionX = Infinity
    this.positionY = Infinity
    this.modifiers = KeyboardModifiers.None
  }
}

export function extractPointerButton(e: MouseEvent): PointerButton {
  switch (e.button) {
    case 0:
      return PointerButton.Left
    case 1:
      return PointerButton.Middle
    case 2:
      return PointerButton.Right
    default:
      return PointerButton.None
  }
}

export function isPointerButtonDown(button: PointerButton, buttonsMask: number): boolean {
  return (buttonsMask & button) !== 0
}
