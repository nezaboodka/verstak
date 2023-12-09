// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { MergeListReader, MergeItem, MemberOptions } from "reactronic"

// Delegates

export type Callback<T = unknown> = (native: T) => void // to be deleted
export type Delegate<T = unknown, M = unknown, C = unknown, R = void> = (element: El<T, M, C, R>, base: () => R) => R
export type AsyncDelegate<T = unknown, M = unknown> = (element: El<T, M, Promise<void>>) => Promise<void>
export type SimpleDelegate<T = unknown> = (element: El<T, any, any, any>) => void

// El, ElKind

export enum ElKind {
  Section = 0,
  Table = 1,
  Note = 2,
  Group = 3,
  Row = 4,
  Cursor = 5,
  Native = 6,
}

export interface El<T = unknown, M = unknown, C = unknown, R = void> {
  // System-managed properties
  readonly node: RxNode<T, M, C, R>
  readonly native: T
  readonly isSection: boolean
  readonly isTable: boolean

  // User-manageable properties
  model: M
  controller: C
  kind: ElKind
  area: ElArea
  widthGrowth: number
  minWidth: string
  maxWidth: string
  heightGrowth: number
  minHeight: string
  maxHeight: string
  contentAlignment: Align
  elementAlignment: Align
  contentWrapping: boolean
  overlayVisible: boolean | undefined
  useStyle(styleName: string, enabled?: boolean): void
  configureReactronic(options: Partial<MemberOptions>): MemberOptions
}

// RxNode

export interface RxNode<T = unknown, M = unknown, C = unknown, R = void> {
  readonly key: string
  readonly driver: Driver<T>
  readonly builder: Readonly<ElBuilder<T, M, C, R>>
  readonly level: number
  readonly owner: El
  readonly host: El
  readonly children: MergeListReader<El>
  readonly slot: MergeItem<El> | undefined
  readonly stamp: number
  readonly outer: El
  readonly context: ElCtx | undefined
  readonly isInitialUpdate: boolean
  updatePriority?: Priority
  childrenShuffling: boolean
  strictOrder: boolean
  has(mode: Mode): boolean
}

// ElBuilder

export interface ElBuilder<T = unknown, M = unknown, C = unknown, R = void> {
  base?: ElBuilder<T, M, C, R>
  key?: string
  mode?: Mode
  triggers?: unknown
  claim?: Delegate<T, M, C, R>
  create?: Delegate<T, M, C, R>
  initialize?: Delegate<T, M, C, R>
  update?: Delegate<T, M, C, R>
  finalize?: Delegate<T, M, C, R>
}

// ElCtx

export interface ElCtx<T extends Object = Object> {
  value: T
}

// Driver

export interface Driver<T, C = unknown> {
  readonly name: string,
  readonly isSeparator: boolean,
  readonly preset?: SimpleDelegate<T>

  claim(element: El<T, unknown, C>): void
  create(element: El<T, unknown, C>, b: { native?: T, controller?: C }): void
  initialize(element: El<T, unknown, C>): void
  mount(element: El<T, unknown, C>, nativeHost?: T): void
  update(element: El<T, unknown, C>): void | Promise<void>
  finalize(element: El<T, unknown, C>, isLeader: boolean): boolean

  applyKind(element: El<T, any, C, any>, value: ElKind): void
  applyCoords(element: El<T, any, C, any>, value: ElCoords | undefined): void
  applyWidthGrowth(element: El<T, any, C, any>, value: number): void
  applyMinWidth(element: El<T, any, C, any>, value: string): void
  applyMaxWidth(element: El<T, any, C, any>, value: string): void
  applyHeightGrowth(element: El<T, any, C, any>, value: number): void
  applyMinHeight(element: El<T, any, C, any>, value: string): void
  applyMaxHeight(element: El<T, any, C, any>, value: string): void
  applyContentAlignment(element: El<T, any, C, any>, value: Align): void
  applyElementAlignment(element: El<T, any, C, any>, value: Align): void
  applyContentWrapping(element: El<T, any, C, any>, value: boolean): void
  applyOverlayVisible(element: El<T, any, C, any>, value: boolean | undefined): void
  applyStyle(element: El<T, any, C, any>, secondary: boolean, styleName: string, enabled?: boolean): void
}

// Other

export interface ElCoords {
  x1: number
  y1: number
  x2: number
  y2: number
}

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

export interface ElasticSize {
  cells?: number            // 1 (table only)
  min?: string              // min-content
  max?: string              // min-content
  growth?: number           // 0
}

export interface TrackSize extends ElasticSize {
  track?: string | number   // <current>
}

export type ElArea = undefined | string | {
  cellsOverWidth?: number   // 1 (table only)
  cellsOverHeight?: number  // 1 (table only)
}
