import test, { ExecutionContext } from 'ava'

/**
 * System under test
 */

import { positionSizeCalculator } from '../../src/position-size-calculator'


function shouldCalculate(
    t: ExecutionContext,
    expected: string,
    argv: string
): void {
    t.deepEqual(
        expected,
        positionSizeCalculator(argv.split(' ')).extract()
    )
}

shouldCalculate.title = function title(
    _providedTitle = '',
    expected: string,
    argv: string
): string {
    return `should calculate ${expected} given arguments ${argv}`
}


test(
    shouldCalculate,
    `Position size to risk 1% of 100 capital over a 1% move is: 100`,
    `-c 100 -r 1 -p 1`
)
test(
    shouldCalculate,
    `Position size to risk 0.5% of 100 capital over a 1% move is: 50`,
    `-c 100 -r 0.5 -p 1`
)
test(
    shouldCalculate,
    `Position size to risk 1% of 100 capital over a 1% move (from 100 to 99) is: 100`,
    `-c 100 -r 1 -i 100 -o 99`
)
test(
    shouldCalculate,
    `Position size to risk 1% of 100 capital over a 1% move is: 100 or 50 units at 2 per unit`,
    `-c 100 -r 1 -p 1 -u 2`
)
test(
    shouldCalculate,
    `Position size to risk 1% of 100 capital over a 1% move (from 100 to 99) is: 100 or 50 units at 2 per unit`,
    `-c 100 -r 1 -i 100 -o 99 -u 2`
)
