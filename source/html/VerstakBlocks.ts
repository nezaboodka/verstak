// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Block, Reaction, Inline, Render, BlockOptions } from '../core/api'
import { AbstractHtmlBlockFactory } from './HtmlBlockFactory'

// Block is a piece of information shown on a screen

export function block<M = unknown, R = void>(name: string,
  options: BlockOptions<HTMLDivElement, M, R> | undefined,
  renderer: Render<HTMLDivElement, M, R>):
  Block<HTMLDivElement, M, R> {
  return Inline(name, options, renderer, VerstakTags.block)
}

export function blockRx<M = unknown, R = void>(name: string,
  options: BlockOptions<HTMLDivElement, M, R> | undefined,
  renderer: Render<HTMLDivElement, M, R>):
  Block<HTMLDivElement, M, R> {
  return Reaction(name, options, renderer, VerstakTags.block)
}

// Board is a block with all children blocks being
// absolutely positioned using Place.area option

export function board<M = unknown, R = void>(name: string,
  options: BlockOptions<HTMLDivElement, M, R> | undefined,
  renderer: Render<HTMLDivElement, M, R>):
  Block<HTMLDivElement, M, R> {
  return Inline(name, options, renderer, VerstakTags.board)
}

export function boardRx<M = unknown, R = void>(name: string,
  options: BlockOptions<HTMLDivElement, M, R> | undefined,
  renderer: Render<HTMLDivElement, M, R>):
  Block<HTMLDivElement, M, R> {
  return Reaction(name, options, renderer, VerstakTags.board)
}

// Group is a mean of logical grouping of blocks

export function group<M = unknown, R = void>(name: string,
  options: BlockOptions<HTMLDivElement, M, R> | undefined,
  renderer: Render<HTMLDivElement, M, R>):
  Block<HTMLDivElement, M, R> {
  return Inline(name, options, renderer, VerstakTags.group)
}

export function groupRx<M = unknown, R = void>(name: string,
  options: BlockOptions<HTMLDivElement, M, R> | undefined,
  renderer: Render<HTMLDivElement, M, R>):
  Block<HTMLDivElement, M, R> {
  return Reaction(name, options, renderer, VerstakTags.group)
}

// UniversalHtmlBlockFactory

export class UniversalHtmlBlockFactory<T extends HTMLElement> extends AbstractHtmlBlockFactory<T> {
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
  block: new UniversalHtmlBlockFactory<HTMLDivElement>('div', true, 'grid'),
  board: new UniversalHtmlBlockFactory<HTMLDivElement>('div', false, 'grid'),
  group: new UniversalHtmlBlockFactory<HTMLDivElement>('div', true, 'contents'),
}
