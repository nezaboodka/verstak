// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { RxDom, Render, RxNode, SuperRender } from '../core/api'
import { HtmlNodeFactory, SvgNodeFactory } from './HtmlNodeFactory'

export function HtmlBody(name: string, triggers: unknown, render: Render<HTMLElement>): RxNode<HTMLElement> {
  return RxDom.Node(name, triggers, render, undefined, {
    name, sequential: true,
    initialize(node: RxNode<HTMLElement, any>, sibling?: RxNode): void {
      const native = node.native = global.document.body
      native.id = node.name
    },
  })
}

function nullRender(e: Element): void { /* nop */ }
export function RxA<O = void>(name: string, triggers: unknown, render: Render<HTMLAnchorElement, O>, superRender?: SuperRender<O, HTMLAnchorElement>, inline?: boolean): RxNode<HTMLAnchorElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.a, inline) }
export function RxAbbr<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.abbr, inline) }
export function RxAddress<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.address, inline) }
export function RxArea<O = void>(name: string, triggers: unknown, render: Render<HTMLAreaElement, O>, superRender?: SuperRender<O, HTMLAreaElement>, inline?: boolean): RxNode<HTMLAreaElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.area, inline) }
export function RxArticle<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.article, inline) }
export function RxAside<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.aside, inline) }
export function RxAudio<O = void>(name: string, triggers: unknown, render: Render<HTMLAudioElement, O>, superRender?: SuperRender<O, HTMLAudioElement>, inline?: boolean): RxNode<HTMLAudioElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.audio, inline) }
export function RxB<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.b, inline) }
export function RxBase<O = void>(name: string, triggers: unknown, render: Render<HTMLBaseElement, O>, superRender?: SuperRender<O, HTMLBaseElement>, inline?: boolean): RxNode<HTMLBaseElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.base, inline) }
export function RxBdi<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.bdi, inline) }
export function RxBdo<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.bdo, inline) }
export function RxBig<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.big, inline) }
export function RxBlockQuote<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.blockquote, inline) }
export function RxBody<O = void>(name: string, triggers: unknown, render: Render<HTMLBodyElement, O>, superRender?: SuperRender<O, HTMLBodyElement>, inline?: boolean): RxNode<HTMLBodyElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.body, inline) }
export function RxBR<O = void>(name: string, triggers: unknown, render: Render<HTMLBRElement, O>, superRender?: SuperRender<O, HTMLBRElement>, inline?: boolean): RxNode<HTMLBRElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.br, inline) }
export function RxButton<O = void>(name: string, triggers: unknown, render: Render<HTMLButtonElement, O>, superRender?: SuperRender<O, HTMLButtonElement>, inline?: boolean): RxNode<HTMLButtonElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.button, inline) }
export function RxCanvas<O = void>(name: string, triggers: unknown, render: Render<HTMLCanvasElement, O>, superRender?: SuperRender<O, HTMLCanvasElement>, inline?: boolean): RxNode<HTMLCanvasElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.canvas, inline) }
export function RxCaption<O = void>(name: string, triggers: unknown, render: Render<HTMLTableCaptionElement, O>, superRender?: SuperRender<O, HTMLTableCaptionElement>, inline?: boolean): RxNode<HTMLTableCaptionElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.caption, inline) }
export function RxCite<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.cite, inline) }
export function RxCode<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.code, inline) }
export function RxCol<O = void>(name: string, triggers: unknown, render: Render<HTMLTableColElement, O>, superRender?: SuperRender<O, HTMLTableColElement>, inline?: boolean): RxNode<HTMLTableColElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.col, inline) }
export function RxColGroup<O = void>(name: string, triggers: unknown, render: Render<HTMLTableColElement, O>, superRender?: SuperRender<O, HTMLTableColElement>, inline?: boolean): RxNode<HTMLTableColElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.colgroup, inline) }
export function RxData<O = void>(name: string, triggers: unknown, render: Render<HTMLDataElement, O>, superRender?: SuperRender<O, HTMLDataElement>, inline?: boolean): RxNode<HTMLDataElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.data, inline) }
export function RxDataList<O = void>(name: string, triggers: unknown, render: Render<HTMLDataListElement, O>, superRender?: SuperRender<O, HTMLDataListElement>, inline?: boolean): RxNode<HTMLDataListElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.datalist, inline) }
export function RxDD<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.dd, inline) }
export function RxDel<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.del, inline) }
export function RxDetails<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.details, inline) }
export function RxDfn<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.dfn, inline) }
export function RxDialog<O = void>(name: string, triggers: unknown, render: Render<HTMLDialogElement, O>, superRender?: SuperRender<O, HTMLDialogElement>, inline?: boolean): RxNode<HTMLDialogElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.dialog, inline) }
export function RxDiv<O = void>(name: string, triggers: unknown, render: Render<HTMLDivElement, O>, superRender?: SuperRender<O, HTMLDivElement>, inline?: boolean): RxNode<HTMLDivElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.div, inline) }
export function RxDL<O = void>(name: string, triggers: unknown, render: Render<HTMLDListElement, O>, superRender?: SuperRender<O, HTMLDListElement>, inline?: boolean): RxNode<HTMLDListElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.dl, inline) }
export function RxDT<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.dt, inline) }
export function RxEM<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.em, inline) }
export function RxEmbed<O = void>(name: string, triggers: unknown, render: Render<HTMLEmbedElement, O>, superRender?: SuperRender<O, HTMLEmbedElement>, inline?: boolean): RxNode<HTMLEmbedElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.embed, inline) }
export function RxFieldSet<O = void>(name: string, triggers: unknown, render: Render<HTMLFieldSetElement, O>, superRender?: SuperRender<O, HTMLFieldSetElement>, inline?: boolean): RxNode<HTMLFieldSetElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.fieldset, inline) }
export function RxFigCaption<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.figcaption, inline) }
export function RxFigure<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.figure, inline) }
export function RxFooter<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.footer, inline) }
export function RxForm<O = void>(name: string, triggers: unknown, render: Render<HTMLFormElement, O>, superRender?: SuperRender<O, HTMLFormElement>, inline?: boolean): RxNode<HTMLFormElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.form, inline) }
export function RxH1<O = void>(name: string, triggers: unknown, render: Render<HTMLHeadingElement, O>, superRender?: SuperRender<O, HTMLHeadingElement>, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.h1, inline) }
export function RxH2<O = void>(name: string, triggers: unknown, render: Render<HTMLHeadingElement, O>, superRender?: SuperRender<O, HTMLHeadingElement>, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.h2, inline) }
export function RxH3<O = void>(name: string, triggers: unknown, render: Render<HTMLHeadingElement, O>, superRender?: SuperRender<O, HTMLHeadingElement>, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.h3, inline) }
export function RxH4<O = void>(name: string, triggers: unknown, render: Render<HTMLHeadingElement, O>, superRender?: SuperRender<O, HTMLHeadingElement>, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.h4, inline) }
export function RxH5<O = void>(name: string, triggers: unknown, render: Render<HTMLHeadingElement, O>, superRender?: SuperRender<O, HTMLHeadingElement>, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.h5, inline) }
export function RxH6<O = void>(name: string, triggers: unknown, render: Render<HTMLHeadingElement, O>, superRender?: SuperRender<O, HTMLHeadingElement>, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.h6, inline) }
export function RxHead<O = void>(name: string, triggers: unknown, render: Render<HTMLHeadElement, O>, superRender?: SuperRender<O, HTMLHeadElement>, inline?: boolean): RxNode<HTMLHeadElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.head, inline) }
export function RxHeader<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.header, inline) }
export function RxHGroup<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.hgroup, inline) }
export function RxHR<O = void>(name: string, triggers: unknown, render: Render<HTMLHRElement, O>, superRender?: SuperRender<O, HTMLHRElement>, inline?: boolean): RxNode<HTMLHRElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.hr, inline) }
export function RxHtml<O = void>(name: string, triggers: unknown, render: Render<HTMLHtmlElement, O>, superRender?: SuperRender<O, HTMLHtmlElement>, inline?: boolean): RxNode<HTMLHtmlElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.html, inline) }
export function RxI<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.i, inline) }
export function RxIFrame<O = void>(name: string, triggers: unknown, render: Render<HTMLIFrameElement, O>, superRender?: SuperRender<O, HTMLIFrameElement>, inline?: boolean): RxNode<HTMLIFrameElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.iframe, inline) }
export function RxImg<O = void>(name: string, triggers: unknown, render: Render<HTMLImageElement, O>, superRender?: SuperRender<O, HTMLImageElement>, inline?: boolean): RxNode<HTMLImageElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.img, inline) }
export function RxInput<O = void>(name: string, triggers: unknown, render: Render<HTMLInputElement, O>, superRender?: SuperRender<O, HTMLInputElement>, inline?: boolean): RxNode<HTMLInputElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.input, inline) }
export function RxIns<O = void>(name: string, triggers: unknown, render: Render<HTMLModElement, O>, superRender?: SuperRender<O, HTMLModElement>, inline?: boolean): RxNode<HTMLModElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.ins, inline) }
export function RxKbd<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.kbd, inline) }
export function RxKeygen<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.keygen, inline) }
export function RxLabel<O = void>(name: string, triggers: unknown, render: Render<HTMLLabelElement, O>, superRender?: SuperRender<O, HTMLLabelElement>, inline?: boolean): RxNode<HTMLLabelElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.label, inline) }
export function RxLegend<O = void>(name: string, triggers: unknown, render: Render<HTMLLegendElement, O>, superRender?: SuperRender<O, HTMLLegendElement>, inline?: boolean): RxNode<HTMLLegendElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.legend, inline) }
export function RxLI<O = void>(name: string, triggers: unknown, render: Render<HTMLLIElement, O>, superRender?: SuperRender<O, HTMLLIElement>, inline?: boolean): RxNode<HTMLLIElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.li, inline) }
export function RxLink<O = void>(name: string, triggers: unknown, render: Render<HTMLLinkElement, O>, superRender?: SuperRender<O, HTMLLinkElement>, inline?: boolean): RxNode<HTMLLinkElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.link, inline) }
export function RxMain<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.main, inline) }
export function RxMap<O = void>(name: string, triggers: unknown, render: Render<HTMLMapElement, O>, superRender?: SuperRender<O, HTMLMapElement>, inline?: boolean): RxNode<HTMLMapElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.map, inline) }
export function RxMark<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.mark, inline) }
export function RxMenu<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.menu, inline) }
export function RxMenuItem<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.menuitem, inline) }
export function RxMeta<O = void>(name: string, triggers: unknown, render: Render<HTMLMetaElement, O>, superRender?: SuperRender<O, HTMLMetaElement>, inline?: boolean): RxNode<HTMLMetaElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.meta, inline) }
export function RxMeter<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.meter, inline) }
export function RxNav<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.nav, inline) }
export function RxNoIndex<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.noindex, inline) }
export function RxNoScript<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.noscript, inline) }
export function RxObj<O = void>(name: string, triggers: unknown, render: Render<HTMLObjectElement, O>, superRender?: SuperRender<O, HTMLObjectElement>, inline?: boolean): RxNode<HTMLObjectElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.object, inline) }
export function RxOL<O = void>(name: string, triggers: unknown, render: Render<HTMLOListElement, O>, superRender?: SuperRender<O, HTMLOListElement>, inline?: boolean): RxNode<HTMLOListElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.ol, inline) }
export function RxOptGroup<O = void>(name: string, triggers: unknown, render: Render<HTMLOptGroupElement, O>, superRender?: SuperRender<O, HTMLOptGroupElement>, inline?: boolean): RxNode<HTMLOptGroupElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.optgroup, inline) }
export function RxOption<O = void>(name: string, triggers: unknown, render: Render<HTMLOptionElement, O>, superRender?: SuperRender<O, HTMLOptionElement>, inline?: boolean): RxNode<HTMLOptionElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.option, inline) }
export function RxOutput<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.output, inline) }
export function RxP<O = void>(name: string, triggers: unknown, render: Render<HTMLParagraphElement, O>, superRender?: SuperRender<O, HTMLParagraphElement>, inline?: boolean): RxNode<HTMLParagraphElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.p, inline) }
export function RxParam<O = void>(name: string, triggers: unknown, render: Render<HTMLParamElement, O>, superRender?: SuperRender<O, HTMLParamElement>, inline?: boolean): RxNode<HTMLParamElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.param, inline) }
export function RxPicture<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.picture, inline) }
export function RxPre<O = void>(name: string, triggers: unknown, render: Render<HTMLPreElement, O>, superRender?: SuperRender<O, HTMLPreElement>, inline?: boolean): RxNode<HTMLPreElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.pre, inline) }
export function RxProgress<O = void>(name: string, triggers: unknown, render: Render<HTMLProgressElement, O>, superRender?: SuperRender<O, HTMLProgressElement>, inline?: boolean): RxNode<HTMLProgressElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.progress, inline) }
export function RxQ<O = void>(name: string, triggers: unknown, render: Render<HTMLQuoteElement, O>, superRender?: SuperRender<O, HTMLQuoteElement>, inline?: boolean): RxNode<HTMLQuoteElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.q, inline) }
export function RxRP<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.rp, inline) }
export function RxRT<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.rt, inline) }
export function RxRuby<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.ruby, inline) }
export function RxS<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.s, inline) }
export function RxSamp<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.samp, inline) }
export function RxScript<O = void>(name: string, triggers: unknown, render: Render<HTMLScriptElement, O>, superRender?: SuperRender<O, HTMLScriptElement>, inline?: boolean): RxNode<HTMLScriptElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.script, inline) }
export function RxSection<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.section, inline) }
export function RxSelect<O = void>(name: string, triggers: unknown, render: Render<HTMLSelectElement, O>, superRender?: SuperRender<O, HTMLSelectElement>, inline?: boolean): RxNode<HTMLSelectElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.select, inline) }
export function RxSmall<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.small, inline) }
export function RxSource<O = void>(name: string, triggers: unknown, render: Render<HTMLSourceElement, O>, superRender?: SuperRender<O, HTMLSourceElement>, inline?: boolean): RxNode<HTMLSourceElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.source, inline) }
export function RxSpan<O = void>(name: string, triggers: unknown, render: Render<HTMLSpanElement, O>, superRender?: SuperRender<O, HTMLSpanElement>, inline?: boolean): RxNode<HTMLSpanElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.span, inline) }
export function RxStrong<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.strong, inline) }
export function RxStyle<O = void>(name: string, triggers: unknown, render: Render<HTMLStyleElement, O>, superRender?: SuperRender<O, HTMLStyleElement>, inline?: boolean): RxNode<HTMLStyleElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.style, inline) }
export function RxSub<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.sub, inline) }
export function RxSummary<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.summary, inline) }
export function RxSup<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.sup, inline) }
export function RxTable<O = void>(name: string, triggers: unknown, render: Render<HTMLTableElement, O>, superRender?: SuperRender<O, HTMLTableElement>, inline?: boolean): RxNode<HTMLTableElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.table, inline) }
export function RxTemplate<O = void>(name: string, triggers: unknown, render: Render<HTMLTemplateElement, O>, superRender?: SuperRender<O, HTMLTemplateElement>, inline?: boolean): RxNode<HTMLTemplateElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.template, inline) }
export function RxTBody<O = void>(name: string, triggers: unknown, render: Render<HTMLTableSectionElement, O>, superRender?: SuperRender<O, HTMLTableSectionElement>, inline?: boolean): RxNode<HTMLTableSectionElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.tbody, inline) }
export function RxTD<O = void>(name: string, triggers: unknown, render: Render<HTMLTableCellElement, O>, superRender?: SuperRender<O, HTMLTableCellElement>, inline?: boolean): RxNode<HTMLTableCellElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.td, inline) }
export function RxTextArea<O = void>(name: string, triggers: unknown, render: Render<HTMLTextAreaElement, O>, superRender?: SuperRender<O, HTMLTextAreaElement>, inline?: boolean): RxNode<HTMLTextAreaElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.textarea, inline) }
export function RxTFoot<O = void>(name: string, triggers: unknown, render: Render<HTMLTableSectionElement, O>, superRender?: SuperRender<O, HTMLTableSectionElement>, inline?: boolean): RxNode<HTMLTableSectionElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.tfoot, inline) }
export function RxTH<O = void>(name: string, triggers: unknown, render: Render<HTMLTableCellElement, O>, superRender?: SuperRender<O, HTMLTableCellElement>, inline?: boolean): RxNode<HTMLTableHeaderCellElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.th, inline) }
export function RxTHead<O = void>(name: string, triggers: unknown, render: Render<HTMLTableSectionElement, O>, superRender?: SuperRender<O, HTMLTableSectionElement>, inline?: boolean): RxNode<HTMLTableSectionElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.thead, inline) }
export function RxTime<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.time, inline) }
export function RxTitle<O = void>(name: string, triggers: unknown, render: Render<HTMLTitleElement, O>, superRender?: SuperRender<O, HTMLTitleElement>, inline?: boolean): RxNode<HTMLTitleElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.title, inline) }
export function RxTR<O = void>(name: string, triggers: unknown, render: Render<HTMLTableRowElement, O>, superRender?: SuperRender<O, HTMLTableRowElement>, inline?: boolean): RxNode<HTMLTableRowElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.tr, inline) }
export function RxTrack<O = void>(name: string, triggers: unknown, render: Render<HTMLTrackElement, O>, superRender?: SuperRender<O, HTMLTrackElement>, inline?: boolean): RxNode<HTMLTrackElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.track, inline) }
export function RxU<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.u, inline) }
export function RxUL<O = void>(name: string, triggers: unknown, render: Render<HTMLUListElement, O>, superRender?: SuperRender<O, HTMLUListElement>, inline?: boolean): RxNode<HTMLUListElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.ul, inline) }
export function RxVar<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.var, inline) }
export function RxVideo<O = void>(name: string, triggers: unknown, render: Render<HTMLVideoElement, O>, superRender?: SuperRender<O, HTMLVideoElement>, inline?: boolean): RxNode<HTMLVideoElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.video, inline) }
export function RxWbr<O = void>(name: string, triggers: unknown, render: Render<HTMLElement, O>, superRender?: SuperRender<O, HTMLElement>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.wbr, inline) }

