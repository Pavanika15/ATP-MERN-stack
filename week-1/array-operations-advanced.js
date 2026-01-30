//You are building a shopping cart summary for an e-commerce website.

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//Use filter() to get only inStock products
let inStockProd=cart.filter(item=>item.inStock)
console.log(inStockProd);

//Use map() to create a new array with:  { name, totalPrice }
let newArr=cart.map(item=>{
    return {name:item.name,totalPrice:item.price*item.quantity}
})
console.log(newArr)

//Use reduce() to calculate grand total cart value
let grandTotal=cart.reduce((acc,ele)=>acc+(ele.price*ele.quantity),0)
console.log(grandTotal);

//Use find() to get details of "Mouse"
let detailsMouse=cart.find(item=>item.name==='Mouse')
console.log(detailsMouse);

//Use findIndex() to find the position of "Keyboard"
let idxKeyboard=cart.findIndex(item=>item.name==='Keyboard')
console.log(idxKeyboard);



//Student Performance Dashboard

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//filter() students who passed (marks ≥ 40)
let r1=students.filter(stu=>stu.marks>=40)
console.log(r1);

/*map() to add a grade field
        ≥90 → A
        ≥75 → B
        ≥60 → C
        else → D
*/
let r2=students.map(stu=>{
    let grade
    if(stu.marks>=90)
        grade='A'
    else if(stu.marks>=70)
        grade='B'
    else if(stu.marks>=60)
        grade='C'
    else
        grade='D'
    return {stu,grade}
})
console.log(r2);

//reduce() to calculate average marks
let r3=students.reduce((acc,ele)=>acc+ele.marks,0)
console.log(r3/students.length);

//find() the student who scored 92
let r4=students.find(stu=>stu.marks===92)
console.log(r4);

//findIndex() of student "Kiran"
let r5=students.findIndex(stu=>stu.name==='Kiran')
console.log(r5);



//Employee Payroll Processor

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

/*
 1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"
*/

let itEmp = employees.filter(emp => emp.department === "IT")
console.log("Employees in IT Department:", itEmp);

let netSal = employees.map(emp => emp.salary + emp.salary * 0.1)
console.log("Salaries after 10% bonus:", netSal);

let totalSal = employees.reduce((acc, emp) => acc + emp.salary, 0);
console.log("Total Salary Payout:", totalSal);

let emp30k = employees.find(emp => emp.salary === 30000);
console.log("Employee with salary 30000:", emp30k);

let nehaIndex = employees.findIndex(emp => emp.name === "Neha");
console.log("Index of employee Neha:", nehaIndex);



//Movie Streaming Platform

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

/*
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"
*/

let sciFiMovies = movies.filter(movie => movie.genre === "Sci-Fi")
console.log("Sci-Fi Movies:", sciFiMovies);

let movieLabels = movies.map(movie => `${movie.title} (${movie.rating})`);
console.log("Movie Labels:", movieLabels);

let totalRating = movies.reduce((acc, movie) => acc + movie.rating, 0);
let averageRating = totalRating / movies.length;
console.log("Average Rating of all movies:", averageRating);

let jokerMovie = movies.find(movie => movie.title === "Joker");
console.log("Details of 'Joker':", jokerMovie);

let avengersIndex = movies.findIndex(movie => movie.title === "Avengers");
console.log("Index of 'Avengers':", avengersIndex);



//Bank Transaction Analyzer

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