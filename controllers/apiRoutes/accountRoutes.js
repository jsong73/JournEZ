const router = require("express").Router();
const { Account } = require("../../models");
const bcrypt = require("bcrypt");
//api/account
router.get("/", async (req, res) => {
    try{
        const accountData = await Account.findAll();
        console.log(accountData);
        res.status(200).json(accountData)
    } catch (err) {
        res.status(500).json(err);
    }
});
        //         const serializedData = accountData.map((account) => account.get({ plain: true}));
//         console.log(serializedData)
//         res.render("signup", {serializedData})
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

router.post("/", async (req, res) => {
    try{
        const accountData = await Account.create(req.body)
        accountData.password = await bcrypt.hash(req.body.password, 10)
        res.status(200).json({ msg: "Account was successfully created!", accountData})
    } catch(err){
        res.status(400).json(err)
    }
});

router.post("/signin", async (req, res) => {
   try{
        const accountData = await Account.findOne({
            where:{
              username: req.body.username,  
              password: req.body.password,
            },
        });
        if(!accountData){
            res.status(400).json({ msg: "No account found! Please check username or password."})
            return;
        }
        res.status(200).json(accountData);
    } catch (err) {
        res.status(400).json(err)
    }
   
});

//if account user name is already taken 

module.exports = router;