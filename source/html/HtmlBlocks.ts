// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { VBlock, Render, StaticDriver, LayoutKind, BlockArgs } from "../core/api"
import { HtmlDriver, SvgDriver } from "./HtmlDriver"

export function HtmlBody(name: string, render: Render<HTMLElement>): VBlock<HTMLElement> {
  const driver = new StaticDriver(global.document.body, name, LayoutKind.Block)
  return VBlock.claim(name, { reactor: true, render }, driver)
}

export function A<M = unknown, R = void>(name: string, args: BlockArgs<HTMLAnchorElement, M, R>): VBlock<HTMLAnchorElement, M, R> { return VBlock.claim(name, args, HtmlTags.a) }
export function Abbr<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.abbr) }
export function Address<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.address) }
export function Area<M = unknown, R = void>(name: string, args: BlockArgs<HTMLAreaElement, M, R>): VBlock<HTMLAreaElement, M, R> { return VBlock.claim(name, args, HtmlTags.area) }
export function Article<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.article) }
export function Aside<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.aside) }
export function Audio<M = unknown, R = void>(name: string, args: BlockArgs<HTMLAudioElement, M, R>): VBlock<HTMLAudioElement, M, R> { return VBlock.claim(name, args, HtmlTags.audio) }
export function B<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.b) }
export function Base<M = unknown, R = void>(name: string, args: BlockArgs<HTMLBaseElement, M, R>): VBlock<HTMLBaseElement, M, R> { return VBlock.claim(name, args, HtmlTags.base) }
export function Bdi<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.bdi) }
export function Bdo<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.bdo) }
export function Big<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.big) }
export function BlockQuote<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.blockquote) }
export function Body<M = unknown, R = void>(name: string, args: BlockArgs<HTMLBodyElement, M, R>): VBlock<HTMLBodyElement, M, R> { return VBlock.claim(name, args, HtmlTags.body) }
export function BR<M = unknown, R = void>(name: string, args: BlockArgs<HTMLBRElement, M, R>): VBlock<HTMLBRElement, M, R> { return VBlock.claim(name, args, HtmlTags.br) }
export function Button<M = unknown, R = void>(name: string, args: BlockArgs<HTMLButtonElement, M, R>): VBlock<HTMLButtonElement, M, R> { return VBlock.claim(name, args, HtmlTags.button) }
export function Canvas<M = unknown, R = void>(name: string, args: BlockArgs<HTMLCanvasElement, M, R>): VBlock<HTMLCanvasElement, M, R> { return VBlock.claim(name, args, HtmlTags.canvas) }
export function Caption<M = unknown, R = void>(name: string, args: BlockArgs<HTMLTableCaptionElement, M, R>): VBlock<HTMLTableCaptionElement, M, R> { return VBlock.claim(name, args, HtmlTags.caption) }
export function Cite<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.cite) }
export function Code<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.code) }
export function Col<M = unknown, R = void>(name: string, args: BlockArgs<HTMLTableColElement, M, R>): VBlock<HTMLTableColElement, M, R> { return VBlock.claim(name, args, HtmlTags.col) }
export function ColGroup<M = unknown, R = void>(name: string, args: BlockArgs<HTMLTableColElement, M, R>): VBlock<HTMLTableColElement, M, R> { return VBlock.claim(name, args, HtmlTags.colgroup) }
export function Data<M = unknown, R = void>(name: string, args: BlockArgs<HTMLDataElement, M, R>): VBlock<HTMLDataElement, M, R> { return VBlock.claim(name, args, HtmlTags.data) }
export function DataList<M = unknown, R = void>(name: string, args: BlockArgs<HTMLDataListElement, M, R>): VBlock<HTMLDataListElement, M, R> { return VBlock.claim(name, args, HtmlTags.datalist) }
export function DD<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.dd) }
export function Del<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.del) }
export function Details<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.details) }
export function Dfn<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.dfn) }
export function Div<M = unknown, R = void>(name: string, args: BlockArgs<HTMLDivElement, M, R>): VBlock<HTMLDivElement, M, R> { return VBlock.claim(name, args, HtmlTags.div) }
export function DL<M = unknown, R = void>(name: string, args: BlockArgs<HTMLDListElement, M, R>): VBlock<HTMLDListElement, M, R> { return VBlock.claim(name, args, HtmlTags.dl) }
export function DT<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.dt) }
export function EM<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.em) }
export function Embed<M = unknown, R = void>(name: string, args: BlockArgs<HTMLEmbedElement, M, R>): VBlock<HTMLEmbedElement, M, R> { return VBlock.claim(name, args, HtmlTags.embed) }
export function FieldSet<M = unknown, R = void>(name: string, args: BlockArgs<HTMLFieldSetElement, M, R>): VBlock<HTMLFieldSetElement, M, R> { return VBlock.claim(name, args, HtmlTags.fieldset) }
export function FigCaption<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.figcaption) }
export function Figure<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.figure) }
export function Footer<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.footer) }
export function Form<M = unknown, R = void>(name: string, args: BlockArgs<HTMLFormElement, M, R>): VBlock<HTMLFormElement, M, R> { return VBlock.claim(name, args, HtmlTags.form) }
export function H1<M = unknown, R = void>(name: string, args: BlockArgs<HTMLHeadingElement, M, R>): VBlock<HTMLHeadingElement, M, R> { return VBlock.claim(name, args, HtmlTags.h1) }
export function H2<M = unknown, R = void>(name: string, args: BlockArgs<HTMLHeadingElement, M, R>): VBlock<HTMLHeadingElement, M, R> { return VBlock.claim(name, args, HtmlTags.h2) }
export function H3<M = unknown, R = void>(name: string, args: BlockArgs<HTMLHeadingElement, M, R>): VBlock<HTMLHeadingElement, M, R> { return VBlock.claim(name, args, HtmlTags.h3) }
export function H4<M = unknown, R = void>(name: string, args: BlockArgs<HTMLHeadingElement, M, R>): VBlock<HTMLHeadingElement, M, R> { return VBlock.claim(name, args, HtmlTags.h4) }
export function H5<M = unknown, R = void>(name: string, args: BlockArgs<HTMLHeadingElement, M, R>): VBlock<HTMLHeadingElement, M, R> { return VBlock.claim(name, args, HtmlTags.h5) }
export function H6<M = unknown, R = void>(name: string, args: BlockArgs<HTMLHeadingElement, M, R>): VBlock<HTMLHeadingElement, M, R> { return VBlock.claim(name, args, HtmlTags.h6) }
export function Head<M = unknown, R = void>(name: string, args: BlockArgs<HTMLHeadElement, M, R>): VBlock<HTMLHeadElement, M, R> { return VBlock.claim(name, args, HtmlTags.head) }
export function Header<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.header) }
export function HGroup<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.hgroup) }
export function HR<M = unknown, R = void>(name: string, args: BlockArgs<HTMLHRElement, M, R>): VBlock<HTMLHRElement, M, R> { return VBlock.claim(name, args, HtmlTags.hr) }
export function Html<M = unknown, R = void>(name: string, args: BlockArgs<HTMLHtmlElement, M, R>): VBlock<HTMLHtmlElement, M, R> { return VBlock.claim(name, args, HtmlTags.html) }
export function I<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.i) }
export function IFrame<M = unknown, R = void>(name: string, args: BlockArgs<HTMLIFrameElement, M, R>): VBlock<HTMLIFrameElement, M, R> { return VBlock.claim(name, args, HtmlTags.iframe) }
export function Img<M = unknown, R = void>(name: string, args: BlockArgs<HTMLImageElement, M, R>): VBlock<HTMLImageElement, M, R> { return VBlock.claim(name, args, HtmlTags.img) }
export function Input<M = unknown, R = void>(name: string, args: BlockArgs<HTMLInputElement, M, R>): VBlock<HTMLInputElement, M, R> { return VBlock.claim(name, args, HtmlTags.input) }
export function Ins<M = unknown, R = void>(name: string, args: BlockArgs<HTMLModElement, M, R>): VBlock<HTMLModElement, M, R> { return VBlock.claim(name, args, HtmlTags.ins) }
export function Kbd<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.kbd) }
export function KeyGen<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.keygen) }
export function Label<M = unknown, R = void>(name: string, args: BlockArgs<HTMLLabelElement, M, R>): VBlock<HTMLLabelElement, M, R> { return VBlock.claim(name, args, HtmlTags.label) }
export function Legend<M = unknown, R = void>(name: string, args: BlockArgs<HTMLLegendElement, M, R>): VBlock<HTMLLegendElement, M, R> { return VBlock.claim(name, args, HtmlTags.legend) }
export function LI<M = unknown, R = void>(name: string, args: BlockArgs<HTMLLIElement, M, R>, renderer: Render<HTMLLIElement, M, R>): VBlock<HTMLLIElement, M, R> { return VBlock.claim(name, args, HtmlTags.li) }
export function Link<M = unknown, R = void>(name: string, args: BlockArgs<HTMLLinkElement, M, R>, renderer: Render<HTMLLinkElement, M, R>): VBlock<HTMLLinkElement, M, R> { return VBlock.claim(name, args, HtmlTags.link) }
export function Main<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.main) }
export function Map<M = unknown, R = void>(name: string, args: BlockArgs<HTMLMapElement, M, R>): VBlock<HTMLMapElement, M, R> { return VBlock.claim(name, args, HtmlTags.map) }
export function Mark<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.mark) }
export function Menu<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.menu) }
export function MenuItem<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.menuitem) }
export function Meta<M = unknown, R = void>(name: string, args: BlockArgs<HTMLMetaElement, M, R>, renderer: Render<HTMLMetaElement, M, R>): VBlock<HTMLMetaElement, M, R> { return VBlock.claim(name, args, HtmlTags.meta) }
export function Meter<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.meter) }
export function Nav<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.nav) }
export function NoIndex<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.noindex) }
export function NoScript<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.noscript) }
export function Obj<M = unknown, R = void>(name: string, args: BlockArgs<HTMLObjectElement, M, R>): VBlock<HTMLObjectElement, M, R> { return VBlock.claim(name, args, HtmlTags.object) }
export function OL<M = unknown, R = void>(name: string, args: BlockArgs<HTMLOListElement, M, R>): VBlock<HTMLOListElement, M, R> { return VBlock.claim(name, args, HtmlTags.ol) }
export function OptGroup<M = unknown, R = void>(name: string, args: BlockArgs<HTMLOptGroupElement, M, R>): VBlock<HTMLOptGroupElement, M, R> { return VBlock.claim(name, args, HtmlTags.optgroup) }
export function Option<M = unknown, R = void>(name: string, args: BlockArgs<HTMLOptionElement, M, R>): VBlock<HTMLOptionElement, M, R> { return VBlock.claim(name, args, HtmlTags.option) }
export function Output<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.output) }
export function P<M = unknown, R = void>(name: string, args: BlockArgs<HTMLParagraphElement, M, R>): VBlock<HTMLParagraphElement, M, R> { return VBlock.claim(name, args, HtmlTags.p) }
export function Param<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.param) }
export function Picture<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.picture) }
export function Pre<M = unknown, R = void>(name: string, args: BlockArgs<HTMLPreElement, M, R>): VBlock<HTMLPreElement, M, R> { return VBlock.claim(name, args, HtmlTags.pre) }
export function Progress<M = unknown, R = void>(name: string, args: BlockArgs<HTMLProgressElement, M, R>): VBlock<HTMLProgressElement, M, R> { return VBlock.claim(name, args, HtmlTags.progress) }
export function Q<M = unknown, R = void>(name: string, args: BlockArgs<HTMLQuoteElement, M, R>): VBlock<HTMLQuoteElement, M, R> { return VBlock.claim(name, args, HtmlTags.q) }
export function RP<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.rp) }
export function RT<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.rt) }
export function Ruby<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.ruby) }
export function S<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.s) }
export function Samp<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.samp) }
export function Script<M = unknown, R = void>(name: string, args: BlockArgs<HTMLScriptElement, M, R>): VBlock<HTMLScriptElement, M, R> { return VBlock.claim(name, args, HtmlTags.script) }
export function Section<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.section) }
export function Select<M = unknown, R = void>(name: string, args: BlockArgs<HTMLSelectElement, M, R>): VBlock<HTMLSelectElement, M, R> { return VBlock.claim(name, args, HtmlTags.select) }
export function Small<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.small) }
export function Source<M = unknown, R = void>(name: string, args: BlockArgs<HTMLSourceElement, M, R>): VBlock<HTMLSourceElement, M, R> { return VBlock.claim(name, args, HtmlTags.source) }
export function Span<M = unknown, R = void>(name: string, args: BlockArgs<HTMLSpanElement, M, R>): VBlock<HTMLSpanElement, M, R> { return VBlock.claim(name, args, HtmlTags.span) }
export function Strong<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.strong) }
export function Style<M = unknown, R = void>(name: string, args: BlockArgs<HTMLStyleElement, M, R>): VBlock<HTMLStyleElement, M, R> { return VBlock.claim(name, args, HtmlTags.style) }
export function Sub<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.sub) }
export function Summary<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.summary) }
export function Sup<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.sup) }
export function Table<M = unknown, R = void>(name: string, args: BlockArgs<HTMLTableElement, M, R>): VBlock<HTMLTableElement, M, R> { return VBlock.claim(name, args, HtmlTags.table) }
export function Template<M = unknown, R = void>(name: string, args: BlockArgs<HTMLTemplateElement, M, R>): VBlock<HTMLTemplateElement, M, R> { return VBlock.claim(name, args, HtmlTags.template) }
export function TBody<M = unknown, R = void>(name: string, args: BlockArgs<HTMLTableSectionElement, M, R>): VBlock<HTMLTableSectionElement, M, R> { return VBlock.claim(name, args, HtmlTags.tbody) }
export function TD<M = unknown, R = void>(name: string, args: BlockArgs<HTMLTableCellElement, M, R>): VBlock<HTMLTableCellElement, M, R> { return VBlock.claim(name, args, HtmlTags.td) }
export function TextArea<M = unknown, R = void>(name: string, args: BlockArgs<HTMLTextAreaElement, M, R>): VBlock<HTMLTextAreaElement, M, R> { return VBlock.claim(name, args, HtmlTags.textarea) }
export function TFoot<M = unknown, R = void>(name: string, args: BlockArgs<HTMLTableSectionElement, M, R>): VBlock<HTMLTableSectionElement, M, R> { return VBlock.claim(name, args, HtmlTags.tfoot) }
export function TH<M = unknown, R = void>(name: string, args: BlockArgs<HTMLTableCellElement, M, R>): VBlock<HTMLTableCellElement, M, R> { return VBlock.claim(name, args, HtmlTags.th) }
export function THead<M = unknown, R = void>(name: string, args: BlockArgs<HTMLTableSectionElement, M, R>): VBlock<HTMLTableSectionElement, M, R> { return VBlock.claim(name, args, HtmlTags.thead) }
export function Time<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.time) }
export function Title<M = unknown, R = void>(name: string, args: BlockArgs<HTMLTitleElement, M, R>): VBlock<HTMLTitleElement, M, R> { return VBlock.claim(name, args, HtmlTags.title) }
export function TR<M = unknown, R = void>(name: string, args: BlockArgs<HTMLTableRowElement, M, R>): VBlock<HTMLTableRowElement, M, R> { return VBlock.claim(name, args, HtmlTags.tr) }
export function Track<M = unknown, R = void>(name: string, args: BlockArgs<HTMLTrackElement, M, R>): VBlock<HTMLTrackElement, M, R> { return VBlock.claim(name, args, HtmlTags.track) }
export function U<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.u) }
export function UL<M = unknown, R = void>(name: string, args: BlockArgs<HTMLUListElement, M, R>): VBlock<HTMLUListElement, M, R> { return VBlock.claim(name, args, HtmlTags.ul) }
export function Var<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.var) }
export function Video<M = unknown, R = void>(name: string, args: BlockArgs<HTMLVideoElement, M, R>): VBlock<HTMLVideoElement, M, R> { return VBlock.claim(name, args, HtmlTags.video) }
export function Wbr<M = unknown, R = void>(name: string, args: BlockArgs<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(name, args, HtmlTags.wbr) }

