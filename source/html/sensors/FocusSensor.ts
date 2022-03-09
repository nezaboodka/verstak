// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, transaction, LoggingLevel } from 'reactronic'
import { grabElementDataList, SymDataForSensor } from './DataForSensor'
import { HtmlElementSensor } from './HtmlElementSensor'
import { WindowSensor } from './WindowSensor'

export class FocusSensor extends HtmlElementSensor {
  activeData: unknown
  previousActiveData: unknown

  debug: string

  constructor(windowSensor: WindowSensor) {
    super(undefined, windowSensor)
    this.activeData = undefined
    this.previousActiveData = undefined

    this.debug = ''
  }

  @transaction
  setActiveData(data: unknown, debugHint: string = ''): void {
    if (data !== this.activeData) {
      this.previousActiveData = this.activeData
      this.activeData = data
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
    this.debug = 'focusin'
    this.preventDefault = false
    this.stopPropagation = false
    const path = e.composedPath()
    this.updateState(path)
    this.revision++
  }

  @transaction
  protected doFocusOut(e: FocusEvent): void {
    this.debug = 'focusout'
    const isFocusLost = e.relatedTarget === null
    if (isFocusLost) {
      const path = e.composedPath().slice(1)
      this.updateState(path)
    }
    this.reset()
  }

  private updateState(path: EventTarget[]): void {
    const { dataList, activeData } = grabElementDataList(path, SymDataForSensor, 'focus', this.elementDataList, true, e => document.activeElement === e)
    this.elementDataList = dataList
    this.setActiveData(activeData)
  }
}
