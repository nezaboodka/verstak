// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2026 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, Handler, BaseDriver, Transaction, signal, RxObject } from "reactronic"
import { El, ElKind, ElCoords, H, V, Range, ElPlace, Direction } from "./El.js"
import { equalElCoords, parseElCoords } from "./ElUtils.js"


// ElDriver

export class ElDriver<T extends Element, M = unknown> extends BaseDriver<El<T, M>> {
  override create(node: ReactiveTreeNode<El<T, M>>): El<T, M> {
    return new ElImpl<T, M>(node)
  }
}

// ElImpl

export class ElImpl<T extends Element = any, M = any> implements El<T, M> {
  // System-managed properties
  readonly node: ReactiveTreeNode<El<T, M>>
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
  private _alignmentHorizontal: H | undefined
  private _alignmentVertical: V | undefined
  private _alignmentVerticalRowWise: V | undefined
  private _selfAlignmentHorizontal: H | undefined
  private _selfAlignmentVertical: V | undefined
  private _selfAlignmentVerticalRowWise: V | undefined
  private _selfStretchingStrengthHorizontal: number | undefined
  private _selfStretchingStrengthVertical: number | undefined
  private _contentWrapping: boolean
  private _overlayVisible: boolean | undefined
  private _text: string | undefined
  private _textIsFormatted: boolean
  private _textIsEditable: boolean
  private _sealed: Direction | undefined
  private _splitView: Direction | undefined
  private _hasStylingPresets: boolean

  constructor(node: ReactiveTreeNode<El<T, M>>) {
    // System-managed properties
    this.node = node
    this.maxColumnCount = 0
    this.maxRowCount = 0
    this.layoutInfo = undefined
    this.native = undefined as any as T // hack
    // User-defined properties
    this.model = undefined as any
    this._kind = ElKind.partition
    this._place = undefined
    this._coords = UndefinedElCoords
    this._width = new Size()
    this._height = new Size()
    this._alignmentHorizontal = undefined
    this._alignmentVertical = undefined
    this._alignmentVerticalRowWise = undefined
    this._selfAlignmentHorizontal = undefined
    this._selfAlignmentVertical = undefined
    this._selfAlignmentVerticalRowWise = undefined
    this._selfStretchingStrengthHorizontal = undefined
    this._selfStretchingStrengthVertical = undefined
    this._contentWrapping = true
    this._overlayVisible = undefined
    this._text = ""
    this._textIsFormatted = false
    this._textIsEditable = false
    this._sealed = undefined
    this._splitView = undefined
    this._hasStylingPresets = false
  }

  prepareForUpdate(): void {
    this._place = undefined // reset
    this._hasStylingPresets = false // reset
  }

  get rank(): number { return this.node.rank }
  get isBlock(): boolean { return this.kind === ElKind.block }
  get isTable(): boolean { return this.kind === ElKind.table }
  get isAuxiliary(): boolean { return this.kind > ElKind.table } // Part, Group, Cursor

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
      const owner = node.owner as ReactiveTreeNode<ElImpl>
      const ownerEl = owner.element
      const prevEl = node.prev?.element as ElImpl
      const prevElLayoutInfo = prevEl?.layoutInfo ?? InitialElLayoutInfo
      const layoutInfo = this.layoutInfo = owner.children.isStrictOrder ? new ElLayoutInfo(prevElLayoutInfo) : undefined
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

  get alignmentHorizontal(): H | undefined { return this._alignmentHorizontal }
  set alignmentHorizontal(value: H | undefined) {
    const existing = this._alignmentHorizontal
    if (value !== existing) {
      ElImpl.applyAlignmentHorizontal(this, existing, value)
      this._alignmentHorizontal = value
    }
  }

  get alignmentVertical(): V | undefined { return this._alignmentVertical }
  set alignmentVertical(value: V | undefined) {
    const existing = this._alignmentVertical
    if (value !== existing) {
      ElImpl.applyAlignmentVertical(this, existing, value)
      this._alignmentVertical = value
    }
  }

