// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Reaction } from '../core/Basic'
import { FocusModel } from './sensors/FocusSensor'

export function RxFocuser(name: string, target: HTMLElement, model: FocusModel,
  switchEditMode: ((model?: FocusModel) => void) | undefined = undefined): void {
  Reaction(name, { triggers: { target, model }, throttling: 0 }, () => {
    if (switchEditMode !== undefined) {
      switchEditMode(model)
    }
    else {
      model.isEditMode ? target.focus() : target.blur()
      // console.log(`${model.isEditMode ? '🟢' : '🔴'} RxFocuser [${name}]: ${model.isEditMode ? 'focus()' : 'blur()'}`)
    }
  })
}
