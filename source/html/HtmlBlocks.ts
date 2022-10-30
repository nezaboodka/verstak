// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { LoggingOptions, Monitor } from 'reactronic'
import { Block, Reaction, Inline, Render, StaticBlockFactory, Priority, Place, BlockOptions } from '../core/api'
import { HtmlBlockFactory, SvgBlockFactory } from './HtmlBlockFactory'

export function RxHtmlBody(name: string, triggers: unknown, renderer: Render<HTMLElement>): Block<HTMLElement> {
  const factory = new StaticBlockFactory(name, true, global.document.body)
  return Reaction(name, undefined, renderer, factory)
}

export function RxA<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLAnchorElement, M, Place, R>): Block<HTMLAnchorElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.a) }
export function RxAbbr<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.abbr) }
export function RxAddress<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.address) }
export function RxArea<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLAreaElement, M, Place, R>): Block<HTMLAreaElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.area) }
export function RxArticle<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.article) }
export function RxAside<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.aside) }
export function RxAudio<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLAudioElement, M, Place, R>): Block<HTMLAudioElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.audio) }
export function RxB<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.b) }
export function RxBase<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLBaseElement, M, Place, R>): Block<HTMLBaseElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.base) }
export function RxBdi<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.bdi) }
export function RxBdo<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.bdo) }
export function RxBig<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.big) }
export function RxBlockQuote<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.blockquote) }
export function RxBody<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLBodyElement, M, Place, R>): Block<HTMLBodyElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.body) }
export function RxBR<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLBRElement, M, Place, R>): Block<HTMLBRElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.br) }
export function RxButton<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLButtonElement, M, Place, R>): Block<HTMLButtonElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.button) }
export function RxCanvas<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLCanvasElement, M, Place, R>): Block<HTMLCanvasElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.canvas) }
export function RxCaption<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLTableCaptionElement, M, Place, R>): Block<HTMLTableCaptionElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.caption) }
export function RxCite<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.cite) }
export function RxCode<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.code) }
export function RxCol<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLTableColElement, M, Place, R>): Block<HTMLTableColElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.col) }
export function RxColGroup<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLTableColElement, M, Place, R>): Block<HTMLTableColElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.colgroup) }
export function RxData<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLDataElement, M, Place, R>): Block<HTMLDataElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.data) }
export function RxDataList<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLDataListElement, M, Place, R>): Block<HTMLDataListElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.datalist) }
export function RxDD<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.dd) }
export function RxDel<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.del) }
export function RxDetails<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.details) }
export function RxDfn<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.dfn) }
export function RxDiv<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLDivElement, M, Place, R>): Block<HTMLDivElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.div) }
export function RxDL<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLDListElement, M, Place, R>): Block<HTMLDListElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.dl) }
export function RxDT<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.dt) }
export function RxEM<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.em) }
export function RxEmbed<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLEmbedElement, M, Place, R>): Block<HTMLEmbedElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.embed) }
export function RxFieldSet<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLFieldSetElement, M, Place, R>): Block<HTMLFieldSetElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.fieldset) }
export function RxFigCaption<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.figcaption) }
export function RxFigure<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.figure) }
export function RxFooter<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.footer) }
export function RxForm<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLFormElement, M, Place, R>): Block<HTMLFormElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.form) }
export function RxH1<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLHeadingElement, M, Place, R>): Block<HTMLHeadingElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.h1) }
export function RxH2<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLHeadingElement, M, Place, R>): Block<HTMLHeadingElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.h2) }
export function RxH3<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLHeadingElement, M, Place, R>): Block<HTMLHeadingElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.h3) }
export function RxH4<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLHeadingElement, M, Place, R>): Block<HTMLHeadingElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.h4) }
export function RxH5<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLHeadingElement, M, Place, R>): Block<HTMLHeadingElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.h5) }
export function RxH6<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLHeadingElement, M, Place, R>): Block<HTMLHeadingElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.h6) }
export function RxHead<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLHeadElement, M, Place, R>): Block<HTMLHeadElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.head) }
export function RxHeader<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.header) }
export function RxHGroup<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.hgroup) }
export function RxHR<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLHRElement, M, Place, R>): Block<HTMLHRElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.hr) }
export function RxHtml<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLHtmlElement, M, Place, R>): Block<HTMLHtmlElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.html) }
export function RxI<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.i) }
export function RxIFrame<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLIFrameElement, M, Place, R>): Block<HTMLIFrameElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.iframe) }
export function RxImg<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLImageElement, M, Place, R>): Block<HTMLImageElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.img) }
export function RxInput<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLInputElement, M, Place, R>): Block<HTMLInputElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.input) }
export function RxIns<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLModElement, M, Place, R>): Block<HTMLModElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.ins) }
export function RxKbd<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.kbd) }
export function RxKeygen<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.keygen) }
export function RxLabel<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLLabelElement, M, Place, R>): Block<HTMLLabelElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.label) }
export function RxLegend<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLLegendElement, M, Place, R>): Block<HTMLLegendElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.legend) }
export function RxLI<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLLIElement, M, Place, R>): Block<HTMLLIElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.li) }
export function RxLink<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLLinkElement, M, Place, R>): Block<HTMLLinkElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.link) }
export function RxMain<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.main) }
export function RxMap<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLMapElement, M, Place, R>): Block<HTMLMapElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.map) }
export function RxMark<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.mark) }
export function RxMenu<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.menu) }
export function RxMenuItem<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.menuitem) }
export function RxMeta<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLMetaElement, M, Place, R>): Block<HTMLMetaElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.meta) }
export function RxMeter<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.meter) }
export function RxNav<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.nav) }
export function RxNoIndex<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.noindex) }
export function RxNoScript<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.noscript) }
export function RxObj<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLObjectElement, M, Place, R>): Block<HTMLObjectElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.object) }
export function RxOL<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLOListElement, M, Place, R>): Block<HTMLOListElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.ol) }
export function RxOptGroup<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLOptGroupElement, M, Place, R>): Block<HTMLOptGroupElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.optgroup) }
export function RxOption<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLOptionElement, M, Place, R>): Block<HTMLOptionElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.option) }
export function RxOutput<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.output) }
export function RxP<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLParagraphElement, M, Place, R>): Block<HTMLParagraphElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.p) }
export function RxParam<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLParamElement, M, Place, R>): Block<HTMLParamElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.param) }
export function RxPicture<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.picture) }
export function RxPre<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLPreElement, M, Place, R>): Block<HTMLPreElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.pre) }
export function RxProgress<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLProgressElement, M, Place, R>): Block<HTMLProgressElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.progress) }
export function RxQ<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLQuoteElement, M, Place, R>): Block<HTMLQuoteElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.q) }
export function RxRP<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.rp) }
export function RxRT<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.rt) }
export function RxRuby<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.ruby) }
export function RxS<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.s) }
export function RxSamp<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.samp) }
export function RxScript<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLScriptElement, M, Place, R>): Block<HTMLScriptElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.script) }
export function RxSection<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.section) }
export function RxSelect<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLSelectElement, M, Place, R>): Block<HTMLSelectElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.select) }
export function RxSmall<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.small) }
export function RxSource<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLSourceElement, M, Place, R>): Block<HTMLSourceElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.source) }
export function RxSpan<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLSpanElement, M, Place, R>): Block<HTMLSpanElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.span) }
export function RxStrong<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.strong) }
export function RxStyle<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLStyleElement, M, Place, R>): Block<HTMLStyleElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.style) }
export function RxSub<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.sub) }
export function RxSummary<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.summary) }
export function RxSup<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.sup) }
export function RxTable<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLTableElement, M, Place, R>): Block<HTMLTableElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.table) }
export function RxTemplate<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLTemplateElement, M, Place, R>): Block<HTMLTemplateElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.template) }
export function RxTBody<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLTableSectionElement, M, Place, R>): Block<HTMLTableSectionElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.tbody) }
export function RxTD<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLTableCellElement, M, Place, R>): Block<HTMLTableCellElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.td) }
export function RxTextArea<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLTextAreaElement, M, Place, R>): Block<HTMLTextAreaElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.textarea) }
export function RxTFoot<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLTableSectionElement, M, Place, R>): Block<HTMLTableSectionElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.tfoot) }
export function RxTH<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLTableCellElement, M, Place, R>): Block<HTMLTableCellElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.th) }
export function RxTHead<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLTableSectionElement, M, Place, R>): Block<HTMLTableSectionElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.thead) }
export function RxTime<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.time) }
export function RxTitle<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLTitleElement, M, Place, R>): Block<HTMLTitleElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.title) }
export function RxTR<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLTableRowElement, M, Place, R>): Block<HTMLTableRowElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.tr) }
export function RxTrack<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLTrackElement, M, Place, R>): Block<HTMLTrackElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.track) }
export function RxU<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.u) }
export function RxUL<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLUListElement, M, Place, R>): Block<HTMLUListElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.ul) }
export function RxVar<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.var) }
export function RxVideo<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLVideoElement, M, Place, R>): Block<HTMLVideoElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.video) }
export function RxWbr<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Reaction(name, options, renderer, HtmlTags.wbr) }

