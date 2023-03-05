// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { VBlock, StaticDriver, Layout, BlockBody } from "../core/api"
import { HtmlDriver, SvgDriver } from "./HtmlDriver"

export function HtmlBody(body?: BlockBody<HTMLElement>, base?: BlockBody<HTMLElement>): VBlock<HTMLElement> {
  const driver = new StaticDriver(global.document.body, "HtmlBody", false, b => b.childrenLayout = Layout.Chain)
  return VBlock.claim(driver, body, base)
}

export function A<M = unknown, R = void>(body?: BlockBody<HTMLAnchorElement, M, void, R>, base?: BlockBody<HTMLAnchorElement, M, void, R>): VBlock<HTMLAnchorElement, M, void, R> { return VBlock.claim(HtmlTags.a, body, base) }
export function Abbr<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.abbr, body, base) }
export function Address<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.address, body, base) }
export function Area<M = unknown, R = void>(body?: BlockBody<HTMLAreaElement, M, void, R>, base?: BlockBody<HTMLAreaElement, M, void, R>): VBlock<HTMLAreaElement, M, void, R> { return VBlock.claim(HtmlTags.area, body, base) }
export function Article<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.article, body, base) }
export function Aside<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.aside, body, base) }
export function Audio<M = unknown, R = void>(body?: BlockBody<HTMLAudioElement, M, void, R>, base?: BlockBody<HTMLAudioElement, M, void, R>): VBlock<HTMLAudioElement, M, void, R> { return VBlock.claim(HtmlTags.audio, body, base) }
export function B<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.b, body, base) }
export function Base<M = unknown, R = void>(body?: BlockBody<HTMLBaseElement, M, void, R>, base?: BlockBody<HTMLBaseElement, M, void, R>): VBlock<HTMLBaseElement, M, void, R> { return VBlock.claim(HtmlTags.base, body, base) }
export function Bdi<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.bdi, body, base) }
export function Bdo<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.bdo, body, base) }
export function Big<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.big, body, base) }
export function BlockQuote<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.blockquote, body, base) }
export function Body<M = unknown, R = void>(body?: BlockBody<HTMLBodyElement, M, void, R>, base?: BlockBody<HTMLBodyElement, M, void, R>): VBlock<HTMLBodyElement, M, void, R> { return VBlock.claim(HtmlTags.body, body, base) }
export function BR<M = unknown, R = void>(body?: BlockBody<HTMLBRElement, M, void, R>, base?: BlockBody<HTMLBRElement, M, void, R>): VBlock<HTMLBRElement, M, void, R> { return VBlock.claim(HtmlTags.br, body, base) }
export function Button<M = unknown, R = void>(body?: BlockBody<HTMLButtonElement, M, void, R>, base?: BlockBody<HTMLButtonElement, M, void, R>): VBlock<HTMLButtonElement, M, void, R> { return VBlock.claim(HtmlTags.button, body, base) }
export function Canvas<M = unknown, R = void>(body?: BlockBody<HTMLCanvasElement, M, void, R>, base?: BlockBody<HTMLCanvasElement, M, void, R>): VBlock<HTMLCanvasElement, M, void, R> { return VBlock.claim(HtmlTags.canvas, body, base) }
export function Caption<M = unknown, R = void>(body?: BlockBody<HTMLTableCaptionElement, M, void, R>, base?: BlockBody<HTMLTableCaptionElement, M, void, R>): VBlock<HTMLTableCaptionElement, M, void, R> { return VBlock.claim(HtmlTags.caption, body, base) }
export function Cite<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.cite, body, base) }
export function Code<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.code, body, base) }
export function Col<M = unknown, R = void>(body?: BlockBody<HTMLTableColElement, M, void, R>, base?: BlockBody<HTMLTableColElement, M, void, R>): VBlock<HTMLTableColElement, M, void, R> { return VBlock.claim(HtmlTags.col, body, base) }
export function ColGroup<M = unknown, R = void>(body?: BlockBody<HTMLTableColElement, M, void, R>, base?: BlockBody<HTMLTableColElement, M, void, R>): VBlock<HTMLTableColElement, M, void, R> { return VBlock.claim(HtmlTags.colgroup, body, base) }
export function Data<M = unknown, R = void>(body?: BlockBody<HTMLDataElement, M, void, R>, base?: BlockBody<HTMLDataElement, M, void, R>): VBlock<HTMLDataElement, M, void, R> { return VBlock.claim(HtmlTags.data, body, base) }
export function DataList<M = unknown, R = void>(body?: BlockBody<HTMLDataListElement, M, void, R>, base?: BlockBody<HTMLDataListElement, M, void, R>): VBlock<HTMLDataListElement, M, void, R> { return VBlock.claim(HtmlTags.datalist, body, base) }
export function DD<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.dd, body, base) }
export function Del<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.del, body, base) }
export function Details<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.details, body, base) }
export function Dfn<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.dfn, body, base) }
export function Div<M = unknown, R = void>(body?: BlockBody<HTMLDivElement, M, void, R>, base?: BlockBody<HTMLDivElement, M, void, R>): VBlock<HTMLDivElement, M, void, R> { return VBlock.claim(HtmlTags.div, body, base) }
export function DL<M = unknown, R = void>(body?: BlockBody<HTMLDListElement, M, void, R>, base?: BlockBody<HTMLDListElement, M, void, R>): VBlock<HTMLDListElement, M, void, R> { return VBlock.claim(HtmlTags.dl, body, base) }
export function DT<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.dt, body, base) }
export function EM<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.em, body, base) }
export function Embed<M = unknown, R = void>(body?: BlockBody<HTMLEmbedElement, M, void, R>, base?: BlockBody<HTMLEmbedElement, M, void, R>): VBlock<HTMLEmbedElement, M, void, R> { return VBlock.claim(HtmlTags.embed, body, base) }
export function FieldSet<M = unknown, R = void>(body?: BlockBody<HTMLFieldSetElement, M, void, R>, base?: BlockBody<HTMLFieldSetElement, M, void, R>): VBlock<HTMLFieldSetElement, M, void, R> { return VBlock.claim(HtmlTags.fieldset, body, base) }
export function FigCaption<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.figcaption, body, base) }
export function Figure<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.figure, body, base) }
export function Footer<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.footer, body, base) }
export function Form<M = unknown, R = void>(body?: BlockBody<HTMLFormElement, M, void, R>, base?: BlockBody<HTMLFormElement, M, void, R>): VBlock<HTMLFormElement, M, void, R> { return VBlock.claim(HtmlTags.form, body, base) }
export function H1<M = unknown, R = void>(body?: BlockBody<HTMLHeadingElement, M, void, R>, base?: BlockBody<HTMLHeadingElement, M, void, R>): VBlock<HTMLHeadingElement, M, void, R> { return VBlock.claim(HtmlTags.h1, body, base) }
export function H2<M = unknown, R = void>(body?: BlockBody<HTMLHeadingElement, M, void, R>, base?: BlockBody<HTMLHeadingElement, M, void, R>): VBlock<HTMLHeadingElement, M, void, R> { return VBlock.claim(HtmlTags.h2, body, base) }
export function H3<M = unknown, R = void>(body?: BlockBody<HTMLHeadingElement, M, void, R>, base?: BlockBody<HTMLHeadingElement, M, void, R>): VBlock<HTMLHeadingElement, M, void, R> { return VBlock.claim(HtmlTags.h3, body, base) }
export function H4<M = unknown, R = void>(body?: BlockBody<HTMLHeadingElement, M, void, R>, base?: BlockBody<HTMLHeadingElement, M, void, R>): VBlock<HTMLHeadingElement, M, void, R> { return VBlock.claim(HtmlTags.h4, body, base) }
export function H5<M = unknown, R = void>(body?: BlockBody<HTMLHeadingElement, M, void, R>, base?: BlockBody<HTMLHeadingElement, M, void, R>): VBlock<HTMLHeadingElement, M, void, R> { return VBlock.claim(HtmlTags.h5, body, base) }
export function H6<M = unknown, R = void>(body?: BlockBody<HTMLHeadingElement, M, void, R>, base?: BlockBody<HTMLHeadingElement, M, void, R>): VBlock<HTMLHeadingElement, M, void, R> { return VBlock.claim(HtmlTags.h6, body, base) }
export function Head<M = unknown, R = void>(body?: BlockBody<HTMLHeadElement, M, void, R>, base?: BlockBody<HTMLHeadElement, M, void, R>): VBlock<HTMLHeadElement, M, void, R> { return VBlock.claim(HtmlTags.head, body, base) }
export function Header<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.header, body, base) }
export function HGroup<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.hgroup, body, base) }
export function HR<M = unknown, R = void>(body?: BlockBody<HTMLHRElement, M, void, R>, base?: BlockBody<HTMLHRElement, M, void, R>): VBlock<HTMLHRElement, M, void, R> { return VBlock.claim(HtmlTags.hr, body, base) }
export function Html<M = unknown, R = void>(body?: BlockBody<HTMLHtmlElement, M, void, R>, base?: BlockBody<HTMLHtmlElement, M, void, R>): VBlock<HTMLHtmlElement, M, void, R> { return VBlock.claim(HtmlTags.html, body, base) }
export function I<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.i, body, base) }
export function IFrame<M = unknown, R = void>(body?: BlockBody<HTMLIFrameElement, M, void, R>, base?: BlockBody<HTMLIFrameElement, M, void, R>): VBlock<HTMLIFrameElement, M, void, R> { return VBlock.claim(HtmlTags.iframe, body, base) }
export function Img<M = unknown, R = void>(body?: BlockBody<HTMLImageElement, M, void, R>, base?: BlockBody<HTMLImageElement, M, void, R>): VBlock<HTMLImageElement, M, void, R> { return VBlock.claim(HtmlTags.img, body, base) }
export function Input<M = unknown, R = void>(body?: BlockBody<HTMLInputElement, M, void, R>, base?: BlockBody<HTMLInputElement, M, void, R>): VBlock<HTMLInputElement, M, void, R> { return VBlock.claim(HtmlTags.input, body, base) }
export function Ins<M = unknown, R = void>(body?: BlockBody<HTMLModElement, M, void, R>, base?: BlockBody<HTMLModElement, M, void, R>): VBlock<HTMLModElement, M, void, R> { return VBlock.claim(HtmlTags.ins, body, base) }
export function Kbd<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.kbd, body, base) }
export function KeyGen<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.keygen, body, base) }
export function Label<M = unknown, R = void>(body?: BlockBody<HTMLLabelElement, M, void, R>, base?: BlockBody<HTMLLabelElement, M, void, R>): VBlock<HTMLLabelElement, M, void, R> { return VBlock.claim(HtmlTags.label, body, base) }
export function Legend<M = unknown, R = void>(body?: BlockBody<HTMLLegendElement, M, void, R>, base?: BlockBody<HTMLLegendElement, M, void, R>): VBlock<HTMLLegendElement, M, void, R> { return VBlock.claim(HtmlTags.legend, body, base) }
export function LI<M = unknown, R = void>(body?: BlockBody<HTMLLIElement, M, void, R>, base?: BlockBody<HTMLLIElement, M, void, R>): VBlock<HTMLLIElement, M, void, R> { return VBlock.claim(HtmlTags.li, body, base) }
export function Link<M = unknown, R = void>(body?: BlockBody<HTMLLinkElement, M, void, R>, base?: BlockBody<HTMLLinkElement, M, void, R>): VBlock<HTMLLinkElement, M, void, R> { return VBlock.claim(HtmlTags.link, body, base) }
export function Main<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.main, body, base) }
export function Map<M = unknown, R = void>(body?: BlockBody<HTMLMapElement, M, void, R>, base?: BlockBody<HTMLMapElement, M, void, R>): VBlock<HTMLMapElement, M, void, R> { return VBlock.claim(HtmlTags.map, body, base) }
export function Mark<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.mark, body, base) }
export function Menu<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.menu, body, base) }
export function MenuItem<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.menuitem, body, base) }
export function Meta<M = unknown, R = void>(body?: BlockBody<HTMLMetaElement, M, void, R>, base?: BlockBody<HTMLMetaElement, M, void, R>): VBlock<HTMLMetaElement, M, void, R> { return VBlock.claim(HtmlTags.meta, body, base) }
export function Meter<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.meter, body, base) }
export function Nav<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.nav, body, base) }
export function NoIndex<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.noindex, body, base) }
export function NoScript<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.noscript, body, base) }
export function Obj<M = unknown, R = void>(body?: BlockBody<HTMLObjectElement, M, void, R>, base?: BlockBody<HTMLObjectElement, M, void, R>): VBlock<HTMLObjectElement, M, void, R> { return VBlock.claim(HtmlTags.object, body, base) }
export function OL<M = unknown, R = void>(body?: BlockBody<HTMLOListElement, M, void, R>, base?: BlockBody<HTMLOListElement, M, void, R>): VBlock<HTMLOListElement, M, void, R> { return VBlock.claim(HtmlTags.ol, body, base) }
export function OptGroup<M = unknown, R = void>(body?: BlockBody<HTMLOptGroupElement, M, void, R>, base?: BlockBody<HTMLOptGroupElement, M, void, R>): VBlock<HTMLOptGroupElement, M, void, R> { return VBlock.claim(HtmlTags.optgroup, body, base) }
export function Option<M = unknown, R = void>(body?: BlockBody<HTMLOptionElement, M, void, R>, base?: BlockBody<HTMLOptionElement, M, void, R>): VBlock<HTMLOptionElement, M, void, R> { return VBlock.claim(HtmlTags.option, body, base) }
export function Output<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.output, body, base) }
export function P<M = unknown, R = void>(body?: BlockBody<HTMLParagraphElement, M, void, R>, base?: BlockBody<HTMLParagraphElement, M, void, R>): VBlock<HTMLParagraphElement, M, void, R> { return VBlock.claim(HtmlTags.p, body, base) }
export function Param<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.param, body, base) }
export function Picture<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.picture, body, base) }
export function Pre<M = unknown, R = void>(body?: BlockBody<HTMLPreElement, M, void, R>, base?: BlockBody<HTMLPreElement, M, void, R>): VBlock<HTMLPreElement, M, void, R> { return VBlock.claim(HtmlTags.pre, body, base) }
export function Progress<M = unknown, R = void>(body?: BlockBody<HTMLProgressElement, M, void, R>, base?: BlockBody<HTMLProgressElement, M, void, R>): VBlock<HTMLProgressElement, M, void, R> { return VBlock.claim(HtmlTags.progress, body, base) }
export function Q<M = unknown, R = void>(body?: BlockBody<HTMLQuoteElement, M, void, R>, base?: BlockBody<HTMLQuoteElement, M, void, R>): VBlock<HTMLQuoteElement, M, void, R> { return VBlock.claim(HtmlTags.q, body, base) }
export function RP<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.rp, body, base) }
export function RT<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.rt, body, base) }
export function Ruby<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.ruby, body, base) }
export function S<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.s, body, base) }
export function Samp<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.samp, body, base) }
export function Script<M = unknown, R = void>(body?: BlockBody<HTMLScriptElement, M, void, R>, base?: BlockBody<HTMLScriptElement, M, void, R>): VBlock<HTMLScriptElement, M, void, R> { return VBlock.claim(HtmlTags.script, body, base) }
export function Section<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.section, body, base) }
export function Select<M = unknown, R = void>(body?: BlockBody<HTMLSelectElement, M, void, R>, base?: BlockBody<HTMLSelectElement, M, void, R>): VBlock<HTMLSelectElement, M, void, R> { return VBlock.claim(HtmlTags.select, body, base) }
export function Small<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.small, body, base) }
export function Source<M = unknown, R = void>(body?: BlockBody<HTMLSourceElement, M, void, R>, base?: BlockBody<HTMLSourceElement, M, void, R>): VBlock<HTMLSourceElement, M, void, R> { return VBlock.claim(HtmlTags.source, body, base) }
export function Span<M = unknown, R = void>(body?: BlockBody<HTMLSpanElement, M, void, R>, base?: BlockBody<HTMLSpanElement, M, void, R>): VBlock<HTMLSpanElement, M, void, R> { return VBlock.claim(HtmlTags.span, body, base) }
export function Strong<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.strong, body, base) }
export function Style<M = unknown, R = void>(body?: BlockBody<HTMLStyleElement, M, void, R>, base?: BlockBody<HTMLStyleElement, M, void, R>): VBlock<HTMLStyleElement, M, void, R> { return VBlock.claim(HtmlTags.style, body, base) }
export function Sub<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.sub, body, base) }
export function Summary<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.summary, body, base) }
export function Sup<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.sup, body, base) }
export function Tbl<M = unknown, R = void>(body?: BlockBody<HTMLTableElement, M, void, R>, base?: BlockBody<HTMLTableElement, M, void, R>): VBlock<HTMLTableElement, M, void, R> { return VBlock.claim(HtmlTags.table, body, base) }
export function Template<M = unknown, R = void>(body?: BlockBody<HTMLTemplateElement, M, void, R>, base?: BlockBody<HTMLTemplateElement, M, void, R>): VBlock<HTMLTemplateElement, M, void, R> { return VBlock.claim(HtmlTags.template, body, base) }
export function TBody<M = unknown, R = void>(body?: BlockBody<HTMLTableSectionElement, M, void, R>, base?: BlockBody<HTMLTableSectionElement, M, void, R>): VBlock<HTMLTableSectionElement, M, void, R> { return VBlock.claim(HtmlTags.tbody, body, base) }
export function TD<M = unknown, R = void>(body?: BlockBody<HTMLTableCellElement, M, void, R>, base?: BlockBody<HTMLTableCellElement, M, void, R>): VBlock<HTMLTableCellElement, M, void, R> { return VBlock.claim(HtmlTags.td, body, base) }
export function TextArea<M = unknown, R = void>(body?: BlockBody<HTMLTextAreaElement, M, void, R>, base?: BlockBody<HTMLTextAreaElement, M, void, R>): VBlock<HTMLTextAreaElement, M, void, R> { return VBlock.claim(HtmlTags.textarea, body, base) }
export function TFoot<M = unknown, R = void>(body?: BlockBody<HTMLTableSectionElement, M, void, R>, base?: BlockBody<HTMLTableSectionElement, M, void, R>): VBlock<HTMLTableSectionElement, M, void, R> { return VBlock.claim(HtmlTags.tfoot, body, base) }
export function TH<M = unknown, R = void>(body?: BlockBody<HTMLTableCellElement, M, void, R>, base?: BlockBody<HTMLTableCellElement, M, void, R>): VBlock<HTMLTableCellElement, M, void, R> { return VBlock.claim(HtmlTags.th, body, base) }
export function THead<M = unknown, R = void>(body?: BlockBody<HTMLTableSectionElement, M, void, R>, base?: BlockBody<HTMLTableSectionElement, M, void, R>): VBlock<HTMLTableSectionElement, M, void, R> { return VBlock.claim(HtmlTags.thead, body, base) }
export function Time<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.time, body, base) }
export function Title<M = unknown, R = void>(body?: BlockBody<HTMLTitleElement, M, void, R>, base?: BlockBody<HTMLTitleElement, M, void, R>): VBlock<HTMLTitleElement, M, void, R> { return VBlock.claim(HtmlTags.title, body, base) }
export function TR<M = unknown, R = void>(body?: BlockBody<HTMLTableRowElement, M, void, R>, base?: BlockBody<HTMLTableRowElement, M, void, R>): VBlock<HTMLTableRowElement, M, void, R> { return VBlock.claim(HtmlTags.tr, body, base) }
export function Track<M = unknown, R = void>(body?: BlockBody<HTMLTrackElement, M, void, R>, base?: BlockBody<HTMLTrackElement, M, void, R>): VBlock<HTMLTrackElement, M, void, R> { return VBlock.claim(HtmlTags.track, body, base) }
export function U<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.u, body, base) }
export function UL<M = unknown, R = void>(body?: BlockBody<HTMLUListElement, M, void, R>, base?: BlockBody<HTMLUListElement, M, void, R>): VBlock<HTMLUListElement, M, void, R> { return VBlock.claim(HtmlTags.ul, body, base) }
export function Var<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.var, body, base) }
export function Video<M = unknown, R = void>(body?: BlockBody<HTMLVideoElement, M, void, R>, base?: BlockBody<HTMLVideoElement, M, void, R>): VBlock<HTMLVideoElement, M, void, R> { return VBlock.claim(HtmlTags.video, body, base) }
export function Wbr<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, void, R>, base?: BlockBody<HTMLElement, M, void, R>): VBlock<HTMLElement, M, void, R> { return VBlock.claim(HtmlTags.wbr, body, base) }

