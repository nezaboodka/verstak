// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, transactional, LoggingLevel } from 'reactronic'
import { Block } from '../../core/api'
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

  @transactional
  reset(): void {
    this.doReset()
  }

  observeResizing(block: Block<any, any ,any>, value: boolean, boxSizing: ResizeObserverBoxOptions = 'content-box'): void {
    const impl = block.impl
    if (impl instanceof Element) {
      if (value) {
        if (impl.resizeObserver !== undefined && impl.resizeObserver !== this.observer)
          impl.resizeObserver.unobserve(impl)
        impl.resizeObserver = this.observer
        this.observer.observe(impl, { box: boxSizing })
      }
      else {
        if (impl.resizeObserver === this.observer) {
          this.observer.unobserve(impl)
          impl.resizeObserver = undefined
        }
      }
    }
    else
      throw new Error('cannot observe resizing of non-HTML block')
  }

  protected onResize(entries: Array<ResizeObserverEntry>): void {
    this.resize(entries)
    this.reset()
  }

  @transactional @options({ logging: LoggingLevel.Off })
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
