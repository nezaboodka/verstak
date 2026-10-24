// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, ReactiveTreeNodeDesc, Script, Mode, ScriptTask, args2desc } from "reactronic"
import Md from "markdown-it"
import * as prism from "prismjs"
import { Element, El } from "verstak"

// Markdown

export function Markdown<D = unknown>(
  content: string,
  setup: Script<El<HTMLElement, any, D>>,
  setupTask?: ScriptTask<El<HTMLElement, any, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, any, D>>): ReactiveTreeNode<El<HTMLElement, any, D>>

export function Markdown<D = unknown>(
  content: string,
  key: string,
  setup: Script<El<HTMLElement, any, D>>,
  setupTask?: ScriptTask<El<HTMLElement, any, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, any, D>>): ReactiveTreeNode<El<HTMLElement, any, D>>

export function Markdown<D = unknown>(
  content: string,
  mode: Mode,
  setup: Script<El<HTMLElement, any, D>>,
  setupTask?: ScriptTask<El<HTMLElement, any, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, any, D>>): ReactiveTreeNode<El<HTMLElement, any, D>>

export function Markdown<D = unknown>(
  content: string,
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, any, D>>,
  setupTask?: ScriptTask<El<HTMLElement, any, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, any, D>>): ReactiveTreeNode<El<HTMLElement, any, D>>

export function Markdown<D = unknown>(
  content: string,
  description?: ReactiveTreeNodeDesc<El<HTMLElement, any, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, any, D>>): ReactiveTreeNode<El<HTMLElement, any, D>>

export function Markdown<D = unknown>(
  content: string,
  p1?: Script<El<HTMLElement, any, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, any, D>>,
  p2?: Script<El<HTMLElement, any, D>> | ScriptTask<El<HTMLElement, any, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, any, D>>,
  p3?: Script<El<HTMLElement, any, D>> | ScriptTask<El<HTMLElement, any, D>> | ReactiveTreeNodeDesc<El<HTMLElement, any, D>>,
  p4?: ScriptTask<El<HTMLElement, any, D>> | ReactiveTreeNodeDesc<El<HTMLElement, any, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, any, D>>): ReactiveTreeNode<El<HTMLElement, any, D>> {
  //
  const description = args2desc(Markdown.name, p1, p2, p3, p4, p5)
  return (
    Element<any, D>(description, {
      creation(el, base) {
        this.contentWrapping = true
        // b.native.setAttribute("markdown", "true")
        base()
      },
      setup() {
        this.textIsFormatted = true
        this.text = md.render(content)
      },
    })
  )
}

const md = new Md({
  html: true,
  highlight: (str: string, lang: string, attrs: string) => {
    const highlighted = prism.highlight(str, prism.languages[lang], lang)
    return `<pre class="language-${lang}"><code>${highlighted}</code></pre>`
  },
})
