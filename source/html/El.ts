// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { RxNode, SimpleDelegate, BaseDriver } from "reactronic"
import { equalElCoords, parseElCoords } from "./ElUtils.js"

// ElDriver

export class ElDriver<T extends Element, M = unknown> extends BaseDriver<El<T, M>> {
  allocate(node: RxNode<El<T, M>>): El<T, M> {
    return new ElImpl<T, M>(node)
  }
}

// El

export type El<T = any, M = any> = {
  // System-managed properties
  readonly node: RxNode<El<T, M>>
  native: T

  // User-manageable properties
  model: M
  kind: ElKind
  area: ElArea
  width: Range
  widthJustMin: string
  widthJustGrowth: number
  height: Range
  heightJustMin: string
  heightJustGrowth: number
  contentAlignment: Align
  boundsAlignment: Align
  contentWrapping: boolean
  overlayVisible: boolean | undefined
  readonly style: CSSStyleDeclaration
  useStylingPreset(stylingPresetName: string, enabled?: boolean): void
}

// Other

export enum ElKind {
  section = 0,
  table = 1,
  note = 2,
  group = 3,
  part = 4,
  cursor = 5,
  native = 6,
}

export type ElCoords = {
  x1: number
  y1: number
  x2: number
  y2: number
}

export enum Align {
  default = 0b10000,
  stretch = 0b00000,
  left    = 0b00001,
  centerX = 0b00010,
  right   = 0b00011,
  top     = 0b00100,
  centerY = 0b01000,
  bottom  = 0b01100,
  center  = centerX + centerY,
}

export type Range = {
  readonly min?: string     // min-content
  readonly max?: string     // min-content
  readonly growth?: number  // 0
}

export type MarkedRange = Range & {
  readonly marker?: string
}

export type ElArea = undefined | string | {
  cellsOverWidth?: number   // 1 (table only)
  cellsOverHeight?: number  // 1 (table only)
}

// ElImpl

export class ElImpl<T extends Element = any, M = any> implements El<T, M> {
  // System-managed properties
  readonly node: RxNode<El<T, M>>
  maxColumnCount: number
  maxRowCount: number
  layoutInfo?: ElLayoutInfo
  native: T

  // User-defined properties
  model: M
  private _kind: ElKind
  private _area: ElArea
  private _coords: ElCoords
  private _width: Range
  private _height: Range
  private _contentAlignment: Align
  private _boundsAlignment: Align
  private _contentWrapping: boolean
  private _overlayVisible: boolean | undefined
  private _hasStylingPresets: boolean

  constructor(node: RxNode<El<T, M>>) {
    // System-managed properties
    this.node = node
    this.maxColumnCount = 0
    this.maxRowCount = 0
    this.layoutInfo = undefined
    this.native = undefined as any as T // hack
    // User-defined properties
    this.model = undefined as any
    this._kind = ElKind.part
    this._area = undefined
    this._coords = UndefinedElCoords
    this._width = { min: "", max: "", growth: 0 }
    this._height = { min: "", max: "", growth: 0 }
    this._contentAlignment = Align.default
    this._boundsAlignment = Align.default
    this._contentWrapping = true
    this._overlayVisible = undefined
    this._hasStylingPresets = false
  }

  prepareForUpdate(): void {
    this._area = undefined // reset
    this._hasStylingPresets = false // reset
  }

  get isSection(): boolean { return this.kind === ElKind.section }
  get isTable(): boolean { return this.kind === ElKind.table }
  get isAuxiliary(): boolean { return this.kind > ElKind.note } // Part, Group, Cursor

  get kind(): ElKind { return this._kind }
  set kind(value: ElKind) {
    if (value !== this._kind || this.node.stamp >= Number.MAX_SAFE_INTEGER - 1) {
      if (this.native !== undefined)
        Apply.kind(this, value)
      this._kind = value
    }
  }

