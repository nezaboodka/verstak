// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { RxNode, SimpleDelegate, BaseDriver } from "reactronic"
import { equalElCoords, parseElCoords } from "./ElUtils.js"

// ElDriver

export class ElDriver<T extends Element, M = unknown, C = unknown> extends BaseDriver<El<T, M, C, void>> {
  allocate(node: RxNode<El<T, M, C, void>>): El<T, M, C, void> {
    return new ElImpl<T, M, C, void>(node)
  }
}

// BaseEl

export interface BaseEl<T = any, M = any, C = any, R = void> {
  // System-managed properties
  readonly node: RxNode<El<T, M, C, R>>

  // User-manageable properties
  model: M
  controller: C
}

// El

export interface El<T = any, M = any, C = any, R = void> extends BaseEl<T, M, C, R> {
  // System-managed properties
  native: T

  // User-manageable properties
  kind: ElKind
  area: ElArea
  widthGrowth: number
  minWidth: string
  maxWidth: string
  heightGrowth: number
  minHeight: string
  maxHeight: string
  contentAlignment: Align
  elementAlignment: Align
  contentWrapping: boolean
  overlayVisible: boolean | undefined
  useStyle(styleName: string, enabled?: boolean): void
}

// Other

export enum ElKind {
  Section = 0,
  Table = 1,
  Note = 2,
  Group = 3,
  Part = 4,
  Cursor = 5,
  Native = 6,
}

export interface ElCoords {
  x1: number
  y1: number
  x2: number
  y2: number
}

export enum Align {
  Default   = 0b10000,
  ToBounds  = 0b00000,
  ToLeft    = 0b00001,
  ToCenterX = 0b00010,
  ToRight   = 0b00011,
  ToTop     = 0b00100,
  ToCenterY = 0b01000,
  ToBottom  = 0b01100,
  ToCenter  = ToCenterX + ToCenterY,
}

export interface ElasticSize {
  cells?: number            // 1 (table only)
  min?: string              // min-content
  max?: string              // min-content
  growth?: number           // 0
}

export interface TrackSize extends ElasticSize {
  track?: string | number   // <current>
}

export type ElArea = undefined | string | {
  cellsOverWidth?: number   // 1 (table only)
  cellsOverHeight?: number  // 1 (table only)
}

// ElImpl

export class ElImpl<T extends Element = any, M = any, C = any, R = any> implements El<T, M, C, R> {
  // System-managed properties
  readonly node: RxNode<El<T, M, C, R>>
  maxColumnCount: number
  maxRowCount: number
  cursorPosition?: CursorPosition
  native: T

  // User-defined properties
  model: M
  controller: C
  private _kind: ElKind
  private _area: ElArea
  private _coords: ElCoords
  private _widthGrowth: number
  private _minWidth: string
  private _maxWidth: string
  private _heightGrowth: number
  private _minHeight: string
  private _maxHeight: string
  private _contentAlignment: Align
  private _elementAlignment: Align
  private _contentWrapping: boolean
  private _overlayVisible: boolean | undefined
  private _hasStyles: boolean

  constructor(node: RxNode<El<T, M, C, R>>) {
    // System-managed properties
    this.node = node
    this.maxColumnCount = 0
    this.maxRowCount = 0
    this.cursorPosition = undefined
    this.native = undefined as any as T // hack
    // User-defined properties
    this.model = undefined as any
    this.controller = undefined as any as C // hack
    this._kind = ElKind.Part
    this._area = undefined
    this._coords = UndefinedElCoords
    this._widthGrowth = 0
    this._minWidth = ""
    this._maxWidth = ""
    this._heightGrowth = 0
    this._minHeight = ""
    this._maxHeight = ""
    this._contentAlignment = Align.Default
    this._elementAlignment = Align.Default
    this._contentWrapping = true
    this._overlayVisible = undefined
    this._hasStyles = false
  }

  prepareForUpdate(): void {
    this._area = undefined // reset
    this._hasStyles = false // reset
  }

