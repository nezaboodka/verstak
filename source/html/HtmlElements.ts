// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { RxDom, Render, RxNode, SuperRender } from '../core/api'
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

export function RxA<O = void>(name: string, triggers: unknown, render?: Render<HTMLAnchorElement, O>, superRender?: SuperRender<HTMLAnchorElement, O>, inline?: boolean): RxNode<HTMLAnchorElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.a, inline) }
export function RxAbbr<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.abbr, inline) }
export function RxAddress<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.address, inline) }
export function RxArea<O = void>(name: string, triggers: unknown, render?: Render<HTMLAreaElement, O>, superRender?: SuperRender<HTMLAreaElement, O>, inline?: boolean): RxNode<HTMLAreaElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.area, inline) }
export function RxArticle<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.article, inline) }
export function RxAside<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.aside, inline) }
export function RxAudio<O = void>(name: string, triggers: unknown, render?: Render<HTMLAudioElement, O>, superRender?: SuperRender<HTMLAudioElement, O>, inline?: boolean): RxNode<HTMLAudioElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.audio, inline) }
export function RxB<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.b, inline) }
export function RxBase<O = void>(name: string, triggers: unknown, render?: Render<HTMLBaseElement, O>, superRender?: SuperRender<HTMLBaseElement, O>, inline?: boolean): RxNode<HTMLBaseElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.base, inline) }
export function RxBdi<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.bdi, inline) }
export function RxBdo<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.bdo, inline) }
export function RxBig<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.big, inline) }
export function RxBlockQuote<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.blockquote, inline) }
export function RxBody<O = void>(name: string, triggers: unknown, render?: Render<HTMLBodyElement, O>, superRender?: SuperRender<HTMLBodyElement, O>, inline?: boolean): RxNode<HTMLBodyElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.body, inline) }
export function RxBR<O = void>(name: string, triggers: unknown, render?: Render<HTMLBRElement, O>, superRender?: SuperRender<HTMLBRElement, O>, inline?: boolean): RxNode<HTMLBRElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.br, inline) }
export function RxButton<O = void>(name: string, triggers: unknown, render?: Render<HTMLButtonElement, O>, superRender?: SuperRender<HTMLButtonElement, O>, inline?: boolean): RxNode<HTMLButtonElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.button, inline) }
export function RxCanvas<O = void>(name: string, triggers: unknown, render?: Render<HTMLCanvasElement, O>, superRender?: SuperRender<HTMLCanvasElement, O>, inline?: boolean): RxNode<HTMLCanvasElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.canvas, inline) }
export function RxCaption<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableCaptionElement, O>, superRender?: SuperRender<HTMLTableCaptionElement, O>, inline?: boolean): RxNode<HTMLTableCaptionElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.caption, inline) }
export function RxCite<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.cite, inline) }
export function RxCode<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.code, inline) }
export function RxCol<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableColElement, O>, superRender?: SuperRender<HTMLTableColElement, O>, inline?: boolean): RxNode<HTMLTableColElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.col, inline) }
export function RxColGroup<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableColElement, O>, superRender?: SuperRender<HTMLTableColElement, O>, inline?: boolean): RxNode<HTMLTableColElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.colgroup, inline) }
export function RxData<O = void>(name: string, triggers: unknown, render?: Render<HTMLDataElement, O>, superRender?: SuperRender<HTMLDataElement, O>, inline?: boolean): RxNode<HTMLDataElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.data, inline) }
export function RxDataList<O = void>(name: string, triggers: unknown, render?: Render<HTMLDataListElement, O>, superRender?: SuperRender<HTMLDataListElement, O>, inline?: boolean): RxNode<HTMLDataListElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.datalist, inline) }
export function RxDD<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.dd, inline) }
export function RxDel<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.del, inline) }
export function RxDetails<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.details, inline) }
export function RxDfn<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.dfn, inline) }
export function RxDiv<O = void>(name: string, triggers: unknown, render?: Render<HTMLDivElement, O>, superRender?: SuperRender<HTMLDivElement, O>, inline?: boolean): RxNode<HTMLDivElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.div, inline) }
export function RxDL<O = void>(name: string, triggers: unknown, render?: Render<HTMLDListElement, O>, superRender?: SuperRender<HTMLDListElement, O>, inline?: boolean): RxNode<HTMLDListElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.dl, inline) }
export function RxDT<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.dt, inline) }
export function RxEM<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.em, inline) }
export function RxEmbed<O = void>(name: string, triggers: unknown, render?: Render<HTMLEmbedElement, O>, superRender?: SuperRender<HTMLEmbedElement, O>, inline?: boolean): RxNode<HTMLEmbedElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.embed, inline) }
export function RxFieldSet<O = void>(name: string, triggers: unknown, render?: Render<HTMLFieldSetElement, O>, superRender?: SuperRender<HTMLFieldSetElement, O>, inline?: boolean): RxNode<HTMLFieldSetElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.fieldset, inline) }
export function RxFigCaption<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.figcaption, inline) }
export function RxFigure<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.figure, inline) }
export function RxFooter<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.footer, inline) }
export function RxForm<O = void>(name: string, triggers: unknown, render?: Render<HTMLFormElement, O>, superRender?: SuperRender<HTMLFormElement, O>, inline?: boolean): RxNode<HTMLFormElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.form, inline) }
export function RxH1<O = void>(name: string, triggers: unknown, render?: Render<HTMLHeadingElement, O>, superRender?: SuperRender<HTMLHeadingElement, O>, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.h1, inline) }
export function RxH2<O = void>(name: string, triggers: unknown, render?: Render<HTMLHeadingElement, O>, superRender?: SuperRender<HTMLHeadingElement, O>, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.h2, inline) }
export function RxH3<O = void>(name: string, triggers: unknown, render?: Render<HTMLHeadingElement, O>, superRender?: SuperRender<HTMLHeadingElement, O>, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.h3, inline) }
export function RxH4<O = void>(name: string, triggers: unknown, render?: Render<HTMLHeadingElement, O>, superRender?: SuperRender<HTMLHeadingElement, O>, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.h4, inline) }
export function RxH5<O = void>(name: string, triggers: unknown, render?: Render<HTMLHeadingElement, O>, superRender?: SuperRender<HTMLHeadingElement, O>, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.h5, inline) }
export function RxH6<O = void>(name: string, triggers: unknown, render?: Render<HTMLHeadingElement, O>, superRender?: SuperRender<HTMLHeadingElement, O>, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.h6, inline) }
export function RxHead<O = void>(name: string, triggers: unknown, render?: Render<HTMLHeadElement, O>, superRender?: SuperRender<HTMLHeadElement, O>, inline?: boolean): RxNode<HTMLHeadElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.head, inline) }
export function RxHeader<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.header, inline) }
export function RxHGroup<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.hgroup, inline) }
export function RxHR<O = void>(name: string, triggers: unknown, render?: Render<HTMLHRElement, O>, superRender?: SuperRender<HTMLHRElement, O>, inline?: boolean): RxNode<HTMLHRElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.hr, inline) }
export function RxHtml<O = void>(name: string, triggers: unknown, render?: Render<HTMLHtmlElement, O>, superRender?: SuperRender<HTMLHtmlElement, O>, inline?: boolean): RxNode<HTMLHtmlElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.html, inline) }
export function RxI<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.i, inline) }
export function RxIFrame<O = void>(name: string, triggers: unknown, render?: Render<HTMLIFrameElement, O>, superRender?: SuperRender<HTMLIFrameElement, O>, inline?: boolean): RxNode<HTMLIFrameElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.iframe, inline) }
export function RxImg<O = void>(name: string, triggers: unknown, render?: Render<HTMLImageElement, O>, superRender?: SuperRender<HTMLImageElement, O>, inline?: boolean): RxNode<HTMLImageElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.img, inline) }
export function RxInput<O = void>(name: string, triggers: unknown, render?: Render<HTMLInputElement, O>, superRender?: SuperRender<HTMLInputElement, O>, inline?: boolean): RxNode<HTMLInputElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.input, inline) }
export function RxIns<O = void>(name: string, triggers: unknown, render?: Render<HTMLModElement, O>, superRender?: SuperRender<HTMLModElement, O>, inline?: boolean): RxNode<HTMLModElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.ins, inline) }
export function RxKbd<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.kbd, inline) }
export function RxKeygen<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.keygen, inline) }
export function RxLabel<O = void>(name: string, triggers: unknown, render?: Render<HTMLLabelElement, O>, superRender?: SuperRender<HTMLLabelElement, O>, inline?: boolean): RxNode<HTMLLabelElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.label, inline) }
export function RxLegend<O = void>(name: string, triggers: unknown, render?: Render<HTMLLegendElement, O>, superRender?: SuperRender<HTMLLegendElement, O>, inline?: boolean): RxNode<HTMLLegendElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.legend, inline) }
export function RxLI<O = void>(name: string, triggers: unknown, render?: Render<HTMLLIElement, O>, superRender?: SuperRender<HTMLLIElement, O>, inline?: boolean): RxNode<HTMLLIElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.li, inline) }
export function RxLink<O = void>(name: string, triggers: unknown, render?: Render<HTMLLinkElement, O>, superRender?: SuperRender<HTMLLinkElement, O>, inline?: boolean): RxNode<HTMLLinkElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.link, inline) }
export function RxMain<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.main, inline) }
export function RxMap<O = void>(name: string, triggers: unknown, render?: Render<HTMLMapElement, O>, superRender?: SuperRender<HTMLMapElement, O>, inline?: boolean): RxNode<HTMLMapElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.map, inline) }
export function RxMark<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.mark, inline) }
export function RxMenu<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.menu, inline) }
export function RxMenuItem<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.menuitem, inline) }
export function RxMeta<O = void>(name: string, triggers: unknown, render?: Render<HTMLMetaElement, O>, superRender?: SuperRender<HTMLMetaElement, O>, inline?: boolean): RxNode<HTMLMetaElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.meta, inline) }
export function RxMeter<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.meter, inline) }
export function RxNav<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.nav, inline) }
export function RxNoIndex<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.noindex, inline) }
export function RxNoScript<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.noscript, inline) }
export function RxObj<O = void>(name: string, triggers: unknown, render?: Render<HTMLObjectElement, O>, superRender?: SuperRender<HTMLObjectElement, O>, inline?: boolean): RxNode<HTMLObjectElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.object, inline) }
export function RxOL<O = void>(name: string, triggers: unknown, render?: Render<HTMLOListElement, O>, superRender?: SuperRender<HTMLOListElement, O>, inline?: boolean): RxNode<HTMLOListElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.ol, inline) }
export function RxOptGroup<O = void>(name: string, triggers: unknown, render?: Render<HTMLOptGroupElement, O>, superRender?: SuperRender<HTMLOptGroupElement, O>, inline?: boolean): RxNode<HTMLOptGroupElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.optgroup, inline) }
export function RxOption<O = void>(name: string, triggers: unknown, render?: Render<HTMLOptionElement, O>, superRender?: SuperRender<HTMLOptionElement, O>, inline?: boolean): RxNode<HTMLOptionElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.option, inline) }
export function RxOutput<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.output, inline) }
export function RxP<O = void>(name: string, triggers: unknown, render?: Render<HTMLParagraphElement, O>, superRender?: SuperRender<HTMLParagraphElement, O>, inline?: boolean): RxNode<HTMLParagraphElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.p, inline) }
export function RxParam<O = void>(name: string, triggers: unknown, render?: Render<HTMLParamElement, O>, superRender?: SuperRender<HTMLParamElement, O>, inline?: boolean): RxNode<HTMLParamElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.param, inline) }
export function RxPicture<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.picture, inline) }
export function RxPre<O = void>(name: string, triggers: unknown, render?: Render<HTMLPreElement, O>, superRender?: SuperRender<HTMLPreElement, O>, inline?: boolean): RxNode<HTMLPreElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.pre, inline) }
export function RxProgress<O = void>(name: string, triggers: unknown, render?: Render<HTMLProgressElement, O>, superRender?: SuperRender<HTMLProgressElement, O>, inline?: boolean): RxNode<HTMLProgressElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.progress, inline) }
export function RxQ<O = void>(name: string, triggers: unknown, render?: Render<HTMLQuoteElement, O>, superRender?: SuperRender<HTMLQuoteElement, O>, inline?: boolean): RxNode<HTMLQuoteElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.q, inline) }
export function RxRP<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.rp, inline) }
export function RxRT<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.rt, inline) }
export function RxRuby<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.ruby, inline) }
export function RxS<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.s, inline) }
export function RxSamp<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.samp, inline) }
export function RxScript<O = void>(name: string, triggers: unknown, render?: Render<HTMLScriptElement, O>, superRender?: SuperRender<HTMLScriptElement, O>, inline?: boolean): RxNode<HTMLScriptElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.script, inline) }
export function RxSection<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.section, inline) }
export function RxSelect<O = void>(name: string, triggers: unknown, render?: Render<HTMLSelectElement, O>, superRender?: SuperRender<HTMLSelectElement, O>, inline?: boolean): RxNode<HTMLSelectElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.select, inline) }
export function RxSmall<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.small, inline) }
export function RxSource<O = void>(name: string, triggers: unknown, render?: Render<HTMLSourceElement, O>, superRender?: SuperRender<HTMLSourceElement, O>, inline?: boolean): RxNode<HTMLSourceElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.source, inline) }
export function RxSpan<O = void>(name: string, triggers: unknown, render?: Render<HTMLSpanElement, O>, superRender?: SuperRender<HTMLSpanElement, O>, inline?: boolean): RxNode<HTMLSpanElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.span, inline) }
export function RxStrong<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.strong, inline) }
export function RxStyle<O = void>(name: string, triggers: unknown, render?: Render<HTMLStyleElement, O>, superRender?: SuperRender<HTMLStyleElement, O>, inline?: boolean): RxNode<HTMLStyleElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.style, inline) }
export function RxSub<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.sub, inline) }
export function RxSummary<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.summary, inline) }
export function RxSup<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.sup, inline) }
export function RxTable<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableElement, O>, superRender?: SuperRender<HTMLTableElement, O>, inline?: boolean): RxNode<HTMLTableElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.table, inline) }
export function RxTemplate<O = void>(name: string, triggers: unknown, render?: Render<HTMLTemplateElement, O>, superRender?: SuperRender<HTMLTemplateElement, O>, inline?: boolean): RxNode<HTMLTemplateElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.template, inline) }
export function RxTBody<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableSectionElement, O>, superRender?: SuperRender<HTMLTableSectionElement, O>, inline?: boolean): RxNode<HTMLTableSectionElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.tbody, inline) }
export function RxTD<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableCellElement, O>, superRender?: SuperRender<HTMLTableCellElement, O>, inline?: boolean): RxNode<HTMLTableCellElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.td, inline) }
export function RxTextArea<O = void>(name: string, triggers: unknown, render?: Render<HTMLTextAreaElement, O>, superRender?: SuperRender<HTMLTextAreaElement, O>, inline?: boolean): RxNode<HTMLTextAreaElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.textarea, inline) }
export function RxTFoot<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableSectionElement, O>, superRender?: SuperRender<HTMLTableSectionElement, O>, inline?: boolean): RxNode<HTMLTableSectionElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.tfoot, inline) }
export function RxTH<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableCellElement, O>, superRender?: SuperRender<HTMLTableCellElement, O>, inline?: boolean): RxNode<HTMLTableCellElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.th, inline) }
export function RxTHead<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableSectionElement, O>, superRender?: SuperRender<HTMLTableSectionElement, O>, inline?: boolean): RxNode<HTMLTableSectionElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.thead, inline) }
export function RxTime<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.time, inline) }
export function RxTitle<O = void>(name: string, triggers: unknown, render?: Render<HTMLTitleElement, O>, superRender?: SuperRender<HTMLTitleElement, O>, inline?: boolean): RxNode<HTMLTitleElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.title, inline) }
export function RxTR<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableRowElement, O>, superRender?: SuperRender<HTMLTableRowElement, O>, inline?: boolean): RxNode<HTMLTableRowElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.tr, inline) }
export function RxTrack<O = void>(name: string, triggers: unknown, render?: Render<HTMLTrackElement, O>, superRender?: SuperRender<HTMLTrackElement, O>, inline?: boolean): RxNode<HTMLTrackElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.track, inline) }
export function RxU<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.u, inline) }
export function RxUL<O = void>(name: string, triggers: unknown, render?: Render<HTMLUListElement, O>, superRender?: SuperRender<HTMLUListElement, O>, inline?: boolean): RxNode<HTMLUListElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.ul, inline) }
export function RxVar<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.var, inline) }
export function RxVideo<O = void>(name: string, triggers: unknown, render?: Render<HTMLVideoElement, O>, superRender?: SuperRender<HTMLVideoElement, O>, inline?: boolean): RxNode<HTMLVideoElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.video, inline) }
export function RxWbr<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, superRender, HtmlTags.wbr, inline) }

