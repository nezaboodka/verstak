// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Block, Reaction, Inline, Render, StaticBlockFactory, BlockOptions } from '../core/api'
import { HtmlBlockFactory, SvgBlockFactory, UniversalHtmlBlockFactory } from './HtmlBlockFactory'

export function RxHtmlBody(name: string, triggers: unknown, renderer: Render<HTMLElement>): Block<HTMLElement> {
  const factory = new StaticBlockFactory(name, true, global.document.body)
  return Reaction(name, undefined, renderer, factory)
}

export function block<M = unknown, R = void>(name: string,
  options: BlockOptions<HTMLDivElement, M, R> | undefined,
  renderer: Render<HTMLDivElement, M, R>):
  Block<HTMLDivElement, M, R> {
  return Inline(name, options, renderer, VerstakTags.block)
}

export function blockRx<M = unknown, R = void>(name: string,
  options: BlockOptions<HTMLDivElement, M, R> | undefined,
  renderer: Render<HTMLDivElement, M, R>):
  Block<HTMLDivElement, M, R> {
  return Reaction(name, options, renderer, VerstakTags.block)
}

export function group<M = unknown, R = void>(name: string,
  options: BlockOptions<HTMLDivElement, M, R> | undefined,
  renderer: Render<HTMLDivElement, M, R>):
  Block<HTMLDivElement, M, R> {
  return Inline(name, options, renderer, VerstakTags.group)
}

export function groupRx<M = unknown, R = void>(name: string,
  options: BlockOptions<HTMLDivElement, M, R> | undefined,
  renderer: Render<HTMLDivElement, M, R>):
  Block<HTMLDivElement, M, R> {
  return Reaction(name, options, renderer, VerstakTags.group)
}

