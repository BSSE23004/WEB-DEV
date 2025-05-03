const dotenv = require("dotenv");
const http = require("http");
const express = require("express");
dotenv.config();
const app = express();
const port = process.env.PORT;

const router = express.Router();

//Headers are key-value pairs sent by the server in response to a client's request. They provide additional information about the response, such as content type, caching directives, authentication tokens, and more.
//Headers are used to convey metadata about the request or response, allowing clients and servers to communicate effectively and understand how to handle the data being exchanged.

router.get("/", (req, res) => {
  console.log(req.headers);
  //Best practice is touse "X" prefix for custom headers
  res.setHeader("X-MyName", "Ibrahim Sattar");
  res.send("Hello Bitches!");
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
