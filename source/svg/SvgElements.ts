// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2026 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, ReactiveTreeNodeDesc, Script, Mode, ScriptTask, describe } from "reactronic"
import { El, ElKind } from "../core/El.js"
import { SvgDriver } from "../core/WebDriver.js"

// Svg

export function Svg<M = unknown, D = unknown>(
  setup: Script<El<SVGSVGElement, M, D>>,
  setupTask?: ScriptTask<El<SVGSVGElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGSVGElement, M, D>>): ReactiveTreeNode<El<SVGSVGElement, M, D>>

export function Svg<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGSVGElement, M, D>>,
  setupTask?: ScriptTask<El<SVGSVGElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGSVGElement, M, D>>): ReactiveTreeNode<El<SVGSVGElement, M, D>>

export function Svg<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGSVGElement, M, D>>,
  setupTask?: ScriptTask<El<SVGSVGElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGSVGElement, M, D>>): ReactiveTreeNode<El<SVGSVGElement, M, D>>

export function Svg<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGSVGElement, M, D>>,
  setupTask?: ScriptTask<El<SVGSVGElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGSVGElement, M, D>>): ReactiveTreeNode<El<SVGSVGElement, M, D>>

export function Svg<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGSVGElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGSVGElement, M, D>>): ReactiveTreeNode<El<SVGSVGElement, M, D>>

export function Svg<M = unknown, D = unknown>(
  p1?: Script<El<SVGSVGElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGSVGElement, M, D>>,
  p2?: Script<El<SVGSVGElement, M, D>> | ScriptTask<El<SVGSVGElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGSVGElement, M, D>>,
  p3?: Script<El<SVGSVGElement, M, D>> | ScriptTask<El<SVGSVGElement, M, D>> | ReactiveTreeNodeDesc<El<SVGSVGElement, M, D>>,
  p4?: ScriptTask<El<SVGSVGElement, M, D>> | ReactiveTreeNodeDesc<El<SVGSVGElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGSVGElement, M, D>>): ReactiveTreeNode<El<SVGSVGElement, M, D>> {
  //
  return describe(Svg.name, SvgTags.svg, p1, p2, p3, p4, p5)
}

// SvgA

export function SvgA<M = unknown, D = unknown>(
  setup: Script<El<SVGAElement, M, D>>,
  setupTask?: ScriptTask<El<SVGAElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGAElement, M, D>>): ReactiveTreeNode<El<SVGAElement, M, D>>

export function SvgA<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGAElement, M, D>>,
  setupTask?: ScriptTask<El<SVGAElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGAElement, M, D>>): ReactiveTreeNode<El<SVGAElement, M, D>>

export function SvgA<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGAElement, M, D>>,
  setupTask?: ScriptTask<El<SVGAElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGAElement, M, D>>): ReactiveTreeNode<El<SVGAElement, M, D>>

export function SvgA<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGAElement, M, D>>,
  setupTask?: ScriptTask<El<SVGAElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGAElement, M, D>>): ReactiveTreeNode<El<SVGAElement, M, D>>

export function SvgA<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGAElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGAElement, M, D>>): ReactiveTreeNode<El<SVGAElement, M, D>>

export function SvgA<M = unknown, D = unknown>(
  p1?: Script<El<SVGAElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGAElement, M, D>>,
  p2?: Script<El<SVGAElement, M, D>> | ScriptTask<El<SVGAElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGAElement, M, D>>,
  p3?: Script<El<SVGAElement, M, D>> | ScriptTask<El<SVGAElement, M, D>> | ReactiveTreeNodeDesc<El<SVGAElement, M, D>>,
  p4?: ScriptTask<El<SVGAElement, M, D>> | ReactiveTreeNodeDesc<El<SVGAElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGAElement, M, D>>): ReactiveTreeNode<El<SVGAElement, M, D>> {
  //
  return describe(SvgA.name, SvgTags.a, p1, p2, p3, p4, p5)
}

// Animate

export function Animate<M = unknown, D = unknown>(
  setup: Script<El<SVGAnimateElement, M, D>>,
  setupTask?: ScriptTask<El<SVGAnimateElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGAnimateElement, M, D>>): ReactiveTreeNode<El<SVGAnimateElement, M, D>>

export function Animate<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGAnimateElement, M, D>>,
  setupTask?: ScriptTask<El<SVGAnimateElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGAnimateElement, M, D>>): ReactiveTreeNode<El<SVGAnimateElement, M, D>>

export function Animate<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGAnimateElement, M, D>>,
  setupTask?: ScriptTask<El<SVGAnimateElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGAnimateElement, M, D>>): ReactiveTreeNode<El<SVGAnimateElement, M, D>>

export function Animate<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGAnimateElement, M, D>>,
  setupTask?: ScriptTask<El<SVGAnimateElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGAnimateElement, M, D>>): ReactiveTreeNode<El<SVGAnimateElement, M, D>>

export function Animate<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGAnimateElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGAnimateElement, M, D>>): ReactiveTreeNode<El<SVGAnimateElement, M, D>>

export function Animate<M = unknown, D = unknown>(
  p1?: Script<El<SVGAnimateElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGAnimateElement, M, D>>,
  p2?: Script<El<SVGAnimateElement, M, D>> | ScriptTask<El<SVGAnimateElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGAnimateElement, M, D>>,
  p3?: Script<El<SVGAnimateElement, M, D>> | ScriptTask<El<SVGAnimateElement, M, D>> | ReactiveTreeNodeDesc<El<SVGAnimateElement, M, D>>,
  p4?: ScriptTask<El<SVGAnimateElement, M, D>> | ReactiveTreeNodeDesc<El<SVGAnimateElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGAnimateElement, M, D>>): ReactiveTreeNode<El<SVGAnimateElement, M, D>> {
  //
  return describe(Animate.name, SvgTags.animate, p1, p2, p3, p4, p5)
}

// AnimateMotion

export function AnimateMotion<M = unknown, D = unknown>(
  setup: Script<El<SVGAnimateMotionElement, M, D>>,
  setupTask?: ScriptTask<El<SVGAnimateMotionElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGAnimateMotionElement, M, D>>): ReactiveTreeNode<El<SVGAnimateMotionElement, M, D>>

export function AnimateMotion<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGAnimateMotionElement, M, D>>,
  setupTask?: ScriptTask<El<SVGAnimateMotionElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGAnimateMotionElement, M, D>>): ReactiveTreeNode<El<SVGAnimateMotionElement, M, D>>

export function AnimateMotion<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGAnimateMotionElement, M, D>>,
  setupTask?: ScriptTask<El<SVGAnimateMotionElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGAnimateMotionElement, M, D>>): ReactiveTreeNode<El<SVGAnimateMotionElement, M, D>>

export function AnimateMotion<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGAnimateMotionElement, M, D>>,
  setupTask?: ScriptTask<El<SVGAnimateMotionElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGAnimateMotionElement, M, D>>): ReactiveTreeNode<El<SVGAnimateMotionElement, M, D>>

export function AnimateMotion<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGAnimateMotionElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGAnimateMotionElement, M, D>>): ReactiveTreeNode<El<SVGAnimateMotionElement, M, D>>

export function AnimateMotion<M = unknown, D = unknown>(
  p1?: Script<El<SVGAnimateMotionElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGAnimateMotionElement, M, D>>,
  p2?: Script<El<SVGAnimateMotionElement, M, D>> | ScriptTask<El<SVGAnimateMotionElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGAnimateMotionElement, M, D>>,
  p3?: Script<El<SVGAnimateMotionElement, M, D>> | ScriptTask<El<SVGAnimateMotionElement, M, D>> | ReactiveTreeNodeDesc<El<SVGAnimateMotionElement, M, D>>,
  p4?: ScriptTask<El<SVGAnimateMotionElement, M, D>> | ReactiveTreeNodeDesc<El<SVGAnimateMotionElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGAnimateMotionElement, M, D>>): ReactiveTreeNode<El<SVGAnimateMotionElement, M, D>> {
  //
  return describe(AnimateMotion.name, SvgTags.animateMotion, p1, p2, p3, p4, p5)
}

// AnimateTransform

export function AnimateTransform<M = unknown, D = unknown>(
  setup: Script<El<SVGAnimateTransformElement, M, D>>,
  setupTask?: ScriptTask<El<SVGAnimateTransformElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGAnimateTransformElement, M, D>>): ReactiveTreeNode<El<SVGAnimateTransformElement, M, D>>

export function AnimateTransform<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGAnimateTransformElement, M, D>>,
  setupTask?: ScriptTask<El<SVGAnimateTransformElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGAnimateTransformElement, M, D>>): ReactiveTreeNode<El<SVGAnimateTransformElement, M, D>>

export function AnimateTransform<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGAnimateTransformElement, M, D>>,
  setupTask?: ScriptTask<El<SVGAnimateTransformElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGAnimateTransformElement, M, D>>): ReactiveTreeNode<El<SVGAnimateTransformElement, M, D>>

export function AnimateTransform<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGAnimateTransformElement, M, D>>,
  setupTask?: ScriptTask<El<SVGAnimateTransformElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGAnimateTransformElement, M, D>>): ReactiveTreeNode<El<SVGAnimateTransformElement, M, D>>

export function AnimateTransform<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGAnimateTransformElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGAnimateTransformElement, M, D>>): ReactiveTreeNode<El<SVGAnimateTransformElement, M, D>>

export function AnimateTransform<M = unknown, D = unknown>(
  p1?: Script<El<SVGAnimateTransformElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGAnimateTransformElement, M, D>>,
  p2?: Script<El<SVGAnimateTransformElement, M, D>> | ScriptTask<El<SVGAnimateTransformElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGAnimateTransformElement, M, D>>,
  p3?: Script<El<SVGAnimateTransformElement, M, D>> | ScriptTask<El<SVGAnimateTransformElement, M, D>> | ReactiveTreeNodeDesc<El<SVGAnimateTransformElement, M, D>>,
  p4?: ScriptTask<El<SVGAnimateTransformElement, M, D>> | ReactiveTreeNodeDesc<El<SVGAnimateTransformElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGAnimateTransformElement, M, D>>): ReactiveTreeNode<El<SVGAnimateTransformElement, M, D>> {
  //
  return describe(AnimateTransform.name, SvgTags.animateTransform, p1, p2, p3, p4, p5)
}

// Circle

export function Circle<M = unknown, D = unknown>(
  setup: Script<El<SVGCircleElement, M, D>>,
  setupTask?: ScriptTask<El<SVGCircleElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGCircleElement, M, D>>): ReactiveTreeNode<El<SVGCircleElement, M, D>>

export function Circle<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGCircleElement, M, D>>,
  setupTask?: ScriptTask<El<SVGCircleElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGCircleElement, M, D>>): ReactiveTreeNode<El<SVGCircleElement, M, D>>

export function Circle<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGCircleElement, M, D>>,
  setupTask?: ScriptTask<El<SVGCircleElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGCircleElement, M, D>>): ReactiveTreeNode<El<SVGCircleElement, M, D>>

export function Circle<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGCircleElement, M, D>>,
  setupTask?: ScriptTask<El<SVGCircleElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGCircleElement, M, D>>): ReactiveTreeNode<El<SVGCircleElement, M, D>>

export function Circle<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGCircleElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGCircleElement, M, D>>): ReactiveTreeNode<El<SVGCircleElement, M, D>>

export function Circle<M = unknown, D = unknown>(
  p1?: Script<El<SVGCircleElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGCircleElement, M, D>>,
  p2?: Script<El<SVGCircleElement, M, D>> | ScriptTask<El<SVGCircleElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGCircleElement, M, D>>,
  p3?: Script<El<SVGCircleElement, M, D>> | ScriptTask<El<SVGCircleElement, M, D>> | ReactiveTreeNodeDesc<El<SVGCircleElement, M, D>>,
  p4?: ScriptTask<El<SVGCircleElement, M, D>> | ReactiveTreeNodeDesc<El<SVGCircleElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGCircleElement, M, D>>): ReactiveTreeNode<El<SVGCircleElement, M, D>> {
  //
  return describe(Circle.name, SvgTags.circle, p1, p2, p3, p4, p5)
}

// ClipPath

export function ClipPath<M = unknown, D = unknown>(
  setup: Script<El<SVGClipPathElement, M, D>>,
  setupTask?: ScriptTask<El<SVGClipPathElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGClipPathElement, M, D>>): ReactiveTreeNode<El<SVGClipPathElement, M, D>>

export function ClipPath<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGClipPathElement, M, D>>,
  setupTask?: ScriptTask<El<SVGClipPathElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGClipPathElement, M, D>>): ReactiveTreeNode<El<SVGClipPathElement, M, D>>

export function ClipPath<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGClipPathElement, M, D>>,
  setupTask?: ScriptTask<El<SVGClipPathElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGClipPathElement, M, D>>): ReactiveTreeNode<El<SVGClipPathElement, M, D>>

export function ClipPath<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGClipPathElement, M, D>>,
  setupTask?: ScriptTask<El<SVGClipPathElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGClipPathElement, M, D>>): ReactiveTreeNode<El<SVGClipPathElement, M, D>>

export function ClipPath<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGClipPathElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGClipPathElement, M, D>>): ReactiveTreeNode<El<SVGClipPathElement, M, D>>

