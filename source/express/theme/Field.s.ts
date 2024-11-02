// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { cached } from "reactronic"
import { css } from "@emotion/css"
import { Styling } from "./Styling.js"

export type FieldStyling = {
  main: string
  icon: string
  input: string
  popup: string
}

export class DefaultFieldStyling extends Styling implements FieldStyling {

  @cached get main(): string { return css`
    border-radius: ${this.$.borderRadius};
    outline: ${this.$.outlineWidth} solid ${this.$.outlineColor};
    outline-offset: -${this.$.outlineWidth};
  `}

  @cached get icon(): string { return css`
    margin-left: ${this.$.outlinePadding};
    min-width: 1.25em;
    text-align: center;
    color: ${this.$.outlineColor};
  `}

  @cached get input(): string { return css`
    padding: ${this.$.outlinePadding};
  `}

  @cached get popup(): string { return css`
    border-radius: ${this.$.borderRadius};
    outline: ${this.$.outlineWidth} solid ${this.$.outlineColor};
    outline-offset: -${this.$.outlineWidth};
    padding: ${this.$.outlinePadding};
    background-color: ${this.$.fillColor};
    margin-top: -${this.$.outlineWidth};
    margin-bottom: -${this.$.outlineWidth};
    box-shadow: ${this.$.shadow};
    overflow: scroll;
    height: 4rem;
  `}
}
