// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2026 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { ReactiveTreeNode, ReactiveTreeNodeDesc, type Script, Mode, ScriptAsync, describe } from "reactronic"
import { El, ElKind } from "../core/El.js"
import { HtmlDriver } from "../core/WebDriver.js"

export function A<M = unknown>(
  setup: Script<El<HTMLAnchorElement, M>>): ReactiveTreeNode<El<HTMLAnchorElement, M>>

export function A<M = unknown>(
  key: string,
  setup: Script<El<HTMLAnchorElement, M>>): ReactiveTreeNode<El<HTMLAnchorElement, M>>

export function A<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLAnchorElement, M>>): ReactiveTreeNode<El<HTMLAnchorElement, M>>

export function A<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLAnchorElement, M>>): ReactiveTreeNode<El<HTMLAnchorElement, M>>

export function A<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLAnchorElement, M>>,
  setupTask?: ScriptAsync<El<HTMLAnchorElement, M>>,
  creation?: Script<El<HTMLAnchorElement, M>>,
  creationTask?: ScriptAsync<El<HTMLAnchorElement, M>>,
  mounting?: Script<El<HTMLAnchorElement, M>>,
  destruction?: Script<El<HTMLAnchorElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLAnchorElement, M>>): ReactiveTreeNode<El<HTMLAnchorElement, M>>

export function A<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLAnchorElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLAnchorElement, M>>,
  setupOrMode?: Script<El<HTMLAnchorElement, M>> | Mode,
  setup?: Script<El<HTMLAnchorElement, M>>,
  setupTask?: ScriptAsync<El<HTMLAnchorElement, M>>,
  creation?: Script<El<HTMLAnchorElement, M>>,
  creationTask?: ScriptAsync<El<HTMLAnchorElement, M>>,
  mounting?: Script<El<HTMLAnchorElement, M>>,
  destruction?: Script<El<HTMLAnchorElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLAnchorElement, M>>): ReactiveTreeNode<El<HTMLAnchorElement, M>> {
  //
  return describe(A.name, HtmlTags.a,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Abbr<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Abbr<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Abbr<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Abbr<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Abbr<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Abbr<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Abbr.name, HtmlTags.abbr,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Address<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Address<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Address<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Address<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Address<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Address<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Address.name, HtmlTags.address,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Area<M = unknown>(
  setup: Script<El<HTMLAreaElement, M>>): ReactiveTreeNode<El<HTMLAreaElement, M>>

export function Area<M = unknown>(
  key: string,
  setup: Script<El<HTMLAreaElement, M>>): ReactiveTreeNode<El<HTMLAreaElement, M>>

export function Area<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLAreaElement, M>>): ReactiveTreeNode<El<HTMLAreaElement, M>>

export function Area<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLAreaElement, M>>): ReactiveTreeNode<El<HTMLAreaElement, M>>

export function Area<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLAreaElement, M>>,
  setupTask?: ScriptAsync<El<HTMLAreaElement, M>>,
  creation?: Script<El<HTMLAreaElement, M>>,
  creationTask?: ScriptAsync<El<HTMLAreaElement, M>>,
  mounting?: Script<El<HTMLAreaElement, M>>,
  destruction?: Script<El<HTMLAreaElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLAreaElement, M>>): ReactiveTreeNode<El<HTMLAreaElement, M>>

export function Area<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLAreaElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLAreaElement, M>>,
  setupOrMode?: Script<El<HTMLAreaElement, M>> | Mode,
  setup?: Script<El<HTMLAreaElement, M>>,
  setupTask?: ScriptAsync<El<HTMLAreaElement, M>>,
  creation?: Script<El<HTMLAreaElement, M>>,
  creationTask?: ScriptAsync<El<HTMLAreaElement, M>>,
  mounting?: Script<El<HTMLAreaElement, M>>,
  destruction?: Script<El<HTMLAreaElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLAreaElement, M>>): ReactiveTreeNode<El<HTMLAreaElement, M>> {
  //
  return describe(Area.name, HtmlTags.area,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Article<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Article<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Article<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Article<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Article<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Article<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Article.name, HtmlTags.article,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Aside<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Aside<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Aside<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Aside<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Aside<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Aside<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Aside.name, HtmlTags.aside,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Audio<M = unknown>(
  setup: Script<El<HTMLAudioElement, M>>): ReactiveTreeNode<El<HTMLAudioElement, M>>

export function Audio<M = unknown>(
  key: string,
  setup: Script<El<HTMLAudioElement, M>>): ReactiveTreeNode<El<HTMLAudioElement, M>>

export function Audio<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLAudioElement, M>>): ReactiveTreeNode<El<HTMLAudioElement, M>>

export function Audio<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLAudioElement, M>>): ReactiveTreeNode<El<HTMLAudioElement, M>>

export function Audio<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLAudioElement, M>>,
  setupTask?: ScriptAsync<El<HTMLAudioElement, M>>,
  creation?: Script<El<HTMLAudioElement, M>>,
  creationTask?: ScriptAsync<El<HTMLAudioElement, M>>,
  mounting?: Script<El<HTMLAudioElement, M>>,
  destruction?: Script<El<HTMLAudioElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLAudioElement, M>>): ReactiveTreeNode<El<HTMLAudioElement, M>>

export function Audio<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLAudioElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLAudioElement, M>>,
  setupOrMode?: Script<El<HTMLAudioElement, M>> | Mode,
  setup?: Script<El<HTMLAudioElement, M>>,
  setupTask?: ScriptAsync<El<HTMLAudioElement, M>>,
  creation?: Script<El<HTMLAudioElement, M>>,
  creationTask?: ScriptAsync<El<HTMLAudioElement, M>>,
  mounting?: Script<El<HTMLAudioElement, M>>,
  destruction?: Script<El<HTMLAudioElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLAudioElement, M>>): ReactiveTreeNode<El<HTMLAudioElement, M>> {
  //
  return describe(Audio.name, HtmlTags.audio,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function B<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function B<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function B<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function B<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function B<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function B<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(B.name, HtmlTags.b,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Base<M = unknown>(
  setup: Script<El<HTMLBaseElement, M>>): ReactiveTreeNode<El<HTMLBaseElement, M>>

export function Base<M = unknown>(
  key: string,
  setup: Script<El<HTMLBaseElement, M>>): ReactiveTreeNode<El<HTMLBaseElement, M>>

export function Base<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLBaseElement, M>>): ReactiveTreeNode<El<HTMLBaseElement, M>>

export function Base<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLBaseElement, M>>): ReactiveTreeNode<El<HTMLBaseElement, M>>

export function Base<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLBaseElement, M>>,
  setupTask?: ScriptAsync<El<HTMLBaseElement, M>>,
  creation?: Script<El<HTMLBaseElement, M>>,
  creationTask?: ScriptAsync<El<HTMLBaseElement, M>>,
  mounting?: Script<El<HTMLBaseElement, M>>,
  destruction?: Script<El<HTMLBaseElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLBaseElement, M>>): ReactiveTreeNode<El<HTMLBaseElement, M>>

export function Base<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLBaseElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLBaseElement, M>>,
  setupOrMode?: Script<El<HTMLBaseElement, M>> | Mode,
  setup?: Script<El<HTMLBaseElement, M>>,
  setupTask?: ScriptAsync<El<HTMLBaseElement, M>>,
  creation?: Script<El<HTMLBaseElement, M>>,
  creationTask?: ScriptAsync<El<HTMLBaseElement, M>>,
  mounting?: Script<El<HTMLBaseElement, M>>,
  destruction?: Script<El<HTMLBaseElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLBaseElement, M>>): ReactiveTreeNode<El<HTMLBaseElement, M>> {
  //
  return describe(Base.name, HtmlTags.base,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Bdi<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Bdi<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Bdi<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Bdi<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Bdi<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Bdi<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Bdi.name, HtmlTags.bdi,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Bdo<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Bdo<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Bdo<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Bdo<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Bdo<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Bdo<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Bdo.name, HtmlTags.bdo,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Big<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Big<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Big<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Big<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Big<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Big<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Big.name, HtmlTags.big,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function BlockQuote<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function BlockQuote<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function BlockQuote<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function BlockQuote<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function BlockQuote<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function BlockQuote<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(BlockQuote.name, HtmlTags.blockquote,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Body<M = unknown>(
  setup: Script<El<HTMLBodyElement, M>>): ReactiveTreeNode<El<HTMLBodyElement, M>>

export function Body<M = unknown>(
  key: string,
  setup: Script<El<HTMLBodyElement, M>>): ReactiveTreeNode<El<HTMLBodyElement, M>>

export function Body<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLBodyElement, M>>): ReactiveTreeNode<El<HTMLBodyElement, M>>

export function Body<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLBodyElement, M>>): ReactiveTreeNode<El<HTMLBodyElement, M>>

export function Body<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLBodyElement, M>>,
  setupTask?: ScriptAsync<El<HTMLBodyElement, M>>,
  creation?: Script<El<HTMLBodyElement, M>>,
  creationTask?: ScriptAsync<El<HTMLBodyElement, M>>,
  mounting?: Script<El<HTMLBodyElement, M>>,
  destruction?: Script<El<HTMLBodyElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLBodyElement, M>>): ReactiveTreeNode<El<HTMLBodyElement, M>>

export function Body<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLBodyElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLBodyElement, M>>,
  setupOrMode?: Script<El<HTMLBodyElement, M>> | Mode,
  setup?: Script<El<HTMLBodyElement, M>>,
  setupTask?: ScriptAsync<El<HTMLBodyElement, M>>,
  creation?: Script<El<HTMLBodyElement, M>>,
  creationTask?: ScriptAsync<El<HTMLBodyElement, M>>,
  mounting?: Script<El<HTMLBodyElement, M>>,
  destruction?: Script<El<HTMLBodyElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLBodyElement, M>>): ReactiveTreeNode<El<HTMLBodyElement, M>> {
  //
  return describe(Body.name, HtmlTags.body,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function BR<M = unknown>(
  setup: Script<El<HTMLBRElement, M>>): ReactiveTreeNode<El<HTMLBRElement, M>>

export function BR<M = unknown>(
  key: string,
  setup: Script<El<HTMLBRElement, M>>): ReactiveTreeNode<El<HTMLBRElement, M>>

export function BR<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLBRElement, M>>): ReactiveTreeNode<El<HTMLBRElement, M>>

export function BR<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLBRElement, M>>): ReactiveTreeNode<El<HTMLBRElement, M>>

export function BR<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLBRElement, M>>,
  setupTask?: ScriptAsync<El<HTMLBRElement, M>>,
  creation?: Script<El<HTMLBRElement, M>>,
  creationTask?: ScriptAsync<El<HTMLBRElement, M>>,
  mounting?: Script<El<HTMLBRElement, M>>,
  destruction?: Script<El<HTMLBRElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLBRElement, M>>): ReactiveTreeNode<El<HTMLBRElement, M>>

export function BR<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLBRElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLBRElement, M>>,
  setupOrMode?: Script<El<HTMLBRElement, M>> | Mode,
  setup?: Script<El<HTMLBRElement, M>>,
  setupTask?: ScriptAsync<El<HTMLBRElement, M>>,
  creation?: Script<El<HTMLBRElement, M>>,
  creationTask?: ScriptAsync<El<HTMLBRElement, M>>,
  mounting?: Script<El<HTMLBRElement, M>>,
  destruction?: Script<El<HTMLBRElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLBRElement, M>>): ReactiveTreeNode<El<HTMLBRElement, M>> {
  //
  return describe(BR.name, HtmlTags.br,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Button<M = unknown>(
  setup: Script<El<HTMLButtonElement, M>>): ReactiveTreeNode<El<HTMLButtonElement, M>>

export function Button<M = unknown>(
  key: string,
  setup: Script<El<HTMLButtonElement, M>>): ReactiveTreeNode<El<HTMLButtonElement, M>>

export function Button<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLButtonElement, M>>): ReactiveTreeNode<El<HTMLButtonElement, M>>

export function Button<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLButtonElement, M>>): ReactiveTreeNode<El<HTMLButtonElement, M>>

export function Button<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLButtonElement, M>>,
  setupTask?: ScriptAsync<El<HTMLButtonElement, M>>,
  creation?: Script<El<HTMLButtonElement, M>>,
  creationTask?: ScriptAsync<El<HTMLButtonElement, M>>,
  mounting?: Script<El<HTMLButtonElement, M>>,
  destruction?: Script<El<HTMLButtonElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLButtonElement, M>>): ReactiveTreeNode<El<HTMLButtonElement, M>>

export function Button<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLButtonElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLButtonElement, M>>,
  setupOrMode?: Script<El<HTMLButtonElement, M>> | Mode,
  setup?: Script<El<HTMLButtonElement, M>>,
  setupTask?: ScriptAsync<El<HTMLButtonElement, M>>,
  creation?: Script<El<HTMLButtonElement, M>>,
  creationTask?: ScriptAsync<El<HTMLButtonElement, M>>,
  mounting?: Script<El<HTMLButtonElement, M>>,
  destruction?: Script<El<HTMLButtonElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLButtonElement, M>>): ReactiveTreeNode<El<HTMLButtonElement, M>> {
  //
  return describe(Button.name, HtmlTags.button,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Canvas<M = unknown>(
  setup: Script<El<HTMLCanvasElement, M>>): ReactiveTreeNode<El<HTMLCanvasElement, M>>

export function Canvas<M = unknown>(
  key: string,
  setup: Script<El<HTMLCanvasElement, M>>): ReactiveTreeNode<El<HTMLCanvasElement, M>>

export function Canvas<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLCanvasElement, M>>): ReactiveTreeNode<El<HTMLCanvasElement, M>>

export function Canvas<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLCanvasElement, M>>): ReactiveTreeNode<El<HTMLCanvasElement, M>>

