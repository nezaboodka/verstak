// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ObservableObject, Ref, Transaction, Isolation } from "reactronic"

export type ValuesOrRefs<T> = {
  [K in keyof T]: T[K] | Ref<T[K]>
}

export function observableModel<T extends Object>(modelProps: ValuesOrRefs<T>): T {
  return Transaction.run({ isolation: Isolation.disjoinFromOuterTransaction }, () =>
    new ObservableComposition(modelProps) as unknown as T)
}

class ObservableComposition<T> extends ObservableObject {
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
