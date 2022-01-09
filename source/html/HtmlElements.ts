// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { RxDom, Render, RxNode, OuterRender } from '../core/api'
import { HtmlNodeFactory, SvgNodeFactory } from './HtmlNodeFactory'

export function HtmlBody(name: string, triggers: unknown, render?: Render<HTMLElement>): RxNode<HTMLElement> {
  return RxDom.Node(name, triggers, render, undefined, {
    name, arranging: true,
    initialize(node: RxNode<HTMLElement, any>, sibling?: RxNode): void {
      const native = node.native = global.document.body
      native.id = node.name
    },
  })
}

export function RxA<O = void>(name: string, triggers: unknown, render?: Render<HTMLAnchorElement, O>, outerRender?: OuterRender<HTMLAnchorElement, O>, inline?: boolean): RxNode<HTMLAnchorElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.a, inline) }
export function RxAbbr<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.abbr, inline) }
export function RxAddress<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.address, inline) }
export function RxArea<O = void>(name: string, triggers: unknown, render?: Render<HTMLAreaElement, O>, outerRender?: OuterRender<HTMLAreaElement, O>, inline?: boolean): RxNode<HTMLAreaElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.area, inline) }
export function RxArticle<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.article, inline) }
export function RxAside<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.aside, inline) }
export function RxAudio<O = void>(name: string, triggers: unknown, render?: Render<HTMLAudioElement, O>, outerRender?: OuterRender<HTMLAudioElement, O>, inline?: boolean): RxNode<HTMLAudioElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.audio, inline) }
export function RxB<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.b, inline) }
export function RxBase<O = void>(name: string, triggers: unknown, render?: Render<HTMLBaseElement, O>, outerRender?: OuterRender<HTMLBaseElement, O>, inline?: boolean): RxNode<HTMLBaseElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.base, inline) }
export function RxBdi<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.bdi, inline) }
export function RxBdo<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.bdo, inline) }
export function RxBig<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.big, inline) }
export function RxBlockQuote<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.blockquote, inline) }
export function RxBody<O = void>(name: string, triggers: unknown, render?: Render<HTMLBodyElement, O>, outerRender?: OuterRender<HTMLBodyElement, O>, inline?: boolean): RxNode<HTMLBodyElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.body, inline) }
export function RxBR<O = void>(name: string, triggers: unknown, render?: Render<HTMLBRElement, O>, outerRender?: OuterRender<HTMLBRElement, O>, inline?: boolean): RxNode<HTMLBRElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.br, inline) }
export function RxButton<O = void>(name: string, triggers: unknown, render?: Render<HTMLButtonElement, O>, outerRender?: OuterRender<HTMLButtonElement, O>, inline?: boolean): RxNode<HTMLButtonElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.button, inline) }
export function RxCanvas<O = void>(name: string, triggers: unknown, render?: Render<HTMLCanvasElement, O>, outerRender?: OuterRender<HTMLCanvasElement, O>, inline?: boolean): RxNode<HTMLCanvasElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.canvas, inline) }
export function RxCaption<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableCaptionElement, O>, outerRender?: OuterRender<HTMLTableCaptionElement, O>, inline?: boolean): RxNode<HTMLTableCaptionElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.caption, inline) }
export function RxCite<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.cite, inline) }
export function RxCode<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.code, inline) }
export function RxCol<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableColElement, O>, outerRender?: OuterRender<HTMLTableColElement, O>, inline?: boolean): RxNode<HTMLTableColElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.col, inline) }
export function RxColGroup<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableColElement, O>, outerRender?: OuterRender<HTMLTableColElement, O>, inline?: boolean): RxNode<HTMLTableColElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.colgroup, inline) }
export function RxData<O = void>(name: string, triggers: unknown, render?: Render<HTMLDataElement, O>, outerRender?: OuterRender<HTMLDataElement, O>, inline?: boolean): RxNode<HTMLDataElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.data, inline) }
export function RxDataList<O = void>(name: string, triggers: unknown, render?: Render<HTMLDataListElement, O>, outerRender?: OuterRender<HTMLDataListElement, O>, inline?: boolean): RxNode<HTMLDataListElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.datalist, inline) }
export function RxDD<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.dd, inline) }
export function RxDel<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.del, inline) }
export function RxDetails<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.details, inline) }
export function RxDfn<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.dfn, inline) }
export function RxDiv<O = void>(name: string, triggers: unknown, render?: Render<HTMLDivElement, O>, outerRender?: OuterRender<HTMLDivElement, O>, inline?: boolean): RxNode<HTMLDivElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.div, inline) }
export function RxDL<O = void>(name: string, triggers: unknown, render?: Render<HTMLDListElement, O>, outerRender?: OuterRender<HTMLDListElement, O>, inline?: boolean): RxNode<HTMLDListElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.dl, inline) }
export function RxDT<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.dt, inline) }
export function RxEM<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.em, inline) }
export function RxEmbed<O = void>(name: string, triggers: unknown, render?: Render<HTMLEmbedElement, O>, outerRender?: OuterRender<HTMLEmbedElement, O>, inline?: boolean): RxNode<HTMLEmbedElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.embed, inline) }
export function RxFieldSet<O = void>(name: string, triggers: unknown, render?: Render<HTMLFieldSetElement, O>, outerRender?: OuterRender<HTMLFieldSetElement, O>, inline?: boolean): RxNode<HTMLFieldSetElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.fieldset, inline) }
export function RxFigCaption<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.figcaption, inline) }
export function RxFigure<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.figure, inline) }
export function RxFooter<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.footer, inline) }
export function RxForm<O = void>(name: string, triggers: unknown, render?: Render<HTMLFormElement, O>, outerRender?: OuterRender<HTMLFormElement, O>, inline?: boolean): RxNode<HTMLFormElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.form, inline) }
export function RxH1<O = void>(name: string, triggers: unknown, render?: Render<HTMLHeadingElement, O>, outerRender?: OuterRender<HTMLHeadingElement, O>, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.h1, inline) }
export function RxH2<O = void>(name: string, triggers: unknown, render?: Render<HTMLHeadingElement, O>, outerRender?: OuterRender<HTMLHeadingElement, O>, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.h2, inline) }
export function RxH3<O = void>(name: string, triggers: unknown, render?: Render<HTMLHeadingElement, O>, outerRender?: OuterRender<HTMLHeadingElement, O>, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.h3, inline) }
export function RxH4<O = void>(name: string, triggers: unknown, render?: Render<HTMLHeadingElement, O>, outerRender?: OuterRender<HTMLHeadingElement, O>, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.h4, inline) }
export function RxH5<O = void>(name: string, triggers: unknown, render?: Render<HTMLHeadingElement, O>, outerRender?: OuterRender<HTMLHeadingElement, O>, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.h5, inline) }
export function RxH6<O = void>(name: string, triggers: unknown, render?: Render<HTMLHeadingElement, O>, outerRender?: OuterRender<HTMLHeadingElement, O>, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.h6, inline) }
export function RxHead<O = void>(name: string, triggers: unknown, render?: Render<HTMLHeadElement, O>, outerRender?: OuterRender<HTMLHeadElement, O>, inline?: boolean): RxNode<HTMLHeadElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.head, inline) }
export function RxHeader<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.header, inline) }
export function RxHGroup<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.hgroup, inline) }
export function RxHR<O = void>(name: string, triggers: unknown, render?: Render<HTMLHRElement, O>, outerRender?: OuterRender<HTMLHRElement, O>, inline?: boolean): RxNode<HTMLHRElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.hr, inline) }
export function RxHtml<O = void>(name: string, triggers: unknown, render?: Render<HTMLHtmlElement, O>, outerRender?: OuterRender<HTMLHtmlElement, O>, inline?: boolean): RxNode<HTMLHtmlElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.html, inline) }
export function RxI<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.i, inline) }
export function RxIFrame<O = void>(name: string, triggers: unknown, render?: Render<HTMLIFrameElement, O>, outerRender?: OuterRender<HTMLIFrameElement, O>, inline?: boolean): RxNode<HTMLIFrameElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.iframe, inline) }
export function RxImg<O = void>(name: string, triggers: unknown, render?: Render<HTMLImageElement, O>, outerRender?: OuterRender<HTMLImageElement, O>, inline?: boolean): RxNode<HTMLImageElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.img, inline) }
export function RxInput<O = void>(name: string, triggers: unknown, render?: Render<HTMLInputElement, O>, outerRender?: OuterRender<HTMLInputElement, O>, inline?: boolean): RxNode<HTMLInputElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.input, inline) }
export function RxIns<O = void>(name: string, triggers: unknown, render?: Render<HTMLModElement, O>, outerRender?: OuterRender<HTMLModElement, O>, inline?: boolean): RxNode<HTMLModElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.ins, inline) }
export function RxKbd<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.kbd, inline) }
export function RxKeygen<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.keygen, inline) }
export function RxLabel<O = void>(name: string, triggers: unknown, render?: Render<HTMLLabelElement, O>, outerRender?: OuterRender<HTMLLabelElement, O>, inline?: boolean): RxNode<HTMLLabelElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.label, inline) }
export function RxLegend<O = void>(name: string, triggers: unknown, render?: Render<HTMLLegendElement, O>, outerRender?: OuterRender<HTMLLegendElement, O>, inline?: boolean): RxNode<HTMLLegendElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.legend, inline) }
export function RxLI<O = void>(name: string, triggers: unknown, render?: Render<HTMLLIElement, O>, outerRender?: OuterRender<HTMLLIElement, O>, inline?: boolean): RxNode<HTMLLIElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.li, inline) }
export function RxLink<O = void>(name: string, triggers: unknown, render?: Render<HTMLLinkElement, O>, outerRender?: OuterRender<HTMLLinkElement, O>, inline?: boolean): RxNode<HTMLLinkElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.link, inline) }
export function RxMain<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.main, inline) }
export function RxMap<O = void>(name: string, triggers: unknown, render?: Render<HTMLMapElement, O>, outerRender?: OuterRender<HTMLMapElement, O>, inline?: boolean): RxNode<HTMLMapElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.map, inline) }
export function RxMark<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.mark, inline) }
export function RxMenu<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.menu, inline) }
export function RxMenuItem<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.menuitem, inline) }
export function RxMeta<O = void>(name: string, triggers: unknown, render?: Render<HTMLMetaElement, O>, outerRender?: OuterRender<HTMLMetaElement, O>, inline?: boolean): RxNode<HTMLMetaElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.meta, inline) }
export function RxMeter<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.meter, inline) }
export function RxNav<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.nav, inline) }
export function RxNoIndex<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.noindex, inline) }
export function RxNoScript<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.noscript, inline) }
export function RxObj<O = void>(name: string, triggers: unknown, render?: Render<HTMLObjectElement, O>, outerRender?: OuterRender<HTMLObjectElement, O>, inline?: boolean): RxNode<HTMLObjectElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.object, inline) }
export function RxOL<O = void>(name: string, triggers: unknown, render?: Render<HTMLOListElement, O>, outerRender?: OuterRender<HTMLOListElement, O>, inline?: boolean): RxNode<HTMLOListElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.ol, inline) }
export function RxOptGroup<O = void>(name: string, triggers: unknown, render?: Render<HTMLOptGroupElement, O>, outerRender?: OuterRender<HTMLOptGroupElement, O>, inline?: boolean): RxNode<HTMLOptGroupElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.optgroup, inline) }
export function RxOption<O = void>(name: string, triggers: unknown, render?: Render<HTMLOptionElement, O>, outerRender?: OuterRender<HTMLOptionElement, O>, inline?: boolean): RxNode<HTMLOptionElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.option, inline) }
export function RxOutput<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.output, inline) }
export function RxP<O = void>(name: string, triggers: unknown, render?: Render<HTMLParagraphElement, O>, outerRender?: OuterRender<HTMLParagraphElement, O>, inline?: boolean): RxNode<HTMLParagraphElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.p, inline) }
export function RxParam<O = void>(name: string, triggers: unknown, render?: Render<HTMLParamElement, O>, outerRender?: OuterRender<HTMLParamElement, O>, inline?: boolean): RxNode<HTMLParamElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.param, inline) }
export function RxPicture<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.picture, inline) }
export function RxPre<O = void>(name: string, triggers: unknown, render?: Render<HTMLPreElement, O>, outerRender?: OuterRender<HTMLPreElement, O>, inline?: boolean): RxNode<HTMLPreElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.pre, inline) }
export function RxProgress<O = void>(name: string, triggers: unknown, render?: Render<HTMLProgressElement, O>, outerRender?: OuterRender<HTMLProgressElement, O>, inline?: boolean): RxNode<HTMLProgressElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.progress, inline) }
export function RxQ<O = void>(name: string, triggers: unknown, render?: Render<HTMLQuoteElement, O>, outerRender?: OuterRender<HTMLQuoteElement, O>, inline?: boolean): RxNode<HTMLQuoteElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.q, inline) }
export function RxRP<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.rp, inline) }
export function RxRT<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.rt, inline) }
export function RxRuby<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.ruby, inline) }
export function RxS<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.s, inline) }
export function RxSamp<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.samp, inline) }
export function RxScript<O = void>(name: string, triggers: unknown, render?: Render<HTMLScriptElement, O>, outerRender?: OuterRender<HTMLScriptElement, O>, inline?: boolean): RxNode<HTMLScriptElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.script, inline) }
export function RxSection<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.section, inline) }
export function RxSelect<O = void>(name: string, triggers: unknown, render?: Render<HTMLSelectElement, O>, outerRender?: OuterRender<HTMLSelectElement, O>, inline?: boolean): RxNode<HTMLSelectElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.select, inline) }
export function RxSmall<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.small, inline) }
export function RxSource<O = void>(name: string, triggers: unknown, render?: Render<HTMLSourceElement, O>, outerRender?: OuterRender<HTMLSourceElement, O>, inline?: boolean): RxNode<HTMLSourceElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.source, inline) }
export function RxSpan<O = void>(name: string, triggers: unknown, render?: Render<HTMLSpanElement, O>, outerRender?: OuterRender<HTMLSpanElement, O>, inline?: boolean): RxNode<HTMLSpanElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.span, inline) }
export function RxStrong<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.strong, inline) }
export function RxStyle<O = void>(name: string, triggers: unknown, render?: Render<HTMLStyleElement, O>, outerRender?: OuterRender<HTMLStyleElement, O>, inline?: boolean): RxNode<HTMLStyleElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.style, inline) }
export function RxSub<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.sub, inline) }
export function RxSummary<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.summary, inline) }
export function RxSup<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.sup, inline) }
export function RxTable<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableElement, O>, outerRender?: OuterRender<HTMLTableElement, O>, inline?: boolean): RxNode<HTMLTableElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.table, inline) }
export function RxTemplate<O = void>(name: string, triggers: unknown, render?: Render<HTMLTemplateElement, O>, outerRender?: OuterRender<HTMLTemplateElement, O>, inline?: boolean): RxNode<HTMLTemplateElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.template, inline) }
export function RxTBody<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableSectionElement, O>, outerRender?: OuterRender<HTMLTableSectionElement, O>, inline?: boolean): RxNode<HTMLTableSectionElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.tbody, inline) }
export function RxTD<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableCellElement, O>, outerRender?: OuterRender<HTMLTableCellElement, O>, inline?: boolean): RxNode<HTMLTableCellElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.td, inline) }
export function RxTextArea<O = void>(name: string, triggers: unknown, render?: Render<HTMLTextAreaElement, O>, outerRender?: OuterRender<HTMLTextAreaElement, O>, inline?: boolean): RxNode<HTMLTextAreaElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.textarea, inline) }
export function RxTFoot<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableSectionElement, O>, outerRender?: OuterRender<HTMLTableSectionElement, O>, inline?: boolean): RxNode<HTMLTableSectionElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.tfoot, inline) }
export function RxTH<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableCellElement, O>, outerRender?: OuterRender<HTMLTableCellElement, O>, inline?: boolean): RxNode<HTMLTableCellElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.th, inline) }
export function RxTHead<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableSectionElement, O>, outerRender?: OuterRender<HTMLTableSectionElement, O>, inline?: boolean): RxNode<HTMLTableSectionElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.thead, inline) }
export function RxTime<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.time, inline) }
export function RxTitle<O = void>(name: string, triggers: unknown, render?: Render<HTMLTitleElement, O>, outerRender?: OuterRender<HTMLTitleElement, O>, inline?: boolean): RxNode<HTMLTitleElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.title, inline) }
export function RxTR<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableRowElement, O>, outerRender?: OuterRender<HTMLTableRowElement, O>, inline?: boolean): RxNode<HTMLTableRowElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.tr, inline) }
export function RxTrack<O = void>(name: string, triggers: unknown, render?: Render<HTMLTrackElement, O>, outerRender?: OuterRender<HTMLTrackElement, O>, inline?: boolean): RxNode<HTMLTrackElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.track, inline) }
export function RxU<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.u, inline) }
export function RxUL<O = void>(name: string, triggers: unknown, render?: Render<HTMLUListElement, O>, outerRender?: OuterRender<HTMLUListElement, O>, inline?: boolean): RxNode<HTMLUListElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.ul, inline) }
export function RxVar<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.var, inline) }
export function RxVideo<O = void>(name: string, triggers: unknown, render?: Render<HTMLVideoElement, O>, outerRender?: OuterRender<HTMLVideoElement, O>, inline?: boolean): RxNode<HTMLVideoElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.video, inline) }
export function RxWbr<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, outerRender, HtmlTags.wbr, inline) }

