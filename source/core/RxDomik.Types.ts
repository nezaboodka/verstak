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
  revision: number
  reconcilingRevision: number
  prevSibling?: RxNode
  isMountRequired: boolean
  native?: E
  resizeObserver?: ResizeObserver
  children: RxNodeSequence
  next?: RxNode
  prev?: RxNode
  rerender(args?: unknown): void
}

export interface RxNodeSequence {
  readonly first?: RxNode
  readonly count: number
  readonly isReconciling: boolean
  readonly retainedFirst?: RxNode
  readonly retainedLast?: RxNode
  readonly retainedCount: number
  beginReconciling(revision: number): void
  endReconciling(): void
  tryToRetainExisting(id: string): RxNode | undefined
  retainNewlyCreated(node: RxNode): void
}
