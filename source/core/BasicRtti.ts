// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Render, Manifest, Rtti, manifest } from './System'

export function RxFragment<E = unknown, O = void>(id: string, triggers: any, render: Render<E, O>): Manifest<E, O> {
  return manifest(id, triggers, render, undefined, RTTI_RX_FRAGMENT)
}

export function RxSortingFragment<E = unknown, O = void>(id: string, triggers: any, render: Render<E, O>): Manifest<E, O> {
  return manifest(id, triggers, render, undefined, RTTI_RX_SORTING_FRAGMENT)
}

const RTTI_RX_FRAGMENT: Rtti<any, any> = { name: 'RxFragment', sorting: false }
const RTTI_RX_SORTING_FRAGMENT: Rtti<any, any> = { name: 'RxSortingFragment', sorting: true }