export function Svg<M = unknown, R = void>(body?: BlockBody<SVGSVGElement, M, void, R>, base?: BlockBody<SVGSVGElement, M, void, R>): VBlock<SVGSVGElement, M, void, R> { return VBlock.claim(SvgTags.svg, body, base) }
export function SvgA<M = unknown, R = void>(body?: BlockBody<SVGAElement, M, void, R>, base?: BlockBody<SVGAElement, M, void, R>): VBlock<SVGAElement, M, void, R> { return VBlock.claim(SvgTags.a, body, base) }
export function Animate<M = unknown, R = void>(body?: BlockBody<SVGAnimateElement, M, void, R>, base?: BlockBody<SVGAnimateElement, M, void, R>): VBlock<SVGAnimateElement, M, void, R> { return VBlock.claim(SvgTags.animate, body, base) }
export function AnimateMotion<M = unknown, R = void>(body?: BlockBody<SVGAnimateMotionElement, M, void, R>, base?: BlockBody<SVGAnimateMotionElement, M, void, R>): VBlock<SVGAnimateMotionElement, M, void, R> { return VBlock.claim(SvgTags.animateMotion, body, base) }
export function AnimateTransform<M = unknown, R = void>(body?: BlockBody<SVGAnimateTransformElement, M, void, R>, base?: BlockBody<SVGAnimateTransformElement, M, void, R>): VBlock<SVGAnimateTransformElement, M, void, R> { return VBlock.claim(SvgTags.animateTransform, body, base) }
export function Circle<M = unknown, R = void>(body?: BlockBody<SVGCircleElement, M, void, R>, base?: BlockBody<SVGCircleElement, M, void, R>): VBlock<SVGCircleElement, M, void, R> { return VBlock.claim(SvgTags.circle, body, base) }
export function ClipPath<M = unknown, R = void>(body?: BlockBody<SVGClipPathElement, M, void, R>, base?: BlockBody<SVGClipPathElement, M, void, R>): VBlock<SVGClipPathElement, M, void, R> { return VBlock.claim(SvgTags.clipPath, body, base) }
export function Defs<M = unknown, R = void>(body?: BlockBody<SVGDefsElement, M, void, R>, base?: BlockBody<SVGDefsElement, M, void, R>): VBlock<SVGDefsElement, M, void, R> { return VBlock.claim(SvgTags.defs, body, base) }
export function Desc<M = unknown, R = void>(body?: BlockBody<SVGDescElement, M, void, R>, base?: BlockBody<SVGDescElement, M, void, R>): VBlock<SVGDescElement, M, void, R> { return VBlock.claim(SvgTags.desc, body, base) }
export function Ellipse<M = unknown, R = void>(body?: BlockBody<SVGEllipseElement, M, void, R>, base?: BlockBody<SVGEllipseElement, M, void, R>): VBlock<SVGEllipseElement, M, void, R> { return VBlock.claim(SvgTags.ellipse, body, base) }
export function FeBlend<M = unknown, R = void>(body?: BlockBody<SVGFEBlendElement, M, void, R>, base?: BlockBody<SVGFEBlendElement, M, void, R>): VBlock<SVGFEBlendElement, M, void, R> { return VBlock.claim(SvgTags.feBlend, body, base) }
export function FeColorMatrix<M = unknown, R = void>(body?: BlockBody<SVGFEColorMatrixElement, M, void, R>, base?: BlockBody<SVGFEColorMatrixElement, M, void, R>): VBlock<SVGFEColorMatrixElement, M, void, R> { return VBlock.claim(SvgTags.feColorMatrix, body, base) }
export function FeComponentTransfer<M = unknown, R = void>(body?: BlockBody<SVGFEComponentTransferElement, M, void, R>, base?: BlockBody<SVGFEComponentTransferElement, M, void, R>): VBlock<SVGFEComponentTransferElement, M, void, R> { return VBlock.claim(SvgTags.feComponentTransfer, body, base) }
export function FeComposite<M = unknown, R = void>(body?: BlockBody<SVGFECompositeElement, M, void, R>, base?: BlockBody<SVGFECompositeElement, M, void, R>): VBlock<SVGFECompositeElement, M, void, R> { return VBlock.claim(SvgTags.feComposite, body, base) }
export function FeConvolveMatrix<M = unknown, R = void>(body?: BlockBody<SVGFEConvolveMatrixElement, M, void, R>, base?: BlockBody<SVGFEConvolveMatrixElement, M, void, R>): VBlock<SVGFEConvolveMatrixElement, M, void, R> { return VBlock.claim(SvgTags.feConvolveMatrix, body, base) }
export function FeDiffuseLighting<M = unknown, R = void>(body?: BlockBody<SVGFEDiffuseLightingElement, M, void, R>, base?: BlockBody<SVGFEDiffuseLightingElement, M, void, R>): VBlock<SVGFEDiffuseLightingElement, M, void, R> { return VBlock.claim(SvgTags.feDiffuseLighting, body, base) }
export function FeDisplacementMap<M = unknown, R = void>(body?: BlockBody<SVGFEDisplacementMapElement, M, void, R>, base?: BlockBody<SVGFEDisplacementMapElement, M, void, R>): VBlock<SVGFEDisplacementMapElement, M, void, R> { return VBlock.claim(SvgTags.feDisplacementMap, body, base) }
export function FeDistantLight<M = unknown, R = void>(body?: BlockBody<SVGFEDistantLightElement, M, void, R>, base?: BlockBody<SVGFEDistantLightElement, M, void, R>): VBlock<SVGFEDistantLightElement, M, void, R> { return VBlock.claim(SvgTags.feDistantLight, body, base) }
export function FeDropShadow<M = unknown, R = void>(body?: BlockBody<SVGFEDropShadowElement, M, void, R>, base?: BlockBody<SVGFEDropShadowElement, M, void, R>): VBlock<SVGFEDropShadowElement, M, void, R> { return VBlock.claim(SvgTags.feDropShadow, body, base) }
export function FeFlood<M = unknown, R = void>(body?: BlockBody<SVGFEFloodElement, M, void, R>, base?: BlockBody<SVGFEFloodElement, M, void, R>): VBlock<SVGFEFloodElement, M, void, R> { return VBlock.claim(SvgTags.feFlood, body, base) }
export function FeFuncA<M = unknown, R = void>(body?: BlockBody<SVGFEFuncAElement, M, void, R>, base?: BlockBody<SVGFEFuncAElement, M, void, R>): VBlock<SVGFEFuncAElement, M, void, R> { return VBlock.claim(SvgTags.feFuncA, body, base) }
export function FeFuncB<M = unknown, R = void>(body?: BlockBody<SVGFEFuncBElement, M, void, R>, base?: BlockBody<SVGFEFuncBElement, M, void, R>): VBlock<SVGFEFuncBElement, M, void, R> { return VBlock.claim(SvgTags.feFuncB, body, base) }
export function FeFuncG<M = unknown, R = void>(body?: BlockBody<SVGFEFuncGElement, M, void, R>, base?: BlockBody<SVGFEFuncGElement, M, void, R>): VBlock<SVGFEFuncGElement, M, void, R> { return VBlock.claim(SvgTags.feFuncG, body, base) }
export function FeFuncR<M = unknown, R = void>(body?: BlockBody<SVGFEFuncRElement, M, void, R>, base?: BlockBody<SVGFEFuncRElement, M, void, R>): VBlock<SVGFEFuncRElement, M, void, R> { return VBlock.claim(SvgTags.feFuncR, body, base) }
export function FeGaussianBlur<M = unknown, R = void>(body?: BlockBody<SVGFEGaussianBlurElement, M, void, R>, base?: BlockBody<SVGFEGaussianBlurElement, M, void, R>): VBlock<SVGFEGaussianBlurElement, M, void, R> { return VBlock.claim(SvgTags.feGaussianBlur, body, base) }
export function FeImage<M = unknown, R = void>(body?: BlockBody<SVGFEImageElement, M, void, R>, base?: BlockBody<SVGFEImageElement, M, void, R>): VBlock<SVGFEImageElement, M, void, R> { return VBlock.claim(SvgTags.feImage, body, base) }
export function FeMerge<M = unknown, R = void>(body?: BlockBody<SVGFEMergeElement, M, void, R>, base?: BlockBody<SVGFEMergeElement, M, void, R>): VBlock<SVGFEMergeElement, M, void, R> { return VBlock.claim(SvgTags.feMerge, body, base) }
export function FeMergeNode<M = unknown, R = void>(body?: BlockBody<SVGFEMergeNodeElement, M, void, R>, base?: BlockBody<SVGFEMergeNodeElement, M, void, R>): VBlock<SVGFEMergeNodeElement, M, void, R> { return VBlock.claim(SvgTags.feMergeNode, body, base) }
export function FeMorphology<M = unknown, R = void>(body?: BlockBody<SVGFEMorphologyElement, M, void, R>, base?: BlockBody<SVGFEMorphologyElement, M, void, R>): VBlock<SVGFEMorphologyElement, M, void, R> { return VBlock.claim(SvgTags.feMorphology, body, base) }
export function FeOffset<M = unknown, R = void>(body?: BlockBody<SVGFEOffsetElement, M, void, R>, base?: BlockBody<SVGFEOffsetElement, M, void, R>): VBlock<SVGFEOffsetElement, M, void, R> { return VBlock.claim(SvgTags.feOffset, body, base) }
export function FePointLight<M = unknown, R = void>(body?: BlockBody<SVGFEPointLightElement, M, void, R>, base?: BlockBody<SVGFEPointLightElement, M, void, R>): VBlock<SVGFEPointLightElement, M, void, R> { return VBlock.claim(SvgTags.fePointLight, body, base) }
export function FeSpecularLighting<M = unknown, R = void>(body?: BlockBody<SVGFESpecularLightingElement, M, void, R>, base?: BlockBody<SVGFESpecularLightingElement, M, void, R>): VBlock<SVGFESpecularLightingElement, M, void, R> { return VBlock.claim(SvgTags.feSpecularLighting, body, base) }
export function FeSpotLight<M = unknown, R = void>(body?: BlockBody<SVGFESpotLightElement, M, void, R>, base?: BlockBody<SVGFESpotLightElement, M, void, R>): VBlock<SVGFESpotLightElement, M, void, R> { return VBlock.claim(SvgTags.feSpotLight, body, base) }
export function FeTile<M = unknown, R = void>(body?: BlockBody<SVGFETileElement, M, void, R>, base?: BlockBody<SVGFETileElement, M, void, R>): VBlock<SVGFETileElement, M, void, R> { return VBlock.claim(SvgTags.feTile, body, base) }
export function FeTurbulence<M = unknown, R = void>(body?: BlockBody<SVGFETurbulenceElement, M, void, R>, base?: BlockBody<SVGFETurbulenceElement, M, void, R>): VBlock<SVGFETurbulenceElement, M, void, R> { return VBlock.claim(SvgTags.feTurbulence, body, base) }
export function Filter<M = unknown, R = void>(body?: BlockBody<SVGFilterElement, M, void, R>, base?: BlockBody<SVGFilterElement, M, void, R>): VBlock<SVGFilterElement, M, void, R> { return VBlock.claim(SvgTags.filter, body, base) }
export function ForeignObject<M = unknown, R = void>(body?: BlockBody<SVGForeignObjectElement, M, void, R>, base?: BlockBody<SVGForeignObjectElement, M, void, R>): VBlock<SVGForeignObjectElement, M, void, R> { return VBlock.claim(SvgTags.foreignObject, body, base) }
export function G<M = unknown, R = void>(body?: BlockBody<SVGGElement, M, void, R>, base?: BlockBody<SVGGElement, M, void, R>): VBlock<SVGGElement, M, void, R> { return VBlock.claim(SvgTags.g, body, base) }
export function SvgImage<M = unknown, R = void>(body?: BlockBody<SVGImageElement, M, void, R>, base?: BlockBody<SVGImageElement, M, void, R>): VBlock<SVGImageElement, M, void, R> { return VBlock.claim(SvgTags.image, body, base) }
export function SvgLine<M = unknown, R = void>(body?: BlockBody<SVGLineElement, M, void, R>, base?: BlockBody<SVGLineElement, M, void, R>): VBlock<SVGLineElement, M, void, R> { return VBlock.claim(SvgTags.line, body, base) }
export function LinearGradient<M = unknown, R = void>(body?: BlockBody<SVGLinearGradientElement, M, void, R>, base?: BlockBody<SVGLinearGradientElement, M, void, R>): VBlock<SVGLinearGradientElement, M, void, R> { return VBlock.claim(SvgTags.linearGradient, body, base) }
export function Marker<M = unknown, R = void>(body?: BlockBody<SVGMarkerElement, M, void, R>, base?: BlockBody<SVGMarkerElement, M, void, R>): VBlock<SVGMarkerElement, M, void, R> { return VBlock.claim(SvgTags.marker, body, base) }
export function Mask<M = unknown, R = void>(body?: BlockBody<SVGMaskElement, M, void, R>, base?: BlockBody<SVGMaskElement, M, void, R>): VBlock<SVGMaskElement, M, void, R> { return VBlock.claim(SvgTags.mask, body, base) }
export function MetaData<M = unknown, R = void>(body?: BlockBody<SVGMetadataElement, M, void, R>, base?: BlockBody<SVGMetadataElement, M, void, R>): VBlock<SVGMetadataElement, M, void, R> { return VBlock.claim(SvgTags.metadata, body, base) }
export function MPath<M = unknown, R = void>(body?: BlockBody<SVGElement, M, void, R>, base?: BlockBody<SVGElement, M, void, R>): VBlock<SVGElement, M, void, R> { return VBlock.claim(SvgTags.mpath, body, base) }
export function Path<M = unknown, R = void>(body?: BlockBody<SVGPathElement, M, void, R>, base?: BlockBody<SVGPathElement, M, void, R>): VBlock<SVGPathElement, M, void, R> { return VBlock.claim(SvgTags.path, body, base) }
export function Pattern<M = unknown, R = void>(body?: BlockBody<SVGPatternElement, M, void, R>, base?: BlockBody<SVGPatternElement, M, void, R>): VBlock<SVGPatternElement, M, void, R> { return VBlock.claim(SvgTags.pattern, body, base) }
export function Polygon<M = unknown, R = void>(body?: BlockBody<SVGPolygonElement, M, void, R>, base?: BlockBody<SVGPolygonElement, M, void, R>): VBlock<SVGPolygonElement, M, void, R> { return VBlock.claim(SvgTags.polygon, body, base) }
export function PolyLine<M = unknown, R = void>(body?: BlockBody<SVGPolylineElement, M, void, R>, base?: BlockBody<SVGPolylineElement, M, void, R>): VBlock<SVGPolylineElement, M, void, R> { return VBlock.claim(SvgTags.polyline, body, base) }
export function RadialGradient<M = unknown, R = void>(body?: BlockBody<SVGRadialGradientElement, M, void, R>, base?: BlockBody<SVGRadialGradientElement, M, void, R>): VBlock<SVGRadialGradientElement, M, void, R> { return VBlock.claim(SvgTags.radialGradient, body, base) }
export function Rect<M = unknown, R = void>(body?: BlockBody<SVGRectElement, M, void, R>, base?: BlockBody<SVGRectElement, M, void, R>): VBlock<SVGRectElement, M, void, R> { return VBlock.claim(SvgTags.rect, body, base) }
export function Stop<M = unknown, R = void>(body?: BlockBody<SVGStopElement, M, void, R>, base?: BlockBody<SVGStopElement, M, void, R>): VBlock<SVGStopElement, M, void, R> { return VBlock.claim(SvgTags.stop, body, base) }
export function SvgSwitch<M = unknown, R = void>(body?: BlockBody<SVGSwitchElement, M, void, R>, base?: BlockBody<SVGSwitchElement, M, void, R>): VBlock<SVGSwitchElement, M, void, R> { return VBlock.claim(SvgTags.switch, body, base) }
export function Symbol<M = unknown, R = void>(body?: BlockBody<SVGSymbolElement, M, void, R>, base?: BlockBody<SVGSymbolElement, M, void, R>): VBlock<SVGSymbolElement, M, void, R> { return VBlock.claim(SvgTags.symbol, body, base) }
export function Text<M = unknown, R = void>(body?: BlockBody<SVGTextElement, M, void, R>, base?: BlockBody<SVGTextElement, M, void, R>): VBlock<SVGTextElement, M, void, R> { return VBlock.claim(SvgTags.text, body, base) }
export function TextPath<M = unknown, R = void>(body?: BlockBody<SVGTextPathElement, M, void, R>, base?: BlockBody<SVGTextPathElement, M, void, R>): VBlock<SVGTextPathElement, M, void, R> { return VBlock.claim(SvgTags.textPath, body, base) }
export function TSpan<M = unknown, R = void>(body?: BlockBody<SVGTSpanElement, M, void, R>, base?: BlockBody<SVGTSpanElement, M, void, R>): VBlock<SVGTSpanElement, M, void, R> { return VBlock.claim(SvgTags.tspan, body, base) }
export function Use<M = unknown, R = void>(body?: BlockBody<SVGUseElement, M, void, R>, base?: BlockBody<SVGUseElement, M, void, R>): VBlock<SVGUseElement, M, void, R> { return VBlock.claim(SvgTags.use, body, base) }
export function View<M = unknown, R = void>(body?: BlockBody<SVGViewElement, M, void, R>, base?: BlockBody<SVGViewElement, M, void, R>): VBlock<SVGViewElement, M, void, R> { return VBlock.claim(SvgTags.view, body, base) }

