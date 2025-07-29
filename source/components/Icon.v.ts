// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, ReactiveTreeNodeDecl, Mode } from "reactronic"
import { Division, El } from "verstak"
import { Theme } from "./Theme.js"

export function Icon(name: string,
  declaration?: ReactiveTreeNodeDecl<El<HTMLElement, void>>) {
  return (
    Division(ReactiveTreeNode.withBasis(declaration, {
      mode: Mode.autonomous,
      triggers: { name },
      script: el => {
        const theme = Theme.current.icon
        el.useStylingPreset(name)
        el.useStylingPreset(theme.main)
      },
    }))
  )
}
