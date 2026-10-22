// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2026 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, ReactiveTreeNodeDesc, describe } from "reactronic"
import { El, ElKind } from "../core/El.js"
import { HtmlDriver } from "../core/WebDriver.js"

export function A<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLAnchorElement, M>>): ReactiveTreeNode<El<HTMLAnchorElement, M>> {
  return describe(A.name, HtmlTags.a, description ?? {})
}

export function Abbr<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Abbr.name, HtmlTags.abbr, description ?? {})
}

export function Address<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Address.name, HtmlTags.address, description ?? {})
}

export function Area<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLAreaElement, M>>): ReactiveTreeNode<El<HTMLAreaElement, M>> {
  return describe(Area.name, HtmlTags.area, description ?? {})
}

export function Article<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Article.name, HtmlTags.article, description ?? {})
}

export function Aside<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Aside.name, HtmlTags.aside, description ?? {})
}

export function Audio<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLAudioElement, M>>): ReactiveTreeNode<El<HTMLAudioElement, M>> {
  return describe(Audio.name, HtmlTags.audio, description ?? {})
}

export function B<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(B.name, HtmlTags.b, description ?? {})
}

export function Base<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLBaseElement, M>>): ReactiveTreeNode<El<HTMLBaseElement, M>> {
  return describe(Base.name, HtmlTags.base, description ?? {})
}

export function Bdi<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Bdi.name, HtmlTags.bdi, description ?? {})
}

export function Bdo<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Bdo.name, HtmlTags.bdo, description ?? {})
}

export function Big<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Big.name, HtmlTags.big, description ?? {})
}

export function BlockQuote<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(BlockQuote.name, HtmlTags.blockquote, description ?? {})
}

export function Body<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLBodyElement, M>>): ReactiveTreeNode<El<HTMLBodyElement, M>> {
  return describe(Body.name, HtmlTags.body, description ?? {})
}

export function BR<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLBRElement, M>>): ReactiveTreeNode<El<HTMLBRElement, M>> {
  return describe(BR.name, HtmlTags.br, description ?? {})
}

export function Button<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLButtonElement, M>>): ReactiveTreeNode<El<HTMLButtonElement, M>> {
  return describe(Button.name, HtmlTags.button, description ?? {})
}

export function Canvas<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLCanvasElement, M>>): ReactiveTreeNode<El<HTMLCanvasElement, M>> {
  return describe(Canvas.name, HtmlTags.canvas, description ?? {})
}

export function Caption<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLTableCaptionElement, M>>): ReactiveTreeNode<El<HTMLTableCaptionElement, M>> {
  return describe(Caption.name, HtmlTags.caption, description ?? {})
}

export function Cite<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Cite.name, HtmlTags.cite, description ?? {})
}

export function Code<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Code.name, HtmlTags.code, description ?? {})
}

export function Col<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLTableColElement, M>>): ReactiveTreeNode<El<HTMLTableColElement, M>> {
  return describe(Col.name, HtmlTags.col, description ?? {})
}

export function ColGroup<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLTableColElement, M>>): ReactiveTreeNode<El<HTMLTableColElement, M>> {
  return describe(ColGroup.name, HtmlTags.colgroup, description ?? {})
}

export function Data<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLDataElement, M>>): ReactiveTreeNode<El<HTMLDataElement, M>> {
  return describe(Data.name, HtmlTags.data, description ?? {})
}

export function DataList<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLDataListElement, M>>): ReactiveTreeNode<El<HTMLDataListElement, M>> {
  return describe(DataList.name, HtmlTags.datalist, description ?? {})
}

export function DD<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(DD.name, HtmlTags.dd, description ?? {})
}

export function Del<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Del.name, HtmlTags.del, description ?? {})
}

export function Details<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Details.name, HtmlTags.details, description ?? {})
}

export function Dfn<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Dfn.name, HtmlTags.dfn, description ?? {})
}

