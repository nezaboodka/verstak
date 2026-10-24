// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2026 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, ReactiveTreeNodeDesc, type Script, Mode, ScriptTask, describe } from "reactronic"
import { El, ElKind } from "../core/El.js"
import { HtmlDriver } from "../core/WebDriver.js"

// A

export function A<M = unknown, D = unknown>(
  setup: Script<El<HTMLAnchorElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLAnchorElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLAnchorElement, M, D>>): ReactiveTreeNode<El<HTMLAnchorElement, M, D>>

export function A<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLAnchorElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLAnchorElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLAnchorElement, M, D>>): ReactiveTreeNode<El<HTMLAnchorElement, M, D>>

export function A<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLAnchorElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLAnchorElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLAnchorElement, M, D>>): ReactiveTreeNode<El<HTMLAnchorElement, M, D>>

export function A<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLAnchorElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLAnchorElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLAnchorElement, M, D>>): ReactiveTreeNode<El<HTMLAnchorElement, M, D>>

export function A<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLAnchorElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLAnchorElement, M, D>>): ReactiveTreeNode<El<HTMLAnchorElement, M, D>>

export function A<M = unknown, D = unknown>(
  p1?: Script<El<HTMLAnchorElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLAnchorElement, M, D>>,
  p2?: Script<El<HTMLAnchorElement, M, D>> | ScriptTask<El<HTMLAnchorElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLAnchorElement, M, D>>,
  p3?: Script<El<HTMLAnchorElement, M, D>> | ScriptTask<El<HTMLAnchorElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLAnchorElement, M, D>>,
  p4?: ScriptTask<El<HTMLAnchorElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLAnchorElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLAnchorElement, M, D>>): ReactiveTreeNode<El<HTMLAnchorElement, M, D>> {
  //
  return describe(A.name, HtmlTags.a, p1, p2, p3, p4, p5)
}

// Abbr

export function Abbr<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Abbr<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Abbr<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Abbr<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Abbr<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Abbr<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Abbr.name, HtmlTags.abbr, p1, p2, p3, p4, p5)
}

// Address

export function Address<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Address<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Address<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Address<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Address<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Address<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Address.name, HtmlTags.address, p1, p2, p3, p4, p5)
}

// Area

export function Area<M = unknown, D = unknown>(
  setup: Script<El<HTMLAreaElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLAreaElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLAreaElement, M, D>>): ReactiveTreeNode<El<HTMLAreaElement, M, D>>

export function Area<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLAreaElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLAreaElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLAreaElement, M, D>>): ReactiveTreeNode<El<HTMLAreaElement, M, D>>

export function Area<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLAreaElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLAreaElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLAreaElement, M, D>>): ReactiveTreeNode<El<HTMLAreaElement, M, D>>

export function Area<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLAreaElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLAreaElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLAreaElement, M, D>>): ReactiveTreeNode<El<HTMLAreaElement, M, D>>

export function Area<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLAreaElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLAreaElement, M, D>>): ReactiveTreeNode<El<HTMLAreaElement, M, D>>

export function Area<M = unknown, D = unknown>(
  p1?: Script<El<HTMLAreaElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLAreaElement, M, D>>,
  p2?: Script<El<HTMLAreaElement, M, D>> | ScriptTask<El<HTMLAreaElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLAreaElement, M, D>>,
  p3?: Script<El<HTMLAreaElement, M, D>> | ScriptTask<El<HTMLAreaElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLAreaElement, M, D>>,
  p4?: ScriptTask<El<HTMLAreaElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLAreaElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLAreaElement, M, D>>): ReactiveTreeNode<El<HTMLAreaElement, M, D>> {
  //
  return describe(Area.name, HtmlTags.area, p1, p2, p3, p4, p5)
}

// Article

export function Article<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Article<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Article<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Article<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Article<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Article<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Article.name, HtmlTags.article, p1, p2, p3, p4, p5)
}

// Aside

export function Aside<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Aside<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Aside<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Aside<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Aside<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Aside<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Aside.name, HtmlTags.aside, p1, p2, p3, p4, p5)
}

// Audio

export function Audio<M = unknown, D = unknown>(
  setup: Script<El<HTMLAudioElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLAudioElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLAudioElement, M, D>>): ReactiveTreeNode<El<HTMLAudioElement, M, D>>

export function Audio<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLAudioElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLAudioElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLAudioElement, M, D>>): ReactiveTreeNode<El<HTMLAudioElement, M, D>>

export function Audio<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLAudioElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLAudioElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLAudioElement, M, D>>): ReactiveTreeNode<El<HTMLAudioElement, M, D>>

export function Audio<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLAudioElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLAudioElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLAudioElement, M, D>>): ReactiveTreeNode<El<HTMLAudioElement, M, D>>

export function Audio<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLAudioElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLAudioElement, M, D>>): ReactiveTreeNode<El<HTMLAudioElement, M, D>>

export function Audio<M = unknown, D = unknown>(
  p1?: Script<El<HTMLAudioElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLAudioElement, M, D>>,
  p2?: Script<El<HTMLAudioElement, M, D>> | ScriptTask<El<HTMLAudioElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLAudioElement, M, D>>,
  p3?: Script<El<HTMLAudioElement, M, D>> | ScriptTask<El<HTMLAudioElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLAudioElement, M, D>>,
  p4?: ScriptTask<El<HTMLAudioElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLAudioElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLAudioElement, M, D>>): ReactiveTreeNode<El<HTMLAudioElement, M, D>> {
  //
  return describe(Audio.name, HtmlTags.audio, p1, p2, p3, p4, p5)
}

// B

export function B<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function B<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function B<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function B<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function B<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function B<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(B.name, HtmlTags.b, p1, p2, p3, p4, p5)
}

// Base

export function Base<M = unknown, D = unknown>(
  setup: Script<El<HTMLBaseElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLBaseElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLBaseElement, M, D>>): ReactiveTreeNode<El<HTMLBaseElement, M, D>>

export function Base<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLBaseElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLBaseElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLBaseElement, M, D>>): ReactiveTreeNode<El<HTMLBaseElement, M, D>>

export function Base<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLBaseElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLBaseElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLBaseElement, M, D>>): ReactiveTreeNode<El<HTMLBaseElement, M, D>>

export function Base<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLBaseElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLBaseElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLBaseElement, M, D>>): ReactiveTreeNode<El<HTMLBaseElement, M, D>>

export function Base<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLBaseElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLBaseElement, M, D>>): ReactiveTreeNode<El<HTMLBaseElement, M, D>>

export function Base<M = unknown, D = unknown>(
  p1?: Script<El<HTMLBaseElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLBaseElement, M, D>>,
  p2?: Script<El<HTMLBaseElement, M, D>> | ScriptTask<El<HTMLBaseElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLBaseElement, M, D>>,
  p3?: Script<El<HTMLBaseElement, M, D>> | ScriptTask<El<HTMLBaseElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLBaseElement, M, D>>,
  p4?: ScriptTask<El<HTMLBaseElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLBaseElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLBaseElement, M, D>>): ReactiveTreeNode<El<HTMLBaseElement, M, D>> {
  //
  return describe(Base.name, HtmlTags.base, p1, p2, p3, p4, p5)
}

// Bdi

export function Bdi<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Bdi<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Bdi<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Bdi<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Bdi<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Bdi<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Bdi.name, HtmlTags.bdi, p1, p2, p3, p4, p5)
}

// Bdo

export function Bdo<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Bdo<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Bdo<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Bdo<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Bdo<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Bdo<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Bdo.name, HtmlTags.bdo, p1, p2, p3, p4, p5)
}

// Big

export function Big<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Big<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Big<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Big<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Big<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Big<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Big.name, HtmlTags.big, p1, p2, p3, p4, p5)
}

// BlockQuote

export function BlockQuote<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function BlockQuote<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function BlockQuote<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function BlockQuote<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function BlockQuote<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function BlockQuote<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(BlockQuote.name, HtmlTags.blockquote, p1, p2, p3, p4, p5)
}

// Body

export function Body<M = unknown, D = unknown>(
  setup: Script<El<HTMLBodyElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLBodyElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLBodyElement, M, D>>): ReactiveTreeNode<El<HTMLBodyElement, M, D>>

export function Body<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLBodyElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLBodyElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLBodyElement, M, D>>): ReactiveTreeNode<El<HTMLBodyElement, M, D>>

export function Body<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLBodyElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLBodyElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLBodyElement, M, D>>): ReactiveTreeNode<El<HTMLBodyElement, M, D>>

export function Body<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLBodyElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLBodyElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLBodyElement, M, D>>): ReactiveTreeNode<El<HTMLBodyElement, M, D>>

export function Body<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLBodyElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLBodyElement, M, D>>): ReactiveTreeNode<El<HTMLBodyElement, M, D>>

export function Body<M = unknown, D = unknown>(
  p1?: Script<El<HTMLBodyElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLBodyElement, M, D>>,
  p2?: Script<El<HTMLBodyElement, M, D>> | ScriptTask<El<HTMLBodyElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLBodyElement, M, D>>,
  p3?: Script<El<HTMLBodyElement, M, D>> | ScriptTask<El<HTMLBodyElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLBodyElement, M, D>>,
  p4?: ScriptTask<El<HTMLBodyElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLBodyElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLBodyElement, M, D>>): ReactiveTreeNode<El<HTMLBodyElement, M, D>> {
  //
  return describe(Body.name, HtmlTags.body, p1, p2, p3, p4, p5)
}

// BR

export function BR<M = unknown, D = unknown>(
  setup: Script<El<HTMLBRElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLBRElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLBRElement, M, D>>): ReactiveTreeNode<El<HTMLBRElement, M, D>>

export function BR<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLBRElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLBRElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLBRElement, M, D>>): ReactiveTreeNode<El<HTMLBRElement, M, D>>

export function BR<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLBRElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLBRElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLBRElement, M, D>>): ReactiveTreeNode<El<HTMLBRElement, M, D>>

export function BR<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLBRElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLBRElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLBRElement, M, D>>): ReactiveTreeNode<El<HTMLBRElement, M, D>>

export function BR<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLBRElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLBRElement, M, D>>): ReactiveTreeNode<El<HTMLBRElement, M, D>>

export function BR<M = unknown, D = unknown>(
  p1?: Script<El<HTMLBRElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLBRElement, M, D>>,
  p2?: Script<El<HTMLBRElement, M, D>> | ScriptTask<El<HTMLBRElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLBRElement, M, D>>,
  p3?: Script<El<HTMLBRElement, M, D>> | ScriptTask<El<HTMLBRElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLBRElement, M, D>>,
  p4?: ScriptTask<El<HTMLBRElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLBRElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLBRElement, M, D>>): ReactiveTreeNode<El<HTMLBRElement, M, D>> {
  //
  return describe(BR.name, HtmlTags.br, p1, p2, p3, p4, p5)
}

// Button

export function Button<M = unknown, D = unknown>(
  setup: Script<El<HTMLButtonElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLButtonElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLButtonElement, M, D>>): ReactiveTreeNode<El<HTMLButtonElement, M, D>>

export function Button<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLButtonElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLButtonElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLButtonElement, M, D>>): ReactiveTreeNode<El<HTMLButtonElement, M, D>>

export function Button<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLButtonElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLButtonElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLButtonElement, M, D>>): ReactiveTreeNode<El<HTMLButtonElement, M, D>>

export function Button<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLButtonElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLButtonElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLButtonElement, M, D>>): ReactiveTreeNode<El<HTMLButtonElement, M, D>>

export function Button<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLButtonElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLButtonElement, M, D>>): ReactiveTreeNode<El<HTMLButtonElement, M, D>>

export function Button<M = unknown, D = unknown>(
  p1?: Script<El<HTMLButtonElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLButtonElement, M, D>>,
  p2?: Script<El<HTMLButtonElement, M, D>> | ScriptTask<El<HTMLButtonElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLButtonElement, M, D>>,
  p3?: Script<El<HTMLButtonElement, M, D>> | ScriptTask<El<HTMLButtonElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLButtonElement, M, D>>,
  p4?: ScriptTask<El<HTMLButtonElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLButtonElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLButtonElement, M, D>>): ReactiveTreeNode<El<HTMLButtonElement, M, D>> {
  //
  return describe(Button.name, HtmlTags.button, p1, p2, p3, p4, p5)
}

