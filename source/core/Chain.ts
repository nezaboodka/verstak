// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

// Chain

export type GetName<T = unknown> = (item: T) => string | undefined

export class Chained<T> {
  readonly item: T
  merging: number = 0
  next?: Chained<T> = undefined
  prev?: Chained<T> = undefined
  constructor(item: T) { this.item = item }
}

export interface ReadonlyChain<T> {
  readonly first?: Readonly<Chained<T>>
  readonly count: number
}

export class Chain<T> implements ReadonlyChain<T> {
  private readonly getName: GetName<T>
  private namespace = new Map<string | undefined, Chained<T>>()
  private merging: number = 0
  private mergingFirst?: Chained<T> = undefined
  private mergingLast?: Chained<T> = undefined
  private mergingCount: number = 0
  private likelyNextToMerge?: Chained<T> = undefined
  first?: Chained<T> = undefined
  count: number = 0
  get isMergeInProgress(): boolean { return this.merging > 0 }

  constructor(getName: GetName<T>) {
    this.getName = getName
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
      const getName = this.getName
      if (mergingCount > this.count) { // it should be faster to delete vanished items from namespace
        const namespace = this.namespace
        let child = this.first
        while (child !== undefined)
          namespace.delete(getName(child.item)), child = child.next
      }
      else { // it should be faster to recreate namespace with merging items only
        const namespace = this.namespace = new Map<string | undefined, Chained<T>>()
        let child = this.mergingFirst
        while (child !== undefined)
          namespace.set(getName(child.item), child), child = child.next
      }
    }
    else // just create new empty namespace
      this.namespace = new Map<string | undefined, Chained<T>>()
    const vanished = this.first
    this.first = this.mergingFirst
    this.count = mergingCount
    this.mergingFirst = this.mergingLast = undefined
    this.mergingCount = 0
    this.likelyNextToMerge = this.first
    return vanished
  }

  tryMergeAsExisting(name: string): Chained<T> | undefined {
    let result = this.likelyNextToMerge
    let n = result ? this.getName(result.item) : undefined
    if (n !== name) {
      result = this.namespace.get(name)
      n = result ? this.getName(result.item) : undefined
    }
    if (result && n !== undefined) {
      if (result.merging === this.merging)
        throw new Error(`duplicate node id: ${name}`)
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
    this.namespace.set(this.getName(item), chained)
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
