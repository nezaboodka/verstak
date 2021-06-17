// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { CustomInfo } from '../core'

export const SymCustomInfo: unique symbol = Symbol('CustomInfo')

declare global {
  interface Element {
    customInfo: CustomInfo
  }
}

const ElementType = global.Element

if (ElementType !== undefined) {
  Object.defineProperty(ElementType.prototype, 'customInfo', {
    configurable: false, enumerable: false,
    get(): unknown {
      let result = this[SymCustomInfo]
      if (result === undefined)
        result = this[SymCustomInfo] = {}
      return result
    },
    set(value: unknown) {
      this[SymCustomInfo] = value
    },
  })
}
