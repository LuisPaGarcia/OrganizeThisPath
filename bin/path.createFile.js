const fs = require("fs");
const { join } = require("path");

module.exports = (path, filename, ext, contentO) => {
  try {
    const content = contentO || "BABY, I WILL DIE FOR YOU";
    fs.writeFileSync(join(path, filename + ext), content);
    console.log(`Archivo ${filename}${ext} escrito.`);
  } catch (error) {
    console.log(error);
  }
};
