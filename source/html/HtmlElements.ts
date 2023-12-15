// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { RxNode, RxNodeDecl } from "reactronic"
import { El, ElKind } from "./El.js"
import { HtmlElementDriver, StaticDriver, SvgElementDriver } from "./HtmlDriver.js"

export function HtmlBody(declaration?: RxNodeDecl<El<HTMLElement>>, preset?: RxNodeDecl<El<HTMLElement>>): RxNode<El<HTMLElement>> {
  const driver = new StaticDriver(global.document.body, "HtmlBody", false, el => el.kind = ElKind.Section)
  return RxNode.acquire(driver, declaration, preset)
}

export function A<M = unknown>(declaration?: RxNodeDecl<El<HTMLAnchorElement, M, void>>, preset?: RxNodeDecl<El<HTMLAnchorElement, M, void>>): RxNode<El<HTMLAnchorElement, M, void>> { return RxNode.acquire(HtmlTags.a, declaration, preset) }
export function Abbr<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.abbr, declaration, preset) }
export function Address<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.address, declaration, preset) }
export function Area<M = unknown>(declaration?: RxNodeDecl<El<HTMLAreaElement, M, void>>, preset?: RxNodeDecl<El<HTMLAreaElement, M, void>>): RxNode<El<HTMLAreaElement, M, void>> { return RxNode.acquire(HtmlTags.area, declaration, preset) }
export function Article<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.article, declaration, preset) }
export function Aside<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.aside, declaration, preset) }
export function Audio<M = unknown>(declaration?: RxNodeDecl<El<HTMLAudioElement, M, void>>, preset?: RxNodeDecl<El<HTMLAudioElement, M, void>>): RxNode<El<HTMLAudioElement, M, void>> { return RxNode.acquire(HtmlTags.audio, declaration, preset) }
export function B<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.b, declaration, preset) }
export function Base<M = unknown>(declaration?: RxNodeDecl<El<HTMLBaseElement, M, void>>, preset?: RxNodeDecl<El<HTMLBaseElement, M, void>>): RxNode<El<HTMLBaseElement, M, void>> { return RxNode.acquire(HtmlTags.base, declaration, preset) }
export function Bdi<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.bdi, declaration, preset) }
export function Bdo<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.bdo, declaration, preset) }
export function Big<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.big, declaration, preset) }
export function BlockQuote<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.blockquote, declaration, preset) }
export function Body<M = unknown>(declaration?: RxNodeDecl<El<HTMLBodyElement, M, void>>, preset?: RxNodeDecl<El<HTMLBodyElement, M, void>>): RxNode<El<HTMLBodyElement, M, void>> { return RxNode.acquire(HtmlTags.body, declaration, preset) }
export function BR<M = unknown>(declaration?: RxNodeDecl<El<HTMLBRElement, M, void>>, preset?: RxNodeDecl<El<HTMLBRElement, M, void>>): RxNode<El<HTMLBRElement, M, void>> { return RxNode.acquire(HtmlTags.br, declaration, preset) }
export function Button<M = unknown>(declaration?: RxNodeDecl<El<HTMLButtonElement, M, void>>, preset?: RxNodeDecl<El<HTMLButtonElement, M, void>>): RxNode<El<HTMLButtonElement, M, void>> { return RxNode.acquire(HtmlTags.button, declaration, preset) }
export function Canvas<M = unknown>(declaration?: RxNodeDecl<El<HTMLCanvasElement, M, void>>, preset?: RxNodeDecl<El<HTMLCanvasElement, M, void>>): RxNode<El<HTMLCanvasElement, M, void>> { return RxNode.acquire(HtmlTags.canvas, declaration, preset) }
export function Caption<M = unknown>(declaration?: RxNodeDecl<El<HTMLTableCaptionElement, M, void>>, preset?: RxNodeDecl<El<HTMLTableCaptionElement, M, void>>): RxNode<El<HTMLTableCaptionElement, M, void>> { return RxNode.acquire(HtmlTags.caption, declaration, preset) }
export function Cite<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.cite, declaration, preset) }
export function Code<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.code, declaration, preset) }
export function Col<M = unknown>(declaration?: RxNodeDecl<El<HTMLTableColElement, M, void>>, preset?: RxNodeDecl<El<HTMLTableColElement, M, void>>): RxNode<El<HTMLTableColElement, M, void>> { return RxNode.acquire(HtmlTags.col, declaration, preset) }
export function ColGroup<M = unknown>(declaration?: RxNodeDecl<El<HTMLTableColElement, M, void>>, preset?: RxNodeDecl<El<HTMLTableColElement, M, void>>): RxNode<El<HTMLTableColElement, M, void>> { return RxNode.acquire(HtmlTags.colgroup, declaration, preset) }
export function Data<M = unknown>(declaration?: RxNodeDecl<El<HTMLDataElement, M, void>>, preset?: RxNodeDecl<El<HTMLDataElement, M, void>>): RxNode<El<HTMLDataElement, M, void>> { return RxNode.acquire(HtmlTags.data, declaration, preset) }
export function DataList<M = unknown>(declaration?: RxNodeDecl<El<HTMLDataListElement, M, void>>, preset?: RxNodeDecl<El<HTMLDataListElement, M, void>>): RxNode<El<HTMLDataListElement, M, void>> { return RxNode.acquire(HtmlTags.datalist, declaration, preset) }
export function DD<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.dd, declaration, preset) }
export function Del<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.del, declaration, preset) }
export function Details<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.details, declaration, preset) }
export function Dfn<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.dfn, declaration, preset) }
export function Div<M = unknown>(declaration?: RxNodeDecl<El<HTMLDivElement, M, void>>, preset?: RxNodeDecl<El<HTMLDivElement, M, void>>): RxNode<El<HTMLDivElement, M, void>> { return RxNode.acquire(HtmlTags.div, declaration, preset) }
export function DL<M = unknown>(declaration?: RxNodeDecl<El<HTMLDListElement, M, void>>, preset?: RxNodeDecl<El<HTMLDListElement, M, void>>): RxNode<El<HTMLDListElement, M, void>> { return RxNode.acquire(HtmlTags.dl, declaration, preset) }
export function DT<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.dt, declaration, preset) }
export function EM<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.em, declaration, preset) }
export function Embed<M = unknown>(declaration?: RxNodeDecl<El<HTMLEmbedElement, M, void>>, preset?: RxNodeDecl<El<HTMLEmbedElement, M, void>>): RxNode<El<HTMLEmbedElement, M, void>> { return RxNode.acquire(HtmlTags.embed, declaration, preset) }
export function FieldSet<M = unknown>(declaration?: RxNodeDecl<El<HTMLFieldSetElement, M, void>>, preset?: RxNodeDecl<El<HTMLFieldSetElement, M, void>>): RxNode<El<HTMLFieldSetElement, M, void>> { return RxNode.acquire(HtmlTags.fieldset, declaration, preset) }
export function FigCaption<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.figcaption, declaration, preset) }
export function Figure<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.figure, declaration, preset) }
export function Footer<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.footer, declaration, preset) }
export function Form<M = unknown>(declaration?: RxNodeDecl<El<HTMLFormElement, M, void>>, preset?: RxNodeDecl<El<HTMLFormElement, M, void>>): RxNode<El<HTMLFormElement, M, void>> { return RxNode.acquire(HtmlTags.form, declaration, preset) }
export function H1<M = unknown>(declaration?: RxNodeDecl<El<HTMLHeadingElement, M, void>>, preset?: RxNodeDecl<El<HTMLHeadingElement, M, void>>): RxNode<El<HTMLHeadingElement, M, void>> { return RxNode.acquire(HtmlTags.h1, declaration, preset) }
export function H2<M = unknown>(declaration?: RxNodeDecl<El<HTMLHeadingElement, M, void>>, preset?: RxNodeDecl<El<HTMLHeadingElement, M, void>>): RxNode<El<HTMLHeadingElement, M, void>> { return RxNode.acquire(HtmlTags.h2, declaration, preset) }
export function H3<M = unknown>(declaration?: RxNodeDecl<El<HTMLHeadingElement, M, void>>, preset?: RxNodeDecl<El<HTMLHeadingElement, M, void>>): RxNode<El<HTMLHeadingElement, M, void>> { return RxNode.acquire(HtmlTags.h3, declaration, preset) }
export function H4<M = unknown>(declaration?: RxNodeDecl<El<HTMLHeadingElement, M, void>>, preset?: RxNodeDecl<El<HTMLHeadingElement, M, void>>): RxNode<El<HTMLHeadingElement, M, void>> { return RxNode.acquire(HtmlTags.h4, declaration, preset) }
export function H5<M = unknown>(declaration?: RxNodeDecl<El<HTMLHeadingElement, M, void>>, preset?: RxNodeDecl<El<HTMLHeadingElement, M, void>>): RxNode<El<HTMLHeadingElement, M, void>> { return RxNode.acquire(HtmlTags.h5, declaration, preset) }
export function H6<M = unknown>(declaration?: RxNodeDecl<El<HTMLHeadingElement, M, void>>, preset?: RxNodeDecl<El<HTMLHeadingElement, M, void>>): RxNode<El<HTMLHeadingElement, M, void>> { return RxNode.acquire(HtmlTags.h6, declaration, preset) }
export function Head<M = unknown>(declaration?: RxNodeDecl<El<HTMLHeadElement, M, void>>, preset?: RxNodeDecl<El<HTMLHeadElement, M, void>>): RxNode<El<HTMLHeadElement, M, void>> { return RxNode.acquire(HtmlTags.head, declaration, preset) }
export function Header<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.header, declaration, preset) }
export function HGroup<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.hgroup, declaration, preset) }
export function HR<M = unknown>(declaration?: RxNodeDecl<El<HTMLHRElement, M, void>>, preset?: RxNodeDecl<El<HTMLHRElement, M, void>>): RxNode<El<HTMLHRElement, M, void>> { return RxNode.acquire(HtmlTags.hr, declaration, preset) }
export function Html<M = unknown>(declaration?: RxNodeDecl<El<HTMLHtmlElement, M, void>>, preset?: RxNodeDecl<El<HTMLHtmlElement, M, void>>): RxNode<El<HTMLHtmlElement, M, void>> { return RxNode.acquire(HtmlTags.html, declaration, preset) }
export function I<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.i, declaration, preset) }
export function IFrame<M = unknown>(declaration?: RxNodeDecl<El<HTMLIFrameElement, M, void>>, preset?: RxNodeDecl<El<HTMLIFrameElement, M, void>>): RxNode<El<HTMLIFrameElement, M, void>> { return RxNode.acquire(HtmlTags.iframe, declaration, preset) }
export function Img<M = unknown>(declaration?: RxNodeDecl<El<HTMLImageElement, M, void>>, preset?: RxNodeDecl<El<HTMLImageElement, M, void>>): RxNode<El<HTMLImageElement, M, void>> { return RxNode.acquire(HtmlTags.img, declaration, preset) }
export function Input<M = unknown>(declaration?: RxNodeDecl<El<HTMLInputElement, M, void>>, preset?: RxNodeDecl<El<HTMLInputElement, M, void>>): RxNode<El<HTMLInputElement, M, void>> { return RxNode.acquire(HtmlTags.input, declaration, preset) }
export function Ins<M = unknown>(declaration?: RxNodeDecl<El<HTMLModElement, M, void>>, preset?: RxNodeDecl<El<HTMLModElement, M, void>>): RxNode<El<HTMLModElement, M, void>> { return RxNode.acquire(HtmlTags.ins, declaration, preset) }
export function Kbd<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.kbd, declaration, preset) }
export function KeyGen<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.keygen, declaration, preset) }
export function Label<M = unknown>(declaration?: RxNodeDecl<El<HTMLLabelElement, M, void>>, preset?: RxNodeDecl<El<HTMLLabelElement, M, void>>): RxNode<El<HTMLLabelElement, M, void>> { return RxNode.acquire(HtmlTags.label, declaration, preset) }
export function Legend<M = unknown>(declaration?: RxNodeDecl<El<HTMLLegendElement, M, void>>, preset?: RxNodeDecl<El<HTMLLegendElement, M, void>>): RxNode<El<HTMLLegendElement, M, void>> { return RxNode.acquire(HtmlTags.legend, declaration, preset) }
export function LI<M = unknown>(declaration?: RxNodeDecl<El<HTMLLIElement, M, void>>, preset?: RxNodeDecl<El<HTMLLIElement, M, void>>): RxNode<El<HTMLLIElement, M, void>> { return RxNode.acquire(HtmlTags.li, declaration, preset) }
export function Link<M = unknown>(declaration?: RxNodeDecl<El<HTMLLinkElement, M, void>>, preset?: RxNodeDecl<El<HTMLLinkElement, M, void>>): RxNode<El<HTMLLinkElement, M, void>> { return RxNode.acquire(HtmlTags.link, declaration, preset) }
export function Main<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.main, declaration, preset) }
export function Map<M = unknown>(declaration?: RxNodeDecl<El<HTMLMapElement, M, void>>, preset?: RxNodeDecl<El<HTMLMapElement, M, void>>): RxNode<El<HTMLMapElement, M, void>> { return RxNode.acquire(HtmlTags.map, declaration, preset) }
export function Mark<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.mark, declaration, preset) }
export function Menu<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.menu, declaration, preset) }
export function MenuItem<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.menuitem, declaration, preset) }
export function Meta<M = unknown>(declaration?: RxNodeDecl<El<HTMLMetaElement, M, void>>, preset?: RxNodeDecl<El<HTMLMetaElement, M, void>>): RxNode<El<HTMLMetaElement, M, void>> { return RxNode.acquire(HtmlTags.meta, declaration, preset) }
export function Meter<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.meter, declaration, preset) }
export function Nav<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.nav, declaration, preset) }
export function NoIndex<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.noindex, declaration, preset) }
export function NoScript<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.noscript, declaration, preset) }
export function Obj<M = unknown>(declaration?: RxNodeDecl<El<HTMLObjectElement, M, void>>, preset?: RxNodeDecl<El<HTMLObjectElement, M, void>>): RxNode<El<HTMLObjectElement, M, void>> { return RxNode.acquire(HtmlTags.object, declaration, preset) }
export function OL<M = unknown>(declaration?: RxNodeDecl<El<HTMLOListElement, M, void>>, preset?: RxNodeDecl<El<HTMLOListElement, M, void>>): RxNode<El<HTMLOListElement, M, void>> { return RxNode.acquire(HtmlTags.ol, declaration, preset) }
export function OptGroup<M = unknown>(declaration?: RxNodeDecl<El<HTMLOptGroupElement, M, void>>, preset?: RxNodeDecl<El<HTMLOptGroupElement, M, void>>): RxNode<El<HTMLOptGroupElement, M, void>> { return RxNode.acquire(HtmlTags.optgroup, declaration, preset) }
export function Option<M = unknown>(declaration?: RxNodeDecl<El<HTMLOptionElement, M, void>>, preset?: RxNodeDecl<El<HTMLOptionElement, M, void>>): RxNode<El<HTMLOptionElement, M, void>> { return RxNode.acquire(HtmlTags.option, declaration, preset) }
export function Output<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.output, declaration, preset) }
export function P<M = unknown>(declaration?: RxNodeDecl<El<HTMLParagraphElement, M, void>>, preset?: RxNodeDecl<El<HTMLParagraphElement, M, void>>): RxNode<El<HTMLParagraphElement, M, void>> { return RxNode.acquire(HtmlTags.p, declaration, preset) }
export function Param<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.param, declaration, preset) }
export function Picture<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.picture, declaration, preset) }
export function Pre<M = unknown>(declaration?: RxNodeDecl<El<HTMLPreElement, M, void>>, preset?: RxNodeDecl<El<HTMLPreElement, M, void>>): RxNode<El<HTMLPreElement, M, void>> { return RxNode.acquire(HtmlTags.pre, declaration, preset) }
export function Progress<M = unknown>(declaration?: RxNodeDecl<El<HTMLProgressElement, M, void>>, preset?: RxNodeDecl<El<HTMLProgressElement, M, void>>): RxNode<El<HTMLProgressElement, M, void>> { return RxNode.acquire(HtmlTags.progress, declaration, preset) }
export function Q<M = unknown>(declaration?: RxNodeDecl<El<HTMLQuoteElement, M, void>>, preset?: RxNodeDecl<El<HTMLQuoteElement, M, void>>): RxNode<El<HTMLQuoteElement, M, void>> { return RxNode.acquire(HtmlTags.q, declaration, preset) }
export function RP<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.rp, declaration, preset) }
export function RT<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.rt, declaration, preset) }
export function Ruby<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.ruby, declaration, preset) }
export function S<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.s, declaration, preset) }
export function Samp<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.samp, declaration, preset) }
export function Script<M = unknown>(declaration?: RxNodeDecl<El<HTMLScriptElement, M, void>>, preset?: RxNodeDecl<El<HTMLScriptElement, M, void>>): RxNode<El<HTMLScriptElement, M, void>> { return RxNode.acquire(HtmlTags.script, declaration, preset) }
export function Sctn<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.section, declaration, preset) }
export function Select<M = unknown>(declaration?: RxNodeDecl<El<HTMLSelectElement, M, void>>, preset?: RxNodeDecl<El<HTMLSelectElement, M, void>>): RxNode<El<HTMLSelectElement, M, void>> { return RxNode.acquire(HtmlTags.select, declaration, preset) }
export function Small<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.small, declaration, preset) }
export function Source<M = unknown>(declaration?: RxNodeDecl<El<HTMLSourceElement, M, void>>, preset?: RxNodeDecl<El<HTMLSourceElement, M, void>>): RxNode<El<HTMLSourceElement, M, void>> { return RxNode.acquire(HtmlTags.source, declaration, preset) }
export function Span<M = unknown>(declaration?: RxNodeDecl<El<HTMLSpanElement, M, void>>, preset?: RxNodeDecl<El<HTMLSpanElement, M, void>>): RxNode<El<HTMLSpanElement, M, void>> { return RxNode.acquire(HtmlTags.span, declaration, preset) }
export function Strong<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.strong, declaration, preset) }
export function Style<M = unknown>(declaration?: RxNodeDecl<El<HTMLStyleElement, M, void>>, preset?: RxNodeDecl<El<HTMLStyleElement, M, void>>): RxNode<El<HTMLStyleElement, M, void>> { return RxNode.acquire(HtmlTags.style, declaration, preset) }
export function Sub<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.sub, declaration, preset) }
export function Summary<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.summary, declaration, preset) }
export function Sup<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.sup, declaration, preset) }
export function Tbl<M = unknown>(declaration?: RxNodeDecl<El<HTMLTableElement, M, void>>, preset?: RxNodeDecl<El<HTMLTableElement, M, void>>): RxNode<El<HTMLTableElement, M, void>> { return RxNode.acquire(HtmlTags.table, declaration, preset) }
export function Template<M = unknown>(declaration?: RxNodeDecl<El<HTMLTemplateElement, M, void>>, preset?: RxNodeDecl<El<HTMLTemplateElement, M, void>>): RxNode<El<HTMLTemplateElement, M, void>> { return RxNode.acquire(HtmlTags.template, declaration, preset) }
export function TBody<M = unknown>(declaration?: RxNodeDecl<El<HTMLTableSectionElement, M, void>>, preset?: RxNodeDecl<El<HTMLTableSectionElement, M, void>>): RxNode<El<HTMLTableSectionElement, M, void>> { return RxNode.acquire(HtmlTags.tbody, declaration, preset) }
export function TD<M = unknown>(declaration?: RxNodeDecl<El<HTMLTableCellElement, M, void>>, preset?: RxNodeDecl<El<HTMLTableCellElement, M, void>>): RxNode<El<HTMLTableCellElement, M, void>> { return RxNode.acquire(HtmlTags.td, declaration, preset) }
export function TextArea<M = unknown>(declaration?: RxNodeDecl<El<HTMLTextAreaElement, M, void>>, preset?: RxNodeDecl<El<HTMLTextAreaElement, M, void>>): RxNode<El<HTMLTextAreaElement, M, void>> { return RxNode.acquire(HtmlTags.textarea, declaration, preset) }
export function TFoot<M = unknown>(declaration?: RxNodeDecl<El<HTMLTableSectionElement, M, void>>, preset?: RxNodeDecl<El<HTMLTableSectionElement, M, void>>): RxNode<El<HTMLTableSectionElement, M, void>> { return RxNode.acquire(HtmlTags.tfoot, declaration, preset) }
export function TH<M = unknown>(declaration?: RxNodeDecl<El<HTMLTableCellElement, M, void>>, preset?: RxNodeDecl<El<HTMLTableCellElement, M, void>>): RxNode<El<HTMLTableCellElement, M, void>> { return RxNode.acquire(HtmlTags.th, declaration, preset) }
export function THead<M = unknown>(declaration?: RxNodeDecl<El<HTMLTableSectionElement, M, void>>, preset?: RxNodeDecl<El<HTMLTableSectionElement, M, void>>): RxNode<El<HTMLTableSectionElement, M, void>> { return RxNode.acquire(HtmlTags.thead, declaration, preset) }
export function Time<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.time, declaration, preset) }
export function Title<M = unknown>(declaration?: RxNodeDecl<El<HTMLTitleElement, M, void>>, preset?: RxNodeDecl<El<HTMLTitleElement, M, void>>): RxNode<El<HTMLTitleElement, M, void>> { return RxNode.acquire(HtmlTags.title, declaration, preset) }
export function TR<M = unknown>(declaration?: RxNodeDecl<El<HTMLTableRowElement, M, void>>, preset?: RxNodeDecl<El<HTMLTableRowElement, M, void>>): RxNode<El<HTMLTableRowElement, M, void>> { return RxNode.acquire(HtmlTags.tr, declaration, preset) }
export function Track<M = unknown>(declaration?: RxNodeDecl<El<HTMLTrackElement, M, void>>, preset?: RxNodeDecl<El<HTMLTrackElement, M, void>>): RxNode<El<HTMLTrackElement, M, void>> { return RxNode.acquire(HtmlTags.track, declaration, preset) }
export function U<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.u, declaration, preset) }
export function UL<M = unknown>(declaration?: RxNodeDecl<El<HTMLUListElement, M, void>>, preset?: RxNodeDecl<El<HTMLUListElement, M, void>>): RxNode<El<HTMLUListElement, M, void>> { return RxNode.acquire(HtmlTags.ul, declaration, preset) }
export function Var<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.var, declaration, preset) }
export function Video<M = unknown>(declaration?: RxNodeDecl<El<HTMLVideoElement, M, void>>, preset?: RxNodeDecl<El<HTMLVideoElement, M, void>>): RxNode<El<HTMLVideoElement, M, void>> { return RxNode.acquire(HtmlTags.video, declaration, preset) }
export function Wbr<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M, void>>, preset?: RxNodeDecl<El<HTMLElement, M, void>>): RxNode<El<HTMLElement, M, void>> { return RxNode.acquire(HtmlTags.wbr, declaration, preset) }

