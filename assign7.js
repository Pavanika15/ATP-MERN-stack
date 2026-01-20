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