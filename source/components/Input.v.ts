// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveNodeDecl, Mode, ReactiveNode } from "reactronic"
import { Division, JustText, FocusModel, OnFocus, rowBreak, El, Fragment, KeyboardSensor, KeyboardModifiers, Horizontal, Vertical } from "verstak"
import { triggeringModel, ValuesOrRefs } from "./common/Utils.js"
import { Theme, InputStyling } from "./Theme.js"
import { Icon } from "./Icon.v.js"

export type InputModel<T = string> = FocusModel & {
  icon?: string
  text: string
  options: Array<T>
  selected: T | undefined
  multiSelected: Set<T>
  position: number // scroll
  isMultiLineText: boolean
  isHotText: boolean
  inputStyle: string
}

export function Input(declaration?: ReactiveNodeDecl<El<HTMLElement, InputModel>>) {
  return (
    Division<InputModel>(ReactiveNode.withBasis(declaration, {
      mode: Mode.autonomous,
      preparation: el => {
        el.model ??= composeInputModel()
        el.native.dataForSensor.focus = el.model
      },
      script: el => {
        const m = el.model
        const theme = Theme.current.input
        el.useStylingPreset(theme.main)
        if (m.icon)
          Icon(m.icon, {
            script: (el, base) => {
              base()
              el.useStylingPreset(theme.icon)
            },
          })
        InputField(m, theme)
        InputPopup(m, theme)
      },
    }))
  )
}

export function composeInputModel<T>(props?: Partial<ValuesOrRefs<InputModel<T>>>): InputModel<T> {
  return triggeringModel({
    icon: props?.icon,
    text: props?.text ?? "",
    options: props?.options ?? [],
    selected: props?.selected,
    multiSelected: props?.multiSelected ?? new Set<T>(),
    position: props?.position ?? 0,
    isMultiLineText: props?.isMultiLineText ?? false,
    isEditMode: props?.isEditMode ?? false,
    isHotText: props?.isHotText ?? false,
    inputStyle: props?.inputStyle ?? "",
  })
}

function InputField(model: InputModel, styling: InputStyling) {
  return (
    JustText(model.text, false, {
      key: InputField.name,
      preparation: (el, base) => {
        const e = el.native
        el.useStylingPreset(styling.field)
        el.horizontally = Horizontal.stretch
        el.vertically = Vertical.stretch
        e.tabIndex = 0
        e.contentEditable = "true"
        e.dataForSensor.focus = model
        base()
      },
      script: el => {
        const e = el.native
        if (!model.isEditMode)
          e.innerText = model.text
        Fragment(() => {
          const keyboard = e.sensors.keyboard
          if (keyboard.down) {
            if (isApplyKey(model, keyboard))
              selectAllAndPreventDefault(e, keyboard)
          }
          if (keyboard.up) {
            if (isApplyKey(model, keyboard)) {
              selectAllAndPreventDefault(e, keyboard)
              model.text = e.innerText
            }
            else if (model.isHotText)
              model.text = e.innerText
          }
        })
        OnFocus(e, model)
      },
    })
  )
}

function InputPopup(model: InputModel, styling: InputStyling) {
  return (
    Division({
      key: InputPopup.name,
      script: el => {
        el.useStylingPreset(styling.popup)
        Fragment(() => model.position = el.native.sensors.scroll.y)
        const visible = el.overlayVisible = model.isEditMode
        if (visible) {
          const options = model.options
          if (options.length > 0) {
            for (const x of model.options) {
              rowBreak()
              JustText(x, false, {
                key: x,
                preparation: el => {
                  el.contentWrapping = false
                },
              })
            }
          }
          else
            JustText("(nothing)", false, { key: "(nothing)" })
        }
      },
    })
  )
}

function isApplyKey(m: InputModel, keyboard: KeyboardSensor): boolean {
  const modifiers = keyboard.modifiers
  return keyboard.down === "Enter" && (
    !m.isMultiLineText || (modifiers & KeyboardModifiers.ctrlShiftMeta) > 0)
}

function selectAllAndPreventDefault(e: HTMLElement, keyboard: KeyboardSensor): void {
  const range = document.createRange()
  range.selectNodeContents(e)
  const sel = window.getSelection()
  sel?.removeAllRanges()
  sel?.addRange(range)
  keyboard.preventDefault = true
}
