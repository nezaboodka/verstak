// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Block, Render, Reaction, Inline, BlockOptions } from '../core/api'
import { Div, RxDiv } from './HtmlBlocks'

export interface ElasticSize {
  line: string | number
  min?: string // undefined means min-content
  max?: string
  growth?: number
}

export function InlBlock<M = unknown, R = void>(name: string,
  options: BlockOptions | undefined,
  renderer: Render<HTMLDivElement, M, R>):
  Block<HTMLDivElement, M, R> {
  return Div(name, options, renderer)
}

export function RxBlock<M = unknown, R = void>(name: string,
  options: BlockOptions | undefined,
  renderer: Render<HTMLDivElement, M, R>):
  Block<HTMLDivElement, M, R> {
  return RxDiv(name, options, renderer)
}

export function InlCluster<M = unknown, R = void>(name: string,
  options: BlockOptions | undefined,
  renderer: Render<HTMLDivElement, M, R>):
  Block<HTMLDivElement, M, R> {
  return Inline(name, options, renderer)
}

export function RxCluster<M = unknown, R = void>(name: string,
  options: BlockOptions | undefined,
  renderer: Render<HTMLDivElement, M, R>):
  Block<HTMLDivElement, M, R> {
  return Reaction(name, options, renderer)
}
