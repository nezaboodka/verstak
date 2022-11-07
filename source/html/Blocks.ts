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

export function sep(spacing?: boolean): Block<HTMLElement> {
  return Block.claim("", undefined, NOP, VerstakTags.part)
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
  protected createElement(block: Block<T>): T {
    const tag = this.name || `v-${block.name}`
    return document.createElement(tag) as T
  }

  position(block: Block<T>, place: Place | undefined): void {
    if (block.native) {
      const grow = block.place?.wGrow
      if (grow !== undefined && grow > 0)
        block.native.style.flexGrow = `${grow}`
      else
        block.native.style.flexGrow = ""
    }
    super.position(block, place)
  }

  render(block: Block<T>): void | Promise<void> {
    // Create initial part inside basic block automatically
    if (block.driver.isBlock)
      sep() // Block.claim('', undefined, NOP, VerstakTags.part)
    return super.render(block)
  }
}

// VerstakTags

const CUSTOM_TAG = "" // v-{block.name}

const VerstakTags = {
  // display: flex, flex-direction: column
  block: new VerstakDriver<HTMLElement>(CUSTOM_TAG, LayoutKind.Block),

  // display: block
  text: new VerstakDriver<HTMLElement>("article", LayoutKind.Text),

  // display: grid
  grid: new VerstakDriver<HTMLElement>(CUSTOM_TAG, LayoutKind.Grid),

  // display:
  //   - flex (row) if parent is regular block
  //   - contents if parent is grid
  part: new VerstakDriver<HTMLElement>("div", LayoutKind.Part),

  // display: contents
  group: new VerstakDriver<HTMLElement>(CUSTOM_TAG, LayoutKind.Group),
}

const NOP = (): void => { /* nop */ }