export function Canvas<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLCanvasElement, M>>,
  setupTask?: ScriptAsync<El<HTMLCanvasElement, M>>,
  creation?: Script<El<HTMLCanvasElement, M>>,
  creationTask?: ScriptAsync<El<HTMLCanvasElement, M>>,
  mounting?: Script<El<HTMLCanvasElement, M>>,
  destruction?: Script<El<HTMLCanvasElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLCanvasElement, M>>): ReactiveTreeNode<El<HTMLCanvasElement, M>>

export function Canvas<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLCanvasElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLCanvasElement, M>>,
  setupOrMode?: Script<El<HTMLCanvasElement, M>> | Mode,
  setup?: Script<El<HTMLCanvasElement, M>>,
  setupTask?: ScriptAsync<El<HTMLCanvasElement, M>>,
  creation?: Script<El<HTMLCanvasElement, M>>,
  creationTask?: ScriptAsync<El<HTMLCanvasElement, M>>,
  mounting?: Script<El<HTMLCanvasElement, M>>,
  destruction?: Script<El<HTMLCanvasElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLCanvasElement, M>>): ReactiveTreeNode<El<HTMLCanvasElement, M>> {
  //
  return describe(Canvas.name, HtmlTags.canvas,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Caption<M = unknown>(
  setup: Script<El<HTMLTableCaptionElement, M>>): ReactiveTreeNode<El<HTMLTableCaptionElement, M>>

export function Caption<M = unknown>(
  key: string,
  setup: Script<El<HTMLTableCaptionElement, M>>): ReactiveTreeNode<El<HTMLTableCaptionElement, M>>

export function Caption<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTableCaptionElement, M>>): ReactiveTreeNode<El<HTMLTableCaptionElement, M>>

export function Caption<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLTableCaptionElement, M>>): ReactiveTreeNode<El<HTMLTableCaptionElement, M>>

export function Caption<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLTableCaptionElement, M>>,
  setupTask?: ScriptAsync<El<HTMLTableCaptionElement, M>>,
  creation?: Script<El<HTMLTableCaptionElement, M>>,
  creationTask?: ScriptAsync<El<HTMLTableCaptionElement, M>>,
  mounting?: Script<El<HTMLTableCaptionElement, M>>,
  destruction?: Script<El<HTMLTableCaptionElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableCaptionElement, M>>): ReactiveTreeNode<El<HTMLTableCaptionElement, M>>

export function Caption<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLTableCaptionElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTableCaptionElement, M>>,
  setupOrMode?: Script<El<HTMLTableCaptionElement, M>> | Mode,
  setup?: Script<El<HTMLTableCaptionElement, M>>,
  setupTask?: ScriptAsync<El<HTMLTableCaptionElement, M>>,
  creation?: Script<El<HTMLTableCaptionElement, M>>,
  creationTask?: ScriptAsync<El<HTMLTableCaptionElement, M>>,
  mounting?: Script<El<HTMLTableCaptionElement, M>>,
  destruction?: Script<El<HTMLTableCaptionElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableCaptionElement, M>>): ReactiveTreeNode<El<HTMLTableCaptionElement, M>> {
  //
  return describe(Caption.name, HtmlTags.caption,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Cite<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Cite<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Cite<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Cite<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Cite<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Cite<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Cite.name, HtmlTags.cite,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Code<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Code<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Code<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Code<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Code<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Code<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Code.name, HtmlTags.code,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Col<M = unknown>(
  setup: Script<El<HTMLTableColElement, M>>): ReactiveTreeNode<El<HTMLTableColElement, M>>

export function Col<M = unknown>(
  key: string,
  setup: Script<El<HTMLTableColElement, M>>): ReactiveTreeNode<El<HTMLTableColElement, M>>

export function Col<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTableColElement, M>>): ReactiveTreeNode<El<HTMLTableColElement, M>>

export function Col<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLTableColElement, M>>): ReactiveTreeNode<El<HTMLTableColElement, M>>

export function Col<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLTableColElement, M>>,
  setupTask?: ScriptAsync<El<HTMLTableColElement, M>>,
  creation?: Script<El<HTMLTableColElement, M>>,
  creationTask?: ScriptAsync<El<HTMLTableColElement, M>>,
  mounting?: Script<El<HTMLTableColElement, M>>,
  destruction?: Script<El<HTMLTableColElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableColElement, M>>): ReactiveTreeNode<El<HTMLTableColElement, M>>

export function Col<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLTableColElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTableColElement, M>>,
  setupOrMode?: Script<El<HTMLTableColElement, M>> | Mode,
  setup?: Script<El<HTMLTableColElement, M>>,
  setupTask?: ScriptAsync<El<HTMLTableColElement, M>>,
  creation?: Script<El<HTMLTableColElement, M>>,
  creationTask?: ScriptAsync<El<HTMLTableColElement, M>>,
  mounting?: Script<El<HTMLTableColElement, M>>,
  destruction?: Script<El<HTMLTableColElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableColElement, M>>): ReactiveTreeNode<El<HTMLTableColElement, M>> {
  //
  return describe(Col.name, HtmlTags.col,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function ColGroup<M = unknown>(
  setup: Script<El<HTMLTableColElement, M>>): ReactiveTreeNode<El<HTMLTableColElement, M>>

export function ColGroup<M = unknown>(
  key: string,
  setup: Script<El<HTMLTableColElement, M>>): ReactiveTreeNode<El<HTMLTableColElement, M>>

export function ColGroup<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTableColElement, M>>): ReactiveTreeNode<El<HTMLTableColElement, M>>

export function ColGroup<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLTableColElement, M>>): ReactiveTreeNode<El<HTMLTableColElement, M>>

export function ColGroup<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLTableColElement, M>>,
  setupTask?: ScriptAsync<El<HTMLTableColElement, M>>,
  creation?: Script<El<HTMLTableColElement, M>>,
  creationTask?: ScriptAsync<El<HTMLTableColElement, M>>,
  mounting?: Script<El<HTMLTableColElement, M>>,
  destruction?: Script<El<HTMLTableColElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableColElement, M>>): ReactiveTreeNode<El<HTMLTableColElement, M>>

export function ColGroup<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLTableColElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTableColElement, M>>,
  setupOrMode?: Script<El<HTMLTableColElement, M>> | Mode,
  setup?: Script<El<HTMLTableColElement, M>>,
  setupTask?: ScriptAsync<El<HTMLTableColElement, M>>,
  creation?: Script<El<HTMLTableColElement, M>>,
  creationTask?: ScriptAsync<El<HTMLTableColElement, M>>,
  mounting?: Script<El<HTMLTableColElement, M>>,
  destruction?: Script<El<HTMLTableColElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableColElement, M>>): ReactiveTreeNode<El<HTMLTableColElement, M>> {
  //
  return describe(ColGroup.name, HtmlTags.colgroup,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Data<M = unknown>(
  setup: Script<El<HTMLDataElement, M>>): ReactiveTreeNode<El<HTMLDataElement, M>>

export function Data<M = unknown>(
  key: string,
  setup: Script<El<HTMLDataElement, M>>): ReactiveTreeNode<El<HTMLDataElement, M>>

export function Data<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLDataElement, M>>): ReactiveTreeNode<El<HTMLDataElement, M>>

export function Data<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLDataElement, M>>): ReactiveTreeNode<El<HTMLDataElement, M>>

export function Data<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLDataElement, M>>,
  setupTask?: ScriptAsync<El<HTMLDataElement, M>>,
  creation?: Script<El<HTMLDataElement, M>>,
  creationTask?: ScriptAsync<El<HTMLDataElement, M>>,
  mounting?: Script<El<HTMLDataElement, M>>,
  destruction?: Script<El<HTMLDataElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLDataElement, M>>): ReactiveTreeNode<El<HTMLDataElement, M>>

export function Data<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLDataElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLDataElement, M>>,
  setupOrMode?: Script<El<HTMLDataElement, M>> | Mode,
  setup?: Script<El<HTMLDataElement, M>>,
  setupTask?: ScriptAsync<El<HTMLDataElement, M>>,
  creation?: Script<El<HTMLDataElement, M>>,
  creationTask?: ScriptAsync<El<HTMLDataElement, M>>,
  mounting?: Script<El<HTMLDataElement, M>>,
  destruction?: Script<El<HTMLDataElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLDataElement, M>>): ReactiveTreeNode<El<HTMLDataElement, M>> {
  //
  return describe(Data.name, HtmlTags.data,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function DataList<M = unknown>(
  setup: Script<El<HTMLDataListElement, M>>): ReactiveTreeNode<El<HTMLDataListElement, M>>

export function DataList<M = unknown>(
  key: string,
  setup: Script<El<HTMLDataListElement, M>>): ReactiveTreeNode<El<HTMLDataListElement, M>>

export function DataList<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLDataListElement, M>>): ReactiveTreeNode<El<HTMLDataListElement, M>>

export function DataList<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLDataListElement, M>>): ReactiveTreeNode<El<HTMLDataListElement, M>>

export function DataList<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLDataListElement, M>>,
  setupTask?: ScriptAsync<El<HTMLDataListElement, M>>,
  creation?: Script<El<HTMLDataListElement, M>>,
  creationTask?: ScriptAsync<El<HTMLDataListElement, M>>,
  mounting?: Script<El<HTMLDataListElement, M>>,
  destruction?: Script<El<HTMLDataListElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLDataListElement, M>>): ReactiveTreeNode<El<HTMLDataListElement, M>>

export function DataList<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLDataListElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLDataListElement, M>>,
  setupOrMode?: Script<El<HTMLDataListElement, M>> | Mode,
  setup?: Script<El<HTMLDataListElement, M>>,
  setupTask?: ScriptAsync<El<HTMLDataListElement, M>>,
  creation?: Script<El<HTMLDataListElement, M>>,
  creationTask?: ScriptAsync<El<HTMLDataListElement, M>>,
  mounting?: Script<El<HTMLDataListElement, M>>,
  destruction?: Script<El<HTMLDataListElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLDataListElement, M>>): ReactiveTreeNode<El<HTMLDataListElement, M>> {
  //
  return describe(DataList.name, HtmlTags.datalist,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function DD<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function DD<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function DD<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function DD<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function DD<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function DD<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(DD.name, HtmlTags.dd,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Del<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Del<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Del<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Del<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Del<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Del<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Del.name, HtmlTags.del,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Details<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Details<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Details<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Details<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Details<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Details<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Details.name, HtmlTags.details,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Dfn<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Dfn<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Dfn<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Dfn<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Dfn<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Dfn<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Dfn.name, HtmlTags.dfn,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Div<M = unknown>(
  setup: Script<El<HTMLDivElement, M>>): ReactiveTreeNode<El<HTMLDivElement, M>>

export function Div<M = unknown>(
  key: string,
  setup: Script<El<HTMLDivElement, M>>): ReactiveTreeNode<El<HTMLDivElement, M>>

export function Div<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLDivElement, M>>): ReactiveTreeNode<El<HTMLDivElement, M>>

export function Div<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLDivElement, M>>): ReactiveTreeNode<El<HTMLDivElement, M>>

export function Div<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLDivElement, M>>,
  setupTask?: ScriptAsync<El<HTMLDivElement, M>>,
  creation?: Script<El<HTMLDivElement, M>>,
  creationTask?: ScriptAsync<El<HTMLDivElement, M>>,
  mounting?: Script<El<HTMLDivElement, M>>,
  destruction?: Script<El<HTMLDivElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLDivElement, M>>): ReactiveTreeNode<El<HTMLDivElement, M>>

export function Div<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLDivElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLDivElement, M>>,
  setupOrMode?: Script<El<HTMLDivElement, M>> | Mode,
  setup?: Script<El<HTMLDivElement, M>>,
  setupTask?: ScriptAsync<El<HTMLDivElement, M>>,
  creation?: Script<El<HTMLDivElement, M>>,
  creationTask?: ScriptAsync<El<HTMLDivElement, M>>,
  mounting?: Script<El<HTMLDivElement, M>>,
  destruction?: Script<El<HTMLDivElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLDivElement, M>>): ReactiveTreeNode<El<HTMLDivElement, M>> {
  //
  return describe(Div.name, HtmlTags.div,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function DL<M = unknown>(
  setup: Script<El<HTMLDListElement, M>>): ReactiveTreeNode<El<HTMLDListElement, M>>

export function DL<M = unknown>(
  key: string,
  setup: Script<El<HTMLDListElement, M>>): ReactiveTreeNode<El<HTMLDListElement, M>>

export function DL<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLDListElement, M>>): ReactiveTreeNode<El<HTMLDListElement, M>>

export function DL<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLDListElement, M>>): ReactiveTreeNode<El<HTMLDListElement, M>>

export function DL<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLDListElement, M>>,
  setupTask?: ScriptAsync<El<HTMLDListElement, M>>,
  creation?: Script<El<HTMLDListElement, M>>,
  creationTask?: ScriptAsync<El<HTMLDListElement, M>>,
  mounting?: Script<El<HTMLDListElement, M>>,
  destruction?: Script<El<HTMLDListElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLDListElement, M>>): ReactiveTreeNode<El<HTMLDListElement, M>>

