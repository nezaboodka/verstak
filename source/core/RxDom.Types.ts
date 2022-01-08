// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

export type Render<E = unknown, O = void> = (element: E, options: O) => void | Promise<void>
export type SuperRender<O = unknown, E = void> = ((render: (options: O) => void, element: E) => void)
export type AsyncSuperRender<O = unknown, E = void> = ((render: (options: O) => Promise<void>, element: E) => Promise<void>)
export type Customize<E = unknown, O = void> = (element: E, options: O) => void
export type AsyncCustomize<E = unknown, O = void> = (element: E, options: O) => Promise<void>
export const enum RxPriority { SyncP0 = 0, AsyncP1 = 1, AsyncP2 = 2 }

export interface RxNodeFactory<E = unknown, O = void> {
  readonly name: string
  readonly sequential: boolean
  initialize?(node: RxNode<E, O>): void
  finalize?(node: RxNode<E, O>, initiator: RxNode): void
  mount?(node: RxNode<E, O>): void
  render?(node: RxNode<E, O>): void
}

export interface RxNode<E = any, O = any> {
  // User-defined properties
  readonly name: string
  readonly factory: RxNodeFactory<E, O>
  readonly inline: boolean
  readonly triggers: unknown
  readonly render: Render<E, O>
  readonly superRender: SuperRender<O, E> | undefined
  priority: RxPriority
  shuffledRendering: boolean
  model?: unknown
  // System-managed properties
  readonly level: number
  readonly parent: RxNode
  readonly revision: number
  readonly mountedAfter?: RxNode
  readonly children: RxNodeChildren
  readonly next?: RxNode
  readonly prev?: RxNode
  native?: E
  resizeObserver?: ResizeObserver
}

export interface RxNodeChildren {
  readonly first?: RxNode
  readonly count: number
}
