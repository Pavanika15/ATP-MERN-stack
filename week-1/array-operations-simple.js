//Assignment 1: Daily Temperature Analyzer

const temperatures = [32, 35, 28, 40, 38, 30, 42];
/*
Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28
*/
let above35=temperatures.filter(temp=>temp>35);
console.log("Temperatures above 35°C:", above35);

let ctof=temperatures.map(temp=>(temp*9/5)+32);
console.log("Temperatures from Celsius to Fahrenheit:", ctof);

let total=temperatures.reduce((acc,ele)=>acc+ele,0);
let average=total/temperatures.length;
console.log("Average Temperature:", average);

let firstAbove40=temperatures.find(temp=>temp>40);
console.log("First temperature above 40°C:", firstAbove40);

let indexOf28=temperatures.findIndex(temp=>temp===28);
console.log("Index of temperature 28°C:", indexOf28);



//Assignment 2: Online Course Name Processor

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



//Assignment 3: Student Marks List

const marks = [78, 92, 35, 88, 40, 67];
/*
1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
     5. findIndex() of mark 92
    */

let passingMarks = marks.filter(mark => mark >= 40);
console.log("Passing Marks:", passingMarks);

let graceMarks = marks.map(mark => mark + 5);
console.log("Marks after adding 5 grace marks:", graceMarks);

let highestMark = marks.reduce((max, mark) => (mark > max ? mark : max), marks[0]);
console.log("Highest Mark:", highestMark);

let marksBelow40 = marks.find(mark => mark < 40);
console.log("First mark below 40:", marksBelow40);

let index92 = marks.findIndex(mark => mark === 92);
console.log("Index of mark 92:", index92);