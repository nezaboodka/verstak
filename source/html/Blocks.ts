// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { VBlock, LayoutKind, BlockBody, Align, GridCursor, baseFor, CellRange } from "../core/api"
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

export function Block<M = unknown, R = void>(name: string,
  body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> {
  return VBlock.claim(name, VerstakTags.block, body)
}

// Text (either plain or html)

export function PlainText(content: string, name?: string, body?: BlockBody<HTMLElement, void, void>): VBlock<HTMLElement, void, void> {
  return VBlock.claim(name ?? "", VerstakTags.text,
    baseFor(body, {
      render(b) {
        b.native.innerText = content
      },
    }))
}

export function HtmlText(content: string, name?: string, body?: BlockBody<HTMLElement, void, void>): VBlock<HTMLElement, void, void> {
  return VBlock.claim(name ?? "", VerstakTags.text,
    baseFor(body, {
      render(b) {
        b.native.innerHTML = content
      },
    }))
}

// Grid Block

export function Grid<M = unknown, R = void>(name: string,
  body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> {
  return VBlock.claim(name, VerstakTags.grid, body)
}

// Line

export function Line<T = void>(body: (block: void) => T): void {
  lineFeed()
  body()
  lineFeed()
}

export function lineFeed(noCoalescing?: boolean): VBlock<HTMLElement> {
  return VBlock.claim("", VerstakTags.row, EMPTY_BLOCK_BODY)
}

// Group

export function Group<M = unknown, R = void>(name: string,
  body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> {
  return VBlock.claim(name, VerstakTags.group, body)
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
    if (block.driver.isRow) {
      const css = block.native.style
      if (heightGrowth > 0)
        css.flexGrow = `${heightGrowth}`
      else
        css.flexGrow = ""
    }
    else if (block.host.driver.isRow) {
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

  applyFloating(block: VBlock<T>, floating: boolean): void {
    if (floating)
      block.native.setAttribute("floating", "true")
    else
      block.native.removeAttribute("floating")
  }

  render(block: VBlock<T>): void | Promise<void> {
    // Add initial line feed automatically
    if (block.driver.layout < LayoutKind.Row)
      VBlock.claim("", VerstakTags.row, EMPTY_BLOCK_BODY)
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
  row: new VerstakDriver<HTMLElement>("v-row", LayoutKind.Row),

  // display: contents
  group: new VerstakDriver<HTMLElement>("v-group", LayoutKind.Group),
}

const EMPTY_BLOCK_BODY: BlockBody<any, any, any> = { render() { /* nop */ } }
const AlignToCss = ["stretch", "start", "center", "end"]
const TextAlignCss = ["justify", "left", "center", "right"]
