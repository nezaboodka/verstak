// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { MergeList, MergedItem, RxNode } from "reactronic"
import { clamp } from "./ElUtils.js"
import { ElImpl, ElLayoutInfo, InitialElLayoutInfo, SplitView } from "./El.js"

export function relayoutUsingSplitter(splitViewNode: RxNode<ElImpl>, deltaPx: number, index: number, initialSizesPx: Array<{ node: RxNode<ElImpl>, sizePx: number }>, priorities?: ReadonlyArray<number>): void {
  if (priorities === undefined) {
    priorities = getPrioritiesForSplitter(index + 1, initialSizesPx.length)
  }
  const native = splitViewNode.element.native as HTMLElement
  const isHorizontal = splitViewNode.element.splitView === SplitView.horizontal
  const containerSizePx = isHorizontal ? native.clientWidth : native.clientHeight
  const freeSpacePx = containerSizePx - initialSizesPx.reduce((p, c) => p + c.sizePx, 0)
  // console.log(`delta = ${deltaPx}, container = ${containerSizePx}, size = ${initialSizesPx.reduce((p, c) => p + c.sizePx, 0)}, free space = ${freeSpacePx}, index = ${index}`)
  resizeUsingDelta(splitViewNode, containerSizePx, freeSpacePx, deltaPx, index + 1, priorities, initialSizesPx, true)
  layout(splitViewNode)
}

export function relayout(splitViewNode: RxNode<ElImpl>, priorities: ReadonlyArray<number>, sizesPx: Array<{ node: RxNode<ElImpl>, sizePx: number }>): void {
  const native = splitViewNode.element.native as HTMLElement
  const isHorizontal = splitViewNode.element.splitView === SplitView.horizontal
  const containerSizePx = isHorizontal ? native.clientWidth : native.clientHeight
  const deltaPx = containerSizePx - sizesPx.reduce((p, c) => p + c.sizePx, 0)
  const freeSpacePx = Math.max(0, deltaPx)
  // console.log(`delta = ${deltaPx} px, container = ${containerSizePx} px`)
  resizeUsingDelta(splitViewNode, containerSizePx, freeSpacePx, deltaPx, sizesPx.length, priorities, sizesPx)
  layout(splitViewNode)
  // this._saveProportions()
}

