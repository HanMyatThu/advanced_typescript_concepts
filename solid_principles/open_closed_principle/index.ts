/**
 *
 */

/**
 * regular - 10%
 * gold - 20%
 * premium - 30%
 */

/**
 * Class Discount without OCP
 */
class Discount {
  giveDiscount(customerType: "premium" | "regular" | "gold"): number {
    if (customerType === "premium") {
      return 30;
    } else if (customerType === "regular") {
      return 10;
    } else if (customerType === "gold") {
      return 20;
    }

    return 0;
  }
}

/**
 * Applying OCP
 */
interface Customer {
  giveDiscount(): number;
}

class RegularCustomer implements Customer {
  giveDiscount(): number {
    return 10;
  }
}

class GoldCustomer implements Customer {
  giveDiscount(): number {
    return 20;
  }
}

class PremiumCustomer implements Customer {
  giveDiscount(): number {
    return 30;
  }
}

class DiscountWithOcp {
  giveDiscount(customer: Customer): number {
    console.log(`${customer.giveDiscount()}`);
    return customer.giveDiscount();
  }
}

(function main() {
  let premiumCustomer = new PremiumCustomer();
  let goldCustomer = new GoldCustomer();
  let regularCustomer = new RegularCustomer();

  const discount = new DiscountWithOcp();

  discount.giveDiscount(premiumCustomer);
  discount.giveDiscount(goldCustomer);
  discount.giveDiscount(regularCustomer);
})();
