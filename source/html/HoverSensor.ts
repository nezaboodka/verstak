// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { nonreactive, options, Reentrance, TraceLevel, transaction } from 'reactronic'
import { EmptyAssociatedDataArray, grabAssociatedData, HtmlElementSensor } from '../core/Sensor'
import { SymAssociatedData } from './HtmlApiExt'
import { extractModifierKeys, KeyboardModifiers } from './KeyboardSensor'

export class HoverSensor extends HtmlElementSensor {
  event: PointerEvent | MouseEvent | undefined = undefined
  positionX = Infinity // position relative to browser's viewport
  positionY = Infinity // position relative to browser's viewport
  modifiers = KeyboardModifiers.None
  private internalAssociatedDataUnderPointer: unknown[] = EmptyAssociatedDataArray

  get associatedDataUnderPointer(): unknown[] { return nonreactive(() => this.internalAssociatedDataUnderPointer) }
  set associatedDataUnderPointer(value: unknown[]) { this.internalAssociatedDataUnderPointer = value }
  get topAssociatedDataUnderPointer(): unknown {
    return nonreactive(() => this.internalAssociatedDataUnderPointer.length > 0 ? this.internalAssociatedDataUnderPointer[0] : undefined)
  }

  @transaction
  listen(element: HTMLElement | undefined, enabled: boolean = true): void {
    const existing = this.sourceElement
    if (element !== existing) {
      if (existing) {
        existing.removeEventListener('pointerover', this.onPointerOver, { capture: true })
      }
      this.sourceElement = element
      if (element && enabled) {
        element.addEventListener('pointerover', this.onPointerOver, { capture: true })
        element.addEventListener('pointerout', this.onPointerOut, { capture: true })
      }
    }
  }

  protected onPointerOver(e: PointerEvent): void {
    this.rememberPointerEvent(e)
  }

  protected onPointerOut(e: PointerEvent): void {
    this.reset()
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected reset(): void {
    this.event = undefined
    this.associatedDataPath = EmptyAssociatedDataArray
    this.positionX = Infinity
    this.positionY = Infinity
    this.modifiers = KeyboardModifiers.None
    this.revision++
  }

  @transaction @options({ reentrance: Reentrance.CancelPrevious, trace: TraceLevel.Suppress })
  protected rememberPointerEvent(e: PointerEvent | MouseEvent): void {
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
