// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, ReactiveTreeNodeDesc, Script, Mode, ScriptTask, args2desc } from "reactronic"
import { Element, El } from "verstak"
import { Theme } from "./Theme.js"

// Icon

export function Icon<D = unknown>(
  name: string,
  setup: Script<El<HTMLElement, void, D>>,
  setupTask?: ScriptTask<El<HTMLElement, void, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, void, D>>): ReactiveTreeNode<El<HTMLElement, void, D>>

export function Icon<D = unknown>(
  name: string,
  key: string,
  setup: Script<El<HTMLElement, void, D>>,
  setupTask?: ScriptTask<El<HTMLElement, void, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, void, D>>): ReactiveTreeNode<El<HTMLElement, void, D>>

export function Icon<D = unknown>(
  name: string,
  mode: Mode,
  setup: Script<El<HTMLElement, void, D>>,
  setupTask?: ScriptTask<El<HTMLElement, void, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, void, D>>): ReactiveTreeNode<El<HTMLElement, void, D>>

export function Icon<D = unknown>(
  name: string,
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, void, D>>,
  setupTask?: ScriptTask<El<HTMLElement, void, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, void, D>>): ReactiveTreeNode<El<HTMLElement, void, D>>

export function Icon<D = unknown>(
  name: string,
  description?: ReactiveTreeNodeDesc<El<HTMLElement, void, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, void, D>>): ReactiveTreeNode<El<HTMLElement, void, D>>

export function Icon<D = unknown>(
  name: string,
  p1?: Script<El<HTMLElement, void, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, void, D>>,
  p2?: Script<El<HTMLElement, void, D>> | ScriptTask<El<HTMLElement, void, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, void, D>>,
  p3?: Script<El<HTMLElement, void, D>> | ScriptTask<El<HTMLElement, void, D>> | ReactiveTreeNodeDesc<El<HTMLElement, void, D>>,
  p4?: ScriptTask<El<HTMLElement, void, D>> | ReactiveTreeNodeDesc<El<HTMLElement, void, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, void, D>>): ReactiveTreeNode<El<HTMLElement, void, D>> {
  //
  const description = args2desc(Icon.name, p1, p2, p3, p4, p5)
  return (
    Element<void, D>(description, {
      signalArgs: { name },
      setup() {
        const theme = Theme.current.icon
        this.useStylingPreset(name)
        this.useStylingPreset(theme.main)
      },
    })
  )
}
