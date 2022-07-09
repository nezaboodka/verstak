// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

// Chain

export type GetKey<T = unknown> = (item: T) => string | undefined

export interface Chained<T> {
  readonly self: T
  readonly chainRevision: number
  readonly orderRevision: number
  next?: Chained<T>
  prev?: Chained<T>
  readonly after?: Chained<T> | undefined
}

export class ChainItem<T> implements Chained<T> {
  readonly self: T
  chainRevision: number
  orderRevision: number
  next?: ChainItem<T> = undefined
  prev?: ChainItem<T> = undefined
  after?: ChainItem<T> | undefined = this
  constructor(self: T, revision: number) {
    this.self = self
    this.chainRevision = revision
    this.orderRevision = revision
  }
}

export interface ReadonlyChain<T> {
  readonly revision: number
  readonly first?: Readonly<Chained<T>>
  readonly count: number
}

export class Chain<T> implements ReadonlyChain<T> {
  private readonly getKey: GetKey<T>
  readonly ordered: boolean
  private map = new Map<string | undefined, ChainItem<T>>()
  revision: number = 0
  private mergedFirst?: ChainItem<T> = undefined
  private mergedLast?: ChainItem<T> = undefined
  private mergedCount: number = 0
  private likelyNext?: ChainItem<T> = undefined
  first?: ChainItem<T> = undefined
  count: number = 0

  constructor(getKey: GetKey<T>, ordered: boolean) {
    this.getKey = getKey
    this.ordered = ordered
  }

  beginMerge(revision: number): void {
    if (this.revision > 0)
      throw new Error('chain merge is not reentrant')
    this.revision = revision
  }

  endMerge(): Chained<T> | undefined {
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
        const map = this.map = new Map<string | undefined, Chained<T>>()
        let child = this.mergedFirst
        while (child !== undefined)
          map.set(getKey(child.self), child), child = child.next
      }
    }
    else // just create new empty map
      this.map = new Map<string | undefined, Chained<T>>()
    const vanished = this.first
    this.first = this.mergedFirst
    this.count = mergeCount
    this.mergedFirst = this.mergedLast = undefined
    this.mergedCount = 0
    this.likelyNext = this.first
    return vanished
  }

  tryMergeAsExisting(key: string): Chained<T> | undefined {
    let result = this.likelyNext
    let k = result ? this.getKey(result.self) : undefined
    if (k !== key) {
      result = this.map.get(key)
      k = result ? this.getKey(result.self) : undefined
    }
    if (result && k !== undefined) {
      const rev = this.revision
      if (result.chainRevision === rev)
        throw new Error(`duplicate item id: ${key}`)
      result.chainRevision = rev
      this.likelyNext = result.next
      // Exclude from main sequence
      if (result.prev !== undefined)
        result.prev.next = result.next
      if (result.next !== undefined)
        result.next.prev = result.prev
      if (result === this.first)
        this.first = result.next
      this.count--
      // Include into merged sequence
      const last = this.mergedLast
      result.prev = last
      result.next = undefined
      if (last)
        this.mergedLast = last.next = result
      else
        this.mergedFirst = this.mergedLast = result
      this.mergedCount++
    }
    return result
  }

  mergeAsNewlyCreated(self: T): Chained<T> {
    const chained = new ChainItem<T>(self, this.revision)
    this.map.set(this.getKey(self), chained)
    const last = this.mergedLast
    if (last) {
      chained.prev = last
      this.mergedLast = last.next = chained
    }
    else
      this.mergedFirst = this.mergedLast = chained
    this.mergedCount++
    return chained
  }
}
