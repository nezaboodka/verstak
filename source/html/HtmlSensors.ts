// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { transaction, trace, TraceLevel, unobservable, sensitive, Sensitivity, Ref } from 'reactronic'
import { Sensors, grabAssociatedDataList, PointerButton, KeyboardModifiers } from '../core/api'
import { SymAssociatedData } from './HtmlApiExt'
import { DragStage, HtmlDrag } from './HtmlSensor'

export class HtmlSensors extends Sensors {
  @unobservable currentEvent: Event | undefined = undefined
  element?: HTMLElement | null

  readonly drag: HtmlDrag

  constructor() {
    super()
    this.element = undefined
    this.drag = new HtmlDrag(Ref.to(this).currentEvent)
  }

  preventDefault(): void {
    if (this.currentEvent !== undefined)
      this.currentEvent.preventDefault()
  }

  stopPropagation(): void {
    if (this.currentEvent !== undefined)
      this.currentEvent.stopPropagation()
  }

  @transaction
  listen(element: HTMLElement | undefined, enabled: boolean = true): void {
    const existing = this.element
    if (element !== existing) {
      if (existing) {
        existing.removeEventListener('focusin', this.onFocusIn, { capture: true })
        existing.removeEventListener('focusout', this.onFocusOut, { capture: true })
        existing.removeEventListener('pointermove', this.onPointerMove, { capture: true })
        existing.removeEventListener('pointerdown', this.onPointerDown, { capture: true })
        existing.removeEventListener('pointerup', this.onPointerUp, { capture: true })
        existing.removeEventListener('lostpointercapture', this.onLostPointerCapture, { capture: true })
        existing.removeEventListener('click', this.onClick, { capture: true })
        existing.removeEventListener('dblclick', this.onDblClick, { capture: true })
        existing.removeEventListener('touchstart', this.onTouchStart, { capture: true })
        existing.removeEventListener('touchend', this.onTouchEnd, { capture: true })
        existing.removeEventListener('wheel', this.onWheel, { capture: true })
        existing.removeEventListener('keydown', this.onKeyDown, { capture: true })
        existing.removeEventListener('keyup', this.onKeyUp, { capture: true })
        existing.removeEventListener('dragstart', this.onDragStart, { capture: true })
        existing.removeEventListener('dragover', this.onDragOver, { capture: true })
        existing.removeEventListener('drop', this.onDrop, { capture: true })
        existing.removeEventListener('dragend', this.onDragEnd, { capture: true })
      }
      this.element = element
      if (element && enabled) {
        element.addEventListener('focusin', this.onFocusIn, { capture: true })
        element.addEventListener('focusout', this.onFocusOut, { capture: true })
        element.addEventListener('pointerover', this.onPointerOver, { capture: true })
        element.addEventListener('pointermove', this.onPointerMove, { capture: true })
        element.addEventListener('pointerdown', this.onPointerDown, { capture: true })
        element.addEventListener('pointerup', this.onPointerUp, { capture: true })
        element.addEventListener('lostpointercapture', this.onLostPointerCapture, { capture: true })
        element.addEventListener('click', this.onClick, { capture: true })
        element.addEventListener('dblclick', this.onDblClick, { capture: true })
        element.addEventListener('touchstart', this.onTouchStart, { capture: true })
        element.addEventListener('touchend', this.onTouchEnd, { capture: true })
        element.addEventListener('wheel', this.onWheel, { capture: true })
        element.addEventListener('keydown', this.onKeyDown, { capture: true })
        element.addEventListener('keyup', this.onKeyUp, { capture: true })
        element.addEventListener('dragstart', this.onDragStart, { capture: true })
        element.addEventListener('dragover', this.onDragOver, { capture: true })
        element.addEventListener('drop', this.onDrop, { capture: true })
        element.addEventListener('dragend', this.onDragEnd, { capture: true })
      }
    }
  }

  @transaction @trace(TraceLevel.Suppress)
  resetFocus(): void {
    const ei = this.element?.associatedData?.focus
    this.trackFocus(ei ? [ei] : [], true)
    this.element?.focus()
  }

  @transaction @trace(TraceLevel.Suppress)
  onFocusIn(e: FocusEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doFocusIn(
      grabAssociatedDataList(path, SymAssociatedData, 'focus', 'focusImportance', this.focus.associatedDataList))
  }

  @transaction @trace(TraceLevel.Suppress)
  onFocusOut(e: FocusEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doFocusOut(
      grabAssociatedDataList(path, SymAssociatedData, 'focus', 'focusImportance', this.focus.associatedDataList))
  }

  @transaction @trace(TraceLevel.Suppress)
  onPointerOver(e: PointerEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doPointerOver(
      grabAssociatedDataList(path, SymAssociatedData, 'pointer', 'pointerImportance', this.pointer.associatedDataList),
      grabAssociatedDataList(path, SymAssociatedData, 'hover', 'hoverImportance', this.hover.associatedDataList),
      e.clientX, e.clientY)
  }

  @transaction @trace(TraceLevel.Suppress)
  onPointerMove(e: PointerEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doPointerMove(
      grabAssociatedDataList(path, SymAssociatedData, 'pointer', 'pointerImportance', this.pointer.associatedDataList),
      e.pointerId, e.clientX, e.clientY)
  }

  @transaction @trace(TraceLevel.Suppress)
  onPointerDown(e: PointerEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doPointerDown(
      grabAssociatedDataList(path, SymAssociatedData, 'pointer', 'pointerImportance', this.pointer.associatedDataList),
      grabAssociatedDataList(path, SymAssociatedData, 'focus', 'focusImportance', this.focus.associatedDataList),
      e.pointerId, e.buttons, e.clientX, e.clientY)
  }

