// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ElCoords } from "./El.js"

export function objectHasMember<T>(obj: any, member: string): obj is T {
  return obj === Object(obj) && !Array.isArray(obj) && member in obj
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}

export function parseLetters(value: string): number {
  return value.split("").reduce((p, c) => p * 26 + parseInt(c, 36) - 9, 0)
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

export function parseSignedLetters(letters: string): number {
  const { sign, value } = parseSign(letters)
  return sign * parseLetters(value)
}

/** @param num Starts with 1 */
export function emitSignedLetters(num: number): string {
  const letters = emitLetters(Math.abs(num) - 1)
  return emitSign(Math.sign(num), letters)
}

export function parseSignedNumber(number: string): number {
  const { sign, value } = parseSign(number)
  return sign * Number.parseInt(value)
}

export function emitSignedNumber(num: number): string {
  return emitSign(Math.sign(num), Math.abs(num))
}

export function parseSign(value: string): { sign: number, value: string } {
  const openBraceIndex = value.indexOf("(")
  const closeBraceIndex = value.indexOf(")")
  const sign = ~openBraceIndex && ~closeBraceIndex ? -1 : 1
  if (sign < 0)
    value = value.substring(openBraceIndex + 1, closeBraceIndex)
  return { sign, value }
}

export function emitSign(sign: number, num: number | string): string {
  return sign < 0 ? `(${num})` : `${num}`
}

export function parseElCoords(text: string, result: ElCoords): ElCoords {
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
        console.error(`Digit is expected, but letter ("${text[i]}") was read`)
    }
    else if (isLowercaseLetter(charCode)) {
      if (component % 2 === 0) {
        value = value * 26 + charCode - 96
      }
      else {
        console.error(`Digit is expected, but letter ("${text[i]}") was read`)
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
        console.error(`area "${text}": e1`)
      if (component === 1)
        result.y1 = value * sign
      else if (component !== 2)
        console.error(`area "${text}": [e2] component = ${component}`)
      component = 2
      value = 0
    }
    else if (isWhitespace(charCode)) {
      /* nop */
    }
    else {
      console.error(`Unknown symbol "${text[i]}" in "${text}"`)
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
  return result as ElCoords
}

export function emitElCoords(value: ElCoords): string {
  const p1 = emitCellPosition(value.x1, value.y1)
  const p2 = emitCellPosition(value.x2, value.y2)
  return `${p1}${p2 !== "" ? `:${p2}` : ""}`
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

export function equalElCoords(a: ElCoords, b: ElCoords): boolean {
  return a.x1 === b.x1 && a.y1 === b.y1 && a.x2 === b.x2 && a.y1 === b.y2
}

export function isWhitespace(char: number): boolean {
  // only latin white spaces are supported
  return char === 32 || (char >= 9 && char <= 13) || char === 133 || char === 160
}

export function isDigit(input: number, index?: number): boolean {
  return 48 <= input && input <= 57
}

export function isCapitalLetter(ch: number): boolean {
  return 65 <= ch && ch <= 90
}

export function isLowercaseLetter(ch: number): boolean {
  return 97 <= ch && ch <= 122
}
