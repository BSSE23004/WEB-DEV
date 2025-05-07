const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./models/db"); // Import the database connection module
dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded request body
app.use(express.json()); // Middleware to parse JSON request body
const port = process.env.PORT;

const userRoutes = require("./routes/userRoutes"); // Import the user routes
app.use(userRoutes); // Use the user routes for API endpoints

connectDB(); // Connect to the database
app.get("/", (req, res) => {
  res.send("<h1>Home Page!</h1>");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
