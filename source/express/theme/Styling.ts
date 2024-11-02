// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ObservableObject, raw } from "reactronic"

export type AbstractTheme = {
  fillColor: string
  textColor: string
  positiveColor: string
  negativeColor: string
  borderRadius: string
  outlineWidth: string
  outlineColor: string
  outlinePadding: string
  shadow: string
}

export class Styling extends ObservableObject {
  @raw protected readonly $: AbstractTheme

  constructor($: AbstractTheme) {
    super()
    this.$ = $
  }
}
