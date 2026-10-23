// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2026 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, ReactiveTreeNodeDesc, ReactiveTreeNodeDriver, LinkedItem, Script, Mode, ScriptAsync, describe, runNonReactive } from "reactronic"
import { El, Direction, ElKind } from "../El.js"
import { clamp } from "../ElUtils.js"
import { ElImpl, ElLayoutInfo, InitialElLayoutInfo } from "../ElDriver.js"
import { getPrioritiesForEmptySpaceDistribution, getPrioritiesForSizeChanging, relayout } from "../SplitViewMath.js"
import { Axis, BodyFontSize, Dimension, SizeConverterOptions, toPx } from "../Sizes.js"
import { HtmlDriver } from "../WebDriver.js"
import { Fragment } from "./Fragment.js"
import { PartitionDriver } from "./Partition.js"
import { describeSplitter, isSplitViewPartition } from "./Splitter.js"

// Element

export function Element<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Element<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Element<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Element<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Element<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Element<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Element.name, ElementDriver.glob,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// ElementDriver (display: flex, flex-direction: column)

export class ElementDriver<T extends HTMLElement> extends HtmlDriver<T> {
  static readonly id: string = "el"
  static readonly glob = new ElementDriver<HTMLElement>()

  constructor() {
    super(ElementDriver.id, false, el => el.kind = ElKind.element)
  }

  override runSetup(node: ReactiveTreeNode<El<T>>): void | Promise<void> {
    const el = node.element as ElImpl
    const result = super.runSetup(node)
    if (el.splitView !== undefined) {
      if (el.layoutInfo === undefined)
        el.layoutInfo = new ElLayoutInfo(InitialElLayoutInfo)
      const layoutInfo = el.layoutInfo
      layoutInfo.isUpdateFinished = false
      Fragment(h => {
        const native = el.native as HTMLElement
        const resize = native.sensors.resize
        for (const x of resize.resizedElements) {
          const borderBoxPx = x.borderBoxSize[0]
          const contentBoxPx = x.contentBoxSize[0]
          layoutInfo.borderSizeXpx = borderBoxPx.inlineSize
          layoutInfo.borderSizeYpx = borderBoxPx.blockSize
          layoutInfo.contentSizeXpx = contentBoxPx.inlineSize
          layoutInfo.contentSizeYpx = contentBoxPx.blockSize
        }
      })
      const relayoutEl = Fragment({
        setup() {
          const native = el.native as HTMLElement
          const isHorizontal = el.splitView === Direction.horizontal
          if (layoutInfo.isUpdateFinished) {
            const surroundingXpx = layoutInfo.borderSizeXpx - layoutInfo.contentSizeXpx
            const surroundingYpx = layoutInfo.borderSizeYpx - layoutInfo.contentSizeYpx
            let i = 0
            const preferred: Array<number> = []
            const sizesPx: Array<{ node: ReactiveTreeNode<ElImpl>, sizePx: number }> = []
            for (const child of node.children.items()) {
              const partEl = child.element as ElImpl
              if (isSplitViewPartition(child.driver) && partEl !== undefined) {
                const size = isHorizontal ? partEl.width : partEl.height
                const options: SizeConverterOptions = {
                  axis: isHorizontal ? Axis.X : Axis.Y, lineSizePx: BodyFontSize/* Dimension.lineSizePx */, fontSizePx: BodyFontSize,
                  containerSizeXpx: native.scrollWidth - surroundingXpx, containerSizeYpx: native.scrollHeight - surroundingYpx,
                }
                const minPx = size.min ? toPx(Dimension.parse(size.min), options) : 0
                let maxPx = size.max ? toPx(Dimension.parse(size.max), options) : Number.POSITIVE_INFINITY
                maxPx = Math.max(minPx, maxPx)
                if (partEl.layoutInfo === undefined)
                  partEl.layoutInfo = new ElLayoutInfo(InitialElLayoutInfo)
                if (isHorizontal)
                  partEl.widthPx = { minPx, maxPx }
                else
                  partEl.heightPx = { minPx, maxPx }
                const preferredPx = size.preferred ? toPx(Dimension.parse(size.preferred), options) : 0
                if (preferredPx > 0) {
                  partEl.layoutInfo.effectiveSizePx = preferredPx
                  size.preferred = undefined
                  preferred.push(i)
                }
                // console.log(`%c[${i}]: ${minPx}..%c${partEl.layoutInfo.effectiveSizePx} -> ${clamp(partEl.layoutInfo!.effectiveSizePx, minPx, maxPx)}%c..${maxPx} (pref = ${preferredPx}) (px)`, "color: yellow", "color: #00BB00", "color: yellow")
                const sizePx = partEl.layoutInfo!.effectiveSizePx = clamp(partEl.layoutInfo!.effectiveSizePx, minPx, maxPx)
                sizesPx.push({ node: child as ReactiveTreeNode<ElImpl>, sizePx })
                i++
              }
            }
            const priorities = preferred.length > 0
              ? getPrioritiesForSizeChanging(isHorizontal, node.children, preferred)
              : getPrioritiesForEmptySpaceDistribution(isHorizontal, node.children)
            runNonReactive(() => relayout(node as any as ReactiveTreeNode<ElImpl>, priorities.resizable, priorities.manuallyResizable, sizesPx))
          }
        },
      })
      ReactiveTreeNode.launchNestedNodesThenDo(() => {
        layoutInfo.isUpdateFinished = true
        // WORKAROUND: As long as "isUpdateFinished = true" does not trigger relaunch of
        // "update" of Intermediate (such a relaunch requires subscriptions on values
        // of variables rather than variables themselves), we do it manually.
        ReactiveTreeNode.launchSetup(relayoutEl, { stamp: node.stamp })
      })
    }
    return result
  }

