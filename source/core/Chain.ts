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
  merging: number = 0
  next?: Chained<T> = undefined
  prev?: Chained<T> = undefined
  constructor(self: T) { this.self = self }
}

export interface ReadonlyChain<T> {
  readonly first?: Readonly<Chained<T>>
  readonly count: number
}

export class Chain<T> implements ReadonlyChain<T> {
  private readonly getKey: GetKey<T>
  private map = new Map<string | undefined, Chained<T>>()
  private merging: number = 0
  private mergingFirst?: Chained<T> = undefined
  private mergingLast?: Chained<T> = undefined
  private mergingCount: number = 0
  private likelyNextToMerge?: Chained<T> = undefined
  first?: Chained<T> = undefined
  count: number = 0
  get isMergeInProgress(): boolean { return this.merging > 0 }

  constructor(getKey: GetKey<T>) {
    this.getKey = getKey
  }

  beginMerge(id: number): void {
    if (this.isMergeInProgress)
      throw new Error('chain merge is not reentrant')
    this.merging = id
  }

  endMerge(): Chained<T> | undefined {
    if (!this.isMergeInProgress)
      throw new Error('chain merge is ended already')
    this.merging = 0
    const mergingCount = this.mergingCount
    if (mergingCount > 0) {
      const getKey = this.getKey
      if (mergingCount > this.count) { // it should be faster to delete vanished items
        const map = this.map
        let child = this.first
        while (child !== undefined)
          map.delete(getKey(child.self)), child = child.next
      }
      else { // it should be faster to recreate map using merging items
        const map = this.map = new Map<string | undefined, Chained<T>>()
        let child = this.mergingFirst
        while (child !== undefined)
          map.set(getKey(child.self), child), child = child.next
      }
    }
    else // just create new empty map
      this.map = new Map<string | undefined, Chained<T>>()
    const vanished = this.first
    this.first = this.mergingFirst
    this.count = mergingCount
    this.mergingFirst = this.mergingLast = undefined
    this.mergingCount = 0
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
      if (result.merging === this.merging)
        throw new Error(`duplicate item id: ${key}`)
      result.merging = this.merging
      this.likelyNextToMerge = result.next
      // Exclude from main sequence
      if (result.prev !== undefined)
        result.prev.next = result.next
      if (result.next !== undefined)
        result.next.prev = result.prev
      if (result === this.first)
        this.first = result.next
      this.count--
      // Include into merging sequence
      const last = this.mergingLast
      if (last) {
        result.prev = last
        result.next = undefined
        this.mergingLast = last.next = result
      }
      else {
        result.prev = result.next = undefined
        this.mergingFirst = this.mergingLast = result
      }
      this.mergingCount++
    }
    return result
  }

  mergeAsNewlyCreated(item: T): Chained<T> {
    const chained = new Chained<T>(item)
    chained.merging = this.merging
    this.map.set(this.getKey(item), chained)
    const last = this.mergingLast
    if (last) {
      chained.prev = last
      this.mergingLast = last.next = chained
    }
    else
      this.mergingFirst = this.mergingLast = chained
    this.mergingCount++
    return chained
  }
}
