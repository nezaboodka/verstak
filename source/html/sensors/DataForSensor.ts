// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

export interface DataForSensor {
  window?: unknown
  focus?: unknown
  hover?: unknown
  keyboard?: unknown
  click?: unknown
  wheel?: unknown
  resize?: unknown
  drag?: unknown
  draggable?: unknown
  htmlDrag?: unknown
  htmlDraggable?: unknown
  button?: unknown
}

export const SymDataForSensor: unique symbol = Symbol('DataForSensor')

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
          if (payload !== existing[j]) {
            result = existing.slice(0, j)
            result.push(payload)
          }
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
