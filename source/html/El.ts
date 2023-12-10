// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Align, ElCoords, ElKind, RxNode } from "../core/RxNode.js"
import { BaseDriver, equalElCoords, parseElCoords } from "../core/api.js"

// ElDriver

export class ElDriver<T = unknown, M = unknown, C = unknown> extends BaseDriver<El<T, M, C, void>> {
  public static readonly fragment = new ElDriver<any, any, any>(
    "fragment", false, el => el.kind = ElKind.Group)

  create(node: RxNode<El<T, M, C, void>>): El<T, M, C, void> {
    return new ElImpl<T, M, C, void>(node)
  }
}

// El

export interface El<T = any, M = any, C = any, R = void> {
  // System-managed properties
  readonly node: RxNode<El<T, M, C, R>>
  readonly isSection: boolean
  readonly isTable: boolean
  native: T

  // User-manageable properties
  model: M
  controller: C
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

export class ElImpl<T = any, M = any, C = any, R = any> implements El<T, M, C, R> {
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
    this._kind = ElKind.Row
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

  get isAuxiliary(): boolean { return this.kind > ElKind.Note } // Row, Group, Cursor
  get isSection(): boolean { return this.kind === ElKind.Section }
  get isTable(): boolean { return this.kind === ElKind.Table }

  get kind(): ElKind { return this._kind }
  set kind(value: ElKind) {
    if (value !== this._kind || this.node.stamp >= Number.MAX_SAFE_INTEGER - 1) {
      this.node.driver.applyKind(this, value)
      this._kind = value
    }
  }

  get area(): ElArea { return this._area }
  set area(value: ElArea) {
    const node = this.node
    const driver = node.driver
    if (!driver.isSeparator) {
      const owner = node.owner
      const ownerEl = owner.element
      const prevEl = node.slot!.prev?.instance.element as ElImpl
      const cursorPosition = prevEl?.cursorPosition ?? InitialCursorPosition
      const newCursorPosition = this.cursorPosition = owner.children.isStrict ? new CursorPosition(cursorPosition) : undefined
      const isCursorElement = driver instanceof CursorCommandDriver
      const coords = getEffectiveElCoords(!isCursorElement,
        value, ownerEl.maxColumnCount, ownerEl.maxRowCount,
        cursorPosition, newCursorPosition)
      if (!equalElCoords(coords, this._coords)) {
        driver.applyCoords(this, coords)
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
      this.node.driver.applyWidthGrowth(this, value)
      this._widthGrowth = value
    }
  }

  get minWidth(): string { return this._minWidth }
  set minWidth(value: string) {
    if (value !== this._minWidth) {
      this.node.driver.applyMinWidth(this, value)
      this._minWidth = value
    }
  }

  get maxWidth(): string { return this._maxWidth }
  set maxWidth(value: string) {
    if (value !== this._maxWidth) {
      this.node.driver.applyMaxWidth(this, value)
      this._maxWidth = value
    }
  }

  get heightGrowth(): number { return this._heightGrowth }
  set heightGrowth(value: number) {
    if (value !== this._heightGrowth) {
      this.node.driver.applyHeightGrowth(this, value)
      this._heightGrowth = value
    }
  }

  get minHeight(): string { return this._minHeight }
  set minHeight(value: string) {
    if (value !== this._minHeight) {
      this.node.driver.applyMinHeight(this, value)
      this._minHeight = value
    }
  }

  get maxHeight(): string { return this._maxHeight }
  set maxHeight(value: string) {
    if (value !== this._maxHeight) {
      this.node.driver.applyMaxHeight(this, value)
      this._maxHeight = value
    }
  }

  get contentAlignment(): Align { return this._contentAlignment }
  set contentAlignment(value: Align) {
    if (value !== this._contentAlignment) {
      this.node.driver.applyContentAlignment(this, value)
      this._contentAlignment = value
    }
  }

  get elementAlignment(): Align { return this._elementAlignment }
  set elementAlignment(value: Align) {
    if (value !== this._elementAlignment) {
      this.node.driver.applyElementAlignment(this, value)
      this._elementAlignment = value
    }
  }

  get contentWrapping(): boolean { return this._contentWrapping }
  set contentWrapping(value: boolean) {
    if (value !== this._contentWrapping) {
      this.node.driver.applyContentWrapping(this, value)
      this._contentWrapping = value
    }
  }

  get overlayVisible(): boolean | undefined { return this._overlayVisible }
  set overlayVisible(value: boolean | undefined) {
    if (value !== this._overlayVisible) {
      this.node.driver.applyOverlayVisible(this, value)
      this._overlayVisible = value
    }
  }

  useStyle(styleName: string, enabled?: boolean): void {
    this.node.driver.applyStyle(this, this._hasStyles, styleName, enabled)
    this._hasStyles = true
  }

  private rowBreak(): void {
    const node = this.node
    const prevEl = node.slot!.prev?.instance.element as ElImpl
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

export class CursorCommandDriver
  extends ElDriver<CursorCommand, unknown, void> {

  constructor() {
    super("cursor", false, el => el.kind = ElKind.Cursor)
  }

  assign(element: El<CursorCommand, unknown, void, void>): void {
    element.native = new CursorCommand()
    super.assign(element)
  }
}