export function resizeUsingDelta(splitViewNode: RxNode<ElImpl>, containerSizePx: number, freeSpacePx: number, deltaPx: number, index: number, priorities: ReadonlyArray<number>, sizesPx: Array<{ node: RxNode<ElImpl>, sizePx: number }>, force: boolean = false): void {
  const isHorizontal = splitViewNode.element.splitView === SplitView.horizontal
  if (sizesPx.length > 0 && deltaPx !== 0) {

    let minBeforeDeltaPx = 0
    let maxBeforeDeltaPx = 0
    for (let i = 0; i < index; i++) {
      const size = isHorizontal ? sizesPx[i].node.element.width : sizesPx[i].node.element.height
      minBeforeDeltaPx += (size.min ? Number.parseInt(size.min) : 0) - sizesPx[i].sizePx
      maxBeforeDeltaPx += (size.max ? Number.parseInt(size.max) : Number.POSITIVE_INFINITY) - sizesPx[i].sizePx
    }
    const hasAfter = index < sizesPx.length
    let sizeAfterPx = 0
    let minAfterDeltaPx = hasAfter ? 0 : Number.NEGATIVE_INFINITY
    let maxAfterDeltaPx = hasAfter ? 0 : Number.POSITIVE_INFINITY
    for (let i = index; i < sizesPx.length; i++) {
      const size = isHorizontal ? sizesPx[i].node.element.width : sizesPx[i].node.element.height
      sizeAfterPx += sizesPx[i].sizePx
      minAfterDeltaPx += sizesPx[i].sizePx - (size.max ? Number.parseInt(size.max) : Number.POSITIVE_INFINITY)
      maxAfterDeltaPx += sizesPx[i].sizePx - (size.min ? Number.parseInt(size.min) : 0)
    }
    const minDeltaPx = Math.max(minBeforeDeltaPx, minAfterDeltaPx)
    const maxDeltaPx = Math.min(maxBeforeDeltaPx, maxAfterDeltaPx + freeSpacePx)
    const clampedDeltaPx = clamp(deltaPx, minDeltaPx, maxDeltaPx)

    console.log(`[${Array.from({ length: index }).map((x, i) => i).join(",")} | ${Array.from({ length: Math.max(0, sizesPx.length - index) }).map((x, i) => index + i).join(",")}] min = ${minDeltaPx} (${minBeforeDeltaPx}, ${minAfterDeltaPx}), ${deltaPx} -> ${clampedDeltaPx}, max = ${maxDeltaPx} (${maxBeforeDeltaPx}, ${maxAfterDeltaPx})`)

    if (clampedDeltaPx !== 0) {
      let lastGrowingElementIndex = undefined
      if (index > 0) {
        let runningReminderPx = 0
        let beforeDeltaPx = clampedDeltaPx
        for (let priority = 0; priority < priorities.length; priority++) {
          const vector = priorities[priority]
          let fractionCount = getFractionCount(isHorizontal, sizesPx.map(x => x.node), vector, index, force)
          do {
            const fractionSizePx = getFractionSizePx(beforeDeltaPx, fractionCount)
            fractionCount = 0
            for (const i of indexes(vector, index)) {
              const child = sizesPx[i].node
              const initialSizePx = sizesPx[i].sizePx
              const g = isHorizontal ? (child.element.stretchingStrengthX ?? 0) : (child.element.stretchingStrengthY ?? 0)
              const growth = g > 0 ? g : (force ? 1 : 0)
              if (growth > 0)
                lastGrowingElementIndex = i
              const appendagePx = growth * fractionSizePx
              const newSizePx = initialSizePx + appendagePx
              let flooredNewSizePx = Math.floor(newSizePx * devicePixelRatio) / devicePixelRatio
              runningReminderPx += newSizePx - flooredNewSizePx
              if (runningReminderPx >= 1) {
                runningReminderPx -= 1
                flooredNewSizePx += 1
              }
              const size = isHorizontal ? sizesPx[i].node.element.width : sizesPx[i].node.element.height
              const minSizePx = size.min ? Number.parseInt(size.min) : 0
              const maxSizePx = size.max ? Number.parseInt(size.max) : Number.POSITIVE_INFINITY
              const sizePx = clamp(flooredNewSizePx, minSizePx, maxSizePx)
              // console.log(`[${i}]: min = ${minSizePx}, max = ${maxSizePx}, growth = ${growth}, flooredNewSizePx = ${flooredNewSizePx}, size = ${sizePx} px`)
              beforeDeltaPx -= sizePx - initialSizePx
              sizesPx[i].sizePx = sizePx
              if (sizesPx[i].sizePx > minSizePx && sizesPx[i].sizePx < maxSizePx) {
                fractionCount += growth
              }
            }
          } while (beforeDeltaPx > 0 && fractionCount > 0 && Math.abs(beforeDeltaPx) >= devicePixelRatio)
          if (Math.abs(beforeDeltaPx) < devicePixelRatio) {
            break
          }
        }
        if (hasAfter && maxAfterDeltaPx > 0) {
          let runningReminderPx = 0
          let afterDeltaPx = clampedDeltaPx
          for (let priority = 0; priority < priorities.length; priority++) {
            const vector = priorities[priority]
            let fractionCount = getFractionCount(isHorizontal, sizesPx.map(x => x.node), vector, -index, force)
            do {
              const fractionSizePx = getFractionSizePx(afterDeltaPx, fractionCount)
              fractionCount = 0
              for (const i of indexes(vector, -index)) {
                const child = sizesPx[i].node
                const initialSizePx = sizesPx[i].sizePx
                const g = isHorizontal ? (child.element.stretchingStrengthX ?? 0) : (child.element.stretchingStrengthY ?? 0)
                const growth = g > 0 ? g : (force ? 1 : 0)
                if (growth > 0)
                  lastGrowingElementIndex = i
                const appendagePx = growth * fractionSizePx
                const newSizePx = initialSizePx - appendagePx
                let flooredNewSizePx = Math.floor(newSizePx * devicePixelRatio) / devicePixelRatio
                runningReminderPx += newSizePx - flooredNewSizePx
                if (runningReminderPx >= 1) {
                  runningReminderPx -= 1
                  flooredNewSizePx += 1
                }
                const size = isHorizontal ? sizesPx[i].node.element.width : sizesPx[i].node.element.height
                const minSizePx = size.min ? Number.parseInt(size.min) : 0
                const maxSizePx = size.max ? Number.parseInt(size.max) : Number.POSITIVE_INFINITY
                const sizePx = clamp(flooredNewSizePx, minSizePx, maxSizePx)
                afterDeltaPx += sizePx - initialSizePx
                sizesPx[i].sizePx = sizePx
                if (sizesPx[i].sizePx > minSizePx && sizesPx[i].sizePx < maxSizePx) {
                  fractionCount += growth
                }
              }
            } while (afterDeltaPx > 0 && fractionCount > 0 && Math.abs(containerSizePx - sizesPx.reduce((p, c) => p + c.sizePx, 0)) >= devicePixelRatio)
            if (Math.abs(containerSizePx - sizesPx.reduce((p, c) => p + c.sizePx, 0)) < devicePixelRatio) {
              break
            }
          }
        }
        if (lastGrowingElementIndex !== undefined) {
          // const last = sizesPx[lastGrowingElementIndex].node
          // const lastSize = isHorizontal ? last.element.width : last.element.height
          // const lastMinSizePx = lastSize.min ? Number.parseInt(lastSize.min) : 0
          // const lastMaxSizePx = lastSize.max ? Number.parseInt(lastSize.max) : Number.POSITIVE_INFINITY
          // sizesPx[lastGrowingElementIndex].sizePx = clamp(sizesPx[lastGrowingElementIndex].sizePx + containerSizePx - sizesPx.reduce((p, c) => p + c.sizePx, 0), lastMinSizePx, lastMaxSizePx)
        }
      }
    }
  }
  for (let i = 0; i < sizesPx.length; i++) {
    const el = sizesPx[i].node.element
    if (el.layoutInfo === undefined)
      el.layoutInfo = new ElLayoutInfo(InitialElLayoutInfo)
    el.layoutInfo.effectiveSizePx = sizesPx[i].sizePx
  }
}