const HtmlTags = {
  a: new HtmlDriver<HTMLAnchorElement>("a", false, b => b.childrenLayout = Layout.Chain),
  abbr: new HtmlDriver<HTMLElement>("abbr", false, b => b.childrenLayout = Layout.Chain),
  address: new HtmlDriver<HTMLElement>("address", false, b => b.childrenLayout = Layout.Chain),
  area: new HtmlDriver<HTMLAreaElement>("area", false, b => b.childrenLayout = Layout.Chain),
  article: new HtmlDriver<HTMLElement>("article", false, b => b.childrenLayout = Layout.Chain),
  aside: new HtmlDriver<HTMLElement>("aside", false, b => b.childrenLayout = Layout.Chain),
  audio: new HtmlDriver<HTMLAudioElement>("audio", false, b => b.childrenLayout = Layout.Chain),
  b: new HtmlDriver<HTMLElement>("b", false, b => b.childrenLayout = Layout.Chain),
  base: new HtmlDriver<HTMLBaseElement>("base", false, b => b.childrenLayout = Layout.Chain),
  bdi: new HtmlDriver<HTMLElement>("bdi", false, b => b.childrenLayout = Layout.Chain),
  bdo: new HtmlDriver<HTMLElement>("bdo", false, b => b.childrenLayout = Layout.Chain),
  big: new HtmlDriver<HTMLElement>("big", false, b => b.childrenLayout = Layout.Chain),
  blockquote: new HtmlDriver<HTMLElement>("blockquote", false, b => b.childrenLayout = Layout.Chain),
  body: new HtmlDriver<HTMLBodyElement>("body", false, b => b.childrenLayout = Layout.Chain),
  br: new HtmlDriver<HTMLBRElement>("br", false, b => b.childrenLayout = Layout.Chain),
  button: new HtmlDriver<HTMLButtonElement>("button", false, b => b.childrenLayout = Layout.Chain),
  canvas: new HtmlDriver<HTMLCanvasElement>("canvas", false, b => b.childrenLayout = Layout.Chain),
  caption: new HtmlDriver<HTMLTableCaptionElement>("caption", false, b => b.childrenLayout = Layout.Chain),
  cite: new HtmlDriver<HTMLElement>("cite", false, b => b.childrenLayout = Layout.Chain),
  code: new HtmlDriver<HTMLElement>("code", false, b => b.childrenLayout = Layout.Chain),
  col: new HtmlDriver<HTMLTableColElement>("col", false, b => b.childrenLayout = Layout.Chain),
  colgroup: new HtmlDriver<HTMLTableColElement>("colgroup", false, b => b.childrenLayout = Layout.Chain),
  data: new HtmlDriver<HTMLDataElement>("data", false, b => b.childrenLayout = Layout.Chain),
  datalist: new HtmlDriver<HTMLDataListElement>("datalist", false, b => b.childrenLayout = Layout.Chain),
  dd: new HtmlDriver<HTMLElement>("dd", false, b => b.childrenLayout = Layout.Chain),
  del: new HtmlDriver<HTMLElement>("del", false, b => b.childrenLayout = Layout.Chain),
  details: new HtmlDriver<HTMLElement>("details", false, b => b.childrenLayout = Layout.Chain),
  dfn: new HtmlDriver<HTMLElement>("dfn", false, b => b.childrenLayout = Layout.Chain),
  div: new HtmlDriver<HTMLDivElement>("div", false, b => b.childrenLayout = Layout.Chain),
  dl: new HtmlDriver<HTMLDListElement>("dl", false, b => b.childrenLayout = Layout.Chain),
  dt: new HtmlDriver<HTMLElement>("dt", false, b => b.childrenLayout = Layout.Chain),
  em: new HtmlDriver<HTMLElement>("em", false, b => b.childrenLayout = Layout.Chain),
  embed: new HtmlDriver<HTMLEmbedElement>("embed", false, b => b.childrenLayout = Layout.Chain),
  fieldset: new HtmlDriver<HTMLFieldSetElement>("fieldset", false, b => b.childrenLayout = Layout.Chain),
  figcaption: new HtmlDriver<HTMLElement>("figcaption", false, b => b.childrenLayout = Layout.Chain),
  figure: new HtmlDriver<HTMLElement>("figure", false, b => b.childrenLayout = Layout.Chain),
  footer: new HtmlDriver<HTMLElement>("footer", false, b => b.childrenLayout = Layout.Chain),
  form: new HtmlDriver<HTMLFormElement>("form", false, b => b.childrenLayout = Layout.Chain),
  h1: new HtmlDriver<HTMLHeadingElement>("h1", false, b => b.childrenLayout = Layout.Chain),
  h2: new HtmlDriver<HTMLHeadingElement>("h2", false, b => b.childrenLayout = Layout.Chain),
  h3: new HtmlDriver<HTMLHeadingElement>("h3", false, b => b.childrenLayout = Layout.Chain),
  h4: new HtmlDriver<HTMLHeadingElement>("h4", false, b => b.childrenLayout = Layout.Chain),
  h5: new HtmlDriver<HTMLHeadingElement>("h5", false, b => b.childrenLayout = Layout.Chain),
  h6: new HtmlDriver<HTMLHeadingElement>("h6", false, b => b.childrenLayout = Layout.Chain),
  head: new HtmlDriver<HTMLHeadElement>("head", false, b => b.childrenLayout = Layout.Chain),
  header: new HtmlDriver<HTMLElement>("header", false, b => b.childrenLayout = Layout.Chain),
  hgroup: new HtmlDriver<HTMLElement>("hgroup", false, b => b.childrenLayout = Layout.Chain),
  hr: new HtmlDriver<HTMLHRElement>("hr", false, b => b.childrenLayout = Layout.Chain),
  html: new HtmlDriver<HTMLHtmlElement>("html", false, b => b.childrenLayout = Layout.Chain),
  i: new HtmlDriver<HTMLElement>("i", false, b => b.childrenLayout = Layout.Chain),
  iframe: new HtmlDriver<HTMLIFrameElement>("iframe", false, b => b.childrenLayout = Layout.Chain),
  img: new HtmlDriver<HTMLImageElement>("img", false, b => b.childrenLayout = Layout.Chain),
  input: new HtmlDriver<HTMLInputElement>("input", false, b => b.childrenLayout = Layout.Chain),
  ins: new HtmlDriver<HTMLModElement>("ins", false, b => b.childrenLayout = Layout.Chain),
  kbd: new HtmlDriver<HTMLElement>("kbd", false, b => b.childrenLayout = Layout.Chain),
  keygen: new HtmlDriver<HTMLElement>("keygen", false, b => b.childrenLayout = Layout.Chain),
  label: new HtmlDriver<HTMLLabelElement>("label", false, b => b.childrenLayout = Layout.Chain),
  legend: new HtmlDriver<HTMLLegendElement>("legend", false, b => b.childrenLayout = Layout.Chain),
  li: new HtmlDriver<HTMLLIElement>("li", false, b => b.childrenLayout = Layout.Chain),
  link: new HtmlDriver<HTMLLinkElement>("link", false, b => b.childrenLayout = Layout.Chain),
  main: new HtmlDriver<HTMLElement>("main", false, b => b.childrenLayout = Layout.Chain),
  map: new HtmlDriver<HTMLMapElement>("map", false, b => b.childrenLayout = Layout.Chain),
  mark: new HtmlDriver<HTMLElement>("mark", false, b => b.childrenLayout = Layout.Chain),
  menu: new HtmlDriver<HTMLElement>("menu", false, b => b.childrenLayout = Layout.Chain),
  menuitem: new HtmlDriver<HTMLElement>("menuitem", false, b => b.childrenLayout = Layout.Chain),
  meta: new HtmlDriver<HTMLMetaElement>("meta", false, b => b.childrenLayout = Layout.Chain),
  meter: new HtmlDriver<HTMLElement>("meter", false, b => b.childrenLayout = Layout.Chain),
  nav: new HtmlDriver<HTMLElement>("nav", false, b => b.childrenLayout = Layout.Chain),
  noindex: new HtmlDriver<HTMLElement>("noindex", false, b => b.childrenLayout = Layout.Chain),
  noscript: new HtmlDriver<HTMLElement>("noscript", false, b => b.childrenLayout = Layout.Chain),
  object: new HtmlDriver<HTMLObjectElement>("object", false, b => b.childrenLayout = Layout.Chain),
  ol: new HtmlDriver<HTMLOListElement>("ol", false, b => b.childrenLayout = Layout.Chain),
  optgroup: new HtmlDriver<HTMLOptGroupElement>("optgroup", false, b => b.childrenLayout = Layout.Chain),
  option: new HtmlDriver<HTMLOptionElement>("option", false, b => b.childrenLayout = Layout.Chain),
  output: new HtmlDriver<HTMLElement>("output", false, b => b.childrenLayout = Layout.Chain),
  p: new HtmlDriver<HTMLParagraphElement>("p", false, b => b.childrenLayout = Layout.Chain),
  param: new HtmlDriver<HTMLElement>("param", false, b => b.childrenLayout = Layout.Chain),
  picture: new HtmlDriver<HTMLElement>("picture", false, b => b.childrenLayout = Layout.Chain),
  pre: new HtmlDriver<HTMLPreElement>("pre", false, b => b.childrenLayout = Layout.Chain),
  progress: new HtmlDriver<HTMLProgressElement>("progress", false, b => b.childrenLayout = Layout.Chain),
  q: new HtmlDriver<HTMLQuoteElement>("q", false, b => b.childrenLayout = Layout.Chain),
  rp: new HtmlDriver<HTMLElement>("rp", false, b => b.childrenLayout = Layout.Chain),
  rt: new HtmlDriver<HTMLElement>("rt", false, b => b.childrenLayout = Layout.Chain),
  ruby: new HtmlDriver<HTMLElement>("ruby", false, b => b.childrenLayout = Layout.Chain),
  s: new HtmlDriver<HTMLElement>("s", false, b => b.childrenLayout = Layout.Chain),
  samp: new HtmlDriver<HTMLElement>("samp", false, b => b.childrenLayout = Layout.Chain),
  script: new HtmlDriver<HTMLScriptElement>("script", false, b => b.childrenLayout = Layout.Chain),
  section: new HtmlDriver<HTMLElement>("section", false, b => b.childrenLayout = Layout.Chain),
  select: new HtmlDriver<HTMLSelectElement>("select", false, b => b.childrenLayout = Layout.Chain),
  small: new HtmlDriver<HTMLElement>("small", false, b => b.childrenLayout = Layout.Chain),
  source: new HtmlDriver<HTMLSourceElement>("source", false, b => b.childrenLayout = Layout.Chain),
  span: new HtmlDriver<HTMLSpanElement>("span", false, b => b.childrenLayout = Layout.Chain),
  strong: new HtmlDriver<HTMLElement>("strong", false, b => b.childrenLayout = Layout.Chain),
  style: new HtmlDriver<HTMLStyleElement>("style", false, b => b.childrenLayout = Layout.Chain),
  sub: new HtmlDriver<HTMLElement>("sub", false, b => b.childrenLayout = Layout.Chain),
  summary: new HtmlDriver<HTMLElement>("summary", false, b => b.childrenLayout = Layout.Chain),
  sup: new HtmlDriver<HTMLElement>("sup", false, b => b.childrenLayout = Layout.Chain),
  table: new HtmlDriver<HTMLTableElement>("table", false, b => b.childrenLayout = Layout.Chain),
  template: new HtmlDriver<HTMLTemplateElement>("template", false, b => b.childrenLayout = Layout.Chain),
  tbody: new HtmlDriver<HTMLTableSectionElement>("tbody", false, b => b.childrenLayout = Layout.Chain),
  td: new HtmlDriver<HTMLTableCellElement>("td", false, b => b.childrenLayout = Layout.Chain),
  textarea: new HtmlDriver<HTMLTextAreaElement>("textarea", false, b => b.childrenLayout = Layout.Chain),
  tfoot: new HtmlDriver<HTMLTableSectionElement>("tfoot", false, b => b.childrenLayout = Layout.Chain),
  th: new HtmlDriver<HTMLTableCellElement>("th", false, b => b.childrenLayout = Layout.Chain),
  thead: new HtmlDriver<HTMLTableSectionElement>("thead", false, b => b.childrenLayout = Layout.Chain),
  time: new HtmlDriver<HTMLElement>("time", false, b => b.childrenLayout = Layout.Chain),
  title: new HtmlDriver<HTMLTitleElement>("title", false, b => b.childrenLayout = Layout.Chain),
  tr: new HtmlDriver<HTMLTableRowElement>("tr", false, b => b.childrenLayout = Layout.Chain),
  track: new HtmlDriver<HTMLTrackElement>("track", false, b => b.childrenLayout = Layout.Chain),
  u: new HtmlDriver<HTMLElement>("u", false, b => b.childrenLayout = Layout.Chain),
  ul: new HtmlDriver<HTMLUListElement>("ul", false, b => b.childrenLayout = Layout.Chain),
  var: new HtmlDriver<HTMLElement>("var", false, b => b.childrenLayout = Layout.Chain),
  video: new HtmlDriver<HTMLVideoElement>("video", false, b => b.childrenLayout = Layout.Chain),
  wbr: new HtmlDriver<HTMLElement>("wbr", false, b => b.childrenLayout = Layout.Chain),
  // webview: new HtmlNodeFactory<HTMLWebViewElement>('webview', BlockKind.Chain),
}

