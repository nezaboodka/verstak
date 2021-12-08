// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { RxDom, Render, NodeInfo, RefreshParent, SuperRender } from '../core/api'
import { HtmlRtti, SvgRtti } from './HtmlRtti'

export function HtmlBody(id: string, args: any, render: Render<HTMLElement>, priority?: number): NodeInfo<HTMLElement> {
  return RxDom.Node(id, args, render, undefined, undefined, {
    name: id,
    unordered: false,
    initialize(node: NodeInfo<HTMLElement, any>, sibling?: NodeInfo): void {
      const native = global.document.body
      native.id = node.id
      node.instance!.native = native
    },
  })
}

function nullRender(e: Element): void { /* nop */ }
export function RxA<O = void>(id: string, args: any, render: Render<HTMLAnchorElement, O>, superRender?: SuperRender<O, HTMLAnchorElement>, priority?: number): NodeInfo<HTMLAnchorElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.a) }
export function RxAbbr<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.abbr) }
export function RxAddress<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.address) }
export function RxArea<O = void>(id: string, args: any, render: Render<HTMLAreaElement, O>, superRender?: SuperRender<O, HTMLAreaElement>, priority?: number): NodeInfo<HTMLAreaElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.area) }
export function RxArticle<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.article) }
export function RxAside<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.aside) }
export function RxAudio<O = void>(id: string, args: any, render: Render<HTMLAudioElement, O>, superRender?: SuperRender<O, HTMLAudioElement>, priority?: number): NodeInfo<HTMLAudioElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.audio) }
export function RxB<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.b) }
export function RxBase<O = void>(id: string, args: any, render: Render<HTMLBaseElement, O>, superRender?: SuperRender<O, HTMLBaseElement>, priority?: number): NodeInfo<HTMLBaseElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.base) }
export function RxBdi<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.bdi) }
export function RxBdo<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.bdo) }
export function RxBig<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.big) }
export function RxBlockQuote<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.blockquote) }
export function RxBody<O = void>(id: string, args: any, render: Render<HTMLBodyElement, O>, superRender?: SuperRender<O, HTMLBodyElement>, priority?: number): NodeInfo<HTMLBodyElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.body) }
export function RxBR<O = void>(id: string, args: any, render: Render<HTMLBRElement, O>, superRender?: SuperRender<O, HTMLBRElement>, priority?: number): NodeInfo<HTMLBRElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.br) }
export function RxButton<O = void>(id: string, args: any, render: Render<HTMLButtonElement, O>, superRender?: SuperRender<O, HTMLButtonElement>, priority?: number): NodeInfo<HTMLButtonElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.button) }
export function RxCanvas<O = void>(id: string, args: any, render: Render<HTMLCanvasElement, O>, superRender?: SuperRender<O, HTMLCanvasElement>, priority?: number): NodeInfo<HTMLCanvasElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.canvas) }
export function RxCaption<O = void>(id: string, args: any, render: Render<HTMLTableCaptionElement, O>, superRender?: SuperRender<O, HTMLTableCaptionElement>, priority?: number): NodeInfo<HTMLTableCaptionElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.caption) }
export function RxCite<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.cite) }
export function RxCode<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.code) }
export function RxCol<O = void>(id: string, args: any, render: Render<HTMLTableColElement, O>, superRender?: SuperRender<O, HTMLTableColElement>, priority?: number): NodeInfo<HTMLTableColElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.col) }
export function RxColGroup<O = void>(id: string, args: any, render: Render<HTMLTableColElement, O>, superRender?: SuperRender<O, HTMLTableColElement>, priority?: number): NodeInfo<HTMLTableColElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.colgroup) }
export function RxData<O = void>(id: string, args: any, render: Render<HTMLDataElement, O>, superRender?: SuperRender<O, HTMLDataElement>, priority?: number): NodeInfo<HTMLDataElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.data) }
export function RxDataList<O = void>(id: string, args: any, render: Render<HTMLDataListElement, O>, superRender?: SuperRender<O, HTMLDataListElement>, priority?: number): NodeInfo<HTMLDataListElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.datalist) }
export function RxDD<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.dd) }
export function RxDel<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.del) }
export function RxDetails<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.details) }
export function RxDfn<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.dfn) }
export function RxDialog<O = void>(id: string, args: any, render: Render<HTMLDialogElement, O>, superRender?: SuperRender<O, HTMLDialogElement>, priority?: number): NodeInfo<HTMLDialogElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.dialog) }
export function RxDiv<O = void>(id: string, args: any, render: Render<HTMLDivElement, O>, superRender?: SuperRender<O, HTMLDivElement>, priority?: number): NodeInfo<HTMLDivElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.div) }
export function RxDL<O = void>(id: string, args: any, render: Render<HTMLDListElement, O>, superRender?: SuperRender<O, HTMLDListElement>, priority?: number): NodeInfo<HTMLDListElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.dl) }
export function RxDT<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.dt) }
export function RxEM<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.em) }
export function RxEmbed<O = void>(id: string, args: any, render: Render<HTMLEmbedElement, O>, superRender?: SuperRender<O, HTMLEmbedElement>, priority?: number): NodeInfo<HTMLEmbedElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.embed) }
export function RxFieldSet<O = void>(id: string, args: any, render: Render<HTMLFieldSetElement, O>, superRender?: SuperRender<O, HTMLFieldSetElement>, priority?: number): NodeInfo<HTMLFieldSetElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.fieldset) }
export function RxFigCaption<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.figcaption) }
export function RxFigure<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.figure) }
export function RxFooter<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.footer) }
export function RxForm<O = void>(id: string, args: any, render: Render<HTMLFormElement, O>, superRender?: SuperRender<O, HTMLFormElement>, priority?: number): NodeInfo<HTMLFormElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.form) }
export function RxH1<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, superRender?: SuperRender<O, HTMLHeadingElement>, priority?: number): NodeInfo<HTMLHeadingElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.h1) }
export function RxH2<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, superRender?: SuperRender<O, HTMLHeadingElement>, priority?: number): NodeInfo<HTMLHeadingElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.h2) }
export function RxH3<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, superRender?: SuperRender<O, HTMLHeadingElement>, priority?: number): NodeInfo<HTMLHeadingElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.h3) }
export function RxH4<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, superRender?: SuperRender<O, HTMLHeadingElement>, priority?: number): NodeInfo<HTMLHeadingElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.h4) }
export function RxH5<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, superRender?: SuperRender<O, HTMLHeadingElement>, priority?: number): NodeInfo<HTMLHeadingElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.h5) }
export function RxH6<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, superRender?: SuperRender<O, HTMLHeadingElement>, priority?: number): NodeInfo<HTMLHeadingElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.h6) }
export function RxHead<O = void>(id: string, args: any, render: Render<HTMLHeadElement, O>, superRender?: SuperRender<O, HTMLHeadElement>, priority?: number): NodeInfo<HTMLHeadElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.head) }
export function RxHeader<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.header) }
export function RxHGroup<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.hgroup) }
export function RxHR<O = void>(id: string, args: any, render: Render<HTMLHRElement, O>, superRender?: SuperRender<O, HTMLHRElement>, priority?: number): NodeInfo<HTMLHRElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.hr) }
export function RxHtml<O = void>(id: string, args: any, render: Render<HTMLHtmlElement, O>, superRender?: SuperRender<O, HTMLHtmlElement>, priority?: number): NodeInfo<HTMLHtmlElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.html) }
export function RxI<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.i) }
export function RxIFrame<O = void>(id: string, args: any, render: Render<HTMLIFrameElement, O>, superRender?: SuperRender<O, HTMLIFrameElement>, priority?: number): NodeInfo<HTMLIFrameElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.iframe) }
export function RxImg<O = void>(id: string, args: any, render: Render<HTMLImageElement, O>, superRender?: SuperRender<O, HTMLImageElement>, priority?: number): NodeInfo<HTMLImageElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.img) }
export function RxInput<O = void>(id: string, args: any, render: Render<HTMLInputElement, O>, superRender?: SuperRender<O, HTMLInputElement>, priority?: number): NodeInfo<HTMLInputElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.input) }
export function RxIns<O = void>(id: string, args: any, render: Render<HTMLModElement, O>, superRender?: SuperRender<O, HTMLModElement>, priority?: number): NodeInfo<HTMLModElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.ins) }
export function RxKbd<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.kbd) }
export function RxKeygen<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.keygen) }
export function RxLabel<O = void>(id: string, args: any, render: Render<HTMLLabelElement, O>, superRender?: SuperRender<O, HTMLLabelElement>, priority?: number): NodeInfo<HTMLLabelElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.label) }
export function RxLegend<O = void>(id: string, args: any, render: Render<HTMLLegendElement, O>, superRender?: SuperRender<O, HTMLLegendElement>, priority?: number): NodeInfo<HTMLLegendElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.legend) }
export function RxLI<O = void>(id: string, args: any, render: Render<HTMLLIElement, O>, superRender?: SuperRender<O, HTMLLIElement>, priority?: number): NodeInfo<HTMLLIElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.li) }
export function RxLink<O = void>(id: string, args: any, render: Render<HTMLLinkElement, O>, superRender?: SuperRender<O, HTMLLinkElement>, priority?: number): NodeInfo<HTMLLinkElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.link) }
export function RxMain<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.main) }
export function RxMap<O = void>(id: string, args: any, render: Render<HTMLMapElement, O>, superRender?: SuperRender<O, HTMLMapElement>, priority?: number): NodeInfo<HTMLMapElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.map) }
export function RxMark<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.mark) }
export function RxMenu<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.menu) }
export function RxMenuItem<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.menuitem) }
export function RxMeta<O = void>(id: string, args: any, render: Render<HTMLMetaElement, O>, superRender?: SuperRender<O, HTMLMetaElement>, priority?: number): NodeInfo<HTMLMetaElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.meta) }
export function RxMeter<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.meter) }
export function RxNav<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.nav) }
export function RxNoIndex<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.noindex) }
export function RxNoScript<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.noscript) }
export function RxObj<O = void>(id: string, args: any, render: Render<HTMLObjectElement, O>, superRender?: SuperRender<O, HTMLObjectElement>, priority?: number): NodeInfo<HTMLObjectElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.object) }
export function RxOL<O = void>(id: string, args: any, render: Render<HTMLOListElement, O>, superRender?: SuperRender<O, HTMLOListElement>, priority?: number): NodeInfo<HTMLOListElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.ol) }
export function RxOptGroup<O = void>(id: string, args: any, render: Render<HTMLOptGroupElement, O>, superRender?: SuperRender<O, HTMLOptGroupElement>, priority?: number): NodeInfo<HTMLOptGroupElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.optgroup) }
export function RxOption<O = void>(id: string, args: any, render: Render<HTMLOptionElement, O>, superRender?: SuperRender<O, HTMLOptionElement>, priority?: number): NodeInfo<HTMLOptionElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.option) }
export function RxOutput<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.output) }
export function RxP<O = void>(id: string, args: any, render: Render<HTMLParagraphElement, O>, superRender?: SuperRender<O, HTMLParagraphElement>, priority?: number): NodeInfo<HTMLParagraphElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.p) }
export function RxParam<O = void>(id: string, args: any, render: Render<HTMLParamElement, O>, superRender?: SuperRender<O, HTMLParamElement>, priority?: number): NodeInfo<HTMLParamElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.param) }
export function RxPicture<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.picture) }
export function RxPre<O = void>(id: string, args: any, render: Render<HTMLPreElement, O>, superRender?: SuperRender<O, HTMLPreElement>, priority?: number): NodeInfo<HTMLPreElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.pre) }
export function RxProgress<O = void>(id: string, args: any, render: Render<HTMLProgressElement, O>, superRender?: SuperRender<O, HTMLProgressElement>, priority?: number): NodeInfo<HTMLProgressElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.progress) }
export function RxQ<O = void>(id: string, args: any, render: Render<HTMLQuoteElement, O>, superRender?: SuperRender<O, HTMLQuoteElement>, priority?: number): NodeInfo<HTMLQuoteElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.q) }
export function RxRP<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.rp) }
export function RxRT<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.rt) }
export function RxRuby<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.ruby) }
export function RxS<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.s) }
export function RxSamp<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.samp) }
export function RxScript<O = void>(id: string, args: any, render: Render<HTMLScriptElement, O>, superRender?: SuperRender<O, HTMLScriptElement>, priority?: number): NodeInfo<HTMLScriptElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.script) }
export function RxSection<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.section) }
export function RxSelect<O = void>(id: string, args: any, render: Render<HTMLSelectElement, O>, superRender?: SuperRender<O, HTMLSelectElement>, priority?: number): NodeInfo<HTMLSelectElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.select) }
export function RxSmall<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.small) }
export function RxSource<O = void>(id: string, args: any, render: Render<HTMLSourceElement, O>, superRender?: SuperRender<O, HTMLSourceElement>, priority?: number): NodeInfo<HTMLSourceElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.source) }
export function RxSpan<O = void>(id: string, args: any, render: Render<HTMLSpanElement, O>, superRender?: SuperRender<O, HTMLSpanElement>, priority?: number): NodeInfo<HTMLSpanElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.span) }
export function RxStrong<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.strong) }
export function RxStyle<O = void>(id: string, args: any, render: Render<HTMLStyleElement, O>, superRender?: SuperRender<O, HTMLStyleElement>, priority?: number): NodeInfo<HTMLStyleElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.style) }
export function RxSub<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.sub) }
export function RxSummary<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.summary) }
export function RxSup<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.sup) }
export function RxTable<O = void>(id: string, args: any, render: Render<HTMLTableElement, O>, superRender?: SuperRender<O, HTMLTableElement>, priority?: number): NodeInfo<HTMLTableElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.table) }
export function RxTemplate<O = void>(id: string, args: any, render: Render<HTMLTemplateElement, O>, superRender?: SuperRender<O, HTMLTemplateElement>, priority?: number): NodeInfo<HTMLTemplateElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.template) }
export function RxTBody<O = void>(id: string, args: any, render: Render<HTMLTableSectionElement, O>, superRender?: SuperRender<O, HTMLTableSectionElement>, priority?: number): NodeInfo<HTMLTableSectionElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.tbody) }
export function RxTD<O = void>(id: string, args: any, render: Render<HTMLTableCellElement, O>, superRender?: SuperRender<O, HTMLTableCellElement>, priority?: number): NodeInfo<HTMLTableCellElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.td) }
export function RxTextArea<O = void>(id: string, args: any, render: Render<HTMLTextAreaElement, O>, superRender?: SuperRender<O, HTMLTextAreaElement>, priority?: number): NodeInfo<HTMLTextAreaElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.textarea) }
export function RxTFoot<O = void>(id: string, args: any, render: Render<HTMLTableSectionElement, O>, superRender?: SuperRender<O, HTMLTableSectionElement>, priority?: number): NodeInfo<HTMLTableSectionElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.tfoot) }
export function RxTH<O = void>(id: string, args: any, render: Render<HTMLTableCellElement, O>, superRender?: SuperRender<O, HTMLTableCellElement>, priority?: number): NodeInfo<HTMLTableHeaderCellElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.th) }
export function RxTHead<O = void>(id: string, args: any, render: Render<HTMLTableSectionElement, O>, superRender?: SuperRender<O, HTMLTableSectionElement>, priority?: number): NodeInfo<HTMLTableSectionElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.thead) }
export function RxTime<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.time) }
export function RxTitle<O = void>(id: string, args: any, render: Render<HTMLTitleElement, O>, superRender?: SuperRender<O, HTMLTitleElement>, priority?: number): NodeInfo<HTMLTitleElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.title) }
export function RxTR<O = void>(id: string, args: any, render: Render<HTMLTableRowElement, O>, superRender?: SuperRender<O, HTMLTableRowElement>, priority?: number): NodeInfo<HTMLTableRowElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.tr) }
export function RxTrack<O = void>(id: string, args: any, render: Render<HTMLTrackElement, O>, superRender?: SuperRender<O, HTMLTrackElement>, priority?: number): NodeInfo<HTMLTrackElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.track) }
export function RxU<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.u) }
export function RxUL<O = void>(id: string, args: any, render: Render<HTMLUListElement, O>, superRender?: SuperRender<O, HTMLUListElement>, priority?: number): NodeInfo<HTMLUListElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.ul) }
export function RxVar<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.var) }
export function RxVideo<O = void>(id: string, args: any, render: Render<HTMLVideoElement, O>, superRender?: SuperRender<O, HTMLVideoElement>, priority?: number): NodeInfo<HTMLVideoElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.video) }
export function RxWbr<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number): NodeInfo<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.wbr) }

