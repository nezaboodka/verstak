// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveNodeDecl, Mode, ReactiveNode } from "reactronic"
import { Panel, Note, FocusModel, OnFocus, rowBreak, El, Handling, KeyboardSensor, KeyboardModifiers, Horizontal, Vertical } from "verstak"
import { observableModel, ValuesOrRefs } from "./common/Utils.js"
import { Theme, FieldStyling } from "./Theme.js"
import { Icon } from "./Icon.v.js"

export type FieldModel<T = string> = FocusModel & {
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

export function Field(declaration?: ReactiveNodeDecl<El<HTMLElement, FieldModel>>) {
  return (
    Panel<FieldModel>(ReactiveNode.withBasis(declaration, {
      mode: Mode.autonomous,
      preparation: el => {
        el.model ??= composeFieldModel()
        el.native.dataForSensor.focus = el.model
      },
      content: el => {
        const m = el.model
        const theme = Theme.current.field
        el.useStylingPreset(theme.main)
        if (m.icon)
          Icon(m.icon, {
            content: (el, base) => {
              base()
              el.useStylingPreset(theme.icon)
            },
          })
        FieldInput(m, theme)
        FieldPopup(m, theme)
      },
    }))
  )
}

export function composeFieldModel<T>(props?: Partial<ValuesOrRefs<FieldModel<T>>>): FieldModel<T> {
  return observableModel({
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

function FieldInput(model: FieldModel, s: FieldStyling) {
  return (
    Note(model.text, false, {
      key: FieldInput.name,
      preparation: (el, base) => {
        const e = el.native
        el.useStylingPreset(s.input)
        el.horizontally = Horizontal.stretch
        el.vertically = Vertical.stretch
        e.tabIndex = 0
        e.contentEditable = "true"
        e.dataForSensor.focus = model
        base()
      },
      content: el => {
        const e = el.native
        if (!model.isEditMode)
          e.innerText = model.text
        Handling(() => {
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

function FieldPopup(model: FieldModel, s: FieldStyling) {
  return (
    Panel({
      key: FieldPopup.name,
      content: el => {
        el.useStylingPreset(s.popup)
        Handling(() => model.position = el.native.sensors.scroll.y)
        const visible = el.overlayVisible = model.isEditMode
        if (visible) {
          const options = model.options
          if (options.length > 0) {
            for (const x of model.options) {
              rowBreak()
              Note(x, false, {
                key: x,
                preparation: el => {
                  el.contentWrapping = false
                },
              })
            }
          }
          else
            Note("(nothing)", false, { key: "(nothing)" })
        }
      },
    })
  )
}

function isApplyKey(m: FieldModel, keyboard: KeyboardSensor): boolean {
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
