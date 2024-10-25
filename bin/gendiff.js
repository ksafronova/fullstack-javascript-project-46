#!/usr/bin/env node
import { program } from "commander";


program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1');

  program
  .helpOption('-h, --help', 'output usage information')

program
  .option('-f, --format [type]', 'output format')
  .argument('<type>')


program.parse();