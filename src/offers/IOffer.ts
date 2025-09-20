import { Product } from "../products/Product";

/**
 * Interface representing an offer.
 * Classes implementing this interface should provide
 * a method to apply the offer to a list of products
 * and return the total discount.
 */
export interface IOffer {
  /**
   * Applies the offer to a list of products.
   *
   * @param products - Array of products the offer should be applied to.
   * @returns The discount amount resulting from the offer.
   */
  apply(products: Product[]): number;
}
