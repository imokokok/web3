import { describe, it, expect } from "vitest";
import { calculateTotal } from "./calculateTotal";

describe("calculateTotal", () => {
  it("should return 0 for empty string", () => {
    expect(calculateTotal("")).toBe(0);
  });

  it("should sum numbers separated by commas", () => {
    expect(calculateTotal("10,20,30")).toBe(60);
  });

  it("should sum numbers separated by newlines", () => {
    expect(calculateTotal("5\n15\n25")).toBe(45);
  });

  it("should handle mixed comma and newline separators", () => {
    expect(calculateTotal("100,200\n300,400")).toBe(1000);
  });

  it("should ignore whitespace around numbers", () => {
    expect(calculateTotal("  15  ,   35  \n  50  ")).toBe(100);
  });

  it("should ignore empty strings from consecutive separators", () => {
    expect(calculateTotal("10,,20\n\n30")).toBe(60);
  });

  it("should handle decimal numbers", () => {
    expect(calculateTotal("1.5, 2.5\n3.0")).toBe(7);
  });

  it("should ignore non-numeric values", () => {
    expect(calculateTotal("100, abc, 200, xyz\n300")).toBe(600);
  });

  it("should return 0 when all values are invalid", () => {
    expect(calculateTotal("invalid, test\n123abc")).toBe(0);
  });

  it("should handle negative numbers", () => {
    expect(calculateTotal("-10, 20\n-5")).toBe(5);
  });

  it("should handle a single number", () => {
    expect(calculateTotal("42")).toBe(42);
  });

  it("should handle a single negative number", () => {
    expect(calculateTotal("-7")).toBe(-7);
  });

  it("should handle zero values", () => {
    expect(calculateTotal("0, 0\n0")).toBe(0);
  });
});
