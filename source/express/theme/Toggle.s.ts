// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { cachedResult } from "reactronic"
import { css } from "@emotion/css"
import { Styling } from "./Styling.js"

export type ToggleStyling = {
  main: string
  icon: string
  label: string
}

export class DefaultToggleStyling extends Styling implements ToggleStyling {

  @cachedResult get main(): string { return css`
    cursor: pointer;
    user-select: none;
  `}

  @cachedResult get icon(): string { return css`
    min-width: auto;
    margin-left: ${this.$.outlinePadding};
    margin-right: ${this.$.outlinePadding};
  `}

  @cachedResult get label(): string { return css`
    margin-left: ${this.$.outlinePadding};
    margin-right: ${this.$.outlinePadding};
  `}
}
