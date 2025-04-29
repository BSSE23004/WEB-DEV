const http = require("http");
const fs = require("fs");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  fs.appendFile(
    "log.txt",
    `${new Date().toISOString()} ${req.method} ${req.url}\n`,
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        if (req.url === "/") {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(`<h1>Welcome to the home page</h1>`);
        } else if (req.url === "/about") {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end("<h1>Welcome to the about page</h1>");
        } else if (req.url === "/contact") {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end("<h1>Welcome to the contact page</h1>");
        } else if (req.method === "POST" && req.url === "/submit") {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end("<h1>Form submitted successfully</h1>");
        } else if (req.method == "GET" && req.url == "/getData") {
          res.writeHead(200, { "Content-Type": "application/json" });
          const data = { name: "John Doe", age: 30 };
          res.end(JSON.stringify(data));
        } else {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end("<h1>404 Not Found</h1>");
        }
        console.log("URL logged successfully.");
      }
    }
  );
});

server.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
