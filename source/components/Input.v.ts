// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNodeDecl, Mode, derivative } from "reactronic"
import { Block, FocusModel, OnFocus, rowBreak, El, Fragment, KeyboardSensor, KeyboardModifiers, Horizontal, Vertical } from "verstak"
import { rxModel, ValuesOrRefs } from "./common/Utils.js"
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

export function Input(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, InputModel>>) {
  return (
    Block<InputModel>(derivative(declaration, {
      mode: Mode.autonomous,
      preparation() {
        this.model ??= composeInputModel()
        this.native.dataForSensor.focus = this.model
      },
      script() {
        const m = this.model
        const theme = Theme.current.input
        this.useStylingPreset(theme.main)
        if (m.icon)
          Icon(m.icon, {
            script(el, base) {
              base()
              this.useStylingPreset(theme.icon)
            },
          })
        InputField(m, theme)
        InputPopup(m, theme)
      },
    }))
  )
}

export function composeInputModel<T>(props?: Partial<ValuesOrRefs<InputModel<T>>>): InputModel<T> {
  return rxModel({
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
    Block({
      key: InputField.name,
      preparation(el, base) {
        const e = this.native
        this.useStylingPreset(styling.field)
        this.horizontally = Horizontal.stretch
        this.vertically = Vertical.stretch
        this.textIsEditable = true
        e.tabIndex = 0
        e.dataForSensor.focus = model
        base()
      },
      script() {
        const e = this.native
        if (!model.isEditMode)
          this.text = model.text
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
    Block({
      key: InputPopup.name,
      script() {
        this.useStylingPreset(styling.popup)
        Fragment(() => model.position = this.native.sensors.scroll.y)
        const visible = this.overlayVisible = model.isEditMode
        if (visible) {
          const options = model.options
          if (options.length > 0) {
            for (const x of model.options) {
              rowBreak()
              Block({
                key: x,
                preparation() {
                  this.text = x
                  this.contentWrapping = false
                },
              })
            }
          }
          else
            Block({
              key: "(nothing)",
              script() {
                this.text = "(nothing)"
              },
            })
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
