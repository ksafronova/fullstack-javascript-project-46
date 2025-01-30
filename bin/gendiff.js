#!/usr/bin/env node
import { program } from "commander";
import getParsedDataFromFile from '../src/fileParser.js';
import getDiffs from '../src/diff.js'

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .helpOption('-h, --help', 'output usage information')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    const firstFileData = getParsedDataFromFile(filepath1);
    const secondFileData = getParsedDataFromFile(filepath2);
    console.log(getDiffs(firstFileData, secondFileData))

  });

program.parse();