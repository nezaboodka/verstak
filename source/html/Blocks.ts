// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { VBlock, LayoutKind, Place, BlockArgs, Align, Allocator, GridBasedAllocator } from "../core/api"
import { HtmlDriver } from "./HtmlDriver"

// Verstak is based on two fundamental layout structures
// called basic block and grid block; and on two special
// non-visual elements called row and group.

// Basic block is a layout structure, which children are
// layed out naturally: rightwards-downwards.

// Text is either plain or markdown-formatted text
// supporting syntax highlighting for code blocks.

// Grid block is layout structure, which children are
// layed out over grid cells.

// Row is a special non-visual element, which begins
// new layout row/section inside block or grid block.

// Group is a special non-visual element for logical
// grouping of basic blocks, grid blocks and other groups.

// Basic Block

export function Block<M = unknown, R = void>(name: string,
  args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> {
  return VBlock.claim(name, args, VerstakTags.block)
}

// Text (either plain or formatted in form of markdown)

export function Plain(content: string): VBlock<HTMLElement, void, void> {
  return VBlock.claim("", { render(e) { e.innerText = content } }, VerstakTags.text)
}

export function Markdown(content: string): VBlock<HTMLElement, void, void> {
  return VBlock.claim("", { render(e) { e.innerHTML = content } }, VerstakTags.text)
}

export function RawHtml(content: string): VBlock<HTMLElement, void, void> {
  return VBlock.claim("", { render(e) { e.innerHTML = content } }, VerstakTags.text)
}

// Grid Block

export function Grid<M = unknown, R = void>(name: string,
  args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> {
  return VBlock.claim(name, args, VerstakTags.grid)
}

// Row

export function Row<T = void>(claim: (x: void) => T): VBlock<HTMLElement> {
  const result = VBlock.claim("", EMPTY_RENDER, VerstakTags.section)
  claim()
  VBlock.claim("", EMPTY_RENDER, VerstakTags.section)
  return result
}

export function lineFeed(args?: BlockArgs<HTMLElement, void, void>, noCoalescing?: boolean): VBlock<HTMLElement> {
  return VBlock.claim("", args ?? EMPTY_RENDER, VerstakTags.section)
}

// Group

export function Group<M = unknown, R = void>(name: string,
  args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> {
  return VBlock.claim(name, args, VerstakTags.group)
}

// VerstakDriver

export class VerstakDriver<T extends HTMLElement> extends HtmlDriver<T> {
  readonly custom: boolean

  constructor(name: string, custom: boolean, layout: LayoutKind, createAllocator?: () => Allocator) {
    super(name, layout, createAllocator)
    this.custom = custom
  }

  protected createElement(block: VBlock<T>): T {
    const custom = this.custom
    const tag = custom ? `v-${block.name}` : this.name
    const result = document.createElement(tag) as T
    if (custom)
      result.setAttribute(this.name, "")
    return result
  }

  arrange(block: VBlock<T>, place: Place | undefined, heightGrow: number | undefined): void {
    if (block.native) {
      if (heightGrow === undefined) {
        const existing = block.stamp > 1 ? block.place : undefined
        if (place !== existing) {
          const css = block.native.style
          // Exact position
          const exact = place?.exact
          if (exact !== existing?.exact) {
            if (exact) {
              const x1 = exact.x1 || 1
              const y1 = exact.y1 || 1
              const x2 = exact.x2 || x1
              const y2 = exact.y2 || y1
              css.gridArea = `${y1} / ${x1} / span ${y2 - y1 + 1} / span ${x2 - x1 + 1}`
            }
            else
              css.gridArea = ""
          }
          // Width Grow
          const widthGrow = place?.widthGrow ?? 0
          if (widthGrow !== (existing?.widthGrow ?? 0)) {
            if (widthGrow > 0)
              css.flexGrow = `${widthGrow}`
            else
              css.flexGrow = ""
          }
          // Width
          const widthMin = place?.widthMin ?? ""
          if (widthMin !== (existing?.widthMin ?? ""))
            css.minWidth = `${widthMin}`
          const widthMax = place?.widthMax ?? ""
          if (widthMax !== (existing?.widthMax ?? ""))
            css.maxWidth = `${widthMax}`
          // Height
          const heightMin = place?.heightMin ?? ""
          if (heightMin !== (existing?.heightMin ?? ""))
            css.minHeight = `${heightMin}`
          const heightMax = place?.heightMax ?? ""
          if (heightMax !== (existing?.heightMax ?? ""))
            css.maxHeight = `${heightMax}`
          // Alignment
          const alignment = place?.align ?? Align.Default
          if (alignment !== (existing?.align ?? Align.Default)) {
            const v = AlignCss[(alignment >> 2) & 0b11]
            const h = AlignCss[alignment & 0b11]
            const t = TextAlignCss[alignment & 0b11]
            css.justifyContent = v
            css.alignItems = h
            css.textAlign = t
          }
          // Box Alignment
          const blockAlign = place?.blockAlign ?? Align.Fit
          if (blockAlign !== (existing?.blockAlign ?? Align.Fit)) {
            const v = AlignCss[(blockAlign >> 2) & 0b11]
            const h = AlignCss[blockAlign & 0b11]
            css.alignSelf = v
            css.justifySelf = h
            // if (v !== "")
            //   block.native.setAttribute("unfit", "")
          }
        }
      }
      else {
        if (heightGrow > 0)
          block.native.style.flexGrow = `${heightGrow}`
        else
          block.native.style.flexGrow = ""
      }
    }
    super.arrange(block, place, heightGrow)
  }

  render(block: VBlock<T>): void | Promise<void> {
    // Perform initial line feed automatically
    if (!block.driver.isSection)
      VBlock.claim("", EMPTY_RENDER, VerstakTags.section)
    return super.render(block)
  }
}

// VerstakTags

const VerstakTags = {
  // display: flex, flex-direction: column
  block: new VerstakDriver<HTMLElement>("block", true, LayoutKind.Block),

  // display: block
  text: new VerstakDriver<HTMLElement>("article", false, LayoutKind.Text),

  // display: grid
  grid: new VerstakDriver<HTMLElement>("grid", true, LayoutKind.Grid, () => new GridBasedAllocator()),

  // display: contents
  // display: flex (row)
  section: new VerstakDriver<HTMLElement>("section", false, LayoutKind.Section),

  // display: contents
  group: new VerstakDriver<HTMLElement>("group", true, LayoutKind.Group),
}

const EMPTY_RENDER: BlockArgs<any, any, any> = { render() { /* nop */ } }
const AlignCss = ["" /* stretch */, "start", "center", "end"]
const TextAlignCss = ["justify", "" /* left */, "center", "right"]
