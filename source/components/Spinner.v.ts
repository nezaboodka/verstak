// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { inherit, Mode, ConfOrScript, RtNode } from "reactronic"
import { Element, El } from "verstak"
import { rxModel, ValuesOrRefs } from "./common/Utils.js"

export type SpinnerModel = {
  active: boolean
  color: string
}

// Spinner

export function Spinner<D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, SpinnerModel, D>>): RtNode<El<HTMLElement, SpinnerModel, D>> {
  return Element<SpinnerModel, D>(inherit(conf, {
    caption: Spinner.name,
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
}

export function composeSpinnerModel<T>(props?: Partial<ValuesOrRefs<SpinnerModel>>): SpinnerModel
{
  return rxModel({
    active: props?.active ?? false,
    color: props?.color ?? "",
  })
}
