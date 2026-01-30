import { getProductById, checkStock } from "./product.js";

let cartItems = [];

// TODO: Implement these functions

export function addToCart(productId, quantity) {
  // 1. Get product details
  let product = getProductById(productId);
  if (!product) {
    return "Product not found";
  }

  // 2. Check stock availability

  if (!checkStock(productId, quantity)) {
    return "Insufficient stock";
  }

  // 3. Check if product already in cart
  //    - If yes, update quantity
  //    - If no, add new item

  let cartItem = cartItems.find((prod) => prod.productId === productId);
  if (cartItem) {
    cartItem.quantity += quantity;
    return "Quantity updated in cart";
  }
  let item = {};
  item.productId = productId;
  item.quantity = quantity;
  cartItems.push(item);

  // 4. Return success/error message
  return "Product added to cart";
}

export function removeFromCart(productId) {
  // Remove product from cart
  let index = cartItems.findIndex((item) => item.productId === productId);

  if (index !== -1) {
    cartItems.splice(index, 1);
    return "Item removed from cart";
  }

  return "Item not found in cart";
}

export function updateQuantity(productId, newQuantity) {
  // Update quantity of product in cart
  // Check stock before updating
  if (!checkStock(productId, newQuantity)) {
    return "Not enough stock";
  }
  let item = cartItems.find((prod) => prod.productId === productId);

  if (item) {
    item.quantity = newQuantity;
    return "Quantity updated";
  }

  return "Item not found";
}

export function getCartItems() {
  // Return all cart items with product details
  return cartItems.map((item) => {
    let product = getProductById(item.productId);

    return {
      name: product.name,
      price: product.price,
      quantity: item.quantity,
      total: product.price * item.quantity,
    };
  });
}

export function getCartTotal() {
  // Calculate total price of all items in cart
  // Return total
  return cartItems.reduce((total, item) => {
    let prod = getProductById(item.productId);
    return total + prod.price * item.quantity;
  }, 0);
}

export function clearCart() {
  // Empty the cart
  cartItems = [];
}
