// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeVariable } from "reactronic"

export enum Axis { X, Y }

export type NoUnit = void
export type DistanceUnit = "px" | "ln" | "em" | "rem" | "vw" | "vh" | "%" | "f"

export class Dimension<T = NoUnit> {
  num: number
  unit?: T

  constructor(num: number, unit?: T) {
    this.num = num
    this.unit = unit
  }

  clone(): Dimension<T> {
    return new Dimension(this.num, this.unit)
  }

  equalsTo(another: Dimension<T>): boolean {
    return this.num === another.num && this.unit === another.unit
  }

  static parse<T>(text: string): Dimension<T> {
    text = text.trim()
    const splitPos = text.search(/[^0-9.]/)
    const num = Number.parseFloat(~splitPos ? text.substring(0, splitPos) : text)
    const unit = ~splitPos ? text.substring(splitPos, text.length).trim() : undefined
    return dim(num, unit as unknown as T)
  }

  static emit<T>(value: Dimension<T>): string {
    return `${value.num}${value.unit ?? ""}`
  }

  // Font Size Px
  static readonly gFontSizePx = new ReactiveTreeVariable<number>()

  // Line Size Px
  private static readonly gLineSizePx = new ReactiveTreeVariable<number>()
  static get lineSizePx(): number {
    return Dimension.gLineSizePx.value
  }
  static set lineSizePx(value: number) {
    Dimension.gLineSizePx.value = value
  }
  static getLineSizePx(): ReactiveTreeVariable<number> {
    return Dimension.gLineSizePx
  }
}

export function dim<T = NoUnit>(num: number, unit?: T): Dimension<T> {
  return new Dimension(num, unit)
}

export type SizeConverterOptions = {
  axis: Axis,
  lineSizePx: number,
  fontSizePx: number,
  containerSizeXpx: number,
  containerSizeYpx: number,
}

export const BodyFontSize = Number.parseFloat(getComputedStyle(document.body).fontSize)
export const BodySmallFontSize = Math.ceil(BodyFontSize * 0.75)

export function px(num: number): Dimension<DistanceUnit> {
  return dim(num, "px")
}

export function ln(num: number): Dimension<DistanceUnit> {
  return dim(num, "ln")
}

// Converters

export function fromPx(value: number, unit: DistanceUnit, options: SizeConverterOptions): number
export function fromPx<T>(value: Dimension<T>, options: SizeConverterOptions): number
export function fromPx(value: number | Dimension, ...args: Array<any>): number {
  const isValueNumber = typeof value === "number"
  const { num, unit } = isValueNumber
    ? { num: value, unit: args[0] }
    : value
  const options: SizeConverterOptions = isValueNumber ? args[1] : args[0]
  let result = 0
  switch (unit) {
    case "px": result = num; break
    case "ln": result = pxToEmOrN(num, options.lineSizePx); break
    case "em": result = pxToEmOrN(num, options.fontSizePx); break
    case "rem": result = pxToRem(num); break
    case "vw": result = pxToPercent(num, options.containerSizeXpx); break
    case "vh": result = pxToPercent(num, options.containerSizeYpx); break
    case "%": result = pxToPercent(num, options.axis === Axis.X ? options.containerSizeXpx : options.containerSizeYpx); break
    default: result = num; break
  }
  return result
}

export function toPx(value: number, unit: DistanceUnit, options: SizeConverterOptions): number
export function toPx<T>(value: Dimension<T>, options: SizeConverterOptions): number
export function toPx(value: number | Dimension, ...args: Array<any>): number {
  const isValueNumber = typeof value === "number"
  const { num, unit } = isValueNumber
    ? { num: value, unit: args[0] }
    : value
  const options: SizeConverterOptions = isValueNumber ? args[1] : args[0]
  let result = 0
  switch (unit) {
    case "px": result = num; break
    case "ln": result = emOrNToPx(num, options.lineSizePx); break
    case "em": result = emOrNToPx(num, options.fontSizePx); break
    case "rem": result = remToPx(num); break
    case "vw": result = percentToPx(num, options.containerSizeXpx); break
    case "vh": result = percentToPx(num, options.containerSizeYpx); break
    case "%": result = percentToPx(num, options.axis === Axis.X ? options.containerSizeXpx : options.containerSizeYpx); break
    default: result = num; break
  }
  return result
}

function pxToPercent(px: number, containerSizePx: number): number {
  return px * 100 / containerSizePx
}

function pxToRem(px: number): number {
  return px / BodyFontSize
}

function pxToEmOrN(px: number, sizePx: number): number {
  return px / sizePx
}

function percentToPx(percent: number, containerSizePx: number): number {
  return percent * containerSizePx / 100
}

function remToPx(rem: number): number {
  return Math.round(rem * BodyFontSize)
}

function emOrNToPx(em: number, sizePx: number): number {
  return Math.round(em * sizePx)
}
