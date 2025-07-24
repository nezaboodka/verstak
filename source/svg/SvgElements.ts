// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2025 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTree, ReactiveTreeNode, ReactiveTreeNodeDecl } from "reactronic"
import { El, ElKind } from "../core/El.js"
import { SvgDriver } from "../core/WebDriver.js"

export function Svg<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGSVGElement, M>>): ReactiveTreeNode<El<SVGSVGElement, M>> { return ReactiveTree.declare(SvgTags.svg, declaration) }
export function SvgA<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGAElement, M>>): ReactiveTreeNode<El<SVGAElement, M>> { return ReactiveTree.declare(SvgTags.a, declaration) }
export function Animate<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGAnimateElement, M>>): ReactiveTreeNode<El<SVGAnimateElement, M>> { return ReactiveTree.declare(SvgTags.animate, declaration) }
export function AnimateMotion<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGAnimateMotionElement, M>>): ReactiveTreeNode<El<SVGAnimateMotionElement, M>> { return ReactiveTree.declare(SvgTags.animateMotion, declaration) }
export function AnimateTransform<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGAnimateTransformElement, M>>): ReactiveTreeNode<El<SVGAnimateTransformElement, M>> { return ReactiveTree.declare(SvgTags.animateTransform, declaration) }
export function Circle<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGCircleElement, M>>): ReactiveTreeNode<El<SVGCircleElement, M>> { return ReactiveTree.declare(SvgTags.circle, declaration) }
export function ClipPath<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGClipPathElement, M>>): ReactiveTreeNode<El<SVGClipPathElement, M>> { return ReactiveTree.declare(SvgTags.clipPath, declaration) }
export function Defs<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGDefsElement, M>>): ReactiveTreeNode<El<SVGDefsElement, M>> { return ReactiveTree.declare(SvgTags.defs, declaration) }
export function Desc<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGDescElement, M>>): ReactiveTreeNode<El<SVGDescElement, M>> { return ReactiveTree.declare(SvgTags.desc, declaration) }
export function Ellipse<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGEllipseElement, M>>): ReactiveTreeNode<El<SVGEllipseElement, M>> { return ReactiveTree.declare(SvgTags.ellipse, declaration) }
export function FeBlend<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGFEBlendElement, M>>): ReactiveTreeNode<El<SVGFEBlendElement, M>> { return ReactiveTree.declare(SvgTags.feBlend, declaration) }
export function FeColorMatrix<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGFEColorMatrixElement, M>>): ReactiveTreeNode<El<SVGFEColorMatrixElement, M>> { return ReactiveTree.declare(SvgTags.feColorMatrix, declaration) }
export function FeComponentTransfer<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGFEComponentTransferElement, M>>): ReactiveTreeNode<El<SVGFEComponentTransferElement, M>> { return ReactiveTree.declare(SvgTags.feComponentTransfer, declaration) }
export function FeComposite<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGFECompositeElement, M>>): ReactiveTreeNode<El<SVGFECompositeElement, M>> { return ReactiveTree.declare(SvgTags.feComposite, declaration) }
export function FeConvolveMatrix<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGFEConvolveMatrixElement, M>>): ReactiveTreeNode<El<SVGFEConvolveMatrixElement, M>> { return ReactiveTree.declare(SvgTags.feConvolveMatrix, declaration) }
export function FeDiffuseLighting<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGFEDiffuseLightingElement, M>>): ReactiveTreeNode<El<SVGFEDiffuseLightingElement, M>> { return ReactiveTree.declare(SvgTags.feDiffuseLighting, declaration) }
export function FeDisplacementMap<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGFEDisplacementMapElement, M>>): ReactiveTreeNode<El<SVGFEDisplacementMapElement, M>> { return ReactiveTree.declare(SvgTags.feDisplacementMap, declaration) }
export function FeDistantLight<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGFEDistantLightElement, M>>): ReactiveTreeNode<El<SVGFEDistantLightElement, M>> { return ReactiveTree.declare(SvgTags.feDistantLight, declaration) }
export function FeDropShadow<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGFEDropShadowElement, M>>): ReactiveTreeNode<El<SVGFEDropShadowElement, M>> { return ReactiveTree.declare(SvgTags.feDropShadow, declaration) }
export function FeFlood<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGFEFloodElement, M>>): ReactiveTreeNode<El<SVGFEFloodElement, M>> { return ReactiveTree.declare(SvgTags.feFlood, declaration) }
export function FeFuncA<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGFEFuncAElement, M>>): ReactiveTreeNode<El<SVGFEFuncAElement, M>> { return ReactiveTree.declare(SvgTags.feFuncA, declaration) }
export function FeFuncB<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGFEFuncBElement, M>>): ReactiveTreeNode<El<SVGFEFuncBElement, M>> { return ReactiveTree.declare(SvgTags.feFuncB, declaration) }
export function FeFuncG<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGFEFuncGElement, M>>): ReactiveTreeNode<El<SVGFEFuncGElement, M>> { return ReactiveTree.declare(SvgTags.feFuncG, declaration) }
export function FeFuncR<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGFEFuncRElement, M>>): ReactiveTreeNode<El<SVGFEFuncRElement, M>> { return ReactiveTree.declare(SvgTags.feFuncR, declaration) }
export function FeGaussianBlur<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGFEGaussianBlurElement, M>>): ReactiveTreeNode<El<SVGFEGaussianBlurElement, M>> { return ReactiveTree.declare(SvgTags.feGaussianBlur, declaration) }
export function FeImage<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGFEImageElement, M>>): ReactiveTreeNode<El<SVGFEImageElement, M>> { return ReactiveTree.declare(SvgTags.feImage, declaration) }
export function FeMerge<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGFEMergeElement, M>>): ReactiveTreeNode<El<SVGFEMergeElement, M>> { return ReactiveTree.declare(SvgTags.feMerge, declaration) }
export function FeMergeNode<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGFEMergeNodeElement, M>>): ReactiveTreeNode<El<SVGFEMergeNodeElement, M>> { return ReactiveTree.declare(SvgTags.feMergeNode, declaration) }
export function FeMorphology<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGFEMorphologyElement, M>>): ReactiveTreeNode<El<SVGFEMorphologyElement, M>> { return ReactiveTree.declare(SvgTags.feMorphology, declaration) }
export function FeOffset<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGFEOffsetElement, M>>): ReactiveTreeNode<El<SVGFEOffsetElement, M>> { return ReactiveTree.declare(SvgTags.feOffset, declaration) }
export function FePointLight<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGFEPointLightElement, M>>): ReactiveTreeNode<El<SVGFEPointLightElement, M>> { return ReactiveTree.declare(SvgTags.fePointLight, declaration) }
export function FeSpecularLighting<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGFESpecularLightingElement, M>>): ReactiveTreeNode<El<SVGFESpecularLightingElement, M>> { return ReactiveTree.declare(SvgTags.feSpecularLighting, declaration) }
export function FeSpotLight<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGFESpotLightElement, M>>): ReactiveTreeNode<El<SVGFESpotLightElement, M>> { return ReactiveTree.declare(SvgTags.feSpotLight, declaration) }
export function FeTile<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGFETileElement, M>>): ReactiveTreeNode<El<SVGFETileElement, M>> { return ReactiveTree.declare(SvgTags.feTile, declaration) }
export function FeTurbulence<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGFETurbulenceElement, M>>): ReactiveTreeNode<El<SVGFETurbulenceElement, M>> { return ReactiveTree.declare(SvgTags.feTurbulence, declaration) }
export function Filter<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGFilterElement, M>>): ReactiveTreeNode<El<SVGFilterElement, M>> { return ReactiveTree.declare(SvgTags.filter, declaration) }
export function ForeignObject<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGForeignObjectElement, M>>): ReactiveTreeNode<El<SVGForeignObjectElement, M>> { return ReactiveTree.declare(SvgTags.foreignObject, declaration) }
export function G<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGGElement, M>>): ReactiveTreeNode<El<SVGGElement, M>> { return ReactiveTree.declare(SvgTags.g, declaration) }
export function SvgImage<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGImageElement, M>>): ReactiveTreeNode<El<SVGImageElement, M>> { return ReactiveTree.declare(SvgTags.image, declaration) }
export function SvgLine<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGLineElement, M>>): ReactiveTreeNode<El<SVGLineElement, M>> { return ReactiveTree.declare(SvgTags.line, declaration) }
export function LinearGradient<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGLinearGradientElement, M>>): ReactiveTreeNode<El<SVGLinearGradientElement, M>> { return ReactiveTree.declare(SvgTags.linearGradient, declaration) }
export function Marker<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGMarkerElement, M>>): ReactiveTreeNode<El<SVGMarkerElement, M>> { return ReactiveTree.declare(SvgTags.marker, declaration) }
export function Mask<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGMaskElement, M>>): ReactiveTreeNode<El<SVGMaskElement, M>> { return ReactiveTree.declare(SvgTags.mask, declaration) }
export function MetaData<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGMetadataElement, M>>): ReactiveTreeNode<El<SVGMetadataElement, M>> { return ReactiveTree.declare(SvgTags.metadata, declaration) }
export function MPath<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGElement, M>>): ReactiveTreeNode<El<SVGElement, M>> { return ReactiveTree.declare(SvgTags.mpath, declaration) }
export function Path<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGPathElement, M>>): ReactiveTreeNode<El<SVGPathElement, M>> { return ReactiveTree.declare(SvgTags.path, declaration) }
export function Pattern<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGPatternElement, M>>): ReactiveTreeNode<El<SVGPatternElement, M>> { return ReactiveTree.declare(SvgTags.pattern, declaration) }
export function Polygon<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGPolygonElement, M>>): ReactiveTreeNode<El<SVGPolygonElement, M>> { return ReactiveTree.declare(SvgTags.polygon, declaration) }
export function PolyLine<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGPolylineElement, M>>): ReactiveTreeNode<El<SVGPolylineElement, M>> { return ReactiveTree.declare(SvgTags.polyline, declaration) }
export function RadialGradient<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGRadialGradientElement, M>>): ReactiveTreeNode<El<SVGRadialGradientElement, M>> { return ReactiveTree.declare(SvgTags.radialGradient, declaration) }
export function Rect<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGRectElement, M>>): ReactiveTreeNode<El<SVGRectElement, M>> { return ReactiveTree.declare(SvgTags.rect, declaration) }
export function Stop<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGStopElement, M>>): ReactiveTreeNode<El<SVGStopElement, M>> { return ReactiveTree.declare(SvgTags.stop, declaration) }
export function SvgSwitch<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGSwitchElement, M>>): ReactiveTreeNode<El<SVGSwitchElement, M>> { return ReactiveTree.declare(SvgTags.switch, declaration) }
export function Symbol<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGSymbolElement, M>>): ReactiveTreeNode<El<SVGSymbolElement, M>> { return ReactiveTree.declare(SvgTags.symbol, declaration) }
export function Text<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGTextElement, M>>): ReactiveTreeNode<El<SVGTextElement, M>> { return ReactiveTree.declare(SvgTags.text, declaration) }
export function TextPath<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGTextPathElement, M>>): ReactiveTreeNode<El<SVGTextPathElement, M>> { return ReactiveTree.declare(SvgTags.textPath, declaration) }
export function TSpan<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGTSpanElement, M>>): ReactiveTreeNode<El<SVGTSpanElement, M>> { return ReactiveTree.declare(SvgTags.tspan, declaration) }
export function Use<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGUseElement, M>>): ReactiveTreeNode<El<SVGUseElement, M>> { return ReactiveTree.declare(SvgTags.use, declaration) }
export function View<M = unknown>(declaration?: ReactiveTreeNodeDecl<El<SVGViewElement, M>>): ReactiveTreeNode<El<SVGViewElement, M>> { return ReactiveTree.declare(SvgTags.view, declaration) }

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
