import os from "os";
import { createServer } from "http";
import cluster from "cluster";

const server = createServer();
const totalCpus = os.cpus().length;

const fibonacci = (n: number): number => {
  if (n === 0 || n === 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

if (cluster.isPrimary) {
  console.log(`Total cpus: ${totalCpus}`);
  console.log(`Primary PID: ${process.pid}`);

  for (let index = 0; index < 3; index++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    console.log("fork another worker");
    cluster.fork();
  });
} else {
  console.log(`Worker ${process.pid} - started`);
  server.on("request", (req, res) => {
    if (req.url === "/hello") {
      res.end("Hello");
    }
    if (req.url === "/cpus") {
      let count = 0;

      const n = 5000000000;

      for (let i = 0; i <= n; i++) {
        count += i;
      }
      res.end(JSON.stringify(count));
    }
  });

  server.listen(8000, () => {
    console.log("listenning on port - 8000");
  });
}
