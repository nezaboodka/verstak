// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { transaction, TraceLevel, Ref, Transaction, options } from 'reactronic'
import { Sensors, grabAssociatedData, PointerButton, AssociatedData, DragStage, DragSensor } from '../core/api'
import { internalInstance } from '../core/System'
import { SymAssociatedData } from './HtmlApiExt'
import { HtmlDragSensor, HtmlResizeSensor } from './HtmlSensor'

export class HtmlSensors extends Sensors {
  private readonly resizeObserver: ResizeObserver
  eventSource: HTMLElement | undefined

  readonly htmlDrag: HtmlDragSensor
  readonly resize: HtmlResizeSensor

  static readonly DraggingThreshold = 4

  constructor() {
    super()
    this.eventSource = undefined
    this.htmlDrag = new HtmlDragSensor(Ref.to(this).currentEvent)
    this.resize = new HtmlResizeSensor()
    this.resizeObserver = new ResizeObserver(this.onResize)
  }

  observeResizeOfRenderingElement(value: boolean): void {
    const instance = internalInstance<Element>()
    if (value !== instance.isResizeSensorEnabled) {
      if (value)
        this.resizeObserver.observe(instance.native!) // eslint-disable-line @typescript-eslint/no-non-null-assertion
      else
        this.resizeObserver.unobserve(instance.native!) // eslint-disable-line @typescript-eslint/no-non-null-assertion
      instance.isResizeSensorEnabled = value
    }
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
    const existing = this.eventSource
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
        existing.removeEventListener('dragenter', this.onDragEnter, { capture: false })
        existing.removeEventListener('dragleave', this.onDragLeave, { capture: false })
        existing.removeEventListener('dragover', this.onDragOver, { capture: true })
        existing.removeEventListener('drop', this.onDrop, { capture: true })
        existing.removeEventListener('dragend', this.onDragEnd, { capture: true })
      }
      this.eventSource = element
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

