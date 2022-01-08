// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { RxDom, Render, RxNode, SuperRender } from '../core/api'
import { HtmlNodeType, SvgNodeType } from './HtmlNodeType'

export function HtmlBody(id: string, args: any, render: Render<HTMLElement>): RxNode<HTMLElement> {
  return RxDom.Node(id, args, render, undefined, {
    name: id,
    sequential: true,
    create(node: RxNode<HTMLElement, any>, sibling?: RxNode): void {
      const native = global.document.body
      native.id = node.id
      node.native = native
    },
  })
}

function nullRender(e: Element): void { /* nop */ }
export function RxA<O = void>(id: string, args: any, render: Render<HTMLAnchorElement, O>, superRender?: SuperRender<O, HTMLAnchorElement>, inline?: boolean): RxNode<HTMLAnchorElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.a, inline) }
export function RxAbbr<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.abbr, inline) }
export function RxAddress<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.address, inline) }
export function RxArea<O = void>(id: string, args: any, render: Render<HTMLAreaElement, O>, superRender?: SuperRender<O, HTMLAreaElement>, inline?: boolean): RxNode<HTMLAreaElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.area, inline) }
export function RxArticle<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.article, inline) }
export function RxAside<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.aside, inline) }
export function RxAudio<O = void>(id: string, args: any, render: Render<HTMLAudioElement, O>, superRender?: SuperRender<O, HTMLAudioElement>, inline?: boolean): RxNode<HTMLAudioElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.audio, inline) }
export function RxB<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.b, inline) }
export function RxBase<O = void>(id: string, args: any, render: Render<HTMLBaseElement, O>, superRender?: SuperRender<O, HTMLBaseElement>, inline?: boolean): RxNode<HTMLBaseElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.base, inline) }
export function RxBdi<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.bdi, inline) }
export function RxBdo<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.bdo, inline) }
export function RxBig<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.big, inline) }
export function RxBlockQuote<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.blockquote, inline) }
export function RxBody<O = void>(id: string, args: any, render: Render<HTMLBodyElement, O>, superRender?: SuperRender<O, HTMLBodyElement>, inline?: boolean): RxNode<HTMLBodyElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.body, inline) }
export function RxBR<O = void>(id: string, args: any, render: Render<HTMLBRElement, O>, superRender?: SuperRender<O, HTMLBRElement>, inline?: boolean): RxNode<HTMLBRElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.br, inline) }
export function RxButton<O = void>(id: string, args: any, render: Render<HTMLButtonElement, O>, superRender?: SuperRender<O, HTMLButtonElement>, inline?: boolean): RxNode<HTMLButtonElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.button, inline) }
export function RxCanvas<O = void>(id: string, args: any, render: Render<HTMLCanvasElement, O>, superRender?: SuperRender<O, HTMLCanvasElement>, inline?: boolean): RxNode<HTMLCanvasElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.canvas, inline) }
export function RxCaption<O = void>(id: string, args: any, render: Render<HTMLTableCaptionElement, O>, superRender?: SuperRender<O, HTMLTableCaptionElement>, inline?: boolean): RxNode<HTMLTableCaptionElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.caption, inline) }
export function RxCite<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.cite, inline) }
export function RxCode<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.code, inline) }
export function RxCol<O = void>(id: string, args: any, render: Render<HTMLTableColElement, O>, superRender?: SuperRender<O, HTMLTableColElement>, inline?: boolean): RxNode<HTMLTableColElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.col, inline) }
export function RxColGroup<O = void>(id: string, args: any, render: Render<HTMLTableColElement, O>, superRender?: SuperRender<O, HTMLTableColElement>, inline?: boolean): RxNode<HTMLTableColElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.colgroup, inline) }
export function RxData<O = void>(id: string, args: any, render: Render<HTMLDataElement, O>, superRender?: SuperRender<O, HTMLDataElement>, inline?: boolean): RxNode<HTMLDataElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.data, inline) }
export function RxDataList<O = void>(id: string, args: any, render: Render<HTMLDataListElement, O>, superRender?: SuperRender<O, HTMLDataListElement>, inline?: boolean): RxNode<HTMLDataListElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.datalist, inline) }
export function RxDD<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.dd, inline) }
export function RxDel<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.del, inline) }
export function RxDetails<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.details, inline) }
export function RxDfn<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.dfn, inline) }
export function RxDialog<O = void>(id: string, args: any, render: Render<HTMLDialogElement, O>, superRender?: SuperRender<O, HTMLDialogElement>, inline?: boolean): RxNode<HTMLDialogElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.dialog, inline) }
export function RxDiv<O = void>(id: string, args: any, render: Render<HTMLDivElement, O>, superRender?: SuperRender<O, HTMLDivElement>, inline?: boolean): RxNode<HTMLDivElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.div, inline) }
export function RxDL<O = void>(id: string, args: any, render: Render<HTMLDListElement, O>, superRender?: SuperRender<O, HTMLDListElement>, inline?: boolean): RxNode<HTMLDListElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.dl, inline) }
export function RxDT<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.dt, inline) }
export function RxEM<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.em, inline) }
export function RxEmbed<O = void>(id: string, args: any, render: Render<HTMLEmbedElement, O>, superRender?: SuperRender<O, HTMLEmbedElement>, inline?: boolean): RxNode<HTMLEmbedElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.embed, inline) }
export function RxFieldSet<O = void>(id: string, args: any, render: Render<HTMLFieldSetElement, O>, superRender?: SuperRender<O, HTMLFieldSetElement>, inline?: boolean): RxNode<HTMLFieldSetElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.fieldset, inline) }
export function RxFigCaption<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.figcaption, inline) }
export function RxFigure<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.figure, inline) }
export function RxFooter<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.footer, inline) }
export function RxForm<O = void>(id: string, args: any, render: Render<HTMLFormElement, O>, superRender?: SuperRender<O, HTMLFormElement>, inline?: boolean): RxNode<HTMLFormElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.form, inline) }
export function RxH1<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, superRender?: SuperRender<O, HTMLHeadingElement>, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.h1, inline) }
export function RxH2<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, superRender?: SuperRender<O, HTMLHeadingElement>, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.h2, inline) }
export function RxH3<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, superRender?: SuperRender<O, HTMLHeadingElement>, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.h3, inline) }
export function RxH4<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, superRender?: SuperRender<O, HTMLHeadingElement>, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.h4, inline) }
export function RxH5<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, superRender?: SuperRender<O, HTMLHeadingElement>, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.h5, inline) }
export function RxH6<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, superRender?: SuperRender<O, HTMLHeadingElement>, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.h6, inline) }
export function RxHead<O = void>(id: string, args: any, render: Render<HTMLHeadElement, O>, superRender?: SuperRender<O, HTMLHeadElement>, inline?: boolean): RxNode<HTMLHeadElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.head, inline) }
export function RxHeader<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.header, inline) }
export function RxHGroup<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.hgroup, inline) }
export function RxHR<O = void>(id: string, args: any, render: Render<HTMLHRElement, O>, superRender?: SuperRender<O, HTMLHRElement>, inline?: boolean): RxNode<HTMLHRElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.hr, inline) }
export function RxHtml<O = void>(id: string, args: any, render: Render<HTMLHtmlElement, O>, superRender?: SuperRender<O, HTMLHtmlElement>, inline?: boolean): RxNode<HTMLHtmlElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.html, inline) }
export function RxI<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.i, inline) }
export function RxIFrame<O = void>(id: string, args: any, render: Render<HTMLIFrameElement, O>, superRender?: SuperRender<O, HTMLIFrameElement>, inline?: boolean): RxNode<HTMLIFrameElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.iframe, inline) }
export function RxImg<O = void>(id: string, args: any, render: Render<HTMLImageElement, O>, superRender?: SuperRender<O, HTMLImageElement>, inline?: boolean): RxNode<HTMLImageElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.img, inline) }
export function RxInput<O = void>(id: string, args: any, render: Render<HTMLInputElement, O>, superRender?: SuperRender<O, HTMLInputElement>, inline?: boolean): RxNode<HTMLInputElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.input, inline) }
export function RxIns<O = void>(id: string, args: any, render: Render<HTMLModElement, O>, superRender?: SuperRender<O, HTMLModElement>, inline?: boolean): RxNode<HTMLModElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.ins, inline) }
export function RxKbd<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.kbd, inline) }
export function RxKeygen<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.keygen, inline) }
export function RxLabel<O = void>(id: string, args: any, render: Render<HTMLLabelElement, O>, superRender?: SuperRender<O, HTMLLabelElement>, inline?: boolean): RxNode<HTMLLabelElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.label, inline) }
export function RxLegend<O = void>(id: string, args: any, render: Render<HTMLLegendElement, O>, superRender?: SuperRender<O, HTMLLegendElement>, inline?: boolean): RxNode<HTMLLegendElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.legend, inline) }
export function RxLI<O = void>(id: string, args: any, render: Render<HTMLLIElement, O>, superRender?: SuperRender<O, HTMLLIElement>, inline?: boolean): RxNode<HTMLLIElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.li, inline) }
export function RxLink<O = void>(id: string, args: any, render: Render<HTMLLinkElement, O>, superRender?: SuperRender<O, HTMLLinkElement>, inline?: boolean): RxNode<HTMLLinkElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.link, inline) }
export function RxMain<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.main, inline) }
export function RxMap<O = void>(id: string, args: any, render: Render<HTMLMapElement, O>, superRender?: SuperRender<O, HTMLMapElement>, inline?: boolean): RxNode<HTMLMapElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.map, inline) }
export function RxMark<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.mark, inline) }
export function RxMenu<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.menu, inline) }
export function RxMenuItem<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.menuitem, inline) }
export function RxMeta<O = void>(id: string, args: any, render: Render<HTMLMetaElement, O>, superRender?: SuperRender<O, HTMLMetaElement>, inline?: boolean): RxNode<HTMLMetaElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.meta, inline) }
export function RxMeter<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.meter, inline) }
export function RxNav<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.nav, inline) }
export function RxNoIndex<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.noindex, inline) }
export function RxNoScript<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.noscript, inline) }
export function RxObj<O = void>(id: string, args: any, render: Render<HTMLObjectElement, O>, superRender?: SuperRender<O, HTMLObjectElement>, inline?: boolean): RxNode<HTMLObjectElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.object, inline) }
export function RxOL<O = void>(id: string, args: any, render: Render<HTMLOListElement, O>, superRender?: SuperRender<O, HTMLOListElement>, inline?: boolean): RxNode<HTMLOListElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.ol, inline) }
export function RxOptGroup<O = void>(id: string, args: any, render: Render<HTMLOptGroupElement, O>, superRender?: SuperRender<O, HTMLOptGroupElement>, inline?: boolean): RxNode<HTMLOptGroupElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.optgroup, inline) }
export function RxOption<O = void>(id: string, args: any, render: Render<HTMLOptionElement, O>, superRender?: SuperRender<O, HTMLOptionElement>, inline?: boolean): RxNode<HTMLOptionElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.option, inline) }
export function RxOutput<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.output, inline) }
export function RxP<O = void>(id: string, args: any, render: Render<HTMLParagraphElement, O>, superRender?: SuperRender<O, HTMLParagraphElement>, inline?: boolean): RxNode<HTMLParagraphElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.p, inline) }
export function RxParam<O = void>(id: string, args: any, render: Render<HTMLParamElement, O>, superRender?: SuperRender<O, HTMLParamElement>, inline?: boolean): RxNode<HTMLParamElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.param, inline) }
export function RxPicture<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.picture, inline) }
export function RxPre<O = void>(id: string, args: any, render: Render<HTMLPreElement, O>, superRender?: SuperRender<O, HTMLPreElement>, inline?: boolean): RxNode<HTMLPreElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.pre, inline) }
export function RxProgress<O = void>(id: string, args: any, render: Render<HTMLProgressElement, O>, superRender?: SuperRender<O, HTMLProgressElement>, inline?: boolean): RxNode<HTMLProgressElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.progress, inline) }
export function RxQ<O = void>(id: string, args: any, render: Render<HTMLQuoteElement, O>, superRender?: SuperRender<O, HTMLQuoteElement>, inline?: boolean): RxNode<HTMLQuoteElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.q, inline) }
export function RxRP<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.rp, inline) }
export function RxRT<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.rt, inline) }
export function RxRuby<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.ruby, inline) }
export function RxS<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.s, inline) }
export function RxSamp<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.samp, inline) }
export function RxScript<O = void>(id: string, args: any, render: Render<HTMLScriptElement, O>, superRender?: SuperRender<O, HTMLScriptElement>, inline?: boolean): RxNode<HTMLScriptElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.script, inline) }
export function RxSection<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.section, inline) }
export function RxSelect<O = void>(id: string, args: any, render: Render<HTMLSelectElement, O>, superRender?: SuperRender<O, HTMLSelectElement>, inline?: boolean): RxNode<HTMLSelectElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.select, inline) }
export function RxSmall<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.small, inline) }
export function RxSource<O = void>(id: string, args: any, render: Render<HTMLSourceElement, O>, superRender?: SuperRender<O, HTMLSourceElement>, inline?: boolean): RxNode<HTMLSourceElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.source, inline) }
export function RxSpan<O = void>(id: string, args: any, render: Render<HTMLSpanElement, O>, superRender?: SuperRender<O, HTMLSpanElement>, inline?: boolean): RxNode<HTMLSpanElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.span, inline) }
export function RxStrong<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.strong, inline) }
export function RxStyle<O = void>(id: string, args: any, render: Render<HTMLStyleElement, O>, superRender?: SuperRender<O, HTMLStyleElement>, inline?: boolean): RxNode<HTMLStyleElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.style, inline) }
export function RxSub<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.sub, inline) }
export function RxSummary<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.summary, inline) }
export function RxSup<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.sup, inline) }
export function RxTable<O = void>(id: string, args: any, render: Render<HTMLTableElement, O>, superRender?: SuperRender<O, HTMLTableElement>, inline?: boolean): RxNode<HTMLTableElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.table, inline) }
export function RxTemplate<O = void>(id: string, args: any, render: Render<HTMLTemplateElement, O>, superRender?: SuperRender<O, HTMLTemplateElement>, inline?: boolean): RxNode<HTMLTemplateElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.template, inline) }
export function RxTBody<O = void>(id: string, args: any, render: Render<HTMLTableSectionElement, O>, superRender?: SuperRender<O, HTMLTableSectionElement>, inline?: boolean): RxNode<HTMLTableSectionElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.tbody, inline) }
export function RxTD<O = void>(id: string, args: any, render: Render<HTMLTableCellElement, O>, superRender?: SuperRender<O, HTMLTableCellElement>, inline?: boolean): RxNode<HTMLTableCellElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.td, inline) }
export function RxTextArea<O = void>(id: string, args: any, render: Render<HTMLTextAreaElement, O>, superRender?: SuperRender<O, HTMLTextAreaElement>, inline?: boolean): RxNode<HTMLTextAreaElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.textarea, inline) }
export function RxTFoot<O = void>(id: string, args: any, render: Render<HTMLTableSectionElement, O>, superRender?: SuperRender<O, HTMLTableSectionElement>, inline?: boolean): RxNode<HTMLTableSectionElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.tfoot, inline) }
export function RxTH<O = void>(id: string, args: any, render: Render<HTMLTableCellElement, O>, superRender?: SuperRender<O, HTMLTableCellElement>, inline?: boolean): RxNode<HTMLTableHeaderCellElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.th, inline) }
export function RxTHead<O = void>(id: string, args: any, render: Render<HTMLTableSectionElement, O>, superRender?: SuperRender<O, HTMLTableSectionElement>, inline?: boolean): RxNode<HTMLTableSectionElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.thead, inline) }
export function RxTime<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.time, inline) }
export function RxTitle<O = void>(id: string, args: any, render: Render<HTMLTitleElement, O>, superRender?: SuperRender<O, HTMLTitleElement>, inline?: boolean): RxNode<HTMLTitleElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.title, inline) }
export function RxTR<O = void>(id: string, args: any, render: Render<HTMLTableRowElement, O>, superRender?: SuperRender<O, HTMLTableRowElement>, inline?: boolean): RxNode<HTMLTableRowElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.tr, inline) }
export function RxTrack<O = void>(id: string, args: any, render: Render<HTMLTrackElement, O>, superRender?: SuperRender<O, HTMLTrackElement>, inline?: boolean): RxNode<HTMLTrackElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.track, inline) }
export function RxU<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.u, inline) }
export function RxUL<O = void>(id: string, args: any, render: Render<HTMLUListElement, O>, superRender?: SuperRender<O, HTMLUListElement>, inline?: boolean): RxNode<HTMLUListElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.ul, inline) }
export function RxVar<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.var, inline) }
export function RxVideo<O = void>(id: string, args: any, render: Render<HTMLVideoElement, O>, superRender?: SuperRender<O, HTMLVideoElement>, inline?: boolean): RxNode<HTMLVideoElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.video, inline) }
export function RxWbr<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, HtmlTags.wbr, inline) }

