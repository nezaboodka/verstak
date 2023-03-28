// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { VBlock, Layout, BlockBuilder, Align, CellRange, SimpleOperation } from "../core/api"
import { HtmlDriver } from "./HtmlDriver"

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

export function VSection<M = unknown, R = void>(
  builder?: BlockBuilder<HTMLElement, M, R>,
  base?: BlockBuilder<HTMLElement, M, R>): VBlock<HTMLElement, M, R> {
  return VBlock.claim(Drivers.section, builder, base)
}

// Table

export function VTable<M = unknown, R = void>(
  builder?: BlockBuilder<HTMLElement, M, R>,
  base?: BlockBuilder<HTMLElement, M, R>): VBlock<HTMLElement, M, R> {
  return VBlock.claim(Drivers.table, builder, base)
}

// Row

export function row<T = void>(builder?: (block: void) => T, key?: string): void {
  fromNewRow(key)
  builder?.()
}

export function fromNewRow(key?: string): void {
  VBlock.claim(Drivers.row, { key })
}

// Note (either plain or html)

export function VNote(content: string, builder?: BlockBuilder<HTMLElement, void, void>): VBlock<HTMLElement, void, void> {
  return VBlock.claim(Drivers.note, builder, {
    render(b) {
      b.native.innerText = content
    }},
  )
}

export function VHtmlNote(content: string, builder?: BlockBuilder<HTMLElement, void, void>): VBlock<HTMLElement, void, void> {
  return VBlock.claim(Drivers.note, builder, {
    render(b) {
      b.native.innerHTML = content
    }},
  )
}

// Group

export function VGroup<M = unknown, R = void>(
  builder?: BlockBuilder<HTMLElement, M, R>,
  base?: BlockBuilder<HTMLElement, M, R>): VBlock<HTMLElement, M, R> {
  return VBlock.claim(Drivers.group, builder, base)
}

// VerstakHtmlDriver

export class VerstakHtmlDriver<T extends HTMLElement> extends HtmlDriver<T> {

  applyChildrenLayout(block: VBlock<T, any, any>, value: Layout): void {
    const kind = Constants.layouts[value]
    kind && block.native.setAttribute(Constants.attribute, kind)
    VerstakDriversByLayout[value](block)
    super.applyChildrenLayout(block, value)
  }

  applyCellRange(block: VBlock<T>, value: CellRange | undefined): void {
    const css = block.native.style
    if (value) {
      const x1 = value.x1 || 1
      const y1 = value.y1 || 1
      const x2 = value.x2 || x1
      const y2 = value.y2 || y1
      css.gridArea = `${y1} / ${x1} / span ${y2 - y1 + 1} / span ${x2 - x1 + 1}`
    }
    else
      css.gridArea = ""
    super.applyCellRange(block, value)
  }

  applyWidthGrowth(block: VBlock<T>, value: number): void {
    const css = block.native.style
    if (value > 0) {
      css.flexGrow = `${value}`
      css.flexBasis = "0"
    }
    else {
      css.flexGrow = ""
      css.flexBasis = ""
    }
  }

  applyMinWidth(block: VBlock<T>, value: string): void {
    block.native.style.minWidth = `${value}`
  }

  applyMaxWidth(block: VBlock<T>, value: string): void {
    block.native.style.maxWidth = `${value}`
  }

  applyHeightGrowth(block: VBlock<T>, value: number): void {
    const bNode = block.descriptor
    const driver = bNode.driver
    if (driver.isRow) {
      const css = block.native.style
      if (value > 0)
        css.flexGrow = `${value}`
      else
        css.flexGrow = ""
    }
    else {
      const hostDriver = bNode.host.descriptor.driver
      if (hostDriver.isRow) {
        driver.applyBlockAlignment(block, Align.Stretch)
        hostDriver.applyHeightGrowth(bNode.host, value)
      }
    }
  }

  applyMinHeight(block: VBlock<T>, value: string): void {
    block.native.style.minHeight = `${value}`
  }

  applyMaxHeight(block: VBlock<T>, value: string): void {
    block.native.style.maxHeight = `${value}`
  }

  applyContentAlignment(block: VBlock<T>, value: Align): void {
    const css = block.native.style
    if ((value & Align.Default) === 0) { // if not auto mode
      const v = AlignToCss[(value >> 2) & 0b11]
      const h = AlignToCss[value & 0b11]
      const t = TextAlignCss[value & 0b11]
      css.justifyContent = v
      css.alignItems = h
      css.textAlign = t
    }
    else
      css.justifyContent = css.alignContent = css.textAlign = ""
  }

