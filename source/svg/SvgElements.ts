// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2026 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, ReactiveTreeNodeDesc, Script, Mode, ScriptAsync, describe } from "reactronic"
import { El, ElKind } from "../core/El.js"
import { SvgDriver } from "../core/WebDriver.js"

export function Svg<M = unknown>(
  setup: Script<El<SVGSVGElement, M>>): ReactiveTreeNode<El<SVGSVGElement, M>>

export function Svg<M = unknown>(
  key: string,
  setup: Script<El<SVGSVGElement, M>>): ReactiveTreeNode<El<SVGSVGElement, M>>

export function Svg<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGSVGElement, M>>): ReactiveTreeNode<El<SVGSVGElement, M>>

export function Svg<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGSVGElement, M>>): ReactiveTreeNode<El<SVGSVGElement, M>>

export function Svg<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGSVGElement, M>>,
  setupTask?: ScriptAsync<El<SVGSVGElement, M>>,
  creation?: Script<El<SVGSVGElement, M>>,
  creationTask?: ScriptAsync<El<SVGSVGElement, M>>,
  mounting?: Script<El<SVGSVGElement, M>>,
  destruction?: Script<El<SVGSVGElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGSVGElement, M>>): ReactiveTreeNode<El<SVGSVGElement, M>>

export function Svg<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGSVGElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGSVGElement, M>>,
  setupOrMode?: Script<El<SVGSVGElement, M>> | Mode,
  setup?: Script<El<SVGSVGElement, M>>,
  setupTask?: ScriptAsync<El<SVGSVGElement, M>>,
  creation?: Script<El<SVGSVGElement, M>>,
  creationTask?: ScriptAsync<El<SVGSVGElement, M>>,
  mounting?: Script<El<SVGSVGElement, M>>,
  destruction?: Script<El<SVGSVGElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGSVGElement, M>>): ReactiveTreeNode<El<SVGSVGElement, M>> {
  //
  return describe(Svg.name, SvgTags.svg,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function SvgA<M = unknown>(
  setup: Script<El<SVGAElement, M>>): ReactiveTreeNode<El<SVGAElement, M>>

export function SvgA<M = unknown>(
  key: string,
  setup: Script<El<SVGAElement, M>>): ReactiveTreeNode<El<SVGAElement, M>>

export function SvgA<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGAElement, M>>): ReactiveTreeNode<El<SVGAElement, M>>

export function SvgA<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGAElement, M>>): ReactiveTreeNode<El<SVGAElement, M>>

export function SvgA<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGAElement, M>>,
  setupTask?: ScriptAsync<El<SVGAElement, M>>,
  creation?: Script<El<SVGAElement, M>>,
  creationTask?: ScriptAsync<El<SVGAElement, M>>,
  mounting?: Script<El<SVGAElement, M>>,
  destruction?: Script<El<SVGAElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGAElement, M>>): ReactiveTreeNode<El<SVGAElement, M>>

export function SvgA<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGAElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGAElement, M>>,
  setupOrMode?: Script<El<SVGAElement, M>> | Mode,
  setup?: Script<El<SVGAElement, M>>,
  setupTask?: ScriptAsync<El<SVGAElement, M>>,
  creation?: Script<El<SVGAElement, M>>,
  creationTask?: ScriptAsync<El<SVGAElement, M>>,
  mounting?: Script<El<SVGAElement, M>>,
  destruction?: Script<El<SVGAElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGAElement, M>>): ReactiveTreeNode<El<SVGAElement, M>> {
  //
  return describe(SvgA.name, SvgTags.a,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Animate<M = unknown>(
  setup: Script<El<SVGAnimateElement, M>>): ReactiveTreeNode<El<SVGAnimateElement, M>>

export function Animate<M = unknown>(
  key: string,
  setup: Script<El<SVGAnimateElement, M>>): ReactiveTreeNode<El<SVGAnimateElement, M>>

export function Animate<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGAnimateElement, M>>): ReactiveTreeNode<El<SVGAnimateElement, M>>

export function Animate<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGAnimateElement, M>>): ReactiveTreeNode<El<SVGAnimateElement, M>>

export function Animate<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGAnimateElement, M>>,
  setupTask?: ScriptAsync<El<SVGAnimateElement, M>>,
  creation?: Script<El<SVGAnimateElement, M>>,
  creationTask?: ScriptAsync<El<SVGAnimateElement, M>>,
  mounting?: Script<El<SVGAnimateElement, M>>,
  destruction?: Script<El<SVGAnimateElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGAnimateElement, M>>): ReactiveTreeNode<El<SVGAnimateElement, M>>

export function Animate<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGAnimateElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGAnimateElement, M>>,
  setupOrMode?: Script<El<SVGAnimateElement, M>> | Mode,
  setup?: Script<El<SVGAnimateElement, M>>,
  setupTask?: ScriptAsync<El<SVGAnimateElement, M>>,
  creation?: Script<El<SVGAnimateElement, M>>,
  creationTask?: ScriptAsync<El<SVGAnimateElement, M>>,
  mounting?: Script<El<SVGAnimateElement, M>>,
  destruction?: Script<El<SVGAnimateElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGAnimateElement, M>>): ReactiveTreeNode<El<SVGAnimateElement, M>> {
  //
  return describe(Animate.name, SvgTags.animate,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function AnimateMotion<M = unknown>(
  setup: Script<El<SVGAnimateMotionElement, M>>): ReactiveTreeNode<El<SVGAnimateMotionElement, M>>

export function AnimateMotion<M = unknown>(
  key: string,
  setup: Script<El<SVGAnimateMotionElement, M>>): ReactiveTreeNode<El<SVGAnimateMotionElement, M>>

export function AnimateMotion<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGAnimateMotionElement, M>>): ReactiveTreeNode<El<SVGAnimateMotionElement, M>>

export function AnimateMotion<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGAnimateMotionElement, M>>): ReactiveTreeNode<El<SVGAnimateMotionElement, M>>

export function AnimateMotion<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGAnimateMotionElement, M>>,
  setupTask?: ScriptAsync<El<SVGAnimateMotionElement, M>>,
  creation?: Script<El<SVGAnimateMotionElement, M>>,
  creationTask?: ScriptAsync<El<SVGAnimateMotionElement, M>>,
  mounting?: Script<El<SVGAnimateMotionElement, M>>,
  destruction?: Script<El<SVGAnimateMotionElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGAnimateMotionElement, M>>): ReactiveTreeNode<El<SVGAnimateMotionElement, M>>

export function AnimateMotion<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGAnimateMotionElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGAnimateMotionElement, M>>,
  setupOrMode?: Script<El<SVGAnimateMotionElement, M>> | Mode,
  setup?: Script<El<SVGAnimateMotionElement, M>>,
  setupTask?: ScriptAsync<El<SVGAnimateMotionElement, M>>,
  creation?: Script<El<SVGAnimateMotionElement, M>>,
  creationTask?: ScriptAsync<El<SVGAnimateMotionElement, M>>,
  mounting?: Script<El<SVGAnimateMotionElement, M>>,
  destruction?: Script<El<SVGAnimateMotionElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGAnimateMotionElement, M>>): ReactiveTreeNode<El<SVGAnimateMotionElement, M>> {
  //
  return describe(AnimateMotion.name, SvgTags.animateMotion,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function AnimateTransform<M = unknown>(
  setup: Script<El<SVGAnimateTransformElement, M>>): ReactiveTreeNode<El<SVGAnimateTransformElement, M>>

export function AnimateTransform<M = unknown>(
  key: string,
  setup: Script<El<SVGAnimateTransformElement, M>>): ReactiveTreeNode<El<SVGAnimateTransformElement, M>>

export function AnimateTransform<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGAnimateTransformElement, M>>): ReactiveTreeNode<El<SVGAnimateTransformElement, M>>

export function AnimateTransform<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGAnimateTransformElement, M>>): ReactiveTreeNode<El<SVGAnimateTransformElement, M>>

export function AnimateTransform<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGAnimateTransformElement, M>>,
  setupTask?: ScriptAsync<El<SVGAnimateTransformElement, M>>,
  creation?: Script<El<SVGAnimateTransformElement, M>>,
  creationTask?: ScriptAsync<El<SVGAnimateTransformElement, M>>,
  mounting?: Script<El<SVGAnimateTransformElement, M>>,
  destruction?: Script<El<SVGAnimateTransformElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGAnimateTransformElement, M>>): ReactiveTreeNode<El<SVGAnimateTransformElement, M>>

export function AnimateTransform<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGAnimateTransformElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGAnimateTransformElement, M>>,
  setupOrMode?: Script<El<SVGAnimateTransformElement, M>> | Mode,
  setup?: Script<El<SVGAnimateTransformElement, M>>,
  setupTask?: ScriptAsync<El<SVGAnimateTransformElement, M>>,
  creation?: Script<El<SVGAnimateTransformElement, M>>,
  creationTask?: ScriptAsync<El<SVGAnimateTransformElement, M>>,
  mounting?: Script<El<SVGAnimateTransformElement, M>>,
  destruction?: Script<El<SVGAnimateTransformElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGAnimateTransformElement, M>>): ReactiveTreeNode<El<SVGAnimateTransformElement, M>> {
  //
  return describe(AnimateTransform.name, SvgTags.animateTransform,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Circle<M = unknown>(
  setup: Script<El<SVGCircleElement, M>>): ReactiveTreeNode<El<SVGCircleElement, M>>

export function Circle<M = unknown>(
  key: string,
  setup: Script<El<SVGCircleElement, M>>): ReactiveTreeNode<El<SVGCircleElement, M>>

export function Circle<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGCircleElement, M>>): ReactiveTreeNode<El<SVGCircleElement, M>>

export function Circle<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGCircleElement, M>>): ReactiveTreeNode<El<SVGCircleElement, M>>

export function Circle<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGCircleElement, M>>,
  setupTask?: ScriptAsync<El<SVGCircleElement, M>>,
  creation?: Script<El<SVGCircleElement, M>>,
  creationTask?: ScriptAsync<El<SVGCircleElement, M>>,
  mounting?: Script<El<SVGCircleElement, M>>,
  destruction?: Script<El<SVGCircleElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGCircleElement, M>>): ReactiveTreeNode<El<SVGCircleElement, M>>

export function Circle<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGCircleElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGCircleElement, M>>,
  setupOrMode?: Script<El<SVGCircleElement, M>> | Mode,
  setup?: Script<El<SVGCircleElement, M>>,
  setupTask?: ScriptAsync<El<SVGCircleElement, M>>,
  creation?: Script<El<SVGCircleElement, M>>,
  creationTask?: ScriptAsync<El<SVGCircleElement, M>>,
  mounting?: Script<El<SVGCircleElement, M>>,
  destruction?: Script<El<SVGCircleElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGCircleElement, M>>): ReactiveTreeNode<El<SVGCircleElement, M>> {
  //
  return describe(Circle.name, SvgTags.circle,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function ClipPath<M = unknown>(
  setup: Script<El<SVGClipPathElement, M>>): ReactiveTreeNode<El<SVGClipPathElement, M>>

export function ClipPath<M = unknown>(
  key: string,
  setup: Script<El<SVGClipPathElement, M>>): ReactiveTreeNode<El<SVGClipPathElement, M>>

export function ClipPath<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGClipPathElement, M>>): ReactiveTreeNode<El<SVGClipPathElement, M>>

export function ClipPath<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGClipPathElement, M>>): ReactiveTreeNode<El<SVGClipPathElement, M>>

export function ClipPath<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGClipPathElement, M>>,
  setupTask?: ScriptAsync<El<SVGClipPathElement, M>>,
  creation?: Script<El<SVGClipPathElement, M>>,
  creationTask?: ScriptAsync<El<SVGClipPathElement, M>>,
  mounting?: Script<El<SVGClipPathElement, M>>,
  destruction?: Script<El<SVGClipPathElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGClipPathElement, M>>): ReactiveTreeNode<El<SVGClipPathElement, M>>

export function ClipPath<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGClipPathElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGClipPathElement, M>>,
  setupOrMode?: Script<El<SVGClipPathElement, M>> | Mode,
  setup?: Script<El<SVGClipPathElement, M>>,
  setupTask?: ScriptAsync<El<SVGClipPathElement, M>>,
  creation?: Script<El<SVGClipPathElement, M>>,
  creationTask?: ScriptAsync<El<SVGClipPathElement, M>>,
  mounting?: Script<El<SVGClipPathElement, M>>,
  destruction?: Script<El<SVGClipPathElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGClipPathElement, M>>): ReactiveTreeNode<El<SVGClipPathElement, M>> {
  //
  return describe(ClipPath.name, SvgTags.clipPath,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Defs<M = unknown>(
  setup: Script<El<SVGDefsElement, M>>): ReactiveTreeNode<El<SVGDefsElement, M>>

export function Defs<M = unknown>(
  key: string,
  setup: Script<El<SVGDefsElement, M>>): ReactiveTreeNode<El<SVGDefsElement, M>>

export function Defs<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGDefsElement, M>>): ReactiveTreeNode<El<SVGDefsElement, M>>

export function Defs<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGDefsElement, M>>): ReactiveTreeNode<El<SVGDefsElement, M>>