export function A(id: string, render: Render<HTMLAnchorElement> = nullRender): RxNode<HTMLAnchorElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.a, true) }
export function Abbr(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.abbr, true) }
export function Address(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.address, true) }
export function Area(id: string, render: Render<HTMLAreaElement> = nullRender): RxNode<HTMLAreaElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.area, true) }
export function Article(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.article, true) }
export function Aside(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.aside, true) }
export function Audio(id: string, render: Render<HTMLAudioElement> = nullRender): RxNode<HTMLAudioElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.audio, true) }
export function B(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.b, true) }
export function Base(id: string, render: Render<HTMLBaseElement> = nullRender): RxNode<HTMLBaseElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.base, true) }
export function Bdi(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.bdi, true) }
export function Bdo(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.bdo, true) }
export function Big(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.big, true) }
export function BlockQuote(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.blockquote, true) }
export function Body(id: string, render: Render<HTMLBodyElement> = nullRender): RxNode<HTMLBodyElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.body, true) }
export function BR(id: string, render: Render<HTMLBRElement> = nullRender): RxNode<HTMLBRElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.br, true) }
export function Button(id: string, render: Render<HTMLButtonElement> = nullRender): RxNode<HTMLButtonElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.button, true) }
export function Canvas(id: string, render: Render<HTMLCanvasElement> = nullRender): RxNode<HTMLCanvasElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.canvas, true) }
export function Caption(id: string, render: Render<HTMLTableCaptionElement> = nullRender): RxNode<HTMLTableCaptionElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.caption, true) }
export function Cite(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.cite, true) }
export function Code(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.code, true) }
export function Col(id: string, render: Render<HTMLTableColElement> = nullRender): RxNode<HTMLTableColElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.col, true) }
export function ColGroup(id: string, render: Render<HTMLTableColElement> = nullRender): RxNode<HTMLTableColElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.colgroup, true) }
export function Data(id: string, render: Render<HTMLDataElement> = nullRender): RxNode<HTMLDataElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.data, true) }
export function DataList(id: string, render: Render<HTMLDataListElement> = nullRender): RxNode<HTMLDataListElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.datalist, true) }
export function DD(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.dd, true) }
export function Del(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.del, true) }
export function Details(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.details, true) }
export function Dfn(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.dfn, true) }
export function Dialog(id: string, render: Render<HTMLDialogElement> = nullRender): RxNode<HTMLDialogElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.dialog, true) }
export function Div(id: string, render: Render<HTMLDivElement> = nullRender): RxNode<HTMLDivElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.div, true) }
export function DL(id: string, render: Render<HTMLDListElement> = nullRender): RxNode<HTMLDListElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.dl, true) }
export function DT(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.dt, true) }
export function EM(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.em, true) }
export function Embed(id: string, render: Render<HTMLEmbedElement> = nullRender): RxNode<HTMLEmbedElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.embed, true) }
export function FieldSet(id: string, render: Render<HTMLFieldSetElement> = nullRender): RxNode<HTMLFieldSetElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.fieldset, true) }
export function FigCaption(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.figcaption, true) }
export function Figure(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.figure, true) }
export function Footer(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.footer, true) }
export function Form(id: string, render: Render<HTMLFormElement> = nullRender): RxNode<HTMLFormElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.form, true) }
export function H1(id: string, render: Render<HTMLHeadingElement> = nullRender): RxNode<HTMLHeadingElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.h1, true) }
export function H2(id: string, render: Render<HTMLHeadingElement> = nullRender): RxNode<HTMLHeadingElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.h2, true) }
export function H3(id: string, render: Render<HTMLHeadingElement> = nullRender): RxNode<HTMLHeadingElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.h3, true) }
export function H4(id: string, render: Render<HTMLHeadingElement> = nullRender): RxNode<HTMLHeadingElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.h4, true) }
export function H5(id: string, render: Render<HTMLHeadingElement> = nullRender): RxNode<HTMLHeadingElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.h5, true) }
export function H6(id: string, render: Render<HTMLHeadingElement> = nullRender): RxNode<HTMLHeadingElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.h6, true) }
export function Head(id: string, render: Render<HTMLHeadElement> = nullRender): RxNode<HTMLHeadElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.head, true) }
export function Header(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.header, true) }
export function HGroup(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.hgroup, true) }
export function HR(id: string, render: Render<HTMLHRElement> = nullRender): RxNode<HTMLHRElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.hr, true) }
export function Html(id: string, render: Render<HTMLHtmlElement> = nullRender): RxNode<HTMLHtmlElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.html, true) }
export function I(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.i, true) }
export function IFrame(id: string, render: Render<HTMLIFrameElement> = nullRender): RxNode<HTMLIFrameElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.iframe, true) }
export function Img(id: string, render: Render<HTMLImageElement> = nullRender): RxNode<HTMLImageElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.img, true) }
export function Input(id: string, render: Render<HTMLInputElement> = nullRender): RxNode<HTMLInputElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.input, true) }
export function Ins(id: string, render: Render<HTMLModElement> = nullRender): RxNode<HTMLModElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.ins, true) }
export function Kbd(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.kbd, true) }
export function KeyGen(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.keygen, true) }
export function Label(id: string, render: Render<HTMLLabelElement> = nullRender): RxNode<HTMLLabelElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.label, true) }
export function Legend(id: string, render: Render<HTMLLegendElement> = nullRender): RxNode<HTMLLegendElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.legend, true) }
export function LI(id: string, render: Render<HTMLLIElement> = nullRender): RxNode<HTMLLIElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.li, true) }
export function Link(id: string, render: Render<HTMLLinkElement> = nullRender): RxNode<HTMLLinkElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.link, true) }
export function Main(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.main, true) }
export function Map(id: string, render: Render<HTMLMapElement> = nullRender): RxNode<HTMLMapElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.map, true) }
export function Mark(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.mark, true) }
export function Menu(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.menu, true) }
export function MenuItem(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.menuitem, true) }
export function Meta(id: string, render: Render<HTMLMetaElement> = nullRender): RxNode<HTMLMetaElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.meta, true) }
export function Meter(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.meter, true) }
export function Nav(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.nav, true) }
export function NoIndex(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.noindex, true) }
export function NoScript(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.noscript, true) }
export function Obj(id: string, render: Render<HTMLObjectElement> = nullRender): RxNode<HTMLObjectElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.object, true) }
export function OL(id: string, render: Render<HTMLOListElement> = nullRender): RxNode<HTMLOListElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.ol, true) }
export function OptGroup(id: string, render: Render<HTMLOptGroupElement> = nullRender): RxNode<HTMLOptGroupElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.optgroup, true) }
export function Option(id: string, render: Render<HTMLOptionElement> = nullRender): RxNode<HTMLOptionElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.option, true) }
export function Output(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.output, true) }
export function P(id: string, render: Render<HTMLParagraphElement> = nullRender): RxNode<HTMLParagraphElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.p, true) }
export function Param(id: string, render: Render<HTMLParamElement> = nullRender): RxNode<HTMLParamElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.param, true) }
export function Picture(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.picture, true) }
export function Pre(id: string, render: Render<HTMLPreElement> = nullRender): RxNode<HTMLPreElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.pre, true) }
export function Progress(id: string, render: Render<HTMLProgressElement> = nullRender): RxNode<HTMLProgressElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.progress, true) }
export function Q(id: string, render: Render<HTMLQuoteElement> = nullRender): RxNode<HTMLQuoteElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.q, true) }
export function RP(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.rp, true) }
export function RT(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.rt, true) }
export function Ruby(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.ruby, true) }
export function S(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.s, true) }
export function Samp(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.samp, true) }
export function Script(id: string, render: Render<HTMLScriptElement> = nullRender): RxNode<HTMLScriptElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.script, true) }
export function Section(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.section, true) }
export function Select(id: string, render: Render<HTMLSelectElement> = nullRender): RxNode<HTMLSelectElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.select, true) }
export function Small(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.small, true) }
export function Source(id: string, render: Render<HTMLSourceElement> = nullRender): RxNode<HTMLSourceElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.source, true) }
export function Span(id: string, render: Render<HTMLSpanElement> = nullRender): RxNode<HTMLSpanElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.span, true) }
export function Strong(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.strong, true) }
export function Style(id: string, render: Render<HTMLStyleElement> = nullRender): RxNode<HTMLStyleElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.style, true) }
export function Sub(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.sub, true) }
export function Summary(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.summary, true) }
export function Sup(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.sup, true) }
export function Table(id: string, render: Render<HTMLTableElement> = nullRender): RxNode<HTMLTableElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.table, true) }
export function Template(id: string, render: Render<HTMLTemplateElement> = nullRender): RxNode<HTMLTemplateElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.template, true) }
export function TBody(id: string, render: Render<HTMLTableSectionElement> = nullRender): RxNode<HTMLTableSectionElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.tbody, true) }
export function TD(id: string, render: Render<HTMLTableDataCellElement> = nullRender): RxNode<HTMLTableDataCellElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.td, true) }
export function TextArea(id: string, render: Render<HTMLTextAreaElement> = nullRender): RxNode<HTMLTextAreaElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.textarea, true) }
export function TFoot(id: string, render: Render<HTMLTableSectionElement> = nullRender): RxNode<HTMLTableSectionElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.tfoot, true) }
export function TH(id: string, render: Render<HTMLTableHeaderCellElement> = nullRender): RxNode<HTMLTableHeaderCellElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.th, true) }
export function THead(id: string, render: Render<HTMLTableSectionElement> = nullRender): RxNode<HTMLTableSectionElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.thead, true) }
export function Time(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.time, true) }
export function Title(id: string, render: Render<HTMLTitleElement> = nullRender): RxNode<HTMLTitleElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.title, true) }
export function TR(id: string, render: Render<HTMLTableRowElement> = nullRender): RxNode<HTMLTableRowElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.tr, true) }
export function Track(id: string, render: Render<HTMLTrackElement> = nullRender): RxNode<HTMLTrackElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.track, true) }
export function U(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.u, true) }
export function UL(id: string, render: Render<HTMLUListElement> = nullRender): RxNode<HTMLUListElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.ul, true) }
export function Var(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.var, true) }
export function Video(id: string, render: Render<HTMLVideoElement> = nullRender): RxNode<HTMLVideoElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.video, true) }
export function Wbr(id: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, HtmlTags.wbr, true) }

