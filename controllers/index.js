const router = require("express").Router();
const accountRoutes = require("./accountRoutes");
const activityRoutes = require("./activityRoutes");

router.use("/api/account", accountRoutes);
router.use("/api/activity", activityRoutes);

router.get("/", async (req, res) => {
    try{
    res.render("homepage")
    } catch(err){
    res.status(400).json(err)
    }
});

module.exports = router;