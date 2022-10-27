const sequelize = require("sequelize");

require("dotenv").config();

const sequelize = new Sequelize(
//path to the .env file so that info is hidden in .env file
process.env.DB_NAME,
process.env.DB_USER,
process.env.DB_PASSWORD,
{
host: "localhost",
dialect: "mysql",
port: 3306
}
);

module.exports = sequelize;