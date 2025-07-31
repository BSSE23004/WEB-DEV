const express = require("express");
const urlRoute = require("./routes/url");
const connectDB = require("./connectMongo");
const app = express();
const PORT = 8000;

connectDB("mongodb://localhost:27017/short-urls");
app.use(urlRoute);

app.listen(PORT, () => {
  console.log(`Your app is running at http://localhost:${PORT}`);
});
