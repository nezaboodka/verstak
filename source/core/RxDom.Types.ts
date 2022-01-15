// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

export type RxRender<E = unknown, O = void> = (element: E, options: O) => void | Promise<void>
export type RxCustomize<E = unknown, O = void> = (render: (options: O) => void, element: E) => void
export const enum RxPriority { SyncP0 = 0, AsyncP1 = 1, AsyncP2 = 2 }
export type Callback<E = unknown> = (element: E) => void // to be deleted
