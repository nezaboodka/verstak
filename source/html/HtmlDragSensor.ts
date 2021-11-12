// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, TraceLevel, transaction } from 'reactronic'
import { EmptyDataArray, grabElementData } from './DataForSensor'
import { SymDataForSensor, TypedDataForSensor } from './HtmlApiExt'
import { HtmlDragSensorModel } from './HtmlDragSensorModel'
import { HtmlElementSensor } from './HtmlElementSensor'
import { extractModifierKeys, KeyboardModifiers } from './KeyboardSensor'
import { WindowSensor } from './WindowSensor'

export class HtmlDragSensor extends HtmlElementSensor {
  dragSource: HtmlDragSensorModel | undefined
  dragTarget: HtmlDragSensorModel | undefined
  previousDragTarget: HtmlDragSensorModel | undefined

  constructor(window: WindowSensor) {
    super(window)
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
      dragSource.started = true
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
    const dragSource = this.dragSource
    if (dragSource) {
      dragSource.started = true
      this.revision++
    }
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected finishDragging(e: DragEvent): void {
    const dragSource = this.dragSource
    if (dragSource) {
      dragSource.finished = true
      this.revision++
    }
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected draggingEnter(e: DragEvent): void {
    const window = this.updateDragTarget(e)
    if (this.dragTarget) {
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
    if (this.dragTarget) {
      this.dragTarget.dropped = false
    }
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected drop(e: DragEvent): void {
    this.updateDragTarget(e)
    if (this.dragTarget) {
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
    const dragSource = this.dragSource
    const dragTarget = dataForSensor?.htmlDrag
    if (dragTarget !== this.dragTarget) {
      this.previousDragTarget = this.dragTarget
      this.dragTarget = dragTarget
      if (dragSource && dragTarget) {
        dragTarget.draggingOver = true
        let draggingDataTypes = dragTarget.draggingDataTypes
        const types = e.dataTransfer?.types
        if (types) {
          if (!areEqualArrays(types, draggingDataTypes)) {
            draggingDataTypes = new Array<string>()
            for (let i = 0; i < types.length; i++)
              draggingDataTypes.push(types[i])
            dragTarget.draggingDataTypes = draggingDataTypes
          }
        }
        if (dragTarget !== dragSource) {
          dragTarget.startX = dragSource.startX
          dragTarget.startY = dragSource.startY
        }
      }
    }
    if (dragSource && dragTarget) {
      dragTarget.immediateModifiers = extractModifierKeys(e)
      dragTarget.immediatePositionX = e.clientX
      dragTarget.immediatePositionY = e.clientY
    }
    const previousDragTarget = this.previousDragTarget
    if (previousDragTarget && previousDragTarget !== dragTarget) {
      previousDragTarget.draggingOver = false
      previousDragTarget.draggingDataTypes = []
      previousDragTarget.draggingDataType = undefined
      previousDragTarget.draggingData = undefined
      previousDragTarget.dropped = false
      if (previousDragTarget !== dragSource) {
        previousDragTarget.startX = Infinity
        previousDragTarget.startY = Infinity
      }
    }
    return window
  }

  // @reaction
  // protected debug(): void {
  //   console.log(`HtmlDragSensor: stage = ${DragStage[this.stage]}, originData = ${this.originData}, draggingData = ${this.draggingData}, start = (${this.startX}, ${this.startY}), pos = (${this.positionX}, ${this.positionY}, revision = ${this.revision})`)
  // }
}

function areEqualArrays(array1: readonly string[], array2: string[]): boolean {
  let result = true
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      result = false
      break
    }
  }
  return result
}
