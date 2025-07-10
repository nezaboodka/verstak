// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, Reentrance, atomic, LoggingLevel, Transaction } from "reactronic"
import { HtmlElementSensor } from "./HtmlElementSensor.js"

export class ScrollSensor extends HtmlElementSensor {
  x: number
  y: number

  constructor(element: HTMLElement | SVGElement) {
    super(element)
    this.x = Infinity
    this.y = Infinity
  }

  listen(enabled: boolean = true): void {
    const t = Transaction.current
    Transaction.outside(() => {
      t.whenFinished(true).then(() => {
        const element = this.sourceElement as HTMLElement // WORKAROUND (covers SVGElement cases)
        if (enabled) {
          element.addEventListener("scroll", this.onScroll.bind(this), { capture: true, passive: true })
        }
        else {
          element.removeEventListener("scroll", this.onScroll.bind(this), { capture: true })
        }
      }, e => { /* nop */ })
    })
  }

  @atomic
  reset(): void {
    this.doReset()
  }

  protected onScroll(e: Event): void {
    this.doScroll(e)
    // this.reset()
  }

  @atomic
  @options({ reentrance: Reentrance.cancelPrevious, logging: LoggingLevel.Off })
  protected doScroll(e: Event): void {
    this.updateSensorData(e)
  }

  protected doReset(): void {
    this.preventDefault = false
    this.stopPropagation = false
    this.x = Infinity
    this.y = Infinity
  }

  protected updateSensorData(e: Event): void {
    this.preventDefault = false
    this.stopPropagation = false
    this.x = this.sourceElement.scrollLeft
    this.y = this.sourceElement.scrollTop
    this.revision++
  }
}
