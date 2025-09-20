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
            │     ├─ services/
            │     │ └─ BasketService.ts # Basket service logic
            │     │ └─ LoggerService.ts # Logger service for simple debugging
            ├─ tests/
            │     ├─ services/
            │     └─ BasketService.test.ts # Tests around BasketService
            ├─ package.json
            └─ tsconfig.json
```

---

## Installation

- Clone the repository:  

```bash
git clone <repo-url>
cd <repo-name>
```

- Install dependencies:

```bash
npm install
```

---

## Usage Example

---

## Testing/Commands

Run all tests:

```bash
npm test
```

Please check for more commands in the `package.json` file.

---

## Assumptions

---
