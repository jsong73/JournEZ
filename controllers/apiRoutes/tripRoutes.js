const router = require("express").Router();
const {
  Account,
  Activity,
  Flight,
  Hotel,
  Restaurant,
  Transportation,
  Trip,
} = require("../../models");

router.get("/", (req, res) => {
  res.send("Hello");
});

module.exports = router;
