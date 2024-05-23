// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { MergeList, RxNode } from "reactronic"
import { ElImpl, ElLayoutInfo, InitialElLayoutInfo, Direction } from "./El.js"
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
  const containerSizePx = splitViewNode.element.splitView === Direction.horizontal
    ? splitViewNode.element.layoutInfo?.contentSizeXpx ?? 0
    : splitViewNode.element.layoutInfo?.contentSizeYpx ?? 0
  DEBUG && console.group(`(splitter) delta = ${deltaPx}, container = ${containerSizePx}, size = ${initialSizesPx.reduce((p, c) => p + c.sizePx, 0)}, index = ${index}`)
  resizeUsingDelta(splitViewNode, deltaPx, index + 1, priorities, initialSizesPx, true)
  DEBUG && console.groupEnd()
  layout(splitViewNode)
}

export function relayout(splitViewNode: RxNode<ElImpl>, priorities: ReadonlyArray<number>, manuallyResizablePriorities: ReadonlyArray<number>, sizesPx: Array<{ node: RxNode<ElImpl>, sizePx: number }>): void {
  // DEBUG && console.clear()
  const containerSizePx = splitViewNode.element.splitView === Direction.horizontal
    ? splitViewNode.element.layoutInfo?.contentSizeXpx ?? 0
    : splitViewNode.element.layoutInfo?.contentSizeYpx ?? 0
  const totalSizePx = sizesPx.reduce((p, c) => p + c.sizePx, 0)
  let deltaPx = containerSizePx - totalSizePx
  DEBUG && console.log(printPriorities(priorities, manuallyResizablePriorities), "color: grey", "color:", "color: grey", "color:")
  DEBUG && console.group(`(relayout) ∆ = ${n(deltaPx)}px, container = ${n(containerSizePx)}px, total = ${totalSizePx}`)
  deltaPx = resizeUsingDelta(splitViewNode, deltaPx, sizesPx.length, priorities, sizesPx)
  DEBUG && console.groupEnd()
  DEBUG && console.group(`(relayout) ~∆ = ${n(deltaPx)}, container = ${n(containerSizePx, 3)}px, total = ${n(sizesPx.reduce((p, c) => p + c.sizePx, 0), 3)}px`)
  if (deltaPx < -(1 / devicePixelRatio)) {
    DEBUG && console.log(`%c${deltaPx}px`, "color: lime")
    resizeUsingDelta(splitViewNode, deltaPx, sizesPx.length, manuallyResizablePriorities, sizesPx, true)
  }
  DEBUG && console.groupEnd()
  layout(splitViewNode)
  // this._saveProportions()
}

export function resizeUsingDelta(splitViewNode: RxNode<ElImpl>, deltaPx: number, index: number, priorities: ReadonlyArray<number>, sizesPx: Array<{ node: RxNode<ElImpl>, sizePx: number }>, force: boolean = false): number {
  const isHorizontal = splitViewNode.element.splitView === Direction.horizontal
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

    DEBUG && console.log("Initial sizes:")
    DEBUG && sizesPx.map((x, i) => {
      const size = isHorizontal ? x.node.element.widthPx : x.node.element.heightPx
      return console.log(`%c  ${i}: ${size.minPx}..${x.sizePx}..${size.maxPx} (px)`, "color: skyblue")
    })
    DEBUG && console.log(`[%c${Array.from({ length: index }).map((x, i) => i).join(",")}%c | %c${Array.from({ length: Math.max(0, sizesPx.length - index) }).map((x, i) => index + i).join(",")}%c] ∆ = ${n(minDeltaPx)}px..${n(deltaPx)}px -> %c${n(clampedDeltaPx)}px%c..${n(maxDeltaPx)}px`, "color: #00BB00", "color:", "color: #00BB00", "color:", "color: yellow", "color:")

    if (clampedDeltaPx !== 0) {
      DEBUG && console.log("distribution: start")
      if (index > 0)
        beforeDeltaPx = distribute(1, clampedDeltaPx, index, priorities, sizesPx, isHorizontal, force)
      if (hasAfter)
        distribute(-1, clampedDeltaPx, index, priorities, sizesPx, isHorizontal, force)
      DEBUG && console.log("distribution: end")
    }
  }
  DEBUG && console.log("Set new sizes:")
  for (let i = 0; i < sizesPx.length; i++) {
    const el = sizesPx[i].node.element
    if (el.layoutInfo === undefined)
      el.layoutInfo = new ElLayoutInfo(InitialElLayoutInfo)
    DEBUG && console.log(`%c  ${i}: ${n(el.layoutInfo.effectiveSizePx)} -> ${n(sizesPx[i].sizePx)} (px)`, "color: skyblue")
    el.layoutInfo.effectiveSizePx = sizesPx[i].sizePx
  }
  return beforeDeltaPx
}

