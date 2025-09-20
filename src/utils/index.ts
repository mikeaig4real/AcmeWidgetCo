import { Product, ProductCodes } from "../products/Product";

/**
 * Applies a Buy one, get the second at 50% off logic.
 * e.g
 * if unitPrice is 100,
 * for quantity 0, discount should be 0 (not up to multiples of 2 > 0, final cost = 100 * 0 = 0),
 * for quantity 1, discount should be 0 (not up to multiples of 2 > 0, final cost = 100 * 1 = 100),
 * for quantity 2, discount should be 50 (initial cost 100 * 2 = 200, final cost = 150 (100 + 50) (50 less)),
 * for quantity 3, discount should be 50 (initial cost 100 * 3 = 300, final cost = 250 ((100 + 50) + 100) (50 less)),
 * for quantity 4, discount should be 100 (initial cost 100 * 4 = 400, final cost = 300 ((100 + 50) + (100 + 50)) (100 less)),
 * @param quantity Total count of matches
 * @param unitPrice Cost of a single match
 * @returns A discount
 */
export function calculateBuyOneGetSecondHalfOff(
  quantity: number,
  unitPrice: number
): number {
  // get total pair counts
  const pairs = Math.floor(quantity / 2);
  // calculate discount based on pair counts and unit price at half off
  const discount = pairs * unitPrice * 0.5;
  // return discount
  return discount;
}

/**
 * Gets specific products by code in an array of products
 * @param products An array of products
 * @param code The code of products you want to get
 * @returns The specific products
 */
export function getProductsByCode(
  products: Product[],
  code: ProductCodes
): Product[] {
  // uses array.filter to select only products with code
  return products.filter((p) => p.code === code);
}