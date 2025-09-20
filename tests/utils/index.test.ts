import { describe, it, expect } from "vitest";
import {
  calculateBuyOneGetSecondHalfOff,
  getProductsByCode,
} from "../../src/utils";
import {
  blueWidgetProduct,
  greenWidgetProduct,
  redWidgetProduct,
} from "../../src/products/sampleProducts";
import { Product } from "../../src/products/Product";

describe("calculateBuyOneGetSecondHalfOff", () => {
  const price = redWidgetProduct.price;

  it("returns 0 when no items", () => {
    expect(calculateBuyOneGetSecondHalfOff(0, price)).toBe(0);
  });

  it("returns 0 when only 1 item (no pair)", () => {
    expect(calculateBuyOneGetSecondHalfOff(1, price)).toBe(0);
  });

  it("applies half-unit discount for 2 items", () => {
    expect(calculateBuyOneGetSecondHalfOff(2, price)).toBeCloseTo(price * 0.5);
  });

  it("applies discount only for complete pairs", () => {
    expect(calculateBuyOneGetSecondHalfOff(3, price)).toBeCloseTo(price * 0.5);
  });

  it("applies discount for 2 pairs (4 items)", () => {
    expect(calculateBuyOneGetSecondHalfOff(4, price)).toBeCloseTo(price * 1.0);
  });

  it("applies discount for 5 items (2 pairs, 1 leftover)", () => {
    expect(calculateBuyOneGetSecondHalfOff(5, price)).toBeCloseTo(price * 1.0);
  });

  it("handles large quantities correctly", () => {
    expect(calculateBuyOneGetSecondHalfOff(10, price)).toBeCloseTo(price * 2.5); // 5 pairs
  });
});

describe("getProductsByCode", () => {
  const mockProducts: Product[] = [
    //   two green widgets
    greenWidgetProduct,
    greenWidgetProduct,
    //   four blue widgets
    blueWidgetProduct,
    blueWidgetProduct,
    blueWidgetProduct,
    blueWidgetProduct,
    //   six red widgets
    redWidgetProduct,
    redWidgetProduct,
    redWidgetProduct,
    redWidgetProduct,
    redWidgetProduct,
    redWidgetProduct,
  ];

  it("should return only products matching the given code", () => {
    const testArr = [
      { code: greenWidgetProduct.code, count: 2 },
      { code: blueWidgetProduct.code, count: 4 },
      { code: redWidgetProduct.code, count: 6 },
    ];
    testArr.forEach(({ code, count }) => {
      const result = getProductsByCode(mockProducts, code);
      expect(result.length).toBe(count);
      expect(result.every((p) => p.code === code)).toBe(true);
    });
  });

  it("should return an empty array when no matches", () => {
    const result = getProductsByCode(mockProducts, "" as Product["code"]);
    expect(result).toEqual([]);
  });
});