export function ClipPath<M = unknown, D = unknown>(
  p1?: Script<El<SVGClipPathElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGClipPathElement, M, D>>,
  p2?: Script<El<SVGClipPathElement, M, D>> | ScriptTask<El<SVGClipPathElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGClipPathElement, M, D>>,
  p3?: Script<El<SVGClipPathElement, M, D>> | ScriptTask<El<SVGClipPathElement, M, D>> | ReactiveTreeNodeDesc<El<SVGClipPathElement, M, D>>,
  p4?: ScriptTask<El<SVGClipPathElement, M, D>> | ReactiveTreeNodeDesc<El<SVGClipPathElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGClipPathElement, M, D>>): ReactiveTreeNode<El<SVGClipPathElement, M, D>> {
  //
  return describe(ClipPath.name, SvgTags.clipPath, p1, p2, p3, p4, p5)
}

// Defs

export function Defs<M = unknown, D = unknown>(
  setup: Script<El<SVGDefsElement, M, D>>,
  setupTask?: ScriptTask<El<SVGDefsElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGDefsElement, M, D>>): ReactiveTreeNode<El<SVGDefsElement, M, D>>

export function Defs<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGDefsElement, M, D>>,
  setupTask?: ScriptTask<El<SVGDefsElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGDefsElement, M, D>>): ReactiveTreeNode<El<SVGDefsElement, M, D>>

export function Defs<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGDefsElement, M, D>>,
  setupTask?: ScriptTask<El<SVGDefsElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGDefsElement, M, D>>): ReactiveTreeNode<El<SVGDefsElement, M, D>>

export function Defs<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGDefsElement, M, D>>,
  setupTask?: ScriptTask<El<SVGDefsElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGDefsElement, M, D>>): ReactiveTreeNode<El<SVGDefsElement, M, D>>

export function Defs<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGDefsElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGDefsElement, M, D>>): ReactiveTreeNode<El<SVGDefsElement, M, D>>

export function Defs<M = unknown, D = unknown>(
  p1?: Script<El<SVGDefsElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGDefsElement, M, D>>,
  p2?: Script<El<SVGDefsElement, M, D>> | ScriptTask<El<SVGDefsElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGDefsElement, M, D>>,
  p3?: Script<El<SVGDefsElement, M, D>> | ScriptTask<El<SVGDefsElement, M, D>> | ReactiveTreeNodeDesc<El<SVGDefsElement, M, D>>,
  p4?: ScriptTask<El<SVGDefsElement, M, D>> | ReactiveTreeNodeDesc<El<SVGDefsElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGDefsElement, M, D>>): ReactiveTreeNode<El<SVGDefsElement, M, D>> {
  //
  return describe(Defs.name, SvgTags.defs, p1, p2, p3, p4, p5)
}

// Desc

export function Desc<M = unknown, D = unknown>(
  setup: Script<El<SVGDescElement, M, D>>,
  setupTask?: ScriptTask<El<SVGDescElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGDescElement, M, D>>): ReactiveTreeNode<El<SVGDescElement, M, D>>

export function Desc<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGDescElement, M, D>>,
  setupTask?: ScriptTask<El<SVGDescElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGDescElement, M, D>>): ReactiveTreeNode<El<SVGDescElement, M, D>>

export function Desc<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGDescElement, M, D>>,
  setupTask?: ScriptTask<El<SVGDescElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGDescElement, M, D>>): ReactiveTreeNode<El<SVGDescElement, M, D>>

export function Desc<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGDescElement, M, D>>,
  setupTask?: ScriptTask<El<SVGDescElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGDescElement, M, D>>): ReactiveTreeNode<El<SVGDescElement, M, D>>

export function Desc<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGDescElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGDescElement, M, D>>): ReactiveTreeNode<El<SVGDescElement, M, D>>

export function Desc<M = unknown, D = unknown>(
  p1?: Script<El<SVGDescElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGDescElement, M, D>>,
  p2?: Script<El<SVGDescElement, M, D>> | ScriptTask<El<SVGDescElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGDescElement, M, D>>,
  p3?: Script<El<SVGDescElement, M, D>> | ScriptTask<El<SVGDescElement, M, D>> | ReactiveTreeNodeDesc<El<SVGDescElement, M, D>>,
  p4?: ScriptTask<El<SVGDescElement, M, D>> | ReactiveTreeNodeDesc<El<SVGDescElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGDescElement, M, D>>): ReactiveTreeNode<El<SVGDescElement, M, D>> {
  //
  return describe(Desc.name, SvgTags.desc, p1, p2, p3, p4, p5)
}

// Ellipse

export function Ellipse<M = unknown, D = unknown>(
  setup: Script<El<SVGEllipseElement, M, D>>,
  setupTask?: ScriptTask<El<SVGEllipseElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGEllipseElement, M, D>>): ReactiveTreeNode<El<SVGEllipseElement, M, D>>

export function Ellipse<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGEllipseElement, M, D>>,
  setupTask?: ScriptTask<El<SVGEllipseElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGEllipseElement, M, D>>): ReactiveTreeNode<El<SVGEllipseElement, M, D>>

export function Ellipse<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGEllipseElement, M, D>>,
  setupTask?: ScriptTask<El<SVGEllipseElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGEllipseElement, M, D>>): ReactiveTreeNode<El<SVGEllipseElement, M, D>>

export function Ellipse<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGEllipseElement, M, D>>,
  setupTask?: ScriptTask<El<SVGEllipseElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGEllipseElement, M, D>>): ReactiveTreeNode<El<SVGEllipseElement, M, D>>

export function Ellipse<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGEllipseElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGEllipseElement, M, D>>): ReactiveTreeNode<El<SVGEllipseElement, M, D>>

export function Ellipse<M = unknown, D = unknown>(
  p1?: Script<El<SVGEllipseElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGEllipseElement, M, D>>,
  p2?: Script<El<SVGEllipseElement, M, D>> | ScriptTask<El<SVGEllipseElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGEllipseElement, M, D>>,
  p3?: Script<El<SVGEllipseElement, M, D>> | ScriptTask<El<SVGEllipseElement, M, D>> | ReactiveTreeNodeDesc<El<SVGEllipseElement, M, D>>,
  p4?: ScriptTask<El<SVGEllipseElement, M, D>> | ReactiveTreeNodeDesc<El<SVGEllipseElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGEllipseElement, M, D>>): ReactiveTreeNode<El<SVGEllipseElement, M, D>> {
  //
  return describe(Ellipse.name, SvgTags.ellipse, p1, p2, p3, p4, p5)
}

// FeBlend

export function FeBlend<M = unknown, D = unknown>(
  setup: Script<El<SVGFEBlendElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEBlendElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEBlendElement, M, D>>): ReactiveTreeNode<El<SVGFEBlendElement, M, D>>

export function FeBlend<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEBlendElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEBlendElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEBlendElement, M, D>>): ReactiveTreeNode<El<SVGFEBlendElement, M, D>>

export function FeBlend<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEBlendElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEBlendElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEBlendElement, M, D>>): ReactiveTreeNode<El<SVGFEBlendElement, M, D>>

export function FeBlend<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGFEBlendElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEBlendElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEBlendElement, M, D>>): ReactiveTreeNode<El<SVGFEBlendElement, M, D>>

export function FeBlend<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGFEBlendElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEBlendElement, M, D>>): ReactiveTreeNode<El<SVGFEBlendElement, M, D>>

export function FeBlend<M = unknown, D = unknown>(
  p1?: Script<El<SVGFEBlendElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEBlendElement, M, D>>,
  p2?: Script<El<SVGFEBlendElement, M, D>> | ScriptTask<El<SVGFEBlendElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGFEBlendElement, M, D>>,
  p3?: Script<El<SVGFEBlendElement, M, D>> | ScriptTask<El<SVGFEBlendElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEBlendElement, M, D>>,
  p4?: ScriptTask<El<SVGFEBlendElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEBlendElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGFEBlendElement, M, D>>): ReactiveTreeNode<El<SVGFEBlendElement, M, D>> {
  //
  return describe(FeBlend.name, SvgTags.feBlend, p1, p2, p3, p4, p5)
}

// FeColorMatrix

export function FeColorMatrix<M = unknown, D = unknown>(
  setup: Script<El<SVGFEColorMatrixElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEColorMatrixElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEColorMatrixElement, M, D>>): ReactiveTreeNode<El<SVGFEColorMatrixElement, M, D>>

export function FeColorMatrix<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEColorMatrixElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEColorMatrixElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEColorMatrixElement, M, D>>): ReactiveTreeNode<El<SVGFEColorMatrixElement, M, D>>

export function FeColorMatrix<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEColorMatrixElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEColorMatrixElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEColorMatrixElement, M, D>>): ReactiveTreeNode<El<SVGFEColorMatrixElement, M, D>>

export function FeColorMatrix<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGFEColorMatrixElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEColorMatrixElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEColorMatrixElement, M, D>>): ReactiveTreeNode<El<SVGFEColorMatrixElement, M, D>>

export function FeColorMatrix<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGFEColorMatrixElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEColorMatrixElement, M, D>>): ReactiveTreeNode<El<SVGFEColorMatrixElement, M, D>>

export function FeColorMatrix<M = unknown, D = unknown>(
  p1?: Script<El<SVGFEColorMatrixElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEColorMatrixElement, M, D>>,
  p2?: Script<El<SVGFEColorMatrixElement, M, D>> | ScriptTask<El<SVGFEColorMatrixElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGFEColorMatrixElement, M, D>>,
  p3?: Script<El<SVGFEColorMatrixElement, M, D>> | ScriptTask<El<SVGFEColorMatrixElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEColorMatrixElement, M, D>>,
  p4?: ScriptTask<El<SVGFEColorMatrixElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEColorMatrixElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGFEColorMatrixElement, M, D>>): ReactiveTreeNode<El<SVGFEColorMatrixElement, M, D>> {
  //
  return describe(FeColorMatrix.name, SvgTags.feColorMatrix, p1, p2, p3, p4, p5)
}

// FeComponentTransfer

export function FeComponentTransfer<M = unknown, D = unknown>(
  setup: Script<El<SVGFEComponentTransferElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEComponentTransferElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEComponentTransferElement, M, D>>): ReactiveTreeNode<El<SVGFEComponentTransferElement, M, D>>

export function FeComponentTransfer<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEComponentTransferElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEComponentTransferElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEComponentTransferElement, M, D>>): ReactiveTreeNode<El<SVGFEComponentTransferElement, M, D>>

export function FeComponentTransfer<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEComponentTransferElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEComponentTransferElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEComponentTransferElement, M, D>>): ReactiveTreeNode<El<SVGFEComponentTransferElement, M, D>>

export function FeComponentTransfer<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGFEComponentTransferElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEComponentTransferElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEComponentTransferElement, M, D>>): ReactiveTreeNode<El<SVGFEComponentTransferElement, M, D>>

export function FeComponentTransfer<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGFEComponentTransferElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEComponentTransferElement, M, D>>): ReactiveTreeNode<El<SVGFEComponentTransferElement, M, D>>

export function FeComponentTransfer<M = unknown, D = unknown>(
  p1?: Script<El<SVGFEComponentTransferElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEComponentTransferElement, M, D>>,
  p2?: Script<El<SVGFEComponentTransferElement, M, D>> | ScriptTask<El<SVGFEComponentTransferElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGFEComponentTransferElement, M, D>>,
  p3?: Script<El<SVGFEComponentTransferElement, M, D>> | ScriptTask<El<SVGFEComponentTransferElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEComponentTransferElement, M, D>>,
  p4?: ScriptTask<El<SVGFEComponentTransferElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEComponentTransferElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGFEComponentTransferElement, M, D>>): ReactiveTreeNode<El<SVGFEComponentTransferElement, M, D>> {
  //
  return describe(FeComponentTransfer.name, SvgTags.feComponentTransfer, p1, p2, p3, p4, p5)
}

// FeComposite

export function FeComposite<M = unknown, D = unknown>(
  setup: Script<El<SVGFECompositeElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFECompositeElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFECompositeElement, M, D>>): ReactiveTreeNode<El<SVGFECompositeElement, M, D>>

export function FeComposite<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFECompositeElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFECompositeElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFECompositeElement, M, D>>): ReactiveTreeNode<El<SVGFECompositeElement, M, D>>

export function FeComposite<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFECompositeElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFECompositeElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFECompositeElement, M, D>>): ReactiveTreeNode<El<SVGFECompositeElement, M, D>>

export function FeComposite<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGFECompositeElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFECompositeElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFECompositeElement, M, D>>): ReactiveTreeNode<El<SVGFECompositeElement, M, D>>

export function FeComposite<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGFECompositeElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFECompositeElement, M, D>>): ReactiveTreeNode<El<SVGFECompositeElement, M, D>>

export function FeComposite<M = unknown, D = unknown>(
  p1?: Script<El<SVGFECompositeElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFECompositeElement, M, D>>,
  p2?: Script<El<SVGFECompositeElement, M, D>> | ScriptTask<El<SVGFECompositeElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGFECompositeElement, M, D>>,
  p3?: Script<El<SVGFECompositeElement, M, D>> | ScriptTask<El<SVGFECompositeElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFECompositeElement, M, D>>,
  p4?: ScriptTask<El<SVGFECompositeElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFECompositeElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGFECompositeElement, M, D>>): ReactiveTreeNode<El<SVGFECompositeElement, M, D>> {
  //
  return describe(FeComposite.name, SvgTags.feComposite, p1, p2, p3, p4, p5)
}

// FeConvolveMatrix

