// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { MemberOptions } from "reactronic"
import { Align, ElKind, RxNode } from "./RxNode.js"

// El

export interface El<T = any, M = any, C = any, R = void> {
  // System-managed properties
  readonly node: RxNode<El<T, M, C, R>>
  readonly isSection: boolean
  readonly isTable: boolean
  native: T

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

// Other

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
