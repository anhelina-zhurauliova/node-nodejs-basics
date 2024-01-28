import { pipeline } from "stream";
import { createReadStream, createWriteStream } from "fs";
import { join } from "path";
import { createGzip } from "zlib";

import { getCurrentDirectory } from "../utils/getCurrentDir.js";

const __dirname = getCurrentDirectory(import.meta.url);

const compress = async () => {
  const filesFolder = join(__dirname, "files");
  const file = join(filesFolder, "fileToCompress.txt");
  const destinationFile = join(filesFolder, "archive.gz");

  pipeline(
    createReadStream(file),
    createGzip(),
    createWriteStream(destinationFile),
    (err) => {
      err && console.error(err.message);
    }
  );
};

await compress();