export function FeConvolveMatrix<M = unknown, D = unknown>(
  setup: Script<El<SVGFEConvolveMatrixElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEConvolveMatrixElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEConvolveMatrixElement, M, D>>): ReactiveTreeNode<El<SVGFEConvolveMatrixElement, M, D>>

export function FeConvolveMatrix<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEConvolveMatrixElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEConvolveMatrixElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEConvolveMatrixElement, M, D>>): ReactiveTreeNode<El<SVGFEConvolveMatrixElement, M, D>>

export function FeConvolveMatrix<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEConvolveMatrixElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEConvolveMatrixElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEConvolveMatrixElement, M, D>>): ReactiveTreeNode<El<SVGFEConvolveMatrixElement, M, D>>

export function FeConvolveMatrix<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGFEConvolveMatrixElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEConvolveMatrixElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEConvolveMatrixElement, M, D>>): ReactiveTreeNode<El<SVGFEConvolveMatrixElement, M, D>>

export function FeConvolveMatrix<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGFEConvolveMatrixElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEConvolveMatrixElement, M, D>>): ReactiveTreeNode<El<SVGFEConvolveMatrixElement, M, D>>

export function FeConvolveMatrix<M = unknown, D = unknown>(
  p1?: Script<El<SVGFEConvolveMatrixElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEConvolveMatrixElement, M, D>>,
  p2?: Script<El<SVGFEConvolveMatrixElement, M, D>> | ScriptTask<El<SVGFEConvolveMatrixElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGFEConvolveMatrixElement, M, D>>,
  p3?: Script<El<SVGFEConvolveMatrixElement, M, D>> | ScriptTask<El<SVGFEConvolveMatrixElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEConvolveMatrixElement, M, D>>,
  p4?: ScriptTask<El<SVGFEConvolveMatrixElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEConvolveMatrixElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGFEConvolveMatrixElement, M, D>>): ReactiveTreeNode<El<SVGFEConvolveMatrixElement, M, D>> {
  //
  return describe(FeConvolveMatrix.name, SvgTags.feConvolveMatrix, p1, p2, p3, p4, p5)
}

// FeDiffuseLighting

export function FeDiffuseLighting<M = unknown, D = unknown>(
  setup: Script<El<SVGFEDiffuseLightingElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEDiffuseLightingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDiffuseLightingElement, M, D>>): ReactiveTreeNode<El<SVGFEDiffuseLightingElement, M, D>>

export function FeDiffuseLighting<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEDiffuseLightingElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEDiffuseLightingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDiffuseLightingElement, M, D>>): ReactiveTreeNode<El<SVGFEDiffuseLightingElement, M, D>>

export function FeDiffuseLighting<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEDiffuseLightingElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEDiffuseLightingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDiffuseLightingElement, M, D>>): ReactiveTreeNode<El<SVGFEDiffuseLightingElement, M, D>>

export function FeDiffuseLighting<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGFEDiffuseLightingElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEDiffuseLightingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDiffuseLightingElement, M, D>>): ReactiveTreeNode<El<SVGFEDiffuseLightingElement, M, D>>

export function FeDiffuseLighting<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGFEDiffuseLightingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDiffuseLightingElement, M, D>>): ReactiveTreeNode<El<SVGFEDiffuseLightingElement, M, D>>

export function FeDiffuseLighting<M = unknown, D = unknown>(
  p1?: Script<El<SVGFEDiffuseLightingElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEDiffuseLightingElement, M, D>>,
  p2?: Script<El<SVGFEDiffuseLightingElement, M, D>> | ScriptTask<El<SVGFEDiffuseLightingElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGFEDiffuseLightingElement, M, D>>,
  p3?: Script<El<SVGFEDiffuseLightingElement, M, D>> | ScriptTask<El<SVGFEDiffuseLightingElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEDiffuseLightingElement, M, D>>,
  p4?: ScriptTask<El<SVGFEDiffuseLightingElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEDiffuseLightingElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGFEDiffuseLightingElement, M, D>>): ReactiveTreeNode<El<SVGFEDiffuseLightingElement, M, D>> {
  //
  return describe(FeDiffuseLighting.name, SvgTags.feDiffuseLighting, p1, p2, p3, p4, p5)
}

// FeDisplacementMap

export function FeDisplacementMap<M = unknown, D = unknown>(
  setup: Script<El<SVGFEDisplacementMapElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEDisplacementMapElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDisplacementMapElement, M, D>>): ReactiveTreeNode<El<SVGFEDisplacementMapElement, M, D>>

export function FeDisplacementMap<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEDisplacementMapElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEDisplacementMapElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDisplacementMapElement, M, D>>): ReactiveTreeNode<El<SVGFEDisplacementMapElement, M, D>>

export function FeDisplacementMap<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEDisplacementMapElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEDisplacementMapElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDisplacementMapElement, M, D>>): ReactiveTreeNode<El<SVGFEDisplacementMapElement, M, D>>

export function FeDisplacementMap<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGFEDisplacementMapElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEDisplacementMapElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDisplacementMapElement, M, D>>): ReactiveTreeNode<El<SVGFEDisplacementMapElement, M, D>>

export function FeDisplacementMap<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGFEDisplacementMapElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDisplacementMapElement, M, D>>): ReactiveTreeNode<El<SVGFEDisplacementMapElement, M, D>>

export function FeDisplacementMap<M = unknown, D = unknown>(
  p1?: Script<El<SVGFEDisplacementMapElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEDisplacementMapElement, M, D>>,
  p2?: Script<El<SVGFEDisplacementMapElement, M, D>> | ScriptTask<El<SVGFEDisplacementMapElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGFEDisplacementMapElement, M, D>>,
  p3?: Script<El<SVGFEDisplacementMapElement, M, D>> | ScriptTask<El<SVGFEDisplacementMapElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEDisplacementMapElement, M, D>>,
  p4?: ScriptTask<El<SVGFEDisplacementMapElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEDisplacementMapElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGFEDisplacementMapElement, M, D>>): ReactiveTreeNode<El<SVGFEDisplacementMapElement, M, D>> {
  //
  return describe(FeDisplacementMap.name, SvgTags.feDisplacementMap, p1, p2, p3, p4, p5)
}

// FeDistantLight

export function FeDistantLight<M = unknown, D = unknown>(
  setup: Script<El<SVGFEDistantLightElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEDistantLightElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDistantLightElement, M, D>>): ReactiveTreeNode<El<SVGFEDistantLightElement, M, D>>

export function FeDistantLight<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEDistantLightElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEDistantLightElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDistantLightElement, M, D>>): ReactiveTreeNode<El<SVGFEDistantLightElement, M, D>>

export function FeDistantLight<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEDistantLightElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEDistantLightElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDistantLightElement, M, D>>): ReactiveTreeNode<El<SVGFEDistantLightElement, M, D>>

export function FeDistantLight<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGFEDistantLightElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEDistantLightElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDistantLightElement, M, D>>): ReactiveTreeNode<El<SVGFEDistantLightElement, M, D>>

export function FeDistantLight<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGFEDistantLightElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDistantLightElement, M, D>>): ReactiveTreeNode<El<SVGFEDistantLightElement, M, D>>

export function FeDistantLight<M = unknown, D = unknown>(
  p1?: Script<El<SVGFEDistantLightElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEDistantLightElement, M, D>>,
  p2?: Script<El<SVGFEDistantLightElement, M, D>> | ScriptTask<El<SVGFEDistantLightElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGFEDistantLightElement, M, D>>,
  p3?: Script<El<SVGFEDistantLightElement, M, D>> | ScriptTask<El<SVGFEDistantLightElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEDistantLightElement, M, D>>,
  p4?: ScriptTask<El<SVGFEDistantLightElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEDistantLightElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGFEDistantLightElement, M, D>>): ReactiveTreeNode<El<SVGFEDistantLightElement, M, D>> {
  //
  return describe(FeDistantLight.name, SvgTags.feDistantLight, p1, p2, p3, p4, p5)
}

// FeDropShadow

export function FeDropShadow<M = unknown, D = unknown>(
  setup: Script<El<SVGFEDropShadowElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEDropShadowElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDropShadowElement, M, D>>): ReactiveTreeNode<El<SVGFEDropShadowElement, M, D>>

export function FeDropShadow<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEDropShadowElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEDropShadowElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDropShadowElement, M, D>>): ReactiveTreeNode<El<SVGFEDropShadowElement, M, D>>

export function FeDropShadow<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEDropShadowElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEDropShadowElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDropShadowElement, M, D>>): ReactiveTreeNode<El<SVGFEDropShadowElement, M, D>>

export function FeDropShadow<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGFEDropShadowElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEDropShadowElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDropShadowElement, M, D>>): ReactiveTreeNode<El<SVGFEDropShadowElement, M, D>>

export function FeDropShadow<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGFEDropShadowElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDropShadowElement, M, D>>): ReactiveTreeNode<El<SVGFEDropShadowElement, M, D>>

export function FeDropShadow<M = unknown, D = unknown>(
  p1?: Script<El<SVGFEDropShadowElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEDropShadowElement, M, D>>,
  p2?: Script<El<SVGFEDropShadowElement, M, D>> | ScriptTask<El<SVGFEDropShadowElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGFEDropShadowElement, M, D>>,
  p3?: Script<El<SVGFEDropShadowElement, M, D>> | ScriptTask<El<SVGFEDropShadowElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEDropShadowElement, M, D>>,
  p4?: ScriptTask<El<SVGFEDropShadowElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEDropShadowElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGFEDropShadowElement, M, D>>): ReactiveTreeNode<El<SVGFEDropShadowElement, M, D>> {
  //
  return describe(FeDropShadow.name, SvgTags.feDropShadow, p1, p2, p3, p4, p5)
}

// FeFlood

export function FeFlood<M = unknown, D = unknown>(
  setup: Script<El<SVGFEFloodElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEFloodElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFloodElement, M, D>>): ReactiveTreeNode<El<SVGFEFloodElement, M, D>>

export function FeFlood<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEFloodElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEFloodElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFloodElement, M, D>>): ReactiveTreeNode<El<SVGFEFloodElement, M, D>>

export function FeFlood<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEFloodElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEFloodElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFloodElement, M, D>>): ReactiveTreeNode<El<SVGFEFloodElement, M, D>>

export function FeFlood<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGFEFloodElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEFloodElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFloodElement, M, D>>): ReactiveTreeNode<El<SVGFEFloodElement, M, D>>

export function FeFlood<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGFEFloodElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFloodElement, M, D>>): ReactiveTreeNode<El<SVGFEFloodElement, M, D>>

export function FeFlood<M = unknown, D = unknown>(
  p1?: Script<El<SVGFEFloodElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEFloodElement, M, D>>,
  p2?: Script<El<SVGFEFloodElement, M, D>> | ScriptTask<El<SVGFEFloodElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGFEFloodElement, M, D>>,
  p3?: Script<El<SVGFEFloodElement, M, D>> | ScriptTask<El<SVGFEFloodElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEFloodElement, M, D>>,
  p4?: ScriptTask<El<SVGFEFloodElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEFloodElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGFEFloodElement, M, D>>): ReactiveTreeNode<El<SVGFEFloodElement, M, D>> {
  //
  return describe(FeFlood.name, SvgTags.feFlood, p1, p2, p3, p4, p5)
}

// FeFuncA