// Canvas

export function Canvas<M = unknown, D = unknown>(
  setup: Script<El<HTMLCanvasElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLCanvasElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLCanvasElement, M, D>>): ReactiveTreeNode<El<HTMLCanvasElement, M, D>>

export function Canvas<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLCanvasElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLCanvasElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLCanvasElement, M, D>>): ReactiveTreeNode<El<HTMLCanvasElement, M, D>>

export function Canvas<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLCanvasElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLCanvasElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLCanvasElement, M, D>>): ReactiveTreeNode<El<HTMLCanvasElement, M, D>>

export function Canvas<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLCanvasElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLCanvasElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLCanvasElement, M, D>>): ReactiveTreeNode<El<HTMLCanvasElement, M, D>>

export function Canvas<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLCanvasElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLCanvasElement, M, D>>): ReactiveTreeNode<El<HTMLCanvasElement, M, D>>

export function Canvas<M = unknown, D = unknown>(
  p1?: Script<El<HTMLCanvasElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLCanvasElement, M, D>>,
  p2?: Script<El<HTMLCanvasElement, M, D>> | ScriptTask<El<HTMLCanvasElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLCanvasElement, M, D>>,
  p3?: Script<El<HTMLCanvasElement, M, D>> | ScriptTask<El<HTMLCanvasElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLCanvasElement, M, D>>,
  p4?: ScriptTask<El<HTMLCanvasElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLCanvasElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLCanvasElement, M, D>>): ReactiveTreeNode<El<HTMLCanvasElement, M, D>> {
  //
  return describe(Canvas.name, HtmlTags.canvas, p1, p2, p3, p4, p5)
}

// Caption

export function Caption<M = unknown, D = unknown>(
  setup: Script<El<HTMLTableCaptionElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableCaptionElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableCaptionElement, M, D>>): ReactiveTreeNode<El<HTMLTableCaptionElement, M, D>>

export function Caption<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLTableCaptionElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableCaptionElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableCaptionElement, M, D>>): ReactiveTreeNode<El<HTMLTableCaptionElement, M, D>>

export function Caption<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTableCaptionElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableCaptionElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableCaptionElement, M, D>>): ReactiveTreeNode<El<HTMLTableCaptionElement, M, D>>

export function Caption<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLTableCaptionElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableCaptionElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableCaptionElement, M, D>>): ReactiveTreeNode<El<HTMLTableCaptionElement, M, D>>

export function Caption<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLTableCaptionElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableCaptionElement, M, D>>): ReactiveTreeNode<El<HTMLTableCaptionElement, M, D>>

export function Caption<M = unknown, D = unknown>(
  p1?: Script<El<HTMLTableCaptionElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTableCaptionElement, M, D>>,
  p2?: Script<El<HTMLTableCaptionElement, M, D>> | ScriptTask<El<HTMLTableCaptionElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLTableCaptionElement, M, D>>,
  p3?: Script<El<HTMLTableCaptionElement, M, D>> | ScriptTask<El<HTMLTableCaptionElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLTableCaptionElement, M, D>>,
  p4?: ScriptTask<El<HTMLTableCaptionElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLTableCaptionElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLTableCaptionElement, M, D>>): ReactiveTreeNode<El<HTMLTableCaptionElement, M, D>> {
  //
  return describe(Caption.name, HtmlTags.caption, p1, p2, p3, p4, p5)
}

// Cite

export function Cite<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Cite<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Cite<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Cite<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Cite<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Cite<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Cite.name, HtmlTags.cite, p1, p2, p3, p4, p5)
}

// Code

export function Code<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Code<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Code<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Code<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Code<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Code<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Code.name, HtmlTags.code, p1, p2, p3, p4, p5)
}

// Col

export function Col<M = unknown, D = unknown>(
  setup: Script<El<HTMLTableColElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableColElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableColElement, M, D>>): ReactiveTreeNode<El<HTMLTableColElement, M, D>>

export function Col<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLTableColElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableColElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableColElement, M, D>>): ReactiveTreeNode<El<HTMLTableColElement, M, D>>

export function Col<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTableColElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableColElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableColElement, M, D>>): ReactiveTreeNode<El<HTMLTableColElement, M, D>>

export function Col<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLTableColElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableColElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableColElement, M, D>>): ReactiveTreeNode<El<HTMLTableColElement, M, D>>

export function Col<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLTableColElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableColElement, M, D>>): ReactiveTreeNode<El<HTMLTableColElement, M, D>>

export function Col<M = unknown, D = unknown>(
  p1?: Script<El<HTMLTableColElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTableColElement, M, D>>,
  p2?: Script<El<HTMLTableColElement, M, D>> | ScriptTask<El<HTMLTableColElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLTableColElement, M, D>>,
  p3?: Script<El<HTMLTableColElement, M, D>> | ScriptTask<El<HTMLTableColElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLTableColElement, M, D>>,
  p4?: ScriptTask<El<HTMLTableColElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLTableColElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLTableColElement, M, D>>): ReactiveTreeNode<El<HTMLTableColElement, M, D>> {
  //
  return describe(Col.name, HtmlTags.col, p1, p2, p3, p4, p5)
}

// ColGroup

export function ColGroup<M = unknown, D = unknown>(
  setup: Script<El<HTMLTableColElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableColElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableColElement, M, D>>): ReactiveTreeNode<El<HTMLTableColElement, M, D>>

export function ColGroup<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLTableColElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableColElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableColElement, M, D>>): ReactiveTreeNode<El<HTMLTableColElement, M, D>>

export function ColGroup<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTableColElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableColElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableColElement, M, D>>): ReactiveTreeNode<El<HTMLTableColElement, M, D>>

export function ColGroup<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLTableColElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableColElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableColElement, M, D>>): ReactiveTreeNode<El<HTMLTableColElement, M, D>>

export function ColGroup<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLTableColElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableColElement, M, D>>): ReactiveTreeNode<El<HTMLTableColElement, M, D>>

export function ColGroup<M = unknown, D = unknown>(
  p1?: Script<El<HTMLTableColElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTableColElement, M, D>>,
  p2?: Script<El<HTMLTableColElement, M, D>> | ScriptTask<El<HTMLTableColElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLTableColElement, M, D>>,
  p3?: Script<El<HTMLTableColElement, M, D>> | ScriptTask<El<HTMLTableColElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLTableColElement, M, D>>,
  p4?: ScriptTask<El<HTMLTableColElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLTableColElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLTableColElement, M, D>>): ReactiveTreeNode<El<HTMLTableColElement, M, D>> {
  //
  return describe(ColGroup.name, HtmlTags.colgroup, p1, p2, p3, p4, p5)
}

// Data

export function Data<M = unknown, D = unknown>(
  setup: Script<El<HTMLDataElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLDataElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLDataElement, M, D>>): ReactiveTreeNode<El<HTMLDataElement, M, D>>

export function Data<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLDataElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLDataElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLDataElement, M, D>>): ReactiveTreeNode<El<HTMLDataElement, M, D>>

export function Data<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLDataElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLDataElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLDataElement, M, D>>): ReactiveTreeNode<El<HTMLDataElement, M, D>>

export function Data<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLDataElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLDataElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLDataElement, M, D>>): ReactiveTreeNode<El<HTMLDataElement, M, D>>

export function Data<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLDataElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLDataElement, M, D>>): ReactiveTreeNode<El<HTMLDataElement, M, D>>

export function Data<M = unknown, D = unknown>(
  p1?: Script<El<HTMLDataElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLDataElement, M, D>>,
  p2?: Script<El<HTMLDataElement, M, D>> | ScriptTask<El<HTMLDataElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLDataElement, M, D>>,
  p3?: Script<El<HTMLDataElement, M, D>> | ScriptTask<El<HTMLDataElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLDataElement, M, D>>,
  p4?: ScriptTask<El<HTMLDataElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLDataElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLDataElement, M, D>>): ReactiveTreeNode<El<HTMLDataElement, M, D>> {
  //
  return describe(Data.name, HtmlTags.data, p1, p2, p3, p4, p5)
}

// DataList

export function DataList<M = unknown, D = unknown>(
  setup: Script<El<HTMLDataListElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLDataListElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLDataListElement, M, D>>): ReactiveTreeNode<El<HTMLDataListElement, M, D>>

export function DataList<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLDataListElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLDataListElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLDataListElement, M, D>>): ReactiveTreeNode<El<HTMLDataListElement, M, D>>

export function DataList<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLDataListElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLDataListElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLDataListElement, M, D>>): ReactiveTreeNode<El<HTMLDataListElement, M, D>>

export function DataList<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLDataListElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLDataListElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLDataListElement, M, D>>): ReactiveTreeNode<El<HTMLDataListElement, M, D>>

export function DataList<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLDataListElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLDataListElement, M, D>>): ReactiveTreeNode<El<HTMLDataListElement, M, D>>

export function DataList<M = unknown, D = unknown>(
  p1?: Script<El<HTMLDataListElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLDataListElement, M, D>>,
  p2?: Script<El<HTMLDataListElement, M, D>> | ScriptTask<El<HTMLDataListElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLDataListElement, M, D>>,
  p3?: Script<El<HTMLDataListElement, M, D>> | ScriptTask<El<HTMLDataListElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLDataListElement, M, D>>,
  p4?: ScriptTask<El<HTMLDataListElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLDataListElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLDataListElement, M, D>>): ReactiveTreeNode<El<HTMLDataListElement, M, D>> {
  //
  return describe(DataList.name, HtmlTags.datalist, p1, p2, p3, p4, p5)
}

// DD

export function DD<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function DD<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function DD<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function DD<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function DD<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function DD<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(DD.name, HtmlTags.dd, p1, p2, p3, p4, p5)
}

// Del

export function Del<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Del<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Del<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Del<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Del<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Del<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Del.name, HtmlTags.del, p1, p2, p3, p4, p5)
}

// Details

export function Details<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Details<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Details<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Details<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Details<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Details<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Details.name, HtmlTags.details, p1, p2, p3, p4, p5)
}

// Dfn

export function Dfn<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Dfn<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Dfn<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Dfn<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Dfn<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Dfn<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Dfn.name, HtmlTags.dfn, p1, p2, p3, p4, p5)
}

// Div

export function Div<M = unknown, D = unknown>(
  setup: Script<El<HTMLDivElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLDivElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLDivElement, M, D>>): ReactiveTreeNode<El<HTMLDivElement, M, D>>

export function Div<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLDivElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLDivElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLDivElement, M, D>>): ReactiveTreeNode<El<HTMLDivElement, M, D>>

export function Div<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLDivElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLDivElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLDivElement, M, D>>): ReactiveTreeNode<El<HTMLDivElement, M, D>>

export function Div<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLDivElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLDivElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLDivElement, M, D>>): ReactiveTreeNode<El<HTMLDivElement, M, D>>

export function Div<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLDivElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLDivElement, M, D>>): ReactiveTreeNode<El<HTMLDivElement, M, D>>

export function Div<M = unknown, D = unknown>(
  p1?: Script<El<HTMLDivElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLDivElement, M, D>>,
  p2?: Script<El<HTMLDivElement, M, D>> | ScriptTask<El<HTMLDivElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLDivElement, M, D>>,
  p3?: Script<El<HTMLDivElement, M, D>> | ScriptTask<El<HTMLDivElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLDivElement, M, D>>,
  p4?: ScriptTask<El<HTMLDivElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLDivElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLDivElement, M, D>>): ReactiveTreeNode<El<HTMLDivElement, M, D>> {
  //
  return describe(Div.name, HtmlTags.div, p1, p2, p3, p4, p5)
}

// DL

export function DL<M = unknown, D = unknown>(
  setup: Script<El<HTMLDListElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLDListElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLDListElement, M, D>>): ReactiveTreeNode<El<HTMLDListElement, M, D>>

