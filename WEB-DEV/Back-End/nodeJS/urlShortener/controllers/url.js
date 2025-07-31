const { nanoId } = require("nanoid");
const url = require("../models/url");
async function handleGenerateShortURL(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ message: "badrequest" });
  }
  const shortID = nanoId(8);

  await url.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });
  return res.json({ id: shortID });
}

module.exports = handleGenerateShortURL;
