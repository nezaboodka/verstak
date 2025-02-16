// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { unobservable } from "reactronic"
import { DataForSensor, SymDataForSensor } from "./DataForSensor.js"
import { Sensor } from "./Sensor.js"
import { WindowSensor } from "./WindowSensor.js"

export class HtmlElementSensor extends Sensor {
  @unobservable readonly sourceElement: HTMLElement | SVGElement
  @unobservable readonly windowSensor?: WindowSensor
  @unobservable preventDefault: boolean
  @unobservable stopPropagation: boolean

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
