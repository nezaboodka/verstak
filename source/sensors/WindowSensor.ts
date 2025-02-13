// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ToggleRef, atomicAction } from "reactronic"
import { objectHasMember } from "../core/ElUtils.js"
import { Sensor } from "./Sensor.js"

export type WindowModel = {
  popupToggle?: ToggleRef
}

export class WindowSensor extends Sensor {
  activeData: unknown = undefined
  previousActiveData: unknown = undefined

  @atomicAction
  setActiveWindow(window: unknown, debugHint: string = ""): void {

    // console.log(`====> setActiveWindow, ${debugHint}`)
    // console.log(window)

    if (window !== this.activeData) {
      const activeData = this.activeData
      if (activeData && objectHasMember<WindowModel>(activeData, "popupToggle")) {
        const popupToggle = activeData.popupToggle
        if (popupToggle instanceof ToggleRef) {
          popupToggle.variable = popupToggle.valueOff
        }
      }
      // if (window && objectHasMember<WindowModel>(window, 'popupToggle')) {
      //   const popupToggle = window.popupToggle
      //   if (popupToggle instanceof ToggleRef) {
      //     popupToggle.value = popupToggle.valueOn
      //   }
      // }
      this.previousActiveData = activeData
      this.activeData = window
    }
  }

  // @reactive
  // protected debug(): void {
  //   console.log('WindowSensor - activeWindow, previousActiveWindow:')
  //   console.log(this.activeData)
  //   console.log(this.previousActiveData)
  // }
}
