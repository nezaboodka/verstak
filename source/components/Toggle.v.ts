// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, ReactiveTreeNodeDesc, Script, Mode, ScriptTask, args2desc } from "reactronic"
import { Element, El, OnClick } from "verstak"
import { rxModel } from "./common/Utils.js"
import { Theme } from "./Theme.js"
import { Icon } from "./Icon.v.js"

export type ToggleModel = {
  label?: string
  checked?: boolean
  color?: string
}

// Toggle

export function Toggle<D = unknown>(
  setup: Script<El<HTMLElement, ToggleModel, D>>,
  setupTask?: ScriptTask<El<HTMLElement, ToggleModel, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, ToggleModel, D>>): ReactiveTreeNode<El<HTMLElement, ToggleModel, D>>

export function Toggle<D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, ToggleModel, D>>,
  setupTask?: ScriptTask<El<HTMLElement, ToggleModel, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, ToggleModel, D>>): ReactiveTreeNode<El<HTMLElement, ToggleModel, D>>

export function Toggle<D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, ToggleModel, D>>,
  setupTask?: ScriptTask<El<HTMLElement, ToggleModel, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, ToggleModel, D>>): ReactiveTreeNode<El<HTMLElement, ToggleModel, D>>

export function Toggle<D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, ToggleModel, D>>,
  setupTask?: ScriptTask<El<HTMLElement, ToggleModel, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, ToggleModel, D>>): ReactiveTreeNode<El<HTMLElement, ToggleModel, D>>

export function Toggle<D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, ToggleModel, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, ToggleModel, D>>): ReactiveTreeNode<El<HTMLElement, ToggleModel, D>>

export function Toggle<D = unknown>(
  p1?: Script<El<HTMLElement, ToggleModel, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, ToggleModel, D>>,
  p2?: Script<El<HTMLElement, ToggleModel, D>> | ScriptTask<El<HTMLElement, ToggleModel, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, ToggleModel, D>>,
  p3?: Script<El<HTMLElement, ToggleModel, D>> | ScriptTask<El<HTMLElement, ToggleModel, D>> | ReactiveTreeNodeDesc<El<HTMLElement, ToggleModel, D>>,
  p4?: ScriptTask<El<HTMLElement, ToggleModel, D>> | ReactiveTreeNodeDesc<El<HTMLElement, ToggleModel, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, ToggleModel, D>>): ReactiveTreeNode<El<HTMLElement, ToggleModel, D>> {
  //
  const description = args2desc(Toggle.name, p1, p2, p3, p4, p5)
  return (
    Element<ToggleModel, D>(description, {
      creation() {
        this.model ??= rxModel({
          label: ReactiveTreeNode.current.key,
          checked: true,
          color: "green" }) // model is either taken from parameter or created internally
      },
      setup() {
        const m = this.model
        const theme = Theme.current
        const toggleTheme = theme.toggle
        this.useStylingPreset(toggleTheme.main)
        Icon(`fa-solid fa-toggle-${m.checked ? "on" : "off"}`, {
          setup(el, base) {
            base()
            this.useStylingPreset(toggleTheme.icon)
            this.style.color = m.checked ? (theme.positiveColor ?? "") : "" // subscribe to ToggleModel.checked
          },
        })
        if (m.label) {
          Element({
            mode: Mode.primitive,
            setup(el, base) {
              base()
              this.text = m.label
              this.useStylingPreset(toggleTheme.label)
            },
          })
        }

        OnClick(this.native, () => {
          this.model.checked = !this.model.checked
        })
      },
    })
  )
}