export function Svg<M = unknown>(declaration?: RxNodeDecl<El<SVGSVGElement, M, void>>, preset?: RxNodeDecl<El<SVGSVGElement, M, void>>): RxNode<El<SVGSVGElement, M, void>> { return RxNode.acquire(SvgTags.svg, declaration, preset) }
export function SvgA<M = unknown>(declaration?: RxNodeDecl<El<SVGAElement, M, void>>, preset?: RxNodeDecl<El<SVGAElement, M, void>>): RxNode<El<SVGAElement, M, void>> { return RxNode.acquire(SvgTags.a, declaration, preset) }
export function Animate<M = unknown>(declaration?: RxNodeDecl<El<SVGAnimateElement, M, void>>, preset?: RxNodeDecl<El<SVGAnimateElement, M, void>>): RxNode<El<SVGAnimateElement, M, void>> { return RxNode.acquire(SvgTags.animate, declaration, preset) }
export function AnimateMotion<M = unknown>(declaration?: RxNodeDecl<El<SVGAnimateMotionElement, M, void>>, preset?: RxNodeDecl<El<SVGAnimateMotionElement, M, void>>): RxNode<El<SVGAnimateMotionElement, M, void>> { return RxNode.acquire(SvgTags.animateMotion, declaration, preset) }
export function AnimateTransform<M = unknown>(declaration?: RxNodeDecl<El<SVGAnimateTransformElement, M, void>>, preset?: RxNodeDecl<El<SVGAnimateTransformElement, M, void>>): RxNode<El<SVGAnimateTransformElement, M, void>> { return RxNode.acquire(SvgTags.animateTransform, declaration, preset) }
export function Circle<M = unknown>(declaration?: RxNodeDecl<El<SVGCircleElement, M, void>>, preset?: RxNodeDecl<El<SVGCircleElement, M, void>>): RxNode<El<SVGCircleElement, M, void>> { return RxNode.acquire(SvgTags.circle, declaration, preset) }
export function ClipPath<M = unknown>(declaration?: RxNodeDecl<El<SVGClipPathElement, M, void>>, preset?: RxNodeDecl<El<SVGClipPathElement, M, void>>): RxNode<El<SVGClipPathElement, M, void>> { return RxNode.acquire(SvgTags.clipPath, declaration, preset) }
export function Defs<M = unknown>(declaration?: RxNodeDecl<El<SVGDefsElement, M, void>>, preset?: RxNodeDecl<El<SVGDefsElement, M, void>>): RxNode<El<SVGDefsElement, M, void>> { return RxNode.acquire(SvgTags.defs, declaration, preset) }
export function Desc<M = unknown>(declaration?: RxNodeDecl<El<SVGDescElement, M, void>>, preset?: RxNodeDecl<El<SVGDescElement, M, void>>): RxNode<El<SVGDescElement, M, void>> { return RxNode.acquire(SvgTags.desc, declaration, preset) }
export function Ellipse<M = unknown>(declaration?: RxNodeDecl<El<SVGEllipseElement, M, void>>, preset?: RxNodeDecl<El<SVGEllipseElement, M, void>>): RxNode<El<SVGEllipseElement, M, void>> { return RxNode.acquire(SvgTags.ellipse, declaration, preset) }
export function FeBlend<M = unknown>(declaration?: RxNodeDecl<El<SVGFEBlendElement, M, void>>, preset?: RxNodeDecl<El<SVGFEBlendElement, M, void>>): RxNode<El<SVGFEBlendElement, M, void>> { return RxNode.acquire(SvgTags.feBlend, declaration, preset) }
export function FeColorMatrix<M = unknown>(declaration?: RxNodeDecl<El<SVGFEColorMatrixElement, M, void>>, preset?: RxNodeDecl<El<SVGFEColorMatrixElement, M, void>>): RxNode<El<SVGFEColorMatrixElement, M, void>> { return RxNode.acquire(SvgTags.feColorMatrix, declaration, preset) }
export function FeComponentTransfer<M = unknown>(declaration?: RxNodeDecl<El<SVGFEComponentTransferElement, M, void>>, preset?: RxNodeDecl<El<SVGFEComponentTransferElement, M, void>>): RxNode<El<SVGFEComponentTransferElement, M, void>> { return RxNode.acquire(SvgTags.feComponentTransfer, declaration, preset) }
export function FeComposite<M = unknown>(declaration?: RxNodeDecl<El<SVGFECompositeElement, M, void>>, preset?: RxNodeDecl<El<SVGFECompositeElement, M, void>>): RxNode<El<SVGFECompositeElement, M, void>> { return RxNode.acquire(SvgTags.feComposite, declaration, preset) }
export function FeConvolveMatrix<M = unknown>(declaration?: RxNodeDecl<El<SVGFEConvolveMatrixElement, M, void>>, preset?: RxNodeDecl<El<SVGFEConvolveMatrixElement, M, void>>): RxNode<El<SVGFEConvolveMatrixElement, M, void>> { return RxNode.acquire(SvgTags.feConvolveMatrix, declaration, preset) }
export function FeDiffuseLighting<M = unknown>(declaration?: RxNodeDecl<El<SVGFEDiffuseLightingElement, M, void>>, preset?: RxNodeDecl<El<SVGFEDiffuseLightingElement, M, void>>): RxNode<El<SVGFEDiffuseLightingElement, M, void>> { return RxNode.acquire(SvgTags.feDiffuseLighting, declaration, preset) }
export function FeDisplacementMap<M = unknown>(declaration?: RxNodeDecl<El<SVGFEDisplacementMapElement, M, void>>, preset?: RxNodeDecl<El<SVGFEDisplacementMapElement, M, void>>): RxNode<El<SVGFEDisplacementMapElement, M, void>> { return RxNode.acquire(SvgTags.feDisplacementMap, declaration, preset) }
export function FeDistantLight<M = unknown>(declaration?: RxNodeDecl<El<SVGFEDistantLightElement, M, void>>, preset?: RxNodeDecl<El<SVGFEDistantLightElement, M, void>>): RxNode<El<SVGFEDistantLightElement, M, void>> { return RxNode.acquire(SvgTags.feDistantLight, declaration, preset) }
export function FeDropShadow<M = unknown>(declaration?: RxNodeDecl<El<SVGFEDropShadowElement, M, void>>, preset?: RxNodeDecl<El<SVGFEDropShadowElement, M, void>>): RxNode<El<SVGFEDropShadowElement, M, void>> { return RxNode.acquire(SvgTags.feDropShadow, declaration, preset) }
export function FeFlood<M = unknown>(declaration?: RxNodeDecl<El<SVGFEFloodElement, M, void>>, preset?: RxNodeDecl<El<SVGFEFloodElement, M, void>>): RxNode<El<SVGFEFloodElement, M, void>> { return RxNode.acquire(SvgTags.feFlood, declaration, preset) }
export function FeFuncA<M = unknown>(declaration?: RxNodeDecl<El<SVGFEFuncAElement, M, void>>, preset?: RxNodeDecl<El<SVGFEFuncAElement, M, void>>): RxNode<El<SVGFEFuncAElement, M, void>> { return RxNode.acquire(SvgTags.feFuncA, declaration, preset) }
export function FeFuncB<M = unknown>(declaration?: RxNodeDecl<El<SVGFEFuncBElement, M, void>>, preset?: RxNodeDecl<El<SVGFEFuncBElement, M, void>>): RxNode<El<SVGFEFuncBElement, M, void>> { return RxNode.acquire(SvgTags.feFuncB, declaration, preset) }
export function FeFuncG<M = unknown>(declaration?: RxNodeDecl<El<SVGFEFuncGElement, M, void>>, preset?: RxNodeDecl<El<SVGFEFuncGElement, M, void>>): RxNode<El<SVGFEFuncGElement, M, void>> { return RxNode.acquire(SvgTags.feFuncG, declaration, preset) }
export function FeFuncR<M = unknown>(declaration?: RxNodeDecl<El<SVGFEFuncRElement, M, void>>, preset?: RxNodeDecl<El<SVGFEFuncRElement, M, void>>): RxNode<El<SVGFEFuncRElement, M, void>> { return RxNode.acquire(SvgTags.feFuncR, declaration, preset) }
export function FeGaussianBlur<M = unknown>(declaration?: RxNodeDecl<El<SVGFEGaussianBlurElement, M, void>>, preset?: RxNodeDecl<El<SVGFEGaussianBlurElement, M, void>>): RxNode<El<SVGFEGaussianBlurElement, M, void>> { return RxNode.acquire(SvgTags.feGaussianBlur, declaration, preset) }
export function FeImage<M = unknown>(declaration?: RxNodeDecl<El<SVGFEImageElement, M, void>>, preset?: RxNodeDecl<El<SVGFEImageElement, M, void>>): RxNode<El<SVGFEImageElement, M, void>> { return RxNode.acquire(SvgTags.feImage, declaration, preset) }
export function FeMerge<M = unknown>(declaration?: RxNodeDecl<El<SVGFEMergeElement, M, void>>, preset?: RxNodeDecl<El<SVGFEMergeElement, M, void>>): RxNode<El<SVGFEMergeElement, M, void>> { return RxNode.acquire(SvgTags.feMerge, declaration, preset) }
export function FeMergeNode<M = unknown>(declaration?: RxNodeDecl<El<SVGFEMergeNodeElement, M, void>>, preset?: RxNodeDecl<El<SVGFEMergeNodeElement, M, void>>): RxNode<El<SVGFEMergeNodeElement, M, void>> { return RxNode.acquire(SvgTags.feMergeNode, declaration, preset) }
export function FeMorphology<M = unknown>(declaration?: RxNodeDecl<El<SVGFEMorphologyElement, M, void>>, preset?: RxNodeDecl<El<SVGFEMorphologyElement, M, void>>): RxNode<El<SVGFEMorphologyElement, M, void>> { return RxNode.acquire(SvgTags.feMorphology, declaration, preset) }
export function FeOffset<M = unknown>(declaration?: RxNodeDecl<El<SVGFEOffsetElement, M, void>>, preset?: RxNodeDecl<El<SVGFEOffsetElement, M, void>>): RxNode<El<SVGFEOffsetElement, M, void>> { return RxNode.acquire(SvgTags.feOffset, declaration, preset) }
export function FePointLight<M = unknown>(declaration?: RxNodeDecl<El<SVGFEPointLightElement, M, void>>, preset?: RxNodeDecl<El<SVGFEPointLightElement, M, void>>): RxNode<El<SVGFEPointLightElement, M, void>> { return RxNode.acquire(SvgTags.fePointLight, declaration, preset) }
export function FeSpecularLighting<M = unknown>(declaration?: RxNodeDecl<El<SVGFESpecularLightingElement, M, void>>, preset?: RxNodeDecl<El<SVGFESpecularLightingElement, M, void>>): RxNode<El<SVGFESpecularLightingElement, M, void>> { return RxNode.acquire(SvgTags.feSpecularLighting, declaration, preset) }
export function FeSpotLight<M = unknown>(declaration?: RxNodeDecl<El<SVGFESpotLightElement, M, void>>, preset?: RxNodeDecl<El<SVGFESpotLightElement, M, void>>): RxNode<El<SVGFESpotLightElement, M, void>> { return RxNode.acquire(SvgTags.feSpotLight, declaration, preset) }
export function FeTile<M = unknown>(declaration?: RxNodeDecl<El<SVGFETileElement, M, void>>, preset?: RxNodeDecl<El<SVGFETileElement, M, void>>): RxNode<El<SVGFETileElement, M, void>> { return RxNode.acquire(SvgTags.feTile, declaration, preset) }
export function FeTurbulence<M = unknown>(declaration?: RxNodeDecl<El<SVGFETurbulenceElement, M, void>>, preset?: RxNodeDecl<El<SVGFETurbulenceElement, M, void>>): RxNode<El<SVGFETurbulenceElement, M, void>> { return RxNode.acquire(SvgTags.feTurbulence, declaration, preset) }
export function Filter<M = unknown>(declaration?: RxNodeDecl<El<SVGFilterElement, M, void>>, preset?: RxNodeDecl<El<SVGFilterElement, M, void>>): RxNode<El<SVGFilterElement, M, void>> { return RxNode.acquire(SvgTags.filter, declaration, preset) }
export function ForeignObject<M = unknown>(declaration?: RxNodeDecl<El<SVGForeignObjectElement, M, void>>, preset?: RxNodeDecl<El<SVGForeignObjectElement, M, void>>): RxNode<El<SVGForeignObjectElement, M, void>> { return RxNode.acquire(SvgTags.foreignObject, declaration, preset) }
export function G<M = unknown>(declaration?: RxNodeDecl<El<SVGGElement, M, void>>, preset?: RxNodeDecl<El<SVGGElement, M, void>>): RxNode<El<SVGGElement, M, void>> { return RxNode.acquire(SvgTags.g, declaration, preset) }
export function SvgImage<M = unknown>(declaration?: RxNodeDecl<El<SVGImageElement, M, void>>, preset?: RxNodeDecl<El<SVGImageElement, M, void>>): RxNode<El<SVGImageElement, M, void>> { return RxNode.acquire(SvgTags.image, declaration, preset) }
export function SvgLine<M = unknown>(declaration?: RxNodeDecl<El<SVGLineElement, M, void>>, preset?: RxNodeDecl<El<SVGLineElement, M, void>>): RxNode<El<SVGLineElement, M, void>> { return RxNode.acquire(SvgTags.line, declaration, preset) }
export function LinearGradient<M = unknown>(declaration?: RxNodeDecl<El<SVGLinearGradientElement, M, void>>, preset?: RxNodeDecl<El<SVGLinearGradientElement, M, void>>): RxNode<El<SVGLinearGradientElement, M, void>> { return RxNode.acquire(SvgTags.linearGradient, declaration, preset) }
export function Marker<M = unknown>(declaration?: RxNodeDecl<El<SVGMarkerElement, M, void>>, preset?: RxNodeDecl<El<SVGMarkerElement, M, void>>): RxNode<El<SVGMarkerElement, M, void>> { return RxNode.acquire(SvgTags.marker, declaration, preset) }
export function Mask<M = unknown>(declaration?: RxNodeDecl<El<SVGMaskElement, M, void>>, preset?: RxNodeDecl<El<SVGMaskElement, M, void>>): RxNode<El<SVGMaskElement, M, void>> { return RxNode.acquire(SvgTags.mask, declaration, preset) }
export function MetaData<M = unknown>(declaration?: RxNodeDecl<El<SVGMetadataElement, M, void>>, preset?: RxNodeDecl<El<SVGMetadataElement, M, void>>): RxNode<El<SVGMetadataElement, M, void>> { return RxNode.acquire(SvgTags.metadata, declaration, preset) }
export function MPath<M = unknown>(declaration?: RxNodeDecl<El<SVGElement, M, void>>, preset?: RxNodeDecl<El<SVGElement, M, void>>): RxNode<El<SVGElement, M, void>> { return RxNode.acquire(SvgTags.mpath, declaration, preset) }
export function Path<M = unknown>(declaration?: RxNodeDecl<El<SVGPathElement, M, void>>, preset?: RxNodeDecl<El<SVGPathElement, M, void>>): RxNode<El<SVGPathElement, M, void>> { return RxNode.acquire(SvgTags.path, declaration, preset) }
export function Pattern<M = unknown>(declaration?: RxNodeDecl<El<SVGPatternElement, M, void>>, preset?: RxNodeDecl<El<SVGPatternElement, M, void>>): RxNode<El<SVGPatternElement, M, void>> { return RxNode.acquire(SvgTags.pattern, declaration, preset) }
export function Polygon<M = unknown>(declaration?: RxNodeDecl<El<SVGPolygonElement, M, void>>, preset?: RxNodeDecl<El<SVGPolygonElement, M, void>>): RxNode<El<SVGPolygonElement, M, void>> { return RxNode.acquire(SvgTags.polygon, declaration, preset) }
export function PolyLine<M = unknown>(declaration?: RxNodeDecl<El<SVGPolylineElement, M, void>>, preset?: RxNodeDecl<El<SVGPolylineElement, M, void>>): RxNode<El<SVGPolylineElement, M, void>> { return RxNode.acquire(SvgTags.polyline, declaration, preset) }
export function RadialGradient<M = unknown>(declaration?: RxNodeDecl<El<SVGRadialGradientElement, M, void>>, preset?: RxNodeDecl<El<SVGRadialGradientElement, M, void>>): RxNode<El<SVGRadialGradientElement, M, void>> { return RxNode.acquire(SvgTags.radialGradient, declaration, preset) }
export function Rect<M = unknown>(declaration?: RxNodeDecl<El<SVGRectElement, M, void>>, preset?: RxNodeDecl<El<SVGRectElement, M, void>>): RxNode<El<SVGRectElement, M, void>> { return RxNode.acquire(SvgTags.rect, declaration, preset) }
export function Stop<M = unknown>(declaration?: RxNodeDecl<El<SVGStopElement, M, void>>, preset?: RxNodeDecl<El<SVGStopElement, M, void>>): RxNode<El<SVGStopElement, M, void>> { return RxNode.acquire(SvgTags.stop, declaration, preset) }
export function SvgSwitch<M = unknown>(declaration?: RxNodeDecl<El<SVGSwitchElement, M, void>>, preset?: RxNodeDecl<El<SVGSwitchElement, M, void>>): RxNode<El<SVGSwitchElement, M, void>> { return RxNode.acquire(SvgTags.switch, declaration, preset) }
export function Symbol<M = unknown>(declaration?: RxNodeDecl<El<SVGSymbolElement, M, void>>, preset?: RxNodeDecl<El<SVGSymbolElement, M, void>>): RxNode<El<SVGSymbolElement, M, void>> { return RxNode.acquire(SvgTags.symbol, declaration, preset) }
export function Text<M = unknown>(declaration?: RxNodeDecl<El<SVGTextElement, M, void>>, preset?: RxNodeDecl<El<SVGTextElement, M, void>>): RxNode<El<SVGTextElement, M, void>> { return RxNode.acquire(SvgTags.text, declaration, preset) }
export function TextPath<M = unknown>(declaration?: RxNodeDecl<El<SVGTextPathElement, M, void>>, preset?: RxNodeDecl<El<SVGTextPathElement, M, void>>): RxNode<El<SVGTextPathElement, M, void>> { return RxNode.acquire(SvgTags.textPath, declaration, preset) }
export function TSpan<M = unknown>(declaration?: RxNodeDecl<El<SVGTSpanElement, M, void>>, preset?: RxNodeDecl<El<SVGTSpanElement, M, void>>): RxNode<El<SVGTSpanElement, M, void>> { return RxNode.acquire(SvgTags.tspan, declaration, preset) }
export function Use<M = unknown>(declaration?: RxNodeDecl<El<SVGUseElement, M, void>>, preset?: RxNodeDecl<El<SVGUseElement, M, void>>): RxNode<El<SVGUseElement, M, void>> { return RxNode.acquire(SvgTags.use, declaration, preset) }
export function View<M = unknown>(declaration?: RxNodeDecl<El<SVGViewElement, M, void>>, preset?: RxNodeDecl<El<SVGViewElement, M, void>>): RxNode<El<SVGViewElement, M, void>> { return RxNode.acquire(SvgTags.view, declaration, preset) }