export function layout(splitViewNode: RxNode<ElImpl>): void {
  for (const child of splitViewNode.children.items()) {
    if (child.instance.driver.isPartition) {
      const el = child.instance.element as ElImpl
      if (el.native !== undefined) {
        const s = el.style
        if (splitViewNode.element.splitView === SplitView.horizontal) {
          s.minWidth = s.maxWidth = `${el.layoutInfo?.effectiveSizePx ?? 0}px`
        }
        else {
          s.minHeight = s.maxHeight = `${el.layoutInfo?.effectiveSizePx ?? 0}px`
        }
        console.log(`(layout) ${el.index}: size = ${el.layoutInfo?.effectiveSizePx}px`)
        // Splitter Visibility
        // let canBeResizedBefore = false
        // for (let j = 0; !canBeResizedBefore && j < i; j++) {
        //   canBeResizedBefore = partitions[j].minSizePx !== partitions[j].maxSizePx
        // }
        // let canBeResizedAfter = false
        // for (let j = i; !canBeResizedAfter && j < partitions.length; j++) {
        //   canBeResizedAfter = partitions[j].minSizePx !== partitions[j].maxSizePx
        // }
        // splitter.isVisible = canBeResizedBefore && canBeResizedAfter
      }
    }
  }
  // const sizePx = posPx + (partitions.length > 0 ? partitions[partitions.length - 1].sizePx : 0)
  // this._isOverflowing = sizePx > this._sizePx
}

// Split View Part Priorities

export function getPrioritiesForSplitter(index: number, size: number): ReadonlyArray<number> {
  const result = []
  let i = index - 1
  let j = index
  while (i >= 0 || j < size) {
    if (i >= 0 && j < size) {
      result.push((1 << i--) | (1 << j++))
    }
    else if (i >= 0) {
      result.push(1 << i--)
    }
    else {
      result.push(1 << j++)
    }
  }
  return result
}

export function getPrioritiesForSizeChanging(item: MergedItem<any>, children: MergeList<RxNode<ElImpl>>): ReadonlyArray<number> {
  const result = []
  let i = 0
  let changedItemIndex = -1
  for (const child of children.items()) {
    if (child !== item)
      result.push(1 << i)
    else
      changedItemIndex = i
    i++
  }
  if (changedItemIndex !== -1)
    result.push(1 << changedItemIndex)
  return result
}

function getFractionCount(isHorizontal: boolean, children: Array<RxNode<ElImpl>>, vector: number, index: number, force: boolean = false): number {
  let result = 0
  for (const i of indexes(vector, index)) {
    const growth = (isHorizontal ? children[i].element.stretchingStrengthX : children[i].element.stretchingStrengthY) ?? 0
    result += growth > 0 ? growth : (force ? 1 : 0)
  }
  return result
}

function getFractionSizePx(spacePx: number, fractionCount: number): number {
  return fractionCount > 0 ? spacePx / fractionCount : 0
}

function* indexes(vector: number, index: number): Generator<number> {
  let i = 0
  if (index < 0) { // go left (after)
    i = -index
    vector >>>= i
    while (vector > 0) {
      if (vector & 1) {
        yield i
      }
      vector >>>= 1
      i++
    }
  }
  else { // go right (before)
    while (i < index) {
      if (vector & 1) {
        yield i
      }
      vector >>>= 1
      i++
    }
  }
}
