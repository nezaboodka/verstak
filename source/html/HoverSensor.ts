// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, TraceLevel, transaction } from 'reactronic'
import { EmptyDataArray, grabElementData } from '../core/Sensor'
import { SymSensorData } from './HtmlApiExt'
import { extractModifierKeys, KeyboardModifiers } from './KeyboardSensor'
import { PointerSensor } from './PointerSensor'

export class HoverSensor extends PointerSensor {

  @transaction
  listen(element: HTMLElement | undefined, enabled: boolean = true): void {
    const existing = this.sourceElement
    if (element !== existing) {
      if (existing) {
        existing.removeEventListener('pointerover', this.onPointerOver.bind(this), { capture: true })
        existing.removeEventListener('pointerout', this.onPointerOut.bind(this), { capture: true })
      }
      this.sourceElement = element
      if (element && enabled) {
        element.addEventListener('pointerover', this.onPointerOver.bind(this), { capture: true })
        element.addEventListener('pointerout', this.onPointerOut.bind(this), { capture: true })
      }
    }
  }

  protected onPointerOver(e: PointerEvent): void {
    this.doPointerOver(e)
  }

  protected onPointerOut(e: PointerEvent): void {
    this.doPointerOut()
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected doPointerOver(e: PointerEvent): void {
    this.preventDefault = false
    this.stopPropagation = false
    const elements = document.elementsFromPoint(e.clientX, e.clientY)
    this.elementDataUnderPointer = grabElementData(elements, SymSensorData, 'hover', this.elementDataUnderPointer).data
    const path = e.composedPath()
    this.elementDataList = grabElementData(path, SymSensorData, 'hover', this.elementDataList).data
    this.modifiers = extractModifierKeys(e)
    this.positionX = e.clientX
    this.positionY = e.clientY
    this.revision++
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected doPointerOut(): void {
    this.preventDefault = false
    this.stopPropagation = false
    this.elementDataList = EmptyDataArray
    this.positionX = Infinity
    this.positionY = Infinity
    this.modifiers = KeyboardModifiers.None
  }
}
