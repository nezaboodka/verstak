// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2026 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, ReactiveTreeNodeDesc, type Script, Mode, ScriptAsync, describe } from "reactronic"
import { El, ElKind } from "../core/El.js"
import { HtmlDriver } from "../core/WebDriver.js"

// A

export function A<M = unknown, D = unknown>(
  setup: Script<El<HTMLAnchorElement, M, D>>): ReactiveTreeNode<El<HTMLAnchorElement, M, D>>

export function A<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLAnchorElement, M, D>>): ReactiveTreeNode<El<HTMLAnchorElement, M, D>>

export function A<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLAnchorElement, M, D>>): ReactiveTreeNode<El<HTMLAnchorElement, M, D>>

export function A<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLAnchorElement, M, D>>): ReactiveTreeNode<El<HTMLAnchorElement, M, D>>

export function A<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLAnchorElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLAnchorElement, M, D>>,
  creation?: Script<El<HTMLAnchorElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLAnchorElement, M, D>>,
  mounting?: Script<El<HTMLAnchorElement, M, D>>,
  destruction?: Script<El<HTMLAnchorElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLAnchorElement, M, D>>): ReactiveTreeNode<El<HTMLAnchorElement, M, D>>

export function A<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLAnchorElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLAnchorElement, M, D>>,
  setupOrMode?: Script<El<HTMLAnchorElement, M, D>> | Mode,
  setup?: Script<El<HTMLAnchorElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLAnchorElement, M, D>>,
  creation?: Script<El<HTMLAnchorElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLAnchorElement, M, D>>,
  mounting?: Script<El<HTMLAnchorElement, M, D>>,
  destruction?: Script<El<HTMLAnchorElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLAnchorElement, M, D>>): ReactiveTreeNode<El<HTMLAnchorElement, M, D>> {
  //
  return describe(A.name, HtmlTags.a,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Abbr

export function Abbr<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Abbr<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Abbr<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Abbr<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Abbr<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Abbr<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Abbr.name, HtmlTags.abbr,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Address

export function Address<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Address<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Address<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Address<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Address<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Address<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Address.name, HtmlTags.address,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Area

export function Area<M = unknown, D = unknown>(
  setup: Script<El<HTMLAreaElement, M, D>>): ReactiveTreeNode<El<HTMLAreaElement, M, D>>

export function Area<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLAreaElement, M, D>>): ReactiveTreeNode<El<HTMLAreaElement, M, D>>

export function Area<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLAreaElement, M, D>>): ReactiveTreeNode<El<HTMLAreaElement, M, D>>

export function Area<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLAreaElement, M, D>>): ReactiveTreeNode<El<HTMLAreaElement, M, D>>

export function Area<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLAreaElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLAreaElement, M, D>>,
  creation?: Script<El<HTMLAreaElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLAreaElement, M, D>>,
  mounting?: Script<El<HTMLAreaElement, M, D>>,
  destruction?: Script<El<HTMLAreaElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLAreaElement, M, D>>): ReactiveTreeNode<El<HTMLAreaElement, M, D>>

export function Area<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLAreaElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLAreaElement, M, D>>,
  setupOrMode?: Script<El<HTMLAreaElement, M, D>> | Mode,
  setup?: Script<El<HTMLAreaElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLAreaElement, M, D>>,
  creation?: Script<El<HTMLAreaElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLAreaElement, M, D>>,
  mounting?: Script<El<HTMLAreaElement, M, D>>,
  destruction?: Script<El<HTMLAreaElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLAreaElement, M, D>>): ReactiveTreeNode<El<HTMLAreaElement, M, D>> {
  //
  return describe(Area.name, HtmlTags.area,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Article

export function Article<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Article<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Article<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Article<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Article<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Article<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Article.name, HtmlTags.article,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Aside

export function Aside<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Aside<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Aside<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Aside<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Aside<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Aside<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Aside.name, HtmlTags.aside,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Audio

export function Audio<M = unknown, D = unknown>(
  setup: Script<El<HTMLAudioElement, M, D>>): ReactiveTreeNode<El<HTMLAudioElement, M, D>>

export function Audio<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLAudioElement, M, D>>): ReactiveTreeNode<El<HTMLAudioElement, M, D>>

export function Audio<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLAudioElement, M, D>>): ReactiveTreeNode<El<HTMLAudioElement, M, D>>

export function Audio<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLAudioElement, M, D>>): ReactiveTreeNode<El<HTMLAudioElement, M, D>>

export function Audio<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLAudioElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLAudioElement, M, D>>,
  creation?: Script<El<HTMLAudioElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLAudioElement, M, D>>,
  mounting?: Script<El<HTMLAudioElement, M, D>>,
  destruction?: Script<El<HTMLAudioElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLAudioElement, M, D>>): ReactiveTreeNode<El<HTMLAudioElement, M, D>>

export function Audio<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLAudioElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLAudioElement, M, D>>,
  setupOrMode?: Script<El<HTMLAudioElement, M, D>> | Mode,
  setup?: Script<El<HTMLAudioElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLAudioElement, M, D>>,
  creation?: Script<El<HTMLAudioElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLAudioElement, M, D>>,
  mounting?: Script<El<HTMLAudioElement, M, D>>,
  destruction?: Script<El<HTMLAudioElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLAudioElement, M, D>>): ReactiveTreeNode<El<HTMLAudioElement, M, D>> {
  //
  return describe(Audio.name, HtmlTags.audio,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// B

export function B<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function B<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function B<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function B<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function B<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function B<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(B.name, HtmlTags.b,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Base

export function Base<M = unknown, D = unknown>(
  setup: Script<El<HTMLBaseElement, M, D>>): ReactiveTreeNode<El<HTMLBaseElement, M, D>>

export function Base<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLBaseElement, M, D>>): ReactiveTreeNode<El<HTMLBaseElement, M, D>>

export function Base<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLBaseElement, M, D>>): ReactiveTreeNode<El<HTMLBaseElement, M, D>>

export function Base<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLBaseElement, M, D>>): ReactiveTreeNode<El<HTMLBaseElement, M, D>>

export function Base<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLBaseElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLBaseElement, M, D>>,
  creation?: Script<El<HTMLBaseElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLBaseElement, M, D>>,
  mounting?: Script<El<HTMLBaseElement, M, D>>,
  destruction?: Script<El<HTMLBaseElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLBaseElement, M, D>>): ReactiveTreeNode<El<HTMLBaseElement, M, D>>

export function Base<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLBaseElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLBaseElement, M, D>>,
  setupOrMode?: Script<El<HTMLBaseElement, M, D>> | Mode,
  setup?: Script<El<HTMLBaseElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLBaseElement, M, D>>,
  creation?: Script<El<HTMLBaseElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLBaseElement, M, D>>,
  mounting?: Script<El<HTMLBaseElement, M, D>>,
  destruction?: Script<El<HTMLBaseElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLBaseElement, M, D>>): ReactiveTreeNode<El<HTMLBaseElement, M, D>> {
  //
  return describe(Base.name, HtmlTags.base,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Bdi

export function Bdi<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Bdi<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Bdi<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Bdi<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Bdi<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Bdi<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Bdi.name, HtmlTags.bdi,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Bdo

export function Bdo<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Bdo<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Bdo<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Bdo<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Bdo<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Bdo<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Bdo.name, HtmlTags.bdo,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Big

export function Big<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Big<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Big<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Big<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Big<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Big<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Big.name, HtmlTags.big,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// BlockQuote

export function BlockQuote<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function BlockQuote<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function BlockQuote<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function BlockQuote<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function BlockQuote<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function BlockQuote<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(BlockQuote.name, HtmlTags.blockquote,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Body

export function Body<M = unknown, D = unknown>(
  setup: Script<El<HTMLBodyElement, M, D>>): ReactiveTreeNode<El<HTMLBodyElement, M, D>>

export function Body<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLBodyElement, M, D>>): ReactiveTreeNode<El<HTMLBodyElement, M, D>>

export function Body<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLBodyElement, M, D>>): ReactiveTreeNode<El<HTMLBodyElement, M, D>>

export function Body<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLBodyElement, M, D>>): ReactiveTreeNode<El<HTMLBodyElement, M, D>>

export function Body<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLBodyElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLBodyElement, M, D>>,
  creation?: Script<El<HTMLBodyElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLBodyElement, M, D>>,
  mounting?: Script<El<HTMLBodyElement, M, D>>,
  destruction?: Script<El<HTMLBodyElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLBodyElement, M, D>>): ReactiveTreeNode<El<HTMLBodyElement, M, D>>

export function Body<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLBodyElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLBodyElement, M, D>>,
  setupOrMode?: Script<El<HTMLBodyElement, M, D>> | Mode,
  setup?: Script<El<HTMLBodyElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLBodyElement, M, D>>,
  creation?: Script<El<HTMLBodyElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLBodyElement, M, D>>,
  mounting?: Script<El<HTMLBodyElement, M, D>>,
  destruction?: Script<El<HTMLBodyElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLBodyElement, M, D>>): ReactiveTreeNode<El<HTMLBodyElement, M, D>> {
  //
  return describe(Body.name, HtmlTags.body,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// BR

export function BR<M = unknown, D = unknown>(
  setup: Script<El<HTMLBRElement, M, D>>): ReactiveTreeNode<El<HTMLBRElement, M, D>>

export function BR<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLBRElement, M, D>>): ReactiveTreeNode<El<HTMLBRElement, M, D>>

export function BR<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLBRElement, M, D>>): ReactiveTreeNode<El<HTMLBRElement, M, D>>

export function BR<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLBRElement, M, D>>): ReactiveTreeNode<El<HTMLBRElement, M, D>>

export function BR<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLBRElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLBRElement, M, D>>,
  creation?: Script<El<HTMLBRElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLBRElement, M, D>>,
  mounting?: Script<El<HTMLBRElement, M, D>>,
  destruction?: Script<El<HTMLBRElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLBRElement, M, D>>): ReactiveTreeNode<El<HTMLBRElement, M, D>>

export function BR<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLBRElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLBRElement, M, D>>,
  setupOrMode?: Script<El<HTMLBRElement, M, D>> | Mode,
  setup?: Script<El<HTMLBRElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLBRElement, M, D>>,
  creation?: Script<El<HTMLBRElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLBRElement, M, D>>,
  mounting?: Script<El<HTMLBRElement, M, D>>,
  destruction?: Script<El<HTMLBRElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLBRElement, M, D>>): ReactiveTreeNode<El<HTMLBRElement, M, D>> {
  //
  return describe(BR.name, HtmlTags.br,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Button

export function Button<M = unknown, D = unknown>(
  setup: Script<El<HTMLButtonElement, M, D>>): ReactiveTreeNode<El<HTMLButtonElement, M, D>>

export function Button<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLButtonElement, M, D>>): ReactiveTreeNode<El<HTMLButtonElement, M, D>>

export function Button<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLButtonElement, M, D>>): ReactiveTreeNode<El<HTMLButtonElement, M, D>>

export function Button<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLButtonElement, M, D>>): ReactiveTreeNode<El<HTMLButtonElement, M, D>>

export function Button<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLButtonElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLButtonElement, M, D>>,
  creation?: Script<El<HTMLButtonElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLButtonElement, M, D>>,
  mounting?: Script<El<HTMLButtonElement, M, D>>,
  destruction?: Script<El<HTMLButtonElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLButtonElement, M, D>>): ReactiveTreeNode<El<HTMLButtonElement, M, D>>

export function Button<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLButtonElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLButtonElement, M, D>>,
  setupOrMode?: Script<El<HTMLButtonElement, M, D>> | Mode,
  setup?: Script<El<HTMLButtonElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLButtonElement, M, D>>,
  creation?: Script<El<HTMLButtonElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLButtonElement, M, D>>,
  mounting?: Script<El<HTMLButtonElement, M, D>>,
  destruction?: Script<El<HTMLButtonElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLButtonElement, M, D>>): ReactiveTreeNode<El<HTMLButtonElement, M, D>> {
  //
  return describe(Button.name, HtmlTags.button,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Canvas

export function Canvas<M = unknown, D = unknown>(
  setup: Script<El<HTMLCanvasElement, M, D>>): ReactiveTreeNode<El<HTMLCanvasElement, M, D>>

export function Canvas<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLCanvasElement, M, D>>): ReactiveTreeNode<El<HTMLCanvasElement, M, D>>

export function Canvas<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLCanvasElement, M, D>>): ReactiveTreeNode<El<HTMLCanvasElement, M, D>>

