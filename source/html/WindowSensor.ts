// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { reaction, transaction } from 'reactronic'
import { Sensor } from '../core/Sensor'

export class WindowSensor extends Sensor {
  activeWindow: unknown = undefined
  previousActiveWindow: unknown = undefined

  @transaction
  setActiveWindow(window: unknown): void {
    if (window !== this.activeWindow) {
      this.previousActiveWindow = this.activeWindow
      this.activeWindow = window
    }
  }

  @reaction
  protected debug(): void {
    console.log(`WindowSensor: activeWindow = ${this.activeWindow}, previousActiveWindow = ${this.previousActiveWindow}`)
  }
}