export function DL<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLDListElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLDListElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLDListElement, M, D>>): ReactiveTreeNode<El<HTMLDListElement, M, D>>

export function DL<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLDListElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLDListElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLDListElement, M, D>>): ReactiveTreeNode<El<HTMLDListElement, M, D>>

export function DL<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLDListElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLDListElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLDListElement, M, D>>): ReactiveTreeNode<El<HTMLDListElement, M, D>>

export function DL<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLDListElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLDListElement, M, D>>): ReactiveTreeNode<El<HTMLDListElement, M, D>>

export function DL<M = unknown, D = unknown>(
  p1?: Script<El<HTMLDListElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLDListElement, M, D>>,
  p2?: Script<El<HTMLDListElement, M, D>> | ScriptTask<El<HTMLDListElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLDListElement, M, D>>,
  p3?: Script<El<HTMLDListElement, M, D>> | ScriptTask<El<HTMLDListElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLDListElement, M, D>>,
  p4?: ScriptTask<El<HTMLDListElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLDListElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLDListElement, M, D>>): ReactiveTreeNode<El<HTMLDListElement, M, D>> {
  //
  return describe(DL.name, HtmlTags.dl, p1, p2, p3, p4, p5)
}

// DT

export function DT<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function DT<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function DT<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function DT<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function DT<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function DT<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(DT.name, HtmlTags.dt, p1, p2, p3, p4, p5)
}

// EM

export function EM<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function EM<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function EM<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function EM<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function EM<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function EM<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(EM.name, HtmlTags.em, p1, p2, p3, p4, p5)
}

// Embed

export function Embed<M = unknown, D = unknown>(
  setup: Script<El<HTMLEmbedElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLEmbedElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLEmbedElement, M, D>>): ReactiveTreeNode<El<HTMLEmbedElement, M, D>>

export function Embed<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLEmbedElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLEmbedElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLEmbedElement, M, D>>): ReactiveTreeNode<El<HTMLEmbedElement, M, D>>

export function Embed<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLEmbedElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLEmbedElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLEmbedElement, M, D>>): ReactiveTreeNode<El<HTMLEmbedElement, M, D>>

export function Embed<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLEmbedElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLEmbedElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLEmbedElement, M, D>>): ReactiveTreeNode<El<HTMLEmbedElement, M, D>>

export function Embed<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLEmbedElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLEmbedElement, M, D>>): ReactiveTreeNode<El<HTMLEmbedElement, M, D>>

export function Embed<M = unknown, D = unknown>(
  p1?: Script<El<HTMLEmbedElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLEmbedElement, M, D>>,
  p2?: Script<El<HTMLEmbedElement, M, D>> | ScriptTask<El<HTMLEmbedElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLEmbedElement, M, D>>,
  p3?: Script<El<HTMLEmbedElement, M, D>> | ScriptTask<El<HTMLEmbedElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLEmbedElement, M, D>>,
  p4?: ScriptTask<El<HTMLEmbedElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLEmbedElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLEmbedElement, M, D>>): ReactiveTreeNode<El<HTMLEmbedElement, M, D>> {
  //
  return describe(Embed.name, HtmlTags.embed, p1, p2, p3, p4, p5)
}

// FieldSet

export function FieldSet<M = unknown, D = unknown>(
  setup: Script<El<HTMLFieldSetElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLFieldSetElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLFieldSetElement, M, D>>): ReactiveTreeNode<El<HTMLFieldSetElement, M, D>>

export function FieldSet<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLFieldSetElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLFieldSetElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLFieldSetElement, M, D>>): ReactiveTreeNode<El<HTMLFieldSetElement, M, D>>

export function FieldSet<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLFieldSetElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLFieldSetElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLFieldSetElement, M, D>>): ReactiveTreeNode<El<HTMLFieldSetElement, M, D>>

export function FieldSet<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLFieldSetElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLFieldSetElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLFieldSetElement, M, D>>): ReactiveTreeNode<El<HTMLFieldSetElement, M, D>>

export function FieldSet<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLFieldSetElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLFieldSetElement, M, D>>): ReactiveTreeNode<El<HTMLFieldSetElement, M, D>>

export function FieldSet<M = unknown, D = unknown>(
  p1?: Script<El<HTMLFieldSetElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLFieldSetElement, M, D>>,
  p2?: Script<El<HTMLFieldSetElement, M, D>> | ScriptTask<El<HTMLFieldSetElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLFieldSetElement, M, D>>,
  p3?: Script<El<HTMLFieldSetElement, M, D>> | ScriptTask<El<HTMLFieldSetElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLFieldSetElement, M, D>>,
  p4?: ScriptTask<El<HTMLFieldSetElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLFieldSetElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLFieldSetElement, M, D>>): ReactiveTreeNode<El<HTMLFieldSetElement, M, D>> {
  //
  return describe(FieldSet.name, HtmlTags.fieldset, p1, p2, p3, p4, p5)
}

// FigCaption

export function FigCaption<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function FigCaption<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function FigCaption<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function FigCaption<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function FigCaption<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function FigCaption<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(FigCaption.name, HtmlTags.figcaption, p1, p2, p3, p4, p5)
}

// Figure

export function Figure<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Figure<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Figure<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Figure<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Figure<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Figure<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Figure.name, HtmlTags.figure, p1, p2, p3, p4, p5)
}

// Footer

export function Footer<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Footer<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Footer<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Footer<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Footer<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Footer<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Footer.name, HtmlTags.footer, p1, p2, p3, p4, p5)
}

// Form

export function Form<M = unknown, D = unknown>(
  setup: Script<El<HTMLFormElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLFormElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLFormElement, M, D>>): ReactiveTreeNode<El<HTMLFormElement, M, D>>

export function Form<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLFormElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLFormElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLFormElement, M, D>>): ReactiveTreeNode<El<HTMLFormElement, M, D>>

export function Form<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLFormElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLFormElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLFormElement, M, D>>): ReactiveTreeNode<El<HTMLFormElement, M, D>>

export function Form<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLFormElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLFormElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLFormElement, M, D>>): ReactiveTreeNode<El<HTMLFormElement, M, D>>

export function Form<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLFormElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLFormElement, M, D>>): ReactiveTreeNode<El<HTMLFormElement, M, D>>

export function Form<M = unknown, D = unknown>(
  p1?: Script<El<HTMLFormElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLFormElement, M, D>>,
  p2?: Script<El<HTMLFormElement, M, D>> | ScriptTask<El<HTMLFormElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLFormElement, M, D>>,
  p3?: Script<El<HTMLFormElement, M, D>> | ScriptTask<El<HTMLFormElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLFormElement, M, D>>,
  p4?: ScriptTask<El<HTMLFormElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLFormElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLFormElement, M, D>>): ReactiveTreeNode<El<HTMLFormElement, M, D>> {
  //
  return describe(Form.name, HtmlTags.form, p1, p2, p3, p4, p5)
}

// H1

export function H1<M = unknown, D = unknown>(
  setup: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHeadingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H1<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHeadingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H1<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHeadingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H1<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHeadingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H1<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H1<M = unknown, D = unknown>(
  p1?: Script<El<HTMLHeadingElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  p2?: Script<El<HTMLHeadingElement, M, D>> | ScriptTask<El<HTMLHeadingElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  p3?: Script<El<HTMLHeadingElement, M, D>> | ScriptTask<El<HTMLHeadingElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  p4?: ScriptTask<El<HTMLHeadingElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>> {
  //
  return describe(H1.name, HtmlTags.h1, p1, p2, p3, p4, p5)
}

// H2

export function H2<M = unknown, D = unknown>(
  setup: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHeadingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H2<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHeadingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H2<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHeadingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H2<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHeadingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H2<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H2<M = unknown, D = unknown>(
  p1?: Script<El<HTMLHeadingElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  p2?: Script<El<HTMLHeadingElement, M, D>> | ScriptTask<El<HTMLHeadingElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  p3?: Script<El<HTMLHeadingElement, M, D>> | ScriptTask<El<HTMLHeadingElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  p4?: ScriptTask<El<HTMLHeadingElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>> {
  //
  return describe(H2.name, HtmlTags.h2, p1, p2, p3, p4, p5)
}

// H3

export function H3<M = unknown, D = unknown>(
  setup: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHeadingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H3<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHeadingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H3<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHeadingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H3<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHeadingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H3<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H3<M = unknown, D = unknown>(
  p1?: Script<El<HTMLHeadingElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  p2?: Script<El<HTMLHeadingElement, M, D>> | ScriptTask<El<HTMLHeadingElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  p3?: Script<El<HTMLHeadingElement, M, D>> | ScriptTask<El<HTMLHeadingElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  p4?: ScriptTask<El<HTMLHeadingElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>> {
  //
  return describe(H3.name, HtmlTags.h3, p1, p2, p3, p4, p5)
}

// H4

export function H4<M = unknown, D = unknown>(
  setup: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHeadingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H4<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHeadingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H4<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHeadingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H4<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHeadingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H4<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H4<M = unknown, D = unknown>(
  p1?: Script<El<HTMLHeadingElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  p2?: Script<El<HTMLHeadingElement, M, D>> | ScriptTask<El<HTMLHeadingElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  p3?: Script<El<HTMLHeadingElement, M, D>> | ScriptTask<El<HTMLHeadingElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  p4?: ScriptTask<El<HTMLHeadingElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>> {
  //
  return describe(H4.name, HtmlTags.h4, p1, p2, p3, p4, p5)
}

// H5

export function H5<M = unknown, D = unknown>(
  setup: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHeadingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H5<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHeadingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H5<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHeadingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H5<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHeadingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H5<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H5<M = unknown, D = unknown>(
  p1?: Script<El<HTMLHeadingElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  p2?: Script<El<HTMLHeadingElement, M, D>> | ScriptTask<El<HTMLHeadingElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  p3?: Script<El<HTMLHeadingElement, M, D>> | ScriptTask<El<HTMLHeadingElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  p4?: ScriptTask<El<HTMLHeadingElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>> {
  //
  return describe(H5.name, HtmlTags.h5, p1, p2, p3, p4, p5)
}

// H6

export function H6<M = unknown, D = unknown>(
  setup: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHeadingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H6<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHeadingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H6<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHeadingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H6<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHeadingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H6<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H6<M = unknown, D = unknown>(
  p1?: Script<El<HTMLHeadingElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  p2?: Script<El<HTMLHeadingElement, M, D>> | ScriptTask<El<HTMLHeadingElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  p3?: Script<El<HTMLHeadingElement, M, D>> | ScriptTask<El<HTMLHeadingElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  p4?: ScriptTask<El<HTMLHeadingElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>> {
  //
  return describe(H6.name, HtmlTags.h6, p1, p2, p3, p4, p5)
}

// Head

export function Head<M = unknown, D = unknown>(
  setup: Script<El<HTMLHeadElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHeadElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadElement, M, D>>): ReactiveTreeNode<El<HTMLHeadElement, M, D>>

export function Head<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLHeadElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHeadElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadElement, M, D>>): ReactiveTreeNode<El<HTMLHeadElement, M, D>>

export function Head<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLHeadElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHeadElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadElement, M, D>>): ReactiveTreeNode<El<HTMLHeadElement, M, D>>

export function Head<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLHeadElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHeadElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadElement, M, D>>): ReactiveTreeNode<El<HTMLHeadElement, M, D>>

export function Head<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLHeadElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadElement, M, D>>): ReactiveTreeNode<El<HTMLHeadElement, M, D>>

export function Head<M = unknown, D = unknown>(
  p1?: Script<El<HTMLHeadElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLHeadElement, M, D>>,
  p2?: Script<El<HTMLHeadElement, M, D>> | ScriptTask<El<HTMLHeadElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLHeadElement, M, D>>,
  p3?: Script<El<HTMLHeadElement, M, D>> | ScriptTask<El<HTMLHeadElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLHeadElement, M, D>>,
  p4?: ScriptTask<El<HTMLHeadElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLHeadElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLHeadElement, M, D>>): ReactiveTreeNode<El<HTMLHeadElement, M, D>> {
  //
  return describe(Head.name, HtmlTags.head, p1, p2, p3, p4, p5)
}

// Header

export function Header<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Header<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Header<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Header<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Header<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Header<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Header.name, HtmlTags.header, p1, p2, p3, p4, p5)
}

// HGroup

export function HGroup<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function HGroup<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function HGroup<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function HGroup<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function HGroup<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function HGroup<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(HGroup.name, HtmlTags.hgroup, p1, p2, p3, p4, p5)
}

// HR

export function HR<M = unknown, D = unknown>(
  setup: Script<El<HTMLHRElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHRElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHRElement, M, D>>): ReactiveTreeNode<El<HTMLHRElement, M, D>>

export function HR<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLHRElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHRElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHRElement, M, D>>): ReactiveTreeNode<El<HTMLHRElement, M, D>>

export function HR<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLHRElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHRElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHRElement, M, D>>): ReactiveTreeNode<El<HTMLHRElement, M, D>>

export function HR<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLHRElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHRElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHRElement, M, D>>): ReactiveTreeNode<El<HTMLHRElement, M, D>>

export function HR<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLHRElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHRElement, M, D>>): ReactiveTreeNode<El<HTMLHRElement, M, D>>

export function HR<M = unknown, D = unknown>(
  p1?: Script<El<HTMLHRElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLHRElement, M, D>>,
  p2?: Script<El<HTMLHRElement, M, D>> | ScriptTask<El<HTMLHRElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLHRElement, M, D>>,
  p3?: Script<El<HTMLHRElement, M, D>> | ScriptTask<El<HTMLHRElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLHRElement, M, D>>,
  p4?: ScriptTask<El<HTMLHRElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLHRElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLHRElement, M, D>>): ReactiveTreeNode<El<HTMLHRElement, M, D>> {
  //
  return describe(HR.name, HtmlTags.hr, p1, p2, p3, p4, p5)
}

// Html

export function Html<M = unknown, D = unknown>(
  setup: Script<El<HTMLHtmlElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHtmlElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHtmlElement, M, D>>): ReactiveTreeNode<El<HTMLHtmlElement, M, D>>

export function Html<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLHtmlElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHtmlElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHtmlElement, M, D>>): ReactiveTreeNode<El<HTMLHtmlElement, M, D>>

