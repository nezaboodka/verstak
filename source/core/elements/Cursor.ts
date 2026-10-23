// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2026 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { describe } from "reactronic"
import { ElKind, ElPlace } from "../El.js"
import { ElDriver } from "../ElDriver.js"

// Cursor

export function cursor(place: ElPlace): void {
  describe(cursor.name, CursorCommandDriver.glob, {
    setup() {
      this.place = place
    },
  })
}

// CursorCommand

export class CursorCommand {
  absolute?: string
  columnShift?: number
  rowShift?: number
}

// CursorCommandDriver

export class CursorCommandDriver extends ElDriver<Element, unknown> {
  static readonly id = "cursor"
  // cursor control element
  static readonly glob = new CursorCommandDriver()

  constructor() {
    super(CursorCommandDriver.id, false, el => el.kind = ElKind.cursor)
  }
}