const HtmlTags = {
  a: new HtmlNodeType<HTMLAnchorElement>('a'),
  abbr: new HtmlNodeType<HTMLElement>('abbr'),
  address: new HtmlNodeType<HTMLElement>('address'),
  area: new HtmlNodeType<HTMLAreaElement>('area'),
  article: new HtmlNodeType<HTMLElement>('article'),
  aside: new HtmlNodeType<HTMLElement>('aside'),
  audio: new HtmlNodeType<HTMLAudioElement>('audio'),
  b: new HtmlNodeType<HTMLElement>('b'),
  base: new HtmlNodeType<HTMLBaseElement>('base'),
  bdi: new HtmlNodeType<HTMLElement>('bdi'),
  bdo: new HtmlNodeType<HTMLElement>('bdo'),
  big: new HtmlNodeType<HTMLElement>('big'),
  blockquote: new HtmlNodeType<HTMLElement>('blockquote'),
  body: new HtmlNodeType<HTMLBodyElement>('body'),
  br: new HtmlNodeType<HTMLBRElement>('br'),
  button: new HtmlNodeType<HTMLButtonElement>('button'),
  canvas: new HtmlNodeType<HTMLCanvasElement>('canvas'),
  caption: new HtmlNodeType<HTMLTableCaptionElement>('caption'),
  cite: new HtmlNodeType<HTMLElement>('cite'),
  code: new HtmlNodeType<HTMLElement>('code'),
  col: new HtmlNodeType<HTMLTableColElement>('col'),
  colgroup: new HtmlNodeType<HTMLTableColElement>('colgroup'),
  data: new HtmlNodeType<HTMLDataElement>('data'),
  datalist: new HtmlNodeType<HTMLDataListElement>('datalist'),
  dd: new HtmlNodeType<HTMLElement>('dd'),
  del: new HtmlNodeType<HTMLElement>('del'),
  details: new HtmlNodeType<HTMLElement>('details'),
  dfn: new HtmlNodeType<HTMLElement>('dfn'),
  dialog: new HtmlNodeType<HTMLDialogElement>('dialog'),
  div: new HtmlNodeType<HTMLDivElement>('div'),
  dl: new HtmlNodeType<HTMLDListElement>('dl'),
  dt: new HtmlNodeType<HTMLElement>('dt'),
  em: new HtmlNodeType<HTMLElement>('em'),
  embed: new HtmlNodeType<HTMLEmbedElement>('embed'),
  fieldset: new HtmlNodeType<HTMLFieldSetElement>('fieldset'),
  figcaption: new HtmlNodeType<HTMLElement>('figcaption'),
  figure: new HtmlNodeType<HTMLElement>('figure'),
  footer: new HtmlNodeType<HTMLElement>('footer'),
  form: new HtmlNodeType<HTMLFormElement>('form'),
  h1: new HtmlNodeType<HTMLHeadingElement>('h1'),
  h2: new HtmlNodeType<HTMLHeadingElement>('h2'),
  h3: new HtmlNodeType<HTMLHeadingElement>('h3'),
  h4: new HtmlNodeType<HTMLHeadingElement>('h4'),
  h5: new HtmlNodeType<HTMLHeadingElement>('h5'),
  h6: new HtmlNodeType<HTMLHeadingElement>('h6'),
  head: new HtmlNodeType<HTMLHeadElement>('head'),
  header: new HtmlNodeType<HTMLElement>('header'),
  hgroup: new HtmlNodeType<HTMLElement>('hgroup'),
  hr: new HtmlNodeType<HTMLHRElement>('hr'),
  html: new HtmlNodeType<HTMLHtmlElement>('html'),
  i: new HtmlNodeType<HTMLElement>('i'),
  iframe: new HtmlNodeType<HTMLIFrameElement>('iframe'),
  img: new HtmlNodeType<HTMLImageElement>('img'),
  input: new HtmlNodeType<HTMLInputElement>('input'),
  ins: new HtmlNodeType<HTMLModElement>('ins'),
  kbd: new HtmlNodeType<HTMLElement>('kbd'),
  keygen: new HtmlNodeType<HTMLElement>('keygen'),
  label: new HtmlNodeType<HTMLLabelElement>('label'),
  legend: new HtmlNodeType<HTMLLegendElement>('legend'),
  li: new HtmlNodeType<HTMLLIElement>('li'),
  link: new HtmlNodeType<HTMLLinkElement>('link'),
  main: new HtmlNodeType<HTMLElement>('main'),
  map: new HtmlNodeType<HTMLMapElement>('map'),
  mark: new HtmlNodeType<HTMLElement>('mark'),
  menu: new HtmlNodeType<HTMLElement>('menu'),
  menuitem: new HtmlNodeType<HTMLElement>('menuitem'),
  meta: new HtmlNodeType<HTMLMetaElement>('meta'),
  meter: new HtmlNodeType<HTMLElement>('meter'),
  nav: new HtmlNodeType<HTMLElement>('nav'),
  noindex: new HtmlNodeType<HTMLElement>('noindex'),
  noscript: new HtmlNodeType<HTMLElement>('noscript'),
  object: new HtmlNodeType<HTMLObjectElement>('object'),
  ol: new HtmlNodeType<HTMLOListElement>('ol'),
  optgroup: new HtmlNodeType<HTMLOptGroupElement>('optgroup'),
  option: new HtmlNodeType<HTMLOptionElement>('option'),
  output: new HtmlNodeType<HTMLElement>('output'),
  p: new HtmlNodeType<HTMLParagraphElement>('p'),
  param: new HtmlNodeType<HTMLParamElement>('param'),
  picture: new HtmlNodeType<HTMLElement>('picture'),
  pre: new HtmlNodeType<HTMLPreElement>('pre'),
  progress: new HtmlNodeType<HTMLProgressElement>('progress'),
  q: new HtmlNodeType<HTMLQuoteElement>('q'),
  rp: new HtmlNodeType<HTMLElement>('rp'),
  rt: new HtmlNodeType<HTMLElement>('rt'),
  ruby: new HtmlNodeType<HTMLElement>('ruby'),
  s: new HtmlNodeType<HTMLElement>('s'),
  samp: new HtmlNodeType<HTMLElement>('samp'),
  script: new HtmlNodeType<HTMLScriptElement>('script'),
  section: new HtmlNodeType<HTMLElement>('section'),
  select: new HtmlNodeType<HTMLSelectElement>('select'),
  small: new HtmlNodeType<HTMLElement>('small'),
  source: new HtmlNodeType<HTMLSourceElement>('source'),
  span: new HtmlNodeType<HTMLSpanElement>('span'),
  strong: new HtmlNodeType<HTMLElement>('strong'),
  style: new HtmlNodeType<HTMLStyleElement>('style'),
  sub: new HtmlNodeType<HTMLElement>('sub'),
  summary: new HtmlNodeType<HTMLElement>('summary'),
  sup: new HtmlNodeType<HTMLElement>('sup'),
  table: new HtmlNodeType<HTMLTableElement>('table'),
  template: new HtmlNodeType<HTMLTemplateElement>('template'),
  tbody: new HtmlNodeType<HTMLTableSectionElement>('tbody'),
  td: new HtmlNodeType<HTMLTableDataCellElement>('td'),
  textarea: new HtmlNodeType<HTMLTextAreaElement>('textarea'),
  tfoot: new HtmlNodeType<HTMLTableSectionElement>('tfoot'),
  th: new HtmlNodeType<HTMLTableHeaderCellElement>('th'),
  thead: new HtmlNodeType<HTMLTableSectionElement>('thead'),
  time: new HtmlNodeType<HTMLElement>('time'),
  title: new HtmlNodeType<HTMLTitleElement>('title'),
  tr: new HtmlNodeType<HTMLTableRowElement>('tr'),
  track: new HtmlNodeType<HTMLTrackElement>('track'),
  u: new HtmlNodeType<HTMLElement>('u'),
  ul: new HtmlNodeType<HTMLUListElement>('ul'),
  var: new HtmlNodeType<HTMLElement>('var'),
  video: new HtmlNodeType<HTMLVideoElement>('video'),
  wbr: new HtmlNodeType<HTMLElement>('wbr'),
  // webview: new HtmlNodeType<HTMLWebViewElement>('webview'),
}

