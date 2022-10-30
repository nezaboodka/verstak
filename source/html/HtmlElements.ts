// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { LoggingOptions, Monitor } from 'reactronic'
import { VerstakNode, Reaction, Inline, Render, StaticNodeFactory, Priority, Place, VerstakOptions } from '../core/api'
import { HtmlElementNodeFactory, SvgElementNodeFactory } from './HtmlNodeFactory'

export function RxHtmlBody(name: string, triggers: unknown, renderer: Render<HTMLElement>): VerstakNode<HTMLElement> {
  const factory = new StaticNodeFactory(name, true, global.document.body)
  return Reaction(name, undefined, renderer, factory)
}

export function RxA<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLAnchorElement, M, Place, R>): VerstakNode<HTMLAnchorElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.a) }
export function RxAbbr<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.abbr) }
export function RxAddress<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.address) }
export function RxArea<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLAreaElement, M, Place, R>): VerstakNode<HTMLAreaElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.area) }
export function RxArticle<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.article) }
export function RxAside<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.aside) }
export function RxAudio<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLAudioElement, M, Place, R>): VerstakNode<HTMLAudioElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.audio) }
export function RxB<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.b) }
export function RxBase<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLBaseElement, M, Place, R>): VerstakNode<HTMLBaseElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.base) }
export function RxBdi<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.bdi) }
export function RxBdo<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.bdo) }
export function RxBig<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.big) }
export function RxBlockQuote<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.blockquote) }
export function RxBody<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLBodyElement, M, Place, R>): VerstakNode<HTMLBodyElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.body) }
export function RxBR<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLBRElement, M, Place, R>): VerstakNode<HTMLBRElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.br) }
export function RxButton<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLButtonElement, M, Place, R>): VerstakNode<HTMLButtonElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.button) }
export function RxCanvas<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLCanvasElement, M, Place, R>): VerstakNode<HTMLCanvasElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.canvas) }
export function RxCaption<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLTableCaptionElement, M, Place, R>): VerstakNode<HTMLTableCaptionElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.caption) }
export function RxCite<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.cite) }
export function RxCode<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.code) }
export function RxCol<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLTableColElement, M, Place, R>): VerstakNode<HTMLTableColElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.col) }
export function RxColGroup<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLTableColElement, M, Place, R>): VerstakNode<HTMLTableColElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.colgroup) }
export function RxData<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLDataElement, M, Place, R>): VerstakNode<HTMLDataElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.data) }
export function RxDataList<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLDataListElement, M, Place, R>): VerstakNode<HTMLDataListElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.datalist) }
export function RxDD<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.dd) }
export function RxDel<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.del) }
export function RxDetails<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.details) }
export function RxDfn<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.dfn) }
export function RxDiv<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLDivElement, M, Place, R>): VerstakNode<HTMLDivElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.div) }
export function RxDL<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLDListElement, M, Place, R>): VerstakNode<HTMLDListElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.dl) }
export function RxDT<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.dt) }
export function RxEM<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.em) }
export function RxEmbed<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLEmbedElement, M, Place, R>): VerstakNode<HTMLEmbedElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.embed) }
export function RxFieldSet<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLFieldSetElement, M, Place, R>): VerstakNode<HTMLFieldSetElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.fieldset) }
export function RxFigCaption<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.figcaption) }
export function RxFigure<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.figure) }
export function RxFooter<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.footer) }
export function RxForm<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLFormElement, M, Place, R>): VerstakNode<HTMLFormElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.form) }
export function RxH1<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLHeadingElement, M, Place, R>): VerstakNode<HTMLHeadingElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.h1) }
export function RxH2<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLHeadingElement, M, Place, R>): VerstakNode<HTMLHeadingElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.h2) }
export function RxH3<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLHeadingElement, M, Place, R>): VerstakNode<HTMLHeadingElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.h3) }
export function RxH4<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLHeadingElement, M, Place, R>): VerstakNode<HTMLHeadingElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.h4) }
export function RxH5<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLHeadingElement, M, Place, R>): VerstakNode<HTMLHeadingElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.h5) }
export function RxH6<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLHeadingElement, M, Place, R>): VerstakNode<HTMLHeadingElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.h6) }
export function RxHead<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLHeadElement, M, Place, R>): VerstakNode<HTMLHeadElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.head) }
export function RxHeader<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.header) }
export function RxHGroup<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.hgroup) }
export function RxHR<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLHRElement, M, Place, R>): VerstakNode<HTMLHRElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.hr) }
export function RxHtml<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLHtmlElement, M, Place, R>): VerstakNode<HTMLHtmlElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.html) }
export function RxI<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.i) }
export function RxIFrame<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLIFrameElement, M, Place, R>): VerstakNode<HTMLIFrameElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.iframe) }
export function RxImg<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLImageElement, M, Place, R>): VerstakNode<HTMLImageElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.img) }
export function RxInput<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLInputElement, M, Place, R>): VerstakNode<HTMLInputElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.input) }
export function RxIns<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLModElement, M, Place, R>): VerstakNode<HTMLModElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.ins) }
export function RxKbd<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.kbd) }
export function RxKeygen<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.keygen) }
export function RxLabel<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLLabelElement, M, Place, R>): VerstakNode<HTMLLabelElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.label) }
export function RxLegend<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLLegendElement, M, Place, R>): VerstakNode<HTMLLegendElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.legend) }
export function RxLI<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLLIElement, M, Place, R>): VerstakNode<HTMLLIElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.li) }
export function RxLink<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLLinkElement, M, Place, R>): VerstakNode<HTMLLinkElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.link) }
export function RxMain<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.main) }
export function RxMap<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLMapElement, M, Place, R>): VerstakNode<HTMLMapElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.map) }
export function RxMark<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.mark) }
export function RxMenu<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.menu) }
export function RxMenuItem<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.menuitem) }
export function RxMeta<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLMetaElement, M, Place, R>): VerstakNode<HTMLMetaElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.meta) }
export function RxMeter<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.meter) }
export function RxNav<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.nav) }
export function RxNoIndex<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.noindex) }
export function RxNoScript<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.noscript) }
export function RxObj<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLObjectElement, M, Place, R>): VerstakNode<HTMLObjectElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.object) }
export function RxOL<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLOListElement, M, Place, R>): VerstakNode<HTMLOListElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.ol) }
export function RxOptGroup<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLOptGroupElement, M, Place, R>): VerstakNode<HTMLOptGroupElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.optgroup) }
export function RxOption<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLOptionElement, M, Place, R>): VerstakNode<HTMLOptionElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.option) }
export function RxOutput<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.output) }
export function RxP<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLParagraphElement, M, Place, R>): VerstakNode<HTMLParagraphElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.p) }
export function RxParam<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLParamElement, M, Place, R>): VerstakNode<HTMLParamElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.param) }
export function RxPicture<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.picture) }
export function RxPre<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLPreElement, M, Place, R>): VerstakNode<HTMLPreElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.pre) }
export function RxProgress<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLProgressElement, M, Place, R>): VerstakNode<HTMLProgressElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.progress) }
export function RxQ<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLQuoteElement, M, Place, R>): VerstakNode<HTMLQuoteElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.q) }
export function RxRP<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.rp) }
export function RxRT<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.rt) }
export function RxRuby<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.ruby) }
export function RxS<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.s) }
export function RxSamp<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.samp) }
export function RxScript<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLScriptElement, M, Place, R>): VerstakNode<HTMLScriptElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.script) }
export function RxSection<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.section) }
export function RxSelect<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLSelectElement, M, Place, R>): VerstakNode<HTMLSelectElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.select) }
export function RxSmall<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.small) }
export function RxSource<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLSourceElement, M, Place, R>): VerstakNode<HTMLSourceElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.source) }
export function RxSpan<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLSpanElement, M, Place, R>): VerstakNode<HTMLSpanElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.span) }
export function RxStrong<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.strong) }
export function RxStyle<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLStyleElement, M, Place, R>): VerstakNode<HTMLStyleElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.style) }
export function RxSub<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.sub) }
export function RxSummary<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.summary) }
export function RxSup<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.sup) }
export function RxTable<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLTableElement, M, Place, R>): VerstakNode<HTMLTableElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.table) }
export function RxTemplate<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLTemplateElement, M, Place, R>): VerstakNode<HTMLTemplateElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.template) }
export function RxTBody<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLTableSectionElement, M, Place, R>): VerstakNode<HTMLTableSectionElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.tbody) }
export function RxTD<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLTableCellElement, M, Place, R>): VerstakNode<HTMLTableCellElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.td) }
export function RxTextArea<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLTextAreaElement, M, Place, R>): VerstakNode<HTMLTextAreaElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.textarea) }
export function RxTFoot<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLTableSectionElement, M, Place, R>): VerstakNode<HTMLTableSectionElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.tfoot) }
export function RxTH<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLTableCellElement, M, Place, R>): VerstakNode<HTMLTableCellElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.th) }
export function RxTHead<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLTableSectionElement, M, Place, R>): VerstakNode<HTMLTableSectionElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.thead) }
export function RxTime<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.time) }
export function RxTitle<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLTitleElement, M, Place, R>): VerstakNode<HTMLTitleElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.title) }
export function RxTR<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLTableRowElement, M, Place, R>): VerstakNode<HTMLTableRowElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.tr) }
export function RxTrack<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLTrackElement, M, Place, R>): VerstakNode<HTMLTrackElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.track) }
export function RxU<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.u) }
export function RxUL<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLUListElement, M, Place, R>): VerstakNode<HTMLUListElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.ul) }
export function RxVar<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.var) }
export function RxVideo<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLVideoElement, M, Place, R>): VerstakNode<HTMLVideoElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.video) }
export function RxWbr<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.wbr) }

