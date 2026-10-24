// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, ReactiveTreeNodeDesc, Script, Mode, ScriptTask, args2desc } from "reactronic"
import { Element, El } from "verstak"
import { rxModel } from "./common/Utils.js"

export type ImageModel = {
  source?: string
}

// Image

export function Image<D = unknown>(
  setup: Script<El<HTMLElement, ImageModel, D>>,
  setupTask?: ScriptTask<El<HTMLElement, ImageModel, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, ImageModel, D>>): ReactiveTreeNode<El<HTMLElement, ImageModel, D>>

export function Image<D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, ImageModel, D>>,
  setupTask?: ScriptTask<El<HTMLElement, ImageModel, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, ImageModel, D>>): ReactiveTreeNode<El<HTMLElement, ImageModel, D>>

export function Image<D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, ImageModel, D>>,
  setupTask?: ScriptTask<El<HTMLElement, ImageModel, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, ImageModel, D>>): ReactiveTreeNode<El<HTMLElement, ImageModel, D>>

export function Image<D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, ImageModel, D>>,
  setupTask?: ScriptTask<El<HTMLElement, ImageModel, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, ImageModel, D>>): ReactiveTreeNode<El<HTMLElement, ImageModel, D>>

export function Image<D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, ImageModel, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, ImageModel, D>>): ReactiveTreeNode<El<HTMLElement, ImageModel, D>>

export function Image<D = unknown>(
  p1?: Script<El<HTMLElement, ImageModel, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, ImageModel, D>>,
  p2?: Script<El<HTMLElement, ImageModel, D>> | ScriptTask<El<HTMLElement, ImageModel, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, ImageModel, D>>,
  p3?: Script<El<HTMLElement, ImageModel, D>> | ScriptTask<El<HTMLElement, ImageModel, D>> | ReactiveTreeNodeDesc<El<HTMLElement, ImageModel, D>>,
  p4?: ScriptTask<El<HTMLElement, ImageModel, D>> | ReactiveTreeNodeDesc<El<HTMLElement, ImageModel, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, ImageModel, D>>): ReactiveTreeNode<El<HTMLElement, ImageModel, D>> {
  //
  const description = args2desc(Image.name, p1, p2, p3, p4, p5)
  return (
    Element<ImageModel, D>(description, {
      creation() {
        this.model ??= rxModel({ source: undefined })
      },
      setup() {
        const m = this.model
        this.style.backgroundImage = `url(${m.source})`
        this.style.backgroundSize = "contain"
        this.style.backgroundRepeat = "no-repeat"
      },
    })
  )
}
