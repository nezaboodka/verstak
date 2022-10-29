// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Monitor, LoggingOptions } from 'reactronic'
import { VerstakNode, Render, NodeFactory, Priority } from './VerstakNode'

export function Reaction<E = undefined, M = unknown, R = void>(
  name: string, triggers: unknown, renderer: Render<E, M, R>,
  priority?: Priority, monitor?: Monitor, throttling?: number,
  logging?: Partial<LoggingOptions>, factory?: NodeFactory<E>): VerstakNode<E, M, R> {
  return VerstakNode.claim(name, triggers, false, renderer,
    priority, monitor, throttling, logging, factory)
}

export function Inline<E = undefined, M = unknown, R = void>(
  name: string, renderer: Render<E, M, R>, priority?: Priority,
  factory?: NodeFactory<E>): VerstakNode<E, M, R> {
  return VerstakNode.claim(name, undefined, true, renderer,
    priority, undefined, undefined, undefined, factory)
}
