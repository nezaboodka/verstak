// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2026 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { RtElement, inherit, ConfOrScript, RtNode } from "reactronic"
import { El, ElKind } from "../El.js"
import { HtmlDriver } from "../WebDriver.js"

// Table

export function Table<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Table.name,
    driver: TableDriver.glob,
  }))
}

// TableDriver (display: grid)

export class TableDriver extends HtmlDriver<HTMLElement> {
  static readonly id = "el"
  static readonly glob = new TableDriver()

  constructor() {
    super(TableDriver.id, false, el => el.kind = ElKind.table)
  }
}
