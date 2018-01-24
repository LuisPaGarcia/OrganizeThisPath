const { join } = require("path");
const MoveFile = require("../bin/path.moveFile");

MoveFile(
  join(__dirname, "from", "30hours.txt"),
  join(__dirname, "to", "30hours.txt")
);
