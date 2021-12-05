// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { EmptyDataArray } from '../DataForSensor'
import { HtmlElementSensor } from '../HtmlElementSensor'
import { KeyboardModifiers } from './KeyboardSensor'
import { WindowSensor } from './WindowSensor'

export enum PointerButton {
  None = 0,
  Left = 1,
  Right = 2,
  Middle = 4,
}

export class PointerSensor extends HtmlElementSensor {
  positionX: number // position relative to browser's viewport
  positionY: number // position relative to browser's viewport
  modifiers: KeyboardModifiers
  elementDataUnderPointer: unknown[]

  constructor(window?: WindowSensor) {
    super(window)
    this.positionX = Infinity
    this.positionY = Infinity
    this.modifiers = KeyboardModifiers.None
    this.elementDataUnderPointer = EmptyDataArray
  }

  get topElementDataUnderPointer(): unknown {
    return this.elementDataUnderPointer.length > 0 ? this.elementDataUnderPointer[0] : undefined
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
