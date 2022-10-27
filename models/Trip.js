const { Model, DataTypes } = require("sequelize");
const sequelize= require("../config/connection")

class Trip extends Model {}

Trip.init(
    {
        trip_name:{
        type: DataTypes.STRING,
        allowNull: true,
        },
        user_id:{
        type: DataTypes.INTEGER,
        allowNull: true,
        },
        activity_id:{
        type: DataTypes.INTEGER,
        allowNull: true,
        },
        transportation_id:{
        type: DataTypes.INTEGER,
        allowNull: true,
        },
        flight_id:{
        type: DataTypes.INTEGER,
        allowNull: true,
        },
        hotel_id:{
        type: DataTypes.INTEGER,
        allowNull: true,
        },
        restaurant_id:{
        type: DataTypes.INTEGER,
        allowNull: true,    
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "trip"
    }
);

module.exports = Trip;