export function RxA<M = unknown, R = void>(name: string, options: BlockOptions<HTMLAnchorElement, M, R> | undefined, renderer: Render<HTMLAnchorElement, M, R>): Block<HTMLAnchorElement, M, R> { return Reaction(name, options, renderer, HtmlTags.a) }
export function RxAbbr<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.abbr) }
export function RxAddress<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.address) }
export function RxArea<M = unknown, R = void>(name: string, options: BlockOptions<HTMLAreaElement, M, R> | undefined, renderer: Render<HTMLAreaElement, M, R>): Block<HTMLAreaElement, M, R> { return Reaction(name, options, renderer, HtmlTags.area) }
export function RxArticle<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.article) }
export function RxAside<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.aside) }
export function RxAudio<M = unknown, R = void>(name: string, options: BlockOptions<HTMLAudioElement, M, R> | undefined, renderer: Render<HTMLAudioElement, M, R>): Block<HTMLAudioElement, M, R> { return Reaction(name, options, renderer, HtmlTags.audio) }
export function RxB<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.b) }
export function RxBase<M = unknown, R = void>(name: string, options: BlockOptions<HTMLBaseElement, M, R> | undefined, renderer: Render<HTMLBaseElement, M, R>): Block<HTMLBaseElement, M, R> { return Reaction(name, options, renderer, HtmlTags.base) }
export function RxBdi<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.bdi) }
export function RxBdo<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.bdo) }
export function RxBig<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.big) }
export function RxBlockQuote<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.blockquote) }
export function RxBody<M = unknown, R = void>(name: string, options: BlockOptions<HTMLBodyElement, M, R>, renderer: Render<HTMLBodyElement, M, R>): Block<HTMLBodyElement, M, R> { return Reaction(name, options, renderer, HtmlTags.body) }
export function RxBR<M = unknown, R = void>(name: string, options: BlockOptions<HTMLBRElement, M, R> | undefined, renderer: Render<HTMLBRElement, M, R>): Block<HTMLBRElement, M, R> { return Reaction(name, options, renderer, HtmlTags.br) }
export function RxButton<M = unknown, R = void>(name: string, options: BlockOptions<HTMLButtonElement, M, R> | undefined, renderer: Render<HTMLButtonElement, M, R>): Block<HTMLButtonElement, M, R> { return Reaction(name, options, renderer, HtmlTags.button) }
export function RxCanvas<M = unknown, R = void>(name: string, options: BlockOptions<HTMLCanvasElement, M, R> | undefined, renderer: Render<HTMLCanvasElement, M, R>): Block<HTMLCanvasElement, M, R> { return Reaction(name, options, renderer, HtmlTags.canvas) }
export function RxCaption<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTableCaptionElement, M, R> | undefined, renderer: Render<HTMLTableCaptionElement, M, R>): Block<HTMLTableCaptionElement, M, R> { return Reaction(name, options, renderer, HtmlTags.caption) }
export function RxCite<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.cite) }
export function RxCode<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.code) }
export function RxCol<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTableColElement, M, R> | undefined, renderer: Render<HTMLTableColElement, M, R>): Block<HTMLTableColElement, M, R> { return Reaction(name, options, renderer, HtmlTags.col) }
export function RxColGroup<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTableColElement, M, R> | undefined, renderer: Render<HTMLTableColElement, M, R>): Block<HTMLTableColElement, M, R> { return Reaction(name, options, renderer, HtmlTags.colgroup) }
export function RxData<M = unknown, R = void>(name: string, options: BlockOptions<HTMLDataElement, M, R> | undefined, renderer: Render<HTMLDataElement, M, R>): Block<HTMLDataElement, M, R> { return Reaction(name, options, renderer, HtmlTags.data) }
export function RxDataList<M = unknown, R = void>(name: string, options: BlockOptions<HTMLDataListElement, M, R> | undefined, renderer: Render<HTMLDataListElement, M, R>): Block<HTMLDataListElement, M, R> { return Reaction(name, options, renderer, HtmlTags.datalist) }
export function RxDD<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.dd) }
export function RxDel<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.del) }
export function RxDetails<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.details) }
export function RxDfn<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.dfn) }
export function RxDiv<M = unknown, R = void>(name: string, options: BlockOptions<HTMLDivElement, M, R> | undefined, renderer: Render<HTMLDivElement, M, R>): Block<HTMLDivElement, M, R> { return Reaction(name, options, renderer, HtmlTags.div) }
export function RxDL<M = unknown, R = void>(name: string, options: BlockOptions<HTMLDListElement, M, R> | undefined, renderer: Render<HTMLDListElement, M, R>): Block<HTMLDListElement, M, R> { return Reaction(name, options, renderer, HtmlTags.dl) }
export function RxDT<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.dt) }
export function RxEM<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.em) }
export function RxEmbed<M = unknown, R = void>(name: string, options: BlockOptions<HTMLEmbedElement, M, R> | undefined, renderer: Render<HTMLEmbedElement, M, R>): Block<HTMLEmbedElement, M, R> { return Reaction(name, options, renderer, HtmlTags.embed) }
export function RxFieldSet<M = unknown, R = void>(name: string, options: BlockOptions<HTMLFieldSetElement, M, R> | undefined, renderer: Render<HTMLFieldSetElement, M, R>): Block<HTMLFieldSetElement, M, R> { return Reaction(name, options, renderer, HtmlTags.fieldset) }
export function RxFigCaption<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.figcaption) }
export function RxFigure<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.figure) }
export function RxFooter<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.footer) }
export function RxForm<M = unknown, R = void>(name: string, options: BlockOptions<HTMLFormElement, M, R> | undefined, renderer: Render<HTMLFormElement, M, R>): Block<HTMLFormElement, M, R> { return Reaction(name, options, renderer, HtmlTags.form) }
export function RxH1<M = unknown, R = void>(name: string, options: BlockOptions<HTMLHeadingElement, M, R> | undefined, renderer: Render<HTMLHeadingElement, M, R>): Block<HTMLHeadingElement, M, R> { return Reaction(name, options, renderer, HtmlTags.h1) }
export function RxH2<M = unknown, R = void>(name: string, options: BlockOptions<HTMLHeadingElement, M, R> | undefined, renderer: Render<HTMLHeadingElement, M, R>): Block<HTMLHeadingElement, M, R> { return Reaction(name, options, renderer, HtmlTags.h2) }
export function RxH3<M = unknown, R = void>(name: string, options: BlockOptions<HTMLHeadingElement, M, R> | undefined, renderer: Render<HTMLHeadingElement, M, R>): Block<HTMLHeadingElement, M, R> { return Reaction(name, options, renderer, HtmlTags.h3) }
export function RxH4<M = unknown, R = void>(name: string, options: BlockOptions<HTMLHeadingElement, M, R> | undefined, renderer: Render<HTMLHeadingElement, M, R>): Block<HTMLHeadingElement, M, R> { return Reaction(name, options, renderer, HtmlTags.h4) }
export function RxH5<M = unknown, R = void>(name: string, options: BlockOptions<HTMLHeadingElement, M, R> | undefined, renderer: Render<HTMLHeadingElement, M, R>): Block<HTMLHeadingElement, M, R> { return Reaction(name, options, renderer, HtmlTags.h5) }
export function RxH6<M = unknown, R = void>(name: string, options: BlockOptions<HTMLHeadingElement, M, R> | undefined, renderer: Render<HTMLHeadingElement, M, R>): Block<HTMLHeadingElement, M, R> { return Reaction(name, options, renderer, HtmlTags.h6) }
export function RxHead<M = unknown, R = void>(name: string, options: BlockOptions<HTMLHeadElement, M, R> | undefined, renderer: Render<HTMLHeadElement, M, R>): Block<HTMLHeadElement, M, R> { return Reaction(name, options, renderer, HtmlTags.head) }
export function RxHeader<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.header) }
export function RxHGroup<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.hgroup) }
export function RxHR<M = unknown, R = void>(name: string, options: BlockOptions<HTMLHRElement, M, R> | undefined, renderer: Render<HTMLHRElement, M, R>): Block<HTMLHRElement, M, R> { return Reaction(name, options, renderer, HtmlTags.hr) }
export function RxHtml<M = unknown, R = void>(name: string, options: BlockOptions<HTMLHtmlElement, M, R> | undefined, renderer: Render<HTMLHtmlElement, M, R>): Block<HTMLHtmlElement, M, R> { return Reaction(name, options, renderer, HtmlTags.html) }
export function RxI<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.i) }
export function RxIFrame<M = unknown, R = void>(name: string, options: BlockOptions<HTMLIFrameElement, M, R>, renderer: Render<HTMLIFrameElement, M, R>): Block<HTMLIFrameElement, M, R> { return Reaction(name, options, renderer, HtmlTags.iframe) }
export function RxImg<M = unknown, R = void>(name: string, options: BlockOptions<HTMLImageElement, M, R> | undefined, renderer: Render<HTMLImageElement, M, R>): Block<HTMLImageElement, M, R> { return Reaction(name, options, renderer, HtmlTags.img) }
export function RxInput<M = unknown, R = void>(name: string, options: BlockOptions<HTMLInputElement, M, R> | undefined, renderer: Render<HTMLInputElement, M, R>): Block<HTMLInputElement, M, R> { return Reaction(name, options, renderer, HtmlTags.input) }
export function RxIns<M = unknown, R = void>(name: string, options: BlockOptions<HTMLModElement, M, R> | undefined, renderer: Render<HTMLModElement, M, R>): Block<HTMLModElement, M, R> { return Reaction(name, options, renderer, HtmlTags.ins) }
export function RxKbd<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.kbd) }
export function RxKeygen<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.keygen) }
export function RxLabel<M = unknown, R = void>(name: string, options: BlockOptions<HTMLLabelElement, M, R> | undefined, renderer: Render<HTMLLabelElement, M, R>): Block<HTMLLabelElement, M, R> { return Reaction(name, options, renderer, HtmlTags.label) }
export function RxLegend<M = unknown, R = void>(name: string, options: BlockOptions<HTMLLegendElement, M, R> | undefined, renderer: Render<HTMLLegendElement, M, R>): Block<HTMLLegendElement, M, R> { return Reaction(name, options, renderer, HtmlTags.legend) }
export function RxLI<M = unknown, R = void>(name: string, options: BlockOptions<HTMLLIElement, M, R> | undefined, renderer: Render<HTMLLIElement, M, R>): Block<HTMLLIElement, M, R> { return Reaction(name, options, renderer, HtmlTags.li) }
export function RxLink<M = unknown, R = void>(name: string, options: BlockOptions<HTMLLinkElement, M, R> | undefined, renderer: Render<HTMLLinkElement, M, R>): Block<HTMLLinkElement, M, R> { return Reaction(name, options, renderer, HtmlTags.link) }
export function RxMain<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.main) }
export function RxMap<M = unknown, R = void>(name: string, options: BlockOptions<HTMLMapElement, M, R> | undefined, renderer: Render<HTMLMapElement, M, R>): Block<HTMLMapElement, M, R> { return Reaction(name, options, renderer, HtmlTags.map) }
export function RxMark<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.mark) }
export function RxMenu<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.menu) }
export function RxMenuItem<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.menuitem) }
export function RxMeta<M = unknown, R = void>(name: string, options: BlockOptions<HTMLMetaElement, M, R> | undefined, renderer: Render<HTMLMetaElement, M, R>): Block<HTMLMetaElement, M, R> { return Reaction(name, options, renderer, HtmlTags.meta) }
export function RxMeter<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.meter) }
export function RxNav<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.nav) }
export function RxNoIndex<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.noindex) }
export function RxNoScript<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.noscript) }
export function RxObj<M = unknown, R = void>(name: string, options: BlockOptions<HTMLObjectElement, M, R> | undefined, renderer: Render<HTMLObjectElement, M, R>): Block<HTMLObjectElement, M, R> { return Reaction(name, options, renderer, HtmlTags.object) }
export function RxOL<M = unknown, R = void>(name: string, options: BlockOptions<HTMLOListElement, M, R> | undefined, renderer: Render<HTMLOListElement, M, R>): Block<HTMLOListElement, M, R> { return Reaction(name, options, renderer, HtmlTags.ol) }
export function RxOptGroup<M = unknown, R = void>(name: string, options: BlockOptions<HTMLOptGroupElement, M, R> | undefined, renderer: Render<HTMLOptGroupElement, M, R>): Block<HTMLOptGroupElement, M, R> { return Reaction(name, options, renderer, HtmlTags.optgroup) }
export function RxOption<M = unknown, R = void>(name: string, options: BlockOptions<HTMLOptionElement, M, R> | undefined, renderer: Render<HTMLOptionElement, M, R>): Block<HTMLOptionElement, M, R> { return Reaction(name, options, renderer, HtmlTags.option) }
export function RxOutput<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.output) }
export function RxP<M = unknown, R = void>(name: string, options: BlockOptions<HTMLParagraphElement, M, R> | undefined, renderer: Render<HTMLParagraphElement, M, R>): Block<HTMLParagraphElement, M, R> { return Reaction(name, options, renderer, HtmlTags.p) }
export function RxParam<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.param) }
export function RxPicture<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.picture) }
export function RxPre<M = unknown, R = void>(name: string, options: BlockOptions<HTMLPreElement, M, R>, renderer: Render<HTMLPreElement, M, R>): Block<HTMLPreElement, M, R> { return Reaction(name, options, renderer, HtmlTags.pre) }
export function RxProgress<M = unknown, R = void>(name: string, options: BlockOptions<HTMLProgressElement, M, R> | undefined, renderer: Render<HTMLProgressElement, M, R>): Block<HTMLProgressElement, M, R> { return Reaction(name, options, renderer, HtmlTags.progress) }
export function RxQ<M = unknown, R = void>(name: string, options: BlockOptions<HTMLQuoteElement, M, R> | undefined, renderer: Render<HTMLQuoteElement, M, R>): Block<HTMLQuoteElement, M, R> { return Reaction(name, options, renderer, HtmlTags.q) }
export function RxRP<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.rp) }
export function RxRT<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.rt) }
export function RxRuby<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.ruby) }
export function RxS<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.s) }
export function RxSamp<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.samp) }
export function RxScript<M = unknown, R = void>(name: string, options: BlockOptions<HTMLScriptElement, M, R> | undefined, renderer: Render<HTMLScriptElement, M, R>): Block<HTMLScriptElement, M, R> { return Reaction(name, options, renderer, HtmlTags.script) }
export function RxSection<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.section) }
export function RxSelect<M = unknown, R = void>(name: string, options: BlockOptions<HTMLSelectElement, M, R> | undefined, renderer: Render<HTMLSelectElement, M, R>): Block<HTMLSelectElement, M, R> { return Reaction(name, options, renderer, HtmlTags.select) }
export function RxSmall<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.small) }
export function RxSource<M = unknown, R = void>(name: string, options: BlockOptions<HTMLSourceElement, M, R> | undefined, renderer: Render<HTMLSourceElement, M, R>): Block<HTMLSourceElement, M, R> { return Reaction(name, options, renderer, HtmlTags.source) }
export function RxSpan<M = unknown, R = void>(name: string, options: BlockOptions<HTMLSpanElement, M, R> | undefined, renderer: Render<HTMLSpanElement, M, R>): Block<HTMLSpanElement, M, R> { return Reaction(name, options, renderer, HtmlTags.span) }
export function RxStrong<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.strong) }
export function RxStyle<M = unknown, R = void>(name: string, options: BlockOptions<HTMLStyleElement, M, R> | undefined, renderer: Render<HTMLStyleElement, M, R>): Block<HTMLStyleElement, M, R> { return Reaction(name, options, renderer, HtmlTags.style) }
export function RxSub<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.sub) }
export function RxSummary<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.summary) }
export function RxSup<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.sup) }
export function RxTable<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTableElement, M, R> | undefined, renderer: Render<HTMLTableElement, M, R>): Block<HTMLTableElement, M, R> { return Reaction(name, options, renderer, HtmlTags.table) }
export function RxTemplate<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTemplateElement, M, R> | undefined, renderer: Render<HTMLTemplateElement, M, R>): Block<HTMLTemplateElement, M, R> { return Reaction(name, options, renderer, HtmlTags.template) }
export function RxTBody<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTableSectionElement, M, R> | undefined, renderer: Render<HTMLTableSectionElement, M, R>): Block<HTMLTableSectionElement, M, R> { return Reaction(name, options, renderer, HtmlTags.tbody) }
export function RxTD<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTableCellElement, M, R> | undefined, renderer: Render<HTMLTableCellElement, M, R>): Block<HTMLTableCellElement, M, R> { return Reaction(name, options, renderer, HtmlTags.td) }
export function RxTextArea<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTextAreaElement, M, R> | undefined, renderer: Render<HTMLTextAreaElement, M, R>): Block<HTMLTextAreaElement, M, R> { return Reaction(name, options, renderer, HtmlTags.textarea) }
export function RxTFoot<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTableSectionElement, M, R> | undefined, renderer: Render<HTMLTableSectionElement, M, R>): Block<HTMLTableSectionElement, M, R> { return Reaction(name, options, renderer, HtmlTags.tfoot) }
export function RxTH<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTableCellElement, M, R> | undefined, renderer: Render<HTMLTableCellElement, M, R>): Block<HTMLTableCellElement, M, R> { return Reaction(name, options, renderer, HtmlTags.th) }
export function RxTHead<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTableSectionElement, M, R> | undefined, renderer: Render<HTMLTableSectionElement, M, R>): Block<HTMLTableSectionElement, M, R> { return Reaction(name, options, renderer, HtmlTags.thead) }
export function RxTime<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.time) }
export function RxTitle<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTitleElement, M, R> | undefined, renderer: Render<HTMLTitleElement, M, R>): Block<HTMLTitleElement, M, R> { return Reaction(name, options, renderer, HtmlTags.title) }
export function RxTR<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTableRowElement, M, R> | undefined, renderer: Render<HTMLTableRowElement, M, R>): Block<HTMLTableRowElement, M, R> { return Reaction(name, options, renderer, HtmlTags.tr) }
export function RxTrack<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTrackElement, M, R> | undefined, renderer: Render<HTMLTrackElement, M, R>): Block<HTMLTrackElement, M, R> { return Reaction(name, options, renderer, HtmlTags.track) }
export function RxU<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.u) }
export function RxUL<M = unknown, R = void>(name: string, options: BlockOptions<HTMLUListElement, M, R> | undefined, renderer: Render<HTMLUListElement, M, R>): Block<HTMLUListElement, M, R> { return Reaction(name, options, renderer, HtmlTags.ul) }
export function RxVar<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.var) }
export function RxVideo<M = unknown, R = void>(name: string, options: BlockOptions<HTMLVideoElement, M, R> | undefined, renderer: Render<HTMLVideoElement, M, R>): Block<HTMLVideoElement, M, R> { return Reaction(name, options, renderer, HtmlTags.video) }
export function RxWbr<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Reaction(name, options, renderer, HtmlTags.wbr) }

