// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Reaction } from '../core/Elements'
import { FocusModel } from './sensors/FocusSensor'

export function RxFocuser(name: string, target: HTMLElement, model: FocusModel,
  focusOnInitialRendering: boolean = false, setNativeFocus: (() => void) | undefined = undefined): void {
  Reaction(name, { target, model }, (_, node) => {
    const isFocused = model.isFocused
    if (setNativeFocus === undefined)
      setNativeFocus = () => target.focus()
    if (node.isInitialRendering) {
      target.dataForSensor.focus = model
      if (focusOnInitialRendering) {
        // console.log(`${isFocused ? '🟢' : '🔴'} (initial) RxFocuser [${name}]: ${isFocused ? 'focus()' : 'blur()'}`)
        if (isFocused)
          setNativeFocus()/* nonreactive(() => setNativeFocus!()) */
        else
          target.blur()
      }
    }
    else {
      // console.log(`${isFocused ? '🟢' : '🔴'} RxFocuser [${name}]: ${isFocused ? 'focus()' : 'blur()'}`)
      if (isFocused)
        setNativeFocus()/* nonreactive(() => setNativeFocus!()) */
      else
        target.blur()
    }
  })
}
