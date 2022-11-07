// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, reactive, transactional, raw, Transaction, LoggingLevel } from "reactronic"
import { findTargetElementData, SymDataForSensor } from "./DataForSensor"
import { FocusSensor } from "./FocusSensor"
import { HtmlElementSensor } from "./HtmlElementSensor"
import { extractModifierKeys, KeyboardModifiers } from "./KeyboardSensor"
import { WindowSensor } from "./WindowSensor"

export type DragEffectAllowed = "none" | "copy" | "copyLink" | "copyMove" | "link" | "linkMove" | "move" | "all" | "uninitialized"
export type DropEffect = "none" | "copy" | "link" | "move"

export class HtmlDragSensor extends HtmlElementSensor {
  draggable: unknown
  dragSource: unknown
  dragTarget: unknown
  dragTargetWindow: unknown
  previousDragTarget: unknown
  dragStarted: boolean
  dragFinished: boolean
  startX: number // position relative to browser's viewport
  startY: number // position relative to browser's viewport
  @raw private dataByFormat: Map<string, unknown>
  @raw private draggingImage: HTMLElement | undefined
  @raw private draggingImageX: number
  @raw private draggingImageY: number
  @raw dropEffect: DropEffect
  @raw dataTypesAllowed: string[]
  @raw effectAllowed: DragEffectAllowed
  @raw dropAllowed: boolean
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

