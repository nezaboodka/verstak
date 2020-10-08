// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2020 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE

import { Render, Emitted, Rtti, emit } from './System'

export function RxFragment<E = unknown, O = void, S = void>(id: string, state: S, render: Render<E, O, S>): Emitted<E, O, S> {
  return emit(id, state, render, undefined, RTTI_RX_FRAGMENT)
}

export function RxSortingFragment<E = unknown, O = void, S = void>(id: string, state: S, render: Render<E, O, S>): Emitted<E, O, S> {
  return emit(id, state, render, undefined, RTTI_RX_SORTING_FRAGMENT)
}

const RTTI_RX_FRAGMENT: Rtti<any, any, any> = { name: 'fragment', sorting: false }
const RTTI_RX_SORTING_FRAGMENT: Rtti<any, any, any> = { name: 'sorting-fragment', sorting: true }
