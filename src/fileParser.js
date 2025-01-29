#!/usr/bin/env node

import { readFileSync } from 'node:fs';

export default function getParsedDataFromFile(filePath) {
    const byferBites = readFileSync(filePath);
    return JSON.parse(byferBites);
}

