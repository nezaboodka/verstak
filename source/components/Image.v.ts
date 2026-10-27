// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { inherit, ConfOrScript, RtNode } from "reactronic"
import { Element, El } from "verstak"
import { rxModel } from "./common/Utils.js"

export type ImageModel = {
  source?: string
}

// Image

export function Image<D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, ImageModel, D>>): RtNode<El<HTMLElement, ImageModel, D>> {
  return Element<ImageModel, D>(inherit(conf, {
    caption: Image.name,
    creation() {
      this.model ??= rxModel({ source: undefined })
    },
    setup() {
      const m = this.model
      this.style.backgroundImage = `url(${m.source})`
      this.style.backgroundSize = "contain"
      this.style.backgroundRepeat = "no-repeat"
    },
  }))
}
