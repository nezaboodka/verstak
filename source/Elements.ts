// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveNodeDecl, ReactiveNodeDriver, ReactiveNode, Script, Mode, MergeList, MergedItem, unobs, ScriptAsync } from "reactronic"
import { El, ElKind, ElPlace, Direction } from "./core/El.js"
import { clamp } from "./core/ElUtils.js"
import { Constants, CursorCommandDriver, ElDriver, ElImpl, ElLayoutInfo, InitialElLayoutInfo } from "./core/ElDriver.js"
import { getPrioritiesForEmptySpaceDistribution, getPrioritiesForSizeChanging, relayout, relayoutUsingSplitter } from "./html/SplitViewMath.js"
import { Axis, BodyFontSize, Dimension, SizeConverterOptions, toPx } from "./core/Sizes.js"
import { HtmlDriver, StaticDriver } from "./core/WebDriver.js"

// Verstak is based on two fundamental layout structures
// called panel and table; and on two special non-visual
// elements called partition and group.

// Window is a root element, which element tree starts
// from.

// Panel is a layout structure, which children are layed
// out naturally: rightwards-downwards.

// Table is layout structure, which children are layed out
// over table cells.

// Partition is a special non-visual element, which begins
// new layout partition inside panel or table.

// Note is either plain or markdown-formatted text
// supporting syntax highlighting for code blocks.

// Group is a special non-visual element for logical
// grouping of panels, tables and other groups.

// Window

export function Window(
  content?: Script<El<HTMLBodyElement>>,
  contentAsync?: ScriptAsync<El<HTMLBodyElement>>,
  key?: string,
  mode?: Mode,
  preparation?: Script<El<HTMLBodyElement>>,
  preparationAsync?: ScriptAsync<El<HTMLBodyElement>>,
  finalization?: Script<El<HTMLBodyElement>>,
  triggers?: unknown,
  basis?: ReactiveNodeDecl<El<HTMLBodyElement>>): ReactiveNode<El<HTMLBodyElement>>

export function Window(
  declaration?: ReactiveNodeDecl<El<HTMLBodyElement>>): ReactiveNode<El<HTMLBodyElement>>

export function Window(
  contentOrDeclaration?: Script<El<HTMLBodyElement>> | ReactiveNodeDecl<El<HTMLBodyElement>>,
  contentAsync?: ScriptAsync<El<HTMLBodyElement>>,
  key?: string,
  mode?: Mode,
  preparation?: Script<El<HTMLBodyElement>>,
  preparationAsync?: ScriptAsync<El<HTMLBodyElement>>,
  finalization?: Script<El<HTMLBodyElement>>,
  triggers?: unknown,
  basis?: ReactiveNodeDecl<El<HTMLBodyElement>>): ReactiveNode<El<HTMLBodyElement>> {
  const driver = new StaticDriver(global.document.body as HTMLBodyElement, "Page", false, el => el.kind = ElKind.panel)
  return ReactiveNode.declare(driver, contentOrDeclaration, contentAsync,
    key, mode, preparation, preparationAsync, finalization, triggers, basis)
}

// Panel

