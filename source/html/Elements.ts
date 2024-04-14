// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { RxNodeDecl, RxNodeDriver, RxNode, Delegate, Mode, MergeList, MergedItem, unobs } from "reactronic"
import { Constants, CursorCommandDriver, El, ElKind, ElArea, ElDriver, ElImpl, Direction, ElLayoutInfo, InitialElLayoutInfo } from "./El.js"
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
  preset?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> {
  return RxNode.declare(Drivers.panel, declaration, preset)
}

// Table

export function Table<M = unknown, R = void>(
  declaration?: RxNodeDecl<El<HTMLElement, M>>,
  preset?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> {
  return RxNode.declare(Drivers.table, declaration, preset)
}

// Partition

export function row<T = void>(builder?: (element: void) => T, shiftCursorDown?: number): void {
  rowBreak(shiftCursorDown)
  builder?.()
}

// Splitter

export function Splitter<M = unknown, R = void>(
  declaration?: RxNodeDecl<El<HTMLElement, M>>,
  preset?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> {
  return RxNode.declare(Drivers.splitter, declaration, preset)
}

export function rowBreak(shiftCursorDown?: number): void {
  RxNode.declare(Drivers.partition, {
    onChange: el => {
      const ownerEl = el.node.owner.element as ElImpl
      if (ownerEl.splitView !== undefined) {
        el.style.display = "grid"
      }
      else {
        // el.style.display = ""
      }
    },
  })
}

export function declareSplitter<T>(index: number, splitViewNode: RxNode<El<T>>): RxNode<El<HTMLElement>> {
  const key = `splitter-${index}`
  return (
    Splitter({
      key,
      mode: Mode.independentUpdate,
      onCreate: el => el.native.className = `splitter ${key}`,
      onChange: b => {
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

export function cursor(areaParams: ElArea): void {
  RxNode.declare(Drivers.cursor, {
    onChange: el => {
      el.area = areaParams
    },
  })
}

// Note (either plain or html)

export function Note(content: string, formatted?: boolean,
  declaration?: RxNodeDecl<El<HTMLElement, void>>): RxNode<El<HTMLElement, void>> {
  return RxNode.declare(Drivers.note, declaration, {
    onChange: el => {
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
  preset?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> {
  return RxNode.declare(Drivers.group, declaration, preset)
}

// Fragment

export function Handling<M = unknown>(
  onChange: Delegate<El<void, M>>): RxNode<El<void, M>> {
  return SyntheticElement({ mode: Mode.independentUpdate, onChange })
}

export function SyntheticElement<M = unknown>(
  declaration?: RxNodeDecl<El<void, M>>,
  preset?: RxNodeDecl<El<void, M>>): RxNode<El<void, M>> {
  return RxNode.declare(Drivers.synthetic, declaration, preset)
}

// PanelDriver

export class PanelDriver<T extends HTMLElement> extends HtmlDriver<T> {
  update(node: RxNode<El<T>>): void | Promise<void> {
    rowBreak()
    const result = super.update(node)
    const el = node.element as ElImpl
    if (el.sealed !== undefined) {
      Handling(h => {
        const native = el.native as HTMLElement
        const resize = native.sensors.resize
        const isHorizontal = el.sealed === Direction.horizontal
        for (const x of resize.resizedElements) {
          if (el.layoutInfo === undefined)
            el.layoutInfo = new ElLayoutInfo(InitialElLayoutInfo)
          const rect = x.contentRect
          const contentBoxPx = x.contentBoxSize[0]
          const containerSizeXpx = contentBoxPx.inlineSize
          const containerSizeYpx = contentBoxPx.blockSize
          el.layoutInfo.offsetXpx = rect.left
          el.layoutInfo.offsetYpx = rect.top
          el.layoutInfo.contentSizeXpx = containerSizeXpx
          el.layoutInfo.contentSizeYpx = containerSizeYpx
          el.layoutInfo.borderSizeXpx = x.borderBoxSize[0].inlineSize
          el.layoutInfo.borderSizeYpx = x.borderBoxSize[0].blockSize

          // console.log(`%cleft = ${rect.left}, top = ${rect.top}, x = ${containerSizeXpx}, y = ${containerSizeYpx}`, "color: lime")

          // Set fixed width/height to wrapper
          const wrapper = node.children.firstMergedItem()?.instance
          if (wrapper !== undefined) {
            const wrapperEl = wrapper.element as El
            el.layoutInfo.isConstrained = true
            if (isHorizontal)
              wrapperEl.style.width = wrapperEl.style.maxWidth = `${containerSizeXpx}px`
            else
              wrapperEl.style.height = wrapperEl.style.maxHeight = `${containerSizeYpx}px`
          }
        }
        if (h.node.stamp === 1) {
          const wrapper = node.children.firstMergedItem()?.instance
          if (wrapper !== undefined) {
            const wrapperEl = wrapper.element as El
            if (isHorizontal)
              wrapperEl.style.width = wrapperEl.style.maxWidth = "0px"
            else
              wrapperEl.style.height = wrapperEl.style.maxHeight = "0px"
          }
        }
      })
    }
    if (el.splitView !== undefined) {
      SyntheticElement({
        mode: Mode.independentUpdate,
        triggers: { stamp: el.node.stamp }, // TODO: call this handler when all children are already rendered
        onChange: () => {
          const native = el.native as HTMLElement
          const isHorizontal = el.splitView === Direction.horizontal
          if (el.layoutInfo === undefined)
            el.layoutInfo = new ElLayoutInfo(InitialElLayoutInfo)
          if (el.layoutInfo.isConstrained) {
            const surroundingXpx = el.layoutInfo.borderSizeXpx - el.layoutInfo.contentSizeXpx
            const surroundingYpx = el.layoutInfo.borderSizeYpx - el.layoutInfo.contentSizeYpx
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
                const preferredUsed = isHorizontal ? partEl.preferredWidthUsed : partEl.preferredHeightUsed
                let preferredPx = 0
                if (!preferredUsed) {
                  preferredPx = size.preferred ? toPx(Dimension.parse(size.preferred), options) : 0
                  if (preferredPx > 0) {
                    partEl.layoutInfo.effectiveSizePx = preferredPx
                    preferred.push(i)
                  }
                  if (isHorizontal)
                    partEl.preferredWidthUsed = true
                  else
                    partEl.preferredHeightUsed = true
                }
                const sizePx = partEl.layoutInfo.effectiveSizePx = clamp(partEl.layoutInfo.effectiveSizePx, minPx, maxPx)
                // console.log(`%c[${i}]: ${minPx}px..${sizePx}px..${maxPx}px (pref = ${preferredPx}px)`, "color: yellow")
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
    }
    return result
  }

  child(ownerNode: RxNode<El<T, any>>, childDriver: RxNodeDriver<any>, childDeclaration?: RxNodeDecl<any> | undefined, childPreset?: RxNodeDecl<any> | undefined): MergedItem<RxNode> | undefined {
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
          Object.defineProperty(childDeclaration.triggers, "index", { value: partCount } )
          overrideMethod(childDeclaration, "onChange", el => {
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

function overrideMethod(declaration: RxNodeDecl<El>, method: "onCreate" | "onChange", func: (el: El) => void): void {
  const baseOnChange = declaration[method]
  declaration[method] = baseOnChange !== undefined
    ? (el, base) => { baseOnChange(el, base); func(el) }
    : (el, base) => { base(); func(el) }
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
  partition: new HtmlDriver<HTMLElement>(Constants.partition, true, el => el.kind = ElKind.part),

  // position: absolute
  splitter: new HtmlDriver<HTMLElement>(Constants.splitter, false, el => el.kind = ElKind.splitter),

  // cursor control element
  cursor: new CursorCommandDriver(),

  // (no element)
  synthetic: new ElDriver<HTMLElement>("synthetic", false, el => el.kind = ElKind.group) as unknown as RxNodeDriver<El<void, any>>,
}
