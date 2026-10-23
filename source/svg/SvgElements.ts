// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2026 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, ReactiveTreeNodeDesc, Script, Mode, ScriptAsync, describe } from "reactronic"
import { El, ElKind } from "../core/El.js"
import { SvgDriver } from "../core/WebDriver.js"

// Svg

export function Svg<M = unknown, D = unknown>(
  setup: Script<El<SVGSVGElement, M, D>>): ReactiveTreeNode<El<SVGSVGElement, M, D>>

export function Svg<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGSVGElement, M, D>>): ReactiveTreeNode<El<SVGSVGElement, M, D>>

export function Svg<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGSVGElement, M, D>>): ReactiveTreeNode<El<SVGSVGElement, M, D>>

export function Svg<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGSVGElement, M, D>>): ReactiveTreeNode<El<SVGSVGElement, M, D>>

export function Svg<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGSVGElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGSVGElement, M, D>>,
  creation?: Script<El<SVGSVGElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGSVGElement, M, D>>,
  mounting?: Script<El<SVGSVGElement, M, D>>,
  destruction?: Script<El<SVGSVGElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGSVGElement, M, D>>): ReactiveTreeNode<El<SVGSVGElement, M, D>>

export function Svg<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGSVGElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGSVGElement, M, D>>,
  setupOrMode?: Script<El<SVGSVGElement, M, D>> | Mode,
  setup?: Script<El<SVGSVGElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGSVGElement, M, D>>,
  creation?: Script<El<SVGSVGElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGSVGElement, M, D>>,
  mounting?: Script<El<SVGSVGElement, M, D>>,
  destruction?: Script<El<SVGSVGElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGSVGElement, M, D>>): ReactiveTreeNode<El<SVGSVGElement, M, D>> {
  //
  return describe(Svg.name, SvgTags.svg,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// SvgA

export function SvgA<M = unknown, D = unknown>(
  setup: Script<El<SVGAElement, M, D>>): ReactiveTreeNode<El<SVGAElement, M, D>>

export function SvgA<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGAElement, M, D>>): ReactiveTreeNode<El<SVGAElement, M, D>>

export function SvgA<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGAElement, M, D>>): ReactiveTreeNode<El<SVGAElement, M, D>>

export function SvgA<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGAElement, M, D>>): ReactiveTreeNode<El<SVGAElement, M, D>>

export function SvgA<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGAElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGAElement, M, D>>,
  creation?: Script<El<SVGAElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGAElement, M, D>>,
  mounting?: Script<El<SVGAElement, M, D>>,
  destruction?: Script<El<SVGAElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGAElement, M, D>>): ReactiveTreeNode<El<SVGAElement, M, D>>

export function SvgA<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGAElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGAElement, M, D>>,
  setupOrMode?: Script<El<SVGAElement, M, D>> | Mode,
  setup?: Script<El<SVGAElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGAElement, M, D>>,
  creation?: Script<El<SVGAElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGAElement, M, D>>,
  mounting?: Script<El<SVGAElement, M, D>>,
  destruction?: Script<El<SVGAElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGAElement, M, D>>): ReactiveTreeNode<El<SVGAElement, M, D>> {
  //
  return describe(SvgA.name, SvgTags.a,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Animate

export function Animate<M = unknown, D = unknown>(
  setup: Script<El<SVGAnimateElement, M, D>>): ReactiveTreeNode<El<SVGAnimateElement, M, D>>

export function Animate<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGAnimateElement, M, D>>): ReactiveTreeNode<El<SVGAnimateElement, M, D>>

export function Animate<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGAnimateElement, M, D>>): ReactiveTreeNode<El<SVGAnimateElement, M, D>>

export function Animate<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGAnimateElement, M, D>>): ReactiveTreeNode<El<SVGAnimateElement, M, D>>

export function Animate<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGAnimateElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGAnimateElement, M, D>>,
  creation?: Script<El<SVGAnimateElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGAnimateElement, M, D>>,
  mounting?: Script<El<SVGAnimateElement, M, D>>,
  destruction?: Script<El<SVGAnimateElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGAnimateElement, M, D>>): ReactiveTreeNode<El<SVGAnimateElement, M, D>>

export function Animate<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGAnimateElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGAnimateElement, M, D>>,
  setupOrMode?: Script<El<SVGAnimateElement, M, D>> | Mode,
  setup?: Script<El<SVGAnimateElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGAnimateElement, M, D>>,
  creation?: Script<El<SVGAnimateElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGAnimateElement, M, D>>,
  mounting?: Script<El<SVGAnimateElement, M, D>>,
  destruction?: Script<El<SVGAnimateElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGAnimateElement, M, D>>): ReactiveTreeNode<El<SVGAnimateElement, M, D>> {
  //
  return describe(Animate.name, SvgTags.animate,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// AnimateMotion

export function AnimateMotion<M = unknown, D = unknown>(
  setup: Script<El<SVGAnimateMotionElement, M, D>>): ReactiveTreeNode<El<SVGAnimateMotionElement, M, D>>

export function AnimateMotion<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGAnimateMotionElement, M, D>>): ReactiveTreeNode<El<SVGAnimateMotionElement, M, D>>

export function AnimateMotion<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGAnimateMotionElement, M, D>>): ReactiveTreeNode<El<SVGAnimateMotionElement, M, D>>

export function AnimateMotion<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGAnimateMotionElement, M, D>>): ReactiveTreeNode<El<SVGAnimateMotionElement, M, D>>

export function AnimateMotion<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGAnimateMotionElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGAnimateMotionElement, M, D>>,
  creation?: Script<El<SVGAnimateMotionElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGAnimateMotionElement, M, D>>,
  mounting?: Script<El<SVGAnimateMotionElement, M, D>>,
  destruction?: Script<El<SVGAnimateMotionElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGAnimateMotionElement, M, D>>): ReactiveTreeNode<El<SVGAnimateMotionElement, M, D>>

export function AnimateMotion<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGAnimateMotionElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGAnimateMotionElement, M, D>>,
  setupOrMode?: Script<El<SVGAnimateMotionElement, M, D>> | Mode,
  setup?: Script<El<SVGAnimateMotionElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGAnimateMotionElement, M, D>>,
  creation?: Script<El<SVGAnimateMotionElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGAnimateMotionElement, M, D>>,
  mounting?: Script<El<SVGAnimateMotionElement, M, D>>,
  destruction?: Script<El<SVGAnimateMotionElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGAnimateMotionElement, M, D>>): ReactiveTreeNode<El<SVGAnimateMotionElement, M, D>> {
  //
  return describe(AnimateMotion.name, SvgTags.animateMotion,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// AnimateTransform

export function AnimateTransform<M = unknown, D = unknown>(
  setup: Script<El<SVGAnimateTransformElement, M, D>>): ReactiveTreeNode<El<SVGAnimateTransformElement, M, D>>

export function AnimateTransform<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGAnimateTransformElement, M, D>>): ReactiveTreeNode<El<SVGAnimateTransformElement, M, D>>

export function AnimateTransform<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGAnimateTransformElement, M, D>>): ReactiveTreeNode<El<SVGAnimateTransformElement, M, D>>

export function AnimateTransform<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGAnimateTransformElement, M, D>>): ReactiveTreeNode<El<SVGAnimateTransformElement, M, D>>

export function AnimateTransform<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGAnimateTransformElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGAnimateTransformElement, M, D>>,
  creation?: Script<El<SVGAnimateTransformElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGAnimateTransformElement, M, D>>,
  mounting?: Script<El<SVGAnimateTransformElement, M, D>>,
  destruction?: Script<El<SVGAnimateTransformElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGAnimateTransformElement, M, D>>): ReactiveTreeNode<El<SVGAnimateTransformElement, M, D>>

export function AnimateTransform<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGAnimateTransformElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGAnimateTransformElement, M, D>>,
  setupOrMode?: Script<El<SVGAnimateTransformElement, M, D>> | Mode,
  setup?: Script<El<SVGAnimateTransformElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGAnimateTransformElement, M, D>>,
  creation?: Script<El<SVGAnimateTransformElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGAnimateTransformElement, M, D>>,
  mounting?: Script<El<SVGAnimateTransformElement, M, D>>,
  destruction?: Script<El<SVGAnimateTransformElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGAnimateTransformElement, M, D>>): ReactiveTreeNode<El<SVGAnimateTransformElement, M, D>> {
  //
  return describe(AnimateTransform.name, SvgTags.animateTransform,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Circle

export function Circle<M = unknown, D = unknown>(
  setup: Script<El<SVGCircleElement, M, D>>): ReactiveTreeNode<El<SVGCircleElement, M, D>>

export function Circle<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGCircleElement, M, D>>): ReactiveTreeNode<El<SVGCircleElement, M, D>>

export function Circle<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGCircleElement, M, D>>): ReactiveTreeNode<El<SVGCircleElement, M, D>>

export function Circle<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGCircleElement, M, D>>): ReactiveTreeNode<El<SVGCircleElement, M, D>>

export function Circle<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGCircleElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGCircleElement, M, D>>,
  creation?: Script<El<SVGCircleElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGCircleElement, M, D>>,
  mounting?: Script<El<SVGCircleElement, M, D>>,
  destruction?: Script<El<SVGCircleElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGCircleElement, M, D>>): ReactiveTreeNode<El<SVGCircleElement, M, D>>

export function Circle<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGCircleElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGCircleElement, M, D>>,
  setupOrMode?: Script<El<SVGCircleElement, M, D>> | Mode,
  setup?: Script<El<SVGCircleElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGCircleElement, M, D>>,
  creation?: Script<El<SVGCircleElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGCircleElement, M, D>>,
  mounting?: Script<El<SVGCircleElement, M, D>>,
  destruction?: Script<El<SVGCircleElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGCircleElement, M, D>>): ReactiveTreeNode<El<SVGCircleElement, M, D>> {
  //
  return describe(Circle.name, SvgTags.circle,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// ClipPath

export function ClipPath<M = unknown, D = unknown>(
  setup: Script<El<SVGClipPathElement, M, D>>): ReactiveTreeNode<El<SVGClipPathElement, M, D>>

export function ClipPath<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGClipPathElement, M, D>>): ReactiveTreeNode<El<SVGClipPathElement, M, D>>

export function ClipPath<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGClipPathElement, M, D>>): ReactiveTreeNode<El<SVGClipPathElement, M, D>>

export function ClipPath<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGClipPathElement, M, D>>): ReactiveTreeNode<El<SVGClipPathElement, M, D>>

export function ClipPath<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGClipPathElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGClipPathElement, M, D>>,
  creation?: Script<El<SVGClipPathElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGClipPathElement, M, D>>,
  mounting?: Script<El<SVGClipPathElement, M, D>>,
  destruction?: Script<El<SVGClipPathElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGClipPathElement, M, D>>): ReactiveTreeNode<El<SVGClipPathElement, M, D>>

export function ClipPath<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGClipPathElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGClipPathElement, M, D>>,
  setupOrMode?: Script<El<SVGClipPathElement, M, D>> | Mode,
  setup?: Script<El<SVGClipPathElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGClipPathElement, M, D>>,
  creation?: Script<El<SVGClipPathElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGClipPathElement, M, D>>,
  mounting?: Script<El<SVGClipPathElement, M, D>>,
  destruction?: Script<El<SVGClipPathElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGClipPathElement, M, D>>): ReactiveTreeNode<El<SVGClipPathElement, M, D>> {
  //
  return describe(ClipPath.name, SvgTags.clipPath,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Defs

export function Defs<M = unknown, D = unknown>(
  setup: Script<El<SVGDefsElement, M, D>>): ReactiveTreeNode<El<SVGDefsElement, M, D>>

export function Defs<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGDefsElement, M, D>>): ReactiveTreeNode<El<SVGDefsElement, M, D>>

export function Defs<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGDefsElement, M, D>>): ReactiveTreeNode<El<SVGDefsElement, M, D>>

