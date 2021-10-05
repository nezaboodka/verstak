// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

export type AssociatedData = AssociatedDataPayload & AssociatedDataImportance

export interface AssociatedDataPayload {
  focus?: unknown
  hover?: unknown
  keyboard?: unknown
  click?: unknown
  scroll?: unknown
  resize?: unknown
  drag?: unknown
  htmlDrag?: unknown
}

export interface AssociatedDataImportance {
  focusImportance?: number
  hoverImportance?: number
  keyboardImportance?: number
  clickImportance?: number
  scrollImportance?: number
  dragImportance?: number
  htmlDragImportance?: number
}
