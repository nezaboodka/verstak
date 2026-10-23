// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2026 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, ReactiveTreeNodeDesc, ReactiveTreeNodeDriver, Script, Mode, ScriptAsync, describe, runNonReactive } from "reactronic"
import { El, Direction, ElKind } from "../El.js"
import { ElImpl } from "../ElDriver.js"
import { HtmlDriver } from "../WebDriver.js"
import { relayoutUsingSplitter } from "../SplitViewMath.js"
import { Fragment, FragmentDriver } from "./Fragment.js"

// Splitter

export function Splitter<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Splitter<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Splitter<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Splitter<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Splitter<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Splitter<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Splitter.name, SplitterDriver.glob,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function describeSplitter<T>(index: number, splitViewNode: ReactiveTreeNode<El<T>>): ReactiveTreeNode<El<HTMLElement>> {
  const key = `splitter-${index}`
  return (
    Splitter({
      key,
      creation() {
        this.native.className = `splitter ${key}`
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
                const initialSizesPx = pointer.getData() as Array<{ node: ReactiveTreeNode<ElImpl>, sizePx: number }>
                const deltaPx = Math.floor(splitViewNode.element.splitView === Direction.horizontal
                  ? pointer.positionX - pointer.startX : pointer.positionY - pointer.startY)

                const clonedSizesPx: Array<{ node: ReactiveTreeNode<ElImpl>, sizePx: number }> = []
                for (const item of initialSizesPx) {
                  clonedSizesPx.push({ node: item.node, sizePx: item.sizePx })
                }

                runNonReactive(() => relayoutUsingSplitter(splitViewNode as any as ReactiveTreeNode<ElImpl>, deltaPx, index, clonedSizesPx))
                if (pointer.dropped) {
                  model?.droppedAction?.(pointer)
                }
              }
              else { // drag started
                e.setAttribute("rx-dragging", "true")
                const initialSizesPx: Array<{ node: ReactiveTreeNode<ElImpl>, sizePx: number }> = []
                for (const child of splitViewNode.children.items()) {
                  if (isSplitViewPartition(child.driver)) {
                    const sizePx = (child.element as ElImpl).layoutInfo?.effectiveSizePx ?? 0
                    initialSizesPx.push({ node: child as ReactiveTreeNode<ElImpl>, sizePx })
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

export function isSplitViewPartition(childDriver: ReactiveTreeNodeDriver): boolean {
  return !childDriver.isPartition && !(childDriver instanceof SplitterDriver) && !(childDriver instanceof FragmentDriver)
}
