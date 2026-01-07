// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { RxObject, transaction, reaction } from "reactronic"

export class RealTimeClock extends RxObject {
  hour: number = 0
  minute: number = 0
  second: number = 0
  ms: number = 0
  interval: number = 0
  paused: boolean = false

  constructor(interval: number = 1000) {
    super()
    this.interval = interval
    this.put(new Date())
  }

  @transaction
  pause(value: boolean = true): void {
    this.paused = value
  }

  @transaction
  private tick(): void {
    let calibration = 0
    try {
      const now = new Date()
      this.put(now)
      calibration = now.getTime() % this.interval
    }
    finally {
      setTimeout(() => this.tick(), this.interval - calibration)
    }
  }

  @reaction // one-time boot reactive
  protected activate(): void {
    this.tick()
  }

  private put(time: Date): void {
    this.hour = time.getHours()
    this.minute = time.getMinutes()
    this.second = time.getSeconds()
    this.ms = time.getMilliseconds()
  }
}
