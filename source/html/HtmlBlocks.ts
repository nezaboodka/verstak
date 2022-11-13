// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { VBlock, Render, StaticDriver, LayoutKind, BlockArgs } from "../core/api"
import { HtmlDriver, SvgDriver } from "./HtmlDriver"

export function HtmlBody(name: string, args: BlockArgs<HTMLElement>): VBlock<HTMLElement> {
  const driver = new StaticDriver(global.document.body, name, LayoutKind.Block)
  return VBlock.claim(name, driver, args)
}

export function A<M = unknown, R = void>(name: string, args: BlockArgs<HTMLAnchorElement, M, R> | Render<HTMLAnchorElement, M, R>): VBlock<HTMLAnchorElement, M, R> { return VBlock.claim(name, HtmlTags.a, args instanceof Function ? { render: args } : args) }
export function Abbr<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.abbr, args instanceof Function ? { render: args } : args) }
export function Address<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.address, args instanceof Function ? { render: args } : args) }
export function Area<M = unknown, R = void>(name: string, args: BlockArgs<HTMLAreaElement, M, R> | Render<HTMLAreaElement, M, R>): VBlock<HTMLAreaElement, M, R> { return VBlock.claim(name, HtmlTags.area, args instanceof Function ? { render: args } : args) }
export function Article<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.article, args instanceof Function ? { render: args } : args) }
export function Aside<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.aside, args instanceof Function ? { render: args } : args) }
export function Audio<M = unknown, R = void>(name: string, args: BlockArgs<HTMLAudioElement, M, R> | Render<HTMLAudioElement, M, R>): VBlock<HTMLAudioElement, M, R> { return VBlock.claim(name, HtmlTags.audio, args instanceof Function ? { render: args } : args) }
export function B<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.b, args instanceof Function ? { render: args } : args) }
export function Base<M = unknown, R = void>(name: string, args: BlockArgs<HTMLBaseElement, M, R> | Render<HTMLBaseElement, M, R>): VBlock<HTMLBaseElement, M, R> { return VBlock.claim(name, HtmlTags.base, args instanceof Function ? { render: args } : args) }
export function Bdi<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.bdi, args instanceof Function ? { render: args } : args) }
export function Bdo<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.bdo, args instanceof Function ? { render: args } : args) }
export function Big<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.big, args instanceof Function ? { render: args } : args) }
export function BlockQuote<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.blockquote, args instanceof Function ? { render: args } : args) }
export function Body<M = unknown, R = void>(name: string, args: BlockArgs<HTMLBodyElement, M, R> | Render<HTMLBodyElement, M, R>): VBlock<HTMLBodyElement, M, R> { return VBlock.claim(name, HtmlTags.body, args instanceof Function ? { render: args } : args) }
export function BR<M = unknown, R = void>(name: string, args: BlockArgs<HTMLBRElement, M, R> | Render<HTMLBRElement, M, R>): VBlock<HTMLBRElement, M, R> { return VBlock.claim(name, HtmlTags.br, args instanceof Function ? { render: args } : args) }
export function Button<M = unknown, R = void>(name: string, args: BlockArgs<HTMLButtonElement, M, R> | Render<HTMLButtonElement, M, R>): VBlock<HTMLButtonElement, M, R> { return VBlock.claim(name, HtmlTags.button, args instanceof Function ? { render: args } : args) }
export function Canvas<M = unknown, R = void>(name: string, args: BlockArgs<HTMLCanvasElement, M, R> | Render<HTMLCanvasElement, M, R>): VBlock<HTMLCanvasElement, M, R> { return VBlock.claim(name, HtmlTags.canvas, args instanceof Function ? { render: args } : args) }
export function Caption<M = unknown, R = void>(name: string, args: BlockArgs<HTMLTableCaptionElement, M, R> | Render<HTMLTableCaptionElement, M, R>): VBlock<HTMLTableCaptionElement, M, R> { return VBlock.claim(name, HtmlTags.caption, args instanceof Function ? { render: args } : args) }
export function Cite<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.cite, args instanceof Function ? { render: args } : args) }
export function Code<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.code, args instanceof Function ? { render: args } : args) }
export function Col<M = unknown, R = void>(name: string, args: BlockArgs<HTMLTableColElement, M, R> | Render<HTMLTableColElement, M, R>): VBlock<HTMLTableColElement, M, R> { return VBlock.claim(name, HtmlTags.col, args instanceof Function ? { render: args } : args) }
export function ColGroup<M = unknown, R = void>(name: string, args: BlockArgs<HTMLTableColElement, M, R> | Render<HTMLTableColElement, M, R>): VBlock<HTMLTableColElement, M, R> { return VBlock.claim(name, HtmlTags.colgroup, args instanceof Function ? { render: args } : args) }
export function Data<M = unknown, R = void>(name: string, args: BlockArgs<HTMLDataElement, M, R> | Render<HTMLDataElement, M, R>): VBlock<HTMLDataElement, M, R> { return VBlock.claim(name, HtmlTags.data, args instanceof Function ? { render: args } : args) }
export function DataList<M = unknown, R = void>(name: string, args: BlockArgs<HTMLDataListElement, M, R> | Render<HTMLDataListElement, M, R>): VBlock<HTMLDataListElement, M, R> { return VBlock.claim(name, HtmlTags.datalist, args instanceof Function ? { render: args } : args) }
export function DD<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.dd, args instanceof Function ? { render: args } : args) }
export function Del<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.del, args instanceof Function ? { render: args } : args) }
export function Details<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.details, args instanceof Function ? { render: args } : args) }
export function Dfn<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.dfn, args instanceof Function ? { render: args } : args) }
export function Div<M = unknown, R = void>(name: string, args: BlockArgs<HTMLDivElement, M, R> | Render<HTMLDivElement, M, R>): VBlock<HTMLDivElement, M, R> { return VBlock.claim(name, HtmlTags.div, args instanceof Function ? { render: args } : args) }
export function DL<M = unknown, R = void>(name: string, args: BlockArgs<HTMLDListElement, M, R> | Render<HTMLDListElement, M, R>): VBlock<HTMLDListElement, M, R> { return VBlock.claim(name, HtmlTags.dl, args instanceof Function ? { render: args } : args) }
export function DT<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.dt, args instanceof Function ? { render: args } : args) }
export function EM<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.em, args instanceof Function ? { render: args } : args) }
export function Embed<M = unknown, R = void>(name: string, args: BlockArgs<HTMLEmbedElement, M, R> | Render<HTMLEmbedElement, M, R>): VBlock<HTMLEmbedElement, M, R> { return VBlock.claim(name, HtmlTags.embed, args instanceof Function ? { render: args } : args) }
export function FieldSet<M = unknown, R = void>(name: string, args: BlockArgs<HTMLFieldSetElement, M, R> | Render<HTMLFieldSetElement, M, R>): VBlock<HTMLFieldSetElement, M, R> { return VBlock.claim(name, HtmlTags.fieldset, args instanceof Function ? { render: args } : args) }
export function FigCaption<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.figcaption, args instanceof Function ? { render: args } : args) }
export function Figure<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.figure, args instanceof Function ? { render: args } : args) }
export function Footer<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.footer, args instanceof Function ? { render: args } : args) }
export function Form<M = unknown, R = void>(name: string, args: BlockArgs<HTMLFormElement, M, R> | Render<HTMLFormElement, M, R>): VBlock<HTMLFormElement, M, R> { return VBlock.claim(name, HtmlTags.form, args instanceof Function ? { render: args } : args) }
export function H1<M = unknown, R = void>(name: string, args: BlockArgs<HTMLHeadingElement, M, R> | Render<HTMLHeadingElement, M, R>): VBlock<HTMLHeadingElement, M, R> { return VBlock.claim(name, HtmlTags.h1, args instanceof Function ? { render: args } : args) }
export function H2<M = unknown, R = void>(name: string, args: BlockArgs<HTMLHeadingElement, M, R> | Render<HTMLHeadingElement, M, R>): VBlock<HTMLHeadingElement, M, R> { return VBlock.claim(name, HtmlTags.h2, args instanceof Function ? { render: args } : args) }
export function H3<M = unknown, R = void>(name: string, args: BlockArgs<HTMLHeadingElement, M, R> | Render<HTMLHeadingElement, M, R>): VBlock<HTMLHeadingElement, M, R> { return VBlock.claim(name, HtmlTags.h3, args instanceof Function ? { render: args } : args) }
export function H4<M = unknown, R = void>(name: string, args: BlockArgs<HTMLHeadingElement, M, R> | Render<HTMLHeadingElement, M, R>): VBlock<HTMLHeadingElement, M, R> { return VBlock.claim(name, HtmlTags.h4, args instanceof Function ? { render: args } : args) }
export function H5<M = unknown, R = void>(name: string, args: BlockArgs<HTMLHeadingElement, M, R> | Render<HTMLHeadingElement, M, R>): VBlock<HTMLHeadingElement, M, R> { return VBlock.claim(name, HtmlTags.h5, args instanceof Function ? { render: args } : args) }
export function H6<M = unknown, R = void>(name: string, args: BlockArgs<HTMLHeadingElement, M, R> | Render<HTMLHeadingElement, M, R>): VBlock<HTMLHeadingElement, M, R> { return VBlock.claim(name, HtmlTags.h6, args instanceof Function ? { render: args } : args) }
export function Head<M = unknown, R = void>(name: string, args: BlockArgs<HTMLHeadElement, M, R> | Render<HTMLHeadElement, M, R>): VBlock<HTMLHeadElement, M, R> { return VBlock.claim(name, HtmlTags.head, args instanceof Function ? { render: args } : args) }
export function Header<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.header, args instanceof Function ? { render: args } : args) }
export function HGroup<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.hgroup, args instanceof Function ? { render: args } : args) }
export function HR<M = unknown, R = void>(name: string, args: BlockArgs<HTMLHRElement, M, R> | Render<HTMLHRElement, M, R>): VBlock<HTMLHRElement, M, R> { return VBlock.claim(name, HtmlTags.hr, args instanceof Function ? { render: args } : args) }
export function Html<M = unknown, R = void>(name: string, args: BlockArgs<HTMLHtmlElement, M, R> | Render<HTMLHtmlElement, M, R>): VBlock<HTMLHtmlElement, M, R> { return VBlock.claim(name, HtmlTags.html, args instanceof Function ? { render: args } : args) }
export function I<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.i, args instanceof Function ? { render: args } : args) }
export function IFrame<M = unknown, R = void>(name: string, args: BlockArgs<HTMLIFrameElement, M, R> | Render<HTMLIFrameElement, M, R>): VBlock<HTMLIFrameElement, M, R> { return VBlock.claim(name, HtmlTags.iframe, args instanceof Function ? { render: args } : args) }
export function Img<M = unknown, R = void>(name: string, args: BlockArgs<HTMLImageElement, M, R> | Render<HTMLImageElement, M, R>): VBlock<HTMLImageElement, M, R> { return VBlock.claim(name, HtmlTags.img, args instanceof Function ? { render: args } : args) }
export function Input<M = unknown, R = void>(name: string, args: BlockArgs<HTMLInputElement, M, R> | Render<HTMLInputElement, M, R>): VBlock<HTMLInputElement, M, R> { return VBlock.claim(name, HtmlTags.input, args instanceof Function ? { render: args } : args) }
export function Ins<M = unknown, R = void>(name: string, args: BlockArgs<HTMLModElement, M, R> | Render<HTMLModElement, M, R>): VBlock<HTMLModElement, M, R> { return VBlock.claim(name, HtmlTags.ins, args instanceof Function ? { render: args } : args) }
export function Kbd<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.kbd, args instanceof Function ? { render: args } : args) }
export function KeyGen<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.keygen, args instanceof Function ? { render: args } : args) }
export function Label<M = unknown, R = void>(name: string, args: BlockArgs<HTMLLabelElement, M, R> | Render<HTMLLabelElement, M, R>): VBlock<HTMLLabelElement, M, R> { return VBlock.claim(name, HtmlTags.label, args instanceof Function ? { render: args } : args) }
export function Legend<M = unknown, R = void>(name: string, args: BlockArgs<HTMLLegendElement, M, R> | Render<HTMLLegendElement, M, R>): VBlock<HTMLLegendElement, M, R> { return VBlock.claim(name, HtmlTags.legend, args instanceof Function ? { render: args } : args) }
export function LI<M = unknown, R = void>(name: string, args: BlockArgs<HTMLLIElement, M, R> | Render<HTMLLIElement, M, R>): VBlock<HTMLLIElement, M, R> { return VBlock.claim(name, HtmlTags.li, args instanceof Function ? { render: args } : args) }
export function Link<M = unknown, R = void>(name: string, args: BlockArgs<HTMLLinkElement, M, R> | Render<HTMLLinkElement, M, R>): VBlock<HTMLLinkElement, M, R> { return VBlock.claim(name, HtmlTags.link, args instanceof Function ? { render: args } : args) }
export function Main<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.main, args instanceof Function ? { render: args } : args) }
export function Map<M = unknown, R = void>(name: string, args: BlockArgs<HTMLMapElement, M, R> | Render<HTMLMapElement, M, R>): VBlock<HTMLMapElement, M, R> { return VBlock.claim(name, HtmlTags.map, args instanceof Function ? { render: args } : args) }
export function Mark<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.mark, args instanceof Function ? { render: args } : args) }
export function Menu<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.menu, args instanceof Function ? { render: args } : args) }
export function MenuItem<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.menuitem, args instanceof Function ? { render: args } : args) }
export function Meta<M = unknown, R = void>(name: string, args: BlockArgs<HTMLMetaElement, M, R> | Render<HTMLMetaElement, M, R>, renderer: Render<HTMLMetaElement, M, R>): VBlock<HTMLMetaElement, M, R> { return VBlock.claim(name, HtmlTags.meta, args instanceof Function ? { render: args } : args) }
export function Meter<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.meter, args instanceof Function ? { render: args } : args) }
export function Nav<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.nav, args instanceof Function ? { render: args } : args) }
export function NoIndex<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.noindex, args instanceof Function ? { render: args } : args) }
export function NoScript<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.noscript, args instanceof Function ? { render: args } : args) }
export function Obj<M = unknown, R = void>(name: string, args: BlockArgs<HTMLObjectElement, M, R> | Render<HTMLObjectElement, M, R>): VBlock<HTMLObjectElement, M, R> { return VBlock.claim(name, HtmlTags.object, args instanceof Function ? { render: args } : args) }
export function OL<M = unknown, R = void>(name: string, args: BlockArgs<HTMLOListElement, M, R> | Render<HTMLOListElement, M, R>): VBlock<HTMLOListElement, M, R> { return VBlock.claim(name, HtmlTags.ol, args instanceof Function ? { render: args } : args) }
export function OptGroup<M = unknown, R = void>(name: string, args: BlockArgs<HTMLOptGroupElement, M, R> | Render<HTMLOptGroupElement, M, R>): VBlock<HTMLOptGroupElement, M, R> { return VBlock.claim(name, HtmlTags.optgroup, args instanceof Function ? { render: args } : args) }
export function Option<M = unknown, R = void>(name: string, args: BlockArgs<HTMLOptionElement, M, R> | Render<HTMLOptionElement, M, R>): VBlock<HTMLOptionElement, M, R> { return VBlock.claim(name, HtmlTags.option, args instanceof Function ? { render: args } : args) }
export function Output<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.output, args instanceof Function ? { render: args } : args) }
export function P<M = unknown, R = void>(name: string, args: BlockArgs<HTMLParagraphElement, M, R> | Render<HTMLParagraphElement, M, R>): VBlock<HTMLParagraphElement, M, R> { return VBlock.claim(name, HtmlTags.p, args instanceof Function ? { render: args } : args) }
export function Param<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.param, args instanceof Function ? { render: args } : args) }
export function Picture<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.picture, args instanceof Function ? { render: args } : args) }
export function Pre<M = unknown, R = void>(name: string, args: BlockArgs<HTMLPreElement, M, R> | Render<HTMLPreElement, M, R>): VBlock<HTMLPreElement, M, R> { return VBlock.claim(name, HtmlTags.pre, args instanceof Function ? { render: args } : args) }
export function Progress<M = unknown, R = void>(name: string, args: BlockArgs<HTMLProgressElement, M, R> | Render<HTMLProgressElement, M, R>): VBlock<HTMLProgressElement, M, R> { return VBlock.claim(name, HtmlTags.progress, args instanceof Function ? { render: args } : args) }
export function Q<M = unknown, R = void>(name: string, args: BlockArgs<HTMLQuoteElement, M, R> | Render<HTMLQuoteElement, M, R>): VBlock<HTMLQuoteElement, M, R> { return VBlock.claim(name, HtmlTags.q, args instanceof Function ? { render: args } : args) }
export function RP<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.rp, args instanceof Function ? { render: args } : args) }
export function RT<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.rt, args instanceof Function ? { render: args } : args) }
export function Ruby<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.ruby, args instanceof Function ? { render: args } : args) }
export function S<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.s, args instanceof Function ? { render: args } : args) }
export function Samp<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.samp, args instanceof Function ? { render: args } : args) }
export function Script<M = unknown, R = void>(name: string, args: BlockArgs<HTMLScriptElement, M, R> | Render<HTMLScriptElement, M, R>): VBlock<HTMLScriptElement, M, R> { return VBlock.claim(name, HtmlTags.script, args instanceof Function ? { render: args } : args) }
export function Section<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.section, args instanceof Function ? { render: args } : args) }
export function Select<M = unknown, R = void>(name: string, args: BlockArgs<HTMLSelectElement, M, R> | Render<HTMLSelectElement, M, R>): VBlock<HTMLSelectElement, M, R> { return VBlock.claim(name, HtmlTags.select, args instanceof Function ? { render: args } : args) }
export function Small<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.small, args instanceof Function ? { render: args } : args) }
export function Source<M = unknown, R = void>(name: string, args: BlockArgs<HTMLSourceElement, M, R> | Render<HTMLSourceElement, M, R>): VBlock<HTMLSourceElement, M, R> { return VBlock.claim(name, HtmlTags.source, args instanceof Function ? { render: args } : args) }
export function Span<M = unknown, R = void>(name: string, args: BlockArgs<HTMLSpanElement, M, R> | Render<HTMLSpanElement, M, R>): VBlock<HTMLSpanElement, M, R> { return VBlock.claim(name, HtmlTags.span, args instanceof Function ? { render: args } : args) }
export function Strong<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.strong, args instanceof Function ? { render: args } : args) }
export function Style<M = unknown, R = void>(name: string, args: BlockArgs<HTMLStyleElement, M, R> | Render<HTMLStyleElement, M, R>): VBlock<HTMLStyleElement, M, R> { return VBlock.claim(name, HtmlTags.style, args instanceof Function ? { render: args } : args) }
export function Sub<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.sub, args instanceof Function ? { render: args } : args) }
export function Summary<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.summary, args instanceof Function ? { render: args } : args) }
export function Sup<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.sup, args instanceof Function ? { render: args } : args) }
export function Table<M = unknown, R = void>(name: string, args: BlockArgs<HTMLTableElement, M, R> | Render<HTMLTableElement, M, R>): VBlock<HTMLTableElement, M, R> { return VBlock.claim(name, HtmlTags.table, args instanceof Function ? { render: args } : args) }
export function Template<M = unknown, R = void>(name: string, args: BlockArgs<HTMLTemplateElement, M, R> | Render<HTMLTemplateElement, M, R>): VBlock<HTMLTemplateElement, M, R> { return VBlock.claim(name, HtmlTags.template, args instanceof Function ? { render: args } : args) }
export function TBody<M = unknown, R = void>(name: string, args: BlockArgs<HTMLTableSectionElement, M, R> | Render<HTMLTableSectionElement, M, R>): VBlock<HTMLTableSectionElement, M, R> { return VBlock.claim(name, HtmlTags.tbody, args instanceof Function ? { render: args } : args) }
export function TD<M = unknown, R = void>(name: string, args: BlockArgs<HTMLTableCellElement, M, R> | Render<HTMLTableCellElement, M, R>): VBlock<HTMLTableCellElement, M, R> { return VBlock.claim(name, HtmlTags.td, args instanceof Function ? { render: args } : args) }
export function TextArea<M = unknown, R = void>(name: string, args: BlockArgs<HTMLTextAreaElement, M, R> | Render<HTMLTextAreaElement, M, R>): VBlock<HTMLTextAreaElement, M, R> { return VBlock.claim(name, HtmlTags.textarea, args instanceof Function ? { render: args } : args) }
export function TFoot<M = unknown, R = void>(name: string, args: BlockArgs<HTMLTableSectionElement, M, R> | Render<HTMLTableSectionElement, M, R>): VBlock<HTMLTableSectionElement, M, R> { return VBlock.claim(name, HtmlTags.tfoot, args instanceof Function ? { render: args } : args) }
export function TH<M = unknown, R = void>(name: string, args: BlockArgs<HTMLTableCellElement, M, R> | Render<HTMLTableCellElement, M, R>): VBlock<HTMLTableCellElement, M, R> { return VBlock.claim(name, HtmlTags.th, args instanceof Function ? { render: args } : args) }
export function THead<M = unknown, R = void>(name: string, args: BlockArgs<HTMLTableSectionElement, M, R> | Render<HTMLTableSectionElement, M, R>): VBlock<HTMLTableSectionElement, M, R> { return VBlock.claim(name, HtmlTags.thead, args instanceof Function ? { render: args } : args) }
export function Time<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.time, args instanceof Function ? { render: args } : args) }
export function Title<M = unknown, R = void>(name: string, args: BlockArgs<HTMLTitleElement, M, R> | Render<HTMLTitleElement, M, R>): VBlock<HTMLTitleElement, M, R> { return VBlock.claim(name, HtmlTags.title, args instanceof Function ? { render: args } : args) }
export function TR<M = unknown, R = void>(name: string, args: BlockArgs<HTMLTableRowElement, M, R> | Render<HTMLTableRowElement, M, R>): VBlock<HTMLTableRowElement, M, R> { return VBlock.claim(name, HtmlTags.tr, args instanceof Function ? { render: args } : args) }
export function Track<M = unknown, R = void>(name: string, args: BlockArgs<HTMLTrackElement, M, R> | Render<HTMLTrackElement, M, R>): VBlock<HTMLTrackElement, M, R> { return VBlock.claim(name, HtmlTags.track, args instanceof Function ? { render: args } : args) }
export function U<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.u, args instanceof Function ? { render: args } : args) }
export function UL<M = unknown, R = void>(name: string, args: BlockArgs<HTMLUListElement, M, R> | Render<HTMLUListElement, M, R>): VBlock<HTMLUListElement, M, R> { return VBlock.claim(name, HtmlTags.ul, args instanceof Function ? { render: args } : args) }
export function Var<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.var, args instanceof Function ? { render: args } : args) }
export function Video<M = unknown, R = void>(name: string, args: BlockArgs<HTMLVideoElement, M, R> | Render<HTMLVideoElement, M, R>): VBlock<HTMLVideoElement, M, R> { return VBlock.claim(name, HtmlTags.video, args instanceof Function ? { render: args } : args) }
export function Wbr<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.wbr, args instanceof Function ? { render: args } : args) }

