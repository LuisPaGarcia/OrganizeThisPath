const path = require("path");
const { join } = require("path");
const OriginPath = path.join(require("os").homedir(), "downloads");
let OriPathF = value => (join(OriginPath), value);
module.exports = {
  path: OriginPath,
  ext: {
    Documents: {
      group: "Documents",
      exts: ["doc", "docx", "pdf", "xls", "xlsx", "ppt", "pptx", "pps", "csv"],
      destiny: OriPathF("Documents")
    },
    Compress: {
      group: "Compress",
      exts: ["zip", "rar", "7z", "gz"],
      destiny: OriPathF("Compress")
    },
    Media: {
      group: "Media",
      exts: ["mp3", "mp4", "avi"],
      destiny: OriPathF("Media")
    },
    Applications: {
      group: "Applications",
      exts: ["exe", "msi"],
      destiny: OriPathF("Applications")
    },
    Images: {
      group: "Images",
      exts: ["jpg", "jpeg", "png", "gif"],
      destiny: OriPathF("Images")
    },
    Torrents: {
      group: "Torrents",
      exts: ["torrent"],
      destiny: OriPathF("Torrents")
    },
    ISO: {
      group: "ISO",
      exts: ["iso"],
      destiny: OriPathF("iso")
    },
    Keys: {
      group: "Keys AWS",
      exts: ["ppk", "pem"],
      destiny: OriPathF("Keys AWS")
    },
    Development: {
      group: "Development",
      exts: ["sql"],
      destiny: OriPathF("Development")
    }
  }
};
