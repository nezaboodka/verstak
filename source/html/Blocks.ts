// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Block, Render, BlockOptions } from '../core/api'
import { HtmlBlockKind } from './HtmlBlockFactory'

// Verstak is based on two fundamental layout structures
// called simple block and grid block; and on two special
// non-visual elements called line begin and group.

// Simple block is a layout structure, which children are
// layed out using left-to-right-and-top-to-bottom flow.

// Grid block is layout structure, which children are
// layed out over grid cells.

// Line begin is a special non-visual element, which
// begins new layout line inside block or grid block.

// Group is a special non-visual element for logical
// grouping of simple blocks, grid blocks and other groups.

// Simple Block

export function block<M = unknown, R = void>(name: string,
  options: BlockOptions<HTMLElement, M, R> | undefined,
  renderer: Render<HTMLElement, M, R>):
  Block<HTMLElement, M, R> {
  return Block.claim(name, options, renderer, VerstakTags.block)
}

// Grid Block

export function grid<M = unknown, R = void>(name: string,
  options: BlockOptions<HTMLElement, M, R> | undefined,
  renderer: Render<HTMLElement, M, R>):
  Block<HTMLElement, M, R> {
  return Block.claim(name, options, renderer, VerstakTags.grid)
}

// Line Begin

export function lb(spacing?: boolean): Block<HTMLElement> {
  return Block.claim(`l:${0}`, undefined, NOP, VerstakTags.line)
}

// Group

export function group<M = unknown, R = void>(name: string,
  options: BlockOptions<HTMLElement, M, R> | undefined,
  renderer: Render<HTMLElement, M, R>):
  Block<HTMLElement, M, R> {
  return Block.claim(name, options, renderer, VerstakTags.group)
}

// VerstakTags

const VerstakTags = {
  // display: flex, flex-direction: column
  block: new HtmlBlockKind<HTMLElement>('v-block', true, false),

  // display: flex, flex-direction: row
  line: new HtmlBlockKind<HTMLElement>('v-line', true, false),

  // display: grid
  grid: new HtmlBlockKind<HTMLElement>('v-grid', false, true),

  // display: contents
  group: new HtmlBlockKind<HTMLElement>('v-group', false, false),
}

const NOP = (): void => { /* nop */ }
