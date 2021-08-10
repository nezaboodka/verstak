// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Render, Manifest, manifest, RefreshParent, ComponentRender } from '../core/api'
import { HtmlRtti, SvgRtti } from './HtmlRtti'

function nullRender(e: Element): void { /* nop */ }

export function RxA<O = void>(id: string, args: any, render: Render<HTMLAnchorElement, O>, componentRender?: ComponentRender<O, HTMLAnchorElement>): Manifest<HTMLAnchorElement, O> { return manifest(id, args, render, componentRender, HtmlTags.a) }
export function RxAbbr<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.abbr) }
export function RxAddress<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.address) }
export function RxArea<O = void>(id: string, args: any, render: Render<HTMLAreaElement, O>, componentRender?: ComponentRender<O, HTMLAreaElement>): Manifest<HTMLAreaElement, O> { return manifest(id, args, render, componentRender, HtmlTags.area) }
export function RxArticle<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.article) }
export function RxAside<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.aside) }
export function RxAudio<O = void>(id: string, args: any, render: Render<HTMLAudioElement, O>, componentRender?: ComponentRender<O, HTMLAudioElement>): Manifest<HTMLAudioElement, O> { return manifest(id, args, render, componentRender, HtmlTags.audio) }
export function RxB<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.b) }
export function RxBase<O = void>(id: string, args: any, render: Render<HTMLBaseElement, O>, componentRender?: ComponentRender<O, HTMLBaseElement>): Manifest<HTMLBaseElement, O> { return manifest(id, args, render, componentRender, HtmlTags.base) }
export function RxBdi<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.bdi) }
export function RxBdo<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.bdo) }
export function RxBig<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.big) }
export function RxBlockQuote<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.blockquote) }
export function RxBody<O = void>(id: string, args: any, render: Render<HTMLBodyElement, O>, componentRender?: ComponentRender<O, HTMLBodyElement>): Manifest<HTMLBodyElement, O> { return manifest(id, args, render, componentRender, HtmlTags.body) }
export function RxBR<O = void>(id: string, args: any, render: Render<HTMLBRElement, O>, componentRender?: ComponentRender<O, HTMLBRElement>): Manifest<HTMLBRElement, O> { return manifest(id, args, render, componentRender, HtmlTags.br) }
export function RxButton<O = void>(id: string, args: any, render: Render<HTMLButtonElement, O>, componentRender?: ComponentRender<O, HTMLButtonElement>): Manifest<HTMLButtonElement, O> { return manifest(id, args, render, componentRender, HtmlTags.button) }
export function RxCanvas<O = void>(id: string, args: any, render: Render<HTMLCanvasElement, O>, componentRender?: ComponentRender<O, HTMLCanvasElement>): Manifest<HTMLCanvasElement, O> { return manifest(id, args, render, componentRender, HtmlTags.canvas) }
export function RxCaption<O = void>(id: string, args: any, render: Render<HTMLTableCaptionElement, O>, componentRender?: ComponentRender<O, HTMLTableCaptionElement>): Manifest<HTMLTableCaptionElement, O> { return manifest(id, args, render, componentRender, HtmlTags.caption) }
export function RxCite<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.cite) }
export function RxCode<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.code) }
export function RxCol<O = void>(id: string, args: any, render: Render<HTMLTableColElement, O>, componentRender?: ComponentRender<O, HTMLTableColElement>): Manifest<HTMLTableColElement, O> { return manifest(id, args, render, componentRender, HtmlTags.col) }
export function RxColGroup<O = void>(id: string, args: any, render: Render<HTMLTableColElement, O>, componentRender?: ComponentRender<O, HTMLTableColElement>): Manifest<HTMLTableColElement, O> { return manifest(id, args, render, componentRender, HtmlTags.colgroup) }
export function RxData<O = void>(id: string, args: any, render: Render<HTMLDataElement, O>, componentRender?: ComponentRender<O, HTMLDataElement>): Manifest<HTMLDataElement, O> { return manifest(id, args, render, componentRender, HtmlTags.data) }
export function RxDataList<O = void>(id: string, args: any, render: Render<HTMLDataListElement, O>, componentRender?: ComponentRender<O, HTMLDataListElement>): Manifest<HTMLDataListElement, O> { return manifest(id, args, render, componentRender, HtmlTags.datalist) }
export function RxDD<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.dd) }
export function RxDel<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.del) }
export function RxDetails<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.details) }
export function RxDfn<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.dfn) }
export function RxDialog<O = void>(id: string, args: any, render: Render<HTMLDialogElement, O>, componentRender?: ComponentRender<O, HTMLDialogElement>): Manifest<HTMLDialogElement, O> { return manifest(id, args, render, componentRender, HtmlTags.dialog) }
export function RxDiv<O = void>(id: string, args: any, render: Render<HTMLDivElement, O>, componentRender?: ComponentRender<O, HTMLDivElement>): Manifest<HTMLDivElement, O> { return manifest(id, args, render, componentRender, HtmlTags.div) }
export function RxDL<O = void>(id: string, args: any, render: Render<HTMLDListElement, O>, componentRender?: ComponentRender<O, HTMLDListElement>): Manifest<HTMLDListElement, O> { return manifest(id, args, render, componentRender, HtmlTags.dl) }
export function RxDT<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.dt) }
export function RxEM<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.em) }
export function RxEmbed<O = void>(id: string, args: any, render: Render<HTMLEmbedElement, O>, componentRender?: ComponentRender<O, HTMLEmbedElement>): Manifest<HTMLEmbedElement, O> { return manifest(id, args, render, componentRender, HtmlTags.embed) }
export function RxFieldSet<O = void>(id: string, args: any, render: Render<HTMLFieldSetElement, O>, componentRender?: ComponentRender<O, HTMLFieldSetElement>): Manifest<HTMLFieldSetElement, O> { return manifest(id, args, render, componentRender, HtmlTags.fieldset) }
export function RxFigCaption<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.figcaption) }
export function RxFigure<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.figure) }
export function RxFooter<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.footer) }
export function RxForm<O = void>(id: string, args: any, render: Render<HTMLFormElement, O>, componentRender?: ComponentRender<O, HTMLFormElement>): Manifest<HTMLFormElement, O> { return manifest(id, args, render, componentRender, HtmlTags.form) }
export function RxH1<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, componentRender?: ComponentRender<O, HTMLHeadingElement>): Manifest<HTMLHeadingElement, O> { return manifest(id, args, render, componentRender, HtmlTags.h1) }
export function RxH2<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, componentRender?: ComponentRender<O, HTMLHeadingElement>): Manifest<HTMLHeadingElement, O> { return manifest(id, args, render, componentRender, HtmlTags.h2) }
export function RxH3<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, componentRender?: ComponentRender<O, HTMLHeadingElement>): Manifest<HTMLHeadingElement, O> { return manifest(id, args, render, componentRender, HtmlTags.h3) }
export function RxH4<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, componentRender?: ComponentRender<O, HTMLHeadingElement>): Manifest<HTMLHeadingElement, O> { return manifest(id, args, render, componentRender, HtmlTags.h4) }
export function RxH5<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, componentRender?: ComponentRender<O, HTMLHeadingElement>): Manifest<HTMLHeadingElement, O> { return manifest(id, args, render, componentRender, HtmlTags.h5) }
export function RxH6<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, componentRender?: ComponentRender<O, HTMLHeadingElement>): Manifest<HTMLHeadingElement, O> { return manifest(id, args, render, componentRender, HtmlTags.h6) }
export function RxHead<O = void>(id: string, args: any, render: Render<HTMLHeadElement, O>, componentRender?: ComponentRender<O, HTMLHeadElement>): Manifest<HTMLHeadElement, O> { return manifest(id, args, render, componentRender, HtmlTags.head) }
export function RxHeader<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.header) }
export function RxHGroup<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.hgroup) }
export function RxHR<O = void>(id: string, args: any, render: Render<HTMLHRElement, O>, componentRender?: ComponentRender<O, HTMLHRElement>): Manifest<HTMLHRElement, O> { return manifest(id, args, render, componentRender, HtmlTags.hr) }
export function RxHtml<O = void>(id: string, args: any, render: Render<HTMLHtmlElement, O>, componentRender?: ComponentRender<O, HTMLHtmlElement>): Manifest<HTMLHtmlElement, O> { return manifest(id, args, render, componentRender, HtmlTags.html) }
export function RxI<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.i) }
export function RxIFrame<O = void>(id: string, args: any, render: Render<HTMLIFrameElement, O>, componentRender?: ComponentRender<O, HTMLIFrameElement>): Manifest<HTMLIFrameElement, O> { return manifest(id, args, render, componentRender, HtmlTags.iframe) }
export function RxImg<O = void>(id: string, args: any, render: Render<HTMLImageElement, O>, componentRender?: ComponentRender<O, HTMLImageElement>): Manifest<HTMLImageElement, O> { return manifest(id, args, render, componentRender, HtmlTags.img) }
export function RxInput<O = void>(id: string, args: any, render: Render<HTMLInputElement, O>, componentRender?: ComponentRender<O, HTMLInputElement>): Manifest<HTMLInputElement, O> { return manifest(id, args, render, componentRender, HtmlTags.input) }
export function RxIns<O = void>(id: string, args: any, render: Render<HTMLModElement, O>, componentRender?: ComponentRender<O, HTMLModElement>): Manifest<HTMLModElement, O> { return manifest(id, args, render, componentRender, HtmlTags.ins) }
export function RxKbd<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.kbd) }
export function RxKeygen<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.keygen) }
export function RxLabel<O = void>(id: string, args: any, render: Render<HTMLLabelElement, O>, componentRender?: ComponentRender<O, HTMLLabelElement>): Manifest<HTMLLabelElement, O> { return manifest(id, args, render, componentRender, HtmlTags.label) }
export function RxLegend<O = void>(id: string, args: any, render: Render<HTMLLegendElement, O>, componentRender?: ComponentRender<O, HTMLLegendElement>): Manifest<HTMLLegendElement, O> { return manifest(id, args, render, componentRender, HtmlTags.legend) }
export function RxLI<O = void>(id: string, args: any, render: Render<HTMLLIElement, O>, componentRender?: ComponentRender<O, HTMLLIElement>): Manifest<HTMLLIElement, O> { return manifest(id, args, render, componentRender, HtmlTags.li) }
export function RxLink<O = void>(id: string, args: any, render: Render<HTMLLinkElement, O>, componentRender?: ComponentRender<O, HTMLLinkElement>): Manifest<HTMLLinkElement, O> { return manifest(id, args, render, componentRender, HtmlTags.link) }
export function RxMain<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.main) }
export function RxMap<O = void>(id: string, args: any, render: Render<HTMLMapElement, O>, componentRender?: ComponentRender<O, HTMLMapElement>): Manifest<HTMLMapElement, O> { return manifest(id, args, render, componentRender, HtmlTags.map) }
export function RxMark<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.mark) }
export function RxMenu<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.menu) }
export function RxMenuItem<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.menuitem) }
export function RxMeta<O = void>(id: string, args: any, render: Render<HTMLMetaElement, O>, componentRender?: ComponentRender<O, HTMLMetaElement>): Manifest<HTMLMetaElement, O> { return manifest(id, args, render, componentRender, HtmlTags.meta) }
export function RxMeter<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.meter) }
export function RxNav<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.nav) }
export function RxNoIndex<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.noindex) }
export function RxNoScript<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.noscript) }
export function RxObj<O = void>(id: string, args: any, render: Render<HTMLObjectElement, O>, componentRender?: ComponentRender<O, HTMLObjectElement>): Manifest<HTMLObjectElement, O> { return manifest(id, args, render, componentRender, HtmlTags.object) }
export function RxOL<O = void>(id: string, args: any, render: Render<HTMLOListElement, O>, componentRender?: ComponentRender<O, HTMLOListElement>): Manifest<HTMLOListElement, O> { return manifest(id, args, render, componentRender, HtmlTags.ol) }
export function RxOptGroup<O = void>(id: string, args: any, render: Render<HTMLOptGroupElement, O>, componentRender?: ComponentRender<O, HTMLOptGroupElement>): Manifest<HTMLOptGroupElement, O> { return manifest(id, args, render, componentRender, HtmlTags.optgroup) }
export function RxOption<O = void>(id: string, args: any, render: Render<HTMLOptionElement, O>, componentRender?: ComponentRender<O, HTMLOptionElement>): Manifest<HTMLOptionElement, O> { return manifest(id, args, render, componentRender, HtmlTags.option) }
export function RxOutput<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.output) }
export function RxP<O = void>(id: string, args: any, render: Render<HTMLParagraphElement, O>, componentRender?: ComponentRender<O, HTMLParagraphElement>): Manifest<HTMLParagraphElement, O> { return manifest(id, args, render, componentRender, HtmlTags.p) }
export function RxParam<O = void>(id: string, args: any, render: Render<HTMLParamElement, O>, componentRender?: ComponentRender<O, HTMLParamElement>): Manifest<HTMLParamElement, O> { return manifest(id, args, render, componentRender, HtmlTags.param) }
export function RxPicture<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.picture) }
export function RxPre<O = void>(id: string, args: any, render: Render<HTMLPreElement, O>, componentRender?: ComponentRender<O, HTMLPreElement>): Manifest<HTMLPreElement, O> { return manifest(id, args, render, componentRender, HtmlTags.pre) }
export function RxProgress<O = void>(id: string, args: any, render: Render<HTMLProgressElement, O>, componentRender?: ComponentRender<O, HTMLProgressElement>): Manifest<HTMLProgressElement, O> { return manifest(id, args, render, componentRender, HtmlTags.progress) }
export function RxQ<O = void>(id: string, args: any, render: Render<HTMLQuoteElement, O>, componentRender?: ComponentRender<O, HTMLQuoteElement>): Manifest<HTMLQuoteElement, O> { return manifest(id, args, render, componentRender, HtmlTags.q) }
export function RxRP<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.rp) }
export function RxRT<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.rt) }
export function RxRuby<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.ruby) }
export function RxS<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.s) }
export function RxSamp<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.samp) }
export function RxScript<O = void>(id: string, args: any, render: Render<HTMLScriptElement, O>, componentRender?: ComponentRender<O, HTMLScriptElement>): Manifest<HTMLScriptElement, O> { return manifest(id, args, render, componentRender, HtmlTags.script) }
export function RxSection<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.section) }
export function RxSelect<O = void>(id: string, args: any, render: Render<HTMLSelectElement, O>, componentRender?: ComponentRender<O, HTMLSelectElement>): Manifest<HTMLSelectElement, O> { return manifest(id, args, render, componentRender, HtmlTags.select) }
export function RxSmall<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.small) }
export function RxSource<O = void>(id: string, args: any, render: Render<HTMLSourceElement, O>, componentRender?: ComponentRender<O, HTMLSourceElement>): Manifest<HTMLSourceElement, O> { return manifest(id, args, render, componentRender, HtmlTags.source) }
export function RxSpan<O = void>(id: string, args: any, render: Render<HTMLSpanElement, O>, componentRender?: ComponentRender<O, HTMLSpanElement>): Manifest<HTMLSpanElement, O> { return manifest(id, args, render, componentRender, HtmlTags.span) }
export function RxStrong<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.strong) }
export function RxStyle<O = void>(id: string, args: any, render: Render<HTMLStyleElement, O>, componentRender?: ComponentRender<O, HTMLStyleElement>): Manifest<HTMLStyleElement, O> { return manifest(id, args, render, componentRender, HtmlTags.style) }
export function RxSub<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.sub) }
export function RxSummary<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.summary) }
export function RxSup<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.sup) }
export function RxTable<O = void>(id: string, args: any, render: Render<HTMLTableElement, O>, componentRender?: ComponentRender<O, HTMLTableElement>): Manifest<HTMLTableElement, O> { return manifest(id, args, render, componentRender, HtmlTags.table) }
export function RxTemplate<O = void>(id: string, args: any, render: Render<HTMLTemplateElement, O>, componentRender?: ComponentRender<O, HTMLTemplateElement>): Manifest<HTMLTemplateElement, O> { return manifest(id, args, render, componentRender, HtmlTags.template) }
export function RxTBody<O = void>(id: string, args: any, render: Render<HTMLTableSectionElement, O>, componentRender?: ComponentRender<O, HTMLTableSectionElement>): Manifest<HTMLTableSectionElement, O> { return manifest(id, args, render, componentRender, HtmlTags.tbody) }
export function RxTD<O = void>(id: string, args: any, render: Render<HTMLTableDataCellElement, O>, componentRender?: ComponentRender<O, HTMLTableDataCellElement>): Manifest<HTMLTableDataCellElement, O> { return manifest(id, args, render, componentRender, HtmlTags.td) }
export function RxTextArea<O = void>(id: string, args: any, render: Render<HTMLTextAreaElement, O>, componentRender?: ComponentRender<O, HTMLTextAreaElement>): Manifest<HTMLTextAreaElement, O> { return manifest(id, args, render, componentRender, HtmlTags.textarea) }
export function RxTFoot<O = void>(id: string, args: any, render: Render<HTMLTableSectionElement, O>, componentRender?: ComponentRender<O, HTMLTableSectionElement>): Manifest<HTMLTableSectionElement, O> { return manifest(id, args, render, componentRender, HtmlTags.tfoot) }
export function RxTH<O = void>(id: string, args: any, render: Render<HTMLTableHeaderCellElement, O>, componentRender?: ComponentRender<O, HTMLTableHeaderCellElement>): Manifest<HTMLTableHeaderCellElement, O> { return manifest(id, args, render, componentRender, HtmlTags.th) }
export function RxTHead<O = void>(id: string, args: any, render: Render<HTMLTableSectionElement, O>, componentRender?: ComponentRender<O, HTMLTableSectionElement>): Manifest<HTMLTableSectionElement, O> { return manifest(id, args, render, componentRender, HtmlTags.thead) }
export function RxTime<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.time) }
export function RxTitle<O = void>(id: string, args: any, render: Render<HTMLTitleElement, O>, componentRender?: ComponentRender<O, HTMLTitleElement>): Manifest<HTMLTitleElement, O> { return manifest(id, args, render, componentRender, HtmlTags.title) }
export function RxTR<O = void>(id: string, args: any, render: Render<HTMLTableRowElement, O>, componentRender?: ComponentRender<O, HTMLTableRowElement>): Manifest<HTMLTableRowElement, O> { return manifest(id, args, render, componentRender, HtmlTags.tr) }
export function RxTrack<O = void>(id: string, args: any, render: Render<HTMLTrackElement, O>, componentRender?: ComponentRender<O, HTMLTrackElement>): Manifest<HTMLTrackElement, O> { return manifest(id, args, render, componentRender, HtmlTags.track) }
export function RxU<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.u) }
export function RxUL<O = void>(id: string, args: any, render: Render<HTMLUListElement, O>, componentRender?: ComponentRender<O, HTMLUListElement>): Manifest<HTMLUListElement, O> { return manifest(id, args, render, componentRender, HtmlTags.ul) }
export function RxVar<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.var) }
export function RxVideo<O = void>(id: string, args: any, render: Render<HTMLVideoElement, O>, componentRender?: ComponentRender<O, HTMLVideoElement>): Manifest<HTMLVideoElement, O> { return manifest(id, args, render, componentRender, HtmlTags.video) }
export function RxWbr<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, HtmlTags.wbr) }

