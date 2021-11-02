// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, sensitive, TraceLevel, transaction } from 'reactronic'
import { grabElementData } from '../core/Sensor'
import { SymAssociatedData } from './HtmlApiExt'
import { HtmlElementSensor } from './HtmlElementSensor'

export enum KeyboardModifiers {
  None = 0,
  Ctrl = 1,
  Shift = 2,
  Alt = 4,
  Meta = 8,
  CtrlShift = 1 + 2,
  CtrlAlt = 1 + 4,
  CtrlMeta = 1 + 8,
  CtrlShiftAlt = 1 + 2 + 4,
  CtrlShiftAltMeta = 1 + 2 + 4 + 8,
  CtrlShiftMeta = 1 + 2 + 8,
  ShiftAlt = 2 + 4,
  ShiftMeta = 2 + 8,
  ShiftAltMeta = 2 + 4 + 8,
  AltMeta = 4 + 8,
}

export class KeyboardSensor extends HtmlElementSensor {
  down: string
  up: string
  modifiers: KeyboardModifiers

  constructor() {
    super()
    this.down = ''
    this.up = ''
    this.modifiers = KeyboardModifiers.None
  }

  @transaction
  listen(element: HTMLElement | undefined, enabled: boolean = true): void {
    const existing = this.sourceElement
    if (element !== existing) {
      if (existing) {
        existing.removeEventListener('keydown', this.onKeyDown.bind(this), { capture: true })
        existing.removeEventListener('keyup', this.onKeyUp.bind(this), { capture: true })
      }
      this.sourceElement = element
      if (element && enabled) {
        element.addEventListener('keydown', this.onKeyDown.bind(this), { capture: true })
        element.addEventListener('keyup', this.onKeyUp.bind(this), { capture: true })
      }
    }
  }

  @transaction
  reset(): void {
    this.preventDefault = false
    this.stopPropagation = false
    this.down = ''
    this.up = ''
    this.modifiers = KeyboardModifiers.None
  }

  protected onKeyDown(e: KeyboardEvent): void {
    this.keyDown(e)
    this.setPreventDefaultAndStopPropagation(e)
  }

  protected onKeyUp(e: KeyboardEvent): void {
    this.keyUp(e)
    this.setPreventDefaultAndStopPropagation(e)
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected keyDown(e: KeyboardEvent): void {
    this.updateSensorData(e)
    this.up = ''
    sensitive(true, () => this.down = e.key)
  }

  @transaction @options({ trace: TraceLevel.Suppress })
  protected keyUp(e: KeyboardEvent): void {
    this.updateSensorData(e)
    this.down = ''
    sensitive(true, () => this.up = e.key)
  }

  protected updateSensorData(e: KeyboardEvent): void {
    this.preventDefault = false
    this.stopPropagation = false
    const path = e.composedPath()
    this.elementDataList = grabElementData(path, SymAssociatedData, 'keyboard', this.elementDataList).data
    let modifier: KeyboardModifiers = 0
    if (e.ctrlKey)
      modifier |= KeyboardModifiers.Ctrl
    if (e.shiftKey)
      modifier |= KeyboardModifiers.Shift
    if (e.altKey)
      modifier |= KeyboardModifiers.Alt
    if (e.metaKey)
      modifier |= KeyboardModifiers.Meta
    this.modifiers = modifier
    this.revision++
  }

  protected static getKeyAsModifierIfAny(key: string): KeyboardModifiers {
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
}

export function extractModifierKeys(e: MouseEvent | KeyboardEvent | WheelEvent): KeyboardModifiers {
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
