// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ObservableObject } from 'reactronic'

export interface DataForSensor {
  window?: unknown
  focus?: unknown
  hover?: unknown
  keyboard?: unknown
  click?: unknown
  wheel?: unknown
  resize?: unknown
  drag?: unknown
  htmlDrag?: unknown
  button?: unknown
}

export class Sensor extends ObservableObject {
  revision: number = 0
  elementDataList: unknown[] = EmptyDataArray

  get topElementData(): unknown {
    return this.elementDataList.length > 0 ? this.elementDataList[0] : undefined
  }
}

export const EmptyDataArray: any[] = []

export function grabElementData(elements: any[], sym: symbol,
  payloadKey: keyof DataForSensor, existing: Array<unknown>): { data: Array<unknown>, window: unknown } {
  let result = existing
  let i = 0
  let j = 0
  let window: unknown = undefined
  while (window === undefined && i < elements.length) {
    const data = elements[i][sym] as DataForSensor | undefined
    if (data !== undefined) {
      window = data['window']
      const payload = data[payloadKey]
      if (payload !== undefined) {
        if (result !== existing)
          payload !== undefined && result.push(payload)
        else if (payload !== undefined) {
          if (payload !== existing[j])
            result = existing.slice(0, j), result.push(payload)
          else
            j++
        }
        else {
          result = existing.slice(0, j)
        }
      }
    }
    i++
  }
  if (j === 0 && result === existing && existing.length > 0)
    result = EmptyDataArray
  return { data: result, window }
}
