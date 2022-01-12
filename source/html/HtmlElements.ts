// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { RxDom, RxNode, RxRender, RxCustomize } from '../core/api'
import { RxHtmlNodeFactory, RxSvgNodeFactory } from './HtmlNodeFactory'

export function RxHtmlBody(name: string, triggers: unknown, render?: RxRender<HTMLElement>): RxNode<HTMLElement> {
  return RxDom.Node(name, triggers, render, undefined, {
    name, arranging: true,
    initialize(node: RxNode<HTMLElement, any>, sibling?: RxNode): void {
      const native = node.native = global.document.body
      native.id = node.name
    },
  })
}

export function RxA<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLAnchorElement, O>, customize?: RxCustomize<HTMLAnchorElement, O>, inline?: boolean): RxNode<HTMLAnchorElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.a, inline) }
export function RxAbbr<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.abbr, inline) }
export function RxAddress<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.address, inline) }
export function RxArea<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLAreaElement, O>, customize?: RxCustomize<HTMLAreaElement, O>, inline?: boolean): RxNode<HTMLAreaElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.area, inline) }
export function RxArticle<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.article, inline) }
export function RxAside<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.aside, inline) }
export function RxAudio<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLAudioElement, O>, customize?: RxCustomize<HTMLAudioElement, O>, inline?: boolean): RxNode<HTMLAudioElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.audio, inline) }
export function RxB<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.b, inline) }
export function RxBase<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLBaseElement, O>, customize?: RxCustomize<HTMLBaseElement, O>, inline?: boolean): RxNode<HTMLBaseElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.base, inline) }
export function RxBdi<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.bdi, inline) }
export function RxBdo<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.bdo, inline) }
export function RxBig<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.big, inline) }
export function RxBlockQuote<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.blockquote, inline) }
export function RxBody<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLBodyElement, O>, customize?: RxCustomize<HTMLBodyElement, O>, inline?: boolean): RxNode<HTMLBodyElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.body, inline) }
export function RxBR<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLBRElement, O>, customize?: RxCustomize<HTMLBRElement, O>, inline?: boolean): RxNode<HTMLBRElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.br, inline) }
export function RxButton<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLButtonElement, O>, customize?: RxCustomize<HTMLButtonElement, O>, inline?: boolean): RxNode<HTMLButtonElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.button, inline) }
export function RxCanvas<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLCanvasElement, O>, customize?: RxCustomize<HTMLCanvasElement, O>, inline?: boolean): RxNode<HTMLCanvasElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.canvas, inline) }
export function RxCaption<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLTableCaptionElement, O>, customize?: RxCustomize<HTMLTableCaptionElement, O>, inline?: boolean): RxNode<HTMLTableCaptionElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.caption, inline) }
export function RxCite<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.cite, inline) }
export function RxCode<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.code, inline) }
export function RxCol<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLTableColElement, O>, customize?: RxCustomize<HTMLTableColElement, O>, inline?: boolean): RxNode<HTMLTableColElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.col, inline) }
export function RxColGroup<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLTableColElement, O>, customize?: RxCustomize<HTMLTableColElement, O>, inline?: boolean): RxNode<HTMLTableColElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.colgroup, inline) }
export function RxData<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLDataElement, O>, customize?: RxCustomize<HTMLDataElement, O>, inline?: boolean): RxNode<HTMLDataElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.data, inline) }
export function RxDataList<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLDataListElement, O>, customize?: RxCustomize<HTMLDataListElement, O>, inline?: boolean): RxNode<HTMLDataListElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.datalist, inline) }
export function RxDD<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.dd, inline) }
export function RxDel<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.del, inline) }
export function RxDetails<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.details, inline) }
export function RxDfn<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.dfn, inline) }
export function RxDiv<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLDivElement, O>, customize?: RxCustomize<HTMLDivElement, O>, inline?: boolean): RxNode<HTMLDivElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.div, inline) }
export function RxDL<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLDListElement, O>, customize?: RxCustomize<HTMLDListElement, O>, inline?: boolean): RxNode<HTMLDListElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.dl, inline) }
export function RxDT<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.dt, inline) }
export function RxEM<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.em, inline) }
export function RxEmbed<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLEmbedElement, O>, customize?: RxCustomize<HTMLEmbedElement, O>, inline?: boolean): RxNode<HTMLEmbedElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.embed, inline) }
export function RxFieldSet<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLFieldSetElement, O>, customize?: RxCustomize<HTMLFieldSetElement, O>, inline?: boolean): RxNode<HTMLFieldSetElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.fieldset, inline) }
export function RxFigCaption<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.figcaption, inline) }
export function RxFigure<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.figure, inline) }
export function RxFooter<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.footer, inline) }
export function RxForm<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLFormElement, O>, customize?: RxCustomize<HTMLFormElement, O>, inline?: boolean): RxNode<HTMLFormElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.form, inline) }
export function RxH1<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLHeadingElement, O>, customize?: RxCustomize<HTMLHeadingElement, O>, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.h1, inline) }
export function RxH2<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLHeadingElement, O>, customize?: RxCustomize<HTMLHeadingElement, O>, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.h2, inline) }
export function RxH3<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLHeadingElement, O>, customize?: RxCustomize<HTMLHeadingElement, O>, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.h3, inline) }
export function RxH4<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLHeadingElement, O>, customize?: RxCustomize<HTMLHeadingElement, O>, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.h4, inline) }
export function RxH5<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLHeadingElement, O>, customize?: RxCustomize<HTMLHeadingElement, O>, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.h5, inline) }
export function RxH6<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLHeadingElement, O>, customize?: RxCustomize<HTMLHeadingElement, O>, inline?: boolean): RxNode<HTMLHeadingElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.h6, inline) }
export function RxHead<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLHeadElement, O>, customize?: RxCustomize<HTMLHeadElement, O>, inline?: boolean): RxNode<HTMLHeadElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.head, inline) }
export function RxHeader<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.header, inline) }
export function RxHGroup<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.hgroup, inline) }
export function RxHR<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLHRElement, O>, customize?: RxCustomize<HTMLHRElement, O>, inline?: boolean): RxNode<HTMLHRElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.hr, inline) }
export function RxHtml<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLHtmlElement, O>, customize?: RxCustomize<HTMLHtmlElement, O>, inline?: boolean): RxNode<HTMLHtmlElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.html, inline) }
export function RxI<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.i, inline) }
export function RxIFrame<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLIFrameElement, O>, customize?: RxCustomize<HTMLIFrameElement, O>, inline?: boolean): RxNode<HTMLIFrameElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.iframe, inline) }
export function RxImg<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLImageElement, O>, customize?: RxCustomize<HTMLImageElement, O>, inline?: boolean): RxNode<HTMLImageElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.img, inline) }
export function RxInput<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLInputElement, O>, customize?: RxCustomize<HTMLInputElement, O>, inline?: boolean): RxNode<HTMLInputElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.input, inline) }
export function RxIns<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLModElement, O>, customize?: RxCustomize<HTMLModElement, O>, inline?: boolean): RxNode<HTMLModElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.ins, inline) }
export function RxKbd<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.kbd, inline) }
export function RxKeygen<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.keygen, inline) }
export function RxLabel<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLLabelElement, O>, customize?: RxCustomize<HTMLLabelElement, O>, inline?: boolean): RxNode<HTMLLabelElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.label, inline) }
export function RxLegend<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLLegendElement, O>, customize?: RxCustomize<HTMLLegendElement, O>, inline?: boolean): RxNode<HTMLLegendElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.legend, inline) }
export function RxLI<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLLIElement, O>, customize?: RxCustomize<HTMLLIElement, O>, inline?: boolean): RxNode<HTMLLIElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.li, inline) }
export function RxLink<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLLinkElement, O>, customize?: RxCustomize<HTMLLinkElement, O>, inline?: boolean): RxNode<HTMLLinkElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.link, inline) }
export function RxMain<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.main, inline) }
export function RxMap<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLMapElement, O>, customize?: RxCustomize<HTMLMapElement, O>, inline?: boolean): RxNode<HTMLMapElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.map, inline) }
export function RxMark<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.mark, inline) }
export function RxMenu<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.menu, inline) }
export function RxMenuItem<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.menuitem, inline) }
export function RxMeta<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLMetaElement, O>, customize?: RxCustomize<HTMLMetaElement, O>, inline?: boolean): RxNode<HTMLMetaElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.meta, inline) }
export function RxMeter<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.meter, inline) }
export function RxNav<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.nav, inline) }
export function RxNoIndex<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.noindex, inline) }
export function RxNoScript<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.noscript, inline) }
export function RxObj<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLObjectElement, O>, customize?: RxCustomize<HTMLObjectElement, O>, inline?: boolean): RxNode<HTMLObjectElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.object, inline) }
export function RxOL<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLOListElement, O>, customize?: RxCustomize<HTMLOListElement, O>, inline?: boolean): RxNode<HTMLOListElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.ol, inline) }
export function RxOptGroup<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLOptGroupElement, O>, customize?: RxCustomize<HTMLOptGroupElement, O>, inline?: boolean): RxNode<HTMLOptGroupElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.optgroup, inline) }
export function RxOption<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLOptionElement, O>, customize?: RxCustomize<HTMLOptionElement, O>, inline?: boolean): RxNode<HTMLOptionElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.option, inline) }
export function RxOutput<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.output, inline) }
export function RxP<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLParagraphElement, O>, customize?: RxCustomize<HTMLParagraphElement, O>, inline?: boolean): RxNode<HTMLParagraphElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.p, inline) }
export function RxParam<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLParamElement, O>, customize?: RxCustomize<HTMLParamElement, O>, inline?: boolean): RxNode<HTMLParamElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.param, inline) }
export function RxPicture<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.picture, inline) }
export function RxPre<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLPreElement, O>, customize?: RxCustomize<HTMLPreElement, O>, inline?: boolean): RxNode<HTMLPreElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.pre, inline) }
export function RxProgress<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLProgressElement, O>, customize?: RxCustomize<HTMLProgressElement, O>, inline?: boolean): RxNode<HTMLProgressElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.progress, inline) }
export function RxQ<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLQuoteElement, O>, customize?: RxCustomize<HTMLQuoteElement, O>, inline?: boolean): RxNode<HTMLQuoteElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.q, inline) }
export function RxRP<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.rp, inline) }
export function RxRT<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.rt, inline) }
export function RxRuby<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.ruby, inline) }
export function RxS<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.s, inline) }
export function RxSamp<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.samp, inline) }
export function RxScript<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLScriptElement, O>, customize?: RxCustomize<HTMLScriptElement, O>, inline?: boolean): RxNode<HTMLScriptElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.script, inline) }
export function RxSection<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.section, inline) }
export function RxSelect<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLSelectElement, O>, customize?: RxCustomize<HTMLSelectElement, O>, inline?: boolean): RxNode<HTMLSelectElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.select, inline) }
export function RxSmall<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.small, inline) }
export function RxSource<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLSourceElement, O>, customize?: RxCustomize<HTMLSourceElement, O>, inline?: boolean): RxNode<HTMLSourceElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.source, inline) }
export function RxSpan<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLSpanElement, O>, customize?: RxCustomize<HTMLSpanElement, O>, inline?: boolean): RxNode<HTMLSpanElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.span, inline) }
export function RxStrong<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.strong, inline) }
export function RxStyle<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLStyleElement, O>, customize?: RxCustomize<HTMLStyleElement, O>, inline?: boolean): RxNode<HTMLStyleElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.style, inline) }
export function RxSub<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.sub, inline) }
export function RxSummary<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.summary, inline) }
export function RxSup<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.sup, inline) }
export function RxTable<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLTableElement, O>, customize?: RxCustomize<HTMLTableElement, O>, inline?: boolean): RxNode<HTMLTableElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.table, inline) }
export function RxTemplate<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLTemplateElement, O>, customize?: RxCustomize<HTMLTemplateElement, O>, inline?: boolean): RxNode<HTMLTemplateElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.template, inline) }
export function RxTBody<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLTableSectionElement, O>, customize?: RxCustomize<HTMLTableSectionElement, O>, inline?: boolean): RxNode<HTMLTableSectionElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.tbody, inline) }
export function RxTD<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLTableCellElement, O>, customize?: RxCustomize<HTMLTableCellElement, O>, inline?: boolean): RxNode<HTMLTableCellElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.td, inline) }
export function RxTextArea<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLTextAreaElement, O>, customize?: RxCustomize<HTMLTextAreaElement, O>, inline?: boolean): RxNode<HTMLTextAreaElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.textarea, inline) }
export function RxTFoot<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLTableSectionElement, O>, customize?: RxCustomize<HTMLTableSectionElement, O>, inline?: boolean): RxNode<HTMLTableSectionElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.tfoot, inline) }
export function RxTH<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLTableCellElement, O>, customize?: RxCustomize<HTMLTableCellElement, O>, inline?: boolean): RxNode<HTMLTableCellElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.th, inline) }
export function RxTHead<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLTableSectionElement, O>, customize?: RxCustomize<HTMLTableSectionElement, O>, inline?: boolean): RxNode<HTMLTableSectionElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.thead, inline) }
export function RxTime<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.time, inline) }
export function RxTitle<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLTitleElement, O>, customize?: RxCustomize<HTMLTitleElement, O>, inline?: boolean): RxNode<HTMLTitleElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.title, inline) }
export function RxTR<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLTableRowElement, O>, customize?: RxCustomize<HTMLTableRowElement, O>, inline?: boolean): RxNode<HTMLTableRowElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.tr, inline) }
export function RxTrack<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLTrackElement, O>, customize?: RxCustomize<HTMLTrackElement, O>, inline?: boolean): RxNode<HTMLTrackElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.track, inline) }
export function RxU<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.u, inline) }
export function RxUL<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLUListElement, O>, customize?: RxCustomize<HTMLUListElement, O>, inline?: boolean): RxNode<HTMLUListElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.ul, inline) }
export function RxVar<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.var, inline) }
export function RxVideo<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLVideoElement, O>, customize?: RxCustomize<HTMLVideoElement, O>, inline?: boolean): RxNode<HTMLVideoElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.video, inline) }
export function RxWbr<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, inline?: boolean): RxNode<HTMLElement, O> { return RxDom.Node(name, triggers, render, customize, HtmlTags.wbr, inline) }

