// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { AssociatedData } from '../core/api'

export const SymAssociatedData: unique symbol = Symbol('AssociatedData')

declare global {
  interface Element {
    associatedData: AssociatedData
  }
}

const ElementType = global.Element

if (ElementType !== undefined) {
  Object.defineProperty(ElementType.prototype, 'associatedData', {
    configurable: false, enumerable: false,
    get(): unknown {
      let result = this[SymAssociatedData]
      if (result === undefined)
        result = this[SymAssociatedData] = {}
      return result
    },
    set(value: unknown) {
      this[SymAssociatedData] = value
    },
  })
}
