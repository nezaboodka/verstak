// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, transaction, LoggingLevel, ToggleRef } from 'reactronic'
import { DataForSensor, grabElementDataList, SymDataForSensor } from './DataForSensor'
import { HtmlElementSensor } from './HtmlElementSensor'
import { WindowSensor } from './WindowSensor'

export class FocusSensor extends HtmlElementSensor {
  activeData: unknown
  previousActiveData: unknown
  contextElementDataList: unknown[]

  debug: string

  constructor(windowSensor: WindowSensor) {
    super(undefined, windowSensor)
    this.activeData = undefined
    this.previousActiveData = undefined
    this.contextElementDataList = []
    this.debug = ''
  }

  getDefaultFocusData(): unknown {
    const sourceElement = this.sourceElement
    const data = sourceElement
      ? (sourceElement as any)[SymDataForSensor] as DataForSensor | undefined
      : undefined
    return data?.focus
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
    const path = e.composedPath()
    // Focus
    const { dataList: focusDataList, activeData: focusActiveData } = grabElementDataList(path, SymDataForSensor, 'focus', this.elementDataList, true, e => document.activeElement === e)
    this.elementDataList = focusDataList
    this.setActiveData(focusActiveData)
    // Context
    const { dataList: contextDataList } = grabElementDataList(path, SymDataForSensor, 'context', this.contextElementDataList, true)
    this.contextElementDataList = toggleFocusRefs(this.contextElementDataList, contextDataList)
    this.reset()
  }

  @transaction
  protected doFocusOut(e: FocusEvent): void {
    this.debug = 'focusout'
    const isLosingFocus = e.relatedTarget === null
    if (isLosingFocus) {
      const path = e.composedPath()
      // Focus
      const { dataList, activeData } = grabElementDataList(path, SymDataForSensor, 'focus', this.elementDataList, true, e => document.activeElement === e)
      const filteredElementDataList = dataList.filter(x => x !== this.activeData)
      this.elementDataList = filteredElementDataList.length > 0 ? filteredElementDataList : [this.getDefaultFocusData()]
      this.setActiveData(activeData)
      if (filteredElementDataList.length === 0)
        this.debug = 'focusout (no focus data found)'
      // Context
      this.contextElementDataList = toggleFocusRefs(this.contextElementDataList, [])
    }
    this.reset()
  }
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
