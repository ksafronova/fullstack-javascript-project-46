#!/usr/bin/env node

import { readFileSync } from 'node:fs';
import path from 'path';


export default function getParsedDataFromFile(filePath) {
  const byferBites = readFileSync(path.resolve(filePath));
  return JSON.parse(byferBites);
}