export function FeFuncA<M = unknown, D = unknown>(
  setup: Script<El<SVGFEFuncAElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEFuncAElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncAElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncAElement, M, D>>

export function FeFuncA<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEFuncAElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEFuncAElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncAElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncAElement, M, D>>

export function FeFuncA<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEFuncAElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEFuncAElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncAElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncAElement, M, D>>

export function FeFuncA<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGFEFuncAElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEFuncAElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncAElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncAElement, M, D>>

export function FeFuncA<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGFEFuncAElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncAElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncAElement, M, D>>

export function FeFuncA<M = unknown, D = unknown>(
  p1?: Script<El<SVGFEFuncAElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEFuncAElement, M, D>>,
  p2?: Script<El<SVGFEFuncAElement, M, D>> | ScriptTask<El<SVGFEFuncAElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGFEFuncAElement, M, D>>,
  p3?: Script<El<SVGFEFuncAElement, M, D>> | ScriptTask<El<SVGFEFuncAElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEFuncAElement, M, D>>,
  p4?: ScriptTask<El<SVGFEFuncAElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEFuncAElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGFEFuncAElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncAElement, M, D>> {
  //
  return describe(FeFuncA.name, SvgTags.feFuncA, p1, p2, p3, p4, p5)
}

// FeFuncB

export function FeFuncB<M = unknown, D = unknown>(
  setup: Script<El<SVGFEFuncBElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEFuncBElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncBElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncBElement, M, D>>

export function FeFuncB<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEFuncBElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEFuncBElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncBElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncBElement, M, D>>

export function FeFuncB<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEFuncBElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEFuncBElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncBElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncBElement, M, D>>

export function FeFuncB<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGFEFuncBElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEFuncBElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncBElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncBElement, M, D>>

export function FeFuncB<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGFEFuncBElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncBElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncBElement, M, D>>

export function FeFuncB<M = unknown, D = unknown>(
  p1?: Script<El<SVGFEFuncBElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEFuncBElement, M, D>>,
  p2?: Script<El<SVGFEFuncBElement, M, D>> | ScriptTask<El<SVGFEFuncBElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGFEFuncBElement, M, D>>,
  p3?: Script<El<SVGFEFuncBElement, M, D>> | ScriptTask<El<SVGFEFuncBElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEFuncBElement, M, D>>,
  p4?: ScriptTask<El<SVGFEFuncBElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEFuncBElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGFEFuncBElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncBElement, M, D>> {
  //
  return describe(FeFuncB.name, SvgTags.feFuncB, p1, p2, p3, p4, p5)
}

// FeFuncG

export function FeFuncG<M = unknown, D = unknown>(
  setup: Script<El<SVGFEFuncGElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEFuncGElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncGElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncGElement, M, D>>

export function FeFuncG<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEFuncGElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEFuncGElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncGElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncGElement, M, D>>

export function FeFuncG<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEFuncGElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEFuncGElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncGElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncGElement, M, D>>

export function FeFuncG<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGFEFuncGElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEFuncGElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncGElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncGElement, M, D>>

export function FeFuncG<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGFEFuncGElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncGElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncGElement, M, D>>

export function FeFuncG<M = unknown, D = unknown>(
  p1?: Script<El<SVGFEFuncGElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEFuncGElement, M, D>>,
  p2?: Script<El<SVGFEFuncGElement, M, D>> | ScriptTask<El<SVGFEFuncGElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGFEFuncGElement, M, D>>,
  p3?: Script<El<SVGFEFuncGElement, M, D>> | ScriptTask<El<SVGFEFuncGElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEFuncGElement, M, D>>,
  p4?: ScriptTask<El<SVGFEFuncGElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEFuncGElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGFEFuncGElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncGElement, M, D>> {
  //
  return describe(FeFuncG.name, SvgTags.feFuncG, p1, p2, p3, p4, p5)
}

// FeFuncR

export function FeFuncR<M = unknown, D = unknown>(
  setup: Script<El<SVGFEFuncRElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEFuncRElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncRElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncRElement, M, D>>

export function FeFuncR<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEFuncRElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEFuncRElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncRElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncRElement, M, D>>

export function FeFuncR<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEFuncRElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEFuncRElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncRElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncRElement, M, D>>

export function FeFuncR<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGFEFuncRElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEFuncRElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncRElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncRElement, M, D>>

export function FeFuncR<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGFEFuncRElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncRElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncRElement, M, D>>

export function FeFuncR<M = unknown, D = unknown>(
  p1?: Script<El<SVGFEFuncRElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEFuncRElement, M, D>>,
  p2?: Script<El<SVGFEFuncRElement, M, D>> | ScriptTask<El<SVGFEFuncRElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGFEFuncRElement, M, D>>,
  p3?: Script<El<SVGFEFuncRElement, M, D>> | ScriptTask<El<SVGFEFuncRElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEFuncRElement, M, D>>,
  p4?: ScriptTask<El<SVGFEFuncRElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEFuncRElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGFEFuncRElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncRElement, M, D>> {
  //
  return describe(FeFuncR.name, SvgTags.feFuncR, p1, p2, p3, p4, p5)
}

// FeGaussianBlur

export function FeGaussianBlur<M = unknown, D = unknown>(
  setup: Script<El<SVGFEGaussianBlurElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEGaussianBlurElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEGaussianBlurElement, M, D>>): ReactiveTreeNode<El<SVGFEGaussianBlurElement, M, D>>

export function FeGaussianBlur<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEGaussianBlurElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEGaussianBlurElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEGaussianBlurElement, M, D>>): ReactiveTreeNode<El<SVGFEGaussianBlurElement, M, D>>

export function FeGaussianBlur<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEGaussianBlurElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEGaussianBlurElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEGaussianBlurElement, M, D>>): ReactiveTreeNode<El<SVGFEGaussianBlurElement, M, D>>

export function FeGaussianBlur<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGFEGaussianBlurElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEGaussianBlurElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEGaussianBlurElement, M, D>>): ReactiveTreeNode<El<SVGFEGaussianBlurElement, M, D>>

export function FeGaussianBlur<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGFEGaussianBlurElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEGaussianBlurElement, M, D>>): ReactiveTreeNode<El<SVGFEGaussianBlurElement, M, D>>

export function FeGaussianBlur<M = unknown, D = unknown>(
  p1?: Script<El<SVGFEGaussianBlurElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEGaussianBlurElement, M, D>>,
  p2?: Script<El<SVGFEGaussianBlurElement, M, D>> | ScriptTask<El<SVGFEGaussianBlurElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGFEGaussianBlurElement, M, D>>,
  p3?: Script<El<SVGFEGaussianBlurElement, M, D>> | ScriptTask<El<SVGFEGaussianBlurElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEGaussianBlurElement, M, D>>,
  p4?: ScriptTask<El<SVGFEGaussianBlurElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEGaussianBlurElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGFEGaussianBlurElement, M, D>>): ReactiveTreeNode<El<SVGFEGaussianBlurElement, M, D>> {
  //
  return describe(FeGaussianBlur.name, SvgTags.feGaussianBlur, p1, p2, p3, p4, p5)
}

// FeImage

export function FeImage<M = unknown, D = unknown>(
  setup: Script<El<SVGFEImageElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEImageElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEImageElement, M, D>>): ReactiveTreeNode<El<SVGFEImageElement, M, D>>

export function FeImage<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEImageElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEImageElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEImageElement, M, D>>): ReactiveTreeNode<El<SVGFEImageElement, M, D>>

export function FeImage<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEImageElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEImageElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEImageElement, M, D>>): ReactiveTreeNode<El<SVGFEImageElement, M, D>>

export function FeImage<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGFEImageElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEImageElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEImageElement, M, D>>): ReactiveTreeNode<El<SVGFEImageElement, M, D>>

export function FeImage<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGFEImageElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEImageElement, M, D>>): ReactiveTreeNode<El<SVGFEImageElement, M, D>>

export function FeImage<M = unknown, D = unknown>(
  p1?: Script<El<SVGFEImageElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEImageElement, M, D>>,
  p2?: Script<El<SVGFEImageElement, M, D>> | ScriptTask<El<SVGFEImageElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGFEImageElement, M, D>>,
  p3?: Script<El<SVGFEImageElement, M, D>> | ScriptTask<El<SVGFEImageElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEImageElement, M, D>>,
  p4?: ScriptTask<El<SVGFEImageElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEImageElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGFEImageElement, M, D>>): ReactiveTreeNode<El<SVGFEImageElement, M, D>> {
  //
  return describe(FeImage.name, SvgTags.feImage, p1, p2, p3, p4, p5)
}

// FeMerge

export function FeMerge<M = unknown, D = unknown>(
  setup: Script<El<SVGFEMergeElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEMergeElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEMergeElement, M, D>>): ReactiveTreeNode<El<SVGFEMergeElement, M, D>>

export function FeMerge<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEMergeElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEMergeElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEMergeElement, M, D>>): ReactiveTreeNode<El<SVGFEMergeElement, M, D>>

export function FeMerge<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEMergeElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEMergeElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEMergeElement, M, D>>): ReactiveTreeNode<El<SVGFEMergeElement, M, D>>

export function FeMerge<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGFEMergeElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEMergeElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEMergeElement, M, D>>): ReactiveTreeNode<El<SVGFEMergeElement, M, D>>

export function FeMerge<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGFEMergeElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEMergeElement, M, D>>): ReactiveTreeNode<El<SVGFEMergeElement, M, D>>

export function FeMerge<M = unknown, D = unknown>(
  p1?: Script<El<SVGFEMergeElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEMergeElement, M, D>>,
  p2?: Script<El<SVGFEMergeElement, M, D>> | ScriptTask<El<SVGFEMergeElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGFEMergeElement, M, D>>,
  p3?: Script<El<SVGFEMergeElement, M, D>> | ScriptTask<El<SVGFEMergeElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEMergeElement, M, D>>,
  p4?: ScriptTask<El<SVGFEMergeElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEMergeElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGFEMergeElement, M, D>>): ReactiveTreeNode<El<SVGFEMergeElement, M, D>> {
  //
  return describe(FeMerge.name, SvgTags.feMerge, p1, p2, p3, p4, p5)
}

// FeMergeNode

export function FeMergeNode<M = unknown, D = unknown>(
  setup: Script<El<SVGFEMergeNodeElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEMergeNodeElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEMergeNodeElement, M, D>>): ReactiveTreeNode<El<SVGFEMergeNodeElement, M, D>>

export function FeMergeNode<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEMergeNodeElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEMergeNodeElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEMergeNodeElement, M, D>>): ReactiveTreeNode<El<SVGFEMergeNodeElement, M, D>>

export function FeMergeNode<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEMergeNodeElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEMergeNodeElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEMergeNodeElement, M, D>>): ReactiveTreeNode<El<SVGFEMergeNodeElement, M, D>>

export function FeMergeNode<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGFEMergeNodeElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEMergeNodeElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEMergeNodeElement, M, D>>): ReactiveTreeNode<El<SVGFEMergeNodeElement, M, D>>

export function FeMergeNode<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGFEMergeNodeElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEMergeNodeElement, M, D>>): ReactiveTreeNode<El<SVGFEMergeNodeElement, M, D>>

export function FeMergeNode<M = unknown, D = unknown>(
  p1?: Script<El<SVGFEMergeNodeElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEMergeNodeElement, M, D>>,
  p2?: Script<El<SVGFEMergeNodeElement, M, D>> | ScriptTask<El<SVGFEMergeNodeElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGFEMergeNodeElement, M, D>>,
  p3?: Script<El<SVGFEMergeNodeElement, M, D>> | ScriptTask<El<SVGFEMergeNodeElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEMergeNodeElement, M, D>>,
  p4?: ScriptTask<El<SVGFEMergeNodeElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEMergeNodeElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGFEMergeNodeElement, M, D>>): ReactiveTreeNode<El<SVGFEMergeNodeElement, M, D>> {
  //
  return describe(FeMergeNode.name, SvgTags.feMergeNode, p1, p2, p3, p4, p5)
}

// FeMorphology

export function FeMorphology<M = unknown, D = unknown>(
  setup: Script<El<SVGFEMorphologyElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEMorphologyElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEMorphologyElement, M, D>>): ReactiveTreeNode<El<SVGFEMorphologyElement, M, D>>

export function FeMorphology<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEMorphologyElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEMorphologyElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEMorphologyElement, M, D>>): ReactiveTreeNode<El<SVGFEMorphologyElement, M, D>>

export function FeMorphology<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEMorphologyElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEMorphologyElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEMorphologyElement, M, D>>): ReactiveTreeNode<El<SVGFEMorphologyElement, M, D>>

export function FeMorphology<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGFEMorphologyElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEMorphologyElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEMorphologyElement, M, D>>): ReactiveTreeNode<El<SVGFEMorphologyElement, M, D>>

export function FeMorphology<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGFEMorphologyElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEMorphologyElement, M, D>>): ReactiveTreeNode<El<SVGFEMorphologyElement, M, D>>

export function FeMorphology<M = unknown, D = unknown>(
  p1?: Script<El<SVGFEMorphologyElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEMorphologyElement, M, D>>,
  p2?: Script<El<SVGFEMorphologyElement, M, D>> | ScriptTask<El<SVGFEMorphologyElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGFEMorphologyElement, M, D>>,
  p3?: Script<El<SVGFEMorphologyElement, M, D>> | ScriptTask<El<SVGFEMorphologyElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEMorphologyElement, M, D>>,
  p4?: ScriptTask<El<SVGFEMorphologyElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEMorphologyElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGFEMorphologyElement, M, D>>): ReactiveTreeNode<El<SVGFEMorphologyElement, M, D>> {
  //
  return describe(FeMorphology.name, SvgTags.feMorphology, p1, p2, p3, p4, p5)
}

// FeOffset

export function FeOffset<M = unknown, D = unknown>(
  setup: Script<El<SVGFEOffsetElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEOffsetElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEOffsetElement, M, D>>): ReactiveTreeNode<El<SVGFEOffsetElement, M, D>>

export function FeOffset<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEOffsetElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEOffsetElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEOffsetElement, M, D>>): ReactiveTreeNode<El<SVGFEOffsetElement, M, D>>

export function FeOffset<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEOffsetElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEOffsetElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEOffsetElement, M, D>>): ReactiveTreeNode<El<SVGFEOffsetElement, M, D>>

export function FeOffset<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGFEOffsetElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEOffsetElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEOffsetElement, M, D>>): ReactiveTreeNode<El<SVGFEOffsetElement, M, D>>

export function FeOffset<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGFEOffsetElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEOffsetElement, M, D>>): ReactiveTreeNode<El<SVGFEOffsetElement, M, D>>

export function FeOffset<M = unknown, D = unknown>(
  p1?: Script<El<SVGFEOffsetElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEOffsetElement, M, D>>,
  p2?: Script<El<SVGFEOffsetElement, M, D>> | ScriptTask<El<SVGFEOffsetElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGFEOffsetElement, M, D>>,
  p3?: Script<El<SVGFEOffsetElement, M, D>> | ScriptTask<El<SVGFEOffsetElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEOffsetElement, M, D>>,
  p4?: ScriptTask<El<SVGFEOffsetElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEOffsetElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGFEOffsetElement, M, D>>): ReactiveTreeNode<El<SVGFEOffsetElement, M, D>> {
  //
  return describe(FeOffset.name, SvgTags.feOffset, p1, p2, p3, p4, p5)
}

