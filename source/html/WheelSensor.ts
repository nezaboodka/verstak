// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, Reentrance, TraceLevel, transaction } from 'reactronic'
import { EmptyAssociatedDataArray, grabAssociatedData } from '../core/Sensor'
import { SymAssociatedData } from './HtmlApiExt'
import { extractModifierKeys, KeyboardModifiers } from './KeyboardSensor'
import { PointerSensor } from './PointerSensor'

export class WheelSensor extends PointerSensor {
  deltaX = Infinity
  deltaY = Infinity

  @transaction
  listen(element: HTMLElement | undefined, enabled: boolean = true): void {
    const existing = this.sourceElement
    if (element !== existing) {
      if (existing) {
        existing.removeEventListener('wheel', this.onWheel, { capture: true })
      }
      this.sourceElement = element
      if (element && enabled) {
        element.addEventListener('wheel', this.onWheel, { capture: true })
      }
    }
  }

  protected onWheel(e: WheelEvent): void {
    this.doWheel(e)
    // this.reset()
  }

  @transaction @options({ reentrance: Reentrance.CancelPrevious, trace: TraceLevel.Suppress })
  protected doWheel(e: WheelEvent): void {
    this.rememberWheelEvent(e)
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected reset(): void {
    this.event = undefined
    this.associatedDataPath = EmptyAssociatedDataArray
    this.associatedDataUnderPointer = EmptyAssociatedDataArray
    this.modifiers = KeyboardModifiers.None
    this.positionX = Infinity
    this.positionY = Infinity
    this.deltaX = Infinity
    this.deltaY = Infinity
  }

  protected rememberWheelEvent(e: WheelEvent): void {
    this.event = e
    const path = e.composedPath()
    this.associatedDataPath = grabAssociatedData(path, SymAssociatedData, 'wheel', 'wheelImportance', this.associatedDataPath)
    const elements = document.elementsFromPoint(e.clientX, e.clientY)
    this.associatedDataUnderPointer = grabAssociatedData(elements, SymAssociatedData, 'wheel', 'wheelImportance', this.associatedDataUnderPointer)
    this.modifiers = extractModifierKeys(e)
    this.positionX = e.clientX
    this.positionY = e.clientY
    this.deltaX = e.deltaX
    this.deltaY = e.deltaY
    this.revision++
  }
}
