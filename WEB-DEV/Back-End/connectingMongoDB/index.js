const express = require("express");
const connectDB = require("./databaseConnection.js");
const userRoutes = require("./routes/routes.js"); // Importing the userRoutes to handle user-related routes.

const app = express();
const port = 3000;

app.use(express.json()); // this line should be above the routes to ensure that the request body is parsed before it reaches the routes.
app.use("/api", userRoutes); // Using the userRoutes to handle user-related routes.

connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to the Express.js server!");
});

app.listen(port, () => {
  console.log(`Your app listening at http://localhost:${port}`);
});
