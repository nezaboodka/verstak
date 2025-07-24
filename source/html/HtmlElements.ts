// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTree, ReactiveTreeNode, ReactiveTreeNodeDecl } from "reactronic"
import { El, ElKind } from "../core/El.js"
import { HtmlDriver } from "../core/WebDriver.js"

export function A<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLAnchorElement, M>>): ReactiveTreeNode<El<HTMLAnchorElement, M>> { return ReactiveTree.declare(HtmlTags.a, declaration) }
export function Abbr<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.abbr, declaration) }
export function Address<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.address, declaration) }
export function Area<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLAreaElement, M>>): ReactiveTreeNode<El<HTMLAreaElement, M>> { return ReactiveTree.declare(HtmlTags.area, declaration) }
export function Article<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.article, declaration) }
export function Aside<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.aside, declaration) }
export function Audio<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLAudioElement, M>>): ReactiveTreeNode<El<HTMLAudioElement, M>> { return ReactiveTree.declare(HtmlTags.audio, declaration) }
export function B<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.b, declaration) }
export function Base<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLBaseElement, M>>): ReactiveTreeNode<El<HTMLBaseElement, M>> { return ReactiveTree.declare(HtmlTags.base, declaration) }
export function Bdi<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.bdi, declaration) }
export function Bdo<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.bdo, declaration) }
export function Big<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.big, declaration) }
export function BlockQuote<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.blockquote, declaration) }
export function Body<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLBodyElement, M>>): ReactiveTreeNode<El<HTMLBodyElement, M>> { return ReactiveTree.declare(HtmlTags.body, declaration) }
export function BR<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLBRElement, M>>): ReactiveTreeNode<El<HTMLBRElement, M>> { return ReactiveTree.declare(HtmlTags.br, declaration) }
export function Button<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLButtonElement, M>>): ReactiveTreeNode<El<HTMLButtonElement, M>> { return ReactiveTree.declare(HtmlTags.button, declaration) }
export function Canvas<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLCanvasElement, M>>): ReactiveTreeNode<El<HTMLCanvasElement, M>> { return ReactiveTree.declare(HtmlTags.canvas, declaration) }
export function Caption<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLTableCaptionElement, M>>): ReactiveTreeNode<El<HTMLTableCaptionElement, M>> { return ReactiveTree.declare(HtmlTags.caption, declaration) }
export function Cite<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.cite, declaration) }
export function Code<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.code, declaration) }
export function Col<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLTableColElement, M>>): ReactiveTreeNode<El<HTMLTableColElement, M>> { return ReactiveTree.declare(HtmlTags.col, declaration) }
export function ColGroup<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLTableColElement, M>>): ReactiveTreeNode<El<HTMLTableColElement, M>> { return ReactiveTree.declare(HtmlTags.colgroup, declaration) }
export function Data<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLDataElement, M>>): ReactiveTreeNode<El<HTMLDataElement, M>> { return ReactiveTree.declare(HtmlTags.data, declaration) }
export function DataList<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLDataListElement, M>>): ReactiveTreeNode<El<HTMLDataListElement, M>> { return ReactiveTree.declare(HtmlTags.datalist, declaration) }
export function DD<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.dd, declaration) }
export function Del<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.del, declaration) }
export function Details<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.details, declaration) }
export function Dfn<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.dfn, declaration) }
export function Div<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLDivElement, M>>): ReactiveTreeNode<El<HTMLDivElement, M>> { return ReactiveTree.declare(HtmlTags.div, declaration) }
export function DL<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLDListElement, M>>): ReactiveTreeNode<El<HTMLDListElement, M>> { return ReactiveTree.declare(HtmlTags.dl, declaration) }
export function DT<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.dt, declaration) }
export function EM<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.em, declaration) }
export function Embed<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLEmbedElement, M>>): ReactiveTreeNode<El<HTMLEmbedElement, M>> { return ReactiveTree.declare(HtmlTags.embed, declaration) }
export function FieldSet<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLFieldSetElement, M>>): ReactiveTreeNode<El<HTMLFieldSetElement, M>> { return ReactiveTree.declare(HtmlTags.fieldset, declaration) }
export function FigCaption<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.figcaption, declaration) }
export function Figure<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.figure, declaration) }
export function Footer<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.footer, declaration) }
export function Form<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLFormElement, M>>): ReactiveTreeNode<El<HTMLFormElement, M>> { return ReactiveTree.declare(HtmlTags.form, declaration) }
export function H1<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>> { return ReactiveTree.declare(HtmlTags.h1, declaration) }
export function H2<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>> { return ReactiveTree.declare(HtmlTags.h2, declaration) }
export function H3<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>> { return ReactiveTree.declare(HtmlTags.h3, declaration) }
export function H4<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>> { return ReactiveTree.declare(HtmlTags.h4, declaration) }
export function H5<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>> { return ReactiveTree.declare(HtmlTags.h5, declaration) }
export function H6<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>> { return ReactiveTree.declare(HtmlTags.h6, declaration) }
export function Head<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLHeadElement, M>>): ReactiveTreeNode<El<HTMLHeadElement, M>> { return ReactiveTree.declare(HtmlTags.head, declaration) }
export function Header<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.header, declaration) }
export function HGroup<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.hgroup, declaration) }
export function HR<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLHRElement, M>>): ReactiveTreeNode<El<HTMLHRElement, M>> { return ReactiveTree.declare(HtmlTags.hr, declaration) }
export function Html<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLHtmlElement, M>>): ReactiveTreeNode<El<HTMLHtmlElement, M>> { return ReactiveTree.declare(HtmlTags.html, declaration) }
export function I<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.i, declaration) }
export function IFrame<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLIFrameElement, M>>): ReactiveTreeNode<El<HTMLIFrameElement, M>> { return ReactiveTree.declare(HtmlTags.iframe, declaration) }
export function Img<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLImageElement, M>>): ReactiveTreeNode<El<HTMLImageElement, M>> { return ReactiveTree.declare(HtmlTags.img, declaration) }
export function Input<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLInputElement, M>>): ReactiveTreeNode<El<HTMLInputElement, M>> { return ReactiveTree.declare(HtmlTags.input, declaration) }
export function Ins<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLModElement, M>>): ReactiveTreeNode<El<HTMLModElement, M>> { return ReactiveTree.declare(HtmlTags.ins, declaration) }
export function Kbd<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.kbd, declaration) }
export function KeyGen<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.keygen, declaration) }
export function Label<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLLabelElement, M>>): ReactiveTreeNode<El<HTMLLabelElement, M>> { return ReactiveTree.declare(HtmlTags.label, declaration) }
export function Legend<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLLegendElement, M>>): ReactiveTreeNode<El<HTMLLegendElement, M>> { return ReactiveTree.declare(HtmlTags.legend, declaration) }
export function LI<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLLIElement, M>>): ReactiveTreeNode<El<HTMLLIElement, M>> { return ReactiveTree.declare(HtmlTags.li, declaration) }
export function Link<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLLinkElement, M>>): ReactiveTreeNode<El<HTMLLinkElement, M>> { return ReactiveTree.declare(HtmlTags.link, declaration) }
export function Main<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.main, declaration) }
export function Map<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLMapElement, M>>): ReactiveTreeNode<El<HTMLMapElement, M>> { return ReactiveTree.declare(HtmlTags.map, declaration) }
export function Mark<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.mark, declaration) }
export function Menu<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.menu, declaration) }
export function MenuItem<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.menuitem, declaration) }
export function Meta<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLMetaElement, M>>): ReactiveTreeNode<El<HTMLMetaElement, M>> { return ReactiveTree.declare(HtmlTags.meta, declaration) }
export function Meter<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.meter, declaration) }
export function Nav<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.nav, declaration) }
export function NoIndex<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.noindex, declaration) }
export function NoScript<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.noscript, declaration) }
export function Obj<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLObjectElement, M>>): ReactiveTreeNode<El<HTMLObjectElement, M>> { return ReactiveTree.declare(HtmlTags.object, declaration) }
export function OL<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLOListElement, M>>): ReactiveTreeNode<El<HTMLOListElement, M>> { return ReactiveTree.declare(HtmlTags.ol, declaration) }
export function OptGroup<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLOptGroupElement, M>>): ReactiveTreeNode<El<HTMLOptGroupElement, M>> { return ReactiveTree.declare(HtmlTags.optgroup, declaration) }
export function Option<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLOptionElement, M>>): ReactiveTreeNode<El<HTMLOptionElement, M>> { return ReactiveTree.declare(HtmlTags.option, declaration) }
export function Output<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.output, declaration) }
export function P<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLParagraphElement, M>>): ReactiveTreeNode<El<HTMLParagraphElement, M>> { return ReactiveTree.declare(HtmlTags.p, declaration) }
export function Param<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.param, declaration) }
export function Picture<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.picture, declaration) }
export function Pre<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLPreElement, M>>): ReactiveTreeNode<El<HTMLPreElement, M>> { return ReactiveTree.declare(HtmlTags.pre, declaration) }
export function Progress<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLProgressElement, M>>): ReactiveTreeNode<El<HTMLProgressElement, M>> { return ReactiveTree.declare(HtmlTags.progress, declaration) }
export function Q<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLQuoteElement, M>>): ReactiveTreeNode<El<HTMLQuoteElement, M>> { return ReactiveTree.declare(HtmlTags.q, declaration) }
export function RP<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.rp, declaration) }
export function RT<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.rt, declaration) }
export function Ruby<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.ruby, declaration) }
export function S<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.s, declaration) }
export function Samp<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.samp, declaration) }
export function Script<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLScriptElement, M>>): ReactiveTreeNode<El<HTMLScriptElement, M>> { return ReactiveTree.declare(HtmlTags.script, declaration) }
export function Section<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.section, declaration) }
export function Select<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLSelectElement, M>>): ReactiveTreeNode<El<HTMLSelectElement, M>> { return ReactiveTree.declare(HtmlTags.select, declaration) }
export function Small<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.small, declaration) }
export function Source<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLSourceElement, M>>): ReactiveTreeNode<El<HTMLSourceElement, M>> { return ReactiveTree.declare(HtmlTags.source, declaration) }
export function Span<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLSpanElement, M>>): ReactiveTreeNode<El<HTMLSpanElement, M>> { return ReactiveTree.declare(HtmlTags.span, declaration) }
export function Strong<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.strong, declaration) }
export function Style<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLStyleElement, M>>): ReactiveTreeNode<El<HTMLStyleElement, M>> { return ReactiveTree.declare(HtmlTags.style, declaration) }
export function Sub<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.sub, declaration) }
export function Summary<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.summary, declaration) }
export function Sup<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.sup, declaration) }
export function Tbl<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLTableElement, M>>): ReactiveTreeNode<El<HTMLTableElement, M>> { return ReactiveTree.declare(HtmlTags.table, declaration) }
export function Template<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLTemplateElement, M>>): ReactiveTreeNode<El<HTMLTemplateElement, M>> { return ReactiveTree.declare(HtmlTags.template, declaration) }
export function TBody<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLTableSectionElement, M>>): ReactiveTreeNode<El<HTMLTableSectionElement, M>> { return ReactiveTree.declare(HtmlTags.tbody, declaration) }
export function TD<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLTableCellElement, M>>): ReactiveTreeNode<El<HTMLTableCellElement, M>> { return ReactiveTree.declare(HtmlTags.td, declaration) }
export function TextArea<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLTextAreaElement, M>>): ReactiveTreeNode<El<HTMLTextAreaElement, M>> { return ReactiveTree.declare(HtmlTags.textarea, declaration) }
export function TFoot<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLTableSectionElement, M>>): ReactiveTreeNode<El<HTMLTableSectionElement, M>> { return ReactiveTree.declare(HtmlTags.tfoot, declaration) }
export function TH<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLTableCellElement, M>>): ReactiveTreeNode<El<HTMLTableCellElement, M>> { return ReactiveTree.declare(HtmlTags.th, declaration) }
export function THead<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLTableSectionElement, M>>): ReactiveTreeNode<El<HTMLTableSectionElement, M>> { return ReactiveTree.declare(HtmlTags.thead, declaration) }
export function Time<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.time, declaration) }
export function Title<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLTitleElement, M>>): ReactiveTreeNode<El<HTMLTitleElement, M>> { return ReactiveTree.declare(HtmlTags.title, declaration) }
export function TR<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLTableRowElement, M>>): ReactiveTreeNode<El<HTMLTableRowElement, M>> { return ReactiveTree.declare(HtmlTags.tr, declaration) }
export function Track<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLTrackElement, M>>): ReactiveTreeNode<El<HTMLTrackElement, M>> { return ReactiveTree.declare(HtmlTags.track, declaration) }
export function U<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.u, declaration) }
export function UL<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLUListElement, M>>): ReactiveTreeNode<El<HTMLUListElement, M>> { return ReactiveTree.declare(HtmlTags.ul, declaration) }
export function Var<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.var, declaration) }
export function Video<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLVideoElement, M>>): ReactiveTreeNode<El<HTMLVideoElement, M>> { return ReactiveTree.declare(HtmlTags.video, declaration) }
export function Wbr<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> { return ReactiveTree.declare(HtmlTags.wbr, declaration) }

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
