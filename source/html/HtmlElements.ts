// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveNode, ReactiveNodeDecl } from "reactronic"
import { El, ElKind } from "../core/El.js"
import { HtmlDriver, SvgDriver } from "../core/WebDriver.js"

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
export function Sctn<M = unknown>(declaration?: ReactiveNodeDecl<El<HTMLElement, M>>): ReactiveNode<El<HTMLElement, M>> { return ReactiveNode.declare(HtmlTags.section, declaration) }
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

export function Svg<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGSVGElement, M>>): ReactiveNode<El<SVGSVGElement, M>> { return ReactiveNode.declare(SvgTags.svg, declaration) }
export function SvgA<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGAElement, M>>): ReactiveNode<El<SVGAElement, M>> { return ReactiveNode.declare(SvgTags.a, declaration) }
export function Animate<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGAnimateElement, M>>): ReactiveNode<El<SVGAnimateElement, M>> { return ReactiveNode.declare(SvgTags.animate, declaration) }
export function AnimateMotion<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGAnimateMotionElement, M>>): ReactiveNode<El<SVGAnimateMotionElement, M>> { return ReactiveNode.declare(SvgTags.animateMotion, declaration) }
export function AnimateTransform<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGAnimateTransformElement, M>>): ReactiveNode<El<SVGAnimateTransformElement, M>> { return ReactiveNode.declare(SvgTags.animateTransform, declaration) }
export function Circle<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGCircleElement, M>>): ReactiveNode<El<SVGCircleElement, M>> { return ReactiveNode.declare(SvgTags.circle, declaration) }
export function ClipPath<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGClipPathElement, M>>): ReactiveNode<El<SVGClipPathElement, M>> { return ReactiveNode.declare(SvgTags.clipPath, declaration) }
export function Defs<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGDefsElement, M>>): ReactiveNode<El<SVGDefsElement, M>> { return ReactiveNode.declare(SvgTags.defs, declaration) }
export function Desc<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGDescElement, M>>): ReactiveNode<El<SVGDescElement, M>> { return ReactiveNode.declare(SvgTags.desc, declaration) }
export function Ellipse<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGEllipseElement, M>>): ReactiveNode<El<SVGEllipseElement, M>> { return ReactiveNode.declare(SvgTags.ellipse, declaration) }
export function FeBlend<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGFEBlendElement, M>>): ReactiveNode<El<SVGFEBlendElement, M>> { return ReactiveNode.declare(SvgTags.feBlend, declaration) }
export function FeColorMatrix<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGFEColorMatrixElement, M>>): ReactiveNode<El<SVGFEColorMatrixElement, M>> { return ReactiveNode.declare(SvgTags.feColorMatrix, declaration) }
export function FeComponentTransfer<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGFEComponentTransferElement, M>>): ReactiveNode<El<SVGFEComponentTransferElement, M>> { return ReactiveNode.declare(SvgTags.feComponentTransfer, declaration) }
export function FeComposite<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGFECompositeElement, M>>): ReactiveNode<El<SVGFECompositeElement, M>> { return ReactiveNode.declare(SvgTags.feComposite, declaration) }
export function FeConvolveMatrix<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGFEConvolveMatrixElement, M>>): ReactiveNode<El<SVGFEConvolveMatrixElement, M>> { return ReactiveNode.declare(SvgTags.feConvolveMatrix, declaration) }
export function FeDiffuseLighting<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGFEDiffuseLightingElement, M>>): ReactiveNode<El<SVGFEDiffuseLightingElement, M>> { return ReactiveNode.declare(SvgTags.feDiffuseLighting, declaration) }
export function FeDisplacementMap<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGFEDisplacementMapElement, M>>): ReactiveNode<El<SVGFEDisplacementMapElement, M>> { return ReactiveNode.declare(SvgTags.feDisplacementMap, declaration) }
export function FeDistantLight<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGFEDistantLightElement, M>>): ReactiveNode<El<SVGFEDistantLightElement, M>> { return ReactiveNode.declare(SvgTags.feDistantLight, declaration) }
export function FeDropShadow<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGFEDropShadowElement, M>>): ReactiveNode<El<SVGFEDropShadowElement, M>> { return ReactiveNode.declare(SvgTags.feDropShadow, declaration) }
export function FeFlood<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGFEFloodElement, M>>): ReactiveNode<El<SVGFEFloodElement, M>> { return ReactiveNode.declare(SvgTags.feFlood, declaration) }
export function FeFuncA<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGFEFuncAElement, M>>): ReactiveNode<El<SVGFEFuncAElement, M>> { return ReactiveNode.declare(SvgTags.feFuncA, declaration) }
export function FeFuncB<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGFEFuncBElement, M>>): ReactiveNode<El<SVGFEFuncBElement, M>> { return ReactiveNode.declare(SvgTags.feFuncB, declaration) }
export function FeFuncG<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGFEFuncGElement, M>>): ReactiveNode<El<SVGFEFuncGElement, M>> { return ReactiveNode.declare(SvgTags.feFuncG, declaration) }
export function FeFuncR<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGFEFuncRElement, M>>): ReactiveNode<El<SVGFEFuncRElement, M>> { return ReactiveNode.declare(SvgTags.feFuncR, declaration) }
export function FeGaussianBlur<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGFEGaussianBlurElement, M>>): ReactiveNode<El<SVGFEGaussianBlurElement, M>> { return ReactiveNode.declare(SvgTags.feGaussianBlur, declaration) }
export function FeImage<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGFEImageElement, M>>): ReactiveNode<El<SVGFEImageElement, M>> { return ReactiveNode.declare(SvgTags.feImage, declaration) }
export function FeMerge<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGFEMergeElement, M>>): ReactiveNode<El<SVGFEMergeElement, M>> { return ReactiveNode.declare(SvgTags.feMerge, declaration) }
export function FeMergeNode<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGFEMergeNodeElement, M>>): ReactiveNode<El<SVGFEMergeNodeElement, M>> { return ReactiveNode.declare(SvgTags.feMergeNode, declaration) }
export function FeMorphology<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGFEMorphologyElement, M>>): ReactiveNode<El<SVGFEMorphologyElement, M>> { return ReactiveNode.declare(SvgTags.feMorphology, declaration) }
export function FeOffset<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGFEOffsetElement, M>>): ReactiveNode<El<SVGFEOffsetElement, M>> { return ReactiveNode.declare(SvgTags.feOffset, declaration) }
export function FePointLight<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGFEPointLightElement, M>>): ReactiveNode<El<SVGFEPointLightElement, M>> { return ReactiveNode.declare(SvgTags.fePointLight, declaration) }
export function FeSpecularLighting<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGFESpecularLightingElement, M>>): ReactiveNode<El<SVGFESpecularLightingElement, M>> { return ReactiveNode.declare(SvgTags.feSpecularLighting, declaration) }
export function FeSpotLight<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGFESpotLightElement, M>>): ReactiveNode<El<SVGFESpotLightElement, M>> { return ReactiveNode.declare(SvgTags.feSpotLight, declaration) }
export function FeTile<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGFETileElement, M>>): ReactiveNode<El<SVGFETileElement, M>> { return ReactiveNode.declare(SvgTags.feTile, declaration) }
export function FeTurbulence<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGFETurbulenceElement, M>>): ReactiveNode<El<SVGFETurbulenceElement, M>> { return ReactiveNode.declare(SvgTags.feTurbulence, declaration) }
export function Filter<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGFilterElement, M>>): ReactiveNode<El<SVGFilterElement, M>> { return ReactiveNode.declare(SvgTags.filter, declaration) }
export function ForeignObject<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGForeignObjectElement, M>>): ReactiveNode<El<SVGForeignObjectElement, M>> { return ReactiveNode.declare(SvgTags.foreignObject, declaration) }
export function G<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGGElement, M>>): ReactiveNode<El<SVGGElement, M>> { return ReactiveNode.declare(SvgTags.g, declaration) }
export function SvgImage<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGImageElement, M>>): ReactiveNode<El<SVGImageElement, M>> { return ReactiveNode.declare(SvgTags.image, declaration) }
export function SvgLine<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGLineElement, M>>): ReactiveNode<El<SVGLineElement, M>> { return ReactiveNode.declare(SvgTags.line, declaration) }
export function LinearGradient<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGLinearGradientElement, M>>): ReactiveNode<El<SVGLinearGradientElement, M>> { return ReactiveNode.declare(SvgTags.linearGradient, declaration) }
export function Marker<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGMarkerElement, M>>): ReactiveNode<El<SVGMarkerElement, M>> { return ReactiveNode.declare(SvgTags.marker, declaration) }
export function Mask<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGMaskElement, M>>): ReactiveNode<El<SVGMaskElement, M>> { return ReactiveNode.declare(SvgTags.mask, declaration) }
export function MetaData<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGMetadataElement, M>>): ReactiveNode<El<SVGMetadataElement, M>> { return ReactiveNode.declare(SvgTags.metadata, declaration) }
export function MPath<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGElement, M>>): ReactiveNode<El<SVGElement, M>> { return ReactiveNode.declare(SvgTags.mpath, declaration) }
export function Path<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGPathElement, M>>): ReactiveNode<El<SVGPathElement, M>> { return ReactiveNode.declare(SvgTags.path, declaration) }
export function Pattern<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGPatternElement, M>>): ReactiveNode<El<SVGPatternElement, M>> { return ReactiveNode.declare(SvgTags.pattern, declaration) }
export function Polygon<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGPolygonElement, M>>): ReactiveNode<El<SVGPolygonElement, M>> { return ReactiveNode.declare(SvgTags.polygon, declaration) }
export function PolyLine<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGPolylineElement, M>>): ReactiveNode<El<SVGPolylineElement, M>> { return ReactiveNode.declare(SvgTags.polyline, declaration) }
export function RadialGradient<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGRadialGradientElement, M>>): ReactiveNode<El<SVGRadialGradientElement, M>> { return ReactiveNode.declare(SvgTags.radialGradient, declaration) }
export function Rect<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGRectElement, M>>): ReactiveNode<El<SVGRectElement, M>> { return ReactiveNode.declare(SvgTags.rect, declaration) }
export function Stop<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGStopElement, M>>): ReactiveNode<El<SVGStopElement, M>> { return ReactiveNode.declare(SvgTags.stop, declaration) }
export function SvgSwitch<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGSwitchElement, M>>): ReactiveNode<El<SVGSwitchElement, M>> { return ReactiveNode.declare(SvgTags.switch, declaration) }
export function Symbol<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGSymbolElement, M>>): ReactiveNode<El<SVGSymbolElement, M>> { return ReactiveNode.declare(SvgTags.symbol, declaration) }
export function Text<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGTextElement, M>>): ReactiveNode<El<SVGTextElement, M>> { return ReactiveNode.declare(SvgTags.text, declaration) }
export function TextPath<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGTextPathElement, M>>): ReactiveNode<El<SVGTextPathElement, M>> { return ReactiveNode.declare(SvgTags.textPath, declaration) }
export function TSpan<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGTSpanElement, M>>): ReactiveNode<El<SVGTSpanElement, M>> { return ReactiveNode.declare(SvgTags.tspan, declaration) }
export function Use<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGUseElement, M>>): ReactiveNode<El<SVGUseElement, M>> { return ReactiveNode.declare(SvgTags.use, declaration) }
export function View<M = unknown>(declaration?: ReactiveNodeDecl<El<SVGViewElement, M>>): ReactiveNode<El<SVGViewElement, M>> { return ReactiveNode.declare(SvgTags.view, declaration) }

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