export function A<M = unknown, R = void>(name: string, options: BlockOptions<HTMLAnchorElement, M, R> | undefined, renderer: Render<HTMLAnchorElement, M, R>): Block<HTMLAnchorElement, M, R> { return Inline(name, options, renderer, HtmlTags.a) }
export function Abbr<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.abbr) }
export function Address<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.address) }
export function Area<M = unknown, R = void>(name: string, options: BlockOptions<HTMLAreaElement, M, R> | undefined, renderer: Render<HTMLAreaElement, M, R>): Block<HTMLAreaElement, M, R> { return Inline(name, options, renderer, HtmlTags.area) }
export function Article<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.article) }
export function Aside<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.aside) }
export function Audio<M = unknown, R = void>(name: string, options: BlockOptions<HTMLAudioElement, M, R> | undefined, renderer: Render<HTMLAudioElement, M, R>): Block<HTMLAudioElement, M, R> { return Inline(name, options, renderer, HtmlTags.audio) }
export function B<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.b) }
export function Base<M = unknown, R = void>(name: string, options: BlockOptions<HTMLBaseElement, M, R> | undefined, renderer: Render<HTMLBaseElement, M, R>): Block<HTMLBaseElement, M, R> { return Inline(name, options, renderer, HtmlTags.base) }
export function Bdi<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.bdi) }
export function Bdo<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.bdo) }
export function Big<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.big) }
export function BlockQuote<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.blockquote) }
export function Body<M = unknown, R = void>(name: string, options: BlockOptions<HTMLBodyElement, M, R> | undefined, renderer: Render<HTMLBodyElement, M, R>): Block<HTMLBodyElement, M, R> { return Inline(name, options, renderer, HtmlTags.body) }
export function BR<M = unknown, R = void>(name: string, options: BlockOptions<HTMLBRElement, M, R> | undefined, renderer: Render<HTMLBRElement, M, R>): Block<HTMLBRElement, M, R> { return Inline(name, options, renderer, HtmlTags.br) }
export function Button<M = unknown, R = void>(name: string, options: BlockOptions<HTMLButtonElement, M, R> | undefined, renderer: Render<HTMLButtonElement, M, R>): Block<HTMLButtonElement, M, R> { return Inline(name, options, renderer, HtmlTags.button) }
export function Canvas<M = unknown, R = void>(name: string, options: BlockOptions<HTMLCanvasElement, M, R> | undefined, renderer: Render<HTMLCanvasElement, M, R>): Block<HTMLCanvasElement, M, R> { return Inline(name, options, renderer, HtmlTags.canvas) }
export function Caption<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTableCaptionElement, M, R> | undefined, renderer: Render<HTMLTableCaptionElement, M, R>): Block<HTMLTableCaptionElement, M, R> { return Inline(name, options, renderer, HtmlTags.caption) }
export function Cite<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.cite) }
export function Code<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.code) }
export function Col<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTableColElement, M, R> | undefined, renderer: Render<HTMLTableColElement, M, R>): Block<HTMLTableColElement, M, R> { return Inline(name, options, renderer, HtmlTags.col) }
export function ColGroup<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTableColElement, M, R> | undefined, renderer: Render<HTMLTableColElement, M, R>): Block<HTMLTableColElement, M, R> { return Inline(name, options, renderer, HtmlTags.colgroup) }
export function Data<M = unknown, R = void>(name: string, options: BlockOptions<HTMLDataElement, M, R> | undefined, renderer: Render<HTMLDataElement, M, R>): Block<HTMLDataElement, M, R> { return Inline(name, options, renderer, HtmlTags.data) }
export function DataList<M = unknown, R = void>(name: string, options: BlockOptions<HTMLDataListElement, M, R> | undefined, renderer: Render<HTMLDataListElement, M, R>): Block<HTMLDataListElement, M, R> { return Inline(name, options, renderer, HtmlTags.datalist) }
export function DD<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.dd) }
export function Del<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.del) }
export function Details<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.details) }
export function Dfn<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.dfn) }
export function Div<M = unknown, R = void>(name: string, options: BlockOptions<HTMLDivElement, M, R> | undefined, renderer: Render<HTMLDivElement, M, R>): Block<HTMLDivElement, M, R> { return Inline(name, options, renderer, HtmlTags.div) }
export function DL<M = unknown, R = void>(name: string, options: BlockOptions<HTMLDListElement, M, R> | undefined, renderer: Render<HTMLDListElement, M, R>): Block<HTMLDListElement, M, R> { return Inline(name, options, renderer, HtmlTags.dl) }
export function DT<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.dt) }
export function EM<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.em) }
export function Embed<M = unknown, R = void>(name: string, options: BlockOptions<HTMLEmbedElement, M, R> | undefined, renderer: Render<HTMLEmbedElement, M, R>): Block<HTMLEmbedElement, M, R> { return Inline(name, options, renderer, HtmlTags.embed) }
export function FieldSet<M = unknown, R = void>(name: string, options: BlockOptions<HTMLFieldSetElement, M, R> | undefined, renderer: Render<HTMLFieldSetElement, M, R>): Block<HTMLFieldSetElement, M, R> { return Inline(name, options, renderer, HtmlTags.fieldset) }
export function FigCaption<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.figcaption) }
export function Figure<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.figure) }
export function Footer<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.footer) }
export function Form<M = unknown, R = void>(name: string, options: BlockOptions<HTMLFormElement, M, R> | undefined, renderer: Render<HTMLFormElement, M, R>): Block<HTMLFormElement, M, R> { return Inline(name, options, renderer, HtmlTags.form) }
export function H1<M = unknown, R = void>(name: string, options: BlockOptions<HTMLHeadingElement, M, R> | undefined, renderer: Render<HTMLHeadingElement, M, R>): Block<HTMLHeadingElement, M, R> { return Inline(name, options, renderer, HtmlTags.h1) }
export function H2<M = unknown, R = void>(name: string, options: BlockOptions<HTMLHeadingElement, M, R> | undefined, renderer: Render<HTMLHeadingElement, M, R>): Block<HTMLHeadingElement, M, R> { return Inline(name, options, renderer, HtmlTags.h2) }
export function H3<M = unknown, R = void>(name: string, options: BlockOptions<HTMLHeadingElement, M, R> | undefined, renderer: Render<HTMLHeadingElement, M, R>): Block<HTMLHeadingElement, M, R> { return Inline(name, options, renderer, HtmlTags.h3) }
export function H4<M = unknown, R = void>(name: string, options: BlockOptions<HTMLHeadingElement, M, R> | undefined, renderer: Render<HTMLHeadingElement, M, R>): Block<HTMLHeadingElement, M, R> { return Inline(name, options, renderer, HtmlTags.h4) }
export function H5<M = unknown, R = void>(name: string, options: BlockOptions<HTMLHeadingElement, M, R> | undefined, renderer: Render<HTMLHeadingElement, M, R>): Block<HTMLHeadingElement, M, R> { return Inline(name, options, renderer, HtmlTags.h5) }
export function H6<M = unknown, R = void>(name: string, options: BlockOptions<HTMLHeadingElement, M, R> | undefined, renderer: Render<HTMLHeadingElement, M, R>): Block<HTMLHeadingElement, M, R> { return Inline(name, options, renderer, HtmlTags.h6) }
export function Head<M = unknown, R = void>(name: string, options: BlockOptions<HTMLHeadElement, M, R> | undefined, renderer: Render<HTMLHeadElement, M, R>): Block<HTMLHeadElement, M, R> { return Inline(name, options, renderer, HtmlTags.head) }
export function Header<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.header) }
export function HGroup<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.hgroup) }
export function HR<M = unknown, R = void>(name: string, options: BlockOptions<HTMLHRElement, M, R> | undefined, renderer: Render<HTMLHRElement, M, R>): Block<HTMLHRElement, M, R> { return Inline(name, options, renderer, HtmlTags.hr) }
export function Html<M = unknown, R = void>(name: string, options: BlockOptions<HTMLHtmlElement, M, R> | undefined, renderer: Render<HTMLHtmlElement, M, R>): Block<HTMLHtmlElement, M, R> { return Inline(name, options, renderer, HtmlTags.html) }
export function I<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.i) }
export function IFrame<M = unknown, R = void>(name: string, options: BlockOptions<HTMLIFrameElement, M, R> | undefined, renderer: Render<HTMLIFrameElement, M, R>): Block<HTMLIFrameElement, M, R> { return Inline(name, options, renderer, HtmlTags.iframe) }
export function Img<M = unknown, R = void>(name: string, options: BlockOptions<HTMLImageElement, M, R> | undefined, renderer: Render<HTMLImageElement, M, R>): Block<HTMLImageElement, M, R> { return Inline(name, options, renderer, HtmlTags.img) }
export function Input<M = unknown, R = void>(name: string, options: BlockOptions<HTMLInputElement, M, R> | undefined, renderer: Render<HTMLInputElement, M, R>): Block<HTMLInputElement, M, R> { return Inline(name, options, renderer, HtmlTags.input) }
export function Ins<M = unknown, R = void>(name: string, options: BlockOptions<HTMLModElement, M, R> | undefined, renderer: Render<HTMLModElement, M, R>): Block<HTMLModElement, M, R> { return Inline(name, options, renderer, HtmlTags.ins) }
export function Kbd<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.kbd) }
export function KeyGen<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.keygen) }
export function Label<M = unknown, R = void>(name: string, options: BlockOptions<HTMLLabelElement, M, R> | undefined, renderer: Render<HTMLLabelElement, M, R>): Block<HTMLLabelElement, M, R> { return Inline(name, options, renderer, HtmlTags.label) }
export function Legend<M = unknown, R = void>(name: string, options: BlockOptions<HTMLLegendElement, M, R> | undefined, renderer: Render<HTMLLegendElement, M, R>): Block<HTMLLegendElement, M, R> { return Inline(name, options, renderer, HtmlTags.legend) }
export function LI<M = unknown, R = void>(name: string, options: BlockOptions<HTMLLIElement, M, R>, renderer: Render<HTMLLIElement, M, R>): Block<HTMLLIElement, M, R> { return Inline(name, options, renderer, HtmlTags.li) }
export function Link<M = unknown, R = void>(name: string, options: BlockOptions<HTMLLinkElement, M, R>, renderer: Render<HTMLLinkElement, M, R>): Block<HTMLLinkElement, M, R> { return Inline(name, options, renderer, HtmlTags.link) }
export function Main<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.main) }
export function Map<M = unknown, R = void>(name: string, options: BlockOptions<HTMLMapElement, M, R> | undefined, renderer: Render<HTMLMapElement, M, R>): Block<HTMLMapElement, M, R> { return Inline(name, options, renderer, HtmlTags.map) }
export function Mark<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.mark) }
export function Menu<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.menu) }
export function MenuItem<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.menuitem) }
export function Meta<M = unknown, R = void>(name: string, options: BlockOptions<HTMLMetaElement, M, R>, renderer: Render<HTMLMetaElement, M, R>): Block<HTMLMetaElement, M, R> { return Inline(name, options, renderer, HtmlTags.meta) }
export function Meter<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.meter) }
export function Nav<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.nav) }
export function NoIndex<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.noindex) }
export function NoScript<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.noscript) }
export function Obj<M = unknown, R = void>(name: string, options: BlockOptions<HTMLObjectElement, M, R> | undefined, renderer: Render<HTMLObjectElement, M, R>): Block<HTMLObjectElement, M, R> { return Inline(name, options, renderer, HtmlTags.object) }
export function OL<M = unknown, R = void>(name: string, options: BlockOptions<HTMLOListElement, M, R> | undefined, renderer: Render<HTMLOListElement, M, R>): Block<HTMLOListElement, M, R> { return Inline(name, options, renderer, HtmlTags.ol) }
export function OptGroup<M = unknown, R = void>(name: string, options: BlockOptions<HTMLOptGroupElement, M, R> | undefined, renderer: Render<HTMLOptGroupElement, M, R>): Block<HTMLOptGroupElement, M, R> { return Inline(name, options, renderer, HtmlTags.optgroup) }
export function Option<M = unknown, R = void>(name: string, options: BlockOptions<HTMLOptionElement, M, R> | undefined, renderer: Render<HTMLOptionElement, M, R>): Block<HTMLOptionElement, M, R> { return Inline(name, options, renderer, HtmlTags.option) }
export function Output<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.output) }
export function P<M = unknown, R = void>(name: string, options: BlockOptions<HTMLParagraphElement, M, R> | undefined, renderer: Render<HTMLParagraphElement, M, R>): Block<HTMLParagraphElement, M, R> { return Inline(name, options, renderer, HtmlTags.p) }
export function Param<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.param) }
export function Picture<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.picture) }
export function Pre<M = unknown, R = void>(name: string, options: BlockOptions<HTMLPreElement, M, R> | undefined, renderer: Render<HTMLPreElement, M, R>): Block<HTMLPreElement, M, R> { return Inline(name, options, renderer, HtmlTags.pre) }
export function Progress<M = unknown, R = void>(name: string, options: BlockOptions<HTMLProgressElement, M, R> | undefined, renderer: Render<HTMLProgressElement, M, R>): Block<HTMLProgressElement, M, R> { return Inline(name, options, renderer, HtmlTags.progress) }
export function Q<M = unknown, R = void>(name: string, options: BlockOptions<HTMLQuoteElement, M, R> | undefined, renderer: Render<HTMLQuoteElement, M, R>): Block<HTMLQuoteElement, M, R> { return Inline(name, options, renderer, HtmlTags.q) }
export function RP<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.rp) }
export function RT<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.rt) }
export function Ruby<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.ruby) }
export function S<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.s) }
export function Samp<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.samp) }
export function Script<M = unknown, R = void>(name: string, options: BlockOptions<HTMLScriptElement, M, R> | undefined, renderer: Render<HTMLScriptElement, M, R>): Block<HTMLScriptElement, M, R> { return Inline(name, options, renderer, HtmlTags.script) }
export function Section<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.section) }
export function Select<M = unknown, R = void>(name: string, options: BlockOptions<HTMLSelectElement, M, R> | undefined, renderer: Render<HTMLSelectElement, M, R>): Block<HTMLSelectElement, M, R> { return Inline(name, options, renderer, HtmlTags.select) }
export function Small<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.small) }
export function Source<M = unknown, R = void>(name: string, options: BlockOptions<HTMLSourceElement, M, R> | undefined, renderer: Render<HTMLSourceElement, M, R>): Block<HTMLSourceElement, M, R> { return Inline(name, options, renderer, HtmlTags.source) }
export function Span<M = unknown, R = void>(name: string, options: BlockOptions<HTMLSpanElement, M, R> | undefined, renderer: Render<HTMLSpanElement, M, R>): Block<HTMLSpanElement, M, R> { return Inline(name, options, renderer, HtmlTags.span) }
export function Strong<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.strong) }
export function Style<M = unknown, R = void>(name: string, options: BlockOptions<HTMLStyleElement, M, R> | undefined, renderer: Render<HTMLStyleElement, M, R>): Block<HTMLStyleElement, M, R> { return Inline(name, options, renderer, HtmlTags.style) }
export function Sub<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.sub) }
export function Summary<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.summary) }
export function Sup<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.sup) }
export function Table<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTableElement, M, R> | undefined, renderer: Render<HTMLTableElement, M, R>): Block<HTMLTableElement, M, R> { return Inline(name, options, renderer, HtmlTags.table) }
export function Template<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTemplateElement, M, R> | undefined, renderer: Render<HTMLTemplateElement, M, R>): Block<HTMLTemplateElement, M, R> { return Inline(name, options, renderer, HtmlTags.template) }
export function TBody<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTableSectionElement, M, R> | undefined, renderer: Render<HTMLTableSectionElement, M, R>): Block<HTMLTableSectionElement, M, R> { return Inline(name, options, renderer, HtmlTags.tbody) }
export function TD<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTableCellElement, M, R> | undefined, renderer: Render<HTMLTableCellElement, M, R>): Block<HTMLTableCellElement, M, R> { return Inline(name, options, renderer, HtmlTags.td) }
export function TextArea<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTextAreaElement, M, R> | undefined, renderer: Render<HTMLTextAreaElement, M, R>): Block<HTMLTextAreaElement, M, R> { return Inline(name, options, renderer, HtmlTags.textarea) }
export function TFoot<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTableSectionElement, M, R> | undefined, renderer: Render<HTMLTableSectionElement, M, R>): Block<HTMLTableSectionElement, M, R> { return Inline(name, options, renderer, HtmlTags.tfoot) }
export function TH<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTableCellElement, M, R> | undefined, renderer: Render<HTMLTableCellElement, M, R>): Block<HTMLTableCellElement, M, R> { return Inline(name, options, renderer, HtmlTags.th) }
export function THead<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTableSectionElement, M, R> | undefined, renderer: Render<HTMLTableSectionElement, M, R>): Block<HTMLTableSectionElement, M, R> { return Inline(name, options, renderer, HtmlTags.thead) }
export function Time<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.time) }
export function Title<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTitleElement, M, R> | undefined, renderer: Render<HTMLTitleElement, M, R>): Block<HTMLTitleElement, M, R> { return Inline(name, options, renderer, HtmlTags.title) }
export function TR<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTableRowElement, M, R> | undefined, renderer: Render<HTMLTableRowElement, M, R>): Block<HTMLTableRowElement, M, R> { return Inline(name, options, renderer, HtmlTags.tr) }
export function Track<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTrackElement, M, R> | undefined, renderer: Render<HTMLTrackElement, M, R>): Block<HTMLTrackElement, M, R> { return Inline(name, options, renderer, HtmlTags.track) }
export function U<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.u) }
export function UL<M = unknown, R = void>(name: string, options: BlockOptions<HTMLUListElement, M, R> | undefined, renderer: Render<HTMLUListElement, M, R>): Block<HTMLUListElement, M, R> { return Inline(name, options, renderer, HtmlTags.ul) }
export function Var<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.var) }
export function Video<M = unknown, R = void>(name: string, options: BlockOptions<HTMLVideoElement, M, R> | undefined, renderer: Render<HTMLVideoElement, M, R>): Block<HTMLVideoElement, M, R> { return Inline(name, options, renderer, HtmlTags.video) }
export function Wbr<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Inline(name, options, renderer, HtmlTags.wbr) }

