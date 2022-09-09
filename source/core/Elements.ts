// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// License: https://raw.githubusercontent.com/nezaboodka/reactron/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Monitor, LoggingOptions } from 'reactronic'
import { RxNode, Render, NodeFactory, Priority } from './RxNode'

export function Reaction<E = undefined, M = unknown, R = void>(
  name: string, triggers: unknown, renderer: Render<E, M, R>,
  priority?: Priority, monitor?: Monitor, throttling?: number,
  logging?: Partial<LoggingOptions>, factory?: NodeFactory<E>): RxNode<E, M, R> {
  return RxNode.claim(name, triggers, false, renderer,
    priority, monitor, throttling, logging, factory)
}

export function Inline<E = undefined, M = unknown, R = void>(
  name: string, renderer: Render<E, M, R>, priority?: Priority,
  factory?: NodeFactory<E>): RxNode<E, M, R> {
  return RxNode.claim(name, undefined, true, renderer,
    priority, undefined, undefined, undefined, factory)
}