export function Svg<M = unknown, R = void>(name: string, args: BlockArgs<SVGSVGElement, M, R> | Render<SVGSVGElement, M, R>): VBlock<SVGSVGElement, M, R> { return VBlock.claim(name, SvgTags.svg, args instanceof Function ? { render: args } : args) }
export function SvgA<M = unknown, R = void>(name: string, args: BlockArgs<SVGAElement, M, R> | Render<SVGAElement, M, R>): VBlock<SVGAElement, M, R> { return VBlock.claim(name, SvgTags.a, args instanceof Function ? { render: args } : args) }
export function Animate<M = unknown, R = void>(name: string, args: BlockArgs<SVGAnimateElement, M, R> | Render<SVGAnimateElement, M, R>): VBlock<SVGAnimateElement, M, R> { return VBlock.claim(name, SvgTags.animate, args instanceof Function ? { render: args } : args) }
export function AnimateMotion<M = unknown, R = void>(name: string, args: BlockArgs<SVGAnimateMotionElement, M, R> | Render<SVGAnimateMotionElement, M, R>): VBlock<SVGAnimateMotionElement, M, R> { return VBlock.claim(name, SvgTags.animateMotion, args instanceof Function ? { render: args } : args) }
export function AnimateTransform<M = unknown, R = void>(name: string, args: BlockArgs<SVGAnimateTransformElement, M, R> | Render<SVGAnimateTransformElement, M, R>): VBlock<SVGAnimateTransformElement, M, R> { return VBlock.claim(name, SvgTags.animateTransform, args instanceof Function ? { render: args } : args) }
export function Circle<M = unknown, R = void>(name: string, args: BlockArgs<SVGCircleElement, M, R> | Render<SVGCircleElement, M, R>): VBlock<SVGCircleElement, M, R> { return VBlock.claim(name, SvgTags.circle, args instanceof Function ? { render: args } : args) }
export function ClipPath<M = unknown, R = void>(name: string, args: BlockArgs<SVGClipPathElement, M, R> | Render<SVGClipPathElement, M, R>): VBlock<SVGClipPathElement, M, R> { return VBlock.claim(name, SvgTags.clipPath, args instanceof Function ? { render: args } : args) }
export function Defs<M = unknown, R = void>(name: string, args: BlockArgs<SVGDefsElement, M, R> | Render<SVGDefsElement, M, R>): VBlock<SVGDefsElement, M, R> { return VBlock.claim(name, SvgTags.defs, args instanceof Function ? { render: args } : args) }
export function Desc<M = unknown, R = void>(name: string, args: BlockArgs<SVGDescElement, M, R> | Render<SVGDescElement, M, R>): VBlock<SVGDescElement, M, R> { return VBlock.claim(name, SvgTags.desc, args instanceof Function ? { render: args } : args) }
export function Ellipse<M = unknown, R = void>(name: string, args: BlockArgs<SVGEllipseElement, M, R> | Render<SVGEllipseElement, M, R>): VBlock<SVGEllipseElement, M, R> { return VBlock.claim(name, SvgTags.ellipse, args instanceof Function ? { render: args } : args) }
export function FeBlend<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEBlendElement, M, R> | Render<SVGFEBlendElement, M, R>): VBlock<SVGFEBlendElement, M, R> { return VBlock.claim(name, SvgTags.feBlend, args instanceof Function ? { render: args } : args) }
export function FeColorMatrix<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEColorMatrixElement, M, R> | Render<SVGFEColorMatrixElement, M, R>): VBlock<SVGFEColorMatrixElement, M, R> { return VBlock.claim(name, SvgTags.feColorMatrix, args instanceof Function ? { render: args } : args) }
export function FeComponentTransfer<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEComponentTransferElement, M, R> | Render<SVGFEComponentTransferElement, M, R>): VBlock<SVGFEComponentTransferElement, M, R> { return VBlock.claim(name, SvgTags.feComponentTransfer, args instanceof Function ? { render: args } : args) }
export function FeComposite<M = unknown, R = void>(name: string, args: BlockArgs<SVGFECompositeElement, M, R> | Render<SVGFECompositeElement, M, R>): VBlock<SVGFECompositeElement, M, R> { return VBlock.claim(name, SvgTags.feComposite, args instanceof Function ? { render: args } : args) }
export function FeConvolveMatrix<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEConvolveMatrixElement, M, R> | Render<SVGFEConvolveMatrixElement, M, R>): VBlock<SVGFEConvolveMatrixElement, M, R> { return VBlock.claim(name, SvgTags.feConvolveMatrix, args instanceof Function ? { render: args } : args) }
export function FeDiffuseLighting<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEDiffuseLightingElement, M, R> | Render<SVGFEDiffuseLightingElement, M, R>): VBlock<SVGFEDiffuseLightingElement, M, R> { return VBlock.claim(name, SvgTags.feDiffuseLighting, args instanceof Function ? { render: args } : args) }
export function FeDisplacementMap<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEDisplacementMapElement, M, R> | Render<SVGFEDisplacementMapElement, M, R>): VBlock<SVGFEDisplacementMapElement, M, R> { return VBlock.claim(name, SvgTags.feDisplacementMap, args instanceof Function ? { render: args } : args) }
export function FeDistantLight<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEDistantLightElement, M, R> | Render<SVGFEDistantLightElement, M, R>): VBlock<SVGFEDistantLightElement, M, R> { return VBlock.claim(name, SvgTags.feDistantLight, args instanceof Function ? { render: args } : args) }
export function FeDropShadow<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEDropShadowElement, M, R> | Render<SVGFEDropShadowElement, M, R>): VBlock<SVGFEDropShadowElement, M, R> { return VBlock.claim(name, SvgTags.feDropShadow, args instanceof Function ? { render: args } : args) }
export function FeFlood<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEFloodElement, M, R> | Render<SVGFEFloodElement, M, R>): VBlock<SVGFEFloodElement, M, R> { return VBlock.claim(name, SvgTags.feFlood, args instanceof Function ? { render: args } : args) }
export function FeFuncA<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEFuncAElement, M, R> | Render<SVGFEFuncAElement, M, R>): VBlock<SVGFEFuncAElement, M, R> { return VBlock.claim(name, SvgTags.feFuncA, args instanceof Function ? { render: args } : args) }
export function FeFuncB<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEFuncBElement, M, R> | Render<SVGFEFuncBElement, M, R>): VBlock<SVGFEFuncBElement, M, R> { return VBlock.claim(name, SvgTags.feFuncB, args instanceof Function ? { render: args } : args) }
export function FeFuncG<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEFuncGElement, M, R> | Render<SVGFEFuncGElement, M, R>): VBlock<SVGFEFuncGElement, M, R> { return VBlock.claim(name, SvgTags.feFuncG, args instanceof Function ? { render: args } : args) }
export function FeFuncR<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEFuncRElement, M, R> | Render<SVGFEFuncRElement, M, R>): VBlock<SVGFEFuncRElement, M, R> { return VBlock.claim(name, SvgTags.feFuncR, args instanceof Function ? { render: args } : args) }
export function FeGaussianBlur<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEGaussianBlurElement, M, R> | Render<SVGFEGaussianBlurElement, M, R>): VBlock<SVGFEGaussianBlurElement, M, R> { return VBlock.claim(name, SvgTags.feGaussianBlur, args instanceof Function ? { render: args } : args) }
export function FeImage<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEImageElement, M, R> | Render<SVGFEImageElement, M, R>): VBlock<SVGFEImageElement, M, R> { return VBlock.claim(name, SvgTags.feImage, args instanceof Function ? { render: args } : args) }
export function FeMerge<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEMergeElement, M, R> | Render<SVGFEMergeElement, M, R>): VBlock<SVGFEMergeElement, M, R> { return VBlock.claim(name, SvgTags.feMerge, args instanceof Function ? { render: args } : args) }
export function FeMergeNode<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEMergeNodeElement, M, R> | Render<SVGFEMergeNodeElement, M, R>): VBlock<SVGFEMergeNodeElement, M, R> { return VBlock.claim(name, SvgTags.feMergeNode, args instanceof Function ? { render: args } : args) }
export function FeMorphology<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEMorphologyElement, M, R> | Render<SVGFEMorphologyElement, M, R>): VBlock<SVGFEMorphologyElement, M, R> { return VBlock.claim(name, SvgTags.feMorphology, args instanceof Function ? { render: args } : args) }
export function FeOffset<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEOffsetElement, M, R> | Render<SVGFEOffsetElement, M, R>): VBlock<SVGFEOffsetElement, M, R> { return VBlock.claim(name, SvgTags.feOffset, args instanceof Function ? { render: args } : args) }
export function FePointLight<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEPointLightElement, M, R> | Render<SVGFEPointLightElement, M, R>): VBlock<SVGFEPointLightElement, M, R> { return VBlock.claim(name, SvgTags.fePointLight, args instanceof Function ? { render: args } : args) }
export function FeSpecularLighting<M = unknown, R = void>(name: string, args: BlockArgs<SVGFESpecularLightingElement, M, R> | Render<SVGFESpecularLightingElement, M, R>): VBlock<SVGFESpecularLightingElement, M, R> { return VBlock.claim(name, SvgTags.feSpecularLighting, args instanceof Function ? { render: args } : args) }
export function FeSpotLight<M = unknown, R = void>(name: string, args: BlockArgs<SVGFESpotLightElement, M, R> | Render<SVGFESpotLightElement, M, R>): VBlock<SVGFESpotLightElement, M, R> { return VBlock.claim(name, SvgTags.feSpotLight, args instanceof Function ? { render: args } : args) }
export function FeTile<M = unknown, R = void>(name: string, args: BlockArgs<SVGFETileElement, M, R> | Render<SVGFETileElement, M, R>): VBlock<SVGFETileElement, M, R> { return VBlock.claim(name, SvgTags.feTile, args instanceof Function ? { render: args } : args) }
export function FeTurbulence<M = unknown, R = void>(name: string, args: BlockArgs<SVGFETurbulenceElement, M, R> | Render<SVGFETurbulenceElement, M, R>): VBlock<SVGFETurbulenceElement, M, R> { return VBlock.claim(name, SvgTags.feTurbulence, args instanceof Function ? { render: args } : args) }
export function Filter<M = unknown, R = void>(name: string, args: BlockArgs<SVGFilterElement, M, R> | Render<SVGFilterElement, M, R>): VBlock<SVGFilterElement, M, R> { return VBlock.claim(name, SvgTags.filter, args instanceof Function ? { render: args } : args) }
export function ForeignObject<M = unknown, R = void>(name: string, args: BlockArgs<SVGForeignObjectElement, M, R> | Render<SVGForeignObjectElement, M, R>): VBlock<SVGForeignObjectElement, M, R> { return VBlock.claim(name, SvgTags.foreignObject, args instanceof Function ? { render: args } : args) }
export function G<M = unknown, R = void>(name: string, args: BlockArgs<SVGGElement, M, R> | Render<SVGGElement, M, R>): VBlock<SVGGElement, M, R> { return VBlock.claim(name, SvgTags.g, args instanceof Function ? { render: args } : args) }
export function SvgImage<M = unknown, R = void>(name: string, args: BlockArgs<SVGImageElement, M, R> | Render<SVGImageElement, M, R>): VBlock<SVGImageElement, M, R> { return VBlock.claim(name, SvgTags.image, args instanceof Function ? { render: args } : args) }
export function SvgLine<M = unknown, R = void>(name: string, args: BlockArgs<SVGLineElement, M, R> | Render<SVGLineElement, M, R>): VBlock<SVGLineElement, M, R> { return VBlock.claim(name, SvgTags.line, args instanceof Function ? { render: args } : args) }
export function LinearGradient<M = unknown, R = void>(name: string, args: BlockArgs<SVGLinearGradientElement, M, R> | Render<SVGLinearGradientElement, M, R>): VBlock<SVGLinearGradientElement, M, R> { return VBlock.claim(name, SvgTags.linearGradient, args instanceof Function ? { render: args } : args) }
export function Marker<M = unknown, R = void>(name: string, args: BlockArgs<SVGMarkerElement, M, R> | Render<SVGMarkerElement, M, R>): VBlock<SVGMarkerElement, M, R> { return VBlock.claim(name, SvgTags.marker, args instanceof Function ? { render: args } : args) }
export function Mask<M = unknown, R = void>(name: string, args: BlockArgs<SVGMaskElement, M, R> | Render<SVGMaskElement, M, R>): VBlock<SVGMaskElement, M, R> { return VBlock.claim(name, SvgTags.mask, args instanceof Function ? { render: args } : args) }
export function MetaData<M = unknown, R = void>(name: string, args: BlockArgs<SVGMetadataElement, M, R> | Render<SVGMetadataElement, M, R>): VBlock<SVGMetadataElement, M, R> { return VBlock.claim(name, SvgTags.metadata, args instanceof Function ? { render: args } : args) }
export function MPath<M = unknown, R = void>(name: string, args: BlockArgs<SVGElement, M, R> | Render<SVGElement, M, R>): VBlock<SVGElement, M, R> { return VBlock.claim(name, SvgTags.mpath, args instanceof Function ? { render: args } : args) }
export function Path<M = unknown, R = void>(name: string, args: BlockArgs<SVGPathElement, M, R> | Render<SVGPathElement, M, R>): VBlock<SVGPathElement, M, R> { return VBlock.claim(name, SvgTags.path, args instanceof Function ? { render: args } : args) }
export function Pattern<M = unknown, R = void>(name: string, args: BlockArgs<SVGPatternElement, M, R> | Render<SVGPatternElement, M, R>): VBlock<SVGPatternElement, M, R> { return VBlock.claim(name, SvgTags.pattern, args instanceof Function ? { render: args } : args) }
export function Polygon<M = unknown, R = void>(name: string, args: BlockArgs<SVGPolygonElement, M, R> | Render<SVGPolygonElement, M, R>): VBlock<SVGPolygonElement, M, R> { return VBlock.claim(name, SvgTags.polygon, args instanceof Function ? { render: args } : args) }
export function PolyLine<M = unknown, R = void>(name: string, args: BlockArgs<SVGPolylineElement, M, R> | Render<SVGPolylineElement, M, R>): VBlock<SVGPolylineElement, M, R> { return VBlock.claim(name, SvgTags.polyline, args instanceof Function ? { render: args } : args) }
export function RadialGradient<M = unknown, R = void>(name: string, args: BlockArgs<SVGRadialGradientElement, M, R> | Render<SVGRadialGradientElement, M, R>): VBlock<SVGRadialGradientElement, M, R> { return VBlock.claim(name, SvgTags.radialGradient, args instanceof Function ? { render: args } : args) }
export function Rect<M = unknown, R = void>(name: string, args: BlockArgs<SVGRectElement, M, R> | Render<SVGRectElement, M, R>): VBlock<SVGRectElement, M, R> { return VBlock.claim(name, SvgTags.rect, args instanceof Function ? { render: args } : args) }
export function Stop<M = unknown, R = void>(name: string, args: BlockArgs<SVGStopElement, M, R> | Render<SVGStopElement, M, R>): VBlock<SVGStopElement, M, R> { return VBlock.claim(name, SvgTags.stop, args instanceof Function ? { render: args } : args) }
export function SvgSwitch<M = unknown, R = void>(name: string, args: BlockArgs<SVGSwitchElement, M, R> | Render<SVGSwitchElement, M, R>): VBlock<SVGSwitchElement, M, R> { return VBlock.claim(name, SvgTags.switch, args instanceof Function ? { render: args } : args) }
export function Symbol<M = unknown, R = void>(name: string, args: BlockArgs<SVGSymbolElement, M, R> | Render<SVGSymbolElement, M, R>): VBlock<SVGSymbolElement, M, R> { return VBlock.claim(name, SvgTags.symbol, args instanceof Function ? { render: args } : args) }
export function Text<M = unknown, R = void>(name: string, args: BlockArgs<SVGTextElement, M, R> | Render<SVGTextElement, M, R>): VBlock<SVGTextElement, M, R> { return VBlock.claim(name, SvgTags.text, args instanceof Function ? { render: args } : args) }
export function TextPath<M = unknown, R = void>(name: string, args: BlockArgs<SVGTextPathElement, M, R> | Render<SVGTextPathElement, M, R>): VBlock<SVGTextPathElement, M, R> { return VBlock.claim(name, SvgTags.textPath, args instanceof Function ? { render: args } : args) }
export function TSpan<M = unknown, R = void>(name: string, args: BlockArgs<SVGTSpanElement, M, R> | Render<SVGTSpanElement, M, R>): VBlock<SVGTSpanElement, M, R> { return VBlock.claim(name, SvgTags.tspan, args instanceof Function ? { render: args } : args) }
export function Use<M = unknown, R = void>(name: string, args: BlockArgs<SVGUseElement, M, R> | Render<SVGUseElement, M, R>): VBlock<SVGUseElement, M, R> { return VBlock.claim(name, SvgTags.use, args instanceof Function ? { render: args } : args) }
export function View<M = unknown, R = void>(name: string, args: BlockArgs<SVGViewElement, M, R> | Render<SVGViewElement, M, R>): VBlock<SVGViewElement, M, R> { return VBlock.claim(name, SvgTags.view, args instanceof Function ? { render: args } : args) }

