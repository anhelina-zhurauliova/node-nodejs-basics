import { mkdir, readdir, copyFile } from "fs/promises";
import { existsSync } from "fs";
import { dirname, join } from "path";
import { FSError } from "../utils/error.js";
import { fileURLToPath } from "url";

// TODO: move to the util fn
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
