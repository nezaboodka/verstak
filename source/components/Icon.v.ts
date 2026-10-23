// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, ReactiveTreeNodeDesc, Script, Mode, ScriptAsync, args2desc, setBasis } from "reactronic"
import { Element, El } from "verstak"
import { Theme } from "./Theme.js"

export function Icon(
  name: string,
  setup: Script<El<HTMLElement, void>>): ReactiveTreeNode<El<HTMLElement, void>>

export function Icon(
  name: string,
  key: string,
  setup: Script<El<HTMLElement, void>>): ReactiveTreeNode<El<HTMLElement, void>>

export function Icon(
  name: string,
  mode: Mode,
  setup: Script<El<HTMLElement, void>>): ReactiveTreeNode<El<HTMLElement, void>>

export function Icon(
  name: string,
  description: ReactiveTreeNodeDesc<El<HTMLElement, void>>): ReactiveTreeNode<El<HTMLElement, void>>

export function Icon(
  name: string,
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, void>>,
  setupTask?: ScriptAsync<El<HTMLElement, void>>,
  creation?: Script<El<HTMLElement, void>>,
  creationTask?: ScriptAsync<El<HTMLElement, void>>,
  mounting?: Script<El<HTMLElement, void>>,
  destruction?: Script<El<HTMLElement, void>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, void>>): ReactiveTreeNode<El<HTMLElement, void>>

export function Icon(
  name: string,
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, void>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, void>>,
  setupOrMode?: Script<El<HTMLElement, void>> | Mode,
  setup?: Script<El<HTMLElement, void>>,
  setupTask?: ScriptAsync<El<HTMLElement, void>>,
  creation?: Script<El<HTMLElement, void>>,
  creationTask?: ScriptAsync<El<HTMLElement, void>>,
  mounting?: Script<El<HTMLElement, void>>,
  destruction?: Script<El<HTMLElement, void>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, void>>): ReactiveTreeNode<El<HTMLElement, void>> {
  //
  const description = args2desc(
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
  return (
    Element(setBasis(description, {
      signalArgs: { name },
      setup() {
        const theme = Theme.current.icon
        this.useStylingPreset(name)
        this.useStylingPreset(theme.main)
      },
    }))
  )
}
