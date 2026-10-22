// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2026 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, ReactiveTreeNodeDesc, describe } from "reactronic"
import { El, ElKind } from "../core/El.js"
import { SvgDriver } from "../core/WebDriver.js"

export function Svg<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGSVGElement, M>>): ReactiveTreeNode<El<SVGSVGElement, M>> {
  return describe(Svg.name, SvgTags.svg, description ?? {})
}

export function SvgA<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGAElement, M>>): ReactiveTreeNode<El<SVGAElement, M>> {
  return describe(SvgA.name, SvgTags.a, description ?? {})
}

export function Animate<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGAnimateElement, M>>): ReactiveTreeNode<El<SVGAnimateElement, M>> {
  return describe(Animate.name, SvgTags.animate, description ?? {})
}

export function AnimateMotion<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGAnimateMotionElement, M>>): ReactiveTreeNode<El<SVGAnimateMotionElement, M>> {
  return describe(AnimateMotion.name, SvgTags.animateMotion, description ?? {})
}

export function AnimateTransform<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGAnimateTransformElement, M>>): ReactiveTreeNode<El<SVGAnimateTransformElement, M>> {
  return describe(AnimateTransform.name, SvgTags.animateTransform, description ?? {})
}

export function Circle<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGCircleElement, M>>): ReactiveTreeNode<El<SVGCircleElement, M>> {
  return describe(Circle.name, SvgTags.circle, description ?? {})
}

export function ClipPath<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGClipPathElement, M>>): ReactiveTreeNode<El<SVGClipPathElement, M>> {
  return describe(ClipPath.name, SvgTags.clipPath, description ?? {})
}

export function Defs<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGDefsElement, M>>): ReactiveTreeNode<El<SVGDefsElement, M>> {
  return describe(Defs.name, SvgTags.defs, description ?? {})
}

export function Desc<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGDescElement, M>>): ReactiveTreeNode<El<SVGDescElement, M>> {
  return describe(Desc.name, SvgTags.desc, description ?? {})
}

export function Ellipse<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGEllipseElement, M>>): ReactiveTreeNode<El<SVGEllipseElement, M>> {
  return describe(Ellipse.name, SvgTags.ellipse, description ?? {})
}

export function FeBlend<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGFEBlendElement, M>>): ReactiveTreeNode<El<SVGFEBlendElement, M>> {
  return describe(FeBlend.name, SvgTags.feBlend, description ?? {})
}

export function FeColorMatrix<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGFEColorMatrixElement, M>>): ReactiveTreeNode<El<SVGFEColorMatrixElement, M>> {
  return describe(FeColorMatrix.name, SvgTags.feColorMatrix, description ?? {})
}

export function FeComponentTransfer<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGFEComponentTransferElement, M>>): ReactiveTreeNode<El<SVGFEComponentTransferElement, M>> {
  return describe(FeComponentTransfer.name, SvgTags.feComponentTransfer, description ?? {})
}

export function FeComposite<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGFECompositeElement, M>>): ReactiveTreeNode<El<SVGFECompositeElement, M>> {
  return describe(FeComposite.name, SvgTags.feComposite, description ?? {})
}

export function FeConvolveMatrix<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGFEConvolveMatrixElement, M>>): ReactiveTreeNode<El<SVGFEConvolveMatrixElement, M>> {
  return describe(FeConvolveMatrix.name, SvgTags.feConvolveMatrix, description ?? {})
}

export function FeDiffuseLighting<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGFEDiffuseLightingElement, M>>): ReactiveTreeNode<El<SVGFEDiffuseLightingElement, M>> {
  return describe(FeDiffuseLighting.name, SvgTags.feDiffuseLighting, description ?? {})
}

export function FeDisplacementMap<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGFEDisplacementMapElement, M>>): ReactiveTreeNode<El<SVGFEDisplacementMapElement, M>> {
  return describe(FeDisplacementMap.name, SvgTags.feDisplacementMap, description ?? {})
}

export function FeDistantLight<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGFEDistantLightElement, M>>): ReactiveTreeNode<El<SVGFEDistantLightElement, M>> {
  return describe(FeDistantLight.name, SvgTags.feDistantLight, description ?? {})
}

