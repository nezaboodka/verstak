// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { RxNode, RxNodeDecl } from "reactronic"
import { El, ElKind } from "./El.js"
import { StaticDriver, HtmlDriver, SvgDriver } from "./HtmlDriver.js"

export function Page(declaration?: RxNodeDecl<El<HTMLBodyElement>>): RxNode<El<HTMLBodyElement>> {
  const driver = new StaticDriver(global.document.body as HTMLBodyElement, "Page", false, el => el.kind = ElKind.panel)
  return RxNode.declare(driver, declaration)
}

export function A<M = unknown>(declaration?: RxNodeDecl<El<HTMLAnchorElement, M>>): RxNode<El<HTMLAnchorElement, M>> { return RxNode.declare(HtmlTags.a, declaration) }
export function Abbr<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.abbr, declaration) }
export function Address<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.address, declaration) }
export function Area<M = unknown>(declaration?: RxNodeDecl<El<HTMLAreaElement, M>>): RxNode<El<HTMLAreaElement, M>> { return RxNode.declare(HtmlTags.area, declaration) }
export function Article<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.article, declaration) }
export function Aside<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.aside, declaration) }
export function Audio<M = unknown>(declaration?: RxNodeDecl<El<HTMLAudioElement, M>>): RxNode<El<HTMLAudioElement, M>> { return RxNode.declare(HtmlTags.audio, declaration) }
export function B<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.b, declaration) }
export function Base<M = unknown>(declaration?: RxNodeDecl<El<HTMLBaseElement, M>>): RxNode<El<HTMLBaseElement, M>> { return RxNode.declare(HtmlTags.base, declaration) }
export function Bdi<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.bdi, declaration) }
export function Bdo<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.bdo, declaration) }
export function Big<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.big, declaration) }
export function BlockQuote<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.blockquote, declaration) }
export function Body<M = unknown>(declaration?: RxNodeDecl<El<HTMLBodyElement, M>>): RxNode<El<HTMLBodyElement, M>> { return RxNode.declare(HtmlTags.body, declaration) }
export function BR<M = unknown>(declaration?: RxNodeDecl<El<HTMLBRElement, M>>): RxNode<El<HTMLBRElement, M>> { return RxNode.declare(HtmlTags.br, declaration) }
export function Button<M = unknown>(declaration?: RxNodeDecl<El<HTMLButtonElement, M>>): RxNode<El<HTMLButtonElement, M>> { return RxNode.declare(HtmlTags.button, declaration) }
export function Canvas<M = unknown>(declaration?: RxNodeDecl<El<HTMLCanvasElement, M>>): RxNode<El<HTMLCanvasElement, M>> { return RxNode.declare(HtmlTags.canvas, declaration) }
export function Caption<M = unknown>(declaration?: RxNodeDecl<El<HTMLTableCaptionElement, M>>): RxNode<El<HTMLTableCaptionElement, M>> { return RxNode.declare(HtmlTags.caption, declaration) }
export function Cite<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.cite, declaration) }
export function Code<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.code, declaration) }
export function Col<M = unknown>(declaration?: RxNodeDecl<El<HTMLTableColElement, M>>): RxNode<El<HTMLTableColElement, M>> { return RxNode.declare(HtmlTags.col, declaration) }
export function ColGroup<M = unknown>(declaration?: RxNodeDecl<El<HTMLTableColElement, M>>): RxNode<El<HTMLTableColElement, M>> { return RxNode.declare(HtmlTags.colgroup, declaration) }
export function Data<M = unknown>(declaration?: RxNodeDecl<El<HTMLDataElement, M>>): RxNode<El<HTMLDataElement, M>> { return RxNode.declare(HtmlTags.data, declaration) }
export function DataList<M = unknown>(declaration?: RxNodeDecl<El<HTMLDataListElement, M>>): RxNode<El<HTMLDataListElement, M>> { return RxNode.declare(HtmlTags.datalist, declaration) }
export function DD<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.dd, declaration) }
export function Del<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.del, declaration) }
export function Details<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.details, declaration) }
export function Dfn<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.dfn, declaration) }
export function Div<M = unknown>(declaration?: RxNodeDecl<El<HTMLDivElement, M>>): RxNode<El<HTMLDivElement, M>> { return RxNode.declare(HtmlTags.div, declaration) }
export function DL<M = unknown>(declaration?: RxNodeDecl<El<HTMLDListElement, M>>): RxNode<El<HTMLDListElement, M>> { return RxNode.declare(HtmlTags.dl, declaration) }
export function DT<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.dt, declaration) }
export function EM<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.em, declaration) }
export function Embed<M = unknown>(declaration?: RxNodeDecl<El<HTMLEmbedElement, M>>): RxNode<El<HTMLEmbedElement, M>> { return RxNode.declare(HtmlTags.embed, declaration) }
export function FieldSet<M = unknown>(declaration?: RxNodeDecl<El<HTMLFieldSetElement, M>>): RxNode<El<HTMLFieldSetElement, M>> { return RxNode.declare(HtmlTags.fieldset, declaration) }
export function FigCaption<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.figcaption, declaration) }
export function Figure<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.figure, declaration) }
export function Footer<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.footer, declaration) }
export function Form<M = unknown>(declaration?: RxNodeDecl<El<HTMLFormElement, M>>): RxNode<El<HTMLFormElement, M>> { return RxNode.declare(HtmlTags.form, declaration) }
export function H1<M = unknown>(declaration?: RxNodeDecl<El<HTMLHeadingElement, M>>): RxNode<El<HTMLHeadingElement, M>> { return RxNode.declare(HtmlTags.h1, declaration) }
export function H2<M = unknown>(declaration?: RxNodeDecl<El<HTMLHeadingElement, M>>): RxNode<El<HTMLHeadingElement, M>> { return RxNode.declare(HtmlTags.h2, declaration) }
export function H3<M = unknown>(declaration?: RxNodeDecl<El<HTMLHeadingElement, M>>): RxNode<El<HTMLHeadingElement, M>> { return RxNode.declare(HtmlTags.h3, declaration) }
export function H4<M = unknown>(declaration?: RxNodeDecl<El<HTMLHeadingElement, M>>): RxNode<El<HTMLHeadingElement, M>> { return RxNode.declare(HtmlTags.h4, declaration) }
export function H5<M = unknown>(declaration?: RxNodeDecl<El<HTMLHeadingElement, M>>): RxNode<El<HTMLHeadingElement, M>> { return RxNode.declare(HtmlTags.h5, declaration) }
export function H6<M = unknown>(declaration?: RxNodeDecl<El<HTMLHeadingElement, M>>): RxNode<El<HTMLHeadingElement, M>> { return RxNode.declare(HtmlTags.h6, declaration) }
export function Head<M = unknown>(declaration?: RxNodeDecl<El<HTMLHeadElement, M>>): RxNode<El<HTMLHeadElement, M>> { return RxNode.declare(HtmlTags.head, declaration) }
export function Header<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.header, declaration) }
export function HGroup<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.hgroup, declaration) }
export function HR<M = unknown>(declaration?: RxNodeDecl<El<HTMLHRElement, M>>): RxNode<El<HTMLHRElement, M>> { return RxNode.declare(HtmlTags.hr, declaration) }
export function Html<M = unknown>(declaration?: RxNodeDecl<El<HTMLHtmlElement, M>>): RxNode<El<HTMLHtmlElement, M>> { return RxNode.declare(HtmlTags.html, declaration) }
export function I<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.i, declaration) }
export function IFrame<M = unknown>(declaration?: RxNodeDecl<El<HTMLIFrameElement, M>>): RxNode<El<HTMLIFrameElement, M>> { return RxNode.declare(HtmlTags.iframe, declaration) }
export function Img<M = unknown>(declaration?: RxNodeDecl<El<HTMLImageElement, M>>): RxNode<El<HTMLImageElement, M>> { return RxNode.declare(HtmlTags.img, declaration) }
export function Input<M = unknown>(declaration?: RxNodeDecl<El<HTMLInputElement, M>>): RxNode<El<HTMLInputElement, M>> { return RxNode.declare(HtmlTags.input, declaration) }
export function Ins<M = unknown>(declaration?: RxNodeDecl<El<HTMLModElement, M>>): RxNode<El<HTMLModElement, M>> { return RxNode.declare(HtmlTags.ins, declaration) }
export function Kbd<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.kbd, declaration) }
export function KeyGen<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.keygen, declaration) }
export function Label<M = unknown>(declaration?: RxNodeDecl<El<HTMLLabelElement, M>>): RxNode<El<HTMLLabelElement, M>> { return RxNode.declare(HtmlTags.label, declaration) }
export function Legend<M = unknown>(declaration?: RxNodeDecl<El<HTMLLegendElement, M>>): RxNode<El<HTMLLegendElement, M>> { return RxNode.declare(HtmlTags.legend, declaration) }
export function LI<M = unknown>(declaration?: RxNodeDecl<El<HTMLLIElement, M>>): RxNode<El<HTMLLIElement, M>> { return RxNode.declare(HtmlTags.li, declaration) }
export function Link<M = unknown>(declaration?: RxNodeDecl<El<HTMLLinkElement, M>>): RxNode<El<HTMLLinkElement, M>> { return RxNode.declare(HtmlTags.link, declaration) }
export function Main<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.main, declaration) }
export function Map<M = unknown>(declaration?: RxNodeDecl<El<HTMLMapElement, M>>): RxNode<El<HTMLMapElement, M>> { return RxNode.declare(HtmlTags.map, declaration) }
export function Mark<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.mark, declaration) }
export function Menu<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.menu, declaration) }
export function MenuItem<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.menuitem, declaration) }
export function Meta<M = unknown>(declaration?: RxNodeDecl<El<HTMLMetaElement, M>>): RxNode<El<HTMLMetaElement, M>> { return RxNode.declare(HtmlTags.meta, declaration) }
export function Meter<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.meter, declaration) }
export function Nav<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.nav, declaration) }
export function NoIndex<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.noindex, declaration) }
export function NoScript<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.noscript, declaration) }
export function Obj<M = unknown>(declaration?: RxNodeDecl<El<HTMLObjectElement, M>>): RxNode<El<HTMLObjectElement, M>> { return RxNode.declare(HtmlTags.object, declaration) }
export function OL<M = unknown>(declaration?: RxNodeDecl<El<HTMLOListElement, M>>): RxNode<El<HTMLOListElement, M>> { return RxNode.declare(HtmlTags.ol, declaration) }
export function OptGroup<M = unknown>(declaration?: RxNodeDecl<El<HTMLOptGroupElement, M>>): RxNode<El<HTMLOptGroupElement, M>> { return RxNode.declare(HtmlTags.optgroup, declaration) }
export function Option<M = unknown>(declaration?: RxNodeDecl<El<HTMLOptionElement, M>>): RxNode<El<HTMLOptionElement, M>> { return RxNode.declare(HtmlTags.option, declaration) }
export function Output<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.output, declaration) }
export function P<M = unknown>(declaration?: RxNodeDecl<El<HTMLParagraphElement, M>>): RxNode<El<HTMLParagraphElement, M>> { return RxNode.declare(HtmlTags.p, declaration) }
export function Param<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.param, declaration) }
export function Picture<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.picture, declaration) }
export function Pre<M = unknown>(declaration?: RxNodeDecl<El<HTMLPreElement, M>>): RxNode<El<HTMLPreElement, M>> { return RxNode.declare(HtmlTags.pre, declaration) }
export function Progress<M = unknown>(declaration?: RxNodeDecl<El<HTMLProgressElement, M>>): RxNode<El<HTMLProgressElement, M>> { return RxNode.declare(HtmlTags.progress, declaration) }
export function Q<M = unknown>(declaration?: RxNodeDecl<El<HTMLQuoteElement, M>>): RxNode<El<HTMLQuoteElement, M>> { return RxNode.declare(HtmlTags.q, declaration) }
export function RP<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.rp, declaration) }
export function RT<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.rt, declaration) }
export function Ruby<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.ruby, declaration) }
export function S<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.s, declaration) }
export function Samp<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.samp, declaration) }
export function Script<M = unknown>(declaration?: RxNodeDecl<El<HTMLScriptElement, M>>): RxNode<El<HTMLScriptElement, M>> { return RxNode.declare(HtmlTags.script, declaration) }
export function Sctn<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.section, declaration) }
export function Select<M = unknown>(declaration?: RxNodeDecl<El<HTMLSelectElement, M>>): RxNode<El<HTMLSelectElement, M>> { return RxNode.declare(HtmlTags.select, declaration) }
export function Small<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.small, declaration) }
export function Source<M = unknown>(declaration?: RxNodeDecl<El<HTMLSourceElement, M>>): RxNode<El<HTMLSourceElement, M>> { return RxNode.declare(HtmlTags.source, declaration) }
export function Span<M = unknown>(declaration?: RxNodeDecl<El<HTMLSpanElement, M>>): RxNode<El<HTMLSpanElement, M>> { return RxNode.declare(HtmlTags.span, declaration) }
export function Strong<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.strong, declaration) }
export function Style<M = unknown>(declaration?: RxNodeDecl<El<HTMLStyleElement, M>>): RxNode<El<HTMLStyleElement, M>> { return RxNode.declare(HtmlTags.style, declaration) }
export function Sub<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.sub, declaration) }
export function Summary<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.summary, declaration) }
export function Sup<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.sup, declaration) }
export function Tbl<M = unknown>(declaration?: RxNodeDecl<El<HTMLTableElement, M>>): RxNode<El<HTMLTableElement, M>> { return RxNode.declare(HtmlTags.table, declaration) }
export function Template<M = unknown>(declaration?: RxNodeDecl<El<HTMLTemplateElement, M>>): RxNode<El<HTMLTemplateElement, M>> { return RxNode.declare(HtmlTags.template, declaration) }
export function TBody<M = unknown>(declaration?: RxNodeDecl<El<HTMLTableSectionElement, M>>): RxNode<El<HTMLTableSectionElement, M>> { return RxNode.declare(HtmlTags.tbody, declaration) }
export function TD<M = unknown>(declaration?: RxNodeDecl<El<HTMLTableCellElement, M>>): RxNode<El<HTMLTableCellElement, M>> { return RxNode.declare(HtmlTags.td, declaration) }
export function TextArea<M = unknown>(declaration?: RxNodeDecl<El<HTMLTextAreaElement, M>>): RxNode<El<HTMLTextAreaElement, M>> { return RxNode.declare(HtmlTags.textarea, declaration) }
export function TFoot<M = unknown>(declaration?: RxNodeDecl<El<HTMLTableSectionElement, M>>): RxNode<El<HTMLTableSectionElement, M>> { return RxNode.declare(HtmlTags.tfoot, declaration) }
export function TH<M = unknown>(declaration?: RxNodeDecl<El<HTMLTableCellElement, M>>): RxNode<El<HTMLTableCellElement, M>> { return RxNode.declare(HtmlTags.th, declaration) }
export function THead<M = unknown>(declaration?: RxNodeDecl<El<HTMLTableSectionElement, M>>): RxNode<El<HTMLTableSectionElement, M>> { return RxNode.declare(HtmlTags.thead, declaration) }
export function Time<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.time, declaration) }
export function Title<M = unknown>(declaration?: RxNodeDecl<El<HTMLTitleElement, M>>): RxNode<El<HTMLTitleElement, M>> { return RxNode.declare(HtmlTags.title, declaration) }
export function TR<M = unknown>(declaration?: RxNodeDecl<El<HTMLTableRowElement, M>>): RxNode<El<HTMLTableRowElement, M>> { return RxNode.declare(HtmlTags.tr, declaration) }
export function Track<M = unknown>(declaration?: RxNodeDecl<El<HTMLTrackElement, M>>): RxNode<El<HTMLTrackElement, M>> { return RxNode.declare(HtmlTags.track, declaration) }
export function U<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.u, declaration) }
export function UL<M = unknown>(declaration?: RxNodeDecl<El<HTMLUListElement, M>>): RxNode<El<HTMLUListElement, M>> { return RxNode.declare(HtmlTags.ul, declaration) }
export function Var<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.var, declaration) }
export function Video<M = unknown>(declaration?: RxNodeDecl<El<HTMLVideoElement, M>>): RxNode<El<HTMLVideoElement, M>> { return RxNode.declare(HtmlTags.video, declaration) }
export function Wbr<M = unknown>(declaration?: RxNodeDecl<El<HTMLElement, M>>): RxNode<El<HTMLElement, M>> { return RxNode.declare(HtmlTags.wbr, declaration) }