export function Defs<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGDefsElement, M>>,
  setupTask?: ScriptAsync<El<SVGDefsElement, M>>,
  creation?: Script<El<SVGDefsElement, M>>,
  creationTask?: ScriptAsync<El<SVGDefsElement, M>>,
  mounting?: Script<El<SVGDefsElement, M>>,
  destruction?: Script<El<SVGDefsElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGDefsElement, M>>): ReactiveTreeNode<El<SVGDefsElement, M>>

export function Defs<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGDefsElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGDefsElement, M>>,
  setupOrMode?: Script<El<SVGDefsElement, M>> | Mode,
  setup?: Script<El<SVGDefsElement, M>>,
  setupTask?: ScriptAsync<El<SVGDefsElement, M>>,
  creation?: Script<El<SVGDefsElement, M>>,
  creationTask?: ScriptAsync<El<SVGDefsElement, M>>,
  mounting?: Script<El<SVGDefsElement, M>>,
  destruction?: Script<El<SVGDefsElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGDefsElement, M>>): ReactiveTreeNode<El<SVGDefsElement, M>> {
  //
  return describe(Defs.name, SvgTags.defs,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Desc<M = unknown>(
  setup: Script<El<SVGDescElement, M>>): ReactiveTreeNode<El<SVGDescElement, M>>

export function Desc<M = unknown>(
  key: string,
  setup: Script<El<SVGDescElement, M>>): ReactiveTreeNode<El<SVGDescElement, M>>

export function Desc<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGDescElement, M>>): ReactiveTreeNode<El<SVGDescElement, M>>

export function Desc<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGDescElement, M>>): ReactiveTreeNode<El<SVGDescElement, M>>

export function Desc<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGDescElement, M>>,
  setupTask?: ScriptAsync<El<SVGDescElement, M>>,
  creation?: Script<El<SVGDescElement, M>>,
  creationTask?: ScriptAsync<El<SVGDescElement, M>>,
  mounting?: Script<El<SVGDescElement, M>>,
  destruction?: Script<El<SVGDescElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGDescElement, M>>): ReactiveTreeNode<El<SVGDescElement, M>>

export function Desc<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGDescElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGDescElement, M>>,
  setupOrMode?: Script<El<SVGDescElement, M>> | Mode,
  setup?: Script<El<SVGDescElement, M>>,
  setupTask?: ScriptAsync<El<SVGDescElement, M>>,
  creation?: Script<El<SVGDescElement, M>>,
  creationTask?: ScriptAsync<El<SVGDescElement, M>>,
  mounting?: Script<El<SVGDescElement, M>>,
  destruction?: Script<El<SVGDescElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGDescElement, M>>): ReactiveTreeNode<El<SVGDescElement, M>> {
  //
  return describe(Desc.name, SvgTags.desc,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Ellipse<M = unknown>(
  setup: Script<El<SVGEllipseElement, M>>): ReactiveTreeNode<El<SVGEllipseElement, M>>

export function Ellipse<M = unknown>(
  key: string,
  setup: Script<El<SVGEllipseElement, M>>): ReactiveTreeNode<El<SVGEllipseElement, M>>

export function Ellipse<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGEllipseElement, M>>): ReactiveTreeNode<El<SVGEllipseElement, M>>

export function Ellipse<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGEllipseElement, M>>): ReactiveTreeNode<El<SVGEllipseElement, M>>

export function Ellipse<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGEllipseElement, M>>,
  setupTask?: ScriptAsync<El<SVGEllipseElement, M>>,
  creation?: Script<El<SVGEllipseElement, M>>,
  creationTask?: ScriptAsync<El<SVGEllipseElement, M>>,
  mounting?: Script<El<SVGEllipseElement, M>>,
  destruction?: Script<El<SVGEllipseElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGEllipseElement, M>>): ReactiveTreeNode<El<SVGEllipseElement, M>>

export function Ellipse<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGEllipseElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGEllipseElement, M>>,
  setupOrMode?: Script<El<SVGEllipseElement, M>> | Mode,
  setup?: Script<El<SVGEllipseElement, M>>,
  setupTask?: ScriptAsync<El<SVGEllipseElement, M>>,
  creation?: Script<El<SVGEllipseElement, M>>,
  creationTask?: ScriptAsync<El<SVGEllipseElement, M>>,
  mounting?: Script<El<SVGEllipseElement, M>>,
  destruction?: Script<El<SVGEllipseElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGEllipseElement, M>>): ReactiveTreeNode<El<SVGEllipseElement, M>> {
  //
  return describe(Ellipse.name, SvgTags.ellipse,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function FeBlend<M = unknown>(
  setup: Script<El<SVGFEBlendElement, M>>): ReactiveTreeNode<El<SVGFEBlendElement, M>>

export function FeBlend<M = unknown>(
  key: string,
  setup: Script<El<SVGFEBlendElement, M>>): ReactiveTreeNode<El<SVGFEBlendElement, M>>

export function FeBlend<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEBlendElement, M>>): ReactiveTreeNode<El<SVGFEBlendElement, M>>

export function FeBlend<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEBlendElement, M>>): ReactiveTreeNode<El<SVGFEBlendElement, M>>

export function FeBlend<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEBlendElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEBlendElement, M>>,
  creation?: Script<El<SVGFEBlendElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEBlendElement, M>>,
  mounting?: Script<El<SVGFEBlendElement, M>>,
  destruction?: Script<El<SVGFEBlendElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEBlendElement, M>>): ReactiveTreeNode<El<SVGFEBlendElement, M>>

export function FeBlend<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEBlendElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEBlendElement, M>>,
  setupOrMode?: Script<El<SVGFEBlendElement, M>> | Mode,
  setup?: Script<El<SVGFEBlendElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEBlendElement, M>>,
  creation?: Script<El<SVGFEBlendElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEBlendElement, M>>,
  mounting?: Script<El<SVGFEBlendElement, M>>,
  destruction?: Script<El<SVGFEBlendElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEBlendElement, M>>): ReactiveTreeNode<El<SVGFEBlendElement, M>> {
  //
  return describe(FeBlend.name, SvgTags.feBlend,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function FeColorMatrix<M = unknown>(
  setup: Script<El<SVGFEColorMatrixElement, M>>): ReactiveTreeNode<El<SVGFEColorMatrixElement, M>>

export function FeColorMatrix<M = unknown>(
  key: string,
  setup: Script<El<SVGFEColorMatrixElement, M>>): ReactiveTreeNode<El<SVGFEColorMatrixElement, M>>

export function FeColorMatrix<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEColorMatrixElement, M>>): ReactiveTreeNode<El<SVGFEColorMatrixElement, M>>

export function FeColorMatrix<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEColorMatrixElement, M>>): ReactiveTreeNode<El<SVGFEColorMatrixElement, M>>

export function FeColorMatrix<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEColorMatrixElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEColorMatrixElement, M>>,
  creation?: Script<El<SVGFEColorMatrixElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEColorMatrixElement, M>>,
  mounting?: Script<El<SVGFEColorMatrixElement, M>>,
  destruction?: Script<El<SVGFEColorMatrixElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEColorMatrixElement, M>>): ReactiveTreeNode<El<SVGFEColorMatrixElement, M>>

export function FeColorMatrix<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEColorMatrixElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEColorMatrixElement, M>>,
  setupOrMode?: Script<El<SVGFEColorMatrixElement, M>> | Mode,
  setup?: Script<El<SVGFEColorMatrixElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEColorMatrixElement, M>>,
  creation?: Script<El<SVGFEColorMatrixElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEColorMatrixElement, M>>,
  mounting?: Script<El<SVGFEColorMatrixElement, M>>,
  destruction?: Script<El<SVGFEColorMatrixElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEColorMatrixElement, M>>): ReactiveTreeNode<El<SVGFEColorMatrixElement, M>> {
  //
  return describe(FeColorMatrix.name, SvgTags.feColorMatrix,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function FeComponentTransfer<M = unknown>(
  setup: Script<El<SVGFEComponentTransferElement, M>>): ReactiveTreeNode<El<SVGFEComponentTransferElement, M>>

export function FeComponentTransfer<M = unknown>(
  key: string,
  setup: Script<El<SVGFEComponentTransferElement, M>>): ReactiveTreeNode<El<SVGFEComponentTransferElement, M>>

export function FeComponentTransfer<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEComponentTransferElement, M>>): ReactiveTreeNode<El<SVGFEComponentTransferElement, M>>

export function FeComponentTransfer<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEComponentTransferElement, M>>): ReactiveTreeNode<El<SVGFEComponentTransferElement, M>>

export function FeComponentTransfer<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEComponentTransferElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEComponentTransferElement, M>>,
  creation?: Script<El<SVGFEComponentTransferElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEComponentTransferElement, M>>,
  mounting?: Script<El<SVGFEComponentTransferElement, M>>,
  destruction?: Script<El<SVGFEComponentTransferElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEComponentTransferElement, M>>): ReactiveTreeNode<El<SVGFEComponentTransferElement, M>>

export function FeComponentTransfer<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEComponentTransferElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEComponentTransferElement, M>>,
  setupOrMode?: Script<El<SVGFEComponentTransferElement, M>> | Mode,
  setup?: Script<El<SVGFEComponentTransferElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEComponentTransferElement, M>>,
  creation?: Script<El<SVGFEComponentTransferElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEComponentTransferElement, M>>,
  mounting?: Script<El<SVGFEComponentTransferElement, M>>,
  destruction?: Script<El<SVGFEComponentTransferElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEComponentTransferElement, M>>): ReactiveTreeNode<El<SVGFEComponentTransferElement, M>> {
  //
  return describe(FeComponentTransfer.name, SvgTags.feComponentTransfer,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function FeComposite<M = unknown>(
  setup: Script<El<SVGFECompositeElement, M>>): ReactiveTreeNode<El<SVGFECompositeElement, M>>

export function FeComposite<M = unknown>(
  key: string,
  setup: Script<El<SVGFECompositeElement, M>>): ReactiveTreeNode<El<SVGFECompositeElement, M>>

export function FeComposite<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGFECompositeElement, M>>): ReactiveTreeNode<El<SVGFECompositeElement, M>>

export function FeComposite<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFECompositeElement, M>>): ReactiveTreeNode<El<SVGFECompositeElement, M>>

export function FeComposite<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFECompositeElement, M>>,
  setupTask?: ScriptAsync<El<SVGFECompositeElement, M>>,
  creation?: Script<El<SVGFECompositeElement, M>>,
  creationTask?: ScriptAsync<El<SVGFECompositeElement, M>>,
  mounting?: Script<El<SVGFECompositeElement, M>>,
  destruction?: Script<El<SVGFECompositeElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFECompositeElement, M>>): ReactiveTreeNode<El<SVGFECompositeElement, M>>

export function FeComposite<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFECompositeElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFECompositeElement, M>>,
  setupOrMode?: Script<El<SVGFECompositeElement, M>> | Mode,
  setup?: Script<El<SVGFECompositeElement, M>>,
  setupTask?: ScriptAsync<El<SVGFECompositeElement, M>>,
  creation?: Script<El<SVGFECompositeElement, M>>,
  creationTask?: ScriptAsync<El<SVGFECompositeElement, M>>,
  mounting?: Script<El<SVGFECompositeElement, M>>,
  destruction?: Script<El<SVGFECompositeElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFECompositeElement, M>>): ReactiveTreeNode<El<SVGFECompositeElement, M>> {
  //
  return describe(FeComposite.name, SvgTags.feComposite,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function FeConvolveMatrix<M = unknown>(
  setup: Script<El<SVGFEConvolveMatrixElement, M>>): ReactiveTreeNode<El<SVGFEConvolveMatrixElement, M>>

export function FeConvolveMatrix<M = unknown>(
  key: string,
  setup: Script<El<SVGFEConvolveMatrixElement, M>>): ReactiveTreeNode<El<SVGFEConvolveMatrixElement, M>>

export function FeConvolveMatrix<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEConvolveMatrixElement, M>>): ReactiveTreeNode<El<SVGFEConvolveMatrixElement, M>>

export function FeConvolveMatrix<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEConvolveMatrixElement, M>>): ReactiveTreeNode<El<SVGFEConvolveMatrixElement, M>>