export function Defs<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGDefsElement, M, D>>): ReactiveTreeNode<El<SVGDefsElement, M, D>>

export function Defs<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGDefsElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGDefsElement, M, D>>,
  creation?: Script<El<SVGDefsElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGDefsElement, M, D>>,
  mounting?: Script<El<SVGDefsElement, M, D>>,
  destruction?: Script<El<SVGDefsElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGDefsElement, M, D>>): ReactiveTreeNode<El<SVGDefsElement, M, D>>

export function Defs<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGDefsElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGDefsElement, M, D>>,
  setupOrMode?: Script<El<SVGDefsElement, M, D>> | Mode,
  setup?: Script<El<SVGDefsElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGDefsElement, M, D>>,
  creation?: Script<El<SVGDefsElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGDefsElement, M, D>>,
  mounting?: Script<El<SVGDefsElement, M, D>>,
  destruction?: Script<El<SVGDefsElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGDefsElement, M, D>>): ReactiveTreeNode<El<SVGDefsElement, M, D>> {
  //
  return describe(Defs.name, SvgTags.defs,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Desc

export function Desc<M = unknown, D = unknown>(
  setup: Script<El<SVGDescElement, M, D>>): ReactiveTreeNode<El<SVGDescElement, M, D>>

export function Desc<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGDescElement, M, D>>): ReactiveTreeNode<El<SVGDescElement, M, D>>

export function Desc<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGDescElement, M, D>>): ReactiveTreeNode<El<SVGDescElement, M, D>>

export function Desc<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGDescElement, M, D>>): ReactiveTreeNode<El<SVGDescElement, M, D>>

export function Desc<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGDescElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGDescElement, M, D>>,
  creation?: Script<El<SVGDescElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGDescElement, M, D>>,
  mounting?: Script<El<SVGDescElement, M, D>>,
  destruction?: Script<El<SVGDescElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGDescElement, M, D>>): ReactiveTreeNode<El<SVGDescElement, M, D>>

export function Desc<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGDescElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGDescElement, M, D>>,
  setupOrMode?: Script<El<SVGDescElement, M, D>> | Mode,
  setup?: Script<El<SVGDescElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGDescElement, M, D>>,
  creation?: Script<El<SVGDescElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGDescElement, M, D>>,
  mounting?: Script<El<SVGDescElement, M, D>>,
  destruction?: Script<El<SVGDescElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGDescElement, M, D>>): ReactiveTreeNode<El<SVGDescElement, M, D>> {
  //
  return describe(Desc.name, SvgTags.desc,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Ellipse

export function Ellipse<M = unknown, D = unknown>(
  setup: Script<El<SVGEllipseElement, M, D>>): ReactiveTreeNode<El<SVGEllipseElement, M, D>>

export function Ellipse<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGEllipseElement, M, D>>): ReactiveTreeNode<El<SVGEllipseElement, M, D>>

export function Ellipse<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGEllipseElement, M, D>>): ReactiveTreeNode<El<SVGEllipseElement, M, D>>

export function Ellipse<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGEllipseElement, M, D>>): ReactiveTreeNode<El<SVGEllipseElement, M, D>>

export function Ellipse<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGEllipseElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGEllipseElement, M, D>>,
  creation?: Script<El<SVGEllipseElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGEllipseElement, M, D>>,
  mounting?: Script<El<SVGEllipseElement, M, D>>,
  destruction?: Script<El<SVGEllipseElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGEllipseElement, M, D>>): ReactiveTreeNode<El<SVGEllipseElement, M, D>>

export function Ellipse<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGEllipseElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGEllipseElement, M, D>>,
  setupOrMode?: Script<El<SVGEllipseElement, M, D>> | Mode,
  setup?: Script<El<SVGEllipseElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGEllipseElement, M, D>>,
  creation?: Script<El<SVGEllipseElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGEllipseElement, M, D>>,
  mounting?: Script<El<SVGEllipseElement, M, D>>,
  destruction?: Script<El<SVGEllipseElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGEllipseElement, M, D>>): ReactiveTreeNode<El<SVGEllipseElement, M, D>> {
  //
  return describe(Ellipse.name, SvgTags.ellipse,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// FeBlend

export function FeBlend<M = unknown, D = unknown>(
  setup: Script<El<SVGFEBlendElement, M, D>>): ReactiveTreeNode<El<SVGFEBlendElement, M, D>>

export function FeBlend<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEBlendElement, M, D>>): ReactiveTreeNode<El<SVGFEBlendElement, M, D>>

export function FeBlend<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEBlendElement, M, D>>): ReactiveTreeNode<El<SVGFEBlendElement, M, D>>

export function FeBlend<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEBlendElement, M, D>>): ReactiveTreeNode<El<SVGFEBlendElement, M, D>>

export function FeBlend<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEBlendElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEBlendElement, M, D>>,
  creation?: Script<El<SVGFEBlendElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEBlendElement, M, D>>,
  mounting?: Script<El<SVGFEBlendElement, M, D>>,
  destruction?: Script<El<SVGFEBlendElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEBlendElement, M, D>>): ReactiveTreeNode<El<SVGFEBlendElement, M, D>>

export function FeBlend<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEBlendElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEBlendElement, M, D>>,
  setupOrMode?: Script<El<SVGFEBlendElement, M, D>> | Mode,
  setup?: Script<El<SVGFEBlendElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEBlendElement, M, D>>,
  creation?: Script<El<SVGFEBlendElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEBlendElement, M, D>>,
  mounting?: Script<El<SVGFEBlendElement, M, D>>,
  destruction?: Script<El<SVGFEBlendElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEBlendElement, M, D>>): ReactiveTreeNode<El<SVGFEBlendElement, M, D>> {
  //
  return describe(FeBlend.name, SvgTags.feBlend,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// FeColorMatrix

export function FeColorMatrix<M = unknown, D = unknown>(
  setup: Script<El<SVGFEColorMatrixElement, M, D>>): ReactiveTreeNode<El<SVGFEColorMatrixElement, M, D>>

export function FeColorMatrix<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEColorMatrixElement, M, D>>): ReactiveTreeNode<El<SVGFEColorMatrixElement, M, D>>

export function FeColorMatrix<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEColorMatrixElement, M, D>>): ReactiveTreeNode<El<SVGFEColorMatrixElement, M, D>>

export function FeColorMatrix<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEColorMatrixElement, M, D>>): ReactiveTreeNode<El<SVGFEColorMatrixElement, M, D>>

export function FeColorMatrix<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEColorMatrixElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEColorMatrixElement, M, D>>,
  creation?: Script<El<SVGFEColorMatrixElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEColorMatrixElement, M, D>>,
  mounting?: Script<El<SVGFEColorMatrixElement, M, D>>,
  destruction?: Script<El<SVGFEColorMatrixElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEColorMatrixElement, M, D>>): ReactiveTreeNode<El<SVGFEColorMatrixElement, M, D>>

export function FeColorMatrix<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEColorMatrixElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEColorMatrixElement, M, D>>,
  setupOrMode?: Script<El<SVGFEColorMatrixElement, M, D>> | Mode,
  setup?: Script<El<SVGFEColorMatrixElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEColorMatrixElement, M, D>>,
  creation?: Script<El<SVGFEColorMatrixElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEColorMatrixElement, M, D>>,
  mounting?: Script<El<SVGFEColorMatrixElement, M, D>>,
  destruction?: Script<El<SVGFEColorMatrixElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEColorMatrixElement, M, D>>): ReactiveTreeNode<El<SVGFEColorMatrixElement, M, D>> {
  //
  return describe(FeColorMatrix.name, SvgTags.feColorMatrix,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// FeComponentTransfer

export function FeComponentTransfer<M = unknown, D = unknown>(
  setup: Script<El<SVGFEComponentTransferElement, M, D>>): ReactiveTreeNode<El<SVGFEComponentTransferElement, M, D>>

export function FeComponentTransfer<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEComponentTransferElement, M, D>>): ReactiveTreeNode<El<SVGFEComponentTransferElement, M, D>>

export function FeComponentTransfer<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEComponentTransferElement, M, D>>): ReactiveTreeNode<El<SVGFEComponentTransferElement, M, D>>

export function FeComponentTransfer<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEComponentTransferElement, M, D>>): ReactiveTreeNode<El<SVGFEComponentTransferElement, M, D>>

export function FeComponentTransfer<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEComponentTransferElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEComponentTransferElement, M, D>>,
  creation?: Script<El<SVGFEComponentTransferElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEComponentTransferElement, M, D>>,
  mounting?: Script<El<SVGFEComponentTransferElement, M, D>>,
  destruction?: Script<El<SVGFEComponentTransferElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEComponentTransferElement, M, D>>): ReactiveTreeNode<El<SVGFEComponentTransferElement, M, D>>

export function FeComponentTransfer<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEComponentTransferElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEComponentTransferElement, M, D>>,
  setupOrMode?: Script<El<SVGFEComponentTransferElement, M, D>> | Mode,
  setup?: Script<El<SVGFEComponentTransferElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEComponentTransferElement, M, D>>,
  creation?: Script<El<SVGFEComponentTransferElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEComponentTransferElement, M, D>>,
  mounting?: Script<El<SVGFEComponentTransferElement, M, D>>,
  destruction?: Script<El<SVGFEComponentTransferElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEComponentTransferElement, M, D>>): ReactiveTreeNode<El<SVGFEComponentTransferElement, M, D>> {
  //
  return describe(FeComponentTransfer.name, SvgTags.feComponentTransfer,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// FeComposite

export function FeComposite<M = unknown, D = unknown>(
  setup: Script<El<SVGFECompositeElement, M, D>>): ReactiveTreeNode<El<SVGFECompositeElement, M, D>>

export function FeComposite<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFECompositeElement, M, D>>): ReactiveTreeNode<El<SVGFECompositeElement, M, D>>

export function FeComposite<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFECompositeElement, M, D>>): ReactiveTreeNode<El<SVGFECompositeElement, M, D>>

export function FeComposite<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFECompositeElement, M, D>>): ReactiveTreeNode<El<SVGFECompositeElement, M, D>>

export function FeComposite<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFECompositeElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFECompositeElement, M, D>>,
  creation?: Script<El<SVGFECompositeElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFECompositeElement, M, D>>,
  mounting?: Script<El<SVGFECompositeElement, M, D>>,
  destruction?: Script<El<SVGFECompositeElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFECompositeElement, M, D>>): ReactiveTreeNode<El<SVGFECompositeElement, M, D>>

export function FeComposite<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFECompositeElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFECompositeElement, M, D>>,
  setupOrMode?: Script<El<SVGFECompositeElement, M, D>> | Mode,
  setup?: Script<El<SVGFECompositeElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFECompositeElement, M, D>>,
  creation?: Script<El<SVGFECompositeElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFECompositeElement, M, D>>,
  mounting?: Script<El<SVGFECompositeElement, M, D>>,
  destruction?: Script<El<SVGFECompositeElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFECompositeElement, M, D>>): ReactiveTreeNode<El<SVGFECompositeElement, M, D>> {
  //
  return describe(FeComposite.name, SvgTags.feComposite,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// FeConvolveMatrix

export function FeConvolveMatrix<M = unknown, D = unknown>(
  setup: Script<El<SVGFEConvolveMatrixElement, M, D>>): ReactiveTreeNode<El<SVGFEConvolveMatrixElement, M, D>>

export function FeConvolveMatrix<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEConvolveMatrixElement, M, D>>): ReactiveTreeNode<El<SVGFEConvolveMatrixElement, M, D>>

export function FeConvolveMatrix<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEConvolveMatrixElement, M, D>>): ReactiveTreeNode<El<SVGFEConvolveMatrixElement, M, D>>

export function FeConvolveMatrix<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEConvolveMatrixElement, M, D>>): ReactiveTreeNode<El<SVGFEConvolveMatrixElement, M, D>>

