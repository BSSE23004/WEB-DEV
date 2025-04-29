const express = require("express");
const routes = require("./routes/mainRoutes");
const dotenv = require("dotenv");
const http = require("http");
const app = express();
dotenv.config();

app.use(express.json());

app.use("/api", routes);

const server = http.createServer(app);

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/api`);
});
