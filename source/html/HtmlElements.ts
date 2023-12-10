// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Verstak, ElKind, RxNodeSpec } from "../core/api.js"
import { El, StaticDriver } from "./El.js"
import { HtmlDriver, SvgDriver } from "./HtmlDriver.js"

export function HtmlBody(spec?: RxNodeSpec<El<HTMLElement>>, preset?: RxNodeSpec<El<HTMLElement>>): El<HTMLElement> {
  const driver = new StaticDriver(global.document.body, "HtmlBody", false, el => el.kind = ElKind.Section)
  return Verstak.specify(driver, spec, preset)
}

export function A<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLAnchorElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLAnchorElement, M, void, R>>): El<HTMLAnchorElement, M, void, R> { return Verstak.specify(HtmlTags.a, spec, preset) }
export function Abbr<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.abbr, spec, preset) }
export function Address<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.address, spec, preset) }
export function Area<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLAreaElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLAreaElement, M, void, R>>): El<HTMLAreaElement, M, void, R> { return Verstak.specify(HtmlTags.area, spec, preset) }
export function Article<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.article, spec, preset) }
export function Aside<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.aside, spec, preset) }
export function Audio<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLAudioElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLAudioElement, M, void, R>>): El<HTMLAudioElement, M, void, R> { return Verstak.specify(HtmlTags.audio, spec, preset) }
export function B<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.b, spec, preset) }
export function Base<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLBaseElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLBaseElement, M, void, R>>): El<HTMLBaseElement, M, void, R> { return Verstak.specify(HtmlTags.base, spec, preset) }
export function Bdi<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.bdi, spec, preset) }
export function Bdo<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.bdo, spec, preset) }
export function Big<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.big, spec, preset) }
export function BlockQuote<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.blockquote, spec, preset) }
export function Body<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLBodyElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLBodyElement, M, void, R>>): El<HTMLBodyElement, M, void, R> { return Verstak.specify(HtmlTags.body, spec, preset) }
export function BR<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLBRElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLBRElement, M, void, R>>): El<HTMLBRElement, M, void, R> { return Verstak.specify(HtmlTags.br, spec, preset) }
export function Button<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLButtonElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLButtonElement, M, void, R>>): El<HTMLButtonElement, M, void, R> { return Verstak.specify(HtmlTags.button, spec, preset) }
export function Canvas<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLCanvasElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLCanvasElement, M, void, R>>): El<HTMLCanvasElement, M, void, R> { return Verstak.specify(HtmlTags.canvas, spec, preset) }
export function Caption<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLTableCaptionElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLTableCaptionElement, M, void, R>>): El<HTMLTableCaptionElement, M, void, R> { return Verstak.specify(HtmlTags.caption, spec, preset) }
export function Cite<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.cite, spec, preset) }
export function Code<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.code, spec, preset) }
export function Col<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLTableColElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLTableColElement, M, void, R>>): El<HTMLTableColElement, M, void, R> { return Verstak.specify(HtmlTags.col, spec, preset) }
export function ColGroup<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLTableColElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLTableColElement, M, void, R>>): El<HTMLTableColElement, M, void, R> { return Verstak.specify(HtmlTags.colgroup, spec, preset) }
export function Data<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLDataElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLDataElement, M, void, R>>): El<HTMLDataElement, M, void, R> { return Verstak.specify(HtmlTags.data, spec, preset) }
export function DataList<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLDataListElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLDataListElement, M, void, R>>): El<HTMLDataListElement, M, void, R> { return Verstak.specify(HtmlTags.datalist, spec, preset) }
export function DD<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.dd, spec, preset) }
export function Del<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.del, spec, preset) }
export function Details<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.details, spec, preset) }
export function Dfn<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.dfn, spec, preset) }
export function Div<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLDivElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLDivElement, M, void, R>>): El<HTMLDivElement, M, void, R> { return Verstak.specify(HtmlTags.div, spec, preset) }
export function DL<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLDListElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLDListElement, M, void, R>>): El<HTMLDListElement, M, void, R> { return Verstak.specify(HtmlTags.dl, spec, preset) }
export function DT<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.dt, spec, preset) }
export function EM<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.em, spec, preset) }
export function Embed<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLEmbedElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLEmbedElement, M, void, R>>): El<HTMLEmbedElement, M, void, R> { return Verstak.specify(HtmlTags.embed, spec, preset) }
export function FieldSet<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLFieldSetElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLFieldSetElement, M, void, R>>): El<HTMLFieldSetElement, M, void, R> { return Verstak.specify(HtmlTags.fieldset, spec, preset) }
export function FigCaption<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.figcaption, spec, preset) }
export function Figure<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.figure, spec, preset) }
export function Footer<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.footer, spec, preset) }
export function Form<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLFormElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLFormElement, M, void, R>>): El<HTMLFormElement, M, void, R> { return Verstak.specify(HtmlTags.form, spec, preset) }
export function H1<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLHeadingElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLHeadingElement, M, void, R>>): El<HTMLHeadingElement, M, void, R> { return Verstak.specify(HtmlTags.h1, spec, preset) }
export function H2<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLHeadingElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLHeadingElement, M, void, R>>): El<HTMLHeadingElement, M, void, R> { return Verstak.specify(HtmlTags.h2, spec, preset) }
export function H3<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLHeadingElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLHeadingElement, M, void, R>>): El<HTMLHeadingElement, M, void, R> { return Verstak.specify(HtmlTags.h3, spec, preset) }
export function H4<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLHeadingElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLHeadingElement, M, void, R>>): El<HTMLHeadingElement, M, void, R> { return Verstak.specify(HtmlTags.h4, spec, preset) }
export function H5<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLHeadingElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLHeadingElement, M, void, R>>): El<HTMLHeadingElement, M, void, R> { return Verstak.specify(HtmlTags.h5, spec, preset) }
export function H6<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLHeadingElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLHeadingElement, M, void, R>>): El<HTMLHeadingElement, M, void, R> { return Verstak.specify(HtmlTags.h6, spec, preset) }
export function Head<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLHeadElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLHeadElement, M, void, R>>): El<HTMLHeadElement, M, void, R> { return Verstak.specify(HtmlTags.head, spec, preset) }
export function Header<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.header, spec, preset) }
export function HGroup<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.hgroup, spec, preset) }
export function HR<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLHRElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLHRElement, M, void, R>>): El<HTMLHRElement, M, void, R> { return Verstak.specify(HtmlTags.hr, spec, preset) }
export function Html<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLHtmlElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLHtmlElement, M, void, R>>): El<HTMLHtmlElement, M, void, R> { return Verstak.specify(HtmlTags.html, spec, preset) }
export function I<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.i, spec, preset) }
export function IFrame<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLIFrameElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLIFrameElement, M, void, R>>): El<HTMLIFrameElement, M, void, R> { return Verstak.specify(HtmlTags.iframe, spec, preset) }
export function Img<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLImageElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLImageElement, M, void, R>>): El<HTMLImageElement, M, void, R> { return Verstak.specify(HtmlTags.img, spec, preset) }
export function Input<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLInputElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLInputElement, M, void, R>>): El<HTMLInputElement, M, void, R> { return Verstak.specify(HtmlTags.input, spec, preset) }
export function Ins<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLModElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLModElement, M, void, R>>): El<HTMLModElement, M, void, R> { return Verstak.specify(HtmlTags.ins, spec, preset) }
export function Kbd<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.kbd, spec, preset) }
export function KeyGen<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.keygen, spec, preset) }
export function Label<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLLabelElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLLabelElement, M, void, R>>): El<HTMLLabelElement, M, void, R> { return Verstak.specify(HtmlTags.label, spec, preset) }
export function Legend<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLLegendElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLLegendElement, M, void, R>>): El<HTMLLegendElement, M, void, R> { return Verstak.specify(HtmlTags.legend, spec, preset) }
export function LI<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLLIElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLLIElement, M, void, R>>): El<HTMLLIElement, M, void, R> { return Verstak.specify(HtmlTags.li, spec, preset) }
export function Link<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLLinkElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLLinkElement, M, void, R>>): El<HTMLLinkElement, M, void, R> { return Verstak.specify(HtmlTags.link, spec, preset) }
export function Main<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.main, spec, preset) }
export function Map<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLMapElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLMapElement, M, void, R>>): El<HTMLMapElement, M, void, R> { return Verstak.specify(HtmlTags.map, spec, preset) }
export function Mark<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.mark, spec, preset) }
export function Menu<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.menu, spec, preset) }
export function MenuItem<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.menuitem, spec, preset) }
export function Meta<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLMetaElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLMetaElement, M, void, R>>): El<HTMLMetaElement, M, void, R> { return Verstak.specify(HtmlTags.meta, spec, preset) }
export function Meter<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.meter, spec, preset) }
export function Nav<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.nav, spec, preset) }
export function NoIndex<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.noindex, spec, preset) }
export function NoScript<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.noscript, spec, preset) }
export function Obj<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLObjectElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLObjectElement, M, void, R>>): El<HTMLObjectElement, M, void, R> { return Verstak.specify(HtmlTags.object, spec, preset) }
export function OL<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLOListElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLOListElement, M, void, R>>): El<HTMLOListElement, M, void, R> { return Verstak.specify(HtmlTags.ol, spec, preset) }
export function OptGroup<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLOptGroupElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLOptGroupElement, M, void, R>>): El<HTMLOptGroupElement, M, void, R> { return Verstak.specify(HtmlTags.optgroup, spec, preset) }
export function Option<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLOptionElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLOptionElement, M, void, R>>): El<HTMLOptionElement, M, void, R> { return Verstak.specify(HtmlTags.option, spec, preset) }
export function Output<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.output, spec, preset) }
export function P<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLParagraphElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLParagraphElement, M, void, R>>): El<HTMLParagraphElement, M, void, R> { return Verstak.specify(HtmlTags.p, spec, preset) }
export function Param<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.param, spec, preset) }
export function Picture<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.picture, spec, preset) }
export function Pre<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLPreElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLPreElement, M, void, R>>): El<HTMLPreElement, M, void, R> { return Verstak.specify(HtmlTags.pre, spec, preset) }
export function Progress<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLProgressElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLProgressElement, M, void, R>>): El<HTMLProgressElement, M, void, R> { return Verstak.specify(HtmlTags.progress, spec, preset) }
export function Q<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLQuoteElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLQuoteElement, M, void, R>>): El<HTMLQuoteElement, M, void, R> { return Verstak.specify(HtmlTags.q, spec, preset) }
export function RP<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.rp, spec, preset) }
export function RT<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.rt, spec, preset) }
export function Ruby<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.ruby, spec, preset) }
export function S<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.s, spec, preset) }
export function Samp<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.samp, spec, preset) }
export function Script<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLScriptElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLScriptElement, M, void, R>>): El<HTMLScriptElement, M, void, R> { return Verstak.specify(HtmlTags.script, spec, preset) }
export function Sctn<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.section, spec, preset) }
export function Select<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLSelectElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLSelectElement, M, void, R>>): El<HTMLSelectElement, M, void, R> { return Verstak.specify(HtmlTags.select, spec, preset) }
export function Small<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.small, spec, preset) }
export function Source<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLSourceElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLSourceElement, M, void, R>>): El<HTMLSourceElement, M, void, R> { return Verstak.specify(HtmlTags.source, spec, preset) }
export function Span<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLSpanElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLSpanElement, M, void, R>>): El<HTMLSpanElement, M, void, R> { return Verstak.specify(HtmlTags.span, spec, preset) }
export function Strong<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.strong, spec, preset) }
export function Style<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLStyleElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLStyleElement, M, void, R>>): El<HTMLStyleElement, M, void, R> { return Verstak.specify(HtmlTags.style, spec, preset) }
export function Sub<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.sub, spec, preset) }
export function Summary<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.summary, spec, preset) }
export function Sup<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.sup, spec, preset) }
export function Tbl<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLTableElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLTableElement, M, void, R>>): El<HTMLTableElement, M, void, R> { return Verstak.specify(HtmlTags.table, spec, preset) }
export function Template<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLTemplateElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLTemplateElement, M, void, R>>): El<HTMLTemplateElement, M, void, R> { return Verstak.specify(HtmlTags.template, spec, preset) }
export function TBody<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLTableSectionElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLTableSectionElement, M, void, R>>): El<HTMLTableSectionElement, M, void, R> { return Verstak.specify(HtmlTags.tbody, spec, preset) }
export function TD<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLTableCellElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLTableCellElement, M, void, R>>): El<HTMLTableCellElement, M, void, R> { return Verstak.specify(HtmlTags.td, spec, preset) }
export function TextArea<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLTextAreaElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLTextAreaElement, M, void, R>>): El<HTMLTextAreaElement, M, void, R> { return Verstak.specify(HtmlTags.textarea, spec, preset) }
export function TFoot<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLTableSectionElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLTableSectionElement, M, void, R>>): El<HTMLTableSectionElement, M, void, R> { return Verstak.specify(HtmlTags.tfoot, spec, preset) }
export function TH<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLTableCellElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLTableCellElement, M, void, R>>): El<HTMLTableCellElement, M, void, R> { return Verstak.specify(HtmlTags.th, spec, preset) }
export function THead<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLTableSectionElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLTableSectionElement, M, void, R>>): El<HTMLTableSectionElement, M, void, R> { return Verstak.specify(HtmlTags.thead, spec, preset) }
export function Time<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.time, spec, preset) }
export function Title<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLTitleElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLTitleElement, M, void, R>>): El<HTMLTitleElement, M, void, R> { return Verstak.specify(HtmlTags.title, spec, preset) }
export function TR<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLTableRowElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLTableRowElement, M, void, R>>): El<HTMLTableRowElement, M, void, R> { return Verstak.specify(HtmlTags.tr, spec, preset) }
export function Track<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLTrackElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLTrackElement, M, void, R>>): El<HTMLTrackElement, M, void, R> { return Verstak.specify(HtmlTags.track, spec, preset) }
export function U<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.u, spec, preset) }
export function UL<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLUListElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLUListElement, M, void, R>>): El<HTMLUListElement, M, void, R> { return Verstak.specify(HtmlTags.ul, spec, preset) }
export function Var<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.var, spec, preset) }
export function Video<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLVideoElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLVideoElement, M, void, R>>): El<HTMLVideoElement, M, void, R> { return Verstak.specify(HtmlTags.video, spec, preset) }
export function Wbr<M = unknown, R = void>(spec?: RxNodeSpec<El<HTMLElement, M, void, R>>, preset?: RxNodeSpec<El<HTMLElement, M, void, R>>): El<HTMLElement, M, void, R> { return Verstak.specify(HtmlTags.wbr, spec, preset) }

