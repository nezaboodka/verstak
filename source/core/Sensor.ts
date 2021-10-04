// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ObservableObject, nonreactive, reaction, ToggleRef } from 'reactronic'
import { AssociatedData, AssociatedDataImportance, AssociatedDataPayload } from './AssociatedData'

export class Sensor extends ObservableObject {
  revision: number = 0
  nativeElements: unknown[] = []
  private internalAssociatedDataPath: unknown[] = EmptyAssociatedDataArray

  get associatedDataPath(): unknown[] { return nonreactive(() => this.internalAssociatedDataPath) }
  set associatedDataPath(value: unknown[]) { this.internalAssociatedDataPath = value }
  get topAssociatedData(): unknown {
    return nonreactive(() => this.internalAssociatedDataPath.length > 0 ? this.internalAssociatedDataPath[0] : undefined)
  }
}

export class HtmlElementSensor extends Sensor {
  sourceElement: HTMLElement | undefined = undefined
}

// Scroll

export class Scroll extends Sensor {
  positionX = 0
  positionY = 0
  deltaX = 0
  deltaY = 0
}

export const EmptyAssociatedDataArray: any[] = []

export function grabAssociatedData(elements: any[], sym: symbol,
  payloadKey: keyof AssociatedDataPayload, importanceKey: keyof AssociatedDataImportance,
  existing: Array<unknown>): Array<unknown> {
  let result = existing
  let i = 0
  let j = 0
  let importance = Number.MIN_SAFE_INTEGER
  while (i < elements.length) {
    const data = elements[i][sym] as AssociatedData | undefined
    if (data !== undefined) {
      const payload = data[payloadKey]
      let imp = data[importanceKey]
      if (payload !== undefined || imp !== undefined) {
        imp = imp ?? 0
        if (imp === importance) {
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
        else if (imp > importance) {
          // Raise events importance and start from scratch
          importance = imp
          result = existing
          if (payload !== undefined) {
            if (payload !== existing[0])
              result = [payload]
            else
              j = 1
          }
          else {
            result = EmptyAssociatedDataArray
          }
        }
        else {
          // Ignore event infos with lower importance
        }
      }
    }
    i++
  }
  if (j === 0 && result === existing && existing.length > 0)
    result = EmptyAssociatedDataArray
  return result
}

// export function switchAssociatedDataList(existing: unknown[], updated: unknown[]): unknown[] {
//   if (updated !== existing) {
//     existing.forEach(f => {
//       if (f instanceof ToggleRef && f.value1 !== f.value2)
//         f.value = f.value2
//     })
//     updated.forEach(x => {
//       if (x instanceof ToggleRef)
//         x.value = x.value1
//     })
//   }
//   return updated
// }