export function A<O = void>(name: string, render?: RxRender<HTMLAnchorElement, O>, customize?: RxCustomize<HTMLAnchorElement, O>): RxNode<HTMLAnchorElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.a, true) }
export function Abbr<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.abbr, true) }
export function Address<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.address, true) }
export function Area<O = void>(name: string, render?: RxRender<HTMLAreaElement, O>, customize?: RxCustomize<HTMLAreaElement, O>): RxNode<HTMLAreaElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.area, true) }
export function Article<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.article, true) }
export function Aside<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.aside, true) }
export function Audio<O = void>(name: string, render?: RxRender<HTMLAudioElement, O>, customize?: RxCustomize<HTMLAudioElement, O>): RxNode<HTMLAudioElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.audio, true) }
export function B<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.b, true) }
export function Base<O = void>(name: string, render?: RxRender<HTMLBaseElement, O>, customize?: RxCustomize<HTMLBaseElement, O>): RxNode<HTMLBaseElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.base, true) }
export function Bdi<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.bdi, true) }
export function Bdo<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.bdo, true) }
export function Big<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.big, true) }
export function BlockQuote<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.blockquote, true) }
export function Body<O = void>(name: string, render?: RxRender<HTMLBodyElement, O>, customize?: RxCustomize<HTMLBodyElement, O>): RxNode<HTMLBodyElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.body, true) }
export function BR<O = void>(name: string, render?: RxRender<HTMLBRElement, O>, customize?: RxCustomize<HTMLBRElement, O>): RxNode<HTMLBRElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.br, true) }
export function Button<O = void>(name: string, render?: RxRender<HTMLButtonElement, O>, customize?: RxCustomize<HTMLButtonElement, O>): RxNode<HTMLButtonElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.button, true) }
export function Canvas<O = void>(name: string, render?: RxRender<HTMLCanvasElement, O>, customize?: RxCustomize<HTMLCanvasElement, O>): RxNode<HTMLCanvasElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.canvas, true) }
export function Caption<O = void>(name: string, render?: RxRender<HTMLTableCaptionElement, O>, customize?: RxCustomize<HTMLTableCaptionElement, O>): RxNode<HTMLTableCaptionElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.caption, true) }
export function Cite<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.cite, true) }
export function Code<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.code, true) }
export function Col<O = void>(name: string, render?: RxRender<HTMLTableColElement, O>, customize?: RxCustomize<HTMLTableColElement, O>): RxNode<HTMLTableColElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.col, true) }
export function ColGroup<O = void>(name: string, render?: RxRender<HTMLTableColElement, O>, customize?: RxCustomize<HTMLTableColElement, O>): RxNode<HTMLTableColElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.colgroup, true) }
export function Data<O = void>(name: string, render?: RxRender<HTMLDataElement, O>, customize?: RxCustomize<HTMLDataElement, O>): RxNode<HTMLDataElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.data, true) }
export function DataList<O = void>(name: string, render?: RxRender<HTMLDataListElement, O>, customize?: RxCustomize<HTMLDataListElement, O>): RxNode<HTMLDataListElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.datalist, true) }
export function DD<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.dd, true) }
export function Del<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.del, true) }
export function Details<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.details, true) }
export function Dfn<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.dfn, true) }
export function Div<O = void>(name: string, render?: RxRender<HTMLDivElement, O>, customize?: RxCustomize<HTMLDivElement, O>): RxNode<HTMLDivElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.div, true) }
export function DL<O = void>(name: string, render?: RxRender<HTMLDListElement, O>, customize?: RxCustomize<HTMLDListElement, O>): RxNode<HTMLDListElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.dl, true) }
export function DT<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.dt, true) }
export function EM<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.em, true) }
export function Embed<O = void>(name: string, render?: RxRender<HTMLEmbedElement, O>, customize?: RxCustomize<HTMLEmbedElement, O>): RxNode<HTMLEmbedElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.embed, true) }
export function FieldSet<O = void>(name: string, render?: RxRender<HTMLFieldSetElement, O>, customize?: RxCustomize<HTMLFieldSetElement, O>): RxNode<HTMLFieldSetElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.fieldset, true) }
export function FigCaption<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.figcaption, true) }
export function Figure<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.figure, true) }
export function Footer<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.footer, true) }
export function Form<O = void>(name: string, render?: RxRender<HTMLFormElement, O>, customize?: RxCustomize<HTMLFormElement, O>): RxNode<HTMLFormElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.form, true) }
export function H1<O = void>(name: string, render?: RxRender<HTMLHeadingElement, O>, customize?: RxCustomize<HTMLHeadingElement, O>): RxNode<HTMLHeadingElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.h1, true) }
export function H2<O = void>(name: string, render?: RxRender<HTMLHeadingElement, O>, customize?: RxCustomize<HTMLHeadingElement, O>): RxNode<HTMLHeadingElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.h2, true) }
export function H3<O = void>(name: string, render?: RxRender<HTMLHeadingElement, O>, customize?: RxCustomize<HTMLHeadingElement, O>): RxNode<HTMLHeadingElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.h3, true) }
export function H4<O = void>(name: string, render?: RxRender<HTMLHeadingElement, O>, customize?: RxCustomize<HTMLHeadingElement, O>): RxNode<HTMLHeadingElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.h4, true) }
export function H5<O = void>(name: string, render?: RxRender<HTMLHeadingElement, O>, customize?: RxCustomize<HTMLHeadingElement, O>): RxNode<HTMLHeadingElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.h5, true) }
export function H6<O = void>(name: string, render?: RxRender<HTMLHeadingElement, O>, customize?: RxCustomize<HTMLHeadingElement, O>): RxNode<HTMLHeadingElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.h6, true) }
export function Head<O = void>(name: string, render?: RxRender<HTMLHeadElement, O>, customize?: RxCustomize<HTMLHeadElement, O>): RxNode<HTMLHeadElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.head, true) }
export function Header<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.header, true) }
export function HGroup<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.hgroup, true) }
export function HR<O = void>(name: string, render?: RxRender<HTMLHRElement, O>, customize?: RxCustomize<HTMLHRElement, O>): RxNode<HTMLHRElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.hr, true) }
export function Html<O = void>(name: string, render?: RxRender<HTMLHtmlElement, O>, customize?: RxCustomize<HTMLHtmlElement, O>): RxNode<HTMLHtmlElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.html, true) }
export function I<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.i, true) }
export function IFrame<O = void>(name: string, render?: RxRender<HTMLIFrameElement, O>, customize?: RxCustomize<HTMLIFrameElement, O>): RxNode<HTMLIFrameElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.iframe, true) }
export function Img<O = void>(name: string, render?: RxRender<HTMLImageElement, O>, customize?: RxCustomize<HTMLImageElement, O>): RxNode<HTMLImageElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.img, true) }
export function Input<O = void>(name: string, render?: RxRender<HTMLInputElement, O>, customize?: RxCustomize<HTMLInputElement, O>): RxNode<HTMLInputElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.input, true) }
export function Ins<O = void>(name: string, render?: RxRender<HTMLModElement, O>, customize?: RxCustomize<HTMLModElement, O>): RxNode<HTMLModElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.ins, true) }
export function Kbd<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.kbd, true) }
export function KeyGen<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.keygen, true) }
export function Label<O = void>(name: string, render?: RxRender<HTMLLabelElement, O>, customize?: RxCustomize<HTMLLabelElement, O>): RxNode<HTMLLabelElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.label, true) }
export function Legend<O = void>(name: string, render?: RxRender<HTMLLegendElement, O>, customize?: RxCustomize<HTMLLegendElement, O>): RxNode<HTMLLegendElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.legend, true) }
export function LI<O = void>(name: string, render?: RxRender<HTMLLIElement, O>, customize?: RxCustomize<HTMLLIElement, O>): RxNode<HTMLLIElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.li, true) }
export function Link<O = void>(name: string, render?: RxRender<HTMLLinkElement, O>, customize?: RxCustomize<HTMLLinkElement, O>): RxNode<HTMLLinkElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.link, true) }
export function Main<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.main, true) }
export function Map<O = void>(name: string, render?: RxRender<HTMLMapElement, O>, customize?: RxCustomize<HTMLMapElement, O>): RxNode<HTMLMapElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.map, true) }
export function Mark<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.mark, true) }
export function Menu<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.menu, true) }
export function MenuItem<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.menuitem, true) }
export function Meta<O = void>(name: string, render?: RxRender<HTMLMetaElement, O>, customize?: RxCustomize<HTMLMetaElement, O>): RxNode<HTMLMetaElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.meta, true) }
export function Meter<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.meter, true) }
export function Nav<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.nav, true) }
export function NoIndex<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.noindex, true) }
export function NoScript<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.noscript, true) }
export function Obj<O = void>(name: string, render?: RxRender<HTMLObjectElement, O>, customize?: RxCustomize<HTMLObjectElement, O>): RxNode<HTMLObjectElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.object, true) }
export function OL<O = void>(name: string, render?: RxRender<HTMLOListElement, O>, customize?: RxCustomize<HTMLOListElement, O>): RxNode<HTMLOListElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.ol, true) }
export function OptGroup<O = void>(name: string, render?: RxRender<HTMLOptGroupElement, O>, customize?: RxCustomize<HTMLOptGroupElement, O>): RxNode<HTMLOptGroupElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.optgroup, true) }
export function Option<O = void>(name: string, render?: RxRender<HTMLOptionElement, O>, customize?: RxCustomize<HTMLOptionElement, O>): RxNode<HTMLOptionElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.option, true) }
export function Output<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.output, true) }
export function P<O = void>(name: string, render?: RxRender<HTMLParagraphElement, O>, customize?: RxCustomize<HTMLParagraphElement, O>): RxNode<HTMLParagraphElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.p, true) }
export function Param<O = void>(name: string, render?: RxRender<HTMLParamElement, O>, customize?: RxCustomize<HTMLParamElement, O>): RxNode<HTMLParamElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.param, true) }
export function Picture<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.picture, true) }
export function Pre<O = void>(name: string, render?: RxRender<HTMLPreElement, O>, customize?: RxCustomize<HTMLPreElement, O>): RxNode<HTMLPreElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.pre, true) }
export function Progress<O = void>(name: string, render?: RxRender<HTMLProgressElement, O>, customize?: RxCustomize<HTMLProgressElement, O>): RxNode<HTMLProgressElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.progress, true) }
export function Q<O = void>(name: string, render?: RxRender<HTMLQuoteElement, O>, customize?: RxCustomize<HTMLQuoteElement, O>): RxNode<HTMLQuoteElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.q, true) }
export function RP<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.rp, true) }
export function RT<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.rt, true) }
export function Ruby<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.ruby, true) }
export function S<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.s, true) }
export function Samp<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.samp, true) }
export function Script<O = void>(name: string, render?: RxRender<HTMLScriptElement, O>, customize?: RxCustomize<HTMLScriptElement, O>): RxNode<HTMLScriptElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.script, true) }
export function Section<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.section, true) }
export function Select<O = void>(name: string, render?: RxRender<HTMLSelectElement, O>, customize?: RxCustomize<HTMLSelectElement, O>): RxNode<HTMLSelectElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.select, true) }
export function Small<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.small, true) }
export function Source<O = void>(name: string, render?: RxRender<HTMLSourceElement, O>, customize?: RxCustomize<HTMLSourceElement, O>): RxNode<HTMLSourceElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.source, true) }
export function Span<O = void>(name: string, render?: RxRender<HTMLSpanElement, O>, customize?: RxCustomize<HTMLSpanElement, O>): RxNode<HTMLSpanElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.span, true) }
export function Strong<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.strong, true) }
export function Style<O = void>(name: string, render?: RxRender<HTMLStyleElement, O>, customize?: RxCustomize<HTMLStyleElement, O>): RxNode<HTMLStyleElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.style, true) }
export function Sub<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.sub, true) }
export function Summary<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.summary, true) }
export function Sup<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.sup, true) }
export function Table<O = void>(name: string, render?: RxRender<HTMLTableElement, O>, customize?: RxCustomize<HTMLTableElement, O>): RxNode<HTMLTableElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.table, true) }
export function Template<O = void>(name: string, render?: RxRender<HTMLTemplateElement, O>, customize?: RxCustomize<HTMLTemplateElement, O>): RxNode<HTMLTemplateElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.template, true) }
export function TBody<O = void>(name: string, render?: RxRender<HTMLTableSectionElement, O>, customize?: RxCustomize<HTMLTableSectionElement, O>): RxNode<HTMLTableSectionElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.tbody, true) }
export function TD<O = void>(name: string, render?: RxRender<HTMLTableCellElement, O>, customize?: RxCustomize<HTMLTableCellElement, O>): RxNode<HTMLTableCellElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.td, true) }
export function TextArea<O = void>(name: string, render?: RxRender<HTMLTextAreaElement, O>, customize?: RxCustomize<HTMLTextAreaElement, O>): RxNode<HTMLTextAreaElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.textarea, true) }
export function TFoot<O = void>(name: string, render?: RxRender<HTMLTableSectionElement, O>, customize?: RxCustomize<HTMLTableSectionElement, O>): RxNode<HTMLTableSectionElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.tfoot, true) }
export function TH<O = void>(name: string, render?: RxRender<HTMLTableCellElement, O>, customize?: RxCustomize<HTMLTableCellElement, O>): RxNode<HTMLTableCellElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.th, true) }
export function THead<O = void>(name: string, render?: RxRender<HTMLTableSectionElement, O>, customize?: RxCustomize<HTMLTableSectionElement, O>): RxNode<HTMLTableSectionElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.thead, true) }
export function Time<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.time, true) }
export function Title<O = void>(name: string, render?: RxRender<HTMLTitleElement, O>, customize?: RxCustomize<HTMLTitleElement, O>): RxNode<HTMLTitleElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.title, true) }
export function TR<O = void>(name: string, render?: RxRender<HTMLTableRowElement, O>, customize?: RxCustomize<HTMLTableRowElement, O>): RxNode<HTMLTableRowElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.tr, true) }
export function Track<O = void>(name: string, render?: RxRender<HTMLTrackElement, O>, customize?: RxCustomize<HTMLTrackElement, O>): RxNode<HTMLTrackElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.track, true) }
export function U<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.u, true) }
export function UL<O = void>(name: string, render?: RxRender<HTMLUListElement, O>, customize?: RxCustomize<HTMLUListElement, O>): RxNode<HTMLUListElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.ul, true) }
export function Var<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.var, true) }
export function Video<O = void>(name: string, render?: RxRender<HTMLVideoElement, O>, customize?: RxCustomize<HTMLVideoElement, O>): RxNode<HTMLVideoElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.video, true) }
export function Wbr<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxDom.Node(name, undefined, render, customize, HtmlTags.wbr, true) }

