// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Monitor } from 'reactronic'
import { RxNode, RxRender, RxCustomize } from '../core/api'
import { RxHtmlNodeFactory, RxSvgNodeFactory } from './HtmlNodeFactory'

export function RxHtmlBody(name: string, triggers: unknown, render?: RxRender<HTMLElement>): RxNode<HTMLElement> {
  return RxNode.Reaction(name, triggers, render, undefined, {
    name, arranging: true,
    initialize(node: RxNode<HTMLElement, any>, sibling?: RxNode): void {
      const native = node.native = global.document.body
      native.id = node.name
    },
  })
}

export function RxA<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLAnchorElement, O>, customize?: RxCustomize<HTMLAnchorElement, O>, monitor?: Monitor): RxNode<HTMLAnchorElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.a, monitor) }
export function RxAbbr<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.abbr, monitor) }
export function RxAddress<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.address, monitor) }
export function RxArea<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLAreaElement, O>, customize?: RxCustomize<HTMLAreaElement, O>, monitor?: Monitor): RxNode<HTMLAreaElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.area, monitor) }
export function RxArticle<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.article, monitor) }
export function RxAside<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.aside, monitor) }
export function RxAudio<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLAudioElement, O>, customize?: RxCustomize<HTMLAudioElement, O>, monitor?: Monitor): RxNode<HTMLAudioElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.audio, monitor) }
export function RxB<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.b, monitor) }
export function RxBase<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLBaseElement, O>, customize?: RxCustomize<HTMLBaseElement, O>, monitor?: Monitor): RxNode<HTMLBaseElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.base, monitor) }
export function RxBdi<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.bdi, monitor) }
export function RxBdo<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.bdo, monitor) }
export function RxBig<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.big, monitor) }
export function RxBlockQuote<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.blockquote, monitor) }
export function RxBody<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLBodyElement, O>, customize?: RxCustomize<HTMLBodyElement, O>, monitor?: Monitor): RxNode<HTMLBodyElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.body, monitor) }
export function RxBR<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLBRElement, O>, customize?: RxCustomize<HTMLBRElement, O>, monitor?: Monitor): RxNode<HTMLBRElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.br, monitor) }
export function RxButton<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLButtonElement, O>, customize?: RxCustomize<HTMLButtonElement, O>, monitor?: Monitor): RxNode<HTMLButtonElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.button, monitor) }
export function RxCanvas<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLCanvasElement, O>, customize?: RxCustomize<HTMLCanvasElement, O>, monitor?: Monitor): RxNode<HTMLCanvasElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.canvas, monitor) }
export function RxCaption<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLTableCaptionElement, O>, customize?: RxCustomize<HTMLTableCaptionElement, O>, monitor?: Monitor): RxNode<HTMLTableCaptionElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.caption, monitor) }
export function RxCite<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.cite, monitor) }
export function RxCode<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.code, monitor) }
export function RxCol<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLTableColElement, O>, customize?: RxCustomize<HTMLTableColElement, O>, monitor?: Monitor): RxNode<HTMLTableColElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.col, monitor) }
export function RxColGroup<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLTableColElement, O>, customize?: RxCustomize<HTMLTableColElement, O>, monitor?: Monitor): RxNode<HTMLTableColElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.colgroup, monitor) }
export function RxData<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLDataElement, O>, customize?: RxCustomize<HTMLDataElement, O>, monitor?: Monitor): RxNode<HTMLDataElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.data, monitor) }
export function RxDataList<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLDataListElement, O>, customize?: RxCustomize<HTMLDataListElement, O>, monitor?: Monitor): RxNode<HTMLDataListElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.datalist, monitor) }
export function RxDD<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.dd, monitor) }
export function RxDel<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.del, monitor) }
export function RxDetails<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.details, monitor) }
export function RxDfn<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.dfn, monitor) }
export function RxDiv<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLDivElement, O>, customize?: RxCustomize<HTMLDivElement, O>, monitor?: Monitor): RxNode<HTMLDivElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.div, monitor) }
export function RxDL<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLDListElement, O>, customize?: RxCustomize<HTMLDListElement, O>, monitor?: Monitor): RxNode<HTMLDListElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.dl, monitor) }
export function RxDT<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.dt, monitor) }
export function RxEM<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.em, monitor) }
export function RxEmbed<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLEmbedElement, O>, customize?: RxCustomize<HTMLEmbedElement, O>, monitor?: Monitor): RxNode<HTMLEmbedElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.embed, monitor) }
export function RxFieldSet<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLFieldSetElement, O>, customize?: RxCustomize<HTMLFieldSetElement, O>, monitor?: Monitor): RxNode<HTMLFieldSetElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.fieldset, monitor) }
export function RxFigCaption<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.figcaption, monitor) }
export function RxFigure<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.figure, monitor) }
export function RxFooter<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.footer, monitor) }
export function RxForm<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLFormElement, O>, customize?: RxCustomize<HTMLFormElement, O>, monitor?: Monitor): RxNode<HTMLFormElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.form, monitor) }
export function RxH1<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLHeadingElement, O>, customize?: RxCustomize<HTMLHeadingElement, O>, monitor?: Monitor): RxNode<HTMLHeadingElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.h1, monitor) }
export function RxH2<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLHeadingElement, O>, customize?: RxCustomize<HTMLHeadingElement, O>, monitor?: Monitor): RxNode<HTMLHeadingElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.h2, monitor) }
export function RxH3<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLHeadingElement, O>, customize?: RxCustomize<HTMLHeadingElement, O>, monitor?: Monitor): RxNode<HTMLHeadingElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.h3, monitor) }
export function RxH4<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLHeadingElement, O>, customize?: RxCustomize<HTMLHeadingElement, O>, monitor?: Monitor): RxNode<HTMLHeadingElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.h4, monitor) }
export function RxH5<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLHeadingElement, O>, customize?: RxCustomize<HTMLHeadingElement, O>, monitor?: Monitor): RxNode<HTMLHeadingElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.h5, monitor) }
export function RxH6<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLHeadingElement, O>, customize?: RxCustomize<HTMLHeadingElement, O>, monitor?: Monitor): RxNode<HTMLHeadingElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.h6, monitor) }
export function RxHead<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLHeadElement, O>, customize?: RxCustomize<HTMLHeadElement, O>, monitor?: Monitor): RxNode<HTMLHeadElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.head, monitor) }
export function RxHeader<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.header, monitor) }
export function RxHGroup<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.hgroup, monitor) }
export function RxHR<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLHRElement, O>, customize?: RxCustomize<HTMLHRElement, O>, monitor?: Monitor): RxNode<HTMLHRElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.hr, monitor) }
export function RxHtml<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLHtmlElement, O>, customize?: RxCustomize<HTMLHtmlElement, O>, monitor?: Monitor): RxNode<HTMLHtmlElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.html, monitor) }
export function RxI<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.i, monitor) }
export function RxIFrame<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLIFrameElement, O>, customize?: RxCustomize<HTMLIFrameElement, O>, monitor?: Monitor): RxNode<HTMLIFrameElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.iframe, monitor) }
export function RxImg<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLImageElement, O>, customize?: RxCustomize<HTMLImageElement, O>, monitor?: Monitor): RxNode<HTMLImageElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.img, monitor) }
export function RxInput<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLInputElement, O>, customize?: RxCustomize<HTMLInputElement, O>, monitor?: Monitor): RxNode<HTMLInputElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.input, monitor) }
export function RxIns<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLModElement, O>, customize?: RxCustomize<HTMLModElement, O>, monitor?: Monitor): RxNode<HTMLModElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.ins, monitor) }
export function RxKbd<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.kbd, monitor) }
export function RxKeygen<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.keygen, monitor) }
export function RxLabel<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLLabelElement, O>, customize?: RxCustomize<HTMLLabelElement, O>, monitor?: Monitor): RxNode<HTMLLabelElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.label, monitor) }
export function RxLegend<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLLegendElement, O>, customize?: RxCustomize<HTMLLegendElement, O>, monitor?: Monitor): RxNode<HTMLLegendElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.legend, monitor) }
export function RxLI<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLLIElement, O>, customize?: RxCustomize<HTMLLIElement, O>, monitor?: Monitor): RxNode<HTMLLIElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.li, monitor) }
export function RxLink<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLLinkElement, O>, customize?: RxCustomize<HTMLLinkElement, O>, monitor?: Monitor): RxNode<HTMLLinkElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.link, monitor) }
export function RxMain<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.main, monitor) }
export function RxMap<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLMapElement, O>, customize?: RxCustomize<HTMLMapElement, O>, monitor?: Monitor): RxNode<HTMLMapElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.map, monitor) }
export function RxMark<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.mark, monitor) }
export function RxMenu<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.menu, monitor) }
export function RxMenuItem<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.menuitem, monitor) }
export function RxMeta<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLMetaElement, O>, customize?: RxCustomize<HTMLMetaElement, O>, monitor?: Monitor): RxNode<HTMLMetaElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.meta, monitor) }
export function RxMeter<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.meter, monitor) }
export function RxNav<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.nav, monitor) }
export function RxNoIndex<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.noindex, monitor) }
export function RxNoScript<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.noscript, monitor) }
export function RxObj<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLObjectElement, O>, customize?: RxCustomize<HTMLObjectElement, O>, monitor?: Monitor): RxNode<HTMLObjectElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.object, monitor) }
export function RxOL<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLOListElement, O>, customize?: RxCustomize<HTMLOListElement, O>, monitor?: Monitor): RxNode<HTMLOListElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.ol, monitor) }
export function RxOptGroup<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLOptGroupElement, O>, customize?: RxCustomize<HTMLOptGroupElement, O>, monitor?: Monitor): RxNode<HTMLOptGroupElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.optgroup, monitor) }
export function RxOption<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLOptionElement, O>, customize?: RxCustomize<HTMLOptionElement, O>, monitor?: Monitor): RxNode<HTMLOptionElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.option, monitor) }
export function RxOutput<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.output, monitor) }
export function RxP<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLParagraphElement, O>, customize?: RxCustomize<HTMLParagraphElement, O>, monitor?: Monitor): RxNode<HTMLParagraphElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.p, monitor) }
export function RxParam<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLParamElement, O>, customize?: RxCustomize<HTMLParamElement, O>, monitor?: Monitor): RxNode<HTMLParamElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.param, monitor) }
export function RxPicture<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.picture, monitor) }
export function RxPre<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLPreElement, O>, customize?: RxCustomize<HTMLPreElement, O>, monitor?: Monitor): RxNode<HTMLPreElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.pre, monitor) }
export function RxProgress<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLProgressElement, O>, customize?: RxCustomize<HTMLProgressElement, O>, monitor?: Monitor): RxNode<HTMLProgressElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.progress, monitor) }
export function RxQ<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLQuoteElement, O>, customize?: RxCustomize<HTMLQuoteElement, O>, monitor?: Monitor): RxNode<HTMLQuoteElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.q, monitor) }
export function RxRP<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.rp, monitor) }
export function RxRT<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.rt, monitor) }
export function RxRuby<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.ruby, monitor) }
export function RxS<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.s, monitor) }
export function RxSamp<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.samp, monitor) }
export function RxScript<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLScriptElement, O>, customize?: RxCustomize<HTMLScriptElement, O>, monitor?: Monitor): RxNode<HTMLScriptElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.script, monitor) }
export function RxSection<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.section, monitor) }
export function RxSelect<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLSelectElement, O>, customize?: RxCustomize<HTMLSelectElement, O>, monitor?: Monitor): RxNode<HTMLSelectElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.select, monitor) }
export function RxSmall<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.small, monitor) }
export function RxSource<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLSourceElement, O>, customize?: RxCustomize<HTMLSourceElement, O>, monitor?: Monitor): RxNode<HTMLSourceElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.source, monitor) }
export function RxSpan<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLSpanElement, O>, customize?: RxCustomize<HTMLSpanElement, O>, monitor?: Monitor): RxNode<HTMLSpanElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.span, monitor) }
export function RxStrong<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.strong, monitor) }
export function RxStyle<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLStyleElement, O>, customize?: RxCustomize<HTMLStyleElement, O>, monitor?: Monitor): RxNode<HTMLStyleElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.style, monitor) }
export function RxSub<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.sub, monitor) }
export function RxSummary<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.summary, monitor) }
export function RxSup<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.sup, monitor) }
export function RxTable<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLTableElement, O>, customize?: RxCustomize<HTMLTableElement, O>, monitor?: Monitor): RxNode<HTMLTableElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.table, monitor) }
export function RxTemplate<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLTemplateElement, O>, customize?: RxCustomize<HTMLTemplateElement, O>, monitor?: Monitor): RxNode<HTMLTemplateElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.template, monitor) }
export function RxTBody<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLTableSectionElement, O>, customize?: RxCustomize<HTMLTableSectionElement, O>, monitor?: Monitor): RxNode<HTMLTableSectionElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.tbody, monitor) }
export function RxTD<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLTableCellElement, O>, customize?: RxCustomize<HTMLTableCellElement, O>, monitor?: Monitor): RxNode<HTMLTableCellElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.td, monitor) }
export function RxTextArea<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLTextAreaElement, O>, customize?: RxCustomize<HTMLTextAreaElement, O>, monitor?: Monitor): RxNode<HTMLTextAreaElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.textarea, monitor) }
export function RxTFoot<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLTableSectionElement, O>, customize?: RxCustomize<HTMLTableSectionElement, O>, monitor?: Monitor): RxNode<HTMLTableSectionElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.tfoot, monitor) }
export function RxTH<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLTableCellElement, O>, customize?: RxCustomize<HTMLTableCellElement, O>, monitor?: Monitor): RxNode<HTMLTableCellElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.th, monitor) }
export function RxTHead<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLTableSectionElement, O>, customize?: RxCustomize<HTMLTableSectionElement, O>, monitor?: Monitor): RxNode<HTMLTableSectionElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.thead, monitor) }
export function RxTime<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.time, monitor) }
export function RxTitle<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLTitleElement, O>, customize?: RxCustomize<HTMLTitleElement, O>, monitor?: Monitor): RxNode<HTMLTitleElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.title, monitor) }
export function RxTR<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLTableRowElement, O>, customize?: RxCustomize<HTMLTableRowElement, O>, monitor?: Monitor): RxNode<HTMLTableRowElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.tr, monitor) }
export function RxTrack<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLTrackElement, O>, customize?: RxCustomize<HTMLTrackElement, O>, monitor?: Monitor): RxNode<HTMLTrackElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.track, monitor) }
export function RxU<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.u, monitor) }
export function RxUL<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLUListElement, O>, customize?: RxCustomize<HTMLUListElement, O>, monitor?: Monitor): RxNode<HTMLUListElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.ul, monitor) }
export function RxVar<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.var, monitor) }
export function RxVideo<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLVideoElement, O>, customize?: RxCustomize<HTMLVideoElement, O>, monitor?: Monitor): RxNode<HTMLVideoElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.video, monitor) }
export function RxWbr<O = void>(name: string, triggers: unknown, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return RxNode.Reaction(name, triggers, render, customize, HtmlTags.wbr, monitor) }

