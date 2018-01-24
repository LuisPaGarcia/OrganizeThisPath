const { join } = require("path");

const FileExist = require("../bin/path.existFile");

console.log(__filename, FileExist(__filename));
