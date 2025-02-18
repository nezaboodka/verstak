// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveNode, ReactiveNodeDecl } from "reactronic"
import { El, ElKind } from "../core/El.js"
import { HtmlDriver } from "../core/WebDriver.js"

export function A<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLAnchorElement, M>>): ReactiveNode<El<HTMLAnchorElement, M>> { return ReactiveNode.declare(HtmlTags.a, declaration) }
export function Abbr<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.abbr, declaration) }
export function Address<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.address, declaration) }
export function Area<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLAreaElement, M>>): ReactiveNode<El<HTMLAreaElement, M>> { return ReactiveNode.declare(HtmlTags.area, declaration) }
export function Article<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.article, declaration) }
export function Aside<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.aside, declaration) }
export function Audio<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLAudioElement, M>>): ReactiveNode<El<HTMLAudioElement, M>> { return ReactiveNode.declare(HtmlTags.audio, declaration) }
export function B<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.b, declaration) }
export function Base<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLBaseElement, M>>): ReactiveNode<El<HTMLBaseElement, M>> { return ReactiveNode.declare(HtmlTags.base, declaration) }
export function Bdi<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.bdi, declaration) }
export function Bdo<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.bdo, declaration) }
export function Big<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.big, declaration) }
export function BlockQuote<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.blockquote, declaration) }
export function Body<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLBodyElement, M>>): ReactiveNode<El<HTMLBodyElement, M>> { return ReactiveNode.declare(HtmlTags.body, declaration) }
export function BR<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLBRElement, M>>): ReactiveNode<El<HTMLBRElement, M>> { return ReactiveNode.declare(HtmlTags.br, declaration) }
export function Button<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLButtonElement, M>>): ReactiveNode<El<HTMLButtonElement, M>> { return ReactiveNode.declare(HtmlTags.button, declaration) }
export function Canvas<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLCanvasElement, M>>): ReactiveNode<El<HTMLCanvasElement, M>> { return ReactiveNode.declare(HtmlTags.canvas, declaration) }
export function Caption<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLTableCaptionElement, M>>): ReactiveNode<El<HTMLTableCaptionElement, M>> { return ReactiveNode.declare(HtmlTags.caption, declaration) }
export function Cite<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.cite, declaration) }
export function Code<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.code, declaration) }
export function Col<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLTableColElement, M>>): ReactiveNode<El<HTMLTableColElement, M>> { return ReactiveNode.declare(HtmlTags.col, declaration) }
export function ColGroup<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLTableColElement, M>>): ReactiveNode<El<HTMLTableColElement, M>> { return ReactiveNode.declare(HtmlTags.colgroup, declaration) }
export function Data<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLDataElement, M>>): ReactiveNode<El<HTMLDataElement, M>> { return ReactiveNode.declare(HtmlTags.data, declaration) }
export function DataList<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLDataListElement, M>>): ReactiveNode<El<HTMLDataListElement, M>> { return ReactiveNode.declare(HtmlTags.datalist, declaration) }
export function DD<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.dd, declaration) }
export function Del<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.del, declaration) }
export function Details<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.details, declaration) }
export function Dfn<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.dfn, declaration) }
export function Div<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLDivElement, M>>): ReactiveNode<El<HTMLDivElement, M>> { return ReactiveNode.declare(HtmlTags.div, declaration) }
export function DL<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLDListElement, M>>): ReactiveNode<El<HTMLDListElement, M>> { return ReactiveNode.declare(HtmlTags.dl, declaration) }
export function DT<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.dt, declaration) }
export function EM<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.em, declaration) }
export function Embed<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLEmbedElement, M>>): ReactiveNode<El<HTMLEmbedElement, M>> { return ReactiveNode.declare(HtmlTags.embed, declaration) }
export function FieldSet<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLFieldSetElement, M>>): ReactiveNode<El<HTMLFieldSetElement, M>> { return ReactiveNode.declare(HtmlTags.fieldset, declaration) }
export function FigCaption<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.figcaption, declaration) }
export function Figure<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.figure, declaration) }
export function Footer<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.footer, declaration) }
export function Form<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLFormElement, M>>): ReactiveNode<El<HTMLFormElement, M>> { return ReactiveNode.declare(HtmlTags.form, declaration) }
export function H1<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLHeadingElement, M>>): ReactiveNode<El<HTMLHeadingElement, M>> { return ReactiveNode.declare(HtmlTags.h1, declaration) }
export function H2<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLHeadingElement, M>>): ReactiveNode<El<HTMLHeadingElement, M>> { return ReactiveNode.declare(HtmlTags.h2, declaration) }
export function H3<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLHeadingElement, M>>): ReactiveNode<El<HTMLHeadingElement, M>> { return ReactiveNode.declare(HtmlTags.h3, declaration) }
export function H4<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLHeadingElement, M>>): ReactiveNode<El<HTMLHeadingElement, M>> { return ReactiveNode.declare(HtmlTags.h4, declaration) }
export function H5<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLHeadingElement, M>>): ReactiveNode<El<HTMLHeadingElement, M>> { return ReactiveNode.declare(HtmlTags.h5, declaration) }
export function H6<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLHeadingElement, M>>): ReactiveNode<El<HTMLHeadingElement, M>> { return ReactiveNode.declare(HtmlTags.h6, declaration) }
export function Head<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLHeadElement, M>>): ReactiveNode<El<HTMLHeadElement, M>> { return ReactiveNode.declare(HtmlTags.head, declaration) }
export function Header<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.header, declaration) }
export function HGroup<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.hgroup, declaration) }
export function HR<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLHRElement, M>>): ReactiveNode<El<HTMLHRElement, M>> { return ReactiveNode.declare(HtmlTags.hr, declaration) }
export function Html<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLHtmlElement, M>>): ReactiveNode<El<HTMLHtmlElement, M>> { return ReactiveNode.declare(HtmlTags.html, declaration) }
export function I<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.i, declaration) }
export function IFrame<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLIFrameElement, M>>): ReactiveNode<El<HTMLIFrameElement, M>> { return ReactiveNode.declare(HtmlTags.iframe, declaration) }
export function Img<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLImageElement, M>>): ReactiveNode<El<HTMLImageElement, M>> { return ReactiveNode.declare(HtmlTags.img, declaration) }
export function Input<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLInputElement, M>>): ReactiveNode<El<HTMLInputElement, M>> { return ReactiveNode.declare(HtmlTags.input, declaration) }
export function Ins<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLModElement, M>>): ReactiveNode<El<HTMLModElement, M>> { return ReactiveNode.declare(HtmlTags.ins, declaration) }
export function Kbd<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.kbd, declaration) }
export function KeyGen<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.keygen, declaration) }
export function Label<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLLabelElement, M>>): ReactiveNode<El<HTMLLabelElement, M>> { return ReactiveNode.declare(HtmlTags.label, declaration) }
export function Legend<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLLegendElement, M>>): ReactiveNode<El<HTMLLegendElement, M>> { return ReactiveNode.declare(HtmlTags.legend, declaration) }
export function LI<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLLIElement, M>>): ReactiveNode<El<HTMLLIElement, M>> { return ReactiveNode.declare(HtmlTags.li, declaration) }
export function Link<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLLinkElement, M>>): ReactiveNode<El<HTMLLinkElement, M>> { return ReactiveNode.declare(HtmlTags.link, declaration) }
export function Main<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.main, declaration) }
export function Map<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLMapElement, M>>): ReactiveNode<El<HTMLMapElement, M>> { return ReactiveNode.declare(HtmlTags.map, declaration) }
export function Mark<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.mark, declaration) }
export function Menu<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.menu, declaration) }
export function MenuItem<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.menuitem, declaration) }
export function Meta<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLMetaElement, M>>): ReactiveNode<El<HTMLMetaElement, M>> { return ReactiveNode.declare(HtmlTags.meta, declaration) }
export function Meter<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.meter, declaration) }
export function Nav<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.nav, declaration) }
export function NoIndex<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.noindex, declaration) }
export function NoScript<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.noscript, declaration) }
export function Obj<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLObjectElement, M>>): ReactiveNode<El<HTMLObjectElement, M>> { return ReactiveNode.declare(HtmlTags.object, declaration) }
export function OL<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLOListElement, M>>): ReactiveNode<El<HTMLOListElement, M>> { return ReactiveNode.declare(HtmlTags.ol, declaration) }
export function OptGroup<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLOptGroupElement, M>>): ReactiveNode<El<HTMLOptGroupElement, M>> { return ReactiveNode.declare(HtmlTags.optgroup, declaration) }
export function Option<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLOptionElement, M>>): ReactiveNode<El<HTMLOptionElement, M>> { return ReactiveNode.declare(HtmlTags.option, declaration) }
export function Output<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.output, declaration) }
export function P<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLParagraphElement, M>>): ReactiveNode<El<HTMLParagraphElement, M>> { return ReactiveNode.declare(HtmlTags.p, declaration) }
export function Param<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.param, declaration) }
export function Picture<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.picture, declaration) }
export function Pre<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLPreElement, M>>): ReactiveNode<El<HTMLPreElement, M>> { return ReactiveNode.declare(HtmlTags.pre, declaration) }
export function Progress<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLProgressElement, M>>): ReactiveNode<El<HTMLProgressElement, M>> { return ReactiveNode.declare(HtmlTags.progress, declaration) }
export function Q<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLQuoteElement, M>>): ReactiveNode<El<HTMLQuoteElement, M>> { return ReactiveNode.declare(HtmlTags.q, declaration) }
export function RP<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.rp, declaration) }
export function RT<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.rt, declaration) }
export function Ruby<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.ruby, declaration) }
export function S<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.s, declaration) }
export function Samp<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.samp, declaration) }
export function Script<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLScriptElement, M>>): ReactiveNode<El<HTMLScriptElement, M>> { return ReactiveNode.declare(HtmlTags.script, declaration) }
export function Section<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.section, declaration) }
export function Select<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLSelectElement, M>>): ReactiveNode<El<HTMLSelectElement, M>> { return ReactiveNode.declare(HtmlTags.select, declaration) }
export function Small<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.small, declaration) }
export function Source<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLSourceElement, M>>): ReactiveNode<El<HTMLSourceElement, M>> { return ReactiveNode.declare(HtmlTags.source, declaration) }
export function Span<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLSpanElement, M>>): ReactiveNode<El<HTMLSpanElement, M>> { return ReactiveNode.declare(HtmlTags.span, declaration) }
export function Strong<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.strong, declaration) }
export function Style<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLStyleElement, M>>): ReactiveNode<El<HTMLStyleElement, M>> { return ReactiveNode.declare(HtmlTags.style, declaration) }
export function Sub<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.sub, declaration) }
export function Summary<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.summary, declaration) }
export function Sup<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.sup, declaration) }
export function Tbl<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLTableElement, M>>): ReactiveNode<El<HTMLTableElement, M>> { return ReactiveNode.declare(HtmlTags.table, declaration) }
export function Template<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLTemplateElement, M>>): ReactiveNode<El<HTMLTemplateElement, M>> { return ReactiveNode.declare(HtmlTags.template, declaration) }
export function TBody<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLTableSectionElement, M>>): ReactiveNode<El<HTMLTableSectionElement, M>> { return ReactiveNode.declare(HtmlTags.tbody, declaration) }
export function TD<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLTableCellElement, M>>): ReactiveNode<El<HTMLTableCellElement, M>> { return ReactiveNode.declare(HtmlTags.td, declaration) }
export function TextArea<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLTextAreaElement, M>>): ReactiveNode<El<HTMLTextAreaElement, M>> { return ReactiveNode.declare(HtmlTags.textarea, declaration) }
export function TFoot<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLTableSectionElement, M>>): ReactiveNode<El<HTMLTableSectionElement, M>> { return ReactiveNode.declare(HtmlTags.tfoot, declaration) }
export function TH<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLTableCellElement, M>>): ReactiveNode<El<HTMLTableCellElement, M>> { return ReactiveNode.declare(HtmlTags.th, declaration) }
export function THead<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLTableSectionElement, M>>): ReactiveNode<El<HTMLTableSectionElement, M>> { return ReactiveNode.declare(HtmlTags.thead, declaration) }
export function Time<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.time, declaration) }
export function Title<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLTitleElement, M>>): ReactiveNode<El<HTMLTitleElement, M>> { return ReactiveNode.declare(HtmlTags.title, declaration) }
export function TR<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLTableRowElement, M>>): ReactiveNode<El<HTMLTableRowElement, M>> { return ReactiveNode.declare(HtmlTags.tr, declaration) }
export function Track<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLTrackElement, M>>): ReactiveNode<El<HTMLTrackElement, M>> { return ReactiveNode.declare(HtmlTags.track, declaration) }
export function U<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.u, declaration) }
export function UL<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLUListElement, M>>): ReactiveNode<El<HTMLUListElement, M>> { return ReactiveNode.declare(HtmlTags.ul, declaration) }
export function Var<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.var, declaration) }
export function Video<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLVideoElement, M>>): ReactiveNode<El<HTMLVideoElement, M>> { return ReactiveNode.declare(HtmlTags.video, declaration) }
export function Wbr<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.wbr, declaration) }

