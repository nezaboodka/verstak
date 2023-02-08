// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { CellRange, parseCellRange } from "./CellRange"

export enum Align {
  Stretch = 0b00000,
  Left    = 0b00001,
  Center  = 0b00010,
  Right   = 0b00011,
  Top     = 0b00100,
  CenterV = 0b01000,
  Bottom  = 0b01100,
  Default = 0b10000,
}

export interface ElasticSize {
  cells?: number            // 1 (grid layout only)
  min?: string              // min-content
  max?: string              // min-content
  growth?: number           // 0
}

export interface TrackSize extends ElasticSize {
  track?: string | number   // <current>
}

export type Bounds = undefined | string | number | {
  widthInCells?: number     // 1 (grid layout only)
  heightInCells?: number    // 1 (grid layout only)
  widthOverlap?: boolean    // false
  heightOverlap?: boolean   // false
}

export class Cursor {
  static readonly UndefinedCellRange = Object.freeze({ x1: 0, y1: 0, x2: 0, y2: 0 })
  reset(): void { /* do nothing */ }
  onwards(bounds: Bounds): CellRange { return Cursor.UndefinedCellRange }
  lineFeed(): void { /* do nothing */ }
}

export class GridCursor extends Cursor {
  private maxColumnCount: number = 0
  private maxRowCount: number = 0
  private actualColumnCount: number = 0
  private actualRowCount: number = 0
  private columnCursor: number = 0
  private rowCursor: number = 0
  private newRowCursor: number = 0

  reset(): void {
    this.maxColumnCount = 0
    this.maxRowCount = 0
    this.actualColumnCount = 0
    this.actualRowCount = 0
    this.columnCursor = 0
    this.rowCursor = 0
    this.newRowCursor = 0
  }

  onwards(bounds: Bounds): CellRange {
    let result: CellRange
    if (typeof(bounds) === "string") {
      result = parseCellRange(bounds, { x1: 0, y1: 0, x2: 0, y2: 0 })
      absolutizeCellRange(result,
        this.columnCursor + 1, this.rowCursor + 1,
        this.maxColumnCount || Infinity,
        this.maxRowCount || Infinity, result)
    }
    else {
      // Unpack parameters
      let w: number
      let h: number
      let wOverlap: boolean
      let hOverlap: boolean
      if (typeof(bounds) === "number") {
        w = bounds
        h = 1
        wOverlap = hOverlap = false
      }
      else if (bounds) {
        w = bounds.widthInCells ?? 1
        h = bounds.heightInCells ?? 1
        wOverlap = bounds.widthOverlap ?? false
        hOverlap = bounds.heightOverlap ?? false
      }
      else { // placement === undefined
        w = 1
        h = 1
        wOverlap = hOverlap = false
      }
      // Arrange
      const totalColumnCount = this.maxColumnCount !== 0 ? this.maxColumnCount : this.actualColumnCount
      const totalRowCount = this.maxRowCount !== 0 ? this.maxRowCount : this.actualRowCount
      result = { x1: 0, y1: 0, x2: 0, y2: 0 }
      if (w === 0)
        w = totalColumnCount || 1
      if (w >= 0) {
        result.x1 = this.columnCursor + 1
        result.x2 = absolutizePosition(result.x1 + w - 1, 0, this.maxColumnCount || Infinity)
        if (!wOverlap)
          this.columnCursor = result.x2
      }
      else {
        result.x1 = Math.max(this.columnCursor + w, 1)
        result.x2 = this.columnCursor
      }
      if (h === 0)
        h = totalRowCount || 1
      if (h >= 0) {
        result.y1 = this.rowCursor + 1
        result.y2 = absolutizePosition(result.y1 + h - 1, 0, this.maxRowCount || Infinity)
        if (!hOverlap && result.y2 > this.newRowCursor)
          this.newRowCursor = result.y2
      }
      else {
        result.y1 = Math.max(this.rowCursor + h, 1)
        result.y2 = this.rowCursor
      }
    }
    return result
  }

  lineFeed(): void {
    this.columnCursor = 0
    this.rowCursor = this.newRowCursor
  }
}

function absolutizeCellRange(area: CellRange,
  cursorX: number, cursorY: number,
  maxWidth: number, maxHeight: number,
  result: CellRange): CellRange {
  // X1, X2
  const x1 = absolutizePosition(area.x1, cursorX, maxWidth)
  const x2 = absolutizePosition(area.x2, x1, maxWidth)
  if (x1 <= x2)
    result.x1 = x1, result.x2 = x2
  else
    result.x1 = x2, result.x2 = x1
  // Y1, Y2
  const y1 = absolutizePosition(area.y1, cursorY, maxHeight)
  const y2 = absolutizePosition(area.y2, y1, maxHeight)
  if (y1 <= y2)
    result.y1 = y1, result.y2 = y2
  else
    result.y1 = y2, result.y2 = y1
  return result
}

function absolutizePosition(pos: number, cursor: number, max: number): number {
  if (pos === 0)
    pos = cursor
  else if (pos < 0)
    pos = Math.max(max + pos, 1)
  else
    pos = Math.min(pos, max)
  return pos
}
