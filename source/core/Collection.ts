// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

export type GetItemKey<T = unknown> = (item: T) => string | undefined

export interface CollectionReader<T> {
  // readonly getKey: GetKey<T>
  readonly strict: boolean
  readonly count: number
  readonly addedCount: number
  readonly removedCount: number
  readonly isMergeInProgress: boolean

  lookup(key: string): Item<T> | undefined
  claim(key: string): Item<T> | undefined
  add(self: T, keepInAddedItems?: boolean): Item<T>
  remove(item: Item<T>, keepInRemovedItems?: boolean): void
  move(item: Item<T>, after: Item<T>): void
  beginMerge(): void
  endMerge(keepAddedAndRemovedItems?: boolean): void

  items(): Generator<Item<T>>
  addedItems(keep?: boolean): Generator<Item<T>>
  removedItems(keep?: boolean): Generator<Item<T>>
  isAdded(item: Item<T>): boolean
  isMoved(item: Item<T>): boolean
  isRemoved(item: Item<T>): boolean
  isCurrent(item: Item<T>): boolean
}

export interface Item<T> {
  readonly self: T
  // readonly next?: Item<T>
  readonly prev?: Item<T> // TODO: hide
  aux?: Item<T> // TODO: hide
}

export class Collection<T> implements CollectionReader<T> {
  readonly strict: boolean
  readonly getKey: GetItemKey<T>
  private map: Map<string | undefined, ItemImpl<T>>
  private tag: number
  private current: ItemChain<T>
  private added: ItemChain<T>
  private removed: ItemChain<T>
  private lastNotFoundKey: string | undefined
  private strictNextItem?: ItemImpl<T>

  constructor(strict: boolean, getKey: GetItemKey<T>) {
    this.strict = strict
    this.getKey = getKey
    this.map = new Map<string | undefined, ItemImpl<T>>()
    this.tag = ~0
    this.current = new ItemChain<T>()
    this.added = new ItemChain<T>()
    this.removed = new ItemChain<T>()
    this.lastNotFoundKey = undefined
    this.strictNextItem = undefined
  }

  get count(): number {
    return this.current.count
  }

  get addedCount(): number {
    return this.added.count
  }

  get removedCount(): number {
    return this.removed.count
  }

  get isMergeInProgress(): boolean {
    return this.tag > 0
  }