export function FeConvolveMatrix<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEConvolveMatrixElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEConvolveMatrixElement, M, D>>,
  creation?: Script<El<SVGFEConvolveMatrixElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEConvolveMatrixElement, M, D>>,
  mounting?: Script<El<SVGFEConvolveMatrixElement, M, D>>,
  destruction?: Script<El<SVGFEConvolveMatrixElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEConvolveMatrixElement, M, D>>): ReactiveTreeNode<El<SVGFEConvolveMatrixElement, M, D>>

export function FeConvolveMatrix<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEConvolveMatrixElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEConvolveMatrixElement, M, D>>,
  setupOrMode?: Script<El<SVGFEConvolveMatrixElement, M, D>> | Mode,
  setup?: Script<El<SVGFEConvolveMatrixElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEConvolveMatrixElement, M, D>>,
  creation?: Script<El<SVGFEConvolveMatrixElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEConvolveMatrixElement, M, D>>,
  mounting?: Script<El<SVGFEConvolveMatrixElement, M, D>>,
  destruction?: Script<El<SVGFEConvolveMatrixElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEConvolveMatrixElement, M, D>>): ReactiveTreeNode<El<SVGFEConvolveMatrixElement, M, D>> {
  //
  return describe(FeConvolveMatrix.name, SvgTags.feConvolveMatrix,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// FeDiffuseLighting

export function FeDiffuseLighting<M = unknown, D = unknown>(
  setup: Script<El<SVGFEDiffuseLightingElement, M, D>>): ReactiveTreeNode<El<SVGFEDiffuseLightingElement, M, D>>

export function FeDiffuseLighting<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEDiffuseLightingElement, M, D>>): ReactiveTreeNode<El<SVGFEDiffuseLightingElement, M, D>>

export function FeDiffuseLighting<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEDiffuseLightingElement, M, D>>): ReactiveTreeNode<El<SVGFEDiffuseLightingElement, M, D>>

export function FeDiffuseLighting<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEDiffuseLightingElement, M, D>>): ReactiveTreeNode<El<SVGFEDiffuseLightingElement, M, D>>

export function FeDiffuseLighting<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEDiffuseLightingElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEDiffuseLightingElement, M, D>>,
  creation?: Script<El<SVGFEDiffuseLightingElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEDiffuseLightingElement, M, D>>,
  mounting?: Script<El<SVGFEDiffuseLightingElement, M, D>>,
  destruction?: Script<El<SVGFEDiffuseLightingElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDiffuseLightingElement, M, D>>): ReactiveTreeNode<El<SVGFEDiffuseLightingElement, M, D>>

export function FeDiffuseLighting<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEDiffuseLightingElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEDiffuseLightingElement, M, D>>,
  setupOrMode?: Script<El<SVGFEDiffuseLightingElement, M, D>> | Mode,
  setup?: Script<El<SVGFEDiffuseLightingElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEDiffuseLightingElement, M, D>>,
  creation?: Script<El<SVGFEDiffuseLightingElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEDiffuseLightingElement, M, D>>,
  mounting?: Script<El<SVGFEDiffuseLightingElement, M, D>>,
  destruction?: Script<El<SVGFEDiffuseLightingElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDiffuseLightingElement, M, D>>): ReactiveTreeNode<El<SVGFEDiffuseLightingElement, M, D>> {
  //
  return describe(FeDiffuseLighting.name, SvgTags.feDiffuseLighting,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// FeDisplacementMap

export function FeDisplacementMap<M = unknown, D = unknown>(
  setup: Script<El<SVGFEDisplacementMapElement, M, D>>): ReactiveTreeNode<El<SVGFEDisplacementMapElement, M, D>>

export function FeDisplacementMap<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEDisplacementMapElement, M, D>>): ReactiveTreeNode<El<SVGFEDisplacementMapElement, M, D>>

export function FeDisplacementMap<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEDisplacementMapElement, M, D>>): ReactiveTreeNode<El<SVGFEDisplacementMapElement, M, D>>

export function FeDisplacementMap<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEDisplacementMapElement, M, D>>): ReactiveTreeNode<El<SVGFEDisplacementMapElement, M, D>>

export function FeDisplacementMap<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEDisplacementMapElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEDisplacementMapElement, M, D>>,
  creation?: Script<El<SVGFEDisplacementMapElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEDisplacementMapElement, M, D>>,
  mounting?: Script<El<SVGFEDisplacementMapElement, M, D>>,
  destruction?: Script<El<SVGFEDisplacementMapElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDisplacementMapElement, M, D>>): ReactiveTreeNode<El<SVGFEDisplacementMapElement, M, D>>

export function FeDisplacementMap<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEDisplacementMapElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEDisplacementMapElement, M, D>>,
  setupOrMode?: Script<El<SVGFEDisplacementMapElement, M, D>> | Mode,
  setup?: Script<El<SVGFEDisplacementMapElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEDisplacementMapElement, M, D>>,
  creation?: Script<El<SVGFEDisplacementMapElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEDisplacementMapElement, M, D>>,
  mounting?: Script<El<SVGFEDisplacementMapElement, M, D>>,
  destruction?: Script<El<SVGFEDisplacementMapElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDisplacementMapElement, M, D>>): ReactiveTreeNode<El<SVGFEDisplacementMapElement, M, D>> {
  //
  return describe(FeDisplacementMap.name, SvgTags.feDisplacementMap,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// FeDistantLight

export function FeDistantLight<M = unknown, D = unknown>(
  setup: Script<El<SVGFEDistantLightElement, M, D>>): ReactiveTreeNode<El<SVGFEDistantLightElement, M, D>>

export function FeDistantLight<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEDistantLightElement, M, D>>): ReactiveTreeNode<El<SVGFEDistantLightElement, M, D>>

export function FeDistantLight<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEDistantLightElement, M, D>>): ReactiveTreeNode<El<SVGFEDistantLightElement, M, D>>

export function FeDistantLight<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEDistantLightElement, M, D>>): ReactiveTreeNode<El<SVGFEDistantLightElement, M, D>>

export function FeDistantLight<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEDistantLightElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEDistantLightElement, M, D>>,
  creation?: Script<El<SVGFEDistantLightElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEDistantLightElement, M, D>>,
  mounting?: Script<El<SVGFEDistantLightElement, M, D>>,
  destruction?: Script<El<SVGFEDistantLightElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDistantLightElement, M, D>>): ReactiveTreeNode<El<SVGFEDistantLightElement, M, D>>

export function FeDistantLight<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEDistantLightElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEDistantLightElement, M, D>>,
  setupOrMode?: Script<El<SVGFEDistantLightElement, M, D>> | Mode,
  setup?: Script<El<SVGFEDistantLightElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEDistantLightElement, M, D>>,
  creation?: Script<El<SVGFEDistantLightElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEDistantLightElement, M, D>>,
  mounting?: Script<El<SVGFEDistantLightElement, M, D>>,
  destruction?: Script<El<SVGFEDistantLightElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDistantLightElement, M, D>>): ReactiveTreeNode<El<SVGFEDistantLightElement, M, D>> {
  //
  return describe(FeDistantLight.name, SvgTags.feDistantLight,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// FeDropShadow

export function FeDropShadow<M = unknown, D = unknown>(
  setup: Script<El<SVGFEDropShadowElement, M, D>>): ReactiveTreeNode<El<SVGFEDropShadowElement, M, D>>

export function FeDropShadow<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEDropShadowElement, M, D>>): ReactiveTreeNode<El<SVGFEDropShadowElement, M, D>>

export function FeDropShadow<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEDropShadowElement, M, D>>): ReactiveTreeNode<El<SVGFEDropShadowElement, M, D>>

export function FeDropShadow<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEDropShadowElement, M, D>>): ReactiveTreeNode<El<SVGFEDropShadowElement, M, D>>

export function FeDropShadow<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEDropShadowElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEDropShadowElement, M, D>>,
  creation?: Script<El<SVGFEDropShadowElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEDropShadowElement, M, D>>,
  mounting?: Script<El<SVGFEDropShadowElement, M, D>>,
  destruction?: Script<El<SVGFEDropShadowElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDropShadowElement, M, D>>): ReactiveTreeNode<El<SVGFEDropShadowElement, M, D>>

export function FeDropShadow<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEDropShadowElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEDropShadowElement, M, D>>,
  setupOrMode?: Script<El<SVGFEDropShadowElement, M, D>> | Mode,
  setup?: Script<El<SVGFEDropShadowElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEDropShadowElement, M, D>>,
  creation?: Script<El<SVGFEDropShadowElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEDropShadowElement, M, D>>,
  mounting?: Script<El<SVGFEDropShadowElement, M, D>>,
  destruction?: Script<El<SVGFEDropShadowElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEDropShadowElement, M, D>>): ReactiveTreeNode<El<SVGFEDropShadowElement, M, D>> {
  //
  return describe(FeDropShadow.name, SvgTags.feDropShadow,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// FeFlood

export function FeFlood<M = unknown, D = unknown>(
  setup: Script<El<SVGFEFloodElement, M, D>>): ReactiveTreeNode<El<SVGFEFloodElement, M, D>>

export function FeFlood<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEFloodElement, M, D>>): ReactiveTreeNode<El<SVGFEFloodElement, M, D>>

export function FeFlood<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEFloodElement, M, D>>): ReactiveTreeNode<El<SVGFEFloodElement, M, D>>

export function FeFlood<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEFloodElement, M, D>>): ReactiveTreeNode<El<SVGFEFloodElement, M, D>>

export function FeFlood<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEFloodElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEFloodElement, M, D>>,
  creation?: Script<El<SVGFEFloodElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEFloodElement, M, D>>,
  mounting?: Script<El<SVGFEFloodElement, M, D>>,
  destruction?: Script<El<SVGFEFloodElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFloodElement, M, D>>): ReactiveTreeNode<El<SVGFEFloodElement, M, D>>

