// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2026 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, ReactiveTreeNodeDesc, Script, Mode, ScriptAsync, describe } from "reactronic"
import { El } from "../El.js"
import { ElementDriver } from "./Element.js"
import { acquireVerstakStyleSheet } from "./v5k.js"

// ApplicationWindow

export function ApplicationWindow(
  body: Script<El<HTMLElement>>): ReactiveTreeNode<El<HTMLElement>>

export function ApplicationWindow(
  key: string,
  body: Script<El<HTMLElement>>): ReactiveTreeNode<El<HTMLElement>>

export function ApplicationWindow(
  mode: Mode,
  body: Script<El<HTMLElement>>): ReactiveTreeNode<El<HTMLElement>>

export function ApplicationWindow(
  description: ReactiveTreeNodeDesc<El<HTMLElement>>): ReactiveTreeNode<El<HTMLElement>>

export function ApplicationWindow(
  key?: string,
  mode?: Mode,
  body?: Script<El<HTMLElement>>,
  bodyTask?: ScriptAsync<El<HTMLElement>>,
  preparation?: Script<El<HTMLElement>>,
  preparationTask?: ScriptAsync<El<HTMLElement>>,
  mounting?: Script<El<HTMLElement>>,
  finalization?: Script<El<HTMLElement>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement>>): ReactiveTreeNode<El<HTMLElement>>

export function ApplicationWindow(
  bodyOrKeyOrModeDescription?: Script<El<HTMLElement>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement>>,
  bodyOrMode?: Script<El<HTMLElement>> | Mode,
  body?: Script<El<HTMLElement>>,
  bodyTask?: ScriptAsync<El<HTMLElement>>,
  preparation?: Script<El<HTMLElement>>,
  preparationTask?: ScriptAsync<El<HTMLElement>>,
  mounting?: Script<El<HTMLElement>>,
  finalization?: Script<El<HTMLElement>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement>>): ReactiveTreeNode<El<HTMLElement>> {
  //
  acquireVerstakStyleSheet()
  const page = (document ?? global.document).body
  const driver = new ApplicationWindowDriver(page)
  page.classList.add("v5k-app")
  page.classList.add("v5k-element")
  return describe(driver,
    bodyOrKeyOrModeDescription, bodyOrMode, body, bodyTask,
    preparation, preparationTask, mounting, finalization, signalArgs, unmounted, basis)
}

// ApplicationWindowDriver

export class ApplicationWindowDriver<T extends HTMLElement> extends ElementDriver<T> {
  readonly native: T

  constructor(native: T) {
    super()
    this.native = native
  }

  override assignNativeElement(node: ReactiveTreeNode<El<T>>): void {
    node.element.native = this.native
  }
}
