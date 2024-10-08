// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { RxNodeDecl, RxNodeDriver, RxNode, Script, Mode, MergeList, MergedItem, unobs } from "reactronic"
import { Constants, CursorCommandDriver, El, ElKind, ElPlace, ElDriver, ElImpl, Direction, ElLayoutInfo, InitialElLayoutInfo } from "./El.js"
import { getPrioritiesForEmptySpaceDistribution, getPrioritiesForSizeChanging, relayout, relayoutUsingSplitter } from "./SplitViewMath.js"
import { Axis, BodyFontSize, Dimension, SizeConverterOptions, toPx } from "./Sizes.js"
import { HtmlDriver } from "./HtmlDriver.js"
import { clamp } from "./ElUtils.js"

// Verstak is based on two fundamental layout structures
// called panel and table; and on two special non-visual
// elements called partition and group.

// Panel is a layout structure, which children are layed
// out naturally: rightwards-downwards.

// Table is layout structure, which children are layed out
// over table cells.

// Partition is a special non-visual element, which begins
// new layout partition inside panel or table.

// Note is either plain or markdown-formatted text
// supporting syntax highlighting for code blocks.

// Group is a special non-visual element for logical
// grouping of panels, tables and other groups.

// Panel

export function Panel<M = unknown>(
  declaration?: RxNodeDecl<El<HTMLElement, M>>,
  basis?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> {
  return RxNode.declare(Drivers.panel, declaration, basis)
}

// Table

export function Table<M = unknown, R = void>(
  declaration?: RxNodeDecl<El<HTMLElement, M>>,
  basis?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> {
  return RxNode.declare(Drivers.table, declaration, basis)
}

// Partition

export function row<T = void>(builder?: (element: void) => T, shiftCursorDown?: number): void {
  rowBreak(shiftCursorDown)
  builder?.()
}

// Splitter

export function Splitter<M = unknown, R = void>(
  declaration?: RxNodeDecl<El<HTMLElement, M>>,
  basis?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> {
  return RxNode.declare(Drivers.splitter, declaration, basis)
}

export function rowBreak(shiftCursorDown?: number): void {
  RxNode.declare(Drivers.partition)
}

export function declareSplitter<T>(index: number, splitViewNode: RxNode<El<T>>): RxNode<El<HTMLElement>> {
  const key = `splitter-${index}`
  return (
    Splitter({
      key,
      mode: Mode.independentUpdate,
      creation: el => el.native.className = `splitter ${key}`,
      script: b => {
        const e = b.native
        const model = b.model
        const dataForSensor = e.dataForSensor
        dataForSensor.draggable = key
        dataForSensor.drag = key
        Handling(() => {
          const pointer = e.sensors.pointer
          if (pointer.dragSource === key) {
            if (pointer.dragStarted) {
              if (pointer.draggingOver) {
                // pointer.dropAllowed = true
                pointer.dropAllowed = true
                const initialSizesPx = pointer.getData() as Array<{ node: RxNode<ElImpl>, sizePx: number }>
                const deltaPx = Math.floor(splitViewNode.element.splitView === Direction.horizontal
                  ? pointer.positionX - pointer.startX : pointer.positionY - pointer.startY)

                const clonedSizesPx: Array<{ node: RxNode<ElImpl>, sizePx: number }> = []
                for (const item of initialSizesPx) {
                  clonedSizesPx.push({ node: item.node, sizePx: item.sizePx })
                }

                unobs(() => relayoutUsingSplitter(splitViewNode as any as RxNode<ElImpl>, deltaPx, index, clonedSizesPx))
                if (pointer.dropped) {
                  model?.droppedAction?.(pointer)
                }
              }
              else { // drag started
                e.setAttribute("rx-dragging", "true")
                const initialSizesPx: Array<{ node: RxNode<ElImpl>, sizePx: number }> = []
                for (const item of splitViewNode.children.items()) {
                  const child = item.instance
                  if (isSplitViewPartition(child.driver)) {
                    const sizePx = (child.element as ElImpl).layoutInfo?.effectiveSizePx ?? 0
                    initialSizesPx.push({ node: child as RxNode<ElImpl>, sizePx })
                  }
                }
                // console.log("initial", initialSizesPx.map(x => x.sizePx).join(", "))
                pointer.setData(initialSizesPx)
              }
              if (pointer.dragFinished) {
                model?.dragFinishedAction?.(pointer)
                e.setAttribute("rx-dragging", "false")
              }
            }
          }
        })
      },
    })
  )
}

export function cursor(areaParams: ElPlace): void {
  RxNode.declare(Drivers.cursor, {
    script: el => {
      el.place = areaParams
    },
  })
}

// Note (either plain or html)

export function Note(content: string, formatted?: boolean,
  declaration?: RxNodeDecl<El<HTMLElement, void>>): RxNode<El<HTMLElement, void>> {
  return RxNode.declare(Drivers.note, declaration, {
    script: el => {
      if (formatted)
        el.native.innerHTML = content
      else
        el.native.innerText = content
    },
  })
}

// Group

export function Group<M = unknown, R = void>(
  declaration?: RxNodeDecl<El<HTMLElement, M>>,
  basis?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> {
  return RxNode.declare(Drivers.group, declaration, basis)
}

// Fragment

export function Handling<M = unknown>(
  script: Script<El<void, M>>): RxNode<El<void, M>> {
  return SyntheticElement({ mode: Mode.independentUpdate, script })
}

export function SyntheticElement<M = unknown>(
  declaration?: RxNodeDecl<El<void, M>>,
  basis?: RxNodeDecl<El<void, M>>): RxNode<El<void, M>> {
  return RxNode.declare(Drivers.synthetic, declaration, basis)
}

// PanelDriver

export class PanelDriver<T extends HTMLElement> extends HtmlDriver<T> {
  update(node: RxNode<El<T>>): void | Promise<void> {
    rowBreak()
    const el = node.element as ElImpl
    const result = super.update(node)
    if (el.splitView !== undefined) {
      if (el.layoutInfo === undefined)
        el.layoutInfo = new ElLayoutInfo(InitialElLayoutInfo)
      const layoutInfo = el.layoutInfo
      layoutInfo.isUpdateFinished = false
      Handling(h => {
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
      const relayoutEl = SyntheticElement({
        mode: Mode.independentUpdate,
        script: () => {
          const native = el.native as HTMLElement
          const isHorizontal = el.splitView === Direction.horizontal
          if (layoutInfo.isUpdateFinished) {
            const surroundingXpx = layoutInfo.borderSizeXpx - layoutInfo.contentSizeXpx
            const surroundingYpx = layoutInfo.borderSizeYpx - layoutInfo.contentSizeYpx
            let i = 0
            const preferred: Array<number> = []
            const sizesPx: Array<{ node: RxNode<ElImpl>, sizePx: number }> = []
            for (const child of node.children.items()) {
              const partEl = child.instance.element as ElImpl
              if (isSplitViewPartition(child.instance.driver) && partEl !== undefined) {
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
                sizesPx.push({ node: child.instance as RxNode<ElImpl>, sizePx })
                i++
              }
            }
            const priorities = preferred.length > 0
              ? getPrioritiesForSizeChanging(isHorizontal, node.children as MergeList<RxNode>, preferred)
              : getPrioritiesForEmptySpaceDistribution(isHorizontal, node.children as MergeList<RxNode>)
            unobs(() => relayout(node as any as RxNode<ElImpl>, priorities.resizable, priorities.manuallyResizable, sizesPx))
          }
        },
      })
      RxNode.updateNestedNodesThenDo(() => {
        layoutInfo.isUpdateFinished = true
        // WORKAROUND: As long as "isUpdateFinished = true" does not trigger relaunch of
        // "update" of SyntheticElement (such a relaunch requires subscriptions on values
        // of variables rather than variables themselves), we do it manually.
        RxNode.triggerUpdate(relayoutEl, { stamp: node.stamp })
      })
    }
    return result
  }

  child(ownerNode: RxNode<El<T, any>>, childDriver: RxNodeDriver<any>, childDeclaration?: RxNodeDecl<any> | undefined, childBasis?: RxNodeDecl<any> | undefined): MergedItem<RxNode> | undefined {
    let result: MergedItem<RxNode> | undefined = undefined
    const el = ownerNode.element as ElImpl
    if (el.splitView !== undefined) {
      if (isSplitViewPartition(childDriver)) {
        let partCount = 0
        for (const child of ownerNode.children.items()) {
          if (isSplitViewPartition(child.instance.driver))
            partCount++
        }
        const isHorizontal = el.splitView === Direction.horizontal
        if (childDeclaration !== undefined) {
          if (childDeclaration.triggers === undefined)
            childDeclaration.triggers = {}
          Object.defineProperty(childDeclaration.triggers, "index", { value: partCount })
          overrideMethod(childDeclaration, "script", el => {
            if (isHorizontal)
              el.style.gridColumn = `${partCount + 1}`
            else
              el.style.gridRow = `${partCount + 1}`
          })
        }
        // console.log(`partCount = ${partCount}`)
        if (partCount > 0)
          declareSplitter(partCount - 1, ownerNode)
      }
    }
    else {
      if (childDriver.isPartition) {
        // Coalesce multiple separators into single one, if any
        const last = ownerNode.children.lastMergedItem()
        if (last?.instance?.driver === childDriver)
          result = last
      }
    }
    return result
  }
}

export function isSplitViewPartition(childDriver: RxNodeDriver): boolean {
  return !childDriver.isPartition && childDriver !== Drivers.splitter && childDriver !== Drivers.synthetic
}

function overrideMethod(declaration: RxNodeDecl<El>, method: "creation" | "script", func: (el: El) => void): void {
  const baseScript = declaration[method]
  declaration[method] = baseScript !== undefined
    ? (el, base) => { baseScript(el, base); func(el) }
    : (el, base) => { base(); func(el) }
}

// PartitionDriver

export class PartitionDriver<T extends HTMLElement> extends HtmlDriver<T> {
  update(node: RxNode<El<T>>): void | Promise<void> {
    const result = super.update(node)
    const ownerEl = node.owner.element as ElImpl
    if (ownerEl.sealed !== undefined) {
      node.element.style.flexGrow = "1"
      RxNode.declare(Drivers.wrapper, {
        script: el => {
          const ownerEl = el.node.owner.owner.element as ElImpl
          if (ownerEl.splitView !== undefined) {
            el.style.display = "grid"
            el.style.flexDirection = ""
          }
          else {
            if (ownerEl.isTable) {
              el.style.display = "contents"
              el.style.flexDirection = ""
            }
            else {
              el.style.display = "flex"
              el.style.flexDirection = "row"
            }
          }
          el.style.position = "absolute"
          el.style.inset = "0"
          el.style.overflow = "auto" // TODO: should be user-defined
          el.style.gap = "inherit"
        },
      })
    }
    return result
  }

  getHost(node: RxNode<El<T, any>>): RxNode<El<T, any>> {
    let host: RxNode<El<T, any>>
    const ownerEl = node.owner.element as ElImpl
    if (ownerEl.sealed !== undefined)
      host = node.children.firstMergedItem()!.instance as RxNode<El<T, any>>
    else
      host = node
    return host
  }
}

export const Drivers = {
  // display: flex, flex-direction: column
  panel: new PanelDriver<HTMLElement>(Constants.element, false, el => el.kind = ElKind.panel),

  // display: grid
  table: new HtmlDriver<HTMLElement>(Constants.element, false, el => el.kind = ElKind.table),

  // display: block
  note: new HtmlDriver<HTMLElement>(Constants.element, false, el => el.kind = ElKind.note),

  // display: contents
  group: new HtmlDriver<HTMLElement>(Constants.group, false, el => el.kind = ElKind.group),

  // display: flex/row or contents
  partition: new PartitionDriver<HTMLElement>(Constants.partition, true, el => el.kind = ElKind.part),

  wrapper: new HtmlDriver<HTMLElement>(Constants.wrapper, false, el => el.kind = ElKind.native),

  // position: absolute
  splitter: new HtmlDriver<HTMLElement>(Constants.splitter, false, el => el.kind = ElKind.splitter),

  // cursor control element
  cursor: new CursorCommandDriver(),

  // (no element)
  synthetic: new ElDriver<HTMLElement>("synthetic", false, el => el.kind = ElKind.group) as unknown as RxNodeDriver<El<void, any>>,
}