export function Canvas<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLCanvasElement, M, D>>): ReactiveTreeNode<El<HTMLCanvasElement, M, D>>

export function Canvas<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLCanvasElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLCanvasElement, M, D>>,
  creation?: Script<El<HTMLCanvasElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLCanvasElement, M, D>>,
  mounting?: Script<El<HTMLCanvasElement, M, D>>,
  destruction?: Script<El<HTMLCanvasElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLCanvasElement, M, D>>): ReactiveTreeNode<El<HTMLCanvasElement, M, D>>

export function Canvas<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLCanvasElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLCanvasElement, M, D>>,
  setupOrMode?: Script<El<HTMLCanvasElement, M, D>> | Mode,
  setup?: Script<El<HTMLCanvasElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLCanvasElement, M, D>>,
  creation?: Script<El<HTMLCanvasElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLCanvasElement, M, D>>,
  mounting?: Script<El<HTMLCanvasElement, M, D>>,
  destruction?: Script<El<HTMLCanvasElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLCanvasElement, M, D>>): ReactiveTreeNode<El<HTMLCanvasElement, M, D>> {
  //
  return describe(Canvas.name, HtmlTags.canvas,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Caption

export function Caption<M = unknown, D = unknown>(
  setup: Script<El<HTMLTableCaptionElement, M, D>>): ReactiveTreeNode<El<HTMLTableCaptionElement, M, D>>

export function Caption<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLTableCaptionElement, M, D>>): ReactiveTreeNode<El<HTMLTableCaptionElement, M, D>>

export function Caption<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTableCaptionElement, M, D>>): ReactiveTreeNode<El<HTMLTableCaptionElement, M, D>>

export function Caption<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLTableCaptionElement, M, D>>): ReactiveTreeNode<El<HTMLTableCaptionElement, M, D>>

export function Caption<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLTableCaptionElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLTableCaptionElement, M, D>>,
  creation?: Script<El<HTMLTableCaptionElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLTableCaptionElement, M, D>>,
  mounting?: Script<El<HTMLTableCaptionElement, M, D>>,
  destruction?: Script<El<HTMLTableCaptionElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableCaptionElement, M, D>>): ReactiveTreeNode<El<HTMLTableCaptionElement, M, D>>

export function Caption<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLTableCaptionElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTableCaptionElement, M, D>>,
  setupOrMode?: Script<El<HTMLTableCaptionElement, M, D>> | Mode,
  setup?: Script<El<HTMLTableCaptionElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLTableCaptionElement, M, D>>,
  creation?: Script<El<HTMLTableCaptionElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLTableCaptionElement, M, D>>,
  mounting?: Script<El<HTMLTableCaptionElement, M, D>>,
  destruction?: Script<El<HTMLTableCaptionElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableCaptionElement, M, D>>): ReactiveTreeNode<El<HTMLTableCaptionElement, M, D>> {
  //
  return describe(Caption.name, HtmlTags.caption,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Cite

export function Cite<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Cite<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Cite<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Cite<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Cite<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Cite<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Cite.name, HtmlTags.cite,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Code

export function Code<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Code<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Code<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Code<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Code<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Code<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Code.name, HtmlTags.code,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Col

export function Col<M = unknown, D = unknown>(
  setup: Script<El<HTMLTableColElement, M, D>>): ReactiveTreeNode<El<HTMLTableColElement, M, D>>

export function Col<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLTableColElement, M, D>>): ReactiveTreeNode<El<HTMLTableColElement, M, D>>

export function Col<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTableColElement, M, D>>): ReactiveTreeNode<El<HTMLTableColElement, M, D>>

export function Col<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLTableColElement, M, D>>): ReactiveTreeNode<El<HTMLTableColElement, M, D>>

export function Col<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLTableColElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLTableColElement, M, D>>,
  creation?: Script<El<HTMLTableColElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLTableColElement, M, D>>,
  mounting?: Script<El<HTMLTableColElement, M, D>>,
  destruction?: Script<El<HTMLTableColElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableColElement, M, D>>): ReactiveTreeNode<El<HTMLTableColElement, M, D>>

export function Col<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLTableColElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTableColElement, M, D>>,
  setupOrMode?: Script<El<HTMLTableColElement, M, D>> | Mode,
  setup?: Script<El<HTMLTableColElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLTableColElement, M, D>>,
  creation?: Script<El<HTMLTableColElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLTableColElement, M, D>>,
  mounting?: Script<El<HTMLTableColElement, M, D>>,
  destruction?: Script<El<HTMLTableColElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableColElement, M, D>>): ReactiveTreeNode<El<HTMLTableColElement, M, D>> {
  //
  return describe(Col.name, HtmlTags.col,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// ColGroup

export function ColGroup<M = unknown, D = unknown>(
  setup: Script<El<HTMLTableColElement, M, D>>): ReactiveTreeNode<El<HTMLTableColElement, M, D>>

export function ColGroup<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLTableColElement, M, D>>): ReactiveTreeNode<El<HTMLTableColElement, M, D>>

export function ColGroup<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTableColElement, M, D>>): ReactiveTreeNode<El<HTMLTableColElement, M, D>>

export function ColGroup<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLTableColElement, M, D>>): ReactiveTreeNode<El<HTMLTableColElement, M, D>>

export function ColGroup<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLTableColElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLTableColElement, M, D>>,
  creation?: Script<El<HTMLTableColElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLTableColElement, M, D>>,
  mounting?: Script<El<HTMLTableColElement, M, D>>,
  destruction?: Script<El<HTMLTableColElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableColElement, M, D>>): ReactiveTreeNode<El<HTMLTableColElement, M, D>>

export function ColGroup<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLTableColElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTableColElement, M, D>>,
  setupOrMode?: Script<El<HTMLTableColElement, M, D>> | Mode,
  setup?: Script<El<HTMLTableColElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLTableColElement, M, D>>,
  creation?: Script<El<HTMLTableColElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLTableColElement, M, D>>,
  mounting?: Script<El<HTMLTableColElement, M, D>>,
  destruction?: Script<El<HTMLTableColElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableColElement, M, D>>): ReactiveTreeNode<El<HTMLTableColElement, M, D>> {
  //
  return describe(ColGroup.name, HtmlTags.colgroup,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Data

export function Data<M = unknown, D = unknown>(
  setup: Script<El<HTMLDataElement, M, D>>): ReactiveTreeNode<El<HTMLDataElement, M, D>>

export function Data<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLDataElement, M, D>>): ReactiveTreeNode<El<HTMLDataElement, M, D>>

export function Data<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLDataElement, M, D>>): ReactiveTreeNode<El<HTMLDataElement, M, D>>

export function Data<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLDataElement, M, D>>): ReactiveTreeNode<El<HTMLDataElement, M, D>>

export function Data<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLDataElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLDataElement, M, D>>,
  creation?: Script<El<HTMLDataElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLDataElement, M, D>>,
  mounting?: Script<El<HTMLDataElement, M, D>>,
  destruction?: Script<El<HTMLDataElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLDataElement, M, D>>): ReactiveTreeNode<El<HTMLDataElement, M, D>>

export function Data<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLDataElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLDataElement, M, D>>,
  setupOrMode?: Script<El<HTMLDataElement, M, D>> | Mode,
  setup?: Script<El<HTMLDataElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLDataElement, M, D>>,
  creation?: Script<El<HTMLDataElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLDataElement, M, D>>,
  mounting?: Script<El<HTMLDataElement, M, D>>,
  destruction?: Script<El<HTMLDataElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLDataElement, M, D>>): ReactiveTreeNode<El<HTMLDataElement, M, D>> {
  //
  return describe(Data.name, HtmlTags.data,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// DataList

export function DataList<M = unknown, D = unknown>(
  setup: Script<El<HTMLDataListElement, M, D>>): ReactiveTreeNode<El<HTMLDataListElement, M, D>>

export function DataList<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLDataListElement, M, D>>): ReactiveTreeNode<El<HTMLDataListElement, M, D>>

export function DataList<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLDataListElement, M, D>>): ReactiveTreeNode<El<HTMLDataListElement, M, D>>

export function DataList<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLDataListElement, M, D>>): ReactiveTreeNode<El<HTMLDataListElement, M, D>>

export function DataList<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLDataListElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLDataListElement, M, D>>,
  creation?: Script<El<HTMLDataListElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLDataListElement, M, D>>,
  mounting?: Script<El<HTMLDataListElement, M, D>>,
  destruction?: Script<El<HTMLDataListElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLDataListElement, M, D>>): ReactiveTreeNode<El<HTMLDataListElement, M, D>>

export function DataList<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLDataListElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLDataListElement, M, D>>,
  setupOrMode?: Script<El<HTMLDataListElement, M, D>> | Mode,
  setup?: Script<El<HTMLDataListElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLDataListElement, M, D>>,
  creation?: Script<El<HTMLDataListElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLDataListElement, M, D>>,
  mounting?: Script<El<HTMLDataListElement, M, D>>,
  destruction?: Script<El<HTMLDataListElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLDataListElement, M, D>>): ReactiveTreeNode<El<HTMLDataListElement, M, D>> {
  //
  return describe(DataList.name, HtmlTags.datalist,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// DD

export function DD<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function DD<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function DD<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function DD<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function DD<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function DD<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(DD.name, HtmlTags.dd,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Del

export function Del<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Del<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Del<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Del<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Del<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Del<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Del.name, HtmlTags.del,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Details

export function Details<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Details<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Details<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Details<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Details<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Details<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Details.name, HtmlTags.details,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Dfn

export function Dfn<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Dfn<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Dfn<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Dfn<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Dfn<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Dfn<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Dfn.name, HtmlTags.dfn,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Div

export function Div<M = unknown, D = unknown>(
  setup: Script<El<HTMLDivElement, M, D>>): ReactiveTreeNode<El<HTMLDivElement, M, D>>

export function Div<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLDivElement, M, D>>): ReactiveTreeNode<El<HTMLDivElement, M, D>>

export function Div<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLDivElement, M, D>>): ReactiveTreeNode<El<HTMLDivElement, M, D>>

export function Div<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLDivElement, M, D>>): ReactiveTreeNode<El<HTMLDivElement, M, D>>

export function Div<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLDivElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLDivElement, M, D>>,
  creation?: Script<El<HTMLDivElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLDivElement, M, D>>,
  mounting?: Script<El<HTMLDivElement, M, D>>,
  destruction?: Script<El<HTMLDivElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLDivElement, M, D>>): ReactiveTreeNode<El<HTMLDivElement, M, D>>

export function Div<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLDivElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLDivElement, M, D>>,
  setupOrMode?: Script<El<HTMLDivElement, M, D>> | Mode,
  setup?: Script<El<HTMLDivElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLDivElement, M, D>>,
  creation?: Script<El<HTMLDivElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLDivElement, M, D>>,
  mounting?: Script<El<HTMLDivElement, M, D>>,
  destruction?: Script<El<HTMLDivElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLDivElement, M, D>>): ReactiveTreeNode<El<HTMLDivElement, M, D>> {
  //
  return describe(Div.name, HtmlTags.div,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// DL

export function DL<M = unknown, D = unknown>(
  setup: Script<El<HTMLDListElement, M, D>>): ReactiveTreeNode<El<HTMLDListElement, M, D>>

export function DL<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLDListElement, M, D>>): ReactiveTreeNode<El<HTMLDListElement, M, D>>

export function DL<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLDListElement, M, D>>): ReactiveTreeNode<El<HTMLDListElement, M, D>>

export function DL<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLDListElement, M, D>>): ReactiveTreeNode<El<HTMLDListElement, M, D>>

export function DL<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLDListElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLDListElement, M, D>>,
  creation?: Script<El<HTMLDListElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLDListElement, M, D>>,
  mounting?: Script<El<HTMLDListElement, M, D>>,
  destruction?: Script<El<HTMLDListElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLDListElement, M, D>>): ReactiveTreeNode<El<HTMLDListElement, M, D>>

