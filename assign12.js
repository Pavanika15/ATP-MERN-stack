const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

/*
 1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000
*/

let creditTransactions = transactions.filter(trans => trans.type === "credit");
console.log("Credit Transactions:", creditTransactions);

let amt=transactions.map(trans=>trans.amount);
console.log("Transaction Amounts:", amt);

let total=transactions.reduce((acc,trans)=>acc+trans.amount,0);
console.log("Total Transaction Amount:", total);

let firstDebit=transactions.find(trans => trans.type === "debit");
console.log("First Debit Transaction:", firstDebit);

let idx=transactions.findIndex(trans=>trans.amount===10000);
console.log("Index of Transaction with amount 10000:", idx);