// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { VBlock, Render, StaticDriver, LayoutKind, BlockVmt } from "../core/api"
import { HtmlDriver, SvgDriver } from "./HtmlDriver"

export function HtmlBody(name: string, vmt: BlockVmt<HTMLElement>): VBlock<HTMLElement> {
  const driver = new StaticDriver(global.document.body, name, LayoutKind.Block)
  return VBlock.claim(name, driver, vmt)
}

export function A<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLAnchorElement, M, R> | Render<HTMLAnchorElement, M, R>): VBlock<HTMLAnchorElement, M, R> { return VBlock.claim(name, HtmlTags.a, vmt instanceof Function ? { render: vmt } : vmt) }
export function Abbr<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.abbr, vmt instanceof Function ? { render: vmt } : vmt) }
export function Address<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.address, vmt instanceof Function ? { render: vmt } : vmt) }
export function Area<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLAreaElement, M, R> | Render<HTMLAreaElement, M, R>): VBlock<HTMLAreaElement, M, R> { return VBlock.claim(name, HtmlTags.area, vmt instanceof Function ? { render: vmt } : vmt) }
export function Article<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.article, vmt instanceof Function ? { render: vmt } : vmt) }
export function Aside<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.aside, vmt instanceof Function ? { render: vmt } : vmt) }
export function Audio<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLAudioElement, M, R> | Render<HTMLAudioElement, M, R>): VBlock<HTMLAudioElement, M, R> { return VBlock.claim(name, HtmlTags.audio, vmt instanceof Function ? { render: vmt } : vmt) }
export function B<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.b, vmt instanceof Function ? { render: vmt } : vmt) }
export function Base<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLBaseElement, M, R> | Render<HTMLBaseElement, M, R>): VBlock<HTMLBaseElement, M, R> { return VBlock.claim(name, HtmlTags.base, vmt instanceof Function ? { render: vmt } : vmt) }
export function Bdi<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.bdi, vmt instanceof Function ? { render: vmt } : vmt) }
export function Bdo<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.bdo, vmt instanceof Function ? { render: vmt } : vmt) }
export function Big<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.big, vmt instanceof Function ? { render: vmt } : vmt) }
export function BlockQuote<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.blockquote, vmt instanceof Function ? { render: vmt } : vmt) }
export function Body<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLBodyElement, M, R> | Render<HTMLBodyElement, M, R>): VBlock<HTMLBodyElement, M, R> { return VBlock.claim(name, HtmlTags.body, vmt instanceof Function ? { render: vmt } : vmt) }
export function BR<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLBRElement, M, R> | Render<HTMLBRElement, M, R>): VBlock<HTMLBRElement, M, R> { return VBlock.claim(name, HtmlTags.br, vmt instanceof Function ? { render: vmt } : vmt) }
export function Button<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLButtonElement, M, R> | Render<HTMLButtonElement, M, R>): VBlock<HTMLButtonElement, M, R> { return VBlock.claim(name, HtmlTags.button, vmt instanceof Function ? { render: vmt } : vmt) }
export function Canvas<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLCanvasElement, M, R> | Render<HTMLCanvasElement, M, R>): VBlock<HTMLCanvasElement, M, R> { return VBlock.claim(name, HtmlTags.canvas, vmt instanceof Function ? { render: vmt } : vmt) }
export function Caption<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLTableCaptionElement, M, R> | Render<HTMLTableCaptionElement, M, R>): VBlock<HTMLTableCaptionElement, M, R> { return VBlock.claim(name, HtmlTags.caption, vmt instanceof Function ? { render: vmt } : vmt) }
export function Cite<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.cite, vmt instanceof Function ? { render: vmt } : vmt) }
export function Code<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.code, vmt instanceof Function ? { render: vmt } : vmt) }
export function Col<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLTableColElement, M, R> | Render<HTMLTableColElement, M, R>): VBlock<HTMLTableColElement, M, R> { return VBlock.claim(name, HtmlTags.col, vmt instanceof Function ? { render: vmt } : vmt) }
export function ColGroup<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLTableColElement, M, R> | Render<HTMLTableColElement, M, R>): VBlock<HTMLTableColElement, M, R> { return VBlock.claim(name, HtmlTags.colgroup, vmt instanceof Function ? { render: vmt } : vmt) }
export function Data<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLDataElement, M, R> | Render<HTMLDataElement, M, R>): VBlock<HTMLDataElement, M, R> { return VBlock.claim(name, HtmlTags.data, vmt instanceof Function ? { render: vmt } : vmt) }
export function DataList<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLDataListElement, M, R> | Render<HTMLDataListElement, M, R>): VBlock<HTMLDataListElement, M, R> { return VBlock.claim(name, HtmlTags.datalist, vmt instanceof Function ? { render: vmt } : vmt) }
export function DD<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.dd, vmt instanceof Function ? { render: vmt } : vmt) }
export function Del<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.del, vmt instanceof Function ? { render: vmt } : vmt) }
export function Details<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.details, vmt instanceof Function ? { render: vmt } : vmt) }
export function Dfn<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.dfn, vmt instanceof Function ? { render: vmt } : vmt) }
export function Div<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLDivElement, M, R> | Render<HTMLDivElement, M, R>): VBlock<HTMLDivElement, M, R> { return VBlock.claim(name, HtmlTags.div, vmt instanceof Function ? { render: vmt } : vmt) }
export function DL<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLDListElement, M, R> | Render<HTMLDListElement, M, R>): VBlock<HTMLDListElement, M, R> { return VBlock.claim(name, HtmlTags.dl, vmt instanceof Function ? { render: vmt } : vmt) }
export function DT<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.dt, vmt instanceof Function ? { render: vmt } : vmt) }
export function EM<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.em, vmt instanceof Function ? { render: vmt } : vmt) }
export function Embed<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLEmbedElement, M, R> | Render<HTMLEmbedElement, M, R>): VBlock<HTMLEmbedElement, M, R> { return VBlock.claim(name, HtmlTags.embed, vmt instanceof Function ? { render: vmt } : vmt) }
export function FieldSet<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLFieldSetElement, M, R> | Render<HTMLFieldSetElement, M, R>): VBlock<HTMLFieldSetElement, M, R> { return VBlock.claim(name, HtmlTags.fieldset, vmt instanceof Function ? { render: vmt } : vmt) }
export function FigCaption<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.figcaption, vmt instanceof Function ? { render: vmt } : vmt) }
export function Figure<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.figure, vmt instanceof Function ? { render: vmt } : vmt) }
export function Footer<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.footer, vmt instanceof Function ? { render: vmt } : vmt) }
export function Form<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLFormElement, M, R> | Render<HTMLFormElement, M, R>): VBlock<HTMLFormElement, M, R> { return VBlock.claim(name, HtmlTags.form, vmt instanceof Function ? { render: vmt } : vmt) }
export function H1<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLHeadingElement, M, R> | Render<HTMLHeadingElement, M, R>): VBlock<HTMLHeadingElement, M, R> { return VBlock.claim(name, HtmlTags.h1, vmt instanceof Function ? { render: vmt } : vmt) }
export function H2<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLHeadingElement, M, R> | Render<HTMLHeadingElement, M, R>): VBlock<HTMLHeadingElement, M, R> { return VBlock.claim(name, HtmlTags.h2, vmt instanceof Function ? { render: vmt } : vmt) }
export function H3<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLHeadingElement, M, R> | Render<HTMLHeadingElement, M, R>): VBlock<HTMLHeadingElement, M, R> { return VBlock.claim(name, HtmlTags.h3, vmt instanceof Function ? { render: vmt } : vmt) }
export function H4<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLHeadingElement, M, R> | Render<HTMLHeadingElement, M, R>): VBlock<HTMLHeadingElement, M, R> { return VBlock.claim(name, HtmlTags.h4, vmt instanceof Function ? { render: vmt } : vmt) }
export function H5<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLHeadingElement, M, R> | Render<HTMLHeadingElement, M, R>): VBlock<HTMLHeadingElement, M, R> { return VBlock.claim(name, HtmlTags.h5, vmt instanceof Function ? { render: vmt } : vmt) }
export function H6<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLHeadingElement, M, R> | Render<HTMLHeadingElement, M, R>): VBlock<HTMLHeadingElement, M, R> { return VBlock.claim(name, HtmlTags.h6, vmt instanceof Function ? { render: vmt } : vmt) }
export function Head<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLHeadElement, M, R> | Render<HTMLHeadElement, M, R>): VBlock<HTMLHeadElement, M, R> { return VBlock.claim(name, HtmlTags.head, vmt instanceof Function ? { render: vmt } : vmt) }
export function Header<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.header, vmt instanceof Function ? { render: vmt } : vmt) }
export function HGroup<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.hgroup, vmt instanceof Function ? { render: vmt } : vmt) }
export function HR<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLHRElement, M, R> | Render<HTMLHRElement, M, R>): VBlock<HTMLHRElement, M, R> { return VBlock.claim(name, HtmlTags.hr, vmt instanceof Function ? { render: vmt } : vmt) }
export function Html<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLHtmlElement, M, R> | Render<HTMLHtmlElement, M, R>): VBlock<HTMLHtmlElement, M, R> { return VBlock.claim(name, HtmlTags.html, vmt instanceof Function ? { render: vmt } : vmt) }
export function I<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.i, vmt instanceof Function ? { render: vmt } : vmt) }
export function IFrame<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLIFrameElement, M, R> | Render<HTMLIFrameElement, M, R>): VBlock<HTMLIFrameElement, M, R> { return VBlock.claim(name, HtmlTags.iframe, vmt instanceof Function ? { render: vmt } : vmt) }
export function Img<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLImageElement, M, R> | Render<HTMLImageElement, M, R>): VBlock<HTMLImageElement, M, R> { return VBlock.claim(name, HtmlTags.img, vmt instanceof Function ? { render: vmt } : vmt) }
export function Input<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLInputElement, M, R> | Render<HTMLInputElement, M, R>): VBlock<HTMLInputElement, M, R> { return VBlock.claim(name, HtmlTags.input, vmt instanceof Function ? { render: vmt } : vmt) }
export function Ins<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLModElement, M, R> | Render<HTMLModElement, M, R>): VBlock<HTMLModElement, M, R> { return VBlock.claim(name, HtmlTags.ins, vmt instanceof Function ? { render: vmt } : vmt) }
export function Kbd<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.kbd, vmt instanceof Function ? { render: vmt } : vmt) }
export function KeyGen<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.keygen, vmt instanceof Function ? { render: vmt } : vmt) }
export function Label<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLLabelElement, M, R> | Render<HTMLLabelElement, M, R>): VBlock<HTMLLabelElement, M, R> { return VBlock.claim(name, HtmlTags.label, vmt instanceof Function ? { render: vmt } : vmt) }
export function Legend<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLLegendElement, M, R> | Render<HTMLLegendElement, M, R>): VBlock<HTMLLegendElement, M, R> { return VBlock.claim(name, HtmlTags.legend, vmt instanceof Function ? { render: vmt } : vmt) }
export function LI<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLLIElement, M, R> | Render<HTMLLIElement, M, R>): VBlock<HTMLLIElement, M, R> { return VBlock.claim(name, HtmlTags.li, vmt instanceof Function ? { render: vmt } : vmt) }
export function Link<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLLinkElement, M, R> | Render<HTMLLinkElement, M, R>): VBlock<HTMLLinkElement, M, R> { return VBlock.claim(name, HtmlTags.link, vmt instanceof Function ? { render: vmt } : vmt) }
export function Main<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.main, vmt instanceof Function ? { render: vmt } : vmt) }
export function Map<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLMapElement, M, R> | Render<HTMLMapElement, M, R>): VBlock<HTMLMapElement, M, R> { return VBlock.claim(name, HtmlTags.map, vmt instanceof Function ? { render: vmt } : vmt) }
export function Mark<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.mark, vmt instanceof Function ? { render: vmt } : vmt) }
export function Menu<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.menu, vmt instanceof Function ? { render: vmt } : vmt) }
export function MenuItem<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.menuitem, vmt instanceof Function ? { render: vmt } : vmt) }
export function Meta<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLMetaElement, M, R> | Render<HTMLMetaElement, M, R>, renderer: Render<HTMLMetaElement, M, R>): VBlock<HTMLMetaElement, M, R> { return VBlock.claim(name, HtmlTags.meta, vmt instanceof Function ? { render: vmt } : vmt) }
export function Meter<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.meter, vmt instanceof Function ? { render: vmt } : vmt) }
export function Nav<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.nav, vmt instanceof Function ? { render: vmt } : vmt) }
export function NoIndex<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.noindex, vmt instanceof Function ? { render: vmt } : vmt) }
export function NoScript<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.noscript, vmt instanceof Function ? { render: vmt } : vmt) }
export function Obj<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLObjectElement, M, R> | Render<HTMLObjectElement, M, R>): VBlock<HTMLObjectElement, M, R> { return VBlock.claim(name, HtmlTags.object, vmt instanceof Function ? { render: vmt } : vmt) }
export function OL<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLOListElement, M, R> | Render<HTMLOListElement, M, R>): VBlock<HTMLOListElement, M, R> { return VBlock.claim(name, HtmlTags.ol, vmt instanceof Function ? { render: vmt } : vmt) }
export function OptGroup<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLOptGroupElement, M, R> | Render<HTMLOptGroupElement, M, R>): VBlock<HTMLOptGroupElement, M, R> { return VBlock.claim(name, HtmlTags.optgroup, vmt instanceof Function ? { render: vmt } : vmt) }
export function Option<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLOptionElement, M, R> | Render<HTMLOptionElement, M, R>): VBlock<HTMLOptionElement, M, R> { return VBlock.claim(name, HtmlTags.option, vmt instanceof Function ? { render: vmt } : vmt) }
export function Output<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.output, vmt instanceof Function ? { render: vmt } : vmt) }
export function P<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLParagraphElement, M, R> | Render<HTMLParagraphElement, M, R>): VBlock<HTMLParagraphElement, M, R> { return VBlock.claim(name, HtmlTags.p, vmt instanceof Function ? { render: vmt } : vmt) }
export function Param<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.param, vmt instanceof Function ? { render: vmt } : vmt) }
export function Picture<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.picture, vmt instanceof Function ? { render: vmt } : vmt) }
export function Pre<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLPreElement, M, R> | Render<HTMLPreElement, M, R>): VBlock<HTMLPreElement, M, R> { return VBlock.claim(name, HtmlTags.pre, vmt instanceof Function ? { render: vmt } : vmt) }
export function Progress<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLProgressElement, M, R> | Render<HTMLProgressElement, M, R>): VBlock<HTMLProgressElement, M, R> { return VBlock.claim(name, HtmlTags.progress, vmt instanceof Function ? { render: vmt } : vmt) }
export function Q<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLQuoteElement, M, R> | Render<HTMLQuoteElement, M, R>): VBlock<HTMLQuoteElement, M, R> { return VBlock.claim(name, HtmlTags.q, vmt instanceof Function ? { render: vmt } : vmt) }
export function RP<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.rp, vmt instanceof Function ? { render: vmt } : vmt) }
export function RT<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.rt, vmt instanceof Function ? { render: vmt } : vmt) }
export function Ruby<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.ruby, vmt instanceof Function ? { render: vmt } : vmt) }
export function S<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.s, vmt instanceof Function ? { render: vmt } : vmt) }
export function Samp<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.samp, vmt instanceof Function ? { render: vmt } : vmt) }
export function Script<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLScriptElement, M, R> | Render<HTMLScriptElement, M, R>): VBlock<HTMLScriptElement, M, R> { return VBlock.claim(name, HtmlTags.script, vmt instanceof Function ? { render: vmt } : vmt) }
export function Section<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.section, vmt instanceof Function ? { render: vmt } : vmt) }
export function Select<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLSelectElement, M, R> | Render<HTMLSelectElement, M, R>): VBlock<HTMLSelectElement, M, R> { return VBlock.claim(name, HtmlTags.select, vmt instanceof Function ? { render: vmt } : vmt) }
export function Small<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.small, vmt instanceof Function ? { render: vmt } : vmt) }
export function Source<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLSourceElement, M, R> | Render<HTMLSourceElement, M, R>): VBlock<HTMLSourceElement, M, R> { return VBlock.claim(name, HtmlTags.source, vmt instanceof Function ? { render: vmt } : vmt) }
export function Span<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLSpanElement, M, R> | Render<HTMLSpanElement, M, R>): VBlock<HTMLSpanElement, M, R> { return VBlock.claim(name, HtmlTags.span, vmt instanceof Function ? { render: vmt } : vmt) }
export function Strong<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.strong, vmt instanceof Function ? { render: vmt } : vmt) }
export function Style<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLStyleElement, M, R> | Render<HTMLStyleElement, M, R>): VBlock<HTMLStyleElement, M, R> { return VBlock.claim(name, HtmlTags.style, vmt instanceof Function ? { render: vmt } : vmt) }
export function Sub<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.sub, vmt instanceof Function ? { render: vmt } : vmt) }
export function Summary<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.summary, vmt instanceof Function ? { render: vmt } : vmt) }
export function Sup<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.sup, vmt instanceof Function ? { render: vmt } : vmt) }
export function Table<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLTableElement, M, R> | Render<HTMLTableElement, M, R>): VBlock<HTMLTableElement, M, R> { return VBlock.claim(name, HtmlTags.table, vmt instanceof Function ? { render: vmt } : vmt) }
export function Template<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLTemplateElement, M, R> | Render<HTMLTemplateElement, M, R>): VBlock<HTMLTemplateElement, M, R> { return VBlock.claim(name, HtmlTags.template, vmt instanceof Function ? { render: vmt } : vmt) }
export function TBody<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLTableSectionElement, M, R> | Render<HTMLTableSectionElement, M, R>): VBlock<HTMLTableSectionElement, M, R> { return VBlock.claim(name, HtmlTags.tbody, vmt instanceof Function ? { render: vmt } : vmt) }
export function TD<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLTableCellElement, M, R> | Render<HTMLTableCellElement, M, R>): VBlock<HTMLTableCellElement, M, R> { return VBlock.claim(name, HtmlTags.td, vmt instanceof Function ? { render: vmt } : vmt) }
export function TextArea<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLTextAreaElement, M, R> | Render<HTMLTextAreaElement, M, R>): VBlock<HTMLTextAreaElement, M, R> { return VBlock.claim(name, HtmlTags.textarea, vmt instanceof Function ? { render: vmt } : vmt) }
export function TFoot<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLTableSectionElement, M, R> | Render<HTMLTableSectionElement, M, R>): VBlock<HTMLTableSectionElement, M, R> { return VBlock.claim(name, HtmlTags.tfoot, vmt instanceof Function ? { render: vmt } : vmt) }
export function TH<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLTableCellElement, M, R> | Render<HTMLTableCellElement, M, R>): VBlock<HTMLTableCellElement, M, R> { return VBlock.claim(name, HtmlTags.th, vmt instanceof Function ? { render: vmt } : vmt) }
export function THead<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLTableSectionElement, M, R> | Render<HTMLTableSectionElement, M, R>): VBlock<HTMLTableSectionElement, M, R> { return VBlock.claim(name, HtmlTags.thead, vmt instanceof Function ? { render: vmt } : vmt) }
export function Time<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.time, vmt instanceof Function ? { render: vmt } : vmt) }
export function Title<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLTitleElement, M, R> | Render<HTMLTitleElement, M, R>): VBlock<HTMLTitleElement, M, R> { return VBlock.claim(name, HtmlTags.title, vmt instanceof Function ? { render: vmt } : vmt) }
export function TR<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLTableRowElement, M, R> | Render<HTMLTableRowElement, M, R>): VBlock<HTMLTableRowElement, M, R> { return VBlock.claim(name, HtmlTags.tr, vmt instanceof Function ? { render: vmt } : vmt) }
export function Track<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLTrackElement, M, R> | Render<HTMLTrackElement, M, R>): VBlock<HTMLTrackElement, M, R> { return VBlock.claim(name, HtmlTags.track, vmt instanceof Function ? { render: vmt } : vmt) }
export function U<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.u, vmt instanceof Function ? { render: vmt } : vmt) }
export function UL<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLUListElement, M, R> | Render<HTMLUListElement, M, R>): VBlock<HTMLUListElement, M, R> { return VBlock.claim(name, HtmlTags.ul, vmt instanceof Function ? { render: vmt } : vmt) }
export function Var<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.var, vmt instanceof Function ? { render: vmt } : vmt) }
export function Video<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLVideoElement, M, R> | Render<HTMLVideoElement, M, R>): VBlock<HTMLVideoElement, M, R> { return VBlock.claim(name, HtmlTags.video, vmt instanceof Function ? { render: vmt } : vmt) }
export function Wbr<M = unknown, R = void>(name: string, vmt: BlockVmt<HTMLElement, M, R> | Render<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, HtmlTags.wbr, vmt instanceof Function ? { render: vmt } : vmt) }

