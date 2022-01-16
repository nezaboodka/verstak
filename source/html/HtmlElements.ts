// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Monitor } from 'reactronic'
import { RxNode, Reaction, Inline, Render, Customize, StaticNodeFactory } from '../core/api'
import { HtmlNodeFactory, SvgNodeFactory } from './HtmlNodeFactory'

export function RxHtmlBody(name: string, triggers: unknown, render?: Render<HTMLElement>): RxNode<HTMLElement> {
  const factory = new StaticNodeFactory(name, true, global.document.body)
  return Reaction(name, triggers, render, undefined, undefined, undefined, undefined, factory)
}

export function RxA<O = void>(name: string, triggers: unknown, render?: Render<HTMLAnchorElement, O>, customize?: Customize<HTMLAnchorElement, O>, monitor?: Monitor): RxNode<HTMLAnchorElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.a) }
export function RxAbbr<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.abbr) }
export function RxAddress<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.address) }
export function RxArea<O = void>(name: string, triggers: unknown, render?: Render<HTMLAreaElement, O>, customize?: Customize<HTMLAreaElement, O>, monitor?: Monitor): RxNode<HTMLAreaElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.area) }
export function RxArticle<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.article) }
export function RxAside<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.aside) }
export function RxAudio<O = void>(name: string, triggers: unknown, render?: Render<HTMLAudioElement, O>, customize?: Customize<HTMLAudioElement, O>, monitor?: Monitor): RxNode<HTMLAudioElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.audio) }
export function RxB<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.b) }
export function RxBase<O = void>(name: string, triggers: unknown, render?: Render<HTMLBaseElement, O>, customize?: Customize<HTMLBaseElement, O>, monitor?: Monitor): RxNode<HTMLBaseElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.base) }
export function RxBdi<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.bdi) }
export function RxBdo<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.bdo) }
export function RxBig<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.big) }
export function RxBlockQuote<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.blockquote) }
export function RxBody<O = void>(name: string, triggers: unknown, render?: Render<HTMLBodyElement, O>, customize?: Customize<HTMLBodyElement, O>, monitor?: Monitor): RxNode<HTMLBodyElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.body) }
export function RxBR<O = void>(name: string, triggers: unknown, render?: Render<HTMLBRElement, O>, customize?: Customize<HTMLBRElement, O>, monitor?: Monitor): RxNode<HTMLBRElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.br) }
export function RxButton<O = void>(name: string, triggers: unknown, render?: Render<HTMLButtonElement, O>, customize?: Customize<HTMLButtonElement, O>, monitor?: Monitor): RxNode<HTMLButtonElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.button) }
export function RxCanvas<O = void>(name: string, triggers: unknown, render?: Render<HTMLCanvasElement, O>, customize?: Customize<HTMLCanvasElement, O>, monitor?: Monitor): RxNode<HTMLCanvasElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.canvas) }
export function RxCaption<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableCaptionElement, O>, customize?: Customize<HTMLTableCaptionElement, O>, monitor?: Monitor): RxNode<HTMLTableCaptionElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.caption) }
export function RxCite<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.cite) }
export function RxCode<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.code) }
export function RxCol<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableColElement, O>, customize?: Customize<HTMLTableColElement, O>, monitor?: Monitor): RxNode<HTMLTableColElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.col) }
export function RxColGroup<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableColElement, O>, customize?: Customize<HTMLTableColElement, O>, monitor?: Monitor): RxNode<HTMLTableColElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.colgroup) }
export function RxData<O = void>(name: string, triggers: unknown, render?: Render<HTMLDataElement, O>, customize?: Customize<HTMLDataElement, O>, monitor?: Monitor): RxNode<HTMLDataElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.data) }
export function RxDataList<O = void>(name: string, triggers: unknown, render?: Render<HTMLDataListElement, O>, customize?: Customize<HTMLDataListElement, O>, monitor?: Monitor): RxNode<HTMLDataListElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.datalist) }
export function RxDD<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.dd) }
export function RxDel<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.del) }
export function RxDetails<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.details) }
export function RxDfn<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.dfn) }
export function RxDiv<O = void>(name: string, triggers: unknown, render?: Render<HTMLDivElement, O>, customize?: Customize<HTMLDivElement, O>, monitor?: Monitor): RxNode<HTMLDivElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.div) }
export function RxDL<O = void>(name: string, triggers: unknown, render?: Render<HTMLDListElement, O>, customize?: Customize<HTMLDListElement, O>, monitor?: Monitor): RxNode<HTMLDListElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.dl) }
export function RxDT<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.dt) }
export function RxEM<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.em) }
export function RxEmbed<O = void>(name: string, triggers: unknown, render?: Render<HTMLEmbedElement, O>, customize?: Customize<HTMLEmbedElement, O>, monitor?: Monitor): RxNode<HTMLEmbedElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.embed) }
export function RxFieldSet<O = void>(name: string, triggers: unknown, render?: Render<HTMLFieldSetElement, O>, customize?: Customize<HTMLFieldSetElement, O>, monitor?: Monitor): RxNode<HTMLFieldSetElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.fieldset) }
export function RxFigCaption<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.figcaption) }
export function RxFigure<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.figure) }
export function RxFooter<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.footer) }
export function RxForm<O = void>(name: string, triggers: unknown, render?: Render<HTMLFormElement, O>, customize?: Customize<HTMLFormElement, O>, monitor?: Monitor): RxNode<HTMLFormElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.form) }
export function RxH1<O = void>(name: string, triggers: unknown, render?: Render<HTMLHeadingElement, O>, customize?: Customize<HTMLHeadingElement, O>, monitor?: Monitor): RxNode<HTMLHeadingElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.h1) }
export function RxH2<O = void>(name: string, triggers: unknown, render?: Render<HTMLHeadingElement, O>, customize?: Customize<HTMLHeadingElement, O>, monitor?: Monitor): RxNode<HTMLHeadingElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.h2) }
export function RxH3<O = void>(name: string, triggers: unknown, render?: Render<HTMLHeadingElement, O>, customize?: Customize<HTMLHeadingElement, O>, monitor?: Monitor): RxNode<HTMLHeadingElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.h3) }
export function RxH4<O = void>(name: string, triggers: unknown, render?: Render<HTMLHeadingElement, O>, customize?: Customize<HTMLHeadingElement, O>, monitor?: Monitor): RxNode<HTMLHeadingElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.h4) }
export function RxH5<O = void>(name: string, triggers: unknown, render?: Render<HTMLHeadingElement, O>, customize?: Customize<HTMLHeadingElement, O>, monitor?: Monitor): RxNode<HTMLHeadingElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.h5) }
export function RxH6<O = void>(name: string, triggers: unknown, render?: Render<HTMLHeadingElement, O>, customize?: Customize<HTMLHeadingElement, O>, monitor?: Monitor): RxNode<HTMLHeadingElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.h6) }
export function RxHead<O = void>(name: string, triggers: unknown, render?: Render<HTMLHeadElement, O>, customize?: Customize<HTMLHeadElement, O>, monitor?: Monitor): RxNode<HTMLHeadElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.head) }
export function RxHeader<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.header) }
export function RxHGroup<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.hgroup) }
export function RxHR<O = void>(name: string, triggers: unknown, render?: Render<HTMLHRElement, O>, customize?: Customize<HTMLHRElement, O>, monitor?: Monitor): RxNode<HTMLHRElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.hr) }
export function RxHtml<O = void>(name: string, triggers: unknown, render?: Render<HTMLHtmlElement, O>, customize?: Customize<HTMLHtmlElement, O>, monitor?: Monitor): RxNode<HTMLHtmlElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.html) }
export function RxI<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.i) }
export function RxIFrame<O = void>(name: string, triggers: unknown, render?: Render<HTMLIFrameElement, O>, customize?: Customize<HTMLIFrameElement, O>, monitor?: Monitor): RxNode<HTMLIFrameElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.iframe) }
export function RxImg<O = void>(name: string, triggers: unknown, render?: Render<HTMLImageElement, O>, customize?: Customize<HTMLImageElement, O>, monitor?: Monitor): RxNode<HTMLImageElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.img) }
export function RxInput<O = void>(name: string, triggers: unknown, render?: Render<HTMLInputElement, O>, customize?: Customize<HTMLInputElement, O>, monitor?: Monitor): RxNode<HTMLInputElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.input) }
export function RxIns<O = void>(name: string, triggers: unknown, render?: Render<HTMLModElement, O>, customize?: Customize<HTMLModElement, O>, monitor?: Monitor): RxNode<HTMLModElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.ins) }
export function RxKbd<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.kbd) }
export function RxKeygen<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.keygen) }
export function RxLabel<O = void>(name: string, triggers: unknown, render?: Render<HTMLLabelElement, O>, customize?: Customize<HTMLLabelElement, O>, monitor?: Monitor): RxNode<HTMLLabelElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.label) }
export function RxLegend<O = void>(name: string, triggers: unknown, render?: Render<HTMLLegendElement, O>, customize?: Customize<HTMLLegendElement, O>, monitor?: Monitor): RxNode<HTMLLegendElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.legend) }
export function RxLI<O = void>(name: string, triggers: unknown, render?: Render<HTMLLIElement, O>, customize?: Customize<HTMLLIElement, O>, monitor?: Monitor): RxNode<HTMLLIElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.li) }
export function RxLink<O = void>(name: string, triggers: unknown, render?: Render<HTMLLinkElement, O>, customize?: Customize<HTMLLinkElement, O>, monitor?: Monitor): RxNode<HTMLLinkElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.link) }
export function RxMain<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.main) }
export function RxMap<O = void>(name: string, triggers: unknown, render?: Render<HTMLMapElement, O>, customize?: Customize<HTMLMapElement, O>, monitor?: Monitor): RxNode<HTMLMapElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.map) }
export function RxMark<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.mark) }
export function RxMenu<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.menu) }
export function RxMenuItem<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.menuitem) }
export function RxMeta<O = void>(name: string, triggers: unknown, render?: Render<HTMLMetaElement, O>, customize?: Customize<HTMLMetaElement, O>, monitor?: Monitor): RxNode<HTMLMetaElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.meta) }
export function RxMeter<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.meter) }
export function RxNav<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.nav) }
export function RxNoIndex<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.noindex) }
export function RxNoScript<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.noscript) }
export function RxObj<O = void>(name: string, triggers: unknown, render?: Render<HTMLObjectElement, O>, customize?: Customize<HTMLObjectElement, O>, monitor?: Monitor): RxNode<HTMLObjectElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.object) }
export function RxOL<O = void>(name: string, triggers: unknown, render?: Render<HTMLOListElement, O>, customize?: Customize<HTMLOListElement, O>, monitor?: Monitor): RxNode<HTMLOListElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.ol) }
export function RxOptGroup<O = void>(name: string, triggers: unknown, render?: Render<HTMLOptGroupElement, O>, customize?: Customize<HTMLOptGroupElement, O>, monitor?: Monitor): RxNode<HTMLOptGroupElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.optgroup) }
export function RxOption<O = void>(name: string, triggers: unknown, render?: Render<HTMLOptionElement, O>, customize?: Customize<HTMLOptionElement, O>, monitor?: Monitor): RxNode<HTMLOptionElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.option) }
export function RxOutput<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.output) }
export function RxP<O = void>(name: string, triggers: unknown, render?: Render<HTMLParagraphElement, O>, customize?: Customize<HTMLParagraphElement, O>, monitor?: Monitor): RxNode<HTMLParagraphElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.p) }
export function RxParam<O = void>(name: string, triggers: unknown, render?: Render<HTMLParamElement, O>, customize?: Customize<HTMLParamElement, O>, monitor?: Monitor): RxNode<HTMLParamElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.param) }
export function RxPicture<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.picture) }
export function RxPre<O = void>(name: string, triggers: unknown, render?: Render<HTMLPreElement, O>, customize?: Customize<HTMLPreElement, O>, monitor?: Monitor): RxNode<HTMLPreElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.pre) }
export function RxProgress<O = void>(name: string, triggers: unknown, render?: Render<HTMLProgressElement, O>, customize?: Customize<HTMLProgressElement, O>, monitor?: Monitor): RxNode<HTMLProgressElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.progress) }
export function RxQ<O = void>(name: string, triggers: unknown, render?: Render<HTMLQuoteElement, O>, customize?: Customize<HTMLQuoteElement, O>, monitor?: Monitor): RxNode<HTMLQuoteElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.q) }
export function RxRP<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.rp) }
export function RxRT<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.rt) }
export function RxRuby<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.ruby) }
export function RxS<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.s) }
export function RxSamp<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.samp) }
export function RxScript<O = void>(name: string, triggers: unknown, render?: Render<HTMLScriptElement, O>, customize?: Customize<HTMLScriptElement, O>, monitor?: Monitor): RxNode<HTMLScriptElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.script) }
export function RxSection<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.section) }
export function RxSelect<O = void>(name: string, triggers: unknown, render?: Render<HTMLSelectElement, O>, customize?: Customize<HTMLSelectElement, O>, monitor?: Monitor): RxNode<HTMLSelectElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.select) }
export function RxSmall<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.small) }
export function RxSource<O = void>(name: string, triggers: unknown, render?: Render<HTMLSourceElement, O>, customize?: Customize<HTMLSourceElement, O>, monitor?: Monitor): RxNode<HTMLSourceElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.source) }
export function RxSpan<O = void>(name: string, triggers: unknown, render?: Render<HTMLSpanElement, O>, customize?: Customize<HTMLSpanElement, O>, monitor?: Monitor): RxNode<HTMLSpanElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.span) }
export function RxStrong<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.strong) }
export function RxStyle<O = void>(name: string, triggers: unknown, render?: Render<HTMLStyleElement, O>, customize?: Customize<HTMLStyleElement, O>, monitor?: Monitor): RxNode<HTMLStyleElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.style) }
export function RxSub<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.sub) }
export function RxSummary<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.summary) }
export function RxSup<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.sup) }
export function RxTable<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableElement, O>, customize?: Customize<HTMLTableElement, O>, monitor?: Monitor): RxNode<HTMLTableElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.table) }
export function RxTemplate<O = void>(name: string, triggers: unknown, render?: Render<HTMLTemplateElement, O>, customize?: Customize<HTMLTemplateElement, O>, monitor?: Monitor): RxNode<HTMLTemplateElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.template) }
export function RxTBody<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableSectionElement, O>, customize?: Customize<HTMLTableSectionElement, O>, monitor?: Monitor): RxNode<HTMLTableSectionElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.tbody) }
export function RxTD<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableCellElement, O>, customize?: Customize<HTMLTableCellElement, O>, monitor?: Monitor): RxNode<HTMLTableCellElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.td) }
export function RxTextArea<O = void>(name: string, triggers: unknown, render?: Render<HTMLTextAreaElement, O>, customize?: Customize<HTMLTextAreaElement, O>, monitor?: Monitor): RxNode<HTMLTextAreaElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.textarea) }
export function RxTFoot<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableSectionElement, O>, customize?: Customize<HTMLTableSectionElement, O>, monitor?: Monitor): RxNode<HTMLTableSectionElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.tfoot) }
export function RxTH<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableCellElement, O>, customize?: Customize<HTMLTableCellElement, O>, monitor?: Monitor): RxNode<HTMLTableCellElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.th) }
export function RxTHead<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableSectionElement, O>, customize?: Customize<HTMLTableSectionElement, O>, monitor?: Monitor): RxNode<HTMLTableSectionElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.thead) }
export function RxTime<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.time) }
export function RxTitle<O = void>(name: string, triggers: unknown, render?: Render<HTMLTitleElement, O>, customize?: Customize<HTMLTitleElement, O>, monitor?: Monitor): RxNode<HTMLTitleElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.title) }
export function RxTR<O = void>(name: string, triggers: unknown, render?: Render<HTMLTableRowElement, O>, customize?: Customize<HTMLTableRowElement, O>, monitor?: Monitor): RxNode<HTMLTableRowElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.tr) }
export function RxTrack<O = void>(name: string, triggers: unknown, render?: Render<HTMLTrackElement, O>, customize?: Customize<HTMLTrackElement, O>, monitor?: Monitor): RxNode<HTMLTrackElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.track) }
export function RxU<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.u) }
export function RxUL<O = void>(name: string, triggers: unknown, render?: Render<HTMLUListElement, O>, customize?: Customize<HTMLUListElement, O>, monitor?: Monitor): RxNode<HTMLUListElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.ul) }
export function RxVar<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.var) }
export function RxVideo<O = void>(name: string, triggers: unknown, render?: Render<HTMLVideoElement, O>, customize?: Customize<HTMLVideoElement, O>, monitor?: Monitor): RxNode<HTMLVideoElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.video) }
export function RxWbr<O = void>(name: string, triggers: unknown, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>, monitor?: Monitor): RxNode<HTMLElement, O> { return Reaction(name, triggers, render, customize, monitor, undefined, undefined, HtmlTags.wbr) }

