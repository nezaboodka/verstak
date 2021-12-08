// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, standalone, TraceLevel, transaction } from 'reactronic'
import { EmptyDataArray, grabElementData } from '../DataForSensor'
import { SymDataForSensor } from '../HtmlApiExt'
import { extractModifierKeys, KeyboardModifiers } from './KeyboardSensor'
import { PointerSensor } from './PointerSensor'
import { WindowSensor } from './WindowSensor'

export class ClickSensor extends PointerSensor {
  clicked: number
  doubleClicked: number
  auxClicked: number

  constructor(windowSensor: WindowSensor) {
    super(windowSensor)
    this.clicked = 0
    this.doubleClicked = 0
    this.auxClicked = 0
  }

  @transaction
  listen(element: HTMLElement | undefined, enabled: boolean = true): void {
    const existing = this.sourceElement
    if (element !== existing) {
      if (existing) {
        existing.removeEventListener('click', this.onClick.bind(this), { capture: true })
        existing.removeEventListener('dblclick', this.onDblClick.bind(this), { capture: true })
        existing.removeEventListener('auxclick', this.onAuxClick.bind(this), { capture: true })
      }
      this.sourceElement = element
      if (element && enabled) {
        element.addEventListener('click', this.onClick.bind(this), { capture: true })
        element.addEventListener('dblclick', this.onDblClick.bind(this), { capture: true })
        element.addEventListener('auxclick', this.onAuxClick.bind(this), { capture: true })
      }
    }
  }

  reset(): void {
    this.doReset()
  }

  protected onClick(e: MouseEvent): void {
    this.doClick(e)
    this.setPreventDefaultAndStopPropagation(e)
  }

  protected onDblClick(e: MouseEvent): void {
    this.doDoubleClick(e)
    this.setPreventDefaultAndStopPropagation(e)
  }

  protected onAuxClick(e: MouseEvent): void {
    this.doAuxClick(e)
    this.setPreventDefaultAndStopPropagation(e)
  }

  @transaction @options({ trace: TraceLevel.Silent })
  protected doClick(e: MouseEvent): void {
    this.updateSensorData(e)
    this.clicked++
  }

  @transaction @options({ trace: TraceLevel.Silent })
  protected doDoubleClick(e: MouseEvent): void {
    this.updateSensorData(e)
    this.doubleClicked++
  }

  @transaction @options({ trace: TraceLevel.Silent })
  protected doAuxClick(e: MouseEvent): void {
    this.updateSensorData(e)
    this.auxClicked++
  }

  @transaction @options({ trace: TraceLevel.Silent })
  protected doReset(): void {
    this.preventDefault = false
    this.stopPropagation = false
    this.elementDataList = EmptyDataArray
    this.elementDataUnderPointer = EmptyDataArray
    this.positionX = Infinity
    this.positionY = Infinity
    this.modifiers = KeyboardModifiers.None
    this.clicked = 0
    this.doubleClicked = 0
    this.auxClicked = 0
  }

  protected updateSensorData(e: MouseEvent): void {
    this.preventDefault = false
    this.stopPropagation = false
    const path = e.composedPath()
    const { data, window } = grabElementData(path, SymDataForSensor, 'click', this.elementDataList)
    this.elementDataList = data
    const elements = document.elementsFromPoint(e.clientX, e.clientY)
    this.elementDataUnderPointer = grabElementData(elements, SymDataForSensor, 'click', this.elementDataUnderPointer).data
    this.modifiers = extractModifierKeys(e)
    this.positionX = e.clientX
    this.positionY = e.clientY
    this.revision++
    standalone(() => {
      this.windowSensor?.setActiveWindow(window, 'click')
    })
  }

  // @reaction
  // protected debug(): void {
  //   console.log(`clicked = ${this.clicked}, doubleClicked: ${this.doubleClicked}, auxClicked = ${this.auxClicked}`)
  // }
}
