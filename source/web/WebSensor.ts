// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { unobservable, Ref } from 'reactronic'
import { KeyboardModifiers, Sensor } from '../core'

// Drag

export type AllowedDragOperations = 'none' | 'copy' | 'copyLink' | 'copyMove' | 'link' | 'linkMove' | 'move' | 'all' | 'uninitialized'
export type DragOperation = 'none' | 'copy' | 'link' | 'move'

export enum DragStage {
  Started,
  Dragging,
  Dropped,
  Finished,
}

// TODO: set draggable attribute implicitly depending on presence of 'drag' property in 'sensorData'
export class WebDrag extends Sensor {
  @unobservable private readonly currentEvent: Ref<Event | undefined>

  stage = DragStage.Finished
  draggingObject: any = undefined
  draggingModifiers = KeyboardModifiers.None
  draggingStartAtX = Infinity
  draggingStartAtY = Infinity
  droppedAtX = Infinity
  droppedAtY = Infinity

  constructor(currentEvent: Ref<Event | undefined>) {
    super()
    this.currentEvent = currentEvent
  }

  private get event(): DragEvent {
    const e = this.currentEvent.value
    if (!(e instanceof DragEvent))
      throw new TypeError('\'currentEvent\' must be of type \'DragEvent\' to perform any drag operations')
    return e
  }

  // dropEffect
  get currentOperation(): DragOperation {
    return this.event.dataTransfer?.dropEffect ?? 'none'
  }

  set currentOperation(operation: DragOperation) {
    const dataTransfer = this.event.dataTransfer
    if (dataTransfer)
      dataTransfer.dropEffect = operation
  }

  // effectAllowed
  get allowedDragOperations(): AllowedDragOperations {
    return this.event.dataTransfer?.effectAllowed ?? 'none'
  }

  set allowedDragOperations(operations: AllowedDragOperations) {
    if (this.stage === DragStage.Started) {
      const dataTransfer = this.event.dataTransfer
      if (dataTransfer)
        dataTransfer.effectAllowed = operations
    }
    else {
      throw new Error('\'allowedDragOperations\' must be set during \'Started\' drag stage')
    }
  }

  dropZone(): void {
    this.event.preventDefault()
  }
}
