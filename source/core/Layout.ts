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

export interface LayoutLineSize {
  name: string | number
  min: Quantity
  max: Quantity
  growth: number
}

export interface LayoutRequest {
  width?: number
  height?: number
  area?: string
  cursorRight?: boolean
  cursorDown?: boolean
  fromNewLine?: boolean
}

export interface LayoutArea {
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
    defaultSize: LayoutLineSize,
    customSizes: Array<LayoutLineSize>): void {
    // ...
  }

  claimRows(maxCount: number,
    defaultSize: LayoutLineSize,
    customSizes: Array<LayoutLineSize>): void {
    // ...
  }

  claimBlock(lr: LayoutRequest, result: LayoutArea): LayoutArea {
    if (!lr.area) {
      if (lr.fromNewLine && this.prevColumn > 0) {
        this.prevColumn = 0
        this.prevRow = this.nextRow
      }
      // Horizontal
      let w = lr.width ?? 1
      if (w === Infinity)
        w = this.maxColumnCount ?? this.actualColumnCount
      if (w >= 0) {
        result.x1 = this.prevColumn + 1
        result.x2 = result.x1 + w
        if (lr.cursorRight !== false)
          this.prevColumn += w
      }
      else {
        result.x1 = this.prevColumn + w
        result.x2 = this.prevColumn
      }
      // Vertical
      let h = lr.height ?? 1
      if (h === Infinity)
        h = this.maxRowCount ?? this.actualRowCount
      if (h >= 0) {
        result.y1 = this.prevRow + 1
        result.y2 = result.y1 + h
        if (lr.cursorDown !== false) {
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
      LayoutAreaUtils.parseLayoutArea(lr.area, result)
    return result
  }
}

export class LayoutAreaUtils {

  static parseLayoutArea(text: string, result: LayoutArea): LayoutArea {
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
    return result as LayoutArea
  }

  static emitLayoutArea(value: LayoutArea): string {
    const p1 = LayoutAreaUtils.emitCellPos(value.x1, value.y1)
    const p2 = LayoutAreaUtils.emitCellPos(value.x2, value.y2)
    return `${p1}${p2 !== '' ? `:${p2}` : ''}`
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