  @transaction @options({ trace: TraceLevel.Suppress })
  resetFocus(): void {
    const ei = this.eventSource?.associatedData?.focus
    this.trackFocus(ei ? [ei] : [], true)
    this.eventSource?.focus()
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected onFocusIn(e: FocusEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doFocusIn(
      grabAssociatedData(path, SymAssociatedData, 'focus', 'focusImportance', this.focus.associatedDataPath))
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected onFocusOut(e: FocusEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doFocusOut(
      grabAssociatedData(path, SymAssociatedData, 'focus', 'focusImportance', this.focus.associatedDataPath))
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected onPointerOver(e: PointerEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doPointerOver(
      grabAssociatedData(path, SymAssociatedData, 'pointer', 'pointerImportance', this.pointer.associatedDataPath),
      grabAssociatedData(path, SymAssociatedData, 'hover', 'hoverImportance', this.hover.associatedDataPath),
      e.clientX, e.clientY)
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected onPointerMove(e: PointerEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doPointerMove(
      grabAssociatedData(path, SymAssociatedData, 'pointer', 'pointerImportance', this.pointer.associatedDataPath),
      e.pointerId, e.clientX, e.clientY)

    const d = this.drag
    if (d.dragStartChecking) {
      if (Math.abs(e.clientX - d.draggingStartX) > HtmlSensors.DraggingThreshold ||
        Math.abs(e.clientY - d.draggingStartY) > HtmlSensors.DraggingThreshold) {
        Transaction.runAs({ standalone: true }, () => {
          d.dragStartChecking = false
          d.stage = DragStage.Started
          d.draggingPositionX = e.clientX
          d.draggingPositionY = e.clientY
          d.dropped = false
          d.revision++
        })
        d.stage = DragStage.Dragging
      }
    }
    if (d.stage === DragStage.Dragging) {
      d.associatedDataPath = grabAssociatedData(path, SymAssociatedData, 'drag', 'dragImportance', d.associatedDataPath)
      d.draggingPositionX = e.clientX
      d.draggingPositionY = e.clientY
      d.draggingModifiers = this.keyboard.modifiers
      d.revision++
    }
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected onPointerDown(e: PointerEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doPointerDown(
      grabAssociatedData(path, SymAssociatedData, 'pointer', 'pointerImportance', this.pointer.associatedDataPath),
      grabAssociatedData(path, SymAssociatedData, 'focus', 'focusImportance', this.focus.associatedDataPath),
      e.pointerId, e.buttons, e.clientX, e.clientY)

    if (this.pointer.down === PointerButton.Left) {
      const associatedDataPath = grabAssociatedData(path, SymAssociatedData, 'drag', 'dragImportance', [])
      const draggingOriginData = associatedDataPath[0] as AssociatedData | undefined
      if (draggingOriginData) {
        const d = this.drag
        d.dragStartChecking = true
        d.associatedDataPath = associatedDataPath
        d.draggingOriginData = draggingOriginData
        d.draggingStartX = e.clientX
        d.draggingStartY = e.clientY
        d.draggingModifiers = this.keyboard.modifiers
      }
    }
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected onPointerUp(e: PointerEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doPointerUp(
      grabAssociatedData(path, SymAssociatedData, 'pointer', 'pointerImportance', this.pointer.associatedDataPath),
      grabAssociatedData(path, SymAssociatedData, 'focus', 'focusImportance', this.focus.associatedDataPath),
      e.pointerId, e.buttons, e.clientX, e.clientY)

    const d = this.drag
    if (d.stage === DragStage.Dragging) {
      this.currentEvent = e
      Transaction.runAs({ standalone: true }, () => {
        d.stage = DragStage.Dropped
        d.associatedDataPath = grabAssociatedData(path, SymAssociatedData, 'drag', 'dragImportance', d.associatedDataPath)
        d.dropPositionX = e.clientX
        d.dropPositionY = e.clientY
        d.draggingModifiers = this.keyboard.modifiers
        d.dropped = true
        d.revision++
      })
      Transaction.runAs({ standalone: true }, () => {
        d.stage = DragStage.Finished
        d.revision++
      })
      d.reset()
      d.revision++
    }
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected onLostPointerCapture(e: PointerEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doPointerCancel(
      grabAssociatedData(path, SymAssociatedData, 'pointer', 'pointerImportance', this.pointer.associatedDataPath),
      grabAssociatedData(path, SymAssociatedData, 'focus', 'focusImportance', this.focus.associatedDataPath),
      e.pointerId, e.buttons, e.clientX, e.clientY)

    this.tryCancelDragging(this.drag, path)
    this.tryCancelDragging(this.htmlDrag, path)
  }

  protected tryCancelDragging(drag: DragSensor, path: any[]): void {
    if (drag.stage !== DragStage.Finished) {
      Transaction.runAs({ standalone: true }, () => {
        drag.stage = DragStage.Finished
        drag.associatedDataPath = grabAssociatedData(path, SymAssociatedData, 'drag', 'dragImportance', drag.associatedDataPath)
        const event = this.currentEvent as PointerEvent
        drag.dropPositionX = event.clientX
        drag.dropPositionY = event.clientY
        drag.draggingModifiers = this.keyboard.modifiers
        drag.dropped = false
        drag.revision++
      })
      drag.reset()
      drag.revision++
    }
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected onClick(e: MouseEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doClick(
      grabAssociatedData(path, SymAssociatedData, 'pointer', 'pointerImportance', this.pointer.associatedDataPath),
      grabAssociatedData(path, SymAssociatedData, 'focus', 'focusImportance', this.focus.associatedDataPath),
      PointerButton.Left, e.clientX, e.clientY)
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected onDblClick(e: MouseEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doDblClick(
      grabAssociatedData(path, SymAssociatedData, 'pointer', 'pointerImportance', this.pointer.associatedDataPath),
      grabAssociatedData(path, SymAssociatedData, 'focus', 'focusImportance', this.focus.associatedDataPath),
      PointerButton.Left, e.clientX, e.clientY)
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected onTouchStart(e: Event): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doTouchStart(
      grabAssociatedData(path, SymAssociatedData, 'pointer', 'pointerImportance', this.pointer.associatedDataPath),
      grabAssociatedData(path, SymAssociatedData, 'focus', 'focusImportance', this.focus.associatedDataPath))
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected onTouchEnd(e: Event): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doTouchEnd(
      grabAssociatedData(path, SymAssociatedData, 'pointer', 'pointerImportance', this.pointer.associatedDataPath))
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected onWheel(e: WheelEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doWheel(
      grabAssociatedData(path, SymAssociatedData, 'scroll', 'scrollImportance', this.scroll.associatedDataPath),
      grabAssociatedData(path, SymAssociatedData, 'focus', 'focusImportance', this.focus.associatedDataPath),
      e.deltaX, e.deltaY, e.clientX, e.clientY)
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected onKeyDown(e: KeyboardEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doKeyDown(
      grabAssociatedData(path, SymAssociatedData, 'keyboard', 'keyboardImportance', this.keyboard.associatedDataPath), e.key)
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected onKeyUp(e: KeyboardEvent): void {
    const path = e.composedPath()
    this.currentEvent = e
    this.doKeyUp(
      grabAssociatedData(path, SymAssociatedData, 'keyboard', 'keyboardImportance', this.keyboard.associatedDataPath), e.key)
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
    d.draggingModifiers = this.keyboard.modifiers
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

  @transaction @options({ trace: TraceLevel.Suppress })
  protected onResize(entries: Array<ResizeObserverEntry>): void {
    const r = this.resize
    r.revision++
    r.resizedElements = entries.map(entry => {
      const element = entry.target as Element
      return {
        borderBoxSize: entry.borderBoxSize,
        contentBoxSize: entry.contentBoxSize,
        contentRect: entry.contentRect,
        resizeData: element.associatedData.resize,
      }
    })
    r.associatedDataPath = entries.map(x => {
      const element = x.target as Element
      return element.associatedData
    })
  }

  protected setPointerCapture(pointerId: number): boolean {
    this.eventSource?.setPointerCapture(pointerId)
    return this.eventSource instanceof HTMLElement
  }

  protected releasePointerCapture(pointerId: number): boolean {
    this.eventSource?.releasePointerCapture(pointerId)
    return false
  }
}
