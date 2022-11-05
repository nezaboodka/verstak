// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Block, Render, StaticDriver, BlockOptions, BlockKind, BasicLayoutManager } from '../core/api'
import { HtmlDriver, SvgDriver } from './HtmlDriver'

export function ReactiveHtmlBody(name: string, triggers: unknown, renderer: Render<HTMLElement>): Block<HTMLElement> {
  const driver = new StaticDriver(name, BlockKind.Block, () => new BasicLayoutManager(), global.document.body)
  return Block.claim(name, { rx: true }, renderer, driver)
}

export function A<M = unknown, R = void>(name: string, options: BlockOptions<HTMLAnchorElement, M, R> | undefined, renderer: Render<HTMLAnchorElement, M, R>): Block<HTMLAnchorElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.a) }
export function Abbr<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.abbr) }
export function Address<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.address) }
export function Area<M = unknown, R = void>(name: string, options: BlockOptions<HTMLAreaElement, M, R> | undefined, renderer: Render<HTMLAreaElement, M, R>): Block<HTMLAreaElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.area) }
export function Article<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.article) }
export function Aside<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.aside) }
export function Audio<M = unknown, R = void>(name: string, options: BlockOptions<HTMLAudioElement, M, R> | undefined, renderer: Render<HTMLAudioElement, M, R>): Block<HTMLAudioElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.audio) }
export function B<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.b) }
export function Base<M = unknown, R = void>(name: string, options: BlockOptions<HTMLBaseElement, M, R> | undefined, renderer: Render<HTMLBaseElement, M, R>): Block<HTMLBaseElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.base) }
export function Bdi<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.bdi) }
export function Bdo<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.bdo) }
export function Big<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.big) }
export function BlockQuote<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.blockquote) }
export function Body<M = unknown, R = void>(name: string, options: BlockOptions<HTMLBodyElement, M, R> | undefined, renderer: Render<HTMLBodyElement, M, R>): Block<HTMLBodyElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.body) }
export function BR<M = unknown, R = void>(name: string, options: BlockOptions<HTMLBRElement, M, R> | undefined, renderer: Render<HTMLBRElement, M, R>): Block<HTMLBRElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.br) }
export function Button<M = unknown, R = void>(name: string, options: BlockOptions<HTMLButtonElement, M, R> | undefined, renderer: Render<HTMLButtonElement, M, R>): Block<HTMLButtonElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.button) }
export function Canvas<M = unknown, R = void>(name: string, options: BlockOptions<HTMLCanvasElement, M, R> | undefined, renderer: Render<HTMLCanvasElement, M, R>): Block<HTMLCanvasElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.canvas) }
export function Caption<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTableCaptionElement, M, R> | undefined, renderer: Render<HTMLTableCaptionElement, M, R>): Block<HTMLTableCaptionElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.caption) }
export function Cite<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.cite) }
export function Code<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.code) }
export function Col<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTableColElement, M, R> | undefined, renderer: Render<HTMLTableColElement, M, R>): Block<HTMLTableColElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.col) }
export function ColGroup<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTableColElement, M, R> | undefined, renderer: Render<HTMLTableColElement, M, R>): Block<HTMLTableColElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.colgroup) }
export function Data<M = unknown, R = void>(name: string, options: BlockOptions<HTMLDataElement, M, R> | undefined, renderer: Render<HTMLDataElement, M, R>): Block<HTMLDataElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.data) }
export function DataList<M = unknown, R = void>(name: string, options: BlockOptions<HTMLDataListElement, M, R> | undefined, renderer: Render<HTMLDataListElement, M, R>): Block<HTMLDataListElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.datalist) }
export function DD<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.dd) }
export function Del<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.del) }
export function Details<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.details) }
export function Dfn<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.dfn) }
export function Div<M = unknown, R = void>(name: string, options: BlockOptions<HTMLDivElement, M, R> | undefined, renderer: Render<HTMLDivElement, M, R>): Block<HTMLDivElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.div) }
export function DL<M = unknown, R = void>(name: string, options: BlockOptions<HTMLDListElement, M, R> | undefined, renderer: Render<HTMLDListElement, M, R>): Block<HTMLDListElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.dl) }
export function DT<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.dt) }
export function EM<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.em) }
export function Embed<M = unknown, R = void>(name: string, options: BlockOptions<HTMLEmbedElement, M, R> | undefined, renderer: Render<HTMLEmbedElement, M, R>): Block<HTMLEmbedElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.embed) }
export function FieldSet<M = unknown, R = void>(name: string, options: BlockOptions<HTMLFieldSetElement, M, R> | undefined, renderer: Render<HTMLFieldSetElement, M, R>): Block<HTMLFieldSetElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.fieldset) }
export function FigCaption<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.figcaption) }
export function Figure<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.figure) }
export function Footer<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.footer) }
export function Form<M = unknown, R = void>(name: string, options: BlockOptions<HTMLFormElement, M, R> | undefined, renderer: Render<HTMLFormElement, M, R>): Block<HTMLFormElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.form) }
export function H1<M = unknown, R = void>(name: string, options: BlockOptions<HTMLHeadingElement, M, R> | undefined, renderer: Render<HTMLHeadingElement, M, R>): Block<HTMLHeadingElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.h1) }
export function H2<M = unknown, R = void>(name: string, options: BlockOptions<HTMLHeadingElement, M, R> | undefined, renderer: Render<HTMLHeadingElement, M, R>): Block<HTMLHeadingElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.h2) }
export function H3<M = unknown, R = void>(name: string, options: BlockOptions<HTMLHeadingElement, M, R> | undefined, renderer: Render<HTMLHeadingElement, M, R>): Block<HTMLHeadingElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.h3) }
export function H4<M = unknown, R = void>(name: string, options: BlockOptions<HTMLHeadingElement, M, R> | undefined, renderer: Render<HTMLHeadingElement, M, R>): Block<HTMLHeadingElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.h4) }
export function H5<M = unknown, R = void>(name: string, options: BlockOptions<HTMLHeadingElement, M, R> | undefined, renderer: Render<HTMLHeadingElement, M, R>): Block<HTMLHeadingElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.h5) }
export function H6<M = unknown, R = void>(name: string, options: BlockOptions<HTMLHeadingElement, M, R> | undefined, renderer: Render<HTMLHeadingElement, M, R>): Block<HTMLHeadingElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.h6) }
export function Head<M = unknown, R = void>(name: string, options: BlockOptions<HTMLHeadElement, M, R> | undefined, renderer: Render<HTMLHeadElement, M, R>): Block<HTMLHeadElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.head) }
export function Header<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.header) }
export function HGroup<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.hgroup) }
export function HR<M = unknown, R = void>(name: string, options: BlockOptions<HTMLHRElement, M, R> | undefined, renderer: Render<HTMLHRElement, M, R>): Block<HTMLHRElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.hr) }
export function Html<M = unknown, R = void>(name: string, options: BlockOptions<HTMLHtmlElement, M, R> | undefined, renderer: Render<HTMLHtmlElement, M, R>): Block<HTMLHtmlElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.html) }
export function I<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.i) }
export function IFrame<M = unknown, R = void>(name: string, options: BlockOptions<HTMLIFrameElement, M, R> | undefined, renderer: Render<HTMLIFrameElement, M, R>): Block<HTMLIFrameElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.iframe) }
export function Img<M = unknown, R = void>(name: string, options: BlockOptions<HTMLImageElement, M, R> | undefined, renderer: Render<HTMLImageElement, M, R>): Block<HTMLImageElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.img) }
export function Input<M = unknown, R = void>(name: string, options: BlockOptions<HTMLInputElement, M, R> | undefined, renderer: Render<HTMLInputElement, M, R>): Block<HTMLInputElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.input) }
export function Ins<M = unknown, R = void>(name: string, options: BlockOptions<HTMLModElement, M, R> | undefined, renderer: Render<HTMLModElement, M, R>): Block<HTMLModElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.ins) }
export function Kbd<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.kbd) }
export function KeyGen<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.keygen) }
export function Label<M = unknown, R = void>(name: string, options: BlockOptions<HTMLLabelElement, M, R> | undefined, renderer: Render<HTMLLabelElement, M, R>): Block<HTMLLabelElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.label) }
export function Legend<M = unknown, R = void>(name: string, options: BlockOptions<HTMLLegendElement, M, R> | undefined, renderer: Render<HTMLLegendElement, M, R>): Block<HTMLLegendElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.legend) }
export function LI<M = unknown, R = void>(name: string, options: BlockOptions<HTMLLIElement, M, R>, renderer: Render<HTMLLIElement, M, R>): Block<HTMLLIElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.li) }
export function Link<M = unknown, R = void>(name: string, options: BlockOptions<HTMLLinkElement, M, R>, renderer: Render<HTMLLinkElement, M, R>): Block<HTMLLinkElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.link) }
export function Main<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.main) }
export function Map<M = unknown, R = void>(name: string, options: BlockOptions<HTMLMapElement, M, R> | undefined, renderer: Render<HTMLMapElement, M, R>): Block<HTMLMapElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.map) }
export function Mark<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.mark) }
export function Menu<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.menu) }
export function MenuItem<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.menuitem) }
export function Meta<M = unknown, R = void>(name: string, options: BlockOptions<HTMLMetaElement, M, R>, renderer: Render<HTMLMetaElement, M, R>): Block<HTMLMetaElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.meta) }
export function Meter<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.meter) }
export function Nav<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.nav) }
export function NoIndex<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.noindex) }
export function NoScript<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.noscript) }
export function Obj<M = unknown, R = void>(name: string, options: BlockOptions<HTMLObjectElement, M, R> | undefined, renderer: Render<HTMLObjectElement, M, R>): Block<HTMLObjectElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.object) }
export function OL<M = unknown, R = void>(name: string, options: BlockOptions<HTMLOListElement, M, R> | undefined, renderer: Render<HTMLOListElement, M, R>): Block<HTMLOListElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.ol) }
export function OptGroup<M = unknown, R = void>(name: string, options: BlockOptions<HTMLOptGroupElement, M, R> | undefined, renderer: Render<HTMLOptGroupElement, M, R>): Block<HTMLOptGroupElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.optgroup) }
export function Option<M = unknown, R = void>(name: string, options: BlockOptions<HTMLOptionElement, M, R> | undefined, renderer: Render<HTMLOptionElement, M, R>): Block<HTMLOptionElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.option) }
export function Output<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.output) }
export function P<M = unknown, R = void>(name: string, options: BlockOptions<HTMLParagraphElement, M, R> | undefined, renderer: Render<HTMLParagraphElement, M, R>): Block<HTMLParagraphElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.p) }
export function Param<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.param) }
export function Picture<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.picture) }
export function Pre<M = unknown, R = void>(name: string, options: BlockOptions<HTMLPreElement, M, R> | undefined, renderer: Render<HTMLPreElement, M, R>): Block<HTMLPreElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.pre) }
export function Progress<M = unknown, R = void>(name: string, options: BlockOptions<HTMLProgressElement, M, R> | undefined, renderer: Render<HTMLProgressElement, M, R>): Block<HTMLProgressElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.progress) }
export function Q<M = unknown, R = void>(name: string, options: BlockOptions<HTMLQuoteElement, M, R> | undefined, renderer: Render<HTMLQuoteElement, M, R>): Block<HTMLQuoteElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.q) }
export function RP<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.rp) }
export function RT<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.rt) }
export function Ruby<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.ruby) }
export function S<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.s) }
export function Samp<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.samp) }
export function Script<M = unknown, R = void>(name: string, options: BlockOptions<HTMLScriptElement, M, R> | undefined, renderer: Render<HTMLScriptElement, M, R>): Block<HTMLScriptElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.script) }
export function Section<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.section) }
export function Select<M = unknown, R = void>(name: string, options: BlockOptions<HTMLSelectElement, M, R> | undefined, renderer: Render<HTMLSelectElement, M, R>): Block<HTMLSelectElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.select) }
export function Small<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.small) }
export function Source<M = unknown, R = void>(name: string, options: BlockOptions<HTMLSourceElement, M, R> | undefined, renderer: Render<HTMLSourceElement, M, R>): Block<HTMLSourceElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.source) }
export function Span<M = unknown, R = void>(name: string, options: BlockOptions<HTMLSpanElement, M, R> | undefined, renderer: Render<HTMLSpanElement, M, R>): Block<HTMLSpanElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.span) }
export function Strong<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.strong) }
export function Style<M = unknown, R = void>(name: string, options: BlockOptions<HTMLStyleElement, M, R> | undefined, renderer: Render<HTMLStyleElement, M, R>): Block<HTMLStyleElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.style) }
export function Sub<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.sub) }
export function Summary<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.summary) }
export function Sup<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.sup) }
export function Table<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTableElement, M, R> | undefined, renderer: Render<HTMLTableElement, M, R>): Block<HTMLTableElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.table) }
export function Template<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTemplateElement, M, R> | undefined, renderer: Render<HTMLTemplateElement, M, R>): Block<HTMLTemplateElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.template) }
export function TBody<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTableSectionElement, M, R> | undefined, renderer: Render<HTMLTableSectionElement, M, R>): Block<HTMLTableSectionElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.tbody) }
export function TD<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTableCellElement, M, R> | undefined, renderer: Render<HTMLTableCellElement, M, R>): Block<HTMLTableCellElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.td) }
export function TextArea<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTextAreaElement, M, R> | undefined, renderer: Render<HTMLTextAreaElement, M, R>): Block<HTMLTextAreaElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.textarea) }
export function TFoot<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTableSectionElement, M, R> | undefined, renderer: Render<HTMLTableSectionElement, M, R>): Block<HTMLTableSectionElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.tfoot) }
export function TH<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTableCellElement, M, R> | undefined, renderer: Render<HTMLTableCellElement, M, R>): Block<HTMLTableCellElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.th) }
export function THead<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTableSectionElement, M, R> | undefined, renderer: Render<HTMLTableSectionElement, M, R>): Block<HTMLTableSectionElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.thead) }
export function Time<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.time) }
export function Title<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTitleElement, M, R> | undefined, renderer: Render<HTMLTitleElement, M, R>): Block<HTMLTitleElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.title) }
export function TR<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTableRowElement, M, R> | undefined, renderer: Render<HTMLTableRowElement, M, R>): Block<HTMLTableRowElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.tr) }
export function Track<M = unknown, R = void>(name: string, options: BlockOptions<HTMLTrackElement, M, R> | undefined, renderer: Render<HTMLTrackElement, M, R>): Block<HTMLTrackElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.track) }
export function U<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.u) }
export function UL<M = unknown, R = void>(name: string, options: BlockOptions<HTMLUListElement, M, R> | undefined, renderer: Render<HTMLUListElement, M, R>): Block<HTMLUListElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.ul) }
export function Var<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.var) }
export function Video<M = unknown, R = void>(name: string, options: BlockOptions<HTMLVideoElement, M, R> | undefined, renderer: Render<HTMLVideoElement, M, R>): Block<HTMLVideoElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.video) }
export function Wbr<M = unknown, R = void>(name: string, options: BlockOptions<HTMLElement, M, R> | undefined, renderer: Render<HTMLElement, M, R>): Block<HTMLElement, M, R> { return Block.claim(name, options, renderer, HtmlTags.wbr) }