export function A(name: string, render: Render<HTMLAnchorElement> = nullRender): RxNode<HTMLAnchorElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.a, true) }
export function Abbr(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.abbr, true) }
export function Address(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.address, true) }
export function Area(name: string, render: Render<HTMLAreaElement> = nullRender): RxNode<HTMLAreaElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.area, true) }
export function Article(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.article, true) }
export function Aside(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.aside, true) }
export function Audio(name: string, render: Render<HTMLAudioElement> = nullRender): RxNode<HTMLAudioElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.audio, true) }
export function B(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.b, true) }
export function Base(name: string, render: Render<HTMLBaseElement> = nullRender): RxNode<HTMLBaseElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.base, true) }
export function Bdi(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.bdi, true) }
export function Bdo(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.bdo, true) }
export function Big(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.big, true) }
export function BlockQuote(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.blockquote, true) }
export function Body(name: string, render: Render<HTMLBodyElement> = nullRender): RxNode<HTMLBodyElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.body, true) }
export function BR(name: string, render: Render<HTMLBRElement> = nullRender): RxNode<HTMLBRElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.br, true) }
export function Button(name: string, render: Render<HTMLButtonElement> = nullRender): RxNode<HTMLButtonElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.button, true) }
export function Canvas(name: string, render: Render<HTMLCanvasElement> = nullRender): RxNode<HTMLCanvasElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.canvas, true) }
export function Caption(name: string, render: Render<HTMLTableCaptionElement> = nullRender): RxNode<HTMLTableCaptionElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.caption, true) }
export function Cite(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.cite, true) }
export function Code(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.code, true) }
export function Col(name: string, render: Render<HTMLTableColElement> = nullRender): RxNode<HTMLTableColElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.col, true) }
export function ColGroup(name: string, render: Render<HTMLTableColElement> = nullRender): RxNode<HTMLTableColElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.colgroup, true) }
export function Data(name: string, render: Render<HTMLDataElement> = nullRender): RxNode<HTMLDataElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.data, true) }
export function DataList(name: string, render: Render<HTMLDataListElement> = nullRender): RxNode<HTMLDataListElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.datalist, true) }
export function DD(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.dd, true) }
export function Del(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.del, true) }
export function Details(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.details, true) }
export function Dfn(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.dfn, true) }
export function Dialog(name: string, render: Render<HTMLDialogElement> = nullRender): RxNode<HTMLDialogElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.dialog, true) }
export function Div(name: string, render: Render<HTMLDivElement> = nullRender): RxNode<HTMLDivElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.div, true) }
export function DL(name: string, render: Render<HTMLDListElement> = nullRender): RxNode<HTMLDListElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.dl, true) }
export function DT(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.dt, true) }
export function EM(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.em, true) }
export function Embed(name: string, render: Render<HTMLEmbedElement> = nullRender): RxNode<HTMLEmbedElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.embed, true) }
export function FieldSet(name: string, render: Render<HTMLFieldSetElement> = nullRender): RxNode<HTMLFieldSetElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.fieldset, true) }
export function FigCaption(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.figcaption, true) }
export function Figure(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.figure, true) }
export function Footer(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.footer, true) }
export function Form(name: string, render: Render<HTMLFormElement> = nullRender): RxNode<HTMLFormElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.form, true) }
export function H1(name: string, render: Render<HTMLHeadingElement> = nullRender): RxNode<HTMLHeadingElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.h1, true) }
export function H2(name: string, render: Render<HTMLHeadingElement> = nullRender): RxNode<HTMLHeadingElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.h2, true) }
export function H3(name: string, render: Render<HTMLHeadingElement> = nullRender): RxNode<HTMLHeadingElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.h3, true) }
export function H4(name: string, render: Render<HTMLHeadingElement> = nullRender): RxNode<HTMLHeadingElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.h4, true) }
export function H5(name: string, render: Render<HTMLHeadingElement> = nullRender): RxNode<HTMLHeadingElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.h5, true) }
export function H6(name: string, render: Render<HTMLHeadingElement> = nullRender): RxNode<HTMLHeadingElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.h6, true) }
export function Head(name: string, render: Render<HTMLHeadElement> = nullRender): RxNode<HTMLHeadElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.head, true) }
export function Header(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.header, true) }
export function HGroup(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.hgroup, true) }
export function HR(name: string, render: Render<HTMLHRElement> = nullRender): RxNode<HTMLHRElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.hr, true) }
export function Html(name: string, render: Render<HTMLHtmlElement> = nullRender): RxNode<HTMLHtmlElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.html, true) }
export function I(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.i, true) }
export function IFrame(name: string, render: Render<HTMLIFrameElement> = nullRender): RxNode<HTMLIFrameElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.iframe, true) }
export function Img(name: string, render: Render<HTMLImageElement> = nullRender): RxNode<HTMLImageElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.img, true) }
export function Input(name: string, render: Render<HTMLInputElement> = nullRender): RxNode<HTMLInputElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.input, true) }
export function Ins(name: string, render: Render<HTMLModElement> = nullRender): RxNode<HTMLModElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.ins, true) }
export function Kbd(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.kbd, true) }
export function KeyGen(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.keygen, true) }
export function Label(name: string, render: Render<HTMLLabelElement> = nullRender): RxNode<HTMLLabelElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.label, true) }
export function Legend(name: string, render: Render<HTMLLegendElement> = nullRender): RxNode<HTMLLegendElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.legend, true) }
export function LI(name: string, render: Render<HTMLLIElement> = nullRender): RxNode<HTMLLIElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.li, true) }
export function Link(name: string, render: Render<HTMLLinkElement> = nullRender): RxNode<HTMLLinkElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.link, true) }
export function Main(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.main, true) }
export function Map(name: string, render: Render<HTMLMapElement> = nullRender): RxNode<HTMLMapElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.map, true) }
export function Mark(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.mark, true) }
export function Menu(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.menu, true) }
export function MenuItem(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.menuitem, true) }
export function Meta(name: string, render: Render<HTMLMetaElement> = nullRender): RxNode<HTMLMetaElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.meta, true) }
export function Meter(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.meter, true) }
export function Nav(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.nav, true) }
export function NoIndex(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.noindex, true) }
export function NoScript(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.noscript, true) }
export function Obj(name: string, render: Render<HTMLObjectElement> = nullRender): RxNode<HTMLObjectElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.object, true) }
export function OL(name: string, render: Render<HTMLOListElement> = nullRender): RxNode<HTMLOListElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.ol, true) }
export function OptGroup(name: string, render: Render<HTMLOptGroupElement> = nullRender): RxNode<HTMLOptGroupElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.optgroup, true) }
export function Option(name: string, render: Render<HTMLOptionElement> = nullRender): RxNode<HTMLOptionElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.option, true) }
export function Output(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.output, true) }
export function P(name: string, render: Render<HTMLParagraphElement> = nullRender): RxNode<HTMLParagraphElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.p, true) }
export function Param(name: string, render: Render<HTMLParamElement> = nullRender): RxNode<HTMLParamElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.param, true) }
export function Picture(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.picture, true) }
export function Pre(name: string, render: Render<HTMLPreElement> = nullRender): RxNode<HTMLPreElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.pre, true) }
export function Progress(name: string, render: Render<HTMLProgressElement> = nullRender): RxNode<HTMLProgressElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.progress, true) }
export function Q(name: string, render: Render<HTMLQuoteElement> = nullRender): RxNode<HTMLQuoteElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.q, true) }
export function RP(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.rp, true) }
export function RT(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.rt, true) }
export function Ruby(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.ruby, true) }
export function S(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.s, true) }
export function Samp(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.samp, true) }
export function Script(name: string, render: Render<HTMLScriptElement> = nullRender): RxNode<HTMLScriptElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.script, true) }
export function Section(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.section, true) }
export function Select(name: string, render: Render<HTMLSelectElement> = nullRender): RxNode<HTMLSelectElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.select, true) }
export function Small(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.small, true) }
export function Source(name: string, render: Render<HTMLSourceElement> = nullRender): RxNode<HTMLSourceElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.source, true) }
export function Span(name: string, render: Render<HTMLSpanElement> = nullRender): RxNode<HTMLSpanElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.span, true) }
export function Strong(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.strong, true) }
export function Style(name: string, render: Render<HTMLStyleElement> = nullRender): RxNode<HTMLStyleElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.style, true) }
export function Sub(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.sub, true) }
export function Summary(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.summary, true) }
export function Sup(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.sup, true) }
export function Table(name: string, render: Render<HTMLTableElement> = nullRender): RxNode<HTMLTableElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.table, true) }
export function Template(name: string, render: Render<HTMLTemplateElement> = nullRender): RxNode<HTMLTemplateElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.template, true) }
export function TBody(name: string, render: Render<HTMLTableSectionElement> = nullRender): RxNode<HTMLTableSectionElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.tbody, true) }
export function TD(name: string, render: Render<HTMLTableDataCellElement> = nullRender): RxNode<HTMLTableDataCellElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.td, true) }
export function TextArea(name: string, render: Render<HTMLTextAreaElement> = nullRender): RxNode<HTMLTextAreaElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.textarea, true) }
export function TFoot(name: string, render: Render<HTMLTableSectionElement> = nullRender): RxNode<HTMLTableSectionElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.tfoot, true) }
export function TH(name: string, render: Render<HTMLTableHeaderCellElement> = nullRender): RxNode<HTMLTableHeaderCellElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.th, true) }
export function THead(name: string, render: Render<HTMLTableSectionElement> = nullRender): RxNode<HTMLTableSectionElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.thead, true) }
export function Time(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.time, true) }
export function Title(name: string, render: Render<HTMLTitleElement> = nullRender): RxNode<HTMLTitleElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.title, true) }
export function TR(name: string, render: Render<HTMLTableRowElement> = nullRender): RxNode<HTMLTableRowElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.tr, true) }
export function Track(name: string, render: Render<HTMLTrackElement> = nullRender): RxNode<HTMLTrackElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.track, true) }
export function U(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.u, true) }
export function UL(name: string, render: Render<HTMLUListElement> = nullRender): RxNode<HTMLUListElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.ul, true) }
export function Var(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.var, true) }
export function Video(name: string, render: Render<HTMLVideoElement> = nullRender): RxNode<HTMLVideoElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.video, true) }
export function Wbr(name: string, render: Render<HTMLElement> = nullRender): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, undefined, HtmlTags.wbr, true) }

