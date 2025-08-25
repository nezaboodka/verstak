// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNodeDecl, Mode, derivative } from "reactronic"
import { Division, El } from "verstak"
import { observableModel } from "./common/Utils.js"

export type ImageModel = {
  source?: string
}

export function Image(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, ImageModel>>) {
  return (
    Division<ImageModel>(derivative(declaration, {
      mode: Mode.autonomous,
      preparation: el => {
        el.model ??= observableModel({ source: undefined })
      },
      script: el => {
        const m = el.model
        el.style.backgroundImage = `url(${m.source})`
        el.style.backgroundSize = "contain"
        el.style.backgroundRepeat = "no-repeat"
      },
    }))
  )
}
