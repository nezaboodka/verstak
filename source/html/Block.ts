// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { LoggingOptions, Monitor } from 'reactronic'
import { VerstakNode, Render, Priority, LayoutRequest, Reaction, Inline } from '../core/api'
import { Div, RxDiv } from './HtmlElements'

export function Block<M = unknown, R = void>(name: string,
  layout: LayoutRequest | null, renderer: Render<HTMLDivElement, M, R>,
  priority?: Priority): VerstakNode<HTMLDivElement, M, R> {
  return Div(name, renderer, priority)
}

export function RxBlock<M = unknown, R = void>(name: string,
  layout: LayoutRequest | null, triggers: unknown,
  renderer: Render<HTMLDivElement, M, R>,
  priority?: Priority, monitor?: Monitor, throttling?: number,
  logging?: Partial<LoggingOptions>): VerstakNode<HTMLDivElement, M, R> {
  return RxDiv(name, triggers, renderer,
    priority, monitor, throttling, logging)
}

export function Cluster<M = unknown, R = void>(name: string,
  renderer: Render<HTMLDivElement, M, R>, priority?: Priority):
  VerstakNode<HTMLDivElement, M, R> {
  return Inline(name, renderer, priority)
}

export function RxCluster<M = unknown, R = void>(name: string,
  triggers: unknown, renderer: Render<HTMLDivElement, M, R>,
  priority?: Priority, monitor?: Monitor, throttling?: number,
  logging?: Partial<LoggingOptions>): VerstakNode<HTMLDivElement, M, R> {
  return Reaction(name, triggers, renderer,
    priority, monitor, throttling, logging)
}
