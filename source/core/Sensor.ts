// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ObservableObject } from 'reactronic'
import { AssociatedData } from './AssociatedData'

export class Sensor extends ObservableObject {
  revision: number = 0
  nativeElements: unknown[] = []
  associatedDataPath: unknown[] = EmptyAssociatedDataArray

  get topAssociatedData(): unknown {
    return this.associatedDataPath.length > 0 ? this.associatedDataPath[0] : undefined
  }
}

export class HtmlElementSensor extends Sensor {
  sourceElement: HTMLElement | undefined = undefined
}

export const EmptyAssociatedDataArray: any[] = []

export function grabAssociatedData(elements: any[], sym: symbol,
  payloadKey: keyof AssociatedData, existing: Array<unknown>): Array<unknown> {
  let result = existing
  let i = 0
  let j = 0
  while (i < elements.length) {
    const data = elements[i][sym] as AssociatedData | undefined
    if (data !== undefined) {
      const payload = data[payloadKey]
      if (payload !== undefined) {
        // Handle event infos of the same importance
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
    result = EmptyAssociatedDataArray
  return result
}
