// Available coupons
const coupons = {
  WELCOME10: { type: "percentage", value: 10, minAmount: 1000 },
  FLAT500: { type: "flat", value: 500, minAmount: 5000 },
  ELECTRONICS20: {
    type: "percentage",
    value: 20,
    minAmount: 10000,
    category: "electronics",
  },
};

// TODO: Implement these functions

export function validateCoupon(couponCode, cartTotal, cartItems) {
  // 1. Check if coupon exists
  let coupon = coupons[couponCode];

  if (!coupon) {
    return { valid: false, message: "Invalid coupon" };
  }
  // 2. Check minimum amount requirement
  if (cartTotal < coupon.minAmount) {
    return { valid: false, message: "Minimum amount not reached" };
  }

  // 3. Check category requirement (if any)
  // Return { valid: true/false, message: '...' }
  return { valid: true, message: "Coupon applied" };
}

export function calculateDiscount(couponCode, cartTotal) {
  // Calculate discount amount based on coupon type
  // Return discount amount
  let coupon = coupons[couponCode];

  if (coupon.type === "percentage") {
    return (cartTotal * coupon.value) / 100;
  }

  if (coupon.type === "flat") {
    return coupon.value;
  }

  return 0;
}

export function applyDiscount(cartTotal, couponCode, cartItems) {
  // 1. Validate coupon
  let check = validateCoupon(couponCode, cartTotal);

  if (!check.valid) {
    return {
      originalTotal: cartTotal,
      discount: 0,
      finalTotal: cartTotal,
      message: check.message
    };
  }
  // 2. If valid, calculate discount
  let discount = calculateDiscount(couponCode, cartTotal);

  // 3. Return final amount and discount details
  // Return {
  //   originalTotal: ...,
  //   discount: ...,
  //   finalTotal: ...,
  //   message: '...'
  // }
   
  return {
    originalTotal: cartTotal,
    discount: discount,
    finalTotal: cartTotal - discount,
    message: "Discount applied successfully"
  };
}
