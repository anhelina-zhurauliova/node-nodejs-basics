import { Transform } from "stream";

const reverse = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, `${chunk.toString().split("").reverse().join("")}\n\n`);
  },
});

export const transform = async () => {
  process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();
