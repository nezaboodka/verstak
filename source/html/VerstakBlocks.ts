// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Block, Reaction, Inline, Render, BlockOptions } from '../core/api'
import { AbstractHtmlBlockFactory } from './HtmlBlockFactory'

// Verstak layouts are based on 3 fundamental types of
// layout structures: basic block, table, and group.

// Basic block is a layout structure, which children are
// layed out either vertically (default) or horizontally

// Table is layout structure, which children a layed you
// in its cells either naturally or absolutely

// Group is a non-visual block aimed at logical grouping
// of blocks, such as basic block, table or other groups.

// block

export function block<M = unknown, R = void>(name: string,
  reactive: boolean, // temporary
  options: BlockOptions<HTMLElement, M, R> | undefined,
  renderer: Render<HTMLElement, M, R>):
  Block<HTMLElement, M, R> {
  return reactive ?
    Reaction(name, options, renderer, VerstakTags.block) :
    Inline(name, options, renderer, VerstakTags.block)
}

// table

export function table<M = unknown, R = void>(name: string,
  reactive: boolean, // temporary
  options: BlockOptions<HTMLElement, M, R> | undefined,
  renderer: Render<HTMLElement, M, R>):
  Block<HTMLElement, M, R> {
  return reactive ?
    Reaction(name, options, renderer, VerstakTags.block) :
    Inline(name, options, renderer, VerstakTags.block)
}

// group

export function group<M = unknown, R = void>(name: string,
  reactive: boolean, // temporary
  options: BlockOptions<HTMLElement, M, R> | undefined,
  renderer: Render<HTMLElement, M, R>):
  Block<HTMLElement, M, R> {
  return reactive ?
    Reaction(name, options, renderer, VerstakTags.block) :
    Inline(name, options, renderer, VerstakTags.block)
}

// VerstakBlockFactory

export class VerstakBlockFactory<T extends HTMLElement> extends AbstractHtmlBlockFactory<T> {
  readonly display: string

  constructor(name: string, strict: boolean, display: string) {
    super(name, strict)
    this.display = display
  }

  protected createElement(block: Block<T>): T {
    const e = document.createElement(block.factory.name) as T
    e.style.display = this.display
    return e
  }
}

// VerstakTags

const VerstakTags = {
  block: new VerstakBlockFactory<HTMLElement>('x-blk', true, 'flex'),
  table: new VerstakBlockFactory<HTMLElement>('x-tbl', false, 'grid'),
  group: new VerstakBlockFactory<HTMLElement>('x-grp', false, 'contents'),
}