  get alignmentVerticalRowWise(): V | undefined { return this._alignmentVerticalRowWise }
  set alignmentVerticalRowWise(value: V | undefined) {
    const existing = this._alignmentVerticalRowWise
    if (value !== existing) {
      ElImpl.applyAlignmentVerticalRowWise(this, existing, value)
      this._alignmentVerticalRowWise = value
    }
  }

  get selfAlignmentHorizontal(): H | undefined { return this._selfAlignmentHorizontal }
  set selfAlignmentHorizontal(value: H | undefined) {
    const existing = this._selfAlignmentHorizontal
    if (value !== existing) {
      ElImpl.applySelfAlignmentHorizontal(this, existing, value)
      this._selfAlignmentHorizontal = value
    }
  }

  get selfAlignmentVertical(): V | undefined { return this._selfAlignmentVertical }
  set selfAlignmentVertical(value: V | undefined) {
    const host = this.node.host
    if (host.driver.isPartition) {
      const partition = host.element as ElImpl
      let existing = partition._selfAlignmentVertical
      if (value !== existing) {
        ElImpl.applyPartitionAlignmentVertical(partition, existing, value)
        partition._selfAlignmentVertical = value
      }
      existing = this._selfAlignmentVerticalRowWise
      if (value !== existing) {
        ElImpl.applySelfAlignmentVertical(this, existing, value)
        this._selfAlignmentVerticalRowWise = value
      }
    }
    else {
      const existing = this._selfAlignmentVertical
      if (value !== existing) {
        ElImpl.applySelfAlignmentVertical(this, existing, value)
        this._selfAlignmentVertical = value
      }
    }
  }

  get selfAlignmentVerticalRowWise(): V | undefined { return this._selfAlignmentVerticalRowWise }
  set selfAlignmentVerticalRowWise(value: V | undefined) {
    const existing = this._selfAlignmentVerticalRowWise
    if (value !== existing) {
      ElImpl.applySelfAlignmentVertical(this, existing, value)
      this._selfAlignmentVerticalRowWise = value
    }
  }

  get selfStretchingStrengthHorizontal(): number | undefined { return this._selfStretchingStrengthHorizontal }
  set selfStretchingStrengthHorizontal(value: number | undefined) {
    const existing = this._selfStretchingStrengthHorizontal
    if (value !== existing) {
      ElImpl.applySelfStretchingStrengthHorizontal(this, existing, value)
      this._selfStretchingStrengthHorizontal = value
    }
  }

