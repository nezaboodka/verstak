// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, reaction, TraceLevel, transaction } from 'reactronic'
import { EmptyDataArray, grabElementData } from './DataForSensor'
import { DragStage } from './DragSensor'
import { SymDataForSensor, TypedDataForSensor } from './HtmlApiExt'
import { DragSourceStage, HtmlDragSensorModel } from './HtmlDragSensorModel'
import { HtmlElementSensor } from './HtmlElementSensor'
import { extractModifierKeys, KeyboardModifiers } from './KeyboardSensor'
import { WindowSensor } from './WindowSensor'

export type DragEffectAllowed = 'none' | 'copy' | 'copyLink' | 'copyMove' | 'link' | 'linkMove' | 'move' | 'all' | 'uninitialized'
export type DropEffect = 'none' | 'copy' | 'link' | 'move'

export class HtmlDragSensor extends HtmlElementSensor {
  private eventClientX: number
  private eventClientY: number
  private eventModifiers: KeyboardModifiers
  dragSource: HtmlDragSensorModel | undefined
  dragTarget: HtmlDragSensorModel | undefined
  previousDragTarget: HtmlDragSensorModel | undefined

  constructor(window: WindowSensor) {
    super(window)
    this.eventClientX = Infinity
    this.eventClientY = Infinity
    this.eventModifiers = KeyboardModifiers.None
    this.dragSource = undefined
    this.dragTarget = undefined
    this.previousDragTarget = undefined
  }

  @transaction
  listen(element: HTMLElement | undefined, enabled: boolean = true): void {
    const existing = this.sourceElement
    if (element !== existing) {
      if (existing) {
        existing.removeEventListener('dragstart', this.onDragStart.bind(this), { capture: true })
        existing.removeEventListener('drag', this.onDrag.bind(this), { capture: true })
        existing.removeEventListener('dragenter', this.onDragEnter.bind(this), { capture: false })
        existing.removeEventListener('dragleave', this.onDragLeave.bind(this), { capture: false })
        existing.removeEventListener('dragover', this.onDragOver.bind(this), { capture: true })
        existing.removeEventListener('drop', this.onDrop.bind(this), { capture: true })
        existing.removeEventListener('dragend', this.onDragEnd.bind(this), { capture: true })
      }
      this.sourceElement = element
      if (element && enabled) {
        element.addEventListener('dragstart', this.onDragStart.bind(this), { capture: true })
        element.addEventListener('drag', this.onDrag.bind(this), { capture: true })
        element.addEventListener('dragenter', this.onDragEnter.bind(this), { capture: false })
        element.addEventListener('dragleave', this.onDragLeave.bind(this), { capture: false })
        element.addEventListener('dragover', this.onDragOver.bind(this), { capture: true })
        element.addEventListener('drop', this.onDrop.bind(this), { capture: true })
        element.addEventListener('dragend', this.onDragEnd.bind(this), { capture: true })
      }
    }
  }

  protected onDragStart(e: DragEvent): void {
    this.startDragging(e)
    this.updateEventOnDragStart(e)
  }

  protected onDrag(e: DragEvent): void {
    this.dragging(e)
  }

  protected onDragEnter(e: DragEvent): void {
    this.draggingEnter(e)
  }

  protected onDragLeave(e: DragEvent): void {
    this.draggingLeave(e)
  }

  protected onDragOver(e: DragEvent): void {
    this.draggingOver(e)
    this.updateEventOnDropAllowed(e)
  }

  protected onDrop(e: DragEvent): void {
    this.drop(e)
  }

