// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

export interface LayoutOptions {
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

  claim(lo: LayoutOptions, result: CellRange): CellRange {
    const maxColumnCount = this.maxColumnCount !== 0 ? this.maxColumnCount : this.actualColumnCount
    const maxRowCount = this.maxRowCount !== 0 ? this.maxRowCount : this.actualRowCount
    if (lo.area) { // absolute positioning
      LayoutManager.parseCellRange(lo.area, result)
      absolutizeCellRange(result,
        this.columnCursor + 1, this.rowCursor + 1,
        maxColumnCount, maxRowCount, result)
    }
    else { // relative positioning
      if (lo.lineBegin) {
        this.columnCursor = 0
        this.rowCursor = this.newRowCursor
      }
      // Horizontal
      let w = lo.width ?? 1
      if (w === 0)
        w = maxColumnCount
      if (w >= 0) {
        result.x1 = this.columnCursor + 1
        result.x2 = absolutizePosition(result.x1 + w, 0, maxColumnCount)
        if (lo.cursorRight !== false)
          this.columnCursor = result.x2
      }
      else {
        result.x1 = Math.max(this.columnCursor + w, 1)
        result.x2 = this.columnCursor
      }
      // Vertical
      let h = lo.height ?? 1
      if (h === 0)
        h = maxRowCount
      if (h >= 0) {
        result.y1 = this.rowCursor + 1
        result.y2 = absolutizePosition(result.y1 + h, 0, maxRowCount)
        if (lo.cursorDown !== false && result.y2 > this.newRowCursor)
          this.newRowCursor = result.y2
      }
      else {
        result.y1 = Math.max(this.rowCursor + h, 1)
        result.y2 = this.rowCursor
      }
    }
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
    const p1 = emitCellPosition(value.x1, value.y1)
    const p2 = emitCellPosition(value.x2, value.y2)
    return `${p1}${p2 !== '' ? `:${p2}` : ''}`
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

function emitCellPosition(x: number, y: number): string {
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
