// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { RxTree, RxNodeDecl } from "reactronic"
import { El, ElKind } from "./El.js"
import { HtmlDriver, StaticDriver, SvgDriver } from "./HtmlDriver.js"

export function HtmlBody(declaration?: RxNodeDecl<El<HTMLElement>>, preset?: RxNodeDecl<El<HTMLElement>>): El<HTMLElement> {
  const driver = new StaticDriver(global.document.body, "HtmlBody", false, el => el.kind = ElKind.Section)
  return RxTree.declare(driver, declaration, preset)
}

export function A<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLAnchorElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLAnchorElement, M, void, R>>): El<HTMLAnchorElement, M, void, R> { return RxTree.declare(HtmlTags.a, declaration, preset) }
export function Abbr<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.abbr, declaration, preset) }
export function Address<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.address, declaration, preset) }
export function Area<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLAreaElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLAreaElement, M, void, R>>): El<HTMLAreaElement, M, void, R> { return RxTree.declare(HtmlTags.area, declaration, preset) }
export function Article<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.article, declaration, preset) }
export function Aside<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.aside, declaration, preset) }
export function Audio<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLAudioElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLAudioElement, M, void, R>>): El<HTMLAudioElement, M, void, R> { return RxTree.declare(HtmlTags.audio, declaration, preset) }
export function B<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.b, declaration, preset) }
export function Base<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLBaseElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLBaseElement, M, void, R>>): El<HTMLBaseElement, M, void, R> { return RxTree.declare(HtmlTags.base, declaration, preset) }
export function Bdi<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.bdi, declaration, preset) }
export function Bdo<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.bdo, declaration, preset) }
export function Big<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.big, declaration, preset) }
export function BlockQuote<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.blockquote, declaration, preset) }
export function Body<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLBodyElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLBodyElement, M, void, R>>): El<HTMLBodyElement, M, void, R> { return RxTree.declare(HtmlTags.body, declaration, preset) }
export function BR<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLBRElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLBRElement, M, void, R>>): El<HTMLBRElement, M, void, R> { return RxTree.declare(HtmlTags.br, declaration, preset) }
export function Button<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLButtonElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLButtonElement, M, void, R>>): El<HTMLButtonElement, M, void, R> { return RxTree.declare(HtmlTags.button, declaration, preset) }
export function Canvas<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLCanvasElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLCanvasElement, M, void, R>>): El<HTMLCanvasElement, M, void, R> { return RxTree.declare(HtmlTags.canvas, declaration, preset) }
export function Caption<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLTableCaptionElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTableCaptionElement, M, void, R>>): El<HTMLTableCaptionElement, M, void, R> { return RxTree.declare(HtmlTags.caption, declaration, preset) }
export function Cite<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.cite, declaration, preset) }
export function Code<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.code, declaration, preset) }
export function Col<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLTableColElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTableColElement, M, void, R>>): El<HTMLTableColElement, M, void, R> { return RxTree.declare(HtmlTags.col, declaration, preset) }
export function ColGroup<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLTableColElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTableColElement, M, void, R>>): El<HTMLTableColElement, M, void, R> { return RxTree.declare(HtmlTags.colgroup, declaration, preset) }
export function Data<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLDataElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLDataElement, M, void, R>>): El<HTMLDataElement, M, void, R> { return RxTree.declare(HtmlTags.data, declaration, preset) }
export function DataList<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLDataListElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLDataListElement, M, void, R>>): El<HTMLDataListElement, M, void, R> { return RxTree.declare(HtmlTags.datalist, declaration, preset) }
export function DD<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.dd, declaration, preset) }
export function Del<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.del, declaration, preset) }
export function Details<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.details, declaration, preset) }
export function Dfn<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.dfn, declaration, preset) }
export function Div<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLDivElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLDivElement, M, void, R>>): El<HTMLDivElement, M, void, R> { return RxTree.declare(HtmlTags.div, declaration, preset) }
export function DL<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLDListElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLDListElement, M, void, R>>): El<HTMLDListElement, M, void, R> { return RxTree.declare(HtmlTags.dl, declaration, preset) }
export function DT<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.dt, declaration, preset) }
export function EM<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.em, declaration, preset) }
export function Embed<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLEmbedElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLEmbedElement, M, void, R>>): El<HTMLEmbedElement, M, void, R> { return RxTree.declare(HtmlTags.embed, declaration, preset) }
export function FieldSet<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLFieldSetElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLFieldSetElement, M, void, R>>): El<HTMLFieldSetElement, M, void, R> { return RxTree.declare(HtmlTags.fieldset, declaration, preset) }
export function FigCaption<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.figcaption, declaration, preset) }
export function Figure<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.figure, declaration, preset) }
export function Footer<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.footer, declaration, preset) }
export function Form<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLFormElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLFormElement, M, void, R>>): El<HTMLFormElement, M, void, R> { return RxTree.declare(HtmlTags.form, declaration, preset) }
export function H1<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>): El<HTMLHeadingElement, M, void, R> { return RxTree.declare(HtmlTags.h1, declaration, preset) }
export function H2<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>): El<HTMLHeadingElement, M, void, R> { return RxTree.declare(HtmlTags.h2, declaration, preset) }
export function H3<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>): El<HTMLHeadingElement, M, void, R> { return RxTree.declare(HtmlTags.h3, declaration, preset) }
export function H4<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>): El<HTMLHeadingElement, M, void, R> { return RxTree.declare(HtmlTags.h4, declaration, preset) }
export function H5<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>): El<HTMLHeadingElement, M, void, R> { return RxTree.declare(HtmlTags.h5, declaration, preset) }
export function H6<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>): El<HTMLHeadingElement, M, void, R> { return RxTree.declare(HtmlTags.h6, declaration, preset) }
export function Head<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLHeadElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLHeadElement, M, void, R>>): El<HTMLHeadElement, M, void, R> { return RxTree.declare(HtmlTags.head, declaration, preset) }
export function Header<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.header, declaration, preset) }
export function HGroup<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.hgroup, declaration, preset) }
export function HR<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLHRElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLHRElement, M, void, R>>): El<HTMLHRElement, M, void, R> { return RxTree.declare(HtmlTags.hr, declaration, preset) }
export function Html<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLHtmlElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLHtmlElement, M, void, R>>): El<HTMLHtmlElement, M, void, R> { return RxTree.declare(HtmlTags.html, declaration, preset) }
export function I<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.i, declaration, preset) }
export function IFrame<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLIFrameElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLIFrameElement, M, void, R>>): El<HTMLIFrameElement, M, void, R> { return RxTree.declare(HtmlTags.iframe, declaration, preset) }
export function Img<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLImageElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLImageElement, M, void, R>>): El<HTMLImageElement, M, void, R> { return RxTree.declare(HtmlTags.img, declaration, preset) }
export function Input<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLInputElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLInputElement, M, void, R>>): El<HTMLInputElement, M, void, R> { return RxTree.declare(HtmlTags.input, declaration, preset) }
export function Ins<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLModElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLModElement, M, void, R>>): El<HTMLModElement, M, void, R> { return RxTree.declare(HtmlTags.ins, declaration, preset) }
export function Kbd<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.kbd, declaration, preset) }
export function KeyGen<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.keygen, declaration, preset) }
export function Label<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLLabelElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLLabelElement, M, void, R>>): El<HTMLLabelElement, M, void, R> { return RxTree.declare(HtmlTags.label, declaration, preset) }
export function Legend<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLLegendElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLLegendElement, M, void, R>>): El<HTMLLegendElement, M, void, R> { return RxTree.declare(HtmlTags.legend, declaration, preset) }
export function LI<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLLIElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLLIElement, M, void, R>>): El<HTMLLIElement, M, void, R> { return RxTree.declare(HtmlTags.li, declaration, preset) }
export function Link<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLLinkElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLLinkElement, M, void, R>>): El<HTMLLinkElement, M, void, R> { return RxTree.declare(HtmlTags.link, declaration, preset) }
export function Main<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.main, declaration, preset) }
export function Map<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLMapElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLMapElement, M, void, R>>): El<HTMLMapElement, M, void, R> { return RxTree.declare(HtmlTags.map, declaration, preset) }
export function Mark<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.mark, declaration, preset) }
export function Menu<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.menu, declaration, preset) }
export function MenuItem<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.menuitem, declaration, preset) }
export function Meta<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLMetaElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLMetaElement, M, void, R>>): El<HTMLMetaElement, M, void, R> { return RxTree.declare(HtmlTags.meta, declaration, preset) }
export function Meter<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.meter, declaration, preset) }
export function Nav<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.nav, declaration, preset) }
export function NoIndex<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.noindex, declaration, preset) }
export function NoScript<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.noscript, declaration, preset) }
export function Obj<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLObjectElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLObjectElement, M, void, R>>): El<HTMLObjectElement, M, void, R> { return RxTree.declare(HtmlTags.object, declaration, preset) }
export function OL<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLOListElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLOListElement, M, void, R>>): El<HTMLOListElement, M, void, R> { return RxTree.declare(HtmlTags.ol, declaration, preset) }
export function OptGroup<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLOptGroupElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLOptGroupElement, M, void, R>>): El<HTMLOptGroupElement, M, void, R> { return RxTree.declare(HtmlTags.optgroup, declaration, preset) }
export function Option<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLOptionElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLOptionElement, M, void, R>>): El<HTMLOptionElement, M, void, R> { return RxTree.declare(HtmlTags.option, declaration, preset) }
export function Output<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.output, declaration, preset) }
export function P<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLParagraphElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLParagraphElement, M, void, R>>): El<HTMLParagraphElement, M, void, R> { return RxTree.declare(HtmlTags.p, declaration, preset) }
export function Param<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.param, declaration, preset) }
export function Picture<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.picture, declaration, preset) }
export function Pre<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLPreElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLPreElement, M, void, R>>): El<HTMLPreElement, M, void, R> { return RxTree.declare(HtmlTags.pre, declaration, preset) }
export function Progress<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLProgressElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLProgressElement, M, void, R>>): El<HTMLProgressElement, M, void, R> { return RxTree.declare(HtmlTags.progress, declaration, preset) }
export function Q<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLQuoteElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLQuoteElement, M, void, R>>): El<HTMLQuoteElement, M, void, R> { return RxTree.declare(HtmlTags.q, declaration, preset) }
export function RP<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.rp, declaration, preset) }
export function RT<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.rt, declaration, preset) }
export function Ruby<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.ruby, declaration, preset) }
export function S<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.s, declaration, preset) }
export function Samp<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.samp, declaration, preset) }
export function Script<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLScriptElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLScriptElement, M, void, R>>): El<HTMLScriptElement, M, void, R> { return RxTree.declare(HtmlTags.script, declaration, preset) }
export function Sctn<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.section, declaration, preset) }
export function Select<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLSelectElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLSelectElement, M, void, R>>): El<HTMLSelectElement, M, void, R> { return RxTree.declare(HtmlTags.select, declaration, preset) }
export function Small<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.small, declaration, preset) }
export function Source<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLSourceElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLSourceElement, M, void, R>>): El<HTMLSourceElement, M, void, R> { return RxTree.declare(HtmlTags.source, declaration, preset) }
export function Span<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLSpanElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLSpanElement, M, void, R>>): El<HTMLSpanElement, M, void, R> { return RxTree.declare(HtmlTags.span, declaration, preset) }
export function Strong<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.strong, declaration, preset) }
export function Style<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLStyleElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLStyleElement, M, void, R>>): El<HTMLStyleElement, M, void, R> { return RxTree.declare(HtmlTags.style, declaration, preset) }
export function Sub<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.sub, declaration, preset) }
export function Summary<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.summary, declaration, preset) }
export function Sup<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.sup, declaration, preset) }
export function Tbl<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLTableElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTableElement, M, void, R>>): El<HTMLTableElement, M, void, R> { return RxTree.declare(HtmlTags.table, declaration, preset) }
export function Template<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLTemplateElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTemplateElement, M, void, R>>): El<HTMLTemplateElement, M, void, R> { return RxTree.declare(HtmlTags.template, declaration, preset) }
export function TBody<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLTableSectionElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTableSectionElement, M, void, R>>): El<HTMLTableSectionElement, M, void, R> { return RxTree.declare(HtmlTags.tbody, declaration, preset) }
export function TD<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLTableCellElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTableCellElement, M, void, R>>): El<HTMLTableCellElement, M, void, R> { return RxTree.declare(HtmlTags.td, declaration, preset) }
export function TextArea<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLTextAreaElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTextAreaElement, M, void, R>>): El<HTMLTextAreaElement, M, void, R> { return RxTree.declare(HtmlTags.textarea, declaration, preset) }
export function TFoot<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLTableSectionElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTableSectionElement, M, void, R>>): El<HTMLTableSectionElement, M, void, R> { return RxTree.declare(HtmlTags.tfoot, declaration, preset) }
export function TH<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLTableCellElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTableCellElement, M, void, R>>): El<HTMLTableCellElement, M, void, R> { return RxTree.declare(HtmlTags.th, declaration, preset) }
export function THead<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLTableSectionElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTableSectionElement, M, void, R>>): El<HTMLTableSectionElement, M, void, R> { return RxTree.declare(HtmlTags.thead, declaration, preset) }
export function Time<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.time, declaration, preset) }
export function Title<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLTitleElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTitleElement, M, void, R>>): El<HTMLTitleElement, M, void, R> { return RxTree.declare(HtmlTags.title, declaration, preset) }
export function TR<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLTableRowElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTableRowElement, M, void, R>>): El<HTMLTableRowElement, M, void, R> { return RxTree.declare(HtmlTags.tr, declaration, preset) }
export function Track<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLTrackElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTrackElement, M, void, R>>): El<HTMLTrackElement, M, void, R> { return RxTree.declare(HtmlTags.track, declaration, preset) }
export function U<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.u, declaration, preset) }
export function UL<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLUListElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLUListElement, M, void, R>>): El<HTMLUListElement, M, void, R> { return RxTree.declare(HtmlTags.ul, declaration, preset) }
export function Var<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.var, declaration, preset) }
export function Video<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLVideoElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLVideoElement, M, void, R>>): El<HTMLVideoElement, M, void, R> { return RxTree.declare(HtmlTags.video, declaration, preset) }
export function Wbr<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return RxTree.declare(HtmlTags.wbr, declaration, preset) }

