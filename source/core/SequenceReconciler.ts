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
  reconciliationRevision: number
  next?: T
  prev?: T
}

export class SequenceReconciler<K, T extends SequenceReconcilerItem<K, T>> {
  revision: number = ~0
  namespace: Map<K, T> = new Map<K, T>()
  likelyNextToRetain?: T = undefined
  retainedFirst?: T = undefined
  retainedLast?: T = undefined
  retainedCount: number = 0
  first?: T = undefined
  count: number = 0

  get isReconciling(): boolean { return this.revision > ~0 }

  begin(revision: number): void {
    if (this.isReconciling)
      throw new Error('sequence reconciler is opened already')
    this.revision = revision
    this.retainedFirst = this.retainedLast = undefined
    this.retainedCount = 0
    this.likelyNextToRetain = this.first
  }

  end(): void {
    if (!this.isReconciling)
      throw new Error('sequence reconciler is closed already')
    const namespace = this.namespace
    const count = this.count
    const retained = this.retainedCount
    if (retained > 0) {
      if (retained > count) {
        let x = this.first
        while (x !== undefined)
          namespace.delete(x.id), x = x.next
      }
      else {
        let x = this.retainedFirst
        while (x !== undefined)
          namespace.set(x.id, x), x = x.next
      }
    }
    else
      this.namespace = new Map<K, T>()
    this.first = this.retainedFirst
    this.count = retained
  }

  tryToRetainExisting(id: K): T | undefined {
    let result = this.likelyNextToRetain
    if (result?.id !== id)
      result = this.namespace.get(id)
    if (result && !result.isFinalized) {
      if (result.reconciliationRevision === this.revision)
        throw new Error(`duplicate item id: ${id}`)
      result.reconciliationRevision = this.revision
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

  retainNewlyCreated(item: T): void {
    item.reconciliationRevision = this.revision
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