// FePointLight

export function FePointLight<M = unknown, D = unknown>(
  setup: Script<El<SVGFEPointLightElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEPointLightElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEPointLightElement, M, D>>): ReactiveTreeNode<El<SVGFEPointLightElement, M, D>>

export function FePointLight<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEPointLightElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEPointLightElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEPointLightElement, M, D>>): ReactiveTreeNode<El<SVGFEPointLightElement, M, D>>

export function FePointLight<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEPointLightElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEPointLightElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEPointLightElement, M, D>>): ReactiveTreeNode<El<SVGFEPointLightElement, M, D>>

export function FePointLight<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGFEPointLightElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFEPointLightElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEPointLightElement, M, D>>): ReactiveTreeNode<El<SVGFEPointLightElement, M, D>>

export function FePointLight<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGFEPointLightElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFEPointLightElement, M, D>>): ReactiveTreeNode<El<SVGFEPointLightElement, M, D>>

export function FePointLight<M = unknown, D = unknown>(
  p1?: Script<El<SVGFEPointLightElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEPointLightElement, M, D>>,
  p2?: Script<El<SVGFEPointLightElement, M, D>> | ScriptTask<El<SVGFEPointLightElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGFEPointLightElement, M, D>>,
  p3?: Script<El<SVGFEPointLightElement, M, D>> | ScriptTask<El<SVGFEPointLightElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEPointLightElement, M, D>>,
  p4?: ScriptTask<El<SVGFEPointLightElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFEPointLightElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGFEPointLightElement, M, D>>): ReactiveTreeNode<El<SVGFEPointLightElement, M, D>> {
  //
  return describe(FePointLight.name, SvgTags.fePointLight, p1, p2, p3, p4, p5)
}

// FeSpecularLighting

export function FeSpecularLighting<M = unknown, D = unknown>(
  setup: Script<El<SVGFESpecularLightingElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFESpecularLightingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFESpecularLightingElement, M, D>>): ReactiveTreeNode<El<SVGFESpecularLightingElement, M, D>>

export function FeSpecularLighting<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFESpecularLightingElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFESpecularLightingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFESpecularLightingElement, M, D>>): ReactiveTreeNode<El<SVGFESpecularLightingElement, M, D>>

export function FeSpecularLighting<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFESpecularLightingElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFESpecularLightingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFESpecularLightingElement, M, D>>): ReactiveTreeNode<El<SVGFESpecularLightingElement, M, D>>

export function FeSpecularLighting<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGFESpecularLightingElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFESpecularLightingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFESpecularLightingElement, M, D>>): ReactiveTreeNode<El<SVGFESpecularLightingElement, M, D>>

export function FeSpecularLighting<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGFESpecularLightingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFESpecularLightingElement, M, D>>): ReactiveTreeNode<El<SVGFESpecularLightingElement, M, D>>

export function FeSpecularLighting<M = unknown, D = unknown>(
  p1?: Script<El<SVGFESpecularLightingElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFESpecularLightingElement, M, D>>,
  p2?: Script<El<SVGFESpecularLightingElement, M, D>> | ScriptTask<El<SVGFESpecularLightingElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGFESpecularLightingElement, M, D>>,
  p3?: Script<El<SVGFESpecularLightingElement, M, D>> | ScriptTask<El<SVGFESpecularLightingElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFESpecularLightingElement, M, D>>,
  p4?: ScriptTask<El<SVGFESpecularLightingElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFESpecularLightingElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGFESpecularLightingElement, M, D>>): ReactiveTreeNode<El<SVGFESpecularLightingElement, M, D>> {
  //
  return describe(FeSpecularLighting.name, SvgTags.feSpecularLighting, p1, p2, p3, p4, p5)
}

// FeSpotLight

export function FeSpotLight<M = unknown, D = unknown>(
  setup: Script<El<SVGFESpotLightElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFESpotLightElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFESpotLightElement, M, D>>): ReactiveTreeNode<El<SVGFESpotLightElement, M, D>>

export function FeSpotLight<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFESpotLightElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFESpotLightElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFESpotLightElement, M, D>>): ReactiveTreeNode<El<SVGFESpotLightElement, M, D>>

export function FeSpotLight<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFESpotLightElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFESpotLightElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFESpotLightElement, M, D>>): ReactiveTreeNode<El<SVGFESpotLightElement, M, D>>

export function FeSpotLight<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGFESpotLightElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFESpotLightElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFESpotLightElement, M, D>>): ReactiveTreeNode<El<SVGFESpotLightElement, M, D>>

export function FeSpotLight<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGFESpotLightElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFESpotLightElement, M, D>>): ReactiveTreeNode<El<SVGFESpotLightElement, M, D>>

export function FeSpotLight<M = unknown, D = unknown>(
  p1?: Script<El<SVGFESpotLightElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFESpotLightElement, M, D>>,
  p2?: Script<El<SVGFESpotLightElement, M, D>> | ScriptTask<El<SVGFESpotLightElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGFESpotLightElement, M, D>>,
  p3?: Script<El<SVGFESpotLightElement, M, D>> | ScriptTask<El<SVGFESpotLightElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFESpotLightElement, M, D>>,
  p4?: ScriptTask<El<SVGFESpotLightElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFESpotLightElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGFESpotLightElement, M, D>>): ReactiveTreeNode<El<SVGFESpotLightElement, M, D>> {
  //
  return describe(FeSpotLight.name, SvgTags.feSpotLight, p1, p2, p3, p4, p5)
}

// FeTile

export function FeTile<M = unknown, D = unknown>(
  setup: Script<El<SVGFETileElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFETileElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFETileElement, M, D>>): ReactiveTreeNode<El<SVGFETileElement, M, D>>

export function FeTile<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFETileElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFETileElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFETileElement, M, D>>): ReactiveTreeNode<El<SVGFETileElement, M, D>>

export function FeTile<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFETileElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFETileElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFETileElement, M, D>>): ReactiveTreeNode<El<SVGFETileElement, M, D>>

export function FeTile<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGFETileElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFETileElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFETileElement, M, D>>): ReactiveTreeNode<El<SVGFETileElement, M, D>>

export function FeTile<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGFETileElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFETileElement, M, D>>): ReactiveTreeNode<El<SVGFETileElement, M, D>>

export function FeTile<M = unknown, D = unknown>(
  p1?: Script<El<SVGFETileElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFETileElement, M, D>>,
  p2?: Script<El<SVGFETileElement, M, D>> | ScriptTask<El<SVGFETileElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGFETileElement, M, D>>,
  p3?: Script<El<SVGFETileElement, M, D>> | ScriptTask<El<SVGFETileElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFETileElement, M, D>>,
  p4?: ScriptTask<El<SVGFETileElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFETileElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGFETileElement, M, D>>): ReactiveTreeNode<El<SVGFETileElement, M, D>> {
  //
  return describe(FeTile.name, SvgTags.feTile, p1, p2, p3, p4, p5)
}

// FeTurbulence

export function FeTurbulence<M = unknown, D = unknown>(
  setup: Script<El<SVGFETurbulenceElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFETurbulenceElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFETurbulenceElement, M, D>>): ReactiveTreeNode<El<SVGFETurbulenceElement, M, D>>

export function FeTurbulence<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFETurbulenceElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFETurbulenceElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFETurbulenceElement, M, D>>): ReactiveTreeNode<El<SVGFETurbulenceElement, M, D>>

export function FeTurbulence<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFETurbulenceElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFETurbulenceElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFETurbulenceElement, M, D>>): ReactiveTreeNode<El<SVGFETurbulenceElement, M, D>>

export function FeTurbulence<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGFETurbulenceElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFETurbulenceElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFETurbulenceElement, M, D>>): ReactiveTreeNode<El<SVGFETurbulenceElement, M, D>>

export function FeTurbulence<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGFETurbulenceElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFETurbulenceElement, M, D>>): ReactiveTreeNode<El<SVGFETurbulenceElement, M, D>>

export function FeTurbulence<M = unknown, D = unknown>(
  p1?: Script<El<SVGFETurbulenceElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFETurbulenceElement, M, D>>,
  p2?: Script<El<SVGFETurbulenceElement, M, D>> | ScriptTask<El<SVGFETurbulenceElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGFETurbulenceElement, M, D>>,
  p3?: Script<El<SVGFETurbulenceElement, M, D>> | ScriptTask<El<SVGFETurbulenceElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFETurbulenceElement, M, D>>,
  p4?: ScriptTask<El<SVGFETurbulenceElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFETurbulenceElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGFETurbulenceElement, M, D>>): ReactiveTreeNode<El<SVGFETurbulenceElement, M, D>> {
  //
  return describe(FeTurbulence.name, SvgTags.feTurbulence, p1, p2, p3, p4, p5)
}

// Filter

export function Filter<M = unknown, D = unknown>(
  setup: Script<El<SVGFilterElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFilterElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFilterElement, M, D>>): ReactiveTreeNode<El<SVGFilterElement, M, D>>

export function Filter<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFilterElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFilterElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFilterElement, M, D>>): ReactiveTreeNode<El<SVGFilterElement, M, D>>

export function Filter<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFilterElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFilterElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFilterElement, M, D>>): ReactiveTreeNode<El<SVGFilterElement, M, D>>

export function Filter<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGFilterElement, M, D>>,
  setupTask?: ScriptTask<El<SVGFilterElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFilterElement, M, D>>): ReactiveTreeNode<El<SVGFilterElement, M, D>>

export function Filter<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGFilterElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGFilterElement, M, D>>): ReactiveTreeNode<El<SVGFilterElement, M, D>>

export function Filter<M = unknown, D = unknown>(
  p1?: Script<El<SVGFilterElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFilterElement, M, D>>,
  p2?: Script<El<SVGFilterElement, M, D>> | ScriptTask<El<SVGFilterElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGFilterElement, M, D>>,
  p3?: Script<El<SVGFilterElement, M, D>> | ScriptTask<El<SVGFilterElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFilterElement, M, D>>,
  p4?: ScriptTask<El<SVGFilterElement, M, D>> | ReactiveTreeNodeDesc<El<SVGFilterElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGFilterElement, M, D>>): ReactiveTreeNode<El<SVGFilterElement, M, D>> {
  //
  return describe(Filter.name, SvgTags.filter, p1, p2, p3, p4, p5)
}

// ForeignObject

export function ForeignObject<M = unknown, D = unknown>(
  setup: Script<El<SVGForeignObjectElement, M, D>>,
  setupTask?: ScriptTask<El<SVGForeignObjectElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGForeignObjectElement, M, D>>): ReactiveTreeNode<El<SVGForeignObjectElement, M, D>>

export function ForeignObject<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGForeignObjectElement, M, D>>,
  setupTask?: ScriptTask<El<SVGForeignObjectElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGForeignObjectElement, M, D>>): ReactiveTreeNode<El<SVGForeignObjectElement, M, D>>

export function ForeignObject<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGForeignObjectElement, M, D>>,
  setupTask?: ScriptTask<El<SVGForeignObjectElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGForeignObjectElement, M, D>>): ReactiveTreeNode<El<SVGForeignObjectElement, M, D>>

export function ForeignObject<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGForeignObjectElement, M, D>>,
  setupTask?: ScriptTask<El<SVGForeignObjectElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGForeignObjectElement, M, D>>): ReactiveTreeNode<El<SVGForeignObjectElement, M, D>>

export function ForeignObject<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGForeignObjectElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGForeignObjectElement, M, D>>): ReactiveTreeNode<El<SVGForeignObjectElement, M, D>>

export function ForeignObject<M = unknown, D = unknown>(
  p1?: Script<El<SVGForeignObjectElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGForeignObjectElement, M, D>>,
  p2?: Script<El<SVGForeignObjectElement, M, D>> | ScriptTask<El<SVGForeignObjectElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGForeignObjectElement, M, D>>,
  p3?: Script<El<SVGForeignObjectElement, M, D>> | ScriptTask<El<SVGForeignObjectElement, M, D>> | ReactiveTreeNodeDesc<El<SVGForeignObjectElement, M, D>>,
  p4?: ScriptTask<El<SVGForeignObjectElement, M, D>> | ReactiveTreeNodeDesc<El<SVGForeignObjectElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGForeignObjectElement, M, D>>): ReactiveTreeNode<El<SVGForeignObjectElement, M, D>> {
  //
  return describe(ForeignObject.name, SvgTags.foreignObject, p1, p2, p3, p4, p5)
}

// G

export function G<M = unknown, D = unknown>(
  setup: Script<El<SVGGElement, M, D>>,
  setupTask?: ScriptTask<El<SVGGElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGGElement, M, D>>): ReactiveTreeNode<El<SVGGElement, M, D>>

export function G<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGGElement, M, D>>,
  setupTask?: ScriptTask<El<SVGGElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGGElement, M, D>>): ReactiveTreeNode<El<SVGGElement, M, D>>

export function G<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGGElement, M, D>>,
  setupTask?: ScriptTask<El<SVGGElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGGElement, M, D>>): ReactiveTreeNode<El<SVGGElement, M, D>>

export function G<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGGElement, M, D>>,
  setupTask?: ScriptTask<El<SVGGElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGGElement, M, D>>): ReactiveTreeNode<El<SVGGElement, M, D>>

