// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Mode } from "reactronic"
import { CustomFragment } from "./Elements.js"

export function OnClick(target: HTMLElement, action: (() => void) | undefined, key?: string): void {

  if (action) {
    CustomFragment({
      key,
      mode: Mode.IndependentUpdate,
      triggers: { target },
      update() {
        const pointer = target.sensors.pointer
        if (pointer.clicked) {
          action()
        }
      },
    })
  }

}
