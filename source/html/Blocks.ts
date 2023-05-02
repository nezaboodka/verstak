// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Verstak, Block, BlockKind, BlockBuilder, Align, BlockCoords, SimpleDelegate, BlockArea, CursorCommandDriver, BaseDriver } from "../core/api"
import { HtmlDriver } from "./HtmlDriver"

// Verstak is based on two fundamental layout structures
// called band and table; and on two special non-visual
// elements called row and group.

// Band is a layout structure, which children are layed
// out naturally: rightwards-downwards.

// Table is layout structure, which children are layed out
// over table cells.

// Row is a special non-visual element, which begins
// new layout row inside band or table.

// Note is either plain or markdown-formatted text
// supporting syntax highlighting for code blocks.

// Group is a special non-visual element for logical
// grouping of bands, tables and other groups.

// Band

export function Band<M = unknown, R = void>(
  builder?: BlockBuilder<HTMLElement, M, R>,
  base?: BlockBuilder<HTMLElement, M, R>): Block<HTMLElement, M, R> {
  return Verstak.claim(Drivers.band, builder, base)
}

// Table

export function Table<M = unknown, R = void>(
  builder?: BlockBuilder<HTMLElement, M, R>,
  base?: BlockBuilder<HTMLElement, M, R>): Block<HTMLElement, M, R> {
  return Verstak.claim(Drivers.table, builder, base)
}

// Row

export function row<T = void>(builder?: (block: void) => T, shiftCursorDown?: number): void {
  fromNewRow(shiftCursorDown)
  builder?.()
}

export function fromNewRow(shiftCursorDown?: number): void {
  Verstak.claim(Drivers.row)
}

export function cursor(areaParams: BlockArea): void {
  Verstak.claim(Drivers.cursor, {
    render(b) {
      b.area = areaParams
    },
  })
}

// Note (either plain or html)

export function Note(content: string, builder?: BlockBuilder<HTMLElement, void, void>): Block<HTMLElement, void, void> {
  return Verstak.claim(Drivers.note, builder, {
    render(b) {
      b.native.innerText = content
    }},
  )
}

export function HtmlNote(content: string, builder?: BlockBuilder<HTMLElement, void, void>): Block<HTMLElement, void, void> {
  return Verstak.claim(Drivers.note, builder, {
    render(b) {
      b.native.innerHTML = content
    }},
  )
}

// Group

export function Group<M = unknown, R = void>(
  builder?: BlockBuilder<HTMLElement, M, R>,
  base?: BlockBuilder<HTMLElement, M, R>): Block<HTMLElement, M, R> {
  return Verstak.claim(Drivers.group, builder, base)
}

// Fragment

export function Fragment<M = unknown, R = void>(
  builder?: BlockBuilder<void, M, R>,
  base?: BlockBuilder<void, M, R>): Block<void, M, R> {
  return Verstak.claim(BaseDriver.fragment, builder, base)
}

// VerstakHtmlDriver

export class VerstakHtmlDriver<T extends HTMLElement> extends HtmlDriver<T> {

  applyKind(block: Block<T, any, any>, value: BlockKind): void {
    const kind = Constants.layouts[value]
    kind && block.native.setAttribute(Constants.attribute, kind)
    VerstakDriversByLayout[value](block)
    super.applyKind(block, value)
  }

  applyCoords(block: Block<T>, value: BlockCoords | undefined): void {
    const s = block.native.style
    if (value) {
      const x1 = value.x1 || 1
      const y1 = value.y1 || 1
      const x2 = value.x2 || x1
      const y2 = value.y2 || y1
      s.gridArea = `${y1} / ${x1} / span ${y2 - y1 + 1} / span ${x2 - x1 + 1}`
    }
    else
      s.gridArea = ""
    super.applyCoords(block, value)
  }

  applyWidthGrowth(block: Block<T>, value: number): void {
    const s = block.native.style
    if (value > 0) {
      s.flexGrow = `${value}`
      s.flexBasis = "0"
    }
    else {
      s.flexGrow = ""
      s.flexBasis = ""
    }
  }

  applyMinWidth(block: Block<T>, value: string): void {
    block.native.style.minWidth = `${value}`
  }

  applyMaxWidth(block: Block<T>, value: string): void {
    block.native.style.maxWidth = `${value}`
  }

