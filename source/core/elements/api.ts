// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2026 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

// Verstak is based on two fundamental layout structures
// called natural layout and table layout; and on two
// special non-visual elements called partition and group.

// Element is a basic layout structure, which children by
// default are laid out naturally: rightwards-downwards.

// Table is layout structure, which children are laid out
// over table cells.

// Group is a special non-visual element for logical
// grouping of elements, tables and other groups.

// Partition is a special non-visual element, which begins
// new layout partition inside element or table.

// ApplicationWindow is a root element, which element tree
// starts from.

export { Element } from "./Element.js"
export { ElementDriver } from "./Element.js"
export { Table } from "./Table.js"
export { TableDriver } from "./Table.js"
export { Group } from "./Group.js"
export { GroupDriver } from "./Group.js"
export { row, rowBreak } from "./Partition.js"
export { Splitter, describeSplitter, isSplitViewPartition } from "./Splitter.js"
export { SplitterDriver } from "./Splitter.js"
export { Fragment } from "./Fragment.js"
export { FragmentDriver } from "./Fragment.js"
export { cursor } from "./Cursor.js"
export { CursorCommand, CursorCommandDriver } from "./Cursor.js"
export { ApplicationWindow } from "./ApplicationWindow.js"
export { ApplicationWindowDriver } from "./ApplicationWindow.js"
export { PartitionDriver, WrapperDriver } from "./Partition.js"
