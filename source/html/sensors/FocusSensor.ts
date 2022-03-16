// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-dom/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, transaction, LoggingLevel, ToggleRef } from 'reactronic'
import { objectHasMember } from '../../core/Utils'
import { grabElementDataList, SymDataForSensor } from './DataForSensor'
import { HtmlElementSensor } from './HtmlElementSensor'
import { WindowSensor } from './WindowSensor'

export interface Focusable {
  isFocused: boolean
  onFocusIn?: (focus: FocusSensor) => void
  onFocusOut?: (focus: FocusSensor) => void
}

export class FocusSensor extends HtmlElementSensor {
  activeData: unknown
  oldActiveData: unknown
  contextElementDataList: unknown[]

  debug: string

  constructor(windowSensor: WindowSensor) {
    super(undefined, windowSensor)
    this.activeData = undefined
    this.oldActiveData = undefined
    this.contextElementDataList = []
    this.debug = ''
  }

  @transaction
  setActiveData(data: unknown, debugHint: string = ''): void {
    if (data !== this.activeData) {
      // const debug = nonreactive(() => this.debug)
      // const debugColor = debug.includes('focusin') ? '#00BB00' : (debug.includes('pointerdown') ? 'yellow' : '#BB0000')
      // debug && nonreactive(() => console.group(`%chandleFocus [${debug}]`, `color: ${debugColor}`))
      const activeData = this.activeData
      if (activeData !== undefined && objectHasMember<Focusable>(activeData, 'isFocused')) {
        // debug && nonreactive(() => console.log(`%c[activeData] ${activeData.constructor.name}.isFocused: ${activeData.isFocused} -> false`, `color: ${debugColor}`))
        activeData.isFocused = false
        activeData.onFocusOut?.(this)
      }
      if (data !== undefined) {
        if (objectHasMember<Focusable>(data, 'isFocused')) {
          // debug && nonreactive(() => console.log(`%c[data] ${data.constructor.name}.isFocused: ${data.isFocused} -> true`, `color: ${debugColor}`))
          data.isFocused = true
          data.onFocusIn?.(this)
        }
      }
      // debug && console.groupEnd()
      this.oldActiveData = activeData
      this.activeData = data
    }
  }

  @transaction
  listen(element: HTMLElement | undefined, enabled: boolean = true): void {
    const existing = this.sourceElement
    if (element !== existing) {
      if (existing) {
        existing.removeEventListener('focusin', this.onFocusIn.bind(this), { capture: true })
        existing.removeEventListener('focusout', this.onFocusOut.bind(this), { capture: true })
        existing.removeEventListener('pointerdown', this.onPointerDown.bind(this), { capture: true })
      }
      this.sourceElement = element
      if (element && enabled) {
        element.addEventListener('focusin', this.onFocusIn.bind(this), { capture: true })
        element.addEventListener('focusout', this.onFocusOut.bind(this), { capture: true })
        element.addEventListener('pointerdown', this.onPointerDown.bind(this), { capture: true })
      }
    }
  }

  reset(): void {
    this.preventDefault = false
    this.stopPropagation = false
    this.revision++
  }

  protected onFocusIn(e: FocusEvent): void {
    // console.log(`focusin -> ${(e.target as HTMLElement).id}`)
    this.doFocusIn(e)
    this.setPreventDefaultAndStopPropagation(e)
  }

  protected onFocusOut(e: FocusEvent): void {
    // console.log(`focusout -> ${(e.target as HTMLElement).id}`)
    this.doFocusOut(e)
    this.setPreventDefaultAndStopPropagation(e)
  }

  protected onPointerDown(e: PointerEvent): void {
    // console.log(`pointerdown -> ${(e.target as HTMLElement).id}`)
    this.doPointerDown(e)
  }

  @transaction @options({ logging: LoggingLevel.Off })
  protected doFocusIn(e: FocusEvent): void {
    this.debug = `focusin -> ${(e.target as HTMLElement).id}`
    const path = e.composedPath()
    // Focus
    const { dataList: focusDataList, activeData: focusActiveData, window } = grabElementDataList(path, SymDataForSensor, 'focus', this.elementDataList, false, e => document.activeElement === e)
    this.elementDataList = focusDataList
    this.setActiveData(focusActiveData)
    this.windowSensor?.setActiveWindow(window)
    // Context
    const { dataList: contextDataList } = grabElementDataList(path, SymDataForSensor, 'context', this.contextElementDataList, true)
    this.contextElementDataList = toggleFocusRefs(this.contextElementDataList, contextDataList)
    this.reset()
  }

  @transaction
  protected doFocusOut(e: FocusEvent): void {
    this.debug = `focusout -> ${(e.target as HTMLElement).id}`
    const isLosingFocus = e.relatedTarget === null
    if (isLosingFocus) {
      const path = e.composedPath()
      // Focus
      const { dataList } = grabElementDataList(path, SymDataForSensor, 'focus', this.elementDataList, true)
      this.elementDataList = dataList
      const filteredElementDataList = dataList.filter(x => x !== this.activeData)
      if (filteredElementDataList.length > 0) {
        this.trySetFocus(filteredElementDataList[0])
      }
      else {
        const defaultData = this.getDefaultSensorData()
        if (defaultData?.focus !== undefined) {
          this.trySetFocus(defaultData.focus)
        }
        else {
          this.setActiveData(undefined)
        }
        this.windowSensor?.setActiveWindow(defaultData?.window)
        this.debug = 'focusout (no focus data found)'
      }
      // Context
      this.contextElementDataList = toggleFocusRefs(this.contextElementDataList, [])
      this.reset()
    }
  }

  @transaction @options({ logging: LoggingLevel.Off })
  protected doPointerDown(e: PointerEvent): void {
    this.debug = `pointerdown -> ${(e.target as HTMLElement).id}`
    const path = e.composedPath()
    const isFirstElementFocusable = ((path[0] as HTMLElement)?.tabIndex ?? -1) >= 0
    if (path.length > 0 && !isFirstElementFocusable) {
      // Focus
      const { dataList } = grabElementDataList(path, SymDataForSensor, 'focus', this.elementDataList, true)
      this.elementDataList = dataList
      if (dataList.length > 0) {
        this.trySetFocus(dataList[0])
        e.preventDefault()
      }
      // Context
      const { dataList: contextDataList } = grabElementDataList(path, SymDataForSensor, 'context', this.contextElementDataList, true)
      this.contextElementDataList = toggleFocusRefs(this.contextElementDataList, contextDataList)
      this.reset()
    }
  }

  private trySetFocus(candidateData: unknown): void {
    // const debugColor = debug.includes('focusin') ? '#00BB00' : (debug.includes('pointerdown') ? 'yellow' : '#BB0000')
    // debug && nonreactive(() => console.group(`%chandleFocusNext [${debug}]`, `color: ${debugColor}`))
    if (candidateData !== undefined && objectHasMember<Focusable>(candidateData, 'isFocused')) {
      // debug && nonreactive(() => console.log(`%c[next active] ${data.constructor.name}.isFocused: ${data.isFocused} -> true`, `color: ${debugColor}`))
      candidateData.isFocused = true
    }
    // debug && console.groupEnd()
  }
}

function toggleFocusRefs(existing: unknown[], updated: unknown[]): unknown[] {
  if (updated !== existing) {
    existing.forEach(f => {
      if (f instanceof ToggleRef && f.valueOn !== f.valueOff)
        f.value = f.valueOff
    })
    updated.forEach(x => {
      if (x instanceof ToggleRef)
        x.value = x.valueOn
    })
  }
  return updated
}