export function DL<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLDListElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLDListElement, M>>,
  setupOrMode?: Script<El<HTMLDListElement, M>> | Mode,
  setup?: Script<El<HTMLDListElement, M>>,
  setupTask?: ScriptAsync<El<HTMLDListElement, M>>,
  creation?: Script<El<HTMLDListElement, M>>,
  creationTask?: ScriptAsync<El<HTMLDListElement, M>>,
  mounting?: Script<El<HTMLDListElement, M>>,
  destruction?: Script<El<HTMLDListElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLDListElement, M>>): ReactiveTreeNode<El<HTMLDListElement, M>> {
  //
  return describe(DL.name, HtmlTags.dl,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function DT<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function DT<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function DT<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function DT<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function DT<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function DT<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(DT.name, HtmlTags.dt,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function EM<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function EM<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function EM<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function EM<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function EM<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function EM<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(EM.name, HtmlTags.em,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Embed<M = unknown>(
  setup: Script<El<HTMLEmbedElement, M>>): ReactiveTreeNode<El<HTMLEmbedElement, M>>

export function Embed<M = unknown>(
  key: string,
  setup: Script<El<HTMLEmbedElement, M>>): ReactiveTreeNode<El<HTMLEmbedElement, M>>

export function Embed<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLEmbedElement, M>>): ReactiveTreeNode<El<HTMLEmbedElement, M>>

export function Embed<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLEmbedElement, M>>): ReactiveTreeNode<El<HTMLEmbedElement, M>>

export function Embed<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLEmbedElement, M>>,
  setupTask?: ScriptAsync<El<HTMLEmbedElement, M>>,
  creation?: Script<El<HTMLEmbedElement, M>>,
  creationTask?: ScriptAsync<El<HTMLEmbedElement, M>>,
  mounting?: Script<El<HTMLEmbedElement, M>>,
  destruction?: Script<El<HTMLEmbedElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLEmbedElement, M>>): ReactiveTreeNode<El<HTMLEmbedElement, M>>

export function Embed<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLEmbedElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLEmbedElement, M>>,
  setupOrMode?: Script<El<HTMLEmbedElement, M>> | Mode,
  setup?: Script<El<HTMLEmbedElement, M>>,
  setupTask?: ScriptAsync<El<HTMLEmbedElement, M>>,
  creation?: Script<El<HTMLEmbedElement, M>>,
  creationTask?: ScriptAsync<El<HTMLEmbedElement, M>>,
  mounting?: Script<El<HTMLEmbedElement, M>>,
  destruction?: Script<El<HTMLEmbedElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLEmbedElement, M>>): ReactiveTreeNode<El<HTMLEmbedElement, M>> {
  //
  return describe(Embed.name, HtmlTags.embed,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function FieldSet<M = unknown>(
  setup: Script<El<HTMLFieldSetElement, M>>): ReactiveTreeNode<El<HTMLFieldSetElement, M>>

export function FieldSet<M = unknown>(
  key: string,
  setup: Script<El<HTMLFieldSetElement, M>>): ReactiveTreeNode<El<HTMLFieldSetElement, M>>

export function FieldSet<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLFieldSetElement, M>>): ReactiveTreeNode<El<HTMLFieldSetElement, M>>

export function FieldSet<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLFieldSetElement, M>>): ReactiveTreeNode<El<HTMLFieldSetElement, M>>

export function FieldSet<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLFieldSetElement, M>>,
  setupTask?: ScriptAsync<El<HTMLFieldSetElement, M>>,
  creation?: Script<El<HTMLFieldSetElement, M>>,
  creationTask?: ScriptAsync<El<HTMLFieldSetElement, M>>,
  mounting?: Script<El<HTMLFieldSetElement, M>>,
  destruction?: Script<El<HTMLFieldSetElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLFieldSetElement, M>>): ReactiveTreeNode<El<HTMLFieldSetElement, M>>

export function FieldSet<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLFieldSetElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLFieldSetElement, M>>,
  setupOrMode?: Script<El<HTMLFieldSetElement, M>> | Mode,
  setup?: Script<El<HTMLFieldSetElement, M>>,
  setupTask?: ScriptAsync<El<HTMLFieldSetElement, M>>,
  creation?: Script<El<HTMLFieldSetElement, M>>,
  creationTask?: ScriptAsync<El<HTMLFieldSetElement, M>>,
  mounting?: Script<El<HTMLFieldSetElement, M>>,
  destruction?: Script<El<HTMLFieldSetElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLFieldSetElement, M>>): ReactiveTreeNode<El<HTMLFieldSetElement, M>> {
  //
  return describe(FieldSet.name, HtmlTags.fieldset,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function FigCaption<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function FigCaption<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function FigCaption<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function FigCaption<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function FigCaption<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function FigCaption<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(FigCaption.name, HtmlTags.figcaption,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Figure<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Figure<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Figure<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Figure<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Figure<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Figure<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Figure.name, HtmlTags.figure,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Footer<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Footer<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Footer<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Footer<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Footer<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Footer<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Footer.name, HtmlTags.footer,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Form<M = unknown>(
  setup: Script<El<HTMLFormElement, M>>): ReactiveTreeNode<El<HTMLFormElement, M>>

export function Form<M = unknown>(
  key: string,
  setup: Script<El<HTMLFormElement, M>>): ReactiveTreeNode<El<HTMLFormElement, M>>

export function Form<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLFormElement, M>>): ReactiveTreeNode<El<HTMLFormElement, M>>

export function Form<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLFormElement, M>>): ReactiveTreeNode<El<HTMLFormElement, M>>

export function Form<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLFormElement, M>>,
  setupTask?: ScriptAsync<El<HTMLFormElement, M>>,
  creation?: Script<El<HTMLFormElement, M>>,
  creationTask?: ScriptAsync<El<HTMLFormElement, M>>,
  mounting?: Script<El<HTMLFormElement, M>>,
  destruction?: Script<El<HTMLFormElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLFormElement, M>>): ReactiveTreeNode<El<HTMLFormElement, M>>