export function Div<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLDivElement, M>>): ReactiveTreeNode<El<HTMLDivElement, M>> {
  return describe(Div.name, HtmlTags.div, description ?? {})
}

export function DL<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLDListElement, M>>): ReactiveTreeNode<El<HTMLDListElement, M>> {
  return describe(DL.name, HtmlTags.dl, description ?? {})
}

export function DT<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(DT.name, HtmlTags.dt, description ?? {})
}

export function EM<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(EM.name, HtmlTags.em, description ?? {})
}

export function Embed<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLEmbedElement, M>>): ReactiveTreeNode<El<HTMLEmbedElement, M>> {
  return describe(Embed.name, HtmlTags.embed, description ?? {})
}

export function FieldSet<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLFieldSetElement, M>>): ReactiveTreeNode<El<HTMLFieldSetElement, M>> {
  return describe(FieldSet.name, HtmlTags.fieldset, description ?? {})
}

export function FigCaption<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(FigCaption.name, HtmlTags.figcaption, description ?? {})
}

export function Figure<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Figure.name, HtmlTags.figure, description ?? {})
}

export function Footer<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Footer.name, HtmlTags.footer, description ?? {})
}

export function Form<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLFormElement, M>>): ReactiveTreeNode<El<HTMLFormElement, M>> {
  return describe(Form.name, HtmlTags.form, description ?? {})
}

export function H1<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>> {
  return describe(H1.name, HtmlTags.h1, description ?? {})
}

export function H2<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>> {
  return describe(H2.name, HtmlTags.h2, description ?? {})
}

export function H3<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>> {
  return describe(H3.name, HtmlTags.h3, description ?? {})
}

export function H4<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>> {
  return describe(H4.name, HtmlTags.h4, description ?? {})
}

export function H5<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>> {
  return describe(H5.name, HtmlTags.h5, description ?? {})
}

export function H6<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>> {
  return describe(H6.name, HtmlTags.h6, description ?? {})
}

export function Head<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLHeadElement, M>>): ReactiveTreeNode<El<HTMLHeadElement, M>> {
  return describe(Head.name, HtmlTags.head, description ?? {})
}

export function Header<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Header.name, HtmlTags.header, description ?? {})
}

export function HGroup<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(HGroup.name, HtmlTags.hgroup, description ?? {})
}

export function HR<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLHRElement, M>>): ReactiveTreeNode<El<HTMLHRElement, M>> {
  return describe(HR.name, HtmlTags.hr, description ?? {})
}

export function Html<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLHtmlElement, M>>): ReactiveTreeNode<El<HTMLHtmlElement, M>> {
  return describe(Html.name, HtmlTags.html, description ?? {})
}

export function I<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(I.name, HtmlTags.i, description ?? {})
}

export function IFrame<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLIFrameElement, M>>): ReactiveTreeNode<El<HTMLIFrameElement, M>> {
  return describe(IFrame.name, HtmlTags.iframe, description ?? {})
}

export function Img<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLImageElement, M>>): ReactiveTreeNode<El<HTMLImageElement, M>> {
  return describe(Img.name, HtmlTags.img, description ?? {})
}

export function Input<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLInputElement, M>>): ReactiveTreeNode<El<HTMLInputElement, M>> {
  return describe(Input.name, HtmlTags.input, description ?? {})
}

export function Ins<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLModElement, M>>): ReactiveTreeNode<El<HTMLModElement, M>> {
  return describe(Ins.name, HtmlTags.ins, description ?? {})
}

export function Kbd<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Kbd.name, HtmlTags.kbd, description ?? {})
}

export function KeyGen<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(KeyGen.name, HtmlTags.keygen, description ?? {})
}

export function Label<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLLabelElement, M>>): ReactiveTreeNode<El<HTMLLabelElement, M>> {
  return describe(Label.name, HtmlTags.label, description ?? {})
}

