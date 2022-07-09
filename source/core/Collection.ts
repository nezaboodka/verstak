// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

// Collection

export type GetKey<T = unknown> = (item: T) => string | undefined

export interface Item<T> {
  readonly self: T
  readonly isAdded: boolean
  readonly isRemoved: boolean
  readonly isMoved: boolean
  next?: Item<T>
  prev?: Item<T>
}

export class CollectionItem<T> implements Item<T> {
  readonly self: T
  collectionRevision: number
  selfMoveRevision: number
  next?: CollectionItem<T> = undefined
  prev?: CollectionItem<T> = undefined
  get isAdded(): boolean { throw new Error('not implemented') }
  get isRemoved(): boolean { return this.collectionRevision < 0 }
  set isRemoved(value: boolean) { if (value) this.collectionRevision = ~this.collectionRevision }
  get isMoved(): boolean { return this.selfMoveRevision === this.collectionRevision }
  set isMoved(value: boolean) { if (value) this.selfMoveRevision = this.collectionRevision }

  constructor(self: T, revision: number) {
    this.self = self
    this.collectionRevision = revision
    this.selfMoveRevision = revision
  }
}

export interface ReadonlyCollection<T> {
  readonly revision: number
  readonly first?: Readonly<Item<T>>
  readonly count: number
}

export class Collection<T> implements ReadonlyCollection<T> {
  private readonly getKey: GetKey<T>
  readonly strict: boolean
  private map = new Map<string | undefined, CollectionItem<T>>()
  revision: number = 0
  private mergedFirst?: CollectionItem<T> = undefined
  private mergedLast?: CollectionItem<T> = undefined
  private mergedCount: number = 0
  private strictNext?: CollectionItem<T> = undefined
  first?: CollectionItem<T> = undefined
  count: number = 0

  constructor(getKey: GetKey<T>, strict: boolean) {
    this.getKey = getKey
    this.strict = strict
  }

  beginMerge(revision: number): void {
    if (this.revision > 0)
      throw new Error('chain merge is not reentrant')
    this.revision = revision
  }

  *endMerge(yieldRemoved: boolean): Generator<Item<T>> {
    let item = this.doEndMerge()
    // Removed
    if (yieldRemoved) {
      while (item !== undefined) {
        item.isRemoved = true
        const next = item.next
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

  private doEndMerge(): CollectionItem<T> | undefined {
    if (this.revision <= 0)
      throw new Error('chain merge is ended already')
    this.revision = 0
    const mergeCount = this.mergedCount
    if (mergeCount > 0) {
      const getKey = this.getKey
      if (mergeCount > this.count) { // it should be faster to delete vanished items
        const map = this.map
        let child = this.first
        while (child !== undefined)
          map.delete(getKey(child.self)), child = child.next
      }
      else { // it should be faster to recreate map using merging items
        const map = this.map = new Map<string | undefined, CollectionItem<T>>()
        let child = this.mergedFirst
        while (child !== undefined)
          map.set(getKey(child.self), child), child = child.next
      }
    }
    else // just create new empty map
      this.map = new Map<string | undefined, CollectionItem<T>>()
    const removed = this.first
    this.first = this.mergedFirst
    this.count = mergeCount
    this.mergedFirst = this.mergedLast = undefined
    this.mergedCount = 0
    this.strictNext = this.first
    return removed
  }

  tryMergeAsExisting(key: string): Item<T> | undefined {
    const rev = this.revision
    let item = this.strictNext
    let k = item ? this.getKey(item.self) : undefined
    if (k !== key) {
      item = this.map.get(key)
      k = item ? this.getKey(item.self) : undefined
    }
    if (item && k !== undefined) {
      if (item.collectionRevision === rev)
        throw new Error(`duplicate item id: ${key}`)
      item.collectionRevision = rev
      if (this.strict && item !== this.strictNext)
        item.selfMoveRevision = rev // is moved
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
      const last = this.mergedLast
      item.prev = last
      item.next = undefined
      if (last)
        this.mergedLast = last.next = item
      else
        this.mergedFirst = this.mergedLast = item
      this.mergedCount++
    }
    return item
  }

  mergeAsNewlyCreated(self: T): Item<T> {
    const item = new CollectionItem<T>(self, this.revision)
    this.map.set(this.getKey(self), item)
    const last = this.mergedLast
    if (last) {
      item.prev = last
      this.mergedLast = last.next = item
    }
    else
      this.mergedFirst = this.mergedLast = item
    this.mergedCount++
    return item
  }

  markAsMoved(item: Item<T>): void {
    const t = item as CollectionItem<T>
    t.isMoved = true
  }
}
