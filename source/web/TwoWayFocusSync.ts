// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2020 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front-web/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { Field, FieldToggle } from 'reactronic'
import { RxFragment } from '../core'

export function TwoWayFocusSync(
  id: string,
  target: HTMLElement,
  fFocusToggle: FieldToggle<any>,
  setNativeFocus?: (() => void)
): void {
  let ei = target.eventInfo
  if (!ei)
    ei = target.eventInfo = {}
  ei.focus = fFocusToggle
  if (setNativeFocus === undefined)
    setNativeFocus = () => target.focus()
  RxFragment(id, { fFocusToggle }, (e, o) => {
    const f = fFocusToggle.value
    const f1 = fFocusToggle.value1
    const active = f === fFocusToggle.value1 || (
      f instanceof Field && f1 instanceof Field && Field.sameFields(f, f1))
    // console.log(`${(entity as any).constructor.name}.${member.toString()} === ${entity[member]} => ${member}:${activeValue}.setFocused(${active}) // ${Reactronic.why()}`)
    active && setNativeFocus && setNativeFocus()
  })
}
