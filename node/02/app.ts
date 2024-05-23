import { createServer } from "http";
import { fork } from "child_process";

const server = createServer();

server.on("request", (req, res) => {
  if (req.url === "/fibo") {
    const forked = fork("fibo.ts");
    forked.send("start");
    forked.on("message", (result) => {
      res.end(`${result}`);
    });
  } else {
    res.end("OK\n");
  }
});

server.listen(9000);