export function FeConvolveMatrix<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEConvolveMatrixElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEConvolveMatrixElement, M>>,
  creation?: Script<El<SVGFEConvolveMatrixElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEConvolveMatrixElement, M>>,
  mounting?: Script<El<SVGFEConvolveMatrixElement, M>>,
  destruction?: Script<El<SVGFEConvolveMatrixElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEConvolveMatrixElement, M>>): ReactiveTreeNode<El<SVGFEConvolveMatrixElement, M>>

export function FeConvolveMatrix<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEConvolveMatrixElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEConvolveMatrixElement, M>>,
  setupOrMode?: Script<El<SVGFEConvolveMatrixElement, M>> | Mode,
  setup?: Script<El<SVGFEConvolveMatrixElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEConvolveMatrixElement, M>>,
  creation?: Script<El<SVGFEConvolveMatrixElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEConvolveMatrixElement, M>>,
  mounting?: Script<El<SVGFEConvolveMatrixElement, M>>,
  destruction?: Script<El<SVGFEConvolveMatrixElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEConvolveMatrixElement, M>>): ReactiveTreeNode<El<SVGFEConvolveMatrixElement, M>> {
  //
  return describe(FeConvolveMatrix.name, SvgTags.feConvolveMatrix,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function FeDiffuseLighting<M = unknown>(
  setup: Script<El<SVGFEDiffuseLightingElement, M>>): ReactiveTreeNode<El<SVGFEDiffuseLightingElement, M>>

export function FeDiffuseLighting<M = unknown>(
  key: string,
  setup: Script<El<SVGFEDiffuseLightingElement, M>>): ReactiveTreeNode<El<SVGFEDiffuseLightingElement, M>>

export function FeDiffuseLighting<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEDiffuseLightingElement, M>>): ReactiveTreeNode<El<SVGFEDiffuseLightingElement, M>>

export function FeDiffuseLighting<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEDiffuseLightingElement, M>>): ReactiveTreeNode<El<SVGFEDiffuseLightingElement, M>>

export function FeDiffuseLighting<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEDiffuseLightingElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEDiffuseLightingElement, M>>,
  creation?: Script<El<SVGFEDiffuseLightingElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEDiffuseLightingElement, M>>,
  mounting?: Script<El<SVGFEDiffuseLightingElement, M>>,
  destruction?: Script<El<SVGFEDiffuseLightingElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDiffuseLightingElement, M>>): ReactiveTreeNode<El<SVGFEDiffuseLightingElement, M>>

export function FeDiffuseLighting<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEDiffuseLightingElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEDiffuseLightingElement, M>>,
  setupOrMode?: Script<El<SVGFEDiffuseLightingElement, M>> | Mode,
  setup?: Script<El<SVGFEDiffuseLightingElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEDiffuseLightingElement, M>>,
  creation?: Script<El<SVGFEDiffuseLightingElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEDiffuseLightingElement, M>>,
  mounting?: Script<El<SVGFEDiffuseLightingElement, M>>,
  destruction?: Script<El<SVGFEDiffuseLightingElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDiffuseLightingElement, M>>): ReactiveTreeNode<El<SVGFEDiffuseLightingElement, M>> {
  //
  return describe(FeDiffuseLighting.name, SvgTags.feDiffuseLighting,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function FeDisplacementMap<M = unknown>(
  setup: Script<El<SVGFEDisplacementMapElement, M>>): ReactiveTreeNode<El<SVGFEDisplacementMapElement, M>>

export function FeDisplacementMap<M = unknown>(
  key: string,
  setup: Script<El<SVGFEDisplacementMapElement, M>>): ReactiveTreeNode<El<SVGFEDisplacementMapElement, M>>

export function FeDisplacementMap<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEDisplacementMapElement, M>>): ReactiveTreeNode<El<SVGFEDisplacementMapElement, M>>

export function FeDisplacementMap<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEDisplacementMapElement, M>>): ReactiveTreeNode<El<SVGFEDisplacementMapElement, M>>

export function FeDisplacementMap<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEDisplacementMapElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEDisplacementMapElement, M>>,
  creation?: Script<El<SVGFEDisplacementMapElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEDisplacementMapElement, M>>,
  mounting?: Script<El<SVGFEDisplacementMapElement, M>>,
  destruction?: Script<El<SVGFEDisplacementMapElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDisplacementMapElement, M>>): ReactiveTreeNode<El<SVGFEDisplacementMapElement, M>>

export function FeDisplacementMap<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEDisplacementMapElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEDisplacementMapElement, M>>,
  setupOrMode?: Script<El<SVGFEDisplacementMapElement, M>> | Mode,
  setup?: Script<El<SVGFEDisplacementMapElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEDisplacementMapElement, M>>,
  creation?: Script<El<SVGFEDisplacementMapElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEDisplacementMapElement, M>>,
  mounting?: Script<El<SVGFEDisplacementMapElement, M>>,
  destruction?: Script<El<SVGFEDisplacementMapElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDisplacementMapElement, M>>): ReactiveTreeNode<El<SVGFEDisplacementMapElement, M>> {
  //
  return describe(FeDisplacementMap.name, SvgTags.feDisplacementMap,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function FeDistantLight<M = unknown>(
  setup: Script<El<SVGFEDistantLightElement, M>>): ReactiveTreeNode<El<SVGFEDistantLightElement, M>>

export function FeDistantLight<M = unknown>(
  key: string,
  setup: Script<El<SVGFEDistantLightElement, M>>): ReactiveTreeNode<El<SVGFEDistantLightElement, M>>

export function FeDistantLight<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEDistantLightElement, M>>): ReactiveTreeNode<El<SVGFEDistantLightElement, M>>

export function FeDistantLight<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEDistantLightElement, M>>): ReactiveTreeNode<El<SVGFEDistantLightElement, M>>

export function FeDistantLight<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEDistantLightElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEDistantLightElement, M>>,
  creation?: Script<El<SVGFEDistantLightElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEDistantLightElement, M>>,
  mounting?: Script<El<SVGFEDistantLightElement, M>>,
  destruction?: Script<El<SVGFEDistantLightElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDistantLightElement, M>>): ReactiveTreeNode<El<SVGFEDistantLightElement, M>>

export function FeDistantLight<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEDistantLightElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEDistantLightElement, M>>,
  setupOrMode?: Script<El<SVGFEDistantLightElement, M>> | Mode,
  setup?: Script<El<SVGFEDistantLightElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEDistantLightElement, M>>,
  creation?: Script<El<SVGFEDistantLightElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEDistantLightElement, M>>,
  mounting?: Script<El<SVGFEDistantLightElement, M>>,
  destruction?: Script<El<SVGFEDistantLightElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDistantLightElement, M>>): ReactiveTreeNode<El<SVGFEDistantLightElement, M>> {
  //
  return describe(FeDistantLight.name, SvgTags.feDistantLight,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function FeDropShadow<M = unknown>(
  setup: Script<El<SVGFEDropShadowElement, M>>): ReactiveTreeNode<El<SVGFEDropShadowElement, M>>

export function FeDropShadow<M = unknown>(
  key: string,
  setup: Script<El<SVGFEDropShadowElement, M>>): ReactiveTreeNode<El<SVGFEDropShadowElement, M>>

export function FeDropShadow<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEDropShadowElement, M>>): ReactiveTreeNode<El<SVGFEDropShadowElement, M>>

export function FeDropShadow<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEDropShadowElement, M>>): ReactiveTreeNode<El<SVGFEDropShadowElement, M>>

export function FeDropShadow<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEDropShadowElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEDropShadowElement, M>>,
  creation?: Script<El<SVGFEDropShadowElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEDropShadowElement, M>>,
  mounting?: Script<El<SVGFEDropShadowElement, M>>,
  destruction?: Script<El<SVGFEDropShadowElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDropShadowElement, M>>): ReactiveTreeNode<El<SVGFEDropShadowElement, M>>

export function FeDropShadow<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEDropShadowElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEDropShadowElement, M>>,
  setupOrMode?: Script<El<SVGFEDropShadowElement, M>> | Mode,
  setup?: Script<El<SVGFEDropShadowElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEDropShadowElement, M>>,
  creation?: Script<El<SVGFEDropShadowElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEDropShadowElement, M>>,
  mounting?: Script<El<SVGFEDropShadowElement, M>>,
  destruction?: Script<El<SVGFEDropShadowElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDropShadowElement, M>>): ReactiveTreeNode<El<SVGFEDropShadowElement, M>> {
  //
  return describe(FeDropShadow.name, SvgTags.feDropShadow,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function FeFlood<M = unknown>(
  setup: Script<El<SVGFEFloodElement, M>>): ReactiveTreeNode<El<SVGFEFloodElement, M>>

export function FeFlood<M = unknown>(
  key: string,
  setup: Script<El<SVGFEFloodElement, M>>): ReactiveTreeNode<El<SVGFEFloodElement, M>>

export function FeFlood<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEFloodElement, M>>): ReactiveTreeNode<El<SVGFEFloodElement, M>>

export function FeFlood<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEFloodElement, M>>): ReactiveTreeNode<El<SVGFEFloodElement, M>>

export function FeFlood<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEFloodElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEFloodElement, M>>,
  creation?: Script<El<SVGFEFloodElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEFloodElement, M>>,
  mounting?: Script<El<SVGFEFloodElement, M>>,
  destruction?: Script<El<SVGFEFloodElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFloodElement, M>>): ReactiveTreeNode<El<SVGFEFloodElement, M>>

export function FeFlood<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEFloodElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEFloodElement, M>>,
  setupOrMode?: Script<El<SVGFEFloodElement, M>> | Mode,
  setup?: Script<El<SVGFEFloodElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEFloodElement, M>>,
  creation?: Script<El<SVGFEFloodElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEFloodElement, M>>,
  mounting?: Script<El<SVGFEFloodElement, M>>,
  destruction?: Script<El<SVGFEFloodElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFloodElement, M>>): ReactiveTreeNode<El<SVGFEFloodElement, M>> {
  //
  return describe(FeFlood.name, SvgTags.feFlood,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function FeFuncA<M = unknown>(
  setup: Script<El<SVGFEFuncAElement, M>>): ReactiveTreeNode<El<SVGFEFuncAElement, M>>

export function FeFuncA<M = unknown>(
  key: string,
  setup: Script<El<SVGFEFuncAElement, M>>): ReactiveTreeNode<El<SVGFEFuncAElement, M>>

export function FeFuncA<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEFuncAElement, M>>): ReactiveTreeNode<El<SVGFEFuncAElement, M>>

export function FeFuncA<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEFuncAElement, M>>): ReactiveTreeNode<El<SVGFEFuncAElement, M>>

export function FeFuncA<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEFuncAElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEFuncAElement, M>>,
  creation?: Script<El<SVGFEFuncAElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEFuncAElement, M>>,
  mounting?: Script<El<SVGFEFuncAElement, M>>,
  destruction?: Script<El<SVGFEFuncAElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncAElement, M>>): ReactiveTreeNode<El<SVGFEFuncAElement, M>>

export function FeFuncA<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEFuncAElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEFuncAElement, M>>,
  setupOrMode?: Script<El<SVGFEFuncAElement, M>> | Mode,
  setup?: Script<El<SVGFEFuncAElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEFuncAElement, M>>,
  creation?: Script<El<SVGFEFuncAElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEFuncAElement, M>>,
  mounting?: Script<El<SVGFEFuncAElement, M>>,
  destruction?: Script<El<SVGFEFuncAElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncAElement, M>>): ReactiveTreeNode<El<SVGFEFuncAElement, M>> {
  //
  return describe(FeFuncA.name, SvgTags.feFuncA,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function FeFuncB<M = unknown>(
  setup: Script<El<SVGFEFuncBElement, M>>): ReactiveTreeNode<El<SVGFEFuncBElement, M>>

export function FeFuncB<M = unknown>(
  key: string,
  setup: Script<El<SVGFEFuncBElement, M>>): ReactiveTreeNode<El<SVGFEFuncBElement, M>>

export function FeFuncB<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEFuncBElement, M>>): ReactiveTreeNode<El<SVGFEFuncBElement, M>>

export function FeFuncB<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEFuncBElement, M>>): ReactiveTreeNode<El<SVGFEFuncBElement, M>>

export function FeFuncB<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEFuncBElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEFuncBElement, M>>,
  creation?: Script<El<SVGFEFuncBElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEFuncBElement, M>>,
  mounting?: Script<El<SVGFEFuncBElement, M>>,
  destruction?: Script<El<SVGFEFuncBElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncBElement, M>>): ReactiveTreeNode<El<SVGFEFuncBElement, M>>

