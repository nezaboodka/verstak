// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import test from 'ava'
import { MergeList, MergeListItem } from '../source/core/MergeList'

test('MergeList', t => {
  const etalon1 = ['Hello', 'Welcome', 'Bye', 'End']
  const etalon2 = ['Added1', 'Bye', 'End', 'Added2', 'Hello', 'Added3']

  // Basic
  const list = new MergeList<string>(s => s, true)
  for (const x of etalon1)
    list.add(x)
  t.is(list.count, 4)
  t.is(list.addedCount, 0)
  t.is(list.removedCount, 0)
  t.true(compare(list.items(), etalon1))

  // Merge etalon2 with etalon1
  list.beginMerge()
  for (const x of etalon2)
    if (!list.tryMerge(x))
      list.add(x, true)
  t.is(list.count, 7)
  list.endMerge(true)
  t.is(list.count, 6)
  t.true(compare(list.items(), etalon2))
  t.is(list.removedCount, 1)
  t.true(compare(list.removedItems(), ['Welcome']))
  t.is(list.addedCount, 3)
  t.true(compare(list.addedItems(), ['Added1', 'Added2', 'Added3']))
  t.true(list.isAdded(list.lookup('Added1')!))
  t.true(list.isAdded(list.lookup('Added2')!))
  t.true(list.isAdded(list.lookup('Added3')!))
  t.true(list.isMoved(list.lookup('Bye')!))
  t.false(list.isMoved(list.lookup('End')!))
  t.true(list.isMoved(list.lookup('Hello')!))
})

function compare(list: Generator<MergeListItem<string>>, array: Array<string>): boolean {
  let result = true
  let i = 0
  for (const item of list) {
    if (item.self !== array[i]) {
      result = false
      break
    }
    i++
  }
  return result && i === array.length
}
