// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveNodeDecl, Mode, ReactiveNode } from "reactronic"
import { Panel, El } from "verstak"
import { Theme } from "./Theme.js"

export function Icon(name: string,
  declaration?: ReactiveNodeDecl<El<HTMLElement, void>>) {
  return (
    Panel(ReactiveNode.withBasis(declaration, {
      mode: Mode.autonomous,
      triggers: { name },
      content: el => {
        const theme = Theme.current.icon
        el.useStylingPreset(name)
        el.useStylingPreset(theme.main)
      },
    }))
  )
}