export function FeDropShadow<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGFEDropShadowElement, M>>): ReactiveTreeNode<El<SVGFEDropShadowElement, M>> {
  return describe(FeDropShadow.name, SvgTags.feDropShadow, description ?? {})
}

export function FeFlood<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGFEFloodElement, M>>): ReactiveTreeNode<El<SVGFEFloodElement, M>> {
  return describe(FeFlood.name, SvgTags.feFlood, description ?? {})
}

export function FeFuncA<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGFEFuncAElement, M>>): ReactiveTreeNode<El<SVGFEFuncAElement, M>> {
  return describe(FeFuncA.name, SvgTags.feFuncA, description ?? {})
}

export function FeFuncB<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGFEFuncBElement, M>>): ReactiveTreeNode<El<SVGFEFuncBElement, M>> {
  return describe(FeFuncB.name, SvgTags.feFuncB, description ?? {})
}

export function FeFuncG<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGFEFuncGElement, M>>): ReactiveTreeNode<El<SVGFEFuncGElement, M>> {
  return describe(FeFuncG.name, SvgTags.feFuncG, description ?? {})
}

export function FeFuncR<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGFEFuncRElement, M>>): ReactiveTreeNode<El<SVGFEFuncRElement, M>> {
  return describe(FeFuncR.name, SvgTags.feFuncR, description ?? {})
}

export function FeGaussianBlur<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGFEGaussianBlurElement, M>>): ReactiveTreeNode<El<SVGFEGaussianBlurElement, M>> {
  return describe(FeGaussianBlur.name, SvgTags.feGaussianBlur, description ?? {})
}

export function FeImage<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGFEImageElement, M>>): ReactiveTreeNode<El<SVGFEImageElement, M>> {
  return describe(FeImage.name, SvgTags.feImage, description ?? {})
}

export function FeMerge<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGFEMergeElement, M>>): ReactiveTreeNode<El<SVGFEMergeElement, M>> {
  return describe(FeMerge.name, SvgTags.feMerge, description ?? {})
}

export function FeMergeNode<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGFEMergeNodeElement, M>>): ReactiveTreeNode<El<SVGFEMergeNodeElement, M>> {
  return describe(FeMergeNode.name, SvgTags.feMergeNode, description ?? {})
}

export function FeMorphology<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGFEMorphologyElement, M>>): ReactiveTreeNode<El<SVGFEMorphologyElement, M>> {
  return describe(FeMorphology.name, SvgTags.feMorphology, description ?? {})
}

export function FeOffset<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGFEOffsetElement, M>>): ReactiveTreeNode<El<SVGFEOffsetElement, M>> {
  return describe(FeOffset.name, SvgTags.feOffset, description ?? {})
}

export function FePointLight<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGFEPointLightElement, M>>): ReactiveTreeNode<El<SVGFEPointLightElement, M>> {
  return describe(FePointLight.name, SvgTags.fePointLight, description ?? {})
}

export function FeSpecularLighting<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGFESpecularLightingElement, M>>): ReactiveTreeNode<El<SVGFESpecularLightingElement, M>> {
  return describe(FeSpecularLighting.name, SvgTags.feSpecularLighting, description ?? {})
}

export function FeSpotLight<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGFESpotLightElement, M>>): ReactiveTreeNode<El<SVGFESpotLightElement, M>> {
  return describe(FeSpotLight.name, SvgTags.feSpotLight, description ?? {})
}

export function FeTile<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGFETileElement, M>>): ReactiveTreeNode<El<SVGFETileElement, M>> {
  return describe(FeTile.name, SvgTags.feTile, description ?? {})
}

export function FeTurbulence<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGFETurbulenceElement, M>>): ReactiveTreeNode<El<SVGFETurbulenceElement, M>> {
  return describe(FeTurbulence.name, SvgTags.feTurbulence, description ?? {})
}

export function Filter<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGFilterElement, M>>): ReactiveTreeNode<El<SVGFilterElement, M>> {
  return describe(Filter.name, SvgTags.filter, description ?? {})
}

export function ForeignObject<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGForeignObjectElement, M>>): ReactiveTreeNode<El<SVGForeignObjectElement, M>> {
  return describe(ForeignObject.name, SvgTags.foreignObject, description ?? {})
}

