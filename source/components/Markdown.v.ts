// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2022-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { JustText } from "verstak"
import Md from "markdown-it"
import * as prism from "prismjs"

export function Markdown(content: string) {
  return (
    JustText(md.render(content), true, {
      preparation: (el, base) => {
        el.contentWrapping = true
        // b.native.setAttribute("markdown", "true")
        base()
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