export function Svg<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGSVGElement, M, void, R>>, preset?: RxNodeDecl<El<SVGSVGElement, M, void, R>>): El<SVGSVGElement, M, void, R> { return RxTree.declare(SvgTags.svg, declaration, preset) }
export function SvgA<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGAElement, M, void, R>>, preset?: RxNodeDecl<El<SVGAElement, M, void, R>>): El<SVGAElement, M, void, R> { return RxTree.declare(SvgTags.a, declaration, preset) }
export function Animate<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGAnimateElement, M, void, R>>, preset?: RxNodeDecl<El<SVGAnimateElement, M, void, R>>): El<SVGAnimateElement, M, void, R> { return RxTree.declare(SvgTags.animate, declaration, preset) }
export function AnimateMotion<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGAnimateMotionElement, M, void, R>>, preset?: RxNodeDecl<El<SVGAnimateMotionElement, M, void, R>>): El<SVGAnimateMotionElement, M, void, R> { return RxTree.declare(SvgTags.animateMotion, declaration, preset) }
export function AnimateTransform<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGAnimateTransformElement, M, void, R>>, preset?: RxNodeDecl<El<SVGAnimateTransformElement, M, void, R>>): El<SVGAnimateTransformElement, M, void, R> { return RxTree.declare(SvgTags.animateTransform, declaration, preset) }
export function Circle<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGCircleElement, M, void, R>>, preset?: RxNodeDecl<El<SVGCircleElement, M, void, R>>): El<SVGCircleElement, M, void, R> { return RxTree.declare(SvgTags.circle, declaration, preset) }
export function ClipPath<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGClipPathElement, M, void, R>>, preset?: RxNodeDecl<El<SVGClipPathElement, M, void, R>>): El<SVGClipPathElement, M, void, R> { return RxTree.declare(SvgTags.clipPath, declaration, preset) }
export function Defs<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGDefsElement, M, void, R>>, preset?: RxNodeDecl<El<SVGDefsElement, M, void, R>>): El<SVGDefsElement, M, void, R> { return RxTree.declare(SvgTags.defs, declaration, preset) }
export function Desc<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGDescElement, M, void, R>>, preset?: RxNodeDecl<El<SVGDescElement, M, void, R>>): El<SVGDescElement, M, void, R> { return RxTree.declare(SvgTags.desc, declaration, preset) }
export function Ellipse<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGEllipseElement, M, void, R>>, preset?: RxNodeDecl<El<SVGEllipseElement, M, void, R>>): El<SVGEllipseElement, M, void, R> { return RxTree.declare(SvgTags.ellipse, declaration, preset) }
export function FeBlend<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEBlendElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEBlendElement, M, void, R>>): El<SVGFEBlendElement, M, void, R> { return RxTree.declare(SvgTags.feBlend, declaration, preset) }
export function FeColorMatrix<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEColorMatrixElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEColorMatrixElement, M, void, R>>): El<SVGFEColorMatrixElement, M, void, R> { return RxTree.declare(SvgTags.feColorMatrix, declaration, preset) }
export function FeComponentTransfer<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEComponentTransferElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEComponentTransferElement, M, void, R>>): El<SVGFEComponentTransferElement, M, void, R> { return RxTree.declare(SvgTags.feComponentTransfer, declaration, preset) }
export function FeComposite<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFECompositeElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFECompositeElement, M, void, R>>): El<SVGFECompositeElement, M, void, R> { return RxTree.declare(SvgTags.feComposite, declaration, preset) }
export function FeConvolveMatrix<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEConvolveMatrixElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEConvolveMatrixElement, M, void, R>>): El<SVGFEConvolveMatrixElement, M, void, R> { return RxTree.declare(SvgTags.feConvolveMatrix, declaration, preset) }
export function FeDiffuseLighting<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEDiffuseLightingElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEDiffuseLightingElement, M, void, R>>): El<SVGFEDiffuseLightingElement, M, void, R> { return RxTree.declare(SvgTags.feDiffuseLighting, declaration, preset) }
export function FeDisplacementMap<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEDisplacementMapElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEDisplacementMapElement, M, void, R>>): El<SVGFEDisplacementMapElement, M, void, R> { return RxTree.declare(SvgTags.feDisplacementMap, declaration, preset) }
export function FeDistantLight<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEDistantLightElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEDistantLightElement, M, void, R>>): El<SVGFEDistantLightElement, M, void, R> { return RxTree.declare(SvgTags.feDistantLight, declaration, preset) }
export function FeDropShadow<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEDropShadowElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEDropShadowElement, M, void, R>>): El<SVGFEDropShadowElement, M, void, R> { return RxTree.declare(SvgTags.feDropShadow, declaration, preset) }
export function FeFlood<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEFloodElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEFloodElement, M, void, R>>): El<SVGFEFloodElement, M, void, R> { return RxTree.declare(SvgTags.feFlood, declaration, preset) }
export function FeFuncA<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEFuncAElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEFuncAElement, M, void, R>>): El<SVGFEFuncAElement, M, void, R> { return RxTree.declare(SvgTags.feFuncA, declaration, preset) }
export function FeFuncB<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEFuncBElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEFuncBElement, M, void, R>>): El<SVGFEFuncBElement, M, void, R> { return RxTree.declare(SvgTags.feFuncB, declaration, preset) }
export function FeFuncG<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEFuncGElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEFuncGElement, M, void, R>>): El<SVGFEFuncGElement, M, void, R> { return RxTree.declare(SvgTags.feFuncG, declaration, preset) }
export function FeFuncR<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEFuncRElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEFuncRElement, M, void, R>>): El<SVGFEFuncRElement, M, void, R> { return RxTree.declare(SvgTags.feFuncR, declaration, preset) }
export function FeGaussianBlur<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEGaussianBlurElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEGaussianBlurElement, M, void, R>>): El<SVGFEGaussianBlurElement, M, void, R> { return RxTree.declare(SvgTags.feGaussianBlur, declaration, preset) }
export function FeImage<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEImageElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEImageElement, M, void, R>>): El<SVGFEImageElement, M, void, R> { return RxTree.declare(SvgTags.feImage, declaration, preset) }
export function FeMerge<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEMergeElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEMergeElement, M, void, R>>): El<SVGFEMergeElement, M, void, R> { return RxTree.declare(SvgTags.feMerge, declaration, preset) }
export function FeMergeNode<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEMergeNodeElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEMergeNodeElement, M, void, R>>): El<SVGFEMergeNodeElement, M, void, R> { return RxTree.declare(SvgTags.feMergeNode, declaration, preset) }
export function FeMorphology<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEMorphologyElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEMorphologyElement, M, void, R>>): El<SVGFEMorphologyElement, M, void, R> { return RxTree.declare(SvgTags.feMorphology, declaration, preset) }
export function FeOffset<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEOffsetElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEOffsetElement, M, void, R>>): El<SVGFEOffsetElement, M, void, R> { return RxTree.declare(SvgTags.feOffset, declaration, preset) }
export function FePointLight<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEPointLightElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEPointLightElement, M, void, R>>): El<SVGFEPointLightElement, M, void, R> { return RxTree.declare(SvgTags.fePointLight, declaration, preset) }
export function FeSpecularLighting<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFESpecularLightingElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFESpecularLightingElement, M, void, R>>): El<SVGFESpecularLightingElement, M, void, R> { return RxTree.declare(SvgTags.feSpecularLighting, declaration, preset) }
export function FeSpotLight<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFESpotLightElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFESpotLightElement, M, void, R>>): El<SVGFESpotLightElement, M, void, R> { return RxTree.declare(SvgTags.feSpotLight, declaration, preset) }
export function FeTile<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFETileElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFETileElement, M, void, R>>): El<SVGFETileElement, M, void, R> { return RxTree.declare(SvgTags.feTile, declaration, preset) }
export function FeTurbulence<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFETurbulenceElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFETurbulenceElement, M, void, R>>): El<SVGFETurbulenceElement, M, void, R> { return RxTree.declare(SvgTags.feTurbulence, declaration, preset) }
export function Filter<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFilterElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFilterElement, M, void, R>>): El<SVGFilterElement, M, void, R> { return RxTree.declare(SvgTags.filter, declaration, preset) }
export function ForeignObject<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGForeignObjectElement, M, void, R>>, preset?: RxNodeDecl<El<SVGForeignObjectElement, M, void, R>>): El<SVGForeignObjectElement, M, void, R> { return RxTree.declare(SvgTags.foreignObject, declaration, preset) }
export function G<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGGElement, M, void, R>>, preset?: RxNodeDecl<El<SVGGElement, M, void, R>>): El<SVGGElement, M, void, R> { return RxTree.declare(SvgTags.g, declaration, preset) }
export function SvgImage<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGImageElement, M, void, R>>, preset?: RxNodeDecl<El<SVGImageElement, M, void, R>>): El<SVGImageElement, M, void, R> { return RxTree.declare(SvgTags.image, declaration, preset) }
export function SvgLine<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGLineElement, M, void, R>>, preset?: RxNodeDecl<El<SVGLineElement, M, void, R>>): El<SVGLineElement, M, void, R> { return RxTree.declare(SvgTags.line, declaration, preset) }
export function LinearGradient<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGLinearGradientElement, M, void, R>>, preset?: RxNodeDecl<El<SVGLinearGradientElement, M, void, R>>): El<SVGLinearGradientElement, M, void, R> { return RxTree.declare(SvgTags.linearGradient, declaration, preset) }
export function Marker<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGMarkerElement, M, void, R>>, preset?: RxNodeDecl<El<SVGMarkerElement, M, void, R>>): El<SVGMarkerElement, M, void, R> { return RxTree.declare(SvgTags.marker, declaration, preset) }
export function Mask<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGMaskElement, M, void, R>>, preset?: RxNodeDecl<El<SVGMaskElement, M, void, R>>): El<SVGMaskElement, M, void, R> { return RxTree.declare(SvgTags.mask, declaration, preset) }
export function MetaData<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGMetadataElement, M, void, R>>, preset?: RxNodeDecl<El<SVGMetadataElement, M, void, R>>): El<SVGMetadataElement, M, void, R> { return RxTree.declare(SvgTags.metadata, declaration, preset) }
export function MPath<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGElement, M, void, R>>, preset?: RxNodeDecl<El<SVGElement, M, void, R>>): El<SVGElement, M, void, R> { return RxTree.declare(SvgTags.mpath, declaration, preset) }
export function Path<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGPathElement, M, void, R>>, preset?: RxNodeDecl<El<SVGPathElement, M, void, R>>): El<SVGPathElement, M, void, R> { return RxTree.declare(SvgTags.path, declaration, preset) }
export function Pattern<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGPatternElement, M, void, R>>, preset?: RxNodeDecl<El<SVGPatternElement, M, void, R>>): El<SVGPatternElement, M, void, R> { return RxTree.declare(SvgTags.pattern, declaration, preset) }
export function Polygon<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGPolygonElement, M, void, R>>, preset?: RxNodeDecl<El<SVGPolygonElement, M, void, R>>): El<SVGPolygonElement, M, void, R> { return RxTree.declare(SvgTags.polygon, declaration, preset) }
export function PolyLine<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGPolylineElement, M, void, R>>, preset?: RxNodeDecl<El<SVGPolylineElement, M, void, R>>): El<SVGPolylineElement, M, void, R> { return RxTree.declare(SvgTags.polyline, declaration, preset) }
export function RadialGradient<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGRadialGradientElement, M, void, R>>, preset?: RxNodeDecl<El<SVGRadialGradientElement, M, void, R>>): El<SVGRadialGradientElement, M, void, R> { return RxTree.declare(SvgTags.radialGradient, declaration, preset) }
export function Rect<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGRectElement, M, void, R>>, preset?: RxNodeDecl<El<SVGRectElement, M, void, R>>): El<SVGRectElement, M, void, R> { return RxTree.declare(SvgTags.rect, declaration, preset) }
export function Stop<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGStopElement, M, void, R>>, preset?: RxNodeDecl<El<SVGStopElement, M, void, R>>): El<SVGStopElement, M, void, R> { return RxTree.declare(SvgTags.stop, declaration, preset) }
export function SvgSwitch<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGSwitchElement, M, void, R>>, preset?: RxNodeDecl<El<SVGSwitchElement, M, void, R>>): El<SVGSwitchElement, M, void, R> { return RxTree.declare(SvgTags.switch, declaration, preset) }
export function Symbol<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGSymbolElement, M, void, R>>, preset?: RxNodeDecl<El<SVGSymbolElement, M, void, R>>): El<SVGSymbolElement, M, void, R> { return RxTree.declare(SvgTags.symbol, declaration, preset) }
export function Text<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGTextElement, M, void, R>>, preset?: RxNodeDecl<El<SVGTextElement, M, void, R>>): El<SVGTextElement, M, void, R> { return RxTree.declare(SvgTags.text, declaration, preset) }
export function TextPath<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGTextPathElement, M, void, R>>, preset?: RxNodeDecl<El<SVGTextPathElement, M, void, R>>): El<SVGTextPathElement, M, void, R> { return RxTree.declare(SvgTags.textPath, declaration, preset) }
export function TSpan<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGTSpanElement, M, void, R>>, preset?: RxNodeDecl<El<SVGTSpanElement, M, void, R>>): El<SVGTSpanElement, M, void, R> { return RxTree.declare(SvgTags.tspan, declaration, preset) }
export function Use<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGUseElement, M, void, R>>, preset?: RxNodeDecl<El<SVGUseElement, M, void, R>>): El<SVGUseElement, M, void, R> { return RxTree.declare(SvgTags.use, declaration, preset) }
export function View<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGViewElement, M, void, R>>, preset?: RxNodeDecl<El<SVGViewElement, M, void, R>>): El<SVGViewElement, M, void, R> { return RxTree.declare(SvgTags.view, declaration, preset) }

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