export function FeFuncB<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEFuncBElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEFuncBElement, M>>,
  setupOrMode?: Script<El<SVGFEFuncBElement, M>> | Mode,
  setup?: Script<El<SVGFEFuncBElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEFuncBElement, M>>,
  creation?: Script<El<SVGFEFuncBElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEFuncBElement, M>>,
  mounting?: Script<El<SVGFEFuncBElement, M>>,
  destruction?: Script<El<SVGFEFuncBElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncBElement, M>>): ReactiveTreeNode<El<SVGFEFuncBElement, M>> {
  //
  return describe(FeFuncB.name, SvgTags.feFuncB,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function FeFuncG<M = unknown>(
  setup: Script<El<SVGFEFuncGElement, M>>): ReactiveTreeNode<El<SVGFEFuncGElement, M>>

export function FeFuncG<M = unknown>(
  key: string,
  setup: Script<El<SVGFEFuncGElement, M>>): ReactiveTreeNode<El<SVGFEFuncGElement, M>>

export function FeFuncG<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEFuncGElement, M>>): ReactiveTreeNode<El<SVGFEFuncGElement, M>>

export function FeFuncG<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEFuncGElement, M>>): ReactiveTreeNode<El<SVGFEFuncGElement, M>>

export function FeFuncG<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEFuncGElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEFuncGElement, M>>,
  creation?: Script<El<SVGFEFuncGElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEFuncGElement, M>>,
  mounting?: Script<El<SVGFEFuncGElement, M>>,
  destruction?: Script<El<SVGFEFuncGElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncGElement, M>>): ReactiveTreeNode<El<SVGFEFuncGElement, M>>

export function FeFuncG<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEFuncGElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEFuncGElement, M>>,
  setupOrMode?: Script<El<SVGFEFuncGElement, M>> | Mode,
  setup?: Script<El<SVGFEFuncGElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEFuncGElement, M>>,
  creation?: Script<El<SVGFEFuncGElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEFuncGElement, M>>,
  mounting?: Script<El<SVGFEFuncGElement, M>>,
  destruction?: Script<El<SVGFEFuncGElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncGElement, M>>): ReactiveTreeNode<El<SVGFEFuncGElement, M>> {
  //
  return describe(FeFuncG.name, SvgTags.feFuncG,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function FeFuncR<M = unknown>(
  setup: Script<El<SVGFEFuncRElement, M>>): ReactiveTreeNode<El<SVGFEFuncRElement, M>>

export function FeFuncR<M = unknown>(
  key: string,
  setup: Script<El<SVGFEFuncRElement, M>>): ReactiveTreeNode<El<SVGFEFuncRElement, M>>

export function FeFuncR<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEFuncRElement, M>>): ReactiveTreeNode<El<SVGFEFuncRElement, M>>

export function FeFuncR<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEFuncRElement, M>>): ReactiveTreeNode<El<SVGFEFuncRElement, M>>

export function FeFuncR<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEFuncRElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEFuncRElement, M>>,
  creation?: Script<El<SVGFEFuncRElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEFuncRElement, M>>,
  mounting?: Script<El<SVGFEFuncRElement, M>>,
  destruction?: Script<El<SVGFEFuncRElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncRElement, M>>): ReactiveTreeNode<El<SVGFEFuncRElement, M>>

export function FeFuncR<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEFuncRElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEFuncRElement, M>>,
  setupOrMode?: Script<El<SVGFEFuncRElement, M>> | Mode,
  setup?: Script<El<SVGFEFuncRElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEFuncRElement, M>>,
  creation?: Script<El<SVGFEFuncRElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEFuncRElement, M>>,
  mounting?: Script<El<SVGFEFuncRElement, M>>,
  destruction?: Script<El<SVGFEFuncRElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncRElement, M>>): ReactiveTreeNode<El<SVGFEFuncRElement, M>> {
  //
  return describe(FeFuncR.name, SvgTags.feFuncR,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function FeGaussianBlur<M = unknown>(
  setup: Script<El<SVGFEGaussianBlurElement, M>>): ReactiveTreeNode<El<SVGFEGaussianBlurElement, M>>

export function FeGaussianBlur<M = unknown>(
  key: string,
  setup: Script<El<SVGFEGaussianBlurElement, M>>): ReactiveTreeNode<El<SVGFEGaussianBlurElement, M>>

export function FeGaussianBlur<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEGaussianBlurElement, M>>): ReactiveTreeNode<El<SVGFEGaussianBlurElement, M>>

export function FeGaussianBlur<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEGaussianBlurElement, M>>): ReactiveTreeNode<El<SVGFEGaussianBlurElement, M>>

export function FeGaussianBlur<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEGaussianBlurElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEGaussianBlurElement, M>>,
  creation?: Script<El<SVGFEGaussianBlurElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEGaussianBlurElement, M>>,
  mounting?: Script<El<SVGFEGaussianBlurElement, M>>,
  destruction?: Script<El<SVGFEGaussianBlurElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEGaussianBlurElement, M>>): ReactiveTreeNode<El<SVGFEGaussianBlurElement, M>>

export function FeGaussianBlur<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEGaussianBlurElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEGaussianBlurElement, M>>,
  setupOrMode?: Script<El<SVGFEGaussianBlurElement, M>> | Mode,
  setup?: Script<El<SVGFEGaussianBlurElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEGaussianBlurElement, M>>,
  creation?: Script<El<SVGFEGaussianBlurElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEGaussianBlurElement, M>>,
  mounting?: Script<El<SVGFEGaussianBlurElement, M>>,
  destruction?: Script<El<SVGFEGaussianBlurElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEGaussianBlurElement, M>>): ReactiveTreeNode<El<SVGFEGaussianBlurElement, M>> {
  //
  return describe(FeGaussianBlur.name, SvgTags.feGaussianBlur,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function FeImage<M = unknown>(
  setup: Script<El<SVGFEImageElement, M>>): ReactiveTreeNode<El<SVGFEImageElement, M>>

export function FeImage<M = unknown>(
  key: string,
  setup: Script<El<SVGFEImageElement, M>>): ReactiveTreeNode<El<SVGFEImageElement, M>>

export function FeImage<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEImageElement, M>>): ReactiveTreeNode<El<SVGFEImageElement, M>>

export function FeImage<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEImageElement, M>>): ReactiveTreeNode<El<SVGFEImageElement, M>>

export function FeImage<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEImageElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEImageElement, M>>,
  creation?: Script<El<SVGFEImageElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEImageElement, M>>,
  mounting?: Script<El<SVGFEImageElement, M>>,
  destruction?: Script<El<SVGFEImageElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEImageElement, M>>): ReactiveTreeNode<El<SVGFEImageElement, M>>

export function FeImage<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEImageElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEImageElement, M>>,
  setupOrMode?: Script<El<SVGFEImageElement, M>> | Mode,
  setup?: Script<El<SVGFEImageElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEImageElement, M>>,
  creation?: Script<El<SVGFEImageElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEImageElement, M>>,
  mounting?: Script<El<SVGFEImageElement, M>>,
  destruction?: Script<El<SVGFEImageElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEImageElement, M>>): ReactiveTreeNode<El<SVGFEImageElement, M>> {
  //
  return describe(FeImage.name, SvgTags.feImage,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function FeMerge<M = unknown>(
  setup: Script<El<SVGFEMergeElement, M>>): ReactiveTreeNode<El<SVGFEMergeElement, M>>

export function FeMerge<M = unknown>(
  key: string,
  setup: Script<El<SVGFEMergeElement, M>>): ReactiveTreeNode<El<SVGFEMergeElement, M>>

export function FeMerge<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEMergeElement, M>>): ReactiveTreeNode<El<SVGFEMergeElement, M>>

export function FeMerge<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEMergeElement, M>>): ReactiveTreeNode<El<SVGFEMergeElement, M>>

export function FeMerge<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEMergeElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEMergeElement, M>>,
  creation?: Script<El<SVGFEMergeElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEMergeElement, M>>,
  mounting?: Script<El<SVGFEMergeElement, M>>,
  destruction?: Script<El<SVGFEMergeElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEMergeElement, M>>): ReactiveTreeNode<El<SVGFEMergeElement, M>>

export function FeMerge<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEMergeElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEMergeElement, M>>,
  setupOrMode?: Script<El<SVGFEMergeElement, M>> | Mode,
  setup?: Script<El<SVGFEMergeElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEMergeElement, M>>,
  creation?: Script<El<SVGFEMergeElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEMergeElement, M>>,
  mounting?: Script<El<SVGFEMergeElement, M>>,
  destruction?: Script<El<SVGFEMergeElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEMergeElement, M>>): ReactiveTreeNode<El<SVGFEMergeElement, M>> {
  //
  return describe(FeMerge.name, SvgTags.feMerge,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function FeMergeNode<M = unknown>(
  setup: Script<El<SVGFEMergeNodeElement, M>>): ReactiveTreeNode<El<SVGFEMergeNodeElement, M>>

export function FeMergeNode<M = unknown>(
  key: string,
  setup: Script<El<SVGFEMergeNodeElement, M>>): ReactiveTreeNode<El<SVGFEMergeNodeElement, M>>

export function FeMergeNode<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEMergeNodeElement, M>>): ReactiveTreeNode<El<SVGFEMergeNodeElement, M>>

export function FeMergeNode<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEMergeNodeElement, M>>): ReactiveTreeNode<El<SVGFEMergeNodeElement, M>>

export function FeMergeNode<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEMergeNodeElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEMergeNodeElement, M>>,
  creation?: Script<El<SVGFEMergeNodeElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEMergeNodeElement, M>>,
  mounting?: Script<El<SVGFEMergeNodeElement, M>>,
  destruction?: Script<El<SVGFEMergeNodeElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEMergeNodeElement, M>>): ReactiveTreeNode<El<SVGFEMergeNodeElement, M>>

export function FeMergeNode<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEMergeNodeElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEMergeNodeElement, M>>,
  setupOrMode?: Script<El<SVGFEMergeNodeElement, M>> | Mode,
  setup?: Script<El<SVGFEMergeNodeElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEMergeNodeElement, M>>,
  creation?: Script<El<SVGFEMergeNodeElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEMergeNodeElement, M>>,
  mounting?: Script<El<SVGFEMergeNodeElement, M>>,
  destruction?: Script<El<SVGFEMergeNodeElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEMergeNodeElement, M>>): ReactiveTreeNode<El<SVGFEMergeNodeElement, M>> {
  //
  return describe(FeMergeNode.name, SvgTags.feMergeNode,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function FeMorphology<M = unknown>(
  setup: Script<El<SVGFEMorphologyElement, M>>): ReactiveTreeNode<El<SVGFEMorphologyElement, M>>

export function FeMorphology<M = unknown>(
  key: string,
  setup: Script<El<SVGFEMorphologyElement, M>>): ReactiveTreeNode<El<SVGFEMorphologyElement, M>>

export function FeMorphology<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEMorphologyElement, M>>): ReactiveTreeNode<El<SVGFEMorphologyElement, M>>

export function FeMorphology<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEMorphologyElement, M>>): ReactiveTreeNode<El<SVGFEMorphologyElement, M>>

export function FeMorphology<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEMorphologyElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEMorphologyElement, M>>,
  creation?: Script<El<SVGFEMorphologyElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEMorphologyElement, M>>,
  mounting?: Script<El<SVGFEMorphologyElement, M>>,
  destruction?: Script<El<SVGFEMorphologyElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEMorphologyElement, M>>): ReactiveTreeNode<El<SVGFEMorphologyElement, M>>

export function FeMorphology<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEMorphologyElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEMorphologyElement, M>>,
  setupOrMode?: Script<El<SVGFEMorphologyElement, M>> | Mode,
  setup?: Script<El<SVGFEMorphologyElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEMorphologyElement, M>>,
  creation?: Script<El<SVGFEMorphologyElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEMorphologyElement, M>>,
  mounting?: Script<El<SVGFEMorphologyElement, M>>,
  destruction?: Script<El<SVGFEMorphologyElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEMorphologyElement, M>>): ReactiveTreeNode<El<SVGFEMorphologyElement, M>> {
  //
  return describe(FeMorphology.name, SvgTags.feMorphology,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function FeOffset<M = unknown>(
  setup: Script<El<SVGFEOffsetElement, M>>): ReactiveTreeNode<El<SVGFEOffsetElement, M>>

export function FeOffset<M = unknown>(
  key: string,
  setup: Script<El<SVGFEOffsetElement, M>>): ReactiveTreeNode<El<SVGFEOffsetElement, M>>

export function FeOffset<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEOffsetElement, M>>): ReactiveTreeNode<El<SVGFEOffsetElement, M>>

export function FeOffset<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEOffsetElement, M>>): ReactiveTreeNode<El<SVGFEOffsetElement, M>>