export function A<O = void>(name: string, render?: Render<HTMLAnchorElement, O>, outerRender?: OuterRender<HTMLAnchorElement, O>): RxNode<HTMLAnchorElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.a, true) }
export function Abbr<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.abbr, true) }
export function Address<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.address, true) }
export function Area<O = void>(name: string, render?: Render<HTMLAreaElement, O>, outerRender?: OuterRender<HTMLAreaElement, O>): RxNode<HTMLAreaElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.area, true) }
export function Article<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.article, true) }
export function Aside<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.aside, true) }
export function Audio<O = void>(name: string, render?: Render<HTMLAudioElement, O>, outerRender?: OuterRender<HTMLAudioElement, O>): RxNode<HTMLAudioElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.audio, true) }
export function B<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.b, true) }
export function Base<O = void>(name: string, render?: Render<HTMLBaseElement, O>, outerRender?: OuterRender<HTMLBaseElement, O>): RxNode<HTMLBaseElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.base, true) }
export function Bdi<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.bdi, true) }
export function Bdo<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.bdo, true) }
export function Big<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.big, true) }
export function BlockQuote<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.blockquote, true) }
export function Body<O = void>(name: string, render?: Render<HTMLBodyElement, O>, outerRender?: OuterRender<HTMLBodyElement, O>): RxNode<HTMLBodyElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.body, true) }
export function BR<O = void>(name: string, render?: Render<HTMLBRElement, O>, outerRender?: OuterRender<HTMLBRElement, O>): RxNode<HTMLBRElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.br, true) }
export function Button<O = void>(name: string, render?: Render<HTMLButtonElement, O>, outerRender?: OuterRender<HTMLButtonElement, O>): RxNode<HTMLButtonElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.button, true) }
export function Canvas<O = void>(name: string, render?: Render<HTMLCanvasElement, O>, outerRender?: OuterRender<HTMLCanvasElement, O>): RxNode<HTMLCanvasElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.canvas, true) }
export function Caption<O = void>(name: string, render?: Render<HTMLTableCaptionElement, O>, outerRender?: OuterRender<HTMLTableCaptionElement, O>): RxNode<HTMLTableCaptionElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.caption, true) }
export function Cite<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.cite, true) }
export function Code<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.code, true) }
export function Col<O = void>(name: string, render?: Render<HTMLTableColElement, O>, outerRender?: OuterRender<HTMLTableColElement, O>): RxNode<HTMLTableColElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.col, true) }
export function ColGroup<O = void>(name: string, render?: Render<HTMLTableColElement, O>, outerRender?: OuterRender<HTMLTableColElement, O>): RxNode<HTMLTableColElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.colgroup, true) }
export function Data<O = void>(name: string, render?: Render<HTMLDataElement, O>, outerRender?: OuterRender<HTMLDataElement, O>): RxNode<HTMLDataElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.data, true) }
export function DataList<O = void>(name: string, render?: Render<HTMLDataListElement, O>, outerRender?: OuterRender<HTMLDataListElement, O>): RxNode<HTMLDataListElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.datalist, true) }
export function DD<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.dd, true) }
export function Del<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.del, true) }
export function Details<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.details, true) }
export function Dfn<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.dfn, true) }
export function Div<O = void>(name: string, render?: Render<HTMLDivElement, O>, outerRender?: OuterRender<HTMLDivElement, O>): RxNode<HTMLDivElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.div, true) }
export function DL<O = void>(name: string, render?: Render<HTMLDListElement, O>, outerRender?: OuterRender<HTMLDListElement, O>): RxNode<HTMLDListElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.dl, true) }
export function DT<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.dt, true) }
export function EM<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.em, true) }
export function Embed<O = void>(name: string, render?: Render<HTMLEmbedElement, O>, outerRender?: OuterRender<HTMLEmbedElement, O>): RxNode<HTMLEmbedElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.embed, true) }
export function FieldSet<O = void>(name: string, render?: Render<HTMLFieldSetElement, O>, outerRender?: OuterRender<HTMLFieldSetElement, O>): RxNode<HTMLFieldSetElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.fieldset, true) }
export function FigCaption<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.figcaption, true) }
export function Figure<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.figure, true) }
export function Footer<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.footer, true) }
export function Form<O = void>(name: string, render?: Render<HTMLFormElement, O>, outerRender?: OuterRender<HTMLFormElement, O>): RxNode<HTMLFormElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.form, true) }
export function H1<O = void>(name: string, render?: Render<HTMLHeadingElement, O>, outerRender?: OuterRender<HTMLHeadingElement, O>): RxNode<HTMLHeadingElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.h1, true) }
export function H2<O = void>(name: string, render?: Render<HTMLHeadingElement, O>, outerRender?: OuterRender<HTMLHeadingElement, O>): RxNode<HTMLHeadingElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.h2, true) }
export function H3<O = void>(name: string, render?: Render<HTMLHeadingElement, O>, outerRender?: OuterRender<HTMLHeadingElement, O>): RxNode<HTMLHeadingElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.h3, true) }
export function H4<O = void>(name: string, render?: Render<HTMLHeadingElement, O>, outerRender?: OuterRender<HTMLHeadingElement, O>): RxNode<HTMLHeadingElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.h4, true) }
export function H5<O = void>(name: string, render?: Render<HTMLHeadingElement, O>, outerRender?: OuterRender<HTMLHeadingElement, O>): RxNode<HTMLHeadingElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.h5, true) }
export function H6<O = void>(name: string, render?: Render<HTMLHeadingElement, O>, outerRender?: OuterRender<HTMLHeadingElement, O>): RxNode<HTMLHeadingElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.h6, true) }
export function Head<O = void>(name: string, render?: Render<HTMLHeadElement, O>, outerRender?: OuterRender<HTMLHeadElement, O>): RxNode<HTMLHeadElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.head, true) }
export function Header<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.header, true) }
export function HGroup<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.hgroup, true) }
export function HR<O = void>(name: string, render?: Render<HTMLHRElement, O>, outerRender?: OuterRender<HTMLHRElement, O>): RxNode<HTMLHRElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.hr, true) }
export function Html<O = void>(name: string, render?: Render<HTMLHtmlElement, O>, outerRender?: OuterRender<HTMLHtmlElement, O>): RxNode<HTMLHtmlElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.html, true) }
export function I<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.i, true) }
export function IFrame<O = void>(name: string, render?: Render<HTMLIFrameElement, O>, outerRender?: OuterRender<HTMLIFrameElement, O>): RxNode<HTMLIFrameElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.iframe, true) }
export function Img<O = void>(name: string, render?: Render<HTMLImageElement, O>, outerRender?: OuterRender<HTMLImageElement, O>): RxNode<HTMLImageElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.img, true) }
export function Input<O = void>(name: string, render?: Render<HTMLInputElement, O>, outerRender?: OuterRender<HTMLInputElement, O>): RxNode<HTMLInputElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.input, true) }
export function Ins<O = void>(name: string, render?: Render<HTMLModElement, O>, outerRender?: OuterRender<HTMLModElement, O>): RxNode<HTMLModElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.ins, true) }
export function Kbd<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.kbd, true) }
export function KeyGen<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.keygen, true) }
export function Label<O = void>(name: string, render?: Render<HTMLLabelElement, O>, outerRender?: OuterRender<HTMLLabelElement, O>): RxNode<HTMLLabelElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.label, true) }
export function Legend<O = void>(name: string, render?: Render<HTMLLegendElement, O>, outerRender?: OuterRender<HTMLLegendElement, O>): RxNode<HTMLLegendElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.legend, true) }
export function LI<O = void>(name: string, render?: Render<HTMLLIElement, O>, outerRender?: OuterRender<HTMLLIElement, O>): RxNode<HTMLLIElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.li, true) }
export function Link<O = void>(name: string, render?: Render<HTMLLinkElement, O>, outerRender?: OuterRender<HTMLLinkElement, O>): RxNode<HTMLLinkElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.link, true) }
export function Main<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.main, true) }
export function Map<O = void>(name: string, render?: Render<HTMLMapElement, O>, outerRender?: OuterRender<HTMLMapElement, O>): RxNode<HTMLMapElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.map, true) }
export function Mark<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.mark, true) }
export function Menu<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.menu, true) }
export function MenuItem<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.menuitem, true) }
export function Meta<O = void>(name: string, render?: Render<HTMLMetaElement, O>, outerRender?: OuterRender<HTMLMetaElement, O>): RxNode<HTMLMetaElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.meta, true) }
export function Meter<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.meter, true) }
export function Nav<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.nav, true) }
export function NoIndex<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.noindex, true) }
export function NoScript<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.noscript, true) }
export function Obj<O = void>(name: string, render?: Render<HTMLObjectElement, O>, outerRender?: OuterRender<HTMLObjectElement, O>): RxNode<HTMLObjectElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.object, true) }
export function OL<O = void>(name: string, render?: Render<HTMLOListElement, O>, outerRender?: OuterRender<HTMLOListElement, O>): RxNode<HTMLOListElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.ol, true) }
export function OptGroup<O = void>(name: string, render?: Render<HTMLOptGroupElement, O>, outerRender?: OuterRender<HTMLOptGroupElement, O>): RxNode<HTMLOptGroupElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.optgroup, true) }
export function Option<O = void>(name: string, render?: Render<HTMLOptionElement, O>, outerRender?: OuterRender<HTMLOptionElement, O>): RxNode<HTMLOptionElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.option, true) }
export function Output<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.output, true) }
export function P<O = void>(name: string, render?: Render<HTMLParagraphElement, O>, outerRender?: OuterRender<HTMLParagraphElement, O>): RxNode<HTMLParagraphElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.p, true) }
export function Param<O = void>(name: string, render?: Render<HTMLParamElement, O>, outerRender?: OuterRender<HTMLParamElement, O>): RxNode<HTMLParamElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.param, true) }
export function Picture<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.picture, true) }
export function Pre<O = void>(name: string, render?: Render<HTMLPreElement, O>, outerRender?: OuterRender<HTMLPreElement, O>): RxNode<HTMLPreElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.pre, true) }
export function Progress<O = void>(name: string, render?: Render<HTMLProgressElement, O>, outerRender?: OuterRender<HTMLProgressElement, O>): RxNode<HTMLProgressElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.progress, true) }
export function Q<O = void>(name: string, render?: Render<HTMLQuoteElement, O>, outerRender?: OuterRender<HTMLQuoteElement, O>): RxNode<HTMLQuoteElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.q, true) }
export function RP<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.rp, true) }
export function RT<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.rt, true) }
export function Ruby<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.ruby, true) }
export function S<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.s, true) }
export function Samp<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.samp, true) }
export function Script<O = void>(name: string, render?: Render<HTMLScriptElement, O>, outerRender?: OuterRender<HTMLScriptElement, O>): RxNode<HTMLScriptElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.script, true) }
export function Section<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.section, true) }
export function Select<O = void>(name: string, render?: Render<HTMLSelectElement, O>, outerRender?: OuterRender<HTMLSelectElement, O>): RxNode<HTMLSelectElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.select, true) }
export function Small<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.small, true) }
export function Source<O = void>(name: string, render?: Render<HTMLSourceElement, O>, outerRender?: OuterRender<HTMLSourceElement, O>): RxNode<HTMLSourceElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.source, true) }
export function Span<O = void>(name: string, render?: Render<HTMLSpanElement, O>, outerRender?: OuterRender<HTMLSpanElement, O>): RxNode<HTMLSpanElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.span, true) }
export function Strong<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.strong, true) }
export function Style<O = void>(name: string, render?: Render<HTMLStyleElement, O>, outerRender?: OuterRender<HTMLStyleElement, O>): RxNode<HTMLStyleElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.style, true) }
export function Sub<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.sub, true) }
export function Summary<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.summary, true) }
export function Sup<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.sup, true) }
export function Table<O = void>(name: string, render?: Render<HTMLTableElement, O>, outerRender?: OuterRender<HTMLTableElement, O>): RxNode<HTMLTableElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.table, true) }
export function Template<O = void>(name: string, render?: Render<HTMLTemplateElement, O>, outerRender?: OuterRender<HTMLTemplateElement, O>): RxNode<HTMLTemplateElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.template, true) }
export function TBody<O = void>(name: string, render?: Render<HTMLTableSectionElement, O>, outerRender?: OuterRender<HTMLTableSectionElement, O>): RxNode<HTMLTableSectionElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.tbody, true) }
export function TD<O = void>(name: string, render?: Render<HTMLTableCellElement, O>, outerRender?: OuterRender<HTMLTableCellElement, O>): RxNode<HTMLTableCellElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.td, true) }
export function TextArea<O = void>(name: string, render?: Render<HTMLTextAreaElement, O>, outerRender?: OuterRender<HTMLTextAreaElement, O>): RxNode<HTMLTextAreaElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.textarea, true) }
export function TFoot<O = void>(name: string, render?: Render<HTMLTableSectionElement, O>, outerRender?: OuterRender<HTMLTableSectionElement, O>): RxNode<HTMLTableSectionElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.tfoot, true) }
export function TH<O = void>(name: string, render?: Render<HTMLTableCellElement, O>, outerRender?: OuterRender<HTMLTableCellElement, O>): RxNode<HTMLTableCellElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.th, true) }
export function THead<O = void>(name: string, render?: Render<HTMLTableSectionElement, O>, outerRender?: OuterRender<HTMLTableSectionElement, O>): RxNode<HTMLTableSectionElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.thead, true) }
export function Time<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.time, true) }
export function Title<O = void>(name: string, render?: Render<HTMLTitleElement, O>, outerRender?: OuterRender<HTMLTitleElement, O>): RxNode<HTMLTitleElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.title, true) }
export function TR<O = void>(name: string, render?: Render<HTMLTableRowElement, O>, outerRender?: OuterRender<HTMLTableRowElement, O>): RxNode<HTMLTableRowElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.tr, true) }
export function Track<O = void>(name: string, render?: Render<HTMLTrackElement, O>, outerRender?: OuterRender<HTMLTrackElement, O>): RxNode<HTMLTrackElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.track, true) }
export function U<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.u, true) }
export function UL<O = void>(name: string, render?: Render<HTMLUListElement, O>, outerRender?: OuterRender<HTMLUListElement, O>): RxNode<HTMLUListElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.ul, true) }
export function Var<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.var, true) }
export function Video<O = void>(name: string, render?: Render<HTMLVideoElement, O>, outerRender?: OuterRender<HTMLVideoElement, O>): RxNode<HTMLVideoElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.video, true) }
export function Wbr<O = void>(name: string, render?: Render<HTMLElement, O>, outerRender?: OuterRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, outerRender, HtmlTags.wbr, true) }

