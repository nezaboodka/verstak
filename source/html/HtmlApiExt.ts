// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { SensorData } from '../core/api'

export const SymSensorData: unique symbol = Symbol('SensorData')

declare global {
  interface Element {
    sensorData: SensorData
  }
}

const ElementType = global.Element

if (ElementType !== undefined) {
  Object.defineProperty(ElementType.prototype, 'sensorData', {
    configurable: false, enumerable: false,
    get(): unknown {
      let result = this[SymSensorData]
      if (result === undefined)
        result = this[SymSensorData] = {}
      return result
    },
    set(value: unknown) {
      this[SymSensorData] = value
    },
  })
}