export function Legend<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLLegendElement, M>>): ReactiveTreeNode<El<HTMLLegendElement, M>> {
  return describe(Legend.name, HtmlTags.legend, description ?? {})
}

export function LI<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLLIElement, M>>): ReactiveTreeNode<El<HTMLLIElement, M>> {
  return describe(LI.name, HtmlTags.li, description ?? {})
}

export function Link<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLLinkElement, M>>): ReactiveTreeNode<El<HTMLLinkElement, M>> {
  return describe(Link.name, HtmlTags.link, description ?? {})
}

export function Main<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Main.name, HtmlTags.main, description ?? {})
}

export function Map<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLMapElement, M>>): ReactiveTreeNode<El<HTMLMapElement, M>> {
  return describe(Map.name, HtmlTags.map, description ?? {})
}

export function Mark<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Mark.name, HtmlTags.mark, description ?? {})
}

export function Menu<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Menu.name, HtmlTags.menu, description ?? {})
}

export function MenuItem<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(MenuItem.name, HtmlTags.menuitem, description ?? {})
}

export function Meta<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLMetaElement, M>>): ReactiveTreeNode<El<HTMLMetaElement, M>> {
  return describe(Meta.name, HtmlTags.meta, description ?? {})
}

export function Meter<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Meter.name, HtmlTags.meter, description ?? {})
}

export function Nav<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Nav.name, HtmlTags.nav, description ?? {})
}

export function NoIndex<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(NoIndex.name, HtmlTags.noindex, description ?? {})
}

export function NoScript<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(NoScript.name, HtmlTags.noscript, description ?? {})
}

export function Obj<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLObjectElement, M>>): ReactiveTreeNode<El<HTMLObjectElement, M>> {
  return describe(Obj.name, HtmlTags.object, description ?? {})
}

export function OL<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLOListElement, M>>): ReactiveTreeNode<El<HTMLOListElement, M>> {
  return describe(OL.name, HtmlTags.ol, description ?? {})
}

export function OptGroup<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLOptGroupElement, M>>): ReactiveTreeNode<El<HTMLOptGroupElement, M>> {
  return describe(OptGroup.name, HtmlTags.optgroup, description ?? {})
}

export function Option<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLOptionElement, M>>): ReactiveTreeNode<El<HTMLOptionElement, M>> {
  return describe(Option.name, HtmlTags.option, description ?? {})
}

export function Output<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Output.name, HtmlTags.output, description ?? {})
}

export function P<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLParagraphElement, M>>): ReactiveTreeNode<El<HTMLParagraphElement, M>> {
  return describe(P.name, HtmlTags.p, description ?? {})
}

export function Param<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Param.name, HtmlTags.param, description ?? {})
}

export function Picture<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Picture.name, HtmlTags.picture, description ?? {})
}

export function Pre<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLPreElement, M>>): ReactiveTreeNode<El<HTMLPreElement, M>> {
  return describe(Pre.name, HtmlTags.pre, description ?? {})
}

export function Progress<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLProgressElement, M>>): ReactiveTreeNode<El<HTMLProgressElement, M>> {
  return describe(Progress.name, HtmlTags.progress, description ?? {})
}

export function Q<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLQuoteElement, M>>): ReactiveTreeNode<El<HTMLQuoteElement, M>> {
  return describe(Q.name, HtmlTags.q, description ?? {})
}

export function RP<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(RP.name, HtmlTags.rp, description ?? {})
}

export function RT<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(RT.name, HtmlTags.rt, description ?? {})
}

export function Ruby<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Ruby.name, HtmlTags.ruby, description ?? {})
}

export function S<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(S.name, HtmlTags.s, description ?? {})
}

export function Samp<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Samp.name, HtmlTags.samp, description ?? {})
}

export function Script<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLScriptElement, M>>): ReactiveTreeNode<El<HTMLScriptElement, M>> {
  return describe(Script.name, HtmlTags.script, description ?? {})
}

export function Section<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Section.name, HtmlTags.section, description ?? {})
}