export function RxSvg<M = unknown, R = void>(name: string, options: BlockOptions<SVGSVGElement, M, R> | undefined, renderer: Render<SVGSVGElement, M, R>): Block<SVGSVGElement, M, R> { return Reaction(name, options, renderer, SvgTags.svg) }
export function RxSvgA<M = unknown, R = void>(name: string, options: BlockOptions<SVGAElement, M, R> | undefined, renderer: Render<SVGAElement, M, R>): Block<SVGAElement, M, R> { return Reaction(name, options, renderer, SvgTags.a) }
export function RxAnimate<M = unknown, R = void>(name: string, options: BlockOptions<SVGAnimateElement, M, R> | undefined, renderer: Render<SVGAnimateElement, M, R>): Block<SVGAnimateElement, M, R> { return Reaction(name, options, renderer, SvgTags.animate) }
export function RxAnimateMotion<M = unknown, R = void>(name: string, options: BlockOptions<SVGAnimateMotionElement, M, R> | undefined, renderer: Render<SVGAnimateMotionElement, M, R>): Block<SVGAnimateMotionElement, M, R> { return Reaction(name, options, renderer, SvgTags.animateMotion) }
export function RxAnimateTransform<M = unknown, R = void>(name: string, options: BlockOptions<SVGAnimateTransformElement, M, R> | undefined, renderer: Render<SVGAnimateTransformElement, M, R>): Block<SVGAnimateTransformElement, M, R> { return Reaction(name, options, renderer, SvgTags.animateTransform) }
export function RxCircle<M = unknown, R = void>(name: string, options: BlockOptions<SVGCircleElement, M, R> | undefined, renderer: Render<SVGCircleElement, M, R>): Block<SVGCircleElement, M, R> { return Reaction(name, options, renderer, SvgTags.circle) }
export function RxClipPath<M = unknown, R = void>(name: string, options: BlockOptions<SVGClipPathElement, M, R> | undefined, renderer: Render<SVGClipPathElement, M, R>): Block<SVGClipPathElement, M, R> { return Reaction(name, options, renderer, SvgTags.clipPath) }
export function RxDefs<M = unknown, R = void>(name: string, options: BlockOptions<SVGDefsElement, M, R>, renderer: Render<SVGDefsElement, M, R>): Block<SVGDefsElement, M, R> { return Reaction(name, options, renderer, SvgTags.defs) }
export function RxDesc<M = unknown, R = void>(name: string, options: BlockOptions<SVGDescElement, M, R> | undefined, renderer: Render<SVGDescElement, M, R>): Block<SVGDescElement, M, R> { return Reaction(name, options, renderer, SvgTags.desc) }
export function RxEllipse<M = unknown, R = void>(name: string, options: BlockOptions<SVGEllipseElement, M, R> | undefined, renderer: Render<SVGEllipseElement, M, R>): Block<SVGEllipseElement, M, R> { return Reaction(name, options, renderer, SvgTags.ellipse) }
export function RxFeBlend<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEBlendElement, M, R> | undefined, renderer: Render<SVGFEBlendElement, M, R>): Block<SVGFEBlendElement, M, R> { return Reaction(name, options, renderer, SvgTags.feBlend) }
export function RxFeColorMatrix<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEColorMatrixElement, M, R> | undefined, renderer: Render<SVGFEColorMatrixElement, M, R>): Block<SVGFEColorMatrixElement, M, R> { return Reaction(name, options, renderer, SvgTags.feColorMatrix) }
export function RxFeComponentTransfer<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEComponentTransferElement, M, R> | undefined, renderer: Render<SVGFEComponentTransferElement, M, R>): Block<SVGFEComponentTransferElement, M, R> { return Reaction(name, options, renderer, SvgTags.feComponentTransfer) }
export function RxFeComposite<M = unknown, R = void>(name: string, options: BlockOptions<SVGFECompositeElement, M, R> | undefined, renderer: Render<SVGFECompositeElement, M, R>): Block<SVGFECompositeElement, M, R> { return Reaction(name, options, renderer, SvgTags.feComposite) }
export function RxFeConvolveMatrix<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEConvolveMatrixElement, M, R> | undefined, renderer: Render<SVGFEConvolveMatrixElement, M, R>): Block<SVGFEConvolveMatrixElement, M, R> { return Reaction(name, options, renderer, SvgTags.feConvolveMatrix) }
export function RxFeDiffuseLighting<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEDiffuseLightingElement, M, R> | undefined, renderer: Render<SVGFEDiffuseLightingElement, M, R>): Block<SVGFEDiffuseLightingElement, M, R> { return Reaction(name, options, renderer, SvgTags.feDiffuseLighting) }
export function RxFeDisplacementMap<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEDisplacementMapElement, M, R> | undefined, renderer: Render<SVGFEDisplacementMapElement, M, R>): Block<SVGFEDisplacementMapElement, M, R> { return Reaction(name, options, renderer, SvgTags.feDisplacementMap) }
export function RxFeDistantLight<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEDistantLightElement, M, R> | undefined, renderer: Render<SVGFEDistantLightElement, M, R>): Block<SVGFEDistantLightElement, M, R> { return Reaction(name, options, renderer, SvgTags.feDistantLight) }
export function RxFeDropShadow<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEDropShadowElement, M, R> | undefined, renderer: Render<SVGFEDropShadowElement, M, R>): Block<SVGFEDropShadowElement, M, R> { return Reaction(name, options, renderer, SvgTags.feDropShadow) }
export function RxFeFlood<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEFloodElement, M, R> | undefined, renderer: Render<SVGFEFloodElement, M, R>): Block<SVGFEFloodElement, M, R> { return Reaction(name, options, renderer, SvgTags.feFlood) }
export function RxFeFuncA<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEFuncAElement, M, R> | undefined, renderer: Render<SVGFEFuncAElement, M, R>): Block<SVGFEFuncAElement, M, R> { return Reaction(name, options, renderer, SvgTags.feFuncA) }
export function RxFeFuncB<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEFuncBElement, M, R> | undefined, renderer: Render<SVGFEFuncBElement, M, R>): Block<SVGFEFuncBElement, M, R> { return Reaction(name, options, renderer, SvgTags.feFuncB) }
export function RxFeFuncG<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEFuncGElement, M, R> | undefined, renderer: Render<SVGFEFuncGElement, M, R>): Block<SVGFEFuncGElement, M, R> { return Reaction(name, options, renderer, SvgTags.feFuncG) }
export function RxFeFuncR<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEFuncRElement, M, R> | undefined, renderer: Render<SVGFEFuncRElement, M, R>): Block<SVGFEFuncRElement, M, R> { return Reaction(name, options, renderer, SvgTags.feFuncR) }
export function RxFeGaussianBlur<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEGaussianBlurElement, M, R> | undefined, renderer: Render<SVGFEGaussianBlurElement, M, R>): Block<SVGFEGaussianBlurElement, M, R> { return Reaction(name, options, renderer, SvgTags.feGaussianBlur) }
export function RxFeImage<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEImageElement, M, R> | undefined, renderer: Render<SVGFEImageElement, M, R>): Block<SVGFEImageElement, M, R> { return Reaction(name, options, renderer, SvgTags.feImage) }
export function RxFeMerge<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEMergeElement, M, R> | undefined, renderer: Render<SVGFEMergeElement, M, R>): Block<SVGFEMergeElement, M, R> { return Reaction(name, options, renderer, SvgTags.feMerge) }
export function RxFeMergeNode<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEMergeNodeElement, M, R> | undefined, renderer: Render<SVGFEMergeNodeElement, M, R>): Block<SVGFEMergeNodeElement, M, R> { return Reaction(name, options, renderer, SvgTags.feMergeNode) }
export function RxFeMorphology<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEMorphologyElement, M, R> | undefined, renderer: Render<SVGFEMorphologyElement, M, R>): Block<SVGFEMorphologyElement, M, R> { return Reaction(name, options, renderer, SvgTags.feMorphology) }
export function RxFeOffset<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEOffsetElement, M, R> | undefined, renderer: Render<SVGFEOffsetElement, M, R>): Block<SVGFEOffsetElement, M, R> { return Reaction(name, options, renderer, SvgTags.feOffset) }
export function RxFePointLight<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEPointLightElement, M, R> | undefined, renderer: Render<SVGFEPointLightElement, M, R>): Block<SVGFEPointLightElement, M, R> { return Reaction(name, options, renderer, SvgTags.fePointLight) }
export function RxFeSpecularLighting<M = unknown, R = void>(name: string, options: BlockOptions<SVGFESpecularLightingElement, M, R> | undefined, renderer: Render<SVGFESpecularLightingElement, M, R>): Block<SVGFESpecularLightingElement, M, R> { return Reaction(name, options, renderer, SvgTags.feSpecularLighting) }
export function RxFeSpotLight<M = unknown, R = void>(name: string, options: BlockOptions<SVGFESpotLightElement, M, R> | undefined, renderer: Render<SVGFESpotLightElement, M, R>): Block<SVGFESpotLightElement, M, R> { return Reaction(name, options, renderer, SvgTags.feSpotLight) }
export function RxFeTile<M = unknown, R = void>(name: string, options: BlockOptions<SVGFETileElement, M, R> | undefined, renderer: Render<SVGFETileElement, M, R>): Block<SVGFETileElement, M, R> { return Reaction(name, options, renderer, SvgTags.feTile) }
export function RxFeTurbulence<M = unknown, R = void>(name: string, options: BlockOptions<SVGFETurbulenceElement, M, R> | undefined, renderer: Render<SVGFETurbulenceElement, M, R>): Block<SVGFETurbulenceElement, M, R> { return Reaction(name, options, renderer, SvgTags.feTurbulence) }
export function RxFilter<M = unknown, R = void>(name: string, options: BlockOptions<SVGFilterElement, M, R>, renderer: Render<SVGFilterElement, M, R>): Block<SVGFilterElement, M, R> { return Reaction(name, options, renderer, SvgTags.filter) }
export function RxForeignObject<M = unknown, R = void>(name: string, options: BlockOptions<SVGForeignObjectElement, M, R> | undefined, renderer: Render<SVGForeignObjectElement, M, R>): Block<SVGForeignObjectElement, M, R> { return Reaction(name, options, renderer, SvgTags.foreignObject) }
export function RxG<M = unknown, R = void>(name: string, options: BlockOptions<SVGGElement, M, R> | undefined, renderer: Render<SVGGElement, M, R>): Block<SVGGElement, M, R> { return Reaction(name, options, renderer, SvgTags.g) }
export function RxSvgImage<M = unknown, R = void>(name: string, options: BlockOptions<SVGImageElement, M, R> | undefined, renderer: Render<SVGImageElement, M, R>): Block<SVGImageElement, M, R> { return Reaction(name, options, renderer, SvgTags.image) }
export function RxLine<M = unknown, R = void>(name: string, options: BlockOptions<SVGLineElement, M, R> | undefined, renderer: Render<SVGLineElement, M, R>): Block<SVGLineElement, M, R> { return Reaction(name, options, renderer, SvgTags.line) }
export function RxLinearGradient<M = unknown, R = void>(name: string, options: BlockOptions<SVGLinearGradientElement, M, R> | undefined, renderer: Render<SVGLinearGradientElement, M, R>): Block<SVGLinearGradientElement, M, R> { return Reaction(name, options, renderer, SvgTags.linearGradient) }
export function RxMarker<M = unknown, R = void>(name: string, options: BlockOptions<SVGMarkerElement, M, R> | undefined, renderer: Render<SVGMarkerElement, M, R>): Block<SVGMarkerElement, M, R> { return Reaction(name, options, renderer, SvgTags.marker) }
export function RxMask<M = unknown, R = void>(name: string, options: BlockOptions<SVGMaskElement, M, R> | undefined, renderer: Render<SVGMaskElement, M, R>): Block<SVGMaskElement, M, R> { return Reaction(name, options, renderer, SvgTags.mask) }
export function RxMetadata<M = unknown, R = void>(name: string, options: BlockOptions<SVGMetadataElement, M, R> | undefined, renderer: Render<SVGMetadataElement, M, R>): Block<SVGMetadataElement, M, R> { return Reaction(name, options, renderer, SvgTags.metadata) }
export function RxMPath<M = unknown, R = void>(name: string, options: BlockOptions<SVGElement, M, R> | undefined, renderer: Render<SVGElement, M, R>): Block<SVGElement, M, R> { return Reaction(name, options, renderer, SvgTags.mpath) }
export function RxPath<M = unknown, R = void>(name: string, options: BlockOptions<SVGPathElement, M, R> | undefined, renderer: Render<SVGPathElement, M, R>): Block<SVGPathElement, M, R> { return Reaction(name, options, renderer, SvgTags.path) }
export function RxPattern<M = unknown, R = void>(name: string, options: BlockOptions<SVGPatternElement, M, R> | undefined, renderer: Render<SVGPatternElement, M, R>): Block<SVGPatternElement, M, R> { return Reaction(name, options, renderer, SvgTags.pattern) }
export function RxPolygon<M = unknown, R = void>(name: string, options: BlockOptions<SVGPolygonElement, M, R> | undefined, renderer: Render<SVGPolygonElement, M, R>): Block<SVGPolygonElement, M, R> { return Reaction(name, options, renderer, SvgTags.polygon) }
export function RxPolyline<M = unknown, R = void>(name: string, options: BlockOptions<SVGPolylineElement, M, R> | undefined, renderer: Render<SVGPolylineElement, M, R>): Block<SVGPolylineElement, M, R> { return Reaction(name, options, renderer, SvgTags.polyline) }
export function RxRadialGradient<M = unknown, R = void>(name: string, options: BlockOptions<SVGRadialGradientElement, M, R> | undefined, renderer: Render<SVGRadialGradientElement, M, R>): Block<SVGRadialGradientElement, M, R> { return Reaction(name, options, renderer, SvgTags.radialGradient) }
export function RxRect<M = unknown, R = void>(name: string, options: BlockOptions<SVGRectElement, M, R> | undefined, renderer: Render<SVGRectElement, M, R>): Block<SVGRectElement, M, R> { return Reaction(name, options, renderer, SvgTags.rect) }
export function RxStop<M = unknown, R = void>(name: string, options: BlockOptions<SVGStopElement, M, R> | undefined, renderer: Render<SVGStopElement, M, R>): Block<SVGStopElement, M, R> { return Reaction(name, options, renderer, SvgTags.stop) }
export function RxSvgSwitch<M = unknown, R = void>(name: string, options: BlockOptions<SVGSwitchElement, M, R> | undefined, renderer: Render<SVGSwitchElement, M, R>): Block<SVGSwitchElement, M, R> { return Reaction(name, options, renderer, SvgTags.switch) }
export function RxSymbol<M = unknown, R = void>(name: string, options: BlockOptions<SVGSymbolElement, M, R> | undefined, renderer: Render<SVGSymbolElement, M, R>): Block<SVGSymbolElement, M, R> { return Reaction(name, options, renderer, SvgTags.symbol) }
export function RxText<M = unknown, R = void>(name: string, options: BlockOptions<SVGTextElement, M, R> | undefined, renderer: Render<SVGTextElement, M, R>): Block<SVGTextElement, M, R> { return Reaction(name, options, renderer, SvgTags.text) }
export function RxTextPath<M = unknown, R = void>(name: string, options: BlockOptions<SVGTextPathElement, M, R> | undefined, renderer: Render<SVGTextPathElement, M, R>): Block<SVGTextPathElement, M, R> { return Reaction(name, options, renderer, SvgTags.textPath) }
export function RxTSpan<M = unknown, R = void>(name: string, options: BlockOptions<SVGTSpanElement, M, R> | undefined, renderer: Render<SVGTSpanElement, M, R>): Block<SVGTSpanElement, M, R> { return Reaction(name, options, renderer, SvgTags.tspan) }
export function RxUse<M = unknown, R = void>(name: string, options: BlockOptions<SVGUseElement, M, R> | undefined, renderer: Render<SVGUseElement, M, R>): Block<SVGUseElement, M, R> { return Reaction(name, options, renderer, SvgTags.use) }
export function RxView<M = unknown, R = void>(name: string, options: BlockOptions<SVGViewElement, M, R> | undefined, renderer: Render<SVGViewElement, M, R>): Block<SVGViewElement, M, R> { return Reaction(name, options, renderer, SvgTags.view) }