export function A(id: string, render: Render<HTMLAnchorElement> = nullRender): Manifest<HTMLAnchorElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.a) }
export function Abbr(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.abbr) }
export function Address(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.address) }
export function Area(id: string, render: Render<HTMLAreaElement> = nullRender): Manifest<HTMLAreaElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.area) }
export function Article(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.article) }
export function Aside(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.aside) }
export function Audio(id: string, render: Render<HTMLAudioElement> = nullRender): Manifest<HTMLAudioElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.audio) }
export function B(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.b) }
export function Base(id: string, render: Render<HTMLBaseElement> = nullRender): Manifest<HTMLBaseElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.base) }
export function Bdi(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.bdi) }
export function Bdo(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.bdo) }
export function Big(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.big) }
export function BlockQuote(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.blockquote) }
export function Body(id: string, render: Render<HTMLBodyElement> = nullRender): Manifest<HTMLBodyElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.body) }
export function BR(id: string, render: Render<HTMLBRElement> = nullRender): Manifest<HTMLBRElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.br) }
export function Button(id: string, render: Render<HTMLButtonElement> = nullRender): Manifest<HTMLButtonElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.button) }
export function Canvas(id: string, render: Render<HTMLCanvasElement> = nullRender): Manifest<HTMLCanvasElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.canvas) }
export function Caption(id: string, render: Render<HTMLTableCaptionElement> = nullRender): Manifest<HTMLTableCaptionElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.caption) }
export function Cite(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.cite) }
export function Code(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.code) }
export function Col(id: string, render: Render<HTMLTableColElement> = nullRender): Manifest<HTMLTableColElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.col) }
export function ColGroup(id: string, render: Render<HTMLTableColElement> = nullRender): Manifest<HTMLTableColElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.colgroup) }
export function Data(id: string, render: Render<HTMLDataElement> = nullRender): Manifest<HTMLDataElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.data) }
export function DataList(id: string, render: Render<HTMLDataListElement> = nullRender): Manifest<HTMLDataListElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.datalist) }
export function DD(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.dd) }
export function Del(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.del) }
export function Details(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.details) }
export function Dfn(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.dfn) }
export function Dialog(id: string, render: Render<HTMLDialogElement> = nullRender): Manifest<HTMLDialogElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.dialog) }
export function Div(id: string, render: Render<HTMLDivElement> = nullRender): Manifest<HTMLDivElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.div) }
export function DL(id: string, render: Render<HTMLDListElement> = nullRender): Manifest<HTMLDListElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.dl) }
export function DT(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.dt) }
export function EM(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.em) }
export function Embed(id: string, render: Render<HTMLEmbedElement> = nullRender): Manifest<HTMLEmbedElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.embed) }
export function FieldSet(id: string, render: Render<HTMLFieldSetElement> = nullRender): Manifest<HTMLFieldSetElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.fieldset) }
export function FigCaption(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.figcaption) }
export function Figure(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.figure) }
export function Footer(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.footer) }
export function Form(id: string, render: Render<HTMLFormElement> = nullRender): Manifest<HTMLFormElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.form) }
export function H1(id: string, render: Render<HTMLHeadingElement> = nullRender): Manifest<HTMLHeadingElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.h1) }
export function H2(id: string, render: Render<HTMLHeadingElement> = nullRender): Manifest<HTMLHeadingElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.h2) }
export function H3(id: string, render: Render<HTMLHeadingElement> = nullRender): Manifest<HTMLHeadingElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.h3) }
export function H4(id: string, render: Render<HTMLHeadingElement> = nullRender): Manifest<HTMLHeadingElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.h4) }
export function H5(id: string, render: Render<HTMLHeadingElement> = nullRender): Manifest<HTMLHeadingElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.h5) }
export function H6(id: string, render: Render<HTMLHeadingElement> = nullRender): Manifest<HTMLHeadingElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.h6) }
export function Head(id: string, render: Render<HTMLHeadElement> = nullRender): Manifest<HTMLHeadElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.head) }
export function Header(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.header) }
export function HGroup(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.hgroup) }
export function HR(id: string, render: Render<HTMLHRElement> = nullRender): Manifest<HTMLHRElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.hr) }
export function Html(id: string, render: Render<HTMLHtmlElement> = nullRender): Manifest<HTMLHtmlElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.html) }
export function I(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.i) }
export function IFrame(id: string, render: Render<HTMLIFrameElement> = nullRender): Manifest<HTMLIFrameElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.iframe) }
export function Img(id: string, render: Render<HTMLImageElement> = nullRender): Manifest<HTMLImageElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.img) }
export function Input(id: string, render: Render<HTMLInputElement> = nullRender): Manifest<HTMLInputElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.input) }
export function Ins(id: string, render: Render<HTMLModElement> = nullRender): Manifest<HTMLModElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.ins) }
export function Kbd(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.kbd) }
export function KeyGen(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.keygen) }
export function Label(id: string, render: Render<HTMLLabelElement> = nullRender): Manifest<HTMLLabelElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.label) }
export function Legend(id: string, render: Render<HTMLLegendElement> = nullRender): Manifest<HTMLLegendElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.legend) }
export function LI(id: string, render: Render<HTMLLIElement> = nullRender): Manifest<HTMLLIElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.li) }
export function Link(id: string, render: Render<HTMLLinkElement> = nullRender): Manifest<HTMLLinkElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.link) }
export function Main(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.main) }
export function Map(id: string, render: Render<HTMLMapElement> = nullRender): Manifest<HTMLMapElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.map) }
export function Mark(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.mark) }
export function Menu(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.menu) }
export function MenuItem(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.menuitem) }
export function Meta(id: string, render: Render<HTMLMetaElement> = nullRender): Manifest<HTMLMetaElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.meta) }
export function Meter(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.meter) }
export function Nav(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.nav) }
export function NoIndex(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.noindex) }
export function NoScript(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.noscript) }
export function Obj(id: string, render: Render<HTMLObjectElement> = nullRender): Manifest<HTMLObjectElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.object) }
export function OL(id: string, render: Render<HTMLOListElement> = nullRender): Manifest<HTMLOListElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.ol) }
export function OptGroup(id: string, render: Render<HTMLOptGroupElement> = nullRender): Manifest<HTMLOptGroupElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.optgroup) }
export function Option(id: string, render: Render<HTMLOptionElement> = nullRender): Manifest<HTMLOptionElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.option) }
export function Output(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.output) }
export function P(id: string, render: Render<HTMLParagraphElement> = nullRender): Manifest<HTMLParagraphElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.p) }
export function Param(id: string, render: Render<HTMLParamElement> = nullRender): Manifest<HTMLParamElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.param) }
export function Picture(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.picture) }
export function Pre(id: string, render: Render<HTMLPreElement> = nullRender): Manifest<HTMLPreElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.pre) }
export function Progress(id: string, render: Render<HTMLProgressElement> = nullRender): Manifest<HTMLProgressElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.progress) }
export function Q(id: string, render: Render<HTMLQuoteElement> = nullRender): Manifest<HTMLQuoteElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.q) }
export function RP(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.rp) }
export function RT(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.rt) }
export function Ruby(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.ruby) }
export function S(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.s) }
export function Samp(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.samp) }
export function Script(id: string, render: Render<HTMLScriptElement> = nullRender): Manifest<HTMLScriptElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.script) }
export function Section(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.section) }
export function Select(id: string, render: Render<HTMLSelectElement> = nullRender): Manifest<HTMLSelectElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.select) }
export function Small(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.small) }
export function Source(id: string, render: Render<HTMLSourceElement> = nullRender): Manifest<HTMLSourceElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.source) }
export function Span(id: string, render: Render<HTMLSpanElement> = nullRender): Manifest<HTMLSpanElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.span) }
export function Strong(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.strong) }
export function Style(id: string, render: Render<HTMLStyleElement> = nullRender): Manifest<HTMLStyleElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.style) }
export function Sub(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.sub) }
export function Summary(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.summary) }
export function Sup(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.sup) }
export function Table(id: string, render: Render<HTMLTableElement> = nullRender): Manifest<HTMLTableElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.table) }
export function Template(id: string, render: Render<HTMLTemplateElement> = nullRender): Manifest<HTMLTemplateElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.template) }
export function TBody(id: string, render: Render<HTMLTableSectionElement> = nullRender): Manifest<HTMLTableSectionElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.tbody) }
export function TD(id: string, render: Render<HTMLTableDataCellElement> = nullRender): Manifest<HTMLTableDataCellElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.td) }
export function TextArea(id: string, render: Render<HTMLTextAreaElement> = nullRender): Manifest<HTMLTextAreaElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.textarea) }
export function TFoot(id: string, render: Render<HTMLTableSectionElement> = nullRender): Manifest<HTMLTableSectionElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.tfoot) }
export function TH(id: string, render: Render<HTMLTableHeaderCellElement> = nullRender): Manifest<HTMLTableHeaderCellElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.th) }
export function THead(id: string, render: Render<HTMLTableSectionElement> = nullRender): Manifest<HTMLTableSectionElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.thead) }
export function Time(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.time) }
export function Title(id: string, render: Render<HTMLTitleElement> = nullRender): Manifest<HTMLTitleElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.title) }
export function TR(id: string, render: Render<HTMLTableRowElement> = nullRender): Manifest<HTMLTableRowElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.tr) }
export function Track(id: string, render: Render<HTMLTrackElement> = nullRender): Manifest<HTMLTrackElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.track) }
export function U(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.u) }
export function UL(id: string, render: Render<HTMLUListElement> = nullRender): Manifest<HTMLUListElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.ul) }
export function Var(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.var) }
export function Video(id: string, render: Render<HTMLVideoElement> = nullRender): Manifest<HTMLVideoElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.video) }
export function Wbr(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshParent, render, undefined, HtmlTags.wbr) }

