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
  track?: string | number       // <current>
}

export type Cells = undefined | string | number | {
  right?: number               // 1 (grid layout only)
  horizontalOverlap?: boolean  // false
  down?: number                // 1 (grid layout only)
  verticalOverlap?: boolean    // false
}

export class Cursor {
  static readonly UndefinedCellRange = Object.freeze({ x1: 0, y1: 0, x2: 0, y2: 0 })
  reset(): void { /* do nothing */ }
  onwards(cells: Cells): CellRange { return Cursor.UndefinedCellRange }
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

  onwards(cells: Cells): CellRange {
    let result: CellRange
    if (typeof(cells) === "string") {
      result = parseCellRange(cells, { x1: 0, y1: 0, x2: 0, y2: 0 })
      absolutizeCellRange(result,
        this.columnCursor + 1, this.rowCursor + 1,
        this.maxColumnCount || Infinity,
        this.maxRowCount || Infinity, result)
    }
    else {
      // Unpack parameters
      let columns: number
      let rows: number
      let columnsOverlap: boolean
      let rowsOverlap: boolean
      if (typeof(cells) === "number") {
        columns = cells
        rows = 1
        columnsOverlap = rowsOverlap = false
      }
      else if (cells) {
        columns = cells.right ?? 1
        rows = cells.down ?? 1
        columnsOverlap = cells.horizontalOverlap ?? false
        rowsOverlap = cells.verticalOverlap ?? false
      }
      else { // placement === undefined
        columns = 1
        rows = 1
        columnsOverlap = rowsOverlap = false
      }
      // Arrange
      const totalColumnCount = this.maxColumnCount !== 0 ? this.maxColumnCount : this.actualColumnCount
      const totalRowCount = this.maxRowCount !== 0 ? this.maxRowCount : this.actualRowCount
      result = { x1: 0, y1: 0, x2: 0, y2: 0 }
      if (columns === 0)
        columns = totalColumnCount || 1
      if (columns >= 0) {
        result.x1 = this.columnCursor + 1
        result.x2 = absolutizePosition(result.x1 + columns - 1, 0, this.maxColumnCount || Infinity)
        if (!columnsOverlap)
          this.columnCursor = result.x2
      }
      else {
        result.x1 = Math.max(this.columnCursor + columns, 1)
        result.x2 = this.columnCursor
      }
      if (rows === 0)
        rows = totalRowCount || 1
      if (rows >= 0) {
        result.y1 = this.rowCursor + 1
        result.y2 = absolutizePosition(result.y1 + rows - 1, 0, this.maxRowCount || Infinity)
        if (!rowsOverlap && result.y2 > this.newRowCursor)
          this.newRowCursor = result.y2
      }
      else {
        result.y1 = Math.max(this.rowCursor + rows, 1)
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
