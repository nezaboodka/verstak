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

export type Place = undefined | string | number | {
  columns?: number          // 1 (grid layout only)
  columnsOverlap?: boolean  // false
  rows?: number             // 1 (grid layout only)
  rowsOverlap?: boolean     // false
}

export interface Bounds {
  place?: string            // ""
  // Width
  widthSpan?: number        // 1 (grid layout only)
  widthMin?: string         // min-content
  widthMax?: string         // min-content
  widthGrowth?: number      // 0 (no grow)
  widthOverlap?: boolean    // false
  // Height
  heightSpan?: number       // 1 (grid layout only)
  heightMin?: string        // min-content
  heightMax?: string        // min-content
  heightGrowth?: number     // 0 (no grow)
  heightOverlap?: boolean   // false
  // Alignment
  alignContent?: Align         // To.Default
  alignFrame?: Align           // To.Default
  // Other
  wrapping?: boolean        // false
  dangling?: boolean        // false
}

export interface PlaceOld {
  exact: CellRange | undefined
  widthMin: string
  widthMax: string
  widthGrowth: number
  heightMin: string
  heightMax: string
  heightGrowth: number
  alignContent: Align
  alignFrame: Align
  wrapping: boolean
  dangling: boolean
}

export class Cursor {
  reset(): void {
    // do nothing
  }

  onwardsOld(place: Place): CellRange {
    return { x1: 0, y1: 0, x2: 0, y2: 0 }
  }

  lineFeed(): void {
    // do nothing
  }

  onwards(bounds: Bounds | undefined): PlaceOld | undefined {
    return !bounds ? undefined : {
      exact: bounds.place ? parseCellRange(bounds.place, { x1: 0, y1: 0, x2: 0, y2: 0 }) : undefined,
      widthMin: bounds.widthMin ?? "",
      widthMax: bounds.widthMax ?? "",
      widthGrowth: bounds.widthGrowth ?? 0,
      heightMin: bounds.heightMin ?? "",
      heightMax: bounds.heightMax ?? "",
      heightGrowth: bounds.heightGrowth ?? 0,
      alignContent: bounds.alignContent ?? Align.Default,
      alignFrame: bounds.alignFrame ?? Align.Default,
      wrapping: bounds.wrapping ?? false,
      dangling: bounds.dangling ?? false,
    }
  }
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

  onwardsOld(placement: Place): CellRange {
    let result: CellRange
    if (typeof(placement) === "string") {
      result = parseCellRange(placement, { x1: 0, y1: 0, x2: 0, y2: 0 })
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
      if (typeof(placement) === "number") {
        columns = placement
        rows = 1
        columnsOverlap = rowsOverlap = false
      }
      else if (placement) {
        columns = placement.columns ?? 1
        rows = placement.rows ?? 1
        columnsOverlap = placement.columnsOverlap ?? false
        rowsOverlap = placement.rowsOverlap ?? false
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

  onwards(bounds: Bounds | undefined): PlaceOld | undefined {
    const result: PlaceOld = {
      exact: undefined,
      widthMin: "", widthMax: "", widthGrowth: 0,
      heightMin: "", heightMax: "", heightGrowth: 0,
      alignContent: bounds?.alignContent ?? Align.Default,
      alignFrame: bounds?.alignFrame ?? Align.Default,
      wrapping: bounds?.wrapping ?? false,
      dangling: bounds?.dangling ?? false,
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

export function equalPlaces(a: PlaceOld | undefined, b: PlaceOld | undefined): boolean {
  let result: boolean
  if (a) {
    if (b) {
      result = a.widthGrowth == b.widthGrowth
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