export function FeFlood<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEFloodElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEFloodElement, M, D>>,
  setupOrMode?: Script<El<SVGFEFloodElement, M, D>> | Mode,
  setup?: Script<El<SVGFEFloodElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEFloodElement, M, D>>,
  creation?: Script<El<SVGFEFloodElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEFloodElement, M, D>>,
  mounting?: Script<El<SVGFEFloodElement, M, D>>,
  destruction?: Script<El<SVGFEFloodElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFloodElement, M, D>>): ReactiveTreeNode<El<SVGFEFloodElement, M, D>> {
  //
  return describe(FeFlood.name, SvgTags.feFlood,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// FeFuncA

export function FeFuncA<M = unknown, D = unknown>(
  setup: Script<El<SVGFEFuncAElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncAElement, M, D>>

export function FeFuncA<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEFuncAElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncAElement, M, D>>

export function FeFuncA<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEFuncAElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncAElement, M, D>>

export function FeFuncA<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEFuncAElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncAElement, M, D>>

export function FeFuncA<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEFuncAElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEFuncAElement, M, D>>,
  creation?: Script<El<SVGFEFuncAElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEFuncAElement, M, D>>,
  mounting?: Script<El<SVGFEFuncAElement, M, D>>,
  destruction?: Script<El<SVGFEFuncAElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncAElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncAElement, M, D>>

export function FeFuncA<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEFuncAElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEFuncAElement, M, D>>,
  setupOrMode?: Script<El<SVGFEFuncAElement, M, D>> | Mode,
  setup?: Script<El<SVGFEFuncAElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEFuncAElement, M, D>>,
  creation?: Script<El<SVGFEFuncAElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEFuncAElement, M, D>>,
  mounting?: Script<El<SVGFEFuncAElement, M, D>>,
  destruction?: Script<El<SVGFEFuncAElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncAElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncAElement, M, D>> {
  //
  return describe(FeFuncA.name, SvgTags.feFuncA,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// FeFuncB

export function FeFuncB<M = unknown, D = unknown>(
  setup: Script<El<SVGFEFuncBElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncBElement, M, D>>

export function FeFuncB<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEFuncBElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncBElement, M, D>>

export function FeFuncB<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEFuncBElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncBElement, M, D>>

export function FeFuncB<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEFuncBElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncBElement, M, D>>

export function FeFuncB<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEFuncBElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEFuncBElement, M, D>>,
  creation?: Script<El<SVGFEFuncBElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEFuncBElement, M, D>>,
  mounting?: Script<El<SVGFEFuncBElement, M, D>>,
  destruction?: Script<El<SVGFEFuncBElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncBElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncBElement, M, D>>

export function FeFuncB<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEFuncBElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEFuncBElement, M, D>>,
  setupOrMode?: Script<El<SVGFEFuncBElement, M, D>> | Mode,
  setup?: Script<El<SVGFEFuncBElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEFuncBElement, M, D>>,
  creation?: Script<El<SVGFEFuncBElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEFuncBElement, M, D>>,
  mounting?: Script<El<SVGFEFuncBElement, M, D>>,
  destruction?: Script<El<SVGFEFuncBElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncBElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncBElement, M, D>> {
  //
  return describe(FeFuncB.name, SvgTags.feFuncB,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// FeFuncG

export function FeFuncG<M = unknown, D = unknown>(
  setup: Script<El<SVGFEFuncGElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncGElement, M, D>>

export function FeFuncG<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEFuncGElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncGElement, M, D>>

export function FeFuncG<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEFuncGElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncGElement, M, D>>

export function FeFuncG<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEFuncGElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncGElement, M, D>>

export function FeFuncG<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEFuncGElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEFuncGElement, M, D>>,
  creation?: Script<El<SVGFEFuncGElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEFuncGElement, M, D>>,
  mounting?: Script<El<SVGFEFuncGElement, M, D>>,
  destruction?: Script<El<SVGFEFuncGElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncGElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncGElement, M, D>>

export function FeFuncG<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEFuncGElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEFuncGElement, M, D>>,
  setupOrMode?: Script<El<SVGFEFuncGElement, M, D>> | Mode,
  setup?: Script<El<SVGFEFuncGElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEFuncGElement, M, D>>,
  creation?: Script<El<SVGFEFuncGElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEFuncGElement, M, D>>,
  mounting?: Script<El<SVGFEFuncGElement, M, D>>,
  destruction?: Script<El<SVGFEFuncGElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncGElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncGElement, M, D>> {
  //
  return describe(FeFuncG.name, SvgTags.feFuncG,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// FeFuncR

export function FeFuncR<M = unknown, D = unknown>(
  setup: Script<El<SVGFEFuncRElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncRElement, M, D>>

export function FeFuncR<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEFuncRElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncRElement, M, D>>

export function FeFuncR<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEFuncRElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncRElement, M, D>>

export function FeFuncR<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEFuncRElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncRElement, M, D>>

export function FeFuncR<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEFuncRElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEFuncRElement, M, D>>,
  creation?: Script<El<SVGFEFuncRElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEFuncRElement, M, D>>,
  mounting?: Script<El<SVGFEFuncRElement, M, D>>,
  destruction?: Script<El<SVGFEFuncRElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncRElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncRElement, M, D>>

export function FeFuncR<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEFuncRElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEFuncRElement, M, D>>,
  setupOrMode?: Script<El<SVGFEFuncRElement, M, D>> | Mode,
  setup?: Script<El<SVGFEFuncRElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEFuncRElement, M, D>>,
  creation?: Script<El<SVGFEFuncRElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEFuncRElement, M, D>>,
  mounting?: Script<El<SVGFEFuncRElement, M, D>>,
  destruction?: Script<El<SVGFEFuncRElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEFuncRElement, M, D>>): ReactiveTreeNode<El<SVGFEFuncRElement, M, D>> {
  //
  return describe(FeFuncR.name, SvgTags.feFuncR,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// FeGaussianBlur

export function FeGaussianBlur<M = unknown, D = unknown>(
  setup: Script<El<SVGFEGaussianBlurElement, M, D>>): ReactiveTreeNode<El<SVGFEGaussianBlurElement, M, D>>

export function FeGaussianBlur<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEGaussianBlurElement, M, D>>): ReactiveTreeNode<El<SVGFEGaussianBlurElement, M, D>>

export function FeGaussianBlur<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEGaussianBlurElement, M, D>>): ReactiveTreeNode<El<SVGFEGaussianBlurElement, M, D>>

export function FeGaussianBlur<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEGaussianBlurElement, M, D>>): ReactiveTreeNode<El<SVGFEGaussianBlurElement, M, D>>

export function FeGaussianBlur<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEGaussianBlurElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEGaussianBlurElement, M, D>>,
  creation?: Script<El<SVGFEGaussianBlurElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEGaussianBlurElement, M, D>>,
  mounting?: Script<El<SVGFEGaussianBlurElement, M, D>>,
  destruction?: Script<El<SVGFEGaussianBlurElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEGaussianBlurElement, M, D>>): ReactiveTreeNode<El<SVGFEGaussianBlurElement, M, D>>

export function FeGaussianBlur<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEGaussianBlurElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEGaussianBlurElement, M, D>>,
  setupOrMode?: Script<El<SVGFEGaussianBlurElement, M, D>> | Mode,
  setup?: Script<El<SVGFEGaussianBlurElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEGaussianBlurElement, M, D>>,
  creation?: Script<El<SVGFEGaussianBlurElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEGaussianBlurElement, M, D>>,
  mounting?: Script<El<SVGFEGaussianBlurElement, M, D>>,
  destruction?: Script<El<SVGFEGaussianBlurElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEGaussianBlurElement, M, D>>): ReactiveTreeNode<El<SVGFEGaussianBlurElement, M, D>> {
  //
  return describe(FeGaussianBlur.name, SvgTags.feGaussianBlur,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// FeImage

export function FeImage<M = unknown, D = unknown>(
  setup: Script<El<SVGFEImageElement, M, D>>): ReactiveTreeNode<El<SVGFEImageElement, M, D>>

export function FeImage<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEImageElement, M, D>>): ReactiveTreeNode<El<SVGFEImageElement, M, D>>

export function FeImage<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEImageElement, M, D>>): ReactiveTreeNode<El<SVGFEImageElement, M, D>>

export function FeImage<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEImageElement, M, D>>): ReactiveTreeNode<El<SVGFEImageElement, M, D>>

export function FeImage<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEImageElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEImageElement, M, D>>,
  creation?: Script<El<SVGFEImageElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEImageElement, M, D>>,
  mounting?: Script<El<SVGFEImageElement, M, D>>,
  destruction?: Script<El<SVGFEImageElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEImageElement, M, D>>): ReactiveTreeNode<El<SVGFEImageElement, M, D>>

export function FeImage<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEImageElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEImageElement, M, D>>,
  setupOrMode?: Script<El<SVGFEImageElement, M, D>> | Mode,
  setup?: Script<El<SVGFEImageElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEImageElement, M, D>>,
  creation?: Script<El<SVGFEImageElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEImageElement, M, D>>,
  mounting?: Script<El<SVGFEImageElement, M, D>>,
  destruction?: Script<El<SVGFEImageElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEImageElement, M, D>>): ReactiveTreeNode<El<SVGFEImageElement, M, D>> {
  //
  return describe(FeImage.name, SvgTags.feImage,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// FeMerge

export function FeMerge<M = unknown, D = unknown>(
  setup: Script<El<SVGFEMergeElement, M, D>>): ReactiveTreeNode<El<SVGFEMergeElement, M, D>>

export function FeMerge<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEMergeElement, M, D>>): ReactiveTreeNode<El<SVGFEMergeElement, M, D>>

export function FeMerge<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEMergeElement, M, D>>): ReactiveTreeNode<El<SVGFEMergeElement, M, D>>

export function FeMerge<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEMergeElement, M, D>>): ReactiveTreeNode<El<SVGFEMergeElement, M, D>>

export function FeMerge<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEMergeElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEMergeElement, M, D>>,
  creation?: Script<El<SVGFEMergeElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEMergeElement, M, D>>,
  mounting?: Script<El<SVGFEMergeElement, M, D>>,
  destruction?: Script<El<SVGFEMergeElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEMergeElement, M, D>>): ReactiveTreeNode<El<SVGFEMergeElement, M, D>>

export function FeMerge<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEMergeElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEMergeElement, M, D>>,
  setupOrMode?: Script<El<SVGFEMergeElement, M, D>> | Mode,
  setup?: Script<El<SVGFEMergeElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEMergeElement, M, D>>,
  creation?: Script<El<SVGFEMergeElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEMergeElement, M, D>>,
  mounting?: Script<El<SVGFEMergeElement, M, D>>,
  destruction?: Script<El<SVGFEMergeElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEMergeElement, M, D>>): ReactiveTreeNode<El<SVGFEMergeElement, M, D>> {
  //
  return describe(FeMerge.name, SvgTags.feMerge,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// FeMergeNode

export function FeMergeNode<M = unknown, D = unknown>(
  setup: Script<El<SVGFEMergeNodeElement, M, D>>): ReactiveTreeNode<El<SVGFEMergeNodeElement, M, D>>

export function FeMergeNode<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEMergeNodeElement, M, D>>): ReactiveTreeNode<El<SVGFEMergeNodeElement, M, D>>

export function FeMergeNode<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEMergeNodeElement, M, D>>): ReactiveTreeNode<El<SVGFEMergeNodeElement, M, D>>

export function FeMergeNode<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEMergeNodeElement, M, D>>): ReactiveTreeNode<El<SVGFEMergeNodeElement, M, D>>

export function FeMergeNode<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEMergeNodeElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEMergeNodeElement, M, D>>,
  creation?: Script<El<SVGFEMergeNodeElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEMergeNodeElement, M, D>>,
  mounting?: Script<El<SVGFEMergeNodeElement, M, D>>,
  destruction?: Script<El<SVGFEMergeNodeElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEMergeNodeElement, M, D>>): ReactiveTreeNode<El<SVGFEMergeNodeElement, M, D>>

export function FeMergeNode<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEMergeNodeElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEMergeNodeElement, M, D>>,
  setupOrMode?: Script<El<SVGFEMergeNodeElement, M, D>> | Mode,
  setup?: Script<El<SVGFEMergeNodeElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEMergeNodeElement, M, D>>,
  creation?: Script<El<SVGFEMergeNodeElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEMergeNodeElement, M, D>>,
  mounting?: Script<El<SVGFEMergeNodeElement, M, D>>,
  destruction?: Script<El<SVGFEMergeNodeElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEMergeNodeElement, M, D>>): ReactiveTreeNode<El<SVGFEMergeNodeElement, M, D>> {
  //
  return describe(FeMergeNode.name, SvgTags.feMergeNode,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// FeMorphology

export function FeMorphology<M = unknown, D = unknown>(
  setup: Script<El<SVGFEMorphologyElement, M, D>>): ReactiveTreeNode<El<SVGFEMorphologyElement, M, D>>

export function FeMorphology<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEMorphologyElement, M, D>>): ReactiveTreeNode<El<SVGFEMorphologyElement, M, D>>

export function FeMorphology<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEMorphologyElement, M, D>>): ReactiveTreeNode<El<SVGFEMorphologyElement, M, D>>

export function FeMorphology<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEMorphologyElement, M, D>>): ReactiveTreeNode<El<SVGFEMorphologyElement, M, D>>

export function FeMorphology<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEMorphologyElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEMorphologyElement, M, D>>,
  creation?: Script<El<SVGFEMorphologyElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEMorphologyElement, M, D>>,
  mounting?: Script<El<SVGFEMorphologyElement, M, D>>,
  destruction?: Script<El<SVGFEMorphologyElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEMorphologyElement, M, D>>): ReactiveTreeNode<El<SVGFEMorphologyElement, M, D>>

