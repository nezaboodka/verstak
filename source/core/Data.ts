// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

export type Render<E = unknown, O = void> = (element: E, options: O) => void
export type SuperRender<O = unknown, E = void> = (render: (options: O) => O, element: E) => void
export const RefreshParent = Symbol('RefreshParent') as unknown as void

export interface Rtti<E = unknown, O = void> {
  readonly name: string
  readonly unordered: boolean
  initialize?(node: NodeInfo<E, O>): void
  host?(node: NodeInfo<E, O>, sibling?: NodeInfo): void
  render?(node: NodeInfo<E, O>): void
  finalize?(node: NodeInfo<E, O>, cause: NodeInfo): void
}

export interface AbstractNodeInstance<E = unknown, O = void> {
  readonly uuid: number
  readonly level: number
  revision: number
  native?: E
  model?: unknown
  children: ReadonlyArray<NodeInfo<any, any>>
  buffer: Array<NodeInfo<any, any>> | undefined
  aliens: ReadonlyArray<NodeInfo<any, any>>
  resizing?: ResizeObserver
  render(node: NodeInfo<E, O>): void
}

export class NodeInfo<E = unknown, O = void> {
  previous?: NodeInfo<E, O> = undefined // internal
  get native(): E | undefined { return this.instance?.native }

  constructor(
    readonly id: string,
    readonly args: unknown,
    readonly render: Render<E, O>,
    readonly superRender: SuperRender<O, E> | undefined,
    readonly rtti: Rtti<E, O>,
    readonly parent: NodeInfo,
    readonly hostingParent: NodeInfo,
    readonly reactivityParent: NodeInfo,
    public instance?: AbstractNodeInstance<E, O>) {
  }
}
