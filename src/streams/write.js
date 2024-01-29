import { createWriteStream } from "fs";
import { join } from "path";

import { getCurrentDirectory } from "../utils/getCurrentDir.js";

const __dirname = getCurrentDirectory(import.meta.url);

const write = async () => {
  const fileToWrite = join(__dirname, "files", "fileToWrite.txt");
  const writableStream = createWriteStream(fileToWrite);

  process.stdin.pipe(writableStream);
};

await write();