export function RxSvg<O = void>(name: string, triggers: unknown, render?: Render<SVGSVGElement, O>, outerRender?: OuterRender<SVGSVGElement, O>): RxNode<SVGSVGElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.svg) }
export function RxSvgA<O = void>(name: string, triggers: unknown, render?: Render<SVGAElement, O>, outerRender?: OuterRender<SVGAElement, O>): RxNode<SVGAElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.a) }
export function RxAnimate<O = void>(name: string, triggers: unknown, render?: Render<SVGAnimateElement, O>, outerRender?: OuterRender<SVGAnimateElement, O>): RxNode<SVGAnimateElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.animate) }
export function RxAnimateMotion<O = void>(name: string, triggers: unknown, render?: Render<SVGAnimateMotionElement, O>, outerRender?: OuterRender<SVGAnimateMotionElement, O>): RxNode<SVGAnimateMotionElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.animateMotion) }
export function RxAnimateTransform<O = void>(name: string, triggers: unknown, render?: Render<SVGAnimateTransformElement, O>, outerRender?: OuterRender<SVGAnimateTransformElement, O>): RxNode<SVGAnimateTransformElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.animateTransform) }
export function RxCircle<O = void>(name: string, triggers: unknown, render?: Render<SVGCircleElement, O>, outerRender?: OuterRender<SVGCircleElement, O>): RxNode<SVGCircleElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.circle) }
export function RxClipPath<O = void>(name: string, triggers: unknown, render?: Render<SVGClipPathElement, O>, outerRender?: OuterRender<SVGClipPathElement, O>): RxNode<SVGClipPathElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.clipPath) }
export function RxDefs<O = void>(name: string, triggers: unknown, render?: Render<SVGDefsElement, O>, outerRender?: OuterRender<SVGDefsElement, O>): RxNode<SVGDefsElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.defs) }
export function RxDesc<O = void>(name: string, triggers: unknown, render?: Render<SVGDescElement, O>, outerRender?: OuterRender<SVGDescElement, O>): RxNode<SVGDescElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.desc) }
export function RxEllipse<O = void>(name: string, triggers: unknown, render?: Render<SVGEllipseElement, O>, outerRender?: OuterRender<SVGEllipseElement, O>): RxNode<SVGEllipseElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.ellipse) }
export function RxFeBlend<O = void>(name: string, triggers: unknown, render?: Render<SVGFEBlendElement, O>, outerRender?: OuterRender<SVGFEBlendElement, O>): RxNode<SVGFEBlendElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.feBlend) }
export function RxFeColorMatrix<O = void>(name: string, triggers: unknown, render?: Render<SVGFEColorMatrixElement, O>, outerRender?: OuterRender<SVGFEColorMatrixElement, O>): RxNode<SVGFEColorMatrixElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.feColorMatrix) }
export function RxFeComponentTransfer<O = void>(name: string, triggers: unknown, render?: Render<SVGFEComponentTransferElement, O>, outerRender?: OuterRender<SVGFEComponentTransferElement, O>): RxNode<SVGFEComponentTransferElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.feComponentTransfer) }
export function RxFeComposite<O = void>(name: string, triggers: unknown, render?: Render<SVGFECompositeElement, O>, outerRender?: OuterRender<SVGFECompositeElement, O>): RxNode<SVGFECompositeElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.feComposite) }
export function RxFeConvolveMatrix<O = void>(name: string, triggers: unknown, render?: Render<SVGFEConvolveMatrixElement, O>, outerRender?: OuterRender<SVGFEConvolveMatrixElement, O>): RxNode<SVGFEConvolveMatrixElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.feConvolveMatrix) }
export function RxFeDiffuseLighting<O = void>(name: string, triggers: unknown, render?: Render<SVGFEDiffuseLightingElement, O>, outerRender?: OuterRender<SVGFEDiffuseLightingElement, O>): RxNode<SVGFEDiffuseLightingElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.feDiffuseLighting) }
export function RxFeDisplacementMap<O = void>(name: string, triggers: unknown, render?: Render<SVGFEDisplacementMapElement, O>, outerRender?: OuterRender<SVGFEDisplacementMapElement, O>): RxNode<SVGFEDisplacementMapElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.feDisplacementMap) }
export function RxFeDistantLight<O = void>(name: string, triggers: unknown, render?: Render<SVGFEDistantLightElement, O>, outerRender?: OuterRender<SVGFEDistantLightElement, O>): RxNode<SVGFEDistantLightElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.feDistantLight) }
export function RxFeDropShadow<O = void>(name: string, triggers: unknown, render?: Render<SVGFEDropShadowElement, O>, outerRender?: OuterRender<SVGFEDropShadowElement, O>): RxNode<SVGFEDropShadowElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.feDropShadow) }
export function RxFeFlood<O = void>(name: string, triggers: unknown, render?: Render<SVGFEFloodElement, O>, outerRender?: OuterRender<SVGFEFloodElement, O>): RxNode<SVGFEFloodElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.feFlood) }
export function RxFeFuncA<O = void>(name: string, triggers: unknown, render?: Render<SVGFEFuncAElement, O>, outerRender?: OuterRender<SVGFEFuncAElement, O>): RxNode<SVGFEFuncAElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.feFuncA) }
export function RxFeFuncB<O = void>(name: string, triggers: unknown, render?: Render<SVGFEFuncBElement, O>, outerRender?: OuterRender<SVGFEFuncBElement, O>): RxNode<SVGFEFuncBElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.feFuncB) }
export function RxFeFuncG<O = void>(name: string, triggers: unknown, render?: Render<SVGFEFuncGElement, O>, outerRender?: OuterRender<SVGFEFuncGElement, O>): RxNode<SVGFEFuncGElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.feFuncG) }
export function RxFeFuncR<O = void>(name: string, triggers: unknown, render?: Render<SVGFEFuncRElement, O>, outerRender?: OuterRender<SVGFEFuncRElement, O>): RxNode<SVGFEFuncRElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.feFuncR) }
export function RxFeGaussianBlur<O = void>(name: string, triggers: unknown, render?: Render<SVGFEGaussianBlurElement, O>, outerRender?: OuterRender<SVGFEGaussianBlurElement, O>): RxNode<SVGFEGaussianBlurElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.feGaussianBlur) }
export function RxFeImage<O = void>(name: string, triggers: unknown, render?: Render<SVGFEImageElement, O>, outerRender?: OuterRender<SVGFEImageElement, O>): RxNode<SVGFEImageElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.feImage) }
export function RxFeMerge<O = void>(name: string, triggers: unknown, render?: Render<SVGFEMergeElement, O>, outerRender?: OuterRender<SVGFEMergeElement, O>): RxNode<SVGFEMergeElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.feMerge) }
export function RxFeMergeNode<O = void>(name: string, triggers: unknown, render?: Render<SVGFEMergeNodeElement, O>, outerRender?: OuterRender<SVGFEMergeNodeElement, O>): RxNode<SVGFEMergeNodeElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.feMergeNode) }
export function RxFeMorphology<O = void>(name: string, triggers: unknown, render?: Render<SVGFEMorphologyElement, O>, outerRender?: OuterRender<SVGFEMorphologyElement, O>): RxNode<SVGFEMorphologyElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.feMorphology) }
export function RxFeOffset<O = void>(name: string, triggers: unknown, render?: Render<SVGFEOffsetElement, O>, outerRender?: OuterRender<SVGFEOffsetElement, O>): RxNode<SVGFEOffsetElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.feOffset) }
export function RxFePointLight<O = void>(name: string, triggers: unknown, render?: Render<SVGFEPointLightElement, O>, outerRender?: OuterRender<SVGFEPointLightElement, O>): RxNode<SVGFEPointLightElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.fePointLight) }
export function RxFeSpecularLighting<O = void>(name: string, triggers: unknown, render?: Render<SVGFESpecularLightingElement, O>, outerRender?: OuterRender<SVGFESpecularLightingElement, O>): RxNode<SVGFESpecularLightingElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.feSpecularLighting) }
export function RxFeSpotLight<O = void>(name: string, triggers: unknown, render?: Render<SVGFESpotLightElement, O>, outerRender?: OuterRender<SVGFESpotLightElement, O>): RxNode<SVGFESpotLightElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.feSpotLight) }
export function RxFeTile<O = void>(name: string, triggers: unknown, render?: Render<SVGFETileElement, O>, outerRender?: OuterRender<SVGFETileElement, O>): RxNode<SVGFETileElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.feTile) }
export function RxFeTurbulence<O = void>(name: string, triggers: unknown, render?: Render<SVGFETurbulenceElement, O>, outerRender?: OuterRender<SVGFETurbulenceElement, O>): RxNode<SVGFETurbulenceElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.feTurbulence) }
export function RxFilter<O = void>(name: string, triggers: unknown, render?: Render<SVGFilterElement, O>, outerRender?: OuterRender<SVGFilterElement, O>): RxNode<SVGFilterElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.filter) }
export function RxForeignObject<O = void>(name: string, triggers: unknown, render?: Render<SVGForeignObjectElement, O>, outerRender?: OuterRender<SVGForeignObjectElement, O>): RxNode<SVGForeignObjectElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.foreignObject) }
export function RxG<O = void>(name: string, triggers: unknown, render?: Render<SVGGElement, O>, outerRender?: OuterRender<SVGGElement, O>): RxNode<SVGGElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.g) }
export function RxSvgImage<O = void>(name: string, triggers: unknown, render?: Render<SVGImageElement, O>, outerRender?: OuterRender<SVGImageElement, O>): RxNode<SVGImageElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.image) }
export function RxLine<O = void>(name: string, triggers: unknown, render?: Render<SVGLineElement, O>, outerRender?: OuterRender<SVGLineElement, O>): RxNode<SVGLineElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.line) }
export function RxLinearGradient<O = void>(name: string, triggers: unknown, render?: Render<SVGLinearGradientElement, O>, outerRender?: OuterRender<SVGLinearGradientElement, O>): RxNode<SVGLinearGradientElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.linearGradient) }
export function RxMarker<O = void>(name: string, triggers: unknown, render?: Render<SVGMarkerElement, O>, outerRender?: OuterRender<SVGMarkerElement, O>): RxNode<SVGMarkerElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.marker) }
export function RxMask<O = void>(name: string, triggers: unknown, render?: Render<SVGMaskElement, O>, outerRender?: OuterRender<SVGMaskElement, O>): RxNode<SVGMaskElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.mask) }
export function RxMetadata<O = void>(name: string, triggers: unknown, render?: Render<SVGMetadataElement, O>, outerRender?: OuterRender<SVGMetadataElement, O>): RxNode<SVGMetadataElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.metadata) }
export function RxMPath<O = void>(name: string, triggers: unknown, render?: Render<SVGElement, O>, outerRender?: OuterRender<SVGElement, O>): RxNode<SVGElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.mpath) }
export function RxPath<O = void>(name: string, triggers: unknown, render?: Render<SVGPathElement, O>, outerRender?: OuterRender<SVGPathElement, O>): RxNode<SVGPathElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.path) }
export function RxPattern<O = void>(name: string, triggers: unknown, render?: Render<SVGPatternElement, O>, outerRender?: OuterRender<SVGPatternElement, O>): RxNode<SVGPatternElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.pattern) }
export function RxPolygon<O = void>(name: string, triggers: unknown, render?: Render<SVGPolygonElement, O>, outerRender?: OuterRender<SVGPolygonElement, O>): RxNode<SVGPolygonElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.polygon) }
export function RxPolyline<O = void>(name: string, triggers: unknown, render?: Render<SVGPolylineElement, O>, outerRender?: OuterRender<SVGPolylineElement, O>): RxNode<SVGPolylineElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.polyline) }
export function RxRadialGradient<O = void>(name: string, triggers: unknown, render?: Render<SVGRadialGradientElement, O>, outerRender?: OuterRender<SVGRadialGradientElement, O>): RxNode<SVGRadialGradientElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.radialGradient) }
export function RxRect<O = void>(name: string, triggers: unknown, render?: Render<SVGRectElement, O>, outerRender?: OuterRender<SVGRectElement, O>): RxNode<SVGRectElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.rect) }
export function RxStop<O = void>(name: string, triggers: unknown, render?: Render<SVGStopElement, O>, outerRender?: OuterRender<SVGStopElement, O>): RxNode<SVGStopElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.stop) }
export function RxSvgSwitch<O = void>(name: string, triggers: unknown, render?: Render<SVGSwitchElement, O>, outerRender?: OuterRender<SVGSwitchElement, O>): RxNode<SVGSwitchElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.switch) }
export function RxSymbol<O = void>(name: string, triggers: unknown, render?: Render<SVGSymbolElement, O>, outerRender?: OuterRender<SVGSymbolElement, O>): RxNode<SVGSymbolElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.symbol) }
export function RxText<O = void>(name: string, triggers: unknown, render?: Render<SVGTextElement, O>, outerRender?: OuterRender<SVGTextElement, O>): RxNode<SVGTextElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.text) }
export function RxTextPath<O = void>(name: string, triggers: unknown, render?: Render<SVGTextPathElement, O>, outerRender?: OuterRender<SVGTextPathElement, O>): RxNode<SVGTextPathElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.textPath) }
export function RxTSpan<O = void>(name: string, triggers: unknown, render?: Render<SVGTSpanElement, O>, outerRender?: OuterRender<SVGTSpanElement, O>): RxNode<SVGTSpanElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.tspan) }
export function RxUse<O = void>(name: string, triggers: unknown, render?: Render<SVGUseElement, O>, outerRender?: OuterRender<SVGUseElement, O>): RxNode<SVGUseElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.use) }
export function RxView<O = void>(name: string, triggers: unknown, render?: Render<SVGViewElement, O>, outerRender?: OuterRender<SVGViewElement, O>): RxNode<SVGViewElement, O> { return RxDom.Node(name, triggers, render, outerRender, SvgTags.view) }

