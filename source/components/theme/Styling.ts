// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { TriggeringObject, trigger } from "reactronic"

export type BasicAbstractTheme = {
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

export class Styling extends TriggeringObject {
  @trigger(false) protected readonly $: BasicAbstractTheme

  constructor($: BasicAbstractTheme) {
    super()
    this.$ = $
  }
}
