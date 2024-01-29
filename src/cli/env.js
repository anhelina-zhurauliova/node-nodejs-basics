export const parseEnv = () => {
  const parsedEnv = [];

  for (const variable in process.env) {
    if (variable.includes("RSS_")) {
      parsedEnv.push(`${variable}=${process.env[variable]}`);
    }
  }

  if (parsedEnv.length > 0) {
    console.log(parsedEnv.join("; "));
  }
};

parseEnv();