  get area(): ElArea { return this._area }
  set area(value: ElArea) {
    const node = this.node
    const driver = node.driver
    if (!driver.isPartition) {
      const owner = node.owner as RxNode<ElImpl>
      const ownerEl = owner.element
      const prevEl = node.seat!.prev?.instance.element as ElImpl
      const prevElLayoutInfo = prevEl?.layoutInfo ?? InitialElLayoutInfo
      const layoutInfo = this.layoutInfo = owner.children.isStrict ? new ElLayoutInfo(prevElLayoutInfo) : undefined
      const isCursorElement = driver instanceof CursorCommandDriver
      const coords = getElCoordsAndAdjustLayoutInfo(!isCursorElement,
        value, ownerEl.maxColumnCount, ownerEl.maxRowCount,
        prevElLayoutInfo, layoutInfo)
      if (!equalElCoords(coords, this._coords)) {
        if (this.native !== undefined)
          Apply.coords(this, coords)
        this._coords = coords
      }
      this._area = value ?? { }
    }
    else
      this.rowBreak()
  }

  get width(): Range { return this._width }
  set width(value: Range) {
    const w = this._width
    let updated = false
    if (value.min !== w.min) {
      Apply.minWidth(this, value.min ?? "")
      updated = true
    }
    if (value.max !== w.max) {
      Apply.maxWidth(this, value.max ?? "")
      updated = true
    }
    if (value.growth !== w.growth) {
      Apply.widthGrowth(this, value.growth ?? 0)
      updated = true
    }
    if (updated)
      this._width = value
  }

  get widthJustMin(): string { return this._width.min ?? "" }
  set widthJustMin(value: string) { this.width = { min: value } }

  get widthJustGrowth(): number { return this._width.growth ?? 0 }
  set widthJustGrowth(value: number) { this.width = { growth: value } }

  get height(): Range { return this._height }
  set height(value: Range) {
    const w = this._height
    let updated = false
    if (value.min !== w.min) {
      Apply.minHeight(this, value.min ?? "")
      updated = true
    }
    if (value.max !== w.max) {
      Apply.maxHeight(this, value.max ?? "")
      updated = true
    }
    if (value.growth !== w.growth) {
      Apply.heightGrowth(this, value.growth ?? 0)
      updated = true
    }
    if (updated)
      this._height = value
  }

  get heightJustMin(): string { return this._height.min ?? "" }
  set heightJustMin(value: string) { this.height = { min: value } }

  get heightJustGrowth(): number { return this._height.growth ?? 0 }
  set heightJustGrowth(value: number) { this.height = { growth: value } }

  get contentAlignment(): Align { return this._contentAlignment }
  set contentAlignment(value: Align) {
    if (value !== this._contentAlignment) {
      Apply.contentAlignment(this, value)
      this._contentAlignment = value
    }
  }

  get boundsAlignment(): Align { return this._boundsAlignment }
  set boundsAlignment(value: Align) {
    if (value !== this._boundsAlignment) {
      Apply.boundsAlignment(this, value)
      this._boundsAlignment = value
    }
  }

  get contentWrapping(): boolean { return this._contentWrapping }
  set contentWrapping(value: boolean) {
    if (value !== this._contentWrapping) {
      Apply.contentWrapping(this, value)
      this._contentWrapping = value
    }
  }

  get overlayVisible(): boolean | undefined { return this._overlayVisible }
  set overlayVisible(value: boolean | undefined) {
    if (value !== this._overlayVisible) {
      Apply.overlayVisible(this, value)
      this._overlayVisible = value
    }
  }

  get style(): CSSStyleDeclaration { return (this.native as any).style }

  useStylingPreset(stylingPresetName: string, enabled?: boolean): void {
    Apply.stylingPreset(this, this._hasStylingPresets, stylingPresetName, enabled)
    this._hasStylingPresets = true
  }

  private rowBreak(): void {
    const node = this.node
    const prevEl = node.seat!.prev?.instance.element as ElImpl
    const prevElLayoutInfo = prevEl?.layoutInfo ?? InitialElLayoutInfo
    const layoutInfo = this.layoutInfo = new ElLayoutInfo(prevElLayoutInfo)
    layoutInfo.x = 1
    layoutInfo.y = layoutInfo.runningMaxY + 1
  }
}

// ElLayoutInfo

class ElLayoutInfo {
  x: number
  y: number
  runningMaxX: number
  runningMaxY: number
  flags: ElLayoutInfoFlags

  constructor(prev: ElLayoutInfo) {
    this.x = prev.x
    this.y = prev.y
    this.runningMaxX = prev.runningMaxX
    this.runningMaxY = prev.runningMaxY
    this.flags = prev.flags & ~ElLayoutInfoFlags.ownCursorPosition
  }
}

