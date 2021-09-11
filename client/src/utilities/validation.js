const validator = require("validator");

const validatePassword = (password) => {
  return validator.isStrongPassword(password, { minLength: 4 });
};

const validateEmail = (email) => {
  return validator.isEmail(email);
};

export { validateEmail, validatePassword };
