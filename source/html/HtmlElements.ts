// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Monitor } from 'reactronic'
import { DomNode, Reaction, Affiliate, Render, Customize } from '../core/api'
import { RxHtmlNodeFactory, RxSvgNodeFactory } from './HtmlNodeFactory'

export function RxHtmlBody(name: string, triggers: unknown, render?: Render<HTMLElement>): DomNode<HTMLElement> {
  return Reaction(name, triggers, render, undefined, {
    name, arranging: true,
    initialize(node: DomNode<HTMLElement, any>, sibling?: DomNode): void {
      const native = node.native = global.document.body
      native.id = node.name
    },
  })
}

export function RxA<O = void>(name: string, triggers: unknown, render?: Render<HTMLAnchorElement, O>, customize?: Customize<HTMLAnchorElement, O>, monitor?: Monitor): DomNode<HTMLAnchorElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.a, monitor) }
export function RxAbbr<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.abbr, monitor) }
export function RxAddress<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.address, monitor) }
export function RxArea<O = void>(name: string, triggers: unknown, render?: Render<HTMLAreaElement, O>, customize?: Customize<HTMLAreaElement, O>, monitor?: Monitor): DomNode<HTMLAreaElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.area, monitor) }
export function RxArticle<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.article, monitor) }
export function RxAside<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.aside, monitor) }
export function RxAudio<O = void>(name: string, triggers: unknown, render?: Render<HTMLAudioElement, O>, customize?: Customize<HTMLAudioElement, O>, monitor?: Monitor): DomNode<HTMLAudioElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.audio, monitor) }
export function RxB<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.b, monitor) }
export function RxBase<O = void>(name: string, triggers: unknown, render?: Render<HTMLBaseElement, O>, customize?: Customize<HTMLBaseElement, O>, monitor?: Monitor): DomNode<HTMLBaseElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.base, monitor) }
export function RxBdi<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.bdi, monitor) }
export function RxBdo<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.bdo, monitor) }
export function RxBig<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.big, monitor) }
export function RxBlockQuote<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.blockquote, monitor) }
export function RxBody<O = void>(name: string, triggers: unknown, render?: Render<HTMLBodyElement, O>, customize?: Customize<HTMLBodyElement, O>, monitor?: Monitor): DomNode<HTMLBodyElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.body, monitor) }
export function RxBR<O = void>(name: string, triggers: unknown, render?: Render<HTMLBRElement, O>, customize?: Customize<HTMLBRElement, O>, monitor?: Monitor): DomNode<HTMLBRElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.br, monitor) }
export function RxButton<O = void>(name: string, triggers: unknown, render?: Render<HTMLButtonElement, O>, customize?: Customize<HTMLButtonElement, O>, monitor?: Monitor): DomNode<HTMLButtonElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.button, monitor) }
export function RxCanvas<O = void>(name: string, triggers: unknown, render?: Render<HTMLCanvasElement, O>, customize?: Customize<HTMLCanvasElement, O>, monitor?: Monitor): DomNode<HTMLCanvasElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.canvas, monitor) }
export function RxCaption<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableCaptionElement, O>, customize?: Customize<HTMLTableCaptionElement, O>, monitor?: Monitor): DomNode<HTMLTableCaptionElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.caption, monitor) }
export function RxCite<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.cite, monitor) }
export function RxCode<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.code, monitor) }
export function RxCol<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableColElement, O>, customize?: Customize<HTMLTableColElement, O>, monitor?: Monitor): DomNode<HTMLTableColElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.col, monitor) }
export function RxColGroup<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableColElement, O>, customize?: Customize<HTMLTableColElement, O>, monitor?: Monitor): DomNode<HTMLTableColElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.colgroup, monitor) }
export function RxData<O = void>(name: string, triggers: unknown, render?: Render<HTMLDataElement, O>, customize?: Customize<HTMLDataElement, O>, monitor?: Monitor): DomNode<HTMLDataElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.data, monitor) }
export function RxDataList<O = void>(name: string, triggers: unknown, render?: Render<HTMLDataListElement, O>, customize?: Customize<HTMLDataListElement, O>, monitor?: Monitor): DomNode<HTMLDataListElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.datalist, monitor) }
export function RxDD<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.dd, monitor) }
export function RxDel<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.del, monitor) }
export function RxDetails<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.details, monitor) }
export function RxDfn<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.dfn, monitor) }
export function RxDiv<O = void>(name: string, triggers: unknown, render?: Render<HTMLDivElement, O>, customize?: Customize<HTMLDivElement, O>, monitor?: Monitor): DomNode<HTMLDivElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.div, monitor) }
export function RxDL<O = void>(name: string, triggers: unknown, render?: Render<HTMLDListElement, O>, customize?: Customize<HTMLDListElement, O>, monitor?: Monitor): DomNode<HTMLDListElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.dl, monitor) }
export function RxDT<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.dt, monitor) }
export function RxEM<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.em, monitor) }
export function RxEmbed<O = void>(name: string, triggers: unknown, render?: Render<HTMLEmbedElement, O>, customize?: Customize<HTMLEmbedElement, O>, monitor?: Monitor): DomNode<HTMLEmbedElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.embed, monitor) }
export function RxFieldSet<O = void>(name: string, triggers: unknown, render?: Render<HTMLFieldSetElement, O>, customize?: Customize<HTMLFieldSetElement, O>, monitor?: Monitor): DomNode<HTMLFieldSetElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.fieldset, monitor) }
export function RxFigCaption<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.figcaption, monitor) }
export function RxFigure<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.figure, monitor) }
export function RxFooter<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.footer, monitor) }
export function RxForm<O = void>(name: string, triggers: unknown, render?: Render<HTMLFormElement, O>, customize?: Customize<HTMLFormElement, O>, monitor?: Monitor): DomNode<HTMLFormElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.form, monitor) }
export function RxH1<O = void>(name: string, triggers: unknown, render?: Render<HTMLHeadingElement, O>, customize?: Customize<HTMLHeadingElement, O>, monitor?: Monitor): DomNode<HTMLHeadingElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.h1, monitor) }
export function RxH2<O = void>(name: string, triggers: unknown, render?: Render<HTMLHeadingElement, O>, customize?: Customize<HTMLHeadingElement, O>, monitor?: Monitor): DomNode<HTMLHeadingElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.h2, monitor) }
export function RxH3<O = void>(name: string, triggers: unknown, render?: Render<HTMLHeadingElement, O>, customize?: Customize<HTMLHeadingElement, O>, monitor?: Monitor): DomNode<HTMLHeadingElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.h3, monitor) }
export function RxH4<O = void>(name: string, triggers: unknown, render?: Render<HTMLHeadingElement, O>, customize?: Customize<HTMLHeadingElement, O>, monitor?: Monitor): DomNode<HTMLHeadingElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.h4, monitor) }
export function RxH5<O = void>(name: string, triggers: unknown, render?: Render<HTMLHeadingElement, O>, customize?: Customize<HTMLHeadingElement, O>, monitor?: Monitor): DomNode<HTMLHeadingElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.h5, monitor) }
export function RxH6<O = void>(name: string, triggers: unknown, render?: Render<HTMLHeadingElement, O>, customize?: Customize<HTMLHeadingElement, O>, monitor?: Monitor): DomNode<HTMLHeadingElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.h6, monitor) }
export function RxHead<O = void>(name: string, triggers: unknown, render?: Render<HTMLHeadElement, O>, customize?: Customize<HTMLHeadElement, O>, monitor?: Monitor): DomNode<HTMLHeadElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.head, monitor) }
export function RxHeader<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.header, monitor) }
export function RxHGroup<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.hgroup, monitor) }
export function RxHR<O = void>(name: string, triggers: unknown, render?: Render<HTMLHRElement, O>, customize?: Customize<HTMLHRElement, O>, monitor?: Monitor): DomNode<HTMLHRElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.hr, monitor) }
export function RxHtml<O = void>(name: string, triggers: unknown, render?: Render<HTMLHtmlElement, O>, customize?: Customize<HTMLHtmlElement, O>, monitor?: Monitor): DomNode<HTMLHtmlElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.html, monitor) }
export function RxI<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.i, monitor) }
export function RxIFrame<O = void>(name: string, triggers: unknown, render?: Render<HTMLIFrameElement, O>, customize?: Customize<HTMLIFrameElement, O>, monitor?: Monitor): DomNode<HTMLIFrameElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.iframe, monitor) }
export function RxImg<O = void>(name: string, triggers: unknown, render?: Render<HTMLImageElement, O>, customize?: Customize<HTMLImageElement, O>, monitor?: Monitor): DomNode<HTMLImageElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.img, monitor) }
export function RxInput<O = void>(name: string, triggers: unknown, render?: Render<HTMLInputElement, O>, customize?: Customize<HTMLInputElement, O>, monitor?: Monitor): DomNode<HTMLInputElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.input, monitor) }
export function RxIns<O = void>(name: string, triggers: unknown, render?: Render<HTMLModElement, O>, customize?: Customize<HTMLModElement, O>, monitor?: Monitor): DomNode<HTMLModElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.ins, monitor) }
export function RxKbd<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.kbd, monitor) }
export function RxKeygen<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.keygen, monitor) }
export function RxLabel<O = void>(name: string, triggers: unknown, render?: Render<HTMLLabelElement, O>, customize?: Customize<HTMLLabelElement, O>, monitor?: Monitor): DomNode<HTMLLabelElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.label, monitor) }
export function RxLegend<O = void>(name: string, triggers: unknown, render?: Render<HTMLLegendElement, O>, customize?: Customize<HTMLLegendElement, O>, monitor?: Monitor): DomNode<HTMLLegendElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.legend, monitor) }
export function RxLI<O = void>(name: string, triggers: unknown, render?: Render<HTMLLIElement, O>, customize?: Customize<HTMLLIElement, O>, monitor?: Monitor): DomNode<HTMLLIElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.li, monitor) }
export function RxLink<O = void>(name: string, triggers: unknown, render?: Render<HTMLLinkElement, O>, customize?: Customize<HTMLLinkElement, O>, monitor?: Monitor): DomNode<HTMLLinkElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.link, monitor) }
export function RxMain<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.main, monitor) }
export function RxMap<O = void>(name: string, triggers: unknown, render?: Render<HTMLMapElement, O>, customize?: Customize<HTMLMapElement, O>, monitor?: Monitor): DomNode<HTMLMapElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.map, monitor) }
export function RxMark<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.mark, monitor) }
export function RxMenu<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.menu, monitor) }
export function RxMenuItem<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.menuitem, monitor) }
export function RxMeta<O = void>(name: string, triggers: unknown, render?: Render<HTMLMetaElement, O>, customize?: Customize<HTMLMetaElement, O>, monitor?: Monitor): DomNode<HTMLMetaElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.meta, monitor) }
export function RxMeter<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.meter, monitor) }
export function RxNav<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.nav, monitor) }
export function RxNoIndex<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.noindex, monitor) }
export function RxNoScript<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.noscript, monitor) }
export function RxObj<O = void>(name: string, triggers: unknown, render?: Render<HTMLObjectElement, O>, customize?: Customize<HTMLObjectElement, O>, monitor?: Monitor): DomNode<HTMLObjectElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.object, monitor) }
export function RxOL<O = void>(name: string, triggers: unknown, render?: Render<HTMLOListElement, O>, customize?: Customize<HTMLOListElement, O>, monitor?: Monitor): DomNode<HTMLOListElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.ol, monitor) }
export function RxOptGroup<O = void>(name: string, triggers: unknown, render?: Render<HTMLOptGroupElement, O>, customize?: Customize<HTMLOptGroupElement, O>, monitor?: Monitor): DomNode<HTMLOptGroupElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.optgroup, monitor) }
export function RxOption<O = void>(name: string, triggers: unknown, render?: Render<HTMLOptionElement, O>, customize?: Customize<HTMLOptionElement, O>, monitor?: Monitor): DomNode<HTMLOptionElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.option, monitor) }
export function RxOutput<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.output, monitor) }
export function RxP<O = void>(name: string, triggers: unknown, render?: Render<HTMLParagraphElement, O>, customize?: Customize<HTMLParagraphElement, O>, monitor?: Monitor): DomNode<HTMLParagraphElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.p, monitor) }
export function RxParam<O = void>(name: string, triggers: unknown, render?: Render<HTMLParamElement, O>, customize?: Customize<HTMLParamElement, O>, monitor?: Monitor): DomNode<HTMLParamElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.param, monitor) }
export function RxPicture<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.picture, monitor) }
export function RxPre<O = void>(name: string, triggers: unknown, render?: Render<HTMLPreElement, O>, customize?: Customize<HTMLPreElement, O>, monitor?: Monitor): DomNode<HTMLPreElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.pre, monitor) }
export function RxProgress<O = void>(name: string, triggers: unknown, render?: Render<HTMLProgressElement, O>, customize?: Customize<HTMLProgressElement, O>, monitor?: Monitor): DomNode<HTMLProgressElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.progress, monitor) }
export function RxQ<O = void>(name: string, triggers: unknown, render?: Render<HTMLQuoteElement, O>, customize?: Customize<HTMLQuoteElement, O>, monitor?: Monitor): DomNode<HTMLQuoteElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.q, monitor) }
export function RxRP<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.rp, monitor) }
export function RxRT<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.rt, monitor) }
export function RxRuby<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.ruby, monitor) }
export function RxS<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.s, monitor) }
export function RxSamp<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.samp, monitor) }
export function RxScript<O = void>(name: string, triggers: unknown, render?: Render<HTMLScriptElement, O>, customize?: Customize<HTMLScriptElement, O>, monitor?: Monitor): DomNode<HTMLScriptElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.script, monitor) }
export function RxSection<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.section, monitor) }
export function RxSelect<O = void>(name: string, triggers: unknown, render?: Render<HTMLSelectElement, O>, customize?: Customize<HTMLSelectElement, O>, monitor?: Monitor): DomNode<HTMLSelectElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.select, monitor) }
export function RxSmall<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.small, monitor) }
export function RxSource<O = void>(name: string, triggers: unknown, render?: Render<HTMLSourceElement, O>, customize?: Customize<HTMLSourceElement, O>, monitor?: Monitor): DomNode<HTMLSourceElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.source, monitor) }
export function RxSpan<O = void>(name: string, triggers: unknown, render?: Render<HTMLSpanElement, O>, customize?: Customize<HTMLSpanElement, O>, monitor?: Monitor): DomNode<HTMLSpanElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.span, monitor) }
export function RxStrong<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.strong, monitor) }
export function RxStyle<O = void>(name: string, triggers: unknown, render?: Render<HTMLStyleElement, O>, customize?: Customize<HTMLStyleElement, O>, monitor?: Monitor): DomNode<HTMLStyleElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.style, monitor) }
export function RxSub<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.sub, monitor) }
export function RxSummary<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.summary, monitor) }
export function RxSup<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.sup, monitor) }
export function RxTable<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableElement, O>, customize?: Customize<HTMLTableElement, O>, monitor?: Monitor): DomNode<HTMLTableElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.table, monitor) }
export function RxTemplate<O = void>(name: string, triggers: unknown, render?: Render<HTMLTemplateElement, O>, customize?: Customize<HTMLTemplateElement, O>, monitor?: Monitor): DomNode<HTMLTemplateElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.template, monitor) }
export function RxTBody<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableSectionElement, O>, customize?: Customize<HTMLTableSectionElement, O>, monitor?: Monitor): DomNode<HTMLTableSectionElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.tbody, monitor) }
export function RxTD<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableCellElement, O>, customize?: Customize<HTMLTableCellElement, O>, monitor?: Monitor): DomNode<HTMLTableCellElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.td, monitor) }
export function RxTextArea<O = void>(name: string, triggers: unknown, render?: Render<HTMLTextAreaElement, O>, customize?: Customize<HTMLTextAreaElement, O>, monitor?: Monitor): DomNode<HTMLTextAreaElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.textarea, monitor) }
export function RxTFoot<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableSectionElement, O>, customize?: Customize<HTMLTableSectionElement, O>, monitor?: Monitor): DomNode<HTMLTableSectionElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.tfoot, monitor) }
export function RxTH<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableCellElement, O>, customize?: Customize<HTMLTableCellElement, O>, monitor?: Monitor): DomNode<HTMLTableCellElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.th, monitor) }
export function RxTHead<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableSectionElement, O>, customize?: Customize<HTMLTableSectionElement, O>, monitor?: Monitor): DomNode<HTMLTableSectionElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.thead, monitor) }
export function RxTime<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.time, monitor) }
export function RxTitle<O = void>(name: string, triggers: unknown, render?: Render<HTMLTitleElement, O>, customize?: Customize<HTMLTitleElement, O>, monitor?: Monitor): DomNode<HTMLTitleElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.title, monitor) }
export function RxTR<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableRowElement, O>, customize?: Customize<HTMLTableRowElement, O>, monitor?: Monitor): DomNode<HTMLTableRowElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.tr, monitor) }
export function RxTrack<O = void>(name: string, triggers: unknown, render?: Render<HTMLTrackElement, O>, customize?: Customize<HTMLTrackElement, O>, monitor?: Monitor): DomNode<HTMLTrackElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.track, monitor) }
export function RxU<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.u, monitor) }
export function RxUL<O = void>(name: string, triggers: unknown, render?: Render<HTMLUListElement, O>, customize?: Customize<HTMLUListElement, O>, monitor?: Monitor): DomNode<HTMLUListElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.ul, monitor) }
export function RxVar<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.var, monitor) }
export function RxVideo<O = void>(name: string, triggers: unknown, render?: Render<HTMLVideoElement, O>, customize?: Customize<HTMLVideoElement, O>, monitor?: Monitor): DomNode<HTMLVideoElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.video, monitor) }
export function RxWbr<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): DomNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, HtmlTags.wbr, monitor) }

