const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Welcome to Mizan AI Backend!");
});

server.listen(3000, () => {
  console.log("Mizan AI backend is running on port 3000.");
});
