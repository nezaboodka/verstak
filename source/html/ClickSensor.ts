// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, TraceLevel, transaction } from 'reactronic'
import { EmptyAssociatedDataArray, grabAssociatedData } from '../core/Sensor'
import { SymAssociatedData } from './HtmlApiExt'
import { extractModifierKeys, KeyboardModifiers } from './KeyboardSensor'
import { PointerButton, PointerSensor } from './PointerSensor'

export class ClickSensor extends PointerSensor {
  click = PointerButton.None
  doubleClick = PointerButton.None
  auxClick = PointerButton.None

  @transaction
  listen(element: HTMLElement | undefined, enabled: boolean = true): void {
    const existing = this.sourceElement
    if (element !== existing) {
      if (existing) {
        existing.removeEventListener('click', this.onClick, { capture: true })
        existing.removeEventListener('dblclick', this.onDblClick, { capture: true })
        existing.removeEventListener('auxclick', this.onAuxClick, { capture: true })
      }
      this.sourceElement = element
      if (element && enabled) {
        element.addEventListener('click', this.onClick, { capture: true })
        element.addEventListener('dblclick', this.onDblClick, { capture: true })
        element.addEventListener('auxclick', this.onAuxClick, { capture: true })
      }
    }
  }

  protected onClick(e: MouseEvent): void {
    this.doClick(e)
    this.reset()
  }

  protected onDblClick(e: MouseEvent): void {
    this.doDoubleClick(e)
    this.reset()
  }

  protected onAuxClick(e: MouseEvent): void {
    this.doAuxClick(e)
    this.reset()
  }

  protected rememberPointerEvent(e: MouseEvent): void {
    this.event = e
    const path = e.composedPath()
    this.associatedDataPath = grabAssociatedData(path, SymAssociatedData, 'click', 'clickImportance', this.associatedDataPath)
    const elements = document.elementsFromPoint(e.clientX, e.clientY)
    this.associatedDataUnderPointer = grabAssociatedData(elements, SymAssociatedData, 'click', 'clickImportance', this.associatedDataUnderPointer)
    this.modifiers = extractModifierKeys(e)
    this.positionX = e.clientX
    this.positionY = e.clientY
    this.revision++
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected doClick(e: MouseEvent): void {
    this.rememberPointerEvent(e)
    this.click = PointerButton.Left
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected doDoubleClick(e: MouseEvent): void {
    this.rememberPointerEvent(e)
    this.doubleClick = PointerButton.Left
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected doAuxClick(e: MouseEvent): void {
    this.rememberPointerEvent(e)
    this.auxClick = PointerButton.Right
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected reset(): void {
    this.associatedDataPath = EmptyAssociatedDataArray
    this.internalAssociatedDataUnderPointer = EmptyAssociatedDataArray
    this.event = undefined
    this.positionX = Infinity
    this.positionY = Infinity
    this.modifiers = KeyboardModifiers.None
    this.click = PointerButton.None
    this.doubleClick = PointerButton.None
    this.auxClick = PointerButton.None
    this.revision++
  }
}