const HtmlTags = {
  a: new HtmlDriver<HTMLAnchorElement>("a", false, el => el.kind = ElKind.native),
  abbr: new HtmlDriver<HTMLElement>("abbr", false, el => el.kind = ElKind.native),
  address: new HtmlDriver<HTMLElement>("address", false, el => el.kind = ElKind.native),
  area: new HtmlDriver<HTMLAreaElement>("area", false, el => el.kind = ElKind.native),
  article: new HtmlDriver<HTMLElement>("article", false, el => el.kind = ElKind.native),
  aside: new HtmlDriver<HTMLElement>("aside", false, el => el.kind = ElKind.native),
  audio: new HtmlDriver<HTMLAudioElement>("audio", false, el => el.kind = ElKind.native),
  b: new HtmlDriver<HTMLElement>("b", false, el => el.kind = ElKind.native),
  base: new HtmlDriver<HTMLBaseElement>("base", false, el => el.kind = ElKind.native),
  bdi: new HtmlDriver<HTMLElement>("bdi", false, el => el.kind = ElKind.native),
  bdo: new HtmlDriver<HTMLElement>("bdo", false, el => el.kind = ElKind.native),
  big: new HtmlDriver<HTMLElement>("big", false, el => el.kind = ElKind.native),
  blockquote: new HtmlDriver<HTMLElement>("blockquote", false, el => el.kind = ElKind.native),
  body: new HtmlDriver<HTMLBodyElement>("body", false, el => el.kind = ElKind.native),
  br: new HtmlDriver<HTMLBRElement>("br", false, el => el.kind = ElKind.native),
  button: new HtmlDriver<HTMLButtonElement>("button", false, el => el.kind = ElKind.native),
  canvas: new HtmlDriver<HTMLCanvasElement>("canvas", false, el => el.kind = ElKind.native),
  caption: new HtmlDriver<HTMLTableCaptionElement>("caption", false, el => el.kind = ElKind.native),
  cite: new HtmlDriver<HTMLElement>("cite", false, el => el.kind = ElKind.native),
  code: new HtmlDriver<HTMLElement>("code", false, el => el.kind = ElKind.native),
  col: new HtmlDriver<HTMLTableColElement>("col", false, el => el.kind = ElKind.native),
  colgroup: new HtmlDriver<HTMLTableColElement>("colgroup", false, el => el.kind = ElKind.native),
  data: new HtmlDriver<HTMLDataElement>("data", false, el => el.kind = ElKind.native),
  datalist: new HtmlDriver<HTMLDataListElement>("datalist", false, el => el.kind = ElKind.native),
  dd: new HtmlDriver<HTMLElement>("dd", false, el => el.kind = ElKind.native),
  del: new HtmlDriver<HTMLElement>("del", false, el => el.kind = ElKind.native),
  details: new HtmlDriver<HTMLElement>("details", false, el => el.kind = ElKind.native),
  dfn: new HtmlDriver<HTMLElement>("dfn", false, el => el.kind = ElKind.native),
  div: new HtmlDriver<HTMLDivElement>("div", false, el => el.kind = ElKind.native),
  dl: new HtmlDriver<HTMLDListElement>("dl", false, el => el.kind = ElKind.native),
  dt: new HtmlDriver<HTMLElement>("dt", false, el => el.kind = ElKind.native),
  em: new HtmlDriver<HTMLElement>("em", false, el => el.kind = ElKind.native),
  embed: new HtmlDriver<HTMLEmbedElement>("embed", false, el => el.kind = ElKind.native),
  fieldset: new HtmlDriver<HTMLFieldSetElement>("fieldset", false, el => el.kind = ElKind.native),
  figcaption: new HtmlDriver<HTMLElement>("figcaption", false, el => el.kind = ElKind.native),
  figure: new HtmlDriver<HTMLElement>("figure", false, el => el.kind = ElKind.native),
  footer: new HtmlDriver<HTMLElement>("footer", false, el => el.kind = ElKind.native),
  form: new HtmlDriver<HTMLFormElement>("form", false, el => el.kind = ElKind.native),
  h1: new HtmlDriver<HTMLHeadingElement>("h1", false, el => el.kind = ElKind.native),
  h2: new HtmlDriver<HTMLHeadingElement>("h2", false, el => el.kind = ElKind.native),
  h3: new HtmlDriver<HTMLHeadingElement>("h3", false, el => el.kind = ElKind.native),
  h4: new HtmlDriver<HTMLHeadingElement>("h4", false, el => el.kind = ElKind.native),
  h5: new HtmlDriver<HTMLHeadingElement>("h5", false, el => el.kind = ElKind.native),
  h6: new HtmlDriver<HTMLHeadingElement>("h6", false, el => el.kind = ElKind.native),
  head: new HtmlDriver<HTMLHeadElement>("head", false, el => el.kind = ElKind.native),
  header: new HtmlDriver<HTMLElement>("header", false, el => el.kind = ElKind.native),
  hgroup: new HtmlDriver<HTMLElement>("hgroup", false, el => el.kind = ElKind.native),
  hr: new HtmlDriver<HTMLHRElement>("hr", false, el => el.kind = ElKind.native),
  html: new HtmlDriver<HTMLHtmlElement>("html", false, el => el.kind = ElKind.native),
  i: new HtmlDriver<HTMLElement>("i", false, el => el.kind = ElKind.native),
  iframe: new HtmlDriver<HTMLIFrameElement>("iframe", false, el => el.kind = ElKind.native),
  img: new HtmlDriver<HTMLImageElement>("img", false, el => el.kind = ElKind.native),
  input: new HtmlDriver<HTMLInputElement>("input", false, el => el.kind = ElKind.native),
  ins: new HtmlDriver<HTMLModElement>("ins", false, el => el.kind = ElKind.native),
  kbd: new HtmlDriver<HTMLElement>("kbd", false, el => el.kind = ElKind.native),
  keygen: new HtmlDriver<HTMLElement>("keygen", false, el => el.kind = ElKind.native),
  label: new HtmlDriver<HTMLLabelElement>("label", false, el => el.kind = ElKind.native),
  legend: new HtmlDriver<HTMLLegendElement>("legend", false, el => el.kind = ElKind.native),
  li: new HtmlDriver<HTMLLIElement>("li", false, el => el.kind = ElKind.native),
  link: new HtmlDriver<HTMLLinkElement>("link", false, el => el.kind = ElKind.native),
  main: new HtmlDriver<HTMLElement>("main", false, el => el.kind = ElKind.native),
  map: new HtmlDriver<HTMLMapElement>("map", false, el => el.kind = ElKind.native),
  mark: new HtmlDriver<HTMLElement>("mark", false, el => el.kind = ElKind.native),
  menu: new HtmlDriver<HTMLElement>("menu", false, el => el.kind = ElKind.native),
  menuitem: new HtmlDriver<HTMLElement>("menuitem", false, el => el.kind = ElKind.native),
  meta: new HtmlDriver<HTMLMetaElement>("meta", false, el => el.kind = ElKind.native),
  meter: new HtmlDriver<HTMLElement>("meter", false, el => el.kind = ElKind.native),
  nav: new HtmlDriver<HTMLElement>("nav", false, el => el.kind = ElKind.native),
  noindex: new HtmlDriver<HTMLElement>("noindex", false, el => el.kind = ElKind.native),
  noscript: new HtmlDriver<HTMLElement>("noscript", false, el => el.kind = ElKind.native),
  object: new HtmlDriver<HTMLObjectElement>("object", false, el => el.kind = ElKind.native),
  ol: new HtmlDriver<HTMLOListElement>("ol", false, el => el.kind = ElKind.native),
  optgroup: new HtmlDriver<HTMLOptGroupElement>("optgroup", false, el => el.kind = ElKind.native),
  option: new HtmlDriver<HTMLOptionElement>("option", false, el => el.kind = ElKind.native),
  output: new HtmlDriver<HTMLElement>("output", false, el => el.kind = ElKind.native),
  p: new HtmlDriver<HTMLParagraphElement>("p", false, el => el.kind = ElKind.native),
  param: new HtmlDriver<HTMLElement>("param", false, el => el.kind = ElKind.native),
  picture: new HtmlDriver<HTMLElement>("picture", false, el => el.kind = ElKind.native),
  pre: new HtmlDriver<HTMLPreElement>("pre", false, el => el.kind = ElKind.native),
  progress: new HtmlDriver<HTMLProgressElement>("progress", false, el => el.kind = ElKind.native),
  q: new HtmlDriver<HTMLQuoteElement>("q", false, el => el.kind = ElKind.native),
  rp: new HtmlDriver<HTMLElement>("rp", false, el => el.kind = ElKind.native),
  rt: new HtmlDriver<HTMLElement>("rt", false, el => el.kind = ElKind.native),
  ruby: new HtmlDriver<HTMLElement>("ruby", false, el => el.kind = ElKind.native),
  s: new HtmlDriver<HTMLElement>("s", false, el => el.kind = ElKind.native),
  samp: new HtmlDriver<HTMLElement>("samp", false, el => el.kind = ElKind.native),
  script: new HtmlDriver<HTMLScriptElement>("script", false, el => el.kind = ElKind.native),
  section: new HtmlDriver<HTMLElement>("section", false, el => el.kind = ElKind.native),
  select: new HtmlDriver<HTMLSelectElement>("select", false, el => el.kind = ElKind.native),
  small: new HtmlDriver<HTMLElement>("small", false, el => el.kind = ElKind.native),
  source: new HtmlDriver<HTMLSourceElement>("source", false, el => el.kind = ElKind.native),
  span: new HtmlDriver<HTMLSpanElement>("span", false, el => el.kind = ElKind.native),
  strong: new HtmlDriver<HTMLElement>("strong", false, el => el.kind = ElKind.native),
  style: new HtmlDriver<HTMLStyleElement>("style", false, el => el.kind = ElKind.native),
  sub: new HtmlDriver<HTMLElement>("sub", false, el => el.kind = ElKind.native),
  summary: new HtmlDriver<HTMLElement>("summary", false, el => el.kind = ElKind.native),
  sup: new HtmlDriver<HTMLElement>("sup", false, el => el.kind = ElKind.native),
  table: new HtmlDriver<HTMLTableElement>("table", false, el => el.kind = ElKind.native),
  template: new HtmlDriver<HTMLTemplateElement>("template", false, el => el.kind = ElKind.native),
  tbody: new HtmlDriver<HTMLTableSectionElement>("tbody", false, el => el.kind = ElKind.native),
  td: new HtmlDriver<HTMLTableCellElement>("td", false, el => el.kind = ElKind.native),
  textarea: new HtmlDriver<HTMLTextAreaElement>("textarea", false, el => el.kind = ElKind.native),
  tfoot: new HtmlDriver<HTMLTableSectionElement>("tfoot", false, el => el.kind = ElKind.native),
  th: new HtmlDriver<HTMLTableCellElement>("th", false, el => el.kind = ElKind.native),
  thead: new HtmlDriver<HTMLTableSectionElement>("thead", false, el => el.kind = ElKind.native),
  time: new HtmlDriver<HTMLElement>("time", false, el => el.kind = ElKind.native),
  title: new HtmlDriver<HTMLTitleElement>("title", false, el => el.kind = ElKind.native),
  tr: new HtmlDriver<HTMLTableRowElement>("tr", false, el => el.kind = ElKind.native),
  track: new HtmlDriver<HTMLTrackElement>("track", false, el => el.kind = ElKind.native),
  u: new HtmlDriver<HTMLElement>("u", false, el => el.kind = ElKind.native),
  ul: new HtmlDriver<HTMLUListElement>("ul", false, el => el.kind = ElKind.native),
  var: new HtmlDriver<HTMLElement>("var", false, el => el.kind = ElKind.native),
  video: new HtmlDriver<HTMLVideoElement>("video", false, el => el.kind = ElKind.native),
  wbr: new HtmlDriver<HTMLElement>("wbr", false, el => el.kind = ElKind.native),
  // webview: new HtmlNodeFactory<HTMLWebViewElement>('webview', ElKind.Section),
}