export function FeOffset<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEOffsetElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEOffsetElement, M>>,
  creation?: Script<El<SVGFEOffsetElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEOffsetElement, M>>,
  mounting?: Script<El<SVGFEOffsetElement, M>>,
  destruction?: Script<El<SVGFEOffsetElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEOffsetElement, M>>): ReactiveTreeNode<El<SVGFEOffsetElement, M>>

export function FeOffset<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEOffsetElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEOffsetElement, M>>,
  setupOrMode?: Script<El<SVGFEOffsetElement, M>> | Mode,
  setup?: Script<El<SVGFEOffsetElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEOffsetElement, M>>,
  creation?: Script<El<SVGFEOffsetElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEOffsetElement, M>>,
  mounting?: Script<El<SVGFEOffsetElement, M>>,
  destruction?: Script<El<SVGFEOffsetElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEOffsetElement, M>>): ReactiveTreeNode<El<SVGFEOffsetElement, M>> {
  //
  return describe(FeOffset.name, SvgTags.feOffset,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function FePointLight<M = unknown>(
  setup: Script<El<SVGFEPointLightElement, M>>): ReactiveTreeNode<El<SVGFEPointLightElement, M>>

export function FePointLight<M = unknown>(
  key: string,
  setup: Script<El<SVGFEPointLightElement, M>>): ReactiveTreeNode<El<SVGFEPointLightElement, M>>

export function FePointLight<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEPointLightElement, M>>): ReactiveTreeNode<El<SVGFEPointLightElement, M>>

export function FePointLight<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEPointLightElement, M>>): ReactiveTreeNode<El<SVGFEPointLightElement, M>>

export function FePointLight<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEPointLightElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEPointLightElement, M>>,
  creation?: Script<El<SVGFEPointLightElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEPointLightElement, M>>,
  mounting?: Script<El<SVGFEPointLightElement, M>>,
  destruction?: Script<El<SVGFEPointLightElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEPointLightElement, M>>): ReactiveTreeNode<El<SVGFEPointLightElement, M>>

export function FePointLight<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEPointLightElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEPointLightElement, M>>,
  setupOrMode?: Script<El<SVGFEPointLightElement, M>> | Mode,
  setup?: Script<El<SVGFEPointLightElement, M>>,
  setupTask?: ScriptAsync<El<SVGFEPointLightElement, M>>,
  creation?: Script<El<SVGFEPointLightElement, M>>,
  creationTask?: ScriptAsync<El<SVGFEPointLightElement, M>>,
  mounting?: Script<El<SVGFEPointLightElement, M>>,
  destruction?: Script<El<SVGFEPointLightElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEPointLightElement, M>>): ReactiveTreeNode<El<SVGFEPointLightElement, M>> {
  //
  return describe(FePointLight.name, SvgTags.fePointLight,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function FeSpecularLighting<M = unknown>(
  setup: Script<El<SVGFESpecularLightingElement, M>>): ReactiveTreeNode<El<SVGFESpecularLightingElement, M>>

export function FeSpecularLighting<M = unknown>(
  key: string,
  setup: Script<El<SVGFESpecularLightingElement, M>>): ReactiveTreeNode<El<SVGFESpecularLightingElement, M>>

export function FeSpecularLighting<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGFESpecularLightingElement, M>>): ReactiveTreeNode<El<SVGFESpecularLightingElement, M>>

export function FeSpecularLighting<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFESpecularLightingElement, M>>): ReactiveTreeNode<El<SVGFESpecularLightingElement, M>>

export function FeSpecularLighting<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFESpecularLightingElement, M>>,
  setupTask?: ScriptAsync<El<SVGFESpecularLightingElement, M>>,
  creation?: Script<El<SVGFESpecularLightingElement, M>>,
  creationTask?: ScriptAsync<El<SVGFESpecularLightingElement, M>>,
  mounting?: Script<El<SVGFESpecularLightingElement, M>>,
  destruction?: Script<El<SVGFESpecularLightingElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFESpecularLightingElement, M>>): ReactiveTreeNode<El<SVGFESpecularLightingElement, M>>

export function FeSpecularLighting<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFESpecularLightingElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFESpecularLightingElement, M>>,
  setupOrMode?: Script<El<SVGFESpecularLightingElement, M>> | Mode,
  setup?: Script<El<SVGFESpecularLightingElement, M>>,
  setupTask?: ScriptAsync<El<SVGFESpecularLightingElement, M>>,
  creation?: Script<El<SVGFESpecularLightingElement, M>>,
  creationTask?: ScriptAsync<El<SVGFESpecularLightingElement, M>>,
  mounting?: Script<El<SVGFESpecularLightingElement, M>>,
  destruction?: Script<El<SVGFESpecularLightingElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFESpecularLightingElement, M>>): ReactiveTreeNode<El<SVGFESpecularLightingElement, M>> {
  //
  return describe(FeSpecularLighting.name, SvgTags.feSpecularLighting,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function FeSpotLight<M = unknown>(
  setup: Script<El<SVGFESpotLightElement, M>>): ReactiveTreeNode<El<SVGFESpotLightElement, M>>

export function FeSpotLight<M = unknown>(
  key: string,
  setup: Script<El<SVGFESpotLightElement, M>>): ReactiveTreeNode<El<SVGFESpotLightElement, M>>

export function FeSpotLight<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGFESpotLightElement, M>>): ReactiveTreeNode<El<SVGFESpotLightElement, M>>

export function FeSpotLight<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFESpotLightElement, M>>): ReactiveTreeNode<El<SVGFESpotLightElement, M>>

export function FeSpotLight<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFESpotLightElement, M>>,
  setupTask?: ScriptAsync<El<SVGFESpotLightElement, M>>,
  creation?: Script<El<SVGFESpotLightElement, M>>,
  creationTask?: ScriptAsync<El<SVGFESpotLightElement, M>>,
  mounting?: Script<El<SVGFESpotLightElement, M>>,
  destruction?: Script<El<SVGFESpotLightElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFESpotLightElement, M>>): ReactiveTreeNode<El<SVGFESpotLightElement, M>>

export function FeSpotLight<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFESpotLightElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFESpotLightElement, M>>,
  setupOrMode?: Script<El<SVGFESpotLightElement, M>> | Mode,
  setup?: Script<El<SVGFESpotLightElement, M>>,
  setupTask?: ScriptAsync<El<SVGFESpotLightElement, M>>,
  creation?: Script<El<SVGFESpotLightElement, M>>,
  creationTask?: ScriptAsync<El<SVGFESpotLightElement, M>>,
  mounting?: Script<El<SVGFESpotLightElement, M>>,
  destruction?: Script<El<SVGFESpotLightElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFESpotLightElement, M>>): ReactiveTreeNode<El<SVGFESpotLightElement, M>> {
  //
  return describe(FeSpotLight.name, SvgTags.feSpotLight,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function FeTile<M = unknown>(
  setup: Script<El<SVGFETileElement, M>>): ReactiveTreeNode<El<SVGFETileElement, M>>

export function FeTile<M = unknown>(
  key: string,
  setup: Script<El<SVGFETileElement, M>>): ReactiveTreeNode<El<SVGFETileElement, M>>

export function FeTile<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGFETileElement, M>>): ReactiveTreeNode<El<SVGFETileElement, M>>

export function FeTile<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFETileElement, M>>): ReactiveTreeNode<El<SVGFETileElement, M>>

export function FeTile<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFETileElement, M>>,
  setupTask?: ScriptAsync<El<SVGFETileElement, M>>,
  creation?: Script<El<SVGFETileElement, M>>,
  creationTask?: ScriptAsync<El<SVGFETileElement, M>>,
  mounting?: Script<El<SVGFETileElement, M>>,
  destruction?: Script<El<SVGFETileElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFETileElement, M>>): ReactiveTreeNode<El<SVGFETileElement, M>>

export function FeTile<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFETileElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFETileElement, M>>,
  setupOrMode?: Script<El<SVGFETileElement, M>> | Mode,
  setup?: Script<El<SVGFETileElement, M>>,
  setupTask?: ScriptAsync<El<SVGFETileElement, M>>,
  creation?: Script<El<SVGFETileElement, M>>,
  creationTask?: ScriptAsync<El<SVGFETileElement, M>>,
  mounting?: Script<El<SVGFETileElement, M>>,
  destruction?: Script<El<SVGFETileElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFETileElement, M>>): ReactiveTreeNode<El<SVGFETileElement, M>> {
  //
  return describe(FeTile.name, SvgTags.feTile,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function FeTurbulence<M = unknown>(
  setup: Script<El<SVGFETurbulenceElement, M>>): ReactiveTreeNode<El<SVGFETurbulenceElement, M>>

export function FeTurbulence<M = unknown>(
  key: string,
  setup: Script<El<SVGFETurbulenceElement, M>>): ReactiveTreeNode<El<SVGFETurbulenceElement, M>>

export function FeTurbulence<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGFETurbulenceElement, M>>): ReactiveTreeNode<El<SVGFETurbulenceElement, M>>

export function FeTurbulence<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFETurbulenceElement, M>>): ReactiveTreeNode<El<SVGFETurbulenceElement, M>>

export function FeTurbulence<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFETurbulenceElement, M>>,
  setupTask?: ScriptAsync<El<SVGFETurbulenceElement, M>>,
  creation?: Script<El<SVGFETurbulenceElement, M>>,
  creationTask?: ScriptAsync<El<SVGFETurbulenceElement, M>>,
  mounting?: Script<El<SVGFETurbulenceElement, M>>,
  destruction?: Script<El<SVGFETurbulenceElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFETurbulenceElement, M>>): ReactiveTreeNode<El<SVGFETurbulenceElement, M>>

export function FeTurbulence<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFETurbulenceElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFETurbulenceElement, M>>,
  setupOrMode?: Script<El<SVGFETurbulenceElement, M>> | Mode,
  setup?: Script<El<SVGFETurbulenceElement, M>>,
  setupTask?: ScriptAsync<El<SVGFETurbulenceElement, M>>,
  creation?: Script<El<SVGFETurbulenceElement, M>>,
  creationTask?: ScriptAsync<El<SVGFETurbulenceElement, M>>,
  mounting?: Script<El<SVGFETurbulenceElement, M>>,
  destruction?: Script<El<SVGFETurbulenceElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFETurbulenceElement, M>>): ReactiveTreeNode<El<SVGFETurbulenceElement, M>> {
  //
  return describe(FeTurbulence.name, SvgTags.feTurbulence,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Filter<M = unknown>(
  setup: Script<El<SVGFilterElement, M>>): ReactiveTreeNode<El<SVGFilterElement, M>>

export function Filter<M = unknown>(
  key: string,
  setup: Script<El<SVGFilterElement, M>>): ReactiveTreeNode<El<SVGFilterElement, M>>

export function Filter<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGFilterElement, M>>): ReactiveTreeNode<El<SVGFilterElement, M>>

export function Filter<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFilterElement, M>>): ReactiveTreeNode<El<SVGFilterElement, M>>

export function Filter<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFilterElement, M>>,
  setupTask?: ScriptAsync<El<SVGFilterElement, M>>,
  creation?: Script<El<SVGFilterElement, M>>,
  creationTask?: ScriptAsync<El<SVGFilterElement, M>>,
  mounting?: Script<El<SVGFilterElement, M>>,
  destruction?: Script<El<SVGFilterElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFilterElement, M>>): ReactiveTreeNode<El<SVGFilterElement, M>>

export function Filter<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFilterElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFilterElement, M>>,
  setupOrMode?: Script<El<SVGFilterElement, M>> | Mode,
  setup?: Script<El<SVGFilterElement, M>>,
  setupTask?: ScriptAsync<El<SVGFilterElement, M>>,
  creation?: Script<El<SVGFilterElement, M>>,
  creationTask?: ScriptAsync<El<SVGFilterElement, M>>,
  mounting?: Script<El<SVGFilterElement, M>>,
  destruction?: Script<El<SVGFilterElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFilterElement, M>>): ReactiveTreeNode<El<SVGFilterElement, M>> {
  //
  return describe(Filter.name, SvgTags.filter,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function ForeignObject<M = unknown>(
  setup: Script<El<SVGForeignObjectElement, M>>): ReactiveTreeNode<El<SVGForeignObjectElement, M>>

export function ForeignObject<M = unknown>(
  key: string,
  setup: Script<El<SVGForeignObjectElement, M>>): ReactiveTreeNode<El<SVGForeignObjectElement, M>>

export function ForeignObject<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGForeignObjectElement, M>>): ReactiveTreeNode<El<SVGForeignObjectElement, M>>

export function ForeignObject<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGForeignObjectElement, M>>): ReactiveTreeNode<El<SVGForeignObjectElement, M>>

