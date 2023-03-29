// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { VBlock, StaticDriver, Layout, BlockBuilder } from "../core/api"
import { HtmlDriver, SvgDriver } from "./HtmlDriver"

export function HtmlBody(builder?: BlockBuilder<HTMLElement>, base?: BlockBuilder<HTMLElement>): VBlock<HTMLElement> {
  const driver = new StaticDriver(global.document.body, "HtmlBody", false, b => b.childrenLayout = Layout.Band)
  return VBlock.claim(driver, builder, base)
}

export function A<M = unknown, R = void>(builder?: BlockBuilder<HTMLAnchorElement, M, void, R>, base?: BlockBuilder<HTMLAnchorElement, M, void, R>): VBlock<HTMLAnchorElement, M, void, R> { return VBlock.claim(HtmlTags.a, builder, base) }
export function Abbr<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.abbr, builder, base) }
export function Address<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.address, builder, base) }
export function Area<M = unknown, R = void>(builder?: BlockBuilder<HTMLAreaElement, M, void, R>, base?: BlockBuilder<HTMLAreaElement, M, void, R>): VBlock<HTMLAreaElement, M, void, R> { return VBlock.claim(HtmlTags.area, builder, base) }
export function Article<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.article, builder, base) }
export function Aside<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.aside, builder, base) }
export function Audio<M = unknown, R = void>(builder?: BlockBuilder<HTMLAudioElement, M, void, R>, base?: BlockBuilder<HTMLAudioElement, M, void, R>): VBlock<HTMLAudioElement, M, void, R> { return VBlock.claim(HtmlTags.audio, builder, base) }
export function B<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.b, builder, base) }
export function Base<M = unknown, R = void>(builder?: BlockBuilder<HTMLBaseElement, M, void, R>, base?: BlockBuilder<HTMLBaseElement, M, void, R>): VBlock<HTMLBaseElement, M, void, R> { return VBlock.claim(HtmlTags.base, builder, base) }
export function Bdi<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.bdi, builder, base) }
export function Bdo<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.bdo, builder, base) }
export function Big<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.big, builder, base) }
export function BlockQuote<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.blockquote, builder, base) }
export function Body<M = unknown, R = void>(builder?: BlockBuilder<HTMLBodyElement, M, void, R>, base?: BlockBuilder<HTMLBodyElement, M, void, R>): VBlock<HTMLBodyElement, M, void, R> { return VBlock.claim(HtmlTags.body, builder, base) }
export function BR<M = unknown, R = void>(builder?: BlockBuilder<HTMLBRElement, M, void, R>, base?: BlockBuilder<HTMLBRElement, M, void, R>): VBlock<HTMLBRElement, M, void, R> { return VBlock.claim(HtmlTags.br, builder, base) }
export function Button<M = unknown, R = void>(builder?: BlockBuilder<HTMLButtonElement, M, void, R>, base?: BlockBuilder<HTMLButtonElement, M, void, R>): VBlock<HTMLButtonElement, M, void, R> { return VBlock.claim(HtmlTags.button, builder, base) }
export function Canvas<M = unknown, R = void>(builder?: BlockBuilder<HTMLCanvasElement, M, void, R>, base?: BlockBuilder<HTMLCanvasElement, M, void, R>): VBlock<HTMLCanvasElement, M, void, R> { return VBlock.claim(HtmlTags.canvas, builder, base) }
export function Caption<M = unknown, R = void>(builder?: BlockBuilder<HTMLTableCaptionElement, M, void, R>, base?: BlockBuilder<HTMLTableCaptionElement, M, void, R>): VBlock<HTMLTableCaptionElement, M, void, R> { return VBlock.claim(HtmlTags.caption, builder, base) }
export function Cite<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.cite, builder, base) }
export function Code<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.code, builder, base) }
export function Col<M = unknown, R = void>(builder?: BlockBuilder<HTMLTableColElement, M, void, R>, base?: BlockBuilder<HTMLTableColElement, M, void, R>): VBlock<HTMLTableColElement, M, void, R> { return VBlock.claim(HtmlTags.col, builder, base) }
export function ColGroup<M = unknown, R = void>(builder?: BlockBuilder<HTMLTableColElement, M, void, R>, base?: BlockBuilder<HTMLTableColElement, M, void, R>): VBlock<HTMLTableColElement, M, void, R> { return VBlock.claim(HtmlTags.colgroup, builder, base) }
export function Data<M = unknown, R = void>(builder?: BlockBuilder<HTMLDataElement, M, void, R>, base?: BlockBuilder<HTMLDataElement, M, void, R>): VBlock<HTMLDataElement, M, void, R> { return VBlock.claim(HtmlTags.data, builder, base) }
export function DataList<M = unknown, R = void>(builder?: BlockBuilder<HTMLDataListElement, M, void, R>, base?: BlockBuilder<HTMLDataListElement, M, void, R>): VBlock<HTMLDataListElement, M, void, R> { return VBlock.claim(HtmlTags.datalist, builder, base) }
export function DD<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.dd, builder, base) }
export function Del<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.del, builder, base) }
export function Details<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.details, builder, base) }
export function Dfn<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.dfn, builder, base) }
export function Div<M = unknown, R = void>(builder?: BlockBuilder<HTMLDivElement, M, void, R>, base?: BlockBuilder<HTMLDivElement, M, void, R>): VBlock<HTMLDivElement, M, void, R> { return VBlock.claim(HtmlTags.div, builder, base) }
export function DL<M = unknown, R = void>(builder?: BlockBuilder<HTMLDListElement, M, void, R>, base?: BlockBuilder<HTMLDListElement, M, void, R>): VBlock<HTMLDListElement, M, void, R> { return VBlock.claim(HtmlTags.dl, builder, base) }
export function DT<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.dt, builder, base) }
export function EM<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.em, builder, base) }
export function Embed<M = unknown, R = void>(builder?: BlockBuilder<HTMLEmbedElement, M, void, R>, base?: BlockBuilder<HTMLEmbedElement, M, void, R>): VBlock<HTMLEmbedElement, M, void, R> { return VBlock.claim(HtmlTags.embed, builder, base) }
export function FieldSet<M = unknown, R = void>(builder?: BlockBuilder<HTMLFieldSetElement, M, void, R>, base?: BlockBuilder<HTMLFieldSetElement, M, void, R>): VBlock<HTMLFieldSetElement, M, void, R> { return VBlock.claim(HtmlTags.fieldset, builder, base) }
export function FigCaption<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.figcaption, builder, base) }
export function Figure<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.figure, builder, base) }
export function Footer<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.footer, builder, base) }
export function Form<M = unknown, R = void>(builder?: BlockBuilder<HTMLFormElement, M, void, R>, base?: BlockBuilder<HTMLFormElement, M, void, R>): VBlock<HTMLFormElement, M, void, R> { return VBlock.claim(HtmlTags.form, builder, base) }
export function H1<M = unknown, R = void>(builder?: BlockBuilder<HTMLHeadingElement, M, void, R>, base?: BlockBuilder<HTMLHeadingElement, M, void, R>): VBlock<HTMLHeadingElement, M, void, R> { return VBlock.claim(HtmlTags.h1, builder, base) }
export function H2<M = unknown, R = void>(builder?: BlockBuilder<HTMLHeadingElement, M, void, R>, base?: BlockBuilder<HTMLHeadingElement, M, void, R>): VBlock<HTMLHeadingElement, M, void, R> { return VBlock.claim(HtmlTags.h2, builder, base) }
export function H3<M = unknown, R = void>(builder?: BlockBuilder<HTMLHeadingElement, M, void, R>, base?: BlockBuilder<HTMLHeadingElement, M, void, R>): VBlock<HTMLHeadingElement, M, void, R> { return VBlock.claim(HtmlTags.h3, builder, base) }
export function H4<M = unknown, R = void>(builder?: BlockBuilder<HTMLHeadingElement, M, void, R>, base?: BlockBuilder<HTMLHeadingElement, M, void, R>): VBlock<HTMLHeadingElement, M, void, R> { return VBlock.claim(HtmlTags.h4, builder, base) }
export function H5<M = unknown, R = void>(builder?: BlockBuilder<HTMLHeadingElement, M, void, R>, base?: BlockBuilder<HTMLHeadingElement, M, void, R>): VBlock<HTMLHeadingElement, M, void, R> { return VBlock.claim(HtmlTags.h5, builder, base) }
export function H6<M = unknown, R = void>(builder?: BlockBuilder<HTMLHeadingElement, M, void, R>, base?: BlockBuilder<HTMLHeadingElement, M, void, R>): VBlock<HTMLHeadingElement, M, void, R> { return VBlock.claim(HtmlTags.h6, builder, base) }
export function Head<M = unknown, R = void>(builder?: BlockBuilder<HTMLHeadElement, M, void, R>, base?: BlockBuilder<HTMLHeadElement, M, void, R>): VBlock<HTMLHeadElement, M, void, R> { return VBlock.claim(HtmlTags.head, builder, base) }
export function Header<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.header, builder, base) }
export function HGroup<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.hgroup, builder, base) }
export function HR<M = unknown, R = void>(builder?: BlockBuilder<HTMLHRElement, M, void, R>, base?: BlockBuilder<HTMLHRElement, M, void, R>): VBlock<HTMLHRElement, M, void, R> { return VBlock.claim(HtmlTags.hr, builder, base) }
export function Html<M = unknown, R = void>(builder?: BlockBuilder<HTMLHtmlElement, M, void, R>, base?: BlockBuilder<HTMLHtmlElement, M, void, R>): VBlock<HTMLHtmlElement, M, void, R> { return VBlock.claim(HtmlTags.html, builder, base) }
export function I<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.i, builder, base) }
export function IFrame<M = unknown, R = void>(builder?: BlockBuilder<HTMLIFrameElement, M, void, R>, base?: BlockBuilder<HTMLIFrameElement, M, void, R>): VBlock<HTMLIFrameElement, M, void, R> { return VBlock.claim(HtmlTags.iframe, builder, base) }
export function Img<M = unknown, R = void>(builder?: BlockBuilder<HTMLImageElement, M, void, R>, base?: BlockBuilder<HTMLImageElement, M, void, R>): VBlock<HTMLImageElement, M, void, R> { return VBlock.claim(HtmlTags.img, builder, base) }
export function Input<M = unknown, R = void>(builder?: BlockBuilder<HTMLInputElement, M, void, R>, base?: BlockBuilder<HTMLInputElement, M, void, R>): VBlock<HTMLInputElement, M, void, R> { return VBlock.claim(HtmlTags.input, builder, base) }
export function Ins<M = unknown, R = void>(builder?: BlockBuilder<HTMLModElement, M, void, R>, base?: BlockBuilder<HTMLModElement, M, void, R>): VBlock<HTMLModElement, M, void, R> { return VBlock.claim(HtmlTags.ins, builder, base) }
export function Kbd<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.kbd, builder, base) }
export function KeyGen<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.keygen, builder, base) }
export function Label<M = unknown, R = void>(builder?: BlockBuilder<HTMLLabelElement, M, void, R>, base?: BlockBuilder<HTMLLabelElement, M, void, R>): VBlock<HTMLLabelElement, M, void, R> { return VBlock.claim(HtmlTags.label, builder, base) }
export function Legend<M = unknown, R = void>(builder?: BlockBuilder<HTMLLegendElement, M, void, R>, base?: BlockBuilder<HTMLLegendElement, M, void, R>): VBlock<HTMLLegendElement, M, void, R> { return VBlock.claim(HtmlTags.legend, builder, base) }
export function LI<M = unknown, R = void>(builder?: BlockBuilder<HTMLLIElement, M, void, R>, base?: BlockBuilder<HTMLLIElement, M, void, R>): VBlock<HTMLLIElement, M, void, R> { return VBlock.claim(HtmlTags.li, builder, base) }
export function Link<M = unknown, R = void>(builder?: BlockBuilder<HTMLLinkElement, M, void, R>, base?: BlockBuilder<HTMLLinkElement, M, void, R>): VBlock<HTMLLinkElement, M, void, R> { return VBlock.claim(HtmlTags.link, builder, base) }
export function Main<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.main, builder, base) }
export function Map<M = unknown, R = void>(builder?: BlockBuilder<HTMLMapElement, M, void, R>, base?: BlockBuilder<HTMLMapElement, M, void, R>): VBlock<HTMLMapElement, M, void, R> { return VBlock.claim(HtmlTags.map, builder, base) }
export function Mark<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.mark, builder, base) }
export function Menu<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.menu, builder, base) }
export function MenuItem<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.menuitem, builder, base) }
export function Meta<M = unknown, R = void>(builder?: BlockBuilder<HTMLMetaElement, M, void, R>, base?: BlockBuilder<HTMLMetaElement, M, void, R>): VBlock<HTMLMetaElement, M, void, R> { return VBlock.claim(HtmlTags.meta, builder, base) }
export function Meter<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.meter, builder, base) }
export function Nav<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.nav, builder, base) }
export function NoIndex<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.noindex, builder, base) }
export function NoScript<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.noscript, builder, base) }
export function Obj<M = unknown, R = void>(builder?: BlockBuilder<HTMLObjectElement, M, void, R>, base?: BlockBuilder<HTMLObjectElement, M, void, R>): VBlock<HTMLObjectElement, M, void, R> { return VBlock.claim(HtmlTags.object, builder, base) }
export function OL<M = unknown, R = void>(builder?: BlockBuilder<HTMLOListElement, M, void, R>, base?: BlockBuilder<HTMLOListElement, M, void, R>): VBlock<HTMLOListElement, M, void, R> { return VBlock.claim(HtmlTags.ol, builder, base) }
export function OptGroup<M = unknown, R = void>(builder?: BlockBuilder<HTMLOptGroupElement, M, void, R>, base?: BlockBuilder<HTMLOptGroupElement, M, void, R>): VBlock<HTMLOptGroupElement, M, void, R> { return VBlock.claim(HtmlTags.optgroup, builder, base) }
export function Option<M = unknown, R = void>(builder?: BlockBuilder<HTMLOptionElement, M, void, R>, base?: BlockBuilder<HTMLOptionElement, M, void, R>): VBlock<HTMLOptionElement, M, void, R> { return VBlock.claim(HtmlTags.option, builder, base) }
export function Output<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.output, builder, base) }
export function P<M = unknown, R = void>(builder?: BlockBuilder<HTMLParagraphElement, M, void, R>, base?: BlockBuilder<HTMLParagraphElement, M, void, R>): VBlock<HTMLParagraphElement, M, void, R> { return VBlock.claim(HtmlTags.p, builder, base) }
export function Param<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.param, builder, base) }
export function Picture<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.picture, builder, base) }
export function Pre<M = unknown, R = void>(builder?: BlockBuilder<HTMLPreElement, M, void, R>, base?: BlockBuilder<HTMLPreElement, M, void, R>): VBlock<HTMLPreElement, M, void, R> { return VBlock.claim(HtmlTags.pre, builder, base) }
export function Progress<M = unknown, R = void>(builder?: BlockBuilder<HTMLProgressElement, M, void, R>, base?: BlockBuilder<HTMLProgressElement, M, void, R>): VBlock<HTMLProgressElement, M, void, R> { return VBlock.claim(HtmlTags.progress, builder, base) }
export function Q<M = unknown, R = void>(builder?: BlockBuilder<HTMLQuoteElement, M, void, R>, base?: BlockBuilder<HTMLQuoteElement, M, void, R>): VBlock<HTMLQuoteElement, M, void, R> { return VBlock.claim(HtmlTags.q, builder, base) }
export function RP<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.rp, builder, base) }
export function RT<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.rt, builder, base) }
export function Ruby<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.ruby, builder, base) }
export function S<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.s, builder, base) }
export function Samp<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.samp, builder, base) }
export function Script<M = unknown, R = void>(builder?: BlockBuilder<HTMLScriptElement, M, void, R>, base?: BlockBuilder<HTMLScriptElement, M, void, R>): VBlock<HTMLScriptElement, M, void, R> { return VBlock.claim(HtmlTags.script, builder, base) }
export function Section<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.section, builder, base) }
export function Select<M = unknown, R = void>(builder?: BlockBuilder<HTMLSelectElement, M, void, R>, base?: BlockBuilder<HTMLSelectElement, M, void, R>): VBlock<HTMLSelectElement, M, void, R> { return VBlock.claim(HtmlTags.select, builder, base) }
export function Small<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.small, builder, base) }
export function Source<M = unknown, R = void>(builder?: BlockBuilder<HTMLSourceElement, M, void, R>, base?: BlockBuilder<HTMLSourceElement, M, void, R>): VBlock<HTMLSourceElement, M, void, R> { return VBlock.claim(HtmlTags.source, builder, base) }
export function Span<M = unknown, R = void>(builder?: BlockBuilder<HTMLSpanElement, M, void, R>, base?: BlockBuilder<HTMLSpanElement, M, void, R>): VBlock<HTMLSpanElement, M, void, R> { return VBlock.claim(HtmlTags.span, builder, base) }
export function Strong<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.strong, builder, base) }
export function Style<M = unknown, R = void>(builder?: BlockBuilder<HTMLStyleElement, M, void, R>, base?: BlockBuilder<HTMLStyleElement, M, void, R>): VBlock<HTMLStyleElement, M, void, R> { return VBlock.claim(HtmlTags.style, builder, base) }
export function Sub<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.sub, builder, base) }
export function Summary<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.summary, builder, base) }
export function Sup<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.sup, builder, base) }
export function Tbl<M = unknown, R = void>(builder?: BlockBuilder<HTMLTableElement, M, void, R>, base?: BlockBuilder<HTMLTableElement, M, void, R>): VBlock<HTMLTableElement, M, void, R> { return VBlock.claim(HtmlTags.table, builder, base) }
export function Template<M = unknown, R = void>(builder?: BlockBuilder<HTMLTemplateElement, M, void, R>, base?: BlockBuilder<HTMLTemplateElement, M, void, R>): VBlock<HTMLTemplateElement, M, void, R> { return VBlock.claim(HtmlTags.template, builder, base) }
export function TBody<M = unknown, R = void>(builder?: BlockBuilder<HTMLTableSectionElement, M, void, R>, base?: BlockBuilder<HTMLTableSectionElement, M, void, R>): VBlock<HTMLTableSectionElement, M, void, R> { return VBlock.claim(HtmlTags.tbody, builder, base) }
export function TD<M = unknown, R = void>(builder?: BlockBuilder<HTMLTableCellElement, M, void, R>, base?: BlockBuilder<HTMLTableCellElement, M, void, R>): VBlock<HTMLTableCellElement, M, void, R> { return VBlock.claim(HtmlTags.td, builder, base) }
export function TextArea<M = unknown, R = void>(builder?: BlockBuilder<HTMLTextAreaElement, M, void, R>, base?: BlockBuilder<HTMLTextAreaElement, M, void, R>): VBlock<HTMLTextAreaElement, M, void, R> { return VBlock.claim(HtmlTags.textarea, builder, base) }
export function TFoot<M = unknown, R = void>(builder?: BlockBuilder<HTMLTableSectionElement, M, void, R>, base?: BlockBuilder<HTMLTableSectionElement, M, void, R>): VBlock<HTMLTableSectionElement, M, void, R> { return VBlock.claim(HtmlTags.tfoot, builder, base) }
export function TH<M = unknown, R = void>(builder?: BlockBuilder<HTMLTableCellElement, M, void, R>, base?: BlockBuilder<HTMLTableCellElement, M, void, R>): VBlock<HTMLTableCellElement, M, void, R> { return VBlock.claim(HtmlTags.th, builder, base) }
export function THead<M = unknown, R = void>(builder?: BlockBuilder<HTMLTableSectionElement, M, void, R>, base?: BlockBuilder<HTMLTableSectionElement, M, void, R>): VBlock<HTMLTableSectionElement, M, void, R> { return VBlock.claim(HtmlTags.thead, builder, base) }
export function Time<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.time, builder, base) }
export function Title<M = unknown, R = void>(builder?: BlockBuilder<HTMLTitleElement, M, void, R>, base?: BlockBuilder<HTMLTitleElement, M, void, R>): VBlock<HTMLTitleElement, M, void, R> { return VBlock.claim(HtmlTags.title, builder, base) }
export function TR<M = unknown, R = void>(builder?: BlockBuilder<HTMLTableRowElement, M, void, R>, base?: BlockBuilder<HTMLTableRowElement, M, void, R>): VBlock<HTMLTableRowElement, M, void, R> { return VBlock.claim(HtmlTags.tr, builder, base) }
export function Track<M = unknown, R = void>(builder?: BlockBuilder<HTMLTrackElement, M, void, R>, base?: BlockBuilder<HTMLTrackElement, M, void, R>): VBlock<HTMLTrackElement, M, void, R> { return VBlock.claim(HtmlTags.track, builder, base) }
export function U<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.u, builder, base) }
export function UL<M = unknown, R = void>(builder?: BlockBuilder<HTMLUListElement, M, void, R>, base?: BlockBuilder<HTMLUListElement, M, void, R>): VBlock<HTMLUListElement, M, void, R> { return VBlock.claim(HtmlTags.ul, builder, base) }
export function Var<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.var, builder, base) }
export function Video<M = unknown, R = void>(builder?: BlockBuilder<HTMLVideoElement, M, void, R>, base?: BlockBuilder<HTMLVideoElement, M, void, R>): VBlock<HTMLVideoElement, M, void, R> { return VBlock.claim(HtmlTags.video, builder, base) }
export function Wbr<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.wbr, builder, base) }