export function DL<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLDListElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLDListElement, M, D>>,
  setupOrMode?: Script<El<HTMLDListElement, M, D>> | Mode,
  setup?: Script<El<HTMLDListElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLDListElement, M, D>>,
  creation?: Script<El<HTMLDListElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLDListElement, M, D>>,
  mounting?: Script<El<HTMLDListElement, M, D>>,
  destruction?: Script<El<HTMLDListElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLDListElement, M, D>>): ReactiveTreeNode<El<HTMLDListElement, M, D>> {
  //
  return describe(DL.name, HtmlTags.dl,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// DT

export function DT<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function DT<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function DT<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function DT<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function DT<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function DT<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(DT.name, HtmlTags.dt,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// EM

export function EM<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function EM<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function EM<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function EM<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function EM<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function EM<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(EM.name, HtmlTags.em,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Embed

export function Embed<M = unknown, D = unknown>(
  setup: Script<El<HTMLEmbedElement, M, D>>): ReactiveTreeNode<El<HTMLEmbedElement, M, D>>

export function Embed<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLEmbedElement, M, D>>): ReactiveTreeNode<El<HTMLEmbedElement, M, D>>

export function Embed<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLEmbedElement, M, D>>): ReactiveTreeNode<El<HTMLEmbedElement, M, D>>

export function Embed<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLEmbedElement, M, D>>): ReactiveTreeNode<El<HTMLEmbedElement, M, D>>

export function Embed<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLEmbedElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLEmbedElement, M, D>>,
  creation?: Script<El<HTMLEmbedElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLEmbedElement, M, D>>,
  mounting?: Script<El<HTMLEmbedElement, M, D>>,
  destruction?: Script<El<HTMLEmbedElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLEmbedElement, M, D>>): ReactiveTreeNode<El<HTMLEmbedElement, M, D>>

export function Embed<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLEmbedElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLEmbedElement, M, D>>,
  setupOrMode?: Script<El<HTMLEmbedElement, M, D>> | Mode,
  setup?: Script<El<HTMLEmbedElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLEmbedElement, M, D>>,
  creation?: Script<El<HTMLEmbedElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLEmbedElement, M, D>>,
  mounting?: Script<El<HTMLEmbedElement, M, D>>,
  destruction?: Script<El<HTMLEmbedElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLEmbedElement, M, D>>): ReactiveTreeNode<El<HTMLEmbedElement, M, D>> {
  //
  return describe(Embed.name, HtmlTags.embed,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// FieldSet

export function FieldSet<M = unknown, D = unknown>(
  setup: Script<El<HTMLFieldSetElement, M, D>>): ReactiveTreeNode<El<HTMLFieldSetElement, M, D>>

export function FieldSet<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLFieldSetElement, M, D>>): ReactiveTreeNode<El<HTMLFieldSetElement, M, D>>

export function FieldSet<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLFieldSetElement, M, D>>): ReactiveTreeNode<El<HTMLFieldSetElement, M, D>>

export function FieldSet<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLFieldSetElement, M, D>>): ReactiveTreeNode<El<HTMLFieldSetElement, M, D>>

export function FieldSet<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLFieldSetElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLFieldSetElement, M, D>>,
  creation?: Script<El<HTMLFieldSetElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLFieldSetElement, M, D>>,
  mounting?: Script<El<HTMLFieldSetElement, M, D>>,
  destruction?: Script<El<HTMLFieldSetElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLFieldSetElement, M, D>>): ReactiveTreeNode<El<HTMLFieldSetElement, M, D>>

export function FieldSet<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLFieldSetElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLFieldSetElement, M, D>>,
  setupOrMode?: Script<El<HTMLFieldSetElement, M, D>> | Mode,
  setup?: Script<El<HTMLFieldSetElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLFieldSetElement, M, D>>,
  creation?: Script<El<HTMLFieldSetElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLFieldSetElement, M, D>>,
  mounting?: Script<El<HTMLFieldSetElement, M, D>>,
  destruction?: Script<El<HTMLFieldSetElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLFieldSetElement, M, D>>): ReactiveTreeNode<El<HTMLFieldSetElement, M, D>> {
  //
  return describe(FieldSet.name, HtmlTags.fieldset,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// FigCaption

export function FigCaption<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function FigCaption<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function FigCaption<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function FigCaption<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function FigCaption<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function FigCaption<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(FigCaption.name, HtmlTags.figcaption,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Figure

export function Figure<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Figure<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Figure<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Figure<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Figure<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Figure<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Figure.name, HtmlTags.figure,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Footer

export function Footer<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Footer<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Footer<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Footer<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Footer<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Footer<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Footer.name, HtmlTags.footer,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Form

export function Form<M = unknown, D = unknown>(
  setup: Script<El<HTMLFormElement, M, D>>): ReactiveTreeNode<El<HTMLFormElement, M, D>>

export function Form<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLFormElement, M, D>>): ReactiveTreeNode<El<HTMLFormElement, M, D>>

export function Form<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLFormElement, M, D>>): ReactiveTreeNode<El<HTMLFormElement, M, D>>

export function Form<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLFormElement, M, D>>): ReactiveTreeNode<El<HTMLFormElement, M, D>>

export function Form<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLFormElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLFormElement, M, D>>,
  creation?: Script<El<HTMLFormElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLFormElement, M, D>>,
  mounting?: Script<El<HTMLFormElement, M, D>>,
  destruction?: Script<El<HTMLFormElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLFormElement, M, D>>): ReactiveTreeNode<El<HTMLFormElement, M, D>>

