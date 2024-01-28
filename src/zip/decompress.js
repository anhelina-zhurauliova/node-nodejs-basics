import { pipeline } from "stream";
import { createReadStream, createWriteStream } from "fs";
import { join } from "path";
import { createUnzip } from "zlib";

import { getCurrentDirectory } from "../utils/getCurrentDir.js";

const __dirname = getCurrentDirectory(import.meta.url);

const decompress = async () => {
  const filesFolder = join(__dirname, "files");
  const file = join(filesFolder, "archive.gz");
  const destinationFile = join(filesFolder, "fileToCompress.txt");

  pipeline(
    createReadStream(file),
    createUnzip(),
    createWriteStream(destinationFile),
    (err) => {
      err && console.error(err.message);
    }
  );
};

await decompress();