export function ForeignObject<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGForeignObjectElement, M>>,
  setupTask?: ScriptAsync<El<SVGForeignObjectElement, M>>,
  creation?: Script<El<SVGForeignObjectElement, M>>,
  creationTask?: ScriptAsync<El<SVGForeignObjectElement, M>>,
  mounting?: Script<El<SVGForeignObjectElement, M>>,
  destruction?: Script<El<SVGForeignObjectElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGForeignObjectElement, M>>): ReactiveTreeNode<El<SVGForeignObjectElement, M>>

export function ForeignObject<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGForeignObjectElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGForeignObjectElement, M>>,
  setupOrMode?: Script<El<SVGForeignObjectElement, M>> | Mode,
  setup?: Script<El<SVGForeignObjectElement, M>>,
  setupTask?: ScriptAsync<El<SVGForeignObjectElement, M>>,
  creation?: Script<El<SVGForeignObjectElement, M>>,
  creationTask?: ScriptAsync<El<SVGForeignObjectElement, M>>,
  mounting?: Script<El<SVGForeignObjectElement, M>>,
  destruction?: Script<El<SVGForeignObjectElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGForeignObjectElement, M>>): ReactiveTreeNode<El<SVGForeignObjectElement, M>> {
  //
  return describe(ForeignObject.name, SvgTags.foreignObject,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function G<M = unknown>(
  setup: Script<El<SVGGElement, M>>): ReactiveTreeNode<El<SVGGElement, M>>

export function G<M = unknown>(
  key: string,
  setup: Script<El<SVGGElement, M>>): ReactiveTreeNode<El<SVGGElement, M>>

export function G<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGGElement, M>>): ReactiveTreeNode<El<SVGGElement, M>>

export function G<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGGElement, M>>): ReactiveTreeNode<El<SVGGElement, M>>

export function G<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGGElement, M>>,
  setupTask?: ScriptAsync<El<SVGGElement, M>>,
  creation?: Script<El<SVGGElement, M>>,
  creationTask?: ScriptAsync<El<SVGGElement, M>>,
  mounting?: Script<El<SVGGElement, M>>,
  destruction?: Script<El<SVGGElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGGElement, M>>): ReactiveTreeNode<El<SVGGElement, M>>

export function G<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGGElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGGElement, M>>,
  setupOrMode?: Script<El<SVGGElement, M>> | Mode,
  setup?: Script<El<SVGGElement, M>>,
  setupTask?: ScriptAsync<El<SVGGElement, M>>,
  creation?: Script<El<SVGGElement, M>>,
  creationTask?: ScriptAsync<El<SVGGElement, M>>,
  mounting?: Script<El<SVGGElement, M>>,
  destruction?: Script<El<SVGGElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGGElement, M>>): ReactiveTreeNode<El<SVGGElement, M>> {
  //
  return describe(G.name, SvgTags.g,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function SvgImage<M = unknown>(
  setup: Script<El<SVGImageElement, M>>): ReactiveTreeNode<El<SVGImageElement, M>>

export function SvgImage<M = unknown>(
  key: string,
  setup: Script<El<SVGImageElement, M>>): ReactiveTreeNode<El<SVGImageElement, M>>

export function SvgImage<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGImageElement, M>>): ReactiveTreeNode<El<SVGImageElement, M>>

export function SvgImage<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGImageElement, M>>): ReactiveTreeNode<El<SVGImageElement, M>>

export function SvgImage<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGImageElement, M>>,
  setupTask?: ScriptAsync<El<SVGImageElement, M>>,
  creation?: Script<El<SVGImageElement, M>>,
  creationTask?: ScriptAsync<El<SVGImageElement, M>>,
  mounting?: Script<El<SVGImageElement, M>>,
  destruction?: Script<El<SVGImageElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGImageElement, M>>): ReactiveTreeNode<El<SVGImageElement, M>>

export function SvgImage<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGImageElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGImageElement, M>>,
  setupOrMode?: Script<El<SVGImageElement, M>> | Mode,
  setup?: Script<El<SVGImageElement, M>>,
  setupTask?: ScriptAsync<El<SVGImageElement, M>>,
  creation?: Script<El<SVGImageElement, M>>,
  creationTask?: ScriptAsync<El<SVGImageElement, M>>,
  mounting?: Script<El<SVGImageElement, M>>,
  destruction?: Script<El<SVGImageElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGImageElement, M>>): ReactiveTreeNode<El<SVGImageElement, M>> {
  //
  return describe(SvgImage.name, SvgTags.image,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function SvgLine<M = unknown>(
  setup: Script<El<SVGLineElement, M>>): ReactiveTreeNode<El<SVGLineElement, M>>

export function SvgLine<M = unknown>(
  key: string,
  setup: Script<El<SVGLineElement, M>>): ReactiveTreeNode<El<SVGLineElement, M>>

export function SvgLine<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGLineElement, M>>): ReactiveTreeNode<El<SVGLineElement, M>>

export function SvgLine<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGLineElement, M>>): ReactiveTreeNode<El<SVGLineElement, M>>

export function SvgLine<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGLineElement, M>>,
  setupTask?: ScriptAsync<El<SVGLineElement, M>>,
  creation?: Script<El<SVGLineElement, M>>,
  creationTask?: ScriptAsync<El<SVGLineElement, M>>,
  mounting?: Script<El<SVGLineElement, M>>,
  destruction?: Script<El<SVGLineElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGLineElement, M>>): ReactiveTreeNode<El<SVGLineElement, M>>

export function SvgLine<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGLineElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGLineElement, M>>,
  setupOrMode?: Script<El<SVGLineElement, M>> | Mode,
  setup?: Script<El<SVGLineElement, M>>,
  setupTask?: ScriptAsync<El<SVGLineElement, M>>,
  creation?: Script<El<SVGLineElement, M>>,
  creationTask?: ScriptAsync<El<SVGLineElement, M>>,
  mounting?: Script<El<SVGLineElement, M>>,
  destruction?: Script<El<SVGLineElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGLineElement, M>>): ReactiveTreeNode<El<SVGLineElement, M>> {
  //
  return describe(SvgLine.name, SvgTags.line,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function LinearGradient<M = unknown>(
  setup: Script<El<SVGLinearGradientElement, M>>): ReactiveTreeNode<El<SVGLinearGradientElement, M>>

export function LinearGradient<M = unknown>(
  key: string,
  setup: Script<El<SVGLinearGradientElement, M>>): ReactiveTreeNode<El<SVGLinearGradientElement, M>>

export function LinearGradient<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGLinearGradientElement, M>>): ReactiveTreeNode<El<SVGLinearGradientElement, M>>

export function LinearGradient<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGLinearGradientElement, M>>): ReactiveTreeNode<El<SVGLinearGradientElement, M>>

export function LinearGradient<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGLinearGradientElement, M>>,
  setupTask?: ScriptAsync<El<SVGLinearGradientElement, M>>,
  creation?: Script<El<SVGLinearGradientElement, M>>,
  creationTask?: ScriptAsync<El<SVGLinearGradientElement, M>>,
  mounting?: Script<El<SVGLinearGradientElement, M>>,
  destruction?: Script<El<SVGLinearGradientElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGLinearGradientElement, M>>): ReactiveTreeNode<El<SVGLinearGradientElement, M>>

export function LinearGradient<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGLinearGradientElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGLinearGradientElement, M>>,
  setupOrMode?: Script<El<SVGLinearGradientElement, M>> | Mode,
  setup?: Script<El<SVGLinearGradientElement, M>>,
  setupTask?: ScriptAsync<El<SVGLinearGradientElement, M>>,
  creation?: Script<El<SVGLinearGradientElement, M>>,
  creationTask?: ScriptAsync<El<SVGLinearGradientElement, M>>,
  mounting?: Script<El<SVGLinearGradientElement, M>>,
  destruction?: Script<El<SVGLinearGradientElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGLinearGradientElement, M>>): ReactiveTreeNode<El<SVGLinearGradientElement, M>> {
  //
  return describe(LinearGradient.name, SvgTags.linearGradient,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Marker<M = unknown>(
  setup: Script<El<SVGMarkerElement, M>>): ReactiveTreeNode<El<SVGMarkerElement, M>>

export function Marker<M = unknown>(
  key: string,
  setup: Script<El<SVGMarkerElement, M>>): ReactiveTreeNode<El<SVGMarkerElement, M>>

export function Marker<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGMarkerElement, M>>): ReactiveTreeNode<El<SVGMarkerElement, M>>

export function Marker<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGMarkerElement, M>>): ReactiveTreeNode<El<SVGMarkerElement, M>>

export function Marker<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGMarkerElement, M>>,
  setupTask?: ScriptAsync<El<SVGMarkerElement, M>>,
  creation?: Script<El<SVGMarkerElement, M>>,
  creationTask?: ScriptAsync<El<SVGMarkerElement, M>>,
  mounting?: Script<El<SVGMarkerElement, M>>,
  destruction?: Script<El<SVGMarkerElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGMarkerElement, M>>): ReactiveTreeNode<El<SVGMarkerElement, M>>

export function Marker<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGMarkerElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGMarkerElement, M>>,
  setupOrMode?: Script<El<SVGMarkerElement, M>> | Mode,
  setup?: Script<El<SVGMarkerElement, M>>,
  setupTask?: ScriptAsync<El<SVGMarkerElement, M>>,
  creation?: Script<El<SVGMarkerElement, M>>,
  creationTask?: ScriptAsync<El<SVGMarkerElement, M>>,
  mounting?: Script<El<SVGMarkerElement, M>>,
  destruction?: Script<El<SVGMarkerElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGMarkerElement, M>>): ReactiveTreeNode<El<SVGMarkerElement, M>> {
  //
  return describe(Marker.name, SvgTags.marker,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Mask<M = unknown>(
  setup: Script<El<SVGMaskElement, M>>): ReactiveTreeNode<El<SVGMaskElement, M>>

export function Mask<M = unknown>(
  key: string,
  setup: Script<El<SVGMaskElement, M>>): ReactiveTreeNode<El<SVGMaskElement, M>>

export function Mask<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGMaskElement, M>>): ReactiveTreeNode<El<SVGMaskElement, M>>

export function Mask<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGMaskElement, M>>): ReactiveTreeNode<El<SVGMaskElement, M>>

export function Mask<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGMaskElement, M>>,
  setupTask?: ScriptAsync<El<SVGMaskElement, M>>,
  creation?: Script<El<SVGMaskElement, M>>,
  creationTask?: ScriptAsync<El<SVGMaskElement, M>>,
  mounting?: Script<El<SVGMaskElement, M>>,
  destruction?: Script<El<SVGMaskElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGMaskElement, M>>): ReactiveTreeNode<El<SVGMaskElement, M>>

export function Mask<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGMaskElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGMaskElement, M>>,
  setupOrMode?: Script<El<SVGMaskElement, M>> | Mode,
  setup?: Script<El<SVGMaskElement, M>>,
  setupTask?: ScriptAsync<El<SVGMaskElement, M>>,
  creation?: Script<El<SVGMaskElement, M>>,
  creationTask?: ScriptAsync<El<SVGMaskElement, M>>,
  mounting?: Script<El<SVGMaskElement, M>>,
  destruction?: Script<El<SVGMaskElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGMaskElement, M>>): ReactiveTreeNode<El<SVGMaskElement, M>> {
  //
  return describe(Mask.name, SvgTags.mask,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function MetaData<M = unknown>(
  setup: Script<El<SVGMetadataElement, M>>): ReactiveTreeNode<El<SVGMetadataElement, M>>

export function MetaData<M = unknown>(
  key: string,
  setup: Script<El<SVGMetadataElement, M>>): ReactiveTreeNode<El<SVGMetadataElement, M>>

export function MetaData<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGMetadataElement, M>>): ReactiveTreeNode<El<SVGMetadataElement, M>>

export function MetaData<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGMetadataElement, M>>): ReactiveTreeNode<El<SVGMetadataElement, M>>

export function MetaData<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGMetadataElement, M>>,
  setupTask?: ScriptAsync<El<SVGMetadataElement, M>>,
  creation?: Script<El<SVGMetadataElement, M>>,
  creationTask?: ScriptAsync<El<SVGMetadataElement, M>>,
  mounting?: Script<El<SVGMetadataElement, M>>,
  destruction?: Script<El<SVGMetadataElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGMetadataElement, M>>): ReactiveTreeNode<El<SVGMetadataElement, M>>