export function A<O = void>(name: string, render?: Render<HTMLAnchorElement, O>, customize?: Customize<HTMLAnchorElement, O>): RxNode<HTMLAnchorElement> { return Inline(name, render, customize, HtmlTags.a) }
export function Abbr<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.abbr) }
export function Address<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.address) }
export function Area<O = void>(name: string, render?: Render<HTMLAreaElement, O>, customize?: Customize<HTMLAreaElement, O>): RxNode<HTMLAreaElement> { return Inline(name, render, customize, HtmlTags.area) }
export function Article<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.article) }
export function Aside<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.aside) }
export function Audio<O = void>(name: string, render?: Render<HTMLAudioElement, O>, customize?: Customize<HTMLAudioElement, O>): RxNode<HTMLAudioElement> { return Inline(name, render, customize, HtmlTags.audio) }
export function B<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.b) }
export function Base<O = void>(name: string, render?: Render<HTMLBaseElement, O>, customize?: Customize<HTMLBaseElement, O>): RxNode<HTMLBaseElement> { return Inline(name, render, customize, HtmlTags.base) }
export function Bdi<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.bdi) }
export function Bdo<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.bdo) }
export function Big<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.big) }
export function BlockQuote<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.blockquote) }
export function Body<O = void>(name: string, render?: Render<HTMLBodyElement, O>, customize?: Customize<HTMLBodyElement, O>): RxNode<HTMLBodyElement> { return Inline(name, render, customize, HtmlTags.body) }
export function BR<O = void>(name: string, render?: Render<HTMLBRElement, O>, customize?: Customize<HTMLBRElement, O>): RxNode<HTMLBRElement> { return Inline(name, render, customize, HtmlTags.br) }
export function Button<O = void>(name: string, render?: Render<HTMLButtonElement, O>, customize?: Customize<HTMLButtonElement, O>): RxNode<HTMLButtonElement> { return Inline(name, render, customize, HtmlTags.button) }
export function Canvas<O = void>(name: string, render?: Render<HTMLCanvasElement, O>, customize?: Customize<HTMLCanvasElement, O>): RxNode<HTMLCanvasElement> { return Inline(name, render, customize, HtmlTags.canvas) }
export function Caption<O = void>(name: string, render?: Render<HTMLTableCaptionElement, O>, customize?: Customize<HTMLTableCaptionElement, O>): RxNode<HTMLTableCaptionElement> { return Inline(name, render, customize, HtmlTags.caption) }
export function Cite<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.cite) }
export function Code<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.code) }
export function Col<O = void>(name: string, render?: Render<HTMLTableColElement, O>, customize?: Customize<HTMLTableColElement, O>): RxNode<HTMLTableColElement> { return Inline(name, render, customize, HtmlTags.col) }
export function ColGroup<O = void>(name: string, render?: Render<HTMLTableColElement, O>, customize?: Customize<HTMLTableColElement, O>): RxNode<HTMLTableColElement> { return Inline(name, render, customize, HtmlTags.colgroup) }
export function Data<O = void>(name: string, render?: Render<HTMLDataElement, O>, customize?: Customize<HTMLDataElement, O>): RxNode<HTMLDataElement> { return Inline(name, render, customize, HtmlTags.data) }
export function DataList<O = void>(name: string, render?: Render<HTMLDataListElement, O>, customize?: Customize<HTMLDataListElement, O>): RxNode<HTMLDataListElement> { return Inline(name, render, customize, HtmlTags.datalist) }
export function DD<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.dd) }
export function Del<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.del) }
export function Details<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.details) }
export function Dfn<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.dfn) }
export function Div<O = void>(name: string, render?: Render<HTMLDivElement, O>, customize?: Customize<HTMLDivElement, O>): RxNode<HTMLDivElement> { return Inline(name, render, customize, HtmlTags.div) }
export function DL<O = void>(name: string, render?: Render<HTMLDListElement, O>, customize?: Customize<HTMLDListElement, O>): RxNode<HTMLDListElement> { return Inline(name, render, customize, HtmlTags.dl) }
export function DT<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.dt) }
export function EM<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.em) }
export function Embed<O = void>(name: string, render?: Render<HTMLEmbedElement, O>, customize?: Customize<HTMLEmbedElement, O>): RxNode<HTMLEmbedElement> { return Inline(name, render, customize, HtmlTags.embed) }
export function FieldSet<O = void>(name: string, render?: Render<HTMLFieldSetElement, O>, customize?: Customize<HTMLFieldSetElement, O>): RxNode<HTMLFieldSetElement> { return Inline(name, render, customize, HtmlTags.fieldset) }
export function FigCaption<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.figcaption) }
export function Figure<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.figure) }
export function Footer<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.footer) }
export function Form<O = void>(name: string, render?: Render<HTMLFormElement, O>, customize?: Customize<HTMLFormElement, O>): RxNode<HTMLFormElement> { return Inline(name, render, customize, HtmlTags.form) }
export function H1<O = void>(name: string, render?: Render<HTMLHeadingElement, O>, customize?: Customize<HTMLHeadingElement, O>): RxNode<HTMLHeadingElement> { return Inline(name, render, customize, HtmlTags.h1) }
export function H2<O = void>(name: string, render?: Render<HTMLHeadingElement, O>, customize?: Customize<HTMLHeadingElement, O>): RxNode<HTMLHeadingElement> { return Inline(name, render, customize, HtmlTags.h2) }
export function H3<O = void>(name: string, render?: Render<HTMLHeadingElement, O>, customize?: Customize<HTMLHeadingElement, O>): RxNode<HTMLHeadingElement> { return Inline(name, render, customize, HtmlTags.h3) }
export function H4<O = void>(name: string, render?: Render<HTMLHeadingElement, O>, customize?: Customize<HTMLHeadingElement, O>): RxNode<HTMLHeadingElement> { return Inline(name, render, customize, HtmlTags.h4) }
export function H5<O = void>(name: string, render?: Render<HTMLHeadingElement, O>, customize?: Customize<HTMLHeadingElement, O>): RxNode<HTMLHeadingElement> { return Inline(name, render, customize, HtmlTags.h5) }
export function H6<O = void>(name: string, render?: Render<HTMLHeadingElement, O>, customize?: Customize<HTMLHeadingElement, O>): RxNode<HTMLHeadingElement> { return Inline(name, render, customize, HtmlTags.h6) }
export function Head<O = void>(name: string, render?: Render<HTMLHeadElement, O>, customize?: Customize<HTMLHeadElement, O>): RxNode<HTMLHeadElement> { return Inline(name, render, customize, HtmlTags.head) }
export function Header<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.header) }
export function HGroup<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.hgroup) }
export function HR<O = void>(name: string, render?: Render<HTMLHRElement, O>, customize?: Customize<HTMLHRElement, O>): RxNode<HTMLHRElement> { return Inline(name, render, customize, HtmlTags.hr) }
export function Html<O = void>(name: string, render?: Render<HTMLHtmlElement, O>, customize?: Customize<HTMLHtmlElement, O>): RxNode<HTMLHtmlElement> { return Inline(name, render, customize, HtmlTags.html) }
export function I<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.i) }
export function IFrame<O = void>(name: string, render?: Render<HTMLIFrameElement, O>, customize?: Customize<HTMLIFrameElement, O>): RxNode<HTMLIFrameElement> { return Inline(name, render, customize, HtmlTags.iframe) }
export function Img<O = void>(name: string, render?: Render<HTMLImageElement, O>, customize?: Customize<HTMLImageElement, O>): RxNode<HTMLImageElement> { return Inline(name, render, customize, HtmlTags.img) }
export function Input<O = void>(name: string, render?: Render<HTMLInputElement, O>, customize?: Customize<HTMLInputElement, O>): RxNode<HTMLInputElement> { return Inline(name, render, customize, HtmlTags.input) }
export function Ins<O = void>(name: string, render?: Render<HTMLModElement, O>, customize?: Customize<HTMLModElement, O>): RxNode<HTMLModElement> { return Inline(name, render, customize, HtmlTags.ins) }
export function Kbd<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.kbd) }
export function KeyGen<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.keygen) }
export function Label<O = void>(name: string, render?: Render<HTMLLabelElement, O>, customize?: Customize<HTMLLabelElement, O>): RxNode<HTMLLabelElement> { return Inline(name, render, customize, HtmlTags.label) }
export function Legend<O = void>(name: string, render?: Render<HTMLLegendElement, O>, customize?: Customize<HTMLLegendElement, O>): RxNode<HTMLLegendElement> { return Inline(name, render, customize, HtmlTags.legend) }
export function LI<O = void>(name: string, render?: Render<HTMLLIElement, O>, customize?: Customize<HTMLLIElement, O>): RxNode<HTMLLIElement> { return Inline(name, render, customize, HtmlTags.li) }
export function Link<O = void>(name: string, render?: Render<HTMLLinkElement, O>, customize?: Customize<HTMLLinkElement, O>): RxNode<HTMLLinkElement> { return Inline(name, render, customize, HtmlTags.link) }
export function Main<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.main) }
export function Map<O = void>(name: string, render?: Render<HTMLMapElement, O>, customize?: Customize<HTMLMapElement, O>): RxNode<HTMLMapElement> { return Inline(name, render, customize, HtmlTags.map) }
export function Mark<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.mark) }
export function Menu<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.menu) }
export function MenuItem<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.menuitem) }
export function Meta<O = void>(name: string, render?: Render<HTMLMetaElement, O>, customize?: Customize<HTMLMetaElement, O>): RxNode<HTMLMetaElement> { return Inline(name, render, customize, HtmlTags.meta) }
export function Meter<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.meter) }
export function Nav<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.nav) }
export function NoIndex<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.noindex) }
export function NoScript<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.noscript) }
export function Obj<O = void>(name: string, render?: Render<HTMLObjectElement, O>, customize?: Customize<HTMLObjectElement, O>): RxNode<HTMLObjectElement> { return Inline(name, render, customize, HtmlTags.object) }
export function OL<O = void>(name: string, render?: Render<HTMLOListElement, O>, customize?: Customize<HTMLOListElement, O>): RxNode<HTMLOListElement> { return Inline(name, render, customize, HtmlTags.ol) }
export function OptGroup<O = void>(name: string, render?: Render<HTMLOptGroupElement, O>, customize?: Customize<HTMLOptGroupElement, O>): RxNode<HTMLOptGroupElement> { return Inline(name, render, customize, HtmlTags.optgroup) }
export function Option<O = void>(name: string, render?: Render<HTMLOptionElement, O>, customize?: Customize<HTMLOptionElement, O>): RxNode<HTMLOptionElement> { return Inline(name, render, customize, HtmlTags.option) }
export function Output<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.output) }
export function P<O = void>(name: string, render?: Render<HTMLParagraphElement, O>, customize?: Customize<HTMLParagraphElement, O>): RxNode<HTMLParagraphElement> { return Inline(name, render, customize, HtmlTags.p) }
export function Param<O = void>(name: string, render?: Render<HTMLParamElement, O>, customize?: Customize<HTMLParamElement, O>): RxNode<HTMLParamElement> { return Inline(name, render, customize, HtmlTags.param) }
export function Picture<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.picture) }
export function Pre<O = void>(name: string, render?: Render<HTMLPreElement, O>, customize?: Customize<HTMLPreElement, O>): RxNode<HTMLPreElement> { return Inline(name, render, customize, HtmlTags.pre) }
export function Progress<O = void>(name: string, render?: Render<HTMLProgressElement, O>, customize?: Customize<HTMLProgressElement, O>): RxNode<HTMLProgressElement> { return Inline(name, render, customize, HtmlTags.progress) }
export function Q<O = void>(name: string, render?: Render<HTMLQuoteElement, O>, customize?: Customize<HTMLQuoteElement, O>): RxNode<HTMLQuoteElement> { return Inline(name, render, customize, HtmlTags.q) }
export function RP<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.rp) }
export function RT<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.rt) }
export function Ruby<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.ruby) }
export function S<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.s) }
export function Samp<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.samp) }
export function Script<O = void>(name: string, render?: Render<HTMLScriptElement, O>, customize?: Customize<HTMLScriptElement, O>): RxNode<HTMLScriptElement> { return Inline(name, render, customize, HtmlTags.script) }
export function Section<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.section) }
export function Select<O = void>(name: string, render?: Render<HTMLSelectElement, O>, customize?: Customize<HTMLSelectElement, O>): RxNode<HTMLSelectElement> { return Inline(name, render, customize, HtmlTags.select) }
export function Small<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.small) }
export function Source<O = void>(name: string, render?: Render<HTMLSourceElement, O>, customize?: Customize<HTMLSourceElement, O>): RxNode<HTMLSourceElement> { return Inline(name, render, customize, HtmlTags.source) }
export function Span<O = void>(name: string, render?: Render<HTMLSpanElement, O>, customize?: Customize<HTMLSpanElement, O>): RxNode<HTMLSpanElement> { return Inline(name, render, customize, HtmlTags.span) }
export function Strong<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.strong) }
export function Style<O = void>(name: string, render?: Render<HTMLStyleElement, O>, customize?: Customize<HTMLStyleElement, O>): RxNode<HTMLStyleElement> { return Inline(name, render, customize, HtmlTags.style) }
export function Sub<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.sub) }
export function Summary<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.summary) }
export function Sup<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.sup) }
export function Table<O = void>(name: string, render?: Render<HTMLTableElement, O>, customize?: Customize<HTMLTableElement, O>): RxNode<HTMLTableElement> { return Inline(name, render, customize, HtmlTags.table) }
export function Template<O = void>(name: string, render?: Render<HTMLTemplateElement, O>, customize?: Customize<HTMLTemplateElement, O>): RxNode<HTMLTemplateElement> { return Inline(name, render, customize, HtmlTags.template) }
export function TBody<O = void>(name: string, render?: Render<HTMLTableSectionElement, O>, customize?: Customize<HTMLTableSectionElement, O>): RxNode<HTMLTableSectionElement> { return Inline(name, render, customize, HtmlTags.tbody) }
export function TD<O = void>(name: string, render?: Render<HTMLTableCellElement, O>, customize?: Customize<HTMLTableCellElement, O>): RxNode<HTMLTableCellElement> { return Inline(name, render, customize, HtmlTags.td) }
export function TextArea<O = void>(name: string, render?: Render<HTMLTextAreaElement, O>, customize?: Customize<HTMLTextAreaElement, O>): RxNode<HTMLTextAreaElement> { return Inline(name, render, customize, HtmlTags.textarea) }
export function TFoot<O = void>(name: string, render?: Render<HTMLTableSectionElement, O>, customize?: Customize<HTMLTableSectionElement, O>): RxNode<HTMLTableSectionElement> { return Inline(name, render, customize, HtmlTags.tfoot) }
export function TH<O = void>(name: string, render?: Render<HTMLTableCellElement, O>, customize?: Customize<HTMLTableCellElement, O>): RxNode<HTMLTableCellElement> { return Inline(name, render, customize, HtmlTags.th) }
export function THead<O = void>(name: string, render?: Render<HTMLTableSectionElement, O>, customize?: Customize<HTMLTableSectionElement, O>): RxNode<HTMLTableSectionElement> { return Inline(name, render, customize, HtmlTags.thead) }
export function Time<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.time) }
export function Title<O = void>(name: string, render?: Render<HTMLTitleElement, O>, customize?: Customize<HTMLTitleElement, O>): RxNode<HTMLTitleElement> { return Inline(name, render, customize, HtmlTags.title) }
export function TR<O = void>(name: string, render?: Render<HTMLTableRowElement, O>, customize?: Customize<HTMLTableRowElement, O>): RxNode<HTMLTableRowElement> { return Inline(name, render, customize, HtmlTags.tr) }
export function Track<O = void>(name: string, render?: Render<HTMLTrackElement, O>, customize?: Customize<HTMLTrackElement, O>): RxNode<HTMLTrackElement> { return Inline(name, render, customize, HtmlTags.track) }
export function U<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.u) }
export function UL<O = void>(name: string, render?: Render<HTMLUListElement, O>, customize?: Customize<HTMLUListElement, O>): RxNode<HTMLUListElement> { return Inline(name, render, customize, HtmlTags.ul) }
export function Var<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.var) }
export function Video<O = void>(name: string, render?: Render<HTMLVideoElement, O>, customize?: Customize<HTMLVideoElement, O>): RxNode<HTMLVideoElement> { return Inline(name, render, customize, HtmlTags.video) }
export function Wbr<O = void>(name: string, render?: Render<HTMLElement, O>, customize?: Customize<HTMLElement, O>): RxNode<HTMLElement> { return Inline(name, render, customize, HtmlTags.wbr) }