export function Svg<O = void>(name: string, render?: Render<SVGSVGElement, O>, outerRender?: OuterRender<SVGSVGElement, O>): RxNode<SVGSVGElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.svg) }
export function SvgA<O = void>(name: string, render?: Render<SVGAElement, O>, outerRender?: OuterRender<SVGAElement, O>): RxNode<SVGAElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.a) }
export function Animate<O = void>(name: string, render?: Render<SVGAnimateElement, O>, outerRender?: OuterRender<SVGAnimateElement, O>): RxNode<SVGAnimateElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.animate) }
export function AnimateMotion<O = void>(name: string, render?: Render<SVGAnimateMotionElement, O>, outerRender?: OuterRender<SVGAnimateMotionElement, O>): RxNode<SVGAnimateMotionElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.animateMotion) }
export function AnimateTransform<O = void>(name: string, render?: Render<SVGAnimateTransformElement, O>, outerRender?: OuterRender<SVGAnimateTransformElement, O>): RxNode<SVGAnimateTransformElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.animateTransform) }
export function Circle<O = void>(name: string, render?: Render<SVGCircleElement, O>, outerRender?: OuterRender<SVGCircleElement, O>): RxNode<SVGCircleElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.circle) }
export function ClipPath<O = void>(name: string, render?: Render<SVGClipPathElement, O>, outerRender?: OuterRender<SVGClipPathElement, O>): RxNode<SVGClipPathElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.clipPath) }
export function Defs<O = void>(name: string, render?: Render<SVGDefsElement, O>, outerRender?: OuterRender<SVGDefsElement, O>): RxNode<SVGDefsElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.defs) }
export function Desc<O = void>(name: string, render?: Render<SVGDescElement, O>, outerRender?: OuterRender<SVGDescElement, O>): RxNode<SVGDescElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.desc) }
export function Ellipse<O = void>(name: string, render?: Render<SVGEllipseElement, O>, outerRender?: OuterRender<SVGEllipseElement, O>): RxNode<SVGEllipseElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.ellipse) }
export function FeBlend<O = void>(name: string, render?: Render<SVGFEBlendElement, O>, outerRender?: OuterRender<SVGFEBlendElement, O>): RxNode<SVGFEBlendElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.feBlend) }
export function FeColorMatrix<O = void>(name: string, render?: Render<SVGFEColorMatrixElement, O>, outerRender?: OuterRender<SVGFEColorMatrixElement, O>): RxNode<SVGFEColorMatrixElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.feColorMatrix) }
export function FeComponentTransfer<O = void>(name: string, render?: Render<SVGFEComponentTransferElement, O>, outerRender?: OuterRender<SVGFEComponentTransferElement, O>): RxNode<SVGFEComponentTransferElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.feComponentTransfer) }
export function FeComposite<O = void>(name: string, render?: Render<SVGFECompositeElement, O>, outerRender?: OuterRender<SVGFECompositeElement, O>): RxNode<SVGFECompositeElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.feComposite) }
export function FeConvolveMatrix<O = void>(name: string, render?: Render<SVGFEConvolveMatrixElement, O>, outerRender?: OuterRender<SVGFEConvolveMatrixElement, O>): RxNode<SVGFEConvolveMatrixElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.feConvolveMatrix) }
export function FeDiffuseLighting<O = void>(name: string, render?: Render<SVGFEDiffuseLightingElement, O>, outerRender?: OuterRender<SVGFEDiffuseLightingElement, O>): RxNode<SVGFEDiffuseLightingElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.feDiffuseLighting) }
export function FeDisplacementMap<O = void>(name: string, render?: Render<SVGFEDisplacementMapElement, O>, outerRender?: OuterRender<SVGFEDisplacementMapElement, O>): RxNode<SVGFEDisplacementMapElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.feDisplacementMap) }
export function FeDistantLight<O = void>(name: string, render?: Render<SVGFEDistantLightElement, O>, outerRender?: OuterRender<SVGFEDistantLightElement, O>): RxNode<SVGFEDistantLightElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.feDistantLight) }
export function FeDropShadow<O = void>(name: string, render?: Render<SVGFEDropShadowElement, O>, outerRender?: OuterRender<SVGFEDropShadowElement, O>): RxNode<SVGFEDropShadowElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.feDropShadow) }
export function FeFlood<O = void>(name: string, render?: Render<SVGFEFloodElement, O>, outerRender?: OuterRender<SVGFEFloodElement, O>): RxNode<SVGFEFloodElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.feFlood) }
export function FeFuncA<O = void>(name: string, render?: Render<SVGFEFuncAElement, O>, outerRender?: OuterRender<SVGFEFuncAElement, O>): RxNode<SVGFEFuncAElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.feFuncA) }
export function FeFuncB<O = void>(name: string, render?: Render<SVGFEFuncBElement, O>, outerRender?: OuterRender<SVGFEFuncBElement, O>): RxNode<SVGFEFuncBElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.feFuncB) }
export function FeFuncG<O = void>(name: string, render?: Render<SVGFEFuncGElement, O>, outerRender?: OuterRender<SVGFEFuncGElement, O>): RxNode<SVGFEFuncGElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.feFuncG) }
export function FeFuncR<O = void>(name: string, render?: Render<SVGFEFuncRElement, O>, outerRender?: OuterRender<SVGFEFuncRElement, O>): RxNode<SVGFEFuncRElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.feFuncR) }
export function FeGaussianBlur<O = void>(name: string, render?: Render<SVGFEGaussianBlurElement, O>, outerRender?: OuterRender<SVGFEGaussianBlurElement, O>): RxNode<SVGFEGaussianBlurElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.feGaussianBlur) }
export function FeImage<O = void>(name: string, render?: Render<SVGFEImageElement, O>, outerRender?: OuterRender<SVGFEImageElement, O>): RxNode<SVGFEImageElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.feImage) }
export function FeMerge<O = void>(name: string, render?: Render<SVGFEMergeElement, O>, outerRender?: OuterRender<SVGFEMergeElement, O>): RxNode<SVGFEMergeElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.feMerge) }
export function FeMergeNode<O = void>(name: string, render?: Render<SVGFEMergeNodeElement, O>, outerRender?: OuterRender<SVGFEMergeNodeElement, O>): RxNode<SVGFEMergeNodeElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.feMergeNode) }
export function FeMorphology<O = void>(name: string, render?: Render<SVGFEMorphologyElement, O>, outerRender?: OuterRender<SVGFEMorphologyElement, O>): RxNode<SVGFEMorphologyElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.feMorphology) }
export function FeOffset<O = void>(name: string, render?: Render<SVGFEOffsetElement, O>, outerRender?: OuterRender<SVGFEOffsetElement, O>): RxNode<SVGFEOffsetElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.feOffset) }
export function FePointLight<O = void>(name: string, render?: Render<SVGFEPointLightElement, O>, outerRender?: OuterRender<SVGFEPointLightElement, O>): RxNode<SVGFEPointLightElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.fePointLight) }
export function FeSpecularLighting<O = void>(name: string, render?: Render<SVGFESpecularLightingElement, O>, outerRender?: OuterRender<SVGFESpecularLightingElement, O>): RxNode<SVGFESpecularLightingElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.feSpecularLighting) }
export function FeSpotLight<O = void>(name: string, render?: Render<SVGFESpotLightElement, O>, outerRender?: OuterRender<SVGFESpotLightElement, O>): RxNode<SVGFESpotLightElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.feSpotLight) }
export function FeTile<O = void>(name: string, render?: Render<SVGFETileElement, O>, outerRender?: OuterRender<SVGFETileElement, O>): RxNode<SVGFETileElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.feTile) }
export function FeTurbulence<O = void>(name: string, render?: Render<SVGFETurbulenceElement, O>, outerRender?: OuterRender<SVGFETurbulenceElement, O>): RxNode<SVGFETurbulenceElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.feTurbulence) }
export function Filter<O = void>(name: string, render?: Render<SVGFilterElement, O>, outerRender?: OuterRender<SVGFilterElement, O>): RxNode<SVGFilterElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.filter) }
export function ForeignObject<O = void>(name: string, render?: Render<SVGForeignObjectElement, O>, outerRender?: OuterRender<SVGForeignObjectElement, O>): RxNode<SVGForeignObjectElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.foreignObject) }
export function G<O = void>(name: string, render?: Render<SVGGElement, O>, outerRender?: OuterRender<SVGGElement, O>): RxNode<SVGGElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.g) }
export function SvgImage<O = void>(name: string, render?: Render<SVGImageElement, O>, outerRender?: OuterRender<SVGImageElement, O>): RxNode<SVGImageElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.image) }
export function Line<O = void>(name: string, render?: Render<SVGLineElement, O>, outerRender?: OuterRender<SVGLineElement, O>): RxNode<SVGLineElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.line) }
export function LinearGradient<O = void>(name: string, render?: Render<SVGLinearGradientElement, O>, outerRender?: OuterRender<SVGLinearGradientElement, O>): RxNode<SVGLinearGradientElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.linearGradient) }
export function Marker<O = void>(name: string, render?: Render<SVGMarkerElement, O>, outerRender?: OuterRender<SVGMarkerElement, O>): RxNode<SVGMarkerElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.marker) }
export function Mask<O = void>(name: string, render?: Render<SVGMaskElement, O>, outerRender?: OuterRender<SVGMaskElement, O>): RxNode<SVGMaskElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.mask) }
export function MetaData<O = void>(name: string, render?: Render<SVGMetadataElement, O>, outerRender?: OuterRender<SVGMetadataElement, O>): RxNode<SVGMetadataElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.metadata) }
export function MPath<O = void>(name: string, render?: Render<SVGElement, O>, outerRender?: OuterRender<SVGElement, O>): RxNode<SVGElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.mpath) }
export function Path<O = void>(name: string, render?: Render<SVGPathElement, O>, outerRender?: OuterRender<SVGPathElement, O>): RxNode<SVGPathElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.path) }
export function Pattern<O = void>(name: string, render?: Render<SVGPatternElement, O>, outerRender?: OuterRender<SVGPatternElement, O>): RxNode<SVGPatternElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.pattern) }
export function Polygon<O = void>(name: string, render?: Render<SVGPolygonElement, O>, outerRender?: OuterRender<SVGPolygonElement, O>): RxNode<SVGPolygonElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.polygon) }
export function PolyLine<O = void>(name: string, render?: Render<SVGPolylineElement, O>, outerRender?: OuterRender<SVGPolylineElement, O>): RxNode<SVGPolylineElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.polyline) }
export function RadialGradient<O = void>(name: string, render?: Render<SVGRadialGradientElement, O>, outerRender?: OuterRender<SVGRadialGradientElement, O>): RxNode<SVGRadialGradientElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.radialGradient) }
export function Rect<O = void>(name: string, render?: Render<SVGRectElement, O>, outerRender?: OuterRender<SVGRectElement, O>): RxNode<SVGRectElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.rect) }
export function Stop<O = void>(name: string, render?: Render<SVGStopElement, O>, outerRender?: OuterRender<SVGStopElement, O>): RxNode<SVGStopElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.stop) }
export function SvgSwitch<O = void>(name: string, render?: Render<SVGSwitchElement, O>, outerRender?: OuterRender<SVGSwitchElement, O>): RxNode<SVGSwitchElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.switch) }
export function Symbol<O = void>(name: string, render?: Render<SVGSymbolElement, O>, outerRender?: OuterRender<SVGSymbolElement, O>): RxNode<SVGSymbolElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.symbol) }
export function Text<O = void>(name: string, render?: Render<SVGTextElement, O>, outerRender?: OuterRender<SVGTextElement, O>): RxNode<SVGTextElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.text) }
export function TextPath<O = void>(name: string, render?: Render<SVGTextPathElement, O>, outerRender?: OuterRender<SVGTextPathElement, O>): RxNode<SVGTextPathElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.textPath) }
export function TSpan<O = void>(name: string, render?: Render<SVGTSpanElement, O>, outerRender?: OuterRender<SVGTSpanElement, O>): RxNode<SVGTSpanElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.tspan) }
export function Use<O = void>(name: string, render?: Render<SVGUseElement, O>, outerRender?: OuterRender<SVGUseElement, O>): RxNode<SVGUseElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.use) }
export function View<O = void>(name: string, render?: Render<SVGViewElement, O>, outerRender?: OuterRender<SVGViewElement, O>): RxNode<SVGViewElement> { return RxDom.Node(name, undefined, render, outerRender, SvgTags.view) }