export function MetaData<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGMetadataElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGMetadataElement, M>>,
  setupOrMode?: Script<El<SVGMetadataElement, M>> | Mode,
  setup?: Script<El<SVGMetadataElement, M>>,
  setupTask?: ScriptAsync<El<SVGMetadataElement, M>>,
  creation?: Script<El<SVGMetadataElement, M>>,
  creationTask?: ScriptAsync<El<SVGMetadataElement, M>>,
  mounting?: Script<El<SVGMetadataElement, M>>,
  destruction?: Script<El<SVGMetadataElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGMetadataElement, M>>): ReactiveTreeNode<El<SVGMetadataElement, M>> {
  //
  return describe(MetaData.name, SvgTags.metadata,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function MPath<M = unknown>(
  setup: Script<El<SVGElement, M>>): ReactiveTreeNode<El<SVGElement, M>>

export function MPath<M = unknown>(
  key: string,
  setup: Script<El<SVGElement, M>>): ReactiveTreeNode<El<SVGElement, M>>

export function MPath<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGElement, M>>): ReactiveTreeNode<El<SVGElement, M>>

export function MPath<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGElement, M>>): ReactiveTreeNode<El<SVGElement, M>>

export function MPath<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGElement, M>>,
  setupTask?: ScriptAsync<El<SVGElement, M>>,
  creation?: Script<El<SVGElement, M>>,
  creationTask?: ScriptAsync<El<SVGElement, M>>,
  mounting?: Script<El<SVGElement, M>>,
  destruction?: Script<El<SVGElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGElement, M>>): ReactiveTreeNode<El<SVGElement, M>>

export function MPath<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGElement, M>>,
  setupOrMode?: Script<El<SVGElement, M>> | Mode,
  setup?: Script<El<SVGElement, M>>,
  setupTask?: ScriptAsync<El<SVGElement, M>>,
  creation?: Script<El<SVGElement, M>>,
  creationTask?: ScriptAsync<El<SVGElement, M>>,
  mounting?: Script<El<SVGElement, M>>,
  destruction?: Script<El<SVGElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGElement, M>>): ReactiveTreeNode<El<SVGElement, M>> {
  //
  return describe(MPath.name, SvgTags.mpath,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Path<M = unknown>(
  setup: Script<El<SVGPathElement, M>>): ReactiveTreeNode<El<SVGPathElement, M>>

export function Path<M = unknown>(
  key: string,
  setup: Script<El<SVGPathElement, M>>): ReactiveTreeNode<El<SVGPathElement, M>>

export function Path<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGPathElement, M>>): ReactiveTreeNode<El<SVGPathElement, M>>

export function Path<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGPathElement, M>>): ReactiveTreeNode<El<SVGPathElement, M>>

export function Path<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGPathElement, M>>,
  setupTask?: ScriptAsync<El<SVGPathElement, M>>,
  creation?: Script<El<SVGPathElement, M>>,
  creationTask?: ScriptAsync<El<SVGPathElement, M>>,
  mounting?: Script<El<SVGPathElement, M>>,
  destruction?: Script<El<SVGPathElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGPathElement, M>>): ReactiveTreeNode<El<SVGPathElement, M>>

export function Path<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGPathElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGPathElement, M>>,
  setupOrMode?: Script<El<SVGPathElement, M>> | Mode,
  setup?: Script<El<SVGPathElement, M>>,
  setupTask?: ScriptAsync<El<SVGPathElement, M>>,
  creation?: Script<El<SVGPathElement, M>>,
  creationTask?: ScriptAsync<El<SVGPathElement, M>>,
  mounting?: Script<El<SVGPathElement, M>>,
  destruction?: Script<El<SVGPathElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGPathElement, M>>): ReactiveTreeNode<El<SVGPathElement, M>> {
  //
  return describe(Path.name, SvgTags.path,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Pattern<M = unknown>(
  setup: Script<El<SVGPatternElement, M>>): ReactiveTreeNode<El<SVGPatternElement, M>>

export function Pattern<M = unknown>(
  key: string,
  setup: Script<El<SVGPatternElement, M>>): ReactiveTreeNode<El<SVGPatternElement, M>>

export function Pattern<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGPatternElement, M>>): ReactiveTreeNode<El<SVGPatternElement, M>>

export function Pattern<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGPatternElement, M>>): ReactiveTreeNode<El<SVGPatternElement, M>>

export function Pattern<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGPatternElement, M>>,
  setupTask?: ScriptAsync<El<SVGPatternElement, M>>,
  creation?: Script<El<SVGPatternElement, M>>,
  creationTask?: ScriptAsync<El<SVGPatternElement, M>>,
  mounting?: Script<El<SVGPatternElement, M>>,
  destruction?: Script<El<SVGPatternElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGPatternElement, M>>): ReactiveTreeNode<El<SVGPatternElement, M>>

export function Pattern<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGPatternElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGPatternElement, M>>,
  setupOrMode?: Script<El<SVGPatternElement, M>> | Mode,
  setup?: Script<El<SVGPatternElement, M>>,
  setupTask?: ScriptAsync<El<SVGPatternElement, M>>,
  creation?: Script<El<SVGPatternElement, M>>,
  creationTask?: ScriptAsync<El<SVGPatternElement, M>>,
  mounting?: Script<El<SVGPatternElement, M>>,
  destruction?: Script<El<SVGPatternElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGPatternElement, M>>): ReactiveTreeNode<El<SVGPatternElement, M>> {
  //
  return describe(Pattern.name, SvgTags.pattern,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Polygon<M = unknown>(
  setup: Script<El<SVGPolygonElement, M>>): ReactiveTreeNode<El<SVGPolygonElement, M>>

export function Polygon<M = unknown>(
  key: string,
  setup: Script<El<SVGPolygonElement, M>>): ReactiveTreeNode<El<SVGPolygonElement, M>>

export function Polygon<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGPolygonElement, M>>): ReactiveTreeNode<El<SVGPolygonElement, M>>

export function Polygon<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGPolygonElement, M>>): ReactiveTreeNode<El<SVGPolygonElement, M>>

export function Polygon<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGPolygonElement, M>>,
  setupTask?: ScriptAsync<El<SVGPolygonElement, M>>,
  creation?: Script<El<SVGPolygonElement, M>>,
  creationTask?: ScriptAsync<El<SVGPolygonElement, M>>,
  mounting?: Script<El<SVGPolygonElement, M>>,
  destruction?: Script<El<SVGPolygonElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGPolygonElement, M>>): ReactiveTreeNode<El<SVGPolygonElement, M>>

export function Polygon<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGPolygonElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGPolygonElement, M>>,
  setupOrMode?: Script<El<SVGPolygonElement, M>> | Mode,
  setup?: Script<El<SVGPolygonElement, M>>,
  setupTask?: ScriptAsync<El<SVGPolygonElement, M>>,
  creation?: Script<El<SVGPolygonElement, M>>,
  creationTask?: ScriptAsync<El<SVGPolygonElement, M>>,
  mounting?: Script<El<SVGPolygonElement, M>>,
  destruction?: Script<El<SVGPolygonElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGPolygonElement, M>>): ReactiveTreeNode<El<SVGPolygonElement, M>> {
  //
  return describe(Polygon.name, SvgTags.polygon,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function PolyLine<M = unknown>(
  setup: Script<El<SVGPolylineElement, M>>): ReactiveTreeNode<El<SVGPolylineElement, M>>

export function PolyLine<M = unknown>(
  key: string,
  setup: Script<El<SVGPolylineElement, M>>): ReactiveTreeNode<El<SVGPolylineElement, M>>

export function PolyLine<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGPolylineElement, M>>): ReactiveTreeNode<El<SVGPolylineElement, M>>

export function PolyLine<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGPolylineElement, M>>): ReactiveTreeNode<El<SVGPolylineElement, M>>

export function PolyLine<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGPolylineElement, M>>,
  setupTask?: ScriptAsync<El<SVGPolylineElement, M>>,
  creation?: Script<El<SVGPolylineElement, M>>,
  creationTask?: ScriptAsync<El<SVGPolylineElement, M>>,
  mounting?: Script<El<SVGPolylineElement, M>>,
  destruction?: Script<El<SVGPolylineElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGPolylineElement, M>>): ReactiveTreeNode<El<SVGPolylineElement, M>>

export function PolyLine<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGPolylineElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGPolylineElement, M>>,
  setupOrMode?: Script<El<SVGPolylineElement, M>> | Mode,
  setup?: Script<El<SVGPolylineElement, M>>,
  setupTask?: ScriptAsync<El<SVGPolylineElement, M>>,
  creation?: Script<El<SVGPolylineElement, M>>,
  creationTask?: ScriptAsync<El<SVGPolylineElement, M>>,
  mounting?: Script<El<SVGPolylineElement, M>>,
  destruction?: Script<El<SVGPolylineElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGPolylineElement, M>>): ReactiveTreeNode<El<SVGPolylineElement, M>> {
  //
  return describe(PolyLine.name, SvgTags.polyline,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function RadialGradient<M = unknown>(
  setup: Script<El<SVGRadialGradientElement, M>>): ReactiveTreeNode<El<SVGRadialGradientElement, M>>

export function RadialGradient<M = unknown>(
  key: string,
  setup: Script<El<SVGRadialGradientElement, M>>): ReactiveTreeNode<El<SVGRadialGradientElement, M>>

export function RadialGradient<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGRadialGradientElement, M>>): ReactiveTreeNode<El<SVGRadialGradientElement, M>>

export function RadialGradient<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGRadialGradientElement, M>>): ReactiveTreeNode<El<SVGRadialGradientElement, M>>

export function RadialGradient<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGRadialGradientElement, M>>,
  setupTask?: ScriptAsync<El<SVGRadialGradientElement, M>>,
  creation?: Script<El<SVGRadialGradientElement, M>>,
  creationTask?: ScriptAsync<El<SVGRadialGradientElement, M>>,
  mounting?: Script<El<SVGRadialGradientElement, M>>,
  destruction?: Script<El<SVGRadialGradientElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGRadialGradientElement, M>>): ReactiveTreeNode<El<SVGRadialGradientElement, M>>

export function RadialGradient<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGRadialGradientElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGRadialGradientElement, M>>,
  setupOrMode?: Script<El<SVGRadialGradientElement, M>> | Mode,
  setup?: Script<El<SVGRadialGradientElement, M>>,
  setupTask?: ScriptAsync<El<SVGRadialGradientElement, M>>,
  creation?: Script<El<SVGRadialGradientElement, M>>,
  creationTask?: ScriptAsync<El<SVGRadialGradientElement, M>>,
  mounting?: Script<El<SVGRadialGradientElement, M>>,
  destruction?: Script<El<SVGRadialGradientElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGRadialGradientElement, M>>): ReactiveTreeNode<El<SVGRadialGradientElement, M>> {
  //
  return describe(RadialGradient.name, SvgTags.radialGradient,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Rect<M = unknown>(
  setup: Script<El<SVGRectElement, M>>): ReactiveTreeNode<El<SVGRectElement, M>>

export function Rect<M = unknown>(
  key: string,
  setup: Script<El<SVGRectElement, M>>): ReactiveTreeNode<El<SVGRectElement, M>>

export function Rect<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGRectElement, M>>): ReactiveTreeNode<El<SVGRectElement, M>>

export function Rect<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGRectElement, M>>): ReactiveTreeNode<El<SVGRectElement, M>>

export function Rect<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGRectElement, M>>,
  setupTask?: ScriptAsync<El<SVGRectElement, M>>,
  creation?: Script<El<SVGRectElement, M>>,
  creationTask?: ScriptAsync<El<SVGRectElement, M>>,
  mounting?: Script<El<SVGRectElement, M>>,
  destruction?: Script<El<SVGRectElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGRectElement, M>>): ReactiveTreeNode<El<SVGRectElement, M>>

export function Rect<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGRectElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGRectElement, M>>,
  setupOrMode?: Script<El<SVGRectElement, M>> | Mode,
  setup?: Script<El<SVGRectElement, M>>,
  setupTask?: ScriptAsync<El<SVGRectElement, M>>,
  creation?: Script<El<SVGRectElement, M>>,
  creationTask?: ScriptAsync<El<SVGRectElement, M>>,
  mounting?: Script<El<SVGRectElement, M>>,
  destruction?: Script<El<SVGRectElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGRectElement, M>>): ReactiveTreeNode<El<SVGRectElement, M>> {
  //
  return describe(Rect.name, SvgTags.rect,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Stop<M = unknown>(
  setup: Script<El<SVGStopElement, M>>): ReactiveTreeNode<El<SVGStopElement, M>>

export function Stop<M = unknown>(
  key: string,
  setup: Script<El<SVGStopElement, M>>): ReactiveTreeNode<El<SVGStopElement, M>>

export function Stop<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGStopElement, M>>): ReactiveTreeNode<El<SVGStopElement, M>>

export function Stop<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGStopElement, M>>): ReactiveTreeNode<El<SVGStopElement, M>>

