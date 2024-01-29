import { readdir } from "fs/promises";
import { existsSync } from "fs";
import { join } from "path";

import { FSError } from "../utils/error.js";
import { getCurrentDirectory } from "../utils/getCurrentDir.js";

const __dirname = getCurrentDirectory(import.meta.url);

const list = async () => {
  const filesFolder = join(__dirname, "files");

  try {
    if (!existsSync(filesFolder)) {
      throw new FSError();
    } else {
      await readdir(filesFolder).then((files) => {
        files.forEach(async (fileName, index) =>
          console.log(index + 1 + " file:", fileName)
        );
      });
    }
  } catch (e) {
    console.error(e);
  }
};

await list();
