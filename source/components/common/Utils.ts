// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { SxObject, Ref, runTransactional, Isolation } from "reactronic"

export type ValuesOrRefs<T> = {
  [K in keyof T]: T[K] | Ref<T[K]>
}

export function sxModel<T extends Object>(modelProps: ValuesOrRefs<T>): T {
  return runTransactional({ isolation: Isolation.disjoinFromOuterTransaction }, () =>
    new SxComposition(modelProps) as unknown as T)
}

class SxComposition<T> extends SxObject {
  constructor(composition: ValuesOrRefs<T>) {
    super()
    convertValuesToFieldsAndRefsToGetSet(this, composition)
  }
}

function convertValuesToFieldsAndRefsToGetSet<T>(target: Object, composition: ValuesOrRefs<T>): void {
  for (const key in composition) {
    const x = composition[key]
    if (x instanceof Ref) {
      Object.defineProperty(target, key, {
        get() { return x.variable },
        set(v: any) { x.variable = v; return true },
        enumerable: true,
        // configurable: false,
      })
    }
    else {
      const t = target as any
      t[key] = x
    }
  }
}
