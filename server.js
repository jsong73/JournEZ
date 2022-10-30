//importing express library
const express = require("express")
const app = express();
//importing the connection.js file
const sequelize = require("./config/connection")
//importing the models folder
const Model = require("./models");
//connect to the available port if not specified use port 3000
const PORT = process.env.PORT || 3002;
//importing controllers folder
const controllers = require("./controllers")
//importing path node library
const path = require('path');
// Import express-handlebars
const exphbs = require("express-handlebars")
const hbs = exphbs.create({});
// The following two lines of code are setting Handlebars.js as the default template engine.
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//if using POST request you need to use these two lines of code
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(controllers)

//connecting public folder, front end to server
app.use(express.static(path.join(__dirname, 'public')));


//to connect to port using express
sequelize.sync({force: false}).then(() => {
    app.listen(PORT, (err) => 
    console.log(`listening to port ${PORT}`));
});