export function A<O = void>(name: string, render?: Render<HTMLAnchorElement, O>, customize?: Customize<HTMLAnchorElement, O>): DomNode<HTMLAnchorElement> { return Affiliate(name, undefined, render, customize, HtmlTags.a, undefined) }
export function Abbr<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.abbr, undefined) }
export function Address<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.address, undefined) }
export function Area<O = void>(name: string, render?: Render<HTMLAreaElement, O>, customize?: Customize<HTMLAreaElement, O>): DomNode<HTMLAreaElement> { return Affiliate(name, undefined, render, customize, HtmlTags.area, undefined) }
export function Article<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.article, undefined) }
export function Aside<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.aside, undefined) }
export function Audio<O = void>(name: string, render?: Render<HTMLAudioElement, O>, customize?: Customize<HTMLAudioElement, O>): DomNode<HTMLAudioElement> { return Affiliate(name, undefined, render, customize, HtmlTags.audio, undefined) }
export function B<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.b, undefined) }
export function Base<O = void>(name: string, render?: Render<HTMLBaseElement, O>, customize?: Customize<HTMLBaseElement, O>): DomNode<HTMLBaseElement> { return Affiliate(name, undefined, render, customize, HtmlTags.base, undefined) }
export function Bdi<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.bdi, undefined) }
export function Bdo<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.bdo, undefined) }
export function Big<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.big, undefined) }
export function BlockQuote<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.blockquote, undefined) }
export function Body<O = void>(name: string, render?: Render<HTMLBodyElement, O>, customize?: Customize<HTMLBodyElement, O>): DomNode<HTMLBodyElement> { return Affiliate(name, undefined, render, customize, HtmlTags.body, undefined) }
export function BR<O = void>(name: string, render?: Render<HTMLBRElement, O>, customize?: Customize<HTMLBRElement, O>): DomNode<HTMLBRElement> { return Affiliate(name, undefined, render, customize, HtmlTags.br, undefined) }
export function Button<O = void>(name: string, render?: Render<HTMLButtonElement, O>, customize?: Customize<HTMLButtonElement, O>): DomNode<HTMLButtonElement> { return Affiliate(name, undefined, render, customize, HtmlTags.button, undefined) }
export function Canvas<O = void>(name: string, render?: Render<HTMLCanvasElement, O>, customize?: Customize<HTMLCanvasElement, O>): DomNode<HTMLCanvasElement> { return Affiliate(name, undefined, render, customize, HtmlTags.canvas, undefined) }
export function Caption<O = void>(name: string, render?: Render<HTMLTableCaptionElement, O>, customize?: Customize<HTMLTableCaptionElement, O>): DomNode<HTMLTableCaptionElement> { return Affiliate(name, undefined, render, customize, HtmlTags.caption, undefined) }
export function Cite<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.cite, undefined) }
export function Code<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.code, undefined) }
export function Col<O = void>(name: string, render?: Render<HTMLTableColElement, O>, customize?: Customize<HTMLTableColElement, O>): DomNode<HTMLTableColElement> { return Affiliate(name, undefined, render, customize, HtmlTags.col, undefined) }
export function ColGroup<O = void>(name: string, render?: Render<HTMLTableColElement, O>, customize?: Customize<HTMLTableColElement, O>): DomNode<HTMLTableColElement> { return Affiliate(name, undefined, render, customize, HtmlTags.colgroup, undefined) }
export function Data<O = void>(name: string, render?: Render<HTMLDataElement, O>, customize?: Customize<HTMLDataElement, O>): DomNode<HTMLDataElement> { return Affiliate(name, undefined, render, customize, HtmlTags.data, undefined) }
export function DataList<O = void>(name: string, render?: Render<HTMLDataListElement, O>, customize?: Customize<HTMLDataListElement, O>): DomNode<HTMLDataListElement> { return Affiliate(name, undefined, render, customize, HtmlTags.datalist, undefined) }
export function DD<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.dd, undefined) }
export function Del<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.del, undefined) }
export function Details<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.details, undefined) }
export function Dfn<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.dfn, undefined) }
export function Div<O = void>(name: string, render?: Render<HTMLDivElement, O>, customize?: Customize<HTMLDivElement, O>): DomNode<HTMLDivElement> { return Affiliate(name, undefined, render, customize, HtmlTags.div, undefined) }
export function DL<O = void>(name: string, render?: Render<HTMLDListElement, O>, customize?: Customize<HTMLDListElement, O>): DomNode<HTMLDListElement> { return Affiliate(name, undefined, render, customize, HtmlTags.dl, undefined) }
export function DT<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.dt, undefined) }
export function EM<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.em, undefined) }
export function Embed<O = void>(name: string, render?: Render<HTMLEmbedElement, O>, customize?: Customize<HTMLEmbedElement, O>): DomNode<HTMLEmbedElement> { return Affiliate(name, undefined, render, customize, HtmlTags.embed, undefined) }
export function FieldSet<O = void>(name: string, render?: Render<HTMLFieldSetElement, O>, customize?: Customize<HTMLFieldSetElement, O>): DomNode<HTMLFieldSetElement> { return Affiliate(name, undefined, render, customize, HtmlTags.fieldset, undefined) }
export function FigCaption<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.figcaption, undefined) }
export function Figure<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.figure, undefined) }
export function Footer<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.footer, undefined) }
export function Form<O = void>(name: string, render?: Render<HTMLFormElement, O>, customize?: Customize<HTMLFormElement, O>): DomNode<HTMLFormElement> { return Affiliate(name, undefined, render, customize, HtmlTags.form, undefined) }
export function H1<O = void>(name: string, render?: Render<HTMLHeadingElement, O>, customize?: Customize<HTMLHeadingElement, O>): DomNode<HTMLHeadingElement> { return Affiliate(name, undefined, render, customize, HtmlTags.h1, undefined) }
export function H2<O = void>(name: string, render?: Render<HTMLHeadingElement, O>, customize?: Customize<HTMLHeadingElement, O>): DomNode<HTMLHeadingElement> { return Affiliate(name, undefined, render, customize, HtmlTags.h2, undefined) }
export function H3<O = void>(name: string, render?: Render<HTMLHeadingElement, O>, customize?: Customize<HTMLHeadingElement, O>): DomNode<HTMLHeadingElement> { return Affiliate(name, undefined, render, customize, HtmlTags.h3, undefined) }
export function H4<O = void>(name: string, render?: Render<HTMLHeadingElement, O>, customize?: Customize<HTMLHeadingElement, O>): DomNode<HTMLHeadingElement> { return Affiliate(name, undefined, render, customize, HtmlTags.h4, undefined) }
export function H5<O = void>(name: string, render?: Render<HTMLHeadingElement, O>, customize?: Customize<HTMLHeadingElement, O>): DomNode<HTMLHeadingElement> { return Affiliate(name, undefined, render, customize, HtmlTags.h5, undefined) }
export function H6<O = void>(name: string, render?: Render<HTMLHeadingElement, O>, customize?: Customize<HTMLHeadingElement, O>): DomNode<HTMLHeadingElement> { return Affiliate(name, undefined, render, customize, HtmlTags.h6, undefined) }
export function Head<O = void>(name: string, render?: Render<HTMLHeadElement, O>, customize?: Customize<HTMLHeadElement, O>): DomNode<HTMLHeadElement> { return Affiliate(name, undefined, render, customize, HtmlTags.head, undefined) }
export function Header<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.header, undefined) }
export function HGroup<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.hgroup, undefined) }
export function HR<O = void>(name: string, render?: Render<HTMLHRElement, O>, customize?: Customize<HTMLHRElement, O>): DomNode<HTMLHRElement> { return Affiliate(name, undefined, render, customize, HtmlTags.hr, undefined) }
export function Html<O = void>(name: string, render?: Render<HTMLHtmlElement, O>, customize?: Customize<HTMLHtmlElement, O>): DomNode<HTMLHtmlElement> { return Affiliate(name, undefined, render, customize, HtmlTags.html, undefined) }
export function I<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.i, undefined) }
export function IFrame<O = void>(name: string, render?: Render<HTMLIFrameElement, O>, customize?: Customize<HTMLIFrameElement, O>): DomNode<HTMLIFrameElement> { return Affiliate(name, undefined, render, customize, HtmlTags.iframe, undefined) }
export function Img<O = void>(name: string, render?: Render<HTMLImageElement, O>, customize?: Customize<HTMLImageElement, O>): DomNode<HTMLImageElement> { return Affiliate(name, undefined, render, customize, HtmlTags.img, undefined) }
export function Input<O = void>(name: string, render?: Render<HTMLInputElement, O>, customize?: Customize<HTMLInputElement, O>): DomNode<HTMLInputElement> { return Affiliate(name, undefined, render, customize, HtmlTags.input, undefined) }
export function Ins<O = void>(name: string, render?: Render<HTMLModElement, O>, customize?: Customize<HTMLModElement, O>): DomNode<HTMLModElement> { return Affiliate(name, undefined, render, customize, HtmlTags.ins, undefined) }
export function Kbd<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.kbd, undefined) }
export function KeyGen<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.keygen, undefined) }
export function Label<O = void>(name: string, render?: Render<HTMLLabelElement, O>, customize?: Customize<HTMLLabelElement, O>): DomNode<HTMLLabelElement> { return Affiliate(name, undefined, render, customize, HtmlTags.label, undefined) }
export function Legend<O = void>(name: string, render?: Render<HTMLLegendElement, O>, customize?: Customize<HTMLLegendElement, O>): DomNode<HTMLLegendElement> { return Affiliate(name, undefined, render, customize, HtmlTags.legend, undefined) }
export function LI<O = void>(name: string, render?: Render<HTMLLIElement, O>, customize?: Customize<HTMLLIElement, O>): DomNode<HTMLLIElement> { return Affiliate(name, undefined, render, customize, HtmlTags.li, undefined) }
export function Link<O = void>(name: string, render?: Render<HTMLLinkElement, O>, customize?: Customize<HTMLLinkElement, O>): DomNode<HTMLLinkElement> { return Affiliate(name, undefined, render, customize, HtmlTags.link, undefined) }
export function Main<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.main, undefined) }
export function Map<O = void>(name: string, render?: Render<HTMLMapElement, O>, customize?: Customize<HTMLMapElement, O>): DomNode<HTMLMapElement> { return Affiliate(name, undefined, render, customize, HtmlTags.map, undefined) }
export function Mark<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.mark, undefined) }
export function Menu<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.menu, undefined) }
export function MenuItem<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.menuitem, undefined) }
export function Meta<O = void>(name: string, render?: Render<HTMLMetaElement, O>, customize?: Customize<HTMLMetaElement, O>): DomNode<HTMLMetaElement> { return Affiliate(name, undefined, render, customize, HtmlTags.meta, undefined) }
export function Meter<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.meter, undefined) }
export function Nav<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.nav, undefined) }
export function NoIndex<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.noindex, undefined) }
export function NoScript<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.noscript, undefined) }
export function Obj<O = void>(name: string, render?: Render<HTMLObjectElement, O>, customize?: Customize<HTMLObjectElement, O>): DomNode<HTMLObjectElement> { return Affiliate(name, undefined, render, customize, HtmlTags.object, undefined) }
export function OL<O = void>(name: string, render?: Render<HTMLOListElement, O>, customize?: Customize<HTMLOListElement, O>): DomNode<HTMLOListElement> { return Affiliate(name, undefined, render, customize, HtmlTags.ol, undefined) }
export function OptGroup<O = void>(name: string, render?: Render<HTMLOptGroupElement, O>, customize?: Customize<HTMLOptGroupElement, O>): DomNode<HTMLOptGroupElement> { return Affiliate(name, undefined, render, customize, HtmlTags.optgroup, undefined) }
export function Option<O = void>(name: string, render?: Render<HTMLOptionElement, O>, customize?: Customize<HTMLOptionElement, O>): DomNode<HTMLOptionElement> { return Affiliate(name, undefined, render, customize, HtmlTags.option, undefined) }
export function Output<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.output, undefined) }
export function P<O = void>(name: string, render?: Render<HTMLParagraphElement, O>, customize?: Customize<HTMLParagraphElement, O>): DomNode<HTMLParagraphElement> { return Affiliate(name, undefined, render, customize, HtmlTags.p, undefined) }
export function Param<O = void>(name: string, render?: Render<HTMLParamElement, O>, customize?: Customize<HTMLParamElement, O>): DomNode<HTMLParamElement> { return Affiliate(name, undefined, render, customize, HtmlTags.param, undefined) }
export function Picture<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.picture, undefined) }
export function Pre<O = void>(name: string, render?: Render<HTMLPreElement, O>, customize?: Customize<HTMLPreElement, O>): DomNode<HTMLPreElement> { return Affiliate(name, undefined, render, customize, HtmlTags.pre, undefined) }
export function Progress<O = void>(name: string, render?: Render<HTMLProgressElement, O>, customize?: Customize<HTMLProgressElement, O>): DomNode<HTMLProgressElement> { return Affiliate(name, undefined, render, customize, HtmlTags.progress, undefined) }
export function Q<O = void>(name: string, render?: Render<HTMLQuoteElement, O>, customize?: Customize<HTMLQuoteElement, O>): DomNode<HTMLQuoteElement> { return Affiliate(name, undefined, render, customize, HtmlTags.q, undefined) }
export function RP<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.rp, undefined) }
export function RT<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.rt, undefined) }
export function Ruby<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.ruby, undefined) }
export function S<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.s, undefined) }
export function Samp<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.samp, undefined) }
export function Script<O = void>(name: string, render?: Render<HTMLScriptElement, O>, customize?: Customize<HTMLScriptElement, O>): DomNode<HTMLScriptElement> { return Affiliate(name, undefined, render, customize, HtmlTags.script, undefined) }
export function Section<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.section, undefined) }
export function Select<O = void>(name: string, render?: Render<HTMLSelectElement, O>, customize?: Customize<HTMLSelectElement, O>): DomNode<HTMLSelectElement> { return Affiliate(name, undefined, render, customize, HtmlTags.select, undefined) }
export function Small<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.small, undefined) }
export function Source<O = void>(name: string, render?: Render<HTMLSourceElement, O>, customize?: Customize<HTMLSourceElement, O>): DomNode<HTMLSourceElement> { return Affiliate(name, undefined, render, customize, HtmlTags.source, undefined) }
export function Span<O = void>(name: string, render?: Render<HTMLSpanElement, O>, customize?: Customize<HTMLSpanElement, O>): DomNode<HTMLSpanElement> { return Affiliate(name, undefined, render, customize, HtmlTags.span, undefined) }
export function Strong<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.strong, undefined) }
export function Style<O = void>(name: string, render?: Render<HTMLStyleElement, O>, customize?: Customize<HTMLStyleElement, O>): DomNode<HTMLStyleElement> { return Affiliate(name, undefined, render, customize, HtmlTags.style, undefined) }
export function Sub<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.sub, undefined) }
export function Summary<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.summary, undefined) }
export function Sup<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.sup, undefined) }
export function Table<O = void>(name: string, render?: Render<HTMLTableElement, O>, customize?: Customize<HTMLTableElement, O>): DomNode<HTMLTableElement> { return Affiliate(name, undefined, render, customize, HtmlTags.table, undefined) }
export function Template<O = void>(name: string, render?: Render<HTMLTemplateElement, O>, customize?: Customize<HTMLTemplateElement, O>): DomNode<HTMLTemplateElement> { return Affiliate(name, undefined, render, customize, HtmlTags.template, undefined) }
export function TBody<O = void>(name: string, render?: Render<HTMLTableSectionElement, O>, customize?: Customize<HTMLTableSectionElement, O>): DomNode<HTMLTableSectionElement> { return Affiliate(name, undefined, render, customize, HtmlTags.tbody, undefined) }
export function TD<O = void>(name: string, render?: Render<HTMLTableCellElement, O>, customize?: Customize<HTMLTableCellElement, O>): DomNode<HTMLTableCellElement> { return Affiliate(name, undefined, render, customize, HtmlTags.td, undefined) }
export function TextArea<O = void>(name: string, render?: Render<HTMLTextAreaElement, O>, customize?: Customize<HTMLTextAreaElement, O>): DomNode<HTMLTextAreaElement> { return Affiliate(name, undefined, render, customize, HtmlTags.textarea, undefined) }
export function TFoot<O = void>(name: string, render?: Render<HTMLTableSectionElement, O>, customize?: Customize<HTMLTableSectionElement, O>): DomNode<HTMLTableSectionElement> { return Affiliate(name, undefined, render, customize, HtmlTags.tfoot, undefined) }
export function TH<O = void>(name: string, render?: Render<HTMLTableCellElement, O>, customize?: Customize<HTMLTableCellElement, O>): DomNode<HTMLTableCellElement> { return Affiliate(name, undefined, render, customize, HtmlTags.th, undefined) }
export function THead<O = void>(name: string, render?: Render<HTMLTableSectionElement, O>, customize?: Customize<HTMLTableSectionElement, O>): DomNode<HTMLTableSectionElement> { return Affiliate(name, undefined, render, customize, HtmlTags.thead, undefined) }
export function Time<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.time, undefined) }
export function Title<O = void>(name: string, render?: Render<HTMLTitleElement, O>, customize?: Customize<HTMLTitleElement, O>): DomNode<HTMLTitleElement> { return Affiliate(name, undefined, render, customize, HtmlTags.title, undefined) }
export function TR<O = void>(name: string, render?: Render<HTMLTableRowElement, O>, customize?: Customize<HTMLTableRowElement, O>): DomNode<HTMLTableRowElement> { return Affiliate(name, undefined, render, customize, HtmlTags.tr, undefined) }
export function Track<O = void>(name: string, render?: Render<HTMLTrackElement, O>, customize?: Customize<HTMLTrackElement, O>): DomNode<HTMLTrackElement> { return Affiliate(name, undefined, render, customize, HtmlTags.track, undefined) }
export function U<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.u, undefined) }
export function UL<O = void>(name: string, render?: Render<HTMLUListElement, O>, customize?: Customize<HTMLUListElement, O>): DomNode<HTMLUListElement> { return Affiliate(name, undefined, render, customize, HtmlTags.ul, undefined) }
export function Var<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.var, undefined) }
export function Video<O = void>(name: string, render?: Render<HTMLVideoElement, O>, customize?: Customize<HTMLVideoElement, O>): DomNode<HTMLVideoElement> { return Affiliate(name, undefined, render, customize, HtmlTags.video, undefined) }
export function Wbr<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): DomNode<HTMLElement> { return Affiliate(name, undefined, render, customize, HtmlTags.wbr, undefined) }