const HtmlTags = {
  a: new HtmlNodeFactory<HTMLAnchorElement>('a'),
  abbr: new HtmlNodeFactory<HTMLElement>('abbr'),
  address: new HtmlNodeFactory<HTMLElement>('address'),
  area: new HtmlNodeFactory<HTMLAreaElement>('area'),
  article: new HtmlNodeFactory<HTMLElement>('article'),
  aside: new HtmlNodeFactory<HTMLElement>('aside'),
  audio: new HtmlNodeFactory<HTMLAudioElement>('audio'),
  b: new HtmlNodeFactory<HTMLElement>('b'),
  base: new HtmlNodeFactory<HTMLBaseElement>('base'),
  bdi: new HtmlNodeFactory<HTMLElement>('bdi'),
  bdo: new HtmlNodeFactory<HTMLElement>('bdo'),
  big: new HtmlNodeFactory<HTMLElement>('big'),
  blockquote: new HtmlNodeFactory<HTMLElement>('blockquote'),
  body: new HtmlNodeFactory<HTMLBodyElement>('body'),
  br: new HtmlNodeFactory<HTMLBRElement>('br'),
  button: new HtmlNodeFactory<HTMLButtonElement>('button'),
  canvas: new HtmlNodeFactory<HTMLCanvasElement>('canvas'),
  caption: new HtmlNodeFactory<HTMLTableCaptionElement>('caption'),
  cite: new HtmlNodeFactory<HTMLElement>('cite'),
  code: new HtmlNodeFactory<HTMLElement>('code'),
  col: new HtmlNodeFactory<HTMLTableColElement>('col'),
  colgroup: new HtmlNodeFactory<HTMLTableColElement>('colgroup'),
  data: new HtmlNodeFactory<HTMLDataElement>('data'),
  datalist: new HtmlNodeFactory<HTMLDataListElement>('datalist'),
  dd: new HtmlNodeFactory<HTMLElement>('dd'),
  del: new HtmlNodeFactory<HTMLElement>('del'),
  details: new HtmlNodeFactory<HTMLElement>('details'),
  dfn: new HtmlNodeFactory<HTMLElement>('dfn'),
  dialog: new HtmlNodeFactory<HTMLDialogElement>('dialog'),
  div: new HtmlNodeFactory<HTMLDivElement>('div'),
  dl: new HtmlNodeFactory<HTMLDListElement>('dl'),
  dt: new HtmlNodeFactory<HTMLElement>('dt'),
  em: new HtmlNodeFactory<HTMLElement>('em'),
  embed: new HtmlNodeFactory<HTMLEmbedElement>('embed'),
  fieldset: new HtmlNodeFactory<HTMLFieldSetElement>('fieldset'),
  figcaption: new HtmlNodeFactory<HTMLElement>('figcaption'),
  figure: new HtmlNodeFactory<HTMLElement>('figure'),
  footer: new HtmlNodeFactory<HTMLElement>('footer'),
  form: new HtmlNodeFactory<HTMLFormElement>('form'),
  h1: new HtmlNodeFactory<HTMLHeadingElement>('h1'),
  h2: new HtmlNodeFactory<HTMLHeadingElement>('h2'),
  h3: new HtmlNodeFactory<HTMLHeadingElement>('h3'),
  h4: new HtmlNodeFactory<HTMLHeadingElement>('h4'),
  h5: new HtmlNodeFactory<HTMLHeadingElement>('h5'),
  h6: new HtmlNodeFactory<HTMLHeadingElement>('h6'),
  head: new HtmlNodeFactory<HTMLHeadElement>('head'),
  header: new HtmlNodeFactory<HTMLElement>('header'),
  hgroup: new HtmlNodeFactory<HTMLElement>('hgroup'),
  hr: new HtmlNodeFactory<HTMLHRElement>('hr'),
  html: new HtmlNodeFactory<HTMLHtmlElement>('html'),
  i: new HtmlNodeFactory<HTMLElement>('i'),
  iframe: new HtmlNodeFactory<HTMLIFrameElement>('iframe'),
  img: new HtmlNodeFactory<HTMLImageElement>('img'),
  input: new HtmlNodeFactory<HTMLInputElement>('input'),
  ins: new HtmlNodeFactory<HTMLModElement>('ins'),
  kbd: new HtmlNodeFactory<HTMLElement>('kbd'),
  keygen: new HtmlNodeFactory<HTMLElement>('keygen'),
  label: new HtmlNodeFactory<HTMLLabelElement>('label'),
  legend: new HtmlNodeFactory<HTMLLegendElement>('legend'),
  li: new HtmlNodeFactory<HTMLLIElement>('li'),
  link: new HtmlNodeFactory<HTMLLinkElement>('link'),
  main: new HtmlNodeFactory<HTMLElement>('main'),
  map: new HtmlNodeFactory<HTMLMapElement>('map'),
  mark: new HtmlNodeFactory<HTMLElement>('mark'),
  menu: new HtmlNodeFactory<HTMLElement>('menu'),
  menuitem: new HtmlNodeFactory<HTMLElement>('menuitem'),
  meta: new HtmlNodeFactory<HTMLMetaElement>('meta'),
  meter: new HtmlNodeFactory<HTMLElement>('meter'),
  nav: new HtmlNodeFactory<HTMLElement>('nav'),
  noindex: new HtmlNodeFactory<HTMLElement>('noindex'),
  noscript: new HtmlNodeFactory<HTMLElement>('noscript'),
  object: new HtmlNodeFactory<HTMLObjectElement>('object'),
  ol: new HtmlNodeFactory<HTMLOListElement>('ol'),
  optgroup: new HtmlNodeFactory<HTMLOptGroupElement>('optgroup'),
  option: new HtmlNodeFactory<HTMLOptionElement>('option'),
  output: new HtmlNodeFactory<HTMLElement>('output'),
  p: new HtmlNodeFactory<HTMLParagraphElement>('p'),
  param: new HtmlNodeFactory<HTMLParamElement>('param'),
  picture: new HtmlNodeFactory<HTMLElement>('picture'),
  pre: new HtmlNodeFactory<HTMLPreElement>('pre'),
  progress: new HtmlNodeFactory<HTMLProgressElement>('progress'),
  q: new HtmlNodeFactory<HTMLQuoteElement>('q'),
  rp: new HtmlNodeFactory<HTMLElement>('rp'),
  rt: new HtmlNodeFactory<HTMLElement>('rt'),
  ruby: new HtmlNodeFactory<HTMLElement>('ruby'),
  s: new HtmlNodeFactory<HTMLElement>('s'),
  samp: new HtmlNodeFactory<HTMLElement>('samp'),
  script: new HtmlNodeFactory<HTMLScriptElement>('script'),
  section: new HtmlNodeFactory<HTMLElement>('section'),
  select: new HtmlNodeFactory<HTMLSelectElement>('select'),
  small: new HtmlNodeFactory<HTMLElement>('small'),
  source: new HtmlNodeFactory<HTMLSourceElement>('source'),
  span: new HtmlNodeFactory<HTMLSpanElement>('span'),
  strong: new HtmlNodeFactory<HTMLElement>('strong'),
  style: new HtmlNodeFactory<HTMLStyleElement>('style'),
  sub: new HtmlNodeFactory<HTMLElement>('sub'),
  summary: new HtmlNodeFactory<HTMLElement>('summary'),
  sup: new HtmlNodeFactory<HTMLElement>('sup'),
  table: new HtmlNodeFactory<HTMLTableElement>('table'),
  template: new HtmlNodeFactory<HTMLTemplateElement>('template'),
  tbody: new HtmlNodeFactory<HTMLTableSectionElement>('tbody'),
  td: new HtmlNodeFactory<HTMLTableDataCellElement>('td'),
  textarea: new HtmlNodeFactory<HTMLTextAreaElement>('textarea'),
  tfoot: new HtmlNodeFactory<HTMLTableSectionElement>('tfoot'),
  th: new HtmlNodeFactory<HTMLTableHeaderCellElement>('th'),
  thead: new HtmlNodeFactory<HTMLTableSectionElement>('thead'),
  time: new HtmlNodeFactory<HTMLElement>('time'),
  title: new HtmlNodeFactory<HTMLTitleElement>('title'),
  tr: new HtmlNodeFactory<HTMLTableRowElement>('tr'),
  track: new HtmlNodeFactory<HTMLTrackElement>('track'),
  u: new HtmlNodeFactory<HTMLElement>('u'),
  ul: new HtmlNodeFactory<HTMLUListElement>('ul'),
  var: new HtmlNodeFactory<HTMLElement>('var'),
  video: new HtmlNodeFactory<HTMLVideoElement>('video'),
  wbr: new HtmlNodeFactory<HTMLElement>('wbr'),
  // webview: new HtmlNodeFactory<HTMLWebViewElement>('webview'),
}

