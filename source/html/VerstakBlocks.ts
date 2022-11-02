// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Block, Reaction, Inline, Render, BlockOptions } from '../core/api'
import { HtmlBlockFactory } from './HtmlBlockFactory'

// Verstak layouts are based on two types of layout
// structures, namely *flow* block and *table* block;
// and two types of special non-visual control elements,
// namely *break* and *group*.

// Flow block is a layout structure, which children are
// layed out using left-to-right-and-top-to-bottom flow.

// Table block is layout structure, which children are
// layed out in table cells, either naturally or randomly.

// Break is a special non-visual element, which starts
// new layout line within flow block or table block.

// Group is a special non-visual element for logical
// grouping of other blocks.

// flow

export function flow<M = unknown, R = void>(name: string,
  reactive: boolean, // temporary
  options: BlockOptions<HTMLElement, M, R> | undefined,
  renderer: Render<HTMLElement, M, R>):
  Block<HTMLElement, M, R> {
  return reactive ?
    Reaction(name, options, renderer, VerstakTags.flow) :
    Inline(name, options, renderer, VerstakTags.flow)
}

// table

export function table<M = unknown, R = void>(name: string,
  reactive: boolean, // temporary
  options: BlockOptions<HTMLElement, M, R> | undefined,
  renderer: Render<HTMLElement, M, R>):
  Block<HTMLElement, M, R> {
  return reactive ?
    Reaction(name, options, renderer, VerstakTags.flow) :
    Inline(name, options, renderer, VerstakTags.flow)
}

// brk

export function brk(): void {
  throw new Error('not implemented yet')
}

// group

export function group<M = unknown, R = void>(name: string,
  reactive: boolean, // temporary
  options: BlockOptions<HTMLElement, M, R> | undefined,
  renderer: Render<HTMLElement, M, R>):
  Block<HTMLElement, M, R> {
  return reactive ?
    Reaction(name, options, renderer, VerstakTags.flow) :
    Inline(name, options, renderer, VerstakTags.flow)
}

// VerstakTags

const VerstakTags = {
  flow: new HtmlBlockFactory<HTMLElement>('x-flow', true),    // display: flex
  table: new HtmlBlockFactory<HTMLElement>('x-table', false), // display: grid
  group: new HtmlBlockFactory<HTMLElement>('x-group', false), // display: contents
}
