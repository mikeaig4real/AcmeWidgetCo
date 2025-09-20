import { describe, it, expect } from "vitest";
import { RedWidgetOffer } from "../../src/offers/RedWidgetOffer";
import { Product } from "../../src/products/Product";
import {
  blueWidgetProduct,
  greenWidgetProduct,
  redWidgetProduct,
} from "../../src/products/sampleProducts";

describe("RedWidgetOffer", () => {
  const offer = new RedWidgetOffer();

  it("returns 0 if there are no products", () => {
    const products: Product[] = [];
    expect(offer.apply(products)).toBe(0);
  });

  it("returns 0 if there are no Red Widgets", () => {
    const products: Product[] = [blueWidgetProduct, greenWidgetProduct];
    expect(offer.apply(products)).toBe(0);
  });

  it("applies no discount when there is only 1 Red Widget", () => {
    const products: Product[] = [redWidgetProduct];
    expect(offer.apply(products)).toBe(0);
  });

  it("applies half price discount for each pair of Red Widgets", () => {
    const products: Product[] = [redWidgetProduct, redWidgetProduct];
    const discount = offer.apply(products);
    expect(discount).toBeCloseTo(redWidgetProduct.price * 0.5, 2);
  });

  it("applies discount correctly for odd quantities (e.g. 3)", () => {
    const products: Product[] = [
      redWidgetProduct,
      redWidgetProduct,
      redWidgetProduct,
    ];
    const discount = offer.apply(products);
    expect(discount).toBeCloseTo(redWidgetProduct.price * 0.5, 2);
  });

  it("applies discount correctly for multiple pairs (e.g. 4)", () => {
    const products: Product[] = [
      redWidgetProduct,
      redWidgetProduct,
      redWidgetProduct,
      redWidgetProduct,
    ];
    const discount = offer.apply(products);
    expect(discount).toBeCloseTo(redWidgetProduct.price * 0.5 * 2, 2);
  });
});