export function Svg<M = unknown, R = void>(builder?: BlockBuilder<SVGSVGElement, M, void, R>, base?: BlockBuilder<SVGSVGElement, M, void, R>): VBlock<SVGSVGElement, M, void, R> { return VBlock.claim(SvgTags.svg, builder, base) }
export function SvgA<M = unknown, R = void>(builder?: BlockBuilder<SVGAElement, M, void, R>, base?: BlockBuilder<SVGAElement, M, void, R>): VBlock<SVGAElement, M, void, R> { return VBlock.claim(SvgTags.a, builder, base) }
export function Animate<M = unknown, R = void>(builder?: BlockBuilder<SVGAnimateElement, M, void, R>, base?: BlockBuilder<SVGAnimateElement, M, void, R>): VBlock<SVGAnimateElement, M, void, R> { return VBlock.claim(SvgTags.animate, builder, base) }
export function AnimateMotion<M = unknown, R = void>(builder?: BlockBuilder<SVGAnimateMotionElement, M, void, R>, base?: BlockBuilder<SVGAnimateMotionElement, M, void, R>): VBlock<SVGAnimateMotionElement, M, void, R> { return VBlock.claim(SvgTags.animateMotion, builder, base) }
export function AnimateTransform<M = unknown, R = void>(builder?: BlockBuilder<SVGAnimateTransformElement, M, void, R>, base?: BlockBuilder<SVGAnimateTransformElement, M, void, R>): VBlock<SVGAnimateTransformElement, M, void, R> { return VBlock.claim(SvgTags.animateTransform, builder, base) }
export function Circle<M = unknown, R = void>(builder?: BlockBuilder<SVGCircleElement, M, void, R>, base?: BlockBuilder<SVGCircleElement, M, void, R>): VBlock<SVGCircleElement, M, void, R> { return VBlock.claim(SvgTags.circle, builder, base) }
export function ClipPath<M = unknown, R = void>(builder?: BlockBuilder<SVGClipPathElement, M, void, R>, base?: BlockBuilder<SVGClipPathElement, M, void, R>): VBlock<SVGClipPathElement, M, void, R> { return VBlock.claim(SvgTags.clipPath, builder, base) }
export function Defs<M = unknown, R = void>(builder?: BlockBuilder<SVGDefsElement, M, void, R>, base?: BlockBuilder<SVGDefsElement, M, void, R>): VBlock<SVGDefsElement, M, void, R> { return VBlock.claim(SvgTags.defs, builder, base) }
export function Desc<M = unknown, R = void>(builder?: BlockBuilder<SVGDescElement, M, void, R>, base?: BlockBuilder<SVGDescElement, M, void, R>): VBlock<SVGDescElement, M, void, R> { return VBlock.claim(SvgTags.desc, builder, base) }
export function Ellipse<M = unknown, R = void>(builder?: BlockBuilder<SVGEllipseElement, M, void, R>, base?: BlockBuilder<SVGEllipseElement, M, void, R>): VBlock<SVGEllipseElement, M, void, R> { return VBlock.claim(SvgTags.ellipse, builder, base) }
export function FeBlend<M = unknown, R = void>(builder?: BlockBuilder<SVGFEBlendElement, M, void, R>, base?: BlockBuilder<SVGFEBlendElement, M, void, R>): VBlock<SVGFEBlendElement, M, void, R> { return VBlock.claim(SvgTags.feBlend, builder, base) }
export function FeColorMatrix<M = unknown, R = void>(builder?: BlockBuilder<SVGFEColorMatrixElement, M, void, R>, base?: BlockBuilder<SVGFEColorMatrixElement, M, void, R>): VBlock<SVGFEColorMatrixElement, M, void, R> { return VBlock.claim(SvgTags.feColorMatrix, builder, base) }
export function FeComponentTransfer<M = unknown, R = void>(builder?: BlockBuilder<SVGFEComponentTransferElement, M, void, R>, base?: BlockBuilder<SVGFEComponentTransferElement, M, void, R>): VBlock<SVGFEComponentTransferElement, M, void, R> { return VBlock.claim(SvgTags.feComponentTransfer, builder, base) }
export function FeComposite<M = unknown, R = void>(builder?: BlockBuilder<SVGFECompositeElement, M, void, R>, base?: BlockBuilder<SVGFECompositeElement, M, void, R>): VBlock<SVGFECompositeElement, M, void, R> { return VBlock.claim(SvgTags.feComposite, builder, base) }
export function FeConvolveMatrix<M = unknown, R = void>(builder?: BlockBuilder<SVGFEConvolveMatrixElement, M, void, R>, base?: BlockBuilder<SVGFEConvolveMatrixElement, M, void, R>): VBlock<SVGFEConvolveMatrixElement, M, void, R> { return VBlock.claim(SvgTags.feConvolveMatrix, builder, base) }
export function FeDiffuseLighting<M = unknown, R = void>(builder?: BlockBuilder<SVGFEDiffuseLightingElement, M, void, R>, base?: BlockBuilder<SVGFEDiffuseLightingElement, M, void, R>): VBlock<SVGFEDiffuseLightingElement, M, void, R> { return VBlock.claim(SvgTags.feDiffuseLighting, builder, base) }
export function FeDisplacementMap<M = unknown, R = void>(builder?: BlockBuilder<SVGFEDisplacementMapElement, M, void, R>, base?: BlockBuilder<SVGFEDisplacementMapElement, M, void, R>): VBlock<SVGFEDisplacementMapElement, M, void, R> { return VBlock.claim(SvgTags.feDisplacementMap, builder, base) }
export function FeDistantLight<M = unknown, R = void>(builder?: BlockBuilder<SVGFEDistantLightElement, M, void, R>, base?: BlockBuilder<SVGFEDistantLightElement, M, void, R>): VBlock<SVGFEDistantLightElement, M, void, R> { return VBlock.claim(SvgTags.feDistantLight, builder, base) }
export function FeDropShadow<M = unknown, R = void>(builder?: BlockBuilder<SVGFEDropShadowElement, M, void, R>, base?: BlockBuilder<SVGFEDropShadowElement, M, void, R>): VBlock<SVGFEDropShadowElement, M, void, R> { return VBlock.claim(SvgTags.feDropShadow, builder, base) }
export function FeFlood<M = unknown, R = void>(builder?: BlockBuilder<SVGFEFloodElement, M, void, R>, base?: BlockBuilder<SVGFEFloodElement, M, void, R>): VBlock<SVGFEFloodElement, M, void, R> { return VBlock.claim(SvgTags.feFlood, builder, base) }
export function FeFuncA<M = unknown, R = void>(builder?: BlockBuilder<SVGFEFuncAElement, M, void, R>, base?: BlockBuilder<SVGFEFuncAElement, M, void, R>): VBlock<SVGFEFuncAElement, M, void, R> { return VBlock.claim(SvgTags.feFuncA, builder, base) }
export function FeFuncB<M = unknown, R = void>(builder?: BlockBuilder<SVGFEFuncBElement, M, void, R>, base?: BlockBuilder<SVGFEFuncBElement, M, void, R>): VBlock<SVGFEFuncBElement, M, void, R> { return VBlock.claim(SvgTags.feFuncB, builder, base) }
export function FeFuncG<M = unknown, R = void>(builder?: BlockBuilder<SVGFEFuncGElement, M, void, R>, base?: BlockBuilder<SVGFEFuncGElement, M, void, R>): VBlock<SVGFEFuncGElement, M, void, R> { return VBlock.claim(SvgTags.feFuncG, builder, base) }
export function FeFuncR<M = unknown, R = void>(builder?: BlockBuilder<SVGFEFuncRElement, M, void, R>, base?: BlockBuilder<SVGFEFuncRElement, M, void, R>): VBlock<SVGFEFuncRElement, M, void, R> { return VBlock.claim(SvgTags.feFuncR, builder, base) }
export function FeGaussianBlur<M = unknown, R = void>(builder?: BlockBuilder<SVGFEGaussianBlurElement, M, void, R>, base?: BlockBuilder<SVGFEGaussianBlurElement, M, void, R>): VBlock<SVGFEGaussianBlurElement, M, void, R> { return VBlock.claim(SvgTags.feGaussianBlur, builder, base) }
export function FeImage<M = unknown, R = void>(builder?: BlockBuilder<SVGFEImageElement, M, void, R>, base?: BlockBuilder<SVGFEImageElement, M, void, R>): VBlock<SVGFEImageElement, M, void, R> { return VBlock.claim(SvgTags.feImage, builder, base) }
export function FeMerge<M = unknown, R = void>(builder?: BlockBuilder<SVGFEMergeElement, M, void, R>, base?: BlockBuilder<SVGFEMergeElement, M, void, R>): VBlock<SVGFEMergeElement, M, void, R> { return VBlock.claim(SvgTags.feMerge, builder, base) }
export function FeMergeNode<M = unknown, R = void>(builder?: BlockBuilder<SVGFEMergeNodeElement, M, void, R>, base?: BlockBuilder<SVGFEMergeNodeElement, M, void, R>): VBlock<SVGFEMergeNodeElement, M, void, R> { return VBlock.claim(SvgTags.feMergeNode, builder, base) }
export function FeMorphology<M = unknown, R = void>(builder?: BlockBuilder<SVGFEMorphologyElement, M, void, R>, base?: BlockBuilder<SVGFEMorphologyElement, M, void, R>): VBlock<SVGFEMorphologyElement, M, void, R> { return VBlock.claim(SvgTags.feMorphology, builder, base) }
export function FeOffset<M = unknown, R = void>(builder?: BlockBuilder<SVGFEOffsetElement, M, void, R>, base?: BlockBuilder<SVGFEOffsetElement, M, void, R>): VBlock<SVGFEOffsetElement, M, void, R> { return VBlock.claim(SvgTags.feOffset, builder, base) }
export function FePointLight<M = unknown, R = void>(builder?: BlockBuilder<SVGFEPointLightElement, M, void, R>, base?: BlockBuilder<SVGFEPointLightElement, M, void, R>): VBlock<SVGFEPointLightElement, M, void, R> { return VBlock.claim(SvgTags.fePointLight, builder, base) }
export function FeSpecularLighting<M = unknown, R = void>(builder?: BlockBuilder<SVGFESpecularLightingElement, M, void, R>, base?: BlockBuilder<SVGFESpecularLightingElement, M, void, R>): VBlock<SVGFESpecularLightingElement, M, void, R> { return VBlock.claim(SvgTags.feSpecularLighting, builder, base) }
export function FeSpotLight<M = unknown, R = void>(builder?: BlockBuilder<SVGFESpotLightElement, M, void, R>, base?: BlockBuilder<SVGFESpotLightElement, M, void, R>): VBlock<SVGFESpotLightElement, M, void, R> { return VBlock.claim(SvgTags.feSpotLight, builder, base) }
export function FeTile<M = unknown, R = void>(builder?: BlockBuilder<SVGFETileElement, M, void, R>, base?: BlockBuilder<SVGFETileElement, M, void, R>): VBlock<SVGFETileElement, M, void, R> { return VBlock.claim(SvgTags.feTile, builder, base) }
export function FeTurbulence<M = unknown, R = void>(builder?: BlockBuilder<SVGFETurbulenceElement, M, void, R>, base?: BlockBuilder<SVGFETurbulenceElement, M, void, R>): VBlock<SVGFETurbulenceElement, M, void, R> { return VBlock.claim(SvgTags.feTurbulence, builder, base) }
export function Filter<M = unknown, R = void>(builder?: BlockBuilder<SVGFilterElement, M, void, R>, base?: BlockBuilder<SVGFilterElement, M, void, R>): VBlock<SVGFilterElement, M, void, R> { return VBlock.claim(SvgTags.filter, builder, base) }
export function ForeignObject<M = unknown, R = void>(builder?: BlockBuilder<SVGForeignObjectElement, M, void, R>, base?: BlockBuilder<SVGForeignObjectElement, M, void, R>): VBlock<SVGForeignObjectElement, M, void, R> { return VBlock.claim(SvgTags.foreignObject, builder, base) }
export function G<M = unknown, R = void>(builder?: BlockBuilder<SVGGElement, M, void, R>, base?: BlockBuilder<SVGGElement, M, void, R>): VBlock<SVGGElement, M, void, R> { return VBlock.claim(SvgTags.g, builder, base) }
export function SvgImage<M = unknown, R = void>(builder?: BlockBuilder<SVGImageElement, M, void, R>, base?: BlockBuilder<SVGImageElement, M, void, R>): VBlock<SVGImageElement, M, void, R> { return VBlock.claim(SvgTags.image, builder, base) }
export function SvgLine<M = unknown, R = void>(builder?: BlockBuilder<SVGLineElement, M, void, R>, base?: BlockBuilder<SVGLineElement, M, void, R>): VBlock<SVGLineElement, M, void, R> { return VBlock.claim(SvgTags.line, builder, base) }
export function LinearGradient<M = unknown, R = void>(builder?: BlockBuilder<SVGLinearGradientElement, M, void, R>, base?: BlockBuilder<SVGLinearGradientElement, M, void, R>): VBlock<SVGLinearGradientElement, M, void, R> { return VBlock.claim(SvgTags.linearGradient, builder, base) }
export function Marker<M = unknown, R = void>(builder?: BlockBuilder<SVGMarkerElement, M, void, R>, base?: BlockBuilder<SVGMarkerElement, M, void, R>): VBlock<SVGMarkerElement, M, void, R> { return VBlock.claim(SvgTags.marker, builder, base) }
export function Mask<M = unknown, R = void>(builder?: BlockBuilder<SVGMaskElement, M, void, R>, base?: BlockBuilder<SVGMaskElement, M, void, R>): VBlock<SVGMaskElement, M, void, R> { return VBlock.claim(SvgTags.mask, builder, base) }
export function MetaData<M = unknown, R = void>(builder?: BlockBuilder<SVGMetadataElement, M, void, R>, base?: BlockBuilder<SVGMetadataElement, M, void, R>): VBlock<SVGMetadataElement, M, void, R> { return VBlock.claim(SvgTags.metadata, builder, base) }
export function MPath<M = unknown, R = void>(builder?: BlockBuilder<SVGElement, M, void, R>, base?: BlockBuilder<SVGElement, M, void, R>): VBlock<SVGElement, M, void, R> { return VBlock.claim(SvgTags.mpath, builder, base) }
export function Path<M = unknown, R = void>(builder?: BlockBuilder<SVGPathElement, M, void, R>, base?: BlockBuilder<SVGPathElement, M, void, R>): VBlock<SVGPathElement, M, void, R> { return VBlock.claim(SvgTags.path, builder, base) }
export function Pattern<M = unknown, R = void>(builder?: BlockBuilder<SVGPatternElement, M, void, R>, base?: BlockBuilder<SVGPatternElement, M, void, R>): VBlock<SVGPatternElement, M, void, R> { return VBlock.claim(SvgTags.pattern, builder, base) }
export function Polygon<M = unknown, R = void>(builder?: BlockBuilder<SVGPolygonElement, M, void, R>, base?: BlockBuilder<SVGPolygonElement, M, void, R>): VBlock<SVGPolygonElement, M, void, R> { return VBlock.claim(SvgTags.polygon, builder, base) }
export function PolyLine<M = unknown, R = void>(builder?: BlockBuilder<SVGPolylineElement, M, void, R>, base?: BlockBuilder<SVGPolylineElement, M, void, R>): VBlock<SVGPolylineElement, M, void, R> { return VBlock.claim(SvgTags.polyline, builder, base) }
export function RadialGradient<M = unknown, R = void>(builder?: BlockBuilder<SVGRadialGradientElement, M, void, R>, base?: BlockBuilder<SVGRadialGradientElement, M, void, R>): VBlock<SVGRadialGradientElement, M, void, R> { return VBlock.claim(SvgTags.radialGradient, builder, base) }
export function Rect<M = unknown, R = void>(builder?: BlockBuilder<SVGRectElement, M, void, R>, base?: BlockBuilder<SVGRectElement, M, void, R>): VBlock<SVGRectElement, M, void, R> { return VBlock.claim(SvgTags.rect, builder, base) }
export function Stop<M = unknown, R = void>(builder?: BlockBuilder<SVGStopElement, M, void, R>, base?: BlockBuilder<SVGStopElement, M, void, R>): VBlock<SVGStopElement, M, void, R> { return VBlock.claim(SvgTags.stop, builder, base) }
export function SvgSwitch<M = unknown, R = void>(builder?: BlockBuilder<SVGSwitchElement, M, void, R>, base?: BlockBuilder<SVGSwitchElement, M, void, R>): VBlock<SVGSwitchElement, M, void, R> { return VBlock.claim(SvgTags.switch, builder, base) }
export function Symbol<M = unknown, R = void>(builder?: BlockBuilder<SVGSymbolElement, M, void, R>, base?: BlockBuilder<SVGSymbolElement, M, void, R>): VBlock<SVGSymbolElement, M, void, R> { return VBlock.claim(SvgTags.symbol, builder, base) }
export function Text<M = unknown, R = void>(builder?: BlockBuilder<SVGTextElement, M, void, R>, base?: BlockBuilder<SVGTextElement, M, void, R>): VBlock<SVGTextElement, M, void, R> { return VBlock.claim(SvgTags.text, builder, base) }
export function TextPath<M = unknown, R = void>(builder?: BlockBuilder<SVGTextPathElement, M, void, R>, base?: BlockBuilder<SVGTextPathElement, M, void, R>): VBlock<SVGTextPathElement, M, void, R> { return VBlock.claim(SvgTags.textPath, builder, base) }
export function TSpan<M = unknown, R = void>(builder?: BlockBuilder<SVGTSpanElement, M, void, R>, base?: BlockBuilder<SVGTSpanElement, M, void, R>): VBlock<SVGTSpanElement, M, void, R> { return VBlock.claim(SvgTags.tspan, builder, base) }
export function Use<M = unknown, R = void>(builder?: BlockBuilder<SVGUseElement, M, void, R>, base?: BlockBuilder<SVGUseElement, M, void, R>): VBlock<SVGUseElement, M, void, R> { return VBlock.claim(SvgTags.use, builder, base) }
export function View<M = unknown, R = void>(builder?: BlockBuilder<SVGViewElement, M, void, R>, base?: BlockBuilder<SVGViewElement, M, void, R>): VBlock<SVGViewElement, M, void, R> { return VBlock.claim(SvgTags.view, builder, base) }

