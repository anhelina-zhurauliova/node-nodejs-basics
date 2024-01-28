import { rm } from "fs/promises";
import { existsSync } from "fs";
import { dirname, join } from "path";
import { FSError } from "../utils/error.js";
import { fileURLToPath } from "url";

// TODO: move to the util fn
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
