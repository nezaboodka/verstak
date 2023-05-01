[![Readiness](https://img.shields.io/badge/release-beta-red.svg)](https://en.wikipedia.org/wiki/Software_release_life_cycle#Release_candidate)
[![GitHub License](https://img.shields.io/badge/license-Apache2-4cc61e.svg?style=flat)](https://github.com/nezaboodka/verstak/blob/master/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/verstak.svg?style=flat&colorB=success)](https://www.npmjs.com/package/verstak)
[![Package Size](https://img.shields.io/bundlephobia/minzip/verstak.svg?colorB=success)](https://bundlephobia.com/result?p=verstak)

# **Verstak** - Experimental Front-End Library

Verstak is a experimental library for rapid development of user
interfaces. It provides **automatic refresh** of visual elements
upon change of underlying data in a program.

Refresh on the screen is **fine-grained**, meaning that only
those visual elements are refreshed, which really depend on
actual data changed. It is achieved by automatic tracking of
all dependencies between visual elements and data they use
during run time. Such an approach is usually called reactive
programming. It frees a programmer from writing boilerplate
code for "pushing" changed data to visual elements.

Changing of compound data and refreshing of visual elements
on the screen is performed consistently, in other words in
"all-or-nothing" way. It means that in case of changing
multiple variables in a program actual visual refresh
happens only in case of successful change of all the variables.
Partial changes are "not visible" to visual elements even
in case of exception or cancellation of changes. Such a
change of compound data in "all-or-nothing" way is called
a transaction.

Verstak supports asynchronous programming out of the box
at all the layers, including transactions and visual elements
rendering.

Altogether it is called reactive transactional programming.
Transactional reactivity means that state changes are being
made in an isolated data snapshot and then, once atomically
applied, are **consistently propagated** to corresponding
visual components for (re)rendering. All that is done in
automatic, seamless, and fine-grained way, because Verstak
**takes full care of tracking dependencies** between visual
components (observers) and state objects (observables).

Example application: https://nevod.io ([source code](https://gitlab.com/nezaboodka/nevod.web.public/-/blob/master/README.md)).

Verstak is based on [Reactronic](https://github.com/nezaboodka/reactronic/blob/master/README.md#readme).

# Contribution

By contributing, you agree that your contributions will be
automatically licensed under the Apache 2.0 license (see LICENSE file).
