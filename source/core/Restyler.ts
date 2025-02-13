// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { cachedResult, atomicAction } from "reactronic"

export function restyler<T>(restyle: () => T): ObservablesStyles<T> {
  return atomicAction(() => new ObservablesStyles<T>(restyle))
}

export class ObservablesStyles<T> {
  constructor(private readonly restyle: () => T) {
  }

  @cachedResult
  protected cache(): T {
    return this.restyle()
  }

  get class(): T {
    return this.cache()
  }
}
