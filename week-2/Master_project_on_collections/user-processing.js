const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

/*
    USER PROCESSING ENGINE
  -> Get only active users
  -> Extract names of active users
  -> Check if any admin exists
  -> Find user by id
  -> Deactivate a user immutably
*/

let getActiveUsers=users.filter(user=>user.active===true)
console.log("Get only active users:",getActiveUsers)

let getActiveNames=getActiveUsers.map(user=>user.name)
console.log("Names of active users:",getActiveNames)

let findAdmin=users.find(user=>user.role==="admin")
console.log("Admin details:",findAdmin)

let findUser=users.find(user=>user.id===2)
console.log("Finding user by id(2):",findUser)

const updatedUsers = users.map(user =>
  user.id === 2 ? { ...user, active: false } : user
);
console.log("Users after deactivation (immutable):", updatedUsers);