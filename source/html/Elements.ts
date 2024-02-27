// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { RxNodeDecl, RxNodeDriver, RxNode, Delegate, Mode, MergeList, MergedItem } from "reactronic"
import { Constants, CursorCommandDriver, El, ElKind, ElArea, ElDriver, ElImpl, SplitView, ElLayoutInfo, InitialElLayoutInfo } from "./El.js"
import { getPrioritiesForEmptySpaceDistribution, relayout, relayoutUsingSplitter } from "./SplitViewMath.js"
import { Axis, BodyFontSize, Dimension, SizeConverterOptions, toPx } from "./Sizes.js"
import { HtmlDriver } from "./HtmlDriver.js"
import { OnResize } from "./Handlers.js"
import { clamp } from "./ElUtils.js"

// Verstak is based on two fundamental layout structures
// called section and table; and on two special non-visual
// elements called partition and group.

// Section is a layout structure, which children are layed
// out naturally: rightwards-downwards.

// Table is layout structure, which children are layed out
// over table cells.

// Partition is a special non-visual element, which begins
// new layout partition inside section or table.

// Note is either plain or markdown-formatted text
// supporting syntax highlighting for code blocks.

// Group is a special non-visual element for logical
// grouping of sections, tables and other groups.

// Section

export function Section<M = unknown>(
  declaration?: RxNodeDecl<El<HTMLElement, M>>,
  preset?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> {
  return RxNode.declare(Drivers.section, declaration, preset)
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
                const deltaPx = Math.floor(splitViewNode.element.splitView === SplitView.horizontal
                  ? pointer.positionX - pointer.startX : pointer.positionY - pointer.startY)

                const clonedSizesPx: Array<{ node: RxNode<ElImpl>, sizePx: number }> = []
                for (const item of initialSizesPx) {
                  clonedSizesPx.push({ node: item.node, sizePx: item.sizePx })
                }

                relayoutUsingSplitter(splitViewNode as any as RxNode<ElImpl>, deltaPx, index, clonedSizesPx)
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
                console.log("initial", initialSizesPx.map(x => x.sizePx).join(", "))
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

// SectionDriver

export class SectionDriver<T extends HTMLElement> extends HtmlDriver<T> {
  update(node: RxNode<El<T>>): void | Promise<void> {
    rowBreak()
    const result = super.update(node)
    const el = node.element as ElImpl
    if (el.splitView !== undefined) {
      const native = el.native as HTMLElement
      OnResize(native, x => {
        if (el.layoutInfo === undefined)
          el.layoutInfo = new ElLayoutInfo(InitialElLayoutInfo)

        const rect = x.contentRect
        const contentBoxPx = x.contentBoxSize[0]
        const containerSizeXpx = contentBoxPx.inlineSize
        const containerSizeYpx = contentBoxPx.blockSize
        el.layoutInfo.offsetXpx = rect.left
        el.layoutInfo.offsetYpx = rect.top
        el.layoutInfo.containerSizeXpx = containerSizeXpx
        el.layoutInfo.containerSizeYpx = containerSizeYpx

        // console.log(`%cleft = ${rect.left}, top = ${rect.top}, x = ${containerSizeXpx}, y = ${containerSizeYpx}`, "color: lime")

        const isHorizontal = el.splitView === SplitView.horizontal

        // Set fixed width/height to wrapper
        const wrapper = node.children.firstMergedItem()?.instance
        if (wrapper !== undefined) {
          const wrapperEl = wrapper.element as El
          if (isHorizontal)
            wrapperEl.style.width = wrapperEl.style.maxWidth = `${containerSizeXpx}px`
          else {
            wrapperEl.style.height = wrapperEl.style.maxHeight = `${containerSizeYpx}px`
          }
        }

        // Get split view elements' sizes converting them to "px"
        const surroundingXpx = x.borderBoxSize[0].inlineSize - containerSizeXpx
        const surroundingYpx = x.borderBoxSize[0].blockSize - containerSizeYpx
        const sizesPx: Array<{ node: RxNode<ElImpl>, sizePx: number }> = []
        for (const child of node.children.items()) {
          const partEl = child.instance.element as ElImpl
          if (isSplitViewPartition(child.instance.driver) && partEl !== undefined) {
            const size = isHorizontal ? partEl.width : partEl.height
            const options: SizeConverterOptions = {
              axis: isHorizontal ? Axis.X : Axis.Y, lineSizePx: Dimension.lineSizePx, fontSizePx: BodyFontSize,
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
            const sizePx = partEl.layoutInfo.effectiveSizePx = clamp(partEl.layoutInfo.effectiveSizePx, minPx, maxPx)
            // console.log(`%c[${child.index}]: min = ${minPx}px, size = ${sizePx}px, max = ${maxPx}px`, "color: yellow")
            sizesPx.push({ node: child.instance as RxNode<ElImpl>, sizePx })
          }
        }
        // console.log(options)
        relayout(node as any as RxNode<ElImpl>, getPrioritiesForEmptySpaceDistribution(node.children as MergeList<RxNode>), sizesPx)
      })
    }
    return result
  }

  child(ownerNode: RxNode<El<T, any>>, childDriver: RxNodeDriver<any>, childDeclaration?: RxNodeDecl<any> | undefined, childPreset?: RxNodeDecl<any> | undefined): MergedItem<RxNode> | undefined {
    let result: MergedItem<RxNode> | undefined = undefined
    const el = ownerNode.element
    if (el.splitView !== undefined && isSplitViewPartition(childDriver)) {
      let partCount = 0
      for (const child of ownerNode.children.items()) {
        if (isSplitViewPartition(child.instance.driver))
          partCount++
      }
      const isHorizontal = el.splitView === SplitView.horizontal
      if (childDeclaration !== undefined) {
        const onCreate = childDeclaration.onCreate
        childDeclaration.onCreate = (el, basis) => {
          onCreate?.(el, basis)
          if (isHorizontal)
            el.style.gridColumn = `${partCount + 1}`
          else
            el.style.gridRow = `${partCount + 1}`
        }
      }
      // console.log(`partCount = ${partCount}`)
      if (partCount > 0)
        declareSplitter(partCount - 1, ownerNode)
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

export const Drivers = {
  // display: flex, flex-direction: column
  section: new SectionDriver<HTMLElement>(Constants.element, false, el => el.kind = ElKind.section),

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