const HtmlTags = {
  a: new HtmlRtti<HTMLAnchorElement>('a'),
  abbr: new HtmlRtti<HTMLElement>('abbr'),
  address: new HtmlRtti<HTMLElement>('address'),
  area: new HtmlRtti<HTMLAreaElement>('area'),
  article: new HtmlRtti<HTMLElement>('article'),
  aside: new HtmlRtti<HTMLElement>('aside'),
  audio: new HtmlRtti<HTMLAudioElement>('audio'),
  b: new HtmlRtti<HTMLElement>('b'),
  base: new HtmlRtti<HTMLBaseElement>('base'),
  bdi: new HtmlRtti<HTMLElement>('bdi'),
  bdo: new HtmlRtti<HTMLElement>('bdo'),
  big: new HtmlRtti<HTMLElement>('big'),
  blockquote: new HtmlRtti<HTMLElement>('blockquote'),
  body: new HtmlRtti<HTMLBodyElement>('body'),
  br: new HtmlRtti<HTMLBRElement>('br'),
  button: new HtmlRtti<HTMLButtonElement>('button'),
  canvas: new HtmlRtti<HTMLCanvasElement>('canvas'),
  caption: new HtmlRtti<HTMLTableCaptionElement>('caption'),
  cite: new HtmlRtti<HTMLElement>('cite'),
  code: new HtmlRtti<HTMLElement>('code'),
  col: new HtmlRtti<HTMLTableColElement>('col'),
  colgroup: new HtmlRtti<HTMLTableColElement>('colgroup'),
  data: new HtmlRtti<HTMLDataElement>('data'),
  datalist: new HtmlRtti<HTMLDataListElement>('datalist'),
  dd: new HtmlRtti<HTMLElement>('dd'),
  del: new HtmlRtti<HTMLElement>('del'),
  details: new HtmlRtti<HTMLElement>('details'),
  dfn: new HtmlRtti<HTMLElement>('dfn'),
  dialog: new HtmlRtti<HTMLDialogElement>('dialog'),
  div: new HtmlRtti<HTMLDivElement>('div'),
  dl: new HtmlRtti<HTMLDListElement>('dl'),
  dt: new HtmlRtti<HTMLElement>('dt'),
  em: new HtmlRtti<HTMLElement>('em'),
  embed: new HtmlRtti<HTMLEmbedElement>('embed'),
  fieldset: new HtmlRtti<HTMLFieldSetElement>('fieldset'),
  figcaption: new HtmlRtti<HTMLElement>('figcaption'),
  figure: new HtmlRtti<HTMLElement>('figure'),
  footer: new HtmlRtti<HTMLElement>('footer'),
  form: new HtmlRtti<HTMLFormElement>('form'),
  h1: new HtmlRtti<HTMLHeadingElement>('h1'),
  h2: new HtmlRtti<HTMLHeadingElement>('h2'),
  h3: new HtmlRtti<HTMLHeadingElement>('h3'),
  h4: new HtmlRtti<HTMLHeadingElement>('h4'),
  h5: new HtmlRtti<HTMLHeadingElement>('h5'),
  h6: new HtmlRtti<HTMLHeadingElement>('h6'),
  head: new HtmlRtti<HTMLHeadElement>('head'),
  header: new HtmlRtti<HTMLElement>('header'),
  hgroup: new HtmlRtti<HTMLElement>('hgroup'),
  hr: new HtmlRtti<HTMLHRElement>('hr'),
  html: new HtmlRtti<HTMLHtmlElement>('html'),
  i: new HtmlRtti<HTMLElement>('i'),
  iframe: new HtmlRtti<HTMLIFrameElement>('iframe'),
  img: new HtmlRtti<HTMLImageElement>('img'),
  input: new HtmlRtti<HTMLInputElement>('input'),
  ins: new HtmlRtti<HTMLModElement>('ins'),
  kbd: new HtmlRtti<HTMLElement>('kbd'),
  keygen: new HtmlRtti<HTMLElement>('keygen'),
  label: new HtmlRtti<HTMLLabelElement>('label'),
  legend: new HtmlRtti<HTMLLegendElement>('legend'),
  li: new HtmlRtti<HTMLLIElement>('li'),
  link: new HtmlRtti<HTMLLinkElement>('link'),
  main: new HtmlRtti<HTMLElement>('main'),
  map: new HtmlRtti<HTMLMapElement>('map'),
  mark: new HtmlRtti<HTMLElement>('mark'),
  menu: new HtmlRtti<HTMLElement>('menu'),
  menuitem: new HtmlRtti<HTMLElement>('menuitem'),
  meta: new HtmlRtti<HTMLMetaElement>('meta'),
  meter: new HtmlRtti<HTMLElement>('meter'),
  nav: new HtmlRtti<HTMLElement>('nav'),
  noindex: new HtmlRtti<HTMLElement>('noindex'),
  noscript: new HtmlRtti<HTMLElement>('noscript'),
  object: new HtmlRtti<HTMLObjectElement>('object'),
  ol: new HtmlRtti<HTMLOListElement>('ol'),
  optgroup: new HtmlRtti<HTMLOptGroupElement>('optgroup'),
  option: new HtmlRtti<HTMLOptionElement>('option'),
  output: new HtmlRtti<HTMLElement>('output'),
  p: new HtmlRtti<HTMLParagraphElement>('p'),
  param: new HtmlRtti<HTMLParamElement>('param'),
  picture: new HtmlRtti<HTMLElement>('picture'),
  pre: new HtmlRtti<HTMLPreElement>('pre'),
  progress: new HtmlRtti<HTMLProgressElement>('progress'),
  q: new HtmlRtti<HTMLQuoteElement>('q'),
  rp: new HtmlRtti<HTMLElement>('rp'),
  rt: new HtmlRtti<HTMLElement>('rt'),
  ruby: new HtmlRtti<HTMLElement>('ruby'),
  s: new HtmlRtti<HTMLElement>('s'),
  samp: new HtmlRtti<HTMLElement>('samp'),
  script: new HtmlRtti<HTMLScriptElement>('script'),
  section: new HtmlRtti<HTMLElement>('section'),
  select: new HtmlRtti<HTMLSelectElement>('select'),
  small: new HtmlRtti<HTMLElement>('small'),
  source: new HtmlRtti<HTMLSourceElement>('source'),
  span: new HtmlRtti<HTMLSpanElement>('span'),
  strong: new HtmlRtti<HTMLElement>('strong'),
  style: new HtmlRtti<HTMLStyleElement>('style'),
  sub: new HtmlRtti<HTMLElement>('sub'),
  summary: new HtmlRtti<HTMLElement>('summary'),
  sup: new HtmlRtti<HTMLElement>('sup'),
  table: new HtmlRtti<HTMLTableElement>('table'),
  template: new HtmlRtti<HTMLTemplateElement>('template'),
  tbody: new HtmlRtti<HTMLTableSectionElement>('tbody'),
  td: new HtmlRtti<HTMLTableDataCellElement>('td'),
  textarea: new HtmlRtti<HTMLTextAreaElement>('textarea'),
  tfoot: new HtmlRtti<HTMLTableSectionElement>('tfoot'),
  th: new HtmlRtti<HTMLTableHeaderCellElement>('th'),
  thead: new HtmlRtti<HTMLTableSectionElement>('thead'),
  time: new HtmlRtti<HTMLElement>('time'),
  title: new HtmlRtti<HTMLTitleElement>('title'),
  tr: new HtmlRtti<HTMLTableRowElement>('tr'),
  track: new HtmlRtti<HTMLTrackElement>('track'),
  u: new HtmlRtti<HTMLElement>('u'),
  ul: new HtmlRtti<HTMLUListElement>('ul'),
  var: new HtmlRtti<HTMLElement>('var'),
  video: new HtmlRtti<HTMLVideoElement>('video'),
  wbr: new HtmlRtti<HTMLElement>('wbr'),
  // webview: new HtmlRtti<HTMLWebViewElement>('webview'),
}

