// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { RxNode, SimpleDelegate, BaseDriver, MergedItem, Transaction, obs, ObservableObject } from "reactronic"
import { equalElCoords, parseElCoords } from "./ElUtils.js"

// El

export type El<T = any, M = any> = {
  // System-managed properties
  readonly node: RxNode<El<T, M>>
  readonly index: number
  native: T

  // User-manageable properties
  model: M
  kind: ElKind
  area: ElArea
  width: Range
  height: Range
  alignment: Alignment | undefined
  alignmentInside: Alignment | undefined
  verticalAlignment: VerticalAlignment | undefined
  verticalAlignmentInside: VerticalAlignment | undefined
  stretchingStrengthX: number | undefined
  stretchingStrengthY: number | undefined
  contentWrapping: boolean
  overlayVisible: boolean | undefined

  sealed: Direction | undefined
  splitView: Direction | undefined
  widthPx: { minPx: number, maxPx: number }
  heightPx: { minPx: number, maxPx: number }
  partitionSizeInSplitViewPx: number

  readonly style: CSSStyleDeclaration
  useStylingPreset(stylingPresetName: string, enabled?: boolean): void
}

export enum ElKind {
  section = 0,
  table = 1,
  note = 2,
  group = 3,
  part = 4,
  splitter = 5,
  cursor = 6,
  native = 7,
}

export type ElCoords = {
  x1: number
  y1: number
  x2: number
  y2: number
}

export enum Alignment {
  left         = 0,
  center       = 1,
  right        = 2,
  stretch      = 3,
}

export enum VerticalAlignment {
  top          = 0,
  center       = 1,
  bottom       = 2,
  stretch      = 3,
}

export type Range = {
  readonly min?: string     // min-content
  readonly max?: string     // min-content
  readonly preferred?: string
}

export type MarkedRange = Range & {
  readonly marker?: string
}

export type ElArea = undefined | string | {
  cellsOverWidth?: number   // 1 (table only)
  cellsOverHeight?: number  // 1 (table only)
}

export enum Direction {
  horizontal = 0,
  vertical = 1,
}

class Size extends ObservableObject {
  raw: Range
  minPx: number
  maxPx: number
  preferredUsed: boolean

  constructor() {
    super()
    this.raw = { min: "", max: "" }
    this.minPx = 0
    this.maxPx = Number.POSITIVE_INFINITY
    this.preferredUsed = false
  }
}

// ElDriver

