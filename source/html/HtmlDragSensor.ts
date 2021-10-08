// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { nonreactive, options, Reentrance, TraceLevel, transaction } from 'reactronic'
import { EmptyAssociatedDataArray, grabAssociatedData, HtmlElementSensor } from '../core/Sensor'
import { DragStage } from './DragSensor'
import { SymAssociatedData } from './HtmlApiExt'
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
  positionX = Infinity // position relative to browser's viewport
  positionY = Infinity // position relative to browser's viewport
  dropX = Infinity // position relative to browser's viewport
  dropY = Infinity // position relative to browser's viewport
  dropped: boolean = false
  protected internalAssociatedDataUnderPointer: unknown[] = EmptyAssociatedDataArray

  get associatedDataUnderPointer(): unknown[] {
    return nonreactive(() => this.internalAssociatedDataUnderPointer)
  }

  set associatedDataUnderPointer(value: unknown[]) {
    this.internalAssociatedDataUnderPointer = value
  }

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

  @transaction
  reset(): void {
    this.doReset()
  }

  protected onDragStart(e: DragEvent): void {
    this.startDragging(e)
    this.dragging()
  }

  protected onDragEnter(e: DragEvent): void {
    this.stage = DragStage.Dragging
    this.continueDragging(e)
  }

  protected onDragLeave(e: DragEvent): void {
    this.continueDragging(e)
  }

  protected onDragOver(e: DragEvent): void {
    this.continueDragging(e)
  }

  protected onDrop(e: DragEvent): void {
    this.drop(e)
  }

  protected onDragEnd(e: DragEvent): void {
    this.finishDragging()
    this.reset()
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected startDragging(e: DragEvent): void {
    this.stage = DragStage.Started
    this.rememberDragEvent(e)
    this.startX = e.clientX
    this.startY = e.clientY
    this.dropped = false
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected dragging(): void {
    this.stage = DragStage.Dragging
  }

  @transaction @options({ reentrance: Reentrance.CancelPrevious, trace: TraceLevel.Suppress })
  protected continueDragging(e: DragEvent): void {
    this.stage = DragStage.Dragging
    this.rememberDragEvent(e)
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected drop(e: DragEvent): void {
    this.rememberDragEvent(e)
    this.stage = DragStage.Dropped
    this.dropX = e.clientX
    this.dropY = e.clientY
    this.dropped = true
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected finishDragging(): void {
    this.stage = DragStage.Finished
    this.revision++
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected cancelDragging(): void {
    this.stage = DragStage.Finished
    this.dropped = false
  }

  protected doReset(): void {
    this.event = undefined
    this.associatedDataPath = EmptyAssociatedDataArray
    this.originData = undefined
    this.draggingData = undefined
    this.startX = Infinity
    this.startY = Infinity
    this.positionX = Infinity
    this.positionY = Infinity
    this.dropX = Infinity
    this.dropY = Infinity
    this.modifiers = KeyboardModifiers.None
    this.dropped = false
  }

  protected rememberDragEvent(e: DragEvent): void {
    this.event = e
    const path = e.composedPath()
    this.associatedDataPath = grabAssociatedData(path, SymAssociatedData, 'htmlDrag', 'htmlDragImportance', this.associatedDataPath)
    const elements = document.elementsFromPoint(e.clientX, e.clientY)
    this.associatedDataUnderPointer = grabAssociatedData(elements, SymAssociatedData, 'htmlDrag', 'htmlDragImportance', this.associatedDataUnderPointer)
    this.modifiers = extractModifierKeys(e)
    this.positionX = e.clientX
    this.positionY = e.clientY
    this.revision++
  }
}
