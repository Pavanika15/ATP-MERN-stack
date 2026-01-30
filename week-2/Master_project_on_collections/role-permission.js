const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"],
};
/*
ROLE & PERMISSION ENGINE
  -> Get all role names
  -> Check if student can delete
  -> Create a flat list of all unique permissions
  -> Add new role moderator immutably
*/
console.log(Object.keys(roles));

const canStudentDelete = roles.student?.includes("delete") || false;
console.log("Student can delete:", canStudentDelete);

const allPermissions = [...new Set(Object.values(roles).flat())];
console.log("All unique permissions:", allPermissions);

const updatedRoles = {
  ...roles,
  moderator: ["create", "delete"],
};
console.log("Updated roles:", updatedRoles);