export function Form<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLFormElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLFormElement, M, D>>,
  setupOrMode?: Script<El<HTMLFormElement, M, D>> | Mode,
  setup?: Script<El<HTMLFormElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLFormElement, M, D>>,
  creation?: Script<El<HTMLFormElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLFormElement, M, D>>,
  mounting?: Script<El<HTMLFormElement, M, D>>,
  destruction?: Script<El<HTMLFormElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLFormElement, M, D>>): ReactiveTreeNode<El<HTMLFormElement, M, D>> {
  //
  return describe(Form.name, HtmlTags.form,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// H1

export function H1<M = unknown, D = unknown>(
  setup: Script<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H1<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H1<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H1<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H1<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLHeadingElement, M, D>>,
  creation?: Script<El<HTMLHeadingElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLHeadingElement, M, D>>,
  mounting?: Script<El<HTMLHeadingElement, M, D>>,
  destruction?: Script<El<HTMLHeadingElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H1<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLHeadingElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  setupOrMode?: Script<El<HTMLHeadingElement, M, D>> | Mode,
  setup?: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLHeadingElement, M, D>>,
  creation?: Script<El<HTMLHeadingElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLHeadingElement, M, D>>,
  mounting?: Script<El<HTMLHeadingElement, M, D>>,
  destruction?: Script<El<HTMLHeadingElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>> {
  //
  return describe(H1.name, HtmlTags.h1,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// H2

export function H2<M = unknown, D = unknown>(
  setup: Script<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H2<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H2<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H2<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H2<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLHeadingElement, M, D>>,
  creation?: Script<El<HTMLHeadingElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLHeadingElement, M, D>>,
  mounting?: Script<El<HTMLHeadingElement, M, D>>,
  destruction?: Script<El<HTMLHeadingElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H2<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLHeadingElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  setupOrMode?: Script<El<HTMLHeadingElement, M, D>> | Mode,
  setup?: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLHeadingElement, M, D>>,
  creation?: Script<El<HTMLHeadingElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLHeadingElement, M, D>>,
  mounting?: Script<El<HTMLHeadingElement, M, D>>,
  destruction?: Script<El<HTMLHeadingElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>> {
  //
  return describe(H2.name, HtmlTags.h2,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// H3

export function H3<M = unknown, D = unknown>(
  setup: Script<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H3<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H3<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H3<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H3<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLHeadingElement, M, D>>,
  creation?: Script<El<HTMLHeadingElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLHeadingElement, M, D>>,
  mounting?: Script<El<HTMLHeadingElement, M, D>>,
  destruction?: Script<El<HTMLHeadingElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H3<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLHeadingElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  setupOrMode?: Script<El<HTMLHeadingElement, M, D>> | Mode,
  setup?: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLHeadingElement, M, D>>,
  creation?: Script<El<HTMLHeadingElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLHeadingElement, M, D>>,
  mounting?: Script<El<HTMLHeadingElement, M, D>>,
  destruction?: Script<El<HTMLHeadingElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>> {
  //
  return describe(H3.name, HtmlTags.h3,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// H4

export function H4<M = unknown, D = unknown>(
  setup: Script<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H4<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H4<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H4<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H4<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLHeadingElement, M, D>>,
  creation?: Script<El<HTMLHeadingElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLHeadingElement, M, D>>,
  mounting?: Script<El<HTMLHeadingElement, M, D>>,
  destruction?: Script<El<HTMLHeadingElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H4<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLHeadingElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  setupOrMode?: Script<El<HTMLHeadingElement, M, D>> | Mode,
  setup?: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLHeadingElement, M, D>>,
  creation?: Script<El<HTMLHeadingElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLHeadingElement, M, D>>,
  mounting?: Script<El<HTMLHeadingElement, M, D>>,
  destruction?: Script<El<HTMLHeadingElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>> {
  //
  return describe(H4.name, HtmlTags.h4,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// H5

export function H5<M = unknown, D = unknown>(
  setup: Script<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H5<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H5<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H5<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H5<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLHeadingElement, M, D>>,
  creation?: Script<El<HTMLHeadingElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLHeadingElement, M, D>>,
  mounting?: Script<El<HTMLHeadingElement, M, D>>,
  destruction?: Script<El<HTMLHeadingElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H5<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLHeadingElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  setupOrMode?: Script<El<HTMLHeadingElement, M, D>> | Mode,
  setup?: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLHeadingElement, M, D>>,
  creation?: Script<El<HTMLHeadingElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLHeadingElement, M, D>>,
  mounting?: Script<El<HTMLHeadingElement, M, D>>,
  destruction?: Script<El<HTMLHeadingElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>> {
  //
  return describe(H5.name, HtmlTags.h5,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// H6

export function H6<M = unknown, D = unknown>(
  setup: Script<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H6<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H6<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H6<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H6<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLHeadingElement, M, D>>,
  creation?: Script<El<HTMLHeadingElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLHeadingElement, M, D>>,
  mounting?: Script<El<HTMLHeadingElement, M, D>>,
  destruction?: Script<El<HTMLHeadingElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>>

export function H6<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLHeadingElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>,
  setupOrMode?: Script<El<HTMLHeadingElement, M, D>> | Mode,
  setup?: Script<El<HTMLHeadingElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLHeadingElement, M, D>>,
  creation?: Script<El<HTMLHeadingElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLHeadingElement, M, D>>,
  mounting?: Script<El<HTMLHeadingElement, M, D>>,
  destruction?: Script<El<HTMLHeadingElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M, D>>): ReactiveTreeNode<El<HTMLHeadingElement, M, D>> {
  //
  return describe(H6.name, HtmlTags.h6,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Head

export function Head<M = unknown, D = unknown>(
  setup: Script<El<HTMLHeadElement, M, D>>): ReactiveTreeNode<El<HTMLHeadElement, M, D>>

export function Head<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLHeadElement, M, D>>): ReactiveTreeNode<El<HTMLHeadElement, M, D>>

export function Head<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLHeadElement, M, D>>): ReactiveTreeNode<El<HTMLHeadElement, M, D>>

export function Head<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLHeadElement, M, D>>): ReactiveTreeNode<El<HTMLHeadElement, M, D>>

export function Head<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLHeadElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLHeadElement, M, D>>,
  creation?: Script<El<HTMLHeadElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLHeadElement, M, D>>,
  mounting?: Script<El<HTMLHeadElement, M, D>>,
  destruction?: Script<El<HTMLHeadElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadElement, M, D>>): ReactiveTreeNode<El<HTMLHeadElement, M, D>>

export function Head<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLHeadElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLHeadElement, M, D>>,
  setupOrMode?: Script<El<HTMLHeadElement, M, D>> | Mode,
  setup?: Script<El<HTMLHeadElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLHeadElement, M, D>>,
  creation?: Script<El<HTMLHeadElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLHeadElement, M, D>>,
  mounting?: Script<El<HTMLHeadElement, M, D>>,
  destruction?: Script<El<HTMLHeadElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadElement, M, D>>): ReactiveTreeNode<El<HTMLHeadElement, M, D>> {
  //
  return describe(Head.name, HtmlTags.head,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Header

export function Header<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Header<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Header<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Header<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Header<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Header<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Header.name, HtmlTags.header,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// HGroup

export function HGroup<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function HGroup<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function HGroup<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function HGroup<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function HGroup<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function HGroup<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(HGroup.name, HtmlTags.hgroup,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// HR

export function HR<M = unknown, D = unknown>(
  setup: Script<El<HTMLHRElement, M, D>>): ReactiveTreeNode<El<HTMLHRElement, M, D>>

export function HR<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLHRElement, M, D>>): ReactiveTreeNode<El<HTMLHRElement, M, D>>

export function HR<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLHRElement, M, D>>): ReactiveTreeNode<El<HTMLHRElement, M, D>>

export function HR<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLHRElement, M, D>>): ReactiveTreeNode<El<HTMLHRElement, M, D>>

export function HR<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLHRElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLHRElement, M, D>>,
  creation?: Script<El<HTMLHRElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLHRElement, M, D>>,
  mounting?: Script<El<HTMLHRElement, M, D>>,
  destruction?: Script<El<HTMLHRElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHRElement, M, D>>): ReactiveTreeNode<El<HTMLHRElement, M, D>>

export function HR<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLHRElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLHRElement, M, D>>,
  setupOrMode?: Script<El<HTMLHRElement, M, D>> | Mode,
  setup?: Script<El<HTMLHRElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLHRElement, M, D>>,
  creation?: Script<El<HTMLHRElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLHRElement, M, D>>,
  mounting?: Script<El<HTMLHRElement, M, D>>,
  destruction?: Script<El<HTMLHRElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHRElement, M, D>>): ReactiveTreeNode<El<HTMLHRElement, M, D>> {
  //
  return describe(HR.name, HtmlTags.hr,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Html

export function Html<M = unknown, D = unknown>(
  setup: Script<El<HTMLHtmlElement, M, D>>): ReactiveTreeNode<El<HTMLHtmlElement, M, D>>

export function Html<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLHtmlElement, M, D>>): ReactiveTreeNode<El<HTMLHtmlElement, M, D>>

export function Html<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLHtmlElement, M, D>>): ReactiveTreeNode<El<HTMLHtmlElement, M, D>>

export function Html<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLHtmlElement, M, D>>): ReactiveTreeNode<El<HTMLHtmlElement, M, D>>

export function Html<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLHtmlElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLHtmlElement, M, D>>,
  creation?: Script<El<HTMLHtmlElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLHtmlElement, M, D>>,
  mounting?: Script<El<HTMLHtmlElement, M, D>>,
  destruction?: Script<El<HTMLHtmlElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHtmlElement, M, D>>): ReactiveTreeNode<El<HTMLHtmlElement, M, D>>

export function Html<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLHtmlElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLHtmlElement, M, D>>,
  setupOrMode?: Script<El<HTMLHtmlElement, M, D>> | Mode,
  setup?: Script<El<HTMLHtmlElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLHtmlElement, M, D>>,
  creation?: Script<El<HTMLHtmlElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLHtmlElement, M, D>>,
  mounting?: Script<El<HTMLHtmlElement, M, D>>,
  destruction?: Script<El<HTMLHtmlElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHtmlElement, M, D>>): ReactiveTreeNode<El<HTMLHtmlElement, M, D>> {
  //
  return describe(Html.name, HtmlTags.html,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// I

export function I<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function I<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function I<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function I<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function I<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function I<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(I.name, HtmlTags.i,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// IFrame

export function IFrame<M = unknown, D = unknown>(
  setup: Script<El<HTMLIFrameElement, M, D>>): ReactiveTreeNode<El<HTMLIFrameElement, M, D>>

export function IFrame<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLIFrameElement, M, D>>): ReactiveTreeNode<El<HTMLIFrameElement, M, D>>

export function IFrame<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLIFrameElement, M, D>>): ReactiveTreeNode<El<HTMLIFrameElement, M, D>>

export function IFrame<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLIFrameElement, M, D>>): ReactiveTreeNode<El<HTMLIFrameElement, M, D>>

export function IFrame<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLIFrameElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLIFrameElement, M, D>>,
  creation?: Script<El<HTMLIFrameElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLIFrameElement, M, D>>,
  mounting?: Script<El<HTMLIFrameElement, M, D>>,
  destruction?: Script<El<HTMLIFrameElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLIFrameElement, M, D>>): ReactiveTreeNode<El<HTMLIFrameElement, M, D>>

export function IFrame<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLIFrameElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLIFrameElement, M, D>>,
  setupOrMode?: Script<El<HTMLIFrameElement, M, D>> | Mode,
  setup?: Script<El<HTMLIFrameElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLIFrameElement, M, D>>,
  creation?: Script<El<HTMLIFrameElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLIFrameElement, M, D>>,
  mounting?: Script<El<HTMLIFrameElement, M, D>>,
  destruction?: Script<El<HTMLIFrameElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLIFrameElement, M, D>>): ReactiveTreeNode<El<HTMLIFrameElement, M, D>> {
  //
  return describe(IFrame.name, HtmlTags.iframe,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Img

export function Img<M = unknown, D = unknown>(
  setup: Script<El<HTMLImageElement, M, D>>): ReactiveTreeNode<El<HTMLImageElement, M, D>>

export function Img<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLImageElement, M, D>>): ReactiveTreeNode<El<HTMLImageElement, M, D>>

export function Img<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLImageElement, M, D>>): ReactiveTreeNode<El<HTMLImageElement, M, D>>

export function Img<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLImageElement, M, D>>): ReactiveTreeNode<El<HTMLImageElement, M, D>>

export function Img<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLImageElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLImageElement, M, D>>,
  creation?: Script<El<HTMLImageElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLImageElement, M, D>>,
  mounting?: Script<El<HTMLImageElement, M, D>>,
  destruction?: Script<El<HTMLImageElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLImageElement, M, D>>): ReactiveTreeNode<El<HTMLImageElement, M, D>>

export function Img<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLImageElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLImageElement, M, D>>,
  setupOrMode?: Script<El<HTMLImageElement, M, D>> | Mode,
  setup?: Script<El<HTMLImageElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLImageElement, M, D>>,
  creation?: Script<El<HTMLImageElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLImageElement, M, D>>,
  mounting?: Script<El<HTMLImageElement, M, D>>,
  destruction?: Script<El<HTMLImageElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLImageElement, M, D>>): ReactiveTreeNode<El<HTMLImageElement, M, D>> {
  //
  return describe(Img.name, HtmlTags.img,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Input

export function Input<M = unknown, D = unknown>(
  setup: Script<El<HTMLInputElement, M, D>>): ReactiveTreeNode<El<HTMLInputElement, M, D>>

export function Input<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLInputElement, M, D>>): ReactiveTreeNode<El<HTMLInputElement, M, D>>

export function Input<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLInputElement, M, D>>): ReactiveTreeNode<El<HTMLInputElement, M, D>>

export function Input<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLInputElement, M, D>>): ReactiveTreeNode<El<HTMLInputElement, M, D>>

export function Input<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLInputElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLInputElement, M, D>>,
  creation?: Script<El<HTMLInputElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLInputElement, M, D>>,
  mounting?: Script<El<HTMLInputElement, M, D>>,
  destruction?: Script<El<HTMLInputElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLInputElement, M, D>>): ReactiveTreeNode<El<HTMLInputElement, M, D>>

export function Input<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLInputElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLInputElement, M, D>>,
  setupOrMode?: Script<El<HTMLInputElement, M, D>> | Mode,
  setup?: Script<El<HTMLInputElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLInputElement, M, D>>,
  creation?: Script<El<HTMLInputElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLInputElement, M, D>>,
  mounting?: Script<El<HTMLInputElement, M, D>>,
  destruction?: Script<El<HTMLInputElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLInputElement, M, D>>): ReactiveTreeNode<El<HTMLInputElement, M, D>> {
  //
  return describe(Input.name, HtmlTags.input,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Ins

export function Ins<M = unknown, D = unknown>(
  setup: Script<El<HTMLModElement, M, D>>): ReactiveTreeNode<El<HTMLModElement, M, D>>

export function Ins<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLModElement, M, D>>): ReactiveTreeNode<El<HTMLModElement, M, D>>

export function Ins<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLModElement, M, D>>): ReactiveTreeNode<El<HTMLModElement, M, D>>

export function Ins<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLModElement, M, D>>): ReactiveTreeNode<El<HTMLModElement, M, D>>

export function Ins<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLModElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLModElement, M, D>>,
  creation?: Script<El<HTMLModElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLModElement, M, D>>,
  mounting?: Script<El<HTMLModElement, M, D>>,
  destruction?: Script<El<HTMLModElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLModElement, M, D>>): ReactiveTreeNode<El<HTMLModElement, M, D>>

export function Ins<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLModElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLModElement, M, D>>,
  setupOrMode?: Script<El<HTMLModElement, M, D>> | Mode,
  setup?: Script<El<HTMLModElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLModElement, M, D>>,
  creation?: Script<El<HTMLModElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLModElement, M, D>>,
  mounting?: Script<El<HTMLModElement, M, D>>,
  destruction?: Script<El<HTMLModElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLModElement, M, D>>): ReactiveTreeNode<El<HTMLModElement, M, D>> {
  //
  return describe(Ins.name, HtmlTags.ins,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Kbd

export function Kbd<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Kbd<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Kbd<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Kbd<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Kbd<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Kbd<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Kbd.name, HtmlTags.kbd,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// KeyGen

export function KeyGen<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function KeyGen<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function KeyGen<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function KeyGen<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function KeyGen<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function KeyGen<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(KeyGen.name, HtmlTags.keygen,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Label

export function Label<M = unknown, D = unknown>(
  setup: Script<El<HTMLLabelElement, M, D>>): ReactiveTreeNode<El<HTMLLabelElement, M, D>>

export function Label<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLLabelElement, M, D>>): ReactiveTreeNode<El<HTMLLabelElement, M, D>>

export function Label<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLLabelElement, M, D>>): ReactiveTreeNode<El<HTMLLabelElement, M, D>>

export function Label<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLLabelElement, M, D>>): ReactiveTreeNode<El<HTMLLabelElement, M, D>>

export function Label<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLLabelElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLLabelElement, M, D>>,
  creation?: Script<El<HTMLLabelElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLLabelElement, M, D>>,
  mounting?: Script<El<HTMLLabelElement, M, D>>,
  destruction?: Script<El<HTMLLabelElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLLabelElement, M, D>>): ReactiveTreeNode<El<HTMLLabelElement, M, D>>

export function Label<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLLabelElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLLabelElement, M, D>>,
  setupOrMode?: Script<El<HTMLLabelElement, M, D>> | Mode,
  setup?: Script<El<HTMLLabelElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLLabelElement, M, D>>,
  creation?: Script<El<HTMLLabelElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLLabelElement, M, D>>,
  mounting?: Script<El<HTMLLabelElement, M, D>>,
  destruction?: Script<El<HTMLLabelElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLLabelElement, M, D>>): ReactiveTreeNode<El<HTMLLabelElement, M, D>> {
  //
  return describe(Label.name, HtmlTags.label,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Legend

export function Legend<M = unknown, D = unknown>(
  setup: Script<El<HTMLLegendElement, M, D>>): ReactiveTreeNode<El<HTMLLegendElement, M, D>>

export function Legend<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLLegendElement, M, D>>): ReactiveTreeNode<El<HTMLLegendElement, M, D>>

export function Legend<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLLegendElement, M, D>>): ReactiveTreeNode<El<HTMLLegendElement, M, D>>

export function Legend<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLLegendElement, M, D>>): ReactiveTreeNode<El<HTMLLegendElement, M, D>>

export function Legend<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLLegendElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLLegendElement, M, D>>,
  creation?: Script<El<HTMLLegendElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLLegendElement, M, D>>,
  mounting?: Script<El<HTMLLegendElement, M, D>>,
  destruction?: Script<El<HTMLLegendElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLLegendElement, M, D>>): ReactiveTreeNode<El<HTMLLegendElement, M, D>>