export function RxSvg<O = void>(name: string, triggers: unknown, render?: RxRender<SVGSVGElement, O>, customize?: RxCustomize<SVGSVGElement, O>): RxNode<SVGSVGElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.svg) }
export function RxSvgA<O = void>(name: string, triggers: unknown, render?: RxRender<SVGAElement, O>, customize?: RxCustomize<SVGAElement, O>): RxNode<SVGAElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.a) }
export function RxAnimate<O = void>(name: string, triggers: unknown, render?: RxRender<SVGAnimateElement, O>, customize?: RxCustomize<SVGAnimateElement, O>): RxNode<SVGAnimateElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.animate) }
export function RxAnimateMotion<O = void>(name: string, triggers: unknown, render?: RxRender<SVGAnimateMotionElement, O>, customize?: RxCustomize<SVGAnimateMotionElement, O>): RxNode<SVGAnimateMotionElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.animateMotion) }
export function RxAnimateTransform<O = void>(name: string, triggers: unknown, render?: RxRender<SVGAnimateTransformElement, O>, customize?: RxCustomize<SVGAnimateTransformElement, O>): RxNode<SVGAnimateTransformElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.animateTransform) }
export function RxCircle<O = void>(name: string, triggers: unknown, render?: RxRender<SVGCircleElement, O>, customize?: RxCustomize<SVGCircleElement, O>): RxNode<SVGCircleElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.circle) }
export function RxClipPath<O = void>(name: string, triggers: unknown, render?: RxRender<SVGClipPathElement, O>, customize?: RxCustomize<SVGClipPathElement, O>): RxNode<SVGClipPathElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.clipPath) }
export function RxDefs<O = void>(name: string, triggers: unknown, render?: RxRender<SVGDefsElement, O>, customize?: RxCustomize<SVGDefsElement, O>): RxNode<SVGDefsElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.defs) }
export function RxDesc<O = void>(name: string, triggers: unknown, render?: RxRender<SVGDescElement, O>, customize?: RxCustomize<SVGDescElement, O>): RxNode<SVGDescElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.desc) }
export function RxEllipse<O = void>(name: string, triggers: unknown, render?: RxRender<SVGEllipseElement, O>, customize?: RxCustomize<SVGEllipseElement, O>): RxNode<SVGEllipseElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.ellipse) }
export function RxFeBlend<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEBlendElement, O>, customize?: RxCustomize<SVGFEBlendElement, O>): RxNode<SVGFEBlendElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.feBlend) }
export function RxFeColorMatrix<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEColorMatrixElement, O>, customize?: RxCustomize<SVGFEColorMatrixElement, O>): RxNode<SVGFEColorMatrixElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.feColorMatrix) }
export function RxFeComponentTransfer<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEComponentTransferElement, O>, customize?: RxCustomize<SVGFEComponentTransferElement, O>): RxNode<SVGFEComponentTransferElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.feComponentTransfer) }
export function RxFeComposite<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFECompositeElement, O>, customize?: RxCustomize<SVGFECompositeElement, O>): RxNode<SVGFECompositeElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.feComposite) }
export function RxFeConvolveMatrix<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEConvolveMatrixElement, O>, customize?: RxCustomize<SVGFEConvolveMatrixElement, O>): RxNode<SVGFEConvolveMatrixElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.feConvolveMatrix) }
export function RxFeDiffuseLighting<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEDiffuseLightingElement, O>, customize?: RxCustomize<SVGFEDiffuseLightingElement, O>): RxNode<SVGFEDiffuseLightingElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.feDiffuseLighting) }
export function RxFeDisplacementMap<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEDisplacementMapElement, O>, customize?: RxCustomize<SVGFEDisplacementMapElement, O>): RxNode<SVGFEDisplacementMapElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.feDisplacementMap) }
export function RxFeDistantLight<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEDistantLightElement, O>, customize?: RxCustomize<SVGFEDistantLightElement, O>): RxNode<SVGFEDistantLightElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.feDistantLight) }
export function RxFeDropShadow<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEDropShadowElement, O>, customize?: RxCustomize<SVGFEDropShadowElement, O>): RxNode<SVGFEDropShadowElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.feDropShadow) }
export function RxFeFlood<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEFloodElement, O>, customize?: RxCustomize<SVGFEFloodElement, O>): RxNode<SVGFEFloodElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.feFlood) }
export function RxFeFuncA<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEFuncAElement, O>, customize?: RxCustomize<SVGFEFuncAElement, O>): RxNode<SVGFEFuncAElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.feFuncA) }
export function RxFeFuncB<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEFuncBElement, O>, customize?: RxCustomize<SVGFEFuncBElement, O>): RxNode<SVGFEFuncBElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.feFuncB) }
export function RxFeFuncG<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEFuncGElement, O>, customize?: RxCustomize<SVGFEFuncGElement, O>): RxNode<SVGFEFuncGElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.feFuncG) }
export function RxFeFuncR<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEFuncRElement, O>, customize?: RxCustomize<SVGFEFuncRElement, O>): RxNode<SVGFEFuncRElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.feFuncR) }
export function RxFeGaussianBlur<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEGaussianBlurElement, O>, customize?: RxCustomize<SVGFEGaussianBlurElement, O>): RxNode<SVGFEGaussianBlurElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.feGaussianBlur) }
export function RxFeImage<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEImageElement, O>, customize?: RxCustomize<SVGFEImageElement, O>): RxNode<SVGFEImageElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.feImage) }
export function RxFeMerge<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEMergeElement, O>, customize?: RxCustomize<SVGFEMergeElement, O>): RxNode<SVGFEMergeElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.feMerge) }
export function RxFeMergeNode<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEMergeNodeElement, O>, customize?: RxCustomize<SVGFEMergeNodeElement, O>): RxNode<SVGFEMergeNodeElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.feMergeNode) }
export function RxFeMorphology<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEMorphologyElement, O>, customize?: RxCustomize<SVGFEMorphologyElement, O>): RxNode<SVGFEMorphologyElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.feMorphology) }
export function RxFeOffset<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEOffsetElement, O>, customize?: RxCustomize<SVGFEOffsetElement, O>): RxNode<SVGFEOffsetElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.feOffset) }
export function RxFePointLight<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEPointLightElement, O>, customize?: RxCustomize<SVGFEPointLightElement, O>): RxNode<SVGFEPointLightElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.fePointLight) }
export function RxFeSpecularLighting<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFESpecularLightingElement, O>, customize?: RxCustomize<SVGFESpecularLightingElement, O>): RxNode<SVGFESpecularLightingElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.feSpecularLighting) }
export function RxFeSpotLight<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFESpotLightElement, O>, customize?: RxCustomize<SVGFESpotLightElement, O>): RxNode<SVGFESpotLightElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.feSpotLight) }
export function RxFeTile<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFETileElement, O>, customize?: RxCustomize<SVGFETileElement, O>): RxNode<SVGFETileElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.feTile) }
export function RxFeTurbulence<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFETurbulenceElement, O>, customize?: RxCustomize<SVGFETurbulenceElement, O>): RxNode<SVGFETurbulenceElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.feTurbulence) }
export function RxFilter<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFilterElement, O>, customize?: RxCustomize<SVGFilterElement, O>): RxNode<SVGFilterElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.filter) }
export function RxForeignObject<O = void>(name: string, triggers: unknown, render?: RxRender<SVGForeignObjectElement, O>, customize?: RxCustomize<SVGForeignObjectElement, O>): RxNode<SVGForeignObjectElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.foreignObject) }
export function RxG<O = void>(name: string, triggers: unknown, render?: RxRender<SVGGElement, O>, customize?: RxCustomize<SVGGElement, O>): RxNode<SVGGElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.g) }
export function RxSvgImage<O = void>(name: string, triggers: unknown, render?: RxRender<SVGImageElement, O>, customize?: RxCustomize<SVGImageElement, O>): RxNode<SVGImageElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.image) }
export function RxLine<O = void>(name: string, triggers: unknown, render?: RxRender<SVGLineElement, O>, customize?: RxCustomize<SVGLineElement, O>): RxNode<SVGLineElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.line) }
export function RxLinearGradient<O = void>(name: string, triggers: unknown, render?: RxRender<SVGLinearGradientElement, O>, customize?: RxCustomize<SVGLinearGradientElement, O>): RxNode<SVGLinearGradientElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.linearGradient) }
export function RxMarker<O = void>(name: string, triggers: unknown, render?: RxRender<SVGMarkerElement, O>, customize?: RxCustomize<SVGMarkerElement, O>): RxNode<SVGMarkerElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.marker) }
export function RxMask<O = void>(name: string, triggers: unknown, render?: RxRender<SVGMaskElement, O>, customize?: RxCustomize<SVGMaskElement, O>): RxNode<SVGMaskElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.mask) }
export function RxMetadata<O = void>(name: string, triggers: unknown, render?: RxRender<SVGMetadataElement, O>, customize?: RxCustomize<SVGMetadataElement, O>): RxNode<SVGMetadataElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.metadata) }
export function RxMPath<O = void>(name: string, triggers: unknown, render?: RxRender<SVGElement, O>, customize?: RxCustomize<SVGElement, O>): RxNode<SVGElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.mpath) }
export function RxPath<O = void>(name: string, triggers: unknown, render?: RxRender<SVGPathElement, O>, customize?: RxCustomize<SVGPathElement, O>): RxNode<SVGPathElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.path) }
export function RxPattern<O = void>(name: string, triggers: unknown, render?: RxRender<SVGPatternElement, O>, customize?: RxCustomize<SVGPatternElement, O>): RxNode<SVGPatternElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.pattern) }
export function RxPolygon<O = void>(name: string, triggers: unknown, render?: RxRender<SVGPolygonElement, O>, customize?: RxCustomize<SVGPolygonElement, O>): RxNode<SVGPolygonElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.polygon) }
export function RxPolyline<O = void>(name: string, triggers: unknown, render?: RxRender<SVGPolylineElement, O>, customize?: RxCustomize<SVGPolylineElement, O>): RxNode<SVGPolylineElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.polyline) }
export function RxRadialGradient<O = void>(name: string, triggers: unknown, render?: RxRender<SVGRadialGradientElement, O>, customize?: RxCustomize<SVGRadialGradientElement, O>): RxNode<SVGRadialGradientElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.radialGradient) }
export function RxRect<O = void>(name: string, triggers: unknown, render?: RxRender<SVGRectElement, O>, customize?: RxCustomize<SVGRectElement, O>): RxNode<SVGRectElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.rect) }
export function RxStop<O = void>(name: string, triggers: unknown, render?: RxRender<SVGStopElement, O>, customize?: RxCustomize<SVGStopElement, O>): RxNode<SVGStopElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.stop) }
export function RxSvgSwitch<O = void>(name: string, triggers: unknown, render?: RxRender<SVGSwitchElement, O>, customize?: RxCustomize<SVGSwitchElement, O>): RxNode<SVGSwitchElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.switch) }
export function RxSymbol<O = void>(name: string, triggers: unknown, render?: RxRender<SVGSymbolElement, O>, customize?: RxCustomize<SVGSymbolElement, O>): RxNode<SVGSymbolElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.symbol) }
export function RxText<O = void>(name: string, triggers: unknown, render?: RxRender<SVGTextElement, O>, customize?: RxCustomize<SVGTextElement, O>): RxNode<SVGTextElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.text) }
export function RxTextPath<O = void>(name: string, triggers: unknown, render?: RxRender<SVGTextPathElement, O>, customize?: RxCustomize<SVGTextPathElement, O>): RxNode<SVGTextPathElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.textPath) }
export function RxTSpan<O = void>(name: string, triggers: unknown, render?: RxRender<SVGTSpanElement, O>, customize?: RxCustomize<SVGTSpanElement, O>): RxNode<SVGTSpanElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.tspan) }
export function RxUse<O = void>(name: string, triggers: unknown, render?: RxRender<SVGUseElement, O>, customize?: RxCustomize<SVGUseElement, O>): RxNode<SVGUseElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.use) }
export function RxView<O = void>(name: string, triggers: unknown, render?: RxRender<SVGViewElement, O>, customize?: RxCustomize<SVGViewElement, O>): RxNode<SVGViewElement, O> { return RxDom.Node(name, triggers, render, customize, SvgTags.view) }

