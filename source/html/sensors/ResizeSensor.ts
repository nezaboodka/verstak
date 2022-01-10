// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, transaction, LoggingLevel } from 'reactronic'
import { RxDom } from '../../core/api'
import { Sensor } from './Sensor'

export interface ResizedElement {
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

  @transaction
  reset(): void {
    this.doReset()
  }

  observeResizingOfCurrentElement(value: boolean): void {
    const self = RxDom.currentNode
    const native = self.native
    if (native instanceof Element) {
      if (value) {
        if (native.resizeObserver !== undefined && native.resizeObserver !== this.observer)
          native.resizeObserver.unobserve(native)
        native.resizeObserver = this.observer
        this.observer.observe(native)
      }
      else {
        if (native.resizeObserver === this.observer) {
          this.observer.unobserve(native)
          native.resizeObserver = undefined
        }
      }
    }
    else
      throw new Error('cannot observe resizing of non-HTML node')
  }

  protected onResize(entries: Array<ResizeObserverEntry>): void {
    this.resize(entries)
    this.reset()
  }

  @transaction @options({ logging: LoggingLevel.Off })
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
