// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, Reentrance, TraceLevel, transaction } from 'reactronic'
import { EmptyDataArray, grabElementData } from './Sensor'
import { SymDataForSensor } from './HtmlApiExt'
import { extractModifierKeys, KeyboardModifiers } from './KeyboardSensor'
import { PointerSensor } from './PointerSensor'

export class WheelSensor extends PointerSensor {
  deltaX: number
  deltaY: number

  constructor() {
    super()
    this.deltaX = Infinity
    this.deltaY = Infinity
  }

  @transaction
  listen(element: HTMLElement | undefined, enabled: boolean = true): void {
    const existing = this.sourceElement
    if (element !== existing) {
      if (existing) {
        existing.removeEventListener('wheel', this.onWheel.bind(this), { capture: true })
      }
      this.sourceElement = element
      if (element && enabled) {
        element.addEventListener('wheel', this.onWheel.bind(this), { capture: true })
      }
    }
  }

  @transaction
  reset(): void {
    this.doReset()
  }

  protected onWheel(e: WheelEvent): void {
    this.doWheel(e)
    // this.reset()
  }

  @transaction @options({ reentrance: Reentrance.CancelPrevious, trace: TraceLevel.Suppress })
  protected doWheel(e: WheelEvent): void {
    this.updateSensorData(e)
  }

  protected doReset(): void {
    this.preventDefault = false
    this.stopPropagation = false
    this.elementDataList = EmptyDataArray
    this.elementDataUnderPointer = EmptyDataArray
    this.modifiers = KeyboardModifiers.None
    this.positionX = Infinity
    this.positionY = Infinity
    this.deltaX = Infinity
    this.deltaY = Infinity
  }

  protected updateSensorData(e: WheelEvent): void {
    this.preventDefault = false
    this.stopPropagation = false
    const path = e.composedPath()
    this.elementDataList = grabElementData(path, SymDataForSensor, 'wheel', this.elementDataList).data
    const elements = document.elementsFromPoint(e.clientX, e.clientY)
    this.elementDataUnderPointer = grabElementData(elements, SymDataForSensor, 'wheel', this.elementDataUnderPointer).data
    this.modifiers = extractModifierKeys(e)
    this.positionX = e.clientX
    this.positionY = e.clientY
    this.deltaX = e.deltaX
    this.deltaY = e.deltaY
    this.revision++
  }
}
