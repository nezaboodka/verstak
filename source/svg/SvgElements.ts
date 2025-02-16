// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveNode, ReactiveNodeDecl } from "reactronic"
import { El, ElKind } from "../core/El.js"
import { SvgDriver } from "../core/WebDriver.js"

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