  lookup(key: string | undefined): Item<T> | undefined {
    let result: Item<T> | undefined = undefined
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

  claim(key: string): Item<T> | undefined {
    const tag = this.tag
    if (tag < 0)
      throw new Error('merge is not in progress')
    let item = this.strictNextItem
    if (key !== (item ? this.getKey(item.self) : undefined))
      item = this.lookup(key) as ItemImpl<T> | undefined
    if (item) {
      if (item.tag === tag)
        throw new Error(`duplicate item: ${key}`)
      item.tag = tag
      if (this.strict && item !== this.strictNextItem)
        item.status = tag // IsAdded=false, IsMoved=true
      this.strictNextItem = item.next
      this.removed.exclude(item)
      this.current.include(item)
    }
    return item
  }

  add(self: T, keepInAddedItems?: boolean): Item<T> {
    const key = this.getKey(self)
    if (this.lookup(key) !== undefined)
      throw new Error(`key is already in use: ${key}`)
    let tag = this.tag
    if (tag < 0) { // merge is not in progress
      tag = ~this.tag + 1
      this.tag = ~tag // one item merge cycle
    }
    const item = new ItemImpl<T>(self, tag)
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

  remove(item: Item<T>, keepInRemovedItems?: boolean): void {
    if (!this.isRemoved(item)) {
      const x = item as ItemImpl<T>
      x.tag--
      if (keepInRemovedItems === true) {
        throw new Error('not implemented')
        // move to this.firstOld
      }
    }
  }

  move(item: Item<T>, after: Item<T>): void {
    throw new Error('not implemented')
  }

  beginMerge(): void {
    if (this.isMergeInProgress)
      throw new Error('merge is not reentrant')
    this.tag = ~this.tag + 1
    this.strictNextItem = this.current.first
    this.removed.grab(this.current)
    this.added.grab(undefined)
  }

  endMerge(keepAddedAndRemovedItems?: boolean): void {
    if (!this.isMergeInProgress)
      throw new Error('merge is ended already')
    this.tag = ~this.tag
    const currentCount = this.current.count
    if (currentCount > 0) {
      const getKey = this.getKey
      if (currentCount > this.removed.count) { // it should be faster to delete vanished items
        const map = this.map
        for (const x of this.removed.items())
          map.delete(getKey(x.self))
      }
      else { // it should be faster to recreate map using current items
        const map = this.map = new Map<string | undefined, ItemImpl<T>>()
        for (const x of this.current.items())
          map.set(getKey(x.self), x)
      }
    }
    else // just create new empty map
      this.map = new Map<string | undefined, ItemImpl<T>>()
    if (keepAddedAndRemovedItems === undefined || !keepAddedAndRemovedItems) {
      this.removed.grab(undefined)
      this.added.grab(undefined)
    }
  }

  *items(): Generator<Item<T>> {
    let x = this.current.first
    while (x !== undefined) {
      const next = x.next
      yield x
      x = next
    }
  }

  *addedItems(keep?: boolean): Generator<Item<T>> {
    let x = this.added.first
    while (x !== undefined) {
      const next = x.aux
      if (!this.isRemoved(x))
        yield x
      x = next
    }
    if (keep === undefined || !keep)
      this.added.grab(undefined)
  }

  *removedItems(keep?: boolean): Generator<Item<T>> {
    const isMergeInProgress = this.isMergeInProgress
    let x = this.removed.first
    while (x !== undefined) {
      const next = x.next
      yield x
      x = next
    }
    if (!isMergeInProgress && (keep === undefined || !keep))
      this.removed.grab(undefined)
  }

  isAdded(item: Item<T>): boolean {
    const t = item as ItemImpl<T>
    let tag = this.tag
    if (tag < 0)
      tag = ~tag
    return t.status === ~tag && t.tag > 0
  }

  isMoved(item: Item<T>): boolean {
    const t = item as ItemImpl<T>
    let tag = this.tag
    if (tag < 0)
      tag = ~tag
    return t.status === tag && t.tag > 0
  }

  isRemoved(item: Item<T>): boolean {
    const t = item as ItemImpl<T>
    const tag = this.tag
    return tag > 0 ? t.tag < tag : t.tag < tag - 1
  }

  isCurrent(item: Item<T>): boolean {
    const t = item as ItemImpl<T>
    return t.tag === this.tag
  }

  markAsMoved(item: Item<T>): void {
    const t = item as ItemImpl<T>
    if (t.tag > 0) // if not removed, > is intentional
      t.status = t.tag
  }

  static createItem<T>(self: T): Item<T> {
    return new ItemImpl(self, 0)
  }
}

class ItemImpl<T> implements Item<T> {
  readonly self: T
  tag: number
  status: number
  next?: ItemImpl<T>
  prev?: ItemImpl<T>
  aux?: ItemImpl<T>

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
  count: number = 0
  first?: ItemImpl<T> = undefined
  last?: ItemImpl<T> = undefined

  public *items(): Generator<ItemImpl<T>> {
    let x = this.first
    while (x !== undefined) {
      const next = x.next
      yield x
      x = next
    }
  }

  grab(from: ItemChain<T> | undefined): void {
    let clear: ItemChain<T>
    if (from) {
      this.count = from.count
      this.first = from.first
      this.last = from.last
      clear = from
    }
    else
      clear = this
    clear.count = 0
    clear.first = undefined
    clear.last = undefined
  }

  include(item: ItemImpl<T>): void {
    const last = this.last
    item.prev = last
    item.next = undefined
    if (last)
      this.last = last.next = item
    else
      this.first = this.last = item
    this.count++
  }

  exclude(item: ItemImpl<T>): void {
    if (item.prev !== undefined)
      item.prev.next = item.next
    if (item.next !== undefined)
      item.next.prev = item.prev
    if (item === this.first)
      this.first = item.next
    this.count--
  }
}
