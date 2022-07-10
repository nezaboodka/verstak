// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import test from 'ava'
import { MergeList, MergeListItem } from '../source/core/MergeList'

test('MergeList', t => {
  // Basic
  const ml = new MergeList<string>(s => s, true)
  const etalon1 = ['Hello', 'Welcome', 'Bye']
  for (const x of etalon1)
    ml.add(x)
  t.true(compare(ml.items(), etalon1))

  // Merge
  const etalon2 = ['Added1', 'Hello', 'Added2', 'Bye', 'Added3']
  ml.beginMerge()
  for (const x of etalon2)
    if (!ml.tryMerge(x))
      ml.add(x)
  ml.endMerge(true)
  t.is(ml.count, 5)
  t.is(ml.removedItemCount, 1)
  t.is(ml.addedItemCount, 3)
  t.true(compare(ml.removedItems(), ['Welcome']))
  t.true(compare(ml.addedItems(), ['Added1', 'Added2', 'Added3']))
  t.true(compare(ml.items(), etalon2))
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
