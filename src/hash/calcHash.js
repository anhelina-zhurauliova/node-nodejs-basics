import crypto from "crypto";
import { Transform } from "stream";
import { createReadStream } from "fs";
import { join } from "path";

import { getCurrentDirectory } from "../utils/getCurrentDir.js";

const __dirname = getCurrentDirectory(import.meta.url);

const hashFn = new Transform({
  transform(chunk, encoding, callback) {
    callback(
      null,
      crypto.createHash("sha256").update(chunk).digest("hex") + "\n"
    );
  },
});

const calculateHash = async () => {
  const fileToHash = join(__dirname, "files", "fileToCalculateHashFor.txt");
  const readableStream = createReadStream(fileToHash, { encoding: "utf8" });

  readableStream.pipe(hashFn).pipe(process.stdout);
};

await calculateHash();