export function Svg<M = unknown, R = void>(name: string, options: BlockOptions<SVGSVGElement, M, R> | undefined, renderer: Render<SVGSVGElement, M, R>): Block<SVGSVGElement, M, R> { return Inline(name, options, renderer, SvgTags.svg) }
export function SvgA<M = unknown, R = void>(name: string, options: BlockOptions<SVGAElement, M, R> | undefined, renderer: Render<SVGAElement, M, R>): Block<SVGAElement, M, R> { return Inline(name, options, renderer, SvgTags.a) }
export function Animate<M = unknown, R = void>(name: string, options: BlockOptions<SVGAnimateElement, M, R> | undefined, renderer: Render<SVGAnimateElement, M, R>): Block<SVGAnimateElement, M, R> { return Inline(name, options, renderer, SvgTags.animate) }
export function AnimateMotion<M = unknown, R = void>(name: string, options: BlockOptions<SVGAnimateMotionElement, M, R> | undefined, renderer: Render<SVGAnimateMotionElement, M, R>): Block<SVGAnimateMotionElement, M, R> { return Inline(name, options, renderer, SvgTags.animateMotion) }
export function AnimateTransform<M = unknown, R = void>(name: string, options: BlockOptions<SVGAnimateTransformElement, M, R> | undefined, renderer: Render<SVGAnimateTransformElement, M, R>): Block<SVGAnimateTransformElement, M, R> { return Inline(name, options, renderer, SvgTags.animateTransform) }
export function Circle<M = unknown, R = void>(name: string, options: BlockOptions<SVGCircleElement, M, R> | undefined, renderer: Render<SVGCircleElement, M, R>): Block<SVGCircleElement, M, R> { return Inline(name, options, renderer, SvgTags.circle) }
export function ClipPath<M = unknown, R = void>(name: string, options: BlockOptions<SVGClipPathElement, M, R> | undefined, renderer: Render<SVGClipPathElement, M, R>): Block<SVGClipPathElement, M, R> { return Inline(name, options, renderer, SvgTags.clipPath) }
export function Defs<M = unknown, R = void>(name: string, options: BlockOptions<SVGDefsElement, M, R> | undefined, renderer: Render<SVGDefsElement, M, R>): Block<SVGDefsElement, M, R> { return Inline(name, options, renderer, SvgTags.defs) }
export function Desc<M = unknown, R = void>(name: string, options: BlockOptions<SVGDescElement, M, R> | undefined, renderer: Render<SVGDescElement, M, R>): Block<SVGDescElement, M, R> { return Inline(name, options, renderer, SvgTags.desc) }
export function Ellipse<M = unknown, R = void>(name: string, options: BlockOptions<SVGEllipseElement, M, R> | undefined, renderer: Render<SVGEllipseElement, M, R>): Block<SVGEllipseElement, M, R> { return Inline(name, options, renderer, SvgTags.ellipse) }
export function FeBlend<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEBlendElement, M, R> | undefined, renderer: Render<SVGFEBlendElement, M, R>): Block<SVGFEBlendElement, M, R> { return Inline(name, options, renderer, SvgTags.feBlend) }
export function FeColorMatrix<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEColorMatrixElement, M, R> | undefined, renderer: Render<SVGFEColorMatrixElement, M, R>): Block<SVGFEColorMatrixElement, M, R> { return Inline(name, options, renderer, SvgTags.feColorMatrix) }
export function FeComponentTransfer<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEComponentTransferElement, M, R> | undefined, renderer: Render<SVGFEComponentTransferElement, M, R>): Block<SVGFEComponentTransferElement, M, R> { return Inline(name, options, renderer, SvgTags.feComponentTransfer) }
export function FeComposite<M = unknown, R = void>(name: string, options: BlockOptions<SVGFECompositeElement, M, R> | undefined, renderer: Render<SVGFECompositeElement, M, R>): Block<SVGFECompositeElement, M, R> { return Inline(name, options, renderer, SvgTags.feComposite) }
export function FeConvolveMatrix<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEConvolveMatrixElement, M, R> | undefined, renderer: Render<SVGFEConvolveMatrixElement, M, R>): Block<SVGFEConvolveMatrixElement, M, R> { return Inline(name, options, renderer, SvgTags.feConvolveMatrix) }
export function FeDiffuseLighting<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEDiffuseLightingElement, M, R> | undefined, renderer: Render<SVGFEDiffuseLightingElement, M, R>): Block<SVGFEDiffuseLightingElement, M, R> { return Inline(name, options, renderer, SvgTags.feDiffuseLighting) }
export function FeDisplacementMap<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEDisplacementMapElement, M, R> | undefined, renderer: Render<SVGFEDisplacementMapElement, M, R>): Block<SVGFEDisplacementMapElement, M, R> { return Inline(name, options, renderer, SvgTags.feDisplacementMap) }
export function FeDistantLight<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEDistantLightElement, M, R> | undefined, renderer: Render<SVGFEDistantLightElement, M, R>): Block<SVGFEDistantLightElement, M, R> { return Inline(name, options, renderer, SvgTags.feDistantLight) }
export function FeDropShadow<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEDropShadowElement, M, R> | undefined, renderer: Render<SVGFEDropShadowElement, M, R>): Block<SVGFEDropShadowElement, M, R> { return Inline(name, options, renderer, SvgTags.feDropShadow) }
export function FeFlood<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEFloodElement, M, R> | undefined, renderer: Render<SVGFEFloodElement, M, R>): Block<SVGFEFloodElement, M, R> { return Inline(name, options, renderer, SvgTags.feFlood) }
export function FeFuncA<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEFuncAElement, M, R> | undefined, renderer: Render<SVGFEFuncAElement, M, R>): Block<SVGFEFuncAElement, M, R> { return Inline(name, options, renderer, SvgTags.feFuncA) }
export function FeFuncB<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEFuncBElement, M, R> | undefined, renderer: Render<SVGFEFuncBElement, M, R>): Block<SVGFEFuncBElement, M, R> { return Inline(name, options, renderer, SvgTags.feFuncB) }
export function FeFuncG<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEFuncGElement, M, R> | undefined, renderer: Render<SVGFEFuncGElement, M, R>): Block<SVGFEFuncGElement, M, R> { return Inline(name, options, renderer, SvgTags.feFuncG) }
export function FeFuncR<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEFuncRElement, M, R> | undefined, renderer: Render<SVGFEFuncRElement, M, R>): Block<SVGFEFuncRElement, M, R> { return Inline(name, options, renderer, SvgTags.feFuncR) }
export function FeGaussianBlur<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEGaussianBlurElement, M, R> | undefined, renderer: Render<SVGFEGaussianBlurElement, M, R>): Block<SVGFEGaussianBlurElement, M, R> { return Inline(name, options, renderer, SvgTags.feGaussianBlur) }
export function FeImage<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEImageElement, M, R> | undefined, renderer: Render<SVGFEImageElement, M, R>): Block<SVGFEImageElement, M, R> { return Inline(name, options, renderer, SvgTags.feImage) }
export function FeMerge<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEMergeElement, M, R> | undefined, renderer: Render<SVGFEMergeElement, M, R>): Block<SVGFEMergeElement, M, R> { return Inline(name, options, renderer, SvgTags.feMerge) }
export function FeMergeNode<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEMergeNodeElement, M, R> | undefined, renderer: Render<SVGFEMergeNodeElement, M, R>): Block<SVGFEMergeNodeElement, M, R> { return Inline(name, options, renderer, SvgTags.feMergeNode) }
export function FeMorphology<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEMorphologyElement, M, R> | undefined, renderer: Render<SVGFEMorphologyElement, M, R>): Block<SVGFEMorphologyElement, M, R> { return Inline(name, options, renderer, SvgTags.feMorphology) }
export function FeOffset<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEOffsetElement, M, R> | undefined, renderer: Render<SVGFEOffsetElement, M, R>): Block<SVGFEOffsetElement, M, R> { return Inline(name, options, renderer, SvgTags.feOffset) }
export function FePointLight<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEPointLightElement, M, R> | undefined, renderer: Render<SVGFEPointLightElement, M, R>): Block<SVGFEPointLightElement, M, R> { return Inline(name, options, renderer, SvgTags.fePointLight) }
export function FeSpecularLighting<M = unknown, R = void>(name: string, options: BlockOptions<SVGFESpecularLightingElement, M, R> | undefined, renderer: Render<SVGFESpecularLightingElement, M, R>): Block<SVGFESpecularLightingElement, M, R> { return Inline(name, options, renderer, SvgTags.feSpecularLighting) }
export function FeSpotLight<M = unknown, R = void>(name: string, options: BlockOptions<SVGFESpotLightElement, M, R> | undefined, renderer: Render<SVGFESpotLightElement, M, R>): Block<SVGFESpotLightElement, M, R> { return Inline(name, options, renderer, SvgTags.feSpotLight) }
export function FeTile<M = unknown, R = void>(name: string, options: BlockOptions<SVGFETileElement, M, R> | undefined, renderer: Render<SVGFETileElement, M, R>): Block<SVGFETileElement, M, R> { return Inline(name, options, renderer, SvgTags.feTile) }
export function FeTurbulence<M = unknown, R = void>(name: string, options: BlockOptions<SVGFETurbulenceElement, M, R> | undefined, renderer: Render<SVGFETurbulenceElement, M, R>): Block<SVGFETurbulenceElement, M, R> { return Inline(name, options, renderer, SvgTags.feTurbulence) }
export function Filter<M = unknown, R = void>(name: string, options: BlockOptions<SVGFilterElement, M, R> | undefined, renderer: Render<SVGFilterElement, M, R>): Block<SVGFilterElement, M, R> { return Inline(name, options, renderer, SvgTags.filter) }
export function ForeignObject<M = unknown, R = void>(name: string, options: BlockOptions<SVGForeignObjectElement, M, R> | undefined, renderer: Render<SVGForeignObjectElement, M, R>): Block<SVGForeignObjectElement, M, R> { return Inline(name, options, renderer, SvgTags.foreignObject) }
export function G<M = unknown, R = void>(name: string, options: BlockOptions<SVGGElement, M, R> | undefined, renderer: Render<SVGGElement, M, R>): Block<SVGGElement, M, R> { return Inline(name, options, renderer, SvgTags.g) }
export function SvgImage<M = unknown, R = void>(name: string, options: BlockOptions<SVGImageElement, M, R> | undefined, renderer: Render<SVGImageElement, M, R>): Block<SVGImageElement, M, R> { return Inline(name, options, renderer, SvgTags.image) }
export function Line<M = unknown, R = void>(name: string, options: BlockOptions<SVGLineElement, M, R> | undefined, renderer: Render<SVGLineElement, M, R>): Block<SVGLineElement, M, R> { return Inline(name, options, renderer, SvgTags.line) }
export function LinearGradient<M = unknown, R = void>(name: string, options: BlockOptions<SVGLinearGradientElement, M, R> | undefined, renderer: Render<SVGLinearGradientElement, M, R>): Block<SVGLinearGradientElement, M, R> { return Inline(name, options, renderer, SvgTags.linearGradient) }
export function Marker<M = unknown, R = void>(name: string, options: BlockOptions<SVGMarkerElement, M, R> | undefined, renderer: Render<SVGMarkerElement, M, R>): Block<SVGMarkerElement, M, R> { return Inline(name, options, renderer, SvgTags.marker) }
export function Mask<M = unknown, R = void>(name: string, options: BlockOptions<SVGMaskElement, M, R> | undefined, renderer: Render<SVGMaskElement, M, R>): Block<SVGMaskElement, M, R> { return Inline(name, options, renderer, SvgTags.mask) }
export function MetaData<M = unknown, R = void>(name: string, options: BlockOptions<SVGMetadataElement, M, R> | undefined, renderer: Render<SVGMetadataElement, M, R>): Block<SVGMetadataElement, M, R> { return Inline(name, options, renderer, SvgTags.metadata) }
export function MPath<M = unknown, R = void>(name: string, options: BlockOptions<SVGElement, M, R> | undefined, renderer: Render<SVGElement, M, R>): Block<SVGElement, M, R> { return Inline(name, options, renderer, SvgTags.mpath) }
export function Path<M = unknown, R = void>(name: string, options: BlockOptions<SVGPathElement, M, R> | undefined, renderer: Render<SVGPathElement, M, R>): Block<SVGPathElement, M, R> { return Inline(name, options, renderer, SvgTags.path) }
export function Pattern<M = unknown, R = void>(name: string, options: BlockOptions<SVGPatternElement, M, R> | undefined, renderer: Render<SVGPatternElement, M, R>): Block<SVGPatternElement, M, R> { return Inline(name, options, renderer, SvgTags.pattern) }
export function Polygon<M = unknown, R = void>(name: string, options: BlockOptions<SVGPolygonElement, M, R> | undefined, renderer: Render<SVGPolygonElement, M, R>): Block<SVGPolygonElement, M, R> { return Inline(name, options, renderer, SvgTags.polygon) }
export function PolyLine<M = unknown, R = void>(name: string, options: BlockOptions<SVGPolylineElement, M, R> | undefined, renderer: Render<SVGPolylineElement, M, R>): Block<SVGPolylineElement, M, R> { return Inline(name, options, renderer, SvgTags.polyline) }
export function RadialGradient<M = unknown, R = void>(name: string, options: BlockOptions<SVGRadialGradientElement, M, R> | undefined, renderer: Render<SVGRadialGradientElement, M, R>): Block<SVGRadialGradientElement, M, R> { return Inline(name, options, renderer, SvgTags.radialGradient) }
export function Rect<M = unknown, R = void>(name: string, options: BlockOptions<SVGRectElement, M, R> | undefined, renderer: Render<SVGRectElement, M, R>): Block<SVGRectElement, M, R> { return Inline(name, options, renderer, SvgTags.rect) }
export function Stop<M = unknown, R = void>(name: string, options: BlockOptions<SVGStopElement, M, R> | undefined, renderer: Render<SVGStopElement, M, R>): Block<SVGStopElement, M, R> { return Inline(name, options, renderer, SvgTags.stop) }
export function SvgSwitch<M = unknown, R = void>(name: string, options: BlockOptions<SVGSwitchElement, M, R> | undefined, renderer: Render<SVGSwitchElement, M, R>): Block<SVGSwitchElement, M, R> { return Inline(name, options, renderer, SvgTags.switch) }
export function Symbol<M = unknown, R = void>(name: string, options: BlockOptions<SVGSymbolElement, M, R> | undefined, renderer: Render<SVGSymbolElement, M, R>): Block<SVGSymbolElement, M, R> { return Inline(name, options, renderer, SvgTags.symbol) }
export function Text<M = unknown, R = void>(name: string, options: BlockOptions<SVGTextElement, M, R> | undefined, renderer: Render<SVGTextElement, M, R>): Block<SVGTextElement, M, R> { return Inline(name, options, renderer, SvgTags.text) }
export function TextPath<M = unknown, R = void>(name: string, options: BlockOptions<SVGTextPathElement, M, R> | undefined, renderer: Render<SVGTextPathElement, M, R>): Block<SVGTextPathElement, M, R> { return Inline(name, options, renderer, SvgTags.textPath) }
export function TSpan<M = unknown, R = void>(name: string, options: BlockOptions<SVGTSpanElement, M, R> | undefined, renderer: Render<SVGTSpanElement, M, R>): Block<SVGTSpanElement, M, R> { return Inline(name, options, renderer, SvgTags.tspan) }
export function Use<M = unknown, R = void>(name: string, options: BlockOptions<SVGUseElement, M, R> | undefined, renderer: Render<SVGUseElement, M, R>): Block<SVGUseElement, M, R> { return Inline(name, options, renderer, SvgTags.use) }
export function View<M = unknown, R = void>(name: string, options: BlockOptions<SVGViewElement, M, R> | undefined, renderer: Render<SVGViewElement, M, R>): Block<SVGViewElement, M, R> { return Inline(name, options, renderer, SvgTags.view) }