export function A(id: string, render: Render<HTMLAnchorElement> = nullRender, priority?: number): NodeInfo<HTMLAnchorElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.a) }
export function Abbr(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.abbr) }
export function Address(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.address) }
export function Area(id: string, render: Render<HTMLAreaElement> = nullRender, priority?: number): NodeInfo<HTMLAreaElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.area) }
export function Article(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.article) }
export function Aside(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.aside) }
export function Audio(id: string, render: Render<HTMLAudioElement> = nullRender, priority?: number): NodeInfo<HTMLAudioElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.audio) }
export function B(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.b) }
export function Base(id: string, render: Render<HTMLBaseElement> = nullRender, priority?: number): NodeInfo<HTMLBaseElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.base) }
export function Bdi(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.bdi) }
export function Bdo(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.bdo) }
export function Big(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.big) }
export function BlockQuote(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.blockquote) }
export function Body(id: string, render: Render<HTMLBodyElement> = nullRender, priority?: number): NodeInfo<HTMLBodyElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.body) }
export function BR(id: string, render: Render<HTMLBRElement> = nullRender, priority?: number): NodeInfo<HTMLBRElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.br) }
export function Button(id: string, render: Render<HTMLButtonElement> = nullRender, priority?: number): NodeInfo<HTMLButtonElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.button) }
export function Canvas(id: string, render: Render<HTMLCanvasElement> = nullRender, priority?: number): NodeInfo<HTMLCanvasElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.canvas) }
export function Caption(id: string, render: Render<HTMLTableCaptionElement> = nullRender, priority?: number): NodeInfo<HTMLTableCaptionElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.caption) }
export function Cite(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.cite) }
export function Code(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.code) }
export function Col(id: string, render: Render<HTMLTableColElement> = nullRender, priority?: number): NodeInfo<HTMLTableColElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.col) }
export function ColGroup(id: string, render: Render<HTMLTableColElement> = nullRender, priority?: number): NodeInfo<HTMLTableColElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.colgroup) }
export function Data(id: string, render: Render<HTMLDataElement> = nullRender, priority?: number): NodeInfo<HTMLDataElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.data) }
export function DataList(id: string, render: Render<HTMLDataListElement> = nullRender, priority?: number): NodeInfo<HTMLDataListElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.datalist) }
export function DD(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.dd) }
export function Del(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.del) }
export function Details(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.details) }
export function Dfn(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.dfn) }
export function Dialog(id: string, render: Render<HTMLDialogElement> = nullRender, priority?: number): NodeInfo<HTMLDialogElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.dialog) }
export function Div(id: string, render: Render<HTMLDivElement> = nullRender, priority?: number): NodeInfo<HTMLDivElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.div) }
export function DL(id: string, render: Render<HTMLDListElement> = nullRender, priority?: number): NodeInfo<HTMLDListElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.dl) }
export function DT(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.dt) }
export function EM(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.em) }
export function Embed(id: string, render: Render<HTMLEmbedElement> = nullRender, priority?: number): NodeInfo<HTMLEmbedElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.embed) }
export function FieldSet(id: string, render: Render<HTMLFieldSetElement> = nullRender, priority?: number): NodeInfo<HTMLFieldSetElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.fieldset) }
export function FigCaption(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.figcaption) }
export function Figure(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.figure) }
export function Footer(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.footer) }
export function Form(id: string, render: Render<HTMLFormElement> = nullRender, priority?: number): NodeInfo<HTMLFormElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.form) }
export function H1(id: string, render: Render<HTMLHeadingElement> = nullRender, priority?: number): NodeInfo<HTMLHeadingElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.h1) }
export function H2(id: string, render: Render<HTMLHeadingElement> = nullRender, priority?: number): NodeInfo<HTMLHeadingElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.h2) }
export function H3(id: string, render: Render<HTMLHeadingElement> = nullRender, priority?: number): NodeInfo<HTMLHeadingElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.h3) }
export function H4(id: string, render: Render<HTMLHeadingElement> = nullRender, priority?: number): NodeInfo<HTMLHeadingElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.h4) }
export function H5(id: string, render: Render<HTMLHeadingElement> = nullRender, priority?: number): NodeInfo<HTMLHeadingElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.h5) }
export function H6(id: string, render: Render<HTMLHeadingElement> = nullRender, priority?: number): NodeInfo<HTMLHeadingElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.h6) }
export function Head(id: string, render: Render<HTMLHeadElement> = nullRender, priority?: number): NodeInfo<HTMLHeadElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.head) }
export function Header(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.header) }
export function HGroup(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.hgroup) }
export function HR(id: string, render: Render<HTMLHRElement> = nullRender, priority?: number): NodeInfo<HTMLHRElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.hr) }
export function Html(id: string, render: Render<HTMLHtmlElement> = nullRender, priority?: number): NodeInfo<HTMLHtmlElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.html) }
export function I(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.i) }
export function IFrame(id: string, render: Render<HTMLIFrameElement> = nullRender, priority?: number): NodeInfo<HTMLIFrameElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.iframe) }
export function Img(id: string, render: Render<HTMLImageElement> = nullRender, priority?: number): NodeInfo<HTMLImageElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.img) }
export function Input(id: string, render: Render<HTMLInputElement> = nullRender, priority?: number): NodeInfo<HTMLInputElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.input) }
export function Ins(id: string, render: Render<HTMLModElement> = nullRender, priority?: number): NodeInfo<HTMLModElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.ins) }
export function Kbd(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.kbd) }
export function KeyGen(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.keygen) }
export function Label(id: string, render: Render<HTMLLabelElement> = nullRender, priority?: number): NodeInfo<HTMLLabelElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.label) }
export function Legend(id: string, render: Render<HTMLLegendElement> = nullRender, priority?: number): NodeInfo<HTMLLegendElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.legend) }
export function LI(id: string, render: Render<HTMLLIElement> = nullRender, priority?: number): NodeInfo<HTMLLIElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.li) }
export function Link(id: string, render: Render<HTMLLinkElement> = nullRender, priority?: number): NodeInfo<HTMLLinkElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.link) }
export function Main(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.main) }
export function Map(id: string, render: Render<HTMLMapElement> = nullRender, priority?: number): NodeInfo<HTMLMapElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.map) }
export function Mark(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.mark) }
export function Menu(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.menu) }
export function MenuItem(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.menuitem) }
export function Meta(id: string, render: Render<HTMLMetaElement> = nullRender, priority?: number): NodeInfo<HTMLMetaElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.meta) }
export function Meter(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.meter) }
export function Nav(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.nav) }
export function NoIndex(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.noindex) }
export function NoScript(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.noscript) }
export function Obj(id: string, render: Render<HTMLObjectElement> = nullRender, priority?: number): NodeInfo<HTMLObjectElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.object) }
export function OL(id: string, render: Render<HTMLOListElement> = nullRender, priority?: number): NodeInfo<HTMLOListElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.ol) }
export function OptGroup(id: string, render: Render<HTMLOptGroupElement> = nullRender, priority?: number): NodeInfo<HTMLOptGroupElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.optgroup) }
export function Option(id: string, render: Render<HTMLOptionElement> = nullRender, priority?: number): NodeInfo<HTMLOptionElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.option) }
export function Output(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.output) }
export function P(id: string, render: Render<HTMLParagraphElement> = nullRender, priority?: number): NodeInfo<HTMLParagraphElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.p) }
export function Param(id: string, render: Render<HTMLParamElement> = nullRender, priority?: number): NodeInfo<HTMLParamElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.param) }
export function Picture(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.picture) }
export function Pre(id: string, render: Render<HTMLPreElement> = nullRender, priority?: number): NodeInfo<HTMLPreElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.pre) }
export function Progress(id: string, render: Render<HTMLProgressElement> = nullRender, priority?: number): NodeInfo<HTMLProgressElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.progress) }
export function Q(id: string, render: Render<HTMLQuoteElement> = nullRender, priority?: number): NodeInfo<HTMLQuoteElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.q) }
export function RP(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.rp) }
export function RT(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.rt) }
export function Ruby(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.ruby) }
export function S(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.s) }
export function Samp(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.samp) }
export function Script(id: string, render: Render<HTMLScriptElement> = nullRender, priority?: number): NodeInfo<HTMLScriptElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.script) }
export function Section(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.section) }
export function Select(id: string, render: Render<HTMLSelectElement> = nullRender, priority?: number): NodeInfo<HTMLSelectElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.select) }
export function Small(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.small) }
export function Source(id: string, render: Render<HTMLSourceElement> = nullRender, priority?: number): NodeInfo<HTMLSourceElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.source) }
export function Span(id: string, render: Render<HTMLSpanElement> = nullRender, priority?: number): NodeInfo<HTMLSpanElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.span) }
export function Strong(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.strong) }
export function Style(id: string, render: Render<HTMLStyleElement> = nullRender, priority?: number): NodeInfo<HTMLStyleElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.style) }
export function Sub(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.sub) }
export function Summary(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.summary) }
export function Sup(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.sup) }
export function Table(id: string, render: Render<HTMLTableElement> = nullRender, priority?: number): NodeInfo<HTMLTableElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.table) }
export function Template(id: string, render: Render<HTMLTemplateElement> = nullRender, priority?: number): NodeInfo<HTMLTemplateElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.template) }
export function TBody(id: string, render: Render<HTMLTableSectionElement> = nullRender, priority?: number): NodeInfo<HTMLTableSectionElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.tbody) }
export function TD(id: string, render: Render<HTMLTableDataCellElement> = nullRender, priority?: number): NodeInfo<HTMLTableDataCellElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.td) }
export function TextArea(id: string, render: Render<HTMLTextAreaElement> = nullRender, priority?: number): NodeInfo<HTMLTextAreaElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.textarea) }
export function TFoot(id: string, render: Render<HTMLTableSectionElement> = nullRender, priority?: number): NodeInfo<HTMLTableSectionElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.tfoot) }
export function TH(id: string, render: Render<HTMLTableHeaderCellElement> = nullRender, priority?: number): NodeInfo<HTMLTableHeaderCellElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.th) }
export function THead(id: string, render: Render<HTMLTableSectionElement> = nullRender, priority?: number): NodeInfo<HTMLTableSectionElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.thead) }
export function Time(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.time) }
export function Title(id: string, render: Render<HTMLTitleElement> = nullRender, priority?: number): NodeInfo<HTMLTitleElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.title) }
export function TR(id: string, render: Render<HTMLTableRowElement> = nullRender, priority?: number): NodeInfo<HTMLTableRowElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.tr) }
export function Track(id: string, render: Render<HTMLTrackElement> = nullRender, priority?: number): NodeInfo<HTMLTrackElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.track) }
export function U(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.u) }
export function UL(id: string, render: Render<HTMLUListElement> = nullRender, priority?: number): NodeInfo<HTMLUListElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.ul) }
export function Var(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.var) }
export function Video(id: string, render: Render<HTMLVideoElement> = nullRender, priority?: number): NodeInfo<HTMLVideoElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.video) }
export function Wbr(id: string, render: Render<HTMLElement> = nullRender, priority?: number): NodeInfo<HTMLElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, HtmlTags.wbr) }

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

