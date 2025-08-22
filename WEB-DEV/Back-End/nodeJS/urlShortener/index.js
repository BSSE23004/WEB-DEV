const express = require("express");
const urlRoute = require("./routes/url");
const url = require("./models/url");
const connectDB = require("./connectMongo");
const app = express();
const PORT = 8000;
connectDB("mongodb://localhost:27017/short-urls");
app.use(express.json());
app.use(urlRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await url.findOneAndUpdate(
    { shortId },
    { $push: { visitHistory: { timestamp: Date.now() } } }
  );
  res.redirect(entry.redirectURL);
});
app.listen(PORT, () => {
  console.log(`Your app is running at http://localhost:${PORT}`);
});
