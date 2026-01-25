// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, ReactiveTreeNodeDecl, ReactiveTreeNodeDriver, Script, Mode, ReconciliationList, LinkedItem, declare, launch, runNonReactive, ScriptAsync } from "reactronic"
import { El, ElKind, ElPlace, Direction } from "./El.js"
import { clamp } from "./ElUtils.js"
import { Constants, CursorCommandDriver, ElDriver, ElImpl, ElLayoutInfo, InitialElLayoutInfo } from "./ElDriver.js"
import { getPrioritiesForEmptySpaceDistribution, getPrioritiesForSizeChanging, relayout, relayoutUsingSplitter } from "./SplitViewMath.js"
import { Axis, BodyFontSize, Dimension, SizeConverterOptions, toPx } from "./Sizes.js"
import { HtmlDriver, StaticDriver } from "./WebDriver.js"

// Verstak is based on two fundamental layout structures
// called block and table; and on two special non-visual
// elements called partition and group.

// Window is a root element, which element tree starts
// from.

// Block is a layout structure, which children are laid
// out naturally: rightwards-downwards.

// Table is layout structure, which children are laid out
// over table cells.

// Partition is a special non-visual element, which begins
// new layout partition inside block or table.

// TextBlock is either plain or markdown-formatted text
// supporting syntax highlighting for code blocks.

// Group is a special non-visual element for logical
// grouping of blocks, tables and other groups.

// Window

export function Window(
  body?: Script<El<HTMLBodyElement>>,
  bodyTask?: ScriptAsync<El<HTMLBodyElement>>,
  key?: string,
  mode?: Mode,
  preparation?: Script<El<HTMLBodyElement>>,
  preparationTask?: ScriptAsync<El<HTMLBodyElement>>,
  finalization?: Script<El<HTMLBodyElement>>,
  signalArgs?: unknown,
  basis?: ReactiveTreeNodeDecl<El<HTMLBodyElement>>): ReactiveTreeNode<El<HTMLBodyElement>>

export function Window(
  declaration?: ReactiveTreeNodeDecl<El<HTMLBodyElement>>): ReactiveTreeNode<El<HTMLBodyElement>>

export function Window(
  bodyOrDeclaration?: Script<El<HTMLBodyElement>> | ReactiveTreeNodeDecl<El<HTMLBodyElement>>,
  bodyTask?: ScriptAsync<El<HTMLBodyElement>>,
  key?: string,
  mode?: Mode,
  preparation?: Script<El<HTMLBodyElement>>,
  preparationTask?: ScriptAsync<El<HTMLBodyElement>>,
  finalization?: Script<El<HTMLBodyElement>>,
  signalArgs?: unknown,
  basis?: ReactiveTreeNodeDecl<El<HTMLBodyElement>>): ReactiveTreeNode<El<HTMLBodyElement>> {
  const driver = new StaticDriver(global.document.body as HTMLBodyElement, "Page", false, el => el.kind = ElKind.block)
  return declare(driver, bodyOrDeclaration, bodyTask,
    key, mode, preparation, preparationTask, finalization, signalArgs, basis)
}

// Block

