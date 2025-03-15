// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveNodeDecl, ReactiveNodeDriver, ReactiveNode, Script, Mode, MergeList, MergedItem, nonReactiveRun, ScriptAsync } from "reactronic"
import { El, ElKind, ElPlace, Direction } from "./El.js"
import { clamp } from "./ElUtils.js"
import { Constants, CursorCommandDriver, ElDriver, ElImpl, ElLayoutInfo, InitialElLayoutInfo } from "./ElDriver.js"
import { getPrioritiesForEmptySpaceDistribution, getPrioritiesForSizeChanging, relayout, relayoutUsingSplitter } from "./SplitViewMath.js"
import { Axis, BodyFontSize, Dimension, SizeConverterOptions, toPx } from "./Sizes.js"
import { HtmlDriver, StaticDriver } from "./WebDriver.js"

// Verstak is based on two fundamental layout structures
// called division and table; and on two special non-visual
// elements called partition and group.

// Window is a root element, which element tree starts
// from.

// Division is a layout structure, which children are laid
// out naturally: rightwards-downwards.

// Table is layout structure, which children are laid out
// over table cells.

// Partition is a special non-visual element, which begins
// new layout partition inside division or table.

// TextBlock is either plain or markdown-formatted text
// supporting syntax highlighting for code blocks.

// Group is a special non-visual element for logical
// grouping of divisions, tables and other groups.

// Window

export function Window(
  script?: Script<El<HTMLBodyElement>>,
  scriptAsync?: ScriptAsync<El<HTMLBodyElement>>,
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
  scriptOrDeclaration?: Script<El<HTMLBodyElement>> | ReactiveNodeDecl<El<HTMLBodyElement>>,
  scriptAsync?: ScriptAsync<El<HTMLBodyElement>>,
  key?: string,
  mode?: Mode,
  preparation?: Script<El<HTMLBodyElement>>,
  preparationAsync?: ScriptAsync<El<HTMLBodyElement>>,
  finalization?: Script<El<HTMLBodyElement>>,
  triggers?: unknown,
  basis?: ReactiveNodeDecl<El<HTMLBodyElement>>): ReactiveNode<El<HTMLBodyElement>> {
  const driver = new StaticDriver(global.document.body as HTMLBodyElement, "Page", false, el => el.kind = ElKind.division)
  return ReactiveNode.declare(driver, scriptOrDeclaration, scriptAsync,
    key, mode, preparation, preparationAsync, finalization, triggers, basis)
}

// Division

