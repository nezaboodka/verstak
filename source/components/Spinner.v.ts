// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, ReactiveTreeNodeDesc, Script, Mode, ScriptTask, args2desc } from "reactronic"
import { Element, El } from "verstak"
import { rxModel, ValuesOrRefs } from "./common/Utils.js"

export type SpinnerModel = {
  active: boolean
  color: string
}

// Spinner

export function Spinner<D = unknown>(
  setup: Script<El<HTMLElement, SpinnerModel, D>>,
  setupTask?: ScriptTask<El<HTMLElement, SpinnerModel, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, SpinnerModel, D>>): ReactiveTreeNode<El<HTMLElement, SpinnerModel, D>>

export function Spinner<D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, SpinnerModel, D>>,
  setupTask?: ScriptTask<El<HTMLElement, SpinnerModel, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, SpinnerModel, D>>): ReactiveTreeNode<El<HTMLElement, SpinnerModel, D>>

export function Spinner<D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, SpinnerModel, D>>,
  setupTask?: ScriptTask<El<HTMLElement, SpinnerModel, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, SpinnerModel, D>>): ReactiveTreeNode<El<HTMLElement, SpinnerModel, D>>

export function Spinner<D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, SpinnerModel, D>>,
  setupTask?: ScriptTask<El<HTMLElement, SpinnerModel, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, SpinnerModel, D>>): ReactiveTreeNode<El<HTMLElement, SpinnerModel, D>>

export function Spinner<D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, SpinnerModel, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, SpinnerModel, D>>): ReactiveTreeNode<El<HTMLElement, SpinnerModel, D>>

export function Spinner<D = unknown>(
  p1?: Script<El<HTMLElement, SpinnerModel, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, SpinnerModel, D>>,
  p2?: Script<El<HTMLElement, SpinnerModel, D>> | ScriptTask<El<HTMLElement, SpinnerModel, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, SpinnerModel, D>>,
  p3?: Script<El<HTMLElement, SpinnerModel, D>> | ScriptTask<El<HTMLElement, SpinnerModel, D>> | ReactiveTreeNodeDesc<El<HTMLElement, SpinnerModel, D>>,
  p4?: ScriptTask<El<HTMLElement, SpinnerModel, D>> | ReactiveTreeNodeDesc<El<HTMLElement, SpinnerModel, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, SpinnerModel, D>>): ReactiveTreeNode<El<HTMLElement, SpinnerModel, D>> {
  //
  const description = args2desc(Spinner.name, p1, p2, p3, p4, p5)
  return (
    Element<SpinnerModel, D>(description, {
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
    })
  )
}

export function composeSpinnerModel<T>(props?: Partial<ValuesOrRefs<SpinnerModel>>): SpinnerModel
{
  return rxModel({
    active: props?.active ?? false,
    color: props?.color ?? "",
  })
}
