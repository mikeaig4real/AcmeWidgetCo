# Acme Widget Co – Basket Service Proof of Concept

## Overview

This is a proof-of-concept Node.js (TypeScript) project for **Acme Widget Co**, a fictional company selling widgets.  

The project implements a shopping basket system that:

- Adds products by code from a catalogue.
- Applies delivery cost rules based on subtotal.
- Applies special offers (e.g., “Buy one Red Widget, get the second half price”).
- Calculates the final total, including discounts and delivery.

This solution is structured in TypeScript, tested with **Vitest**, and can be run directly with `tsx` or built using `tsc`.

---

## Folder Structure (Key Files/Folders)

```bash
acmewidgetco/
            ├─ src/
            │     ├─ products/
            │     │ ├─ sampleProducts.ts # Product samples
            │     │ └─ Product.ts # Product types
            │     ├─ delivery/
            │     │ ├─ IDeliveryRule.ts # Delivery interface
            │     │ └─ StandardDelivery.ts # Standard delivery rule implementation
            │     ├─ offers/
            │     │ ├─ IOffer.ts # Offer interface
            │     │ └─ RedWidgetOffer.ts # Red Widget offer implementation
            │     ├─ services/
            │     │ └─ BasketService.ts # Basket service logic
            │     │ └─ LoggerService.ts # Logger service for simple debugging
            │     ├─ utils/
            │       └─ index.ts # Utility/Helper functions
            ├─ tests/
            │     ├─ delivery/
            │     │ └─ StandardDelivery.test.ts # Tests around StandardDelivery
            │     ├─ offers/
            │     │ └─ RedWidgetOffer.test.ts # Tests around RedWidgetOffer
            │     ├─ services/
            │       └─ BasketService.test.ts # Tests around BasketService
            │     └─ utils/
            │       └─ index.test.ts # Tests around utility functions
            ├─ package.json
            └─ tsconfig.json
```

---

## Installation

- Clone the repository:  

```bash
git clone [repo-url.git](https://github.com/mikeaig4real/AcmeWidgetCo.git)
cd AcmeWidgetCo
```

- Install dependencies:

```bash
npm install
```

---

## Usage Example

```ts
import {
  blueWidgetProduct,
  greenWidgetProduct,
  redWidgetProduct,
} from "./src/products/sampleProducts";
import { BasketService } from "./src/services/BasketService";
import { RedWidgetOffer } from "./src/offers/RedWidgetOffer";
import { StandardDeliveryRule } from "./src/delivery/StandardDelivery";

// create a catalogue
const catalogue: Record<ProductCodes, Product> = {
    R01: redWidgetProduct,
    G01: greenWidgetProduct,
    B01: blueWidgetProduct,
  };

// Initialize basket with...
const basket = new BasketService(
  catalogue, // your catalogue
  [new RedWidgetOffer()], // possible offers implemented similarly
  new StandardDeliveryRule() // a delivery rule to be used
);

// Add products
basket.add("R01");
basket.add("R01");
basket.add("B01");

// Calculate total
console.log("Total:", basket.total()); // e.g., 70.85
```

---

## Testing/Commands

Run all tests:

```bash
npm test
```

Please check for more commands in the `package.json` file.

---

## Assumptions

- Offers:

  1. would be like/similar to the Red Widget Offer.
  2. more likely to be scoped to a single product, i.e product specific (cross product offers could still be supported easily).
  3. are applied after all products have been added to the basket and when total is computed (particularly after subtotal has been computed, then before applying delivery rules).
  4. implying from (3.) above, offers would not be able to mutate basket contents (This would usually require that `BasketService.add()` callers are aware of offers prior to adding).

- Price final total:

 1. would be to two decimal places.

- Delivery rules:

  1. are applied after offers (cumulative discounts).
  2. are usually fixed thresholds/percentages only dependent on discounted subtotal/true amount spent.
  3. applied once to a sub total.
  4. one delivery rule is active per basket.

---