const VerstakTags = {
  block: new UniversalHtmlBlockFactory<HTMLDivElement>('div', 'grid'),
  group: new UniversalHtmlBlockFactory<HTMLDivElement>('div', 'contents'),
}

const HtmlTags = {
  a: new HtmlBlockFactory<HTMLAnchorElement>('a', true),
  abbr: new HtmlBlockFactory<HTMLElement>('abbr', true),
  address: new HtmlBlockFactory<HTMLElement>('address', true),
  area: new HtmlBlockFactory<HTMLAreaElement>('area', true),
  article: new HtmlBlockFactory<HTMLElement>('article', true),
  aside: new HtmlBlockFactory<HTMLElement>('aside', true),
  audio: new HtmlBlockFactory<HTMLAudioElement>('audio', true),
  b: new HtmlBlockFactory<HTMLElement>('b', true),
  base: new HtmlBlockFactory<HTMLBaseElement>('base', true),
  bdi: new HtmlBlockFactory<HTMLElement>('bdi', true),
  bdo: new HtmlBlockFactory<HTMLElement>('bdo', true),
  big: new HtmlBlockFactory<HTMLElement>('big', true),
  blockquote: new HtmlBlockFactory<HTMLElement>('blockquote', true),
  body: new HtmlBlockFactory<HTMLBodyElement>('body', true),
  br: new HtmlBlockFactory<HTMLBRElement>('br', true),
  button: new HtmlBlockFactory<HTMLButtonElement>('button', true),
  canvas: new HtmlBlockFactory<HTMLCanvasElement>('canvas', true),
  caption: new HtmlBlockFactory<HTMLTableCaptionElement>('caption', true),
  cite: new HtmlBlockFactory<HTMLElement>('cite', true),
  code: new HtmlBlockFactory<HTMLElement>('code', true),
  col: new HtmlBlockFactory<HTMLTableColElement>('col', true),
  colgroup: new HtmlBlockFactory<HTMLTableColElement>('colgroup', true),
  data: new HtmlBlockFactory<HTMLDataElement>('data', true),
  datalist: new HtmlBlockFactory<HTMLDataListElement>('datalist', true),
  dd: new HtmlBlockFactory<HTMLElement>('dd', true),
  del: new HtmlBlockFactory<HTMLElement>('del', true),
  details: new HtmlBlockFactory<HTMLElement>('details', true),
  dfn: new HtmlBlockFactory<HTMLElement>('dfn', true),
  div: new HtmlBlockFactory<HTMLDivElement>('div', true),
  dl: new HtmlBlockFactory<HTMLDListElement>('dl', true),
  dt: new HtmlBlockFactory<HTMLElement>('dt', true),
  em: new HtmlBlockFactory<HTMLElement>('em', true),
  embed: new HtmlBlockFactory<HTMLEmbedElement>('embed', true),
  fieldset: new HtmlBlockFactory<HTMLFieldSetElement>('fieldset', true),
  figcaption: new HtmlBlockFactory<HTMLElement>('figcaption', true),
  figure: new HtmlBlockFactory<HTMLElement>('figure', true),
  footer: new HtmlBlockFactory<HTMLElement>('footer', true),
  form: new HtmlBlockFactory<HTMLFormElement>('form', true),
  h1: new HtmlBlockFactory<HTMLHeadingElement>('h1', true),
  h2: new HtmlBlockFactory<HTMLHeadingElement>('h2', true),
  h3: new HtmlBlockFactory<HTMLHeadingElement>('h3', true),
  h4: new HtmlBlockFactory<HTMLHeadingElement>('h4', true),
  h5: new HtmlBlockFactory<HTMLHeadingElement>('h5', true),
  h6: new HtmlBlockFactory<HTMLHeadingElement>('h6', true),
  head: new HtmlBlockFactory<HTMLHeadElement>('head', true),
  header: new HtmlBlockFactory<HTMLElement>('header', true),
  hgroup: new HtmlBlockFactory<HTMLElement>('hgroup', true),
  hr: new HtmlBlockFactory<HTMLHRElement>('hr', true),
  html: new HtmlBlockFactory<HTMLHtmlElement>('html', true),
  i: new HtmlBlockFactory<HTMLElement>('i', true),
  iframe: new HtmlBlockFactory<HTMLIFrameElement>('iframe', true),
  img: new HtmlBlockFactory<HTMLImageElement>('img', true),
  input: new HtmlBlockFactory<HTMLInputElement>('input', true),
  ins: new HtmlBlockFactory<HTMLModElement>('ins', true),
  kbd: new HtmlBlockFactory<HTMLElement>('kbd', true),
  keygen: new HtmlBlockFactory<HTMLElement>('keygen', true),
  label: new HtmlBlockFactory<HTMLLabelElement>('label', true),
  legend: new HtmlBlockFactory<HTMLLegendElement>('legend', true),
  li: new HtmlBlockFactory<HTMLLIElement>('li', true),
  link: new HtmlBlockFactory<HTMLLinkElement>('link', true),
  main: new HtmlBlockFactory<HTMLElement>('main', true),
  map: new HtmlBlockFactory<HTMLMapElement>('map', true),
  mark: new HtmlBlockFactory<HTMLElement>('mark', true),
  menu: new HtmlBlockFactory<HTMLElement>('menu', true),
  menuitem: new HtmlBlockFactory<HTMLElement>('menuitem', true),
  meta: new HtmlBlockFactory<HTMLMetaElement>('meta', true),
  meter: new HtmlBlockFactory<HTMLElement>('meter', true),
  nav: new HtmlBlockFactory<HTMLElement>('nav', true),
  noindex: new HtmlBlockFactory<HTMLElement>('noindex', true),
  noscript: new HtmlBlockFactory<HTMLElement>('noscript', true),
  object: new HtmlBlockFactory<HTMLObjectElement>('object', true),
  ol: new HtmlBlockFactory<HTMLOListElement>('ol', true),
  optgroup: new HtmlBlockFactory<HTMLOptGroupElement>('optgroup', true),
  option: new HtmlBlockFactory<HTMLOptionElement>('option', true),
  output: new HtmlBlockFactory<HTMLElement>('output', true),
  p: new HtmlBlockFactory<HTMLParagraphElement>('p', true),
  param: new HtmlBlockFactory<HTMLElement>('param', true),
  picture: new HtmlBlockFactory<HTMLElement>('picture', true),
  pre: new HtmlBlockFactory<HTMLPreElement>('pre', true),
  progress: new HtmlBlockFactory<HTMLProgressElement>('progress', true),
  q: new HtmlBlockFactory<HTMLQuoteElement>('q', true),
  rp: new HtmlBlockFactory<HTMLElement>('rp', true),
  rt: new HtmlBlockFactory<HTMLElement>('rt', true),
  ruby: new HtmlBlockFactory<HTMLElement>('ruby', true),
  s: new HtmlBlockFactory<HTMLElement>('s', true),
  samp: new HtmlBlockFactory<HTMLElement>('samp', true),
  script: new HtmlBlockFactory<HTMLScriptElement>('script', true),
  section: new HtmlBlockFactory<HTMLElement>('section', true),
  select: new HtmlBlockFactory<HTMLSelectElement>('select', true),
  small: new HtmlBlockFactory<HTMLElement>('small', true),
  source: new HtmlBlockFactory<HTMLSourceElement>('source', true),
  span: new HtmlBlockFactory<HTMLSpanElement>('span', true),
  strong: new HtmlBlockFactory<HTMLElement>('strong', true),
  style: new HtmlBlockFactory<HTMLStyleElement>('style', true),
  sub: new HtmlBlockFactory<HTMLElement>('sub', true),
  summary: new HtmlBlockFactory<HTMLElement>('summary', true),
  sup: new HtmlBlockFactory<HTMLElement>('sup', true),
  table: new HtmlBlockFactory<HTMLTableElement>('table', true),
  template: new HtmlBlockFactory<HTMLTemplateElement>('template', true),
  tbody: new HtmlBlockFactory<HTMLTableSectionElement>('tbody', true),
  td: new HtmlBlockFactory<HTMLTableCellElement>('td', true),
  textarea: new HtmlBlockFactory<HTMLTextAreaElement>('textarea', true),
  tfoot: new HtmlBlockFactory<HTMLTableSectionElement>('tfoot', true),
  th: new HtmlBlockFactory<HTMLTableCellElement>('th', true),
  thead: new HtmlBlockFactory<HTMLTableSectionElement>('thead', true),
  time: new HtmlBlockFactory<HTMLElement>('time', true),
  title: new HtmlBlockFactory<HTMLTitleElement>('title', true),
  tr: new HtmlBlockFactory<HTMLTableRowElement>('tr', true),
  track: new HtmlBlockFactory<HTMLTrackElement>('track', true),
  u: new HtmlBlockFactory<HTMLElement>('u', true),
  ul: new HtmlBlockFactory<HTMLUListElement>('ul', true),
  var: new HtmlBlockFactory<HTMLElement>('var', true),
  video: new HtmlBlockFactory<HTMLVideoElement>('video', true),
  wbr: new HtmlBlockFactory<HTMLElement>('wbr', true),
  // webview: new HtmlNodeFactory<HTMLWebViewElement>('webview', true),
}

