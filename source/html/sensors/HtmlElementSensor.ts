// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { unobservable } from 'reactronic'
import { Sensor } from './Sensor'
import { WindowSensor } from './WindowSensor'

export class HtmlElementSensor extends Sensor {
  @unobservable readonly windowSensor?: WindowSensor
  sourceElement: HTMLElement | undefined = undefined
  @unobservable preventDefault: boolean
  @unobservable stopPropagation: boolean

  constructor(windowSensor?: WindowSensor) {
    super()
    this.windowSensor = windowSensor
    this.preventDefault = false
    this.stopPropagation = false
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