export function RxSvg<O = void>(id: string, args: any, render: Render<SVGSVGElement, O>, superRender?: SuperRender<O, SVGSVGElement>, priority?: number): NodeInfo<SVGSVGElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.svg) }
export function RxSvgA<O = void>(id: string, args: any, render: Render<SVGAElement, O>, superRender?: SuperRender<O, SVGAElement>, priority?: number): NodeInfo<SVGAElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.a) }
export function RxAnimate<O = void>(id: string, args: any, render: Render<SVGAnimateElement, O>, superRender?: SuperRender<O, SVGAnimateElement>, priority?: number): NodeInfo<SVGAnimateElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.animate) }
export function RxAnimateMotion<O = void>(id: string, args: any, render: Render<SVGAnimateMotionElement, O>, superRender?: SuperRender<O, SVGAnimateMotionElement>, priority?: number): NodeInfo<SVGAnimateMotionElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.animateMotion) }
export function RxAnimateTransform<O = void>(id: string, args: any, render: Render<SVGAnimateTransformElement, O>, superRender?: SuperRender<O, SVGAnimateTransformElement>, priority?: number): NodeInfo<SVGAnimateTransformElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.animateTransform) }
export function RxCircle<O = void>(id: string, args: any, render: Render<SVGCircleElement, O>, superRender?: SuperRender<O, SVGCircleElement>, priority?: number): NodeInfo<SVGCircleElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.circle) }
export function RxClipPath<O = void>(id: string, args: any, render: Render<SVGClipPathElement, O>, superRender?: SuperRender<O, SVGClipPathElement>, priority?: number): NodeInfo<SVGClipPathElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.clipPath) }
export function RxDefs<O = void>(id: string, args: any, render: Render<SVGDefsElement, O>, superRender?: SuperRender<O, SVGDefsElement>, priority?: number): NodeInfo<SVGDefsElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.defs) }
export function RxDesc<O = void>(id: string, args: any, render: Render<SVGDescElement, O>, superRender?: SuperRender<O, SVGDescElement>, priority?: number): NodeInfo<SVGDescElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.desc) }
export function RxEllipse<O = void>(id: string, args: any, render: Render<SVGEllipseElement, O>, superRender?: SuperRender<O, SVGEllipseElement>, priority?: number): NodeInfo<SVGEllipseElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.ellipse) }
export function RxFeBlend<O = void>(id: string, args: any, render: Render<SVGFEBlendElement, O>, superRender?: SuperRender<O, SVGFEBlendElement>, priority?: number): NodeInfo<SVGFEBlendElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feBlend) }
export function RxFeColorMatrix<O = void>(id: string, args: any, render: Render<SVGFEColorMatrixElement, O>, superRender?: SuperRender<O, SVGFEColorMatrixElement>, priority?: number): NodeInfo<SVGFEColorMatrixElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feColorMatrix) }
export function RxFeComponentTransfer<O = void>(id: string, args: any, render: Render<SVGFEComponentTransferElement, O>, superRender?: SuperRender<O, SVGFEComponentTransferElement>, priority?: number): NodeInfo<SVGFEComponentTransferElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feComponentTransfer) }
export function RxFeComposite<O = void>(id: string, args: any, render: Render<SVGFECompositeElement, O>, superRender?: SuperRender<O, SVGFECompositeElement>, priority?: number): NodeInfo<SVGFECompositeElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feComposite) }
export function RxFeConvolveMatrix<O = void>(id: string, args: any, render: Render<SVGFEConvolveMatrixElement, O>, superRender?: SuperRender<O, SVGFEConvolveMatrixElement>, priority?: number): NodeInfo<SVGFEConvolveMatrixElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feConvolveMatrix) }
export function RxFeDiffuseLighting<O = void>(id: string, args: any, render: Render<SVGFEDiffuseLightingElement, O>, superRender?: SuperRender<O, SVGFEDiffuseLightingElement>, priority?: number): NodeInfo<SVGFEDiffuseLightingElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feDiffuseLighting) }
export function RxFeDisplacementMap<O = void>(id: string, args: any, render: Render<SVGFEDisplacementMapElement, O>, superRender?: SuperRender<O, SVGFEDisplacementMapElement>, priority?: number): NodeInfo<SVGFEDisplacementMapElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feDisplacementMap) }
export function RxFeDistantLight<O = void>(id: string, args: any, render: Render<SVGFEDistantLightElement, O>, superRender?: SuperRender<O, SVGFEDistantLightElement>, priority?: number): NodeInfo<SVGFEDistantLightElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feDistantLight) }
export function RxFeDropShadow<O = void>(id: string, args: any, render: Render<SVGFEDropShadowElement, O>, superRender?: SuperRender<O, SVGFEDropShadowElement>, priority?: number): NodeInfo<SVGFEDropShadowElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feDropShadow) }
export function RxFeFlood<O = void>(id: string, args: any, render: Render<SVGFEFloodElement, O>, superRender?: SuperRender<O, SVGFEFloodElement>, priority?: number): NodeInfo<SVGFEFloodElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feFlood) }
export function RxFeFuncA<O = void>(id: string, args: any, render: Render<SVGFEFuncAElement, O>, superRender?: SuperRender<O, SVGFEFuncAElement>, priority?: number): NodeInfo<SVGFEFuncAElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feFuncA) }
export function RxFeFuncB<O = void>(id: string, args: any, render: Render<SVGFEFuncBElement, O>, superRender?: SuperRender<O, SVGFEFuncBElement>, priority?: number): NodeInfo<SVGFEFuncBElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feFuncB) }
export function RxFeFuncG<O = void>(id: string, args: any, render: Render<SVGFEFuncGElement, O>, superRender?: SuperRender<O, SVGFEFuncGElement>, priority?: number): NodeInfo<SVGFEFuncGElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feFuncG) }
export function RxFeFuncR<O = void>(id: string, args: any, render: Render<SVGFEFuncRElement, O>, superRender?: SuperRender<O, SVGFEFuncRElement>, priority?: number): NodeInfo<SVGFEFuncRElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feFuncR) }
export function RxFeGaussianBlur<O = void>(id: string, args: any, render: Render<SVGFEGaussianBlurElement, O>, superRender?: SuperRender<O, SVGFEGaussianBlurElement>, priority?: number): NodeInfo<SVGFEGaussianBlurElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feGaussianBlur) }
export function RxFeImage<O = void>(id: string, args: any, render: Render<SVGFEImageElement, O>, superRender?: SuperRender<O, SVGFEImageElement>, priority?: number): NodeInfo<SVGFEImageElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feImage) }
export function RxFeMerge<O = void>(id: string, args: any, render: Render<SVGFEMergeElement, O>, superRender?: SuperRender<O, SVGFEMergeElement>, priority?: number): NodeInfo<SVGFEMergeElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feMerge) }
export function RxFeMergeNode<O = void>(id: string, args: any, render: Render<SVGFEMergeNodeElement, O>, superRender?: SuperRender<O, SVGFEMergeNodeElement>, priority?: number): NodeInfo<SVGFEMergeNodeElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feMergeNode) }
export function RxFeMorphology<O = void>(id: string, args: any, render: Render<SVGFEMorphologyElement, O>, superRender?: SuperRender<O, SVGFEMorphologyElement>, priority?: number): NodeInfo<SVGFEMorphologyElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feMorphology) }
export function RxFeOffset<O = void>(id: string, args: any, render: Render<SVGFEOffsetElement, O>, superRender?: SuperRender<O, SVGFEOffsetElement>, priority?: number): NodeInfo<SVGFEOffsetElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feOffset) }
export function RxFePointLight<O = void>(id: string, args: any, render: Render<SVGFEPointLightElement, O>, superRender?: SuperRender<O, SVGFEPointLightElement>, priority?: number): NodeInfo<SVGFEPointLightElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.fePointLight) }
export function RxFeSpecularLighting<O = void>(id: string, args: any, render: Render<SVGFESpecularLightingElement, O>, superRender?: SuperRender<O, SVGFESpecularLightingElement>, priority?: number): NodeInfo<SVGFESpecularLightingElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feSpecularLighting) }
export function RxFeSpotLight<O = void>(id: string, args: any, render: Render<SVGFESpotLightElement, O>, superRender?: SuperRender<O, SVGFESpotLightElement>, priority?: number): NodeInfo<SVGFESpotLightElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feSpotLight) }
export function RxFeTile<O = void>(id: string, args: any, render: Render<SVGFETileElement, O>, superRender?: SuperRender<O, SVGFETileElement>, priority?: number): NodeInfo<SVGFETileElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feTile) }
export function RxFeTurbulence<O = void>(id: string, args: any, render: Render<SVGFETurbulenceElement, O>, superRender?: SuperRender<O, SVGFETurbulenceElement>, priority?: number): NodeInfo<SVGFETurbulenceElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feTurbulence) }
export function RxFilter<O = void>(id: string, args: any, render: Render<SVGFilterElement, O>, superRender?: SuperRender<O, SVGFilterElement>, priority?: number): NodeInfo<SVGFilterElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.filter) }
export function RxForeignObject<O = void>(id: string, args: any, render: Render<SVGForeignObjectElement, O>, superRender?: SuperRender<O, SVGForeignObjectElement>, priority?: number): NodeInfo<SVGForeignObjectElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.foreignObject) }
export function RxG<O = void>(id: string, args: any, render: Render<SVGGElement, O>, superRender?: SuperRender<O, SVGGElement>, priority?: number): NodeInfo<SVGGElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.g) }
export function RxSvgImage<O = void>(id: string, args: any, render: Render<SVGImageElement, O>, superRender?: SuperRender<O, SVGImageElement>, priority?: number): NodeInfo<SVGImageElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.image) }
export function RxLine<O = void>(id: string, args: any, render: Render<SVGLineElement, O>, superRender?: SuperRender<O, SVGLineElement>, priority?: number): NodeInfo<SVGLineElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.line) }
export function RxLinearGradient<O = void>(id: string, args: any, render: Render<SVGLinearGradientElement, O>, superRender?: SuperRender<O, SVGLinearGradientElement>, priority?: number): NodeInfo<SVGLinearGradientElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.linearGradient) }
export function RxMarker<O = void>(id: string, args: any, render: Render<SVGMarkerElement, O>, superRender?: SuperRender<O, SVGMarkerElement>, priority?: number): NodeInfo<SVGMarkerElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.marker) }
export function RxMask<O = void>(id: string, args: any, render: Render<SVGMaskElement, O>, superRender?: SuperRender<O, SVGMaskElement>, priority?: number): NodeInfo<SVGMaskElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.mask) }
export function RxMetadata<O = void>(id: string, args: any, render: Render<SVGMetadataElement, O>, superRender?: SuperRender<O, SVGMetadataElement>, priority?: number): NodeInfo<SVGMetadataElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.metadata) }
export function RxMPath<O = void>(id: string, args: any, render: Render<SVGElement, O>, superRender?: SuperRender<O, SVGElement>, priority?: number): NodeInfo<SVGElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.mpath) }
export function RxPath<O = void>(id: string, args: any, render: Render<SVGPathElement, O>, superRender?: SuperRender<O, SVGPathElement>, priority?: number): NodeInfo<SVGPathElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.path) }
export function RxPattern<O = void>(id: string, args: any, render: Render<SVGPatternElement, O>, superRender?: SuperRender<O, SVGPatternElement>, priority?: number): NodeInfo<SVGPatternElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.pattern) }
export function RxPolygon<O = void>(id: string, args: any, render: Render<SVGPolygonElement, O>, superRender?: SuperRender<O, SVGPolygonElement>, priority?: number): NodeInfo<SVGPolygonElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.polygon) }
export function RxPolyline<O = void>(id: string, args: any, render: Render<SVGPolylineElement, O>, superRender?: SuperRender<O, SVGPolylineElement>, priority?: number): NodeInfo<SVGPolylineElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.polyline) }
export function RxRadialGradient<O = void>(id: string, args: any, render: Render<SVGRadialGradientElement, O>, superRender?: SuperRender<O, SVGRadialGradientElement>, priority?: number): NodeInfo<SVGRadialGradientElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.radialGradient) }
export function RxRect<O = void>(id: string, args: any, render: Render<SVGRectElement, O>, superRender?: SuperRender<O, SVGRectElement>, priority?: number): NodeInfo<SVGRectElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.rect) }
export function RxStop<O = void>(id: string, args: any, render: Render<SVGStopElement, O>, superRender?: SuperRender<O, SVGStopElement>, priority?: number): NodeInfo<SVGStopElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.stop) }
export function RxSvgSwitch<O = void>(id: string, args: any, render: Render<SVGSwitchElement, O>, superRender?: SuperRender<O, SVGSwitchElement>, priority?: number): NodeInfo<SVGSwitchElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.switch) }
export function RxSymbol<O = void>(id: string, args: any, render: Render<SVGSymbolElement, O>, superRender?: SuperRender<O, SVGSymbolElement>, priority?: number): NodeInfo<SVGSymbolElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.symbol) }
export function RxText<O = void>(id: string, args: any, render: Render<SVGTextElement, O>, superRender?: SuperRender<O, SVGTextElement>, priority?: number): NodeInfo<SVGTextElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.text) }
export function RxTextPath<O = void>(id: string, args: any, render: Render<SVGTextPathElement, O>, superRender?: SuperRender<O, SVGTextPathElement>, priority?: number): NodeInfo<SVGTextPathElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.textPath) }
export function RxTSpan<O = void>(id: string, args: any, render: Render<SVGTSpanElement, O>, superRender?: SuperRender<O, SVGTSpanElement>, priority?: number): NodeInfo<SVGTSpanElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.tspan) }
export function RxUse<O = void>(id: string, args: any, render: Render<SVGUseElement, O>, superRender?: SuperRender<O, SVGUseElement>, priority?: number): NodeInfo<SVGUseElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.use) }
export function RxView<O = void>(id: string, args: any, render: Render<SVGViewElement, O>, superRender?: SuperRender<O, SVGViewElement>, priority?: number): NodeInfo<SVGViewElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.view) }

