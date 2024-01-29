import { createReadStream } from "fs";
import { join } from "path";

import { getCurrentDirectory } from "../utils/getCurrentDir.js";

const __dirname = getCurrentDirectory(import.meta.url);

const read = async () => {
  const fileToRead = join(__dirname, "files", "fileToRead.txt");
  let data = "";

  const readableStream = createReadStream(fileToRead, { encoding: "utf8" });

  readableStream.on("error", function (error) {
    process.stderr.write(error.message + "\n");
  });

  readableStream.on("data", (chunk) => {
    data += chunk;
  });

  readableStream.on("end", function () {
    process.stdout.write(data + "\n");
  });
};

await read();