export function RxSvg<O = void>(name: string, triggers: unknown, render?: Render<SVGSVGElement, O>, customize?: Customize<SVGSVGElement, O>): RxNode<SVGSVGElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.svg) }
export function RxSvgA<O = void>(name: string, triggers: unknown, render?: Render<SVGAElement, O>, customize?: Customize<SVGAElement, O>): RxNode<SVGAElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.a) }
export function RxAnimate<O = void>(name: string, triggers: unknown, render?: Render<SVGAnimateElement, O>, customize?: Customize<SVGAnimateElement, O>): RxNode<SVGAnimateElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.animate) }
export function RxAnimateMotion<O = void>(name: string, triggers: unknown, render?: Render<SVGAnimateMotionElement, O>, customize?: Customize<SVGAnimateMotionElement, O>): RxNode<SVGAnimateMotionElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.animateMotion) }
export function RxAnimateTransform<O = void>(name: string, triggers: unknown, render?: Render<SVGAnimateTransformElement, O>, customize?: Customize<SVGAnimateTransformElement, O>): RxNode<SVGAnimateTransformElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.animateTransform) }
export function RxCircle<O = void>(name: string, triggers: unknown, render?: Render<SVGCircleElement, O>, customize?: Customize<SVGCircleElement, O>): RxNode<SVGCircleElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.circle) }
export function RxClipPath<O = void>(name: string, triggers: unknown, render?: Render<SVGClipPathElement, O>, customize?: Customize<SVGClipPathElement, O>): RxNode<SVGClipPathElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.clipPath) }
export function RxDefs<O = void>(name: string, triggers: unknown, render?: Render<SVGDefsElement, O>, customize?: Customize<SVGDefsElement, O>): RxNode<SVGDefsElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.defs) }
export function RxDesc<O = void>(name: string, triggers: unknown, render?: Render<SVGDescElement, O>, customize?: Customize<SVGDescElement, O>): RxNode<SVGDescElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.desc) }
export function RxEllipse<O = void>(name: string, triggers: unknown, render?: Render<SVGEllipseElement, O>, customize?: Customize<SVGEllipseElement, O>): RxNode<SVGEllipseElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.ellipse) }
export function RxFeBlend<O = void>(name: string, triggers: unknown, render?: Render<SVGFEBlendElement, O>, customize?: Customize<SVGFEBlendElement, O>): RxNode<SVGFEBlendElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.feBlend) }
export function RxFeColorMatrix<O = void>(name: string, triggers: unknown, render?: Render<SVGFEColorMatrixElement, O>, customize?: Customize<SVGFEColorMatrixElement, O>): RxNode<SVGFEColorMatrixElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.feColorMatrix) }
export function RxFeComponentTransfer<O = void>(name: string, triggers: unknown, render?: Render<SVGFEComponentTransferElement, O>, customize?: Customize<SVGFEComponentTransferElement, O>): RxNode<SVGFEComponentTransferElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.feComponentTransfer) }
export function RxFeComposite<O = void>(name: string, triggers: unknown, render?: Render<SVGFECompositeElement, O>, customize?: Customize<SVGFECompositeElement, O>): RxNode<SVGFECompositeElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.feComposite) }
export function RxFeConvolveMatrix<O = void>(name: string, triggers: unknown, render?: Render<SVGFEConvolveMatrixElement, O>, customize?: Customize<SVGFEConvolveMatrixElement, O>): RxNode<SVGFEConvolveMatrixElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.feConvolveMatrix) }
export function RxFeDiffuseLighting<O = void>(name: string, triggers: unknown, render?: Render<SVGFEDiffuseLightingElement, O>, customize?: Customize<SVGFEDiffuseLightingElement, O>): RxNode<SVGFEDiffuseLightingElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.feDiffuseLighting) }
export function RxFeDisplacementMap<O = void>(name: string, triggers: unknown, render?: Render<SVGFEDisplacementMapElement, O>, customize?: Customize<SVGFEDisplacementMapElement, O>): RxNode<SVGFEDisplacementMapElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.feDisplacementMap) }
export function RxFeDistantLight<O = void>(name: string, triggers: unknown, render?: Render<SVGFEDistantLightElement, O>, customize?: Customize<SVGFEDistantLightElement, O>): RxNode<SVGFEDistantLightElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.feDistantLight) }
export function RxFeDropShadow<O = void>(name: string, triggers: unknown, render?: Render<SVGFEDropShadowElement, O>, customize?: Customize<SVGFEDropShadowElement, O>): RxNode<SVGFEDropShadowElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.feDropShadow) }
export function RxFeFlood<O = void>(name: string, triggers: unknown, render?: Render<SVGFEFloodElement, O>, customize?: Customize<SVGFEFloodElement, O>): RxNode<SVGFEFloodElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.feFlood) }
export function RxFeFuncA<O = void>(name: string, triggers: unknown, render?: Render<SVGFEFuncAElement, O>, customize?: Customize<SVGFEFuncAElement, O>): RxNode<SVGFEFuncAElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.feFuncA) }
export function RxFeFuncB<O = void>(name: string, triggers: unknown, render?: Render<SVGFEFuncBElement, O>, customize?: Customize<SVGFEFuncBElement, O>): RxNode<SVGFEFuncBElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.feFuncB) }
export function RxFeFuncG<O = void>(name: string, triggers: unknown, render?: Render<SVGFEFuncGElement, O>, customize?: Customize<SVGFEFuncGElement, O>): RxNode<SVGFEFuncGElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.feFuncG) }
export function RxFeFuncR<O = void>(name: string, triggers: unknown, render?: Render<SVGFEFuncRElement, O>, customize?: Customize<SVGFEFuncRElement, O>): RxNode<SVGFEFuncRElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.feFuncR) }
export function RxFeGaussianBlur<O = void>(name: string, triggers: unknown, render?: Render<SVGFEGaussianBlurElement, O>, customize?: Customize<SVGFEGaussianBlurElement, O>): RxNode<SVGFEGaussianBlurElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.feGaussianBlur) }
export function RxFeImage<O = void>(name: string, triggers: unknown, render?: Render<SVGFEImageElement, O>, customize?: Customize<SVGFEImageElement, O>): RxNode<SVGFEImageElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.feImage) }
export function RxFeMerge<O = void>(name: string, triggers: unknown, render?: Render<SVGFEMergeElement, O>, customize?: Customize<SVGFEMergeElement, O>): RxNode<SVGFEMergeElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.feMerge) }
export function RxFeMergeNode<O = void>(name: string, triggers: unknown, render?: Render<SVGFEMergeNodeElement, O>, customize?: Customize<SVGFEMergeNodeElement, O>): RxNode<SVGFEMergeNodeElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.feMergeNode) }
export function RxFeMorphology<O = void>(name: string, triggers: unknown, render?: Render<SVGFEMorphologyElement, O>, customize?: Customize<SVGFEMorphologyElement, O>): RxNode<SVGFEMorphologyElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.feMorphology) }
export function RxFeOffset<O = void>(name: string, triggers: unknown, render?: Render<SVGFEOffsetElement, O>, customize?: Customize<SVGFEOffsetElement, O>): RxNode<SVGFEOffsetElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.feOffset) }
export function RxFePointLight<O = void>(name: string, triggers: unknown, render?: Render<SVGFEPointLightElement, O>, customize?: Customize<SVGFEPointLightElement, O>): RxNode<SVGFEPointLightElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.fePointLight) }
export function RxFeSpecularLighting<O = void>(name: string, triggers: unknown, render?: Render<SVGFESpecularLightingElement, O>, customize?: Customize<SVGFESpecularLightingElement, O>): RxNode<SVGFESpecularLightingElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.feSpecularLighting) }
export function RxFeSpotLight<O = void>(name: string, triggers: unknown, render?: Render<SVGFESpotLightElement, O>, customize?: Customize<SVGFESpotLightElement, O>): RxNode<SVGFESpotLightElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.feSpotLight) }
export function RxFeTile<O = void>(name: string, triggers: unknown, render?: Render<SVGFETileElement, O>, customize?: Customize<SVGFETileElement, O>): RxNode<SVGFETileElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.feTile) }
export function RxFeTurbulence<O = void>(name: string, triggers: unknown, render?: Render<SVGFETurbulenceElement, O>, customize?: Customize<SVGFETurbulenceElement, O>): RxNode<SVGFETurbulenceElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.feTurbulence) }
export function RxFilter<O = void>(name: string, triggers: unknown, render?: Render<SVGFilterElement, O>, customize?: Customize<SVGFilterElement, O>): RxNode<SVGFilterElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.filter) }
export function RxForeignObject<O = void>(name: string, triggers: unknown, render?: Render<SVGForeignObjectElement, O>, customize?: Customize<SVGForeignObjectElement, O>): RxNode<SVGForeignObjectElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.foreignObject) }
export function RxG<O = void>(name: string, triggers: unknown, render?: Render<SVGGElement, O>, customize?: Customize<SVGGElement, O>): RxNode<SVGGElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.g) }
export function RxSvgImage<O = void>(name: string, triggers: unknown, render?: Render<SVGImageElement, O>, customize?: Customize<SVGImageElement, O>): RxNode<SVGImageElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.image) }
export function RxLine<O = void>(name: string, triggers: unknown, render?: Render<SVGLineElement, O>, customize?: Customize<SVGLineElement, O>): RxNode<SVGLineElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.line) }
export function RxLinearGradient<O = void>(name: string, triggers: unknown, render?: Render<SVGLinearGradientElement, O>, customize?: Customize<SVGLinearGradientElement, O>): RxNode<SVGLinearGradientElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.linearGradient) }
export function RxMarker<O = void>(name: string, triggers: unknown, render?: Render<SVGMarkerElement, O>, customize?: Customize<SVGMarkerElement, O>): RxNode<SVGMarkerElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.marker) }
export function RxMask<O = void>(name: string, triggers: unknown, render?: Render<SVGMaskElement, O>, customize?: Customize<SVGMaskElement, O>): RxNode<SVGMaskElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.mask) }
export function RxMetadata<O = void>(name: string, triggers: unknown, render?: Render<SVGMetadataElement, O>, customize?: Customize<SVGMetadataElement, O>): RxNode<SVGMetadataElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.metadata) }
export function RxMPath<O = void>(name: string, triggers: unknown, render?: Render<SVGElement, O>, customize?: Customize<SVGElement, O>): RxNode<SVGElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.mpath) }
export function RxPath<O = void>(name: string, triggers: unknown, render?: Render<SVGPathElement, O>, customize?: Customize<SVGPathElement, O>): RxNode<SVGPathElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.path) }
export function RxPattern<O = void>(name: string, triggers: unknown, render?: Render<SVGPatternElement, O>, customize?: Customize<SVGPatternElement, O>): RxNode<SVGPatternElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.pattern) }
export function RxPolygon<O = void>(name: string, triggers: unknown, render?: Render<SVGPolygonElement, O>, customize?: Customize<SVGPolygonElement, O>): RxNode<SVGPolygonElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.polygon) }
export function RxPolyline<O = void>(name: string, triggers: unknown, render?: Render<SVGPolylineElement, O>, customize?: Customize<SVGPolylineElement, O>): RxNode<SVGPolylineElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.polyline) }
export function RxRadialGradient<O = void>(name: string, triggers: unknown, render?: Render<SVGRadialGradientElement, O>, customize?: Customize<SVGRadialGradientElement, O>): RxNode<SVGRadialGradientElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.radialGradient) }
export function RxRect<O = void>(name: string, triggers: unknown, render?: Render<SVGRectElement, O>, customize?: Customize<SVGRectElement, O>): RxNode<SVGRectElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.rect) }
export function RxStop<O = void>(name: string, triggers: unknown, render?: Render<SVGStopElement, O>, customize?: Customize<SVGStopElement, O>): RxNode<SVGStopElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.stop) }
export function RxSvgSwitch<O = void>(name: string, triggers: unknown, render?: Render<SVGSwitchElement, O>, customize?: Customize<SVGSwitchElement, O>): RxNode<SVGSwitchElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.switch) }
export function RxSymbol<O = void>(name: string, triggers: unknown, render?: Render<SVGSymbolElement, O>, customize?: Customize<SVGSymbolElement, O>): RxNode<SVGSymbolElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.symbol) }
export function RxText<O = void>(name: string, triggers: unknown, render?: Render<SVGTextElement, O>, customize?: Customize<SVGTextElement, O>): RxNode<SVGTextElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.text) }
export function RxTextPath<O = void>(name: string, triggers: unknown, render?: Render<SVGTextPathElement, O>, customize?: Customize<SVGTextPathElement, O>): RxNode<SVGTextPathElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.textPath) }
export function RxTSpan<O = void>(name: string, triggers: unknown, render?: Render<SVGTSpanElement, O>, customize?: Customize<SVGTSpanElement, O>): RxNode<SVGTSpanElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.tspan) }
export function RxUse<O = void>(name: string, triggers: unknown, render?: Render<SVGUseElement, O>, customize?: Customize<SVGUseElement, O>): RxNode<SVGUseElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.use) }
export function RxView<O = void>(name: string, triggers: unknown, render?: Render<SVGViewElement, O>, customize?: Customize<SVGViewElement, O>): RxNode<SVGViewElement, O> { return Reaction(name, triggers, render, customize, undefined, undefined, undefined, SvgTags.view) }

