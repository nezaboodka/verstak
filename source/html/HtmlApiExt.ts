// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { DataForSensor, SymDataForSensor, SymHtmlSensors, SymResizeObserver } from "../sensors/DataForSensor.js"
import { HtmlSensors } from "../sensors/HtmlSensors.js"

declare global {
  interface Element {
    sensors: HtmlSensors
    dataForSensor: DataForSensor
    resizeObserver?: ResizeObserver
  }
}

const ElementType = global.Element

if (ElementType !== undefined) {
  Object.defineProperty(ElementType.prototype, "sensors", {
    configurable: false, enumerable: false,
    get(): HtmlSensors {
      let result = this[SymHtmlSensors]
      if (result === undefined)
        result = this[SymHtmlSensors] = new HtmlSensors(this)
      return result
    },
  })
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
