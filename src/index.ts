#!/usr/bin/env node

import { calc, showHelp } from "./calc.ts";

const args: string[] = process.argv;
const userArgs: string[] = args.slice(2);

if (userArgs.length === 0) {
  showHelp();
} else {
  console.log(calc(userArgs));
}