export function Block<M = unknown>(
  body?: Script<El<HTMLElement, M>>,
  bodyTask?: ScriptAsync<El<HTMLElement, M>>,
  key?: string,
  mode?: Mode,
  preparation?: Script<El<HTMLElement, M>>,
  preparationTask?: ScriptAsync<El<HTMLElement, M>>,
  finalization?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  basis?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Block<M = unknown>(
  declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Block<M = unknown>(
  bodyOrDeclaration?: Script<El<HTMLElement, M>> | ReactiveTreeNodeDecl<El<HTMLElement, M>>,
  bodyTask?: ScriptAsync<El<HTMLElement, M>>,
  key?: string,
  mode?: Mode,
  preparation?: Script<El<HTMLElement, M>>,
  preparationTask?: ScriptAsync<El<HTMLElement, M>>,
  finalization?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  basis?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return declare(Drivers.block, bodyOrDeclaration, bodyTask,
    key, mode, preparation, preparationTask, finalization, signalArgs, basis)
}

// Table

export function Table<M = unknown>(
  body?: Script<El<HTMLElement, M>>,
  bodyTask?: ScriptAsync<El<HTMLElement, M>>,
  key?: string,
  mode?: Mode,
  preparation?: Script<El<HTMLElement, M>>,
  preparationTask?: ScriptAsync<El<HTMLElement, M>>,
  finalization?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  basis?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Table<M = unknown>(
  declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Table<M = unknown>(
  bodyOrDeclaration?: Script<El<HTMLElement, M>> | ReactiveTreeNodeDecl<El<HTMLElement, M>>,
  bodyTask?: ScriptAsync<El<HTMLElement, M>>,
  key?: string,
  mode?: Mode,
  preparation?: Script<El<HTMLElement, M>>,
  preparationTask?: ScriptAsync<El<HTMLElement, M>>,
  finalization?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  basis?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return declare(Drivers.table, bodyOrDeclaration, bodyTask,
    key, mode, preparation, preparationTask, finalization, signalArgs, basis)
}

// Partition

export function row<T = void>(builder?: (element: void) => T, shiftCursorDown?: number): void {
  rowBreak(shiftCursorDown)
  builder?.()
}

// Splitter

export function Splitter<M = unknown>(
  body?: Script<El<HTMLElement, M>>,
  bodyTask?: ScriptAsync<El<HTMLElement, M>>,
  key?: string,
  mode?: Mode,
  preparation?: Script<El<HTMLElement, M>>,
  preparationTask?: ScriptAsync<El<HTMLElement, M>>,
  finalization?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  basis?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Splitter<M = unknown>(
  declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Splitter<M = unknown>(
  bodyOrDeclaration?: Script<El<HTMLElement, M>> | ReactiveTreeNodeDecl<El<HTMLElement, M>>,
  bodyTask?: ScriptAsync<El<HTMLElement, M>>,
  key?: string,
  mode?: Mode,
  preparation?: Script<El<HTMLElement, M>>,
  preparationTask?: ScriptAsync<El<HTMLElement, M>>,
  finalization?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  basis?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return declare(Drivers.splitter, bodyOrDeclaration, bodyTask,
    key, mode, preparation, preparationTask, finalization, signalArgs, basis)
}

export function rowBreak(shiftCursorDown?: number): void {
  declare(Drivers.partition)
}

export function declareSplitter<T>(index: number, splitViewNode: ReactiveTreeNode<El<T>>): ReactiveTreeNode<El<HTMLElement>> {
  const key = `splitter-${index}`
  return (
    Splitter({
      key,
      mode: Mode.autonomous,
      preparation() {
        this.native.className = `splitter ${key}`
      },
      body() {
        const e = this.native
        const model = this.model
        const dataForSensor = e.dataForSensor
        dataForSensor.draggable = key
        dataForSensor.drag = key
        Fragment(() => {
          const pointer = e.sensors.pointer
          if (pointer.dragSource === key) {
            if (pointer.dragStarted) {
              if (pointer.draggingOver) {
                // pointer.dropAllowed = true
                pointer.dropAllowed = true
                const initialSizesPx = pointer.getData() as Array<{ node: ReactiveTreeNode<ElImpl>, sizePx: number }>
                const deltaPx = Math.floor(splitViewNode.element.splitView === Direction.horizontal
                  ? pointer.positionX - pointer.startX : pointer.positionY - pointer.startY)

                const clonedSizesPx: Array<{ node: ReactiveTreeNode<ElImpl>, sizePx: number }> = []
                for (const item of initialSizesPx) {
                  clonedSizesPx.push({ node: item.node, sizePx: item.sizePx })
                }

                runNonReactive(() => relayoutUsingSplitter(splitViewNode as any as ReactiveTreeNode<ElImpl>, deltaPx, index, clonedSizesPx))
                if (pointer.dropped) {
                  model?.droppedAction?.(pointer)
                }
              }
              else { // drag started
                e.setAttribute("rx-dragging", "true")
                const initialSizesPx: Array<{ node: ReactiveTreeNode<ElImpl>, sizePx: number }> = []
                for (const item of splitViewNode.children.items()) {
                  const child = item.instance
                  if (isSplitViewPartition(child.driver)) {
                    const sizePx = (child.element as ElImpl).layoutInfo?.effectiveSizePx ?? 0
                    initialSizesPx.push({ node: child as ReactiveTreeNode<ElImpl>, sizePx })
                  }
                }
                // console.log("initial", initialSizesPx.map(x => x.sizePx).join(", "))
                pointer.setData(initialSizesPx)
              }
              if (pointer.dragFinished) {
                model?.dragFinishedAction?.(pointer)
                e.setAttribute("rx-dragging", "false")
              }
            }
          }
        })
      },
    })
  )
}

export function cursor(place: ElPlace): void {
  declare(Drivers.cursor, {
    body() {
      this.place = place
    },
  })
}

// Group

export function Group<M = unknown>(
  body?: Script<El<HTMLElement, M>>,
  bodyTask?: ScriptAsync<El<HTMLElement, M>>,
  key?: string,
  mode?: Mode,
  preparation?: Script<El<HTMLElement, M>>,
  preparationTask?: ScriptAsync<El<HTMLElement, M>>,
  finalization?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  basis?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Group<M = unknown>(
  declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Group<M = unknown>(
  bodyOrDeclaration?: Script<El<HTMLElement, M>> | ReactiveTreeNodeDecl<El<HTMLElement, M>>,
  bodyTask?: ScriptAsync<El<HTMLElement, M>>,
  key?: string,
  mode?: Mode,
  preparation?: Script<El<HTMLElement, M>>,
  preparationTask?: ScriptAsync<El<HTMLElement, M>>,
  finalization?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  basis?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return declare(Drivers.group, bodyOrDeclaration, bodyTask,
    key, mode, preparation, preparationTask, finalization, signalArgs, basis)
}

// Fragment

export function Fragment<M = unknown>(
  body: Script<El<void, M>>): ReactiveTreeNode<El<void, M>> {
  return PseudoElement({ mode: Mode.autonomous, body })
}

export function PseudoElement<M = unknown>(
  body?: Script<El<void, M>>,
  bodyTask?: ScriptAsync<El<void, M>>,
  key?: string,
  mode?: Mode,
  preparation?: Script<El<void, M>>,
  preparationTask?: ScriptAsync<El<void, M>>,
  finalization?: Script<El<void, M>>,
  signalArgs?: unknown,
  basis?: ReactiveTreeNodeDecl<El<void, M>>): ReactiveTreeNode<El<void, M>>

export function PseudoElement<M = unknown>(
  declaration?: ReactiveTreeNodeDecl<El<void, M>>): ReactiveTreeNode<El<void, M>>

export function PseudoElement<M = unknown>(
  bodyOrDeclaration?: Script<El<void, M>> | ReactiveTreeNodeDecl<El<void, M>>,
  bodyTask?: ScriptAsync<El<void, M>>,
  key?: string,
  mode?: Mode,
  preparation?: Script<El<void, M>>,
  preparationTask?: ScriptAsync<El<void, M>>,
  finalization?: Script<El<void, M>>,
  signalArgs?: unknown,
  basis?: ReactiveTreeNodeDecl<El<void, M>>): ReactiveTreeNode<El<void, M>> {
  return declare(Drivers.pseudo, bodyOrDeclaration, bodyTask,
    key, mode, preparation, preparationTask, finalization, signalArgs, basis)
}

// BlockDriver

export class BlockDriver<T extends HTMLElement> extends HtmlDriver<T> {
  override buildBody(node: ReactiveTreeNode<El<T>>): void | Promise<void> {
    rowBreak()
    const el = node.element as ElImpl
    const result = super.buildBody(node)
    if (el.splitView !== undefined) {
      if (el.layoutInfo === undefined)
        el.layoutInfo = new ElLayoutInfo(InitialElLayoutInfo)
      const layoutInfo = el.layoutInfo
      layoutInfo.isUpdateFinished = false
      Fragment(h => {
        const native = el.native as HTMLElement
        const resize = native.sensors.resize
        for (const x of resize.resizedElements) {
          const borderBoxPx = x.borderBoxSize[0]
          const contentBoxPx = x.contentBoxSize[0]
          layoutInfo.borderSizeXpx = borderBoxPx.inlineSize
          layoutInfo.borderSizeYpx = borderBoxPx.blockSize
          layoutInfo.contentSizeXpx = contentBoxPx.inlineSize
          layoutInfo.contentSizeYpx = contentBoxPx.blockSize
        }
      })
      const relayoutEl = PseudoElement({
        mode: Mode.autonomous,
        body() {
          const native = el.native as HTMLElement
          const isHorizontal = el.splitView === Direction.horizontal
          if (layoutInfo.isUpdateFinished) {
            const surroundingXpx = layoutInfo.borderSizeXpx - layoutInfo.contentSizeXpx
            const surroundingYpx = layoutInfo.borderSizeYpx - layoutInfo.contentSizeYpx
            let i = 0
            const preferred: Array<number> = []
            const sizesPx: Array<{ node: ReactiveTreeNode<ElImpl>, sizePx: number }> = []
            for (const child of node.children.items()) {
              const partEl = child.instance.element as ElImpl
              if (isSplitViewPartition(child.instance.driver) && partEl !== undefined) {
                const size = isHorizontal ? partEl.width : partEl.height
                const options: SizeConverterOptions = {
                  axis: isHorizontal ? Axis.X : Axis.Y, lineSizePx: BodyFontSize/* Dimension.lineSizePx */, fontSizePx: BodyFontSize,
                  containerSizeXpx: native.scrollWidth - surroundingXpx, containerSizeYpx: native.scrollHeight - surroundingYpx,
                }
                const minPx = size.min ? toPx(Dimension.parse(size.min), options) : 0
                let maxPx = size.max ? toPx(Dimension.parse(size.max), options) : Number.POSITIVE_INFINITY
                maxPx = Math.max(minPx, maxPx)
                if (partEl.layoutInfo === undefined)
                  partEl.layoutInfo = new ElLayoutInfo(InitialElLayoutInfo)
                if (isHorizontal)
                  partEl.widthPx = { minPx, maxPx }
                else
                  partEl.heightPx = { minPx, maxPx }
                const preferredPx = size.preferred ? toPx(Dimension.parse(size.preferred), options) : 0
                if (preferredPx > 0) {
                  partEl.layoutInfo.effectiveSizePx = preferredPx
                  size.preferred = undefined
                  preferred.push(i)
                }
                // console.log(`%c[${i}]: ${minPx}..%c${partEl.layoutInfo.effectiveSizePx} -> ${clamp(partEl.layoutInfo!.effectiveSizePx, minPx, maxPx)}%c..${maxPx} (pref = ${preferredPx}) (px)`, "color: yellow", "color: #00BB00", "color: yellow")
                const sizePx = partEl.layoutInfo!.effectiveSizePx = clamp(partEl.layoutInfo!.effectiveSizePx, minPx, maxPx)
                sizesPx.push({ node: child.instance as ReactiveTreeNode<ElImpl>, sizePx })
                i++
              }
            }
            const priorities = preferred.length > 0
              ? getPrioritiesForSizeChanging(isHorizontal, node.children as ReconciliationList<ReactiveTreeNode>, preferred)
              : getPrioritiesForEmptySpaceDistribution(isHorizontal, node.children as ReconciliationList<ReactiveTreeNode>)
            runNonReactive(() => relayout(node as any as ReactiveTreeNode<ElImpl>, priorities.resizable, priorities.manuallyResizable, sizesPx))
          }
        },
      })
      ReactiveTreeNode.launchNestedNodesThenDo(() => {
        layoutInfo.isUpdateFinished = true
        // WORKAROUND: As long as "isUpdateFinished = true" does not trigger relaunch of
        // "update" of PseudoElement (such a relaunch requires subscriptions on values
        // of variables rather than variables themselves), we do it manually.
        launch(relayoutEl, { stamp: node.stamp })
      })
    }
    return result
  }

  override declareChild(ownerNode: ReactiveTreeNode<El<T, any>>, childDriver: ReactiveTreeNodeDriver<any>, childDeclaration?: ReactiveTreeNodeDecl<any> | undefined, childBasis?: ReactiveTreeNodeDecl<any> | undefined): LinkedItem<ReactiveTreeNode> | undefined {
    let result: LinkedItem<ReactiveTreeNode> | undefined = undefined
    const el = ownerNode.element as ElImpl
    if (el.splitView !== undefined) {
      if (isSplitViewPartition(childDriver)) {
        let partCount = 0
        for (const child of ownerNode.children.items()) {
          if (isSplitViewPartition(child.instance.driver))
            partCount++
        }
        const isHorizontal = el.splitView === Direction.horizontal
        if (childDeclaration !== undefined) {
          if (childDeclaration.signalArgs === undefined)
            childDeclaration.signalArgs = {}
          Object.defineProperty(childDeclaration.signalArgs, "index", { value: partCount })
          overrideMethod(childDeclaration, "body", el => {
            if (isHorizontal)
              el.style.gridColumn = `${partCount + 1}`
            else
              el.style.gridRow = `${partCount + 1}`
          })
        }
        // console.log(`partCount = ${partCount}`)
        if (partCount > 0)
          declareSplitter(partCount - 1, ownerNode)
      }
    }
    else {
      if (childDriver.isPartition) {
        // Coalesce multiple separators into single one, if any
        const last = ownerNode.children.lastItem()
        if (last?.instance?.driver === childDriver)
          result = last
      }
    }
    return result
  }
}

export function isSplitViewPartition(childDriver: ReactiveTreeNodeDriver): boolean {
  return !childDriver.isPartition && childDriver !== Drivers.splitter && childDriver !== Drivers.pseudo
}

function overrideMethod(declaration: ReactiveTreeNodeDecl<El>, method: "preparation" | "body", func: (this: El, el: El) => void): void {
  const baseScript = declaration[method]
  declaration[method] = baseScript !== undefined
    ? (el, base) => { baseScript.call(el, el, base); func.call(el, el) }
    : (el, base) => { base(); func.call(el, el) }
}

// PartitionDriver

export class PartitionDriver<T extends HTMLElement> extends HtmlDriver<T> {
  override buildBody(node: ReactiveTreeNode<El<T>>): void | Promise<void> {
    const result = super.buildBody(node)
    const ownerEl = node.owner.element as ElImpl
    if (ownerEl.sealed !== undefined) {
      node.element.style.flexGrow = "1"
      declare(Drivers.wrapper, {
        body() {
          const ownerEl = this.node.owner.owner.element as ElImpl
          if (ownerEl.splitView !== undefined) {
            this.style.display = "grid"
            this.style.flexDirection = ""
          }
          else {
            if (ownerEl.isTable) {
              this.style.display = "contents"
              this.style.flexDirection = ""
            }
            else {
              this.style.display = "flex"
              this.style.flexDirection = "row"
            }
          }
          this.style.position = "absolute"
          this.style.inset = "0"
          this.style.overflow = "auto" // TODO: should be user-defined
          this.style.gap = "inherit"
        },
      })
    }
    return result
  }

  override provideHost(node: ReactiveTreeNode<El<T, any>>): ReactiveTreeNode<El<T, any>> {
    let host: ReactiveTreeNode<El<T, any>>
    const ownerEl = node.owner.element as ElImpl
    if (ownerEl.sealed !== undefined)
      host = node.children.firstItem()!.instance as ReactiveTreeNode<El<T, any>>
    else
      host = node
    return host
  }
}

export const Drivers = {
  // display: flex, flex-direction: column
  block: new BlockDriver<HTMLElement>(Constants.element, false, el => el.kind = ElKind.block),

  // display: grid
  table: new HtmlDriver<HTMLElement>(Constants.element, false, el => el.kind = ElKind.table),

  // display: contents
  group: new HtmlDriver<HTMLElement>(Constants.group, false, el => el.kind = ElKind.group),

  // display: flex/row or contents
  partition: new PartitionDriver<HTMLElement>(Constants.partition, true, el => el.kind = ElKind.partition),

  wrapper: new HtmlDriver<HTMLElement>(Constants.wrapper, false, el => el.kind = ElKind.native),

  // position: absolute
  splitter: new HtmlDriver<HTMLElement>(Constants.splitter, false, el => el.kind = ElKind.splitter),

  // cursor control element
  cursor: new CursorCommandDriver(),

  // (no element)
  pseudo: new ElDriver<HTMLElement>("pseudo", false, el => el.kind = ElKind.group) as unknown as ReactiveTreeNodeDriver<El<void, any>>,
}