export function Html<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLHtmlElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHtmlElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHtmlElement, M, D>>): ReactiveTreeNode<El<HTMLHtmlElement, M, D>>

export function Html<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLHtmlElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLHtmlElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHtmlElement, M, D>>): ReactiveTreeNode<El<HTMLHtmlElement, M, D>>

export function Html<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLHtmlElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLHtmlElement, M, D>>): ReactiveTreeNode<El<HTMLHtmlElement, M, D>>

export function Html<M = unknown, D = unknown>(
  p1?: Script<El<HTMLHtmlElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLHtmlElement, M, D>>,
  p2?: Script<El<HTMLHtmlElement, M, D>> | ScriptTask<El<HTMLHtmlElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLHtmlElement, M, D>>,
  p3?: Script<El<HTMLHtmlElement, M, D>> | ScriptTask<El<HTMLHtmlElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLHtmlElement, M, D>>,
  p4?: ScriptTask<El<HTMLHtmlElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLHtmlElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLHtmlElement, M, D>>): ReactiveTreeNode<El<HTMLHtmlElement, M, D>> {
  //
  return describe(Html.name, HtmlTags.html, p1, p2, p3, p4, p5)
}

// I

export function I<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function I<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function I<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function I<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function I<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function I<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(I.name, HtmlTags.i, p1, p2, p3, p4, p5)
}

// IFrame

export function IFrame<M = unknown, D = unknown>(
  setup: Script<El<HTMLIFrameElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLIFrameElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLIFrameElement, M, D>>): ReactiveTreeNode<El<HTMLIFrameElement, M, D>>

export function IFrame<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLIFrameElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLIFrameElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLIFrameElement, M, D>>): ReactiveTreeNode<El<HTMLIFrameElement, M, D>>

export function IFrame<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLIFrameElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLIFrameElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLIFrameElement, M, D>>): ReactiveTreeNode<El<HTMLIFrameElement, M, D>>

export function IFrame<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLIFrameElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLIFrameElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLIFrameElement, M, D>>): ReactiveTreeNode<El<HTMLIFrameElement, M, D>>

export function IFrame<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLIFrameElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLIFrameElement, M, D>>): ReactiveTreeNode<El<HTMLIFrameElement, M, D>>

export function IFrame<M = unknown, D = unknown>(
  p1?: Script<El<HTMLIFrameElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLIFrameElement, M, D>>,
  p2?: Script<El<HTMLIFrameElement, M, D>> | ScriptTask<El<HTMLIFrameElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLIFrameElement, M, D>>,
  p3?: Script<El<HTMLIFrameElement, M, D>> | ScriptTask<El<HTMLIFrameElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLIFrameElement, M, D>>,
  p4?: ScriptTask<El<HTMLIFrameElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLIFrameElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLIFrameElement, M, D>>): ReactiveTreeNode<El<HTMLIFrameElement, M, D>> {
  //
  return describe(IFrame.name, HtmlTags.iframe, p1, p2, p3, p4, p5)
}

// Img

export function Img<M = unknown, D = unknown>(
  setup: Script<El<HTMLImageElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLImageElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLImageElement, M, D>>): ReactiveTreeNode<El<HTMLImageElement, M, D>>

export function Img<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLImageElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLImageElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLImageElement, M, D>>): ReactiveTreeNode<El<HTMLImageElement, M, D>>

export function Img<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLImageElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLImageElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLImageElement, M, D>>): ReactiveTreeNode<El<HTMLImageElement, M, D>>

export function Img<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLImageElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLImageElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLImageElement, M, D>>): ReactiveTreeNode<El<HTMLImageElement, M, D>>

export function Img<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLImageElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLImageElement, M, D>>): ReactiveTreeNode<El<HTMLImageElement, M, D>>

export function Img<M = unknown, D = unknown>(
  p1?: Script<El<HTMLImageElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLImageElement, M, D>>,
  p2?: Script<El<HTMLImageElement, M, D>> | ScriptTask<El<HTMLImageElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLImageElement, M, D>>,
  p3?: Script<El<HTMLImageElement, M, D>> | ScriptTask<El<HTMLImageElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLImageElement, M, D>>,
  p4?: ScriptTask<El<HTMLImageElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLImageElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLImageElement, M, D>>): ReactiveTreeNode<El<HTMLImageElement, M, D>> {
  //
  return describe(Img.name, HtmlTags.img, p1, p2, p3, p4, p5)
}

// Input

export function Input<M = unknown, D = unknown>(
  setup: Script<El<HTMLInputElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLInputElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLInputElement, M, D>>): ReactiveTreeNode<El<HTMLInputElement, M, D>>

export function Input<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLInputElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLInputElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLInputElement, M, D>>): ReactiveTreeNode<El<HTMLInputElement, M, D>>

export function Input<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLInputElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLInputElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLInputElement, M, D>>): ReactiveTreeNode<El<HTMLInputElement, M, D>>

export function Input<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLInputElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLInputElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLInputElement, M, D>>): ReactiveTreeNode<El<HTMLInputElement, M, D>>

export function Input<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLInputElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLInputElement, M, D>>): ReactiveTreeNode<El<HTMLInputElement, M, D>>

export function Input<M = unknown, D = unknown>(
  p1?: Script<El<HTMLInputElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLInputElement, M, D>>,
  p2?: Script<El<HTMLInputElement, M, D>> | ScriptTask<El<HTMLInputElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLInputElement, M, D>>,
  p3?: Script<El<HTMLInputElement, M, D>> | ScriptTask<El<HTMLInputElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLInputElement, M, D>>,
  p4?: ScriptTask<El<HTMLInputElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLInputElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLInputElement, M, D>>): ReactiveTreeNode<El<HTMLInputElement, M, D>> {
  //
  return describe(Input.name, HtmlTags.input, p1, p2, p3, p4, p5)
}

// Ins

export function Ins<M = unknown, D = unknown>(
  setup: Script<El<HTMLModElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLModElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLModElement, M, D>>): ReactiveTreeNode<El<HTMLModElement, M, D>>

export function Ins<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLModElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLModElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLModElement, M, D>>): ReactiveTreeNode<El<HTMLModElement, M, D>>

export function Ins<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLModElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLModElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLModElement, M, D>>): ReactiveTreeNode<El<HTMLModElement, M, D>>

export function Ins<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLModElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLModElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLModElement, M, D>>): ReactiveTreeNode<El<HTMLModElement, M, D>>

export function Ins<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLModElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLModElement, M, D>>): ReactiveTreeNode<El<HTMLModElement, M, D>>

export function Ins<M = unknown, D = unknown>(
  p1?: Script<El<HTMLModElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLModElement, M, D>>,
  p2?: Script<El<HTMLModElement, M, D>> | ScriptTask<El<HTMLModElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLModElement, M, D>>,
  p3?: Script<El<HTMLModElement, M, D>> | ScriptTask<El<HTMLModElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLModElement, M, D>>,
  p4?: ScriptTask<El<HTMLModElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLModElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLModElement, M, D>>): ReactiveTreeNode<El<HTMLModElement, M, D>> {
  //
  return describe(Ins.name, HtmlTags.ins, p1, p2, p3, p4, p5)
}

// Kbd

export function Kbd<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Kbd<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Kbd<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Kbd<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Kbd<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Kbd<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Kbd.name, HtmlTags.kbd, p1, p2, p3, p4, p5)
}

// KeyGen

export function KeyGen<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function KeyGen<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function KeyGen<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function KeyGen<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function KeyGen<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function KeyGen<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(KeyGen.name, HtmlTags.keygen, p1, p2, p3, p4, p5)
}

// Label

export function Label<M = unknown, D = unknown>(
  setup: Script<El<HTMLLabelElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLLabelElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLLabelElement, M, D>>): ReactiveTreeNode<El<HTMLLabelElement, M, D>>

export function Label<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLLabelElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLLabelElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLLabelElement, M, D>>): ReactiveTreeNode<El<HTMLLabelElement, M, D>>

export function Label<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLLabelElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLLabelElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLLabelElement, M, D>>): ReactiveTreeNode<El<HTMLLabelElement, M, D>>

export function Label<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLLabelElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLLabelElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLLabelElement, M, D>>): ReactiveTreeNode<El<HTMLLabelElement, M, D>>

export function Label<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLLabelElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLLabelElement, M, D>>): ReactiveTreeNode<El<HTMLLabelElement, M, D>>

export function Label<M = unknown, D = unknown>(
  p1?: Script<El<HTMLLabelElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLLabelElement, M, D>>,
  p2?: Script<El<HTMLLabelElement, M, D>> | ScriptTask<El<HTMLLabelElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLLabelElement, M, D>>,
  p3?: Script<El<HTMLLabelElement, M, D>> | ScriptTask<El<HTMLLabelElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLLabelElement, M, D>>,
  p4?: ScriptTask<El<HTMLLabelElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLLabelElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLLabelElement, M, D>>): ReactiveTreeNode<El<HTMLLabelElement, M, D>> {
  //
  return describe(Label.name, HtmlTags.label, p1, p2, p3, p4, p5)
}

// Legend

export function Legend<M = unknown, D = unknown>(
  setup: Script<El<HTMLLegendElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLLegendElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLLegendElement, M, D>>): ReactiveTreeNode<El<HTMLLegendElement, M, D>>

export function Legend<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLLegendElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLLegendElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLLegendElement, M, D>>): ReactiveTreeNode<El<HTMLLegendElement, M, D>>

export function Legend<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLLegendElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLLegendElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLLegendElement, M, D>>): ReactiveTreeNode<El<HTMLLegendElement, M, D>>

export function Legend<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLLegendElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLLegendElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLLegendElement, M, D>>): ReactiveTreeNode<El<HTMLLegendElement, M, D>>

export function Legend<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLLegendElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLLegendElement, M, D>>): ReactiveTreeNode<El<HTMLLegendElement, M, D>>