export function A<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLAnchorElement, M, Place, R>): Block<HTMLAnchorElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.a) }
export function Abbr<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.abbr) }
export function Address<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.address) }
export function Area<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLAreaElement, M, Place, R>): Block<HTMLAreaElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.area) }
export function Article<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.article) }
export function Aside<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.aside) }
export function Audio<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLAudioElement, M, Place, R>): Block<HTMLAudioElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.audio) }
export function B<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.b) }
export function Base<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLBaseElement, M, Place, R>): Block<HTMLBaseElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.base) }
export function Bdi<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.bdi) }
export function Bdo<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.bdo) }
export function Big<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.big) }
export function BlockQuote<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.blockquote) }
export function Body<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLBodyElement, M, Place, R>): Block<HTMLBodyElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.body) }
export function BR<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLBRElement, M, Place, R>): Block<HTMLBRElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.br) }
export function Button<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLButtonElement, M, Place, R>): Block<HTMLButtonElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.button) }
export function Canvas<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLCanvasElement, M, Place, R>): Block<HTMLCanvasElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.canvas) }
export function Caption<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLTableCaptionElement, M, Place, R>): Block<HTMLTableCaptionElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.caption) }
export function Cite<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.cite) }
export function Code<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.code) }
export function Col<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLTableColElement, M, Place, R>): Block<HTMLTableColElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.col) }
export function ColGroup<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLTableColElement, M, Place, R>): Block<HTMLTableColElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.colgroup) }
export function Data<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLDataElement, M, Place, R>): Block<HTMLDataElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.data) }
export function DataList<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLDataListElement, M, Place, R>): Block<HTMLDataListElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.datalist) }
export function DD<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.dd) }
export function Del<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.del) }
export function Details<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.details) }
export function Dfn<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.dfn) }
export function Div<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLDivElement, M, Place, R>): Block<HTMLDivElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.div) }
export function DL<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLDListElement, M, Place, R>): Block<HTMLDListElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.dl) }
export function DT<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.dt) }
export function EM<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.em) }
export function Embed<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLEmbedElement, M, Place, R>): Block<HTMLEmbedElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.embed) }
export function FieldSet<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLFieldSetElement, M, Place, R>): Block<HTMLFieldSetElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.fieldset) }
export function FigCaption<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.figcaption) }
export function Figure<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.figure) }
export function Footer<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.footer) }
export function Form<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLFormElement, M, Place, R>): Block<HTMLFormElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.form) }
export function H1<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLHeadingElement, M, Place, R>): Block<HTMLHeadingElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.h1) }
export function H2<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLHeadingElement, M, Place, R>): Block<HTMLHeadingElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.h2) }
export function H3<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLHeadingElement, M, Place, R>): Block<HTMLHeadingElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.h3) }
export function H4<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLHeadingElement, M, Place, R>): Block<HTMLHeadingElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.h4) }
export function H5<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLHeadingElement, M, Place, R>): Block<HTMLHeadingElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.h5) }
export function H6<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLHeadingElement, M, Place, R>): Block<HTMLHeadingElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.h6) }
export function Head<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLHeadElement, M, Place, R>): Block<HTMLHeadElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.head) }
export function Header<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.header) }
export function HGroup<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.hgroup) }
export function HR<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLHRElement, M, Place, R>): Block<HTMLHRElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.hr) }
export function Html<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLHtmlElement, M, Place, R>): Block<HTMLHtmlElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.html) }
export function I<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.i) }
export function IFrame<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLIFrameElement, M, Place, R>): Block<HTMLIFrameElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.iframe) }
export function Img<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLImageElement, M, Place, R>): Block<HTMLImageElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.img) }
export function Input<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLInputElement, M, Place, R>): Block<HTMLInputElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.input) }
export function Ins<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLModElement, M, Place, R>): Block<HTMLModElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.ins) }
export function Kbd<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.kbd) }
export function KeyGen<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.keygen) }
export function Label<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLLabelElement, M, Place, R>): Block<HTMLLabelElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.label) }
export function Legend<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLLegendElement, M, Place, R>): Block<HTMLLegendElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.legend) }
export function LI<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLLIElement, M, Place, R>): Block<HTMLLIElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.li) }
export function Link<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLLinkElement, M, Place, R>): Block<HTMLLinkElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.link) }
export function Main<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.main) }
export function Map<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLMapElement, M, Place, R>): Block<HTMLMapElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.map) }
export function Mark<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.mark) }
export function Menu<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.menu) }
export function MenuItem<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.menuitem) }
export function Meta<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLMetaElement, M, Place, R>): Block<HTMLMetaElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.meta) }
export function Meter<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.meter) }
export function Nav<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.nav) }
export function NoIndex<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.noindex) }
export function NoScript<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.noscript) }
export function Obj<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLObjectElement, M, Place, R>): Block<HTMLObjectElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.object) }
export function OL<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLOListElement, M, Place, R>): Block<HTMLOListElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.ol) }
export function OptGroup<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLOptGroupElement, M, Place, R>): Block<HTMLOptGroupElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.optgroup) }
export function Option<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLOptionElement, M, Place, R>): Block<HTMLOptionElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.option) }
export function Output<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.output) }
export function P<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLParagraphElement, M, Place, R>): Block<HTMLParagraphElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.p) }
export function Param<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLParamElement, M, Place, R>): Block<HTMLParamElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.param) }
export function Picture<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.picture) }
export function Pre<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLPreElement, M, Place, R>): Block<HTMLPreElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.pre) }
export function Progress<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLProgressElement, M, Place, R>): Block<HTMLProgressElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.progress) }
export function Q<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLQuoteElement, M, Place, R>): Block<HTMLQuoteElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.q) }
export function RP<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.rp) }
export function RT<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.rt) }
export function Ruby<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.ruby) }
export function S<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.s) }
export function Samp<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.samp) }
export function Script<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLScriptElement, M, Place, R>): Block<HTMLScriptElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.script) }
export function Section<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.section) }
export function Select<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLSelectElement, M, Place, R>): Block<HTMLSelectElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.select) }
export function Small<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.small) }
export function Source<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLSourceElement, M, Place, R>): Block<HTMLSourceElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.source) }
export function Span<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLSpanElement, M, Place, R>): Block<HTMLSpanElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.span) }
export function Strong<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.strong) }
export function Style<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLStyleElement, M, Place, R>): Block<HTMLStyleElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.style) }
export function Sub<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.sub) }
export function Summary<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.summary) }
export function Sup<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.sup) }
export function Table<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLTableElement, M, Place, R>): Block<HTMLTableElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.table) }
export function Template<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLTemplateElement, M, Place, R>): Block<HTMLTemplateElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.template) }
export function TBody<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLTableSectionElement, M, Place, R>): Block<HTMLTableSectionElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.tbody) }
export function TD<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLTableCellElement, M, Place, R>): Block<HTMLTableCellElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.td) }
export function TextArea<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLTextAreaElement, M, Place, R>): Block<HTMLTextAreaElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.textarea) }
export function TFoot<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLTableSectionElement, M, Place, R>): Block<HTMLTableSectionElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.tfoot) }
export function TH<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLTableCellElement, M, Place, R>): Block<HTMLTableCellElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.th) }
export function THead<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLTableSectionElement, M, Place, R>): Block<HTMLTableSectionElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.thead) }
export function Time<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.time) }
export function Title<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLTitleElement, M, Place, R>): Block<HTMLTitleElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.title) }
export function TR<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLTableRowElement, M, Place, R>): Block<HTMLTableRowElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.tr) }
export function Track<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLTrackElement, M, Place, R>): Block<HTMLTrackElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.track) }
export function U<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.u) }
export function UL<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLUListElement, M, Place, R>): Block<HTMLUListElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.ul) }
export function Var<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.var) }
export function Video<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLVideoElement, M, Place, R>): Block<HTMLVideoElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.video) }
export function Wbr<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<HTMLElement, M, Place, R>): Block<HTMLElement, M, Place, R> { return Inline(name, options, renderer, HtmlTags.wbr) }

