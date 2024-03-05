// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { MergeList, MergedItem, RxNode } from "reactronic"
import { ElImpl, ElLayoutInfo, InitialElLayoutInfo, SplitView } from "./El.js"
import { Drivers, isSplitViewPartition } from "./Elements.js"
import { clamp } from "./ElUtils.js"

const DEBUG = false

const eps = 0.0001

// a === b
export function equal(a: number, b: number): boolean {
  return Math.abs(a - b) <= eps
}

// a < b
export function less(a: number, b: number): boolean {
  return b - a > eps
}

// a > b
export function greater(a: number, b: number): boolean {
  return a - b > eps
}

export function relayoutUsingSplitter(splitViewNode: RxNode<ElImpl>, deltaPx: number, index: number, initialSizesPx: Array<{ node: RxNode<ElImpl>, sizePx: number }>, priorities?: ReadonlyArray<number>): void {
  if (priorities === undefined) {
    priorities = getPrioritiesForSplitter(index + 1, initialSizesPx.length)
  }
  const containerSizePx = splitViewNode.element.splitView === SplitView.horizontal
    ? splitViewNode.element.layoutInfo?.contentSizeXpx ?? 0
    : splitViewNode.element.layoutInfo?.contentSizeYpx ?? 0
  DEBUG && console.log(`(splitter) delta = ${deltaPx}, container = ${containerSizePx}, size = ${initialSizesPx.reduce((p, c) => p + c.sizePx, 0)}, index = ${index}`)
  resizeUsingDelta(splitViewNode, deltaPx, index + 1, priorities, initialSizesPx, true)
  layout(splitViewNode)
}

export function relayout(splitViewNode: RxNode<ElImpl>, priorities: ReadonlyArray<number>, manuallyResizablePriorities: ReadonlyArray<number>, sizesPx: Array<{ node: RxNode<ElImpl>, sizePx: number }>): void {
  // DEBUG && console.clear()
  const containerSizePx = splitViewNode.element.splitView === SplitView.horizontal
    ? splitViewNode.element.layoutInfo?.contentSizeXpx ?? 0
    : splitViewNode.element.layoutInfo?.contentSizeYpx ?? 0
  let deltaPx = containerSizePx - sizesPx.reduce((p, c) => p + c.sizePx, 0)
  DEBUG && console.log(`(relayout) ∆ = ${n(deltaPx)}px, container = ${n(containerSizePx)}px, priorities = ${priorities.map(x => `0x${x.toString(2)}`).join(",")}`)
  deltaPx = resizeUsingDelta(splitViewNode, deltaPx, sizesPx.length, priorities, sizesPx)
  DEBUG && console.log(`(relayout) ~∆ = ${n(deltaPx)}, container = ${n(containerSizePx, 3)}px, total = ${n(sizesPx.reduce((p, c) => p + c.sizePx, 0), 3)}px`)
  if (deltaPx < -(1 / devicePixelRatio)) {
    DEBUG && console.log(`%c${deltaPx}px`, "color: lime")
    resizeUsingDelta(splitViewNode, deltaPx, sizesPx.length, manuallyResizablePriorities, sizesPx, true)
  }
  layout(splitViewNode)
  // this._saveProportions()
}

