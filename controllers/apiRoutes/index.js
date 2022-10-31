const router = require("express").Router();
const tripRoutes = require("./tripRoutes");
const accountRoutes = require("./accountRoutes");

router.use("/account", accountRoutes);
router.use("/trips", tripRoutes);

module.exports = router;
