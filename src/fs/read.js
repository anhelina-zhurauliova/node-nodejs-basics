import { readFile } from "fs/promises";
import { existsSync } from "fs";
import { join } from "path";

import { FSError } from "../utils/error.js";
import { getCurrentDirectory } from "../utils/getCurrentDir.js";

const __dirname = getCurrentDirectory(import.meta.url);

const read = async () => {
  const fileToRead = join(__dirname, "files", "fileToRead.txt");

  try {
    if (!existsSync(fileToRead)) {
      throw new FSError();
    } else {
      await readFile(fileToRead, "utf8").then((fileContent) =>
        console.log(fileContent)
      );
    }
  } catch (e) {
    console.error(e);
  }
};

await read();