export function resizeUsingDelta(splitViewNode: RxNode<ElImpl>, deltaPx: number, index: number, priorities: ReadonlyArray<number>, sizesPx: Array<{ node: RxNode<ElImpl>, sizePx: number }>, force: boolean = false): number {
  const isHorizontal = splitViewNode.element.splitView === SplitView.horizontal
  let beforeDeltaPx = 0
  if (sizesPx.length > 0 && deltaPx !== 0) {
    let minBeforeDeltaPx = 0
    let maxBeforeDeltaPx = 0
    for (let i = 0; i < index; i++) {
      const size = isHorizontal ? sizesPx[i].node.element.widthPx : sizesPx[i].node.element.heightPx
      minBeforeDeltaPx += size.minPx - sizesPx[i].sizePx
      maxBeforeDeltaPx += size.maxPx - sizesPx[i].sizePx
    }
    const hasAfter = index < sizesPx.length
    let minAfterDeltaPx = hasAfter ? 0 : Number.NEGATIVE_INFINITY
    let maxAfterDeltaPx = hasAfter ? 0 : Number.POSITIVE_INFINITY
    for (let i = index; i < sizesPx.length; i++) {
      const size = isHorizontal ? sizesPx[i].node.element.widthPx : sizesPx[i].node.element.heightPx
      minAfterDeltaPx += sizesPx[i].sizePx - size.maxPx
      maxAfterDeltaPx += sizesPx[i].sizePx - size.minPx
    }
    const minDeltaPx = Math.max(minBeforeDeltaPx, minAfterDeltaPx)
    const maxDeltaPx = Math.min(maxBeforeDeltaPx, maxAfterDeltaPx)
    const clampedDeltaPx = clamp(deltaPx, minDeltaPx, maxDeltaPx)

    DEBUG && console.log(`%c${sizesPx.map((x, i) => {
      const size = isHorizontal ? x.node.element.widthPx : x.node.element.heightPx
      return `${i}: ${size.minPx}..${x.sizePx}..${size.maxPx} (px)`
    }).join("\n")}`, "color: skyblue")
    DEBUG && console.log(`[${Array.from({ length: index }).map((x, i) => i).join(",")} | ${Array.from({ length: Math.max(0, sizesPx.length - index) }).map((x, i) => index + i).join(",")}] min = ${n(minDeltaPx)}, ${n(deltaPx)} -> ${n(clampedDeltaPx)}, max = ${n(maxDeltaPx)}`)

    if (clampedDeltaPx !== 0) {
      if (index > 0)
        beforeDeltaPx = distribute(1, clampedDeltaPx, index, priorities, sizesPx, isHorizontal, force)
      if (hasAfter)
        distribute(-1, clampedDeltaPx, index, priorities, sizesPx, isHorizontal, force)
    }
  }
  for (let i = 0; i < sizesPx.length; i++) {
    const el = sizesPx[i].node.element
    if (el.layoutInfo === undefined)
      el.layoutInfo = new ElLayoutInfo(InitialElLayoutInfo)
    el.layoutInfo.effectiveSizePx = sizesPx[i].sizePx
    DEBUG && console.log(`[${i}]: set size = ${n(sizesPx[i].sizePx)}px`)
  }
  return beforeDeltaPx
}

