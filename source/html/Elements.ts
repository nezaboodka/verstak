// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Verstak, RxNodeDecl } from "../core/api.js"
import { Constants, CursorCommandDriver, El, ElKind, ElArea } from "./El.js"
import { HtmlDriver } from "./HtmlDriver.js"

// Verstak is based on two fundamental layout structures
// called section and table; and on two special non-visual
// elements called row and group.

// Section is a layout structure, which children are layed
// out naturally: rightwards-downwards.

// Table is layout structure, which children are layed out
// over table cells.

// Row is a special non-visual element, which begins
// new layout row inside section or table.

// Note is either plain or markdown-formatted text
// supporting syntax highlighting for code blocks.

// Group is a special non-visual element for logical
// grouping of sections, tables and other groups.

// Section

export function Section<M = unknown, R = void>(
  decl?: RxNodeDecl<El<HTMLElement, M, R>>,
  preset?: RxNodeDecl<El<HTMLElement, M, R>>): El<HTMLElement, M, R> {
  return Verstak.declare(Drivers.section, decl, preset)
}

// Table

export function Table<M = unknown, R = void>(
  decl?: RxNodeDecl<El<HTMLElement, M, R>>,
  preset?: RxNodeDecl<El<HTMLElement, M, R>>): El<HTMLElement, M, R> {
  return Verstak.declare(Drivers.table, decl, preset)
}

// Row

export function row<T = void>(builder?: (element: void) => T, shiftCursorDown?: number): void {
  startNewRow(shiftCursorDown)
  builder?.()
}

export function startNewRow(shiftCursorDown?: number): void {
  Verstak.declare(Drivers.row)
}

export function cursor(areaParams: ElArea): void {
  Verstak.declare(Drivers.cursor, {
    update(b) {
      b.area = areaParams
    },
  })
}

// Note (either plain or html)

export function Note(content: string, decl?: RxNodeDecl<El<HTMLElement, void, void>>): El<HTMLElement, void, void> {
  return Verstak.declare(Drivers.note, decl, {
    update(b) {
      b.native.innerText = content
    }},
  )
}

export function HtmlNote(content: string, decl?: RxNodeDecl<El<HTMLElement, void, void>>): El<HTMLElement, void, void> {
  return Verstak.declare(Drivers.note, decl, {
    update(b) {
      b.native.innerHTML = content
    }},
  )
}

// Group

export function Group<M = unknown, R = void>(
  decl?: RxNodeDecl<El<HTMLElement, M, R>>,
  preset?: RxNodeDecl<El<HTMLElement, M, R>>): El<HTMLElement, M, R> {
  return Verstak.declare(Drivers.group, decl, preset)
}

// Fragment

export function Fragment<M = unknown, R = void>(
  decl?: RxNodeDecl<El<void, M, R>>,
  preset?: RxNodeDecl<El<void, M, R>>): El<void, M, R> {
  return Verstak.declare(HtmlDriver.group, decl, preset) as El<void, M, R>
}

// VerstakHtmlDriver

export class VerstakHtmlDriver<T extends HTMLElement> extends HtmlDriver<T> {
  update(element: El<T>): void | Promise<void> {
    // Add initial line feed automatically
    if (element.kind <= ElKind.Table)
      startNewRow()
    return super.update(element)
  }
}

const Drivers = {
  // display: flex, flex-direction: column
  section: new VerstakHtmlDriver<HTMLElement>(Constants.el, false, el => el.kind = ElKind.Section),

  // display: grid
  table: new VerstakHtmlDriver<HTMLElement>(Constants.el, false, el => el.kind = ElKind.Table),

  // display: block
  note: new VerstakHtmlDriver<HTMLElement>(Constants.el, false, el => el.kind = ElKind.Note),

  // display: contents
  group: new VerstakHtmlDriver<HTMLElement>(Constants.el, false, el => el.kind = ElKind.Group),

  // display: contents
  // display: flex (row)
  row: new VerstakHtmlDriver<HTMLElement>(Constants.row, true, el => el.kind = ElKind.Row),

  // cursor control element
  cursor: new CursorCommandDriver(),
}
