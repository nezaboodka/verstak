// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2026 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { RtElement, inherit, Mode, Conf, ConfOrScript, Driver, RtNode } from "reactronic"
import { El, ElKind } from "../El.js"
import { ElDriver } from "../ElDriver.js"

// Fragment

export function Fragment<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<void, M, D>>): RtNode<El<void, M, D>> {
  // TODO: use "norm"
  const declared: Conf<El<void, M, D>> = typeof conf === "function" ? { setup: conf } : conf ?? {}
  declared.mode = (declared.mode ?? Mode.default) | Mode.fragment
  return RtElement(inherit(declared, {
    caption: Fragment.name,
    driver: FragmentDriver.glob,
  }))
}

// FragmentDriver

export class FragmentDriver extends ElDriver<HTMLElement> {
  static readonly id = "fragment"
  static readonly glob = new FragmentDriver() as unknown as Driver<El<void, any>>

  constructor() {
    super(FragmentDriver.id, false, el => el.kind = ElKind.group)
  }
}
