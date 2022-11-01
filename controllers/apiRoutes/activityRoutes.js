const router = require("express").Router();
const{ Activity } = require("../../models");

// api/activity
router.get("/", async (req, res) => {
    try{
        const activityData = await Activity.findAll({
            include: [
                {
                    model: Activity
                },
            ],
        });
        const activity = activityData.map((data) => data.get({plain: true }));
        res.status(200).json(activity);
        console.log(activity);
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;