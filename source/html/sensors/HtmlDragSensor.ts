// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, reaction, standalone, TraceLevel, transaction, unobservable } from 'reactronic'
import { EmptyDataArray, grabElementData } from '../DataForSensor'
import { DataForSensor, SymDataForSensor } from '../HtmlApiExt'
import { HtmlElementSensor } from '../HtmlElementSensor'
import { extractModifierKeys, KeyboardModifiers } from './KeyboardSensor'
import { WindowSensor } from './WindowSensor'

export type DragEffectAllowed = 'none' | 'copy' | 'copyLink' | 'copyMove' | 'link' | 'linkMove' | 'move' | 'all' | 'uninitialized'
export type DropEffect = 'none' | 'copy' | 'link' | 'move'

export class HtmlDragSensor extends HtmlElementSensor {
  draggable: unknown
  dragSource: unknown
  dragTarget: unknown
  previousDragTarget: unknown
  started: boolean
  finished: boolean
  startX: number // position relative to browser's viewport
  startY: number // position relative to browser's viewport
  @unobservable private dataByFormat: Map<string, unknown>
  @unobservable dropEffect: DropEffect
  @unobservable dataTypesAllowed: string[]
  @unobservable effectAllowed: DragEffectAllowed
  @unobservable dropAllowed: boolean
  draggingOver: boolean
  draggingDataTypes: string[]
  positionX: number // position relative to browser's viewport
  positionY: number // position relative to browser's viewport
  modifiers: KeyboardModifiers
  dropX: number // position relative to browser's viewport
  dropY: number // position relative to browser's viewport
  dropped: boolean
  immediatePositionX: number // position relative to browser's viewport
  immediatePositionY: number // position relative to browser's viewport
  immediateModifiers: KeyboardModifiers

  constructor(windowSensor: WindowSensor) {
    super(windowSensor)
    this.draggable = undefined
    this.dragSource = undefined
    this.dragTarget = undefined
    this.previousDragTarget = undefined
    this.started = false
    this.finished = false
    this.startX = Infinity
    this.startY = Infinity
    this.dataByFormat = new Map<string, unknown>()
    this.dropEffect = 'none'
    this.dataTypesAllowed = []
    this.effectAllowed = 'uninitialized'
    this.dropAllowed = false
    this.draggingOver = false
    this.draggingDataTypes = []
    this.positionX = Infinity
    this.positionY = Infinity
    this.modifiers = KeyboardModifiers.None
    this.dropX = Infinity
    this.dropY = Infinity
    this.dropped = false
    this.immediatePositionX = Infinity
    this.immediatePositionY = Infinity
    this.immediateModifiers = KeyboardModifiers.None
  }

  getData(format: string): unknown {
    return this.dataByFormat.get(format)
  }

  setData(format: string, value: unknown): void {
    this.dataByFormat.set(format, value)
  }

  clearData(format?: string): void {
    if (format)
      this.dataByFormat.delete(format)
    else
      this.dataByFormat.clear()
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
    this.enterTarget(e)
    this.updateEventOnDropAllowed(e)
  }

  protected onDragLeave(e: DragEvent): void {
    this.leaveTarget(e)
  }

  protected onDragOver(e: DragEvent): void {
    this.dragOver(e)
    this.updateEventOnDropAllowed(e)
  }

  protected onDrop(e: DragEvent): void {
    this.drop(e)
  }

  protected onDragEnd(e: DragEvent): void {
    this.finishDragging(e)
    this.reset()
  }

  @transaction @options({ trace: TraceLevel.Silent })
  protected startDragging(e: DragEvent): void {
    this.preventDefault = false
    this.stopPropagation = false
    const dragElement: any = e.target
    this.draggable = (dragElement[SymDataForSensor] as DataForSensor | undefined)?.htmlDraggable
    const sourceElements = document.elementsFromPoint(e.clientX, e.clientY)
    const { data: elementDataUnderPointer, window } = grabElementData(sourceElements, SymDataForSensor, 'htmlDrag', EmptyDataArray)
    this.dragSource = elementDataUnderPointer[0]
    this.started = true
    this.finished = false
    this.startX = e.clientX
    this.startY = e.clientY
    this.modifiers = extractModifierKeys(e)
    this.positionX = e.clientX
    this.positionY = e.clientY
    this.dropped = false
    this.dragTarget = undefined
    this.previousDragTarget = undefined
    this.revision++
    standalone(() => {
      this.windowSensor?.setActiveWindow(window, 'htmlDrag')
    })
  }

  @transaction @options({ trace: TraceLevel.Silent })
  protected dragging(e: DragEvent): void {
    this.started = true
    this.finished = false
    this.revision++
  }

  @transaction @options({ trace: TraceLevel.Silent })
  protected finishDragging(e: DragEvent): void {
    this.finished = true
    this.revision++
  }

