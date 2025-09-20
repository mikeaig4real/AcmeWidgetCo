import { IDeliveryRule } from "../delivery/IDeliveryRule";
import { Product, ProductCodes } from "../products/Product";
import { LoggerService } from "./LoggerService";
import { IOffer } from "../offers/IOffer";
import { roundToTwo } from "../utils";

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
   * @param offers - Array of offers to apply to the basket
   * @param deliveryRule - Delivery rule to calculate delivery charges
   */
  constructor(
    private catalogue: Record<ProductCodes, Product>,
    private offers: IOffer[],
    private deliveryRule: IDeliveryRule
  ) {}

  /**
   * Adds a product to the basket by product code.
   *
   * @param productCode - The code of the product to add
   * @throws {Error} If the product code is not in the catalogue
   */
  add(productCode: ProductCodes) {
    const product = this.catalogue[productCode];
    if (!product) throw new Error(`Unknown product code: ${productCode}`);
    this.items.push(product);
    this.logger.log("add", `Added product`, product);
    this.logger.log("add", `Basket`, this.items);
  }

  /**
   * Calculates the total cost of the basket.
   * Applies offers, calculates delivery, and rounds the final total to two decimals.
   *
   * @returns The final total cost including discounts and delivery charges
   */
  total(): number {
    // calculate subtotal - sum of all item prices
    const subTotal = this.items.reduce((sum, p) => sum + p.price, 0);
    this.logger.log( "total", `SubTotal calculated: ${ subTotal }` );
    
    // calculate discount cumulative from applying offers
    const discount = this.offers.reduce(
      (sum, offer) => sum + offer.apply(this.items),
      0
    );
    this.logger.log("total", `Discount applied: -${discount}`);

    // calculate subtotal less discounts
    const afterDiscount = subTotal - discount;
    this.logger.log("total", `After Discount: ${afterDiscount}`);

    // charge for delivery based on rule given
    const deliveryCost = this.deliveryRule.calculate(afterDiscount);
    this.logger.log("total", `Delivery charge: ${deliveryCost}`);

    // calculate the final total (subtotal less discounts plus delivery)
    const finalTotal = roundToTwo(afterDiscount + deliveryCost);
    this.logger.log("total", `Final total: ${finalTotal}`);

    // return final total
    return finalTotal;
  }
}
