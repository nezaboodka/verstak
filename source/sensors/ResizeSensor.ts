// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, atomic, LoggingLevel } from "reactronic"
import { El } from "../core/El.js"
import { Sensor } from "./Sensor.js"

export type ResizedElement = {
  readonly borderBoxSize: ReadonlyArray<ResizeObserverSize>
  readonly contentBoxSize: ReadonlyArray<ResizeObserverSize>
  readonly contentRect: DOMRectReadOnly
  readonly resizeData: any
}

export class ResizeSensor extends Sensor {
  private readonly observer: ResizeObserver
  resizedElements: Array<ResizedElement> = []

  constructor() {
    super()
    this.observer = new ResizeObserver(this.onResize.bind(this))
  }

  @atomic
  reset(): void {
    this.doReset()
  }

  observeResizing(element: El<any, any>, value: boolean, boxSizing: ResizeObserverBoxOptions = "content-box"): void {
    const native = element.native
    if (native instanceof Element) {
      if (value) {
        if (native.resizeObserver !== undefined && native.resizeObserver !== this.observer)
          native.resizeObserver.unobserve(native)
        native.resizeObserver = this.observer
        this.observer.observe(native, { box: boxSizing })
      }
      else {
        if (native.resizeObserver === this.observer) {
          this.observer.unobserve(native)
          native.resizeObserver = undefined
        }
      }
    }
    else
      throw new Error("cannot observe resizing of non-HTML element")
  }

  protected onResize(entries: Array<ResizeObserverEntry>): void {
    this.resize(entries)
    this.reset()
  }

  @atomic @options({ logging: LoggingLevel.Off })
  protected resize(entries: Array<ResizeObserverEntry>): void {
    this.revision++
    this.resizedElements = entries.map(entry => {
      const element = entry.target as Element
      return {
        borderBoxSize: entry.borderBoxSize,
        contentBoxSize: entry.contentBoxSize,
        contentRect: entry.contentRect,
        resizeData: element.dataForSensor.resize,
      }
    })
  }

  protected doReset(): void {
    this.resizedElements = []
  }
}