export function Form<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLFormElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLFormElement, M>>,
  setupOrMode?: Script<El<HTMLFormElement, M>> | Mode,
  setup?: Script<El<HTMLFormElement, M>>,
  setupTask?: ScriptAsync<El<HTMLFormElement, M>>,
  creation?: Script<El<HTMLFormElement, M>>,
  creationTask?: ScriptAsync<El<HTMLFormElement, M>>,
  mounting?: Script<El<HTMLFormElement, M>>,
  destruction?: Script<El<HTMLFormElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLFormElement, M>>): ReactiveTreeNode<El<HTMLFormElement, M>> {
  //
  return describe(Form.name, HtmlTags.form,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function H1<M = unknown>(
  setup: Script<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>>

export function H1<M = unknown>(
  key: string,
  setup: Script<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>>

export function H1<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>>

export function H1<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>>

export function H1<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLHeadingElement, M>>,
  setupTask?: ScriptAsync<El<HTMLHeadingElement, M>>,
  creation?: Script<El<HTMLHeadingElement, M>>,
  creationTask?: ScriptAsync<El<HTMLHeadingElement, M>>,
  mounting?: Script<El<HTMLHeadingElement, M>>,
  destruction?: Script<El<HTMLHeadingElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>>

export function H1<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLHeadingElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M>>,
  setupOrMode?: Script<El<HTMLHeadingElement, M>> | Mode,
  setup?: Script<El<HTMLHeadingElement, M>>,
  setupTask?: ScriptAsync<El<HTMLHeadingElement, M>>,
  creation?: Script<El<HTMLHeadingElement, M>>,
  creationTask?: ScriptAsync<El<HTMLHeadingElement, M>>,
  mounting?: Script<El<HTMLHeadingElement, M>>,
  destruction?: Script<El<HTMLHeadingElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>> {
  //
  return describe(H1.name, HtmlTags.h1,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function H2<M = unknown>(
  setup: Script<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>>

export function H2<M = unknown>(
  key: string,
  setup: Script<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>>

export function H2<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>>

export function H2<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>>

export function H2<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLHeadingElement, M>>,
  setupTask?: ScriptAsync<El<HTMLHeadingElement, M>>,
  creation?: Script<El<HTMLHeadingElement, M>>,
  creationTask?: ScriptAsync<El<HTMLHeadingElement, M>>,
  mounting?: Script<El<HTMLHeadingElement, M>>,
  destruction?: Script<El<HTMLHeadingElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>>

export function H2<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLHeadingElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M>>,
  setupOrMode?: Script<El<HTMLHeadingElement, M>> | Mode,
  setup?: Script<El<HTMLHeadingElement, M>>,
  setupTask?: ScriptAsync<El<HTMLHeadingElement, M>>,
  creation?: Script<El<HTMLHeadingElement, M>>,
  creationTask?: ScriptAsync<El<HTMLHeadingElement, M>>,
  mounting?: Script<El<HTMLHeadingElement, M>>,
  destruction?: Script<El<HTMLHeadingElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>> {
  //
  return describe(H2.name, HtmlTags.h2,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function H3<M = unknown>(
  setup: Script<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>>

export function H3<M = unknown>(
  key: string,
  setup: Script<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>>

export function H3<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>>

export function H3<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>>

export function H3<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLHeadingElement, M>>,
  setupTask?: ScriptAsync<El<HTMLHeadingElement, M>>,
  creation?: Script<El<HTMLHeadingElement, M>>,
  creationTask?: ScriptAsync<El<HTMLHeadingElement, M>>,
  mounting?: Script<El<HTMLHeadingElement, M>>,
  destruction?: Script<El<HTMLHeadingElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>>

export function H3<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLHeadingElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M>>,
  setupOrMode?: Script<El<HTMLHeadingElement, M>> | Mode,
  setup?: Script<El<HTMLHeadingElement, M>>,
  setupTask?: ScriptAsync<El<HTMLHeadingElement, M>>,
  creation?: Script<El<HTMLHeadingElement, M>>,
  creationTask?: ScriptAsync<El<HTMLHeadingElement, M>>,
  mounting?: Script<El<HTMLHeadingElement, M>>,
  destruction?: Script<El<HTMLHeadingElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>> {
  //
  return describe(H3.name, HtmlTags.h3,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function H4<M = unknown>(
  setup: Script<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>>

export function H4<M = unknown>(
  key: string,
  setup: Script<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>>

export function H4<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>>

export function H4<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>>

export function H4<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLHeadingElement, M>>,
  setupTask?: ScriptAsync<El<HTMLHeadingElement, M>>,
  creation?: Script<El<HTMLHeadingElement, M>>,
  creationTask?: ScriptAsync<El<HTMLHeadingElement, M>>,
  mounting?: Script<El<HTMLHeadingElement, M>>,
  destruction?: Script<El<HTMLHeadingElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>>

export function H4<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLHeadingElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M>>,
  setupOrMode?: Script<El<HTMLHeadingElement, M>> | Mode,
  setup?: Script<El<HTMLHeadingElement, M>>,
  setupTask?: ScriptAsync<El<HTMLHeadingElement, M>>,
  creation?: Script<El<HTMLHeadingElement, M>>,
  creationTask?: ScriptAsync<El<HTMLHeadingElement, M>>,
  mounting?: Script<El<HTMLHeadingElement, M>>,
  destruction?: Script<El<HTMLHeadingElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>> {
  //
  return describe(H4.name, HtmlTags.h4,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function H5<M = unknown>(
  setup: Script<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>>

export function H5<M = unknown>(
  key: string,
  setup: Script<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>>

export function H5<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>>

export function H5<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>>

export function H5<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLHeadingElement, M>>,
  setupTask?: ScriptAsync<El<HTMLHeadingElement, M>>,
  creation?: Script<El<HTMLHeadingElement, M>>,
  creationTask?: ScriptAsync<El<HTMLHeadingElement, M>>,
  mounting?: Script<El<HTMLHeadingElement, M>>,
  destruction?: Script<El<HTMLHeadingElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>>

export function H5<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLHeadingElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M>>,
  setupOrMode?: Script<El<HTMLHeadingElement, M>> | Mode,
  setup?: Script<El<HTMLHeadingElement, M>>,
  setupTask?: ScriptAsync<El<HTMLHeadingElement, M>>,
  creation?: Script<El<HTMLHeadingElement, M>>,
  creationTask?: ScriptAsync<El<HTMLHeadingElement, M>>,
  mounting?: Script<El<HTMLHeadingElement, M>>,
  destruction?: Script<El<HTMLHeadingElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>> {
  //
  return describe(H5.name, HtmlTags.h5,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function H6<M = unknown>(
  setup: Script<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>>

export function H6<M = unknown>(
  key: string,
  setup: Script<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>>

export function H6<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>>

export function H6<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>>

export function H6<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLHeadingElement, M>>,
  setupTask?: ScriptAsync<El<HTMLHeadingElement, M>>,
  creation?: Script<El<HTMLHeadingElement, M>>,
  creationTask?: ScriptAsync<El<HTMLHeadingElement, M>>,
  mounting?: Script<El<HTMLHeadingElement, M>>,
  destruction?: Script<El<HTMLHeadingElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>>

export function H6<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLHeadingElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLHeadingElement, M>>,
  setupOrMode?: Script<El<HTMLHeadingElement, M>> | Mode,
  setup?: Script<El<HTMLHeadingElement, M>>,
  setupTask?: ScriptAsync<El<HTMLHeadingElement, M>>,
  creation?: Script<El<HTMLHeadingElement, M>>,
  creationTask?: ScriptAsync<El<HTMLHeadingElement, M>>,
  mounting?: Script<El<HTMLHeadingElement, M>>,
  destruction?: Script<El<HTMLHeadingElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadingElement, M>>): ReactiveTreeNode<El<HTMLHeadingElement, M>> {
  //
  return describe(H6.name, HtmlTags.h6,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Head<M = unknown>(
  setup: Script<El<HTMLHeadElement, M>>): ReactiveTreeNode<El<HTMLHeadElement, M>>

export function Head<M = unknown>(
  key: string,
  setup: Script<El<HTMLHeadElement, M>>): ReactiveTreeNode<El<HTMLHeadElement, M>>

export function Head<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLHeadElement, M>>): ReactiveTreeNode<El<HTMLHeadElement, M>>

export function Head<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLHeadElement, M>>): ReactiveTreeNode<El<HTMLHeadElement, M>>

export function Head<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLHeadElement, M>>,
  setupTask?: ScriptAsync<El<HTMLHeadElement, M>>,
  creation?: Script<El<HTMLHeadElement, M>>,
  creationTask?: ScriptAsync<El<HTMLHeadElement, M>>,
  mounting?: Script<El<HTMLHeadElement, M>>,
  destruction?: Script<El<HTMLHeadElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadElement, M>>): ReactiveTreeNode<El<HTMLHeadElement, M>>

export function Head<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLHeadElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLHeadElement, M>>,
  setupOrMode?: Script<El<HTMLHeadElement, M>> | Mode,
  setup?: Script<El<HTMLHeadElement, M>>,
  setupTask?: ScriptAsync<El<HTMLHeadElement, M>>,
  creation?: Script<El<HTMLHeadElement, M>>,
  creationTask?: ScriptAsync<El<HTMLHeadElement, M>>,
  mounting?: Script<El<HTMLHeadElement, M>>,
  destruction?: Script<El<HTMLHeadElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHeadElement, M>>): ReactiveTreeNode<El<HTMLHeadElement, M>> {
  //
  return describe(Head.name, HtmlTags.head,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Header<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Header<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Header<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Header<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Header<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Header<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Header.name, HtmlTags.header,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function HGroup<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function HGroup<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function HGroup<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function HGroup<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function HGroup<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function HGroup<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(HGroup.name, HtmlTags.hgroup,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function HR<M = unknown>(
  setup: Script<El<HTMLHRElement, M>>): ReactiveTreeNode<El<HTMLHRElement, M>>

export function HR<M = unknown>(
  key: string,
  setup: Script<El<HTMLHRElement, M>>): ReactiveTreeNode<El<HTMLHRElement, M>>

export function HR<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLHRElement, M>>): ReactiveTreeNode<El<HTMLHRElement, M>>

export function HR<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLHRElement, M>>): ReactiveTreeNode<El<HTMLHRElement, M>>

export function HR<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLHRElement, M>>,
  setupTask?: ScriptAsync<El<HTMLHRElement, M>>,
  creation?: Script<El<HTMLHRElement, M>>,
  creationTask?: ScriptAsync<El<HTMLHRElement, M>>,
  mounting?: Script<El<HTMLHRElement, M>>,
  destruction?: Script<El<HTMLHRElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHRElement, M>>): ReactiveTreeNode<El<HTMLHRElement, M>>

export function HR<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLHRElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLHRElement, M>>,
  setupOrMode?: Script<El<HTMLHRElement, M>> | Mode,
  setup?: Script<El<HTMLHRElement, M>>,
  setupTask?: ScriptAsync<El<HTMLHRElement, M>>,
  creation?: Script<El<HTMLHRElement, M>>,
  creationTask?: ScriptAsync<El<HTMLHRElement, M>>,
  mounting?: Script<El<HTMLHRElement, M>>,
  destruction?: Script<El<HTMLHRElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHRElement, M>>): ReactiveTreeNode<El<HTMLHRElement, M>> {
  //
  return describe(HR.name, HtmlTags.hr,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Html<M = unknown>(
  setup: Script<El<HTMLHtmlElement, M>>): ReactiveTreeNode<El<HTMLHtmlElement, M>>

export function Html<M = unknown>(
  key: string,
  setup: Script<El<HTMLHtmlElement, M>>): ReactiveTreeNode<El<HTMLHtmlElement, M>>

export function Html<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLHtmlElement, M>>): ReactiveTreeNode<El<HTMLHtmlElement, M>>

export function Html<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLHtmlElement, M>>): ReactiveTreeNode<El<HTMLHtmlElement, M>>

export function Html<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLHtmlElement, M>>,
  setupTask?: ScriptAsync<El<HTMLHtmlElement, M>>,
  creation?: Script<El<HTMLHtmlElement, M>>,
  creationTask?: ScriptAsync<El<HTMLHtmlElement, M>>,
  mounting?: Script<El<HTMLHtmlElement, M>>,
  destruction?: Script<El<HTMLHtmlElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHtmlElement, M>>): ReactiveTreeNode<El<HTMLHtmlElement, M>>

export function Html<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLHtmlElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLHtmlElement, M>>,
  setupOrMode?: Script<El<HTMLHtmlElement, M>> | Mode,
  setup?: Script<El<HTMLHtmlElement, M>>,
  setupTask?: ScriptAsync<El<HTMLHtmlElement, M>>,
  creation?: Script<El<HTMLHtmlElement, M>>,
  creationTask?: ScriptAsync<El<HTMLHtmlElement, M>>,
  mounting?: Script<El<HTMLHtmlElement, M>>,
  destruction?: Script<El<HTMLHtmlElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLHtmlElement, M>>): ReactiveTreeNode<El<HTMLHtmlElement, M>> {
  //
  return describe(Html.name, HtmlTags.html,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function I<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function I<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function I<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function I<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function I<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function I<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(I.name, HtmlTags.i,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function IFrame<M = unknown>(
  setup: Script<El<HTMLIFrameElement, M>>): ReactiveTreeNode<El<HTMLIFrameElement, M>>

export function IFrame<M = unknown>(
  key: string,
  setup: Script<El<HTMLIFrameElement, M>>): ReactiveTreeNode<El<HTMLIFrameElement, M>>

export function IFrame<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLIFrameElement, M>>): ReactiveTreeNode<El<HTMLIFrameElement, M>>

export function IFrame<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLIFrameElement, M>>): ReactiveTreeNode<El<HTMLIFrameElement, M>>

export function IFrame<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLIFrameElement, M>>,
  setupTask?: ScriptAsync<El<HTMLIFrameElement, M>>,
  creation?: Script<El<HTMLIFrameElement, M>>,
  creationTask?: ScriptAsync<El<HTMLIFrameElement, M>>,
  mounting?: Script<El<HTMLIFrameElement, M>>,
  destruction?: Script<El<HTMLIFrameElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLIFrameElement, M>>): ReactiveTreeNode<El<HTMLIFrameElement, M>>

export function IFrame<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLIFrameElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLIFrameElement, M>>,
  setupOrMode?: Script<El<HTMLIFrameElement, M>> | Mode,
  setup?: Script<El<HTMLIFrameElement, M>>,
  setupTask?: ScriptAsync<El<HTMLIFrameElement, M>>,
  creation?: Script<El<HTMLIFrameElement, M>>,
  creationTask?: ScriptAsync<El<HTMLIFrameElement, M>>,
  mounting?: Script<El<HTMLIFrameElement, M>>,
  destruction?: Script<El<HTMLIFrameElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLIFrameElement, M>>): ReactiveTreeNode<El<HTMLIFrameElement, M>> {
  //
  return describe(IFrame.name, HtmlTags.iframe,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Img<M = unknown>(
  setup: Script<El<HTMLImageElement, M>>): ReactiveTreeNode<El<HTMLImageElement, M>>

export function Img<M = unknown>(
  key: string,
  setup: Script<El<HTMLImageElement, M>>): ReactiveTreeNode<El<HTMLImageElement, M>>

export function Img<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLImageElement, M>>): ReactiveTreeNode<El<HTMLImageElement, M>>

export function Img<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLImageElement, M>>): ReactiveTreeNode<El<HTMLImageElement, M>>

export function Img<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLImageElement, M>>,
  setupTask?: ScriptAsync<El<HTMLImageElement, M>>,
  creation?: Script<El<HTMLImageElement, M>>,
  creationTask?: ScriptAsync<El<HTMLImageElement, M>>,
  mounting?: Script<El<HTMLImageElement, M>>,
  destruction?: Script<El<HTMLImageElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLImageElement, M>>): ReactiveTreeNode<El<HTMLImageElement, M>>

export function Img<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLImageElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLImageElement, M>>,
  setupOrMode?: Script<El<HTMLImageElement, M>> | Mode,
  setup?: Script<El<HTMLImageElement, M>>,
  setupTask?: ScriptAsync<El<HTMLImageElement, M>>,
  creation?: Script<El<HTMLImageElement, M>>,
  creationTask?: ScriptAsync<El<HTMLImageElement, M>>,
  mounting?: Script<El<HTMLImageElement, M>>,
  destruction?: Script<El<HTMLImageElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLImageElement, M>>): ReactiveTreeNode<El<HTMLImageElement, M>> {
  //
  return describe(Img.name, HtmlTags.img,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Input<M = unknown>(
  setup: Script<El<HTMLInputElement, M>>): ReactiveTreeNode<El<HTMLInputElement, M>>

export function Input<M = unknown>(
  key: string,
  setup: Script<El<HTMLInputElement, M>>): ReactiveTreeNode<El<HTMLInputElement, M>>

export function Input<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLInputElement, M>>): ReactiveTreeNode<El<HTMLInputElement, M>>

export function Input<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLInputElement, M>>): ReactiveTreeNode<El<HTMLInputElement, M>>

export function Input<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLInputElement, M>>,
  setupTask?: ScriptAsync<El<HTMLInputElement, M>>,
  creation?: Script<El<HTMLInputElement, M>>,
  creationTask?: ScriptAsync<El<HTMLInputElement, M>>,
  mounting?: Script<El<HTMLInputElement, M>>,
  destruction?: Script<El<HTMLInputElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLInputElement, M>>): ReactiveTreeNode<El<HTMLInputElement, M>>

export function Input<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLInputElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLInputElement, M>>,
  setupOrMode?: Script<El<HTMLInputElement, M>> | Mode,
  setup?: Script<El<HTMLInputElement, M>>,
  setupTask?: ScriptAsync<El<HTMLInputElement, M>>,
  creation?: Script<El<HTMLInputElement, M>>,
  creationTask?: ScriptAsync<El<HTMLInputElement, M>>,
  mounting?: Script<El<HTMLInputElement, M>>,
  destruction?: Script<El<HTMLInputElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLInputElement, M>>): ReactiveTreeNode<El<HTMLInputElement, M>> {
  //
  return describe(Input.name, HtmlTags.input,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Ins<M = unknown>(
  setup: Script<El<HTMLModElement, M>>): ReactiveTreeNode<El<HTMLModElement, M>>

export function Ins<M = unknown>(
  key: string,
  setup: Script<El<HTMLModElement, M>>): ReactiveTreeNode<El<HTMLModElement, M>>

export function Ins<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLModElement, M>>): ReactiveTreeNode<El<HTMLModElement, M>>

export function Ins<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLModElement, M>>): ReactiveTreeNode<El<HTMLModElement, M>>

export function Ins<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLModElement, M>>,
  setupTask?: ScriptAsync<El<HTMLModElement, M>>,
  creation?: Script<El<HTMLModElement, M>>,
  creationTask?: ScriptAsync<El<HTMLModElement, M>>,
  mounting?: Script<El<HTMLModElement, M>>,
  destruction?: Script<El<HTMLModElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLModElement, M>>): ReactiveTreeNode<El<HTMLModElement, M>>

export function Ins<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLModElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLModElement, M>>,
  setupOrMode?: Script<El<HTMLModElement, M>> | Mode,
  setup?: Script<El<HTMLModElement, M>>,
  setupTask?: ScriptAsync<El<HTMLModElement, M>>,
  creation?: Script<El<HTMLModElement, M>>,
  creationTask?: ScriptAsync<El<HTMLModElement, M>>,
  mounting?: Script<El<HTMLModElement, M>>,
  destruction?: Script<El<HTMLModElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLModElement, M>>): ReactiveTreeNode<El<HTMLModElement, M>> {
  //
  return describe(Ins.name, HtmlTags.ins,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Kbd<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Kbd<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Kbd<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Kbd<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Kbd<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Kbd<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Kbd.name, HtmlTags.kbd,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function KeyGen<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function KeyGen<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function KeyGen<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function KeyGen<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function KeyGen<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function KeyGen<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(KeyGen.name, HtmlTags.keygen,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Label<M = unknown>(
  setup: Script<El<HTMLLabelElement, M>>): ReactiveTreeNode<El<HTMLLabelElement, M>>

export function Label<M = unknown>(
  key: string,
  setup: Script<El<HTMLLabelElement, M>>): ReactiveTreeNode<El<HTMLLabelElement, M>>

export function Label<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLLabelElement, M>>): ReactiveTreeNode<El<HTMLLabelElement, M>>

export function Label<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLLabelElement, M>>): ReactiveTreeNode<El<HTMLLabelElement, M>>

export function Label<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLLabelElement, M>>,
  setupTask?: ScriptAsync<El<HTMLLabelElement, M>>,
  creation?: Script<El<HTMLLabelElement, M>>,
  creationTask?: ScriptAsync<El<HTMLLabelElement, M>>,
  mounting?: Script<El<HTMLLabelElement, M>>,
  destruction?: Script<El<HTMLLabelElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLLabelElement, M>>): ReactiveTreeNode<El<HTMLLabelElement, M>>

export function Label<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLLabelElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLLabelElement, M>>,
  setupOrMode?: Script<El<HTMLLabelElement, M>> | Mode,
  setup?: Script<El<HTMLLabelElement, M>>,
  setupTask?: ScriptAsync<El<HTMLLabelElement, M>>,
  creation?: Script<El<HTMLLabelElement, M>>,
  creationTask?: ScriptAsync<El<HTMLLabelElement, M>>,
  mounting?: Script<El<HTMLLabelElement, M>>,
  destruction?: Script<El<HTMLLabelElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLLabelElement, M>>): ReactiveTreeNode<El<HTMLLabelElement, M>> {
  //
  return describe(Label.name, HtmlTags.label,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Legend<M = unknown>(
  setup: Script<El<HTMLLegendElement, M>>): ReactiveTreeNode<El<HTMLLegendElement, M>>

export function Legend<M = unknown>(
  key: string,
  setup: Script<El<HTMLLegendElement, M>>): ReactiveTreeNode<El<HTMLLegendElement, M>>

export function Legend<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLLegendElement, M>>): ReactiveTreeNode<El<HTMLLegendElement, M>>

export function Legend<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLLegendElement, M>>): ReactiveTreeNode<El<HTMLLegendElement, M>>

export function Legend<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLLegendElement, M>>,
  setupTask?: ScriptAsync<El<HTMLLegendElement, M>>,
  creation?: Script<El<HTMLLegendElement, M>>,
  creationTask?: ScriptAsync<El<HTMLLegendElement, M>>,
  mounting?: Script<El<HTMLLegendElement, M>>,
  destruction?: Script<El<HTMLLegendElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLLegendElement, M>>): ReactiveTreeNode<El<HTMLLegendElement, M>>

export function Legend<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLLegendElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLLegendElement, M>>,
  setupOrMode?: Script<El<HTMLLegendElement, M>> | Mode,
  setup?: Script<El<HTMLLegendElement, M>>,
  setupTask?: ScriptAsync<El<HTMLLegendElement, M>>,
  creation?: Script<El<HTMLLegendElement, M>>,
  creationTask?: ScriptAsync<El<HTMLLegendElement, M>>,
  mounting?: Script<El<HTMLLegendElement, M>>,
  destruction?: Script<El<HTMLLegendElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLLegendElement, M>>): ReactiveTreeNode<El<HTMLLegendElement, M>> {
  //
  return describe(Legend.name, HtmlTags.legend,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function LI<M = unknown>(
  setup: Script<El<HTMLLIElement, M>>): ReactiveTreeNode<El<HTMLLIElement, M>>

export function LI<M = unknown>(
  key: string,
  setup: Script<El<HTMLLIElement, M>>): ReactiveTreeNode<El<HTMLLIElement, M>>

export function LI<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLLIElement, M>>): ReactiveTreeNode<El<HTMLLIElement, M>>

export function LI<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLLIElement, M>>): ReactiveTreeNode<El<HTMLLIElement, M>>

export function LI<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLLIElement, M>>,
  setupTask?: ScriptAsync<El<HTMLLIElement, M>>,
  creation?: Script<El<HTMLLIElement, M>>,
  creationTask?: ScriptAsync<El<HTMLLIElement, M>>,
  mounting?: Script<El<HTMLLIElement, M>>,
  destruction?: Script<El<HTMLLIElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLLIElement, M>>): ReactiveTreeNode<El<HTMLLIElement, M>>

export function LI<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLLIElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLLIElement, M>>,
  setupOrMode?: Script<El<HTMLLIElement, M>> | Mode,
  setup?: Script<El<HTMLLIElement, M>>,
  setupTask?: ScriptAsync<El<HTMLLIElement, M>>,
  creation?: Script<El<HTMLLIElement, M>>,
  creationTask?: ScriptAsync<El<HTMLLIElement, M>>,
  mounting?: Script<El<HTMLLIElement, M>>,
  destruction?: Script<El<HTMLLIElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLLIElement, M>>): ReactiveTreeNode<El<HTMLLIElement, M>> {
  //
  return describe(LI.name, HtmlTags.li,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Link<M = unknown>(
  setup: Script<El<HTMLLinkElement, M>>): ReactiveTreeNode<El<HTMLLinkElement, M>>

export function Link<M = unknown>(
  key: string,
  setup: Script<El<HTMLLinkElement, M>>): ReactiveTreeNode<El<HTMLLinkElement, M>>

export function Link<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLLinkElement, M>>): ReactiveTreeNode<El<HTMLLinkElement, M>>

export function Link<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLLinkElement, M>>): ReactiveTreeNode<El<HTMLLinkElement, M>>

export function Link<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLLinkElement, M>>,
  setupTask?: ScriptAsync<El<HTMLLinkElement, M>>,
  creation?: Script<El<HTMLLinkElement, M>>,
  creationTask?: ScriptAsync<El<HTMLLinkElement, M>>,
  mounting?: Script<El<HTMLLinkElement, M>>,
  destruction?: Script<El<HTMLLinkElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLLinkElement, M>>): ReactiveTreeNode<El<HTMLLinkElement, M>>

export function Link<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLLinkElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLLinkElement, M>>,
  setupOrMode?: Script<El<HTMLLinkElement, M>> | Mode,
  setup?: Script<El<HTMLLinkElement, M>>,
  setupTask?: ScriptAsync<El<HTMLLinkElement, M>>,
  creation?: Script<El<HTMLLinkElement, M>>,
  creationTask?: ScriptAsync<El<HTMLLinkElement, M>>,
  mounting?: Script<El<HTMLLinkElement, M>>,
  destruction?: Script<El<HTMLLinkElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLLinkElement, M>>): ReactiveTreeNode<El<HTMLLinkElement, M>> {
  //
  return describe(Link.name, HtmlTags.link,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Main<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Main<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Main<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Main<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Main<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Main<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Main.name, HtmlTags.main,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Map<M = unknown>(
  setup: Script<El<HTMLMapElement, M>>): ReactiveTreeNode<El<HTMLMapElement, M>>

export function Map<M = unknown>(
  key: string,
  setup: Script<El<HTMLMapElement, M>>): ReactiveTreeNode<El<HTMLMapElement, M>>

export function Map<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLMapElement, M>>): ReactiveTreeNode<El<HTMLMapElement, M>>

export function Map<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLMapElement, M>>): ReactiveTreeNode<El<HTMLMapElement, M>>

export function Map<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLMapElement, M>>,
  setupTask?: ScriptAsync<El<HTMLMapElement, M>>,
  creation?: Script<El<HTMLMapElement, M>>,
  creationTask?: ScriptAsync<El<HTMLMapElement, M>>,
  mounting?: Script<El<HTMLMapElement, M>>,
  destruction?: Script<El<HTMLMapElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLMapElement, M>>): ReactiveTreeNode<El<HTMLMapElement, M>>

export function Map<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLMapElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLMapElement, M>>,
  setupOrMode?: Script<El<HTMLMapElement, M>> | Mode,
  setup?: Script<El<HTMLMapElement, M>>,
  setupTask?: ScriptAsync<El<HTMLMapElement, M>>,
  creation?: Script<El<HTMLMapElement, M>>,
  creationTask?: ScriptAsync<El<HTMLMapElement, M>>,
  mounting?: Script<El<HTMLMapElement, M>>,
  destruction?: Script<El<HTMLMapElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLMapElement, M>>): ReactiveTreeNode<El<HTMLMapElement, M>> {
  //
  return describe(Map.name, HtmlTags.map,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Mark<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Mark<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Mark<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Mark<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Mark<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Mark<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Mark.name, HtmlTags.mark,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Menu<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Menu<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Menu<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Menu<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Menu<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Menu<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Menu.name, HtmlTags.menu,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function MenuItem<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function MenuItem<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function MenuItem<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function MenuItem<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function MenuItem<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function MenuItem<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(MenuItem.name, HtmlTags.menuitem,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Meta<M = unknown>(
  setup: Script<El<HTMLMetaElement, M>>): ReactiveTreeNode<El<HTMLMetaElement, M>>

export function Meta<M = unknown>(
  key: string,
  setup: Script<El<HTMLMetaElement, M>>): ReactiveTreeNode<El<HTMLMetaElement, M>>

export function Meta<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLMetaElement, M>>): ReactiveTreeNode<El<HTMLMetaElement, M>>

export function Meta<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLMetaElement, M>>): ReactiveTreeNode<El<HTMLMetaElement, M>>

export function Meta<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLMetaElement, M>>,
  setupTask?: ScriptAsync<El<HTMLMetaElement, M>>,
  creation?: Script<El<HTMLMetaElement, M>>,
  creationTask?: ScriptAsync<El<HTMLMetaElement, M>>,
  mounting?: Script<El<HTMLMetaElement, M>>,
  destruction?: Script<El<HTMLMetaElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLMetaElement, M>>): ReactiveTreeNode<El<HTMLMetaElement, M>>

export function Meta<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLMetaElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLMetaElement, M>>,
  setupOrMode?: Script<El<HTMLMetaElement, M>> | Mode,
  setup?: Script<El<HTMLMetaElement, M>>,
  setupTask?: ScriptAsync<El<HTMLMetaElement, M>>,
  creation?: Script<El<HTMLMetaElement, M>>,
  creationTask?: ScriptAsync<El<HTMLMetaElement, M>>,
  mounting?: Script<El<HTMLMetaElement, M>>,
  destruction?: Script<El<HTMLMetaElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLMetaElement, M>>): ReactiveTreeNode<El<HTMLMetaElement, M>> {
  //
  return describe(Meta.name, HtmlTags.meta,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Meter<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Meter<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Meter<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Meter<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Meter<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Meter<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Meter.name, HtmlTags.meter,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Nav<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Nav<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Nav<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Nav<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Nav<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Nav<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Nav.name, HtmlTags.nav,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function NoIndex<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function NoIndex<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function NoIndex<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function NoIndex<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function NoIndex<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function NoIndex<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(NoIndex.name, HtmlTags.noindex,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function NoScript<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function NoScript<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function NoScript<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function NoScript<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function NoScript<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function NoScript<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(NoScript.name, HtmlTags.noscript,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Obj<M = unknown>(
  setup: Script<El<HTMLObjectElement, M>>): ReactiveTreeNode<El<HTMLObjectElement, M>>

export function Obj<M = unknown>(
  key: string,
  setup: Script<El<HTMLObjectElement, M>>): ReactiveTreeNode<El<HTMLObjectElement, M>>

export function Obj<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLObjectElement, M>>): ReactiveTreeNode<El<HTMLObjectElement, M>>

export function Obj<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLObjectElement, M>>): ReactiveTreeNode<El<HTMLObjectElement, M>>

export function Obj<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLObjectElement, M>>,
  setupTask?: ScriptAsync<El<HTMLObjectElement, M>>,
  creation?: Script<El<HTMLObjectElement, M>>,
  creationTask?: ScriptAsync<El<HTMLObjectElement, M>>,
  mounting?: Script<El<HTMLObjectElement, M>>,
  destruction?: Script<El<HTMLObjectElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLObjectElement, M>>): ReactiveTreeNode<El<HTMLObjectElement, M>>

export function Obj<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLObjectElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLObjectElement, M>>,
  setupOrMode?: Script<El<HTMLObjectElement, M>> | Mode,
  setup?: Script<El<HTMLObjectElement, M>>,
  setupTask?: ScriptAsync<El<HTMLObjectElement, M>>,
  creation?: Script<El<HTMLObjectElement, M>>,
  creationTask?: ScriptAsync<El<HTMLObjectElement, M>>,
  mounting?: Script<El<HTMLObjectElement, M>>,
  destruction?: Script<El<HTMLObjectElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLObjectElement, M>>): ReactiveTreeNode<El<HTMLObjectElement, M>> {
  //
  return describe(Obj.name, HtmlTags.object,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function OL<M = unknown>(
  setup: Script<El<HTMLOListElement, M>>): ReactiveTreeNode<El<HTMLOListElement, M>>

export function OL<M = unknown>(
  key: string,
  setup: Script<El<HTMLOListElement, M>>): ReactiveTreeNode<El<HTMLOListElement, M>>

export function OL<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLOListElement, M>>): ReactiveTreeNode<El<HTMLOListElement, M>>

export function OL<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLOListElement, M>>): ReactiveTreeNode<El<HTMLOListElement, M>>

export function OL<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLOListElement, M>>,
  setupTask?: ScriptAsync<El<HTMLOListElement, M>>,
  creation?: Script<El<HTMLOListElement, M>>,
  creationTask?: ScriptAsync<El<HTMLOListElement, M>>,
  mounting?: Script<El<HTMLOListElement, M>>,
  destruction?: Script<El<HTMLOListElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLOListElement, M>>): ReactiveTreeNode<El<HTMLOListElement, M>>