  get selfStretchingStrengthVertical(): number | undefined { return this._selfStretchingStrengthVertical }
  set selfStretchingStrengthVertical(value: number | undefined) {
    const host = this.node.host
    const elem = host.driver.isPartition ? host.element as ElImpl : this
    const existing = elem._selfStretchingStrengthVertical
    if (value !== existing) {
      ElImpl.applySelfStretchingStrengthVertical(elem, existing, value)
      elem._selfStretchingStrengthVertical = value
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

  get text(): string | undefined { return this._text }
  set text(value: string | undefined) {
    if (value !== this._text) {
      ElImpl.applyText(this, value)
      this._text = value
    }
  }

  get textIsFormatted(): boolean { return this._textIsFormatted }
  set textIsFormatted(value: boolean) {
    if (value !== this._textIsFormatted) {
      ElImpl.applyTextIsFormatted(this, value)
      this._textIsFormatted = value
    }
  }

  get textIsEditable(): boolean { return this._textIsEditable }
  set textIsEditable(value: boolean) {
    if (value !== this._textIsEditable) {
      ElImpl.applyTextIsEditable(this, value)
      this._textIsEditable = value
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

  get style(): CSSStyleDeclaration {
    return (this.native as any).style
  }

  get action(): Handler<El<T, M>, void | Promise<void>> | undefined {
    return (this.native as any).onclick // type-safety is violated here
  }

  set action(value: Handler<El<T, M>, void | Promise<void>> | undefined) {
    const self = this.native
    if (self instanceof HTMLElement) {
      if (value) { // if not undefined and not null
        self.onclick = () => {
          const res = value(this)
          if (res instanceof Promise)
            res.then(v => undefined, e => undefined)
        }
      }
      else
        self.onclick = null
    }
  }

  useStylingPreset(stylingPresetName: string, enabled?: boolean): void {
    ElImpl.applyStylingPreset(this, this._hasStylingPresets, stylingPresetName, enabled)
    this._hasStylingPresets = true
  }

  protected *children(onlyAfter?: ElImpl): Generator<ElImpl> {
    const after: ReactiveTreeNode<any> | undefined = onlyAfter?.node
    for (const child of this.node.children.items(after))
      yield child.element as ElImpl
  }

  static *childrenOf(node: ReactiveTreeNode<El>, onlyAfter?: El): Generator<ElImpl> {
    return (node.element as ElImpl).children(onlyAfter as ElImpl)
  }

  private rowBreak(): void {
    const node = this.node
    const prevEl = node.prev?.element as ElImpl
    const prevElLayoutInfo = prevEl?.layoutInfo ?? InitialElLayoutInfo
    const layoutInfo = this.layoutInfo = new ElLayoutInfo(prevElLayoutInfo)
    layoutInfo.x = 1
    layoutInfo.y = layoutInfo.runningMaxY + 1
  }

  private static applyKind<T extends Element>(element: ElImpl<T, any>, value: ElKind): void {
    // const kind = Constants.layouts[value]
    // kind && element.native.setAttribute(Constants.kindAttrName, kind)
    DriversByLayout[value](element as any)
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
    const owner = node.owner as ReactiveTreeNode<ElImpl>
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
    const owner = node.owner as ReactiveTreeNode<ElImpl>
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

  private static applyAlignmentHorizontal<T extends Element>(element: ElImpl<T, any>,
    existing: H | undefined, value: H | undefined): void {
    const el = element.native
    if (existing !== undefined)
      el.classList.remove(StylingClassNameByAlignmentHorizontal[existing])
    if (value !== undefined)
      el.classList.add(StylingClassNameByAlignmentHorizontal[value])
  }

  private static applyAlignmentVertical<T extends Element>(element: ElImpl<T, any>,
    existing: V | undefined, value: V | undefined): void {
    const el = element.native
    if (existing !== undefined)
      el.classList.remove(StylingClassNameByAlignmentVertical[existing])
    if (value !== undefined)
      el.classList.add(StylingClassNameByAlignmentVertical[value])
  }

  private static applyAlignmentVerticalRowWise<T extends Element>(element: ElImpl<T, any>,
    existing: V | undefined, value: V | undefined): void {
    const el = element.native
    if (existing !== undefined)
      el.classList.remove(StylingClassNameByAlignmentVerticalRowWise[existing])
    if (value !== undefined)
      el.classList.add(StylingClassNameByAlignmentVerticalRowWise[value])
  }

  private static applySelfAlignmentHorizontal<T extends Element>(element: ElImpl<T, any>,
    existing: H | undefined, value: H | undefined): void {
    const e = element.native
    if (existing !== undefined) {
      e.classList.remove(StylingClassNameBySelfAlignmentHorizontal[existing])
      if (existing === H.stretch || existing === H.stretchAndFix)
        element.style.flexGrow = ""
    }
    if (value !== undefined) {
      e.classList.add(StylingClassNameBySelfAlignmentHorizontal[value])
      const grow = element.selfStretchingStrengthHorizontal
      if ((value === H.stretch || value === H.stretchAndFix) && grow !== undefined && grow !== 1)
        element.style.flexGrow = `${grow}`
      else
        element.style.flexGrow = ""
    }
  }

  private static applyPartitionAlignmentVertical<T extends Element>(partition: ElImpl<T, any>,
    existing: V | undefined, value: V | undefined): void {
    const e = partition.native
    if (existing !== undefined) {
      e.classList.remove(StylingClassNameByPartitionAlignmentVertical[existing])
      if (existing === V.stretch || existing === V.stretchAndFix)
        partition.style.flexGrow = ""
    }
    if (value !== undefined) {
      e.classList.add(StylingClassNameByPartitionAlignmentVertical[value])
      const grow = partition.selfStretchingStrengthVertical
      if ((value === V.stretch || value === V.stretchAndFix) && grow !== undefined && grow !== 1)
        partition.style.flexGrow = `${grow}`
      else
        partition.style.flexGrow = ""
    }
  }

  private static applySelfAlignmentVertical<T extends Element>(element: ElImpl<T, any>,
    existing: V | undefined, value: V | undefined): void {
    const el = element.native
    if (existing !== undefined)
      el.classList.remove(StylingClassNameBySelfAlignmentVertical[existing])
    if (value !== undefined)
      el.classList.add(StylingClassNameBySelfAlignmentVertical[value])
  }

  // private static applyAlignmentHorizontalOld<T extends Element>(element: ElImpl<T, any>,
  //   oldPrimary: H | undefined, newPrimary: H | undefined,
  //   oldInside: H | undefined, newInside: H | undefined,
  //   strength: number | undefined): void {
  //   // Prepare
  //   oldPrimary ??= H.left
  //   newPrimary ??= H.left
  //   oldInside ??= oldPrimary
  //   newInside ??= newPrimary
  //   const css: CSSStyleDeclaration = element.style
  //   let hostLayout: ElLayoutInfo | undefined = undefined
  //   if (element.node.host.driver.isPartition) {
  //     const hostEl = element.node.host.element as ElImpl
  //     hostLayout = hostEl.layoutInfo
  //     if (hostLayout === undefined)
  //       hostLayout = hostEl.layoutInfo = new ElLayoutInfo(InitialElLayoutInfo)
  //   }
  //   // Horizontal
  //   let isEffectiveAlignerX = false
  //   if (hostLayout) {
  //     const isAligner = newPrimary === H.center ||
  //       newPrimary === H.right
  //     isEffectiveAlignerX = isAligner && (hostLayout.alignerX === undefined ||
  //       element.rank <= hostLayout.alignerX.rank)
  //     if (hostLayout.alignerX === element) {
  //       if (!isEffectiveAlignerX) {
  //         css.marginLeft = "" // remove "auto"
  //         throw new Error("changing alignment leader is not implemented yet")
  //         // hostLayout.alignerX = ... find new leader
  //       }
  //     }
  //     else {
  //       if (isEffectiveAlignerX) {
  //         const existingAlignerCss = hostLayout.alignerX?.native?.style
  //         if (existingAlignerCss)
  //           existingAlignerCss.marginLeft = "" // remove "auto"
  //         // cleanup old leading element
  //         hostLayout.alignerX = element
  //       }
  //     }
  //   }
  //   switch (newPrimary) {
  //     default:
  //     case H.left:
  //       css.justifySelf = "start"
  //       if (oldPrimary === H.center) {
  //         css.marginLeft = "" // remove "auto"
  //         css.marginRight = "" // remove "auto"
  //       }
  //       else if (oldPrimary === H.right)
  //         css.marginLeft = "" // remove "auto"
  //       break
  //     case H.center:
  //       css.justifySelf = "center"
  //       if (hostLayout)
  //         css.marginLeft = isEffectiveAlignerX ? "auto" : ""
  //       css.marginRight = "auto"
  //       break
  //     case H.right:
  //       css.justifySelf = "end"
  //       if (hostLayout)
  //         css.marginLeft = isEffectiveAlignerX ? "auto" : ""
  //       if (oldPrimary === H.center)
  //         css.marginRight = "" // remove "auto"
  //       break
  //     case H.stretch:
  //     case H.stretchAndFix:
  //       css.justifySelf = "stretch"
  //       if (oldPrimary === H.center) {
  //         css.marginLeft = "" // remove "auto"
  //         css.marginRight = "" // remove "auto"
  //       }
  //       else if (oldPrimary === H.right)
  //         css.marginLeft = "" // remove "auto"
  //       break
  //   }
  //   switch (newInside) {
  //     default:
  //     case H.left:
  //       css.alignItems = "start"
  //       css.textAlign = "left"
  //       break
  //     case H.center:
  //       css.alignItems = "center"
  //       css.textAlign = "center"
  //       break
  //     case H.right:
  //       css.alignItems = "end"
  //       css.textAlign = "right"
  //       break
  //     case H.stretch:
  //     case H.stretchAndFix:
  //       css.alignItems = "stretch"
  //       css.textAlign = "justify"
  //       break
  //   }
  //   if (newPrimary >= H.stretch && strength === undefined)
  //     ElImpl.applyStretchingStrengthH(element, 0, 1)
  // }

  // private static applyAlignmentVerticalOld<T extends Element>(element: ElImpl<T, any>,
  //   oldPrimary: V | undefined, newPrimary: V | undefined,
  //   oldInside: V | undefined, newInside: V | undefined,
  //   strength: number | undefined): void {
  //   // Prepare
  //   oldPrimary ??= V.top
  //   newPrimary ??= V.top
  //   oldInside ??= oldPrimary
  //   newInside ??= newPrimary
  //   const css: CSSStyleDeclaration = element.style
  //   let hostLayout: ElLayoutInfo | undefined = undefined
  //   let hostCss: CSSStyleDeclaration | undefined = undefined
  //   if (element.node.host.driver.isPartition) {
  //     const hostEl = element.node.host.element as ElImpl
  //     hostCss = hostEl.style
  //     hostLayout = hostEl.layoutInfo
  //     if (hostLayout === undefined)
  //       hostLayout = hostEl.layoutInfo = new ElLayoutInfo(InitialElLayoutInfo)
  //   }
  //   // Vertical
  //   let isEffectiveAlignerY = false
  //   if (hostLayout) {
  //     const isAligner = newPrimary === V.center ||
  //       newPrimary === V.bottom
  //     isEffectiveAlignerY = isAligner && (hostLayout.alignerY === undefined ||
  //       hostLayout.alignerY.selfAlignmentVertical !== V.center)
  //     if (hostLayout.alignerY === element) {
  //       if (!isEffectiveAlignerY) {
  //         hostCss!.marginTop = "" // remove "auto"
  //         // throw new Error("changing alignment leader is not implemented yet")
  //         // hostLayout.alignerX = ... find new leader
  //       }
  //     }
  //     else {
  //       if (isEffectiveAlignerY) {
  //         hostCss!.marginTop = "auto"
  //         // cleanup old leading element
  //         hostLayout.alignerY = element
  //       }
  //     }
  //   }
  //   switch (newPrimary) {
  //     default:
  //     case V.top:
  //       css.alignSelf = "start"
  //       break
  //     case V.center:
  //       css.alignSelf = "center"
  //       break
  //     case V.bottom:
  //       css.alignSelf = "end"
  //       break
  //     case V.stretch:
  //     case V.stretchAndFix:
  //       css.alignSelf = "stretch"
  //       break
  //   }
  //   switch (newInside) {
  //     default:
  //     case V.top:
  //       css.justifyContent = "start"
  //       break
  //     case V.center:
  //       css.justifyContent = "center"
  //       break
  //     case V.bottom:
  //       css.justifyContent = "end"
  //       break
  //     case V.stretch:
  //     case V.stretchAndFix:
  //       css.justifyContent = "stretch"
  //       break
  //   }
  //   if (newPrimary >= V.stretch && strength === undefined)
  //     ElImpl.applyStretchingStrengthV(element, 0, 1)
  // }

  private static applySelfStretchingStrengthHorizontal<T extends Element>(
    element: ElImpl<T, any>, existing: number | undefined,
    value: number | undefined): void {
    const a = element.selfAlignmentHorizontal
    if ((a === H.stretch || a === H.stretchAndFix) && value !== undefined && value !== 1)
      element.style.flexGrow = `${value}`
    else
      element.style.flexGrow = ""
  }

  private static applySelfStretchingStrengthVertical<T extends Element>(
    element: ElImpl<T, any>, existing: number | undefined,
    value: number | undefined): void {
    const host = element.node.host.element as ElImpl
    const a = host.selfAlignmentVertical
    if ((a === V.stretch || a === V.stretchAndFix) && value !== undefined && value !== 1)
      host.style.flexGrow = `${value}`
    else
      host.style.flexGrow = ""
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
    const host = ReactiveTreeNode.findMatchingHost<El, El>(element.node, n =>
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

  static applyText<T extends Element>(element: El<T, any>, value: string | undefined): void {
    const e = element.native
    if (e instanceof HTMLElement) {
      if (value) {
        // e.style.display = "inline-grid"
        // e.style.minWidth = ""
      }
      else {
        e.style.display = "flex"
        e.style.minWidth = "0"
      }
      if (element.textIsFormatted)
        e.innerHTML = value ?? ""
      else
        e.innerText = value ?? ""
    }
  }

  static applyTextIsFormatted<T extends Element>(element: El<T, any>, value: boolean): void {
    const e = element.native
    if (e instanceof HTMLElement) {
      if (value)
        e.innerHTML = element.text ?? ""
      else
        e.innerText = element.text ?? ""
    }
  }

  static applyTextIsEditable<T extends Element>(element: El<T, any>, value: boolean): void {
    const e = element.native
    if (e instanceof HTMLElement) {
      if (value)
        e.contentEditable = "true"
      else
        e.contentEditable = ""
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

// Size

class Size extends RxObject {
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

// ElLayoutInfo

export class ElLayoutInfo {
  x: number
  y: number
  runningMaxX: number
  runningMaxY: number
  alignerX?: ElImpl
  alignerY?: ElImpl
  flags: ElLayoutInfoFlags

  @signal effectiveSizePx: number

  @signal contentSizeXpx: number
  @signal contentSizeYpx: number
  @signal borderSizeYpx: number
  @signal borderSizeXpx: number

  @signal isUpdateFinished: boolean

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
  layouts: ["block", "table", "group", "" /* partition */, "" /* splitter */, "" /* cursor */],
  keyAttrName: "key",
  kindAttrName: "kind",
  ownReactiveTreeNodeKey: Symbol("own-reactive-tree-node"),
}

const DriversByLayout: Array<Handler<El<HTMLElement>>> = [
  el => { // block
    el.native.classList.add("v5k-block")
  },
  el => { // table
    el.native.classList.add("v5k-table")
  },
  el => { // group
    el.native.classList.add("v5k-group")
  },
  el => { // partition
    el.native.classList.add("v5k-part")
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

export const StylingClassNameByAlignmentHorizontal: Array<string> = [
  "v5k-h-center",
  "v5k-h-left",
  "v5k-h-right",
  "v5k-h-stretch",
  "v5k-h-stretch-fix",
]

export const StylingClassNameByAlignmentVertical: Array<string> = [
  "v5k-v-center",
  "v5k-v-top",
  "v5k-v-bottom",
  "v5k-v-stretch",
  "v5k-v-stretch-fix",
]

export const StylingClassNameByAlignmentVerticalRowWise: Array<string> = [
  "v5k-vrw-center",
  "v5k-vrw-top",
  "v5k-vrw-bottom",
  "v5k-vrw-stretch",
  "v5k-vrw-stretch-fix",
]

export const StylingClassNameBySelfAlignmentHorizontal: Array<string> = [
  "v5k-self-h-center",
  "v5k-self-h-left",
  "v5k-self-h-right",
  "v5k-self-h-stretch",
  "v5k-self-h-stretch-fix",
]

export const StylingClassNameBySelfAlignmentVertical: Array<string> = [
  "v5k-self-v-center",
  "v5k-self-v-top",
  "v5k-self-v-bottom",
  "v5k-self-v-stretch",
  "v5k-self-v-stretch-fix",
]

export const StylingClassNameByPartitionAlignmentVertical: Array<string> = [
  "v5k-part-v-center",
  "v5k-part-v-top",
  "v5k-part-v-bottom",
  "v5k-part-v-stretch",
  "v5k-part-v-stretch-fix",
]

// export const StylingClassNameBySelfAlignmentVerticalRowWise: Array<string> = [
//   "v5k-self-vrw-center",
//   "v5k-self-vrw-top",
//   "v5k-self-vrw-bottom",
//   "v5k-self-vrw-stretch",
//   "v5k-self-vrw-stretch-fix",
// ]

// function alignedX(align: Align, like: Align): boolean {
//   return (align & 0b00000011) == (like & 0b00000011)
// }

// function alignedY(align: Align, like: Align): boolean {
//   return (align & 0b00011000) == (like & 0b00011000)
// }