export function A<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLAnchorElement, M, Place, R>): VerstakNode<HTMLAnchorElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.a) }
export function Abbr<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.abbr) }
export function Address<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.address) }
export function Area<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLAreaElement, M, Place, R>): VerstakNode<HTMLAreaElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.area) }
export function Article<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.article) }
export function Aside<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.aside) }
export function Audio<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLAudioElement, M, Place, R>): VerstakNode<HTMLAudioElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.audio) }
export function B<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.b) }
export function Base<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLBaseElement, M, Place, R>): VerstakNode<HTMLBaseElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.base) }
export function Bdi<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.bdi) }
export function Bdo<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.bdo) }
export function Big<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.big) }
export function BlockQuote<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.blockquote) }
export function Body<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLBodyElement, M, Place, R>): VerstakNode<HTMLBodyElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.body) }
export function BR<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLBRElement, M, Place, R>): VerstakNode<HTMLBRElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.br) }
export function Button<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLButtonElement, M, Place, R>): VerstakNode<HTMLButtonElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.button) }
export function Canvas<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLCanvasElement, M, Place, R>): VerstakNode<HTMLCanvasElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.canvas) }
export function Caption<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLTableCaptionElement, M, Place, R>): VerstakNode<HTMLTableCaptionElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.caption) }
export function Cite<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.cite) }
export function Code<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.code) }
export function Col<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLTableColElement, M, Place, R>): VerstakNode<HTMLTableColElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.col) }
export function ColGroup<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLTableColElement, M, Place, R>): VerstakNode<HTMLTableColElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.colgroup) }
export function Data<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLDataElement, M, Place, R>): VerstakNode<HTMLDataElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.data) }
export function DataList<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLDataListElement, M, Place, R>): VerstakNode<HTMLDataListElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.datalist) }
export function DD<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.dd) }
export function Del<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.del) }
export function Details<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.details) }
export function Dfn<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.dfn) }
export function Div<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLDivElement, M, Place, R>): VerstakNode<HTMLDivElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.div) }
export function DL<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLDListElement, M, Place, R>): VerstakNode<HTMLDListElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.dl) }
export function DT<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.dt) }
export function EM<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.em) }
export function Embed<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLEmbedElement, M, Place, R>): VerstakNode<HTMLEmbedElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.embed) }
export function FieldSet<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLFieldSetElement, M, Place, R>): VerstakNode<HTMLFieldSetElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.fieldset) }
export function FigCaption<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.figcaption) }
export function Figure<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.figure) }
export function Footer<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.footer) }
export function Form<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLFormElement, M, Place, R>): VerstakNode<HTMLFormElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.form) }
export function H1<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLHeadingElement, M, Place, R>): VerstakNode<HTMLHeadingElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.h1) }
export function H2<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLHeadingElement, M, Place, R>): VerstakNode<HTMLHeadingElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.h2) }
export function H3<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLHeadingElement, M, Place, R>): VerstakNode<HTMLHeadingElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.h3) }
export function H4<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLHeadingElement, M, Place, R>): VerstakNode<HTMLHeadingElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.h4) }
export function H5<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLHeadingElement, M, Place, R>): VerstakNode<HTMLHeadingElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.h5) }
export function H6<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLHeadingElement, M, Place, R>): VerstakNode<HTMLHeadingElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.h6) }
export function Head<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLHeadElement, M, Place, R>): VerstakNode<HTMLHeadElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.head) }
export function Header<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.header) }
export function HGroup<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.hgroup) }
export function HR<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLHRElement, M, Place, R>): VerstakNode<HTMLHRElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.hr) }
export function Html<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLHtmlElement, M, Place, R>): VerstakNode<HTMLHtmlElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.html) }
export function I<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.i) }
export function IFrame<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLIFrameElement, M, Place, R>): VerstakNode<HTMLIFrameElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.iframe) }
export function Img<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLImageElement, M, Place, R>): VerstakNode<HTMLImageElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.img) }
export function Input<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLInputElement, M, Place, R>): VerstakNode<HTMLInputElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.input) }
export function Ins<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLModElement, M, Place, R>): VerstakNode<HTMLModElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.ins) }
export function Kbd<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.kbd) }
export function KeyGen<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.keygen) }
export function Label<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLLabelElement, M, Place, R>): VerstakNode<HTMLLabelElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.label) }
export function Legend<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLLegendElement, M, Place, R>): VerstakNode<HTMLLegendElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.legend) }
export function LI<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLLIElement, M, Place, R>): VerstakNode<HTMLLIElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.li) }
export function Link<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLLinkElement, M, Place, R>): VerstakNode<HTMLLinkElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.link) }
export function Main<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.main) }
export function Map<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLMapElement, M, Place, R>): VerstakNode<HTMLMapElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.map) }
export function Mark<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.mark) }
export function Menu<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.menu) }
export function MenuItem<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.menuitem) }
export function Meta<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLMetaElement, M, Place, R>): VerstakNode<HTMLMetaElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.meta) }
export function Meter<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.meter) }
export function Nav<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.nav) }
export function NoIndex<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.noindex) }
export function NoScript<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.noscript) }
export function Obj<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLObjectElement, M, Place, R>): VerstakNode<HTMLObjectElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.object) }
export function OL<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLOListElement, M, Place, R>): VerstakNode<HTMLOListElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.ol) }
export function OptGroup<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLOptGroupElement, M, Place, R>): VerstakNode<HTMLOptGroupElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.optgroup) }
export function Option<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLOptionElement, M, Place, R>): VerstakNode<HTMLOptionElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.option) }
export function Output<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.output) }
export function P<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLParagraphElement, M, Place, R>): VerstakNode<HTMLParagraphElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.p) }
export function Param<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLParamElement, M, Place, R>): VerstakNode<HTMLParamElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.param) }
export function Picture<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.picture) }
export function Pre<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLPreElement, M, Place, R>): VerstakNode<HTMLPreElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.pre) }
export function Progress<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLProgressElement, M, Place, R>): VerstakNode<HTMLProgressElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.progress) }
export function Q<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLQuoteElement, M, Place, R>): VerstakNode<HTMLQuoteElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.q) }
export function RP<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.rp) }
export function RT<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.rt) }
export function Ruby<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.ruby) }
export function S<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.s) }
export function Samp<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.samp) }
export function Script<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLScriptElement, M, Place, R>): VerstakNode<HTMLScriptElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.script) }
export function Section<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.section) }
export function Select<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLSelectElement, M, Place, R>): VerstakNode<HTMLSelectElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.select) }
export function Small<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.small) }
export function Source<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLSourceElement, M, Place, R>): VerstakNode<HTMLSourceElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.source) }
export function Span<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLSpanElement, M, Place, R>): VerstakNode<HTMLSpanElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.span) }
export function Strong<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.strong) }
export function Style<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLStyleElement, M, Place, R>): VerstakNode<HTMLStyleElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.style) }
export function Sub<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.sub) }
export function Summary<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.summary) }
export function Sup<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.sup) }
export function Table<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLTableElement, M, Place, R>): VerstakNode<HTMLTableElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.table) }
export function Template<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLTemplateElement, M, Place, R>): VerstakNode<HTMLTemplateElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.template) }
export function TBody<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLTableSectionElement, M, Place, R>): VerstakNode<HTMLTableSectionElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.tbody) }
export function TD<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLTableCellElement, M, Place, R>): VerstakNode<HTMLTableCellElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.td) }
export function TextArea<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLTextAreaElement, M, Place, R>): VerstakNode<HTMLTextAreaElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.textarea) }
export function TFoot<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLTableSectionElement, M, Place, R>): VerstakNode<HTMLTableSectionElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.tfoot) }
export function TH<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLTableCellElement, M, Place, R>): VerstakNode<HTMLTableCellElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.th) }
export function THead<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLTableSectionElement, M, Place, R>): VerstakNode<HTMLTableSectionElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.thead) }
export function Time<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.time) }
export function Title<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLTitleElement, M, Place, R>): VerstakNode<HTMLTitleElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.title) }
export function TR<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLTableRowElement, M, Place, R>): VerstakNode<HTMLTableRowElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.tr) }
export function Track<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLTrackElement, M, Place, R>): VerstakNode<HTMLTrackElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.track) }
export function U<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.u) }
export function UL<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLUListElement, M, Place, R>): VerstakNode<HTMLUListElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.ul) }
export function Var<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.var) }
export function Video<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLVideoElement, M, Place, R>): VerstakNode<HTMLVideoElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.video) }
export function Wbr<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): VerstakNode<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.wbr) }