const HtmlTags = {
  a: new HtmlDriver<HTMLAnchorElement>("a", false, b => b.childrenLayout = Layout.Band),
  abbr: new HtmlDriver<HTMLElement>("abbr", false, b => b.childrenLayout = Layout.Band),
  address: new HtmlDriver<HTMLElement>("address", false, b => b.childrenLayout = Layout.Band),
  area: new HtmlDriver<HTMLAreaElement>("area", false, b => b.childrenLayout = Layout.Band),
  article: new HtmlDriver<HTMLElement>("article", false, b => b.childrenLayout = Layout.Band),
  aside: new HtmlDriver<HTMLElement>("aside", false, b => b.childrenLayout = Layout.Band),
  audio: new HtmlDriver<HTMLAudioElement>("audio", false, b => b.childrenLayout = Layout.Band),
  b: new HtmlDriver<HTMLElement>("b", false, b => b.childrenLayout = Layout.Band),
  base: new HtmlDriver<HTMLBaseElement>("base", false, b => b.childrenLayout = Layout.Band),
  bdi: new HtmlDriver<HTMLElement>("bdi", false, b => b.childrenLayout = Layout.Band),
  bdo: new HtmlDriver<HTMLElement>("bdo", false, b => b.childrenLayout = Layout.Band),
  big: new HtmlDriver<HTMLElement>("big", false, b => b.childrenLayout = Layout.Band),
  blockquote: new HtmlDriver<HTMLElement>("blockquote", false, b => b.childrenLayout = Layout.Band),
  body: new HtmlDriver<HTMLBodyElement>("body", false, b => b.childrenLayout = Layout.Band),
  br: new HtmlDriver<HTMLBRElement>("br", false, b => b.childrenLayout = Layout.Band),
  button: new HtmlDriver<HTMLButtonElement>("button", false, b => b.childrenLayout = Layout.Band),
  canvas: new HtmlDriver<HTMLCanvasElement>("canvas", false, b => b.childrenLayout = Layout.Band),
  caption: new HtmlDriver<HTMLTableCaptionElement>("caption", false, b => b.childrenLayout = Layout.Band),
  cite: new HtmlDriver<HTMLElement>("cite", false, b => b.childrenLayout = Layout.Band),
  code: new HtmlDriver<HTMLElement>("code", false, b => b.childrenLayout = Layout.Band),
  col: new HtmlDriver<HTMLTableColElement>("col", false, b => b.childrenLayout = Layout.Band),
  colgroup: new HtmlDriver<HTMLTableColElement>("colgroup", false, b => b.childrenLayout = Layout.Band),
  data: new HtmlDriver<HTMLDataElement>("data", false, b => b.childrenLayout = Layout.Band),
  datalist: new HtmlDriver<HTMLDataListElement>("datalist", false, b => b.childrenLayout = Layout.Band),
  dd: new HtmlDriver<HTMLElement>("dd", false, b => b.childrenLayout = Layout.Band),
  del: new HtmlDriver<HTMLElement>("del", false, b => b.childrenLayout = Layout.Band),
  details: new HtmlDriver<HTMLElement>("details", false, b => b.childrenLayout = Layout.Band),
  dfn: new HtmlDriver<HTMLElement>("dfn", false, b => b.childrenLayout = Layout.Band),
  div: new HtmlDriver<HTMLDivElement>("div", false, b => b.childrenLayout = Layout.Band),
  dl: new HtmlDriver<HTMLDListElement>("dl", false, b => b.childrenLayout = Layout.Band),
  dt: new HtmlDriver<HTMLElement>("dt", false, b => b.childrenLayout = Layout.Band),
  em: new HtmlDriver<HTMLElement>("em", false, b => b.childrenLayout = Layout.Band),
  embed: new HtmlDriver<HTMLEmbedElement>("embed", false, b => b.childrenLayout = Layout.Band),
  fieldset: new HtmlDriver<HTMLFieldSetElement>("fieldset", false, b => b.childrenLayout = Layout.Band),
  figcaption: new HtmlDriver<HTMLElement>("figcaption", false, b => b.childrenLayout = Layout.Band),
  figure: new HtmlDriver<HTMLElement>("figure", false, b => b.childrenLayout = Layout.Band),
  footer: new HtmlDriver<HTMLElement>("footer", false, b => b.childrenLayout = Layout.Band),
  form: new HtmlDriver<HTMLFormElement>("form", false, b => b.childrenLayout = Layout.Band),
  h1: new HtmlDriver<HTMLHeadingElement>("h1", false, b => b.childrenLayout = Layout.Band),
  h2: new HtmlDriver<HTMLHeadingElement>("h2", false, b => b.childrenLayout = Layout.Band),
  h3: new HtmlDriver<HTMLHeadingElement>("h3", false, b => b.childrenLayout = Layout.Band),
  h4: new HtmlDriver<HTMLHeadingElement>("h4", false, b => b.childrenLayout = Layout.Band),
  h5: new HtmlDriver<HTMLHeadingElement>("h5", false, b => b.childrenLayout = Layout.Band),
  h6: new HtmlDriver<HTMLHeadingElement>("h6", false, b => b.childrenLayout = Layout.Band),
  head: new HtmlDriver<HTMLHeadElement>("head", false, b => b.childrenLayout = Layout.Band),
  header: new HtmlDriver<HTMLElement>("header", false, b => b.childrenLayout = Layout.Band),
  hgroup: new HtmlDriver<HTMLElement>("hgroup", false, b => b.childrenLayout = Layout.Band),
  hr: new HtmlDriver<HTMLHRElement>("hr", false, b => b.childrenLayout = Layout.Band),
  html: new HtmlDriver<HTMLHtmlElement>("html", false, b => b.childrenLayout = Layout.Band),
  i: new HtmlDriver<HTMLElement>("i", false, b => b.childrenLayout = Layout.Band),
  iframe: new HtmlDriver<HTMLIFrameElement>("iframe", false, b => b.childrenLayout = Layout.Band),
  img: new HtmlDriver<HTMLImageElement>("img", false, b => b.childrenLayout = Layout.Band),
  input: new HtmlDriver<HTMLInputElement>("input", false, b => b.childrenLayout = Layout.Band),
  ins: new HtmlDriver<HTMLModElement>("ins", false, b => b.childrenLayout = Layout.Band),
  kbd: new HtmlDriver<HTMLElement>("kbd", false, b => b.childrenLayout = Layout.Band),
  keygen: new HtmlDriver<HTMLElement>("keygen", false, b => b.childrenLayout = Layout.Band),
  label: new HtmlDriver<HTMLLabelElement>("label", false, b => b.childrenLayout = Layout.Band),
  legend: new HtmlDriver<HTMLLegendElement>("legend", false, b => b.childrenLayout = Layout.Band),
  li: new HtmlDriver<HTMLLIElement>("li", false, b => b.childrenLayout = Layout.Band),
  link: new HtmlDriver<HTMLLinkElement>("link", false, b => b.childrenLayout = Layout.Band),
  main: new HtmlDriver<HTMLElement>("main", false, b => b.childrenLayout = Layout.Band),
  map: new HtmlDriver<HTMLMapElement>("map", false, b => b.childrenLayout = Layout.Band),
  mark: new HtmlDriver<HTMLElement>("mark", false, b => b.childrenLayout = Layout.Band),
  menu: new HtmlDriver<HTMLElement>("menu", false, b => b.childrenLayout = Layout.Band),
  menuitem: new HtmlDriver<HTMLElement>("menuitem", false, b => b.childrenLayout = Layout.Band),
  meta: new HtmlDriver<HTMLMetaElement>("meta", false, b => b.childrenLayout = Layout.Band),
  meter: new HtmlDriver<HTMLElement>("meter", false, b => b.childrenLayout = Layout.Band),
  nav: new HtmlDriver<HTMLElement>("nav", false, b => b.childrenLayout = Layout.Band),
  noindex: new HtmlDriver<HTMLElement>("noindex", false, b => b.childrenLayout = Layout.Band),
  noscript: new HtmlDriver<HTMLElement>("noscript", false, b => b.childrenLayout = Layout.Band),
  object: new HtmlDriver<HTMLObjectElement>("object", false, b => b.childrenLayout = Layout.Band),
  ol: new HtmlDriver<HTMLOListElement>("ol", false, b => b.childrenLayout = Layout.Band),
  optgroup: new HtmlDriver<HTMLOptGroupElement>("optgroup", false, b => b.childrenLayout = Layout.Band),
  option: new HtmlDriver<HTMLOptionElement>("option", false, b => b.childrenLayout = Layout.Band),
  output: new HtmlDriver<HTMLElement>("output", false, b => b.childrenLayout = Layout.Band),
  p: new HtmlDriver<HTMLParagraphElement>("p", false, b => b.childrenLayout = Layout.Band),
  param: new HtmlDriver<HTMLElement>("param", false, b => b.childrenLayout = Layout.Band),
  picture: new HtmlDriver<HTMLElement>("picture", false, b => b.childrenLayout = Layout.Band),
  pre: new HtmlDriver<HTMLPreElement>("pre", false, b => b.childrenLayout = Layout.Band),
  progress: new HtmlDriver<HTMLProgressElement>("progress", false, b => b.childrenLayout = Layout.Band),
  q: new HtmlDriver<HTMLQuoteElement>("q", false, b => b.childrenLayout = Layout.Band),
  rp: new HtmlDriver<HTMLElement>("rp", false, b => b.childrenLayout = Layout.Band),
  rt: new HtmlDriver<HTMLElement>("rt", false, b => b.childrenLayout = Layout.Band),
  ruby: new HtmlDriver<HTMLElement>("ruby", false, b => b.childrenLayout = Layout.Band),
  s: new HtmlDriver<HTMLElement>("s", false, b => b.childrenLayout = Layout.Band),
  samp: new HtmlDriver<HTMLElement>("samp", false, b => b.childrenLayout = Layout.Band),
  script: new HtmlDriver<HTMLScriptElement>("script", false, b => b.childrenLayout = Layout.Band),
  section: new HtmlDriver<HTMLElement>("section", false, b => b.childrenLayout = Layout.Band),
  select: new HtmlDriver<HTMLSelectElement>("select", false, b => b.childrenLayout = Layout.Band),
  small: new HtmlDriver<HTMLElement>("small", false, b => b.childrenLayout = Layout.Band),
  source: new HtmlDriver<HTMLSourceElement>("source", false, b => b.childrenLayout = Layout.Band),
  span: new HtmlDriver<HTMLSpanElement>("span", false, b => b.childrenLayout = Layout.Band),
  strong: new HtmlDriver<HTMLElement>("strong", false, b => b.childrenLayout = Layout.Band),
  style: new HtmlDriver<HTMLStyleElement>("style", false, b => b.childrenLayout = Layout.Band),
  sub: new HtmlDriver<HTMLElement>("sub", false, b => b.childrenLayout = Layout.Band),
  summary: new HtmlDriver<HTMLElement>("summary", false, b => b.childrenLayout = Layout.Band),
  sup: new HtmlDriver<HTMLElement>("sup", false, b => b.childrenLayout = Layout.Band),
  table: new HtmlDriver<HTMLTableElement>("table", false, b => b.childrenLayout = Layout.Band),
  template: new HtmlDriver<HTMLTemplateElement>("template", false, b => b.childrenLayout = Layout.Band),
  tbody: new HtmlDriver<HTMLTableSectionElement>("tbody", false, b => b.childrenLayout = Layout.Band),
  td: new HtmlDriver<HTMLTableCellElement>("td", false, b => b.childrenLayout = Layout.Band),
  textarea: new HtmlDriver<HTMLTextAreaElement>("textarea", false, b => b.childrenLayout = Layout.Band),
  tfoot: new HtmlDriver<HTMLTableSectionElement>("tfoot", false, b => b.childrenLayout = Layout.Band),
  th: new HtmlDriver<HTMLTableCellElement>("th", false, b => b.childrenLayout = Layout.Band),
  thead: new HtmlDriver<HTMLTableSectionElement>("thead", false, b => b.childrenLayout = Layout.Band),
  time: new HtmlDriver<HTMLElement>("time", false, b => b.childrenLayout = Layout.Band),
  title: new HtmlDriver<HTMLTitleElement>("title", false, b => b.childrenLayout = Layout.Band),
  tr: new HtmlDriver<HTMLTableRowElement>("tr", false, b => b.childrenLayout = Layout.Band),
  track: new HtmlDriver<HTMLTrackElement>("track", false, b => b.childrenLayout = Layout.Band),
  u: new HtmlDriver<HTMLElement>("u", false, b => b.childrenLayout = Layout.Band),
  ul: new HtmlDriver<HTMLUListElement>("ul", false, b => b.childrenLayout = Layout.Band),
  var: new HtmlDriver<HTMLElement>("var", false, b => b.childrenLayout = Layout.Band),
  video: new HtmlDriver<HTMLVideoElement>("video", false, b => b.childrenLayout = Layout.Band),
  wbr: new HtmlDriver<HTMLElement>("wbr", false, b => b.childrenLayout = Layout.Band),
  // webview: new HtmlNodeFactory<HTMLWebViewElement>('webview', BlockKind.Chain),
}

