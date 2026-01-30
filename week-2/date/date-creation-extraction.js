/*
1. Create a Date object for current date & time.
       2. Extract and display:
                    * Year
                    * Month (human readable)
                    * Date
                    * Day of week
                    * Hours, minutes, seconds

      3. Display the date in this format:
                    DD-MM-YYYY HH:mm:ss
*/

let date=new Date()
//console.log(date)

let months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
let days = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"
];

let dt=date.getDate()
dt=dt<10?"0"+dt:dt
let mnt=date.getMonth()+1
mnt=mnt<10?"0"+mnt:mnt;
let sec=date.getSeconds()
sec=sec<10?"0"+sec:sec
let min=date.getMinutes()
min=min<10?"0"+min:min
let hrs=date.getHours()
hrs=hrs<10?"0"+hrs:hrs

console.log("Year:",date.getFullYear())
console.log("Month:",months[date.getMonth()])
console.log("Date:",date.getDate())
console.log("Day:",days[date.getDay()])
console.log("Time:",hrs,':',min,':',sec)

console.log("Date in format DD-MM-YYYY HH:mm:ss :",`${dt}-${mnt}-${date.getFullYear()} ${hrs}:${min}:${sec}`)

