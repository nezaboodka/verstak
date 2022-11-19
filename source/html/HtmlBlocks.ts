// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { VBlock, StaticDriver, LayoutKind, BlockBody } from "../core/api"
import { HtmlDriver, SvgDriver } from "./HtmlDriver"

export function HtmlBody(body: BlockBody<HTMLElement>): VBlock<HTMLElement> {
  const driver = new StaticDriver(global.document.body, "HtmlBody", LayoutKind.Block)
  return VBlock.claim(driver, body)
}

export function A<M = unknown, R = void>(body: BlockBody<HTMLAnchorElement, M, R>): VBlock<HTMLAnchorElement, M, R> { return VBlock.claim(HtmlTags.a, body) }
export function Abbr<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.abbr, body) }
export function Address<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.address, body) }
export function Area<M = unknown, R = void>(body: BlockBody<HTMLAreaElement, M, R>): VBlock<HTMLAreaElement, M, R> { return VBlock.claim(HtmlTags.area, body) }
export function Article<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.article, body) }
export function Aside<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.aside, body) }
export function Audio<M = unknown, R = void>(body: BlockBody<HTMLAudioElement, M, R>): VBlock<HTMLAudioElement, M, R> { return VBlock.claim(HtmlTags.audio, body) }
export function B<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.b, body) }
export function Base<M = unknown, R = void>(body: BlockBody<HTMLBaseElement, M, R>): VBlock<HTMLBaseElement, M, R> { return VBlock.claim(HtmlTags.base, body) }
export function Bdi<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.bdi, body) }
export function Bdo<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.bdo, body) }
export function Big<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.big, body) }
export function BlockQuote<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.blockquote, body) }
export function Body<M = unknown, R = void>(body: BlockBody<HTMLBodyElement, M, R>): VBlock<HTMLBodyElement, M, R> { return VBlock.claim(HtmlTags.body, body) }
export function BR<M = unknown, R = void>(body: BlockBody<HTMLBRElement, M, R>): VBlock<HTMLBRElement, M, R> { return VBlock.claim(HtmlTags.br, body) }
export function Button<M = unknown, R = void>(body: BlockBody<HTMLButtonElement, M, R>): VBlock<HTMLButtonElement, M, R> { return VBlock.claim(HtmlTags.button, body) }
export function Canvas<M = unknown, R = void>(body: BlockBody<HTMLCanvasElement, M, R>): VBlock<HTMLCanvasElement, M, R> { return VBlock.claim(HtmlTags.canvas, body) }
export function Caption<M = unknown, R = void>(body: BlockBody<HTMLTableCaptionElement, M, R>): VBlock<HTMLTableCaptionElement, M, R> { return VBlock.claim(HtmlTags.caption, body) }
export function Cite<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.cite, body) }
export function Code<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.code, body) }
export function Col<M = unknown, R = void>(body: BlockBody<HTMLTableColElement, M, R>): VBlock<HTMLTableColElement, M, R> { return VBlock.claim(HtmlTags.col, body) }
export function ColGroup<M = unknown, R = void>(body: BlockBody<HTMLTableColElement, M, R>): VBlock<HTMLTableColElement, M, R> { return VBlock.claim(HtmlTags.colgroup, body) }
export function Data<M = unknown, R = void>(body: BlockBody<HTMLDataElement, M, R>): VBlock<HTMLDataElement, M, R> { return VBlock.claim(HtmlTags.data, body) }
export function DataList<M = unknown, R = void>(body: BlockBody<HTMLDataListElement, M, R>): VBlock<HTMLDataListElement, M, R> { return VBlock.claim(HtmlTags.datalist, body) }
export function DD<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.dd, body) }
export function Del<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.del, body) }
export function Details<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.details, body) }
export function Dfn<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.dfn, body) }
export function Div<M = unknown, R = void>(body: BlockBody<HTMLDivElement, M, R>): VBlock<HTMLDivElement, M, R> { return VBlock.claim(HtmlTags.div, body) }
export function DL<M = unknown, R = void>(body: BlockBody<HTMLDListElement, M, R>): VBlock<HTMLDListElement, M, R> { return VBlock.claim(HtmlTags.dl, body) }
export function DT<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.dt, body) }
export function EM<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.em, body) }
export function Embed<M = unknown, R = void>(body: BlockBody<HTMLEmbedElement, M, R>): VBlock<HTMLEmbedElement, M, R> { return VBlock.claim(HtmlTags.embed, body) }
export function FieldSet<M = unknown, R = void>(body: BlockBody<HTMLFieldSetElement, M, R>): VBlock<HTMLFieldSetElement, M, R> { return VBlock.claim(HtmlTags.fieldset, body) }
export function FigCaption<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.figcaption, body) }
export function Figure<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.figure, body) }
export function Footer<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.footer, body) }
export function Form<M = unknown, R = void>(body: BlockBody<HTMLFormElement, M, R>): VBlock<HTMLFormElement, M, R> { return VBlock.claim(HtmlTags.form, body) }
export function H1<M = unknown, R = void>(body: BlockBody<HTMLHeadingElement, M, R>): VBlock<HTMLHeadingElement, M, R> { return VBlock.claim(HtmlTags.h1, body) }
export function H2<M = unknown, R = void>(body: BlockBody<HTMLHeadingElement, M, R>): VBlock<HTMLHeadingElement, M, R> { return VBlock.claim(HtmlTags.h2, body) }
export function H3<M = unknown, R = void>(body: BlockBody<HTMLHeadingElement, M, R>): VBlock<HTMLHeadingElement, M, R> { return VBlock.claim(HtmlTags.h3, body) }
export function H4<M = unknown, R = void>(body: BlockBody<HTMLHeadingElement, M, R>): VBlock<HTMLHeadingElement, M, R> { return VBlock.claim(HtmlTags.h4, body) }
export function H5<M = unknown, R = void>(body: BlockBody<HTMLHeadingElement, M, R>): VBlock<HTMLHeadingElement, M, R> { return VBlock.claim(HtmlTags.h5, body) }
export function H6<M = unknown, R = void>(body: BlockBody<HTMLHeadingElement, M, R>): VBlock<HTMLHeadingElement, M, R> { return VBlock.claim(HtmlTags.h6, body) }
export function Head<M = unknown, R = void>(body: BlockBody<HTMLHeadElement, M, R>): VBlock<HTMLHeadElement, M, R> { return VBlock.claim(HtmlTags.head, body) }
export function Header<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.header, body) }
export function HGroup<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.hgroup, body) }
export function HR<M = unknown, R = void>(body: BlockBody<HTMLHRElement, M, R>): VBlock<HTMLHRElement, M, R> { return VBlock.claim(HtmlTags.hr, body) }
export function Html<M = unknown, R = void>(body: BlockBody<HTMLHtmlElement, M, R>): VBlock<HTMLHtmlElement, M, R> { return VBlock.claim(HtmlTags.html, body) }
export function I<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.i, body) }
export function IFrame<M = unknown, R = void>(body: BlockBody<HTMLIFrameElement, M, R>): VBlock<HTMLIFrameElement, M, R> { return VBlock.claim(HtmlTags.iframe, body) }
export function Img<M = unknown, R = void>(body: BlockBody<HTMLImageElement, M, R>): VBlock<HTMLImageElement, M, R> { return VBlock.claim(HtmlTags.img, body) }
export function Input<M = unknown, R = void>(body: BlockBody<HTMLInputElement, M, R>): VBlock<HTMLInputElement, M, R> { return VBlock.claim(HtmlTags.input, body) }
export function Ins<M = unknown, R = void>(body: BlockBody<HTMLModElement, M, R>): VBlock<HTMLModElement, M, R> { return VBlock.claim(HtmlTags.ins, body) }
export function Kbd<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.kbd, body) }
export function KeyGen<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.keygen, body) }
export function Label<M = unknown, R = void>(body: BlockBody<HTMLLabelElement, M, R>): VBlock<HTMLLabelElement, M, R> { return VBlock.claim(HtmlTags.label, body) }
export function Legend<M = unknown, R = void>(body: BlockBody<HTMLLegendElement, M, R>): VBlock<HTMLLegendElement, M, R> { return VBlock.claim(HtmlTags.legend, body) }
export function LI<M = unknown, R = void>(body: BlockBody<HTMLLIElement, M, R>): VBlock<HTMLLIElement, M, R> { return VBlock.claim(HtmlTags.li, body) }
export function Link<M = unknown, R = void>(body: BlockBody<HTMLLinkElement, M, R>): VBlock<HTMLLinkElement, M, R> { return VBlock.claim(HtmlTags.link, body) }
export function Main<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.main, body) }
export function Map<M = unknown, R = void>(body: BlockBody<HTMLMapElement, M, R>): VBlock<HTMLMapElement, M, R> { return VBlock.claim(HtmlTags.map, body) }
export function Mark<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.mark, body) }
export function Menu<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.menu, body) }
export function MenuItem<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.menuitem, body) }
export function Meta<M = unknown, R = void>(body: BlockBody<HTMLMetaElement, M, R>): VBlock<HTMLMetaElement, M, R> { return VBlock.claim(HtmlTags.meta, body) }
export function Meter<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.meter, body) }
export function Nav<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.nav, body) }
export function NoIndex<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.noindex, body) }
export function NoScript<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.noscript, body) }
export function Obj<M = unknown, R = void>(body: BlockBody<HTMLObjectElement, M, R>): VBlock<HTMLObjectElement, M, R> { return VBlock.claim(HtmlTags.object, body) }
export function OL<M = unknown, R = void>(body: BlockBody<HTMLOListElement, M, R>): VBlock<HTMLOListElement, M, R> { return VBlock.claim(HtmlTags.ol, body) }
export function OptGroup<M = unknown, R = void>(body: BlockBody<HTMLOptGroupElement, M, R>): VBlock<HTMLOptGroupElement, M, R> { return VBlock.claim(HtmlTags.optgroup, body) }
export function Option<M = unknown, R = void>(body: BlockBody<HTMLOptionElement, M, R>): VBlock<HTMLOptionElement, M, R> { return VBlock.claim(HtmlTags.option, body) }
export function Output<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.output, body) }
export function P<M = unknown, R = void>(body: BlockBody<HTMLParagraphElement, M, R>): VBlock<HTMLParagraphElement, M, R> { return VBlock.claim(HtmlTags.p, body) }
export function Param<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.param, body) }
export function Picture<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.picture, body) }
export function Pre<M = unknown, R = void>(body: BlockBody<HTMLPreElement, M, R>): VBlock<HTMLPreElement, M, R> { return VBlock.claim(HtmlTags.pre, body) }
export function Progress<M = unknown, R = void>(body: BlockBody<HTMLProgressElement, M, R>): VBlock<HTMLProgressElement, M, R> { return VBlock.claim(HtmlTags.progress, body) }
export function Q<M = unknown, R = void>(body: BlockBody<HTMLQuoteElement, M, R>): VBlock<HTMLQuoteElement, M, R> { return VBlock.claim(HtmlTags.q, body) }
export function RP<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.rp, body) }
export function RT<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.rt, body) }
export function Ruby<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.ruby, body) }
export function S<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.s, body) }
export function Samp<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.samp, body) }
export function Script<M = unknown, R = void>(body: BlockBody<HTMLScriptElement, M, R>): VBlock<HTMLScriptElement, M, R> { return VBlock.claim(HtmlTags.script, body) }
export function Section<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.section, body) }
export function Select<M = unknown, R = void>(body: BlockBody<HTMLSelectElement, M, R>): VBlock<HTMLSelectElement, M, R> { return VBlock.claim(HtmlTags.select, body) }
export function Small<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.small, body) }
export function Source<M = unknown, R = void>(body: BlockBody<HTMLSourceElement, M, R>): VBlock<HTMLSourceElement, M, R> { return VBlock.claim(HtmlTags.source, body) }
export function Span<M = unknown, R = void>(body: BlockBody<HTMLSpanElement, M, R>): VBlock<HTMLSpanElement, M, R> { return VBlock.claim(HtmlTags.span, body) }
export function Strong<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.strong, body) }
export function Style<M = unknown, R = void>(body: BlockBody<HTMLStyleElement, M, R>): VBlock<HTMLStyleElement, M, R> { return VBlock.claim(HtmlTags.style, body) }
export function Sub<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.sub, body) }
export function Summary<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.summary, body) }
export function Sup<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.sup, body) }
export function Table<M = unknown, R = void>(body: BlockBody<HTMLTableElement, M, R>): VBlock<HTMLTableElement, M, R> { return VBlock.claim(HtmlTags.table, body) }
export function Template<M = unknown, R = void>(body: BlockBody<HTMLTemplateElement, M, R>): VBlock<HTMLTemplateElement, M, R> { return VBlock.claim(HtmlTags.template, body) }
export function TBody<M = unknown, R = void>(body: BlockBody<HTMLTableSectionElement, M, R>): VBlock<HTMLTableSectionElement, M, R> { return VBlock.claim(HtmlTags.tbody, body) }
export function TD<M = unknown, R = void>(body: BlockBody<HTMLTableCellElement, M, R>): VBlock<HTMLTableCellElement, M, R> { return VBlock.claim(HtmlTags.td, body) }
export function TextArea<M = unknown, R = void>(body: BlockBody<HTMLTextAreaElement, M, R>): VBlock<HTMLTextAreaElement, M, R> { return VBlock.claim(HtmlTags.textarea, body) }
export function TFoot<M = unknown, R = void>(body: BlockBody<HTMLTableSectionElement, M, R>): VBlock<HTMLTableSectionElement, M, R> { return VBlock.claim(HtmlTags.tfoot, body) }
export function TH<M = unknown, R = void>(body: BlockBody<HTMLTableCellElement, M, R>): VBlock<HTMLTableCellElement, M, R> { return VBlock.claim(HtmlTags.th, body) }
export function THead<M = unknown, R = void>(body: BlockBody<HTMLTableSectionElement, M, R>): VBlock<HTMLTableSectionElement, M, R> { return VBlock.claim(HtmlTags.thead, body) }
export function Time<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.time, body) }
export function Title<M = unknown, R = void>(body: BlockBody<HTMLTitleElement, M, R>): VBlock<HTMLTitleElement, M, R> { return VBlock.claim(HtmlTags.title, body) }
export function TR<M = unknown, R = void>(body: BlockBody<HTMLTableRowElement, M, R>): VBlock<HTMLTableRowElement, M, R> { return VBlock.claim(HtmlTags.tr, body) }
export function Track<M = unknown, R = void>(body: BlockBody<HTMLTrackElement, M, R>): VBlock<HTMLTrackElement, M, R> { return VBlock.claim(HtmlTags.track, body) }
export function U<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.u, body) }
export function UL<M = unknown, R = void>(body: BlockBody<HTMLUListElement, M, R>): VBlock<HTMLUListElement, M, R> { return VBlock.claim(HtmlTags.ul, body) }
export function Var<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.var, body) }
export function Video<M = unknown, R = void>(body: BlockBody<HTMLVideoElement, M, R>): VBlock<HTMLVideoElement, M, R> { return VBlock.claim(HtmlTags.video, body) }
export function Wbr<M = unknown, R = void>(body: BlockBody<HTMLElement, M, R>): VBlock<HTMLElement, M, R> { return VBlock.claim(HtmlTags.wbr, body) }