const HtmlTags = {
  a: new HtmlElementDriver<HTMLAnchorElement>("a", false, el => el.kind = ElKind.Native),
  abbr: new HtmlElementDriver<HTMLElement>("abbr", false, el => el.kind = ElKind.Native),
  address: new HtmlElementDriver<HTMLElement>("address", false, el => el.kind = ElKind.Native),
  area: new HtmlElementDriver<HTMLAreaElement>("area", false, el => el.kind = ElKind.Native),
  article: new HtmlElementDriver<HTMLElement>("article", false, el => el.kind = ElKind.Native),
  aside: new HtmlElementDriver<HTMLElement>("aside", false, el => el.kind = ElKind.Native),
  audio: new HtmlElementDriver<HTMLAudioElement>("audio", false, el => el.kind = ElKind.Native),
  b: new HtmlElementDriver<HTMLElement>("b", false, el => el.kind = ElKind.Native),
  base: new HtmlElementDriver<HTMLBaseElement>("base", false, el => el.kind = ElKind.Native),
  bdi: new HtmlElementDriver<HTMLElement>("bdi", false, el => el.kind = ElKind.Native),
  bdo: new HtmlElementDriver<HTMLElement>("bdo", false, el => el.kind = ElKind.Native),
  big: new HtmlElementDriver<HTMLElement>("big", false, el => el.kind = ElKind.Native),
  blockquote: new HtmlElementDriver<HTMLElement>("blockquote", false, el => el.kind = ElKind.Native),
  body: new HtmlElementDriver<HTMLBodyElement>("body", false, el => el.kind = ElKind.Native),
  br: new HtmlElementDriver<HTMLBRElement>("br", false, el => el.kind = ElKind.Native),
  button: new HtmlElementDriver<HTMLButtonElement>("button", false, el => el.kind = ElKind.Native),
  canvas: new HtmlElementDriver<HTMLCanvasElement>("canvas", false, el => el.kind = ElKind.Native),
  caption: new HtmlElementDriver<HTMLTableCaptionElement>("caption", false, el => el.kind = ElKind.Native),
  cite: new HtmlElementDriver<HTMLElement>("cite", false, el => el.kind = ElKind.Native),
  code: new HtmlElementDriver<HTMLElement>("code", false, el => el.kind = ElKind.Native),
  col: new HtmlElementDriver<HTMLTableColElement>("col", false, el => el.kind = ElKind.Native),
  colgroup: new HtmlElementDriver<HTMLTableColElement>("colgroup", false, el => el.kind = ElKind.Native),
  data: new HtmlElementDriver<HTMLDataElement>("data", false, el => el.kind = ElKind.Native),
  datalist: new HtmlElementDriver<HTMLDataListElement>("datalist", false, el => el.kind = ElKind.Native),
  dd: new HtmlElementDriver<HTMLElement>("dd", false, el => el.kind = ElKind.Native),
  del: new HtmlElementDriver<HTMLElement>("del", false, el => el.kind = ElKind.Native),
  details: new HtmlElementDriver<HTMLElement>("details", false, el => el.kind = ElKind.Native),
  dfn: new HtmlElementDriver<HTMLElement>("dfn", false, el => el.kind = ElKind.Native),
  div: new HtmlElementDriver<HTMLDivElement>("div", false, el => el.kind = ElKind.Native),
  dl: new HtmlElementDriver<HTMLDListElement>("dl", false, el => el.kind = ElKind.Native),
  dt: new HtmlElementDriver<HTMLElement>("dt", false, el => el.kind = ElKind.Native),
  em: new HtmlElementDriver<HTMLElement>("em", false, el => el.kind = ElKind.Native),
  embed: new HtmlElementDriver<HTMLEmbedElement>("embed", false, el => el.kind = ElKind.Native),
  fieldset: new HtmlElementDriver<HTMLFieldSetElement>("fieldset", false, el => el.kind = ElKind.Native),
  figcaption: new HtmlElementDriver<HTMLElement>("figcaption", false, el => el.kind = ElKind.Native),
  figure: new HtmlElementDriver<HTMLElement>("figure", false, el => el.kind = ElKind.Native),
  footer: new HtmlElementDriver<HTMLElement>("footer", false, el => el.kind = ElKind.Native),
  form: new HtmlElementDriver<HTMLFormElement>("form", false, el => el.kind = ElKind.Native),
  h1: new HtmlElementDriver<HTMLHeadingElement>("h1", false, el => el.kind = ElKind.Native),
  h2: new HtmlElementDriver<HTMLHeadingElement>("h2", false, el => el.kind = ElKind.Native),
  h3: new HtmlElementDriver<HTMLHeadingElement>("h3", false, el => el.kind = ElKind.Native),
  h4: new HtmlElementDriver<HTMLHeadingElement>("h4", false, el => el.kind = ElKind.Native),
  h5: new HtmlElementDriver<HTMLHeadingElement>("h5", false, el => el.kind = ElKind.Native),
  h6: new HtmlElementDriver<HTMLHeadingElement>("h6", false, el => el.kind = ElKind.Native),
  head: new HtmlElementDriver<HTMLHeadElement>("head", false, el => el.kind = ElKind.Native),
  header: new HtmlElementDriver<HTMLElement>("header", false, el => el.kind = ElKind.Native),
  hgroup: new HtmlElementDriver<HTMLElement>("hgroup", false, el => el.kind = ElKind.Native),
  hr: new HtmlElementDriver<HTMLHRElement>("hr", false, el => el.kind = ElKind.Native),
  html: new HtmlElementDriver<HTMLHtmlElement>("html", false, el => el.kind = ElKind.Native),
  i: new HtmlElementDriver<HTMLElement>("i", false, el => el.kind = ElKind.Native),
  iframe: new HtmlElementDriver<HTMLIFrameElement>("iframe", false, el => el.kind = ElKind.Native),
  img: new HtmlElementDriver<HTMLImageElement>("img", false, el => el.kind = ElKind.Native),
  input: new HtmlElementDriver<HTMLInputElement>("input", false, el => el.kind = ElKind.Native),
  ins: new HtmlElementDriver<HTMLModElement>("ins", false, el => el.kind = ElKind.Native),
  kbd: new HtmlElementDriver<HTMLElement>("kbd", false, el => el.kind = ElKind.Native),
  keygen: new HtmlElementDriver<HTMLElement>("keygen", false, el => el.kind = ElKind.Native),
  label: new HtmlElementDriver<HTMLLabelElement>("label", false, el => el.kind = ElKind.Native),
  legend: new HtmlElementDriver<HTMLLegendElement>("legend", false, el => el.kind = ElKind.Native),
  li: new HtmlElementDriver<HTMLLIElement>("li", false, el => el.kind = ElKind.Native),
  link: new HtmlElementDriver<HTMLLinkElement>("link", false, el => el.kind = ElKind.Native),
  main: new HtmlElementDriver<HTMLElement>("main", false, el => el.kind = ElKind.Native),
  map: new HtmlElementDriver<HTMLMapElement>("map", false, el => el.kind = ElKind.Native),
  mark: new HtmlElementDriver<HTMLElement>("mark", false, el => el.kind = ElKind.Native),
  menu: new HtmlElementDriver<HTMLElement>("menu", false, el => el.kind = ElKind.Native),
  menuitem: new HtmlElementDriver<HTMLElement>("menuitem", false, el => el.kind = ElKind.Native),
  meta: new HtmlElementDriver<HTMLMetaElement>("meta", false, el => el.kind = ElKind.Native),
  meter: new HtmlElementDriver<HTMLElement>("meter", false, el => el.kind = ElKind.Native),
  nav: new HtmlElementDriver<HTMLElement>("nav", false, el => el.kind = ElKind.Native),
  noindex: new HtmlElementDriver<HTMLElement>("noindex", false, el => el.kind = ElKind.Native),
  noscript: new HtmlElementDriver<HTMLElement>("noscript", false, el => el.kind = ElKind.Native),
  object: new HtmlElementDriver<HTMLObjectElement>("object", false, el => el.kind = ElKind.Native),
  ol: new HtmlElementDriver<HTMLOListElement>("ol", false, el => el.kind = ElKind.Native),
  optgroup: new HtmlElementDriver<HTMLOptGroupElement>("optgroup", false, el => el.kind = ElKind.Native),
  option: new HtmlElementDriver<HTMLOptionElement>("option", false, el => el.kind = ElKind.Native),
  output: new HtmlElementDriver<HTMLElement>("output", false, el => el.kind = ElKind.Native),
  p: new HtmlElementDriver<HTMLParagraphElement>("p", false, el => el.kind = ElKind.Native),
  param: new HtmlElementDriver<HTMLElement>("param", false, el => el.kind = ElKind.Native),
  picture: new HtmlElementDriver<HTMLElement>("picture", false, el => el.kind = ElKind.Native),
  pre: new HtmlElementDriver<HTMLPreElement>("pre", false, el => el.kind = ElKind.Native),
  progress: new HtmlElementDriver<HTMLProgressElement>("progress", false, el => el.kind = ElKind.Native),
  q: new HtmlElementDriver<HTMLQuoteElement>("q", false, el => el.kind = ElKind.Native),
  rp: new HtmlElementDriver<HTMLElement>("rp", false, el => el.kind = ElKind.Native),
  rt: new HtmlElementDriver<HTMLElement>("rt", false, el => el.kind = ElKind.Native),
  ruby: new HtmlElementDriver<HTMLElement>("ruby", false, el => el.kind = ElKind.Native),
  s: new HtmlElementDriver<HTMLElement>("s", false, el => el.kind = ElKind.Native),
  samp: new HtmlElementDriver<HTMLElement>("samp", false, el => el.kind = ElKind.Native),
  script: new HtmlElementDriver<HTMLScriptElement>("script", false, el => el.kind = ElKind.Native),
  section: new HtmlElementDriver<HTMLElement>("section", false, el => el.kind = ElKind.Native),
  select: new HtmlElementDriver<HTMLSelectElement>("select", false, el => el.kind = ElKind.Native),
  small: new HtmlElementDriver<HTMLElement>("small", false, el => el.kind = ElKind.Native),
  source: new HtmlElementDriver<HTMLSourceElement>("source", false, el => el.kind = ElKind.Native),
  span: new HtmlElementDriver<HTMLSpanElement>("span", false, el => el.kind = ElKind.Native),
  strong: new HtmlElementDriver<HTMLElement>("strong", false, el => el.kind = ElKind.Native),
  style: new HtmlElementDriver<HTMLStyleElement>("style", false, el => el.kind = ElKind.Native),
  sub: new HtmlElementDriver<HTMLElement>("sub", false, el => el.kind = ElKind.Native),
  summary: new HtmlElementDriver<HTMLElement>("summary", false, el => el.kind = ElKind.Native),
  sup: new HtmlElementDriver<HTMLElement>("sup", false, el => el.kind = ElKind.Native),
  table: new HtmlElementDriver<HTMLTableElement>("table", false, el => el.kind = ElKind.Native),
  template: new HtmlElementDriver<HTMLTemplateElement>("template", false, el => el.kind = ElKind.Native),
  tbody: new HtmlElementDriver<HTMLTableSectionElement>("tbody", false, el => el.kind = ElKind.Native),
  td: new HtmlElementDriver<HTMLTableCellElement>("td", false, el => el.kind = ElKind.Native),
  textarea: new HtmlElementDriver<HTMLTextAreaElement>("textarea", false, el => el.kind = ElKind.Native),
  tfoot: new HtmlElementDriver<HTMLTableSectionElement>("tfoot", false, el => el.kind = ElKind.Native),
  th: new HtmlElementDriver<HTMLTableCellElement>("th", false, el => el.kind = ElKind.Native),
  thead: new HtmlElementDriver<HTMLTableSectionElement>("thead", false, el => el.kind = ElKind.Native),
  time: new HtmlElementDriver<HTMLElement>("time", false, el => el.kind = ElKind.Native),
  title: new HtmlElementDriver<HTMLTitleElement>("title", false, el => el.kind = ElKind.Native),
  tr: new HtmlElementDriver<HTMLTableRowElement>("tr", false, el => el.kind = ElKind.Native),
  track: new HtmlElementDriver<HTMLTrackElement>("track", false, el => el.kind = ElKind.Native),
  u: new HtmlElementDriver<HTMLElement>("u", false, el => el.kind = ElKind.Native),
  ul: new HtmlElementDriver<HTMLUListElement>("ul", false, el => el.kind = ElKind.Native),
  var: new HtmlElementDriver<HTMLElement>("var", false, el => el.kind = ElKind.Native),
  video: new HtmlElementDriver<HTMLVideoElement>("video", false, el => el.kind = ElKind.Native),
  wbr: new HtmlElementDriver<HTMLElement>("wbr", false, el => el.kind = ElKind.Native),
  // webview: new HtmlNodeFactory<HTMLWebViewElement>('webview', ElKind.Section),
}

