import { IDeliveryRule } from "./IDeliveryRule";

/**
 * Standard delivery rule implementation.
 * Calculates delivery cost based on subtotal using a standard thresholds.
 * @implements {IDeliveryRule}
 */
export class StandardDeliveryRule implements IDeliveryRule {
  /**
   * Calculates the delivery cost based on the given subtotal.
   * Standard rules:
   * - Less than 50: 4.95
   * - 50 to less than 90: 2.95
   * - 90 or more: 0
   *
   * @param subTotal - The subtotal amount for which delivery cost is calculated.
   * @returns The calculated delivery cost.
   */
  calculate(subTotal: number): number {
    if (subTotal < 50) return 4.95;
    if (subTotal < 90) return 2.95;
    return 0;
  }
}
