// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNodeDecl, Mode, derivative } from "reactronic"
import { Block, JustText, El } from "verstak"
import { rxModel, ValuesOrRefs } from "./common/Utils.js"

export type SpinnerModel = {
  active: boolean
  color: string
}

export function Spinner(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, SpinnerModel>>) {
  return (
    Block<SpinnerModel>(derivative(declaration, {
      mode: Mode.autonomous,
      preparation() {
        this.model ??= composeSpinnerModel()
      },
      script() {
        const m = this.model
        m.active && JustText("loading...")
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
