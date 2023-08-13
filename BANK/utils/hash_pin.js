// import bcrypt from "bcrypt";
const bcrypt = require("bcrypt");

const hash_pin = async (pin) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(pin, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

const compare_pin = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

module.exports = {
  hash_pin,
  compare_pin,
};
