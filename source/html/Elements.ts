// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Verstak, El, ElKind, ElBuilder, Align, ElCoords, SimpleDelegate, ElArea, CursorCommandDriver, BaseDriver } from "../core/api.js"
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
  builder?: ElBuilder<HTMLElement, M, R>,
  base?: ElBuilder<HTMLElement, M, R>): El<HTMLElement, M, R> {
  return Verstak.claim(Drivers.section, builder, base)
}

// Table

export function Table<M = unknown, R = void>(
  builder?: ElBuilder<HTMLElement, M, R>,
  base?: ElBuilder<HTMLElement, M, R>): El<HTMLElement, M, R> {
  return Verstak.claim(Drivers.table, builder, base)
}

// Row

export function row<T = void>(builder?: (element: void) => T, shiftCursorDown?: number): void {
  startNewRow(shiftCursorDown)
  builder?.()
}

export function startNewRow(shiftCursorDown?: number): void {
  Verstak.claim(Drivers.row)
}

export function cursor(areaParams: ElArea): void {
  Verstak.claim(Drivers.cursor, {
    update(b) {
      b.area = areaParams
    },
  })
}

// Note (either plain or html)

export function Note(content: string, builder?: ElBuilder<HTMLElement, void, void>): El<HTMLElement, void, void> {
  return Verstak.claim(Drivers.note, builder, {
    update(b) {
      b.native.innerText = content
    }},
  )
}

export function HtmlNote(content: string, builder?: ElBuilder<HTMLElement, void, void>): El<HTMLElement, void, void> {
  return Verstak.claim(Drivers.note, builder, {
    update(b) {
      b.native.innerHTML = content
    }},
  )
}

// Group

export function Group<M = unknown, R = void>(
  builder?: ElBuilder<HTMLElement, M, R>,
  base?: ElBuilder<HTMLElement, M, R>): El<HTMLElement, M, R> {
  return Verstak.claim(Drivers.group, builder, base)
}

// Fragment

export function Fragment<M = unknown, R = void>(
  builder?: ElBuilder<void, M, R>,
  base?: ElBuilder<void, M, R>): El<void, M, R> {
  return Verstak.claim(BaseDriver.fragment, builder, base)
}

// VerstakHtmlDriver

export class VerstakHtmlDriver<T extends HTMLElement> extends HtmlDriver<T> {

  applyKind(element: El<T, any, any>, value: ElKind): void {
    const kind = Constants.layouts[value]
    kind && element.native.setAttribute(Constants.attribute, kind)
    VerstakDriversByLayout[value](element)
    super.applyKind(element, value)
  }

  applyCoords(element: El<T>, value: ElCoords | undefined): void {
    const s = element.native.style
    if (value) {
      const x1 = value.x1 || 1
      const y1 = value.y1 || 1
      const x2 = value.x2 || x1
      const y2 = value.y2 || y1
      s.gridArea = `${y1} / ${x1} / span ${y2 - y1 + 1} / span ${x2 - x1 + 1}`
    }
    else
      s.gridArea = ""
    super.applyCoords(element, value)
  }

  applyWidthGrowth(element: El<T>, value: number): void {
    const s = element.native.style
    if (value > 0) {
      s.flexGrow = `${value}`
      s.flexBasis = "0"
    }
    else {
      s.flexGrow = ""
      s.flexBasis = ""
    }
  }

  applyMinWidth(element: El<T>, value: string): void {
    element.native.style.minWidth = `${value}`
  }

  applyMaxWidth(element: El<T>, value: string): void {
    element.native.style.maxWidth = `${value}`
  }

  applyHeightGrowth(element: El<T>, value: number): void {
    const bNode = element.node
    const driver = bNode.driver
    if (driver.isSeparator) {
      const s = element.native.style
      if (value > 0)
        s.flexGrow = `${value}`
      else
        s.flexGrow = ""
    }
    else {
      const hostDriver = bNode.host.driver
      if (hostDriver.isSeparator) {
        driver.applyElementAlignment(element, Align.ToBounds)
        hostDriver.applyHeightGrowth(bNode.host.slot!.instance, value)
      }
    }
  }

  applyMinHeight(element: El<T>, value: string): void {
    element.native.style.minHeight = `${value}`
  }

  applyMaxHeight(element: El<T>, value: string): void {
    element.native.style.maxHeight = `${value}`
  }

