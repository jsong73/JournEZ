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

router.get("/", async (req, res) => {
  try {
    const tripsData = await Trip.findAll({
      include: [
        {
          model: Account,
          attributes: { exclude: "password" },
        },
        {
          model: Activity,
        },
        {
          model: Flight,
        },
        {
          model: Hotel,
        },
        {
          model: Restaurant,
        },
        {
          model: Transportation,
        },
      ],
    });
    const trips = tripsData.map((data) => data.get({ plain: true }));
    console.log(trips);
    res.render('homepage', {trips})
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", async (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signin", async (req, res) => {
  try{
    res.render("signin");
  } catch (err) {
    res.status(500).json(err)
  }
});


module.exports = router;
