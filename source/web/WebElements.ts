// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Render, Manifest, manifest, RefreshWithParent, ComponentRender } from '../core'
import { HtmlRtti, SvgRtti } from './WebRtti'

function nullRender(e: Element): void { /* nop */ }

export function RxA<O = void>(id: string, args: any, render: Render<HTMLAnchorElement, O>, componentRender?: ComponentRender<O, HTMLAnchorElement>): Manifest<HTMLAnchorElement, O> { return manifest(id, args, render, componentRender, Html.a) }
export function RxAbbr<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.abbr) }
export function RxAddress<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.address) }
export function RxArea<O = void>(id: string, args: any, render: Render<HTMLAreaElement, O>, componentRender?: ComponentRender<O, HTMLAreaElement>): Manifest<HTMLAreaElement, O> { return manifest(id, args, render, componentRender, Html.area) }
export function RxArticle<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.article) }
export function RxAside<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.aside) }
export function RxAudio<O = void>(id: string, args: any, render: Render<HTMLAudioElement, O>, componentRender?: ComponentRender<O, HTMLAudioElement>): Manifest<HTMLAudioElement, O> { return manifest(id, args, render, componentRender, Html.audio) }
export function RxB<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.b) }
export function RxBase<O = void>(id: string, args: any, render: Render<HTMLBaseElement, O>, componentRender?: ComponentRender<O, HTMLBaseElement>): Manifest<HTMLBaseElement, O> { return manifest(id, args, render, componentRender, Html.base) }
export function RxBdi<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.bdi) }
export function RxBdo<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.bdo) }
export function RxBig<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.big) }
export function RxBlockQuote<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.blockquote) }
export function RxBody<O = void>(id: string, args: any, render: Render<HTMLBodyElement, O>, componentRender?: ComponentRender<O, HTMLBodyElement>): Manifest<HTMLBodyElement, O> { return manifest(id, args, render, componentRender, Html.body) }
export function RxBR<O = void>(id: string, args: any, render: Render<HTMLBRElement, O>, componentRender?: ComponentRender<O, HTMLBRElement>): Manifest<HTMLBRElement, O> { return manifest(id, args, render, componentRender, Html.br) }
export function RxButton<O = void>(id: string, args: any, render: Render<HTMLButtonElement, O>, componentRender?: ComponentRender<O, HTMLButtonElement>): Manifest<HTMLButtonElement, O> { return manifest(id, args, render, componentRender, Html.button) }
export function RxCanvas<O = void>(id: string, args: any, render: Render<HTMLCanvasElement, O>, componentRender?: ComponentRender<O, HTMLCanvasElement>): Manifest<HTMLCanvasElement, O> { return manifest(id, args, render, componentRender, Html.canvas) }
export function RxCaption<O = void>(id: string, args: any, render: Render<HTMLTableCaptionElement, O>, componentRender?: ComponentRender<O, HTMLTableCaptionElement>): Manifest<HTMLTableCaptionElement, O> { return manifest(id, args, render, componentRender, Html.caption) }
export function RxCite<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.cite) }
export function RxCode<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.code) }
export function RxCol<O = void>(id: string, args: any, render: Render<HTMLTableColElement, O>, componentRender?: ComponentRender<O, HTMLTableColElement>): Manifest<HTMLTableColElement, O> { return manifest(id, args, render, componentRender, Html.col) }
export function RxColGroup<O = void>(id: string, args: any, render: Render<HTMLTableColElement, O>, componentRender?: ComponentRender<O, HTMLTableColElement>): Manifest<HTMLTableColElement, O> { return manifest(id, args, render, componentRender, Html.colgroup) }
export function RxData<O = void>(id: string, args: any, render: Render<HTMLDataElement, O>, componentRender?: ComponentRender<O, HTMLDataElement>): Manifest<HTMLDataElement, O> { return manifest(id, args, render, componentRender, Html.data) }
export function RxDataList<O = void>(id: string, args: any, render: Render<HTMLDataListElement, O>, componentRender?: ComponentRender<O, HTMLDataListElement>): Manifest<HTMLDataListElement, O> { return manifest(id, args, render, componentRender, Html.datalist) }
export function RxDD<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.dd) }
export function RxDel<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.del) }
export function RxDetails<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.details) }
export function RxDfn<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.dfn) }
export function RxDialog<O = void>(id: string, args: any, render: Render<HTMLDialogElement, O>, componentRender?: ComponentRender<O, HTMLDialogElement>): Manifest<HTMLDialogElement, O> { return manifest(id, args, render, componentRender, Html.dialog) }
export function RxDiv<O = void>(id: string, args: any, render: Render<HTMLDivElement, O>, componentRender?: ComponentRender<O, HTMLDivElement>): Manifest<HTMLDivElement, O> { return manifest(id, args, render, componentRender, Html.div) }
export function RxDL<O = void>(id: string, args: any, render: Render<HTMLDListElement, O>, componentRender?: ComponentRender<O, HTMLDListElement>): Manifest<HTMLDListElement, O> { return manifest(id, args, render, componentRender, Html.dl) }
export function RxDT<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.dt) }
export function RxEM<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.em) }
export function RxEmbed<O = void>(id: string, args: any, render: Render<HTMLEmbedElement, O>, componentRender?: ComponentRender<O, HTMLEmbedElement>): Manifest<HTMLEmbedElement, O> { return manifest(id, args, render, componentRender, Html.embed) }
export function RxFieldSet<O = void>(id: string, args: any, render: Render<HTMLFieldSetElement, O>, componentRender?: ComponentRender<O, HTMLFieldSetElement>): Manifest<HTMLFieldSetElement, O> { return manifest(id, args, render, componentRender, Html.fieldset) }
export function RxFigCaption<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.figcaption) }
export function RxFigure<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.figure) }
export function RxFooter<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.footer) }
export function RxForm<O = void>(id: string, args: any, render: Render<HTMLFormElement, O>, componentRender?: ComponentRender<O, HTMLFormElement>): Manifest<HTMLFormElement, O> { return manifest(id, args, render, componentRender, Html.form) }
export function RxH1<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, componentRender?: ComponentRender<O, HTMLHeadingElement>): Manifest<HTMLHeadingElement, O> { return manifest(id, args, render, componentRender, Html.h1) }
export function RxH2<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, componentRender?: ComponentRender<O, HTMLHeadingElement>): Manifest<HTMLHeadingElement, O> { return manifest(id, args, render, componentRender, Html.h2) }
export function RxH3<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, componentRender?: ComponentRender<O, HTMLHeadingElement>): Manifest<HTMLHeadingElement, O> { return manifest(id, args, render, componentRender, Html.h3) }
export function RxH4<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, componentRender?: ComponentRender<O, HTMLHeadingElement>): Manifest<HTMLHeadingElement, O> { return manifest(id, args, render, componentRender, Html.h4) }
export function RxH5<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, componentRender?: ComponentRender<O, HTMLHeadingElement>): Manifest<HTMLHeadingElement, O> { return manifest(id, args, render, componentRender, Html.h5) }
export function RxH6<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, componentRender?: ComponentRender<O, HTMLHeadingElement>): Manifest<HTMLHeadingElement, O> { return manifest(id, args, render, componentRender, Html.h6) }
export function RxHead<O = void>(id: string, args: any, render: Render<HTMLHeadElement, O>, componentRender?: ComponentRender<O, HTMLHeadElement>): Manifest<HTMLHeadElement, O> { return manifest(id, args, render, componentRender, Html.head) }
export function RxHeader<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.header) }
export function RxHGroup<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.hgroup) }
export function RxHR<O = void>(id: string, args: any, render: Render<HTMLHRElement, O>, componentRender?: ComponentRender<O, HTMLHRElement>): Manifest<HTMLHRElement, O> { return manifest(id, args, render, componentRender, Html.hr) }
export function RxHtml<O = void>(id: string, args: any, render: Render<HTMLHtmlElement, O>, componentRender?: ComponentRender<O, HTMLHtmlElement>): Manifest<HTMLHtmlElement, O> { return manifest(id, args, render, componentRender, Html.html) }
export function RxI<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.i) }
export function RxIframe<O = void>(id: string, args: any, render: Render<HTMLIFrameElement, O>, componentRender?: ComponentRender<O, HTMLIFrameElement>): Manifest<HTMLIFrameElement, O> { return manifest(id, args, render, componentRender, Html.iframe) }
export function RxImg<O = void>(id: string, args: any, render: Render<HTMLImageElement, O>, componentRender?: ComponentRender<O, HTMLImageElement>): Manifest<HTMLImageElement, O> { return manifest(id, args, render, componentRender, Html.img) }
export function RxInput<O = void>(id: string, args: any, render: Render<HTMLInputElement, O>, componentRender?: ComponentRender<O, HTMLInputElement>): Manifest<HTMLInputElement, O> { return manifest(id, args, render, componentRender, Html.input) }
export function RxIns<O = void>(id: string, args: any, render: Render<HTMLModElement, O>, componentRender?: ComponentRender<O, HTMLModElement>): Manifest<HTMLModElement, O> { return manifest(id, args, render, componentRender, Html.ins) }
export function RxKbd<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.kbd) }
export function RxKeygen<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.keygen) }
export function RxLabel<O = void>(id: string, args: any, render: Render<HTMLLabelElement, O>, componentRender?: ComponentRender<O, HTMLLabelElement>): Manifest<HTMLLabelElement, O> { return manifest(id, args, render, componentRender, Html.label) }
export function RxLegend<O = void>(id: string, args: any, render: Render<HTMLLegendElement, O>, componentRender?: ComponentRender<O, HTMLLegendElement>): Manifest<HTMLLegendElement, O> { return manifest(id, args, render, componentRender, Html.legend) }
export function RxLI<O = void>(id: string, args: any, render: Render<HTMLLIElement, O>, componentRender?: ComponentRender<O, HTMLLIElement>): Manifest<HTMLLIElement, O> { return manifest(id, args, render, componentRender, Html.li) }
export function RxLink<O = void>(id: string, args: any, render: Render<HTMLLinkElement, O>, componentRender?: ComponentRender<O, HTMLLinkElement>): Manifest<HTMLLinkElement, O> { return manifest(id, args, render, componentRender, Html.link) }
export function RxMain<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.main) }
export function RxMap<O = void>(id: string, args: any, render: Render<HTMLMapElement, O>, componentRender?: ComponentRender<O, HTMLMapElement>): Manifest<HTMLMapElement, O> { return manifest(id, args, render, componentRender, Html.map) }
export function RxMark<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.mark) }
export function RxMenu<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.menu) }
export function RxMenuItem<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.menuitem) }
export function RxMeta<O = void>(id: string, args: any, render: Render<HTMLMetaElement, O>, componentRender?: ComponentRender<O, HTMLMetaElement>): Manifest<HTMLMetaElement, O> { return manifest(id, args, render, componentRender, Html.meta) }
export function RxMeter<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.meter) }
export function RxNav<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.nav) }
export function RxNoIndex<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.noindex) }
export function RxNoScript<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.noscript) }
export function RxObject<O = void>(id: string, args: any, render: Render<HTMLObjectElement, O>, componentRender?: ComponentRender<O, HTMLObjectElement>): Manifest<HTMLObjectElement, O> { return manifest(id, args, render, componentRender, Html.object) }
export function RxOL<O = void>(id: string, args: any, render: Render<HTMLOListElement, O>, componentRender?: ComponentRender<O, HTMLOListElement>): Manifest<HTMLOListElement, O> { return manifest(id, args, render, componentRender, Html.ol) }
export function RxOptGroup<O = void>(id: string, args: any, render: Render<HTMLOptGroupElement, O>, componentRender?: ComponentRender<O, HTMLOptGroupElement>): Manifest<HTMLOptGroupElement, O> { return manifest(id, args, render, componentRender, Html.optgroup) }
export function RxOption<O = void>(id: string, args: any, render: Render<HTMLOptionElement, O>, componentRender?: ComponentRender<O, HTMLOptionElement>): Manifest<HTMLOptionElement, O> { return manifest(id, args, render, componentRender, Html.option) }
export function RxOutput<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.output) }
export function RxP<O = void>(id: string, args: any, render: Render<HTMLParagraphElement, O>, componentRender?: ComponentRender<O, HTMLParagraphElement>): Manifest<HTMLParagraphElement, O> { return manifest(id, args, render, componentRender, Html.p) }
export function RxParam<O = void>(id: string, args: any, render: Render<HTMLParamElement, O>, componentRender?: ComponentRender<O, HTMLParamElement>): Manifest<HTMLParamElement, O> { return manifest(id, args, render, componentRender, Html.param) }
export function RxPicture<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.picture) }
export function RxPre<O = void>(id: string, args: any, render: Render<HTMLPreElement, O>, componentRender?: ComponentRender<O, HTMLPreElement>): Manifest<HTMLPreElement, O> { return manifest(id, args, render, componentRender, Html.pre) }
export function RxProgress<O = void>(id: string, args: any, render: Render<HTMLProgressElement, O>, componentRender?: ComponentRender<O, HTMLProgressElement>): Manifest<HTMLProgressElement, O> { return manifest(id, args, render, componentRender, Html.progress) }
export function RxQ<O = void>(id: string, args: any, render: Render<HTMLQuoteElement, O>, componentRender?: ComponentRender<O, HTMLQuoteElement>): Manifest<HTMLQuoteElement, O> { return manifest(id, args, render, componentRender, Html.q) }
export function RxRP<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.rp) }
export function RxRT<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.rt) }
export function RxRuby<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.ruby) }
export function RxS<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.s) }
export function RxSamp<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.samp) }
export function RxScript<O = void>(id: string, args: any, render: Render<HTMLScriptElement, O>, componentRender?: ComponentRender<O, HTMLScriptElement>): Manifest<HTMLScriptElement, O> { return manifest(id, args, render, componentRender, Html.script) }
export function RxSection<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.section) }
export function RxSelect<O = void>(id: string, args: any, render: Render<HTMLSelectElement, O>, componentRender?: ComponentRender<O, HTMLSelectElement>): Manifest<HTMLSelectElement, O> { return manifest(id, args, render, componentRender, Html.select) }
export function RxSmall<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.small) }
export function RxSource<O = void>(id: string, args: any, render: Render<HTMLSourceElement, O>, componentRender?: ComponentRender<O, HTMLSourceElement>): Manifest<HTMLSourceElement, O> { return manifest(id, args, render, componentRender, Html.source) }
export function RxSpan<O = void>(id: string, args: any, render: Render<HTMLSpanElement, O>, componentRender?: ComponentRender<O, HTMLSpanElement>): Manifest<HTMLSpanElement, O> { return manifest(id, args, render, componentRender, Html.span) }
export function RxStrong<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.strong) }
export function RxStyle<O = void>(id: string, args: any, render: Render<HTMLStyleElement, O>, componentRender?: ComponentRender<O, HTMLStyleElement>): Manifest<HTMLStyleElement, O> { return manifest(id, args, render, componentRender, Html.style) }
export function RxSub<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.sub) }
export function RxSummary<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.summary) }
export function RxSup<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.sup) }
export function RxTable<O = void>(id: string, args: any, render: Render<HTMLTableElement, O>, componentRender?: ComponentRender<O, HTMLTableElement>): Manifest<HTMLTableElement, O> { return manifest(id, args, render, componentRender, Html.table) }
export function RxTemplate<O = void>(id: string, args: any, render: Render<HTMLTemplateElement, O>, componentRender?: ComponentRender<O, HTMLTemplateElement>): Manifest<HTMLTemplateElement, O> { return manifest(id, args, render, componentRender, Html.template) }
export function RxTBody<O = void>(id: string, args: any, render: Render<HTMLTableSectionElement, O>, componentRender?: ComponentRender<O, HTMLTableSectionElement>): Manifest<HTMLTableSectionElement, O> { return manifest(id, args, render, componentRender, Html.tbody) }
export function RxTD<O = void>(id: string, args: any, render: Render<HTMLTableDataCellElement, O>, componentRender?: ComponentRender<O, HTMLTableDataCellElement>): Manifest<HTMLTableDataCellElement, O> { return manifest(id, args, render, componentRender, Html.td) }
export function RxTextArea<O = void>(id: string, args: any, render: Render<HTMLTextAreaElement, O>, componentRender?: ComponentRender<O, HTMLTextAreaElement>): Manifest<HTMLTextAreaElement, O> { return manifest(id, args, render, componentRender, Html.textarea) }
export function RxTFoot<O = void>(id: string, args: any, render: Render<HTMLTableSectionElement, O>, componentRender?: ComponentRender<O, HTMLTableSectionElement>): Manifest<HTMLTableSectionElement, O> { return manifest(id, args, render, componentRender, Html.tfoot) }
export function RxTH<O = void>(id: string, args: any, render: Render<HTMLTableHeaderCellElement, O>, componentRender?: ComponentRender<O, HTMLTableHeaderCellElement>): Manifest<HTMLTableHeaderCellElement, O> { return manifest(id, args, render, componentRender, Html.th) }
export function RxTHead<O = void>(id: string, args: any, render: Render<HTMLTableSectionElement, O>, componentRender?: ComponentRender<O, HTMLTableSectionElement>): Manifest<HTMLTableSectionElement, O> { return manifest(id, args, render, componentRender, Html.thead) }
export function RxTime<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.time) }
export function RxTitle<O = void>(id: string, args: any, render: Render<HTMLTitleElement, O>, componentRender?: ComponentRender<O, HTMLTitleElement>): Manifest<HTMLTitleElement, O> { return manifest(id, args, render, componentRender, Html.title) }
export function RxTR<O = void>(id: string, args: any, render: Render<HTMLTableRowElement, O>, componentRender?: ComponentRender<O, HTMLTableRowElement>): Manifest<HTMLTableRowElement, O> { return manifest(id, args, render, componentRender, Html.tr) }
export function RxTrack<O = void>(id: string, args: any, render: Render<HTMLTrackElement, O>, componentRender?: ComponentRender<O, HTMLTrackElement>): Manifest<HTMLTrackElement, O> { return manifest(id, args, render, componentRender, Html.track) }
export function RxU<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.u) }
export function RxUL<O = void>(id: string, args: any, render: Render<HTMLUListElement, O>, componentRender?: ComponentRender<O, HTMLUListElement>): Manifest<HTMLUListElement, O> { return manifest(id, args, render, componentRender, Html.ul) }
export function RxVariable<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.var) }
export function RxVideo<O = void>(id: string, args: any, render: Render<HTMLVideoElement, O>, componentRender?: ComponentRender<O, HTMLVideoElement>): Manifest<HTMLVideoElement, O> { return manifest(id, args, render, componentRender, Html.video) }
export function RxWbr<O = void>(id: string, args: any, render: Render<HTMLElement, O>, componentRender?: ComponentRender<O, HTMLElement>): Manifest<HTMLElement, O> { return manifest(id, args, render, componentRender, Html.wbr) }