export function Stop<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGStopElement, M>>,
  setupTask?: ScriptAsync<El<SVGStopElement, M>>,
  creation?: Script<El<SVGStopElement, M>>,
  creationTask?: ScriptAsync<El<SVGStopElement, M>>,
  mounting?: Script<El<SVGStopElement, M>>,
  destruction?: Script<El<SVGStopElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGStopElement, M>>): ReactiveTreeNode<El<SVGStopElement, M>>

export function Stop<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGStopElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGStopElement, M>>,
  setupOrMode?: Script<El<SVGStopElement, M>> | Mode,
  setup?: Script<El<SVGStopElement, M>>,
  setupTask?: ScriptAsync<El<SVGStopElement, M>>,
  creation?: Script<El<SVGStopElement, M>>,
  creationTask?: ScriptAsync<El<SVGStopElement, M>>,
  mounting?: Script<El<SVGStopElement, M>>,
  destruction?: Script<El<SVGStopElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGStopElement, M>>): ReactiveTreeNode<El<SVGStopElement, M>> {
  //
  return describe(Stop.name, SvgTags.stop,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function SvgSwitch<M = unknown>(
  setup: Script<El<SVGSwitchElement, M>>): ReactiveTreeNode<El<SVGSwitchElement, M>>

export function SvgSwitch<M = unknown>(
  key: string,
  setup: Script<El<SVGSwitchElement, M>>): ReactiveTreeNode<El<SVGSwitchElement, M>>

export function SvgSwitch<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGSwitchElement, M>>): ReactiveTreeNode<El<SVGSwitchElement, M>>

export function SvgSwitch<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGSwitchElement, M>>): ReactiveTreeNode<El<SVGSwitchElement, M>>

export function SvgSwitch<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGSwitchElement, M>>,
  setupTask?: ScriptAsync<El<SVGSwitchElement, M>>,
  creation?: Script<El<SVGSwitchElement, M>>,
  creationTask?: ScriptAsync<El<SVGSwitchElement, M>>,
  mounting?: Script<El<SVGSwitchElement, M>>,
  destruction?: Script<El<SVGSwitchElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGSwitchElement, M>>): ReactiveTreeNode<El<SVGSwitchElement, M>>

export function SvgSwitch<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGSwitchElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGSwitchElement, M>>,
  setupOrMode?: Script<El<SVGSwitchElement, M>> | Mode,
  setup?: Script<El<SVGSwitchElement, M>>,
  setupTask?: ScriptAsync<El<SVGSwitchElement, M>>,
  creation?: Script<El<SVGSwitchElement, M>>,
  creationTask?: ScriptAsync<El<SVGSwitchElement, M>>,
  mounting?: Script<El<SVGSwitchElement, M>>,
  destruction?: Script<El<SVGSwitchElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGSwitchElement, M>>): ReactiveTreeNode<El<SVGSwitchElement, M>> {
  //
  return describe(SvgSwitch.name, SvgTags.switch,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Symbol<M = unknown>(
  setup: Script<El<SVGSymbolElement, M>>): ReactiveTreeNode<El<SVGSymbolElement, M>>

export function Symbol<M = unknown>(
  key: string,
  setup: Script<El<SVGSymbolElement, M>>): ReactiveTreeNode<El<SVGSymbolElement, M>>

export function Symbol<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGSymbolElement, M>>): ReactiveTreeNode<El<SVGSymbolElement, M>>

export function Symbol<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGSymbolElement, M>>): ReactiveTreeNode<El<SVGSymbolElement, M>>

export function Symbol<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGSymbolElement, M>>,
  setupTask?: ScriptAsync<El<SVGSymbolElement, M>>,
  creation?: Script<El<SVGSymbolElement, M>>,
  creationTask?: ScriptAsync<El<SVGSymbolElement, M>>,
  mounting?: Script<El<SVGSymbolElement, M>>,
  destruction?: Script<El<SVGSymbolElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGSymbolElement, M>>): ReactiveTreeNode<El<SVGSymbolElement, M>>

export function Symbol<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGSymbolElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGSymbolElement, M>>,
  setupOrMode?: Script<El<SVGSymbolElement, M>> | Mode,
  setup?: Script<El<SVGSymbolElement, M>>,
  setupTask?: ScriptAsync<El<SVGSymbolElement, M>>,
  creation?: Script<El<SVGSymbolElement, M>>,
  creationTask?: ScriptAsync<El<SVGSymbolElement, M>>,
  mounting?: Script<El<SVGSymbolElement, M>>,
  destruction?: Script<El<SVGSymbolElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGSymbolElement, M>>): ReactiveTreeNode<El<SVGSymbolElement, M>> {
  //
  return describe(Symbol.name, SvgTags.symbol,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Text<M = unknown>(
  setup: Script<El<SVGTextElement, M>>): ReactiveTreeNode<El<SVGTextElement, M>>

export function Text<M = unknown>(
  key: string,
  setup: Script<El<SVGTextElement, M>>): ReactiveTreeNode<El<SVGTextElement, M>>

export function Text<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGTextElement, M>>): ReactiveTreeNode<El<SVGTextElement, M>>

export function Text<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGTextElement, M>>): ReactiveTreeNode<El<SVGTextElement, M>>

export function Text<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGTextElement, M>>,
  setupTask?: ScriptAsync<El<SVGTextElement, M>>,
  creation?: Script<El<SVGTextElement, M>>,
  creationTask?: ScriptAsync<El<SVGTextElement, M>>,
  mounting?: Script<El<SVGTextElement, M>>,
  destruction?: Script<El<SVGTextElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGTextElement, M>>): ReactiveTreeNode<El<SVGTextElement, M>>

export function Text<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGTextElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGTextElement, M>>,
  setupOrMode?: Script<El<SVGTextElement, M>> | Mode,
  setup?: Script<El<SVGTextElement, M>>,
  setupTask?: ScriptAsync<El<SVGTextElement, M>>,
  creation?: Script<El<SVGTextElement, M>>,
  creationTask?: ScriptAsync<El<SVGTextElement, M>>,
  mounting?: Script<El<SVGTextElement, M>>,
  destruction?: Script<El<SVGTextElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGTextElement, M>>): ReactiveTreeNode<El<SVGTextElement, M>> {
  //
  return describe(Text.name, SvgTags.text,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function TextPath<M = unknown>(
  setup: Script<El<SVGTextPathElement, M>>): ReactiveTreeNode<El<SVGTextPathElement, M>>

export function TextPath<M = unknown>(
  key: string,
  setup: Script<El<SVGTextPathElement, M>>): ReactiveTreeNode<El<SVGTextPathElement, M>>

export function TextPath<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGTextPathElement, M>>): ReactiveTreeNode<El<SVGTextPathElement, M>>

export function TextPath<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGTextPathElement, M>>): ReactiveTreeNode<El<SVGTextPathElement, M>>

export function TextPath<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGTextPathElement, M>>,
  setupTask?: ScriptAsync<El<SVGTextPathElement, M>>,
  creation?: Script<El<SVGTextPathElement, M>>,
  creationTask?: ScriptAsync<El<SVGTextPathElement, M>>,
  mounting?: Script<El<SVGTextPathElement, M>>,
  destruction?: Script<El<SVGTextPathElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGTextPathElement, M>>): ReactiveTreeNode<El<SVGTextPathElement, M>>

export function TextPath<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGTextPathElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGTextPathElement, M>>,
  setupOrMode?: Script<El<SVGTextPathElement, M>> | Mode,
  setup?: Script<El<SVGTextPathElement, M>>,
  setupTask?: ScriptAsync<El<SVGTextPathElement, M>>,
  creation?: Script<El<SVGTextPathElement, M>>,
  creationTask?: ScriptAsync<El<SVGTextPathElement, M>>,
  mounting?: Script<El<SVGTextPathElement, M>>,
  destruction?: Script<El<SVGTextPathElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGTextPathElement, M>>): ReactiveTreeNode<El<SVGTextPathElement, M>> {
  //
  return describe(TextPath.name, SvgTags.textPath,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function TSpan<M = unknown>(
  setup: Script<El<SVGTSpanElement, M>>): ReactiveTreeNode<El<SVGTSpanElement, M>>

export function TSpan<M = unknown>(
  key: string,
  setup: Script<El<SVGTSpanElement, M>>): ReactiveTreeNode<El<SVGTSpanElement, M>>

export function TSpan<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGTSpanElement, M>>): ReactiveTreeNode<El<SVGTSpanElement, M>>

export function TSpan<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGTSpanElement, M>>): ReactiveTreeNode<El<SVGTSpanElement, M>>

export function TSpan<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGTSpanElement, M>>,
  setupTask?: ScriptAsync<El<SVGTSpanElement, M>>,
  creation?: Script<El<SVGTSpanElement, M>>,
  creationTask?: ScriptAsync<El<SVGTSpanElement, M>>,
  mounting?: Script<El<SVGTSpanElement, M>>,
  destruction?: Script<El<SVGTSpanElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGTSpanElement, M>>): ReactiveTreeNode<El<SVGTSpanElement, M>>

export function TSpan<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGTSpanElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGTSpanElement, M>>,
  setupOrMode?: Script<El<SVGTSpanElement, M>> | Mode,
  setup?: Script<El<SVGTSpanElement, M>>,
  setupTask?: ScriptAsync<El<SVGTSpanElement, M>>,
  creation?: Script<El<SVGTSpanElement, M>>,
  creationTask?: ScriptAsync<El<SVGTSpanElement, M>>,
  mounting?: Script<El<SVGTSpanElement, M>>,
  destruction?: Script<El<SVGTSpanElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGTSpanElement, M>>): ReactiveTreeNode<El<SVGTSpanElement, M>> {
  //
  return describe(TSpan.name, SvgTags.tspan,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Use<M = unknown>(
  setup: Script<El<SVGUseElement, M>>): ReactiveTreeNode<El<SVGUseElement, M>>

export function Use<M = unknown>(
  key: string,
  setup: Script<El<SVGUseElement, M>>): ReactiveTreeNode<El<SVGUseElement, M>>

export function Use<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGUseElement, M>>): ReactiveTreeNode<El<SVGUseElement, M>>

export function Use<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGUseElement, M>>): ReactiveTreeNode<El<SVGUseElement, M>>

export function Use<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGUseElement, M>>,
  setupTask?: ScriptAsync<El<SVGUseElement, M>>,
  creation?: Script<El<SVGUseElement, M>>,
  creationTask?: ScriptAsync<El<SVGUseElement, M>>,
  mounting?: Script<El<SVGUseElement, M>>,
  destruction?: Script<El<SVGUseElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGUseElement, M>>): ReactiveTreeNode<El<SVGUseElement, M>>

export function Use<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGUseElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGUseElement, M>>,
  setupOrMode?: Script<El<SVGUseElement, M>> | Mode,
  setup?: Script<El<SVGUseElement, M>>,
  setupTask?: ScriptAsync<El<SVGUseElement, M>>,
  creation?: Script<El<SVGUseElement, M>>,
  creationTask?: ScriptAsync<El<SVGUseElement, M>>,
  mounting?: Script<El<SVGUseElement, M>>,
  destruction?: Script<El<SVGUseElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGUseElement, M>>): ReactiveTreeNode<El<SVGUseElement, M>> {
  //
  return describe(Use.name, SvgTags.use,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function View<M = unknown>(
  setup: Script<El<SVGViewElement, M>>): ReactiveTreeNode<El<SVGViewElement, M>>

export function View<M = unknown>(
  key: string,
  setup: Script<El<SVGViewElement, M>>): ReactiveTreeNode<El<SVGViewElement, M>>

export function View<M = unknown>(
  mode: Mode,
  setup: Script<El<SVGViewElement, M>>): ReactiveTreeNode<El<SVGViewElement, M>>

export function View<M = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGViewElement, M>>): ReactiveTreeNode<El<SVGViewElement, M>>

export function View<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGViewElement, M>>,
  setupTask?: ScriptAsync<El<SVGViewElement, M>>,
  creation?: Script<El<SVGViewElement, M>>,
  creationTask?: ScriptAsync<El<SVGViewElement, M>>,
  mounting?: Script<El<SVGViewElement, M>>,
  destruction?: Script<El<SVGViewElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGViewElement, M>>): ReactiveTreeNode<El<SVGViewElement, M>>

export function View<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGViewElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<SVGViewElement, M>>,
  setupOrMode?: Script<El<SVGViewElement, M>> | Mode,
  setup?: Script<El<SVGViewElement, M>>,
  setupTask?: ScriptAsync<El<SVGViewElement, M>>,
  creation?: Script<El<SVGViewElement, M>>,
  creationTask?: ScriptAsync<El<SVGViewElement, M>>,
  mounting?: Script<El<SVGViewElement, M>>,
  destruction?: Script<El<SVGViewElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGViewElement, M>>): ReactiveTreeNode<El<SVGViewElement, M>> {
  //
  return describe(View.name, SvgTags.view,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
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
