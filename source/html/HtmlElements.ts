// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { RxDom, Render, RxNode, SuperRender } from '../core/api'
import { HtmlNodeType, SvgNodeType } from './HtmlRtti'

export function HtmlBody(id: string, args: any, render: Render<HTMLElement>): RxNode<HTMLElement> {
  return RxDom.Node(id, args, render, undefined, undefined, {
    name: id,
    sequential: true,
    initialize(node: RxNode<HTMLElement, any>, sibling?: RxNode): void {
      const native = global.document.body
      native.id = node.id
      node.instance!.native = native
    },
  })
}

function nullRender(e: Element): void { /* nop */ }
export function RxA<O = void>(id: string, args: any, render: Render<HTMLAnchorElement, O>, superRender?: SuperRender<O, HTMLAnchorElement>, priority?: number, inline?: boolean): RxNode<HTMLAnchorElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.a, inline) }
export function RxAbbr<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.abbr, inline) }
export function RxAddress<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.address, inline) }
export function RxArea<O = void>(id: string, args: any, render: Render<HTMLAreaElement, O>, superRender?: SuperRender<O, HTMLAreaElement>, priority?: number, inline?: boolean): RxNode<HTMLAreaElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.area, inline) }
export function RxArticle<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.article, inline) }
export function RxAside<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.aside, inline) }
export function RxAudio<O = void>(id: string, args: any, render: Render<HTMLAudioElement, O>, superRender?: SuperRender<O, HTMLAudioElement>, priority?: number, inline?: boolean): RxNode<HTMLAudioElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.audio, inline) }
export function RxB<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.b, inline) }
export function RxBase<O = void>(id: string, args: any, render: Render<HTMLBaseElement, O>, superRender?: SuperRender<O, HTMLBaseElement>, priority?: number, inline?: boolean): RxNode<HTMLBaseElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.base, inline) }
export function RxBdi<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.bdi, inline) }
export function RxBdo<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.bdo, inline) }
export function RxBig<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.big, inline) }
export function RxBlockQuote<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.blockquote, inline) }
export function RxBody<O = void>(id: string, args: any, render: Render<HTMLBodyElement, O>, superRender?: SuperRender<O, HTMLBodyElement>, priority?: number, inline?: boolean): RxNode<HTMLBodyElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.body, inline) }
export function RxBR<O = void>(id: string, args: any, render: Render<HTMLBRElement, O>, superRender?: SuperRender<O, HTMLBRElement>, priority?: number, inline?: boolean): RxNode<HTMLBRElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.br, inline) }
export function RxButton<O = void>(id: string, args: any, render: Render<HTMLButtonElement, O>, superRender?: SuperRender<O, HTMLButtonElement>, priority?: number, inline?: boolean): RxNode<HTMLButtonElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.button, inline) }
export function RxCanvas<O = void>(id: string, args: any, render: Render<HTMLCanvasElement, O>, superRender?: SuperRender<O, HTMLCanvasElement>, priority?: number, inline?: boolean): RxNode<HTMLCanvasElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.canvas, inline) }
export function RxCaption<O = void>(id: string, args: any, render: Render<HTMLTableCaptionElement, O>, superRender?: SuperRender<O, HTMLTableCaptionElement>, priority?: number, inline?: boolean): RxNode<HTMLTableCaptionElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.caption, inline) }
export function RxCite<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.cite, inline) }
export function RxCode<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.code, inline) }
export function RxCol<O = void>(id: string, args: any, render: Render<HTMLTableColElement, O>, superRender?: SuperRender<O, HTMLTableColElement>, priority?: number, inline?: boolean): RxNode<HTMLTableColElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.col, inline) }
export function RxColGroup<O = void>(id: string, args: any, render: Render<HTMLTableColElement, O>, superRender?: SuperRender<O, HTMLTableColElement>, priority?: number, inline?: boolean): RxNode<HTMLTableColElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.colgroup, inline) }
export function RxData<O = void>(id: string, args: any, render: Render<HTMLDataElement, O>, superRender?: SuperRender<O, HTMLDataElement>, priority?: number, inline?: boolean): RxNode<HTMLDataElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.data, inline) }
export function RxDataList<O = void>(id: string, args: any, render: Render<HTMLDataListElement, O>, superRender?: SuperRender<O, HTMLDataListElement>, priority?: number, inline?: boolean): RxNode<HTMLDataListElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.datalist, inline) }
export function RxDD<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.dd, inline) }
export function RxDel<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.del, inline) }
export function RxDetails<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.details, inline) }
export function RxDfn<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.dfn, inline) }
export function RxDialog<O = void>(id: string, args: any, render: Render<HTMLDialogElement, O>, superRender?: SuperRender<O, HTMLDialogElement>, priority?: number, inline?: boolean): RxNode<HTMLDialogElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.dialog, inline) }
export function RxDiv<O = void>(id: string, args: any, render: Render<HTMLDivElement, O>, superRender?: SuperRender<O, HTMLDivElement>, priority?: number, inline?: boolean): RxNode<HTMLDivElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.div, inline) }
export function RxDL<O = void>(id: string, args: any, render: Render<HTMLDListElement, O>, superRender?: SuperRender<O, HTMLDListElement>, priority?: number, inline?: boolean): RxNode<HTMLDListElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.dl, inline) }
export function RxDT<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.dt, inline) }
export function RxEM<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.em, inline) }
export function RxEmbed<O = void>(id: string, args: any, render: Render<HTMLEmbedElement, O>, superRender?: SuperRender<O, HTMLEmbedElement>, priority?: number, inline?: boolean): RxNode<HTMLEmbedElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.embed, inline) }
export function RxFieldSet<O = void>(id: string, args: any, render: Render<HTMLFieldSetElement, O>, superRender?: SuperRender<O, HTMLFieldSetElement>, priority?: number, inline?: boolean): RxNode<HTMLFieldSetElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.fieldset, inline) }
export function RxFigCaption<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.figcaption, inline) }
export function RxFigure<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.figure, inline) }
export function RxFooter<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.footer, inline) }
export function RxForm<O = void>(id: string, args: any, render: Render<HTMLFormElement, O>, superRender?: SuperRender<O, HTMLFormElement>, priority?: number, inline?: boolean): RxNode<HTMLFormElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.form, inline) }
export function RxH1<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, superRender?: SuperRender<O, HTMLHeadingElement>, priority?: number, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.h1, inline) }
export function RxH2<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, superRender?: SuperRender<O, HTMLHeadingElement>, priority?: number, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.h2, inline) }
export function RxH3<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, superRender?: SuperRender<O, HTMLHeadingElement>, priority?: number, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.h3, inline) }
export function RxH4<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, superRender?: SuperRender<O, HTMLHeadingElement>, priority?: number, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.h4, inline) }
export function RxH5<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, superRender?: SuperRender<O, HTMLHeadingElement>, priority?: number, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.h5, inline) }
export function RxH6<O = void>(id: string, args: any, render: Render<HTMLHeadingElement, O>, superRender?: SuperRender<O, HTMLHeadingElement>, priority?: number, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.h6, inline) }
export function RxHead<O = void>(id: string, args: any, render: Render<HTMLHeadElement, O>, superRender?: SuperRender<O, HTMLHeadElement>, priority?: number, inline?: boolean): RxNode<HTMLHeadElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.head, inline) }
export function RxHeader<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.header, inline) }
export function RxHGroup<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.hgroup, inline) }
export function RxHR<O = void>(id: string, args: any, render: Render<HTMLHRElement, O>, superRender?: SuperRender<O, HTMLHRElement>, priority?: number, inline?: boolean): RxNode<HTMLHRElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.hr, inline) }
export function RxHtml<O = void>(id: string, args: any, render: Render<HTMLHtmlElement, O>, superRender?: SuperRender<O, HTMLHtmlElement>, priority?: number, inline?: boolean): RxNode<HTMLHtmlElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.html, inline) }
export function RxI<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.i, inline) }
export function RxIFrame<O = void>(id: string, args: any, render: Render<HTMLIFrameElement, O>, superRender?: SuperRender<O, HTMLIFrameElement>, priority?: number, inline?: boolean): RxNode<HTMLIFrameElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.iframe, inline) }
export function RxImg<O = void>(id: string, args: any, render: Render<HTMLImageElement, O>, superRender?: SuperRender<O, HTMLImageElement>, priority?: number, inline?: boolean): RxNode<HTMLImageElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.img, inline) }
export function RxInput<O = void>(id: string, args: any, render: Render<HTMLInputElement, O>, superRender?: SuperRender<O, HTMLInputElement>, priority?: number, inline?: boolean): RxNode<HTMLInputElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.input, inline) }
export function RxIns<O = void>(id: string, args: any, render: Render<HTMLModElement, O>, superRender?: SuperRender<O, HTMLModElement>, priority?: number, inline?: boolean): RxNode<HTMLModElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.ins, inline) }
export function RxKbd<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.kbd, inline) }
export function RxKeygen<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.keygen, inline) }
export function RxLabel<O = void>(id: string, args: any, render: Render<HTMLLabelElement, O>, superRender?: SuperRender<O, HTMLLabelElement>, priority?: number, inline?: boolean): RxNode<HTMLLabelElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.label, inline) }
export function RxLegend<O = void>(id: string, args: any, render: Render<HTMLLegendElement, O>, superRender?: SuperRender<O, HTMLLegendElement>, priority?: number, inline?: boolean): RxNode<HTMLLegendElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.legend, inline) }
export function RxLI<O = void>(id: string, args: any, render: Render<HTMLLIElement, O>, superRender?: SuperRender<O, HTMLLIElement>, priority?: number, inline?: boolean): RxNode<HTMLLIElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.li, inline) }
export function RxLink<O = void>(id: string, args: any, render: Render<HTMLLinkElement, O>, superRender?: SuperRender<O, HTMLLinkElement>, priority?: number, inline?: boolean): RxNode<HTMLLinkElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.link, inline) }
export function RxMain<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.main, inline) }
export function RxMap<O = void>(id: string, args: any, render: Render<HTMLMapElement, O>, superRender?: SuperRender<O, HTMLMapElement>, priority?: number, inline?: boolean): RxNode<HTMLMapElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.map, inline) }
export function RxMark<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.mark, inline) }
export function RxMenu<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.menu, inline) }
export function RxMenuItem<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.menuitem, inline) }
export function RxMeta<O = void>(id: string, args: any, render: Render<HTMLMetaElement, O>, superRender?: SuperRender<O, HTMLMetaElement>, priority?: number, inline?: boolean): RxNode<HTMLMetaElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.meta, inline) }
export function RxMeter<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.meter, inline) }
export function RxNav<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.nav, inline) }
export function RxNoIndex<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.noindex, inline) }
export function RxNoScript<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.noscript, inline) }
export function RxObj<O = void>(id: string, args: any, render: Render<HTMLObjectElement, O>, superRender?: SuperRender<O, HTMLObjectElement>, priority?: number, inline?: boolean): RxNode<HTMLObjectElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.object, inline) }
export function RxOL<O = void>(id: string, args: any, render: Render<HTMLOListElement, O>, superRender?: SuperRender<O, HTMLOListElement>, priority?: number, inline?: boolean): RxNode<HTMLOListElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.ol, inline) }
export function RxOptGroup<O = void>(id: string, args: any, render: Render<HTMLOptGroupElement, O>, superRender?: SuperRender<O, HTMLOptGroupElement>, priority?: number, inline?: boolean): RxNode<HTMLOptGroupElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.optgroup, inline) }
export function RxOption<O = void>(id: string, args: any, render: Render<HTMLOptionElement, O>, superRender?: SuperRender<O, HTMLOptionElement>, priority?: number, inline?: boolean): RxNode<HTMLOptionElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.option, inline) }
export function RxOutput<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.output, inline) }
export function RxP<O = void>(id: string, args: any, render: Render<HTMLParagraphElement, O>, superRender?: SuperRender<O, HTMLParagraphElement>, priority?: number, inline?: boolean): RxNode<HTMLParagraphElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.p, inline) }
export function RxParam<O = void>(id: string, args: any, render: Render<HTMLParamElement, O>, superRender?: SuperRender<O, HTMLParamElement>, priority?: number, inline?: boolean): RxNode<HTMLParamElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.param, inline) }
export function RxPicture<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.picture, inline) }
export function RxPre<O = void>(id: string, args: any, render: Render<HTMLPreElement, O>, superRender?: SuperRender<O, HTMLPreElement>, priority?: number, inline?: boolean): RxNode<HTMLPreElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.pre, inline) }
export function RxProgress<O = void>(id: string, args: any, render: Render<HTMLProgressElement, O>, superRender?: SuperRender<O, HTMLProgressElement>, priority?: number, inline?: boolean): RxNode<HTMLProgressElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.progress, inline) }
export function RxQ<O = void>(id: string, args: any, render: Render<HTMLQuoteElement, O>, superRender?: SuperRender<O, HTMLQuoteElement>, priority?: number, inline?: boolean): RxNode<HTMLQuoteElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.q, inline) }
export function RxRP<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.rp, inline) }
export function RxRT<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.rt, inline) }
export function RxRuby<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.ruby, inline) }
export function RxS<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.s, inline) }
export function RxSamp<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.samp, inline) }
export function RxScript<O = void>(id: string, args: any, render: Render<HTMLScriptElement, O>, superRender?: SuperRender<O, HTMLScriptElement>, priority?: number, inline?: boolean): RxNode<HTMLScriptElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.script, inline) }
export function RxSection<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.section, inline) }
export function RxSelect<O = void>(id: string, args: any, render: Render<HTMLSelectElement, O>, superRender?: SuperRender<O, HTMLSelectElement>, priority?: number, inline?: boolean): RxNode<HTMLSelectElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.select, inline) }
export function RxSmall<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.small, inline) }
export function RxSource<O = void>(id: string, args: any, render: Render<HTMLSourceElement, O>, superRender?: SuperRender<O, HTMLSourceElement>, priority?: number, inline?: boolean): RxNode<HTMLSourceElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.source, inline) }
export function RxSpan<O = void>(id: string, args: any, render: Render<HTMLSpanElement, O>, superRender?: SuperRender<O, HTMLSpanElement>, priority?: number, inline?: boolean): RxNode<HTMLSpanElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.span, inline) }
export function RxStrong<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.strong, inline) }
export function RxStyle<O = void>(id: string, args: any, render: Render<HTMLStyleElement, O>, superRender?: SuperRender<O, HTMLStyleElement>, priority?: number, inline?: boolean): RxNode<HTMLStyleElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.style, inline) }
export function RxSub<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.sub, inline) }
export function RxSummary<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.summary, inline) }
export function RxSup<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.sup, inline) }
export function RxTable<O = void>(id: string, args: any, render: Render<HTMLTableElement, O>, superRender?: SuperRender<O, HTMLTableElement>, priority?: number, inline?: boolean): RxNode<HTMLTableElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.table, inline) }
export function RxTemplate<O = void>(id: string, args: any, render: Render<HTMLTemplateElement, O>, superRender?: SuperRender<O, HTMLTemplateElement>, priority?: number, inline?: boolean): RxNode<HTMLTemplateElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.template, inline) }
export function RxTBody<O = void>(id: string, args: any, render: Render<HTMLTableSectionElement, O>, superRender?: SuperRender<O, HTMLTableSectionElement>, priority?: number, inline?: boolean): RxNode<HTMLTableSectionElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.tbody, inline) }
export function RxTD<O = void>(id: string, args: any, render: Render<HTMLTableCellElement, O>, superRender?: SuperRender<O, HTMLTableCellElement>, priority?: number, inline?: boolean): RxNode<HTMLTableCellElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.td, inline) }
export function RxTextArea<O = void>(id: string, args: any, render: Render<HTMLTextAreaElement, O>, superRender?: SuperRender<O, HTMLTextAreaElement>, priority?: number, inline?: boolean): RxNode<HTMLTextAreaElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.textarea, inline) }
export function RxTFoot<O = void>(id: string, args: any, render: Render<HTMLTableSectionElement, O>, superRender?: SuperRender<O, HTMLTableSectionElement>, priority?: number, inline?: boolean): RxNode<HTMLTableSectionElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.tfoot, inline) }
export function RxTH<O = void>(id: string, args: any, render: Render<HTMLTableCellElement, O>, superRender?: SuperRender<O, HTMLTableCellElement>, priority?: number, inline?: boolean): RxNode<HTMLTableHeaderCellElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.th, inline) }
export function RxTHead<O = void>(id: string, args: any, render: Render<HTMLTableSectionElement, O>, superRender?: SuperRender<O, HTMLTableSectionElement>, priority?: number, inline?: boolean): RxNode<HTMLTableSectionElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.thead, inline) }
export function RxTime<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.time, inline) }
export function RxTitle<O = void>(id: string, args: any, render: Render<HTMLTitleElement, O>, superRender?: SuperRender<O, HTMLTitleElement>, priority?: number, inline?: boolean): RxNode<HTMLTitleElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.title, inline) }
export function RxTR<O = void>(id: string, args: any, render: Render<HTMLTableRowElement, O>, superRender?: SuperRender<O, HTMLTableRowElement>, priority?: number, inline?: boolean): RxNode<HTMLTableRowElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.tr, inline) }
export function RxTrack<O = void>(id: string, args: any, render: Render<HTMLTrackElement, O>, superRender?: SuperRender<O, HTMLTrackElement>, priority?: number, inline?: boolean): RxNode<HTMLTrackElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.track, inline) }
export function RxU<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.u, inline) }
export function RxUL<O = void>(id: string, args: any, render: Render<HTMLUListElement, O>, superRender?: SuperRender<O, HTMLUListElement>, priority?: number, inline?: boolean): RxNode<HTMLUListElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.ul, inline) }
export function RxVar<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.var, inline) }
export function RxVideo<O = void>(id: string, args: any, render: Render<HTMLVideoElement, O>, superRender?: SuperRender<O, HTMLVideoElement>, priority?: number, inline?: boolean): RxNode<HTMLVideoElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.video, inline) }
export function RxWbr<O = void>(id: string, args: any, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, priority?: number, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(id, args, render, superRender, priority, HtmlTags.wbr, inline) }

