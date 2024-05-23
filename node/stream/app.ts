import path from "path";
import { readFile, createReadStream } from "fs";
import { createServer } from "http";

const server = createServer();

// not efficient version
// server.on("request", (req, res) => {
//   readFile(path.join(__dirname, "big.file"), (err, data) => {
//     if (err) {
//       throw new Error(`${err}`);
//     }
//     res.end(data);
//   });
// });

// efficient solution
server.on("request", (req, res) => {
  const source = createReadStream(path.join(__dirname, "big.file"));
  source.pipe(res);
});

server.listen(8000);
