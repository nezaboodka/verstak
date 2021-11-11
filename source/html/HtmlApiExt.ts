// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { HtmlDragSensorModel } from './HtmlDragSensorModel'

export interface TypedDataForSensor {
  window?: unknown
  focus?: unknown
  hover?: unknown
  keyboard?: unknown
  click?: unknown
  wheel?: unknown
  resize?: unknown
  drag?: unknown
  htmlDrag?: HtmlDragSensorModel
  button?: unknown
}

export const SymDataForSensor: unique symbol = Symbol('DataForSensor')

declare global {
  interface Element {
    dataForSensor: TypedDataForSensor
  }
}

const ElementType = global.Element

if (ElementType !== undefined) {
  Object.defineProperty(ElementType.prototype, 'dataForSensor', {
    configurable: false, enumerable: false,
    get(): unknown {
      let result = this[SymDataForSensor]
      if (result === undefined)
        result = this[SymDataForSensor] = {}
      return result
    },
    set(value: unknown) {
      this[SymDataForSensor] = value
    },
  })
}
