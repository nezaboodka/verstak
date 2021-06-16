// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Sensitivity, sensitive, ToggleRef } from 'reactronic'
import { SensorDevice, Keyboard, Pointer, Scroll, PointerButton, KeyboardModifiers, EMPTY_EVENT_DATA_LIST } from './SensorDevices'
import { Signals, SignalsPayload, SignalsImportance } from './Signals'

export interface AbstractSensors {
  readonly focus: Readonly<SensorDevice>
  readonly hover: Readonly<SensorDevice>
  readonly keyboard: Readonly<Keyboard>
  readonly pointer: Readonly<Pointer>
  readonly scroll: Readonly<Scroll>
}

export class Sensors implements AbstractSensors {
  readonly focus = new SensorDevice()
  readonly hover = new SensorDevice()
  readonly keyboard = new Keyboard()
  readonly pointer = new Pointer()
  readonly scroll = new Scroll()

  resetFocus(): void {
    // should be re-defined in derived classes
  }

  protected trackFocus(focus: unknown[], force: boolean): void {
    if (focus.length > 0 || force) {
      const f = this.focus
      f.signals = switchSignals(f.signals, focus)
      f.revision++
    }
  }

  protected doFocusIn(focus: unknown[]): void {
    this.trackFocus(focus, false)
  }

  protected doFocusOut(focus: unknown[]): void {
    // This will cause HTMLElement.focus for elements with TrackFocus reaction

    // !this.keyboard.down && sensitiveRun(Sensitivity.ReactEvenOnSameValueAssignment, () =>
    //   switchSignals(EMPTY_EVENT_DATA_LIST, this.focus.signals))

    if (!this.keyboard.down) {
      const f = this.focus
      sensitive(Sensitivity.ReactEvenOnSameValueAssignment, () =>
        switchSignals(EMPTY_EVENT_DATA_LIST, this.focus.signals))
      f.revision++
    }
  }

  protected doPointerOver(signals: unknown[], hoverSignals: unknown[], clientX: number, clientY: number): void {
    const p = this.pointer
    const h = this.hover
    Sensors.rememberPointer(p, clientX, clientY)
    p.signals = signals
    h.signals = switchSignals(this.hover.signals, hoverSignals)
    h.revision++
  }

  protected doPointerLeave(signals: unknown[], hoverSignals: unknown[], clientX: number, clientY: number): void {
    // do nothing
  }

  protected doPointerMove(signals: unknown[], pointerId: number, clientX: number, clientY: number): void {
    const p = this.pointer
    Sensors.rememberPointer(p, clientX, clientY)
    p.signals = signals
    if (p.draggableObject !== undefined) {
      if (!p.captured)
        p.captured = this.setPointerCapture(pointerId)
      if (p.captured && p.draggingObject === undefined && Sensors.isDraggingDistance(p))
        p.draggingObject = p.draggableObject
    }
  }

  private static isDraggingDistance(p: Pointer): boolean {
    const distance = Math.max(
      Math.abs(p.positionX - p.draggingStartAtX),
      Math.abs(p.positionY - p.draggingStartAtY))
    return distance > Pointer.draggingThreshold
  }

  protected doPointerDown(signals: unknown[], focus: unknown[],
    pointerId: number, buttons: number, clientX: number, clientY: number): void {
    const p = this.pointer
    Sensors.rememberPointer(p, clientX, clientY)
    p.signals = signals
    this.trackFocus(focus, true)
    p.captured = false
    p.draggableObject = undefined
    p.draggingObject = undefined
    p.draggingStartAtX = p.positionX
    p.draggingStartAtY = p.positionY
    p.draggingModifiers = this.keyboard.modifiers
    p.down = buttons
  }

  protected doPointerUp(signals: unknown[], focus: unknown[],
    pointerId: number, buttons: number, clientX: number, clientY: number): void {
    const p = this.pointer
    Sensors.rememberPointer(p, clientX, clientY)
    p.signals = signals
    if (p.draggingObject !== undefined) {
      p.droppedObject = p.draggingObject
      p.droppedAtX = p.positionX
      p.droppedAtY = p.positionY
    }
    else if (!Sensors.isDraggingDistance(p))
      p.click = p.down
    p.draggableObject = undefined
    p.draggingObject = undefined
    p.draggingModifiers = KeyboardModifiers.None
    p.draggingStartAtX = Infinity
    p.draggingStartAtY = Infinity
    p.up = p.down
    p.down = PointerButton.None
    if (p.captured)
      p.captured = this.releasePointerCapture(pointerId)
  }

  protected doPointerCancel(signals: unknown[], focus: unknown[],
    pointerId: number, buttons: number, clientX: number, clientY: number): void {
    const p = this.pointer
    Sensors.rememberPointer(p, clientX, clientY)
    p.signals = signals
    p.draggableObject = undefined
    p.draggingObject = undefined
    p.draggingModifiers = KeyboardModifiers.None
    p.draggingStartAtX = Infinity
    p.draggingStartAtY = Infinity
    p.up = PointerButton.None
    p.down = PointerButton.None
    p.captured = false
    console.log('----------doPointerCancel-----------')
  }

  protected doDblClick(signals: unknown[], focus: unknown[],
    buttons: number, clientX: number, clientY: number): void {
    const p = this.pointer
    Sensors.rememberPointer(p, clientX, clientY)
    p.signals = signals
    p.doubleClick = buttons
  }

