const courses = ["javascript", "react", "node", "mongodb", "express"];
/*
1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"
*/

let names=courses.filter(temp=>temp.length>5)
console.log("courses with name length > 5:",names);

let upper_names=courses.map(temp=>temp.toUpperCase());
console.log("courses in uppercase:",upper_names);

let single_string=courses.reduce((acc,ele)=>acc?acc+' '+'|'+' '+ele.toUpperCase():ele.toUpperCase(),'');
console.log("Single string of courses:",single_string);

let find_course=courses.find(temp=>temp==="react");
console.log("Finding course 'react':",find_course);

let find_index=courses.findIndex(temp=>temp==="node");
console.log("Index of course 'node':",find_index);