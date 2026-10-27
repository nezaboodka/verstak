// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { inherit, ConfOrScript, RtNode } from "reactronic"
import { Element, El } from "verstak"
import { Theme } from "./Theme.js"

// Icon

export function Icon<D = unknown>(
  name: string,
  conf?: ConfOrScript<El<HTMLElement, void, D>>): RtNode<El<HTMLElement, void, D>> {
  return Element<void, D>(inherit(conf, {
    caption: Icon.name,
    signalArgs: { name },
    setup() {
      const theme = Theme.current.icon
      this.useStylingPreset(name)
      this.useStylingPreset(theme.main)
    },
  }))
}