  override describeChild(ownerNode: ReactiveTreeNode<El<T, any>>, childDriver: ReactiveTreeNodeDriver<any>, childDescription?: ReactiveTreeNodeDesc<any> | undefined, childBasis?: ReactiveTreeNodeDesc<any> | undefined): LinkedItem<ReactiveTreeNode> | undefined {
    let result: LinkedItem<ReactiveTreeNode> | undefined = undefined
    const el = ownerNode.element as ElImpl
    if (el.splitView !== undefined) {
      if (isSplitViewPartition(childDriver)) {
        let partCount = 0
        for (const child of ownerNode.children.items()) {
          if (isSplitViewPartition(child.driver))
            partCount++
        }
        const isHorizontal = el.splitView === Direction.horizontal
        if (childDescription !== undefined) {
          if (childDescription.signalArgs === undefined)
            childDescription.signalArgs = {}
          Object.defineProperty(childDescription.signalArgs, "index", { value: partCount })
          overrideMethod(childDescription, "setup", el => {
            if (isHorizontal)
              el.style.gridColumn = `${partCount + 1}`
            else
              el.style.gridRow = `${partCount + 1}`
          })
        }
        // console.log(`partCount = ${partCount}`)
        if (partCount > 0)
          describeSplitter(partCount - 1, ownerNode)
      }
    }
    else {
      const last = ownerNode.children.lastItem
      if (childDriver.isPartition) {
        // Coalesce multiple separators into single one, if any
        if (last?.driver === childDriver)
          result = last
      }
      else if (last === undefined) {
        describe("Partition", PartitionDriver.glob, {})
      }
    }
    return result
  }
}

// overrideMethod

function overrideMethod(description: ReactiveTreeNodeDesc<El>, method: "creation" | "setup" | "destruction", func: (this: El, el: El) => void): void {
  const baseScript = description[method]
  description[method] = baseScript !== undefined
    ? (el, base) => { baseScript.call(el, el, base); func.call(el, el) }
    : (el, base) => { base(); func.call(el, el) }
}