export function Legend<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLLegendElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLLegendElement, M, D>>,
  setupOrMode?: Script<El<HTMLLegendElement, M, D>> | Mode,
  setup?: Script<El<HTMLLegendElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLLegendElement, M, D>>,
  creation?: Script<El<HTMLLegendElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLLegendElement, M, D>>,
  mounting?: Script<El<HTMLLegendElement, M, D>>,
  destruction?: Script<El<HTMLLegendElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLLegendElement, M, D>>): ReactiveTreeNode<El<HTMLLegendElement, M, D>> {
  //
  return describe(Legend.name, HtmlTags.legend,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// LI

export function LI<M = unknown, D = unknown>(
  setup: Script<El<HTMLLIElement, M, D>>): ReactiveTreeNode<El<HTMLLIElement, M, D>>

export function LI<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLLIElement, M, D>>): ReactiveTreeNode<El<HTMLLIElement, M, D>>

export function LI<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLLIElement, M, D>>): ReactiveTreeNode<El<HTMLLIElement, M, D>>

export function LI<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLLIElement, M, D>>): ReactiveTreeNode<El<HTMLLIElement, M, D>>

export function LI<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLLIElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLLIElement, M, D>>,
  creation?: Script<El<HTMLLIElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLLIElement, M, D>>,
  mounting?: Script<El<HTMLLIElement, M, D>>,
  destruction?: Script<El<HTMLLIElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLLIElement, M, D>>): ReactiveTreeNode<El<HTMLLIElement, M, D>>

export function LI<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLLIElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLLIElement, M, D>>,
  setupOrMode?: Script<El<HTMLLIElement, M, D>> | Mode,
  setup?: Script<El<HTMLLIElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLLIElement, M, D>>,
  creation?: Script<El<HTMLLIElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLLIElement, M, D>>,
  mounting?: Script<El<HTMLLIElement, M, D>>,
  destruction?: Script<El<HTMLLIElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLLIElement, M, D>>): ReactiveTreeNode<El<HTMLLIElement, M, D>> {
  //
  return describe(LI.name, HtmlTags.li,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Link

export function Link<M = unknown, D = unknown>(
  setup: Script<El<HTMLLinkElement, M, D>>): ReactiveTreeNode<El<HTMLLinkElement, M, D>>

export function Link<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLLinkElement, M, D>>): ReactiveTreeNode<El<HTMLLinkElement, M, D>>

export function Link<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLLinkElement, M, D>>): ReactiveTreeNode<El<HTMLLinkElement, M, D>>

export function Link<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLLinkElement, M, D>>): ReactiveTreeNode<El<HTMLLinkElement, M, D>>

export function Link<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLLinkElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLLinkElement, M, D>>,
  creation?: Script<El<HTMLLinkElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLLinkElement, M, D>>,
  mounting?: Script<El<HTMLLinkElement, M, D>>,
  destruction?: Script<El<HTMLLinkElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLLinkElement, M, D>>): ReactiveTreeNode<El<HTMLLinkElement, M, D>>

export function Link<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLLinkElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLLinkElement, M, D>>,
  setupOrMode?: Script<El<HTMLLinkElement, M, D>> | Mode,
  setup?: Script<El<HTMLLinkElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLLinkElement, M, D>>,
  creation?: Script<El<HTMLLinkElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLLinkElement, M, D>>,
  mounting?: Script<El<HTMLLinkElement, M, D>>,
  destruction?: Script<El<HTMLLinkElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLLinkElement, M, D>>): ReactiveTreeNode<El<HTMLLinkElement, M, D>> {
  //
  return describe(Link.name, HtmlTags.link,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Main

export function Main<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Main<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Main<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Main<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Main<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Main<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Main.name, HtmlTags.main,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Map

export function Map<M = unknown, D = unknown>(
  setup: Script<El<HTMLMapElement, M, D>>): ReactiveTreeNode<El<HTMLMapElement, M, D>>

export function Map<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLMapElement, M, D>>): ReactiveTreeNode<El<HTMLMapElement, M, D>>

export function Map<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLMapElement, M, D>>): ReactiveTreeNode<El<HTMLMapElement, M, D>>

export function Map<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLMapElement, M, D>>): ReactiveTreeNode<El<HTMLMapElement, M, D>>

export function Map<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLMapElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLMapElement, M, D>>,
  creation?: Script<El<HTMLMapElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLMapElement, M, D>>,
  mounting?: Script<El<HTMLMapElement, M, D>>,
  destruction?: Script<El<HTMLMapElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLMapElement, M, D>>): ReactiveTreeNode<El<HTMLMapElement, M, D>>

export function Map<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLMapElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLMapElement, M, D>>,
  setupOrMode?: Script<El<HTMLMapElement, M, D>> | Mode,
  setup?: Script<El<HTMLMapElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLMapElement, M, D>>,
  creation?: Script<El<HTMLMapElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLMapElement, M, D>>,
  mounting?: Script<El<HTMLMapElement, M, D>>,
  destruction?: Script<El<HTMLMapElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLMapElement, M, D>>): ReactiveTreeNode<El<HTMLMapElement, M, D>> {
  //
  return describe(Map.name, HtmlTags.map,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Mark

export function Mark<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Mark<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Mark<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Mark<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Mark<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Mark<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Mark.name, HtmlTags.mark,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Menu

export function Menu<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Menu<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Menu<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Menu<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Menu<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Menu<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Menu.name, HtmlTags.menu,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// MenuItem

export function MenuItem<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function MenuItem<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function MenuItem<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function MenuItem<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function MenuItem<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function MenuItem<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(MenuItem.name, HtmlTags.menuitem,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Meta

export function Meta<M = unknown, D = unknown>(
  setup: Script<El<HTMLMetaElement, M, D>>): ReactiveTreeNode<El<HTMLMetaElement, M, D>>

export function Meta<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLMetaElement, M, D>>): ReactiveTreeNode<El<HTMLMetaElement, M, D>>

export function Meta<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLMetaElement, M, D>>): ReactiveTreeNode<El<HTMLMetaElement, M, D>>

export function Meta<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLMetaElement, M, D>>): ReactiveTreeNode<El<HTMLMetaElement, M, D>>

export function Meta<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLMetaElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLMetaElement, M, D>>,
  creation?: Script<El<HTMLMetaElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLMetaElement, M, D>>,
  mounting?: Script<El<HTMLMetaElement, M, D>>,
  destruction?: Script<El<HTMLMetaElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLMetaElement, M, D>>): ReactiveTreeNode<El<HTMLMetaElement, M, D>>

export function Meta<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLMetaElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLMetaElement, M, D>>,
  setupOrMode?: Script<El<HTMLMetaElement, M, D>> | Mode,
  setup?: Script<El<HTMLMetaElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLMetaElement, M, D>>,
  creation?: Script<El<HTMLMetaElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLMetaElement, M, D>>,
  mounting?: Script<El<HTMLMetaElement, M, D>>,
  destruction?: Script<El<HTMLMetaElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLMetaElement, M, D>>): ReactiveTreeNode<El<HTMLMetaElement, M, D>> {
  //
  return describe(Meta.name, HtmlTags.meta,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Meter

export function Meter<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Meter<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Meter<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Meter<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Meter<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Meter<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Meter.name, HtmlTags.meter,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Nav

export function Nav<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Nav<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Nav<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Nav<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Nav<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Nav<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Nav.name, HtmlTags.nav,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// NoIndex

export function NoIndex<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function NoIndex<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function NoIndex<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function NoIndex<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function NoIndex<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function NoIndex<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(NoIndex.name, HtmlTags.noindex,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// NoScript

export function NoScript<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function NoScript<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function NoScript<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function NoScript<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function NoScript<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function NoScript<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(NoScript.name, HtmlTags.noscript,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Obj

export function Obj<M = unknown, D = unknown>(
  setup: Script<El<HTMLObjectElement, M, D>>): ReactiveTreeNode<El<HTMLObjectElement, M, D>>

export function Obj<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLObjectElement, M, D>>): ReactiveTreeNode<El<HTMLObjectElement, M, D>>

export function Obj<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLObjectElement, M, D>>): ReactiveTreeNode<El<HTMLObjectElement, M, D>>

export function Obj<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLObjectElement, M, D>>): ReactiveTreeNode<El<HTMLObjectElement, M, D>>

export function Obj<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLObjectElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLObjectElement, M, D>>,
  creation?: Script<El<HTMLObjectElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLObjectElement, M, D>>,
  mounting?: Script<El<HTMLObjectElement, M, D>>,
  destruction?: Script<El<HTMLObjectElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLObjectElement, M, D>>): ReactiveTreeNode<El<HTMLObjectElement, M, D>>

export function Obj<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLObjectElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLObjectElement, M, D>>,
  setupOrMode?: Script<El<HTMLObjectElement, M, D>> | Mode,
  setup?: Script<El<HTMLObjectElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLObjectElement, M, D>>,
  creation?: Script<El<HTMLObjectElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLObjectElement, M, D>>,
  mounting?: Script<El<HTMLObjectElement, M, D>>,
  destruction?: Script<El<HTMLObjectElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLObjectElement, M, D>>): ReactiveTreeNode<El<HTMLObjectElement, M, D>> {
  //
  return describe(Obj.name, HtmlTags.object,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// OL

export function OL<M = unknown, D = unknown>(
  setup: Script<El<HTMLOListElement, M, D>>): ReactiveTreeNode<El<HTMLOListElement, M, D>>

export function OL<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLOListElement, M, D>>): ReactiveTreeNode<El<HTMLOListElement, M, D>>

export function OL<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLOListElement, M, D>>): ReactiveTreeNode<El<HTMLOListElement, M, D>>

export function OL<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLOListElement, M, D>>): ReactiveTreeNode<El<HTMLOListElement, M, D>>

export function OL<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLOListElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLOListElement, M, D>>,
  creation?: Script<El<HTMLOListElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLOListElement, M, D>>,
  mounting?: Script<El<HTMLOListElement, M, D>>,
  destruction?: Script<El<HTMLOListElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLOListElement, M, D>>): ReactiveTreeNode<El<HTMLOListElement, M, D>>

export function OL<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLOListElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLOListElement, M, D>>,
  setupOrMode?: Script<El<HTMLOListElement, M, D>> | Mode,
  setup?: Script<El<HTMLOListElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLOListElement, M, D>>,
  creation?: Script<El<HTMLOListElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLOListElement, M, D>>,
  mounting?: Script<El<HTMLOListElement, M, D>>,
  destruction?: Script<El<HTMLOListElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLOListElement, M, D>>): ReactiveTreeNode<El<HTMLOListElement, M, D>> {
  //
  return describe(OL.name, HtmlTags.ol,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// OptGroup

export function OptGroup<M = unknown, D = unknown>(
  setup: Script<El<HTMLOptGroupElement, M, D>>): ReactiveTreeNode<El<HTMLOptGroupElement, M, D>>

export function OptGroup<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLOptGroupElement, M, D>>): ReactiveTreeNode<El<HTMLOptGroupElement, M, D>>

export function OptGroup<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLOptGroupElement, M, D>>): ReactiveTreeNode<El<HTMLOptGroupElement, M, D>>

export function OptGroup<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLOptGroupElement, M, D>>): ReactiveTreeNode<El<HTMLOptGroupElement, M, D>>

export function OptGroup<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLOptGroupElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLOptGroupElement, M, D>>,
  creation?: Script<El<HTMLOptGroupElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLOptGroupElement, M, D>>,
  mounting?: Script<El<HTMLOptGroupElement, M, D>>,
  destruction?: Script<El<HTMLOptGroupElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLOptGroupElement, M, D>>): ReactiveTreeNode<El<HTMLOptGroupElement, M, D>>