const HtmlTags = {
  a: new HtmlDriver<HTMLAnchorElement>("a", LayoutKind.Block),
  abbr: new HtmlDriver<HTMLElement>("abbr", LayoutKind.Block),
  address: new HtmlDriver<HTMLElement>("address", LayoutKind.Block),
  area: new HtmlDriver<HTMLAreaElement>("area", LayoutKind.Block),
  article: new HtmlDriver<HTMLElement>("article", LayoutKind.Block),
  aside: new HtmlDriver<HTMLElement>("aside", LayoutKind.Block),
  audio: new HtmlDriver<HTMLAudioElement>("audio", LayoutKind.Block),
  b: new HtmlDriver<HTMLElement>("b", LayoutKind.Block),
  base: new HtmlDriver<HTMLBaseElement>("base", LayoutKind.Block),
  bdi: new HtmlDriver<HTMLElement>("bdi", LayoutKind.Block),
  bdo: new HtmlDriver<HTMLElement>("bdo", LayoutKind.Block),
  big: new HtmlDriver<HTMLElement>("big", LayoutKind.Block),
  blockquote: new HtmlDriver<HTMLElement>("blockquote", LayoutKind.Block),
  body: new HtmlDriver<HTMLBodyElement>("body", LayoutKind.Block),
  br: new HtmlDriver<HTMLBRElement>("br", LayoutKind.Block),
  button: new HtmlDriver<HTMLButtonElement>("button", LayoutKind.Block),
  canvas: new HtmlDriver<HTMLCanvasElement>("canvas", LayoutKind.Block),
  caption: new HtmlDriver<HTMLTableCaptionElement>("caption", LayoutKind.Block),
  cite: new HtmlDriver<HTMLElement>("cite", LayoutKind.Block),
  code: new HtmlDriver<HTMLElement>("code", LayoutKind.Block),
  col: new HtmlDriver<HTMLTableColElement>("col", LayoutKind.Block),
  colgroup: new HtmlDriver<HTMLTableColElement>("colgroup", LayoutKind.Block),
  data: new HtmlDriver<HTMLDataElement>("data", LayoutKind.Block),
  datalist: new HtmlDriver<HTMLDataListElement>("datalist", LayoutKind.Block),
  dd: new HtmlDriver<HTMLElement>("dd", LayoutKind.Block),
  del: new HtmlDriver<HTMLElement>("del", LayoutKind.Block),
  details: new HtmlDriver<HTMLElement>("details", LayoutKind.Block),
  dfn: new HtmlDriver<HTMLElement>("dfn", LayoutKind.Block),
  div: new HtmlDriver<HTMLDivElement>("div", LayoutKind.Block),
  dl: new HtmlDriver<HTMLDListElement>("dl", LayoutKind.Block),
  dt: new HtmlDriver<HTMLElement>("dt", LayoutKind.Block),
  em: new HtmlDriver<HTMLElement>("em", LayoutKind.Block),
  embed: new HtmlDriver<HTMLEmbedElement>("embed", LayoutKind.Block),
  fieldset: new HtmlDriver<HTMLFieldSetElement>("fieldset", LayoutKind.Block),
  figcaption: new HtmlDriver<HTMLElement>("figcaption", LayoutKind.Block),
  figure: new HtmlDriver<HTMLElement>("figure", LayoutKind.Block),
  footer: new HtmlDriver<HTMLElement>("footer", LayoutKind.Block),
  form: new HtmlDriver<HTMLFormElement>("form", LayoutKind.Block),
  h1: new HtmlDriver<HTMLHeadingElement>("h1", LayoutKind.Block),
  h2: new HtmlDriver<HTMLHeadingElement>("h2", LayoutKind.Block),
  h3: new HtmlDriver<HTMLHeadingElement>("h3", LayoutKind.Block),
  h4: new HtmlDriver<HTMLHeadingElement>("h4", LayoutKind.Block),
  h5: new HtmlDriver<HTMLHeadingElement>("h5", LayoutKind.Block),
  h6: new HtmlDriver<HTMLHeadingElement>("h6", LayoutKind.Block),
  head: new HtmlDriver<HTMLHeadElement>("head", LayoutKind.Block),
  header: new HtmlDriver<HTMLElement>("header", LayoutKind.Block),
  hgroup: new HtmlDriver<HTMLElement>("hgroup", LayoutKind.Block),
  hr: new HtmlDriver<HTMLHRElement>("hr", LayoutKind.Block),
  html: new HtmlDriver<HTMLHtmlElement>("html", LayoutKind.Block),
  i: new HtmlDriver<HTMLElement>("i", LayoutKind.Block),
  iframe: new HtmlDriver<HTMLIFrameElement>("iframe", LayoutKind.Block),
  img: new HtmlDriver<HTMLImageElement>("img", LayoutKind.Block),
  input: new HtmlDriver<HTMLInputElement>("input", LayoutKind.Block),
  ins: new HtmlDriver<HTMLModElement>("ins", LayoutKind.Block),
  kbd: new HtmlDriver<HTMLElement>("kbd", LayoutKind.Block),
  keygen: new HtmlDriver<HTMLElement>("keygen", LayoutKind.Block),
  label: new HtmlDriver<HTMLLabelElement>("label", LayoutKind.Block),
  legend: new HtmlDriver<HTMLLegendElement>("legend", LayoutKind.Block),
  li: new HtmlDriver<HTMLLIElement>("li", LayoutKind.Block),
  link: new HtmlDriver<HTMLLinkElement>("link", LayoutKind.Block),
  main: new HtmlDriver<HTMLElement>("main", LayoutKind.Block),
  map: new HtmlDriver<HTMLMapElement>("map", LayoutKind.Block),
  mark: new HtmlDriver<HTMLElement>("mark", LayoutKind.Block),
  menu: new HtmlDriver<HTMLElement>("menu", LayoutKind.Block),
  menuitem: new HtmlDriver<HTMLElement>("menuitem", LayoutKind.Block),
  meta: new HtmlDriver<HTMLMetaElement>("meta", LayoutKind.Block),
  meter: new HtmlDriver<HTMLElement>("meter", LayoutKind.Block),
  nav: new HtmlDriver<HTMLElement>("nav", LayoutKind.Block),
  noindex: new HtmlDriver<HTMLElement>("noindex", LayoutKind.Block),
  noscript: new HtmlDriver<HTMLElement>("noscript", LayoutKind.Block),
  object: new HtmlDriver<HTMLObjectElement>("object", LayoutKind.Block),
  ol: new HtmlDriver<HTMLOListElement>("ol", LayoutKind.Block),
  optgroup: new HtmlDriver<HTMLOptGroupElement>("optgroup", LayoutKind.Block),
  option: new HtmlDriver<HTMLOptionElement>("option", LayoutKind.Block),
  output: new HtmlDriver<HTMLElement>("output", LayoutKind.Block),
  p: new HtmlDriver<HTMLParagraphElement>("p", LayoutKind.Block),
  param: new HtmlDriver<HTMLElement>("param", LayoutKind.Block),
  picture: new HtmlDriver<HTMLElement>("picture", LayoutKind.Block),
  pre: new HtmlDriver<HTMLPreElement>("pre", LayoutKind.Block),
  progress: new HtmlDriver<HTMLProgressElement>("progress", LayoutKind.Block),
  q: new HtmlDriver<HTMLQuoteElement>("q", LayoutKind.Block),
  rp: new HtmlDriver<HTMLElement>("rp", LayoutKind.Block),
  rt: new HtmlDriver<HTMLElement>("rt", LayoutKind.Block),
  ruby: new HtmlDriver<HTMLElement>("ruby", LayoutKind.Block),
  s: new HtmlDriver<HTMLElement>("s", LayoutKind.Block),
  samp: new HtmlDriver<HTMLElement>("samp", LayoutKind.Block),
  script: new HtmlDriver<HTMLScriptElement>("script", LayoutKind.Block),
  section: new HtmlDriver<HTMLElement>("section", LayoutKind.Block),
  select: new HtmlDriver<HTMLSelectElement>("select", LayoutKind.Block),
  small: new HtmlDriver<HTMLElement>("small", LayoutKind.Block),
  source: new HtmlDriver<HTMLSourceElement>("source", LayoutKind.Block),
  span: new HtmlDriver<HTMLSpanElement>("span", LayoutKind.Block),
  strong: new HtmlDriver<HTMLElement>("strong", LayoutKind.Block),
  style: new HtmlDriver<HTMLStyleElement>("style", LayoutKind.Block),
  sub: new HtmlDriver<HTMLElement>("sub", LayoutKind.Block),
  summary: new HtmlDriver<HTMLElement>("summary", LayoutKind.Block),
  sup: new HtmlDriver<HTMLElement>("sup", LayoutKind.Block),
  table: new HtmlDriver<HTMLTableElement>("table", LayoutKind.Block),
  template: new HtmlDriver<HTMLTemplateElement>("template", LayoutKind.Block),
  tbody: new HtmlDriver<HTMLTableSectionElement>("tbody", LayoutKind.Block),
  td: new HtmlDriver<HTMLTableCellElement>("td", LayoutKind.Block),
  textarea: new HtmlDriver<HTMLTextAreaElement>("textarea", LayoutKind.Block),
  tfoot: new HtmlDriver<HTMLTableSectionElement>("tfoot", LayoutKind.Block),
  th: new HtmlDriver<HTMLTableCellElement>("th", LayoutKind.Block),
  thead: new HtmlDriver<HTMLTableSectionElement>("thead", LayoutKind.Block),
  time: new HtmlDriver<HTMLElement>("time", LayoutKind.Block),
  title: new HtmlDriver<HTMLTitleElement>("title", LayoutKind.Block),
  tr: new HtmlDriver<HTMLTableRowElement>("tr", LayoutKind.Block),
  track: new HtmlDriver<HTMLTrackElement>("track", LayoutKind.Block),
  u: new HtmlDriver<HTMLElement>("u", LayoutKind.Block),
  ul: new HtmlDriver<HTMLUListElement>("ul", LayoutKind.Block),
  var: new HtmlDriver<HTMLElement>("var", LayoutKind.Block),
  video: new HtmlDriver<HTMLVideoElement>("video", LayoutKind.Block),
  wbr: new HtmlDriver<HTMLElement>("wbr", LayoutKind.Block),
  // webview: new HtmlNodeFactory<HTMLWebViewElement>('webview', LayoutKind.Block),
}