export function A(id: string, render: Render<HTMLAnchorElement> = nullRender, priority?: number): RxNode<HTMLAnchorElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.a, true) }
export function Abbr(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.abbr, true) }
export function Address(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.address, true) }
export function Area(id: string, render: Render<HTMLAreaElement> = nullRender, priority?: number): RxNode<HTMLAreaElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.area, true) }
export function Article(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.article, true) }
export function Aside(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.aside, true) }
export function Audio(id: string, render: Render<HTMLAudioElement> = nullRender, priority?: number): RxNode<HTMLAudioElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.audio, true) }
export function B(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.b, true) }
export function Base(id: string, render: Render<HTMLBaseElement> = nullRender, priority?: number): RxNode<HTMLBaseElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.base, true) }
export function Bdi(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.bdi, true) }
export function Bdo(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.bdo, true) }
export function Big(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.big, true) }
export function BlockQuote(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.blockquote, true) }
export function Body(id: string, render: Render<HTMLBodyElement> = nullRender, priority?: number): RxNode<HTMLBodyElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.body, true) }
export function BR(id: string, render: Render<HTMLBRElement> = nullRender, priority?: number): RxNode<HTMLBRElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.br, true) }
export function Button(id: string, render: Render<HTMLButtonElement> = nullRender, priority?: number): RxNode<HTMLButtonElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.button, true) }
export function Canvas(id: string, render: Render<HTMLCanvasElement> = nullRender, priority?: number): RxNode<HTMLCanvasElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.canvas, true) }
export function Caption(id: string, render: Render<HTMLTableCaptionElement> = nullRender, priority?: number): RxNode<HTMLTableCaptionElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.caption, true) }
export function Cite(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.cite, true) }
export function Code(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.code, true) }
export function Col(id: string, render: Render<HTMLTableColElement> = nullRender, priority?: number): RxNode<HTMLTableColElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.col, true) }
export function ColGroup(id: string, render: Render<HTMLTableColElement> = nullRender, priority?: number): RxNode<HTMLTableColElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.colgroup, true) }
export function Data(id: string, render: Render<HTMLDataElement> = nullRender, priority?: number): RxNode<HTMLDataElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.data, true) }
export function DataList(id: string, render: Render<HTMLDataListElement> = nullRender, priority?: number): RxNode<HTMLDataListElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.datalist, true) }
export function DD(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.dd, true) }
export function Del(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.del, true) }
export function Details(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.details, true) }
export function Dfn(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.dfn, true) }
export function Dialog(id: string, render: Render<HTMLDialogElement> = nullRender, priority?: number): RxNode<HTMLDialogElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.dialog, true) }
export function Div(id: string, render: Render<HTMLDivElement> = nullRender, priority?: number): RxNode<HTMLDivElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.div, true) }
export function DL(id: string, render: Render<HTMLDListElement> = nullRender, priority?: number): RxNode<HTMLDListElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.dl, true) }
export function DT(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.dt, true) }
export function EM(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.em, true) }
export function Embed(id: string, render: Render<HTMLEmbedElement> = nullRender, priority?: number): RxNode<HTMLEmbedElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.embed, true) }
export function FieldSet(id: string, render: Render<HTMLFieldSetElement> = nullRender, priority?: number): RxNode<HTMLFieldSetElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.fieldset, true) }
export function FigCaption(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.figcaption, true) }
export function Figure(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.figure, true) }
export function Footer(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.footer, true) }
export function Form(id: string, render: Render<HTMLFormElement> = nullRender, priority?: number): RxNode<HTMLFormElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.form, true) }
export function H1(id: string, render: Render<HTMLHeadingElement> = nullRender, priority?: number): RxNode<HTMLHeadingElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.h1, true) }
export function H2(id: string, render: Render<HTMLHeadingElement> = nullRender, priority?: number): RxNode<HTMLHeadingElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.h2, true) }
export function H3(id: string, render: Render<HTMLHeadingElement> = nullRender, priority?: number): RxNode<HTMLHeadingElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.h3, true) }
export function H4(id: string, render: Render<HTMLHeadingElement> = nullRender, priority?: number): RxNode<HTMLHeadingElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.h4, true) }
export function H5(id: string, render: Render<HTMLHeadingElement> = nullRender, priority?: number): RxNode<HTMLHeadingElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.h5, true) }
export function H6(id: string, render: Render<HTMLHeadingElement> = nullRender, priority?: number): RxNode<HTMLHeadingElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.h6, true) }
export function Head(id: string, render: Render<HTMLHeadElement> = nullRender, priority?: number): RxNode<HTMLHeadElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.head, true) }
export function Header(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.header, true) }
export function HGroup(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.hgroup, true) }
export function HR(id: string, render: Render<HTMLHRElement> = nullRender, priority?: number): RxNode<HTMLHRElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.hr, true) }
export function Html(id: string, render: Render<HTMLHtmlElement> = nullRender, priority?: number): RxNode<HTMLHtmlElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.html, true) }
export function I(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.i, true) }
export function IFrame(id: string, render: Render<HTMLIFrameElement> = nullRender, priority?: number): RxNode<HTMLIFrameElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.iframe, true) }
export function Img(id: string, render: Render<HTMLImageElement> = nullRender, priority?: number): RxNode<HTMLImageElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.img, true) }
export function Input(id: string, render: Render<HTMLInputElement> = nullRender, priority?: number): RxNode<HTMLInputElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.input, true) }
export function Ins(id: string, render: Render<HTMLModElement> = nullRender, priority?: number): RxNode<HTMLModElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.ins, true) }
export function Kbd(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.kbd, true) }
export function KeyGen(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.keygen, true) }
export function Label(id: string, render: Render<HTMLLabelElement> = nullRender, priority?: number): RxNode<HTMLLabelElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.label, true) }
export function Legend(id: string, render: Render<HTMLLegendElement> = nullRender, priority?: number): RxNode<HTMLLegendElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.legend, true) }
export function LI(id: string, render: Render<HTMLLIElement> = nullRender, priority?: number): RxNode<HTMLLIElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.li, true) }
export function Link(id: string, render: Render<HTMLLinkElement> = nullRender, priority?: number): RxNode<HTMLLinkElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.link, true) }
export function Main(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.main, true) }
export function Map(id: string, render: Render<HTMLMapElement> = nullRender, priority?: number): RxNode<HTMLMapElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.map, true) }
export function Mark(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.mark, true) }
export function Menu(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.menu, true) }
export function MenuItem(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.menuitem, true) }
export function Meta(id: string, render: Render<HTMLMetaElement> = nullRender, priority?: number): RxNode<HTMLMetaElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.meta, true) }
export function Meter(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.meter, true) }
export function Nav(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.nav, true) }
export function NoIndex(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.noindex, true) }
export function NoScript(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.noscript, true) }
export function Obj(id: string, render: Render<HTMLObjectElement> = nullRender, priority?: number): RxNode<HTMLObjectElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.object, true) }
export function OL(id: string, render: Render<HTMLOListElement> = nullRender, priority?: number): RxNode<HTMLOListElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.ol, true) }
export function OptGroup(id: string, render: Render<HTMLOptGroupElement> = nullRender, priority?: number): RxNode<HTMLOptGroupElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.optgroup, true) }
export function Option(id: string, render: Render<HTMLOptionElement> = nullRender, priority?: number): RxNode<HTMLOptionElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.option, true) }
export function Output(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.output, true) }
export function P(id: string, render: Render<HTMLParagraphElement> = nullRender, priority?: number): RxNode<HTMLParagraphElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.p, true) }
export function Param(id: string, render: Render<HTMLParamElement> = nullRender, priority?: number): RxNode<HTMLParamElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.param, true) }
export function Picture(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.picture, true) }
export function Pre(id: string, render: Render<HTMLPreElement> = nullRender, priority?: number): RxNode<HTMLPreElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.pre, true) }
export function Progress(id: string, render: Render<HTMLProgressElement> = nullRender, priority?: number): RxNode<HTMLProgressElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.progress, true) }
export function Q(id: string, render: Render<HTMLQuoteElement> = nullRender, priority?: number): RxNode<HTMLQuoteElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.q, true) }
export function RP(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.rp, true) }
export function RT(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.rt, true) }
export function Ruby(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.ruby, true) }
export function S(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.s, true) }
export function Samp(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.samp, true) }
export function Script(id: string, render: Render<HTMLScriptElement> = nullRender, priority?: number): RxNode<HTMLScriptElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.script, true) }
export function Section(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.section, true) }
export function Select(id: string, render: Render<HTMLSelectElement> = nullRender, priority?: number): RxNode<HTMLSelectElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.select, true) }
export function Small(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.small, true) }
export function Source(id: string, render: Render<HTMLSourceElement> = nullRender, priority?: number): RxNode<HTMLSourceElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.source, true) }
export function Span(id: string, render: Render<HTMLSpanElement> = nullRender, priority?: number): RxNode<HTMLSpanElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.span, true) }
export function Strong(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.strong, true) }
export function Style(id: string, render: Render<HTMLStyleElement> = nullRender, priority?: number): RxNode<HTMLStyleElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.style, true) }
export function Sub(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.sub, true) }
export function Summary(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.summary, true) }
export function Sup(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.sup, true) }
export function Table(id: string, render: Render<HTMLTableElement> = nullRender, priority?: number): RxNode<HTMLTableElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.table, true) }
export function Template(id: string, render: Render<HTMLTemplateElement> = nullRender, priority?: number): RxNode<HTMLTemplateElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.template, true) }
export function TBody(id: string, render: Render<HTMLTableSectionElement> = nullRender, priority?: number): RxNode<HTMLTableSectionElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.tbody, true) }
export function TD(id: string, render: Render<HTMLTableDataCellElement> = nullRender, priority?: number): RxNode<HTMLTableDataCellElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.td, true) }
export function TextArea(id: string, render: Render<HTMLTextAreaElement> = nullRender, priority?: number): RxNode<HTMLTextAreaElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.textarea, true) }
export function TFoot(id: string, render: Render<HTMLTableSectionElement> = nullRender, priority?: number): RxNode<HTMLTableSectionElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.tfoot, true) }
export function TH(id: string, render: Render<HTMLTableHeaderCellElement> = nullRender, priority?: number): RxNode<HTMLTableHeaderCellElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.th, true) }
export function THead(id: string, render: Render<HTMLTableSectionElement> = nullRender, priority?: number): RxNode<HTMLTableSectionElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.thead, true) }
export function Time(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.time, true) }
export function Title(id: string, render: Render<HTMLTitleElement> = nullRender, priority?: number): RxNode<HTMLTitleElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.title, true) }
export function TR(id: string, render: Render<HTMLTableRowElement> = nullRender, priority?: number): RxNode<HTMLTableRowElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.tr, true) }
export function Track(id: string, render: Render<HTMLTrackElement> = nullRender, priority?: number): RxNode<HTMLTrackElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.track, true) }
export function U(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.u, true) }
export function UL(id: string, render: Render<HTMLUListElement> = nullRender, priority?: number): RxNode<HTMLUListElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.ul, true) }
export function Var(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.var, true) }
export function Video(id: string, render: Render<HTMLVideoElement> = nullRender, priority?: number): RxNode<HTMLVideoElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.video, true) }
export function Wbr(id: string, render: Render<HTMLElement> = nullRender, priority?: number): RxNode<HTMLElement> { return RxDom.Node(id, undefined, render, undefined, priority, HtmlTags.wbr, true) }

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
  // webview: new HtmlRtti<HTMLWebViewElement>('webview'),
}

