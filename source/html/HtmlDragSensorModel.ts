// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ObservableObject, options, reaction, unobservable } from 'reactronic'
import { KeyboardModifiers } from './KeyboardSensor'

export type DragEffectAllowed = 'none' | 'copy' | 'copyLink' | 'copyMove' | 'link' | 'linkMove' | 'move' | 'all' | 'uninitialized'
export type DropEffect = 'none' | 'copy' | 'link' | 'move'

export class HtmlDragSensorModel extends ObservableObject {
  @unobservable sourceId: string | undefined
  @unobservable private dataByFormat: Map<string, unknown>
  @unobservable dropEffect: DropEffect
  started: boolean
  finished: boolean
  startX: number // position relative to browser's viewport
  startY: number // position relative to browser's viewport

  @unobservable targetId: string | undefined
  @unobservable dataTypesAllowed: string[]
  @unobservable effectAllowed: DragEffectAllowed
  @unobservable dropAllowed: boolean
  draggingOver: boolean
  draggingDataTypes: string[]
  draggingDataType: string | undefined
  draggingData: string | undefined
  positionX: number // position relative to browser's viewport
  positionY: number // position relative to browser's viewport
  modifiers: KeyboardModifiers
  dropX: number // position relative to browser's viewport
  dropY: number // position relative to browser's viewport
  dropped: boolean

  immediatePositionX: number // position relative to browser's viewport
  immediatePositionY: number // position relative to browser's viewport
  immediateModifiers: KeyboardModifiers

  constructor(sourceId: string = '', targetId: string = '') {
    super()
    this.sourceId = sourceId
    this.dataByFormat = new Map<string, unknown>()
    this.dropEffect = 'none'
    this.started = false
    this.finished = false
    this.startX = Infinity
    this.startY = Infinity
    this.targetId = targetId
    this.dataTypesAllowed = []
    this.effectAllowed = 'uninitialized'
    this.dropAllowed = false
    this.draggingOver = false
    this.draggingDataTypes = []
    this.draggingDataType = undefined
    this.draggingData = undefined
    this.positionX = Infinity
    this.positionY = Infinity
    this.modifiers = KeyboardModifiers.None
    this.dropX = Infinity
    this.dropY = Infinity
    this.dropped = false
    this.immediatePositionX = Infinity
    this.immediatePositionY = Infinity
    this.immediateModifiers = KeyboardModifiers.None
  }

  getData(format: string): unknown {
    return this.dataByFormat.get(format)
  }

  setData(format: string, value: unknown): void {
    this.dataByFormat.set(format, value)
  }

  clearData(format?: string): void {
    if (format)
      this.dataByFormat.delete(format)
    else
      this.dataByFormat.clear()
  }

  reset(): void {
    this.sourceId = undefined
    this.dataByFormat.clear()
    this.dropEffect = 'none'
    this.effectAllowed = 'uninitialized'
    this.dropAllowed = false
    this.started = false
    this.finished = false
    this.startX = Infinity
    this.startY = Infinity
    this.positionX = Infinity
    this.positionY = Infinity
    this.modifiers = KeyboardModifiers.None
    this.dropX = Infinity
    this.dropY = Infinity
    this.dropped = false
    this.immediatePositionX = Infinity
    this.immediatePositionY = Infinity
    this.immediateModifiers = KeyboardModifiers.None
  }

  @reaction @options({ throttling: 0 })
  protected whenDragging(): void {
    if (this.draggingOver) {
      this.positionX = this.immediatePositionX
      this.positionY = this.immediatePositionY
      this.modifiers = this.immediateModifiers
    }
  }

  @reaction
  protected debug(): void {
    const status = this.started ? 'started' : (this.finished ? 'finished' : 'initial')
    console.log(`HtmlDragSensor: ${status}, sourceId = ${this.sourceId}, targetId = ${this.targetId}, start = (${this.startX}, ${this.startY}), pos = (${this.positionX}, ${this.positionY})`)
  }
}
