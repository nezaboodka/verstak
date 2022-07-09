// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

// Merger API

export type GetKey<T = unknown> = (item: T) => string | undefined

export interface IMerger<T> {
  readonly isMerging: boolean
  readonly count: number
  items(): Generator<Item<T>>
  beginMerge(): void
  tryMergeAsExisting(key: string): Item<T> | undefined
  mergeAsNew(self: T): Item<T>
  endMerge(yieldRemoved: boolean): Generator<Item<T>>
}

export interface Item<T> {
  readonly self: T
  readonly isAddedRecently: boolean
  readonly isMovedRecently: boolean
  readonly isRemovedRecently: boolean
  next?: Item<T>
  prev?: Item<T>
}

// Merger Implementation

export class MergerItem<T> implements Item<T> {
  readonly self: T
  mergeCycle: number
  arrangeCycle: number
  next?: MergerItem<T> = undefined
  prev?: MergerItem<T> = undefined
  get isAddedRecently(): boolean { return this.arrangeCycle === -1 }
  get isMovedRecently(): boolean { return this.arrangeCycle === this.mergeCycle }
  get isRemovedRecently(): boolean { return this.mergeCycle < 0 }

  constructor(self: T, cycle: number) {
    this.self = self
    this.mergeCycle = cycle
    this.arrangeCycle = -1 // IsAdded=true
  }
}

export class Merger<T> implements IMerger<T> {
  private readonly getKey: GetKey<T>
  readonly strict: boolean
  private map = new Map<string | undefined, MergerItem<T>>()
  private cycle: number = ~0
  private firstMerged?: MergerItem<T> = undefined
  private lastMerged?: MergerItem<T> = undefined
  private mergedCount: number = 0
  private strictNext?: MergerItem<T> = undefined
  first?: MergerItem<T> = undefined
  count: number = 0
  get isMerging(): boolean { return this.cycle > 0 }

  constructor(getKey: GetKey<T>, strict: boolean) {
    this.getKey = getKey
    this.strict = strict
  }

  *items(): Generator<Item<T>> {
    let item = this.first
    while (item !== undefined) {
      yield item
      item = item.next
    }
  }

  beginMerge(): void {
    if (this.isMerging)
      throw new Error('merge is not reentrant')
    this.cycle = ~this.cycle + 1
  }

  *endMerge(yieldRemoved: boolean): Generator<Item<T>> {
    let item = this.doEndMerge()
    // Removed
    if (yieldRemoved) {
      while (item !== undefined) {
        const next = item.next
        this.markAsRemoved(item)
        yield item
        item = next
      }
    }
    // Retained
    item = this.first
    while (item !== undefined) {
      yield item
      item = item.next
    }
  }

  private doEndMerge(): MergerItem<T> | undefined {
    if (!this.isMerging)
      throw new Error('merge is ended already')
    this.cycle = ~this.cycle
    const mergedCount = this.mergedCount
    if (mergedCount > 0) {
      const getKey = this.getKey
      if (mergedCount > this.count) { // it should be faster to delete vanished items
        const map = this.map
        let item = this.first
        while (item !== undefined) {
          map.delete(getKey(item.self))
          item = item.next
        }
      }
      else { // it should be faster to recreate map using merging items
        const map = this.map = new Map<string | undefined, MergerItem<T>>()
        let item = this.firstMerged
        while (item !== undefined) {
          map.set(getKey(item.self), item)
          item = item.next
        }
      }
    }
    else // just create new empty map
      this.map = new Map<string | undefined, MergerItem<T>>()
    const removed = this.first
    this.first = this.firstMerged
    this.count = mergedCount
    this.firstMerged = this.lastMerged = undefined
    this.mergedCount = 0
    this.strictNext = this.first
    return removed
  }

  tryMergeAsExisting(key: string): Item<T> | undefined {
    const cycle = this.cycle
    let item = this.strictNext
    let k = item ? this.getKey(item.self) : undefined
    if (k !== key) {
      item = this.map.get(key)
      k = item ? this.getKey(item.self) : undefined
    }
    if (item && k !== undefined) {
      if (item.mergeCycle === cycle)
        throw new Error(`duplicate item id: ${key}`)
      item.mergeCycle = cycle
      if (this.strict && item !== this.strictNext)
        item.arrangeCycle = cycle // IsAdded=false, IsMoved=true
      else if (item.arrangeCycle === -1)
        item.arrangeCycle = 0 // IsAdded=false, IsMoved=false
      this.strictNext = item.next
      // Exclude from current sequence
      if (item.prev !== undefined)
        item.prev.next = item.next
      if (item.next !== undefined)
        item.next.prev = item.prev
      if (item === this.first)
        this.first = item.next
      this.count--
      // Include into merged sequence
      const last = this.lastMerged
      item.prev = last
      item.next = undefined
      if (last)
        this.lastMerged = last.next = item
      else
        this.firstMerged = this.lastMerged = item
      this.mergedCount++
    }
    return item
  }

  mergeAsNew(self: T): Item<T> {
    const item = new MergerItem<T>(self, this.cycle)
    this.map.set(this.getKey(self), item)
    const last = this.lastMerged
    if (last) {
      item.prev = last
      this.lastMerged = last.next = item
    }
    else
      this.firstMerged = this.lastMerged = item
    this.strictNext = undefined
    this.mergedCount++
    return item
  }

  markAsMoved(item: Item<T>): void {
    const t = item as MergerItem<T>
    if (t.arrangeCycle >= 0) // do not interfere with IsAdded
      t.arrangeCycle = t.mergeCycle
  }

  private markAsRemoved(item: MergerItem<T>): void {
    if (item.mergeCycle >= 0)
      item.mergeCycle = ~item.mergeCycle
  }
}
