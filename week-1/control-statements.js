// HANDS-ON 1: Smart Login Status Engine

let isLoggedIn = true;
let isProfileComplete = false;

/*
 1. If user is not logged in → show "Please login"
   2. If logged in but profile incomplete → show "Complete your profile"
   3. If logged in and profile complete → show "Welcome back!"
   4. Store the result in message
   5. Print the message
*/
let message = "";
if (!isLoggedIn) {
  message = "Please login";
} else if (isLoggedIn && !isProfileComplete) {
  message = "Complete your profile";
} else {
  message = "Welcome back!";
}
console.log(message);

//HANDS-ON 2: Course Price Tag Labeler

let price = 1299;
/*
1. If price < 500 → "Budget Course"
   2. If price between 500–1000 → "Standard Course"
   3. If price > 1000 → "Premium Course"
   4. Store label in courseTag
   5. Print the label
*/
let courseTag = "";
if (price < 500) {
  courseTag = "Budget Course";
} else if (price >= 500 && price <= 1000) {
  courseTag = "Standard Course";
} else {
  courseTag = "Premium Course";
}
console.log(courseTag);

//HANDS-ON 3: Enrollment Eligibility Checker

let hasPaid = true;
let hasCompletedBasics = false;
/*
    1. If both conditions are true → "Enroll Now"
   2. Otherwise → "Complete Requirements"
   3. Use ternary operator
   4. Store result in enrollMessage
   5. Print message
*/
let enrollMessage =
  hasPaid && hasCompletedBasics ? "Enroll Now" : "Complete Requirements";
console.log(enrollMessage);
