const user = {
  id: 101,
  name: "Ravi",
  preferences: {
    theme: "dark",
    language: "en",
  },
};
 let copyUser={...user}
 copyUser.name="john"
 copyUser.preferences.theme="light"
 console.log(user)
 console.log(copyUser)