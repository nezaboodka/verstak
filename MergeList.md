
# **MergedList**

MergedList provides fast merge of lists and detection of
differences/changes after the merge: which items are
added, moved, and removed.

``` typescript
const list = new MergedList<string>(true, s => s)

const example1 = ['Hello', 'Welcome', 'Bye', 'End']
for (const x of example1)
  list.add(x)

// list.items: Hello, Welcome, Bye, End

const example2 = ['Added1', 'Bye', 'End', 'Added2', 'Hello', 'Added3']
list.beginMerge()
for (const x of example2)
  if (!list.claim(x)) // try to link with an existing item
    list.add(x, true) // otherwise add item as a new one
list.endMerge(true)

// list.items: Added1, Bye, End, Added2, Hello, Added3
// list.addedItems: Added1, Added2, Added3
// list.removedItems: Welcome
// list.isAdded: Added1, Added2, Added3
// list.isMoved: Bye, Hello
// list.isRemoved: Welcome
```

MergedList API:

``` typescript
interface MergedItem<T> {
  readonly self: T
}

class MergedList<T> {
  readonly getKey: GetKey<T>
  readonly strict: boolean
  readonly count: number
  readonly addedCount: number
  readonly removedCount: number
  readonly isMergeInProgress: boolean

  lookup(key: string): MergedItem<T> | undefined
  claim(key: string): MergedItem<T> | undefined
  add(self: T, keepInAddedItems?: boolean): MergedItem<T>
  remove(item: MergedItem<T>, keepInRemovedItems?: boolean): void
  move(item: MergedItem<T>, after: MergedItem<T>): void
  beginMerge(): void
  endMerge(keepAddedAndRemovedItems?: boolean): void

  items(): Generator<MergedItem<T>>
  addedItems(keep?: boolean): Generator<MergedItem<T>>
  removedItems(keep?: boolean): Generator<MergedItem<T>>
  isAdded(item: MergedItem<T>): boolean
  isMoved(item: MergedItem<T>): boolean
  isRemoved(item: MergedItem<T>): boolean
  isCurrent(item: MergedItem<T>): boolean
}
```
