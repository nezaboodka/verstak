// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveNode, Handler, BaseDriver, MergedItem, Transaction, obs, ObservableObject } from "reactronic"
import { El, ElKind, ElCoords, Horizontal, Vertical, Range, ElPlace, Direction } from "./El.js"
import { equalElCoords, parseElCoords } from "./ElUtils.js"

class Size extends ObservableObject {
  raw: Range
  minPx: number
  maxPx: number

  constructor() {
    super()
    this.raw = { min: "", max: "" }
    this.minPx = 0
    this.maxPx = Number.POSITIVE_INFINITY
  }
}

// ElDriver

export class ElDriver<T extends Element, M = unknown> extends BaseDriver<El<T, M>> {
  create(node: ReactiveNode<El<T, M>>): El<T, M> {
    return new ElImpl<T, M>(node)
  }
}

// ElImpl

export class ElImpl<T extends Element = any, M = any> implements El<T, M> {
  // System-managed properties
  readonly node: ReactiveNode<El<T, M>>
  maxColumnCount: number
  maxRowCount: number
  layoutInfo?: ElLayoutInfo
  native: T

  // User-defined properties
  model: M
  private _kind: ElKind
  private _place: ElPlace
  private _coords: ElCoords
  private _width: Size
  private _height: Size
  private _horizontal: Horizontal | undefined
  private _vertical: Vertical | undefined
  private _contentHorizontal: Horizontal | undefined
  private _contentVertical: Vertical | undefined
  private _stretchingStrengthHorizontally: number | undefined
  private _stretchingStrengthVertically: number | undefined
  private _contentWrapping: boolean
  private _overlayVisible: boolean | undefined
  private _sealed: Direction | undefined
  private _splitView: Direction | undefined
  private _hasStylingPresets: boolean

  constructor(node: ReactiveNode<El<T, M>>) {
    // System-managed properties
    this.node = node
    this.maxColumnCount = 0
    this.maxRowCount = 0
    this.layoutInfo = undefined
    this.native = undefined as any as T // hack
    // User-defined properties
    this.model = undefined as any
    this._kind = ElKind.part
    this._place = undefined
    this._coords = UndefinedElCoords
    this._width = new Size()
    this._height = new Size()
    this._horizontal = undefined
    this._vertical = undefined
    this._contentHorizontal = undefined
    this._contentVertical = undefined
    this._stretchingStrengthHorizontally = undefined
    this._stretchingStrengthVertically = undefined
    this._contentWrapping = true
    this._overlayVisible = undefined
    this._sealed = undefined
    this._splitView = undefined
    this._hasStylingPresets = false
  }

  prepareForUpdate(): void {
    this._place = undefined // reset
    this._hasStylingPresets = false // reset
  }

  get index(): number { return this.node.slot!.index }
  get isPanel(): boolean { return this.kind === ElKind.panel }
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

  get place(): ElPlace { return this._place }
  set place(value: ElPlace) {
    const node = this.node
    const driver = node.driver
    if (!driver.isPartition) {
      const owner = node.owner as ReactiveNode<ElImpl>
      const ownerEl = owner.element
      const prevEl = node.slot!.prev?.instance.element as ElImpl
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
      this._place = value ?? {}
    }
    else
      this.rowBreak()
  }

