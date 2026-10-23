// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNodeDesc, setBasis } from "reactronic"
import { Element, El } from "verstak"
import { Theme } from "./Theme.js"

export function Icon(name: string,
  description?: ReactiveTreeNodeDesc<El<HTMLElement, void>>) {
  //
  return (
    Element(setBasis(description, {
      signalArgs: { name },
      setup() {
        const theme = Theme.current.icon
        this.useStylingPreset(name)
        this.useStylingPreset(theme.main)
      },
    }))
  )
}