const SvgTags = {
  svg: new SvgDriver<SVGSVGElement>("svg", false, b => b.childrenLayout = Layout.Chain),
  a: new SvgDriver<SVGAElement>("a", false, b => b.childrenLayout = Layout.Chain),
  animate: new SvgDriver<SVGAnimateElement>("animate", false, b => b.childrenLayout = Layout.Chain),
  animateMotion: new SvgDriver<SVGAnimateMotionElement>("animateMotion", false, b => b.childrenLayout = Layout.Chain),
  animateTransform: new SvgDriver<SVGAnimateTransformElement>("animateTransform", false, b => b.childrenLayout = Layout.Chain),
  circle: new SvgDriver<SVGCircleElement>("circle", false, b => b.childrenLayout = Layout.Chain),
  clipPath: new SvgDriver<SVGClipPathElement>("clipPath", false, b => b.childrenLayout = Layout.Chain),
  defs: new SvgDriver<SVGDefsElement>("defs", false, b => b.childrenLayout = Layout.Chain),
  desc: new SvgDriver<SVGDescElement>("desc", false, b => b.childrenLayout = Layout.Chain),
  ellipse: new SvgDriver<SVGEllipseElement>("ellipse", false, b => b.childrenLayout = Layout.Chain),
  feBlend: new SvgDriver<SVGFEBlendElement>("feBlend", false, b => b.childrenLayout = Layout.Chain),
  feColorMatrix: new SvgDriver<SVGFEColorMatrixElement>("feColorMatrix", false, b => b.childrenLayout = Layout.Chain),
  feComponentTransfer: new SvgDriver<SVGFEComponentTransferElement>("feComponentTransfer", false, b => b.childrenLayout = Layout.Chain),
  feComposite: new SvgDriver<SVGFECompositeElement>("feComposite", false, b => b.childrenLayout = Layout.Chain),
  feConvolveMatrix: new SvgDriver<SVGFEConvolveMatrixElement>("feConvolveMatrix", false, b => b.childrenLayout = Layout.Chain),
  feDiffuseLighting: new SvgDriver<SVGFEDiffuseLightingElement>("feDiffuseLighting", false, b => b.childrenLayout = Layout.Chain),
  feDisplacementMap: new SvgDriver<SVGFEDisplacementMapElement>("feDisplacementMap", false, b => b.childrenLayout = Layout.Chain),
  feDistantLight: new SvgDriver<SVGFEDistantLightElement>("feDistantLight", false, b => b.childrenLayout = Layout.Chain),
  feDropShadow: new SvgDriver<SVGFEDropShadowElement>("feDropShadow", false, b => b.childrenLayout = Layout.Chain),
  feFlood: new SvgDriver<SVGFEFloodElement>("feFlood", false, b => b.childrenLayout = Layout.Chain),
  feFuncA: new SvgDriver<SVGFEFuncAElement>("feFuncA", false, b => b.childrenLayout = Layout.Chain),
  feFuncB: new SvgDriver<SVGFEFuncBElement>("feFuncB", false, b => b.childrenLayout = Layout.Chain),
  feFuncG: new SvgDriver<SVGFEFuncGElement>("feFuncG", false, b => b.childrenLayout = Layout.Chain),
  feFuncR: new SvgDriver<SVGFEFuncRElement>("feFuncR", false, b => b.childrenLayout = Layout.Chain),
  feGaussianBlur: new SvgDriver<SVGFEGaussianBlurElement>("feGaussianBlur", false, b => b.childrenLayout = Layout.Chain),
  feImage: new SvgDriver<SVGFEImageElement>("feImage", false, b => b.childrenLayout = Layout.Chain),
  feMerge: new SvgDriver<SVGFEMergeElement>("feMerge", false, b => b.childrenLayout = Layout.Chain),
  feMergeNode: new SvgDriver<SVGFEMergeNodeElement>("feMergeNode", false, b => b.childrenLayout = Layout.Chain),
  feMorphology: new SvgDriver<SVGFEMorphologyElement>("feMorphology", false, b => b.childrenLayout = Layout.Chain),
  feOffset: new SvgDriver<SVGFEOffsetElement>("feOffset", false, b => b.childrenLayout = Layout.Chain),
  fePointLight: new SvgDriver<SVGFEPointLightElement>("fePointLight", false, b => b.childrenLayout = Layout.Chain),
  feSpecularLighting: new SvgDriver<SVGFESpecularLightingElement>("feSpecularLighting", false, b => b.childrenLayout = Layout.Chain),
  feSpotLight: new SvgDriver<SVGFESpotLightElement>("feSpotLight", false, b => b.childrenLayout = Layout.Chain),
  feTile: new SvgDriver<SVGFETileElement>("feTile", false, b => b.childrenLayout = Layout.Chain),
  feTurbulence: new SvgDriver<SVGFETurbulenceElement>("feTurbulence", false, b => b.childrenLayout = Layout.Chain),
  filter: new SvgDriver<SVGFilterElement>("filter", false, b => b.childrenLayout = Layout.Chain),
  foreignObject: new SvgDriver<SVGForeignObjectElement>("foreignObject", false, b => b.childrenLayout = Layout.Chain),
  g: new SvgDriver<SVGGElement>("g", false, b => b.childrenLayout = Layout.Chain),
  image: new SvgDriver<SVGImageElement>("image", false, b => b.childrenLayout = Layout.Chain),
  line: new SvgDriver<SVGLineElement>("line", false, b => b.childrenLayout = Layout.Chain),
  linearGradient: new SvgDriver<SVGLinearGradientElement>("linearGradient", false, b => b.childrenLayout = Layout.Chain),
  marker: new SvgDriver<SVGMarkerElement>("marker", false, b => b.childrenLayout = Layout.Chain),
  mask: new SvgDriver<SVGMaskElement>("mask", false, b => b.childrenLayout = Layout.Chain),
  metadata: new SvgDriver<SVGMetadataElement>("metadata", false, b => b.childrenLayout = Layout.Chain),
  mpath: new SvgDriver<SVGElement>("mpath", false, b => b.childrenLayout = Layout.Chain),
  path: new SvgDriver<SVGPathElement>("path", false, b => b.childrenLayout = Layout.Chain),
  pattern: new SvgDriver<SVGPatternElement>("pattern", false, b => b.childrenLayout = Layout.Chain),
  polygon: new SvgDriver<SVGPolygonElement>("polygon", false, b => b.childrenLayout = Layout.Chain),
  polyline: new SvgDriver<SVGPolylineElement>("polyline", false, b => b.childrenLayout = Layout.Chain),
  radialGradient: new SvgDriver<SVGRadialGradientElement>("radialGradient", false, b => b.childrenLayout = Layout.Chain),
  rect: new SvgDriver<SVGRectElement>("rect", false, b => b.childrenLayout = Layout.Chain),
  stop: new SvgDriver<SVGStopElement>("stop", false, b => b.childrenLayout = Layout.Chain),
  switch: new SvgDriver<SVGSwitchElement>("switch", false, b => b.childrenLayout = Layout.Chain),
  symbol: new SvgDriver<SVGSymbolElement>("symbol", false, b => b.childrenLayout = Layout.Chain),
  text: new SvgDriver<SVGTextElement>("text", false, b => b.childrenLayout = Layout.Chain),
  textPath: new SvgDriver<SVGTextPathElement>("textPath", false, b => b.childrenLayout = Layout.Chain),
  tspan: new SvgDriver<SVGTSpanElement>("tspan", false, b => b.childrenLayout = Layout.Chain),
  use: new SvgDriver<SVGUseElement>("use", false, b => b.childrenLayout = Layout.Chain),
  view: new SvgDriver<SVGViewElement>("view", false, b => b.childrenLayout = Layout.Chain),
}
