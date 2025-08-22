const router = require("express").Router();
const { handleGenerateShortURL } = require("../controllers/url");
const { handleGetAnalytics } = require("../controllers/url");
router.post("/", handleGenerateShortURL);
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