export function RxSvg<O = void>(id: string, args: any, render: Render<SVGSVGElement, O>, componentRender?: ComponentRender<O, SVGSVGElement>): Manifest<SVGSVGElement, O> { return manifest(id, args, render, componentRender, SvgTags.svg) }
export function RxSvgA<O = void>(id: string, args: any, render: Render<SVGAElement, O>, componentRender?: ComponentRender<O, SVGAElement>): Manifest<SVGAElement, O> { return manifest(id, args, render, componentRender, SvgTags.a) }
export function RxAnimate<O = void>(id: string, args: any, render: Render<SVGAnimateElement, O>, componentRender?: ComponentRender<O, SVGAnimateElement>): Manifest<SVGAnimateElement, O> { return manifest(id, args, render, componentRender, SvgTags.animate) }
export function RxAnimateMotion<O = void>(id: string, args: any, render: Render<SVGAnimateMotionElement, O>, componentRender?: ComponentRender<O, SVGAnimateMotionElement>): Manifest<SVGAnimateMotionElement, O> { return manifest(id, args, render, componentRender, SvgTags.animateMotion) }
export function RxAnimateTransform<O = void>(id: string, args: any, render: Render<SVGAnimateTransformElement, O>, componentRender?: ComponentRender<O, SVGAnimateTransformElement>): Manifest<SVGAnimateTransformElement, O> { return manifest(id, args, render, componentRender, SvgTags.animateTransform) }
export function RxCircle<O = void>(id: string, args: any, render: Render<SVGCircleElement, O>, componentRender?: ComponentRender<O, SVGCircleElement>): Manifest<SVGCircleElement, O> { return manifest(id, args, render, componentRender, SvgTags.circle) }
export function RxClipPath<O = void>(id: string, args: any, render: Render<SVGClipPathElement, O>, componentRender?: ComponentRender<O, SVGClipPathElement>): Manifest<SVGClipPathElement, O> { return manifest(id, args, render, componentRender, SvgTags.clipPath) }
export function RxDefs<O = void>(id: string, args: any, render: Render<SVGDefsElement, O>, componentRender?: ComponentRender<O, SVGDefsElement>): Manifest<SVGDefsElement, O> { return manifest(id, args, render, componentRender, SvgTags.defs) }
export function RxDesc<O = void>(id: string, args: any, render: Render<SVGDescElement, O>, componentRender?: ComponentRender<O, SVGDescElement>): Manifest<SVGDescElement, O> { return manifest(id, args, render, componentRender, SvgTags.desc) }
export function RxEllipse<O = void>(id: string, args: any, render: Render<SVGEllipseElement, O>, componentRender?: ComponentRender<O, SVGEllipseElement>): Manifest<SVGEllipseElement, O> { return manifest(id, args, render, componentRender, SvgTags.ellipse) }
export function RxFeBlend<O = void>(id: string, args: any, render: Render<SVGFEBlendElement, O>, componentRender?: ComponentRender<O, SVGFEBlendElement>): Manifest<SVGFEBlendElement, O> { return manifest(id, args, render, componentRender, SvgTags.feBlend) }
export function RxFeColorMatrix<O = void>(id: string, args: any, render: Render<SVGFEColorMatrixElement, O>, componentRender?: ComponentRender<O, SVGFEColorMatrixElement>): Manifest<SVGFEColorMatrixElement, O> { return manifest(id, args, render, componentRender, SvgTags.feColorMatrix) }
export function RxFeComponentTransfer<O = void>(id: string, args: any, render: Render<SVGFEComponentTransferElement, O>, componentRender?: ComponentRender<O, SVGFEComponentTransferElement>): Manifest<SVGFEComponentTransferElement, O> { return manifest(id, args, render, componentRender, SvgTags.feComponentTransfer) }
export function RxFeComposite<O = void>(id: string, args: any, render: Render<SVGFECompositeElement, O>, componentRender?: ComponentRender<O, SVGFECompositeElement>): Manifest<SVGFECompositeElement, O> { return manifest(id, args, render, componentRender, SvgTags.feComposite) }
export function RxFeConvolveMatrix<O = void>(id: string, args: any, render: Render<SVGFEConvolveMatrixElement, O>, componentRender?: ComponentRender<O, SVGFEConvolveMatrixElement>): Manifest<SVGFEConvolveMatrixElement, O> { return manifest(id, args, render, componentRender, SvgTags.feConvolveMatrix) }
export function RxFeDiffuseLighting<O = void>(id: string, args: any, render: Render<SVGFEDiffuseLightingElement, O>, componentRender?: ComponentRender<O, SVGFEDiffuseLightingElement>): Manifest<SVGFEDiffuseLightingElement, O> { return manifest(id, args, render, componentRender, SvgTags.feDiffuseLighting) }
export function RxFeDisplacementMap<O = void>(id: string, args: any, render: Render<SVGFEDisplacementMapElement, O>, componentRender?: ComponentRender<O, SVGFEDisplacementMapElement>): Manifest<SVGFEDisplacementMapElement, O> { return manifest(id, args, render, componentRender, SvgTags.feDisplacementMap) }
export function RxFeDistantLight<O = void>(id: string, args: any, render: Render<SVGFEDistantLightElement, O>, componentRender?: ComponentRender<O, SVGFEDistantLightElement>): Manifest<SVGFEDistantLightElement, O> { return manifest(id, args, render, componentRender, SvgTags.feDistantLight) }
export function RxFeDropShadow<O = void>(id: string, args: any, render: Render<SVGFEDropShadowElement, O>, componentRender?: ComponentRender<O, SVGFEDropShadowElement>): Manifest<SVGFEDropShadowElement, O> { return manifest(id, args, render, componentRender, SvgTags.feDropShadow) }
export function RxFeFlood<O = void>(id: string, args: any, render: Render<SVGFEFloodElement, O>, componentRender?: ComponentRender<O, SVGFEFloodElement>): Manifest<SVGFEFloodElement, O> { return manifest(id, args, render, componentRender, SvgTags.feFlood) }
export function RxFeFuncA<O = void>(id: string, args: any, render: Render<SVGFEFuncAElement, O>, componentRender?: ComponentRender<O, SVGFEFuncAElement>): Manifest<SVGFEFuncAElement, O> { return manifest(id, args, render, componentRender, SvgTags.feFuncA) }
export function RxFeFuncB<O = void>(id: string, args: any, render: Render<SVGFEFuncBElement, O>, componentRender?: ComponentRender<O, SVGFEFuncBElement>): Manifest<SVGFEFuncBElement, O> { return manifest(id, args, render, componentRender, SvgTags.feFuncB) }
export function RxFeFuncG<O = void>(id: string, args: any, render: Render<SVGFEFuncGElement, O>, componentRender?: ComponentRender<O, SVGFEFuncGElement>): Manifest<SVGFEFuncGElement, O> { return manifest(id, args, render, componentRender, SvgTags.feFuncG) }
export function RxFeFuncR<O = void>(id: string, args: any, render: Render<SVGFEFuncRElement, O>, componentRender?: ComponentRender<O, SVGFEFuncRElement>): Manifest<SVGFEFuncRElement, O> { return manifest(id, args, render, componentRender, SvgTags.feFuncR) }
export function RxFeGaussianBlur<O = void>(id: string, args: any, render: Render<SVGFEGaussianBlurElement, O>, componentRender?: ComponentRender<O, SVGFEGaussianBlurElement>): Manifest<SVGFEGaussianBlurElement, O> { return manifest(id, args, render, componentRender, SvgTags.feGaussianBlur) }
export function RxFeImage<O = void>(id: string, args: any, render: Render<SVGFEImageElement, O>, componentRender?: ComponentRender<O, SVGFEImageElement>): Manifest<SVGFEImageElement, O> { return manifest(id, args, render, componentRender, SvgTags.feImage) }
export function RxFeMerge<O = void>(id: string, args: any, render: Render<SVGFEMergeElement, O>, componentRender?: ComponentRender<O, SVGFEMergeElement>): Manifest<SVGFEMergeElement, O> { return manifest(id, args, render, componentRender, SvgTags.feMerge) }
export function RxFeMergeNode<O = void>(id: string, args: any, render: Render<SVGFEMergeNodeElement, O>, componentRender?: ComponentRender<O, SVGFEMergeNodeElement>): Manifest<SVGFEMergeNodeElement, O> { return manifest(id, args, render, componentRender, SvgTags.feMergeNode) }
export function RxFeMorphology<O = void>(id: string, args: any, render: Render<SVGFEMorphologyElement, O>, componentRender?: ComponentRender<O, SVGFEMorphologyElement>): Manifest<SVGFEMorphologyElement, O> { return manifest(id, args, render, componentRender, SvgTags.feMorphology) }
export function RxFeOffset<O = void>(id: string, args: any, render: Render<SVGFEOffsetElement, O>, componentRender?: ComponentRender<O, SVGFEOffsetElement>): Manifest<SVGFEOffsetElement, O> { return manifest(id, args, render, componentRender, SvgTags.feOffset) }
export function RxFePointLight<O = void>(id: string, args: any, render: Render<SVGFEPointLightElement, O>, componentRender?: ComponentRender<O, SVGFEPointLightElement>): Manifest<SVGFEPointLightElement, O> { return manifest(id, args, render, componentRender, SvgTags.fePointLight) }
export function RxFeSpecularLighting<O = void>(id: string, args: any, render: Render<SVGFESpecularLightingElement, O>, componentRender?: ComponentRender<O, SVGFESpecularLightingElement>): Manifest<SVGFESpecularLightingElement, O> { return manifest(id, args, render, componentRender, SvgTags.feSpecularLighting) }
export function RxFeSpotLight<O = void>(id: string, args: any, render: Render<SVGFESpotLightElement, O>, componentRender?: ComponentRender<O, SVGFESpotLightElement>): Manifest<SVGFESpotLightElement, O> { return manifest(id, args, render, componentRender, SvgTags.feSpotLight) }
export function RxFeTile<O = void>(id: string, args: any, render: Render<SVGFETileElement, O>, componentRender?: ComponentRender<O, SVGFETileElement>): Manifest<SVGFETileElement, O> { return manifest(id, args, render, componentRender, SvgTags.feTile) }
export function RxFeTurbulence<O = void>(id: string, args: any, render: Render<SVGFETurbulenceElement, O>, componentRender?: ComponentRender<O, SVGFETurbulenceElement>): Manifest<SVGFETurbulenceElement, O> { return manifest(id, args, render, componentRender, SvgTags.feTurbulence) }
export function RxFilter<O = void>(id: string, args: any, render: Render<SVGFilterElement, O>, componentRender?: ComponentRender<O, SVGFilterElement>): Manifest<SVGFilterElement, O> { return manifest(id, args, render, componentRender, SvgTags.filter) }
export function RxForeignObject<O = void>(id: string, args: any, render: Render<SVGForeignObjectElement, O>, componentRender?: ComponentRender<O, SVGForeignObjectElement>): Manifest<SVGForeignObjectElement, O> { return manifest(id, args, render, componentRender, SvgTags.foreignObject) }
export function RxG<O = void>(id: string, args: any, render: Render<SVGGElement, O>, componentRender?: ComponentRender<O, SVGGElement>): Manifest<SVGGElement, O> { return manifest(id, args, render, componentRender, SvgTags.g) }
export function RxSvgImage<O = void>(id: string, args: any, render: Render<SVGImageElement, O>, componentRender?: ComponentRender<O, SVGImageElement>): Manifest<SVGImageElement, O> { return manifest(id, args, render, componentRender, SvgTags.image) }
export function RxLine<O = void>(id: string, args: any, render: Render<SVGLineElement, O>, componentRender?: ComponentRender<O, SVGLineElement>): Manifest<SVGLineElement, O> { return manifest(id, args, render, componentRender, SvgTags.line) }
export function RxLinearGradient<O = void>(id: string, args: any, render: Render<SVGLinearGradientElement, O>, componentRender?: ComponentRender<O, SVGLinearGradientElement>): Manifest<SVGLinearGradientElement, O> { return manifest(id, args, render, componentRender, SvgTags.linearGradient) }
export function RxMarker<O = void>(id: string, args: any, render: Render<SVGMarkerElement, O>, componentRender?: ComponentRender<O, SVGMarkerElement>): Manifest<SVGMarkerElement, O> { return manifest(id, args, render, componentRender, SvgTags.marker) }
export function RxMask<O = void>(id: string, args: any, render: Render<SVGMaskElement, O>, componentRender?: ComponentRender<O, SVGMaskElement>): Manifest<SVGMaskElement, O> { return manifest(id, args, render, componentRender, SvgTags.mask) }
export function RxMetadata<O = void>(id: string, args: any, render: Render<SVGMetadataElement, O>, componentRender?: ComponentRender<O, SVGMetadataElement>): Manifest<SVGMetadataElement, O> { return manifest(id, args, render, componentRender, SvgTags.metadata) }
export function RxMPath<O = void>(id: string, args: any, render: Render<SVGElement, O>, componentRender?: ComponentRender<O, SVGElement>): Manifest<SVGElement, O> { return manifest(id, args, render, componentRender, SvgTags.mpath) }
export function RxPath<O = void>(id: string, args: any, render: Render<SVGPathElement, O>, componentRender?: ComponentRender<O, SVGPathElement>): Manifest<SVGPathElement, O> { return manifest(id, args, render, componentRender, SvgTags.path) }
export function RxPattern<O = void>(id: string, args: any, render: Render<SVGPatternElement, O>, componentRender?: ComponentRender<O, SVGPatternElement>): Manifest<SVGPatternElement, O> { return manifest(id, args, render, componentRender, SvgTags.pattern) }
export function RxPolygon<O = void>(id: string, args: any, render: Render<SVGPolygonElement, O>, componentRender?: ComponentRender<O, SVGPolygonElement>): Manifest<SVGPolygonElement, O> { return manifest(id, args, render, componentRender, SvgTags.polygon) }
export function RxPolyline<O = void>(id: string, args: any, render: Render<SVGPolylineElement, O>, componentRender?: ComponentRender<O, SVGPolylineElement>): Manifest<SVGPolylineElement, O> { return manifest(id, args, render, componentRender, SvgTags.polyline) }
export function RxRadialGradient<O = void>(id: string, args: any, render: Render<SVGRadialGradientElement, O>, componentRender?: ComponentRender<O, SVGRadialGradientElement>): Manifest<SVGRadialGradientElement, O> { return manifest(id, args, render, componentRender, SvgTags.radialGradient) }
export function RxRect<O = void>(id: string, args: any, render: Render<SVGRectElement, O>, componentRender?: ComponentRender<O, SVGRectElement>): Manifest<SVGRectElement, O> { return manifest(id, args, render, componentRender, SvgTags.rect) }
export function RxStop<O = void>(id: string, args: any, render: Render<SVGStopElement, O>, componentRender?: ComponentRender<O, SVGStopElement>): Manifest<SVGStopElement, O> { return manifest(id, args, render, componentRender, SvgTags.stop) }
export function RxSvgSwitch<O = void>(id: string, args: any, render: Render<SVGSwitchElement, O>, componentRender?: ComponentRender<O, SVGSwitchElement>): Manifest<SVGSwitchElement, O> { return manifest(id, args, render, componentRender, SvgTags.switch) }
export function RxSymbol<O = void>(id: string, args: any, render: Render<SVGSymbolElement, O>, componentRender?: ComponentRender<O, SVGSymbolElement>): Manifest<SVGSymbolElement, O> { return manifest(id, args, render, componentRender, SvgTags.symbol) }
export function RxText<O = void>(id: string, args: any, render: Render<SVGTextElement, O>, componentRender?: ComponentRender<O, SVGTextElement>): Manifest<SVGTextElement, O> { return manifest(id, args, render, componentRender, SvgTags.text) }
export function RxTextPath<O = void>(id: string, args: any, render: Render<SVGTextPathElement, O>, componentRender?: ComponentRender<O, SVGTextPathElement>): Manifest<SVGTextPathElement, O> { return manifest(id, args, render, componentRender, SvgTags.textPath) }
export function RxTSpan<O = void>(id: string, args: any, render: Render<SVGTSpanElement, O>, componentRender?: ComponentRender<O, SVGTSpanElement>): Manifest<SVGTSpanElement, O> { return manifest(id, args, render, componentRender, SvgTags.tspan) }
export function RxUse<O = void>(id: string, args: any, render: Render<SVGUseElement, O>, componentRender?: ComponentRender<O, SVGUseElement>): Manifest<SVGUseElement, O> { return manifest(id, args, render, componentRender, SvgTags.use) }
export function RxView<O = void>(id: string, args: any, render: Render<SVGViewElement, O>, componentRender?: ComponentRender<O, SVGViewElement>): Manifest<SVGViewElement, O> { return manifest(id, args, render, componentRender, SvgTags.view) }