const SvgTags = {
  svg: new SvgDriver<SVGSVGElement>("svg", LayoutKind.Block),
  a: new SvgDriver<SVGAElement>("a", LayoutKind.Block),
  animate: new SvgDriver<SVGAnimateElement>("animate", LayoutKind.Block),
  animateMotion: new SvgDriver<SVGAnimateMotionElement>("animateMotion", LayoutKind.Block),
  animateTransform: new SvgDriver<SVGAnimateTransformElement>("animateTransform", LayoutKind.Block),
  circle: new SvgDriver<SVGCircleElement>("circle", LayoutKind.Block),
  clipPath: new SvgDriver<SVGClipPathElement>("clipPath", LayoutKind.Block),
  defs: new SvgDriver<SVGDefsElement>("defs", LayoutKind.Block),
  desc: new SvgDriver<SVGDescElement>("desc", LayoutKind.Block),
  ellipse: new SvgDriver<SVGEllipseElement>("ellipse", LayoutKind.Block),
  feBlend: new SvgDriver<SVGFEBlendElement>("feBlend", LayoutKind.Block),
  feColorMatrix: new SvgDriver<SVGFEColorMatrixElement>("feColorMatrix", LayoutKind.Block),
  feComponentTransfer: new SvgDriver<SVGFEComponentTransferElement>("feComponentTransfer", LayoutKind.Block),
  feComposite: new SvgDriver<SVGFECompositeElement>("feComposite", LayoutKind.Block),
  feConvolveMatrix: new SvgDriver<SVGFEConvolveMatrixElement>("feConvolveMatrix", LayoutKind.Block),
  feDiffuseLighting: new SvgDriver<SVGFEDiffuseLightingElement>("feDiffuseLighting", LayoutKind.Block),
  feDisplacementMap: new SvgDriver<SVGFEDisplacementMapElement>("feDisplacementMap", LayoutKind.Block),
  feDistantLight: new SvgDriver<SVGFEDistantLightElement>("feDistantLight", LayoutKind.Block),
  feDropShadow: new SvgDriver<SVGFEDropShadowElement>("feDropShadow", LayoutKind.Block),
  feFlood: new SvgDriver<SVGFEFloodElement>("feFlood", LayoutKind.Block),
  feFuncA: new SvgDriver<SVGFEFuncAElement>("feFuncA", LayoutKind.Block),
  feFuncB: new SvgDriver<SVGFEFuncBElement>("feFuncB", LayoutKind.Block),
  feFuncG: new SvgDriver<SVGFEFuncGElement>("feFuncG", LayoutKind.Block),
  feFuncR: new SvgDriver<SVGFEFuncRElement>("feFuncR", LayoutKind.Block),
  feGaussianBlur: new SvgDriver<SVGFEGaussianBlurElement>("feGaussianBlur", LayoutKind.Block),
  feImage: new SvgDriver<SVGFEImageElement>("feImage", LayoutKind.Block),
  feMerge: new SvgDriver<SVGFEMergeElement>("feMerge", LayoutKind.Block),
  feMergeNode: new SvgDriver<SVGFEMergeNodeElement>("feMergeNode", LayoutKind.Block),
  feMorphology: new SvgDriver<SVGFEMorphologyElement>("feMorphology", LayoutKind.Block),
  feOffset: new SvgDriver<SVGFEOffsetElement>("feOffset", LayoutKind.Block),
  fePointLight: new SvgDriver<SVGFEPointLightElement>("fePointLight", LayoutKind.Block),
  feSpecularLighting: new SvgDriver<SVGFESpecularLightingElement>("feSpecularLighting", LayoutKind.Block),
  feSpotLight: new SvgDriver<SVGFESpotLightElement>("feSpotLight", LayoutKind.Block),
  feTile: new SvgDriver<SVGFETileElement>("feTile", LayoutKind.Block),
  feTurbulence: new SvgDriver<SVGFETurbulenceElement>("feTurbulence", LayoutKind.Block),
  filter: new SvgDriver<SVGFilterElement>("filter", LayoutKind.Block),
  foreignObject: new SvgDriver<SVGForeignObjectElement>("foreignObject", LayoutKind.Block),
  g: new SvgDriver<SVGGElement>("g", LayoutKind.Block),
  image: new SvgDriver<SVGImageElement>("image", LayoutKind.Block),
  line: new SvgDriver<SVGLineElement>("line", LayoutKind.Block),
  linearGradient: new SvgDriver<SVGLinearGradientElement>("linearGradient", LayoutKind.Block),
  marker: new SvgDriver<SVGMarkerElement>("marker", LayoutKind.Block),
  mask: new SvgDriver<SVGMaskElement>("mask", LayoutKind.Block),
  metadata: new SvgDriver<SVGMetadataElement>("metadata", LayoutKind.Block),
  mpath: new SvgDriver<SVGElement>("mpath", LayoutKind.Block),
  path: new SvgDriver<SVGPathElement>("path", LayoutKind.Block),
  pattern: new SvgDriver<SVGPatternElement>("pattern", LayoutKind.Block),
  polygon: new SvgDriver<SVGPolygonElement>("polygon", LayoutKind.Block),
  polyline: new SvgDriver<SVGPolylineElement>("polyline", LayoutKind.Block),
  radialGradient: new SvgDriver<SVGRadialGradientElement>("radialGradient", LayoutKind.Block),
  rect: new SvgDriver<SVGRectElement>("rect", LayoutKind.Block),
  stop: new SvgDriver<SVGStopElement>("stop", LayoutKind.Block),
  switch: new SvgDriver<SVGSwitchElement>("switch", LayoutKind.Block),
  symbol: new SvgDriver<SVGSymbolElement>("symbol", LayoutKind.Block),
  text: new SvgDriver<SVGTextElement>("text", LayoutKind.Block),
  textPath: new SvgDriver<SVGTextPathElement>("textPath", LayoutKind.Block),
  tspan: new SvgDriver<SVGTSpanElement>("tspan", LayoutKind.Block),
  use: new SvgDriver<SVGUseElement>("use", LayoutKind.Block),
  view: new SvgDriver<SVGViewElement>("view", LayoutKind.Block),
}