export function Svg<M = unknown, R = void>(name: string, options: BlockOptions<SVGSVGElement, M, R> | undefined, renderer: Render<SVGSVGElement, M, R>): Block<SVGSVGElement, M, R> { return Block.claim(name, options, renderer, SvgTags.svg) }
export function SvgA<M = unknown, R = void>(name: string, options: BlockOptions<SVGAElement, M, R> | undefined, renderer: Render<SVGAElement, M, R>): Block<SVGAElement, M, R> { return Block.claim(name, options, renderer, SvgTags.a) }
export function Animate<M = unknown, R = void>(name: string, options: BlockOptions<SVGAnimateElement, M, R> | undefined, renderer: Render<SVGAnimateElement, M, R>): Block<SVGAnimateElement, M, R> { return Block.claim(name, options, renderer, SvgTags.animate) }
export function AnimateMotion<M = unknown, R = void>(name: string, options: BlockOptions<SVGAnimateMotionElement, M, R> | undefined, renderer: Render<SVGAnimateMotionElement, M, R>): Block<SVGAnimateMotionElement, M, R> { return Block.claim(name, options, renderer, SvgTags.animateMotion) }
export function AnimateTransform<M = unknown, R = void>(name: string, options: BlockOptions<SVGAnimateTransformElement, M, R> | undefined, renderer: Render<SVGAnimateTransformElement, M, R>): Block<SVGAnimateTransformElement, M, R> { return Block.claim(name, options, renderer, SvgTags.animateTransform) }
export function Circle<M = unknown, R = void>(name: string, options: BlockOptions<SVGCircleElement, M, R> | undefined, renderer: Render<SVGCircleElement, M, R>): Block<SVGCircleElement, M, R> { return Block.claim(name, options, renderer, SvgTags.circle) }
export function ClipPath<M = unknown, R = void>(name: string, options: BlockOptions<SVGClipPathElement, M, R> | undefined, renderer: Render<SVGClipPathElement, M, R>): Block<SVGClipPathElement, M, R> { return Block.claim(name, options, renderer, SvgTags.clipPath) }
export function Defs<M = unknown, R = void>(name: string, options: BlockOptions<SVGDefsElement, M, R> | undefined, renderer: Render<SVGDefsElement, M, R>): Block<SVGDefsElement, M, R> { return Block.claim(name, options, renderer, SvgTags.defs) }
export function Desc<M = unknown, R = void>(name: string, options: BlockOptions<SVGDescElement, M, R> | undefined, renderer: Render<SVGDescElement, M, R>): Block<SVGDescElement, M, R> { return Block.claim(name, options, renderer, SvgTags.desc) }
export function Ellipse<M = unknown, R = void>(name: string, options: BlockOptions<SVGEllipseElement, M, R> | undefined, renderer: Render<SVGEllipseElement, M, R>): Block<SVGEllipseElement, M, R> { return Block.claim(name, options, renderer, SvgTags.ellipse) }
export function FeBlend<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEBlendElement, M, R> | undefined, renderer: Render<SVGFEBlendElement, M, R>): Block<SVGFEBlendElement, M, R> { return Block.claim(name, options, renderer, SvgTags.feBlend) }
export function FeColorMatrix<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEColorMatrixElement, M, R> | undefined, renderer: Render<SVGFEColorMatrixElement, M, R>): Block<SVGFEColorMatrixElement, M, R> { return Block.claim(name, options, renderer, SvgTags.feColorMatrix) }
export function FeComponentTransfer<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEComponentTransferElement, M, R> | undefined, renderer: Render<SVGFEComponentTransferElement, M, R>): Block<SVGFEComponentTransferElement, M, R> { return Block.claim(name, options, renderer, SvgTags.feComponentTransfer) }
export function FeComposite<M = unknown, R = void>(name: string, options: BlockOptions<SVGFECompositeElement, M, R> | undefined, renderer: Render<SVGFECompositeElement, M, R>): Block<SVGFECompositeElement, M, R> { return Block.claim(name, options, renderer, SvgTags.feComposite) }
export function FeConvolveMatrix<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEConvolveMatrixElement, M, R> | undefined, renderer: Render<SVGFEConvolveMatrixElement, M, R>): Block<SVGFEConvolveMatrixElement, M, R> { return Block.claim(name, options, renderer, SvgTags.feConvolveMatrix) }
export function FeDiffuseLighting<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEDiffuseLightingElement, M, R> | undefined, renderer: Render<SVGFEDiffuseLightingElement, M, R>): Block<SVGFEDiffuseLightingElement, M, R> { return Block.claim(name, options, renderer, SvgTags.feDiffuseLighting) }
export function FeDisplacementMap<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEDisplacementMapElement, M, R> | undefined, renderer: Render<SVGFEDisplacementMapElement, M, R>): Block<SVGFEDisplacementMapElement, M, R> { return Block.claim(name, options, renderer, SvgTags.feDisplacementMap) }
export function FeDistantLight<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEDistantLightElement, M, R> | undefined, renderer: Render<SVGFEDistantLightElement, M, R>): Block<SVGFEDistantLightElement, M, R> { return Block.claim(name, options, renderer, SvgTags.feDistantLight) }
export function FeDropShadow<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEDropShadowElement, M, R> | undefined, renderer: Render<SVGFEDropShadowElement, M, R>): Block<SVGFEDropShadowElement, M, R> { return Block.claim(name, options, renderer, SvgTags.feDropShadow) }
export function FeFlood<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEFloodElement, M, R> | undefined, renderer: Render<SVGFEFloodElement, M, R>): Block<SVGFEFloodElement, M, R> { return Block.claim(name, options, renderer, SvgTags.feFlood) }
export function FeFuncA<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEFuncAElement, M, R> | undefined, renderer: Render<SVGFEFuncAElement, M, R>): Block<SVGFEFuncAElement, M, R> { return Block.claim(name, options, renderer, SvgTags.feFuncA) }
export function FeFuncB<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEFuncBElement, M, R> | undefined, renderer: Render<SVGFEFuncBElement, M, R>): Block<SVGFEFuncBElement, M, R> { return Block.claim(name, options, renderer, SvgTags.feFuncB) }
export function FeFuncG<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEFuncGElement, M, R> | undefined, renderer: Render<SVGFEFuncGElement, M, R>): Block<SVGFEFuncGElement, M, R> { return Block.claim(name, options, renderer, SvgTags.feFuncG) }
export function FeFuncR<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEFuncRElement, M, R> | undefined, renderer: Render<SVGFEFuncRElement, M, R>): Block<SVGFEFuncRElement, M, R> { return Block.claim(name, options, renderer, SvgTags.feFuncR) }
export function FeGaussianBlur<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEGaussianBlurElement, M, R> | undefined, renderer: Render<SVGFEGaussianBlurElement, M, R>): Block<SVGFEGaussianBlurElement, M, R> { return Block.claim(name, options, renderer, SvgTags.feGaussianBlur) }
export function FeImage<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEImageElement, M, R> | undefined, renderer: Render<SVGFEImageElement, M, R>): Block<SVGFEImageElement, M, R> { return Block.claim(name, options, renderer, SvgTags.feImage) }
export function FeMerge<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEMergeElement, M, R> | undefined, renderer: Render<SVGFEMergeElement, M, R>): Block<SVGFEMergeElement, M, R> { return Block.claim(name, options, renderer, SvgTags.feMerge) }
export function FeMergeNode<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEMergeNodeElement, M, R> | undefined, renderer: Render<SVGFEMergeNodeElement, M, R>): Block<SVGFEMergeNodeElement, M, R> { return Block.claim(name, options, renderer, SvgTags.feMergeNode) }
export function FeMorphology<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEMorphologyElement, M, R> | undefined, renderer: Render<SVGFEMorphologyElement, M, R>): Block<SVGFEMorphologyElement, M, R> { return Block.claim(name, options, renderer, SvgTags.feMorphology) }
export function FeOffset<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEOffsetElement, M, R> | undefined, renderer: Render<SVGFEOffsetElement, M, R>): Block<SVGFEOffsetElement, M, R> { return Block.claim(name, options, renderer, SvgTags.feOffset) }
export function FePointLight<M = unknown, R = void>(name: string, options: BlockOptions<SVGFEPointLightElement, M, R> | undefined, renderer: Render<SVGFEPointLightElement, M, R>): Block<SVGFEPointLightElement, M, R> { return Block.claim(name, options, renderer, SvgTags.fePointLight) }
export function FeSpecularLighting<M = unknown, R = void>(name: string, options: BlockOptions<SVGFESpecularLightingElement, M, R> | undefined, renderer: Render<SVGFESpecularLightingElement, M, R>): Block<SVGFESpecularLightingElement, M, R> { return Block.claim(name, options, renderer, SvgTags.feSpecularLighting) }
export function FeSpotLight<M = unknown, R = void>(name: string, options: BlockOptions<SVGFESpotLightElement, M, R> | undefined, renderer: Render<SVGFESpotLightElement, M, R>): Block<SVGFESpotLightElement, M, R> { return Block.claim(name, options, renderer, SvgTags.feSpotLight) }
export function FeTile<M = unknown, R = void>(name: string, options: BlockOptions<SVGFETileElement, M, R> | undefined, renderer: Render<SVGFETileElement, M, R>): Block<SVGFETileElement, M, R> { return Block.claim(name, options, renderer, SvgTags.feTile) }
export function FeTurbulence<M = unknown, R = void>(name: string, options: BlockOptions<SVGFETurbulenceElement, M, R> | undefined, renderer: Render<SVGFETurbulenceElement, M, R>): Block<SVGFETurbulenceElement, M, R> { return Block.claim(name, options, renderer, SvgTags.feTurbulence) }
export function Filter<M = unknown, R = void>(name: string, options: BlockOptions<SVGFilterElement, M, R> | undefined, renderer: Render<SVGFilterElement, M, R>): Block<SVGFilterElement, M, R> { return Block.claim(name, options, renderer, SvgTags.filter) }
export function ForeignObject<M = unknown, R = void>(name: string, options: BlockOptions<SVGForeignObjectElement, M, R> | undefined, renderer: Render<SVGForeignObjectElement, M, R>): Block<SVGForeignObjectElement, M, R> { return Block.claim(name, options, renderer, SvgTags.foreignObject) }
export function G<M = unknown, R = void>(name: string, options: BlockOptions<SVGGElement, M, R> | undefined, renderer: Render<SVGGElement, M, R>): Block<SVGGElement, M, R> { return Block.claim(name, options, renderer, SvgTags.g) }
export function SvgImage<M = unknown, R = void>(name: string, options: BlockOptions<SVGImageElement, M, R> | undefined, renderer: Render<SVGImageElement, M, R>): Block<SVGImageElement, M, R> { return Block.claim(name, options, renderer, SvgTags.image) }
export function Line<M = unknown, R = void>(name: string, options: BlockOptions<SVGLineElement, M, R> | undefined, renderer: Render<SVGLineElement, M, R>): Block<SVGLineElement, M, R> { return Block.claim(name, options, renderer, SvgTags.line) }
export function LinearGradient<M = unknown, R = void>(name: string, options: BlockOptions<SVGLinearGradientElement, M, R> | undefined, renderer: Render<SVGLinearGradientElement, M, R>): Block<SVGLinearGradientElement, M, R> { return Block.claim(name, options, renderer, SvgTags.linearGradient) }
export function Marker<M = unknown, R = void>(name: string, options: BlockOptions<SVGMarkerElement, M, R> | undefined, renderer: Render<SVGMarkerElement, M, R>): Block<SVGMarkerElement, M, R> { return Block.claim(name, options, renderer, SvgTags.marker) }
export function Mask<M = unknown, R = void>(name: string, options: BlockOptions<SVGMaskElement, M, R> | undefined, renderer: Render<SVGMaskElement, M, R>): Block<SVGMaskElement, M, R> { return Block.claim(name, options, renderer, SvgTags.mask) }
export function MetaData<M = unknown, R = void>(name: string, options: BlockOptions<SVGMetadataElement, M, R> | undefined, renderer: Render<SVGMetadataElement, M, R>): Block<SVGMetadataElement, M, R> { return Block.claim(name, options, renderer, SvgTags.metadata) }
export function MPath<M = unknown, R = void>(name: string, options: BlockOptions<SVGElement, M, R> | undefined, renderer: Render<SVGElement, M, R>): Block<SVGElement, M, R> { return Block.claim(name, options, renderer, SvgTags.mpath) }
export function Path<M = unknown, R = void>(name: string, options: BlockOptions<SVGPathElement, M, R> | undefined, renderer: Render<SVGPathElement, M, R>): Block<SVGPathElement, M, R> { return Block.claim(name, options, renderer, SvgTags.path) }
export function Pattern<M = unknown, R = void>(name: string, options: BlockOptions<SVGPatternElement, M, R> | undefined, renderer: Render<SVGPatternElement, M, R>): Block<SVGPatternElement, M, R> { return Block.claim(name, options, renderer, SvgTags.pattern) }
export function Polygon<M = unknown, R = void>(name: string, options: BlockOptions<SVGPolygonElement, M, R> | undefined, renderer: Render<SVGPolygonElement, M, R>): Block<SVGPolygonElement, M, R> { return Block.claim(name, options, renderer, SvgTags.polygon) }
export function PolyLine<M = unknown, R = void>(name: string, options: BlockOptions<SVGPolylineElement, M, R> | undefined, renderer: Render<SVGPolylineElement, M, R>): Block<SVGPolylineElement, M, R> { return Block.claim(name, options, renderer, SvgTags.polyline) }
export function RadialGradient<M = unknown, R = void>(name: string, options: BlockOptions<SVGRadialGradientElement, M, R> | undefined, renderer: Render<SVGRadialGradientElement, M, R>): Block<SVGRadialGradientElement, M, R> { return Block.claim(name, options, renderer, SvgTags.radialGradient) }
export function Rect<M = unknown, R = void>(name: string, options: BlockOptions<SVGRectElement, M, R> | undefined, renderer: Render<SVGRectElement, M, R>): Block<SVGRectElement, M, R> { return Block.claim(name, options, renderer, SvgTags.rect) }
export function Stop<M = unknown, R = void>(name: string, options: BlockOptions<SVGStopElement, M, R> | undefined, renderer: Render<SVGStopElement, M, R>): Block<SVGStopElement, M, R> { return Block.claim(name, options, renderer, SvgTags.stop) }
export function SvgSwitch<M = unknown, R = void>(name: string, options: BlockOptions<SVGSwitchElement, M, R> | undefined, renderer: Render<SVGSwitchElement, M, R>): Block<SVGSwitchElement, M, R> { return Block.claim(name, options, renderer, SvgTags.switch) }
export function Symbol<M = unknown, R = void>(name: string, options: BlockOptions<SVGSymbolElement, M, R> | undefined, renderer: Render<SVGSymbolElement, M, R>): Block<SVGSymbolElement, M, R> { return Block.claim(name, options, renderer, SvgTags.symbol) }
export function Text<M = unknown, R = void>(name: string, options: BlockOptions<SVGTextElement, M, R> | undefined, renderer: Render<SVGTextElement, M, R>): Block<SVGTextElement, M, R> { return Block.claim(name, options, renderer, SvgTags.text) }
export function TextPath<M = unknown, R = void>(name: string, options: BlockOptions<SVGTextPathElement, M, R> | undefined, renderer: Render<SVGTextPathElement, M, R>): Block<SVGTextPathElement, M, R> { return Block.claim(name, options, renderer, SvgTags.textPath) }
export function TSpan<M = unknown, R = void>(name: string, options: BlockOptions<SVGTSpanElement, M, R> | undefined, renderer: Render<SVGTSpanElement, M, R>): Block<SVGTSpanElement, M, R> { return Block.claim(name, options, renderer, SvgTags.tspan) }
export function Use<M = unknown, R = void>(name: string, options: BlockOptions<SVGUseElement, M, R> | undefined, renderer: Render<SVGUseElement, M, R>): Block<SVGUseElement, M, R> { return Block.claim(name, options, renderer, SvgTags.use) }
export function View<M = unknown, R = void>(name: string, options: BlockOptions<SVGViewElement, M, R> | undefined, renderer: Render<SVGViewElement, M, R>): Block<SVGViewElement, M, R> { return Block.claim(name, options, renderer, SvgTags.view) }