export function Svg<O = void>(name: string, render?: RxRender<SVGSVGElement, O>, customize?: RxCustomize<SVGSVGElement, O>): RxNode<SVGSVGElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.svg) }
export function SvgA<O = void>(name: string, render?: RxRender<SVGAElement, O>, customize?: RxCustomize<SVGAElement, O>): RxNode<SVGAElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.a) }
export function Animate<O = void>(name: string, render?: RxRender<SVGAnimateElement, O>, customize?: RxCustomize<SVGAnimateElement, O>): RxNode<SVGAnimateElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.animate) }
export function AnimateMotion<O = void>(name: string, render?: RxRender<SVGAnimateMotionElement, O>, customize?: RxCustomize<SVGAnimateMotionElement, O>): RxNode<SVGAnimateMotionElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.animateMotion) }
export function AnimateTransform<O = void>(name: string, render?: RxRender<SVGAnimateTransformElement, O>, customize?: RxCustomize<SVGAnimateTransformElement, O>): RxNode<SVGAnimateTransformElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.animateTransform) }
export function Circle<O = void>(name: string, render?: RxRender<SVGCircleElement, O>, customize?: RxCustomize<SVGCircleElement, O>): RxNode<SVGCircleElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.circle) }
export function ClipPath<O = void>(name: string, render?: RxRender<SVGClipPathElement, O>, customize?: RxCustomize<SVGClipPathElement, O>): RxNode<SVGClipPathElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.clipPath) }
export function Defs<O = void>(name: string, render?: RxRender<SVGDefsElement, O>, customize?: RxCustomize<SVGDefsElement, O>): RxNode<SVGDefsElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.defs) }
export function Desc<O = void>(name: string, render?: RxRender<SVGDescElement, O>, customize?: RxCustomize<SVGDescElement, O>): RxNode<SVGDescElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.desc) }
export function Ellipse<O = void>(name: string, render?: RxRender<SVGEllipseElement, O>, customize?: RxCustomize<SVGEllipseElement, O>): RxNode<SVGEllipseElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.ellipse) }
export function FeBlend<O = void>(name: string, render?: RxRender<SVGFEBlendElement, O>, customize?: RxCustomize<SVGFEBlendElement, O>): RxNode<SVGFEBlendElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.feBlend) }
export function FeColorMatrix<O = void>(name: string, render?: RxRender<SVGFEColorMatrixElement, O>, customize?: RxCustomize<SVGFEColorMatrixElement, O>): RxNode<SVGFEColorMatrixElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.feColorMatrix) }
export function FeComponentTransfer<O = void>(name: string, render?: RxRender<SVGFEComponentTransferElement, O>, customize?: RxCustomize<SVGFEComponentTransferElement, O>): RxNode<SVGFEComponentTransferElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.feComponentTransfer) }
export function FeComposite<O = void>(name: string, render?: RxRender<SVGFECompositeElement, O>, customize?: RxCustomize<SVGFECompositeElement, O>): RxNode<SVGFECompositeElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.feComposite) }
export function FeConvolveMatrix<O = void>(name: string, render?: RxRender<SVGFEConvolveMatrixElement, O>, customize?: RxCustomize<SVGFEConvolveMatrixElement, O>): RxNode<SVGFEConvolveMatrixElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.feConvolveMatrix) }
export function FeDiffuseLighting<O = void>(name: string, render?: RxRender<SVGFEDiffuseLightingElement, O>, customize?: RxCustomize<SVGFEDiffuseLightingElement, O>): RxNode<SVGFEDiffuseLightingElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.feDiffuseLighting) }
export function FeDisplacementMap<O = void>(name: string, render?: RxRender<SVGFEDisplacementMapElement, O>, customize?: RxCustomize<SVGFEDisplacementMapElement, O>): RxNode<SVGFEDisplacementMapElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.feDisplacementMap) }
export function FeDistantLight<O = void>(name: string, render?: RxRender<SVGFEDistantLightElement, O>, customize?: RxCustomize<SVGFEDistantLightElement, O>): RxNode<SVGFEDistantLightElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.feDistantLight) }
export function FeDropShadow<O = void>(name: string, render?: RxRender<SVGFEDropShadowElement, O>, customize?: RxCustomize<SVGFEDropShadowElement, O>): RxNode<SVGFEDropShadowElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.feDropShadow) }
export function FeFlood<O = void>(name: string, render?: RxRender<SVGFEFloodElement, O>, customize?: RxCustomize<SVGFEFloodElement, O>): RxNode<SVGFEFloodElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.feFlood) }
export function FeFuncA<O = void>(name: string, render?: RxRender<SVGFEFuncAElement, O>, customize?: RxCustomize<SVGFEFuncAElement, O>): RxNode<SVGFEFuncAElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.feFuncA) }
export function FeFuncB<O = void>(name: string, render?: RxRender<SVGFEFuncBElement, O>, customize?: RxCustomize<SVGFEFuncBElement, O>): RxNode<SVGFEFuncBElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.feFuncB) }
export function FeFuncG<O = void>(name: string, render?: RxRender<SVGFEFuncGElement, O>, customize?: RxCustomize<SVGFEFuncGElement, O>): RxNode<SVGFEFuncGElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.feFuncG) }
export function FeFuncR<O = void>(name: string, render?: RxRender<SVGFEFuncRElement, O>, customize?: RxCustomize<SVGFEFuncRElement, O>): RxNode<SVGFEFuncRElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.feFuncR) }
export function FeGaussianBlur<O = void>(name: string, render?: RxRender<SVGFEGaussianBlurElement, O>, customize?: RxCustomize<SVGFEGaussianBlurElement, O>): RxNode<SVGFEGaussianBlurElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.feGaussianBlur) }
export function FeImage<O = void>(name: string, render?: RxRender<SVGFEImageElement, O>, customize?: RxCustomize<SVGFEImageElement, O>): RxNode<SVGFEImageElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.feImage) }
export function FeMerge<O = void>(name: string, render?: RxRender<SVGFEMergeElement, O>, customize?: RxCustomize<SVGFEMergeElement, O>): RxNode<SVGFEMergeElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.feMerge) }
export function FeMergeNode<O = void>(name: string, render?: RxRender<SVGFEMergeNodeElement, O>, customize?: RxCustomize<SVGFEMergeNodeElement, O>): RxNode<SVGFEMergeNodeElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.feMergeNode) }
export function FeMorphology<O = void>(name: string, render?: RxRender<SVGFEMorphologyElement, O>, customize?: RxCustomize<SVGFEMorphologyElement, O>): RxNode<SVGFEMorphologyElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.feMorphology) }
export function FeOffset<O = void>(name: string, render?: RxRender<SVGFEOffsetElement, O>, customize?: RxCustomize<SVGFEOffsetElement, O>): RxNode<SVGFEOffsetElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.feOffset) }
export function FePointLight<O = void>(name: string, render?: RxRender<SVGFEPointLightElement, O>, customize?: RxCustomize<SVGFEPointLightElement, O>): RxNode<SVGFEPointLightElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.fePointLight) }
export function FeSpecularLighting<O = void>(name: string, render?: RxRender<SVGFESpecularLightingElement, O>, customize?: RxCustomize<SVGFESpecularLightingElement, O>): RxNode<SVGFESpecularLightingElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.feSpecularLighting) }
export function FeSpotLight<O = void>(name: string, render?: RxRender<SVGFESpotLightElement, O>, customize?: RxCustomize<SVGFESpotLightElement, O>): RxNode<SVGFESpotLightElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.feSpotLight) }
export function FeTile<O = void>(name: string, render?: RxRender<SVGFETileElement, O>, customize?: RxCustomize<SVGFETileElement, O>): RxNode<SVGFETileElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.feTile) }
export function FeTurbulence<O = void>(name: string, render?: RxRender<SVGFETurbulenceElement, O>, customize?: RxCustomize<SVGFETurbulenceElement, O>): RxNode<SVGFETurbulenceElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.feTurbulence) }
export function Filter<O = void>(name: string, render?: RxRender<SVGFilterElement, O>, customize?: RxCustomize<SVGFilterElement, O>): RxNode<SVGFilterElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.filter) }
export function ForeignObject<O = void>(name: string, render?: RxRender<SVGForeignObjectElement, O>, customize?: RxCustomize<SVGForeignObjectElement, O>): RxNode<SVGForeignObjectElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.foreignObject) }
export function G<O = void>(name: string, render?: RxRender<SVGGElement, O>, customize?: RxCustomize<SVGGElement, O>): RxNode<SVGGElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.g) }
export function SvgImage<O = void>(name: string, render?: RxRender<SVGImageElement, O>, customize?: RxCustomize<SVGImageElement, O>): RxNode<SVGImageElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.image) }
export function Line<O = void>(name: string, render?: RxRender<SVGLineElement, O>, customize?: RxCustomize<SVGLineElement, O>): RxNode<SVGLineElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.line) }
export function LinearGradient<O = void>(name: string, render?: RxRender<SVGLinearGradientElement, O>, customize?: RxCustomize<SVGLinearGradientElement, O>): RxNode<SVGLinearGradientElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.linearGradient) }
export function Marker<O = void>(name: string, render?: RxRender<SVGMarkerElement, O>, customize?: RxCustomize<SVGMarkerElement, O>): RxNode<SVGMarkerElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.marker) }
export function Mask<O = void>(name: string, render?: RxRender<SVGMaskElement, O>, customize?: RxCustomize<SVGMaskElement, O>): RxNode<SVGMaskElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.mask) }
export function MetaData<O = void>(name: string, render?: RxRender<SVGMetadataElement, O>, customize?: RxCustomize<SVGMetadataElement, O>): RxNode<SVGMetadataElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.metadata) }
export function MPath<O = void>(name: string, render?: RxRender<SVGElement, O>, customize?: RxCustomize<SVGElement, O>): RxNode<SVGElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.mpath) }
export function Path<O = void>(name: string, render?: RxRender<SVGPathElement, O>, customize?: RxCustomize<SVGPathElement, O>): RxNode<SVGPathElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.path) }
export function Pattern<O = void>(name: string, render?: RxRender<SVGPatternElement, O>, customize?: RxCustomize<SVGPatternElement, O>): RxNode<SVGPatternElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.pattern) }
export function Polygon<O = void>(name: string, render?: RxRender<SVGPolygonElement, O>, customize?: RxCustomize<SVGPolygonElement, O>): RxNode<SVGPolygonElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.polygon) }
export function PolyLine<O = void>(name: string, render?: RxRender<SVGPolylineElement, O>, customize?: RxCustomize<SVGPolylineElement, O>): RxNode<SVGPolylineElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.polyline) }
export function RadialGradient<O = void>(name: string, render?: RxRender<SVGRadialGradientElement, O>, customize?: RxCustomize<SVGRadialGradientElement, O>): RxNode<SVGRadialGradientElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.radialGradient) }
export function Rect<O = void>(name: string, render?: RxRender<SVGRectElement, O>, customize?: RxCustomize<SVGRectElement, O>): RxNode<SVGRectElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.rect) }
export function Stop<O = void>(name: string, render?: RxRender<SVGStopElement, O>, customize?: RxCustomize<SVGStopElement, O>): RxNode<SVGStopElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.stop) }
export function SvgSwitch<O = void>(name: string, render?: RxRender<SVGSwitchElement, O>, customize?: RxCustomize<SVGSwitchElement, O>): RxNode<SVGSwitchElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.switch) }
export function Symbol<O = void>(name: string, render?: RxRender<SVGSymbolElement, O>, customize?: RxCustomize<SVGSymbolElement, O>): RxNode<SVGSymbolElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.symbol) }
export function Text<O = void>(name: string, render?: RxRender<SVGTextElement, O>, customize?: RxCustomize<SVGTextElement, O>): RxNode<SVGTextElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.text) }
export function TextPath<O = void>(name: string, render?: RxRender<SVGTextPathElement, O>, customize?: RxCustomize<SVGTextPathElement, O>): RxNode<SVGTextPathElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.textPath) }
export function TSpan<O = void>(name: string, render?: RxRender<SVGTSpanElement, O>, customize?: RxCustomize<SVGTSpanElement, O>): RxNode<SVGTSpanElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.tspan) }
export function Use<O = void>(name: string, render?: RxRender<SVGUseElement, O>, customize?: RxCustomize<SVGUseElement, O>): RxNode<SVGUseElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.use) }
export function View<O = void>(name: string, render?: RxRender<SVGViewElement, O>, customize?: RxCustomize<SVGViewElement, O>): RxNode<SVGViewElement> { return RxDom.Node(name, undefined, render, customize, SvgTags.view) }

