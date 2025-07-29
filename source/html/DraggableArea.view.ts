// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, ReactiveTreeNodeDecl, Mode  } from "reactronic"
import { El } from "../core/El.js"
import { Div } from "./HtmlElements.js"
import { Fragment } from "../core/Elements.js"
import { PointerSensor } from "../core/sensors/PointerSensor.js"

export type DragAndDropHandler = (pointer: PointerSensor) => void

export interface DraggableAreaModel {
  dragStartedAction?: DragAndDropHandler,
  draggingOverAction?: DragAndDropHandler,
  droppedAction?: DragAndDropHandler,
  dragFinishedAction?: DragAndDropHandler,
}

export function DraggableArea(
  draggingId: string,
  builder: ReactiveTreeNodeDecl<El<HTMLDivElement, DraggableAreaModel>>): ReactiveTreeNode<El<HTMLDivElement>> {
  // triggers = triggers ? { ...triggers, draggingId } : { draggingId }
  return (
    Div<DraggableAreaModel>(ReactiveTreeNode.withBasis(builder, {
      mode: Mode.autonomous,
      script: b => {
        const e = b.native
        const model = b.model
        const dataForSensor = e.dataForSensor
        dataForSensor.draggable = draggingId
        dataForSensor.drag = draggingId
        Fragment(() => {
          const pointer = e.sensors.pointer
          if (pointer.dragSource === draggingId) {
            if (pointer.dragStarted) {
              if (pointer.draggingOver) {
                // pointer.dropAllowed = true
                model?.draggingOverAction?.(pointer)
                if (pointer.dropped) {
                  model?.droppedAction?.(pointer)
                }
              }
              else {
                e.setAttribute("rx-dragging", "true")
                model?.dragStartedAction?.(pointer)
              }
              if (pointer.dragFinished) {
                model?.dragFinishedAction?.(pointer)
                e.setAttribute("rx-dragging", "false")
              }
            }
          }
        })
      },
    }))
  )
}
