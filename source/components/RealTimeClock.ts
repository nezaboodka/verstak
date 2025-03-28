import { TriggeringObject, atomicBlock, reaction } from "reactronic"

export class RealTimeClock extends TriggeringObject {
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

  @atomicBlock
  pause(value: boolean = true): void {
    this.paused = value
  }

  @atomicBlock
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

  @reaction // one-time boot reaction
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
