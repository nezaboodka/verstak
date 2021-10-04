// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, reaction, Reentrance, TraceLevel, Transaction, transaction } from 'reactronic'
import { PointerSensor } from './PointerSensor'
import { SymAssociatedData } from './HtmlApiExt'

export enum DragStage {
  Started,
  Dragging,
  Dropped,
  Finished,
}

export class DragSensor extends PointerSensor {
  dragEvent: DragEvent | undefined = undefined
  dragStartChecking: boolean = false
  stage = DragStage.Finished
  draggingModifiers = KeyboardModifiers.None
  draggingOriginData: any = undefined
  draggingData: any = undefined
  draggingStartX = Infinity
  draggingStartY = Infinity
  draggingPositionX = Infinity
  draggingPositionY = Infinity
  dropPositionX = Infinity
  dropPositionY = Infinity
  dropped: boolean = false

  reset(): void {
    this.dragStartChecking = false
    this.draggingOriginData = undefined
    this.draggingData = undefined
    this.draggingStartX = Infinity
    this.draggingStartY = Infinity
    this.draggingPositionX = Infinity
    this.draggingPositionY = Infinity
    this.dropPositionX = Infinity
    this.dropPositionY = Infinity
    this.dropped = false
  }

  @transaction
  listen(element: HTMLElement | undefined, enabled: boolean = true): void {
    const existing = this.sourceElement
    if (element !== existing) {
      if (existing) {
        existing.removeEventListener('pointermove', this.onPointerMove, { capture: true })
        existing.removeEventListener('pointerdown', this.onPointerDown, { capture: true })
        existing.removeEventListener('pointerup', this.onPointerUp, { capture: true })
        existing.removeEventListener('lostpointercapture', this.onLostPointerCapture, { capture: true })
      }
      this.sourceElement = element
      if (element && enabled) {
        element.addEventListener('pointermove', this.onPointerMove, { capture: true })
        element.addEventListener('pointerdown', this.onPointerDown, { capture: true })
        element.addEventListener('pointerup', this.onPointerUp, { capture: true })
        element.addEventListener('lostpointercapture', this.onLostPointerCapture, { capture: true })
      }
    }
  }

  @transaction @options({ reentrance: Reentrance.CancelPrevious, trace: TraceLevel.Suppress })
  protected onPointerMove(e: PointerEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doPointerMove(
      grabAssociatedData(path, SymAssociatedData, 'pointer', 'pointerImportance', this.pointer.associatedDataPath),
      e.pointerId, e.clientX, e.clientY)

    const d = this.drag
    if (d.dragStartChecking) {
      if (Math.abs(e.clientX - d.draggingStartX) > HtmlSensors.DraggingThreshold ||
        Math.abs(e.clientY - d.draggingStartY) > HtmlSensors.DraggingThreshold) {
        Transaction.runAs({ standalone: true }, () => {
          d.dragStartChecking = false
          d.stage = DragStage.Started
          d.draggingPositionX = e.clientX
          d.draggingPositionY = e.clientY
          d.dropped = false
          d.revision++
        })
        d.stage = DragStage.Dragging
      }
    }
    if (d.stage === DragStage.Dragging) {
      d.associatedDataPath = grabAssociatedData(path, SymAssociatedData, 'drag', 'dragImportance', d.associatedDataPath)
      d.draggingPositionX = e.clientX
      d.draggingPositionY = e.clientY
      d.draggingModifiers = this.keyboard.modifiers
      d.revision++
    }
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected onPointerDown(e: PointerEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doPointerDown(
      grabAssociatedData(path, SymAssociatedData, 'pointer', 'pointerImportance', this.pointer.associatedDataPath),
      grabAssociatedData(path, SymAssociatedData, 'focus', 'focusImportance', this.focus.associatedDataPath),
      e.pointerId, e.buttons, e.clientX, e.clientY)

    if (this.pointer.down === PointerButton.Left) {
      const associatedDataPath = grabAssociatedData(path, SymAssociatedData, 'drag', 'dragImportance', [])
      const draggingOriginData = associatedDataPath[0] as AssociatedData | undefined
      if (draggingOriginData) {
        const d = this.drag
        d.dragStartChecking = true
        d.associatedDataPath = associatedDataPath
        d.draggingOriginData = draggingOriginData
        d.draggingStartX = e.clientX
        d.draggingStartY = e.clientY
        d.draggingModifiers = this.keyboard.modifiers
      }
    }
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected onPointerUp(e: PointerEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doPointerUp(
      grabAssociatedData(path, SymAssociatedData, 'pointer', 'pointerImportance', this.pointer.associatedDataPath),
      grabAssociatedData(path, SymAssociatedData, 'focus', 'focusImportance', this.focus.associatedDataPath),
      e.pointerId, e.buttons, e.clientX, e.clientY)

    const d = this.drag
    if (d.stage === DragStage.Dragging) {
      this.currentEvent = e
      Transaction.runAs({ standalone: true }, () => {
        d.stage = DragStage.Dropped
        d.associatedDataPath = grabAssociatedData(path, SymAssociatedData, 'drag', 'dragImportance', d.associatedDataPath)
        d.dropPositionX = e.clientX
        d.dropPositionY = e.clientY
        d.draggingModifiers = this.keyboard.modifiers
        d.dropped = true
        d.revision++
      })
      Transaction.runAs({ standalone: true }, () => {
        d.stage = DragStage.Finished
        d.revision++
      })
      d.reset()
      d.revision++
    }
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected onLostPointerCapture(e: PointerEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doPointerCancel(
      grabAssociatedData(path, SymAssociatedData, 'pointer', 'pointerImportance', this.pointer.associatedDataPath),
      grabAssociatedData(path, SymAssociatedData, 'focus', 'focusImportance', this.focus.associatedDataPath),
      e.pointerId, e.buttons, e.clientX, e.clientY)

    this.tryCancelDragging(this.drag, path)
    this.tryCancelDragging(this.htmlDrag, path)
  }

  protected tryCancelDragging(drag: DragSensor, path: any[]): void {
    if (drag.stage !== DragStage.Finished) {
      Transaction.runAs({ standalone: true }, () => {
        drag.stage = DragStage.Finished
        drag.associatedDataPath = grabAssociatedData(path, SymAssociatedData, 'drag', 'dragImportance', drag.associatedDataPath)
        const event = this.currentEvent as PointerEvent
        drag.dropPositionX = event.clientX
        drag.dropPositionY = event.clientY
        drag.draggingModifiers = this.keyboard.modifiers
        drag.dropped = false
        drag.revision++
      })
      drag.reset()
      drag.revision++
    }
  }

  @reaction
  protected debug(): void {
    console.log(`stage = ${DragStage[this.stage]}, draggingData: ${this.draggingData}, start = (${this.draggingStartX}, ${this.draggingStartY}), pos = (${this.draggingPositionX}, ${this.draggingPositionY})`)
  }
}