export function Svg<O = void>(name: string, render?: Render<SVGSVGElement, O>, customize?: Customize<SVGSVGElement, O>): RxNode<SVGSVGElement> { return Inline(name, render, customize, SvgTags.svg) }
export function SvgA<O = void>(name: string, render?: Render<SVGAElement, O>, customize?: Customize<SVGAElement, O>): RxNode<SVGAElement> { return Inline(name, render, customize, SvgTags.a) }
export function Animate<O = void>(name: string, render?: Render<SVGAnimateElement, O>, customize?: Customize<SVGAnimateElement, O>): RxNode<SVGAnimateElement> { return Inline(name, render, customize, SvgTags.animate) }
export function AnimateMotion<O = void>(name: string, render?: Render<SVGAnimateMotionElement, O>, customize?: Customize<SVGAnimateMotionElement, O>): RxNode<SVGAnimateMotionElement> { return Inline(name, render, customize, SvgTags.animateMotion) }
export function AnimateTransform<O = void>(name: string, render?: Render<SVGAnimateTransformElement, O>, customize?: Customize<SVGAnimateTransformElement, O>): RxNode<SVGAnimateTransformElement> { return Inline(name, render, customize, SvgTags.animateTransform) }
export function Circle<O = void>(name: string, render?: Render<SVGCircleElement, O>, customize?: Customize<SVGCircleElement, O>): RxNode<SVGCircleElement> { return Inline(name, render, customize, SvgTags.circle) }
export function ClipPath<O = void>(name: string, render?: Render<SVGClipPathElement, O>, customize?: Customize<SVGClipPathElement, O>): RxNode<SVGClipPathElement> { return Inline(name, render, customize, SvgTags.clipPath) }
export function Defs<O = void>(name: string, render?: Render<SVGDefsElement, O>, customize?: Customize<SVGDefsElement, O>): RxNode<SVGDefsElement> { return Inline(name, render, customize, SvgTags.defs) }
export function Desc<O = void>(name: string, render?: Render<SVGDescElement, O>, customize?: Customize<SVGDescElement, O>): RxNode<SVGDescElement> { return Inline(name, render, customize, SvgTags.desc) }
export function Ellipse<O = void>(name: string, render?: Render<SVGEllipseElement, O>, customize?: Customize<SVGEllipseElement, O>): RxNode<SVGEllipseElement> { return Inline(name, render, customize, SvgTags.ellipse) }
export function FeBlend<O = void>(name: string, render?: Render<SVGFEBlendElement, O>, customize?: Customize<SVGFEBlendElement, O>): RxNode<SVGFEBlendElement> { return Inline(name, render, customize, SvgTags.feBlend) }
export function FeColorMatrix<O = void>(name: string, render?: Render<SVGFEColorMatrixElement, O>, customize?: Customize<SVGFEColorMatrixElement, O>): RxNode<SVGFEColorMatrixElement> { return Inline(name, render, customize, SvgTags.feColorMatrix) }
export function FeComponentTransfer<O = void>(name: string, render?: Render<SVGFEComponentTransferElement, O>, customize?: Customize<SVGFEComponentTransferElement, O>): RxNode<SVGFEComponentTransferElement> { return Inline(name, render, customize, SvgTags.feComponentTransfer) }
export function FeComposite<O = void>(name: string, render?: Render<SVGFECompositeElement, O>, customize?: Customize<SVGFECompositeElement, O>): RxNode<SVGFECompositeElement> { return Inline(name, render, customize, SvgTags.feComposite) }
export function FeConvolveMatrix<O = void>(name: string, render?: Render<SVGFEConvolveMatrixElement, O>, customize?: Customize<SVGFEConvolveMatrixElement, O>): RxNode<SVGFEConvolveMatrixElement> { return Inline(name, render, customize, SvgTags.feConvolveMatrix) }
export function FeDiffuseLighting<O = void>(name: string, render?: Render<SVGFEDiffuseLightingElement, O>, customize?: Customize<SVGFEDiffuseLightingElement, O>): RxNode<SVGFEDiffuseLightingElement> { return Inline(name, render, customize, SvgTags.feDiffuseLighting) }
export function FeDisplacementMap<O = void>(name: string, render?: Render<SVGFEDisplacementMapElement, O>, customize?: Customize<SVGFEDisplacementMapElement, O>): RxNode<SVGFEDisplacementMapElement> { return Inline(name, render, customize, SvgTags.feDisplacementMap) }
export function FeDistantLight<O = void>(name: string, render?: Render<SVGFEDistantLightElement, O>, customize?: Customize<SVGFEDistantLightElement, O>): RxNode<SVGFEDistantLightElement> { return Inline(name, render, customize, SvgTags.feDistantLight) }
export function FeDropShadow<O = void>(name: string, render?: Render<SVGFEDropShadowElement, O>, customize?: Customize<SVGFEDropShadowElement, O>): RxNode<SVGFEDropShadowElement> { return Inline(name, render, customize, SvgTags.feDropShadow) }
export function FeFlood<O = void>(name: string, render?: Render<SVGFEFloodElement, O>, customize?: Customize<SVGFEFloodElement, O>): RxNode<SVGFEFloodElement> { return Inline(name, render, customize, SvgTags.feFlood) }
export function FeFuncA<O = void>(name: string, render?: Render<SVGFEFuncAElement, O>, customize?: Customize<SVGFEFuncAElement, O>): RxNode<SVGFEFuncAElement> { return Inline(name, render, customize, SvgTags.feFuncA) }
export function FeFuncB<O = void>(name: string, render?: Render<SVGFEFuncBElement, O>, customize?: Customize<SVGFEFuncBElement, O>): RxNode<SVGFEFuncBElement> { return Inline(name, render, customize, SvgTags.feFuncB) }
export function FeFuncG<O = void>(name: string, render?: Render<SVGFEFuncGElement, O>, customize?: Customize<SVGFEFuncGElement, O>): RxNode<SVGFEFuncGElement> { return Inline(name, render, customize, SvgTags.feFuncG) }
export function FeFuncR<O = void>(name: string, render?: Render<SVGFEFuncRElement, O>, customize?: Customize<SVGFEFuncRElement, O>): RxNode<SVGFEFuncRElement> { return Inline(name, render, customize, SvgTags.feFuncR) }
export function FeGaussianBlur<O = void>(name: string, render?: Render<SVGFEGaussianBlurElement, O>, customize?: Customize<SVGFEGaussianBlurElement, O>): RxNode<SVGFEGaussianBlurElement> { return Inline(name, render, customize, SvgTags.feGaussianBlur) }
export function FeImage<O = void>(name: string, render?: Render<SVGFEImageElement, O>, customize?: Customize<SVGFEImageElement, O>): RxNode<SVGFEImageElement> { return Inline(name, render, customize, SvgTags.feImage) }
export function FeMerge<O = void>(name: string, render?: Render<SVGFEMergeElement, O>, customize?: Customize<SVGFEMergeElement, O>): RxNode<SVGFEMergeElement> { return Inline(name, render, customize, SvgTags.feMerge) }
export function FeMergeNode<O = void>(name: string, render?: Render<SVGFEMergeNodeElement, O>, customize?: Customize<SVGFEMergeNodeElement, O>): RxNode<SVGFEMergeNodeElement> { return Inline(name, render, customize, SvgTags.feMergeNode) }
export function FeMorphology<O = void>(name: string, render?: Render<SVGFEMorphologyElement, O>, customize?: Customize<SVGFEMorphologyElement, O>): RxNode<SVGFEMorphologyElement> { return Inline(name, render, customize, SvgTags.feMorphology) }
export function FeOffset<O = void>(name: string, render?: Render<SVGFEOffsetElement, O>, customize?: Customize<SVGFEOffsetElement, O>): RxNode<SVGFEOffsetElement> { return Inline(name, render, customize, SvgTags.feOffset) }
export function FePointLight<O = void>(name: string, render?: Render<SVGFEPointLightElement, O>, customize?: Customize<SVGFEPointLightElement, O>): RxNode<SVGFEPointLightElement> { return Inline(name, render, customize, SvgTags.fePointLight) }
export function FeSpecularLighting<O = void>(name: string, render?: Render<SVGFESpecularLightingElement, O>, customize?: Customize<SVGFESpecularLightingElement, O>): RxNode<SVGFESpecularLightingElement> { return Inline(name, render, customize, SvgTags.feSpecularLighting) }
export function FeSpotLight<O = void>(name: string, render?: Render<SVGFESpotLightElement, O>, customize?: Customize<SVGFESpotLightElement, O>): RxNode<SVGFESpotLightElement> { return Inline(name, render, customize, SvgTags.feSpotLight) }
export function FeTile<O = void>(name: string, render?: Render<SVGFETileElement, O>, customize?: Customize<SVGFETileElement, O>): RxNode<SVGFETileElement> { return Inline(name, render, customize, SvgTags.feTile) }
export function FeTurbulence<O = void>(name: string, render?: Render<SVGFETurbulenceElement, O>, customize?: Customize<SVGFETurbulenceElement, O>): RxNode<SVGFETurbulenceElement> { return Inline(name, render, customize, SvgTags.feTurbulence) }
export function Filter<O = void>(name: string, render?: Render<SVGFilterElement, O>, customize?: Customize<SVGFilterElement, O>): RxNode<SVGFilterElement> { return Inline(name, render, customize, SvgTags.filter) }
export function ForeignObject<O = void>(name: string, render?: Render<SVGForeignObjectElement, O>, customize?: Customize<SVGForeignObjectElement, O>): RxNode<SVGForeignObjectElement> { return Inline(name, render, customize, SvgTags.foreignObject) }
export function G<O = void>(name: string, render?: Render<SVGGElement, O>, customize?: Customize<SVGGElement, O>): RxNode<SVGGElement> { return Inline(name, render, customize, SvgTags.g) }
export function SvgImage<O = void>(name: string, render?: Render<SVGImageElement, O>, customize?: Customize<SVGImageElement, O>): RxNode<SVGImageElement> { return Inline(name, render, customize, SvgTags.image) }
export function Line<O = void>(name: string, render?: Render<SVGLineElement, O>, customize?: Customize<SVGLineElement, O>): RxNode<SVGLineElement> { return Inline(name, render, customize, SvgTags.line) }
export function LinearGradient<O = void>(name: string, render?: Render<SVGLinearGradientElement, O>, customize?: Customize<SVGLinearGradientElement, O>): RxNode<SVGLinearGradientElement> { return Inline(name, render, customize, SvgTags.linearGradient) }
export function Marker<O = void>(name: string, render?: Render<SVGMarkerElement, O>, customize?: Customize<SVGMarkerElement, O>): RxNode<SVGMarkerElement> { return Inline(name, render, customize, SvgTags.marker) }
export function Mask<O = void>(name: string, render?: Render<SVGMaskElement, O>, customize?: Customize<SVGMaskElement, O>): RxNode<SVGMaskElement> { return Inline(name, render, customize, SvgTags.mask) }
export function MetaData<O = void>(name: string, render?: Render<SVGMetadataElement, O>, customize?: Customize<SVGMetadataElement, O>): RxNode<SVGMetadataElement> { return Inline(name, render, customize, SvgTags.metadata) }
export function MPath<O = void>(name: string, render?: Render<SVGElement, O>, customize?: Customize<SVGElement, O>): RxNode<SVGElement> { return Inline(name, render, customize, SvgTags.mpath) }
export function Path<O = void>(name: string, render?: Render<SVGPathElement, O>, customize?: Customize<SVGPathElement, O>): RxNode<SVGPathElement> { return Inline(name, render, customize, SvgTags.path) }
export function Pattern<O = void>(name: string, render?: Render<SVGPatternElement, O>, customize?: Customize<SVGPatternElement, O>): RxNode<SVGPatternElement> { return Inline(name, render, customize, SvgTags.pattern) }
export function Polygon<O = void>(name: string, render?: Render<SVGPolygonElement, O>, customize?: Customize<SVGPolygonElement, O>): RxNode<SVGPolygonElement> { return Inline(name, render, customize, SvgTags.polygon) }
export function PolyLine<O = void>(name: string, render?: Render<SVGPolylineElement, O>, customize?: Customize<SVGPolylineElement, O>): RxNode<SVGPolylineElement> { return Inline(name, render, customize, SvgTags.polyline) }
export function RadialGradient<O = void>(name: string, render?: Render<SVGRadialGradientElement, O>, customize?: Customize<SVGRadialGradientElement, O>): RxNode<SVGRadialGradientElement> { return Inline(name, render, customize, SvgTags.radialGradient) }
export function Rect<O = void>(name: string, render?: Render<SVGRectElement, O>, customize?: Customize<SVGRectElement, O>): RxNode<SVGRectElement> { return Inline(name, render, customize, SvgTags.rect) }
export function Stop<O = void>(name: string, render?: Render<SVGStopElement, O>, customize?: Customize<SVGStopElement, O>): RxNode<SVGStopElement> { return Inline(name, render, customize, SvgTags.stop) }
export function SvgSwitch<O = void>(name: string, render?: Render<SVGSwitchElement, O>, customize?: Customize<SVGSwitchElement, O>): RxNode<SVGSwitchElement> { return Inline(name, render, customize, SvgTags.switch) }
export function Symbol<O = void>(name: string, render?: Render<SVGSymbolElement, O>, customize?: Customize<SVGSymbolElement, O>): RxNode<SVGSymbolElement> { return Inline(name, render, customize, SvgTags.symbol) }
export function Text<O = void>(name: string, render?: Render<SVGTextElement, O>, customize?: Customize<SVGTextElement, O>): RxNode<SVGTextElement> { return Inline(name, render, customize, SvgTags.text) }
export function TextPath<O = void>(name: string, render?: Render<SVGTextPathElement, O>, customize?: Customize<SVGTextPathElement, O>): RxNode<SVGTextPathElement> { return Inline(name, render, customize, SvgTags.textPath) }
export function TSpan<O = void>(name: string, render?: Render<SVGTSpanElement, O>, customize?: Customize<SVGTSpanElement, O>): RxNode<SVGTSpanElement> { return Inline(name, render, customize, SvgTags.tspan) }
export function Use<O = void>(name: string, render?: Render<SVGUseElement, O>, customize?: Customize<SVGUseElement, O>): RxNode<SVGUseElement> { return Inline(name, render, customize, SvgTags.use) }
export function View<O = void>(name: string, render?: Render<SVGViewElement, O>, customize?: Customize<SVGViewElement, O>): RxNode<SVGViewElement> { return Inline(name, render, customize, SvgTags.view) }

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