export function OptGroup<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLOptGroupElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLOptGroupElement, M, D>>,
  setupOrMode?: Script<El<HTMLOptGroupElement, M, D>> | Mode,
  setup?: Script<El<HTMLOptGroupElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLOptGroupElement, M, D>>,
  creation?: Script<El<HTMLOptGroupElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLOptGroupElement, M, D>>,
  mounting?: Script<El<HTMLOptGroupElement, M, D>>,
  destruction?: Script<El<HTMLOptGroupElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLOptGroupElement, M, D>>): ReactiveTreeNode<El<HTMLOptGroupElement, M, D>> {
  //
  return describe(OptGroup.name, HtmlTags.optgroup,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Option

export function Option<M = unknown, D = unknown>(
  setup: Script<El<HTMLOptionElement, M, D>>): ReactiveTreeNode<El<HTMLOptionElement, M, D>>

export function Option<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLOptionElement, M, D>>): ReactiveTreeNode<El<HTMLOptionElement, M, D>>

export function Option<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLOptionElement, M, D>>): ReactiveTreeNode<El<HTMLOptionElement, M, D>>

export function Option<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLOptionElement, M, D>>): ReactiveTreeNode<El<HTMLOptionElement, M, D>>

export function Option<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLOptionElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLOptionElement, M, D>>,
  creation?: Script<El<HTMLOptionElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLOptionElement, M, D>>,
  mounting?: Script<El<HTMLOptionElement, M, D>>,
  destruction?: Script<El<HTMLOptionElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLOptionElement, M, D>>): ReactiveTreeNode<El<HTMLOptionElement, M, D>>

export function Option<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLOptionElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLOptionElement, M, D>>,
  setupOrMode?: Script<El<HTMLOptionElement, M, D>> | Mode,
  setup?: Script<El<HTMLOptionElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLOptionElement, M, D>>,
  creation?: Script<El<HTMLOptionElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLOptionElement, M, D>>,
  mounting?: Script<El<HTMLOptionElement, M, D>>,
  destruction?: Script<El<HTMLOptionElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLOptionElement, M, D>>): ReactiveTreeNode<El<HTMLOptionElement, M, D>> {
  //
  return describe(Option.name, HtmlTags.option,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Output

export function Output<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Output<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Output<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Output<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Output<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Output<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Output.name, HtmlTags.output,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// P

export function P<M = unknown, D = unknown>(
  setup: Script<El<HTMLParagraphElement, M, D>>): ReactiveTreeNode<El<HTMLParagraphElement, M, D>>

export function P<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLParagraphElement, M, D>>): ReactiveTreeNode<El<HTMLParagraphElement, M, D>>

export function P<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLParagraphElement, M, D>>): ReactiveTreeNode<El<HTMLParagraphElement, M, D>>

export function P<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLParagraphElement, M, D>>): ReactiveTreeNode<El<HTMLParagraphElement, M, D>>

export function P<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLParagraphElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLParagraphElement, M, D>>,
  creation?: Script<El<HTMLParagraphElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLParagraphElement, M, D>>,
  mounting?: Script<El<HTMLParagraphElement, M, D>>,
  destruction?: Script<El<HTMLParagraphElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLParagraphElement, M, D>>): ReactiveTreeNode<El<HTMLParagraphElement, M, D>>

export function P<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLParagraphElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLParagraphElement, M, D>>,
  setupOrMode?: Script<El<HTMLParagraphElement, M, D>> | Mode,
  setup?: Script<El<HTMLParagraphElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLParagraphElement, M, D>>,
  creation?: Script<El<HTMLParagraphElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLParagraphElement, M, D>>,
  mounting?: Script<El<HTMLParagraphElement, M, D>>,
  destruction?: Script<El<HTMLParagraphElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLParagraphElement, M, D>>): ReactiveTreeNode<El<HTMLParagraphElement, M, D>> {
  //
  return describe(P.name, HtmlTags.p,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Param

export function Param<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Param<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Param<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Param<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Param<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Param<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Param.name, HtmlTags.param,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Picture

export function Picture<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Picture<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Picture<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Picture<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Picture<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Picture<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Picture.name, HtmlTags.picture,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Pre

export function Pre<M = unknown, D = unknown>(
  setup: Script<El<HTMLPreElement, M, D>>): ReactiveTreeNode<El<HTMLPreElement, M, D>>

export function Pre<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLPreElement, M, D>>): ReactiveTreeNode<El<HTMLPreElement, M, D>>

export function Pre<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLPreElement, M, D>>): ReactiveTreeNode<El<HTMLPreElement, M, D>>

export function Pre<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLPreElement, M, D>>): ReactiveTreeNode<El<HTMLPreElement, M, D>>

export function Pre<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLPreElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLPreElement, M, D>>,
  creation?: Script<El<HTMLPreElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLPreElement, M, D>>,
  mounting?: Script<El<HTMLPreElement, M, D>>,
  destruction?: Script<El<HTMLPreElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLPreElement, M, D>>): ReactiveTreeNode<El<HTMLPreElement, M, D>>

export function Pre<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLPreElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLPreElement, M, D>>,
  setupOrMode?: Script<El<HTMLPreElement, M, D>> | Mode,
  setup?: Script<El<HTMLPreElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLPreElement, M, D>>,
  creation?: Script<El<HTMLPreElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLPreElement, M, D>>,
  mounting?: Script<El<HTMLPreElement, M, D>>,
  destruction?: Script<El<HTMLPreElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLPreElement, M, D>>): ReactiveTreeNode<El<HTMLPreElement, M, D>> {
  //
  return describe(Pre.name, HtmlTags.pre,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Progress

export function Progress<M = unknown, D = unknown>(
  setup: Script<El<HTMLProgressElement, M, D>>): ReactiveTreeNode<El<HTMLProgressElement, M, D>>

export function Progress<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLProgressElement, M, D>>): ReactiveTreeNode<El<HTMLProgressElement, M, D>>

export function Progress<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLProgressElement, M, D>>): ReactiveTreeNode<El<HTMLProgressElement, M, D>>

export function Progress<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLProgressElement, M, D>>): ReactiveTreeNode<El<HTMLProgressElement, M, D>>

export function Progress<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLProgressElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLProgressElement, M, D>>,
  creation?: Script<El<HTMLProgressElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLProgressElement, M, D>>,
  mounting?: Script<El<HTMLProgressElement, M, D>>,
  destruction?: Script<El<HTMLProgressElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLProgressElement, M, D>>): ReactiveTreeNode<El<HTMLProgressElement, M, D>>

export function Progress<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLProgressElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLProgressElement, M, D>>,
  setupOrMode?: Script<El<HTMLProgressElement, M, D>> | Mode,
  setup?: Script<El<HTMLProgressElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLProgressElement, M, D>>,
  creation?: Script<El<HTMLProgressElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLProgressElement, M, D>>,
  mounting?: Script<El<HTMLProgressElement, M, D>>,
  destruction?: Script<El<HTMLProgressElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLProgressElement, M, D>>): ReactiveTreeNode<El<HTMLProgressElement, M, D>> {
  //
  return describe(Progress.name, HtmlTags.progress,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Q

export function Q<M = unknown, D = unknown>(
  setup: Script<El<HTMLQuoteElement, M, D>>): ReactiveTreeNode<El<HTMLQuoteElement, M, D>>

export function Q<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLQuoteElement, M, D>>): ReactiveTreeNode<El<HTMLQuoteElement, M, D>>

export function Q<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLQuoteElement, M, D>>): ReactiveTreeNode<El<HTMLQuoteElement, M, D>>

export function Q<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLQuoteElement, M, D>>): ReactiveTreeNode<El<HTMLQuoteElement, M, D>>

export function Q<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLQuoteElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLQuoteElement, M, D>>,
  creation?: Script<El<HTMLQuoteElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLQuoteElement, M, D>>,
  mounting?: Script<El<HTMLQuoteElement, M, D>>,
  destruction?: Script<El<HTMLQuoteElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLQuoteElement, M, D>>): ReactiveTreeNode<El<HTMLQuoteElement, M, D>>

export function Q<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLQuoteElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLQuoteElement, M, D>>,
  setupOrMode?: Script<El<HTMLQuoteElement, M, D>> | Mode,
  setup?: Script<El<HTMLQuoteElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLQuoteElement, M, D>>,
  creation?: Script<El<HTMLQuoteElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLQuoteElement, M, D>>,
  mounting?: Script<El<HTMLQuoteElement, M, D>>,
  destruction?: Script<El<HTMLQuoteElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLQuoteElement, M, D>>): ReactiveTreeNode<El<HTMLQuoteElement, M, D>> {
  //
  return describe(Q.name, HtmlTags.q,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// RP

export function RP<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function RP<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function RP<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function RP<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function RP<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function RP<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(RP.name, HtmlTags.rp,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// RT

export function RT<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function RT<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function RT<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function RT<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function RT<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function RT<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(RT.name, HtmlTags.rt,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Ruby

export function Ruby<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Ruby<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Ruby<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Ruby<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Ruby<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Ruby<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Ruby.name, HtmlTags.ruby,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// S

export function S<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function S<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function S<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function S<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function S<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function S<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(S.name, HtmlTags.s,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Samp

export function Samp<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Samp<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Samp<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Samp<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Samp<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Samp<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Samp.name, HtmlTags.samp,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Script

export function Script<M = unknown, D = unknown>(
  setup: Script<El<HTMLScriptElement, M, D>>): ReactiveTreeNode<El<HTMLScriptElement, M, D>>

export function Script<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLScriptElement, M, D>>): ReactiveTreeNode<El<HTMLScriptElement, M, D>>

export function Script<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLScriptElement, M, D>>): ReactiveTreeNode<El<HTMLScriptElement, M, D>>

export function Script<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLScriptElement, M, D>>): ReactiveTreeNode<El<HTMLScriptElement, M, D>>

export function Script<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLScriptElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLScriptElement, M, D>>,
  creation?: Script<El<HTMLScriptElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLScriptElement, M, D>>,
  mounting?: Script<El<HTMLScriptElement, M, D>>,
  destruction?: Script<El<HTMLScriptElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLScriptElement, M, D>>): ReactiveTreeNode<El<HTMLScriptElement, M, D>>

export function Script<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLScriptElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLScriptElement, M, D>>,
  setupOrMode?: Script<El<HTMLScriptElement, M, D>> | Mode,
  setup?: Script<El<HTMLScriptElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLScriptElement, M, D>>,
  creation?: Script<El<HTMLScriptElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLScriptElement, M, D>>,
  mounting?: Script<El<HTMLScriptElement, M, D>>,
  destruction?: Script<El<HTMLScriptElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLScriptElement, M, D>>): ReactiveTreeNode<El<HTMLScriptElement, M, D>> {
  //
  return describe(Script.name, HtmlTags.script,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Section

export function Section<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Section<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Section<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Section<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Section<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Section<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Section.name, HtmlTags.section,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Select

export function Select<M = unknown, D = unknown>(
  setup: Script<El<HTMLSelectElement, M, D>>): ReactiveTreeNode<El<HTMLSelectElement, M, D>>

export function Select<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLSelectElement, M, D>>): ReactiveTreeNode<El<HTMLSelectElement, M, D>>

export function Select<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLSelectElement, M, D>>): ReactiveTreeNode<El<HTMLSelectElement, M, D>>

export function Select<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLSelectElement, M, D>>): ReactiveTreeNode<El<HTMLSelectElement, M, D>>

export function Select<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLSelectElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLSelectElement, M, D>>,
  creation?: Script<El<HTMLSelectElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLSelectElement, M, D>>,
  mounting?: Script<El<HTMLSelectElement, M, D>>,
  destruction?: Script<El<HTMLSelectElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLSelectElement, M, D>>): ReactiveTreeNode<El<HTMLSelectElement, M, D>>

export function Select<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLSelectElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLSelectElement, M, D>>,
  setupOrMode?: Script<El<HTMLSelectElement, M, D>> | Mode,
  setup?: Script<El<HTMLSelectElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLSelectElement, M, D>>,
  creation?: Script<El<HTMLSelectElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLSelectElement, M, D>>,
  mounting?: Script<El<HTMLSelectElement, M, D>>,
  destruction?: Script<El<HTMLSelectElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLSelectElement, M, D>>): ReactiveTreeNode<El<HTMLSelectElement, M, D>> {
  //
  return describe(Select.name, HtmlTags.select,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Small

export function Small<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Small<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Small<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Small<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Small<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Small<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Small.name, HtmlTags.small,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Source

export function Source<M = unknown, D = unknown>(
  setup: Script<El<HTMLSourceElement, M, D>>): ReactiveTreeNode<El<HTMLSourceElement, M, D>>

export function Source<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLSourceElement, M, D>>): ReactiveTreeNode<El<HTMLSourceElement, M, D>>

export function Source<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLSourceElement, M, D>>): ReactiveTreeNode<El<HTMLSourceElement, M, D>>

