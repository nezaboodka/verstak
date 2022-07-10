// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

export type GetKey<T = unknown> = (item: T) => string | undefined

export interface Merger<T> {
  // readonly getKey: GetKey<T>
  readonly strict: boolean
  readonly count: number
  readonly isMergeInProgress: boolean

  items(): Generator<MergeListItem<T>>
  lookup(key: string): MergeListItem<T> | undefined
  add(self: T, keepInAdded?: boolean): MergeListItem<T>
  remove(item: MergeListItem<T>, keepInRemoved?: boolean): void
  move(item: MergeListItem<T>, after: MergeListItem<T>): void

  beginMerge(): void
  claim(key: string): MergeListItem<T> | undefined
  endMerge(keepRemoved?: boolean): void

  addedItems(keep?: boolean): Generator<MergeListItem<T>>
  removedItems(keep?: boolean): Generator<MergeListItem<T>>
  isAdded(item: MergeListItem<T>): boolean
  isMoved(item: MergeListItem<T>): boolean
  isRemoved(item: MergeListItem<T>): boolean
  isCurrent(item: MergeListItem<T>): boolean
}

export interface MergeListItem<T> {
  readonly self: T
  // readonly next?: MergeListItem<T>
  readonly prev?: MergeListItem<T>
  aux?: MergeListItem<T>
}

export class MergeList<T> implements Merger<T> {
  readonly strict: boolean
  readonly getKey: GetKey<T>
  private map: Map<string | undefined, MergeListItemImpl<T>>
  private tag: number
  private lastNotFoundKey: string | undefined
  private strictNextItem?: MergeListItemImpl<T>
  private current: Sequence<T>
  private added: Sequence<T>
  private former: Sequence<T>

  constructor(strict: boolean, getKey: GetKey<T>) {
    this.strict = strict
    this.getKey = getKey
    this.map = new Map<string | undefined, MergeListItemImpl<T>>()
    this.tag = ~0
    this.lastNotFoundKey = undefined
    this.strictNextItem = undefined
    this.current = new Sequence<T>()
    this.added = new Sequence<T>()
    this.former = new Sequence<T>()
  }

  get count(): number {
    let result = this.current.count
    if (this.isMergeInProgress)
      result += this.former.count
    return result
  }

  get addedCount(): number {
    return this.added.count
  }

  get removedCount(): number {
    return this.former.count
  }

  get isMergeInProgress(): boolean {
    return this.tag > 0
  }

  *items(): Generator<MergeListItem<T>> {
    let x = this.current.first
    while (x !== undefined) {
      const next = x.next
      yield x
      x = next
    }
    if (this.isMergeInProgress) {
      x = this.former.first
      while (x !== undefined) {
        const next = x.next
        yield x
        x = next
      }
    }
  }

  lookup(key: string | undefined): MergeListItem<T> | undefined {
    let result: MergeListItem<T> | undefined = undefined
    if (key !== undefined && key !== this.lastNotFoundKey) {
      result = this.map.get(key)
      if (result) {
        if (this.getKey(result.self) !== key) {
          this.lastNotFoundKey = key
          result = undefined
        }
      }
      else
        this.lastNotFoundKey = key
    }
    return result
  }

  add(self: T, keepInAdded?: boolean): MergeListItem<T> {
    const key = this.getKey(self)
    if (this.lookup(key) !== undefined)
      throw new Error(`key is already in use: ${key}`)
    let tag = this.tag
    if (tag < 0) { // merge is not in progress
      tag = ~this.tag + 1
      this.tag = ~tag // one item merge cycle
    }
    const item = new MergeListItemImpl<T>(self, tag)
    this.map.set(key, item)
    this.lastNotFoundKey = undefined
    this.strictNextItem = undefined
    // Include into current sequence
    const last = this.current.last
    if (last) {
      item.prev = last
      this.current.last = last.next = item
    }
    else
      this.current.first = this.current.last = item
    this.current.count++
    if (keepInAdded === true) {
      // Include into added sequence
      const lastAdded = this.added.last
      if (lastAdded)
        this.added.last = lastAdded.aux = item
      else
        this.added.first = this.added.last = item
      this.added.count++
    }
    return item
  }

  remove(item: MergeListItem<T>, keepInRemoved?: boolean): void {
    if (!this.isRemoved(item)) {
      const x = item as MergeListItemImpl<T>
      x.tag--
      if (keepInRemoved === true) {
        throw new Error('not implemented')
        // move to this.firstOld
      }
    }
  }

  move(item: MergeListItem<T>, after: MergeListItem<T>): void {
    throw new Error('not implemented')
  }

  beginMerge(): void {
    if (this.isMergeInProgress)
      throw new Error('merge is not reentrant')
    this.tag = ~this.tag + 1
    this.strictNextItem = this.former.first = this.current.first
    this.former.count = this.current.count
    this.current.first = this.current.last = undefined
    this.current.count = 0
    this.added.first = this.added.last = undefined
    this.added.count = 0
  }

