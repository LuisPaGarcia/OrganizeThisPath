const { join } = require("path");
const { path, ext } = require("./config");
const AllFiles = require("./bin/path.getAllFileNames")(path);
const CreateDir = require("./bin/path.createDir");
const PathExist = require("./bin/path.existDir");
const MoveElement = require("./bin/path.moveFile");

const fs = require("fs");

for (var props in ext) {
  if (PathExist(join(path, ext[props].group)) == false)
    CreateDir(path, ext[props].group);
}

AllFiles.map(element => {
  if (fs.lstatSync(element.fileNameFull).isDirectory()) return;
  for (var Prop in ext) {
    if (ext[Prop].exts.includes(element.fileExt))
      MoveElement(
        element.fileNameFull,
        join(path, ext[Prop].group, element.fileName)
      );
  }
});