export function RxSvg<O = void>(id: string, args: any, render: Render<SVGSVGElement, O>, superRender?: SuperRender<O, SVGSVGElement>): RxNode<SVGSVGElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.svg) }
export function RxSvgA<O = void>(id: string, args: any, render: Render<SVGAElement, O>, superRender?: SuperRender<O, SVGAElement>): RxNode<SVGAElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.a) }
export function RxAnimate<O = void>(id: string, args: any, render: Render<SVGAnimateElement, O>, superRender?: SuperRender<O, SVGAnimateElement>): RxNode<SVGAnimateElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.animate) }
export function RxAnimateMotion<O = void>(id: string, args: any, render: Render<SVGAnimateMotionElement, O>, superRender?: SuperRender<O, SVGAnimateMotionElement>): RxNode<SVGAnimateMotionElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.animateMotion) }
export function RxAnimateTransform<O = void>(id: string, args: any, render: Render<SVGAnimateTransformElement, O>, superRender?: SuperRender<O, SVGAnimateTransformElement>): RxNode<SVGAnimateTransformElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.animateTransform) }
export function RxCircle<O = void>(id: string, args: any, render: Render<SVGCircleElement, O>, superRender?: SuperRender<O, SVGCircleElement>): RxNode<SVGCircleElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.circle) }
export function RxClipPath<O = void>(id: string, args: any, render: Render<SVGClipPathElement, O>, superRender?: SuperRender<O, SVGClipPathElement>): RxNode<SVGClipPathElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.clipPath) }
export function RxDefs<O = void>(id: string, args: any, render: Render<SVGDefsElement, O>, superRender?: SuperRender<O, SVGDefsElement>): RxNode<SVGDefsElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.defs) }
export function RxDesc<O = void>(id: string, args: any, render: Render<SVGDescElement, O>, superRender?: SuperRender<O, SVGDescElement>): RxNode<SVGDescElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.desc) }
export function RxEllipse<O = void>(id: string, args: any, render: Render<SVGEllipseElement, O>, superRender?: SuperRender<O, SVGEllipseElement>): RxNode<SVGEllipseElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.ellipse) }
export function RxFeBlend<O = void>(id: string, args: any, render: Render<SVGFEBlendElement, O>, superRender?: SuperRender<O, SVGFEBlendElement>): RxNode<SVGFEBlendElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.feBlend) }
export function RxFeColorMatrix<O = void>(id: string, args: any, render: Render<SVGFEColorMatrixElement, O>, superRender?: SuperRender<O, SVGFEColorMatrixElement>): RxNode<SVGFEColorMatrixElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.feColorMatrix) }
export function RxFeComponentTransfer<O = void>(id: string, args: any, render: Render<SVGFEComponentTransferElement, O>, superRender?: SuperRender<O, SVGFEComponentTransferElement>): RxNode<SVGFEComponentTransferElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.feComponentTransfer) }
export function RxFeComposite<O = void>(id: string, args: any, render: Render<SVGFECompositeElement, O>, superRender?: SuperRender<O, SVGFECompositeElement>): RxNode<SVGFECompositeElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.feComposite) }
export function RxFeConvolveMatrix<O = void>(id: string, args: any, render: Render<SVGFEConvolveMatrixElement, O>, superRender?: SuperRender<O, SVGFEConvolveMatrixElement>): RxNode<SVGFEConvolveMatrixElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.feConvolveMatrix) }
export function RxFeDiffuseLighting<O = void>(id: string, args: any, render: Render<SVGFEDiffuseLightingElement, O>, superRender?: SuperRender<O, SVGFEDiffuseLightingElement>): RxNode<SVGFEDiffuseLightingElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.feDiffuseLighting) }
export function RxFeDisplacementMap<O = void>(id: string, args: any, render: Render<SVGFEDisplacementMapElement, O>, superRender?: SuperRender<O, SVGFEDisplacementMapElement>): RxNode<SVGFEDisplacementMapElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.feDisplacementMap) }
export function RxFeDistantLight<O = void>(id: string, args: any, render: Render<SVGFEDistantLightElement, O>, superRender?: SuperRender<O, SVGFEDistantLightElement>): RxNode<SVGFEDistantLightElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.feDistantLight) }
export function RxFeDropShadow<O = void>(id: string, args: any, render: Render<SVGFEDropShadowElement, O>, superRender?: SuperRender<O, SVGFEDropShadowElement>): RxNode<SVGFEDropShadowElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.feDropShadow) }
export function RxFeFlood<O = void>(id: string, args: any, render: Render<SVGFEFloodElement, O>, superRender?: SuperRender<O, SVGFEFloodElement>): RxNode<SVGFEFloodElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.feFlood) }
export function RxFeFuncA<O = void>(id: string, args: any, render: Render<SVGFEFuncAElement, O>, superRender?: SuperRender<O, SVGFEFuncAElement>): RxNode<SVGFEFuncAElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.feFuncA) }
export function RxFeFuncB<O = void>(id: string, args: any, render: Render<SVGFEFuncBElement, O>, superRender?: SuperRender<O, SVGFEFuncBElement>): RxNode<SVGFEFuncBElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.feFuncB) }
export function RxFeFuncG<O = void>(id: string, args: any, render: Render<SVGFEFuncGElement, O>, superRender?: SuperRender<O, SVGFEFuncGElement>): RxNode<SVGFEFuncGElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.feFuncG) }
export function RxFeFuncR<O = void>(id: string, args: any, render: Render<SVGFEFuncRElement, O>, superRender?: SuperRender<O, SVGFEFuncRElement>): RxNode<SVGFEFuncRElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.feFuncR) }
export function RxFeGaussianBlur<O = void>(id: string, args: any, render: Render<SVGFEGaussianBlurElement, O>, superRender?: SuperRender<O, SVGFEGaussianBlurElement>): RxNode<SVGFEGaussianBlurElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.feGaussianBlur) }
export function RxFeImage<O = void>(id: string, args: any, render: Render<SVGFEImageElement, O>, superRender?: SuperRender<O, SVGFEImageElement>): RxNode<SVGFEImageElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.feImage) }
export function RxFeMerge<O = void>(id: string, args: any, render: Render<SVGFEMergeElement, O>, superRender?: SuperRender<O, SVGFEMergeElement>): RxNode<SVGFEMergeElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.feMerge) }
export function RxFeMergeNode<O = void>(id: string, args: any, render: Render<SVGFEMergeNodeElement, O>, superRender?: SuperRender<O, SVGFEMergeNodeElement>): RxNode<SVGFEMergeNodeElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.feMergeNode) }
export function RxFeMorphology<O = void>(id: string, args: any, render: Render<SVGFEMorphologyElement, O>, superRender?: SuperRender<O, SVGFEMorphologyElement>): RxNode<SVGFEMorphologyElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.feMorphology) }
export function RxFeOffset<O = void>(id: string, args: any, render: Render<SVGFEOffsetElement, O>, superRender?: SuperRender<O, SVGFEOffsetElement>): RxNode<SVGFEOffsetElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.feOffset) }
export function RxFePointLight<O = void>(id: string, args: any, render: Render<SVGFEPointLightElement, O>, superRender?: SuperRender<O, SVGFEPointLightElement>): RxNode<SVGFEPointLightElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.fePointLight) }
export function RxFeSpecularLighting<O = void>(id: string, args: any, render: Render<SVGFESpecularLightingElement, O>, superRender?: SuperRender<O, SVGFESpecularLightingElement>): RxNode<SVGFESpecularLightingElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.feSpecularLighting) }
export function RxFeSpotLight<O = void>(id: string, args: any, render: Render<SVGFESpotLightElement, O>, superRender?: SuperRender<O, SVGFESpotLightElement>): RxNode<SVGFESpotLightElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.feSpotLight) }
export function RxFeTile<O = void>(id: string, args: any, render: Render<SVGFETileElement, O>, superRender?: SuperRender<O, SVGFETileElement>): RxNode<SVGFETileElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.feTile) }
export function RxFeTurbulence<O = void>(id: string, args: any, render: Render<SVGFETurbulenceElement, O>, superRender?: SuperRender<O, SVGFETurbulenceElement>): RxNode<SVGFETurbulenceElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.feTurbulence) }
export function RxFilter<O = void>(id: string, args: any, render: Render<SVGFilterElement, O>, superRender?: SuperRender<O, SVGFilterElement>): RxNode<SVGFilterElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.filter) }
export function RxForeignObject<O = void>(id: string, args: any, render: Render<SVGForeignObjectElement, O>, superRender?: SuperRender<O, SVGForeignObjectElement>): RxNode<SVGForeignObjectElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.foreignObject) }
export function RxG<O = void>(id: string, args: any, render: Render<SVGGElement, O>, superRender?: SuperRender<O, SVGGElement>): RxNode<SVGGElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.g) }
export function RxSvgImage<O = void>(id: string, args: any, render: Render<SVGImageElement, O>, superRender?: SuperRender<O, SVGImageElement>): RxNode<SVGImageElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.image) }
export function RxLine<O = void>(id: string, args: any, render: Render<SVGLineElement, O>, superRender?: SuperRender<O, SVGLineElement>): RxNode<SVGLineElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.line) }
export function RxLinearGradient<O = void>(id: string, args: any, render: Render<SVGLinearGradientElement, O>, superRender?: SuperRender<O, SVGLinearGradientElement>): RxNode<SVGLinearGradientElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.linearGradient) }
export function RxMarker<O = void>(id: string, args: any, render: Render<SVGMarkerElement, O>, superRender?: SuperRender<O, SVGMarkerElement>): RxNode<SVGMarkerElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.marker) }
export function RxMask<O = void>(id: string, args: any, render: Render<SVGMaskElement, O>, superRender?: SuperRender<O, SVGMaskElement>): RxNode<SVGMaskElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.mask) }
export function RxMetadata<O = void>(id: string, args: any, render: Render<SVGMetadataElement, O>, superRender?: SuperRender<O, SVGMetadataElement>): RxNode<SVGMetadataElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.metadata) }
export function RxMPath<O = void>(id: string, args: any, render: Render<SVGElement, O>, superRender?: SuperRender<O, SVGElement>): RxNode<SVGElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.mpath) }
export function RxPath<O = void>(id: string, args: any, render: Render<SVGPathElement, O>, superRender?: SuperRender<O, SVGPathElement>): RxNode<SVGPathElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.path) }
export function RxPattern<O = void>(id: string, args: any, render: Render<SVGPatternElement, O>, superRender?: SuperRender<O, SVGPatternElement>): RxNode<SVGPatternElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.pattern) }
export function RxPolygon<O = void>(id: string, args: any, render: Render<SVGPolygonElement, O>, superRender?: SuperRender<O, SVGPolygonElement>): RxNode<SVGPolygonElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.polygon) }
export function RxPolyline<O = void>(id: string, args: any, render: Render<SVGPolylineElement, O>, superRender?: SuperRender<O, SVGPolylineElement>): RxNode<SVGPolylineElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.polyline) }
export function RxRadialGradient<O = void>(id: string, args: any, render: Render<SVGRadialGradientElement, O>, superRender?: SuperRender<O, SVGRadialGradientElement>): RxNode<SVGRadialGradientElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.radialGradient) }
export function RxRect<O = void>(id: string, args: any, render: Render<SVGRectElement, O>, superRender?: SuperRender<O, SVGRectElement>): RxNode<SVGRectElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.rect) }
export function RxStop<O = void>(id: string, args: any, render: Render<SVGStopElement, O>, superRender?: SuperRender<O, SVGStopElement>): RxNode<SVGStopElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.stop) }
export function RxSvgSwitch<O = void>(id: string, args: any, render: Render<SVGSwitchElement, O>, superRender?: SuperRender<O, SVGSwitchElement>): RxNode<SVGSwitchElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.switch) }
export function RxSymbol<O = void>(id: string, args: any, render: Render<SVGSymbolElement, O>, superRender?: SuperRender<O, SVGSymbolElement>): RxNode<SVGSymbolElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.symbol) }
export function RxText<O = void>(id: string, args: any, render: Render<SVGTextElement, O>, superRender?: SuperRender<O, SVGTextElement>): RxNode<SVGTextElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.text) }
export function RxTextPath<O = void>(id: string, args: any, render: Render<SVGTextPathElement, O>, superRender?: SuperRender<O, SVGTextPathElement>): RxNode<SVGTextPathElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.textPath) }
export function RxTSpan<O = void>(id: string, args: any, render: Render<SVGTSpanElement, O>, superRender?: SuperRender<O, SVGTSpanElement>): RxNode<SVGTSpanElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.tspan) }
export function RxUse<O = void>(id: string, args: any, render: Render<SVGUseElement, O>, superRender?: SuperRender<O, SVGUseElement>): RxNode<SVGUseElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.use) }
export function RxView<O = void>(id: string, args: any, render: Render<SVGViewElement, O>, superRender?: SuperRender<O, SVGViewElement>): RxNode<SVGViewElement, O> { return RxDom.Node(id, args, render, superRender, SvgTags.view) }