  get isSection(): boolean { return this.kind === ElKind.Section }
  get isTable(): boolean { return this.kind === ElKind.Table }
  get isAuxiliary(): boolean { return this.kind > ElKind.Note } // Part, Group, Cursor

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
    if (!driver.isPartitionSeparator) {
      const owner = node.owner as RxNode<ElImpl>
      const ownerEl = owner.element
      const prevEl = node.seat!.prev?.instance.element as ElImpl
      const cursorPosition = prevEl?.cursorPosition ?? InitialCursorPosition
      const newCursorPosition = this.cursorPosition = owner.children.isStrict ? new CursorPosition(cursorPosition) : undefined
      const isCursorElement = driver instanceof CursorCommandDriver
      const coords = getEffectiveElCoords(!isCursorElement,
        value, ownerEl.maxColumnCount, ownerEl.maxRowCount,
        cursorPosition, newCursorPosition)
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

  get widthGrowth(): number { return this._widthGrowth }
  set widthGrowth(value: number) {
    if (value !== this._widthGrowth) {
      Apply.widthGrowth(this, value)
      this._widthGrowth = value
    }
  }

  get minWidth(): string { return this._minWidth }
  set minWidth(value: string) {
    if (value !== this._minWidth) {
      Apply.minWidth(this, value)
      this._minWidth = value
    }
  }

  get maxWidth(): string { return this._maxWidth }
  set maxWidth(value: string) {
    if (value !== this._maxWidth) {
      Apply.applyMaxWidth(this, value)
      this._maxWidth = value
    }
  }

  get heightGrowth(): number { return this._heightGrowth }
  set heightGrowth(value: number) {
    if (value !== this._heightGrowth) {
      Apply.heightGrowth(this, value)
      this._heightGrowth = value
    }
  }

  get minHeight(): string { return this._minHeight }
  set minHeight(value: string) {
    if (value !== this._minHeight) {
      Apply.minHeight(this, value)
      this._minHeight = value
    }
  }

  get maxHeight(): string { return this._maxHeight }
  set maxHeight(value: string) {
    if (value !== this._maxHeight) {
      Apply.maxHeight(this, value)
      this._maxHeight = value
    }
  }

  get contentAlignment(): Align { return this._contentAlignment }
  set contentAlignment(value: Align) {
    if (value !== this._contentAlignment) {
      Apply.contentAlignment(this, value)
      this._contentAlignment = value
    }
  }

  get elementAlignment(): Align { return this._elementAlignment }
  set elementAlignment(value: Align) {
    if (value !== this._elementAlignment) {
      Apply.elementAlignment(this, value)
      this._elementAlignment = value
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

  useStyle(styleName: string, enabled?: boolean): void {
    Apply.style(this, this._hasStyles, styleName, enabled)
    this._hasStyles = true
  }

  private rowBreak(): void {
    const node = this.node
    const prevEl = node.seat!.prev?.instance.element as ElImpl
    const cursorPosition = prevEl?.cursorPosition ?? InitialCursorPosition
    const newCursorPosition = this.cursorPosition = new CursorPosition(cursorPosition)
    newCursorPosition.x = 1
    newCursorPosition.y = newCursorPosition.runningMaxY + 1
  }
}

// CursorPosition

class CursorPosition {
  x: number
  y: number
  runningMaxX: number
  runningMaxY: number
  flags: CursorFlags

  constructor(prev: CursorPosition) {
    this.x = prev.x
    this.y = prev.y
    this.runningMaxX = prev.runningMaxX
    this.runningMaxY = prev.runningMaxY
    this.flags = prev.flags & ~CursorFlags.OwnCursorPosition
  }
}

enum CursorFlags {
  None = 0,
  OwnCursorPosition = 1,
  UsesRunningColumnCount = 2,
  UsesRunningRowCount = 4,
}

const UndefinedElCoords = Object.freeze({ x1: 0, y1: 0, x2: 0, y2: 0 })
const InitialCursorPosition: CursorPosition = Object.freeze(new CursorPosition({ x: 1, y: 1, runningMaxX: 0, runningMaxY: 0, flags: CursorFlags.None }))

function getEffectiveElCoords(
  isRegularElement: boolean, area: ElArea, maxX: number, maxY: number,
  cursorPosition: CursorPosition, newCursorPosition?: CursorPosition): ElCoords {
  let result: ElCoords // this comment just prevents syntax highlighting in VS code
  if (typeof(area) === "string") {
    // Absolute positioning
    result = parseElCoords(area, { x1: 0, y1: 0, x2: 0, y2: 0 })
    absolutizeElCoords(result, cursorPosition.x, cursorPosition.y,
      maxX || Infinity, maxY || Infinity, result)
    if (newCursorPosition) {
      newCursorPosition.x = isRegularElement ? result.x2 + 1 : result.x1
      newCursorPosition.y = result.y1
      newCursorPosition.flags = CursorFlags.OwnCursorPosition
    }
  }
  else if (newCursorPosition) {
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
    const runningX = maxX !== 0 ? maxX : cursorPosition.runningMaxX
    const runningY = maxY !== 0 ? maxY : cursorPosition.runningMaxY
    result = { x1: 0, y1: 0, x2: 0, y2: 0 }
    if (dx === 0 && isRegularElement) {
      dx = runningX || 1
      newCursorPosition.flags = CursorFlags.UsesRunningColumnCount
    }
    if (dx >= 0) {
      if (isRegularElement) {
        result.x1 = cursorPosition.x
        result.x2 = absolutizePosition(result.x1 + dx - 1, 0, maxX || Infinity)
        newCursorPosition.x = result.x2 + 1
      }
      else {
        result.x1 = result.x2 = cursorPosition.x + dx
        newCursorPosition.x = result.x2
      }
    }
    else {
      if (isRegularElement) {
        result.x1 = Math.max(cursorPosition.x + dx, 1)
        result.x2 = cursorPosition.x
        newCursorPosition.x = result.x2 + 1
      }
      else {
        result.x1 = result.x2 = cursorPosition.x + dx
        newCursorPosition.x = result.x2
      }
    }
    if (dy === 0 && isRegularElement) {
      dy = runningY || 1
      newCursorPosition.flags |= CursorFlags.UsesRunningRowCount
    }
    if (dy >= 0) {
      if (isRegularElement) {
        result.y1 = cursorPosition.y
        result.y2 = absolutizePosition(result.y1 + dy - 1, 0, maxY || Infinity)
        if (result.y2 > newCursorPosition.runningMaxY)
          newCursorPosition.runningMaxY = result.y2
      }
      else
        result.y1 = result.y2 = cursorPosition.y + dy
    }
    else {
      if (isRegularElement) {
        result.y1 = Math.max(cursorPosition.y + dy, 1)
        result.y2 = cursorPosition.y
      }
      else
        result.y1 = result.y2 = cursorPosition.y + dy
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

export class CursorCommandDriver extends ElDriver<Element, unknown, void> {
  constructor() {
    super("cursor", false, el => el.kind = ElKind.Cursor)
  }
}

export class Apply {
  static kind<T extends Element>(element: El<T, any, any, any>, value: ElKind): void {
    const kind = Constants.layouts[value]
    kind && element.native.setAttribute(Constants.kindAttrName, kind)
    VerstakDriversByLayout[value](element as any)
  }

  static coords<T extends Element>(element: El<T, any, any, any>, value: ElCoords | undefined): void {
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

  static widthGrowth<T extends Element>(element: El<T, any, any, any>, value: number): void {
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

  static minWidth<T extends Element>(element: El<T, any, any, any>, value: string): void {
    if (element.native instanceof HTMLElement)
      element.native.style.minWidth = `${value}`
  }

  static applyMaxWidth<T extends Element>(element: El<T, any, any, any>, value: string): void {
    if (element.native instanceof HTMLElement)
      element.native.style.maxWidth = `${value}`
  }

  static heightGrowth<T extends Element>(element: El<T, any, any, any>, value: number): void {
    const bNode = element.node
    const driver = bNode.driver
    if (driver.isPartitionSeparator) {
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
      if (hostDriver.isPartitionSeparator) {
        const host = bNode.host.seat!.instance as RxNode<El<T, any, any, any>>
        Apply.elementAlignment(element, Align.ToBounds)
        Apply.heightGrowth(host.element, value)
      }
    }
  }

  static minHeight<T extends Element>(element: El<T, any, any, any>, value: string): void {
    if (element.native instanceof HTMLElement)
      element.native.style.minHeight = `${value}`
  }

  static maxHeight<T extends Element>(element: El<T, any, any, any>, value: string): void {
    if (element.native instanceof HTMLElement)
      element.native.style.maxHeight = `${value}`
  }

  static contentAlignment<T extends Element>(element: El<T, any, any, any>, value: Align): void {
    if (element.native instanceof HTMLElement) {
      const s = element.native.style
      if ((value & Align.Default) === 0) { // if not auto mode
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

  static elementAlignment<T extends Element>(element: El<T, any, any, any>, value: Align): void {
    if (element.native instanceof HTMLElement) {
      const s = element.native.style
      if ((value & Align.Default) === 0) { // if not auto mode
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

  static contentWrapping<T extends Element>(element: El<T, any, any, any>, value: boolean): void {
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

  static overlayVisible<T extends Element>(element: El<T, any, any, any>, value: boolean | undefined): void {
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

  static style<T extends Element>(element: El<T, any, any, any>, secondary: boolean, styleName: string, enabled?: boolean): void {
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
  // element: "элемент",
  // partition: "раздел",
  // layouts: ["цепочка", "таблица", "" /* раздел */, "группа", "заметка"],
  // keyAttrName: "ключ",
  // kindAttrName: "вид",
  element: "element",
  partition: "partition",
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
