// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

export type SensorData = SensorDataPayload & SensorDataImportance

export interface SensorDataPayload {
  focus?: unknown
  hover?: unknown
  keyboard?: unknown
  pointer?: unknown
  scroll?: unknown
  dragStart?: unknown
  dragEnd?: unknown
  dragOver?: unknown
}

export interface SensorDataImportance {
  focusImportance?: number
  hoverImportance?: number
  keyboardImportance?: number
  pointerImportance?: number
  scrollImportance?: number
  dragImportance?: number
}
