const { accessSync, constants } = require("fs");
module.exports = path => {
  try {
    accessSync(path, constants.R_OK | constants.W_OK);
    return true;
  } catch (err) {
    return false;
  }
};