export function RxSvg<O = void>(name: string, triggers: unknown, render?: Render<SVGSVGElement, O>, customize?: Customize<SVGSVGElement, O>): DomNode<SVGSVGElement, O> { return Reaction(name, triggers, render, customize, SvgTags.svg) }
export function RxSvgA<O = void>(name: string, triggers: unknown, render?: Render<SVGAElement, O>, customize?: Customize<SVGAElement, O>): DomNode<SVGAElement, O> { return Reaction(name, triggers, render, customize, SvgTags.a) }
export function RxAnimate<O = void>(name: string, triggers: unknown, render?: Render<SVGAnimateElement, O>, customize?: Customize<SVGAnimateElement, O>): DomNode<SVGAnimateElement, O> { return Reaction(name, triggers, render, customize, SvgTags.animate) }
export function RxAnimateMotion<O = void>(name: string, triggers: unknown, render?: Render<SVGAnimateMotionElement, O>, customize?: Customize<SVGAnimateMotionElement, O>): DomNode<SVGAnimateMotionElement, O> { return Reaction(name, triggers, render, customize, SvgTags.animateMotion) }
export function RxAnimateTransform<O = void>(name: string, triggers: unknown, render?: Render<SVGAnimateTransformElement, O>, customize?: Customize<SVGAnimateTransformElement, O>): DomNode<SVGAnimateTransformElement, O> { return Reaction(name, triggers, render, customize, SvgTags.animateTransform) }
export function RxCircle<O = void>(name: string, triggers: unknown, render?: Render<SVGCircleElement, O>, customize?: Customize<SVGCircleElement, O>): DomNode<SVGCircleElement, O> { return Reaction(name, triggers, render, customize, SvgTags.circle) }
export function RxClipPath<O = void>(name: string, triggers: unknown, render?: Render<SVGClipPathElement, O>, customize?: Customize<SVGClipPathElement, O>): DomNode<SVGClipPathElement, O> { return Reaction(name, triggers, render, customize, SvgTags.clipPath) }
export function RxDefs<O = void>(name: string, triggers: unknown, render?: Render<SVGDefsElement, O>, customize?: Customize<SVGDefsElement, O>): DomNode<SVGDefsElement, O> { return Reaction(name, triggers, render, customize, SvgTags.defs) }
export function RxDesc<O = void>(name: string, triggers: unknown, render?: Render<SVGDescElement, O>, customize?: Customize<SVGDescElement, O>): DomNode<SVGDescElement, O> { return Reaction(name, triggers, render, customize, SvgTags.desc) }
export function RxEllipse<O = void>(name: string, triggers: unknown, render?: Render<SVGEllipseElement, O>, customize?: Customize<SVGEllipseElement, O>): DomNode<SVGEllipseElement, O> { return Reaction(name, triggers, render, customize, SvgTags.ellipse) }
export function RxFeBlend<O = void>(name: string, triggers: unknown, render?: Render<SVGFEBlendElement, O>, customize?: Customize<SVGFEBlendElement, O>): DomNode<SVGFEBlendElement, O> { return Reaction(name, triggers, render, customize, SvgTags.feBlend) }
export function RxFeColorMatrix<O = void>(name: string, triggers: unknown, render?: Render<SVGFEColorMatrixElement, O>, customize?: Customize<SVGFEColorMatrixElement, O>): DomNode<SVGFEColorMatrixElement, O> { return Reaction(name, triggers, render, customize, SvgTags.feColorMatrix) }
export function RxFeComponentTransfer<O = void>(name: string, triggers: unknown, render?: Render<SVGFEComponentTransferElement, O>, customize?: Customize<SVGFEComponentTransferElement, O>): DomNode<SVGFEComponentTransferElement, O> { return Reaction(name, triggers, render, customize, SvgTags.feComponentTransfer) }
export function RxFeComposite<O = void>(name: string, triggers: unknown, render?: Render<SVGFECompositeElement, O>, customize?: Customize<SVGFECompositeElement, O>): DomNode<SVGFECompositeElement, O> { return Reaction(name, triggers, render, customize, SvgTags.feComposite) }
export function RxFeConvolveMatrix<O = void>(name: string, triggers: unknown, render?: Render<SVGFEConvolveMatrixElement, O>, customize?: Customize<SVGFEConvolveMatrixElement, O>): DomNode<SVGFEConvolveMatrixElement, O> { return Reaction(name, triggers, render, customize, SvgTags.feConvolveMatrix) }
export function RxFeDiffuseLighting<O = void>(name: string, triggers: unknown, render?: Render<SVGFEDiffuseLightingElement, O>, customize?: Customize<SVGFEDiffuseLightingElement, O>): DomNode<SVGFEDiffuseLightingElement, O> { return Reaction(name, triggers, render, customize, SvgTags.feDiffuseLighting) }
export function RxFeDisplacementMap<O = void>(name: string, triggers: unknown, render?: Render<SVGFEDisplacementMapElement, O>, customize?: Customize<SVGFEDisplacementMapElement, O>): DomNode<SVGFEDisplacementMapElement, O> { return Reaction(name, triggers, render, customize, SvgTags.feDisplacementMap) }
export function RxFeDistantLight<O = void>(name: string, triggers: unknown, render?: Render<SVGFEDistantLightElement, O>, customize?: Customize<SVGFEDistantLightElement, O>): DomNode<SVGFEDistantLightElement, O> { return Reaction(name, triggers, render, customize, SvgTags.feDistantLight) }
export function RxFeDropShadow<O = void>(name: string, triggers: unknown, render?: Render<SVGFEDropShadowElement, O>, customize?: Customize<SVGFEDropShadowElement, O>): DomNode<SVGFEDropShadowElement, O> { return Reaction(name, triggers, render, customize, SvgTags.feDropShadow) }
export function RxFeFlood<O = void>(name: string, triggers: unknown, render?: Render<SVGFEFloodElement, O>, customize?: Customize<SVGFEFloodElement, O>): DomNode<SVGFEFloodElement, O> { return Reaction(name, triggers, render, customize, SvgTags.feFlood) }
export function RxFeFuncA<O = void>(name: string, triggers: unknown, render?: Render<SVGFEFuncAElement, O>, customize?: Customize<SVGFEFuncAElement, O>): DomNode<SVGFEFuncAElement, O> { return Reaction(name, triggers, render, customize, SvgTags.feFuncA) }
export function RxFeFuncB<O = void>(name: string, triggers: unknown, render?: Render<SVGFEFuncBElement, O>, customize?: Customize<SVGFEFuncBElement, O>): DomNode<SVGFEFuncBElement, O> { return Reaction(name, triggers, render, customize, SvgTags.feFuncB) }
export function RxFeFuncG<O = void>(name: string, triggers: unknown, render?: Render<SVGFEFuncGElement, O>, customize?: Customize<SVGFEFuncGElement, O>): DomNode<SVGFEFuncGElement, O> { return Reaction(name, triggers, render, customize, SvgTags.feFuncG) }
export function RxFeFuncR<O = void>(name: string, triggers: unknown, render?: Render<SVGFEFuncRElement, O>, customize?: Customize<SVGFEFuncRElement, O>): DomNode<SVGFEFuncRElement, O> { return Reaction(name, triggers, render, customize, SvgTags.feFuncR) }
export function RxFeGaussianBlur<O = void>(name: string, triggers: unknown, render?: Render<SVGFEGaussianBlurElement, O>, customize?: Customize<SVGFEGaussianBlurElement, O>): DomNode<SVGFEGaussianBlurElement, O> { return Reaction(name, triggers, render, customize, SvgTags.feGaussianBlur) }
export function RxFeImage<O = void>(name: string, triggers: unknown, render?: Render<SVGFEImageElement, O>, customize?: Customize<SVGFEImageElement, O>): DomNode<SVGFEImageElement, O> { return Reaction(name, triggers, render, customize, SvgTags.feImage) }
export function RxFeMerge<O = void>(name: string, triggers: unknown, render?: Render<SVGFEMergeElement, O>, customize?: Customize<SVGFEMergeElement, O>): DomNode<SVGFEMergeElement, O> { return Reaction(name, triggers, render, customize, SvgTags.feMerge) }
export function RxFeMergeNode<O = void>(name: string, triggers: unknown, render?: Render<SVGFEMergeNodeElement, O>, customize?: Customize<SVGFEMergeNodeElement, O>): DomNode<SVGFEMergeNodeElement, O> { return Reaction(name, triggers, render, customize, SvgTags.feMergeNode) }
export function RxFeMorphology<O = void>(name: string, triggers: unknown, render?: Render<SVGFEMorphologyElement, O>, customize?: Customize<SVGFEMorphologyElement, O>): DomNode<SVGFEMorphologyElement, O> { return Reaction(name, triggers, render, customize, SvgTags.feMorphology) }
export function RxFeOffset<O = void>(name: string, triggers: unknown, render?: Render<SVGFEOffsetElement, O>, customize?: Customize<SVGFEOffsetElement, O>): DomNode<SVGFEOffsetElement, O> { return Reaction(name, triggers, render, customize, SvgTags.feOffset) }
export function RxFePointLight<O = void>(name: string, triggers: unknown, render?: Render<SVGFEPointLightElement, O>, customize?: Customize<SVGFEPointLightElement, O>): DomNode<SVGFEPointLightElement, O> { return Reaction(name, triggers, render, customize, SvgTags.fePointLight) }
export function RxFeSpecularLighting<O = void>(name: string, triggers: unknown, render?: Render<SVGFESpecularLightingElement, O>, customize?: Customize<SVGFESpecularLightingElement, O>): DomNode<SVGFESpecularLightingElement, O> { return Reaction(name, triggers, render, customize, SvgTags.feSpecularLighting) }
export function RxFeSpotLight<O = void>(name: string, triggers: unknown, render?: Render<SVGFESpotLightElement, O>, customize?: Customize<SVGFESpotLightElement, O>): DomNode<SVGFESpotLightElement, O> { return Reaction(name, triggers, render, customize, SvgTags.feSpotLight) }
export function RxFeTile<O = void>(name: string, triggers: unknown, render?: Render<SVGFETileElement, O>, customize?: Customize<SVGFETileElement, O>): DomNode<SVGFETileElement, O> { return Reaction(name, triggers, render, customize, SvgTags.feTile) }
export function RxFeTurbulence<O = void>(name: string, triggers: unknown, render?: Render<SVGFETurbulenceElement, O>, customize?: Customize<SVGFETurbulenceElement, O>): DomNode<SVGFETurbulenceElement, O> { return Reaction(name, triggers, render, customize, SvgTags.feTurbulence) }
export function RxFilter<O = void>(name: string, triggers: unknown, render?: Render<SVGFilterElement, O>, customize?: Customize<SVGFilterElement, O>): DomNode<SVGFilterElement, O> { return Reaction(name, triggers, render, customize, SvgTags.filter) }
export function RxForeignObject<O = void>(name: string, triggers: unknown, render?: Render<SVGForeignObjectElement, O>, customize?: Customize<SVGForeignObjectElement, O>): DomNode<SVGForeignObjectElement, O> { return Reaction(name, triggers, render, customize, SvgTags.foreignObject) }
export function RxG<O = void>(name: string, triggers: unknown, render?: Render<SVGGElement, O>, customize?: Customize<SVGGElement, O>): DomNode<SVGGElement, O> { return Reaction(name, triggers, render, customize, SvgTags.g) }
export function RxSvgImage<O = void>(name: string, triggers: unknown, render?: Render<SVGImageElement, O>, customize?: Customize<SVGImageElement, O>): DomNode<SVGImageElement, O> { return Reaction(name, triggers, render, customize, SvgTags.image) }
export function RxLine<O = void>(name: string, triggers: unknown, render?: Render<SVGLineElement, O>, customize?: Customize<SVGLineElement, O>): DomNode<SVGLineElement, O> { return Reaction(name, triggers, render, customize, SvgTags.line) }
export function RxLinearGradient<O = void>(name: string, triggers: unknown, render?: Render<SVGLinearGradientElement, O>, customize?: Customize<SVGLinearGradientElement, O>): DomNode<SVGLinearGradientElement, O> { return Reaction(name, triggers, render, customize, SvgTags.linearGradient) }
export function RxMarker<O = void>(name: string, triggers: unknown, render?: Render<SVGMarkerElement, O>, customize?: Customize<SVGMarkerElement, O>): DomNode<SVGMarkerElement, O> { return Reaction(name, triggers, render, customize, SvgTags.marker) }
export function RxMask<O = void>(name: string, triggers: unknown, render?: Render<SVGMaskElement, O>, customize?: Customize<SVGMaskElement, O>): DomNode<SVGMaskElement, O> { return Reaction(name, triggers, render, customize, SvgTags.mask) }
export function RxMetadata<O = void>(name: string, triggers: unknown, render?: Render<SVGMetadataElement, O>, customize?: Customize<SVGMetadataElement, O>): DomNode<SVGMetadataElement, O> { return Reaction(name, triggers, render, customize, SvgTags.metadata) }
export function RxMPath<O = void>(name: string, triggers: unknown, render?: Render<SVGElement, O>, customize?: Customize<SVGElement, O>): DomNode<SVGElement, O> { return Reaction(name, triggers, render, customize, SvgTags.mpath) }
export function RxPath<O = void>(name: string, triggers: unknown, render?: Render<SVGPathElement, O>, customize?: Customize<SVGPathElement, O>): DomNode<SVGPathElement, O> { return Reaction(name, triggers, render, customize, SvgTags.path) }
export function RxPattern<O = void>(name: string, triggers: unknown, render?: Render<SVGPatternElement, O>, customize?: Customize<SVGPatternElement, O>): DomNode<SVGPatternElement, O> { return Reaction(name, triggers, render, customize, SvgTags.pattern) }
export function RxPolygon<O = void>(name: string, triggers: unknown, render?: Render<SVGPolygonElement, O>, customize?: Customize<SVGPolygonElement, O>): DomNode<SVGPolygonElement, O> { return Reaction(name, triggers, render, customize, SvgTags.polygon) }
export function RxPolyline<O = void>(name: string, triggers: unknown, render?: Render<SVGPolylineElement, O>, customize?: Customize<SVGPolylineElement, O>): DomNode<SVGPolylineElement, O> { return Reaction(name, triggers, render, customize, SvgTags.polyline) }
export function RxRadialGradient<O = void>(name: string, triggers: unknown, render?: Render<SVGRadialGradientElement, O>, customize?: Customize<SVGRadialGradientElement, O>): DomNode<SVGRadialGradientElement, O> { return Reaction(name, triggers, render, customize, SvgTags.radialGradient) }
export function RxRect<O = void>(name: string, triggers: unknown, render?: Render<SVGRectElement, O>, customize?: Customize<SVGRectElement, O>): DomNode<SVGRectElement, O> { return Reaction(name, triggers, render, customize, SvgTags.rect) }
export function RxStop<O = void>(name: string, triggers: unknown, render?: Render<SVGStopElement, O>, customize?: Customize<SVGStopElement, O>): DomNode<SVGStopElement, O> { return Reaction(name, triggers, render, customize, SvgTags.stop) }
export function RxSvgSwitch<O = void>(name: string, triggers: unknown, render?: Render<SVGSwitchElement, O>, customize?: Customize<SVGSwitchElement, O>): DomNode<SVGSwitchElement, O> { return Reaction(name, triggers, render, customize, SvgTags.switch) }
export function RxSymbol<O = void>(name: string, triggers: unknown, render?: Render<SVGSymbolElement, O>, customize?: Customize<SVGSymbolElement, O>): DomNode<SVGSymbolElement, O> { return Reaction(name, triggers, render, customize, SvgTags.symbol) }
export function RxText<O = void>(name: string, triggers: unknown, render?: Render<SVGTextElement, O>, customize?: Customize<SVGTextElement, O>): DomNode<SVGTextElement, O> { return Reaction(name, triggers, render, customize, SvgTags.text) }
export function RxTextPath<O = void>(name: string, triggers: unknown, render?: Render<SVGTextPathElement, O>, customize?: Customize<SVGTextPathElement, O>): DomNode<SVGTextPathElement, O> { return Reaction(name, triggers, render, customize, SvgTags.textPath) }
export function RxTSpan<O = void>(name: string, triggers: unknown, render?: Render<SVGTSpanElement, O>, customize?: Customize<SVGTSpanElement, O>): DomNode<SVGTSpanElement, O> { return Reaction(name, triggers, render, customize, SvgTags.tspan) }
export function RxUse<O = void>(name: string, triggers: unknown, render?: Render<SVGUseElement, O>, customize?: Customize<SVGUseElement, O>): DomNode<SVGUseElement, O> { return Reaction(name, triggers, render, customize, SvgTags.use) }
export function RxView<O = void>(name: string, triggers: unknown, render?: Render<SVGViewElement, O>, customize?: Customize<SVGViewElement, O>): DomNode<SVGViewElement, O> { return Reaction(name, triggers, render, customize, SvgTags.view) }

