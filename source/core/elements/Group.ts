// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2026 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, ReactiveTreeNodeDesc, Script, Mode, ScriptAsync, describe } from "reactronic"
import { El, ElKind } from "../El.js"
import { HtmlDriver } from "../WebDriver.js"

// Group

export function Group<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Group<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Group<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Group<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Group<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Group<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Group.name, GroupDriver.glob,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// GroupDriver (display: contents)

export class GroupDriver extends HtmlDriver<HTMLElement> {
  static readonly id = "group"
  static readonly glob = new GroupDriver()

  constructor() {
    super(GroupDriver.id, false, el => el.kind = ElKind.group)
  }
}