export function G<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGGElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGGElement, M, D>>): ReactiveTreeNode<El<SVGGElement, M, D>>

export function G<M = unknown, D = unknown>(
  p1?: Script<El<SVGGElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGGElement, M, D>>,
  p2?: Script<El<SVGGElement, M, D>> | ScriptTask<El<SVGGElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGGElement, M, D>>,
  p3?: Script<El<SVGGElement, M, D>> | ScriptTask<El<SVGGElement, M, D>> | ReactiveTreeNodeDesc<El<SVGGElement, M, D>>,
  p4?: ScriptTask<El<SVGGElement, M, D>> | ReactiveTreeNodeDesc<El<SVGGElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGGElement, M, D>>): ReactiveTreeNode<El<SVGGElement, M, D>> {
  //
  return describe(G.name, SvgTags.g, p1, p2, p3, p4, p5)
}

// SvgImage

export function SvgImage<M = unknown, D = unknown>(
  setup: Script<El<SVGImageElement, M, D>>,
  setupTask?: ScriptTask<El<SVGImageElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGImageElement, M, D>>): ReactiveTreeNode<El<SVGImageElement, M, D>>

export function SvgImage<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGImageElement, M, D>>,
  setupTask?: ScriptTask<El<SVGImageElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGImageElement, M, D>>): ReactiveTreeNode<El<SVGImageElement, M, D>>

export function SvgImage<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGImageElement, M, D>>,
  setupTask?: ScriptTask<El<SVGImageElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGImageElement, M, D>>): ReactiveTreeNode<El<SVGImageElement, M, D>>

export function SvgImage<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGImageElement, M, D>>,
  setupTask?: ScriptTask<El<SVGImageElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGImageElement, M, D>>): ReactiveTreeNode<El<SVGImageElement, M, D>>

export function SvgImage<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGImageElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGImageElement, M, D>>): ReactiveTreeNode<El<SVGImageElement, M, D>>

export function SvgImage<M = unknown, D = unknown>(
  p1?: Script<El<SVGImageElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGImageElement, M, D>>,
  p2?: Script<El<SVGImageElement, M, D>> | ScriptTask<El<SVGImageElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGImageElement, M, D>>,
  p3?: Script<El<SVGImageElement, M, D>> | ScriptTask<El<SVGImageElement, M, D>> | ReactiveTreeNodeDesc<El<SVGImageElement, M, D>>,
  p4?: ScriptTask<El<SVGImageElement, M, D>> | ReactiveTreeNodeDesc<El<SVGImageElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGImageElement, M, D>>): ReactiveTreeNode<El<SVGImageElement, M, D>> {
  //
  return describe(SvgImage.name, SvgTags.image, p1, p2, p3, p4, p5)
}

// SvgLine

export function SvgLine<M = unknown, D = unknown>(
  setup: Script<El<SVGLineElement, M, D>>,
  setupTask?: ScriptTask<El<SVGLineElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGLineElement, M, D>>): ReactiveTreeNode<El<SVGLineElement, M, D>>

export function SvgLine<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGLineElement, M, D>>,
  setupTask?: ScriptTask<El<SVGLineElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGLineElement, M, D>>): ReactiveTreeNode<El<SVGLineElement, M, D>>

export function SvgLine<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGLineElement, M, D>>,
  setupTask?: ScriptTask<El<SVGLineElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGLineElement, M, D>>): ReactiveTreeNode<El<SVGLineElement, M, D>>

export function SvgLine<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGLineElement, M, D>>,
  setupTask?: ScriptTask<El<SVGLineElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGLineElement, M, D>>): ReactiveTreeNode<El<SVGLineElement, M, D>>

export function SvgLine<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGLineElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGLineElement, M, D>>): ReactiveTreeNode<El<SVGLineElement, M, D>>

export function SvgLine<M = unknown, D = unknown>(
  p1?: Script<El<SVGLineElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGLineElement, M, D>>,
  p2?: Script<El<SVGLineElement, M, D>> | ScriptTask<El<SVGLineElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGLineElement, M, D>>,
  p3?: Script<El<SVGLineElement, M, D>> | ScriptTask<El<SVGLineElement, M, D>> | ReactiveTreeNodeDesc<El<SVGLineElement, M, D>>,
  p4?: ScriptTask<El<SVGLineElement, M, D>> | ReactiveTreeNodeDesc<El<SVGLineElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGLineElement, M, D>>): ReactiveTreeNode<El<SVGLineElement, M, D>> {
  //
  return describe(SvgLine.name, SvgTags.line, p1, p2, p3, p4, p5)
}

// LinearGradient

export function LinearGradient<M = unknown, D = unknown>(
  setup: Script<El<SVGLinearGradientElement, M, D>>,
  setupTask?: ScriptTask<El<SVGLinearGradientElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGLinearGradientElement, M, D>>): ReactiveTreeNode<El<SVGLinearGradientElement, M, D>>

export function LinearGradient<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGLinearGradientElement, M, D>>,
  setupTask?: ScriptTask<El<SVGLinearGradientElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGLinearGradientElement, M, D>>): ReactiveTreeNode<El<SVGLinearGradientElement, M, D>>

export function LinearGradient<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGLinearGradientElement, M, D>>,
  setupTask?: ScriptTask<El<SVGLinearGradientElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGLinearGradientElement, M, D>>): ReactiveTreeNode<El<SVGLinearGradientElement, M, D>>

export function LinearGradient<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGLinearGradientElement, M, D>>,
  setupTask?: ScriptTask<El<SVGLinearGradientElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGLinearGradientElement, M, D>>): ReactiveTreeNode<El<SVGLinearGradientElement, M, D>>

export function LinearGradient<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGLinearGradientElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGLinearGradientElement, M, D>>): ReactiveTreeNode<El<SVGLinearGradientElement, M, D>>

export function LinearGradient<M = unknown, D = unknown>(
  p1?: Script<El<SVGLinearGradientElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGLinearGradientElement, M, D>>,
  p2?: Script<El<SVGLinearGradientElement, M, D>> | ScriptTask<El<SVGLinearGradientElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGLinearGradientElement, M, D>>,
  p3?: Script<El<SVGLinearGradientElement, M, D>> | ScriptTask<El<SVGLinearGradientElement, M, D>> | ReactiveTreeNodeDesc<El<SVGLinearGradientElement, M, D>>,
  p4?: ScriptTask<El<SVGLinearGradientElement, M, D>> | ReactiveTreeNodeDesc<El<SVGLinearGradientElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGLinearGradientElement, M, D>>): ReactiveTreeNode<El<SVGLinearGradientElement, M, D>> {
  //
  return describe(LinearGradient.name, SvgTags.linearGradient, p1, p2, p3, p4, p5)
}

// Marker

export function Marker<M = unknown, D = unknown>(
  setup: Script<El<SVGMarkerElement, M, D>>,
  setupTask?: ScriptTask<El<SVGMarkerElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGMarkerElement, M, D>>): ReactiveTreeNode<El<SVGMarkerElement, M, D>>

export function Marker<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGMarkerElement, M, D>>,
  setupTask?: ScriptTask<El<SVGMarkerElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGMarkerElement, M, D>>): ReactiveTreeNode<El<SVGMarkerElement, M, D>>

export function Marker<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGMarkerElement, M, D>>,
  setupTask?: ScriptTask<El<SVGMarkerElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGMarkerElement, M, D>>): ReactiveTreeNode<El<SVGMarkerElement, M, D>>

export function Marker<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGMarkerElement, M, D>>,
  setupTask?: ScriptTask<El<SVGMarkerElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGMarkerElement, M, D>>): ReactiveTreeNode<El<SVGMarkerElement, M, D>>

export function Marker<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGMarkerElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGMarkerElement, M, D>>): ReactiveTreeNode<El<SVGMarkerElement, M, D>>

export function Marker<M = unknown, D = unknown>(
  p1?: Script<El<SVGMarkerElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGMarkerElement, M, D>>,
  p2?: Script<El<SVGMarkerElement, M, D>> | ScriptTask<El<SVGMarkerElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGMarkerElement, M, D>>,
  p3?: Script<El<SVGMarkerElement, M, D>> | ScriptTask<El<SVGMarkerElement, M, D>> | ReactiveTreeNodeDesc<El<SVGMarkerElement, M, D>>,
  p4?: ScriptTask<El<SVGMarkerElement, M, D>> | ReactiveTreeNodeDesc<El<SVGMarkerElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGMarkerElement, M, D>>): ReactiveTreeNode<El<SVGMarkerElement, M, D>> {
  //
  return describe(Marker.name, SvgTags.marker, p1, p2, p3, p4, p5)
}

// Mask

export function Mask<M = unknown, D = unknown>(
  setup: Script<El<SVGMaskElement, M, D>>,
  setupTask?: ScriptTask<El<SVGMaskElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGMaskElement, M, D>>): ReactiveTreeNode<El<SVGMaskElement, M, D>>

export function Mask<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGMaskElement, M, D>>,
  setupTask?: ScriptTask<El<SVGMaskElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGMaskElement, M, D>>): ReactiveTreeNode<El<SVGMaskElement, M, D>>

export function Mask<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGMaskElement, M, D>>,
  setupTask?: ScriptTask<El<SVGMaskElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGMaskElement, M, D>>): ReactiveTreeNode<El<SVGMaskElement, M, D>>

export function Mask<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGMaskElement, M, D>>,
  setupTask?: ScriptTask<El<SVGMaskElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGMaskElement, M, D>>): ReactiveTreeNode<El<SVGMaskElement, M, D>>

export function Mask<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGMaskElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGMaskElement, M, D>>): ReactiveTreeNode<El<SVGMaskElement, M, D>>

export function Mask<M = unknown, D = unknown>(
  p1?: Script<El<SVGMaskElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGMaskElement, M, D>>,
  p2?: Script<El<SVGMaskElement, M, D>> | ScriptTask<El<SVGMaskElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGMaskElement, M, D>>,
  p3?: Script<El<SVGMaskElement, M, D>> | ScriptTask<El<SVGMaskElement, M, D>> | ReactiveTreeNodeDesc<El<SVGMaskElement, M, D>>,
  p4?: ScriptTask<El<SVGMaskElement, M, D>> | ReactiveTreeNodeDesc<El<SVGMaskElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGMaskElement, M, D>>): ReactiveTreeNode<El<SVGMaskElement, M, D>> {
  //
  return describe(Mask.name, SvgTags.mask, p1, p2, p3, p4, p5)
}

// MetaData

export function MetaData<M = unknown, D = unknown>(
  setup: Script<El<SVGMetadataElement, M, D>>,
  setupTask?: ScriptTask<El<SVGMetadataElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGMetadataElement, M, D>>): ReactiveTreeNode<El<SVGMetadataElement, M, D>>

export function MetaData<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGMetadataElement, M, D>>,
  setupTask?: ScriptTask<El<SVGMetadataElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGMetadataElement, M, D>>): ReactiveTreeNode<El<SVGMetadataElement, M, D>>

export function MetaData<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGMetadataElement, M, D>>,
  setupTask?: ScriptTask<El<SVGMetadataElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGMetadataElement, M, D>>): ReactiveTreeNode<El<SVGMetadataElement, M, D>>

export function MetaData<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGMetadataElement, M, D>>,
  setupTask?: ScriptTask<El<SVGMetadataElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGMetadataElement, M, D>>): ReactiveTreeNode<El<SVGMetadataElement, M, D>>

export function MetaData<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGMetadataElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGMetadataElement, M, D>>): ReactiveTreeNode<El<SVGMetadataElement, M, D>>

export function MetaData<M = unknown, D = unknown>(
  p1?: Script<El<SVGMetadataElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGMetadataElement, M, D>>,
  p2?: Script<El<SVGMetadataElement, M, D>> | ScriptTask<El<SVGMetadataElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGMetadataElement, M, D>>,
  p3?: Script<El<SVGMetadataElement, M, D>> | ScriptTask<El<SVGMetadataElement, M, D>> | ReactiveTreeNodeDesc<El<SVGMetadataElement, M, D>>,
  p4?: ScriptTask<El<SVGMetadataElement, M, D>> | ReactiveTreeNodeDesc<El<SVGMetadataElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGMetadataElement, M, D>>): ReactiveTreeNode<El<SVGMetadataElement, M, D>> {
  //
  return describe(MetaData.name, SvgTags.metadata, p1, p2, p3, p4, p5)
}

// MPath

export function MPath<M = unknown, D = unknown>(
  setup: Script<El<SVGElement, M, D>>,
  setupTask?: ScriptTask<El<SVGElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGElement, M, D>>): ReactiveTreeNode<El<SVGElement, M, D>>

export function MPath<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGElement, M, D>>,
  setupTask?: ScriptTask<El<SVGElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGElement, M, D>>): ReactiveTreeNode<El<SVGElement, M, D>>

export function MPath<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGElement, M, D>>,
  setupTask?: ScriptTask<El<SVGElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGElement, M, D>>): ReactiveTreeNode<El<SVGElement, M, D>>

export function MPath<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGElement, M, D>>,
  setupTask?: ScriptTask<El<SVGElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGElement, M, D>>): ReactiveTreeNode<El<SVGElement, M, D>>

export function MPath<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGElement, M, D>>): ReactiveTreeNode<El<SVGElement, M, D>>

