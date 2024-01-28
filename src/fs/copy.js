import { mkdir, readdir, copyFile } from "fs/promises";
import { existsSync } from "fs";
import { join } from "path";

import { FSError } from "../utils/error.js";
import { getCurrentDirectory } from "../utils/getCurrentDir.js";

const __dirname = getCurrentDirectory(import.meta.url);

const copy = async () => {
  const destinationFolder = join(__dirname, "files_copy");
  const filesFolder = join(__dirname, "./files");

  try {
    if (existsSync(destinationFolder)) {
      throw new FSError();
    } else {
      await mkdir(destinationFolder);

      await readdir(filesFolder).then((files) => {
        files.forEach(async (file) =>
          copyFile(join(filesFolder, file), join(destinationFolder, file))
        );
      });
    }
  } catch (e) {
    console.error(e);
  }
};

await copy();
