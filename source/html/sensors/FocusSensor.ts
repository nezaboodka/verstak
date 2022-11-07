// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2022 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { options, transactional, LoggingLevel, ToggleRef } from "reactronic"
import { objectHasMember } from "../../core/Utils"
import { grabElementDataList, SymDataForSensor } from "./DataForSensor"
import { HtmlElementSensor } from "./HtmlElementSensor"
import { WindowSensor } from "./WindowSensor"

export interface FocusModel {
  isEditMode: boolean
  onFocusIn?: (focus: FocusSensor) => void
  onFocusOut?: (focus: FocusSensor) => void
}

export interface ContextModel {
  contextToggle?: ToggleRef
  onContextIn?: (focus: FocusSensor) => void
  onContextOut?: (focus: FocusSensor) => void
}

export class FocusSensor extends HtmlElementSensor {
  activeData: unknown
  oldActiveData: unknown
  contextElementDataList: unknown[]

  constructor(windowSensor: WindowSensor) {
    super(undefined, windowSensor)
    this.activeData = undefined
    this.oldActiveData = undefined
    this.contextElementDataList = []
  }

  @transactional
  setActiveData(data: unknown, debugHint: string = ""): void {
    if (data !== this.activeData) {
      const activeData = this.activeData
      if (activeData !== undefined && objectHasMember<FocusModel>(activeData, "isEditMode")) {
        // console.log(`${activeData.constructor.name}.isEditMode = %cfalse`, 'color: #BB0000')
        activeData.isEditMode = false
        activeData.onFocusOut?.(this)
      }
      if (data !== undefined) {
        if (objectHasMember<FocusModel>(data, "isEditMode")) {
          // console.log(`${data.constructor.name}.isEditMode = %ctrue`, 'color: #00BB00')
          data.isEditMode = true
          data.onFocusIn?.(this)
        }
      }
      this.oldActiveData = activeData
      this.activeData = data
    }
  }

  @transactional
  listen(element: HTMLElement | undefined, enabled: boolean = true): void {
    const existing = this.sourceElement
    if (element !== existing) {
      if (existing) {
        existing.removeEventListener("focusin", this.onFocusIn.bind(this), { capture: true })
        existing.removeEventListener("focusout", this.onFocusOut.bind(this), { capture: true })
        existing.removeEventListener("mousedown", this.onMouseDown.bind(this), { capture: true })
      }
      this.sourceElement = element
      if (element && enabled) {
        element.addEventListener("focusin", this.onFocusIn.bind(this), { capture: true })
        element.addEventListener("focusout", this.onFocusOut.bind(this), { capture: true })
        element.addEventListener("mousedown", this.onMouseDown.bind(this), { capture: true })
      }
    }
  }

  reset(): void {
    this.preventDefault = false
    this.stopPropagation = false
    this.revision++
  }

  protected onFocusIn(e: FocusEvent): void {
    // console.group(`focusin [%c${(e.target as HTMLElement).id}%c]`, 'color: #44AAAA', 'color:')
    this.doFocusIn(e)
    this.setPreventDefaultAndStopPropagation(e)
    // console.groupEnd()
  }

  protected onFocusOut(e: FocusEvent): void {
    // console.group(`focusout [%c${(e.target as HTMLElement).id}%c]`, 'color: #44AAAA', 'color:')
    this.doFocusOut(e)
    this.setPreventDefaultAndStopPropagation(e)
    // console.groupEnd()
  }

  protected onMouseDown(e: MouseEvent): void {
    // console.group(`mousedown [%c${(e.target as HTMLElement).id}%c]`, 'color: #44AAAA', 'color:')
    this.doMouseDown(e)
    // console.groupEnd()
  }

