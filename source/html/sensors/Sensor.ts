// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ObservableObject } from "reactronic"

export class Sensor extends ObservableObject {
  revision: number = 0
  elementDataList: unknown[] = []

  get topElementData(): unknown {
    return this.elementDataList.length > 0 ? this.elementDataList[0] : undefined
  }
}
