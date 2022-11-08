const router = require("express").Router();
const apiRoutes = require("./apiRoutes");
const pageRoutes = require("./pagesRoutes");

router.use("/", pageRoutes);
router.use("/api", apiRoutes);

module.exports = router;