export function Svg(id: string, render: Render<SVGSVGElement> = nullRender): Manifest<SVGSVGElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.svg) }
export function SvgA(id: string, render: Render<SVGAElement> = nullRender): Manifest<SVGAElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.a) }
export function Animate(id: string, render: Render<SVGAnimateElement> = nullRender): Manifest<SVGAnimateElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.animate) }
export function AnimateMotion(id: string, render: Render<SVGAnimateMotionElement> = nullRender): Manifest<SVGAnimateMotionElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.animateMotion) }
export function AnimateTransform(id: string, render: Render<SVGAnimateTransformElement> = nullRender): Manifest<SVGAnimateTransformElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.animateTransform) }
export function Circle(id: string, render: Render<SVGCircleElement> = nullRender): Manifest<SVGCircleElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.circle) }
export function ClipPath(id: string, render: Render<SVGClipPathElement> = nullRender): Manifest<SVGClipPathElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.clipPath) }
export function Defs(id: string, render: Render<SVGDefsElement> = nullRender): Manifest<SVGDefsElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.defs) }
export function Desc(id: string, render: Render<SVGDescElement> = nullRender): Manifest<SVGDescElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.desc) }
export function Ellipse(id: string, render: Render<SVGEllipseElement> = nullRender): Manifest<SVGEllipseElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.ellipse) }
export function FeBlend(id: string, render: Render<SVGFEBlendElement> = nullRender): Manifest<SVGFEBlendElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.feBlend) }
export function FeColorMatrix(id: string, render: Render<SVGFEColorMatrixElement> = nullRender): Manifest<SVGFEColorMatrixElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.feColorMatrix) }
export function FeComponentTransfer(id: string, render: Render<SVGFEComponentTransferElement> = nullRender): Manifest<SVGFEComponentTransferElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.feComponentTransfer) }
export function FeComposite(id: string, render: Render<SVGFECompositeElement> = nullRender): Manifest<SVGFECompositeElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.feComposite) }
export function FeConvolveMatrix(id: string, render: Render<SVGFEConvolveMatrixElement> = nullRender): Manifest<SVGFEConvolveMatrixElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.feConvolveMatrix) }
export function FeDiffuseLighting(id: string, render: Render<SVGFEDiffuseLightingElement> = nullRender): Manifest<SVGFEDiffuseLightingElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.feDiffuseLighting) }
export function FeDisplacementMap(id: string, render: Render<SVGFEDisplacementMapElement> = nullRender): Manifest<SVGFEDisplacementMapElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.feDisplacementMap) }
export function FeDistantLight(id: string, render: Render<SVGFEDistantLightElement> = nullRender): Manifest<SVGFEDistantLightElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.feDistantLight) }
export function FeDropShadow(id: string, render: Render<SVGFEDropShadowElement> = nullRender): Manifest<SVGFEDropShadowElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.feDropShadow) }
export function FeFlood(id: string, render: Render<SVGFEFloodElement> = nullRender): Manifest<SVGFEFloodElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.feFlood) }
export function FeFuncA(id: string, render: Render<SVGFEFuncAElement> = nullRender): Manifest<SVGFEFuncAElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.feFuncA) }
export function FeFuncB(id: string, render: Render<SVGFEFuncBElement> = nullRender): Manifest<SVGFEFuncBElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.feFuncB) }
export function FeFuncG(id: string, render: Render<SVGFEFuncGElement> = nullRender): Manifest<SVGFEFuncGElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.feFuncG) }
export function FeFuncR(id: string, render: Render<SVGFEFuncRElement> = nullRender): Manifest<SVGFEFuncRElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.feFuncR) }
export function FeGaussianBlur(id: string, render: Render<SVGFEGaussianBlurElement> = nullRender): Manifest<SVGFEGaussianBlurElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.feGaussianBlur) }
export function FeImage(id: string, render: Render<SVGFEImageElement> = nullRender): Manifest<SVGFEImageElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.feImage) }
export function FeMerge(id: string, render: Render<SVGFEMergeElement> = nullRender): Manifest<SVGFEMergeElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.feMerge) }
export function FeMergeNode(id: string, render: Render<SVGFEMergeNodeElement> = nullRender): Manifest<SVGFEMergeNodeElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.feMergeNode) }
export function FeMorphology(id: string, render: Render<SVGFEMorphologyElement> = nullRender): Manifest<SVGFEMorphologyElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.feMorphology) }
export function FeOffset(id: string, render: Render<SVGFEOffsetElement> = nullRender): Manifest<SVGFEOffsetElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.feOffset) }
export function FePointLight(id: string, render: Render<SVGFEPointLightElement> = nullRender): Manifest<SVGFEPointLightElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.fePointLight) }
export function FeSpecularLighting(id: string, render: Render<SVGFESpecularLightingElement> = nullRender): Manifest<SVGFESpecularLightingElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.feSpecularLighting) }
export function FeSpotLight(id: string, render: Render<SVGFESpotLightElement> = nullRender): Manifest<SVGFESpotLightElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.feSpotLight) }
export function FeTile(id: string, render: Render<SVGFETileElement> = nullRender): Manifest<SVGFETileElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.feTile) }
export function FeTurbulence(id: string, render: Render<SVGFETurbulenceElement> = nullRender): Manifest<SVGFETurbulenceElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.feTurbulence) }
export function Filter(id: string, render: Render<SVGFilterElement> = nullRender): Manifest<SVGFilterElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.filter) }
export function ForeignObject(id: string, render: Render<SVGForeignObjectElement> = nullRender): Manifest<SVGForeignObjectElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.foreignObject) }
export function G(id: string, render: Render<SVGGElement> = nullRender): Manifest<SVGGElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.g) }
export function SvgImage(id: string, render: Render<SVGImageElement> = nullRender): Manifest<SVGImageElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.image) }
export function Line(id: string, render: Render<SVGLineElement> = nullRender): Manifest<SVGLineElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.line) }
export function LinearGradient(id: string, render: Render<SVGLinearGradientElement> = nullRender): Manifest<SVGLinearGradientElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.linearGradient) }
export function Marker(id: string, render: Render<SVGMarkerElement> = nullRender): Manifest<SVGMarkerElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.marker) }
export function Mask(id: string, render: Render<SVGMaskElement> = nullRender): Manifest<SVGMaskElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.mask) }
export function MetaData(id: string, render: Render<SVGMetadataElement> = nullRender): Manifest<SVGMetadataElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.metadata) }
export function MPath(id: string, render: Render<SVGElement> = nullRender): Manifest<SVGElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.mpath) }
export function Path(id: string, render: Render<SVGPathElement> = nullRender): Manifest<SVGPathElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.path) }
export function Pattern(id: string, render: Render<SVGPatternElement> = nullRender): Manifest<SVGPatternElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.pattern) }
export function Polygon(id: string, render: Render<SVGPolygonElement> = nullRender): Manifest<SVGPolygonElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.polygon) }
export function PolyLine(id: string, render: Render<SVGPolylineElement> = nullRender): Manifest<SVGPolylineElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.polyline) }
export function RadialGradient(id: string, render: Render<SVGRadialGradientElement> = nullRender): Manifest<SVGRadialGradientElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.radialGradient) }
export function Rect(id: string, render: Render<SVGRectElement> = nullRender): Manifest<SVGRectElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.rect) }
export function Stop(id: string, render: Render<SVGStopElement> = nullRender): Manifest<SVGStopElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.stop) }
export function SvgSwitch(id: string, render: Render<SVGSwitchElement> = nullRender): Manifest<SVGSwitchElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.switch) }
export function Symbol(id: string, render: Render<SVGSymbolElement> = nullRender): Manifest<SVGSymbolElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.symbol) }
export function Text(id: string, render: Render<SVGTextElement> = nullRender): Manifest<SVGTextElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.text) }
export function TextPath(id: string, render: Render<SVGTextPathElement> = nullRender): Manifest<SVGTextPathElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.textPath) }
export function TSpan(id: string, render: Render<SVGTSpanElement> = nullRender): Manifest<SVGTSpanElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.tspan) }
export function Use(id: string, render: Render<SVGUseElement> = nullRender): Manifest<SVGUseElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.use) }
export function View(id: string, render: Render<SVGViewElement> = nullRender): Manifest<SVGViewElement> { return manifest(id, RefreshParent, render, undefined, SvgTags.view) }

