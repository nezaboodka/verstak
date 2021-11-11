// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ObservableObject, options, reaction, TraceLevel, transaction, unobservable } from 'reactronic'
import { KeyboardModifiers } from './KeyboardSensor'

export type DragEffectAllowed = 'none' | 'copy' | 'copyLink' | 'copyMove' | 'link' | 'linkMove' | 'move' | 'all' | 'uninitialized'
export type DropEffect = 'none' | 'copy' | 'link' | 'move'

export enum DragSourceStage {
  Started,
  Dragging,
  Finished,
}

export class HtmlDragSensorModel extends ObservableObject {
  @unobservable sourceId: string | undefined
  @unobservable private dataByFormat: Map<string, unknown>
  @unobservable dropEffect: DropEffect
  sourceStage: DragSourceStage
  startX: number // position relative to browser's viewport
  startY: number // position relative to browser's viewport

  @unobservable targetId: string | undefined
  @unobservable dataTypesAllowed: string[]
  @unobservable effectAllowed: DragEffectAllowed
  @unobservable dropAllowed: boolean
  draggingOver: boolean
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

  constructor() {
    super()
    this.sourceId = undefined
    this.sourceStage = DragSourceStage.Finished
    this.dataByFormat = new Map<string, unknown>()
    this.dropEffect = 'none'
    this.dataTypesAllowed = []
    this.effectAllowed = 'uninitialized'
    this.dropAllowed = false
    this.targetId = undefined
    this.draggingOver = false
    this.draggingDataType = undefined
    this.draggingData = undefined
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
    this.dataByFormat.clear()
    this.dropEffect = 'none'
    this.effectAllowed = 'uninitialized'
    this.dropAllowed = false
    this.sourceStage = DragSourceStage.Finished
    this.sourceId = undefined
    this.modifiers = KeyboardModifiers.None
    this.startX = Infinity
    this.startY = Infinity
    this.positionX = Infinity
    this.positionY = Infinity
    this.dropX = Infinity
    this.dropY = Infinity
    this.dropped = false
  }

  @reaction
  protected debug(): void {
    console.log(`HtmlDragSensor: stage = ${DragSourceStage[this.sourceStage]}, sourceId = ${this.sourceId}, targetId = ${this.targetId}, start = (${this.startX}, ${this.startY}), pos = (${this.positionX}, ${this.positionY})`)
  }
}