export function Legend<M = unknown, D = unknown>(
  p1?: Script<El<HTMLLegendElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLLegendElement, M, D>>,
  p2?: Script<El<HTMLLegendElement, M, D>> | ScriptTask<El<HTMLLegendElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLLegendElement, M, D>>,
  p3?: Script<El<HTMLLegendElement, M, D>> | ScriptTask<El<HTMLLegendElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLLegendElement, M, D>>,
  p4?: ScriptTask<El<HTMLLegendElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLLegendElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLLegendElement, M, D>>): ReactiveTreeNode<El<HTMLLegendElement, M, D>> {
  //
  return describe(Legend.name, HtmlTags.legend, p1, p2, p3, p4, p5)
}

// LI

export function LI<M = unknown, D = unknown>(
  setup: Script<El<HTMLLIElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLLIElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLLIElement, M, D>>): ReactiveTreeNode<El<HTMLLIElement, M, D>>

export function LI<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLLIElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLLIElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLLIElement, M, D>>): ReactiveTreeNode<El<HTMLLIElement, M, D>>

export function LI<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLLIElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLLIElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLLIElement, M, D>>): ReactiveTreeNode<El<HTMLLIElement, M, D>>

export function LI<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLLIElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLLIElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLLIElement, M, D>>): ReactiveTreeNode<El<HTMLLIElement, M, D>>

export function LI<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLLIElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLLIElement, M, D>>): ReactiveTreeNode<El<HTMLLIElement, M, D>>

export function LI<M = unknown, D = unknown>(
  p1?: Script<El<HTMLLIElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLLIElement, M, D>>,
  p2?: Script<El<HTMLLIElement, M, D>> | ScriptTask<El<HTMLLIElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLLIElement, M, D>>,
  p3?: Script<El<HTMLLIElement, M, D>> | ScriptTask<El<HTMLLIElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLLIElement, M, D>>,
  p4?: ScriptTask<El<HTMLLIElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLLIElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLLIElement, M, D>>): ReactiveTreeNode<El<HTMLLIElement, M, D>> {
  //
  return describe(LI.name, HtmlTags.li, p1, p2, p3, p4, p5)
}

// Link

export function Link<M = unknown, D = unknown>(
  setup: Script<El<HTMLLinkElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLLinkElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLLinkElement, M, D>>): ReactiveTreeNode<El<HTMLLinkElement, M, D>>

export function Link<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLLinkElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLLinkElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLLinkElement, M, D>>): ReactiveTreeNode<El<HTMLLinkElement, M, D>>

export function Link<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLLinkElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLLinkElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLLinkElement, M, D>>): ReactiveTreeNode<El<HTMLLinkElement, M, D>>

export function Link<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLLinkElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLLinkElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLLinkElement, M, D>>): ReactiveTreeNode<El<HTMLLinkElement, M, D>>

export function Link<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLLinkElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLLinkElement, M, D>>): ReactiveTreeNode<El<HTMLLinkElement, M, D>>

export function Link<M = unknown, D = unknown>(
  p1?: Script<El<HTMLLinkElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLLinkElement, M, D>>,
  p2?: Script<El<HTMLLinkElement, M, D>> | ScriptTask<El<HTMLLinkElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLLinkElement, M, D>>,
  p3?: Script<El<HTMLLinkElement, M, D>> | ScriptTask<El<HTMLLinkElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLLinkElement, M, D>>,
  p4?: ScriptTask<El<HTMLLinkElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLLinkElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLLinkElement, M, D>>): ReactiveTreeNode<El<HTMLLinkElement, M, D>> {
  //
  return describe(Link.name, HtmlTags.link, p1, p2, p3, p4, p5)
}

// Main

export function Main<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Main<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Main<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Main<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Main<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Main<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Main.name, HtmlTags.main, p1, p2, p3, p4, p5)
}

// Map

export function Map<M = unknown, D = unknown>(
  setup: Script<El<HTMLMapElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLMapElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLMapElement, M, D>>): ReactiveTreeNode<El<HTMLMapElement, M, D>>

export function Map<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLMapElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLMapElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLMapElement, M, D>>): ReactiveTreeNode<El<HTMLMapElement, M, D>>

export function Map<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLMapElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLMapElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLMapElement, M, D>>): ReactiveTreeNode<El<HTMLMapElement, M, D>>

export function Map<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLMapElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLMapElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLMapElement, M, D>>): ReactiveTreeNode<El<HTMLMapElement, M, D>>

export function Map<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLMapElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLMapElement, M, D>>): ReactiveTreeNode<El<HTMLMapElement, M, D>>

export function Map<M = unknown, D = unknown>(
  p1?: Script<El<HTMLMapElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLMapElement, M, D>>,
  p2?: Script<El<HTMLMapElement, M, D>> | ScriptTask<El<HTMLMapElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLMapElement, M, D>>,
  p3?: Script<El<HTMLMapElement, M, D>> | ScriptTask<El<HTMLMapElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLMapElement, M, D>>,
  p4?: ScriptTask<El<HTMLMapElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLMapElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLMapElement, M, D>>): ReactiveTreeNode<El<HTMLMapElement, M, D>> {
  //
  return describe(Map.name, HtmlTags.map, p1, p2, p3, p4, p5)
}

// Mark

export function Mark<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Mark<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Mark<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Mark<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Mark<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Mark<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Mark.name, HtmlTags.mark, p1, p2, p3, p4, p5)
}

// Menu

export function Menu<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Menu<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Menu<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Menu<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Menu<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Menu<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Menu.name, HtmlTags.menu, p1, p2, p3, p4, p5)
}

// MenuItem

export function MenuItem<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function MenuItem<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function MenuItem<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function MenuItem<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function MenuItem<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function MenuItem<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(MenuItem.name, HtmlTags.menuitem, p1, p2, p3, p4, p5)
}

// Meta

export function Meta<M = unknown, D = unknown>(
  setup: Script<El<HTMLMetaElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLMetaElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLMetaElement, M, D>>): ReactiveTreeNode<El<HTMLMetaElement, M, D>>

export function Meta<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLMetaElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLMetaElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLMetaElement, M, D>>): ReactiveTreeNode<El<HTMLMetaElement, M, D>>

export function Meta<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLMetaElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLMetaElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLMetaElement, M, D>>): ReactiveTreeNode<El<HTMLMetaElement, M, D>>

export function Meta<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLMetaElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLMetaElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLMetaElement, M, D>>): ReactiveTreeNode<El<HTMLMetaElement, M, D>>

export function Meta<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLMetaElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLMetaElement, M, D>>): ReactiveTreeNode<El<HTMLMetaElement, M, D>>

export function Meta<M = unknown, D = unknown>(
  p1?: Script<El<HTMLMetaElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLMetaElement, M, D>>,
  p2?: Script<El<HTMLMetaElement, M, D>> | ScriptTask<El<HTMLMetaElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLMetaElement, M, D>>,
  p3?: Script<El<HTMLMetaElement, M, D>> | ScriptTask<El<HTMLMetaElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLMetaElement, M, D>>,
  p4?: ScriptTask<El<HTMLMetaElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLMetaElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLMetaElement, M, D>>): ReactiveTreeNode<El<HTMLMetaElement, M, D>> {
  //
  return describe(Meta.name, HtmlTags.meta, p1, p2, p3, p4, p5)
}

// Meter

export function Meter<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Meter<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Meter<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Meter<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Meter<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Meter<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Meter.name, HtmlTags.meter, p1, p2, p3, p4, p5)
}

// Nav

export function Nav<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Nav<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Nav<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Nav<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Nav<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Nav<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Nav.name, HtmlTags.nav, p1, p2, p3, p4, p5)
}

// NoIndex

export function NoIndex<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function NoIndex<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function NoIndex<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function NoIndex<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function NoIndex<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function NoIndex<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(NoIndex.name, HtmlTags.noindex, p1, p2, p3, p4, p5)
}

// NoScript

export function NoScript<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function NoScript<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function NoScript<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function NoScript<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function NoScript<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function NoScript<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(NoScript.name, HtmlTags.noscript, p1, p2, p3, p4, p5)
}

// Obj

export function Obj<M = unknown, D = unknown>(
  setup: Script<El<HTMLObjectElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLObjectElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLObjectElement, M, D>>): ReactiveTreeNode<El<HTMLObjectElement, M, D>>

export function Obj<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLObjectElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLObjectElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLObjectElement, M, D>>): ReactiveTreeNode<El<HTMLObjectElement, M, D>>

export function Obj<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLObjectElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLObjectElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLObjectElement, M, D>>): ReactiveTreeNode<El<HTMLObjectElement, M, D>>

export function Obj<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLObjectElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLObjectElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLObjectElement, M, D>>): ReactiveTreeNode<El<HTMLObjectElement, M, D>>

export function Obj<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLObjectElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLObjectElement, M, D>>): ReactiveTreeNode<El<HTMLObjectElement, M, D>>

export function Obj<M = unknown, D = unknown>(
  p1?: Script<El<HTMLObjectElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLObjectElement, M, D>>,
  p2?: Script<El<HTMLObjectElement, M, D>> | ScriptTask<El<HTMLObjectElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLObjectElement, M, D>>,
  p3?: Script<El<HTMLObjectElement, M, D>> | ScriptTask<El<HTMLObjectElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLObjectElement, M, D>>,
  p4?: ScriptTask<El<HTMLObjectElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLObjectElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLObjectElement, M, D>>): ReactiveTreeNode<El<HTMLObjectElement, M, D>> {
  //
  return describe(Obj.name, HtmlTags.object, p1, p2, p3, p4, p5)
}

// OL

export function OL<M = unknown, D = unknown>(
  setup: Script<El<HTMLOListElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLOListElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLOListElement, M, D>>): ReactiveTreeNode<El<HTMLOListElement, M, D>>

export function OL<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLOListElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLOListElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLOListElement, M, D>>): ReactiveTreeNode<El<HTMLOListElement, M, D>>

export function OL<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLOListElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLOListElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLOListElement, M, D>>): ReactiveTreeNode<El<HTMLOListElement, M, D>>

export function OL<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLOListElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLOListElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLOListElement, M, D>>): ReactiveTreeNode<El<HTMLOListElement, M, D>>

export function OL<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLOListElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLOListElement, M, D>>): ReactiveTreeNode<El<HTMLOListElement, M, D>>

export function OL<M = unknown, D = unknown>(
  p1?: Script<El<HTMLOListElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLOListElement, M, D>>,
  p2?: Script<El<HTMLOListElement, M, D>> | ScriptTask<El<HTMLOListElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLOListElement, M, D>>,
  p3?: Script<El<HTMLOListElement, M, D>> | ScriptTask<El<HTMLOListElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLOListElement, M, D>>,
  p4?: ScriptTask<El<HTMLOListElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLOListElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLOListElement, M, D>>): ReactiveTreeNode<El<HTMLOListElement, M, D>> {
  //
  return describe(OL.name, HtmlTags.ol, p1, p2, p3, p4, p5)
}

// OptGroup

export function OptGroup<M = unknown, D = unknown>(
  setup: Script<El<HTMLOptGroupElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLOptGroupElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLOptGroupElement, M, D>>): ReactiveTreeNode<El<HTMLOptGroupElement, M, D>>

export function OptGroup<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLOptGroupElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLOptGroupElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLOptGroupElement, M, D>>): ReactiveTreeNode<El<HTMLOptGroupElement, M, D>>

export function OptGroup<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLOptGroupElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLOptGroupElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLOptGroupElement, M, D>>): ReactiveTreeNode<El<HTMLOptGroupElement, M, D>>

export function OptGroup<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLOptGroupElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLOptGroupElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLOptGroupElement, M, D>>): ReactiveTreeNode<El<HTMLOptGroupElement, M, D>>

export function OptGroup<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLOptGroupElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLOptGroupElement, M, D>>): ReactiveTreeNode<El<HTMLOptGroupElement, M, D>>

export function OptGroup<M = unknown, D = unknown>(
  p1?: Script<El<HTMLOptGroupElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLOptGroupElement, M, D>>,
  p2?: Script<El<HTMLOptGroupElement, M, D>> | ScriptTask<El<HTMLOptGroupElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLOptGroupElement, M, D>>,
  p3?: Script<El<HTMLOptGroupElement, M, D>> | ScriptTask<El<HTMLOptGroupElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLOptGroupElement, M, D>>,
  p4?: ScriptTask<El<HTMLOptGroupElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLOptGroupElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLOptGroupElement, M, D>>): ReactiveTreeNode<El<HTMLOptGroupElement, M, D>> {
  //
  return describe(OptGroup.name, HtmlTags.optgroup, p1, p2, p3, p4, p5)
}

