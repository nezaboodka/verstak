// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2026 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { inherit, RtElement, ConfOrScript, RtNode } from "reactronic"
import { El, ElKind } from "../core/El.js"
import { SvgDriver } from "../core/WebDriver.js"

// Svg

export function Svg<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGSVGElement, M, D>>): RtNode<El<SVGSVGElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Svg.name,
    driver: SvgTags.svg,
  }))
}

// SvgA

export function SvgA<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGAElement, M, D>>): RtNode<El<SVGAElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: SvgA.name,
    driver: SvgTags.a,
  }))
}

// Animate

export function Animate<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGAnimateElement, M, D>>): RtNode<El<SVGAnimateElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Animate.name,
    driver: SvgTags.animate,
  }))
}

// AnimateMotion

export function AnimateMotion<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGAnimateMotionElement, M, D>>): RtNode<El<SVGAnimateMotionElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: AnimateMotion.name,
    driver: SvgTags.animateMotion,
  }))
}

// AnimateTransform

export function AnimateTransform<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGAnimateTransformElement, M, D>>): RtNode<El<SVGAnimateTransformElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: AnimateTransform.name,
    driver: SvgTags.animateTransform,
  }))
}

// Circle

export function Circle<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGCircleElement, M, D>>): RtNode<El<SVGCircleElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Circle.name,
    driver: SvgTags.circle,
  }))
}

// ClipPath

export function ClipPath<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGClipPathElement, M, D>>): RtNode<El<SVGClipPathElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: ClipPath.name,
    driver: SvgTags.clipPath,
  }))
}

// Defs

export function Defs<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGDefsElement, M, D>>): RtNode<El<SVGDefsElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Defs.name,
    driver: SvgTags.defs,
  }))
}

// Desc

export function Desc<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGDescElement, M, D>>): RtNode<El<SVGDescElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Desc.name,
    driver: SvgTags.desc,
  }))
}

// Ellipse

export function Ellipse<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGEllipseElement, M, D>>): RtNode<El<SVGEllipseElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Ellipse.name,
    driver: SvgTags.ellipse,
  }))
}

// FeBlend

export function FeBlend<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGFEBlendElement, M, D>>): RtNode<El<SVGFEBlendElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: FeBlend.name,
    driver: SvgTags.feBlend,
  }))
}

// FeColorMatrix

export function FeColorMatrix<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGFEColorMatrixElement, M, D>>): RtNode<El<SVGFEColorMatrixElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: FeColorMatrix.name,
    driver: SvgTags.feColorMatrix,
  }))
}

// FeComponentTransfer

export function FeComponentTransfer<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGFEComponentTransferElement, M, D>>): RtNode<El<SVGFEComponentTransferElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: FeComponentTransfer.name,
    driver: SvgTags.feComponentTransfer,
  }))
}

// FeComposite

export function FeComposite<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGFECompositeElement, M, D>>): RtNode<El<SVGFECompositeElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: FeComposite.name,
    driver: SvgTags.feComposite,
  }))
}

// FeConvolveMatrix

export function FeConvolveMatrix<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGFEConvolveMatrixElement, M, D>>): RtNode<El<SVGFEConvolveMatrixElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: FeConvolveMatrix.name,
    driver: SvgTags.feConvolveMatrix,
  }))
}

// FeDiffuseLighting

export function FeDiffuseLighting<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGFEDiffuseLightingElement, M, D>>): RtNode<El<SVGFEDiffuseLightingElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: FeDiffuseLighting.name,
    driver: SvgTags.feDiffuseLighting,
  }))
}

// FeDisplacementMap

export function FeDisplacementMap<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGFEDisplacementMapElement, M, D>>): RtNode<El<SVGFEDisplacementMapElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: FeDisplacementMap.name,
    driver: SvgTags.feDisplacementMap,
  }))
}

// FeDistantLight

export function FeDistantLight<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGFEDistantLightElement, M, D>>): RtNode<El<SVGFEDistantLightElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: FeDistantLight.name,
    driver: SvgTags.feDistantLight,
  }))
}

