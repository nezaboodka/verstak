// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2026 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { H, V } from "../El.js"
import { StylingClassNameByAlignmentHorizontal, StylingClassNameByAlignmentVertical, StylingClassNameByAlignmentVerticalRowWise, StylingClassNameBySelfAlignmentHorizontal, StylingClassNameBySelfAlignmentVertical, StylingClassNameByPartitionAlignmentVertical } from "../ElDriver.js"

export function acquireVerstakStyleSheet(): void {
  const existing = findStyleByTitle("v5k")
  if (existing === undefined) {
    const style = document.createElement("style")
    style.title = "v5k"
    style.innerHTML = VerstakStyleSheetCode
    const head = document.getElementsByTagName("head")[0]
    head.appendChild(style)
  }
}

function findStyleByTitle(title: string): StyleSheet | undefined {
  const styles = document.styleSheets
  for (let i = 0, l = styles.length; i < l; i++) {
    const s = styles[i]
    if (s.disabled)
      continue
    if (s.title === title)
      return s
  }
  return undefined
}

const VerstakStyleSheetCode =
`
.v5k-app {
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  border: none;
  box-sizing: border-box;
}

.v5k-element {
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  justify-content: center;
  text-align: center;
}

.v5k-element > .v5k-part {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

/* Children Alignment */

.v5k-element.${StylingClassNameByAlignmentVertical[V.center]} {
  justify-content: center;
}

.v5k-element.${StylingClassNameByAlignmentVertical[V.top]} {
  justify-content: start;
}

.v5k-element.${StylingClassNameByAlignmentVertical[V.bottom]} {
  justify-content: end;
}

.v5k-element.${StylingClassNameByAlignmentVertical[V.stretch]} > .v5k-part,
.v5k-element.${StylingClassNameByAlignmentVertical[V.stretchAndFix]} > .v5k-part {
  flex-grow: 1;
  align-items: stretch;
}

.v5k-element.${StylingClassNameByAlignmentVerticalRowWise[V.center]} > .v5k-part {
  align-items: center;
}

.v5k-element.${StylingClassNameByAlignmentVerticalRowWise[V.top]} > .v5k-part {
  align-items: start;
}

.v5k-element.${StylingClassNameByAlignmentVerticalRowWise[V.bottom]} > .v5k-part {
  align-items: end;
}

.v5k-element.${StylingClassNameByAlignmentVerticalRowWise[V.stretch]} > .v5k-part,
.v5k-element.${StylingClassNameByAlignmentVerticalRowWise[V.stretchAndFix]} > .v5k-part {
  align-items: stretch;
}

.v5k-element.${StylingClassNameByAlignmentHorizontal[H.center]} {
  text-align: center;
}

.v5k-element.${StylingClassNameByAlignmentHorizontal[H.center]} > .v5k-part {
  justify-content: center;
}

.v5k-element.${StylingClassNameByAlignmentHorizontal[H.left]} {
  text-align: left;
}

.v5k-element.${StylingClassNameByAlignmentHorizontal[H.left]} > .v5k-part {
  justify-content: start;
}

.v5k-element.${StylingClassNameByAlignmentHorizontal[H.right]} {
  text-align: right;
}

.v5k-element.${StylingClassNameByAlignmentHorizontal[H.right]} > .v5k-part {
  justify-content: end;
}

.v5k-element.${StylingClassNameByAlignmentHorizontal[H.stretch]},
.v5k-element.${StylingClassNameByAlignmentHorizontal[H.stretchAndFix]} {
  text-align: justify;
}

.v5k-element.${StylingClassNameByAlignmentHorizontal[H.stretch]} > .v5k-part > *,
.v5k-element.${StylingClassNameByAlignmentHorizontal[H.stretchAndFix]} > .v5k-part > * {
  flex-grow: 1;
}

/* Partition Alignment */

.v5k-part.${StylingClassNameByPartitionAlignmentVertical[V.center]} {
  justify-self: center;
}

.v5k-part.${StylingClassNameByPartitionAlignmentVertical[V.top]} {
  justify-self: start;
}

.v5k-part.${StylingClassNameByPartitionAlignmentVertical[V.bottom]} {
  justify-self: end;
}

.v5k-part.${StylingClassNameByPartitionAlignmentVertical[V.stretch]},
.v5k-part.${StylingClassNameByPartitionAlignmentVertical[V.stretchAndFix]} {
  flex-grow: 1;
  justify-self: stretch;
}

/* Self Alignment */

.v5k-element.${StylingClassNameBySelfAlignmentVertical[V.center]} {
  align-self: center;
}

.v5k-element.${StylingClassNameBySelfAlignmentVertical[V.top]} {
  align-self: start;
}

.v5k-element.${StylingClassNameBySelfAlignmentVertical[V.bottom]} {
  align-self: end;
}

.v5k-element.${StylingClassNameBySelfAlignmentVertical[V.stretch]},
.v5k-element.${StylingClassNameBySelfAlignmentVertical[V.stretchAndFix]} {
  align-self: stretch;
}

.v5k-element.${StylingClassNameBySelfAlignmentHorizontal[H.center]} {
  justify-self: center;
}

.v5k-element.${StylingClassNameBySelfAlignmentHorizontal[H.left]} {
  justify-self: start;
}

.v5k-element.${StylingClassNameBySelfAlignmentHorizontal[H.right]} {
  justify-self: end;
}

.v5k-element.${StylingClassNameBySelfAlignmentHorizontal[H.stretch]},
.v5k-element.${StylingClassNameBySelfAlignmentHorizontal[H.stretchAndFix]} {
  flex-grow: 1;
  justify-self: stretch;
}

/* Table */

.v5k-table {
  display: grid;
  flex-basis: 0;
  grid-auto-rows: minmax(min-content, 1fr);
  grid-auto-columns: minmax(min-content, 1fr);
  text-align: initial;
}

.v5k-table > .v5k-part {
  display: contents;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

/* Verstak Blinking Effect */

.v5k-00 {
  animation: v5k-blink-ex-0-1 0.75s ease-in 1 !important;
}

.v5k-01 {
  animation: v5k-blink-ex-0-2 0.75s ease-in 1 !important;
}

.v5k-10 {
  animation: v5k-blink-ex-1-1 0.75s ease-in 1 !important;
}

.v5k-11 {
  animation: v5k-blink-ex-1-2 0.75s ease-in 1 !important;
}

.v5k-20 {
  animation: v5k-blink-ex-2-1 0.75s ease-in 1 !important;
}

.v5k-21 {
  animation: v5k-blink-ex-2-2 0.75s ease-in 1 !important;
}

/* Verstak Blinking Animation */

@keyframes v5k-blink-0-2 {
  from { box-shadow: 0 0 0 2px red inset; }
}

@keyframes v5k-blink-1-1 {
  from { box-shadow: 0 0 0 2px #0000BB inset; }
}

@keyframes v5k-blink-1-2 {
  from { box-shadow: 0 0 0 2px #0000BB inset; }
}

@keyframes v5k-blink-2-1 {
  from { box-shadow: 0 0 0 2px #00BB00 inset; }
}

@keyframes v5k-blink-2-2 {
  from { box-shadow: 0 0 0 2px #00BB00 inset; }
}

/* Verstak Blinking Animation */

@keyframes v5k-blink-ex-0-1 {
  from { outline-offset: -1px; outline: 2px solid red; }
  to { outline-offset: -1px; outline: 2px solid transparent; }
}

@keyframes v5k-blink-ex-0-2 {
  from { outline-offset: -1px; outline: 2px solid red; }
  to { outline-offset: -1px; outline: 2px solid transparent; }
}

@keyframes v5k-blink-ex-1-1 {
  from { outline-offset: -1px; outline: 2px solid #0000BB; }
  to { outline-offset: -1px; outline: 2px solid transparent; }
}

@keyframes v5k-blink-ex-1-2 {
  from { outline-offset: -1px; outline: 2px solid #0000BB; }
  to { outline-offset: -1px; outline: 2px solid transparent; }
}

@keyframes v5k-blink-ex-2-1 {
  from { outline-offset: -1px; outline: 2px solid #00BB00; }
  to { outline-offset: -1px; outline: 2px solid transparent; }
}

@keyframes v5k-blink-ex-2-2 {
  from { outline-offset: -1px; outline: 2px solid #00BB00; }
  to { outline-offset: -1px; outline: 2px solid transparent; }
}
`
