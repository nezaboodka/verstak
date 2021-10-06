// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, Reentrance, TraceLevel, transaction } from 'reactronic'
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

  protected onFocusIn(e: FocusEvent): void {
    this.doFocusIn(e)
  }

  protected onFocusOut(e: FocusEvent): void {
    this.doFocusOut(e)
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected doFocusIn(e: FocusEvent): void {
    this.event = e
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected doFocusOut(e: FocusEvent): void {
    this.event = e
  }
}