export function OL<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLOListElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLOListElement, M>>,
  setupOrMode?: Script<El<HTMLOListElement, M>> | Mode,
  setup?: Script<El<HTMLOListElement, M>>,
  setupTask?: ScriptAsync<El<HTMLOListElement, M>>,
  creation?: Script<El<HTMLOListElement, M>>,
  creationTask?: ScriptAsync<El<HTMLOListElement, M>>,
  mounting?: Script<El<HTMLOListElement, M>>,
  destruction?: Script<El<HTMLOListElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLOListElement, M>>): ReactiveTreeNode<El<HTMLOListElement, M>> {
  //
  return describe(OL.name, HtmlTags.ol,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function OptGroup<M = unknown>(
  setup: Script<El<HTMLOptGroupElement, M>>): ReactiveTreeNode<El<HTMLOptGroupElement, M>>

export function OptGroup<M = unknown>(
  key: string,
  setup: Script<El<HTMLOptGroupElement, M>>): ReactiveTreeNode<El<HTMLOptGroupElement, M>>

export function OptGroup<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLOptGroupElement, M>>): ReactiveTreeNode<El<HTMLOptGroupElement, M>>

export function OptGroup<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLOptGroupElement, M>>): ReactiveTreeNode<El<HTMLOptGroupElement, M>>

export function OptGroup<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLOptGroupElement, M>>,
  setupTask?: ScriptAsync<El<HTMLOptGroupElement, M>>,
  creation?: Script<El<HTMLOptGroupElement, M>>,
  creationTask?: ScriptAsync<El<HTMLOptGroupElement, M>>,
  mounting?: Script<El<HTMLOptGroupElement, M>>,
  destruction?: Script<El<HTMLOptGroupElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLOptGroupElement, M>>): ReactiveTreeNode<El<HTMLOptGroupElement, M>>

export function OptGroup<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLOptGroupElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLOptGroupElement, M>>,
  setupOrMode?: Script<El<HTMLOptGroupElement, M>> | Mode,
  setup?: Script<El<HTMLOptGroupElement, M>>,
  setupTask?: ScriptAsync<El<HTMLOptGroupElement, M>>,
  creation?: Script<El<HTMLOptGroupElement, M>>,
  creationTask?: ScriptAsync<El<HTMLOptGroupElement, M>>,
  mounting?: Script<El<HTMLOptGroupElement, M>>,
  destruction?: Script<El<HTMLOptGroupElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLOptGroupElement, M>>): ReactiveTreeNode<El<HTMLOptGroupElement, M>> {
  //
  return describe(OptGroup.name, HtmlTags.optgroup,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Option<M = unknown>(
  setup: Script<El<HTMLOptionElement, M>>): ReactiveTreeNode<El<HTMLOptionElement, M>>

export function Option<M = unknown>(
  key: string,
  setup: Script<El<HTMLOptionElement, M>>): ReactiveTreeNode<El<HTMLOptionElement, M>>

export function Option<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLOptionElement, M>>): ReactiveTreeNode<El<HTMLOptionElement, M>>

export function Option<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLOptionElement, M>>): ReactiveTreeNode<El<HTMLOptionElement, M>>

