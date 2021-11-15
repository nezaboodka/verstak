// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { RxDom, Render, Declaration, RefreshParent, SuperRender } from '../core/api'
import { HtmlRtti, SvgRtti } from './HtmlRtti'

export function HtmlBody(id: string, args: any, render: Render<HTMLElement>): Declaration<HTMLElement> {
  return RxDom.declare(id, args, render, undefined, {
    name: id,
    unordered: false,
    initialize(d: Declaration<HTMLElement, any>, sibling?: Declaration): void {
      const native = global.document.body
      native.id = d.id
      d.instance!.native = native
    },
  })
}

function nullRender(e: Element): void { /* nop */ }
export function RxA<O = void>(id: string, args: any, render: Render<HTMLAnchorElement, O>, superRender?: SuperRender<O, HTMLAnchorElement>): Declaration<HTMLAnchorElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.a) }
export function RxAbbr<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.abbr) }
export function RxAddress<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.address) }
export function RxArea<O = void>(id: string, args: any, render: Render<HTMLAreaElement, O>, superRender?: SuperRender<O, HTMLAreaElement>): Declaration<HTMLAreaElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.area) }
export function RxArticle<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.article) }
export function RxAside<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.aside) }
export function RxAudio<O = void>(id: string, args: any, render: Render<HTMLAudioElement, O>, superRender?: SuperRender<O, HTMLAudioElement>): Declaration<HTMLAudioElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.audio) }
export function RxB<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.b) }
export function RxBase<O = void>(id: string, args: any, render: Render<HTMLBaseElement, O>, superRender?: SuperRender<O, HTMLBaseElement>): Declaration<HTMLBaseElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.base) }
export function RxBdi<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.bdi) }
export function RxBdo<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.bdo) }
export function RxBig<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.big) }
export function RxBlockQuote<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.blockquote) }
export function RxBody<O = void>(id: string, args: any, render: Render<HTMLBodyElement, O>, superRender?: SuperRender<O, HTMLBodyElement>): Declaration<HTMLBodyElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.body) }
export function RxBR<O = void>(id: string, args: any, render: Render<HTMLBRElement, O>, superRender?: SuperRender<O, HTMLBRElement>): Declaration<HTMLBRElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.br) }
export function RxButton<O = void>(id: string, args: any, render: Render<HTMLButtonElement, O>, superRender?: SuperRender<O, HTMLButtonElement>): Declaration<HTMLButtonElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.button) }
export function RxCanvas<O = void>(id: string, args: any, render: Render<HTMLCanvasElement, O>, superRender?: SuperRender<O, HTMLCanvasElement>): Declaration<HTMLCanvasElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.canvas) }
export function RxCaption<O = void>(id: string, args: any, render: Render<HTMLTableCaptionElement, O>, superRender?: SuperRender<O, HTMLTableCaptionElement>): Declaration<HTMLTableCaptionElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.caption) }
export function RxCite<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.cite) }
export function RxCode<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.code) }
export function RxCol<O = void>(id: string, args: any, render: Render<HTMLTableColElement, O>, superRender?: SuperRender<O, HTMLTableColElement>): Declaration<HTMLTableColElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.col) }
export function RxColGroup<O = void>(id: string, args: any, render: Render<HTMLTableColElement, O>, superRender?: SuperRender<O, HTMLTableColElement>): Declaration<HTMLTableColElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.colgroup) }
export function RxData<O = void>(id: string, args: any, render: Render<HTMLDataElement, O>, superRender?: SuperRender<O, HTMLDataElement>): Declaration<HTMLDataElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.data) }
export function RxDataList<O = void>(id: string, args: any, render: Render<HTMLDataListElement, O>, superRender?: SuperRender<O, HTMLDataListElement>): Declaration<HTMLDataListElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.datalist) }
export function RxDD<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.dd) }
export function RxDel<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.del) }
export function RxDetails<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.details) }
export function RxDfn<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.dfn) }
export function RxDialog<O = void>(id: string, args: any, render: Render<HTMLDialogElement, O>, superRender?: SuperRender<O, HTMLDialogElement>): Declaration<HTMLDialogElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.dialog) }
export function RxDiv<O = void>(id: string, args: any, render: Render<HTMLDivElement, O>, superRender?: SuperRender<O, HTMLDivElement>): Declaration<HTMLDivElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.div) }
export function RxDL<O = void>(id: string, args: any, render: Render<HTMLDListElement, O>, superRender?: SuperRender<O, HTMLDListElement>): Declaration<HTMLDListElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.dl) }
export function RxDT<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.dt) }
export function RxEM<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.em) }
export function RxEmbed<O = void>(id: string, args: any, render: Render<HTMLEmbedElement, O>, superRender?: SuperRender<O, HTMLEmbedElement>): Declaration<HTMLEmbedElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.embed) }
export function RxFieldSet<O = void>(id: string, args: any, render: Render<HTMLFieldSetElement, O>, superRender?: SuperRender<O, HTMLFieldSetElement>): Declaration<HTMLFieldSetElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.fieldset) }
export function RxFigCaption<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.figcaption) }
export function RxFigure<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.figure) }
export function RxFooter<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.footer) }
export function RxForm<O = void>(id: string, args: any, render: Render<HTMLFormElement, O>, superRender?: SuperRender<O, HTMLFormElement>): Declaration<HTMLFormElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.form) }
export function RxH1<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, superRender?: SuperRender<O, HTMLHeadingElement>): Declaration<HTMLHeadingElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.h1) }
export function RxH2<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, superRender?: SuperRender<O, HTMLHeadingElement>): Declaration<HTMLHeadingElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.h2) }
export function RxH3<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, superRender?: SuperRender<O, HTMLHeadingElement>): Declaration<HTMLHeadingElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.h3) }
export function RxH4<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, superRender?: SuperRender<O, HTMLHeadingElement>): Declaration<HTMLHeadingElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.h4) }
export function RxH5<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, superRender?: SuperRender<O, HTMLHeadingElement>): Declaration<HTMLHeadingElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.h5) }
export function RxH6<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, superRender?: SuperRender<O, HTMLHeadingElement>): Declaration<HTMLHeadingElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.h6) }
export function RxHead<O = void>(id: string, args: any, render: Render<HTMLHeadElement, O>, superRender?: SuperRender<O, HTMLHeadElement>): Declaration<HTMLHeadElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.head) }
export function RxHeader<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.header) }
export function RxHGroup<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.hgroup) }
export function RxHR<O = void>(id: string, args: any, render: Render<HTMLHRElement, O>, superRender?: SuperRender<O, HTMLHRElement>): Declaration<HTMLHRElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.hr) }
export function RxHtml<O = void>(id: string, args: any, render: Render<HTMLHtmlElement, O>, superRender?: SuperRender<O, HTMLHtmlElement>): Declaration<HTMLHtmlElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.html) }
export function RxI<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.i) }
export function RxIFrame<O = void>(id: string, args: any, render: Render<HTMLIFrameElement, O>, superRender?: SuperRender<O, HTMLIFrameElement>): Declaration<HTMLIFrameElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.iframe) }
export function RxImg<O = void>(id: string, args: any, render: Render<HTMLImageElement, O>, superRender?: SuperRender<O, HTMLImageElement>): Declaration<HTMLImageElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.img) }
export function RxInput<O = void>(id: string, args: any, render: Render<HTMLInputElement, O>, superRender?: SuperRender<O, HTMLInputElement>): Declaration<HTMLInputElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.input) }
export function RxIns<O = void>(id: string, args: any, render: Render<HTMLModElement, O>, superRender?: SuperRender<O, HTMLModElement>): Declaration<HTMLModElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.ins) }
export function RxKbd<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.kbd) }
export function RxKeygen<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.keygen) }
export function RxLabel<O = void>(id: string, args: any, render: Render<HTMLLabelElement, O>, superRender?: SuperRender<O, HTMLLabelElement>): Declaration<HTMLLabelElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.label) }
export function RxLegend<O = void>(id: string, args: any, render: Render<HTMLLegendElement, O>, superRender?: SuperRender<O, HTMLLegendElement>): Declaration<HTMLLegendElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.legend) }
export function RxLI<O = void>(id: string, args: any, render: Render<HTMLLIElement, O>, superRender?: SuperRender<O, HTMLLIElement>): Declaration<HTMLLIElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.li) }
export function RxLink<O = void>(id: string, args: any, render: Render<HTMLLinkElement, O>, superRender?: SuperRender<O, HTMLLinkElement>): Declaration<HTMLLinkElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.link) }
export function RxMain<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.main) }
export function RxMap<O = void>(id: string, args: any, render: Render<HTMLMapElement, O>, superRender?: SuperRender<O, HTMLMapElement>): Declaration<HTMLMapElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.map) }
export function RxMark<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.mark) }
export function RxMenu<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.menu) }
export function RxMenuItem<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.menuitem) }
export function RxMeta<O = void>(id: string, args: any, render: Render<HTMLMetaElement, O>, superRender?: SuperRender<O, HTMLMetaElement>): Declaration<HTMLMetaElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.meta) }
export function RxMeter<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.meter) }
export function RxNav<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.nav) }
export function RxNoIndex<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.noindex) }
export function RxNoScript<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.noscript) }
export function RxObj<O = void>(id: string, args: any, render: Render<HTMLObjectElement, O>, superRender?: SuperRender<O, HTMLObjectElement>): Declaration<HTMLObjectElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.object) }
export function RxOL<O = void>(id: string, args: any, render: Render<HTMLOListElement, O>, superRender?: SuperRender<O, HTMLOListElement>): Declaration<HTMLOListElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.ol) }
export function RxOptGroup<O = void>(id: string, args: any, render: Render<HTMLOptGroupElement, O>, superRender?: SuperRender<O, HTMLOptGroupElement>): Declaration<HTMLOptGroupElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.optgroup) }
export function RxOption<O = void>(id: string, args: any, render: Render<HTMLOptionElement, O>, superRender?: SuperRender<O, HTMLOptionElement>): Declaration<HTMLOptionElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.option) }
export function RxOutput<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.output) }
export function RxP<O = void>(id: string, args: any, render: Render<HTMLParagraphElement, O>, superRender?: SuperRender<O, HTMLParagraphElement>): Declaration<HTMLParagraphElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.p) }
export function RxParam<O = void>(id: string, args: any, render: Render<HTMLParamElement, O>, superRender?: SuperRender<O, HTMLParamElement>): Declaration<HTMLParamElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.param) }
export function RxPicture<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.picture) }
export function RxPre<O = void>(id: string, args: any, render: Render<HTMLPreElement, O>, superRender?: SuperRender<O, HTMLPreElement>): Declaration<HTMLPreElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.pre) }
export function RxProgress<O = void>(id: string, args: any, render: Render<HTMLProgressElement, O>, superRender?: SuperRender<O, HTMLProgressElement>): Declaration<HTMLProgressElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.progress) }
export function RxQ<O = void>(id: string, args: any, render: Render<HTMLQuoteElement, O>, superRender?: SuperRender<O, HTMLQuoteElement>): Declaration<HTMLQuoteElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.q) }
export function RxRP<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.rp) }
export function RxRT<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.rt) }
export function RxRuby<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.ruby) }
export function RxS<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.s) }
export function RxSamp<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.samp) }
export function RxScript<O = void>(id: string, args: any, render: Render<HTMLScriptElement, O>, superRender?: SuperRender<O, HTMLScriptElement>): Declaration<HTMLScriptElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.script) }
export function RxSection<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.section) }
export function RxSelect<O = void>(id: string, args: any, render: Render<HTMLSelectElement, O>, superRender?: SuperRender<O, HTMLSelectElement>): Declaration<HTMLSelectElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.select) }
export function RxSmall<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.small) }
export function RxSource<O = void>(id: string, args: any, render: Render<HTMLSourceElement, O>, superRender?: SuperRender<O, HTMLSourceElement>): Declaration<HTMLSourceElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.source) }
export function RxSpan<O = void>(id: string, args: any, render: Render<HTMLSpanElement, O>, superRender?: SuperRender<O, HTMLSpanElement>): Declaration<HTMLSpanElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.span) }
export function RxStrong<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.strong) }
export function RxStyle<O = void>(id: string, args: any, render: Render<HTMLStyleElement, O>, superRender?: SuperRender<O, HTMLStyleElement>): Declaration<HTMLStyleElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.style) }
export function RxSub<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.sub) }
export function RxSummary<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.summary) }
export function RxSup<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.sup) }
export function RxTable<O = void>(id: string, args: any, render: Render<HTMLTableElement, O>, superRender?: SuperRender<O, HTMLTableElement>): Declaration<HTMLTableElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.table) }
export function RxTemplate<O = void>(id: string, args: any, render: Render<HTMLTemplateElement, O>, superRender?: SuperRender<O, HTMLTemplateElement>): Declaration<HTMLTemplateElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.template) }
export function RxTBody<O = void>(id: string, args: any, render: Render<HTMLTableSectionElement, O>, superRender?: SuperRender<O, HTMLTableSectionElement>): Declaration<HTMLTableSectionElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.tbody) }
export function RxTD<O = void>(id: string, args: any, render: Render<HTMLTableDataCellElement, O>, superRender?: SuperRender<O, HTMLTableDataCellElement>): Declaration<HTMLTableDataCellElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.td) }
export function RxTextArea<O = void>(id: string, args: any, render: Render<HTMLTextAreaElement, O>, superRender?: SuperRender<O, HTMLTextAreaElement>): Declaration<HTMLTextAreaElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.textarea) }
export function RxTFoot<O = void>(id: string, args: any, render: Render<HTMLTableSectionElement, O>, superRender?: SuperRender<O, HTMLTableSectionElement>): Declaration<HTMLTableSectionElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.tfoot) }
export function RxTH<O = void>(id: string, args: any, render: Render<HTMLTableHeaderCellElement, O>, superRender?: SuperRender<O, HTMLTableHeaderCellElement>): Declaration<HTMLTableHeaderCellElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.th) }
export function RxTHead<O = void>(id: string, args: any, render: Render<HTMLTableSectionElement, O>, superRender?: SuperRender<O, HTMLTableSectionElement>): Declaration<HTMLTableSectionElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.thead) }
export function RxTime<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.time) }
export function RxTitle<O = void>(id: string, args: any, render: Render<HTMLTitleElement, O>, superRender?: SuperRender<O, HTMLTitleElement>): Declaration<HTMLTitleElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.title) }
export function RxTR<O = void>(id: string, args: any, render: Render<HTMLTableRowElement, O>, superRender?: SuperRender<O, HTMLTableRowElement>): Declaration<HTMLTableRowElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.tr) }
export function RxTrack<O = void>(id: string, args: any, render: Render<HTMLTrackElement, O>, superRender?: SuperRender<O, HTMLTrackElement>): Declaration<HTMLTrackElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.track) }
export function RxU<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.u) }
export function RxUL<O = void>(id: string, args: any, render: Render<HTMLUListElement, O>, superRender?: SuperRender<O, HTMLUListElement>): Declaration<HTMLUListElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.ul) }
export function RxVar<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.var) }
export function RxVideo<O = void>(id: string, args: any, render: Render<HTMLVideoElement, O>, superRender?: SuperRender<O, HTMLVideoElement>): Declaration<HTMLVideoElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.video) }
export function RxWbr<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>): Declaration<HTMLElement, O> { return RxDom.declare(id, args, render, superRender, HtmlTags.wbr) }

