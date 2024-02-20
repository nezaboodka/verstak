// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { RxNodeDecl, RxNodeDriver, RxNode, Delegate, Mode, MergeList } from "reactronic"
import { Constants, CursorCommandDriver, El, ElKind, ElArea, ElDriver, ElImpl, SplitView, ElLayoutInfo, InitialElLayoutInfo } from "./El.js"
import { getPrioritiesForSizeChanging, relayout, relayoutUsingSplitter } from "./SplitViewMath.js"
import { HtmlDriver } from "./HtmlDriver.js"
import { OnResize } from "./Handlers.js"

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
  RxNode.declare(Drivers.partition)
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
                for (const child of splitViewNode.children.items()) {
                  if (child.instance.driver.isPartition)
                    initialSizesPx.push({ node: child.instance as RxNode<ElImpl>, sizePx: (child.instance.element as ElImpl).layoutInfo?.effectiveSizePx ?? 0 })
                }
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
    if (node.element.splitView !== undefined) {
      OnResize(node.element.native, x => {
        const e = x.borderBoxSize[0]
        const el = node.element as ElImpl
        if (el.layoutInfo === undefined)
          el.layoutInfo = new ElLayoutInfo(InitialElLayoutInfo)
        const s = getComputedStyle(el.native)
        let sizePx = 0
        let marginSizePx = 0
        let paddingSizePx = 0
        if (node.element.splitView === SplitView.horizontal) {
          sizePx = Math.floor(e.inlineSize)
          marginSizePx = Number.parseFloat(s.marginLeft) + Number.parseFloat(s.marginRight)
          paddingSizePx = Number.parseFloat(s.paddingLeft) + Number.parseFloat(s.paddingRight)
        }
        else {
          sizePx = Math.floor(e.blockSize)
          marginSizePx = Number.parseFloat(s.marginTop) + Number.parseFloat(s.marginBottom)
          paddingSizePx = Number.parseFloat(s.paddingTop) + Number.parseFloat(s.paddingBottom)
        }
        el.layoutInfo.effectiveSizePx = sizePx - marginSizePx - paddingSizePx
        // TODO: reconvert part sizes (e.g. % -> px)
        const sizesPx: Array<{ node: RxNode<ElImpl>, sizePx: number }> = []
        for (const child of node.children.items()) {
          if ((child.instance.element as ElImpl).native !== undefined && child.instance.driver.isPartition) {
            sizesPx.push({ node: child.instance as RxNode<ElImpl>, sizePx: (child.instance.element as ElImpl).layoutInfo?.effectiveSizePx ?? 0 })
          }
        }
        // console.log(`%c[${SplitView[node.element.splitView!]}]: size = ${el.layoutInfo.effectiveSizePx}`, "color: blue")
        relayout(node as any, getPrioritiesForSizeChanging(node.seat!, node.children as MergeList<RxNode<ElImpl>>), sizesPx)
      })
    }
    return result
  }

  child(ownerNode: RxNode<El<T, any>>, childDriver: RxNodeDriver<any>, childDeclaration?: RxNodeDecl<any> | undefined, childPreset?: RxNodeDecl<any> | undefined): void {
    const el = ownerNode.element
    if (el.splitView !== undefined && !childDriver.isPartition&& childDriver !== Drivers.splitter && childDriver !== Drivers.synthetic) {
      rowBreak()

      let partCount = 0
      for (const child of ownerNode.children.items()) {
        if (child.instance.driver.isPartition)
          partCount++
      }

      if (partCount > 1)
        declareSplitter(partCount - 2, ownerNode)
    }
  }
}

const Drivers = {
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
