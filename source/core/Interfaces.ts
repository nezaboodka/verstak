// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { CollectionReader, Item, MemberOptions } from "reactronic"

// Delegates

export type Callback<T = unknown> = (native: T) => void // to be deleted
export type Delegate<T = unknown, M = unknown, C = unknown, R = void> = (block: Block<T, M, C, R>, original: () => R) => R
export type AsyncDelegate<T = unknown, M = unknown> = (block: Block<T, M, Promise<void>>) => Promise<void>
export type SimpleDelegate<T = unknown> = (block: Block<T, any, any, any>) => void

// Block

export enum BlockKind {
  Band = 0,
  Table = 1,
  Note = 2,
  Group = 3,
  Row = 4,
  Cursor = 5,
  Raw = 6,
}

export interface Block<T = unknown, M = unknown, C = unknown, R = void> {
  // System-managed properties
  readonly descriptor: BlockDescriptor<T, M, C, R>
  readonly native: T
  readonly isBand: boolean
  readonly isTable: boolean

  // User-manageable properties
  model: M
  controller: C
  kind: BlockKind
  area: BlockArea
  widthGrowth: number
  minWidth: string
  maxWidth: string
  heightGrowth: number
  minHeight: string
  maxHeight: string
  contentAlignment: Align
  blockAlignment: Align
  contentWrapping: boolean
  overlayVisible: boolean | undefined
  childrenShuffling: boolean
  renderingPriority?: Priority
  isSequential: boolean
  readonly isInitialRendering: boolean
  style(styleName: string, enabled?: boolean): void
  configureReactronic(options: Partial<MemberOptions>): MemberOptions
}

// BlockDescriptor

export interface BlockDescriptor<T = unknown, M = unknown, C = unknown, R = void> {
  readonly key: string
  readonly driver: Driver<T>
  readonly builder: Readonly<BlockBuilder<T, M, C, R>>
  readonly level: number
  readonly owner: Block
  readonly host: Block
  readonly children: CollectionReader<Block>
  readonly item: Item<Block> | undefined
  readonly stamp: number
  readonly outer: Block
  readonly context: BlockCtx | undefined
}

// BlockBuilder

export interface BlockBuilder<T = unknown, M = unknown, C = unknown, R = void> {
  original?: BlockBuilder<T, M, C, R>
  key?: string
  modes?: Mode
  triggers?: unknown
  claim?: Delegate<T, M, C, R>
  create?: Delegate<T, M, C, R>
  initialize?: Delegate<T, M, C, R>
  render?: Delegate<T, M, C, R>
  finalize?: Delegate<T, M, C, R>
}

// BlockCtx

export interface BlockCtx<T extends Object = Object> {
  value: T
}

// Driver

export interface Driver<T, C = unknown> {
  readonly name: string,
  readonly isRow: boolean,
  readonly preset?: SimpleDelegate<T>

  claim(block: Block<T, unknown, C>): void
  create(block: Block<T, unknown, C>, b: { native?: T, controller?: C }): void
  initialize(block: Block<T, unknown, C>): void
  mount(block: Block<T, unknown, C>): void
  render(block: Block<T, unknown, C>): void | Promise<void>
  finalize(block: Block<T, unknown, C>, isLeader: boolean): boolean

  applyKind(block: Block<T, any, C, any>, value: BlockKind): void
  applyCoords(block: Block<T, any, C, any>, value: BlockCoords | undefined): void
  applyWidthGrowth(block: Block<T, any, C, any>, value: number): void
  applyMinWidth(block: Block<T, any, C, any>, value: string): void
  applyMaxWidth(block: Block<T, any, C, any>, value: string): void
  applyHeightGrowth(block: Block<T, any, C, any>, value: number): void
  applyMinHeight(block: Block<T, any, C, any>, value: string): void
  applyMaxHeight(block: Block<T, any, C, any>, value: string): void
  applyContentAlignment(block: Block<T, any, C, any>, value: Align): void
  applyBlockAlignment(block: Block<T, any, C, any>, value: Align): void
  applyContentWrapping(block: Block<T, any, C, any>, value: boolean): void
  applyOverlayVisible(block: Block<T, any, C, any>, value: boolean | undefined): void
  applyStyle(block: Block<T, any, C, any>, secondary: boolean, styleName: string, enabled?: boolean): void
}

// Other

export interface BlockCoords {
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
  SeparateReaction = 1,
  ManualMount = 2,
}

export enum Align {
  Stretch = 0b00000,
  Left    = 0b00001,
  CenterX = 0b00010,
  Right   = 0b00011,
  Top     = 0b00100,
  CenterY = 0b01000,
  Bottom  = 0b01100,
  Default = 0b10000,
  Center  = CenterX + CenterY,
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

export type BlockArea = undefined | string | {
  cellsOverWidth?: number   // 1 (table only)
  cellsOverHeight?: number  // 1 (table only)
}
