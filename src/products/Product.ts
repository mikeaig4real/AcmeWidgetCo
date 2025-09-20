/**
 * Possible product codes.
 */
export type ProductCodes = "R01" | "G01" | "B01";

/**
 * Represents a product in the catalog.
 */
export type Product = {
  /** The product code */
  code: ProductCodes;

  /** The name of the product */
  name: string;

  /** The price of the product in the store's currency */
  price: number;
};
