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

export function Group<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Group<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Group<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Group<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Group<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Group<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
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
