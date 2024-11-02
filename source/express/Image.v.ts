// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveNodeDecl, Mode, ReactiveNode } from "reactronic"
import { Panel, El } from "verstak"
import { observableModel } from "./common/Utils.js"

export type ImageModel = {
  source?: string
}

export function Image(declaration?: ReactiveNodeDecl<El<HTMLElement, ImageModel>>) {
  return (
    Panel<ImageModel>(ReactiveNode.withBasis(declaration, {
      mode: Mode.autonomous,
      preparation: el => {
        el.model ??= observableModel({ source: undefined })
      },
      content: el => {
        const m = el.model
        el.style.backgroundImage = `url(${m.source})`
        el.style.backgroundSize = "contain"
        el.style.backgroundRepeat = "no-repeat"
      },
    }))
  )
}