export function Svg(id: string, render: Render<SVGSVGElement> = nullRender, priority?: number): NodeInfo<SVGSVGElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.svg) }
export function SvgA(id: string, render: Render<SVGAElement> = nullRender, priority?: number): NodeInfo<SVGAElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.a) }
export function Animate(id: string, render: Render<SVGAnimateElement> = nullRender, priority?: number): NodeInfo<SVGAnimateElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.animate) }
export function AnimateMotion(id: string, render: Render<SVGAnimateMotionElement> = nullRender, priority?: number): NodeInfo<SVGAnimateMotionElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.animateMotion) }
export function AnimateTransform(id: string, render: Render<SVGAnimateTransformElement> = nullRender, priority?: number): NodeInfo<SVGAnimateTransformElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.animateTransform) }
export function Circle(id: string, render: Render<SVGCircleElement> = nullRender, priority?: number): NodeInfo<SVGCircleElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.circle) }
export function ClipPath(id: string, render: Render<SVGClipPathElement> = nullRender, priority?: number): NodeInfo<SVGClipPathElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.clipPath) }
export function Defs(id: string, render: Render<SVGDefsElement> = nullRender, priority?: number): NodeInfo<SVGDefsElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.defs) }
export function Desc(id: string, render: Render<SVGDescElement> = nullRender, priority?: number): NodeInfo<SVGDescElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.desc) }
export function Ellipse(id: string, render: Render<SVGEllipseElement> = nullRender, priority?: number): NodeInfo<SVGEllipseElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.ellipse) }
export function FeBlend(id: string, render: Render<SVGFEBlendElement> = nullRender, priority?: number): NodeInfo<SVGFEBlendElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.feBlend) }
export function FeColorMatrix(id: string, render: Render<SVGFEColorMatrixElement> = nullRender, priority?: number): NodeInfo<SVGFEColorMatrixElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.feColorMatrix) }
export function FeComponentTransfer(id: string, render: Render<SVGFEComponentTransferElement> = nullRender, priority?: number): NodeInfo<SVGFEComponentTransferElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.feComponentTransfer) }
export function FeComposite(id: string, render: Render<SVGFECompositeElement> = nullRender, priority?: number): NodeInfo<SVGFECompositeElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.feComposite) }
export function FeConvolveMatrix(id: string, render: Render<SVGFEConvolveMatrixElement> = nullRender, priority?: number): NodeInfo<SVGFEConvolveMatrixElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.feConvolveMatrix) }
export function FeDiffuseLighting(id: string, render: Render<SVGFEDiffuseLightingElement> = nullRender, priority?: number): NodeInfo<SVGFEDiffuseLightingElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.feDiffuseLighting) }
export function FeDisplacementMap(id: string, render: Render<SVGFEDisplacementMapElement> = nullRender, priority?: number): NodeInfo<SVGFEDisplacementMapElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.feDisplacementMap) }
export function FeDistantLight(id: string, render: Render<SVGFEDistantLightElement> = nullRender, priority?: number): NodeInfo<SVGFEDistantLightElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.feDistantLight) }
export function FeDropShadow(id: string, render: Render<SVGFEDropShadowElement> = nullRender, priority?: number): NodeInfo<SVGFEDropShadowElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.feDropShadow) }
export function FeFlood(id: string, render: Render<SVGFEFloodElement> = nullRender, priority?: number): NodeInfo<SVGFEFloodElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.feFlood) }
export function FeFuncA(id: string, render: Render<SVGFEFuncAElement> = nullRender, priority?: number): NodeInfo<SVGFEFuncAElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.feFuncA) }
export function FeFuncB(id: string, render: Render<SVGFEFuncBElement> = nullRender, priority?: number): NodeInfo<SVGFEFuncBElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.feFuncB) }
export function FeFuncG(id: string, render: Render<SVGFEFuncGElement> = nullRender, priority?: number): NodeInfo<SVGFEFuncGElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.feFuncG) }
export function FeFuncR(id: string, render: Render<SVGFEFuncRElement> = nullRender, priority?: number): NodeInfo<SVGFEFuncRElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.feFuncR) }
export function FeGaussianBlur(id: string, render: Render<SVGFEGaussianBlurElement> = nullRender, priority?: number): NodeInfo<SVGFEGaussianBlurElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.feGaussianBlur) }
export function FeImage(id: string, render: Render<SVGFEImageElement> = nullRender, priority?: number): NodeInfo<SVGFEImageElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.feImage) }
export function FeMerge(id: string, render: Render<SVGFEMergeElement> = nullRender, priority?: number): NodeInfo<SVGFEMergeElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.feMerge) }
export function FeMergeNode(id: string, render: Render<SVGFEMergeNodeElement> = nullRender, priority?: number): NodeInfo<SVGFEMergeNodeElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.feMergeNode) }
export function FeMorphology(id: string, render: Render<SVGFEMorphologyElement> = nullRender, priority?: number): NodeInfo<SVGFEMorphologyElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.feMorphology) }
export function FeOffset(id: string, render: Render<SVGFEOffsetElement> = nullRender, priority?: number): NodeInfo<SVGFEOffsetElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.feOffset) }
export function FePointLight(id: string, render: Render<SVGFEPointLightElement> = nullRender, priority?: number): NodeInfo<SVGFEPointLightElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.fePointLight) }
export function FeSpecularLighting(id: string, render: Render<SVGFESpecularLightingElement> = nullRender, priority?: number): NodeInfo<SVGFESpecularLightingElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.feSpecularLighting) }
export function FeSpotLight(id: string, render: Render<SVGFESpotLightElement> = nullRender, priority?: number): NodeInfo<SVGFESpotLightElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.feSpotLight) }
export function FeTile(id: string, render: Render<SVGFETileElement> = nullRender, priority?: number): NodeInfo<SVGFETileElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.feTile) }
export function FeTurbulence(id: string, render: Render<SVGFETurbulenceElement> = nullRender, priority?: number): NodeInfo<SVGFETurbulenceElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.feTurbulence) }
export function Filter(id: string, render: Render<SVGFilterElement> = nullRender, priority?: number): NodeInfo<SVGFilterElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.filter) }
export function ForeignObject(id: string, render: Render<SVGForeignObjectElement> = nullRender, priority?: number): NodeInfo<SVGForeignObjectElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.foreignObject) }
export function G(id: string, render: Render<SVGGElement> = nullRender, priority?: number): NodeInfo<SVGGElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.g) }
export function SvgImage(id: string, render: Render<SVGImageElement> = nullRender, priority?: number): NodeInfo<SVGImageElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.image) }
export function Line(id: string, render: Render<SVGLineElement> = nullRender, priority?: number): NodeInfo<SVGLineElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.line) }
export function LinearGradient(id: string, render: Render<SVGLinearGradientElement> = nullRender, priority?: number): NodeInfo<SVGLinearGradientElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.linearGradient) }
export function Marker(id: string, render: Render<SVGMarkerElement> = nullRender, priority?: number): NodeInfo<SVGMarkerElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.marker) }
export function Mask(id: string, render: Render<SVGMaskElement> = nullRender, priority?: number): NodeInfo<SVGMaskElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.mask) }
export function MetaData(id: string, render: Render<SVGMetadataElement> = nullRender, priority?: number): NodeInfo<SVGMetadataElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.metadata) }
export function MPath(id: string, render: Render<SVGElement> = nullRender, priority?: number): NodeInfo<SVGElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.mpath) }
export function Path(id: string, render: Render<SVGPathElement> = nullRender, priority?: number): NodeInfo<SVGPathElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.path) }
export function Pattern(id: string, render: Render<SVGPatternElement> = nullRender, priority?: number): NodeInfo<SVGPatternElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.pattern) }
export function Polygon(id: string, render: Render<SVGPolygonElement> = nullRender, priority?: number): NodeInfo<SVGPolygonElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.polygon) }
export function PolyLine(id: string, render: Render<SVGPolylineElement> = nullRender, priority?: number): NodeInfo<SVGPolylineElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.polyline) }
export function RadialGradient(id: string, render: Render<SVGRadialGradientElement> = nullRender, priority?: number): NodeInfo<SVGRadialGradientElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.radialGradient) }
export function Rect(id: string, render: Render<SVGRectElement> = nullRender, priority?: number): NodeInfo<SVGRectElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.rect) }
export function Stop(id: string, render: Render<SVGStopElement> = nullRender, priority?: number): NodeInfo<SVGStopElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.stop) }
export function SvgSwitch(id: string, render: Render<SVGSwitchElement> = nullRender, priority?: number): NodeInfo<SVGSwitchElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.switch) }
export function Symbol(id: string, render: Render<SVGSymbolElement> = nullRender, priority?: number): NodeInfo<SVGSymbolElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.symbol) }
export function Text(id: string, render: Render<SVGTextElement> = nullRender, priority?: number): NodeInfo<SVGTextElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.text) }
export function TextPath(id: string, render: Render<SVGTextPathElement> = nullRender, priority?: number): NodeInfo<SVGTextPathElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.textPath) }
export function TSpan(id: string, render: Render<SVGTSpanElement> = nullRender, priority?: number): NodeInfo<SVGTSpanElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.tspan) }
export function Use(id: string, render: Render<SVGUseElement> = nullRender, priority?: number): NodeInfo<SVGUseElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.use) }
export function View(id: string, render: Render<SVGViewElement> = nullRender, priority?: number): NodeInfo<SVGViewElement> { return RxDom.Node(id, RefreshParent, render, undefined, priority, SvgTags.view) }

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