export function FeMorphology<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEMorphologyElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEMorphologyElement, M, D>>,
  setupOrMode?: Script<El<SVGFEMorphologyElement, M, D>> | Mode,
  setup?: Script<El<SVGFEMorphologyElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEMorphologyElement, M, D>>,
  creation?: Script<El<SVGFEMorphologyElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEMorphologyElement, M, D>>,
  mounting?: Script<El<SVGFEMorphologyElement, M, D>>,
  destruction?: Script<El<SVGFEMorphologyElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEMorphologyElement, M, D>>): ReactiveTreeNode<El<SVGFEMorphologyElement, M, D>> {
  //
  return describe(FeMorphology.name, SvgTags.feMorphology,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// FeOffset

export function FeOffset<M = unknown, D = unknown>(
  setup: Script<El<SVGFEOffsetElement, M, D>>): ReactiveTreeNode<El<SVGFEOffsetElement, M, D>>

export function FeOffset<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEOffsetElement, M, D>>): ReactiveTreeNode<El<SVGFEOffsetElement, M, D>>

export function FeOffset<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEOffsetElement, M, D>>): ReactiveTreeNode<El<SVGFEOffsetElement, M, D>>

export function FeOffset<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEOffsetElement, M, D>>): ReactiveTreeNode<El<SVGFEOffsetElement, M, D>>

export function FeOffset<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEOffsetElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEOffsetElement, M, D>>,
  creation?: Script<El<SVGFEOffsetElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEOffsetElement, M, D>>,
  mounting?: Script<El<SVGFEOffsetElement, M, D>>,
  destruction?: Script<El<SVGFEOffsetElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEOffsetElement, M, D>>): ReactiveTreeNode<El<SVGFEOffsetElement, M, D>>

export function FeOffset<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEOffsetElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEOffsetElement, M, D>>,
  setupOrMode?: Script<El<SVGFEOffsetElement, M, D>> | Mode,
  setup?: Script<El<SVGFEOffsetElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEOffsetElement, M, D>>,
  creation?: Script<El<SVGFEOffsetElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEOffsetElement, M, D>>,
  mounting?: Script<El<SVGFEOffsetElement, M, D>>,
  destruction?: Script<El<SVGFEOffsetElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEOffsetElement, M, D>>): ReactiveTreeNode<El<SVGFEOffsetElement, M, D>> {
  //
  return describe(FeOffset.name, SvgTags.feOffset,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// FePointLight

export function FePointLight<M = unknown, D = unknown>(
  setup: Script<El<SVGFEPointLightElement, M, D>>): ReactiveTreeNode<El<SVGFEPointLightElement, M, D>>

export function FePointLight<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFEPointLightElement, M, D>>): ReactiveTreeNode<El<SVGFEPointLightElement, M, D>>

export function FePointLight<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFEPointLightElement, M, D>>): ReactiveTreeNode<El<SVGFEPointLightElement, M, D>>

export function FePointLight<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFEPointLightElement, M, D>>): ReactiveTreeNode<El<SVGFEPointLightElement, M, D>>

export function FePointLight<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFEPointLightElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEPointLightElement, M, D>>,
  creation?: Script<El<SVGFEPointLightElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEPointLightElement, M, D>>,
  mounting?: Script<El<SVGFEPointLightElement, M, D>>,
  destruction?: Script<El<SVGFEPointLightElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEPointLightElement, M, D>>): ReactiveTreeNode<El<SVGFEPointLightElement, M, D>>

export function FePointLight<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFEPointLightElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFEPointLightElement, M, D>>,
  setupOrMode?: Script<El<SVGFEPointLightElement, M, D>> | Mode,
  setup?: Script<El<SVGFEPointLightElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFEPointLightElement, M, D>>,
  creation?: Script<El<SVGFEPointLightElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFEPointLightElement, M, D>>,
  mounting?: Script<El<SVGFEPointLightElement, M, D>>,
  destruction?: Script<El<SVGFEPointLightElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFEPointLightElement, M, D>>): ReactiveTreeNode<El<SVGFEPointLightElement, M, D>> {
  //
  return describe(FePointLight.name, SvgTags.fePointLight,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// FeSpecularLighting

export function FeSpecularLighting<M = unknown, D = unknown>(
  setup: Script<El<SVGFESpecularLightingElement, M, D>>): ReactiveTreeNode<El<SVGFESpecularLightingElement, M, D>>

export function FeSpecularLighting<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFESpecularLightingElement, M, D>>): ReactiveTreeNode<El<SVGFESpecularLightingElement, M, D>>

export function FeSpecularLighting<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFESpecularLightingElement, M, D>>): ReactiveTreeNode<El<SVGFESpecularLightingElement, M, D>>

export function FeSpecularLighting<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFESpecularLightingElement, M, D>>): ReactiveTreeNode<El<SVGFESpecularLightingElement, M, D>>

export function FeSpecularLighting<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFESpecularLightingElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFESpecularLightingElement, M, D>>,
  creation?: Script<El<SVGFESpecularLightingElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFESpecularLightingElement, M, D>>,
  mounting?: Script<El<SVGFESpecularLightingElement, M, D>>,
  destruction?: Script<El<SVGFESpecularLightingElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFESpecularLightingElement, M, D>>): ReactiveTreeNode<El<SVGFESpecularLightingElement, M, D>>

export function FeSpecularLighting<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFESpecularLightingElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFESpecularLightingElement, M, D>>,
  setupOrMode?: Script<El<SVGFESpecularLightingElement, M, D>> | Mode,
  setup?: Script<El<SVGFESpecularLightingElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFESpecularLightingElement, M, D>>,
  creation?: Script<El<SVGFESpecularLightingElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFESpecularLightingElement, M, D>>,
  mounting?: Script<El<SVGFESpecularLightingElement, M, D>>,
  destruction?: Script<El<SVGFESpecularLightingElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFESpecularLightingElement, M, D>>): ReactiveTreeNode<El<SVGFESpecularLightingElement, M, D>> {
  //
  return describe(FeSpecularLighting.name, SvgTags.feSpecularLighting,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// FeSpotLight

export function FeSpotLight<M = unknown, D = unknown>(
  setup: Script<El<SVGFESpotLightElement, M, D>>): ReactiveTreeNode<El<SVGFESpotLightElement, M, D>>

export function FeSpotLight<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFESpotLightElement, M, D>>): ReactiveTreeNode<El<SVGFESpotLightElement, M, D>>

export function FeSpotLight<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFESpotLightElement, M, D>>): ReactiveTreeNode<El<SVGFESpotLightElement, M, D>>

export function FeSpotLight<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFESpotLightElement, M, D>>): ReactiveTreeNode<El<SVGFESpotLightElement, M, D>>

export function FeSpotLight<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFESpotLightElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFESpotLightElement, M, D>>,
  creation?: Script<El<SVGFESpotLightElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFESpotLightElement, M, D>>,
  mounting?: Script<El<SVGFESpotLightElement, M, D>>,
  destruction?: Script<El<SVGFESpotLightElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFESpotLightElement, M, D>>): ReactiveTreeNode<El<SVGFESpotLightElement, M, D>>

export function FeSpotLight<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFESpotLightElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFESpotLightElement, M, D>>,
  setupOrMode?: Script<El<SVGFESpotLightElement, M, D>> | Mode,
  setup?: Script<El<SVGFESpotLightElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFESpotLightElement, M, D>>,
  creation?: Script<El<SVGFESpotLightElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFESpotLightElement, M, D>>,
  mounting?: Script<El<SVGFESpotLightElement, M, D>>,
  destruction?: Script<El<SVGFESpotLightElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFESpotLightElement, M, D>>): ReactiveTreeNode<El<SVGFESpotLightElement, M, D>> {
  //
  return describe(FeSpotLight.name, SvgTags.feSpotLight,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// FeTile

export function FeTile<M = unknown, D = unknown>(
  setup: Script<El<SVGFETileElement, M, D>>): ReactiveTreeNode<El<SVGFETileElement, M, D>>

export function FeTile<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFETileElement, M, D>>): ReactiveTreeNode<El<SVGFETileElement, M, D>>

export function FeTile<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFETileElement, M, D>>): ReactiveTreeNode<El<SVGFETileElement, M, D>>

export function FeTile<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFETileElement, M, D>>): ReactiveTreeNode<El<SVGFETileElement, M, D>>

export function FeTile<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFETileElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFETileElement, M, D>>,
  creation?: Script<El<SVGFETileElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFETileElement, M, D>>,
  mounting?: Script<El<SVGFETileElement, M, D>>,
  destruction?: Script<El<SVGFETileElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFETileElement, M, D>>): ReactiveTreeNode<El<SVGFETileElement, M, D>>

export function FeTile<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFETileElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFETileElement, M, D>>,
  setupOrMode?: Script<El<SVGFETileElement, M, D>> | Mode,
  setup?: Script<El<SVGFETileElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFETileElement, M, D>>,
  creation?: Script<El<SVGFETileElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFETileElement, M, D>>,
  mounting?: Script<El<SVGFETileElement, M, D>>,
  destruction?: Script<El<SVGFETileElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFETileElement, M, D>>): ReactiveTreeNode<El<SVGFETileElement, M, D>> {
  //
  return describe(FeTile.name, SvgTags.feTile,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// FeTurbulence

export function FeTurbulence<M = unknown, D = unknown>(
  setup: Script<El<SVGFETurbulenceElement, M, D>>): ReactiveTreeNode<El<SVGFETurbulenceElement, M, D>>

export function FeTurbulence<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFETurbulenceElement, M, D>>): ReactiveTreeNode<El<SVGFETurbulenceElement, M, D>>

export function FeTurbulence<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFETurbulenceElement, M, D>>): ReactiveTreeNode<El<SVGFETurbulenceElement, M, D>>

export function FeTurbulence<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFETurbulenceElement, M, D>>): ReactiveTreeNode<El<SVGFETurbulenceElement, M, D>>

export function FeTurbulence<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFETurbulenceElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFETurbulenceElement, M, D>>,
  creation?: Script<El<SVGFETurbulenceElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFETurbulenceElement, M, D>>,
  mounting?: Script<El<SVGFETurbulenceElement, M, D>>,
  destruction?: Script<El<SVGFETurbulenceElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFETurbulenceElement, M, D>>): ReactiveTreeNode<El<SVGFETurbulenceElement, M, D>>

export function FeTurbulence<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFETurbulenceElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFETurbulenceElement, M, D>>,
  setupOrMode?: Script<El<SVGFETurbulenceElement, M, D>> | Mode,
  setup?: Script<El<SVGFETurbulenceElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFETurbulenceElement, M, D>>,
  creation?: Script<El<SVGFETurbulenceElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFETurbulenceElement, M, D>>,
  mounting?: Script<El<SVGFETurbulenceElement, M, D>>,
  destruction?: Script<El<SVGFETurbulenceElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFETurbulenceElement, M, D>>): ReactiveTreeNode<El<SVGFETurbulenceElement, M, D>> {
  //
  return describe(FeTurbulence.name, SvgTags.feTurbulence,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Filter

export function Filter<M = unknown, D = unknown>(
  setup: Script<El<SVGFilterElement, M, D>>): ReactiveTreeNode<El<SVGFilterElement, M, D>>

export function Filter<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGFilterElement, M, D>>): ReactiveTreeNode<El<SVGFilterElement, M, D>>

export function Filter<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGFilterElement, M, D>>): ReactiveTreeNode<El<SVGFilterElement, M, D>>

export function Filter<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGFilterElement, M, D>>): ReactiveTreeNode<El<SVGFilterElement, M, D>>

export function Filter<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGFilterElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFilterElement, M, D>>,
  creation?: Script<El<SVGFilterElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFilterElement, M, D>>,
  mounting?: Script<El<SVGFilterElement, M, D>>,
  destruction?: Script<El<SVGFilterElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFilterElement, M, D>>): ReactiveTreeNode<El<SVGFilterElement, M, D>>

