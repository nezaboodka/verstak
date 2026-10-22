// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2026 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, ReactiveTreeNodeDesc, Script, Mode, ScriptAsync, describe } from "reactronic"
import { El, ElKind } from "../El.js"
import { HtmlDriver } from "../WebDriver.js"

// Table

export function Table<M = unknown>(
  body: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Table<M = unknown>(
  key: string,
  body: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Table<M = unknown>(
  mode: Mode,
  body: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Table<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Table<M = unknown>(
  key?: string,
  mode?: Mode,
  body?: Script<El<HTMLElement, M>>,
  bodyTask?: ScriptAsync<El<HTMLElement, M>>,
  preparation?: Script<El<HTMLElement, M>>,
  preparationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  finalization?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Table<M = unknown>(
  bodyOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  bodyOrMode?: Script<El<HTMLElement, M>> | Mode,
  body?: Script<El<HTMLElement, M>>,
  bodyTask?: ScriptAsync<El<HTMLElement, M>>,
  preparation?: Script<El<HTMLElement, M>>,
  preparationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  finalization?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Table.name, TableDriver.glob,
    bodyOrKeyOrModeDescription, bodyOrMode, body, bodyTask,
    preparation, preparationTask, mounting, finalization, signalArgs, unmounted, basis)
}

// TableDriver (display: grid)

export class TableDriver extends HtmlDriver<HTMLElement> {
  static readonly id = "el"
  static readonly glob = new TableDriver()

  constructor() {
    super(TableDriver.id, false, el => el.kind = ElKind.table)
  }
}
