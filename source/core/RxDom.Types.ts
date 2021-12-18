// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
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
  render?(node: RxNode<E, O>, args?: unknown): void
  finalize?(node: RxNode<E, O>, cause: RxNode): void
}

export interface AbstractNodeInstance<E = unknown, O = void> {
  readonly uuid: number
  readonly level: number
  revision: number
  native?: E
  model?: unknown
  children: ReadonlyArray<RxNode<any, any>>
  buffer: Array<RxNode<any, any>> | undefined
  aliens: ReadonlyArray<RxNode<any, any>>
  resizing?: ResizeObserver
  render(node: RxNode<E, O>): void
  // ['#this']: string
}

export class RxNode<E = unknown, O = void> {
  old?: RxNode<E, O> = undefined // internal
  sibling?: RxNode = undefined // internal
  get native(): E | undefined { return this.instance?.native }

  constructor(
    readonly id: string,
    readonly args: unknown,
    readonly render: Render<E, O>,
    readonly superRender: SuperRender<O, E> | undefined,
    readonly priority: number,
    readonly type: RxNodeType<E, O>,
    readonly inline: boolean,
    readonly owner: RxNode,
    readonly host: RxNode,
    public instance?: AbstractNodeInstance<E, O>) {
  }
}
