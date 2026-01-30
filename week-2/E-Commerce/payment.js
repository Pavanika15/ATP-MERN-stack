import { reduceStock } from "./product.js";
import { getCartItems, getCartTotal, clearCart } from "./cart.js";
import { applyDiscount } from "./discount.js";

// TODO: Implement these functions

export function processPayment(paymentMethod, couponCode = null) {
  // 1. Get cart items and total
  let items = getCartItems();
  let subtotal = getCartTotal();

  // 2. Apply discount if coupon provided
let discountDetails;

  if (couponCode) {
    discountDetails = applyDiscount(subtotal, couponCode);
  } else {
    discountDetails = {
      originalTotal: subtotal,
      discount: 0,
      finalTotal: subtotal
    };
  }

  // 3. Validate payment method (card/upi/cod)
  if (!validatePaymentMethod(paymentMethod)) {
    return "Invalid payment method";
  }

  // 4. Process payment (simulate)
  if (items.length === 0) {
    return "Cart is empty";
  }

  // 5. Reduce stock for all items
  items.forEach(item => {
  reduceStock(item.productId, item.quantity);
});

  // 6. Clear cart
  clearCart();

  // 7. Generate order summary
  // Return order summary:
  // {
  //   orderId: ...,
  //   items: [...],
  //   subtotal: ...,
  //   discount: ...,
  //   total: ...,
  //   paymentMethod: ...,
  //   status: 'success/failed',
  //   message: '...'
  // }
  return {
    orderId: generateOrderId(),
    items: items,
    subtotal: discountDetails.originalTotal,
    discount: discountDetails.discount,
    total: discountDetails.finalTotal,
    paymentMethod: paymentMethod,
    status: "success",
    message: "Order placed successfully"
  };
}

export function validatePaymentMethod(method) {
  // Check if method is valid (card/upi/cod)
  if (method === "card" || method === "upi" || method === "cod") {
    return true;
  }
  return false;
}

function generateOrderId() {
  // Generate random order ID
  return "ORD" + Date.now();
}
