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

export function A<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLAnchorElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLAnchorElement, M, void, R>>): RxNode<El<HTMLAnchorElement, M, void, R>> { return RxNode.acquire(HtmlTags.a, declaration, preset) }
export function Abbr<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.abbr, declaration, preset) }
export function Address<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.address, declaration, preset) }
export function Area<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLAreaElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLAreaElement, M, void, R>>): RxNode<El<HTMLAreaElement, M, void, R>> { return RxNode.acquire(HtmlTags.area, declaration, preset) }
export function Article<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.article, declaration, preset) }
export function Aside<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.aside, declaration, preset) }
export function Audio<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLAudioElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLAudioElement, M, void, R>>): RxNode<El<HTMLAudioElement, M, void, R>> { return RxNode.acquire(HtmlTags.audio, declaration, preset) }
export function B<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.b, declaration, preset) }
export function Base<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLBaseElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLBaseElement, M, void, R>>): RxNode<El<HTMLBaseElement, M, void, R>> { return RxNode.acquire(HtmlTags.base, declaration, preset) }
export function Bdi<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.bdi, declaration, preset) }
export function Bdo<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.bdo, declaration, preset) }
export function Big<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.big, declaration, preset) }
export function BlockQuote<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.blockquote, declaration, preset) }
export function Body<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLBodyElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLBodyElement, M, void, R>>): RxNode<El<HTMLBodyElement, M, void, R>> { return RxNode.acquire(HtmlTags.body, declaration, preset) }
export function BR<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLBRElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLBRElement, M, void, R>>): RxNode<El<HTMLBRElement, M, void, R>> { return RxNode.acquire(HtmlTags.br, declaration, preset) }
export function Button<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLButtonElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLButtonElement, M, void, R>>): RxNode<El<HTMLButtonElement, M, void, R>> { return RxNode.acquire(HtmlTags.button, declaration, preset) }
export function Canvas<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLCanvasElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLCanvasElement, M, void, R>>): RxNode<El<HTMLCanvasElement, M, void, R>> { return RxNode.acquire(HtmlTags.canvas, declaration, preset) }
export function Caption<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLTableCaptionElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTableCaptionElement, M, void, R>>): RxNode<El<HTMLTableCaptionElement, M, void, R>> { return RxNode.acquire(HtmlTags.caption, declaration, preset) }
export function Cite<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.cite, declaration, preset) }
export function Code<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.code, declaration, preset) }
export function Col<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLTableColElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTableColElement, M, void, R>>): RxNode<El<HTMLTableColElement, M, void, R>> { return RxNode.acquire(HtmlTags.col, declaration, preset) }
export function ColGroup<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLTableColElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTableColElement, M, void, R>>): RxNode<El<HTMLTableColElement, M, void, R>> { return RxNode.acquire(HtmlTags.colgroup, declaration, preset) }
export function Data<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLDataElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLDataElement, M, void, R>>): RxNode<El<HTMLDataElement, M, void, R>> { return RxNode.acquire(HtmlTags.data, declaration, preset) }
export function DataList<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLDataListElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLDataListElement, M, void, R>>): RxNode<El<HTMLDataListElement, M, void, R>> { return RxNode.acquire(HtmlTags.datalist, declaration, preset) }
export function DD<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.dd, declaration, preset) }
export function Del<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.del, declaration, preset) }
export function Details<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.details, declaration, preset) }
export function Dfn<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.dfn, declaration, preset) }
export function Div<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLDivElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLDivElement, M, void, R>>): RxNode<El<HTMLDivElement, M, void, R>> { return RxNode.acquire(HtmlTags.div, declaration, preset) }
export function DL<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLDListElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLDListElement, M, void, R>>): RxNode<El<HTMLDListElement, M, void, R>> { return RxNode.acquire(HtmlTags.dl, declaration, preset) }
export function DT<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.dt, declaration, preset) }
export function EM<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.em, declaration, preset) }
export function Embed<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLEmbedElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLEmbedElement, M, void, R>>): RxNode<El<HTMLEmbedElement, M, void, R>> { return RxNode.acquire(HtmlTags.embed, declaration, preset) }
export function FieldSet<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLFieldSetElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLFieldSetElement, M, void, R>>): RxNode<El<HTMLFieldSetElement, M, void, R>> { return RxNode.acquire(HtmlTags.fieldset, declaration, preset) }
export function FigCaption<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.figcaption, declaration, preset) }
export function Figure<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.figure, declaration, preset) }
export function Footer<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.footer, declaration, preset) }
export function Form<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLFormElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLFormElement, M, void, R>>): RxNode<El<HTMLFormElement, M, void, R>> { return RxNode.acquire(HtmlTags.form, declaration, preset) }
export function H1<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>): RxNode<El<HTMLHeadingElement, M, void, R>> { return RxNode.acquire(HtmlTags.h1, declaration, preset) }
export function H2<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>): RxNode<El<HTMLHeadingElement, M, void, R>> { return RxNode.acquire(HtmlTags.h2, declaration, preset) }
export function H3<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>): RxNode<El<HTMLHeadingElement, M, void, R>> { return RxNode.acquire(HtmlTags.h3, declaration, preset) }
export function H4<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>): RxNode<El<HTMLHeadingElement, M, void, R>> { return RxNode.acquire(HtmlTags.h4, declaration, preset) }
export function H5<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>): RxNode<El<HTMLHeadingElement, M, void, R>> { return RxNode.acquire(HtmlTags.h5, declaration, preset) }
export function H6<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLHeadingElement, M, void, R>>): RxNode<El<HTMLHeadingElement, M, void, R>> { return RxNode.acquire(HtmlTags.h6, declaration, preset) }
export function Head<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLHeadElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLHeadElement, M, void, R>>): RxNode<El<HTMLHeadElement, M, void, R>> { return RxNode.acquire(HtmlTags.head, declaration, preset) }
export function Header<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.header, declaration, preset) }
export function HGroup<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.hgroup, declaration, preset) }
export function HR<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLHRElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLHRElement, M, void, R>>): RxNode<El<HTMLHRElement, M, void, R>> { return RxNode.acquire(HtmlTags.hr, declaration, preset) }
export function Html<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLHtmlElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLHtmlElement, M, void, R>>): RxNode<El<HTMLHtmlElement, M, void, R>> { return RxNode.acquire(HtmlTags.html, declaration, preset) }
export function I<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.i, declaration, preset) }
export function IFrame<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLIFrameElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLIFrameElement, M, void, R>>): RxNode<El<HTMLIFrameElement, M, void, R>> { return RxNode.acquire(HtmlTags.iframe, declaration, preset) }
export function Img<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLImageElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLImageElement, M, void, R>>): RxNode<El<HTMLImageElement, M, void, R>> { return RxNode.acquire(HtmlTags.img, declaration, preset) }
export function Input<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLInputElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLInputElement, M, void, R>>): RxNode<El<HTMLInputElement, M, void, R>> { return RxNode.acquire(HtmlTags.input, declaration, preset) }
export function Ins<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLModElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLModElement, M, void, R>>): RxNode<El<HTMLModElement, M, void, R>> { return RxNode.acquire(HtmlTags.ins, declaration, preset) }
export function Kbd<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.kbd, declaration, preset) }
export function KeyGen<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.keygen, declaration, preset) }
export function Label<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLLabelElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLLabelElement, M, void, R>>): RxNode<El<HTMLLabelElement, M, void, R>> { return RxNode.acquire(HtmlTags.label, declaration, preset) }
export function Legend<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLLegendElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLLegendElement, M, void, R>>): RxNode<El<HTMLLegendElement, M, void, R>> { return RxNode.acquire(HtmlTags.legend, declaration, preset) }
export function LI<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLLIElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLLIElement, M, void, R>>): RxNode<El<HTMLLIElement, M, void, R>> { return RxNode.acquire(HtmlTags.li, declaration, preset) }
export function Link<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLLinkElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLLinkElement, M, void, R>>): RxNode<El<HTMLLinkElement, M, void, R>> { return RxNode.acquire(HtmlTags.link, declaration, preset) }
export function Main<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.main, declaration, preset) }
export function Map<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLMapElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLMapElement, M, void, R>>): RxNode<El<HTMLMapElement, M, void, R>> { return RxNode.acquire(HtmlTags.map, declaration, preset) }
export function Mark<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.mark, declaration, preset) }
export function Menu<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.menu, declaration, preset) }
export function MenuItem<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.menuitem, declaration, preset) }
export function Meta<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLMetaElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLMetaElement, M, void, R>>): RxNode<El<HTMLMetaElement, M, void, R>> { return RxNode.acquire(HtmlTags.meta, declaration, preset) }
export function Meter<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.meter, declaration, preset) }
export function Nav<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.nav, declaration, preset) }
export function NoIndex<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.noindex, declaration, preset) }
export function NoScript<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.noscript, declaration, preset) }
export function Obj<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLObjectElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLObjectElement, M, void, R>>): RxNode<El<HTMLObjectElement, M, void, R>> { return RxNode.acquire(HtmlTags.object, declaration, preset) }
export function OL<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLOListElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLOListElement, M, void, R>>): RxNode<El<HTMLOListElement, M, void, R>> { return RxNode.acquire(HtmlTags.ol, declaration, preset) }
export function OptGroup<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLOptGroupElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLOptGroupElement, M, void, R>>): RxNode<El<HTMLOptGroupElement, M, void, R>> { return RxNode.acquire(HtmlTags.optgroup, declaration, preset) }
export function Option<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLOptionElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLOptionElement, M, void, R>>): RxNode<El<HTMLOptionElement, M, void, R>> { return RxNode.acquire(HtmlTags.option, declaration, preset) }
export function Output<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.output, declaration, preset) }
export function P<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLParagraphElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLParagraphElement, M, void, R>>): RxNode<El<HTMLParagraphElement, M, void, R>> { return RxNode.acquire(HtmlTags.p, declaration, preset) }
export function Param<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.param, declaration, preset) }
export function Picture<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.picture, declaration, preset) }
export function Pre<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLPreElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLPreElement, M, void, R>>): RxNode<El<HTMLPreElement, M, void, R>> { return RxNode.acquire(HtmlTags.pre, declaration, preset) }
export function Progress<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLProgressElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLProgressElement, M, void, R>>): RxNode<El<HTMLProgressElement, M, void, R>> { return RxNode.acquire(HtmlTags.progress, declaration, preset) }
export function Q<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLQuoteElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLQuoteElement, M, void, R>>): RxNode<El<HTMLQuoteElement, M, void, R>> { return RxNode.acquire(HtmlTags.q, declaration, preset) }
export function RP<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.rp, declaration, preset) }
export function RT<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.rt, declaration, preset) }
export function Ruby<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.ruby, declaration, preset) }
export function S<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.s, declaration, preset) }
export function Samp<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.samp, declaration, preset) }
export function Script<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLScriptElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLScriptElement, M, void, R>>): RxNode<El<HTMLScriptElement, M, void, R>> { return RxNode.acquire(HtmlTags.script, declaration, preset) }
export function Sctn<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.section, declaration, preset) }
export function Select<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLSelectElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLSelectElement, M, void, R>>): RxNode<El<HTMLSelectElement, M, void, R>> { return RxNode.acquire(HtmlTags.select, declaration, preset) }
export function Small<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.small, declaration, preset) }
export function Source<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLSourceElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLSourceElement, M, void, R>>): RxNode<El<HTMLSourceElement, M, void, R>> { return RxNode.acquire(HtmlTags.source, declaration, preset) }
export function Span<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLSpanElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLSpanElement, M, void, R>>): RxNode<El<HTMLSpanElement, M, void, R>> { return RxNode.acquire(HtmlTags.span, declaration, preset) }
export function Strong<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.strong, declaration, preset) }
export function Style<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLStyleElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLStyleElement, M, void, R>>): RxNode<El<HTMLStyleElement, M, void, R>> { return RxNode.acquire(HtmlTags.style, declaration, preset) }
export function Sub<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.sub, declaration, preset) }
export function Summary<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.summary, declaration, preset) }
export function Sup<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.sup, declaration, preset) }
export function Tbl<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLTableElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTableElement, M, void, R>>): RxNode<El<HTMLTableElement, M, void, R>> { return RxNode.acquire(HtmlTags.table, declaration, preset) }
export function Template<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLTemplateElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTemplateElement, M, void, R>>): RxNode<El<HTMLTemplateElement, M, void, R>> { return RxNode.acquire(HtmlTags.template, declaration, preset) }
export function TBody<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLTableSectionElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTableSectionElement, M, void, R>>): RxNode<El<HTMLTableSectionElement, M, void, R>> { return RxNode.acquire(HtmlTags.tbody, declaration, preset) }
export function TD<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLTableCellElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTableCellElement, M, void, R>>): RxNode<El<HTMLTableCellElement, M, void, R>> { return RxNode.acquire(HtmlTags.td, declaration, preset) }
export function TextArea<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLTextAreaElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTextAreaElement, M, void, R>>): RxNode<El<HTMLTextAreaElement, M, void, R>> { return RxNode.acquire(HtmlTags.textarea, declaration, preset) }
export function TFoot<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLTableSectionElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTableSectionElement, M, void, R>>): RxNode<El<HTMLTableSectionElement, M, void, R>> { return RxNode.acquire(HtmlTags.tfoot, declaration, preset) }
export function TH<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLTableCellElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTableCellElement, M, void, R>>): RxNode<El<HTMLTableCellElement, M, void, R>> { return RxNode.acquire(HtmlTags.th, declaration, preset) }
export function THead<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLTableSectionElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTableSectionElement, M, void, R>>): RxNode<El<HTMLTableSectionElement, M, void, R>> { return RxNode.acquire(HtmlTags.thead, declaration, preset) }
export function Time<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.time, declaration, preset) }
export function Title<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLTitleElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTitleElement, M, void, R>>): RxNode<El<HTMLTitleElement, M, void, R>> { return RxNode.acquire(HtmlTags.title, declaration, preset) }
export function TR<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLTableRowElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTableRowElement, M, void, R>>): RxNode<El<HTMLTableRowElement, M, void, R>> { return RxNode.acquire(HtmlTags.tr, declaration, preset) }
export function Track<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLTrackElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLTrackElement, M, void, R>>): RxNode<El<HTMLTrackElement, M, void, R>> { return RxNode.acquire(HtmlTags.track, declaration, preset) }
export function U<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.u, declaration, preset) }
export function UL<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLUListElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLUListElement, M, void, R>>): RxNode<El<HTMLUListElement, M, void, R>> { return RxNode.acquire(HtmlTags.ul, declaration, preset) }
export function Var<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.var, declaration, preset) }
export function Video<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLVideoElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLVideoElement, M, void, R>>): RxNode<El<HTMLVideoElement, M, void, R>> { return RxNode.acquire(HtmlTags.video, declaration, preset) }
export function Wbr<M = unknown, R = void>(declaration?: RxNodeDecl<El<HTMLElement, M, void, R>>, preset?: RxNodeDecl<El<HTMLElement, M, void, R>>): RxNode<El<HTMLElement, M, void, R>> { return RxNode.acquire(HtmlTags.wbr, declaration, preset) }