const HtmlTags = {
  a: new HtmlDriver<HTMLAnchorElement>('a', BlockKind.Block, () => new BasicLayoutManager()),
  abbr: new HtmlDriver<HTMLElement>('abbr', BlockKind.Block, () => new BasicLayoutManager()),
  address: new HtmlDriver<HTMLElement>('address', BlockKind.Block, () => new BasicLayoutManager()),
  area: new HtmlDriver<HTMLAreaElement>('area', BlockKind.Block, () => new BasicLayoutManager()),
  article: new HtmlDriver<HTMLElement>('article', BlockKind.Block, () => new BasicLayoutManager()),
  aside: new HtmlDriver<HTMLElement>('aside', BlockKind.Block, () => new BasicLayoutManager()),
  audio: new HtmlDriver<HTMLAudioElement>('audio', BlockKind.Block, () => new BasicLayoutManager()),
  b: new HtmlDriver<HTMLElement>('b', BlockKind.Block, () => new BasicLayoutManager()),
  base: new HtmlDriver<HTMLBaseElement>('base', BlockKind.Block, () => new BasicLayoutManager()),
  bdi: new HtmlDriver<HTMLElement>('bdi', BlockKind.Block, () => new BasicLayoutManager()),
  bdo: new HtmlDriver<HTMLElement>('bdo', BlockKind.Block, () => new BasicLayoutManager()),
  big: new HtmlDriver<HTMLElement>('big', BlockKind.Block, () => new BasicLayoutManager()),
  blockquote: new HtmlDriver<HTMLElement>('blockquote', BlockKind.Block, () => new BasicLayoutManager()),
  body: new HtmlDriver<HTMLBodyElement>('body', BlockKind.Block, () => new BasicLayoutManager()),
  br: new HtmlDriver<HTMLBRElement>('br', BlockKind.Block, () => new BasicLayoutManager()),
  button: new HtmlDriver<HTMLButtonElement>('button', BlockKind.Block, () => new BasicLayoutManager()),
  canvas: new HtmlDriver<HTMLCanvasElement>('canvas', BlockKind.Block, () => new BasicLayoutManager()),
  caption: new HtmlDriver<HTMLTableCaptionElement>('caption', BlockKind.Block, () => new BasicLayoutManager()),
  cite: new HtmlDriver<HTMLElement>('cite', BlockKind.Block, () => new BasicLayoutManager()),
  code: new HtmlDriver<HTMLElement>('code', BlockKind.Block, () => new BasicLayoutManager()),
  col: new HtmlDriver<HTMLTableColElement>('col', BlockKind.Block, () => new BasicLayoutManager()),
  colgroup: new HtmlDriver<HTMLTableColElement>('colgroup', BlockKind.Block, () => new BasicLayoutManager()),
  data: new HtmlDriver<HTMLDataElement>('data', BlockKind.Block, () => new BasicLayoutManager()),
  datalist: new HtmlDriver<HTMLDataListElement>('datalist', BlockKind.Block, () => new BasicLayoutManager()),
  dd: new HtmlDriver<HTMLElement>('dd', BlockKind.Block, () => new BasicLayoutManager()),
  del: new HtmlDriver<HTMLElement>('del', BlockKind.Block, () => new BasicLayoutManager()),
  details: new HtmlDriver<HTMLElement>('details', BlockKind.Block, () => new BasicLayoutManager()),
  dfn: new HtmlDriver<HTMLElement>('dfn', BlockKind.Block, () => new BasicLayoutManager()),
  div: new HtmlDriver<HTMLDivElement>('div', BlockKind.Block, () => new BasicLayoutManager()),
  dl: new HtmlDriver<HTMLDListElement>('dl', BlockKind.Block, () => new BasicLayoutManager()),
  dt: new HtmlDriver<HTMLElement>('dt', BlockKind.Block, () => new BasicLayoutManager()),
  em: new HtmlDriver<HTMLElement>('em', BlockKind.Block, () => new BasicLayoutManager()),
  embed: new HtmlDriver<HTMLEmbedElement>('embed', BlockKind.Block, () => new BasicLayoutManager()),
  fieldset: new HtmlDriver<HTMLFieldSetElement>('fieldset', BlockKind.Block, () => new BasicLayoutManager()),
  figcaption: new HtmlDriver<HTMLElement>('figcaption', BlockKind.Block, () => new BasicLayoutManager()),
  figure: new HtmlDriver<HTMLElement>('figure', BlockKind.Block, () => new BasicLayoutManager()),
  footer: new HtmlDriver<HTMLElement>('footer', BlockKind.Block, () => new BasicLayoutManager()),
  form: new HtmlDriver<HTMLFormElement>('form', BlockKind.Block, () => new BasicLayoutManager()),
  h1: new HtmlDriver<HTMLHeadingElement>('h1', BlockKind.Block, () => new BasicLayoutManager()),
  h2: new HtmlDriver<HTMLHeadingElement>('h2', BlockKind.Block, () => new BasicLayoutManager()),
  h3: new HtmlDriver<HTMLHeadingElement>('h3', BlockKind.Block, () => new BasicLayoutManager()),
  h4: new HtmlDriver<HTMLHeadingElement>('h4', BlockKind.Block, () => new BasicLayoutManager()),
  h5: new HtmlDriver<HTMLHeadingElement>('h5', BlockKind.Block, () => new BasicLayoutManager()),
  h6: new HtmlDriver<HTMLHeadingElement>('h6', BlockKind.Block, () => new BasicLayoutManager()),
  head: new HtmlDriver<HTMLHeadElement>('head', BlockKind.Block, () => new BasicLayoutManager()),
  header: new HtmlDriver<HTMLElement>('header', BlockKind.Block, () => new BasicLayoutManager()),
  hgroup: new HtmlDriver<HTMLElement>('hgroup', BlockKind.Block, () => new BasicLayoutManager()),
  hr: new HtmlDriver<HTMLHRElement>('hr', BlockKind.Block, () => new BasicLayoutManager()),
  html: new HtmlDriver<HTMLHtmlElement>('html', BlockKind.Block, () => new BasicLayoutManager()),
  i: new HtmlDriver<HTMLElement>('i', BlockKind.Block, () => new BasicLayoutManager()),
  iframe: new HtmlDriver<HTMLIFrameElement>('iframe', BlockKind.Block, () => new BasicLayoutManager()),
  img: new HtmlDriver<HTMLImageElement>('img', BlockKind.Block, () => new BasicLayoutManager()),
  input: new HtmlDriver<HTMLInputElement>('input', BlockKind.Block, () => new BasicLayoutManager()),
  ins: new HtmlDriver<HTMLModElement>('ins', BlockKind.Block, () => new BasicLayoutManager()),
  kbd: new HtmlDriver<HTMLElement>('kbd', BlockKind.Block, () => new BasicLayoutManager()),
  keygen: new HtmlDriver<HTMLElement>('keygen', BlockKind.Block, () => new BasicLayoutManager()),
  label: new HtmlDriver<HTMLLabelElement>('label', BlockKind.Block, () => new BasicLayoutManager()),
  legend: new HtmlDriver<HTMLLegendElement>('legend', BlockKind.Block, () => new BasicLayoutManager()),
  li: new HtmlDriver<HTMLLIElement>('li', BlockKind.Block, () => new BasicLayoutManager()),
  link: new HtmlDriver<HTMLLinkElement>('link', BlockKind.Block, () => new BasicLayoutManager()),
  main: new HtmlDriver<HTMLElement>('main', BlockKind.Block, () => new BasicLayoutManager()),
  map: new HtmlDriver<HTMLMapElement>('map', BlockKind.Block, () => new BasicLayoutManager()),
  mark: new HtmlDriver<HTMLElement>('mark', BlockKind.Block, () => new BasicLayoutManager()),
  menu: new HtmlDriver<HTMLElement>('menu', BlockKind.Block, () => new BasicLayoutManager()),
  menuitem: new HtmlDriver<HTMLElement>('menuitem', BlockKind.Block, () => new BasicLayoutManager()),
  meta: new HtmlDriver<HTMLMetaElement>('meta', BlockKind.Block, () => new BasicLayoutManager()),
  meter: new HtmlDriver<HTMLElement>('meter', BlockKind.Block, () => new BasicLayoutManager()),
  nav: new HtmlDriver<HTMLElement>('nav', BlockKind.Block, () => new BasicLayoutManager()),
  noindex: new HtmlDriver<HTMLElement>('noindex', BlockKind.Block, () => new BasicLayoutManager()),
  noscript: new HtmlDriver<HTMLElement>('noscript', BlockKind.Block, () => new BasicLayoutManager()),
  object: new HtmlDriver<HTMLObjectElement>('object', BlockKind.Block, () => new BasicLayoutManager()),
  ol: new HtmlDriver<HTMLOListElement>('ol', BlockKind.Block, () => new BasicLayoutManager()),
  optgroup: new HtmlDriver<HTMLOptGroupElement>('optgroup', BlockKind.Block, () => new BasicLayoutManager()),
  option: new HtmlDriver<HTMLOptionElement>('option', BlockKind.Block, () => new BasicLayoutManager()),
  output: new HtmlDriver<HTMLElement>('output', BlockKind.Block, () => new BasicLayoutManager()),
  p: new HtmlDriver<HTMLParagraphElement>('p', BlockKind.Block, () => new BasicLayoutManager()),
  param: new HtmlDriver<HTMLElement>('param', BlockKind.Block, () => new BasicLayoutManager()),
  picture: new HtmlDriver<HTMLElement>('picture', BlockKind.Block, () => new BasicLayoutManager()),
  pre: new HtmlDriver<HTMLPreElement>('pre', BlockKind.Block, () => new BasicLayoutManager()),
  progress: new HtmlDriver<HTMLProgressElement>('progress', BlockKind.Block, () => new BasicLayoutManager()),
  q: new HtmlDriver<HTMLQuoteElement>('q', BlockKind.Block, () => new BasicLayoutManager()),
  rp: new HtmlDriver<HTMLElement>('rp', BlockKind.Block, () => new BasicLayoutManager()),
  rt: new HtmlDriver<HTMLElement>('rt', BlockKind.Block, () => new BasicLayoutManager()),
  ruby: new HtmlDriver<HTMLElement>('ruby', BlockKind.Block, () => new BasicLayoutManager()),
  s: new HtmlDriver<HTMLElement>('s', BlockKind.Block, () => new BasicLayoutManager()),
  samp: new HtmlDriver<HTMLElement>('samp', BlockKind.Block, () => new BasicLayoutManager()),
  script: new HtmlDriver<HTMLScriptElement>('script', BlockKind.Block, () => new BasicLayoutManager()),
  section: new HtmlDriver<HTMLElement>('section', BlockKind.Block, () => new BasicLayoutManager()),
  select: new HtmlDriver<HTMLSelectElement>('select', BlockKind.Block, () => new BasicLayoutManager()),
  small: new HtmlDriver<HTMLElement>('small', BlockKind.Block, () => new BasicLayoutManager()),
  source: new HtmlDriver<HTMLSourceElement>('source', BlockKind.Block, () => new BasicLayoutManager()),
  span: new HtmlDriver<HTMLSpanElement>('span', BlockKind.Block, () => new BasicLayoutManager()),
  strong: new HtmlDriver<HTMLElement>('strong', BlockKind.Block, () => new BasicLayoutManager()),
  style: new HtmlDriver<HTMLStyleElement>('style', BlockKind.Block, () => new BasicLayoutManager()),
  sub: new HtmlDriver<HTMLElement>('sub', BlockKind.Block, () => new BasicLayoutManager()),
  summary: new HtmlDriver<HTMLElement>('summary', BlockKind.Block, () => new BasicLayoutManager()),
  sup: new HtmlDriver<HTMLElement>('sup', BlockKind.Block, () => new BasicLayoutManager()),
  table: new HtmlDriver<HTMLTableElement>('table', BlockKind.Block, () => new BasicLayoutManager()),
  template: new HtmlDriver<HTMLTemplateElement>('template', BlockKind.Block, () => new BasicLayoutManager()),
  tbody: new HtmlDriver<HTMLTableSectionElement>('tbody', BlockKind.Block, () => new BasicLayoutManager()),
  td: new HtmlDriver<HTMLTableCellElement>('td', BlockKind.Block, () => new BasicLayoutManager()),
  textarea: new HtmlDriver<HTMLTextAreaElement>('textarea', BlockKind.Block, () => new BasicLayoutManager()),
  tfoot: new HtmlDriver<HTMLTableSectionElement>('tfoot', BlockKind.Block, () => new BasicLayoutManager()),
  th: new HtmlDriver<HTMLTableCellElement>('th', BlockKind.Block, () => new BasicLayoutManager()),
  thead: new HtmlDriver<HTMLTableSectionElement>('thead', BlockKind.Block, () => new BasicLayoutManager()),
  time: new HtmlDriver<HTMLElement>('time', BlockKind.Block, () => new BasicLayoutManager()),
  title: new HtmlDriver<HTMLTitleElement>('title', BlockKind.Block, () => new BasicLayoutManager()),
  tr: new HtmlDriver<HTMLTableRowElement>('tr', BlockKind.Block, () => new BasicLayoutManager()),
  track: new HtmlDriver<HTMLTrackElement>('track', BlockKind.Block, () => new BasicLayoutManager()),
  u: new HtmlDriver<HTMLElement>('u', BlockKind.Block, () => new BasicLayoutManager()),
  ul: new HtmlDriver<HTMLUListElement>('ul', BlockKind.Block, () => new BasicLayoutManager()),
  var: new HtmlDriver<HTMLElement>('var', BlockKind.Block, () => new BasicLayoutManager()),
  video: new HtmlDriver<HTMLVideoElement>('video', BlockKind.Block, () => new BasicLayoutManager()),
  wbr: new HtmlDriver<HTMLElement>('wbr', BlockKind.Block, () => new BasicLayoutManager()),
  // webview: new HtmlNodeFactory<HTMLWebViewElement>('webview', BlockKind.Regular),
}

