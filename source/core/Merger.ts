// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

export type GetKey<T = unknown> = (item: T) => string | undefined

export interface MergerApi<T> {
  readonly count: number
  items(): Generator<MergerItem<T>>
  removed(): Generator<MergerItem<T>>
  isAdded(item: MergerItem<T>): boolean
  isMoved(item: MergerItem<T>): boolean
  isRemoved(item: MergerItem<T>): boolean
  isMerged(item: MergerItem<T>): boolean
  readonly isMerging: boolean
  beginMerge(): void
  tryMergeAsExisting(key: string): MergerItem<T> | undefined
  mergeAsNew(self: T): MergerItem<T>
  endMerge(yieldRemoved: boolean): Generator<MergerItem<T>>
}

export interface MergerItem<T> {
  readonly self: T
  next?: MergerItem<T>
  prev?: MergerItem<T>
}

export class Merger<T> implements MergerApi<T> {
  readonly getKey: GetKey<T>
  readonly strict: boolean
  private map = new Map<string | undefined, MergerItemImpl<T>>()
  private cycle: number = ~0
  private firstMerged?: MergerItemImpl<T> = undefined
  private lastMerged?: MergerItemImpl<T> = undefined
  private mergedCount: number = 0
  private strictNext?: MergerItemImpl<T> = undefined
  private firstExisting?: MergerItemImpl<T> = undefined
  private existingCount: number = 0
  get isMerging(): boolean { return this.cycle > 0 }
  get count(): number { return this.existingCount }

  constructor(getKey: GetKey<T>, strict: boolean) {
    this.getKey = getKey
    this.strict = strict
  }

  *items(): Generator<MergerItem<T>> {
    let item = this.firstExisting
    while (item !== undefined) {
      const next = item.next
      yield item
      item = next
    }
  }

  *removed(): Generator<MergerItem<T>> {
    throw new Error('not implemented')
  }

  isAdded(item: MergerItem<T>): boolean {
    const t = item as MergerItemImpl<T>
    let cycle = this.cycle
    if (cycle < 0)
      cycle = ~cycle
    return t.status === ~cycle && t.cycle > 0
  }

  isMoved(item: MergerItem<T>): boolean {
    const t = item as MergerItemImpl<T>
    let cycle = this.cycle
    if (cycle < 0)
      cycle = ~cycle
    return t.status === cycle && t.cycle > 0
  }

  isRemoved(item: MergerItem<T>): boolean {
    const t = item as MergerItemImpl<T>
    return t.cycle < 0
  }

  isMerged(item: MergerItem<T>): boolean {
    const t = item as MergerItemImpl<T>
    return t.cycle === this.cycle
  }

  beginMerge(): void {
    if (this.isMerging)
      throw new Error('merge is not reentrant')
    this.cycle = ~this.cycle + 1
  }

  *endMerge(): Generator<MergerItem<T>> {
    let item = this.doEndMerge()
    while (item !== undefined) {
      const next = item.next
      this.markAsRemoved(item)
      yield item
      item = next
    }
  }

  private doEndMerge(): MergerItemImpl<T> | undefined {
    if (!this.isMerging)
      throw new Error('merge is ended already')
    this.cycle = ~this.cycle
    const mergedCount = this.mergedCount
    if (mergedCount > 0) {
      const getKey = this.getKey
      if (mergedCount > this.existingCount) { // it should be faster to delete vanished items
        const map = this.map
        let item = this.firstExisting
        while (item !== undefined) {
          map.delete(getKey(item.self))
          item = item.next
        }
      }
      else { // it should be faster to recreate map using merging items
        const map = this.map = new Map<string | undefined, MergerItemImpl<T>>()
        let item = this.firstMerged
        while (item !== undefined) {
          map.set(getKey(item.self), item)
          item = item.next
        }
      }
    }
    else // just create new empty map
      this.map = new Map<string | undefined, MergerItemImpl<T>>()
    const removed = this.firstExisting
    this.firstExisting = this.firstMerged
    this.existingCount = mergedCount
    this.firstMerged = this.lastMerged = undefined
    this.mergedCount = 0
    this.strictNext = this.firstExisting
    return removed
  }

  tryMergeAsExisting(key: string): MergerItem<T> | undefined {
    const cycle = this.cycle
    let item = this.strictNext
    let k = item ? this.getKey(item.self) : undefined
    if (k !== key) {
      item = this.map.get(key)
      k = item ? this.getKey(item.self) : undefined
    }
    if (item && k !== undefined) {
      if (item.cycle === cycle)
        throw new Error(`duplicate item id: ${key}`)
      item.cycle = cycle
      if (this.strict && item !== this.strictNext)
        item.status = cycle // IsAdded=false, IsMoved=true
      this.strictNext = item.next
      // Exclude from current sequence
      if (item.prev !== undefined)
        item.prev.next = item.next
      if (item.next !== undefined)
        item.next.prev = item.prev
      if (item === this.firstExisting)
        this.firstExisting = item.next
      this.existingCount--
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

  mergeAsNew(self: T): MergerItem<T> {
    const item = new MergerItemImpl<T>(self, this.cycle)
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

  markAsMoved(item: MergerItem<T>): void {
    const t = item as MergerItemImpl<T>
    if (t.cycle > 0) // if not removed, > is intentional
      t.status = t.cycle
  }

  private markAsRemoved(item: MergerItemImpl<T>): void {
    if (item.cycle >= 0) // if not removed, >= is intentional
      item.cycle = ~item.cycle
  }

  static createMergerItem<T>(self: T): MergerItem<T> {
    return new MergerItemImpl(self, 0)
  }
}

class MergerItemImpl<T> implements MergerItem<T> {
  readonly self: T
  cycle: number
  status: number
  next?: MergerItemImpl<T> = undefined
  prev?: MergerItemImpl<T> = undefined

  constructor(self: T, cycle: number) {
    this.self = self
    this.cycle = cycle
    this.status = ~cycle // IsAdded=true
  }
}
