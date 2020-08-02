// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2020 Yury Chetyrko <ychetyrko@gmail.com>
// License: https://raw.githubusercontent.com/nezaboodka-front/reactronic/master/LICENSE

import { cached, Transaction } from 'reactronic'

export function restyler<T>(restyle: () => T): Restyler<T> {
  return Transaction.run('restyle', () => new Restyler<T>(restyle))
}

export class Restyler<T> {
  constructor(private readonly restyle: () => T) {
  }

  @cached
  protected cache(): T {
    return this.restyle()
  }

  get class(): T {
    return this.cache()
  }
}