export class ElDriver<T extends Element, M = unknown> extends BaseDriver<El<T, M>> {
  allocate(node: RxNode<El<T, M>>): El<T, M> {
    return new ElImpl<T, M>(node)
  }
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
  private _width: Size
  private _height: Size
  private _alignment: Alignment | undefined
  private _verticalAlignment: VerticalAlignment | undefined
  private _alignmentInside: Alignment | undefined
  private _verticalAlignmentInside: VerticalAlignment | undefined
  private _stretchingStrengthX: number | undefined
  private _stretchingStrengthY: number | undefined
  private _contentWrapping: boolean
  private _overlayVisible: boolean | undefined
  private _sealed: Direction | undefined
  private _splitView: Direction | undefined
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
    this._width = Transaction.separate(() => new Size())
    this._height = Transaction.separate(() => new Size())
    this._alignment = undefined
    this._verticalAlignment = undefined
    this._alignmentInside = undefined
    this._verticalAlignmentInside = undefined
    this._stretchingStrengthX = undefined
    this._stretchingStrengthY = undefined
    this._contentWrapping = true
    this._overlayVisible = undefined
    this._sealed = undefined
    this._splitView = undefined
    this._hasStylingPresets = false
  }

  prepareForUpdate(): void {
    this._area = undefined // reset
    this._hasStylingPresets = false // reset
  }

  get index(): number { return this.node.seat!.index }
  get isSection(): boolean { return this.kind === ElKind.section }
  get isTable(): boolean { return this.kind === ElKind.table }
  get isAuxiliary(): boolean { return this.kind > ElKind.note } // Part, Group, Cursor

  get kind(): ElKind { return this._kind }
  set kind(value: ElKind) {
    if (value !== this._kind || this.node.stamp >= Number.MAX_SAFE_INTEGER - 1) {
      if (this.native !== undefined)
        ElImpl.applyKind(this, value)
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
          ElImpl.applyCoords(this, coords)
        this._coords = coords
      }
      this._area = value ?? {}
    }
    else
      this.rowBreak()
  }

  get width(): Range { return this._width.raw }
  set width(value: Range) {
    const w = this._width.raw
    if (value.min !== w.min || value.max !== w.max) {
      ElImpl.applyWidth(this, value)
      this._width.raw = value
      this._width.preferredUsed = false
    }
  }

  get widthPx(): { minPx: number, maxPx: number } { return this._width }
  set widthPx(value: { minPx: number, maxPx: number }) {
    const w = this._width
    if (value.minPx !== w.minPx)
      this._width.minPx = value.minPx
    if (value.maxPx !== w.maxPx)
      this._width.maxPx = value.maxPx
  }

  get preferredWidthUsed(): boolean {
    return this._width.preferredUsed
  }
  set preferredWidthUsed(value: boolean) {
    this._width.preferredUsed = value
  }

  get height(): Range { return this._height.raw }
  set height(value: Range) {
    const h = this._height.raw
    if (value.min !== h.min || value.max !== h.max) {
      ElImpl.applyHeight(this, value)
      this._height.raw = value
      this._height.preferredUsed = false
    }
  }

  get heightPx(): { minPx: number, maxPx: number } { return this._height }
  set heightPx(value: { minPx: number, maxPx: number }) {
    const w = this._height
    if (value.minPx !== w.minPx)
      this._height.minPx = value.minPx
    if (value.maxPx !== w.maxPx)
      this._height.maxPx = value.maxPx
  }

  get preferredHeightUsed(): boolean {
    return this._height.preferredUsed
  }
  set preferredHeightUsed(value: boolean) {
    this._height.preferredUsed = value
  }

  get alignment(): Alignment | undefined { return this._alignment }
  set alignment(value: Alignment | undefined) {
    const existing = this._alignment
    if (value !== existing) {
      ElImpl.applyAlignment(this, existing, value,
        this._alignmentInside, this._alignmentInside,
        this._stretchingStrengthX)
      this._alignment = value
    }
  }

  get verticalAlignment(): VerticalAlignment | undefined { return this._verticalAlignment }
  set verticalAlignment(value: VerticalAlignment | undefined) {
    const existing = this._verticalAlignment
    if (value !== existing) {
      ElImpl.applyVerticalAlignment(this, existing, value,
        this._verticalAlignmentInside, this._verticalAlignmentInside,
        this._stretchingStrengthY)
      this._verticalAlignment = value
    }
  }

  get alignmentInside(): Alignment | undefined { return this._alignmentInside }
  set alignmentInside(value: Alignment | undefined) {
    const existing = this._alignmentInside
    if (value !== existing) {
      ElImpl.applyAlignment(this, this._alignment, this._alignment,
        existing, value, this._stretchingStrengthX)
      this._alignmentInside = value
    }
  }

  get verticalAlignmentInside(): VerticalAlignment | undefined { return this._verticalAlignmentInside }
  set verticalAlignmentInside(value: VerticalAlignment | undefined) {
    const existing = this._verticalAlignmentInside
    if (value !== existing) {
      ElImpl.applyVerticalAlignment(this, this._verticalAlignment, this._verticalAlignment,
        existing, value, this._stretchingStrengthY)
      this._verticalAlignmentInside = value
    }
  }

  get stretchingStrengthX(): number | undefined { return this._stretchingStrengthX }
  set stretchingStrengthX(value: number | undefined) {
    const existing = this._stretchingStrengthX
    if (value !== existing) {
      ElImpl.applyStretchingStrengthX(this, existing, value)
      this._stretchingStrengthX = value
    }
  }

  get stretchingStrengthY(): number | undefined { return this._stretchingStrengthY }
  set stretchingStrengthY(value: number | undefined) {
    const existing = this._stretchingStrengthY
    if (value !== existing) {
      ElImpl.applyStretchingStrengthY(this, existing, value)
      this._stretchingStrengthY = value
    }
  }

  get contentWrapping(): boolean { return this._contentWrapping }
  set contentWrapping(value: boolean) {
    if (value !== this._contentWrapping) {
      ElImpl.applyContentWrapping(this, value)
      this._contentWrapping = value
    }
  }

  get overlayVisible(): boolean | undefined { return this._overlayVisible }
  set overlayVisible(value: boolean | undefined) {
    if (value !== this._overlayVisible) {
      ElImpl.applyOverlayVisible(this, value)
      this._overlayVisible = value
    }
  }

  get sealed(): Direction | undefined { return this._sealed }
  set sealed(value: Direction | undefined) {
    if (value !== this._sealed) {
      ElImpl.applySealed(this, value)
      this._sealed = value
    }
  }

  get splitView(): Direction | undefined { return this._splitView }
  set splitView(value: Direction | undefined) {
    if (value !== this._splitView) {
      ElImpl.applySplitView(this, value)
      this._splitView = value
    }
  }

  get partitionSizeInSplitViewPx(): number {
    if (this.layoutInfo === undefined)
      this.layoutInfo = new ElLayoutInfo(InitialElLayoutInfo)
    return this.layoutInfo.effectiveSizePx ?? 0
  }

  get style(): CSSStyleDeclaration { return (this.native as any).style }

  useStylingPreset(stylingPresetName: string, enabled?: boolean): void {
    ElImpl.applyStylingPreset(this, this._hasStylingPresets, stylingPresetName, enabled)
    this._hasStylingPresets = true
  }

  protected *children(onlyAfter?: ElImpl): Generator<ElImpl> {
    const after: MergedItem<RxNode<any>> | undefined = onlyAfter?.node.seat
    for (const child of this.node.children.items(after))
      yield child.instance.element as ElImpl
  }

  static *childrenOf(node: RxNode<El>, onlyAfter?: El): Generator<ElImpl> {
    return (node.element as ElImpl).children(onlyAfter as ElImpl)
  }

  private rowBreak(): void {
    const node = this.node
    const prevEl = node.seat!.prev?.instance.element as ElImpl
    const prevElLayoutInfo = prevEl?.layoutInfo ?? InitialElLayoutInfo
    const layoutInfo = this.layoutInfo = new ElLayoutInfo(prevElLayoutInfo)
    layoutInfo.x = 1
    layoutInfo.y = layoutInfo.runningMaxY + 1
  }

  private static applyKind<T extends Element>(element: ElImpl<T, any>, value: ElKind): void {
    const kind = Constants.layouts[value]
    kind && element.native.setAttribute(Constants.kindAttrName, kind)
    VerstakDriversByLayout[value](element as any)
  }

  private static applyCoords<T extends Element>(element: ElImpl<T, any>, value: ElCoords | undefined): void {
    const s = element.style
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

  private static applyWidth<T extends Element>(element: ElImpl<T, any>, value: Range): void {
    const s = element.style
    const node = element.node
    const owner = node.owner as RxNode<ElImpl>
    const ownerEl = owner.element
    if (ownerEl.splitView === Direction.horizontal) {
      // s.minWidth = "" // clear
      // s.maxWidth = "" // clear
      // if (ownerEl.layoutInfo === undefined)
      //   ownerEl.layoutInfo = new ElLayoutInfo(InitialElLayoutInfo)
      // ownerEl.layoutInfo.flags |= ElLayoutInfoFlags.childrenRelayoutIsNeeded
    }
    else {
      s.minWidth = value.min ?? ""
      s.maxWidth = value.max ?? ""
    }
  }

  private static applyHeight<T extends Element>(element: ElImpl<T, any>, value: Range): void {
    const s = element.style
    const node = element.node
    const owner = node.owner as RxNode<ElImpl>
    const ownerEl = owner.element
    if (ownerEl.splitView === Direction.vertical) {
      // s.minHeight = "" // clear
      // s.maxHeight = "" // clear
      // if (ownerEl.layoutInfo === undefined)
      //   ownerEl.layoutInfo = new ElLayoutInfo(InitialElLayoutInfo)
      // ownerEl.layoutInfo.flags |= ElLayoutInfoFlags.childrenRelayoutIsNeeded
    }
    else {
      s.minHeight = value.min ?? ""
      s.maxHeight = value.max ?? ""
    }
  }

  private static applyAlignment<T extends Element>(element: ElImpl<T, any>,
    oldPrimary: Alignment | undefined, newPrimary: Alignment | undefined,
    oldInside: Alignment | undefined, newInside: Alignment | undefined,
    strength: number | undefined): void {
    // Prepare
    oldPrimary ??= Alignment.left
    newPrimary ??= Alignment.left
    oldInside ??= oldPrimary
    newInside ??= newPrimary
    const css: CSSStyleDeclaration = element.style
    let hostLayout: ElLayoutInfo | undefined = undefined
    if (element.node.host.driver.isPartition) {
      const hostEl = element.node.host.element as ElImpl
      hostLayout = hostEl.layoutInfo
      if (hostLayout === undefined)
        hostLayout = hostEl.layoutInfo = new ElLayoutInfo(InitialElLayoutInfo)
    }
    // Horizontal
    let isEffectiveAlignerX = false
    if (hostLayout) {
      const isAligner = newPrimary === Alignment.center ||
        newPrimary === Alignment.right
      isEffectiveAlignerX = isAligner && (hostLayout.alignerX === undefined ||
        element.index <= hostLayout.alignerX.index)
      if (hostLayout.alignerX === element) {
        if (!isEffectiveAlignerX) {
          css.marginLeft = "" // remove "auto"
          throw new Error("changing alignment leader is not implemented yet")
          // hostLayout.alignerX = ... find new leader
        }
      }
      else {
        if (isEffectiveAlignerX) {
          const existingAlignerCss = hostLayout.alignerX?.style
          if (existingAlignerCss)
            existingAlignerCss.marginLeft = "" // remove "auto"
          // cleanup old leading element
          hostLayout.alignerX = element
        }
      }
    }
    switch (newPrimary) {
      default:
      case Alignment.left:
        css.justifySelf = "start"
        if (oldPrimary === Alignment.center) {
          css.marginLeft = "" // remove "auto"
          css.marginRight = "" // remove "auto"
        }
        else if (oldPrimary === Alignment.right)
          css.marginLeft = "" // remove "auto"
        break
      case Alignment.center:
        css.justifySelf = "center"
        if (hostLayout)
          css.marginLeft = isEffectiveAlignerX ? "auto" : ""
        css.marginRight = "auto"
        break
      case Alignment.right:
        css.justifySelf = "end"
        if (hostLayout)
          css.marginLeft = isEffectiveAlignerX ? "auto" : ""
        if (oldPrimary === Alignment.center)
          css.marginRight = "" // remove "auto"
        break
      case Alignment.stretch:
        css.justifySelf = "stretch"
        if (oldPrimary === Alignment.center) {
          css.marginLeft = "" // remove "auto"
          css.marginRight = "" // remove "auto"
        }
        else if (oldPrimary === Alignment.right)
          css.marginLeft = "" // remove "auto"
        break
    }
    switch (newInside) {
      default:
      case Alignment.left:
        css.alignItems = "start"
        css.textAlign = "left"
        break
      case Alignment.center:
        css.alignItems = "center"
        css.textAlign = "center"
        break
      case Alignment.right:
        css.alignItems = "end"
        css.textAlign = "right"
        break
      case Alignment.stretch:
        css.alignItems = "stretch"
        css.textAlign = "justify"
        break
    }
    if (newPrimary === Alignment.stretch && strength === undefined)
      ElImpl.applyStretchingStrengthX(element, 0, 1)
  }

  private static applyVerticalAlignment<T extends Element>(element: ElImpl<T, any>,
    oldPrimary: VerticalAlignment | undefined, newPrimary: VerticalAlignment | undefined,
    oldInside: VerticalAlignment | undefined, newInside: VerticalAlignment | undefined,
    strength: number | undefined): void {
    // Prepare
    oldPrimary ??= VerticalAlignment.top
    newPrimary ??= VerticalAlignment.top
    oldInside ??= oldPrimary
    newInside ??= newPrimary
    const css: CSSStyleDeclaration = element.style
    let hostLayout: ElLayoutInfo | undefined = undefined
    let hostCss: CSSStyleDeclaration | undefined = undefined
    if (element.node.host.driver.isPartition) {
      const hostEl = element.node.host.element as ElImpl
      hostCss = hostEl.style
      hostLayout = hostEl.layoutInfo
      if (hostLayout === undefined)
        hostLayout = hostEl.layoutInfo = new ElLayoutInfo(InitialElLayoutInfo)
    }
    // Vertical
    let isEffectiveAlignerY = false
    if (hostLayout) {
      const isAligner = newPrimary === VerticalAlignment.center ||
        newPrimary === VerticalAlignment.bottom
      isEffectiveAlignerY = isAligner && (hostLayout.alignerY === undefined ||
        hostLayout.alignerY.verticalAlignment !== VerticalAlignment.center)
      if (hostLayout.alignerY === element) {
        if (!isEffectiveAlignerY) {
          hostCss!.marginTop = "" // remove "auto"
          // throw new Error("changing alignment leader is not implemented yet")
          // hostLayout.alignerX = ... find new leader
        }
      }
      else {
        if (isEffectiveAlignerY) {
          hostCss!.marginTop = "auto"
          // cleanup old leading element
          hostLayout.alignerY = element
        }
      }
    }
    switch (newPrimary) {
      default:
      case VerticalAlignment.top:
        css.alignSelf = "start"
        break
      case VerticalAlignment.center:
        css.alignSelf = "center"
        break
      case VerticalAlignment.bottom:
        css.alignSelf = "end"
        break
      case VerticalAlignment.stretch:
        css.alignSelf = "stretch"
        break
    }
    switch (newInside) {
      default:
      case VerticalAlignment.top:
        css.justifyContent = "start"
        break
      case VerticalAlignment.center:
        css.justifyContent = "center"
        break
      case VerticalAlignment.bottom:
        css.justifyContent = "end"
        break
      case VerticalAlignment.stretch:
        css.justifyContent = "stretch"
        break
    }
    if (newPrimary === VerticalAlignment.stretch && strength === undefined)
      ElImpl.applyStretchingStrengthY(element, 0, 1)
  }

  private static applyStretchingStrengthX<T extends Element>(
    element: ElImpl<T, any>, existing: number | undefined,
    value: number | undefined): void {
    // Maintain strength for hosting partition (if any)
    const s = element.style
    const host = element.node.host
    if (host.driver.isPartition) {
      const hostEl = host.element as ElImpl
      hostEl._stretchingStrengthX = value
      let delta = 0
      existing ??= 0
      value ??= 0
      if (existing === 0) {
        if (value !== 0)
          delta = 1
      }
      else if (value === 0) {
        if (existing !== 0)
          delta = -1
      }
      // TODO: to fix
      // if (delta !== 0) {
      //   const count = hostEl._stretchingStrengthX ?? 0 + delta
      //   if (count === 1)
      //     s.alignSelf = "stretch"
      //   else if (count === 0)
      //     s.alignSelf = ""
      // }
    }
    // Apply strength for element itself
    value ??= 0
    if (value > 0) {
      s.flexGrow = `${value}`
      s.flexBasis = "0"
    }
    else {
      s.flexGrow = ""
      s.flexBasis = ""
    }
  }

  private static applyStretchingStrengthY<T extends Element>(
    element: ElImpl<T, any>, existing: number | undefined,
    value: number | undefined): void {
    // Maintain strength for hosting partition (if any)
    const host = element.node.host
    if (host.driver.isPartition) {
      const hostElement = host.element as ElImpl
      hostElement._stretchingStrengthY = value
      let delta = 0
      existing ??= 0
      value ??= 0
      if (existing === 0) {
        if (value !== 0)
          delta = 1
      }
      else if (value === 0) {
        if (existing !== 0)
          delta = -1
      }
      if (delta !== 0) {
        const count = hostElement._stretchingStrengthY ?? 0 + delta
        const s = hostElement.style
        if (count === 1)
          s.flexGrow = `${value}` // TODO: MAX!
        else if (count === 0)
          s.flexGrow = ""
      }
    }
  }

  private static applyContentWrapping<T extends Element>(element: ElImpl<T, any>, value: boolean): void {
    const s = element.style
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

  private static applyOverlayVisible<T extends Element>(element: ElImpl<T, any>, value: boolean | undefined): void {
    const s = element.style
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

  static applySealed<T extends Element>(element: El<T, any>, value: Direction | undefined): void {
    const e = element.native
    if (e instanceof HTMLElement) {
      Transaction.separate(() => e.sensors.resize.observeResizing(element, value !== undefined))
    }
  }

  static applySplitView<T extends Element>(element: El<T, any>, value: Direction | undefined): void {
    const e = element.native
    if (e instanceof HTMLElement) {
      element.sealed = value
      e.style.position = value !== undefined ? "relative" : ""
    }
  }

  private static applyStylingPreset<T extends Element>(element: ElImpl<T, any>, secondary: boolean, styleName: string, enabled?: boolean): void {
    const native = element.native
    enabled ??= true
    if (secondary)
      native.classList.toggle(styleName, enabled)
    else
      native.className = enabled ? styleName : ""
  }
}

// ElLayoutInfo

export class ElLayoutInfo {
  x: number
  y: number
  runningMaxX: number
  runningMaxY: number
  alignerX?: ElImpl
  alignerY?: ElImpl
  flags: ElLayoutInfoFlags

  @obs effectiveSizePx: number

  @obs offsetXpx: number
  @obs offsetYpx: number
  @obs contentSizeXpx: number
  @obs contentSizeYpx: number
  @obs borderSizeYpx: number
  @obs borderSizeXpx: number

  @obs isConstrained: boolean

  constructor(prev: ElLayoutInfo) {
    this.x = prev.x
    this.y = prev.y
    this.runningMaxX = prev.runningMaxX
    this.runningMaxY = prev.runningMaxY
    this.alignerX = undefined
    this.alignerY = undefined
    this.flags = prev.flags & ~ElLayoutInfoFlags.ownCursorPosition

    this.effectiveSizePx = 0

    this.offsetXpx = 0
    this.offsetYpx = 0
    this.contentSizeXpx = 0
    this.contentSizeYpx = 0
    this.borderSizeXpx = 0
    this.borderSizeYpx = 0

    this.isConstrained = false
  }
}

enum ElLayoutInfoFlags {
  none = 0,
  ownCursorPosition = 1,
  usesRunningColumnCount = 2,
  usesRunningRowCount = 4,
  childrenRelayoutIsNeeded = 8,
}

const UndefinedElCoords = Object.freeze({ x1: 0, y1: 0, x2: 0, y2: 0 })
export const InitialElLayoutInfo: ElLayoutInfo = Object.freeze(new ElLayoutInfo({ x: 1, y: 1, runningMaxX: 0, runningMaxY: 0, flags: ElLayoutInfoFlags.none, effectiveSizePx: 0, offsetXpx: 0, offsetYpx: 0, contentSizeXpx: 0, contentSizeYpx: 0, borderSizeXpx: 0, borderSizeYpx: 0, isConstrained: false }))

function getElCoordsAndAdjustLayoutInfo(
  isRegularElement: boolean, area: ElArea, maxX: number, maxY: number,
  prevElLayoutInfo: ElLayoutInfo, layoutInfo?: ElLayoutInfo): ElCoords {
  let result: ElCoords // this comment just prevents syntax highlighting in VS code
  if (typeof (area) === "string") {
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

// Constants

export const Constants = {
  // element: "эл",
  // partition: "разд",
  // layouts: ["секция", "таблица", "заметка", "группа", "" /* раздел */, "" /* разделитель */, "" /* курсор */],
  // keyAttrName: "ключ",
  // kindAttrName: "вид",
  element: "el",
  partition: "part",
  splitter: "splitter",
  group: "group",
  layouts: ["section", "table", "note", "group", "" /* partition */, "" /* splitter */, "" /* cursor */],
  keyAttrName: "key",
  kindAttrName: "kind",
}

const VerstakDriversByLayout: Array<SimpleDelegate<El<HTMLElement>>> = [
  el => { // section
    const owner = el.node.owner.element as ElImpl
    const s = el.style
    s.display = "flex"
    s.flexDirection = "column"
    s.alignSelf = owner.isTable ? "stretch" : "center"
    s.textAlign = "initial"
    s.flexShrink = "1"
    s.minWidth = "0"
    if (owner.splitView !== undefined) {
      s.overflow = "hidden"
      s.flexGrow = "1"
    }
  },
  el => { // table
    const owner = el.node.owner.element as ElImpl
    const s = el.style
    s.alignSelf = owner.isTable ? "stretch" : "center"
    s.display = "grid"
    s.flexBasis = "0"
    s.gridAutoRows = "minmax(min-content, 1fr)"
    s.gridAutoColumns = "minmax(min-content, 1fr)"
    s.textAlign = "initial"
    if (owner.splitView !== undefined) {
      s.overflow = "hidden"
      s.flexGrow = "1"
    }
  },
  el => { // note
    const owner = el.node.owner.element as ElImpl
    const s = el.style
    s.alignSelf = owner.isTable ? "stretch" : "center"
    s.display = "inline-grid"
    s.flexShrink = "1"
  },
  el => { // group
    const s = el.style
    s.display = "contents"
  },
  el => { // partition
    const owner = el.node.owner.element as ElImpl
    const s = el.style
    s.display = owner.isTable ? "contents" : "flex"
    s.flexDirection = "row"
    s.gap = "inherit"
  },
  el => { // splitter
    const s = el.style
    const owner = el.node.owner.element as ElImpl
    s.position = "absolute"
    s.zIndex = `${Number.MAX_SAFE_INTEGER}`
    if (owner.splitView === Direction.horizontal) {
      s.width = "4px"
      s.marginLeft = "-2px"
      s.top = s.bottom = "0"
      s.cursor = "col-resize"
    }
    else {
      s.height = "4px"
      s.marginTop = "-2px"
      s.left = s.right = "0"
      s.cursor = "row-resize"
    }
  },
  el => { // cursor
  },
  el => { // native
  },
  // undefined // cursor
]

// function alignedX(align: Align, like: Align): boolean {
//   return (align & 0b00000011) == (like & 0b00000011)
// }

// function alignedY(align: Align, like: Align): boolean {
//   return (align & 0b00011000) == (like & 0b00011000)
// }