export function A(id: string, render: Render<HTMLAnchorElement> = nullRender): Declaration<HTMLAnchorElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.a) }
export function Abbr(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.abbr) }
export function Address(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.address) }
export function Area(id: string, render: Render<HTMLAreaElement> = nullRender): Declaration<HTMLAreaElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.area) }
export function Article(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.article) }
export function Aside(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.aside) }
export function Audio(id: string, render: Render<HTMLAudioElement> = nullRender): Declaration<HTMLAudioElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.audio) }
export function B(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.b) }
export function Base(id: string, render: Render<HTMLBaseElement> = nullRender): Declaration<HTMLBaseElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.base) }
export function Bdi(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.bdi) }
export function Bdo(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.bdo) }
export function Big(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.big) }
export function BlockQuote(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.blockquote) }
export function Body(id: string, render: Render<HTMLBodyElement> = nullRender): Declaration<HTMLBodyElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.body) }
export function BR(id: string, render: Render<HTMLBRElement> = nullRender): Declaration<HTMLBRElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.br) }
export function Button(id: string, render: Render<HTMLButtonElement> = nullRender): Declaration<HTMLButtonElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.button) }
export function Canvas(id: string, render: Render<HTMLCanvasElement> = nullRender): Declaration<HTMLCanvasElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.canvas) }
export function Caption(id: string, render: Render<HTMLTableCaptionElement> = nullRender): Declaration<HTMLTableCaptionElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.caption) }
export function Cite(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.cite) }
export function Code(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.code) }
export function Col(id: string, render: Render<HTMLTableColElement> = nullRender): Declaration<HTMLTableColElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.col) }
export function ColGroup(id: string, render: Render<HTMLTableColElement> = nullRender): Declaration<HTMLTableColElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.colgroup) }
export function Data(id: string, render: Render<HTMLDataElement> = nullRender): Declaration<HTMLDataElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.data) }
export function DataList(id: string, render: Render<HTMLDataListElement> = nullRender): Declaration<HTMLDataListElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.datalist) }
export function DD(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.dd) }
export function Del(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.del) }
export function Details(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.details) }
export function Dfn(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.dfn) }
export function Dialog(id: string, render: Render<HTMLDialogElement> = nullRender): Declaration<HTMLDialogElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.dialog) }
export function Div(id: string, render: Render<HTMLDivElement> = nullRender): Declaration<HTMLDivElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.div) }
export function DL(id: string, render: Render<HTMLDListElement> = nullRender): Declaration<HTMLDListElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.dl) }
export function DT(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.dt) }
export function EM(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.em) }
export function Embed(id: string, render: Render<HTMLEmbedElement> = nullRender): Declaration<HTMLEmbedElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.embed) }
export function FieldSet(id: string, render: Render<HTMLFieldSetElement> = nullRender): Declaration<HTMLFieldSetElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.fieldset) }
export function FigCaption(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.figcaption) }
export function Figure(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.figure) }
export function Footer(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.footer) }
export function Form(id: string, render: Render<HTMLFormElement> = nullRender): Declaration<HTMLFormElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.form) }
export function H1(id: string, render: Render<HTMLHeadingElement> = nullRender): Declaration<HTMLHeadingElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.h1) }
export function H2(id: string, render: Render<HTMLHeadingElement> = nullRender): Declaration<HTMLHeadingElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.h2) }
export function H3(id: string, render: Render<HTMLHeadingElement> = nullRender): Declaration<HTMLHeadingElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.h3) }
export function H4(id: string, render: Render<HTMLHeadingElement> = nullRender): Declaration<HTMLHeadingElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.h4) }
export function H5(id: string, render: Render<HTMLHeadingElement> = nullRender): Declaration<HTMLHeadingElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.h5) }
export function H6(id: string, render: Render<HTMLHeadingElement> = nullRender): Declaration<HTMLHeadingElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.h6) }
export function Head(id: string, render: Render<HTMLHeadElement> = nullRender): Declaration<HTMLHeadElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.head) }
export function Header(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.header) }
export function HGroup(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.hgroup) }
export function HR(id: string, render: Render<HTMLHRElement> = nullRender): Declaration<HTMLHRElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.hr) }
export function Html(id: string, render: Render<HTMLHtmlElement> = nullRender): Declaration<HTMLHtmlElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.html) }
export function I(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.i) }
export function IFrame(id: string, render: Render<HTMLIFrameElement> = nullRender): Declaration<HTMLIFrameElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.iframe) }
export function Img(id: string, render: Render<HTMLImageElement> = nullRender): Declaration<HTMLImageElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.img) }
export function Input(id: string, render: Render<HTMLInputElement> = nullRender): Declaration<HTMLInputElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.input) }
export function Ins(id: string, render: Render<HTMLModElement> = nullRender): Declaration<HTMLModElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.ins) }
export function Kbd(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.kbd) }
export function KeyGen(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.keygen) }
export function Label(id: string, render: Render<HTMLLabelElement> = nullRender): Declaration<HTMLLabelElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.label) }
export function Legend(id: string, render: Render<HTMLLegendElement> = nullRender): Declaration<HTMLLegendElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.legend) }
export function LI(id: string, render: Render<HTMLLIElement> = nullRender): Declaration<HTMLLIElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.li) }
export function Link(id: string, render: Render<HTMLLinkElement> = nullRender): Declaration<HTMLLinkElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.link) }
export function Main(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.main) }
export function Map(id: string, render: Render<HTMLMapElement> = nullRender): Declaration<HTMLMapElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.map) }
export function Mark(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.mark) }
export function Menu(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.menu) }
export function MenuItem(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.menuitem) }
export function Meta(id: string, render: Render<HTMLMetaElement> = nullRender): Declaration<HTMLMetaElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.meta) }
export function Meter(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.meter) }
export function Nav(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.nav) }
export function NoIndex(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.noindex) }
export function NoScript(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.noscript) }
export function Obj(id: string, render: Render<HTMLObjectElement> = nullRender): Declaration<HTMLObjectElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.object) }
export function OL(id: string, render: Render<HTMLOListElement> = nullRender): Declaration<HTMLOListElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.ol) }
export function OptGroup(id: string, render: Render<HTMLOptGroupElement> = nullRender): Declaration<HTMLOptGroupElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.optgroup) }
export function Option(id: string, render: Render<HTMLOptionElement> = nullRender): Declaration<HTMLOptionElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.option) }
export function Output(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.output) }
export function P(id: string, render: Render<HTMLParagraphElement> = nullRender): Declaration<HTMLParagraphElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.p) }
export function Param(id: string, render: Render<HTMLParamElement> = nullRender): Declaration<HTMLParamElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.param) }
export function Picture(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.picture) }
export function Pre(id: string, render: Render<HTMLPreElement> = nullRender): Declaration<HTMLPreElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.pre) }
export function Progress(id: string, render: Render<HTMLProgressElement> = nullRender): Declaration<HTMLProgressElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.progress) }
export function Q(id: string, render: Render<HTMLQuoteElement> = nullRender): Declaration<HTMLQuoteElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.q) }
export function RP(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.rp) }
export function RT(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.rt) }
export function Ruby(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.ruby) }
export function S(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.s) }
export function Samp(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.samp) }
export function Script(id: string, render: Render<HTMLScriptElement> = nullRender): Declaration<HTMLScriptElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.script) }
export function Section(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.section) }
export function Select(id: string, render: Render<HTMLSelectElement> = nullRender): Declaration<HTMLSelectElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.select) }
export function Small(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.small) }
export function Source(id: string, render: Render<HTMLSourceElement> = nullRender): Declaration<HTMLSourceElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.source) }
export function Span(id: string, render: Render<HTMLSpanElement> = nullRender): Declaration<HTMLSpanElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.span) }
export function Strong(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.strong) }
export function Style(id: string, render: Render<HTMLStyleElement> = nullRender): Declaration<HTMLStyleElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.style) }
export function Sub(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.sub) }
export function Summary(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.summary) }
export function Sup(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.sup) }
export function Table(id: string, render: Render<HTMLTableElement> = nullRender): Declaration<HTMLTableElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.table) }
export function Template(id: string, render: Render<HTMLTemplateElement> = nullRender): Declaration<HTMLTemplateElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.template) }
export function TBody(id: string, render: Render<HTMLTableSectionElement> = nullRender): Declaration<HTMLTableSectionElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.tbody) }
export function TD(id: string, render: Render<HTMLTableDataCellElement> = nullRender): Declaration<HTMLTableDataCellElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.td) }
export function TextArea(id: string, render: Render<HTMLTextAreaElement> = nullRender): Declaration<HTMLTextAreaElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.textarea) }
export function TFoot(id: string, render: Render<HTMLTableSectionElement> = nullRender): Declaration<HTMLTableSectionElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.tfoot) }
export function TH(id: string, render: Render<HTMLTableHeaderCellElement> = nullRender): Declaration<HTMLTableHeaderCellElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.th) }
export function THead(id: string, render: Render<HTMLTableSectionElement> = nullRender): Declaration<HTMLTableSectionElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.thead) }
export function Time(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.time) }
export function Title(id: string, render: Render<HTMLTitleElement> = nullRender): Declaration<HTMLTitleElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.title) }
export function TR(id: string, render: Render<HTMLTableRowElement> = nullRender): Declaration<HTMLTableRowElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.tr) }
export function Track(id: string, render: Render<HTMLTrackElement> = nullRender): Declaration<HTMLTrackElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.track) }
export function U(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.u) }
export function UL(id: string, render: Render<HTMLUListElement> = nullRender): Declaration<HTMLUListElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.ul) }
export function Var(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.var) }
export function Video(id: string, render: Render<HTMLVideoElement> = nullRender): Declaration<HTMLVideoElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.video) }
export function Wbr(id: string, render: Render<HTMLElement> = nullRender): Declaration<HTMLElement> { return RxDom.declare(id, RefreshParent, render, undefined, HtmlTags.wbr) }

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

