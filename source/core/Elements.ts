// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { VerstakNode, Render, VerstakNodeFactory, VerstakOptions } from './VerstakNode'

export function Reaction<E = undefined, M = unknown, P = void, R = void>(
  name: string, options: VerstakOptions<P> | undefined,
  renderer: Render<E, M, P, R>, factory?: VerstakNodeFactory<E>): VerstakNode<E, M, P, R> {
  return VerstakNode.claim(name, false, options, renderer, factory)
}

export function Inline<E = undefined, M = unknown, P = void, R = void>(
  name: string, options: VerstakOptions<P> | undefined,
  renderer: Render<E, M, P, R>, factory?: VerstakNodeFactory<E>): VerstakNode<E, M, P, R> {
  return VerstakNode.claim(name, true, options, renderer, factory)
}
