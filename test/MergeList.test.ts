// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import test from 'ava'
import { MergeList } from '../source/core/MergeList'

test('MergeList', t => {
  const ml = new MergeList<string>(s => s, true)
  const etalon1 = ['Hello', 'Welcome', 'Bye']
  for (const x of etalon1)
    ml.add(x)
  let i = 0
  for (const item of ml.items())
    t.is(item.self, etalon1[i++])

  const etalon2 = ['Added1', 'Hello', 'Bye', 'Added2']
  ml.beginMerge()
  for (const x of etalon2)
    if (!ml.tryMerge(x))
      ml.add(x)
  ml.endMerge(true)
  t.is(ml.count, 4)
  t.is(ml.removedItemCount, 1)
  t.is(ml.addedItemCount, 2)
  for (const item of ml.removedItems())
    t.is(item.self, 'Welcome')
  i = 1
  for (const item of ml.addedItems()) {
    t.is(item.self, `Added${i++}`)
  }
  i = 0
  for (const item of ml.items())
    t.is(item.self, etalon2[i++])
})