const SvgTags = {
  svg: new SvgDriver<SVGSVGElement>("svg", false, b => b.childrenLayout = Layout.Band),
  a: new SvgDriver<SVGAElement>("a", false, b => b.childrenLayout = Layout.Band),
  animate: new SvgDriver<SVGAnimateElement>("animate", false, b => b.childrenLayout = Layout.Band),
  animateMotion: new SvgDriver<SVGAnimateMotionElement>("animateMotion", false, b => b.childrenLayout = Layout.Band),
  animateTransform: new SvgDriver<SVGAnimateTransformElement>("animateTransform", false, b => b.childrenLayout = Layout.Band),
  circle: new SvgDriver<SVGCircleElement>("circle", false, b => b.childrenLayout = Layout.Band),
  clipPath: new SvgDriver<SVGClipPathElement>("clipPath", false, b => b.childrenLayout = Layout.Band),
  defs: new SvgDriver<SVGDefsElement>("defs", false, b => b.childrenLayout = Layout.Band),
  desc: new SvgDriver<SVGDescElement>("desc", false, b => b.childrenLayout = Layout.Band),
  ellipse: new SvgDriver<SVGEllipseElement>("ellipse", false, b => b.childrenLayout = Layout.Band),
  feBlend: new SvgDriver<SVGFEBlendElement>("feBlend", false, b => b.childrenLayout = Layout.Band),
  feColorMatrix: new SvgDriver<SVGFEColorMatrixElement>("feColorMatrix", false, b => b.childrenLayout = Layout.Band),
  feComponentTransfer: new SvgDriver<SVGFEComponentTransferElement>("feComponentTransfer", false, b => b.childrenLayout = Layout.Band),
  feComposite: new SvgDriver<SVGFECompositeElement>("feComposite", false, b => b.childrenLayout = Layout.Band),
  feConvolveMatrix: new SvgDriver<SVGFEConvolveMatrixElement>("feConvolveMatrix", false, b => b.childrenLayout = Layout.Band),
  feDiffuseLighting: new SvgDriver<SVGFEDiffuseLightingElement>("feDiffuseLighting", false, b => b.childrenLayout = Layout.Band),
  feDisplacementMap: new SvgDriver<SVGFEDisplacementMapElement>("feDisplacementMap", false, b => b.childrenLayout = Layout.Band),
  feDistantLight: new SvgDriver<SVGFEDistantLightElement>("feDistantLight", false, b => b.childrenLayout = Layout.Band),
  feDropShadow: new SvgDriver<SVGFEDropShadowElement>("feDropShadow", false, b => b.childrenLayout = Layout.Band),
  feFlood: new SvgDriver<SVGFEFloodElement>("feFlood", false, b => b.childrenLayout = Layout.Band),
  feFuncA: new SvgDriver<SVGFEFuncAElement>("feFuncA", false, b => b.childrenLayout = Layout.Band),
  feFuncB: new SvgDriver<SVGFEFuncBElement>("feFuncB", false, b => b.childrenLayout = Layout.Band),
  feFuncG: new SvgDriver<SVGFEFuncGElement>("feFuncG", false, b => b.childrenLayout = Layout.Band),
  feFuncR: new SvgDriver<SVGFEFuncRElement>("feFuncR", false, b => b.childrenLayout = Layout.Band),
  feGaussianBlur: new SvgDriver<SVGFEGaussianBlurElement>("feGaussianBlur", false, b => b.childrenLayout = Layout.Band),
  feImage: new SvgDriver<SVGFEImageElement>("feImage", false, b => b.childrenLayout = Layout.Band),
  feMerge: new SvgDriver<SVGFEMergeElement>("feMerge", false, b => b.childrenLayout = Layout.Band),
  feMergeNode: new SvgDriver<SVGFEMergeNodeElement>("feMergeNode", false, b => b.childrenLayout = Layout.Band),
  feMorphology: new SvgDriver<SVGFEMorphologyElement>("feMorphology", false, b => b.childrenLayout = Layout.Band),
  feOffset: new SvgDriver<SVGFEOffsetElement>("feOffset", false, b => b.childrenLayout = Layout.Band),
  fePointLight: new SvgDriver<SVGFEPointLightElement>("fePointLight", false, b => b.childrenLayout = Layout.Band),
  feSpecularLighting: new SvgDriver<SVGFESpecularLightingElement>("feSpecularLighting", false, b => b.childrenLayout = Layout.Band),
  feSpotLight: new SvgDriver<SVGFESpotLightElement>("feSpotLight", false, b => b.childrenLayout = Layout.Band),
  feTile: new SvgDriver<SVGFETileElement>("feTile", false, b => b.childrenLayout = Layout.Band),
  feTurbulence: new SvgDriver<SVGFETurbulenceElement>("feTurbulence", false, b => b.childrenLayout = Layout.Band),
  filter: new SvgDriver<SVGFilterElement>("filter", false, b => b.childrenLayout = Layout.Band),
  foreignObject: new SvgDriver<SVGForeignObjectElement>("foreignObject", false, b => b.childrenLayout = Layout.Band),
  g: new SvgDriver<SVGGElement>("g", false, b => b.childrenLayout = Layout.Band),
  image: new SvgDriver<SVGImageElement>("image", false, b => b.childrenLayout = Layout.Band),
  line: new SvgDriver<SVGLineElement>("line", false, b => b.childrenLayout = Layout.Band),
  linearGradient: new SvgDriver<SVGLinearGradientElement>("linearGradient", false, b => b.childrenLayout = Layout.Band),
  marker: new SvgDriver<SVGMarkerElement>("marker", false, b => b.childrenLayout = Layout.Band),
  mask: new SvgDriver<SVGMaskElement>("mask", false, b => b.childrenLayout = Layout.Band),
  metadata: new SvgDriver<SVGMetadataElement>("metadata", false, b => b.childrenLayout = Layout.Band),
  mpath: new SvgDriver<SVGElement>("mpath", false, b => b.childrenLayout = Layout.Band),
  path: new SvgDriver<SVGPathElement>("path", false, b => b.childrenLayout = Layout.Band),
  pattern: new SvgDriver<SVGPatternElement>("pattern", false, b => b.childrenLayout = Layout.Band),
  polygon: new SvgDriver<SVGPolygonElement>("polygon", false, b => b.childrenLayout = Layout.Band),
  polyline: new SvgDriver<SVGPolylineElement>("polyline", false, b => b.childrenLayout = Layout.Band),
  radialGradient: new SvgDriver<SVGRadialGradientElement>("radialGradient", false, b => b.childrenLayout = Layout.Band),
  rect: new SvgDriver<SVGRectElement>("rect", false, b => b.childrenLayout = Layout.Band),
  stop: new SvgDriver<SVGStopElement>("stop", false, b => b.childrenLayout = Layout.Band),
  switch: new SvgDriver<SVGSwitchElement>("switch", false, b => b.childrenLayout = Layout.Band),
  symbol: new SvgDriver<SVGSymbolElement>("symbol", false, b => b.childrenLayout = Layout.Band),
  text: new SvgDriver<SVGTextElement>("text", false, b => b.childrenLayout = Layout.Band),
  textPath: new SvgDriver<SVGTextPathElement>("textPath", false, b => b.childrenLayout = Layout.Band),
  tspan: new SvgDriver<SVGTSpanElement>("tspan", false, b => b.childrenLayout = Layout.Band),
  use: new SvgDriver<SVGUseElement>("use", false, b => b.childrenLayout = Layout.Band),
  view: new SvgDriver<SVGViewElement>("view", false, b => b.childrenLayout = Layout.Band),
}
