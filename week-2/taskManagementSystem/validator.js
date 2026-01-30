export function validateTitle(title) {
    if(title.length===0 || title.length<3){
        return false
    }
    return true
}

export function validatePriority(priority) {
    if(priority==='low' || priority==='medium' || priority==='high'){
        return true
    }
    return false
}

export function validateDueDate(date) {
  let currentDate=new Date();
  let dueDate=new Date(date)
  if(dueDate>currentDate){
    return true
  }
  return false
}

//export {validateTitle,validatePriority,validateDueDate}