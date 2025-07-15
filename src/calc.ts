export function calc(args: string[]): number {
  if (args.length === 0) {
    return 0;
  }

  const [aStr, op, bStr] = args;
  const a = Number(aStr);
  const b = Number(bStr);

  if (isNaN(a) || isNaN(b)) return NaN;

  switch (op) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }

  return NaN;
}

export function showHelp() {
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

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  return a / b;
}
