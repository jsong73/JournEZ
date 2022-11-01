const router = require("express").Router();
const tripRoutes = require("./tripRoutes");
const accountRoutes = require("./accountRoutes");
const activityRoutes = require("./activityRoutes");
const flightRoutes = require("./flightRoutes");
const hotelRoutes = require("./hotelRoutes");

router.use("/account", accountRoutes);
router.use("/trips", tripRoutes);
router.use("/activity", activityRoutes);
router.use("/flight", flightRoutes);
router.use("/hotel", hotelRoutes);


module.exports = router;
