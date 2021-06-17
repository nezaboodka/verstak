// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Sensitivity, sensitive, ToggleRef } from 'reactronic'
import { Sensor, Keyboard, Pointer, Scroll, PointerButton, KeyboardModifiers, EMPTY_EVENT_DATA_LIST } from './Sensor'
import { SensorData, SensorDataPayload, SensorDataImportance } from './SensorData'

export interface AbstractSensors {
  readonly focus: Readonly<Sensor>
  readonly hover: Readonly<Sensor>
  readonly keyboard: Readonly<Keyboard>
  readonly pointer: Readonly<Pointer>
  readonly scroll: Readonly<Scroll>
}

export class Sensors implements AbstractSensors {
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
      f.sensorDataList = switchSensorDataList(f.sensorDataList, focus)
      f.revision++
    }
  }

  protected doFocusIn(focus: unknown[]): void {
    this.trackFocus(focus, false)
  }

  protected doFocusOut(focus: unknown[]): void {
    // This will cause HTMLElement.focus for elements with TrackFocus reaction

    // !this.keyboard.down && sensitiveRun(Sensitivity.ReactEvenOnSameValueAssignment, () =>
    //   switchSensorDataList(EMPTY_EVENT_DATA_LIST, this.focus.sensorDataList))

    if (!this.keyboard.down) {
      const f = this.focus
      sensitive(Sensitivity.ReactEvenOnSameValueAssignment, () =>
        switchSensorDataList(EMPTY_EVENT_DATA_LIST, this.focus.sensorDataList))
      f.revision++
    }
  }

  protected doPointerOver(sensorDataList: unknown[], hoverSensorDataList: unknown[], clientX: number, clientY: number): void {
    const p = this.pointer
    const h = this.hover
    Sensors.rememberPointer(p, clientX, clientY)
    p.sensorDataList = sensorDataList
    h.sensorDataList = switchSensorDataList(this.hover.sensorDataList, hoverSensorDataList)
    h.revision++
  }

  protected doPointerLeave(sensorDataList: unknown[], hoverSensorDataList: unknown[], clientX: number, clientY: number): void {
    // do nothing
  }

  protected doPointerMove(sensorDataList: unknown[], pointerId: number, clientX: number, clientY: number): void {
    const p = this.pointer
    Sensors.rememberPointer(p, clientX, clientY)
    p.sensorDataList = sensorDataList
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

  protected doPointerDown(sensorDataList: unknown[], focus: unknown[],
    pointerId: number, buttons: number, clientX: number, clientY: number): void {
    const p = this.pointer
    Sensors.rememberPointer(p, clientX, clientY)
    p.sensorDataList = sensorDataList
    this.trackFocus(focus, true)
    p.captured = false
    p.draggableObject = undefined
    p.draggingObject = undefined
    p.draggingStartAtX = p.positionX
    p.draggingStartAtY = p.positionY
    p.draggingModifiers = this.keyboard.modifiers
    p.down = buttons
  }

  protected doPointerUp(sensorDataList: unknown[], focus: unknown[],
    pointerId: number, buttons: number, clientX: number, clientY: number): void {
    const p = this.pointer
    Sensors.rememberPointer(p, clientX, clientY)
    p.sensorDataList = sensorDataList
    if (p.draggingObject !== undefined) {
      p.droppedObject = p.draggingObject
      p.droppedAtX = p.positionX
      p.droppedAtY = p.positionY
    }
    // else if (!Sensors.isDraggingDistance(p))
    //   p.click = p.down
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

  protected doPointerCancel(sensorDataList: unknown[], focus: unknown[],
    pointerId: number, buttons: number, clientX: number, clientY: number): void {
    const p = this.pointer
    Sensors.rememberPointer(p, clientX, clientY)
    p.sensorDataList = sensorDataList
    p.draggableObject = undefined
    p.draggingObject = undefined
    p.draggingModifiers = KeyboardModifiers.None
    p.draggingStartAtX = Infinity
    p.draggingStartAtY = Infinity
    p.up = PointerButton.None
    p.down = PointerButton.None
    p.captured = false
    // console.log('----------doPointerCancel-----------')
  }

  protected doClick(sensorDataList: unknown[], focus: unknown[],
    buttons: number, clientX: number, clientY: number): void {
    const p = this.pointer
    Sensors.rememberPointer(p, clientX, clientY)
    p.sensorDataList = sensorDataList
    if (p.draggableObject === undefined)
      p.click = buttons
  }

  protected doDblClick(sensorDataList: unknown[], focus: unknown[],
    buttons: number, clientX: number, clientY: number): void {
    const p = this.pointer
    Sensors.rememberPointer(p, clientX, clientY)
    p.sensorDataList = sensorDataList
    p.doubleClick = buttons
  }

  protected doTouchStart(sensorDataList: unknown[], focus: unknown[]): void {
    const p = this.pointer
    p.sensorDataList = sensorDataList
    this.trackFocus(focus, true)
    p.touched = true
    p.revision++
  }

  protected doTouchEnd(sensorDataList: unknown[]): void {
    const p = this.pointer
    p.sensorDataList = sensorDataList
    p.touched = false
    p.revision++
  }

  protected doWheel(sensorDataList: unknown[], focus: unknown[],
    deltaX: number, deltaY: number, clientX: number, clientY: number): void {
    const s = this.scroll
    Sensors.rememberPointer(this.pointer, clientX, clientY)
    s.sensorDataList = sensorDataList
    // this.trackFocus(focus, true)
    s.deltaX = deltaX
    s.deltaY = deltaY
    s.revision++
  }

  protected doKeyDown(sensorDataList: unknown[], key: string): void {
    const kb = this.keyboard
    kb.sensorDataList = sensorDataList
    kb.up = ''
    sensitive(Sensitivity.ReactEvenOnSameValueAssignment, () => kb.down = key)
    kb.modifiers |= Sensors.getKeyAsModifierIfAny(key)
    kb.revision++
  }

  protected doKeyUp(sensorDataList: unknown[], key: string): void {
    const kb = this.keyboard
    kb.sensorDataList = sensorDataList
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
      p.sensorDataList = EMPTY_EVENT_DATA_LIST
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

export function grabSensorDataList<T = unknown>(path: any[], sym: symbol,
  payloadKey: keyof SensorDataPayload, importanceKey: keyof SensorDataImportance,
  existing: Array<T>): T[] {
  let result = existing
  let i = 0
  let j = 0
  let importance = Number.MIN_SAFE_INTEGER
  while (i < path.length) {
    const data = path[i][sym] as SensorData | undefined
    if (data !== undefined) {
      const payload = data[payloadKey] as T | undefined
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

export function switchSensorDataList(existing: unknown[], updated: unknown[]): unknown[] {
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
