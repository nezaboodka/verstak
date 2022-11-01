// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { CellRange, parseCellRange } from './CellRange'

export enum Alignment {
  topLeft,     topCenter,      topRight,    topJustify,
  middleLeft, middleCenter, middleRight,    middleJustify,
  bottomLeft, bottomCenter, bottomRight,    bottomJustify,
}

export interface Place {
  area?: string
  columns?: number
  rows?: number
  alignment?: Alignment
  boxAlignment?: Alignment
  lineBegin?: boolean
  keepColumn?: boolean
  keepRow?: boolean
}

export class LayoutManager {
  private maxColumnCount: number = 0
  private maxRowCount: number = 0
  private actualColumnCount: number = 0
  private actualRowCount: number = 0
  private columnCursor: number = 0
  private rowCursor: number = 0
  private newRowCursor: number = 0

  reset(maxColumnCount: number, maxRowCount: number): void {
    this.maxColumnCount = maxColumnCount
    this.maxRowCount = maxRowCount
    this.actualColumnCount = 0
    this.actualRowCount = 0
    this.columnCursor = 0
    this.rowCursor = 0
    this.newRowCursor = 0
  }

  claim(layout: Place, result: CellRange): CellRange {
    const maxColumnCount = this.maxColumnCount !== 0 ? this.maxColumnCount : this.actualColumnCount
    const maxRowCount = this.maxRowCount !== 0 ? this.maxRowCount : this.actualRowCount
    if (layout.area) { // absolute positioning
      parseCellRange(layout.area, result)
      absolutizeCellRange(result,
        this.columnCursor + 1, this.rowCursor + 1,
        maxColumnCount, maxRowCount, result)
    }
    else { // relative positioning
      if (layout.lineBegin) {
        this.columnCursor = 0
        this.rowCursor = this.newRowCursor
      }
      // Horizontal
      let w = layout.columns ?? 1
      if (w === 0)
        w = maxColumnCount
      if (w >= 0) {
        result.x1 = this.columnCursor + 1
        result.x2 = absolutizePosition(result.x1 + w, 0, maxColumnCount)
        if (!layout.keepColumn)
          this.columnCursor = result.x2
      }
      else {
        result.x1 = Math.max(this.columnCursor + w, 1)
        result.x2 = this.columnCursor
      }
      // Vertical
      let h = layout.rows ?? 1
      if (h === 0)
        h = maxRowCount
      if (h >= 0) {
        result.y1 = this.rowCursor + 1
        result.y2 = absolutizePosition(result.y1 + h, 0, maxRowCount)
        if (!layout.keepRow && result.y2 > this.newRowCursor)
          this.newRowCursor = result.y2
      }
      else {
        result.y1 = Math.max(this.rowCursor + h, 1)
        result.y2 = this.rowCursor
      }
    }
    return result
  }
}

function absolutizeCellRange(area: CellRange,
  cursorX: number, cursorY: number,
  maxWidth: number, maxHeight: number,
  result: CellRange): CellRange {
  // X1, X2
  const x1 = absolutizePosition(area.x1, cursorX, maxWidth)
  const x2 = absolutizePosition(area.x2, cursorX, maxWidth)
  if (x1 <= x2)
    result.x1 = x1, result.x2 = x2
  else
    result.x1 = x2, result.x2 = x1
  // Y1, Y2
  const y1 = absolutizePosition(area.y1, cursorY, maxHeight)
  const y2 = absolutizePosition(area.y2, cursorY, maxHeight)
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
