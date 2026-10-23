// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, ReactiveTreeNodeDesc, Script, Mode, ScriptAsync, args2desc, setBasis } from "reactronic"
import { Element, El, OnClick } from "verstak"
import { rxModel } from "./common/Utils.js"
import { Theme } from "./Theme.js"
import { Icon } from "./Icon.v.js"

export type ToggleModel = {
  label?: string
  checked?: boolean
  color?: string
}

export function Toggle(
  setup: Script<El<HTMLElement, ToggleModel>>): ReactiveTreeNode<El<HTMLElement, ToggleModel>>

export function Toggle(
  key: string,
  setup: Script<El<HTMLElement, ToggleModel>>): ReactiveTreeNode<El<HTMLElement, ToggleModel>>

export function Toggle(
  mode: Mode,
  setup: Script<El<HTMLElement, ToggleModel>>): ReactiveTreeNode<El<HTMLElement, ToggleModel>>

export function Toggle(
  description: ReactiveTreeNodeDesc<El<HTMLElement, ToggleModel>>): ReactiveTreeNode<El<HTMLElement, ToggleModel>>

export function Toggle(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, ToggleModel>>,
  setupTask?: ScriptAsync<El<HTMLElement, ToggleModel>>,
  creation?: Script<El<HTMLElement, ToggleModel>>,
  creationTask?: ScriptAsync<El<HTMLElement, ToggleModel>>,
  mounting?: Script<El<HTMLElement, ToggleModel>>,
  destruction?: Script<El<HTMLElement, ToggleModel>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, ToggleModel>>): ReactiveTreeNode<El<HTMLElement, ToggleModel>>

export function Toggle(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, ToggleModel>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, ToggleModel>>,
  setupOrMode?: Script<El<HTMLElement, ToggleModel>> | Mode,
  setup?: Script<El<HTMLElement, ToggleModel>>,
  setupTask?: ScriptAsync<El<HTMLElement, ToggleModel>>,
  creation?: Script<El<HTMLElement, ToggleModel>>,
  creationTask?: ScriptAsync<El<HTMLElement, ToggleModel>>,
  mounting?: Script<El<HTMLElement, ToggleModel>>,
  destruction?: Script<El<HTMLElement, ToggleModel>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, ToggleModel>>): ReactiveTreeNode<El<HTMLElement, ToggleModel>> {
  //
  const description = args2desc(
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
  return (
    Element<ToggleModel>(setBasis(description, {
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
    }))
  )
}
