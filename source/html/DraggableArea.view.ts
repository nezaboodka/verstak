// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveNodeDecl, Mode, ReactiveNode } from "reactronic"
import { El } from "../core/El.js"
import { Div } from "./HtmlElements.js"
import { Handling } from "../Elements.js"
import { PointerSensor } from "./sensors/PointerSensor.js"

export type DragAndDropHandler = (pointer: PointerSensor) => void

export interface DraggableAreaModel {
  dragStartedAction?: DragAndDropHandler,
  draggingOverAction?: DragAndDropHandler,
  droppedAction?: DragAndDropHandler,
  dragFinishedAction?: DragAndDropHandler,
}

export function DraggableArea(
  draggingId: string,
  builder: ReactiveNodeDecl<El<HTMLDivElement, DraggableAreaModel>>): ReactiveNode<El<HTMLDivElement>> {
  // triggers = triggers ? { ...triggers, draggingId } : { draggingId }
  return (
    Div<DraggableAreaModel>(ReactiveNode.withBasis(builder, {
      mode: Mode.autonomous,
      content: b => {
        const e = b.native
        const model = b.model
        const dataForSensor = e.dataForSensor
        dataForSensor.draggable = draggingId
        dataForSensor.drag = draggingId
        Handling(() => {
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