export function Option<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLOptionElement, M>>,
  setupTask?: ScriptAsync<El<HTMLOptionElement, M>>,
  creation?: Script<El<HTMLOptionElement, M>>,
  creationTask?: ScriptAsync<El<HTMLOptionElement, M>>,
  mounting?: Script<El<HTMLOptionElement, M>>,
  destruction?: Script<El<HTMLOptionElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLOptionElement, M>>): ReactiveTreeNode<El<HTMLOptionElement, M>>

export function Option<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLOptionElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLOptionElement, M>>,
  setupOrMode?: Script<El<HTMLOptionElement, M>> | Mode,
  setup?: Script<El<HTMLOptionElement, M>>,
  setupTask?: ScriptAsync<El<HTMLOptionElement, M>>,
  creation?: Script<El<HTMLOptionElement, M>>,
  creationTask?: ScriptAsync<El<HTMLOptionElement, M>>,
  mounting?: Script<El<HTMLOptionElement, M>>,
  destruction?: Script<El<HTMLOptionElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLOptionElement, M>>): ReactiveTreeNode<El<HTMLOptionElement, M>> {
  //
  return describe(Option.name, HtmlTags.option,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Output<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Output<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Output<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Output<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Output<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Output<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Output.name, HtmlTags.output,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function P<M = unknown>(
  setup: Script<El<HTMLParagraphElement, M>>): ReactiveTreeNode<El<HTMLParagraphElement, M>>

export function P<M = unknown>(
  key: string,
  setup: Script<El<HTMLParagraphElement, M>>): ReactiveTreeNode<El<HTMLParagraphElement, M>>

export function P<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLParagraphElement, M>>): ReactiveTreeNode<El<HTMLParagraphElement, M>>

export function P<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLParagraphElement, M>>): ReactiveTreeNode<El<HTMLParagraphElement, M>>

export function P<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLParagraphElement, M>>,
  setupTask?: ScriptAsync<El<HTMLParagraphElement, M>>,
  creation?: Script<El<HTMLParagraphElement, M>>,
  creationTask?: ScriptAsync<El<HTMLParagraphElement, M>>,
  mounting?: Script<El<HTMLParagraphElement, M>>,
  destruction?: Script<El<HTMLParagraphElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLParagraphElement, M>>): ReactiveTreeNode<El<HTMLParagraphElement, M>>

export function P<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLParagraphElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLParagraphElement, M>>,
  setupOrMode?: Script<El<HTMLParagraphElement, M>> | Mode,
  setup?: Script<El<HTMLParagraphElement, M>>,
  setupTask?: ScriptAsync<El<HTMLParagraphElement, M>>,
  creation?: Script<El<HTMLParagraphElement, M>>,
  creationTask?: ScriptAsync<El<HTMLParagraphElement, M>>,
  mounting?: Script<El<HTMLParagraphElement, M>>,
  destruction?: Script<El<HTMLParagraphElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLParagraphElement, M>>): ReactiveTreeNode<El<HTMLParagraphElement, M>> {
  //
  return describe(P.name, HtmlTags.p,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Param<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Param<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Param<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Param<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Param<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Param<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Param.name, HtmlTags.param,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Picture<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Picture<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Picture<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Picture<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Picture<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Picture<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Picture.name, HtmlTags.picture,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Pre<M = unknown>(
  setup: Script<El<HTMLPreElement, M>>): ReactiveTreeNode<El<HTMLPreElement, M>>

export function Pre<M = unknown>(
  key: string,
  setup: Script<El<HTMLPreElement, M>>): ReactiveTreeNode<El<HTMLPreElement, M>>

export function Pre<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLPreElement, M>>): ReactiveTreeNode<El<HTMLPreElement, M>>

export function Pre<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLPreElement, M>>): ReactiveTreeNode<El<HTMLPreElement, M>>

export function Pre<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLPreElement, M>>,
  setupTask?: ScriptAsync<El<HTMLPreElement, M>>,
  creation?: Script<El<HTMLPreElement, M>>,
  creationTask?: ScriptAsync<El<HTMLPreElement, M>>,
  mounting?: Script<El<HTMLPreElement, M>>,
  destruction?: Script<El<HTMLPreElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLPreElement, M>>): ReactiveTreeNode<El<HTMLPreElement, M>>

export function Pre<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLPreElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLPreElement, M>>,
  setupOrMode?: Script<El<HTMLPreElement, M>> | Mode,
  setup?: Script<El<HTMLPreElement, M>>,
  setupTask?: ScriptAsync<El<HTMLPreElement, M>>,
  creation?: Script<El<HTMLPreElement, M>>,
  creationTask?: ScriptAsync<El<HTMLPreElement, M>>,
  mounting?: Script<El<HTMLPreElement, M>>,
  destruction?: Script<El<HTMLPreElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLPreElement, M>>): ReactiveTreeNode<El<HTMLPreElement, M>> {
  //
  return describe(Pre.name, HtmlTags.pre,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Progress<M = unknown>(
  setup: Script<El<HTMLProgressElement, M>>): ReactiveTreeNode<El<HTMLProgressElement, M>>

export function Progress<M = unknown>(
  key: string,
  setup: Script<El<HTMLProgressElement, M>>): ReactiveTreeNode<El<HTMLProgressElement, M>>

export function Progress<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLProgressElement, M>>): ReactiveTreeNode<El<HTMLProgressElement, M>>

export function Progress<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLProgressElement, M>>): ReactiveTreeNode<El<HTMLProgressElement, M>>

export function Progress<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLProgressElement, M>>,
  setupTask?: ScriptAsync<El<HTMLProgressElement, M>>,
  creation?: Script<El<HTMLProgressElement, M>>,
  creationTask?: ScriptAsync<El<HTMLProgressElement, M>>,
  mounting?: Script<El<HTMLProgressElement, M>>,
  destruction?: Script<El<HTMLProgressElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLProgressElement, M>>): ReactiveTreeNode<El<HTMLProgressElement, M>>

export function Progress<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLProgressElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLProgressElement, M>>,
  setupOrMode?: Script<El<HTMLProgressElement, M>> | Mode,
  setup?: Script<El<HTMLProgressElement, M>>,
  setupTask?: ScriptAsync<El<HTMLProgressElement, M>>,
  creation?: Script<El<HTMLProgressElement, M>>,
  creationTask?: ScriptAsync<El<HTMLProgressElement, M>>,
  mounting?: Script<El<HTMLProgressElement, M>>,
  destruction?: Script<El<HTMLProgressElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLProgressElement, M>>): ReactiveTreeNode<El<HTMLProgressElement, M>> {
  //
  return describe(Progress.name, HtmlTags.progress,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Q<M = unknown>(
  setup: Script<El<HTMLQuoteElement, M>>): ReactiveTreeNode<El<HTMLQuoteElement, M>>

export function Q<M = unknown>(
  key: string,
  setup: Script<El<HTMLQuoteElement, M>>): ReactiveTreeNode<El<HTMLQuoteElement, M>>

export function Q<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLQuoteElement, M>>): ReactiveTreeNode<El<HTMLQuoteElement, M>>

export function Q<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLQuoteElement, M>>): ReactiveTreeNode<El<HTMLQuoteElement, M>>

export function Q<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLQuoteElement, M>>,
  setupTask?: ScriptAsync<El<HTMLQuoteElement, M>>,
  creation?: Script<El<HTMLQuoteElement, M>>,
  creationTask?: ScriptAsync<El<HTMLQuoteElement, M>>,
  mounting?: Script<El<HTMLQuoteElement, M>>,
  destruction?: Script<El<HTMLQuoteElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLQuoteElement, M>>): ReactiveTreeNode<El<HTMLQuoteElement, M>>

export function Q<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLQuoteElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLQuoteElement, M>>,
  setupOrMode?: Script<El<HTMLQuoteElement, M>> | Mode,
  setup?: Script<El<HTMLQuoteElement, M>>,
  setupTask?: ScriptAsync<El<HTMLQuoteElement, M>>,
  creation?: Script<El<HTMLQuoteElement, M>>,
  creationTask?: ScriptAsync<El<HTMLQuoteElement, M>>,
  mounting?: Script<El<HTMLQuoteElement, M>>,
  destruction?: Script<El<HTMLQuoteElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLQuoteElement, M>>): ReactiveTreeNode<El<HTMLQuoteElement, M>> {
  //
  return describe(Q.name, HtmlTags.q,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function RP<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function RP<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function RP<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function RP<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function RP<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function RP<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(RP.name, HtmlTags.rp,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function RT<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function RT<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function RT<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function RT<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function RT<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function RT<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(RT.name, HtmlTags.rt,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Ruby<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Ruby<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Ruby<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Ruby<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Ruby<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Ruby<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Ruby.name, HtmlTags.ruby,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function S<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function S<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function S<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function S<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function S<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function S<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(S.name, HtmlTags.s,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Samp<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Samp<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Samp<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Samp<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Samp<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Samp<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Samp.name, HtmlTags.samp,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Script<M = unknown>(
  setup: Script<El<HTMLScriptElement, M>>): ReactiveTreeNode<El<HTMLScriptElement, M>>

export function Script<M = unknown>(
  key: string,
  setup: Script<El<HTMLScriptElement, M>>): ReactiveTreeNode<El<HTMLScriptElement, M>>

export function Script<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLScriptElement, M>>): ReactiveTreeNode<El<HTMLScriptElement, M>>

export function Script<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLScriptElement, M>>): ReactiveTreeNode<El<HTMLScriptElement, M>>

export function Script<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLScriptElement, M>>,
  setupTask?: ScriptAsync<El<HTMLScriptElement, M>>,
  creation?: Script<El<HTMLScriptElement, M>>,
  creationTask?: ScriptAsync<El<HTMLScriptElement, M>>,
  mounting?: Script<El<HTMLScriptElement, M>>,
  destruction?: Script<El<HTMLScriptElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLScriptElement, M>>): ReactiveTreeNode<El<HTMLScriptElement, M>>

export function Script<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLScriptElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLScriptElement, M>>,
  setupOrMode?: Script<El<HTMLScriptElement, M>> | Mode,
  setup?: Script<El<HTMLScriptElement, M>>,
  setupTask?: ScriptAsync<El<HTMLScriptElement, M>>,
  creation?: Script<El<HTMLScriptElement, M>>,
  creationTask?: ScriptAsync<El<HTMLScriptElement, M>>,
  mounting?: Script<El<HTMLScriptElement, M>>,
  destruction?: Script<El<HTMLScriptElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLScriptElement, M>>): ReactiveTreeNode<El<HTMLScriptElement, M>> {
  //
  return describe(Script.name, HtmlTags.script,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Section<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Section<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Section<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Section<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Section<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Section<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Section.name, HtmlTags.section,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Select<M = unknown>(
  setup: Script<El<HTMLSelectElement, M>>): ReactiveTreeNode<El<HTMLSelectElement, M>>

export function Select<M = unknown>(
  key: string,
  setup: Script<El<HTMLSelectElement, M>>): ReactiveTreeNode<El<HTMLSelectElement, M>>

export function Select<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLSelectElement, M>>): ReactiveTreeNode<El<HTMLSelectElement, M>>

export function Select<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLSelectElement, M>>): ReactiveTreeNode<El<HTMLSelectElement, M>>

export function Select<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLSelectElement, M>>,
  setupTask?: ScriptAsync<El<HTMLSelectElement, M>>,
  creation?: Script<El<HTMLSelectElement, M>>,
  creationTask?: ScriptAsync<El<HTMLSelectElement, M>>,
  mounting?: Script<El<HTMLSelectElement, M>>,
  destruction?: Script<El<HTMLSelectElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLSelectElement, M>>): ReactiveTreeNode<El<HTMLSelectElement, M>>

export function Select<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLSelectElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLSelectElement, M>>,
  setupOrMode?: Script<El<HTMLSelectElement, M>> | Mode,
  setup?: Script<El<HTMLSelectElement, M>>,
  setupTask?: ScriptAsync<El<HTMLSelectElement, M>>,
  creation?: Script<El<HTMLSelectElement, M>>,
  creationTask?: ScriptAsync<El<HTMLSelectElement, M>>,
  mounting?: Script<El<HTMLSelectElement, M>>,
  destruction?: Script<El<HTMLSelectElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLSelectElement, M>>): ReactiveTreeNode<El<HTMLSelectElement, M>> {
  //
  return describe(Select.name, HtmlTags.select,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Small<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Small<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Small<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Small<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Small<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Small<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Small.name, HtmlTags.small,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Source<M = unknown>(
  setup: Script<El<HTMLSourceElement, M>>): ReactiveTreeNode<El<HTMLSourceElement, M>>

export function Source<M = unknown>(
  key: string,
  setup: Script<El<HTMLSourceElement, M>>): ReactiveTreeNode<El<HTMLSourceElement, M>>

export function Source<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLSourceElement, M>>): ReactiveTreeNode<El<HTMLSourceElement, M>>

export function Source<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLSourceElement, M>>): ReactiveTreeNode<El<HTMLSourceElement, M>>

export function Source<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLSourceElement, M>>,
  setupTask?: ScriptAsync<El<HTMLSourceElement, M>>,
  creation?: Script<El<HTMLSourceElement, M>>,
  creationTask?: ScriptAsync<El<HTMLSourceElement, M>>,
  mounting?: Script<El<HTMLSourceElement, M>>,
  destruction?: Script<El<HTMLSourceElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLSourceElement, M>>): ReactiveTreeNode<El<HTMLSourceElement, M>>

export function Source<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLSourceElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLSourceElement, M>>,
  setupOrMode?: Script<El<HTMLSourceElement, M>> | Mode,
  setup?: Script<El<HTMLSourceElement, M>>,
  setupTask?: ScriptAsync<El<HTMLSourceElement, M>>,
  creation?: Script<El<HTMLSourceElement, M>>,
  creationTask?: ScriptAsync<El<HTMLSourceElement, M>>,
  mounting?: Script<El<HTMLSourceElement, M>>,
  destruction?: Script<El<HTMLSourceElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLSourceElement, M>>): ReactiveTreeNode<El<HTMLSourceElement, M>> {
  //
  return describe(Source.name, HtmlTags.source,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Span<M = unknown>(
  setup: Script<El<HTMLSpanElement, M>>): ReactiveTreeNode<El<HTMLSpanElement, M>>

export function Span<M = unknown>(
  key: string,
  setup: Script<El<HTMLSpanElement, M>>): ReactiveTreeNode<El<HTMLSpanElement, M>>

export function Span<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLSpanElement, M>>): ReactiveTreeNode<El<HTMLSpanElement, M>>

export function Span<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLSpanElement, M>>): ReactiveTreeNode<El<HTMLSpanElement, M>>

