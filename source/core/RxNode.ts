// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { MemberOptions, MergeListReader, MergedItem } from "reactronic"

// Delegates

export type Delegate<T> = (element: T, base: () => void) => void
// export type AsyncDelegate<T = unknown, M = unknown> = (element: El<T, M, Promise<void>>) => Promise<void>
export type SimpleDelegate<T = unknown> = (element: T) => void

// RxNode

export interface RxNode<T = any> {
  readonly key: string
  readonly driver: RxNodeDriver<T>
  readonly spec: Readonly<RxNodeSpec<T>>
  readonly level: number
  readonly owner: RxNode
  readonly element: T
  readonly host: RxNode
  readonly children: MergeListReader<RxNode>
  readonly slot: MergedItem<RxNode<T>> | undefined
  readonly stamp: number
  readonly outer: RxNode
  readonly context: RxNodeCtx | undefined
  readonly isInitialUpdate: boolean
  priority?: Priority
  childrenShuffling: boolean
  strictOrder: boolean
  has(mode: Mode): boolean
  configureReactronic(options: Partial<MemberOptions>): MemberOptions
}

// RxNodeSpec

export interface RxNodeSpec<T = unknown> {
  preset?: RxNodeSpec<T>
  key?: string
  mode?: Mode
  triggers?: unknown
  specify?: Delegate<T>
  create?: Delegate<T>
  initialize?: Delegate<T>
  update?: Delegate<T>
  finalize?: Delegate<T>
}

// RxNodeCtx

export interface RxNodeCtx<T extends Object = Object> {
  value: T
}

// RxNodeDriver

export interface RxNodeDriver<T> {
  readonly name: string,
  readonly isSeparator: boolean,
  readonly predefine?: SimpleDelegate<T>

  create(node: RxNode<T>): T
  assign(element: T): void
  initialize(element: T): void
  mount(element: T): void
  update(element: T): void | Promise<void>
  finalize(element: T, isLeader: boolean): boolean
}

// Other

export const enum Priority {
  Realtime = 0,
  Normal = 1,
  Background = 2
}

export enum Mode {
  Default = 0,
  PinpointUpdate = 1,
  ManualMount = 2,
}

// TEMPORARY

export enum ElKind {
  Section = 0,
  Table = 1,
  Note = 2,
  Group = 3,
  Row = 4,
  Cursor = 5,
  Native = 6,
}

export interface ElCoords {
  x1: number
  y1: number
  x2: number
  y2: number
}

export enum Align {
  Default = 0b10000,
  ToBounds = 0b00000,
  ToLeft    = 0b00001,
  ToCenterX = 0b00010,
  ToRight   = 0b00011,
  ToTop     = 0b00100,
  ToCenterY = 0b01000,
  ToBottom  = 0b01100,
  ToCenter  = ToCenterX + ToCenterY,
}
