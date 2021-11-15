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
  initialize?(d: Declaration<E, O>): void
  place?(d: Declaration<E, O>, sibling?: Declaration): void
  render?(d: Declaration<E, O>): void
  finalize?(d: Declaration<E, O>, cause: Declaration): void
}

export interface AbstractInstance<E = unknown, O = void> {
  readonly level: number
  revision: number
  native?: E
  model?: unknown
  buffer: Array<Declaration<any, any>> | undefined
  children: ReadonlyArray<Declaration<any, any>>
  resizing?: ResizeObserver

  render(d: Declaration<E, O>): void
}

export class Declaration<E = unknown, O = void> {
  old?: Declaration<E, O> = undefined
  get native(): E | undefined { return this.instance?.native }

  constructor(
    readonly id: string,
    readonly args: unknown,
    readonly render: Render<E, O>,
    readonly superRender: SuperRender<O, E> | undefined,
    readonly rtti: Rtti<E, O>,
    readonly parent: Declaration,
    readonly renderingParent: Declaration,
    readonly reactivityParent: Declaration,
    public instance?: AbstractInstance<E, O>) {
  }
}
