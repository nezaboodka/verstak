// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { nonreactive } from 'reactronic'
import { EmptyAssociatedDataArray, HtmlElementSensor } from '../core/Sensor'
import { KeyboardModifiers } from './KeyboardSensor'

export enum PointerButton {
  None = 0,
  Left = 1,
  Right = 2,
  Middle = 4,
}

export class PointerSensor extends HtmlElementSensor {
  protected internalAssociatedDataUnderPointer: unknown[] = EmptyAssociatedDataArray
  pointerEvent: PointerEvent | MouseEvent | undefined = undefined
  // captured = false
  // positionX = Infinity // position relative to browser's viewport
  // positionY = Infinity // position relative to browser's viewport
  // previousPositionX = Infinity // position relative to browser's viewport
  // previousPositionY = Infinity // position relative to browser's viewport
  // down = PointerButton.None
  // up = PointerButton.None
  modifiers = KeyboardModifiers.None

  get associatedDataUnderPointer(): unknown[] { return nonreactive(() => this.internalAssociatedDataUnderPointer) }
  set associatedDataUnderPointer(value: unknown[]) { this.internalAssociatedDataUnderPointer = value }
  get topAssociatedDataUnderPointer(): unknown {
    return nonreactive(() => this.internalAssociatedDataUnderPointer.length > 0 ? this.internalAssociatedDataUnderPointer[0] : undefined)
  }

  // @transaction
  // listen(element: HTMLElement | undefined, enabled: boolean = true): void {
  //   const existing = this.sourceElement
  //   if (element !== existing) {
  //     if (existing) {
  //       existing.removeEventListener('pointermove', this.onPointerMove, { capture: true })
  //       existing.removeEventListener('pointerdown', this.onPointerDown, { capture: true })
  //       existing.removeEventListener('pointerup', this.onPointerUp, { capture: true })
  //       existing.removeEventListener('lostpointercapture', this.onLostPointerCapture, { capture: true })
  //     }
  //     this.sourceElement = element
  //     if (element && enabled) {
  //       element.addEventListener('pointermove', this.onPointerMove, { capture: true })
  //       element.addEventListener('pointerdown', this.onPointerDown, { capture: true })
  //       element.addEventListener('pointerup', this.onPointerUp, { capture: true })
  //       element.addEventListener('lostpointercapture', this.onLostPointerCapture, { capture: true })
  //     }
  //   }
  // }

  // @transaction @options({ reentrance: Reentrance.CancelPrevious, trace: TraceLevel.Suppress })
  // protected onPointerMove(e: PointerEvent): void {
  //   this.rememberPointerEvent(e)
  // }

  // @transaction @options({ trace: TraceLevel.Suppress })
  // protected onPointerDown(e: PointerEvent): void {
  //   this.rememberPointerEvent(e)
  //   this.down = extractPointerButton(e)
  // }

  // @transaction @options({ trace: TraceLevel.Suppress })
  // protected onPointerUp(e: PointerEvent): void {
  //   this.rememberPointerEvent(e)
  //   this.up = extractPointerButton(e)
  //   this.down = PointerButton.None
  //   if (this.captured) {
  //     this.sourceElement?.releasePointerCapture(e.pointerId)
  //     this.captured = false
  //   }
  // }

  // @transaction @options({ trace: TraceLevel.Suppress })
  // protected onLostPointerCapture(e: PointerEvent): void {
  //   this.reset()
  // }

  // protected rememberPointerEvent(e: PointerEvent | MouseEvent): void {
  //   this.pointerEvent = e
  //   const path = e.composedPath()
  //   this.associatedDataPath = grabAssociatedData(path, SymAssociatedData, 'pointer', 'pointerImportance', this.associatedDataPath)
  //   const elements = document.elementsFromPoint(e.clientX, e.clientY)
  //   this.associatedDataUnderPointer = grabAssociatedData(elements, SymAssociatedData, 'pointer', 'pointerImportance', this.associatedDataUnderPointer)
  //   this.modifiers = extractModifierKeys(e)
  //   this.previousPositionX = this.positionX
  //   this.previousPositionY = this.positionY
  //   this.positionX = e.clientX
  //   this.positionY = e.clientY
  //   this.revision++
  // }

  // protected reset(): void {
  //   this.internalAssociatedDataUnderPointer = EmptyAssociatedDataArray
  //   this.pointerEvent = undefined
  //   this.captured = false
  //   this.positionX = Infinity
  //   this.positionY = Infinity
  //   this.previousPositionX = Infinity
  //   this.previousPositionY = Infinity
  //   this.down = PointerButton.None
  //   this.up = PointerButton.None
  //   this.modifiers = KeyboardModifiers.None
  //   this.revision++
  // }
}

export function extractPointerButton(e: MouseEvent): PointerButton {
  switch (e.button) {
    case 0:
      return PointerButton.Left
    case 1:
      return PointerButton.Right
    case 2:
      return PointerButton.Middle
    default:
      return PointerButton.None
  }
}