const HtmlTags = {
  a: new HtmlNodeFactory<HTMLAnchorElement>('a', true),
  abbr: new HtmlNodeFactory<HTMLElement>('abbr', true),
  address: new HtmlNodeFactory<HTMLElement>('address', true),
  area: new HtmlNodeFactory<HTMLAreaElement>('area', true),
  article: new HtmlNodeFactory<HTMLElement>('article', true),
  aside: new HtmlNodeFactory<HTMLElement>('aside', true),
  audio: new HtmlNodeFactory<HTMLAudioElement>('audio', true),
  b: new HtmlNodeFactory<HTMLElement>('b', true),
  base: new HtmlNodeFactory<HTMLBaseElement>('base', true),
  bdi: new HtmlNodeFactory<HTMLElement>('bdi', true),
  bdo: new HtmlNodeFactory<HTMLElement>('bdo', true),
  big: new HtmlNodeFactory<HTMLElement>('big', true),
  blockquote: new HtmlNodeFactory<HTMLElement>('blockquote', true),
  body: new HtmlNodeFactory<HTMLBodyElement>('body', true),
  br: new HtmlNodeFactory<HTMLBRElement>('br', true),
  button: new HtmlNodeFactory<HTMLButtonElement>('button', true),
  canvas: new HtmlNodeFactory<HTMLCanvasElement>('canvas', true),
  caption: new HtmlNodeFactory<HTMLTableCaptionElement>('caption', true),
  cite: new HtmlNodeFactory<HTMLElement>('cite', true),
  code: new HtmlNodeFactory<HTMLElement>('code', true),
  col: new HtmlNodeFactory<HTMLTableColElement>('col', true),
  colgroup: new HtmlNodeFactory<HTMLTableColElement>('colgroup', true),
  data: new HtmlNodeFactory<HTMLDataElement>('data', true),
  datalist: new HtmlNodeFactory<HTMLDataListElement>('datalist', true),
  dd: new HtmlNodeFactory<HTMLElement>('dd', true),
  del: new HtmlNodeFactory<HTMLElement>('del', true),
  details: new HtmlNodeFactory<HTMLElement>('details', true),
  dfn: new HtmlNodeFactory<HTMLElement>('dfn', true),
  div: new HtmlNodeFactory<HTMLDivElement>('div', true),
  dl: new HtmlNodeFactory<HTMLDListElement>('dl', true),
  dt: new HtmlNodeFactory<HTMLElement>('dt', true),
  em: new HtmlNodeFactory<HTMLElement>('em', true),
  embed: new HtmlNodeFactory<HTMLEmbedElement>('embed', true),
  fieldset: new HtmlNodeFactory<HTMLFieldSetElement>('fieldset', true),
  figcaption: new HtmlNodeFactory<HTMLElement>('figcaption', true),
  figure: new HtmlNodeFactory<HTMLElement>('figure', true),
  footer: new HtmlNodeFactory<HTMLElement>('footer', true),
  form: new HtmlNodeFactory<HTMLFormElement>('form', true),
  h1: new HtmlNodeFactory<HTMLHeadingElement>('h1', true),
  h2: new HtmlNodeFactory<HTMLHeadingElement>('h2', true),
  h3: new HtmlNodeFactory<HTMLHeadingElement>('h3', true),
  h4: new HtmlNodeFactory<HTMLHeadingElement>('h4', true),
  h5: new HtmlNodeFactory<HTMLHeadingElement>('h5', true),
  h6: new HtmlNodeFactory<HTMLHeadingElement>('h6', true),
  head: new HtmlNodeFactory<HTMLHeadElement>('head', true),
  header: new HtmlNodeFactory<HTMLElement>('header', true),
  hgroup: new HtmlNodeFactory<HTMLElement>('hgroup', true),
  hr: new HtmlNodeFactory<HTMLHRElement>('hr', true),
  html: new HtmlNodeFactory<HTMLHtmlElement>('html', true),
  i: new HtmlNodeFactory<HTMLElement>('i', true),
  iframe: new HtmlNodeFactory<HTMLIFrameElement>('iframe', true),
  img: new HtmlNodeFactory<HTMLImageElement>('img', true),
  input: new HtmlNodeFactory<HTMLInputElement>('input', true),
  ins: new HtmlNodeFactory<HTMLModElement>('ins', true),
  kbd: new HtmlNodeFactory<HTMLElement>('kbd', true),
  keygen: new HtmlNodeFactory<HTMLElement>('keygen', true),
  label: new HtmlNodeFactory<HTMLLabelElement>('label', true),
  legend: new HtmlNodeFactory<HTMLLegendElement>('legend', true),
  li: new HtmlNodeFactory<HTMLLIElement>('li', true),
  link: new HtmlNodeFactory<HTMLLinkElement>('link', true),
  main: new HtmlNodeFactory<HTMLElement>('main', true),
  map: new HtmlNodeFactory<HTMLMapElement>('map', true),
  mark: new HtmlNodeFactory<HTMLElement>('mark', true),
  menu: new HtmlNodeFactory<HTMLElement>('menu', true),
  menuitem: new HtmlNodeFactory<HTMLElement>('menuitem', true),
  meta: new HtmlNodeFactory<HTMLMetaElement>('meta', true),
  meter: new HtmlNodeFactory<HTMLElement>('meter', true),
  nav: new HtmlNodeFactory<HTMLElement>('nav', true),
  noindex: new HtmlNodeFactory<HTMLElement>('noindex', true),
  noscript: new HtmlNodeFactory<HTMLElement>('noscript', true),
  object: new HtmlNodeFactory<HTMLObjectElement>('object', true),
  ol: new HtmlNodeFactory<HTMLOListElement>('ol', true),
  optgroup: new HtmlNodeFactory<HTMLOptGroupElement>('optgroup', true),
  option: new HtmlNodeFactory<HTMLOptionElement>('option', true),
  output: new HtmlNodeFactory<HTMLElement>('output', true),
  p: new HtmlNodeFactory<HTMLParagraphElement>('p', true),
  param: new HtmlNodeFactory<HTMLParamElement>('param', true),
  picture: new HtmlNodeFactory<HTMLElement>('picture', true),
  pre: new HtmlNodeFactory<HTMLPreElement>('pre', true),
  progress: new HtmlNodeFactory<HTMLProgressElement>('progress', true),
  q: new HtmlNodeFactory<HTMLQuoteElement>('q', true),
  rp: new HtmlNodeFactory<HTMLElement>('rp', true),
  rt: new HtmlNodeFactory<HTMLElement>('rt', true),
  ruby: new HtmlNodeFactory<HTMLElement>('ruby', true),
  s: new HtmlNodeFactory<HTMLElement>('s', true),
  samp: new HtmlNodeFactory<HTMLElement>('samp', true),
  script: new HtmlNodeFactory<HTMLScriptElement>('script', true),
  section: new HtmlNodeFactory<HTMLElement>('section', true),
  select: new HtmlNodeFactory<HTMLSelectElement>('select', true),
  small: new HtmlNodeFactory<HTMLElement>('small', true),
  source: new HtmlNodeFactory<HTMLSourceElement>('source', true),
  span: new HtmlNodeFactory<HTMLSpanElement>('span', true),
  strong: new HtmlNodeFactory<HTMLElement>('strong', true),
  style: new HtmlNodeFactory<HTMLStyleElement>('style', true),
  sub: new HtmlNodeFactory<HTMLElement>('sub', true),
  summary: new HtmlNodeFactory<HTMLElement>('summary', true),
  sup: new HtmlNodeFactory<HTMLElement>('sup', true),
  table: new HtmlNodeFactory<HTMLTableElement>('table', true),
  template: new HtmlNodeFactory<HTMLTemplateElement>('template', true),
  tbody: new HtmlNodeFactory<HTMLTableSectionElement>('tbody', true),
  td: new HtmlNodeFactory<HTMLTableCellElement>('td', true),
  textarea: new HtmlNodeFactory<HTMLTextAreaElement>('textarea', true),
  tfoot: new HtmlNodeFactory<HTMLTableSectionElement>('tfoot', true),
  th: new HtmlNodeFactory<HTMLTableCellElement>('th', true),
  thead: new HtmlNodeFactory<HTMLTableSectionElement>('thead', true),
  time: new HtmlNodeFactory<HTMLElement>('time', true),
  title: new HtmlNodeFactory<HTMLTitleElement>('title', true),
  tr: new HtmlNodeFactory<HTMLTableRowElement>('tr', true),
  track: new HtmlNodeFactory<HTMLTrackElement>('track', true),
  u: new HtmlNodeFactory<HTMLElement>('u', true),
  ul: new HtmlNodeFactory<HTMLUListElement>('ul', true),
  var: new HtmlNodeFactory<HTMLElement>('var', true),
  video: new HtmlNodeFactory<HTMLVideoElement>('video', true),
  wbr: new HtmlNodeFactory<HTMLElement>('wbr', true),
  // webview: new HtmlNodeFactory<HTMLWebViewElement>('webview', true),
}