export function RxSvg<O = void>(id: string, args: any, render: Render<SVGSVGElement, O>, superRender?: SuperRender<O, SVGSVGElement>): Declaration<SVGSVGElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.svg) }
export function RxSvgA<O = void>(id: string, args: any, render: Render<SVGAElement, O>, superRender?: SuperRender<O, SVGAElement>): Declaration<SVGAElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.a) }
export function RxAnimate<O = void>(id: string, args: any, render: Render<SVGAnimateElement, O>, superRender?: SuperRender<O, SVGAnimateElement>): Declaration<SVGAnimateElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.animate) }
export function RxAnimateMotion<O = void>(id: string, args: any, render: Render<SVGAnimateMotionElement, O>, superRender?: SuperRender<O, SVGAnimateMotionElement>): Declaration<SVGAnimateMotionElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.animateMotion) }
export function RxAnimateTransform<O = void>(id: string, args: any, render: Render<SVGAnimateTransformElement, O>, superRender?: SuperRender<O, SVGAnimateTransformElement>): Declaration<SVGAnimateTransformElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.animateTransform) }
export function RxCircle<O = void>(id: string, args: any, render: Render<SVGCircleElement, O>, superRender?: SuperRender<O, SVGCircleElement>): Declaration<SVGCircleElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.circle) }
export function RxClipPath<O = void>(id: string, args: any, render: Render<SVGClipPathElement, O>, superRender?: SuperRender<O, SVGClipPathElement>): Declaration<SVGClipPathElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.clipPath) }
export function RxDefs<O = void>(id: string, args: any, render: Render<SVGDefsElement, O>, superRender?: SuperRender<O, SVGDefsElement>): Declaration<SVGDefsElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.defs) }
export function RxDesc<O = void>(id: string, args: any, render: Render<SVGDescElement, O>, superRender?: SuperRender<O, SVGDescElement>): Declaration<SVGDescElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.desc) }
export function RxEllipse<O = void>(id: string, args: any, render: Render<SVGEllipseElement, O>, superRender?: SuperRender<O, SVGEllipseElement>): Declaration<SVGEllipseElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.ellipse) }
export function RxFeBlend<O = void>(id: string, args: any, render: Render<SVGFEBlendElement, O>, superRender?: SuperRender<O, SVGFEBlendElement>): Declaration<SVGFEBlendElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.feBlend) }
export function RxFeColorMatrix<O = void>(id: string, args: any, render: Render<SVGFEColorMatrixElement, O>, superRender?: SuperRender<O, SVGFEColorMatrixElement>): Declaration<SVGFEColorMatrixElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.feColorMatrix) }
export function RxFeComponentTransfer<O = void>(id: string, args: any, render: Render<SVGFEComponentTransferElement, O>, superRender?: SuperRender<O, SVGFEComponentTransferElement>): Declaration<SVGFEComponentTransferElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.feComponentTransfer) }
export function RxFeComposite<O = void>(id: string, args: any, render: Render<SVGFECompositeElement, O>, superRender?: SuperRender<O, SVGFECompositeElement>): Declaration<SVGFECompositeElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.feComposite) }
export function RxFeConvolveMatrix<O = void>(id: string, args: any, render: Render<SVGFEConvolveMatrixElement, O>, superRender?: SuperRender<O, SVGFEConvolveMatrixElement>): Declaration<SVGFEConvolveMatrixElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.feConvolveMatrix) }
export function RxFeDiffuseLighting<O = void>(id: string, args: any, render: Render<SVGFEDiffuseLightingElement, O>, superRender?: SuperRender<O, SVGFEDiffuseLightingElement>): Declaration<SVGFEDiffuseLightingElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.feDiffuseLighting) }
export function RxFeDisplacementMap<O = void>(id: string, args: any, render: Render<SVGFEDisplacementMapElement, O>, superRender?: SuperRender<O, SVGFEDisplacementMapElement>): Declaration<SVGFEDisplacementMapElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.feDisplacementMap) }
export function RxFeDistantLight<O = void>(id: string, args: any, render: Render<SVGFEDistantLightElement, O>, superRender?: SuperRender<O, SVGFEDistantLightElement>): Declaration<SVGFEDistantLightElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.feDistantLight) }
export function RxFeDropShadow<O = void>(id: string, args: any, render: Render<SVGFEDropShadowElement, O>, superRender?: SuperRender<O, SVGFEDropShadowElement>): Declaration<SVGFEDropShadowElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.feDropShadow) }
export function RxFeFlood<O = void>(id: string, args: any, render: Render<SVGFEFloodElement, O>, superRender?: SuperRender<O, SVGFEFloodElement>): Declaration<SVGFEFloodElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.feFlood) }
export function RxFeFuncA<O = void>(id: string, args: any, render: Render<SVGFEFuncAElement, O>, superRender?: SuperRender<O, SVGFEFuncAElement>): Declaration<SVGFEFuncAElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.feFuncA) }
export function RxFeFuncB<O = void>(id: string, args: any, render: Render<SVGFEFuncBElement, O>, superRender?: SuperRender<O, SVGFEFuncBElement>): Declaration<SVGFEFuncBElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.feFuncB) }
export function RxFeFuncG<O = void>(id: string, args: any, render: Render<SVGFEFuncGElement, O>, superRender?: SuperRender<O, SVGFEFuncGElement>): Declaration<SVGFEFuncGElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.feFuncG) }
export function RxFeFuncR<O = void>(id: string, args: any, render: Render<SVGFEFuncRElement, O>, superRender?: SuperRender<O, SVGFEFuncRElement>): Declaration<SVGFEFuncRElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.feFuncR) }
export function RxFeGaussianBlur<O = void>(id: string, args: any, render: Render<SVGFEGaussianBlurElement, O>, superRender?: SuperRender<O, SVGFEGaussianBlurElement>): Declaration<SVGFEGaussianBlurElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.feGaussianBlur) }
export function RxFeImage<O = void>(id: string, args: any, render: Render<SVGFEImageElement, O>, superRender?: SuperRender<O, SVGFEImageElement>): Declaration<SVGFEImageElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.feImage) }
export function RxFeMerge<O = void>(id: string, args: any, render: Render<SVGFEMergeElement, O>, superRender?: SuperRender<O, SVGFEMergeElement>): Declaration<SVGFEMergeElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.feMerge) }
export function RxFeMergeNode<O = void>(id: string, args: any, render: Render<SVGFEMergeNodeElement, O>, superRender?: SuperRender<O, SVGFEMergeNodeElement>): Declaration<SVGFEMergeNodeElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.feMergeNode) }
export function RxFeMorphology<O = void>(id: string, args: any, render: Render<SVGFEMorphologyElement, O>, superRender?: SuperRender<O, SVGFEMorphologyElement>): Declaration<SVGFEMorphologyElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.feMorphology) }
export function RxFeOffset<O = void>(id: string, args: any, render: Render<SVGFEOffsetElement, O>, superRender?: SuperRender<O, SVGFEOffsetElement>): Declaration<SVGFEOffsetElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.feOffset) }
export function RxFePointLight<O = void>(id: string, args: any, render: Render<SVGFEPointLightElement, O>, superRender?: SuperRender<O, SVGFEPointLightElement>): Declaration<SVGFEPointLightElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.fePointLight) }
export function RxFeSpecularLighting<O = void>(id: string, args: any, render: Render<SVGFESpecularLightingElement, O>, superRender?: SuperRender<O, SVGFESpecularLightingElement>): Declaration<SVGFESpecularLightingElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.feSpecularLighting) }
export function RxFeSpotLight<O = void>(id: string, args: any, render: Render<SVGFESpotLightElement, O>, superRender?: SuperRender<O, SVGFESpotLightElement>): Declaration<SVGFESpotLightElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.feSpotLight) }
export function RxFeTile<O = void>(id: string, args: any, render: Render<SVGFETileElement, O>, superRender?: SuperRender<O, SVGFETileElement>): Declaration<SVGFETileElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.feTile) }
export function RxFeTurbulence<O = void>(id: string, args: any, render: Render<SVGFETurbulenceElement, O>, superRender?: SuperRender<O, SVGFETurbulenceElement>): Declaration<SVGFETurbulenceElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.feTurbulence) }
export function RxFilter<O = void>(id: string, args: any, render: Render<SVGFilterElement, O>, superRender?: SuperRender<O, SVGFilterElement>): Declaration<SVGFilterElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.filter) }
export function RxForeignObject<O = void>(id: string, args: any, render: Render<SVGForeignObjectElement, O>, superRender?: SuperRender<O, SVGForeignObjectElement>): Declaration<SVGForeignObjectElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.foreignObject) }
export function RxG<O = void>(id: string, args: any, render: Render<SVGGElement, O>, superRender?: SuperRender<O, SVGGElement>): Declaration<SVGGElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.g) }
export function RxSvgImage<O = void>(id: string, args: any, render: Render<SVGImageElement, O>, superRender?: SuperRender<O, SVGImageElement>): Declaration<SVGImageElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.image) }
export function RxLine<O = void>(id: string, args: any, render: Render<SVGLineElement, O>, superRender?: SuperRender<O, SVGLineElement>): Declaration<SVGLineElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.line) }
export function RxLinearGradient<O = void>(id: string, args: any, render: Render<SVGLinearGradientElement, O>, superRender?: SuperRender<O, SVGLinearGradientElement>): Declaration<SVGLinearGradientElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.linearGradient) }
export function RxMarker<O = void>(id: string, args: any, render: Render<SVGMarkerElement, O>, superRender?: SuperRender<O, SVGMarkerElement>): Declaration<SVGMarkerElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.marker) }
export function RxMask<O = void>(id: string, args: any, render: Render<SVGMaskElement, O>, superRender?: SuperRender<O, SVGMaskElement>): Declaration<SVGMaskElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.mask) }
export function RxMetadata<O = void>(id: string, args: any, render: Render<SVGMetadataElement, O>, superRender?: SuperRender<O, SVGMetadataElement>): Declaration<SVGMetadataElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.metadata) }
export function RxMPath<O = void>(id: string, args: any, render: Render<SVGElement, O>, superRender?: SuperRender<O, SVGElement>): Declaration<SVGElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.mpath) }
export function RxPath<O = void>(id: string, args: any, render: Render<SVGPathElement, O>, superRender?: SuperRender<O, SVGPathElement>): Declaration<SVGPathElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.path) }
export function RxPattern<O = void>(id: string, args: any, render: Render<SVGPatternElement, O>, superRender?: SuperRender<O, SVGPatternElement>): Declaration<SVGPatternElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.pattern) }
export function RxPolygon<O = void>(id: string, args: any, render: Render<SVGPolygonElement, O>, superRender?: SuperRender<O, SVGPolygonElement>): Declaration<SVGPolygonElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.polygon) }
export function RxPolyline<O = void>(id: string, args: any, render: Render<SVGPolylineElement, O>, superRender?: SuperRender<O, SVGPolylineElement>): Declaration<SVGPolylineElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.polyline) }
export function RxRadialGradient<O = void>(id: string, args: any, render: Render<SVGRadialGradientElement, O>, superRender?: SuperRender<O, SVGRadialGradientElement>): Declaration<SVGRadialGradientElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.radialGradient) }
export function RxRect<O = void>(id: string, args: any, render: Render<SVGRectElement, O>, superRender?: SuperRender<O, SVGRectElement>): Declaration<SVGRectElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.rect) }
export function RxStop<O = void>(id: string, args: any, render: Render<SVGStopElement, O>, superRender?: SuperRender<O, SVGStopElement>): Declaration<SVGStopElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.stop) }
export function RxSvgSwitch<O = void>(id: string, args: any, render: Render<SVGSwitchElement, O>, superRender?: SuperRender<O, SVGSwitchElement>): Declaration<SVGSwitchElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.switch) }
export function RxSymbol<O = void>(id: string, args: any, render: Render<SVGSymbolElement, O>, superRender?: SuperRender<O, SVGSymbolElement>): Declaration<SVGSymbolElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.symbol) }
export function RxText<O = void>(id: string, args: any, render: Render<SVGTextElement, O>, superRender?: SuperRender<O, SVGTextElement>): Declaration<SVGTextElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.text) }
export function RxTextPath<O = void>(id: string, args: any, render: Render<SVGTextPathElement, O>, superRender?: SuperRender<O, SVGTextPathElement>): Declaration<SVGTextPathElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.textPath) }
export function RxTSpan<O = void>(id: string, args: any, render: Render<SVGTSpanElement, O>, superRender?: SuperRender<O, SVGTSpanElement>): Declaration<SVGTSpanElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.tspan) }
export function RxUse<O = void>(id: string, args: any, render: Render<SVGUseElement, O>, superRender?: SuperRender<O, SVGUseElement>): Declaration<SVGUseElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.use) }
export function RxView<O = void>(id: string, args: any, render: Render<SVGViewElement, O>, superRender?: SuperRender<O, SVGViewElement>): Declaration<SVGViewElement, O> { return RxDom.declare(id, args, render, superRender, SvgTags.view) }

