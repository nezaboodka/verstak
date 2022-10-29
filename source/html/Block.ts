// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { LoggingOptions, Monitor } from 'reactronic'
import { VerstakNode, Render, Priority, LayoutProps } from '../core/api'
import { Div, RxDiv } from './HtmlElements'

export function RxBlock<M = unknown, R = void>(name: string,
  layout: LayoutProps | null, triggers: unknown,
  renderer: Render<HTMLDivElement, M, R>, priority?: Priority,
  monitor?: Monitor, throttling?: number, logging?: Partial<LoggingOptions>):
  VerstakNode<HTMLDivElement, M, R> {
  return RxDiv(name, triggers, renderer, priority, monitor, throttling,
    logging)
}

export function Block<M = unknown, R = void>(name: string,
  layout: LayoutProps | null,
  renderer: Render<HTMLDivElement, M, R>, priority?: Priority):
  VerstakNode<HTMLDivElement, M, R> {
  return Div(name, renderer, priority)
}
