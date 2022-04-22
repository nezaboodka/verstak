// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { subscribeless } from 'reactronic'
import { DataForSensor, SymDataForSensor } from './DataForSensor'
// import { FocusSensor } from './FocusSensor'
import { Sensor } from './Sensor'
import { WindowSensor } from './WindowSensor'

export class HtmlElementSensor extends Sensor {
  @subscribeless readonly focusSensor?: any
  @subscribeless readonly windowSensor?: WindowSensor
  sourceElement: HTMLElement | undefined = undefined
  @subscribeless preventDefault: boolean
  @subscribeless stopPropagation: boolean

  constructor(focusSensor?: any, windowSensor?: WindowSensor) {
    super()
    this.focusSensor = focusSensor
    this.windowSensor = windowSensor
    this.preventDefault = false
    this.stopPropagation = false
  }

  protected getDefaultSensorData(): DataForSensor | undefined {
    const sourceElement = this.sourceElement
    return sourceElement ? (sourceElement as any)[SymDataForSensor] : undefined
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
