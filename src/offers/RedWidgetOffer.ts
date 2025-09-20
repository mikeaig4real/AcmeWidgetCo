import { Product } from "../products/Product";
import { redWidgetProduct } from "../products/sampleProducts";
import { calculateBuyOneGetSecondHalfOff, getProductsByCode } from "../utils";
import { IOffer } from "./IOffer";

/**
 * Offer implementation for Red Widgets.
 * Applies a "Buy one, get the second half price (50% off)" discount on Red Widget products.
 * @implements {IOffer}
 */
export class RedWidgetOffer implements IOffer {
  /**
   * Applies the Red Widget offer to the given list of products.
   * If there are no Red Widgets in the cart, returns 0.
   *
   * @param products - Array of products to apply the offer to.
   * @returns The total discount for Red Widgets.
   */
  apply(products: Product[]): number {
    const redWidgetProducts = getProductsByCode(
      products,
      redWidgetProduct.code
    );
    const totalRedWidgetProducts = redWidgetProducts.length;
    if (totalRedWidgetProducts === 0) return 0;
    return calculateBuyOneGetSecondHalfOff(
      totalRedWidgetProducts,
      redWidgetProduct.price
    );
  }
}