  get width(): Range { return this._width.raw }
  set width(value: Range) {
    const w = this._width.raw
    if (value.min !== w.min || value.max !== w.max || value.preferred !== undefined) {
      ElImpl.applyWidth(this, value)
      this._width.raw = value
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

  get height(): Range { return this._height.raw }
  set height(value: Range) {
    const h = this._height.raw
    if (value.min !== h.min || value.max !== h.max || value.preferred !== undefined) {
      ElImpl.applyHeight(this, value)
      this._height.raw = value
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

  get horizontally(): Horizontal | undefined { return this._horizontal }
  set horizontally(value: Horizontal | undefined) {
    const existing = this._horizontal
    if (value !== existing) {
      ElImpl.applyHorizontal(this, existing, value,
        this._contentHorizontal, this._contentHorizontal,
        this._stretchingStrengthHorizontally)
      this._horizontal = value
    }
  }

  get vertically(): Vertical | undefined { return this._vertical }
  set vertically(value: Vertical | undefined) {
    const existing = this._vertical
    if (value !== existing) {
      ElImpl.applyVertical(this, existing, value,
        this._contentVertical, this._contentVertical,
        this._stretchingStrengthVertically)
      this._vertical = value
    }
  }

  get contentHorizontally(): Horizontal | undefined { return this._contentHorizontal }
  set contentHorizontally(value: Horizontal | undefined) {
    const existing = this._contentHorizontal
    if (value !== existing) {
      ElImpl.applyHorizontal(this, this._horizontal, this._horizontal,
        existing, value, this._stretchingStrengthHorizontally)
      this._contentHorizontal = value
    }
  }

  get contentVertically(): Vertical | undefined { return this._contentVertical }
  set contentVertically(value: Vertical | undefined) {
    const existing = this._contentVertical
    if (value !== existing) {
      ElImpl.applyVertical(this, this._vertical, this._vertical,
        existing, value, this._stretchingStrengthVertically)
      this._contentVertical = value
    }
  }

  get stretchingStrengthHorizontally(): number | undefined { return this._stretchingStrengthHorizontally }
  set stretchingStrengthHorizontally(value: number | undefined) {
    const existing = this._stretchingStrengthHorizontally
    if (value !== existing) {
      ElImpl.applyStretchingStrengthH(this, existing, value)
      this._stretchingStrengthHorizontally = value
    }
  }

  get stretchingStrengthVertically(): number | undefined { return this._stretchingStrengthVertically }
  set stretchingStrengthVertically(value: number | undefined) {
    const existing = this._stretchingStrengthVertically
    if (value !== existing) {
      ElImpl.applyStretchingStrengthV(this, existing, value)
      this._stretchingStrengthVertically = value
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
    const after: MergedItem<ReactiveNode<any>> | undefined = onlyAfter?.node.slot
    for (const child of this.node.children.items(after))
      yield child.instance.element as ElImpl
  }

  static *childrenOf(node: ReactiveNode<El>, onlyAfter?: El): Generator<ElImpl> {
    return (node.element as ElImpl).children(onlyAfter as ElImpl)
  }

  private rowBreak(): void {
    const node = this.node
    const prevEl = node.slot!.prev?.instance.element as ElImpl
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
    const owner = node.owner as ReactiveNode<ElImpl>
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
    const owner = node.owner as ReactiveNode<ElImpl>
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

  private static applyHorizontal<T extends Element>(element: ElImpl<T, any>,
    oldPrimary: Horizontal | undefined, newPrimary: Horizontal | undefined,
    oldInside: Horizontal | undefined, newInside: Horizontal | undefined,
    strength: number | undefined): void {
    // Prepare
    oldPrimary ??= Horizontal.left
    newPrimary ??= Horizontal.left
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
      const isAligner = newPrimary === Horizontal.center ||
        newPrimary === Horizontal.right
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
          const existingAlignerCss = hostLayout.alignerX?.native?.style
          if (existingAlignerCss)
            existingAlignerCss.marginLeft = "" // remove "auto"
          // cleanup old leading element
          hostLayout.alignerX = element
        }
      }
    }
    switch (newPrimary) {
      default:
      case Horizontal.left:
        css.justifySelf = "start"
        if (oldPrimary === Horizontal.center) {
          css.marginLeft = "" // remove "auto"
          css.marginRight = "" // remove "auto"
        }
        else if (oldPrimary === Horizontal.right)
          css.marginLeft = "" // remove "auto"
        break
      case Horizontal.center:
        css.justifySelf = "center"
        if (hostLayout)
          css.marginLeft = isEffectiveAlignerX ? "auto" : ""
        css.marginRight = "auto"
        break
      case Horizontal.right:
        css.justifySelf = "end"
        if (hostLayout)
          css.marginLeft = isEffectiveAlignerX ? "auto" : ""
        if (oldPrimary === Horizontal.center)
          css.marginRight = "" // remove "auto"
        break
      case Horizontal.stretch:
      case Horizontal.stretchAndFix:
        css.justifySelf = "stretch"
        if (oldPrimary === Horizontal.center) {
          css.marginLeft = "" // remove "auto"
          css.marginRight = "" // remove "auto"
        }
        else if (oldPrimary === Horizontal.right)
          css.marginLeft = "" // remove "auto"
        break
    }
    switch (newInside) {
      default:
      case Horizontal.left:
        css.alignItems = "start"
        css.textAlign = "left"
        break
      case Horizontal.center:
        css.alignItems = "center"
        css.textAlign = "center"
        break
      case Horizontal.right:
        css.alignItems = "end"
        css.textAlign = "right"
        break
      case Horizontal.stretch:
      case Horizontal.stretchAndFix:
        css.alignItems = "stretch"
        css.textAlign = "justify"
        break
    }
    if (newPrimary >= Horizontal.stretch && strength === undefined)
      ElImpl.applyStretchingStrengthH(element, 0, 1)
  }

  private static applyVertical<T extends Element>(element: ElImpl<T, any>,
    oldPrimary: Vertical | undefined, newPrimary: Vertical | undefined,
    oldInside: Vertical | undefined, newInside: Vertical | undefined,
    strength: number | undefined): void {
    // Prepare
    oldPrimary ??= Vertical.top
    newPrimary ??= Vertical.top
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
      const isAligner = newPrimary === Vertical.center ||
        newPrimary === Vertical.bottom
      isEffectiveAlignerY = isAligner && (hostLayout.alignerY === undefined ||
        hostLayout.alignerY.vertically !== Vertical.center)
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
      case Vertical.top:
        css.alignSelf = "start"
        break
      case Vertical.center:
        css.alignSelf = "center"
        break
      case Vertical.bottom:
        css.alignSelf = "end"
        break
      case Vertical.stretch:
      case Vertical.stretchAndFix:
        css.alignSelf = "stretch"
        break
    }
    switch (newInside) {
      default:
      case Vertical.top:
        css.justifyContent = "start"
        break
      case Vertical.center:
        css.justifyContent = "center"
        break
      case Vertical.bottom:
        css.justifyContent = "end"
        break
      case Vertical.stretch:
      case Vertical.stretchAndFix:
        css.justifyContent = "stretch"
        break
    }
    if (newPrimary >= Vertical.stretch && strength === undefined)
      ElImpl.applyStretchingStrengthV(element, 0, 1)
  }

  private static applyStretchingStrengthH<T extends Element>(
    element: ElImpl<T, any>, existing: number | undefined,
    value: number | undefined): void {
    // Maintain strength for hosting partition (if any)
    const s = element.style
    const host = element.node.host
    if (host.driver.isPartition) {
      const hostEl = host.element as ElImpl
      hostEl._stretchingStrengthHorizontally = value
      existing ??= 0
      value ??= 0
      // TODO: to fix
      // let delta = 0
      // if (existing === 0) {
      //   if (value !== 0)
      //     delta = 1
      // }
      // else if (value === 0) {
      //   if (existing !== 0)
      //     delta = -1
      // }
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

  private static applyStretchingStrengthV<T extends Element>(
    element: ElImpl<T, any>, existing: number | undefined,
    value: number | undefined): void {
    // Maintain strength for hosting partition (if any)
    const host = element.node.host
    if (host.driver.isPartition) {
      const hostElement = host.element as ElImpl
      hostElement._stretchingStrengthVertically = value
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
        const count = hostElement._stretchingStrengthVertically ?? 0 + delta
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
    const host = ReactiveNode.findMatchingHost<El, El>(element.node, n =>
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
    }
  }

  static applySplitView<T extends Element>(element: El<T, any>, value: Direction | undefined): void {
    const e = element.native
    if (e instanceof HTMLElement) {
      element.sealed = value
      const t = Transaction.current
      Transaction.outside(() => {
        t.whenFinished(true).then(() => {
          e.sensors.resize.observeResizing(element, value !== undefined)
        }, e => { /* nop */ })
      })
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

  @obs contentSizeXpx: number
  @obs contentSizeYpx: number
  @obs borderSizeYpx: number
  @obs borderSizeXpx: number

  @obs isUpdateFinished: boolean

  constructor(prev: ElLayoutInfo) {
    this.x = prev.x
    this.y = prev.y
    this.runningMaxX = prev.runningMaxX
    this.runningMaxY = prev.runningMaxY
    this.alignerX = undefined
    this.alignerY = undefined
    this.flags = prev.flags & ~ElLayoutInfoFlags.ownCursorPosition

    this.effectiveSizePx = 0

    this.contentSizeXpx = 0
    this.contentSizeYpx = 0
    this.borderSizeXpx = 0
    this.borderSizeYpx = 0

    this.isUpdateFinished = false
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
export const InitialElLayoutInfo: ElLayoutInfo = Object.freeze(new ElLayoutInfo({ x: 1, y: 1, runningMaxX: 0, runningMaxY: 0, flags: ElLayoutInfoFlags.none, effectiveSizePx: 0, contentSizeXpx: 0, contentSizeYpx: 0, borderSizeXpx: 0, borderSizeYpx: 0, isUpdateFinished: false }))

function getElCoordsAndAdjustLayoutInfo(
  isRegularElement: boolean, place: ElPlace, maxX: number, maxY: number,
  prevElLayoutInfo: ElLayoutInfo, layoutInfo?: ElLayoutInfo): ElCoords {
  let result: ElCoords // this comment just prevents syntax highlighting in VS code
  if (typeof (place) === "string") {
    // Absolute positioning
    result = parseElCoords(place, { x1: 0, y1: 0, x2: 0, y2: 0 })
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
    if (place) {
      dx = place.cellsOverWidth ?? 1
      dy = place.cellsOverHeight ?? 1
    }
    else // place === undefined
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

function absolutizeElCoords(place: ElCoords,
  cursorX: number, cursorY: number,
  maxWidth: number, maxHeight: number,
  result: ElCoords): ElCoords {
  // X1, X2
  const x1 = absolutizePosition(place.x1, cursorX, maxWidth)
  const x2 = absolutizePosition(place.x2, x1, maxWidth)
  if (x1 <= x2)
    result.x1 = x1, result.x2 = x2
  else
    result.x1 = x2, result.x2 = x1
  // Y1, Y2
  const y1 = absolutizePosition(place.y1, cursorY, maxHeight)
  const y2 = absolutizePosition(place.y2, y1, maxHeight)
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
  // layouts: ["панель", "таблица", "заметка", "группа", "" /* раздел */, "" /* разделитель */, "" /* курсор */],
  // keyAttrName: "ключ",
  // kindAttrName: "вид",
  element: "el",
  partition: "part",
  wrapper: "wrapper",
  splitter: "splitter",
  group: "group",
  layouts: ["panel", "table", "note", "group", "" /* partition */, "" /* splitter */, "" /* cursor */],
  keyAttrName: "key",
  kindAttrName: "kind",
}

const VerstakDriversByLayout: Array<Handler<El<HTMLElement>>> = [
  el => { // panel
    const owner = el.node.owner.element as ElImpl
    const s = el.style
    s.display = "flex"
    s.flexDirection = "column"
    s.alignSelf = owner.isTable ? "stretch" : "center"
    s.textAlign = "initial"
    s.flexShrink = "1"
    s.minWidth = "0"
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
    s.alignItems = "center" // is it good idea?..
    s.gap = "inherit"
    s.position = owner.sealed !== undefined ? "relative" : ""
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
