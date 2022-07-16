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

  lookup(key: string): MergedItem<T> | undefined
  claim(key: string): MergedItem<T> | undefined
  add(self: T, keepInAddedItems?: boolean): MergedItem<T>
  remove(item: MergedItem<T>, keepInRemovedItems?: boolean): void
  move(item: MergedItem<T>, after: MergedItem<T>): void
  beginMerge(): void
  endMerge(keepAddedAndRemovedItems?: boolean): void

  items(): Generator<MergedItem<T>>
  addedItems(keep?: boolean): Generator<MergedItem<T>>
  removedItems(keep?: boolean): Generator<MergedItem<T>>
  isAdded(item: MergedItem<T>): boolean
  isMoved(item: MergedItem<T>): boolean
  isRemoved(item: MergedItem<T>): boolean
  isCurrent(item: MergedItem<T>): boolean
}

export interface MergedItem<T> {
  readonly self: T
  // readonly next?: MergedItem<T>
  readonly prev?: MergedItem<T> // TODO: hide
  aux?: MergedItem<T> // TODO: hide
}

export class MergedList<T> implements Merged<T> {
  readonly strict: boolean
  readonly getKey: GetKey<T>
  private map: Map<string | undefined, MergedItemImpl<T>>
  private tag: number
  private current: ItemChain<T>
  private added: ItemChain<T>
  private removed: ItemChain<T>
  private lastNotFoundKey: string | undefined
  private strictNextItem?: MergedItemImpl<T>

  constructor(strict: boolean, getKey: GetKey<T>) {
    this.strict = strict
    this.getKey = getKey
    this.map = new Map<string | undefined, MergedItemImpl<T>>()
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

  lookup(key: string | undefined): MergedItem<T> | undefined {
    let result: MergedItem<T> | undefined = undefined
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

  claim(key: string): MergedItem<T> | undefined {
    const tag = this.tag
    if (tag < 0)
      throw new Error('merge is not in progress')
    let item = this.strictNextItem
    if (key !== (item ? this.getKey(item.self) : undefined))
      item = this.lookup(key) as MergedItemImpl<T> | undefined
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
      if (item === this.removed.first)
        this.removed.first = item.next
      this.removed.count--
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

  add(self: T, keepInAddedItems?: boolean): MergedItem<T> {
    const key = this.getKey(self)
    if (this.lookup(key) !== undefined)
      throw new Error(`key is already in use: ${key}`)
    let tag = this.tag
    if (tag < 0) { // merge is not in progress
      tag = ~this.tag + 1
      this.tag = ~tag // one item merge cycle
    }
    const item = new MergedItemImpl<T>(self, tag)
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

  remove(item: MergedItem<T>, keepInRemovedItems?: boolean): void {
    if (!this.isRemoved(item)) {
      const x = item as MergedItemImpl<T>
      x.tag--
      if (keepInRemovedItems === true) {
        throw new Error('not implemented')
        // move to this.firstOld
      }
    }
  }

  move(item: MergedItem<T>, after: MergedItem<T>): void {
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
        const map = this.map = new Map<string | undefined, MergedItemImpl<T>>()
        for (const x of this.current.items())
          map.set(getKey(x.self), x)
      }
    }
    else // just create new empty map
      this.map = new Map<string | undefined, MergedItemImpl<T>>()
    if (keepAddedAndRemovedItems === undefined || !keepAddedAndRemovedItems) {
      this.removed.grab(undefined)
      this.added.grab(undefined)
    }
  }

  *items(): Generator<MergedItem<T>> {
    let x = this.current.first
    while (x !== undefined) {
      const next = x.next
      yield x
      x = next
    }
  }

  *addedItems(keep?: boolean): Generator<MergedItem<T>> {
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

  *removedItems(keep?: boolean): Generator<MergedItem<T>> {
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

  isAdded(item: MergedItem<T>): boolean {
    const t = item as MergedItemImpl<T>
    let tag = this.tag
    if (tag < 0)
      tag = ~tag
    return t.status === ~tag && t.tag > 0
  }

  isMoved(item: MergedItem<T>): boolean {
    const t = item as MergedItemImpl<T>
    let tag = this.tag
    if (tag < 0)
      tag = ~tag
    return t.status === tag && t.tag > 0
  }

  isRemoved(item: MergedItem<T>): boolean {
    const t = item as MergedItemImpl<T>
    const tag = this.tag
    return tag > 0 ? t.tag < tag : t.tag < tag - 1
  }

  isCurrent(item: MergedItem<T>): boolean {
    const t = item as MergedItemImpl<T>
    return t.tag === this.tag
  }

  markAsMoved(item: MergedItem<T>): void {
    const t = item as MergedItemImpl<T>
    if (t.tag > 0) // if not removed, > is intentional
      t.status = t.tag
  }

  static createMergedItem<T>(self: T): MergedItem<T> {
    return new MergedItemImpl(self, 0)
  }
}

class MergedItemImpl<T> implements MergedItem<T> {
  readonly self: T
  tag: number
  status: number
  next?: MergedItemImpl<T>
  prev?: MergedItemImpl<T>
  aux?: MergedItemImpl<T>

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
  first?: MergedItemImpl<T> = undefined
  last?: MergedItemImpl<T> = undefined

  public *items(): Generator<MergedItemImpl<T>> {
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
}
