[![Readiness](https://img.shields.io/badge/release-beta-red.svg)](https://en.wikipedia.org/wiki/Software_release_life_cycle#Release_candidate)
[![GitHub License](https://img.shields.io/badge/license-MIT-4cc61e.svg?style=flat)](https://github.com/nezaboodka/reactronic-front/blob/master/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/reactronic-front.svg?style=flat&colorB=success)](https://www.npmjs.com/package/reactronic-front)
[![Package Size](https://img.shields.io/bundlephobia/minzip/reactronic-front.svg?colorB=success)](https://bundlephobia.com/result?p=reactronic-front)
[![CircleCI Status](https://circleci.com/gh/nezaboodka/reactronic-front.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/nezaboodka/reactronic-front)

# **Reactronic Front** - Transactionally Reactive Frontend Development Framework

Reactronic Front is a JavaScript library that provides
[transactionally reactive](https://blog.nezaboodka.com/post/2019/593-modern-database-should-natively-support-transactionally-reactive-programming)
facilities for building frontend applications.

Transactional reactivity means that state changes are being made in an
isolated data snapshot and then, once atomically applied, are
**consistently propagated** to corresponding visual components for
(re)rendering. All that is done in automatic, seamless, and fine-grained
way, because reactronic **takes full care of tracking dependencies**
between visual components (observers) and state objects (observables).

Read more: https://github.com/nezaboodka/reactronic/blob/master/README.md#readme
