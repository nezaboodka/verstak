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

export function Image(
  setup: Script<El<HTMLElement, ImageModel>>): ReactiveTreeNode<El<HTMLElement, ImageModel>>

export function Image(
  key: string,
  setup: Script<El<HTMLElement, ImageModel>>): ReactiveTreeNode<El<HTMLElement, ImageModel>>

export function Image(
  mode: Mode,
  setup: Script<El<HTMLElement, ImageModel>>): ReactiveTreeNode<El<HTMLElement, ImageModel>>

export function Image(
  description: ReactiveTreeNodeDesc<El<HTMLElement, ImageModel>>): ReactiveTreeNode<El<HTMLElement, ImageModel>>

export function Image(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, ImageModel>>,
  setupTask?: ScriptAsync<El<HTMLElement, ImageModel>>,
  creation?: Script<El<HTMLElement, ImageModel>>,
  creationTask?: ScriptAsync<El<HTMLElement, ImageModel>>,
  mounting?: Script<El<HTMLElement, ImageModel>>,
  destruction?: Script<El<HTMLElement, ImageModel>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, ImageModel>>): ReactiveTreeNode<El<HTMLElement, ImageModel>>

export function Image(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, ImageModel>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, ImageModel>>,
  setupOrMode?: Script<El<HTMLElement, ImageModel>> | Mode,
  setup?: Script<El<HTMLElement, ImageModel>>,
  setupTask?: ScriptAsync<El<HTMLElement, ImageModel>>,
  creation?: Script<El<HTMLElement, ImageModel>>,
  creationTask?: ScriptAsync<El<HTMLElement, ImageModel>>,
  mounting?: Script<El<HTMLElement, ImageModel>>,
  destruction?: Script<El<HTMLElement, ImageModel>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, ImageModel>>): ReactiveTreeNode<El<HTMLElement, ImageModel>> {
  //
  const description = args2desc(
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
  return (
    Element<ImageModel>(setBasis(description, {
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
