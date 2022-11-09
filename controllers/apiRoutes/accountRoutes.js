const router = require("express").Router();
const { Account } = require("../../models");
const bcrypt = require("bcrypt");

//api/account
router.post("/", async (req, res) => {
  try {
    const accountData = await Account.create(req.body);
    accountData.password = await bcrypt.hash(req.body.password, 10);

    req.session.save(() => {
      req.session.loggedIn = true;
      res
        .status(200)
        .json({ msg: "Account was successfully created!", accountData });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/signin", async (req, res) => {
  try {
    const accountData = await Account.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (!accountData) {
      res
        .status(400)
        .json({ msg: "No account found! Please check username or password." });
      return;
    }
    const validPassword = await accountData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ msg: "No account found! Please check username or password." });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json({ msg: "You are now logged in!", accountData });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/logout", (req, res) => {
  try {
    res.status(200).end();
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