export function RxSvg<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGSVGElement, M, Place, R>): Block<SVGSVGElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.svg) }
export function RxSvgA<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGAElement, M, Place, R>): Block<SVGAElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.a) }
export function RxAnimate<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGAnimateElement, M, Place, R>): Block<SVGAnimateElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.animate) }
export function RxAnimateMotion<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGAnimateMotionElement, M, Place, R>): Block<SVGAnimateMotionElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.animateMotion) }
export function RxAnimateTransform<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGAnimateTransformElement, M, Place, R>): Block<SVGAnimateTransformElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.animateTransform) }
export function RxCircle<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGCircleElement, M, Place, R>): Block<SVGCircleElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.circle) }
export function RxClipPath<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGClipPathElement, M, Place, R>): Block<SVGClipPathElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.clipPath) }
export function RxDefs<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGDefsElement, M, Place, R>): Block<SVGDefsElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.defs) }
export function RxDesc<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGDescElement, M, Place, R>): Block<SVGDescElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.desc) }
export function RxEllipse<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGEllipseElement, M, Place, R>): Block<SVGEllipseElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.ellipse) }
export function RxFeBlend<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEBlendElement, M, Place, R>): Block<SVGFEBlendElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feBlend) }
export function RxFeColorMatrix<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEColorMatrixElement, M, Place, R>): Block<SVGFEColorMatrixElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feColorMatrix) }
export function RxFeComponentTransfer<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEComponentTransferElement, M, Place, R>): Block<SVGFEComponentTransferElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feComponentTransfer) }
export function RxFeComposite<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFECompositeElement, M, Place, R>): Block<SVGFECompositeElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feComposite) }
export function RxFeConvolveMatrix<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEConvolveMatrixElement, M, Place, R>): Block<SVGFEConvolveMatrixElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feConvolveMatrix) }
export function RxFeDiffuseLighting<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEDiffuseLightingElement, M, Place, R>): Block<SVGFEDiffuseLightingElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feDiffuseLighting) }
export function RxFeDisplacementMap<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEDisplacementMapElement, M, Place, R>): Block<SVGFEDisplacementMapElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feDisplacementMap) }
export function RxFeDistantLight<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEDistantLightElement, M, Place, R>,priority?: Priority, monitor?: Monitor, throttling?: number, logging?: Partial<LoggingOptions>): Block<SVGFEDistantLightElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feDistantLight) }
export function RxFeDropShadow<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEDropShadowElement, M, Place, R>): Block<SVGFEDropShadowElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feDropShadow) }
export function RxFeFlood<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEFloodElement, M, Place, R>): Block<SVGFEFloodElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feFlood) }
export function RxFeFuncA<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEFuncAElement, M, Place, R>): Block<SVGFEFuncAElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feFuncA) }
export function RxFeFuncB<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEFuncBElement, M, Place, R>): Block<SVGFEFuncBElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feFuncB) }
export function RxFeFuncG<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEFuncGElement, M, Place, R>): Block<SVGFEFuncGElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feFuncG) }
export function RxFeFuncR<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEFuncRElement, M, Place, R>): Block<SVGFEFuncRElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feFuncR) }
export function RxFeGaussianBlur<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEGaussianBlurElement, M, Place, R>): Block<SVGFEGaussianBlurElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feGaussianBlur) }
export function RxFeImage<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEImageElement, M, Place, R>): Block<SVGFEImageElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feImage) }
export function RxFeMerge<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEMergeElement, M, Place, R>): Block<SVGFEMergeElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feMerge) }
export function RxFeMergeNode<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEMergeNodeElement, M, Place, R>): Block<SVGFEMergeNodeElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feMergeNode) }
export function RxFeMorphology<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEMorphologyElement, M, Place, R>): Block<SVGFEMorphologyElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feMorphology) }
export function RxFeOffset<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEOffsetElement, M, Place, R>): Block<SVGFEOffsetElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feOffset) }
export function RxFePointLight<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEPointLightElement, M, Place, R>): Block<SVGFEPointLightElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.fePointLight) }
export function RxFeSpecularLighting<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFESpecularLightingElement, M, Place, R>): Block<SVGFESpecularLightingElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feSpecularLighting) }
export function RxFeSpotLight<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFESpotLightElement, M, Place, R>): Block<SVGFESpotLightElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feSpotLight) }
export function RxFeTile<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFETileElement, M, Place, R>): Block<SVGFETileElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feTile) }
export function RxFeTurbulence<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFETurbulenceElement, M, Place, R>): Block<SVGFETurbulenceElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.feTurbulence) }
export function RxFilter<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFilterElement, M, Place, R>): Block<SVGFilterElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.filter) }
export function RxForeignObject<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGForeignObjectElement, M, Place, R>): Block<SVGForeignObjectElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.foreignObject) }
export function RxG<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGGElement, M, Place, R>): Block<SVGGElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.g) }
export function RxSvgImage<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGImageElement, M, Place, R>): Block<SVGImageElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.image) }
export function RxLine<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGLineElement, M, Place, R>): Block<SVGLineElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.line) }
export function RxLinearGradient<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGLinearGradientElement, M, Place, R>): Block<SVGLinearGradientElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.linearGradient) }
export function RxMarker<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGMarkerElement, M, Place, R>): Block<SVGMarkerElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.marker) }
export function RxMask<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGMaskElement, M, Place, R>): Block<SVGMaskElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.mask) }
export function RxMetadata<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGMetadataElement, M, Place, R>): Block<SVGMetadataElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.metadata) }
export function RxMPath<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGElement, M, Place, R>): Block<SVGElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.mpath) }
export function RxPath<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGPathElement, M, Place, R>): Block<SVGPathElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.path) }
export function RxPattern<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGPatternElement, M, Place, R>): Block<SVGPatternElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.pattern) }
export function RxPolygon<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGPolygonElement, M, Place, R>): Block<SVGPolygonElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.polygon) }
export function RxPolyline<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGPolylineElement, M, Place, R>): Block<SVGPolylineElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.polyline) }
export function RxRadialGradient<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGRadialGradientElement, M, Place, R>): Block<SVGRadialGradientElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.radialGradient) }
export function RxRect<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGRectElement, M, Place, R>): Block<SVGRectElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.rect) }
export function RxStop<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGStopElement, M, Place, R>): Block<SVGStopElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.stop) }
export function RxSvgSwitch<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGSwitchElement, M, Place, R>): Block<SVGSwitchElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.switch) }
export function RxSymbol<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGSymbolElement, M, Place, R>): Block<SVGSymbolElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.symbol) }
export function RxText<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGTextElement, M, Place, R>): Block<SVGTextElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.text) }
export function RxTextPath<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGTextPathElement, M, Place, R>): Block<SVGTextPathElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.textPath) }
export function RxTSpan<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGTSpanElement, M, Place, R>): Block<SVGTSpanElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.tspan) }
export function RxUse<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGUseElement, M, Place, R>): Block<SVGUseElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.use) }
export function RxView<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGViewElement, M, Place, R>): Block<SVGViewElement, M, Place, R> { return Reaction(name, options, renderer, SvgTags.view) }

