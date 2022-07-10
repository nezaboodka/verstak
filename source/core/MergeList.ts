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
  add(self: T): MergeListItem<T>
  remove(item: MergeListItem<T>): void
  move(item: MergeListItem<T>, after: MergeListItem<T>): void

  beginMerge(): void
  tryMerge(key: string): MergeListItem<T> | undefined
  endMerge(keepRemoved?: boolean): void

  removedItems(keep?: boolean): Generator<MergeListItem<T>>
  addedItems(keep?: boolean): Generator<MergeListItem<T>>
  isAdded(item: MergeListItem<T>): boolean
  isMoved(item: MergeListItem<T>): boolean
  isRemoved(item: MergeListItem<T>): boolean
  isActual(item: MergeListItem<T>): boolean
}

export interface MergeListItem<T> {
  readonly self: T
  next?: MergeListItem<T>
  prev?: MergeListItem<T>
}

export class MergeList<T> implements Merger<T> {
  private map = new Map<string | undefined, MergeListItemImpl<T>>()
  private cycle: number = ~0
  private lastNotFoundKey: string | undefined = undefined
  private strictNext?: MergeListItemImpl<T> = undefined
  private firstActual?: MergeListItemImpl<T> = undefined
  private lastActual?: MergeListItemImpl<T> = undefined
  private actualCount: number = 0
  private firstPending?: MergeListItemImpl<T> = undefined
  private pendingCount: number = 0

  readonly getKey: GetKey<T>
  readonly strict: boolean

  constructor(getKey: GetKey<T>, strict: boolean) {
    this.getKey = getKey
    this.strict = strict
  }

  get count(): number {
    return this.actualCount
  }

  get isMergeInProgress(): boolean {
    return this.cycle > 0
  }

  items(): Generator<MergeListItem<T>> {
    return createIterator(this.firstActual)
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

  add(self: T): MergeListItem<T> {
    return this.doAdd(self)
  }

  private doAdd(self: T): MergeListItem<T> {
    const key = this.getKey(self)
    if (this.lookup(key) !== undefined)
      throw new Error(`key is already in use: ${key}`)
    let cycle = this.cycle
    if (cycle < 0) { // merge is not in progress
      cycle = ~this.cycle + 1
      this.cycle = ~cycle // one item merge cycle
    }
    const item = new MergeListItemImpl<T>(self, cycle)
    this.map.set(key, item)
    this.lastNotFoundKey = undefined
    this.strictNext = undefined
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

  remove(item: MergeListItem<T>): void {
    if (!this.isRemoved(item)) {
      const t = item as MergeListItemImpl<T>
      t.cycle--
      throw new Error('not implemented')
      // move to this.firstOld
    }
  }

  move(item: MergeListItem<T>, after: MergeListItem<T>): void {
    throw new Error('not implemented')
  }

  beginMerge(): void {
    if (this.isMergeInProgress)
      throw new Error('merge is not reentrant')
    this.cycle = ~this.cycle + 1
    this.strictNext = this.firstActual
    this.firstPending = this.firstActual
    this.pendingCount = this.actualCount
    this.firstActual = this.lastActual = undefined
    this.actualCount = 0
  }

  endMerge(keepRemoved?: boolean): void {
    if (!this.isMergeInProgress)
      throw new Error('merge is ended already')
    this.cycle = ~this.cycle
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
    const cycle = this.cycle
    if (cycle < 0)
      throw new Error('merge is not in progress')
    let item = this.strictNext
    if (key !== (item ? this.getKey(item.self) : undefined))
      item = this.lookup(key) as MergeListItemImpl<T> | undefined
    if (item) {
      if (item.cycle === cycle)
        throw new Error(`duplicate item id: ${key}`)
      item.cycle = cycle
      if (this.strict && item !== this.strictNext)
        item.status = cycle // IsAdded=false, IsMoved=true
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

  removedItems(keep?: boolean): Generator<MergeListItem<T>> {
    const result = createIterator(this.firstPending)
    if (keep === undefined || !keep) {
      this.firstPending = undefined
      this.pendingCount = 0
    }
    return result
  }

  addedItems(keep?: boolean): Generator<MergeListItem<T>> {
    throw new Error('not implemented')
  }

  isAdded(item: MergeListItem<T>): boolean {
    const t = item as MergeListItemImpl<T>
    let cycle = this.cycle
    if (cycle < 0)
      cycle = ~cycle
    return t.status === ~cycle && t.cycle > 0
  }

  isMoved(item: MergeListItem<T>): boolean {
    const t = item as MergeListItemImpl<T>
    let cycle = this.cycle
    if (cycle < 0)
      cycle = ~cycle
    return t.status === cycle && t.cycle > 0
  }

  isRemoved(item: MergeListItem<T>): boolean {
    const t = item as MergeListItemImpl<T>
    const cycle = this.cycle
    return cycle > 0 ? t.cycle < cycle : t.cycle < cycle - 1
  }

  isActual(item: MergeListItem<T>): boolean {
    const t = item as MergeListItemImpl<T>
    return t.cycle === this.cycle
  }

  markAsMoved(item: MergeListItem<T>): void {
    const t = item as MergeListItemImpl<T>
    if (t.cycle > 0) // if not removed, > is intentional
      t.status = t.cycle
  }

  static createMergerItem<T>(self: T): MergeListItem<T> {
    return new MergeListItemImpl(self, 0)
  }
}

class MergeListItemImpl<T> implements MergeListItem<T> {
  readonly self: T
  cycle: number
  status: number
  next?: MergeListItemImpl<T> = undefined
  prev?: MergeListItemImpl<T> = undefined

  constructor(self: T, cycle: number) {
    this.self = self
    this.cycle = cycle
    this.status = ~cycle // isAdded=true
  }
}

function *createIterator<T>(first: MergeListItem<T> | undefined): Generator<MergeListItem<T>> {
  while (first !== undefined) {
    const next = first.next
    yield first
    first = next
  }
}