  protected doTouchStart(signals: unknown[], focus: unknown[]): void {
    const p = this.pointer
    p.signals = signals
    this.trackFocus(focus, true)
    p.touched = true
    p.revision++
  }

  protected doTouchEnd(signals: unknown[]): void {
    const p = this.pointer
    p.signals = signals
    p.touched = false
    p.revision++
  }

  protected doWheel(signals: unknown[], focus: unknown[],
    deltaX: number, deltaY: number, clientX: number, clientY: number): void {
    const s = this.scroll
    Sensors.rememberPointer(this.pointer, clientX, clientY)
    s.signals = signals
    // this.trackFocus(focus, true)
    s.deltaX = deltaX
    s.deltaY = deltaY
    s.revision++
  }

  protected doKeyDown(signals: unknown[], key: string): void {
    const kb = this.keyboard
    kb.signals = signals
    kb.up = ''
    sensitive(Sensitivity.ReactEvenOnSameValueAssignment, () => kb.down = key)
    kb.modifiers |= Sensors.getKeyAsModifierIfAny(key)
    kb.revision++
  }

  protected doKeyUp(signals: unknown[], key: string): void {
    const kb = this.keyboard
    kb.signals = signals
    kb.down = ''
    sensitive(Sensitivity.ReactEvenOnSameValueAssignment, () => kb.up = key)
    kb.modifiers &= ~Sensors.getKeyAsModifierIfAny(key)
    kb.revision++
  }

  // Internal

  protected setPointerCapture(pointerId: number): boolean {
    return false
  }

  protected releasePointerCapture(pointerId: number): boolean {
    return false
  }

  private static rememberPointer(p: Pointer, clientX: number, clientY: number): void {
    if (p.down === PointerButton.None) {
      p.signals = EMPTY_EVENT_DATA_LIST
      p.up = PointerButton.None
      p.click = PointerButton.None
      p.doubleClick = PointerButton.None
    }
    p.previousPositionX = p.positionX
    p.previousPositionY = p.positionY
    p.positionX = clientX
    p.positionY = clientY
    p.droppedObject = undefined
    p.droppedAtX = Infinity
    p.droppedAtY = Infinity
    p.revision++
  }

  private static getKeyAsModifierIfAny(key: string): KeyboardModifiers {
    let modifier = KeyboardModifiers.None
    if (key === 'Control')
      modifier = KeyboardModifiers.Ctrl
    else if (key === 'Shift')
      modifier = KeyboardModifiers.Shift
    else if (key === 'Alt')
      modifier = KeyboardModifiers.Alt
    else if (key === 'Meta')
      modifier = KeyboardModifiers.Meta
    return modifier
  }

  static extractModifierKeys(e: PointerEvent | KeyboardEvent | WheelEvent): KeyboardModifiers {
    let modifiers = KeyboardModifiers.None
    if (e.ctrlKey)
      modifiers |= KeyboardModifiers.Ctrl
    else
      modifiers &= ~KeyboardModifiers.Ctrl
    if (e.shiftKey)
      modifiers |= KeyboardModifiers.Shift
    else
      modifiers &= ~KeyboardModifiers.Shift
    if (e.altKey)
      modifiers |= KeyboardModifiers.Alt
    else
      modifiers &= ~KeyboardModifiers.Alt
    if (e.metaKey)
      modifiers |= KeyboardModifiers.Meta
    else
      modifiers &= ~KeyboardModifiers.Meta
    return modifiers
  }
}

export function grabElementSignals<T = unknown>(path: any[], sym: symbol,
  payloadKey: keyof SignalsPayload, importanceKey: keyof SignalsImportance,
  existing: Array<T>): T[] {
  let result = existing
  let i = 0
  let j = 0
  let importance = Number.MIN_SAFE_INTEGER
  while (i < path.length) {
    const signals = path[i][sym] as Signals | undefined
    if (signals !== undefined) {
      const payload = signals[payloadKey] as T | undefined
      let imp = signals[importanceKey]
      if (payload !== undefined || imp !== undefined) {
        imp = imp ?? 0
        if (imp === importance) {
          // Handle event infos of the same importance
          if (result !== existing)
            payload !== undefined && result.push(payload)
          else if (payload !== undefined) {
            if (payload !== existing[j])
              result = existing.slice(0, j), result.push(payload)
            else
              j++
          }
          else {
            result = existing.slice(0, j)
          }
        }
        else if (imp > importance) {
          // Raise events importance and start from scratch
          importance = imp
          result = existing
          if (payload !== undefined) {
            if (payload !== existing[0])
              result = [payload]
            else
              j = 1
          }
          else {
            result = []
          }
        }
        else {
          // Ignore event infos with lower importance
        }
      }
    }
    i++
  }
  if (j === 0 && result === existing && existing.length > 0)
    result = []
  return result
}

export function switchSignals(existing: unknown[], updated: unknown[]): unknown[] {
  if (updated !== existing) {
    existing.forEach(f => {
      if (f instanceof ToggleRef && f.value1 !== f.value2)
        f.value = f.value2
    })
    updated.forEach(x => {
      if (x instanceof ToggleRef)
        x.value = x.value1
    })
  }
  return updated
}