export function RxSvg<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGSVGElement, M, Place, R>): VerstakNode<SVGSVGElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.svg) }
export function RxSvgA<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGAElement, M, Place, R>): VerstakNode<SVGAElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.a) }
export function RxAnimate<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGAnimateElement, M, Place, R>): VerstakNode<SVGAnimateElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.animate) }
export function RxAnimateMotion<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGAnimateMotionElement, M, Place, R>): VerstakNode<SVGAnimateMotionElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.animateMotion) }
export function RxAnimateTransform<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGAnimateTransformElement, M, Place, R>): VerstakNode<SVGAnimateTransformElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.animateTransform) }
export function RxCircle<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGCircleElement, M, Place, R>): VerstakNode<SVGCircleElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.circle) }
export function RxClipPath<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGClipPathElement, M, Place, R>): VerstakNode<SVGClipPathElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.clipPath) }
export function RxDefs<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGDefsElement, M, Place, R>): VerstakNode<SVGDefsElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.defs) }
export function RxDesc<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGDescElement, M, Place, R>): VerstakNode<SVGDescElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.desc) }
export function RxEllipse<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGEllipseElement, M, Place, R>): VerstakNode<SVGEllipseElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.ellipse) }
export function RxFeBlend<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEBlendElement, M, Place, R>): VerstakNode<SVGFEBlendElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feBlend) }
export function RxFeColorMatrix<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEColorMatrixElement, M, Place, R>): VerstakNode<SVGFEColorMatrixElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feColorMatrix) }
export function RxFeComponentTransfer<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEComponentTransferElement, M, Place, R>): VerstakNode<SVGFEComponentTransferElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feComponentTransfer) }
export function RxFeComposite<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFECompositeElement, M, Place, R>): VerstakNode<SVGFECompositeElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feComposite) }
export function RxFeConvolveMatrix<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEConvolveMatrixElement, M, Place, R>): VerstakNode<SVGFEConvolveMatrixElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feConvolveMatrix) }
export function RxFeDiffuseLighting<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEDiffuseLightingElement, M, Place, R>): VerstakNode<SVGFEDiffuseLightingElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feDiffuseLighting) }
export function RxFeDisplacementMap<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEDisplacementMapElement, M, Place, R>): VerstakNode<SVGFEDisplacementMapElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feDisplacementMap) }
export function RxFeDistantLight<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEDistantLightElement, M, Place, R>,priority?: Priority, monitor?: Monitor, throttling?: number, logging?: Partial<LoggingOptions>): VerstakNode<SVGFEDistantLightElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feDistantLight) }
export function RxFeDropShadow<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEDropShadowElement, M, Place, R>): VerstakNode<SVGFEDropShadowElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feDropShadow) }
export function RxFeFlood<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEFloodElement, M, Place, R>): VerstakNode<SVGFEFloodElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feFlood) }
export function RxFeFuncA<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEFuncAElement, M, Place, R>): VerstakNode<SVGFEFuncAElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feFuncA) }
export function RxFeFuncB<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEFuncBElement, M, Place, R>): VerstakNode<SVGFEFuncBElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feFuncB) }
export function RxFeFuncG<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEFuncGElement, M, Place, R>): VerstakNode<SVGFEFuncGElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feFuncG) }
export function RxFeFuncR<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEFuncRElement, M, Place, R>): VerstakNode<SVGFEFuncRElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feFuncR) }
export function RxFeGaussianBlur<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEGaussianBlurElement, M, Place, R>): VerstakNode<SVGFEGaussianBlurElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feGaussianBlur) }
export function RxFeImage<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEImageElement, M, Place, R>): VerstakNode<SVGFEImageElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feImage) }
export function RxFeMerge<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEMergeElement, M, Place, R>): VerstakNode<SVGFEMergeElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feMerge) }
export function RxFeMergeNode<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEMergeNodeElement, M, Place, R>): VerstakNode<SVGFEMergeNodeElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feMergeNode) }
export function RxFeMorphology<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEMorphologyElement, M, Place, R>): VerstakNode<SVGFEMorphologyElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feMorphology) }
export function RxFeOffset<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEOffsetElement, M, Place, R>): VerstakNode<SVGFEOffsetElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feOffset) }
export function RxFePointLight<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEPointLightElement, M, Place, R>): VerstakNode<SVGFEPointLightElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.fePointLight) }
export function RxFeSpecularLighting<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFESpecularLightingElement, M, Place, R>): VerstakNode<SVGFESpecularLightingElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feSpecularLighting) }
export function RxFeSpotLight<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFESpotLightElement, M, Place, R>): VerstakNode<SVGFESpotLightElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feSpotLight) }
export function RxFeTile<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFETileElement, M, Place, R>): VerstakNode<SVGFETileElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feTile) }
export function RxFeTurbulence<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFETurbulenceElement, M, Place, R>): VerstakNode<SVGFETurbulenceElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feTurbulence) }
export function RxFilter<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFilterElement, M, Place, R>): VerstakNode<SVGFilterElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.filter) }
export function RxForeignObject<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGForeignObjectElement, M, Place, R>): VerstakNode<SVGForeignObjectElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.foreignObject) }
export function RxG<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGGElement, M, Place, R>): VerstakNode<SVGGElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.g) }
export function RxSvgImage<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGImageElement, M, Place, R>): VerstakNode<SVGImageElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.image) }
export function RxLine<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGLineElement, M, Place, R>): VerstakNode<SVGLineElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.line) }
export function RxLinearGradient<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGLinearGradientElement, M, Place, R>): VerstakNode<SVGLinearGradientElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.linearGradient) }
export function RxMarker<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGMarkerElement, M, Place, R>): VerstakNode<SVGMarkerElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.marker) }
export function RxMask<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGMaskElement, M, Place, R>): VerstakNode<SVGMaskElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.mask) }
export function RxMetadata<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGMetadataElement, M, Place, R>): VerstakNode<SVGMetadataElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.metadata) }
export function RxMPath<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGElement, M, Place, R>): VerstakNode<SVGElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.mpath) }
export function RxPath<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGPathElement, M, Place, R>): VerstakNode<SVGPathElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.path) }
export function RxPattern<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGPatternElement, M, Place, R>): VerstakNode<SVGPatternElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.pattern) }
export function RxPolygon<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGPolygonElement, M, Place, R>): VerstakNode<SVGPolygonElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.polygon) }
export function RxPolyline<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGPolylineElement, M, Place, R>): VerstakNode<SVGPolylineElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.polyline) }
export function RxRadialGradient<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGRadialGradientElement, M, Place, R>): VerstakNode<SVGRadialGradientElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.radialGradient) }
export function RxRect<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGRectElement, M, Place, R>): VerstakNode<SVGRectElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.rect) }
export function RxStop<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGStopElement, M, Place, R>): VerstakNode<SVGStopElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.stop) }
export function RxSvgSwitch<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGSwitchElement, M, Place, R>): VerstakNode<SVGSwitchElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.switch) }
export function RxSymbol<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGSymbolElement, M, Place, R>): VerstakNode<SVGSymbolElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.symbol) }
export function RxText<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGTextElement, M, Place, R>): VerstakNode<SVGTextElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.text) }
export function RxTextPath<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGTextPathElement, M, Place, R>): VerstakNode<SVGTextPathElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.textPath) }
export function RxTSpan<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGTSpanElement, M, Place, R>): VerstakNode<SVGTSpanElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.tspan) }
export function RxUse<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGUseElement, M, Place, R>): VerstakNode<SVGUseElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.use) }
export function RxView<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGViewElement, M, Place, R>): VerstakNode<SVGViewElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.view) }

