// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { VBlock, StaticDriver, BlockKind, BlockBody } from "../core/api"
import { HtmlDriver, SvgDriver } from "./HtmlDriver"

export function HtmlBody(body?: BlockBody<HTMLElement>, base?: BlockBody<HTMLElement>): VBlock<HTMLElement> {
  const driver = new StaticDriver(global.document.body, "HtmlBody", BlockKind.Bar)
  return VBlock.claim(driver, body, base)
}

export function A<M = unknown, R = void>(body?: BlockBody<HTMLAnchorElement, M, R>, base?: BlockBody<HTMLAnchorElement, M, R>): VBlock<HTMLAnchorElement, M, R> { return VBlock.claim(HtmlTags.a, body, base) }
export function Abbr<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.abbr, body, base) }
export function Address<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.address, body, base) }
export function Area<M = unknown, R = void>(body?: BlockBody<HTMLAreaElement, M, R>, base?: BlockBody<HTMLAreaElement, M, R>): VBlock<HTMLAreaElement, M, R> { return VBlock.claim(HtmlTags.area, body, base) }
export function Article<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.article, body, base) }
export function Aside<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.aside, body, base) }
export function Audio<M = unknown, R = void>(body?: BlockBody<HTMLAudioElement, M, R>, base?: BlockBody<HTMLAudioElement, M, R>): VBlock<HTMLAudioElement, M, R> { return VBlock.claim(HtmlTags.audio, body, base) }
export function B<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.b, body, base) }
export function Base<M = unknown, R = void>(body?: BlockBody<HTMLBaseElement, M, R>, base?: BlockBody<HTMLBaseElement, M, R>): VBlock<HTMLBaseElement, M, R> { return VBlock.claim(HtmlTags.base, body, base) }
export function Bdi<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.bdi, body, base) }
export function Bdo<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.bdo, body, base) }
export function Big<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.big, body, base) }
export function BlockQuote<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.blockquote, body, base) }
export function Body<M = unknown, R = void>(body?: BlockBody<HTMLBodyElement, M, R>, base?: BlockBody<HTMLBodyElement, M, R>): VBlock<HTMLBodyElement, M, R> { return VBlock.claim(HtmlTags.body, body, base) }
export function BR<M = unknown, R = void>(body?: BlockBody<HTMLBRElement, M, R>, base?: BlockBody<HTMLBRElement, M, R>): VBlock<HTMLBRElement, M, R> { return VBlock.claim(HtmlTags.br, body, base) }
export function Button<M = unknown, R = void>(body?: BlockBody<HTMLButtonElement, M, R>, base?: BlockBody<HTMLButtonElement, M, R>): VBlock<HTMLButtonElement, M, R> { return VBlock.claim(HtmlTags.button, body, base) }
export function Canvas<M = unknown, R = void>(body?: BlockBody<HTMLCanvasElement, M, R>, base?: BlockBody<HTMLCanvasElement, M, R>): VBlock<HTMLCanvasElement, M, R> { return VBlock.claim(HtmlTags.canvas, body, base) }
export function Caption<M = unknown, R = void>(body?: BlockBody<HTMLTableCaptionElement, M, R>, base?: BlockBody<HTMLTableCaptionElement, M, R>): VBlock<HTMLTableCaptionElement, M, R> { return VBlock.claim(HtmlTags.caption, body, base) }
export function Cite<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.cite, body, base) }
export function Code<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.code, body, base) }
export function Col<M = unknown, R = void>(body?: BlockBody<HTMLTableColElement, M, R>, base?: BlockBody<HTMLTableColElement, M, R>): VBlock<HTMLTableColElement, M, R> { return VBlock.claim(HtmlTags.col, body, base) }
export function ColGroup<M = unknown, R = void>(body?: BlockBody<HTMLTableColElement, M, R>, base?: BlockBody<HTMLTableColElement, M, R>): VBlock<HTMLTableColElement, M, R> { return VBlock.claim(HtmlTags.colgroup, body, base) }
export function Data<M = unknown, R = void>(body?: BlockBody<HTMLDataElement, M, R>, base?: BlockBody<HTMLDataElement, M, R>): VBlock<HTMLDataElement, M, R> { return VBlock.claim(HtmlTags.data, body, base) }
export function DataList<M = unknown, R = void>(body?: BlockBody<HTMLDataListElement, M, R>, base?: BlockBody<HTMLDataListElement, M, R>): VBlock<HTMLDataListElement, M, R> { return VBlock.claim(HtmlTags.datalist, body, base) }
export function DD<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.dd, body, base) }
export function Del<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.del, body, base) }
export function Details<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.details, body, base) }
export function Dfn<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.dfn, body, base) }
export function Div<M = unknown, R = void>(body?: BlockBody<HTMLDivElement, M, R>, base?: BlockBody<HTMLDivElement, M, R>): VBlock<HTMLDivElement, M, R> { return VBlock.claim(HtmlTags.div, body, base) }
export function DL<M = unknown, R = void>(body?: BlockBody<HTMLDListElement, M, R>, base?: BlockBody<HTMLDListElement, M, R>): VBlock<HTMLDListElement, M, R> { return VBlock.claim(HtmlTags.dl, body, base) }
export function DT<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.dt, body, base) }
export function EM<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.em, body, base) }
export function Embed<M = unknown, R = void>(body?: BlockBody<HTMLEmbedElement, M, R>, base?: BlockBody<HTMLEmbedElement, M, R>): VBlock<HTMLEmbedElement, M, R> { return VBlock.claim(HtmlTags.embed, body, base) }
export function FieldSet<M = unknown, R = void>(body?: BlockBody<HTMLFieldSetElement, M, R>, base?: BlockBody<HTMLFieldSetElement, M, R>): VBlock<HTMLFieldSetElement, M, R> { return VBlock.claim(HtmlTags.fieldset, body, base) }
export function FigCaption<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.figcaption, body, base) }
export function Figure<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.figure, body, base) }
export function Footer<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.footer, body, base) }
export function Form<M = unknown, R = void>(body?: BlockBody<HTMLFormElement, M, R>, base?: BlockBody<HTMLFormElement, M, R>): VBlock<HTMLFormElement, M, R> { return VBlock.claim(HtmlTags.form, body, base) }
export function H1<M = unknown, R = void>(body?: BlockBody<HTMLHeadingElement, M, R>, base?: BlockBody<HTMLHeadingElement, M, R>): VBlock<HTMLHeadingElement, M, R> { return VBlock.claim(HtmlTags.h1, body, base) }
export function H2<M = unknown, R = void>(body?: BlockBody<HTMLHeadingElement, M, R>, base?: BlockBody<HTMLHeadingElement, M, R>): VBlock<HTMLHeadingElement, M, R> { return VBlock.claim(HtmlTags.h2, body, base) }
export function H3<M = unknown, R = void>(body?: BlockBody<HTMLHeadingElement, M, R>, base?: BlockBody<HTMLHeadingElement, M, R>): VBlock<HTMLHeadingElement, M, R> { return VBlock.claim(HtmlTags.h3, body, base) }
export function H4<M = unknown, R = void>(body?: BlockBody<HTMLHeadingElement, M, R>, base?: BlockBody<HTMLHeadingElement, M, R>): VBlock<HTMLHeadingElement, M, R> { return VBlock.claim(HtmlTags.h4, body, base) }
export function H5<M = unknown, R = void>(body?: BlockBody<HTMLHeadingElement, M, R>, base?: BlockBody<HTMLHeadingElement, M, R>): VBlock<HTMLHeadingElement, M, R> { return VBlock.claim(HtmlTags.h5, body, base) }
export function H6<M = unknown, R = void>(body?: BlockBody<HTMLHeadingElement, M, R>, base?: BlockBody<HTMLHeadingElement, M, R>): VBlock<HTMLHeadingElement, M, R> { return VBlock.claim(HtmlTags.h6, body, base) }
export function Head<M = unknown, R = void>(body?: BlockBody<HTMLHeadElement, M, R>, base?: BlockBody<HTMLHeadElement, M, R>): VBlock<HTMLHeadElement, M, R> { return VBlock.claim(HtmlTags.head, body, base) }
export function Header<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.header, body, base) }
export function HGroup<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.hgroup, body, base) }
export function HR<M = unknown, R = void>(body?: BlockBody<HTMLHRElement, M, R>, base?: BlockBody<HTMLHRElement, M, R>): VBlock<HTMLHRElement, M, R> { return VBlock.claim(HtmlTags.hr, body, base) }
export function Html<M = unknown, R = void>(body?: BlockBody<HTMLHtmlElement, M, R>, base?: BlockBody<HTMLHtmlElement, M, R>): VBlock<HTMLHtmlElement, M, R> { return VBlock.claim(HtmlTags.html, body, base) }
export function I<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.i, body, base) }
export function IFrame<M = unknown, R = void>(body?: BlockBody<HTMLIFrameElement, M, R>, base?: BlockBody<HTMLIFrameElement, M, R>): VBlock<HTMLIFrameElement, M, R> { return VBlock.claim(HtmlTags.iframe, body, base) }
export function Img<M = unknown, R = void>(body?: BlockBody<HTMLImageElement, M, R>, base?: BlockBody<HTMLImageElement, M, R>): VBlock<HTMLImageElement, M, R> { return VBlock.claim(HtmlTags.img, body, base) }
export function Input<M = unknown, R = void>(body?: BlockBody<HTMLInputElement, M, R>, base?: BlockBody<HTMLInputElement, M, R>): VBlock<HTMLInputElement, M, R> { return VBlock.claim(HtmlTags.input, body, base) }
export function Ins<M = unknown, R = void>(body?: BlockBody<HTMLModElement, M, R>, base?: BlockBody<HTMLModElement, M, R>): VBlock<HTMLModElement, M, R> { return VBlock.claim(HtmlTags.ins, body, base) }
export function Kbd<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.kbd, body, base) }
export function KeyGen<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.keygen, body, base) }
export function Label<M = unknown, R = void>(body?: BlockBody<HTMLLabelElement, M, R>, base?: BlockBody<HTMLLabelElement, M, R>): VBlock<HTMLLabelElement, M, R> { return VBlock.claim(HtmlTags.label, body, base) }
export function Legend<M = unknown, R = void>(body?: BlockBody<HTMLLegendElement, M, R>, base?: BlockBody<HTMLLegendElement, M, R>): VBlock<HTMLLegendElement, M, R> { return VBlock.claim(HtmlTags.legend, body, base) }
export function LI<M = unknown, R = void>(body?: BlockBody<HTMLLIElement, M, R>, base?: BlockBody<HTMLLIElement, M, R>): VBlock<HTMLLIElement, M, R> { return VBlock.claim(HtmlTags.li, body, base) }
export function Link<M = unknown, R = void>(body?: BlockBody<HTMLLinkElement, M, R>, base?: BlockBody<HTMLLinkElement, M, R>): VBlock<HTMLLinkElement, M, R> { return VBlock.claim(HtmlTags.link, body, base) }
export function Main<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.main, body, base) }
export function Map<M = unknown, R = void>(body?: BlockBody<HTMLMapElement, M, R>, base?: BlockBody<HTMLMapElement, M, R>): VBlock<HTMLMapElement, M, R> { return VBlock.claim(HtmlTags.map, body, base) }
export function Mark<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.mark, body, base) }
export function Menu<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.menu, body, base) }
export function MenuItem<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.menuitem, body, base) }
export function Meta<M = unknown, R = void>(body?: BlockBody<HTMLMetaElement, M, R>, base?: BlockBody<HTMLMetaElement, M, R>): VBlock<HTMLMetaElement, M, R> { return VBlock.claim(HtmlTags.meta, body, base) }
export function Meter<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.meter, body, base) }
export function Nav<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.nav, body, base) }
export function NoIndex<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.noindex, body, base) }
export function NoScript<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.noscript, body, base) }
export function Obj<M = unknown, R = void>(body?: BlockBody<HTMLObjectElement, M, R>, base?: BlockBody<HTMLObjectElement, M, R>): VBlock<HTMLObjectElement, M, R> { return VBlock.claim(HtmlTags.object, body, base) }
export function OL<M = unknown, R = void>(body?: BlockBody<HTMLOListElement, M, R>, base?: BlockBody<HTMLOListElement, M, R>): VBlock<HTMLOListElement, M, R> { return VBlock.claim(HtmlTags.ol, body, base) }
export function OptGroup<M = unknown, R = void>(body?: BlockBody<HTMLOptGroupElement, M, R>, base?: BlockBody<HTMLOptGroupElement, M, R>): VBlock<HTMLOptGroupElement, M, R> { return VBlock.claim(HtmlTags.optgroup, body, base) }
export function Option<M = unknown, R = void>(body?: BlockBody<HTMLOptionElement, M, R>, base?: BlockBody<HTMLOptionElement, M, R>): VBlock<HTMLOptionElement, M, R> { return VBlock.claim(HtmlTags.option, body, base) }
export function Output<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.output, body, base) }
export function P<M = unknown, R = void>(body?: BlockBody<HTMLParagraphElement, M, R>, base?: BlockBody<HTMLParagraphElement, M, R>): VBlock<HTMLParagraphElement, M, R> { return VBlock.claim(HtmlTags.p, body, base) }
export function Param<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.param, body, base) }
export function Picture<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.picture, body, base) }
export function Pre<M = unknown, R = void>(body?: BlockBody<HTMLPreElement, M, R>, base?: BlockBody<HTMLPreElement, M, R>): VBlock<HTMLPreElement, M, R> { return VBlock.claim(HtmlTags.pre, body, base) }
export function Progress<M = unknown, R = void>(body?: BlockBody<HTMLProgressElement, M, R>, base?: BlockBody<HTMLProgressElement, M, R>): VBlock<HTMLProgressElement, M, R> { return VBlock.claim(HtmlTags.progress, body, base) }
export function Q<M = unknown, R = void>(body?: BlockBody<HTMLQuoteElement, M, R>, base?: BlockBody<HTMLQuoteElement, M, R>): VBlock<HTMLQuoteElement, M, R> { return VBlock.claim(HtmlTags.q, body, base) }
export function RP<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.rp, body, base) }
export function RT<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.rt, body, base) }
export function Ruby<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.ruby, body, base) }
export function S<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.s, body, base) }
export function Samp<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.samp, body, base) }
export function Script<M = unknown, R = void>(body?: BlockBody<HTMLScriptElement, M, R>, base?: BlockBody<HTMLScriptElement, M, R>): VBlock<HTMLScriptElement, M, R> { return VBlock.claim(HtmlTags.script, body, base) }
export function Section<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.section, body, base) }
export function Select<M = unknown, R = void>(body?: BlockBody<HTMLSelectElement, M, R>, base?: BlockBody<HTMLSelectElement, M, R>): VBlock<HTMLSelectElement, M, R> { return VBlock.claim(HtmlTags.select, body, base) }
export function Small<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.small, body, base) }
export function Source<M = unknown, R = void>(body?: BlockBody<HTMLSourceElement, M, R>, base?: BlockBody<HTMLSourceElement, M, R>): VBlock<HTMLSourceElement, M, R> { return VBlock.claim(HtmlTags.source, body, base) }
export function Span<M = unknown, R = void>(body?: BlockBody<HTMLSpanElement, M, R>, base?: BlockBody<HTMLSpanElement, M, R>): VBlock<HTMLSpanElement, M, R> { return VBlock.claim(HtmlTags.span, body, base) }
export function Strong<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.strong, body, base) }
export function Style<M = unknown, R = void>(body?: BlockBody<HTMLStyleElement, M, R>, base?: BlockBody<HTMLStyleElement, M, R>): VBlock<HTMLStyleElement, M, R> { return VBlock.claim(HtmlTags.style, body, base) }
export function Sub<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.sub, body, base) }
export function Summary<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.summary, body, base) }
export function Sup<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.sup, body, base) }
export function Tbl<M = unknown, R = void>(body?: BlockBody<HTMLTableElement, M, R>, base?: BlockBody<HTMLTableElement, M, R>): VBlock<HTMLTableElement, M, R> { return VBlock.claim(HtmlTags.table, body, base) }
export function Template<M = unknown, R = void>(body?: BlockBody<HTMLTemplateElement, M, R>, base?: BlockBody<HTMLTemplateElement, M, R>): VBlock<HTMLTemplateElement, M, R> { return VBlock.claim(HtmlTags.template, body, base) }
export function TBody<M = unknown, R = void>(body?: BlockBody<HTMLTableSectionElement, M, R>, base?: BlockBody<HTMLTableSectionElement, M, R>): VBlock<HTMLTableSectionElement, M, R> { return VBlock.claim(HtmlTags.tbody, body, base) }
export function TD<M = unknown, R = void>(body?: BlockBody<HTMLTableCellElement, M, R>, base?: BlockBody<HTMLTableCellElement, M, R>): VBlock<HTMLTableCellElement, M, R> { return VBlock.claim(HtmlTags.td, body, base) }
export function TextArea<M = unknown, R = void>(body?: BlockBody<HTMLTextAreaElement, M, R>, base?: BlockBody<HTMLTextAreaElement, M, R>): VBlock<HTMLTextAreaElement, M, R> { return VBlock.claim(HtmlTags.textarea, body, base) }
export function TFoot<M = unknown, R = void>(body?: BlockBody<HTMLTableSectionElement, M, R>, base?: BlockBody<HTMLTableSectionElement, M, R>): VBlock<HTMLTableSectionElement, M, R> { return VBlock.claim(HtmlTags.tfoot, body, base) }
export function TH<M = unknown, R = void>(body?: BlockBody<HTMLTableCellElement, M, R>, base?: BlockBody<HTMLTableCellElement, M, R>): VBlock<HTMLTableCellElement, M, R> { return VBlock.claim(HtmlTags.th, body, base) }
export function THead<M = unknown, R = void>(body?: BlockBody<HTMLTableSectionElement, M, R>, base?: BlockBody<HTMLTableSectionElement, M, R>): VBlock<HTMLTableSectionElement, M, R> { return VBlock.claim(HtmlTags.thead, body, base) }
export function Time<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.time, body, base) }
export function Title<M = unknown, R = void>(body?: BlockBody<HTMLTitleElement, M, R>, base?: BlockBody<HTMLTitleElement, M, R>): VBlock<HTMLTitleElement, M, R> { return VBlock.claim(HtmlTags.title, body, base) }
export function TR<M = unknown, R = void>(body?: BlockBody<HTMLTableRowElement, M, R>, base?: BlockBody<HTMLTableRowElement, M, R>): VBlock<HTMLTableRowElement, M, R> { return VBlock.claim(HtmlTags.tr, body, base) }
export function Track<M = unknown, R = void>(body?: BlockBody<HTMLTrackElement, M, R>, base?: BlockBody<HTMLTrackElement, M, R>): VBlock<HTMLTrackElement, M, R> { return VBlock.claim(HtmlTags.track, body, base) }
export function U<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.u, body, base) }
export function UL<M = unknown, R = void>(body?: BlockBody<HTMLUListElement, M, R>, base?: BlockBody<HTMLUListElement, M, R>): VBlock<HTMLUListElement, M, R> { return VBlock.claim(HtmlTags.ul, body, base) }
export function Var<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.var, body, base) }
export function Video<M = unknown, R = void>(body?: BlockBody<HTMLVideoElement, M, R>, base?: BlockBody<HTMLVideoElement, M, R>): VBlock<HTMLVideoElement, M, R> { return VBlock.claim(HtmlTags.video, body, base) }
export function Wbr<M = unknown, R = void>(body?: BlockBody<HTMLElement, M, R>, base?: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.wbr, body, base) }

