// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { VerstakNode, Render, LayoutParams, Reaction, Inline, VerstakNodeOptions } from '../core/api'
import { Div, RxDiv } from './HtmlElements'

export interface ElasticSize {
  line: string | number
  min?: string // undefined means min-content
  max?: string
  growth?: number
}

export function Block<M = unknown, R = void>(name: string,
  options: VerstakNodeOptions<LayoutParams> | undefined,
  renderer: Render<HTMLDivElement, M, LayoutParams, R>):
  VerstakNode<HTMLDivElement, M, LayoutParams, R> {
  return Div(name, options, renderer)
}

export function RxBlock<M = unknown, R = void>(name: string,
  options: VerstakNodeOptions<LayoutParams> | undefined,
  renderer: Render<HTMLDivElement, M, LayoutParams, R>):
  VerstakNode<HTMLDivElement, M, LayoutParams, R> {
  return RxDiv(name, options, renderer)
}

export function Cluster<M = unknown, R = void>(name: string,
  options: VerstakNodeOptions | undefined,
  renderer: Render<HTMLDivElement, M, void, R>):
  VerstakNode<HTMLDivElement, M, void, R> {
  return Inline(name, options, renderer)
}

export function RxCluster<M = unknown, R = void>(name: string,
  options: VerstakNodeOptions | undefined,
  renderer: Render<HTMLDivElement, M, void, R>):
  VerstakNode<HTMLDivElement, M, void, R> {
  return Reaction(name, options, renderer)
}