export function G<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGGElement, M>>): ReactiveTreeNode<El<SVGGElement, M>> {
  return describe(G.name, SvgTags.g, description ?? {})
}

export function SvgImage<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGImageElement, M>>): ReactiveTreeNode<El<SVGImageElement, M>> {
  return describe(SvgImage.name, SvgTags.image, description ?? {})
}

export function SvgLine<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGLineElement, M>>): ReactiveTreeNode<El<SVGLineElement, M>> {
  return describe(SvgLine.name, SvgTags.line, description ?? {})
}

export function LinearGradient<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGLinearGradientElement, M>>): ReactiveTreeNode<El<SVGLinearGradientElement, M>> {
  return describe(LinearGradient.name, SvgTags.linearGradient, description ?? {})
}

export function Marker<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGMarkerElement, M>>): ReactiveTreeNode<El<SVGMarkerElement, M>> {
  return describe(Marker.name, SvgTags.marker, description ?? {})
}

export function Mask<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGMaskElement, M>>): ReactiveTreeNode<El<SVGMaskElement, M>> {
  return describe(Mask.name, SvgTags.mask, description ?? {})
}

export function MetaData<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGMetadataElement, M>>): ReactiveTreeNode<El<SVGMetadataElement, M>> {
  return describe(MetaData.name, SvgTags.metadata, description ?? {})
}

export function MPath<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGElement, M>>): ReactiveTreeNode<El<SVGElement, M>> {
  return describe(MPath.name, SvgTags.mpath, description ?? {})
}

export function Path<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGPathElement, M>>): ReactiveTreeNode<El<SVGPathElement, M>> {
  return describe(Path.name, SvgTags.path, description ?? {})
}

export function Pattern<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGPatternElement, M>>): ReactiveTreeNode<El<SVGPatternElement, M>> {
  return describe(Pattern.name, SvgTags.pattern, description ?? {})
}

export function Polygon<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGPolygonElement, M>>): ReactiveTreeNode<El<SVGPolygonElement, M>> {
  return describe(Polygon.name, SvgTags.polygon, description ?? {})
}

export function PolyLine<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGPolylineElement, M>>): ReactiveTreeNode<El<SVGPolylineElement, M>> {
  return describe(PolyLine.name, SvgTags.polyline, description ?? {})
}

export function RadialGradient<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGRadialGradientElement, M>>): ReactiveTreeNode<El<SVGRadialGradientElement, M>> {
  return describe(RadialGradient.name, SvgTags.radialGradient, description ?? {})
}

export function Rect<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGRectElement, M>>): ReactiveTreeNode<El<SVGRectElement, M>> {
  return describe(Rect.name, SvgTags.rect, description ?? {})
}

export function Stop<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGStopElement, M>>): ReactiveTreeNode<El<SVGStopElement, M>> {
  return describe(Stop.name, SvgTags.stop, description ?? {})
}

export function SvgSwitch<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGSwitchElement, M>>): ReactiveTreeNode<El<SVGSwitchElement, M>> {
  return describe(SvgSwitch.name, SvgTags.switch, description ?? {})
}

export function Symbol<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGSymbolElement, M>>): ReactiveTreeNode<El<SVGSymbolElement, M>> {
  return describe(Symbol.name, SvgTags.symbol, description ?? {})
}

export function Text<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGTextElement, M>>): ReactiveTreeNode<El<SVGTextElement, M>> {
  return describe(Text.name, SvgTags.text, description ?? {})
}

export function TextPath<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGTextPathElement, M>>): ReactiveTreeNode<El<SVGTextPathElement, M>> {
  return describe(TextPath.name, SvgTags.textPath, description ?? {})
}

export function TSpan<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGTSpanElement, M>>): ReactiveTreeNode<El<SVGTSpanElement, M>> {
  return describe(TSpan.name, SvgTags.tspan, description ?? {})
}

export function Use<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGUseElement, M>>): ReactiveTreeNode<El<SVGUseElement, M>> {
  return describe(Use.name, SvgTags.use, description ?? {})
}

export function View<M = unknown>(description?: ReactiveTreeNodeDesc<El<SVGViewElement, M>>): ReactiveTreeNode<El<SVGViewElement, M>> {
  return describe(View.name, SvgTags.view, description ?? {})
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
