const router = require("express").Router();
const { Account } = require("../models");

router.get("/", async (req, res) => {
    try{
        const accountData = await Account.findAll();
        const serializedData = accountData.map((account) => account.get({ plain: true}));
        console.log(serializedData)
        res.render("signup", {serializedData})
    } catch (err) {
        res.status(400).json(err);
    }
})

router.post("/", async (req, res) => {
    try{
        const accountData = await Account.create(req.body)
        res.status(200).json({ msg: "Account was successfully created!", accountData})
    } catch(err){
        res.status(400).json(err)
    }
});

module.exports = router;