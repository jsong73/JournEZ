const express = require("express")
const app = express();
//connect to the available port if not specified use port 3000
const PORT = process.env.PORT || 3002;

//if using POST request you need to use these two lines of code
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/", (req, res) => {
res.send("HELLO")
})

//to connect to port using express
app.listen(PORT, (err) => 
console.log(`listening to port ${PORT}`));
