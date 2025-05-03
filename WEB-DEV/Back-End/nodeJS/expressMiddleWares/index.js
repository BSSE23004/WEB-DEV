const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const fs = require("fs");
app.use(express.json());
const port = process.env.PORT;

const router = express.Router();

const middleware1 = (req, res, next) => {
  console.log("Middleware 1 executed");
  req.userName = "ibrahimsattar2006@gmail.com"; // Adding a property to the request object
  next();
};

const middleware2 = (req, res, next) => {
  console.log("Middleware 2 executed");
  console.log("User Name:", req.userName); // Accessing the property added by middleware1
  next();
};

const chechekingTimeMidddleware = (req, res, next) => {
  const currentTime = new Date().toLocaleTimeString();
  console.log("Current Time:", currentTime);
  req.currentTime = currentTime; // Adding a property to the request object
  next();
};

const loggingMiddleware = (req, res, next) => {
  const log = `${req.currentTime} - ${req.method} ${req.url}\n`;
  fs.appendFile("serverlog.txt", log, (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
    }
  });
  next();
};

router.get(
  "/",
  middleware1,
  middleware2,
  chechekingTimeMidddleware,
  loggingMiddleware,
  (req, res) => {
    console.log("Route handler executed");
    res.send("Hello World!");
  }
);

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