export function Svg<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGSVGElement, M, void, R>>, preset?: RxNodeDecl<El<SVGSVGElement, M, void, R>>): RxNode<El<SVGSVGElement, M, void, R>> { return RxNode.acquire(SvgTags.svg, declaration, preset) }
export function SvgA<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGAElement, M, void, R>>, preset?: RxNodeDecl<El<SVGAElement, M, void, R>>): RxNode<El<SVGAElement, M, void, R>> { return RxNode.acquire(SvgTags.a, declaration, preset) }
export function Animate<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGAnimateElement, M, void, R>>, preset?: RxNodeDecl<El<SVGAnimateElement, M, void, R>>): RxNode<El<SVGAnimateElement, M, void, R>> { return RxNode.acquire(SvgTags.animate, declaration, preset) }
export function AnimateMotion<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGAnimateMotionElement, M, void, R>>, preset?: RxNodeDecl<El<SVGAnimateMotionElement, M, void, R>>): RxNode<El<SVGAnimateMotionElement, M, void, R>> { return RxNode.acquire(SvgTags.animateMotion, declaration, preset) }
export function AnimateTransform<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGAnimateTransformElement, M, void, R>>, preset?: RxNodeDecl<El<SVGAnimateTransformElement, M, void, R>>): RxNode<El<SVGAnimateTransformElement, M, void, R>> { return RxNode.acquire(SvgTags.animateTransform, declaration, preset) }
export function Circle<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGCircleElement, M, void, R>>, preset?: RxNodeDecl<El<SVGCircleElement, M, void, R>>): RxNode<El<SVGCircleElement, M, void, R>> { return RxNode.acquire(SvgTags.circle, declaration, preset) }
export function ClipPath<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGClipPathElement, M, void, R>>, preset?: RxNodeDecl<El<SVGClipPathElement, M, void, R>>): RxNode<El<SVGClipPathElement, M, void, R>> { return RxNode.acquire(SvgTags.clipPath, declaration, preset) }
export function Defs<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGDefsElement, M, void, R>>, preset?: RxNodeDecl<El<SVGDefsElement, M, void, R>>): RxNode<El<SVGDefsElement, M, void, R>> { return RxNode.acquire(SvgTags.defs, declaration, preset) }
export function Desc<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGDescElement, M, void, R>>, preset?: RxNodeDecl<El<SVGDescElement, M, void, R>>): RxNode<El<SVGDescElement, M, void, R>> { return RxNode.acquire(SvgTags.desc, declaration, preset) }
export function Ellipse<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGEllipseElement, M, void, R>>, preset?: RxNodeDecl<El<SVGEllipseElement, M, void, R>>): RxNode<El<SVGEllipseElement, M, void, R>> { return RxNode.acquire(SvgTags.ellipse, declaration, preset) }
export function FeBlend<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEBlendElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEBlendElement, M, void, R>>): RxNode<El<SVGFEBlendElement, M, void, R>> { return RxNode.acquire(SvgTags.feBlend, declaration, preset) }
export function FeColorMatrix<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEColorMatrixElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEColorMatrixElement, M, void, R>>): RxNode<El<SVGFEColorMatrixElement, M, void, R>> { return RxNode.acquire(SvgTags.feColorMatrix, declaration, preset) }
export function FeComponentTransfer<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEComponentTransferElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEComponentTransferElement, M, void, R>>): RxNode<El<SVGFEComponentTransferElement, M, void, R>> { return RxNode.acquire(SvgTags.feComponentTransfer, declaration, preset) }
export function FeComposite<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFECompositeElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFECompositeElement, M, void, R>>): RxNode<El<SVGFECompositeElement, M, void, R>> { return RxNode.acquire(SvgTags.feComposite, declaration, preset) }
export function FeConvolveMatrix<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEConvolveMatrixElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEConvolveMatrixElement, M, void, R>>): RxNode<El<SVGFEConvolveMatrixElement, M, void, R>> { return RxNode.acquire(SvgTags.feConvolveMatrix, declaration, preset) }
export function FeDiffuseLighting<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEDiffuseLightingElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEDiffuseLightingElement, M, void, R>>): RxNode<El<SVGFEDiffuseLightingElement, M, void, R>> { return RxNode.acquire(SvgTags.feDiffuseLighting, declaration, preset) }
export function FeDisplacementMap<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEDisplacementMapElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEDisplacementMapElement, M, void, R>>): RxNode<El<SVGFEDisplacementMapElement, M, void, R>> { return RxNode.acquire(SvgTags.feDisplacementMap, declaration, preset) }
export function FeDistantLight<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEDistantLightElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEDistantLightElement, M, void, R>>): RxNode<El<SVGFEDistantLightElement, M, void, R>> { return RxNode.acquire(SvgTags.feDistantLight, declaration, preset) }
export function FeDropShadow<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEDropShadowElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEDropShadowElement, M, void, R>>): RxNode<El<SVGFEDropShadowElement, M, void, R>> { return RxNode.acquire(SvgTags.feDropShadow, declaration, preset) }
export function FeFlood<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEFloodElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEFloodElement, M, void, R>>): RxNode<El<SVGFEFloodElement, M, void, R>> { return RxNode.acquire(SvgTags.feFlood, declaration, preset) }
export function FeFuncA<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEFuncAElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEFuncAElement, M, void, R>>): RxNode<El<SVGFEFuncAElement, M, void, R>> { return RxNode.acquire(SvgTags.feFuncA, declaration, preset) }
export function FeFuncB<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEFuncBElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEFuncBElement, M, void, R>>): RxNode<El<SVGFEFuncBElement, M, void, R>> { return RxNode.acquire(SvgTags.feFuncB, declaration, preset) }
export function FeFuncG<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEFuncGElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEFuncGElement, M, void, R>>): RxNode<El<SVGFEFuncGElement, M, void, R>> { return RxNode.acquire(SvgTags.feFuncG, declaration, preset) }
export function FeFuncR<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEFuncRElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEFuncRElement, M, void, R>>): RxNode<El<SVGFEFuncRElement, M, void, R>> { return RxNode.acquire(SvgTags.feFuncR, declaration, preset) }
export function FeGaussianBlur<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEGaussianBlurElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEGaussianBlurElement, M, void, R>>): RxNode<El<SVGFEGaussianBlurElement, M, void, R>> { return RxNode.acquire(SvgTags.feGaussianBlur, declaration, preset) }
export function FeImage<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEImageElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEImageElement, M, void, R>>): RxNode<El<SVGFEImageElement, M, void, R>> { return RxNode.acquire(SvgTags.feImage, declaration, preset) }
export function FeMerge<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEMergeElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEMergeElement, M, void, R>>): RxNode<El<SVGFEMergeElement, M, void, R>> { return RxNode.acquire(SvgTags.feMerge, declaration, preset) }
export function FeMergeNode<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEMergeNodeElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEMergeNodeElement, M, void, R>>): RxNode<El<SVGFEMergeNodeElement, M, void, R>> { return RxNode.acquire(SvgTags.feMergeNode, declaration, preset) }
export function FeMorphology<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEMorphologyElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEMorphologyElement, M, void, R>>): RxNode<El<SVGFEMorphologyElement, M, void, R>> { return RxNode.acquire(SvgTags.feMorphology, declaration, preset) }
export function FeOffset<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEOffsetElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEOffsetElement, M, void, R>>): RxNode<El<SVGFEOffsetElement, M, void, R>> { return RxNode.acquire(SvgTags.feOffset, declaration, preset) }
export function FePointLight<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFEPointLightElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFEPointLightElement, M, void, R>>): RxNode<El<SVGFEPointLightElement, M, void, R>> { return RxNode.acquire(SvgTags.fePointLight, declaration, preset) }
export function FeSpecularLighting<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFESpecularLightingElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFESpecularLightingElement, M, void, R>>): RxNode<El<SVGFESpecularLightingElement, M, void, R>> { return RxNode.acquire(SvgTags.feSpecularLighting, declaration, preset) }
export function FeSpotLight<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFESpotLightElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFESpotLightElement, M, void, R>>): RxNode<El<SVGFESpotLightElement, M, void, R>> { return RxNode.acquire(SvgTags.feSpotLight, declaration, preset) }
export function FeTile<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFETileElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFETileElement, M, void, R>>): RxNode<El<SVGFETileElement, M, void, R>> { return RxNode.acquire(SvgTags.feTile, declaration, preset) }
export function FeTurbulence<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFETurbulenceElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFETurbulenceElement, M, void, R>>): RxNode<El<SVGFETurbulenceElement, M, void, R>> { return RxNode.acquire(SvgTags.feTurbulence, declaration, preset) }
export function Filter<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGFilterElement, M, void, R>>, preset?: RxNodeDecl<El<SVGFilterElement, M, void, R>>): RxNode<El<SVGFilterElement, M, void, R>> { return RxNode.acquire(SvgTags.filter, declaration, preset) }
export function ForeignObject<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGForeignObjectElement, M, void, R>>, preset?: RxNodeDecl<El<SVGForeignObjectElement, M, void, R>>): RxNode<El<SVGForeignObjectElement, M, void, R>> { return RxNode.acquire(SvgTags.foreignObject, declaration, preset) }
export function G<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGGElement, M, void, R>>, preset?: RxNodeDecl<El<SVGGElement, M, void, R>>): RxNode<El<SVGGElement, M, void, R>> { return RxNode.acquire(SvgTags.g, declaration, preset) }
export function SvgImage<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGImageElement, M, void, R>>, preset?: RxNodeDecl<El<SVGImageElement, M, void, R>>): RxNode<El<SVGImageElement, M, void, R>> { return RxNode.acquire(SvgTags.image, declaration, preset) }
export function SvgLine<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGLineElement, M, void, R>>, preset?: RxNodeDecl<El<SVGLineElement, M, void, R>>): RxNode<El<SVGLineElement, M, void, R>> { return RxNode.acquire(SvgTags.line, declaration, preset) }
export function LinearGradient<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGLinearGradientElement, M, void, R>>, preset?: RxNodeDecl<El<SVGLinearGradientElement, M, void, R>>): RxNode<El<SVGLinearGradientElement, M, void, R>> { return RxNode.acquire(SvgTags.linearGradient, declaration, preset) }
export function Marker<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGMarkerElement, M, void, R>>, preset?: RxNodeDecl<El<SVGMarkerElement, M, void, R>>): RxNode<El<SVGMarkerElement, M, void, R>> { return RxNode.acquire(SvgTags.marker, declaration, preset) }
export function Mask<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGMaskElement, M, void, R>>, preset?: RxNodeDecl<El<SVGMaskElement, M, void, R>>): RxNode<El<SVGMaskElement, M, void, R>> { return RxNode.acquire(SvgTags.mask, declaration, preset) }
export function MetaData<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGMetadataElement, M, void, R>>, preset?: RxNodeDecl<El<SVGMetadataElement, M, void, R>>): RxNode<El<SVGMetadataElement, M, void, R>> { return RxNode.acquire(SvgTags.metadata, declaration, preset) }
export function MPath<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGElement, M, void, R>>, preset?: RxNodeDecl<El<SVGElement, M, void, R>>): RxNode<El<SVGElement, M, void, R>> { return RxNode.acquire(SvgTags.mpath, declaration, preset) }
export function Path<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGPathElement, M, void, R>>, preset?: RxNodeDecl<El<SVGPathElement, M, void, R>>): RxNode<El<SVGPathElement, M, void, R>> { return RxNode.acquire(SvgTags.path, declaration, preset) }
export function Pattern<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGPatternElement, M, void, R>>, preset?: RxNodeDecl<El<SVGPatternElement, M, void, R>>): RxNode<El<SVGPatternElement, M, void, R>> { return RxNode.acquire(SvgTags.pattern, declaration, preset) }
export function Polygon<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGPolygonElement, M, void, R>>, preset?: RxNodeDecl<El<SVGPolygonElement, M, void, R>>): RxNode<El<SVGPolygonElement, M, void, R>> { return RxNode.acquire(SvgTags.polygon, declaration, preset) }
export function PolyLine<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGPolylineElement, M, void, R>>, preset?: RxNodeDecl<El<SVGPolylineElement, M, void, R>>): RxNode<El<SVGPolylineElement, M, void, R>> { return RxNode.acquire(SvgTags.polyline, declaration, preset) }
export function RadialGradient<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGRadialGradientElement, M, void, R>>, preset?: RxNodeDecl<El<SVGRadialGradientElement, M, void, R>>): RxNode<El<SVGRadialGradientElement, M, void, R>> { return RxNode.acquire(SvgTags.radialGradient, declaration, preset) }
export function Rect<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGRectElement, M, void, R>>, preset?: RxNodeDecl<El<SVGRectElement, M, void, R>>): RxNode<El<SVGRectElement, M, void, R>> { return RxNode.acquire(SvgTags.rect, declaration, preset) }
export function Stop<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGStopElement, M, void, R>>, preset?: RxNodeDecl<El<SVGStopElement, M, void, R>>): RxNode<El<SVGStopElement, M, void, R>> { return RxNode.acquire(SvgTags.stop, declaration, preset) }
export function SvgSwitch<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGSwitchElement, M, void, R>>, preset?: RxNodeDecl<El<SVGSwitchElement, M, void, R>>): RxNode<El<SVGSwitchElement, M, void, R>> { return RxNode.acquire(SvgTags.switch, declaration, preset) }
export function Symbol<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGSymbolElement, M, void, R>>, preset?: RxNodeDecl<El<SVGSymbolElement, M, void, R>>): RxNode<El<SVGSymbolElement, M, void, R>> { return RxNode.acquire(SvgTags.symbol, declaration, preset) }
export function Text<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGTextElement, M, void, R>>, preset?: RxNodeDecl<El<SVGTextElement, M, void, R>>): RxNode<El<SVGTextElement, M, void, R>> { return RxNode.acquire(SvgTags.text, declaration, preset) }
export function TextPath<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGTextPathElement, M, void, R>>, preset?: RxNodeDecl<El<SVGTextPathElement, M, void, R>>): RxNode<El<SVGTextPathElement, M, void, R>> { return RxNode.acquire(SvgTags.textPath, declaration, preset) }
export function TSpan<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGTSpanElement, M, void, R>>, preset?: RxNodeDecl<El<SVGTSpanElement, M, void, R>>): RxNode<El<SVGTSpanElement, M, void, R>> { return RxNode.acquire(SvgTags.tspan, declaration, preset) }
export function Use<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGUseElement, M, void, R>>, preset?: RxNodeDecl<El<SVGUseElement, M, void, R>>): RxNode<El<SVGUseElement, M, void, R>> { return RxNode.acquire(SvgTags.use, declaration, preset) }
export function View<M = unknown, R = void>(declaration?: RxNodeDecl<El<SVGViewElement, M, void, R>>, preset?: RxNodeDecl<El<SVGViewElement, M, void, R>>): RxNode<El<SVGViewElement, M, void, R>> { return RxNode.acquire(SvgTags.view, declaration, preset) }

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
