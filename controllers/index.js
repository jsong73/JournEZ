const router = require("express").Router();
const accountRoutes = require("./accountRoutes");
const apiRoutes = require("./apiRoutes");
const pageRoutes = require("./pagesRoutes");

router.use("/", pageRoutes);
router.use("/api/account", accountRoutes);
router.use("/api", apiRoutes);

module.exports = router;
