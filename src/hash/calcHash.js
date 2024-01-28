import crypto from "crypto";
import { readFile } from "fs/promises";
import { join } from "path";

import { getCurrentDirectory } from "../utils/getCurrentDir.js";

const __dirname = getCurrentDirectory(import.meta.url);

const calculateHash = async () =>
  readFile(join(__dirname, "files", "fileToCalculateHashFor.txt"), "utf8").then(
    (fileContent) => {
      const hash = crypto
        .createHash("sha256")
        .update(fileContent)
        .digest("hex");

      console.log("hash:", hash);

      return hash;
    }
  );

await calculateHash();