  applyContentAlignment(element: El<T>, value: Align): void {
    const s = element.native.style
    if ((value & Align.Default) === 0) { // if not auto mode
      const v = AlignToCss[(value >> 2) & 0b11]
      const h = AlignToCss[value & 0b11]
      const t = TextAlignCss[value & 0b11]
      s.justifyContent = v
      s.alignItems = h
      s.textAlign = t
    }
    else
      s.justifyContent = s.alignContent = s.textAlign = ""
  }

  applyElementAlignment(element: El<T>, value: Align): void {
    const s = element.native.style
    if ((value & Align.Default) === 0) { // if not auto mode
      const v = AlignToCss[(value >> 2) & 0b11]
      const h = AlignToCss[value & 0b11]
      s.alignSelf = v
      s.justifySelf = h
    }
    // else if (heightGrowth > 0) {
    //   s.alignSelf = AlignToCss[Align.Stretch]
    // }
    else
      s.alignSelf = s.justifySelf = ""
  }

  applyContentWrapping(element: El<T>, value: boolean): void {
    const s = element.native.style
    if (value) {
      s.flexFlow = "wrap"
      s.overflow = ""
      s.textOverflow = ""
      s.whiteSpace = ""
    }
    else {
      s.flexFlow = ""
      s.overflow = "hidden"
      s.textOverflow = "ellipsis"
      s.whiteSpace = "nowrap"
    }
  }

  applyOverlayVisible(element: El<T>, value: boolean | undefined): void {
    const e = element.native
    const s = e.style
    const host = HtmlDriver.findEffectiveHtmlElementHost(element).native
    if (value === true) {
      const doc = document.body
      const rect = host.getBoundingClientRect()
      if (doc.offsetWidth - rect.left > rect.right) // rightward
        s.left = "0", s.right = ""
      else // leftward
        s.left = "", s.right = "0"
      if (doc.clientHeight - rect.top > rect.bottom) // downward
        s.top = "100%", s.bottom = ""
      else // upward
        s.top = "", s.bottom = "100%"
      s.display = ""
      s.position = "absolute"
      s.minWidth = "100%"
      s.boxSizing = "border-box"
      host.style.position = "relative"
    }
    else {
      host.style.position = ""
      if (value === false)
        s.display = "none"
      else // overlayVisible === undefined
        s.position = s.display = s.left = s.right = s.top = s.bottom = "" // clear
    }
  }

  applyStyle(element: El<T, any, any>, secondary: boolean, styleName: string, enabled?: boolean): void {
    const native = element.native
    enabled ??= true
    if (secondary)
      native.classList.toggle(styleName, enabled)
    else
      native.className = enabled ? styleName : ""
  }

  update(element: El<T>): void | Promise<void> {
    // Add initial line feed automatically
    if (element.kind <= ElKind.Table)
      startNewRow()
    return super.update(element)
  }
}

// Constants

const Constants = {
  // el: "эль",
  // row: "строка",
  // layouts: ["цепочка", "таблица", "" /* строка */, "группа", "заметка"],
  // attribute: "вид",
  el: "el",
  row: "row",
  layouts: ["section", "table", "note", "group", "" /* row */, "" /* cursor */],
  attribute: "kind",
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

const VerstakDriversByLayout: Array<SimpleDelegate<HTMLElement>> = [
  el => { // section
    const s = el.native.style
    s.display = "flex"
    s.flexDirection = "column"
    s.alignSelf = el.node.owner.slot!.instance.isTable ? "stretch" : "center"
    s.textAlign = "initial"
    s.flexShrink = "1"
    s.minWidth = "0"
  },
  el => { // table
    const s = el.native.style
    s.alignSelf = el.node.owner.slot!.instance.isTable ? "stretch" : "center"
    s.display = "grid"
    s.flexBasis = "0"
    s.gridAutoRows = "minmax(min-content, 1fr)"
    s.gridAutoColumns = "minmax(min-content, 1fr)"
    s.textAlign = "initial"
  },
  el => { // note
    const s = el.native.style
    s.alignSelf = el.node.owner.slot!.instance.isTable ? "stretch" : "center"
    s.display = "inline-grid"
    s.flexShrink = "1"
  },
  el => { // group
    const s = el.native.style
    s.display = "contents"
  },
  el => { // row
    const s = el.native.style
    s.display = el.node.owner.slot!.instance.isTable ? "none" : "flex"
    s.flexDirection = "row"
  },
  // undefined // cursor
]

const AlignToCss = ["stretch", "start", "center", "end"]
const TextAlignCss = ["justify", "left", "center", "right"]