  @transaction @trace(TraceLevel.Suppress)
  onPointerUp(e: PointerEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doPointerUp(
      grabAssociatedDataList(path, SymAssociatedData, 'pointer', 'pointerImportance', this.pointer.associatedDataList),
      grabAssociatedDataList(path, SymAssociatedData, 'focus', 'focusImportance', this.focus.associatedDataList),
      e.pointerId, e.buttons, e.clientX, e.clientY)
  }

  @transaction @trace(TraceLevel.Suppress)
  onLostPointerCapture(e: PointerEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doPointerCancel(
      grabAssociatedDataList(path, SymAssociatedData, 'pointer', 'pointerImportance', this.pointer.associatedDataList),
      grabAssociatedDataList(path, SymAssociatedData, 'focus', 'focusImportance', this.focus.associatedDataList),
      e.pointerId, e.buttons, e.clientX, e.clientY)
  }

  @transaction @trace(TraceLevel.Suppress)
  onClick(e: MouseEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doClick(
      grabAssociatedDataList(path, SymAssociatedData, 'pointer', 'pointerImportance', this.pointer.associatedDataList),
      grabAssociatedDataList(path, SymAssociatedData, 'focus', 'focusImportance', this.focus.associatedDataList),
      PointerButton.Left, e.clientX, e.clientY)
  }

  @transaction @trace(TraceLevel.Suppress)
  onDblClick(e: MouseEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doDblClick(
      grabAssociatedDataList(path, SymAssociatedData, 'pointer', 'pointerImportance', this.pointer.associatedDataList),
      grabAssociatedDataList(path, SymAssociatedData, 'focus', 'focusImportance', this.focus.associatedDataList),
      PointerButton.Left, e.clientX, e.clientY)
  }

  @transaction @trace(TraceLevel.Suppress)
  onTouchStart(e: Event): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doTouchStart(
      grabAssociatedDataList(path, SymAssociatedData, 'pointer', 'pointerImportance', this.pointer.associatedDataList),
      grabAssociatedDataList(path, SymAssociatedData, 'focus', 'focusImportance', this.focus.associatedDataList))
  }

  @transaction @trace(TraceLevel.Suppress)
  onTouchEnd(e: Event): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doTouchEnd(
      grabAssociatedDataList(path, SymAssociatedData, 'pointer', 'pointerImportance', this.pointer.associatedDataList))
  }

  @transaction @trace(TraceLevel.Suppress)
  onWheel(e: WheelEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doWheel(
      grabAssociatedDataList(path, SymAssociatedData, 'scroll', 'scrollImportance', this.scroll.associatedDataList),
      grabAssociatedDataList(path, SymAssociatedData, 'focus', 'focusImportance', this.focus.associatedDataList),
      e.deltaX, e.deltaY, e.clientX, e.clientY)
  }

  @transaction @trace(TraceLevel.Suppress)
  onKeyDown(e: KeyboardEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doKeyDown(
      grabAssociatedDataList(path, SymAssociatedData, 'keyboard', 'keyboardImportance', this.keyboard.associatedDataList), e.key)
  }

  @transaction @trace(TraceLevel.Suppress)
  onKeyUp(e: KeyboardEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doKeyUp(
      grabAssociatedDataList(path, SymAssociatedData, 'keyboard', 'keyboardImportance', this.keyboard.associatedDataList), e.key)
  }

  @transaction @trace(TraceLevel.Suppress)
  onDragStart(e: DragEvent): void {
    const path = e.composedPath()
    const associatedDataList = grabAssociatedDataList(path, SymAssociatedData, 'drag', 'dragImportance', this.drag.associatedDataList)
    const d = this.drag
    this.currentEvent = e
    d.associatedDataList = associatedDataList
    d.stage = DragStage.Started
    d.draggingObject = associatedDataList[0]
    d.draggingStartAtX = e.clientX
    d.draggingStartAtY = e.clientY
    d.draggingModifiers = this.keyboard.modifiers
    d.revision++
  }

  @transaction @trace(TraceLevel.Suppress)
  onDragOver(e: DragEvent): void {
    const path = e.composedPath()
    const d = this.drag
    this.currentEvent = e
    d.associatedDataList = grabAssociatedDataList(path, SymAssociatedData, 'drag', 'dragImportance', this.drag.associatedDataList)
    sensitive(Sensitivity.ReactEvenOnSameValueAssignment, () => d.stage = DragStage.Dragging)
    d.revision++
  }

  @transaction @trace(TraceLevel.Suppress)
  onDrop(e: DragEvent): void {
    const path = e.composedPath()
    const d = this.drag
    this.currentEvent = e
    d.associatedDataList = grabAssociatedDataList(path, SymAssociatedData, 'drag', 'dragImportance', this.drag.associatedDataList)
    d.droppedAtX = e.clientX
    d.droppedAtY = e.clientY
    d.stage = DragStage.Dropped
    d.revision++
  }

  @transaction @trace(TraceLevel.Suppress)
  onDragEnd(e: DragEvent): void {
    const path = e.composedPath()
    const d = this.drag
    this.currentEvent = e
    d.associatedDataList = grabAssociatedDataList(path, SymAssociatedData, 'drag', 'dragImportance', this.drag.associatedDataList)
    d.stage = DragStage.Finished
    d.draggingStartAtX = Infinity
    d.draggingStartAtY = Infinity
    d.draggingModifiers = KeyboardModifiers.None
    d.draggingObject = undefined
    d.droppedAtX = e.clientX
    d.droppedAtY = e.clientY
    d.revision++
  }

  protected setPointerCapture(pointerId: number): boolean {
    this.element?.setPointerCapture(pointerId)
    return this.element instanceof HTMLElement
  }

  protected releasePointerCapture(pointerId: number): boolean {
    this.element?.releasePointerCapture(pointerId)
    return false
  }
}
