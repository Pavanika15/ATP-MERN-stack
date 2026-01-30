import { addTask, getAllTasks, completeTask } from "./task.js";

// Test your module system
// 1. Add some tasks

console.log(addTask("learn NodeJS","high","2026-02-10"))
console.log(addTask("practice DSA","low","2026-01-10"))

// 2. Display all tasks

console.log("All tasks:")
console.log(getAllTasks())

// 3. Complete a task

console.log(completeTask(0))

// 4. Display all tasks again

console.log("After completion:")
console.log(getAllTasks())