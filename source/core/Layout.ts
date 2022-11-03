// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { CellRange, parseCellRange } from './CellRange'

export enum Alignment {
  Fit = 0,

  TopLeft,     TopCenter,      TopRight,
  MiddleLeft, MiddleCenter, MiddleRight,
  BottomLeft, BottomCenter, BottomRight,

  FitButLeft, FitButCenter, FitButRight,
  FitButTop,
  FitButMiddle,
  FitButBottom,
}

export interface ElasticSize {
  cells?: number                // 1 (grid layout only)
  min?: string                  // min-content
  max?: string                  // min-content
  growth?: number               // 0
}

export interface TrackSize extends ElasticSize {
  track?: string | number       // <current>
}

export interface Box {
  // Sizing
  place?: string                // ""
  width?: ElasticSize           // cells=1, min/max=min-content
  height?: ElasticSize          // cells=1, min/max=min-content
  widthOverlapped?: boolean     // false
  heightOverlapped?: boolean    // false
  // Alignment
  alignment?: Alignment         // MiddleLeft
  boxAlignment?: Alignment      // Fit
  // Flow
  lineBegin?: boolean           // false
  wrap?: boolean                // false
}

export interface Placement {
  applied: boolean
  cellRange: CellRange | undefined
  widthMin: string
  widthMax: string
  widthGrow: number
  heightMin: string
  heightMax: string
  heightGrow: number
  alignment: Alignment
  boxAlignment: Alignment
}

export class GridLayoutCursor {
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

  place(box: Box | undefined): Placement {
    const result: Placement = {
      applied: false,
      cellRange: undefined,
      widthMin: '', widthMax: '', widthGrow: 0,
      heightMin: '', heightMax: '', heightGrow: 0,
      alignment: Alignment.TopLeft, boxAlignment: Alignment.Fit,
    }
    const maxColumnCount = this.maxColumnCount !== 0 ? this.maxColumnCount : this.actualColumnCount
    const maxRowCount = this.maxRowCount !== 0 ? this.maxRowCount : this.actualRowCount
    if (box?.place) { // absolute positioning
      result.cellRange = parseCellRange(box.place, { x1: 0, y1: 0, x2: 0, y2: 0 })
      absolutizeCellRange(result.cellRange,
        this.columnCursor + 1, this.rowCursor + 1,
        maxColumnCount, maxRowCount, result.cellRange)
    }
    else { // relative positioning
      const cr = result.cellRange = { x1: 0, y1: 0, x2: 0, y2: 0 }
      if (box?.lineBegin) {
        this.columnCursor = 0
        this.rowCursor = this.newRowCursor
      }
      // Horizontal
      let w = box?.width?.cells ?? 1
      if (w === 0)
        w = maxColumnCount
      if (w >= 0) {
        cr.x1 = this.columnCursor + 1
        cr.x2 = absolutizePosition(cr.x1 + w, 0, maxColumnCount)
        if (!box?.widthOverlapped)
          this.columnCursor = cr.x2
      }
      else {
        cr.x1 = Math.max(this.columnCursor + w, 1)
        cr.x2 = this.columnCursor
      }
      // Vertical
      let h = box?.height?.cells ?? 1
      if (h === 0)
        h = maxRowCount
      if (h >= 0) {
        cr.y1 = this.rowCursor + 1
        cr.y2 = absolutizePosition(cr.y1 + h, 0, maxRowCount)
        if (!box?.heightOverlapped && cr.y2 > this.newRowCursor)
          this.newRowCursor = cr.y2
      }
      else {
        cr.y1 = Math.max(this.rowCursor + h, 1)
        cr.y2 = this.rowCursor
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

export function isSameBoxes(a: Placement | undefined, b: Placement | undefined): boolean {
  return true // not implemented
}