export function Svg<M = unknown, R = void>(body?: BlockBody<SVGSVGElement, M, R>, base?: BlockBody<SVGSVGElement, M, R>): VBlock<SVGSVGElement, M, R> { return VBlock.claim(SvgTags.svg, body, base) }
export function SvgA<M = unknown, R = void>(body?: BlockBody<SVGAElement, M, R>, base?: BlockBody<SVGAElement, M, R>): VBlock<SVGAElement, M, R> { return VBlock.claim(SvgTags.a, body, base) }
export function Animate<M = unknown, R = void>(body?: BlockBody<SVGAnimateElement, M, R>, base?: BlockBody<SVGAnimateElement, M, R>): VBlock<SVGAnimateElement, M, R> { return VBlock.claim(SvgTags.animate, body, base) }
export function AnimateMotion<M = unknown, R = void>(body?: BlockBody<SVGAnimateMotionElement, M, R>, base?: BlockBody<SVGAnimateMotionElement, M, R>): VBlock<SVGAnimateMotionElement, M, R> { return VBlock.claim(SvgTags.animateMotion, body, base) }
export function AnimateTransform<M = unknown, R = void>(body?: BlockBody<SVGAnimateTransformElement, M, R>, base?: BlockBody<SVGAnimateTransformElement, M, R>): VBlock<SVGAnimateTransformElement, M, R> { return VBlock.claim(SvgTags.animateTransform, body, base) }
export function Circle<M = unknown, R = void>(body?: BlockBody<SVGCircleElement, M, R>, base?: BlockBody<SVGCircleElement, M, R>): VBlock<SVGCircleElement, M, R> { return VBlock.claim(SvgTags.circle, body, base) }
export function ClipPath<M = unknown, R = void>(body?: BlockBody<SVGClipPathElement, M, R>, base?: BlockBody<SVGClipPathElement, M, R>): VBlock<SVGClipPathElement, M, R> { return VBlock.claim(SvgTags.clipPath, body, base) }
export function Defs<M = unknown, R = void>(body?: BlockBody<SVGDefsElement, M, R>, base?: BlockBody<SVGDefsElement, M, R>): VBlock<SVGDefsElement, M, R> { return VBlock.claim(SvgTags.defs, body, base) }
export function Desc<M = unknown, R = void>(body?: BlockBody<SVGDescElement, M, R>, base?: BlockBody<SVGDescElement, M, R>): VBlock<SVGDescElement, M, R> { return VBlock.claim(SvgTags.desc, body, base) }
export function Ellipse<M = unknown, R = void>(body?: BlockBody<SVGEllipseElement, M, R>, base?: BlockBody<SVGEllipseElement, M, R>): VBlock<SVGEllipseElement, M, R> { return VBlock.claim(SvgTags.ellipse, body, base) }
export function FeBlend<M = unknown, R = void>(body?: BlockBody<SVGFEBlendElement, M, R>, base?: BlockBody<SVGFEBlendElement, M, R>): VBlock<SVGFEBlendElement, M, R> { return VBlock.claim(SvgTags.feBlend, body, base) }
export function FeColorMatrix<M = unknown, R = void>(body?: BlockBody<SVGFEColorMatrixElement, M, R>, base?: BlockBody<SVGFEColorMatrixElement, M, R>): VBlock<SVGFEColorMatrixElement, M, R> { return VBlock.claim(SvgTags.feColorMatrix, body, base) }
export function FeComponentTransfer<M = unknown, R = void>(body?: BlockBody<SVGFEComponentTransferElement, M, R>, base?: BlockBody<SVGFEComponentTransferElement, M, R>): VBlock<SVGFEComponentTransferElement, M, R> { return VBlock.claim(SvgTags.feComponentTransfer, body, base) }
export function FeComposite<M = unknown, R = void>(body?: BlockBody<SVGFECompositeElement, M, R>, base?: BlockBody<SVGFECompositeElement, M, R>): VBlock<SVGFECompositeElement, M, R> { return VBlock.claim(SvgTags.feComposite, body, base) }
export function FeConvolveMatrix<M = unknown, R = void>(body?: BlockBody<SVGFEConvolveMatrixElement, M, R>, base?: BlockBody<SVGFEConvolveMatrixElement, M, R>): VBlock<SVGFEConvolveMatrixElement, M, R> { return VBlock.claim(SvgTags.feConvolveMatrix, body, base) }
export function FeDiffuseLighting<M = unknown, R = void>(body?: BlockBody<SVGFEDiffuseLightingElement, M, R>, base?: BlockBody<SVGFEDiffuseLightingElement, M, R>): VBlock<SVGFEDiffuseLightingElement, M, R> { return VBlock.claim(SvgTags.feDiffuseLighting, body, base) }
export function FeDisplacementMap<M = unknown, R = void>(body?: BlockBody<SVGFEDisplacementMapElement, M, R>, base?: BlockBody<SVGFEDisplacementMapElement, M, R>): VBlock<SVGFEDisplacementMapElement, M, R> { return VBlock.claim(SvgTags.feDisplacementMap, body, base) }
export function FeDistantLight<M = unknown, R = void>(body?: BlockBody<SVGFEDistantLightElement, M, R>, base?: BlockBody<SVGFEDistantLightElement, M, R>): VBlock<SVGFEDistantLightElement, M, R> { return VBlock.claim(SvgTags.feDistantLight, body, base) }
export function FeDropShadow<M = unknown, R = void>(body?: BlockBody<SVGFEDropShadowElement, M, R>, base?: BlockBody<SVGFEDropShadowElement, M, R>): VBlock<SVGFEDropShadowElement, M, R> { return VBlock.claim(SvgTags.feDropShadow, body, base) }
export function FeFlood<M = unknown, R = void>(body?: BlockBody<SVGFEFloodElement, M, R>, base?: BlockBody<SVGFEFloodElement, M, R>): VBlock<SVGFEFloodElement, M, R> { return VBlock.claim(SvgTags.feFlood, body, base) }
export function FeFuncA<M = unknown, R = void>(body?: BlockBody<SVGFEFuncAElement, M, R>, base?: BlockBody<SVGFEFuncAElement, M, R>): VBlock<SVGFEFuncAElement, M, R> { return VBlock.claim(SvgTags.feFuncA, body, base) }
export function FeFuncB<M = unknown, R = void>(body?: BlockBody<SVGFEFuncBElement, M, R>, base?: BlockBody<SVGFEFuncBElement, M, R>): VBlock<SVGFEFuncBElement, M, R> { return VBlock.claim(SvgTags.feFuncB, body, base) }
export function FeFuncG<M = unknown, R = void>(body?: BlockBody<SVGFEFuncGElement, M, R>, base?: BlockBody<SVGFEFuncGElement, M, R>): VBlock<SVGFEFuncGElement, M, R> { return VBlock.claim(SvgTags.feFuncG, body, base) }
export function FeFuncR<M = unknown, R = void>(body?: BlockBody<SVGFEFuncRElement, M, R>, base?: BlockBody<SVGFEFuncRElement, M, R>): VBlock<SVGFEFuncRElement, M, R> { return VBlock.claim(SvgTags.feFuncR, body, base) }
export function FeGaussianBlur<M = unknown, R = void>(body?: BlockBody<SVGFEGaussianBlurElement, M, R>, base?: BlockBody<SVGFEGaussianBlurElement, M, R>): VBlock<SVGFEGaussianBlurElement, M, R> { return VBlock.claim(SvgTags.feGaussianBlur, body, base) }
export function FeImage<M = unknown, R = void>(body?: BlockBody<SVGFEImageElement, M, R>, base?: BlockBody<SVGFEImageElement, M, R>): VBlock<SVGFEImageElement, M, R> { return VBlock.claim(SvgTags.feImage, body, base) }
export function FeMerge<M = unknown, R = void>(body?: BlockBody<SVGFEMergeElement, M, R>, base?: BlockBody<SVGFEMergeElement, M, R>): VBlock<SVGFEMergeElement, M, R> { return VBlock.claim(SvgTags.feMerge, body, base) }
export function FeMergeNode<M = unknown, R = void>(body?: BlockBody<SVGFEMergeNodeElement, M, R>, base?: BlockBody<SVGFEMergeNodeElement, M, R>): VBlock<SVGFEMergeNodeElement, M, R> { return VBlock.claim(SvgTags.feMergeNode, body, base) }
export function FeMorphology<M = unknown, R = void>(body?: BlockBody<SVGFEMorphologyElement, M, R>, base?: BlockBody<SVGFEMorphologyElement, M, R>): VBlock<SVGFEMorphologyElement, M, R> { return VBlock.claim(SvgTags.feMorphology, body, base) }
export function FeOffset<M = unknown, R = void>(body?: BlockBody<SVGFEOffsetElement, M, R>, base?: BlockBody<SVGFEOffsetElement, M, R>): VBlock<SVGFEOffsetElement, M, R> { return VBlock.claim(SvgTags.feOffset, body, base) }
export function FePointLight<M = unknown, R = void>(body?: BlockBody<SVGFEPointLightElement, M, R>, base?: BlockBody<SVGFEPointLightElement, M, R>): VBlock<SVGFEPointLightElement, M, R> { return VBlock.claim(SvgTags.fePointLight, body, base) }
export function FeSpecularLighting<M = unknown, R = void>(body?: BlockBody<SVGFESpecularLightingElement, M, R>, base?: BlockBody<SVGFESpecularLightingElement, M, R>): VBlock<SVGFESpecularLightingElement, M, R> { return VBlock.claim(SvgTags.feSpecularLighting, body, base) }
export function FeSpotLight<M = unknown, R = void>(body?: BlockBody<SVGFESpotLightElement, M, R>, base?: BlockBody<SVGFESpotLightElement, M, R>): VBlock<SVGFESpotLightElement, M, R> { return VBlock.claim(SvgTags.feSpotLight, body, base) }
export function FeTile<M = unknown, R = void>(body?: BlockBody<SVGFETileElement, M, R>, base?: BlockBody<SVGFETileElement, M, R>): VBlock<SVGFETileElement, M, R> { return VBlock.claim(SvgTags.feTile, body, base) }
export function FeTurbulence<M = unknown, R = void>(body?: BlockBody<SVGFETurbulenceElement, M, R>, base?: BlockBody<SVGFETurbulenceElement, M, R>): VBlock<SVGFETurbulenceElement, M, R> { return VBlock.claim(SvgTags.feTurbulence, body, base) }
export function Filter<M = unknown, R = void>(body?: BlockBody<SVGFilterElement, M, R>, base?: BlockBody<SVGFilterElement, M, R>): VBlock<SVGFilterElement, M, R> { return VBlock.claim(SvgTags.filter, body, base) }
export function ForeignObject<M = unknown, R = void>(body?: BlockBody<SVGForeignObjectElement, M, R>, base?: BlockBody<SVGForeignObjectElement, M, R>): VBlock<SVGForeignObjectElement, M, R> { return VBlock.claim(SvgTags.foreignObject, body, base) }
export function G<M = unknown, R = void>(body?: BlockBody<SVGGElement, M, R>, base?: BlockBody<SVGGElement, M, R>): VBlock<SVGGElement, M, R> { return VBlock.claim(SvgTags.g, body, base) }
export function SvgImage<M = unknown, R = void>(body?: BlockBody<SVGImageElement, M, R>, base?: BlockBody<SVGImageElement, M, R>): VBlock<SVGImageElement, M, R> { return VBlock.claim(SvgTags.image, body, base) }
export function SvgLine<M = unknown, R = void>(body?: BlockBody<SVGLineElement, M, R>, base?: BlockBody<SVGLineElement, M, R>): VBlock<SVGLineElement, M, R> { return VBlock.claim(SvgTags.line, body, base) }
export function LinearGradient<M = unknown, R = void>(body?: BlockBody<SVGLinearGradientElement, M, R>, base?: BlockBody<SVGLinearGradientElement, M, R>): VBlock<SVGLinearGradientElement, M, R> { return VBlock.claim(SvgTags.linearGradient, body, base) }
export function Marker<M = unknown, R = void>(body?: BlockBody<SVGMarkerElement, M, R>, base?: BlockBody<SVGMarkerElement, M, R>): VBlock<SVGMarkerElement, M, R> { return VBlock.claim(SvgTags.marker, body, base) }
export function Mask<M = unknown, R = void>(body?: BlockBody<SVGMaskElement, M, R>, base?: BlockBody<SVGMaskElement, M, R>): VBlock<SVGMaskElement, M, R> { return VBlock.claim(SvgTags.mask, body, base) }
export function MetaData<M = unknown, R = void>(body?: BlockBody<SVGMetadataElement, M, R>, base?: BlockBody<SVGMetadataElement, M, R>): VBlock<SVGMetadataElement, M, R> { return VBlock.claim(SvgTags.metadata, body, base) }
export function MPath<M = unknown, R = void>(body?: BlockBody<SVGElement, M, R>, base?: BlockBody<SVGElement, M, R>): VBlock<SVGElement, M, R> { return VBlock.claim(SvgTags.mpath, body, base) }
export function Path<M = unknown, R = void>(body?: BlockBody<SVGPathElement, M, R>, base?: BlockBody<SVGPathElement, M, R>): VBlock<SVGPathElement, M, R> { return VBlock.claim(SvgTags.path, body, base) }
export function Pattern<M = unknown, R = void>(body?: BlockBody<SVGPatternElement, M, R>, base?: BlockBody<SVGPatternElement, M, R>): VBlock<SVGPatternElement, M, R> { return VBlock.claim(SvgTags.pattern, body, base) }
export function Polygon<M = unknown, R = void>(body?: BlockBody<SVGPolygonElement, M, R>, base?: BlockBody<SVGPolygonElement, M, R>): VBlock<SVGPolygonElement, M, R> { return VBlock.claim(SvgTags.polygon, body, base) }
export function PolyLine<M = unknown, R = void>(body?: BlockBody<SVGPolylineElement, M, R>, base?: BlockBody<SVGPolylineElement, M, R>): VBlock<SVGPolylineElement, M, R> { return VBlock.claim(SvgTags.polyline, body, base) }
export function RadialGradient<M = unknown, R = void>(body?: BlockBody<SVGRadialGradientElement, M, R>, base?: BlockBody<SVGRadialGradientElement, M, R>): VBlock<SVGRadialGradientElement, M, R> { return VBlock.claim(SvgTags.radialGradient, body, base) }
export function Rect<M = unknown, R = void>(body?: BlockBody<SVGRectElement, M, R>, base?: BlockBody<SVGRectElement, M, R>): VBlock<SVGRectElement, M, R> { return VBlock.claim(SvgTags.rect, body, base) }
export function Stop<M = unknown, R = void>(body?: BlockBody<SVGStopElement, M, R>, base?: BlockBody<SVGStopElement, M, R>): VBlock<SVGStopElement, M, R> { return VBlock.claim(SvgTags.stop, body, base) }
export function SvgSwitch<M = unknown, R = void>(body?: BlockBody<SVGSwitchElement, M, R>, base?: BlockBody<SVGSwitchElement, M, R>): VBlock<SVGSwitchElement, M, R> { return VBlock.claim(SvgTags.switch, body, base) }
export function Symbol<M = unknown, R = void>(body?: BlockBody<SVGSymbolElement, M, R>, base?: BlockBody<SVGSymbolElement, M, R>): VBlock<SVGSymbolElement, M, R> { return VBlock.claim(SvgTags.symbol, body, base) }
export function Text<M = unknown, R = void>(body?: BlockBody<SVGTextElement, M, R>, base?: BlockBody<SVGTextElement, M, R>): VBlock<SVGTextElement, M, R> { return VBlock.claim(SvgTags.text, body, base) }
export function TextPath<M = unknown, R = void>(body?: BlockBody<SVGTextPathElement, M, R>, base?: BlockBody<SVGTextPathElement, M, R>): VBlock<SVGTextPathElement, M, R> { return VBlock.claim(SvgTags.textPath, body, base) }
export function TSpan<M = unknown, R = void>(body?: BlockBody<SVGTSpanElement, M, R>, base?: BlockBody<SVGTSpanElement, M, R>): VBlock<SVGTSpanElement, M, R> { return VBlock.claim(SvgTags.tspan, body, base) }
export function Use<M = unknown, R = void>(body?: BlockBody<SVGUseElement, M, R>, base?: BlockBody<SVGUseElement, M, R>): VBlock<SVGUseElement, M, R> { return VBlock.claim(SvgTags.use, body, base) }
export function View<M = unknown, R = void>(body?: BlockBody<SVGViewElement, M, R>, base?: BlockBody<SVGViewElement, M, R>): VBlock<SVGViewElement, M, R> { return VBlock.claim(SvgTags.view, body, base) }

