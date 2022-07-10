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
  tryMerge(key: string): MergeListItem<T> | undefined
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
  private map: Map<string | undefined, MergeListItemImpl<T>>
  private tag: number
  private lastNotFoundKey: string | undefined
  private strictNextItem?: MergeListItemImpl<T>
  // Current
  private firstCurrentItem?: MergeListItemImpl<T>
  private lastCurrentItem?: MergeListItemImpl<T>
  private currentItemCount: number
  // Added
  private firstAddedItem?: MergeListItemImpl<T>
  private lastAddedItem?: MergeListItemImpl<T>
  private addedItemCount: number
  // Former
  private firstFormerItem?: MergeListItemImpl<T>
  private formerItemCount: number

  readonly getKey: GetKey<T>
  readonly strict: boolean

  constructor(getKey: GetKey<T>, strict: boolean) {
    this.map = new Map<string | undefined, MergeListItemImpl<T>>()
    this.tag = ~0
    this.lastNotFoundKey = undefined
    this.strictNextItem = undefined
    this.firstCurrentItem = undefined
    this.lastCurrentItem = undefined
    this.currentItemCount = 0
    this.firstAddedItem = undefined
    this.lastAddedItem = undefined
    this.addedItemCount = 0
    this.firstFormerItem = undefined
    this.formerItemCount = 0
    this.getKey = getKey
    this.strict = strict
  }

  get count(): number {
    let result = this.currentItemCount
    if (this.isMergeInProgress)
      result += this.formerItemCount
    return result
  }

  get addedCount(): number {
    return this.addedItemCount
  }

  get removedCount(): number {
    return this.formerItemCount
  }

  get isMergeInProgress(): boolean {
    return this.tag > 0
  }

  *items(): Generator<MergeListItem<T>> {
    let x = this.firstCurrentItem
    while (x !== undefined) {
      const next = x.next
      yield x
      x = next
    }
    if (this.isMergeInProgress) {
      x = this.firstFormerItem
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
    const last = this.lastCurrentItem
    if (last) {
      item.prev = last
      this.lastCurrentItem = last.next = item
    }
    else
      this.firstCurrentItem = this.lastCurrentItem = item
    this.currentItemCount++
    if (keepInAdded === true) {
      // Include into added sequence
      const lastAdded = this.lastAddedItem
      if (lastAdded)
        this.lastAddedItem = lastAdded.aux = item
      else
        this.firstAddedItem = this.lastAddedItem = item
      this.addedItemCount++
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
    this.strictNextItem = this.firstFormerItem = this.firstCurrentItem
    this.formerItemCount = this.currentItemCount
    this.firstCurrentItem = this.lastCurrentItem = undefined
    this.currentItemCount = 0
    this.firstAddedItem = this.lastAddedItem = undefined
    this.addedItemCount = 0
  }

  endMerge(keepRemoved?: boolean): void {
    if (!this.isMergeInProgress)
      throw new Error('merge is ended already')
    this.tag = ~this.tag
    const currentCount = this.currentItemCount
    if (currentCount > 0) {
      const getKey = this.getKey
      if (currentCount > this.formerItemCount) { // it should be faster to delete vanished items
        const map = this.map
        for (const x of all(this.firstFormerItem))
          map.delete(getKey(x.self))
      }
      else { // it should be faster to recreate map using current items
        const map = this.map = new Map<string | undefined, MergeListItemImpl<T>>()
        for (const x of all(this.firstCurrentItem))
          map.set(getKey(x.self), x)
      }
    }
    else // just create new empty map
      this.map = new Map<string | undefined, MergeListItemImpl<T>>()
    if (keepRemoved === undefined || !keepRemoved) {
      this.firstFormerItem = undefined
      this.formerItemCount = 0
    }
  }

  tryMerge(key: string): MergeListItem<T> | undefined {
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
      if (item === this.firstFormerItem)
        this.firstFormerItem = item.next
      this.formerItemCount--
      // Include into current sequence
      const last = this.lastCurrentItem
      item.prev = last
      item.next = undefined
      if (last)
        this.lastCurrentItem = last.next = item
      else
        this.firstCurrentItem = this.lastCurrentItem = item
      this.currentItemCount++
    }
    return item
  }

  *addedItems(keep?: boolean): Generator<MergeListItem<T>> {
    let x = this.firstAddedItem
    while (x !== undefined) {
      const next = x.aux
      if (!this.isRemoved(x))
        yield x
      x = next
    }
    if (keep === undefined || !keep) {
      this.firstAddedItem = this.lastAddedItem = undefined
      this.addedItemCount = 0
    }
  }

  *removedItems(keep?: boolean): Generator<MergeListItem<T>> {
    const isMergeInProgress = this.isMergeInProgress
    if (!isMergeInProgress) {
      let x = this.firstFormerItem
      while (x !== undefined) {
        const next = x.next
        yield x
        x = next
      }
      if (!isMergeInProgress && (keep === undefined || !keep)) {
        this.firstFormerItem = undefined
        this.formerItemCount = 0
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

function *all<T>(first: MergeListItemImpl<T> | undefined): Generator<MergeListItemImpl<T>> {
  while (first !== undefined) {
    yield first
    first = first.next
  }
}
