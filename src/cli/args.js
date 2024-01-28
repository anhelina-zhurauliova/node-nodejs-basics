export const parseArgs = () => {
  const args = process.argv.slice(2);

  args.forEach((arg, index) => {
    arg.includes("--") &&
      process.stdout.write(
        `${arg.replace("--", "")} is ${args[index + 1]}${
          index !== args.length - 2 ? ", " : ""
        }`
      );
  });

  process.stdout.write("\n");
};

parseArgs();