// Option

export function Option<M = unknown, D = unknown>(
  setup: Script<El<HTMLOptionElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLOptionElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLOptionElement, M, D>>): ReactiveTreeNode<El<HTMLOptionElement, M, D>>

export function Option<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLOptionElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLOptionElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLOptionElement, M, D>>): ReactiveTreeNode<El<HTMLOptionElement, M, D>>

export function Option<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLOptionElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLOptionElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLOptionElement, M, D>>): ReactiveTreeNode<El<HTMLOptionElement, M, D>>

export function Option<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLOptionElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLOptionElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLOptionElement, M, D>>): ReactiveTreeNode<El<HTMLOptionElement, M, D>>

export function Option<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLOptionElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLOptionElement, M, D>>): ReactiveTreeNode<El<HTMLOptionElement, M, D>>

export function Option<M = unknown, D = unknown>(
  p1?: Script<El<HTMLOptionElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLOptionElement, M, D>>,
  p2?: Script<El<HTMLOptionElement, M, D>> | ScriptTask<El<HTMLOptionElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLOptionElement, M, D>>,
  p3?: Script<El<HTMLOptionElement, M, D>> | ScriptTask<El<HTMLOptionElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLOptionElement, M, D>>,
  p4?: ScriptTask<El<HTMLOptionElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLOptionElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLOptionElement, M, D>>): ReactiveTreeNode<El<HTMLOptionElement, M, D>> {
  //
  return describe(Option.name, HtmlTags.option, p1, p2, p3, p4, p5)
}

// Output

export function Output<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Output<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Output<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Output<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Output<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Output<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Output.name, HtmlTags.output, p1, p2, p3, p4, p5)
}

// P

export function P<M = unknown, D = unknown>(
  setup: Script<El<HTMLParagraphElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLParagraphElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLParagraphElement, M, D>>): ReactiveTreeNode<El<HTMLParagraphElement, M, D>>

export function P<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLParagraphElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLParagraphElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLParagraphElement, M, D>>): ReactiveTreeNode<El<HTMLParagraphElement, M, D>>

export function P<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLParagraphElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLParagraphElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLParagraphElement, M, D>>): ReactiveTreeNode<El<HTMLParagraphElement, M, D>>

export function P<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLParagraphElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLParagraphElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLParagraphElement, M, D>>): ReactiveTreeNode<El<HTMLParagraphElement, M, D>>

export function P<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLParagraphElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLParagraphElement, M, D>>): ReactiveTreeNode<El<HTMLParagraphElement, M, D>>

export function P<M = unknown, D = unknown>(
  p1?: Script<El<HTMLParagraphElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLParagraphElement, M, D>>,
  p2?: Script<El<HTMLParagraphElement, M, D>> | ScriptTask<El<HTMLParagraphElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLParagraphElement, M, D>>,
  p3?: Script<El<HTMLParagraphElement, M, D>> | ScriptTask<El<HTMLParagraphElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLParagraphElement, M, D>>,
  p4?: ScriptTask<El<HTMLParagraphElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLParagraphElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLParagraphElement, M, D>>): ReactiveTreeNode<El<HTMLParagraphElement, M, D>> {
  //
  return describe(P.name, HtmlTags.p, p1, p2, p3, p4, p5)
}

// Param

export function Param<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Param<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Param<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Param<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Param<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Param<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Param.name, HtmlTags.param, p1, p2, p3, p4, p5)
}

// Picture

export function Picture<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Picture<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Picture<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Picture<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Picture<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Picture<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Picture.name, HtmlTags.picture, p1, p2, p3, p4, p5)
}

// Pre

export function Pre<M = unknown, D = unknown>(
  setup: Script<El<HTMLPreElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLPreElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLPreElement, M, D>>): ReactiveTreeNode<El<HTMLPreElement, M, D>>

export function Pre<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLPreElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLPreElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLPreElement, M, D>>): ReactiveTreeNode<El<HTMLPreElement, M, D>>

export function Pre<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLPreElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLPreElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLPreElement, M, D>>): ReactiveTreeNode<El<HTMLPreElement, M, D>>

export function Pre<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLPreElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLPreElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLPreElement, M, D>>): ReactiveTreeNode<El<HTMLPreElement, M, D>>

export function Pre<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLPreElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLPreElement, M, D>>): ReactiveTreeNode<El<HTMLPreElement, M, D>>

export function Pre<M = unknown, D = unknown>(
  p1?: Script<El<HTMLPreElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLPreElement, M, D>>,
  p2?: Script<El<HTMLPreElement, M, D>> | ScriptTask<El<HTMLPreElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLPreElement, M, D>>,
  p3?: Script<El<HTMLPreElement, M, D>> | ScriptTask<El<HTMLPreElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLPreElement, M, D>>,
  p4?: ScriptTask<El<HTMLPreElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLPreElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLPreElement, M, D>>): ReactiveTreeNode<El<HTMLPreElement, M, D>> {
  //
  return describe(Pre.name, HtmlTags.pre, p1, p2, p3, p4, p5)
}

// Progress

export function Progress<M = unknown, D = unknown>(
  setup: Script<El<HTMLProgressElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLProgressElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLProgressElement, M, D>>): ReactiveTreeNode<El<HTMLProgressElement, M, D>>

export function Progress<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLProgressElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLProgressElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLProgressElement, M, D>>): ReactiveTreeNode<El<HTMLProgressElement, M, D>>

export function Progress<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLProgressElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLProgressElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLProgressElement, M, D>>): ReactiveTreeNode<El<HTMLProgressElement, M, D>>

export function Progress<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLProgressElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLProgressElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLProgressElement, M, D>>): ReactiveTreeNode<El<HTMLProgressElement, M, D>>

export function Progress<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLProgressElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLProgressElement, M, D>>): ReactiveTreeNode<El<HTMLProgressElement, M, D>>

export function Progress<M = unknown, D = unknown>(
  p1?: Script<El<HTMLProgressElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLProgressElement, M, D>>,
  p2?: Script<El<HTMLProgressElement, M, D>> | ScriptTask<El<HTMLProgressElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLProgressElement, M, D>>,
  p3?: Script<El<HTMLProgressElement, M, D>> | ScriptTask<El<HTMLProgressElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLProgressElement, M, D>>,
  p4?: ScriptTask<El<HTMLProgressElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLProgressElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLProgressElement, M, D>>): ReactiveTreeNode<El<HTMLProgressElement, M, D>> {
  //
  return describe(Progress.name, HtmlTags.progress, p1, p2, p3, p4, p5)
}

// Q

export function Q<M = unknown, D = unknown>(
  setup: Script<El<HTMLQuoteElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLQuoteElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLQuoteElement, M, D>>): ReactiveTreeNode<El<HTMLQuoteElement, M, D>>

export function Q<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLQuoteElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLQuoteElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLQuoteElement, M, D>>): ReactiveTreeNode<El<HTMLQuoteElement, M, D>>

export function Q<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLQuoteElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLQuoteElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLQuoteElement, M, D>>): ReactiveTreeNode<El<HTMLQuoteElement, M, D>>

export function Q<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLQuoteElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLQuoteElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLQuoteElement, M, D>>): ReactiveTreeNode<El<HTMLQuoteElement, M, D>>

export function Q<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLQuoteElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLQuoteElement, M, D>>): ReactiveTreeNode<El<HTMLQuoteElement, M, D>>

export function Q<M = unknown, D = unknown>(
  p1?: Script<El<HTMLQuoteElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLQuoteElement, M, D>>,
  p2?: Script<El<HTMLQuoteElement, M, D>> | ScriptTask<El<HTMLQuoteElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLQuoteElement, M, D>>,
  p3?: Script<El<HTMLQuoteElement, M, D>> | ScriptTask<El<HTMLQuoteElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLQuoteElement, M, D>>,
  p4?: ScriptTask<El<HTMLQuoteElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLQuoteElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLQuoteElement, M, D>>): ReactiveTreeNode<El<HTMLQuoteElement, M, D>> {
  //
  return describe(Q.name, HtmlTags.q, p1, p2, p3, p4, p5)
}

// RP

export function RP<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function RP<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function RP<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function RP<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function RP<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function RP<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(RP.name, HtmlTags.rp, p1, p2, p3, p4, p5)
}

// RT

export function RT<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function RT<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function RT<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function RT<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function RT<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function RT<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(RT.name, HtmlTags.rt, p1, p2, p3, p4, p5)
}

// Ruby

export function Ruby<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Ruby<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Ruby<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Ruby<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Ruby<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Ruby<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Ruby.name, HtmlTags.ruby, p1, p2, p3, p4, p5)
}

// S

export function S<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function S<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function S<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function S<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function S<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function S<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(S.name, HtmlTags.s, p1, p2, p3, p4, p5)
}

// Samp

export function Samp<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Samp<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Samp<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Samp<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Samp<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Samp<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Samp.name, HtmlTags.samp, p1, p2, p3, p4, p5)
}

// Script

export function Script<M = unknown, D = unknown>(
  setup: Script<El<HTMLScriptElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLScriptElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLScriptElement, M, D>>): ReactiveTreeNode<El<HTMLScriptElement, M, D>>

export function Script<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLScriptElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLScriptElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLScriptElement, M, D>>): ReactiveTreeNode<El<HTMLScriptElement, M, D>>

export function Script<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLScriptElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLScriptElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLScriptElement, M, D>>): ReactiveTreeNode<El<HTMLScriptElement, M, D>>

export function Script<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLScriptElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLScriptElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLScriptElement, M, D>>): ReactiveTreeNode<El<HTMLScriptElement, M, D>>

export function Script<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLScriptElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLScriptElement, M, D>>): ReactiveTreeNode<El<HTMLScriptElement, M, D>>

export function Script<M = unknown, D = unknown>(
  p1?: Script<El<HTMLScriptElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLScriptElement, M, D>>,
  p2?: Script<El<HTMLScriptElement, M, D>> | ScriptTask<El<HTMLScriptElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLScriptElement, M, D>>,
  p3?: Script<El<HTMLScriptElement, M, D>> | ScriptTask<El<HTMLScriptElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLScriptElement, M, D>>,
  p4?: ScriptTask<El<HTMLScriptElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLScriptElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLScriptElement, M, D>>): ReactiveTreeNode<El<HTMLScriptElement, M, D>> {
  //
  return describe(Script.name, HtmlTags.script, p1, p2, p3, p4, p5)
}

// Section

export function Section<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Section<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Section<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Section<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Section<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Section<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Section.name, HtmlTags.section, p1, p2, p3, p4, p5)
}

// Select

export function Select<M = unknown, D = unknown>(
  setup: Script<El<HTMLSelectElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLSelectElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLSelectElement, M, D>>): ReactiveTreeNode<El<HTMLSelectElement, M, D>>

export function Select<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLSelectElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLSelectElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLSelectElement, M, D>>): ReactiveTreeNode<El<HTMLSelectElement, M, D>>

export function Select<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLSelectElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLSelectElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLSelectElement, M, D>>): ReactiveTreeNode<El<HTMLSelectElement, M, D>>

export function Select<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLSelectElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLSelectElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLSelectElement, M, D>>): ReactiveTreeNode<El<HTMLSelectElement, M, D>>

export function Select<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLSelectElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLSelectElement, M, D>>): ReactiveTreeNode<El<HTMLSelectElement, M, D>>

export function Select<M = unknown, D = unknown>(
  p1?: Script<El<HTMLSelectElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLSelectElement, M, D>>,
  p2?: Script<El<HTMLSelectElement, M, D>> | ScriptTask<El<HTMLSelectElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLSelectElement, M, D>>,
  p3?: Script<El<HTMLSelectElement, M, D>> | ScriptTask<El<HTMLSelectElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLSelectElement, M, D>>,
  p4?: ScriptTask<El<HTMLSelectElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLSelectElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLSelectElement, M, D>>): ReactiveTreeNode<El<HTMLSelectElement, M, D>> {
  //
  return describe(Select.name, HtmlTags.select, p1, p2, p3, p4, p5)
}

