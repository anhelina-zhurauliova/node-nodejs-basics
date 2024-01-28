import { readFile } from "fs/promises";
import { existsSync } from "fs";
import { dirname, join } from "path";
import { FSError } from "../utils/error.js";
import { fileURLToPath } from "url";

// TODO: move to the util fn
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
