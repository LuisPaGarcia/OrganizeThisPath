const getAllFileNames = require("../bin/path.getAllFileNames");
const { join } = require("path");

console.log(getAllFileNames(join(__dirname, "TEST")));
