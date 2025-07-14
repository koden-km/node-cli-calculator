#!/usr/bin/env node

import { calc } from "./calc.ts";

const args: string[] = process.argv;
const userArgs: string[] = args.slice(2);

console.log("All args:", args);
console.log("User args:", userArgs);

calc(userArgs);
