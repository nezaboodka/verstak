// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2026 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, ReactiveTreeNodeDesc, ReactiveTreeNodeDriver, Script, Mode, ScriptTask, args2desc, describe } from "reactronic"
import { El, ElKind } from "../El.js"
import { ElDriver } from "../ElDriver.js"

// Fragment

export function Fragment<M = unknown, D = unknown>(
  setup: Script<El<void, M, D>>,
  setupTask?: ScriptTask<El<void, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<void, M, D>>): ReactiveTreeNode<El<void, M, D>>

export function Fragment<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<void, M, D>>,
  setupTask?: ScriptTask<El<void, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<void, M, D>>): ReactiveTreeNode<El<void, M, D>>

export function Fragment<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<void, M, D>>,
  setupTask?: ScriptTask<El<void, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<void, M, D>>): ReactiveTreeNode<El<void, M, D>>

export function Fragment<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<void, M, D>>,
  setupTask?: ScriptTask<El<void, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<void, M, D>>): ReactiveTreeNode<El<void, M, D>>

export function Fragment<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<void, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<void, M, D>>): ReactiveTreeNode<El<void, M, D>>

export function Fragment<M = unknown, D = unknown>(
  p1?: Script<El<void, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<void, M, D>>,
  p2?: Script<El<void, M, D>> | ScriptTask<El<void, M, D>> | Mode | ReactiveTreeNodeDesc<El<void, M, D>>,
  p3?: Script<El<void, M, D>> | ScriptTask<El<void, M, D>> | ReactiveTreeNodeDesc<El<void, M, D>>,
  p4?: ScriptTask<El<void, M, D>> | ReactiveTreeNodeDesc<El<void, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<void, M, D>>): ReactiveTreeNode<El<void, M, D>> {
  //
  const desc = args2desc(Fragment.name, p1, p2, p3, p4, p5) ?? {}
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
