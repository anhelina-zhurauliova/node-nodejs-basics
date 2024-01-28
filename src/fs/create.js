import { writeFile, access, constants } from "fs/promises";
import { existsSync } from "fs";
import { dirname, join } from "path";
import { FSError } from "../utils/error.js";
import { fileURLToPath } from "url";

// TODO: move to the util fn
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
