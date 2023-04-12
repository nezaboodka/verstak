// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Verstak, VBlock, StaticDriver, BlockKind, BlockBuilder } from "../core/api"
import { HtmlDriver, SvgDriver } from "./HtmlDriver"

export function HtmlBody(builder?: BlockBuilder<HTMLElement>, base?: BlockBuilder<HTMLElement>): VBlock<HTMLElement> {
  const driver = new StaticDriver(global.document.body, "HtmlBody", false, b => b.kind = BlockKind.Band)
  return Verstak.claim(driver, builder, base)
}

export function A<M = unknown, R = void>(builder?: BlockBuilder<HTMLAnchorElement, M, void, R>, base?: BlockBuilder<HTMLAnchorElement, M, void, R>): VBlock<HTMLAnchorElement, M, void, R> { return Verstak.claim(HtmlTags.a, builder, base) }
export function Abbr<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.abbr, builder, base) }
export function Address<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.address, builder, base) }
export function Area<M = unknown, R = void>(builder?: BlockBuilder<HTMLAreaElement, M, void, R>, base?: BlockBuilder<HTMLAreaElement, M, void, R>): VBlock<HTMLAreaElement, M, void, R> { return Verstak.claim(HtmlTags.area, builder, base) }
export function Article<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.article, builder, base) }
export function Aside<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.aside, builder, base) }
export function Audio<M = unknown, R = void>(builder?: BlockBuilder<HTMLAudioElement, M, void, R>, base?: BlockBuilder<HTMLAudioElement, M, void, R>): VBlock<HTMLAudioElement, M, void, R> { return Verstak.claim(HtmlTags.audio, builder, base) }
export function B<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.b, builder, base) }
export function Base<M = unknown, R = void>(builder?: BlockBuilder<HTMLBaseElement, M, void, R>, base?: BlockBuilder<HTMLBaseElement, M, void, R>): VBlock<HTMLBaseElement, M, void, R> { return Verstak.claim(HtmlTags.base, builder, base) }
export function Bdi<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.bdi, builder, base) }
export function Bdo<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.bdo, builder, base) }
export function Big<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.big, builder, base) }
export function BlockQuote<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.blockquote, builder, base) }
export function Body<M = unknown, R = void>(builder?: BlockBuilder<HTMLBodyElement, M, void, R>, base?: BlockBuilder<HTMLBodyElement, M, void, R>): VBlock<HTMLBodyElement, M, void, R> { return Verstak.claim(HtmlTags.body, builder, base) }
export function BR<M = unknown, R = void>(builder?: BlockBuilder<HTMLBRElement, M, void, R>, base?: BlockBuilder<HTMLBRElement, M, void, R>): VBlock<HTMLBRElement, M, void, R> { return Verstak.claim(HtmlTags.br, builder, base) }
export function Button<M = unknown, R = void>(builder?: BlockBuilder<HTMLButtonElement, M, void, R>, base?: BlockBuilder<HTMLButtonElement, M, void, R>): VBlock<HTMLButtonElement, M, void, R> { return Verstak.claim(HtmlTags.button, builder, base) }
export function Canvas<M = unknown, R = void>(builder?: BlockBuilder<HTMLCanvasElement, M, void, R>, base?: BlockBuilder<HTMLCanvasElement, M, void, R>): VBlock<HTMLCanvasElement, M, void, R> { return Verstak.claim(HtmlTags.canvas, builder, base) }
export function Caption<M = unknown, R = void>(builder?: BlockBuilder<HTMLTableCaptionElement, M, void, R>, base?: BlockBuilder<HTMLTableCaptionElement, M, void, R>): VBlock<HTMLTableCaptionElement, M, void, R> { return Verstak.claim(HtmlTags.caption, builder, base) }
export function Cite<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.cite, builder, base) }
export function Code<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.code, builder, base) }
export function Col<M = unknown, R = void>(builder?: BlockBuilder<HTMLTableColElement, M, void, R>, base?: BlockBuilder<HTMLTableColElement, M, void, R>): VBlock<HTMLTableColElement, M, void, R> { return Verstak.claim(HtmlTags.col, builder, base) }
export function ColGroup<M = unknown, R = void>(builder?: BlockBuilder<HTMLTableColElement, M, void, R>, base?: BlockBuilder<HTMLTableColElement, M, void, R>): VBlock<HTMLTableColElement, M, void, R> { return Verstak.claim(HtmlTags.colgroup, builder, base) }
export function Data<M = unknown, R = void>(builder?: BlockBuilder<HTMLDataElement, M, void, R>, base?: BlockBuilder<HTMLDataElement, M, void, R>): VBlock<HTMLDataElement, M, void, R> { return Verstak.claim(HtmlTags.data, builder, base) }
export function DataList<M = unknown, R = void>(builder?: BlockBuilder<HTMLDataListElement, M, void, R>, base?: BlockBuilder<HTMLDataListElement, M, void, R>): VBlock<HTMLDataListElement, M, void, R> { return Verstak.claim(HtmlTags.datalist, builder, base) }
export function DD<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.dd, builder, base) }
export function Del<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.del, builder, base) }
export function Details<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.details, builder, base) }
export function Dfn<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.dfn, builder, base) }
export function Div<M = unknown, R = void>(builder?: BlockBuilder<HTMLDivElement, M, void, R>, base?: BlockBuilder<HTMLDivElement, M, void, R>): VBlock<HTMLDivElement, M, void, R> { return Verstak.claim(HtmlTags.div, builder, base) }
export function DL<M = unknown, R = void>(builder?: BlockBuilder<HTMLDListElement, M, void, R>, base?: BlockBuilder<HTMLDListElement, M, void, R>): VBlock<HTMLDListElement, M, void, R> { return Verstak.claim(HtmlTags.dl, builder, base) }
export function DT<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.dt, builder, base) }
export function EM<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.em, builder, base) }
export function Embed<M = unknown, R = void>(builder?: BlockBuilder<HTMLEmbedElement, M, void, R>, base?: BlockBuilder<HTMLEmbedElement, M, void, R>): VBlock<HTMLEmbedElement, M, void, R> { return Verstak.claim(HtmlTags.embed, builder, base) }
export function FieldSet<M = unknown, R = void>(builder?: BlockBuilder<HTMLFieldSetElement, M, void, R>, base?: BlockBuilder<HTMLFieldSetElement, M, void, R>): VBlock<HTMLFieldSetElement, M, void, R> { return Verstak.claim(HtmlTags.fieldset, builder, base) }
export function FigCaption<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.figcaption, builder, base) }
export function Figure<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.figure, builder, base) }
export function Footer<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.footer, builder, base) }
export function Form<M = unknown, R = void>(builder?: BlockBuilder<HTMLFormElement, M, void, R>, base?: BlockBuilder<HTMLFormElement, M, void, R>): VBlock<HTMLFormElement, M, void, R> { return Verstak.claim(HtmlTags.form, builder, base) }
export function H1<M = unknown, R = void>(builder?: BlockBuilder<HTMLHeadingElement, M, void, R>, base?: BlockBuilder<HTMLHeadingElement, M, void, R>): VBlock<HTMLHeadingElement, M, void, R> { return Verstak.claim(HtmlTags.h1, builder, base) }
export function H2<M = unknown, R = void>(builder?: BlockBuilder<HTMLHeadingElement, M, void, R>, base?: BlockBuilder<HTMLHeadingElement, M, void, R>): VBlock<HTMLHeadingElement, M, void, R> { return Verstak.claim(HtmlTags.h2, builder, base) }
export function H3<M = unknown, R = void>(builder?: BlockBuilder<HTMLHeadingElement, M, void, R>, base?: BlockBuilder<HTMLHeadingElement, M, void, R>): VBlock<HTMLHeadingElement, M, void, R> { return Verstak.claim(HtmlTags.h3, builder, base) }
export function H4<M = unknown, R = void>(builder?: BlockBuilder<HTMLHeadingElement, M, void, R>, base?: BlockBuilder<HTMLHeadingElement, M, void, R>): VBlock<HTMLHeadingElement, M, void, R> { return Verstak.claim(HtmlTags.h4, builder, base) }
export function H5<M = unknown, R = void>(builder?: BlockBuilder<HTMLHeadingElement, M, void, R>, base?: BlockBuilder<HTMLHeadingElement, M, void, R>): VBlock<HTMLHeadingElement, M, void, R> { return Verstak.claim(HtmlTags.h5, builder, base) }
export function H6<M = unknown, R = void>(builder?: BlockBuilder<HTMLHeadingElement, M, void, R>, base?: BlockBuilder<HTMLHeadingElement, M, void, R>): VBlock<HTMLHeadingElement, M, void, R> { return Verstak.claim(HtmlTags.h6, builder, base) }
export function Head<M = unknown, R = void>(builder?: BlockBuilder<HTMLHeadElement, M, void, R>, base?: BlockBuilder<HTMLHeadElement, M, void, R>): VBlock<HTMLHeadElement, M, void, R> { return Verstak.claim(HtmlTags.head, builder, base) }
export function Header<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.header, builder, base) }
export function HGroup<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.hgroup, builder, base) }
export function HR<M = unknown, R = void>(builder?: BlockBuilder<HTMLHRElement, M, void, R>, base?: BlockBuilder<HTMLHRElement, M, void, R>): VBlock<HTMLHRElement, M, void, R> { return Verstak.claim(HtmlTags.hr, builder, base) }
export function Html<M = unknown, R = void>(builder?: BlockBuilder<HTMLHtmlElement, M, void, R>, base?: BlockBuilder<HTMLHtmlElement, M, void, R>): VBlock<HTMLHtmlElement, M, void, R> { return Verstak.claim(HtmlTags.html, builder, base) }
export function I<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.i, builder, base) }
export function IFrame<M = unknown, R = void>(builder?: BlockBuilder<HTMLIFrameElement, M, void, R>, base?: BlockBuilder<HTMLIFrameElement, M, void, R>): VBlock<HTMLIFrameElement, M, void, R> { return Verstak.claim(HtmlTags.iframe, builder, base) }
export function Img<M = unknown, R = void>(builder?: BlockBuilder<HTMLImageElement, M, void, R>, base?: BlockBuilder<HTMLImageElement, M, void, R>): VBlock<HTMLImageElement, M, void, R> { return Verstak.claim(HtmlTags.img, builder, base) }
export function Input<M = unknown, R = void>(builder?: BlockBuilder<HTMLInputElement, M, void, R>, base?: BlockBuilder<HTMLInputElement, M, void, R>): VBlock<HTMLInputElement, M, void, R> { return Verstak.claim(HtmlTags.input, builder, base) }
export function Ins<M = unknown, R = void>(builder?: BlockBuilder<HTMLModElement, M, void, R>, base?: BlockBuilder<HTMLModElement, M, void, R>): VBlock<HTMLModElement, M, void, R> { return Verstak.claim(HtmlTags.ins, builder, base) }
export function Kbd<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.kbd, builder, base) }
export function KeyGen<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.keygen, builder, base) }
export function Label<M = unknown, R = void>(builder?: BlockBuilder<HTMLLabelElement, M, void, R>, base?: BlockBuilder<HTMLLabelElement, M, void, R>): VBlock<HTMLLabelElement, M, void, R> { return Verstak.claim(HtmlTags.label, builder, base) }
export function Legend<M = unknown, R = void>(builder?: BlockBuilder<HTMLLegendElement, M, void, R>, base?: BlockBuilder<HTMLLegendElement, M, void, R>): VBlock<HTMLLegendElement, M, void, R> { return Verstak.claim(HtmlTags.legend, builder, base) }
export function LI<M = unknown, R = void>(builder?: BlockBuilder<HTMLLIElement, M, void, R>, base?: BlockBuilder<HTMLLIElement, M, void, R>): VBlock<HTMLLIElement, M, void, R> { return Verstak.claim(HtmlTags.li, builder, base) }
export function Link<M = unknown, R = void>(builder?: BlockBuilder<HTMLLinkElement, M, void, R>, base?: BlockBuilder<HTMLLinkElement, M, void, R>): VBlock<HTMLLinkElement, M, void, R> { return Verstak.claim(HtmlTags.link, builder, base) }
export function Main<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.main, builder, base) }
export function Map<M = unknown, R = void>(builder?: BlockBuilder<HTMLMapElement, M, void, R>, base?: BlockBuilder<HTMLMapElement, M, void, R>): VBlock<HTMLMapElement, M, void, R> { return Verstak.claim(HtmlTags.map, builder, base) }
export function Mark<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.mark, builder, base) }
export function Menu<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.menu, builder, base) }
export function MenuItem<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.menuitem, builder, base) }
export function Meta<M = unknown, R = void>(builder?: BlockBuilder<HTMLMetaElement, M, void, R>, base?: BlockBuilder<HTMLMetaElement, M, void, R>): VBlock<HTMLMetaElement, M, void, R> { return Verstak.claim(HtmlTags.meta, builder, base) }
export function Meter<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.meter, builder, base) }
export function Nav<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.nav, builder, base) }
export function NoIndex<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.noindex, builder, base) }
export function NoScript<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.noscript, builder, base) }
export function Obj<M = unknown, R = void>(builder?: BlockBuilder<HTMLObjectElement, M, void, R>, base?: BlockBuilder<HTMLObjectElement, M, void, R>): VBlock<HTMLObjectElement, M, void, R> { return Verstak.claim(HtmlTags.object, builder, base) }
export function OL<M = unknown, R = void>(builder?: BlockBuilder<HTMLOListElement, M, void, R>, base?: BlockBuilder<HTMLOListElement, M, void, R>): VBlock<HTMLOListElement, M, void, R> { return Verstak.claim(HtmlTags.ol, builder, base) }
export function OptGroup<M = unknown, R = void>(builder?: BlockBuilder<HTMLOptGroupElement, M, void, R>, base?: BlockBuilder<HTMLOptGroupElement, M, void, R>): VBlock<HTMLOptGroupElement, M, void, R> { return Verstak.claim(HtmlTags.optgroup, builder, base) }
export function Option<M = unknown, R = void>(builder?: BlockBuilder<HTMLOptionElement, M, void, R>, base?: BlockBuilder<HTMLOptionElement, M, void, R>): VBlock<HTMLOptionElement, M, void, R> { return Verstak.claim(HtmlTags.option, builder, base) }
export function Output<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.output, builder, base) }
export function P<M = unknown, R = void>(builder?: BlockBuilder<HTMLParagraphElement, M, void, R>, base?: BlockBuilder<HTMLParagraphElement, M, void, R>): VBlock<HTMLParagraphElement, M, void, R> { return Verstak.claim(HtmlTags.p, builder, base) }
export function Param<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.param, builder, base) }
export function Picture<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.picture, builder, base) }
export function Pre<M = unknown, R = void>(builder?: BlockBuilder<HTMLPreElement, M, void, R>, base?: BlockBuilder<HTMLPreElement, M, void, R>): VBlock<HTMLPreElement, M, void, R> { return Verstak.claim(HtmlTags.pre, builder, base) }
export function Progress<M = unknown, R = void>(builder?: BlockBuilder<HTMLProgressElement, M, void, R>, base?: BlockBuilder<HTMLProgressElement, M, void, R>): VBlock<HTMLProgressElement, M, void, R> { return Verstak.claim(HtmlTags.progress, builder, base) }
export function Q<M = unknown, R = void>(builder?: BlockBuilder<HTMLQuoteElement, M, void, R>, base?: BlockBuilder<HTMLQuoteElement, M, void, R>): VBlock<HTMLQuoteElement, M, void, R> { return Verstak.claim(HtmlTags.q, builder, base) }
export function RP<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.rp, builder, base) }
export function RT<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.rt, builder, base) }
export function Ruby<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.ruby, builder, base) }
export function S<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.s, builder, base) }
export function Samp<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.samp, builder, base) }
export function Script<M = unknown, R = void>(builder?: BlockBuilder<HTMLScriptElement, M, void, R>, base?: BlockBuilder<HTMLScriptElement, M, void, R>): VBlock<HTMLScriptElement, M, void, R> { return Verstak.claim(HtmlTags.script, builder, base) }
export function Section<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.section, builder, base) }
export function Select<M = unknown, R = void>(builder?: BlockBuilder<HTMLSelectElement, M, void, R>, base?: BlockBuilder<HTMLSelectElement, M, void, R>): VBlock<HTMLSelectElement, M, void, R> { return Verstak.claim(HtmlTags.select, builder, base) }
export function Small<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.small, builder, base) }
export function Source<M = unknown, R = void>(builder?: BlockBuilder<HTMLSourceElement, M, void, R>, base?: BlockBuilder<HTMLSourceElement, M, void, R>): VBlock<HTMLSourceElement, M, void, R> { return Verstak.claim(HtmlTags.source, builder, base) }
export function Span<M = unknown, R = void>(builder?: BlockBuilder<HTMLSpanElement, M, void, R>, base?: BlockBuilder<HTMLSpanElement, M, void, R>): VBlock<HTMLSpanElement, M, void, R> { return Verstak.claim(HtmlTags.span, builder, base) }
export function Strong<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.strong, builder, base) }
export function Style<M = unknown, R = void>(builder?: BlockBuilder<HTMLStyleElement, M, void, R>, base?: BlockBuilder<HTMLStyleElement, M, void, R>): VBlock<HTMLStyleElement, M, void, R> { return Verstak.claim(HtmlTags.style, builder, base) }
export function Sub<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.sub, builder, base) }
export function Summary<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.summary, builder, base) }
export function Sup<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.sup, builder, base) }
export function Tbl<M = unknown, R = void>(builder?: BlockBuilder<HTMLTableElement, M, void, R>, base?: BlockBuilder<HTMLTableElement, M, void, R>): VBlock<HTMLTableElement, M, void, R> { return Verstak.claim(HtmlTags.table, builder, base) }
export function Template<M = unknown, R = void>(builder?: BlockBuilder<HTMLTemplateElement, M, void, R>, base?: BlockBuilder<HTMLTemplateElement, M, void, R>): VBlock<HTMLTemplateElement, M, void, R> { return Verstak.claim(HtmlTags.template, builder, base) }
export function TBody<M = unknown, R = void>(builder?: BlockBuilder<HTMLTableSectionElement, M, void, R>, base?: BlockBuilder<HTMLTableSectionElement, M, void, R>): VBlock<HTMLTableSectionElement, M, void, R> { return Verstak.claim(HtmlTags.tbody, builder, base) }
export function TD<M = unknown, R = void>(builder?: BlockBuilder<HTMLTableCellElement, M, void, R>, base?: BlockBuilder<HTMLTableCellElement, M, void, R>): VBlock<HTMLTableCellElement, M, void, R> { return Verstak.claim(HtmlTags.td, builder, base) }
export function TextArea<M = unknown, R = void>(builder?: BlockBuilder<HTMLTextAreaElement, M, void, R>, base?: BlockBuilder<HTMLTextAreaElement, M, void, R>): VBlock<HTMLTextAreaElement, M, void, R> { return Verstak.claim(HtmlTags.textarea, builder, base) }
export function TFoot<M = unknown, R = void>(builder?: BlockBuilder<HTMLTableSectionElement, M, void, R>, base?: BlockBuilder<HTMLTableSectionElement, M, void, R>): VBlock<HTMLTableSectionElement, M, void, R> { return Verstak.claim(HtmlTags.tfoot, builder, base) }
export function TH<M = unknown, R = void>(builder?: BlockBuilder<HTMLTableCellElement, M, void, R>, base?: BlockBuilder<HTMLTableCellElement, M, void, R>): VBlock<HTMLTableCellElement, M, void, R> { return Verstak.claim(HtmlTags.th, builder, base) }
export function THead<M = unknown, R = void>(builder?: BlockBuilder<HTMLTableSectionElement, M, void, R>, base?: BlockBuilder<HTMLTableSectionElement, M, void, R>): VBlock<HTMLTableSectionElement, M, void, R> { return Verstak.claim(HtmlTags.thead, builder, base) }
export function Time<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.time, builder, base) }
export function Title<M = unknown, R = void>(builder?: BlockBuilder<HTMLTitleElement, M, void, R>, base?: BlockBuilder<HTMLTitleElement, M, void, R>): VBlock<HTMLTitleElement, M, void, R> { return Verstak.claim(HtmlTags.title, builder, base) }
export function TR<M = unknown, R = void>(builder?: BlockBuilder<HTMLTableRowElement, M, void, R>, base?: BlockBuilder<HTMLTableRowElement, M, void, R>): VBlock<HTMLTableRowElement, M, void, R> { return Verstak.claim(HtmlTags.tr, builder, base) }
export function Track<M = unknown, R = void>(builder?: BlockBuilder<HTMLTrackElement, M, void, R>, base?: BlockBuilder<HTMLTrackElement, M, void, R>): VBlock<HTMLTrackElement, M, void, R> { return Verstak.claim(HtmlTags.track, builder, base) }
export function U<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.u, builder, base) }
export function UL<M = unknown, R = void>(builder?: BlockBuilder<HTMLUListElement, M, void, R>, base?: BlockBuilder<HTMLUListElement, M, void, R>): VBlock<HTMLUListElement, M, void, R> { return Verstak.claim(HtmlTags.ul, builder, base) }
export function Var<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.var, builder, base) }
export function Video<M = unknown, R = void>(builder?: BlockBuilder<HTMLVideoElement, M, void, R>, base?: BlockBuilder<HTMLVideoElement, M, void, R>): VBlock<HTMLVideoElement, M, void, R> { return Verstak.claim(HtmlTags.video, builder, base) }
export function Wbr<M = unknown, R = void>(builder?: BlockBuilder<HTMLElement, M, void, R>, base?: BlockBuilder<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.wbr, builder, base) }