// FeDropShadow

export function FeDropShadow<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGFEDropShadowElement, M, D>>): RtNode<El<SVGFEDropShadowElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: FeDropShadow.name,
    driver: SvgTags.feDropShadow,
  }))
}

// FeFlood

export function FeFlood<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGFEFloodElement, M, D>>): RtNode<El<SVGFEFloodElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: FeFlood.name,
    driver: SvgTags.feFlood,
  }))
}

// FeFuncA

export function FeFuncA<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGFEFuncAElement, M, D>>): RtNode<El<SVGFEFuncAElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: FeFuncA.name,
    driver: SvgTags.feFuncA,
  }))
}

// FeFuncB

export function FeFuncB<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGFEFuncBElement, M, D>>): RtNode<El<SVGFEFuncBElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: FeFuncB.name,
    driver: SvgTags.feFuncB,
  }))
}

// FeFuncG

export function FeFuncG<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGFEFuncGElement, M, D>>): RtNode<El<SVGFEFuncGElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: FeFuncG.name,
    driver: SvgTags.feFuncG,
  }))
}

// FeFuncR

export function FeFuncR<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGFEFuncRElement, M, D>>): RtNode<El<SVGFEFuncRElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: FeFuncR.name,
    driver: SvgTags.feFuncR,
  }))
}

// FeGaussianBlur

export function FeGaussianBlur<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGFEGaussianBlurElement, M, D>>): RtNode<El<SVGFEGaussianBlurElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: FeGaussianBlur.name,
    driver: SvgTags.feGaussianBlur,
  }))
}

// FeImage

export function FeImage<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGFEImageElement, M, D>>): RtNode<El<SVGFEImageElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: FeImage.name,
    driver: SvgTags.feImage,
  }))
}

// FeMerge

export function FeMerge<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGFEMergeElement, M, D>>): RtNode<El<SVGFEMergeElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: FeMerge.name,
    driver: SvgTags.feMerge,
  }))
}

// FeMergeNode

export function FeMergeNode<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGFEMergeNodeElement, M, D>>): RtNode<El<SVGFEMergeNodeElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: FeMergeNode.name,
    driver: SvgTags.feMergeNode,
  }))
}

// FeMorphology

export function FeMorphology<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGFEMorphologyElement, M, D>>): RtNode<El<SVGFEMorphologyElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: FeMorphology.name,
    driver: SvgTags.feMorphology,
  }))
}

// FeOffset

export function FeOffset<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGFEOffsetElement, M, D>>): RtNode<El<SVGFEOffsetElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: FeOffset.name,
    driver: SvgTags.feOffset,
  }))
}

// FePointLight

export function FePointLight<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGFEPointLightElement, M, D>>): RtNode<El<SVGFEPointLightElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: FePointLight.name,
    driver: SvgTags.fePointLight,
  }))
}

// FeSpecularLighting

export function FeSpecularLighting<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGFESpecularLightingElement, M, D>>): RtNode<El<SVGFESpecularLightingElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: FeSpecularLighting.name,
    driver: SvgTags.feSpecularLighting,
  }))
}

// FeSpotLight

export function FeSpotLight<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGFESpotLightElement, M, D>>): RtNode<El<SVGFESpotLightElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: FeSpotLight.name,
    driver: SvgTags.feSpotLight,
  }))
}

// FeTile

export function FeTile<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGFETileElement, M, D>>): RtNode<El<SVGFETileElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: FeTile.name,
    driver: SvgTags.feTile,
  }))
}

// FeTurbulence

export function FeTurbulence<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGFETurbulenceElement, M, D>>): RtNode<El<SVGFETurbulenceElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: FeTurbulence.name,
    driver: SvgTags.feTurbulence,
  }))
}

// Filter

export function Filter<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGFilterElement, M, D>>): RtNode<El<SVGFilterElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Filter.name,
    driver: SvgTags.filter,
  }))
}

// ForeignObject