export function Svg(id: string, render: Render<SVGSVGElement> = nullRender): RxNode<SVGSVGElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.svg) }
export function SvgA(id: string, render: Render<SVGAElement> = nullRender): RxNode<SVGAElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.a) }
export function Animate(id: string, render: Render<SVGAnimateElement> = nullRender): RxNode<SVGAnimateElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.animate) }
export function AnimateMotion(id: string, render: Render<SVGAnimateMotionElement> = nullRender): RxNode<SVGAnimateMotionElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.animateMotion) }
export function AnimateTransform(id: string, render: Render<SVGAnimateTransformElement> = nullRender): RxNode<SVGAnimateTransformElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.animateTransform) }
export function Circle(id: string, render: Render<SVGCircleElement> = nullRender): RxNode<SVGCircleElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.circle) }
export function ClipPath(id: string, render: Render<SVGClipPathElement> = nullRender): RxNode<SVGClipPathElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.clipPath) }
export function Defs(id: string, render: Render<SVGDefsElement> = nullRender): RxNode<SVGDefsElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.defs) }
export function Desc(id: string, render: Render<SVGDescElement> = nullRender): RxNode<SVGDescElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.desc) }
export function Ellipse(id: string, render: Render<SVGEllipseElement> = nullRender): RxNode<SVGEllipseElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.ellipse) }
export function FeBlend(id: string, render: Render<SVGFEBlendElement> = nullRender): RxNode<SVGFEBlendElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.feBlend) }
export function FeColorMatrix(id: string, render: Render<SVGFEColorMatrixElement> = nullRender): RxNode<SVGFEColorMatrixElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.feColorMatrix) }
export function FeComponentTransfer(id: string, render: Render<SVGFEComponentTransferElement> = nullRender): RxNode<SVGFEComponentTransferElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.feComponentTransfer) }
export function FeComposite(id: string, render: Render<SVGFECompositeElement> = nullRender): RxNode<SVGFECompositeElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.feComposite) }
export function FeConvolveMatrix(id: string, render: Render<SVGFEConvolveMatrixElement> = nullRender): RxNode<SVGFEConvolveMatrixElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.feConvolveMatrix) }
export function FeDiffuseLighting(id: string, render: Render<SVGFEDiffuseLightingElement> = nullRender): RxNode<SVGFEDiffuseLightingElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.feDiffuseLighting) }
export function FeDisplacementMap(id: string, render: Render<SVGFEDisplacementMapElement> = nullRender): RxNode<SVGFEDisplacementMapElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.feDisplacementMap) }
export function FeDistantLight(id: string, render: Render<SVGFEDistantLightElement> = nullRender): RxNode<SVGFEDistantLightElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.feDistantLight) }
export function FeDropShadow(id: string, render: Render<SVGFEDropShadowElement> = nullRender): RxNode<SVGFEDropShadowElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.feDropShadow) }
export function FeFlood(id: string, render: Render<SVGFEFloodElement> = nullRender): RxNode<SVGFEFloodElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.feFlood) }
export function FeFuncA(id: string, render: Render<SVGFEFuncAElement> = nullRender): RxNode<SVGFEFuncAElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.feFuncA) }
export function FeFuncB(id: string, render: Render<SVGFEFuncBElement> = nullRender): RxNode<SVGFEFuncBElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.feFuncB) }
export function FeFuncG(id: string, render: Render<SVGFEFuncGElement> = nullRender): RxNode<SVGFEFuncGElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.feFuncG) }
export function FeFuncR(id: string, render: Render<SVGFEFuncRElement> = nullRender): RxNode<SVGFEFuncRElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.feFuncR) }
export function FeGaussianBlur(id: string, render: Render<SVGFEGaussianBlurElement> = nullRender): RxNode<SVGFEGaussianBlurElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.feGaussianBlur) }
export function FeImage(id: string, render: Render<SVGFEImageElement> = nullRender): RxNode<SVGFEImageElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.feImage) }
export function FeMerge(id: string, render: Render<SVGFEMergeElement> = nullRender): RxNode<SVGFEMergeElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.feMerge) }
export function FeMergeNode(id: string, render: Render<SVGFEMergeNodeElement> = nullRender): RxNode<SVGFEMergeNodeElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.feMergeNode) }
export function FeMorphology(id: string, render: Render<SVGFEMorphologyElement> = nullRender): RxNode<SVGFEMorphologyElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.feMorphology) }
export function FeOffset(id: string, render: Render<SVGFEOffsetElement> = nullRender): RxNode<SVGFEOffsetElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.feOffset) }
export function FePointLight(id: string, render: Render<SVGFEPointLightElement> = nullRender): RxNode<SVGFEPointLightElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.fePointLight) }
export function FeSpecularLighting(id: string, render: Render<SVGFESpecularLightingElement> = nullRender): RxNode<SVGFESpecularLightingElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.feSpecularLighting) }
export function FeSpotLight(id: string, render: Render<SVGFESpotLightElement> = nullRender): RxNode<SVGFESpotLightElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.feSpotLight) }
export function FeTile(id: string, render: Render<SVGFETileElement> = nullRender): RxNode<SVGFETileElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.feTile) }
export function FeTurbulence(id: string, render: Render<SVGFETurbulenceElement> = nullRender): RxNode<SVGFETurbulenceElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.feTurbulence) }
export function Filter(id: string, render: Render<SVGFilterElement> = nullRender): RxNode<SVGFilterElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.filter) }
export function ForeignObject(id: string, render: Render<SVGForeignObjectElement> = nullRender): RxNode<SVGForeignObjectElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.foreignObject) }
export function G(id: string, render: Render<SVGGElement> = nullRender): RxNode<SVGGElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.g) }
export function SvgImage(id: string, render: Render<SVGImageElement> = nullRender): RxNode<SVGImageElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.image) }
export function Line(id: string, render: Render<SVGLineElement> = nullRender): RxNode<SVGLineElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.line) }
export function LinearGradient(id: string, render: Render<SVGLinearGradientElement> = nullRender): RxNode<SVGLinearGradientElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.linearGradient) }
export function Marker(id: string, render: Render<SVGMarkerElement> = nullRender): RxNode<SVGMarkerElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.marker) }
export function Mask(id: string, render: Render<SVGMaskElement> = nullRender): RxNode<SVGMaskElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.mask) }
export function MetaData(id: string, render: Render<SVGMetadataElement> = nullRender): RxNode<SVGMetadataElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.metadata) }
export function MPath(id: string, render: Render<SVGElement> = nullRender): RxNode<SVGElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.mpath) }
export function Path(id: string, render: Render<SVGPathElement> = nullRender): RxNode<SVGPathElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.path) }
export function Pattern(id: string, render: Render<SVGPatternElement> = nullRender): RxNode<SVGPatternElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.pattern) }
export function Polygon(id: string, render: Render<SVGPolygonElement> = nullRender): RxNode<SVGPolygonElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.polygon) }
export function PolyLine(id: string, render: Render<SVGPolylineElement> = nullRender): RxNode<SVGPolylineElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.polyline) }
export function RadialGradient(id: string, render: Render<SVGRadialGradientElement> = nullRender): RxNode<SVGRadialGradientElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.radialGradient) }
export function Rect(id: string, render: Render<SVGRectElement> = nullRender): RxNode<SVGRectElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.rect) }
export function Stop(id: string, render: Render<SVGStopElement> = nullRender): RxNode<SVGStopElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.stop) }
export function SvgSwitch(id: string, render: Render<SVGSwitchElement> = nullRender): RxNode<SVGSwitchElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.switch) }
export function Symbol(id: string, render: Render<SVGSymbolElement> = nullRender): RxNode<SVGSymbolElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.symbol) }
export function Text(id: string, render: Render<SVGTextElement> = nullRender): RxNode<SVGTextElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.text) }
export function TextPath(id: string, render: Render<SVGTextPathElement> = nullRender): RxNode<SVGTextPathElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.textPath) }
export function TSpan(id: string, render: Render<SVGTSpanElement> = nullRender): RxNode<SVGTSpanElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.tspan) }
export function Use(id: string, render: Render<SVGUseElement> = nullRender): RxNode<SVGUseElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.use) }
export function View(id: string, render: Render<SVGViewElement> = nullRender): RxNode<SVGViewElement> { return RxDom.Node(id, undefined, render, undefined, SvgTags.view) }

