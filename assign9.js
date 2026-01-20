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