export function Svg<O = void>(name: string, render?: Render<SVGSVGElement, O>, customize?: Customize<SVGSVGElement, O>): DomNode<SVGSVGElement> { return Affiliate(name, undefined, render, customize, SvgTags.svg) }
export function SvgA<O = void>(name: string, render?: Render<SVGAElement, O>, customize?: Customize<SVGAElement, O>): DomNode<SVGAElement> { return Affiliate(name, undefined, render, customize, SvgTags.a) }
export function Animate<O = void>(name: string, render?: Render<SVGAnimateElement, O>, customize?: Customize<SVGAnimateElement, O>): DomNode<SVGAnimateElement> { return Affiliate(name, undefined, render, customize, SvgTags.animate) }
export function AnimateMotion<O = void>(name: string, render?: Render<SVGAnimateMotionElement, O>, customize?: Customize<SVGAnimateMotionElement, O>): DomNode<SVGAnimateMotionElement> { return Affiliate(name, undefined, render, customize, SvgTags.animateMotion) }
export function AnimateTransform<O = void>(name: string, render?: Render<SVGAnimateTransformElement, O>, customize?: Customize<SVGAnimateTransformElement, O>): DomNode<SVGAnimateTransformElement> { return Affiliate(name, undefined, render, customize, SvgTags.animateTransform) }
export function Circle<O = void>(name: string, render?: Render<SVGCircleElement, O>, customize?: Customize<SVGCircleElement, O>): DomNode<SVGCircleElement> { return Affiliate(name, undefined, render, customize, SvgTags.circle) }
export function ClipPath<O = void>(name: string, render?: Render<SVGClipPathElement, O>, customize?: Customize<SVGClipPathElement, O>): DomNode<SVGClipPathElement> { return Affiliate(name, undefined, render, customize, SvgTags.clipPath) }
export function Defs<O = void>(name: string, render?: Render<SVGDefsElement, O>, customize?: Customize<SVGDefsElement, O>): DomNode<SVGDefsElement> { return Affiliate(name, undefined, render, customize, SvgTags.defs) }
export function Desc<O = void>(name: string, render?: Render<SVGDescElement, O>, customize?: Customize<SVGDescElement, O>): DomNode<SVGDescElement> { return Affiliate(name, undefined, render, customize, SvgTags.desc) }
export function Ellipse<O = void>(name: string, render?: Render<SVGEllipseElement, O>, customize?: Customize<SVGEllipseElement, O>): DomNode<SVGEllipseElement> { return Affiliate(name, undefined, render, customize, SvgTags.ellipse) }
export function FeBlend<O = void>(name: string, render?: Render<SVGFEBlendElement, O>, customize?: Customize<SVGFEBlendElement, O>): DomNode<SVGFEBlendElement> { return Affiliate(name, undefined, render, customize, SvgTags.feBlend) }
export function FeColorMatrix<O = void>(name: string, render?: Render<SVGFEColorMatrixElement, O>, customize?: Customize<SVGFEColorMatrixElement, O>): DomNode<SVGFEColorMatrixElement> { return Affiliate(name, undefined, render, customize, SvgTags.feColorMatrix) }
export function FeComponentTransfer<O = void>(name: string, render?: Render<SVGFEComponentTransferElement, O>, customize?: Customize<SVGFEComponentTransferElement, O>): DomNode<SVGFEComponentTransferElement> { return Affiliate(name, undefined, render, customize, SvgTags.feComponentTransfer) }
export function FeComposite<O = void>(name: string, render?: Render<SVGFECompositeElement, O>, customize?: Customize<SVGFECompositeElement, O>): DomNode<SVGFECompositeElement> { return Affiliate(name, undefined, render, customize, SvgTags.feComposite) }
export function FeConvolveMatrix<O = void>(name: string, render?: Render<SVGFEConvolveMatrixElement, O>, customize?: Customize<SVGFEConvolveMatrixElement, O>): DomNode<SVGFEConvolveMatrixElement> { return Affiliate(name, undefined, render, customize, SvgTags.feConvolveMatrix) }
export function FeDiffuseLighting<O = void>(name: string, render?: Render<SVGFEDiffuseLightingElement, O>, customize?: Customize<SVGFEDiffuseLightingElement, O>): DomNode<SVGFEDiffuseLightingElement> { return Affiliate(name, undefined, render, customize, SvgTags.feDiffuseLighting) }
export function FeDisplacementMap<O = void>(name: string, render?: Render<SVGFEDisplacementMapElement, O>, customize?: Customize<SVGFEDisplacementMapElement, O>): DomNode<SVGFEDisplacementMapElement> { return Affiliate(name, undefined, render, customize, SvgTags.feDisplacementMap) }
export function FeDistantLight<O = void>(name: string, render?: Render<SVGFEDistantLightElement, O>, customize?: Customize<SVGFEDistantLightElement, O>): DomNode<SVGFEDistantLightElement> { return Affiliate(name, undefined, render, customize, SvgTags.feDistantLight) }
export function FeDropShadow<O = void>(name: string, render?: Render<SVGFEDropShadowElement, O>, customize?: Customize<SVGFEDropShadowElement, O>): DomNode<SVGFEDropShadowElement> { return Affiliate(name, undefined, render, customize, SvgTags.feDropShadow) }
export function FeFlood<O = void>(name: string, render?: Render<SVGFEFloodElement, O>, customize?: Customize<SVGFEFloodElement, O>): DomNode<SVGFEFloodElement> { return Affiliate(name, undefined, render, customize, SvgTags.feFlood) }
export function FeFuncA<O = void>(name: string, render?: Render<SVGFEFuncAElement, O>, customize?: Customize<SVGFEFuncAElement, O>): DomNode<SVGFEFuncAElement> { return Affiliate(name, undefined, render, customize, SvgTags.feFuncA) }
export function FeFuncB<O = void>(name: string, render?: Render<SVGFEFuncBElement, O>, customize?: Customize<SVGFEFuncBElement, O>): DomNode<SVGFEFuncBElement> { return Affiliate(name, undefined, render, customize, SvgTags.feFuncB) }
export function FeFuncG<O = void>(name: string, render?: Render<SVGFEFuncGElement, O>, customize?: Customize<SVGFEFuncGElement, O>): DomNode<SVGFEFuncGElement> { return Affiliate(name, undefined, render, customize, SvgTags.feFuncG) }
export function FeFuncR<O = void>(name: string, render?: Render<SVGFEFuncRElement, O>, customize?: Customize<SVGFEFuncRElement, O>): DomNode<SVGFEFuncRElement> { return Affiliate(name, undefined, render, customize, SvgTags.feFuncR) }
export function FeGaussianBlur<O = void>(name: string, render?: Render<SVGFEGaussianBlurElement, O>, customize?: Customize<SVGFEGaussianBlurElement, O>): DomNode<SVGFEGaussianBlurElement> { return Affiliate(name, undefined, render, customize, SvgTags.feGaussianBlur) }
export function FeImage<O = void>(name: string, render?: Render<SVGFEImageElement, O>, customize?: Customize<SVGFEImageElement, O>): DomNode<SVGFEImageElement> { return Affiliate(name, undefined, render, customize, SvgTags.feImage) }
export function FeMerge<O = void>(name: string, render?: Render<SVGFEMergeElement, O>, customize?: Customize<SVGFEMergeElement, O>): DomNode<SVGFEMergeElement> { return Affiliate(name, undefined, render, customize, SvgTags.feMerge) }
export function FeMergeNode<O = void>(name: string, render?: Render<SVGFEMergeNodeElement, O>, customize?: Customize<SVGFEMergeNodeElement, O>): DomNode<SVGFEMergeNodeElement> { return Affiliate(name, undefined, render, customize, SvgTags.feMergeNode) }
export function FeMorphology<O = void>(name: string, render?: Render<SVGFEMorphologyElement, O>, customize?: Customize<SVGFEMorphologyElement, O>): DomNode<SVGFEMorphologyElement> { return Affiliate(name, undefined, render, customize, SvgTags.feMorphology) }
export function FeOffset<O = void>(name: string, render?: Render<SVGFEOffsetElement, O>, customize?: Customize<SVGFEOffsetElement, O>): DomNode<SVGFEOffsetElement> { return Affiliate(name, undefined, render, customize, SvgTags.feOffset) }
export function FePointLight<O = void>(name: string, render?: Render<SVGFEPointLightElement, O>, customize?: Customize<SVGFEPointLightElement, O>): DomNode<SVGFEPointLightElement> { return Affiliate(name, undefined, render, customize, SvgTags.fePointLight) }
export function FeSpecularLighting<O = void>(name: string, render?: Render<SVGFESpecularLightingElement, O>, customize?: Customize<SVGFESpecularLightingElement, O>): DomNode<SVGFESpecularLightingElement> { return Affiliate(name, undefined, render, customize, SvgTags.feSpecularLighting) }
export function FeSpotLight<O = void>(name: string, render?: Render<SVGFESpotLightElement, O>, customize?: Customize<SVGFESpotLightElement, O>): DomNode<SVGFESpotLightElement> { return Affiliate(name, undefined, render, customize, SvgTags.feSpotLight) }
export function FeTile<O = void>(name: string, render?: Render<SVGFETileElement, O>, customize?: Customize<SVGFETileElement, O>): DomNode<SVGFETileElement> { return Affiliate(name, undefined, render, customize, SvgTags.feTile) }
export function FeTurbulence<O = void>(name: string, render?: Render<SVGFETurbulenceElement, O>, customize?: Customize<SVGFETurbulenceElement, O>): DomNode<SVGFETurbulenceElement> { return Affiliate(name, undefined, render, customize, SvgTags.feTurbulence) }
export function Filter<O = void>(name: string, render?: Render<SVGFilterElement, O>, customize?: Customize<SVGFilterElement, O>): DomNode<SVGFilterElement> { return Affiliate(name, undefined, render, customize, SvgTags.filter) }
export function ForeignObject<O = void>(name: string, render?: Render<SVGForeignObjectElement, O>, customize?: Customize<SVGForeignObjectElement, O>): DomNode<SVGForeignObjectElement> { return Affiliate(name, undefined, render, customize, SvgTags.foreignObject) }
export function G<O = void>(name: string, render?: Render<SVGGElement, O>, customize?: Customize<SVGGElement, O>): DomNode<SVGGElement> { return Affiliate(name, undefined, render, customize, SvgTags.g) }
export function SvgImage<O = void>(name: string, render?: Render<SVGImageElement, O>, customize?: Customize<SVGImageElement, O>): DomNode<SVGImageElement> { return Affiliate(name, undefined, render, customize, SvgTags.image) }
export function Line<O = void>(name: string, render?: Render<SVGLineElement, O>, customize?: Customize<SVGLineElement, O>): DomNode<SVGLineElement> { return Affiliate(name, undefined, render, customize, SvgTags.line) }
export function LinearGradient<O = void>(name: string, render?: Render<SVGLinearGradientElement, O>, customize?: Customize<SVGLinearGradientElement, O>): DomNode<SVGLinearGradientElement> { return Affiliate(name, undefined, render, customize, SvgTags.linearGradient) }
export function Marker<O = void>(name: string, render?: Render<SVGMarkerElement, O>, customize?: Customize<SVGMarkerElement, O>): DomNode<SVGMarkerElement> { return Affiliate(name, undefined, render, customize, SvgTags.marker) }
export function Mask<O = void>(name: string, render?: Render<SVGMaskElement, O>, customize?: Customize<SVGMaskElement, O>): DomNode<SVGMaskElement> { return Affiliate(name, undefined, render, customize, SvgTags.mask) }
export function MetaData<O = void>(name: string, render?: Render<SVGMetadataElement, O>, customize?: Customize<SVGMetadataElement, O>): DomNode<SVGMetadataElement> { return Affiliate(name, undefined, render, customize, SvgTags.metadata) }
export function MPath<O = void>(name: string, render?: Render<SVGElement, O>, customize?: Customize<SVGElement, O>): DomNode<SVGElement> { return Affiliate(name, undefined, render, customize, SvgTags.mpath) }
export function Path<O = void>(name: string, render?: Render<SVGPathElement, O>, customize?: Customize<SVGPathElement, O>): DomNode<SVGPathElement> { return Affiliate(name, undefined, render, customize, SvgTags.path) }
export function Pattern<O = void>(name: string, render?: Render<SVGPatternElement, O>, customize?: Customize<SVGPatternElement, O>): DomNode<SVGPatternElement> { return Affiliate(name, undefined, render, customize, SvgTags.pattern) }
export function Polygon<O = void>(name: string, render?: Render<SVGPolygonElement, O>, customize?: Customize<SVGPolygonElement, O>): DomNode<SVGPolygonElement> { return Affiliate(name, undefined, render, customize, SvgTags.polygon) }
export function PolyLine<O = void>(name: string, render?: Render<SVGPolylineElement, O>, customize?: Customize<SVGPolylineElement, O>): DomNode<SVGPolylineElement> { return Affiliate(name, undefined, render, customize, SvgTags.polyline) }
export function RadialGradient<O = void>(name: string, render?: Render<SVGRadialGradientElement, O>, customize?: Customize<SVGRadialGradientElement, O>): DomNode<SVGRadialGradientElement> { return Affiliate(name, undefined, render, customize, SvgTags.radialGradient) }
export function Rect<O = void>(name: string, render?: Render<SVGRectElement, O>, customize?: Customize<SVGRectElement, O>): DomNode<SVGRectElement> { return Affiliate(name, undefined, render, customize, SvgTags.rect) }
export function Stop<O = void>(name: string, render?: Render<SVGStopElement, O>, customize?: Customize<SVGStopElement, O>): DomNode<SVGStopElement> { return Affiliate(name, undefined, render, customize, SvgTags.stop) }
export function SvgSwitch<O = void>(name: string, render?: Render<SVGSwitchElement, O>, customize?: Customize<SVGSwitchElement, O>): DomNode<SVGSwitchElement> { return Affiliate(name, undefined, render, customize, SvgTags.switch) }
export function Symbol<O = void>(name: string, render?: Render<SVGSymbolElement, O>, customize?: Customize<SVGSymbolElement, O>): DomNode<SVGSymbolElement> { return Affiliate(name, undefined, render, customize, SvgTags.symbol) }
export function Text<O = void>(name: string, render?: Render<SVGTextElement, O>, customize?: Customize<SVGTextElement, O>): DomNode<SVGTextElement> { return Affiliate(name, undefined, render, customize, SvgTags.text) }
export function TextPath<O = void>(name: string, render?: Render<SVGTextPathElement, O>, customize?: Customize<SVGTextPathElement, O>): DomNode<SVGTextPathElement> { return Affiliate(name, undefined, render, customize, SvgTags.textPath) }
export function TSpan<O = void>(name: string, render?: Render<SVGTSpanElement, O>, customize?: Customize<SVGTSpanElement, O>): DomNode<SVGTSpanElement> { return Affiliate(name, undefined, render, customize, SvgTags.tspan) }
export function Use<O = void>(name: string, render?: Render<SVGUseElement, O>, customize?: Customize<SVGUseElement, O>): DomNode<SVGUseElement> { return Affiliate(name, undefined, render, customize, SvgTags.use) }
export function View<O = void>(name: string, render?: Render<SVGViewElement, O>, customize?: Customize<SVGViewElement, O>): DomNode<SVGViewElement> { return Affiliate(name, undefined, render, customize, SvgTags.view) }

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
