import { describe, it, expect } from "vitest";
import { Product, ProductCodes } from "../../src/products/Product";
import {
  blueWidgetProduct,
  greenWidgetProduct,
  redWidgetProduct,
} from "../../src/products/sampleProducts";
import { BasketService } from "../../src/services/BasketService";
import { StandardDeliveryRule } from "../../src/delivery/StandardDeliveryRule";
import { RedWidgetOffer } from "../../src/offers/RedWidgetOffer";

describe("BasketService - provided test cases", () => {
  const catalogue: Record<ProductCodes, Product> = {
    R01: redWidgetProduct,
    G01: greenWidgetProduct,
    B01: blueWidgetProduct,
  };

  const offers = [new RedWidgetOffer()];

  const deliveryRule = new StandardDeliveryRule();

  it("Basket: B01, G01 → total = 37.85", () => {
    const basket = new BasketService(catalogue, offers, deliveryRule);
    basket.add("B01");
    basket.add("G01");
    expect(basket.total()).toBeCloseTo(37.85, 2);
  });

  it("Basket: R01, R01 → total = 54.37", () => {
    const basket = new BasketService(catalogue, offers, deliveryRule);
    basket.add("R01");
    basket.add("R01");
    expect(basket.total()).toBeCloseTo(54.37, 2);
  });

  it("Basket: R01, G01 → total = 60.85", () => {
    const basket = new BasketService(catalogue, offers, deliveryRule);
    basket.add("R01");
    basket.add("G01");
    expect(basket.total()).toBeCloseTo(60.85, 2);
  });

  it("Basket: B01, B01, R01, R01, R01 → total = 98.27", () => {
    const basket = new BasketService(catalogue, offers, deliveryRule);
    basket.add("B01");
    basket.add("B01");
    basket.add("R01");
    basket.add("R01");
    basket.add("R01");
    expect(basket.total()).toBeCloseTo(98.27, 2);
  });
});
