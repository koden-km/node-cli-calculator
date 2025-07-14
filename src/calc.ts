// console.log(process.argv);

export function calc(args: string[]) {
  if (args.length === 0) {
    showHelp();
    return;
  }

  console.log("calculating using args:", args);
  console.log("...TODO...");
}

function showHelp() {
  console.log("Calculator");
  console.log("  calc [arg1] [operator] [arg2]\n");
  console.log("Usage example:");
  console.log("> calc 123 + 4");
}

function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}