enum ElLayoutInfoFlags {
  none = 0,
  ownCursorPosition = 1,
  usesRunningColumnCount = 2,
  usesRunningRowCount = 4,
}

const UndefinedElCoords = Object.freeze({ x1: 0, y1: 0, x2: 0, y2: 0 })
const InitialElLayoutInfo: ElLayoutInfo = Object.freeze(new ElLayoutInfo({ x: 1, y: 1, runningMaxX: 0, runningMaxY: 0, flags: ElLayoutInfoFlags.none }))

function getElCoordsAndAdjustLayoutInfo(
  isRegularElement: boolean, area: ElArea, maxX: number, maxY: number,
  prevElLayoutInfo: ElLayoutInfo, layoutInfo?: ElLayoutInfo): ElCoords {
  let result: ElCoords // this comment just prevents syntax highlighting in VS code
  if (typeof(area) === "string") {
    // Absolute positioning
    result = parseElCoords(area, { x1: 0, y1: 0, x2: 0, y2: 0 })
    absolutizeElCoords(result, prevElLayoutInfo.x, prevElLayoutInfo.y,
      maxX || Infinity, maxY || Infinity, result)
    if (layoutInfo) {
      layoutInfo.x = isRegularElement ? result.x2 + 1 : result.x1
      layoutInfo.y = result.y1
      layoutInfo.flags = ElLayoutInfoFlags.ownCursorPosition
    }
  }
  else if (layoutInfo) {
    // Relative positioning
    let dx: number
    let dy: number // this comment just prevents syntax highlighting in VS code
    if (area) {
      dx = area.cellsOverWidth ?? 1
      dy = area.cellsOverHeight ?? 1
    }
    else // area === undefined
      dx = dy = 1
    // Arrange
    const runningX = maxX !== 0 ? maxX : prevElLayoutInfo.runningMaxX
    const runningY = maxY !== 0 ? maxY : prevElLayoutInfo.runningMaxY
    result = { x1: 0, y1: 0, x2: 0, y2: 0 }
    if (dx === 0 && isRegularElement) {
      dx = runningX || 1
      layoutInfo.flags = ElLayoutInfoFlags.usesRunningColumnCount
    }
    if (dx >= 0) {
      if (isRegularElement) {
        result.x1 = prevElLayoutInfo.x
        result.x2 = absolutizePosition(result.x1 + dx - 1, 0, maxX || Infinity)
        layoutInfo.x = result.x2 + 1
      }
      else {
        result.x1 = result.x2 = prevElLayoutInfo.x + dx
        layoutInfo.x = result.x2
      }
    }
    else {
      if (isRegularElement) {
        result.x1 = Math.max(prevElLayoutInfo.x + dx, 1)
        result.x2 = prevElLayoutInfo.x
        layoutInfo.x = result.x2 + 1
      }
      else {
        result.x1 = result.x2 = prevElLayoutInfo.x + dx
        layoutInfo.x = result.x2
      }
    }
    if (dy === 0 && isRegularElement) {
      dy = runningY || 1
      layoutInfo.flags |= ElLayoutInfoFlags.usesRunningRowCount
    }
    if (dy >= 0) {
      if (isRegularElement) {
        result.y1 = prevElLayoutInfo.y
        result.y2 = absolutizePosition(result.y1 + dy - 1, 0, maxY || Infinity)
        if (result.y2 > layoutInfo.runningMaxY)
          layoutInfo.runningMaxY = result.y2
      }
      else
        result.y1 = result.y2 = prevElLayoutInfo.y + dy
    }
    else {
      if (isRegularElement) {
        result.y1 = Math.max(prevElLayoutInfo.y + dy, 1)
        result.y2 = prevElLayoutInfo.y
      }
      else
        result.y1 = result.y2 = prevElLayoutInfo.y + dy
    }
  }
  else
    throw new Error("relative layout requires sequential children")
  return result
}

