// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, TraceLevel, transaction } from 'reactronic'
import { EmptyAssociatedDataArray, grabAssociatedData, HtmlElementSensor } from '../core/Sensor'
import { SymAssociatedData } from './HtmlApiExt'

export class FocusSensor extends HtmlElementSensor {
  event: FocusEvent | undefined = undefined

  @transaction
  listen(element: HTMLElement | undefined, enabled: boolean = true): void {
    const existing = this.sourceElement
    if (element !== existing) {
      if (existing) {
        existing.removeEventListener('focusin', this.onFocusIn, { capture: true })
        existing.removeEventListener('focusout', this.onFocusOut, { capture: true })
      }
      this.sourceElement = element
      if (element && enabled) {
        element.addEventListener('focusin', this.onFocusIn, { capture: true })
        element.addEventListener('focusout', this.onFocusOut, { capture: true })
      }
    }
  }

  preventDefault(): void {
    this.event?.preventDefault()
  }

  stopPropagation(): void {
    this.event?.stopPropagation()
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected onFocusIn(e: FocusEvent): void {
    this.rememberFocusEvent(e)
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected onFocusOut(e: FocusEvent): void {
    this.reset()
  }

  reset(): void {
    this.event = undefined
    this.associatedDataPath = EmptyAssociatedDataArray
    this.revision++
  }

  protected rememberFocusEvent(e: FocusEvent): void {
    this.event = e
    const path = e.composedPath()
    this.associatedDataPath = grabAssociatedData(path, SymAssociatedData, 'focus', 'focusImportance', this.associatedDataPath)
    this.revision++
  }
}