export function Svg<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGSVGElement, M, Place, R>): VerstakNode<SVGSVGElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.svg) }
export function SvgA<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGAElement, M, Place, R>): VerstakNode<SVGAElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.a) }
export function Animate<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGAnimateElement, M, Place, R>): VerstakNode<SVGAnimateElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.animate) }
export function AnimateMotion<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGAnimateMotionElement, M, Place, R>): VerstakNode<SVGAnimateMotionElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.animateMotion) }
export function AnimateTransform<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGAnimateTransformElement, M, Place, R>): VerstakNode<SVGAnimateTransformElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.animateTransform) }
export function Circle<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGCircleElement, M, Place, R>): VerstakNode<SVGCircleElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.circle) }
export function ClipPath<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGClipPathElement, M, Place, R>): VerstakNode<SVGClipPathElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.clipPath) }
export function Defs<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGDefsElement, M, Place, R>): VerstakNode<SVGDefsElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.defs) }
export function Desc<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGDescElement, M, Place, R>): VerstakNode<SVGDescElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.desc) }
export function Ellipse<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGEllipseElement, M, Place, R>): VerstakNode<SVGEllipseElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.ellipse) }
export function FeBlend<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEBlendElement, M, Place, R>): VerstakNode<SVGFEBlendElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feBlend) }
export function FeColorMatrix<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEColorMatrixElement, M, Place, R>): VerstakNode<SVGFEColorMatrixElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feColorMatrix) }
export function FeComponentTransfer<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEComponentTransferElement, M, Place, R>): VerstakNode<SVGFEComponentTransferElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feComponentTransfer) }
export function FeComposite<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFECompositeElement, M, Place, R>): VerstakNode<SVGFECompositeElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feComposite) }
export function FeConvolveMatrix<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEConvolveMatrixElement, M, Place, R>): VerstakNode<SVGFEConvolveMatrixElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feConvolveMatrix) }
export function FeDiffuseLighting<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEDiffuseLightingElement, M, Place, R>): VerstakNode<SVGFEDiffuseLightingElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feDiffuseLighting) }
export function FeDisplacementMap<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEDisplacementMapElement, M, Place, R>): VerstakNode<SVGFEDisplacementMapElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feDisplacementMap) }
export function FeDistantLight<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEDistantLightElement, M, Place, R>): VerstakNode<SVGFEDistantLightElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feDistantLight) }
export function FeDropShadow<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEDropShadowElement, M, Place, R>): VerstakNode<SVGFEDropShadowElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feDropShadow) }
export function FeFlood<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEFloodElement, M, Place, R>): VerstakNode<SVGFEFloodElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feFlood) }
export function FeFuncA<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEFuncAElement, M, Place, R>): VerstakNode<SVGFEFuncAElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feFuncA) }
export function FeFuncB<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEFuncBElement, M, Place, R>): VerstakNode<SVGFEFuncBElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feFuncB) }
export function FeFuncG<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEFuncGElement, M, Place, R>): VerstakNode<SVGFEFuncGElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feFuncG) }
export function FeFuncR<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEFuncRElement, M, Place, R>): VerstakNode<SVGFEFuncRElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feFuncR) }
export function FeGaussianBlur<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEGaussianBlurElement, M, Place, R>): VerstakNode<SVGFEGaussianBlurElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feGaussianBlur) }
export function FeImage<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEImageElement, M, Place, R>): VerstakNode<SVGFEImageElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feImage) }
export function FeMerge<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEMergeElement, M, Place, R>): VerstakNode<SVGFEMergeElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feMerge) }
export function FeMergeNode<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEMergeNodeElement, M, Place, R>): VerstakNode<SVGFEMergeNodeElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feMergeNode) }
export function FeMorphology<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEMorphologyElement, M, Place, R>): VerstakNode<SVGFEMorphologyElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feMorphology) }
export function FeOffset<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEOffsetElement, M, Place, R>): VerstakNode<SVGFEOffsetElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feOffset) }
export function FePointLight<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFEPointLightElement, M, Place, R>): VerstakNode<SVGFEPointLightElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.fePointLight) }
export function FeSpecularLighting<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFESpecularLightingElement, M, Place, R>): VerstakNode<SVGFESpecularLightingElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feSpecularLighting) }
export function FeSpotLight<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFESpotLightElement, M, Place, R>): VerstakNode<SVGFESpotLightElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feSpotLight) }
export function FeTile<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFETileElement, M, Place, R>): VerstakNode<SVGFETileElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feTile) }
export function FeTurbulence<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFETurbulenceElement, M, Place, R>): VerstakNode<SVGFETurbulenceElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feTurbulence) }
export function Filter<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGFilterElement, M, Place, R>): VerstakNode<SVGFilterElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.filter) }
export function ForeignObject<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGForeignObjectElement, M, Place, R>): VerstakNode<SVGForeignObjectElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.foreignObject) }
export function G<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGGElement, M, Place, R>): VerstakNode<SVGGElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.g) }
export function SvgImage<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGImageElement, M, Place, R>): VerstakNode<SVGImageElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.image) }
export function Line<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGLineElement, M, Place, R>): VerstakNode<SVGLineElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.line) }
export function LinearGradient<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGLinearGradientElement, M, Place, R>): VerstakNode<SVGLinearGradientElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.linearGradient) }
export function Marker<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGMarkerElement, M, Place, R>): VerstakNode<SVGMarkerElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.marker) }
export function Mask<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGMaskElement, M, Place, R>): VerstakNode<SVGMaskElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.mask) }
export function MetaData<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGMetadataElement, M, Place, R>): VerstakNode<SVGMetadataElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.metadata) }
export function MPath<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGElement, M, Place, R>): VerstakNode<SVGElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.mpath) }
export function Path<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGPathElement, M, Place, R>): VerstakNode<SVGPathElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.path) }
export function Pattern<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGPatternElement, M, Place, R>): VerstakNode<SVGPatternElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.pattern) }
export function Polygon<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGPolygonElement, M, Place, R>): VerstakNode<SVGPolygonElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.polygon) }
export function PolyLine<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGPolylineElement, M, Place, R>): VerstakNode<SVGPolylineElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.polyline) }
export function RadialGradient<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGRadialGradientElement, M, Place, R>): VerstakNode<SVGRadialGradientElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.radialGradient) }
export function Rect<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGRectElement, M, Place, R>): VerstakNode<SVGRectElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.rect) }
export function Stop<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGStopElement, M, Place, R>): VerstakNode<SVGStopElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.stop) }
export function SvgSwitch<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGSwitchElement, M, Place, R>): VerstakNode<SVGSwitchElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.switch) }
export function Symbol<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGSymbolElement, M, Place, R>): VerstakNode<SVGSymbolElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.symbol) }
export function Text<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGTextElement, M, Place, R>): VerstakNode<SVGTextElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.text) }
export function TextPath<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGTextPathElement, M, Place, R>): VerstakNode<SVGTextPathElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.textPath) }
export function TSpan<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGTSpanElement, M, Place, R>): VerstakNode<SVGTSpanElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.tspan) }
export function Use<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGUseElement, M, Place, R>): VerstakNode<SVGUseElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.use) }
export function View<M = unknown, R = void>(name: string, options: VerstakOptions<Place> | undefined, renderer: Render<SVGViewElement, M, Place, R>): VerstakNode<SVGViewElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.view) }