export function Source<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLSourceElement, M, D>>): ReactiveTreeNode<El<HTMLSourceElement, M, D>>

export function Source<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLSourceElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLSourceElement, M, D>>,
  creation?: Script<El<HTMLSourceElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLSourceElement, M, D>>,
  mounting?: Script<El<HTMLSourceElement, M, D>>,
  destruction?: Script<El<HTMLSourceElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLSourceElement, M, D>>): ReactiveTreeNode<El<HTMLSourceElement, M, D>>

export function Source<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLSourceElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLSourceElement, M, D>>,
  setupOrMode?: Script<El<HTMLSourceElement, M, D>> | Mode,
  setup?: Script<El<HTMLSourceElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLSourceElement, M, D>>,
  creation?: Script<El<HTMLSourceElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLSourceElement, M, D>>,
  mounting?: Script<El<HTMLSourceElement, M, D>>,
  destruction?: Script<El<HTMLSourceElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLSourceElement, M, D>>): ReactiveTreeNode<El<HTMLSourceElement, M, D>> {
  //
  return describe(Source.name, HtmlTags.source,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Span

export function Span<M = unknown, D = unknown>(
  setup: Script<El<HTMLSpanElement, M, D>>): ReactiveTreeNode<El<HTMLSpanElement, M, D>>

export function Span<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLSpanElement, M, D>>): ReactiveTreeNode<El<HTMLSpanElement, M, D>>

export function Span<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLSpanElement, M, D>>): ReactiveTreeNode<El<HTMLSpanElement, M, D>>

export function Span<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLSpanElement, M, D>>): ReactiveTreeNode<El<HTMLSpanElement, M, D>>

export function Span<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLSpanElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLSpanElement, M, D>>,
  creation?: Script<El<HTMLSpanElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLSpanElement, M, D>>,
  mounting?: Script<El<HTMLSpanElement, M, D>>,
  destruction?: Script<El<HTMLSpanElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLSpanElement, M, D>>): ReactiveTreeNode<El<HTMLSpanElement, M, D>>

export function Span<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLSpanElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLSpanElement, M, D>>,
  setupOrMode?: Script<El<HTMLSpanElement, M, D>> | Mode,
  setup?: Script<El<HTMLSpanElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLSpanElement, M, D>>,
  creation?: Script<El<HTMLSpanElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLSpanElement, M, D>>,
  mounting?: Script<El<HTMLSpanElement, M, D>>,
  destruction?: Script<El<HTMLSpanElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLSpanElement, M, D>>): ReactiveTreeNode<El<HTMLSpanElement, M, D>> {
  //
  return describe(Span.name, HtmlTags.span,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Strong

export function Strong<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Strong<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Strong<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Strong<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Strong<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Strong<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Strong.name, HtmlTags.strong,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Style

export function Style<M = unknown, D = unknown>(
  setup: Script<El<HTMLStyleElement, M, D>>): ReactiveTreeNode<El<HTMLStyleElement, M, D>>

export function Style<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLStyleElement, M, D>>): ReactiveTreeNode<El<HTMLStyleElement, M, D>>

export function Style<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLStyleElement, M, D>>): ReactiveTreeNode<El<HTMLStyleElement, M, D>>

export function Style<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLStyleElement, M, D>>): ReactiveTreeNode<El<HTMLStyleElement, M, D>>

export function Style<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLStyleElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLStyleElement, M, D>>,
  creation?: Script<El<HTMLStyleElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLStyleElement, M, D>>,
  mounting?: Script<El<HTMLStyleElement, M, D>>,
  destruction?: Script<El<HTMLStyleElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLStyleElement, M, D>>): ReactiveTreeNode<El<HTMLStyleElement, M, D>>

export function Style<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLStyleElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLStyleElement, M, D>>,
  setupOrMode?: Script<El<HTMLStyleElement, M, D>> | Mode,
  setup?: Script<El<HTMLStyleElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLStyleElement, M, D>>,
  creation?: Script<El<HTMLStyleElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLStyleElement, M, D>>,
  mounting?: Script<El<HTMLStyleElement, M, D>>,
  destruction?: Script<El<HTMLStyleElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLStyleElement, M, D>>): ReactiveTreeNode<El<HTMLStyleElement, M, D>> {
  //
  return describe(Style.name, HtmlTags.style,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Sub

export function Sub<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Sub<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Sub<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Sub<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Sub<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Sub<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Sub.name, HtmlTags.sub,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Summary

export function Summary<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Summary<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Summary<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Summary<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Summary<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Summary<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Summary.name, HtmlTags.summary,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Sup

export function Sup<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Sup<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Sup<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Sup<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Sup<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Sup<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Sup.name, HtmlTags.sup,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Tbl

export function Tbl<M = unknown, D = unknown>(
  setup: Script<El<HTMLTableElement, M, D>>): ReactiveTreeNode<El<HTMLTableElement, M, D>>

export function Tbl<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLTableElement, M, D>>): ReactiveTreeNode<El<HTMLTableElement, M, D>>

export function Tbl<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTableElement, M, D>>): ReactiveTreeNode<El<HTMLTableElement, M, D>>

export function Tbl<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLTableElement, M, D>>): ReactiveTreeNode<El<HTMLTableElement, M, D>>

export function Tbl<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLTableElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLTableElement, M, D>>,
  creation?: Script<El<HTMLTableElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLTableElement, M, D>>,
  mounting?: Script<El<HTMLTableElement, M, D>>,
  destruction?: Script<El<HTMLTableElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableElement, M, D>>): ReactiveTreeNode<El<HTMLTableElement, M, D>>

export function Tbl<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLTableElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTableElement, M, D>>,
  setupOrMode?: Script<El<HTMLTableElement, M, D>> | Mode,
  setup?: Script<El<HTMLTableElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLTableElement, M, D>>,
  creation?: Script<El<HTMLTableElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLTableElement, M, D>>,
  mounting?: Script<El<HTMLTableElement, M, D>>,
  destruction?: Script<El<HTMLTableElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableElement, M, D>>): ReactiveTreeNode<El<HTMLTableElement, M, D>> {
  //
  return describe(Tbl.name, HtmlTags.table,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Template

export function Template<M = unknown, D = unknown>(
  setup: Script<El<HTMLTemplateElement, M, D>>): ReactiveTreeNode<El<HTMLTemplateElement, M, D>>

export function Template<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLTemplateElement, M, D>>): ReactiveTreeNode<El<HTMLTemplateElement, M, D>>

export function Template<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTemplateElement, M, D>>): ReactiveTreeNode<El<HTMLTemplateElement, M, D>>

export function Template<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLTemplateElement, M, D>>): ReactiveTreeNode<El<HTMLTemplateElement, M, D>>

export function Template<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLTemplateElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLTemplateElement, M, D>>,
  creation?: Script<El<HTMLTemplateElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLTemplateElement, M, D>>,
  mounting?: Script<El<HTMLTemplateElement, M, D>>,
  destruction?: Script<El<HTMLTemplateElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTemplateElement, M, D>>): ReactiveTreeNode<El<HTMLTemplateElement, M, D>>

export function Template<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLTemplateElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTemplateElement, M, D>>,
  setupOrMode?: Script<El<HTMLTemplateElement, M, D>> | Mode,
  setup?: Script<El<HTMLTemplateElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLTemplateElement, M, D>>,
  creation?: Script<El<HTMLTemplateElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLTemplateElement, M, D>>,
  mounting?: Script<El<HTMLTemplateElement, M, D>>,
  destruction?: Script<El<HTMLTemplateElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTemplateElement, M, D>>): ReactiveTreeNode<El<HTMLTemplateElement, M, D>> {
  //
  return describe(Template.name, HtmlTags.template,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// TBody

export function TBody<M = unknown, D = unknown>(
  setup: Script<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>>

export function TBody<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>>

export function TBody<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>>

export function TBody<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>>

export function TBody<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLTableSectionElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLTableSectionElement, M, D>>,
  creation?: Script<El<HTMLTableSectionElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLTableSectionElement, M, D>>,
  mounting?: Script<El<HTMLTableSectionElement, M, D>>,
  destruction?: Script<El<HTMLTableSectionElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>>

export function TBody<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLTableSectionElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>,
  setupOrMode?: Script<El<HTMLTableSectionElement, M, D>> | Mode,
  setup?: Script<El<HTMLTableSectionElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLTableSectionElement, M, D>>,
  creation?: Script<El<HTMLTableSectionElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLTableSectionElement, M, D>>,
  mounting?: Script<El<HTMLTableSectionElement, M, D>>,
  destruction?: Script<El<HTMLTableSectionElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>> {
  //
  return describe(TBody.name, HtmlTags.tbody,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// TD

export function TD<M = unknown, D = unknown>(
  setup: Script<El<HTMLTableCellElement, M, D>>): ReactiveTreeNode<El<HTMLTableCellElement, M, D>>

export function TD<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLTableCellElement, M, D>>): ReactiveTreeNode<El<HTMLTableCellElement, M, D>>

export function TD<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTableCellElement, M, D>>): ReactiveTreeNode<El<HTMLTableCellElement, M, D>>

export function TD<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLTableCellElement, M, D>>): ReactiveTreeNode<El<HTMLTableCellElement, M, D>>

export function TD<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLTableCellElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLTableCellElement, M, D>>,
  creation?: Script<El<HTMLTableCellElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLTableCellElement, M, D>>,
  mounting?: Script<El<HTMLTableCellElement, M, D>>,
  destruction?: Script<El<HTMLTableCellElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableCellElement, M, D>>): ReactiveTreeNode<El<HTMLTableCellElement, M, D>>

export function TD<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLTableCellElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTableCellElement, M, D>>,
  setupOrMode?: Script<El<HTMLTableCellElement, M, D>> | Mode,
  setup?: Script<El<HTMLTableCellElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLTableCellElement, M, D>>,
  creation?: Script<El<HTMLTableCellElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLTableCellElement, M, D>>,
  mounting?: Script<El<HTMLTableCellElement, M, D>>,
  destruction?: Script<El<HTMLTableCellElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableCellElement, M, D>>): ReactiveTreeNode<El<HTMLTableCellElement, M, D>> {
  //
  return describe(TD.name, HtmlTags.td,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// TextArea

export function TextArea<M = unknown, D = unknown>(
  setup: Script<El<HTMLTextAreaElement, M, D>>): ReactiveTreeNode<El<HTMLTextAreaElement, M, D>>

export function TextArea<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLTextAreaElement, M, D>>): ReactiveTreeNode<El<HTMLTextAreaElement, M, D>>

export function TextArea<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTextAreaElement, M, D>>): ReactiveTreeNode<El<HTMLTextAreaElement, M, D>>

export function TextArea<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLTextAreaElement, M, D>>): ReactiveTreeNode<El<HTMLTextAreaElement, M, D>>

export function TextArea<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLTextAreaElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLTextAreaElement, M, D>>,
  creation?: Script<El<HTMLTextAreaElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLTextAreaElement, M, D>>,
  mounting?: Script<El<HTMLTextAreaElement, M, D>>,
  destruction?: Script<El<HTMLTextAreaElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTextAreaElement, M, D>>): ReactiveTreeNode<El<HTMLTextAreaElement, M, D>>

