// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, reaction, Reentrance, TraceLevel, transaction } from 'reactronic'
import { extractPointerButton, PointerButton, PointerSensor } from './PointerSensor'
import { SymAssociatedData } from './HtmlApiExt'
import { EmptyAssociatedDataArray, grabAssociatedData } from '../core/Sensor'
import { extractModifierKeys, KeyboardModifiers } from './KeyboardSensor'
import { AssociatedData } from '../core/AssociatedData'

export enum DragStage {
  Started,
  Dragging,
  Dropped,
  Finished,
}

export class DragSensor extends PointerSensor {
  stage = DragStage.Finished
  originData: any = undefined
  draggingData: any = undefined
  button = PointerButton.None
  startX = Infinity // position relative to browser's viewport
  startY = Infinity // position relative to browser's viewport
  draggingX = Infinity // position relative to browser's viewport
  draggingY = Infinity // position relative to browser's viewport
  dropX = Infinity // position relative to browser's viewport
  dropY = Infinity // position relative to browser's viewport
  trying: boolean = false
  dropped: boolean = false

  static readonly DraggingThreshold = 4

  @transaction
  listen(element: HTMLElement | undefined, enabled: boolean = true): void {
    const existing = this.sourceElement
    if (element !== existing) {
      if (existing) {
        existing.removeEventListener('pointermove', this.onPointerMove, { capture: true })
        existing.removeEventListener('pointerdown', this.onPointerDown, { capture: true })
        existing.removeEventListener('pointerup', this.onPointerUp, { capture: true })
        existing.removeEventListener('lostpointercapture', this.onLostPointerCapture, { capture: true })
        existing.removeEventListener('keydown', this.onKeyDown, { capture: true })
      }
      this.sourceElement = element
      if (element && enabled) {
        element.addEventListener('pointermove', this.onPointerMove, { capture: true })
        element.addEventListener('pointerdown', this.onPointerDown, { capture: true })
        element.addEventListener('pointerup', this.onPointerUp, { capture: true })
        element.addEventListener('lostpointercapture', this.onLostPointerCapture, { capture: true })
        element.addEventListener('keydown', this.onKeyDown, { capture: true })
      }
    }
  }

  protected onPointerMove(e: PointerEvent): void {
    if (this.trying) {
      if (Math.abs(e.clientX - this.startX) > DragSensor.DraggingThreshold ||
        Math.abs(e.clientY - this.startY) > DragSensor.DraggingThreshold) {
        this.startDragging(e)
        this.dragging()
      }
    } else if (this.stage === DragStage.Dragging) {
      this.continueDragging(e)
    }
  }

  protected onPointerDown(e: PointerEvent): void {
    if (e.button === 0 || e.button === 1) {
      this.tryDragging(e)
    }
  }

  protected onPointerUp(e: PointerEvent): void {
    if (this.stage === DragStage.Dragging) {
      this.drop(e)
      this.finishDragging()
    }
    else if (this.stage === DragStage.Started) {
      this.finishDragging()
    }
    this.reset()
  }

  protected onLostPointerCapture(e: PointerEvent): void {
    if (this.stage !== DragStage.Finished) {
      this.cancelDragging()
      this.reset()
    }
  }

  protected onKeyDown(e: KeyboardEvent): void {
    if (e.key === 'Escape' && this.stage !== DragStage.Finished) {
      this.cancelDragging()
      this.reset()
    }
  }

  protected rememberPointerEvent(e: PointerEvent | MouseEvent): void {
    this.event = e
    const path = e.composedPath()
    this.associatedDataPath = grabAssociatedData(path, SymAssociatedData, 'drag', 'dragImportance', this.associatedDataPath)
    const elements = document.elementsFromPoint(e.clientX, e.clientY)
    this.associatedDataUnderPointer = grabAssociatedData(elements, SymAssociatedData, 'drag', 'dragImportance', this.associatedDataUnderPointer)
    this.modifiers = extractModifierKeys(e)
    this.draggingX = e.clientX
    this.draggingY = e.clientY
    this.revision++
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected reset(): void {
    this.event = undefined
    this.associatedDataPath = EmptyAssociatedDataArray
    this.trying = false
    this.originData = undefined
    this.draggingData = undefined
    this.button = PointerButton.None
    this.startX = Infinity
    this.startY = Infinity
    this.dropX = Infinity
    this.dropY = Infinity
    this.modifiers = KeyboardModifiers.None
    this.dropped = false
    this.revision++
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  private tryDragging(e: PointerEvent): void {
    const elements = document.elementsFromPoint(e.clientX, e.clientY)
    const associatedDataUnderPointer = grabAssociatedData(elements, SymAssociatedData, 'drag', 'dragImportance', EmptyAssociatedDataArray)
    const draggingOriginData = associatedDataUnderPointer as AssociatedData | undefined
    if (draggingOriginData) {
      this.event = e
      this.trying = true
      this.button = extractPointerButton(e)
      this.startX = e.clientX
      this.startY = e.clientY
      this.associatedDataUnderPointer = associatedDataUnderPointer
      this.originData = draggingOriginData
      const path = e.composedPath()
      this.associatedDataPath = grabAssociatedData(path, SymAssociatedData, 'drag', 'dragImportance', EmptyAssociatedDataArray)
      this.modifiers = extractModifierKeys(e)
      this.draggingX = e.clientX
      this.draggingY = e.clientY
      this.revision++
    }
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  private startDragging(e: PointerEvent): void {
    this.trying = false
    this.stage = DragStage.Started
    this.rememberPointerEvent(e)
    this.dropped = false
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  private dragging(): void {
    this.stage = DragStage.Dragging
  }

  @transaction @options({ reentrance: Reentrance.CancelPrevious, trace: TraceLevel.Suppress })
  private continueDragging(e: PointerEvent): void {
    this.rememberPointerEvent(e)
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  private drop(e: PointerEvent): void {
    this.rememberPointerEvent(e)
    this.stage = DragStage.Dropped
    this.dropX = e.clientX
    this.dropY = e.clientY
    this.dropped = true
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  private finishDragging(): void {
    this.stage = DragStage.Finished
    this.revision++
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  private cancelDragging(): void {
    this.stage = DragStage.Finished
    this.dropped = false
  }

  @reaction
  protected debug(): void {
    console.log(`stage = ${DragStage[this.stage]}, draggingData: ${this.draggingData}, start = (${this.startX}, ${this.startY}), pos = (${this.draggingX}, ${this.draggingY})`)
  }
}
