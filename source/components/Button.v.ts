// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { inherit, RtNode, ConfOrScript } from "reactronic"
import { Element, El, OnClick } from "verstak"
import { rxModel } from "./common/Utils.js"
import { Theme } from "./Theme.js"
import { Icon } from "./Icon.v.js"

export type ButtonModel = {
  icon?: string
  label?: string
  action?(): void
}

// Button

export function Button<D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, ButtonModel, D>>): RtNode<El<HTMLElement, ButtonModel, D>> {
  return Element<ButtonModel, D>(inherit(conf, {
    caption: Button.name,
    creation() {
      this.model ??= rxModel({
        icon: "fa-solid fa-square",
        label: RtNode.current.key,
      })
    },
    setup() {
      const m = this.model
      const theme = Theme.current.button
      this.useStylingPreset(theme.main)
      if (m.icon) {
        Icon(m.icon, {
          setup(el, base) {
            base()
            this.useStylingPreset(theme.icon)
          },
        })
      }
      if (m.label) {
        Element({
          // mode: Mode.primitive,
          setup(el, base) {
            base()
            this.textIsFormatted = false
            this.text = m.label
            this.useStylingPreset(theme.label)
          },
        })
      }

      OnClick(this.native, m.action)
    },
  }))
}
