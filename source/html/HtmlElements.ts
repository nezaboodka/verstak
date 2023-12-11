// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Verstak, RxNodeDecl } from "../core/api.js"
import { El, ElKind } from "./El.js"
import { HtmlDriver, StaticDriver, SvgDriver } from "./HtmlDriver.js"

export function HtmlBody(decl?: RxNodeDecl<El<HTMLElement>>, preset?: RxNodeDecl<El<HTMLElement>>): El<HTMLElement> {
  const driver = new StaticDriver(global.document.body, "HtmlBody", false, el => el.kind = ElKind.Section)
  return Verstak.declare(driver, decl, preset)
}

export function A<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLAnchorElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLAnchorElement, M, void, R>>): El<HTMLAnchorElement, M, void, R> { return Verstak.declare(HtmlTags.a, decl, preset) }
export function Abbr<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.abbr, decl, preset) }
export function Address<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.address, decl, preset) }
export function Area<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLAreaElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLAreaElement, M, void, R>>): El<HTMLAreaElement, M, void, R> { return Verstak.declare(HtmlTags.area, decl, preset) }
export function Article<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.article, decl, preset) }
export function Aside<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.aside, decl, preset) }
export function Audio<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLAudioElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLAudioElement, M, void, R>>): El<HTMLAudioElement, M, void, R> { return Verstak.declare(HtmlTags.audio, decl, preset) }
export function B<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.b, decl, preset) }
export function Base<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLBaseElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLBaseElement, M, void, R>>): El<HTMLBaseElement, M, void, R> { return Verstak.declare(HtmlTags.base, decl, preset) }
export function Bdi<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.bdi, decl, preset) }
export function Bdo<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.bdo, decl, preset) }
export function Big<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.big, decl, preset) }
export function BlockQuote<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.blockquote, decl, preset) }
export function Body<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLBodyElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLBodyElement, M, void, R>>): El<HTMLBodyElement, M, void, R> { return Verstak.declare(HtmlTags.body, decl, preset) }
export function BR<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLBRElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLBRElement, M, void, R>>): El<HTMLBRElement, M, void, R> { return Verstak.declare(HtmlTags.br, decl, preset) }
export function Button<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLButtonElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLButtonElement, M, void, R>>): El<HTMLButtonElement, M, void, R> { return Verstak.declare(HtmlTags.button, decl, preset) }
export function Canvas<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLCanvasElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLCanvasElement, M, void, R>>): El<HTMLCanvasElement, M, void, R> { return Verstak.declare(HtmlTags.canvas, decl, preset) }
export function Caption<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLTableCaptionElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTableCaptionElement, M, void, R>>): El<HTMLTableCaptionElement, M, void, R> { return Verstak.declare(HtmlTags.caption, decl, preset) }
export function Cite<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.cite, decl, preset) }
export function Code<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.code, decl, preset) }
export function Col<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLTableColElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTableColElement, M, void, R>>): El<HTMLTableColElement, M, void, R> { return Verstak.declare(HtmlTags.col, decl, preset) }
export function ColGroup<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLTableColElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTableColElement, M, void, R>>): El<HTMLTableColElement, M, void, R> { return Verstak.declare(HtmlTags.colgroup, decl, preset) }
export function Data<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLDataElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLDataElement, M, void, R>>): El<HTMLDataElement, M, void, R> { return Verstak.declare(HtmlTags.data, decl, preset) }
export function DataList<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLDataListElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLDataListElement, M, void, R>>): El<HTMLDataListElement, M, void, R> { return Verstak.declare(HtmlTags.datalist, decl, preset) }
export function DD<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.dd, decl, preset) }
export function Del<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.del, decl, preset) }
export function Details<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.details, decl, preset) }
export function Dfn<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.dfn, decl, preset) }
export function Div<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLDivElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLDivElement, M, void, R>>): El<HTMLDivElement, M, void, R> { return Verstak.declare(HtmlTags.div, decl, preset) }
export function DL<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLDListElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLDListElement, M, void, R>>): El<HTMLDListElement, M, void, R> { return Verstak.declare(HtmlTags.dl, decl, preset) }
export function DT<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.dt, decl, preset) }
export function EM<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.em, decl, preset) }
export function Embed<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLEmbedElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLEmbedElement, M, void, R>>): El<HTMLEmbedElement, M, void, R> { return Verstak.declare(HtmlTags.embed, decl, preset) }
export function FieldSet<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLFieldSetElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLFieldSetElement, M, void, R>>): El<HTMLFieldSetElement, M, void, R> { return Verstak.declare(HtmlTags.fieldset, decl, preset) }
export function FigCaption<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.figcaption, decl, preset) }
export function Figure<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.figure, decl, preset) }
export function Footer<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.footer, decl, preset) }
export function Form<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLFormElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLFormElement, M, void, R>>): El<HTMLFormElement, M, void, R> { return Verstak.declare(HtmlTags.form, decl, preset) }
export function H1<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>): El<HTMLHeadingElement, M, void, R> { return Verstak.declare(HtmlTags.h1, decl, preset) }
export function H2<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>): El<HTMLHeadingElement, M, void, R> { return Verstak.declare(HtmlTags.h2, decl, preset) }
export function H3<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>): El<HTMLHeadingElement, M, void, R> { return Verstak.declare(HtmlTags.h3, decl, preset) }
export function H4<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>): El<HTMLHeadingElement, M, void, R> { return Verstak.declare(HtmlTags.h4, decl, preset) }
export function H5<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>): El<HTMLHeadingElement, M, void, R> { return Verstak.declare(HtmlTags.h5, decl, preset) }
export function H6<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>): El<HTMLHeadingElement, M, void, R> { return Verstak.declare(HtmlTags.h6, decl, preset) }
export function Head<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLHeadElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLHeadElement, M, void, R>>): El<HTMLHeadElement, M, void, R> { return Verstak.declare(HtmlTags.head, decl, preset) }
export function Header<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.header, decl, preset) }
export function HGroup<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.hgroup, decl, preset) }
export function HR<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLHRElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLHRElement, M, void, R>>): El<HTMLHRElement, M, void, R> { return Verstak.declare(HtmlTags.hr, decl, preset) }
export function Html<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLHtmlElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLHtmlElement, M, void, R>>): El<HTMLHtmlElement, M, void, R> { return Verstak.declare(HtmlTags.html, decl, preset) }
export function I<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.i, decl, preset) }
export function IFrame<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLIFrameElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLIFrameElement, M, void, R>>): El<HTMLIFrameElement, M, void, R> { return Verstak.declare(HtmlTags.iframe, decl, preset) }
export function Img<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLImageElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLImageElement, M, void, R>>): El<HTMLImageElement, M, void, R> { return Verstak.declare(HtmlTags.img, decl, preset) }
export function Input<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLInputElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLInputElement, M, void, R>>): El<HTMLInputElement, M, void, R> { return Verstak.declare(HtmlTags.input, decl, preset) }
export function Ins<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLModElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLModElement, M, void, R>>): El<HTMLModElement, M, void, R> { return Verstak.declare(HtmlTags.ins, decl, preset) }
export function Kbd<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.kbd, decl, preset) }
export function KeyGen<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.keygen, decl, preset) }
export function Label<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLLabelElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLLabelElement, M, void, R>>): El<HTMLLabelElement, M, void, R> { return Verstak.declare(HtmlTags.label, decl, preset) }
export function Legend<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLLegendElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLLegendElement, M, void, R>>): El<HTMLLegendElement, M, void, R> { return Verstak.declare(HtmlTags.legend, decl, preset) }
export function LI<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLLIElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLLIElement, M, void, R>>): El<HTMLLIElement, M, void, R> { return Verstak.declare(HtmlTags.li, decl, preset) }
export function Link<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLLinkElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLLinkElement, M, void, R>>): El<HTMLLinkElement, M, void, R> { return Verstak.declare(HtmlTags.link, decl, preset) }
export function Main<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.main, decl, preset) }
export function Map<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLMapElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLMapElement, M, void, R>>): El<HTMLMapElement, M, void, R> { return Verstak.declare(HtmlTags.map, decl, preset) }
export function Mark<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.mark, decl, preset) }
export function Menu<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.menu, decl, preset) }
export function MenuItem<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.menuitem, decl, preset) }
export function Meta<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLMetaElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLMetaElement, M, void, R>>): El<HTMLMetaElement, M, void, R> { return Verstak.declare(HtmlTags.meta, decl, preset) }
export function Meter<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.meter, decl, preset) }
export function Nav<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.nav, decl, preset) }
export function NoIndex<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.noindex, decl, preset) }
export function NoScript<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.noscript, decl, preset) }
export function Obj<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLObjectElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLObjectElement, M, void, R>>): El<HTMLObjectElement, M, void, R> { return Verstak.declare(HtmlTags.object, decl, preset) }
export function OL<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLOListElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLOListElement, M, void, R>>): El<HTMLOListElement, M, void, R> { return Verstak.declare(HtmlTags.ol, decl, preset) }
export function OptGroup<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLOptGroupElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLOptGroupElement, M, void, R>>): El<HTMLOptGroupElement, M, void, R> { return Verstak.declare(HtmlTags.optgroup, decl, preset) }
export function Option<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLOptionElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLOptionElement, M, void, R>>): El<HTMLOptionElement, M, void, R> { return Verstak.declare(HtmlTags.option, decl, preset) }
export function Output<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.output, decl, preset) }
export function P<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLParagraphElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLParagraphElement, M, void, R>>): El<HTMLParagraphElement, M, void, R> { return Verstak.declare(HtmlTags.p, decl, preset) }
export function Param<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.param, decl, preset) }
export function Picture<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.picture, decl, preset) }
export function Pre<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLPreElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLPreElement, M, void, R>>): El<HTMLPreElement, M, void, R> { return Verstak.declare(HtmlTags.pre, decl, preset) }
export function Progress<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLProgressElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLProgressElement, M, void, R>>): El<HTMLProgressElement, M, void, R> { return Verstak.declare(HtmlTags.progress, decl, preset) }
export function Q<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLQuoteElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLQuoteElement, M, void, R>>): El<HTMLQuoteElement, M, void, R> { return Verstak.declare(HtmlTags.q, decl, preset) }
export function RP<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.rp, decl, preset) }
export function RT<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.rt, decl, preset) }
export function Ruby<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.ruby, decl, preset) }
export function S<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.s, decl, preset) }
export function Samp<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.samp, decl, preset) }
export function Script<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLScriptElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLScriptElement, M, void, R>>): El<HTMLScriptElement, M, void, R> { return Verstak.declare(HtmlTags.script, decl, preset) }
export function Sctn<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.section, decl, preset) }
export function Select<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLSelectElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLSelectElement, M, void, R>>): El<HTMLSelectElement, M, void, R> { return Verstak.declare(HtmlTags.select, decl, preset) }
export function Small<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.small, decl, preset) }
export function Source<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLSourceElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLSourceElement, M, void, R>>): El<HTMLSourceElement, M, void, R> { return Verstak.declare(HtmlTags.source, decl, preset) }
export function Span<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLSpanElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLSpanElement, M, void, R>>): El<HTMLSpanElement, M, void, R> { return Verstak.declare(HtmlTags.span, decl, preset) }
export function Strong<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.strong, decl, preset) }
export function Style<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLStyleElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLStyleElement, M, void, R>>): El<HTMLStyleElement, M, void, R> { return Verstak.declare(HtmlTags.style, decl, preset) }
export function Sub<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.sub, decl, preset) }
export function Summary<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.summary, decl, preset) }
export function Sup<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.sup, decl, preset) }
export function Tbl<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLTableElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTableElement, M, void, R>>): El<HTMLTableElement, M, void, R> { return Verstak.declare(HtmlTags.table, decl, preset) }
export function Template<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLTemplateElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTemplateElement, M, void, R>>): El<HTMLTemplateElement, M, void, R> { return Verstak.declare(HtmlTags.template, decl, preset) }
export function TBody<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLTableSectionElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTableSectionElement, M, void, R>>): El<HTMLTableSectionElement, M, void, R> { return Verstak.declare(HtmlTags.tbody, decl, preset) }
export function TD<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLTableCellElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTableCellElement, M, void, R>>): El<HTMLTableCellElement, M, void, R> { return Verstak.declare(HtmlTags.td, decl, preset) }
export function TextArea<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLTextAreaElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTextAreaElement, M, void, R>>): El<HTMLTextAreaElement, M, void, R> { return Verstak.declare(HtmlTags.textarea, decl, preset) }
export function TFoot<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLTableSectionElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTableSectionElement, M, void, R>>): El<HTMLTableSectionElement, M, void, R> { return Verstak.declare(HtmlTags.tfoot, decl, preset) }
export function TH<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLTableCellElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTableCellElement, M, void, R>>): El<HTMLTableCellElement, M, void, R> { return Verstak.declare(HtmlTags.th, decl, preset) }
export function THead<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLTableSectionElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTableSectionElement, M, void, R>>): El<HTMLTableSectionElement, M, void, R> { return Verstak.declare(HtmlTags.thead, decl, preset) }
export function Time<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.time, decl, preset) }
export function Title<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLTitleElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTitleElement, M, void, R>>): El<HTMLTitleElement, M, void, R> { return Verstak.declare(HtmlTags.title, decl, preset) }
export function TR<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLTableRowElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTableRowElement, M, void, R>>): El<HTMLTableRowElement, M, void, R> { return Verstak.declare(HtmlTags.tr, decl, preset) }
export function Track<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLTrackElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTrackElement, M, void, R>>): El<HTMLTrackElement, M, void, R> { return Verstak.declare(HtmlTags.track, decl, preset) }
export function U<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.u, decl, preset) }
export function UL<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLUListElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLUListElement, M, void, R>>): El<HTMLUListElement, M, void, R> { return Verstak.declare(HtmlTags.ul, decl, preset) }
export function Var<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.var, decl, preset) }
export function Video<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLVideoElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLVideoElement, M, void, R>>): El<HTMLVideoElement, M, void, R> { return Verstak.declare(HtmlTags.video, decl, preset) }
export function Wbr<M = unknown, R = void>(decl?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.declare(HtmlTags.wbr, decl, preset) }

