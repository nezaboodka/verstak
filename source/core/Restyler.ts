// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { cached, Transaction } from 'reactronic'

export function restyler<T>(restyle: () => T): RxStyler<T> {
  return Transaction.run(null, () => new RxStyler<T>(restyle))
}

export class RxStyler<T> {
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
