// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import test from 'ava'
import { MergeList } from '../source/api'

test('Example', t => {
  const ml = new MergeList<string>(s => s, true)
  ml.add('Hello')
  ml.add('Welcome')
  for (const item of ml.items())
    console.log(item.self)
  t.is('Example', 'Example')
})
