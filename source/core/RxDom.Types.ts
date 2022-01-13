// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Monitor } from 'reactronic'

export type RxRender<E = unknown, O = void> = (element: E, options: O) => void | Promise<void>
export type RxCustomize<E = unknown, O = void> = (render: (options: O) => void, element: E) => void
export const enum RxPriority { SyncP0 = 0, AsyncP1 = 1, AsyncP2 = 2 }

export type Callback<E = unknown> = (element: E) => void

export interface RxNodeFactory<E = unknown> {
  readonly name: string
  readonly arranging: boolean
  initialize?(node: RxNode<E>): void
  finalize?(node: RxNode<E>, initiator: RxNode): void
  arrange?(node: RxNode<E>): void
  render?(node: RxNode<E>): void
}

export interface RxNode<E = any, O = any> {
  // User-defined properties
  readonly name: string
  readonly factory: RxNodeFactory<E>
  readonly monitor?: Monitor
  readonly inline: boolean
  readonly triggers: unknown
  readonly render: RxRender<E, O> | undefined
  readonly customize: RxCustomize<E, O> | undefined
  priority: RxPriority
  shuffle: boolean
  model?: unknown
  // System-managed properties
  readonly level: number
  readonly parent: RxNode
  readonly stamp: number
  readonly children: RxNodeChildren
  readonly next?: RxNode
  readonly prev?: RxNode
  neighbor?: RxNode
  native?: E
}

export interface RxNodeChildren {
  readonly first?: RxNode
  readonly count: number
}
