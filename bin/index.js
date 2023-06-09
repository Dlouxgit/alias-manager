#!/usr/bin/env node
import { createRequire } from 'node:module'
import { program } from 'commander'
import chalk from 'chalk'
import select from '../index.js'
import { add, remove } from '../lib/index.js'

const require = createRequire(import.meta.url)
const PKG = require('../package.json')

program.version(`alias-manager ${PKG.version}`).usage('<command> [options]')

program
  .command('ls')
  .description('select alias')
  .action((name, options) => {
    console.log(chalk.bold.blue(`Alias Manager V${PKG.version}`))
    select(name, options)
  })

program
  .command('add <alias-name> <alias-value> <alias-desc>)')
  .description('add alias')
  .action((name, value, desc) => {
    add(name, value, desc)
  })

program
  .command('remove <alias-name>)')
  .description('remove alias')
  .action(name => {
    remove(name)
  })

program.on('--help', () => {
  console.log()
  console.log(`  Run ${chalk.yellow(`am <command> --help`)} for detailed usage of given command`)
  console.log()
})

program.parse(process.argv)
