const login = (user) => {
  switch (user.type) {
    case "student":
      return "Student Dashboard";
    default:
      return "Unauthorized";
  }
};
module.exports = login;
