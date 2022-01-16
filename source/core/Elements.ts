// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Monitor, LoggingOptions } from 'reactronic'
import { RxNode, Customize, Render, NodeFactory } from './RxNode'

export function Reaction<E = undefined, O = void, M = unknown, R = void>(
  name: string, triggers: unknown,
  render?: Render<E, O, R>, customize?: Customize<E, O, R>,
  monitor?: Monitor, throttling?: number, logging?: Partial<LoggingOptions>,
  factory?: NodeFactory<E>): RxNode<E, O, M, R> {
  return RxNode.emit(name, triggers, false, render, customize,
    monitor, throttling, logging, factory)
}

export function Inline<E = undefined, O = void, M = unknown, R = void>(
  name: string, render?: Render<E, O, R>, customize?: Customize<E, O, R>,
  factory?: NodeFactory<E>): RxNode<E, O, M, R> {
  return RxNode.emit(name, undefined, true, render, customize,
    undefined, undefined, undefined, factory)
}