  constructor(focusSensor: FocusSensor, windowSensor: WindowSensor) {
    super(focusSensor, windowSensor)
    this.draggable = undefined
    this.dragSource = undefined
    this.dragTarget = undefined
    this.dragTargetWindow = undefined
    this.previousDragTarget = undefined
    this.dragStarted = false
    this.dragFinished = false
    this.startX = Infinity
    this.startY = Infinity
    this.dataByFormat = new Map<string, unknown>()
    this.draggingImage = undefined
    this.draggingImageX = Infinity
    this.draggingImageY = Infinity
    this.dropEffect = "none"
    this.dataTypesAllowed = []
    this.effectAllowed = "uninitialized"
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

  setDragImage(value: HTMLElement, x: number, y: number): void {
    this.draggingImage = value
    this.draggingImageX = x
    this.draggingImageY = y
  }

  @transactional
  listen(element: HTMLElement | undefined, enabled: boolean = true): void {
    const existing = this.sourceElement
    if (element !== existing) {
      if (existing) {
        existing.removeEventListener("dragstart", this.onDragStart.bind(this), { capture: true })
        existing.removeEventListener("drag", this.onDrag.bind(this), { capture: true })
        existing.removeEventListener("dragenter", this.onDragEnter.bind(this), { capture: false })
        existing.removeEventListener("dragleave", this.onDragLeave.bind(this), { capture: false })
        existing.removeEventListener("dragover", this.onDragOver.bind(this), { capture: true })
        existing.removeEventListener("drop", this.onDrop.bind(this), { capture: true })
        existing.removeEventListener("dragend", this.onDragEnd.bind(this), { capture: true })
      }
      this.sourceElement = element
      if (element && enabled) {
        element.addEventListener("dragstart", this.onDragStart.bind(this), { capture: true })
        element.addEventListener("drag", this.onDrag.bind(this), { capture: true })
        element.addEventListener("dragenter", this.onDragEnter.bind(this), { capture: false })
        element.addEventListener("dragleave", this.onDragLeave.bind(this), { capture: false })
        element.addEventListener("dragover", this.onDragOver.bind(this), { capture: true })
        element.addEventListener("drop", this.onDrop.bind(this), { capture: true })
        element.addEventListener("dragend", this.onDragEnd.bind(this), { capture: true })
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

  @transactional @options({ logging: LoggingLevel.Off })
  protected startDragging(e: DragEvent): void {
    this.preventDefault = false
    this.stopPropagation = false
    const targetPath = e.composedPath()
    const underPointer = document.elementsFromPoint(e.clientX, e.clientY)
    const { data, window } = findTargetElementData(targetPath, underPointer, SymDataForSensor, ["htmlDraggable"])
    this.draggable = data?.htmlDraggable
    this.dragSource = findTargetElementData(targetPath, underPointer, SymDataForSensor, ["htmlDrag"], true).data?.htmlDrag
    this.dragStarted = true
    this.dragFinished = false
    this.startX = e.clientX
    this.startY = e.clientY
    this.modifiers = extractModifierKeys(e)
    this.positionX = e.clientX
    this.positionY = e.clientY
    this.dropped = false
    this.dragTarget = undefined
    this.dragTargetWindow = undefined
    this.previousDragTarget = undefined
    this.revision++
    Transaction.separate(() => {
      this.windowSensor?.setActiveWindow(window, "htmlDrag")
    })
  }

  @transactional @options({ logging: LoggingLevel.Off })
  protected dragging(e: DragEvent): void {
    this.dragStarted = true
    this.dragFinished = false
    this.revision++
  }

  @transactional @options({ logging: LoggingLevel.Off })
  protected finishDragging(e: DragEvent): void {
    this.dragFinished = true
    this.revision++
  }

  @transactional @options({ logging: LoggingLevel.Off })
  protected enterTarget(e: DragEvent): void {
    this.updateDragTarget(e)
    this.dropped = false
    this.revision++
  }

  @transactional @options({ logging: LoggingLevel.Off })
  protected leaveTarget(e: DragEvent): void {
    // Nothing to do
  }

  @transactional @options({ logging: LoggingLevel.Off })
  protected dragOver(e: DragEvent): void {
    this.updateDragTarget(e)
    this.dropped = false
    this.revision++
  }

  @transactional @options({ logging: LoggingLevel.Off })
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
          if (data !== "") {
            this.dataByFormat = dataByFormat = dataByFormat.toMutable()
            dataByFormat.set(type, data)
          }
        }
      })
    }
    this.revision++
  }

  @transactional @options({ logging: LoggingLevel.Off })
  protected updateEventOnDragStart(e: DragEvent): void {
    const dt = e.dataTransfer
    if (dt) {
      dt.dropEffect = this.dropEffect
      dt.effectAllowed = this.effectAllowed
      this.dataByFormat.forEach((data, format) => {
        if (typeof data === "string")
          dt.setData(format, data)
      })
      if (this.draggingImage) {
        dt.setDragImage(this.draggingImage, this.draggingImageX, this.draggingImageY)
      }
    }
  }

  @transactional @options({ logging: LoggingLevel.Off })
  protected updateEventOnDropAllowed(e: DragEvent): void {
    if (this.dropAllowed)
      e.preventDefault()
  }

  @transactional @options({ logging: LoggingLevel.Off })
  protected reset(): void {
    this.draggable = undefined
    this.dragSource = undefined
    this.dragTarget = undefined
    this.dragTargetWindow = undefined
    this.previousDragTarget = undefined
    this.dragStarted = false
    this.dragFinished = false
    this.startX = Infinity
    this.startY = Infinity
    this.dataByFormat.clear()
    this.draggingImage = undefined
    this.draggingImageX = Infinity
    this.draggingImageY = Infinity
    this.dropEffect = "none"
    this.dataTypesAllowed = []
    this.effectAllowed = "uninitialized"
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

  protected updateDragTarget(e: DragEvent): void {
    const targetPath = e.composedPath()
    const underPointer = document.elementsFromPoint(e.clientX, e.clientY)
    const { data, window } = findTargetElementData(targetPath, underPointer, SymDataForSensor, ["htmlDrag"])
    const dragTarget = data?.htmlDrag
    if (dragTarget !== this.dragTarget) {
      this.previousDragTarget = this.dragTarget
      this.dragTarget = dragTarget
      this.dragTargetWindow = window
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
  }

  @reactive @options({ throttling: 0 })
  protected whenDragging(): void {
    if (this.draggingOver) {
      this.positionX = this.immediatePositionX
      this.positionY = this.immediatePositionY
      this.modifiers = this.immediateModifiers
    }
  }

  // @reactive
  // protected debug(): void {
  //   const status: string[] = []
  //   if (this.dragStarted)
  //     status.push('started')
  //   if (this.draggingOver)
  //     status.push('dragging')
  //   if (this.dropped)
  //     status.push('dropped')
  //   if (this.dragFinished)
  //     status.push('finished')
  //   console.log(`HtmlDragSensor: (${status.join(', ')})`)
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
