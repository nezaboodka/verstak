// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2020 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { EventInfo } from '../core'

export const SymEventInfo: unique symbol = Symbol('EventInfo')

declare global {
  interface Element {
    eventInfo?: EventInfo
  }
}

const ElementType = global.Element

if (ElementType !== undefined) {
  Object.defineProperty(ElementType.prototype, 'eventInfo', {
    configurable: false, enumerable: false,
    get(): unknown { return this[SymEventInfo] },
    set(value: unknown) { this[SymEventInfo] = value },
  })
}
