// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, transaction, LoggingLevel } from 'reactronic'
import { findTargetElementData, SymDataForSensor } from './DataForSensor'
import { extractModifierKeys, KeyboardModifiers } from './KeyboardSensor'
import { BasePointerSensor } from './BasePointerSensor'
import { WindowSensor } from './WindowSensor'

export class HoverSensor extends BasePointerSensor {
  target: unknown = undefined

  constructor(window?: WindowSensor) {
    super(window)
    this.target = undefined
  }

  @transaction
  listen(element: HTMLElement | undefined, enabled: boolean = true): void {
    const existing = this.sourceElement
    if (element !== existing) {
      if (existing) {
        existing.removeEventListener('pointerover', this.onPointerOver.bind(this), { capture: true })
        existing.removeEventListener('pointerout', this.onPointerOut.bind(this), { capture: true })
      }
      this.sourceElement = element
      if (element && enabled) {
        element.addEventListener('pointerover', this.onPointerOver.bind(this), { capture: true })
        element.addEventListener('pointerout', this.onPointerOut.bind(this), { capture: true })
      }
    }
  }

  protected onPointerOver(e: PointerEvent): void {
    this.doPointerOver(e)
  }

  protected onPointerOut(e: PointerEvent): void {
    this.doPointerOut()
  }

  @transaction @options({ logging: LoggingLevel.Off })
  protected doPointerOver(e: PointerEvent): void {
    this.preventDefault = false
    this.stopPropagation = false
    const targetPath = e.composedPath()
    const underPointer = document.elementsFromPoint(e.clientX, e.clientY)
    this.target = findTargetElementData(targetPath, underPointer, SymDataForSensor, ['hover']).data?.hover
    this.modifiers = extractModifierKeys(e)
    this.positionX = e.clientX
    this.positionY = e.clientY
    this.revision++
  }

  @transaction @options({ logging: LoggingLevel.Off })
  protected doPointerOut(): void {
    this.preventDefault = false
    this.stopPropagation = false
    this.positionX = Infinity
    this.positionY = Infinity
    this.modifiers = KeyboardModifiers.None
    this.target = undefined
  }
}