export function RxSvg<O = void>(id: string, args: any, render: Render<SVGSVGElement, O>, superRender?: SuperRender<O, SVGSVGElement>, priority?: number): RxNode<SVGSVGElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.svg) }
export function RxSvgA<O = void>(id: string, args: any, render: Render<SVGAElement, O>, superRender?: SuperRender<O, SVGAElement>, priority?: number): RxNode<SVGAElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.a) }
export function RxAnimate<O = void>(id: string, args: any, render: Render<SVGAnimateElement, O>, superRender?: SuperRender<O, SVGAnimateElement>, priority?: number): RxNode<SVGAnimateElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.animate) }
export function RxAnimateMotion<O = void>(id: string, args: any, render: Render<SVGAnimateMotionElement, O>, superRender?: SuperRender<O, SVGAnimateMotionElement>, priority?: number): RxNode<SVGAnimateMotionElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.animateMotion) }
export function RxAnimateTransform<O = void>(id: string, args: any, render: Render<SVGAnimateTransformElement, O>, superRender?: SuperRender<O, SVGAnimateTransformElement>, priority?: number): RxNode<SVGAnimateTransformElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.animateTransform) }
export function RxCircle<O = void>(id: string, args: any, render: Render<SVGCircleElement, O>, superRender?: SuperRender<O, SVGCircleElement>, priority?: number): RxNode<SVGCircleElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.circle) }
export function RxClipPath<O = void>(id: string, args: any, render: Render<SVGClipPathElement, O>, superRender?: SuperRender<O, SVGClipPathElement>, priority?: number): RxNode<SVGClipPathElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.clipPath) }
export function RxDefs<O = void>(id: string, args: any, render: Render<SVGDefsElement, O>, superRender?: SuperRender<O, SVGDefsElement>, priority?: number): RxNode<SVGDefsElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.defs) }
export function RxDesc<O = void>(id: string, args: any, render: Render<SVGDescElement, O>, superRender?: SuperRender<O, SVGDescElement>, priority?: number): RxNode<SVGDescElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.desc) }
export function RxEllipse<O = void>(id: string, args: any, render: Render<SVGEllipseElement, O>, superRender?: SuperRender<O, SVGEllipseElement>, priority?: number): RxNode<SVGEllipseElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.ellipse) }
export function RxFeBlend<O = void>(id: string, args: any, render: Render<SVGFEBlendElement, O>, superRender?: SuperRender<O, SVGFEBlendElement>, priority?: number): RxNode<SVGFEBlendElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feBlend) }
export function RxFeColorMatrix<O = void>(id: string, args: any, render: Render<SVGFEColorMatrixElement, O>, superRender?: SuperRender<O, SVGFEColorMatrixElement>, priority?: number): RxNode<SVGFEColorMatrixElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feColorMatrix) }
export function RxFeComponentTransfer<O = void>(id: string, args: any, render: Render<SVGFEComponentTransferElement, O>, superRender?: SuperRender<O, SVGFEComponentTransferElement>, priority?: number): RxNode<SVGFEComponentTransferElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feComponentTransfer) }
export function RxFeComposite<O = void>(id: string, args: any, render: Render<SVGFECompositeElement, O>, superRender?: SuperRender<O, SVGFECompositeElement>, priority?: number): RxNode<SVGFECompositeElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feComposite) }
export function RxFeConvolveMatrix<O = void>(id: string, args: any, render: Render<SVGFEConvolveMatrixElement, O>, superRender?: SuperRender<O, SVGFEConvolveMatrixElement>, priority?: number): RxNode<SVGFEConvolveMatrixElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feConvolveMatrix) }
export function RxFeDiffuseLighting<O = void>(id: string, args: any, render: Render<SVGFEDiffuseLightingElement, O>, superRender?: SuperRender<O, SVGFEDiffuseLightingElement>, priority?: number): RxNode<SVGFEDiffuseLightingElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feDiffuseLighting) }
export function RxFeDisplacementMap<O = void>(id: string, args: any, render: Render<SVGFEDisplacementMapElement, O>, superRender?: SuperRender<O, SVGFEDisplacementMapElement>, priority?: number): RxNode<SVGFEDisplacementMapElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feDisplacementMap) }
export function RxFeDistantLight<O = void>(id: string, args: any, render: Render<SVGFEDistantLightElement, O>, superRender?: SuperRender<O, SVGFEDistantLightElement>, priority?: number): RxNode<SVGFEDistantLightElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feDistantLight) }
export function RxFeDropShadow<O = void>(id: string, args: any, render: Render<SVGFEDropShadowElement, O>, superRender?: SuperRender<O, SVGFEDropShadowElement>, priority?: number): RxNode<SVGFEDropShadowElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feDropShadow) }
export function RxFeFlood<O = void>(id: string, args: any, render: Render<SVGFEFloodElement, O>, superRender?: SuperRender<O, SVGFEFloodElement>, priority?: number): RxNode<SVGFEFloodElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feFlood) }
export function RxFeFuncA<O = void>(id: string, args: any, render: Render<SVGFEFuncAElement, O>, superRender?: SuperRender<O, SVGFEFuncAElement>, priority?: number): RxNode<SVGFEFuncAElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feFuncA) }
export function RxFeFuncB<O = void>(id: string, args: any, render: Render<SVGFEFuncBElement, O>, superRender?: SuperRender<O, SVGFEFuncBElement>, priority?: number): RxNode<SVGFEFuncBElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feFuncB) }
export function RxFeFuncG<O = void>(id: string, args: any, render: Render<SVGFEFuncGElement, O>, superRender?: SuperRender<O, SVGFEFuncGElement>, priority?: number): RxNode<SVGFEFuncGElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feFuncG) }
export function RxFeFuncR<O = void>(id: string, args: any, render: Render<SVGFEFuncRElement, O>, superRender?: SuperRender<O, SVGFEFuncRElement>, priority?: number): RxNode<SVGFEFuncRElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feFuncR) }
export function RxFeGaussianBlur<O = void>(id: string, args: any, render: Render<SVGFEGaussianBlurElement, O>, superRender?: SuperRender<O, SVGFEGaussianBlurElement>, priority?: number): RxNode<SVGFEGaussianBlurElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feGaussianBlur) }
export function RxFeImage<O = void>(id: string, args: any, render: Render<SVGFEImageElement, O>, superRender?: SuperRender<O, SVGFEImageElement>, priority?: number): RxNode<SVGFEImageElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feImage) }
export function RxFeMerge<O = void>(id: string, args: any, render: Render<SVGFEMergeElement, O>, superRender?: SuperRender<O, SVGFEMergeElement>, priority?: number): RxNode<SVGFEMergeElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feMerge) }
export function RxFeMergeNode<O = void>(id: string, args: any, render: Render<SVGFEMergeNodeElement, O>, superRender?: SuperRender<O, SVGFEMergeNodeElement>, priority?: number): RxNode<SVGFEMergeNodeElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feMergeNode) }
export function RxFeMorphology<O = void>(id: string, args: any, render: Render<SVGFEMorphologyElement, O>, superRender?: SuperRender<O, SVGFEMorphologyElement>, priority?: number): RxNode<SVGFEMorphologyElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feMorphology) }
export function RxFeOffset<O = void>(id: string, args: any, render: Render<SVGFEOffsetElement, O>, superRender?: SuperRender<O, SVGFEOffsetElement>, priority?: number): RxNode<SVGFEOffsetElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feOffset) }
export function RxFePointLight<O = void>(id: string, args: any, render: Render<SVGFEPointLightElement, O>, superRender?: SuperRender<O, SVGFEPointLightElement>, priority?: number): RxNode<SVGFEPointLightElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.fePointLight) }
export function RxFeSpecularLighting<O = void>(id: string, args: any, render: Render<SVGFESpecularLightingElement, O>, superRender?: SuperRender<O, SVGFESpecularLightingElement>, priority?: number): RxNode<SVGFESpecularLightingElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feSpecularLighting) }
export function RxFeSpotLight<O = void>(id: string, args: any, render: Render<SVGFESpotLightElement, O>, superRender?: SuperRender<O, SVGFESpotLightElement>, priority?: number): RxNode<SVGFESpotLightElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feSpotLight) }
export function RxFeTile<O = void>(id: string, args: any, render: Render<SVGFETileElement, O>, superRender?: SuperRender<O, SVGFETileElement>, priority?: number): RxNode<SVGFETileElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feTile) }
export function RxFeTurbulence<O = void>(id: string, args: any, render: Render<SVGFETurbulenceElement, O>, superRender?: SuperRender<O, SVGFETurbulenceElement>, priority?: number): RxNode<SVGFETurbulenceElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.feTurbulence) }
export function RxFilter<O = void>(id: string, args: any, render: Render<SVGFilterElement, O>, superRender?: SuperRender<O, SVGFilterElement>, priority?: number): RxNode<SVGFilterElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.filter) }
export function RxForeignObject<O = void>(id: string, args: any, render: Render<SVGForeignObjectElement, O>, superRender?: SuperRender<O, SVGForeignObjectElement>, priority?: number): RxNode<SVGForeignObjectElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.foreignObject) }
export function RxG<O = void>(id: string, args: any, render: Render<SVGGElement, O>, superRender?: SuperRender<O, SVGGElement>, priority?: number): RxNode<SVGGElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.g) }
export function RxSvgImage<O = void>(id: string, args: any, render: Render<SVGImageElement, O>, superRender?: SuperRender<O, SVGImageElement>, priority?: number): RxNode<SVGImageElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.image) }
export function RxLine<O = void>(id: string, args: any, render: Render<SVGLineElement, O>, superRender?: SuperRender<O, SVGLineElement>, priority?: number): RxNode<SVGLineElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.line) }
export function RxLinearGradient<O = void>(id: string, args: any, render: Render<SVGLinearGradientElement, O>, superRender?: SuperRender<O, SVGLinearGradientElement>, priority?: number): RxNode<SVGLinearGradientElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.linearGradient) }
export function RxMarker<O = void>(id: string, args: any, render: Render<SVGMarkerElement, O>, superRender?: SuperRender<O, SVGMarkerElement>, priority?: number): RxNode<SVGMarkerElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.marker) }
export function RxMask<O = void>(id: string, args: any, render: Render<SVGMaskElement, O>, superRender?: SuperRender<O, SVGMaskElement>, priority?: number): RxNode<SVGMaskElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.mask) }
export function RxMetadata<O = void>(id: string, args: any, render: Render<SVGMetadataElement, O>, superRender?: SuperRender<O, SVGMetadataElement>, priority?: number): RxNode<SVGMetadataElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.metadata) }
export function RxMPath<O = void>(id: string, args: any, render: Render<SVGElement, O>, superRender?: SuperRender<O, SVGElement>, priority?: number): RxNode<SVGElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.mpath) }
export function RxPath<O = void>(id: string, args: any, render: Render<SVGPathElement, O>, superRender?: SuperRender<O, SVGPathElement>, priority?: number): RxNode<SVGPathElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.path) }
export function RxPattern<O = void>(id: string, args: any, render: Render<SVGPatternElement, O>, superRender?: SuperRender<O, SVGPatternElement>, priority?: number): RxNode<SVGPatternElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.pattern) }
export function RxPolygon<O = void>(id: string, args: any, render: Render<SVGPolygonElement, O>, superRender?: SuperRender<O, SVGPolygonElement>, priority?: number): RxNode<SVGPolygonElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.polygon) }
export function RxPolyline<O = void>(id: string, args: any, render: Render<SVGPolylineElement, O>, superRender?: SuperRender<O, SVGPolylineElement>, priority?: number): RxNode<SVGPolylineElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.polyline) }
export function RxRadialGradient<O = void>(id: string, args: any, render: Render<SVGRadialGradientElement, O>, superRender?: SuperRender<O, SVGRadialGradientElement>, priority?: number): RxNode<SVGRadialGradientElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.radialGradient) }
export function RxRect<O = void>(id: string, args: any, render: Render<SVGRectElement, O>, superRender?: SuperRender<O, SVGRectElement>, priority?: number): RxNode<SVGRectElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.rect) }
export function RxStop<O = void>(id: string, args: any, render: Render<SVGStopElement, O>, superRender?: SuperRender<O, SVGStopElement>, priority?: number): RxNode<SVGStopElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.stop) }
export function RxSvgSwitch<O = void>(id: string, args: any, render: Render<SVGSwitchElement, O>, superRender?: SuperRender<O, SVGSwitchElement>, priority?: number): RxNode<SVGSwitchElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.switch) }
export function RxSymbol<O = void>(id: string, args: any, render: Render<SVGSymbolElement, O>, superRender?: SuperRender<O, SVGSymbolElement>, priority?: number): RxNode<SVGSymbolElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.symbol) }
export function RxText<O = void>(id: string, args: any, render: Render<SVGTextElement, O>, superRender?: SuperRender<O, SVGTextElement>, priority?: number): RxNode<SVGTextElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.text) }
export function RxTextPath<O = void>(id: string, args: any, render: Render<SVGTextPathElement, O>, superRender?: SuperRender<O, SVGTextPathElement>, priority?: number): RxNode<SVGTextPathElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.textPath) }
export function RxTSpan<O = void>(id: string, args: any, render: Render<SVGTSpanElement, O>, superRender?: SuperRender<O, SVGTSpanElement>, priority?: number): RxNode<SVGTSpanElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.tspan) }
export function RxUse<O = void>(id: string, args: any, render: Render<SVGUseElement, O>, superRender?: SuperRender<O, SVGUseElement>, priority?: number): RxNode<SVGUseElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.use) }
export function RxView<O = void>(id: string, args: any, render: Render<SVGViewElement, O>, superRender?: SuperRender<O, SVGViewElement>, priority?: number): RxNode<SVGViewElement, O> { return RxDom.Node(id, args, render, superRender, priority, SvgTags.view) }

