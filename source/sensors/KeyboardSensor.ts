// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, sensitive, action, LoggingLevel, Transaction } from "reactronic"
import { grabElementDataList, SymDataForSensor } from "./DataForSensor.js"
import { HtmlElementSensor } from "./HtmlElementSensor.js"

export enum KeyboardModifiers {
  none = 0,
  ctrl = 1,
  shift = 2,
  alt = 4,
  meta = 8,
  ctrlShift = 1 + 2,
  ctrlAlt = 1 + 4,
  ctrlMeta = 1 + 8,
  ctrlShiftAlt = 1 + 2 + 4,
  ctrlShiftAltMeta = 1 + 2 + 4 + 8,
  ctrlShiftMeta = 1 + 2 + 8,
  shiftAlt = 2 + 4,
  shiftMeta = 2 + 8,
  shiftAltMeta = 2 + 4 + 8,
  altMeta = 4 + 8,
}

export class KeyboardSensor extends HtmlElementSensor {
  down: string
  up: string
  modifiers: KeyboardModifiers

  constructor(element: HTMLElement | SVGElement) {
    super(element)
    this.down = ""
    this.up = ""
    this.modifiers = KeyboardModifiers.none
  }

  listen(enabled: boolean = true): void {
    const t = Transaction.current
    Transaction.outside(() => {
      t.whenFinished(true).then(() => {
        const element = this.sourceElement as HTMLElement // WORKAROUND (covers SVGElement cases)
        if (enabled) {
          element.addEventListener("keydown", this.onKeyDown.bind(this), { capture: true })
          element.addEventListener("keyup", this.onKeyUp.bind(this), { capture: true })

          window.addEventListener("blur", this.doWindowBlur.bind(this), { capture: true })
        }
        else {
          element.removeEventListener("keydown", this.onKeyDown.bind(this), { capture: true })
          element.removeEventListener("keyup", this.onKeyUp.bind(this), { capture: true })

          window.removeEventListener("blur", this.doWindowBlur.bind(this), { capture: true })
        }
      }, e => { /* nop */ })
    })
  }

  @action
  reset(): void {
    this.preventDefault = false
    this.stopPropagation = false
    this.down = ""
    this.up = ""
    this.modifiers = KeyboardModifiers.none
  }

  protected onKeyDown(e: KeyboardEvent): void {
    this.keyDown(e)
    this.setPreventDefaultAndStopPropagation(e)
  }

  protected onKeyUp(e: KeyboardEvent): void {
    this.keyUp(e)
    this.setPreventDefaultAndStopPropagation(e)
  }

  protected doWindowBlur(e: FocusEvent): void {
    this.reset()
  }

  @action @options({ logging: LoggingLevel.Off })
  protected keyDown(e: KeyboardEvent): void {
    this.updateSensorData(e)
    this.up = ""
    sensitive(true, () => this.down = e.key)
  }

  @action @options({ logging: LoggingLevel.Off })
  protected keyUp(e: KeyboardEvent): void {
    this.updateSensorData(e)
    this.down = ""
    sensitive(true, () => this.up = e.key)
  }

  protected updateSensorData(e: KeyboardEvent): void {
    this.preventDefault = false
    this.stopPropagation = false
    const path = e.composedPath()

    // console.log('KeyboardSensor.updateSensorData:')
    // console.log(path)

    this.elementDataList = grabElementDataList(path, SymDataForSensor, "keyboard", this.elementDataList).dataList
    this.modifiers = extractModifierKeys(e)
    this.revision++
  }

  protected static getKeyAsModifierIfAny(key: string): KeyboardModifiers {
    let modifier = KeyboardModifiers.none
    if (key === "Control")
      modifier = KeyboardModifiers.ctrl
    else if (key === "Shift")
      modifier = KeyboardModifiers.shift
    else if (key === "Alt")
      modifier = KeyboardModifiers.alt
    else if (key === "Meta")
      modifier = KeyboardModifiers.meta
    return modifier
  }
}

export function extractModifierKeys(e: MouseEvent | KeyboardEvent | WheelEvent): KeyboardModifiers {
  let modifiers = KeyboardModifiers.none
  if (e.ctrlKey)
    modifiers |= KeyboardModifiers.ctrl
  else
    modifiers &= ~KeyboardModifiers.ctrl
  if (e.shiftKey)
    modifiers |= KeyboardModifiers.shift
  else
    modifiers &= ~KeyboardModifiers.shift
  if (e.altKey)
    modifiers |= KeyboardModifiers.alt
  else
    modifiers &= ~KeyboardModifiers.alt
  if (e.metaKey)
    modifiers |= KeyboardModifiers.meta
  else
    modifiers &= ~KeyboardModifiers.meta
  return modifiers
}