export function Panel<M = unknown>(
  content?: Script<El<HTMLElement, M>>,
  contentAsync?: ScriptAsync<El<HTMLElement, M>>,
  key?: string,
  mode?: Mode,
  preparation?: Script<El<HTMLElement, M>>,
  preparationAsync?: ScriptAsync<El<HTMLElement, M>>,
  finalization?: Script<El<HTMLElement, M>>,
  triggers?: unknown,
  basis?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>>

export function Panel<M = unknown>(
  declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>>

export function Panel<M = unknown>(
  contentOrDeclaration?: Script<El<HTMLElement, M>> | ReactiveNodeDecl<El<HTMLElement, M>>,
  contentAsync?: ScriptAsync<El<HTMLElement, M>>,
  key?: string,
  mode?: Mode,
  preparation?: Script<El<HTMLElement, M>>,
  preparationAsync?: ScriptAsync<El<HTMLElement, M>>,
  finalization?: Script<El<HTMLElement, M>>,
  triggers?: unknown,
  basis?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> {
  return ReactiveNode.declare(Drivers.panel, contentOrDeclaration, contentAsync,
    key, mode, preparation, preparationAsync, finalization, triggers, basis)
}

// Table

export function Table<M = unknown>(
  content?: Script<El<HTMLElement, M>>,
  contentAsync?: ScriptAsync<El<HTMLElement, M>>,
  key?: string,
  mode?: Mode,
  preparation?: Script<El<HTMLElement, M>>,
  preparationAsync?: ScriptAsync<El<HTMLElement, M>>,
  finalization?: Script<El<HTMLElement, M>>,
  triggers?: unknown,
  basis?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>>

export function Table<M = unknown>(
  declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>>

export function Table<M = unknown>(
  contentOrDeclaration?: Script<El<HTMLElement, M>> | ReactiveNodeDecl<El<HTMLElement, M>>,
  contentAsync?: ScriptAsync<El<HTMLElement, M>>,
  key?: string,
  mode?: Mode,
  preparation?: Script<El<HTMLElement, M>>,
  preparationAsync?: ScriptAsync<El<HTMLElement, M>>,
  finalization?: Script<El<HTMLElement, M>>,
  triggers?: unknown,
  basis?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> {
  return ReactiveNode.declare(Drivers.table, contentOrDeclaration, contentAsync,
    key, mode, preparation, preparationAsync, finalization, triggers, basis)
}

// Partition

export function row<T = void>(builder?: (element: void) => T, shiftCursorDown?: number): void {
  rowBreak(shiftCursorDown)
  builder?.()
}

// Splitter

export function Splitter<M = unknown>(
  content?: Script<El<HTMLElement, M>>,
  contentAsync?: ScriptAsync<El<HTMLElement, M>>,
  key?: string,
  mode?: Mode,
  preparation?: Script<El<HTMLElement, M>>,
  preparationAsync?: ScriptAsync<El<HTMLElement, M>>,
  finalization?: Script<El<HTMLElement, M>>,
  triggers?: unknown,
  basis?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>>

export function Splitter<M = unknown>(
  declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>>

export function Splitter<M = unknown>(
  contentOrDeclaration?: Script<El<HTMLElement, M>> | ReactiveNodeDecl<El<HTMLElement, M>>,
  contentAsync?: ScriptAsync<El<HTMLElement, M>>,
  key?: string,
  mode?: Mode,
  preparation?: Script<El<HTMLElement, M>>,
  preparationAsync?: ScriptAsync<El<HTMLElement, M>>,
  finalization?: Script<El<HTMLElement, M>>,
  triggers?: unknown,
  basis?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> {
  return ReactiveNode.declare(Drivers.splitter, contentOrDeclaration, contentAsync,
    key, mode, preparation, preparationAsync, finalization, triggers, basis)
}

export function rowBreak(shiftCursorDown?: number): void {
  ReactiveNode.declare(Drivers.partition)
}

export function declareSplitter<T>(index: number, splitViewNode: ReactiveNode<El<T>>): ReactiveNode<El<HTMLElement>> {
  const key = `splitter-${index}`
  return (
    Splitter({
      key,
      mode: Mode.autonomous,
      preparation: el => el.native.className = `splitter ${key}`,
      content: b => {
        const e = b.native
        const model = b.model
        const dataForSensor = e.dataForSensor
        dataForSensor.draggable = key
        dataForSensor.drag = key
        Handling(() => {
          const pointer = e.sensors.pointer
          if (pointer.dragSource === key) {
            if (pointer.dragStarted) {
              if (pointer.draggingOver) {
                // pointer.dropAllowed = true
                pointer.dropAllowed = true
                const initialSizesPx = pointer.getData() as Array<{ node: ReactiveNode<ElImpl>, sizePx: number }>
                const deltaPx = Math.floor(splitViewNode.element.splitView === Direction.horizontal
                  ? pointer.positionX - pointer.startX : pointer.positionY - pointer.startY)

                const clonedSizesPx: Array<{ node: ReactiveNode<ElImpl>, sizePx: number }> = []
                for (const item of initialSizesPx) {
                  clonedSizesPx.push({ node: item.node, sizePx: item.sizePx })
                }

                unobs(() => relayoutUsingSplitter(splitViewNode as any as ReactiveNode<ElImpl>, deltaPx, index, clonedSizesPx))
                if (pointer.dropped) {
                  model?.droppedAction?.(pointer)
                }
              }
              else { // drag started
                e.setAttribute("rx-dragging", "true")
                const initialSizesPx: Array<{ node: ReactiveNode<ElImpl>, sizePx: number }> = []
                for (const item of splitViewNode.children.items()) {
                  const child = item.instance
                  if (isSplitViewPartition(child.driver)) {
                    const sizePx = (child.element as ElImpl).layoutInfo?.effectiveSizePx ?? 0
                    initialSizesPx.push({ node: child as ReactiveNode<ElImpl>, sizePx })
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

export function cursor(areaParams: ElPlace): void {
  ReactiveNode.declare(Drivers.cursor, {
    content: el => {
      el.place = areaParams
    },
  })
}

// Note (either plain or html)

export function Note(content: string, formatted?: boolean,
  declaration?: ReactiveNodeDecl<El<HTMLElement, void>>): ReactiveNode<El<HTMLElement, void>> {
  return ReactiveNode.declare(Drivers.note, ReactiveNode.withBasis(declaration, {
    content: el => {
      if (formatted)
        el.native.innerHTML = content
      else
        el.native.innerText = content
    },
  }))
}

// Group

export function Group<M = unknown>(
  content?: Script<El<HTMLElement, M>>,
  contentAsync?: ScriptAsync<El<HTMLElement, M>>,
  key?: string,
  mode?: Mode,
  preparation?: Script<El<HTMLElement, M>>,
  preparationAsync?: ScriptAsync<El<HTMLElement, M>>,
  finalization?: Script<El<HTMLElement, M>>,
  triggers?: unknown,
  basis?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>>

export function Group<M = unknown>(
  declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>>

export function Group<M = unknown>(
  contentOrDeclaration?: Script<El<HTMLElement, M>> | ReactiveNodeDecl<El<HTMLElement, M>>,
  contentAsync?: ScriptAsync<El<HTMLElement, M>>,
  key?: string,
  mode?: Mode,
  preparation?: Script<El<HTMLElement, M>>,
  preparationAsync?: ScriptAsync<El<HTMLElement, M>>,
  finalization?: Script<El<HTMLElement, M>>,
  triggers?: unknown,
  basis?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> {
  return ReactiveNode.declare(Drivers.group, contentOrDeclaration, contentAsync,
    key, mode, preparation, preparationAsync, finalization, triggers, basis)
}

// Fragment

export function Handling<M = unknown>(
  content: Script<El<void, M>>): ReactiveNode<El<void, M>> {
  return SyntheticElement({ mode: Mode.autonomous, content })
}

export function SyntheticElement<M = unknown>(
  content?: Script<El<void, M>>,
  contentAsync?: ScriptAsync<El<void, M>>,
  key?: string,
  mode?: Mode,
  preparation?: Script<El<void, M>>,
  preparationAsync?: ScriptAsync<El<void, M>>,
  finalization?: Script<El<void, M>>,
  triggers?: unknown,
  basis?: ReactiveNodeDecl<El<void, M>>): ReactiveNode<El<void, M>>

export function SyntheticElement<M = unknown>(
  declaration?: ReactiveNodeDecl<El<void, M>>): ReactiveNode<El<void, M>>

export function SyntheticElement<M = unknown>(
  contentOrDeclaration?: Script<El<void, M>> | ReactiveNodeDecl<El<void, M>>,
  contentAsync?: ScriptAsync<El<void, M>>,
  key?: string,
  mode?: Mode,
  preparation?: Script<El<void, M>>,
  preparationAsync?: ScriptAsync<El<void, M>>,
  finalization?: Script<El<void, M>>,
  triggers?: unknown,
  basis?: ReactiveNodeDecl<El<void, M>>): ReactiveNode<El<void, M>> {
  return ReactiveNode.declare(Drivers.synthetic, contentOrDeclaration, contentAsync,
    key, mode, preparation, preparationAsync, finalization, triggers, basis)
}

// PanelDriver

export class PanelDriver<T extends HTMLElement> extends HtmlDriver<T> {
  update(node: ReactiveNode<El<T>>): void | Promise<void> {
    rowBreak()
    const el = node.element as ElImpl
    const result = super.update(node)
    if (el.splitView !== undefined) {
      if (el.layoutInfo === undefined)
        el.layoutInfo = new ElLayoutInfo(InitialElLayoutInfo)
      const layoutInfo = el.layoutInfo
      layoutInfo.isUpdateFinished = false
      Handling(h => {
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
      const relayoutEl = SyntheticElement({
        mode: Mode.autonomous,
        content: () => {
          const native = el.native as HTMLElement
          const isHorizontal = el.splitView === Direction.horizontal
          if (layoutInfo.isUpdateFinished) {
            const surroundingXpx = layoutInfo.borderSizeXpx - layoutInfo.contentSizeXpx
            const surroundingYpx = layoutInfo.borderSizeYpx - layoutInfo.contentSizeYpx
            let i = 0
            const preferred: Array<number> = []
            const sizesPx: Array<{ node: ReactiveNode<ElImpl>, sizePx: number }> = []
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
                sizesPx.push({ node: child.instance as ReactiveNode<ElImpl>, sizePx })
                i++
              }
            }
            const priorities = preferred.length > 0
              ? getPrioritiesForSizeChanging(isHorizontal, node.children as MergeList<ReactiveNode>, preferred)
              : getPrioritiesForEmptySpaceDistribution(isHorizontal, node.children as MergeList<ReactiveNode>)
            unobs(() => relayout(node as any as ReactiveNode<ElImpl>, priorities.resizable, priorities.manuallyResizable, sizesPx))
          }
        },
      })
      ReactiveNode.updateNestedNodesThenDo(() => {
        layoutInfo.isUpdateFinished = true
        // WORKAROUND: As long as "isUpdateFinished = true" does not trigger relaunch of
        // "update" of SyntheticElement (such a relaunch requires subscriptions on values
        // of variables rather than variables themselves), we do it manually.
        ReactiveNode.triggerUpdate(relayoutEl, { stamp: node.stamp })
      })
    }
    return result
  }

  child(ownerNode: ReactiveNode<El<T, any>>, childDriver: ReactiveNodeDriver<any>, childDeclaration?: ReactiveNodeDecl<any> | undefined, childBasis?: ReactiveNodeDecl<any> | undefined): MergedItem<ReactiveNode> | undefined {
    let result: MergedItem<ReactiveNode> | undefined = undefined
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
          if (childDeclaration.triggers === undefined)
            childDeclaration.triggers = {}
          Object.defineProperty(childDeclaration.triggers, "index", { value: partCount })
          overrideMethod(childDeclaration, "content", el => {
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
        const last = ownerNode.children.lastMergedItem()
        if (last?.instance?.driver === childDriver)
          result = last
      }
    }
    return result
  }
}

export function isSplitViewPartition(childDriver: ReactiveNodeDriver): boolean {
  return !childDriver.isPartition && childDriver !== Drivers.splitter && childDriver !== Drivers.synthetic
}

function overrideMethod(declaration: ReactiveNodeDecl<El>, method: "preparation" | "content", func: (el: El) => void): void {
  const baseScript = declaration[method]
  declaration[method] = baseScript !== undefined
    ? (el, base) => { baseScript(el, base); func(el) }
    : (el, base) => { base(); func(el) }
}

// PartitionDriver

export class PartitionDriver<T extends HTMLElement> extends HtmlDriver<T> {
  update(node: ReactiveNode<El<T>>): void | Promise<void> {
    const result = super.update(node)
    const ownerEl = node.owner.element as ElImpl
    if (ownerEl.sealed !== undefined) {
      node.element.style.flexGrow = "1"
      ReactiveNode.declare(Drivers.wrapper, {
        content: el => {
          const ownerEl = el.node.owner.owner.element as ElImpl
          if (ownerEl.splitView !== undefined) {
            el.style.display = "grid"
            el.style.flexDirection = ""
          }
          else {
            if (ownerEl.isTable) {
              el.style.display = "contents"
              el.style.flexDirection = ""
            }
            else {
              el.style.display = "flex"
              el.style.flexDirection = "row"
            }
          }
          el.style.position = "absolute"
          el.style.inset = "0"
          el.style.overflow = "auto" // TODO: should be user-defined
          el.style.gap = "inherit"
        },
      })
    }
    return result
  }

  provideHost(node: ReactiveNode<El<T, any>>): ReactiveNode<El<T, any>> {
    let host: ReactiveNode<El<T, any>>
    const ownerEl = node.owner.element as ElImpl
    if (ownerEl.sealed !== undefined)
      host = node.children.firstMergedItem()!.instance as ReactiveNode<El<T, any>>
    else
      host = node
    return host
  }
}

export const Drivers = {
  // display: flex, flex-direction: column
  panel: new PanelDriver<HTMLElement>(Constants.element, false, el => el.kind = ElKind.panel),

  // display: grid
  table: new HtmlDriver<HTMLElement>(Constants.element, false, el => el.kind = ElKind.table),

  // display: block
  note: new HtmlDriver<HTMLElement>(Constants.element, false, el => el.kind = ElKind.note),

  // display: contents
  group: new HtmlDriver<HTMLElement>(Constants.group, false, el => el.kind = ElKind.group),

  // display: flex/row or contents
  partition: new PartitionDriver<HTMLElement>(Constants.partition, true, el => el.kind = ElKind.part),

  wrapper: new HtmlDriver<HTMLElement>(Constants.wrapper, false, el => el.kind = ElKind.native),

  // position: absolute
  splitter: new HtmlDriver<HTMLElement>(Constants.splitter, false, el => el.kind = ElKind.splitter),

  // cursor control element
  cursor: new CursorCommandDriver(),

  // (no element)
  synthetic: new ElDriver<HTMLElement>("synthetic", false, el => el.kind = ElKind.group) as unknown as ReactiveNodeDriver<El<void, any>>,
}