export function Svg<M = unknown, R = void>(builder?: BlockBuilder<SVGSVGElement, M, void, R>, base?: BlockBuilder<SVGSVGElement, M, void, R>): VBlock<SVGSVGElement, M, void, R> { return Verstak.claim(SvgTags.svg, builder, base) }
export function SvgA<M = unknown, R = void>(builder?: BlockBuilder<SVGAElement, M, void, R>, base?: BlockBuilder<SVGAElement, M, void, R>): VBlock<SVGAElement, M, void, R> { return Verstak.claim(SvgTags.a, builder, base) }
export function Animate<M = unknown, R = void>(builder?: BlockBuilder<SVGAnimateElement, M, void, R>, base?: BlockBuilder<SVGAnimateElement, M, void, R>): VBlock<SVGAnimateElement, M, void, R> { return Verstak.claim(SvgTags.animate, builder, base) }
export function AnimateMotion<M = unknown, R = void>(builder?: BlockBuilder<SVGAnimateMotionElement, M, void, R>, base?: BlockBuilder<SVGAnimateMotionElement, M, void, R>): VBlock<SVGAnimateMotionElement, M, void, R> { return Verstak.claim(SvgTags.animateMotion, builder, base) }
export function AnimateTransform<M = unknown, R = void>(builder?: BlockBuilder<SVGAnimateTransformElement, M, void, R>, base?: BlockBuilder<SVGAnimateTransformElement, M, void, R>): VBlock<SVGAnimateTransformElement, M, void, R> { return Verstak.claim(SvgTags.animateTransform, builder, base) }
export function Circle<M = unknown, R = void>(builder?: BlockBuilder<SVGCircleElement, M, void, R>, base?: BlockBuilder<SVGCircleElement, M, void, R>): VBlock<SVGCircleElement, M, void, R> { return Verstak.claim(SvgTags.circle, builder, base) }
export function ClipPath<M = unknown, R = void>(builder?: BlockBuilder<SVGClipPathElement, M, void, R>, base?: BlockBuilder<SVGClipPathElement, M, void, R>): VBlock<SVGClipPathElement, M, void, R> { return Verstak.claim(SvgTags.clipPath, builder, base) }
export function Defs<M = unknown, R = void>(builder?: BlockBuilder<SVGDefsElement, M, void, R>, base?: BlockBuilder<SVGDefsElement, M, void, R>): VBlock<SVGDefsElement, M, void, R> { return Verstak.claim(SvgTags.defs, builder, base) }
export function Desc<M = unknown, R = void>(builder?: BlockBuilder<SVGDescElement, M, void, R>, base?: BlockBuilder<SVGDescElement, M, void, R>): VBlock<SVGDescElement, M, void, R> { return Verstak.claim(SvgTags.desc, builder, base) }
export function Ellipse<M = unknown, R = void>(builder?: BlockBuilder<SVGEllipseElement, M, void, R>, base?: BlockBuilder<SVGEllipseElement, M, void, R>): VBlock<SVGEllipseElement, M, void, R> { return Verstak.claim(SvgTags.ellipse, builder, base) }
export function FeBlend<M = unknown, R = void>(builder?: BlockBuilder<SVGFEBlendElement, M, void, R>, base?: BlockBuilder<SVGFEBlendElement, M, void, R>): VBlock<SVGFEBlendElement, M, void, R> { return Verstak.claim(SvgTags.feBlend, builder, base) }
export function FeColorMatrix<M = unknown, R = void>(builder?: BlockBuilder<SVGFEColorMatrixElement, M, void, R>, base?: BlockBuilder<SVGFEColorMatrixElement, M, void, R>): VBlock<SVGFEColorMatrixElement, M, void, R> { return Verstak.claim(SvgTags.feColorMatrix, builder, base) }
export function FeComponentTransfer<M = unknown, R = void>(builder?: BlockBuilder<SVGFEComponentTransferElement, M, void, R>, base?: BlockBuilder<SVGFEComponentTransferElement, M, void, R>): VBlock<SVGFEComponentTransferElement, M, void, R> { return Verstak.claim(SvgTags.feComponentTransfer, builder, base) }
export function FeComposite<M = unknown, R = void>(builder?: BlockBuilder<SVGFECompositeElement, M, void, R>, base?: BlockBuilder<SVGFECompositeElement, M, void, R>): VBlock<SVGFECompositeElement, M, void, R> { return Verstak.claim(SvgTags.feComposite, builder, base) }
export function FeConvolveMatrix<M = unknown, R = void>(builder?: BlockBuilder<SVGFEConvolveMatrixElement, M, void, R>, base?: BlockBuilder<SVGFEConvolveMatrixElement, M, void, R>): VBlock<SVGFEConvolveMatrixElement, M, void, R> { return Verstak.claim(SvgTags.feConvolveMatrix, builder, base) }
export function FeDiffuseLighting<M = unknown, R = void>(builder?: BlockBuilder<SVGFEDiffuseLightingElement, M, void, R>, base?: BlockBuilder<SVGFEDiffuseLightingElement, M, void, R>): VBlock<SVGFEDiffuseLightingElement, M, void, R> { return Verstak.claim(SvgTags.feDiffuseLighting, builder, base) }
export function FeDisplacementMap<M = unknown, R = void>(builder?: BlockBuilder<SVGFEDisplacementMapElement, M, void, R>, base?: BlockBuilder<SVGFEDisplacementMapElement, M, void, R>): VBlock<SVGFEDisplacementMapElement, M, void, R> { return Verstak.claim(SvgTags.feDisplacementMap, builder, base) }
export function FeDistantLight<M = unknown, R = void>(builder?: BlockBuilder<SVGFEDistantLightElement, M, void, R>, base?: BlockBuilder<SVGFEDistantLightElement, M, void, R>): VBlock<SVGFEDistantLightElement, M, void, R> { return Verstak.claim(SvgTags.feDistantLight, builder, base) }
export function FeDropShadow<M = unknown, R = void>(builder?: BlockBuilder<SVGFEDropShadowElement, M, void, R>, base?: BlockBuilder<SVGFEDropShadowElement, M, void, R>): VBlock<SVGFEDropShadowElement, M, void, R> { return Verstak.claim(SvgTags.feDropShadow, builder, base) }
export function FeFlood<M = unknown, R = void>(builder?: BlockBuilder<SVGFEFloodElement, M, void, R>, base?: BlockBuilder<SVGFEFloodElement, M, void, R>): VBlock<SVGFEFloodElement, M, void, R> { return Verstak.claim(SvgTags.feFlood, builder, base) }
export function FeFuncA<M = unknown, R = void>(builder?: BlockBuilder<SVGFEFuncAElement, M, void, R>, base?: BlockBuilder<SVGFEFuncAElement, M, void, R>): VBlock<SVGFEFuncAElement, M, void, R> { return Verstak.claim(SvgTags.feFuncA, builder, base) }
export function FeFuncB<M = unknown, R = void>(builder?: BlockBuilder<SVGFEFuncBElement, M, void, R>, base?: BlockBuilder<SVGFEFuncBElement, M, void, R>): VBlock<SVGFEFuncBElement, M, void, R> { return Verstak.claim(SvgTags.feFuncB, builder, base) }
export function FeFuncG<M = unknown, R = void>(builder?: BlockBuilder<SVGFEFuncGElement, M, void, R>, base?: BlockBuilder<SVGFEFuncGElement, M, void, R>): VBlock<SVGFEFuncGElement, M, void, R> { return Verstak.claim(SvgTags.feFuncG, builder, base) }
export function FeFuncR<M = unknown, R = void>(builder?: BlockBuilder<SVGFEFuncRElement, M, void, R>, base?: BlockBuilder<SVGFEFuncRElement, M, void, R>): VBlock<SVGFEFuncRElement, M, void, R> { return Verstak.claim(SvgTags.feFuncR, builder, base) }
export function FeGaussianBlur<M = unknown, R = void>(builder?: BlockBuilder<SVGFEGaussianBlurElement, M, void, R>, base?: BlockBuilder<SVGFEGaussianBlurElement, M, void, R>): VBlock<SVGFEGaussianBlurElement, M, void, R> { return Verstak.claim(SvgTags.feGaussianBlur, builder, base) }
export function FeImage<M = unknown, R = void>(builder?: BlockBuilder<SVGFEImageElement, M, void, R>, base?: BlockBuilder<SVGFEImageElement, M, void, R>): VBlock<SVGFEImageElement, M, void, R> { return Verstak.claim(SvgTags.feImage, builder, base) }
export function FeMerge<M = unknown, R = void>(builder?: BlockBuilder<SVGFEMergeElement, M, void, R>, base?: BlockBuilder<SVGFEMergeElement, M, void, R>): VBlock<SVGFEMergeElement, M, void, R> { return Verstak.claim(SvgTags.feMerge, builder, base) }
export function FeMergeNode<M = unknown, R = void>(builder?: BlockBuilder<SVGFEMergeNodeElement, M, void, R>, base?: BlockBuilder<SVGFEMergeNodeElement, M, void, R>): VBlock<SVGFEMergeNodeElement, M, void, R> { return Verstak.claim(SvgTags.feMergeNode, builder, base) }
export function FeMorphology<M = unknown, R = void>(builder?: BlockBuilder<SVGFEMorphologyElement, M, void, R>, base?: BlockBuilder<SVGFEMorphologyElement, M, void, R>): VBlock<SVGFEMorphologyElement, M, void, R> { return Verstak.claim(SvgTags.feMorphology, builder, base) }
export function FeOffset<M = unknown, R = void>(builder?: BlockBuilder<SVGFEOffsetElement, M, void, R>, base?: BlockBuilder<SVGFEOffsetElement, M, void, R>): VBlock<SVGFEOffsetElement, M, void, R> { return Verstak.claim(SvgTags.feOffset, builder, base) }
export function FePointLight<M = unknown, R = void>(builder?: BlockBuilder<SVGFEPointLightElement, M, void, R>, base?: BlockBuilder<SVGFEPointLightElement, M, void, R>): VBlock<SVGFEPointLightElement, M, void, R> { return Verstak.claim(SvgTags.fePointLight, builder, base) }
export function FeSpecularLighting<M = unknown, R = void>(builder?: BlockBuilder<SVGFESpecularLightingElement, M, void, R>, base?: BlockBuilder<SVGFESpecularLightingElement, M, void, R>): VBlock<SVGFESpecularLightingElement, M, void, R> { return Verstak.claim(SvgTags.feSpecularLighting, builder, base) }
export function FeSpotLight<M = unknown, R = void>(builder?: BlockBuilder<SVGFESpotLightElement, M, void, R>, base?: BlockBuilder<SVGFESpotLightElement, M, void, R>): VBlock<SVGFESpotLightElement, M, void, R> { return Verstak.claim(SvgTags.feSpotLight, builder, base) }
export function FeTile<M = unknown, R = void>(builder?: BlockBuilder<SVGFETileElement, M, void, R>, base?: BlockBuilder<SVGFETileElement, M, void, R>): VBlock<SVGFETileElement, M, void, R> { return Verstak.claim(SvgTags.feTile, builder, base) }
export function FeTurbulence<M = unknown, R = void>(builder?: BlockBuilder<SVGFETurbulenceElement, M, void, R>, base?: BlockBuilder<SVGFETurbulenceElement, M, void, R>): VBlock<SVGFETurbulenceElement, M, void, R> { return Verstak.claim(SvgTags.feTurbulence, builder, base) }
export function Filter<M = unknown, R = void>(builder?: BlockBuilder<SVGFilterElement, M, void, R>, base?: BlockBuilder<SVGFilterElement, M, void, R>): VBlock<SVGFilterElement, M, void, R> { return Verstak.claim(SvgTags.filter, builder, base) }
export function ForeignObject<M = unknown, R = void>(builder?: BlockBuilder<SVGForeignObjectElement, M, void, R>, base?: BlockBuilder<SVGForeignObjectElement, M, void, R>): VBlock<SVGForeignObjectElement, M, void, R> { return Verstak.claim(SvgTags.foreignObject, builder, base) }
export function G<M = unknown, R = void>(builder?: BlockBuilder<SVGGElement, M, void, R>, base?: BlockBuilder<SVGGElement, M, void, R>): VBlock<SVGGElement, M, void, R> { return Verstak.claim(SvgTags.g, builder, base) }
export function SvgImage<M = unknown, R = void>(builder?: BlockBuilder<SVGImageElement, M, void, R>, base?: BlockBuilder<SVGImageElement, M, void, R>): VBlock<SVGImageElement, M, void, R> { return Verstak.claim(SvgTags.image, builder, base) }
export function SvgLine<M = unknown, R = void>(builder?: BlockBuilder<SVGLineElement, M, void, R>, base?: BlockBuilder<SVGLineElement, M, void, R>): VBlock<SVGLineElement, M, void, R> { return Verstak.claim(SvgTags.line, builder, base) }
export function LinearGradient<M = unknown, R = void>(builder?: BlockBuilder<SVGLinearGradientElement, M, void, R>, base?: BlockBuilder<SVGLinearGradientElement, M, void, R>): VBlock<SVGLinearGradientElement, M, void, R> { return Verstak.claim(SvgTags.linearGradient, builder, base) }
export function Marker<M = unknown, R = void>(builder?: BlockBuilder<SVGMarkerElement, M, void, R>, base?: BlockBuilder<SVGMarkerElement, M, void, R>): VBlock<SVGMarkerElement, M, void, R> { return Verstak.claim(SvgTags.marker, builder, base) }
export function Mask<M = unknown, R = void>(builder?: BlockBuilder<SVGMaskElement, M, void, R>, base?: BlockBuilder<SVGMaskElement, M, void, R>): VBlock<SVGMaskElement, M, void, R> { return Verstak.claim(SvgTags.mask, builder, base) }
export function MetaData<M = unknown, R = void>(builder?: BlockBuilder<SVGMetadataElement, M, void, R>, base?: BlockBuilder<SVGMetadataElement, M, void, R>): VBlock<SVGMetadataElement, M, void, R> { return Verstak.claim(SvgTags.metadata, builder, base) }
export function MPath<M = unknown, R = void>(builder?: BlockBuilder<SVGElement, M, void, R>, base?: BlockBuilder<SVGElement, M, void, R>): VBlock<SVGElement, M, void, R> { return Verstak.claim(SvgTags.mpath, builder, base) }
export function Path<M = unknown, R = void>(builder?: BlockBuilder<SVGPathElement, M, void, R>, base?: BlockBuilder<SVGPathElement, M, void, R>): VBlock<SVGPathElement, M, void, R> { return Verstak.claim(SvgTags.path, builder, base) }
export function Pattern<M = unknown, R = void>(builder?: BlockBuilder<SVGPatternElement, M, void, R>, base?: BlockBuilder<SVGPatternElement, M, void, R>): VBlock<SVGPatternElement, M, void, R> { return Verstak.claim(SvgTags.pattern, builder, base) }
export function Polygon<M = unknown, R = void>(builder?: BlockBuilder<SVGPolygonElement, M, void, R>, base?: BlockBuilder<SVGPolygonElement, M, void, R>): VBlock<SVGPolygonElement, M, void, R> { return Verstak.claim(SvgTags.polygon, builder, base) }
export function PolyLine<M = unknown, R = void>(builder?: BlockBuilder<SVGPolylineElement, M, void, R>, base?: BlockBuilder<SVGPolylineElement, M, void, R>): VBlock<SVGPolylineElement, M, void, R> { return Verstak.claim(SvgTags.polyline, builder, base) }
export function RadialGradient<M = unknown, R = void>(builder?: BlockBuilder<SVGRadialGradientElement, M, void, R>, base?: BlockBuilder<SVGRadialGradientElement, M, void, R>): VBlock<SVGRadialGradientElement, M, void, R> { return Verstak.claim(SvgTags.radialGradient, builder, base) }
export function Rect<M = unknown, R = void>(builder?: BlockBuilder<SVGRectElement, M, void, R>, base?: BlockBuilder<SVGRectElement, M, void, R>): VBlock<SVGRectElement, M, void, R> { return Verstak.claim(SvgTags.rect, builder, base) }
export function Stop<M = unknown, R = void>(builder?: BlockBuilder<SVGStopElement, M, void, R>, base?: BlockBuilder<SVGStopElement, M, void, R>): VBlock<SVGStopElement, M, void, R> { return Verstak.claim(SvgTags.stop, builder, base) }
export function SvgSwitch<M = unknown, R = void>(builder?: BlockBuilder<SVGSwitchElement, M, void, R>, base?: BlockBuilder<SVGSwitchElement, M, void, R>): VBlock<SVGSwitchElement, M, void, R> { return Verstak.claim(SvgTags.switch, builder, base) }
export function Symbol<M = unknown, R = void>(builder?: BlockBuilder<SVGSymbolElement, M, void, R>, base?: BlockBuilder<SVGSymbolElement, M, void, R>): VBlock<SVGSymbolElement, M, void, R> { return Verstak.claim(SvgTags.symbol, builder, base) }
export function Text<M = unknown, R = void>(builder?: BlockBuilder<SVGTextElement, M, void, R>, base?: BlockBuilder<SVGTextElement, M, void, R>): VBlock<SVGTextElement, M, void, R> { return Verstak.claim(SvgTags.text, builder, base) }
export function TextPath<M = unknown, R = void>(builder?: BlockBuilder<SVGTextPathElement, M, void, R>, base?: BlockBuilder<SVGTextPathElement, M, void, R>): VBlock<SVGTextPathElement, M, void, R> { return Verstak.claim(SvgTags.textPath, builder, base) }
export function TSpan<M = unknown, R = void>(builder?: BlockBuilder<SVGTSpanElement, M, void, R>, base?: BlockBuilder<SVGTSpanElement, M, void, R>): VBlock<SVGTSpanElement, M, void, R> { return Verstak.claim(SvgTags.tspan, builder, base) }
export function Use<M = unknown, R = void>(builder?: BlockBuilder<SVGUseElement, M, void, R>, base?: BlockBuilder<SVGUseElement, M, void, R>): VBlock<SVGUseElement, M, void, R> { return Verstak.claim(SvgTags.use, builder, base) }
export function View<M = unknown, R = void>(builder?: BlockBuilder<SVGViewElement, M, void, R>, base?: BlockBuilder<SVGViewElement, M, void, R>): VBlock<SVGViewElement, M, void, R> { return Verstak.claim(SvgTags.view, builder, base) }