  endMerge(keepRemoved?: boolean): void {
    if (!this.isMergeInProgress)
      throw new Error('merge is ended already')
    this.tag = ~this.tag
    const currentCount = this.current.count
    if (currentCount > 0) {
      const getKey = this.getKey
      if (currentCount > this.former.count) { // it should be faster to delete vanished items
        const map = this.map
        for (const x of all(this.former.first))
          map.delete(getKey(x.self))
      }
      else { // it should be faster to recreate map using current items
        const map = this.map = new Map<string | undefined, MergeListItemImpl<T>>()
        for (const x of all(this.current.first))
          map.set(getKey(x.self), x)
      }
    }
    else // just create new empty map
      this.map = new Map<string | undefined, MergeListItemImpl<T>>()
    if (keepRemoved === undefined || !keepRemoved) {
      this.former.first = undefined
      this.former.count = 0
    }
  }

  claim(key: string): MergeListItem<T> | undefined {
    const tag = this.tag
    if (tag < 0)
      throw new Error('merge is not in progress')
    let item = this.strictNextItem
    if (key !== (item ? this.getKey(item.self) : undefined))
      item = this.lookup(key) as MergeListItemImpl<T> | undefined
    if (item) {
      if (item.tag === tag)
        throw new Error(`duplicate item: ${key}`)
      item.tag = tag
      if (this.strict && item !== this.strictNextItem)
        item.status = tag // IsAdded=false, IsMoved=true
      this.strictNextItem = item.next
      // Exclude from former sequence
      if (item.prev !== undefined)
        item.prev.next = item.next
      if (item.next !== undefined)
        item.next.prev = item.prev
      if (item === this.former.first)
        this.former.first = item.next
      this.former.count--
      // Include into current sequence
      const last = this.current.last
      item.prev = last
      item.next = undefined
      if (last)
        this.current.last = last.next = item
      else
        this.current.first = this.current.last = item
      this.current.count++
    }
    return item
  }

  *addedItems(keep?: boolean): Generator<MergeListItem<T>> {
    let x = this.added.first
    while (x !== undefined) {
      const next = x.aux
      if (!this.isRemoved(x))
        yield x
      x = next
    }
    if (keep === undefined || !keep) {
      this.added.first = this.added.last = undefined
      this.added.count = 0
    }
  }

  *removedItems(keep?: boolean): Generator<MergeListItem<T>> {
    const isMergeInProgress = this.isMergeInProgress
    if (!isMergeInProgress) {
      let x = this.former.first
      while (x !== undefined) {
        const next = x.next
        yield x
        x = next
      }
      if (!isMergeInProgress && (keep === undefined || !keep)) {
        this.former.first = undefined
        this.former.count = 0
      }
    }
  }

  isAdded(item: MergeListItem<T>): boolean {
    const t = item as MergeListItemImpl<T>
    let tag = this.tag
    if (tag < 0)
      tag = ~tag
    return t.status === ~tag && t.tag > 0
  }

  isMoved(item: MergeListItem<T>): boolean {
    const t = item as MergeListItemImpl<T>
    let tag = this.tag
    if (tag < 0)
      tag = ~tag
    return t.status === tag && t.tag > 0
  }

  isRemoved(item: MergeListItem<T>): boolean {
    const t = item as MergeListItemImpl<T>
    const tag = this.tag
    return tag > 0 ? t.tag < tag : t.tag < tag - 1
  }

  isCurrent(item: MergeListItem<T>): boolean {
    const t = item as MergeListItemImpl<T>
    return t.tag === this.tag
  }

  markAsMoved(item: MergeListItem<T>): void {
    const t = item as MergeListItemImpl<T>
    if (t.tag > 0) // if not removed, > is intentional
      t.status = t.tag
  }

  static createMergerItem<T>(self: T): MergeListItem<T> {
    return new MergeListItemImpl(self, 0)
  }
}

class MergeListItemImpl<T> implements MergeListItem<T> {
  readonly self: T
  tag: number
  status: number
  next?: MergeListItemImpl<T>
  prev?: MergeListItemImpl<T>
  aux?: MergeListItemImpl<T>

  constructor(self: T, tag: number) {
    this.self = self
    this.tag = tag
    this.status = ~tag // isAdded=true
    this.next = undefined
    this.prev = undefined
    this.aux = undefined
  }
}

class Sequence<T> {
  first?: MergeListItemImpl<T> = undefined
  last?: MergeListItemImpl<T> = undefined
  count: number = 0
}

function *all<T>(first: MergeListItemImpl<T> | undefined): Generator<MergeListItemImpl<T>> {
  while (first !== undefined) {
    yield first
    first = first.next
  }
}