export function RxSvg<O = void>(name: string, triggers: unknown, render: Render<SVGSVGElement, O>, superRender?: SuperRender<O, SVGSVGElement>): RxNode<SVGSVGElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.svg) }
export function RxSvgA<O = void>(name: string, triggers: unknown, render: Render<SVGAElement, O>, superRender?: SuperRender<O, SVGAElement>): RxNode<SVGAElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.a) }
export function RxAnimate<O = void>(name: string, triggers: unknown, render: Render<SVGAnimateElement, O>, superRender?: SuperRender<O, SVGAnimateElement>): RxNode<SVGAnimateElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.animate) }
export function RxAnimateMotion<O = void>(name: string, triggers: unknown, render: Render<SVGAnimateMotionElement, O>, superRender?: SuperRender<O, SVGAnimateMotionElement>): RxNode<SVGAnimateMotionElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.animateMotion) }
export function RxAnimateTransform<O = void>(name: string, triggers: unknown, render: Render<SVGAnimateTransformElement, O>, superRender?: SuperRender<O, SVGAnimateTransformElement>): RxNode<SVGAnimateTransformElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.animateTransform) }
export function RxCircle<O = void>(name: string, triggers: unknown, render: Render<SVGCircleElement, O>, superRender?: SuperRender<O, SVGCircleElement>): RxNode<SVGCircleElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.circle) }
export function RxClipPath<O = void>(name: string, triggers: unknown, render: Render<SVGClipPathElement, O>, superRender?: SuperRender<O, SVGClipPathElement>): RxNode<SVGClipPathElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.clipPath) }
export function RxDefs<O = void>(name: string, triggers: unknown, render: Render<SVGDefsElement, O>, superRender?: SuperRender<O, SVGDefsElement>): RxNode<SVGDefsElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.defs) }
export function RxDesc<O = void>(name: string, triggers: unknown, render: Render<SVGDescElement, O>, superRender?: SuperRender<O, SVGDescElement>): RxNode<SVGDescElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.desc) }
export function RxEllipse<O = void>(name: string, triggers: unknown, render: Render<SVGEllipseElement, O>, superRender?: SuperRender<O, SVGEllipseElement>): RxNode<SVGEllipseElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.ellipse) }
export function RxFeBlend<O = void>(name: string, triggers: unknown, render: Render<SVGFEBlendElement, O>, superRender?: SuperRender<O, SVGFEBlendElement>): RxNode<SVGFEBlendElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feBlend) }
export function RxFeColorMatrix<O = void>(name: string, triggers: unknown, render: Render<SVGFEColorMatrixElement, O>, superRender?: SuperRender<O, SVGFEColorMatrixElement>): RxNode<SVGFEColorMatrixElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feColorMatrix) }
export function RxFeComponentTransfer<O = void>(name: string, triggers: unknown, render: Render<SVGFEComponentTransferElement, O>, superRender?: SuperRender<O, SVGFEComponentTransferElement>): RxNode<SVGFEComponentTransferElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feComponentTransfer) }
export function RxFeComposite<O = void>(name: string, triggers: unknown, render: Render<SVGFECompositeElement, O>, superRender?: SuperRender<O, SVGFECompositeElement>): RxNode<SVGFECompositeElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feComposite) }
export function RxFeConvolveMatrix<O = void>(name: string, triggers: unknown, render: Render<SVGFEConvolveMatrixElement, O>, superRender?: SuperRender<O, SVGFEConvolveMatrixElement>): RxNode<SVGFEConvolveMatrixElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feConvolveMatrix) }
export function RxFeDiffuseLighting<O = void>(name: string, triggers: unknown, render: Render<SVGFEDiffuseLightingElement, O>, superRender?: SuperRender<O, SVGFEDiffuseLightingElement>): RxNode<SVGFEDiffuseLightingElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feDiffuseLighting) }
export function RxFeDisplacementMap<O = void>(name: string, triggers: unknown, render: Render<SVGFEDisplacementMapElement, O>, superRender?: SuperRender<O, SVGFEDisplacementMapElement>): RxNode<SVGFEDisplacementMapElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feDisplacementMap) }
export function RxFeDistantLight<O = void>(name: string, triggers: unknown, render: Render<SVGFEDistantLightElement, O>, superRender?: SuperRender<O, SVGFEDistantLightElement>): RxNode<SVGFEDistantLightElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feDistantLight) }
export function RxFeDropShadow<O = void>(name: string, triggers: unknown, render: Render<SVGFEDropShadowElement, O>, superRender?: SuperRender<O, SVGFEDropShadowElement>): RxNode<SVGFEDropShadowElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feDropShadow) }
export function RxFeFlood<O = void>(name: string, triggers: unknown, render: Render<SVGFEFloodElement, O>, superRender?: SuperRender<O, SVGFEFloodElement>): RxNode<SVGFEFloodElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feFlood) }
export function RxFeFuncA<O = void>(name: string, triggers: unknown, render: Render<SVGFEFuncAElement, O>, superRender?: SuperRender<O, SVGFEFuncAElement>): RxNode<SVGFEFuncAElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feFuncA) }
export function RxFeFuncB<O = void>(name: string, triggers: unknown, render: Render<SVGFEFuncBElement, O>, superRender?: SuperRender<O, SVGFEFuncBElement>): RxNode<SVGFEFuncBElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feFuncB) }
export function RxFeFuncG<O = void>(name: string, triggers: unknown, render: Render<SVGFEFuncGElement, O>, superRender?: SuperRender<O, SVGFEFuncGElement>): RxNode<SVGFEFuncGElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feFuncG) }
export function RxFeFuncR<O = void>(name: string, triggers: unknown, render: Render<SVGFEFuncRElement, O>, superRender?: SuperRender<O, SVGFEFuncRElement>): RxNode<SVGFEFuncRElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feFuncR) }
export function RxFeGaussianBlur<O = void>(name: string, triggers: unknown, render: Render<SVGFEGaussianBlurElement, O>, superRender?: SuperRender<O, SVGFEGaussianBlurElement>): RxNode<SVGFEGaussianBlurElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feGaussianBlur) }
export function RxFeImage<O = void>(name: string, triggers: unknown, render: Render<SVGFEImageElement, O>, superRender?: SuperRender<O, SVGFEImageElement>): RxNode<SVGFEImageElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feImage) }
export function RxFeMerge<O = void>(name: string, triggers: unknown, render: Render<SVGFEMergeElement, O>, superRender?: SuperRender<O, SVGFEMergeElement>): RxNode<SVGFEMergeElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feMerge) }
export function RxFeMergeNode<O = void>(name: string, triggers: unknown, render: Render<SVGFEMergeNodeElement, O>, superRender?: SuperRender<O, SVGFEMergeNodeElement>): RxNode<SVGFEMergeNodeElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feMergeNode) }
export function RxFeMorphology<O = void>(name: string, triggers: unknown, render: Render<SVGFEMorphologyElement, O>, superRender?: SuperRender<O, SVGFEMorphologyElement>): RxNode<SVGFEMorphologyElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feMorphology) }
export function RxFeOffset<O = void>(name: string, triggers: unknown, render: Render<SVGFEOffsetElement, O>, superRender?: SuperRender<O, SVGFEOffsetElement>): RxNode<SVGFEOffsetElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feOffset) }
export function RxFePointLight<O = void>(name: string, triggers: unknown, render: Render<SVGFEPointLightElement, O>, superRender?: SuperRender<O, SVGFEPointLightElement>): RxNode<SVGFEPointLightElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.fePointLight) }
export function RxFeSpecularLighting<O = void>(name: string, triggers: unknown, render: Render<SVGFESpecularLightingElement, O>, superRender?: SuperRender<O, SVGFESpecularLightingElement>): RxNode<SVGFESpecularLightingElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feSpecularLighting) }
export function RxFeSpotLight<O = void>(name: string, triggers: unknown, render: Render<SVGFESpotLightElement, O>, superRender?: SuperRender<O, SVGFESpotLightElement>): RxNode<SVGFESpotLightElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feSpotLight) }
export function RxFeTile<O = void>(name: string, triggers: unknown, render: Render<SVGFETileElement, O>, superRender?: SuperRender<O, SVGFETileElement>): RxNode<SVGFETileElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feTile) }
export function RxFeTurbulence<O = void>(name: string, triggers: unknown, render: Render<SVGFETurbulenceElement, O>, superRender?: SuperRender<O, SVGFETurbulenceElement>): RxNode<SVGFETurbulenceElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feTurbulence) }
export function RxFilter<O = void>(name: string, triggers: unknown, render: Render<SVGFilterElement, O>, superRender?: SuperRender<O, SVGFilterElement>): RxNode<SVGFilterElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.filter) }
export function RxForeignObject<O = void>(name: string, triggers: unknown, render: Render<SVGForeignObjectElement, O>, superRender?: SuperRender<O, SVGForeignObjectElement>): RxNode<SVGForeignObjectElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.foreignObject) }
export function RxG<O = void>(name: string, triggers: unknown, render: Render<SVGGElement, O>, superRender?: SuperRender<O, SVGGElement>): RxNode<SVGGElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.g) }
export function RxSvgImage<O = void>(name: string, triggers: unknown, render: Render<SVGImageElement, O>, superRender?: SuperRender<O, SVGImageElement>): RxNode<SVGImageElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.image) }
export function RxLine<O = void>(name: string, triggers: unknown, render: Render<SVGLineElement, O>, superRender?: SuperRender<O, SVGLineElement>): RxNode<SVGLineElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.line) }
export function RxLinearGradient<O = void>(name: string, triggers: unknown, render: Render<SVGLinearGradientElement, O>, superRender?: SuperRender<O, SVGLinearGradientElement>): RxNode<SVGLinearGradientElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.linearGradient) }
export function RxMarker<O = void>(name: string, triggers: unknown, render: Render<SVGMarkerElement, O>, superRender?: SuperRender<O, SVGMarkerElement>): RxNode<SVGMarkerElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.marker) }
export function RxMask<O = void>(name: string, triggers: unknown, render: Render<SVGMaskElement, O>, superRender?: SuperRender<O, SVGMaskElement>): RxNode<SVGMaskElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.mask) }
export function RxMetadata<O = void>(name: string, triggers: unknown, render: Render<SVGMetadataElement, O>, superRender?: SuperRender<O, SVGMetadataElement>): RxNode<SVGMetadataElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.metadata) }
export function RxMPath<O = void>(name: string, triggers: unknown, render: Render<SVGElement, O>, superRender?: SuperRender<O, SVGElement>): RxNode<SVGElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.mpath) }
export function RxPath<O = void>(name: string, triggers: unknown, render: Render<SVGPathElement, O>, superRender?: SuperRender<O, SVGPathElement>): RxNode<SVGPathElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.path) }
export function RxPattern<O = void>(name: string, triggers: unknown, render: Render<SVGPatternElement, O>, superRender?: SuperRender<O, SVGPatternElement>): RxNode<SVGPatternElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.pattern) }
export function RxPolygon<O = void>(name: string, triggers: unknown, render: Render<SVGPolygonElement, O>, superRender?: SuperRender<O, SVGPolygonElement>): RxNode<SVGPolygonElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.polygon) }
export function RxPolyline<O = void>(name: string, triggers: unknown, render: Render<SVGPolylineElement, O>, superRender?: SuperRender<O, SVGPolylineElement>): RxNode<SVGPolylineElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.polyline) }
export function RxRadialGradient<O = void>(name: string, triggers: unknown, render: Render<SVGRadialGradientElement, O>, superRender?: SuperRender<O, SVGRadialGradientElement>): RxNode<SVGRadialGradientElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.radialGradient) }
export function RxRect<O = void>(name: string, triggers: unknown, render: Render<SVGRectElement, O>, superRender?: SuperRender<O, SVGRectElement>): RxNode<SVGRectElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.rect) }
export function RxStop<O = void>(name: string, triggers: unknown, render: Render<SVGStopElement, O>, superRender?: SuperRender<O, SVGStopElement>): RxNode<SVGStopElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.stop) }
export function RxSvgSwitch<O = void>(name: string, triggers: unknown, render: Render<SVGSwitchElement, O>, superRender?: SuperRender<O, SVGSwitchElement>): RxNode<SVGSwitchElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.switch) }
export function RxSymbol<O = void>(name: string, triggers: unknown, render: Render<SVGSymbolElement, O>, superRender?: SuperRender<O, SVGSymbolElement>): RxNode<SVGSymbolElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.symbol) }
export function RxText<O = void>(name: string, triggers: unknown, render: Render<SVGTextElement, O>, superRender?: SuperRender<O, SVGTextElement>): RxNode<SVGTextElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.text) }
export function RxTextPath<O = void>(name: string, triggers: unknown, render: Render<SVGTextPathElement, O>, superRender?: SuperRender<O, SVGTextPathElement>): RxNode<SVGTextPathElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.textPath) }
export function RxTSpan<O = void>(name: string, triggers: unknown, render: Render<SVGTSpanElement, O>, superRender?: SuperRender<O, SVGTSpanElement>): RxNode<SVGTSpanElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.tspan) }
export function RxUse<O = void>(name: string, triggers: unknown, render: Render<SVGUseElement, O>, superRender?: SuperRender<O, SVGUseElement>): RxNode<SVGUseElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.use) }
export function RxView<O = void>(name: string, triggers: unknown, render: Render<SVGViewElement, O>, superRender?: SuperRender<O, SVGViewElement>): RxNode<SVGViewElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.view) }

