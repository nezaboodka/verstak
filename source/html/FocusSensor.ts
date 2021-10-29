// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, TraceLevel, transaction } from 'reactronic'
import { EmptyAssociatedDataArray, grabAssociatedData } from '../core/Sensor'
import { SymAssociatedData } from './HtmlApiExt'
import { HtmlElementSensor } from './HtmlElementSensor'

export class FocusSensor extends HtmlElementSensor {

  @transaction
  listen(element: HTMLElement | undefined, enabled: boolean = true): void {
    const existing = this.sourceElement
    if (element !== existing) {
      if (existing) {
        existing.removeEventListener('focusin', this.onFocusIn.bind(this), { capture: true })
        existing.removeEventListener('focusout', this.onFocusOut.bind(this), { capture: true })
      }
      this.sourceElement = element
      if (element && enabled) {
        element.addEventListener('focusin', this.onFocusIn.bind(this), { capture: true })
        element.addEventListener('focusout', this.onFocusOut.bind(this), { capture: true })
      }
    }
  }

  @transaction
  reset(): void {
    this.doReset()
  }

  protected onFocusIn(e: FocusEvent): void {
    this.updateSensorData(e)
  }

  protected onFocusOut(e: FocusEvent): void {
    this.reset()
  }

  protected doReset(): void {
    this.associatedDataPath = EmptyAssociatedDataArray
    this.revision++
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected updateSensorData(e: FocusEvent): void {
    const path = e.composedPath()
    const { data, window } = grabAssociatedData(path, SymAssociatedData, 'focus', this.associatedDataPath)
    this.associatedDataPath = data
    this.revision++
    this.window?.setActiveWindow(window)
  }

  // @reaction
  // protected debug(): void {
  //   console.log(`Focus: topAssociatedData = ${this.topAssociatedData}`)
  // }
}
