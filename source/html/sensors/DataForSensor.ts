// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

export interface DataForSensor {
  context?: unknown
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

export const SymDataForSensor: unique symbol = Symbol("DataForSensor")
export const SymResizeObserver: unique symbol = Symbol("ResizeObserver")

export const EmptyDataArray: any[] = []

export function findTargetElementData(targetPath: any[], underPointer: any[], sym: symbol,
  anyOfPayloadKeys: Array<keyof DataForSensor>,
  ignoreWindow: boolean = false): { data?: DataForSensor, window: unknown } {
  let result: DataForSensor | undefined = undefined
  let i = 0
  let window: unknown = undefined
  while (i < targetPath.length) {
    const candidate = targetPath[i]
    const candidateData = candidate[sym] as DataForSensor | undefined
    if (candidateData !== undefined) {
      if (!ignoreWindow) {
        if (window === undefined)
          window = candidateData["window"]
        else if (window !== candidateData["window"])
          break
      }
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
  payloadKey: keyof DataForSensor, existing: Array<unknown>,
  ignoreWindow: boolean = false, predicate: (element: any) => boolean = () => false): { dataList: Array<unknown>, window: unknown, activeData: unknown } {
  let result = existing
  let i = 0
  let j = 0
  let window: unknown = undefined
  let activeData: unknown = undefined
  while (i < targetPath.length) {
    let payload = undefined
    const candidate = targetPath[i]
    const candidateData = candidate[sym] as DataForSensor | undefined
    if (candidateData !== undefined) {
      if (!ignoreWindow) {
        if (window === undefined)
          window = candidateData["window"]
        else if (window !== candidateData["window"])
          break
      }
      payload = candidateData[payloadKey]
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
    if (activeData === undefined && predicate(candidate)) {
      activeData = payload
    }
    i++
  }
  if (j === 0 && result === existing && existing.length > 0)
    result = EmptyDataArray
  return { dataList: result, window, activeData }
}
