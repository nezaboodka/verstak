// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { nonreactive, options, TraceLevel, transaction } from 'reactronic'
import { EmptyAssociatedDataArray, HtmlElementSensor } from '../core/Sensor'
import { DragStage } from './DragSensor'
import { extractModifierKeys, KeyboardModifiers } from './KeyboardSensor'

export type DragEffectAllowed = 'none' | 'copy' | 'copyLink' | 'copyMove' | 'link' | 'linkMove' | 'move' | 'all' | 'uninitialized'
export type DropEffect = 'none' | 'copy' | 'link' | 'move'

export class HtmlDragSensor extends HtmlElementSensor {
  event: DragEvent | undefined = undefined

  stage = DragStage.Finished
  originData: any = undefined
  draggingData: any = undefined
  modifiers = KeyboardModifiers.None
  startX = Infinity // position relative to browser's viewport
  startY = Infinity // position relative to browser's viewport
  draggingX = Infinity // position relative to browser's viewport
  draggingY = Infinity // position relative to browser's viewport
  dropX = Infinity // position relative to browser's viewport
  dropY = Infinity // position relative to browser's viewport
  dropped: boolean = false
  protected internalAssociatedDataUnderPointer: unknown[] = EmptyAssociatedDataArray

  get associatedDataUnderPointer(): unknown[] { return nonreactive(() => this.internalAssociatedDataUnderPointer) }
  set associatedDataUnderPointer(value: unknown[]) { this.internalAssociatedDataUnderPointer = value }
  get topAssociatedDataUnderPointer(): unknown {
    return nonreactive(() => this.internalAssociatedDataUnderPointer.length > 0 ? this.internalAssociatedDataUnderPointer[0] : undefined)
  }

  get dropEffect(): DropEffect {
    return this.event?.dataTransfer?.dropEffect ?? 'none'
  }

  set dropEffect(value: DropEffect) {
    const dataTransfer = this.event?.dataTransfer
    if (dataTransfer)
      dataTransfer.dropEffect = value
  }

  get effectAllowed(): DragEffectAllowed {
    return this.event?.dataTransfer?.effectAllowed ?? 'none'
  }

  set effectAllowed(value: DragEffectAllowed) {
    if (this.stage === DragStage.Started) {
      const dataTransfer = this.event?.dataTransfer
      if (dataTransfer)
        dataTransfer.effectAllowed = value
    }
    else {
      throw new Error('\'allowedDragOperations\' must be set during \'Started\' drag stage')
    }
  }

  setDragImage(image: Element, x: number, y: number): void {
    const dataTransfer = this.event?.dataTransfer
    if (dataTransfer)
      dataTransfer.setDragImage(image, x, y)
  }

  allowDropHere(): void {
    this.event?.preventDefault()
  }

  @transaction
  listen(element: HTMLElement | undefined, enabled: boolean = true): void {
    const existing = this.sourceElement
    if (element !== existing) {
      if (existing) {
        existing.removeEventListener('dragstart', this.onDragStart, { capture: true })
        existing.removeEventListener('dragenter', this.onDragEnter, { capture: false })
        existing.removeEventListener('dragleave', this.onDragLeave, { capture: false })
        existing.removeEventListener('dragover', this.onDragOver, { capture: true })
        existing.removeEventListener('drop', this.onDrop, { capture: true })
        existing.removeEventListener('dragend', this.onDragEnd, { capture: true })
      }
      this.sourceElement = element
      if (element && enabled) {
        element.addEventListener('dragstart', this.onDragStart, { capture: true })
        element.addEventListener('dragenter', this.onDragEnter, { capture: false })
        element.addEventListener('dragleave', this.onDragLeave, { capture: false })
        element.addEventListener('dragover', this.onDragOver, { capture: true })
        element.addEventListener('drop', this.onDrop, { capture: true })
        element.addEventListener('dragend', this.onDragEnd, { capture: true })
      }
    }
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected onDragStart(e: DragEvent): void {
    const path = e.composedPath()
    const associatedDataPath = grabAssociatedData(path, SymAssociatedData, 'htmlDrag', 'dragImportance', this.htmlDrag.associatedDataPath)
    const d = this.htmlDrag
    this.currentEvent = e
    d.stage = DragStage.Started
    d.associatedDataPath = associatedDataPath
    d.draggingOriginData = associatedDataPath[0]
    d.draggingStartX = e.clientX
    d.draggingStartY = e.clientY
    d.draggingPositionX = e.clientX
    d.draggingPositionY = e.clientY
    d.draggingModifiers = extractModifierKeys(e)
    d.dropped = false
    d.revision++
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected onDragEnter(e: DragEvent): void {
    const d = this.htmlDrag
    this.currentEvent = e
    d.stage = DragStage.Dragging
    d.draggingPositionX = e.clientX
    d.draggingPositionY = e.clientY
    d.draggingModifiers = this.keyboard.modifiers
    d.revision++
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected onDragLeave(e: DragEvent): void {
    const d = this.htmlDrag
    this.currentEvent = e
    d.stage = DragStage.Dragging
    d.draggingPositionX = e.clientX
    d.draggingPositionY = e.clientY
    d.draggingModifiers = this.keyboard.modifiers
    d.revision++
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected onDragOver(e: DragEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    const d = this.htmlDrag
    d.stage = DragStage.Dragging
    d.draggingPositionX = e.clientX
    d.draggingPositionY = e.clientY
    d.associatedDataPath = grabAssociatedData(path, SymAssociatedData, 'htmlDrag', 'dragImportance', this.htmlDrag.associatedDataPath)
    d.revision++
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected onDrop(e: DragEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    const d = this.htmlDrag
    d.stage = DragStage.Dropped
    d.associatedDataPath = grabAssociatedData(path, SymAssociatedData, 'htmlDrag', 'dragImportance', this.htmlDrag.associatedDataPath)
    d.dropPositionX = e.clientX
    d.dropPositionY = e.clientY
    d.dropped = true
    d.revision++
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected onDragEnd(e: DragEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    const d = this.htmlDrag
    Transaction.runAs({ standalone: true }, () => {
      this.currentEvent = e
      d.stage = DragStage.Finished
      d.associatedDataPath = grabAssociatedData(path, SymAssociatedData, 'htmlDrag', 'dragImportance', this.htmlDrag.associatedDataPath)
      d.dropPositionX = e.clientX
      d.dropPositionY = e.clientY
      d.revision++
    })
    d.reset()
    d.revision++
  }
}