  protected onDragEnd(e: DragEvent): void {
    this.finishDragging(e)
    this.reset()
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected startDragging(e: DragEvent): void {
    this.preventDefault = false
    this.stopPropagation = false
    const elements = document.elementsFromPoint(e.clientX, e.clientY)
    const { data: elementDataUnderPointer, window } = grabElementData(elements, SymDataForSensor, 'htmlDrag', EmptyDataArray)
    const dataForSensor = elementDataUnderPointer[0] as TypedDataForSensor | undefined
    const dragSource = dataForSensor?.htmlDrag
    if (dragSource) {
      dragSource.sourceStage = DragSourceStage.Started
      dragSource.startX = e.clientX
      dragSource.startY = e.clientY
      dragSource.modifiers = extractModifierKeys(e)
      dragSource.positionX = e.clientX
      dragSource.positionY = e.clientY
      dragSource.dropped = false
      this.revision++
    }
    this.dragSource = dragSource
    this.dragTarget = undefined
    this.previousDragTarget = undefined
    this.window?.setActiveWindow(window)
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected dragging(e: DragEvent): void {
    if (this.dragSource) {
      this.dragSource.sourceStage = DragSourceStage.Dragging
      this.revision++
    }
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected finishDragging(e: DragEvent): void {
    const dragSource = this.dragSource
    if (dragSource) {
      dragSource.sourceStage = DragSourceStage.Finished
      this.revision++
    }
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected draggingEnter(e: DragEvent): void {
    const window = this.updateDragTarget(e)
    this.updateDragTargetData(e)
    if (this.dragTarget) {
      this.dragTarget.draggingOver = true
      this.dragTarget.dropped = false
    }
    this.window?.setActiveWindow(window)
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected draggingLeave(e: DragEvent): void {
    // Nothing to do
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected draggingOver(e: DragEvent): void {
    this.updateDragTarget(e)
    this.updateDragTargetData(e)
    if (this.dragTarget) {
      this.dragTarget.draggingOver = true
      this.dragTarget.dropped = false
    }
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected drop(e: DragEvent): void {
    this.updateDragTarget(e)
    this.updateDragTargetData(e)
    if (this.dragTarget) {
      this.dragTarget.draggingOver = true
      this.dragTarget.dropped = true
    }
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected updateEventOnDragStart(e: DragEvent): void {
    const data = e.dataTransfer
    const dragSource = this.dragSource
    if (data && dragSource) {
      data.dropEffect = dragSource.dropEffect
      data.effectAllowed = dragSource.effectAllowed
    }
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected updateEventOnDropAllowed(e: DragEvent): void {
    if (this.dragTarget?.dropAllowed)
      e.preventDefault()
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected reset(): void {
    this.eventClientX = Infinity
    this.eventClientY = Infinity
    this.eventModifiers = KeyboardModifiers.None
    const dragSource = this.dragSource
    if (dragSource)
      dragSource.reset()
    const dragTarget = this.dragTarget
    if (dragTarget && dragTarget !== dragSource)
      dragTarget.reset()
    const previousDragTarget = this.previousDragTarget
    if (previousDragTarget && previousDragTarget !== dragTarget)
      previousDragTarget.reset()
    this.dragSource = undefined
    this.dragTarget = undefined
    this.previousDragTarget = undefined
    this.elementDataList = EmptyDataArray
  }

  protected updateDragTarget(e: DragEvent): unknown {
    const path = e.composedPath()
    this.elementDataList = grabElementData(path, SymDataForSensor, 'htmlDrag', this.elementDataList).data
    const elements = document.elementsFromPoint(e.clientX, e.clientY)
    const { data: elementDataUnderPointer, window } = grabElementData(elements, SymDataForSensor, 'htmlDrag', EmptyDataArray)
    const dataForSensor = elementDataUnderPointer[0] as TypedDataForSensor | undefined
    const dragTarget = dataForSensor?.htmlDrag
    if (dragTarget !== this.dragTarget) {
      this.previousDragTarget = this.dragTarget
      this.dragTarget = dragTarget
      const dragSource = this.dragSource
      if (dragSource && dragTarget) {
        dragTarget.startX = dragSource.startX
        dragTarget.startY = dragSource.startY
      }
    }
    return window
  }

  protected updateDragTargetData(e: DragEvent): void {
    const dragTarget = this.dragTarget
    const dragSource = this.dragSource
    if (dragSource && dragTarget) {
      dragTarget.immediateModifiers = extractModifierKeys(e)
      dragTarget.immediatePositionX = e.clientX
      dragTarget.immediatePositionY = e.clientY
    }
  }

  @reaction @options({ throttling: 0 })
  protected whenDragging(): void {
    const stage = this.stage
    if (stage === DragStage.Dragging) {
      const clientX = this.eventClientX
      const clientY = this.eventClientY
      this.positionX = clientX
      this.positionY = clientY
      this.modifiers = this.eventModifiers
      this.elementDataList = this.eventElementDataList
      if (clientX !== Infinity && clientY !== Infinity) {
        const elements = document.elementsFromPoint(clientX, clientY)
        this.elementDataUnderPointer = grabElementData(elements, SymDataForSensor, 'htmlDrag', this.elementDataUnderPointer).data
      }
      this.revision++
    }
  }

  // @reaction
  // protected debug(): void {
  //   console.log(`HtmlDragSensor: stage = ${DragStage[this.stage]}, originData = ${this.originData}, draggingData = ${this.draggingData}, start = (${this.startX}, ${this.startY}), pos = (${this.positionX}, ${this.positionY}, revision = ${this.revision})`)
  // }
}
