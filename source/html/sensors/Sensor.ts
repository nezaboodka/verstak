// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { SubscribingObject } from 'reactronic'

export class Sensor extends SubscribingObject {
  revision: number = 0
  elementDataList: unknown[] = []

  get topElementData(): unknown {
    return this.elementDataList.length > 0 ? this.elementDataList[0] : undefined
  }
}
