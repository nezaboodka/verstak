// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { FocusSensor } from "./FocusSensor.js"
import { HoverSensor } from "./HoverSensor.js"
import { HtmlDragSensor } from "./HtmlDragSensor.js"
import { KeyboardSensor } from "./KeyboardSensor.js"
import { ButtonSensor } from "./ButtonSensor.js"
import { ResizeSensor } from "./ResizeSensor.js"
import { WheelSensor } from "./WheelSensor.js"
import { ScrollSensor } from "./ScrollSensor.js"
import { WindowSensor } from "./WindowSensor.js"
import { PointerSensor } from "./PointerSensor.js"

export class HtmlSensors {
  private readonly _element: HTMLElement | SVGElement

  private _window: WindowSensor | undefined
  get window(): WindowSensor {
    if (this._window === undefined) {
      this._window = new WindowSensor()
    }
    return this._window
  }

  private _focus: FocusSensor | undefined
  get focus(): FocusSensor {
    if (this._focus === undefined) {
      this._focus = new FocusSensor(this._element, this.window)
      this._focus.listen()
    }
    return this._focus
  }

  private _hover: HoverSensor | undefined
  get hover(): HoverSensor {
    if (this._hover === undefined) {
      this._hover = new HoverSensor(this._element)
      this._hover.listen()
    }
    return this._hover
  }

  private _keyboard: KeyboardSensor | undefined
  get keyboard(): KeyboardSensor {
    if (this._keyboard === undefined) {
      this._keyboard = new KeyboardSensor(this._element)
      this._keyboard.listen()
    }
    return this._keyboard
  }

  private _wheel: WheelSensor | undefined
  get wheel(): WheelSensor {
    if (this._wheel === undefined) {
      this._wheel = new WheelSensor(this._element)
      this._wheel.listen()
    }
    return this._wheel
  }

  private _scroll: ScrollSensor | undefined
  get scroll(): ScrollSensor {
    if (this._scroll === undefined) {
      this._scroll = new ScrollSensor(this._element)
      this._scroll.listen()
    }
    return this._scroll
  }

  private _resize: ResizeSensor | undefined
  get resize(): ResizeSensor {
    if (this._resize === undefined) {
      this._resize = new ResizeSensor()
    }
    return this._resize
  }

  private _htmlDrag: HtmlDragSensor | undefined
  get htmlDrag(): HtmlDragSensor {
    if (this._htmlDrag === undefined) {
      this._htmlDrag = new HtmlDragSensor(this._element, this.window)
      this._htmlDrag.listen()
    }
    return this._htmlDrag
  }

  private _button: ButtonSensor | undefined
  get button(): ButtonSensor {
    if (this._button === undefined) {
      this._button = new ButtonSensor(this._element, this.window)
      this._button.listen()
    }
    return this._button
  }

  private _pointer: PointerSensor | undefined
  get pointer(): PointerSensor {
    if (this._pointer === undefined) {
      this._pointer = new PointerSensor(this._element, this.window)
      this._pointer.listen()
    }
    return this._pointer
  }

  constructor(element: HTMLElement | SVGElement) {
    this._element = element
    this._window = undefined
    this._focus = undefined
    this._hover = undefined
    this._keyboard = undefined
    this._wheel = undefined
    this._scroll = undefined
    this._resize = undefined
    this._htmlDrag = undefined
    this._button = undefined
    this._pointer = undefined
  }
}