const HtmlTags = {
  a: new HtmlElementNodeFactory<HTMLAnchorElement>('a', true),
  abbr: new HtmlElementNodeFactory<HTMLElement>('abbr', true),
  address: new HtmlElementNodeFactory<HTMLElement>('address', true),
  area: new HtmlElementNodeFactory<HTMLAreaElement>('area', true),
  article: new HtmlElementNodeFactory<HTMLElement>('article', true),
  aside: new HtmlElementNodeFactory<HTMLElement>('aside', true),
  audio: new HtmlElementNodeFactory<HTMLAudioElement>('audio', true),
  b: new HtmlElementNodeFactory<HTMLElement>('b', true),
  base: new HtmlElementNodeFactory<HTMLBaseElement>('base', true),
  bdi: new HtmlElementNodeFactory<HTMLElement>('bdi', true),
  bdo: new HtmlElementNodeFactory<HTMLElement>('bdo', true),
  big: new HtmlElementNodeFactory<HTMLElement>('big', true),
  blockquote: new HtmlElementNodeFactory<HTMLElement>('blockquote', true),
  body: new HtmlElementNodeFactory<HTMLBodyElement>('body', true),
  br: new HtmlElementNodeFactory<HTMLBRElement>('br', true),
  button: new HtmlElementNodeFactory<HTMLButtonElement>('button', true),
  canvas: new HtmlElementNodeFactory<HTMLCanvasElement>('canvas', true),
  caption: new HtmlElementNodeFactory<HTMLTableCaptionElement>('caption', true),
  cite: new HtmlElementNodeFactory<HTMLElement>('cite', true),
  code: new HtmlElementNodeFactory<HTMLElement>('code', true),
  col: new HtmlElementNodeFactory<HTMLTableColElement>('col', true),
  colgroup: new HtmlElementNodeFactory<HTMLTableColElement>('colgroup', true),
  data: new HtmlElementNodeFactory<HTMLDataElement>('data', true),
  datalist: new HtmlElementNodeFactory<HTMLDataListElement>('datalist', true),
  dd: new HtmlElementNodeFactory<HTMLElement>('dd', true),
  del: new HtmlElementNodeFactory<HTMLElement>('del', true),
  details: new HtmlElementNodeFactory<HTMLElement>('details', true),
  dfn: new HtmlElementNodeFactory<HTMLElement>('dfn', true),
  div: new HtmlElementNodeFactory<HTMLDivElement>('div', true),
  dl: new HtmlElementNodeFactory<HTMLDListElement>('dl', true),
  dt: new HtmlElementNodeFactory<HTMLElement>('dt', true),
  em: new HtmlElementNodeFactory<HTMLElement>('em', true),
  embed: new HtmlElementNodeFactory<HTMLEmbedElement>('embed', true),
  fieldset: new HtmlElementNodeFactory<HTMLFieldSetElement>('fieldset', true),
  figcaption: new HtmlElementNodeFactory<HTMLElement>('figcaption', true),
  figure: new HtmlElementNodeFactory<HTMLElement>('figure', true),
  footer: new HtmlElementNodeFactory<HTMLElement>('footer', true),
  form: new HtmlElementNodeFactory<HTMLFormElement>('form', true),
  h1: new HtmlElementNodeFactory<HTMLHeadingElement>('h1', true),
  h2: new HtmlElementNodeFactory<HTMLHeadingElement>('h2', true),
  h3: new HtmlElementNodeFactory<HTMLHeadingElement>('h3', true),
  h4: new HtmlElementNodeFactory<HTMLHeadingElement>('h4', true),
  h5: new HtmlElementNodeFactory<HTMLHeadingElement>('h5', true),
  h6: new HtmlElementNodeFactory<HTMLHeadingElement>('h6', true),
  head: new HtmlElementNodeFactory<HTMLHeadElement>('head', true),
  header: new HtmlElementNodeFactory<HTMLElement>('header', true),
  hgroup: new HtmlElementNodeFactory<HTMLElement>('hgroup', true),
  hr: new HtmlElementNodeFactory<HTMLHRElement>('hr', true),
  html: new HtmlElementNodeFactory<HTMLHtmlElement>('html', true),
  i: new HtmlElementNodeFactory<HTMLElement>('i', true),
  iframe: new HtmlElementNodeFactory<HTMLIFrameElement>('iframe', true),
  img: new HtmlElementNodeFactory<HTMLImageElement>('img', true),
  input: new HtmlElementNodeFactory<HTMLInputElement>('input', true),
  ins: new HtmlElementNodeFactory<HTMLModElement>('ins', true),
  kbd: new HtmlElementNodeFactory<HTMLElement>('kbd', true),
  keygen: new HtmlElementNodeFactory<HTMLElement>('keygen', true),
  label: new HtmlElementNodeFactory<HTMLLabelElement>('label', true),
  legend: new HtmlElementNodeFactory<HTMLLegendElement>('legend', true),
  li: new HtmlElementNodeFactory<HTMLLIElement>('li', true),
  link: new HtmlElementNodeFactory<HTMLLinkElement>('link', true),
  main: new HtmlElementNodeFactory<HTMLElement>('main', true),
  map: new HtmlElementNodeFactory<HTMLMapElement>('map', true),
  mark: new HtmlElementNodeFactory<HTMLElement>('mark', true),
  menu: new HtmlElementNodeFactory<HTMLElement>('menu', true),
  menuitem: new HtmlElementNodeFactory<HTMLElement>('menuitem', true),
  meta: new HtmlElementNodeFactory<HTMLMetaElement>('meta', true),
  meter: new HtmlElementNodeFactory<HTMLElement>('meter', true),
  nav: new HtmlElementNodeFactory<HTMLElement>('nav', true),
  noindex: new HtmlElementNodeFactory<HTMLElement>('noindex', true),
  noscript: new HtmlElementNodeFactory<HTMLElement>('noscript', true),
  object: new HtmlElementNodeFactory<HTMLObjectElement>('object', true),
  ol: new HtmlElementNodeFactory<HTMLOListElement>('ol', true),
  optgroup: new HtmlElementNodeFactory<HTMLOptGroupElement>('optgroup', true),
  option: new HtmlElementNodeFactory<HTMLOptionElement>('option', true),
  output: new HtmlElementNodeFactory<HTMLElement>('output', true),
  p: new HtmlElementNodeFactory<HTMLParagraphElement>('p', true),
  param: new HtmlElementNodeFactory<HTMLParamElement>('param', true),
  picture: new HtmlElementNodeFactory<HTMLElement>('picture', true),
  pre: new HtmlElementNodeFactory<HTMLPreElement>('pre', true),
  progress: new HtmlElementNodeFactory<HTMLProgressElement>('progress', true),
  q: new HtmlElementNodeFactory<HTMLQuoteElement>('q', true),
  rp: new HtmlElementNodeFactory<HTMLElement>('rp', true),
  rt: new HtmlElementNodeFactory<HTMLElement>('rt', true),
  ruby: new HtmlElementNodeFactory<HTMLElement>('ruby', true),
  s: new HtmlElementNodeFactory<HTMLElement>('s', true),
  samp: new HtmlElementNodeFactory<HTMLElement>('samp', true),
  script: new HtmlElementNodeFactory<HTMLScriptElement>('script', true),
  section: new HtmlElementNodeFactory<HTMLElement>('section', true),
  select: new HtmlElementNodeFactory<HTMLSelectElement>('select', true),
  small: new HtmlElementNodeFactory<HTMLElement>('small', true),
  source: new HtmlElementNodeFactory<HTMLSourceElement>('source', true),
  span: new HtmlElementNodeFactory<HTMLSpanElement>('span', true),
  strong: new HtmlElementNodeFactory<HTMLElement>('strong', true),
  style: new HtmlElementNodeFactory<HTMLStyleElement>('style', true),
  sub: new HtmlElementNodeFactory<HTMLElement>('sub', true),
  summary: new HtmlElementNodeFactory<HTMLElement>('summary', true),
  sup: new HtmlElementNodeFactory<HTMLElement>('sup', true),
  table: new HtmlElementNodeFactory<HTMLTableElement>('table', true),
  template: new HtmlElementNodeFactory<HTMLTemplateElement>('template', true),
  tbody: new HtmlElementNodeFactory<HTMLTableSectionElement>('tbody', true),
  td: new HtmlElementNodeFactory<HTMLTableCellElement>('td', true),
  textarea: new HtmlElementNodeFactory<HTMLTextAreaElement>('textarea', true),
  tfoot: new HtmlElementNodeFactory<HTMLTableSectionElement>('tfoot', true),
  th: new HtmlElementNodeFactory<HTMLTableCellElement>('th', true),
  thead: new HtmlElementNodeFactory<HTMLTableSectionElement>('thead', true),
  time: new HtmlElementNodeFactory<HTMLElement>('time', true),
  title: new HtmlElementNodeFactory<HTMLTitleElement>('title', true),
  tr: new HtmlElementNodeFactory<HTMLTableRowElement>('tr', true),
  track: new HtmlElementNodeFactory<HTMLTrackElement>('track', true),
  u: new HtmlElementNodeFactory<HTMLElement>('u', true),
  ul: new HtmlElementNodeFactory<HTMLUListElement>('ul', true),
  var: new HtmlElementNodeFactory<HTMLElement>('var', true),
  video: new HtmlElementNodeFactory<HTMLVideoElement>('video', true),
  wbr: new HtmlElementNodeFactory<HTMLElement>('wbr', true),
  // webview: new HtmlNodeFactory<HTMLWebViewElement>('webview', true),
}

