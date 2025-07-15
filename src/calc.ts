export function calc(input: string): number {
  if (input.length === 0) {
    return 0;
  }

  const [aStr, op, bStr] = input.split(" ");
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
  console.log('  "[arg1] [operator] [arg2]"\n');
  console.log("Example:");
  console.log('  "123 + 4"');
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
