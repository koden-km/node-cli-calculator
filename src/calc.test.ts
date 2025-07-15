import { describe, expect, it } from "vitest";
import { calc } from "./calc.ts";

describe("calc module", () => {
  it("should add two numbers together when using operator '+'", () => {
    expect(calc("10 + 2")).toBe(12);
  });

  it("should subtract the second number from the first when using operator '-'", () => {
    expect(calc("10 - 2")).toBe(8);
  });

  it("should multiply two numbers together when using operator '*'", () => {
    expect(calc("10 * 2")).toBe(20);
  });

  it("should divide the first number by the second number when using operator '/'", () => {
    expect(calc("10 / 2")).toBe(5);
  });
});
