// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { VBlock, BlockKind, BlockBody, Align, TableCursor, CellRange } from "../core/api"
import { HtmlDriver } from "./HtmlDriver"

// Verstak is based on two fundamental layout structures
// called chain and table; and on two special non-visual
// elements called row and group.

// Chain is a layout structure, which children are layed
// out naturally: rightwards-downwards.

// Table is layout structure, which children are layed out
// over table cells.

// Row is a special non-visual element, which begins
// new layout row inside chain or table.

// Note is either plain or markdown-formatted text
// supporting syntax highlighting for code blocks.

// Group is a special non-visual element for logical
// grouping of chains, tables and other groups.

// Chain

export function Chain<M = unknown, R = void>(
  body?: BlockBody<HTMLElement, M, R>,
  base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> {
  return VBlock.claim(VerstakTags.chain, body, base)
}

// Table

export function Table<M = unknown, R = void>(
  body?: BlockBody<HTMLElement, M, R>,
  base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> {
  return VBlock.claim(VerstakTags.table, body, base)
}

// Row

export function row<T = void>(body?: (block: void) => T, key?: string): void {
  fromNewRow(key)
  body?.()
}

export function fromNewRow(key?: string): void {
  VBlock.claim(VerstakTags.row, { key })
}

// Note (either plain or html)

export function Note(content: string, body?: BlockBody<HTMLElement, void, void>): VBlock<HTMLElement, void, void> {
  return VBlock.claim(VerstakTags.note, body, {
    render(b) {
      b.native.innerText = content
    }},
  )
}

export function HtmlNote(content: string, body?: BlockBody<HTMLElement, void, void>): VBlock<HTMLElement, void, void> {
  return VBlock.claim(VerstakTags.note, body, {
    render(b) {
      b.native.innerHTML = content
    }},
  )
}

// Group

export function Group<M = unknown, R = void>(
  body?: BlockBody<HTMLElement, M, R>,
  base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> {
  return VBlock.claim(VerstakTags.group, body, base)
}

// VerstakDriver

export class VerstakDriver<T extends HTMLElement> extends HtmlDriver<T> {

  protected createElement(block: VBlock<T>): T {
    const element = super.createElement(block)
    const kind = V.blockKinds[this.kind]
    if (kind)
      element.setAttribute(V.attribute, kind)
    return element
  }

  applyCellRange(block: VBlock<T>, cellRange: CellRange | undefined): void {
    const css = block.native.style
    if (cellRange) {
      const x1 = cellRange.x1 || 1
      const y1 = cellRange.y1 || 1
      const x2 = cellRange.x2 || x1
      const y2 = cellRange.y2 || y1
      css.gridArea = `${y1} / ${x1} / span ${y2 - y1 + 1} / span ${x2 - x1 + 1}`
    }
    else
      css.gridArea = ""
    super.applyCellRange(block, cellRange)
  }

  applyWidthGrowth(block: VBlock<T>, widthGrowth: number): void {
    const css = block.native.style
    if (widthGrowth > 0) {
      css.flexGrow = `${widthGrowth}`
      css.flexBasis = "0"
    }
    else {
      css.flexGrow = ""
      css.flexBasis = ""
    }
  }

  applyMinWidth(block: VBlock<T>, minWidth: string): void {
    block.native.style.minWidth = `${minWidth}`
  }

  applyMaxWidth(block: VBlock<T>, maxWidth: string): void {
    block.native.style.maxWidth = `${maxWidth}`
  }

  applyHeightGrowth(block: VBlock<T>, heightGrowth: number): void {
    if (block.driver.isRow) {
      const css = block.native.style
      if (heightGrowth > 0)
        css.flexGrow = `${heightGrowth}`
      else
        css.flexGrow = ""
    }
    else if (block.host.driver.isRow) {
      block.driver.applyBlockAlignment(block, Align.Stretch)
      block.host.driver.applyHeightGrowth(block.host, heightGrowth)
    }
  }

  applyMinHeight(block: VBlock<T>, minHeight: string): void {
    block.native.style.minHeight = `${minHeight}`
  }

  applyMaxHeight(block: VBlock<T>, maxHeight: string): void {
    block.native.style.maxHeight = `${maxHeight}`
  }

  applyContentAlignment(block: VBlock<T>, contentAlign: Align): void {
    const css = block.native.style
    if ((contentAlign & Align.Default) === 0) { // if not auto mode
      const v = AlignToCss[(contentAlign >> 2) & 0b11]
      const h = AlignToCss[contentAlign & 0b11]
      const t = TextAlignCss[contentAlign & 0b11]
      css.justifyContent = v
      css.alignItems = h
      css.textAlign = t
    }
    else
      css.justifyContent = css.alignContent = css.textAlign = ""
  }

  applyBlockAlignment(block: VBlock<T>, blockAlign: Align): void {
    const css = block.native.style
    if ((blockAlign & Align.Default) === 0) { // if not auto mode
      const v = AlignToCss[(blockAlign >> 2) & 0b11]
      const h = AlignToCss[blockAlign & 0b11]
      css.alignSelf = v
      css.justifySelf = h
    }
    // else if (heightGrowth > 0) {
    //   css.alignSelf = AlignToCss[Align.Stretch]
    // }
    else
      css.alignSelf = css.justifySelf = ""
  }

  applyContentWrapping(block: VBlock<T>, contentWrapping: boolean): void {
    if (contentWrapping)
      block.native.setAttribute("wrapping", "true")
    else
      block.native.removeAttribute("wrapping")
  }

  applyOverlayVisible(block: VBlock<T>, overlayVisible: boolean | undefined): void {
    const e = block.native
    const css = e.style
    const parent = HtmlDriver.findNearestParentHtmlBlock(block).native
    if (overlayVisible === true) {
      const doc = document.body
      const rect = parent.getBoundingClientRect()
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
      parent.setAttribute("stacking", "true")
    }
    else {
      parent.removeAttribute("stacking")
      if (overlayVisible === false)
        css.display = "none"
      else // overlayVisible === undefined
        css.position = css.display = css.left = css.right = css.top = css.bottom = "" // clear
    }
  }

  applyStyling(block: VBlock<T, any, any>, secondary: boolean, styleName: string, enabled?: boolean): void {
    const e = block.native
    enabled ??= true
    if (secondary)
      e.classList.toggle(styleName, enabled)
    else
      e.className = enabled ? styleName : ""
  }

  render(block: VBlock<T>): void | Promise<void> {
    // Add initial line feed automatically
    if (block.driver.kind < BlockKind.Row)
      fromNewRow()
    return super.render(block)
  }
}

// V

const V = {
  // blockTag: "блок",
  // rowTag: "строка",
  // blockKinds: ["цепочка", "таблица", "" /* строка */, "группа", "заметка"],
  // attribute: "вид",
  blockTag: "block",
  rowTag: "row",
  blockKinds: ["chain", "table", "" /* row */, "group", "note"],
  attribute: "kind",
}

const VerstakTags = {
  // display: flex, flex-direction: column
  chain: new VerstakDriver<HTMLElement>(V.blockTag, BlockKind.Chain),

  // display: grid
  table: new VerstakDriver<HTMLElement>(V.blockTag, BlockKind.Table, () => new TableCursor()),

  // display: contents
  // display: flex (row)
  row: new VerstakDriver<HTMLElement>(V.rowTag, BlockKind.Row),

  // display: block
  note: new VerstakDriver<HTMLElement>(V.blockTag, BlockKind.Note),

  // display: contents
  group: new VerstakDriver<HTMLElement>(V.blockTag, BlockKind.Group),
}

const AlignToCss = ["stretch", "start", "center", "end"]
const TextAlignCss = ["justify", "left", "center", "right"]
