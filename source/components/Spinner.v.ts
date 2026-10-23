// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, ReactiveTreeNodeDesc, Script, Mode, ScriptAsync, args2desc, setBasis } from "reactronic"
import { Element, El } from "verstak"
import { rxModel, ValuesOrRefs } from "./common/Utils.js"

export type SpinnerModel = {
  active: boolean
  color: string
}

// Spinner

export function Spinner<D = unknown>(
  setup: Script<El<HTMLElement, SpinnerModel, D>>): ReactiveTreeNode<El<HTMLElement, SpinnerModel, D>>

export function Spinner<D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, SpinnerModel, D>>): ReactiveTreeNode<El<HTMLElement, SpinnerModel, D>>

export function Spinner<D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, SpinnerModel, D>>): ReactiveTreeNode<El<HTMLElement, SpinnerModel, D>>

export function Spinner<D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, SpinnerModel, D>>): ReactiveTreeNode<El<HTMLElement, SpinnerModel, D>>

export function Spinner<D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, SpinnerModel, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, SpinnerModel, D>>,
  creation?: Script<El<HTMLElement, SpinnerModel, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, SpinnerModel, D>>,
  mounting?: Script<El<HTMLElement, SpinnerModel, D>>,
  destruction?: Script<El<HTMLElement, SpinnerModel, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, SpinnerModel, D>>): ReactiveTreeNode<El<HTMLElement, SpinnerModel, D>>

export function Spinner<D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, SpinnerModel, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, SpinnerModel, D>>,
  setupOrMode?: Script<El<HTMLElement, SpinnerModel, D>> | Mode,
  setup?: Script<El<HTMLElement, SpinnerModel, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, SpinnerModel, D>>,
  creation?: Script<El<HTMLElement, SpinnerModel, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, SpinnerModel, D>>,
  mounting?: Script<El<HTMLElement, SpinnerModel, D>>,
  destruction?: Script<El<HTMLElement, SpinnerModel, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, SpinnerModel, D>>): ReactiveTreeNode<El<HTMLElement, SpinnerModel, D>> {
  //
  const description = args2desc(
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
  return (
    Element<SpinnerModel, D>(setBasis(description, {
      creation() {
        this.model ??= composeSpinnerModel()
      },
      setup() {
        const m = this.model
        if (m.active)
          Element({
            mode: Mode.primitive,
            setup() {
              this.text = "loading..."
            },
          })
      },
    }))
  )
}

export function composeSpinnerModel<T>(props?: Partial<ValuesOrRefs<SpinnerModel>>): SpinnerModel
{
  return rxModel({
    active: props?.active ?? false,
    color: props?.color ?? "",
  })
}
