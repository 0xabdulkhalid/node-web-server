const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = "localhost";
const port = "8080";

const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".png": "image/png",
};

const server = http.createServer((req, res) => {
  let filePath = `.${req.url === "/" ? "/index" : req.url}`;

  if (!path.extname(filePath)) {
    filePath += ".html";
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      fs.readFile("./404.html", (err, content) => {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end(content, "utf-8");
      });
    } else {
      res.writeHead(200, { "Content-type": mimeTypes[path.extname(filePath)] });
      res.end(content, "utf-8");
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});