export function Svg(id: string, render: Render<SVGSVGElement> = nullRender, priority?: number): RxNode<SVGSVGElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.svg) }
export function SvgA(id: string, render: Render<SVGAElement> = nullRender, priority?: number): RxNode<SVGAElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.a) }
export function Animate(id: string, render: Render<SVGAnimateElement> = nullRender, priority?: number): RxNode<SVGAnimateElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.animate) }
export function AnimateMotion(id: string, render: Render<SVGAnimateMotionElement> = nullRender, priority?: number): RxNode<SVGAnimateMotionElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.animateMotion) }
export function AnimateTransform(id: string, render: Render<SVGAnimateTransformElement> = nullRender, priority?: number): RxNode<SVGAnimateTransformElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.animateTransform) }
export function Circle(id: string, render: Render<SVGCircleElement> = nullRender, priority?: number): RxNode<SVGCircleElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.circle) }
export function ClipPath(id: string, render: Render<SVGClipPathElement> = nullRender, priority?: number): RxNode<SVGClipPathElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.clipPath) }
export function Defs(id: string, render: Render<SVGDefsElement> = nullRender, priority?: number): RxNode<SVGDefsElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.defs) }
export function Desc(id: string, render: Render<SVGDescElement> = nullRender, priority?: number): RxNode<SVGDescElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.desc) }
export function Ellipse(id: string, render: Render<SVGEllipseElement> = nullRender, priority?: number): RxNode<SVGEllipseElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.ellipse) }
export function FeBlend(id: string, render: Render<SVGFEBlendElement> = nullRender, priority?: number): RxNode<SVGFEBlendElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.feBlend) }
export function FeColorMatrix(id: string, render: Render<SVGFEColorMatrixElement> = nullRender, priority?: number): RxNode<SVGFEColorMatrixElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.feColorMatrix) }
export function FeComponentTransfer(id: string, render: Render<SVGFEComponentTransferElement> = nullRender, priority?: number): RxNode<SVGFEComponentTransferElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.feComponentTransfer) }
export function FeComposite(id: string, render: Render<SVGFECompositeElement> = nullRender, priority?: number): RxNode<SVGFECompositeElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.feComposite) }
export function FeConvolveMatrix(id: string, render: Render<SVGFEConvolveMatrixElement> = nullRender, priority?: number): RxNode<SVGFEConvolveMatrixElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.feConvolveMatrix) }
export function FeDiffuseLighting(id: string, render: Render<SVGFEDiffuseLightingElement> = nullRender, priority?: number): RxNode<SVGFEDiffuseLightingElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.feDiffuseLighting) }
export function FeDisplacementMap(id: string, render: Render<SVGFEDisplacementMapElement> = nullRender, priority?: number): RxNode<SVGFEDisplacementMapElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.feDisplacementMap) }
export function FeDistantLight(id: string, render: Render<SVGFEDistantLightElement> = nullRender, priority?: number): RxNode<SVGFEDistantLightElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.feDistantLight) }
export function FeDropShadow(id: string, render: Render<SVGFEDropShadowElement> = nullRender, priority?: number): RxNode<SVGFEDropShadowElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.feDropShadow) }
export function FeFlood(id: string, render: Render<SVGFEFloodElement> = nullRender, priority?: number): RxNode<SVGFEFloodElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.feFlood) }
export function FeFuncA(id: string, render: Render<SVGFEFuncAElement> = nullRender, priority?: number): RxNode<SVGFEFuncAElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.feFuncA) }
export function FeFuncB(id: string, render: Render<SVGFEFuncBElement> = nullRender, priority?: number): RxNode<SVGFEFuncBElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.feFuncB) }
export function FeFuncG(id: string, render: Render<SVGFEFuncGElement> = nullRender, priority?: number): RxNode<SVGFEFuncGElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.feFuncG) }
export function FeFuncR(id: string, render: Render<SVGFEFuncRElement> = nullRender, priority?: number): RxNode<SVGFEFuncRElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.feFuncR) }
export function FeGaussianBlur(id: string, render: Render<SVGFEGaussianBlurElement> = nullRender, priority?: number): RxNode<SVGFEGaussianBlurElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.feGaussianBlur) }
export function FeImage(id: string, render: Render<SVGFEImageElement> = nullRender, priority?: number): RxNode<SVGFEImageElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.feImage) }
export function FeMerge(id: string, render: Render<SVGFEMergeElement> = nullRender, priority?: number): RxNode<SVGFEMergeElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.feMerge) }
export function FeMergeNode(id: string, render: Render<SVGFEMergeNodeElement> = nullRender, priority?: number): RxNode<SVGFEMergeNodeElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.feMergeNode) }
export function FeMorphology(id: string, render: Render<SVGFEMorphologyElement> = nullRender, priority?: number): RxNode<SVGFEMorphologyElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.feMorphology) }
export function FeOffset(id: string, render: Render<SVGFEOffsetElement> = nullRender, priority?: number): RxNode<SVGFEOffsetElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.feOffset) }
export function FePointLight(id: string, render: Render<SVGFEPointLightElement> = nullRender, priority?: number): RxNode<SVGFEPointLightElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.fePointLight) }
export function FeSpecularLighting(id: string, render: Render<SVGFESpecularLightingElement> = nullRender, priority?: number): RxNode<SVGFESpecularLightingElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.feSpecularLighting) }
export function FeSpotLight(id: string, render: Render<SVGFESpotLightElement> = nullRender, priority?: number): RxNode<SVGFESpotLightElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.feSpotLight) }
export function FeTile(id: string, render: Render<SVGFETileElement> = nullRender, priority?: number): RxNode<SVGFETileElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.feTile) }
export function FeTurbulence(id: string, render: Render<SVGFETurbulenceElement> = nullRender, priority?: number): RxNode<SVGFETurbulenceElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.feTurbulence) }
export function Filter(id: string, render: Render<SVGFilterElement> = nullRender, priority?: number): RxNode<SVGFilterElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.filter) }
export function ForeignObject(id: string, render: Render<SVGForeignObjectElement> = nullRender, priority?: number): RxNode<SVGForeignObjectElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.foreignObject) }
export function G(id: string, render: Render<SVGGElement> = nullRender, priority?: number): RxNode<SVGGElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.g) }
export function SvgImage(id: string, render: Render<SVGImageElement> = nullRender, priority?: number): RxNode<SVGImageElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.image) }
export function Line(id: string, render: Render<SVGLineElement> = nullRender, priority?: number): RxNode<SVGLineElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.line) }
export function LinearGradient(id: string, render: Render<SVGLinearGradientElement> = nullRender, priority?: number): RxNode<SVGLinearGradientElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.linearGradient) }
export function Marker(id: string, render: Render<SVGMarkerElement> = nullRender, priority?: number): RxNode<SVGMarkerElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.marker) }
export function Mask(id: string, render: Render<SVGMaskElement> = nullRender, priority?: number): RxNode<SVGMaskElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.mask) }
export function MetaData(id: string, render: Render<SVGMetadataElement> = nullRender, priority?: number): RxNode<SVGMetadataElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.metadata) }
export function MPath(id: string, render: Render<SVGElement> = nullRender, priority?: number): RxNode<SVGElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.mpath) }
export function Path(id: string, render: Render<SVGPathElement> = nullRender, priority?: number): RxNode<SVGPathElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.path) }
export function Pattern(id: string, render: Render<SVGPatternElement> = nullRender, priority?: number): RxNode<SVGPatternElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.pattern) }
export function Polygon(id: string, render: Render<SVGPolygonElement> = nullRender, priority?: number): RxNode<SVGPolygonElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.polygon) }
export function PolyLine(id: string, render: Render<SVGPolylineElement> = nullRender, priority?: number): RxNode<SVGPolylineElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.polyline) }
export function RadialGradient(id: string, render: Render<SVGRadialGradientElement> = nullRender, priority?: number): RxNode<SVGRadialGradientElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.radialGradient) }
export function Rect(id: string, render: Render<SVGRectElement> = nullRender, priority?: number): RxNode<SVGRectElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.rect) }
export function Stop(id: string, render: Render<SVGStopElement> = nullRender, priority?: number): RxNode<SVGStopElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.stop) }
export function SvgSwitch(id: string, render: Render<SVGSwitchElement> = nullRender, priority?: number): RxNode<SVGSwitchElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.switch) }
export function Symbol(id: string, render: Render<SVGSymbolElement> = nullRender, priority?: number): RxNode<SVGSymbolElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.symbol) }
export function Text(id: string, render: Render<SVGTextElement> = nullRender, priority?: number): RxNode<SVGTextElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.text) }
export function TextPath(id: string, render: Render<SVGTextPathElement> = nullRender, priority?: number): RxNode<SVGTextPathElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.textPath) }
export function TSpan(id: string, render: Render<SVGTSpanElement> = nullRender, priority?: number): RxNode<SVGTSpanElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.tspan) }
export function Use(id: string, render: Render<SVGUseElement> = nullRender, priority?: number): RxNode<SVGUseElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.use) }
export function View(id: string, render: Render<SVGViewElement> = nullRender, priority?: number): RxNode<SVGViewElement> { return RxDom.Node(id, undefined, render, undefined, priority, SvgTags.view) }

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
