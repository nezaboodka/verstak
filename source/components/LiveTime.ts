// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { RxObject, transaction } from "reactronic"

export class LiveTime extends RxObject {
  hour: number = 0
  minute: number = 0
  second: number = 0
  ms: number = 0
  interval: number = 0

  constructor(interval: number = 1000) {
    super()
    this.interval = interval
    this.tick()
  }

  @transaction
  private tick(): void {
    let calibration = 0
    try {
      const now = new Date()
      this.hour = now.getHours()
      this.minute = now.getMinutes()
      this.second = now.getSeconds()
      this.ms = now.getMilliseconds()
      calibration = now.getTime() % this.interval
    }
    finally {
      setTimeout(() => this.tick(), this.interval - calibration)
    }
  }
}