  applyBlockAlignment(block: VBlock<T>, value: Align): void {
    const css = block.native.style
    if ((value & Align.Default) === 0) { // if not auto mode
      const v = AlignToCss[(value >> 2) & 0b11]
      const h = AlignToCss[value & 0b11]
      css.alignSelf = v
      css.justifySelf = h
    }
    // else if (heightGrowth > 0) {
    //   css.alignSelf = AlignToCss[Align.Stretch]
    // }
    else
      css.alignSelf = css.justifySelf = ""
  }

  applyContentWrapping(block: VBlock<T>, value: boolean): void {
    const css = block.native.style
    if (value) {
      css.flexFlow = "wrap"
      css.overflow = ""
      css.textOverflow = ""
      css.whiteSpace = ""
    }
    else {
      css.flexFlow = ""
      css.overflow = "hidden"
      css.textOverflow = "ellipsis"
      css.whiteSpace = "nowrap"
    }
  }

  applyOverlayVisible(block: VBlock<T>, value: boolean | undefined): void {
    const e = block.native
    const css = e.style
    const host = HtmlDriver.findEffectiveHtmlBlockHost(block).native
    if (value === true) {
      const doc = document.body
      const rect = host.getBoundingClientRect()
      if (doc.offsetWidth - rect.left > rect.right) // rightward
        css.left = "0", css.right = ""
      else // leftward
        css.left = "", css.right = "0"
      if (doc.clientHeight - rect.top > rect.bottom) // downward
        css.top = "100%", css.bottom = ""
      else // upward
        css.top = "", css.bottom = "100%"
      css.display = ""
      css.position = "absolute"
      css.minWidth = "100%"
      css.boxSizing = "border-box"
      host.style.position = "relative"
    }
    else {
      host.style.position = ""
      if (value === false)
        css.display = "none"
      else // overlayVisible === undefined
        css.position = css.display = css.left = css.right = css.top = css.bottom = "" // clear
    }
  }

  applyStyle(block: VBlock<T, any, any>, secondary: boolean, styleName: string, enabled?: boolean): void {
    const e = block.native
    enabled ??= true
    if (secondary)
      e.classList.toggle(styleName, enabled)
    else
      e.className = enabled ? styleName : ""
  }

  render(block: VBlock<T>): void | Promise<void> {
    // Add initial line feed automatically
    if (block.childrenLayout < Layout.Row)
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
  layouts: ["section", "table", "" /* row */, "group", "note"],
  attribute: "kind",
}

const Drivers = {
  // display: flex, flex-direction: column
  section: new VerstakHtmlDriver<HTMLElement>(Constants.block, false, b => b.childrenLayout = Layout.Section),

  // display: grid
  table: new VerstakHtmlDriver<HTMLElement>(Constants.block, false, b => b.childrenLayout = Layout.Table),

  // display: contents
  // display: flex (row)
  row: new VerstakHtmlDriver<HTMLElement>(Constants.row, true, b => b.childrenLayout = Layout.Row),

  // display: contents
  group: new VerstakHtmlDriver<HTMLElement>(Constants.block, false, b => b.childrenLayout = Layout.Group),

  // display: block
  note: new VerstakHtmlDriver<HTMLElement>(Constants.block, false, b => b.childrenLayout = Layout.Note),
}

const VerstakDriversByLayout: Array<SimpleOperation<HTMLElement>> = [
  b => { // section
    const css = b.native.style
    css.display = "flex"
    css.flexDirection = "column"
    css.alignSelf = b.descriptor.owner.isTable ? "stretch" : "center"
    css.textAlign = "initial"
    css.flexShrink = "1"
    css.minWidth = "0"
  },
  b => { // table
    const css = b.native.style
    css.alignSelf = b.descriptor.owner.isTable ? "stretch" : "center"
    css.display = "grid"
    css.flexBasis = "0"
    css.gridAutoRows = "minmax(min-content, 1fr)"
    css.gridAutoColumns = "minmax(min-content, 1fr)"
    css.textAlign = "initial"
  },
  b => { // row
    const css = b.native.style
    css.display = b.descriptor.owner.isTable ? "none" : "flex"
    css.flexDirection = "row"
  },
  b => { // group
    const css = b.native.style
    css.display = "contents"
  },
  b => { // note
    const css = b.native.style
    css.alignSelf = b.descriptor.owner.isTable ? "stretch" : "center"
    css.display = "inline-grid"
    css.flexShrink = "1"
    // Wrapping=false
    // css.overflow = "hidden"
    // css.textOverflow = "ellipsis"
    // css.whiteSpace = "nowrap"
    // Wrapping=true
    css.overflow = ""
    css.textOverflow = ""
    css.whiteSpace = ""
  },
]

const AlignToCss = ["stretch", "start", "center", "end"]
const TextAlignCss = ["justify", "left", "center", "right"]
