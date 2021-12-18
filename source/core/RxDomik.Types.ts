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
  finalize?(node: RxNode<E, O>, cause: RxNode): void
}

export interface RxNode<E = any, O = any> {
  readonly uuid: number
  readonly id: string
  readonly type: RxNodeType<E, O>
  readonly inline: boolean
  readonly owner: RxNode
  readonly level: number
  args: unknown
  render: Render<E, O>
  superRender: SuperRender<O, E> | undefined
  priority: number
  validation: number
  revision: number
  native?: E
  host: RxNode
  lastHost: RxNode
  model?: unknown
  children: Map<string, RxNode>
  first?: RxNode
  next?: RxNode
  sibling?: RxNode
  emitted?: RxNode
  volume: number
  guests: Map<RxNode, Set<RxNode>>
  resizing?: ResizeObserver
  rerender(args?: unknown): void
}