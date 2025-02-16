// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { HtmlElementSensor } from "./HtmlElementSensor.js"
import { KeyboardModifiers } from "./KeyboardSensor.js"
import { WindowSensor } from "./WindowSensor.js"

export enum PointerButton {
  none = 0,
  left = 1,
  right = 2,
  middle = 4,
}

export class BasePointerSensor extends HtmlElementSensor {
  positionX: number // position relative to browser's viewport
  positionY: number // position relative to browser's viewport
  modifiers: KeyboardModifiers

  constructor(element: HTMLElement | SVGElement, windowSensor?: WindowSensor) {
    super(element, windowSensor)
    this.positionX = Infinity
    this.positionY = Infinity
    this.modifiers = KeyboardModifiers.none
  }
}

export function extractPointerButton(e: MouseEvent): PointerButton {
  switch (e.button) {
    case 0:
      return PointerButton.left
    case 1:
      return PointerButton.middle
    case 2:
      return PointerButton.right
    default:
      return PointerButton.none
  }
}

export function isPointerButtonDown(button: PointerButton, buttonsMask: number): boolean {
  return (buttonsMask & button) !== 0
}
