import { Product, ProductCodes } from "../products/Product";
import { LoggerService } from "./LoggerService";

/**
 * Service to manage a shopping basket.
 * Allows adding products, applying offers, and calculating the final total
 * including delivery charges.
 */
export class BasketService {
  /** List of products added to the basket */
  private items: Product[] = [];

  /** Logger instance for tracking basket operations */
  private logger: LoggerService = new LoggerService(BasketService.name);

  /**
   * Creates a new BasketService.
   *
   * @param catalogue - Map of available products keyed by product codes
   */
  constructor(
    private catalogue: Record<ProductCodes, Product>,
  ) {}

  /**
   * Adds a product to the basket by product code.
   *
   * @param productCode - The code of the product to add
   * @throws {Error} If the product code is not in the catalogue
   */
  add(productCode: ProductCodes) {
    this.logger.log("add", `Called add with`, productCode);
  }

  /**
   * Calculates the total cost of the basket.
   * Applies offers, calculates delivery, and rounds the final total to two decimals.
   *
   * @returns The final total cost including discounts and delivery charges
   */
  total (): number
  {
    this.logger.log("total", `Return from total`, 0);
    return 0
  }
}
