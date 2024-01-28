import { existsSync } from "fs";
import { rename as fs_rename } from "fs/promises";
import { dirname, join } from "path";
import { FSError } from "../utils/error.js";
import { fileURLToPath } from "url";

// TODO: move to the util fn
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