export function a(id: string, render: Render<HTMLAnchorElement> = nullRender): Manifest<HTMLAnchorElement> { return manifest(id, RefreshWithParent, render, undefined, Html.a) }
export function abbr(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.abbr) }
export function address(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.address) }
export function area(id: string, render: Render<HTMLAreaElement> = nullRender): Manifest<HTMLAreaElement> { return manifest(id, RefreshWithParent, render, undefined, Html.area) }
export function article(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.article) }
export function aside(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.aside) }
export function audio(id: string, render: Render<HTMLAudioElement> = nullRender): Manifest<HTMLAudioElement> { return manifest(id, RefreshWithParent, render, undefined, Html.audio) }
export function b(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.b) }
export function base(id: string, render: Render<HTMLBaseElement> = nullRender): Manifest<HTMLBaseElement> { return manifest(id, RefreshWithParent, render, undefined, Html.base) }
export function bdi(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.bdi) }
export function bdo(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.bdo) }
export function big(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.big) }
export function blockquote(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.blockquote) }
export function body(id: string, render: Render<HTMLBodyElement> = nullRender): Manifest<HTMLBodyElement> { return manifest(id, RefreshWithParent, render, undefined, Html.body) }
export function br(id: string, render: Render<HTMLBRElement> = nullRender): Manifest<HTMLBRElement> { return manifest(id, RefreshWithParent, render, undefined, Html.br) }
export function button(id: string, render: Render<HTMLButtonElement> = nullRender): Manifest<HTMLButtonElement> { return manifest(id, RefreshWithParent, render, undefined, Html.button) }
export function canvas(id: string, render: Render<HTMLCanvasElement> = nullRender): Manifest<HTMLCanvasElement> { return manifest(id, RefreshWithParent, render, undefined, Html.canvas) }
export function caption(id: string, render: Render<HTMLTableCaptionElement> = nullRender): Manifest<HTMLTableCaptionElement> { return manifest(id, RefreshWithParent, render, undefined, Html.caption) }
export function cite(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.cite) }
export function code(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.code) }
export function col(id: string, render: Render<HTMLTableColElement> = nullRender): Manifest<HTMLTableColElement> { return manifest(id, RefreshWithParent, render, undefined, Html.col) }
export function colgroup(id: string, render: Render<HTMLTableColElement> = nullRender): Manifest<HTMLTableColElement> { return manifest(id, RefreshWithParent, render, undefined, Html.colgroup) }
export function data(id: string, render: Render<HTMLDataElement> = nullRender): Manifest<HTMLDataElement> { return manifest(id, RefreshWithParent, render, undefined, Html.data) }
export function datalist(id: string, render: Render<HTMLDataListElement> = nullRender): Manifest<HTMLDataListElement> { return manifest(id, RefreshWithParent, render, undefined, Html.datalist) }
export function dd(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.dd) }
export function del(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.del) }
export function details(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.details) }
export function dfn(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.dfn) }
export function dialog(id: string, render: Render<HTMLDialogElement> = nullRender): Manifest<HTMLDialogElement> { return manifest(id, RefreshWithParent, render, undefined, Html.dialog) }
export function div(id: string, render: Render<HTMLDivElement> = nullRender): Manifest<HTMLDivElement> { return manifest(id, RefreshWithParent, render, undefined, Html.div) }
export function dl(id: string, render: Render<HTMLDListElement> = nullRender): Manifest<HTMLDListElement> { return manifest(id, RefreshWithParent, render, undefined, Html.dl) }
export function dt(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.dt) }
export function em(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.em) }
export function embed(id: string, render: Render<HTMLEmbedElement> = nullRender): Manifest<HTMLEmbedElement> { return manifest(id, RefreshWithParent, render, undefined, Html.embed) }
export function fieldset(id: string, render: Render<HTMLFieldSetElement> = nullRender): Manifest<HTMLFieldSetElement> { return manifest(id, RefreshWithParent, render, undefined, Html.fieldset) }
export function figcaption(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.figcaption) }
export function figure(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.figure) }
export function footer(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.footer) }
export function form(id: string, render: Render<HTMLFormElement> = nullRender): Manifest<HTMLFormElement> { return manifest(id, RefreshWithParent, render, undefined, Html.form) }
export function h1(id: string, render: Render<HTMLHeadingElement> = nullRender): Manifest<HTMLHeadingElement> { return manifest(id, RefreshWithParent, render, undefined, Html.h1) }
export function h2(id: string, render: Render<HTMLHeadingElement> = nullRender): Manifest<HTMLHeadingElement> { return manifest(id, RefreshWithParent, render, undefined, Html.h2) }
export function h3(id: string, render: Render<HTMLHeadingElement> = nullRender): Manifest<HTMLHeadingElement> { return manifest(id, RefreshWithParent, render, undefined, Html.h3) }
export function h4(id: string, render: Render<HTMLHeadingElement> = nullRender): Manifest<HTMLHeadingElement> { return manifest(id, RefreshWithParent, render, undefined, Html.h4) }
export function h5(id: string, render: Render<HTMLHeadingElement> = nullRender): Manifest<HTMLHeadingElement> { return manifest(id, RefreshWithParent, render, undefined, Html.h5) }
export function h6(id: string, render: Render<HTMLHeadingElement> = nullRender): Manifest<HTMLHeadingElement> { return manifest(id, RefreshWithParent, render, undefined, Html.h6) }
export function head(id: string, render: Render<HTMLHeadElement> = nullRender): Manifest<HTMLHeadElement> { return manifest(id, RefreshWithParent, render, undefined, Html.head) }
export function header(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.header) }
export function hgroup(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.hgroup) }
export function hr(id: string, render: Render<HTMLHRElement> = nullRender): Manifest<HTMLHRElement> { return manifest(id, RefreshWithParent, render, undefined, Html.hr) }
export function html(id: string, render: Render<HTMLHtmlElement> = nullRender): Manifest<HTMLHtmlElement> { return manifest(id, RefreshWithParent, render, undefined, Html.html) }
export function i(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.i) }
export function iframe(id: string, render: Render<HTMLIFrameElement> = nullRender): Manifest<HTMLIFrameElement> { return manifest(id, RefreshWithParent, render, undefined, Html.iframe) }
export function img(id: string, render: Render<HTMLImageElement> = nullRender): Manifest<HTMLImageElement> { return manifest(id, RefreshWithParent, render, undefined, Html.img) }
export function input(id: string, render: Render<HTMLInputElement> = nullRender): Manifest<HTMLInputElement> { return manifest(id, RefreshWithParent, render, undefined, Html.input) }
export function ins(id: string, render: Render<HTMLModElement> = nullRender): Manifest<HTMLModElement> { return manifest(id, RefreshWithParent, render, undefined, Html.ins) }
export function kbd(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.kbd) }
export function keygen(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.keygen) }
export function label(id: string, render: Render<HTMLLabelElement> = nullRender): Manifest<HTMLLabelElement> { return manifest(id, RefreshWithParent, render, undefined, Html.label) }
export function legend(id: string, render: Render<HTMLLegendElement> = nullRender): Manifest<HTMLLegendElement> { return manifest(id, RefreshWithParent, render, undefined, Html.legend) }
export function li(id: string, render: Render<HTMLLIElement> = nullRender): Manifest<HTMLLIElement> { return manifest(id, RefreshWithParent, render, undefined, Html.li) }
export function link(id: string, render: Render<HTMLLinkElement> = nullRender): Manifest<HTMLLinkElement> { return manifest(id, RefreshWithParent, render, undefined, Html.link) }
export function main(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.main) }
export function map(id: string, render: Render<HTMLMapElement> = nullRender): Manifest<HTMLMapElement> { return manifest(id, RefreshWithParent, render, undefined, Html.map) }
export function mark(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.mark) }
export function menu(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.menu) }
export function menuitem(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.menuitem) }
export function meta(id: string, render: Render<HTMLMetaElement> = nullRender): Manifest<HTMLMetaElement> { return manifest(id, RefreshWithParent, render, undefined, Html.meta) }
export function meter(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.meter) }
export function nav(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.nav) }
export function noindex(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.noindex) }
export function noscript(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.noscript) }
export function object(id: string, render: Render<HTMLObjectElement> = nullRender): Manifest<HTMLObjectElement> { return manifest(id, RefreshWithParent, render, undefined, Html.object) }
export function ol(id: string, render: Render<HTMLOListElement> = nullRender): Manifest<HTMLOListElement> { return manifest(id, RefreshWithParent, render, undefined, Html.ol) }
export function optgroup(id: string, render: Render<HTMLOptGroupElement> = nullRender): Manifest<HTMLOptGroupElement> { return manifest(id, RefreshWithParent, render, undefined, Html.optgroup) }
export function option(id: string, render: Render<HTMLOptionElement> = nullRender): Manifest<HTMLOptionElement> { return manifest(id, RefreshWithParent, render, undefined, Html.option) }
export function output(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.output) }
export function p(id: string, render: Render<HTMLParagraphElement> = nullRender): Manifest<HTMLParagraphElement> { return manifest(id, RefreshWithParent, render, undefined, Html.p) }
export function param(id: string, render: Render<HTMLParamElement> = nullRender): Manifest<HTMLParamElement> { return manifest(id, RefreshWithParent, render, undefined, Html.param) }
export function picture(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.picture) }
export function pre(id: string, render: Render<HTMLPreElement> = nullRender): Manifest<HTMLPreElement> { return manifest(id, RefreshWithParent, render, undefined, Html.pre) }
export function progress(id: string, render: Render<HTMLProgressElement> = nullRender): Manifest<HTMLProgressElement> { return manifest(id, RefreshWithParent, render, undefined, Html.progress) }
export function q(id: string, render: Render<HTMLQuoteElement> = nullRender): Manifest<HTMLQuoteElement> { return manifest(id, RefreshWithParent, render, undefined, Html.q) }
export function rp(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.rp) }
export function rt(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.rt) }
export function ruby(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.ruby) }
export function s(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.s) }
export function samp(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.samp) }
export function script(id: string, render: Render<HTMLScriptElement> = nullRender): Manifest<HTMLScriptElement> { return manifest(id, RefreshWithParent, render, undefined, Html.script) }
export function section(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.section) }
export function select(id: string, render: Render<HTMLSelectElement> = nullRender): Manifest<HTMLSelectElement> { return manifest(id, RefreshWithParent, render, undefined, Html.select) }
export function small(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.small) }
export function source(id: string, render: Render<HTMLSourceElement> = nullRender): Manifest<HTMLSourceElement> { return manifest(id, RefreshWithParent, render, undefined, Html.source) }
export function span(id: string, render: Render<HTMLSpanElement> = nullRender): Manifest<HTMLSpanElement> { return manifest(id, RefreshWithParent, render, undefined, Html.span) }
export function strong(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.strong) }
export function style(id: string, render: Render<HTMLStyleElement> = nullRender): Manifest<HTMLStyleElement> { return manifest(id, RefreshWithParent, render, undefined, Html.style) }
export function sub(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.sub) }
export function summary(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.summary) }
export function sup(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.sup) }
export function table(id: string, render: Render<HTMLTableElement> = nullRender): Manifest<HTMLTableElement> { return manifest(id, RefreshWithParent, render, undefined, Html.table) }
export function template(id: string, render: Render<HTMLTemplateElement> = nullRender): Manifest<HTMLTemplateElement> { return manifest(id, RefreshWithParent, render, undefined, Html.template) }
export function tbody(id: string, render: Render<HTMLTableSectionElement> = nullRender): Manifest<HTMLTableSectionElement> { return manifest(id, RefreshWithParent, render, undefined, Html.tbody) }
export function td(id: string, render: Render<HTMLTableDataCellElement> = nullRender): Manifest<HTMLTableDataCellElement> { return manifest(id, RefreshWithParent, render, undefined, Html.td) }
export function textarea(id: string, render: Render<HTMLTextAreaElement> = nullRender): Manifest<HTMLTextAreaElement> { return manifest(id, RefreshWithParent, render, undefined, Html.textarea) }
export function tfoot(id: string, render: Render<HTMLTableSectionElement> = nullRender): Manifest<HTMLTableSectionElement> { return manifest(id, RefreshWithParent, render, undefined, Html.tfoot) }
export function th(id: string, render: Render<HTMLTableHeaderCellElement> = nullRender): Manifest<HTMLTableHeaderCellElement> { return manifest(id, RefreshWithParent, render, undefined, Html.th) }
export function thead(id: string, render: Render<HTMLTableSectionElement> = nullRender): Manifest<HTMLTableSectionElement> { return manifest(id, RefreshWithParent, render, undefined, Html.thead) }
export function time(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.time) }
export function title(id: string, render: Render<HTMLTitleElement> = nullRender): Manifest<HTMLTitleElement> { return manifest(id, RefreshWithParent, render, undefined, Html.title) }
export function tr(id: string, render: Render<HTMLTableRowElement> = nullRender): Manifest<HTMLTableRowElement> { return manifest(id, RefreshWithParent, render, undefined, Html.tr) }
export function track(id: string, render: Render<HTMLTrackElement> = nullRender): Manifest<HTMLTrackElement> { return manifest(id, RefreshWithParent, render, undefined, Html.track) }
export function u(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.u) }
export function ul(id: string, render: Render<HTMLUListElement> = nullRender): Manifest<HTMLUListElement> { return manifest(id, RefreshWithParent, render, undefined, Html.ul) }
export function variable(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.var) }
export function video(id: string, render: Render<HTMLVideoElement> = nullRender): Manifest<HTMLVideoElement> { return manifest(id, RefreshWithParent, render, undefined, Html.video) }
export function wbr(id: string, render: Render<HTMLElement> = nullRender): Manifest<HTMLElement> { return manifest(id, RefreshWithParent, render, undefined, Html.wbr) }