const HtmlTags = {
  a: new HtmlDriver<HTMLAnchorElement>("a", false, b => b.kind = BlockKind.Band),
  abbr: new HtmlDriver<HTMLElement>("abbr", false, b => b.kind = BlockKind.Band),
  address: new HtmlDriver<HTMLElement>("address", false, b => b.kind = BlockKind.Band),
  area: new HtmlDriver<HTMLAreaElement>("area", false, b => b.kind = BlockKind.Band),
  article: new HtmlDriver<HTMLElement>("article", false, b => b.kind = BlockKind.Band),
  aside: new HtmlDriver<HTMLElement>("aside", false, b => b.kind = BlockKind.Band),
  audio: new HtmlDriver<HTMLAudioElement>("audio", false, b => b.kind = BlockKind.Band),
  b: new HtmlDriver<HTMLElement>("b", false, b => b.kind = BlockKind.Band),
  base: new HtmlDriver<HTMLBaseElement>("base", false, b => b.kind = BlockKind.Band),
  bdi: new HtmlDriver<HTMLElement>("bdi", false, b => b.kind = BlockKind.Band),
  bdo: new HtmlDriver<HTMLElement>("bdo", false, b => b.kind = BlockKind.Band),
  big: new HtmlDriver<HTMLElement>("big", false, b => b.kind = BlockKind.Band),
  blockquote: new HtmlDriver<HTMLElement>("blockquote", false, b => b.kind = BlockKind.Band),
  body: new HtmlDriver<HTMLBodyElement>("body", false, b => b.kind = BlockKind.Band),
  br: new HtmlDriver<HTMLBRElement>("br", false, b => b.kind = BlockKind.Band),
  button: new HtmlDriver<HTMLButtonElement>("button", false, b => b.kind = BlockKind.Band),
  canvas: new HtmlDriver<HTMLCanvasElement>("canvas", false, b => b.kind = BlockKind.Band),
  caption: new HtmlDriver<HTMLTableCaptionElement>("caption", false, b => b.kind = BlockKind.Band),
  cite: new HtmlDriver<HTMLElement>("cite", false, b => b.kind = BlockKind.Band),
  code: new HtmlDriver<HTMLElement>("code", false, b => b.kind = BlockKind.Band),
  col: new HtmlDriver<HTMLTableColElement>("col", false, b => b.kind = BlockKind.Band),
  colgroup: new HtmlDriver<HTMLTableColElement>("colgroup", false, b => b.kind = BlockKind.Band),
  data: new HtmlDriver<HTMLDataElement>("data", false, b => b.kind = BlockKind.Band),
  datalist: new HtmlDriver<HTMLDataListElement>("datalist", false, b => b.kind = BlockKind.Band),
  dd: new HtmlDriver<HTMLElement>("dd", false, b => b.kind = BlockKind.Band),
  del: new HtmlDriver<HTMLElement>("del", false, b => b.kind = BlockKind.Band),
  details: new HtmlDriver<HTMLElement>("details", false, b => b.kind = BlockKind.Band),
  dfn: new HtmlDriver<HTMLElement>("dfn", false, b => b.kind = BlockKind.Band),
  div: new HtmlDriver<HTMLDivElement>("div", false, b => b.kind = BlockKind.Band),
  dl: new HtmlDriver<HTMLDListElement>("dl", false, b => b.kind = BlockKind.Band),
  dt: new HtmlDriver<HTMLElement>("dt", false, b => b.kind = BlockKind.Band),
  em: new HtmlDriver<HTMLElement>("em", false, b => b.kind = BlockKind.Band),
  embed: new HtmlDriver<HTMLEmbedElement>("embed", false, b => b.kind = BlockKind.Band),
  fieldset: new HtmlDriver<HTMLFieldSetElement>("fieldset", false, b => b.kind = BlockKind.Band),
  figcaption: new HtmlDriver<HTMLElement>("figcaption", false, b => b.kind = BlockKind.Band),
  figure: new HtmlDriver<HTMLElement>("figure", false, b => b.kind = BlockKind.Band),
  footer: new HtmlDriver<HTMLElement>("footer", false, b => b.kind = BlockKind.Band),
  form: new HtmlDriver<HTMLFormElement>("form", false, b => b.kind = BlockKind.Band),
  h1: new HtmlDriver<HTMLHeadingElement>("h1", false, b => b.kind = BlockKind.Band),
  h2: new HtmlDriver<HTMLHeadingElement>("h2", false, b => b.kind = BlockKind.Band),
  h3: new HtmlDriver<HTMLHeadingElement>("h3", false, b => b.kind = BlockKind.Band),
  h4: new HtmlDriver<HTMLHeadingElement>("h4", false, b => b.kind = BlockKind.Band),
  h5: new HtmlDriver<HTMLHeadingElement>("h5", false, b => b.kind = BlockKind.Band),
  h6: new HtmlDriver<HTMLHeadingElement>("h6", false, b => b.kind = BlockKind.Band),
  head: new HtmlDriver<HTMLHeadElement>("head", false, b => b.kind = BlockKind.Band),
  header: new HtmlDriver<HTMLElement>("header", false, b => b.kind = BlockKind.Band),
  hgroup: new HtmlDriver<HTMLElement>("hgroup", false, b => b.kind = BlockKind.Band),
  hr: new HtmlDriver<HTMLHRElement>("hr", false, b => b.kind = BlockKind.Band),
  html: new HtmlDriver<HTMLHtmlElement>("html", false, b => b.kind = BlockKind.Band),
  i: new HtmlDriver<HTMLElement>("i", false, b => b.kind = BlockKind.Band),
  iframe: new HtmlDriver<HTMLIFrameElement>("iframe", false, b => b.kind = BlockKind.Band),
  img: new HtmlDriver<HTMLImageElement>("img", false, b => b.kind = BlockKind.Band),
  input: new HtmlDriver<HTMLInputElement>("input", false, b => b.kind = BlockKind.Band),
  ins: new HtmlDriver<HTMLModElement>("ins", false, b => b.kind = BlockKind.Band),
  kbd: new HtmlDriver<HTMLElement>("kbd", false, b => b.kind = BlockKind.Band),
  keygen: new HtmlDriver<HTMLElement>("keygen", false, b => b.kind = BlockKind.Band),
  label: new HtmlDriver<HTMLLabelElement>("label", false, b => b.kind = BlockKind.Band),
  legend: new HtmlDriver<HTMLLegendElement>("legend", false, b => b.kind = BlockKind.Band),
  li: new HtmlDriver<HTMLLIElement>("li", false, b => b.kind = BlockKind.Band),
  link: new HtmlDriver<HTMLLinkElement>("link", false, b => b.kind = BlockKind.Band),
  main: new HtmlDriver<HTMLElement>("main", false, b => b.kind = BlockKind.Band),
  map: new HtmlDriver<HTMLMapElement>("map", false, b => b.kind = BlockKind.Band),
  mark: new HtmlDriver<HTMLElement>("mark", false, b => b.kind = BlockKind.Band),
  menu: new HtmlDriver<HTMLElement>("menu", false, b => b.kind = BlockKind.Band),
  menuitem: new HtmlDriver<HTMLElement>("menuitem", false, b => b.kind = BlockKind.Band),
  meta: new HtmlDriver<HTMLMetaElement>("meta", false, b => b.kind = BlockKind.Band),
  meter: new HtmlDriver<HTMLElement>("meter", false, b => b.kind = BlockKind.Band),
  nav: new HtmlDriver<HTMLElement>("nav", false, b => b.kind = BlockKind.Band),
  noindex: new HtmlDriver<HTMLElement>("noindex", false, b => b.kind = BlockKind.Band),
  noscript: new HtmlDriver<HTMLElement>("noscript", false, b => b.kind = BlockKind.Band),
  object: new HtmlDriver<HTMLObjectElement>("object", false, b => b.kind = BlockKind.Band),
  ol: new HtmlDriver<HTMLOListElement>("ol", false, b => b.kind = BlockKind.Band),
  optgroup: new HtmlDriver<HTMLOptGroupElement>("optgroup", false, b => b.kind = BlockKind.Band),
  option: new HtmlDriver<HTMLOptionElement>("option", false, b => b.kind = BlockKind.Band),
  output: new HtmlDriver<HTMLElement>("output", false, b => b.kind = BlockKind.Band),
  p: new HtmlDriver<HTMLParagraphElement>("p", false, b => b.kind = BlockKind.Band),
  param: new HtmlDriver<HTMLElement>("param", false, b => b.kind = BlockKind.Band),
  picture: new HtmlDriver<HTMLElement>("picture", false, b => b.kind = BlockKind.Band),
  pre: new HtmlDriver<HTMLPreElement>("pre", false, b => b.kind = BlockKind.Band),
  progress: new HtmlDriver<HTMLProgressElement>("progress", false, b => b.kind = BlockKind.Band),
  q: new HtmlDriver<HTMLQuoteElement>("q", false, b => b.kind = BlockKind.Band),
  rp: new HtmlDriver<HTMLElement>("rp", false, b => b.kind = BlockKind.Band),
  rt: new HtmlDriver<HTMLElement>("rt", false, b => b.kind = BlockKind.Band),
  ruby: new HtmlDriver<HTMLElement>("ruby", false, b => b.kind = BlockKind.Band),
  s: new HtmlDriver<HTMLElement>("s", false, b => b.kind = BlockKind.Band),
  samp: new HtmlDriver<HTMLElement>("samp", false, b => b.kind = BlockKind.Band),
  script: new HtmlDriver<HTMLScriptElement>("script", false, b => b.kind = BlockKind.Band),
  section: new HtmlDriver<HTMLElement>("section", false, b => b.kind = BlockKind.Band),
  select: new HtmlDriver<HTMLSelectElement>("select", false, b => b.kind = BlockKind.Band),
  small: new HtmlDriver<HTMLElement>("small", false, b => b.kind = BlockKind.Band),
  source: new HtmlDriver<HTMLSourceElement>("source", false, b => b.kind = BlockKind.Band),
  span: new HtmlDriver<HTMLSpanElement>("span", false, b => b.kind = BlockKind.Band),
  strong: new HtmlDriver<HTMLElement>("strong", false, b => b.kind = BlockKind.Band),
  style: new HtmlDriver<HTMLStyleElement>("style", false, b => b.kind = BlockKind.Band),
  sub: new HtmlDriver<HTMLElement>("sub", false, b => b.kind = BlockKind.Band),
  summary: new HtmlDriver<HTMLElement>("summary", false, b => b.kind = BlockKind.Band),
  sup: new HtmlDriver<HTMLElement>("sup", false, b => b.kind = BlockKind.Band),
  table: new HtmlDriver<HTMLTableElement>("table", false, b => b.kind = BlockKind.Band),
  template: new HtmlDriver<HTMLTemplateElement>("template", false, b => b.kind = BlockKind.Band),
  tbody: new HtmlDriver<HTMLTableSectionElement>("tbody", false, b => b.kind = BlockKind.Band),
  td: new HtmlDriver<HTMLTableCellElement>("td", false, b => b.kind = BlockKind.Band),
  textarea: new HtmlDriver<HTMLTextAreaElement>("textarea", false, b => b.kind = BlockKind.Band),
  tfoot: new HtmlDriver<HTMLTableSectionElement>("tfoot", false, b => b.kind = BlockKind.Band),
  th: new HtmlDriver<HTMLTableCellElement>("th", false, b => b.kind = BlockKind.Band),
  thead: new HtmlDriver<HTMLTableSectionElement>("thead", false, b => b.kind = BlockKind.Band),
  time: new HtmlDriver<HTMLElement>("time", false, b => b.kind = BlockKind.Band),
  title: new HtmlDriver<HTMLTitleElement>("title", false, b => b.kind = BlockKind.Band),
  tr: new HtmlDriver<HTMLTableRowElement>("tr", false, b => b.kind = BlockKind.Band),
  track: new HtmlDriver<HTMLTrackElement>("track", false, b => b.kind = BlockKind.Band),
  u: new HtmlDriver<HTMLElement>("u", false, b => b.kind = BlockKind.Band),
  ul: new HtmlDriver<HTMLUListElement>("ul", false, b => b.kind = BlockKind.Band),
  var: new HtmlDriver<HTMLElement>("var", false, b => b.kind = BlockKind.Band),
  video: new HtmlDriver<HTMLVideoElement>("video", false, b => b.kind = BlockKind.Band),
  wbr: new HtmlDriver<HTMLElement>("wbr", false, b => b.kind = BlockKind.Band),
  // webview: new HtmlNodeFactory<HTMLWebViewElement>('webview', BlockKind.Chain),
}

