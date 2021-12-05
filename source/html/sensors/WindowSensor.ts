// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { reaction, transaction } from 'reactronic'
import { Sensor } from '../Sensor'

export class WindowSensor extends Sensor {
  activeData: unknown = undefined
  previousActiveData: unknown = undefined

  @transaction
  setActiveWindow(window: unknown, debugHint: string = ''): void {

    // console.log(`====> setActiveWindow, ${debugHint}`)
    // console.log(window)

    if (window !== this.activeData) {
      this.previousActiveData = this.activeData
      this.activeData = window
    }
  }

  @reaction
  protected debug(): void {
    console.log('WindowSensor - activeWindow, previousActiveWindow:')
    console.log(this.activeData)
    console.log(this.previousActiveData)
  }
}
