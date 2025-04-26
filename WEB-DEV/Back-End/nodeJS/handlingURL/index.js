const dotenv = require("dotenv");
const http = require("http");
const fs = require("fs");
const url = require("url");
dotenv.config();

const port = process.env.PORT;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl);
  fs.appendFile(
    "serverlog.txt",
    `${new Date().toISOString()} ${parsedUrl.path} ${JSON.stringify(
      parsedUrl.query
    )} \n`,
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        if (parsedUrl.pathname === "/") {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(`<h1>Welcome to the home page ${parsedUrl.query.name}</h1>`);
        } else if (parsedUrl.pathname === "/about") {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end("<h1>Welcome to the about page</h1>");
        } else if (parsedUrl.pathname === "/contact") {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end("<h1>Welcome to the contact page</h1>");
        } else {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end("<h1>404 Not Found</h1>");
        }
        console.log("URL logged successfully.");
      }
    }
  );
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
