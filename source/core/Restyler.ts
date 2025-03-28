// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { cache, atomicRun } from "reactronic"

export function restyler<T>(restyle: () => T): TriggeringStyles<T> {
  return atomicRun(() => new TriggeringStyles<T>(restyle))
}

export class TriggeringStyles<T> {
  constructor(private readonly restyle: () => T) {
  }

  @cache
  protected cache(): T {
    return this.restyle()
  }

  get class(): T {
    return this.cache()
  }
}
