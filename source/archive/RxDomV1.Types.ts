// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

export type Render<E = unknown, O = void> = (element: E, options: O) => void | Promise<void>
export type SuperRender<E = unknown, O = void> = ((render: (options: O) => void, element: E) => void)
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

export interface RxNodeInstance<E = unknown, O = void> {
  readonly uuid: number
  readonly level: number
  revision: number
  native?: E
  model?: unknown
  children: ReadonlyArray<RxNode>
  buffer: Array<RxNode> | undefined
  guests: ReadonlyArray<RxNode>
  resizeObserver?: ResizeObserver
  rerender(node: RxNode<E, O>): void
}

export class RxNode<E = any, O = any> {
  old?: RxNode<E, O> = undefined // internal
  prevSibling?: RxNode = undefined // internal
  get parent(): RxNode { return this.host }
  get revision(): number { return this.instance?.revision ?? ~0 }
  get native(): E | undefined { return this.instance?.native }
  set native(e: E | undefined) { this.instance!.native = e }
  get resizeObserver(): ResizeObserver | undefined { return this.instance?.resizeObserver }

  constructor(
    readonly id: string,
    readonly args: unknown,
    readonly render: Render<E, O>,
    readonly superRender: SuperRender<E, O> | undefined,
    public priority: number,
    public childrenShuffling: boolean,
    readonly type: RxNodeType<E, O>,
    readonly inline: boolean,
    readonly creator: RxNode,
    readonly host: RxNode,
    public instance?: RxNodeInstance<E, O>) {
  }
}
