// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, reaction, TraceLevel, transaction } from 'reactronic'
import { DataForSensor, EmptyDataArray, grabElementData } from '../core/Sensor'
import { DragStage } from './DragSensor'
import { SymDataForSensor } from './HtmlApiExt'
import { HtmlElementSensor } from './HtmlElementSensor'
import { extractModifierKeys, KeyboardModifiers } from './KeyboardSensor'
import { WindowSensor } from './WindowSensor'

export type DragEffectAllowed = 'none' | 'copy' | 'copyLink' | 'copyMove' | 'link' | 'linkMove' | 'move' | 'all' | 'uninitialized'
export type DropEffect = 'none' | 'copy' | 'link' | 'move'

export class HtmlDragSensor extends HtmlElementSensor {
  private eventClientX: number
  private eventClientY: number
  private eventModifiers: KeyboardModifiers
  private eventElementDataList: unknown[]
  stage: DragStage
  originData: any
  draggingData: any
  dropEffect: DropEffect
  effectAllowed: DragEffectAllowed
  dropAllowed: boolean
  modifiers: KeyboardModifiers
  startX: number // position relative to browser's viewport
  startY: number // position relative to browser's viewport
  positionX: number // position relative to browser's viewport
  positionY: number // position relative to browser's viewport
  dropX: number // position relative to browser's viewport
  dropY: number // position relative to browser's viewport
  dropped: boolean
  elementDataUnderPointer: unknown[]

  constructor(window: WindowSensor) {
    super(window)
    this.eventClientX = Infinity
    this.eventClientY = Infinity
    this.eventModifiers = KeyboardModifiers.None
    this.eventElementDataList = EmptyDataArray
    this.stage = DragStage.Finished
    this.originData = undefined
    this.draggingData = undefined
    this.dropEffect = 'none'
    this.effectAllowed = 'uninitialized'
    this.dropAllowed = false
    this.modifiers = KeyboardModifiers.None
    this.startX = Infinity
    this.startY = Infinity
    this.positionX = Infinity
    this.positionY = Infinity
    this.dropX = Infinity
    this.dropY = Infinity
    this.dropped = false
    this.elementDataUnderPointer = EmptyDataArray
  }

  get topElementDataUnderPointer(): unknown {
    return this.elementDataUnderPointer.length > 0 ? this.elementDataUnderPointer[0] : undefined
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
    console.log(`onDragStart: clientX = ${e.clientX}, target = ${(e.target as HTMLElement).id}, left = ${(e.target as HTMLElement).offsetLeft}`)
    this.startDragging(e)
    this.updateEventOnDragStart(e)
  }

  protected onDrag(e: DragEvent): void {
    console.log(`onDrag: clientX = ${e.clientX}, target = ${(e.target as HTMLElement).id}, left = ${(e.target as HTMLElement).offsetLeft}`)
    this.dragging(e)
    this.setPreventDefaultOnDropAllowed(e)
  }

  protected onDragEnter(e: DragEvent): void {
    console.log(`onDragEnter: clientX = ${e.clientX}, target = ${(e.target as HTMLElement).id}, left = ${(e.target as HTMLElement).offsetLeft}`)
    this.draggingEnter(e)
  }

  protected onDragLeave(e: DragEvent): void {
    console.log(`onDragLeave: clientX = ${e.clientX}, target = ${(e.target as HTMLElement).id}, left = ${(e.target as HTMLElement).offsetLeft}`)
    this.draggingLeave(e)
  }

  protected onDragOver(e: DragEvent): void {
    console.log(`onDragOver: clientX = ${e.clientX}, target = ${(e.target as HTMLElement).id}, left = ${(e.target as HTMLElement).offsetLeft}`)
    this.draggingOver(e)
    this.setPreventDefaultOnDropAllowed(e)
  }

  protected onDrop(e: DragEvent): void {
    console.log(`onDrop: clientX = ${e.clientX}, target = ${(e.target as HTMLElement).id}, left = ${(e.target as HTMLElement).offsetLeft}`)
    this.drop(e)
  }

  protected onDragEnd(e: DragEvent): void {
    this.finishDragging(e)
    // this.reset()
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected startDragging(e: DragEvent): void {
    this.preventDefault = false
    this.stopPropagation = false
    const elements = document.elementsFromPoint(e.clientX, e.clientY)
    const { data: elementDataUnderPointer, window } = grabElementData(elements, SymDataForSensor, 'htmlDrag', EmptyDataArray)
    const originData = elementDataUnderPointer[0] as DataForSensor | undefined
    if (originData) {
      this.stage = DragStage.Started
      this.originData = originData
      this.elementDataUnderPointer = elementDataUnderPointer
      this.startX = e.clientX
      this.startY = e.clientY
      const path = e.composedPath()
      this.elementDataList = grabElementData(path, SymDataForSensor, 'htmlDrag', EmptyDataArray).data
      this.modifiers = extractModifierKeys(e)
      this.positionX = e.clientX
      this.positionY = e.clientY
      this.dropped = false
      this.revision++
    }
    this.window?.setActiveWindow(window)
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected dragging(e: DragEvent): void {
    this.stage = DragStage.Dragging
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected draggingEnter(e: DragEvent): void {
    this.stage = DragStage.Dragging
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected draggingLeave(e: DragEvent): void {
    // Nothing to do
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected draggingOver(e: DragEvent): void {
    this.preventDefault = false
    this.stopPropagation = false
    const path = e.composedPath()
    this.eventElementDataList = grabElementData(path, SymDataForSensor, 'htmlDrag', this.elementDataList).data
    this.eventModifiers = extractModifierKeys(e)
    this.eventClientX = e.clientX
    this.eventClientY = e.clientY
    this.stage = DragStage.Dragging
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected drop(e: DragEvent): void {
    this.updateSensorData(e)
    this.stage = DragStage.Dropped
    this.dropX = e.clientX
    this.dropY = e.clientY
    this.dropped = true
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected finishDragging(e: DragEvent): void {
    this.updateSensorData(e)
    this.stage = DragStage.Finished
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected updateEventOnDragStart(e: DragEvent): void {
    const d = e.dataTransfer
    if (d) {
      d.dropEffect = this.dropEffect
      d.effectAllowed = this.effectAllowed
    }
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected setPreventDefaultOnDropAllowed(e: DragEvent): void {
    if (this.dropAllowed)
      e.preventDefault()
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected reset(): void {
    this.dropEffect = 'none'
    this.effectAllowed = 'uninitialized'
    this.dropAllowed = false
    this.stage = DragStage.Finished
    this.originData = undefined
    this.draggingData = undefined
    this.modifiers = KeyboardModifiers.None
    this.startX = Infinity
    this.startY = Infinity
    this.positionX = Infinity
    this.positionY = Infinity
    this.dropX = Infinity
    this.dropY = Infinity
    this.dropped = false
    this.elementDataUnderPointer = EmptyDataArray
    this.elementDataList = EmptyDataArray
  }

  protected updateSensorData(e: DragEvent): void {
    this.preventDefault = false
    this.stopPropagation = false
    const elements = document.elementsFromPoint(e.clientX, e.clientY)
    this.elementDataUnderPointer = grabElementData(elements, SymDataForSensor, 'htmlDrag', this.elementDataUnderPointer).data
    const path = e.composedPath()
    this.elementDataList = grabElementData(path, SymDataForSensor, 'htmlDrag', this.elementDataList).data
    this.modifiers = extractModifierKeys(e)
    this.positionX = e.clientX
    this.positionY = e.clientY
    this.revision++
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
