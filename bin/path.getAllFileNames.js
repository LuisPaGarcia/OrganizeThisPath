const { join } = require("path");

const { readdirSync } = require("fs");
const { extname } = require("path");
const pathExist = require("./path.existDir");
module.exports = path => {
  try {
    if (pathExist(path)) {
      let AllFileNames = readdirSync(path);
      let AllFileNamesPath = AllFileNames.map(element => {
        return {
          fileName: element,
          fileNameFull: join(path, element),
          fileExt: (extname(element).split(".")[1] + "").toLowerCase()
        };
      });
      return AllFileNamesPath;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};
