// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Transaction, ReactiveNodeVariable, Isolation } from "reactronic"
import { AbstractTheme } from "./theme/Styling.js"
import { ButtonStyling, DefaultButtonStyling } from "./theme/Button.s.js"
import { FieldStyling, DefaultFieldStyling  } from "./theme/Field.s.js"
import { IconStyling, DefaultIconStyling  } from "./theme/Icon.s.js"
import { ToggleStyling, DefaultToggleStyling } from "./theme/Toggle.s.js"

export { type ButtonStyling, type DefaultButtonStyling } from "./theme/Button.s.js"
export { type FieldStyling, type DefaultFieldStyling  } from "./theme/Field.s.js"
export { type IconStyling, type DefaultIconStyling  } from "./theme/Icon.s.js"
export { type ToggleStyling, type DefaultToggleStyling } from "./theme/Toggle.s.js"

export type VerstakExpressTheme = AbstractTheme & {
  readonly button: ButtonStyling
  readonly field: FieldStyling
  readonly icon: IconStyling
  readonly toggle: ToggleStyling
}

export class Theme implements VerstakExpressTheme {
  private static readonly gCurrent = new ReactiveNodeVariable<VerstakExpressTheme>(
    Transaction.run({ isolation: Isolation.disjoinFromOuterTransaction }, () => new Theme()))

  static get current(): VerstakExpressTheme {
    return Theme.gCurrent.value
  }
  static set current(value: VerstakExpressTheme) {
    Theme.gCurrent.value = value
  }

  name = "Default Gost Theme"
  fillColor = "white"
  textColor = "black"
  positiveColor = "green"
  negativeColor = "red"
  borderRadius = "0.35rem"
  outlineWidth = "1px"
  outlineColor = "rgba(127, 127, 127, 0.5)"
  outlinePadding = "0.25em"
  shadow = "0.1rem 0.1rem 0.5rem 0 rgba(127, 127, 127, 0.5)"
  button = new DefaultButtonStyling(this)
  field = new DefaultFieldStyling(this)
  icon = new DefaultIconStyling(this)
  toggle = new DefaultToggleStyling(this)
}
