const router = require("express").Router();
const handleGenerateShortURL = require("../controllers/url");
router.post("/", handleGenerateShortURL);

module.exports = router;