const HtmlTags = {
  a: new HtmlDriver<HTMLAnchorElement>("a", BlockKind.Bar),
  abbr: new HtmlDriver<HTMLElement>("abbr", BlockKind.Bar),
  address: new HtmlDriver<HTMLElement>("address", BlockKind.Bar),
  area: new HtmlDriver<HTMLAreaElement>("area", BlockKind.Bar),
  article: new HtmlDriver<HTMLElement>("article", BlockKind.Bar),
  aside: new HtmlDriver<HTMLElement>("aside", BlockKind.Bar),
  audio: new HtmlDriver<HTMLAudioElement>("audio", BlockKind.Bar),
  b: new HtmlDriver<HTMLElement>("b", BlockKind.Bar),
  base: new HtmlDriver<HTMLBaseElement>("base", BlockKind.Bar),
  bdi: new HtmlDriver<HTMLElement>("bdi", BlockKind.Bar),
  bdo: new HtmlDriver<HTMLElement>("bdo", BlockKind.Bar),
  big: new HtmlDriver<HTMLElement>("big", BlockKind.Bar),
  blockquote: new HtmlDriver<HTMLElement>("blockquote", BlockKind.Bar),
  body: new HtmlDriver<HTMLBodyElement>("body", BlockKind.Bar),
  br: new HtmlDriver<HTMLBRElement>("br", BlockKind.Bar),
  button: new HtmlDriver<HTMLButtonElement>("button", BlockKind.Bar),
  canvas: new HtmlDriver<HTMLCanvasElement>("canvas", BlockKind.Bar),
  caption: new HtmlDriver<HTMLTableCaptionElement>("caption", BlockKind.Bar),
  cite: new HtmlDriver<HTMLElement>("cite", BlockKind.Bar),
  code: new HtmlDriver<HTMLElement>("code", BlockKind.Bar),
  col: new HtmlDriver<HTMLTableColElement>("col", BlockKind.Bar),
  colgroup: new HtmlDriver<HTMLTableColElement>("colgroup", BlockKind.Bar),
  data: new HtmlDriver<HTMLDataElement>("data", BlockKind.Bar),
  datalist: new HtmlDriver<HTMLDataListElement>("datalist", BlockKind.Bar),
  dd: new HtmlDriver<HTMLElement>("dd", BlockKind.Bar),
  del: new HtmlDriver<HTMLElement>("del", BlockKind.Bar),
  details: new HtmlDriver<HTMLElement>("details", BlockKind.Bar),
  dfn: new HtmlDriver<HTMLElement>("dfn", BlockKind.Bar),
  div: new HtmlDriver<HTMLDivElement>("div", BlockKind.Bar),
  dl: new HtmlDriver<HTMLDListElement>("dl", BlockKind.Bar),
  dt: new HtmlDriver<HTMLElement>("dt", BlockKind.Bar),
  em: new HtmlDriver<HTMLElement>("em", BlockKind.Bar),
  embed: new HtmlDriver<HTMLEmbedElement>("embed", BlockKind.Bar),
  fieldset: new HtmlDriver<HTMLFieldSetElement>("fieldset", BlockKind.Bar),
  figcaption: new HtmlDriver<HTMLElement>("figcaption", BlockKind.Bar),
  figure: new HtmlDriver<HTMLElement>("figure", BlockKind.Bar),
  footer: new HtmlDriver<HTMLElement>("footer", BlockKind.Bar),
  form: new HtmlDriver<HTMLFormElement>("form", BlockKind.Bar),
  h1: new HtmlDriver<HTMLHeadingElement>("h1", BlockKind.Bar),
  h2: new HtmlDriver<HTMLHeadingElement>("h2", BlockKind.Bar),
  h3: new HtmlDriver<HTMLHeadingElement>("h3", BlockKind.Bar),
  h4: new HtmlDriver<HTMLHeadingElement>("h4", BlockKind.Bar),
  h5: new HtmlDriver<HTMLHeadingElement>("h5", BlockKind.Bar),
  h6: new HtmlDriver<HTMLHeadingElement>("h6", BlockKind.Bar),
  head: new HtmlDriver<HTMLHeadElement>("head", BlockKind.Bar),
  header: new HtmlDriver<HTMLElement>("header", BlockKind.Bar),
  hgroup: new HtmlDriver<HTMLElement>("hgroup", BlockKind.Bar),
  hr: new HtmlDriver<HTMLHRElement>("hr", BlockKind.Bar),
  html: new HtmlDriver<HTMLHtmlElement>("html", BlockKind.Bar),
  i: new HtmlDriver<HTMLElement>("i", BlockKind.Bar),
  iframe: new HtmlDriver<HTMLIFrameElement>("iframe", BlockKind.Bar),
  img: new HtmlDriver<HTMLImageElement>("img", BlockKind.Bar),
  input: new HtmlDriver<HTMLInputElement>("input", BlockKind.Bar),
  ins: new HtmlDriver<HTMLModElement>("ins", BlockKind.Bar),
  kbd: new HtmlDriver<HTMLElement>("kbd", BlockKind.Bar),
  keygen: new HtmlDriver<HTMLElement>("keygen", BlockKind.Bar),
  label: new HtmlDriver<HTMLLabelElement>("label", BlockKind.Bar),
  legend: new HtmlDriver<HTMLLegendElement>("legend", BlockKind.Bar),
  li: new HtmlDriver<HTMLLIElement>("li", BlockKind.Bar),
  link: new HtmlDriver<HTMLLinkElement>("link", BlockKind.Bar),
  main: new HtmlDriver<HTMLElement>("main", BlockKind.Bar),
  map: new HtmlDriver<HTMLMapElement>("map", BlockKind.Bar),
  mark: new HtmlDriver<HTMLElement>("mark", BlockKind.Bar),
  menu: new HtmlDriver<HTMLElement>("menu", BlockKind.Bar),
  menuitem: new HtmlDriver<HTMLElement>("menuitem", BlockKind.Bar),
  meta: new HtmlDriver<HTMLMetaElement>("meta", BlockKind.Bar),
  meter: new HtmlDriver<HTMLElement>("meter", BlockKind.Bar),
  nav: new HtmlDriver<HTMLElement>("nav", BlockKind.Bar),
  noindex: new HtmlDriver<HTMLElement>("noindex", BlockKind.Bar),
  noscript: new HtmlDriver<HTMLElement>("noscript", BlockKind.Bar),
  object: new HtmlDriver<HTMLObjectElement>("object", BlockKind.Bar),
  ol: new HtmlDriver<HTMLOListElement>("ol", BlockKind.Bar),
  optgroup: new HtmlDriver<HTMLOptGroupElement>("optgroup", BlockKind.Bar),
  option: new HtmlDriver<HTMLOptionElement>("option", BlockKind.Bar),
  output: new HtmlDriver<HTMLElement>("output", BlockKind.Bar),
  p: new HtmlDriver<HTMLParagraphElement>("p", BlockKind.Bar),
  param: new HtmlDriver<HTMLElement>("param", BlockKind.Bar),
  picture: new HtmlDriver<HTMLElement>("picture", BlockKind.Bar),
  pre: new HtmlDriver<HTMLPreElement>("pre", BlockKind.Bar),
  progress: new HtmlDriver<HTMLProgressElement>("progress", BlockKind.Bar),
  q: new HtmlDriver<HTMLQuoteElement>("q", BlockKind.Bar),
  rp: new HtmlDriver<HTMLElement>("rp", BlockKind.Bar),
  rt: new HtmlDriver<HTMLElement>("rt", BlockKind.Bar),
  ruby: new HtmlDriver<HTMLElement>("ruby", BlockKind.Bar),
  s: new HtmlDriver<HTMLElement>("s", BlockKind.Bar),
  samp: new HtmlDriver<HTMLElement>("samp", BlockKind.Bar),
  script: new HtmlDriver<HTMLScriptElement>("script", BlockKind.Bar),
  section: new HtmlDriver<HTMLElement>("section", BlockKind.Bar),
  select: new HtmlDriver<HTMLSelectElement>("select", BlockKind.Bar),
  small: new HtmlDriver<HTMLElement>("small", BlockKind.Bar),
  source: new HtmlDriver<HTMLSourceElement>("source", BlockKind.Bar),
  span: new HtmlDriver<HTMLSpanElement>("span", BlockKind.Bar),
  strong: new HtmlDriver<HTMLElement>("strong", BlockKind.Bar),
  style: new HtmlDriver<HTMLStyleElement>("style", BlockKind.Bar),
  sub: new HtmlDriver<HTMLElement>("sub", BlockKind.Bar),
  summary: new HtmlDriver<HTMLElement>("summary", BlockKind.Bar),
  sup: new HtmlDriver<HTMLElement>("sup", BlockKind.Bar),
  table: new HtmlDriver<HTMLTableElement>("table", BlockKind.Bar),
  template: new HtmlDriver<HTMLTemplateElement>("template", BlockKind.Bar),
  tbody: new HtmlDriver<HTMLTableSectionElement>("tbody", BlockKind.Bar),
  td: new HtmlDriver<HTMLTableCellElement>("td", BlockKind.Bar),
  textarea: new HtmlDriver<HTMLTextAreaElement>("textarea", BlockKind.Bar),
  tfoot: new HtmlDriver<HTMLTableSectionElement>("tfoot", BlockKind.Bar),
  th: new HtmlDriver<HTMLTableCellElement>("th", BlockKind.Bar),
  thead: new HtmlDriver<HTMLTableSectionElement>("thead", BlockKind.Bar),
  time: new HtmlDriver<HTMLElement>("time", BlockKind.Bar),
  title: new HtmlDriver<HTMLTitleElement>("title", BlockKind.Bar),
  tr: new HtmlDriver<HTMLTableRowElement>("tr", BlockKind.Bar),
  track: new HtmlDriver<HTMLTrackElement>("track", BlockKind.Bar),
  u: new HtmlDriver<HTMLElement>("u", BlockKind.Bar),
  ul: new HtmlDriver<HTMLUListElement>("ul", BlockKind.Bar),
  var: new HtmlDriver<HTMLElement>("var", BlockKind.Bar),
  video: new HtmlDriver<HTMLVideoElement>("video", BlockKind.Bar),
  wbr: new HtmlDriver<HTMLElement>("wbr", BlockKind.Bar),
  // webview: new HtmlNodeFactory<HTMLWebViewElement>('webview', BlockKind.Bar),
}

