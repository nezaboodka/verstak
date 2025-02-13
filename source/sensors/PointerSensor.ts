// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, unobservable, atomicAction, reaction, Reentrance, Transaction, LoggingLevel } from "reactronic"
import { extractPointerButton, isPointerButtonDown, PointerButton, BasePointerSensor } from "./BasePointerSensor.js"
import { findTargetElementData, SymDataForSensor } from "./DataForSensor.js"
import { extractModifierKeys, KeyboardModifiers } from "./KeyboardSensor.js"
import { WindowSensor } from "./WindowSensor.js"

export class PointerSensor extends BasePointerSensor {
  pointerButton: PointerButton
  @unobservable private clickable: unknown
  hotPositionX: number
  hotPositionY: number
  clicking: unknown
  clicked: unknown
  clickX: number // position relative to browser's viewport
  clickY: number // position relative to browser's viewport
  @unobservable private tryingDragging: boolean
  draggableData: unknown
  dragSource: unknown
  dragTarget: unknown
  dragTargetWindow: unknown
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

  constructor(element: HTMLElement | SVGElement, windowSensor: WindowSensor) {
    super(element, windowSensor)
    this.hotPositionX = Infinity
    this.hotPositionY = Infinity
    this.pointerButton = PointerButton.none
    this.tryingDragging = false
    this.clickable = undefined
    this.clicking = undefined
    this.clicked = undefined
    this.clickX = Infinity
    this.clickY = Infinity
    this.draggableData = undefined
    this.dragSource = undefined
    this.dragTarget = undefined
    this.dragTargetWindow = undefined
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
    this.modifiers = KeyboardModifiers.none
    this.dropX = Infinity
    this.dropY = Infinity
    this.dropped = false
    this.immediatePositionX = Infinity
    this.immediatePositionY = Infinity
    this.immediateModifiers = KeyboardModifiers.none
  }

  getData(): unknown {
    return this.draggingData
  }

  setData(value: unknown): void {
    this.draggingData = value
  }

  listen(enabled: boolean = true): void {
    const t = Transaction.current
    Transaction.outside(() => {
      t.whenFinished(true).then(() => {
        const element = this.sourceElement as HTMLElement // WORKAROUND (covers SVGElement cases)
        if (enabled) {
          element.addEventListener("pointerdown", this.onPointerDown.bind(this), { capture: true })
          element.addEventListener("pointermove", this.onPointerMove.bind(this), { capture: true })
          element.addEventListener("pointerup", this.onPointerUp.bind(this), { capture: true })
          element.addEventListener("lostpointercapture", this.onLostPointerCapture.bind(this), { capture: true })
          element.addEventListener("keydown", this.onKeyDown.bind(this), { capture: true })
        }
        else {
          // element.removeEventListener("pointerdown", this.onPointerDown.bind(this), { capture: true })
          // element.removeEventListener("pointermove", this.onPointerMove.bind(this), { capture: true })
          // element.removeEventListener("pointerup", this.onPointerUp.bind(this), { capture: true })
          // element.removeEventListener("lostpointercapture", this.onLostPointerCapture.bind(this), { capture: true })
          // element.removeEventListener("keydown", this.onKeyDown.bind(this), { capture: true })
        }
      }, e => { /* nop */ })
    })
  }

  protected onPointerDown(e: PointerEvent): void {
    // console.log(`pointer down -> ${(e.target as HTMLElement).id}`)
    this.sourceElement?.setPointerCapture(e.pointerId)
    const button = extractPointerButton(e)
    if (!this.dragStarted && this.clickable === undefined &&
      (button === PointerButton.left || button === PointerButton.right)) {
      this.tryClickingOrDragging(e)
    }
  }

