// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { sensitive, ToggleRef } from 'reactronic'
import { Sensor, Keyboard, Pointer, Scroll, PointerButton, KeyboardModifiers, EmptyAssociatedDataArray } from './Sensor'
import { AssociatedData, AssociatedDataPayload, AssociatedDataImportance } from './AssociatedData'
import { SymAssociatedData } from '../html/HtmlApiExt'

export class Sensors {
  readonly focus = new Sensor()
  readonly hover = new Sensor()
  readonly keyboard = new Keyboard()
  readonly pointer = new Pointer()
  readonly scroll = new Scroll()

  resetFocus(): void {
    // should be re-defined in derived classes
  }

  protected trackFocus(focus: unknown[], force: boolean): void {
    if (focus.length > 0 || force) {
      const f = this.focus
      f.associatedDataPath = switchAssociatedDataList(f.associatedDataPath, focus)
      f.revision++
    }
  }

  protected doFocusIn(focus: unknown[]): void {
    this.trackFocus(focus, false)
  }

  protected doFocusOut(focus: unknown[]): void {
    // This will cause HTMLElement.focus for elements with TrackFocus reaction

    // !this.keyboard.down && sensitiveRun(Sensitivity.ReactEvenOnSameValueAssignment, () =>
    //   switchAssociatedDataList(EMPTY_EVENT_DATA_LIST, this.focus.associatedDataList))

    if (!this.keyboard.down) {
      const f = this.focus
      sensitive(true, () =>
        switchAssociatedDataList(EmptyAssociatedDataArray, this.focus.associatedDataPath))
      f.revision++
    }
  }

  protected doPointerOver(associatedDataList: unknown[], hoverAssociatedDataList: unknown[], clientX: number, clientY: number): void {
    const p = this.pointer
    const h = this.hover
    Sensors.rememberPointer(p, clientX, clientY)
    p.associatedDataPath = associatedDataList
    h.associatedDataPath = switchAssociatedDataList(this.hover.associatedDataPath, hoverAssociatedDataList)
    h.revision++
  }

  protected doPointerLeave(associatedDataList: unknown[], hoverAssociatedDataList: unknown[], clientX: number, clientY: number): void {
    // do nothing
  }

  protected doPointerMove(associatedDataList: unknown[], pointerId: number, clientX: number, clientY: number): void {
    const p = this.pointer
    Sensors.rememberPointer(p, clientX, clientY)
    p.associatedDataPath = associatedDataList
  }

  protected doPointerDown(associatedDataList: unknown[], focus: unknown[],
    pointerId: number, buttons: number, clientX: number, clientY: number): void {
    const p = this.pointer
    Sensors.rememberPointer(p, clientX, clientY)
    p.associatedDataPath = associatedDataList
    this.trackFocus(focus, true)
    p.captured = false
    p.down = buttons
  }

  protected doPointerUp(associatedDataList: unknown[], focus: unknown[],
    pointerId: number, buttons: number, clientX: number, clientY: number): void {
    const p = this.pointer
    Sensors.rememberPointer(p, clientX, clientY)
    p.associatedDataPath = associatedDataList
    p.up = p.down
    p.down = PointerButton.None
    if (p.captured)
      p.captured = this.releasePointerCapture(pointerId)
  }

  protected doPointerCancel(associatedDataList: unknown[], focus: unknown[],
    pointerId: number, buttons: number, clientX: number, clientY: number): void {
    const p = this.pointer
    Sensors.rememberPointer(p, clientX, clientY)
    p.associatedDataPath = associatedDataList
    p.up = PointerButton.None
    p.down = PointerButton.None
    p.captured = false
  }

  protected doClick(associatedDataList: unknown[], focus: unknown[],
    buttons: number, clientX: number, clientY: number): void {
    const p = this.pointer
    Sensors.rememberPointer(p, clientX, clientY)
    p.associatedDataPath = associatedDataList
    p.click = buttons
  }

  protected doDblClick(associatedDataList: unknown[], focus: unknown[],
    buttons: number, clientX: number, clientY: number): void {
    const p = this.pointer
    Sensors.rememberPointer(p, clientX, clientY)
    p.associatedDataPath = associatedDataList
    p.doubleClick = buttons
  }

  protected doTouchStart(associatedDataList: unknown[], focus: unknown[]): void {
    const p = this.pointer
    p.associatedDataPath = associatedDataList
    this.trackFocus(focus, true)
    p.touched = true
    p.revision++
  }

  protected doTouchEnd(associatedDataList: unknown[]): void {
    const p = this.pointer
    p.associatedDataPath = associatedDataList
    p.touched = false
    p.revision++
  }

  protected doWheel(associatedDataList: unknown[], focus: unknown[],
    deltaX: number, deltaY: number, clientX: number, clientY: number): void {
    const s = this.scroll
    Sensors.rememberPointer(this.pointer, clientX, clientY)
    s.associatedDataPath = associatedDataList
    // this.trackFocus(focus, true)
    s.deltaX = deltaX
    s.deltaY = deltaY
    s.revision++
  }

  protected doKeyDown(associatedDataList: unknown[], key: string): void {
    const kb = this.keyboard
    kb.associatedDataPath = associatedDataList
    kb.up = ''
    sensitive(true, () => kb.down = key)
    kb.modifiers |= Sensors.getKeyAsModifierIfAny(key)
    kb.revision++
  }

  protected doKeyUp(associatedDataList: unknown[], key: string): void {
    const kb = this.keyboard
    kb.associatedDataPath = associatedDataList
    kb.down = ''
    sensitive(true, () => kb.up = key)
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

  protected static rememberPointer(p: Pointer, clientX: number, clientY: number): void {
    if (p.down === PointerButton.None) {
      p.associatedDataPath = EmptyAssociatedDataArray
      p.up = PointerButton.None
      p.click = PointerButton.None
      p.doubleClick = PointerButton.None
    }
    const elements = document.elementsFromPoint(clientX, clientY)
    const associatedData = grabAssociatedData(elements, SymAssociatedData, 'pointer', 'pointerImportance', p.associatedDataUnderPointer)
    p.associatedDataUnderPointer = associatedData
    p.topAssociatedDataUnderPointer = associatedData.length > 0 ? associatedData[0] : undefined
    p.previousPositionX = p.positionX
    p.previousPositionY = p.positionY
    p.positionX = clientX
    p.positionY = clientY
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

export function grabAssociatedData(elements: any[], sym: symbol,
  payloadKey: keyof AssociatedDataPayload, importanceKey: keyof AssociatedDataImportance,
  existing: Array<unknown>): Array<unknown> {
  let result = existing
  let i = 0
  let j = 0
  let importance = Number.MIN_SAFE_INTEGER
  while (i < elements.length) {
    const data = elements[i][sym] as AssociatedData | undefined
    if (data !== undefined) {
      const payload = data[payloadKey]
      let imp = data[importanceKey]
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
            result = EmptyAssociatedDataArray
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
    result = EmptyAssociatedDataArray
  return result
}

export function switchAssociatedDataList(existing: unknown[], updated: unknown[]): unknown[] {
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