const SvgTags = {
  svg: new SvgElementNodeFactory<SVGSVGElement>('svg', true),
  a: new SvgElementNodeFactory<SVGAElement>('a', true),
  animate: new SvgElementNodeFactory<SVGAnimateElement>('animate', true),
  animateMotion: new SvgElementNodeFactory<SVGAnimateMotionElement>('animateMotion', true),
  animateTransform: new SvgElementNodeFactory<SVGAnimateTransformElement>('animateTransform', true),
  circle: new SvgElementNodeFactory<SVGCircleElement>('circle', true),
  clipPath: new SvgElementNodeFactory<SVGClipPathElement>('clipPath', true),
  defs: new SvgElementNodeFactory<SVGDefsElement>('defs', true),
  desc: new SvgElementNodeFactory<SVGDescElement>('desc', true),
  ellipse: new SvgElementNodeFactory<SVGEllipseElement>('ellipse', true),
  feBlend: new SvgElementNodeFactory<SVGFEBlendElement>('feBlend', true),
  feColorMatrix: new SvgElementNodeFactory<SVGFEColorMatrixElement>('feColorMatrix', true),
  feComponentTransfer: new SvgElementNodeFactory<SVGFEComponentTransferElement>('feComponentTransfer', true),
  feComposite: new SvgElementNodeFactory<SVGFECompositeElement>('feComposite', true),
  feConvolveMatrix: new SvgElementNodeFactory<SVGFEConvolveMatrixElement>('feConvolveMatrix', true),
  feDiffuseLighting: new SvgElementNodeFactory<SVGFEDiffuseLightingElement>('feDiffuseLighting', true),
  feDisplacementMap: new SvgElementNodeFactory<SVGFEDisplacementMapElement>('feDisplacementMap', true),
  feDistantLight: new SvgElementNodeFactory<SVGFEDistantLightElement>('feDistantLight', true),
  feDropShadow: new SvgElementNodeFactory<SVGFEDropShadowElement>('feDropShadow', true),
  feFlood: new SvgElementNodeFactory<SVGFEFloodElement>('feFlood', true),
  feFuncA: new SvgElementNodeFactory<SVGFEFuncAElement>('feFuncA', true),
  feFuncB: new SvgElementNodeFactory<SVGFEFuncBElement>('feFuncB', true),
  feFuncG: new SvgElementNodeFactory<SVGFEFuncGElement>('feFuncG', true),
  feFuncR: new SvgElementNodeFactory<SVGFEFuncRElement>('feFuncR', true),
  feGaussianBlur: new SvgElementNodeFactory<SVGFEGaussianBlurElement>('feGaussianBlur', true),
  feImage: new SvgElementNodeFactory<SVGFEImageElement>('feImage', true),
  feMerge: new SvgElementNodeFactory<SVGFEMergeElement>('feMerge', true),
  feMergeNode: new SvgElementNodeFactory<SVGFEMergeNodeElement>('feMergeNode', true),
  feMorphology: new SvgElementNodeFactory<SVGFEMorphologyElement>('feMorphology', true),
  feOffset: new SvgElementNodeFactory<SVGFEOffsetElement>('feOffset', true),
  fePointLight: new SvgElementNodeFactory<SVGFEPointLightElement>('fePointLight', true),
  feSpecularLighting: new SvgElementNodeFactory<SVGFESpecularLightingElement>('feSpecularLighting', true),
  feSpotLight: new SvgElementNodeFactory<SVGFESpotLightElement>('feSpotLight', true),
  feTile: new SvgElementNodeFactory<SVGFETileElement>('feTile', true),
  feTurbulence: new SvgElementNodeFactory<SVGFETurbulenceElement>('feTurbulence', true),
  filter: new SvgElementNodeFactory<SVGFilterElement>('filter', true),
  foreignObject: new SvgElementNodeFactory<SVGForeignObjectElement>('foreignObject', true),
  g: new SvgElementNodeFactory<SVGGElement>('g', true),
  image: new SvgElementNodeFactory<SVGImageElement>('image', true),
  line: new SvgElementNodeFactory<SVGLineElement>('line', true),
  linearGradient: new SvgElementNodeFactory<SVGLinearGradientElement>('linearGradient', true),
  marker: new SvgElementNodeFactory<SVGMarkerElement>('marker', true),
  mask: new SvgElementNodeFactory<SVGMaskElement>('mask', true),
  metadata: new SvgElementNodeFactory<SVGMetadataElement>('metadata', true),
  mpath: new SvgElementNodeFactory<SVGElement>('mpath', true),
  path: new SvgElementNodeFactory<SVGPathElement>('path', true),
  pattern: new SvgElementNodeFactory<SVGPatternElement>('pattern', true),
  polygon: new SvgElementNodeFactory<SVGPolygonElement>('polygon', true),
  polyline: new SvgElementNodeFactory<SVGPolylineElement>('polyline', true),
  radialGradient: new SvgElementNodeFactory<SVGRadialGradientElement>('radialGradient', true),
  rect: new SvgElementNodeFactory<SVGRectElement>('rect', true),
  stop: new SvgElementNodeFactory<SVGStopElement>('stop', true),
  switch: new SvgElementNodeFactory<SVGSwitchElement>('switch', true),
  symbol: new SvgElementNodeFactory<SVGSymbolElement>('symbol', true),
  text: new SvgElementNodeFactory<SVGTextElement>('text', true),
  textPath: new SvgElementNodeFactory<SVGTextPathElement>('textPath', true),
  tspan: new SvgElementNodeFactory<SVGTSpanElement>('tspan', true),
  use: new SvgElementNodeFactory<SVGUseElement>('use', true),
  view: new SvgElementNodeFactory<SVGViewElement>('view', true),
}
