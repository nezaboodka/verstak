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
  isActual(item: MergeListItem<T>): boolean
}

export interface MergeListItem<T> {
  readonly self: T
  next?: MergeListItem<T>
  prev?: MergeListItem<T>
  aux?: MergeListItem<T>
}

export class MergeList<T> implements Merger<T> {
  private map: Map<string | undefined, MergeListItemImpl<T>>
  private tag: number
  private lastNotFoundKey: string | undefined
  private strictNext?: MergeListItemImpl<T>
  private firstActual?: MergeListItemImpl<T>
  private lastActual?: MergeListItemImpl<T>
  private actualCount: number
  private firstAdded?: MergeListItemImpl<T>
  private lastAdded?: MergeListItemImpl<T>
  private addedCount: number
  private firstPending?: MergeListItemImpl<T>
  private pendingCount: number

  readonly getKey: GetKey<T>
  readonly strict: boolean

  constructor(getKey: GetKey<T>, strict: boolean) {
    this.map = new Map<string | undefined, MergeListItemImpl<T>>()
    this.tag = ~0
    this.lastNotFoundKey = undefined
    this.strictNext = undefined
    this.firstActual = undefined
    this.lastActual = undefined
    this.actualCount = 0
    this.firstAdded = undefined
    this.lastAdded = undefined
    this.addedCount = 0
    this.firstPending = undefined
    this.pendingCount = 0
    this.getKey = getKey
    this.strict = strict
  }

  get count(): number {
    return this.actualCount
  }

  get addedItemCount(): number {
    return this.addedCount
  }

  get removedItemCount(): number {
    return this.pendingCount
  }

  get isMergeInProgress(): boolean {
    return this.tag > 0
  }

  items(): Generator<MergeListItem<T>> {
    return createIterator(this.firstActual,
      this.isMergeInProgress ? this.firstPending : undefined)
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

  add(self: T, keepInRemoved?: boolean): MergeListItem<T> {
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
    this.strictNext = undefined
    // Append to added items
    const lastAdded = this.lastAdded
    if (lastAdded) {
      this.lastAdded = lastAdded.aux = item
    }
    else
      this.firstAdded = this.lastAdded = item
    this.addedCount++
    // Append to actual items
    const last = this.lastActual
    if (last) {
      item.prev = last
      this.lastActual = last.next = item
    }
    else
      this.firstActual = this.lastActual = item
    this.actualCount++
    return item
  }

  remove(item: MergeListItem<T>, keepInRemoved?: boolean): void {
    if (!this.isRemoved(item)) {
      const t = item as MergeListItemImpl<T>
      t.tag--
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
    this.strictNext = this.firstActual
    this.firstPending = this.firstActual
    this.pendingCount = this.actualCount
    this.firstActual = this.lastActual = undefined
    this.actualCount = 0
  }

  endMerge(keepRemoved?: boolean): void {
    if (!this.isMergeInProgress)
      throw new Error('merge is ended already')
    this.tag = ~this.tag
    const actualCount = this.actualCount
    if (actualCount > 0) {
      const getKey = this.getKey
      if (actualCount > this.pendingCount) { // it should be faster to delete vanished items
        const map = this.map
        let item = this.firstPending
        while (item !== undefined) {
          map.delete(getKey(item.self))
          item = item.next
        }
      }
      else { // it should be faster to recreate map using merging items
        const map = this.map = new Map<string | undefined, MergeListItemImpl<T>>()
        let item = this.firstActual
        while (item !== undefined) {
          map.set(getKey(item.self), item)
          item = item.next
        }
      }
    }
    else // just create new empty map
      this.map = new Map<string | undefined, MergeListItemImpl<T>>()
    if (keepRemoved === undefined || !keepRemoved) {
      this.firstPending = undefined
      this.pendingCount = 0
    }
  }

  tryMerge(key: string): MergeListItem<T> | undefined {
    const tag = this.tag
    if (tag < 0)
      throw new Error('merge is not in progress')
    let item = this.strictNext
    if (key !== (item ? this.getKey(item.self) : undefined))
      item = this.lookup(key) as MergeListItemImpl<T> | undefined
    if (item) {
      if (item.tag === tag)
        throw new Error(`duplicate item: ${key}`)
      item.tag = tag
      if (this.strict && item !== this.strictNext)
        item.status = tag // IsAdded=false, IsMoved=true
      this.strictNext = item.next
      // Exclude from old sequence
      if (item.prev !== undefined)
        item.prev.next = item.next
      if (item.next !== undefined)
        item.next.prev = item.prev
      if (item === this.firstPending)
        this.firstPending = item.next
      this.pendingCount--
      // Include into merged sequence
      const last = this.lastActual
      item.prev = last
      item.next = undefined
      if (last)
        this.lastActual = last.next = item
      else
        this.firstActual = this.lastActual = item
      this.actualCount++
    }
    return item
  }

  addedItems(keep?: boolean): Generator<MergeListItem<T>> {
    const result = createIterator(this.firstAdded, undefined)
    if (keep === undefined || !keep) {
      this.firstAdded = this.lastAdded = undefined
      this.addedCount = 0
    }
    return result
  }

  removedItems(keep?: boolean): Generator<MergeListItem<T>> {
    const isMergeInProgress = this.isMergeInProgress
    const first = !isMergeInProgress ? this.firstPending : undefined
    const result = createIterator(first, undefined)
    if (!isMergeInProgress && (keep === undefined || !keep)) {
      this.firstPending = undefined
      this.pendingCount = 0
    }
    return result
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

  isActual(item: MergeListItem<T>): boolean {
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

function *createIterator<T>(
  first: MergeListItem<T> | undefined,
  secondaryFirst: MergeListItem<T> | undefined): Generator<MergeListItem<T>> {
  while (first !== undefined) {
    const next = first.next
    yield first
    first = next
  }
  while (secondaryFirst !== undefined) {
    const next = secondaryFirst.next
    yield secondaryFirst
    secondaryFirst = next
  }
}