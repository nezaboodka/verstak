// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

// SequenceReconciler

export interface SequenceReconcilerItem<K, T> {
  readonly id: K
  readonly isFinalized: boolean
  readonly reconciliationRevision: number
  next?: T
  prev?: T
}

export class SequenceReconciler<K, T extends SequenceReconcilerItem<K, T>> {
  namespace: Map<K, T> = new Map<K, T>()
  likelyNextToRetain?: T = undefined
  retainedFirst?: T = undefined
  retainedLast?: T = undefined
  retainedCount: number = -1
  first?: T = undefined
  count: number = 0

  get isReconciling(): boolean { return this.retainedCount >= 0 }
  set isReconciling(value: boolean) {
    if (value) {
      if (this.retainedCount >= 0)
        throw new Error('sequence reconciler is not reentrant')
      this.retainedCount = 0
      this.likelyNextToRetain = this.first
    }
    else if (this.retainedCount >= 0) {
      this.first = this.retainedFirst
      this.count = this.retainedCount
      this.retainedFirst = this.retainedLast = undefined
      this.retainedCount = -1
    }
  }

  tryToRetainAsExisting(id: K): T | undefined {
    let result = this.likelyNextToRetain
    if (result?.id !== id)
      result = this.namespace.get(id)
    if (result && !result.isFinalized) {
      this.likelyNextToRetain = result.next
      // Exclude from current sequence
      if (result.prev !== undefined)
        result.prev.next = result.next
      if (result.next !== undefined)
        result.next.prev = result.prev
      if (result === this.first)
        this.first = result.next
      this.count--
      // Include into uphold sequence
      const last = this.retainedLast
      if (last) {
        result.prev = last
        result.next = undefined
        this.retainedLast = last.next = result
      }
      else {
        result.prev = result.next = undefined
        this.retainedFirst = this.retainedLast = result
      }
      this.retainedCount++
    }
    return result
  }

  retainAsNewlyCreated(item:T): void {
    const last = this.retainedLast
    if (last) {
      item.prev = last
      this.retainedLast = last.next = item
    }
    else
      this.retainedFirst = this.retainedLast = item
    this.retainedCount++
  }
}
