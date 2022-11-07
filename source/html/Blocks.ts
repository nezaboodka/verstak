// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Block, Render, BlockOptions, LayoutKind, Place } from "../core/api"
import { HtmlDriver } from "./HtmlDriver"

// Verstak is based on two fundamental layout structures
// called basic block and grid block; and on two special
// non-visual elements called separator and group.

// Basic block is a layout structure, which children are
// layed out naturally: rightwards-downwards.

// Text is either plain or markdown-formatted text
// supporting syntax highlighting for code blocks.

// Grid block is layout structure, which children are
// layed out over grid cells.

// Separator is a special non-visual element, which
// begins new line inside block or grid block.

// Group is a special non-visual element for logical
// grouping of basic blocks, grid blocks and other groups.

// Basic Block

export function block<M = unknown, R = void>(name: string,
  options: BlockOptions<HTMLElement, M, R> | undefined,
  renderer: Render<HTMLElement, M, R>):
  Block<HTMLElement, M, R> {
  return Block.claim(name, options, renderer, VerstakTags.block)
}

// Text (formatted or plain)

export function text<M = unknown>(markdown: string,
  options?: BlockOptions<HTMLElement, M, void>,
  name?: string):
  Block<HTMLElement, M, void> {
  const render = (e: HTMLElement): void => { e.innerText = markdown }
  return Block.claim(name ?? "", options, render, VerstakTags.text)
}

// Grid Block

export function grid<M = unknown, R = void>(name: string,
  options: BlockOptions<HTMLElement, M, R> | undefined,
  renderer: Render<HTMLElement, M, R>):
  Block<HTMLElement, M, R> {
  return Block.claim(name, options, renderer, VerstakTags.grid)
}

// Separator

export function begin(options?: BlockOptions<HTMLElement, void, void>, noCoalescing?: boolean): Block<HTMLElement> {
  return Block.claim("", options, NOP, VerstakTags.part)
}

// Group

export function group<M = unknown, R = void>(name: string,
  options: BlockOptions<HTMLElement, M, R> | undefined,
  renderer: Render<HTMLElement, M, R>):
  Block<HTMLElement, M, R> {
  return Block.claim(name, options, renderer, VerstakTags.group)
}

// VerstakDriver

export class VerstakDriver<T extends HTMLElement> extends HtmlDriver<T> {
  readonly custom: boolean

  constructor(name: string, custom: boolean, layout: LayoutKind) {
    super(name, layout)
    this.custom = custom
  }

  protected createElement(block: Block<T>): T {
    const custom = this.custom
    const tag = custom ? `v-${block.name}` : this.name
    const result = document.createElement(tag) as T
    if (custom)
      result.setAttribute(this.name, "")
    return result
  }

  position(block: Block<T>, place: Place | undefined): void {
    if (block.native) {
      const existing = block.stamp > 1 ? block.place : undefined
      if (place !== existing) {
        const wGrow = place?.wGrow ?? 0
        if (wGrow !== (existing?.wGrow ?? 0)) {
          if (wGrow > 0)
            block.native.style.flexGrow = `${wGrow}`
          else
            block.native.style.flexGrow = ""
        }
        const hGrow = place?.hGrow ?? 0
        if (hGrow !== (existing?.hGrow ?? 0)) {
          if (hGrow > 0)
            block.native.style.flexGrow = `${hGrow}`
          else
            block.native.style.flexGrow = ""
        }
      }
    }
    super.position(block, place)
  }

  render(block: Block<T>): void | Promise<void> {
    // Create initial part inside basic block automatically
    if (block.driver.isBlock)
      begin() // Block.claim('', undefined, NOP, VerstakTags.part)
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
  grid: new VerstakDriver<HTMLElement>("grid", true, LayoutKind.Grid),

  // display:
  //   - flex (row) if parent is regular block
  //   - contents if parent is grid
  part: new VerstakDriver<HTMLElement>("div", false, LayoutKind.Part),

  // display: contents
  group: new VerstakDriver<HTMLElement>("group", true, LayoutKind.Group),
}

const NOP = (): void => { /* nop */ }
