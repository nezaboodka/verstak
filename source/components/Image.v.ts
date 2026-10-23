// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, ReactiveTreeNodeDesc, Script, Mode, ScriptAsync, args2desc, setBasis } from "reactronic"
import { Element, El } from "verstak"
import { rxModel } from "./common/Utils.js"

export type ImageModel = {
  source?: string
}

// Image

export function Image<D = unknown>(
  setup: Script<El<HTMLElement, ImageModel, D>>): ReactiveTreeNode<El<HTMLElement, ImageModel, D>>

export function Image<D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, ImageModel, D>>): ReactiveTreeNode<El<HTMLElement, ImageModel, D>>

export function Image<D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, ImageModel, D>>): ReactiveTreeNode<El<HTMLElement, ImageModel, D>>

export function Image<D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, ImageModel, D>>): ReactiveTreeNode<El<HTMLElement, ImageModel, D>>

export function Image<D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, ImageModel, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, ImageModel, D>>,
  creation?: Script<El<HTMLElement, ImageModel, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, ImageModel, D>>,
  mounting?: Script<El<HTMLElement, ImageModel, D>>,
  destruction?: Script<El<HTMLElement, ImageModel, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, ImageModel, D>>): ReactiveTreeNode<El<HTMLElement, ImageModel, D>>

export function Image<D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, ImageModel, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, ImageModel, D>>,
  setupOrMode?: Script<El<HTMLElement, ImageModel, D>> | Mode,
  setup?: Script<El<HTMLElement, ImageModel, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, ImageModel, D>>,
  creation?: Script<El<HTMLElement, ImageModel, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, ImageModel, D>>,
  mounting?: Script<El<HTMLElement, ImageModel, D>>,
  destruction?: Script<El<HTMLElement, ImageModel, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, ImageModel, D>>): ReactiveTreeNode<El<HTMLElement, ImageModel, D>> {
  //
  const description = args2desc(
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
  return (
    Element<ImageModel, D>(setBasis(description, {
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
  )
}
