// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Verstak, El, StaticDriver, ElKind, ElBuilder } from "../core/api.js"
import { HtmlDriver, SvgDriver } from "./HtmlDriver.js"

export function HtmlBody(builder?: ElBuilder<HTMLElement>, base?: ElBuilder<HTMLElement>): El<HTMLElement> {
  const driver = new StaticDriver(global.document.body, "HtmlBody", false, el => el.kind = ElKind.Section)
  return Verstak.claim(driver, builder, base)
}

export function A<M = unknown, R = void>(builder?: ElBuilder<HTMLAnchorElement, M, void, R>, base?: ElBuilder<HTMLAnchorElement, M, void, R>): El<HTMLAnchorElement, M, void, R> { return Verstak.claim(HtmlTags.a, builder, base) }
export function Abbr<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.abbr, builder, base) }
export function Address<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.address, builder, base) }
export function Area<M = unknown, R = void>(builder?: ElBuilder<HTMLAreaElement, M, void, R>, base?: ElBuilder<HTMLAreaElement, M, void, R>): El<HTMLAreaElement, M, void, R> { return Verstak.claim(HtmlTags.area, builder, base) }
export function Article<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.article, builder, base) }
export function Aside<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.aside, builder, base) }
export function Audio<M = unknown, R = void>(builder?: ElBuilder<HTMLAudioElement, M, void, R>, base?: ElBuilder<HTMLAudioElement, M, void, R>): El<HTMLAudioElement, M, void, R> { return Verstak.claim(HtmlTags.audio, builder, base) }
export function B<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.b, builder, base) }
export function Base<M = unknown, R = void>(builder?: ElBuilder<HTMLBaseElement, M, void, R>, base?: ElBuilder<HTMLBaseElement, M, void, R>): El<HTMLBaseElement, M, void, R> { return Verstak.claim(HtmlTags.base, builder, base) }
export function Bdi<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.bdi, builder, base) }
export function Bdo<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.bdo, builder, base) }
export function Big<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.big, builder, base) }
export function BlockQuote<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.blockquote, builder, base) }
export function Body<M = unknown, R = void>(builder?: ElBuilder<HTMLBodyElement, M, void, R>, base?: ElBuilder<HTMLBodyElement, M, void, R>): El<HTMLBodyElement, M, void, R> { return Verstak.claim(HtmlTags.body, builder, base) }
export function BR<M = unknown, R = void>(builder?: ElBuilder<HTMLBRElement, M, void, R>, base?: ElBuilder<HTMLBRElement, M, void, R>): El<HTMLBRElement, M, void, R> { return Verstak.claim(HtmlTags.br, builder, base) }
export function Button<M = unknown, R = void>(builder?: ElBuilder<HTMLButtonElement, M, void, R>, base?: ElBuilder<HTMLButtonElement, M, void, R>): El<HTMLButtonElement, M, void, R> { return Verstak.claim(HtmlTags.button, builder, base) }
export function Canvas<M = unknown, R = void>(builder?: ElBuilder<HTMLCanvasElement, M, void, R>, base?: ElBuilder<HTMLCanvasElement, M, void, R>): El<HTMLCanvasElement, M, void, R> { return Verstak.claim(HtmlTags.canvas, builder, base) }
export function Caption<M = unknown, R = void>(builder?: ElBuilder<HTMLTableCaptionElement, M, void, R>, base?: ElBuilder<HTMLTableCaptionElement, M, void, R>): El<HTMLTableCaptionElement, M, void, R> { return Verstak.claim(HtmlTags.caption, builder, base) }
export function Cite<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.cite, builder, base) }
export function Code<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.code, builder, base) }
export function Col<M = unknown, R = void>(builder?: ElBuilder<HTMLTableColElement, M, void, R>, base?: ElBuilder<HTMLTableColElement, M, void, R>): El<HTMLTableColElement, M, void, R> { return Verstak.claim(HtmlTags.col, builder, base) }
export function ColGroup<M = unknown, R = void>(builder?: ElBuilder<HTMLTableColElement, M, void, R>, base?: ElBuilder<HTMLTableColElement, M, void, R>): El<HTMLTableColElement, M, void, R> { return Verstak.claim(HtmlTags.colgroup, builder, base) }
export function Data<M = unknown, R = void>(builder?: ElBuilder<HTMLDataElement, M, void, R>, base?: ElBuilder<HTMLDataElement, M, void, R>): El<HTMLDataElement, M, void, R> { return Verstak.claim(HtmlTags.data, builder, base) }
export function DataList<M = unknown, R = void>(builder?: ElBuilder<HTMLDataListElement, M, void, R>, base?: ElBuilder<HTMLDataListElement, M, void, R>): El<HTMLDataListElement, M, void, R> { return Verstak.claim(HtmlTags.datalist, builder, base) }
export function DD<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.dd, builder, base) }
export function Del<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.del, builder, base) }
export function Details<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.details, builder, base) }
export function Dfn<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.dfn, builder, base) }
export function Div<M = unknown, R = void>(builder?: ElBuilder<HTMLDivElement, M, void, R>, base?: ElBuilder<HTMLDivElement, M, void, R>): El<HTMLDivElement, M, void, R> { return Verstak.claim(HtmlTags.div, builder, base) }
export function DL<M = unknown, R = void>(builder?: ElBuilder<HTMLDListElement, M, void, R>, base?: ElBuilder<HTMLDListElement, M, void, R>): El<HTMLDListElement, M, void, R> { return Verstak.claim(HtmlTags.dl, builder, base) }
export function DT<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.dt, builder, base) }
export function EM<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.em, builder, base) }
export function Embed<M = unknown, R = void>(builder?: ElBuilder<HTMLEmbedElement, M, void, R>, base?: ElBuilder<HTMLEmbedElement, M, void, R>): El<HTMLEmbedElement, M, void, R> { return Verstak.claim(HtmlTags.embed, builder, base) }
export function FieldSet<M = unknown, R = void>(builder?: ElBuilder<HTMLFieldSetElement, M, void, R>, base?: ElBuilder<HTMLFieldSetElement, M, void, R>): El<HTMLFieldSetElement, M, void, R> { return Verstak.claim(HtmlTags.fieldset, builder, base) }
export function FigCaption<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.figcaption, builder, base) }
export function Figure<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.figure, builder, base) }
export function Footer<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.footer, builder, base) }
export function Form<M = unknown, R = void>(builder?: ElBuilder<HTMLFormElement, M, void, R>, base?: ElBuilder<HTMLFormElement, M, void, R>): El<HTMLFormElement, M, void, R> { return Verstak.claim(HtmlTags.form, builder, base) }
export function H1<M = unknown, R = void>(builder?: ElBuilder<HTMLHeadingElement, M, void, R>, base?: ElBuilder<HTMLHeadingElement, M, void, R>): El<HTMLHeadingElement, M, void, R> { return Verstak.claim(HtmlTags.h1, builder, base) }
export function H2<M = unknown, R = void>(builder?: ElBuilder<HTMLHeadingElement, M, void, R>, base?: ElBuilder<HTMLHeadingElement, M, void, R>): El<HTMLHeadingElement, M, void, R> { return Verstak.claim(HtmlTags.h2, builder, base) }
export function H3<M = unknown, R = void>(builder?: ElBuilder<HTMLHeadingElement, M, void, R>, base?: ElBuilder<HTMLHeadingElement, M, void, R>): El<HTMLHeadingElement, M, void, R> { return Verstak.claim(HtmlTags.h3, builder, base) }
export function H4<M = unknown, R = void>(builder?: ElBuilder<HTMLHeadingElement, M, void, R>, base?: ElBuilder<HTMLHeadingElement, M, void, R>): El<HTMLHeadingElement, M, void, R> { return Verstak.claim(HtmlTags.h4, builder, base) }
export function H5<M = unknown, R = void>(builder?: ElBuilder<HTMLHeadingElement, M, void, R>, base?: ElBuilder<HTMLHeadingElement, M, void, R>): El<HTMLHeadingElement, M, void, R> { return Verstak.claim(HtmlTags.h5, builder, base) }
export function H6<M = unknown, R = void>(builder?: ElBuilder<HTMLHeadingElement, M, void, R>, base?: ElBuilder<HTMLHeadingElement, M, void, R>): El<HTMLHeadingElement, M, void, R> { return Verstak.claim(HtmlTags.h6, builder, base) }
export function Head<M = unknown, R = void>(builder?: ElBuilder<HTMLHeadElement, M, void, R>, base?: ElBuilder<HTMLHeadElement, M, void, R>): El<HTMLHeadElement, M, void, R> { return Verstak.claim(HtmlTags.head, builder, base) }
export function Header<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.header, builder, base) }
export function HGroup<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.hgroup, builder, base) }
export function HR<M = unknown, R = void>(builder?: ElBuilder<HTMLHRElement, M, void, R>, base?: ElBuilder<HTMLHRElement, M, void, R>): El<HTMLHRElement, M, void, R> { return Verstak.claim(HtmlTags.hr, builder, base) }
export function Html<M = unknown, R = void>(builder?: ElBuilder<HTMLHtmlElement, M, void, R>, base?: ElBuilder<HTMLHtmlElement, M, void, R>): El<HTMLHtmlElement, M, void, R> { return Verstak.claim(HtmlTags.html, builder, base) }
export function I<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.i, builder, base) }
export function IFrame<M = unknown, R = void>(builder?: ElBuilder<HTMLIFrameElement, M, void, R>, base?: ElBuilder<HTMLIFrameElement, M, void, R>): El<HTMLIFrameElement, M, void, R> { return Verstak.claim(HtmlTags.iframe, builder, base) }
export function Img<M = unknown, R = void>(builder?: ElBuilder<HTMLImageElement, M, void, R>, base?: ElBuilder<HTMLImageElement, M, void, R>): El<HTMLImageElement, M, void, R> { return Verstak.claim(HtmlTags.img, builder, base) }
export function Input<M = unknown, R = void>(builder?: ElBuilder<HTMLInputElement, M, void, R>, base?: ElBuilder<HTMLInputElement, M, void, R>): El<HTMLInputElement, M, void, R> { return Verstak.claim(HtmlTags.input, builder, base) }
export function Ins<M = unknown, R = void>(builder?: ElBuilder<HTMLModElement, M, void, R>, base?: ElBuilder<HTMLModElement, M, void, R>): El<HTMLModElement, M, void, R> { return Verstak.claim(HtmlTags.ins, builder, base) }
export function Kbd<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.kbd, builder, base) }
export function KeyGen<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.keygen, builder, base) }
export function Label<M = unknown, R = void>(builder?: ElBuilder<HTMLLabelElement, M, void, R>, base?: ElBuilder<HTMLLabelElement, M, void, R>): El<HTMLLabelElement, M, void, R> { return Verstak.claim(HtmlTags.label, builder, base) }
export function Legend<M = unknown, R = void>(builder?: ElBuilder<HTMLLegendElement, M, void, R>, base?: ElBuilder<HTMLLegendElement, M, void, R>): El<HTMLLegendElement, M, void, R> { return Verstak.claim(HtmlTags.legend, builder, base) }
export function LI<M = unknown, R = void>(builder?: ElBuilder<HTMLLIElement, M, void, R>, base?: ElBuilder<HTMLLIElement, M, void, R>): El<HTMLLIElement, M, void, R> { return Verstak.claim(HtmlTags.li, builder, base) }
export function Link<M = unknown, R = void>(builder?: ElBuilder<HTMLLinkElement, M, void, R>, base?: ElBuilder<HTMLLinkElement, M, void, R>): El<HTMLLinkElement, M, void, R> { return Verstak.claim(HtmlTags.link, builder, base) }
export function Main<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.main, builder, base) }
export function Map<M = unknown, R = void>(builder?: ElBuilder<HTMLMapElement, M, void, R>, base?: ElBuilder<HTMLMapElement, M, void, R>): El<HTMLMapElement, M, void, R> { return Verstak.claim(HtmlTags.map, builder, base) }
export function Mark<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.mark, builder, base) }
export function Menu<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.menu, builder, base) }
export function MenuItem<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.menuitem, builder, base) }
export function Meta<M = unknown, R = void>(builder?: ElBuilder<HTMLMetaElement, M, void, R>, base?: ElBuilder<HTMLMetaElement, M, void, R>): El<HTMLMetaElement, M, void, R> { return Verstak.claim(HtmlTags.meta, builder, base) }
export function Meter<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.meter, builder, base) }
export function Nav<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.nav, builder, base) }
export function NoIndex<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.noindex, builder, base) }
export function NoScript<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.noscript, builder, base) }
export function Obj<M = unknown, R = void>(builder?: ElBuilder<HTMLObjectElement, M, void, R>, base?: ElBuilder<HTMLObjectElement, M, void, R>): El<HTMLObjectElement, M, void, R> { return Verstak.claim(HtmlTags.object, builder, base) }
export function OL<M = unknown, R = void>(builder?: ElBuilder<HTMLOListElement, M, void, R>, base?: ElBuilder<HTMLOListElement, M, void, R>): El<HTMLOListElement, M, void, R> { return Verstak.claim(HtmlTags.ol, builder, base) }
export function OptGroup<M = unknown, R = void>(builder?: ElBuilder<HTMLOptGroupElement, M, void, R>, base?: ElBuilder<HTMLOptGroupElement, M, void, R>): El<HTMLOptGroupElement, M, void, R> { return Verstak.claim(HtmlTags.optgroup, builder, base) }
export function Option<M = unknown, R = void>(builder?: ElBuilder<HTMLOptionElement, M, void, R>, base?: ElBuilder<HTMLOptionElement, M, void, R>): El<HTMLOptionElement, M, void, R> { return Verstak.claim(HtmlTags.option, builder, base) }
export function Output<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.output, builder, base) }
export function P<M = unknown, R = void>(builder?: ElBuilder<HTMLParagraphElement, M, void, R>, base?: ElBuilder<HTMLParagraphElement, M, void, R>): El<HTMLParagraphElement, M, void, R> { return Verstak.claim(HtmlTags.p, builder, base) }
export function Param<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.param, builder, base) }
export function Picture<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.picture, builder, base) }
export function Pre<M = unknown, R = void>(builder?: ElBuilder<HTMLPreElement, M, void, R>, base?: ElBuilder<HTMLPreElement, M, void, R>): El<HTMLPreElement, M, void, R> { return Verstak.claim(HtmlTags.pre, builder, base) }
export function Progress<M = unknown, R = void>(builder?: ElBuilder<HTMLProgressElement, M, void, R>, base?: ElBuilder<HTMLProgressElement, M, void, R>): El<HTMLProgressElement, M, void, R> { return Verstak.claim(HtmlTags.progress, builder, base) }
export function Q<M = unknown, R = void>(builder?: ElBuilder<HTMLQuoteElement, M, void, R>, base?: ElBuilder<HTMLQuoteElement, M, void, R>): El<HTMLQuoteElement, M, void, R> { return Verstak.claim(HtmlTags.q, builder, base) }
export function RP<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.rp, builder, base) }
export function RT<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.rt, builder, base) }
export function Ruby<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.ruby, builder, base) }
export function S<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.s, builder, base) }
export function Samp<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.samp, builder, base) }
export function Script<M = unknown, R = void>(builder?: ElBuilder<HTMLScriptElement, M, void, R>, base?: ElBuilder<HTMLScriptElement, M, void, R>): El<HTMLScriptElement, M, void, R> { return Verstak.claim(HtmlTags.script, builder, base) }
export function Sctn<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.section, builder, base) }
export function Select<M = unknown, R = void>(builder?: ElBuilder<HTMLSelectElement, M, void, R>, base?: ElBuilder<HTMLSelectElement, M, void, R>): El<HTMLSelectElement, M, void, R> { return Verstak.claim(HtmlTags.select, builder, base) }
export function Small<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.small, builder, base) }
export function Source<M = unknown, R = void>(builder?: ElBuilder<HTMLSourceElement, M, void, R>, base?: ElBuilder<HTMLSourceElement, M, void, R>): El<HTMLSourceElement, M, void, R> { return Verstak.claim(HtmlTags.source, builder, base) }
export function Span<M = unknown, R = void>(builder?: ElBuilder<HTMLSpanElement, M, void, R>, base?: ElBuilder<HTMLSpanElement, M, void, R>): El<HTMLSpanElement, M, void, R> { return Verstak.claim(HtmlTags.span, builder, base) }
export function Strong<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.strong, builder, base) }
export function Style<M = unknown, R = void>(builder?: ElBuilder<HTMLStyleElement, M, void, R>, base?: ElBuilder<HTMLStyleElement, M, void, R>): El<HTMLStyleElement, M, void, R> { return Verstak.claim(HtmlTags.style, builder, base) }
export function Sub<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.sub, builder, base) }
export function Summary<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.summary, builder, base) }
export function Sup<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.sup, builder, base) }
export function Tbl<M = unknown, R = void>(builder?: ElBuilder<HTMLTableElement, M, void, R>, base?: ElBuilder<HTMLTableElement, M, void, R>): El<HTMLTableElement, M, void, R> { return Verstak.claim(HtmlTags.table, builder, base) }
export function Template<M = unknown, R = void>(builder?: ElBuilder<HTMLTemplateElement, M, void, R>, base?: ElBuilder<HTMLTemplateElement, M, void, R>): El<HTMLTemplateElement, M, void, R> { return Verstak.claim(HtmlTags.template, builder, base) }
export function TBody<M = unknown, R = void>(builder?: ElBuilder<HTMLTableSectionElement, M, void, R>, base?: ElBuilder<HTMLTableSectionElement, M, void, R>): El<HTMLTableSectionElement, M, void, R> { return Verstak.claim(HtmlTags.tbody, builder, base) }
export function TD<M = unknown, R = void>(builder?: ElBuilder<HTMLTableCellElement, M, void, R>, base?: ElBuilder<HTMLTableCellElement, M, void, R>): El<HTMLTableCellElement, M, void, R> { return Verstak.claim(HtmlTags.td, builder, base) }
export function TextArea<M = unknown, R = void>(builder?: ElBuilder<HTMLTextAreaElement, M, void, R>, base?: ElBuilder<HTMLTextAreaElement, M, void, R>): El<HTMLTextAreaElement, M, void, R> { return Verstak.claim(HtmlTags.textarea, builder, base) }
export function TFoot<M = unknown, R = void>(builder?: ElBuilder<HTMLTableSectionElement, M, void, R>, base?: ElBuilder<HTMLTableSectionElement, M, void, R>): El<HTMLTableSectionElement, M, void, R> { return Verstak.claim(HtmlTags.tfoot, builder, base) }
export function TH<M = unknown, R = void>(builder?: ElBuilder<HTMLTableCellElement, M, void, R>, base?: ElBuilder<HTMLTableCellElement, M, void, R>): El<HTMLTableCellElement, M, void, R> { return Verstak.claim(HtmlTags.th, builder, base) }
export function THead<M = unknown, R = void>(builder?: ElBuilder<HTMLTableSectionElement, M, void, R>, base?: ElBuilder<HTMLTableSectionElement, M, void, R>): El<HTMLTableSectionElement, M, void, R> { return Verstak.claim(HtmlTags.thead, builder, base) }
export function Time<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.time, builder, base) }
export function Title<M = unknown, R = void>(builder?: ElBuilder<HTMLTitleElement, M, void, R>, base?: ElBuilder<HTMLTitleElement, M, void, R>): El<HTMLTitleElement, M, void, R> { return Verstak.claim(HtmlTags.title, builder, base) }
export function TR<M = unknown, R = void>(builder?: ElBuilder<HTMLTableRowElement, M, void, R>, base?: ElBuilder<HTMLTableRowElement, M, void, R>): El<HTMLTableRowElement, M, void, R> { return Verstak.claim(HtmlTags.tr, builder, base) }
export function Track<M = unknown, R = void>(builder?: ElBuilder<HTMLTrackElement, M, void, R>, base?: ElBuilder<HTMLTrackElement, M, void, R>): El<HTMLTrackElement, M, void, R> { return Verstak.claim(HtmlTags.track, builder, base) }
export function U<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.u, builder, base) }
export function UL<M = unknown, R = void>(builder?: ElBuilder<HTMLUListElement, M, void, R>, base?: ElBuilder<HTMLUListElement, M, void, R>): El<HTMLUListElement, M, void, R> { return Verstak.claim(HtmlTags.ul, builder, base) }
export function Var<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.var, builder, base) }
export function Video<M = unknown, R = void>(builder?: ElBuilder<HTMLVideoElement, M, void, R>, base?: ElBuilder<HTMLVideoElement, M, void, R>): El<HTMLVideoElement, M, void, R> { return Verstak.claim(HtmlTags.video, builder, base) }
export function Wbr<M = unknown, R = void>(builder?: ElBuilder<HTMLElement, M, void, R>, base?: ElBuilder<HTMLElement, M, void, R>): El<HTMLElement, M, void, R> { return Verstak.claim(HtmlTags.wbr, builder, base) }

