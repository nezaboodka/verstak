// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { unobservable, Ref } from 'reactronic'
import { KeyboardModifiers, Sensor } from '../core/api'

// Resize

export interface ResizedElement {
  readonly borderBoxSize: ReadonlyArray<ResizeObserverSize>
  readonly contentBoxSize: ReadonlyArray<ResizeObserverSize>
  readonly contentRect: DOMRectReadOnly
  readonly resizeData: any
}

export class HtmlResize extends Sensor {
  resizedElements: Array<ResizedElement> = []
}

// Drag

export type AllowedDragCursor = 'none' | 'copy' | 'copyLink' | 'copyMove' | 'link' | 'linkMove' | 'move' | 'all' | 'uninitialized'
export type DragCursor = 'none' | 'copy' | 'link' | 'move'

export enum DragStage {
  Started,
  Dragging,
  Dropped,
  Finished,
}

// TODO: set draggable attribute implicitly depending on presence of 'drag' property in 'associatedData'
export class HtmlDrag extends Sensor {
  @unobservable private readonly currentEvent: Ref<Event | undefined>

  stage = DragStage.Finished
  draggingModifiers = KeyboardModifiers.None
  draggingSource: any = undefined
  draggingData: any = undefined
  draggingStartX = Infinity
  draggingStartY = Infinity
  draggingPositionX = Infinity
  draggingPositionY = Infinity
  dropPositionX = Infinity
  dropPositionY = Infinity
  dropped: boolean = false

  constructor(currentEvent: Ref<Event | undefined>) {
    super()
    this.currentEvent = currentEvent
  }

  private get dragEvent(): DragEvent {
    const e = this.currentEvent.value
    if (!(e instanceof DragEvent))
      throw new TypeError('\'currentEvent\' must be of type \'DragEvent\' to perform any drag operations')
    return e
  }

  // dropEffect
  get cursor(): DragCursor {
    return this.dragEvent.dataTransfer?.dropEffect ?? 'none'
  }

  set cursor(operation: DragCursor) {
    const dataTransfer = this.dragEvent.dataTransfer
    if (dataTransfer)
      dataTransfer.dropEffect = operation
  }

  // effectAllowed
  get allowedCursor(): AllowedDragCursor {
    return this.dragEvent.dataTransfer?.effectAllowed ?? 'none'
  }

  set allowedCursor(operations: AllowedDragCursor) {
    if (this.stage === DragStage.Started) {
      const dataTransfer = this.dragEvent.dataTransfer
      if (dataTransfer)
        dataTransfer.effectAllowed = operations
    }
    else {
      throw new Error('\'allowedDragOperations\' must be set during \'Started\' drag stage')
    }
  }

  allowDropHere(): void {
    this.dragEvent.preventDefault()
  }
}