  applyHeightGrowth(block: Block<T>, value: number): void {
    const bNode = block.node
    const driver = bNode.driver
    if (driver.isRow) {
      const s = block.native.style
      if (value > 0)
        s.flexGrow = `${value}`
      else
        s.flexGrow = ""
    }
    else {
      const hostDriver = bNode.host.node.driver
      if (hostDriver.isRow) {
        driver.applyBlockAlignment(block, Align.Stretch)
        hostDriver.applyHeightGrowth(bNode.host, value)
      }
    }
  }

  applyMinHeight(block: Block<T>, value: string): void {
    block.native.style.minHeight = `${value}`
  }

  applyMaxHeight(block: Block<T>, value: string): void {
    block.native.style.maxHeight = `${value}`
  }

  applyContentAlignment(block: Block<T>, value: Align): void {
    const s = block.native.style
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

  applyBlockAlignment(block: Block<T>, value: Align): void {
    const s = block.native.style
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

  applyContentWrapping(block: Block<T>, value: boolean): void {
    const s = block.native.style
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

  applyOverlayVisible(block: Block<T>, value: boolean | undefined): void {
    const e = block.native
    const s = e.style
    const host = HtmlDriver.findEffectiveHtmlBlockHost(block).native
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

  applyStyle(block: Block<T, any, any>, secondary: boolean, styleName: string, enabled?: boolean): void {
    const e = block.native
    enabled ??= true
    if (secondary)
      e.classList.toggle(styleName, enabled)
    else
      e.className = enabled ? styleName : ""
  }

  render(block: Block<T>): void | Promise<void> {
    // Add initial line feed automatically
    if (block.kind <= BlockKind.Table)
      fromNewRow()
    return super.render(block)
  }
}

// Constants

const Constants = {
  // block: "блок",
  // row: "строка",
  // layouts: ["цепочка", "таблица", "" /* строка */, "группа", "заметка"],
  // attribute: "вид",
  block: "block",
  row: "row",
  layouts: ["band", "table", "note", "group", "" /* row */, "" /* cursor */],
  attribute: "kind",
}

const Drivers = {
  // display: flex, flex-direction: column
  band: new VerstakHtmlDriver<HTMLElement>(Constants.block, false, b => b.kind = BlockKind.Band),

  // display: grid
  table: new VerstakHtmlDriver<HTMLElement>(Constants.block, false, b => b.kind = BlockKind.Table),

  // display: block
  note: new VerstakHtmlDriver<HTMLElement>(Constants.block, false, b => b.kind = BlockKind.Note),

  // display: contents
  group: new VerstakHtmlDriver<HTMLElement>(Constants.block, false, b => b.kind = BlockKind.Group),

  // display: contents
  // display: flex (row)
  row: new VerstakHtmlDriver<HTMLElement>(Constants.row, true, b => b.kind = BlockKind.Row),

  // cursor control element
  cursor: new CursorCommandDriver(),
}

const VerstakDriversByLayout: Array<SimpleDelegate<HTMLElement>> = [
  b => { // band
    const s = b.native.style
    s.display = "flex"
    s.flexDirection = "column"
    s.alignSelf = b.node.owner.isTable ? "stretch" : "center"
    s.textAlign = "initial"
    s.flexShrink = "1"
    s.minWidth = "0"
  },
  b => { // table
    const s = b.native.style
    s.alignSelf = b.node.owner.isTable ? "stretch" : "center"
    s.display = "grid"
    s.flexBasis = "0"
    s.gridAutoRows = "minmax(min-content, 1fr)"
    s.gridAutoColumns = "minmax(min-content, 1fr)"
    s.textAlign = "initial"
  },
  b => { // note
    const s = b.native.style
    s.alignSelf = b.node.owner.isTable ? "stretch" : "center"
    s.display = "inline-grid"
    s.flexShrink = "1"
  },
  b => { // group
    const s = b.native.style
    s.display = "contents"
  },
  b => { // row
    const s = b.native.style
    s.display = b.node.owner.isTable ? "none" : "flex"
    s.flexDirection = "row"
  },
  // undefined // cursor
]

const AlignToCss = ["stretch", "start", "center", "end"]
const TextAlignCss = ["justify", "left", "center", "right"]
