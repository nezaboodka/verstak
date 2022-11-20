// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { VBlock, LayoutKind, BlockBody, Align, GridCursor, CellRange, vmt } from "../core/api"
import { HtmlDriver } from "./HtmlDriver"

// Verstak is based on two fundamental layout structures
// called basic block and grid block; and on two special
// non-visual elements called line and group.

// Basic block is a layout structure, which children are
// layed out naturally: rightwards-downwards.

// Text is either plain or markdown-formatted text
// supporting syntax highlighting for code blocks.

// Grid block is layout structure, which children are
// layed out over grid cells.

// Line is a special non-visual element, which begins new
// layout line (row, section) inside block or grid block.

// Group is a special non-visual element for logical
// grouping of basic blocks, grid blocks and other groups.

// Basic Block

export function Block<M = unknown, R = void>(
  body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> {
  return VBlock.claim(VerstakTags.block, body)
}

// Text (either plain or html)

export function PlainText(content: string, body?: BlockBody<HTMLElement, void, void>): VBlock<HTMLElement, void, void> {
  return VBlock.claim(VerstakTags.text, { ...vmt(body), base: {
    render(b) {
      b.native.innerText = content
    }},
  })
}

export function HtmlText(content: string, body?: BlockBody<HTMLElement, void, void>): VBlock<HTMLElement, void, void> {
  return VBlock.claim(VerstakTags.text, { ...vmt(body), base: {
    render(b) {
      b.native.innerHTML = content
    }},
  })
}

// Grid Block

export function Grid<M = unknown, R = void>(
  body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> {
  return VBlock.claim(VerstakTags.grid, body)
}

// Line

export function line<T = void>(body: (block: void) => T): void {
  lineFeed()
  body()
}

export function lineFeed(noCoalescing?: boolean, key?: string): VBlock<HTMLElement> {
  return VBlock.claim(VerstakTags.line, { key })
}

// Group

export function Group<M = unknown, R = void>(
  body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> {
  return VBlock.claim(VerstakTags.group, body)
}

// VerstakDriver

export class VerstakDriver<T extends HTMLElement> extends HtmlDriver<T> {

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
    if (block.driver.isLine) {
      const css = block.native.style
      if (heightGrowth > 0)
        css.flexGrow = `${heightGrowth}`
      else
        css.flexGrow = ""
    }
    else if (block.host.driver.isLine) {
      block.driver.applyFrameAlignment(block, Align.Stretch)
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

  applyFrameAlignment(block: VBlock<T>, frameAlign: Align): void {
    const css = block.native.style
    if ((frameAlign & Align.Default) === 0) { // if not auto mode
      const v = AlignToCss[(frameAlign >> 2) & 0b11]
      const h = AlignToCss[frameAlign & 0b11]
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
    const parent = HtmlDriver.findNearestParentHtmlBlock(block).native
    if (overlayVisible === true) {
      const doc = document.body
      const rect = parent.getBoundingClientRect()
      const h = doc.offsetWidth - rect.left > rect.right ? "rightward" : "leftward"
      const v = doc.clientHeight - rect.top > rect.bottom ? "downward" : "upward"
      e.setAttribute("overlay", `${h}-${v}`)
      parent.setAttribute("stacking", "true")
    }
    else {
      parent.removeAttribute("stacking")
      if (overlayVisible === false)
        e.setAttribute("overlay", "hidden")
      else // overlayVisible === undefined
        e.removeAttribute("overlay")
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
    if (block.driver.layout < LayoutKind.Line)
      lineFeed()
    return super.render(block)
  }
}

// VerstakTags

const VerstakTags = {
  // display: flex, flex-direction: column
  block: new VerstakDriver<HTMLElement>("v-block", LayoutKind.Block),

  // display: block
  text: new VerstakDriver<HTMLElement>("v-text", LayoutKind.Text),

  // display: grid
  grid: new VerstakDriver<HTMLElement>("v-grid", LayoutKind.Grid, () => new GridCursor()),

  // display: contents
  // display: flex (row)
  line: new VerstakDriver<HTMLElement>("v-line", LayoutKind.Line),

  // display: contents
  group: new VerstakDriver<HTMLElement>("v-group", LayoutKind.Group),
}

const AlignToCss = ["stretch", "start", "center", "end"]
const TextAlignCss = ["justify", "left", "center", "right"]