  @transaction @options({ trace: TraceLevel.Silent })
  protected enterTarget(e: DragEvent): void {
    const window = this.updateDragTarget(e)
    this.dropped = false
    this.revision++
    this.windowSensor?.setActiveWindow(window, 'htmlDrag')
  }

  @transaction @options({ trace: TraceLevel.Silent })
  protected leaveTarget(e: DragEvent): void {
    // Nothing to do
  }

  @transaction @options({ trace: TraceLevel.Silent })
  protected dragOver(e: DragEvent): void {
    this.updateDragTarget(e)
    this.dropped = false
    this.revision++
  }

  @transaction @options({ trace: TraceLevel.Silent })
  protected drop(e: DragEvent): void {
    this.updateDragTarget(e)
    this.modifiers = this.immediateModifiers
    this.dropX = e.clientX
    this.dropY = e.clientY
    this.dropped = true
    const dt = e.dataTransfer
    if (dt) {
      let dataByFormat = this.dataByFormat
      dt.types.forEach(type => {
        if (!dataByFormat.has(type)) {
          const data = dt.getData(type)
          if (data !== '') {
            this.dataByFormat = dataByFormat = dataByFormat.toMutable()
            dataByFormat.set(type, data)
          }
        }
      })
    }
    this.revision++
  }

  @transaction @options({ trace: TraceLevel.Silent })
  protected updateEventOnDragStart(e: DragEvent): void {
    const dt = e.dataTransfer
    if (dt) {
      dt.dropEffect = this.dropEffect
      dt.effectAllowed = this.effectAllowed
      this.dataByFormat.forEach((data, format) => {
        if (typeof data === 'string')
          dt.setData(format, data)
      })
    }
  }

  @transaction @options({ trace: TraceLevel.Silent })
  protected updateEventOnDropAllowed(e: DragEvent): void {
    if (this.dropAllowed)
      e.preventDefault()
  }

  @transaction @options({ trace: TraceLevel.Silent })
  protected reset(): void {
    this.elementDataList = EmptyDataArray
    this.draggable = undefined
    this.dragSource = undefined
    this.dragTarget = undefined
    this.previousDragTarget = undefined
    this.started = false
    this.finished = false
    this.startX = Infinity
    this.startY = Infinity
    this.dataByFormat.clear()
    this.dropEffect = 'none'
    this.dataTypesAllowed = []
    this.effectAllowed = 'uninitialized'
    this.dropAllowed = false
    this.draggingOver = false
    this.draggingDataTypes = []
    this.positionX = Infinity
    this.positionY = Infinity
    this.modifiers = KeyboardModifiers.None
    this.dropX = Infinity
    this.dropY = Infinity
    this.dropped = false
    this.immediatePositionX = Infinity
    this.immediatePositionY = Infinity
    this.immediateModifiers = KeyboardModifiers.None
    this.revision++
  }

  protected updateDragTarget(e: DragEvent): unknown {
    const path = e.composedPath()
    this.elementDataList = grabElementData(path, SymDataForSensor, 'htmlDrag', this.elementDataList).data
    const targetElements = document.elementsFromPoint(e.clientX, e.clientY)
    const { data: elementDataUnderPointer, window } = grabElementData(targetElements, SymDataForSensor, 'htmlDrag', EmptyDataArray)
    const dataForSensor = elementDataUnderPointer[0]
    const dragTarget = dataForSensor
    if (dragTarget !== this.dragTarget) {
      this.previousDragTarget = this.dragTarget
      this.dragTarget = dragTarget
    }
    const types = e.dataTransfer?.types
    if (types) {
      if (!areEqualArrays(types, this.draggingDataTypes)) {
        const draggingDataTypes = new Array<string>()
        for (let i = 0; i < types.length; i++)
          draggingDataTypes.push(types[i])
        this.draggingDataTypes = draggingDataTypes
      }
    }
    this.immediateModifiers = extractModifierKeys(e)
    this.immediatePositionX = e.clientX
    this.immediatePositionY = e.clientY
    this.draggingOver = true
    return window
  }

  @reaction @options({ throttling: 0 })
  protected whenDragging(): void {
    if (this.draggingOver) {
      this.positionX = this.immediatePositionX
      this.positionY = this.immediatePositionY
      this.modifiers = this.immediateModifiers
    }
  }

  // @reaction
  // protected debug(): void {
  //   this.revision // subscribe
  //   const status: string[] = []
  //   if (this.started)
  //     status.push('started')
  //   if (this.draggingOver)
  //     status.push('dragging')
  //   if (this.dropped)
  //     status.push('dropped')
  //   if (this.finished)
  //     status.push('finished')
  //   console.log(`HtmlDragSensor: (${status.join(', ')}), revision=${this.revision}`)
  //   console.log(`    dragSource=${this.dragSource}, dragTarget=${this.dragTarget}, start=(${this.startX}, ${this.startY}), pos=(${this.positionX}, ${this.positionY})`)
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
