﻿
# **MergeList**

MergeList is a list providing fast merge of lists and detection
of changes (added, moved, removed items).

``` typescript
const items1 = ['Hello', 'Welcome', 'Bye', 'End']
const list = new MergeList<string>(true, s => s)
for (const x of items1)
  list.add(x)
// list.items: 'Hello', 'Welcome', 'Bye', 'End'

// Merge list2 with list1
const items2 = ['Added1', 'Bye', 'End', 'Added2', 'Hello', 'Added3']
list.beginMerge()
for (const x of etalon2)
  if (!list.claim(x))
    list.add(x, true)
list.endMerge(true)
// list.items: 'Added1', 'Bye', 'End', 'Added2', 'Hello', 'Added3'
// list.addedItems: 'Added1', 'Added2', 'Added3'
// list.removedItems: 'Welcome'
```

MergeList API:

``` typescript
interface MergeListItem<T> {
  readonly self: T
}

class MergeList<T> {
  readonly getKey: GetKey<T>
  readonly strict: boolean
  readonly count: number
  readonly addedCount: number
  readonly removedCount: number
  readonly isMergeInProgress: boolean

  lookup(key: string): MergeListItem<T> | undefined
  claim(key: string): MergeListItem<T> | undefined
  add(self: T, keepInAddedItems?: boolean): MergeListItem<T>
  remove(item: MergeListItem<T>, keepInRemovedItems?: boolean): void
  move(item: MergeListItem<T>, after: MergeListItem<T>): void
  beginMerge(): void
  endMerge(keepAddedAndRemovedItems?: boolean): void

  items(): Generator<MergeListItem<T>>
  addedItems(keep?: boolean): Generator<MergeListItem<T>>
  removedItems(keep?: boolean): Generator<MergeListItem<T>>
  isAdded(item: MergeListItem<T>): boolean
  isMoved(item: MergeListItem<T>): boolean
  isRemoved(item: MergeListItem<T>): boolean
  isCurrent(item: MergeListItem<T>): boolean
}
```