export function Svg<M = unknown, R = void>(builder?: ElBuilder<SVGSVGElement, M, void, R>, base?: ElBuilder<SVGSVGElement, M, void, R>): El<SVGSVGElement, M, void, R> { return Verstak.claim(SvgTags.svg, builder, base) }
export function SvgA<M = unknown, R = void>(builder?: ElBuilder<SVGAElement, M, void, R>, base?: ElBuilder<SVGAElement, M, void, R>): El<SVGAElement, M, void, R> { return Verstak.claim(SvgTags.a, builder, base) }
export function Animate<M = unknown, R = void>(builder?: ElBuilder<SVGAnimateElement, M, void, R>, base?: ElBuilder<SVGAnimateElement, M, void, R>): El<SVGAnimateElement, M, void, R> { return Verstak.claim(SvgTags.animate, builder, base) }
export function AnimateMotion<M = unknown, R = void>(builder?: ElBuilder<SVGAnimateMotionElement, M, void, R>, base?: ElBuilder<SVGAnimateMotionElement, M, void, R>): El<SVGAnimateMotionElement, M, void, R> { return Verstak.claim(SvgTags.animateMotion, builder, base) }
export function AnimateTransform<M = unknown, R = void>(builder?: ElBuilder<SVGAnimateTransformElement, M, void, R>, base?: ElBuilder<SVGAnimateTransformElement, M, void, R>): El<SVGAnimateTransformElement, M, void, R> { return Verstak.claim(SvgTags.animateTransform, builder, base) }
export function Circle<M = unknown, R = void>(builder?: ElBuilder<SVGCircleElement, M, void, R>, base?: ElBuilder<SVGCircleElement, M, void, R>): El<SVGCircleElement, M, void, R> { return Verstak.claim(SvgTags.circle, builder, base) }
export function ClipPath<M = unknown, R = void>(builder?: ElBuilder<SVGClipPathElement, M, void, R>, base?: ElBuilder<SVGClipPathElement, M, void, R>): El<SVGClipPathElement, M, void, R> { return Verstak.claim(SvgTags.clipPath, builder, base) }
export function Defs<M = unknown, R = void>(builder?: ElBuilder<SVGDefsElement, M, void, R>, base?: ElBuilder<SVGDefsElement, M, void, R>): El<SVGDefsElement, M, void, R> { return Verstak.claim(SvgTags.defs, builder, base) }
export function Desc<M = unknown, R = void>(builder?: ElBuilder<SVGDescElement, M, void, R>, base?: ElBuilder<SVGDescElement, M, void, R>): El<SVGDescElement, M, void, R> { return Verstak.claim(SvgTags.desc, builder, base) }
export function Ellipse<M = unknown, R = void>(builder?: ElBuilder<SVGEllipseElement, M, void, R>, base?: ElBuilder<SVGEllipseElement, M, void, R>): El<SVGEllipseElement, M, void, R> { return Verstak.claim(SvgTags.ellipse, builder, base) }
export function FeBlend<M = unknown, R = void>(builder?: ElBuilder<SVGFEBlendElement, M, void, R>, base?: ElBuilder<SVGFEBlendElement, M, void, R>): El<SVGFEBlendElement, M, void, R> { return Verstak.claim(SvgTags.feBlend, builder, base) }
export function FeColorMatrix<M = unknown, R = void>(builder?: ElBuilder<SVGFEColorMatrixElement, M, void, R>, base?: ElBuilder<SVGFEColorMatrixElement, M, void, R>): El<SVGFEColorMatrixElement, M, void, R> { return Verstak.claim(SvgTags.feColorMatrix, builder, base) }
export function FeComponentTransfer<M = unknown, R = void>(builder?: ElBuilder<SVGFEComponentTransferElement, M, void, R>, base?: ElBuilder<SVGFEComponentTransferElement, M, void, R>): El<SVGFEComponentTransferElement, M, void, R> { return Verstak.claim(SvgTags.feComponentTransfer, builder, base) }
export function FeComposite<M = unknown, R = void>(builder?: ElBuilder<SVGFECompositeElement, M, void, R>, base?: ElBuilder<SVGFECompositeElement, M, void, R>): El<SVGFECompositeElement, M, void, R> { return Verstak.claim(SvgTags.feComposite, builder, base) }
export function FeConvolveMatrix<M = unknown, R = void>(builder?: ElBuilder<SVGFEConvolveMatrixElement, M, void, R>, base?: ElBuilder<SVGFEConvolveMatrixElement, M, void, R>): El<SVGFEConvolveMatrixElement, M, void, R> { return Verstak.claim(SvgTags.feConvolveMatrix, builder, base) }
export function FeDiffuseLighting<M = unknown, R = void>(builder?: ElBuilder<SVGFEDiffuseLightingElement, M, void, R>, base?: ElBuilder<SVGFEDiffuseLightingElement, M, void, R>): El<SVGFEDiffuseLightingElement, M, void, R> { return Verstak.claim(SvgTags.feDiffuseLighting, builder, base) }
export function FeDisplacementMap<M = unknown, R = void>(builder?: ElBuilder<SVGFEDisplacementMapElement, M, void, R>, base?: ElBuilder<SVGFEDisplacementMapElement, M, void, R>): El<SVGFEDisplacementMapElement, M, void, R> { return Verstak.claim(SvgTags.feDisplacementMap, builder, base) }
export function FeDistantLight<M = unknown, R = void>(builder?: ElBuilder<SVGFEDistantLightElement, M, void, R>, base?: ElBuilder<SVGFEDistantLightElement, M, void, R>): El<SVGFEDistantLightElement, M, void, R> { return Verstak.claim(SvgTags.feDistantLight, builder, base) }
export function FeDropShadow<M = unknown, R = void>(builder?: ElBuilder<SVGFEDropShadowElement, M, void, R>, base?: ElBuilder<SVGFEDropShadowElement, M, void, R>): El<SVGFEDropShadowElement, M, void, R> { return Verstak.claim(SvgTags.feDropShadow, builder, base) }
export function FeFlood<M = unknown, R = void>(builder?: ElBuilder<SVGFEFloodElement, M, void, R>, base?: ElBuilder<SVGFEFloodElement, M, void, R>): El<SVGFEFloodElement, M, void, R> { return Verstak.claim(SvgTags.feFlood, builder, base) }
export function FeFuncA<M = unknown, R = void>(builder?: ElBuilder<SVGFEFuncAElement, M, void, R>, base?: ElBuilder<SVGFEFuncAElement, M, void, R>): El<SVGFEFuncAElement, M, void, R> { return Verstak.claim(SvgTags.feFuncA, builder, base) }
export function FeFuncB<M = unknown, R = void>(builder?: ElBuilder<SVGFEFuncBElement, M, void, R>, base?: ElBuilder<SVGFEFuncBElement, M, void, R>): El<SVGFEFuncBElement, M, void, R> { return Verstak.claim(SvgTags.feFuncB, builder, base) }
export function FeFuncG<M = unknown, R = void>(builder?: ElBuilder<SVGFEFuncGElement, M, void, R>, base?: ElBuilder<SVGFEFuncGElement, M, void, R>): El<SVGFEFuncGElement, M, void, R> { return Verstak.claim(SvgTags.feFuncG, builder, base) }
export function FeFuncR<M = unknown, R = void>(builder?: ElBuilder<SVGFEFuncRElement, M, void, R>, base?: ElBuilder<SVGFEFuncRElement, M, void, R>): El<SVGFEFuncRElement, M, void, R> { return Verstak.claim(SvgTags.feFuncR, builder, base) }
export function FeGaussianBlur<M = unknown, R = void>(builder?: ElBuilder<SVGFEGaussianBlurElement, M, void, R>, base?: ElBuilder<SVGFEGaussianBlurElement, M, void, R>): El<SVGFEGaussianBlurElement, M, void, R> { return Verstak.claim(SvgTags.feGaussianBlur, builder, base) }
export function FeImage<M = unknown, R = void>(builder?: ElBuilder<SVGFEImageElement, M, void, R>, base?: ElBuilder<SVGFEImageElement, M, void, R>): El<SVGFEImageElement, M, void, R> { return Verstak.claim(SvgTags.feImage, builder, base) }
export function FeMerge<M = unknown, R = void>(builder?: ElBuilder<SVGFEMergeElement, M, void, R>, base?: ElBuilder<SVGFEMergeElement, M, void, R>): El<SVGFEMergeElement, M, void, R> { return Verstak.claim(SvgTags.feMerge, builder, base) }
export function FeMergeNode<M = unknown, R = void>(builder?: ElBuilder<SVGFEMergeNodeElement, M, void, R>, base?: ElBuilder<SVGFEMergeNodeElement, M, void, R>): El<SVGFEMergeNodeElement, M, void, R> { return Verstak.claim(SvgTags.feMergeNode, builder, base) }
export function FeMorphology<M = unknown, R = void>(builder?: ElBuilder<SVGFEMorphologyElement, M, void, R>, base?: ElBuilder<SVGFEMorphologyElement, M, void, R>): El<SVGFEMorphologyElement, M, void, R> { return Verstak.claim(SvgTags.feMorphology, builder, base) }
export function FeOffset<M = unknown, R = void>(builder?: ElBuilder<SVGFEOffsetElement, M, void, R>, base?: ElBuilder<SVGFEOffsetElement, M, void, R>): El<SVGFEOffsetElement, M, void, R> { return Verstak.claim(SvgTags.feOffset, builder, base) }
export function FePointLight<M = unknown, R = void>(builder?: ElBuilder<SVGFEPointLightElement, M, void, R>, base?: ElBuilder<SVGFEPointLightElement, M, void, R>): El<SVGFEPointLightElement, M, void, R> { return Verstak.claim(SvgTags.fePointLight, builder, base) }
export function FeSpecularLighting<M = unknown, R = void>(builder?: ElBuilder<SVGFESpecularLightingElement, M, void, R>, base?: ElBuilder<SVGFESpecularLightingElement, M, void, R>): El<SVGFESpecularLightingElement, M, void, R> { return Verstak.claim(SvgTags.feSpecularLighting, builder, base) }
export function FeSpotLight<M = unknown, R = void>(builder?: ElBuilder<SVGFESpotLightElement, M, void, R>, base?: ElBuilder<SVGFESpotLightElement, M, void, R>): El<SVGFESpotLightElement, M, void, R> { return Verstak.claim(SvgTags.feSpotLight, builder, base) }
export function FeTile<M = unknown, R = void>(builder?: ElBuilder<SVGFETileElement, M, void, R>, base?: ElBuilder<SVGFETileElement, M, void, R>): El<SVGFETileElement, M, void, R> { return Verstak.claim(SvgTags.feTile, builder, base) }
export function FeTurbulence<M = unknown, R = void>(builder?: ElBuilder<SVGFETurbulenceElement, M, void, R>, base?: ElBuilder<SVGFETurbulenceElement, M, void, R>): El<SVGFETurbulenceElement, M, void, R> { return Verstak.claim(SvgTags.feTurbulence, builder, base) }
export function Filter<M = unknown, R = void>(builder?: ElBuilder<SVGFilterElement, M, void, R>, base?: ElBuilder<SVGFilterElement, M, void, R>): El<SVGFilterElement, M, void, R> { return Verstak.claim(SvgTags.filter, builder, base) }
export function ForeignObject<M = unknown, R = void>(builder?: ElBuilder<SVGForeignObjectElement, M, void, R>, base?: ElBuilder<SVGForeignObjectElement, M, void, R>): El<SVGForeignObjectElement, M, void, R> { return Verstak.claim(SvgTags.foreignObject, builder, base) }
export function G<M = unknown, R = void>(builder?: ElBuilder<SVGGElement, M, void, R>, base?: ElBuilder<SVGGElement, M, void, R>): El<SVGGElement, M, void, R> { return Verstak.claim(SvgTags.g, builder, base) }
export function SvgImage<M = unknown, R = void>(builder?: ElBuilder<SVGImageElement, M, void, R>, base?: ElBuilder<SVGImageElement, M, void, R>): El<SVGImageElement, M, void, R> { return Verstak.claim(SvgTags.image, builder, base) }
export function SvgLine<M = unknown, R = void>(builder?: ElBuilder<SVGLineElement, M, void, R>, base?: ElBuilder<SVGLineElement, M, void, R>): El<SVGLineElement, M, void, R> { return Verstak.claim(SvgTags.line, builder, base) }
export function LinearGradient<M = unknown, R = void>(builder?: ElBuilder<SVGLinearGradientElement, M, void, R>, base?: ElBuilder<SVGLinearGradientElement, M, void, R>): El<SVGLinearGradientElement, M, void, R> { return Verstak.claim(SvgTags.linearGradient, builder, base) }
export function Marker<M = unknown, R = void>(builder?: ElBuilder<SVGMarkerElement, M, void, R>, base?: ElBuilder<SVGMarkerElement, M, void, R>): El<SVGMarkerElement, M, void, R> { return Verstak.claim(SvgTags.marker, builder, base) }
export function Mask<M = unknown, R = void>(builder?: ElBuilder<SVGMaskElement, M, void, R>, base?: ElBuilder<SVGMaskElement, M, void, R>): El<SVGMaskElement, M, void, R> { return Verstak.claim(SvgTags.mask, builder, base) }
export function MetaData<M = unknown, R = void>(builder?: ElBuilder<SVGMetadataElement, M, void, R>, base?: ElBuilder<SVGMetadataElement, M, void, R>): El<SVGMetadataElement, M, void, R> { return Verstak.claim(SvgTags.metadata, builder, base) }
export function MPath<M = unknown, R = void>(builder?: ElBuilder<SVGElement, M, void, R>, base?: ElBuilder<SVGElement, M, void, R>): El<SVGElement, M, void, R> { return Verstak.claim(SvgTags.mpath, builder, base) }
export function Path<M = unknown, R = void>(builder?: ElBuilder<SVGPathElement, M, void, R>, base?: ElBuilder<SVGPathElement, M, void, R>): El<SVGPathElement, M, void, R> { return Verstak.claim(SvgTags.path, builder, base) }
export function Pattern<M = unknown, R = void>(builder?: ElBuilder<SVGPatternElement, M, void, R>, base?: ElBuilder<SVGPatternElement, M, void, R>): El<SVGPatternElement, M, void, R> { return Verstak.claim(SvgTags.pattern, builder, base) }
export function Polygon<M = unknown, R = void>(builder?: ElBuilder<SVGPolygonElement, M, void, R>, base?: ElBuilder<SVGPolygonElement, M, void, R>): El<SVGPolygonElement, M, void, R> { return Verstak.claim(SvgTags.polygon, builder, base) }
export function PolyLine<M = unknown, R = void>(builder?: ElBuilder<SVGPolylineElement, M, void, R>, base?: ElBuilder<SVGPolylineElement, M, void, R>): El<SVGPolylineElement, M, void, R> { return Verstak.claim(SvgTags.polyline, builder, base) }
export function RadialGradient<M = unknown, R = void>(builder?: ElBuilder<SVGRadialGradientElement, M, void, R>, base?: ElBuilder<SVGRadialGradientElement, M, void, R>): El<SVGRadialGradientElement, M, void, R> { return Verstak.claim(SvgTags.radialGradient, builder, base) }
export function Rect<M = unknown, R = void>(builder?: ElBuilder<SVGRectElement, M, void, R>, base?: ElBuilder<SVGRectElement, M, void, R>): El<SVGRectElement, M, void, R> { return Verstak.claim(SvgTags.rect, builder, base) }
export function Stop<M = unknown, R = void>(builder?: ElBuilder<SVGStopElement, M, void, R>, base?: ElBuilder<SVGStopElement, M, void, R>): El<SVGStopElement, M, void, R> { return Verstak.claim(SvgTags.stop, builder, base) }
export function SvgSwitch<M = unknown, R = void>(builder?: ElBuilder<SVGSwitchElement, M, void, R>, base?: ElBuilder<SVGSwitchElement, M, void, R>): El<SVGSwitchElement, M, void, R> { return Verstak.claim(SvgTags.switch, builder, base) }
export function Symbol<M = unknown, R = void>(builder?: ElBuilder<SVGSymbolElement, M, void, R>, base?: ElBuilder<SVGSymbolElement, M, void, R>): El<SVGSymbolElement, M, void, R> { return Verstak.claim(SvgTags.symbol, builder, base) }
export function Text<M = unknown, R = void>(builder?: ElBuilder<SVGTextElement, M, void, R>, base?: ElBuilder<SVGTextElement, M, void, R>): El<SVGTextElement, M, void, R> { return Verstak.claim(SvgTags.text, builder, base) }
export function TextPath<M = unknown, R = void>(builder?: ElBuilder<SVGTextPathElement, M, void, R>, base?: ElBuilder<SVGTextPathElement, M, void, R>): El<SVGTextPathElement, M, void, R> { return Verstak.claim(SvgTags.textPath, builder, base) }
export function TSpan<M = unknown, R = void>(builder?: ElBuilder<SVGTSpanElement, M, void, R>, base?: ElBuilder<SVGTSpanElement, M, void, R>): El<SVGTSpanElement, M, void, R> { return Verstak.claim(SvgTags.tspan, builder, base) }
export function Use<M = unknown, R = void>(builder?: ElBuilder<SVGUseElement, M, void, R>, base?: ElBuilder<SVGUseElement, M, void, R>): El<SVGUseElement, M, void, R> { return Verstak.claim(SvgTags.use, builder, base) }
export function View<M = unknown, R = void>(builder?: ElBuilder<SVGViewElement, M, void, R>, base?: ElBuilder<SVGViewElement, M, void, R>): El<SVGViewElement, M, void, R> { return Verstak.claim(SvgTags.view, builder, base) }