export function Svg(name: string, render: Render<SVGSVGElement> = nullRender): RxNode<SVGSVGElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.svg) }
export function SvgA(name: string, render: Render<SVGAElement> = nullRender): RxNode<SVGAElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.a) }
export function Animate(name: string, render: Render<SVGAnimateElement> = nullRender): RxNode<SVGAnimateElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.animate) }
export function AnimateMotion(name: string, render: Render<SVGAnimateMotionElement> = nullRender): RxNode<SVGAnimateMotionElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.animateMotion) }
export function AnimateTransform(name: string, render: Render<SVGAnimateTransformElement> = nullRender): RxNode<SVGAnimateTransformElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.animateTransform) }
export function Circle(name: string, render: Render<SVGCircleElement> = nullRender): RxNode<SVGCircleElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.circle) }
export function ClipPath(name: string, render: Render<SVGClipPathElement> = nullRender): RxNode<SVGClipPathElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.clipPath) }
export function Defs(name: string, render: Render<SVGDefsElement> = nullRender): RxNode<SVGDefsElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.defs) }
export function Desc(name: string, render: Render<SVGDescElement> = nullRender): RxNode<SVGDescElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.desc) }
export function Ellipse(name: string, render: Render<SVGEllipseElement> = nullRender): RxNode<SVGEllipseElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.ellipse) }
export function FeBlend(name: string, render: Render<SVGFEBlendElement> = nullRender): RxNode<SVGFEBlendElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.feBlend) }
export function FeColorMatrix(name: string, render: Render<SVGFEColorMatrixElement> = nullRender): RxNode<SVGFEColorMatrixElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.feColorMatrix) }
export function FeComponentTransfer(name: string, render: Render<SVGFEComponentTransferElement> = nullRender): RxNode<SVGFEComponentTransferElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.feComponentTransfer) }
export function FeComposite(name: string, render: Render<SVGFECompositeElement> = nullRender): RxNode<SVGFECompositeElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.feComposite) }
export function FeConvolveMatrix(name: string, render: Render<SVGFEConvolveMatrixElement> = nullRender): RxNode<SVGFEConvolveMatrixElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.feConvolveMatrix) }
export function FeDiffuseLighting(name: string, render: Render<SVGFEDiffuseLightingElement> = nullRender): RxNode<SVGFEDiffuseLightingElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.feDiffuseLighting) }
export function FeDisplacementMap(name: string, render: Render<SVGFEDisplacementMapElement> = nullRender): RxNode<SVGFEDisplacementMapElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.feDisplacementMap) }
export function FeDistantLight(name: string, render: Render<SVGFEDistantLightElement> = nullRender): RxNode<SVGFEDistantLightElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.feDistantLight) }
export function FeDropShadow(name: string, render: Render<SVGFEDropShadowElement> = nullRender): RxNode<SVGFEDropShadowElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.feDropShadow) }
export function FeFlood(name: string, render: Render<SVGFEFloodElement> = nullRender): RxNode<SVGFEFloodElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.feFlood) }
export function FeFuncA(name: string, render: Render<SVGFEFuncAElement> = nullRender): RxNode<SVGFEFuncAElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.feFuncA) }
export function FeFuncB(name: string, render: Render<SVGFEFuncBElement> = nullRender): RxNode<SVGFEFuncBElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.feFuncB) }
export function FeFuncG(name: string, render: Render<SVGFEFuncGElement> = nullRender): RxNode<SVGFEFuncGElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.feFuncG) }
export function FeFuncR(name: string, render: Render<SVGFEFuncRElement> = nullRender): RxNode<SVGFEFuncRElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.feFuncR) }
export function FeGaussianBlur(name: string, render: Render<SVGFEGaussianBlurElement> = nullRender): RxNode<SVGFEGaussianBlurElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.feGaussianBlur) }
export function FeImage(name: string, render: Render<SVGFEImageElement> = nullRender): RxNode<SVGFEImageElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.feImage) }
export function FeMerge(name: string, render: Render<SVGFEMergeElement> = nullRender): RxNode<SVGFEMergeElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.feMerge) }
export function FeMergeNode(name: string, render: Render<SVGFEMergeNodeElement> = nullRender): RxNode<SVGFEMergeNodeElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.feMergeNode) }
export function FeMorphology(name: string, render: Render<SVGFEMorphologyElement> = nullRender): RxNode<SVGFEMorphologyElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.feMorphology) }
export function FeOffset(name: string, render: Render<SVGFEOffsetElement> = nullRender): RxNode<SVGFEOffsetElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.feOffset) }
export function FePointLight(name: string, render: Render<SVGFEPointLightElement> = nullRender): RxNode<SVGFEPointLightElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.fePointLight) }
export function FeSpecularLighting(name: string, render: Render<SVGFESpecularLightingElement> = nullRender): RxNode<SVGFESpecularLightingElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.feSpecularLighting) }
export function FeSpotLight(name: string, render: Render<SVGFESpotLightElement> = nullRender): RxNode<SVGFESpotLightElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.feSpotLight) }
export function FeTile(name: string, render: Render<SVGFETileElement> = nullRender): RxNode<SVGFETileElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.feTile) }
export function FeTurbulence(name: string, render: Render<SVGFETurbulenceElement> = nullRender): RxNode<SVGFETurbulenceElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.feTurbulence) }
export function Filter(name: string, render: Render<SVGFilterElement> = nullRender): RxNode<SVGFilterElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.filter) }
export function ForeignObject(name: string, render: Render<SVGForeignObjectElement> = nullRender): RxNode<SVGForeignObjectElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.foreignObject) }
export function G(name: string, render: Render<SVGGElement> = nullRender): RxNode<SVGGElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.g) }
export function SvgImage(name: string, render: Render<SVGImageElement> = nullRender): RxNode<SVGImageElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.image) }
export function Line(name: string, render: Render<SVGLineElement> = nullRender): RxNode<SVGLineElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.line) }
export function LinearGradient(name: string, render: Render<SVGLinearGradientElement> = nullRender): RxNode<SVGLinearGradientElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.linearGradient) }
export function Marker(name: string, render: Render<SVGMarkerElement> = nullRender): RxNode<SVGMarkerElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.marker) }
export function Mask(name: string, render: Render<SVGMaskElement> = nullRender): RxNode<SVGMaskElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.mask) }
export function MetaData(name: string, render: Render<SVGMetadataElement> = nullRender): RxNode<SVGMetadataElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.metadata) }
export function MPath(name: string, render: Render<SVGElement> = nullRender): RxNode<SVGElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.mpath) }
export function Path(name: string, render: Render<SVGPathElement> = nullRender): RxNode<SVGPathElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.path) }
export function Pattern(name: string, render: Render<SVGPatternElement> = nullRender): RxNode<SVGPatternElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.pattern) }
export function Polygon(name: string, render: Render<SVGPolygonElement> = nullRender): RxNode<SVGPolygonElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.polygon) }
export function PolyLine(name: string, render: Render<SVGPolylineElement> = nullRender): RxNode<SVGPolylineElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.polyline) }
export function RadialGradient(name: string, render: Render<SVGRadialGradientElement> = nullRender): RxNode<SVGRadialGradientElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.radialGradient) }
export function Rect(name: string, render: Render<SVGRectElement> = nullRender): RxNode<SVGRectElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.rect) }
export function Stop(name: string, render: Render<SVGStopElement> = nullRender): RxNode<SVGStopElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.stop) }
export function SvgSwitch(name: string, render: Render<SVGSwitchElement> = nullRender): RxNode<SVGSwitchElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.switch) }
export function Symbol(name: string, render: Render<SVGSymbolElement> = nullRender): RxNode<SVGSymbolElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.symbol) }
export function Text(name: string, render: Render<SVGTextElement> = nullRender): RxNode<SVGTextElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.text) }
export function TextPath(name: string, render: Render<SVGTextPathElement> = nullRender): RxNode<SVGTextPathElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.textPath) }
export function TSpan(name: string, render: Render<SVGTSpanElement> = nullRender): RxNode<SVGTSpanElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.tspan) }
export function Use(name: string, render: Render<SVGUseElement> = nullRender): RxNode<SVGUseElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.use) }
export function View(name: string, render: Render<SVGViewElement> = nullRender): RxNode<SVGViewElement> { return RxDom.Node(name, undefined, render, undefined, SvgTags.view) }