const SvgTags = {
  svg: new SvgBlockFactory<SVGSVGElement>('svg', true),
  a: new SvgBlockFactory<SVGAElement>('a', true),
  animate: new SvgBlockFactory<SVGAnimateElement>('animate', true),
  animateMotion: new SvgBlockFactory<SVGAnimateMotionElement>('animateMotion', true),
  animateTransform: new SvgBlockFactory<SVGAnimateTransformElement>('animateTransform', true),
  circle: new SvgBlockFactory<SVGCircleElement>('circle', true),
  clipPath: new SvgBlockFactory<SVGClipPathElement>('clipPath', true),
  defs: new SvgBlockFactory<SVGDefsElement>('defs', true),
  desc: new SvgBlockFactory<SVGDescElement>('desc', true),
  ellipse: new SvgBlockFactory<SVGEllipseElement>('ellipse', true),
  feBlend: new SvgBlockFactory<SVGFEBlendElement>('feBlend', true),
  feColorMatrix: new SvgBlockFactory<SVGFEColorMatrixElement>('feColorMatrix', true),
  feComponentTransfer: new SvgBlockFactory<SVGFEComponentTransferElement>('feComponentTransfer', true),
  feComposite: new SvgBlockFactory<SVGFECompositeElement>('feComposite', true),
  feConvolveMatrix: new SvgBlockFactory<SVGFEConvolveMatrixElement>('feConvolveMatrix', true),
  feDiffuseLighting: new SvgBlockFactory<SVGFEDiffuseLightingElement>('feDiffuseLighting', true),
  feDisplacementMap: new SvgBlockFactory<SVGFEDisplacementMapElement>('feDisplacementMap', true),
  feDistantLight: new SvgBlockFactory<SVGFEDistantLightElement>('feDistantLight', true),
  feDropShadow: new SvgBlockFactory<SVGFEDropShadowElement>('feDropShadow', true),
  feFlood: new SvgBlockFactory<SVGFEFloodElement>('feFlood', true),
  feFuncA: new SvgBlockFactory<SVGFEFuncAElement>('feFuncA', true),
  feFuncB: new SvgBlockFactory<SVGFEFuncBElement>('feFuncB', true),
  feFuncG: new SvgBlockFactory<SVGFEFuncGElement>('feFuncG', true),
  feFuncR: new SvgBlockFactory<SVGFEFuncRElement>('feFuncR', true),
  feGaussianBlur: new SvgBlockFactory<SVGFEGaussianBlurElement>('feGaussianBlur', true),
  feImage: new SvgBlockFactory<SVGFEImageElement>('feImage', true),
  feMerge: new SvgBlockFactory<SVGFEMergeElement>('feMerge', true),
  feMergeNode: new SvgBlockFactory<SVGFEMergeNodeElement>('feMergeNode', true),
  feMorphology: new SvgBlockFactory<SVGFEMorphologyElement>('feMorphology', true),
  feOffset: new SvgBlockFactory<SVGFEOffsetElement>('feOffset', true),
  fePointLight: new SvgBlockFactory<SVGFEPointLightElement>('fePointLight', true),
  feSpecularLighting: new SvgBlockFactory<SVGFESpecularLightingElement>('feSpecularLighting', true),
  feSpotLight: new SvgBlockFactory<SVGFESpotLightElement>('feSpotLight', true),
  feTile: new SvgBlockFactory<SVGFETileElement>('feTile', true),
  feTurbulence: new SvgBlockFactory<SVGFETurbulenceElement>('feTurbulence', true),
  filter: new SvgBlockFactory<SVGFilterElement>('filter', true),
  foreignObject: new SvgBlockFactory<SVGForeignObjectElement>('foreignObject', true),
  g: new SvgBlockFactory<SVGGElement>('g', true),
  image: new SvgBlockFactory<SVGImageElement>('image', true),
  line: new SvgBlockFactory<SVGLineElement>('line', true),
  linearGradient: new SvgBlockFactory<SVGLinearGradientElement>('linearGradient', true),
  marker: new SvgBlockFactory<SVGMarkerElement>('marker', true),
  mask: new SvgBlockFactory<SVGMaskElement>('mask', true),
  metadata: new SvgBlockFactory<SVGMetadataElement>('metadata', true),
  mpath: new SvgBlockFactory<SVGElement>('mpath', true),
  path: new SvgBlockFactory<SVGPathElement>('path', true),
  pattern: new SvgBlockFactory<SVGPatternElement>('pattern', true),
  polygon: new SvgBlockFactory<SVGPolygonElement>('polygon', true),
  polyline: new SvgBlockFactory<SVGPolylineElement>('polyline', true),
  radialGradient: new SvgBlockFactory<SVGRadialGradientElement>('radialGradient', true),
  rect: new SvgBlockFactory<SVGRectElement>('rect', true),
  stop: new SvgBlockFactory<SVGStopElement>('stop', true),
  switch: new SvgBlockFactory<SVGSwitchElement>('switch', true),
  symbol: new SvgBlockFactory<SVGSymbolElement>('symbol', true),
  text: new SvgBlockFactory<SVGTextElement>('text', true),
  textPath: new SvgBlockFactory<SVGTextPathElement>('textPath', true),
  tspan: new SvgBlockFactory<SVGTSpanElement>('tspan', true),
  use: new SvgBlockFactory<SVGUseElement>('use', true),
  view: new SvgBlockFactory<SVGViewElement>('view', true),
}