export function Svg<M = unknown>(declaration?: RxNodeDecl<El<SVGSVGElement, M>>): RxNode<El<SVGSVGElement, M>> { return RxNode.declare(SvgTags.svg, declaration) }
export function SvgA<M = unknown>(declaration?: RxNodeDecl<El<SVGAElement, M>>): RxNode<El<SVGAElement, M>> { return RxNode.declare(SvgTags.a, declaration) }
export function Animate<M = unknown>(declaration?: RxNodeDecl<El<SVGAnimateElement, M>>): RxNode<El<SVGAnimateElement, M>> { return RxNode.declare(SvgTags.animate, declaration) }
export function AnimateMotion<M = unknown>(declaration?: RxNodeDecl<El<SVGAnimateMotionElement, M>>): RxNode<El<SVGAnimateMotionElement, M>> { return RxNode.declare(SvgTags.animateMotion, declaration) }
export function AnimateTransform<M = unknown>(declaration?: RxNodeDecl<El<SVGAnimateTransformElement, M>>): RxNode<El<SVGAnimateTransformElement, M>> { return RxNode.declare(SvgTags.animateTransform, declaration) }
export function Circle<M = unknown>(declaration?: RxNodeDecl<El<SVGCircleElement, M>>): RxNode<El<SVGCircleElement, M>> { return RxNode.declare(SvgTags.circle, declaration) }
export function ClipPath<M = unknown>(declaration?: RxNodeDecl<El<SVGClipPathElement, M>>): RxNode<El<SVGClipPathElement, M>> { return RxNode.declare(SvgTags.clipPath, declaration) }
export function Defs<M = unknown>(declaration?: RxNodeDecl<El<SVGDefsElement, M>>): RxNode<El<SVGDefsElement, M>> { return RxNode.declare(SvgTags.defs, declaration) }
export function Desc<M = unknown>(declaration?: RxNodeDecl<El<SVGDescElement, M>>): RxNode<El<SVGDescElement, M>> { return RxNode.declare(SvgTags.desc, declaration) }
export function Ellipse<M = unknown>(declaration?: RxNodeDecl<El<SVGEllipseElement, M>>): RxNode<El<SVGEllipseElement, M>> { return RxNode.declare(SvgTags.ellipse, declaration) }
export function FeBlend<M = unknown>(declaration?: RxNodeDecl<El<SVGFEBlendElement, M>>): RxNode<El<SVGFEBlendElement, M>> { return RxNode.declare(SvgTags.feBlend, declaration) }
export function FeColorMatrix<M = unknown>(declaration?: RxNodeDecl<El<SVGFEColorMatrixElement, M>>): RxNode<El<SVGFEColorMatrixElement, M>> { return RxNode.declare(SvgTags.feColorMatrix, declaration) }
export function FeComponentTransfer<M = unknown>(declaration?: RxNodeDecl<El<SVGFEComponentTransferElement, M>>): RxNode<El<SVGFEComponentTransferElement, M>> { return RxNode.declare(SvgTags.feComponentTransfer, declaration) }
export function FeComposite<M = unknown>(declaration?: RxNodeDecl<El<SVGFECompositeElement, M>>): RxNode<El<SVGFECompositeElement, M>> { return RxNode.declare(SvgTags.feComposite, declaration) }
export function FeConvolveMatrix<M = unknown>(declaration?: RxNodeDecl<El<SVGFEConvolveMatrixElement, M>>): RxNode<El<SVGFEConvolveMatrixElement, M>> { return RxNode.declare(SvgTags.feConvolveMatrix, declaration) }
export function FeDiffuseLighting<M = unknown>(declaration?: RxNodeDecl<El<SVGFEDiffuseLightingElement, M>>): RxNode<El<SVGFEDiffuseLightingElement, M>> { return RxNode.declare(SvgTags.feDiffuseLighting, declaration) }
export function FeDisplacementMap<M = unknown>(declaration?: RxNodeDecl<El<SVGFEDisplacementMapElement, M>>): RxNode<El<SVGFEDisplacementMapElement, M>> { return RxNode.declare(SvgTags.feDisplacementMap, declaration) }
export function FeDistantLight<M = unknown>(declaration?: RxNodeDecl<El<SVGFEDistantLightElement, M>>): RxNode<El<SVGFEDistantLightElement, M>> { return RxNode.declare(SvgTags.feDistantLight, declaration) }
export function FeDropShadow<M = unknown>(declaration?: RxNodeDecl<El<SVGFEDropShadowElement, M>>): RxNode<El<SVGFEDropShadowElement, M>> { return RxNode.declare(SvgTags.feDropShadow, declaration) }
export function FeFlood<M = unknown>(declaration?: RxNodeDecl<El<SVGFEFloodElement, M>>): RxNode<El<SVGFEFloodElement, M>> { return RxNode.declare(SvgTags.feFlood, declaration) }
export function FeFuncA<M = unknown>(declaration?: RxNodeDecl<El<SVGFEFuncAElement, M>>): RxNode<El<SVGFEFuncAElement, M>> { return RxNode.declare(SvgTags.feFuncA, declaration) }
export function FeFuncB<M = unknown>(declaration?: RxNodeDecl<El<SVGFEFuncBElement, M>>): RxNode<El<SVGFEFuncBElement, M>> { return RxNode.declare(SvgTags.feFuncB, declaration) }
export function FeFuncG<M = unknown>(declaration?: RxNodeDecl<El<SVGFEFuncGElement, M>>): RxNode<El<SVGFEFuncGElement, M>> { return RxNode.declare(SvgTags.feFuncG, declaration) }
export function FeFuncR<M = unknown>(declaration?: RxNodeDecl<El<SVGFEFuncRElement, M>>): RxNode<El<SVGFEFuncRElement, M>> { return RxNode.declare(SvgTags.feFuncR, declaration) }
export function FeGaussianBlur<M = unknown>(declaration?: RxNodeDecl<El<SVGFEGaussianBlurElement, M>>): RxNode<El<SVGFEGaussianBlurElement, M>> { return RxNode.declare(SvgTags.feGaussianBlur, declaration) }
export function FeImage<M = unknown>(declaration?: RxNodeDecl<El<SVGFEImageElement, M>>): RxNode<El<SVGFEImageElement, M>> { return RxNode.declare(SvgTags.feImage, declaration) }
export function FeMerge<M = unknown>(declaration?: RxNodeDecl<El<SVGFEMergeElement, M>>): RxNode<El<SVGFEMergeElement, M>> { return RxNode.declare(SvgTags.feMerge, declaration) }
export function FeMergeNode<M = unknown>(declaration?: RxNodeDecl<El<SVGFEMergeNodeElement, M>>): RxNode<El<SVGFEMergeNodeElement, M>> { return RxNode.declare(SvgTags.feMergeNode, declaration) }
export function FeMorphology<M = unknown>(declaration?: RxNodeDecl<El<SVGFEMorphologyElement, M>>): RxNode<El<SVGFEMorphologyElement, M>> { return RxNode.declare(SvgTags.feMorphology, declaration) }
export function FeOffset<M = unknown>(declaration?: RxNodeDecl<El<SVGFEOffsetElement, M>>): RxNode<El<SVGFEOffsetElement, M>> { return RxNode.declare(SvgTags.feOffset, declaration) }
export function FePointLight<M = unknown>(declaration?: RxNodeDecl<El<SVGFEPointLightElement, M>>): RxNode<El<SVGFEPointLightElement, M>> { return RxNode.declare(SvgTags.fePointLight, declaration) }
export function FeSpecularLighting<M = unknown>(declaration?: RxNodeDecl<El<SVGFESpecularLightingElement, M>>): RxNode<El<SVGFESpecularLightingElement, M>> { return RxNode.declare(SvgTags.feSpecularLighting, declaration) }
export function FeSpotLight<M = unknown>(declaration?: RxNodeDecl<El<SVGFESpotLightElement, M>>): RxNode<El<SVGFESpotLightElement, M>> { return RxNode.declare(SvgTags.feSpotLight, declaration) }
export function FeTile<M = unknown>(declaration?: RxNodeDecl<El<SVGFETileElement, M>>): RxNode<El<SVGFETileElement, M>> { return RxNode.declare(SvgTags.feTile, declaration) }
export function FeTurbulence<M = unknown>(declaration?: RxNodeDecl<El<SVGFETurbulenceElement, M>>): RxNode<El<SVGFETurbulenceElement, M>> { return RxNode.declare(SvgTags.feTurbulence, declaration) }
export function Filter<M = unknown>(declaration?: RxNodeDecl<El<SVGFilterElement, M>>): RxNode<El<SVGFilterElement, M>> { return RxNode.declare(SvgTags.filter, declaration) }
export function ForeignObject<M = unknown>(declaration?: RxNodeDecl<El<SVGForeignObjectElement, M>>): RxNode<El<SVGForeignObjectElement, M>> { return RxNode.declare(SvgTags.foreignObject, declaration) }
export function G<M = unknown>(declaration?: RxNodeDecl<El<SVGGElement, M>>): RxNode<El<SVGGElement, M>> { return RxNode.declare(SvgTags.g, declaration) }
export function SvgImage<M = unknown>(declaration?: RxNodeDecl<El<SVGImageElement, M>>): RxNode<El<SVGImageElement, M>> { return RxNode.declare(SvgTags.image, declaration) }
export function SvgLine<M = unknown>(declaration?: RxNodeDecl<El<SVGLineElement, M>>): RxNode<El<SVGLineElement, M>> { return RxNode.declare(SvgTags.line, declaration) }
export function LinearGradient<M = unknown>(declaration?: RxNodeDecl<El<SVGLinearGradientElement, M>>): RxNode<El<SVGLinearGradientElement, M>> { return RxNode.declare(SvgTags.linearGradient, declaration) }
export function Marker<M = unknown>(declaration?: RxNodeDecl<El<SVGMarkerElement, M>>): RxNode<El<SVGMarkerElement, M>> { return RxNode.declare(SvgTags.marker, declaration) }
export function Mask<M = unknown>(declaration?: RxNodeDecl<El<SVGMaskElement, M>>): RxNode<El<SVGMaskElement, M>> { return RxNode.declare(SvgTags.mask, declaration) }
export function MetaData<M = unknown>(declaration?: RxNodeDecl<El<SVGMetadataElement, M>>): RxNode<El<SVGMetadataElement, M>> { return RxNode.declare(SvgTags.metadata, declaration) }
export function MPath<M = unknown>(declaration?: RxNodeDecl<El<SVGElement, M>>): RxNode<El<SVGElement, M>> { return RxNode.declare(SvgTags.mpath, declaration) }
export function Path<M = unknown>(declaration?: RxNodeDecl<El<SVGPathElement, M>>): RxNode<El<SVGPathElement, M>> { return RxNode.declare(SvgTags.path, declaration) }
export function Pattern<M = unknown>(declaration?: RxNodeDecl<El<SVGPatternElement, M>>): RxNode<El<SVGPatternElement, M>> { return RxNode.declare(SvgTags.pattern, declaration) }
export function Polygon<M = unknown>(declaration?: RxNodeDecl<El<SVGPolygonElement, M>>): RxNode<El<SVGPolygonElement, M>> { return RxNode.declare(SvgTags.polygon, declaration) }
export function PolyLine<M = unknown>(declaration?: RxNodeDecl<El<SVGPolylineElement, M>>): RxNode<El<SVGPolylineElement, M>> { return RxNode.declare(SvgTags.polyline, declaration) }
export function RadialGradient<M = unknown>(declaration?: RxNodeDecl<El<SVGRadialGradientElement, M>>): RxNode<El<SVGRadialGradientElement, M>> { return RxNode.declare(SvgTags.radialGradient, declaration) }
export function Rect<M = unknown>(declaration?: RxNodeDecl<El<SVGRectElement, M>>): RxNode<El<SVGRectElement, M>> { return RxNode.declare(SvgTags.rect, declaration) }
export function Stop<M = unknown>(declaration?: RxNodeDecl<El<SVGStopElement, M>>): RxNode<El<SVGStopElement, M>> { return RxNode.declare(SvgTags.stop, declaration) }
export function SvgSwitch<M = unknown>(declaration?: RxNodeDecl<El<SVGSwitchElement, M>>): RxNode<El<SVGSwitchElement, M>> { return RxNode.declare(SvgTags.switch, declaration) }
export function Symbol<M = unknown>(declaration?: RxNodeDecl<El<SVGSymbolElement, M>>): RxNode<El<SVGSymbolElement, M>> { return RxNode.declare(SvgTags.symbol, declaration) }
export function Text<M = unknown>(declaration?: RxNodeDecl<El<SVGTextElement, M>>): RxNode<El<SVGTextElement, M>> { return RxNode.declare(SvgTags.text, declaration) }
export function TextPath<M = unknown>(declaration?: RxNodeDecl<El<SVGTextPathElement, M>>): RxNode<El<SVGTextPathElement, M>> { return RxNode.declare(SvgTags.textPath, declaration) }
export function TSpan<M = unknown>(declaration?: RxNodeDecl<El<SVGTSpanElement, M>>): RxNode<El<SVGTSpanElement, M>> { return RxNode.declare(SvgTags.tspan, declaration) }
export function Use<M = unknown>(declaration?: RxNodeDecl<El<SVGUseElement, M>>): RxNode<El<SVGUseElement, M>> { return RxNode.declare(SvgTags.use, declaration) }
export function View<M = unknown>(declaration?: RxNodeDecl<El<SVGViewElement, M>>): RxNode<El<SVGViewElement, M>> { return RxNode.declare(SvgTags.view, declaration) }

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

