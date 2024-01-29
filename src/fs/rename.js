import { existsSync } from "fs";
import { rename as fs_rename } from "fs/promises";
import { join } from "path";

import { FSError } from "../utils/error.js";
import { getCurrentDirectory } from "../utils/getCurrentDir.js";

const __dirname = getCurrentDirectory(import.meta.url);

const rename = async () => {
  const filesFolder = join(__dirname, "./files");
  const file = join(filesFolder, "wrongFilename.txt");
  const updatedFile = join(filesFolder, "properFilename.md");

  const isFileExist = existsSync(file);
  const isAlreadyRenamed = existsSync(updatedFile);

  try {
    if (!isFileExist || isAlreadyRenamed) {
      throw new FSError();
    } else {
      await fs_rename(file, updatedFile);
    }
  } catch (e) {
    console.error(e);
  }
};

await rename();
