import { rm } from "fs/promises";
import { existsSync } from "fs";
import { join } from "path";

import { FSError } from "../utils/error.js";
import { getCurrentDirectory } from "../utils/getCurrentDir.js";

const __dirname = getCurrentDirectory(import.meta.url);

const remove = async () => {
  const fileToRemove = join(__dirname, "files", "fileToRemove.txt");

  try {
    if (!existsSync(fileToRemove)) {
      throw new FSError();
    } else {
      await rm(fileToRemove);
    }
  } catch (e) {
    console.error(e);
  }
};

await remove();
