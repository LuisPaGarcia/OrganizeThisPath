// Return TRUE  si creo una carpeta
// Return FALSE si no creo la carpeta (Ya existe)
// Path:        Path donde se creara la carpeta
// folderName:  Nombre del folder a crear

const { mkdirSync } = require("fs");
const pathExist = require("./path.existDir");
const { join } = require("path");

module.exports = (path, folderName) => {
  try {
    let PathTo = join(path, folderName);
    if (pathExist(PathTo) == false) {
      mkdirSync(join(path, folderName));
      console.log(`Se ha creado la carpeta ${folderName}`);
      return true;
    } else {
      console.log(`Esta carpeta ya existe ${folderName}`);
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};
