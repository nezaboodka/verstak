// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, TraceLevel, transaction } from 'reactronic'
import { AssociatedData } from '../core/AssociatedData'
import { EmptyAssociatedDataArray, grabAssociatedData } from '../core/Sensor'
import { DragStage } from './DragSensor'
import { SymAssociatedData } from './HtmlApiExt'
import { HtmlElementSensor } from './HtmlElementSensor'
import { extractModifierKeys, KeyboardModifiers } from './KeyboardSensor'
import { WindowSensor } from './WindowSensor'

export type DragEffectAllowed = 'none' | 'copy' | 'copyLink' | 'copyMove' | 'link' | 'linkMove' | 'move' | 'all' | 'uninitialized'
export type DropEffect = 'none' | 'copy' | 'link' | 'move'

export class HtmlDragSensor extends HtmlElementSensor {
  stage: DragStage
  originData: any
  draggingData: any
  dropEffect: DropEffect
  effectAllowed: DragEffectAllowed
  dropAllowed: boolean
  modifiers = KeyboardModifiers.None
  startX: number // position relative to browser's viewport
  startY: number // position relative to browser's viewport
  positionX: number // position relative to browser's viewport
  positionY: number // position relative to browser's viewport
  dropX: number // position relative to browser's viewport
  dropY: number // position relative to browser's viewport
  dropped: boolean
  associatedDataUnderPointer: unknown[]

  constructor(window: WindowSensor) {
    super(window)
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
    this.associatedDataUnderPointer = EmptyAssociatedDataArray
  }

  get topAssociatedDataUnderPointer(): unknown {
    return this.associatedDataUnderPointer.length > 0 ? this.associatedDataUnderPointer[0] : undefined
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

  @transaction
  reset(): void {
    this.doReset()
  }

  protected onDragStart(e: DragEvent): void {
    this.startDragging(e)
    this.updateDragEventOnDragStart(e)
  }

  protected onDrag(e: DragEvent): void {
    this.dragging(e)
    this.updateDragEventOnDragging(e)
  }

  protected onDragEnter(e: DragEvent): void {
    this.draggingOver(e)
  }

  protected onDragLeave(e: DragEvent): void {
    this.draggingOver(e)
  }

  protected onDragOver(e: DragEvent): void {
    this.draggingOver(e)
    this.updateDragEventOnDragging(e)
  }

  protected onDrop(e: DragEvent): void {
    this.drop(e)
  }

  protected onDragEnd(e: DragEvent): void {
    this.finishDragging(e)
    // this.reset()
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected startDragging(e: DragEvent): void {
    const elements = document.elementsFromPoint(e.clientX, e.clientY)
    const { data: associatedDataUnderPointer, window } = grabAssociatedData(elements, SymAssociatedData, 'htmlDrag', EmptyAssociatedDataArray)
    const originData = associatedDataUnderPointer[0] as AssociatedData | undefined
    if (originData) {
      this.stage = DragStage.Started
      this.originData = originData
      this.associatedDataUnderPointer = associatedDataUnderPointer
      this.startX = e.clientX
      this.startY = e.clientY
      const path = e.composedPath()
      this.associatedDataPath = grabAssociatedData(path, SymAssociatedData, 'htmlDrag', EmptyAssociatedDataArray).data
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
    this.updateSensorData(e)
    this.stage = DragStage.Dragging
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected draggingOver(e: DragEvent): void {
    this.updateSensorData(e)
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
  protected cancelDragging(): void {
    this.stage = DragStage.Finished
    this.dropped = false
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected updateDragEventOnDragStart(e: DragEvent): void {
    const d = e.dataTransfer
    if (d) {
      d.dropEffect = this.dropEffect
      d.effectAllowed = this.effectAllowed
    }
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected updateDragEventOnDragging(e: DragEvent): void {
    if (this.dropAllowed)
      e.preventDefault()
  }

  protected doReset(): void {
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
    this.associatedDataUnderPointer = EmptyAssociatedDataArray
    this.associatedDataPath = EmptyAssociatedDataArray
  }

  protected updateSensorData(e: DragEvent): void {
    const elements = document.elementsFromPoint(e.clientX, e.clientY)
    this.associatedDataUnderPointer = grabAssociatedData(elements, SymAssociatedData, 'htmlDrag', this.associatedDataUnderPointer).data
    const path = e.composedPath()
    this.associatedDataPath = grabAssociatedData(path, SymAssociatedData, 'htmlDrag', this.associatedDataPath).data
    this.modifiers = extractModifierKeys(e)
    this.positionX = e.clientX
    this.positionY = e.clientY
    this.revision++
  }

  // @reaction
  // protected debug(): void {
  //   console.log(`HtmlDragSensor: stage = ${DragStage[this.stage]}, originData = ${this.originData}, draggingData = ${this.draggingData}, start = (${this.startX}, ${this.startY}), pos = (${this.positionX}, ${this.positionY}, revision = ${this.revision})`)
  // }
}
