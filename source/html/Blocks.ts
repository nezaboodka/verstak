// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Block, Render, BlockOptions } from '../core/api'
import { HtmlBlockFactory } from './HtmlBlockFactory'

// Verstak is based on two fundamental layout structures
// called block and grid block; and on two special
// non-visual elements called line begin and group.

// Block is a layout structure, which children are
// layed out using left-to-right-and-top-to-bottom flow.

// Grid block is layout structure, which children are
// layed out over grid cells.

// Line begin is a special non-visual element, which
// begins new layout line inside block or grid block.

// Group is a special non-visual element for logical
// grouping of blocks, grid blocks and other groups.

// block

export function block<M = unknown, R = void>(name: string,
  options: BlockOptions<HTMLElement, M, R> | undefined,
  renderer: Render<HTMLElement, M, R>):
  Block<HTMLElement, M, R> {
  return Block.claim(name, options, renderer, VerstakTags.block)
}

// grid

export function grid<M = unknown, R = void>(name: string,
  options: BlockOptions<HTMLElement, M, R> | undefined,
  renderer: Render<HTMLElement, M, R>):
  Block<HTMLElement, M, R> {
  return Block.claim(name, options, renderer, VerstakTags.block)
}

// lb (line begin)

export function lb(spacing?: boolean): void {
  throw new Error('not implemented yet')
}

// group

export function group<M = unknown, R = void>(name: string,
  options: BlockOptions<HTMLElement, M, R> | undefined,
  renderer: Render<HTMLElement, M, R>):
  Block<HTMLElement, M, R> {
  return Block.claim(name, options, renderer, VerstakTags.block)
}

// VerstakTags

const VerstakTags = {
  block: new HtmlBlockFactory<HTMLElement>('v-block', true, false),  // display: flex
  grid: new HtmlBlockFactory<HTMLElement>('v-grid', false, true),    // display: grid
  group: new HtmlBlockFactory<HTMLElement>('v-group', false, false), // display: contents
}