export function A<O = void>(name: string, render?: Render<HTMLAnchorElement, O>, superRender?: SuperRender<HTMLAnchorElement, O>): RxNode<HTMLAnchorElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.a, true) }
export function Abbr<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.abbr, true) }
export function Address<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.address, true) }
export function Area<O = void>(name: string, render?: Render<HTMLAreaElement, O>, superRender?: SuperRender<HTMLAreaElement, O>): RxNode<HTMLAreaElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.area, true) }
export function Article<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.article, true) }
export function Aside<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.aside, true) }
export function Audio<O = void>(name: string, render?: Render<HTMLAudioElement, O>, superRender?: SuperRender<HTMLAudioElement, O>): RxNode<HTMLAudioElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.audio, true) }
export function B<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.b, true) }
export function Base<O = void>(name: string, render?: Render<HTMLBaseElement, O>, superRender?: SuperRender<HTMLBaseElement, O>): RxNode<HTMLBaseElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.base, true) }
export function Bdi<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.bdi, true) }
export function Bdo<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.bdo, true) }
export function Big<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.big, true) }
export function BlockQuote<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.blockquote, true) }
export function Body<O = void>(name: string, render?: Render<HTMLBodyElement, O>, superRender?: SuperRender<HTMLBodyElement, O>): RxNode<HTMLBodyElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.body, true) }
export function BR<O = void>(name: string, render?: Render<HTMLBRElement, O>, superRender?: SuperRender<HTMLBRElement, O>): RxNode<HTMLBRElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.br, true) }
export function Button<O = void>(name: string, render?: Render<HTMLButtonElement, O>, superRender?: SuperRender<HTMLButtonElement, O>): RxNode<HTMLButtonElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.button, true) }
export function Canvas<O = void>(name: string, render?: Render<HTMLCanvasElement, O>, superRender?: SuperRender<HTMLCanvasElement, O>): RxNode<HTMLCanvasElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.canvas, true) }
export function Caption<O = void>(name: string, render?: Render<HTMLTableCaptionElement, O>, superRender?: SuperRender<HTMLTableCaptionElement, O>): RxNode<HTMLTableCaptionElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.caption, true) }
export function Cite<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.cite, true) }
export function Code<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.code, true) }
export function Col<O = void>(name: string, render?: Render<HTMLTableColElement, O>, superRender?: SuperRender<HTMLTableColElement, O>): RxNode<HTMLTableColElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.col, true) }
export function ColGroup<O = void>(name: string, render?: Render<HTMLTableColElement, O>, superRender?: SuperRender<HTMLTableColElement, O>): RxNode<HTMLTableColElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.colgroup, true) }
export function Data<O = void>(name: string, render?: Render<HTMLDataElement, O>, superRender?: SuperRender<HTMLDataElement, O>): RxNode<HTMLDataElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.data, true) }
export function DataList<O = void>(name: string, render?: Render<HTMLDataListElement, O>, superRender?: SuperRender<HTMLDataListElement, O>): RxNode<HTMLDataListElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.datalist, true) }
export function DD<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.dd, true) }
export function Del<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.del, true) }
export function Details<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.details, true) }
export function Dfn<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.dfn, true) }
export function Div<O = void>(name: string, render?: Render<HTMLDivElement, O>, superRender?: SuperRender<HTMLDivElement, O>): RxNode<HTMLDivElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.div, true) }
export function DL<O = void>(name: string, render?: Render<HTMLDListElement, O>, superRender?: SuperRender<HTMLDListElement, O>): RxNode<HTMLDListElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.dl, true) }
export function DT<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.dt, true) }
export function EM<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.em, true) }
export function Embed<O = void>(name: string, render?: Render<HTMLEmbedElement, O>, superRender?: SuperRender<HTMLEmbedElement, O>): RxNode<HTMLEmbedElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.embed, true) }
export function FieldSet<O = void>(name: string, render?: Render<HTMLFieldSetElement, O>, superRender?: SuperRender<HTMLFieldSetElement, O>): RxNode<HTMLFieldSetElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.fieldset, true) }
export function FigCaption<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.figcaption, true) }
export function Figure<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.figure, true) }
export function Footer<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.footer, true) }
export function Form<O = void>(name: string, render?: Render<HTMLFormElement, O>, superRender?: SuperRender<HTMLFormElement, O>): RxNode<HTMLFormElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.form, true) }
export function H1<O = void>(name: string, render?: Render<HTMLHeadingElement, O>, superRender?: SuperRender<HTMLHeadingElement, O>): RxNode<HTMLHeadingElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.h1, true) }
export function H2<O = void>(name: string, render?: Render<HTMLHeadingElement, O>, superRender?: SuperRender<HTMLHeadingElement, O>): RxNode<HTMLHeadingElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.h2, true) }
export function H3<O = void>(name: string, render?: Render<HTMLHeadingElement, O>, superRender?: SuperRender<HTMLHeadingElement, O>): RxNode<HTMLHeadingElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.h3, true) }
export function H4<O = void>(name: string, render?: Render<HTMLHeadingElement, O>, superRender?: SuperRender<HTMLHeadingElement, O>): RxNode<HTMLHeadingElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.h4, true) }
export function H5<O = void>(name: string, render?: Render<HTMLHeadingElement, O>, superRender?: SuperRender<HTMLHeadingElement, O>): RxNode<HTMLHeadingElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.h5, true) }
export function H6<O = void>(name: string, render?: Render<HTMLHeadingElement, O>, superRender?: SuperRender<HTMLHeadingElement, O>): RxNode<HTMLHeadingElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.h6, true) }
export function Head<O = void>(name: string, render?: Render<HTMLHeadElement, O>, superRender?: SuperRender<HTMLHeadElement, O>): RxNode<HTMLHeadElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.head, true) }
export function Header<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.header, true) }
export function HGroup<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.hgroup, true) }
export function HR<O = void>(name: string, render?: Render<HTMLHRElement, O>, superRender?: SuperRender<HTMLHRElement, O>): RxNode<HTMLHRElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.hr, true) }
export function Html<O = void>(name: string, render?: Render<HTMLHtmlElement, O>, superRender?: SuperRender<HTMLHtmlElement, O>): RxNode<HTMLHtmlElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.html, true) }
export function I<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.i, true) }
export function IFrame<O = void>(name: string, render?: Render<HTMLIFrameElement, O>, superRender?: SuperRender<HTMLIFrameElement, O>): RxNode<HTMLIFrameElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.iframe, true) }
export function Img<O = void>(name: string, render?: Render<HTMLImageElement, O>, superRender?: SuperRender<HTMLImageElement, O>): RxNode<HTMLImageElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.img, true) }
export function Input<O = void>(name: string, render?: Render<HTMLInputElement, O>, superRender?: SuperRender<HTMLInputElement, O>): RxNode<HTMLInputElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.input, true) }
export function Ins<O = void>(name: string, render?: Render<HTMLModElement, O>, superRender?: SuperRender<HTMLModElement, O>): RxNode<HTMLModElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.ins, true) }
export function Kbd<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.kbd, true) }
export function KeyGen<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.keygen, true) }
export function Label<O = void>(name: string, render?: Render<HTMLLabelElement, O>, superRender?: SuperRender<HTMLLabelElement, O>): RxNode<HTMLLabelElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.label, true) }
export function Legend<O = void>(name: string, render?: Render<HTMLLegendElement, O>, superRender?: SuperRender<HTMLLegendElement, O>): RxNode<HTMLLegendElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.legend, true) }
export function LI<O = void>(name: string, render?: Render<HTMLLIElement, O>, superRender?: SuperRender<HTMLLIElement, O>): RxNode<HTMLLIElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.li, true) }
export function Link<O = void>(name: string, render?: Render<HTMLLinkElement, O>, superRender?: SuperRender<HTMLLinkElement, O>): RxNode<HTMLLinkElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.link, true) }
export function Main<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.main, true) }
export function Map<O = void>(name: string, render?: Render<HTMLMapElement, O>, superRender?: SuperRender<HTMLMapElement, O>): RxNode<HTMLMapElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.map, true) }
export function Mark<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.mark, true) }
export function Menu<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.menu, true) }
export function MenuItem<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.menuitem, true) }
export function Meta<O = void>(name: string, render?: Render<HTMLMetaElement, O>, superRender?: SuperRender<HTMLMetaElement, O>): RxNode<HTMLMetaElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.meta, true) }
export function Meter<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.meter, true) }
export function Nav<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.nav, true) }
export function NoIndex<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.noindex, true) }
export function NoScript<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.noscript, true) }
export function Obj<O = void>(name: string, render?: Render<HTMLObjectElement, O>, superRender?: SuperRender<HTMLObjectElement, O>): RxNode<HTMLObjectElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.object, true) }
export function OL<O = void>(name: string, render?: Render<HTMLOListElement, O>, superRender?: SuperRender<HTMLOListElement, O>): RxNode<HTMLOListElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.ol, true) }
export function OptGroup<O = void>(name: string, render?: Render<HTMLOptGroupElement, O>, superRender?: SuperRender<HTMLOptGroupElement, O>): RxNode<HTMLOptGroupElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.optgroup, true) }
export function Option<O = void>(name: string, render?: Render<HTMLOptionElement, O>, superRender?: SuperRender<HTMLOptionElement, O>): RxNode<HTMLOptionElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.option, true) }
export function Output<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.output, true) }
export function P<O = void>(name: string, render?: Render<HTMLParagraphElement, O>, superRender?: SuperRender<HTMLParagraphElement, O>): RxNode<HTMLParagraphElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.p, true) }
export function Param<O = void>(name: string, render?: Render<HTMLParamElement, O>, superRender?: SuperRender<HTMLParamElement, O>): RxNode<HTMLParamElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.param, true) }
export function Picture<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.picture, true) }
export function Pre<O = void>(name: string, render?: Render<HTMLPreElement, O>, superRender?: SuperRender<HTMLPreElement, O>): RxNode<HTMLPreElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.pre, true) }
export function Progress<O = void>(name: string, render?: Render<HTMLProgressElement, O>, superRender?: SuperRender<HTMLProgressElement, O>): RxNode<HTMLProgressElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.progress, true) }
export function Q<O = void>(name: string, render?: Render<HTMLQuoteElement, O>, superRender?: SuperRender<HTMLQuoteElement, O>): RxNode<HTMLQuoteElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.q, true) }
export function RP<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.rp, true) }
export function RT<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.rt, true) }
export function Ruby<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.ruby, true) }
export function S<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.s, true) }
export function Samp<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.samp, true) }
export function Script<O = void>(name: string, render?: Render<HTMLScriptElement, O>, superRender?: SuperRender<HTMLScriptElement, O>): RxNode<HTMLScriptElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.script, true) }
export function Section<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.section, true) }
export function Select<O = void>(name: string, render?: Render<HTMLSelectElement, O>, superRender?: SuperRender<HTMLSelectElement, O>): RxNode<HTMLSelectElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.select, true) }
export function Small<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.small, true) }
export function Source<O = void>(name: string, render?: Render<HTMLSourceElement, O>, superRender?: SuperRender<HTMLSourceElement, O>): RxNode<HTMLSourceElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.source, true) }
export function Span<O = void>(name: string, render?: Render<HTMLSpanElement, O>, superRender?: SuperRender<HTMLSpanElement, O>): RxNode<HTMLSpanElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.span, true) }
export function Strong<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.strong, true) }
export function Style<O = void>(name: string, render?: Render<HTMLStyleElement, O>, superRender?: SuperRender<HTMLStyleElement, O>): RxNode<HTMLStyleElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.style, true) }
export function Sub<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.sub, true) }
export function Summary<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.summary, true) }
export function Sup<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.sup, true) }
export function Table<O = void>(name: string, render?: Render<HTMLTableElement, O>, superRender?: SuperRender<HTMLTableElement, O>): RxNode<HTMLTableElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.table, true) }
export function Template<O = void>(name: string, render?: Render<HTMLTemplateElement, O>, superRender?: SuperRender<HTMLTemplateElement, O>): RxNode<HTMLTemplateElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.template, true) }
export function TBody<O = void>(name: string, render?: Render<HTMLTableSectionElement, O>, superRender?: SuperRender<HTMLTableSectionElement, O>): RxNode<HTMLTableSectionElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.tbody, true) }
export function TD<O = void>(name: string, render?: Render<HTMLTableCellElement, O>, superRender?: SuperRender<HTMLTableCellElement, O>): RxNode<HTMLTableCellElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.td, true) }
export function TextArea<O = void>(name: string, render?: Render<HTMLTextAreaElement, O>, superRender?: SuperRender<HTMLTextAreaElement, O>): RxNode<HTMLTextAreaElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.textarea, true) }
export function TFoot<O = void>(name: string, render?: Render<HTMLTableSectionElement, O>, superRender?: SuperRender<HTMLTableSectionElement, O>): RxNode<HTMLTableSectionElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.tfoot, true) }
export function TH<O = void>(name: string, render?: Render<HTMLTableCellElement, O>, superRender?: SuperRender<HTMLTableCellElement, O>): RxNode<HTMLTableCellElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.th, true) }
export function THead<O = void>(name: string, render?: Render<HTMLTableSectionElement, O>, superRender?: SuperRender<HTMLTableSectionElement, O>): RxNode<HTMLTableSectionElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.thead, true) }
export function Time<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.time, true) }
export function Title<O = void>(name: string, render?: Render<HTMLTitleElement, O>, superRender?: SuperRender<HTMLTitleElement, O>): RxNode<HTMLTitleElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.title, true) }
export function TR<O = void>(name: string, render?: Render<HTMLTableRowElement, O>, superRender?: SuperRender<HTMLTableRowElement, O>): RxNode<HTMLTableRowElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.tr, true) }
export function Track<O = void>(name: string, render?: Render<HTMLTrackElement, O>, superRender?: SuperRender<HTMLTrackElement, O>): RxNode<HTMLTrackElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.track, true) }
export function U<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.u, true) }
export function UL<O = void>(name: string, render?: Render<HTMLUListElement, O>, superRender?: SuperRender<HTMLUListElement, O>): RxNode<HTMLUListElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.ul, true) }
export function Var<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.var, true) }
export function Video<O = void>(name: string, render?: Render<HTMLVideoElement, O>, superRender?: SuperRender<HTMLVideoElement, O>): RxNode<HTMLVideoElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.video, true) }
export function Wbr<O = void>(name: string, render?: Render<HTMLElement, O>, superRender?: SuperRender<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, superRender, HtmlTags.wbr, true) }

