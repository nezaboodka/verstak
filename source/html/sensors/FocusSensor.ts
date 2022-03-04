// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, transaction, LoggingLevel, unobservable } from 'reactronic'
import { grabElementDataList, SymDataForSensor } from './DataForSensor'
import { HtmlElementSensor } from './HtmlElementSensor'
import { WindowSensor } from './WindowSensor'

export class FocusSensor extends HtmlElementSensor {
  @unobservable needUpdate: boolean
  previousElementDataList: unknown[]

  constructor(windowSensor: WindowSensor) {
    super(undefined, windowSensor)
    this.needUpdate = false
    this.previousElementDataList = []
  }

  @transaction
  setElementDataList(dataList: unknown[], debugHint: string = ''): void {
    if (dataList !== this.elementDataList) {
      this.previousElementDataList = this.elementDataList
      this.elementDataList = dataList
    }
  }

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
    this.needUpdate = false
    this.preventDefault = false
    this.stopPropagation = false
    this.revision++
  }

  protected onFocusIn(e: FocusEvent): void {
    this.doFocusIn(e)
    this.setPreventDefaultAndStopPropagation(e)
  }

  protected onFocusOut(e: FocusEvent): void {
    this.doFocusOut(e)
    this.setPreventDefaultAndStopPropagation(e)
  }

  @transaction @options({ logging: LoggingLevel.Off })
  protected doFocusIn(e: FocusEvent): void {
    this.preventDefault = false
    this.stopPropagation = false
    const path = e.composedPath()
    console.log('focusin', path)
    // this.setElementDataList(grabElementDataList(path, SymDataForSensor, ['focus'], this.previousElementDataList).dataList)
    this.revision++
  }

  @transaction
  protected doFocusOut(e: FocusEvent): void {
    const path = e.composedPath()
    console.log('focusout', path)

    // if (this.needUpdate) {
    // const path = e.composedPath()
    this.setElementDataList(grabElementDataList(path, SymDataForSensor, ['focus'], this.previousElementDataList).dataList)
    // }
    this.reset()
  }

  // @reaction
  // protected debug(): void {
  //   console.log('Focus')
  //   console.log(this.topElementData)
  // }
}

// function toggleFocusRefs(existing: unknown[], updated: unknown[]): unknown[] {
//   if (updated !== existing) {
//     existing.forEach(f => {
//       if (f instanceof ToggleRef && f.valueOn !== f.valueOff)
//         f.value = f.valueOff
//     })
//     updated.forEach(x => {
//       if (x instanceof ToggleRef)
//         x.value = x.valueOn
//     })
//   }
//   return updated
// }
