#!/usr/bin/env node
/**
 * position-size-calculator
 * CLI to calculate position-size given risk tolerance
 */

import { docopt } from 'docopt'
import { Debug } from './debug'
import { version } from './version'
import { Maybe } from 'purify-ts/Maybe'
import { Either } from 'purify-ts/Either'
import { percentageChange } from 'percentage-change'
import { positionSize } from 'position-size'

const debug = {
    options: Debug('options')
}

const docstring = `
Position-Size Calculator

Usage:
    position-size-calculator -c <capital> -r <risk> (-p <percent>|-i <entry> -o <exit>) [-u <price>]
`

type Percent = number
type Price = number
type Quantity = number

interface CommandLineOptions {
    capital: Quantity;
    risk: Percent;
    entry: Price | undefined;
    exit: Price | undefined;
    percent: Percent;
    unit: Price | undefined;
}

function parseNumberBaseTen(tag: string): (value: string) => number {

    return function parseNumberBaseTenWithTag(value) {
        const parsed = Number.parseFloat(value)

        if (Number.isNaN(parsed)) {
            throw new Error(`${tag} expected to be a number, got '${value}'`)
        }
        return parsed
    }
}

function parseOptions(argv: string[]): CommandLineOptions {
    const options = docopt(
        docstring,
        {
            argv: argv,
            help: true,
            version: version,
            exit: true
        }
    )

    debug.options(options)

    const entry = Maybe
        .fromNullable(options['<entry>'])
        .map(parseNumberBaseTen('entry'))
        .orDefault(NaN)
    const exit = Maybe
        .fromNullable(options['<exit>'])
        .map(parseNumberBaseTen('exit'))
        .orDefault(NaN)

    return {
        capital: Maybe
            .fromNullable(options['<capital>'])
            .map(parseNumberBaseTen('capital'))
            .unsafeCoerce(),
        risk: Maybe
            .fromNullable(options['<risk>'])
            .map(parseNumberBaseTen('risk'))
            .orDefaultLazy(() => percentageChange(entry, exit).orDefault(NaN)),
        entry: Maybe
            .fromNullable(options['<entry>'])
            .map(parseNumberBaseTen('entry'))
            .extract(),
        exit: Maybe
            .fromNullable(options['<exit>'])
            .map(parseNumberBaseTen('exit'))
            .extract(),
        percent: Maybe
            .fromNullable(options['<percent>'])
            .map(parseNumberBaseTen('percent'))
            .orDefaultLazy(
                () => percentageChange(entry, exit)
                    .map(Math.abs)
                    .orDefault(NaN)
            ),
        unit: Maybe
            .fromNullable(options['<price>'])
            .map(parseNumberBaseTen('price'))
            .extract()
    }
}

export function positionSizeCalculator(
    argv: string[]
): Either<string, string> {

    const options = parseOptions(argv)

    debug.options(options)

    const size = positionSize(
        options.capital,
        options.risk,
        options.percent
    )

    return size.map(
        size => {
            return [
                `Position size to `,
                `risk ${options.risk}% `,
                `of ${options.capital} capital `,
                `over a ${options.percent}% move `,
                options.entry !== undefined && options.exit !== undefined
                    ? `(from ${options.entry} to ${options.exit}) `
                    : ``,
                `is: ${size}`,
                options.unit !== undefined
                    ? ` or ${size / options.unit} units at ${options.unit} per unit`
                    : ``
            ].join('')
        }
    )
}

function main(): void {
    positionSizeCalculator(process.argv.slice(2))
        .bimap(
            (error) => {
                console.error(`Error:`, error)
                process.exit(-1)
            },
            console.log.bind(null)
        )
}


if (require.main === module) {
    main()
}