export function Span<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLSpanElement, M>>,
  setupTask?: ScriptAsync<El<HTMLSpanElement, M>>,
  creation?: Script<El<HTMLSpanElement, M>>,
  creationTask?: ScriptAsync<El<HTMLSpanElement, M>>,
  mounting?: Script<El<HTMLSpanElement, M>>,
  destruction?: Script<El<HTMLSpanElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLSpanElement, M>>): ReactiveTreeNode<El<HTMLSpanElement, M>>

export function Span<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLSpanElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLSpanElement, M>>,
  setupOrMode?: Script<El<HTMLSpanElement, M>> | Mode,
  setup?: Script<El<HTMLSpanElement, M>>,
  setupTask?: ScriptAsync<El<HTMLSpanElement, M>>,
  creation?: Script<El<HTMLSpanElement, M>>,
  creationTask?: ScriptAsync<El<HTMLSpanElement, M>>,
  mounting?: Script<El<HTMLSpanElement, M>>,
  destruction?: Script<El<HTMLSpanElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLSpanElement, M>>): ReactiveTreeNode<El<HTMLSpanElement, M>> {
  //
  return describe(Span.name, HtmlTags.span,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Strong<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Strong<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Strong<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Strong<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Strong<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Strong<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Strong.name, HtmlTags.strong,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Style<M = unknown>(
  setup: Script<El<HTMLStyleElement, M>>): ReactiveTreeNode<El<HTMLStyleElement, M>>

export function Style<M = unknown>(
  key: string,
  setup: Script<El<HTMLStyleElement, M>>): ReactiveTreeNode<El<HTMLStyleElement, M>>

export function Style<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLStyleElement, M>>): ReactiveTreeNode<El<HTMLStyleElement, M>>

export function Style<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLStyleElement, M>>): ReactiveTreeNode<El<HTMLStyleElement, M>>

export function Style<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLStyleElement, M>>,
  setupTask?: ScriptAsync<El<HTMLStyleElement, M>>,
  creation?: Script<El<HTMLStyleElement, M>>,
  creationTask?: ScriptAsync<El<HTMLStyleElement, M>>,
  mounting?: Script<El<HTMLStyleElement, M>>,
  destruction?: Script<El<HTMLStyleElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLStyleElement, M>>): ReactiveTreeNode<El<HTMLStyleElement, M>>

export function Style<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLStyleElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLStyleElement, M>>,
  setupOrMode?: Script<El<HTMLStyleElement, M>> | Mode,
  setup?: Script<El<HTMLStyleElement, M>>,
  setupTask?: ScriptAsync<El<HTMLStyleElement, M>>,
  creation?: Script<El<HTMLStyleElement, M>>,
  creationTask?: ScriptAsync<El<HTMLStyleElement, M>>,
  mounting?: Script<El<HTMLStyleElement, M>>,
  destruction?: Script<El<HTMLStyleElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLStyleElement, M>>): ReactiveTreeNode<El<HTMLStyleElement, M>> {
  //
  return describe(Style.name, HtmlTags.style,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Sub<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Sub<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Sub<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Sub<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Sub<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Sub<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Sub.name, HtmlTags.sub,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Summary<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Summary<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Summary<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Summary<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Summary<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Summary<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Summary.name, HtmlTags.summary,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Sup<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Sup<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Sup<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Sup<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Sup<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Sup<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Sup.name, HtmlTags.sup,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Tbl<M = unknown>(
  setup: Script<El<HTMLTableElement, M>>): ReactiveTreeNode<El<HTMLTableElement, M>>

export function Tbl<M = unknown>(
  key: string,
  setup: Script<El<HTMLTableElement, M>>): ReactiveTreeNode<El<HTMLTableElement, M>>

export function Tbl<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTableElement, M>>): ReactiveTreeNode<El<HTMLTableElement, M>>

export function Tbl<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLTableElement, M>>): ReactiveTreeNode<El<HTMLTableElement, M>>

export function Tbl<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLTableElement, M>>,
  setupTask?: ScriptAsync<El<HTMLTableElement, M>>,
  creation?: Script<El<HTMLTableElement, M>>,
  creationTask?: ScriptAsync<El<HTMLTableElement, M>>,
  mounting?: Script<El<HTMLTableElement, M>>,
  destruction?: Script<El<HTMLTableElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableElement, M>>): ReactiveTreeNode<El<HTMLTableElement, M>>

export function Tbl<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLTableElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTableElement, M>>,
  setupOrMode?: Script<El<HTMLTableElement, M>> | Mode,
  setup?: Script<El<HTMLTableElement, M>>,
  setupTask?: ScriptAsync<El<HTMLTableElement, M>>,
  creation?: Script<El<HTMLTableElement, M>>,
  creationTask?: ScriptAsync<El<HTMLTableElement, M>>,
  mounting?: Script<El<HTMLTableElement, M>>,
  destruction?: Script<El<HTMLTableElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableElement, M>>): ReactiveTreeNode<El<HTMLTableElement, M>> {
  //
  return describe(Tbl.name, HtmlTags.table,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Template<M = unknown>(
  setup: Script<El<HTMLTemplateElement, M>>): ReactiveTreeNode<El<HTMLTemplateElement, M>>

export function Template<M = unknown>(
  key: string,
  setup: Script<El<HTMLTemplateElement, M>>): ReactiveTreeNode<El<HTMLTemplateElement, M>>

export function Template<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTemplateElement, M>>): ReactiveTreeNode<El<HTMLTemplateElement, M>>

export function Template<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLTemplateElement, M>>): ReactiveTreeNode<El<HTMLTemplateElement, M>>

export function Template<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLTemplateElement, M>>,
  setupTask?: ScriptAsync<El<HTMLTemplateElement, M>>,
  creation?: Script<El<HTMLTemplateElement, M>>,
  creationTask?: ScriptAsync<El<HTMLTemplateElement, M>>,
  mounting?: Script<El<HTMLTemplateElement, M>>,
  destruction?: Script<El<HTMLTemplateElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTemplateElement, M>>): ReactiveTreeNode<El<HTMLTemplateElement, M>>

export function Template<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLTemplateElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTemplateElement, M>>,
  setupOrMode?: Script<El<HTMLTemplateElement, M>> | Mode,
  setup?: Script<El<HTMLTemplateElement, M>>,
  setupTask?: ScriptAsync<El<HTMLTemplateElement, M>>,
  creation?: Script<El<HTMLTemplateElement, M>>,
  creationTask?: ScriptAsync<El<HTMLTemplateElement, M>>,
  mounting?: Script<El<HTMLTemplateElement, M>>,
  destruction?: Script<El<HTMLTemplateElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTemplateElement, M>>): ReactiveTreeNode<El<HTMLTemplateElement, M>> {
  //
  return describe(Template.name, HtmlTags.template,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function TBody<M = unknown>(
  setup: Script<El<HTMLTableSectionElement, M>>): ReactiveTreeNode<El<HTMLTableSectionElement, M>>

export function TBody<M = unknown>(
  key: string,
  setup: Script<El<HTMLTableSectionElement, M>>): ReactiveTreeNode<El<HTMLTableSectionElement, M>>

export function TBody<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTableSectionElement, M>>): ReactiveTreeNode<El<HTMLTableSectionElement, M>>

export function TBody<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M>>): ReactiveTreeNode<El<HTMLTableSectionElement, M>>

export function TBody<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLTableSectionElement, M>>,
  setupTask?: ScriptAsync<El<HTMLTableSectionElement, M>>,
  creation?: Script<El<HTMLTableSectionElement, M>>,
  creationTask?: ScriptAsync<El<HTMLTableSectionElement, M>>,
  mounting?: Script<El<HTMLTableSectionElement, M>>,
  destruction?: Script<El<HTMLTableSectionElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M>>): ReactiveTreeNode<El<HTMLTableSectionElement, M>>

export function TBody<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLTableSectionElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M>>,
  setupOrMode?: Script<El<HTMLTableSectionElement, M>> | Mode,
  setup?: Script<El<HTMLTableSectionElement, M>>,
  setupTask?: ScriptAsync<El<HTMLTableSectionElement, M>>,
  creation?: Script<El<HTMLTableSectionElement, M>>,
  creationTask?: ScriptAsync<El<HTMLTableSectionElement, M>>,
  mounting?: Script<El<HTMLTableSectionElement, M>>,
  destruction?: Script<El<HTMLTableSectionElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M>>): ReactiveTreeNode<El<HTMLTableSectionElement, M>> {
  //
  return describe(TBody.name, HtmlTags.tbody,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function TD<M = unknown>(
  setup: Script<El<HTMLTableCellElement, M>>): ReactiveTreeNode<El<HTMLTableCellElement, M>>

export function TD<M = unknown>(
  key: string,
  setup: Script<El<HTMLTableCellElement, M>>): ReactiveTreeNode<El<HTMLTableCellElement, M>>

export function TD<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTableCellElement, M>>): ReactiveTreeNode<El<HTMLTableCellElement, M>>

export function TD<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLTableCellElement, M>>): ReactiveTreeNode<El<HTMLTableCellElement, M>>

export function TD<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLTableCellElement, M>>,
  setupTask?: ScriptAsync<El<HTMLTableCellElement, M>>,
  creation?: Script<El<HTMLTableCellElement, M>>,
  creationTask?: ScriptAsync<El<HTMLTableCellElement, M>>,
  mounting?: Script<El<HTMLTableCellElement, M>>,
  destruction?: Script<El<HTMLTableCellElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableCellElement, M>>): ReactiveTreeNode<El<HTMLTableCellElement, M>>

export function TD<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLTableCellElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTableCellElement, M>>,
  setupOrMode?: Script<El<HTMLTableCellElement, M>> | Mode,
  setup?: Script<El<HTMLTableCellElement, M>>,
  setupTask?: ScriptAsync<El<HTMLTableCellElement, M>>,
  creation?: Script<El<HTMLTableCellElement, M>>,
  creationTask?: ScriptAsync<El<HTMLTableCellElement, M>>,
  mounting?: Script<El<HTMLTableCellElement, M>>,
  destruction?: Script<El<HTMLTableCellElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableCellElement, M>>): ReactiveTreeNode<El<HTMLTableCellElement, M>> {
  //
  return describe(TD.name, HtmlTags.td,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function TextArea<M = unknown>(
  setup: Script<El<HTMLTextAreaElement, M>>): ReactiveTreeNode<El<HTMLTextAreaElement, M>>

export function TextArea<M = unknown>(
  key: string,
  setup: Script<El<HTMLTextAreaElement, M>>): ReactiveTreeNode<El<HTMLTextAreaElement, M>>

export function TextArea<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTextAreaElement, M>>): ReactiveTreeNode<El<HTMLTextAreaElement, M>>

export function TextArea<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLTextAreaElement, M>>): ReactiveTreeNode<El<HTMLTextAreaElement, M>>

export function TextArea<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLTextAreaElement, M>>,
  setupTask?: ScriptAsync<El<HTMLTextAreaElement, M>>,
  creation?: Script<El<HTMLTextAreaElement, M>>,
  creationTask?: ScriptAsync<El<HTMLTextAreaElement, M>>,
  mounting?: Script<El<HTMLTextAreaElement, M>>,
  destruction?: Script<El<HTMLTextAreaElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTextAreaElement, M>>): ReactiveTreeNode<El<HTMLTextAreaElement, M>>

export function TextArea<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLTextAreaElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTextAreaElement, M>>,
  setupOrMode?: Script<El<HTMLTextAreaElement, M>> | Mode,
  setup?: Script<El<HTMLTextAreaElement, M>>,
  setupTask?: ScriptAsync<El<HTMLTextAreaElement, M>>,
  creation?: Script<El<HTMLTextAreaElement, M>>,
  creationTask?: ScriptAsync<El<HTMLTextAreaElement, M>>,
  mounting?: Script<El<HTMLTextAreaElement, M>>,
  destruction?: Script<El<HTMLTextAreaElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTextAreaElement, M>>): ReactiveTreeNode<El<HTMLTextAreaElement, M>> {
  //
  return describe(TextArea.name, HtmlTags.textarea,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function TFoot<M = unknown>(
  setup: Script<El<HTMLTableSectionElement, M>>): ReactiveTreeNode<El<HTMLTableSectionElement, M>>

export function TFoot<M = unknown>(
  key: string,
  setup: Script<El<HTMLTableSectionElement, M>>): ReactiveTreeNode<El<HTMLTableSectionElement, M>>

export function TFoot<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTableSectionElement, M>>): ReactiveTreeNode<El<HTMLTableSectionElement, M>>

export function TFoot<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M>>): ReactiveTreeNode<El<HTMLTableSectionElement, M>>

export function TFoot<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLTableSectionElement, M>>,
  setupTask?: ScriptAsync<El<HTMLTableSectionElement, M>>,
  creation?: Script<El<HTMLTableSectionElement, M>>,
  creationTask?: ScriptAsync<El<HTMLTableSectionElement, M>>,
  mounting?: Script<El<HTMLTableSectionElement, M>>,
  destruction?: Script<El<HTMLTableSectionElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M>>): ReactiveTreeNode<El<HTMLTableSectionElement, M>>

