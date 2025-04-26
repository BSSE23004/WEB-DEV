const express = require("express");
const env = require("dotenv");
const connectDB = require("./config/db.js");
const productRoutes = require("./routes/productRoutes.js");

const app = express();
env.config();
app.use(express.json());

const port = process.env.PORT;
app.get("/", (req, res) => {
  res.send("Hello World!");
});
connectDB(); // Connect to MongoDB

app.use("/api", productRoutes); // Use the product routes
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