const SvgTags = {
  svg: new SvgDriver<SVGSVGElement>('svg', BlockKind.Block, () => new BasicLayoutManager()),
  a: new SvgDriver<SVGAElement>('a', BlockKind.Block, () => new BasicLayoutManager()),
  animate: new SvgDriver<SVGAnimateElement>('animate', BlockKind.Block, () => new BasicLayoutManager()),
  animateMotion: new SvgDriver<SVGAnimateMotionElement>('animateMotion', BlockKind.Block, () => new BasicLayoutManager()),
  animateTransform: new SvgDriver<SVGAnimateTransformElement>('animateTransform', BlockKind.Block, () => new BasicLayoutManager()),
  circle: new SvgDriver<SVGCircleElement>('circle', BlockKind.Block, () => new BasicLayoutManager()),
  clipPath: new SvgDriver<SVGClipPathElement>('clipPath', BlockKind.Block, () => new BasicLayoutManager()),
  defs: new SvgDriver<SVGDefsElement>('defs', BlockKind.Block, () => new BasicLayoutManager()),
  desc: new SvgDriver<SVGDescElement>('desc', BlockKind.Block, () => new BasicLayoutManager()),
  ellipse: new SvgDriver<SVGEllipseElement>('ellipse', BlockKind.Block, () => new BasicLayoutManager()),
  feBlend: new SvgDriver<SVGFEBlendElement>('feBlend', BlockKind.Block, () => new BasicLayoutManager()),
  feColorMatrix: new SvgDriver<SVGFEColorMatrixElement>('feColorMatrix', BlockKind.Block, () => new BasicLayoutManager()),
  feComponentTransfer: new SvgDriver<SVGFEComponentTransferElement>('feComponentTransfer', BlockKind.Block, () => new BasicLayoutManager()),
  feComposite: new SvgDriver<SVGFECompositeElement>('feComposite', BlockKind.Block, () => new BasicLayoutManager()),
  feConvolveMatrix: new SvgDriver<SVGFEConvolveMatrixElement>('feConvolveMatrix', BlockKind.Block, () => new BasicLayoutManager()),
  feDiffuseLighting: new SvgDriver<SVGFEDiffuseLightingElement>('feDiffuseLighting', BlockKind.Block, () => new BasicLayoutManager()),
  feDisplacementMap: new SvgDriver<SVGFEDisplacementMapElement>('feDisplacementMap', BlockKind.Block, () => new BasicLayoutManager()),
  feDistantLight: new SvgDriver<SVGFEDistantLightElement>('feDistantLight', BlockKind.Block, () => new BasicLayoutManager()),
  feDropShadow: new SvgDriver<SVGFEDropShadowElement>('feDropShadow', BlockKind.Block, () => new BasicLayoutManager()),
  feFlood: new SvgDriver<SVGFEFloodElement>('feFlood', BlockKind.Block, () => new BasicLayoutManager()),
  feFuncA: new SvgDriver<SVGFEFuncAElement>('feFuncA', BlockKind.Block, () => new BasicLayoutManager()),
  feFuncB: new SvgDriver<SVGFEFuncBElement>('feFuncB', BlockKind.Block, () => new BasicLayoutManager()),
  feFuncG: new SvgDriver<SVGFEFuncGElement>('feFuncG', BlockKind.Block, () => new BasicLayoutManager()),
  feFuncR: new SvgDriver<SVGFEFuncRElement>('feFuncR', BlockKind.Block, () => new BasicLayoutManager()),
  feGaussianBlur: new SvgDriver<SVGFEGaussianBlurElement>('feGaussianBlur', BlockKind.Block, () => new BasicLayoutManager()),
  feImage: new SvgDriver<SVGFEImageElement>('feImage', BlockKind.Block, () => new BasicLayoutManager()),
  feMerge: new SvgDriver<SVGFEMergeElement>('feMerge', BlockKind.Block, () => new BasicLayoutManager()),
  feMergeNode: new SvgDriver<SVGFEMergeNodeElement>('feMergeNode', BlockKind.Block, () => new BasicLayoutManager()),
  feMorphology: new SvgDriver<SVGFEMorphologyElement>('feMorphology', BlockKind.Block, () => new BasicLayoutManager()),
  feOffset: new SvgDriver<SVGFEOffsetElement>('feOffset', BlockKind.Block, () => new BasicLayoutManager()),
  fePointLight: new SvgDriver<SVGFEPointLightElement>('fePointLight', BlockKind.Block, () => new BasicLayoutManager()),
  feSpecularLighting: new SvgDriver<SVGFESpecularLightingElement>('feSpecularLighting', BlockKind.Block, () => new BasicLayoutManager()),
  feSpotLight: new SvgDriver<SVGFESpotLightElement>('feSpotLight', BlockKind.Block, () => new BasicLayoutManager()),
  feTile: new SvgDriver<SVGFETileElement>('feTile', BlockKind.Block, () => new BasicLayoutManager()),
  feTurbulence: new SvgDriver<SVGFETurbulenceElement>('feTurbulence', BlockKind.Block, () => new BasicLayoutManager()),
  filter: new SvgDriver<SVGFilterElement>('filter', BlockKind.Block, () => new BasicLayoutManager()),
  foreignObject: new SvgDriver<SVGForeignObjectElement>('foreignObject', BlockKind.Block, () => new BasicLayoutManager()),
  g: new SvgDriver<SVGGElement>('g', BlockKind.Block, () => new BasicLayoutManager()),
  image: new SvgDriver<SVGImageElement>('image', BlockKind.Block, () => new BasicLayoutManager()),
  line: new SvgDriver<SVGLineElement>('line', BlockKind.Block, () => new BasicLayoutManager()),
  linearGradient: new SvgDriver<SVGLinearGradientElement>('linearGradient', BlockKind.Block, () => new BasicLayoutManager()),
  marker: new SvgDriver<SVGMarkerElement>('marker', BlockKind.Block, () => new BasicLayoutManager()),
  mask: new SvgDriver<SVGMaskElement>('mask', BlockKind.Block, () => new BasicLayoutManager()),
  metadata: new SvgDriver<SVGMetadataElement>('metadata', BlockKind.Block, () => new BasicLayoutManager()),
  mpath: new SvgDriver<SVGElement>('mpath', BlockKind.Block, () => new BasicLayoutManager()),
  path: new SvgDriver<SVGPathElement>('path', BlockKind.Block, () => new BasicLayoutManager()),
  pattern: new SvgDriver<SVGPatternElement>('pattern', BlockKind.Block, () => new BasicLayoutManager()),
  polygon: new SvgDriver<SVGPolygonElement>('polygon', BlockKind.Block, () => new BasicLayoutManager()),
  polyline: new SvgDriver<SVGPolylineElement>('polyline', BlockKind.Block, () => new BasicLayoutManager()),
  radialGradient: new SvgDriver<SVGRadialGradientElement>('radialGradient', BlockKind.Block, () => new BasicLayoutManager()),
  rect: new SvgDriver<SVGRectElement>('rect', BlockKind.Block, () => new BasicLayoutManager()),
  stop: new SvgDriver<SVGStopElement>('stop', BlockKind.Block, () => new BasicLayoutManager()),
  switch: new SvgDriver<SVGSwitchElement>('switch', BlockKind.Block, () => new BasicLayoutManager()),
  symbol: new SvgDriver<SVGSymbolElement>('symbol', BlockKind.Block, () => new BasicLayoutManager()),
  text: new SvgDriver<SVGTextElement>('text', BlockKind.Block, () => new BasicLayoutManager()),
  textPath: new SvgDriver<SVGTextPathElement>('textPath', BlockKind.Block, () => new BasicLayoutManager()),
  tspan: new SvgDriver<SVGTSpanElement>('tspan', BlockKind.Block, () => new BasicLayoutManager()),
  use: new SvgDriver<SVGUseElement>('use', BlockKind.Block, () => new BasicLayoutManager()),
  view: new SvgDriver<SVGViewElement>('view', BlockKind.Block, () => new BasicLayoutManager()),
}