export function RxSvg<O = void>(name: string, triggers: unknown, render?: Render<SVGSVGElement, O>, superRender?: SuperRender<SVGSVGElement, O>): RxNode<SVGSVGElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.svg) }
export function RxSvgA<O = void>(name: string, triggers: unknown, render?: Render<SVGAElement, O>, superRender?: SuperRender<SVGAElement, O>): RxNode<SVGAElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.a) }
export function RxAnimate<O = void>(name: string, triggers: unknown, render?: Render<SVGAnimateElement, O>, superRender?: SuperRender<SVGAnimateElement, O>): RxNode<SVGAnimateElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.animate) }
export function RxAnimateMotion<O = void>(name: string, triggers: unknown, render?: Render<SVGAnimateMotionElement, O>, superRender?: SuperRender<SVGAnimateMotionElement, O>): RxNode<SVGAnimateMotionElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.animateMotion) }
export function RxAnimateTransform<O = void>(name: string, triggers: unknown, render?: Render<SVGAnimateTransformElement, O>, superRender?: SuperRender<SVGAnimateTransformElement, O>): RxNode<SVGAnimateTransformElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.animateTransform) }
export function RxCircle<O = void>(name: string, triggers: unknown, render?: Render<SVGCircleElement, O>, superRender?: SuperRender<SVGCircleElement, O>): RxNode<SVGCircleElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.circle) }
export function RxClipPath<O = void>(name: string, triggers: unknown, render?: Render<SVGClipPathElement, O>, superRender?: SuperRender<SVGClipPathElement, O>): RxNode<SVGClipPathElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.clipPath) }
export function RxDefs<O = void>(name: string, triggers: unknown, render?: Render<SVGDefsElement, O>, superRender?: SuperRender<SVGDefsElement, O>): RxNode<SVGDefsElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.defs) }
export function RxDesc<O = void>(name: string, triggers: unknown, render?: Render<SVGDescElement, O>, superRender?: SuperRender<SVGDescElement, O>): RxNode<SVGDescElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.desc) }
export function RxEllipse<O = void>(name: string, triggers: unknown, render?: Render<SVGEllipseElement, O>, superRender?: SuperRender<SVGEllipseElement, O>): RxNode<SVGEllipseElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.ellipse) }
export function RxFeBlend<O = void>(name: string, triggers: unknown, render?: Render<SVGFEBlendElement, O>, superRender?: SuperRender<SVGFEBlendElement, O>): RxNode<SVGFEBlendElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feBlend) }
export function RxFeColorMatrix<O = void>(name: string, triggers: unknown, render?: Render<SVGFEColorMatrixElement, O>, superRender?: SuperRender<SVGFEColorMatrixElement, O>): RxNode<SVGFEColorMatrixElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feColorMatrix) }
export function RxFeComponentTransfer<O = void>(name: string, triggers: unknown, render?: Render<SVGFEComponentTransferElement, O>, superRender?: SuperRender<SVGFEComponentTransferElement, O>): RxNode<SVGFEComponentTransferElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feComponentTransfer) }
export function RxFeComposite<O = void>(name: string, triggers: unknown, render?: Render<SVGFECompositeElement, O>, superRender?: SuperRender<SVGFECompositeElement, O>): RxNode<SVGFECompositeElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feComposite) }
export function RxFeConvolveMatrix<O = void>(name: string, triggers: unknown, render?: Render<SVGFEConvolveMatrixElement, O>, superRender?: SuperRender<SVGFEConvolveMatrixElement, O>): RxNode<SVGFEConvolveMatrixElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feConvolveMatrix) }
export function RxFeDiffuseLighting<O = void>(name: string, triggers: unknown, render?: Render<SVGFEDiffuseLightingElement, O>, superRender?: SuperRender<SVGFEDiffuseLightingElement, O>): RxNode<SVGFEDiffuseLightingElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feDiffuseLighting) }
export function RxFeDisplacementMap<O = void>(name: string, triggers: unknown, render?: Render<SVGFEDisplacementMapElement, O>, superRender?: SuperRender<SVGFEDisplacementMapElement, O>): RxNode<SVGFEDisplacementMapElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feDisplacementMap) }
export function RxFeDistantLight<O = void>(name: string, triggers: unknown, render?: Render<SVGFEDistantLightElement, O>, superRender?: SuperRender<SVGFEDistantLightElement, O>): RxNode<SVGFEDistantLightElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feDistantLight) }
export function RxFeDropShadow<O = void>(name: string, triggers: unknown, render?: Render<SVGFEDropShadowElement, O>, superRender?: SuperRender<SVGFEDropShadowElement, O>): RxNode<SVGFEDropShadowElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feDropShadow) }
export function RxFeFlood<O = void>(name: string, triggers: unknown, render?: Render<SVGFEFloodElement, O>, superRender?: SuperRender<SVGFEFloodElement, O>): RxNode<SVGFEFloodElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feFlood) }
export function RxFeFuncA<O = void>(name: string, triggers: unknown, render?: Render<SVGFEFuncAElement, O>, superRender?: SuperRender<SVGFEFuncAElement, O>): RxNode<SVGFEFuncAElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feFuncA) }
export function RxFeFuncB<O = void>(name: string, triggers: unknown, render?: Render<SVGFEFuncBElement, O>, superRender?: SuperRender<SVGFEFuncBElement, O>): RxNode<SVGFEFuncBElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feFuncB) }
export function RxFeFuncG<O = void>(name: string, triggers: unknown, render?: Render<SVGFEFuncGElement, O>, superRender?: SuperRender<SVGFEFuncGElement, O>): RxNode<SVGFEFuncGElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feFuncG) }
export function RxFeFuncR<O = void>(name: string, triggers: unknown, render?: Render<SVGFEFuncRElement, O>, superRender?: SuperRender<SVGFEFuncRElement, O>): RxNode<SVGFEFuncRElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feFuncR) }
export function RxFeGaussianBlur<O = void>(name: string, triggers: unknown, render?: Render<SVGFEGaussianBlurElement, O>, superRender?: SuperRender<SVGFEGaussianBlurElement, O>): RxNode<SVGFEGaussianBlurElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feGaussianBlur) }
export function RxFeImage<O = void>(name: string, triggers: unknown, render?: Render<SVGFEImageElement, O>, superRender?: SuperRender<SVGFEImageElement, O>): RxNode<SVGFEImageElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feImage) }
export function RxFeMerge<O = void>(name: string, triggers: unknown, render?: Render<SVGFEMergeElement, O>, superRender?: SuperRender<SVGFEMergeElement, O>): RxNode<SVGFEMergeElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feMerge) }
export function RxFeMergeNode<O = void>(name: string, triggers: unknown, render?: Render<SVGFEMergeNodeElement, O>, superRender?: SuperRender<SVGFEMergeNodeElement, O>): RxNode<SVGFEMergeNodeElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feMergeNode) }
export function RxFeMorphology<O = void>(name: string, triggers: unknown, render?: Render<SVGFEMorphologyElement, O>, superRender?: SuperRender<SVGFEMorphologyElement, O>): RxNode<SVGFEMorphologyElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feMorphology) }
export function RxFeOffset<O = void>(name: string, triggers: unknown, render?: Render<SVGFEOffsetElement, O>, superRender?: SuperRender<SVGFEOffsetElement, O>): RxNode<SVGFEOffsetElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feOffset) }
export function RxFePointLight<O = void>(name: string, triggers: unknown, render?: Render<SVGFEPointLightElement, O>, superRender?: SuperRender<SVGFEPointLightElement, O>): RxNode<SVGFEPointLightElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.fePointLight) }
export function RxFeSpecularLighting<O = void>(name: string, triggers: unknown, render?: Render<SVGFESpecularLightingElement, O>, superRender?: SuperRender<SVGFESpecularLightingElement, O>): RxNode<SVGFESpecularLightingElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feSpecularLighting) }
export function RxFeSpotLight<O = void>(name: string, triggers: unknown, render?: Render<SVGFESpotLightElement, O>, superRender?: SuperRender<SVGFESpotLightElement, O>): RxNode<SVGFESpotLightElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feSpotLight) }
export function RxFeTile<O = void>(name: string, triggers: unknown, render?: Render<SVGFETileElement, O>, superRender?: SuperRender<SVGFETileElement, O>): RxNode<SVGFETileElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feTile) }
export function RxFeTurbulence<O = void>(name: string, triggers: unknown, render?: Render<SVGFETurbulenceElement, O>, superRender?: SuperRender<SVGFETurbulenceElement, O>): RxNode<SVGFETurbulenceElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.feTurbulence) }
export function RxFilter<O = void>(name: string, triggers: unknown, render?: Render<SVGFilterElement, O>, superRender?: SuperRender<SVGFilterElement, O>): RxNode<SVGFilterElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.filter) }
export function RxForeignObject<O = void>(name: string, triggers: unknown, render?: Render<SVGForeignObjectElement, O>, superRender?: SuperRender<SVGForeignObjectElement, O>): RxNode<SVGForeignObjectElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.foreignObject) }
export function RxG<O = void>(name: string, triggers: unknown, render?: Render<SVGGElement, O>, superRender?: SuperRender<SVGGElement, O>): RxNode<SVGGElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.g) }
export function RxSvgImage<O = void>(name: string, triggers: unknown, render?: Render<SVGImageElement, O>, superRender?: SuperRender<SVGImageElement, O>): RxNode<SVGImageElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.image) }
export function RxLine<O = void>(name: string, triggers: unknown, render?: Render<SVGLineElement, O>, superRender?: SuperRender<SVGLineElement, O>): RxNode<SVGLineElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.line) }
export function RxLinearGradient<O = void>(name: string, triggers: unknown, render?: Render<SVGLinearGradientElement, O>, superRender?: SuperRender<SVGLinearGradientElement, O>): RxNode<SVGLinearGradientElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.linearGradient) }
export function RxMarker<O = void>(name: string, triggers: unknown, render?: Render<SVGMarkerElement, O>, superRender?: SuperRender<SVGMarkerElement, O>): RxNode<SVGMarkerElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.marker) }
export function RxMask<O = void>(name: string, triggers: unknown, render?: Render<SVGMaskElement, O>, superRender?: SuperRender<SVGMaskElement, O>): RxNode<SVGMaskElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.mask) }
export function RxMetadata<O = void>(name: string, triggers: unknown, render?: Render<SVGMetadataElement, O>, superRender?: SuperRender<SVGMetadataElement, O>): RxNode<SVGMetadataElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.metadata) }
export function RxMPath<O = void>(name: string, triggers: unknown, render?: Render<SVGElement, O>, superRender?: SuperRender<SVGElement, O>): RxNode<SVGElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.mpath) }
export function RxPath<O = void>(name: string, triggers: unknown, render?: Render<SVGPathElement, O>, superRender?: SuperRender<SVGPathElement, O>): RxNode<SVGPathElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.path) }
export function RxPattern<O = void>(name: string, triggers: unknown, render?: Render<SVGPatternElement, O>, superRender?: SuperRender<SVGPatternElement, O>): RxNode<SVGPatternElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.pattern) }
export function RxPolygon<O = void>(name: string, triggers: unknown, render?: Render<SVGPolygonElement, O>, superRender?: SuperRender<SVGPolygonElement, O>): RxNode<SVGPolygonElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.polygon) }
export function RxPolyline<O = void>(name: string, triggers: unknown, render?: Render<SVGPolylineElement, O>, superRender?: SuperRender<SVGPolylineElement, O>): RxNode<SVGPolylineElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.polyline) }
export function RxRadialGradient<O = void>(name: string, triggers: unknown, render?: Render<SVGRadialGradientElement, O>, superRender?: SuperRender<SVGRadialGradientElement, O>): RxNode<SVGRadialGradientElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.radialGradient) }
export function RxRect<O = void>(name: string, triggers: unknown, render?: Render<SVGRectElement, O>, superRender?: SuperRender<SVGRectElement, O>): RxNode<SVGRectElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.rect) }
export function RxStop<O = void>(name: string, triggers: unknown, render?: Render<SVGStopElement, O>, superRender?: SuperRender<SVGStopElement, O>): RxNode<SVGStopElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.stop) }
export function RxSvgSwitch<O = void>(name: string, triggers: unknown, render?: Render<SVGSwitchElement, O>, superRender?: SuperRender<SVGSwitchElement, O>): RxNode<SVGSwitchElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.switch) }
export function RxSymbol<O = void>(name: string, triggers: unknown, render?: Render<SVGSymbolElement, O>, superRender?: SuperRender<SVGSymbolElement, O>): RxNode<SVGSymbolElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.symbol) }
export function RxText<O = void>(name: string, triggers: unknown, render?: Render<SVGTextElement, O>, superRender?: SuperRender<SVGTextElement, O>): RxNode<SVGTextElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.text) }
export function RxTextPath<O = void>(name: string, triggers: unknown, render?: Render<SVGTextPathElement, O>, superRender?: SuperRender<SVGTextPathElement, O>): RxNode<SVGTextPathElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.textPath) }
export function RxTSpan<O = void>(name: string, triggers: unknown, render?: Render<SVGTSpanElement, O>, superRender?: SuperRender<SVGTSpanElement, O>): RxNode<SVGTSpanElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.tspan) }
export function RxUse<O = void>(name: string, triggers: unknown, render?: Render<SVGUseElement, O>, superRender?: SuperRender<SVGUseElement, O>): RxNode<SVGUseElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.use) }
export function RxView<O = void>(name: string, triggers: unknown, render?: Render<SVGViewElement, O>, superRender?: SuperRender<SVGViewElement, O>): RxNode<SVGViewElement, O> { return RxDom.Node(name, triggers, render, superRender, SvgTags.view) }