export function Svg<M = unknown, R = void>(body: BlockBody<SVGSVGElement, M, R>): VBlock<SVGSVGElement, M, R> { return VBlock.claim(SvgTags.svg, body) }
export function SvgA<M = unknown, R = void>(body: BlockBody<SVGAElement, M, R>): VBlock<SVGAElement, M, R> { return VBlock.claim(SvgTags.a, body) }
export function Animate<M = unknown, R = void>(body: BlockBody<SVGAnimateElement, M, R>): VBlock<SVGAnimateElement, M, R> { return VBlock.claim(SvgTags.animate, body) }
export function AnimateMotion<M = unknown, R = void>(body: BlockBody<SVGAnimateMotionElement, M, R>): VBlock<SVGAnimateMotionElement, M, R> { return VBlock.claim(SvgTags.animateMotion, body) }
export function AnimateTransform<M = unknown, R = void>(body: BlockBody<SVGAnimateTransformElement, M, R>): VBlock<SVGAnimateTransformElement, M, R> { return VBlock.claim(SvgTags.animateTransform, body) }
export function Circle<M = unknown, R = void>(body: BlockBody<SVGCircleElement, M, R>): VBlock<SVGCircleElement, M, R> { return VBlock.claim(SvgTags.circle, body) }
export function ClipPath<M = unknown, R = void>(body: BlockBody<SVGClipPathElement, M, R>): VBlock<SVGClipPathElement, M, R> { return VBlock.claim(SvgTags.clipPath, body) }
export function Defs<M = unknown, R = void>(body: BlockBody<SVGDefsElement, M, R>): VBlock<SVGDefsElement, M, R> { return VBlock.claim(SvgTags.defs, body) }
export function Desc<M = unknown, R = void>(body: BlockBody<SVGDescElement, M, R>): VBlock<SVGDescElement, M, R> { return VBlock.claim(SvgTags.desc, body) }
export function Ellipse<M = unknown, R = void>(body: BlockBody<SVGEllipseElement, M, R>): VBlock<SVGEllipseElement, M, R> { return VBlock.claim(SvgTags.ellipse, body) }
export function FeBlend<M = unknown, R = void>(body: BlockBody<SVGFEBlendElement, M, R>): VBlock<SVGFEBlendElement, M, R> { return VBlock.claim(SvgTags.feBlend, body) }
export function FeColorMatrix<M = unknown, R = void>(body: BlockBody<SVGFEColorMatrixElement, M, R>): VBlock<SVGFEColorMatrixElement, M, R> { return VBlock.claim(SvgTags.feColorMatrix, body) }
export function FeComponentTransfer<M = unknown, R = void>(body: BlockBody<SVGFEComponentTransferElement, M, R>): VBlock<SVGFEComponentTransferElement, M, R> { return VBlock.claim(SvgTags.feComponentTransfer, body) }
export function FeComposite<M = unknown, R = void>(body: BlockBody<SVGFECompositeElement, M, R>): VBlock<SVGFECompositeElement, M, R> { return VBlock.claim(SvgTags.feComposite, body) }
export function FeConvolveMatrix<M = unknown, R = void>(body: BlockBody<SVGFEConvolveMatrixElement, M, R>): VBlock<SVGFEConvolveMatrixElement, M, R> { return VBlock.claim(SvgTags.feConvolveMatrix, body) }
export function FeDiffuseLighting<M = unknown, R = void>(body: BlockBody<SVGFEDiffuseLightingElement, M, R>): VBlock<SVGFEDiffuseLightingElement, M, R> { return VBlock.claim(SvgTags.feDiffuseLighting, body) }
export function FeDisplacementMap<M = unknown, R = void>(body: BlockBody<SVGFEDisplacementMapElement, M, R>): VBlock<SVGFEDisplacementMapElement, M, R> { return VBlock.claim(SvgTags.feDisplacementMap, body) }
export function FeDistantLight<M = unknown, R = void>(body: BlockBody<SVGFEDistantLightElement, M, R>): VBlock<SVGFEDistantLightElement, M, R> { return VBlock.claim(SvgTags.feDistantLight, body) }
export function FeDropShadow<M = unknown, R = void>(body: BlockBody<SVGFEDropShadowElement, M, R>): VBlock<SVGFEDropShadowElement, M, R> { return VBlock.claim(SvgTags.feDropShadow, body) }
export function FeFlood<M = unknown, R = void>(body: BlockBody<SVGFEFloodElement, M, R>): VBlock<SVGFEFloodElement, M, R> { return VBlock.claim(SvgTags.feFlood, body) }
export function FeFuncA<M = unknown, R = void>(body: BlockBody<SVGFEFuncAElement, M, R>): VBlock<SVGFEFuncAElement, M, R> { return VBlock.claim(SvgTags.feFuncA, body) }
export function FeFuncB<M = unknown, R = void>(body: BlockBody<SVGFEFuncBElement, M, R>): VBlock<SVGFEFuncBElement, M, R> { return VBlock.claim(SvgTags.feFuncB, body) }
export function FeFuncG<M = unknown, R = void>(body: BlockBody<SVGFEFuncGElement, M, R>): VBlock<SVGFEFuncGElement, M, R> { return VBlock.claim(SvgTags.feFuncG, body) }
export function FeFuncR<M = unknown, R = void>(body: BlockBody<SVGFEFuncRElement, M, R>): VBlock<SVGFEFuncRElement, M, R> { return VBlock.claim(SvgTags.feFuncR, body) }
export function FeGaussianBlur<M = unknown, R = void>(body: BlockBody<SVGFEGaussianBlurElement, M, R>): VBlock<SVGFEGaussianBlurElement, M, R> { return VBlock.claim(SvgTags.feGaussianBlur, body) }
export function FeImage<M = unknown, R = void>(body: BlockBody<SVGFEImageElement, M, R>): VBlock<SVGFEImageElement, M, R> { return VBlock.claim(SvgTags.feImage, body) }
export function FeMerge<M = unknown, R = void>(body: BlockBody<SVGFEMergeElement, M, R>): VBlock<SVGFEMergeElement, M, R> { return VBlock.claim(SvgTags.feMerge, body) }
export function FeMergeNode<M = unknown, R = void>(body: BlockBody<SVGFEMergeNodeElement, M, R>): VBlock<SVGFEMergeNodeElement, M, R> { return VBlock.claim(SvgTags.feMergeNode, body) }
export function FeMorphology<M = unknown, R = void>(body: BlockBody<SVGFEMorphologyElement, M, R>): VBlock<SVGFEMorphologyElement, M, R> { return VBlock.claim(SvgTags.feMorphology, body) }
export function FeOffset<M = unknown, R = void>(body: BlockBody<SVGFEOffsetElement, M, R>): VBlock<SVGFEOffsetElement, M, R> { return VBlock.claim(SvgTags.feOffset, body) }
export function FePointLight<M = unknown, R = void>(body: BlockBody<SVGFEPointLightElement, M, R>): VBlock<SVGFEPointLightElement, M, R> { return VBlock.claim(SvgTags.fePointLight, body) }
export function FeSpecularLighting<M = unknown, R = void>(body: BlockBody<SVGFESpecularLightingElement, M, R>): VBlock<SVGFESpecularLightingElement, M, R> { return VBlock.claim(SvgTags.feSpecularLighting, body) }
export function FeSpotLight<M = unknown, R = void>(body: BlockBody<SVGFESpotLightElement, M, R>): VBlock<SVGFESpotLightElement, M, R> { return VBlock.claim(SvgTags.feSpotLight, body) }
export function FeTile<M = unknown, R = void>(body: BlockBody<SVGFETileElement, M, R>): VBlock<SVGFETileElement, M, R> { return VBlock.claim(SvgTags.feTile, body) }
export function FeTurbulence<M = unknown, R = void>(body: BlockBody<SVGFETurbulenceElement, M, R>): VBlock<SVGFETurbulenceElement, M, R> { return VBlock.claim(SvgTags.feTurbulence, body) }
export function Filter<M = unknown, R = void>(body: BlockBody<SVGFilterElement, M, R>): VBlock<SVGFilterElement, M, R> { return VBlock.claim(SvgTags.filter, body) }
export function ForeignObject<M = unknown, R = void>(body: BlockBody<SVGForeignObjectElement, M, R>): VBlock<SVGForeignObjectElement, M, R> { return VBlock.claim(SvgTags.foreignObject, body) }
export function G<M = unknown, R = void>(body: BlockBody<SVGGElement, M, R>): VBlock<SVGGElement, M, R> { return VBlock.claim(SvgTags.g, body) }
export function SvgImage<M = unknown, R = void>(body: BlockBody<SVGImageElement, M, R>): VBlock<SVGImageElement, M, R> { return VBlock.claim(SvgTags.image, body) }
export function SvgLine<M = unknown, R = void>(body: BlockBody<SVGLineElement, M, R>): VBlock<SVGLineElement, M, R> { return VBlock.claim(SvgTags.line, body) }
export function LinearGradient<M = unknown, R = void>(body: BlockBody<SVGLinearGradientElement, M, R>): VBlock<SVGLinearGradientElement, M, R> { return VBlock.claim(SvgTags.linearGradient, body) }
export function Marker<M = unknown, R = void>(body: BlockBody<SVGMarkerElement, M, R>): VBlock<SVGMarkerElement, M, R> { return VBlock.claim(SvgTags.marker, body) }
export function Mask<M = unknown, R = void>(body: BlockBody<SVGMaskElement, M, R>): VBlock<SVGMaskElement, M, R> { return VBlock.claim(SvgTags.mask, body) }
export function MetaData<M = unknown, R = void>(body: BlockBody<SVGMetadataElement, M, R>): VBlock<SVGMetadataElement, M, R> { return VBlock.claim(SvgTags.metadata, body) }
export function MPath<M = unknown, R = void>(body: BlockBody<SVGElement, M, R>): VBlock<SVGElement, M, R> { return VBlock.claim(SvgTags.mpath, body) }
export function Path<M = unknown, R = void>(body: BlockBody<SVGPathElement, M, R>): VBlock<SVGPathElement, M, R> { return VBlock.claim(SvgTags.path, body) }
export function Pattern<M = unknown, R = void>(body: BlockBody<SVGPatternElement, M, R>): VBlock<SVGPatternElement, M, R> { return VBlock.claim(SvgTags.pattern, body) }
export function Polygon<M = unknown, R = void>(body: BlockBody<SVGPolygonElement, M, R>): VBlock<SVGPolygonElement, M, R> { return VBlock.claim(SvgTags.polygon, body) }
export function PolyLine<M = unknown, R = void>(body: BlockBody<SVGPolylineElement, M, R>): VBlock<SVGPolylineElement, M, R> { return VBlock.claim(SvgTags.polyline, body) }
export function RadialGradient<M = unknown, R = void>(body: BlockBody<SVGRadialGradientElement, M, R>): VBlock<SVGRadialGradientElement, M, R> { return VBlock.claim(SvgTags.radialGradient, body) }
export function Rect<M = unknown, R = void>(body: BlockBody<SVGRectElement, M, R>): VBlock<SVGRectElement, M, R> { return VBlock.claim(SvgTags.rect, body) }
export function Stop<M = unknown, R = void>(body: BlockBody<SVGStopElement, M, R>): VBlock<SVGStopElement, M, R> { return VBlock.claim(SvgTags.stop, body) }
export function SvgSwitch<M = unknown, R = void>(body: BlockBody<SVGSwitchElement, M, R>): VBlock<SVGSwitchElement, M, R> { return VBlock.claim(SvgTags.switch, body) }
export function Symbol<M = unknown, R = void>(body: BlockBody<SVGSymbolElement, M, R>): VBlock<SVGSymbolElement, M, R> { return VBlock.claim(SvgTags.symbol, body) }
export function Text<M = unknown, R = void>(body: BlockBody<SVGTextElement, M, R>): VBlock<SVGTextElement, M, R> { return VBlock.claim(SvgTags.text, body) }
export function TextPath<M = unknown, R = void>(body: BlockBody<SVGTextPathElement, M, R>): VBlock<SVGTextPathElement, M, R> { return VBlock.claim(SvgTags.textPath, body) }
export function TSpan<M = unknown, R = void>(body: BlockBody<SVGTSpanElement, M, R>): VBlock<SVGTSpanElement, M, R> { return VBlock.claim(SvgTags.tspan, body) }
export function Use<M = unknown, R = void>(body: BlockBody<SVGUseElement, M, R>): VBlock<SVGUseElement, M, R> { return VBlock.claim(SvgTags.use, body) }
export function View<M = unknown, R = void>(body: BlockBody<SVGViewElement, M, R>): VBlock<SVGViewElement, M, R> { return VBlock.claim(SvgTags.view, body) }

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