export function Filter<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGFilterElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGFilterElement, M, D>>,
  setupOrMode?: Script<El<SVGFilterElement, M, D>> | Mode,
  setup?: Script<El<SVGFilterElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGFilterElement, M, D>>,
  creation?: Script<El<SVGFilterElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGFilterElement, M, D>>,
  mounting?: Script<El<SVGFilterElement, M, D>>,
  destruction?: Script<El<SVGFilterElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGFilterElement, M, D>>): ReactiveTreeNode<El<SVGFilterElement, M, D>> {
  //
  return describe(Filter.name, SvgTags.filter,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// ForeignObject

export function ForeignObject<M = unknown, D = unknown>(
  setup: Script<El<SVGForeignObjectElement, M, D>>): ReactiveTreeNode<El<SVGForeignObjectElement, M, D>>

export function ForeignObject<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGForeignObjectElement, M, D>>): ReactiveTreeNode<El<SVGForeignObjectElement, M, D>>

export function ForeignObject<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGForeignObjectElement, M, D>>): ReactiveTreeNode<El<SVGForeignObjectElement, M, D>>

export function ForeignObject<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGForeignObjectElement, M, D>>): ReactiveTreeNode<El<SVGForeignObjectElement, M, D>>

export function ForeignObject<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGForeignObjectElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGForeignObjectElement, M, D>>,
  creation?: Script<El<SVGForeignObjectElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGForeignObjectElement, M, D>>,
  mounting?: Script<El<SVGForeignObjectElement, M, D>>,
  destruction?: Script<El<SVGForeignObjectElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGForeignObjectElement, M, D>>): ReactiveTreeNode<El<SVGForeignObjectElement, M, D>>

export function ForeignObject<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGForeignObjectElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGForeignObjectElement, M, D>>,
  setupOrMode?: Script<El<SVGForeignObjectElement, M, D>> | Mode,
  setup?: Script<El<SVGForeignObjectElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGForeignObjectElement, M, D>>,
  creation?: Script<El<SVGForeignObjectElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGForeignObjectElement, M, D>>,
  mounting?: Script<El<SVGForeignObjectElement, M, D>>,
  destruction?: Script<El<SVGForeignObjectElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGForeignObjectElement, M, D>>): ReactiveTreeNode<El<SVGForeignObjectElement, M, D>> {
  //
  return describe(ForeignObject.name, SvgTags.foreignObject,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// G

export function G<M = unknown, D = unknown>(
  setup: Script<El<SVGGElement, M, D>>): ReactiveTreeNode<El<SVGGElement, M, D>>

export function G<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGGElement, M, D>>): ReactiveTreeNode<El<SVGGElement, M, D>>

export function G<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGGElement, M, D>>): ReactiveTreeNode<El<SVGGElement, M, D>>

export function G<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGGElement, M, D>>): ReactiveTreeNode<El<SVGGElement, M, D>>

export function G<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGGElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGGElement, M, D>>,
  creation?: Script<El<SVGGElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGGElement, M, D>>,
  mounting?: Script<El<SVGGElement, M, D>>,
  destruction?: Script<El<SVGGElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGGElement, M, D>>): ReactiveTreeNode<El<SVGGElement, M, D>>

export function G<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGGElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGGElement, M, D>>,
  setupOrMode?: Script<El<SVGGElement, M, D>> | Mode,
  setup?: Script<El<SVGGElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGGElement, M, D>>,
  creation?: Script<El<SVGGElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGGElement, M, D>>,
  mounting?: Script<El<SVGGElement, M, D>>,
  destruction?: Script<El<SVGGElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGGElement, M, D>>): ReactiveTreeNode<El<SVGGElement, M, D>> {
  //
  return describe(G.name, SvgTags.g,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// SvgImage

export function SvgImage<M = unknown, D = unknown>(
  setup: Script<El<SVGImageElement, M, D>>): ReactiveTreeNode<El<SVGImageElement, M, D>>

export function SvgImage<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGImageElement, M, D>>): ReactiveTreeNode<El<SVGImageElement, M, D>>

export function SvgImage<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGImageElement, M, D>>): ReactiveTreeNode<El<SVGImageElement, M, D>>

export function SvgImage<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGImageElement, M, D>>): ReactiveTreeNode<El<SVGImageElement, M, D>>

export function SvgImage<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGImageElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGImageElement, M, D>>,
  creation?: Script<El<SVGImageElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGImageElement, M, D>>,
  mounting?: Script<El<SVGImageElement, M, D>>,
  destruction?: Script<El<SVGImageElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGImageElement, M, D>>): ReactiveTreeNode<El<SVGImageElement, M, D>>

export function SvgImage<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGImageElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGImageElement, M, D>>,
  setupOrMode?: Script<El<SVGImageElement, M, D>> | Mode,
  setup?: Script<El<SVGImageElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGImageElement, M, D>>,
  creation?: Script<El<SVGImageElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGImageElement, M, D>>,
  mounting?: Script<El<SVGImageElement, M, D>>,
  destruction?: Script<El<SVGImageElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGImageElement, M, D>>): ReactiveTreeNode<El<SVGImageElement, M, D>> {
  //
  return describe(SvgImage.name, SvgTags.image,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// SvgLine

export function SvgLine<M = unknown, D = unknown>(
  setup: Script<El<SVGLineElement, M, D>>): ReactiveTreeNode<El<SVGLineElement, M, D>>

export function SvgLine<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGLineElement, M, D>>): ReactiveTreeNode<El<SVGLineElement, M, D>>

export function SvgLine<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGLineElement, M, D>>): ReactiveTreeNode<El<SVGLineElement, M, D>>

export function SvgLine<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGLineElement, M, D>>): ReactiveTreeNode<El<SVGLineElement, M, D>>

export function SvgLine<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGLineElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGLineElement, M, D>>,
  creation?: Script<El<SVGLineElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGLineElement, M, D>>,
  mounting?: Script<El<SVGLineElement, M, D>>,
  destruction?: Script<El<SVGLineElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGLineElement, M, D>>): ReactiveTreeNode<El<SVGLineElement, M, D>>

export function SvgLine<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGLineElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGLineElement, M, D>>,
  setupOrMode?: Script<El<SVGLineElement, M, D>> | Mode,
  setup?: Script<El<SVGLineElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGLineElement, M, D>>,
  creation?: Script<El<SVGLineElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGLineElement, M, D>>,
  mounting?: Script<El<SVGLineElement, M, D>>,
  destruction?: Script<El<SVGLineElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGLineElement, M, D>>): ReactiveTreeNode<El<SVGLineElement, M, D>> {
  //
  return describe(SvgLine.name, SvgTags.line,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// LinearGradient

export function LinearGradient<M = unknown, D = unknown>(
  setup: Script<El<SVGLinearGradientElement, M, D>>): ReactiveTreeNode<El<SVGLinearGradientElement, M, D>>

export function LinearGradient<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGLinearGradientElement, M, D>>): ReactiveTreeNode<El<SVGLinearGradientElement, M, D>>

export function LinearGradient<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGLinearGradientElement, M, D>>): ReactiveTreeNode<El<SVGLinearGradientElement, M, D>>

export function LinearGradient<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGLinearGradientElement, M, D>>): ReactiveTreeNode<El<SVGLinearGradientElement, M, D>>

export function LinearGradient<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGLinearGradientElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGLinearGradientElement, M, D>>,
  creation?: Script<El<SVGLinearGradientElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGLinearGradientElement, M, D>>,
  mounting?: Script<El<SVGLinearGradientElement, M, D>>,
  destruction?: Script<El<SVGLinearGradientElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGLinearGradientElement, M, D>>): ReactiveTreeNode<El<SVGLinearGradientElement, M, D>>

export function LinearGradient<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGLinearGradientElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGLinearGradientElement, M, D>>,
  setupOrMode?: Script<El<SVGLinearGradientElement, M, D>> | Mode,
  setup?: Script<El<SVGLinearGradientElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGLinearGradientElement, M, D>>,
  creation?: Script<El<SVGLinearGradientElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGLinearGradientElement, M, D>>,
  mounting?: Script<El<SVGLinearGradientElement, M, D>>,
  destruction?: Script<El<SVGLinearGradientElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGLinearGradientElement, M, D>>): ReactiveTreeNode<El<SVGLinearGradientElement, M, D>> {
  //
  return describe(LinearGradient.name, SvgTags.linearGradient,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Marker

export function Marker<M = unknown, D = unknown>(
  setup: Script<El<SVGMarkerElement, M, D>>): ReactiveTreeNode<El<SVGMarkerElement, M, D>>

export function Marker<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGMarkerElement, M, D>>): ReactiveTreeNode<El<SVGMarkerElement, M, D>>

export function Marker<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGMarkerElement, M, D>>): ReactiveTreeNode<El<SVGMarkerElement, M, D>>

export function Marker<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGMarkerElement, M, D>>): ReactiveTreeNode<El<SVGMarkerElement, M, D>>

export function Marker<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGMarkerElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGMarkerElement, M, D>>,
  creation?: Script<El<SVGMarkerElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGMarkerElement, M, D>>,
  mounting?: Script<El<SVGMarkerElement, M, D>>,
  destruction?: Script<El<SVGMarkerElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGMarkerElement, M, D>>): ReactiveTreeNode<El<SVGMarkerElement, M, D>>

export function Marker<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGMarkerElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGMarkerElement, M, D>>,
  setupOrMode?: Script<El<SVGMarkerElement, M, D>> | Mode,
  setup?: Script<El<SVGMarkerElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGMarkerElement, M, D>>,
  creation?: Script<El<SVGMarkerElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGMarkerElement, M, D>>,
  mounting?: Script<El<SVGMarkerElement, M, D>>,
  destruction?: Script<El<SVGMarkerElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGMarkerElement, M, D>>): ReactiveTreeNode<El<SVGMarkerElement, M, D>> {
  //
  return describe(Marker.name, SvgTags.marker,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Mask

export function Mask<M = unknown, D = unknown>(
  setup: Script<El<SVGMaskElement, M, D>>): ReactiveTreeNode<El<SVGMaskElement, M, D>>

export function Mask<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGMaskElement, M, D>>): ReactiveTreeNode<El<SVGMaskElement, M, D>>

export function Mask<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGMaskElement, M, D>>): ReactiveTreeNode<El<SVGMaskElement, M, D>>

export function Mask<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGMaskElement, M, D>>): ReactiveTreeNode<El<SVGMaskElement, M, D>>

export function Mask<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGMaskElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGMaskElement, M, D>>,
  creation?: Script<El<SVGMaskElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGMaskElement, M, D>>,
  mounting?: Script<El<SVGMaskElement, M, D>>,
  destruction?: Script<El<SVGMaskElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGMaskElement, M, D>>): ReactiveTreeNode<El<SVGMaskElement, M, D>>

export function Mask<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGMaskElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGMaskElement, M, D>>,
  setupOrMode?: Script<El<SVGMaskElement, M, D>> | Mode,
  setup?: Script<El<SVGMaskElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGMaskElement, M, D>>,
  creation?: Script<El<SVGMaskElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGMaskElement, M, D>>,
  mounting?: Script<El<SVGMaskElement, M, D>>,
  destruction?: Script<El<SVGMaskElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGMaskElement, M, D>>): ReactiveTreeNode<El<SVGMaskElement, M, D>> {
  //
  return describe(Mask.name, SvgTags.mask,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// MetaData

export function MetaData<M = unknown, D = unknown>(
  setup: Script<El<SVGMetadataElement, M, D>>): ReactiveTreeNode<El<SVGMetadataElement, M, D>>

export function MetaData<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGMetadataElement, M, D>>): ReactiveTreeNode<El<SVGMetadataElement, M, D>>

export function MetaData<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGMetadataElement, M, D>>): ReactiveTreeNode<El<SVGMetadataElement, M, D>>

