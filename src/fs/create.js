import { writeFile } from "fs/promises";
import { existsSync } from "fs";
import { join } from "path";

import { FSError } from "../utils/error.js";
import { getCurrentDirectory } from "../utils/getCurrentDir.js";

const __dirname = getCurrentDirectory(import.meta.url);

const create = async () => {
  const newFilePath = join(__dirname, "files/fresh.txt");
  const fileContent = "I am fresh and young";

  try {
    if (existsSync(newFilePath)) {
      throw new FSError();
    } else {
      await writeFile(newFilePath, fileContent);
    }
  } catch (e) {
    console.error(e);
  }
};

await create();
