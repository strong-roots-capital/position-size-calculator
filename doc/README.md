[position-size-calculator](README.md)

# position-size-calculator

## Index

### Interfaces

* [CommandLineOptions](interfaces/commandlineoptions.md)

### Type aliases

* [Percent](README.md#percent)
* [Price](README.md#price)
* [Quantity](README.md#quantity)

### Variables

* [docstring](README.md#const-docstring)
* [version](README.md#const-version)

### Functions

* [Debug](README.md#debug)
* [isDebugMode](README.md#isdebugmode)
* [main](README.md#main)
* [mockDebugger](README.md#mockdebugger)
* [parseNumberBaseTen](README.md#parsenumberbaseten)
* [parseOptions](README.md#parseoptions)
* [positionSizeCalculator](README.md#positionsizecalculator)
* [shouldCalculate](README.md#shouldcalculate)

### Object literals

* [debug](README.md#const-debug)

## Type aliases

###  Percent

Ƭ **Percent**: *number*

*Defined in [src/position-size-calculator.ts:25](https://github.com/strong-roots-capital/position-size-calculator/blob/3ff3d52/src/position-size-calculator.ts#L25)*

___

###  Price

Ƭ **Price**: *number*

*Defined in [src/position-size-calculator.ts:26](https://github.com/strong-roots-capital/position-size-calculator/blob/3ff3d52/src/position-size-calculator.ts#L26)*

___

###  Quantity

Ƭ **Quantity**: *number*

*Defined in [src/position-size-calculator.ts:27](https://github.com/strong-roots-capital/position-size-calculator/blob/3ff3d52/src/position-size-calculator.ts#L27)*

## Variables

### `Const` docstring

• **docstring**: *"
Position-Size Calculator

Usage:
    position-size-calculator -c <capital> -r <risk> (-p <percent>|-i <entry> -o <exit>) [-u <price>]
"* = `
Position-Size Calculator

Usage:
    position-size-calculator -c <capital> -r <risk> (-p <percent>|-i <entry> -o <exit>) [-u <price>]
`

*Defined in [src/position-size-calculator.ts:18](https://github.com/strong-roots-capital/position-size-calculator/blob/3ff3d52/src/position-size-calculator.ts#L18)*

___

### `Const` version

• **version**: *"0.0.1"* = "0.0.1"

*Defined in [src/version.ts:2](https://github.com/strong-roots-capital/position-size-calculator/blob/3ff3d52/src/version.ts#L2)*

## Functions

###  Debug

▸ **Debug**(`tag`: string): *Debugger*

*Defined in [src/debug.ts:43](https://github.com/strong-roots-capital/position-size-calculator/blob/3ff3d52/src/debug.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`tag` | string |

**Returns:** *Debugger*

___

###  isDebugMode

▸ **isDebugMode**(): *boolean*

*Defined in [src/debug.ts:3](https://github.com/strong-roots-capital/position-size-calculator/blob/3ff3d52/src/debug.ts#L3)*

**Returns:** *boolean*

___

###  main

▸ **main**(): *void*

*Defined in [src/position-size-calculator.ts:137](https://github.com/strong-roots-capital/position-size-calculator/blob/3ff3d52/src/position-size-calculator.ts#L137)*

**Returns:** *void*

___

###  mockDebugger

▸ **mockDebugger**(`tag`: string): *Debugger*

*Defined in [src/debug.ts:9](https://github.com/strong-roots-capital/position-size-calculator/blob/3ff3d52/src/debug.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`tag` | string |

**Returns:** *Debugger*

___

###  parseNumberBaseTen

▸ **parseNumberBaseTen**(`tag`: string): *function*

*Defined in [src/position-size-calculator.ts:38](https://github.com/strong-roots-capital/position-size-calculator/blob/3ff3d52/src/position-size-calculator.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`tag` | string |

**Returns:** *function*

▸ (`value`: string): *number*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

___

###  parseOptions

▸ **parseOptions**(`argv`: string[]): *[CommandLineOptions](interfaces/commandlineoptions.md)*

*Defined in [src/position-size-calculator.ts:50](https://github.com/strong-roots-capital/position-size-calculator/blob/3ff3d52/src/position-size-calculator.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`argv` | string[] |

**Returns:** *[CommandLineOptions](interfaces/commandlineoptions.md)*

___

###  positionSizeCalculator

▸ **positionSizeCalculator**(`argv`: string[]): *Either‹string, string›*

*Defined in [src/position-size-calculator.ts:104](https://github.com/strong-roots-capital/position-size-calculator/blob/3ff3d52/src/position-size-calculator.ts#L104)*

**Parameters:**

Name | Type |
------ | ------ |
`argv` | string[] |

**Returns:** *Either‹string, string›*

___

###  shouldCalculate

▸ **shouldCalculate**(`t`: ExecutionContext, `expected`: string, `argv`: string): *void*

*Defined in [test/system/test-position-size-calculator.ts:10](https://github.com/strong-roots-capital/position-size-calculator/blob/3ff3d52/test/system/test-position-size-calculator.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | ExecutionContext |
`expected` | string |
`argv` | string |

**Returns:** *void*

## Object literals

### `Const` debug

### ▪ **debug**: *object*

*Defined in [src/position-size-calculator.ts:14](https://github.com/strong-roots-capital/position-size-calculator/blob/3ff3d52/src/position-size-calculator.ts#L14)*

###  options

• **options**: *Debugger* = Debug('options')

*Defined in [src/position-size-calculator.ts:15](https://github.com/strong-roots-capital/position-size-calculator/blob/3ff3d52/src/position-size-calculator.ts#L15)*
