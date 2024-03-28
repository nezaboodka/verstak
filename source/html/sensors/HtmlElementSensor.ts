// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { raw } from "reactronic"
import { DataForSensor, SymDataForSensor } from "./DataForSensor.js"
import { Sensor } from "./Sensor.js"
import { WindowSensor } from "./WindowSensor.js"

export class HtmlElementSensor extends Sensor {
  @raw readonly sourceElement: HTMLElement | SVGElement
  @raw readonly windowSensor?: WindowSensor
  @raw preventDefault: boolean
  @raw stopPropagation: boolean

  constructor(sourceElement: HTMLElement | SVGElement, windowSensor?: WindowSensor) {
    super()
    this.sourceElement = sourceElement
    this.windowSensor = windowSensor
    this.preventDefault = false
    this.stopPropagation = false
  }

  protected getDefaultSensorData(): DataForSensor {
    return (this.sourceElement as any)[SymDataForSensor]
  }

  protected setPreventDefaultAndStopPropagation(e: Event): void {
    if (this.preventDefault) {
      e.preventDefault()
      this.preventDefault = false
    }
    if (this.stopPropagation) {
      e.stopPropagation()
      this.stopPropagation = false
    }
  }
}
