/**
 * Interface representing a delivery rule.
 * Classes implementing this interface should provide
 * a method to calculate delivery cost based on subtotal.
 */
export interface IDeliveryRule {
  /**
   * Calculates the delivery cost based on the given subtotal.
   * @param subTotal - The subtotal amount for which delivery cost is calculated.
   * @returns The calculated delivery cost.
   */
  calculate(subTotal: number): number;
}
