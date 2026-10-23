// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, ReactiveTreeNodeDesc, Script, Mode, ScriptAsync, args2desc, setBasis } from "reactronic"
import { Element, El } from "verstak"
import { Theme } from "./Theme.js"

// Icon

export function Icon<D = unknown>(
  name: string,
  setup: Script<El<HTMLElement, void, D>>): ReactiveTreeNode<El<HTMLElement, void, D>>

export function Icon<D = unknown>(
  name: string,
  key: string,
  setup: Script<El<HTMLElement, void, D>>): ReactiveTreeNode<El<HTMLElement, void, D>>

export function Icon<D = unknown>(
  name: string,
  mode: Mode,
  setup: Script<El<HTMLElement, void, D>>): ReactiveTreeNode<El<HTMLElement, void, D>>

export function Icon<D = unknown>(
  name: string,
  description: ReactiveTreeNodeDesc<El<HTMLElement, void, D>>): ReactiveTreeNode<El<HTMLElement, void, D>>

export function Icon<D = unknown>(
  name: string,
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, void, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, void, D>>,
  creation?: Script<El<HTMLElement, void, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, void, D>>,
  mounting?: Script<El<HTMLElement, void, D>>,
  destruction?: Script<El<HTMLElement, void, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, void, D>>): ReactiveTreeNode<El<HTMLElement, void, D>>

export function Icon<D = unknown>(
  name: string,
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, void, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, void, D>>,
  setupOrMode?: Script<El<HTMLElement, void, D>> | Mode,
  setup?: Script<El<HTMLElement, void, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, void, D>>,
  creation?: Script<El<HTMLElement, void, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, void, D>>,
  mounting?: Script<El<HTMLElement, void, D>>,
  destruction?: Script<El<HTMLElement, void, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, void, D>>): ReactiveTreeNode<El<HTMLElement, void, D>> {
  //
  const description = args2desc(
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
  return (
    Element<void, D>(setBasis(description, {
      signalArgs: { name },
      setup() {
        const theme = Theme.current.icon
        this.useStylingPreset(name)
        this.useStylingPreset(theme.main)
      },
    }))
  )
}
