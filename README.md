﻿[![Readiness](https://img.shields.io/badge/release-beta-red.svg)](https://en.wikipedia.org/wiki/Software_release_life_cycle#Release_candidate)
[![GitHub License](https://img.shields.io/badge/license-MIT-4cc61e.svg?style=flat)](https://github.com/nezaboodka/reactronic-dom/blob/master/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/reactronic-dom.svg?style=flat&colorB=success)](https://www.npmjs.com/package/reactronic-dom)
[![Package Size](https://img.shields.io/bundlephobia/minzip/reactronic-dom.svg?colorB=success)](https://bundlephobia.com/result?p=reactronic-dom)

# **Reactronic DOM** - Transactional Reactive Front-End Development Framework

Reactronic DOM is a JavaScript library that provides
[transactional reactive](https://blog.nezaboodka.com/post/2019/593-modern-database-should-natively-support-transactionally-reactive-programming)
facilities for building front-end applications.

Transactional reactivity means that state changes are being made in an
isolated data snapshot and then, once atomically applied, are
**consistently propagated** to corresponding visual components for
(re)rendering. All that is done in automatic, seamless, and fine-grained
way, because reactronic **takes full care of tracking dependencies**
between visual components (observers) and state objects (observables).

Based on Reactronic: https://github.com/nezaboodka/reactronic/blob/master/README.md#readme

Example of the application built with Reactronic-DOM: https://nevod.io

Source code of the example: https://gitlab.com/nezaboodka/nevod.web.public/-/blob/master/README.md
