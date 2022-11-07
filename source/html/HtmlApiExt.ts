// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { DataForSensor, SymDataForSensor, SymResizeObserver } from "./sensors/DataForSensor"

declare global {
  interface Element {
    dataForSensor: DataForSensor
    resizeObserver?: ResizeObserver
  }
}

const ElementType = global.Element

if (ElementType !== undefined) {
  Object.defineProperty(ElementType.prototype, "dataForSensor", {
    configurable: false, enumerable: false,
    get(): DataForSensor {
      let result = this[SymDataForSensor]
      if (result === undefined)
        result = this[SymDataForSensor] = {}
      return result
    },
    set(value: DataForSensor) {
      this[SymDataForSensor] = value
    },
  })
  Object.defineProperty(ElementType.prototype, "resizeObserver", {
    configurable: false, enumerable: false,
    get(): ResizeObserver | undefined {
      return this[SymResizeObserver]
    },
    set(value: ResizeObserver | undefined) {
      this[SymResizeObserver] = value
    },
  })
}
