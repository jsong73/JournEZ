const router = require("express").Router();
const { Account } = require("../../models");

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
        res.status(200).json({ msg: "Account was successfully created!", accountData})
    } catch(err){
        res.status(400).json(err)
    }
});

router.post("/signin", async (req, res) => {
   try{
        const accountData = await Account.findOne({
            where:{
              username: req.params.username,  
              password: req.params.password,
            },
        });

        if(!accountData){
            res.status(400).json({ msg: "No account found! Please check username or password."})
            return;
        }
        res.status(200).json(accountData);
    }catch (err) {
        res.status(500).json(err)
    }
   
});

module.exports = router;