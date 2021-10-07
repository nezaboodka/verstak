// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { nonreactive } from 'reactronic'
import { EmptyAssociatedDataArray, HtmlElementSensor } from '../core/Sensor'
import { KeyboardModifiers } from './KeyboardSensor'

export enum PointerButton {
  None = 0,
  Left = 1,
  Right = 2,
  Middle = 4,
}

export class PointerSensor extends HtmlElementSensor {
  event: PointerEvent | MouseEvent | WheelEvent | undefined = undefined
  positionX = Infinity // position relative to browser's viewport
  positionY = Infinity // position relative to browser's viewport
  modifiers = KeyboardModifiers.None
  protected internalAssociatedDataUnderPointer: unknown[] = EmptyAssociatedDataArray

  get associatedDataUnderPointer(): unknown[] { return nonreactive(() => this.internalAssociatedDataUnderPointer) }
  set associatedDataUnderPointer(value: unknown[]) { this.internalAssociatedDataUnderPointer = value }
  get topAssociatedDataUnderPointer(): unknown {
    return nonreactive(() => this.internalAssociatedDataUnderPointer.length > 0 ? this.internalAssociatedDataUnderPointer[0] : undefined)
  }

  preventDefault(): void {
    this.event?.preventDefault()
  }

  stopPropagation(): void {
    this.event?.stopPropagation()
  }
}

export function extractPointerButton(e: MouseEvent): PointerButton {
  switch (e.button) {
    case 0:
      return PointerButton.Left
    case 1:
      return PointerButton.Right
    case 2:
      return PointerButton.Middle
    default:
      return PointerButton.None
  }
}
