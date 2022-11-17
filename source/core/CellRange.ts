// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

export interface CellRange {
  x1: number
  y1: number
  x2: number
  y2: number
}

export function parseCellRange(text: string, result: CellRange): CellRange {
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
        console.error("Sign must not be negative")
      }
    }
    else if (charCode === 41) { // )
      if (sign > 0) {
        console.error("Sign must be negative")
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

export function emitCellRange(value: CellRange): string {
  const p1 = emitCellPosition(value.x1, value.y1)
  const p2 = emitCellPosition(value.x2, value.y2)
  return `${p1}${p2 !== "" ? `:${p2}` : ""}`
}

export function emitLetters(n: number): string {
  if (n < 0)
    throw new Error(`emitLetters: argument (${n}) should not be negative or zero`)
  let result = ""
  while (n >= 0) {
    const r = n % 26
    n = Math.floor(n / 26) - 1
    result = String.fromCharCode(65 + r) + result
  }
  return result
}

export function emitCellPosition(x: number, y: number): string {
  let result = ""
  if (x > 0 && y > 0)
    result = `${emitLetters(x - 1)}${y}`
  else if (x > 0 && y < 0)
    result = `${emitLetters(x - 1)}(${-y})`
  else if (x < 0 && y > 0)
    result = `(${emitLetters(-x - 1)})${y}`
  else if (x < 0 && y < 0)
    result = `(${emitLetters(-x - 1)}${-y})`
  else
    result = ""
  return result
}

export function equalCellRanges(a: CellRange, b: CellRange): boolean {
  return a.x1 === b.x1 && a.y1 === b.y1 && a.x2 === b.x2 && a.y1 === b.y2
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