export function Svg(id: string, render: Render<SVGSVGElement> = nullRender): Declaration<SVGSVGElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.svg) }
export function SvgA(id: string, render: Render<SVGAElement> = nullRender): Declaration<SVGAElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.a) }
export function Animate(id: string, render: Render<SVGAnimateElement> = nullRender): Declaration<SVGAnimateElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.animate) }
export function AnimateMotion(id: string, render: Render<SVGAnimateMotionElement> = nullRender): Declaration<SVGAnimateMotionElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.animateMotion) }
export function AnimateTransform(id: string, render: Render<SVGAnimateTransformElement> = nullRender): Declaration<SVGAnimateTransformElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.animateTransform) }
export function Circle(id: string, render: Render<SVGCircleElement> = nullRender): Declaration<SVGCircleElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.circle) }
export function ClipPath(id: string, render: Render<SVGClipPathElement> = nullRender): Declaration<SVGClipPathElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.clipPath) }
export function Defs(id: string, render: Render<SVGDefsElement> = nullRender): Declaration<SVGDefsElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.defs) }
export function Desc(id: string, render: Render<SVGDescElement> = nullRender): Declaration<SVGDescElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.desc) }
export function Ellipse(id: string, render: Render<SVGEllipseElement> = nullRender): Declaration<SVGEllipseElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.ellipse) }
export function FeBlend(id: string, render: Render<SVGFEBlendElement> = nullRender): Declaration<SVGFEBlendElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.feBlend) }
export function FeColorMatrix(id: string, render: Render<SVGFEColorMatrixElement> = nullRender): Declaration<SVGFEColorMatrixElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.feColorMatrix) }
export function FeComponentTransfer(id: string, render: Render<SVGFEComponentTransferElement> = nullRender): Declaration<SVGFEComponentTransferElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.feComponentTransfer) }
export function FeComposite(id: string, render: Render<SVGFECompositeElement> = nullRender): Declaration<SVGFECompositeElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.feComposite) }
export function FeConvolveMatrix(id: string, render: Render<SVGFEConvolveMatrixElement> = nullRender): Declaration<SVGFEConvolveMatrixElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.feConvolveMatrix) }
export function FeDiffuseLighting(id: string, render: Render<SVGFEDiffuseLightingElement> = nullRender): Declaration<SVGFEDiffuseLightingElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.feDiffuseLighting) }
export function FeDisplacementMap(id: string, render: Render<SVGFEDisplacementMapElement> = nullRender): Declaration<SVGFEDisplacementMapElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.feDisplacementMap) }
export function FeDistantLight(id: string, render: Render<SVGFEDistantLightElement> = nullRender): Declaration<SVGFEDistantLightElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.feDistantLight) }
export function FeDropShadow(id: string, render: Render<SVGFEDropShadowElement> = nullRender): Declaration<SVGFEDropShadowElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.feDropShadow) }
export function FeFlood(id: string, render: Render<SVGFEFloodElement> = nullRender): Declaration<SVGFEFloodElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.feFlood) }
export function FeFuncA(id: string, render: Render<SVGFEFuncAElement> = nullRender): Declaration<SVGFEFuncAElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.feFuncA) }
export function FeFuncB(id: string, render: Render<SVGFEFuncBElement> = nullRender): Declaration<SVGFEFuncBElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.feFuncB) }
export function FeFuncG(id: string, render: Render<SVGFEFuncGElement> = nullRender): Declaration<SVGFEFuncGElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.feFuncG) }
export function FeFuncR(id: string, render: Render<SVGFEFuncRElement> = nullRender): Declaration<SVGFEFuncRElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.feFuncR) }
export function FeGaussianBlur(id: string, render: Render<SVGFEGaussianBlurElement> = nullRender): Declaration<SVGFEGaussianBlurElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.feGaussianBlur) }
export function FeImage(id: string, render: Render<SVGFEImageElement> = nullRender): Declaration<SVGFEImageElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.feImage) }
export function FeMerge(id: string, render: Render<SVGFEMergeElement> = nullRender): Declaration<SVGFEMergeElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.feMerge) }
export function FeMergeNode(id: string, render: Render<SVGFEMergeNodeElement> = nullRender): Declaration<SVGFEMergeNodeElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.feMergeNode) }
export function FeMorphology(id: string, render: Render<SVGFEMorphologyElement> = nullRender): Declaration<SVGFEMorphologyElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.feMorphology) }
export function FeOffset(id: string, render: Render<SVGFEOffsetElement> = nullRender): Declaration<SVGFEOffsetElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.feOffset) }
export function FePointLight(id: string, render: Render<SVGFEPointLightElement> = nullRender): Declaration<SVGFEPointLightElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.fePointLight) }
export function FeSpecularLighting(id: string, render: Render<SVGFESpecularLightingElement> = nullRender): Declaration<SVGFESpecularLightingElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.feSpecularLighting) }
export function FeSpotLight(id: string, render: Render<SVGFESpotLightElement> = nullRender): Declaration<SVGFESpotLightElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.feSpotLight) }
export function FeTile(id: string, render: Render<SVGFETileElement> = nullRender): Declaration<SVGFETileElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.feTile) }
export function FeTurbulence(id: string, render: Render<SVGFETurbulenceElement> = nullRender): Declaration<SVGFETurbulenceElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.feTurbulence) }
export function Filter(id: string, render: Render<SVGFilterElement> = nullRender): Declaration<SVGFilterElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.filter) }
export function ForeignObject(id: string, render: Render<SVGForeignObjectElement> = nullRender): Declaration<SVGForeignObjectElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.foreignObject) }
export function G(id: string, render: Render<SVGGElement> = nullRender): Declaration<SVGGElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.g) }
export function SvgImage(id: string, render: Render<SVGImageElement> = nullRender): Declaration<SVGImageElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.image) }
export function Line(id: string, render: Render<SVGLineElement> = nullRender): Declaration<SVGLineElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.line) }
export function LinearGradient(id: string, render: Render<SVGLinearGradientElement> = nullRender): Declaration<SVGLinearGradientElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.linearGradient) }
export function Marker(id: string, render: Render<SVGMarkerElement> = nullRender): Declaration<SVGMarkerElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.marker) }
export function Mask(id: string, render: Render<SVGMaskElement> = nullRender): Declaration<SVGMaskElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.mask) }
export function MetaData(id: string, render: Render<SVGMetadataElement> = nullRender): Declaration<SVGMetadataElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.metadata) }
export function MPath(id: string, render: Render<SVGElement> = nullRender): Declaration<SVGElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.mpath) }
export function Path(id: string, render: Render<SVGPathElement> = nullRender): Declaration<SVGPathElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.path) }
export function Pattern(id: string, render: Render<SVGPatternElement> = nullRender): Declaration<SVGPatternElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.pattern) }
export function Polygon(id: string, render: Render<SVGPolygonElement> = nullRender): Declaration<SVGPolygonElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.polygon) }
export function PolyLine(id: string, render: Render<SVGPolylineElement> = nullRender): Declaration<SVGPolylineElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.polyline) }
export function RadialGradient(id: string, render: Render<SVGRadialGradientElement> = nullRender): Declaration<SVGRadialGradientElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.radialGradient) }
export function Rect(id: string, render: Render<SVGRectElement> = nullRender): Declaration<SVGRectElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.rect) }
export function Stop(id: string, render: Render<SVGStopElement> = nullRender): Declaration<SVGStopElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.stop) }
export function SvgSwitch(id: string, render: Render<SVGSwitchElement> = nullRender): Declaration<SVGSwitchElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.switch) }
export function Symbol(id: string, render: Render<SVGSymbolElement> = nullRender): Declaration<SVGSymbolElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.symbol) }
export function Text(id: string, render: Render<SVGTextElement> = nullRender): Declaration<SVGTextElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.text) }
export function TextPath(id: string, render: Render<SVGTextPathElement> = nullRender): Declaration<SVGTextPathElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.textPath) }
export function TSpan(id: string, render: Render<SVGTSpanElement> = nullRender): Declaration<SVGTSpanElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.tspan) }
export function Use(id: string, render: Render<SVGUseElement> = nullRender): Declaration<SVGUseElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.use) }
export function View(id: string, render: Render<SVGViewElement> = nullRender): Declaration<SVGViewElement> { return RxDom.declare(id, RefreshParent, render, undefined, SvgTags.view) }

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