const HtmlTags = {
  a: new HtmlDriver<HTMLAnchorElement>("a", false, el => el.kind = ElKind.Native),
  abbr: new HtmlDriver<HTMLElement>("abbr", false, el => el.kind = ElKind.Native),
  address: new HtmlDriver<HTMLElement>("address", false, el => el.kind = ElKind.Native),
  area: new HtmlDriver<HTMLAreaElement>("area", false, el => el.kind = ElKind.Native),
  article: new HtmlDriver<HTMLElement>("article", false, el => el.kind = ElKind.Native),
  aside: new HtmlDriver<HTMLElement>("aside", false, el => el.kind = ElKind.Native),
  audio: new HtmlDriver<HTMLAudioElement>("audio", false, el => el.kind = ElKind.Native),
  b: new HtmlDriver<HTMLElement>("b", false, el => el.kind = ElKind.Native),
  base: new HtmlDriver<HTMLBaseElement>("base", false, el => el.kind = ElKind.Native),
  bdi: new HtmlDriver<HTMLElement>("bdi", false, el => el.kind = ElKind.Native),
  bdo: new HtmlDriver<HTMLElement>("bdo", false, el => el.kind = ElKind.Native),
  big: new HtmlDriver<HTMLElement>("big", false, el => el.kind = ElKind.Native),
  blockquote: new HtmlDriver<HTMLElement>("blockquote", false, el => el.kind = ElKind.Native),
  body: new HtmlDriver<HTMLBodyElement>("body", false, el => el.kind = ElKind.Native),
  br: new HtmlDriver<HTMLBRElement>("br", false, el => el.kind = ElKind.Native),
  button: new HtmlDriver<HTMLButtonElement>("button", false, el => el.kind = ElKind.Native),
  canvas: new HtmlDriver<HTMLCanvasElement>("canvas", false, el => el.kind = ElKind.Native),
  caption: new HtmlDriver<HTMLTableCaptionElement>("caption", false, el => el.kind = ElKind.Native),
  cite: new HtmlDriver<HTMLElement>("cite", false, el => el.kind = ElKind.Native),
  code: new HtmlDriver<HTMLElement>("code", false, el => el.kind = ElKind.Native),
  col: new HtmlDriver<HTMLTableColElement>("col", false, el => el.kind = ElKind.Native),
  colgroup: new HtmlDriver<HTMLTableColElement>("colgroup", false, el => el.kind = ElKind.Native),
  data: new HtmlDriver<HTMLDataElement>("data", false, el => el.kind = ElKind.Native),
  datalist: new HtmlDriver<HTMLDataListElement>("datalist", false, el => el.kind = ElKind.Native),
  dd: new HtmlDriver<HTMLElement>("dd", false, el => el.kind = ElKind.Native),
  del: new HtmlDriver<HTMLElement>("del", false, el => el.kind = ElKind.Native),
  details: new HtmlDriver<HTMLElement>("details", false, el => el.kind = ElKind.Native),
  dfn: new HtmlDriver<HTMLElement>("dfn", false, el => el.kind = ElKind.Native),
  div: new HtmlDriver<HTMLDivElement>("div", false, el => el.kind = ElKind.Native),
  dl: new HtmlDriver<HTMLDListElement>("dl", false, el => el.kind = ElKind.Native),
  dt: new HtmlDriver<HTMLElement>("dt", false, el => el.kind = ElKind.Native),
  em: new HtmlDriver<HTMLElement>("em", false, el => el.kind = ElKind.Native),
  embed: new HtmlDriver<HTMLEmbedElement>("embed", false, el => el.kind = ElKind.Native),
  fieldset: new HtmlDriver<HTMLFieldSetElement>("fieldset", false, el => el.kind = ElKind.Native),
  figcaption: new HtmlDriver<HTMLElement>("figcaption", false, el => el.kind = ElKind.Native),
  figure: new HtmlDriver<HTMLElement>("figure", false, el => el.kind = ElKind.Native),
  footer: new HtmlDriver<HTMLElement>("footer", false, el => el.kind = ElKind.Native),
  form: new HtmlDriver<HTMLFormElement>("form", false, el => el.kind = ElKind.Native),
  h1: new HtmlDriver<HTMLHeadingElement>("h1", false, el => el.kind = ElKind.Native),
  h2: new HtmlDriver<HTMLHeadingElement>("h2", false, el => el.kind = ElKind.Native),
  h3: new HtmlDriver<HTMLHeadingElement>("h3", false, el => el.kind = ElKind.Native),
  h4: new HtmlDriver<HTMLHeadingElement>("h4", false, el => el.kind = ElKind.Native),
  h5: new HtmlDriver<HTMLHeadingElement>("h5", false, el => el.kind = ElKind.Native),
  h6: new HtmlDriver<HTMLHeadingElement>("h6", false, el => el.kind = ElKind.Native),
  head: new HtmlDriver<HTMLHeadElement>("head", false, el => el.kind = ElKind.Native),
  header: new HtmlDriver<HTMLElement>("header", false, el => el.kind = ElKind.Native),
  hgroup: new HtmlDriver<HTMLElement>("hgroup", false, el => el.kind = ElKind.Native),
  hr: new HtmlDriver<HTMLHRElement>("hr", false, el => el.kind = ElKind.Native),
  html: new HtmlDriver<HTMLHtmlElement>("html", false, el => el.kind = ElKind.Native),
  i: new HtmlDriver<HTMLElement>("i", false, el => el.kind = ElKind.Native),
  iframe: new HtmlDriver<HTMLIFrameElement>("iframe", false, el => el.kind = ElKind.Native),
  img: new HtmlDriver<HTMLImageElement>("img", false, el => el.kind = ElKind.Native),
  input: new HtmlDriver<HTMLInputElement>("input", false, el => el.kind = ElKind.Native),
  ins: new HtmlDriver<HTMLModElement>("ins", false, el => el.kind = ElKind.Native),
  kbd: new HtmlDriver<HTMLElement>("kbd", false, el => el.kind = ElKind.Native),
  keygen: new HtmlDriver<HTMLElement>("keygen", false, el => el.kind = ElKind.Native),
  label: new HtmlDriver<HTMLLabelElement>("label", false, el => el.kind = ElKind.Native),
  legend: new HtmlDriver<HTMLLegendElement>("legend", false, el => el.kind = ElKind.Native),
  li: new HtmlDriver<HTMLLIElement>("li", false, el => el.kind = ElKind.Native),
  link: new HtmlDriver<HTMLLinkElement>("link", false, el => el.kind = ElKind.Native),
  main: new HtmlDriver<HTMLElement>("main", false, el => el.kind = ElKind.Native),
  map: new HtmlDriver<HTMLMapElement>("map", false, el => el.kind = ElKind.Native),
  mark: new HtmlDriver<HTMLElement>("mark", false, el => el.kind = ElKind.Native),
  menu: new HtmlDriver<HTMLElement>("menu", false, el => el.kind = ElKind.Native),
  menuitem: new HtmlDriver<HTMLElement>("menuitem", false, el => el.kind = ElKind.Native),
  meta: new HtmlDriver<HTMLMetaElement>("meta", false, el => el.kind = ElKind.Native),
  meter: new HtmlDriver<HTMLElement>("meter", false, el => el.kind = ElKind.Native),
  nav: new HtmlDriver<HTMLElement>("nav", false, el => el.kind = ElKind.Native),
  noindex: new HtmlDriver<HTMLElement>("noindex", false, el => el.kind = ElKind.Native),
  noscript: new HtmlDriver<HTMLElement>("noscript", false, el => el.kind = ElKind.Native),
  object: new HtmlDriver<HTMLObjectElement>("object", false, el => el.kind = ElKind.Native),
  ol: new HtmlDriver<HTMLOListElement>("ol", false, el => el.kind = ElKind.Native),
  optgroup: new HtmlDriver<HTMLOptGroupElement>("optgroup", false, el => el.kind = ElKind.Native),
  option: new HtmlDriver<HTMLOptionElement>("option", false, el => el.kind = ElKind.Native),
  output: new HtmlDriver<HTMLElement>("output", false, el => el.kind = ElKind.Native),
  p: new HtmlDriver<HTMLParagraphElement>("p", false, el => el.kind = ElKind.Native),
  param: new HtmlDriver<HTMLElement>("param", false, el => el.kind = ElKind.Native),
  picture: new HtmlDriver<HTMLElement>("picture", false, el => el.kind = ElKind.Native),
  pre: new HtmlDriver<HTMLPreElement>("pre", false, el => el.kind = ElKind.Native),
  progress: new HtmlDriver<HTMLProgressElement>("progress", false, el => el.kind = ElKind.Native),
  q: new HtmlDriver<HTMLQuoteElement>("q", false, el => el.kind = ElKind.Native),
  rp: new HtmlDriver<HTMLElement>("rp", false, el => el.kind = ElKind.Native),
  rt: new HtmlDriver<HTMLElement>("rt", false, el => el.kind = ElKind.Native),
  ruby: new HtmlDriver<HTMLElement>("ruby", false, el => el.kind = ElKind.Native),
  s: new HtmlDriver<HTMLElement>("s", false, el => el.kind = ElKind.Native),
  samp: new HtmlDriver<HTMLElement>("samp", false, el => el.kind = ElKind.Native),
  script: new HtmlDriver<HTMLScriptElement>("script", false, el => el.kind = ElKind.Native),
  section: new HtmlDriver<HTMLElement>("section", false, el => el.kind = ElKind.Native),
  select: new HtmlDriver<HTMLSelectElement>("select", false, el => el.kind = ElKind.Native),
  small: new HtmlDriver<HTMLElement>("small", false, el => el.kind = ElKind.Native),
  source: new HtmlDriver<HTMLSourceElement>("source", false, el => el.kind = ElKind.Native),
  span: new HtmlDriver<HTMLSpanElement>("span", false, el => el.kind = ElKind.Native),
  strong: new HtmlDriver<HTMLElement>("strong", false, el => el.kind = ElKind.Native),
  style: new HtmlDriver<HTMLStyleElement>("style", false, el => el.kind = ElKind.Native),
  sub: new HtmlDriver<HTMLElement>("sub", false, el => el.kind = ElKind.Native),
  summary: new HtmlDriver<HTMLElement>("summary", false, el => el.kind = ElKind.Native),
  sup: new HtmlDriver<HTMLElement>("sup", false, el => el.kind = ElKind.Native),
  table: new HtmlDriver<HTMLTableElement>("table", false, el => el.kind = ElKind.Native),
  template: new HtmlDriver<HTMLTemplateElement>("template", false, el => el.kind = ElKind.Native),
  tbody: new HtmlDriver<HTMLTableSectionElement>("tbody", false, el => el.kind = ElKind.Native),
  td: new HtmlDriver<HTMLTableCellElement>("td", false, el => el.kind = ElKind.Native),
  textarea: new HtmlDriver<HTMLTextAreaElement>("textarea", false, el => el.kind = ElKind.Native),
  tfoot: new HtmlDriver<HTMLTableSectionElement>("tfoot", false, el => el.kind = ElKind.Native),
  th: new HtmlDriver<HTMLTableCellElement>("th", false, el => el.kind = ElKind.Native),
  thead: new HtmlDriver<HTMLTableSectionElement>("thead", false, el => el.kind = ElKind.Native),
  time: new HtmlDriver<HTMLElement>("time", false, el => el.kind = ElKind.Native),
  title: new HtmlDriver<HTMLTitleElement>("title", false, el => el.kind = ElKind.Native),
  tr: new HtmlDriver<HTMLTableRowElement>("tr", false, el => el.kind = ElKind.Native),
  track: new HtmlDriver<HTMLTrackElement>("track", false, el => el.kind = ElKind.Native),
  u: new HtmlDriver<HTMLElement>("u", false, el => el.kind = ElKind.Native),
  ul: new HtmlDriver<HTMLUListElement>("ul", false, el => el.kind = ElKind.Native),
  var: new HtmlDriver<HTMLElement>("var", false, el => el.kind = ElKind.Native),
  video: new HtmlDriver<HTMLVideoElement>("video", false, el => el.kind = ElKind.Native),
  wbr: new HtmlDriver<HTMLElement>("wbr", false, el => el.kind = ElKind.Native),
  // webview: new HtmlNodeFactory<HTMLWebViewElement>('webview', ElKind.Section),
}