const SvgTags = {
  svg: new SvgDriver<SVGSVGElement>("svg", false, el => el.kind = ElKind.native),
  a: new SvgDriver<SVGAElement>("a", false, el => el.kind = ElKind.native),
  animate: new SvgDriver<SVGAnimateElement>("animate", false, el => el.kind = ElKind.native),
  animateMotion: new SvgDriver<SVGAnimateMotionElement>("animateMotion", false, el => el.kind = ElKind.native),
  animateTransform: new SvgDriver<SVGAnimateTransformElement>("animateTransform", false, el => el.kind = ElKind.native),
  circle: new SvgDriver<SVGCircleElement>("circle", false, el => el.kind = ElKind.native),
  clipPath: new SvgDriver<SVGClipPathElement>("clipPath", false, el => el.kind = ElKind.native),
  defs: new SvgDriver<SVGDefsElement>("defs", false, el => el.kind = ElKind.native),
  desc: new SvgDriver<SVGDescElement>("desc", false, el => el.kind = ElKind.native),
  ellipse: new SvgDriver<SVGEllipseElement>("ellipse", false, el => el.kind = ElKind.native),
  feBlend: new SvgDriver<SVGFEBlendElement>("feBlend", false, el => el.kind = ElKind.native),
  feColorMatrix: new SvgDriver<SVGFEColorMatrixElement>("feColorMatrix", false, el => el.kind = ElKind.native),
  feComponentTransfer: new SvgDriver<SVGFEComponentTransferElement>("feComponentTransfer", false, el => el.kind = ElKind.native),
  feComposite: new SvgDriver<SVGFECompositeElement>("feComposite", false, el => el.kind = ElKind.native),
  feConvolveMatrix: new SvgDriver<SVGFEConvolveMatrixElement>("feConvolveMatrix", false, el => el.kind = ElKind.native),
  feDiffuseLighting: new SvgDriver<SVGFEDiffuseLightingElement>("feDiffuseLighting", false, el => el.kind = ElKind.native),
  feDisplacementMap: new SvgDriver<SVGFEDisplacementMapElement>("feDisplacementMap", false, el => el.kind = ElKind.native),
  feDistantLight: new SvgDriver<SVGFEDistantLightElement>("feDistantLight", false, el => el.kind = ElKind.native),
  feDropShadow: new SvgDriver<SVGFEDropShadowElement>("feDropShadow", false, el => el.kind = ElKind.native),
  feFlood: new SvgDriver<SVGFEFloodElement>("feFlood", false, el => el.kind = ElKind.native),
  feFuncA: new SvgDriver<SVGFEFuncAElement>("feFuncA", false, el => el.kind = ElKind.native),
  feFuncB: new SvgDriver<SVGFEFuncBElement>("feFuncB", false, el => el.kind = ElKind.native),
  feFuncG: new SvgDriver<SVGFEFuncGElement>("feFuncG", false, el => el.kind = ElKind.native),
  feFuncR: new SvgDriver<SVGFEFuncRElement>("feFuncR", false, el => el.kind = ElKind.native),
  feGaussianBlur: new SvgDriver<SVGFEGaussianBlurElement>("feGaussianBlur", false, el => el.kind = ElKind.native),
  feImage: new SvgDriver<SVGFEImageElement>("feImage", false, el => el.kind = ElKind.native),
  feMerge: new SvgDriver<SVGFEMergeElement>("feMerge", false, el => el.kind = ElKind.native),
  feMergeNode: new SvgDriver<SVGFEMergeNodeElement>("feMergeNode", false, el => el.kind = ElKind.native),
  feMorphology: new SvgDriver<SVGFEMorphologyElement>("feMorphology", false, el => el.kind = ElKind.native),
  feOffset: new SvgDriver<SVGFEOffsetElement>("feOffset", false, el => el.kind = ElKind.native),
  fePointLight: new SvgDriver<SVGFEPointLightElement>("fePointLight", false, el => el.kind = ElKind.native),
  feSpecularLighting: new SvgDriver<SVGFESpecularLightingElement>("feSpecularLighting", false, el => el.kind = ElKind.native),
  feSpotLight: new SvgDriver<SVGFESpotLightElement>("feSpotLight", false, el => el.kind = ElKind.native),
  feTile: new SvgDriver<SVGFETileElement>("feTile", false, el => el.kind = ElKind.native),
  feTurbulence: new SvgDriver<SVGFETurbulenceElement>("feTurbulence", false, el => el.kind = ElKind.native),
  filter: new SvgDriver<SVGFilterElement>("filter", false, el => el.kind = ElKind.native),
  foreignObject: new SvgDriver<SVGForeignObjectElement>("foreignObject", false, el => el.kind = ElKind.native),
  g: new SvgDriver<SVGGElement>("g", false, el => el.kind = ElKind.native),
  image: new SvgDriver<SVGImageElement>("image", false, el => el.kind = ElKind.native),
  line: new SvgDriver<SVGLineElement>("line", false, el => el.kind = ElKind.native),
  linearGradient: new SvgDriver<SVGLinearGradientElement>("linearGradient", false, el => el.kind = ElKind.native),
  marker: new SvgDriver<SVGMarkerElement>("marker", false, el => el.kind = ElKind.native),
  mask: new SvgDriver<SVGMaskElement>("mask", false, el => el.kind = ElKind.native),
  metadata: new SvgDriver<SVGMetadataElement>("metadata", false, el => el.kind = ElKind.native),
  mpath: new SvgDriver<SVGElement>("mpath", false, el => el.kind = ElKind.native),
  path: new SvgDriver<SVGPathElement>("path", false, el => el.kind = ElKind.native),
  pattern: new SvgDriver<SVGPatternElement>("pattern", false, el => el.kind = ElKind.native),
  polygon: new SvgDriver<SVGPolygonElement>("polygon", false, el => el.kind = ElKind.native),
  polyline: new SvgDriver<SVGPolylineElement>("polyline", false, el => el.kind = ElKind.native),
  radialGradient: new SvgDriver<SVGRadialGradientElement>("radialGradient", false, el => el.kind = ElKind.native),
  rect: new SvgDriver<SVGRectElement>("rect", false, el => el.kind = ElKind.native),
  stop: new SvgDriver<SVGStopElement>("stop", false, el => el.kind = ElKind.native),
  switch: new SvgDriver<SVGSwitchElement>("switch", false, el => el.kind = ElKind.native),
  symbol: new SvgDriver<SVGSymbolElement>("symbol", false, el => el.kind = ElKind.native),
  text: new SvgDriver<SVGTextElement>("text", false, el => el.kind = ElKind.native),
  textPath: new SvgDriver<SVGTextPathElement>("textPath", false, el => el.kind = ElKind.native),
  tspan: new SvgDriver<SVGTSpanElement>("tspan", false, el => el.kind = ElKind.native),
  use: new SvgDriver<SVGUseElement>("use", false, el => el.kind = ElKind.native),
  view: new SvgDriver<SVGViewElement>("view", false, el => el.kind = ElKind.native),
}
