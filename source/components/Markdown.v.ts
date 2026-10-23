// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, ReactiveTreeNodeDesc, Script, Mode, ScriptAsync, args2desc, setBasis } from "reactronic"
import Md from "markdown-it"
import * as prism from "prismjs"
import { Element, El } from "verstak"

export function Markdown(
  content: string,
  setup: Script<El<HTMLElement>>): ReactiveTreeNode<El<HTMLElement>>

export function Markdown(
  content: string,
  key: string,
  setup: Script<El<HTMLElement>>): ReactiveTreeNode<El<HTMLElement>>

export function Markdown(
  content: string,
  mode: Mode,
  setup: Script<El<HTMLElement>>): ReactiveTreeNode<El<HTMLElement>>

export function Markdown(
  content: string,
  description: ReactiveTreeNodeDesc<El<HTMLElement>>): ReactiveTreeNode<El<HTMLElement>>

export function Markdown(
  content: string,
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement>>,
  setupTask?: ScriptAsync<El<HTMLElement>>,
  creation?: Script<El<HTMLElement>>,
  creationTask?: ScriptAsync<El<HTMLElement>>,
  mounting?: Script<El<HTMLElement>>,
  destruction?: Script<El<HTMLElement>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement>>): ReactiveTreeNode<El<HTMLElement>>

export function Markdown(
  content: string,
  setupOrKeyOrModeDescription?: Script<El<HTMLElement>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement>>,
  setupOrMode?: Script<El<HTMLElement>> | Mode,
  setup?: Script<El<HTMLElement>>,
  setupTask?: ScriptAsync<El<HTMLElement>>,
  creation?: Script<El<HTMLElement>>,
  creationTask?: ScriptAsync<El<HTMLElement>>,
  mounting?: Script<El<HTMLElement>>,
  destruction?: Script<El<HTMLElement>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement>>): ReactiveTreeNode<El<HTMLElement>> {
  //
  const description = args2desc(
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
  return (
    Element(setBasis(description, {
      creation(el, base) {
        this.contentWrapping = true
        // b.native.setAttribute("markdown", "true")
        base()
      },
      setup() {
        this.textIsFormatted = true
        this.text = md.render(content)
      },
    }))
  )
}

const md = new Md({
  html: true,
  highlight: (str: string, lang: string, attrs: string) => {
    const highlighted = prism.highlight(str, prism.languages[lang], lang)
    return `<pre class="language-${lang}"><code>${highlighted}</code></pre>`
  },
})
