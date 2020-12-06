// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2020 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Sensitivity, sensitive, ToggleRef } from 'reactronic'
import { SensorDevice, Keyboard, Pointer, Scroll, PointerButton, KeyboardModifiers, EMPTY_EVENT_DATA_LIST } from './SensorDevices'
import { EventInfo, EventPayload, EventImportance } from './EventInfo'

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
    if (focus.length > 0 || force)
      this.focus.eventInfos = switchEventInfos(this.focus.eventInfos, focus)
  }

  protected doFocusIn(focus: unknown[]): void {
    this.trackFocus(focus, false)
  }

  protected doFocusOut(focus: unknown[]): void {
    // This will cause HTMLElement.focus for elements with TrackFocus reaction
    !this.keyboard.down && sensitive(Sensitivity.ReactEvenOnSameValueAssignment, () =>
      switchEventInfos(EMPTY_EVENT_DATA_LIST, this.focus.eventInfos))
  }

  protected doPointerOver(eventInfos: unknown[], hoverEventInfos: unknown[], clientX: number, clientY: number): void {
    const p = this.pointer
    Sensors.rememberPointer(p, clientX, clientY)
    p.eventInfos = eventInfos
    this.hover.eventInfos = switchEventInfos(this.hover.eventInfos, hoverEventInfos)
  }

  protected doPointerLeave(eventInfos: unknown[], hoverEventInfos: unknown[], clientX: number, clientY: number): void {
    // do nothing
  }

  protected doPointerMove(eventInfos: unknown[], pointerId: number, clientX: number, clientY: number): void {
    const p = this.pointer
    Sensors.rememberPointer(p, clientX, clientY)
    p.eventInfos = eventInfos
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

  protected doPointerDown(eventInfos: unknown[], focus: unknown[],
    pointerId: number, buttons: number, clientX: number, clientY: number): void {
    const p = this.pointer
    Sensors.rememberPointer(p, clientX, clientY)
    p.eventInfos = eventInfos
    this.trackFocus(focus, true)
    p.captured = false
    p.draggableObject = undefined
    p.draggingObject = undefined
    p.draggingStartAtX = p.positionX
    p.draggingStartAtY = p.positionY
    p.draggingModifiers = this.keyboard.modifiers
    p.down = buttons
  }

  protected doPointerUp(eventInfos: unknown[], focus: unknown[],
    pointerId: number, buttons: number, clientX: number, clientY: number): void {
    const p = this.pointer
    Sensors.rememberPointer(p, clientX, clientY)
    p.eventInfos = eventInfos
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

  protected doDblClick(eventInfos: unknown[], focus: unknown[],
    buttons: number, clientX: number, clientY: number): void {
    const p = this.pointer
    Sensors.rememberPointer(p, clientX, clientY)
    p.eventInfos = eventInfos
    p.doubleClick = buttons
  }

  protected doTouchStart(eventInfos: unknown[], focus: unknown[]): void {
    const p = this.pointer
    p.eventInfos = eventInfos
    this.trackFocus(focus, true)
    p.touched = true
  }

  protected doTouchEnd(eventInfos: unknown[]): void {
    const p = this.pointer
    p.eventInfos = eventInfos
    p.touched = false
  }

  protected doWheel(eventInfos: unknown[], focus: unknown[],
    deltaX: number, deltaY: number, clientX: number, clientY: number): void {
    const scroll = this.scroll
    Sensors.rememberPointer(this.pointer, clientX, clientY)
    scroll.eventInfos = eventInfos
    // this.trackFocus(focus, true)
    scroll.deltaX = deltaX
    scroll.deltaY = deltaY
  }

  protected doKeyDown(eventInfos: unknown[], key: string): void {
    const kb = this.keyboard
    kb.eventInfos = eventInfos
    kb.up = ''
    sensitive(Sensitivity.ReactEvenOnSameValueAssignment, () => kb.down = key)
    kb.modifiers |= Sensors.getKeyAsModifierIfAny(key)
  }

  protected doKeyUp(eventInfos: unknown[], key: string): void {
    const kb = this.keyboard
    kb.eventInfos = eventInfos
    kb.down = ''
    sensitive(Sensitivity.ReactEvenOnSameValueAssignment, () => kb.up = key)
    kb.modifiers &= ~Sensors.getKeyAsModifierIfAny(key)
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
      p.eventInfos = EMPTY_EVENT_DATA_LIST
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

export function grabEventInfos<T = unknown>(path: any[], sym: symbol,
  payloadKey: keyof EventPayload, importanceKey: keyof EventImportance,
  existing: Array<T>): T[] {
  let result = existing
  let i = 0
  let j = 0
  let importance = Number.MIN_SAFE_INTEGER
  while (i < path.length) {
    const info = path[i][sym] as EventInfo | undefined
    if (info !== undefined) {
      const payload = info[payloadKey] as T | undefined
      if (payload !== undefined) {
        const imp = info[importanceKey] ?? 0
        if (imp === importance) {
          // Handle event infos of the same importance
          if (result !== existing)
            result.push(payload)
          else if (payload !== existing[j])
            result = existing.slice(0, j), result.push(payload)
          else
            j++
        }
        else if (imp > importance) {
          // Raise events importance and start from scratch
          importance = imp
          result = existing
          if (payload !== existing[0])
            result = [payload]
          else
            j = 1
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

export function switchEventInfos(existing: unknown[], updated: unknown[]): unknown[] {
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
