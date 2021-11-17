// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Render, Rtti, NodeInfo } from './Data'
import { RxDom } from './RxDom'

export function RxFragment<E = unknown, O = void>(id: string, args: any, render: Render<E, O>): NodeInfo<E, O> {
  return RxDom.emit(id, args, render, undefined, RTTI_RX_FRAGMENT)
}

export function RxFragmentWithoutOrdering<E = unknown, O = void>(id: string, args: any, render: Render<E, O>): NodeInfo<E, O> {
  return RxDom.emit(id, args, render, undefined, RTTI_RX_UNORDERED_FRAGMENT)
}

const RTTI_RX_FRAGMENT: Rtti<any, any> = { name: 'RxFragment', unordered: false }
const RTTI_RX_UNORDERED_FRAGMENT: Rtti<any, any> = { name: 'RxSortingFragment', unordered: true }
