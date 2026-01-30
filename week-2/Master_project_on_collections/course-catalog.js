export const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

/*
COURSE CATALOG ENGINE
  -> Get published courses
  -> Sort courses by price (high → low)
  -> Extract { title, price } only
  -> Calculate total value of published courses
  -> Add a new course immutably
*/

let publishedCourses=courses.filter(course=>course.published===true)
console.log("Published courses:",publishedCourses)

const sortedCourses = [...courses].sort((a, b) => b.price - a.price);
console.log("Sorted by price:", sortedCourses);

let extract=courses.map(course=>({title:course.title,price:course.price}))
console.log(extract)

let totalValue=publishedCourses.reduce((acc,value)=>acc+value.price,0)
console.log("total value of published courses:",totalValue)

let newCourse={id:104,title:"Python",price:1000,published:true}
let updatedCourse=[...courses,newCourse]
console.log("Added a new course immutably:",updatedCourse)