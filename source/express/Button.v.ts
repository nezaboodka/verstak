// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveNodeDecl, Mode, ReactiveNode } from "reactronic"
import { Panel, Note, El, OnClick } from "verstak"
import { observableModel } from "./common/Utils.js"
import { Theme } from "./Theme.js"
import { Icon } from "./Icon.v.js"

export type ButtonModel = {
  icon?: string
  label?: string
  action?(): void
}

export function Button(declaration?: ReactiveNodeDecl<El<HTMLElement, ButtonModel>>) {
  return (
    Panel<ButtonModel>(ReactiveNode.withBasis(declaration, {
      mode: Mode.autonomous,
      preparation: el => {
        el.model ??= observableModel({
          icon: "fa-solid fa-square",
          label: ReactiveNode.key,
        })
      },
      content: el => {
        const m = el.model
        const theme = Theme.current.button
        el.useStylingPreset(theme.main)
        if (m.icon) {
          Icon(m.icon, {
            content: (el, base) => {
              base()
              el.useStylingPreset(theme.icon)
            },
          })
        }
        if (m.label) {
          Note(m.label, false, {
            content: (el, base) => {
              base()
              el.useStylingPreset(theme.label)
            },
          })
        }
        OnClick(el.native, m.action)
      },
    }))
  )
}
