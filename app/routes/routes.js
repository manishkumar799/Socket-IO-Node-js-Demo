const express = require("express");

const router = express.Router();
router.get("/", function (req, res) {
  req.io.emit("res", "GRT");
  res.send("404");
});

module.exports = router;
