// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { transaction } from 'reactronic'
import { ClickSensor } from './ClickSensor'
import { DragSensor } from './DragSensor'
import { FocusSensor } from './FocusSensor'
import { HoverSensor } from './HoverSensor'
import { HtmlDragSensor } from './HtmlDragSensor'
import { KeyboardSensor } from './KeyboardSensor'
import { ButtonSensor } from './ButtonSensor'
import { ResizeSensor } from './ResizeSensor'
import { WheelSensor } from './WheelSensor'
import { WindowSensor } from './WindowSensor'
import { ClickDragSensor } from './ClickDragSensor'

export class HtmlSensors {
  readonly window: WindowSensor
  readonly focus: FocusSensor
  readonly hover: HoverSensor
  readonly keyboard: KeyboardSensor
  readonly click: ClickSensor
  readonly wheel: WheelSensor
  readonly resize: ResizeSensor
  readonly drag: DragSensor
  readonly htmlDrag: HtmlDragSensor
  readonly button: ButtonSensor
  readonly pointer: ClickDragSensor

  constructor() {
    this.window = new WindowSensor()
    this.focus = new FocusSensor(this.window)
    this.hover = new HoverSensor()
    this.keyboard = new KeyboardSensor()
    this.click = new ClickSensor(this.window)
    this.wheel = new WheelSensor()
    this.resize = new ResizeSensor()
    this.drag = new DragSensor(this.window)
    this.htmlDrag = new HtmlDragSensor(this.window)
    this.button = new ButtonSensor(this.window)
    this.pointer = new ClickDragSensor(this.window)
  }

  @transaction
  listen(element: HTMLElement | undefined, enabled: boolean = true): void {
    this.focus.listen(element, enabled)
    this.hover.listen(element, enabled)
    this.keyboard.listen(element, enabled)
    this.click.listen(element, enabled)
    this.wheel.listen(element, enabled)
    // this.resize doesn't have listen, this.resize.observeResizeOfRenderingElement is used instead
    this.drag.listen(element, enabled)
    this.htmlDrag.listen(element, enabled)
    this.button.listen(element, enabled)
    this.pointer.listen(element, enabled)
  }
}
