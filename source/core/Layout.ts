// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

export interface Quantity {
  value: number
  units: string // ln, px, em, rem, vw, vh, %, f, ...
}

export interface ElasticSize {
  line: string | number
  min: Quantity
  max: Quantity
  growth: number
}

export interface LayoutParams {
  lineBegin?: boolean
  area?: string
  width?: number
  height?: number
  cursorRight?: boolean
  cursorDown?: boolean
}

export interface CellRange {
  x1: number
  y1: number
  x2: number
  y2: number
}

export class LayoutManager {
  private maxColumnCount: number = Infinity
  private maxRowCount: number = Infinity
  private actualColumnCount: number = 0
  private actualRowCount: number = 0
  private prevColumn: number = 0
  private prevRow: number = 0
  private nextRow: number = 0

  claimColumns(maxCount: number,
    defaultSize: ElasticSize,
    customSizes: Array<ElasticSize>): void {
    // ...
  }

  claimRows(maxCount: number,
    defaultSize: ElasticSize,
    customSizes: Array<ElasticSize>): void {
    // ...
  }

  claimBlock(li: LayoutParams, result: CellRange): CellRange {
    if (!li.area) {
      if (li.lineBegin && this.prevColumn > 0) {
        this.prevColumn = 0
        this.prevRow = this.nextRow
      }
      // Horizontal
      let w = li.width ?? 1
      if (w === Infinity)
        w = this.maxColumnCount ?? this.actualColumnCount
      if (w >= 0) {
        result.x1 = this.prevColumn + 1
        result.x2 = result.x1 + w
        if (li.cursorRight !== false)
          this.prevColumn += w
      }
      else {
        result.x1 = this.prevColumn + w
        result.x2 = this.prevColumn
      }
      // Vertical
      let h = li.height ?? 1
      if (h === Infinity)
        h = this.maxRowCount ?? this.actualRowCount
      if (h >= 0) {
        result.y1 = this.prevRow + 1
        result.y2 = result.y1 + h
        if (li.cursorDown !== false) {
          const n = this.prevRow + h
          if (n > this.nextRow)
            this.nextRow = this.actualRowCount = n
        }
      }
      else {
        result.y1 = this.prevRow + h
        result.y2 = this.prevRow
      }
    }
    else
      LayoutManager.absCellRange(
        LayoutManager.parseCellRange(li.area, result),
        this.prevColumn + 1, this.prevRow + 1,
        this.maxColumnCount, this.maxRowCount, result)
    return result
  }

  static parseCellRange(text: string, result: CellRange): CellRange {
    let i = 0
    let value = 0
    let sign = 1
    let component = 0
    while (i < text.length) {
      const charCode = text.charCodeAt(i)
      if (isCapitalLetter(charCode)) {
        if (component % 2 === 0)
          value = value * 26 + charCode - 64
        else
          console.error(`Digit is expected, but letter ('${text[i]}') was read`)
      }
      else if (isLowercaseLetter(charCode)) {
        if (component % 2 === 0) {
          value = value * 26 + charCode - 96
        }
        else {
          console.error(`Digit is expected, but letter ('${text[i]}') was read`)
        }
      }
      else if (isDigit(charCode)) {
        if (component % 2 === 0) {
          if (value !== 0) {
            if (component === 0)
              result.x1 = value * sign
            else
              result.x2 = value * sign
            value = 0
          }
          component++
        }
        value = value * 10 + charCode - 48
      }
      else if (charCode === 40) { // (
        if (component === 0)
          result.x1 = value * sign
        else if (component === 2)
          result.x2 = value * sign
        if (sign > 0) {
          sign = -1
          component &= ~1
          value = 0
        }
        else {
          console.error('Sign must not be negative')
        }
      }
      else if (charCode === 41) { // )
        if (sign > 0) {
          console.error('Sign must be negative')
        }
        switch (component) {
          case 0: result.x1 = value * sign; break
          case 1: result.y1 = value * sign; break
          case 2: result.x2 = value * sign; break
          case 3: result.y2 = value * sign; break
        }
        sign = 1
        value = 0
        component++
      }
      else if (charCode === 58) { // :
        if (sign < 0)
          console.error(`area '${text}': e1`)
        if (component === 1)
          result.y1 = value * sign
        else if (component !== 2)
          console.error(`area '${text}': [e2] component = ${component}`)
        component = 2
        value = 0
      }
      else if (isWhitespace(charCode)) {
        /* nop */
      }
      else {
        console.error(`Unknown symbol '${text[i]}' in '${text}'`)
      }
      i++
    }
    if (value !== 0) {
      switch (component) {
        case 0: {
          result.x1 = value * sign
          if (sign < 0 && result.y1 === 0)
            result.y1 = sign
          break
        }
        case 1: {
          if (sign < 0 && result.x1 === 0)
            result.x1 = sign
          result.y1 = value * sign
          break
        }
        case 2: {
          result.x2 = value * sign
          if (sign < 0 && result.y2 === 0)
            result.y2 = sign
          break
        }
        case 3: {
          if (sign < 0 && result.x2 === 0)
            result.x2 = sign
          result.y2 = value * sign
          break
        }
      }
    }
    else if (sign < 0) {
      if (component === 0) {
        if (result.x1 === 0)
          result.x1 = sign
        if (result.y1 === 0)
          result.y1 = sign
      }
      else {
        if (result.x2 === 0)
          result.x2 = sign
        if (result.y2 === 0)
          result.y2 = sign
      }
    }
    return result as CellRange
  }

