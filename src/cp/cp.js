import { spawn } from "child_process";
import { join } from "path";

import { getCurrentDirectory } from "../utils/getCurrentDir.js";

const __dirname = getCurrentDirectory(import.meta.url);

const testArgs = ["test", "child", "process"];

export const spawnChildProcess = async (args) => {
  const scriptFile = join(__dirname, "files", "script.js");

  spawn("node", [scriptFile, ...args], {
    stdio: [0, 1, 2, "ipc"],
  });
};

spawnChildProcess(testArgs);
