// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveNode } from "reactronic"

export type El<T = any, M = any> = {
  // System-managed properties
  readonly node: ReactiveNode<El<T, M>>
  readonly index: number
  native: T

  // User-manageable properties
  model: M
  kind: ElKind
  place: ElPlace
  width: Range
  height: Range
  horizontally: Horizontal | undefined
  contentHorizontally: Horizontal | undefined
  vertically: Vertical | undefined
  contentVertically: Vertical | undefined
  stretchingStrengthHorizontally: number | undefined
  stretchingStrengthVertically: number | undefined
  contentWrapping: boolean
  overlayVisible: boolean | undefined

  sealed: Direction | undefined
  splitView: Direction | undefined
  widthPx: { minPx: number, maxPx: number }
  heightPx: { minPx: number, maxPx: number }
  partitionSizeInSplitViewPx: number

  readonly style: CSSStyleDeclaration
  useStylingPreset(stylingPresetName: string, enabled?: boolean): void
}

export enum ElKind {
  panel = 0,
  table = 1,
  note = 2,
  group = 3,
  part = 4,
  splitter = 5,
  cursor = 6,
  native = 7,
}

export type ElCoords = {
  x1: number
  y1: number
  x2: number
  y2: number
}

export enum Horizontal {
  left          = 0,
  center        = 1,
  right         = 2,
  stretch       = 3,
  stretchAndFix = 4,
}

export enum Vertical {
  top           = 0,
  center        = 1,
  bottom        = 2,
  stretch       = 3,
  stretchAndFix = 4,
}

export type Range = {
  readonly min?: string     // min-content
  readonly max?: string     // min-content
  preferred?: string
}

export type MarkedRange = Range & {
  readonly marker?: string
}

export type ElPlace = undefined | string | {
  cellsOverWidth?: number   // 1 (table only)
  cellsOverHeight?: number  // 1 (table only)
}

export enum Direction {
  horizontal = 0,
  vertical = 1,
}
