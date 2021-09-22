// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ObservableObject, nonreactive } from 'reactronic'

// Sensor

export class Sensor extends ObservableObject {
  revision: number = 0
  nativeElements: unknown[] = []
  private composedAssociatedDataList: unknown[] = EMPTY_ASSOCIATED_DATA_LIST
  get associatedDataList(): unknown[] { return nonreactive(() => this.composedAssociatedDataList) }
  set associatedDataList(value: unknown[]) { this.composedAssociatedDataList = value }
}

// Keyboard

export enum KeyboardModifiers {
  None = 0,
  Ctrl = 1,
  Shift = 2,
  Alt = 4,
  Meta = 8,
  CtrlShift = 1 + 2,
  CtrlAlt = 1 + 4,
  CtrlMeta = 1 + 8,
  CtrlShiftAlt = 1 + 2 + 4,
  CtrlShiftAltMeta = 1 + 2 + 4 + 8,
  CtrlShiftMeta = 1 + 2 + 8,
  ShiftAlt = 2 + 4,
  ShiftMeta = 2 + 8,
  ShiftAltMeta = 2 + 4 + 8,
  AltMeta = 4 + 8,
}

export class Keyboard extends Sensor {
  down = ''
  up = ''
  modifiers = KeyboardModifiers.None
}

// Pointer

export enum PointerButton {
  None = 0,
  Left = 1,
  Right = 2,
  Middle = 4,
}

export class Pointer extends Sensor {
  captured = false
  touched = false
  positionX = 0
  positionY = 0
  previousPositionX = 0
  previousPositionY = 0
  down = PointerButton.None
  up = PointerButton.None
  click = PointerButton.None
  doubleClick = PointerButton.None
}

// Scroll

export class Scroll extends Sensor {
  positionX = 0
  positionY = 0
  deltaX = 0
  deltaY = 0
}

export const EMPTY_ASSOCIATED_DATA_LIST: any[] = []