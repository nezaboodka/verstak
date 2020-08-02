// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2020 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE

import { Render, Token, Rtti, emit } from './System'

export function Trigger<E = unknown, O = void, S = void>(id: string, state: S, render: Render<E, O, S>): Token<E, O, S> {
  return emit(id, state, render, undefined, RTTI_TRIGGER)
}

export function SortingTrigger<E = unknown, O = void, S = void>(id: string, state: S, render: Render<E, O, S>): Token<E, O, S> {
  return emit(id, state, render, undefined, RTTI_SORTING_TRIGGER)
}

const RTTI_TRIGGER: Rtti<any, any, any> = { name: 'trigger', sorting: false }
const RTTI_SORTING_TRIGGER: Rtti<any, any, any> = { name: 'sorting-trigger', sorting: true }