export function MetaData<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGMetadataElement, M, D>>): ReactiveTreeNode<El<SVGMetadataElement, M, D>>

export function MetaData<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGMetadataElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGMetadataElement, M, D>>,
  creation?: Script<El<SVGMetadataElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGMetadataElement, M, D>>,
  mounting?: Script<El<SVGMetadataElement, M, D>>,
  destruction?: Script<El<SVGMetadataElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGMetadataElement, M, D>>): ReactiveTreeNode<El<SVGMetadataElement, M, D>>

export function MetaData<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGMetadataElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGMetadataElement, M, D>>,
  setupOrMode?: Script<El<SVGMetadataElement, M, D>> | Mode,
  setup?: Script<El<SVGMetadataElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGMetadataElement, M, D>>,
  creation?: Script<El<SVGMetadataElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGMetadataElement, M, D>>,
  mounting?: Script<El<SVGMetadataElement, M, D>>,
  destruction?: Script<El<SVGMetadataElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGMetadataElement, M, D>>): ReactiveTreeNode<El<SVGMetadataElement, M, D>> {
  //
  return describe(MetaData.name, SvgTags.metadata,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// MPath

export function MPath<M = unknown, D = unknown>(
  setup: Script<El<SVGElement, M, D>>): ReactiveTreeNode<El<SVGElement, M, D>>

export function MPath<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGElement, M, D>>): ReactiveTreeNode<El<SVGElement, M, D>>

export function MPath<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGElement, M, D>>): ReactiveTreeNode<El<SVGElement, M, D>>

export function MPath<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGElement, M, D>>): ReactiveTreeNode<El<SVGElement, M, D>>

export function MPath<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGElement, M, D>>,
  creation?: Script<El<SVGElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGElement, M, D>>,
  mounting?: Script<El<SVGElement, M, D>>,
  destruction?: Script<El<SVGElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGElement, M, D>>): ReactiveTreeNode<El<SVGElement, M, D>>

export function MPath<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGElement, M, D>>,
  setupOrMode?: Script<El<SVGElement, M, D>> | Mode,
  setup?: Script<El<SVGElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGElement, M, D>>,
  creation?: Script<El<SVGElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGElement, M, D>>,
  mounting?: Script<El<SVGElement, M, D>>,
  destruction?: Script<El<SVGElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGElement, M, D>>): ReactiveTreeNode<El<SVGElement, M, D>> {
  //
  return describe(MPath.name, SvgTags.mpath,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Path

export function Path<M = unknown, D = unknown>(
  setup: Script<El<SVGPathElement, M, D>>): ReactiveTreeNode<El<SVGPathElement, M, D>>

export function Path<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGPathElement, M, D>>): ReactiveTreeNode<El<SVGPathElement, M, D>>

export function Path<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGPathElement, M, D>>): ReactiveTreeNode<El<SVGPathElement, M, D>>

export function Path<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGPathElement, M, D>>): ReactiveTreeNode<El<SVGPathElement, M, D>>

export function Path<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGPathElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGPathElement, M, D>>,
  creation?: Script<El<SVGPathElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGPathElement, M, D>>,
  mounting?: Script<El<SVGPathElement, M, D>>,
  destruction?: Script<El<SVGPathElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGPathElement, M, D>>): ReactiveTreeNode<El<SVGPathElement, M, D>>

export function Path<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGPathElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGPathElement, M, D>>,
  setupOrMode?: Script<El<SVGPathElement, M, D>> | Mode,
  setup?: Script<El<SVGPathElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGPathElement, M, D>>,
  creation?: Script<El<SVGPathElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGPathElement, M, D>>,
  mounting?: Script<El<SVGPathElement, M, D>>,
  destruction?: Script<El<SVGPathElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGPathElement, M, D>>): ReactiveTreeNode<El<SVGPathElement, M, D>> {
  //
  return describe(Path.name, SvgTags.path,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Pattern

export function Pattern<M = unknown, D = unknown>(
  setup: Script<El<SVGPatternElement, M, D>>): ReactiveTreeNode<El<SVGPatternElement, M, D>>

export function Pattern<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGPatternElement, M, D>>): ReactiveTreeNode<El<SVGPatternElement, M, D>>

export function Pattern<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGPatternElement, M, D>>): ReactiveTreeNode<El<SVGPatternElement, M, D>>

export function Pattern<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGPatternElement, M, D>>): ReactiveTreeNode<El<SVGPatternElement, M, D>>

export function Pattern<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGPatternElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGPatternElement, M, D>>,
  creation?: Script<El<SVGPatternElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGPatternElement, M, D>>,
  mounting?: Script<El<SVGPatternElement, M, D>>,
  destruction?: Script<El<SVGPatternElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGPatternElement, M, D>>): ReactiveTreeNode<El<SVGPatternElement, M, D>>

export function Pattern<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGPatternElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGPatternElement, M, D>>,
  setupOrMode?: Script<El<SVGPatternElement, M, D>> | Mode,
  setup?: Script<El<SVGPatternElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGPatternElement, M, D>>,
  creation?: Script<El<SVGPatternElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGPatternElement, M, D>>,
  mounting?: Script<El<SVGPatternElement, M, D>>,
  destruction?: Script<El<SVGPatternElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGPatternElement, M, D>>): ReactiveTreeNode<El<SVGPatternElement, M, D>> {
  //
  return describe(Pattern.name, SvgTags.pattern,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Polygon

export function Polygon<M = unknown, D = unknown>(
  setup: Script<El<SVGPolygonElement, M, D>>): ReactiveTreeNode<El<SVGPolygonElement, M, D>>

export function Polygon<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGPolygonElement, M, D>>): ReactiveTreeNode<El<SVGPolygonElement, M, D>>

export function Polygon<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGPolygonElement, M, D>>): ReactiveTreeNode<El<SVGPolygonElement, M, D>>

export function Polygon<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGPolygonElement, M, D>>): ReactiveTreeNode<El<SVGPolygonElement, M, D>>

export function Polygon<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGPolygonElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGPolygonElement, M, D>>,
  creation?: Script<El<SVGPolygonElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGPolygonElement, M, D>>,
  mounting?: Script<El<SVGPolygonElement, M, D>>,
  destruction?: Script<El<SVGPolygonElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGPolygonElement, M, D>>): ReactiveTreeNode<El<SVGPolygonElement, M, D>>

export function Polygon<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGPolygonElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGPolygonElement, M, D>>,
  setupOrMode?: Script<El<SVGPolygonElement, M, D>> | Mode,
  setup?: Script<El<SVGPolygonElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGPolygonElement, M, D>>,
  creation?: Script<El<SVGPolygonElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGPolygonElement, M, D>>,
  mounting?: Script<El<SVGPolygonElement, M, D>>,
  destruction?: Script<El<SVGPolygonElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGPolygonElement, M, D>>): ReactiveTreeNode<El<SVGPolygonElement, M, D>> {
  //
  return describe(Polygon.name, SvgTags.polygon,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// PolyLine

export function PolyLine<M = unknown, D = unknown>(
  setup: Script<El<SVGPolylineElement, M, D>>): ReactiveTreeNode<El<SVGPolylineElement, M, D>>

export function PolyLine<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGPolylineElement, M, D>>): ReactiveTreeNode<El<SVGPolylineElement, M, D>>

export function PolyLine<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGPolylineElement, M, D>>): ReactiveTreeNode<El<SVGPolylineElement, M, D>>

export function PolyLine<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGPolylineElement, M, D>>): ReactiveTreeNode<El<SVGPolylineElement, M, D>>

export function PolyLine<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGPolylineElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGPolylineElement, M, D>>,
  creation?: Script<El<SVGPolylineElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGPolylineElement, M, D>>,
  mounting?: Script<El<SVGPolylineElement, M, D>>,
  destruction?: Script<El<SVGPolylineElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGPolylineElement, M, D>>): ReactiveTreeNode<El<SVGPolylineElement, M, D>>

export function PolyLine<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGPolylineElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGPolylineElement, M, D>>,
  setupOrMode?: Script<El<SVGPolylineElement, M, D>> | Mode,
  setup?: Script<El<SVGPolylineElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGPolylineElement, M, D>>,
  creation?: Script<El<SVGPolylineElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGPolylineElement, M, D>>,
  mounting?: Script<El<SVGPolylineElement, M, D>>,
  destruction?: Script<El<SVGPolylineElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGPolylineElement, M, D>>): ReactiveTreeNode<El<SVGPolylineElement, M, D>> {
  //
  return describe(PolyLine.name, SvgTags.polyline,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// RadialGradient

export function RadialGradient<M = unknown, D = unknown>(
  setup: Script<El<SVGRadialGradientElement, M, D>>): ReactiveTreeNode<El<SVGRadialGradientElement, M, D>>

export function RadialGradient<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGRadialGradientElement, M, D>>): ReactiveTreeNode<El<SVGRadialGradientElement, M, D>>

export function RadialGradient<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGRadialGradientElement, M, D>>): ReactiveTreeNode<El<SVGRadialGradientElement, M, D>>

export function RadialGradient<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGRadialGradientElement, M, D>>): ReactiveTreeNode<El<SVGRadialGradientElement, M, D>>

export function RadialGradient<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGRadialGradientElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGRadialGradientElement, M, D>>,
  creation?: Script<El<SVGRadialGradientElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGRadialGradientElement, M, D>>,
  mounting?: Script<El<SVGRadialGradientElement, M, D>>,
  destruction?: Script<El<SVGRadialGradientElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGRadialGradientElement, M, D>>): ReactiveTreeNode<El<SVGRadialGradientElement, M, D>>

export function RadialGradient<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGRadialGradientElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGRadialGradientElement, M, D>>,
  setupOrMode?: Script<El<SVGRadialGradientElement, M, D>> | Mode,
  setup?: Script<El<SVGRadialGradientElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGRadialGradientElement, M, D>>,
  creation?: Script<El<SVGRadialGradientElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGRadialGradientElement, M, D>>,
  mounting?: Script<El<SVGRadialGradientElement, M, D>>,
  destruction?: Script<El<SVGRadialGradientElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGRadialGradientElement, M, D>>): ReactiveTreeNode<El<SVGRadialGradientElement, M, D>> {
  //
  return describe(RadialGradient.name, SvgTags.radialGradient,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Rect

export function Rect<M = unknown, D = unknown>(
  setup: Script<El<SVGRectElement, M, D>>): ReactiveTreeNode<El<SVGRectElement, M, D>>

export function Rect<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGRectElement, M, D>>): ReactiveTreeNode<El<SVGRectElement, M, D>>

export function Rect<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGRectElement, M, D>>): ReactiveTreeNode<El<SVGRectElement, M, D>>

export function Rect<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGRectElement, M, D>>): ReactiveTreeNode<El<SVGRectElement, M, D>>

export function Rect<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGRectElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGRectElement, M, D>>,
  creation?: Script<El<SVGRectElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGRectElement, M, D>>,
  mounting?: Script<El<SVGRectElement, M, D>>,
  destruction?: Script<El<SVGRectElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGRectElement, M, D>>): ReactiveTreeNode<El<SVGRectElement, M, D>>

export function Rect<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGRectElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGRectElement, M, D>>,
  setupOrMode?: Script<El<SVGRectElement, M, D>> | Mode,
  setup?: Script<El<SVGRectElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGRectElement, M, D>>,
  creation?: Script<El<SVGRectElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGRectElement, M, D>>,
  mounting?: Script<El<SVGRectElement, M, D>>,
  destruction?: Script<El<SVGRectElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGRectElement, M, D>>): ReactiveTreeNode<El<SVGRectElement, M, D>> {
  //
  return describe(Rect.name, SvgTags.rect,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Stop

export function Stop<M = unknown, D = unknown>(
  setup: Script<El<SVGStopElement, M, D>>): ReactiveTreeNode<El<SVGStopElement, M, D>>

export function Stop<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGStopElement, M, D>>): ReactiveTreeNode<El<SVGStopElement, M, D>>

export function Stop<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGStopElement, M, D>>): ReactiveTreeNode<El<SVGStopElement, M, D>>

