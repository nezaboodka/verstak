// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2026 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { RtElement, inherit, ConfOrScript, RtNode } from "reactronic"
import { El, ElKind } from "../El.js"
import { HtmlDriver } from "../WebDriver.js"

// Group

export function Group<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Group.name,
    driver: GroupDriver.glob,
  }))
}

// GroupDriver (display: contents)

export class GroupDriver extends HtmlDriver<HTMLElement> {
  static readonly id = "group"
  static readonly glob = new GroupDriver()

  constructor() {
    super(GroupDriver.id, false, el => el.kind = ElKind.group)
  }
}
