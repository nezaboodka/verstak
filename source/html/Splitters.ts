// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { RxNode, unobs } from "reactronic"
import { El, ElImpl, SplitView } from "./El.js"
import { Group, Handling } from "./Elements.js"
import { DraggableArea } from "./DraggableArea.view.js"

export function Splitters(): RxNode<El<HTMLElement>> {
  return Group({
    onChange: el => {

    },
  })
}

export function Splitter<T>(key: string, index: number, splitViewNode: RxNode<El<T>>): RxNode<El<HTMLDivElement>> {
  const container = { handleSplitterMove: (deltaPx: number, index: number, initialSizesPx: number[]) => { /* */ } }
  const splitter = { posPx: 0, sizePx: 0, isVisible: false }
  return (
    DraggableArea(key, {
      key,
      onCreate: b => {
        if (splitViewNode.element.splitView === SplitView.horizontal) {
          b.native.style.width = `${splitter.sizePx}px`
        }
        else {
          b.native.style.height = `${splitter.sizePx}px`
        }
      },
      onChange: (b, base) => {
        const e = b.native
        b.model = {
          dragStartedAction(pointer) {
            const initialSizesPx = []
            for (const child of splitViewNode.children.items()) {
              const el = child.instance.element as ElImpl
              initialSizesPx.push(el.layoutInfo?.effectiveSizePx ?? 0)
            }
            pointer.setData(initialSizesPx)
          },
          draggingOverAction(pointer) {
            pointer.dropAllowed = true
            const initialSizesPx = pointer.getData() as Array<number>
            const deltaPx = Math.floor(splitViewNode.element.splitView === SplitView.horizontal ? pointer.positionX - pointer.startX : pointer.positionY - pointer.startY)
            unobs(() => container.handleSplitterMove(deltaPx, index, initialSizesPx.slice()))
          },
          droppedAction(pointer) {
          },
          dragFinishedAction(pointer) {
            if (!pointer.dropped) {
            }
          },
        }
        base()
        e.className = "splitter"
        e.dataForSensor.window = key
        Handling(() => {
          if (splitViewNode.element.splitView === SplitView.horizontal) {
            e.style.left = `${splitter.posPx}px`
          }
          else {
            e.style.top = `${splitter.posPx}px`
          }
        })
        Handling(() => {
          e.style.display = splitter.isVisible ? "block" : "none"
        })
      },
    })
  )
}
