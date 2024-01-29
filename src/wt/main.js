import { Worker } from "worker_threads";
import { cpus } from "os";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const formatStatus = (status) => {
  switch (status) {
    case "rejected":
      return "error";
    case "fulfilled":
      return "resolved";
  }
};

const performCalculations = async () => {
  const workers = cpus().map(
    (_, index) =>
      new Promise((resolve, reject) => {
        const worker = new Worker(join(__dirname, "worker.js"), {
          workerData: 10 + index,
        });

        worker.on("message", resolve);
        worker.on("error", reject);
      })
  );

  const data = await Promise.allSettled(workers);
  console.log(
    "Result:",
    data.map(({ status, value }) => ({
      status: formatStatus(status),
      data: value,
    }))
  );
};

await performCalculations();
