import { dirname } from "path";
import { fileURLToPath } from "url";

export const getCurrentDirectory = (metaUrl) => {
  const __filename = fileURLToPath(metaUrl);

  return dirname(__filename);
};
