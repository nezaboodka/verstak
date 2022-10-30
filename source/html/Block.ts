// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { LoggingOptions, Monitor } from 'reactronic'
import { VerstakNode, Render, Priority, LayoutParams, Reaction, Inline } from '../core/api'
import { Div, RxDiv } from './HtmlElements'

export interface ElasticSize {
  line: string | number
  min?: string // undefined means min-content
  max?: string
  growth?: number
}

export function Block<M = unknown, R = void>(name: string,
  layout: LayoutParams | undefined, renderer: Render<HTMLDivElement, M, LayoutParams | undefined, R>,
  priority?: Priority): VerstakNode<HTMLDivElement, M, LayoutParams | undefined, R> {
  return Div(name, layout, renderer, priority)
}

export function RxBlock<M = unknown, R = void>(name: string,
  layout: LayoutParams | undefined, triggers: unknown,
  renderer: Render<HTMLDivElement, M, LayoutParams | undefined, R>,
  priority?: Priority, monitor?: Monitor, throttling?: number,
  logging?: Partial<LoggingOptions>): VerstakNode<HTMLDivElement, M, LayoutParams | undefined, R> {
  return RxDiv(name, layout, triggers, renderer,
    priority, monitor, throttling, logging)
}

export function Cluster<M = unknown, R = void>(name: string,
  renderer: Render<HTMLDivElement, M, void, R>, priority?: Priority):
  VerstakNode<HTMLDivElement, M, void, R> {
  return Inline(name, undefined, renderer, priority)
}

export function RxCluster<M = unknown, R = void>(name: string,
  triggers: unknown, renderer: Render<HTMLDivElement, M, void, R>,
  priority?: Priority, monitor?: Monitor, throttling?: number,
  logging?: Partial<LoggingOptions>): VerstakNode<HTMLDivElement, M, void, R> {
  return Reaction(name, undefined, triggers, renderer,
    priority, monitor, throttling, logging)
}
