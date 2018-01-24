const CreateDir = require("../bin/path.createDir");
const CreateFile = require("../bin/path.createFile");
const DirExist = require("../bin/path.existDir");
const GetListOfFiles = require("../bin/path.getAllFileNames");
const { join } = require("path");

const newDir = join(__dirname, `TRAPTEST`);
CreateDir(__dirname, `TRAPTEST`);
CreateFile(newDir, `HIGHasFUCK1`, `.txt`, `SLOW SLOW`);
CreateFile(newDir, `HIGHasFUCK2`, `.txt`, `FAST DAST`);
CreateFile(newDir, `HIGHasFUCK3`, `.txt`);
CreateFile(newDir, `HIGHasFUCK4`, `.txt`);
CreateFile(newDir, `HIGHasFUCK5`, `.txt`);

GetListOfFiles(newDir).map(ele => {
  console.log(ele);
});
