// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
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
export const SymResizeObserver: unique symbol = Symbol('ResizeObserver')

export const EmptyDataArray: any[] = []

export function grabElementData(targetPath: any[], sym: symbol, payloadKey: keyof DataForSensor,
  existing: Array<unknown>): Array<unknown> {
  let result = existing
  let i = 0
  let j = 0
  while (i < targetPath.length) {
    const data = targetPath[i][sym] as DataForSensor | undefined
    if (data !== undefined) {
      const payload = data[payloadKey]
      if (payload !== undefined) {
        if (result !== existing) {
          result.push(payload)
        }
        else {
          if (payload !== existing[j]) {
            result = existing.slice(0, j)
            result.push(payload)
          }
          else
            j++
        }
      }
    }
    i++
  }
  if (j === 0 && result === existing && existing.length > 0)
    result = EmptyDataArray
  return result
}

export function findTargetElementData(targetPath: any[], underPointer: any[], sym: symbol,
  anyOfPayloadKeys: Array<keyof DataForSensor>,
  ignoreWindow: boolean = false): { data?: DataForSensor, window: unknown } {
  let result: DataForSensor | undefined = undefined
  let i = 0
  let window: unknown = undefined
  while (window === undefined && i < targetPath.length) {
    const candidate = targetPath[i]
    const candidateData = candidate[sym] as DataForSensor | undefined
    if (candidateData !== undefined) {
      if (!ignoreWindow)
        window = candidateData['window']
      if (result === undefined) {
        for (const payloadKey of anyOfPayloadKeys) {
          const payload = candidateData[payloadKey]
          if (payload !== undefined && underPointer.includes(candidate)) {
            result = candidateData
            break
          }
        }
      }
    }
    i++
  }
  return { data: result, window }
}

export function grabElementDataList(targetPath: any[], sym: symbol,
  anyOfPayloadKeys: Array<keyof DataForSensor>, existing: Array<unknown>,
  ignoreWindow: boolean = false): { dataList: Array<DataForSensor>, window: unknown } {
  let result = existing
  let i = 0
  let j = 0
  let window: unknown = undefined
  while (window === undefined && i < targetPath.length) {
    const candidate = targetPath[i]
    const candidateData = candidate[sym] as DataForSensor | undefined
    if (candidateData !== undefined) {
      if (!ignoreWindow)
        window = candidateData['window']
      let candidateDataWithAnyOfPayloadKeys = undefined
      for (const payloadKey of anyOfPayloadKeys) {
        const payload = candidateData[payloadKey]
        if (payload !== undefined) {
          candidateDataWithAnyOfPayloadKeys = candidateData
          break
        }
      }
      if (candidateDataWithAnyOfPayloadKeys !== undefined) {
        if (result !== existing) {
          result.push(candidateDataWithAnyOfPayloadKeys)
        }
        else {
          if (candidateDataWithAnyOfPayloadKeys !== existing[j]) {
            result = existing.slice(0, j)
            result.push(candidateDataWithAnyOfPayloadKeys)
          }
          else
            j++
        }
      }
    }
    i++
  }
  if (j === 0 && result === existing && existing.length > 0)
    result = EmptyDataArray
  return { dataList: result as Array<DataForSensor>, window }
}
