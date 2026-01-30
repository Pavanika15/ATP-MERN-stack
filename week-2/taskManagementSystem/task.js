import {validateDueDate,validatePriority,validateTitle} from './validator.js'

const tasks = [];

// 1. Add new task
export function addTask(title, priority, dueDate) {
  // Validate using imported functions
  // If valid, add to tasks array
  // Return success/error 

  if(!validateTitle(title)){
    return "Invalid! title should not be empty or it should have minimum 3 characters"
  }

  if(!validatePriority(priority)){
    return "Invalid priority, must be low,medium or high"
  }

  if(!validateDueDate(dueDate)){
    return "Due date must be future date"
  }
  
  let task={}
  task.title=title
  task.priority=priority
  task.dueDate=dueDate
  task.completed=false

  tasks.push(task)

  return "Task added successfully"
}

// 2. Get all tasks
export function getAllTasks() {
  // Return all tasks
  return tasks
}

// 3. Mark task as complete
export function completeTask(taskId) {
  // Find task and mark as complete
  if(tasks[taskId]){
    tasks[taskId].completed=true
    return "Task completed"
  }else{
    return "Task not found"
  }
}