export function Svg<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGSVGElement, M, void, R>>, preset?: RxNodeDecl<El<SVGSVGElement, M, void, R>>): El<SVGSVGElement, M, void, R> { return Verstak.declare(SvgTags.svg, decl, preset) }
export function SvgA<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGAElement, M, void, R>>, preset?: RxNodeDecl<El<SVGAElement, M, void, R>>): El<SVGAElement, M, void, R> { return Verstak.declare(SvgTags.a, decl, preset) }
export function Animate<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGAnimateElement, M, void, R>>, preset?: RxNodeDecl<El<SVGAnimateElement, M, void, R>>): El<SVGAnimateElement, M, void, R> { return Verstak.declare(SvgTags.animate, decl, preset) }
export function AnimateMotion<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGAnimateMotionElement, M, void, R>>, preset?: RxNodeDecl<El<SVGAnimateMotionElement, M, void, R>>): El<SVGAnimateMotionElement, M, void, R> { return Verstak.declare(SvgTags.animateMotion, decl, preset) }
export function AnimateTransform<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGAnimateTransformElement, M, void, R>>, preset?: RxNodeDecl<El<SVGAnimateTransformElement, M, void, R>>): El<SVGAnimateTransformElement, M, void, R> { return Verstak.declare(SvgTags.animateTransform, decl, preset) }
export function Circle<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGCircleElement, M, void, R>>, preset?: RxNodeDecl<El<SVGCircleElement, M, void, R>>): El<SVGCircleElement, M, void, R> { return Verstak.declare(SvgTags.circle, decl, preset) }
export function ClipPath<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGClipPathElement, M, void, R>>, preset?: RxNodeDecl<El<SVGClipPathElement, M, void, R>>): El<SVGClipPathElement, M, void, R> { return Verstak.declare(SvgTags.clipPath, decl, preset) }
export function Defs<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGDefsElement, M, void, R>>, preset?: RxNodeDecl<El<SVGDefsElement, M, void, R>>): El<SVGDefsElement, M, void, R> { return Verstak.declare(SvgTags.defs, decl, preset) }
export function Desc<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGDescElement, M, void, R>>, preset?: RxNodeDecl<El<SVGDescElement, M, void, R>>): El<SVGDescElement, M, void, R> { return Verstak.declare(SvgTags.desc, decl, preset) }
export function Ellipse<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGEllipseElement, M, void, R>>, preset?: RxNodeDecl<El<SVGEllipseElement, M, void, R>>): El<SVGEllipseElement, M, void, R> { return Verstak.declare(SvgTags.ellipse, decl, preset) }
export function FeBlend<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGFEBlendElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEBlendElement, M, void, R>>): El<SVGFEBlendElement, M, void, R> { return Verstak.declare(SvgTags.feBlend, decl, preset) }
export function FeColorMatrix<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGFEColorMatrixElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEColorMatrixElement, M, void, R>>): El<SVGFEColorMatrixElement, M, void, R> { return Verstak.declare(SvgTags.feColorMatrix, decl, preset) }
export function FeComponentTransfer<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGFEComponentTransferElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEComponentTransferElement, M, void, R>>): El<SVGFEComponentTransferElement, M, void, R> { return Verstak.declare(SvgTags.feComponentTransfer, decl, preset) }
export function FeComposite<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGFECompositeElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFECompositeElement, M, void, R>>): El<SVGFECompositeElement, M, void, R> { return Verstak.declare(SvgTags.feComposite, decl, preset) }
export function FeConvolveMatrix<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGFEConvolveMatrixElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEConvolveMatrixElement, M, void, R>>): El<SVGFEConvolveMatrixElement, M, void, R> { return Verstak.declare(SvgTags.feConvolveMatrix, decl, preset) }
export function FeDiffuseLighting<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGFEDiffuseLightingElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEDiffuseLightingElement, M, void, R>>): El<SVGFEDiffuseLightingElement, M, void, R> { return Verstak.declare(SvgTags.feDiffuseLighting, decl, preset) }
export function FeDisplacementMap<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGFEDisplacementMapElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEDisplacementMapElement, M, void, R>>): El<SVGFEDisplacementMapElement, M, void, R> { return Verstak.declare(SvgTags.feDisplacementMap, decl, preset) }
export function FeDistantLight<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGFEDistantLightElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEDistantLightElement, M, void, R>>): El<SVGFEDistantLightElement, M, void, R> { return Verstak.declare(SvgTags.feDistantLight, decl, preset) }
export function FeDropShadow<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGFEDropShadowElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEDropShadowElement, M, void, R>>): El<SVGFEDropShadowElement, M, void, R> { return Verstak.declare(SvgTags.feDropShadow, decl, preset) }
export function FeFlood<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGFEFloodElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEFloodElement, M, void, R>>): El<SVGFEFloodElement, M, void, R> { return Verstak.declare(SvgTags.feFlood, decl, preset) }
export function FeFuncA<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGFEFuncAElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEFuncAElement, M, void, R>>): El<SVGFEFuncAElement, M, void, R> { return Verstak.declare(SvgTags.feFuncA, decl, preset) }
export function FeFuncB<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGFEFuncBElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEFuncBElement, M, void, R>>): El<SVGFEFuncBElement, M, void, R> { return Verstak.declare(SvgTags.feFuncB, decl, preset) }
export function FeFuncG<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGFEFuncGElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEFuncGElement, M, void, R>>): El<SVGFEFuncGElement, M, void, R> { return Verstak.declare(SvgTags.feFuncG, decl, preset) }
export function FeFuncR<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGFEFuncRElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEFuncRElement, M, void, R>>): El<SVGFEFuncRElement, M, void, R> { return Verstak.declare(SvgTags.feFuncR, decl, preset) }
export function FeGaussianBlur<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGFEGaussianBlurElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEGaussianBlurElement, M, void, R>>): El<SVGFEGaussianBlurElement, M, void, R> { return Verstak.declare(SvgTags.feGaussianBlur, decl, preset) }
export function FeImage<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGFEImageElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEImageElement, M, void, R>>): El<SVGFEImageElement, M, void, R> { return Verstak.declare(SvgTags.feImage, decl, preset) }
export function FeMerge<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGFEMergeElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEMergeElement, M, void, R>>): El<SVGFEMergeElement, M, void, R> { return Verstak.declare(SvgTags.feMerge, decl, preset) }
export function FeMergeNode<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGFEMergeNodeElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEMergeNodeElement, M, void, R>>): El<SVGFEMergeNodeElement, M, void, R> { return Verstak.declare(SvgTags.feMergeNode, decl, preset) }
export function FeMorphology<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGFEMorphologyElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEMorphologyElement, M, void, R>>): El<SVGFEMorphologyElement, M, void, R> { return Verstak.declare(SvgTags.feMorphology, decl, preset) }
export function FeOffset<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGFEOffsetElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEOffsetElement, M, void, R>>): El<SVGFEOffsetElement, M, void, R> { return Verstak.declare(SvgTags.feOffset, decl, preset) }
export function FePointLight<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGFEPointLightElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEPointLightElement, M, void, R>>): El<SVGFEPointLightElement, M, void, R> { return Verstak.declare(SvgTags.fePointLight, decl, preset) }
export function FeSpecularLighting<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGFESpecularLightingElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFESpecularLightingElement, M, void, R>>): El<SVGFESpecularLightingElement, M, void, R> { return Verstak.declare(SvgTags.feSpecularLighting, decl, preset) }
export function FeSpotLight<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGFESpotLightElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFESpotLightElement, M, void, R>>): El<SVGFESpotLightElement, M, void, R> { return Verstak.declare(SvgTags.feSpotLight, decl, preset) }
export function FeTile<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGFETileElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFETileElement, M, void, R>>): El<SVGFETileElement, M, void, R> { return Verstak.declare(SvgTags.feTile, decl, preset) }
export function FeTurbulence<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGFETurbulenceElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFETurbulenceElement, M, void, R>>): El<SVGFETurbulenceElement, M, void, R> { return Verstak.declare(SvgTags.feTurbulence, decl, preset) }
export function Filter<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGFilterElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFilterElement, M, void, R>>): El<SVGFilterElement, M, void, R> { return Verstak.declare(SvgTags.filter, decl, preset) }
export function ForeignObject<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGForeignObjectElement, M, void, R>>, preset?: RxNodeDecl<El<SVGForeignObjectElement, M, void, R>>): El<SVGForeignObjectElement, M, void, R> { return Verstak.declare(SvgTags.foreignObject, decl, preset) }
export function G<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGGElement, M, void, R>>, preset?: RxNodeDecl<El<SVGGElement, M, void, R>>): El<SVGGElement, M, void, R> { return Verstak.declare(SvgTags.g, decl, preset) }
export function SvgImage<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGImageElement, M, void, R>>, preset?: RxNodeDecl<El<SVGImageElement, M, void, R>>): El<SVGImageElement, M, void, R> { return Verstak.declare(SvgTags.image, decl, preset) }
export function SvgLine<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGLineElement, M, void, R>>, preset?: RxNodeDecl<El<SVGLineElement, M, void, R>>): El<SVGLineElement, M, void, R> { return Verstak.declare(SvgTags.line, decl, preset) }
export function LinearGradient<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGLinearGradientElement, M, void, R>>, preset?: RxNodeDecl<El<SVGLinearGradientElement, M, void, R>>): El<SVGLinearGradientElement, M, void, R> { return Verstak.declare(SvgTags.linearGradient, decl, preset) }
export function Marker<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGMarkerElement, M, void, R>>, preset?: RxNodeDecl<El<SVGMarkerElement, M, void, R>>): El<SVGMarkerElement, M, void, R> { return Verstak.declare(SvgTags.marker, decl, preset) }
export function Mask<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGMaskElement, M, void, R>>, preset?: RxNodeDecl<El<SVGMaskElement, M, void, R>>): El<SVGMaskElement, M, void, R> { return Verstak.declare(SvgTags.mask, decl, preset) }
export function MetaData<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGMetadataElement, M, void, R>>, preset?: RxNodeDecl<El<SVGMetadataElement, M, void, R>>): El<SVGMetadataElement, M, void, R> { return Verstak.declare(SvgTags.metadata, decl, preset) }
export function MPath<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGElement, M, void, R>>, preset?: RxNodeDecl<El<SVGElement, M, void, R>>): El<SVGElement, M, void, R> { return Verstak.declare(SvgTags.mpath, decl, preset) }
export function Path<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGPathElement, M, void, R>>, preset?: RxNodeDecl<El<SVGPathElement, M, void, R>>): El<SVGPathElement, M, void, R> { return Verstak.declare(SvgTags.path, decl, preset) }
export function Pattern<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGPatternElement, M, void, R>>, preset?: RxNodeDecl<El<SVGPatternElement, M, void, R>>): El<SVGPatternElement, M, void, R> { return Verstak.declare(SvgTags.pattern, decl, preset) }
export function Polygon<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGPolygonElement, M, void, R>>, preset?: RxNodeDecl<El<SVGPolygonElement, M, void, R>>): El<SVGPolygonElement, M, void, R> { return Verstak.declare(SvgTags.polygon, decl, preset) }
export function PolyLine<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGPolylineElement, M, void, R>>, preset?: RxNodeDecl<El<SVGPolylineElement, M, void, R>>): El<SVGPolylineElement, M, void, R> { return Verstak.declare(SvgTags.polyline, decl, preset) }
export function RadialGradient<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGRadialGradientElement, M, void, R>>, preset?: RxNodeDecl<El<SVGRadialGradientElement, M, void, R>>): El<SVGRadialGradientElement, M, void, R> { return Verstak.declare(SvgTags.radialGradient, decl, preset) }
export function Rect<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGRectElement, M, void, R>>, preset?: RxNodeDecl<El<SVGRectElement, M, void, R>>): El<SVGRectElement, M, void, R> { return Verstak.declare(SvgTags.rect, decl, preset) }
export function Stop<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGStopElement, M, void, R>>, preset?: RxNodeDecl<El<SVGStopElement, M, void, R>>): El<SVGStopElement, M, void, R> { return Verstak.declare(SvgTags.stop, decl, preset) }
export function SvgSwitch<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGSwitchElement, M, void, R>>, preset?: RxNodeDecl<El<SVGSwitchElement, M, void, R>>): El<SVGSwitchElement, M, void, R> { return Verstak.declare(SvgTags.switch, decl, preset) }
export function Symbol<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGSymbolElement, M, void, R>>, preset?: RxNodeDecl<El<SVGSymbolElement, M, void, R>>): El<SVGSymbolElement, M, void, R> { return Verstak.declare(SvgTags.symbol, decl, preset) }
export function Text<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGTextElement, M, void, R>>, preset?: RxNodeDecl<El<SVGTextElement, M, void, R>>): El<SVGTextElement, M, void, R> { return Verstak.declare(SvgTags.text, decl, preset) }
export function TextPath<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGTextPathElement, M, void, R>>, preset?: RxNodeDecl<El<SVGTextPathElement, M, void, R>>): El<SVGTextPathElement, M, void, R> { return Verstak.declare(SvgTags.textPath, decl, preset) }
export function TSpan<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGTSpanElement, M, void, R>>, preset?: RxNodeDecl<El<SVGTSpanElement, M, void, R>>): El<SVGTSpanElement, M, void, R> { return Verstak.declare(SvgTags.tspan, decl, preset) }
export function Use<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGUseElement, M, void, R>>, preset?: RxNodeDecl<El<SVGUseElement, M, void, R>>): El<SVGUseElement, M, void, R> { return Verstak.declare(SvgTags.use, decl, preset) }
export function View<M = unknown, R = void>(decl?: RxNodeDecl<El<SVGViewElement, M, void, R>>, preset?: RxNodeDecl<El<SVGViewElement, M, void, R>>): El<SVGViewElement, M, void, R> { return Verstak.declare(SvgTags.view, decl, preset) }

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
