// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { VBlock, LayoutKind, Place, BlockArgs, To, GridBasedAllocator, asComponent } from "../core/api"
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
  args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> {
  return VBlock.claim(name, VerstakTags.block, args)
}

// Text (either plain or html)

export function PlainText(content: string, name?: string, args?: BlockArgs<HTMLElement, void, void>): VBlock<HTMLElement, void, void> {
  return VBlock.claim(name ?? "", VerstakTags.text,
    asComponent(args, {
      render(e) {
        e.innerText = content
      },
    }))
}

export function HtmlText(content: string, name?: string, args?: BlockArgs<HTMLElement, void, void>): VBlock<HTMLElement, void, void> {
  return VBlock.claim(name ?? "", VerstakTags.text,
    asComponent(args, {
      render(e) {
        e.innerHTML = content
      },
    }))
}

// Grid Block

export function Grid<M = unknown, R = void>(name: string,
  args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> {
  return VBlock.claim(name, VerstakTags.grid, args)
}

// Line

export function Line<T = void>(claim: (x: void) => T): VBlock<HTMLElement> {
  const result = VBlock.claim("", VerstakTags.part, EMPTY_RENDER)
  claim()
  VBlock.claim("", VerstakTags.part, EMPTY_RENDER)
  return result
}

export function lineFeed(args?: BlockArgs<HTMLElement, void, void>, noCoalescing?: boolean): VBlock<HTMLElement> {
  return VBlock.claim("", VerstakTags.part, args ?? EMPTY_RENDER)
}

// Group

export function Group<M = unknown, R = void>(name: string,
  args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> {
  return VBlock.claim(name, VerstakTags.group, args)
}

// VerstakDriver

export class VerstakDriver<T extends HTMLElement> extends HtmlDriver<T> {

  arrange(block: VBlock<T>, place: Place | undefined, heightGrowth: number | undefined): void {
    const native = block.native
    if (native) {
      if (heightGrowth === undefined) {
        const ex = block.stamp > 1 ? block.place : undefined
        if (place !== ex) {
          const css = native.style
          // Exact position
          const exact = place?.exact
          if (exact !== ex?.exact) {
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
          // Width Growth
          const widthGrowth = place?.widthGrowth ?? 0
          if (widthGrowth !== (ex?.widthGrowth ?? 0)) {
            if (widthGrowth > 0) {
              css.flexGrow = `${widthGrowth}`
              css.flexBasis = "0"
            }
            else {
              css.flexGrow = ""
              css.flexBasis = ""
            }
          }
          // Width
          const widthMin = place?.widthMin ?? ""
          if (widthMin !== (ex?.widthMin ?? ""))
            css.minWidth = `${widthMin}`
          const widthMax = place?.widthMax ?? ""
          if (widthMax !== (ex?.widthMax ?? ""))
            css.maxWidth = `${widthMax}`
          // Height
          const heightMin = place?.heightMin ?? ""
          if (heightMin !== (ex?.heightMin ?? ""))
            css.minHeight = `${heightMin}`
          const heightMax = place?.heightMax ?? ""
          if (heightMax !== (ex?.heightMax ?? ""))
            css.maxHeight = `${heightMax}`
          // Alignment
          const alignContent = place?.alignContent ?? To.Default
          if (alignContent !== (ex?.alignContent ?? To.Default)) {
            if ((alignContent & To.Default) === 0) { // if not auto mode
              const v = AlignToCss[(alignContent >> 2) & 0b11]
              const h = AlignToCss[alignContent & 0b11]
              const t = TextAlignCss[alignContent & 0b11]
              css.justifyContent = v
              css.alignContent = h
              css.textAlign = t
            }
            else
              css.justifyContent = css.alignContent = css.textAlign = ""
          }
          // Frame Alignment
          const heightGrowth = place?.heightGrowth ?? 0
          const alignFrame = place?.alignFrame ?? To.Default
          if (alignFrame !== (ex?.alignFrame ?? To.Default) ||
            heightGrowth !== (ex?.heightGrowth ?? 0)) {
            if ((alignFrame & To.Default) === 0) { // if not auto mode
              const v = AlignToCss[(alignFrame >> 2) & 0b11]
              const h = AlignToCss[alignFrame & 0b11]
              css.alignSelf = v
              css.justifySelf = h
            }
            else if (heightGrowth > 0) {
              css.alignSelf = AlignToCss[To.Fit]
            }
            else
              css.alignSelf = css.justifySelf = ""
          }
          // Wrapping
          const flowWrap = place?.flowWrap ?? false
          if (flowWrap !== (ex?.flowWrap ?? false)) {
            if (flowWrap)
              native.setAttribute("wrapping", "true")
            else
              native.removeAttribute("wrapping")
          }
        }
      }
      else {
        if (heightGrowth > 0)
          block.native.style.flexGrow = `${heightGrowth}`
        else
          block.native.style.flexGrow = ""
      }
    }
    super.arrange(block, place, heightGrowth)
  }

  render(block: VBlock<T>): void | Promise<void> {
    // Perform initial line feed automatically
    if (!block.driver.isPart)
      VBlock.claim("", VerstakTags.part, EMPTY_RENDER)
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
  grid: new VerstakDriver<HTMLElement>("v-grid", LayoutKind.Grid, () => new GridBasedAllocator()),

  // display: contents
  // display: flex (row)
  part: new VerstakDriver<HTMLElement>("v-part", LayoutKind.Part),

  // display: contents
  group: new VerstakDriver<HTMLElement>("v-group", LayoutKind.Group),
}

const EMPTY_RENDER: BlockArgs<any, any, any> = { render() { /* nop */ } }
const AlignToCss = ["stretch", "start", "center", "end"]
const TextAlignCss = ["justify", "left", "center", "right"]
