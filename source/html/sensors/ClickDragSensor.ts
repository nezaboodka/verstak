// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, reaction, Reentrance, standalone, TraceLevel, transaction, unobservable } from 'reactronic'
import { extractPointerButton, isPointerButtonDown, PointerButton, PointerSensor } from './PointerSensor'
import { DataForSensor, EmptyDataArray, grabElementData, SymDataForSensor } from './DataForSensor'
import { extractModifierKeys, KeyboardModifiers } from './KeyboardSensor'
import { WindowSensor } from './WindowSensor'

export class ClickDragSensor extends PointerSensor {
  pointerButton: PointerButton
  @unobservable private clickable: unknown
  clicking: unknown
  clicked: unknown
  clickX: number // position relative to browser's viewport
  clickY: number // position relative to browser's viewport
  @unobservable private tryingDragging: boolean
  draggableData: unknown
  dragSource: unknown
  dragTarget: unknown
  previousDragTarget: unknown
  dragStarted: boolean
  dragFinished: boolean
  startX: number // position relative to browser's viewport
  startY: number // position relative to browser's viewport
  @unobservable private draggingData: unknown
  @unobservable dropAllowed: boolean
  draggingOver: boolean
  positionX: number // position relative to browser's viewport
  positionY: number // position relative to browser's viewport
  modifiers: KeyboardModifiers
  dropX: number // position relative to browser's viewport
  dropY: number // position relative to browser's viewport
  dropped: boolean
  immediatePositionX: number // position relative to browser's viewport
  immediatePositionY: number // position relative to browser's viewport
  immediateModifiers: KeyboardModifiers

  static readonly DraggingThreshold = 4

