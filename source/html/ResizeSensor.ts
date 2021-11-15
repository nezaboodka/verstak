// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, TraceLevel, transaction } from 'reactronic'
import { Sensor } from './Sensor'
import { RxDom } from '../core/RxDom'

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

  observeResizeOfRenderingElement(value: boolean): void {
    const self = RxDom.selfInstanceInternal<Element>()
    if (value) {
      if (self.resizing !== undefined && self.resizing !== this.observer)
        self.resizing.unobserve(self.native!) // eslint-disable-line @typescript-eslint/no-non-null-assertion
      self.resizing = this.observer
      this.observer.observe(self.native!) // eslint-disable-line @typescript-eslint/no-non-null-assertion
    }
    else {
      if (self.resizing === this.observer) {
        this.observer.unobserve(self.native!) // eslint-disable-line @typescript-eslint/no-non-null-assertion
        self.resizing = undefined
      }
    }
  }

  protected onResize(entries: Array<ResizeObserverEntry>): void {
    this.resize(entries)
    this.reset()
  }

  @transaction @options({ trace: TraceLevel.Suppress })
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
    this.elementDataList = entries.map(x => {
      const element = x.target as Element
      return element.dataForSensor
    })
  }

  protected doReset(): void {
    this.resizedElements = []
  }
}
