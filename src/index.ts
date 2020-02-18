#!/usr/bin/env node
import { positionSizeCalculator } from './position-size-calculator'

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

main()
