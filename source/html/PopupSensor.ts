// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, Reentrance, TraceLevel, transaction } from 'reactronic'
import { extractPointerButton, PointerButton, PointerSensor } from './PointerSensor'
import { SymAssociatedData } from './HtmlApiExt'
import { EmptyAssociatedDataArray, grabAssociatedData } from '../core/Sensor'
import { extractModifierKeys, KeyboardModifiers } from './KeyboardSensor'
import { AssociatedData } from '../core/AssociatedData'

export enum PopupStage {
  Invoked,
  Selecting,
  Selected,
  Finished,
}

export class PopupSensor extends PointerSensor {
  stage = PopupStage.Finished
  originData: any = undefined
  selectedData: any = undefined
  button = PointerButton.None
  selectedX = Infinity // position relative to browser's viewport
  selectedY = Infinity // position relative to browser's viewport
  selected: boolean = false

  @transaction
  listen(element: HTMLElement | undefined, enabled: boolean = true): void {
    const existing = this.sourceElement
    if (element !== existing) {
      if (existing) {
        existing.removeEventListener('pointermove', this.onPointerMove.bind(this), { capture: true })
        existing.removeEventListener('pointerdown', this.onPointerDown.bind(this), { capture: true })
        existing.removeEventListener('pointerup', this.onPointerUp.bind(this), { capture: true })
        existing.removeEventListener('lostpointercapture', this.onLostPointerCapture.bind(this), { capture: true })
        existing.removeEventListener('keydown', this.onKeyDown.bind(this), { capture: true })
      }
      this.sourceElement = element
      if (element && enabled) {
        element.addEventListener('pointermove', this.onPointerMove.bind(this), { capture: true })
        element.addEventListener('pointerdown', this.onPointerDown.bind(this), { capture: true })
        element.addEventListener('pointerup', this.onPointerUp.bind(this), { capture: true })
        element.addEventListener('lostpointercapture', this.onLostPointerCapture.bind(this), { capture: true })
        element.addEventListener('keydown', this.onKeyDown.bind(this), { capture: true })
      }
    }
  }

  @transaction
  reset(): void {
    this.doReset()
  }

  protected onPointerMove(e: PointerEvent): void {
    if (this.stage === PopupStage.Invoked) {
      this.startSelecting(e)
      this.selecting()
    } else if (this.stage === PopupStage.Selecting) {
      this.continueSelecting(e)
    }
  }

  protected onPointerDown(e: PointerEvent): void {
    if (this.stage === PopupStage.Finished && (e.button === 0 || e.button === 1)) {
      this.tryDragging(e)
    }
  }

  protected onPointerUp(e: PointerEvent): void {
    if (this.stage === PopupStage.Selecting) {
      this.select(e)
      this.finish()
    }
    else if (this.stage === PopupStage.Invoked) {
      this.finish()
    }
    this.reset()
  }

  protected onLostPointerCapture(e: PointerEvent): void {
    if (this.stage !== PopupStage.Finished) {
      this.cancel()
      this.reset()
    }
  }

  protected onKeyDown(e: KeyboardEvent): void {
    if (e.key === 'Escape' && this.stage !== PopupStage.Finished) {
      this.cancel()
      this.reset()
    }
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected tryDragging(e: PointerEvent): void {
    const elements = document.elementsFromPoint(e.clientX, e.clientY)
    const associatedDataUnderPointer = grabAssociatedData(elements, SymAssociatedData, 'drag', 'dragImportance', EmptyAssociatedDataArray)
    const draggingOriginData = associatedDataUnderPointer as AssociatedData | undefined
    if (draggingOriginData) {
      this.event = e
      this.button = extractPointerButton(e)
      this.associatedDataUnderPointer = associatedDataUnderPointer
      this.originData = draggingOriginData
      const path = e.composedPath()
      this.associatedDataPath = grabAssociatedData(path, SymAssociatedData, 'drag', 'dragImportance', EmptyAssociatedDataArray)
      this.modifiers = extractModifierKeys(e)
      this.positionX = e.clientX
      this.positionY = e.clientY
      this.revision++
    }
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected startSelecting(e: PointerEvent): void {
    this.stage = PopupStage.Invoked
    this.rememberPointerEvent(e)
    this.selected = false
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected selecting(): void {
    this.stage = PopupStage.Selecting
  }

  @transaction @options({ reentrance: Reentrance.CancelPrevious, trace: TraceLevel.Suppress })
  protected continueSelecting(e: PointerEvent): void {
    this.rememberPointerEvent(e)
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected select(e: PointerEvent): void {
    this.rememberPointerEvent(e)
    this.stage = PopupStage.Selected
    this.selectedX = e.clientX
    this.selectedY = e.clientY
    this.selected = true
    this.revision++
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected finish(): void {
    this.stage = PopupStage.Finished
    this.revision++
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected cancel(): void {
    this.stage = PopupStage.Finished
    this.selected = false
  }

  protected doReset(): void {
    this.event = undefined
    this.associatedDataPath = EmptyAssociatedDataArray
    this.originData = undefined
    this.selectedData = undefined
    this.button = PointerButton.None
    this.positionX = Infinity
    this.positionY = Infinity
    this.selectedX = Infinity
    this.selectedY = Infinity
    this.modifiers = KeyboardModifiers.None
    this.selected = false
  }

  protected rememberPointerEvent(e: PointerEvent): void {
    this.event = e
    const path = e.composedPath()
    this.associatedDataPath = grabAssociatedData(path, SymAssociatedData, 'popup', 'popupImportance', this.associatedDataPath)
    const elements = document.elementsFromPoint(e.clientX, e.clientY)
    this.associatedDataUnderPointer = grabAssociatedData(elements, SymAssociatedData, 'popup', 'popupImportance', this.associatedDataUnderPointer)
    this.modifiers = extractModifierKeys(e)
    this.positionX = e.clientX
    this.positionY = e.clientY
    this.revision++
  }

  // @reaction
  // protected debug(): void {
  //   console.log(`stage = ${DragStage[this.stage]}, draggingData: ${this.draggingData}, start = (${this.startX}, ${this.startY}), pos = (${this.positionX}, ${this.positionY})`)
  // }
}