export function ForeignObject<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGForeignObjectElement, M, D>>): RtNode<El<SVGForeignObjectElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: ForeignObject.name,
    driver: SvgTags.foreignObject,
  }))
}

// G

export function G<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGGElement, M, D>>): RtNode<El<SVGGElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: G.name,
    driver: SvgTags.g,
  }))
}

// SvgImage

export function SvgImage<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGImageElement, M, D>>): RtNode<El<SVGImageElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: SvgImage.name,
    driver: SvgTags.image,
  }))
}

// SvgLine

export function SvgLine<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGLineElement, M, D>>): RtNode<El<SVGLineElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: SvgLine.name,
    driver: SvgTags.line,
  }))
}

// LinearGradient

export function LinearGradient<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGLinearGradientElement, M, D>>): RtNode<El<SVGLinearGradientElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: LinearGradient.name,
    driver: SvgTags.linearGradient,
  }))
}

// Marker

export function Marker<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGMarkerElement, M, D>>): RtNode<El<SVGMarkerElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Marker.name,
    driver: SvgTags.marker,
  }))
}

// Mask

export function Mask<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGMaskElement, M, D>>): RtNode<El<SVGMaskElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Mask.name,
    driver: SvgTags.mask,
  }))
}

// MetaData

export function MetaData<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGMetadataElement, M, D>>): RtNode<El<SVGMetadataElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: MetaData.name,
    driver: SvgTags.metadata,
  }))
}

// MPath

export function MPath<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGElement, M, D>>): RtNode<El<SVGElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: MPath.name,
    driver: SvgTags.mpath,
  }))
}

// Path

export function Path<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGPathElement, M, D>>): RtNode<El<SVGPathElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Path.name,
    driver: SvgTags.path,
  }))
}

// Pattern

export function Pattern<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGPatternElement, M, D>>): RtNode<El<SVGPatternElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Pattern.name,
    driver: SvgTags.pattern,
  }))
}

// Polygon

export function Polygon<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGPolygonElement, M, D>>): RtNode<El<SVGPolygonElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Polygon.name,
    driver: SvgTags.polygon,
  }))
}

// PolyLine

export function PolyLine<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGPolylineElement, M, D>>): RtNode<El<SVGPolylineElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: PolyLine.name,
    driver: SvgTags.polyline,
  }))
}

// RadialGradient

export function RadialGradient<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGRadialGradientElement, M, D>>): RtNode<El<SVGRadialGradientElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: RadialGradient.name,
    driver: SvgTags.radialGradient,
  }))
}

// Rect

export function Rect<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGRectElement, M, D>>): RtNode<El<SVGRectElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Rect.name,
    driver: SvgTags.rect,
  }))
}

// Stop

export function Stop<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGStopElement, M, D>>): RtNode<El<SVGStopElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Stop.name,
    driver: SvgTags.stop,
  }))
}

// SvgSwitch

export function SvgSwitch<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGSwitchElement, M, D>>): RtNode<El<SVGSwitchElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: SvgSwitch.name,
    driver: SvgTags.switch,
  }))
}

// Symbol

export function Symbol<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGSymbolElement, M, D>>): RtNode<El<SVGSymbolElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Symbol.name,
    driver: SvgTags.symbol,
  }))
}

// Text

export function Text<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGTextElement, M, D>>): RtNode<El<SVGTextElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Text.name,
    driver: SvgTags.text,
  }))
}

// TextPath

export function TextPath<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGTextPathElement, M, D>>): RtNode<El<SVGTextPathElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: TextPath.name,
    driver: SvgTags.textPath,
  }))
}

// TSpan

export function TSpan<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGTSpanElement, M, D>>): RtNode<El<SVGTSpanElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: TSpan.name,
    driver: SvgTags.tspan,
  }))
}

// Use

export function Use<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGUseElement, M, D>>): RtNode<El<SVGUseElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Use.name,
    driver: SvgTags.use,
  }))
}

// View

export function View<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<SVGViewElement, M, D>>): RtNode<El<SVGViewElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: View.name,
    driver: SvgTags.view,
  }))
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
