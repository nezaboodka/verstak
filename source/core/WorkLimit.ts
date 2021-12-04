// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { sleep } from 'reactronic'

export class WorkLimit {
  private started: number
  private count: number

  constructor(readonly timeLimit: number, readonly countLimit: number) {
    this.started = performance.now()
    this.count = 0
  }

  get isRoundOver(): boolean {
    this.count++
    let result: boolean = this.count > this.countLimit
    if (!result) {
      const now = performance.now()
      const ms = now - this.started
      result = ms > this.timeLimit
    }
    return result
  }

  async requestNextRound(): Promise<void> {
    await sleep(0)
    this.started = performance.now()
    this.count = 0
  }
}

export function animationFrame(): Promise<number> {
  return new Promise(function (resolve: any) {
    requestAnimationFrame(resolve.bind(null, (time: number) => resolve(time)))
  })
}