export function A<O = void>(name: string, render?: RxRender<HTMLAnchorElement, O>, customize?: RxCustomize<HTMLAnchorElement, O>): RxNode<HTMLAnchorElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.a, undefined) }
export function Abbr<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.abbr, undefined) }
export function Address<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.address, undefined) }
export function Area<O = void>(name: string, render?: RxRender<HTMLAreaElement, O>, customize?: RxCustomize<HTMLAreaElement, O>): RxNode<HTMLAreaElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.area, undefined) }
export function Article<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.article, undefined) }
export function Aside<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.aside, undefined) }
export function Audio<O = void>(name: string, render?: RxRender<HTMLAudioElement, O>, customize?: RxCustomize<HTMLAudioElement, O>): RxNode<HTMLAudioElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.audio, undefined) }
export function B<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.b, undefined) }
export function Base<O = void>(name: string, render?: RxRender<HTMLBaseElement, O>, customize?: RxCustomize<HTMLBaseElement, O>): RxNode<HTMLBaseElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.base, undefined) }
export function Bdi<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.bdi, undefined) }
export function Bdo<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.bdo, undefined) }
export function Big<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.big, undefined) }
export function BlockQuote<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.blockquote, undefined) }
export function Body<O = void>(name: string, render?: RxRender<HTMLBodyElement, O>, customize?: RxCustomize<HTMLBodyElement, O>): RxNode<HTMLBodyElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.body, undefined) }
export function BR<O = void>(name: string, render?: RxRender<HTMLBRElement, O>, customize?: RxCustomize<HTMLBRElement, O>): RxNode<HTMLBRElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.br, undefined) }
export function Button<O = void>(name: string, render?: RxRender<HTMLButtonElement, O>, customize?: RxCustomize<HTMLButtonElement, O>): RxNode<HTMLButtonElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.button, undefined) }
export function Canvas<O = void>(name: string, render?: RxRender<HTMLCanvasElement, O>, customize?: RxCustomize<HTMLCanvasElement, O>): RxNode<HTMLCanvasElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.canvas, undefined) }
export function Caption<O = void>(name: string, render?: RxRender<HTMLTableCaptionElement, O>, customize?: RxCustomize<HTMLTableCaptionElement, O>): RxNode<HTMLTableCaptionElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.caption, undefined) }
export function Cite<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.cite, undefined) }
export function Code<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.code, undefined) }
export function Col<O = void>(name: string, render?: RxRender<HTMLTableColElement, O>, customize?: RxCustomize<HTMLTableColElement, O>): RxNode<HTMLTableColElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.col, undefined) }
export function ColGroup<O = void>(name: string, render?: RxRender<HTMLTableColElement, O>, customize?: RxCustomize<HTMLTableColElement, O>): RxNode<HTMLTableColElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.colgroup, undefined) }
export function Data<O = void>(name: string, render?: RxRender<HTMLDataElement, O>, customize?: RxCustomize<HTMLDataElement, O>): RxNode<HTMLDataElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.data, undefined) }
export function DataList<O = void>(name: string, render?: RxRender<HTMLDataListElement, O>, customize?: RxCustomize<HTMLDataListElement, O>): RxNode<HTMLDataListElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.datalist, undefined) }
export function DD<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.dd, undefined) }
export function Del<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.del, undefined) }
export function Details<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.details, undefined) }
export function Dfn<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.dfn, undefined) }
export function Div<O = void>(name: string, render?: RxRender<HTMLDivElement, O>, customize?: RxCustomize<HTMLDivElement, O>): RxNode<HTMLDivElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.div, undefined) }
export function DL<O = void>(name: string, render?: RxRender<HTMLDListElement, O>, customize?: RxCustomize<HTMLDListElement, O>): RxNode<HTMLDListElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.dl, undefined) }
export function DT<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.dt, undefined) }
export function EM<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.em, undefined) }
export function Embed<O = void>(name: string, render?: RxRender<HTMLEmbedElement, O>, customize?: RxCustomize<HTMLEmbedElement, O>): RxNode<HTMLEmbedElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.embed, undefined) }
export function FieldSet<O = void>(name: string, render?: RxRender<HTMLFieldSetElement, O>, customize?: RxCustomize<HTMLFieldSetElement, O>): RxNode<HTMLFieldSetElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.fieldset, undefined) }
export function FigCaption<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.figcaption, undefined) }
export function Figure<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.figure, undefined) }
export function Footer<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.footer, undefined) }
export function Form<O = void>(name: string, render?: RxRender<HTMLFormElement, O>, customize?: RxCustomize<HTMLFormElement, O>): RxNode<HTMLFormElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.form, undefined) }
export function H1<O = void>(name: string, render?: RxRender<HTMLHeadingElement, O>, customize?: RxCustomize<HTMLHeadingElement, O>): RxNode<HTMLHeadingElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.h1, undefined) }
export function H2<O = void>(name: string, render?: RxRender<HTMLHeadingElement, O>, customize?: RxCustomize<HTMLHeadingElement, O>): RxNode<HTMLHeadingElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.h2, undefined) }
export function H3<O = void>(name: string, render?: RxRender<HTMLHeadingElement, O>, customize?: RxCustomize<HTMLHeadingElement, O>): RxNode<HTMLHeadingElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.h3, undefined) }
export function H4<O = void>(name: string, render?: RxRender<HTMLHeadingElement, O>, customize?: RxCustomize<HTMLHeadingElement, O>): RxNode<HTMLHeadingElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.h4, undefined) }
export function H5<O = void>(name: string, render?: RxRender<HTMLHeadingElement, O>, customize?: RxCustomize<HTMLHeadingElement, O>): RxNode<HTMLHeadingElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.h5, undefined) }
export function H6<O = void>(name: string, render?: RxRender<HTMLHeadingElement, O>, customize?: RxCustomize<HTMLHeadingElement, O>): RxNode<HTMLHeadingElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.h6, undefined) }
export function Head<O = void>(name: string, render?: RxRender<HTMLHeadElement, O>, customize?: RxCustomize<HTMLHeadElement, O>): RxNode<HTMLHeadElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.head, undefined) }
export function Header<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.header, undefined) }
export function HGroup<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.hgroup, undefined) }
export function HR<O = void>(name: string, render?: RxRender<HTMLHRElement, O>, customize?: RxCustomize<HTMLHRElement, O>): RxNode<HTMLHRElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.hr, undefined) }
export function Html<O = void>(name: string, render?: RxRender<HTMLHtmlElement, O>, customize?: RxCustomize<HTMLHtmlElement, O>): RxNode<HTMLHtmlElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.html, undefined) }
export function I<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.i, undefined) }
export function IFrame<O = void>(name: string, render?: RxRender<HTMLIFrameElement, O>, customize?: RxCustomize<HTMLIFrameElement, O>): RxNode<HTMLIFrameElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.iframe, undefined) }
export function Img<O = void>(name: string, render?: RxRender<HTMLImageElement, O>, customize?: RxCustomize<HTMLImageElement, O>): RxNode<HTMLImageElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.img, undefined) }
export function Input<O = void>(name: string, render?: RxRender<HTMLInputElement, O>, customize?: RxCustomize<HTMLInputElement, O>): RxNode<HTMLInputElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.input, undefined) }
export function Ins<O = void>(name: string, render?: RxRender<HTMLModElement, O>, customize?: RxCustomize<HTMLModElement, O>): RxNode<HTMLModElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.ins, undefined) }
export function Kbd<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.kbd, undefined) }
export function KeyGen<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.keygen, undefined) }
export function Label<O = void>(name: string, render?: RxRender<HTMLLabelElement, O>, customize?: RxCustomize<HTMLLabelElement, O>): RxNode<HTMLLabelElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.label, undefined) }
export function Legend<O = void>(name: string, render?: RxRender<HTMLLegendElement, O>, customize?: RxCustomize<HTMLLegendElement, O>): RxNode<HTMLLegendElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.legend, undefined) }
export function LI<O = void>(name: string, render?: RxRender<HTMLLIElement, O>, customize?: RxCustomize<HTMLLIElement, O>): RxNode<HTMLLIElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.li, undefined) }
export function Link<O = void>(name: string, render?: RxRender<HTMLLinkElement, O>, customize?: RxCustomize<HTMLLinkElement, O>): RxNode<HTMLLinkElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.link, undefined) }
export function Main<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.main, undefined) }
export function Map<O = void>(name: string, render?: RxRender<HTMLMapElement, O>, customize?: RxCustomize<HTMLMapElement, O>): RxNode<HTMLMapElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.map, undefined) }
export function Mark<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.mark, undefined) }
export function Menu<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.menu, undefined) }
export function MenuItem<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.menuitem, undefined) }
export function Meta<O = void>(name: string, render?: RxRender<HTMLMetaElement, O>, customize?: RxCustomize<HTMLMetaElement, O>): RxNode<HTMLMetaElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.meta, undefined) }
export function Meter<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.meter, undefined) }
export function Nav<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.nav, undefined) }
export function NoIndex<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.noindex, undefined) }
export function NoScript<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.noscript, undefined) }
export function Obj<O = void>(name: string, render?: RxRender<HTMLObjectElement, O>, customize?: RxCustomize<HTMLObjectElement, O>): RxNode<HTMLObjectElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.object, undefined) }
export function OL<O = void>(name: string, render?: RxRender<HTMLOListElement, O>, customize?: RxCustomize<HTMLOListElement, O>): RxNode<HTMLOListElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.ol, undefined) }
export function OptGroup<O = void>(name: string, render?: RxRender<HTMLOptGroupElement, O>, customize?: RxCustomize<HTMLOptGroupElement, O>): RxNode<HTMLOptGroupElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.optgroup, undefined) }
export function Option<O = void>(name: string, render?: RxRender<HTMLOptionElement, O>, customize?: RxCustomize<HTMLOptionElement, O>): RxNode<HTMLOptionElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.option, undefined) }
export function Output<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.output, undefined) }
export function P<O = void>(name: string, render?: RxRender<HTMLParagraphElement, O>, customize?: RxCustomize<HTMLParagraphElement, O>): RxNode<HTMLParagraphElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.p, undefined) }
export function Param<O = void>(name: string, render?: RxRender<HTMLParamElement, O>, customize?: RxCustomize<HTMLParamElement, O>): RxNode<HTMLParamElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.param, undefined) }
export function Picture<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.picture, undefined) }
export function Pre<O = void>(name: string, render?: RxRender<HTMLPreElement, O>, customize?: RxCustomize<HTMLPreElement, O>): RxNode<HTMLPreElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.pre, undefined) }
export function Progress<O = void>(name: string, render?: RxRender<HTMLProgressElement, O>, customize?: RxCustomize<HTMLProgressElement, O>): RxNode<HTMLProgressElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.progress, undefined) }
export function Q<O = void>(name: string, render?: RxRender<HTMLQuoteElement, O>, customize?: RxCustomize<HTMLQuoteElement, O>): RxNode<HTMLQuoteElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.q, undefined) }
export function RP<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.rp, undefined) }
export function RT<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.rt, undefined) }
export function Ruby<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.ruby, undefined) }
export function S<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.s, undefined) }
export function Samp<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.samp, undefined) }
export function Script<O = void>(name: string, render?: RxRender<HTMLScriptElement, O>, customize?: RxCustomize<HTMLScriptElement, O>): RxNode<HTMLScriptElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.script, undefined) }
export function Section<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.section, undefined) }
export function Select<O = void>(name: string, render?: RxRender<HTMLSelectElement, O>, customize?: RxCustomize<HTMLSelectElement, O>): RxNode<HTMLSelectElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.select, undefined) }
export function Small<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.small, undefined) }
export function Source<O = void>(name: string, render?: RxRender<HTMLSourceElement, O>, customize?: RxCustomize<HTMLSourceElement, O>): RxNode<HTMLSourceElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.source, undefined) }
export function Span<O = void>(name: string, render?: RxRender<HTMLSpanElement, O>, customize?: RxCustomize<HTMLSpanElement, O>): RxNode<HTMLSpanElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.span, undefined) }
export function Strong<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.strong, undefined) }
export function Style<O = void>(name: string, render?: RxRender<HTMLStyleElement, O>, customize?: RxCustomize<HTMLStyleElement, O>): RxNode<HTMLStyleElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.style, undefined) }
export function Sub<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.sub, undefined) }
export function Summary<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.summary, undefined) }
export function Sup<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.sup, undefined) }
export function Table<O = void>(name: string, render?: RxRender<HTMLTableElement, O>, customize?: RxCustomize<HTMLTableElement, O>): RxNode<HTMLTableElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.table, undefined) }
export function Template<O = void>(name: string, render?: RxRender<HTMLTemplateElement, O>, customize?: RxCustomize<HTMLTemplateElement, O>): RxNode<HTMLTemplateElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.template, undefined) }
export function TBody<O = void>(name: string, render?: RxRender<HTMLTableSectionElement, O>, customize?: RxCustomize<HTMLTableSectionElement, O>): RxNode<HTMLTableSectionElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.tbody, undefined) }
export function TD<O = void>(name: string, render?: RxRender<HTMLTableCellElement, O>, customize?: RxCustomize<HTMLTableCellElement, O>): RxNode<HTMLTableCellElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.td, undefined) }
export function TextArea<O = void>(name: string, render?: RxRender<HTMLTextAreaElement, O>, customize?: RxCustomize<HTMLTextAreaElement, O>): RxNode<HTMLTextAreaElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.textarea, undefined) }
export function TFoot<O = void>(name: string, render?: RxRender<HTMLTableSectionElement, O>, customize?: RxCustomize<HTMLTableSectionElement, O>): RxNode<HTMLTableSectionElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.tfoot, undefined) }
export function TH<O = void>(name: string, render?: RxRender<HTMLTableCellElement, O>, customize?: RxCustomize<HTMLTableCellElement, O>): RxNode<HTMLTableCellElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.th, undefined) }
export function THead<O = void>(name: string, render?: RxRender<HTMLTableSectionElement, O>, customize?: RxCustomize<HTMLTableSectionElement, O>): RxNode<HTMLTableSectionElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.thead, undefined) }
export function Time<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.time, undefined) }
export function Title<O = void>(name: string, render?: RxRender<HTMLTitleElement, O>, customize?: RxCustomize<HTMLTitleElement, O>): RxNode<HTMLTitleElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.title, undefined) }
export function TR<O = void>(name: string, render?: RxRender<HTMLTableRowElement, O>, customize?: RxCustomize<HTMLTableRowElement, O>): RxNode<HTMLTableRowElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.tr, undefined) }
export function Track<O = void>(name: string, render?: RxRender<HTMLTrackElement, O>, customize?: RxCustomize<HTMLTrackElement, O>): RxNode<HTMLTrackElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.track, undefined) }
export function U<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.u, undefined) }
export function UL<O = void>(name: string, render?: RxRender<HTMLUListElement, O>, customize?: RxCustomize<HTMLUListElement, O>): RxNode<HTMLUListElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.ul, undefined) }
export function Var<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.var, undefined) }
export function Video<O = void>(name: string, render?: RxRender<HTMLVideoElement, O>, customize?: RxCustomize<HTMLVideoElement, O>): RxNode<HTMLVideoElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.video, undefined) }
export function Wbr<O = void>(name: string, render?: RxRender<HTMLElement, O>, customize?: RxCustomize<HTMLElement, O>): RxNode<HTMLElement> { return RxNode.Affiliate(name, undefined, render, customize, HtmlTags.wbr, undefined) }