const SvgTags = {
  svg: new SvgNodeFactory<SVGSVGElement>('svg', true),
  a: new SvgNodeFactory<SVGAElement>('a', true),
  animate: new SvgNodeFactory<SVGAnimateElement>('animate', true),
  animateMotion: new SvgNodeFactory<SVGAnimateMotionElement>('animateMotion', true),
  animateTransform: new SvgNodeFactory<SVGAnimateTransformElement>('animateTransform', true),
  circle: new SvgNodeFactory<SVGCircleElement>('circle', true),
  clipPath: new SvgNodeFactory<SVGClipPathElement>('clipPath', true),
  defs: new SvgNodeFactory<SVGDefsElement>('defs', true),
  desc: new SvgNodeFactory<SVGDescElement>('desc', true),
  ellipse: new SvgNodeFactory<SVGEllipseElement>('ellipse', true),
  feBlend: new SvgNodeFactory<SVGFEBlendElement>('feBlend', true),
  feColorMatrix: new SvgNodeFactory<SVGFEColorMatrixElement>('feColorMatrix', true),
  feComponentTransfer: new SvgNodeFactory<SVGFEComponentTransferElement>('feComponentTransfer', true),
  feComposite: new SvgNodeFactory<SVGFECompositeElement>('feComposite', true),
  feConvolveMatrix: new SvgNodeFactory<SVGFEConvolveMatrixElement>('feConvolveMatrix', true),
  feDiffuseLighting: new SvgNodeFactory<SVGFEDiffuseLightingElement>('feDiffuseLighting', true),
  feDisplacementMap: new SvgNodeFactory<SVGFEDisplacementMapElement>('feDisplacementMap', true),
  feDistantLight: new SvgNodeFactory<SVGFEDistantLightElement>('feDistantLight', true),
  feDropShadow: new SvgNodeFactory<SVGFEDropShadowElement>('feDropShadow', true),
  feFlood: new SvgNodeFactory<SVGFEFloodElement>('feFlood', true),
  feFuncA: new SvgNodeFactory<SVGFEFuncAElement>('feFuncA', true),
  feFuncB: new SvgNodeFactory<SVGFEFuncBElement>('feFuncB', true),
  feFuncG: new SvgNodeFactory<SVGFEFuncGElement>('feFuncG', true),
  feFuncR: new SvgNodeFactory<SVGFEFuncRElement>('feFuncR', true),
  feGaussianBlur: new SvgNodeFactory<SVGFEGaussianBlurElement>('feGaussianBlur', true),
  feImage: new SvgNodeFactory<SVGFEImageElement>('feImage', true),
  feMerge: new SvgNodeFactory<SVGFEMergeElement>('feMerge', true),
  feMergeNode: new SvgNodeFactory<SVGFEMergeNodeElement>('feMergeNode', true),
  feMorphology: new SvgNodeFactory<SVGFEMorphologyElement>('feMorphology', true),
  feOffset: new SvgNodeFactory<SVGFEOffsetElement>('feOffset', true),
  fePointLight: new SvgNodeFactory<SVGFEPointLightElement>('fePointLight', true),
  feSpecularLighting: new SvgNodeFactory<SVGFESpecularLightingElement>('feSpecularLighting', true),
  feSpotLight: new SvgNodeFactory<SVGFESpotLightElement>('feSpotLight', true),
  feTile: new SvgNodeFactory<SVGFETileElement>('feTile', true),
  feTurbulence: new SvgNodeFactory<SVGFETurbulenceElement>('feTurbulence', true),
  filter: new SvgNodeFactory<SVGFilterElement>('filter', true),
  foreignObject: new SvgNodeFactory<SVGForeignObjectElement>('foreignObject', true),
  g: new SvgNodeFactory<SVGGElement>('g', true),
  image: new SvgNodeFactory<SVGImageElement>('image', true),
  line: new SvgNodeFactory<SVGLineElement>('line', true),
  linearGradient: new SvgNodeFactory<SVGLinearGradientElement>('linearGradient', true),
  marker: new SvgNodeFactory<SVGMarkerElement>('marker', true),
  mask: new SvgNodeFactory<SVGMaskElement>('mask', true),
  metadata: new SvgNodeFactory<SVGMetadataElement>('metadata', true),
  mpath: new SvgNodeFactory<SVGElement>('mpath', true),
  path: new SvgNodeFactory<SVGPathElement>('path', true),
  pattern: new SvgNodeFactory<SVGPatternElement>('pattern', true),
  polygon: new SvgNodeFactory<SVGPolygonElement>('polygon', true),
  polyline: new SvgNodeFactory<SVGPolylineElement>('polyline', true),
  radialGradient: new SvgNodeFactory<SVGRadialGradientElement>('radialGradient', true),
  rect: new SvgNodeFactory<SVGRectElement>('rect', true),
  stop: new SvgNodeFactory<SVGStopElement>('stop', true),
  switch: new SvgNodeFactory<SVGSwitchElement>('switch', true),
  symbol: new SvgNodeFactory<SVGSymbolElement>('symbol', true),
  text: new SvgNodeFactory<SVGTextElement>('text', true),
  textPath: new SvgNodeFactory<SVGTextPathElement>('textPath', true),
  tspan: new SvgNodeFactory<SVGTSpanElement>('tspan', true),
  use: new SvgNodeFactory<SVGUseElement>('use', true),
  view: new SvgNodeFactory<SVGViewElement>('view', true),
}
