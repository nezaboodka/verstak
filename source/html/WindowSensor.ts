// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { transaction } from 'reactronic'
import { Sensor } from './Sensor'

export class WindowSensor extends Sensor {
  activeData: unknown = undefined
  previousActiveData: unknown = undefined

  @transaction
  setActiveWindow(window: unknown): void {
    if (window !== this.activeData) {
      this.previousActiveData = this.activeData
      this.activeData = window
    }
  }

  // @reaction
  // protected debug(): void {
  //   console.log(`WindowSensor: activeWindow = ${this.activeData}, previousActiveWindow = ${this.previousActiveData}`)
  // }
}
