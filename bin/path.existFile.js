const { existsSync } = require("fs");

module.exports = completePath => {
  try {
    return existsSync(completePath);
  } catch (error) {
    console.log(error);
    return false;
  }
};