export function layout(splitViewNode: RxNode<ElImpl>): void {
  const isHorizontal = splitViewNode.element.splitView === SplitView.horizontal
  let posPx = 0
  let shrinkBefore = false
  let growBefore = false
  let isSplitterEnabled = false
  const sizesPx = []
  const layoutInfo = splitViewNode.element.layoutInfo
  const offsetXpx = layoutInfo?.offsetXpx ?? 0
  const offsetYpx = layoutInfo?.offsetYpx ?? 0
  for (const item of splitViewNode.children.items()) {
    const child = item.instance
    if (isSplitViewPartition(child.driver)) {
      const el = child.element as ElImpl
      if (el.native !== undefined) {
        const current = item
        const sizePx = isHorizontal ? el.widthPx : el.heightPx
        const effectiveSizePx = el.layoutInfo?.effectiveSizePx ?? 0
        posPx += effectiveSizePx
        sizesPx.push(effectiveSizePx)
        // Set Attributes
        el.native.setAttribute("rx-max", equal(effectiveSizePx, sizePx.maxPx) ? "true" : "false")
        el.native.setAttribute("rx-min", equal(effectiveSizePx, sizePx.minPx) ? "true" : "false")
        // Splitter Visibility
        shrinkBefore ||= greater(effectiveSizePx - sizePx.minPx, 0)
        growBefore ||= greater(sizePx.maxPx - effectiveSizePx, 0)
        let shrinkAfter = false
        let growAfter = false
        for (const item of splitViewNode.children.items(current)) {
          const child = item.instance
          if (isSplitViewPartition(child.driver)) {
            const el = child.element as ElImpl
            if (el.native !== undefined) {
              const sizePx = isHorizontal ? el.widthPx : el.heightPx
              const effectiveSizePx = el.layoutInfo?.effectiveSizePx ?? 0
              shrinkAfter ||= greater(effectiveSizePx - sizePx.minPx, 0)
              growAfter ||= greater(sizePx.maxPx - effectiveSizePx, 0)
              isSplitterEnabled = growBefore && shrinkAfter || growAfter && shrinkBefore
              if (isSplitterEnabled)
                break
            }
          }
        }
      }
    }
    else if (child.driver === Drivers.splitter) {
      const el = child.element as ElImpl
      if (el.native !== undefined) {
        // DEBUG && console.log(`(${isHorizontal ? "horizontal" : "vertical"}) pos = ${posPx}px`)
        el.style.display = isSplitterEnabled ? "block" : "none"
        if (isHorizontal)
          el.style.left = `${offsetXpx + posPx}px`
        else
          el.style.top = `${offsetYpx + posPx}px`
      }
    }
  }
  const wrapper = splitViewNode.children.firstMergedItem()?.instance as RxNode<ElImpl> | undefined
  if (wrapper !== undefined) {
    if (isHorizontal)
      wrapper.element.style.gridTemplateColumns = sizesPx.map(x => `${x}px`).join(" ")
    else
      wrapper.element.style.gridTemplateRows = sizesPx.map(x => `${x}px`).join(" ")
  }
  // Is Overflowing
  const containerSizePx = (isHorizontal ? layoutInfo?.contentSizeXpx : layoutInfo?.contentSizeYpx) ?? 0
  if (greater(posPx, containerSizePx)) {
    if (isHorizontal)
      splitViewNode.element.style.overflow = "scroll hidden"
    else
      splitViewNode.element.style.overflow = "hidden scroll"
  }
  else
    splitViewNode.element.style.overflow = "hidden"
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

export function getPrioritiesForSizeChanging(item: MergedItem<any>, children: MergeList<RxNode>): ReadonlyArray<number> {
  const result = []
  let i = 0
  let changedItemIndex = -1
  for (const child of children.items()) {
    if (isSplitViewPartition(child.instance.driver)) {
      if (child !== item)
        result.push(1 << i)
      else
        changedItemIndex = i
      i++
    }
  }
  if (changedItemIndex !== -1)
    result.push(1 << changedItemIndex)
  return result
}

export function getPrioritiesForEmptySpaceDistribution(isHorizontal: boolean, children: MergeList<RxNode>): { resizable: ReadonlyArray<number>, manuallyResizable: ReadonlyArray<number> } {
  let r = 0
  let mr = 0
  let i = 0
  for (const child of children.items()) {
    if (isSplitViewPartition(child.instance.driver)) {
      const el = child.instance.element as ElImpl
      const strength = (isHorizontal ? el.stretchingStrengthX : el.stretchingStrengthY) ?? 1
      if (strength > 0)
        r |= 1 << i
      else
        mr |= 1 << i
      i++
    }
  }
  return { resizable: [r], manuallyResizable: [mr] }
}

function getFractionCount(isHorizontal: boolean, children: Array<RxNode<ElImpl>>, vector: number, index: number, force: boolean = false): number {
  let result = 0
  for (const i of indexes(vector, index)) {
    const growth = (isHorizontal ? children[i].element.stretchingStrengthX : children[i].element.stretchingStrengthY) ?? 1
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

function n(value: number, fractionDigits: number = 2): string {
  return value === 0 ? "0" : value.toFixed(fractionDigits)
}

function distribute(sign: number, deltaPx: number, index: number, priorities: ReadonlyArray<number>, sizesPx: Array<{ node: RxNode<ElImpl>, sizePx: number }>, isHorizontal: boolean, force: boolean): number {
  for (let priority = 0; priority < priorities.length; priority++) {
    const vector = priorities[priority]
    let fractionCount = getFractionCount(isHorizontal, sizesPx.map(x => x.node), vector, sign * index, force)
    do {
      const fractionSizePx = getFractionSizePx(deltaPx, fractionCount)
      fractionCount = 0
      for (const i of indexes(vector, sign * index)) {
        const child = sizesPx[i].node
        const initialSizePx = sizesPx[i].sizePx
        const strength = isHorizontal ? (child.element.stretchingStrengthX ?? 1) : (child.element.stretchingStrengthY ?? 1)
        const growth = strength > 0 ? strength : (force ? 1 : 0)
        const newSizePx = initialSizePx + sign * (growth * fractionSizePx)
        const size = isHorizontal ? sizesPx[i].node.element.widthPx : sizesPx[i].node.element.heightPx
        const sizePx = clamp(newSizePx, size.minPx, size.maxPx)
        deltaPx = deltaPx - sign * (sizePx - initialSizePx)
        sizesPx[i].sizePx = sizePx
        if (sizesPx[i].sizePx > size.minPx && sizesPx[i].sizePx < size.maxPx) {
          fractionCount += growth
        }
      }
    } while (Math.abs(deltaPx) > eps && fractionCount > 0)
    if (Math.abs(deltaPx) <= eps) {
      break
    }
  }
  return deltaPx
}
