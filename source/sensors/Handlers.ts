// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Mode, ToggleRef, nonreactive } from "reactronic"
import { SyntheticElement } from "../core/Elements.js"
import { FocusModel } from "./FocusSensor.js"
import { ResizedElement } from "./ResizeSensor.js"
import { PointerSensor } from "./PointerSensor.js"

export function OnClick(target: HTMLElement, action: ((pointer: PointerSensor) => void) | ToggleRef | undefined, key?: string): void {
  if (action !== undefined) {
    SyntheticElement({
      key,
      mode: Mode.autonomous,
      triggers: { target/* , action */ },
      script: el => {
        const pointer = target.sensors.pointer
        if (target.dataForSensor.click !== undefined && pointer.clicked === target.dataForSensor.click || target.dataForSensor.click === undefined && pointer.clicked) {
          if (action instanceof Function) {
            nonreactive(() => action(pointer))
          }
          else if (action instanceof ToggleRef) {
            nonreactive(() => action.toggle())
          }
        }
      },
    })
  }
}

export function OnClickAsync(target: HTMLElement, action: ((pointer: PointerSensor) => Promise<void>) | ToggleRef | undefined, key?: string): void {
  if (action !== undefined) {
    SyntheticElement({
      key,
      mode: Mode.autonomous,
      triggers: { target/* , action */ },
      scriptAsync: async (el) => {
        const pointer = target.sensors.pointer
        if (target.dataForSensor.click !== undefined && pointer.clicked === target.dataForSensor.click || target.dataForSensor.click === undefined && pointer.clicked) {
          if (action instanceof Function) {
            await nonreactive(() => action(pointer))
          }
          else if (action instanceof ToggleRef) {
            nonreactive(() => action.toggle())
          }
        }
      },
    })
  }
}

export function OnResize(target: HTMLElement, action: ((element: ResizedElement) => void) | undefined, key?: string): void {
  if (action) {
    SyntheticElement({
      key,
      mode: Mode.autonomous,
      triggers: { target/* , action */ },
      script: el => {
        const resize = target.sensors.resize
        resize.resizedElements.forEach(x => {
          action(x)
        })
      },
    })
  }
}

export function OnFocus(
  target: HTMLElement, model: FocusModel,
  switchEditMode: ((model: FocusModel) => void) | undefined = undefined,
  key?: string): void {
  SyntheticElement({
    key,
    mode: Mode.autonomous,
    triggers: { target, model },
    preparation: el => {
      el.node.configureReactronic({ throttling: 0 })
    },
    script: el => {
      // console.log(`-> ${model.isEditMode ? "🟢" : "🔴"} RxFocuser [${key}]: ${model.isEditMode ? "focus()" : "blur()"}`)
      if (switchEditMode === undefined && !(target instanceof HTMLInputElement || target.hasAttribute("tabindex")))
        console.warn(`"${key ?? "noname"}" element must have "tabindex" attribute set in order to be focusable`)
      if (switchEditMode !== undefined) {
        switchEditMode(model)
      }
      else {
        model.isEditMode ? target.focus() : target.blur()
      }
      // console.log(`<- ${model.isEditMode ? "🟢" : "🔴"} RxFocuser [${key}]: ${model.isEditMode ? "focus()" : "blur()"}`)
    },
  })
}

export type ResizeCallback = (width: number, height: number) => void

export class ResizeData {
  constructor(
    public id: string,
    public handler?: ResizeCallback,
  ) {}
}

export function prepareResizeHandler(action: ((width: number, height: number) => void) | ResizeData): (element: ResizedElement) => void {
  return (element: ResizedElement): void => {
    const size = element.borderBoxSize[0]
    if (action instanceof Function)
      nonreactive(() => action(size.inlineSize, size.blockSize))
    else if (action instanceof ResizeData && action.handler !== undefined)
      nonreactive(() => action.handler!(size.inlineSize, size.blockSize))
  }
}