export function MPath<M = unknown, D = unknown>(
  p1?: Script<El<SVGElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGElement, M, D>>,
  p2?: Script<El<SVGElement, M, D>> | ScriptTask<El<SVGElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGElement, M, D>>,
  p3?: Script<El<SVGElement, M, D>> | ScriptTask<El<SVGElement, M, D>> | ReactiveTreeNodeDesc<El<SVGElement, M, D>>,
  p4?: ScriptTask<El<SVGElement, M, D>> | ReactiveTreeNodeDesc<El<SVGElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGElement, M, D>>): ReactiveTreeNode<El<SVGElement, M, D>> {
  //
  return describe(MPath.name, SvgTags.mpath, p1, p2, p3, p4, p5)
}

// Path

export function Path<M = unknown, D = unknown>(
  setup: Script<El<SVGPathElement, M, D>>,
  setupTask?: ScriptTask<El<SVGPathElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGPathElement, M, D>>): ReactiveTreeNode<El<SVGPathElement, M, D>>

export function Path<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGPathElement, M, D>>,
  setupTask?: ScriptTask<El<SVGPathElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGPathElement, M, D>>): ReactiveTreeNode<El<SVGPathElement, M, D>>

export function Path<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGPathElement, M, D>>,
  setupTask?: ScriptTask<El<SVGPathElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGPathElement, M, D>>): ReactiveTreeNode<El<SVGPathElement, M, D>>

export function Path<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGPathElement, M, D>>,
  setupTask?: ScriptTask<El<SVGPathElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGPathElement, M, D>>): ReactiveTreeNode<El<SVGPathElement, M, D>>

export function Path<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGPathElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGPathElement, M, D>>): ReactiveTreeNode<El<SVGPathElement, M, D>>

export function Path<M = unknown, D = unknown>(
  p1?: Script<El<SVGPathElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGPathElement, M, D>>,
  p2?: Script<El<SVGPathElement, M, D>> | ScriptTask<El<SVGPathElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGPathElement, M, D>>,
  p3?: Script<El<SVGPathElement, M, D>> | ScriptTask<El<SVGPathElement, M, D>> | ReactiveTreeNodeDesc<El<SVGPathElement, M, D>>,
  p4?: ScriptTask<El<SVGPathElement, M, D>> | ReactiveTreeNodeDesc<El<SVGPathElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGPathElement, M, D>>): ReactiveTreeNode<El<SVGPathElement, M, D>> {
  //
  return describe(Path.name, SvgTags.path, p1, p2, p3, p4, p5)
}

// Pattern

export function Pattern<M = unknown, D = unknown>(
  setup: Script<El<SVGPatternElement, M, D>>,
  setupTask?: ScriptTask<El<SVGPatternElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGPatternElement, M, D>>): ReactiveTreeNode<El<SVGPatternElement, M, D>>

export function Pattern<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGPatternElement, M, D>>,
  setupTask?: ScriptTask<El<SVGPatternElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGPatternElement, M, D>>): ReactiveTreeNode<El<SVGPatternElement, M, D>>

export function Pattern<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGPatternElement, M, D>>,
  setupTask?: ScriptTask<El<SVGPatternElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGPatternElement, M, D>>): ReactiveTreeNode<El<SVGPatternElement, M, D>>

export function Pattern<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGPatternElement, M, D>>,
  setupTask?: ScriptTask<El<SVGPatternElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGPatternElement, M, D>>): ReactiveTreeNode<El<SVGPatternElement, M, D>>

export function Pattern<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGPatternElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGPatternElement, M, D>>): ReactiveTreeNode<El<SVGPatternElement, M, D>>

export function Pattern<M = unknown, D = unknown>(
  p1?: Script<El<SVGPatternElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGPatternElement, M, D>>,
  p2?: Script<El<SVGPatternElement, M, D>> | ScriptTask<El<SVGPatternElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGPatternElement, M, D>>,
  p3?: Script<El<SVGPatternElement, M, D>> | ScriptTask<El<SVGPatternElement, M, D>> | ReactiveTreeNodeDesc<El<SVGPatternElement, M, D>>,
  p4?: ScriptTask<El<SVGPatternElement, M, D>> | ReactiveTreeNodeDesc<El<SVGPatternElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGPatternElement, M, D>>): ReactiveTreeNode<El<SVGPatternElement, M, D>> {
  //
  return describe(Pattern.name, SvgTags.pattern, p1, p2, p3, p4, p5)
}

// Polygon

export function Polygon<M = unknown, D = unknown>(
  setup: Script<El<SVGPolygonElement, M, D>>,
  setupTask?: ScriptTask<El<SVGPolygonElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGPolygonElement, M, D>>): ReactiveTreeNode<El<SVGPolygonElement, M, D>>

export function Polygon<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGPolygonElement, M, D>>,
  setupTask?: ScriptTask<El<SVGPolygonElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGPolygonElement, M, D>>): ReactiveTreeNode<El<SVGPolygonElement, M, D>>

export function Polygon<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGPolygonElement, M, D>>,
  setupTask?: ScriptTask<El<SVGPolygonElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGPolygonElement, M, D>>): ReactiveTreeNode<El<SVGPolygonElement, M, D>>

export function Polygon<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGPolygonElement, M, D>>,
  setupTask?: ScriptTask<El<SVGPolygonElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGPolygonElement, M, D>>): ReactiveTreeNode<El<SVGPolygonElement, M, D>>

export function Polygon<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGPolygonElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGPolygonElement, M, D>>): ReactiveTreeNode<El<SVGPolygonElement, M, D>>

export function Polygon<M = unknown, D = unknown>(
  p1?: Script<El<SVGPolygonElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGPolygonElement, M, D>>,
  p2?: Script<El<SVGPolygonElement, M, D>> | ScriptTask<El<SVGPolygonElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGPolygonElement, M, D>>,
  p3?: Script<El<SVGPolygonElement, M, D>> | ScriptTask<El<SVGPolygonElement, M, D>> | ReactiveTreeNodeDesc<El<SVGPolygonElement, M, D>>,
  p4?: ScriptTask<El<SVGPolygonElement, M, D>> | ReactiveTreeNodeDesc<El<SVGPolygonElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGPolygonElement, M, D>>): ReactiveTreeNode<El<SVGPolygonElement, M, D>> {
  //
  return describe(Polygon.name, SvgTags.polygon, p1, p2, p3, p4, p5)
}

// PolyLine

export function PolyLine<M = unknown, D = unknown>(
  setup: Script<El<SVGPolylineElement, M, D>>,
  setupTask?: ScriptTask<El<SVGPolylineElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGPolylineElement, M, D>>): ReactiveTreeNode<El<SVGPolylineElement, M, D>>

export function PolyLine<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGPolylineElement, M, D>>,
  setupTask?: ScriptTask<El<SVGPolylineElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGPolylineElement, M, D>>): ReactiveTreeNode<El<SVGPolylineElement, M, D>>

export function PolyLine<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGPolylineElement, M, D>>,
  setupTask?: ScriptTask<El<SVGPolylineElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGPolylineElement, M, D>>): ReactiveTreeNode<El<SVGPolylineElement, M, D>>

export function PolyLine<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGPolylineElement, M, D>>,
  setupTask?: ScriptTask<El<SVGPolylineElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGPolylineElement, M, D>>): ReactiveTreeNode<El<SVGPolylineElement, M, D>>

export function PolyLine<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGPolylineElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGPolylineElement, M, D>>): ReactiveTreeNode<El<SVGPolylineElement, M, D>>

export function PolyLine<M = unknown, D = unknown>(
  p1?: Script<El<SVGPolylineElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGPolylineElement, M, D>>,
  p2?: Script<El<SVGPolylineElement, M, D>> | ScriptTask<El<SVGPolylineElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGPolylineElement, M, D>>,
  p3?: Script<El<SVGPolylineElement, M, D>> | ScriptTask<El<SVGPolylineElement, M, D>> | ReactiveTreeNodeDesc<El<SVGPolylineElement, M, D>>,
  p4?: ScriptTask<El<SVGPolylineElement, M, D>> | ReactiveTreeNodeDesc<El<SVGPolylineElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGPolylineElement, M, D>>): ReactiveTreeNode<El<SVGPolylineElement, M, D>> {
  //
  return describe(PolyLine.name, SvgTags.polyline, p1, p2, p3, p4, p5)
}

// RadialGradient

export function RadialGradient<M = unknown, D = unknown>(
  setup: Script<El<SVGRadialGradientElement, M, D>>,
  setupTask?: ScriptTask<El<SVGRadialGradientElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGRadialGradientElement, M, D>>): ReactiveTreeNode<El<SVGRadialGradientElement, M, D>>

export function RadialGradient<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGRadialGradientElement, M, D>>,
  setupTask?: ScriptTask<El<SVGRadialGradientElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGRadialGradientElement, M, D>>): ReactiveTreeNode<El<SVGRadialGradientElement, M, D>>

export function RadialGradient<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGRadialGradientElement, M, D>>,
  setupTask?: ScriptTask<El<SVGRadialGradientElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGRadialGradientElement, M, D>>): ReactiveTreeNode<El<SVGRadialGradientElement, M, D>>

export function RadialGradient<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGRadialGradientElement, M, D>>,
  setupTask?: ScriptTask<El<SVGRadialGradientElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGRadialGradientElement, M, D>>): ReactiveTreeNode<El<SVGRadialGradientElement, M, D>>

export function RadialGradient<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGRadialGradientElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGRadialGradientElement, M, D>>): ReactiveTreeNode<El<SVGRadialGradientElement, M, D>>

export function RadialGradient<M = unknown, D = unknown>(
  p1?: Script<El<SVGRadialGradientElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGRadialGradientElement, M, D>>,
  p2?: Script<El<SVGRadialGradientElement, M, D>> | ScriptTask<El<SVGRadialGradientElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGRadialGradientElement, M, D>>,
  p3?: Script<El<SVGRadialGradientElement, M, D>> | ScriptTask<El<SVGRadialGradientElement, M, D>> | ReactiveTreeNodeDesc<El<SVGRadialGradientElement, M, D>>,
  p4?: ScriptTask<El<SVGRadialGradientElement, M, D>> | ReactiveTreeNodeDesc<El<SVGRadialGradientElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGRadialGradientElement, M, D>>): ReactiveTreeNode<El<SVGRadialGradientElement, M, D>> {
  //
  return describe(RadialGradient.name, SvgTags.radialGradient, p1, p2, p3, p4, p5)
}

// Rect

export function Rect<M = unknown, D = unknown>(
  setup: Script<El<SVGRectElement, M, D>>,
  setupTask?: ScriptTask<El<SVGRectElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGRectElement, M, D>>): ReactiveTreeNode<El<SVGRectElement, M, D>>

export function Rect<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGRectElement, M, D>>,
  setupTask?: ScriptTask<El<SVGRectElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGRectElement, M, D>>): ReactiveTreeNode<El<SVGRectElement, M, D>>

export function Rect<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGRectElement, M, D>>,
  setupTask?: ScriptTask<El<SVGRectElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGRectElement, M, D>>): ReactiveTreeNode<El<SVGRectElement, M, D>>

export function Rect<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGRectElement, M, D>>,
  setupTask?: ScriptTask<El<SVGRectElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGRectElement, M, D>>): ReactiveTreeNode<El<SVGRectElement, M, D>>

export function Rect<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGRectElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGRectElement, M, D>>): ReactiveTreeNode<El<SVGRectElement, M, D>>

export function Rect<M = unknown, D = unknown>(
  p1?: Script<El<SVGRectElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGRectElement, M, D>>,
  p2?: Script<El<SVGRectElement, M, D>> | ScriptTask<El<SVGRectElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGRectElement, M, D>>,
  p3?: Script<El<SVGRectElement, M, D>> | ScriptTask<El<SVGRectElement, M, D>> | ReactiveTreeNodeDesc<El<SVGRectElement, M, D>>,
  p4?: ScriptTask<El<SVGRectElement, M, D>> | ReactiveTreeNodeDesc<El<SVGRectElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGRectElement, M, D>>): ReactiveTreeNode<El<SVGRectElement, M, D>> {
  //
  return describe(Rect.name, SvgTags.rect, p1, p2, p3, p4, p5)
}

// Stop

export function Stop<M = unknown, D = unknown>(
  setup: Script<El<SVGStopElement, M, D>>,
  setupTask?: ScriptTask<El<SVGStopElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGStopElement, M, D>>): ReactiveTreeNode<El<SVGStopElement, M, D>>

export function Stop<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGStopElement, M, D>>,
  setupTask?: ScriptTask<El<SVGStopElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGStopElement, M, D>>): ReactiveTreeNode<El<SVGStopElement, M, D>>

export function Stop<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGStopElement, M, D>>,
  setupTask?: ScriptTask<El<SVGStopElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGStopElement, M, D>>): ReactiveTreeNode<El<SVGStopElement, M, D>>

export function Stop<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGStopElement, M, D>>,
  setupTask?: ScriptTask<El<SVGStopElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGStopElement, M, D>>): ReactiveTreeNode<El<SVGStopElement, M, D>>

export function Stop<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGStopElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGStopElement, M, D>>): ReactiveTreeNode<El<SVGStopElement, M, D>>

export function Stop<M = unknown, D = unknown>(
  p1?: Script<El<SVGStopElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGStopElement, M, D>>,
  p2?: Script<El<SVGStopElement, M, D>> | ScriptTask<El<SVGStopElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGStopElement, M, D>>,
  p3?: Script<El<SVGStopElement, M, D>> | ScriptTask<El<SVGStopElement, M, D>> | ReactiveTreeNodeDesc<El<SVGStopElement, M, D>>,
  p4?: ScriptTask<El<SVGStopElement, M, D>> | ReactiveTreeNodeDesc<El<SVGStopElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGStopElement, M, D>>): ReactiveTreeNode<El<SVGStopElement, M, D>> {
  //
  return describe(Stop.name, SvgTags.stop, p1, p2, p3, p4, p5)
}