export function RxSvg<O = void>(name: string, triggers: unknown, render?: RxRender<SVGSVGElement, O>, customize?: RxCustomize<SVGSVGElement, O>): RxNode<SVGSVGElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.svg) }
export function RxSvgA<O = void>(name: string, triggers: unknown, render?: RxRender<SVGAElement, O>, customize?: RxCustomize<SVGAElement, O>): RxNode<SVGAElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.a) }
export function RxAnimate<O = void>(name: string, triggers: unknown, render?: RxRender<SVGAnimateElement, O>, customize?: RxCustomize<SVGAnimateElement, O>): RxNode<SVGAnimateElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.animate) }
export function RxAnimateMotion<O = void>(name: string, triggers: unknown, render?: RxRender<SVGAnimateMotionElement, O>, customize?: RxCustomize<SVGAnimateMotionElement, O>): RxNode<SVGAnimateMotionElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.animateMotion) }
export function RxAnimateTransform<O = void>(name: string, triggers: unknown, render?: RxRender<SVGAnimateTransformElement, O>, customize?: RxCustomize<SVGAnimateTransformElement, O>): RxNode<SVGAnimateTransformElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.animateTransform) }
export function RxCircle<O = void>(name: string, triggers: unknown, render?: RxRender<SVGCircleElement, O>, customize?: RxCustomize<SVGCircleElement, O>): RxNode<SVGCircleElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.circle) }
export function RxClipPath<O = void>(name: string, triggers: unknown, render?: RxRender<SVGClipPathElement, O>, customize?: RxCustomize<SVGClipPathElement, O>): RxNode<SVGClipPathElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.clipPath) }
export function RxDefs<O = void>(name: string, triggers: unknown, render?: RxRender<SVGDefsElement, O>, customize?: RxCustomize<SVGDefsElement, O>): RxNode<SVGDefsElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.defs) }
export function RxDesc<O = void>(name: string, triggers: unknown, render?: RxRender<SVGDescElement, O>, customize?: RxCustomize<SVGDescElement, O>): RxNode<SVGDescElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.desc) }
export function RxEllipse<O = void>(name: string, triggers: unknown, render?: RxRender<SVGEllipseElement, O>, customize?: RxCustomize<SVGEllipseElement, O>): RxNode<SVGEllipseElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.ellipse) }
export function RxFeBlend<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEBlendElement, O>, customize?: RxCustomize<SVGFEBlendElement, O>): RxNode<SVGFEBlendElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.feBlend) }
export function RxFeColorMatrix<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEColorMatrixElement, O>, customize?: RxCustomize<SVGFEColorMatrixElement, O>): RxNode<SVGFEColorMatrixElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.feColorMatrix) }
export function RxFeComponentTransfer<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEComponentTransferElement, O>, customize?: RxCustomize<SVGFEComponentTransferElement, O>): RxNode<SVGFEComponentTransferElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.feComponentTransfer) }
export function RxFeComposite<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFECompositeElement, O>, customize?: RxCustomize<SVGFECompositeElement, O>): RxNode<SVGFECompositeElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.feComposite) }
export function RxFeConvolveMatrix<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEConvolveMatrixElement, O>, customize?: RxCustomize<SVGFEConvolveMatrixElement, O>): RxNode<SVGFEConvolveMatrixElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.feConvolveMatrix) }
export function RxFeDiffuseLighting<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEDiffuseLightingElement, O>, customize?: RxCustomize<SVGFEDiffuseLightingElement, O>): RxNode<SVGFEDiffuseLightingElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.feDiffuseLighting) }
export function RxFeDisplacementMap<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEDisplacementMapElement, O>, customize?: RxCustomize<SVGFEDisplacementMapElement, O>): RxNode<SVGFEDisplacementMapElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.feDisplacementMap) }
export function RxFeDistantLight<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEDistantLightElement, O>, customize?: RxCustomize<SVGFEDistantLightElement, O>): RxNode<SVGFEDistantLightElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.feDistantLight) }
export function RxFeDropShadow<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEDropShadowElement, O>, customize?: RxCustomize<SVGFEDropShadowElement, O>): RxNode<SVGFEDropShadowElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.feDropShadow) }
export function RxFeFlood<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEFloodElement, O>, customize?: RxCustomize<SVGFEFloodElement, O>): RxNode<SVGFEFloodElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.feFlood) }
export function RxFeFuncA<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEFuncAElement, O>, customize?: RxCustomize<SVGFEFuncAElement, O>): RxNode<SVGFEFuncAElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.feFuncA) }
export function RxFeFuncB<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEFuncBElement, O>, customize?: RxCustomize<SVGFEFuncBElement, O>): RxNode<SVGFEFuncBElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.feFuncB) }
export function RxFeFuncG<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEFuncGElement, O>, customize?: RxCustomize<SVGFEFuncGElement, O>): RxNode<SVGFEFuncGElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.feFuncG) }
export function RxFeFuncR<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEFuncRElement, O>, customize?: RxCustomize<SVGFEFuncRElement, O>): RxNode<SVGFEFuncRElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.feFuncR) }
export function RxFeGaussianBlur<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEGaussianBlurElement, O>, customize?: RxCustomize<SVGFEGaussianBlurElement, O>): RxNode<SVGFEGaussianBlurElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.feGaussianBlur) }
export function RxFeImage<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEImageElement, O>, customize?: RxCustomize<SVGFEImageElement, O>): RxNode<SVGFEImageElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.feImage) }
export function RxFeMerge<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEMergeElement, O>, customize?: RxCustomize<SVGFEMergeElement, O>): RxNode<SVGFEMergeElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.feMerge) }
export function RxFeMergeNode<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEMergeNodeElement, O>, customize?: RxCustomize<SVGFEMergeNodeElement, O>): RxNode<SVGFEMergeNodeElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.feMergeNode) }
export function RxFeMorphology<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEMorphologyElement, O>, customize?: RxCustomize<SVGFEMorphologyElement, O>): RxNode<SVGFEMorphologyElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.feMorphology) }
export function RxFeOffset<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEOffsetElement, O>, customize?: RxCustomize<SVGFEOffsetElement, O>): RxNode<SVGFEOffsetElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.feOffset) }
export function RxFePointLight<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFEPointLightElement, O>, customize?: RxCustomize<SVGFEPointLightElement, O>): RxNode<SVGFEPointLightElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.fePointLight) }
export function RxFeSpecularLighting<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFESpecularLightingElement, O>, customize?: RxCustomize<SVGFESpecularLightingElement, O>): RxNode<SVGFESpecularLightingElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.feSpecularLighting) }
export function RxFeSpotLight<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFESpotLightElement, O>, customize?: RxCustomize<SVGFESpotLightElement, O>): RxNode<SVGFESpotLightElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.feSpotLight) }
export function RxFeTile<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFETileElement, O>, customize?: RxCustomize<SVGFETileElement, O>): RxNode<SVGFETileElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.feTile) }
export function RxFeTurbulence<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFETurbulenceElement, O>, customize?: RxCustomize<SVGFETurbulenceElement, O>): RxNode<SVGFETurbulenceElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.feTurbulence) }
export function RxFilter<O = void>(name: string, triggers: unknown, render?: RxRender<SVGFilterElement, O>, customize?: RxCustomize<SVGFilterElement, O>): RxNode<SVGFilterElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.filter) }
export function RxForeignObject<O = void>(name: string, triggers: unknown, render?: RxRender<SVGForeignObjectElement, O>, customize?: RxCustomize<SVGForeignObjectElement, O>): RxNode<SVGForeignObjectElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.foreignObject) }
export function RxG<O = void>(name: string, triggers: unknown, render?: RxRender<SVGGElement, O>, customize?: RxCustomize<SVGGElement, O>): RxNode<SVGGElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.g) }
export function RxSvgImage<O = void>(name: string, triggers: unknown, render?: RxRender<SVGImageElement, O>, customize?: RxCustomize<SVGImageElement, O>): RxNode<SVGImageElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.image) }
export function RxLine<O = void>(name: string, triggers: unknown, render?: RxRender<SVGLineElement, O>, customize?: RxCustomize<SVGLineElement, O>): RxNode<SVGLineElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.line) }
export function RxLinearGradient<O = void>(name: string, triggers: unknown, render?: RxRender<SVGLinearGradientElement, O>, customize?: RxCustomize<SVGLinearGradientElement, O>): RxNode<SVGLinearGradientElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.linearGradient) }
export function RxMarker<O = void>(name: string, triggers: unknown, render?: RxRender<SVGMarkerElement, O>, customize?: RxCustomize<SVGMarkerElement, O>): RxNode<SVGMarkerElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.marker) }
export function RxMask<O = void>(name: string, triggers: unknown, render?: RxRender<SVGMaskElement, O>, customize?: RxCustomize<SVGMaskElement, O>): RxNode<SVGMaskElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.mask) }
export function RxMetadata<O = void>(name: string, triggers: unknown, render?: RxRender<SVGMetadataElement, O>, customize?: RxCustomize<SVGMetadataElement, O>): RxNode<SVGMetadataElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.metadata) }
export function RxMPath<O = void>(name: string, triggers: unknown, render?: RxRender<SVGElement, O>, customize?: RxCustomize<SVGElement, O>): RxNode<SVGElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.mpath) }
export function RxPath<O = void>(name: string, triggers: unknown, render?: RxRender<SVGPathElement, O>, customize?: RxCustomize<SVGPathElement, O>): RxNode<SVGPathElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.path) }
export function RxPattern<O = void>(name: string, triggers: unknown, render?: RxRender<SVGPatternElement, O>, customize?: RxCustomize<SVGPatternElement, O>): RxNode<SVGPatternElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.pattern) }
export function RxPolygon<O = void>(name: string, triggers: unknown, render?: RxRender<SVGPolygonElement, O>, customize?: RxCustomize<SVGPolygonElement, O>): RxNode<SVGPolygonElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.polygon) }
export function RxPolyline<O = void>(name: string, triggers: unknown, render?: RxRender<SVGPolylineElement, O>, customize?: RxCustomize<SVGPolylineElement, O>): RxNode<SVGPolylineElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.polyline) }
export function RxRadialGradient<O = void>(name: string, triggers: unknown, render?: RxRender<SVGRadialGradientElement, O>, customize?: RxCustomize<SVGRadialGradientElement, O>): RxNode<SVGRadialGradientElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.radialGradient) }
export function RxRect<O = void>(name: string, triggers: unknown, render?: RxRender<SVGRectElement, O>, customize?: RxCustomize<SVGRectElement, O>): RxNode<SVGRectElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.rect) }
export function RxStop<O = void>(name: string, triggers: unknown, render?: RxRender<SVGStopElement, O>, customize?: RxCustomize<SVGStopElement, O>): RxNode<SVGStopElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.stop) }
export function RxSvgSwitch<O = void>(name: string, triggers: unknown, render?: RxRender<SVGSwitchElement, O>, customize?: RxCustomize<SVGSwitchElement, O>): RxNode<SVGSwitchElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.switch) }
export function RxSymbol<O = void>(name: string, triggers: unknown, render?: RxRender<SVGSymbolElement, O>, customize?: RxCustomize<SVGSymbolElement, O>): RxNode<SVGSymbolElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.symbol) }
export function RxText<O = void>(name: string, triggers: unknown, render?: RxRender<SVGTextElement, O>, customize?: RxCustomize<SVGTextElement, O>): RxNode<SVGTextElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.text) }
export function RxTextPath<O = void>(name: string, triggers: unknown, render?: RxRender<SVGTextPathElement, O>, customize?: RxCustomize<SVGTextPathElement, O>): RxNode<SVGTextPathElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.textPath) }
export function RxTSpan<O = void>(name: string, triggers: unknown, render?: RxRender<SVGTSpanElement, O>, customize?: RxCustomize<SVGTSpanElement, O>): RxNode<SVGTSpanElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.tspan) }
export function RxUse<O = void>(name: string, triggers: unknown, render?: RxRender<SVGUseElement, O>, customize?: RxCustomize<SVGUseElement, O>): RxNode<SVGUseElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.use) }
export function RxView<O = void>(name: string, triggers: unknown, render?: RxRender<SVGViewElement, O>, customize?: RxCustomize<SVGViewElement, O>): RxNode<SVGViewElement, O> { return RxNode.Reaction(name, triggers, render, customize, SvgTags.view) }

