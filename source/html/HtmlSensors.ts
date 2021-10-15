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
import { PopupSensor } from './PopupSensor'
import { ResizeSensor } from './ResizeSensor'
import { WheelSensor } from './WheelSensor'

export class HtmlSensors {
  readonly focus: FocusSensor
  readonly hover: HoverSensor
  readonly keyboard: KeyboardSensor
  readonly click: ClickSensor
  readonly wheel: WheelSensor
  readonly resize: ResizeSensor
  readonly drag: DragSensor
  readonly htmlDrag: HtmlDragSensor
  readonly popup: PopupSensor

  constructor() {
    this.focus = new FocusSensor()
    this.hover = new HoverSensor()
    this.keyboard = new KeyboardSensor()
    this.click = new ClickSensor()
    this.wheel = new WheelSensor()
    this.resize = new ResizeSensor()
    this.drag = new DragSensor()
    this.htmlDrag = new HtmlDragSensor()
    this.popup = new PopupSensor()
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
    this.popup.listen(element, enabled)
  }
}
