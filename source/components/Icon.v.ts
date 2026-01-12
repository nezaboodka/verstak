// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNodeDecl, Mode, derivative } from "reactronic"
import { Block, El } from "verstak"
import { Theme } from "./Theme.js"

export function Icon(name: string,
  declaration?: ReactiveTreeNodeDecl<El<HTMLElement, void>>) {
  return (
    Block(derivative(declaration, {
      mode: Mode.autonomous,
      signalArgs: { name },
      script() {
        const theme = Theme.current.icon
        this.useStylingPreset(name)
        this.useStylingPreset(theme.main)
      },
    }))
  )
}
