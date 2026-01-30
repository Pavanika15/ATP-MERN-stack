let dob = "2000-05-15";

//Calculate exact age in years

let dobDate=new Date(dob)
let curDate=new Date() 

let age=curDate.getFullYear()-dobDate.getFullYear() //calculates years
let month=curDate.getMonth()-dobDate.getMonth()
let date=curDate.getDate()-dobDate.getDate()
if(month<0 || (month===0 && date<0)){
    age--;  //if month<0 decrease age also if same month but birthday didnt arrived also decrease year
}
console.log("Exact age in years :",age)