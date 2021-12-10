// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, standalone, ToggleRef, TraceLevel, transaction } from 'reactronic'
import { grabElementData, SymDataForSensor } from './DataForSensor'
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

  @transaction @options({ trace: TraceLevel.Silent })
  protected doFocusIn(e: FocusEvent): void {
    this.preventDefault = false
    this.stopPropagation = false
    const path = e.composedPath()
    const { data, window } = grabElementData(path, SymDataForSensor, 'focus', this.elementDataList)
    this.elementDataList = toggleFocusRefs(this.elementDataList, data)
    this.revision++
    standalone(() => {
      this.windowSensor?.setActiveWindow(window, 'focus')
    })
  }

  @transaction
  protected doFocusOut(): void {
    this.preventDefault = false
    this.stopPropagation = false
    // this.elementDataList = toggleFocusRefs(this.elementDataList, EmptyDataArray)
    this.revision++
  }

  // @reaction
  // protected debug(): void {
  //   console.log('Focus')
  //   console.log(this.topElementData)
  // }
}

function toggleFocusRefs(existing: unknown[], updated: unknown[]): unknown[] {
  if (updated !== existing) {
    existing.forEach(f => {
      if (f instanceof ToggleRef && f.valueOn !== f.valueOff)
        f.value = f.valueOff
    })
    updated.forEach(x => {
      if (x instanceof ToggleRef)
        x.value = x.valueOn
    })
  }
  return updated
}