function absolutizeElCoords(area: ElCoords,
  cursorX: number, cursorY: number,
  maxWidth: number, maxHeight: number,
  result: ElCoords): ElCoords {
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

// CursorCommandDriver

export class CursorCommand {
  absolute?: string
  columnShift?: number
  rowShift?: number
}

export class CursorCommandDriver extends ElDriver<Element, unknown> {
  constructor() {
    super("cursor", false, el => el.kind = ElKind.cursor)
  }
}

export class Apply {
  static kind<T extends Element>(element: El<T, any>, value: ElKind): void {
    const kind = Constants.layouts[value]
    kind && element.native.setAttribute(Constants.kindAttrName, kind)
    VerstakDriversByLayout[value](element as any)
  }

  static coords<T extends Element>(element: El<T, any>, value: ElCoords | undefined): void {
    if (element.native instanceof HTMLElement) {
      const s = element.native.style
      if (value) {
        const x1 = value.x1 || 1
        const y1 = value.y1 || 1
        const x2 = value.x2 || x1
        const y2 = value.y2 || y1
        s.gridArea = `${y1} / ${x1} / span ${y2 - y1 + 1} / span ${x2 - x1 + 1}`
      }
      else
        s.gridArea = ""
    }
  }

  static widthGrowth<T extends Element>(element: El<T, any>, value: number): void {
    if (element.native instanceof HTMLElement) {
      const s = element.native.style
      if (value > 0) {
        s.flexGrow = `${value}`
        s.flexBasis = "0"
      }
      else {
        s.flexGrow = ""
        s.flexBasis = ""
      }
    }
  }

  static minWidth<T extends Element>(element: El<T, any>, value: string): void {
    if (element.native instanceof HTMLElement)
      element.native.style.minWidth = `${value}`
  }

  static maxWidth<T extends Element>(element: El<T, any>, value: string): void {
    if (element.native instanceof HTMLElement)
      element.native.style.maxWidth = `${value}`
  }

  static heightGrowth<T extends Element>(element: El<T, any>, value: number): void {
    const bNode = element.node
    const driver = bNode.driver
    if (driver.isPartition) {
      if (element.native instanceof HTMLElement) {
        const s = element.native.style
        if (value > 0)
          s.flexGrow = `${value}`
        else
          s.flexGrow = ""
      }
    }
    else {
      const hostDriver = bNode.host.driver
      if (hostDriver.isPartition) {
        const host = bNode.host.seat!.instance as RxNode<El<T, any>>
        Apply.boundsAlignment(element, Align.stretch)
        Apply.heightGrowth(host.element, value)
      }
    }
  }

  static minHeight<T extends Element>(element: El<T, any>, value: string): void {
    if (element.native instanceof HTMLElement)
      element.native.style.minHeight = `${value}`
  }

  static maxHeight<T extends Element>(element: El<T, any>, value: string): void {
    if (element.native instanceof HTMLElement)
      element.native.style.maxHeight = `${value}`
  }

  static contentAlignment<T extends Element>(element: El<T, any>, value: Align): void {
    if (element.native instanceof HTMLElement) {
      const s = element.native.style
      if ((value & Align.default) === 0) { // if not auto mode
        const v = AlignToCss[(value >> 2) & 0b11]
        const h = AlignToCss[value & 0b11]
        const t = TextAlignCss[value & 0b11]
        s.justifyContent = v
        s.alignItems = h
        s.textAlign = t
      }
      else
        s.justifyContent = s.alignContent = s.textAlign = ""
    }
  }

  static boundsAlignment<T extends Element>(element: El<T, any>, value: Align): void {
    if (element.native instanceof HTMLElement) {
      const s = element.native.style
      if ((value & Align.default) === 0) { // if not auto mode
        const v = AlignToCss[(value >> 2) & 0b11]
        const h = AlignToCss[value & 0b11]
        s.alignSelf = v
        s.justifySelf = h
      }
      // else if (heightGrowth > 0) {
      //   s.alignSelf = AlignToCss[Align.Stretch]
      // }
      else
        s.alignSelf = s.justifySelf = ""
    }
  }

  static contentWrapping<T extends Element>(element: El<T, any>, value: boolean): void {
    if (element.native instanceof HTMLElement) {
      const s = element.native.style
      if (value) {
        s.flexFlow = "wrap"
        s.overflow = ""
        s.textOverflow = ""
        s.whiteSpace = ""
      }
      else {
        s.flexFlow = ""
        s.overflow = "hidden"
        s.textOverflow = "ellipsis"
        s.whiteSpace = "nowrap"
      }
    }
  }

  static overlayVisible<T extends Element>(element: El<T, any>, value: boolean | undefined): void {
    const e = element.native
    if (e instanceof HTMLElement) {
      const s = e.style
      const host = RxNode.findMatchingHost<El, El>(element.node, n =>
        n.element.native instanceof HTMLElement || n.element.native instanceof SVGElement)
      const nativeHost = host?.element.native
      if (value === true) {
        const doc = document.body
        const rect = nativeHost.getBoundingClientRect()
        if (doc.offsetWidth - rect.left > rect.right) // rightward
          s.left = "0", s.right = ""
        else // leftward
          s.left = "", s.right = "0"
        if (doc.clientHeight - rect.top > rect.bottom) // downward
          s.top = "100%", s.bottom = ""
        else // upward
          s.top = "", s.bottom = "100%"
        s.display = ""
        s.position = "absolute"
        s.minWidth = "100%"
        s.boxSizing = "border-box"
        nativeHost.style.position = "relative"
      }
      else {
        nativeHost.style.position = ""
        if (value === false)
          s.display = "none"
        else // overlayVisible === undefined
          s.position = s.display = s.left = s.right = s.top = s.bottom = "" // clear
      }
    }
  }

  static stylingPreset<T extends Element>(element: El<T, any>, secondary: boolean, styleName: string, enabled?: boolean): void {
    const native = element.native
    enabled ??= true
    if (secondary)
      native.classList.toggle(styleName, enabled)
    else
      native.className = enabled ? styleName : ""
  }

  // static findEffectiveHtmlElementHost(node: RxNode): RxNode<El<HTMLElement | SVGElement>> {
  //   let p = node.host
  //   while (p.seat!.instance.element.native instanceof HTMLElement === false &&
  //     p.seat!.instance.element.native instanceof SVGElement === false && p !== node)
  //     p = p.host
  //   return p.seat!.instance as RxNode<El<HTMLElement | SVGElement>>
  // }

  // static findPrevSiblingHtmlElement(seat: MergedItem<RxNode>): MergedItem<RxNode<El<HTMLElement | SVGElement>>> | undefined {
  //   let p = seat.prev
  //   while (p && !(p.instance.element.native instanceof HTMLElement) && !(p.instance.element.native instanceof SVGElement))
  //     p = p.prev
  //   return p
  // }
}

// Constants

export const Constants = {
  // element: "эл",
  // partition: "разд",
  // layouts: ["цепочка", "таблица", "" /* раздел */, "группа", "заметка"],
  // keyAttrName: "ключ",
  // kindAttrName: "вид",
  element: "el",
  partition: "part",
  group: "group",
  layouts: ["section", "table", "note", "group", "" /* partition */, "" /* cursor */],
  keyAttrName: "key",
  kindAttrName: "kind",
}

const VerstakDriversByLayout: Array<SimpleDelegate<El<HTMLElement>>> = [
  el => { // section
    const owner = el.node.owner.element as ElImpl
    const s = el.native.style
    s.display = "flex"
    s.flexDirection = "column"
    s.alignSelf = owner.isTable ? "stretch" : "center"
    s.textAlign = "initial"
    s.flexShrink = "1"
    s.minWidth = "0"
  },
  el => { // table
    const owner = el.node.owner.element as ElImpl
    const s = el.native.style
    s.alignSelf = owner.isTable ? "stretch" : "center"
    s.display = "grid"
    s.flexBasis = "0"
    s.gridAutoRows = "minmax(min-content, 1fr)"
    s.gridAutoColumns = "minmax(min-content, 1fr)"
    s.textAlign = "initial"
  },
  el => { // note
    const owner = el.node.owner.element as ElImpl
    const s = el.native.style
    s.alignSelf = owner.isTable ? "stretch" : "center"
    s.display = "inline-grid"
    s.flexShrink = "1"
  },
  el => { // group
    const s = el.native.style
    s.display = "contents"
  },
  el => { // partition
    const owner = el.node.owner.element as ElImpl
    const s = el.native.style
    s.display = owner.isTable ? "contents" : "flex"
    s.flexDirection = "row"
  },
  el => { // cursor
  },
  el => { // native
  },
  // undefined // cursor
]

const AlignToCss = ["stretch", "start", "center", "end"]
const TextAlignCss = ["justify", "left", "center", "right"]