export function Svg<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGSVGElement, M, void, R>>, preset?: RxNodeSpec<El<SVGSVGElement, M, void, R>>): El<SVGSVGElement, M, void, R> { return Verstak.specify(SvgTags.svg, spec, preset) }
export function SvgA<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGAElement, M, void, R>>, preset?: RxNodeSpec<El<SVGAElement, M, void, R>>): El<SVGAElement, M, void, R> { return Verstak.specify(SvgTags.a, spec, preset) }
export function Animate<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGAnimateElement, M, void, R>>, preset?: RxNodeSpec<El<SVGAnimateElement, M, void, R>>): El<SVGAnimateElement, M, void, R> { return Verstak.specify(SvgTags.animate, spec, preset) }
export function AnimateMotion<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGAnimateMotionElement, M, void, R>>, preset?: RxNodeSpec<El<SVGAnimateMotionElement, M, void, R>>): El<SVGAnimateMotionElement, M, void, R> { return Verstak.specify(SvgTags.animateMotion, spec, preset) }
export function AnimateTransform<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGAnimateTransformElement, M, void, R>>, preset?: RxNodeSpec<El<SVGAnimateTransformElement, M, void, R>>): El<SVGAnimateTransformElement, M, void, R> { return Verstak.specify(SvgTags.animateTransform, spec, preset) }
export function Circle<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGCircleElement, M, void, R>>, preset?: RxNodeSpec<El<SVGCircleElement, M, void, R>>): El<SVGCircleElement, M, void, R> { return Verstak.specify(SvgTags.circle, spec, preset) }
export function ClipPath<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGClipPathElement, M, void, R>>, preset?: RxNodeSpec<El<SVGClipPathElement, M, void, R>>): El<SVGClipPathElement, M, void, R> { return Verstak.specify(SvgTags.clipPath, spec, preset) }
export function Defs<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGDefsElement, M, void, R>>, preset?: RxNodeSpec<El<SVGDefsElement, M, void, R>>): El<SVGDefsElement, M, void, R> { return Verstak.specify(SvgTags.defs, spec, preset) }
export function Desc<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGDescElement, M, void, R>>, preset?: RxNodeSpec<El<SVGDescElement, M, void, R>>): El<SVGDescElement, M, void, R> { return Verstak.specify(SvgTags.desc, spec, preset) }
export function Ellipse<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGEllipseElement, M, void, R>>, preset?: RxNodeSpec<El<SVGEllipseElement, M, void, R>>): El<SVGEllipseElement, M, void, R> { return Verstak.specify(SvgTags.ellipse, spec, preset) }
export function FeBlend<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGFEBlendElement, M, void, R>>, preset?: RxNodeSpec<El<SVGFEBlendElement, M, void, R>>): El<SVGFEBlendElement, M, void, R> { return Verstak.specify(SvgTags.feBlend, spec, preset) }
export function FeColorMatrix<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGFEColorMatrixElement, M, void, R>>, preset?: RxNodeSpec<El<SVGFEColorMatrixElement, M, void, R>>): El<SVGFEColorMatrixElement, M, void, R> { return Verstak.specify(SvgTags.feColorMatrix, spec, preset) }
export function FeComponentTransfer<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGFEComponentTransferElement, M, void, R>>, preset?: RxNodeSpec<El<SVGFEComponentTransferElement, M, void, R>>): El<SVGFEComponentTransferElement, M, void, R> { return Verstak.specify(SvgTags.feComponentTransfer, spec, preset) }
export function FeComposite<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGFECompositeElement, M, void, R>>, preset?: RxNodeSpec<El<SVGFECompositeElement, M, void, R>>): El<SVGFECompositeElement, M, void, R> { return Verstak.specify(SvgTags.feComposite, spec, preset) }
export function FeConvolveMatrix<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGFEConvolveMatrixElement, M, void, R>>, preset?: RxNodeSpec<El<SVGFEConvolveMatrixElement, M, void, R>>): El<SVGFEConvolveMatrixElement, M, void, R> { return Verstak.specify(SvgTags.feConvolveMatrix, spec, preset) }
export function FeDiffuseLighting<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGFEDiffuseLightingElement, M, void, R>>, preset?: RxNodeSpec<El<SVGFEDiffuseLightingElement, M, void, R>>): El<SVGFEDiffuseLightingElement, M, void, R> { return Verstak.specify(SvgTags.feDiffuseLighting, spec, preset) }
export function FeDisplacementMap<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGFEDisplacementMapElement, M, void, R>>, preset?: RxNodeSpec<El<SVGFEDisplacementMapElement, M, void, R>>): El<SVGFEDisplacementMapElement, M, void, R> { return Verstak.specify(SvgTags.feDisplacementMap, spec, preset) }
export function FeDistantLight<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGFEDistantLightElement, M, void, R>>, preset?: RxNodeSpec<El<SVGFEDistantLightElement, M, void, R>>): El<SVGFEDistantLightElement, M, void, R> { return Verstak.specify(SvgTags.feDistantLight, spec, preset) }
export function FeDropShadow<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGFEDropShadowElement, M, void, R>>, preset?: RxNodeSpec<El<SVGFEDropShadowElement, M, void, R>>): El<SVGFEDropShadowElement, M, void, R> { return Verstak.specify(SvgTags.feDropShadow, spec, preset) }
export function FeFlood<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGFEFloodElement, M, void, R>>, preset?: RxNodeSpec<El<SVGFEFloodElement, M, void, R>>): El<SVGFEFloodElement, M, void, R> { return Verstak.specify(SvgTags.feFlood, spec, preset) }
export function FeFuncA<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGFEFuncAElement, M, void, R>>, preset?: RxNodeSpec<El<SVGFEFuncAElement, M, void, R>>): El<SVGFEFuncAElement, M, void, R> { return Verstak.specify(SvgTags.feFuncA, spec, preset) }
export function FeFuncB<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGFEFuncBElement, M, void, R>>, preset?: RxNodeSpec<El<SVGFEFuncBElement, M, void, R>>): El<SVGFEFuncBElement, M, void, R> { return Verstak.specify(SvgTags.feFuncB, spec, preset) }
export function FeFuncG<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGFEFuncGElement, M, void, R>>, preset?: RxNodeSpec<El<SVGFEFuncGElement, M, void, R>>): El<SVGFEFuncGElement, M, void, R> { return Verstak.specify(SvgTags.feFuncG, spec, preset) }
export function FeFuncR<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGFEFuncRElement, M, void, R>>, preset?: RxNodeSpec<El<SVGFEFuncRElement, M, void, R>>): El<SVGFEFuncRElement, M, void, R> { return Verstak.specify(SvgTags.feFuncR, spec, preset) }
export function FeGaussianBlur<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGFEGaussianBlurElement, M, void, R>>, preset?: RxNodeSpec<El<SVGFEGaussianBlurElement, M, void, R>>): El<SVGFEGaussianBlurElement, M, void, R> { return Verstak.specify(SvgTags.feGaussianBlur, spec, preset) }
export function FeImage<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGFEImageElement, M, void, R>>, preset?: RxNodeSpec<El<SVGFEImageElement, M, void, R>>): El<SVGFEImageElement, M, void, R> { return Verstak.specify(SvgTags.feImage, spec, preset) }
export function FeMerge<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGFEMergeElement, M, void, R>>, preset?: RxNodeSpec<El<SVGFEMergeElement, M, void, R>>): El<SVGFEMergeElement, M, void, R> { return Verstak.specify(SvgTags.feMerge, spec, preset) }
export function FeMergeNode<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGFEMergeNodeElement, M, void, R>>, preset?: RxNodeSpec<El<SVGFEMergeNodeElement, M, void, R>>): El<SVGFEMergeNodeElement, M, void, R> { return Verstak.specify(SvgTags.feMergeNode, spec, preset) }
export function FeMorphology<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGFEMorphologyElement, M, void, R>>, preset?: RxNodeSpec<El<SVGFEMorphologyElement, M, void, R>>): El<SVGFEMorphologyElement, M, void, R> { return Verstak.specify(SvgTags.feMorphology, spec, preset) }
export function FeOffset<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGFEOffsetElement, M, void, R>>, preset?: RxNodeSpec<El<SVGFEOffsetElement, M, void, R>>): El<SVGFEOffsetElement, M, void, R> { return Verstak.specify(SvgTags.feOffset, spec, preset) }
export function FePointLight<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGFEPointLightElement, M, void, R>>, preset?: RxNodeSpec<El<SVGFEPointLightElement, M, void, R>>): El<SVGFEPointLightElement, M, void, R> { return Verstak.specify(SvgTags.fePointLight, spec, preset) }
export function FeSpecularLighting<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGFESpecularLightingElement, M, void, R>>, preset?: RxNodeSpec<El<SVGFESpecularLightingElement, M, void, R>>): El<SVGFESpecularLightingElement, M, void, R> { return Verstak.specify(SvgTags.feSpecularLighting, spec, preset) }
export function FeSpotLight<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGFESpotLightElement, M, void, R>>, preset?: RxNodeSpec<El<SVGFESpotLightElement, M, void, R>>): El<SVGFESpotLightElement, M, void, R> { return Verstak.specify(SvgTags.feSpotLight, spec, preset) }
export function FeTile<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGFETileElement, M, void, R>>, preset?: RxNodeSpec<El<SVGFETileElement, M, void, R>>): El<SVGFETileElement, M, void, R> { return Verstak.specify(SvgTags.feTile, spec, preset) }
export function FeTurbulence<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGFETurbulenceElement, M, void, R>>, preset?: RxNodeSpec<El<SVGFETurbulenceElement, M, void, R>>): El<SVGFETurbulenceElement, M, void, R> { return Verstak.specify(SvgTags.feTurbulence, spec, preset) }
export function Filter<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGFilterElement, M, void, R>>, preset?: RxNodeSpec<El<SVGFilterElement, M, void, R>>): El<SVGFilterElement, M, void, R> { return Verstak.specify(SvgTags.filter, spec, preset) }
export function ForeignObject<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGForeignObjectElement, M, void, R>>, preset?: RxNodeSpec<El<SVGForeignObjectElement, M, void, R>>): El<SVGForeignObjectElement, M, void, R> { return Verstak.specify(SvgTags.foreignObject, spec, preset) }
export function G<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGGElement, M, void, R>>, preset?: RxNodeSpec<El<SVGGElement, M, void, R>>): El<SVGGElement, M, void, R> { return Verstak.specify(SvgTags.g, spec, preset) }
export function SvgImage<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGImageElement, M, void, R>>, preset?: RxNodeSpec<El<SVGImageElement, M, void, R>>): El<SVGImageElement, M, void, R> { return Verstak.specify(SvgTags.image, spec, preset) }
export function SvgLine<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGLineElement, M, void, R>>, preset?: RxNodeSpec<El<SVGLineElement, M, void, R>>): El<SVGLineElement, M, void, R> { return Verstak.specify(SvgTags.line, spec, preset) }
export function LinearGradient<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGLinearGradientElement, M, void, R>>, preset?: RxNodeSpec<El<SVGLinearGradientElement, M, void, R>>): El<SVGLinearGradientElement, M, void, R> { return Verstak.specify(SvgTags.linearGradient, spec, preset) }
export function Marker<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGMarkerElement, M, void, R>>, preset?: RxNodeSpec<El<SVGMarkerElement, M, void, R>>): El<SVGMarkerElement, M, void, R> { return Verstak.specify(SvgTags.marker, spec, preset) }
export function Mask<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGMaskElement, M, void, R>>, preset?: RxNodeSpec<El<SVGMaskElement, M, void, R>>): El<SVGMaskElement, M, void, R> { return Verstak.specify(SvgTags.mask, spec, preset) }
export function MetaData<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGMetadataElement, M, void, R>>, preset?: RxNodeSpec<El<SVGMetadataElement, M, void, R>>): El<SVGMetadataElement, M, void, R> { return Verstak.specify(SvgTags.metadata, spec, preset) }
export function MPath<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGElement, M, void, R>>, preset?: RxNodeSpec<El<SVGElement, M, void, R>>): El<SVGElement, M, void, R> { return Verstak.specify(SvgTags.mpath, spec, preset) }
export function Path<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGPathElement, M, void, R>>, preset?: RxNodeSpec<El<SVGPathElement, M, void, R>>): El<SVGPathElement, M, void, R> { return Verstak.specify(SvgTags.path, spec, preset) }
export function Pattern<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGPatternElement, M, void, R>>, preset?: RxNodeSpec<El<SVGPatternElement, M, void, R>>): El<SVGPatternElement, M, void, R> { return Verstak.specify(SvgTags.pattern, spec, preset) }
export function Polygon<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGPolygonElement, M, void, R>>, preset?: RxNodeSpec<El<SVGPolygonElement, M, void, R>>): El<SVGPolygonElement, M, void, R> { return Verstak.specify(SvgTags.polygon, spec, preset) }
export function PolyLine<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGPolylineElement, M, void, R>>, preset?: RxNodeSpec<El<SVGPolylineElement, M, void, R>>): El<SVGPolylineElement, M, void, R> { return Verstak.specify(SvgTags.polyline, spec, preset) }
export function RadialGradient<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGRadialGradientElement, M, void, R>>, preset?: RxNodeSpec<El<SVGRadialGradientElement, M, void, R>>): El<SVGRadialGradientElement, M, void, R> { return Verstak.specify(SvgTags.radialGradient, spec, preset) }
export function Rect<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGRectElement, M, void, R>>, preset?: RxNodeSpec<El<SVGRectElement, M, void, R>>): El<SVGRectElement, M, void, R> { return Verstak.specify(SvgTags.rect, spec, preset) }
export function Stop<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGStopElement, M, void, R>>, preset?: RxNodeSpec<El<SVGStopElement, M, void, R>>): El<SVGStopElement, M, void, R> { return Verstak.specify(SvgTags.stop, spec, preset) }
export function SvgSwitch<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGSwitchElement, M, void, R>>, preset?: RxNodeSpec<El<SVGSwitchElement, M, void, R>>): El<SVGSwitchElement, M, void, R> { return Verstak.specify(SvgTags.switch, spec, preset) }
export function Symbol<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGSymbolElement, M, void, R>>, preset?: RxNodeSpec<El<SVGSymbolElement, M, void, R>>): El<SVGSymbolElement, M, void, R> { return Verstak.specify(SvgTags.symbol, spec, preset) }
export function Text<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGTextElement, M, void, R>>, preset?: RxNodeSpec<El<SVGTextElement, M, void, R>>): El<SVGTextElement, M, void, R> { return Verstak.specify(SvgTags.text, spec, preset) }
export function TextPath<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGTextPathElement, M, void, R>>, preset?: RxNodeSpec<El<SVGTextPathElement, M, void, R>>): El<SVGTextPathElement, M, void, R> { return Verstak.specify(SvgTags.textPath, spec, preset) }
export function TSpan<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGTSpanElement, M, void, R>>, preset?: RxNodeSpec<El<SVGTSpanElement, M, void, R>>): El<SVGTSpanElement, M, void, R> { return Verstak.specify(SvgTags.tspan, spec, preset) }
export function Use<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGUseElement, M, void, R>>, preset?: RxNodeSpec<El<SVGUseElement, M, void, R>>): El<SVGUseElement, M, void, R> { return Verstak.specify(SvgTags.use, spec, preset) }
export function View<M = unknown, R = void>(spec?: RxNodeSpec<El<SVGViewElement, M, void, R>>, preset?: RxNodeSpec<El<SVGViewElement, M, void, R>>): El<SVGViewElement, M, void, R> { return Verstak.specify(SvgTags.view, spec, preset) }

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
