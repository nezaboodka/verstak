// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2024 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { MemberOptions, MergeListReader, MergedItem } from "reactronic"

// Delegates

export type Delegate<T> = (element: T, base: () => void) => void
// export type AsyncDelegate<T = unknown, M = unknown> = (element: El<T, M, Promise<void>>) => Promise<void>
export type SimpleDelegate<T = unknown> = (element: T) => void

// Enums

export const enum Priority {
  Realtime = 0,
  Normal = 1,
  Background = 2
}

export enum Mode {
  Default = 0,
  PinpointUpdate = 1,
  ManualMount = 2,
}

// RxNode

export abstract class RxNode<T = any> {
  abstract readonly key: string
  abstract readonly driver: RxNodeDriver<T>
  abstract readonly spec: Readonly<RxNodeSpec<T>>
  abstract readonly level: number
  abstract readonly owner: RxNode
  abstract readonly element: T
  abstract readonly host: RxNode
  abstract readonly children: MergeListReader<RxNode>
  abstract readonly slot: MergedItem<RxNode<T>> | undefined
  abstract readonly stamp: number
  abstract readonly outer: RxNode
  abstract readonly context: RxNodeCtx | undefined
  abstract readonly isInitialUpdate: boolean
  abstract priority?: Priority
  abstract childrenShuffling: boolean
  abstract strictOrder: boolean
  abstract has(mode: Mode): boolean
  abstract configureReactronic(options: Partial<MemberOptions>): MemberOptions
}

// RxNodeSpec

export interface RxNodeSpec<T = unknown> {
  preset?: RxNodeSpec<T>
  key?: string
  mode?: Mode
  triggers?: unknown
  specify?: Delegate<T>
  create?: Delegate<T>
  initialize?: Delegate<T>
  update?: Delegate<T>
  finalize?: Delegate<T>
}

// RxNodeCtx

export interface RxNodeCtx<T extends Object = Object> {
  value: T
}

// RxNodeDriver

export interface RxNodeDriver<T> {
  readonly name: string,
  readonly isSeparator: boolean,
  readonly predefine?: SimpleDelegate<T>

  create(node: RxNode<T>): T
  assign(element: T): void
  initialize(element: T): void
  mount(element: T): void
  update(element: T): void | Promise<void>
  finalize(element: T, isLeader: boolean): boolean
}
