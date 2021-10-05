// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, reaction, Reactronic, Reentrance, TraceLevel, Transaction, transaction } from 'reactronic'
import { extractPointerButton, PointerButton, PointerSensor } from './PointerSensor'
import { SymAssociatedData } from './HtmlApiExt'
import { EmptyAssociatedDataArray, grabAssociatedData } from '../core/Sensor'
import { extractModifierKeys } from './KeyboardSensor'
import { AssociatedData } from '../core/AssociatedData'

export enum DragStage {
  Started,
  Dragging,
  Dropped,
  Finished,
}

export class DragSensor extends PointerSensor {
  dragEvent: DragEvent | undefined = undefined
  startChecking: boolean = false
  stage = DragStage.Finished
  originData: any = undefined
  draggingData: any = undefined
  startX = Infinity
  startY = Infinity
  dropX = Infinity
  dropY = Infinity
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

  @transaction @options({ trace: TraceLevel.Suppress })
  protected onPointerMove(e: PointerEvent): void {
    if (this.startChecking) {
      if (Math.abs(e.clientX - this.startX) > DragSensor.DraggingThreshold ||
        Math.abs(e.clientY - this.startY) > DragSensor.DraggingThreshold) {
        Transaction.runAs({ standalone: true, trace: TraceLevel.Suppress }, () => {
          this.startChecking = false
          this.stage = DragStage.Started
          this.rememberPointerEvent(e)
          this.dropped = false
        })
        Transaction.runAs({ standalone: true, trace: TraceLevel.Suppress }, () => {
          this.stage = DragStage.Dragging
        })
      }
    } else if (this.stage === DragStage.Dragging) {
      Transaction.runAs({ standalone: true, trace: TraceLevel.Suppress }, () => {
        Reactronic.configureCurrentMethod({ reentrance: Reentrance.CancelPrevious })
        this.rememberPointerEvent(e)
      })
    }
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected onPointerDown(e: PointerEvent): void {
    if (extractPointerButton(e) === PointerButton.Left) {
      const elements = document.elementsFromPoint(e.clientX, e.clientY)
      const associatedDataUnderPointer = grabAssociatedData(elements, SymAssociatedData, 'drag', 'dragImportance', EmptyAssociatedDataArray)
      const draggingOriginData = associatedDataUnderPointer as AssociatedData | undefined
      if (draggingOriginData) {
        this.pointerEvent = e
        this.startChecking = true
        this.startX = e.clientX
        this.startY = e.clientY
        this.associatedDataUnderPointer = associatedDataUnderPointer
        this.originData = draggingOriginData
        const path = e.composedPath()
        this.associatedDataPath = grabAssociatedData(path, SymAssociatedData, 'drag', 'dragImportance', EmptyAssociatedDataArray)
        this.modifiers = extractModifierKeys(e)
        this.previousPositionX = this.positionX
        this.previousPositionY = this.positionY
        this.positionX = e.clientX
        this.positionY = e.clientY
        this.revision++
      }
    }
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected onPointerUp(e: PointerEvent): void {
    if (this.stage === DragStage.Dragging) {
      Transaction.runAs({ standalone: true }, () => {
        this.rememberPointerEvent(e)
        this.stage = DragStage.Dropped
        this.dropX = e.clientX
        this.dropY = e.clientY
        this.dropped = true
      })
      Transaction.runAs({ standalone: true }, () => {
        this.stage = DragStage.Finished
        this.revision++
      })
      Transaction.runAs({ standalone: true }, () => {
        this.reset()
      })
    }
    else {
      this.reset()
    }
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected onLostPointerCapture(e: PointerEvent): void {
    if (this.stage !== DragStage.Finished) {
      Transaction.runAs({ standalone: true }, () => {
        this.rememberPointerEvent(e)
        this.stage = DragStage.Finished
        this.dropped = false
      })
      Transaction.runAs({ standalone: true }, () => {
        this.reset()
      })
    }
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected onKeyDown(e: KeyboardEvent): void {
    if (this.stage !== DragStage.Finished && e.key === 'Escape') {
      Transaction.runAs({ standalone: true }, () => {
        this.stage = DragStage.Finished
        this.dropped = false
      })
      Transaction.runAs({ standalone: true }, () => {
        this.reset()
      })
    }
  }

  protected rememberPointerEvent(e: PointerEvent | MouseEvent): void {
    this.pointerEvent = e
    const path = e.composedPath()
    this.associatedDataPath = grabAssociatedData(path, SymAssociatedData, 'drag', 'dragImportance', this.associatedDataPath)
    const elements = document.elementsFromPoint(e.clientX, e.clientY)
    this.associatedDataUnderPointer = grabAssociatedData(elements, SymAssociatedData, 'drag', 'dragImportance', this.associatedDataUnderPointer)
    this.modifiers = extractModifierKeys(e)
    this.previousPositionX = this.positionX
    this.previousPositionY = this.positionY
    this.positionX = e.clientX
    this.positionY = e.clientY
    this.revision++
  }

  protected reset(): void {
    super.reset()
    this.startChecking = false
    this.originData = undefined
    this.draggingData = undefined
    this.startX = Infinity
    this.startY = Infinity
    this.dropX = Infinity
    this.dropY = Infinity
    this.dropped = false
  }

  @reaction
  protected debug(): void {
    console.log(`stage = ${DragStage[this.stage]}, draggingData: ${this.draggingData}, start = (${this.startX}, ${this.startY}), pos = (${this.positionX}, ${this.positionY})`)
  }
}
