// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { unobservable } from 'reactronic'
import { Sensor } from '../core/Sensor'
import { WindowSensor } from './WindowSensor'

export class HtmlElementSensor extends Sensor {
  @unobservable readonly window?: WindowSensor
  sourceElement: HTMLElement | undefined = undefined

  constructor(window?: WindowSensor) {
    super()
    this.window = window
  }
}
