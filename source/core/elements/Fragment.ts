// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2026 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, ReactiveTreeNodeDesc, ReactiveTreeNodeDriver, Script, Mode, ScriptAsync, args2desc, describe } from "reactronic"
import { El, ElKind } from "../El.js"
import { ElDriver } from "../ElDriver.js"

// Fragment

export function Fragment<M = unknown>(
  setup: Script<El<void, M>>): ReactiveTreeNode<El<void, M>>

export function Fragment<M = unknown>(
  key: string,
  setup: Script<El<void, M>>): ReactiveTreeNode<El<void, M>>

export function Fragment<M = unknown>(
  mode: Mode,
  setup: Script<El<void, M>>): ReactiveTreeNode<El<void, M>>

export function Fragment<M = unknown>(
  description: ReactiveTreeNodeDesc<El<void, M>>): ReactiveTreeNode<El<void, M>>

export function Fragment<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<void, M>>,
  setupTask?: ScriptAsync<El<void, M>>,
  creation?: Script<El<void, M>>,
  creationTask?: ScriptAsync<El<void, M>>,
  mounting?: Script<El<void, M>>,
  destruction?: Script<El<void, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<void, M>>): ReactiveTreeNode<El<void, M>>

export function Fragment<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<void, M>> | string | Mode | ReactiveTreeNodeDesc<El<void, M>>,
  setupOrMode?: Script<El<void, M>> | Mode,
  setup?: Script<El<void, M>>,
  setupTask?: ScriptAsync<El<void, M>>,
  creation?: Script<El<void, M>>,
  creationTask?: ScriptAsync<El<void, M>>,
  mounting?: Script<El<void, M>>,
  destruction?: Script<El<void, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<void, M>>): ReactiveTreeNode<El<void, M>> {
  //
  const desc = args2desc(
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis) ?? {}
  desc.mode = (desc.mode ?? Mode.default) | Mode.fragment
  return describe(Fragment.name, FragmentDriver.glob, desc)
}

// FragmentDriver

export class FragmentDriver extends ElDriver<HTMLElement> {
  static readonly id = "fragment"
  static readonly glob = new FragmentDriver() as unknown as ReactiveTreeNodeDriver<El<void, any>>

  constructor() {
    super(FragmentDriver.id, false, el => el.kind = ElKind.group)
  }
}
