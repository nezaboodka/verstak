// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, TraceLevel, transaction } from 'reactronic'
import { EmptyDataArray, grabElementData } from '../core/Sensor'
import { SymDataForSensor } from './HtmlApiExt'
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

  reset(): void {
    this.doFocusOut()
  }

  protected onFocusIn(e: FocusEvent): void {
    this.doFocusIn(e)
    this.setPreventDefaultAndStopPropagation(e)
  }

  protected onFocusOut(e: FocusEvent): void {
    this.doFocusOut()
    this.setPreventDefaultAndStopPropagation(e)
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected doFocusIn(e: FocusEvent): void {
    this.preventDefault = false
    this.stopPropagation = false
    const path = e.composedPath()
    const { data, window } = grabElementData(path, SymDataForSensor, 'focus', this.elementDataList)
    this.elementDataList = data
    this.revision++
    this.window?.setActiveWindow(window)
  }

  @transaction
  protected doFocusOut(): void {
    this.preventDefault = false
    this.stopPropagation = false
    this.elementDataList = EmptyDataArray
    this.revision++
  }

  // @reaction
  // protected debug(): void {
  //   console.log(`Focus: topElementData = ${this.topElementData}`)
  // }
}
