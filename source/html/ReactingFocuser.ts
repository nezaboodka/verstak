// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Mode } from "../core/api.js"
import { Fragment } from "./Elements.js"
import { FocusModel } from "./sensors/FocusSensor.js"

export function FocuserReaction(key: string, target: HTMLElement, model: FocusModel,
  switchEditMode: ((model?: FocusModel) => void) | undefined = undefined): void {
  Fragment({
    key,
    mode: Mode.PinpointUpdate,
    triggers: { target, model },
    initialize(b) {
      b.node.configureReactronic({ throttling: 0 })
    },
    update() {
      if (switchEditMode !== undefined) {
        switchEditMode(model)
      }
      else {
        model.isEditMode ? target.focus() : target.blur()
        // console.log(`${model.isEditMode ? '🟢' : '🔴'} RxFocuser [${name}]: ${model.isEditMode ? 'focus()' : 'blur()'}`)
      }
    },
  })
}
