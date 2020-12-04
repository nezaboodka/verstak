// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2020 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Sensitivity, sensitive, FieldToggle } from 'reactronic'
import { Device, Keyboard, Pointer, Scroll, PointerButton, KeyboardModifiers, EMPTY_EVENT_DATA_LIST } from './Devices'
// import { EventData, EventDataPayload, EventDataPrimacy } from './EventData'

export interface AbstractSensors {
  readonly focus: Readonly<Device>
  readonly hover: Readonly<Device>
  readonly keyboard: Readonly<Keyboard>
  readonly pointer: Readonly<Pointer>
  readonly scroll: Readonly<Scroll>
}

export class Sensors implements AbstractSensors {
  readonly focus = new Device()
  readonly hover = new Device()
  readonly keyboard = new Keyboard()
  readonly pointer = new Pointer()
  readonly scroll = new Scroll()

  resetFocus(): void {
    // should be re-defined in derived classes
  }

  protected trackFocus(focus: unknown[], force: boolean): void {
    if (focus.length > 0 || force)
      this.focus.eventDataMix = switchEventDataMix(this.focus.eventDataMix, focus)
  }

  protected doFocusIn(focus: unknown[]): void {
    this.trackFocus(focus, false)
  }

  protected doFocusOut(focus: unknown[]): void {
    // This will cause HTMLElement.focus for elements with TrackFocus reaction
    !this.keyboard.down && sensitive(Sensitivity.ReactEvenOnSameValueAssignment, () =>
      switchEventDataMix(EMPTY_EVENT_DATA_LIST, this.focus.eventDataMix))
  }

  protected doPointerOver(eventDataMix: unknown[], hoverEventDataMix: unknown[], clientX: number, clientY: number): void {
    const p = this.pointer
    Sensors.rememberPointer(p, clientX, clientY)
    p.eventDataMix = eventDataMix
    this.hover.eventDataMix = switchEventDataMix(this.hover.eventDataMix, hoverEventDataMix)
  }

  protected doPointerLeave(eventDataMix: unknown[], hoverEventDataMix: unknown[], clientX: number, clientY: number): void {
    // do nothing
  }

  protected doPointerMove(eventDataMix: unknown[], pointerId: number, clientX: number, clientY: number): void {
    const p = this.pointer
    Sensors.rememberPointer(p, clientX, clientY)
    p.eventDataMix = eventDataMix
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

  protected doPointerDown(eventDataMix: unknown[], focus: unknown[],
    pointerId: number, buttons: number, clientX: number, clientY: number): void {
    const p = this.pointer
    Sensors.rememberPointer(p, clientX, clientY)
    p.eventDataMix = eventDataMix
    this.trackFocus(focus, true)
    p.captured = false
    p.draggableObject = undefined
    p.draggingObject = undefined
    p.draggingStartAtX = p.positionX
    p.draggingStartAtY = p.positionY
    p.draggingModifiers = this.keyboard.modifiers
    p.down = buttons
  }

  protected doPointerUp(eventDataMix: unknown[], focus: unknown[],
    pointerId: number, buttons: number, clientX: number, clientY: number): void {
    const p = this.pointer
    Sensors.rememberPointer(p, clientX, clientY)
    p.eventDataMix = eventDataMix
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

  protected doDblClick(eventDataMix: unknown[], focus: unknown[],
    buttons: number, clientX: number, clientY: number): void {
    const p = this.pointer
    Sensors.rememberPointer(p, clientX, clientY)
    p.eventDataMix = eventDataMix
    p.doubleClick = buttons
  }

  protected doTouchStart(eventDataMix: unknown[], focus: unknown[]): void {
    const p = this.pointer
    p.eventDataMix = eventDataMix
    this.trackFocus(focus, true)
    p.touched = true
  }

  protected doTouchEnd(eventDataMix: unknown[]): void {
    const p = this.pointer
    p.eventDataMix = eventDataMix
    p.touched = false
  }

  protected doWheel(eventDataMix: unknown[], focus: unknown[],
    deltaX: number, deltaY: number, clientX: number, clientY: number): void {
    const scroll = this.scroll
    Sensors.rememberPointer(this.pointer, clientX, clientY)
    scroll.eventDataMix = eventDataMix
    // this.trackFocus(focus, true)
    scroll.deltaX = deltaX
    scroll.deltaY = deltaY
  }

  protected doKeyDown(eventDataMix: unknown[], key: string): void {
    const kb = this.keyboard
    kb.eventDataMix = eventDataMix
    kb.up = ''
    sensitive(Sensitivity.ReactEvenOnSameValueAssignment, () => kb.down = key)
    kb.modifiers |= Sensors.getKeyAsModifierIfAny(key)
  }

  protected doKeyUp(eventDataMix: unknown[], key: string): void {
    const kb = this.keyboard
    kb.eventDataMix = eventDataMix
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
      p.eventDataMix = EMPTY_EVENT_DATA_LIST
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

// export function grabEventDataMix<T = unknown>(path: any[], sym: symbol,
//   dataKey: keyof EventDataPayload, primacyKey: keyof EventDataPrimacy, existing: Array<T>): T[] {
//   let result = existing
//   let i = 0
//   let j = 0
//   let primacy = 0
//   while (i < path.length) {
//     const item = path[i][sym] as EventData | undefined
//     if (item !== undefined) {
//       const d = item[dataKey] as T | undefined
//       if (d !== undefined) {
//         const p = item[primacyKey] ?? 0
//         if (result !== existing) {
//           if (p > primacy) {
//             result = []
//             primacy = p
//           }
//           if (p === primacy)
//             result.push(d)
//         }
//         else if (d !== existing[j]) {
//           result = existing.slice(0, j), result.push(d)
//         }
//         else
//           j++

//         if (p > primacy) {
//         }
//         else {
//         }
//       }
//     }
//     i++
//   }
//   if (j === 0 && result === existing && existing.length > 0)
//     result = []
//   return result
// }

export function switchEventDataMix(existing: unknown[], updated: unknown[]): unknown[] {
  if (updated !== existing) {
    existing.forEach(f => {
      if (f instanceof FieldToggle && f.value1 !== f.value2)
        f.value = f.value2
    })
    updated.forEach(x => {
      if (x instanceof FieldToggle)
        x.value = x.value1
    })
  }
  return updated
}