// Small

export function Small<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Small<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Small<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Small<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Small<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Small<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Small.name, HtmlTags.small, p1, p2, p3, p4, p5)
}

// Source

export function Source<M = unknown, D = unknown>(
  setup: Script<El<HTMLSourceElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLSourceElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLSourceElement, M, D>>): ReactiveTreeNode<El<HTMLSourceElement, M, D>>

export function Source<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLSourceElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLSourceElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLSourceElement, M, D>>): ReactiveTreeNode<El<HTMLSourceElement, M, D>>

export function Source<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLSourceElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLSourceElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLSourceElement, M, D>>): ReactiveTreeNode<El<HTMLSourceElement, M, D>>

export function Source<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLSourceElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLSourceElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLSourceElement, M, D>>): ReactiveTreeNode<El<HTMLSourceElement, M, D>>

export function Source<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLSourceElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLSourceElement, M, D>>): ReactiveTreeNode<El<HTMLSourceElement, M, D>>

export function Source<M = unknown, D = unknown>(
  p1?: Script<El<HTMLSourceElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLSourceElement, M, D>>,
  p2?: Script<El<HTMLSourceElement, M, D>> | ScriptTask<El<HTMLSourceElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLSourceElement, M, D>>,
  p3?: Script<El<HTMLSourceElement, M, D>> | ScriptTask<El<HTMLSourceElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLSourceElement, M, D>>,
  p4?: ScriptTask<El<HTMLSourceElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLSourceElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLSourceElement, M, D>>): ReactiveTreeNode<El<HTMLSourceElement, M, D>> {
  //
  return describe(Source.name, HtmlTags.source, p1, p2, p3, p4, p5)
}

// Span

export function Span<M = unknown, D = unknown>(
  setup: Script<El<HTMLSpanElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLSpanElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLSpanElement, M, D>>): ReactiveTreeNode<El<HTMLSpanElement, M, D>>

export function Span<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLSpanElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLSpanElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLSpanElement, M, D>>): ReactiveTreeNode<El<HTMLSpanElement, M, D>>

export function Span<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLSpanElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLSpanElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLSpanElement, M, D>>): ReactiveTreeNode<El<HTMLSpanElement, M, D>>

export function Span<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLSpanElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLSpanElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLSpanElement, M, D>>): ReactiveTreeNode<El<HTMLSpanElement, M, D>>

export function Span<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLSpanElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLSpanElement, M, D>>): ReactiveTreeNode<El<HTMLSpanElement, M, D>>

export function Span<M = unknown, D = unknown>(
  p1?: Script<El<HTMLSpanElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLSpanElement, M, D>>,
  p2?: Script<El<HTMLSpanElement, M, D>> | ScriptTask<El<HTMLSpanElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLSpanElement, M, D>>,
  p3?: Script<El<HTMLSpanElement, M, D>> | ScriptTask<El<HTMLSpanElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLSpanElement, M, D>>,
  p4?: ScriptTask<El<HTMLSpanElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLSpanElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLSpanElement, M, D>>): ReactiveTreeNode<El<HTMLSpanElement, M, D>> {
  //
  return describe(Span.name, HtmlTags.span, p1, p2, p3, p4, p5)
}

// Strong

export function Strong<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Strong<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Strong<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Strong<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Strong<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Strong<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Strong.name, HtmlTags.strong, p1, p2, p3, p4, p5)
}

// Style

export function Style<M = unknown, D = unknown>(
  setup: Script<El<HTMLStyleElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLStyleElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLStyleElement, M, D>>): ReactiveTreeNode<El<HTMLStyleElement, M, D>>

export function Style<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLStyleElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLStyleElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLStyleElement, M, D>>): ReactiveTreeNode<El<HTMLStyleElement, M, D>>

export function Style<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLStyleElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLStyleElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLStyleElement, M, D>>): ReactiveTreeNode<El<HTMLStyleElement, M, D>>

export function Style<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLStyleElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLStyleElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLStyleElement, M, D>>): ReactiveTreeNode<El<HTMLStyleElement, M, D>>

export function Style<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLStyleElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLStyleElement, M, D>>): ReactiveTreeNode<El<HTMLStyleElement, M, D>>

export function Style<M = unknown, D = unknown>(
  p1?: Script<El<HTMLStyleElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLStyleElement, M, D>>,
  p2?: Script<El<HTMLStyleElement, M, D>> | ScriptTask<El<HTMLStyleElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLStyleElement, M, D>>,
  p3?: Script<El<HTMLStyleElement, M, D>> | ScriptTask<El<HTMLStyleElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLStyleElement, M, D>>,
  p4?: ScriptTask<El<HTMLStyleElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLStyleElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLStyleElement, M, D>>): ReactiveTreeNode<El<HTMLStyleElement, M, D>> {
  //
  return describe(Style.name, HtmlTags.style, p1, p2, p3, p4, p5)
}

// Sub

export function Sub<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Sub<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Sub<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Sub<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Sub<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Sub<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Sub.name, HtmlTags.sub, p1, p2, p3, p4, p5)
}

// Summary

export function Summary<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Summary<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Summary<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Summary<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Summary<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Summary<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Summary.name, HtmlTags.summary, p1, p2, p3, p4, p5)
}

// Sup

export function Sup<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Sup<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Sup<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Sup<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Sup<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Sup<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Sup.name, HtmlTags.sup, p1, p2, p3, p4, p5)
}

// Tbl

export function Tbl<M = unknown, D = unknown>(
  setup: Script<El<HTMLTableElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableElement, M, D>>): ReactiveTreeNode<El<HTMLTableElement, M, D>>

export function Tbl<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLTableElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableElement, M, D>>): ReactiveTreeNode<El<HTMLTableElement, M, D>>

export function Tbl<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTableElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableElement, M, D>>): ReactiveTreeNode<El<HTMLTableElement, M, D>>

export function Tbl<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLTableElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableElement, M, D>>): ReactiveTreeNode<El<HTMLTableElement, M, D>>

export function Tbl<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLTableElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableElement, M, D>>): ReactiveTreeNode<El<HTMLTableElement, M, D>>

export function Tbl<M = unknown, D = unknown>(
  p1?: Script<El<HTMLTableElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTableElement, M, D>>,
  p2?: Script<El<HTMLTableElement, M, D>> | ScriptTask<El<HTMLTableElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLTableElement, M, D>>,
  p3?: Script<El<HTMLTableElement, M, D>> | ScriptTask<El<HTMLTableElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLTableElement, M, D>>,
  p4?: ScriptTask<El<HTMLTableElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLTableElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLTableElement, M, D>>): ReactiveTreeNode<El<HTMLTableElement, M, D>> {
  //
  return describe(Tbl.name, HtmlTags.table, p1, p2, p3, p4, p5)
}

// Template

export function Template<M = unknown, D = unknown>(
  setup: Script<El<HTMLTemplateElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTemplateElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTemplateElement, M, D>>): ReactiveTreeNode<El<HTMLTemplateElement, M, D>>

export function Template<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLTemplateElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTemplateElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTemplateElement, M, D>>): ReactiveTreeNode<El<HTMLTemplateElement, M, D>>

export function Template<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTemplateElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTemplateElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTemplateElement, M, D>>): ReactiveTreeNode<El<HTMLTemplateElement, M, D>>

export function Template<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLTemplateElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTemplateElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTemplateElement, M, D>>): ReactiveTreeNode<El<HTMLTemplateElement, M, D>>

export function Template<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLTemplateElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTemplateElement, M, D>>): ReactiveTreeNode<El<HTMLTemplateElement, M, D>>

export function Template<M = unknown, D = unknown>(
  p1?: Script<El<HTMLTemplateElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTemplateElement, M, D>>,
  p2?: Script<El<HTMLTemplateElement, M, D>> | ScriptTask<El<HTMLTemplateElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLTemplateElement, M, D>>,
  p3?: Script<El<HTMLTemplateElement, M, D>> | ScriptTask<El<HTMLTemplateElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLTemplateElement, M, D>>,
  p4?: ScriptTask<El<HTMLTemplateElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLTemplateElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLTemplateElement, M, D>>): ReactiveTreeNode<El<HTMLTemplateElement, M, D>> {
  //
  return describe(Template.name, HtmlTags.template, p1, p2, p3, p4, p5)
}

// TBody

export function TBody<M = unknown, D = unknown>(
  setup: Script<El<HTMLTableSectionElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableSectionElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>>

export function TBody<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLTableSectionElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableSectionElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>>

export function TBody<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTableSectionElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableSectionElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>>

export function TBody<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLTableSectionElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableSectionElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>>

export function TBody<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>>

export function TBody<M = unknown, D = unknown>(
  p1?: Script<El<HTMLTableSectionElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>,
  p2?: Script<El<HTMLTableSectionElement, M, D>> | ScriptTask<El<HTMLTableSectionElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>,
  p3?: Script<El<HTMLTableSectionElement, M, D>> | ScriptTask<El<HTMLTableSectionElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>,
  p4?: ScriptTask<El<HTMLTableSectionElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>> {
  //
  return describe(TBody.name, HtmlTags.tbody, p1, p2, p3, p4, p5)
}

// TD

export function TD<M = unknown, D = unknown>(
  setup: Script<El<HTMLTableCellElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableCellElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableCellElement, M, D>>): ReactiveTreeNode<El<HTMLTableCellElement, M, D>>

export function TD<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLTableCellElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableCellElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableCellElement, M, D>>): ReactiveTreeNode<El<HTMLTableCellElement, M, D>>

export function TD<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTableCellElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableCellElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableCellElement, M, D>>): ReactiveTreeNode<El<HTMLTableCellElement, M, D>>

export function TD<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLTableCellElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableCellElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableCellElement, M, D>>): ReactiveTreeNode<El<HTMLTableCellElement, M, D>>

export function TD<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLTableCellElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableCellElement, M, D>>): ReactiveTreeNode<El<HTMLTableCellElement, M, D>>

export function TD<M = unknown, D = unknown>(
  p1?: Script<El<HTMLTableCellElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTableCellElement, M, D>>,
  p2?: Script<El<HTMLTableCellElement, M, D>> | ScriptTask<El<HTMLTableCellElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLTableCellElement, M, D>>,
  p3?: Script<El<HTMLTableCellElement, M, D>> | ScriptTask<El<HTMLTableCellElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLTableCellElement, M, D>>,
  p4?: ScriptTask<El<HTMLTableCellElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLTableCellElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLTableCellElement, M, D>>): ReactiveTreeNode<El<HTMLTableCellElement, M, D>> {
  //
  return describe(TD.name, HtmlTags.td, p1, p2, p3, p4, p5)
}

// TextArea

export function TextArea<M = unknown, D = unknown>(
  setup: Script<El<HTMLTextAreaElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTextAreaElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTextAreaElement, M, D>>): ReactiveTreeNode<El<HTMLTextAreaElement, M, D>>

export function TextArea<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLTextAreaElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTextAreaElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTextAreaElement, M, D>>): ReactiveTreeNode<El<HTMLTextAreaElement, M, D>>

export function TextArea<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTextAreaElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTextAreaElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTextAreaElement, M, D>>): ReactiveTreeNode<El<HTMLTextAreaElement, M, D>>

export function TextArea<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLTextAreaElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTextAreaElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTextAreaElement, M, D>>): ReactiveTreeNode<El<HTMLTextAreaElement, M, D>>

export function TextArea<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLTextAreaElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTextAreaElement, M, D>>): ReactiveTreeNode<El<HTMLTextAreaElement, M, D>>

