import { readdir } from "fs/promises";
import { existsSync } from "fs";
import { dirname, join } from "path";
import { FSError } from "../utils/error.js";
import { fileURLToPath } from "url";

// TODO: move to the util fn
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
