// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, Reentrance, TraceLevel, transaction } from 'reactronic'
import { extractPointerButton, PointerButton, PointerSensor } from './PointerSensor'
import { SymDataForSensor } from './HtmlApiExt'
import { DataForSensor, EmptyDataArray, grabElementData } from './Sensor'
import { extractModifierKeys, KeyboardModifiers } from './KeyboardSensor'
import { WindowSensor } from './WindowSensor'

export enum DragStage {
  Started,
  Dragging,
  Dropped,
  Finished,
}

export class DragSensor extends PointerSensor {
  stage: DragStage
  originData: any
  draggingData: any
  button: PointerButton
  startX: number // position relative to browser's viewport
  startY: number // position relative to browser's viewport
  dropX: number // position relative to browser's viewport
  dropY: number // position relative to browser's viewport
  trying: boolean
  dropped: boolean

  static readonly DraggingThreshold = 4

  constructor(window: WindowSensor) {
    super(window)
    this.stage = DragStage.Finished
    this.originData = undefined
    this.draggingData = undefined
    this.button = PointerButton.None
    this.startX = Infinity // position relative to browser's viewport
    this.startY = Infinity // position relative to browser's viewport
    this.dropX = Infinity // position relative to browser's viewport
    this.dropY = Infinity // position relative to browser's viewport
    this.trying = false
    this.dropped = false
  }

  @transaction
  listen(element: HTMLElement | undefined, enabled: boolean = true): void {
    const existing = this.sourceElement
    if (element !== existing) {
      if (existing) {
        existing.removeEventListener('pointerdown', this.onPointerDown.bind(this), { capture: true })
        existing.removeEventListener('pointermove', this.onPointerMove.bind(this), { capture: true })
        existing.removeEventListener('pointerup', this.onPointerUp.bind(this), { capture: true })
        existing.removeEventListener('lostpointercapture', this.onLostPointerCapture.bind(this), { capture: true })
        existing.removeEventListener('keydown', this.onKeyDown.bind(this), { capture: true })
      }
      this.sourceElement = element
      if (element && enabled) {
        element.addEventListener('pointerdown', this.onPointerDown.bind(this), { capture: true })
        element.addEventListener('pointermove', this.onPointerMove.bind(this), { capture: true })
        element.addEventListener('pointerup', this.onPointerUp.bind(this), { capture: true })
        element.addEventListener('lostpointercapture', this.onLostPointerCapture.bind(this), { capture: true })
        element.addEventListener('keydown', this.onKeyDown.bind(this), { capture: true })
      }
    }
  }

  protected onPointerDown(e: PointerEvent): void {
    if (this.stage === DragStage.Finished && (e.button === 0 || e.button === 1)) {
      this.tryDragging(e)
    }
    this.setPreventDefaultAndStopPropagation(e)
  }

  protected onPointerMove(e: PointerEvent): void {
    if (this.trying) {
      if (Math.abs(e.clientX - this.startX) > DragSensor.DraggingThreshold ||
        Math.abs(e.clientY - this.startY) > DragSensor.DraggingThreshold) {
        this.startDragging(e)
      }
    } else if (this.stage === DragStage.Dragging) {
      this.dragging(e)
    }
    this.setPreventDefaultAndStopPropagation(e)
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
    this.setPreventDefaultAndStopPropagation(e)
  }

  protected onLostPointerCapture(e: PointerEvent): void {
    if (this.stage !== DragStage.Finished) {
      this.cancelDragging()
      this.reset()
    }
    this.setPreventDefaultAndStopPropagation(e)
  }

  protected onKeyDown(e: KeyboardEvent): void {
    if (e.key === 'Escape' && this.stage !== DragStage.Finished) {
      this.cancelDragging()
      // this.reset()
    }
    this.setPreventDefaultAndStopPropagation(e)
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected tryDragging(e: PointerEvent): void {
    this.preventDefault = false
    this.stopPropagation = false
    const elements = document.elementsFromPoint(e.clientX, e.clientY)
    const { data: elementDataUnderPointer, window } = grabElementData(elements, SymDataForSensor, 'drag', EmptyDataArray)
    const originData = elementDataUnderPointer[0] as DataForSensor | undefined
    if (originData) {
      this.originData = originData
      this.elementDataUnderPointer = elementDataUnderPointer
      this.trying = true
      this.button = extractPointerButton(e)
      this.startX = e.clientX
      this.startY = e.clientY
      const path = e.composedPath()
      this.elementDataList = grabElementData(path, SymDataForSensor, 'drag', EmptyDataArray).data
      this.modifiers = extractModifierKeys(e)
      this.positionX = e.clientX
      this.positionY = e.clientY
      this.revision++
    }
    this.window?.setActiveWindow(window)
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected startDragging(e: PointerEvent): void {
    this.updateSensorData(e)
    this.stage = DragStage.Started
    this.trying = false
    this.dropped = false
  }

  @transaction @options({ reentrance: Reentrance.CancelPrevious, trace: TraceLevel.Suppress })
  protected dragging(e: PointerEvent): void {
    this.updateSensorData(e)
    this.stage = DragStage.Dragging
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected drop(e: PointerEvent): void {
    this.updateSensorData(e)
    this.stage = DragStage.Dropped
    this.dropX = e.clientX
    this.dropY = e.clientY
    this.dropped = true
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected finishDragging(): void {
    this.stage = DragStage.Finished
    this.trying = false
    this.revision++
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected cancelDragging(): void {
    this.stage = DragStage.Finished
    this.trying = false
    this.dropped = false
    this.revision++
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected reset(): void {
    this.elementDataList = EmptyDataArray
    this.trying = false
    this.originData = undefined
    this.draggingData = undefined
    this.button = PointerButton.None
    this.startX = Infinity
    this.startY = Infinity
    this.positionX = Infinity
    this.positionY = Infinity
    this.dropX = Infinity
    this.dropY = Infinity
    this.modifiers = KeyboardModifiers.None
    this.dropped = false
  }

  protected updateSensorData(e: PointerEvent): void {
    this.preventDefault = false
    this.stopPropagation = false
    const elements = document.elementsFromPoint(e.clientX, e.clientY)
    this.elementDataUnderPointer = grabElementData(elements, SymDataForSensor, 'drag', this.elementDataUnderPointer).data
    const path = e.composedPath()
    this.elementDataList = grabElementData(path, SymDataForSensor, 'drag', this.elementDataList).data
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
