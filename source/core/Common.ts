// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

export enum Layout {
  Band = 0,   // 000
  Table = 1,  // 001
  Row = 2,    // 010
  Group = 3,  // 011
  Note = 4,   // 100
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

export type Placement = undefined | string | {
  widthInCells?: number     // 1 (table only)
  heightInCells?: number    // 1 (table only)
}