  @transactional @options({ logging: LoggingLevel.Off })
  protected doFocusIn(e: FocusEvent): void {
    const path = e.composedPath()
    // Focus
    const { dataList: focusDataList, activeData: focusActiveData, window } = grabElementDataList(path, SymDataForSensor, "focus", this.elementDataList, false, e => document.activeElement === e)
    this.elementDataList = focusDataList
    this.setActiveData(focusActiveData)
    this.windowSensor?.setActiveWindow(window)
    // Context
    const { dataList: contextDataList } = grabElementDataList(path, SymDataForSensor, "context", this.contextElementDataList, true)
    this.contextElementDataList = toggleContextRefs(this, this.contextElementDataList, contextDataList)
    this.reset()
  }

  @transactional
  protected doFocusOut(e: FocusEvent): void {
    const isLosingFocus = e.relatedTarget === null
    if (isLosingFocus) {
      // console.log('[info]: browser is losing focus')
      const path = e.composedPath()
      // Focus
      const { dataList } = grabElementDataList(path, SymDataForSensor, "focus", this.elementDataList, true)
      this.elementDataList = dataList
      const filteredElementDataList = dataList.filter(x => x !== this.activeData)
      if (filteredElementDataList.length > 0) {
        // console.log('└─ [info]: focus data found')
        this.trySetEditMode(filteredElementDataList[0], "  └─")
      }
      else {
        // console.log('├─ [info]: no focus data found')
        const defaultData = this.getDefaultSensorData()
        if (defaultData?.focus !== undefined) {
          // console.log('└─ [info]: default data is used')
          this.trySetEditMode(defaultData.focus, "    └─")
        }
        else {
          // console.log('└─ [skip]: no default data found')
          this.setActiveData(undefined)
        }
        this.windowSensor?.setActiveWindow(defaultData?.window)
      }
      // Context
      this.contextElementDataList = toggleContextRefs(this, this.contextElementDataList, [])
      this.reset()
    }
    else {
      // console.log('[skip]: focus is not lost')
    }
  }

  @transactional @options({ logging: LoggingLevel.Off })
  protected doMouseDown(e: MouseEvent): void {
    const path = e.composedPath() as Array<HTMLElement>
    const isClickInsideTabIndexedElement =
      path.find(el => el !== document.body && el.tabIndex >= 0) !== undefined
    if (path.length > 0 && !isClickInsideTabIndexedElement) {
      // console.log('[info]: a path does not contain any editable elements')
      // Focus
      const { dataList } = grabElementDataList(path, SymDataForSensor, "focus", this.elementDataList, true)
      this.elementDataList = dataList
      if (dataList.length > 0) {
        this.trySetEditMode(dataList[0], "└─")
        e.preventDefault()
      }
      // Context
      const { dataList: contextDataList } = grabElementDataList(path, SymDataForSensor, "context", this.contextElementDataList, true)
      this.contextElementDataList = toggleContextRefs(this, this.contextElementDataList, contextDataList)
      this.reset()
    }
    else {
      // console.log('[skip]: editable element found')
    }
  }

  private trySetEditMode(candidateData: unknown, indent: string = ""): void {
    if (candidateData !== undefined && objectHasMember<FocusModel>(candidateData, "isEditMode")) {
      // console.log(`${indent}try focus: ${candidateData.constructor.name}.isEditMode = %ctrue`, 'color: #00BB00')
      candidateData.isEditMode = true
    }
  }
}

function toggleContextRefs(focusSensor: FocusSensor, existing: unknown[], updated: unknown[]): unknown[] {
  if (updated !== existing) {
    existing.forEach(x => {
      if (objectHasMember<ContextModel>(x, "contextToggle") && x.contextToggle && x.contextToggle.valueOn !== x.contextToggle.valueOff)
        x.contextToggle.variable = x.contextToggle.valueOff
      if (objectHasMember<ContextModel>(x, "onContextOut"))
        x.onContextOut?.(focusSensor)
    })
    updated.forEach(x => {
      if (objectHasMember<ContextModel>(x, "contextToggle") && x.contextToggle)
        x.contextToggle.variable = x.contextToggle.valueOn
      if (objectHasMember<ContextModel>(x, "onContextIn"))
        x.onContextIn?.(focusSensor)
    })
  }
  return updated
}