export function layout(splitViewNode: RxNode<ElImpl>): void {
  const isHorizontal = splitViewNode.element.splitView === Direction.horizontal
  let posPx = 0
  let shrinkBefore = false
  let growBefore = false
  let isSplitterEnabled = false
  const sizesPx = []
  const layoutInfo = splitViewNode.element.layoutInfo
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
          el.style.left = `${posPx}px`
        else
          el.style.top = `${posPx}px`
      }
    }
  }
  const containerSizePx = (isHorizontal ? layoutInfo?.contentSizeXpx : layoutInfo?.contentSizeYpx) ?? 0
  const isOverflowing = greater(posPx, containerSizePx)
  const wrapper = splitViewNode.children.firstMergedItem()?.instance.children.firstMergedItem()?.instance as RxNode<ElImpl> | undefined
  if (wrapper !== undefined) {
    if (isHorizontal)
      wrapper.element.style.gridTemplateColumns = sizesPx.map(x => `${x}px`).join(" ")
    else
      wrapper.element.style.gridTemplateRows = sizesPx.map(x => `${x}px`).join(" ")
    if (isOverflowing) {
      if (isHorizontal)
        wrapper.element.style.overflow = "scroll visible"
      else
        wrapper.element.style.overflow = "visible scroll"
    }
    else {
      wrapper.element.style.overflow = "visible"
    }
  }
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

export function getPrioritiesForSizeChanging(isHorizontal: boolean, children: MergeList<RxNode>, indexes: Array<number>): { resizable: ReadonlyArray<number>, manuallyResizable: ReadonlyArray<number> } {
  const resizable = []
  const manuallyResizable = []
  const items = Array.from(children.items()).filter(x => isSplitViewPartition(x.instance.driver))
  for (let i = items.length - 1; i >= 0; i--) {
    const el = items[i].instance.element as ElImpl
    const strength = (isHorizontal ? el.stretchingStrengthH : el.stretchingStrengthV) ?? 1
    if (!indexes.includes(i)) {
      if (strength > 0)
        resizable.push(1 << i)
      else
        manuallyResizable.push(1 << i)
    }
  }
  let r = 0
  let mr = 0
  for (const i of indexes) {
    const el = items[i].instance.element as ElImpl
    const strength = (isHorizontal ? el.stretchingStrengthH : el.stretchingStrengthV) ?? 1
    if (strength > 0)
      r |= 1 << i
    else
      mr |= 1 << i
  }
  if (r > 0)
    resizable.push(r)
  if (mr > 0)
    manuallyResizable.push(mr)
  return { resizable, manuallyResizable }
}

export function getPrioritiesForEmptySpaceDistribution(isHorizontal: boolean, children: MergeList<RxNode>): { resizable: ReadonlyArray<number>, manuallyResizable: ReadonlyArray<number> } {
  let r = 0
  let mr = 0
  let i = 0
  for (const child of children.items()) {
    if (isSplitViewPartition(child.instance.driver)) {
      const el = child.instance.element as ElImpl
      const strength = (isHorizontal ? el.stretchingStrengthH : el.stretchingStrengthV) ?? 1
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
    const growth = (isHorizontal ? children[i].element.stretchingStrengthH : children[i].element.stretchingStrengthV) ?? 1
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
        const strength = isHorizontal ? (child.element.stretchingStrengthH ?? 1) : (child.element.stretchingStrengthV ?? 1)
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
    } while (!equal(deltaPx, 0) && fractionCount > 0)
    if (equal(deltaPx, 0)) {
      break
    }
  }
  return deltaPx
}

// Debugging

function printPriorities(priorities: ReadonlyArray<number>, manuallyResizablePriorities: ReadonlyArray<number>): string {
  let text = ""
  if (priorities.length > 0) {
    text += `Automatically Resizable:\n%c(${priorities.map(x => `0b${x.toString(2)}`).join(", ")})%c\n`
    for (let i = 0; i < priorities.length; i++) {
      let vector = priorities[i]
      const parts = []
      let j = 0
      while (vector) {
        if (vector & 1)
          parts.push(j)
        j++
        vector >>= 1
      }
      text += `${i}: ${parts.join(", ")}\n`
    }
  }
  if (manuallyResizablePriorities.length > 0) {
    text += `Manually Resizable:\n%c(${manuallyResizablePriorities.map(x => `0b${x.toString(2)}`).join(", ")})%c\n`
    for (let i = 0; i < manuallyResizablePriorities.length; i++) {
      let vector = manuallyResizablePriorities[i]
      const parts = []
      let j = 0
      while (vector) {
        if (vector & 1)
          parts.push(j)
        j++
        vector >>= 1
      }
      text += `${i}: ${parts.join(", ")}\n`
    }
  }
  return text
}
