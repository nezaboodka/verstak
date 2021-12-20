// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

export type Render<E = unknown, O = void> = (element: E, options: O) => void | Promise<void>
export type SuperRender<O = unknown, E = void> = ((render: (options: O) => void, element: E) => void)
export type AsyncSuperRender<O = unknown, E = void> = ((render: (options: O) => Promise<void>, element: E) => Promise<void>)
export type Customize<E = unknown, O = void> = (element: E, options: O) => void
export type AsyncCustomize<E = unknown, O = void> = (element: E, options: O) => Promise<void>

export interface RxNodeType<E = unknown, O = void> {
  readonly name: string
  readonly sequential: boolean
  initialize?(node: RxNode<E, O>): void
  mount?(node: RxNode<E, O>): void
  render?(node: RxNode<E, O>, args: unknown): void
  finalize?(node: RxNode<E, O>, initiator: RxNode): void
}

export interface RxNode<E = any, O = any> {
  // User-defined properties
  readonly id: string
  readonly type: RxNodeType<E, O>
  readonly inline: boolean
  args: unknown
  render: Render<E, O>
  superRender: SuperRender<O, E> | undefined
  priority: number
  childrenShuffling: boolean
  model?: unknown
  // System-managed properties
  readonly level: number
  readonly parent: RxNode
  native?: E
  resizeObserver?: ResizeObserver
  revision: number
  parentRevision: number
  prevSibling?: RxNode
  isMountRequired: boolean
  // Linking (internal)
  namespace: Map<string, RxNode>
  children: RefreshableSequence<RxNode>
  next?: RxNode
  prev?: RxNode
  rerender(args?: unknown): void
}

export interface RefreshableSequence<T extends { next?: T, prev?: T }> {
  readonly refreshingFirst?: T
  readonly refreshingLast?: T
  readonly refreshingCount: number
  readonly first?: T
  readonly count: number
  isRefreshing: boolean
  addAsNewlyCreated(item:T): void
  addAsAlreadyExisting(item:T): void
}
