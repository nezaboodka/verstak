// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTree, ReactiveTreeNode, ReactiveTreeNodeDecl, Mode } from "reactronic"
import { Division, JustText, El, OnClick } from "verstak"
import { triggeringModel } from "./common/Utils.js"
import { Theme } from "./Theme.js"
import { Icon } from "./Icon.v.js"

export type ToggleModel = {
  label?: string
  checked?: boolean
  color?: string
}

export function Toggle(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, ToggleModel>>) {
  return (
    Division<ToggleModel>(ReactiveTree.withBasis(declaration, {
      mode: Mode.autonomous,
      preparation: el => {
        el.model ??= triggeringModel({
          label: ReactiveTreeNode.key,
          checked: true,
          color: "green" }) // model is either taken from parameter or created internally
      },
      script: el => {
        const m = el.model
        const theme = Theme.current
        const toggleTheme = theme.toggle
        el.useStylingPreset(toggleTheme.main)
        Icon(`fa-solid fa-toggle-${m.checked ? "on" : "off"}`, {
          script: (el, base) => {
            base()
            el.useStylingPreset(toggleTheme.icon)
            el.style.color = m.checked ? (theme.positiveColor ?? "") : "" // subscribe to ToggleModel.checked
          },
        })
        if (m.label) {
          JustText(m.label, false, {
            script: (el, base) => {
              base()
              el.useStylingPreset(toggleTheme.label)
            },
          })
        }

        OnClick(el.native, () => {
          el.model.checked = !el.model.checked
        })
      },
    }))
  )
}