export function Svg<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGSVGElement, M, Place, R>): Block<SVGSVGElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.svg) }
export function SvgA<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGAElement, M, Place, R>): Block<SVGAElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.a) }
export function Animate<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGAnimateElement, M, Place, R>): Block<SVGAnimateElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.animate) }
export function AnimateMotion<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGAnimateMotionElement, M, Place, R>): Block<SVGAnimateMotionElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.animateMotion) }
export function AnimateTransform<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGAnimateTransformElement, M, Place, R>): Block<SVGAnimateTransformElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.animateTransform) }
export function Circle<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGCircleElement, M, Place, R>): Block<SVGCircleElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.circle) }
export function ClipPath<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGClipPathElement, M, Place, R>): Block<SVGClipPathElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.clipPath) }
export function Defs<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGDefsElement, M, Place, R>): Block<SVGDefsElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.defs) }
export function Desc<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGDescElement, M, Place, R>): Block<SVGDescElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.desc) }
export function Ellipse<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGEllipseElement, M, Place, R>): Block<SVGEllipseElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.ellipse) }
export function FeBlend<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEBlendElement, M, Place, R>): Block<SVGFEBlendElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feBlend) }
export function FeColorMatrix<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEColorMatrixElement, M, Place, R>): Block<SVGFEColorMatrixElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feColorMatrix) }
export function FeComponentTransfer<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEComponentTransferElement, M, Place, R>): Block<SVGFEComponentTransferElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feComponentTransfer) }
export function FeComposite<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFECompositeElement, M, Place, R>): Block<SVGFECompositeElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feComposite) }
export function FeConvolveMatrix<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEConvolveMatrixElement, M, Place, R>): Block<SVGFEConvolveMatrixElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feConvolveMatrix) }
export function FeDiffuseLighting<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEDiffuseLightingElement, M, Place, R>): Block<SVGFEDiffuseLightingElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feDiffuseLighting) }
export function FeDisplacementMap<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEDisplacementMapElement, M, Place, R>): Block<SVGFEDisplacementMapElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feDisplacementMap) }
export function FeDistantLight<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEDistantLightElement, M, Place, R>): Block<SVGFEDistantLightElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feDistantLight) }
export function FeDropShadow<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEDropShadowElement, M, Place, R>): Block<SVGFEDropShadowElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feDropShadow) }
export function FeFlood<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEFloodElement, M, Place, R>): Block<SVGFEFloodElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feFlood) }
export function FeFuncA<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEFuncAElement, M, Place, R>): Block<SVGFEFuncAElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feFuncA) }
export function FeFuncB<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEFuncBElement, M, Place, R>): Block<SVGFEFuncBElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feFuncB) }
export function FeFuncG<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEFuncGElement, M, Place, R>): Block<SVGFEFuncGElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feFuncG) }
export function FeFuncR<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEFuncRElement, M, Place, R>): Block<SVGFEFuncRElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feFuncR) }
export function FeGaussianBlur<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEGaussianBlurElement, M, Place, R>): Block<SVGFEGaussianBlurElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feGaussianBlur) }
export function FeImage<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEImageElement, M, Place, R>): Block<SVGFEImageElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feImage) }
export function FeMerge<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEMergeElement, M, Place, R>): Block<SVGFEMergeElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feMerge) }
export function FeMergeNode<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEMergeNodeElement, M, Place, R>): Block<SVGFEMergeNodeElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feMergeNode) }
export function FeMorphology<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEMorphologyElement, M, Place, R>): Block<SVGFEMorphologyElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feMorphology) }
export function FeOffset<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEOffsetElement, M, Place, R>): Block<SVGFEOffsetElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feOffset) }
export function FePointLight<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFEPointLightElement, M, Place, R>): Block<SVGFEPointLightElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.fePointLight) }
export function FeSpecularLighting<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFESpecularLightingElement, M, Place, R>): Block<SVGFESpecularLightingElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feSpecularLighting) }
export function FeSpotLight<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFESpotLightElement, M, Place, R>): Block<SVGFESpotLightElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feSpotLight) }
export function FeTile<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFETileElement, M, Place, R>): Block<SVGFETileElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feTile) }
export function FeTurbulence<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFETurbulenceElement, M, Place, R>): Block<SVGFETurbulenceElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.feTurbulence) }
export function Filter<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGFilterElement, M, Place, R>): Block<SVGFilterElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.filter) }
export function ForeignObject<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGForeignObjectElement, M, Place, R>): Block<SVGForeignObjectElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.foreignObject) }
export function G<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGGElement, M, Place, R>): Block<SVGGElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.g) }
export function SvgImage<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGImageElement, M, Place, R>): Block<SVGImageElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.image) }
export function Line<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGLineElement, M, Place, R>): Block<SVGLineElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.line) }
export function LinearGradient<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGLinearGradientElement, M, Place, R>): Block<SVGLinearGradientElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.linearGradient) }
export function Marker<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGMarkerElement, M, Place, R>): Block<SVGMarkerElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.marker) }
export function Mask<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGMaskElement, M, Place, R>): Block<SVGMaskElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.mask) }
export function MetaData<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGMetadataElement, M, Place, R>): Block<SVGMetadataElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.metadata) }
export function MPath<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGElement, M, Place, R>): Block<SVGElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.mpath) }
export function Path<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGPathElement, M, Place, R>): Block<SVGPathElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.path) }
export function Pattern<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGPatternElement, M, Place, R>): Block<SVGPatternElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.pattern) }
export function Polygon<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGPolygonElement, M, Place, R>): Block<SVGPolygonElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.polygon) }
export function PolyLine<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGPolylineElement, M, Place, R>): Block<SVGPolylineElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.polyline) }
export function RadialGradient<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGRadialGradientElement, M, Place, R>): Block<SVGRadialGradientElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.radialGradient) }
export function Rect<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGRectElement, M, Place, R>): Block<SVGRectElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.rect) }
export function Stop<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGStopElement, M, Place, R>): Block<SVGStopElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.stop) }
export function SvgSwitch<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGSwitchElement, M, Place, R>): Block<SVGSwitchElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.switch) }
export function Symbol<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGSymbolElement, M, Place, R>): Block<SVGSymbolElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.symbol) }
export function Text<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGTextElement, M, Place, R>): Block<SVGTextElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.text) }
export function TextPath<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGTextPathElement, M, Place, R>): Block<SVGTextPathElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.textPath) }
export function TSpan<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGTSpanElement, M, Place, R>): Block<SVGTSpanElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.tspan) }
export function Use<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGUseElement, M, Place, R>): Block<SVGUseElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.use) }
export function View<M = unknown, R = void>(name: string, options: BlockOptions<Place> | undefined, renderer: Render<SVGViewElement, M, Place, R>): Block<SVGViewElement, M, Place, R> { return Inline(name, options, renderer, SvgTags.view) }

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
  param: new HtmlBlockFactory<HTMLParamElement>('param', true),
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