export function Select<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLSelectElement, M>>): ReactiveTreeNode<El<HTMLSelectElement, M>> {
  return describe(Select.name, HtmlTags.select, description ?? {})
}

export function Small<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Small.name, HtmlTags.small, description ?? {})
}

export function Source<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLSourceElement, M>>): ReactiveTreeNode<El<HTMLSourceElement, M>> {
  return describe(Source.name, HtmlTags.source, description ?? {})
}

export function Span<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLSpanElement, M>>): ReactiveTreeNode<El<HTMLSpanElement, M>> {
  return describe(Span.name, HtmlTags.span, description ?? {})
}

export function Strong<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Strong.name, HtmlTags.strong, description ?? {})
}

export function Style<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLStyleElement, M>>): ReactiveTreeNode<El<HTMLStyleElement, M>> {
  return describe(Style.name, HtmlTags.style, description ?? {})
}

export function Sub<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Sub.name, HtmlTags.sub, description ?? {})
}

export function Summary<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Summary.name, HtmlTags.summary, description ?? {})
}

export function Sup<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Sup.name, HtmlTags.sup, description ?? {})
}

export function Tbl<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLTableElement, M>>): ReactiveTreeNode<El<HTMLTableElement, M>> {
  return describe(Tbl.name, HtmlTags.table, description ?? {})
}

export function Template<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLTemplateElement, M>>): ReactiveTreeNode<El<HTMLTemplateElement, M>> {
  return describe(Template.name, HtmlTags.template, description ?? {})
}

export function TBody<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M>>): ReactiveTreeNode<El<HTMLTableSectionElement, M>> {
  return describe(TBody.name, HtmlTags.tbody, description ?? {})
}

export function TD<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLTableCellElement, M>>): ReactiveTreeNode<El<HTMLTableCellElement, M>> {
  return describe(TD.name, HtmlTags.td, description ?? {})
}

export function TextArea<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLTextAreaElement, M>>): ReactiveTreeNode<El<HTMLTextAreaElement, M>> {
  return describe(TextArea.name, HtmlTags.textarea, description ?? {})
}

export function TFoot<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M>>): ReactiveTreeNode<El<HTMLTableSectionElement, M>> {
  return describe(TFoot.name, HtmlTags.tfoot, description ?? {})
}

export function TH<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLTableCellElement, M>>): ReactiveTreeNode<El<HTMLTableCellElement, M>> {
  return describe(TH.name, HtmlTags.th, description ?? {})
}

export function THead<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M>>): ReactiveTreeNode<El<HTMLTableSectionElement, M>> {
  return describe(THead.name, HtmlTags.thead, description ?? {})
}

export function Time<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Time.name, HtmlTags.time, description ?? {})
}

export function Title<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLTitleElement, M>>): ReactiveTreeNode<El<HTMLTitleElement, M>> {
  return describe(Title.name, HtmlTags.title, description ?? {})
}

export function TR<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLTableRowElement, M>>): ReactiveTreeNode<El<HTMLTableRowElement, M>> {
  return describe(TR.name, HtmlTags.tr, description ?? {})
}

export function Track<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLTrackElement, M>>): ReactiveTreeNode<El<HTMLTrackElement, M>> {
  return describe(Track.name, HtmlTags.track, description ?? {})
}

export function U<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(U.name, HtmlTags.u, description ?? {})
}

export function UL<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLUListElement, M>>): ReactiveTreeNode<El<HTMLUListElement, M>> {
  return describe(UL.name, HtmlTags.ul, description ?? {})
}

export function Var<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Var.name, HtmlTags.var, description ?? {})
}

export function Video<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLVideoElement, M>>): ReactiveTreeNode<El<HTMLVideoElement, M>> {
  return describe(Video.name, HtmlTags.video, description ?? {})
}

export function Wbr<M = unknown>(description?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  return describe(Wbr.name, HtmlTags.wbr, description ?? {})
}


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
