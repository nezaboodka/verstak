// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTree, ReactiveTreeNodeDecl, Mode } from "reactronic"
import { Division, JustText, El } from "verstak"
import { triggeringModel, ValuesOrRefs } from "./common/Utils.js"

export type SpinnerModel = {
  active: boolean
  color: string
}

export function Spinner(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, SpinnerModel>>) {
  return (
    Division<SpinnerModel>(ReactiveTree.withBasis(declaration, {
      mode: Mode.autonomous,
      preparation: el => {
        el.model ??= composeSpinnerModel()
      },
      script: el => {
        const m = el.model
        m.active && JustText("loading...")
      },
    }))
  )
}

export function composeSpinnerModel<T>(props?: Partial<ValuesOrRefs<SpinnerModel>>): SpinnerModel
{
  return triggeringModel({
    active: props?.active ?? false,
    color: props?.color ?? "",
  })
}
