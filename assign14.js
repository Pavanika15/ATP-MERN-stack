const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

/*
Tasks:
    1. Calculate total marks
    2. Calculate average marks
    3. Find the highest scoring subject
    4. Add a new subject computer: 90
*/

let totalMarks = Object.values(marks).reduce((acc, mark) => acc + mark, 0);
console.log("Total Marks:", totalMarks);

let averageMarks = totalMarks / Object.keys(marks).length;
console.log("Average Marks:", averageMarks);

let highestScoringSubject = Object.keys(marks).reduce((maxSub, sub) => marks[sub] > marks[maxSub] ? sub : maxSub, Object.keys(marks)[0]);
console.log("Highest Scoring Subject:", highestScoringSubject);

marks.computer = 90;
console.log("Updated Marks Object:", marks);