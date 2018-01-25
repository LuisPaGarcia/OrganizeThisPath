const { join } = require("path");
const OriginPath = join(require("os").homedir(), "downloads");
let OriPathF = value => (join(OriginPath, value));


let config = {
  path: OriginPath,
  ext: {
    Documents: {
      exts: ["doc", "docx", "pdf", "xls", "xlsx", "ppt", "pptx", "pps", "csv"]
    },
    Compress: {
      exts: ["zip", "rar", "7z", "gz"]
    },
    Media: {
      exts: ["mp3", "mp4", "avi"]
    },
    Applications: {
      exts: ["exe", "msi"]
    },
    Images: {
      exts: ["jpg", "jpeg", "png", "gif"]
    },
    Torrents: {
      exts: ["torrent"]
    },
    ISO: {
      exts: ["iso"]
    },
    Keys: {
      exts: ["ppk", "pem"]
    },
    Development: {
      exts: ["sql"]
    }
  }
};

let configReady = config =>{
  for(var key in config.ext){
    config.ext[key].group = key;
    config.ext[key].destiny = OriPathF(config.ext[key].group);
  }
}
configReady(config)

module.exports = config
