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

