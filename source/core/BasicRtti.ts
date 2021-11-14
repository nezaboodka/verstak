// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Transaction } from 'reactronic'
import { Render, Declaration, Rtti, declare, renderChildrenNow, ROOT } from './System'

export function ReactronicFront(render: Render): void {
  const self = ROOT.instance!
  if (self.updates)
    throw new Error('ReactronicFrontRendering should not be called recursively')
  self.updates = []
  render(self.native)
  Transaction.run(renderChildrenNow)
}

export function RxFragment<E = unknown, O = void>(id: string, args: any, render: Render<E, O>): Declaration<E, O> {
  return declare(id, args, render, undefined, RTTI_RX_FRAGMENT)
}

export function RxSortingFragment<E = unknown, O = void>(id: string, args: any, render: Render<E, O>): Declaration<E, O> {
  return declare(id, args, render, undefined, RTTI_RX_SORTING_FRAGMENT)
}

export function ForeignFragment<E = unknown, O = void>(id: string, args: any, foreign: Declaration<E, O>, render: Render<E, O>): Declaration<E, O> {
  return declare(id, args, render, undefined, RTTI_FOREIGN_FRAGMENT)
}

const RTTI_RX_FRAGMENT: Rtti<any, any> = { name: 'RxFragment', sorting: false }
const RTTI_RX_SORTING_FRAGMENT: Rtti<any, any> = { name: 'RxSortingFragment', sorting: true }
const RTTI_FOREIGN_FRAGMENT: Rtti<any, any> = { name: 'ForeignFragment', sorting: true }