const SvgTags = {
  svg: new SvgRtti<SVGSVGElement>('svg'),
  a: new SvgRtti<SVGAElement>('a'),
  animate: new SvgRtti<SVGAnimateElement>('animate'),
  animateMotion: new SvgRtti<SVGAnimateMotionElement>('animateMotion'),
  animateTransform: new SvgRtti<SVGAnimateTransformElement>('animateTransform'),
  circle: new SvgRtti<SVGCircleElement>('circle'),
  clipPath: new SvgRtti<SVGClipPathElement>('clipPath'),
  defs: new SvgRtti<SVGDefsElement>('defs'),
  desc: new SvgRtti<SVGDescElement>('desc'),
  ellipse: new SvgRtti<SVGEllipseElement>('ellipse'),
  feBlend: new SvgRtti<SVGFEBlendElement>('feBlend'),
  feColorMatrix: new SvgRtti<SVGFEColorMatrixElement>('feColorMatrix'),
  feComponentTransfer: new SvgRtti<SVGFEComponentTransferElement>('feComponentTransfer'),
  feComposite: new SvgRtti<SVGFECompositeElement>('feComposite'),
  feConvolveMatrix: new SvgRtti<SVGFEConvolveMatrixElement>('feConvolveMatrix'),
  feDiffuseLighting: new SvgRtti<SVGFEDiffuseLightingElement>('feDiffuseLighting'),
  feDisplacementMap: new SvgRtti<SVGFEDisplacementMapElement>('feDisplacementMap'),
  feDistantLight: new SvgRtti<SVGFEDistantLightElement>('feDistantLight'),
  feDropShadow: new SvgRtti<SVGFEDropShadowElement>('feDropShadow'),
  feFlood: new SvgRtti<SVGFEFloodElement>('feFlood'),
  feFuncA: new SvgRtti<SVGFEFuncAElement>('feFuncA'),
  feFuncB: new SvgRtti<SVGFEFuncBElement>('feFuncB'),
  feFuncG: new SvgRtti<SVGFEFuncGElement>('feFuncG'),
  feFuncR: new SvgRtti<SVGFEFuncRElement>('feFuncR'),
  feGaussianBlur: new SvgRtti<SVGFEGaussianBlurElement>('feGaussianBlur'),
  feImage: new SvgRtti<SVGFEImageElement>('feImage'),
  feMerge: new SvgRtti<SVGFEMergeElement>('feMerge'),
  feMergeNode: new SvgRtti<SVGFEMergeNodeElement>('feMergeNode'),
  feMorphology: new SvgRtti<SVGFEMorphologyElement>('feMorphology'),
  feOffset: new SvgRtti<SVGFEOffsetElement>('feOffset'),
  fePointLight: new SvgRtti<SVGFEPointLightElement>('fePointLight'),
  feSpecularLighting: new SvgRtti<SVGFESpecularLightingElement>('feSpecularLighting'),
  feSpotLight: new SvgRtti<SVGFESpotLightElement>('feSpotLight'),
  feTile: new SvgRtti<SVGFETileElement>('feTile'),
  feTurbulence: new SvgRtti<SVGFETurbulenceElement>('feTurbulence'),
  filter: new SvgRtti<SVGFilterElement>('filter'),
  foreignObject: new SvgRtti<SVGForeignObjectElement>('foreignObject'),
  g: new SvgRtti<SVGGElement>('g'),
  image: new SvgRtti<SVGImageElement>('image'),
  line: new SvgRtti<SVGLineElement>('line'),
  linearGradient: new SvgRtti<SVGLinearGradientElement>('linearGradient'),
  marker: new SvgRtti<SVGMarkerElement>('marker'),
  mask: new SvgRtti<SVGMaskElement>('mask'),
  metadata: new SvgRtti<SVGMetadataElement>('metadata'),
  mpath: new SvgRtti<SVGElement>('mpath'),
  path: new SvgRtti<SVGPathElement>('path'),
  pattern: new SvgRtti<SVGPatternElement>('pattern'),
  polygon: new SvgRtti<SVGPolygonElement>('polygon'),
  polyline: new SvgRtti<SVGPolylineElement>('polyline'),
  radialGradient: new SvgRtti<SVGRadialGradientElement>('radialGradient'),
  rect: new SvgRtti<SVGRectElement>('rect'),
  stop: new SvgRtti<SVGStopElement>('stop'),
  switch: new SvgRtti<SVGSwitchElement>('switch'),
  symbol: new SvgRtti<SVGSymbolElement>('symbol'),
  text: new SvgRtti<SVGTextElement>('text'),
  textPath: new SvgRtti<SVGTextPathElement>('textPath'),
  tspan: new SvgRtti<SVGTSpanElement>('tspan'),
  use: new SvgRtti<SVGUseElement>('use'),
  view: new SvgRtti<SVGViewElement>('view'),
}
