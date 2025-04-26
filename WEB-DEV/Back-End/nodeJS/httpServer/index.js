const http = require("http");
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config(); // Load environment variables from .env file

const myServer = http.createServer((req, res) => {
  const log = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
  fs.appendFile("server.log", log, (err, data) => {
    console.log("New Request Received!");
    console.log(req);
    switch (req.url) {
      case "/":
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Welcome to the Home Page</h1>"); // sending HTML response means server-side rendering
        break;
      case "/about":
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>About Us</h1>");
        break;
      default:
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 Not Found</h1>");
        break;
    }
    if (err) {
      console.error("Error writing to log file", err);
    } else {
      console.log("Log entry added:", log.trim());
    }
  });
});

const PORT = process.env.PORT;
myServer.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