export function Svg<O = void>(name: string, render?: RxRender<SVGSVGElement, O>, customize?: RxCustomize<SVGSVGElement, O>): RxNode<SVGSVGElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.svg) }
export function SvgA<O = void>(name: string, render?: RxRender<SVGAElement, O>, customize?: RxCustomize<SVGAElement, O>): RxNode<SVGAElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.a) }
export function Animate<O = void>(name: string, render?: RxRender<SVGAnimateElement, O>, customize?: RxCustomize<SVGAnimateElement, O>): RxNode<SVGAnimateElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.animate) }
export function AnimateMotion<O = void>(name: string, render?: RxRender<SVGAnimateMotionElement, O>, customize?: RxCustomize<SVGAnimateMotionElement, O>): RxNode<SVGAnimateMotionElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.animateMotion) }
export function AnimateTransform<O = void>(name: string, render?: RxRender<SVGAnimateTransformElement, O>, customize?: RxCustomize<SVGAnimateTransformElement, O>): RxNode<SVGAnimateTransformElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.animateTransform) }
export function Circle<O = void>(name: string, render?: RxRender<SVGCircleElement, O>, customize?: RxCustomize<SVGCircleElement, O>): RxNode<SVGCircleElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.circle) }
export function ClipPath<O = void>(name: string, render?: RxRender<SVGClipPathElement, O>, customize?: RxCustomize<SVGClipPathElement, O>): RxNode<SVGClipPathElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.clipPath) }
export function Defs<O = void>(name: string, render?: RxRender<SVGDefsElement, O>, customize?: RxCustomize<SVGDefsElement, O>): RxNode<SVGDefsElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.defs) }
export function Desc<O = void>(name: string, render?: RxRender<SVGDescElement, O>, customize?: RxCustomize<SVGDescElement, O>): RxNode<SVGDescElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.desc) }
export function Ellipse<O = void>(name: string, render?: RxRender<SVGEllipseElement, O>, customize?: RxCustomize<SVGEllipseElement, O>): RxNode<SVGEllipseElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.ellipse) }
export function FeBlend<O = void>(name: string, render?: RxRender<SVGFEBlendElement, O>, customize?: RxCustomize<SVGFEBlendElement, O>): RxNode<SVGFEBlendElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.feBlend) }
export function FeColorMatrix<O = void>(name: string, render?: RxRender<SVGFEColorMatrixElement, O>, customize?: RxCustomize<SVGFEColorMatrixElement, O>): RxNode<SVGFEColorMatrixElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.feColorMatrix) }
export function FeComponentTransfer<O = void>(name: string, render?: RxRender<SVGFEComponentTransferElement, O>, customize?: RxCustomize<SVGFEComponentTransferElement, O>): RxNode<SVGFEComponentTransferElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.feComponentTransfer) }
export function FeComposite<O = void>(name: string, render?: RxRender<SVGFECompositeElement, O>, customize?: RxCustomize<SVGFECompositeElement, O>): RxNode<SVGFECompositeElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.feComposite) }
export function FeConvolveMatrix<O = void>(name: string, render?: RxRender<SVGFEConvolveMatrixElement, O>, customize?: RxCustomize<SVGFEConvolveMatrixElement, O>): RxNode<SVGFEConvolveMatrixElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.feConvolveMatrix) }
export function FeDiffuseLighting<O = void>(name: string, render?: RxRender<SVGFEDiffuseLightingElement, O>, customize?: RxCustomize<SVGFEDiffuseLightingElement, O>): RxNode<SVGFEDiffuseLightingElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.feDiffuseLighting) }
export function FeDisplacementMap<O = void>(name: string, render?: RxRender<SVGFEDisplacementMapElement, O>, customize?: RxCustomize<SVGFEDisplacementMapElement, O>): RxNode<SVGFEDisplacementMapElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.feDisplacementMap) }
export function FeDistantLight<O = void>(name: string, render?: RxRender<SVGFEDistantLightElement, O>, customize?: RxCustomize<SVGFEDistantLightElement, O>): RxNode<SVGFEDistantLightElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.feDistantLight) }
export function FeDropShadow<O = void>(name: string, render?: RxRender<SVGFEDropShadowElement, O>, customize?: RxCustomize<SVGFEDropShadowElement, O>): RxNode<SVGFEDropShadowElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.feDropShadow) }
export function FeFlood<O = void>(name: string, render?: RxRender<SVGFEFloodElement, O>, customize?: RxCustomize<SVGFEFloodElement, O>): RxNode<SVGFEFloodElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.feFlood) }
export function FeFuncA<O = void>(name: string, render?: RxRender<SVGFEFuncAElement, O>, customize?: RxCustomize<SVGFEFuncAElement, O>): RxNode<SVGFEFuncAElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.feFuncA) }
export function FeFuncB<O = void>(name: string, render?: RxRender<SVGFEFuncBElement, O>, customize?: RxCustomize<SVGFEFuncBElement, O>): RxNode<SVGFEFuncBElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.feFuncB) }
export function FeFuncG<O = void>(name: string, render?: RxRender<SVGFEFuncGElement, O>, customize?: RxCustomize<SVGFEFuncGElement, O>): RxNode<SVGFEFuncGElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.feFuncG) }
export function FeFuncR<O = void>(name: string, render?: RxRender<SVGFEFuncRElement, O>, customize?: RxCustomize<SVGFEFuncRElement, O>): RxNode<SVGFEFuncRElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.feFuncR) }
export function FeGaussianBlur<O = void>(name: string, render?: RxRender<SVGFEGaussianBlurElement, O>, customize?: RxCustomize<SVGFEGaussianBlurElement, O>): RxNode<SVGFEGaussianBlurElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.feGaussianBlur) }
export function FeImage<O = void>(name: string, render?: RxRender<SVGFEImageElement, O>, customize?: RxCustomize<SVGFEImageElement, O>): RxNode<SVGFEImageElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.feImage) }
export function FeMerge<O = void>(name: string, render?: RxRender<SVGFEMergeElement, O>, customize?: RxCustomize<SVGFEMergeElement, O>): RxNode<SVGFEMergeElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.feMerge) }
export function FeMergeNode<O = void>(name: string, render?: RxRender<SVGFEMergeNodeElement, O>, customize?: RxCustomize<SVGFEMergeNodeElement, O>): RxNode<SVGFEMergeNodeElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.feMergeNode) }
export function FeMorphology<O = void>(name: string, render?: RxRender<SVGFEMorphologyElement, O>, customize?: RxCustomize<SVGFEMorphologyElement, O>): RxNode<SVGFEMorphologyElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.feMorphology) }
export function FeOffset<O = void>(name: string, render?: RxRender<SVGFEOffsetElement, O>, customize?: RxCustomize<SVGFEOffsetElement, O>): RxNode<SVGFEOffsetElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.feOffset) }
export function FePointLight<O = void>(name: string, render?: RxRender<SVGFEPointLightElement, O>, customize?: RxCustomize<SVGFEPointLightElement, O>): RxNode<SVGFEPointLightElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.fePointLight) }
export function FeSpecularLighting<O = void>(name: string, render?: RxRender<SVGFESpecularLightingElement, O>, customize?: RxCustomize<SVGFESpecularLightingElement, O>): RxNode<SVGFESpecularLightingElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.feSpecularLighting) }
export function FeSpotLight<O = void>(name: string, render?: RxRender<SVGFESpotLightElement, O>, customize?: RxCustomize<SVGFESpotLightElement, O>): RxNode<SVGFESpotLightElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.feSpotLight) }
export function FeTile<O = void>(name: string, render?: RxRender<SVGFETileElement, O>, customize?: RxCustomize<SVGFETileElement, O>): RxNode<SVGFETileElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.feTile) }
export function FeTurbulence<O = void>(name: string, render?: RxRender<SVGFETurbulenceElement, O>, customize?: RxCustomize<SVGFETurbulenceElement, O>): RxNode<SVGFETurbulenceElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.feTurbulence) }
export function Filter<O = void>(name: string, render?: RxRender<SVGFilterElement, O>, customize?: RxCustomize<SVGFilterElement, O>): RxNode<SVGFilterElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.filter) }
export function ForeignObject<O = void>(name: string, render?: RxRender<SVGForeignObjectElement, O>, customize?: RxCustomize<SVGForeignObjectElement, O>): RxNode<SVGForeignObjectElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.foreignObject) }
export function G<O = void>(name: string, render?: RxRender<SVGGElement, O>, customize?: RxCustomize<SVGGElement, O>): RxNode<SVGGElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.g) }
export function SvgImage<O = void>(name: string, render?: RxRender<SVGImageElement, O>, customize?: RxCustomize<SVGImageElement, O>): RxNode<SVGImageElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.image) }
export function Line<O = void>(name: string, render?: RxRender<SVGLineElement, O>, customize?: RxCustomize<SVGLineElement, O>): RxNode<SVGLineElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.line) }
export function LinearGradient<O = void>(name: string, render?: RxRender<SVGLinearGradientElement, O>, customize?: RxCustomize<SVGLinearGradientElement, O>): RxNode<SVGLinearGradientElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.linearGradient) }
export function Marker<O = void>(name: string, render?: RxRender<SVGMarkerElement, O>, customize?: RxCustomize<SVGMarkerElement, O>): RxNode<SVGMarkerElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.marker) }
export function Mask<O = void>(name: string, render?: RxRender<SVGMaskElement, O>, customize?: RxCustomize<SVGMaskElement, O>): RxNode<SVGMaskElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.mask) }
export function MetaData<O = void>(name: string, render?: RxRender<SVGMetadataElement, O>, customize?: RxCustomize<SVGMetadataElement, O>): RxNode<SVGMetadataElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.metadata) }
export function MPath<O = void>(name: string, render?: RxRender<SVGElement, O>, customize?: RxCustomize<SVGElement, O>): RxNode<SVGElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.mpath) }
export function Path<O = void>(name: string, render?: RxRender<SVGPathElement, O>, customize?: RxCustomize<SVGPathElement, O>): RxNode<SVGPathElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.path) }
export function Pattern<O = void>(name: string, render?: RxRender<SVGPatternElement, O>, customize?: RxCustomize<SVGPatternElement, O>): RxNode<SVGPatternElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.pattern) }
export function Polygon<O = void>(name: string, render?: RxRender<SVGPolygonElement, O>, customize?: RxCustomize<SVGPolygonElement, O>): RxNode<SVGPolygonElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.polygon) }
export function PolyLine<O = void>(name: string, render?: RxRender<SVGPolylineElement, O>, customize?: RxCustomize<SVGPolylineElement, O>): RxNode<SVGPolylineElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.polyline) }
export function RadialGradient<O = void>(name: string, render?: RxRender<SVGRadialGradientElement, O>, customize?: RxCustomize<SVGRadialGradientElement, O>): RxNode<SVGRadialGradientElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.radialGradient) }
export function Rect<O = void>(name: string, render?: RxRender<SVGRectElement, O>, customize?: RxCustomize<SVGRectElement, O>): RxNode<SVGRectElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.rect) }
export function Stop<O = void>(name: string, render?: RxRender<SVGStopElement, O>, customize?: RxCustomize<SVGStopElement, O>): RxNode<SVGStopElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.stop) }
export function SvgSwitch<O = void>(name: string, render?: RxRender<SVGSwitchElement, O>, customize?: RxCustomize<SVGSwitchElement, O>): RxNode<SVGSwitchElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.switch) }
export function Symbol<O = void>(name: string, render?: RxRender<SVGSymbolElement, O>, customize?: RxCustomize<SVGSymbolElement, O>): RxNode<SVGSymbolElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.symbol) }
export function Text<O = void>(name: string, render?: RxRender<SVGTextElement, O>, customize?: RxCustomize<SVGTextElement, O>): RxNode<SVGTextElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.text) }
export function TextPath<O = void>(name: string, render?: RxRender<SVGTextPathElement, O>, customize?: RxCustomize<SVGTextPathElement, O>): RxNode<SVGTextPathElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.textPath) }
export function TSpan<O = void>(name: string, render?: RxRender<SVGTSpanElement, O>, customize?: RxCustomize<SVGTSpanElement, O>): RxNode<SVGTSpanElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.tspan) }
export function Use<O = void>(name: string, render?: RxRender<SVGUseElement, O>, customize?: RxCustomize<SVGUseElement, O>): RxNode<SVGUseElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.use) }
export function View<O = void>(name: string, render?: RxRender<SVGViewElement, O>, customize?: RxCustomize<SVGViewElement, O>): RxNode<SVGViewElement> { return RxNode.Affiliate(name, undefined, render, customize, SvgTags.view) }

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
