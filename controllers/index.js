const router = require("express").Router();
const accountRoutes = require("./accountRoutes");

router.use("/api/account", accountRoutes);

router.get("/", async (req, res) => {
    try{
    res.render("homepage")
    } catch(err){
    res.status(400).json(err)
    }
});

module.exports = router;