export function Svg<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGSVGElement, M, R> | Render<SVGSVGElement, M, R>): VBlock<SVGSVGElement, M, R> { return VBlock.claim(name, SvgTags.svg, vmt instanceof Function ? { render: vmt } : vmt) }
export function SvgA<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGAElement, M, R> | Render<SVGAElement, M, R>): VBlock<SVGAElement, M, R> { return VBlock.claim(name, SvgTags.a, vmt instanceof Function ? { render: vmt } : vmt) }
export function Animate<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGAnimateElement, M, R> | Render<SVGAnimateElement, M, R>): VBlock<SVGAnimateElement, M, R> { return VBlock.claim(name, SvgTags.animate, vmt instanceof Function ? { render: vmt } : vmt) }
export function AnimateMotion<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGAnimateMotionElement, M, R> | Render<SVGAnimateMotionElement, M, R>): VBlock<SVGAnimateMotionElement, M, R> { return VBlock.claim(name, SvgTags.animateMotion, vmt instanceof Function ? { render: vmt } : vmt) }
export function AnimateTransform<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGAnimateTransformElement, M, R> | Render<SVGAnimateTransformElement, M, R>): VBlock<SVGAnimateTransformElement, M, R> { return VBlock.claim(name, SvgTags.animateTransform, vmt instanceof Function ? { render: vmt } : vmt) }
export function Circle<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGCircleElement, M, R> | Render<SVGCircleElement, M, R>): VBlock<SVGCircleElement, M, R> { return VBlock.claim(name, SvgTags.circle, vmt instanceof Function ? { render: vmt } : vmt) }
export function ClipPath<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGClipPathElement, M, R> | Render<SVGClipPathElement, M, R>): VBlock<SVGClipPathElement, M, R> { return VBlock.claim(name, SvgTags.clipPath, vmt instanceof Function ? { render: vmt } : vmt) }
export function Defs<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGDefsElement, M, R> | Render<SVGDefsElement, M, R>): VBlock<SVGDefsElement, M, R> { return VBlock.claim(name, SvgTags.defs, vmt instanceof Function ? { render: vmt } : vmt) }
export function Desc<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGDescElement, M, R> | Render<SVGDescElement, M, R>): VBlock<SVGDescElement, M, R> { return VBlock.claim(name, SvgTags.desc, vmt instanceof Function ? { render: vmt } : vmt) }
export function Ellipse<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGEllipseElement, M, R> | Render<SVGEllipseElement, M, R>): VBlock<SVGEllipseElement, M, R> { return VBlock.claim(name, SvgTags.ellipse, vmt instanceof Function ? { render: vmt } : vmt) }
export function FeBlend<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGFEBlendElement, M, R> | Render<SVGFEBlendElement, M, R>): VBlock<SVGFEBlendElement, M, R> { return VBlock.claim(name, SvgTags.feBlend, vmt instanceof Function ? { render: vmt } : vmt) }
export function FeColorMatrix<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGFEColorMatrixElement, M, R> | Render<SVGFEColorMatrixElement, M, R>): VBlock<SVGFEColorMatrixElement, M, R> { return VBlock.claim(name, SvgTags.feColorMatrix, vmt instanceof Function ? { render: vmt } : vmt) }
export function FeComponentTransfer<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGFEComponentTransferElement, M, R> | Render<SVGFEComponentTransferElement, M, R>): VBlock<SVGFEComponentTransferElement, M, R> { return VBlock.claim(name, SvgTags.feComponentTransfer, vmt instanceof Function ? { render: vmt } : vmt) }
export function FeComposite<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGFECompositeElement, M, R> | Render<SVGFECompositeElement, M, R>): VBlock<SVGFECompositeElement, M, R> { return VBlock.claim(name, SvgTags.feComposite, vmt instanceof Function ? { render: vmt } : vmt) }
export function FeConvolveMatrix<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGFEConvolveMatrixElement, M, R> | Render<SVGFEConvolveMatrixElement, M, R>): VBlock<SVGFEConvolveMatrixElement, M, R> { return VBlock.claim(name, SvgTags.feConvolveMatrix, vmt instanceof Function ? { render: vmt } : vmt) }
export function FeDiffuseLighting<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGFEDiffuseLightingElement, M, R> | Render<SVGFEDiffuseLightingElement, M, R>): VBlock<SVGFEDiffuseLightingElement, M, R> { return VBlock.claim(name, SvgTags.feDiffuseLighting, vmt instanceof Function ? { render: vmt } : vmt) }
export function FeDisplacementMap<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGFEDisplacementMapElement, M, R> | Render<SVGFEDisplacementMapElement, M, R>): VBlock<SVGFEDisplacementMapElement, M, R> { return VBlock.claim(name, SvgTags.feDisplacementMap, vmt instanceof Function ? { render: vmt } : vmt) }
export function FeDistantLight<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGFEDistantLightElement, M, R> | Render<SVGFEDistantLightElement, M, R>): VBlock<SVGFEDistantLightElement, M, R> { return VBlock.claim(name, SvgTags.feDistantLight, vmt instanceof Function ? { render: vmt } : vmt) }
export function FeDropShadow<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGFEDropShadowElement, M, R> | Render<SVGFEDropShadowElement, M, R>): VBlock<SVGFEDropShadowElement, M, R> { return VBlock.claim(name, SvgTags.feDropShadow, vmt instanceof Function ? { render: vmt } : vmt) }
export function FeFlood<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGFEFloodElement, M, R> | Render<SVGFEFloodElement, M, R>): VBlock<SVGFEFloodElement, M, R> { return VBlock.claim(name, SvgTags.feFlood, vmt instanceof Function ? { render: vmt } : vmt) }
export function FeFuncA<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGFEFuncAElement, M, R> | Render<SVGFEFuncAElement, M, R>): VBlock<SVGFEFuncAElement, M, R> { return VBlock.claim(name, SvgTags.feFuncA, vmt instanceof Function ? { render: vmt } : vmt) }
export function FeFuncB<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGFEFuncBElement, M, R> | Render<SVGFEFuncBElement, M, R>): VBlock<SVGFEFuncBElement, M, R> { return VBlock.claim(name, SvgTags.feFuncB, vmt instanceof Function ? { render: vmt } : vmt) }
export function FeFuncG<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGFEFuncGElement, M, R> | Render<SVGFEFuncGElement, M, R>): VBlock<SVGFEFuncGElement, M, R> { return VBlock.claim(name, SvgTags.feFuncG, vmt instanceof Function ? { render: vmt } : vmt) }
export function FeFuncR<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGFEFuncRElement, M, R> | Render<SVGFEFuncRElement, M, R>): VBlock<SVGFEFuncRElement, M, R> { return VBlock.claim(name, SvgTags.feFuncR, vmt instanceof Function ? { render: vmt } : vmt) }
export function FeGaussianBlur<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGFEGaussianBlurElement, M, R> | Render<SVGFEGaussianBlurElement, M, R>): VBlock<SVGFEGaussianBlurElement, M, R> { return VBlock.claim(name, SvgTags.feGaussianBlur, vmt instanceof Function ? { render: vmt } : vmt) }
export function FeImage<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGFEImageElement, M, R> | Render<SVGFEImageElement, M, R>): VBlock<SVGFEImageElement, M, R> { return VBlock.claim(name, SvgTags.feImage, vmt instanceof Function ? { render: vmt } : vmt) }
export function FeMerge<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGFEMergeElement, M, R> | Render<SVGFEMergeElement, M, R>): VBlock<SVGFEMergeElement, M, R> { return VBlock.claim(name, SvgTags.feMerge, vmt instanceof Function ? { render: vmt } : vmt) }
export function FeMergeNode<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGFEMergeNodeElement, M, R> | Render<SVGFEMergeNodeElement, M, R>): VBlock<SVGFEMergeNodeElement, M, R> { return VBlock.claim(name, SvgTags.feMergeNode, vmt instanceof Function ? { render: vmt } : vmt) }
export function FeMorphology<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGFEMorphologyElement, M, R> | Render<SVGFEMorphologyElement, M, R>): VBlock<SVGFEMorphologyElement, M, R> { return VBlock.claim(name, SvgTags.feMorphology, vmt instanceof Function ? { render: vmt } : vmt) }
export function FeOffset<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGFEOffsetElement, M, R> | Render<SVGFEOffsetElement, M, R>): VBlock<SVGFEOffsetElement, M, R> { return VBlock.claim(name, SvgTags.feOffset, vmt instanceof Function ? { render: vmt } : vmt) }
export function FePointLight<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGFEPointLightElement, M, R> | Render<SVGFEPointLightElement, M, R>): VBlock<SVGFEPointLightElement, M, R> { return VBlock.claim(name, SvgTags.fePointLight, vmt instanceof Function ? { render: vmt } : vmt) }
export function FeSpecularLighting<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGFESpecularLightingElement, M, R> | Render<SVGFESpecularLightingElement, M, R>): VBlock<SVGFESpecularLightingElement, M, R> { return VBlock.claim(name, SvgTags.feSpecularLighting, vmt instanceof Function ? { render: vmt } : vmt) }
export function FeSpotLight<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGFESpotLightElement, M, R> | Render<SVGFESpotLightElement, M, R>): VBlock<SVGFESpotLightElement, M, R> { return VBlock.claim(name, SvgTags.feSpotLight, vmt instanceof Function ? { render: vmt } : vmt) }
export function FeTile<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGFETileElement, M, R> | Render<SVGFETileElement, M, R>): VBlock<SVGFETileElement, M, R> { return VBlock.claim(name, SvgTags.feTile, vmt instanceof Function ? { render: vmt } : vmt) }
export function FeTurbulence<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGFETurbulenceElement, M, R> | Render<SVGFETurbulenceElement, M, R>): VBlock<SVGFETurbulenceElement, M, R> { return VBlock.claim(name, SvgTags.feTurbulence, vmt instanceof Function ? { render: vmt } : vmt) }
export function Filter<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGFilterElement, M, R> | Render<SVGFilterElement, M, R>): VBlock<SVGFilterElement, M, R> { return VBlock.claim(name, SvgTags.filter, vmt instanceof Function ? { render: vmt } : vmt) }
export function ForeignObject<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGForeignObjectElement, M, R> | Render<SVGForeignObjectElement, M, R>): VBlock<SVGForeignObjectElement, M, R> { return VBlock.claim(name, SvgTags.foreignObject, vmt instanceof Function ? { render: vmt } : vmt) }
export function G<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGGElement, M, R> | Render<SVGGElement, M, R>): VBlock<SVGGElement, M, R> { return VBlock.claim(name, SvgTags.g, vmt instanceof Function ? { render: vmt } : vmt) }
export function SvgImage<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGImageElement, M, R> | Render<SVGImageElement, M, R>): VBlock<SVGImageElement, M, R> { return VBlock.claim(name, SvgTags.image, vmt instanceof Function ? { render: vmt } : vmt) }
export function SvgLine<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGLineElement, M, R> | Render<SVGLineElement, M, R>): VBlock<SVGLineElement, M, R> { return VBlock.claim(name, SvgTags.line, vmt instanceof Function ? { render: vmt } : vmt) }
export function LinearGradient<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGLinearGradientElement, M, R> | Render<SVGLinearGradientElement, M, R>): VBlock<SVGLinearGradientElement, M, R> { return VBlock.claim(name, SvgTags.linearGradient, vmt instanceof Function ? { render: vmt } : vmt) }
export function Marker<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGMarkerElement, M, R> | Render<SVGMarkerElement, M, R>): VBlock<SVGMarkerElement, M, R> { return VBlock.claim(name, SvgTags.marker, vmt instanceof Function ? { render: vmt } : vmt) }
export function Mask<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGMaskElement, M, R> | Render<SVGMaskElement, M, R>): VBlock<SVGMaskElement, M, R> { return VBlock.claim(name, SvgTags.mask, vmt instanceof Function ? { render: vmt } : vmt) }
export function MetaData<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGMetadataElement, M, R> | Render<SVGMetadataElement, M, R>): VBlock<SVGMetadataElement, M, R> { return VBlock.claim(name, SvgTags.metadata, vmt instanceof Function ? { render: vmt } : vmt) }
export function MPath<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGElement, M, R> | Render<SVGElement, M, R>): VBlock<SVGElement, M, R> { return VBlock.claim(name, SvgTags.mpath, vmt instanceof Function ? { render: vmt } : vmt) }
export function Path<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGPathElement, M, R> | Render<SVGPathElement, M, R>): VBlock<SVGPathElement, M, R> { return VBlock.claim(name, SvgTags.path, vmt instanceof Function ? { render: vmt } : vmt) }
export function Pattern<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGPatternElement, M, R> | Render<SVGPatternElement, M, R>): VBlock<SVGPatternElement, M, R> { return VBlock.claim(name, SvgTags.pattern, vmt instanceof Function ? { render: vmt } : vmt) }
export function Polygon<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGPolygonElement, M, R> | Render<SVGPolygonElement, M, R>): VBlock<SVGPolygonElement, M, R> { return VBlock.claim(name, SvgTags.polygon, vmt instanceof Function ? { render: vmt } : vmt) }
export function PolyLine<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGPolylineElement, M, R> | Render<SVGPolylineElement, M, R>): VBlock<SVGPolylineElement, M, R> { return VBlock.claim(name, SvgTags.polyline, vmt instanceof Function ? { render: vmt } : vmt) }
export function RadialGradient<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGRadialGradientElement, M, R> | Render<SVGRadialGradientElement, M, R>): VBlock<SVGRadialGradientElement, M, R> { return VBlock.claim(name, SvgTags.radialGradient, vmt instanceof Function ? { render: vmt } : vmt) }
export function Rect<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGRectElement, M, R> | Render<SVGRectElement, M, R>): VBlock<SVGRectElement, M, R> { return VBlock.claim(name, SvgTags.rect, vmt instanceof Function ? { render: vmt } : vmt) }
export function Stop<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGStopElement, M, R> | Render<SVGStopElement, M, R>): VBlock<SVGStopElement, M, R> { return VBlock.claim(name, SvgTags.stop, vmt instanceof Function ? { render: vmt } : vmt) }
export function SvgSwitch<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGSwitchElement, M, R> | Render<SVGSwitchElement, M, R>): VBlock<SVGSwitchElement, M, R> { return VBlock.claim(name, SvgTags.switch, vmt instanceof Function ? { render: vmt } : vmt) }
export function Symbol<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGSymbolElement, M, R> | Render<SVGSymbolElement, M, R>): VBlock<SVGSymbolElement, M, R> { return VBlock.claim(name, SvgTags.symbol, vmt instanceof Function ? { render: vmt } : vmt) }
export function Text<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGTextElement, M, R> | Render<SVGTextElement, M, R>): VBlock<SVGTextElement, M, R> { return VBlock.claim(name, SvgTags.text, vmt instanceof Function ? { render: vmt } : vmt) }
export function TextPath<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGTextPathElement, M, R> | Render<SVGTextPathElement, M, R>): VBlock<SVGTextPathElement, M, R> { return VBlock.claim(name, SvgTags.textPath, vmt instanceof Function ? { render: vmt } : vmt) }
export function TSpan<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGTSpanElement, M, R> | Render<SVGTSpanElement, M, R>): VBlock<SVGTSpanElement, M, R> { return VBlock.claim(name, SvgTags.tspan, vmt instanceof Function ? { render: vmt } : vmt) }
export function Use<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGUseElement, M, R> | Render<SVGUseElement, M, R>): VBlock<SVGUseElement, M, R> { return VBlock.claim(name, SvgTags.use, vmt instanceof Function ? { render: vmt } : vmt) }
export function View<M = unknown, R = void>(name: string, vmt: BlockVmt<SVGViewElement, M, R> | Render<SVGViewElement, M, R>): VBlock<SVGViewElement, M, R> { return VBlock.claim(name, SvgTags.view, vmt instanceof Function ? { render: vmt } : vmt) }

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
