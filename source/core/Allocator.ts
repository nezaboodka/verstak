// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { CellRange, parseCellRange } from "./CellRange"

export enum To {
  Fit     = 0b00000,
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

export interface Bounds {
  place?: string            // ""
  // Width
  widthSpan?: number        // 1 (grid layout only)
  widthMin?: string         // min-content
  widthMax?: string         // min-content
  widthGrab?: number        // 0
  widthOverlap?: boolean    // false
  // Height
  heightSpan?: number       // 1 (grid layout only)
  heightMin?: string        // min-content
  heightMax?: string        // min-content
  heightGrab?: number       // 0
  heightOverlap?: boolean   // false
  // Alignment
  align?: To                // To.Default
  dock?: To                 // To.Default
  // Flow
  newLine?: boolean         // false
  wrap?: boolean            // false
}

export interface Place {
  exact: CellRange | undefined
  widthMin: string
  widthMax: string
  widthGrab: number
  heightMin: string
  heightMax: string
  heightGrab: number
  align: To
  dock: To
}

export class Allocator {
  reset(): void {
    // do nothing
  }

  lineFeed(): void {
    // do nothing
  }

  allocate(bounds: Bounds | undefined): Place | undefined {
    return !bounds ? undefined : {
      exact: bounds.place ? parseCellRange(bounds.place, { x1: 0, y1: 0, x2: 0, y2: 0 }) : undefined,
      widthMin: bounds.widthMin ?? "",
      widthMax: bounds.widthMax ?? "",
      widthGrab: bounds.widthGrab ?? 0,
      heightMin: bounds.heightMin ?? "",
      heightMax: bounds.heightMax ?? "",
      heightGrab: bounds.heightGrab ?? 0,
      align: bounds.align ?? To.Default,
      dock: bounds.dock ?? To.Default,
    }
  }
}

export class GridBasedAllocator implements Allocator {
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

  lineFeed(): void {
    this.columnCursor = 0
    this.rowCursor = this.newRowCursor
  }

  allocate(bounds: Bounds | undefined): Place | undefined {
    const result: Place = {
      exact: undefined,
      widthMin: "", widthMax: "", widthGrab: 0,
      heightMin: "", heightMax: "", heightGrab: 0,
      align: bounds?.align ?? To.Default,
      dock: bounds?.dock ?? To.Default,
    }
    if (bounds?.place) { // absolute positioning
      result.exact = parseCellRange(bounds.place, { x1: 0, y1: 0, x2: 0, y2: 0 })
      absolutizeCellRange(result.exact,
        this.columnCursor + 1, this.rowCursor + 1,
        this.maxColumnCount || Infinity,
        this.maxRowCount || Infinity, result.exact)
    }
    else { // relative positioning
      const totalColumnCount = this.maxColumnCount !== 0 ? this.maxColumnCount : this.actualColumnCount
      const totalRowCount = this.maxRowCount !== 0 ? this.maxRowCount : this.actualRowCount

      const cr = result.exact = { x1: 0, y1: 0, x2: 0, y2: 0 }
      if (bounds?.newLine)
        this.lineFeed()
      // Horizontal
      let w = bounds?.widthSpan ?? 1
      if (w === 0)
        w = totalColumnCount || 1
      if (w >= 0) {
        cr.x1 = this.columnCursor + 1
        cr.x2 = absolutizePosition(cr.x1 + w - 1, 0, this.maxColumnCount || Infinity)
        if (!bounds?.widthOverlap)
          this.columnCursor = cr.x2
      }
      else {
        cr.x1 = Math.max(this.columnCursor + w, 1)
        cr.x2 = this.columnCursor
      }
      // Vertical
      let h = bounds?.heightSpan ?? 1
      if (h === 0)
        h = totalRowCount || 1
      if (h >= 0) {
        cr.y1 = this.rowCursor + 1
        cr.y2 = absolutizePosition(cr.y1 + h - 1, 0, this.maxRowCount || Infinity)
        if (!bounds?.heightOverlap && cr.y2 > this.newRowCursor)
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

export function equalPlaces(a: Place | undefined, b: Place | undefined): boolean {
  let result: boolean
  if (a) {
    if (b) {
      result = a.widthGrab == b.widthGrab
    }
    else
      result = false
  }
  else if (b)
    result = false
  else
    result = true
  return result
}
