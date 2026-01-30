//Assignment 1: User Profile Manager

const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

/*
1. Read and print the user’s name and email
    2. Add a new property lastLogin: "2026-01-01"
    3. Update role from "student" to "admin"
    4. Delete the isActive property
    5. Use Object.keys() to list all remaining fields
*/

console.log("Name:", user.name);
console.log("Email:", user.email);
user.lastLogin = "2026-01-01";
user.role = "admin";
console.log("Updated Role:", user.role);
delete user.isActive;
console.log("Remaining fields:", Object.keys(user));



//Assignment 2: Exam Result Summary

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



//Assignment 3: Application Settings Controller

const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};

/*
Tasks :
    1.Toggle theme between "light" and "dark"
    2. Turn autoSave to true
    3. Remove the notifications setting
    4. Freeze the settings object so it cannot be modified
*/

settings.theme = settings.theme === "light" ? "dark" : "light";
settings.autoSave = true;
delete settings.notifications;
Object.freeze(settings);
  
console.log("Final Settings Object:", settings);