export function TextArea<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLTextAreaElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTextAreaElement, M, D>>,
  setupOrMode?: Script<El<HTMLTextAreaElement, M, D>> | Mode,
  setup?: Script<El<HTMLTextAreaElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLTextAreaElement, M, D>>,
  creation?: Script<El<HTMLTextAreaElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLTextAreaElement, M, D>>,
  mounting?: Script<El<HTMLTextAreaElement, M, D>>,
  destruction?: Script<El<HTMLTextAreaElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTextAreaElement, M, D>>): ReactiveTreeNode<El<HTMLTextAreaElement, M, D>> {
  //
  return describe(TextArea.name, HtmlTags.textarea,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// TFoot

export function TFoot<M = unknown, D = unknown>(
  setup: Script<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>>

export function TFoot<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>>

export function TFoot<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>>

export function TFoot<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>>

export function TFoot<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLTableSectionElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLTableSectionElement, M, D>>,
  creation?: Script<El<HTMLTableSectionElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLTableSectionElement, M, D>>,
  mounting?: Script<El<HTMLTableSectionElement, M, D>>,
  destruction?: Script<El<HTMLTableSectionElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>>

export function TFoot<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLTableSectionElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>,
  setupOrMode?: Script<El<HTMLTableSectionElement, M, D>> | Mode,
  setup?: Script<El<HTMLTableSectionElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLTableSectionElement, M, D>>,
  creation?: Script<El<HTMLTableSectionElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLTableSectionElement, M, D>>,
  mounting?: Script<El<HTMLTableSectionElement, M, D>>,
  destruction?: Script<El<HTMLTableSectionElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>> {
  //
  return describe(TFoot.name, HtmlTags.tfoot,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// TH

export function TH<M = unknown, D = unknown>(
  setup: Script<El<HTMLTableCellElement, M, D>>): ReactiveTreeNode<El<HTMLTableCellElement, M, D>>

export function TH<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLTableCellElement, M, D>>): ReactiveTreeNode<El<HTMLTableCellElement, M, D>>

export function TH<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTableCellElement, M, D>>): ReactiveTreeNode<El<HTMLTableCellElement, M, D>>

export function TH<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLTableCellElement, M, D>>): ReactiveTreeNode<El<HTMLTableCellElement, M, D>>

export function TH<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLTableCellElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLTableCellElement, M, D>>,
  creation?: Script<El<HTMLTableCellElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLTableCellElement, M, D>>,
  mounting?: Script<El<HTMLTableCellElement, M, D>>,
  destruction?: Script<El<HTMLTableCellElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableCellElement, M, D>>): ReactiveTreeNode<El<HTMLTableCellElement, M, D>>

export function TH<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLTableCellElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTableCellElement, M, D>>,
  setupOrMode?: Script<El<HTMLTableCellElement, M, D>> | Mode,
  setup?: Script<El<HTMLTableCellElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLTableCellElement, M, D>>,
  creation?: Script<El<HTMLTableCellElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLTableCellElement, M, D>>,
  mounting?: Script<El<HTMLTableCellElement, M, D>>,
  destruction?: Script<El<HTMLTableCellElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableCellElement, M, D>>): ReactiveTreeNode<El<HTMLTableCellElement, M, D>> {
  //
  return describe(TH.name, HtmlTags.th,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// THead

export function THead<M = unknown, D = unknown>(
  setup: Script<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>>

export function THead<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>>

export function THead<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>>

export function THead<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>>

export function THead<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLTableSectionElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLTableSectionElement, M, D>>,
  creation?: Script<El<HTMLTableSectionElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLTableSectionElement, M, D>>,
  mounting?: Script<El<HTMLTableSectionElement, M, D>>,
  destruction?: Script<El<HTMLTableSectionElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>>

export function THead<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLTableSectionElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>,
  setupOrMode?: Script<El<HTMLTableSectionElement, M, D>> | Mode,
  setup?: Script<El<HTMLTableSectionElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLTableSectionElement, M, D>>,
  creation?: Script<El<HTMLTableSectionElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLTableSectionElement, M, D>>,
  mounting?: Script<El<HTMLTableSectionElement, M, D>>,
  destruction?: Script<El<HTMLTableSectionElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M, D>>): ReactiveTreeNode<El<HTMLTableSectionElement, M, D>> {
  //
  return describe(THead.name, HtmlTags.thead,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Time

export function Time<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Time<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Time<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Time<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Time<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Time<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Time.name, HtmlTags.time,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Title

export function Title<M = unknown, D = unknown>(
  setup: Script<El<HTMLTitleElement, M, D>>): ReactiveTreeNode<El<HTMLTitleElement, M, D>>

export function Title<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLTitleElement, M, D>>): ReactiveTreeNode<El<HTMLTitleElement, M, D>>

export function Title<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTitleElement, M, D>>): ReactiveTreeNode<El<HTMLTitleElement, M, D>>

export function Title<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLTitleElement, M, D>>): ReactiveTreeNode<El<HTMLTitleElement, M, D>>

export function Title<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLTitleElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLTitleElement, M, D>>,
  creation?: Script<El<HTMLTitleElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLTitleElement, M, D>>,
  mounting?: Script<El<HTMLTitleElement, M, D>>,
  destruction?: Script<El<HTMLTitleElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTitleElement, M, D>>): ReactiveTreeNode<El<HTMLTitleElement, M, D>>

export function Title<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLTitleElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTitleElement, M, D>>,
  setupOrMode?: Script<El<HTMLTitleElement, M, D>> | Mode,
  setup?: Script<El<HTMLTitleElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLTitleElement, M, D>>,
  creation?: Script<El<HTMLTitleElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLTitleElement, M, D>>,
  mounting?: Script<El<HTMLTitleElement, M, D>>,
  destruction?: Script<El<HTMLTitleElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTitleElement, M, D>>): ReactiveTreeNode<El<HTMLTitleElement, M, D>> {
  //
  return describe(Title.name, HtmlTags.title,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// TR

export function TR<M = unknown, D = unknown>(
  setup: Script<El<HTMLTableRowElement, M, D>>): ReactiveTreeNode<El<HTMLTableRowElement, M, D>>

export function TR<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLTableRowElement, M, D>>): ReactiveTreeNode<El<HTMLTableRowElement, M, D>>

export function TR<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTableRowElement, M, D>>): ReactiveTreeNode<El<HTMLTableRowElement, M, D>>

export function TR<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLTableRowElement, M, D>>): ReactiveTreeNode<El<HTMLTableRowElement, M, D>>

export function TR<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLTableRowElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLTableRowElement, M, D>>,
  creation?: Script<El<HTMLTableRowElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLTableRowElement, M, D>>,
  mounting?: Script<El<HTMLTableRowElement, M, D>>,
  destruction?: Script<El<HTMLTableRowElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableRowElement, M, D>>): ReactiveTreeNode<El<HTMLTableRowElement, M, D>>

export function TR<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLTableRowElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTableRowElement, M, D>>,
  setupOrMode?: Script<El<HTMLTableRowElement, M, D>> | Mode,
  setup?: Script<El<HTMLTableRowElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLTableRowElement, M, D>>,
  creation?: Script<El<HTMLTableRowElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLTableRowElement, M, D>>,
  mounting?: Script<El<HTMLTableRowElement, M, D>>,
  destruction?: Script<El<HTMLTableRowElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableRowElement, M, D>>): ReactiveTreeNode<El<HTMLTableRowElement, M, D>> {
  //
  return describe(TR.name, HtmlTags.tr,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Track

export function Track<M = unknown, D = unknown>(
  setup: Script<El<HTMLTrackElement, M, D>>): ReactiveTreeNode<El<HTMLTrackElement, M, D>>

export function Track<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLTrackElement, M, D>>): ReactiveTreeNode<El<HTMLTrackElement, M, D>>

export function Track<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTrackElement, M, D>>): ReactiveTreeNode<El<HTMLTrackElement, M, D>>

export function Track<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLTrackElement, M, D>>): ReactiveTreeNode<El<HTMLTrackElement, M, D>>

export function Track<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLTrackElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLTrackElement, M, D>>,
  creation?: Script<El<HTMLTrackElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLTrackElement, M, D>>,
  mounting?: Script<El<HTMLTrackElement, M, D>>,
  destruction?: Script<El<HTMLTrackElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTrackElement, M, D>>): ReactiveTreeNode<El<HTMLTrackElement, M, D>>

export function Track<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLTrackElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTrackElement, M, D>>,
  setupOrMode?: Script<El<HTMLTrackElement, M, D>> | Mode,
  setup?: Script<El<HTMLTrackElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLTrackElement, M, D>>,
  creation?: Script<El<HTMLTrackElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLTrackElement, M, D>>,
  mounting?: Script<El<HTMLTrackElement, M, D>>,
  destruction?: Script<El<HTMLTrackElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTrackElement, M, D>>): ReactiveTreeNode<El<HTMLTrackElement, M, D>> {
  //
  return describe(Track.name, HtmlTags.track,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// U

export function U<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function U<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function U<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function U<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function U<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function U<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(U.name, HtmlTags.u,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// UL

export function UL<M = unknown, D = unknown>(
  setup: Script<El<HTMLUListElement, M, D>>): ReactiveTreeNode<El<HTMLUListElement, M, D>>

export function UL<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLUListElement, M, D>>): ReactiveTreeNode<El<HTMLUListElement, M, D>>

export function UL<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLUListElement, M, D>>): ReactiveTreeNode<El<HTMLUListElement, M, D>>

export function UL<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLUListElement, M, D>>): ReactiveTreeNode<El<HTMLUListElement, M, D>>

export function UL<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLUListElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLUListElement, M, D>>,
  creation?: Script<El<HTMLUListElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLUListElement, M, D>>,
  mounting?: Script<El<HTMLUListElement, M, D>>,
  destruction?: Script<El<HTMLUListElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLUListElement, M, D>>): ReactiveTreeNode<El<HTMLUListElement, M, D>>

export function UL<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLUListElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLUListElement, M, D>>,
  setupOrMode?: Script<El<HTMLUListElement, M, D>> | Mode,
  setup?: Script<El<HTMLUListElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLUListElement, M, D>>,
  creation?: Script<El<HTMLUListElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLUListElement, M, D>>,
  mounting?: Script<El<HTMLUListElement, M, D>>,
  destruction?: Script<El<HTMLUListElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLUListElement, M, D>>): ReactiveTreeNode<El<HTMLUListElement, M, D>> {
  //
  return describe(UL.name, HtmlTags.ul,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Var

export function Var<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Var<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Var<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Var<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Var<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Var<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Var.name, HtmlTags.var,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Video

export function Video<M = unknown, D = unknown>(
  setup: Script<El<HTMLVideoElement, M, D>>): ReactiveTreeNode<El<HTMLVideoElement, M, D>>

export function Video<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLVideoElement, M, D>>): ReactiveTreeNode<El<HTMLVideoElement, M, D>>

export function Video<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLVideoElement, M, D>>): ReactiveTreeNode<El<HTMLVideoElement, M, D>>

export function Video<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLVideoElement, M, D>>): ReactiveTreeNode<El<HTMLVideoElement, M, D>>

export function Video<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLVideoElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLVideoElement, M, D>>,
  creation?: Script<El<HTMLVideoElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLVideoElement, M, D>>,
  mounting?: Script<El<HTMLVideoElement, M, D>>,
  destruction?: Script<El<HTMLVideoElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLVideoElement, M, D>>): ReactiveTreeNode<El<HTMLVideoElement, M, D>>

export function Video<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLVideoElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLVideoElement, M, D>>,
  setupOrMode?: Script<El<HTMLVideoElement, M, D>> | Mode,
  setup?: Script<El<HTMLVideoElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLVideoElement, M, D>>,
  creation?: Script<El<HTMLVideoElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLVideoElement, M, D>>,
  mounting?: Script<El<HTMLVideoElement, M, D>>,
  destruction?: Script<El<HTMLVideoElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLVideoElement, M, D>>): ReactiveTreeNode<El<HTMLVideoElement, M, D>> {
  //
  return describe(Video.name, HtmlTags.video,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

// Wbr

export function Wbr<M = unknown, D = unknown>(
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Wbr<M = unknown, D = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Wbr<M = unknown, D = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Wbr<M = unknown, D = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Wbr<M = unknown, D = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>>

export function Wbr<M = unknown, D = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M, D>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M, D>>,
  setupOrMode?: Script<El<HTMLElement, M, D>> | Mode,
  setup?: Script<El<HTMLElement, M, D>>,
  setupTask?: ScriptAsync<El<HTMLElement, M, D>>,
  creation?: Script<El<HTMLElement, M, D>>,
  creationTask?: ScriptAsync<El<HTMLElement, M, D>>,
  mounting?: Script<El<HTMLElement, M, D>>,
  destruction?: Script<El<HTMLElement, M, D>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M, D>>): ReactiveTreeNode<El<HTMLElement, M, D>> {
  //
  return describe(Wbr.name, HtmlTags.wbr,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
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
