// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, ReactiveTreeNodeDecl, Mode, derivative } from "reactronic"
import { Block, El, OnClick } from "verstak"
import { rxModel } from "./common/Utils.js"
import { Theme } from "./Theme.js"
import { Icon } from "./Icon.v.js"

export type ToggleModel = {
  label?: string
  checked?: boolean
  color?: string
}

export function Toggle(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, ToggleModel>>) {
  return (
    Block<ToggleModel>(derivative(declaration, {
      mode: Mode.autonomous,
      preparation() {
        this.model ??= rxModel({
          label: ReactiveTreeNode.current.key,
          checked: true,
          color: "green" }) // model is either taken from parameter or created internally
      },
      body() {
        const m = this.model
        const theme = Theme.current
        const toggleTheme = theme.toggle
        this.useStylingPreset(toggleTheme.main)
        Icon(`fa-solid fa-toggle-${m.checked ? "on" : "off"}`, {
          body(el, base) {
            base()
            this.useStylingPreset(toggleTheme.icon)
            this.style.color = m.checked ? (theme.positiveColor ?? "") : "" // subscribe to ToggleModel.checked
          },
        })
        if (m.label) {
          Block({
            body(el, base) {
              base()
              this.text = m.label
              this.useStylingPreset(toggleTheme.label)
            },
          })
        }

        OnClick(this.native, () => {
          this.model.checked = !this.model.checked
        })
      },
    }))
  )
}
