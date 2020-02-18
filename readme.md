# position-size-calculator
[![License][]](https://opensource.org/licenses/ISC)
[![NPM Package][]](https://npmjs.org/package/position-size-calculator)
[![Build status][]](https://travis-ci.org/strong-roots-capital/position-size-calculator)
[![Code Coverage][]](https://codecov.io/gh/strong-roots-capital/position-size-calculator)
[![Dependencies][]](https://david-dm.org/strong-roots-capital/position-size-calculator)

[License]: https://img.shields.io/badge/License-ISC-blue.svg
[NPM Package]: https://img.shields.io/npm/v/position-size-calculator.svg
[Build status]: https://travis-ci.org/strong-roots-capital/position-size-calculator.svg?branch=master
[Code Coverage]: https://codecov.io/gh/strong-roots-capital/position-size-calculator/branch/master/graph/badge.svg
[Dependencies]: https://david-dm.org/strong-roots-capital/position-size-calculator/status.svg

> CLI to calculate position-size given risk tolerance

## Install

``` shell
npm install position-size-calculator
```

## Use

``` typescript
Position-Size Calculator

Usage:
    position-size-calculator -c <capital> -r <risk> (-p <percent>|-i <entry> -o <exit>) [-u <price>]
```

### Example

``` shell
$ position-size-calculator.ts -c 100 -r 1 -i 100 -o 99 -u 2

Position size to risk 1% of 100 capital over a 1% move (from 100 to 99) is: 100 or 50 units at 2 per unit
```

## Related

- [position-size](https://github.com/strong-roots-capital/position-size)
- [percentage-change](https://github.com/strong-roots-capital/percentage-change)
