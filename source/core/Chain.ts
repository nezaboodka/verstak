// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

// Chain

export type GetKey<T = unknown> = (item: T) => string | undefined

export class Chained<T> {
  readonly self: T
  stamp: number = 0
  next?: Chained<T> = undefined
  prev?: Chained<T> = undefined
  after?: Chained<T> | undefined = this
  reordering: boolean = true
  constructor(self: T) { this.self = self }
}

export interface ReadonlyChain<T> {
  readonly first?: Readonly<Chained<T>>
  readonly count: number
}

export class Chain<T> implements ReadonlyChain<T> {
  private readonly getKey: GetKey<T>
  private map = new Map<string | undefined, Chained<T>>()
  private stamp: number = 0
  private mergedFirst?: Chained<T> = undefined
  private mergedLast?: Chained<T> = undefined
  private mergedCount: number = 0
  private likelyNextToMerge?: Chained<T> = undefined
  first?: Chained<T> = undefined
  count: number = 0
  get isMergeInProgress(): boolean { return this.stamp > 0 }

  constructor(getKey: GetKey<T>) {
    this.getKey = getKey
  }

  beginMerge(stamp: number): void {
    if (this.isMergeInProgress)
      throw new Error('chain merge is not reentrant')
    this.stamp = stamp
  }

  endMerge(): Chained<T> | undefined {
    if (!this.isMergeInProgress)
      throw new Error('chain merge is ended already')
    this.stamp = 0
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
    this.likelyNextToMerge = this.first
    return vanished
  }

  tryMergeAsExisting(key: string): Chained<T> | undefined {
    let result = this.likelyNextToMerge
    let n = result ? this.getKey(result.self) : undefined
    if (n !== key) {
      result = this.map.get(key)
      n = result ? this.getKey(result.self) : undefined
    }
    if (result && n !== undefined) {
      if (result.stamp === this.stamp)
        throw new Error(`duplicate item id: ${key}`)
      result.stamp = this.stamp
      this.likelyNextToMerge = result.next
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
      if (last) {
        result.prev = last
        result.next = undefined
        this.mergedLast = last.next = result
      }
      else {
        result.prev = result.next = undefined
        this.mergedFirst = this.mergedLast = result
      }
      this.mergedCount++
    }
    return result
  }

  mergeAsNewlyCreated(item: T): Chained<T> {
    const chained = new Chained<T>(item)
    chained.stamp = this.stamp
    this.map.set(this.getKey(item), chained)
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
