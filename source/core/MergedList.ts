// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

export type GetKey<T = unknown> = (item: T) => string | undefined

export interface Merged<T> {
  // readonly getKey: GetKey<T>
  readonly strict: boolean
  readonly count: number
  readonly addedCount: number
  readonly removedCount: number
  readonly isMergeInProgress: boolean

  lookup(key: string): MergedListItem<T> | undefined
  claim(key: string): MergedListItem<T> | undefined
  add(self: T, keepInAddedItems?: boolean): MergedListItem<T>
  remove(item: MergedListItem<T>, keepInRemovedItems?: boolean): void
  move(item: MergedListItem<T>, after: MergedListItem<T>): void
  beginMerge(): void
  endMerge(keepAddedAndRemovedItems?: boolean): void

  items(): Generator<MergedListItem<T>>
  addedItems(keep?: boolean): Generator<MergedListItem<T>>
  removedItems(keep?: boolean): Generator<MergedListItem<T>>
  isAdded(item: MergedListItem<T>): boolean
  isMoved(item: MergedListItem<T>): boolean
  isRemoved(item: MergedListItem<T>): boolean
  isCurrent(item: MergedListItem<T>): boolean
}

export interface MergedListItem<T> {
  readonly self: T
  // readonly next?: MergedListItem<T>
  readonly prev?: MergedListItem<T> // TODO: hide
  aux?: MergedListItem<T> // TODO: hide
}

export class MergedList<T> implements Merged<T> {
  readonly strict: boolean
  readonly getKey: GetKey<T>
  private map: Map<string | undefined, MergedListItemImpl<T>>
  private tag: number
  private current: ItemChain<T>
  private added: ItemChain<T>
  private former: ItemChain<T>
  private lastNotFoundKey: string | undefined
  private strictNextItem?: MergedListItemImpl<T>

  constructor(strict: boolean, getKey: GetKey<T>) {
    this.strict = strict
    this.getKey = getKey
    this.map = new Map<string | undefined, MergedListItemImpl<T>>()
    this.tag = ~0
    this.current = new ItemChain<T>()
    this.added = new ItemChain<T>()
    this.former = new ItemChain<T>()
    this.lastNotFoundKey = undefined
    this.strictNextItem = undefined
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

  lookup(key: string | undefined): MergedListItem<T> | undefined {
    let result: MergedListItem<T> | undefined = undefined
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

  claim(key: string): MergedListItem<T> | undefined {
    const tag = this.tag
    if (tag < 0)
      throw new Error('merge is not in progress')
    let item = this.strictNextItem
    if (key !== (item ? this.getKey(item.self) : undefined))
      item = this.lookup(key) as MergedListItemImpl<T> | undefined
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

  add(self: T, keepInAddedItems?: boolean): MergedListItem<T> {
    const key = this.getKey(self)
    if (this.lookup(key) !== undefined)
      throw new Error(`key is already in use: ${key}`)
    let tag = this.tag
    if (tag < 0) { // merge is not in progress
      tag = ~this.tag + 1
      this.tag = ~tag // one item merge cycle
    }
    const item = new MergedListItemImpl<T>(self, tag)
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
    if (keepInAddedItems === true) {
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

  remove(item: MergedListItem<T>, keepInRemovedItems?: boolean): void {
    if (!this.isRemoved(item)) {
      const x = item as MergedListItemImpl<T>
      x.tag--
      if (keepInRemovedItems === true) {
        throw new Error('not implemented')
        // move to this.firstOld
      }
    }
  }

  move(item: MergedListItem<T>, after: MergedListItem<T>): void {
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

  endMerge(keepAddedAndRemovedItems?: boolean): void {
    if (!this.isMergeInProgress)
      throw new Error('merge is ended already')
    this.tag = ~this.tag
    const currentCount = this.current.count
    if (currentCount > 0) {
      const getKey = this.getKey
      if (currentCount > this.former.count) { // it should be faster to delete vanished items
        const map = this.map
        for (const x of this.former.items())
          map.delete(getKey(x.self))
      }
      else { // it should be faster to recreate map using current items
        const map = this.map = new Map<string | undefined, MergedListItemImpl<T>>()
        for (const x of this.current.items())
          map.set(getKey(x.self), x)
      }
    }
    else // just create new empty map
      this.map = new Map<string | undefined, MergedListItemImpl<T>>()
    if (keepAddedAndRemovedItems === undefined || !keepAddedAndRemovedItems) {
      this.former.first = undefined
      this.former.count = 0
      this.added.first = undefined
      this.added.last = undefined
      this.added.count = 0
    }
  }

  *items(): Generator<MergedListItem<T>> {
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

  *addedItems(keep?: boolean): Generator<MergedListItem<T>> {
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

  *removedItems(keep?: boolean): Generator<MergedListItem<T>> {
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

  isAdded(item: MergedListItem<T>): boolean {
    const t = item as MergedListItemImpl<T>
    let tag = this.tag
    if (tag < 0)
      tag = ~tag
    return t.status === ~tag && t.tag > 0
  }

  isMoved(item: MergedListItem<T>): boolean {
    const t = item as MergedListItemImpl<T>
    let tag = this.tag
    if (tag < 0)
      tag = ~tag
    return t.status === tag && t.tag > 0
  }

  isRemoved(item: MergedListItem<T>): boolean {
    const t = item as MergedListItemImpl<T>
    const tag = this.tag
    return tag > 0 ? t.tag < tag : t.tag < tag - 1
  }

  isCurrent(item: MergedListItem<T>): boolean {
    const t = item as MergedListItemImpl<T>
    return t.tag === this.tag
  }

  markAsMoved(item: MergedListItem<T>): void {
    const t = item as MergedListItemImpl<T>
    if (t.tag > 0) // if not removed, > is intentional
      t.status = t.tag
  }

  static createMergedListItem<T>(self: T): MergedListItem<T> {
    return new MergedListItemImpl(self, 0)
  }
}

class MergedListItemImpl<T> implements MergedListItem<T> {
  readonly self: T
  tag: number
  status: number
  next?: MergedListItemImpl<T>
  prev?: MergedListItemImpl<T>
  aux?: MergedListItemImpl<T>

  constructor(self: T, tag: number) {
    this.self = self
    this.tag = tag
    this.status = ~tag // isAdded=true
    this.next = undefined
    this.prev = undefined
    this.aux = undefined
  }
}

class ItemChain<T> {
  first?: MergedListItemImpl<T> = undefined
  last?: MergedListItemImpl<T> = undefined
  count: number = 0;

  *items(): Generator<MergedListItemImpl<T>> {
    let x = this.first
    while (x !== undefined) {
      yield x
      x = x.next
    }
  }
}
