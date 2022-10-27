const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection")

class Activity extends Model {}

Activity.init(
    {
        activity: {
        type: DataTypes.STRING,
        allowNull: false,
    },
        activity_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
        activity_cost:{
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "activity",
    }
);

module.exports = Activity;