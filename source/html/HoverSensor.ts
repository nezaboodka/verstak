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

export class HoverSensor extends PointerSensor {

  @transaction
  listen(element: HTMLElement | undefined, enabled: boolean = true): void {
    const existing = this.sourceElement
    if (element !== existing) {
      if (existing) {
        existing.removeEventListener('pointerover', this.onPointerOver, { capture: true })
        existing.removeEventListener('pointerout', this.onPointerOut, { capture: true })
      }
      this.sourceElement = element
      if (element && enabled) {
        element.addEventListener('pointerover', this.onPointerOver, { capture: true })
        element.addEventListener('pointerout', this.onPointerOut, { capture: true })
      }
    }
  }

  @transaction
  reset(): void {
    this.doReset()
  }

  protected onPointerOver(e: PointerEvent): void {
    this.rememberPointerEvent(e)
  }

  protected onPointerOut(e: PointerEvent): void {
    this.reset()
  }

  protected doReset(): void {
    this.event = undefined
    this.associatedDataPath = EmptyAssociatedDataArray
    this.positionX = Infinity
    this.positionY = Infinity
    this.modifiers = KeyboardModifiers.None
  }

  @transaction @options({ reentrance: Reentrance.CancelPrevious, trace: TraceLevel.Suppress })
  protected rememberPointerEvent(e: PointerEvent): void {
    this.event = e
    const path = e.composedPath()
    this.associatedDataPath = grabAssociatedData(path, SymAssociatedData, 'hover', 'hoverImportance', this.associatedDataPath)
    const elements = document.elementsFromPoint(e.clientX, e.clientY)
    this.associatedDataUnderPointer = grabAssociatedData(elements, SymAssociatedData, 'hover', 'hoverImportance', this.associatedDataUnderPointer)
    this.modifiers = extractModifierKeys(e)
    this.positionX = e.clientX
    this.positionY = e.clientY
    this.revision++
  }
}