export function TextArea<M = unknown, D = unknown>(
  p1?: Script<El<HTMLTextAreaElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTextAreaElement, M, D>>,
  p2?: Script<El<HTMLTextAreaElement, M, D>> | ScriptTask<El<HTMLTextAreaElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLTextAreaElement, M, D>>,
  p3?: Script<El<HTMLTextAreaElement, M, D>> | ScriptTask<El<HTMLTextAreaElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLTextAreaElement, M, D>>,
  p4?: ScriptTask<El<HTMLTextAreaElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLTextAreaElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLTextAreaElement, M, D>>): ReactiveTreeNode<El<HTMLTextAreaElement, M, D>> {
  //
  return describe(TextArea.name, HtmlTags.textarea, p1, p2, p3, p4, p5)
}

// TFoot

export function TFoot<M = unknown, D = unknown>(
  setup: Script<El<HTMLTableSectionElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableSectionElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>>

export function TFoot<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLTableSectionElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableSectionElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>>

export function TFoot<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTableSectionElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableSectionElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>>

export function TFoot<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLTableSectionElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableSectionElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>>

export function TFoot<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>>

export function TFoot<M = unknown, D = unknown>(
  p1?: Script<El<HTMLTableSectionElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>,
  p2?: Script<El<HTMLTableSectionElement, M, D>> | ScriptTask<El<HTMLTableSectionElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>,
  p3?: Script<El<HTMLTableSectionElement, M, D>> | ScriptTask<El<HTMLTableSectionElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>,
  p4?: ScriptTask<El<HTMLTableSectionElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>> {
  //
  return describe(TFoot.name, HtmlTags.tfoot, p1, p2, p3, p4, p5)
}

// TH

export function TH<M = unknown, D = unknown>(
  setup: Script<El<HTMLTableCellElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableCellElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableCellElement, M, D>>): ReactiveTreeNode<El<HTMLTableCellElement, M, D>>

export function TH<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLTableCellElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableCellElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableCellElement, M, D>>): ReactiveTreeNode<El<HTMLTableCellElement, M, D>>

export function TH<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTableCellElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableCellElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableCellElement, M, D>>): ReactiveTreeNode<El<HTMLTableCellElement, M, D>>

export function TH<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLTableCellElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableCellElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableCellElement, M, D>>): ReactiveTreeNode<El<HTMLTableCellElement, M, D>>

export function TH<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLTableCellElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableCellElement, M, D>>): ReactiveTreeNode<El<HTMLTableCellElement, M, D>>

export function TH<M = unknown, D = unknown>(
  p1?: Script<El<HTMLTableCellElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTableCellElement, M, D>>,
  p2?: Script<El<HTMLTableCellElement, M, D>> | ScriptTask<El<HTMLTableCellElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLTableCellElement, M, D>>,
  p3?: Script<El<HTMLTableCellElement, M, D>> | ScriptTask<El<HTMLTableCellElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLTableCellElement, M, D>>,
  p4?: ScriptTask<El<HTMLTableCellElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLTableCellElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLTableCellElement, M, D>>): ReactiveTreeNode<El<HTMLTableCellElement, M, D>> {
  //
  return describe(TH.name, HtmlTags.th, p1, p2, p3, p4, p5)
}

// THead

export function THead<M = unknown, D = unknown>(
  setup: Script<El<HTMLTableSectionElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableSectionElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>>

export function THead<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLTableSectionElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableSectionElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>>

export function THead<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTableSectionElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableSectionElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>>

export function THead<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLTableSectionElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableSectionElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>>

export function THead<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>>

export function THead<M = unknown, D = unknown>(
  p1?: Script<El<HTMLTableSectionElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>,
  p2?: Script<El<HTMLTableSectionElement, M, D>> | ScriptTask<El<HTMLTableSectionElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>,
  p3?: Script<El<HTMLTableSectionElement, M, D>> | ScriptTask<El<HTMLTableSectionElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>,
  p4?: ScriptTask<El<HTMLTableSectionElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>> {
  //
  return describe(THead.name, HtmlTags.thead, p1, p2, p3, p4, p5)
}

// Time

export function Time<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Time<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Time<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Time<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Time<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Time<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Time.name, HtmlTags.time, p1, p2, p3, p4, p5)
}

// Title

export function Title<M = unknown, D = unknown>(
  setup: Script<El<HTMLTitleElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTitleElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTitleElement, M, D>>): ReactiveTreeNode<El<HTMLTitleElement, M, D>>

export function Title<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLTitleElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTitleElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTitleElement, M, D>>): ReactiveTreeNode<El<HTMLTitleElement, M, D>>

export function Title<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTitleElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTitleElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTitleElement, M, D>>): ReactiveTreeNode<El<HTMLTitleElement, M, D>>

export function Title<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLTitleElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTitleElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTitleElement, M, D>>): ReactiveTreeNode<El<HTMLTitleElement, M, D>>

export function Title<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLTitleElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTitleElement, M, D>>): ReactiveTreeNode<El<HTMLTitleElement, M, D>>

export function Title<M = unknown, D = unknown>(
  p1?: Script<El<HTMLTitleElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTitleElement, M, D>>,
  p2?: Script<El<HTMLTitleElement, M, D>> | ScriptTask<El<HTMLTitleElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLTitleElement, M, D>>,
  p3?: Script<El<HTMLTitleElement, M, D>> | ScriptTask<El<HTMLTitleElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLTitleElement, M, D>>,
  p4?: ScriptTask<El<HTMLTitleElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLTitleElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLTitleElement, M, D>>): ReactiveTreeNode<El<HTMLTitleElement, M, D>> {
  //
  return describe(Title.name, HtmlTags.title, p1, p2, p3, p4, p5)
}

// TR

export function TR<M = unknown, D = unknown>(
  setup: Script<El<HTMLTableRowElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableRowElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableRowElement, M, D>>): ReactiveTreeNode<El<HTMLTableRowElement, M, D>>

export function TR<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLTableRowElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableRowElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableRowElement, M, D>>): ReactiveTreeNode<El<HTMLTableRowElement, M, D>>

export function TR<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTableRowElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableRowElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableRowElement, M, D>>): ReactiveTreeNode<El<HTMLTableRowElement, M, D>>

export function TR<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLTableRowElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTableRowElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableRowElement, M, D>>): ReactiveTreeNode<El<HTMLTableRowElement, M, D>>

export function TR<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLTableRowElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableRowElement, M, D>>): ReactiveTreeNode<El<HTMLTableRowElement, M, D>>

export function TR<M = unknown, D = unknown>(
  p1?: Script<El<HTMLTableRowElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTableRowElement, M, D>>,
  p2?: Script<El<HTMLTableRowElement, M, D>> | ScriptTask<El<HTMLTableRowElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLTableRowElement, M, D>>,
  p3?: Script<El<HTMLTableRowElement, M, D>> | ScriptTask<El<HTMLTableRowElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLTableRowElement, M, D>>,
  p4?: ScriptTask<El<HTMLTableRowElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLTableRowElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLTableRowElement, M, D>>): ReactiveTreeNode<El<HTMLTableRowElement, M, D>> {
  //
  return describe(TR.name, HtmlTags.tr, p1, p2, p3, p4, p5)
}

// Track

export function Track<M = unknown, D = unknown>(
  setup: Script<El<HTMLTrackElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTrackElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTrackElement, M, D>>): ReactiveTreeNode<El<HTMLTrackElement, M, D>>

export function Track<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLTrackElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTrackElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTrackElement, M, D>>): ReactiveTreeNode<El<HTMLTrackElement, M, D>>

export function Track<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTrackElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTrackElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTrackElement, M, D>>): ReactiveTreeNode<El<HTMLTrackElement, M, D>>

export function Track<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLTrackElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLTrackElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTrackElement, M, D>>): ReactiveTreeNode<El<HTMLTrackElement, M, D>>

export function Track<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLTrackElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLTrackElement, M, D>>): ReactiveTreeNode<El<HTMLTrackElement, M, D>>

export function Track<M = unknown, D = unknown>(
  p1?: Script<El<HTMLTrackElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTrackElement, M, D>>,
  p2?: Script<El<HTMLTrackElement, M, D>> | ScriptTask<El<HTMLTrackElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLTrackElement, M, D>>,
  p3?: Script<El<HTMLTrackElement, M, D>> | ScriptTask<El<HTMLTrackElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLTrackElement, M, D>>,
  p4?: ScriptTask<El<HTMLTrackElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLTrackElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLTrackElement, M, D>>): ReactiveTreeNode<El<HTMLTrackElement, M, D>> {
  //
  return describe(Track.name, HtmlTags.track, p1, p2, p3, p4, p5)
}

// U

export function U<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function U<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function U<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function U<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function U<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function U<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(U.name, HtmlTags.u, p1, p2, p3, p4, p5)
}

// UL

export function UL<M = unknown, D = unknown>(
  setup: Script<El<HTMLUListElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLUListElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLUListElement, M, D>>): ReactiveTreeNode<El<HTMLUListElement, M, D>>

export function UL<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLUListElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLUListElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLUListElement, M, D>>): ReactiveTreeNode<El<HTMLUListElement, M, D>>

export function UL<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLUListElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLUListElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLUListElement, M, D>>): ReactiveTreeNode<El<HTMLUListElement, M, D>>

export function UL<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLUListElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLUListElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLUListElement, M, D>>): ReactiveTreeNode<El<HTMLUListElement, M, D>>

export function UL<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLUListElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLUListElement, M, D>>): ReactiveTreeNode<El<HTMLUListElement, M, D>>

export function UL<M = unknown, D = unknown>(
  p1?: Script<El<HTMLUListElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLUListElement, M, D>>,
  p2?: Script<El<HTMLUListElement, M, D>> | ScriptTask<El<HTMLUListElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLUListElement, M, D>>,
  p3?: Script<El<HTMLUListElement, M, D>> | ScriptTask<El<HTMLUListElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLUListElement, M, D>>,
  p4?: ScriptTask<El<HTMLUListElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLUListElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLUListElement, M, D>>): ReactiveTreeNode<El<HTMLUListElement, M, D>> {
  //
  return describe(UL.name, HtmlTags.ul, p1, p2, p3, p4, p5)
}

// Var

export function Var<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Var<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Var<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Var<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Var<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Var<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Var.name, HtmlTags.var, p1, p2, p3, p4, p5)
}

// Video

export function Video<M = unknown, D = unknown>(
  setup: Script<El<HTMLVideoElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLVideoElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLVideoElement, M, D>>): ReactiveTreeNode<El<HTMLVideoElement, M, D>>

export function Video<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLVideoElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLVideoElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLVideoElement, M, D>>): ReactiveTreeNode<El<HTMLVideoElement, M, D>>

export function Video<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLVideoElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLVideoElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLVideoElement, M, D>>): ReactiveTreeNode<El<HTMLVideoElement, M, D>>

export function Video<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLVideoElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLVideoElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLVideoElement, M, D>>): ReactiveTreeNode<El<HTMLVideoElement, M, D>>

export function Video<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLVideoElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLVideoElement, M, D>>): ReactiveTreeNode<El<HTMLVideoElement, M, D>>

export function Video<M = unknown, D = unknown>(
  p1?: Script<El<HTMLVideoElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLVideoElement, M, D>>,
  p2?: Script<El<HTMLVideoElement, M, D>> | ScriptTask<El<HTMLVideoElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLVideoElement, M, D>>,
  p3?: Script<El<HTMLVideoElement, M, D>> | ScriptTask<El<HTMLVideoElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLVideoElement, M, D>>,
  p4?: ScriptTask<El<HTMLVideoElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLVideoElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLVideoElement, M, D>>): ReactiveTreeNode<El<HTMLVideoElement, M, D>> {
  //
  return describe(Video.name, HtmlTags.video, p1, p2, p3, p4, p5)
}

// Wbr

export function Wbr<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Wbr<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Wbr<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Wbr<M = unknown, D = unknown>(
  key: string,
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptTask<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Wbr<M = unknown, D = unknown>(
  description?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Wbr<M = unknown, D = unknown>(
  p1?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p2?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p3?: Script<El<HTMLElement, M, D>> | ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p4?: ScriptTask<El<HTMLElement, M, D>> | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  p5?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Wbr.name, HtmlTags.wbr, p1, p2, p3, p4, p5)
}


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