export function Svg<O = void>(name: string, render?: Render<SVGSVGElement, O>, superRender?: SuperRender<SVGSVGElement, O>): RxNode<SVGSVGElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.svg) }
export function SvgA<O = void>(name: string, render?: Render<SVGAElement, O>, superRender?: SuperRender<SVGAElement, O>): RxNode<SVGAElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.a) }
export function Animate<O = void>(name: string, render?: Render<SVGAnimateElement, O>, superRender?: SuperRender<SVGAnimateElement, O>): RxNode<SVGAnimateElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.animate) }
export function AnimateMotion<O = void>(name: string, render?: Render<SVGAnimateMotionElement, O>, superRender?: SuperRender<SVGAnimateMotionElement, O>): RxNode<SVGAnimateMotionElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.animateMotion) }
export function AnimateTransform<O = void>(name: string, render?: Render<SVGAnimateTransformElement, O>, superRender?: SuperRender<SVGAnimateTransformElement, O>): RxNode<SVGAnimateTransformElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.animateTransform) }
export function Circle<O = void>(name: string, render?: Render<SVGCircleElement, O>, superRender?: SuperRender<SVGCircleElement, O>): RxNode<SVGCircleElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.circle) }
export function ClipPath<O = void>(name: string, render?: Render<SVGClipPathElement, O>, superRender?: SuperRender<SVGClipPathElement, O>): RxNode<SVGClipPathElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.clipPath) }
export function Defs<O = void>(name: string, render?: Render<SVGDefsElement, O>, superRender?: SuperRender<SVGDefsElement, O>): RxNode<SVGDefsElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.defs) }
export function Desc<O = void>(name: string, render?: Render<SVGDescElement, O>, superRender?: SuperRender<SVGDescElement, O>): RxNode<SVGDescElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.desc) }
export function Ellipse<O = void>(name: string, render?: Render<SVGEllipseElement, O>, superRender?: SuperRender<SVGEllipseElement, O>): RxNode<SVGEllipseElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.ellipse) }
export function FeBlend<O = void>(name: string, render?: Render<SVGFEBlendElement, O>, superRender?: SuperRender<SVGFEBlendElement, O>): RxNode<SVGFEBlendElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.feBlend) }
export function FeColorMatrix<O = void>(name: string, render?: Render<SVGFEColorMatrixElement, O>, superRender?: SuperRender<SVGFEColorMatrixElement, O>): RxNode<SVGFEColorMatrixElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.feColorMatrix) }
export function FeComponentTransfer<O = void>(name: string, render?: Render<SVGFEComponentTransferElement, O>, superRender?: SuperRender<SVGFEComponentTransferElement, O>): RxNode<SVGFEComponentTransferElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.feComponentTransfer) }
export function FeComposite<O = void>(name: string, render?: Render<SVGFECompositeElement, O>, superRender?: SuperRender<SVGFECompositeElement, O>): RxNode<SVGFECompositeElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.feComposite) }
export function FeConvolveMatrix<O = void>(name: string, render?: Render<SVGFEConvolveMatrixElement, O>, superRender?: SuperRender<SVGFEConvolveMatrixElement, O>): RxNode<SVGFEConvolveMatrixElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.feConvolveMatrix) }
export function FeDiffuseLighting<O = void>(name: string, render?: Render<SVGFEDiffuseLightingElement, O>, superRender?: SuperRender<SVGFEDiffuseLightingElement, O>): RxNode<SVGFEDiffuseLightingElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.feDiffuseLighting) }
export function FeDisplacementMap<O = void>(name: string, render?: Render<SVGFEDisplacementMapElement, O>, superRender?: SuperRender<SVGFEDisplacementMapElement, O>): RxNode<SVGFEDisplacementMapElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.feDisplacementMap) }
export function FeDistantLight<O = void>(name: string, render?: Render<SVGFEDistantLightElement, O>, superRender?: SuperRender<SVGFEDistantLightElement, O>): RxNode<SVGFEDistantLightElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.feDistantLight) }
export function FeDropShadow<O = void>(name: string, render?: Render<SVGFEDropShadowElement, O>, superRender?: SuperRender<SVGFEDropShadowElement, O>): RxNode<SVGFEDropShadowElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.feDropShadow) }
export function FeFlood<O = void>(name: string, render?: Render<SVGFEFloodElement, O>, superRender?: SuperRender<SVGFEFloodElement, O>): RxNode<SVGFEFloodElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.feFlood) }
export function FeFuncA<O = void>(name: string, render?: Render<SVGFEFuncAElement, O>, superRender?: SuperRender<SVGFEFuncAElement, O>): RxNode<SVGFEFuncAElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.feFuncA) }
export function FeFuncB<O = void>(name: string, render?: Render<SVGFEFuncBElement, O>, superRender?: SuperRender<SVGFEFuncBElement, O>): RxNode<SVGFEFuncBElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.feFuncB) }
export function FeFuncG<O = void>(name: string, render?: Render<SVGFEFuncGElement, O>, superRender?: SuperRender<SVGFEFuncGElement, O>): RxNode<SVGFEFuncGElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.feFuncG) }
export function FeFuncR<O = void>(name: string, render?: Render<SVGFEFuncRElement, O>, superRender?: SuperRender<SVGFEFuncRElement, O>): RxNode<SVGFEFuncRElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.feFuncR) }
export function FeGaussianBlur<O = void>(name: string, render?: Render<SVGFEGaussianBlurElement, O>, superRender?: SuperRender<SVGFEGaussianBlurElement, O>): RxNode<SVGFEGaussianBlurElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.feGaussianBlur) }
export function FeImage<O = void>(name: string, render?: Render<SVGFEImageElement, O>, superRender?: SuperRender<SVGFEImageElement, O>): RxNode<SVGFEImageElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.feImage) }
export function FeMerge<O = void>(name: string, render?: Render<SVGFEMergeElement, O>, superRender?: SuperRender<SVGFEMergeElement, O>): RxNode<SVGFEMergeElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.feMerge) }
export function FeMergeNode<O = void>(name: string, render?: Render<SVGFEMergeNodeElement, O>, superRender?: SuperRender<SVGFEMergeNodeElement, O>): RxNode<SVGFEMergeNodeElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.feMergeNode) }
export function FeMorphology<O = void>(name: string, render?: Render<SVGFEMorphologyElement, O>, superRender?: SuperRender<SVGFEMorphologyElement, O>): RxNode<SVGFEMorphologyElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.feMorphology) }
export function FeOffset<O = void>(name: string, render?: Render<SVGFEOffsetElement, O>, superRender?: SuperRender<SVGFEOffsetElement, O>): RxNode<SVGFEOffsetElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.feOffset) }
export function FePointLight<O = void>(name: string, render?: Render<SVGFEPointLightElement, O>, superRender?: SuperRender<SVGFEPointLightElement, O>): RxNode<SVGFEPointLightElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.fePointLight) }
export function FeSpecularLighting<O = void>(name: string, render?: Render<SVGFESpecularLightingElement, O>, superRender?: SuperRender<SVGFESpecularLightingElement, O>): RxNode<SVGFESpecularLightingElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.feSpecularLighting) }
export function FeSpotLight<O = void>(name: string, render?: Render<SVGFESpotLightElement, O>, superRender?: SuperRender<SVGFESpotLightElement, O>): RxNode<SVGFESpotLightElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.feSpotLight) }
export function FeTile<O = void>(name: string, render?: Render<SVGFETileElement, O>, superRender?: SuperRender<SVGFETileElement, O>): RxNode<SVGFETileElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.feTile) }
export function FeTurbulence<O = void>(name: string, render?: Render<SVGFETurbulenceElement, O>, superRender?: SuperRender<SVGFETurbulenceElement, O>): RxNode<SVGFETurbulenceElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.feTurbulence) }
export function Filter<O = void>(name: string, render?: Render<SVGFilterElement, O>, superRender?: SuperRender<SVGFilterElement, O>): RxNode<SVGFilterElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.filter) }
export function ForeignObject<O = void>(name: string, render?: Render<SVGForeignObjectElement, O>, superRender?: SuperRender<SVGForeignObjectElement, O>): RxNode<SVGForeignObjectElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.foreignObject) }
export function G<O = void>(name: string, render?: Render<SVGGElement, O>, superRender?: SuperRender<SVGGElement, O>): RxNode<SVGGElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.g) }
export function SvgImage<O = void>(name: string, render?: Render<SVGImageElement, O>, superRender?: SuperRender<SVGImageElement, O>): RxNode<SVGImageElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.image) }
export function Line<O = void>(name: string, render?: Render<SVGLineElement, O>, superRender?: SuperRender<SVGLineElement, O>): RxNode<SVGLineElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.line) }
export function LinearGradient<O = void>(name: string, render?: Render<SVGLinearGradientElement, O>, superRender?: SuperRender<SVGLinearGradientElement, O>): RxNode<SVGLinearGradientElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.linearGradient) }
export function Marker<O = void>(name: string, render?: Render<SVGMarkerElement, O>, superRender?: SuperRender<SVGMarkerElement, O>): RxNode<SVGMarkerElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.marker) }
export function Mask<O = void>(name: string, render?: Render<SVGMaskElement, O>, superRender?: SuperRender<SVGMaskElement, O>): RxNode<SVGMaskElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.mask) }
export function MetaData<O = void>(name: string, render?: Render<SVGMetadataElement, O>, superRender?: SuperRender<SVGMetadataElement, O>): RxNode<SVGMetadataElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.metadata) }
export function MPath<O = void>(name: string, render?: Render<SVGElement, O>, superRender?: SuperRender<SVGElement, O>): RxNode<SVGElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.mpath) }
export function Path<O = void>(name: string, render?: Render<SVGPathElement, O>, superRender?: SuperRender<SVGPathElement, O>): RxNode<SVGPathElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.path) }
export function Pattern<O = void>(name: string, render?: Render<SVGPatternElement, O>, superRender?: SuperRender<SVGPatternElement, O>): RxNode<SVGPatternElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.pattern) }
export function Polygon<O = void>(name: string, render?: Render<SVGPolygonElement, O>, superRender?: SuperRender<SVGPolygonElement, O>): RxNode<SVGPolygonElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.polygon) }
export function PolyLine<O = void>(name: string, render?: Render<SVGPolylineElement, O>, superRender?: SuperRender<SVGPolylineElement, O>): RxNode<SVGPolylineElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.polyline) }
export function RadialGradient<O = void>(name: string, render?: Render<SVGRadialGradientElement, O>, superRender?: SuperRender<SVGRadialGradientElement, O>): RxNode<SVGRadialGradientElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.radialGradient) }
export function Rect<O = void>(name: string, render?: Render<SVGRectElement, O>, superRender?: SuperRender<SVGRectElement, O>): RxNode<SVGRectElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.rect) }
export function Stop<O = void>(name: string, render?: Render<SVGStopElement, O>, superRender?: SuperRender<SVGStopElement, O>): RxNode<SVGStopElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.stop) }
export function SvgSwitch<O = void>(name: string, render?: Render<SVGSwitchElement, O>, superRender?: SuperRender<SVGSwitchElement, O>): RxNode<SVGSwitchElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.switch) }
export function Symbol<O = void>(name: string, render?: Render<SVGSymbolElement, O>, superRender?: SuperRender<SVGSymbolElement, O>): RxNode<SVGSymbolElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.symbol) }
export function Text<O = void>(name: string, render?: Render<SVGTextElement, O>, superRender?: SuperRender<SVGTextElement, O>): RxNode<SVGTextElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.text) }
export function TextPath<O = void>(name: string, render?: Render<SVGTextPathElement, O>, superRender?: SuperRender<SVGTextPathElement, O>): RxNode<SVGTextPathElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.textPath) }
export function TSpan<O = void>(name: string, render?: Render<SVGTSpanElement, O>, superRender?: SuperRender<SVGTSpanElement, O>): RxNode<SVGTSpanElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.tspan) }
export function Use<O = void>(name: string, render?: Render<SVGUseElement, O>, superRender?: SuperRender<SVGUseElement, O>): RxNode<SVGUseElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.use) }
export function View<O = void>(name: string, render?: Render<SVGViewElement, O>, superRender?: SuperRender<SVGViewElement, O>): RxNode<SVGViewElement> { return RxDom.Node(name, undefined, render, superRender, SvgTags.view) }

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
