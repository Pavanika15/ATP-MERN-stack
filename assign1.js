 let totalAmount = 0;
 /*
 1. Add ₹500 to the total
  2. Add ₹1200 to the total
  3. Apply a ₹200 discount
  4. Add 18% GST
  5. Print the final bill amount
  */
    totalAmount += 500;
    totalAmount += 1200;
    totalAmount -= 200;
    totalAmount += totalAmount * 0.18;
    console.log("Final Bill Amount: ₹" + totalAmount);