const SvgTags = {
  svg: new SvgDriver<SVGSVGElement>("svg", false, el => el.kind = ElKind.Native),
  a: new SvgDriver<SVGAElement>("a", false, el => el.kind = ElKind.Native),
  animate: new SvgDriver<SVGAnimateElement>("animate", false, el => el.kind = ElKind.Native),
  animateMotion: new SvgDriver<SVGAnimateMotionElement>("animateMotion", false, el => el.kind = ElKind.Native),
  animateTransform: new SvgDriver<SVGAnimateTransformElement>("animateTransform", false, el => el.kind = ElKind.Native),
  circle: new SvgDriver<SVGCircleElement>("circle", false, el => el.kind = ElKind.Native),
  clipPath: new SvgDriver<SVGClipPathElement>("clipPath", false, el => el.kind = ElKind.Native),
  defs: new SvgDriver<SVGDefsElement>("defs", false, el => el.kind = ElKind.Native),
  desc: new SvgDriver<SVGDescElement>("desc", false, el => el.kind = ElKind.Native),
  ellipse: new SvgDriver<SVGEllipseElement>("ellipse", false, el => el.kind = ElKind.Native),
  feBlend: new SvgDriver<SVGFEBlendElement>("feBlend", false, el => el.kind = ElKind.Native),
  feColorMatrix: new SvgDriver<SVGFEColorMatrixElement>("feColorMatrix", false, el => el.kind = ElKind.Native),
  feComponentTransfer: new SvgDriver<SVGFEComponentTransferElement>("feComponentTransfer", false, el => el.kind = ElKind.Native),
  feComposite: new SvgDriver<SVGFECompositeElement>("feComposite", false, el => el.kind = ElKind.Native),
  feConvolveMatrix: new SvgDriver<SVGFEConvolveMatrixElement>("feConvolveMatrix", false, el => el.kind = ElKind.Native),
  feDiffuseLighting: new SvgDriver<SVGFEDiffuseLightingElement>("feDiffuseLighting", false, el => el.kind = ElKind.Native),
  feDisplacementMap: new SvgDriver<SVGFEDisplacementMapElement>("feDisplacementMap", false, el => el.kind = ElKind.Native),
  feDistantLight: new SvgDriver<SVGFEDistantLightElement>("feDistantLight", false, el => el.kind = ElKind.Native),
  feDropShadow: new SvgDriver<SVGFEDropShadowElement>("feDropShadow", false, el => el.kind = ElKind.Native),
  feFlood: new SvgDriver<SVGFEFloodElement>("feFlood", false, el => el.kind = ElKind.Native),
  feFuncA: new SvgDriver<SVGFEFuncAElement>("feFuncA", false, el => el.kind = ElKind.Native),
  feFuncB: new SvgDriver<SVGFEFuncBElement>("feFuncB", false, el => el.kind = ElKind.Native),
  feFuncG: new SvgDriver<SVGFEFuncGElement>("feFuncG", false, el => el.kind = ElKind.Native),
  feFuncR: new SvgDriver<SVGFEFuncRElement>("feFuncR", false, el => el.kind = ElKind.Native),
  feGaussianBlur: new SvgDriver<SVGFEGaussianBlurElement>("feGaussianBlur", false, el => el.kind = ElKind.Native),
  feImage: new SvgDriver<SVGFEImageElement>("feImage", false, el => el.kind = ElKind.Native),
  feMerge: new SvgDriver<SVGFEMergeElement>("feMerge", false, el => el.kind = ElKind.Native),
  feMergeNode: new SvgDriver<SVGFEMergeNodeElement>("feMergeNode", false, el => el.kind = ElKind.Native),
  feMorphology: new SvgDriver<SVGFEMorphologyElement>("feMorphology", false, el => el.kind = ElKind.Native),
  feOffset: new SvgDriver<SVGFEOffsetElement>("feOffset", false, el => el.kind = ElKind.Native),
  fePointLight: new SvgDriver<SVGFEPointLightElement>("fePointLight", false, el => el.kind = ElKind.Native),
  feSpecularLighting: new SvgDriver<SVGFESpecularLightingElement>("feSpecularLighting", false, el => el.kind = ElKind.Native),
  feSpotLight: new SvgDriver<SVGFESpotLightElement>("feSpotLight", false, el => el.kind = ElKind.Native),
  feTile: new SvgDriver<SVGFETileElement>("feTile", false, el => el.kind = ElKind.Native),
  feTurbulence: new SvgDriver<SVGFETurbulenceElement>("feTurbulence", false, el => el.kind = ElKind.Native),
  filter: new SvgDriver<SVGFilterElement>("filter", false, el => el.kind = ElKind.Native),
  foreignObject: new SvgDriver<SVGForeignObjectElement>("foreignObject", false, el => el.kind = ElKind.Native),
  g: new SvgDriver<SVGGElement>("g", false, el => el.kind = ElKind.Native),
  image: new SvgDriver<SVGImageElement>("image", false, el => el.kind = ElKind.Native),
  line: new SvgDriver<SVGLineElement>("line", false, el => el.kind = ElKind.Native),
  linearGradient: new SvgDriver<SVGLinearGradientElement>("linearGradient", false, el => el.kind = ElKind.Native),
  marker: new SvgDriver<SVGMarkerElement>("marker", false, el => el.kind = ElKind.Native),
  mask: new SvgDriver<SVGMaskElement>("mask", false, el => el.kind = ElKind.Native),
  metadata: new SvgDriver<SVGMetadataElement>("metadata", false, el => el.kind = ElKind.Native),
  mpath: new SvgDriver<SVGElement>("mpath", false, el => el.kind = ElKind.Native),
  path: new SvgDriver<SVGPathElement>("path", false, el => el.kind = ElKind.Native),
  pattern: new SvgDriver<SVGPatternElement>("pattern", false, el => el.kind = ElKind.Native),
  polygon: new SvgDriver<SVGPolygonElement>("polygon", false, el => el.kind = ElKind.Native),
  polyline: new SvgDriver<SVGPolylineElement>("polyline", false, el => el.kind = ElKind.Native),
  radialGradient: new SvgDriver<SVGRadialGradientElement>("radialGradient", false, el => el.kind = ElKind.Native),
  rect: new SvgDriver<SVGRectElement>("rect", false, el => el.kind = ElKind.Native),
  stop: new SvgDriver<SVGStopElement>("stop", false, el => el.kind = ElKind.Native),
  switch: new SvgDriver<SVGSwitchElement>("switch", false, el => el.kind = ElKind.Native),
  symbol: new SvgDriver<SVGSymbolElement>("symbol", false, el => el.kind = ElKind.Native),
  text: new SvgDriver<SVGTextElement>("text", false, el => el.kind = ElKind.Native),
  textPath: new SvgDriver<SVGTextPathElement>("textPath", false, el => el.kind = ElKind.Native),
  tspan: new SvgDriver<SVGTSpanElement>("tspan", false, el => el.kind = ElKind.Native),
  use: new SvgDriver<SVGUseElement>("use", false, el => el.kind = ElKind.Native),
  view: new SvgDriver<SVGViewElement>("view", false, el => el.kind = ElKind.Native),
}