const SvgTags = {
  svg: new SvgElementDriver<SVGSVGElement>("svg", false, el => el.kind = ElKind.Native),
  a: new SvgElementDriver<SVGAElement>("a", false, el => el.kind = ElKind.Native),
  animate: new SvgElementDriver<SVGAnimateElement>("animate", false, el => el.kind = ElKind.Native),
  animateMotion: new SvgElementDriver<SVGAnimateMotionElement>("animateMotion", false, el => el.kind = ElKind.Native),
  animateTransform: new SvgElementDriver<SVGAnimateTransformElement>("animateTransform", false, el => el.kind = ElKind.Native),
  circle: new SvgElementDriver<SVGCircleElement>("circle", false, el => el.kind = ElKind.Native),
  clipPath: new SvgElementDriver<SVGClipPathElement>("clipPath", false, el => el.kind = ElKind.Native),
  defs: new SvgElementDriver<SVGDefsElement>("defs", false, el => el.kind = ElKind.Native),
  desc: new SvgElementDriver<SVGDescElement>("desc", false, el => el.kind = ElKind.Native),
  ellipse: new SvgElementDriver<SVGEllipseElement>("ellipse", false, el => el.kind = ElKind.Native),
  feBlend: new SvgElementDriver<SVGFEBlendElement>("feBlend", false, el => el.kind = ElKind.Native),
  feColorMatrix: new SvgElementDriver<SVGFEColorMatrixElement>("feColorMatrix", false, el => el.kind = ElKind.Native),
  feComponentTransfer: new SvgElementDriver<SVGFEComponentTransferElement>("feComponentTransfer", false, el => el.kind = ElKind.Native),
  feComposite: new SvgElementDriver<SVGFECompositeElement>("feComposite", false, el => el.kind = ElKind.Native),
  feConvolveMatrix: new SvgElementDriver<SVGFEConvolveMatrixElement>("feConvolveMatrix", false, el => el.kind = ElKind.Native),
  feDiffuseLighting: new SvgElementDriver<SVGFEDiffuseLightingElement>("feDiffuseLighting", false, el => el.kind = ElKind.Native),
  feDisplacementMap: new SvgElementDriver<SVGFEDisplacementMapElement>("feDisplacementMap", false, el => el.kind = ElKind.Native),
  feDistantLight: new SvgElementDriver<SVGFEDistantLightElement>("feDistantLight", false, el => el.kind = ElKind.Native),
  feDropShadow: new SvgElementDriver<SVGFEDropShadowElement>("feDropShadow", false, el => el.kind = ElKind.Native),
  feFlood: new SvgElementDriver<SVGFEFloodElement>("feFlood", false, el => el.kind = ElKind.Native),
  feFuncA: new SvgElementDriver<SVGFEFuncAElement>("feFuncA", false, el => el.kind = ElKind.Native),
  feFuncB: new SvgElementDriver<SVGFEFuncBElement>("feFuncB", false, el => el.kind = ElKind.Native),
  feFuncG: new SvgElementDriver<SVGFEFuncGElement>("feFuncG", false, el => el.kind = ElKind.Native),
  feFuncR: new SvgElementDriver<SVGFEFuncRElement>("feFuncR", false, el => el.kind = ElKind.Native),
  feGaussianBlur: new SvgElementDriver<SVGFEGaussianBlurElement>("feGaussianBlur", false, el => el.kind = ElKind.Native),
  feImage: new SvgElementDriver<SVGFEImageElement>("feImage", false, el => el.kind = ElKind.Native),
  feMerge: new SvgElementDriver<SVGFEMergeElement>("feMerge", false, el => el.kind = ElKind.Native),
  feMergeNode: new SvgElementDriver<SVGFEMergeNodeElement>("feMergeNode", false, el => el.kind = ElKind.Native),
  feMorphology: new SvgElementDriver<SVGFEMorphologyElement>("feMorphology", false, el => el.kind = ElKind.Native),
  feOffset: new SvgElementDriver<SVGFEOffsetElement>("feOffset", false, el => el.kind = ElKind.Native),
  fePointLight: new SvgElementDriver<SVGFEPointLightElement>("fePointLight", false, el => el.kind = ElKind.Native),
  feSpecularLighting: new SvgElementDriver<SVGFESpecularLightingElement>("feSpecularLighting", false, el => el.kind = ElKind.Native),
  feSpotLight: new SvgElementDriver<SVGFESpotLightElement>("feSpotLight", false, el => el.kind = ElKind.Native),
  feTile: new SvgElementDriver<SVGFETileElement>("feTile", false, el => el.kind = ElKind.Native),
  feTurbulence: new SvgElementDriver<SVGFETurbulenceElement>("feTurbulence", false, el => el.kind = ElKind.Native),
  filter: new SvgElementDriver<SVGFilterElement>("filter", false, el => el.kind = ElKind.Native),
  foreignObject: new SvgElementDriver<SVGForeignObjectElement>("foreignObject", false, el => el.kind = ElKind.Native),
  g: new SvgElementDriver<SVGGElement>("g", false, el => el.kind = ElKind.Native),
  image: new SvgElementDriver<SVGImageElement>("image", false, el => el.kind = ElKind.Native),
  line: new SvgElementDriver<SVGLineElement>("line", false, el => el.kind = ElKind.Native),
  linearGradient: new SvgElementDriver<SVGLinearGradientElement>("linearGradient", false, el => el.kind = ElKind.Native),
  marker: new SvgElementDriver<SVGMarkerElement>("marker", false, el => el.kind = ElKind.Native),
  mask: new SvgElementDriver<SVGMaskElement>("mask", false, el => el.kind = ElKind.Native),
  metadata: new SvgElementDriver<SVGMetadataElement>("metadata", false, el => el.kind = ElKind.Native),
  mpath: new SvgElementDriver<SVGElement>("mpath", false, el => el.kind = ElKind.Native),
  path: new SvgElementDriver<SVGPathElement>("path", false, el => el.kind = ElKind.Native),
  pattern: new SvgElementDriver<SVGPatternElement>("pattern", false, el => el.kind = ElKind.Native),
  polygon: new SvgElementDriver<SVGPolygonElement>("polygon", false, el => el.kind = ElKind.Native),
  polyline: new SvgElementDriver<SVGPolylineElement>("polyline", false, el => el.kind = ElKind.Native),
  radialGradient: new SvgElementDriver<SVGRadialGradientElement>("radialGradient", false, el => el.kind = ElKind.Native),
  rect: new SvgElementDriver<SVGRectElement>("rect", false, el => el.kind = ElKind.Native),
  stop: new SvgElementDriver<SVGStopElement>("stop", false, el => el.kind = ElKind.Native),
  switch: new SvgElementDriver<SVGSwitchElement>("switch", false, el => el.kind = ElKind.Native),
  symbol: new SvgElementDriver<SVGSymbolElement>("symbol", false, el => el.kind = ElKind.Native),
  text: new SvgElementDriver<SVGTextElement>("text", false, el => el.kind = ElKind.Native),
  textPath: new SvgElementDriver<SVGTextPathElement>("textPath", false, el => el.kind = ElKind.Native),
  tspan: new SvgElementDriver<SVGTSpanElement>("tspan", false, el => el.kind = ElKind.Native),
  use: new SvgElementDriver<SVGUseElement>("use", false, el => el.kind = ElKind.Native),
  view: new SvgElementDriver<SVGViewElement>("view", false, el => el.kind = ElKind.Native),
}