const SvgTags = {
  svg: new SvgNodeFactory<SVGSVGElement>('svg'),
  a: new SvgNodeFactory<SVGAElement>('a'),
  animate: new SvgNodeFactory<SVGAnimateElement>('animate'),
  animateMotion: new SvgNodeFactory<SVGAnimateMotionElement>('animateMotion'),
  animateTransform: new SvgNodeFactory<SVGAnimateTransformElement>('animateTransform'),
  circle: new SvgNodeFactory<SVGCircleElement>('circle'),
  clipPath: new SvgNodeFactory<SVGClipPathElement>('clipPath'),
  defs: new SvgNodeFactory<SVGDefsElement>('defs'),
  desc: new SvgNodeFactory<SVGDescElement>('desc'),
  ellipse: new SvgNodeFactory<SVGEllipseElement>('ellipse'),
  feBlend: new SvgNodeFactory<SVGFEBlendElement>('feBlend'),
  feColorMatrix: new SvgNodeFactory<SVGFEColorMatrixElement>('feColorMatrix'),
  feComponentTransfer: new SvgNodeFactory<SVGFEComponentTransferElement>('feComponentTransfer'),
  feComposite: new SvgNodeFactory<SVGFECompositeElement>('feComposite'),
  feConvolveMatrix: new SvgNodeFactory<SVGFEConvolveMatrixElement>('feConvolveMatrix'),
  feDiffuseLighting: new SvgNodeFactory<SVGFEDiffuseLightingElement>('feDiffuseLighting'),
  feDisplacementMap: new SvgNodeFactory<SVGFEDisplacementMapElement>('feDisplacementMap'),
  feDistantLight: new SvgNodeFactory<SVGFEDistantLightElement>('feDistantLight'),
  feDropShadow: new SvgNodeFactory<SVGFEDropShadowElement>('feDropShadow'),
  feFlood: new SvgNodeFactory<SVGFEFloodElement>('feFlood'),
  feFuncA: new SvgNodeFactory<SVGFEFuncAElement>('feFuncA'),
  feFuncB: new SvgNodeFactory<SVGFEFuncBElement>('feFuncB'),
  feFuncG: new SvgNodeFactory<SVGFEFuncGElement>('feFuncG'),
  feFuncR: new SvgNodeFactory<SVGFEFuncRElement>('feFuncR'),
  feGaussianBlur: new SvgNodeFactory<SVGFEGaussianBlurElement>('feGaussianBlur'),
  feImage: new SvgNodeFactory<SVGFEImageElement>('feImage'),
  feMerge: new SvgNodeFactory<SVGFEMergeElement>('feMerge'),
  feMergeNode: new SvgNodeFactory<SVGFEMergeNodeElement>('feMergeNode'),
  feMorphology: new SvgNodeFactory<SVGFEMorphologyElement>('feMorphology'),
  feOffset: new SvgNodeFactory<SVGFEOffsetElement>('feOffset'),
  fePointLight: new SvgNodeFactory<SVGFEPointLightElement>('fePointLight'),
  feSpecularLighting: new SvgNodeFactory<SVGFESpecularLightingElement>('feSpecularLighting'),
  feSpotLight: new SvgNodeFactory<SVGFESpotLightElement>('feSpotLight'),
  feTile: new SvgNodeFactory<SVGFETileElement>('feTile'),
  feTurbulence: new SvgNodeFactory<SVGFETurbulenceElement>('feTurbulence'),
  filter: new SvgNodeFactory<SVGFilterElement>('filter'),
  foreignObject: new SvgNodeFactory<SVGForeignObjectElement>('foreignObject'),
  g: new SvgNodeFactory<SVGGElement>('g'),
  image: new SvgNodeFactory<SVGImageElement>('image'),
  line: new SvgNodeFactory<SVGLineElement>('line'),
  linearGradient: new SvgNodeFactory<SVGLinearGradientElement>('linearGradient'),
  marker: new SvgNodeFactory<SVGMarkerElement>('marker'),
  mask: new SvgNodeFactory<SVGMaskElement>('mask'),
  metadata: new SvgNodeFactory<SVGMetadataElement>('metadata'),
  mpath: new SvgNodeFactory<SVGElement>('mpath'),
  path: new SvgNodeFactory<SVGPathElement>('path'),
  pattern: new SvgNodeFactory<SVGPatternElement>('pattern'),
  polygon: new SvgNodeFactory<SVGPolygonElement>('polygon'),
  polyline: new SvgNodeFactory<SVGPolylineElement>('polyline'),
  radialGradient: new SvgNodeFactory<SVGRadialGradientElement>('radialGradient'),
  rect: new SvgNodeFactory<SVGRectElement>('rect'),
  stop: new SvgNodeFactory<SVGStopElement>('stop'),
  switch: new SvgNodeFactory<SVGSwitchElement>('switch'),
  symbol: new SvgNodeFactory<SVGSymbolElement>('symbol'),
  text: new SvgNodeFactory<SVGTextElement>('text'),
  textPath: new SvgNodeFactory<SVGTextPathElement>('textPath'),
  tspan: new SvgNodeFactory<SVGTSpanElement>('tspan'),
  use: new SvgNodeFactory<SVGUseElement>('use'),
  view: new SvgNodeFactory<SVGViewElement>('view'),
}
