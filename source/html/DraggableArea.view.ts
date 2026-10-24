// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2026 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, ReactiveTreeNodeDesc, Script, Mode, ScriptTask, args2desc } from "reactronic"
import { El } from "../core/El.js"
import { Div } from "./HtmlElements.js"
import { Fragment } from "../core/elements/api.js"
import { PointerSensor } from "../core/sensors/api.js"

export type DragAndDropHandler = (pointer: PointerSensor) => void

export interface DraggableAreaModel {
  dragStartedAction?: DragAndDropHandler,
  draggingOverAction?: DragAndDropHandler,
  droppedAction?: DragAndDropHandler,
  dragFinishedAction?: DragAndDropHandler,
}

export function DraggableArea(
  draggingId: string,
  setup: Script<El<HTMLDivElement, DraggableAreaModel>>,
  setupTask?: ScriptTask<El<HTMLDivElement, DraggableAreaModel>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLDivElement, DraggableAreaModel>>): ReactiveTreeNode<El<HTMLDivElement, DraggableAreaModel>>

export function DraggableArea(
  draggingId: string,
  key: string,
  setup: Script<El<HTMLDivElement, DraggableAreaModel>>,
  setupTask?: ScriptTask<El<HTMLDivElement, DraggableAreaModel>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLDivElement, DraggableAreaModel>>): ReactiveTreeNode<El<HTMLDivElement, DraggableAreaModel>>

export function DraggableArea(
  draggingId: string,
  mode: Mode,
  setup: Script<El<HTMLDivElement, DraggableAreaModel>>,
  setupTask?: ScriptTask<El<HTMLDivElement, DraggableAreaModel>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLDivElement, DraggableAreaModel>>): ReactiveTreeNode<El<HTMLDivElement, DraggableAreaModel>>

export function DraggableArea(
  draggingId: string,
  key: string,
  mode: Mode,
  setup: Script<El<HTMLDivElement, DraggableAreaModel>>,
  setupTask?: ScriptTask<El<HTMLDivElement, DraggableAreaModel>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLDivElement, DraggableAreaModel>>): ReactiveTreeNode<El<HTMLDivElement, DraggableAreaModel>>

export function DraggableArea(
  draggingId: string,
  description?: ReactiveTreeNodeDesc<El<HTMLDivElement, DraggableAreaModel>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLDivElement, DraggableAreaModel>>): ReactiveTreeNode<El<HTMLDivElement, DraggableAreaModel>>

export function DraggableArea(
  draggingId: string,
  p1?: Script<El<HTMLDivElement, DraggableAreaModel>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLDivElement, DraggableAreaModel>>,
  p2?: Script<El<HTMLDivElement, DraggableAreaModel>> | ScriptTask<El<HTMLDivElement, DraggableAreaModel>> | Mode | ReactiveTreeNodeDesc<El<HTMLDivElement, DraggableAreaModel>>,
  p3?: Script<El<HTMLDivElement, DraggableAreaModel>> | ScriptTask<El<HTMLDivElement, DraggableAreaModel>> | ReactiveTreeNodeDesc<El<HTMLDivElement, DraggableAreaModel>>,
  p4?: ScriptTask<El<HTMLDivElement, DraggableAreaModel>> | ReactiveTreeNodeDesc<El<HTMLDivElement, DraggableAreaModel>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLDivElement, DraggableAreaModel>>): ReactiveTreeNode<El<HTMLDivElement, DraggableAreaModel>> {
  //
  const description = args2desc(DraggableArea.name, p1, p2, p3, p4, p5)
  return (
    Div<DraggableAreaModel>(description, {
      setup() {
        const e = this.native
        const model = this.model
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
    })
  )
}