  static emitCellRange(value: CellRange): string {
    const p1 = LayoutManager.emitCellPos(value.x1, value.y1)
    const p2 = LayoutManager.emitCellPos(value.x2, value.y2)
    return `${p1}${p2 !== '' ? `:${p2}` : ''}`
  }

  private static absCellRange(area: CellRange,
    cursorX: number, cursorY: number,
    maxWidth: number, maxHeight: number,
    result: CellRange): CellRange {
    // X1, X2
    const x1 = LayoutManager.absPos(area.x1, cursorX, maxWidth)
    const x2 = LayoutManager.absPos(area.x2, cursorX, maxWidth)
    if (x1 <= x2)
      result.x1 = x1, result.x2 = x2
    else
      result.x1 = x2, result.x2 = x1
    // Y1, Y2
    const y1 = LayoutManager.absPos(area.y1, cursorY, maxHeight)
    const y2 = LayoutManager.absPos(area.y2, cursorY, maxHeight)
    if (y1 <= y2)
      result.y1 = y1, result.y2 = y2
    else
      result.y1 = y2, result.y2 = y1
    return result
  }

  private static absPos(pos: number, cursor: number, max: number): number {
    if (pos < 0)
      pos = Math.max(max + pos, 1)
    else if (pos === 0)
      pos = cursor
    return pos
  }

  private static emitCellPos(x: number, y: number): string {
    let result = ''
    if (x > 0 && y > 0)
      result = `${emitLetters(x - 1)}${y}`
    else if (x > 0 && y < 0)
      result = `${emitLetters(x - 1)}(${-y})`
    else if (x < 0 && y > 0)
      result = `(${emitLetters(-x - 1)})${y}`
    else if (x < 0 && y < 0)
      result = `(${emitLetters(-x - 1)}${-y})`
    else
      result = ''
    return result
  }
}

function isWhitespace(char: number): boolean {
  // only latin white spaces are supported
  return char === 32 || (char >= 9 && char <= 13) || char === 133 || char === 160
}

function isDigit(input: number, index?: number): boolean {
  return 48 <= input && input <= 57
}

function isCapitalLetter(ch: number): boolean {
  return 65 <= ch && ch <= 90
}

function isLowercaseLetter(ch: number): boolean {
  return 97 <= ch && ch <= 122
}

function emitLetters(n: number): string {
  if (n < 0)
    throw new Error(`emitLetters: argument (${n}) should not be negative or zero`)
  let result = ''
  while (n >= 0) {
    const r = n % 26
    n = Math.floor(n / 26) - 1
    result = String.fromCharCode(65 + r) + result
  }
  return result
}
