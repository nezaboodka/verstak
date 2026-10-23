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

export function Spinner(
  setup: Script<El<HTMLElement, SpinnerModel>>): ReactiveTreeNode<El<HTMLElement, SpinnerModel>>

export function Spinner(
  key: string,
  setup: Script<El<HTMLElement, SpinnerModel>>): ReactiveTreeNode<El<HTMLElement, SpinnerModel>>

export function Spinner(
  mode: Mode,
  setup: Script<El<HTMLElement, SpinnerModel>>): ReactiveTreeNode<El<HTMLElement, SpinnerModel>>

export function Spinner(
  description: ReactiveTreeNodeDesc<El<HTMLElement, SpinnerModel>>): ReactiveTreeNode<El<HTMLElement, SpinnerModel>>

export function Spinner(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, SpinnerModel>>,
  setupTask?: ScriptAsync<El<HTMLElement, SpinnerModel>>,
  creation?: Script<El<HTMLElement, SpinnerModel>>,
  creationTask?: ScriptAsync<El<HTMLElement, SpinnerModel>>,
  mounting?: Script<El<HTMLElement, SpinnerModel>>,
  destruction?: Script<El<HTMLElement, SpinnerModel>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, SpinnerModel>>): ReactiveTreeNode<El<HTMLElement, SpinnerModel>>

export function Spinner(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, SpinnerModel>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, SpinnerModel>>,
  setupOrMode?: Script<El<HTMLElement, SpinnerModel>> | Mode,
  setup?: Script<El<HTMLElement, SpinnerModel>>,
  setupTask?: ScriptAsync<El<HTMLElement, SpinnerModel>>,
  creation?: Script<El<HTMLElement, SpinnerModel>>,
  creationTask?: ScriptAsync<El<HTMLElement, SpinnerModel>>,
  mounting?: Script<El<HTMLElement, SpinnerModel>>,
  destruction?: Script<El<HTMLElement, SpinnerModel>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, SpinnerModel>>): ReactiveTreeNode<El<HTMLElement, SpinnerModel>> {
  //
  const description = args2desc(
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
  return (
    Element<SpinnerModel>(setBasis(description, {
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
