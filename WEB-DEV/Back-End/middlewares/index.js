//middleware is a function after request and before response
//it is used to validate, modify , or log the request

const express = require("express");
const { route } = require("./routes/routes");
const app = express();

const port = 3000;

app.use(express.json()); //loading built-in middleware to parse JSON data

// //middleware to log the request
// const loggingMiddleware = (req, res, next) => {
//   console.log("Logging in....");
//   next();
// };

// //middleware to auth the request
// const authMiddleware = (req, res, next) => {
//   console.log("Authenticating....");
//   res.send("Unauthorized"); //This will stop the res req cycle and send the response to the client
//   //   next();
// };

// //middleware to validate the request
// const validateMiddleware = (req, res, next) => {
//   console.log("Validating....");
//   next();
// };

//All these middlewares will execute for every request made to the server

// //this order matters
// app.use(loggingMiddleware); //using middleware to log the request
// app.use(authMiddleware); //using middleware to auth the request
// app.use(validateMiddleware); //using middleware to validate the request

//middlewares must be above the route handler
app.get("/", (req, res) => {
  console.log(req.body);
  res.send("Hello World!");
});

const routes = require("./routes/routes"); //importing routes from routes.js file

app.use("/api", routes); //using the routes in the app

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
