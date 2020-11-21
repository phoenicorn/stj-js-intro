const http = require("http");

const fs = require("fs");

http
  .createServer((req, res) => {
    const users = JSON.parse(fs.readFileSync("./users.json"));
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(users));
    res.end();
  })
  .listen(8080);
