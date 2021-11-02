// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, TraceLevel, transaction } from 'reactronic'
import { Sensor } from '../core/Sensor'
import { internalInstance } from '../core/System'

export interface ResizedElement {
  readonly borderBoxSize: ReadonlyArray<ResizeObserverSize>
  readonly contentBoxSize: ReadonlyArray<ResizeObserverSize>
  readonly contentRect: DOMRectReadOnly
  readonly resizeData: any
}

export class ResizeSensor extends Sensor {
  private readonly resizeObserver: ResizeObserver
  resizedElements: Array<ResizedElement> = []

  constructor() {
    super()
    this.resizeObserver = new ResizeObserver(this.onResize.bind(this))
  }

  @transaction
  reset(): void {
    this.doReset()
  }

  observeResizeOfRenderingElement(value: boolean): void {
    const instance = internalInstance<Element>()
    if (value) {
      if (instance.resizeObserver !== undefined && instance.resizeObserver !== this.resizeObserver)
        instance.resizeObserver.unobserve(instance.native!) // eslint-disable-line @typescript-eslint/no-non-null-assertion
      instance.resizeObserver = this.resizeObserver
      this.resizeObserver.observe(instance.native!) // eslint-disable-line @typescript-eslint/no-non-null-assertion
    }
    else {
      if (instance.resizeObserver === this.resizeObserver) {
        this.resizeObserver.unobserve(instance.native!) // eslint-disable-line @typescript-eslint/no-non-null-assertion
        instance.resizeObserver = undefined
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