export function Stop<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGStopElement, M, D>>): ReactiveTreeNode<El<SVGStopElement, M, D>>

export function Stop<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGStopElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGStopElement, M, D>>,
  creation?: Script<El<SVGStopElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGStopElement, M, D>>,
  mounting?: Script<El<SVGStopElement, M, D>>,
  destruction?: Script<El<SVGStopElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGStopElement, M, D>>): ReactiveTreeNode<El<SVGStopElement, M, D>>

export function Stop<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGStopElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGStopElement, M, D>>,
  setupOrMode?: Script<El<SVGStopElement, M, D>> | Mode,
  setup?: Script<El<SVGStopElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGStopElement, M, D>>,
  creation?: Script<El<SVGStopElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGStopElement, M, D>>,
  mounting?: Script<El<SVGStopElement, M, D>>,
  destruction?: Script<El<SVGStopElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGStopElement, M, D>>): ReactiveTreeNode<El<SVGStopElement, M, D>> {
  //
  return describe(Stop.name, SvgTags.stop,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// SvgSwitch

export function SvgSwitch<M = unknown, D = unknown>(
  setup: Script<El<SVGSwitchElement, M, D>>): ReactiveTreeNode<El<SVGSwitchElement, M, D>>

export function SvgSwitch<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGSwitchElement, M, D>>): ReactiveTreeNode<El<SVGSwitchElement, M, D>>

export function SvgSwitch<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGSwitchElement, M, D>>): ReactiveTreeNode<El<SVGSwitchElement, M, D>>

export function SvgSwitch<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGSwitchElement, M, D>>): ReactiveTreeNode<El<SVGSwitchElement, M, D>>

export function SvgSwitch<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGSwitchElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGSwitchElement, M, D>>,
  creation?: Script<El<SVGSwitchElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGSwitchElement, M, D>>,
  mounting?: Script<El<SVGSwitchElement, M, D>>,
  destruction?: Script<El<SVGSwitchElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGSwitchElement, M, D>>): ReactiveTreeNode<El<SVGSwitchElement, M, D>>

export function SvgSwitch<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGSwitchElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGSwitchElement, M, D>>,
  setupOrMode?: Script<El<SVGSwitchElement, M, D>> | Mode,
  setup?: Script<El<SVGSwitchElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGSwitchElement, M, D>>,
  creation?: Script<El<SVGSwitchElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGSwitchElement, M, D>>,
  mounting?: Script<El<SVGSwitchElement, M, D>>,
  destruction?: Script<El<SVGSwitchElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGSwitchElement, M, D>>): ReactiveTreeNode<El<SVGSwitchElement, M, D>> {
  //
  return describe(SvgSwitch.name, SvgTags.switch,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Symbol

export function Symbol<M = unknown, D = unknown>(
  setup: Script<El<SVGSymbolElement, M, D>>): ReactiveTreeNode<El<SVGSymbolElement, M, D>>

export function Symbol<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGSymbolElement, M, D>>): ReactiveTreeNode<El<SVGSymbolElement, M, D>>

export function Symbol<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGSymbolElement, M, D>>): ReactiveTreeNode<El<SVGSymbolElement, M, D>>

export function Symbol<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGSymbolElement, M, D>>): ReactiveTreeNode<El<SVGSymbolElement, M, D>>

export function Symbol<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGSymbolElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGSymbolElement, M, D>>,
  creation?: Script<El<SVGSymbolElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGSymbolElement, M, D>>,
  mounting?: Script<El<SVGSymbolElement, M, D>>,
  destruction?: Script<El<SVGSymbolElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGSymbolElement, M, D>>): ReactiveTreeNode<El<SVGSymbolElement, M, D>>

export function Symbol<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGSymbolElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGSymbolElement, M, D>>,
  setupOrMode?: Script<El<SVGSymbolElement, M, D>> | Mode,
  setup?: Script<El<SVGSymbolElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGSymbolElement, M, D>>,
  creation?: Script<El<SVGSymbolElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGSymbolElement, M, D>>,
  mounting?: Script<El<SVGSymbolElement, M, D>>,
  destruction?: Script<El<SVGSymbolElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGSymbolElement, M, D>>): ReactiveTreeNode<El<SVGSymbolElement, M, D>> {
  //
  return describe(Symbol.name, SvgTags.symbol,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Text

export function Text<M = unknown, D = unknown>(
  setup: Script<El<SVGTextElement, M, D>>): ReactiveTreeNode<El<SVGTextElement, M, D>>

export function Text<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGTextElement, M, D>>): ReactiveTreeNode<El<SVGTextElement, M, D>>

export function Text<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGTextElement, M, D>>): ReactiveTreeNode<El<SVGTextElement, M, D>>

export function Text<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGTextElement, M, D>>): ReactiveTreeNode<El<SVGTextElement, M, D>>

export function Text<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGTextElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGTextElement, M, D>>,
  creation?: Script<El<SVGTextElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGTextElement, M, D>>,
  mounting?: Script<El<SVGTextElement, M, D>>,
  destruction?: Script<El<SVGTextElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGTextElement, M, D>>): ReactiveTreeNode<El<SVGTextElement, M, D>>

export function Text<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGTextElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGTextElement, M, D>>,
  setupOrMode?: Script<El<SVGTextElement, M, D>> | Mode,
  setup?: Script<El<SVGTextElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGTextElement, M, D>>,
  creation?: Script<El<SVGTextElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGTextElement, M, D>>,
  mounting?: Script<El<SVGTextElement, M, D>>,
  destruction?: Script<El<SVGTextElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGTextElement, M, D>>): ReactiveTreeNode<El<SVGTextElement, M, D>> {
  //
  return describe(Text.name, SvgTags.text,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// TextPath

export function TextPath<M = unknown, D = unknown>(
  setup: Script<El<SVGTextPathElement, M, D>>): ReactiveTreeNode<El<SVGTextPathElement, M, D>>

export function TextPath<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGTextPathElement, M, D>>): ReactiveTreeNode<El<SVGTextPathElement, M, D>>

export function TextPath<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGTextPathElement, M, D>>): ReactiveTreeNode<El<SVGTextPathElement, M, D>>

export function TextPath<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGTextPathElement, M, D>>): ReactiveTreeNode<El<SVGTextPathElement, M, D>>

export function TextPath<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGTextPathElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGTextPathElement, M, D>>,
  creation?: Script<El<SVGTextPathElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGTextPathElement, M, D>>,
  mounting?: Script<El<SVGTextPathElement, M, D>>,
  destruction?: Script<El<SVGTextPathElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGTextPathElement, M, D>>): ReactiveTreeNode<El<SVGTextPathElement, M, D>>

export function TextPath<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGTextPathElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGTextPathElement, M, D>>,
  setupOrMode?: Script<El<SVGTextPathElement, M, D>> | Mode,
  setup?: Script<El<SVGTextPathElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGTextPathElement, M, D>>,
  creation?: Script<El<SVGTextPathElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGTextPathElement, M, D>>,
  mounting?: Script<El<SVGTextPathElement, M, D>>,
  destruction?: Script<El<SVGTextPathElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGTextPathElement, M, D>>): ReactiveTreeNode<El<SVGTextPathElement, M, D>> {
  //
  return describe(TextPath.name, SvgTags.textPath,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// TSpan

export function TSpan<M = unknown, D = unknown>(
  setup: Script<El<SVGTSpanElement, M, D>>): ReactiveTreeNode<El<SVGTSpanElement, M, D>>

export function TSpan<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGTSpanElement, M, D>>): ReactiveTreeNode<El<SVGTSpanElement, M, D>>

export function TSpan<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGTSpanElement, M, D>>): ReactiveTreeNode<El<SVGTSpanElement, M, D>>

export function TSpan<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGTSpanElement, M, D>>): ReactiveTreeNode<El<SVGTSpanElement, M, D>>

export function TSpan<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGTSpanElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGTSpanElement, M, D>>,
  creation?: Script<El<SVGTSpanElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGTSpanElement, M, D>>,
  mounting?: Script<El<SVGTSpanElement, M, D>>,
  destruction?: Script<El<SVGTSpanElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGTSpanElement, M, D>>): ReactiveTreeNode<El<SVGTSpanElement, M, D>>

export function TSpan<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGTSpanElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGTSpanElement, M, D>>,
  setupOrMode?: Script<El<SVGTSpanElement, M, D>> | Mode,
  setup?: Script<El<SVGTSpanElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGTSpanElement, M, D>>,
  creation?: Script<El<SVGTSpanElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGTSpanElement, M, D>>,
  mounting?: Script<El<SVGTSpanElement, M, D>>,
  destruction?: Script<El<SVGTSpanElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGTSpanElement, M, D>>): ReactiveTreeNode<El<SVGTSpanElement, M, D>> {
  //
  return describe(TSpan.name, SvgTags.tspan,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Use

export function Use<M = unknown, D = unknown>(
  setup: Script<El<SVGUseElement, M, D>>): ReactiveTreeNode<El<SVGUseElement, M, D>>

export function Use<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGUseElement, M, D>>): ReactiveTreeNode<El<SVGUseElement, M, D>>

export function Use<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGUseElement, M, D>>): ReactiveTreeNode<El<SVGUseElement, M, D>>

export function Use<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGUseElement, M, D>>): ReactiveTreeNode<El<SVGUseElement, M, D>>

export function Use<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGUseElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGUseElement, M, D>>,
  creation?: Script<El<SVGUseElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGUseElement, M, D>>,
  mounting?: Script<El<SVGUseElement, M, D>>,
  destruction?: Script<El<SVGUseElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGUseElement, M, D>>): ReactiveTreeNode<El<SVGUseElement, M, D>>

export function Use<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGUseElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGUseElement, M, D>>,
  setupOrMode?: Script<El<SVGUseElement, M, D>> | Mode,
  setup?: Script<El<SVGUseElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGUseElement, M, D>>,
  creation?: Script<El<SVGUseElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGUseElement, M, D>>,
  mounting?: Script<El<SVGUseElement, M, D>>,
  destruction?: Script<El<SVGUseElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGUseElement, M, D>>): ReactiveTreeNode<El<SVGUseElement, M, D>> {
  //
  return describe(Use.name, SvgTags.use,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// View

export function View<M = unknown, D = unknown>(
  setup: Script<El<SVGViewElement, M, D>>): ReactiveTreeNode<El<SVGViewElement, M, D>>

export function View<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<SVGViewElement, M, D>>): ReactiveTreeNode<El<SVGViewElement, M, D>>

export function View<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<SVGViewElement, M, D>>): ReactiveTreeNode<El<SVGViewElement, M, D>>

export function View<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<SVGViewElement, M, D>>): ReactiveTreeNode<El<SVGViewElement, M, D>>

export function View<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<SVGViewElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGViewElement, M, D>>,
  creation?: Script<El<SVGViewElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGViewElement, M, D>>,
  mounting?: Script<El<SVGViewElement, M, D>>,
  destruction?: Script<El<SVGViewElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGViewElement, M, D>>): ReactiveTreeNode<El<SVGViewElement, M, D>>

export function View<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<SVGViewElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<SVGViewElement, M, D>>,
  setupOrMode?: Script<El<SVGViewElement, M, D>> | Mode,
  setup?: Script<El<SVGViewElement, M, D>>,
  setupTask?: ScriptAsync<El<SVGViewElement, M, D>>,
  creation?: Script<El<SVGViewElement, M, D>>,
  creationTask?: ScriptAsync<El<SVGViewElement, M, D>>,
  mounting?: Script<El<SVGViewElement, M, D>>,
  destruction?: Script<El<SVGViewElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<SVGViewElement, M, D>>): ReactiveTreeNode<El<SVGViewElement, M, D>> {
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
