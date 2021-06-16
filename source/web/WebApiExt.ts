// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Signals } from '../core'

export const SymSignals: unique symbol = Symbol('Signals')

declare global {
  interface Element {
    signals?: Signals
  }
}

const ElementType = global.Element

if (ElementType !== undefined) {
  Object.defineProperty(ElementType.prototype, 'signals', {
    configurable: false, enumerable: false,
    get(): unknown { return this[SymSignals] },
    set(value: unknown) { this[SymSignals] = value },
  })
}
