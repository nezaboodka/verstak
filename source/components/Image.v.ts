// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNodeDecl, Mode, derivative } from "reactronic"
import { Block, El } from "verstak"
import { rxModel } from "./common/Utils.js"

export type ImageModel = {
  source?: string
}

export function Image(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, ImageModel>>) {
  return (
    Block<ImageModel>(derivative(declaration, {
      mode: Mode.autonomous,
      preparation() {
        this.model ??= rxModel({ source: undefined })
      },
      script() {
        const m = this.model
        this.style.backgroundImage = `url(${m.source})`
        this.style.backgroundSize = "contain"
        this.style.backgroundRepeat = "no-repeat"
      },
    }))
  )
}