const SvgTags = {
  svg: new SvgDriver<SVGSVGElement>("svg", BlockKind.Bar),
  a: new SvgDriver<SVGAElement>("a", BlockKind.Bar),
  animate: new SvgDriver<SVGAnimateElement>("animate", BlockKind.Bar),
  animateMotion: new SvgDriver<SVGAnimateMotionElement>("animateMotion", BlockKind.Bar),
  animateTransform: new SvgDriver<SVGAnimateTransformElement>("animateTransform", BlockKind.Bar),
  circle: new SvgDriver<SVGCircleElement>("circle", BlockKind.Bar),
  clipPath: new SvgDriver<SVGClipPathElement>("clipPath", BlockKind.Bar),
  defs: new SvgDriver<SVGDefsElement>("defs", BlockKind.Bar),
  desc: new SvgDriver<SVGDescElement>("desc", BlockKind.Bar),
  ellipse: new SvgDriver<SVGEllipseElement>("ellipse", BlockKind.Bar),
  feBlend: new SvgDriver<SVGFEBlendElement>("feBlend", BlockKind.Bar),
  feColorMatrix: new SvgDriver<SVGFEColorMatrixElement>("feColorMatrix", BlockKind.Bar),
  feComponentTransfer: new SvgDriver<SVGFEComponentTransferElement>("feComponentTransfer", BlockKind.Bar),
  feComposite: new SvgDriver<SVGFECompositeElement>("feComposite", BlockKind.Bar),
  feConvolveMatrix: new SvgDriver<SVGFEConvolveMatrixElement>("feConvolveMatrix", BlockKind.Bar),
  feDiffuseLighting: new SvgDriver<SVGFEDiffuseLightingElement>("feDiffuseLighting", BlockKind.Bar),
  feDisplacementMap: new SvgDriver<SVGFEDisplacementMapElement>("feDisplacementMap", BlockKind.Bar),
  feDistantLight: new SvgDriver<SVGFEDistantLightElement>("feDistantLight", BlockKind.Bar),
  feDropShadow: new SvgDriver<SVGFEDropShadowElement>("feDropShadow", BlockKind.Bar),
  feFlood: new SvgDriver<SVGFEFloodElement>("feFlood", BlockKind.Bar),
  feFuncA: new SvgDriver<SVGFEFuncAElement>("feFuncA", BlockKind.Bar),
  feFuncB: new SvgDriver<SVGFEFuncBElement>("feFuncB", BlockKind.Bar),
  feFuncG: new SvgDriver<SVGFEFuncGElement>("feFuncG", BlockKind.Bar),
  feFuncR: new SvgDriver<SVGFEFuncRElement>("feFuncR", BlockKind.Bar),
  feGaussianBlur: new SvgDriver<SVGFEGaussianBlurElement>("feGaussianBlur", BlockKind.Bar),
  feImage: new SvgDriver<SVGFEImageElement>("feImage", BlockKind.Bar),
  feMerge: new SvgDriver<SVGFEMergeElement>("feMerge", BlockKind.Bar),
  feMergeNode: new SvgDriver<SVGFEMergeNodeElement>("feMergeNode", BlockKind.Bar),
  feMorphology: new SvgDriver<SVGFEMorphologyElement>("feMorphology", BlockKind.Bar),
  feOffset: new SvgDriver<SVGFEOffsetElement>("feOffset", BlockKind.Bar),
  fePointLight: new SvgDriver<SVGFEPointLightElement>("fePointLight", BlockKind.Bar),
  feSpecularLighting: new SvgDriver<SVGFESpecularLightingElement>("feSpecularLighting", BlockKind.Bar),
  feSpotLight: new SvgDriver<SVGFESpotLightElement>("feSpotLight", BlockKind.Bar),
  feTile: new SvgDriver<SVGFETileElement>("feTile", BlockKind.Bar),
  feTurbulence: new SvgDriver<SVGFETurbulenceElement>("feTurbulence", BlockKind.Bar),
  filter: new SvgDriver<SVGFilterElement>("filter", BlockKind.Bar),
  foreignObject: new SvgDriver<SVGForeignObjectElement>("foreignObject", BlockKind.Bar),
  g: new SvgDriver<SVGGElement>("g", BlockKind.Bar),
  image: new SvgDriver<SVGImageElement>("image", BlockKind.Bar),
  line: new SvgDriver<SVGLineElement>("line", BlockKind.Bar),
  linearGradient: new SvgDriver<SVGLinearGradientElement>("linearGradient", BlockKind.Bar),
  marker: new SvgDriver<SVGMarkerElement>("marker", BlockKind.Bar),
  mask: new SvgDriver<SVGMaskElement>("mask", BlockKind.Bar),
  metadata: new SvgDriver<SVGMetadataElement>("metadata", BlockKind.Bar),
  mpath: new SvgDriver<SVGElement>("mpath", BlockKind.Bar),
  path: new SvgDriver<SVGPathElement>("path", BlockKind.Bar),
  pattern: new SvgDriver<SVGPatternElement>("pattern", BlockKind.Bar),
  polygon: new SvgDriver<SVGPolygonElement>("polygon", BlockKind.Bar),
  polyline: new SvgDriver<SVGPolylineElement>("polyline", BlockKind.Bar),
  radialGradient: new SvgDriver<SVGRadialGradientElement>("radialGradient", BlockKind.Bar),
  rect: new SvgDriver<SVGRectElement>("rect", BlockKind.Bar),
  stop: new SvgDriver<SVGStopElement>("stop", BlockKind.Bar),
  switch: new SvgDriver<SVGSwitchElement>("switch", BlockKind.Bar),
  symbol: new SvgDriver<SVGSymbolElement>("symbol", BlockKind.Bar),
  text: new SvgDriver<SVGTextElement>("text", BlockKind.Bar),
  textPath: new SvgDriver<SVGTextPathElement>("textPath", BlockKind.Bar),
  tspan: new SvgDriver<SVGTSpanElement>("tspan", BlockKind.Bar),
  use: new SvgDriver<SVGUseElement>("use", BlockKind.Bar),
  view: new SvgDriver<SVGViewElement>("view", BlockKind.Bar),
}
