// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2026 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, ReactiveTreeNodeDesc, Script, Mode, ScriptTask, describe } from "reactronic"
import { El, ElKind } from "../El.js"
import { HtmlDriver } from "../WebDriver.js"

// Table

export function Table<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Table<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Table<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Table<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Table<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Table<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Table.name, TableDriver.glob, p1, p2, p3, p4, p5)
}

// TableDriver (display: grid)

export class TableDriver extends HtmlDriver<HTMLElement> {
  static readonly id = "el"
  static readonly glob = new TableDriver()

  constructor() {
    super(TableDriver.id, false, el => el.kind = ElKind.table)
  }
}
