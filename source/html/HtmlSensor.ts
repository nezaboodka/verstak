// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Ref } from 'reactronic'
import { DragSensor, DragStage, Sensor } from '../core/api'

// Resize

export interface ResizedElement {
  readonly borderBoxSize: ReadonlyArray<ResizeObserverSize>
  readonly contentBoxSize: ReadonlyArray<ResizeObserverSize>
  readonly contentRect: DOMRectReadOnly
  readonly resizeData: any
}

export class HtmlResizeSensor extends Sensor {
  resizedElements: Array<ResizedElement> = []
}

// Drag

export type DragEffectAllowed = 'none' | 'copy' | 'copyLink' | 'copyMove' | 'link' | 'linkMove' | 'move' | 'all' | 'uninitialized'
export type DropEffect = 'none' | 'copy' | 'link' | 'move'

export class HtmlDragSensor extends DragSensor {

  constructor(currentEvent: Ref<Event | undefined>) {
    super(currentEvent)
  }

  get dragEvent(): DragEvent {
    const e = this.currentEvent.value
    if (!(e instanceof DragEvent))
      throw new TypeError('\'currentEvent\' must be of type \'DragEvent\' to perform any drag operations')
    return e
  }

  get dropEffect(): DropEffect {
    return this.dragEvent.dataTransfer?.dropEffect ?? 'none'
  }

  set dropEffect(value: DropEffect) {
    const dataTransfer = this.dragEvent.dataTransfer
    if (dataTransfer)
      dataTransfer.dropEffect = value
  }

  get effectAllowed(): DragEffectAllowed {
    return this.dragEvent.dataTransfer?.effectAllowed ?? 'none'
  }

  set effectAllowed(value: DragEffectAllowed) {
    if (this.stage === DragStage.Started) {
      const dataTransfer = this.dragEvent.dataTransfer
      if (dataTransfer)
        dataTransfer.effectAllowed = value
    }
    else {
      throw new Error('\'allowedDragOperations\' must be set during \'Started\' drag stage')
    }
  }

  setDragImage(image: Element, x: number, y: number): void {
    const dataTransfer = this.dragEvent.dataTransfer
    if (dataTransfer)
      dataTransfer.setDragImage(image, x, y)
  }

  allowDropHere(): void {
    this.dragEvent.preventDefault()
  }
}
