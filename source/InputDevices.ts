// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2020 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE

import { Sensitivity, sensitive, ToggleRef } from 'reactronic'
import { Context, Keyboard, Pointer, Scroll, PointerButton, KeyboardModifiers, NO_BINDINGS } from './InputDevice'

export interface AbstractInputDevices {
  readonly context: Readonly<Context>
  readonly keyboard: Readonly<Keyboard>
  readonly pointer: Readonly<Pointer>
  readonly scroll: Readonly<Scroll>
}

export class InputDevices implements AbstractInputDevices {
  readonly context = new Context()
  readonly keyboard = new Keyboard()
  readonly pointer = new Pointer()
  readonly scroll = new Scroll()

  resetFocus(): void {
    // should be re-defined in derived classes
  }

  protected trackFocus(focus: unknown[], force: boolean): void {
    if (focus.length > 0 || force)
      this.context.focus = switchBindings(this.context.focus, focus)
  }

  protected doFocusIn(focus: unknown[]): void {
    this.trackFocus(focus, false)
  }

  protected doFocusOut(focus: unknown[]): void {
    // This will cause HTMLElement.focus for elements with TrackFocus trigger
    !this.keyboard.down && sensitive(Sensitivity.TriggerEvenOnSameValueAssignment, () =>
      switchBindings(NO_BINDINGS, this.context.focus))
  }

  protected doPointerOver(bindings: unknown[], hoverBindings: unknown[], clientX: number, clientY: number): void {
    const p = this.pointer
    InputDevices.rememberPointer(p, clientX, clientY)
    p.bindings = bindings
    this.context.hover = switchBindings(this.context.hover, hoverBindings)
  }

  protected doPointerMove(bindings: unknown[], pointerId: number, clientX: number, clientY: number): void {
    const p = this.pointer
    InputDevices.rememberPointer(p, clientX, clientY)
    p.bindings = bindings
    if (p.draggableObject !== undefined) {
      if (!p.captured)
        p.captured = this.setPointerCapture(pointerId)
      if (p.captured && p.draggingObject === undefined && InputDevices.isDraggingDistance(p))
        p.draggingObject = p.draggableObject
    }
  }

  private static isDraggingDistance(p: Pointer): boolean {
    const distance = Math.max(
      Math.abs(p.positionX - p.draggingStartAtX),
      Math.abs(p.positionY - p.draggingStartAtY))
    return distance > Pointer.draggingThreshold
  }

  protected doPointerDown(bindings: unknown[], focus: unknown[],
    pointerId: number, buttons: number, clientX: number, clientY: number): void {
    const p = this.pointer
    InputDevices.rememberPointer(p, clientX, clientY)
    p.bindings = bindings
    this.trackFocus(focus, true)
    p.captured = false
    p.draggableObject = undefined
    p.draggingObject = undefined
    p.draggingStartAtX = p.positionX
    p.draggingStartAtY = p.positionY
    p.draggingModifiers = this.keyboard.modifiers
    p.down = buttons
  }

  protected doPointerUp(bindings: unknown[], focus: unknown[],
    pointerId: number, buttons: number, clientX: number, clientY: number): void {
    const p = this.pointer
    InputDevices.rememberPointer(p, clientX, clientY)
    p.bindings = bindings
    if (p.draggingObject !== undefined) {
      p.droppedObject = p.draggingObject
      p.droppedAtX = p.positionX
      p.droppedAtY = p.positionY
    }
    else if (!InputDevices.isDraggingDistance(p))
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

  protected doDblClick(bindings: unknown[], focus: unknown[],
    buttons: number, clientX: number, clientY: number): void {
    const p = this.pointer
    InputDevices.rememberPointer(p, clientX, clientY)
    p.bindings = bindings
    p.doubleClick = buttons
  }

  protected doTouchStart(bindings: unknown[], focus: unknown[]): void {
    const p = this.pointer
    p.bindings = bindings
    this.trackFocus(focus, true)
    p.touched = true
  }

  protected doTouchEnd(bindings: unknown[]): void {
    const p = this.pointer
    p.bindings = bindings
    p.touched = false
  }

  protected doWheel(bindings: unknown[], focus: unknown[],
    deltaX: number, deltaY: number, clientX: number, clientY: number): void {
    const scroll = this.scroll
    InputDevices.rememberPointer(this.pointer, clientX, clientY)
    scroll.bindings = bindings
    // this.trackFocus(focus, true)
    scroll.deltaX = deltaX
    scroll.deltaY = deltaY
  }

  protected doKeyDown(bindings: unknown[], key: string): void {
    const kb = this.keyboard
    kb.bindings = bindings
    kb.up = ''
    sensitive(Sensitivity.TriggerEvenOnSameValueAssignment, () => kb.down = key)
    kb.modifiers |= InputDevices.getKeyAsModifierIfAny(key)
  }

  protected doKeyUp(bindings: unknown[], key: string): void {
    const kb = this.keyboard
    kb.bindings = bindings
    kb.down = ''
    sensitive(Sensitivity.TriggerEvenOnSameValueAssignment, () => kb.up = key)
    kb.modifiers &= ~InputDevices.getKeyAsModifierIfAny(key)
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
      p.bindings = NO_BINDINGS
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

export function grabBindings<T = unknown>(path: any[], sym: symbol, existing: Array<T>): T[] {
  let result = existing
  let i = 0
  let j = 0
  while (i < path.length) {
    const x = path[i][sym]
    if (x !== undefined) {
      if (result !== existing)
        result.push(x)
      else if (x !== existing[j])
        result = existing.slice(0, j), result.push(x)
      else
        j++
    }
    i++
  }
  if (j === 0 && result === existing && existing.length > 0)
    result = []
  return result
}

export function switchBindings(existing: unknown[], updated: unknown[]): unknown[] {
  if (updated !== existing) {
    existing.forEach(x => {
      if (x instanceof ToggleRef && x.value1 !== x.value2)
        x.value = x.value2
    })
    updated.forEach(x => {
      if (x instanceof ToggleRef)
        x.value = x.value1
    })
  }
  return updated
}
