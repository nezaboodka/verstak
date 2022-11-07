// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { transactional } from "reactronic"
import { FocusSensor } from "./FocusSensor"
import { HoverSensor } from "./HoverSensor"
import { HtmlDragSensor } from "./HtmlDragSensor"
import { KeyboardSensor } from "./KeyboardSensor"
import { ButtonSensor } from "./ButtonSensor"
import { ResizeSensor } from "./ResizeSensor"
import { WheelSensor } from "./WheelSensor"
import { WindowSensor } from "./WindowSensor"
import { PointerSensor } from "./PointerSensor"

export class HtmlSensors {
  readonly window: WindowSensor
  readonly focus: FocusSensor
  readonly hover: HoverSensor
  readonly keyboard: KeyboardSensor
  readonly wheel: WheelSensor
  readonly resize: ResizeSensor
  readonly htmlDrag: HtmlDragSensor
  readonly button: ButtonSensor
  readonly pointer: PointerSensor

  constructor() {
    this.window = new WindowSensor()
    this.focus = new FocusSensor(this.window)
    this.hover = new HoverSensor()
    this.keyboard = new KeyboardSensor()
    this.wheel = new WheelSensor()
    this.resize = new ResizeSensor()
    this.htmlDrag = new HtmlDragSensor(this.focus, this.window)
    this.button = new ButtonSensor(this.focus, this.window)
    this.pointer = new PointerSensor(this.focus, this.window)
  }

  @transactional
  listen(element: HTMLElement | undefined, enabled: boolean = true): void {
    this.focus.listen(element, enabled)
    this.hover.listen(element, enabled)
    this.keyboard.listen(element, enabled)
    this.wheel.listen(element, enabled)
    // this.resize doesn't have listen, this.resize.observeResizingOfCurrentElement is used instead
    this.htmlDrag.listen(element, enabled)
    this.button.listen(element, enabled)
    this.pointer.listen(element, enabled)
  }
}