const HtmlTags = {
  a: new RxHtmlNodeFactory<HTMLAnchorElement>('a', true),
  abbr: new RxHtmlNodeFactory<HTMLElement>('abbr', true),
  address: new RxHtmlNodeFactory<HTMLElement>('address', true),
  area: new RxHtmlNodeFactory<HTMLAreaElement>('area', true),
  article: new RxHtmlNodeFactory<HTMLElement>('article', true),
  aside: new RxHtmlNodeFactory<HTMLElement>('aside', true),
  audio: new RxHtmlNodeFactory<HTMLAudioElement>('audio', true),
  b: new RxHtmlNodeFactory<HTMLElement>('b', true),
  base: new RxHtmlNodeFactory<HTMLBaseElement>('base', true),
  bdi: new RxHtmlNodeFactory<HTMLElement>('bdi', true),
  bdo: new RxHtmlNodeFactory<HTMLElement>('bdo', true),
  big: new RxHtmlNodeFactory<HTMLElement>('big', true),
  blockquote: new RxHtmlNodeFactory<HTMLElement>('blockquote', true),
  body: new RxHtmlNodeFactory<HTMLBodyElement>('body', true),
  br: new RxHtmlNodeFactory<HTMLBRElement>('br', true),
  button: new RxHtmlNodeFactory<HTMLButtonElement>('button', true),
  canvas: new RxHtmlNodeFactory<HTMLCanvasElement>('canvas', true),
  caption: new RxHtmlNodeFactory<HTMLTableCaptionElement>('caption', true),
  cite: new RxHtmlNodeFactory<HTMLElement>('cite', true),
  code: new RxHtmlNodeFactory<HTMLElement>('code', true),
  col: new RxHtmlNodeFactory<HTMLTableColElement>('col', true),
  colgroup: new RxHtmlNodeFactory<HTMLTableColElement>('colgroup', true),
  data: new RxHtmlNodeFactory<HTMLDataElement>('data', true),
  datalist: new RxHtmlNodeFactory<HTMLDataListElement>('datalist', true),
  dd: new RxHtmlNodeFactory<HTMLElement>('dd', true),
  del: new RxHtmlNodeFactory<HTMLElement>('del', true),
  details: new RxHtmlNodeFactory<HTMLElement>('details', true),
  dfn: new RxHtmlNodeFactory<HTMLElement>('dfn', true),
  div: new RxHtmlNodeFactory<HTMLDivElement>('div', true),
  dl: new RxHtmlNodeFactory<HTMLDListElement>('dl', true),
  dt: new RxHtmlNodeFactory<HTMLElement>('dt', true),
  em: new RxHtmlNodeFactory<HTMLElement>('em', true),
  embed: new RxHtmlNodeFactory<HTMLEmbedElement>('embed', true),
  fieldset: new RxHtmlNodeFactory<HTMLFieldSetElement>('fieldset', true),
  figcaption: new RxHtmlNodeFactory<HTMLElement>('figcaption', true),
  figure: new RxHtmlNodeFactory<HTMLElement>('figure', true),
  footer: new RxHtmlNodeFactory<HTMLElement>('footer', true),
  form: new RxHtmlNodeFactory<HTMLFormElement>('form', true),
  h1: new RxHtmlNodeFactory<HTMLHeadingElement>('h1', true),
  h2: new RxHtmlNodeFactory<HTMLHeadingElement>('h2', true),
  h3: new RxHtmlNodeFactory<HTMLHeadingElement>('h3', true),
  h4: new RxHtmlNodeFactory<HTMLHeadingElement>('h4', true),
  h5: new RxHtmlNodeFactory<HTMLHeadingElement>('h5', true),
  h6: new RxHtmlNodeFactory<HTMLHeadingElement>('h6', true),
  head: new RxHtmlNodeFactory<HTMLHeadElement>('head', true),
  header: new RxHtmlNodeFactory<HTMLElement>('header', true),
  hgroup: new RxHtmlNodeFactory<HTMLElement>('hgroup', true),
  hr: new RxHtmlNodeFactory<HTMLHRElement>('hr', true),
  html: new RxHtmlNodeFactory<HTMLHtmlElement>('html', true),
  i: new RxHtmlNodeFactory<HTMLElement>('i', true),
  iframe: new RxHtmlNodeFactory<HTMLIFrameElement>('iframe', true),
  img: new RxHtmlNodeFactory<HTMLImageElement>('img', true),
  input: new RxHtmlNodeFactory<HTMLInputElement>('input', true),
  ins: new RxHtmlNodeFactory<HTMLModElement>('ins', true),
  kbd: new RxHtmlNodeFactory<HTMLElement>('kbd', true),
  keygen: new RxHtmlNodeFactory<HTMLElement>('keygen', true),
  label: new RxHtmlNodeFactory<HTMLLabelElement>('label', true),
  legend: new RxHtmlNodeFactory<HTMLLegendElement>('legend', true),
  li: new RxHtmlNodeFactory<HTMLLIElement>('li', true),
  link: new RxHtmlNodeFactory<HTMLLinkElement>('link', true),
  main: new RxHtmlNodeFactory<HTMLElement>('main', true),
  map: new RxHtmlNodeFactory<HTMLMapElement>('map', true),
  mark: new RxHtmlNodeFactory<HTMLElement>('mark', true),
  menu: new RxHtmlNodeFactory<HTMLElement>('menu', true),
  menuitem: new RxHtmlNodeFactory<HTMLElement>('menuitem', true),
  meta: new RxHtmlNodeFactory<HTMLMetaElement>('meta', true),
  meter: new RxHtmlNodeFactory<HTMLElement>('meter', true),
  nav: new RxHtmlNodeFactory<HTMLElement>('nav', true),
  noindex: new RxHtmlNodeFactory<HTMLElement>('noindex', true),
  noscript: new RxHtmlNodeFactory<HTMLElement>('noscript', true),
  object: new RxHtmlNodeFactory<HTMLObjectElement>('object', true),
  ol: new RxHtmlNodeFactory<HTMLOListElement>('ol', true),
  optgroup: new RxHtmlNodeFactory<HTMLOptGroupElement>('optgroup', true),
  option: new RxHtmlNodeFactory<HTMLOptionElement>('option', true),
  output: new RxHtmlNodeFactory<HTMLElement>('output', true),
  p: new RxHtmlNodeFactory<HTMLParagraphElement>('p', true),
  param: new RxHtmlNodeFactory<HTMLParamElement>('param', true),
  picture: new RxHtmlNodeFactory<HTMLElement>('picture', true),
  pre: new RxHtmlNodeFactory<HTMLPreElement>('pre', true),
  progress: new RxHtmlNodeFactory<HTMLProgressElement>('progress', true),
  q: new RxHtmlNodeFactory<HTMLQuoteElement>('q', true),
  rp: new RxHtmlNodeFactory<HTMLElement>('rp', true),
  rt: new RxHtmlNodeFactory<HTMLElement>('rt', true),
  ruby: new RxHtmlNodeFactory<HTMLElement>('ruby', true),
  s: new RxHtmlNodeFactory<HTMLElement>('s', true),
  samp: new RxHtmlNodeFactory<HTMLElement>('samp', true),
  script: new RxHtmlNodeFactory<HTMLScriptElement>('script', true),
  section: new RxHtmlNodeFactory<HTMLElement>('section', true),
  select: new RxHtmlNodeFactory<HTMLSelectElement>('select', true),
  small: new RxHtmlNodeFactory<HTMLElement>('small', true),
  source: new RxHtmlNodeFactory<HTMLSourceElement>('source', true),
  span: new RxHtmlNodeFactory<HTMLSpanElement>('span', true),
  strong: new RxHtmlNodeFactory<HTMLElement>('strong', true),
  style: new RxHtmlNodeFactory<HTMLStyleElement>('style', true),
  sub: new RxHtmlNodeFactory<HTMLElement>('sub', true),
  summary: new RxHtmlNodeFactory<HTMLElement>('summary', true),
  sup: new RxHtmlNodeFactory<HTMLElement>('sup', true),
  table: new RxHtmlNodeFactory<HTMLTableElement>('table', true),
  template: new RxHtmlNodeFactory<HTMLTemplateElement>('template', true),
  tbody: new RxHtmlNodeFactory<HTMLTableSectionElement>('tbody', true),
  td: new RxHtmlNodeFactory<HTMLTableCellElement>('td', true),
  textarea: new RxHtmlNodeFactory<HTMLTextAreaElement>('textarea', true),
  tfoot: new RxHtmlNodeFactory<HTMLTableSectionElement>('tfoot', true),
  th: new RxHtmlNodeFactory<HTMLTableCellElement>('th', true),
  thead: new RxHtmlNodeFactory<HTMLTableSectionElement>('thead', true),
  time: new RxHtmlNodeFactory<HTMLElement>('time', true),
  title: new RxHtmlNodeFactory<HTMLTitleElement>('title', true),
  tr: new RxHtmlNodeFactory<HTMLTableRowElement>('tr', true),
  track: new RxHtmlNodeFactory<HTMLTrackElement>('track', true),
  u: new RxHtmlNodeFactory<HTMLElement>('u', true),
  ul: new RxHtmlNodeFactory<HTMLUListElement>('ul', true),
  var: new RxHtmlNodeFactory<HTMLElement>('var', true),
  video: new RxHtmlNodeFactory<HTMLVideoElement>('video', true),
  wbr: new RxHtmlNodeFactory<HTMLElement>('wbr', true),
  // webview: new HtmlNodeFactory<HTMLWebViewElement>('webview', true),
}