  constructor(windowSensor: WindowSensor) {
    super(windowSensor)
    this.pointerButton = PointerButton.None
    this.tryingDragging = false
    this.clickable = undefined
    this.clicking = undefined
    this.clicked = undefined
    this.clickX = Infinity
    this.clickY = Infinity
    this.draggableData = undefined
    this.dragSource = undefined
    this.dragTarget = undefined
    this.previousDragTarget = undefined
    this.dragStarted = false
    this.dragFinished = false
    this.startX = Infinity
    this.startY = Infinity
    this.draggingData = undefined
    this.dropAllowed = false
    this.draggingOver = false
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

  getData(): unknown {
    return this.draggingData
  }

  setData(value: unknown): void {
    this.draggingData = value
  }

  @transaction
  listen(element: HTMLElement | undefined, enabled: boolean = true): void {
    const existing = this.sourceElement
    if (element !== existing) {
      if (existing) {
        existing.removeEventListener('pointerdown', this.onPointerDown.bind(this), { capture: true })
        existing.removeEventListener('pointermove', this.onPointerMove.bind(this), { capture: true })
        existing.removeEventListener('pointerup', this.onPointerUp.bind(this), { capture: true })
        existing.removeEventListener('lostpointercapture', this.onLostPointerCapture.bind(this), { capture: true })
        existing.removeEventListener('keydown', this.onKeyDown.bind(this), { capture: true })
      }
      this.sourceElement = element
      if (element && enabled) {
        element.addEventListener('pointerdown', this.onPointerDown.bind(this), { capture: true })
        element.addEventListener('pointermove', this.onPointerMove.bind(this), { capture: true })
        element.addEventListener('pointerup', this.onPointerUp.bind(this), { capture: true })
        element.addEventListener('lostpointercapture', this.onLostPointerCapture.bind(this), { capture: true })
        element.addEventListener('keydown', this.onKeyDown.bind(this), { capture: true })
      }
    }
  }

  protected onPointerDown(e: PointerEvent): void {

    console.log('ClickDragSensor: ====== onPointerDown')

    // this.sourceElement?.setPointerCapture(e.pointerId)
    const button = extractPointerButton(e)
    if (!this.dragStarted && this.clickable === undefined &&
      (button === PointerButton.Left || button === PointerButton.Right)) {
      this.tryClickingOrDragging(e)
    }
  }

  protected onPointerMove(e: PointerEvent): void {
    if (isPointerButtonDown(this.pointerButton, e.buttons)) {
      if (this.tryingDragging) {
        if (Math.abs(e.clientX - this.startX) > ClickDragSensor.DraggingThreshold ||
          Math.abs(e.clientY - this.startY) > ClickDragSensor.DraggingThreshold) {
          this.startDragging(e)
        }
      }
      else if (this.dragStarted) {
        this.dragOver(e)
      }
      else if (this.clickable) {
        this.clickingOver(e)
      }
    }
    else {
      if (this.dragStarted) {
        this.cancelDragging()
        this.reset()
      }
      else if (this.clickable) {
        this.reset()
      }
    }
  }

  protected onPointerUp(e: PointerEvent): void {
    // this.sourceElement?.releasePointerCapture(e.pointerId)
    if (this.draggingOver) {
      this.drop(e)
      this.finishDragging()
    }
    else if (this.dragStarted) {
      this.finishDragging()
    }
    else if (this.clickable) {
      this.click(e)
    }
    this.reset()
  }

  protected onLostPointerCapture(e: PointerEvent): void {
    if (this.dragStarted || this.clickable) {
      this.cancelDragging()
      this.reset()
    }
  }

  protected onKeyDown(e: KeyboardEvent): void {
    if (e.key === 'Escape' && (this.dragStarted || this.clickable)) {
      this.cancelDragging()
      this.reset()
    }
  }

  @transaction @options({ trace: TraceLevel.Silent })
  protected tryClickingOrDragging(e: PointerEvent): void {
    this.preventDefault = false
    this.stopPropagation = false
    const target: any = e.target
    const targetData = target[SymDataForSensor] as DataForSensor | undefined
    const clickable = targetData?.click
    const draggable = targetData?.draggable
    if (clickable || draggable) {
      this.clickable = clickable
      this.clicking = clickable
      this.draggableData = draggable
      this.tryingDragging = draggable !== undefined
      const sourceElements = e.composedPath()
      const { data, window } = grabElementData(sourceElements, SymDataForSensor, 'drag', EmptyDataArray)
      this.elementDataList = data
      this.dragSource = data[0]
      this.pointerButton = extractPointerButton(e)
      this.startX = e.clientX
      this.startY = e.clientY
      this.modifiers = extractModifierKeys(e)
      this.positionX = e.clientX
      this.positionY = e.clientY
      this.dropped = false
      this.dragTarget = undefined
      this.previousDragTarget = undefined
      standalone(() => {
        this.windowSensor?.setActiveWindow(window, 'pointer')
      })
    }
    this.revision++
  }

  @transaction @options({ reentrance: Reentrance.CancelPrevious, trace: TraceLevel.Silent })
  protected clickingOver(e: PointerEvent): void {
    this.updateClicking(e)
    this.revision++
  }

  @transaction @options({ trace: TraceLevel.Silent })
  protected click(e: PointerEvent): void {
    if (this.updateClicking(e)) {
      this.modifiers = this.immediateModifiers
      this.clickX = e.clientX
      this.clickY = e.clientY
      this.clicked = this.clicking
    }
    this.clickable = undefined
    this.revision++
  }

  @transaction @options({ trace: TraceLevel.Silent })
  protected startDragging(e: PointerEvent): void {
    this.updateDragTarget(e)
    this.clickable = undefined
    this.dragStarted = true
    this.dragFinished = false
    this.tryingDragging = false
    this.dropped = false
    this.revision++
  }

  @transaction @options({ trace: TraceLevel.Silent })
  protected dragOver(e: PointerEvent): void {
    this.updateDragTarget(e)
    this.draggingOver = true
    this.dropped = false
    this.revision++
  }

  @transaction @options({ trace: TraceLevel.Silent })
  protected drop(e: PointerEvent): void {
    this.updateDragTarget(e)
    this.modifiers = this.immediateModifiers
    this.dropX = e.clientX
    this.dropY = e.clientY
    this.dropped = true
    this.revision++
  }

  @transaction @options({ trace: TraceLevel.Silent })
  protected finishDragging(): void {
    this.dragFinished = true
    this.tryingDragging = false
    this.revision++
  }

  @transaction @options({ trace: TraceLevel.Silent })
  protected cancelDragging(): void {
    this.dragFinished = true
    this.tryingDragging = false
    this.dropped = false
    this.revision++
  }

  @transaction @options({ trace: TraceLevel.Silent })
  protected reset(): void {
    this.elementDataList = EmptyDataArray
    this.pointerButton = PointerButton.None
    this.clickable = undefined
    this.clicking = undefined
    this.clicked = undefined
    this.clickX = Infinity
    this.clickY = Infinity
    this.tryingDragging = false
    this.draggableData = undefined
    this.dragSource = undefined
    this.dragTarget = undefined
    this.previousDragTarget = undefined
    this.dragStarted = false
    this.dragFinished = false
    this.startX = Infinity
    this.startY = Infinity
    this.draggingData = undefined
    this.dropAllowed = false
    this.draggingOver = false
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

  protected updateClicking(e: PointerEvent): boolean {
    const target: any = e.target
    const targetData = target[SymDataForSensor] as DataForSensor | undefined
    const clickable = targetData?.click
    const isSameClickable = this.clickable === clickable
    if (isSameClickable)
      this.clicking = clickable
    this.immediateModifiers = extractModifierKeys(e)
    this.immediatePositionX = e.clientX
    this.immediatePositionY = e.clientY
    return isSameClickable
  }

  protected updateDragTarget(e: PointerEvent): unknown {
    const path = e.composedPath()
    const { data, window } = grabElementData(path, SymDataForSensor, 'drag', this.elementDataList)
    this.elementDataList = data
    const dragTarget = data[0]
    if (dragTarget !== this.dragTarget) {
      this.previousDragTarget = this.dragTarget
      this.dragTarget = dragTarget
    }
    this.immediateModifiers = extractModifierKeys(e)
    this.immediatePositionX = e.clientX
    this.immediatePositionY = e.clientY
    return window
  }

  @reaction @options({ throttling: 0 })
  protected whenClickingOrDragging(): void {
    if (this.draggingOver || this.clickable) {
      this.positionX = this.immediatePositionX
      this.positionY = this.immediatePositionY
      this.modifiers = this.immediateModifiers
    }
  }

  // @reaction
  protected debug(): void {
    this.revision // subscribe
    const status = this.getDebugStatus()
    console.log(`ClickDragSensor: (${status.join(', ')}), revision=${this.revision}`)
    if (this.clicking || this.clicked)
      console.log(`  ^==> clicking=${this.clicking}, clicked=${this.clicked}, start=(${this.startX}, ${this.startY}), pos=(${this.positionX}, ${this.positionY})`)
    if (this.dragStarted || this.draggingOver || this.dropped || this.dragFinished)
      console.log(`  ^==> dragSource=${this.dragSource}, dragTarget=${this.dragTarget}, start=(${this.startX}, ${this.startY}), pos=(${this.positionX}, ${this.positionY})`)
  }

  private getDebugStatus(): string[] {
    const status: string[] = []
    if (this.clicking)
      status.push('clicking')
    if (this.clicked)
      status.push('clicked')
    if (this.dragStarted)
      status.push('dragStarted')
    if (this.draggingOver)
      status.push('dragging')
    if (this.dropped)
      status.push('dropped')
    if (this.dragFinished)
      status.push('dragFinished')
    return status
  }
}
