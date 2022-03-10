// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, transaction, LoggingLevel, ToggleRef, sensitive } from 'reactronic'
import { grabElementDataList, SymDataForSensor } from './DataForSensor'
import { HtmlElementSensor } from './HtmlElementSensor'

export class ContextSensor extends HtmlElementSensor {
  debug: string
  previousElementDataList: unknown[]
  private preventFocusInHandling: boolean
  private preventFocusOutHandling: boolean

  constructor() {
    super()
    this.debug = ''
    this.previousElementDataList = []
    this.preventFocusInHandling = false
    this.preventFocusOutHandling = false
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
        existing.removeEventListener('pointerdown', this.onPointerDown.bind(this), { capture: true })
      }
      this.sourceElement = element
      if (element && enabled) {
        element.addEventListener('focusin', this.onFocusIn.bind(this), { capture: true })
        element.addEventListener('focusout', this.onFocusOut.bind(this), { capture: true })
        element.addEventListener('pointerdown', this.onPointerDown.bind(this), { capture: true })
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

  protected onPointerDown(e: PointerEvent): void {
    this.doPointerDown(e)
    this.setPreventDefaultAndStopPropagation(e)
  }

  protected onFocusOut(e: FocusEvent): void {
    this.doFocusOut(e)
    this.setPreventDefaultAndStopPropagation(e)
  }

  @transaction @options({ logging: LoggingLevel.Off })
  protected doFocusIn(e: FocusEvent): void {
    if (!this.preventFocusInHandling) {
      sensitive(true, () => this.debug = 'focusin*')
      const path = e.composedPath()
      const { dataList } = grabElementDataList(path, SymDataForSensor, 'context', this.elementDataList, true)
      this.setElementDataList(toggleFocusRefs(this.elementDataList, dataList))
      this.reset()
    }
    else {
      sensitive(true, () => this.debug = 'focusin')
      this.preventFocusInHandling = false
    }
  }

  @transaction
  protected doFocusOut(e: FocusEvent): void {
    if (!this.preventFocusOutHandling) {
      sensitive(true, () => this.debug = 'focusout**')
      const isFocusLost = e.relatedTarget === null
      if (isFocusLost) {
        sensitive(true, () => this.debug = 'focusout*')
        this.setElementDataList(toggleFocusRefs(this.previousElementDataList, []))
        this.elementDataList = []
      }
      this.reset()
    }
    else {
      sensitive(true, () => this.debug = 'focusout')
      this.preventFocusOutHandling = false
    }
  }

  @transaction @options({ logging: LoggingLevel.Off })
  protected doPointerDown(e: PointerEvent): void {
    sensitive(true, () => this.debug = 'pointerdown')
    this.preventFocusInHandling = true
    this.preventFocusOutHandling = true
    const path = e.composedPath()
    const { dataList } = grabElementDataList(path, SymDataForSensor, 'context', this.elementDataList, true)
    this.setElementDataList(toggleFocusRefs(this.elementDataList, dataList))
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