export function Svg<M = unknown, R = void>(name: string, args: BlockArgs<SVGSVGElement, M, R>): VBlock<SVGSVGElement, M, R> { return VBlock.claim(name, args, SvgTags.svg) }
export function SvgA<M = unknown, R = void>(name: string, args: BlockArgs<SVGAElement, M, R>): VBlock<SVGAElement, M, R> { return VBlock.claim(name, args, SvgTags.a) }
export function Animate<M = unknown, R = void>(name: string, args: BlockArgs<SVGAnimateElement, M, R>): VBlock<SVGAnimateElement, M, R> { return VBlock.claim(name, args, SvgTags.animate) }
export function AnimateMotion<M = unknown, R = void>(name: string, args: BlockArgs<SVGAnimateMotionElement, M, R>): VBlock<SVGAnimateMotionElement, M, R> { return VBlock.claim(name, args, SvgTags.animateMotion) }
export function AnimateTransform<M = unknown, R = void>(name: string, args: BlockArgs<SVGAnimateTransformElement, M, R>): VBlock<SVGAnimateTransformElement, M, R> { return VBlock.claim(name, args, SvgTags.animateTransform) }
export function Circle<M = unknown, R = void>(name: string, args: BlockArgs<SVGCircleElement, M, R>): VBlock<SVGCircleElement, M, R> { return VBlock.claim(name, args, SvgTags.circle) }
export function ClipPath<M = unknown, R = void>(name: string, args: BlockArgs<SVGClipPathElement, M, R>): VBlock<SVGClipPathElement, M, R> { return VBlock.claim(name, args, SvgTags.clipPath) }
export function Defs<M = unknown, R = void>(name: string, args: BlockArgs<SVGDefsElement, M, R>): VBlock<SVGDefsElement, M, R> { return VBlock.claim(name, args, SvgTags.defs) }
export function Desc<M = unknown, R = void>(name: string, args: BlockArgs<SVGDescElement, M, R>): VBlock<SVGDescElement, M, R> { return VBlock.claim(name, args, SvgTags.desc) }
export function Ellipse<M = unknown, R = void>(name: string, args: BlockArgs<SVGEllipseElement, M, R>): VBlock<SVGEllipseElement, M, R> { return VBlock.claim(name, args, SvgTags.ellipse) }
export function FeBlend<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEBlendElement, M, R>): VBlock<SVGFEBlendElement, M, R> { return VBlock.claim(name, args, SvgTags.feBlend) }
export function FeColorMatrix<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEColorMatrixElement, M, R>): VBlock<SVGFEColorMatrixElement, M, R> { return VBlock.claim(name, args, SvgTags.feColorMatrix) }
export function FeComponentTransfer<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEComponentTransferElement, M, R>): VBlock<SVGFEComponentTransferElement, M, R> { return VBlock.claim(name, args, SvgTags.feComponentTransfer) }
export function FeComposite<M = unknown, R = void>(name: string, args: BlockArgs<SVGFECompositeElement, M, R>): VBlock<SVGFECompositeElement, M, R> { return VBlock.claim(name, args, SvgTags.feComposite) }
export function FeConvolveMatrix<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEConvolveMatrixElement, M, R>): VBlock<SVGFEConvolveMatrixElement, M, R> { return VBlock.claim(name, args, SvgTags.feConvolveMatrix) }
export function FeDiffuseLighting<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEDiffuseLightingElement, M, R>): VBlock<SVGFEDiffuseLightingElement, M, R> { return VBlock.claim(name, args, SvgTags.feDiffuseLighting) }
export function FeDisplacementMap<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEDisplacementMapElement, M, R>): VBlock<SVGFEDisplacementMapElement, M, R> { return VBlock.claim(name, args, SvgTags.feDisplacementMap) }
export function FeDistantLight<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEDistantLightElement, M, R>): VBlock<SVGFEDistantLightElement, M, R> { return VBlock.claim(name, args, SvgTags.feDistantLight) }
export function FeDropShadow<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEDropShadowElement, M, R>): VBlock<SVGFEDropShadowElement, M, R> { return VBlock.claim(name, args, SvgTags.feDropShadow) }
export function FeFlood<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEFloodElement, M, R>): VBlock<SVGFEFloodElement, M, R> { return VBlock.claim(name, args, SvgTags.feFlood) }
export function FeFuncA<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEFuncAElement, M, R>): VBlock<SVGFEFuncAElement, M, R> { return VBlock.claim(name, args, SvgTags.feFuncA) }
export function FeFuncB<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEFuncBElement, M, R>): VBlock<SVGFEFuncBElement, M, R> { return VBlock.claim(name, args, SvgTags.feFuncB) }
export function FeFuncG<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEFuncGElement, M, R>): VBlock<SVGFEFuncGElement, M, R> { return VBlock.claim(name, args, SvgTags.feFuncG) }
export function FeFuncR<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEFuncRElement, M, R>): VBlock<SVGFEFuncRElement, M, R> { return VBlock.claim(name, args, SvgTags.feFuncR) }
export function FeGaussianBlur<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEGaussianBlurElement, M, R>): VBlock<SVGFEGaussianBlurElement, M, R> { return VBlock.claim(name, args, SvgTags.feGaussianBlur) }
export function FeImage<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEImageElement, M, R>): VBlock<SVGFEImageElement, M, R> { return VBlock.claim(name, args, SvgTags.feImage) }
export function FeMerge<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEMergeElement, M, R>): VBlock<SVGFEMergeElement, M, R> { return VBlock.claim(name, args, SvgTags.feMerge) }
export function FeMergeNode<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEMergeNodeElement, M, R>): VBlock<SVGFEMergeNodeElement, M, R> { return VBlock.claim(name, args, SvgTags.feMergeNode) }
export function FeMorphology<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEMorphologyElement, M, R>): VBlock<SVGFEMorphologyElement, M, R> { return VBlock.claim(name, args, SvgTags.feMorphology) }
export function FeOffset<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEOffsetElement, M, R>): VBlock<SVGFEOffsetElement, M, R> { return VBlock.claim(name, args, SvgTags.feOffset) }
export function FePointLight<M = unknown, R = void>(name: string, args: BlockArgs<SVGFEPointLightElement, M, R>): VBlock<SVGFEPointLightElement, M, R> { return VBlock.claim(name, args, SvgTags.fePointLight) }
export function FeSpecularLighting<M = unknown, R = void>(name: string, args: BlockArgs<SVGFESpecularLightingElement, M, R>): VBlock<SVGFESpecularLightingElement, M, R> { return VBlock.claim(name, args, SvgTags.feSpecularLighting) }
export function FeSpotLight<M = unknown, R = void>(name: string, args: BlockArgs<SVGFESpotLightElement, M, R>): VBlock<SVGFESpotLightElement, M, R> { return VBlock.claim(name, args, SvgTags.feSpotLight) }
export function FeTile<M = unknown, R = void>(name: string, args: BlockArgs<SVGFETileElement, M, R>): VBlock<SVGFETileElement, M, R> { return VBlock.claim(name, args, SvgTags.feTile) }
export function FeTurbulence<M = unknown, R = void>(name: string, args: BlockArgs<SVGFETurbulenceElement, M, R>): VBlock<SVGFETurbulenceElement, M, R> { return VBlock.claim(name, args, SvgTags.feTurbulence) }
export function Filter<M = unknown, R = void>(name: string, args: BlockArgs<SVGFilterElement, M, R>): VBlock<SVGFilterElement, M, R> { return VBlock.claim(name, args, SvgTags.filter) }
export function ForeignObject<M = unknown, R = void>(name: string, args: BlockArgs<SVGForeignObjectElement, M, R>): VBlock<SVGForeignObjectElement, M, R> { return VBlock.claim(name, args, SvgTags.foreignObject) }
export function G<M = unknown, R = void>(name: string, args: BlockArgs<SVGGElement, M, R>): VBlock<SVGGElement, M, R> { return VBlock.claim(name, args, SvgTags.g) }
export function SvgImage<M = unknown, R = void>(name: string, args: BlockArgs<SVGImageElement, M, R>): VBlock<SVGImageElement, M, R> { return VBlock.claim(name, args, SvgTags.image) }
export function Line<M = unknown, R = void>(name: string, args: BlockArgs<SVGLineElement, M, R>): VBlock<SVGLineElement, M, R> { return VBlock.claim(name, args, SvgTags.line) }
export function LinearGradient<M = unknown, R = void>(name: string, args: BlockArgs<SVGLinearGradientElement, M, R>): VBlock<SVGLinearGradientElement, M, R> { return VBlock.claim(name, args, SvgTags.linearGradient) }
export function Marker<M = unknown, R = void>(name: string, args: BlockArgs<SVGMarkerElement, M, R>): VBlock<SVGMarkerElement, M, R> { return VBlock.claim(name, args, SvgTags.marker) }
export function Mask<M = unknown, R = void>(name: string, args: BlockArgs<SVGMaskElement, M, R>): VBlock<SVGMaskElement, M, R> { return VBlock.claim(name, args, SvgTags.mask) }
export function MetaData<M = unknown, R = void>(name: string, args: BlockArgs<SVGMetadataElement, M, R>): VBlock<SVGMetadataElement, M, R> { return VBlock.claim(name, args, SvgTags.metadata) }
export function MPath<M = unknown, R = void>(name: string, args: BlockArgs<SVGElement, M, R>): VBlock<SVGElement, M, R> { return VBlock.claim(name, args, SvgTags.mpath) }
export function Path<M = unknown, R = void>(name: string, args: BlockArgs<SVGPathElement, M, R>): VBlock<SVGPathElement, M, R> { return VBlock.claim(name, args, SvgTags.path) }
export function Pattern<M = unknown, R = void>(name: string, args: BlockArgs<SVGPatternElement, M, R>): VBlock<SVGPatternElement, M, R> { return VBlock.claim(name, args, SvgTags.pattern) }
export function Polygon<M = unknown, R = void>(name: string, args: BlockArgs<SVGPolygonElement, M, R>): VBlock<SVGPolygonElement, M, R> { return VBlock.claim(name, args, SvgTags.polygon) }
export function PolyLine<M = unknown, R = void>(name: string, args: BlockArgs<SVGPolylineElement, M, R>): VBlock<SVGPolylineElement, M, R> { return VBlock.claim(name, args, SvgTags.polyline) }
export function RadialGradient<M = unknown, R = void>(name: string, args: BlockArgs<SVGRadialGradientElement, M, R>): VBlock<SVGRadialGradientElement, M, R> { return VBlock.claim(name, args, SvgTags.radialGradient) }
export function Rect<M = unknown, R = void>(name: string, args: BlockArgs<SVGRectElement, M, R>): VBlock<SVGRectElement, M, R> { return VBlock.claim(name, args, SvgTags.rect) }
export function Stop<M = unknown, R = void>(name: string, args: BlockArgs<SVGStopElement, M, R>): VBlock<SVGStopElement, M, R> { return VBlock.claim(name, args, SvgTags.stop) }
export function SvgSwitch<M = unknown, R = void>(name: string, args: BlockArgs<SVGSwitchElement, M, R>): VBlock<SVGSwitchElement, M, R> { return VBlock.claim(name, args, SvgTags.switch) }
export function Symbol<M = unknown, R = void>(name: string, args: BlockArgs<SVGSymbolElement, M, R>): VBlock<SVGSymbolElement, M, R> { return VBlock.claim(name, args, SvgTags.symbol) }
export function Text<M = unknown, R = void>(name: string, args: BlockArgs<SVGTextElement, M, R>): VBlock<SVGTextElement, M, R> { return VBlock.claim(name, args, SvgTags.text) }
export function TextPath<M = unknown, R = void>(name: string, args: BlockArgs<SVGTextPathElement, M, R>): VBlock<SVGTextPathElement, M, R> { return VBlock.claim(name, args, SvgTags.textPath) }
export function TSpan<M = unknown, R = void>(name: string, args: BlockArgs<SVGTSpanElement, M, R>): VBlock<SVGTSpanElement, M, R> { return VBlock.claim(name, args, SvgTags.tspan) }
export function Use<M = unknown, R = void>(name: string, args: BlockArgs<SVGUseElement, M, R>): VBlock<SVGUseElement, M, R> { return VBlock.claim(name, args, SvgTags.use) }
export function View<M = unknown, R = void>(name: string, args: BlockArgs<SVGViewElement, M, R>): VBlock<SVGViewElement, M, R> { return VBlock.claim(name, args, SvgTags.view) }

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
