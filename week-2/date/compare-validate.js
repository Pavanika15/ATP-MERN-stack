let enrollmentDeadline = new Date("2026-01-20");
/*
Tasks:
  1.Check if:
      * Today is before deadline → "Enrollment Open"
      * Today is after deadline → "Enrollment Closed"

  2. Validate user input date:
      * Input: "2026-02-30"
      * Detect whether the date is valid or invalid
*/
let currentDate=new Date()

if((enrollmentDeadline-currentDate)>0){
    console.log("Enrollment open")
}
else{
    console.log("Enrollment closed")
}

let input="2026-02-30"
let parts=input.split("-")
let year=parts[0]
let month=parts[1]
let date=parts[2]

let testDate=new Date(year,month,date)
if(testDate.getFullYear()===year && testDate.getMonth()===month && testDate.getDate()===date){
    console.log("Valid date")
}else{
    console.log("Invalid date")
}