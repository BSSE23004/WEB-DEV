const shortId = require("shortid");
const url = require("../models/url");
async function handleGenerateShortURL(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ message: "badrequest" });
  }
  const shortID = shortId(8);

  await url.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });
  return res.json({ id: shortID });
}

async function handleGetAnalytics(req, res) {
  const shortID = req.params.shortId;
  const result = await url.findOne({ shortId: shortID });
  if (!result) {
    return res.status(404).json({ message: "not found" });
  }
  res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = { handleGenerateShortURL, handleGetAnalytics };
