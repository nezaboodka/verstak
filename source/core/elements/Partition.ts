// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2026 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, describe } from "reactronic"
import { El, ElKind } from "../El.js"
import { ElImpl } from "../ElDriver.js"
import { HtmlDriver } from "../WebDriver.js"

// Partition

export function row<T = void>(builder?: (element: void) => T, shiftCursorDown?: number): void {
  rowBreak(shiftCursorDown)
  builder?.()
}

export function rowBreak(shiftCursorDown?: number): void {
  describe("RowBreak", PartitionDriver.glob, {})
}

// PartitionDriver (display: flex/row or contents)

export class PartitionDriver<T extends HTMLElement> extends HtmlDriver<T> {
  static readonly id = "part"
  static readonly glob = new PartitionDriver<HTMLElement>()

  constructor() {
    super(PartitionDriver.id, true, el => el.kind = ElKind.partition)
  }

  override runSetup(node: ReactiveTreeNode<El<T>>): void | Promise<void> {
    const result = super.runSetup(node)
    const ownerEl = node.owner.element as ElImpl
    if (ownerEl.sealed !== undefined) {
      node.element.style.flexGrow = "1"
      describe("Wrapper", WrapperDriver.glob, {
        setup() {
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
      host = node.children.firstItem as ReactiveTreeNode<El<T, any>>
    else
      host = node
    return host
  }
}

export class WrapperDriver extends HtmlDriver<HTMLElement> {
  static readonly id = "wrapper"
  static readonly glob = new WrapperDriver()

  constructor() {
    super(WrapperDriver.id, false, el => el.kind = ElKind.native)
  }
}
