// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { transaction, trace, TraceLevel, unobservable } from 'reactronic'
import { Sensors, grabSensorDataList, PointerButton } from '../core'
import { SymSensorData } from './WebApiExt'

export class WebSensors extends Sensors {
  @unobservable currentEvent: Event | undefined = undefined
  element?: HTMLElement | null

  constructor() {
    super()
    this.element = undefined
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
        existing.removeEventListener('dragover', this.onDragOver, { capture: true })
        existing.removeEventListener('dragstart', this.onDragStart, { capture: true })
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
        element.addEventListener('dragover', this.onDragOver, { capture: true })
        element.addEventListener('dragstart', this.onDragStart, { capture: true })
        element.addEventListener('dragend', this.onDragEnd, { capture: true })
      }
    }
  }

  @transaction @trace(TraceLevel.Suppress)
  resetFocus(): void {
    const ei = this.element?.sensorData?.focus
    this.trackFocus(ei ? [ei] : [], true)
    this.element?.focus()
  }

  @transaction @trace(TraceLevel.Suppress)
  onFocusIn(e: FocusEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doFocusIn(
      grabSensorDataList(path, SymSensorData, 'focus', 'focusImportance', this.focus.sensorDataList))
  }

  @transaction @trace(TraceLevel.Suppress)
  onFocusOut(e: FocusEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doFocusOut(
      grabSensorDataList(path, SymSensorData, 'focus', 'focusImportance', this.focus.sensorDataList))
  }

  @transaction @trace(TraceLevel.Suppress)
  onPointerOver(e: PointerEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doPointerOver(
      grabSensorDataList(path, SymSensorData, 'pointer', 'pointerImportance', this.pointer.sensorDataList),
      grabSensorDataList(path, SymSensorData, 'hover', 'hoverImportance', this.hover.sensorDataList),
      e.clientX, e.clientY)
  }

  @transaction @trace(TraceLevel.Suppress)
  onPointerMove(e: PointerEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doPointerMove(
      grabSensorDataList(path, SymSensorData, 'pointer', 'pointerImportance', this.pointer.sensorDataList),
      e.pointerId, e.clientX, e.clientY)
  }

  @transaction @trace(TraceLevel.Suppress)
  onPointerDown(e: PointerEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doPointerDown(
      grabSensorDataList(path, SymSensorData, 'pointer', 'pointerImportance', this.pointer.sensorDataList),
      grabSensorDataList(path, SymSensorData, 'focus', 'focusImportance', this.focus.sensorDataList),
      e.pointerId, e.buttons, e.clientX, e.clientY)
  }

  @transaction @trace(TraceLevel.Suppress)
  onPointerUp(e: PointerEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doPointerUp(
      grabSensorDataList(path, SymSensorData, 'pointer', 'pointerImportance', this.pointer.sensorDataList),
      grabSensorDataList(path, SymSensorData, 'focus', 'focusImportance', this.focus.sensorDataList),
      e.pointerId, e.buttons, e.clientX, e.clientY)
  }

  @transaction @trace(TraceLevel.Suppress)
  onLostPointerCapture(e: PointerEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doPointerCancel(
      grabSensorDataList(path, SymSensorData, 'pointer', 'pointerImportance', this.pointer.sensorDataList),
      grabSensorDataList(path, SymSensorData, 'focus', 'focusImportance', this.focus.sensorDataList),
      e.pointerId, e.buttons, e.clientX, e.clientY)
  }

  @transaction @trace(TraceLevel.Suppress)
  onClick(e: MouseEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doClick(
      grabSensorDataList(path, SymSensorData, 'pointer', 'pointerImportance', this.pointer.sensorDataList),
      grabSensorDataList(path, SymSensorData, 'focus', 'focusImportance', this.focus.sensorDataList),
      PointerButton.Left, e.clientX, e.clientY)
  }

  @transaction @trace(TraceLevel.Suppress)
  onDblClick(e: MouseEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doDblClick(
      grabSensorDataList(path, SymSensorData, 'pointer', 'pointerImportance', this.pointer.sensorDataList),
      grabSensorDataList(path, SymSensorData, 'focus', 'focusImportance', this.focus.sensorDataList),
      PointerButton.Left, e.clientX, e.clientY)
  }

  @transaction @trace(TraceLevel.Suppress)
  onTouchStart(e: Event): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doTouchStart(
      grabSensorDataList(path, SymSensorData, 'pointer', 'pointerImportance', this.pointer.sensorDataList),
      grabSensorDataList(path, SymSensorData, 'focus', 'focusImportance', this.focus.sensorDataList))
  }

  @transaction @trace(TraceLevel.Suppress)
  onTouchEnd(e: Event): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doTouchEnd(
      grabSensorDataList(path, SymSensorData, 'pointer', 'pointerImportance', this.pointer.sensorDataList))
  }

  @transaction @trace(TraceLevel.Suppress)
  onWheel(e: WheelEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doWheel(
      grabSensorDataList(path, SymSensorData, 'scroll', 'scrollImportance', this.scroll.sensorDataList),
      grabSensorDataList(path, SymSensorData, 'focus', 'focusImportance', this.focus.sensorDataList),
      e.deltaX, e.deltaY, e.clientX, e.clientY)
  }

  @transaction @trace(TraceLevel.Suppress)
  onKeyDown(e: KeyboardEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doKeyDown(
      grabSensorDataList(path, SymSensorData, 'keyboard', 'keyboardImportance', this.keyboard.sensorDataList), e.key)
  }

  @transaction @trace(TraceLevel.Suppress)
  onKeyUp(e: KeyboardEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doKeyUp(
      grabSensorDataList(path, SymSensorData, 'keyboard', 'keyboardImportance', this.keyboard.sensorDataList), e.key)
  }

  protected setPointerCapture(pointerId: number): boolean {
    this.element?.setPointerCapture(pointerId)
    return this.element instanceof HTMLElement
  }

  protected releasePointerCapture(pointerId: number): boolean {
    this.element?.releasePointerCapture(pointerId)
    return false
  }

  @transaction @trace(TraceLevel.Suppress)
  onDragOver(e: DragEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doDragOver(
      grabSensorDataList(path, SymSensorData, 'dragOver', 'dragImportance', this.dragOver.sensorDataList),
      e.clientX, e.clientY, e.dataTransfer)
  }

  @transaction @trace(TraceLevel.Suppress)
  onDragStart(e: DragEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doDragStart(
      grabSensorDataList(path, SymSensorData, 'dragStart', 'dragImportance', this.dragStart.sensorDataList),
      e.buttons, e.clientX, e.clientY, e.target)
  }

  @transaction @trace(TraceLevel.Suppress)
  onDragEnd(e: DragEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doDragEnd(
      grabSensorDataList(path, SymSensorData, 'dragEnd', 'dragImportance', this.dragEnd.sensorDataList),
      e.clientX, e.clientY, e.dataTransfer)
  }
}
