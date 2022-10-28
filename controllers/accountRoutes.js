const router = require("express").Router();
const { Account } = require("../models");

router.post("/", async (req, res) => {
    try{
        const accountData = await Account.create(req.body)
        res.status(200).json({ msg: "Account was successfully created!", accountData})
    } catch(err){
        res.status(400).json(err)
    }
});

module.exports = router;