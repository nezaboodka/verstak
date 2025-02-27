// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveNodeDecl, Mode, ReactiveNode } from "reactronic"
import { Panel, TextBlock, El } from "verstak"
import { observableModel, ValuesOrRefs } from "./common/Utils.js"

export type SpinnerModel = {
  active: boolean
  color: string
}

export function Spinner(declaration?: ReactiveNodeDecl<El<HTMLElement, SpinnerModel>>) {
  return (
    Panel<SpinnerModel>(ReactiveNode.withBasis(declaration, {
      mode: Mode.autonomous,
      preparation: el => {
        el.model ??= composeSpinnerModel()
      },
      script: el => {
        const m = el.model
        m.active && TextBlock("loading...")
      },
    }))
  )
}

export function composeSpinnerModel<T>(props?: Partial<ValuesOrRefs<SpinnerModel>>): SpinnerModel
{
  return observableModel({
    active: props?.active ?? false,
    color: props?.color ?? "",
  })
}
