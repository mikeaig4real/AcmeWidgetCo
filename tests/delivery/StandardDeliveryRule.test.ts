import { describe, it, expect } from "vitest";
import { StandardDeliveryRule } from "../../src/delivery/StandardDeliveryRule";

describe("StandardDeliveryRule", () => {
  const rule = new StandardDeliveryRule();

  it("charges 4.95 when subtotal is below 50", () => {
    expect(rule.calculate(0)).toBe(4.95);
    expect(rule.calculate(10)).toBe(4.95);
    expect(rule.calculate(49.99)).toBe(4.95);
  });

  it("charges 2.95 when subtotal is 50 or more but below 90", () => {
    expect(rule.calculate(50)).toBe(2.95);
    expect(rule.calculate(75)).toBe(2.95);
    expect(rule.calculate(89.99)).toBe(2.95);
  });

  it("is free when subtotal is 90 or above", () => {
    expect(rule.calculate(90)).toBe(0);
    expect(rule.calculate(120)).toBe(0);
    expect(rule.calculate(1000)).toBe(0);
  });
});
