// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

export type Signals = SignalsPayload & SignalsImportance

export interface SignalsPayload {
  focus?: unknown
  hover?: unknown
  keyboard?: unknown
  pointer?: unknown
  scroll?: unknown
}

export interface SignalsImportance {
  focusImportance?: number
  hoverImportance?: number
  keyboardImportance?: number
  pointerImportance?: number
  scrollImportance?: number
}