// SvgSwitch

export function SvgSwitch<M = unknown, D = unknown>(
  setup: Script<El<SVGSwitchElement, M, D>>,
  setupTask?: ScriptTask<El<SVGSwitchElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGSwitchElement, M, D>>): ReactiveTreeNode<El<SVGSwitchElement, M, D>>

export function SvgSwitch<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGSwitchElement, M, D>>,
  setupTask?: ScriptTask<El<SVGSwitchElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGSwitchElement, M, D>>): ReactiveTreeNode<El<SVGSwitchElement, M, D>>

export function SvgSwitch<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGSwitchElement, M, D>>,
  setupTask?: ScriptTask<El<SVGSwitchElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGSwitchElement, M, D>>): ReactiveTreeNode<El<SVGSwitchElement, M, D>>

export function SvgSwitch<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGSwitchElement, M, D>>,
  setupTask?: ScriptTask<El<SVGSwitchElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGSwitchElement, M, D>>): ReactiveTreeNode<El<SVGSwitchElement, M, D>>

export function SvgSwitch<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGSwitchElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGSwitchElement, M, D>>): ReactiveTreeNode<El<SVGSwitchElement, M, D>>

export function SvgSwitch<M = unknown, D = unknown>(
  p1?: Script<El<SVGSwitchElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGSwitchElement, M, D>>,
  p2?: Script<El<SVGSwitchElement, M, D>> | ScriptTask<El<SVGSwitchElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGSwitchElement, M, D>>,
  p3?: Script<El<SVGSwitchElement, M, D>> | ScriptTask<El<SVGSwitchElement, M, D>> | ReactiveTreeNodeDesc<El<SVGSwitchElement, M, D>>,
  p4?: ScriptTask<El<SVGSwitchElement, M, D>> | ReactiveTreeNodeDesc<El<SVGSwitchElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGSwitchElement, M, D>>): ReactiveTreeNode<El<SVGSwitchElement, M, D>> {
  //
  return describe(SvgSwitch.name, SvgTags.switch, p1, p2, p3, p4, p5)
}

// Symbol

export function Symbol<M = unknown, D = unknown>(
  setup: Script<El<SVGSymbolElement, M, D>>,
  setupTask?: ScriptTask<El<SVGSymbolElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGSymbolElement, M, D>>): ReactiveTreeNode<El<SVGSymbolElement, M, D>>

export function Symbol<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGSymbolElement, M, D>>,
  setupTask?: ScriptTask<El<SVGSymbolElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGSymbolElement, M, D>>): ReactiveTreeNode<El<SVGSymbolElement, M, D>>

export function Symbol<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGSymbolElement, M, D>>,
  setupTask?: ScriptTask<El<SVGSymbolElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGSymbolElement, M, D>>): ReactiveTreeNode<El<SVGSymbolElement, M, D>>

export function Symbol<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGSymbolElement, M, D>>,
  setupTask?: ScriptTask<El<SVGSymbolElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGSymbolElement, M, D>>): ReactiveTreeNode<El<SVGSymbolElement, M, D>>

export function Symbol<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGSymbolElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGSymbolElement, M, D>>): ReactiveTreeNode<El<SVGSymbolElement, M, D>>

export function Symbol<M = unknown, D = unknown>(
  p1?: Script<El<SVGSymbolElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGSymbolElement, M, D>>,
  p2?: Script<El<SVGSymbolElement, M, D>> | ScriptTask<El<SVGSymbolElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGSymbolElement, M, D>>,
  p3?: Script<El<SVGSymbolElement, M, D>> | ScriptTask<El<SVGSymbolElement, M, D>> | ReactiveTreeNodeDesc<El<SVGSymbolElement, M, D>>,
  p4?: ScriptTask<El<SVGSymbolElement, M, D>> | ReactiveTreeNodeDesc<El<SVGSymbolElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGSymbolElement, M, D>>): ReactiveTreeNode<El<SVGSymbolElement, M, D>> {
  //
  return describe(Symbol.name, SvgTags.symbol, p1, p2, p3, p4, p5)
}

// Text

export function Text<M = unknown, D = unknown>(
  setup: Script<El<SVGTextElement, M, D>>,
  setupTask?: ScriptTask<El<SVGTextElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGTextElement, M, D>>): ReactiveTreeNode<El<SVGTextElement, M, D>>

export function Text<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGTextElement, M, D>>,
  setupTask?: ScriptTask<El<SVGTextElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGTextElement, M, D>>): ReactiveTreeNode<El<SVGTextElement, M, D>>

export function Text<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGTextElement, M, D>>,
  setupTask?: ScriptTask<El<SVGTextElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGTextElement, M, D>>): ReactiveTreeNode<El<SVGTextElement, M, D>>

export function Text<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGTextElement, M, D>>,
  setupTask?: ScriptTask<El<SVGTextElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGTextElement, M, D>>): ReactiveTreeNode<El<SVGTextElement, M, D>>

export function Text<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGTextElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGTextElement, M, D>>): ReactiveTreeNode<El<SVGTextElement, M, D>>

export function Text<M = unknown, D = unknown>(
  p1?: Script<El<SVGTextElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGTextElement, M, D>>,
  p2?: Script<El<SVGTextElement, M, D>> | ScriptTask<El<SVGTextElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGTextElement, M, D>>,
  p3?: Script<El<SVGTextElement, M, D>> | ScriptTask<El<SVGTextElement, M, D>> | ReactiveTreeNodeDesc<El<SVGTextElement, M, D>>,
  p4?: ScriptTask<El<SVGTextElement, M, D>> | ReactiveTreeNodeDesc<El<SVGTextElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGTextElement, M, D>>): ReactiveTreeNode<El<SVGTextElement, M, D>> {
  //
  return describe(Text.name, SvgTags.text, p1, p2, p3, p4, p5)
}

// TextPath

export function TextPath<M = unknown, D = unknown>(
  setup: Script<El<SVGTextPathElement, M, D>>,
  setupTask?: ScriptTask<El<SVGTextPathElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGTextPathElement, M, D>>): ReactiveTreeNode<El<SVGTextPathElement, M, D>>

export function TextPath<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGTextPathElement, M, D>>,
  setupTask?: ScriptTask<El<SVGTextPathElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGTextPathElement, M, D>>): ReactiveTreeNode<El<SVGTextPathElement, M, D>>

export function TextPath<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGTextPathElement, M, D>>,
  setupTask?: ScriptTask<El<SVGTextPathElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGTextPathElement, M, D>>): ReactiveTreeNode<El<SVGTextPathElement, M, D>>

export function TextPath<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGTextPathElement, M, D>>,
  setupTask?: ScriptTask<El<SVGTextPathElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGTextPathElement, M, D>>): ReactiveTreeNode<El<SVGTextPathElement, M, D>>

export function TextPath<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGTextPathElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGTextPathElement, M, D>>): ReactiveTreeNode<El<SVGTextPathElement, M, D>>

export function TextPath<M = unknown, D = unknown>(
  p1?: Script<El<SVGTextPathElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGTextPathElement, M, D>>,
  p2?: Script<El<SVGTextPathElement, M, D>> | ScriptTask<El<SVGTextPathElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGTextPathElement, M, D>>,
  p3?: Script<El<SVGTextPathElement, M, D>> | ScriptTask<El<SVGTextPathElement, M, D>> | ReactiveTreeNodeDesc<El<SVGTextPathElement, M, D>>,
  p4?: ScriptTask<El<SVGTextPathElement, M, D>> | ReactiveTreeNodeDesc<El<SVGTextPathElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGTextPathElement, M, D>>): ReactiveTreeNode<El<SVGTextPathElement, M, D>> {
  //
  return describe(TextPath.name, SvgTags.textPath, p1, p2, p3, p4, p5)
}

// TSpan

export function TSpan<M = unknown, D = unknown>(
  setup: Script<El<SVGTSpanElement, M, D>>,
  setupTask?: ScriptTask<El<SVGTSpanElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGTSpanElement, M, D>>): ReactiveTreeNode<El<SVGTSpanElement, M, D>>

export function TSpan<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGTSpanElement, M, D>>,
  setupTask?: ScriptTask<El<SVGTSpanElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGTSpanElement, M, D>>): ReactiveTreeNode<El<SVGTSpanElement, M, D>>

export function TSpan<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGTSpanElement, M, D>>,
  setupTask?: ScriptTask<El<SVGTSpanElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGTSpanElement, M, D>>): ReactiveTreeNode<El<SVGTSpanElement, M, D>>

export function TSpan<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGTSpanElement, M, D>>,
  setupTask?: ScriptTask<El<SVGTSpanElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGTSpanElement, M, D>>): ReactiveTreeNode<El<SVGTSpanElement, M, D>>

export function TSpan<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGTSpanElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGTSpanElement, M, D>>): ReactiveTreeNode<El<SVGTSpanElement, M, D>>

export function TSpan<M = unknown, D = unknown>(
  p1?: Script<El<SVGTSpanElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGTSpanElement, M, D>>,
  p2?: Script<El<SVGTSpanElement, M, D>> | ScriptTask<El<SVGTSpanElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGTSpanElement, M, D>>,
  p3?: Script<El<SVGTSpanElement, M, D>> | ScriptTask<El<SVGTSpanElement, M, D>> | ReactiveTreeNodeDesc<El<SVGTSpanElement, M, D>>,
  p4?: ScriptTask<El<SVGTSpanElement, M, D>> | ReactiveTreeNodeDesc<El<SVGTSpanElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGTSpanElement, M, D>>): ReactiveTreeNode<El<SVGTSpanElement, M, D>> {
  //
  return describe(TSpan.name, SvgTags.tspan, p1, p2, p3, p4, p5)
}

// Use

export function Use<M = unknown, D = unknown>(
  setup: Script<El<SVGUseElement, M, D>>,
  setupTask?: ScriptTask<El<SVGUseElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGUseElement, M, D>>): ReactiveTreeNode<El<SVGUseElement, M, D>>

export function Use<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGUseElement, M, D>>,
  setupTask?: ScriptTask<El<SVGUseElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGUseElement, M, D>>): ReactiveTreeNode<El<SVGUseElement, M, D>>

export function Use<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGUseElement, M, D>>,
  setupTask?: ScriptTask<El<SVGUseElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGUseElement, M, D>>): ReactiveTreeNode<El<SVGUseElement, M, D>>

export function Use<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGUseElement, M, D>>,
  setupTask?: ScriptTask<El<SVGUseElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGUseElement, M, D>>): ReactiveTreeNode<El<SVGUseElement, M, D>>

export function Use<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGUseElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGUseElement, M, D>>): ReactiveTreeNode<El<SVGUseElement, M, D>>

export function Use<M = unknown, D = unknown>(
  p1?: Script<El<SVGUseElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGUseElement, M, D>>,
  p2?: Script<El<SVGUseElement, M, D>> | ScriptTask<El<SVGUseElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGUseElement, M, D>>,
  p3?: Script<El<SVGUseElement, M, D>> | ScriptTask<El<SVGUseElement, M, D>> | ReactiveTreeNodeDesc<El<SVGUseElement, M, D>>,
  p4?: ScriptTask<El<SVGUseElement, M, D>> | ReactiveTreeNodeDesc<El<SVGUseElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGUseElement, M, D>>): ReactiveTreeNode<El<SVGUseElement, M, D>> {
  //
  return describe(Use.name, SvgTags.use, p1, p2, p3, p4, p5)
}

// View

export function View<M = unknown, D = unknown>(
  setup: Script<El<SVGViewElement, M, D>>,
  setupTask?: ScriptTask<El<SVGViewElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGViewElement, M, D>>): ReactiveTreeNode<El<SVGViewElement, M, D>>

export function View<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGViewElement, M, D>>,
  setupTask?: ScriptTask<El<SVGViewElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGViewElement, M, D>>): ReactiveTreeNode<El<SVGViewElement, M, D>>

export function View<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGViewElement, M, D>>,
  setupTask?: ScriptTask<El<SVGViewElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGViewElement, M, D>>): ReactiveTreeNode<El<SVGViewElement, M, D>>

export function View<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<SVGViewElement, M, D>>,
  setupTask?: ScriptTask<El<SVGViewElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGViewElement, M, D>>): ReactiveTreeNode<El<SVGViewElement, M, D>>

export function View<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<SVGViewElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<SVGViewElement, M, D>>): ReactiveTreeNode<El<SVGViewElement, M, D>>

export function View<M = unknown, D = unknown>(
  p1?: Script<El<SVGViewElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGViewElement, M, D>>,
  p2?: Script<El<SVGViewElement, M, D>> | ScriptTask<El<SVGViewElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<SVGViewElement, M, D>>,
  p3?: Script<El<SVGViewElement, M, D>> | ScriptTask<El<SVGViewElement, M, D>> | ReactiveTreeNodeDesc<El<SVGViewElement, M, D>>,
  p4?: ScriptTask<El<SVGViewElement, M, D>> | ReactiveTreeNodeDesc<El<SVGViewElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<SVGViewElement, M, D>>): ReactiveTreeNode<El<SVGViewElement, M, D>> {
  //
  return describe(View.name, SvgTags.view, p1, p2, p3, p4, p5)
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
