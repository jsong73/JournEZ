const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Transportation extends Model {}

Transportation.init(
    {
        transportation:{
        type: DataTypes.STRING,
        allowNull: false,
        },
        ride_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        },
        ride_cost: {
        type: DataTypes.DECIMAL,
        allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "transportation",
    }
);

module.exports = Transportation;