const SvgTags = {
  svg: new SvgDriver<SVGSVGElement>("svg", false, b => b.kind = BlockKind.Band),
  a: new SvgDriver<SVGAElement>("a", false, b => b.kind = BlockKind.Band),
  animate: new SvgDriver<SVGAnimateElement>("animate", false, b => b.kind = BlockKind.Band),
  animateMotion: new SvgDriver<SVGAnimateMotionElement>("animateMotion", false, b => b.kind = BlockKind.Band),
  animateTransform: new SvgDriver<SVGAnimateTransformElement>("animateTransform", false, b => b.kind = BlockKind.Band),
  circle: new SvgDriver<SVGCircleElement>("circle", false, b => b.kind = BlockKind.Band),
  clipPath: new SvgDriver<SVGClipPathElement>("clipPath", false, b => b.kind = BlockKind.Band),
  defs: new SvgDriver<SVGDefsElement>("defs", false, b => b.kind = BlockKind.Band),
  desc: new SvgDriver<SVGDescElement>("desc", false, b => b.kind = BlockKind.Band),
  ellipse: new SvgDriver<SVGEllipseElement>("ellipse", false, b => b.kind = BlockKind.Band),
  feBlend: new SvgDriver<SVGFEBlendElement>("feBlend", false, b => b.kind = BlockKind.Band),
  feColorMatrix: new SvgDriver<SVGFEColorMatrixElement>("feColorMatrix", false, b => b.kind = BlockKind.Band),
  feComponentTransfer: new SvgDriver<SVGFEComponentTransferElement>("feComponentTransfer", false, b => b.kind = BlockKind.Band),
  feComposite: new SvgDriver<SVGFECompositeElement>("feComposite", false, b => b.kind = BlockKind.Band),
  feConvolveMatrix: new SvgDriver<SVGFEConvolveMatrixElement>("feConvolveMatrix", false, b => b.kind = BlockKind.Band),
  feDiffuseLighting: new SvgDriver<SVGFEDiffuseLightingElement>("feDiffuseLighting", false, b => b.kind = BlockKind.Band),
  feDisplacementMap: new SvgDriver<SVGFEDisplacementMapElement>("feDisplacementMap", false, b => b.kind = BlockKind.Band),
  feDistantLight: new SvgDriver<SVGFEDistantLightElement>("feDistantLight", false, b => b.kind = BlockKind.Band),
  feDropShadow: new SvgDriver<SVGFEDropShadowElement>("feDropShadow", false, b => b.kind = BlockKind.Band),
  feFlood: new SvgDriver<SVGFEFloodElement>("feFlood", false, b => b.kind = BlockKind.Band),
  feFuncA: new SvgDriver<SVGFEFuncAElement>("feFuncA", false, b => b.kind = BlockKind.Band),
  feFuncB: new SvgDriver<SVGFEFuncBElement>("feFuncB", false, b => b.kind = BlockKind.Band),
  feFuncG: new SvgDriver<SVGFEFuncGElement>("feFuncG", false, b => b.kind = BlockKind.Band),
  feFuncR: new SvgDriver<SVGFEFuncRElement>("feFuncR", false, b => b.kind = BlockKind.Band),
  feGaussianBlur: new SvgDriver<SVGFEGaussianBlurElement>("feGaussianBlur", false, b => b.kind = BlockKind.Band),
  feImage: new SvgDriver<SVGFEImageElement>("feImage", false, b => b.kind = BlockKind.Band),
  feMerge: new SvgDriver<SVGFEMergeElement>("feMerge", false, b => b.kind = BlockKind.Band),
  feMergeNode: new SvgDriver<SVGFEMergeNodeElement>("feMergeNode", false, b => b.kind = BlockKind.Band),
  feMorphology: new SvgDriver<SVGFEMorphologyElement>("feMorphology", false, b => b.kind = BlockKind.Band),
  feOffset: new SvgDriver<SVGFEOffsetElement>("feOffset", false, b => b.kind = BlockKind.Band),
  fePointLight: new SvgDriver<SVGFEPointLightElement>("fePointLight", false, b => b.kind = BlockKind.Band),
  feSpecularLighting: new SvgDriver<SVGFESpecularLightingElement>("feSpecularLighting", false, b => b.kind = BlockKind.Band),
  feSpotLight: new SvgDriver<SVGFESpotLightElement>("feSpotLight", false, b => b.kind = BlockKind.Band),
  feTile: new SvgDriver<SVGFETileElement>("feTile", false, b => b.kind = BlockKind.Band),
  feTurbulence: new SvgDriver<SVGFETurbulenceElement>("feTurbulence", false, b => b.kind = BlockKind.Band),
  filter: new SvgDriver<SVGFilterElement>("filter", false, b => b.kind = BlockKind.Band),
  foreignObject: new SvgDriver<SVGForeignObjectElement>("foreignObject", false, b => b.kind = BlockKind.Band),
  g: new SvgDriver<SVGGElement>("g", false, b => b.kind = BlockKind.Band),
  image: new SvgDriver<SVGImageElement>("image", false, b => b.kind = BlockKind.Band),
  line: new SvgDriver<SVGLineElement>("line", false, b => b.kind = BlockKind.Band),
  linearGradient: new SvgDriver<SVGLinearGradientElement>("linearGradient", false, b => b.kind = BlockKind.Band),
  marker: new SvgDriver<SVGMarkerElement>("marker", false, b => b.kind = BlockKind.Band),
  mask: new SvgDriver<SVGMaskElement>("mask", false, b => b.kind = BlockKind.Band),
  metadata: new SvgDriver<SVGMetadataElement>("metadata", false, b => b.kind = BlockKind.Band),
  mpath: new SvgDriver<SVGElement>("mpath", false, b => b.kind = BlockKind.Band),
  path: new SvgDriver<SVGPathElement>("path", false, b => b.kind = BlockKind.Band),
  pattern: new SvgDriver<SVGPatternElement>("pattern", false, b => b.kind = BlockKind.Band),
  polygon: new SvgDriver<SVGPolygonElement>("polygon", false, b => b.kind = BlockKind.Band),
  polyline: new SvgDriver<SVGPolylineElement>("polyline", false, b => b.kind = BlockKind.Band),
  radialGradient: new SvgDriver<SVGRadialGradientElement>("radialGradient", false, b => b.kind = BlockKind.Band),
  rect: new SvgDriver<SVGRectElement>("rect", false, b => b.kind = BlockKind.Band),
  stop: new SvgDriver<SVGStopElement>("stop", false, b => b.kind = BlockKind.Band),
  switch: new SvgDriver<SVGSwitchElement>("switch", false, b => b.kind = BlockKind.Band),
  symbol: new SvgDriver<SVGSymbolElement>("symbol", false, b => b.kind = BlockKind.Band),
  text: new SvgDriver<SVGTextElement>("text", false, b => b.kind = BlockKind.Band),
  textPath: new SvgDriver<SVGTextPathElement>("textPath", false, b => b.kind = BlockKind.Band),
  tspan: new SvgDriver<SVGTSpanElement>("tspan", false, b => b.kind = BlockKind.Band),
  use: new SvgDriver<SVGUseElement>("use", false, b => b.kind = BlockKind.Band),
  view: new SvgDriver<SVGViewElement>("view", false, b => b.kind = BlockKind.Band),
}
