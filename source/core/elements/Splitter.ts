// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2026 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { RtElement, inherit, runNonReactive, ConfOrScript, Driver, RtNode } from "reactronic"
import { El, Direction, ElKind } from "../El.js"
import { ElImpl } from "../ElDriver.js"
import { HtmlDriver } from "../WebDriver.js"
import { relayoutUsingSplitter } from "../SplitViewMath.js"
import { Fragment, FragmentDriver } from "./Fragment.js"

// Splitter

export function Splitter<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Splitter.name,
    driver: SplitterDriver.glob,
  }))
}

export function describeSplitter<T>(index: number, splitViewNode: RtNode<El<T>>): RtNode<El<HTMLElement>> {
  const key = `splitter-${index}`
  return (
    Splitter({
      key,
      creation() {
        this.native.classList.add("splitter")
        this.native.classList.add(key)
      },
      setup() {
        const e = this.native
        const model = this.model
        const dataForSensor = e.dataForSensor
        dataForSensor.draggable = key
        dataForSensor.drag = key
        Fragment(() => {
          const pointer = e.sensors.pointer
          if (pointer.dragSource === key) {
            if (pointer.dragStarted) {
              if (pointer.draggingOver) {
                // pointer.dropAllowed = true
                pointer.dropAllowed = true
                const initialSizesPx = pointer.getData() as Array<{ node: RtNode<ElImpl>, sizePx: number }>
                const deltaPx = Math.floor(splitViewNode.element.splitView === Direction.horizontal
                  ? pointer.positionX - pointer.startX : pointer.positionY - pointer.startY)

                const clonedSizesPx: Array<{ node: RtNode<ElImpl>, sizePx: number }> = []
                for (const item of initialSizesPx) {
                  clonedSizesPx.push({ node: item.node, sizePx: item.sizePx })
                }

                runNonReactive(() => relayoutUsingSplitter(splitViewNode as any as RtNode<ElImpl>, deltaPx, index, clonedSizesPx))
                if (pointer.dropped) {
                  model?.droppedAction?.(pointer)
                }
              }
              else { // drag started
                e.setAttribute("rx-dragging", "true")
                const initialSizesPx: Array<{ node: RtNode<ElImpl>, sizePx: number }> = []
                for (const child of splitViewNode.children.items()) {
                  if (isSplitViewPartition(child.driver)) {
                    const sizePx = (child.element as ElImpl).layoutInfo?.effectiveSizePx ?? 0
                    initialSizesPx.push({ node: child as RtNode<ElImpl>, sizePx })
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

// SplitterDriver (position: absolute)

export class SplitterDriver extends HtmlDriver<HTMLElement> {
  static readonly id = "splitter"
  static readonly glob = new SplitterDriver()

  constructor() {
    super(SplitterDriver.id, false, el => el.kind = ElKind.splitter)
  }
}

// isSplitViewPartition

export function isSplitViewPartition(childDriver: Driver): boolean {
  return !childDriver.isPartition && !(childDriver instanceof SplitterDriver) && !(childDriver instanceof FragmentDriver)
}
