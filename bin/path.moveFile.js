const { renameSync } = require("fs");
const { basename, dirname  } = require('path');

module.exports = (oldPath, newPath) => {
  if (!oldPath || !newPath) {
    console.log(`Parametro faltante`);
    return;
  }
  try {
    renameSync(oldPath, newPath);
    console.log(`mv ${basename(oldPath)}  ->  ${basename(dirname(newPath))}`);
  } catch (error) {
    console.log(error);
  }
};