const Html = {
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

export function RxSvg<O = void>(id: string, args: any, render: Render<SVGSVGElement, O>, componentRender?: ComponentRender<O, SVGSVGElement>): Manifest<SVGSVGElement, O> { return manifest(id, args, render, componentRender, Svg.svg) }
export function RxSvgA<O = void>(id: string, args: any, render: Render<SVGAElement, O>, componentRender?: ComponentRender<O, SVGAElement>): Manifest<SVGAElement, O> { return manifest(id, args, render, componentRender, Svg.a) }
export function RxAnimate<O = void>(id: string, args: any, render: Render<SVGAnimateElement, O>, componentRender?: ComponentRender<O, SVGAnimateElement>): Manifest<SVGAnimateElement, O> { return manifest(id, args, render, componentRender, Svg.animate) }
export function RxAnimateMotion<O = void>(id: string, args: any, render: Render<SVGAnimateMotionElement, O>, componentRender?: ComponentRender<O, SVGAnimateMotionElement>): Manifest<SVGAnimateMotionElement, O> { return manifest(id, args, render, componentRender, Svg.animateMotion) }
export function RxAnimateTransform<O = void>(id: string, args: any, render: Render<SVGAnimateTransformElement, O>, componentRender?: ComponentRender<O, SVGAnimateTransformElement>): Manifest<SVGAnimateTransformElement, O> { return manifest(id, args, render, componentRender, Svg.animateTransform) }
export function RxCircle<O = void>(id: string, args: any, render: Render<SVGCircleElement, O>, componentRender?: ComponentRender<O, SVGCircleElement>): Manifest<SVGCircleElement, O> { return manifest(id, args, render, componentRender, Svg.circle) }
export function RxClipPath<O = void>(id: string, args: any, render: Render<SVGClipPathElement, O>, componentRender?: ComponentRender<O, SVGClipPathElement>): Manifest<SVGClipPathElement, O> { return manifest(id, args, render, componentRender, Svg.clipPath) }
export function RxDefs<O = void>(id: string, args: any, render: Render<SVGDefsElement, O>, componentRender?: ComponentRender<O, SVGDefsElement>): Manifest<SVGDefsElement, O> { return manifest(id, args, render, componentRender, Svg.defs) }
export function RxDesc<O = void>(id: string, args: any, render: Render<SVGDescElement, O>, componentRender?: ComponentRender<O, SVGDescElement>): Manifest<SVGDescElement, O> { return manifest(id, args, render, componentRender, Svg.desc) }
export function RxEllipse<O = void>(id: string, args: any, render: Render<SVGEllipseElement, O>, componentRender?: ComponentRender<O, SVGEllipseElement>): Manifest<SVGEllipseElement, O> { return manifest(id, args, render, componentRender, Svg.ellipse) }
export function RxFeBlend<O = void>(id: string, args: any, render: Render<SVGFEBlendElement, O>, componentRender?: ComponentRender<O, SVGFEBlendElement>): Manifest<SVGFEBlendElement, O> { return manifest(id, args, render, componentRender, Svg.feBlend) }
export function RxFeColorMatrix<O = void>(id: string, args: any, render: Render<SVGFEColorMatrixElement, O>, componentRender?: ComponentRender<O, SVGFEColorMatrixElement>): Manifest<SVGFEColorMatrixElement, O> { return manifest(id, args, render, componentRender, Svg.feColorMatrix) }
export function RxFeComponentTransfer<O = void>(id: string, args: any, render: Render<SVGFEComponentTransferElement, O>, componentRender?: ComponentRender<O, SVGFEComponentTransferElement>): Manifest<SVGFEComponentTransferElement, O> { return manifest(id, args, render, componentRender, Svg.feComponentTransfer) }
export function RxFeComposite<O = void>(id: string, args: any, render: Render<SVGFECompositeElement, O>, componentRender?: ComponentRender<O, SVGFECompositeElement>): Manifest<SVGFECompositeElement, O> { return manifest(id, args, render, componentRender, Svg.feComposite) }
export function RxFeConvolveMatrix<O = void>(id: string, args: any, render: Render<SVGFEConvolveMatrixElement, O>, componentRender?: ComponentRender<O, SVGFEConvolveMatrixElement>): Manifest<SVGFEConvolveMatrixElement, O> { return manifest(id, args, render, componentRender, Svg.feConvolveMatrix) }
export function RxFeDiffuseLighting<O = void>(id: string, args: any, render: Render<SVGFEDiffuseLightingElement, O>, componentRender?: ComponentRender<O, SVGFEDiffuseLightingElement>): Manifest<SVGFEDiffuseLightingElement, O> { return manifest(id, args, render, componentRender, Svg.feDiffuseLighting) }
export function RxFeDisplacementMap<O = void>(id: string, args: any, render: Render<SVGFEDisplacementMapElement, O>, componentRender?: ComponentRender<O, SVGFEDisplacementMapElement>): Manifest<SVGFEDisplacementMapElement, O> { return manifest(id, args, render, componentRender, Svg.feDisplacementMap) }
export function RxFeDistantLight<O = void>(id: string, args: any, render: Render<SVGFEDistantLightElement, O>, componentRender?: ComponentRender<O, SVGFEDistantLightElement>): Manifest<SVGFEDistantLightElement, O> { return manifest(id, args, render, componentRender, Svg.feDistantLight) }
export function RxFeDropShadow<O = void>(id: string, args: any, render: Render<SVGFEDropShadowElement, O>, componentRender?: ComponentRender<O, SVGFEDropShadowElement>): Manifest<SVGFEDropShadowElement, O> { return manifest(id, args, render, componentRender, Svg.feDropShadow) }
export function RxFeFlood<O = void>(id: string, args: any, render: Render<SVGFEFloodElement, O>, componentRender?: ComponentRender<O, SVGFEFloodElement>): Manifest<SVGFEFloodElement, O> { return manifest(id, args, render, componentRender, Svg.feFlood) }
export function RxFeFuncA<O = void>(id: string, args: any, render: Render<SVGFEFuncAElement, O>, componentRender?: ComponentRender<O, SVGFEFuncAElement>): Manifest<SVGFEFuncAElement, O> { return manifest(id, args, render, componentRender, Svg.feFuncA) }
export function RxFeFuncB<O = void>(id: string, args: any, render: Render<SVGFEFuncBElement, O>, componentRender?: ComponentRender<O, SVGFEFuncBElement>): Manifest<SVGFEFuncBElement, O> { return manifest(id, args, render, componentRender, Svg.feFuncB) }
export function RxFeFuncG<O = void>(id: string, args: any, render: Render<SVGFEFuncGElement, O>, componentRender?: ComponentRender<O, SVGFEFuncGElement>): Manifest<SVGFEFuncGElement, O> { return manifest(id, args, render, componentRender, Svg.feFuncG) }
export function RxFeFuncR<O = void>(id: string, args: any, render: Render<SVGFEFuncRElement, O>, componentRender?: ComponentRender<O, SVGFEFuncRElement>): Manifest<SVGFEFuncRElement, O> { return manifest(id, args, render, componentRender, Svg.feFuncR) }
export function RxFeGaussianBlur<O = void>(id: string, args: any, render: Render<SVGFEGaussianBlurElement, O>, componentRender?: ComponentRender<O, SVGFEGaussianBlurElement>): Manifest<SVGFEGaussianBlurElement, O> { return manifest(id, args, render, componentRender, Svg.feGaussianBlur) }
export function RxFeImage<O = void>(id: string, args: any, render: Render<SVGFEImageElement, O>, componentRender?: ComponentRender<O, SVGFEImageElement>): Manifest<SVGFEImageElement, O> { return manifest(id, args, render, componentRender, Svg.feImage) }
export function RxFeMerge<O = void>(id: string, args: any, render: Render<SVGFEMergeElement, O>, componentRender?: ComponentRender<O, SVGFEMergeElement>): Manifest<SVGFEMergeElement, O> { return manifest(id, args, render, componentRender, Svg.feMerge) }
export function RxFeMergeNode<O = void>(id: string, args: any, render: Render<SVGFEMergeNodeElement, O>, componentRender?: ComponentRender<O, SVGFEMergeNodeElement>): Manifest<SVGFEMergeNodeElement, O> { return manifest(id, args, render, componentRender, Svg.feMergeNode) }
export function RxFeMorphology<O = void>(id: string, args: any, render: Render<SVGFEMorphologyElement, O>, componentRender?: ComponentRender<O, SVGFEMorphologyElement>): Manifest<SVGFEMorphologyElement, O> { return manifest(id, args, render, componentRender, Svg.feMorphology) }
export function RxFeOffset<O = void>(id: string, args: any, render: Render<SVGFEOffsetElement, O>, componentRender?: ComponentRender<O, SVGFEOffsetElement>): Manifest<SVGFEOffsetElement, O> { return manifest(id, args, render, componentRender, Svg.feOffset) }
export function RxFePointLight<O = void>(id: string, args: any, render: Render<SVGFEPointLightElement, O>, componentRender?: ComponentRender<O, SVGFEPointLightElement>): Manifest<SVGFEPointLightElement, O> { return manifest(id, args, render, componentRender, Svg.fePointLight) }
export function RxFeSpecularLighting<O = void>(id: string, args: any, render: Render<SVGFESpecularLightingElement, O>, componentRender?: ComponentRender<O, SVGFESpecularLightingElement>): Manifest<SVGFESpecularLightingElement, O> { return manifest(id, args, render, componentRender, Svg.feSpecularLighting) }
export function RxFeSpotLight<O = void>(id: string, args: any, render: Render<SVGFESpotLightElement, O>, componentRender?: ComponentRender<O, SVGFESpotLightElement>): Manifest<SVGFESpotLightElement, O> { return manifest(id, args, render, componentRender, Svg.feSpotLight) }
export function RxFeTile<O = void>(id: string, args: any, render: Render<SVGFETileElement, O>, componentRender?: ComponentRender<O, SVGFETileElement>): Manifest<SVGFETileElement, O> { return manifest(id, args, render, componentRender, Svg.feTile) }
export function RxFeTurbulence<O = void>(id: string, args: any, render: Render<SVGFETurbulenceElement, O>, componentRender?: ComponentRender<O, SVGFETurbulenceElement>): Manifest<SVGFETurbulenceElement, O> { return manifest(id, args, render, componentRender, Svg.feTurbulence) }
export function RxFilter<O = void>(id: string, args: any, render: Render<SVGFilterElement, O>, componentRender?: ComponentRender<O, SVGFilterElement>): Manifest<SVGFilterElement, O> { return manifest(id, args, render, componentRender, Svg.filter) }
export function RxForeignObject<O = void>(id: string, args: any, render: Render<SVGForeignObjectElement, O>, componentRender?: ComponentRender<O, SVGForeignObjectElement>): Manifest<SVGForeignObjectElement, O> { return manifest(id, args, render, componentRender, Svg.foreignObject) }
export function RxG<O = void>(id: string, args: any, render: Render<SVGGElement, O>, componentRender?: ComponentRender<O, SVGGElement>): Manifest<SVGGElement, O> { return manifest(id, args, render, componentRender, Svg.g) }
export function RxSvgImage<O = void>(id: string, args: any, render: Render<SVGImageElement, O>, componentRender?: ComponentRender<O, SVGImageElement>): Manifest<SVGImageElement, O> { return manifest(id, args, render, componentRender, Svg.image) }
export function RxLine<O = void>(id: string, args: any, render: Render<SVGLineElement, O>, componentRender?: ComponentRender<O, SVGLineElement>): Manifest<SVGLineElement, O> { return manifest(id, args, render, componentRender, Svg.line) }
export function RxLinearGradient<O = void>(id: string, args: any, render: Render<SVGLinearGradientElement, O>, componentRender?: ComponentRender<O, SVGLinearGradientElement>): Manifest<SVGLinearGradientElement, O> { return manifest(id, args, render, componentRender, Svg.linearGradient) }
export function RxMarker<O = void>(id: string, args: any, render: Render<SVGMarkerElement, O>, componentRender?: ComponentRender<O, SVGMarkerElement>): Manifest<SVGMarkerElement, O> { return manifest(id, args, render, componentRender, Svg.marker) }
export function RxMask<O = void>(id: string, args: any, render: Render<SVGMaskElement, O>, componentRender?: ComponentRender<O, SVGMaskElement>): Manifest<SVGMaskElement, O> { return manifest(id, args, render, componentRender, Svg.mask) }
export function RxMetadata<O = void>(id: string, args: any, render: Render<SVGMetadataElement, O>, componentRender?: ComponentRender<O, SVGMetadataElement>): Manifest<SVGMetadataElement, O> { return manifest(id, args, render, componentRender, Svg.metadata) }
export function RxMPath<O = void>(id: string, args: any, render: Render<SVGElement, O>, componentRender?: ComponentRender<O, SVGElement>): Manifest<SVGElement, O> { return manifest(id, args, render, componentRender, Svg.mpath) }
export function RxPath<O = void>(id: string, args: any, render: Render<SVGPathElement, O>, componentRender?: ComponentRender<O, SVGPathElement>): Manifest<SVGPathElement, O> { return manifest(id, args, render, componentRender, Svg.path) }
export function RxPattern<O = void>(id: string, args: any, render: Render<SVGPatternElement, O>, componentRender?: ComponentRender<O, SVGPatternElement>): Manifest<SVGPatternElement, O> { return manifest(id, args, render, componentRender, Svg.pattern) }
export function RxPolygon<O = void>(id: string, args: any, render: Render<SVGPolygonElement, O>, componentRender?: ComponentRender<O, SVGPolygonElement>): Manifest<SVGPolygonElement, O> { return manifest(id, args, render, componentRender, Svg.polygon) }
export function RxPolyline<O = void>(id: string, args: any, render: Render<SVGPolylineElement, O>, componentRender?: ComponentRender<O, SVGPolylineElement>): Manifest<SVGPolylineElement, O> { return manifest(id, args, render, componentRender, Svg.polyline) }
export function RxRadialGradient<O = void>(id: string, args: any, render: Render<SVGRadialGradientElement, O>, componentRender?: ComponentRender<O, SVGRadialGradientElement>): Manifest<SVGRadialGradientElement, O> { return manifest(id, args, render, componentRender, Svg.radialGradient) }
export function RxRect<O = void>(id: string, args: any, render: Render<SVGRectElement, O>, componentRender?: ComponentRender<O, SVGRectElement>): Manifest<SVGRectElement, O> { return manifest(id, args, render, componentRender, Svg.rect) }
export function RxStop<O = void>(id: string, args: any, render: Render<SVGStopElement, O>, componentRender?: ComponentRender<O, SVGStopElement>): Manifest<SVGStopElement, O> { return manifest(id, args, render, componentRender, Svg.stop) }
export function RxSvgSwitch<O = void>(id: string, args: any, render: Render<SVGSwitchElement, O>, componentRender?: ComponentRender<O, SVGSwitchElement>): Manifest<SVGSwitchElement, O> { return manifest(id, args, render, componentRender, Svg.switch) }
export function RxSymbol<O = void>(id: string, args: any, render: Render<SVGSymbolElement, O>, componentRender?: ComponentRender<O, SVGSymbolElement>): Manifest<SVGSymbolElement, O> { return manifest(id, args, render, componentRender, Svg.symbol) }
export function RxText<O = void>(id: string, args: any, render: Render<SVGTextElement, O>, componentRender?: ComponentRender<O, SVGTextElement>): Manifest<SVGTextElement, O> { return manifest(id, args, render, componentRender, Svg.text) }
export function RxTextPath<O = void>(id: string, args: any, render: Render<SVGTextPathElement, O>, componentRender?: ComponentRender<O, SVGTextPathElement>): Manifest<SVGTextPathElement, O> { return manifest(id, args, render, componentRender, Svg.textPath) }
export function RxTSpan<O = void>(id: string, args: any, render: Render<SVGTSpanElement, O>, componentRender?: ComponentRender<O, SVGTSpanElement>): Manifest<SVGTSpanElement, O> { return manifest(id, args, render, componentRender, Svg.tspan) }
export function RxUse<O = void>(id: string, args: any, render: Render<SVGUseElement, O>, componentRender?: ComponentRender<O, SVGUseElement>): Manifest<SVGUseElement, O> { return manifest(id, args, render, componentRender, Svg.use) }
export function RxView<O = void>(id: string, args: any, render: Render<SVGViewElement, O>, componentRender?: ComponentRender<O, SVGViewElement>): Manifest<SVGViewElement, O> { return manifest(id, args, render, componentRender, Svg.view) }

export function svg(id: string, render: Render<SVGSVGElement> = nullRender): Manifest<SVGSVGElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.svg) }
export function svgA(id: string, render: Render<SVGAElement> = nullRender): Manifest<SVGAElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.a) }
export function animate(id: string, render: Render<SVGAnimateElement> = nullRender): Manifest<SVGAnimateElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.animate) }
export function animateMotion(id: string, render: Render<SVGAnimateMotionElement> = nullRender): Manifest<SVGAnimateMotionElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.animateMotion) }
export function animateTransform(id: string, render: Render<SVGAnimateTransformElement> = nullRender): Manifest<SVGAnimateTransformElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.animateTransform) }
export function circle(id: string, render: Render<SVGCircleElement> = nullRender): Manifest<SVGCircleElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.circle) }
export function clipPath(id: string, render: Render<SVGClipPathElement> = nullRender): Manifest<SVGClipPathElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.clipPath) }
export function defs(id: string, render: Render<SVGDefsElement> = nullRender): Manifest<SVGDefsElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.defs) }
export function desc(id: string, render: Render<SVGDescElement> = nullRender): Manifest<SVGDescElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.desc) }
export function ellipse(id: string, render: Render<SVGEllipseElement> = nullRender): Manifest<SVGEllipseElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.ellipse) }
export function feBlend(id: string, render: Render<SVGFEBlendElement> = nullRender): Manifest<SVGFEBlendElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.feBlend) }
export function feColorMatrix(id: string, render: Render<SVGFEColorMatrixElement> = nullRender): Manifest<SVGFEColorMatrixElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.feColorMatrix) }
export function feComponentTransfer(id: string, render: Render<SVGFEComponentTransferElement> = nullRender): Manifest<SVGFEComponentTransferElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.feComponentTransfer) }
export function feComposite(id: string, render: Render<SVGFECompositeElement> = nullRender): Manifest<SVGFECompositeElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.feComposite) }
export function feConvolveMatrix(id: string, render: Render<SVGFEConvolveMatrixElement> = nullRender): Manifest<SVGFEConvolveMatrixElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.feConvolveMatrix) }
export function feDiffuseLighting(id: string, render: Render<SVGFEDiffuseLightingElement> = nullRender): Manifest<SVGFEDiffuseLightingElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.feDiffuseLighting) }
export function feDisplacementMap(id: string, render: Render<SVGFEDisplacementMapElement> = nullRender): Manifest<SVGFEDisplacementMapElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.feDisplacementMap) }
export function feDistantLight(id: string, render: Render<SVGFEDistantLightElement> = nullRender): Manifest<SVGFEDistantLightElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.feDistantLight) }
export function feDropShadow(id: string, render: Render<SVGFEDropShadowElement> = nullRender): Manifest<SVGFEDropShadowElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.feDropShadow) }
export function feFlood(id: string, render: Render<SVGFEFloodElement> = nullRender): Manifest<SVGFEFloodElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.feFlood) }
export function feFuncA(id: string, render: Render<SVGFEFuncAElement> = nullRender): Manifest<SVGFEFuncAElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.feFuncA) }
export function feFuncB(id: string, render: Render<SVGFEFuncBElement> = nullRender): Manifest<SVGFEFuncBElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.feFuncB) }
export function feFuncG(id: string, render: Render<SVGFEFuncGElement> = nullRender): Manifest<SVGFEFuncGElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.feFuncG) }
export function feFuncR(id: string, render: Render<SVGFEFuncRElement> = nullRender): Manifest<SVGFEFuncRElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.feFuncR) }
export function feGaussianBlur(id: string, render: Render<SVGFEGaussianBlurElement> = nullRender): Manifest<SVGFEGaussianBlurElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.feGaussianBlur) }
export function feImage(id: string, render: Render<SVGFEImageElement> = nullRender): Manifest<SVGFEImageElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.feImage) }
export function feMerge(id: string, render: Render<SVGFEMergeElement> = nullRender): Manifest<SVGFEMergeElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.feMerge) }
export function feMergeNode(id: string, render: Render<SVGFEMergeNodeElement> = nullRender): Manifest<SVGFEMergeNodeElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.feMergeNode) }
export function feMorphology(id: string, render: Render<SVGFEMorphologyElement> = nullRender): Manifest<SVGFEMorphologyElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.feMorphology) }
export function feOffset(id: string, render: Render<SVGFEOffsetElement> = nullRender): Manifest<SVGFEOffsetElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.feOffset) }
export function fePointLight(id: string, render: Render<SVGFEPointLightElement> = nullRender): Manifest<SVGFEPointLightElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.fePointLight) }
export function feSpecularLighting(id: string, render: Render<SVGFESpecularLightingElement> = nullRender): Manifest<SVGFESpecularLightingElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.feSpecularLighting) }
export function feSpotLight(id: string, render: Render<SVGFESpotLightElement> = nullRender): Manifest<SVGFESpotLightElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.feSpotLight) }
export function feTile(id: string, render: Render<SVGFETileElement> = nullRender): Manifest<SVGFETileElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.feTile) }
export function feTurbulence(id: string, render: Render<SVGFETurbulenceElement> = nullRender): Manifest<SVGFETurbulenceElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.feTurbulence) }
export function filter(id: string, render: Render<SVGFilterElement> = nullRender): Manifest<SVGFilterElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.filter) }
export function foreignObject(id: string, render: Render<SVGForeignObjectElement> = nullRender): Manifest<SVGForeignObjectElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.foreignObject) }
export function g(id: string, render: Render<SVGGElement> = nullRender): Manifest<SVGGElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.g) }
export function svgImage(id: string, render: Render<SVGImageElement> = nullRender): Manifest<SVGImageElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.image) }
export function line(id: string, render: Render<SVGLineElement> = nullRender): Manifest<SVGLineElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.line) }
export function linearGradient(id: string, render: Render<SVGLinearGradientElement> = nullRender): Manifest<SVGLinearGradientElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.linearGradient) }
export function marker(id: string, render: Render<SVGMarkerElement> = nullRender): Manifest<SVGMarkerElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.marker) }
export function mask(id: string, render: Render<SVGMaskElement> = nullRender): Manifest<SVGMaskElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.mask) }
export function metadata(id: string, render: Render<SVGMetadataElement> = nullRender): Manifest<SVGMetadataElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.metadata) }
export function mpath(id: string, render: Render<SVGElement> = nullRender): Manifest<SVGElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.mpath) }
export function path(id: string, render: Render<SVGPathElement> = nullRender): Manifest<SVGPathElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.path) }
export function pattern(id: string, render: Render<SVGPatternElement> = nullRender): Manifest<SVGPatternElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.pattern) }
export function polygon(id: string, render: Render<SVGPolygonElement> = nullRender): Manifest<SVGPolygonElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.polygon) }
export function polyline(id: string, render: Render<SVGPolylineElement> = nullRender): Manifest<SVGPolylineElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.polyline) }
export function radialGradient(id: string, render: Render<SVGRadialGradientElement> = nullRender): Manifest<SVGRadialGradientElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.radialGradient) }
export function rect(id: string, render: Render<SVGRectElement> = nullRender): Manifest<SVGRectElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.rect) }
export function stop(id: string, render: Render<SVGStopElement> = nullRender): Manifest<SVGStopElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.stop) }
export function svgSwitch(id: string, render: Render<SVGSwitchElement> = nullRender): Manifest<SVGSwitchElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.switch) }
export function symbol(id: string, render: Render<SVGSymbolElement> = nullRender): Manifest<SVGSymbolElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.symbol) }
export function text(id: string, render: Render<SVGTextElement> = nullRender): Manifest<SVGTextElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.text) }
export function textPath(id: string, render: Render<SVGTextPathElement> = nullRender): Manifest<SVGTextPathElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.textPath) }
export function tspan(id: string, render: Render<SVGTSpanElement> = nullRender): Manifest<SVGTSpanElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.tspan) }
export function use(id: string, render: Render<SVGUseElement> = nullRender): Manifest<SVGUseElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.use) }
export function view(id: string, render: Render<SVGViewElement> = nullRender): Manifest<SVGViewElement> { return manifest(id, RefreshWithParent, render, undefined, Svg.view) }

const Svg = {
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
