const { renameSync } = require("fs");

module.exports = (oldPath, newPath) => {
  if (!oldPath || !newPath) {
    console.log(`Parametro faltante`);
    return;
  }
  try {
    renameSync(oldPath, newPath);
    console.log(`Moviendo Archivo... ${oldPath}`);
  } catch (error) {
    console.log(error);
  }
};