  protected onPointerMove(e: PointerEvent): void {
    this.moveOver(e)
    if (isPointerButtonDown(this.pointerButton, e.buttons)) {
      if (this.tryingDragging) {
        if (Math.abs(e.clientX - this.startX) > PointerSensor.DraggingThreshold ||
          Math.abs(e.clientY - this.startY) > PointerSensor.DraggingThreshold) {
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
    this.sourceElement?.releasePointerCapture(e.pointerId)
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
    if (e.key === "Escape" && (this.dragStarted || this.clickable)) {
      this.cancelDragging()
      this.reset()
    }
  }

  @atomicAction @options({ logging: LoggingLevel.Off })
  protected moveOver(e: PointerEvent): void {
    this.immediatePositionX = e.clientX
    this.immediatePositionY = e.clientY
  }

  @atomicAction @options({ logging: LoggingLevel.Off })
  protected tryClickingOrDragging(e: PointerEvent): void {
    this.preventDefault = false
    this.stopPropagation = false
    const targetPath = e.composedPath()
    const underPointer = document.elementsFromPoint(e.clientX, e.clientY)
    const { data, window } = findTargetElementData(targetPath, underPointer, SymDataForSensor, ["click", "draggable"])
    const clickable = data?.click ?? this._getDefaultDataForSensor(e)
    const draggable = data?.draggable
    if (clickable || draggable) {
      this.clickable = clickable
      this.clicking = clickable
      this.draggableData = draggable
      this.tryingDragging = draggable !== undefined
      this.dragSource = findTargetElementData(targetPath, underPointer, SymDataForSensor, ["drag"], true).data?.drag
      this.pointerButton = extractPointerButton(e)
      this.startX = e.clientX
      this.startY = e.clientY
      this.modifiers = extractModifierKeys(e)
      this.positionX = e.clientX
      this.positionY = e.clientY
      this.dropped = false
      this.dragTarget = undefined
      this.dragTargetWindow = undefined
      this.previousDragTarget = undefined
      Transaction.isolate(() => {
        this.windowSensor?.setActiveWindow(window, "pointer")
      })
    }
    this.revision++
  }

  @atomicAction @options({ reentrance: Reentrance.cancelPrevious, logging: LoggingLevel.Off })
  protected clickingOver(e: PointerEvent): void {
    this.updateClicking(e)
    this.revision++
  }

  @atomicAction @options({ logging: LoggingLevel.Off })
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

  @atomicAction @options({ logging: LoggingLevel.Off })
  protected startDragging(e: PointerEvent): void {
    this.updateDragTarget(e)
    this.clickable = undefined
    this.dragStarted = true
    this.dragFinished = false
    this.tryingDragging = false
    this.dropped = false
    this.revision++
  }

  @atomicAction @options({ logging: LoggingLevel.Off })
  protected dragOver(e: PointerEvent): void {
    this.updateDragTarget(e)
    this.draggingOver = true
    this.dropped = false
    this.revision++
  }

  @atomicAction @options({ logging: LoggingLevel.Off })
  protected drop(e: PointerEvent): void {
    this.updateDragTarget(e)
    this.modifiers = this.immediateModifiers
    this.dropX = e.clientX
    this.dropY = e.clientY
    this.dropped = true
    this.revision++
  }

  @atomicAction @options({ logging: LoggingLevel.Off })
  protected finishDragging(): void {
    this.dragFinished = true
    this.tryingDragging = false
    this.revision++
  }

  @atomicAction @options({ logging: LoggingLevel.Off })
  protected cancelDragging(): void {
    this.dragFinished = true
    this.tryingDragging = false
    this.dropped = false
    this.revision++
  }

  @atomicAction @options({ logging: LoggingLevel.Off })
  protected reset(): void {
    this.pointerButton = PointerButton.none
    this.clickable = undefined
    this.clicking = undefined
    this.clicked = undefined
    this.clickX = Infinity
    this.clickY = Infinity
    this.tryingDragging = false
    this.draggableData = undefined
    this.dragSource = undefined
    this.dragTarget = undefined
    this.dragTargetWindow = undefined
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
    this.modifiers = KeyboardModifiers.none
    this.dropX = Infinity
    this.dropY = Infinity
    this.dropped = false
    this.immediatePositionX = Infinity
    this.immediatePositionY = Infinity
    this.immediateModifiers = KeyboardModifiers.none
    this.revision++
  }

  protected updateClicking(e: PointerEvent): boolean {
    const targetPath = e.composedPath()
    const underPointer = document.elementsFromPoint(e.clientX, e.clientY)
    let clickable = findTargetElementData(targetPath, underPointer, SymDataForSensor, ["click"]).data?.click
    clickable = clickable ?? this._getDefaultDataForSensor(e)
    const isSameClickable = this.clickable === clickable
    if (isSameClickable)
      this.clicking = clickable
    this.immediateModifiers = extractModifierKeys(e)
    this.immediatePositionX = e.clientX
    this.immediatePositionY = e.clientY
    return isSameClickable
  }

  private _getDefaultDataForSensor(e: PointerEvent): EventTarget | undefined {
    return e.currentTarget === this.sourceElement ? e.currentTarget : undefined
  }

  protected updateDragTarget(e: PointerEvent): void {
    const targetPath = e.composedPath()
    const underPointer = document.elementsFromPoint(e.clientX, e.clientY)
    const { data, window } = findTargetElementData(targetPath, underPointer, SymDataForSensor, ["drag"])
    const dragTarget = data?.drag
    if (dragTarget !== this.dragTarget) {
      this.previousDragTarget = this.dragTarget
      this.dragTarget = dragTarget
      this.dragTargetWindow = window
    }
    this.immediateModifiers = extractModifierKeys(e)
    this.immediatePositionX = e.clientX
    this.immediatePositionY = e.clientY
  }

  @reaction @options({ throttling: 0 })
  protected whenClickingOrDragging(): void {
    if (this.draggingOver || this.clickable) {
      this.positionX = this.immediatePositionX
      this.positionY = this.immediatePositionY
      this.modifiers = this.immediateModifiers
    }
  }

  @reaction @options({ throttling: 0 })
  protected whenMoving(): void {
    if (Number.isFinite(this.immediatePositionX) && Number.isFinite(this.immediatePositionY)) {
      this.hotPositionX = this.immediatePositionX
      this.hotPositionY = this.immediatePositionY
    }
  }

  // @reactive
  // protected debug(): void {
  //   this.revision // subscribe
  //   const status = this.getDebugStatus()
  //   console.log(`ClickDragSensor: (${status.join(', ')}), revision=${this.revision}`)
  //   if (this.clicking || this.clicked)
  //     console.log(`  ^==> clicking=${this.clicking}, clicked=${this.clicked}, start=(${this.startX}, ${this.startY}), pos=(${this.positionX}, ${this.positionY})`)
  //   if (this.dragStarted || this.draggingOver || this.dropped || this.dragFinished)
  //     console.log(`  ^==> dragSource=${this.dragSource}, dragTarget=${this.dragTarget}, start=(${this.startX}, ${this.startY}), pos=(${this.positionX}, ${this.positionY})`)
  // }

  // private getDebugStatus(): string[] {
  //   const status: string[] = []
  //   if (this.clicking)
  //     status.push('clicking')
  //   if (this.clicked)
  //     status.push('clicked')
  //   if (this.dragStarted)
  //     status.push('dragStarted')
  //   if (this.draggingOver)
  //     status.push('dragging')
  //   if (this.dropped)
  //     status.push('dropped')
  //   if (this.dragFinished)
  //     status.push('dragFinished')
  //   return status
  // }
}