const SvgTags = {
  svg: new RxSvgNodeFactory<SVGSVGElement>('svg', true),
  a: new RxSvgNodeFactory<SVGAElement>('a', true),
  animate: new RxSvgNodeFactory<SVGAnimateElement>('animate', true),
  animateMotion: new RxSvgNodeFactory<SVGAnimateMotionElement>('animateMotion', true),
  animateTransform: new RxSvgNodeFactory<SVGAnimateTransformElement>('animateTransform', true),
  circle: new RxSvgNodeFactory<SVGCircleElement>('circle', true),
  clipPath: new RxSvgNodeFactory<SVGClipPathElement>('clipPath', true),
  defs: new RxSvgNodeFactory<SVGDefsElement>('defs', true),
  desc: new RxSvgNodeFactory<SVGDescElement>('desc', true),
  ellipse: new RxSvgNodeFactory<SVGEllipseElement>('ellipse', true),
  feBlend: new RxSvgNodeFactory<SVGFEBlendElement>('feBlend', true),
  feColorMatrix: new RxSvgNodeFactory<SVGFEColorMatrixElement>('feColorMatrix', true),
  feComponentTransfer: new RxSvgNodeFactory<SVGFEComponentTransferElement>('feComponentTransfer', true),
  feComposite: new RxSvgNodeFactory<SVGFECompositeElement>('feComposite', true),
  feConvolveMatrix: new RxSvgNodeFactory<SVGFEConvolveMatrixElement>('feConvolveMatrix', true),
  feDiffuseLighting: new RxSvgNodeFactory<SVGFEDiffuseLightingElement>('feDiffuseLighting', true),
  feDisplacementMap: new RxSvgNodeFactory<SVGFEDisplacementMapElement>('feDisplacementMap', true),
  feDistantLight: new RxSvgNodeFactory<SVGFEDistantLightElement>('feDistantLight', true),
  feDropShadow: new RxSvgNodeFactory<SVGFEDropShadowElement>('feDropShadow', true),
  feFlood: new RxSvgNodeFactory<SVGFEFloodElement>('feFlood', true),
  feFuncA: new RxSvgNodeFactory<SVGFEFuncAElement>('feFuncA', true),
  feFuncB: new RxSvgNodeFactory<SVGFEFuncBElement>('feFuncB', true),
  feFuncG: new RxSvgNodeFactory<SVGFEFuncGElement>('feFuncG', true),
  feFuncR: new RxSvgNodeFactory<SVGFEFuncRElement>('feFuncR', true),
  feGaussianBlur: new RxSvgNodeFactory<SVGFEGaussianBlurElement>('feGaussianBlur', true),
  feImage: new RxSvgNodeFactory<SVGFEImageElement>('feImage', true),
  feMerge: new RxSvgNodeFactory<SVGFEMergeElement>('feMerge', true),
  feMergeNode: new RxSvgNodeFactory<SVGFEMergeNodeElement>('feMergeNode', true),
  feMorphology: new RxSvgNodeFactory<SVGFEMorphologyElement>('feMorphology', true),
  feOffset: new RxSvgNodeFactory<SVGFEOffsetElement>('feOffset', true),
  fePointLight: new RxSvgNodeFactory<SVGFEPointLightElement>('fePointLight', true),
  feSpecularLighting: new RxSvgNodeFactory<SVGFESpecularLightingElement>('feSpecularLighting', true),
  feSpotLight: new RxSvgNodeFactory<SVGFESpotLightElement>('feSpotLight', true),
  feTile: new RxSvgNodeFactory<SVGFETileElement>('feTile', true),
  feTurbulence: new RxSvgNodeFactory<SVGFETurbulenceElement>('feTurbulence', true),
  filter: new RxSvgNodeFactory<SVGFilterElement>('filter', true),
  foreignObject: new RxSvgNodeFactory<SVGForeignObjectElement>('foreignObject', true),
  g: new RxSvgNodeFactory<SVGGElement>('g', true),
  image: new RxSvgNodeFactory<SVGImageElement>('image', true),
  line: new RxSvgNodeFactory<SVGLineElement>('line', true),
  linearGradient: new RxSvgNodeFactory<SVGLinearGradientElement>('linearGradient', true),
  marker: new RxSvgNodeFactory<SVGMarkerElement>('marker', true),
  mask: new RxSvgNodeFactory<SVGMaskElement>('mask', true),
  metadata: new RxSvgNodeFactory<SVGMetadataElement>('metadata', true),
  mpath: new RxSvgNodeFactory<SVGElement>('mpath', true),
  path: new RxSvgNodeFactory<SVGPathElement>('path', true),
  pattern: new RxSvgNodeFactory<SVGPatternElement>('pattern', true),
  polygon: new RxSvgNodeFactory<SVGPolygonElement>('polygon', true),
  polyline: new RxSvgNodeFactory<SVGPolylineElement>('polyline', true),
  radialGradient: new RxSvgNodeFactory<SVGRadialGradientElement>('radialGradient', true),
  rect: new RxSvgNodeFactory<SVGRectElement>('rect', true),
  stop: new RxSvgNodeFactory<SVGStopElement>('stop', true),
  switch: new RxSvgNodeFactory<SVGSwitchElement>('switch', true),
  symbol: new RxSvgNodeFactory<SVGSymbolElement>('symbol', true),
  text: new RxSvgNodeFactory<SVGTextElement>('text', true),
  textPath: new RxSvgNodeFactory<SVGTextPathElement>('textPath', true),
  tspan: new RxSvgNodeFactory<SVGTSpanElement>('tspan', true),
  use: new RxSvgNodeFactory<SVGUseElement>('use', true),
  view: new RxSvgNodeFactory<SVGViewElement>('view', true),
}