const SvgTags = {
  svg: new SvgNodeType<SVGSVGElement>('svg'),
  a: new SvgNodeType<SVGAElement>('a'),
  animate: new SvgNodeType<SVGAnimateElement>('animate'),
  animateMotion: new SvgNodeType<SVGAnimateMotionElement>('animateMotion'),
  animateTransform: new SvgNodeType<SVGAnimateTransformElement>('animateTransform'),
  circle: new SvgNodeType<SVGCircleElement>('circle'),
  clipPath: new SvgNodeType<SVGClipPathElement>('clipPath'),
  defs: new SvgNodeType<SVGDefsElement>('defs'),
  desc: new SvgNodeType<SVGDescElement>('desc'),
  ellipse: new SvgNodeType<SVGEllipseElement>('ellipse'),
  feBlend: new SvgNodeType<SVGFEBlendElement>('feBlend'),
  feColorMatrix: new SvgNodeType<SVGFEColorMatrixElement>('feColorMatrix'),
  feComponentTransfer: new SvgNodeType<SVGFEComponentTransferElement>('feComponentTransfer'),
  feComposite: new SvgNodeType<SVGFECompositeElement>('feComposite'),
  feConvolveMatrix: new SvgNodeType<SVGFEConvolveMatrixElement>('feConvolveMatrix'),
  feDiffuseLighting: new SvgNodeType<SVGFEDiffuseLightingElement>('feDiffuseLighting'),
  feDisplacementMap: new SvgNodeType<SVGFEDisplacementMapElement>('feDisplacementMap'),
  feDistantLight: new SvgNodeType<SVGFEDistantLightElement>('feDistantLight'),
  feDropShadow: new SvgNodeType<SVGFEDropShadowElement>('feDropShadow'),
  feFlood: new SvgNodeType<SVGFEFloodElement>('feFlood'),
  feFuncA: new SvgNodeType<SVGFEFuncAElement>('feFuncA'),
  feFuncB: new SvgNodeType<SVGFEFuncBElement>('feFuncB'),
  feFuncG: new SvgNodeType<SVGFEFuncGElement>('feFuncG'),
  feFuncR: new SvgNodeType<SVGFEFuncRElement>('feFuncR'),
  feGaussianBlur: new SvgNodeType<SVGFEGaussianBlurElement>('feGaussianBlur'),
  feImage: new SvgNodeType<SVGFEImageElement>('feImage'),
  feMerge: new SvgNodeType<SVGFEMergeElement>('feMerge'),
  feMergeNode: new SvgNodeType<SVGFEMergeNodeElement>('feMergeNode'),
  feMorphology: new SvgNodeType<SVGFEMorphologyElement>('feMorphology'),
  feOffset: new SvgNodeType<SVGFEOffsetElement>('feOffset'),
  fePointLight: new SvgNodeType<SVGFEPointLightElement>('fePointLight'),
  feSpecularLighting: new SvgNodeType<SVGFESpecularLightingElement>('feSpecularLighting'),
  feSpotLight: new SvgNodeType<SVGFESpotLightElement>('feSpotLight'),
  feTile: new SvgNodeType<SVGFETileElement>('feTile'),
  feTurbulence: new SvgNodeType<SVGFETurbulenceElement>('feTurbulence'),
  filter: new SvgNodeType<SVGFilterElement>('filter'),
  foreignObject: new SvgNodeType<SVGForeignObjectElement>('foreignObject'),
  g: new SvgNodeType<SVGGElement>('g'),
  image: new SvgNodeType<SVGImageElement>('image'),
  line: new SvgNodeType<SVGLineElement>('line'),
  linearGradient: new SvgNodeType<SVGLinearGradientElement>('linearGradient'),
  marker: new SvgNodeType<SVGMarkerElement>('marker'),
  mask: new SvgNodeType<SVGMaskElement>('mask'),
  metadata: new SvgNodeType<SVGMetadataElement>('metadata'),
  mpath: new SvgNodeType<SVGElement>('mpath'),
  path: new SvgNodeType<SVGPathElement>('path'),
  pattern: new SvgNodeType<SVGPatternElement>('pattern'),
  polygon: new SvgNodeType<SVGPolygonElement>('polygon'),
  polyline: new SvgNodeType<SVGPolylineElement>('polyline'),
  radialGradient: new SvgNodeType<SVGRadialGradientElement>('radialGradient'),
  rect: new SvgNodeType<SVGRectElement>('rect'),
  stop: new SvgNodeType<SVGStopElement>('stop'),
  switch: new SvgNodeType<SVGSwitchElement>('switch'),
  symbol: new SvgNodeType<SVGSymbolElement>('symbol'),
  text: new SvgNodeType<SVGTextElement>('text'),
  textPath: new SvgNodeType<SVGTextPathElement>('textPath'),
  tspan: new SvgNodeType<SVGTSpanElement>('tspan'),
  use: new SvgNodeType<SVGUseElement>('use'),
  view: new SvgNodeType<SVGViewElement>('view'),
}