export function TFoot<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLTableSectionElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M>>,
  setupOrMode?: Script<El<HTMLTableSectionElement, M>> | Mode,
  setup?: Script<El<HTMLTableSectionElement, M>>,
  setupTask?: ScriptAsync<El<HTMLTableSectionElement, M>>,
  creation?: Script<El<HTMLTableSectionElement, M>>,
  creationTask?: ScriptAsync<El<HTMLTableSectionElement, M>>,
  mounting?: Script<El<HTMLTableSectionElement, M>>,
  destruction?: Script<El<HTMLTableSectionElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M>>): ReactiveTreeNode<El<HTMLTableSectionElement, M>> {
  //
  return describe(TFoot.name, HtmlTags.tfoot,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function TH<M = unknown>(
  setup: Script<El<HTMLTableCellElement, M>>): ReactiveTreeNode<El<HTMLTableCellElement, M>>

export function TH<M = unknown>(
  key: string,
  setup: Script<El<HTMLTableCellElement, M>>): ReactiveTreeNode<El<HTMLTableCellElement, M>>

export function TH<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTableCellElement, M>>): ReactiveTreeNode<El<HTMLTableCellElement, M>>

export function TH<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLTableCellElement, M>>): ReactiveTreeNode<El<HTMLTableCellElement, M>>

export function TH<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLTableCellElement, M>>,
  setupTask?: ScriptAsync<El<HTMLTableCellElement, M>>,
  creation?: Script<El<HTMLTableCellElement, M>>,
  creationTask?: ScriptAsync<El<HTMLTableCellElement, M>>,
  mounting?: Script<El<HTMLTableCellElement, M>>,
  destruction?: Script<El<HTMLTableCellElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableCellElement, M>>): ReactiveTreeNode<El<HTMLTableCellElement, M>>

export function TH<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLTableCellElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTableCellElement, M>>,
  setupOrMode?: Script<El<HTMLTableCellElement, M>> | Mode,
  setup?: Script<El<HTMLTableCellElement, M>>,
  setupTask?: ScriptAsync<El<HTMLTableCellElement, M>>,
  creation?: Script<El<HTMLTableCellElement, M>>,
  creationTask?: ScriptAsync<El<HTMLTableCellElement, M>>,
  mounting?: Script<El<HTMLTableCellElement, M>>,
  destruction?: Script<El<HTMLTableCellElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableCellElement, M>>): ReactiveTreeNode<El<HTMLTableCellElement, M>> {
  //
  return describe(TH.name, HtmlTags.th,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function THead<M = unknown>(
  setup: Script<El<HTMLTableSectionElement, M>>): ReactiveTreeNode<El<HTMLTableSectionElement, M>>

export function THead<M = unknown>(
  key: string,
  setup: Script<El<HTMLTableSectionElement, M>>): ReactiveTreeNode<El<HTMLTableSectionElement, M>>

export function THead<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTableSectionElement, M>>): ReactiveTreeNode<El<HTMLTableSectionElement, M>>

export function THead<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M>>): ReactiveTreeNode<El<HTMLTableSectionElement, M>>

export function THead<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLTableSectionElement, M>>,
  setupTask?: ScriptAsync<El<HTMLTableSectionElement, M>>,
  creation?: Script<El<HTMLTableSectionElement, M>>,
  creationTask?: ScriptAsync<El<HTMLTableSectionElement, M>>,
  mounting?: Script<El<HTMLTableSectionElement, M>>,
  destruction?: Script<El<HTMLTableSectionElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M>>): ReactiveTreeNode<El<HTMLTableSectionElement, M>>

export function THead<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLTableSectionElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M>>,
  setupOrMode?: Script<El<HTMLTableSectionElement, M>> | Mode,
  setup?: Script<El<HTMLTableSectionElement, M>>,
  setupTask?: ScriptAsync<El<HTMLTableSectionElement, M>>,
  creation?: Script<El<HTMLTableSectionElement, M>>,
  creationTask?: ScriptAsync<El<HTMLTableSectionElement, M>>,
  mounting?: Script<El<HTMLTableSectionElement, M>>,
  destruction?: Script<El<HTMLTableSectionElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableSectionElement, M>>): ReactiveTreeNode<El<HTMLTableSectionElement, M>> {
  //
  return describe(THead.name, HtmlTags.thead,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Time<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Time<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Time<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Time<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Time<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Time<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Time.name, HtmlTags.time,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Title<M = unknown>(
  setup: Script<El<HTMLTitleElement, M>>): ReactiveTreeNode<El<HTMLTitleElement, M>>

export function Title<M = unknown>(
  key: string,
  setup: Script<El<HTMLTitleElement, M>>): ReactiveTreeNode<El<HTMLTitleElement, M>>

export function Title<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTitleElement, M>>): ReactiveTreeNode<El<HTMLTitleElement, M>>

export function Title<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLTitleElement, M>>): ReactiveTreeNode<El<HTMLTitleElement, M>>

export function Title<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLTitleElement, M>>,
  setupTask?: ScriptAsync<El<HTMLTitleElement, M>>,
  creation?: Script<El<HTMLTitleElement, M>>,
  creationTask?: ScriptAsync<El<HTMLTitleElement, M>>,
  mounting?: Script<El<HTMLTitleElement, M>>,
  destruction?: Script<El<HTMLTitleElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTitleElement, M>>): ReactiveTreeNode<El<HTMLTitleElement, M>>

export function Title<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLTitleElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTitleElement, M>>,
  setupOrMode?: Script<El<HTMLTitleElement, M>> | Mode,
  setup?: Script<El<HTMLTitleElement, M>>,
  setupTask?: ScriptAsync<El<HTMLTitleElement, M>>,
  creation?: Script<El<HTMLTitleElement, M>>,
  creationTask?: ScriptAsync<El<HTMLTitleElement, M>>,
  mounting?: Script<El<HTMLTitleElement, M>>,
  destruction?: Script<El<HTMLTitleElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTitleElement, M>>): ReactiveTreeNode<El<HTMLTitleElement, M>> {
  //
  return describe(Title.name, HtmlTags.title,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function TR<M = unknown>(
  setup: Script<El<HTMLTableRowElement, M>>): ReactiveTreeNode<El<HTMLTableRowElement, M>>

export function TR<M = unknown>(
  key: string,
  setup: Script<El<HTMLTableRowElement, M>>): ReactiveTreeNode<El<HTMLTableRowElement, M>>

export function TR<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTableRowElement, M>>): ReactiveTreeNode<El<HTMLTableRowElement, M>>

export function TR<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLTableRowElement, M>>): ReactiveTreeNode<El<HTMLTableRowElement, M>>

export function TR<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLTableRowElement, M>>,
  setupTask?: ScriptAsync<El<HTMLTableRowElement, M>>,
  creation?: Script<El<HTMLTableRowElement, M>>,
  creationTask?: ScriptAsync<El<HTMLTableRowElement, M>>,
  mounting?: Script<El<HTMLTableRowElement, M>>,
  destruction?: Script<El<HTMLTableRowElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableRowElement, M>>): ReactiveTreeNode<El<HTMLTableRowElement, M>>

export function TR<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLTableRowElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTableRowElement, M>>,
  setupOrMode?: Script<El<HTMLTableRowElement, M>> | Mode,
  setup?: Script<El<HTMLTableRowElement, M>>,
  setupTask?: ScriptAsync<El<HTMLTableRowElement, M>>,
  creation?: Script<El<HTMLTableRowElement, M>>,
  creationTask?: ScriptAsync<El<HTMLTableRowElement, M>>,
  mounting?: Script<El<HTMLTableRowElement, M>>,
  destruction?: Script<El<HTMLTableRowElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTableRowElement, M>>): ReactiveTreeNode<El<HTMLTableRowElement, M>> {
  //
  return describe(TR.name, HtmlTags.tr,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Track<M = unknown>(
  setup: Script<El<HTMLTrackElement, M>>): ReactiveTreeNode<El<HTMLTrackElement, M>>

export function Track<M = unknown>(
  key: string,
  setup: Script<El<HTMLTrackElement, M>>): ReactiveTreeNode<El<HTMLTrackElement, M>>

export function Track<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLTrackElement, M>>): ReactiveTreeNode<El<HTMLTrackElement, M>>

export function Track<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLTrackElement, M>>): ReactiveTreeNode<El<HTMLTrackElement, M>>

export function Track<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLTrackElement, M>>,
  setupTask?: ScriptAsync<El<HTMLTrackElement, M>>,
  creation?: Script<El<HTMLTrackElement, M>>,
  creationTask?: ScriptAsync<El<HTMLTrackElement, M>>,
  mounting?: Script<El<HTMLTrackElement, M>>,
  destruction?: Script<El<HTMLTrackElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTrackElement, M>>): ReactiveTreeNode<El<HTMLTrackElement, M>>

export function Track<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLTrackElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLTrackElement, M>>,
  setupOrMode?: Script<El<HTMLTrackElement, M>> | Mode,
  setup?: Script<El<HTMLTrackElement, M>>,
  setupTask?: ScriptAsync<El<HTMLTrackElement, M>>,
  creation?: Script<El<HTMLTrackElement, M>>,
  creationTask?: ScriptAsync<El<HTMLTrackElement, M>>,
  mounting?: Script<El<HTMLTrackElement, M>>,
  destruction?: Script<El<HTMLTrackElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLTrackElement, M>>): ReactiveTreeNode<El<HTMLTrackElement, M>> {
  //
  return describe(Track.name, HtmlTags.track,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function U<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function U<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function U<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function U<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function U<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function U<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(U.name, HtmlTags.u,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function UL<M = unknown>(
  setup: Script<El<HTMLUListElement, M>>): ReactiveTreeNode<El<HTMLUListElement, M>>

export function UL<M = unknown>(
  key: string,
  setup: Script<El<HTMLUListElement, M>>): ReactiveTreeNode<El<HTMLUListElement, M>>

export function UL<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLUListElement, M>>): ReactiveTreeNode<El<HTMLUListElement, M>>

export function UL<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLUListElement, M>>): ReactiveTreeNode<El<HTMLUListElement, M>>

export function UL<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLUListElement, M>>,
  setupTask?: ScriptAsync<El<HTMLUListElement, M>>,
  creation?: Script<El<HTMLUListElement, M>>,
  creationTask?: ScriptAsync<El<HTMLUListElement, M>>,
  mounting?: Script<El<HTMLUListElement, M>>,
  destruction?: Script<El<HTMLUListElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLUListElement, M>>): ReactiveTreeNode<El<HTMLUListElement, M>>

export function UL<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLUListElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLUListElement, M>>,
  setupOrMode?: Script<El<HTMLUListElement, M>> | Mode,
  setup?: Script<El<HTMLUListElement, M>>,
  setupTask?: ScriptAsync<El<HTMLUListElement, M>>,
  creation?: Script<El<HTMLUListElement, M>>,
  creationTask?: ScriptAsync<El<HTMLUListElement, M>>,
  mounting?: Script<El<HTMLUListElement, M>>,
  destruction?: Script<El<HTMLUListElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLUListElement, M>>): ReactiveTreeNode<El<HTMLUListElement, M>> {
  //
  return describe(UL.name, HtmlTags.ul,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Var<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Var<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Var<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Var<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Var<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Var<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
  //
  return describe(Var.name, HtmlTags.var,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Video<M = unknown>(
  setup: Script<El<HTMLVideoElement, M>>): ReactiveTreeNode<El<HTMLVideoElement, M>>

export function Video<M = unknown>(
  key: string,
  setup: Script<El<HTMLVideoElement, M>>): ReactiveTreeNode<El<HTMLVideoElement, M>>

export function Video<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLVideoElement, M>>): ReactiveTreeNode<El<HTMLVideoElement, M>>

export function Video<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLVideoElement, M>>): ReactiveTreeNode<El<HTMLVideoElement, M>>

export function Video<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLVideoElement, M>>,
  setupTask?: ScriptAsync<El<HTMLVideoElement, M>>,
  creation?: Script<El<HTMLVideoElement, M>>,
  creationTask?: ScriptAsync<El<HTMLVideoElement, M>>,
  mounting?: Script<El<HTMLVideoElement, M>>,
  destruction?: Script<El<HTMLVideoElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLVideoElement, M>>): ReactiveTreeNode<El<HTMLVideoElement, M>>

export function Video<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLVideoElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLVideoElement, M>>,
  setupOrMode?: Script<El<HTMLVideoElement, M>> | Mode,
  setup?: Script<El<HTMLVideoElement, M>>,
  setupTask?: ScriptAsync<El<HTMLVideoElement, M>>,
  creation?: Script<El<HTMLVideoElement, M>>,
  creationTask?: ScriptAsync<El<HTMLVideoElement, M>>,
  mounting?: Script<El<HTMLVideoElement, M>>,
  destruction?: Script<El<HTMLVideoElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLVideoElement, M>>): ReactiveTreeNode<El<HTMLVideoElement, M>> {
  //
  return describe(Video.name, HtmlTags.video,
    setupOrKeyOrModeDescription, setupOrMode, setup, setupTask,
    creation, creationTask, mounting, destruction, signalArgs, unmounted, basis)
}

export function Wbr<M = unknown>(
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Wbr<M = unknown>(
  key: string,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Wbr<M = unknown>(
  mode: Mode,
  setup: Script<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Wbr<M = unknown>(
  description: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Wbr<M = unknown>(
  key?: string,
  mode?: Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>>

export function Wbr<M = unknown>(
  setupOrKeyOrModeDescription?: Script<El<HTMLElement, M>> | string | Mode | ReactiveTreeNodeDesc<El<HTMLElement, M>>,
  setupOrMode?: Script<El<HTMLElement, M>> | Mode,
  setup?: Script<El<HTMLElement, M>>,
  setupTask?: ScriptAsync<El<HTMLElement, M>>,
  creation?: Script<El<HTMLElement, M>>,
  creationTask?: ScriptAsync<El<HTMLElement, M>>,
  mounting?: Script<El<HTMLElement, M>>,
  destruction?: Script<El<HTMLElement, M>>,
  signalArgs?: unknown,
  unmounted?: boolean,
  basis?: ReactiveTreeNodeDesc<El<HTMLElement, M>>): ReactiveTreeNode<El<HTMLElement, M>> {
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