export function Division<M = unknown>(
  script?: Script<El<HTMLElement, M>>,
  scriptAsync?: ScriptAsync<El<HTMLElement, M>>,
  key?: string,
  mode?: Mode,
  preparation?: Script<El<HTMLElement, M>>,
  preparationAsync?: ScriptAsync<El<HTMLElement, M>>,
  finalization?: Script<El<HTMLElement, M>>,
  triggers?: unknown,
  basis?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>>

export function Division<M = unknown>(
  declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>>

export function Division<M = unknown>(
  scriptOrDeclaration?: Script<El<HTMLElement, M>> | ReactiveNodeDecl<El<HTMLElement, M>>,
  scriptAsync?: ScriptAsync<El<HTMLElement, M>>,
  key?: string,
  mode?: Mode,
  preparation?: Script<El<HTMLElement, M>>,
  preparationAsync?: ScriptAsync<El<HTMLElement, M>>,
  finalization?: Script<El<HTMLElement, M>>,
  triggers?: unknown,
  basis?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> {
  return ReactiveNode.declare(Drivers.division, scriptOrDeclaration, scriptAsync,
    key, mode, preparation, preparationAsync, finalization, triggers, basis)
}

// Table

export function Table<M = unknown>(
  script?: Script<El<HTMLElement, M>>,
  scriptAsync?: ScriptAsync<El<HTMLElement, M>>,
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
  scriptOrDeclaration?: Script<El<HTMLElement, M>> | ReactiveNodeDecl<El<HTMLElement, M>>,
  scriptAsync?: ScriptAsync<El<HTMLElement, M>>,
  key?: string,
  mode?: Mode,
  preparation?: Script<El<HTMLElement, M>>,
  preparationAsync?: ScriptAsync<El<HTMLElement, M>>,
  finalization?: Script<El<HTMLElement, M>>,
  triggers?: unknown,
  basis?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> {
  return ReactiveNode.declare(Drivers.table, scriptOrDeclaration, scriptAsync,
    key, mode, preparation, preparationAsync, finalization, triggers, basis)
}

// Partition

export function row<T = void>(builder?: (element: void) => T, shiftCursorDown?: number): void {
  rowBreak(shiftCursorDown)
  builder?.()
}

// Splitter

export function Splitter<M = unknown>(
  script?: Script<El<HTMLElement, M>>,
  scriptAsync?: ScriptAsync<El<HTMLElement, M>>,
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
  scriptOrDeclaration?: Script<El<HTMLElement, M>> | ReactiveNodeDecl<El<HTMLElement, M>>,
  scriptAsync?: ScriptAsync<El<HTMLElement, M>>,
  key?: string,
  mode?: Mode,
  preparation?: Script<El<HTMLElement, M>>,
  preparationAsync?: ScriptAsync<El<HTMLElement, M>>,
  finalization?: Script<El<HTMLElement, M>>,
  triggers?: unknown,
  basis?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> {
  return ReactiveNode.declare(Drivers.splitter, scriptOrDeclaration, scriptAsync,
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
      script: b => {
        const e = b.native
        const model = b.model
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
                const initialSizesPx = pointer.getData() as Array<{ node: ReactiveNode<ElImpl>, sizePx: number }>
                const deltaPx = Math.floor(splitViewNode.element.splitView === Direction.horizontal
                  ? pointer.positionX - pointer.startX : pointer.positionY - pointer.startY)

                const clonedSizesPx: Array<{ node: ReactiveNode<ElImpl>, sizePx: number }> = []
                for (const item of initialSizesPx) {
                  clonedSizesPx.push({ node: item.node, sizePx: item.sizePx })
                }

                nonReactiveRun(() => relayoutUsingSplitter(splitViewNode as any as ReactiveNode<ElImpl>, deltaPx, index, clonedSizesPx))
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

export function cursor(place: ElPlace): void {
  ReactiveNode.declare(Drivers.cursor, {
    script: el => {
      el.place = place
    },
  })
}

// JustText (either plain or html)

export function JustText(content: string, formatted?: boolean,
  declaration?: ReactiveNodeDecl<El<HTMLElement, void>>): ReactiveNode<El<HTMLElement, void>> {
  return ReactiveNode.declare(Drivers.text, ReactiveNode.withBasis(declaration, {
    script: el => {
      if (formatted)
        el.native.innerHTML = content
      else
        el.native.innerText = content
    },
  }))
}

// Group

export function Group<M = unknown>(
  script?: Script<El<HTMLElement, M>>,
  scriptAsync?: ScriptAsync<El<HTMLElement, M>>,
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
  scriptOrDeclaration?: Script<El<HTMLElement, M>> | ReactiveNodeDecl<El<HTMLElement, M>>,
  scriptAsync?: ScriptAsync<El<HTMLElement, M>>,
  key?: string,
  mode?: Mode,
  preparation?: Script<El<HTMLElement, M>>,
  preparationAsync?: ScriptAsync<El<HTMLElement, M>>,
  finalization?: Script<El<HTMLElement, M>>,
  triggers?: unknown,
  basis?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> {
  return ReactiveNode.declare(Drivers.group, scriptOrDeclaration, scriptAsync,
    key, mode, preparation, preparationAsync, finalization, triggers, basis)
}

// Fragment

export function Fragment<M = unknown>(
  script: Script<El<void, M>>): ReactiveNode<El<void, M>> {
  return PseudoElement({ mode: Mode.autonomous, script })
}

export function PseudoElement<M = unknown>(
  script?: Script<El<void, M>>,
  scriptAsync?: ScriptAsync<El<void, M>>,
  key?: string,
  mode?: Mode,
  preparation?: Script<El<void, M>>,
  preparationAsync?: ScriptAsync<El<void, M>>,
  finalization?: Script<El<void, M>>,
  triggers?: unknown,
  basis?: ReactiveNodeDecl<El<void, M>>): ReactiveNode<El<void, M>>

export function PseudoElement<M = unknown>(
  declaration?: ReactiveNodeDecl<El<void, M>>): ReactiveNode<El<void, M>>

export function PseudoElement<M = unknown>(
  scriptOrDeclaration?: Script<El<void, M>> | ReactiveNodeDecl<El<void, M>>,
  scriptAsync?: ScriptAsync<El<void, M>>,
  key?: string,
  mode?: Mode,
  preparation?: Script<El<void, M>>,
  preparationAsync?: ScriptAsync<El<void, M>>,
  finalization?: Script<El<void, M>>,
  triggers?: unknown,
  basis?: ReactiveNodeDecl<El<void, M>>): ReactiveNode<El<void, M>> {
  return ReactiveNode.declare(Drivers.pseudo, scriptOrDeclaration, scriptAsync,
    key, mode, preparation, preparationAsync, finalization, triggers, basis)
}

// DivisionDriver

export class DivisionDriver<T extends HTMLElement> extends HtmlDriver<T> {
  override runScript(node: ReactiveNode<El<T>>): void | Promise<void> {
    rowBreak()
    const el = node.element as ElImpl
    const result = super.runScript(node)
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
        script: () => {
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
            nonReactiveRun(() => relayout(node as any as ReactiveNode<ElImpl>, priorities.resizable, priorities.manuallyResizable, sizesPx))
          }
        },
      })
      ReactiveNode.runNestedNodeScriptsThenDo(() => {
        layoutInfo.isUpdateFinished = true
        // WORKAROUND: As long as "isUpdateFinished = true" does not trigger relaunch of
        // "update" of PseudoElement (such a relaunch requires subscriptions on values
        // of variables rather than variables themselves), we do it manually.
        ReactiveNode.triggerScriptRun(relayoutEl, { stamp: node.stamp })
      })
    }
    return result
  }

  override declareChild(ownerNode: ReactiveNode<El<T, any>>, childDriver: ReactiveNodeDriver<any>, childDeclaration?: ReactiveNodeDecl<any> | undefined, childBasis?: ReactiveNodeDecl<any> | undefined): MergedItem<ReactiveNode> | undefined {
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
          overrideMethod(childDeclaration, "script", el => {
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
  return !childDriver.isPartition && childDriver !== Drivers.splitter && childDriver !== Drivers.pseudo
}

function overrideMethod(declaration: ReactiveNodeDecl<El>, method: "preparation" | "script", func: (el: El) => void): void {
  const baseScript = declaration[method]
  declaration[method] = baseScript !== undefined
    ? (el, base) => { baseScript(el, base); func(el) }
    : (el, base) => { base(); func(el) }
}

// PartitionDriver

export class PartitionDriver<T extends HTMLElement> extends HtmlDriver<T> {
  override runScript(node: ReactiveNode<El<T>>): void | Promise<void> {
    const result = super.runScript(node)
    const ownerEl = node.owner.element as ElImpl
    if (ownerEl.sealed !== undefined) {
      node.element.style.flexGrow = "1"
      ReactiveNode.declare(Drivers.wrapper, {
        script: el => {
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

  override provideHost(node: ReactiveNode<El<T, any>>): ReactiveNode<El<T, any>> {
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
  division: new DivisionDriver<HTMLElement>(Constants.element, false, el => el.kind = ElKind.division),

  // display: grid
  table: new HtmlDriver<HTMLElement>(Constants.element, false, el => el.kind = ElKind.table),

  // display: block
  text: new HtmlDriver<HTMLElement>(Constants.element, false, el => el.kind = ElKind.text),

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
  pseudo: new ElDriver<HTMLElement>("pseudo", false, el => el.kind = ElKind.group) as unknown as ReactiveNodeDriver<El<void, any>>,
}
